# SOP: Bill Empire (Mondays)

### Purpose

Create and invoice the weekly **Empire spotting/trailer-move** charge by duplicating the prior template shipment, updating dates/times/visits, applying the correct charge, completing the shipment, then processing invoices.

### Scope

Weekly billing for **Empire Candle Company** spotting work covering **Mon--Fri** (example in video: 5 days, 2 visits/day = **10** total billable units).

### Systems / Tools

- **Ditat** (Maintain Shipment + Process Invoices)
- **Google** Sheets: **"Empire Moves"** (source of daily times/visits)

### Inputs needed before you start

- Week range (Mon--Fri) and "**Week Ending**" date
- Daily visit times (Visit 1 + Visit 2)
- Visits per day (commonly **2/day**)
- Billing rate and charge type (video shows **Charge Type: PO NODWELL (NoDwell Services)**, **Rate: 110.0000**, billed on **Quantity = total visits**)

## Procedure

### 1) Update/confirm the "Empire Moves" sheet

1.  Open **Empire Moves**.
2.  Confirm the correct week tab/section (Mon--Fri).
3.  Ensure each day has:
    - **Date**
    - **Visit 1 time** and **Visit 2 time**
4.  Confirm the weekly totals match what you intend to bill:
    - Total visits for the week (example: **10**)
**Checkpoint:** If visits or times are missing, pause and get confirmation before billing.

### 2) Duplicate the prior Empire shipment in Ditat

1.  In **Maintain Shipment**, locate the most recent Empire weekly spotting shipment.
2.  Click **Duplicate Shipment**.
3.  Update key header/reference fields:
    - **Customer / Bill To:** Empire Candle Company
    - **Customer reference:** Week Ending MM/DD (match the week)
4.  Confirm shipment starts in **Pending** status.
**Checkpoint:** Make sure you duplicated the correct Empire template (not a one-off load).

### 3) Update Stops (appointments) to match the week's times

For each day/stop (Mon--Fri):
1.  Set the stop **date** to the correct day.
2.  Set **On** time = the first/earliest visit start time for that day.
3.  Set **Late after** time = the last/latest visit end time for that day.
**What I saw in the video:** each stop/day uses a window like 08:56 → 10:20, 08:36 → 09:54, etc., matching the sheet's daily times.
**Checkpoint:** Dates must match the goods line descriptions you'll set next.

### 4) Update Goods lines (description + visits/volume)

1.  In the **Goods** section, update each line's **Description** to match the date for that week to bill, e.g.:
    - Trailer Move Only 2/2
    - Trailer Move Only 2/3
    - ...
    - Trailer Move Only 2/6
2.  Set **Volume** per line to the number of hours per visits that day (commonly **2.0**).
3.  Confirm **Total Volume** equals the total visits for the week (example: **10.0** total).
**Checkpoint:** Total Volume should equal the quantity you bill on the charge line.

### 5) Add Charges (billable line)

1.  In **Charges**, click **Add Charge**.
2.  Select **Type:** PO NODWELL (Description shows **NoDwell Services** in the video).
3.  Set:
    - **Quantity** = total visits (example: 10.0000)
    - **Rate** = agreed rate (video: 110.0000)
4.  Confirm **Revenue** calculates correctly (example: 10 x 110 = \$1,100.00).
5.  Verify **Use for pay** is checked if that's required in your setup.
**Checkpoint:** Revenue total must match expected weekly billing.

### 6) Notes (keep consistent)

- **Billing notes** (video shows wording like): "Empire Spotting is billed weekly for the five days of work."
- **Invoice notes:** update to reflect the billing basis (the video shows "10 hours" --- if you truly bill per visit/move, consider wording like "10 trailer moves/visits" to match your charge logic).

### 7) Save + Complete the shipment (release for invoicing)

1.  Click **Save & Close** (or Save).
2.  Click **Complete**.
3.  Confirm the dialog ("This will complete shipment and release shipment for invoicing.")
**Checkpoint:** Shipment must be **Completed** before it appears properly in invoicing.

### 8) Process Invoices (create invoice batch)

1.  Open **Process Invoices**.
2.  Run invoicing in the appropriate bucket(s):
    - **Proof of delivery = Yes** → Search → select applicable shipments → **OK**
    - **Proof of delivery = No** → Search → select **Empire** weekly spotting shipment (and any others) → **OK**
3.  Post/confirm the invoice batch creation as your normal flow requires.
**Checkpoint:** Make sure the Empire weekly shipment is included once (not duplicated across batches).

## Quality Control Checklist (quick)

- Customer reference says **Week Ending** with the correct date
- Stops are correct dates and time windows match the sheet
- Goods descriptions match dates (Mon--Fri)
- Volume per day = visits/day; total volume = total visits
- Charge type is correct; quantity = total visits; rate is correct; revenue matches expectation
- Shipment status = **Completed**
- In Process Invoices, correct **Proof of delivery** filter used
- Not already invoiced (avoid duplicates)

## Common Exceptions

- **1 visit in a day:** set that day's Volume to **1.0**, and reduce total Quantity accordingly.
- **Extra visit/day or weekend work:** add/adjust goods lines and increase Quantity.
- **Rate change:** update the charge Rate and verify the revenue math before completing.
- **Shipment not showing in Process Invoices:** confirm it's **Completed**, and verify your Proof of delivery filter.
