class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.integer :category_id, null: false
      t.string :detail, null: false 
      t.integer :user_id, null: false 
      t.integer :tasker_id, null: false 
      t.string :status, null: false 
      t.date :date, null: false
      t.time :time, null: false
      t.string :size, null: false
      t.string :start_address, null: false
      t.string :end_address
      t.timestamps
    end
  end
end
