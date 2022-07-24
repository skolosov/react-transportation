const getOptions = (method, data) => {
    const options = {
        get: 'GET',
        post: 'POST',
        put: 'PUT',
        delete: 'delete',
    };

    return {
        method: options[method],
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: data ? JSON.stringify(data) : null,
    };
};
const HOST = 'http://localhost:3001/';
export const apiGet = async (url, data) => {
    const response = await fetch(`${HOST}${url}`, getOptions('get', data));
    return await response.json();
};

export const apiPost = async (url, data) => {
    const response = await fetch(`${HOST}${url}`, getOptions('post', data));
    return await response.json();
};

export const apiPut = async (url, data) => {
    const response = await fetch(`${HOST}${url}`, getOptions('put', data));
    return await response.json();
};

export const apiDelete = async (url, data) => {
    const response = await fetch(`${HOST}${url}`, getOptions('put', data));
    return await response.json();
};