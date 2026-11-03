export function VoteResult({ list }) {
	return (
		<div className="flex flex-col gap-4 bg-slate-700 w-75 rounded-md p-4">
			<h3 className="text-center text-2xl">Eredmény:</h3>
			<div>
				{list.map(({ id, text, votes }) => (
					<div key={id}>
						{text}: <span className="font-bold">{votes.length}</span> szavazat
					</div>
				))}
			</div>
		</div>
	);
}
