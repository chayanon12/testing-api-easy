export default async function handler(req, res) {
  try {
    console.log("ENV URL:", process.env.SUPABASE_URL);
    console.log("ENV KEY:", process.env.SUPABASE_ANON_KEY);

    return res.status(200).json({
      url: process.env.SUPABASE_URL,
      key: process.env.SUPABASE_ANON_KEY ? "OK" : "MISSING"
    });

  } catch (err) {
    return res.status(500).json({ err });
  }
}