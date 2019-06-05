@categories.each do |category|
    json.set! category.id do 
        json.extract! category, :id, :title, :tasker_ids, :tasker_cat_ids
    end
end