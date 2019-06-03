@taskers.each do |tasker|
    json.set! tasker.id do 
        json.partial! 'api/users/user', user: tasker
        json.categoryIds user.tasker_cats.pluck(:category_id)
    end
end