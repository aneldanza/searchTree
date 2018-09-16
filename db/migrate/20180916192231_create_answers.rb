class CreateAnswers < ActiveRecord::Migration[5.2]
  def change
    create_table :answers do |t|

      t.timestamps
    end
  end
end
