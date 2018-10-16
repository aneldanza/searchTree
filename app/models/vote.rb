class Vote < ApplicationRecord
  validates :vote_type, :user_id, presence: true
  # validates_uniqueness_of :user_id, scope: [:post_id, :vote_type]
  belongs_to :post, polymorphic: true
end