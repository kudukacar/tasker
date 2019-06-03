class TaskerCat < ApplicationRecord
    validates :category_id, :user_id, :skills_description, :hourly_rate, presence: true
    
    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :category,
    primary_key: :id,
    foreign_key: :category_id,
    class_name: :Category
end