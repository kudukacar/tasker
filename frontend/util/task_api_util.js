export const fetchTask = (id) => {
    return $.ajax({
        method: "GET",
        url: `/api/tasks/${id}`
    })
};

export const createTask = (task) => {
    return $.ajax({
        method: "POST",
        url: 'api/tasks',
        data: { task }
    })
}

export const fetchTasks = () => {
    return $.ajax({
        method: "GET",
        url: 'api/tasks'
    })
};
