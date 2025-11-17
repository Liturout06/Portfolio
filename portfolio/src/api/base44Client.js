// Minimal stub for base44 client so the contact form can call
// base44.entities.Contact.create without runtime errors.
// Replace this implementation with a real API client when ready.

export const base44 = {
  entities: {
    Contact: {
      async create(payload) {
        // TODO: Replace with real API call (e.g., fetch or axios)
        console.log('Contact form submission (base44 stub):', payload);
        return { id: Date.now().toString(), ...payload };
      },
    },
  },
};
