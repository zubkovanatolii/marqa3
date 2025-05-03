import crawler from '../../lib/crawler';

export default async function handler(req, res) {
  const { url } = req.body;
  const result = await crawler(url);
  res.status(200).json(result);
}