class DropTaskerCats < ActiveRecord::Migration[5.2]
  def change
    drop_table :tasker_cats
  end
end
