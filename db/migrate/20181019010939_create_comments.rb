class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :body, null: false
      t.integer :user_id, null: false
      t.integer :post_id, null: false
      t.string :post_type, null: false
      t.index :post_id
      t.index :post_type
      t.index :user_id
      t.timestamps
    end
  end
end
