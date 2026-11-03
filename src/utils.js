export const hasVoted = (arr, userName) => {
	return arr.some((obj) => obj.votes.includes(userName));
};

export const getMaxVote = (arr) => {
	return Math.max(0, ...arr.map((obj) => obj.votes.length));
};
