/* ============================================================
   SPOT ON TMS — SOP Portal App Logic v2
   9-tile position layout with job descriptions + BPM flows
   ============================================================ */

// ── POSITION DEFINITIONS ─────────────────────────────────────
const POSITIONS = [
    {
        id: 'dispatch',
        name: 'Dispatch Operations',
        person: 'Austin Boerckel',
        personTitle: 'Operations Manager',
        reportsTo: 'Blake Lappan',
        icon: '🚛',
        desc: 'Daily dispatch, load management, driver coordination, and freight booking.',
        accentColor: '#3b82f6',
        tileBg: 'linear-gradient(135deg, #0f2040 0%, #0a1525 100%)',
        jobDescription: {
            owns: [
                'Daily dispatch operations — load assignment and driver coordination',
                'Booking freight using Rate Guide & Profit Calculator (never take first offer)',
                'Ditat TMS — building loads, updating trip statuses, closing trips',
                'Driver HOS/compliance monitoring via Samsara',
                'Morning and afternoon dispatch routines (tire checks, first logins)',
                'Scheduling, PTO approvals, and coverage coordination',
                'Retrieving and verifying PODs from drivers',
                'DVIR review and flagging issues to Mike'
            ],
            supports: [
                'Tim — load coordination and rate verification',
                'Lindsay — POD retrieval and trip status confirmation',
                'Mike — flagging equipment issues observed in the field'
            ],
            notOwns: [
                'Fleet maintenance and repair coordination → Mike Jackson',
                'Cross-dock operations → Mike Jackson',
                'Invoicing and billing → Lindsay Weathington',
                'Tag renewals and registration paperwork → Lindsay Weathington'
            ]
        },
        bpmChart: `
graph TD
    A["🚛 Driver Available"] --> B["Austin: Assign Load in Ditat"]
    B --> C["Austin: Confirm Rate vs. Profit Calc"]
    C --> D["Austin: Dispatch Driver"]
    D --> E["Driver: Complete Trip"]
    E --> F["Driver: Submit POD"]
    F --> G["Austin: Close Trip in Ditat"]
    G --> H["Lindsay: Invoice Customer in QB"]
    style A fill:#0f2040,color:#fff,stroke:#3b82f6
    style H fill:#0a2a1a,color:#fff,stroke:#10b981
`,
        sops: [
            { id: 'morning-dispatch-operations',      title: 'Morning Dispatch Operations',                file: 'sops/morning-dispatch-operations.md' },
            { id: 'afternoon-dispatch-operations',    title: 'Afternoon Dispatch Operations',              file: 'sops/afternoon-dispatch-operations.md' },
            { id: 'dispatch-daily-routine',           title: 'Dispatch Daily Routine',                     file: 'sops/dispatch-daily-routine.md' },
            { id: 'daily-checklist',                  title: 'Daily Checklist',                            file: 'sops/daily-checklist.md' },
            { id: 'daily-dispatch-objectives',        title: 'Daily Dispatch Objectives',                  file: 'sops/daily-dispatch-objectives.md' },
            { id: 'updating-trip-statuses',           title: 'Updating Trip Statuses in Ditat',            file: 'sops/updating-trip-statuses.md' },
            { id: 'upon-arrival-first-logins',        title: 'Upon Arrival: First Log-Ins',                file: 'sops/upon-arrival-first-logins.md' },
            { id: 'upon-arrival-tire-checks',         title: 'Upon Arrival: Tire Checks',                  file: 'sops/upon-arrival-tire-checks.md' },
            { id: 'before-dispatch-compliance-check', title: 'Before Dispatch Compliance Check',           file: 'sops/before-dispatch-compliance-check-drivers.md' },
            { id: 'building-a-load-in-ditat-tms',     title: 'Building a Load in Ditat TMS',               file: 'sops/building-a-load-in-ditat-tms.md' },
            { id: 'searching-for-backhaul',           title: 'Searching for and Securing a Backhaul Load', file: 'sops/searching-for-and-securing-a-backhaul-load.md' },
            { id: 'samsara-violation-review',         title: 'Samsara Violation Daily Review',             file: 'sops/samsara-violation-daily-review.md' },
            { id: 'driver-orientation',               title: 'Driver Orientation — Step by Step',          file: 'sops/driver-orientation-step-by-step.md' },
        ]
    },
    {
        id: 'accounting',
        name: 'Accounting & Finance',
        person: 'Lindsay Weathington',
        personTitle: 'Accounting Manager',
        reportsTo: 'Blake Lappan',
        icon: '💼',
        desc: 'Invoicing, accounts receivable, payroll, QuickBooks workflows, and compliance paperwork.',
        accentColor: '#10b981',
        tileBg: 'linear-gradient(135deg, #0a2a1a 0%, #071510 100%)',
        jobDescription: {
            owns: [
                'Accounts Receivable — QB automated emails, collections, and follow-up',
                'Accounts Payable — bill pay on set schedule, vendor management',
                'Payroll processing (transitioning to QB/ADP)',
                'QuickBooks invoicing, billing reconciliation, and reporting',
                'Fuel reports — weekly compilation and distribution',
                'Driver compliance paperwork — policy acknowledgement forms for violations',
                'Fleet paperwork — tag renewals, vehicle registration, and compliance docs (NEW)',
                'Maintenance spend approvals — $500–$2,500 threshold (cash flow check)',
                'Weekly cash flow monitoring and flagging to Blake'
            ],
            supports: [
                'Mike — maintenance spend approvals and repair documentation',
                'Austin — driver compliance forms and POD confirmation',
                'Blake — cash flow visibility and financial reporting'
            ],
            notOwns: [
                'Physical fleet repairs — Austin/Mike coordinate, Lindsay handles paperwork only',
                'Dispatching loads — Austin',
                'Driver scheduling — Austin'
            ]
        },
        bpmChart: `
graph TD
    A["Trip Closed in Ditat (Austin)"] --> B["Lindsay: Pull POD from Driver"]
    B --> C["Lindsay: Attach POD in Ditat"]
    C --> D["Lindsay: Create Invoice in QB"]
    D --> E["QB: Auto AR Email to Customer"]
    E --> F{Payment Received?}
    F -->|Yes| G["Lindsay: Post Payment in QB"]
    F -->|No - 30 days| H["Lindsay: Follow-Up per AR SOP"]
    H --> F
    style A fill:#0f2040,color:#fff,stroke:#3b82f6
    style G fill:#0a2a1a,color:#fff,stroke:#10b981
`,
        sops: [
            { id: 'sop-bill-empire-mondays',          title: 'SOP: Bill Empire (Mondays)',                 file: 'sops/sop-bill-empire-mondays.md' },
            { id: 'how-to-attach-and-invoice-ditat',  title: 'Attach Documents & Process Invoices in Ditat', file: 'sops/how-to-attach-documents-and-process-invoices-in-ditat-tms.md' },
            { id: 'tag-renewal-registration',         title: 'Tag Renewal & Registration Tracking',        file: 'sops/tag-renewal-registration-tracking.md' },
            { id: 'ar-collections-process',           title: 'AR Collections Process',                     file: 'sops/ar-collections-process.md' },
            { id: 'qb-invoice-creation',              title: 'QB Invoice Creation',                        file: 'sops/qb-invoice-creation.md' },
            { id: 'maintenance-spend-approval',       title: 'Equipment Repair Spend Approval',            file: 'sops/equipment-repair-approval-workflow.md' },
        ]
    },
    {
        id: 'sales',
        name: 'Sales',
        person: 'Tim Utzinger',
        personTitle: 'Sales Director',
        reportsTo: 'Blake Lappan',
        icon: '📈',
        desc: 'Full sales lifecycle from lead to contract, rate strategy, and customer onboarding.',
        accentColor: '#f97316',
        tileBg: 'linear-gradient(135deg, #2a1200 0%, #180900 100%)',
        jobDescription: {
            owns: [
                'Full sales lifecycle: Awareness → Lead → Qualify → Discovery → Solution → Pricing → Contract → Onboard',
                'KPI tracking: touches per rep per week, conversion rates, margin quoted vs. realized',
                'Rate strategy — discovery summary REQUIRED before any pricing is given',
                'Broker and carrier relationship management',
                '1% Forever Commission program — tracking and communication',
                'Bid spotting and niche lane identification',
                'Customer discovery meetings and follow-up documentation'
            ],
            supports: [
                'Blake — bid spotting and long-term partnership pricing decisions',
                'Austin — smooth handoff when new customer goes live'
            ],
            notOwns: [
                'Operations execution once customer is onboarded → Austin',
                'Invoicing and billing → Lindsay',
                'Rate exceptions above authority → Blake'
            ]
        },
        bpmChart: `
graph LR
    A["🎯 Lead Identified (Tim)"] --> B["Qualify (Tim)"]
    B --> C["Discovery Meeting (Tim)<br/>Summary doc REQUIRED"]
    C --> D["Solution Proposal (Tim)"]
    D --> E{Niche Pricing?}
    E -->|Yes| F["Tim + Blake: Approve Rate"]
    E -->|No| G["Tim: Standard Pricing"]
    F --> H["Contract Signed"]
    G --> H
    H --> I["Handoff to Austin (Ops)"]
    I --> J["Lindsay: Set Up Billing in QB"]
    style A fill:#2a1200,color:#fff,stroke:#f97316
    style J fill:#0a2a1a,color:#fff,stroke:#10b981
`,
        sops: [
            { id: 'sales-discovery-process',          title: 'Sales Discovery Process',                    file: 'sops/sales-discovery-process.md' },
            { id: 'new-customer-onboarding',          title: 'New Customer Onboarding (Sales → Ops)',       file: 'sops/new-customer-onboarding.md' },
        ]
    },
    {
        id: 'yard-kc',
        name: 'Yard & Spotting (KC)',
        person: 'Phil Stuart',
        personTitle: 'KC Yard Manager',
        reportsTo: 'Austin Boerckel / Blake Lappan',
        icon: '🏗️',
        desc: 'Cargill yard operations, trailer spotting, driver coordination at the KC facility.',
        accentColor: '#f59e0b',
        tileBg: 'linear-gradient(135deg, #2a1a06 0%, #180e02 100%)',
        jobDescription: {
            owns: [
                'Cargill yard operations — trailer spotting and movements',
                'Driver coordination for the KC yard facility',
                'Empire spotting operations',
                'Pre-trip and post-trip inspections at KC site',
                'Yard trailer inventory — tracking what is on site',
                'Communicating equipment issues to Mike Jackson'
            ],
            supports: [
                'Austin — driver availability and yard status updates',
                'Mike — flagging equipment and trailer issues'
            ],
            notOwns: [
                'Fleet maintenance and repair decisions → Mike Jackson',
                'Load booking and freight rates → Austin / Tim',
                'Invoicing → Lindsay'
            ]
        },
        bpmChart: null,
        sops: [
            { id: 'trailer-onboarding-offboarding',   title: 'Trailer Onboarding / Offboarding',           file: 'sops/trailer-onboarding-offboarding-sop.md' },
            { id: 'entering-a-cargill-load',          title: 'Entering a Cargill Load',                    file: 'sops/entering-a-cargill-load.md' },
        ]
    },
    {
        id: 'sugarcreek',
        name: 'Sugar Creek',
        person: 'Mike Jackson',
        personTitle: 'Sugar Creek / Cross-Dock Manager',
        reportsTo: 'Blake Lappan',
        icon: '🏭',
        desc: 'Sugar Creek facility operations, cross-dock coordination, and site management.',
        accentColor: '#14b8a6',
        tileBg: 'linear-gradient(135deg, #062020 0%, #031210 100%)',
        jobDescription: {
            owns: [
                'Sugar Creek facility — daily site operations and coordination',
                'Cross-dock operations — receiving, staging, and transfer coordination',
                'Site communication with drivers and facility contacts',
                'Equipment and trailer status at Sugar Creek site',
                'Reporting site issues to Blake and Austin'
            ],
            supports: [
                'Austin — driver coordination at Sugar Creek',
                'Lindsay — site-related paperwork and compliance'
            ],
            notOwns: [
                'Load booking and freight rates → Austin / Tim',
                'Invoicing → Lindsay'
            ]
        },
        bpmChart: null,
        sops: [
            { id: 'cross-dock-operations',            title: 'Cross-Dock Operations',                      file: 'sops/cross-dock-operations.md' },
        ]
    },
    {
        id: 'fleet',
        name: 'Fleet Maintenance',
        person: 'Mike Jackson',
        personTitle: 'Fleet Maintenance Manager',
        reportsTo: 'Blake Lappan',
        icon: '🔧',
        desc: 'All fleet repairs, maintenance requests, vendor coordination, and equipment tracking.',
        accentColor: '#fb923c',
        tileBg: 'linear-gradient(135deg, #2a1006 0%, #180800 100%)',
        jobDescription: {
            owns: [
                'Fleet maintenance and repairs — full ownership of all equipment',
                'Maintenance request intake — evaluate, prioritize, and schedule',
                'Vendor coordination — shop relationships, getting quotes',
                'Equipment status tracking — Samsara faults, DVIRs, mileage',
                'Auto-approve repairs under $500',
                'Automation and AI projects (future — after fleet maintenance is solid)',
                'Repair documentation — providing paperwork to Lindsay after completion'
            ],
            supports: [
                'Lindsay — spend approval requests ($500–$2,500 threshold)',
                'Austin — coordinating driver drop-offs at shops',
                'Blake — equipment investment analysis and recommendations'
            ],
            notOwns: [
                'Spend approval for repairs $500–$2,500 → Lindsay signs off',
                'Spend approval above $2,500 → Blake final',
                'Tag renewals and registration paperwork → Lindsay Weathington',
                'Dispatching trucks → Austin'
            ]
        },
        bpmChart: `
graph TD
    A["Issue Identified<br/>(Driver/Austin/Phil/Mike)"] --> B["Mike: Evaluate & Get Quote"]
    B --> C{Estimated Cost?}
    C -->|Under $500| D["Mike: Auto-Approve & Schedule"]
    C -->|$500–$2,500| E["Mike → Lindsay: Cash Flow Check"]
    C -->|Over $2,500| F["Mike → Blake: Final Approval"]
    E --> G{Lindsay Approves?}
    G -->|Yes| D
    G -->|No / Delay| H["Defer or Find Alternative"]
    F --> I{Blake Approves?}
    I -->|Yes| D
    I -->|No| H
    D --> J["Repair Completed"]
    J --> K["Mike: Send Docs to Lindsay"]
    K --> L["Lindsay: Update Fleet Paperwork"]
    style A fill:#1a0800,color:#fff,stroke:#fb923c
    style L fill:#0a2a1a,color:#fff,stroke:#10b981
`,
        sops: [
            { id: 'fleet-maintenance-request',        title: 'Fleet Maintenance Request Process',          file: 'sops/fleet-maintenance-request-process.md' },
            { id: 'equipment-repair-approval',        title: 'Equipment Repair Approval Workflow',         file: 'sops/equipment-repair-approval-workflow.md' },
            { id: 'tag-renewal-registration',         title: 'Tag Renewal & Registration Tracking',        file: 'sops/tag-renewal-registration-tracking.md' },
        ]
    },
    {
        id: 'hr',
        name: 'HR & Onboarding',
        person: 'Austin + Lindsay',
        personTitle: 'Shared Responsibility',
        reportsTo: 'Blake Lappan',
        icon: '🤝',
        desc: 'Hiring, driver orientation, employee onboarding, benefits, and HR compliance.',
        accentColor: '#a855f7',
        tileBg: 'linear-gradient(135deg, #200a30 0%, #100517 100%)',
        jobDescription: {
            owns: [
                'Hiring SOP — Austin screens in Tenstreet (2+ years experience required)',
                'Road test and drug screen coordination — Austin (Express Labs)',
                'New driver compliance file — Lindsay creates and maintains',
                'Policy acknowledgement forms — Lindsay collects signatures',
                'Driver added to Ditat + Samsara — Austin',
                'Benefits enrollment — Lindsay (via Paychex / transitioning)',
                'New hire docs and onboarding manuals — Lindsay maintains',
                'Orientation package — goal is one place for all onboarding materials'
            ],
            supports: [
                'Blake — final hiring approval and offer letters',
                'Mike — Sugar Creek and facility-specific orientation'
            ],
            notOwns: [
                'Final hiring/firing decisions → Blake',
                'Compensation decisions → Blake'
            ]
        },
        bpmChart: `
graph TD
    A["Need Identified (Austin/Blake)"] --> B["Austin: Post in Tenstreet"]
    B --> C["Austin: Screen Applicants<br/>(2+ years required)"]
    C --> D["Austin: Road Test + Drug Screen<br/>(Express Labs)"]
    D --> E{Pass?}
    E -->|No| F["Austin: Notify Applicant"]
    E -->|Yes| G["Blake: Final Approval & Offer"]
    G --> H["Lindsay: Create Compliance File<br/>Collect Policy Forms"]
    H --> I["Austin: Add to Ditat + Samsara"]
    I --> J["Austin: First Dispatch Briefing"]
    style A fill:#1a0520,color:#fff,stroke:#a855f7
    style J fill:#0f2040,color:#fff,stroke:#3b82f6
`,
        sops: [
            { id: 'onboarding',                       title: 'General Onboarding',                         file: 'sops/onboarding.md' },
            { id: 'adding-new-driver-to-ditat',       title: 'Adding a New Driver to Ditat',               file: 'sops/adding-new-driver-to-ditat.md' },
            { id: 'adding-new-driver-to-samsara',     title: 'Adding a New Driver to Samsara',             file: 'sops/adding-new-driver-to-samsara.md' },
            { id: 'driver-orientation',               title: 'Driver Orientation — Step by Step',          file: 'sops/driver-orientation-step-by-step.md' },
        ]
    },
    {
        id: 'compliance',
        name: 'Compliance & Safety',
        person: 'Austin + Lindsay',
        personTitle: 'Shared Responsibility',
        reportsTo: 'Blake Lappan',
        icon: '🛡️',
        desc: 'DOT/FMCSA compliance, HOS, ELD requirements, safety inspections, and vehicle registration.',
        accentColor: '#06b6d4',
        tileBg: 'linear-gradient(135deg, #062028 0%, #030f18 100%)',
        jobDescription: {
            owns: [
                'DOT/FMCSA compliance monitoring — Austin',
                'HOS (Hours of Service) tracking via Samsara — Austin',
                'ELD compliance and fault monitoring — Austin',
                'Driver violation review — Samsara daily review — Austin',
                'Driver policy violation documentation — Lindsay',
                'Vehicle tag renewals and registration — Lindsay (NEW)',
                'Fleet compliance docs (insurance certificates, permits) — Lindsay',
                'IFTA and mileage compliance paperwork — Lindsay'
            ],
            supports: [
                'Mike — DVIR review and equipment compliance flags',
                'Blake — escalated violations and compliance decisions'
            ],
            notOwns: [
                'Physical repairs and equipment issues → Mike Jackson'
            ]
        },
        bpmChart: null,
        sops: [
            { id: 'before-dispatch-compliance-check-drivers', title: 'Before Dispatch Compliance Check', file: 'sops/before-dispatch-compliance-check-drivers.md' },
            { id: 'tag-renewal-registration',         title: 'Tag Renewal & Registration Tracking',        file: 'sops/tag-renewal-registration-tracking.md' },
            { id: 'samsara-violation-review',         title: 'Samsara Violation Daily Review',             file: 'sops/samsara-violation-daily-review.md' },
        ]
    },
    {
        id: 'executive',
        name: 'Executive / Owner',
        person: 'Blake Lappan',
        personTitle: 'CEO / Owner',
        reportsTo: 'N/A',
        icon: '👔',
        desc: 'Final approvals, equipment investment, company strategy, and escalated decisions.',
        accentColor: '#eab308',
        tileBg: 'linear-gradient(135deg, #1a1400 0%, #0f0c00 100%)',
        jobDescription: {
            owns: [
                'Final approval: all pay raises, bonuses, and exceptions',
                'Equipment investment decisions (team does 80%, Blake decides on final 10%)',
                'Hiring, firing, and discipline escalations',
                'Repair spend approval above $2,500',
                'Bid spotting and long-term partnership pricing',
                'Company strategy and growth direction',
                'Final authority on all rate exceptions'
            ],
            supports: [
                'All departments — available for escalated decisions'
            ],
            notOwns: [
                'Day-to-day dispatch → Austin',
                'Invoicing and billing → Lindsay',
                'Sales execution → Tim',
                'Fleet maintenance → Mike'
            ]
        },
        bpmChart: null,
        sops: []
    },
];

