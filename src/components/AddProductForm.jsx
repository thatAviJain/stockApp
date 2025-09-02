import { useState } from "react";
import { supabase } from "../supabase";

export default function AddProductForm({ onAdd }) {
	const [form, setForm] = useState({
		name: "",
		size: "",
		quantity: 0,
		category: "",
		location: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: name === "quantity" ? parseInt(value || 0) : value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { error } = await supabase.from("products").insert([form]);
		if (error) console.error("Insert error:", error);
		else onAdd();
		setForm({
			name: "",
			size: "",
			quantity: 0,
			category: "",
			location: "",
		});
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="space-y-2 bg-white p-4 rounded shadow"
		>
			<input
				name="name"
				placeholder="Product Name"
				value={form.name}
				onChange={handleChange}
				className="border p-2 w-full"
			/>
			<input
				name="size"
				placeholder="Size"
				value={form.size}
				onChange={handleChange}
				className="border p-2 w-full"
			/>
			<input
				name="quantity"
				type="number"
				placeholder="Quantity"
				value={form.quantity}
				onChange={handleChange}
				className="border p-2 w-full"
			/>
			<input
				name="category"
				placeholder="Category"
				value={form.category}
				onChange={handleChange}
				className="border p-2 w-full"
			/>
			<input
				name="location"
				placeholder="Location"
				value={form.location}
				onChange={handleChange}
				className="border p-2 w-full"
			/>
			<button
				type="submit"
				className="bg-blue-600 text-white px-4 py-2 rounded"
			>
				Add Product
			</button>
		</form>
	);
}
