json.extract! question, :id, :user_id, :title, :body
json.answerIds question.answers.pluck(:id)