import { useState } from "react";
import "./App.css";
import { optionList } from "./data.js";
import { VoteList } from "./components/VoteList.jsx";
import { VoteResult } from "./components/VoteResult.jsx";
import { VoteForm } from "./components/VoteForm.jsx";
import { motion } from "framer-motion";

function App() {
	const [locations, setLocations] = useState(optionList);
	const [selected, setSelected] = useState(null);

	const title = "Hova menjünk osztálykirándulásra?".split("");

	return (
		<div className="text-slate-50 min-h-screen bg-slate-900">
			<h1 className="text-center text-2xl p-4 font-bold">
				{title.map((letter, index) => (
					<motion.span
						key={index}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ type: "spring", delay: index / 10 }}
					>
						{letter}
					</motion.span>
				))}
			</h1>
			<div className="flex flex-wrap gap-4 justify-center">
				<VoteList list={locations} setSelected={setSelected} />
				<div>
					<VoteResult list={locations} />
					{selected && (
						<VoteForm
							list={locations}
							setLocations={setLocations}
							selected={selected}
							setSelected={setSelected}
						/>
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
