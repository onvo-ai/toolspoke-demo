import express from "express";
import { requireUser } from "./auth.js";
import { db } from "./db.js";
import { exportNotes } from "./export.js";

const app = express();
app.use(express.json());

app.get("/notes", requireUser, async (req, res) => {
  res.json(await db.notes.findMany({ where: { ownerId: req.session.user.id } }));
});

app.post("/notes", requireUser, async (req, res) => {
  res.json(await db.notes.create({ ownerId: req.session.user.id, body: req.body.body }));
});

app.get("/notes/export", exportNotes);

app.listen(3000);
