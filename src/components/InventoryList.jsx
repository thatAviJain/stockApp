export default function InventoryList({ products, onDelete, onEdit }) {
	return (
		<table className="w-full mt-6 table-auto border">
			<thead className="bg-gray-100">
				<tr>
					<th className="border p-2">Name</th>
					<th className="border p-2">Qty</th>
					<th className="border p-2">Size</th>
					<th className="border p-2">Category</th>
					<th className="border p-2">Location</th>
					<th className="border p-2">Actions</th>
				</tr>
			</thead>
			<tbody>
				{products.map((p) => (
					<tr key={p.id} className="text-center">
						<td className="border p-2">{p.name}</td>
						<td className="border p-2">{p.quantity}</td>
						<td className="border p-2">{p.size}</td>
						<td className="border p-2">{p.category}</td>
						<td className="border p-2">{p.location}</td>
						<td className="border p-2 space-x-2">
							<button
								onClick={() => onEdit(p)}
								className="bg-yellow-400 px-2 py-1 rounded"
							>
								Edit
							</button>
							<button
								onClick={() => onDelete(p.id)}
								className="bg-red-500 text-white px-2 py-1 rounded"
							>
								Delete
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
