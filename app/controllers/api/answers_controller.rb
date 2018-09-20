class Api::AnswersController < ApplicationController
  def index
    @answers = Answer.all
    
  end

  def show
    @answer = Answer.find(params[:id])
  end 

  def create
    @answer = Answer.new(answer_params)
    if @answer.save
      render :show
    else
      render json: @answer.errors.full_messages, status: 422
    end
  end

  def update
    @answer = Answer.find(params[:id])
    if @answer.update_attributes(answer_params)
      render :show
    else
        render json: @answer.errors.full_messages, status: 422
    end 
  end 

  private
  def answer_params
    params.require(:answer).permit(:body, :user_id, :question_id)
  end
end
