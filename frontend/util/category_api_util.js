export const fetchCategories = () => {
    return $.ajax({
        method: "GET",
        url: '/api/categories'
    })
}

export const fetchCategory = (id) => {
    return $.ajax({
        method: "GET",
        url: `/api/categories/${id}`
    })
}

export const createCategory = (category) => {
    return $.ajax({
        method: "POST", 
        url: '/api/categories',
        data: { category }
    })
}