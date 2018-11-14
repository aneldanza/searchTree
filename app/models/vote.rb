# == Schema Information
#
# Table name: votes
#
#  id         :bigint(8)        not null, primary key
#  vote_type  :integer          not null
#  post_id    :integer          not null
#  post_type  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer
#

class Vote < ApplicationRecord
  validates :vote_type, :user_id, presence: true
  belongs_to :user
  
  belongs_to :post, polymorphic: true
end
