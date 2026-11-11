// Stand-in for the real database client.
export const db = { notes: { findMany: async () => [], create: async (n) => n }, users: { findMany: async () => [] } };
