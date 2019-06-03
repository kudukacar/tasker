class CreateTaskerCats < ActiveRecord::Migration[5.2]
  def change
    create_table :tasker_cats do |t|
      t.integer :category_id, null: false
      t.integer :user_id, null: false
      t.integer :hourly_rate, null: false 
      t.string :skills_description, null: false 
      t.timestamps
    end
  end
end
