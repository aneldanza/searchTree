class Api::VotesController < ApplicationController

  def valid_vote?
    all_votes = Vote.where('user_id = ? AND post_id = ? AND post_type = ?', votes_params[:user_id], votes_params[:post_id], votes_params[:post_type])
     
    if all_votes.length > 0 && all_votes.last.vote_type === Integer(votes_params[:vote_type]) 
      return false
    end
    if votes_params[:post_type] == 'Answer' 
      post = Answer
    else 
      post = Question
    end
    if Integer(votes_params[:user_id]) == post.where('id = ?', votes_params[:post_id]).last.user_id
      return false
    end 
    
    return true
  end

  def create
    @vote = Vote.new(votes_params)

    if  valid_vote? && @vote.save
      if votes_params[:post_type] == "Question"
        @question = Question.find(votes_params[:post_id])
        @answers = @question.answers
        authorIds = @answers.pluck(:user_id).push(@question.user_id)
        @authors = User.where(id: authorIds)
        render "api/questions/show"
      elsif votes_params[:post_type] == 'Answer'
        @answer = Answer.find(votes_params[:post_id])
        render "api/answers/show"
      end
    else 
      @errors = []
      message = ''
      if votes_params[:post_type] == 'Answer' 
        post = Answer
      else 
        post = Question
      end
      if Integer(votes_params[:user_id]) == post.where('id = ?', votes_params[:post_id]).last.user_id
        message = 'You cannot vote on your own post'
      else 
        message = 'Invalid entry'
      end 
      @errors.push(message, votes_params[:post_id], votes_params[:post_type])
     
      render json: @errors, status: 422
   
    end
  end

  private
  def votes_params 
    params.require(:vote).permit(:vote_type, :post_id, :post_type, :user_id)
  end
end