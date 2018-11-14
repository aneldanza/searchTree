class CreateTags < ActiveRecord::Migration[5.2]
  def change
    create_table :tags do |t|
      t.string :tag, null: false
      t.integer :post_id, null: false
      t.string :post_type, null: false
      t.index :post_id
      t.index :post_type
      t.timestamps
    end
  end
end
