class Answer < ApplicationRecord
  validates :body, :question_id, :user_id, presence: true
  belongs_to :question
end
