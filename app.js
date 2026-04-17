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
            // ── Daily Routines ──────────────────────────────
            { id: 'morning-dispatch-operations',      title: 'Morning Dispatch Operations',                file: 'sops/morning-dispatch-operations.md' },
            { id: 'dispatch-daily-routine',           title: 'Dispatch Daily Routine',                     file: 'sops/dispatch-daily-routine.md' },
            { id: 'daily-checklist',                  title: 'Daily Checklist',                            file: 'sops/daily-checklist.md' },
            { id: 'daily-dispatch-objectives',        title: 'Daily Dispatch Objectives',                  file: 'sops/daily-dispatch-objectives.md' },
            { id: 'daily-time-updates',               title: 'Daily Time Updates',                         viewer: true },
            { id: 'afternoon-dispatch-operations',    title: 'Afternoon Dispatch Operations',              file: 'sops/afternoon-dispatch-operations.md' },
            // ── How-To / Reference ──────────────────────────
            { id: 'upon-arrival-first-logins',        title: 'Upon Arrival: First Log-Ins',                file: 'sops/upon-arrival-first-logins.md' },
            { id: 'upon-arrival-tire-checks',         title: 'Upon Arrival: Tire Checks',                  file: 'sops/upon-arrival-tire-checks.md' },
            { id: 'before-dispatch-compliance-check', title: 'Before Dispatch Compliance Check',           file: 'sops/before-dispatch-compliance-check-drivers.md' },
            { id: 'updating-trip-statuses',           title: 'Updating Trip Statuses in Ditat',            file: 'sops/updating-trip-statuses.md' },
            { id: 'building-a-load-in-ditat-tms',     title: 'Building a Load in Ditat TMS',               file: 'sops/building-a-load-in-ditat-tms.md' },
            { id: 'searching-for-backhaul',           title: 'Searching for and Securing a Backhaul Load', file: 'sops/searching-for-and-securing-a-backhaul-load.md' },
            { id: 'delay-notification',               title: 'Proactive Customer Delay Notification',      viewer: true },
            { id: 'samsara-violation-review',         title: 'Samsara Violation Daily Review',             file: 'sops/samsara-violation-daily-review.md' },
            { id: 'driver-orientation',               title: 'Driver Orientation — Step by Step',          file: 'sops/driver-orientation-step-by-step.md' },
        ]
    },
    {
        id: 'accounting',
        name: 'Accounting & HR',
        person: 'Lindsay Weathington',
        personTitle: 'Accounting Manager & HR',
        reportsTo: 'Blake Lappan',
        icon: '💼',
        desc: 'Invoicing, accounts receivable, payroll, QuickBooks, driver hiring, onboarding, compliance files, and HR.',
        accentColor: '#10b981',
        tileBg: 'linear-gradient(135deg, #0a2a1a 0%, #071510 100%)',
        jobDescription: {
            owns: [
                'Accounts Receivable — QB automated emails, collections, and follow-up',
                'Accounts Payable — bill pay on set schedule, vendor management',
                'Payroll processing (via Paychex)',
                'QuickBooks invoicing, billing reconciliation, and reporting',
                'Fuel reports — weekly compilation and distribution',
                'Maintenance spend approvals — $500–$2,500 threshold (cash flow check)',
                'Weekly cash flow monitoring and flagging to Blake',
                'New driver compliance file — Lindsay creates and maintains DQF',
                'Policy acknowledgement forms — Lindsay collects all signatures',
                'Benefits enrollment (via Paychex)',
                'New hire docs and onboarding manuals — Lindsay maintains',
                'Fleet paperwork — tag renewals, vehicle registration, compliance docs',
                'Driver compliance paperwork — policy acknowledgement for violations'
            ],
            supports: [
                'Austin — driver compliance forms, dispatch coordination, and POD confirmation',
                'Mike — maintenance spend approvals and repair documentation',
                'Blake — final hiring approval, cash flow visibility, and financial reporting'
            ],
            notOwns: [
                'Final hiring/firing decisions → Blake',
                'Compensation decisions → Blake',
                'Physical fleet repairs → Austin/Mike coordinate, Lindsay handles paperwork only',
                'Dispatching loads → Austin',
                'Driver scheduling → Austin'
            ]
        },
        bpmChart: `
graph TD
    A["Trip Closed in Ditat (Austin)"] --> B["Lindsay: Pull POD from Driver"]
    B --> C["Lindsay: Attach POD in Ditat"]
    C --> D["Lindsay: Create Invoice in QB"]
    D --> E["QB: Auto AR Email to Customer"]
    E --> F{Payment Received?}
    F --> |Yes| G["Lindsay: Post Payment in QB"]
    F --> |No - 30 days| H["Lindsay: Follow-Up per AR SOP"]
    H --> F
    style A fill:#0f2040,color:#fff,stroke:#3b82f6
    style G fill:#0a2a1a,color:#fff,stroke:#10b981
`,
        sops: [
            { id: 'sop-bill-empire-mondays',          title: 'SOP: Bill Empire (Mondays)',                 file: 'sops/sop-bill-empire-mondays.md' },
            { id: 'how-to-attach-and-invoice-ditat',  title: 'Attach Documents & Process Invoices in Ditat', file: 'sops/how-to-attach-documents-and-process-invoices-in-ditat-tms.md' },
            { id: 'ar-collections-process',           title: 'AR Collections Process',                     file: 'sops/ar-collections-process.md' },
            { id: 'qb-invoice-creation',              title: 'QB Invoice Creation',                        file: 'sops/qb-invoice-creation.md' },
            { id: 'tag-renewal-registration',         title: 'Tag Renewal & Registration Tracking',        file: 'sops/tag-renewal-registration-tracking.md' },
            { id: 'fleet-compliance',                 title: 'Fleet Compliance & Renewal Calendar',        viewer: true },
            { id: 'driver-hiring',                    title: 'Driver Hiring Process',                      viewer: true },
            { id: 'driver-onboarding',                title: 'Driver Onboarding & DQF File Creation',     viewer: true },
            { id: 'onboarding',                       title: 'General Employee Onboarding',                file: 'sops/onboarding.md' },
            { id: 'adding-new-driver-to-ditat',       title: 'Adding a New Driver to Ditat',               file: 'sops/adding-new-driver-to-ditat.md' },
            { id: 'adding-new-driver-to-samsara',     title: 'Adding a New Driver to Samsara',             file: 'sops/adding-new-driver-to-samsara.md' },
            { id: 'driver-orientation',               title: 'Driver Orientation — Step by Step',          file: 'sops/driver-orientation-step-by-step.md' },
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
        person: 'Steve Weindorfer',
        personTitle: 'Sugar Creek Manager',
        reportsTo: 'Blake Lappan',
        icon: '🏭',
        desc: 'Sugar Creek facility operations, cross-dock coordination, and site management.',
        accentColor: '#14b8a6',
        tileBg: 'linear-gradient(135deg, #062020 0%, #031210 100%)',
        jobDescription: {
            owns: [
                'Primary site management — day-to-day Sugar Creek operations and local customer relations',
                'Scheduling — ensures all shifts covered, Paychex daily schedules match operational needs',
                'Driver time card audits and PTO/time-off request verification',
                'Level 2 incident escalation contact — between night lead and operations manager',
                'Weekly safety briefs and yard safety walks — PPE and protocol compliance',
                'Report equipment failures and property damage within 15 minutes',
                'Daily operational summary to Austin Boerckel',
                'Physical yard walkthroughs to verify equipment location and condition vs. Samsara',
                'Communication of yard delays and workflow crises to leadership'
            ],
            supports: [
                'Austin — driver coordination and load status at Sugar Creek',
                'Lindsay — site-related paperwork and compliance',
                'Mike — flagging any equipment or fleet issues at the site'
            ],
            notOwns: [
                'Fleet maintenance and repair decisions → Mike Jackson',
                'Load booking and freight rates → Austin / Tim',
                'Invoicing → Lindsay'
            ]
        },
        bpmChart: null,
        sops: [
            { id: 'cross-dock-operations',                title: 'Cross-Dock Operations',                    file: 'sops/cross-dock-operations.md' },
            { id: 'cross-dock-documentation',             title: 'Cross-Dock Documentation Flow',            viewer: true },
            { id: 'sugarcreek-daily-checklist',           title: 'Sugar Creek Daily Operations Checklist',   viewer: true },
            { id: 'sugarcreek-incident-escalation',       title: 'Sugar Creek Incident Escalation',          viewer: true },
        ]
    },
    {
        id: 'sales',
        name: 'Sales',
        person: 'Tim Utzinger',
        personTitle: 'Sales Director',
        reportsTo: 'Blake Lappan',
        icon: '📈',
        desc: 'Customer acquisition, rate strategy, discovery process, and sales-to-ops handoff.',
        accentColor: '#f97316',
        tileBg: 'linear-gradient(135deg, #2a0f00 0%, #170800 100%)',
        jobDescription: {
            owns: [
                'Lead generation and customer acquisition',
                'Written discovery summary required before any rate is quoted',
                'Rate negotiation — never take first offer, know the floor',
                'Sales-to-ops handoff email within 24 hours of closing a deal',
                'Customer follow-up within 5 days of first load',
                'Responding to all inquiries within 30 minutes minimum',
                'Customer relationship management on all active accounts'
            ],
            supports: [
                'Austin — lane feasibility and driver availability before quoting',
                'Lindsay — billing setup and rate confirmation for new customers',
                'Blake — pricing exceptions and major account strategy'
            ],
            notOwns: [
                'Load dispatch and driver coordination → Austin',
                'Invoicing and collections → Lindsay',
                'Rate exceptions above agreed floor → Blake approval required'
            ]
        },
        bpmChart: `
graph TD
    A["Lead Identified"] --> B["Tim: Discovery Call\n(summary required)"]
    B --> C["Tim: Build Rate Quote"]
    C --> D["Tim: Present & Negotiate"]
    D --> E{Deal Closed?}
    E -->|No| F["Tim: Follow-Up Sequence"]
    F --> D
    E -->|Yes| G["Tim: Handoff Email\n(Austin + Lindsay)"]
    G --> H["Austin: First Load Setup"]
    G --> I["Lindsay: Billing Setup in QB"]
    H --> J["Tim: Follow-Up within 5 days"]
    style A fill:#2a0f00,color:#fff,stroke:#f97316
    style J fill:#0a2a1a,color:#fff,stroke:#10b981
`,
        sops: [
            { id: 'sales-discovery-process',          title: 'Sales Discovery Process',                    file: 'sops/sales-discovery-process.md' },
            { id: 'new-customer-onboarding',          title: 'New Customer Onboarding (Sales → Ops)',       file: 'sops/new-customer-onboarding.md' },
            { id: 'customer-onboarding',              title: 'Customer Onboarding — Sales to Ops Handoff', viewer: true },
        ]
    },
    {
        id: 'fleet',
        name: 'Fleet Maintenance',
        person: 'Mike Jackson',
        personTitle: 'Fleet Maintenance Manager',
        reportsTo: 'Blake Lappan',
        icon: '🔧',
        desc: 'All fleet repairs, maintenance requests, vendor coordination, equipment tracking, and automation projects.',
        accentColor: '#fb923c',
        tileBg: 'linear-gradient(135deg, #2a1006 0%, #180800 100%)',
        jobDescription: {
            owns: [
                '🗓️ Mon–Thu (On-Site): Fleet maintenance is the PRIMARY focus',
                'Maintenance request intake — evaluate, prioritize, and schedule all repairs',
                'Vendor coordination — shop relationships and getting repair quotes',
                'Equipment status tracking — Samsara faults, DVIRs, mileage checks',
                'Auto-approve repairs under $500',
                'Repair documentation — send paperwork to Lindsay after completion',
                'Cross-dock operations — oversight of receiving, staging, and freight transfers',
                '🤖 Mon–Thu (Secondary): Automation & AI projects — after fleet tasks are handled',
                '🏠 Friday (WFH): Work from home — required Sugar Creek check-in to confirm operations are running smoothly and no one needs help',
            ],
            supports: [
                'Lindsay — spend approval requests ($500–$2,500 threshold)',
                'Austin — coordinating driver drop-offs at shops',
                'Steve (Sugar Creek) — fleet and equipment issues flagged at the site',
                'Blake — equipment investment analysis and recommendations'
            ],
            notOwns: [
                'Spend approval for repairs $500–$2,500 → Lindsay signs off',
                'Spend approval above $2,500 → Blake final',
                'Tag renewals and registration paperwork → Lindsay Weathington',
                'Sugar Creek daily operations → Steve Weindorfer',
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
            { id: 'maintenance-request',              title: 'Equipment Maintenance Request Process',      viewer: true },
            { id: 'cross-dock-documentation',         title: 'Cross-Dock Documentation Flow',             viewer: true },
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
            { id: 'fleet-compliance',                 title: 'Fleet Compliance & Renewal Calendar',        viewer: true },
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
        sops: [
            { id: 'one-three-one-rule',                   title: '131 Rule — Escalation to Blake',           viewer: true },
        ]
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
             style="border-top: 3px solid ${pos.accentColor}; background: ${pos.tileBg}; text-align:center; align-items:center;">
            <span class="tile-icon">${pos.icon}</span>
            <div class="tile-name">${pos.name}</div>
        </div>`;
    }).join('');
}

// ── SOP ICON LOOKUP ───────────────────────────────────────────
const SOP_ICONS = {
    'morning-dispatch-operations'          : '🌅',
    'afternoon-dispatch-operations'        : '🌆',
    'dispatch-daily-routine'               : '📋',
    'daily-checklist'                      : '✅',
    'daily-dispatch-objectives'            : '🎯',
    'updating-trip-statuses'               : '🔄',
    'upon-arrival-first-logins'            : '🖥️',
    'upon-arrival-tire-checks'             : '🔍',
    'before-dispatch-compliance-check'     : '✔️',
    'before-dispatch-compliance-check-drivers': '✔️',
    'building-a-load-in-ditat-tms'         : '🏗️',
    'searching-for-backhaul'               : '🔎',
    'samsara-violation-review'             : '⚠️',
    'driver-orientation'                   : '🪪',
    'daily-time-updates'                   : '🕐',
    'delay-notification'                   : '📢',
    'sop-bill-empire-mondays'              : '📅',
    'how-to-attach-and-invoice-ditat'      : '📎',
    'tag-renewal-registration'             : '🏷️',
    'ar-collections-process'              : '💰',
    'qb-invoice-creation'                  : '🧾',
    'driver-hiring'                        : '📝',
    'driver-onboarding'                    : '🆕',
    'fleet-compliance'                     : '⚖️',
    'cross-dock-operations'                : '📦',
    'cross-dock-documentation'             : '📄',
    'sugarcreek-daily-checklist'           : '✅',
    'sugarcreek-incident-escalation'       : '🚨',
    'customer-onboarding'                  : '🤝',
    'fleet-maintenance-request'            : '🔧',
    'equipment-repair-approval'            : '💵',
    'maintenance-request'                  : '🔨',
    'onboarding'                           : '👋',
    'adding-new-driver-to-ditat'           : '➕',
    'adding-new-driver-to-samsara'         : '📡',
    'one-three-one-rule'                   : '💡',
    'maintenance-spend-approval'           : '💳',
    'cross-dock-operations'                : '📦',
};

// ── OPEN POSITION ─────────────────────────────────────────────
function openPosition(posId) {
    currentPosition = POSITIONS.find(p => p.id === posId);
    if (!currentPosition) return;

    showView('viewSOPList');
    document.getElementById('pageTitle').textContent = currentPosition.name;
    document.getElementById('backBtn').classList.remove('hidden');

    const pos = currentPosition;
    const grid = document.getElementById('sopListGrid');

    const tilesHTML = pos.sops.length === 0
        ? `<p style="color:var(--text-secondary);padding:24px 0;grid-column:1/-1;">SOPs coming soon.</p>`
        : pos.sops.map(sop => {
            const available = !!(sop.file || sop.viewer);
            const icon = SOP_ICONS[sop.id] || '📄';
            return `
            <div class="sop-tile ${available ? '' : 'sop-tile-soon'}"
                 ${available ? `onclick="openSOP('${sop.id}')"` : ''}
                 style="--tile-accent:${available ? pos.accentColor : 'var(--border)'}">
                <div class="sop-tile-icon">${icon}</div>
                <div class="sop-tile-body">
                    <div class="sop-tile-title">${sop.title}</div>
                    <div class="sop-tile-status" style="color:${available ? pos.accentColor : 'var(--text-muted)'}">
                        ${available ? 'Available' : 'Coming Soon'}
                    </div>
                </div>
                ${available ? '<span class="sop-tile-arrow">&#8594;</span>' : ''}
            </div>`;
        }).join('');

    grid.innerHTML = `
        <div class="pos-person-bar" style="border-left:3px solid ${pos.accentColor}">
            <span class="pos-person-icon">${pos.icon}</span>
            <div>
                <div class="pos-person-name">${pos.person}</div>
                <div class="pos-person-title" style="color:${pos.accentColor}">${pos.personTitle}</div>
            </div>
        </div>
        <div class="sop-tiles-grid">${tilesHTML}</div>
    `;
}

function switchTab() {} // stub — kept for safety

// ── OPEN SOP ──────────────────────────────────────────────────
async function openSOP(sopId) {
    const sop = currentPosition ? currentPosition.sops.find(s => s.id === sopId) : null;
    if (!sop) return;

    // New viewer-based SOPs open in sop-viewer.html
    if (sop.viewer) {
        window.location.href = `sop-viewer.html?id=${sopId}`;
        return;
    }

    if (!sop.file) return;
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
    // Only hide/show views within the SOP tab — don't touch other tab content
    document.querySelectorAll('#tabSOP .view').forEach(v => v.classList.add('hidden'));
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
        const chartId = `chart-${pos.id}`;
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
                ${pos.bpmChart ? `
                <div class="bpm-section" style="margin-top:20px">
                    <div class="section-label" style="color:${pos.accentColor}">&#128202; Process Flow</div>
                    <div class="mermaid" id="${chartId}">${pos.bpmChart}</div>
                </div>` : ''}
            </div>
        </div>`;
    }).join('');
}

function toggleAccordion(posId) {
    const el = document.getElementById('accordion-' + posId);
    const wasOpen = el.classList.contains('open');
    el.classList.toggle('open');
    // Render mermaid chart when accordion opens (deferred so it has dimensions)
    if (!wasOpen && typeof mermaid !== 'undefined') {
        const chartEl = el.querySelector('.mermaid');
        if (chartEl && !chartEl.dataset.rendered) {
            chartEl.dataset.rendered = '1';
            mermaid.run({ nodes: [chartEl] });
        }
    }
}
