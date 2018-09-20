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

export const updateAnswer = (answer) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/answers/${answer.id}`,
    data: {answer: answer},
  });
};

export const fetchAnswer = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/answers/${id}`
  });
};

export const deleteAnswer = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/answers/${id}`,
  });
};