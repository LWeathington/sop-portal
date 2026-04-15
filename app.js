/* ============================================================
   SPOT ON TMS — SOP Portal App Logic
   Tile-based navigation, inline markdown rendering
   ============================================================ */

// ── POSITION DEFINITIONS ─────────────────────────────────────
const POSITIONS = [
    {
        id: 'dispatch',
        name: 'Dispatch Operations',
        icon: '🚛',
        desc: 'Daily dispatch routines, trip management, check calls, and driver coordination.',
        accentVar: '--accent-1',
        accentColor: '#3b82f6',
        tileBg: 'linear-gradient(135deg, #0f2040 0%, #0a1525 100%)',
        sops: [
            { id: 'morning-dispatch-operations',      title: 'Morning Dispatch Operations',                file: 'sops/morning-dispatch-operations.md' },
            { id: 'afternoon-dispatch-operations',    title: 'Afternoon Dispatch Operations',              file: 'sops/afternoon-dispatch-operations.md' },
            { id: 'dispatch-daily-routine',           title: 'Dispatch Daily Routine',                     file: 'sops/dispatch-daily-routine.md' },
            { id: 'daily-checklist',                  title: 'Daily Checklist',                            file: 'sops/daily-checklist.md' },
            { id: 'daily-dispatch-objectives',        title: 'Daily Dispatch Objectives',                  file: 'sops/daily-dispatch-objectives.md' },
            { id: 'updating-trip-statuses',           title: 'Updating Trip Statuses',                     file: 'sops/updating-trip-statuses.md' },
            { id: 'upon-arrival-first-logins',        title: 'Upon Arrival: First Log-Ins',                file: 'sops/upon-arrival-first-logins.md' },
            { id: 'upon-arrival-tire-checks',         title: 'Upon Arrival: Tire Checks',                  file: 'sops/upon-arrival-tire-checks.md' },
            { id: 'before-dispatch-compliance-check', title: 'Before Dispatch Compliance Check (Drivers)', file: 'sops/before-dispatch-compliance-check-drivers.md' },
        ]
    },
    {
        id: 'accounting',
        name: 'Accounting & Finance',
        icon: '💼',
        desc: 'Invoicing, accounts receivable, QuickBooks workflows, payroll, and billing.',
        accentColor: '#10b981',
        tileBg: 'linear-gradient(135deg, #0a2a1a 0%, #071510 100%)',
        sops: [
            { id: 'sop-bill-empire-mondays',          title: 'SOP: Bill Empire (Mondays)',                 file: 'sops/sop-bill-empire-mondays.md' },
            { id: 'how-to-attach-and-invoice-ditat',  title: 'Attach Documents & Process Invoices in Ditat', file: 'sops/how-to-attach-documents-and-process-invoices-in-ditat-tms.md' },
            { id: 'ar-sop',                           title: 'AR SOP (Accounts Receivable)',               file: null },
            { id: 'creating-qb-invoices',             title: 'Creating QB Invoices',                       file: null },
            { id: 'renewing-qshera-paychex',          title: 'Renewing QSHERA Plan with Paychex',          file: null },
        ]
    },
    {
        id: 'yard',
        name: 'Yard & Spotting Operations',
        icon: '🏗️',
        desc: 'Cargill yard management, trailer spotting, Empire and NFI operations.',
        accentColor: '#f59e0b',
        tileBg: 'linear-gradient(135deg, #2a1a06 0%, #180e02 100%)',
        sops: [
            { id: 'trailer-onboarding-offboarding',   title: 'Trailer Onboarding / Offboarding',           file: 'sops/trailer-onboarding-offboarding-sop.md' },
            { id: 'sop-bill-empire-spotting',         title: 'Empire Spotting Operations',                 file: null },
            { id: 'cargill-operations',               title: 'Cargill Operations',                         file: null },
            { id: 'nfi-operations',                   title: 'NFI Operations',                             file: null },
        ]
    },
    {
        id: 'freight',
        name: 'Freight & Logistics',
        icon: '📦',
        desc: 'Load searching, backhaul securing, and freight brokerage procedures.',
        accentColor: '#06b6d4',
        tileBg: 'linear-gradient(135deg, #062030 0%, #030f18 100%)',
        sops: [
            { id: 'searching-for-and-securing-a-backhaul-load', title: 'Searching for and Securing a Backhaul Load', file: 'sops/searching-for-and-securing-a-backhaul-load.md' },
            { id: 'entering-a-cargill-load',          title: 'Entering a Cargill Load',                    file: 'sops/entering-a-cargill-load.md' },
        ]
    },
    {
        id: 'systems',
        name: 'Systems & TMS',
        icon: '⚙️',
        desc: 'Ditat TMS and Samsara setup, driver profiles, load building, and system workflows.',
        accentColor: '#8b5cf6',
        tileBg: 'linear-gradient(135deg, #1a0a30 0%, #0d0518 100%)',
        sops: [
            { id: 'adding-new-driver-to-ditat',       title: 'Adding a New Driver to Ditat',               file: 'sops/adding-new-driver-to-ditat.md' },
            { id: 'adding-new-driver-to-samsara',     title: 'Adding a New Driver to Samsara',             file: 'sops/adding-new-driver-to-samsara.md' },
            { id: 'building-a-load-in-ditat-tms',     title: 'Building a Load in Ditat TMS',               file: 'sops/building-a-load-in-ditat-tms.md' },
            { id: 'customer-driver-info-update',      title: 'Customer / Driver Info Update',              file: 'sops/customer-driver-info-update.md' },
        ]
    },
    {
        id: 'hr',
        name: 'HR & Onboarding',
        icon: '🤝',
        desc: 'Hiring, driver orientation, spotter onboarding, and HR compliance procedures.',
        accentColor: '#a855f7',
        tileBg: 'linear-gradient(135deg, #200a30 0%, #100517 100%)',
        sops: [
            { id: 'onboarding',                       title: 'General Onboarding',                         file: 'sops/onboarding.md' },
            { id: 'hiring-sop',                       title: 'Hiring SOP',                                 file: null },
            { id: 'onsite-orientation-drivers',       title: 'ON SITE Orientation — Drivers',             file: null },
            { id: 'orientation-spotters',             title: 'Orientation SOP — Spotters',                 file: null },
        ]
    },
    {
        id: 'sales',
        name: 'Sales',
        icon: '📈',
        desc: 'Customer acquisition, rate strategy, and sales process documentation.',
        accentColor: '#ef4444',
        tileBg: 'linear-gradient(135deg, #2a0a0a 0%, #180404 100%)',
        sops: [
            { id: 'sales-placeholder',                title: 'Sales SOPs — Coming Soon',                   file: null },
        ]
    },
    {
        id: 'compliance',
        name: 'Compliance & Safety',
        icon: '🛡️',
        desc: 'DOT/FMCSA compliance, HOS, ELD requirements, and safety inspections.',
        accentColor: '#14b8a6',
        tileBg: 'linear-gradient(135deg, #062020 0%, #031010 100%)',
        sops: [
            { id: 'before-dispatch-compliance-check-drivers', title: 'Before Dispatch Compliance Check', file: 'sops/before-dispatch-compliance-check-drivers.md' },
            { id: 'compliance-placeholder',           title: 'Compliance SOPs — Coming Soon',              file: null },
        ]
    },
];

