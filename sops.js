// ============================================================
// SPOT ON LOGISTICS — SOP DATA
// All SOPs use this file. Add new SOPs here following the
// same object structure. They will auto-render in sop-viewer.html
// ============================================================

const SOPS = {

  // ─── DRIVER HIRING PROCESS ──────────────────────────────
  'driver-hiring': {
    id: 'driver-hiring',
    title: 'Driver Hiring Process',
    category: 'Human Resources',
    owner: 'Lindsay Weathington + Austin Boerckel',
    version: '1.0',
    lastUpdated: 'April 2025',
    purpose: 'To establish a clear, consistent process for recruiting, screening, and hiring CDL drivers at Spot On Logistics — so nothing falls through the cracks and we stay compliant from day one.',
    scope: 'All new CDL driver hires, whether company driver, owner operator, or hostler.',
    whoItAppliesTo: ['Lindsay Weathington (owns the process)', 'Austin Boerckel (screening & orientation)'],
    steps: [
      {
        heading: 'Position Opens',
        details: [
          'Lindsay posts the job on applicable platforms (Facebook, DAT, etc.)',
          'Job post must include: minimum 2 years CDL experience, clean MVR, no major violations in last 3 years',
          'Austin is notified so he can flag any candidates he knows personally'
        ]
      },
      {
        heading: 'Application Review',
        details: [
          'Lindsay collects and reviews all applications',
          'Hard disqualifiers: less than 2 years CDL, DUI in last 5 years, more than 2 at-fault accidents in 3 years',
          'Qualified candidates are forwarded to Austin for a phone screen'
        ]
      },
      {
        heading: 'Austin Phone Screen',
        details: [
          'Austin conducts a brief phone call — experience, availability, equipment comfort, attitude check',
          'If Austin gives the go-ahead, Lindsay schedules an in-person interview',
          'If not a fit, Lindsay sends a polite decline'
        ]
      },
      {
        heading: 'Pre-Hire Checks',
        details: [
          'MVR (Motor Vehicle Record) pulled by Lindsay',
          'Background check initiated by Lindsay',
          'PSP report (Pre-Employment Screening Program) run if applicable',
          'Drug test scheduled — must pass before first dispatch'
        ]
      },
      {
        heading: 'Offer & Paperwork',
        details: [
          'Blake approves final hire decision and rate',
          'Lindsay sends offer and collects all new hire paperwork',
          'Infinit-I safety training assigned by Lindsay — must be completed before first load',
          'Lindsay creates DQF (Driver Qualification File) — see Driver Onboarding SOP'
        ]
      },
      {
        heading: 'On-Site Orientation',
        details: [
          'Austin meets the driver in person for on-site orientation',
          'Austin covers: yard layout, equipment expectations, check-call procedures, dispatch communication',
          'Austin introduces driver to Phil (KC) or Steve (Sugar Creek) depending on assignment',
          'Lindsay is NOT required to be present — paperwork is already done'
        ]
      },
      {
        heading: 'First Dispatch',
        details: [
          'Driver cannot be dispatched until: DQF complete, drug test passed, Infinit-I assigned, policy forms signed',
          'Lindsay confirms compliance checklist is complete before giving Austin the green light',
          'Austin assigns first load and introduces driver to the check-call process'
        ]
      }
    ],
    rules: [
      'Minimum 2 years CDL experience — no exceptions without Blake approval',
      'No driver is dispatched without Lindsay\'s compliance sign-off',
      'Drug test must be passed before first dispatch — period',
      'All paperwork is Lindsay\'s lane — Austin does orientation only'
    ],
    related: ['driver-onboarding', 'fleet-compliance']
  },

  // ─── DRIVER ONBOARDING & DQF ────────────────────────────
  'driver-onboarding': {
    id: 'driver-onboarding',
    title: 'Driver Onboarding & DQF File Creation',
    category: 'Human Resources / Compliance',
    owner: 'Lindsay Weathington',
    version: '1.0',
    lastUpdated: 'April 2025',
    purpose: 'To ensure every new driver has a complete, compliant Driver Qualification File (DQF) before they ever turn a wheel for Spot On Logistics.',
    scope: 'All new drivers — company driver, owner operator, or hostler.',
    whoItAppliesTo: ['Lindsay Weathington (owns entirely)', 'Austin Boerckel (orientation only)'],
    steps: [
      {
        heading: 'Create the DQF Folder',
        details: [
          'Lindsay creates a physical or digital folder for the new driver',
          'Label: [Last Name, First Name] — Hire Date',
          'Folder lives in: [your designated compliance folder in Google Drive or filing cabinet]'
        ]
      },
      {
        heading: 'Collect Required Documents',
        details: [
          'Valid CDL (copy front and back)',
          'Medical Examiner\'s Certificate (current)',
          'MVR — must be pulled within 30 days of hire',
          'Background check results',
          'Drug test results (must be negative)',
          'Employment application (signed)',
          'Previous employer verification (last 3 years CDL employers contacted)',
          'PSP report (if applicable)'
        ]
      },
      {
        heading: 'Collect Signed Policy Forms',
        details: [
          'Driver Policy Acknowledgement Form',
          'Cell Phone / Distracted Driving Policy',
          'Drug & Alcohol Policy (with consent for testing)',
          'No driver is dispatched until ALL forms are signed and in the file'
        ]
      },
      {
        heading: 'Assign Safety Training',
        details: [
          'Lindsay assigns Infinit-I Workforce Safety training modules',
          'Driver must complete assigned modules before first dispatch',
          'Record completion date in DQF'
        ]
      },
      {
        heading: 'Annual Review Schedule',
        details: [
          'Set a calendar reminder for 12 months out — annual DQF review',
          'MVR must be pulled annually',
          'Medical certificate expiration tracked — alert driver 60 days before expiration',
          'Infinit-I training continued annually'
        ]
      },
      {
        heading: 'Compliance Sign-Off',
        details: [
          'Lindsay reviews completed DQF and confirms everything is present',
          'Lindsay notifies Austin in writing (text or email): "[Driver Name] is cleared to dispatch"',
          'No verbal only — must be documented'
        ]
      }
    ],
    rules: [
      'No driver dispatched without Lindsay\'s explicit written clearance',
      'MVR must be current (within 30 days of hire, then annually)',
      'All policy forms must be signed before first load — no exceptions',
      'Medical certificate expiration is Lindsay\'s responsibility to track'
    ],
    related: ['driver-hiring', 'fleet-compliance']
  },

  // ─── EQUIPMENT MAINTENANCE REQUEST ──────────────────────
  'maintenance-request': {
    id: 'maintenance-request',
    title: 'Equipment Maintenance Request Process',
    category: 'Fleet Maintenance',
    owner: 'Mike Jackson',
    version: '1.0',
    lastUpdated: 'April 2025',
    purpose: 'To ensure all equipment issues are reported, evaluated, and resolved in a consistent way — with the right approvals at the right spend levels, and full documentation every time.',
    scope: 'All Spot On equipment — trucks, trailers, hostlers, yard equipment.',
    whoItAppliesTo: ['Anyone who spots an equipment issue (driver, Phil, Steve, Austin)', 'Mike Jackson (owns evaluation and resolution)', 'Lindsay Weathington (approval $500–$2,500)', 'Blake Lappan (approval over $2,500)'],
    steps: [
      {
        heading: 'Issue Flagged',
        details: [
          'Anyone on the team who notices an equipment issue notifies Mike immediately',
          'If it\'s a safety issue (brakes, tires, lights), the equipment is pulled from service until Mike evaluates',
          'Austin flags operational issues (truck won\'t start, driver reports fault)',
          'Phil flags KC yard issues, Steve flags Sugar Creek issues'
        ]
      },
      {
        heading: 'Mike Evaluates',
        details: [
          'Mike physically inspects or gets all details from the person who flagged it',
          'Mike determines: can it be deferred, or does it need immediate attention?',
          'Mike logs the issue in the Repair Tracker (Google Drive)',
          'Mike gets at least one quote from a trusted vendor; over $1,000 requires two quotes'
        ]
      },
      {
        heading: 'Spend Tier Approval',
        details: [
          '💚 Under $500 — Mike auto-approves and schedules. No further approval needed.',
          '🟡 $500–$2,500 — Mike sends quote to Lindsay for cash flow check. Lindsay approves or flags concern.',
          '🔴 Over $2,500 — Mike uses the 131 Rule with Blake: 1 Problem, 3 Options, 1 Recommendation. Blake approves.'
        ]
      },
      {
        heading: 'Schedule the Repair',
        details: [
          'Mike coordinates with the shop/vendor on timing',
          'If truck is in service, Mike works with Austin to schedule downtime with minimal dispatch disruption',
          'Mike (or Tim/Austin) runs parts if needed — physical tasks Mike can\'t do due to his back'
        ]
      },
      {
        heading: 'Repair Completed',
        details: [
          'Mike collects all invoices and paperwork from the shop',
          'Mike sends all documents to Lindsay the same day repair is complete',
          'Mike updates the Repair Tracker with: date, issue, vendor, cost, resolution',
          'Equipment is returned to service — Mike confirms with Austin'
        ]
      }
    ],
    rules: [
      'No unilateral spend over $500 without Lindsay approval',
      'No unilateral spend over $2,500 without Blake approval (use 131 Rule)',
      'All repairs logged in Repair Tracker — every time, no exceptions',
      'All invoices to Lindsay same day as repair completion',
      'Safety defects pull the equipment from service immediately — no exceptions'
    ],
    related: ['fleet-compliance', 'cross-dock-documentation']
  },

  // ─── FLEET COMPLIANCE & RENEWAL CALENDAR ────────────────
  'fleet-compliance': {
    id: 'fleet-compliance',
    title: 'Fleet Compliance & Renewal Calendar',
    category: 'Compliance / Accounting',
    owner: 'Lindsay Weathington',
    version: '1.0',
    lastUpdated: 'April 2025',
    purpose: 'To ensure Spot On Logistics never operates with an expired registration, lapsed insurance, or missed regulatory filing. Lindsay tracks all deadlines 90 days out — nothing catches us off guard.',
    scope: 'All vehicles, trailers, and regulatory filings for Spot On Logistics / KC Cartage LLC.',
    whoItAppliesTo: ['Lindsay Weathington (owns entirely)', 'Mike Jackson (provides equipment details)', 'Blake Lappan (signs off on large renewals/payments)'],
    steps: [
      {
        heading: 'Annual Renewal Calendar Setup',
        details: [
          'Lindsay maintains a master spreadsheet (or Google Sheet) with all renewal dates',
          'Tracked items: License plates/tags (per vehicle), DOT registration, UCR (Unified Carrier Registration), MoDOT operating authority, IFTA sticker, Vehicle insurance policies, Cargo insurance renewal, Physical damage coverage',
          'All items entered with: due date, 90-day alert date, responsible party, cost estimate'
        ]
      },
      {
        heading: '90-Day Alert',
        details: [
          'Calendar reminder fires 90 days before any expiration',
          'Lindsay begins the renewal process — gathers documents, contacts vendors/agencies',
          'For DOT/UCR/MoDOT: Lindsay files online through FMCSA or state portal',
          'For insurance: Lindsay contacts the broker and confirms coverage continuation'
        ]
      },
      {
        heading: 'IFTA Quarterly Filing',
        details: [
          'IFTA is filed quarterly: April 30, July 31, October 31, January 31',
          'Lindsay pulls mileage by state from Samsara and fuel data from EFS',
          'Lindsay files through Missouri IFTA portal',
          'Filing confirmation saved in the compliance folder'
        ]
      },
      {
        heading: 'Tag & Registration Renewals',
        details: [
          'Lindsay tracks expiration dates for every vehicle and trailer',
          'Renewals initiated 90 days out',
          'New stickers/cards delivered and placed in the vehicle by Mike or Austin',
          'No truck operates with an expired plate — Lindsay notifies Austin immediately if one is about to expire'
        ]
      },
      {
        heading: 'Insurance Monthly Review',
        details: [
          'Lindsay reviews insurance billing monthly — confirms amounts match policy',
          'Any vehicle added or removed from the fleet is updated with the broker within 5 business days',
          'Certificates of insurance sent to customers/brokers when requested'
        ]
      }
    ],
    rules: [
      'All deadlines tracked 90 days out minimum',
      'No vehicle operates with an expired plate, tag, or registration',
      'IFTA filed on time every quarter — late filings result in penalties',
      'Insurance changes (adds/removes) processed within 5 business days'
    ],
    related: ['driver-onboarding', 'maintenance-request']
  },

  // ─── CUSTOMER ONBOARDING / SALES HANDOFF ────────────────
  'customer-onboarding': {
    id: 'customer-onboarding',
    title: 'Customer Onboarding — Sales to Ops Handoff',
    category: 'Sales / Operations',
    owner: 'Tim Utzinger',
    version: '1.0',
    lastUpdated: 'April 2025',
    purpose: 'When a new customer is closed, operations and accounting need full information before the first load moves. This process ensures a clean handoff from Tim to Austin and Lindsay every time — no surprises.',
    scope: 'All new customers onboarded by Tim Utzinger.',
    whoItAppliesTo: ['Tim Utzinger (owns handoff)', 'Austin Boerckel (receives ops details)', 'Lindsay Weathington (receives billing/rate details)'],
    steps: [
      {
        heading: 'Discovery & Pricing (Pre-Handoff)',
        details: [
          'Tim completes a written discovery summary before any rate is quoted',
          'Discovery must include: customer name, contact info, lanes, freight type, volume, special requirements, rate expectations',
          'No rate goes out without a completed discovery document — no exceptions'
        ]
      },
      {
        heading: 'Deal Closed — Handoff Email Sent Within 24 Hours',
        details: [
          'Tim sends a formal handoff email to: Austin Boerckel + Lindsay Weathington (CC Blake if major account)',
          'Handoff email must include: Customer name and contact, Lanes (origin → destination), Rate per load or per mile, Special instructions (hazmat, temp control, appointment required, etc.), Expected start date, Billing instructions (who gets the invoice, PO# required?, payment terms)'
        ]
      },
      {
        heading: 'Austin Reviews & Sets Up',
        details: [
          'Austin confirms he received the handoff and acknowledges in writing',
          'Austin sets up the customer in Ditat (or confirms existing record)',
          'Austin confirms dispatch can support the lane before first load is committed'
        ]
      },
      {
        heading: 'Lindsay Sets Up Billing',
        details: [
          'Lindsay sets up the customer billing record in QuickBooks',
          'Confirms payment terms and billing contact',
          'Flags any customers requiring factoring or credit approval'
        ]
      },
      {
        heading: 'First Load',
        details: [
          'Tim is notified when first load moves',
          'Tim follows up with the customer within 5 business days of the first load',
          'Tim reports any feedback (positive or negative) to Austin'
        ]
      }
    ],
    rules: [
      'No rate quoted without a written discovery summary',
      'Handoff email sent within 24 hours of closing the deal',
      'Operations does not commit a load until handoff is received and confirmed',
      'Tim follows up with every new customer after their first load — no exceptions'
    ],
    related: ['driver-hiring']
  },

  // ─── CROSS-DOCK DOCUMENTATION FLOW ──────────────────────
  'cross-dock-documentation': {
    id: 'cross-dock-documentation',
    title: 'Cross-Dock Documentation Flow',
    category: 'Operations / Fleet',
    owner: 'Mike Jackson',
    version: '1.0',
    lastUpdated: 'April 2025',
    purpose: 'To ensure every cross-dock movement is documented completely — photos, seal verification, BOLs — so there is never a question about what was received, when, or in what condition.',
    scope: 'All freight movements through the Spot On cross-dock facility.',
    whoItAppliesTo: ['Mike Jackson (oversees and owns documentation)', 'Drivers (perform physical tasks)', 'Lindsay Weathington (receives BOLs same day)'],
    steps: [
      {
        heading: 'Inbound Freight Arrival',
        details: [
          'Mike (or designated person) is present or on call when freight arrives',
          'Take arrival photos: trailer exterior, seal number visible, dock condition',
          'Verify seal number against the BOL before breaking seal',
          'Document any discrepancies immediately — note on BOL and photograph'
        ]
      },
      {
        heading: 'Unloading',
        details: [
          'Count and verify freight against BOL',
          'Note any damage, shortages, or overages on the delivery receipt',
          'Take photos of any damage before freight is moved',
          'Damaged freight must be photographed and reported to Austin and Lindsay the same day'
        ]
      },
      {
        heading: 'Staging',
        details: [
          'Freight staged in designated area, clearly labeled with customer name and outbound load #',
          'Mike confirms staging with dispatch so Austin knows what\'s available'
        ]
      },
      {
        heading: 'Outbound Loading',
        details: [
          'Freight loaded per Austin\'s dispatch instructions',
          'Take departure photos: truck/trailer number, seal applied, cargo loaded',
          'New BOL completed — Mike or driver signs',
          'Outbound seal number documented'
        ]
      },
      {
        heading: 'Documentation to Lindsay',
        details: [
          'All BOLs (inbound and outbound) sent to Lindsay the same day',
          'Preferred method: photo to Lindsay\'s phone or email',
          'Lindsay invoices the customer upon receipt of BOL'
        ]
      }
    ],
    rules: [
      'Arrival and departure photos are mandatory — no exceptions',
      'Seal number always verified against BOL before breaking',
      'All damage documented with photos before freight is touched',
      'BOLs to Lindsay same day — not next day, same day'
    ],
    related: ['maintenance-request']
  },

  // ─── PROACTIVE CUSTOMER DELAY NOTIFICATION ──────────────
  'delay-notification': {
    id: 'delay-notification',
    title: 'Proactive Customer Delay Notification',
    category: 'Operations / Customer Service',
    owner: 'Austin Boerckel',
    version: '1.0',
    lastUpdated: 'April 2025',
    purpose: 'The customer should never find out a load is running late by looking at an empty dock. Spot On dispatchers notify the customer before the problem happens — always.',
    scope: 'All active loads where a delay is anticipated or confirmed.',
    whoItAppliesTo: ['Austin Boerckel (owns communication)', 'Drivers (must report issues to Austin immediately)', 'Tim Utzinger (notified if a new customer is impacted)'],
    steps: [
      {
        heading: 'Driver Reports a Delay',
        details: [
          'Driver contacts Austin as soon as they know there\'s a problem (breakdown, traffic, missed pickup window, etc.)',
          'Austin gets: current location, estimated delay time, reason',
          'If the driver doesn\'t call in, Austin calls them — Austin does not wait'
        ]
      },
      {
        heading: 'Austin Assesses',
        details: [
          'Is the customer going to be impacted? If yes, notify immediately — do not wait to see if the driver makes up time',
          'What is the revised ETA?',
          'Are there alternative solutions (another driver, rescheduling, etc.)?'
        ]
      },
      {
        heading: 'Customer Notification',
        details: [
          'Austin (or Tim for new customers) contacts the customer directly — phone call preferred, email or text acceptable as follow-up',
          'Message must include: what happened, current status, revised ETA, what we are doing to fix it',
          'Do NOT make excuses — take ownership and give facts',
          'Notify BEFORE the appointment time, not after'
        ]
      },
      {
        heading: 'Document the Delay',
        details: [
          'Austin logs the delay and notification in Ditat as a trip note',
          'If the customer was impacted, Tim is notified so he can do proactive follow-up',
          'If there is a potential claim or redelivery charge, Lindsay is notified immediately'
        ]
      }
    ],
    rules: [
      'Customer is NEVER surprised by a late load — always notified proactively',
      'Notification happens before the appointment window, not after',
      'All delays logged in Ditat as trip notes',
      'New customer delays always loop in Tim for relationship management'
    ],
    related: ['customer-onboarding']
  }

};
