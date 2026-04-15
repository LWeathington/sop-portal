import json
import os
import re

def normalize_buzzsaw():
    with open('sops/index.json', 'r', encoding='utf-8') as f:
        data = json.load(f)

    for cat in data['categories']:
        for item in cat['items']:
            filepath = os.path.join('sops', item['file'])
            if not os.path.exists(filepath):
                continue
                
            title = item['title'].strip()
            
            with open(filepath, 'r', encoding='utf-8') as f:
                lines = f.readlines()
            
            new_lines = []
            
            for line in lines:
                l = line.strip()
                
                # 1. Delete Junk Boilerplate completely
                if l.lower() in ['spot on tms', 'spot on tms.', 'standard operating procedure (sop)', 'standard operating procedure']:
                    continue
                
                # 2. Header Parsing & Downgrading
                if l.startswith('#'):
                    # Strip pandoc artifacts
                    clean_header = re.sub(r'\[(.*?)\]\{.*?\}', r'\1', l)
                    clean_header = clean_header.replace('**', '')
                    raw_text = clean_header.lstrip('#').strip()
                    
                    # Drop empty lines like literally just `#`
                    if not raw_text:
                        continue
                        
                    # Skip generic titles (since we prepend it)
                    if title.lower() in raw_text.lower():
                        continue
                        
                    # Fix paragraph bleed: If it's over 75 characters it's a normal paragraph
                    if len(raw_text) > 75 and ' ' in raw_text:
                        new_lines.append(raw_text + '\n\n')
                        continue

                    # If it's a rogue single H1 `# `, force downgrade to H2 `## `
                    # This prevents random lines from rendering massive titles!
                    hash_count = len(clean_header) - len(clean_header.lstrip('#'))
                    
                    if hash_count == 1:
                        new_lines.append(f"## {raw_text}\n\n")
                    else:
                        new_lines.append(f"{'#' * hash_count} {raw_text}\n\n")
                else:
                    # 3. Non headers
                    clean_l = re.sub(r'\[(.*?)\]\{.*?\}', r'\1', l).replace('**', '').strip()
                    
                    # Auto upgrade known main sections from plaintext back to formal `##` 
                    standard_sections = ['purpose', 'scope', 'procedure', 'driver check-ins', 'plan finalization']
                    if clean_l.lower() in standard_sections:
                        new_lines.append(f"## {clean_l.title()}\n\n")
                    else:
                        if l:
                            new_lines.append(line)
            
            # Reconstruct
            text = "".join(new_lines).strip()
            text = re.sub(r'\n{3,}', '\n\n', text)
            
            # Inject Formal Master Title
            final_content = f"# {title}\n\n{text}\n"
            
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(final_content)
                
    print("Aggressive Normalization Complete.")

if __name__ == "__main__":
    normalize_buzzsaw()
