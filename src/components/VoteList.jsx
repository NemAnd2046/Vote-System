import { getMaxVote } from "../utils";

export function VoteList({ list, setSelected }) {
	const maxVote = getMaxVote(list);
	return (
		<div className="flex flex-col gap-4">
			{list.map(({ id, imgUrl, text, votes }) => {
				const isWinner = votes.length === maxVote && maxVote > 0;
				return (
					<div
						key={id}
						className={`max-w-75 rounded-2xl bg-slate-700 p-4 ${
							isWinner ? "border-4 border-green-500" : "border border-slate-400"
						}`}
					>
						<img src={imgUrl} alt={text} className="w-full" />
						<div className="text-2xl text-center">{text}</div>
						<div className="flex w-full justify-end">
							<button
								className="bg-slate-400 p-2 rounded-md cursor-pointer hover:bg-slate-900"
								onClick={() => setSelected({ id, text })}
							>
								Szavazok
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
}
