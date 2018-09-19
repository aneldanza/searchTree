export const createAnswer = (answer) => {
  return $.ajax({
    method: 'POST',
    url: `/api/answers`,
    data: {answer: answer},
  })
}

export const fetchAllAnswers = () => {
  return $.ajax({
    method: 'GET',
    url: `api/answers`,
  });
};