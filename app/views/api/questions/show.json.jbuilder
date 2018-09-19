json.question do 
  json.partial! 'api/questions/question', question: @question 
  json.answerIds @question.answers.pluck(:id)
end 



