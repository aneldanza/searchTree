export const createVote = (vote) => {
  return $.ajax({
    method: 'POST',
    url: 'api/votes',
    data: {vote: vote},
  });
};