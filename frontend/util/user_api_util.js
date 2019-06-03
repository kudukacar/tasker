export const fetchTasker = (id) => {
    return $.ajax({
        method: "GET",
        url: `api/users/${id}`,
    });
};