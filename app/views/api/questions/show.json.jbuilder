
  json.question do 
    json.partial! 'api/questions/question', question: @question 
  end 
  
  json.users do 
    @authors.each do |author|
      json.set! author.id do
        json.extract! author, :id, :username
      end
    end 
  end
  
  json.answers do 
    @answers.each do |ans|
      json.set! ans.id do 
        json.extract! ans, :id, :user_id, :question_id, :body
        json.votes ans.votes.pluck(:vote_type)
      end 
    end 
  end 

  json.votes @question.votes.pluck(:vote_type)




