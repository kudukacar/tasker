@users.each do |user|
    json.set! user.id do
        json.partial! 'api/users/user', user: user
        json.tasker_cats user.tasker_cats.pluck(:id)
    end
end

