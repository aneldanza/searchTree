class Api::VotesController < ApplicationController
  # def index
  #   @votes = Vote.all
  # end

  def valid_vote?
    all_votes = Vote.where('user_id = ? AND post_id = ? AND post_type = ?', votes_params[:user_id], votes_params[:post_id], votes_params[:post_type])
    votes_count = all_votes.pluck(:vote_type).reduce(0, :+)
    vote_sum = votes_count + Integer(votes_params[:vote_type])
    debugger
    if vote_sum > 1 || vote_sum < -1
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
      errors = []
      errors.push('Invalid entry')
      debugger
      render json: errors, status: 422
      # render json: @vote.errors.full_messages, status: 422
    end
  end

  private
  def votes_params 
    params.require(:vote).permit(:vote_type, :post_id, :post_type, :user_id)
  end
end