import axios from 'axios';

const ACCESS_TOKEN = localStorage.getItem('access_token');

const API = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

export const useFetch = () =>{

    const post = async (path, data) => {
        try {
            const response = await API.post(path, data);           
            if(response){
                return response.data;
            }            
        } catch (e) {
            console.log('Erro to POST data to ' + path, e);
        }
        return null;       
    }

    const authPost = async (path, data) => {
        try {
            const response = await API.post(path, data, {
                headers:{
                    authorization: `Bearer ${ACCESS_TOKEN}`
                }
            });           
            if(response){
                return response.data;
            }            
        } catch (e) {
            console.log('Erro to POST data to ' + path, e);
        }
        return null;       
    }

    const authPut = async (path, {id, ...data}) => {
        try {
            const response = await API.put(path+`/${id}`, data, {
                headers:{
                    authorization: `Bearer ${ACCESS_TOKEN}`
                }
            });           
            if(response){                
                return response.data;
            }            
        } catch (e) {
            console.log('Erro to POST data to ' + path, e);
        }
        return null;       
    }

    const get = async path =>{
        try {
            const response = await API.get(path, {
                headers:{
                    authorization: `Bearer ${ACCESS_TOKEN}`
                }
            });
            if(response){
                return response.data;
            }            
        } catch (e) {
            console.log('Erro to GET data FROM ' + path, e);
        }
        return null;
    }

    const authDelete = async (path, id) => {
        try {
            console.log(path, id);

            const response = await API.delete(path+`/${id}`, {
                headers:{
                    authorization: `Bearer ${ACCESS_TOKEN}`
                }
            });           
            if(response){                
                return response.data;
            }            
        } catch (e) {
            console.log('Erro to POST data to ' + path, e);
        }
        return null;       
    }

    return {
        post,
        authPost,
        authPut,
        authDelete,
        get
    }
}