@taskercats.each do |tasker_cat|
    json.set! tasker_cat.id do
        json.extract! tasker_cat, :id, :category_id, :user_id, :hourly_rate, :skills_description
    end
end