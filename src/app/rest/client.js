import axios from 'axios'

const get = async (url, data) => {
    const request = {
        method: 'get',
        url: url,
        data: data,
        headers: {
            "Content-Type": "application/json",
            // 'Access-Control-Allow-Origin': '*',
        }
    }

    const res = await exec(request);
    return res.data;
} 

const post = async (url, data) => {
    const request = {
        method: 'post',
        url: url,
        data: data,
        headers: {
            "Content-Type": "application/json"
        }
    }

    const res = await exec(request);
    return res.data;
}

const delet = async (url, data) => {
    const request = {
        method: 'delete',
        url: url,
        data: data,
        headers: {
            "Content-Type": "application/json"
        }
    }

    const res = await exec(request);
    return res.data;
} 

const patch = async (url, data) => {
    const request = {
        method: 'patch',
        url: url,
        data: data,
        headers: {
            "Content-Type": "application/json"
        }
    }

    const res = await exec(request);
    return res.data;
}

const exec = async (request) => {
    try{
        const response = await axios(request)
        return response
    }catch(err){
        throw Error(err)
    }
}

const client = {
    get: (url, data = {}) => get(url, data),
    post: (url, data = {}) => post(url, data),
    delete: (url, data = {}) => delet(url, data),
    patch: (url, data = {}) => patch(url, data) 
}

export default client;