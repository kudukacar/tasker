json.partial! 'api/users/user', user: @user
json.categoryIds @user.tasker_cats.pluck(:category_id) 