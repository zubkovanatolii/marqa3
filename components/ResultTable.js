export default function ResultTable({ data }) {
  if (!data.length) return null;
  return (
    <table className="min-w-full mt-4 border">
      <thead>
        <tr>
          <th className="border p-2">URL</th>
          <th className="border p-2">Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.url}>
            <td className="border p-2">{item.url}</td>
            <td className={`border p-2 ${item.status === 0 ? 'text-gray-500' : item.status >= 400 ? 'text-red-600' : item.status >= 300 ? 'text-yellow-600' : 'text-green-600'}`}>
              {item.status === 0 ? 'timeout' : item.status}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}