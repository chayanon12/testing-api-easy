import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  try {
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_ANON_KEY
    );

    const result = await supabase.from('users').select('*');

    console.log("RESULT:", result);

    return res.status(200).json(result);

  } catch (err) {
    console.log("CATCH ERROR:", err);
    return res.status(500).json({ err: err.message });
  }
}