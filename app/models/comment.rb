# == Schema Information
#
# Table name: comments
#
#  id        :bigint(8)        not null, primary key
#  body      :text             not null
#  user_id   :integer          not null
#  post_id   :integer          not null
#  post_type :string           not null
#

class Comment < ApplicationRecord
  validates :body, :user_id, :post_id, :post_type, presence: true
  belongs_to :user
  belongs_to :post, polymorphic: true
end
