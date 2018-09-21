json.extract! answer, :id, :body, :question_id, :user_id
json.votes answer.votes.pluck(:vote_type)