// ── STATE ─────────────────────────────────────────────────────
let currentPosition = null;
let currentSOP      = null;

// ── INIT ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    renderHomeTiles();
    setupSearch();
});

// ── RENDER HOME TILES ─────────────────────────────────────────
function renderHomeTiles() {
    const grid = document.getElementById('tilesGrid');
    grid.innerHTML = POSITIONS.map((pos, i) => {
        const count = pos.sops.filter(s => s.file).length;
        const total = pos.sops.length;
        return `
        <div class="position-tile" id="tile-${pos.id}" onclick="openPosition('${pos.id}')"
             style="border-top: 3px solid ${pos.accentColor}; background: ${pos.tileBg};">
            <span class="tile-icon">${pos.icon}</span>
            <div class="tile-name">${pos.name}</div>
            <div class="tile-desc">${pos.desc}</div>
            <span class="tile-count"
                  style="background: ${pos.accentColor}22; color: ${pos.accentColor};">
                ${total} procedure${total !== 1 ? 's' : ''}
            </span>
        </div>`;
    }).join('');
}

// ── OPEN POSITION ─────────────────────────────────────────────
function openPosition(posId) {
    currentPosition = POSITIONS.find(p => p.id === posId);
    if (!currentPosition) return;

    showView('viewSOPList');
    document.getElementById('pageTitle').textContent = currentPosition.name;
    document.getElementById('backBtn').classList.remove('hidden');

    const grid = document.getElementById('sopListGrid');
    grid.innerHTML = currentPosition.sops.map(sop => {
        const available = !!sop.file;
        return `
        <div class="sop-card ${available ? '' : 'sop-coming-soon'}"
             ${available ? `onclick="openSOP('${sop.id}')"` : ''}
             style="border-top: 2px solid ${available ? currentPosition.accentColor : 'var(--border)'};"
             id="sopcard-${sop.id}">
            <div class="sop-card-title">${sop.title}</div>
            <div class="sop-card-meta">
                <span style="color: ${available ? currentPosition.accentColor : 'var(--text-muted)'};">
                    ${available ? currentPosition.name : 'Coming Soon'}
                </span>
                ${available ? '<span class="sop-card-arrow">&#8594;</span>' : ''}
            </div>
        </div>`;
    }).join('');
}

