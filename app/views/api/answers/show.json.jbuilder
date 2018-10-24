json.answer do 
  json.partial! 'api/answers/answer', answer: @answer
end 

json.author do
  json.partial! '/api/users/user', user: @answer.user
end

json.votes @answer.votes.pluck(:vote_type)

json.comments do 
  @comments.each do |comment|
    json.set! comment.id do 
      json.extract! comment, :id, :user_id, :post_id, :post_type, :body
    end 
  end
end

