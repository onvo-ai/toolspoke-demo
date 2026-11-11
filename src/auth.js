// Every request carries a session; requireUser rejects anonymous calls.
export function requireUser(req, res, next) {
  if (!req.session?.user) return res.status(401).json({ error: "Sign in first" });
  next();
}

// Only admins may read other people's notes.
export function requireAdmin(req, res, next) {
  if (req.session?.user?.role !== "admin") return res.status(403).json({ error: "Admins only" });
  next();
}
