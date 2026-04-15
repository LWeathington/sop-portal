"""
SOP Cleanup v2 — Aggressive uniformity pass.

Goals:
1. Every file starts with ONLY `# Title` (from index.json) — no duplicates.
2. All pandoc bracket artifacts stripped: {.underline}, {.mark}, {key=val}, etc.
3. Google Docs URLs removed — keep only the link text.
4. Scribehow URLs removed.
5. Escaped markdown chars cleaned: \-, \*, \[, \], \\, etc.
6. Lines that are just "## single bullet point text" get demoted to bullet points.
7. Known boilerplate removed ("Spot On TMS", "Standard Operating Procedure", etc.)
8. Consistent heading hierarchy: H2 for sections, H3 for sub-sections, nothing should be a rogue H2 that reads like a bullet point.
9. Remove stray HTML comments like <!-- -->
10. Remove trailing backslashes that pandoc leaves for line breaks — use proper line breaks.
11. Clean up empty heading lines.
12. Normalize line endings and excess blank lines.
"""

import json
import os
import re


def load_index():
    with open('sops/index.json', 'r', encoding='utf-8') as f:
        return json.load(f)


def clean_file(filepath, title):
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()

    # Normalize line endings
    text = text.replace('\r\n', '\n').replace('\r', '\n')

    # ── STEP 1: Remove ALL pandoc span attributes ──
    # [text]{.underline}  →  text
    # [text]{.mark}       →  text
    # [text]{anything}    →  text
    text = re.sub(r'\[([^\]]*?)\]\{[^}]*?\}', r'\1', text)

    # ── STEP 2: Remove Google Docs / Google Sheets / Scribehow full URLs ──
    # Pattern: [link text](https://docs.google.com/...) → link text
    # Pattern: [link text](https://script.google.com/...) → link text
    text = re.sub(r'\[([^\]]*?)\]\(https?://docs\.google\.com[^\)]*\)', r'\1', text)
    text = re.sub(r'\[([^\]]*?)\]\(https?://script\.google\.com[^\)]*\)', r'\1', text)
    text = re.sub(r'\[([^\]]*?)\]\(https?://scribehow\.com[^\)]*\)', r'\1', text)

    # Standalone Google Docs / Sheets / Scribehow URLs on their own line
    text = re.sub(r'^https?://docs\.google\.com/[^\n]*$', '', text, flags=re.MULTILINE)
    text = re.sub(r'^https?://script\.google\.com/[^\n]*$', '', text, flags=re.MULTILINE)
    text = re.sub(r'^https?://scribehow\.com/[^\n]*$', '', text, flags=re.MULTILINE)

    # Parenthesized standalone URLs: (https://docs.google.com/...)
    text = re.sub(r'\(https?://docs\.google\.com/[^\)]*\)', '', text)
    text = re.sub(r'\(https?://script\.google\.com/[^\)]*\)', '', text)

    # ── STEP 3: Remove pandoc header anchors ──
    text = re.sub(r'\s*\{#[^}]*\}', '', text)

    # ── STEP 4: Clean escaped markdown characters from pandoc ──
    text = re.sub(r'\\([*\[\]\\>])', r'\1', text)  # \*, \[, \], \\, \>
    # Escaped dashes at start of lines: \- → -
    text = re.sub(r'^\\-', '-', text, flags=re.MULTILINE)

    # ── STEP 5: Remove HTML comments ──
    text = re.sub(r'<!--\s*-->', '', text)

    # ── STEP 6: Remove trailing backslashes (pandoc line breaks) ──
    text = re.sub(r'\\\s*$', '', text, flags=re.MULTILINE)

    # ── STEP 7: Remove known boilerplate lines ──
    boilerplate = [
        'spot on tms', 'spot on tms.', 
        'standard operating procedure (sop)',
        'standard operating procedure',
    ]
    lines = text.split('\n')
    cleaned_lines = []
    for line in lines:
        stripped = line.strip().lower()
        # Remove exact boilerplate matches
        if stripped in boilerplate:
            continue
        # Remove lines that are just the title repeated as plain text (not as heading)
        if stripped == title.lower() and not line.strip().startswith('#'):
            continue
        cleaned_lines.append(line)
    text = '\n'.join(cleaned_lines)

    # ── STEP 8: Fix heading hierarchy ──
    # Process line by line
    lines = text.split('\n')
    result_lines = []
    
    for i, line in enumerate(lines):
        stripped = line.strip()
        
        # Skip empty lines (we'll normalize spacing later)
        if not stripped:
            result_lines.append('')
            continue

        # Detect heading lines
        heading_match = re.match(r'^(#{1,6})\s+(.*)', stripped)
        if heading_match:
            hashes = heading_match.group(1)
            heading_text = heading_match.group(2).strip()
            level = len(hashes)
            
            # Clean bold/italic markers from headings
            heading_text = heading_text.replace('**', '').replace('*', '').strip()
            # Remove surrounding quotes if any
            heading_text = heading_text.strip('"').strip("'").strip()
            
            # Skip if heading text is empty
            if not heading_text:
                continue
            
            # Skip if this is the H1 title (we'll add it ourselves)
            if level == 1 and heading_text.lower() == title.lower():
                continue
            
            # If H1 and it's NOT the title, demote to H2
            if level == 1:
                # Check if this heading reads like a bullet point / action item
                if is_action_item(heading_text):
                    result_lines.append(f'- {heading_text}')
                    continue
                else:
                    result_lines.append(f'## {heading_text}')
                    continue
            
            # H2s that read like bullet points or single action steps
            if level == 2 and is_action_item(heading_text):
                result_lines.append(f'- {heading_text}')
                continue
            
            # Numbered section headers like "1. Purpose" — keep as H2 with clean text
            num_match = re.match(r'^(\d+)[.\\)]\s*(.*)', heading_text)
            if num_match and level == 2:
                section_name = num_match.group(2).strip()
                if section_name:
                    result_lines.append(f'## {section_name}')
                    continue
            
            # Otherwise keep the heading at its level (but cap at H2 minimum for non-title)
            result_lines.append(f'{"#" * level} {heading_text}')
            continue

        # Non-heading lines: clean up numbered sections that should be headings
        # Lines like "1\. Purpose" or "4\. Procedure" at root level
        num_section = re.match(r'^(\d+)[.\\)]\s*(Purpose|Scope|Procedure|Responsibility|Enforcement|Recordkeeping|Inputs needed before you start)\s*$', stripped, re.IGNORECASE)
        if num_section:
            result_lines.append(f'## {num_section.group(2).title()}')
            continue

        # Lines like "Step 1: ..." that should be H3
        step_match = re.match(r'^Step\s+(\d+)\s*[:\.]\s*(.*)', stripped, re.IGNORECASE)
        if step_match and not stripped.startswith('-') and not stripped.startswith('*'):
            step_text = step_match.group(2).strip() or f'Step {step_match.group(1)}'
            result_lines.append(f'### Step {step_match.group(1)}: {step_text}')
            continue

        result_lines.append(line)

    text = '\n'.join(result_lines)

    # ── STEP 9: Clean up double parentheses and brackets ──
    text = re.sub(r'\(\s*\)', '', text)  # empty parens
    text = re.sub(r'\[\s*\]', '', text)  # empty brackets
    text = re.sub(r'\(\s*\(', '(', text)  # double open parens
    text = re.sub(r'\)\s*\)', ')', text)  # double close parens

    # ── STEP 10: Remove stray "refer to" lines with empty references ──
    text = re.sub(r'\(refer to\s*\)\s*', '', text)
    # Clean "refer to [text]" standalone references that lost their URL
    text = re.sub(r'\(refer to\s+([^)]+)\)', r'(refer to \1)', text)

    # ── STEP 11: Clean remaining double ** in non-heading text ──
    # Lines with ** around them that aren't markdown bold
    # Actually leave ** alone — it's valid markdown bold

    # ── STEP 12: Normalize whitespace ──
    # Remove trailing whitespace from lines
    text = re.sub(r'[ \t]+$', '', text, flags=re.MULTILINE)

    # Collapse 3+ blank lines into exactly 2 (one blank line between blocks)
    text = re.sub(r'\n{3,}', '\n\n', text)

    # Ensure heading lines have a blank line before them (unless at start)
    text = re.sub(r'(\S)\n(##)', r'\1\n\n\2', text)

    # ── STEP 13: Rebuild with formal title ──
    text = text.strip()

    # Ensure file starts with the exact title from index.json
    if not text.startswith(f'# {title}'):
        # Remove any existing H1 at the very top
        text = re.sub(r'^#\s+[^\n]+\n*', '', text, count=1)
        text = text.strip()

    final = f'# {title}\n\n{text}\n'
    
    # One more pass: if we now have "# Title\n\n# Title" or "# Title\n\n## Title", strip the dupe
    final = re.sub(
        rf'^# {re.escape(title)}\n\n##?\s*{re.escape(title)}\s*\n',
        f'# {title}\n',
        final
    )

    # Final cleanup: collapse excessive blank lines one more time
    final = re.sub(r'\n{3,}', '\n\n', final)

    return final


