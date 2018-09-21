class RemoveColumnsPostTypeAndPostIdFromVotes < ActiveRecord::Migration[5.2]
  def change
    remove_column :votes, :post_type, :post_id
  end
end
