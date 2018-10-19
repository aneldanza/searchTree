class Api::CommentsController < ApplicationController

  def valid_comment?
    if comments_params[:user_id] == ''
      return false
    end

    if comments_params[:body].length < 15
      return false
    end
    true
  end

  def create
    @comment = Comment.new(comments_params)
    if  valid_comment? && @comment.save
      if comments_params[:post_type] == "Question"
        @question = Question.find(comments_params[:post_id])
        @answers = @question.answers
        @comments = @question.comments 
        authorIds = @answers.pluck(:user_id).push(@question.user_id)
        @authors = User.where(id: authorIds)
        render "api/questions/show"
      elsif comments_params[:post_type] == 'Answer'
        @answer = Answer.find(comments_params[:post_id])
        @comments = @answer.comments 
        render "api/answers/show"
      end
    else 
      @errors = []
      message = ''
      
      if comments_params[:user_id] == ''
        message = 'You need to login in order to comment'
      elsif comments_params[:body].length < 15
        message = 'Enter at least 15 characters'
      else 
        message = 'Invalid entry'
      end 
      @errors.push(message, comments_params[:post_id], comments_params[:post_type])
     
      render json: @errors, status: 422
   
    end
  end

  private
  def comments_params 
    params.require(:comment).permit(:body, :post_id, :post_type, :user_id)
  end

end