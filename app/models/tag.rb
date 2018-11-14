class Tag < ApplicationRecord
  validates :tag, presence: true
  belongs_to :user
  belongs_to :post, polymorphic: true
end