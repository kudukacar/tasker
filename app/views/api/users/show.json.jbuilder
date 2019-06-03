json.partial! 'api/users/user', user: @user
json.category_ids @user.categories.pluck(:id)