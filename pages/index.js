import { useState } from 'react';
import axios from 'axios';
import ResultTable from '../components/ResultTable';

export default function Home() {
  const [url, setUrl] = useState('');
  const [results, setResults] = useState([]);

  const handleAnalyze = async () => {
    const res = await axios.post('/api/analyze', { url });
    setResults(res.data);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">MARQA Link Analyzer</h1>
      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="border p-2 mr-2 w-1/2"
      />
      <button onClick={handleAnalyze} className="bg-blue-500 text-white p-2">
        Analyze
      </button>
      <ResultTable data={results} />
    </div>
  );
}