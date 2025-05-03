import checkUrl from './checker';
import { JSDOM } from 'jsdom';

export default async function crawler(startUrl) {
  const visited = new Set();
  const results = [];

  async function crawl(url) {
    if (visited.has(url)) return;
    visited.add(url);

    const status = await checkUrl(url);
    results.push({ url, status });

    try {
      const res = await axios.get(url);
      const dom = new JSDOM(res.data);
      const links = Array.from(dom.window.document.querySelectorAll('a[href]'))
        .map(a => a.href)
        .filter(h => h.startsWith(startUrl));
      for (const link of links) {
        await crawl(link);
      }
    } catch (e) {
      // ignore
    }
  }

  await crawl(startUrl);
  return results;
}