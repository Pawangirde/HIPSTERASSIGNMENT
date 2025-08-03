import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  description: string;
};

function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch products from the fake store API
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((item) => (
        <div key={item.id} className="border rounded p-4 shadow-sm">
          <h2 className="font-bold text-lg">{item.title}</h2>
          <p className="text-sm line-clamp-3">{item.description}</p>
          <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded">
            Buy
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
