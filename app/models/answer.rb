class Answer < ApplicationRecord
    validates :user_id, :question_id, :body, presence: true
    belongs_to :question
end
