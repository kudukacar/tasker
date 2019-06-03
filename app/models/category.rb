class Category < ApplicationRecord
    validates :title, presence: true

    has_many :tasker_cats,
    primary_key: :id,
    foreign_key: :category_id,
    class_name: :TaskerCat

    has_many :taskers,
    through: :tasker_cats,
    source: :user
end