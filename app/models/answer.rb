class Answer < ApplicationRecord
  validates :body, :question_id, :user_id, presence: true
  belongs_to :question
  belongs_to :user
  has_many :votes, as: :post

  def vote_count
    sum = 0
    self.votes.each do |vote|
        sum += vote.vote_type
    end
    sum
  end

end
