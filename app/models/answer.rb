# == Schema Information
#
# Table name: answers
#
#  id          :bigint(8)        not null, primary key
#  body        :text             not null
#  user_id     :integer          not null
#  question_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Answer < ApplicationRecord
  validates :body, :question_id, :user_id, presence: true
  belongs_to :question
  belongs_to :user
  has_many :votes, as: :post
  has_many :comments, as: :post

  # def vote_count
  #   sum = 0
  #   self.votes.each do |vote|
  #       sum += vote.vote_type
  #   end
  #   sum
  # end

end
