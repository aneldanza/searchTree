class Api::VotesController < ApplicationController
  # def index
  #   @votes = Vote.all
  # end

  def create
    debugger
    @vote = Vote.new(votes_params)
    unless @vote.save 
      render json: @vote.errors.full_messages, status: 422
    end
  end

  private
  def votes_params 
    params.require(:vote).permit(:vote_type, :post_id, :post_type, :user_id)
  end
end