json.extract! question, :id, :user_id, :title, :body
json.answerIds question.answers.pluck(:id)
json.votes question.votes.pluck(:vote_type)
json.commentsIds question.comments.pluck(:id)