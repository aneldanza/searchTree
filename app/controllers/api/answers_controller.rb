class Api::AnswersController < ApplicationController
  def create
    @answer = Answer.new(answer_params)
    if @answer.save
      redirect_to `api/questions/${answer.question_id}`
    else
      render json: @answer.errors.full_message_errors, status: 422
    end
  end

  private
  def answer_params
    params.require(:answer).permit(:body, :user_id, :question_id)
  end
end
