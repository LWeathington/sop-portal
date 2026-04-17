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
  },

  // ─── DAILY TIME UPDATES ──────────────────────────────────
  'daily-time-updates': {
    id: 'daily-time-updates',
    title: 'Daily Time Updates',
    category: 'Dispatch Operations',
    owner: 'Austin Boerckel',
    version: '1.0',
    lastUpdated: 'April 2025',
    purpose: 'To ensure all driver check calls and time updates are recorded accurately and consistently in Ditat TMS throughout the day — so every load has a clear, documented status at all times.',
    tools: ['Ditat TMS', 'Samsara', 'Phone / Text'],
    when: [
      'Every time a driver checks in with an update (departure, en route, arrived, etc.)',
      'Any time a load status changes — even if the driver didn\'t call, Austin checks',
      'End of day — all active loads must have a current status before Austin signs off'
    ],
    inputs: [
      'Driver\'s call-in or text with their current status and location',
      'Samsara GPS to verify location if driver is late to check in',
      'Ditat load number for the active trip'
    ],
    whoItAppliesTo: ['Austin Boerckel (primary)', 'Any dispatcher covering for Austin'],
    steps: [
      { partLabel: 'Part A — Driver Check-In Received' },
      {
        heading: 'Receive the Update',
        details: [
          'Driver calls or texts with their status: departed, en route, arrived at pickup, loaded, en route to delivery, arrived at delivery, delivered/unloaded',
          'Get: current location (city/state or mile marker), estimated time to next stop, any issues or delays',
          'If driver is more than 30 minutes past expected check-in time, Austin calls them — do not wait'
        ]
      },
      {
        heading: 'Log It in Ditat Immediately',
        details: [
          'Open Ditat TMS and pull up the driver\'s active trip',
          'Navigate to the correct stop and update the status (Departed, Arrived, etc.)',
          'Enter the exact time the driver reported (not the time you entered it)',
          'Add a trip note with any relevant details: delays, exceptions, customer requests'
        ],
        decision: 'Is the driver running late to a customer appointment? → Yes: proceed to Delay Notification SOP immediately before logging.'
      },
      { partLabel: 'Part B — Pickup Confirmation' },
      {
        heading: 'Pickup Arrived',
        details: [
          'Update stop status to "Arrived at Pickup" with driver\'s reported time',
          'Confirm freight is ready — if driver reports a wait, log it as a trip note with start time',
          'Excessive wait (over 2 hours): notify customer and document in Ditat'
        ]
      },
      {
        heading: 'Loaded and Departed',
        details: [
          'Update to "Departed Pickup" once driver confirms loaded and en route',
          'Confirm load count and seal number if applicable',
          'Calculate ETA to delivery and confirm it\'s within the appointment window',
          'If ETA is tight, notify delivery customer proactively'
        ],
        decision: 'Will driver make the delivery appointment? → No or uncertain: go to Delay Notification SOP now.'
      },
      { partLabel: 'Part C — Delivery Confirmation' },
      {
        heading: 'Arrived at Delivery',
        details: [
          'Update stop status to "Arrived at Delivery" with driver\'s time',
          'If driver is at a lumper facility, confirm lumper process and cost',
          'Log any wait time as a trip note'
        ]
      },
      {
        heading: 'Delivered',
        details: [
          'Update stop status to "Delivered"',
          'Confirm driver received a signed BOL or delivery receipt',
          'Driver to send POD photo to Austin — Austin forwards to Lindsay for invoicing',
          'If driver cannot get a signed BOL, document the reason and notify Lindsay immediately'
        ]
      },
      { partLabel: 'Part D — End of Day Wrap-Up' },
      {
        heading: 'End of Day Status Check',
        details: [
          'Before signing off, pull up all active loads in Ditat',
          'Every load must have a current, accurate status — no blank or stale entries',
          'Any driver who hasn\'t checked in by end of day: Austin calls or texts to confirm status',
          'Tomorrow\'s loads confirmed with drivers the night before or first thing in the morning'
        ]
      }
    ],
    rules: [
      'Every driver check-in gets logged in Ditat — no exceptions, no "I\'ll do it later"',
      'Time entered = driver\'s reported time, NOT the time you type it',
      'If a driver is 30+ minutes past expected check-in, Austin calls them — don\'t assume',
      'All active loads have a current status before Austin leaves for the day',
      'PODs go to Lindsay same day as delivery — no delays on invoicing'
    ],
    related: ['delay-notification', 'customer-onboarding']
  },

  // ─── SUGAR CREEK INCIDENT ESCALATION ────────────────────
  'sugarcreek-incident-escalation': {
    id: 'sugarcreek-incident-escalation',
    title: 'Sugar Creek Incident Escalation',
    category: 'Operations / Safety',
    owner: 'Steve Weindorfer',
    version: '1.0',
    lastUpdated: 'April 2025',
    purpose: 'To ensure every incident, equipment failure, or safety issue at the Sugar Creek facility is escalated to the right person at the right level — fast. No one should be guessing who to call.',
    tools: ['Phone / Text', 'Samsara (equipment tracking)'],
    when: [
      'Any equipment failure or breakdown on site',
      'Any safety incident or near-miss',
      'Property damage of any kind',
      'Any situation where operations cannot continue normally'
    ],
    inputs: [
      'Details of the incident: what happened, when, equipment involved, people involved',
      'Current status: is anyone injured? Is equipment operable? Is the site safe?'
    ],
    whoItAppliesTo: [
      'Night Lead — Level 1 (first response)',
      'Steve Weindorfer — Level 2 (site manager response)',
      'Austin Boerckel — Level 3 (operations manager)',
      'Blake Lappan — Level 4 (owner, major incidents only)'
    ],
    steps: [
      { partLabel: 'Part A — Level 1 (Night Lead Handles)' },
      {
        heading: 'Issue Identified On Site',
        details: [
          'Night Lead assesses the situation: What happened? Is anyone hurt? Is equipment operable?',
          'If minor and within normal operations (tire flat, minor mechanical) — Night Lead handles directly',
          'Night Lead documents the issue in a log or text message to Steve'
        ],
        decision: 'Can Night Lead resolve it without disrupting operations? → Yes: handle and document. No: escalate to Level 2 (Steve) immediately.'
      },
      { partLabel: 'Part B — Level 2 (Steve Responds)' },
      {
        heading: 'Steve Notified — Equipment or Safety Issue',
        details: [
          'Night Lead contacts Steve immediately — call or text, do NOT wait until morning',
          'Steve responds within 15 minutes for equipment failures and property damage (non-negotiable)',
          'Steve assesses: Can we keep operating? Is the equipment safe to use?',
          'If equipment is not safe, Steve pulls it from service immediately and notifies Austin'
        ]
      },
      {
        heading: 'Steve Coordinates Resolution',
        details: [
          'Steve contacts Mike Jackson for any equipment/fleet issues that need repair evaluation',
          'Steve communicates yard status to Austin: what\'s affected, what\'s still operational, ETA on resolution',
          'Steve documents everything: time of incident, what happened, actions taken, who was notified'
        ],
        decision: 'Is this beyond Steve\'s ability to resolve? Or is it a safety incident involving injury or significant property damage? → Yes: escalate to Level 3 (Austin).'
      },
      { partLabel: 'Part C — Level 3 (Austin Escalation)' },
      {
        heading: 'Austin Notified',
        details: [
          'Steve calls Austin directly — do not text for Level 3 escalations, call',
          'Austin receives: what happened, current status, what Steve has done, what\'s needed',
          'Austin determines if Blake needs to be looped in (major damage, injury, insurance claim)'
        ]
      },
      {
        heading: 'Austin Coordinates',
        details: [
          'Austin contacts affected customers if load operations are impacted',
          'Austin coordinates with Mike on equipment repair timeline',
          'Austin notifies Lindsay if there is any insurance claim or significant financial exposure'
        ],
        decision: 'Is this a major incident (injury, significant property damage, insurance claim)? → Yes: Austin contacts Blake immediately.'
      },
      { partLabel: 'Part D — After Every Incident' },
      {
        heading: 'Document and Report',
        details: [
          'Steve submits a written incident summary to Austin within 24 hours',
          'Summary includes: date/time, what happened, equipment/people involved, immediate response, current status, recommended next steps',
          'If there are ongoing safety risks, a corrective action plan is required'
        ]
      }
    ],
    rules: [
      'Equipment failures and property damage: Steve responds within 15 minutes — no exceptions',
      'Injury or unsafe site conditions: call Austin immediately — do not wait',
      'Night Lead cannot escalate directly to Austin — goes through Steve first (except injuries)',
      'Every incident must be documented in writing, no matter how minor',
      'Do not put equipment back in service until Steve (or Mike) confirms it\'s safe'
    ],
    related: ['maintenance-request', 'delay-notification']
  },

  // ─── SUGAR CREEK DAILY CHECKLIST ────────────────────────
  'sugarcreek-daily-checklist': {
    id: 'sugarcreek-daily-checklist',
    title: 'Sugar Creek Daily Operations Checklist',
    category: 'Operations / Sugar Creek',
    owner: 'Steve Weindorfer',
    version: '1.0',
    lastUpdated: 'April 2025',
    purpose: 'To ensure the Sugar Creek facility starts and ends every day consistently, with a clear picture of equipment status, yard conditions, and anything Austin needs to know before the next shift.',
    tools: ['Samsara (equipment verification)', 'Phone / Text (daily summary to Austin)'],
    when: [
      'Every morning at the start of the shift — before drivers are dispatched',
      'Every evening before Steve leaves — before the night shift takes over'
    ],
    inputs: [
      'Samsara — equipment locations and any fault codes from overnight',
      'Previous day\'s notes or any open issues from the last shift'
    ],
    whoItAppliesTo: ['Steve Weindorfer (owns this checklist)', 'Night Lead (mirrors the evening checklist)'],
    steps: [
      { partLabel: 'Part A — Morning Startup' },
      {
        heading: 'Yard Walkthrough',
        details: [
          'Walk the entire yard and account for all equipment: trucks, trailers, hostlers',
          'Compare physical locations to Samsara — flag anything that doesn\'t match',
          'Check tire conditions on all yard equipment (hostlers especially)',
          'Look for any damage that wasn\'t there yesterday — document with a photo'
        ]
      },
      {
        heading: 'Equipment Status Check',
        details: [
          'Start each piece of yard equipment and confirm it\'s operational',
          'Check fuel levels — anything under 1/4 tank gets flagged for refueling before dispatch',
          'Any fault lights or mechanical issues → notify Mike Jackson immediately',
          'Confirm all trailers are dock-ready (doors functional, no damage)'
        ],
        decision: 'Is any equipment unsafe or non-operational? → Yes: pull from service and notify Mike and Austin before any loads are assigned to that equipment.'
      },
      {
        heading: 'Shift Handoff Review',
        details: [
          'Review any notes from the night shift or previous day',
          'Flags any open issues Austin needs to know about before first dispatch',
          'Confirm today\'s schedule: loads planned, appointment times, drivers assigned'
        ]
      },
      { partLabel: 'Part B — Throughout the Day' },
      {
        heading: 'Monitor Yard Operations',
        details: [
          'Be present or accessible during all dock movements',
          'Confirm freight counts match BOLs on every inbound load',
          'Any discrepancy or damage: document with photos immediately and notify Austin and Lindsay'
        ]
      },
      {
        heading: 'Safety Walk (Midday)',
        details: [
          'Quick safety check of dock area — clear of hazards, PPE in use, no blocked exits',
          'Confirm all drivers on site are following safety protocols',
          'Any safety concerns: address immediately, document, and report to Austin'
        ]
      },
      { partLabel: 'Part C — End of Day Summary' },
      {
        heading: 'Final Yard Walkthrough',
        details: [
          'Walk the yard before leaving — confirm all equipment is accounted for and secured',
          'Verify all dock doors are secured',
          'Any equipment with issues is tagged and noted so night shift knows'
        ]
      },
      {
        heading: 'Daily Summary to Austin',
        details: [
          'Send a text or email to Austin before end of shift every day',
          'Summary must cover: Equipment status (any issues?), Freight status (anything outstanding?), Safety — anything to note?, Tomorrow — any heads up Austin needs?',
          'This is not optional — Austin needs this to plan the next day'
        ]
      }
    ],
    rules: [
      'Yard walkthrough happens every morning before first dispatch — no exceptions',
      'Daily summary to Austin goes out before Steve leaves — every single day',
      'Unsafe equipment is pulled from service before any loads are assigned — no exceptions',
      'All freight discrepancies and damage are documented with photos same day'
    ],
    related: ['sugarcreek-incident-escalation', 'cross-dock-documentation']
  },

  // ─── 131 RULE ───────────────────────────────────────────
  'one-three-one-rule': {
    id: 'one-three-one-rule',
    title: '131 Rule — How to Bring Decisions to Blake',
    category: 'Company-Wide / Leadership',
    owner: 'Whole Team',
    version: '1.0',
    lastUpdated: 'April 2025',
    purpose: 'To eliminate "what should I do?" and replace it with a structured way to bring decisions to Blake when escalation is needed — so every conversation is productive, decisions get made faster, and the team builds decision-making muscle.',
    when: [
      'Any time you need Blake\'s approval on something',
      'Any time you\'re stuck on a problem and need leadership input',
      'Any major decision outside your normal spending or authority level',
      'Any situation that might affect customers, cash flow, or compliance'
    ],
    whoItAppliesTo: ['Every person on the Spot On team — no exceptions'],
    steps: [
      { partLabel: 'The Formula: 1 Problem — 3 Solutions — 1 Recommendation' },
      {
        heading: '1 — Define the Problem Clearly',
        details: [
          'State the problem in one or two sentences — no background novels',
          'What specifically do you need Blake to decide?',
          'What happens if nothing is done? (State the urgency)',
          'Do NOT come with "I don\'t know what to do" — come with a defined problem'
        ]
      },
      {
        heading: '3 — Present Three Options',
        details: [
          'Give Blake three actual options — not one good one and two garbage fillers',
          'For each option, include: What it costs or requires, What the likely outcome is, What the risk or downside is',
          'At least one option should be conservative, one bold',
          'If you truly can only think of two, explain why the third doesn\'t exist'
        ]
      },
      {
        heading: '1 — Make a Recommendation',
        details: [
          'Tell Blake which option YOU think is the right call and why',
          'This is the most important part — Blake wants the team thinking, not just presenting',
          'You might be wrong, and that\'s fine — Blake will correct you. But always have a recommendation.',
          'This builds your judgment over time. Use it.'
        ]
      },
      { partLabel: 'How to Deliver It' },
      {
        heading: 'Verbal or Written — Match the Urgency',
        details: [
          'Urgent (same-day decision needed): call Blake or stop by — but still use the 131 format verbally',
          'Non-urgent: send a quick written summary via text or email with the three options and your recommendation',
          'Never just dump a problem on Blake\'s plate without options — that\'s not how this works'
        ]
      }
    ],
    rules: [
      'No one brings Blake a problem without at least two options and a recommendation',
      'This applies to everyone — Lindsay, Austin, Tim, Mike, Steve',
      '"I don\'t know what to do" is not a 131. Come back when you\'ve thought it through.',
      'Blake can and will override your recommendation — that\'s fine. The goal is the team thinks before escalating.'
    ],
    related: ['maintenance-request', 'sugarcreek-incident-escalation']
  }

};
