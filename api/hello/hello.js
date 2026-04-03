export default function handler(req, res) {
  const { method } = req;

  if (method === 'GET') {
    return res.status(200).json({
      message: 'HAHAHA Pond 😎',
      time: new Date().toISOString(),
      query: req.query
    });
  }

  if (method === 'POST') {
    return res.status(200).json({
      message: 'POST received 🚀',
      body: req.body
    });
  }

  return res.status(405).json({
    error: 'Method not allowed'
  });
}