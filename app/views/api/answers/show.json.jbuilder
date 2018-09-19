json.answer do 
  json.partial! 'api/answers/answer', anwer: @answer
end 

json.author do
  json.partial! '/api/users/user', user: @answer.user
end