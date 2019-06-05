json.partial! 'api/users/user', user: @user
json.tasker_cats @user.tasker_cats.pluck(:id)