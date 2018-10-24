class AddTimestampsToCommentsTable < ActiveRecord::Migration[5.2]
  def change
    add_timestamps :comments, default: DateTime.now
    change_column_default :comments, :created_at, nil
    change_column_default :comments, :updated_at, nil
  end
end
