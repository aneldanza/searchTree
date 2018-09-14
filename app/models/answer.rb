class Answer < ApplicationRecord
    validates :user_id, :question_id, :body, presence
    belongs_to :question
end
