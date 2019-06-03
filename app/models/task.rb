class Task < ApplicationRecord
    validates :category_id, :detail, :user_id, :tasker_id, :status, :date, :time, :size, :start_address, presence: true
    
    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :tasker,
    primary_key: :id,
    foreign_key: :tasker_id,
    class_name: :User

    belongs_to :category,
    primary_key: :id,
    foreign_key: :category_id,
    class_name: :Category
end