@tasks.each do |task|
    json.set! task.id do 
        json.extract! task, :id, :category_id, :detail, :user_id, :tasker_id, :status, :date, :time, :size, :start_address, :end_address
    end 
end