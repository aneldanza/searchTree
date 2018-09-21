class Vote < ApplicationRecord
  validates :vote_type, :user_id, presence: true
  belongs_to :post, polymorphic: true
end