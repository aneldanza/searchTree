class CreateAnswers < ActiveRecord::Migration[5.2]
  def change
    create_table :answers do |t|
      t.text :body, null: false
      t.integer :user_id, null: false
      t.integer :question_id, null: false 
      t.index :user_id
      t.index :question_id
      t.timestamps
    end
  end
end
