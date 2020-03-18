import axios from 'axios';

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


    return {
        post
    }
}