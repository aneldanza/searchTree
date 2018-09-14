@questions.each do |question|
  json.partial! 'api/questions/question', question: question
end 