// ── STATE ─────────────────────────────────────────────────────
let currentPosition = null;

// ── INIT ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    renderHomeTiles();
    renderRolesGrid();
    setupSearch();
    if (typeof mermaid !== 'undefined') {
        mermaid.initialize({ startOnLoad: false, theme: 'dark', themeVariables: { background: '#111827', primaryColor: '#1e3a5f', edgeLabelBackground: '#111827' } });
    }
});

// ── RENDER HOME TILES ─────────────────────────────────────────
function renderHomeTiles() {
    const grid = document.getElementById('tilesGrid');
    grid.innerHTML = POSITIONS.map(pos => {
        const sopCount = pos.sops.length;
        return `
        <div class="position-tile" onclick="openPosition('${pos.id}')"
             style="border-top: 3px solid ${pos.accentColor}; background: ${pos.tileBg};">
            <span class="tile-icon">${pos.icon}</span>
            <div class="tile-name">${pos.name}</div>
            <div class="tile-person" style="color:${pos.accentColor}">${pos.person}</div>
            <div class="tile-desc">${pos.desc}</div>
            <span class="tile-count" style="background:${pos.accentColor}22;color:${pos.accentColor};">
                ${sopCount} SOP${sopCount !== 1 ? 's' : ''}
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

    const pos = currentPosition;
    const grid = document.getElementById('sopListGrid');

    // Build job description card
    const jobDescHTML = `
    <div class="role-header" style="border-left: 4px solid ${pos.accentColor}">
        <div class="role-meta">
            <span class="role-icon">${pos.icon}</span>
            <div>
                <div class="role-person">${pos.person}</div>
                <div class="role-title" style="color:${pos.accentColor}">${pos.personTitle}</div>
                <div class="role-reports">Reports to: ${pos.reportsTo}</div>
            </div>
        </div>
    </div>

    <div class="job-desc-section">
        <div class="jd-col">
            <div class="jd-heading owns-heading">✅ Owns</div>
            <ul class="jd-list">
                ${pos.jobDescription.owns.map(i => `<li>${i}</li>`).join('')}
            </ul>
        </div>
        <div class="jd-col">
            <div class="jd-heading supports-heading">🤝 Supports</div>
            <ul class="jd-list">
                ${pos.jobDescription.supports.map(i => `<li>${i}</li>`).join('')}
            </ul>
            ${pos.jobDescription.notOwns.length ? `
            <div class="jd-heading notown-heading" style="margin-top:20px">🚫 Not This Role</div>
            <ul class="jd-list not-owns">
                ${pos.jobDescription.notOwns.map(i => `<li>${i}</li>`).join('')}
            </ul>` : ''}
        </div>
    </div>

    ${pos.bpmChart ? `
    <div class="bpm-section">
        <div class="section-label" style="color:${pos.accentColor}">📊 Process Flow</div>
        <div class="mermaid bpm-chart">${pos.bpmChart}</div>
    </div>` : ''}

    <div class="section-label" style="color:${pos.accentColor}; margin: 24px 0 14px">📋 Standard Operating Procedures</div>

    <div class="sop-list-inner">
        ${pos.sops.length === 0 ? `<p style="color:var(--text-secondary)">SOPs coming soon.</p>` :
        pos.sops.map(sop => {
            const available = !!sop.file;
            return `
            <div class="sop-card ${available ? '' : 'sop-coming-soon'}"
                 ${available ? `onclick="openSOP('${sop.id}')"` : ''}
                 style="border-left: 3px solid ${available ? pos.accentColor : 'var(--border)'};">
                <div class="sop-card-title">${sop.title}</div>
                <div class="sop-card-meta">
                    <span style="color:${available ? pos.accentColor : 'var(--text-muted)'}">
                        ${available ? 'Available' : 'Coming Soon'}
                    </span>
                    ${available ? '<span class="sop-card-arrow">&#8594;</span>' : ''}
                </div>
            </div>`;
        }).join('')}
    </div>`;

    grid.innerHTML = jobDescHTML;

    // Render mermaid charts
    if (typeof mermaid !== 'undefined' && pos.bpmChart) {
        mermaid.run({ querySelector: '.mermaid' });
    }
}

// ── OPEN SOP ──────────────────────────────────────────────────
async function openSOP(sopId) {
    const sop = currentPosition ? currentPosition.sops.find(s => s.id === sopId) : null;
    if (!sop || !sop.file) return;

    showView('viewSOPContent');
    document.getElementById('pageTitle').textContent = sop.title;
    document.getElementById('sopContentTitle').textContent = sop.title;
    document.getElementById('sopContentMeta').innerHTML =
        `<span>${currentPosition.icon} ${currentPosition.name}</span>
         <span>•</span>
         <span style="color:${currentPosition.accentColor}">${currentPosition.person}</span>`;

    const body = document.getElementById('sopContentBody');
    body.innerHTML = '<div class="loading"><div class="spinner"></div> Loading...</div>';

    try {
        const resp = await fetch(sop.file);
        if (!resp.ok) throw new Error('Not found');
        const md = await resp.text();
        body.innerHTML = marked.parse(md);
    } catch {
        body.innerHTML = '<p style="color:var(--text-secondary)">Content coming soon.</p>';
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── NAVIGATION ────────────────────────────────────────────────
function goBack() {
    const contentView = document.getElementById('viewSOPContent');
    if (!contentView.classList.contains('hidden')) {
        openPosition(currentPosition.id);
    } else {
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
    document.getElementById('searchInput').addEventListener('input', (e) => {
        const q = e.target.value.toLowerCase().trim();
        if (!q) { if (currentPosition) openPosition(currentPosition.id); else renderHomeTiles(); return; }

        showView('viewSOPList');
        document.getElementById('backBtn').classList.remove('hidden');
        document.getElementById('pageTitle').textContent = `Results: "${e.target.value}"`;

        const results = [];
        POSITIONS.forEach(pos => pos.sops.forEach(sop => {
            if (sop.title.toLowerCase().includes(q) || pos.name.toLowerCase().includes(q) || pos.person.toLowerCase().includes(q)) {
                results.push({ ...sop, pos });
            }
        }));

        const grid = document.getElementById('sopListGrid');
        grid.innerHTML = results.length === 0
            ? '<p style="color:var(--text-secondary);padding:20px">No results found.</p>'
            : `<div class="section-label">Search Results</div><div class="sop-list-inner">${results.map(r => `
                <div class="sop-card ${r.file ? '' : 'sop-coming-soon'}"
                     ${r.file ? `onclick="currentPosition=POSITIONS.find(p=>p.id==='${r.pos.id}');openSOP('${r.id}')"` : ''}
                     style="border-left:3px solid ${r.file ? r.pos.accentColor : 'var(--border)'}">
                    <div class="sop-card-title">${r.title}</div>
                    <div class="sop-card-meta">
                        <span style="color:${r.pos.accentColor}">${r.pos.icon} ${r.pos.name} &mdash; ${r.pos.person}</span>
                        ${r.file ? '<span class="sop-card-arrow">&#8594;</span>' : ''}
                    </div>
                </div>`).join('')}</div>`;
    });
}

// ── TAB SWITCHING ─────────────────────────────────────────────
function switchTab(tab) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('tab-' + tab).classList.add('active');

    // Show/hide panels
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.add('hidden'));
    const panelMap = { sop: 'tabSOP', policies: 'tabPolicies', roles: 'tabRoles', forms: 'tabForms' };
    document.getElementById(panelMap[tab]).classList.remove('hidden');

    // Show/hide search (SOP tab only)
    const searchWrap = document.getElementById('searchWrap');
    if (searchWrap) searchWrap.style.display = tab === 'sop' ? '' : 'none';

    // Reset SOP tab state when leaving
    if (tab !== 'sop') {
        document.getElementById('backBtn').classList.add('hidden');
        document.getElementById('pageTitle').textContent = 'Internal Portal';
    } else {
        if (!currentPosition) document.getElementById('pageTitle').textContent = 'SOP Library';
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── ROLES GRID (accordion) ────────────────────────────────────
function renderRolesGrid() {
    const grid = document.getElementById('rolesGrid');
    if (!grid) return;
    grid.innerHTML = POSITIONS.map(pos => {
        const jd = pos.jobDescription;
        return `
        <div class="role-accordion" id="accordion-${pos.id}">
            <div class="role-accordion-header" onclick="toggleAccordion('${pos.id}')" style="border-left: 4px solid ${pos.accentColor}">
                <span class="role-accordion-icon">${pos.icon}</span>
                <div style="flex:1">
                    <div class="role-accordion-name">${pos.name}</div>
                    <div class="role-accordion-person" style="color:${pos.accentColor}">${pos.person} &mdash; ${pos.personTitle}</div>
                </div>
                <span class="role-accordion-chevron">&#9660;</span>
            </div>
            <div class="role-accordion-body">
                <div class="job-desc-section" style="margin-top:18px">
                    <div class="jd-col">
                        <div class="jd-heading owns-heading">&#9989; Owns</div>
                        <ul class="jd-list">${jd.owns.map(i => `<li>${i}</li>`).join('')}</ul>
                    </div>
                    <div class="jd-col">
                        <div class="jd-heading supports-heading">&#129309; Supports</div>
                        <ul class="jd-list">${jd.supports.map(i => `<li>${i}</li>`).join('')}</ul>
                        ${jd.notOwns.length ? `
                        <div class="jd-heading notown-heading" style="margin-top:20px">&#128683; Not This Role</div>
                        <ul class="jd-list not-owns">${jd.notOwns.map(i => `<li>${i}</li>`).join('')}</ul>` : ''}
                    </div>
                </div>
            </div>
        </div>`;
    }).join('');
}

function toggleAccordion(posId) {
    const el = document.getElementById('accordion-' + posId);
    el.classList.toggle('open');
}
