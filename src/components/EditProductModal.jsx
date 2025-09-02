import { useState, useEffect } from "react";
import { supabase } from "../supabase";

export default function EditProductModal({ product, onClose, onUpdate }) {
	const [form, setForm] = useState({
		id: "",
		name: "",
		size: "",
		quantity: 0,
		category: "",
		location: "",
	});

	useEffect(() => {
		if (product) setForm(product);
	}, [product]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: name === "quantity" ? parseInt(value || 0) : value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { error } = await supabase
			.from("products")
			.update(form)
			.eq("id", form.id);
		if (error) console.error("Update error:", error);
		else onUpdate();
		onClose();
	};

	if (!product) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
			<form
				onSubmit={handleSubmit}
				className="bg-white p-6 rounded shadow space-y-2 w-96"
			>
				<h2 className="text-xl font-bold mb-2">Edit Product</h2>
				<input
					name="name"
					value={form.name || ""}
					onChange={handleChange}
					className="border p-2 w-full"
				/>
				<input
					name="size"
					value={form.size || ""}
					onChange={handleChange}
					className="border p-2 w-full"
				/>
				<input
					name="quantity"
					type="number"
					value={form.quantity ?? 0}
					onChange={handleChange}
					className="border p-2 w-full"
				/>
				<input
					name="category"
					value={form.category || ""}
					onChange={handleChange}
					className="border p-2 w-full"
				/>
				<input
					name="location"
					value={form.location || ""}
					onChange={handleChange}
					className="border p-2 w-full"
				/>
				<div className="flex justify-end space-x-2">
					<button
						type="button"
						onClick={onClose}
						className="px-3 py-1 bg-gray-300 rounded"
					>
						Cancel
					</button>
					<button
						type="submit"
						className="px-3 py-1 bg-green-600 text-white rounded"
					>
						Update
					</button>
				</div>
			</form>
		</div>
	);
}
