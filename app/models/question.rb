# == Schema Information
#
# Table name: questions
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  body       :text             not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Question < ApplicationRecord
    validates :title, :body, :user_id, presence: true
    has_many :answers
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
