import json
import os
import base64

def build():
    try:
        # Read source files
        with open('index.html', 'r', encoding='utf-8') as f:
            html = f.read()
        with open('styles.css', 'r', encoding='utf-8') as f:
            css = f.read()
        with open('app.js', 'r', encoding='utf-8') as f:
            js = f.read()
        with open('sops/index.json', 'r', encoding='utf-8') as f:
            index_data = json.load(f)

        # Inject CSS inline
        html = html.replace('<link rel="stylesheet" href="styles.css">', f'<style>{css}</style>')

        # Patch app.js to use embedded JSON instead of fetch
        js = js.replace(
            "const response = await fetch('./sops/index.json');",
            "const response = { ok: true, json: async () => window.SPOTS_INDEX };"
        )

        # Inject index data + app.js as inline scripts
        injected_data = f"""
        <script>
        window.SPOTS_INDEX = {json.dumps(index_data)};
        </script>
        """
        html = html.replace('<script src="app.js"></script>', f'{injected_data}\n<script>\n{js}\n</script>')

        # Embed logo as base64 if it exists
        logo_path = r'C:\Users\lindz\Downloads\Spot On Logo_Tilted.png'
        if os.path.exists(logo_path):
            with open(logo_path, 'rb') as lf:
                logo_b64 = base64.b64encode(lf.read()).decode('utf-8')
            html = html.replace('src="logo.png"', f'src="data:image/png;base64,{logo_b64}"')
        else:
            # Fallback text logo
            text_logo = '<span style="font-size:1.25rem;font-weight:700;color:#29AEE4;">SpotOn TMS</span>'
            html = html.replace('<img src="logo.png" alt="SpotOn TMS" id="gateLogoImg" style="max-width:180px; height:auto; display:block; margin:0 auto 8px;">', text_logo)
            html = html.replace('<img src="logo.png" alt="SpotOn TMS" id="sidebarLogoImg" style="max-width: 85%; height: auto; display: block; margin: 0 auto;">', text_logo)

        out_path = r'C:\Users\lindz\Downloads\SpotOn-Internal-Portal.html'
        with open(out_path, 'w', encoding='utf-8') as f:
            f.write(html)

        # Count SOPs
        total = sum(len(cat['items']) for cat in index_data['categories'])
        print(f"Successfully generated: {out_path}")
        print(f"  {len(index_data['categories'])} departments, {total} SOPs")

    except Exception as e:
        print(f"Error: {e}")
        import traceback
        traceback.print_exc()

if __name__ == '__main__':
    build()
