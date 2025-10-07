import Header from "./components/header";
import CardGasto from "./components/cardGasto";

function App() {
  const dados = [
    { cidade: "São Paulo", valor: 5000000, ano: 2024 },
    { cidade: "Campinas", valor: 1200000, ano: 2024 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dados.map((d, i) => (
          <CardGasto key={i} {...d} />
        ))}
      </main>
    </div>
  );
}

export default App;
