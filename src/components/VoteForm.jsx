import { useState } from "react";
import { hasVoted } from "../utils";

export function VoteForm({ list, setLocations, selected, setSelected }) {
	const [name, setName] = useState("");
	const [msg, setMsg] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(name);
		if (!name.trim()) {
			setMsg("Név megadása kötelező!");
			return;
		}
		if (hasVoted(list, name)) {
			setMsg("Már szavaztál!");
			return;
		}
		setLocations((prev) =>
			prev.map((obj) =>
				obj.id == selected.id ? { ...obj, votes: [...obj.votes, name.trim()] } : obj,
			),
		);
		setMsg("Sikeres szavazás!");
	};

	return (
		<div className="border border-slate-300 p-4 mt-4 bg-slate-800 rounded-md">
			<h3>
				A következőre szavazok:{" "}
				<span className="font-bold">{selected.text}</span>
			</h3>
			<form onSubmit={handleSubmit} className="flex flex-col gap-4">
				<label htmlFor="name">Add meg a neved:</label>
				<input
					type="text"
					id="name"
					className="border border-slate-300 w-full rounded-md p-4"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<div className="flex justify-around">
					<button
						type="submit"
						className="bg-slate-500 p-2 rounded-md cursor-pointer hover:bg-slate-900"
					>
						Mentés
					</button>
					<button
						onClick={() => setSelected(null)}
						className="bg-slate-700 p-2 rounded-md cursor-pointer hover:bg-slate-900"
					>
						Mégsem
					</button>
				</div>
			</form>
			{msg && <div>{msg}</div>}
		</div>
	);
}
