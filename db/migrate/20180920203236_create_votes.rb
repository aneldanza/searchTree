class CreateVotes < ActiveRecord::Migration[5.2]
  def change
    create_table :votes do |t|
      t.integer :vote_type, null: false
      t.integer :post_id, null: false
      t.string :post_type, null: false
      t.index :post_id
      t.index :post_type
      t.timestamps
    end
  end
end
