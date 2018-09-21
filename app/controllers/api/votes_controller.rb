class Api::VotesController < ApplicationController
  # def index
  #   @votes = Vote.all
  # end

  def create
    @vote = Vote.new(votes_params)
   
    if @vote.save
  
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
      render json: @vote.errors.full_messages, status: 422
    end
  end

  private
  def votes_params 
    params.require(:vote).permit(:vote_type, :post_id, :post_type, :user_id)
  end
end