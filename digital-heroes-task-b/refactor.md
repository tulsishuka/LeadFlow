# Refactoring Example

## Problem

The original route handler contains validation, database operations, email notifications, and response handling in one place.

### Before Refactoring

```javascript
router.post("/lead", async (req, res) => {
    const lead = req.body;

    if (!lead.email) {
        return res.status(400).json({ message: "Email is required" });
    }

    const savedLead = await Lead.create(lead);

    await sendEmail(savedLead.email, "Lead Created");

    res.status(201).json(savedLead);
});
```

## Problems

- Too many responsibilities.
- Difficult to test.
- Difficult to reuse.
- Hard to maintain.

---

## After Refactoring

### Controller

```javascript
export const createLead = async (req, res) => {
    const lead = await leadService.createLead(req.body);
    res.status(201).json(lead);
};
```

### Service

```javascript
export const createLead = async (data) => {
    validateLead(data);

    const lead = await LeadRepository.create(data);

    await emailService.sendLeadCreatedEmail(lead.email);

    return lead;
};
```

### Repository

```javascript
export const create = (data) => {
    return Lead.create(data);
};
```

## Improvements

- Better separation of concerns.
- Easier unit testing.
- Improved readability.
- Easier maintenance.
- Business logic can be reused by other features.