
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
        json.partial! 'api/answers/answer', answer: ans
      end 
    end 
  end 

  json.votes @question.votes.pluck(:vote_type)

  json.comments do 
    @all_related_comments.each do |comment|
      json.set! comment.id do 
        json.extract! comment, :id, :user_id, :post_id, :post_type, :body
        
      end 
    end
  end




