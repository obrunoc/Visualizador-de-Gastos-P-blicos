export default function CardGasto({ cidade, valor, ano }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 border hover:shadow-lg transition">
      <h2 className="text-lg font-bold">{cidade}</h2>
      <p className="text-gray-600">Ano: {ano}</p>
      <p className="text-blue-600 font-semibold mt-2">R$ {valor}</p>
    </div>
  );
}
