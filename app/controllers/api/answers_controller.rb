class Api::AnswersController < ApplicationController
  def index
    @answers = Answer.all
    
  end

  def show
    @answer = Answer.find(params[:id])
    @comments = @answer.comments

  end 

  def create
    @answer = Answer.new(answer_params)
    if @answer.save
      @comments = @answer.comments
      render :show
    else
      render json: @answer.errors.full_messages, status: 422
    end
  end

  def update
    @answer = Answer.find(params[:answer][:id])
    if @answer.update_attributes(answer_params)
      @comments = @answer.comments
      render :show
    else
        render json: @answer.errors.full_messages, status: 422
    end 
  end 

  def destroy
    @answer = Answer.find(params[:id])
    @answer.destroy
    @question = Question.find(@answer.question_id)
    @answers = @question.answers 
    ids = @answers.pluck(:id)
    ids.unshift(@question.id)
    @all_related_comments = Comment.where(post_id: ids )
    authorIds = @answers.pluck(:user_id).push(@question.user_id)
    @authors = User.where(id: authorIds)
    render "api/questions/show"
  end 

  private
  def answer_params
    params.require(:answer).permit(:body, :user_id, :tags, :question_id)
  end
end
