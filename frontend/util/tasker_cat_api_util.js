export const fetchTaskerCats = () => {
    return $.ajax({
        method: "GET",
        url: '/api/tasker_cats'
    })
};

export const fetchTaskerCat = (id) => {
    return $.ajax({
        method: "GET",
        url: `/api/tasker_cats/${id}`
    })
};