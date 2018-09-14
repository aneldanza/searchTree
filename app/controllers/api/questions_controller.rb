class Api::QuestionsController < ApplicationController
    def index
        @questions = Question.all
    end

    def show 
        @question = Question.find(params[:id]).includes(:answers)
    end

    def create
        @question = Question.new(question_params)
        if @question.save
            render 'api/questions/show'
        else
            render json: @question.errors.full_messages
        end
    end 

    def destroy
        @question = Question.find(params[:id])
        @question.destroy
        render 'api/users/show'
    end 

    private 
    def question_params
        params.require(:question).permit(:title, :body, :user_id)
    end 
end
