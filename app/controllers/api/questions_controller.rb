class Api::QuestionsController < ApplicationController
    def index
        @questions = Question.all
    end

    def show 
        @question = Question.includes(:answers).find(params[:id])
    end

    def create
        @tags = params[:question][:tags]
        @question = Question.new({
            title: params[:question][:title],
            body: params[:question][:body],
            user_id: params[:question][:user_id]
        })
        if @question.save
            # render "/api/questions/#{@question.id}"
            render :show
        else
            render json: @question.errors.full_messages, status: 422
        end
    end 

    def update
        @question = Question.find(params[:id])
        if @question.update_attributes(question_params)
            render 'api/questions/show'
        else
            render json: @question.errors.full_messages, status: 422
        end 
    end 

    def destroy
        @question = Question.find(params[:id])
        @question.destroy
        @questions = Question.all
        render :index
    end 

    private 
    def question_params
        params.require(:question).permit(:title, :body, :user_id, :tags)
    end 
end
