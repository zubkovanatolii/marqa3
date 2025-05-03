import axios from 'axios';

export default async function checkUrl(url) {
  try {
    const res = await axios.head(url, { timeout: 5000 });
    return res.status;
  } catch (e) {
    const status = e.response?.status;
    return status || 0;
  }
}