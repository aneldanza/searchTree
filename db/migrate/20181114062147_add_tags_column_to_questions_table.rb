class AddTagsColumnToQuestionsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :questions, :tags, :string
    add_column :answers, :tags, :string
  end
end