// ── OPEN SOP ──────────────────────────────────────────────────
async function openSOP(sopId) {
    const sop = currentPosition.sops.find(s => s.id === sopId);
    if (!sop || !sop.file) return;

    showView('viewSOPContent');
    document.getElementById('pageTitle').textContent = sop.title;
    document.getElementById('sopContentTitle').textContent = sop.title;
    document.getElementById('sopContentMeta').innerHTML =
        `<span>${currentPosition.icon} ${currentPosition.name}</span>`;

    const body = document.getElementById('sopContentBody');
    body.innerHTML = '<div class="loading"><div class="spinner"></div> Loading...</div>';

    try {
        const resp = await fetch(sop.file);
        if (!resp.ok) throw new Error('Not found');
        const md = await resp.text();
        body.innerHTML = marked.parse(md);
    } catch (e) {
        body.innerHTML = `<p style="color:var(--text-secondary)">Content coming soon.</p>`;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── NAVIGATION ────────────────────────────────────────────────
function goBack() {
    if (currentSOP) {
        currentSOP = null;
        openPosition(currentPosition.id);
    } else if (currentPosition) {
        currentPosition = null;
        showView('viewHome');
        document.getElementById('pageTitle').textContent = 'SOP Library';
        document.getElementById('backBtn').classList.add('hidden');
    }
}

function showView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
    document.getElementById(viewId).classList.remove('hidden');
}

// ── SEARCH ────────────────────────────────────────────────────
function setupSearch() {
    const input = document.getElementById('searchInput');
    input.addEventListener('input', () => {
        const q = input.value.toLowerCase().trim();
        if (!q) {
            if (currentPosition) openPosition(currentPosition.id);
            else renderHomeTiles();
            return;
        }

        // Search across all positions
        showView('viewSOPList');
        document.getElementById('backBtn').classList.remove('hidden');
        document.getElementById('pageTitle').textContent = `Search: "${input.value}"`;

        const results = [];
        POSITIONS.forEach(pos => {
            pos.sops.forEach(sop => {
                if (sop.title.toLowerCase().includes(q) || pos.name.toLowerCase().includes(q)) {
                    results.push({ ...sop, posName: pos.name, posIcon: pos.icon, accentColor: pos.accentColor, posId: pos.id });
                }
            });
        });

        const grid = document.getElementById('sopListGrid');
        if (results.length === 0) {
            grid.innerHTML = '<p style="color:var(--text-secondary); padding:20px;">No results found.</p>';
            return;
        }

        grid.innerHTML = results.map(r => `
            <div class="sop-card ${r.file ? '' : 'sop-coming-soon'}"
                 ${r.file ? `onclick="currentPosition=POSITIONS.find(p=>p.id==='${r.posId}');openSOP('${r.id}')"` : ''}
                 style="border-top: 2px solid ${r.file ? r.accentColor : 'var(--border)'};">
                <div class="sop-card-title">${r.title}</div>
                <div class="sop-card-meta">
                    <span style="color:${r.accentColor}">${r.posIcon} ${r.posName}</span>
                    ${r.file ? '<span class="sop-card-arrow">&#8594;</span>' : ''}
                </div>
            </div>`).join('');
    });
}
