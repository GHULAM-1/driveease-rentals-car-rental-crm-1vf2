# Build Plan: Car Rental CRM

**Client:** DriveEase Rentals
**Total action points:** 8

This plan was generated from the approved action points. Items are ordered by build dependency — start at the top and work down.

---

### 1. Develop Fleet Management Module

_Category: `feature` · Priority: `high`_

Create a module where each car has a profile including registration, model, year, current location, status, and service history.

**Acceptance criteria:**
- Car profiles are accessible with registration, model, year, location, status, and service history.
- User can update car status to available, rented, or in service.
- Service history can be added and viewed per car.

---

### 2. Implement Booking System

_Category: `feature` · Priority: `high`_

Build a system for staff to check car availability by date range, create new bookings, and prevent double bookings automatically.

**Acceptance criteria:**
- Booking system allows staff to check car availability by date range.
- System prevents the creation of overlapping bookings for the same vehicle.
- Bookings can be created, viewed, and updated by authorized staff.

---

### 3. Design Customer Management Module

_Category: `feature` · Priority: `medium`_

Develop a CRM module that includes customer profiles, document uploads, rental history, and notes.

**Acceptance criteria:**
- Customer profiles store name, contact information, CNIC, and license details.
- Documents can be uploaded and associated with customer profiles.
- Full rental history and notes can be maintained per customer.

---

### 4. Set Up Branch-Level Access Control

_Category: `feature` · Priority: `medium`_

Implement access control so each branch can see its own data while the owner has a complete overview.

**Acceptance criteria:**
- Branch users can only access data specific to their branch location.
- Owner account can access and manage data across all branches.

---

### 5. Create Payment and Invoicing Module

_Category: `feature` · Priority: `medium`_

Record manual payments against bookings and generate invoices with daily and monthly collection reports.

**Acceptance criteria:**
- Payments can be recorded against each booking manually.
- Invoices can be generated and printed for completed transactions.
- Daily and monthly financial reports can be generated.

---

### 6. Develop Handover and Return Checklist

_Category: `feature` · Priority: `high`_

Create a mobile-friendly checklist for vehicle handover and return, including photos for fuel level, mileage, and car condition.

**Acceptance criteria:**
- Staff can complete a checklist for vehicle handover and return via mobile device.
- Photos can be attached to the checklist and stored with the booking record.
- Checklist includes fields for fuel level, mileage, and vehicle condition.

---

### 7. Build Public Booking Inquiry Form

_Category: `feature` · Priority: `low`_

Design a booking inquiry form on the website where customers can check availability and request a booking, sending leads to the CRM.

**Acceptance criteria:**
- Public can access a booking inquiry form on the website.
- Form submissions create leads in the CRM for staff follow-up.

---

### 8. Design Owner Dashboard and Reports

_Category: `ui` · Priority: `low`_

Create a dashboard with widgets for daily operations and sections for weekly and monthly analytics and reports.

**Acceptance criteria:**
- Dashboard displays daily widgets for cars rented, today's returns, overdue bookings, and cash collected.
- Weekly and monthly analytics include revenue per branch, top cars, and customer stats.
- Reports are printable and exportable to common formats like PDF or Excel.

