import axios from 'axios';


export const postNewPost = (data) => {
    return axios({
        method: 'post',
        url: 'http://35.205.82.59:8080/post/',
        data: data
    });
};

export const getAllPosts = () => {
    return axios({
        method: 'get',
        url: 'http://35.205.82.59:8080/post/'
    })
};

export const postNewReponse = (content, user, IDpost) => {
    axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

    return axios({
        method: 'post',
        url: 'http://35.205.82.59:8080/response/',
        data: {
            user: user,
            content: content,
            post: IDpost
        }
    });
};