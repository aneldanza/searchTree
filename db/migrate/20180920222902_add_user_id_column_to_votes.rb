class AddUserIdColumnToVotes < ActiveRecord::Migration[5.2]
  def change
    add_column :votes, :user_id, :integer
    add_index :votes, :use_id
  end
end
