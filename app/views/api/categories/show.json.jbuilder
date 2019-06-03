json.extract! @category, :id, :title
json.taskerIds @category.tasker_cats.pluck[:user_id]