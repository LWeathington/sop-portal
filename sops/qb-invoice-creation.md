# QB Invoice Creation

**Department:** Accounting & Finance
**Owner:** Lindsay Weathington
**Effective:** April 2026

---

## Overview

This SOP covers how Lindsay creates and posts invoices in QuickBooks after loads are completed and processed in Ditat TMS. This process runs after the Ditat invoice batch is posted.

---

## Prerequisites — Before Creating QB Invoices

Before starting, confirm the following are complete:

- [ ] Load is **Completed** status in Ditat
- [ ] POD (Proof of Delivery) is attached to the load in Ditat
- [ ] Invoice batch has been posted in Ditat (see: *Attach Documents & Process Invoices in Ditat TMS*)
- [ ] Customer is set up in QuickBooks with correct billing email on file

---

## Step 1: Export Invoice Data from Ditat

1. After posting the invoice batch in Ditat, export the invoice summary
2. Review for accuracy:
   - Customer name matches QB record
   - Invoice amount matches agreed rate
   - Load number / reference number is included
3. Save the export for reference

---

## Step 2: Create Invoice in QuickBooks

1. Log into **QuickBooks Online**
2. Click **+ New** → **Invoice**
3. Fill in the invoice header:
   - **Customer:** Select from dropdown (must match exactly)
   - **Invoice Date:** Date the load was completed or billed
   - **Due Date:** Per customer terms (typically Net 30)
   - **Invoice #:** Use Ditat load/invoice number for easy cross-reference

4. Add line items:
   - **Product/Service:** Select the correct freight service type
   - **Description:** Include load # and lane (e.g., "Load #12345 — Kansas City to Chicago")
   - **Quantity:** Number of loads or units billed
   - **Rate:** Agreed customer rate
   - **Amount:** Auto-calculates

5. Add any accessorial charges as separate line items:
   - Fuel surcharge (if applicable)
   - Detention or layover (if applicable)
   - Lumper fees (if applicable and billable to customer)

---

## Step 3: Attach Supporting Documents

Before sending:
1. Attach the **POD** to the QB invoice (drag and drop or paperclip icon)
2. Attach the **Rate Confirmation** if this is a broker load
3. Attach the **BOL** if the customer requires it

---

## Step 4: Review and Send

1. Double-check all amounts — compare to Ditat export
2. Verify customer billing email is correct
3. Click **Save and Send** to email the invoice
4. QB will send automatically via the customer's default email

**If a customer requests paper invoices:** Print and mail — note this in their QB customer record.

---

## Step 5: Log in AR Tracking

After sending:
1. Note the invoice date and amount in the AR tracking log (if maintained separately)
2. Set a reminder for 30-day follow-up if needed

---

## Special Cases

### Empire Spotting (Mondays)
Empire is billed weekly through Ditat first, then QB. Follow the **SOP: Bill Empire (Mondays)** for the Ditat side, then create the QB invoice from the Ditat batch post.

### Broker Loads
Some brokers send payment remittance notices via email. When a remittance arrives:
1. Identify the load number(s) on the remittance
2. Match to open invoices in QB
3. Post payment to correct invoice(s)
4. Note any short payments or deductions for follow-up

### New Customers
First invoice for a new customer:
1. Set up customer in QB before invoicing (name, billing email, terms)
2. Confirm the rate in Ditat matches the rate confirmation
3. Flag to Blake if anything looks different from what was sold by Tim

---

## Common Errors to Avoid

| Error | Prevention |
|-------|-----------|
| Wrong customer billing email | Verify when setting up new customers |
| Invoice sent before POD attached | POD must be in Ditat before invoicing |
| Duplicate invoice | Always check open invoices before creating new ones |
| Wrong rate applied | Cross-check Ditat export to rate confirmation |

---

## Related SOPs
- Attach Documents & Process Invoices in Ditat TMS
- AR Collections Process
- SOP: Bill Empire (Mondays)
