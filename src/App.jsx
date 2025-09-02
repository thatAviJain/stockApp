// src/App.jsx
import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import AddProductForm from "./components/AddProductForm";
import InventoryList from "./components/InventoryList";
import EditProductModal from "./components/EditProductModal";

function App() {
	const [products, setProducts] = useState([]);
	const [editingProduct, setEditingProduct] = useState(null);

	async function fetchProducts() {
		const { data, error } = await supabase.from("products").select("*");
		if (error) console.error("Fetch error:", error);
		else setProducts(data);
	}

	useEffect(() => {
		fetchProducts();
	}, []);

	const handleDelete = async (id) => {
		const { error } = await supabase.from("products").delete().eq("id", id);
		if (error) console.error("Delete error:", error);
		else fetchProducts();
	};

	return (
		<div className="p-6 max-w-4xl mx-auto">
			<h1 className="text-2xl font-bold mb-4">
				🪨 Marble & Tile Inventory
			</h1>
			<AddProductForm onAdd={fetchProducts} />
			<InventoryList
				products={products}
				onDelete={handleDelete}
				onEdit={(p) => setEditingProduct(p)}
			/>
			{editingProduct && (
				<EditProductModal
					product={editingProduct}
					onClose={() => setEditingProduct(null)}
					onUpdate={fetchProducts}
				/>
			)}
		</div>
	);
}

export default App;
