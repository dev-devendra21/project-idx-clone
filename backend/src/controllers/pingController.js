export async function pingController(req, res) {
  return res.status(200).json({ message: "ping" });
}
