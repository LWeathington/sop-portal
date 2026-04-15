import os
import json
import zipfile
import urllib.request
import urllib.error
import io

PORTAL_DIR = r'C:\Users\lindz\.gemini\antigravity\scratch\sop-portal'

# Files needed for the live portal (skip build tools, temp files, etc.)
INCLUDE_FILES = [
    'index.html',
    'styles.css',
    'app.js',
    os.path.join('sops', 'index.json'),
]

def zip_portal():
    """Zip only the files needed for the hosted portal."""
    buf = io.BytesIO()
    with zipfile.ZipFile(buf, 'w', zipfile.ZIP_DEFLATED) as zf:
        for rel_path in INCLUDE_FILES:
            abs_path = os.path.join(PORTAL_DIR, rel_path)
            if not os.path.exists(abs_path):
                print(f"WARNING: missing {abs_path}")
                continue
            arcname = rel_path.replace('\\', '/')
            zf.write(abs_path, arcname)
            print(f"  + {arcname}")
    buf.seek(0)
    return buf.read()

def deploy(zip_bytes):
    """
    Deploy to Netlify using their unauthenticated ZIP deploy endpoint.
    This is the same API used by netlify.com/drop — no account required.
    """
    url = 'https://api.netlify.com/api/v1/sites'
    
    # Step 1: create a new site
    req = urllib.request.Request(
        url,
        data=b'{}',
        headers={
            'Content-Type': 'application/json',
            'User-Agent': 'SpotOnPortalDeploy/1.0',
        },
        method='POST'
    )
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            site = json.loads(resp.read())
    except urllib.error.HTTPError as e:
        body = e.read().decode()
        print(f"Site creation failed ({e.code}): {body}")
        return None

    site_id = site.get('id')
    site_url = site.get('ssl_url') or site.get('url')
    print(f"Site created: {site_url}  (id={site_id})")

    # Step 2: deploy ZIP to the site
    deploy_url = f'https://api.netlify.com/api/v1/sites/{site_id}/deploys'
    req2 = urllib.request.Request(
        deploy_url,
        data=zip_bytes,
        headers={
            'Content-Type': 'application/zip',
            'User-Agent': 'SpotOnPortalDeploy/1.0',
        },
        method='POST'
    )
    try:
        with urllib.request.urlopen(req2, timeout=60) as resp:
            deploy_result = json.loads(resp.read())
    except urllib.error.HTTPError as e:
        body = e.read().decode()
        print(f"Deploy failed ({e.code}): {body}")
        return None

    deploy_url_result = deploy_result.get('ssl_url') or deploy_result.get('url') or site_url
    deploy_id = deploy_result.get('id', 'unknown')
    state = deploy_result.get('state', 'unknown')
    
    print(f"\nDeploy submitted!")
    print(f"  Deploy ID : {deploy_id}")
    print(f"  State     : {state}")
    print(f"  URL       : {deploy_url_result}")
    return deploy_url_result

if __name__ == '__main__':
    print("Zipping portal files...")
    zip_bytes = zip_portal()
    print(f"Zip size: {len(zip_bytes):,} bytes\n")
    print("Deploying to Netlify...")
    result = deploy(zip_bytes)
    if result:
        print(f"\n✅ Portal is live at: {result}")
    else:
        print("\n❌ Deployment failed.")