def is_action_item(text):
    """Detect if a heading actually reads like a bullet point / action item."""
    text_lower = text.lower().strip()
    
    # Very short text is likely a real heading — keep it
    if len(text_lower) < 15:
        return False
    
    # Known section names that should stay as headings
    section_names = [
        'purpose', 'scope', 'procedure', 'prerequisites', 'required systems',
        'required tools', 'systems used', 'responsible party', 'output',
        'error handling', 'notes', 'escalation standards', 'close-out standards',
        'common exceptions', 'quality control checklist',
        'inspection location rules', 'completion', 'enforcement', 'recordkeeping',
        'roles and responsibilities', 'trailer identification standards',
        'trailer ownership types', 'monthly fleet audit',
        'records to maintain', 'trailer offboarding process',
        'inputs needed before you start', 'systems / tools',
        'final verification checklist', 'expected outcome',
    ]
    for name in section_names:
        if text_lower == name or text_lower.startswith(name):
            return False

    # If there's a step number, keep as heading
    if re.match(r'^step\s+\d', text_lower):
        return False

    # Time-block headings like "6:00--6:15 | ..."
    if re.match(r'^\d{1,2}[:.]\d{2}', text_lower):
        return False

    # Named sub-sections like "A. Complete Trips..."
    if re.match(r'^[A-Z]\.\s', text):
        return False

    # Section headings with keywords
    heading_keywords = [
        'section', 'tab', 'plan', 'checklist', 'inspection', 'setup',
        'dashboard', 'process', 'review', 'update', 'standard',
        'morning', 'afternoon', 'mid-to-late', 'throughout', 'end of day',
    ]
    for kw in heading_keywords:
        if kw in text_lower:
            return False

    # If it starts with a verb and is longish, it's probably an action item
    action_verbs = [
        'enter', 'click', 'open', 'log', 'select', 'navigate', 'add',
        'assign', 'set', 'check', 'create', 'verify', 'confirm', 'enable',
        'save', 'leave', 'have', 'send', 'remove', 'do not',
        'for new', 'for existing', 'hit',
    ]
    for verb in action_verbs:
        if text_lower.startswith(verb):
            return True

    # Long sentences are likely action items, not headings
    if len(text_lower) > 80 and ' ' in text:
        return True

    return False


def main():
    data = load_index()
    
    for cat in data['categories']:
        for item in cat['items']:
            filepath = os.path.join('sops', item['file'])
            if not os.path.exists(filepath):
                print(f'  MISSING: {filepath}')
                continue
            
            title = item['title']
            cleaned = clean_file(filepath, title)
            
            with open(filepath, 'w', encoding='utf-8', newline='\n') as f:
                f.write(cleaned)
            
            print(f'  OK: {item["file"]}')

    print('\nCleanup complete — all SOPs normalized.')


if __name__ == '__main__':
    main()
