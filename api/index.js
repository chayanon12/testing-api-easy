import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  try {
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_ANON_KEY
    );

    const { data, error } = await supabase
      .from('users')
      .select('*');

    if (error) {
      console.log("SUPABASE ERROR:", error);
      return res.status(500).json({
        message: "Supabase error",
        error
      });
    }

    return res.status(200).json({
      success: true,
      data
    });

  } catch (err) {
    console.log("CATCH ERROR:", err);
    return res.status(500).json({
      message: "Catch error",
      err: err.message
    });
  }
}