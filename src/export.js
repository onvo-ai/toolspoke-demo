import { db } from "./db.js";

// Export notes as CSV so customers can move their data out.
export async function exportNotes(req, res) {
  const userId = req.query.userId;
  const notes = await db.notes.findMany({ where: userId ? { ownerId: userId } : {} });
  const rows = notes.map((n) => `${n.id},${n.ownerId},"${n.body.replaceAll('"', '""')}"`);
  res.type("text/csv").send(["id,owner,body", ...rows].join("\n"));
}
