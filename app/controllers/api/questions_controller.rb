class Api::QuestionsController < ApplicationController
    def index
        @questions = Question.all
    end

    def show 
       
        @question = Question.find(params[:id])
        @answers = @question.answers
        authorIds = @answers.pluck(:user_id).push(@question.user_id)
        @authors = User.where(id: authorIds)
    end

    def create
        @tags = params[:question][:tags]
        @question = Question.new({
            title: params[:question][:title],
            body: params[:question][:body],
            user_id: params[:question][:user_id]
        })
        if @question.save
            @answers = @question.answers
            authorIds = @answers.pluck(:user_id).push(@question.user_id)
            @authors = User.where(id: authorIds)
            render :show
        else
            render json: @question.errors.full_messages, status: 422
        end
    end 

    def update
      
        @question = Question.find(params['question']['id'])
        if @question.update_attributes(question_params)
            @answers = @question.answers
            authorIds = @answers.pluck(:user_id).push(@question.user_id)
            @authors = User.where(id: authorIds)
            render :show
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
