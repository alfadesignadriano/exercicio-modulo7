
/* APIs:
https://jsonplaceholder.typicode.com/albums
https://jsonplaceholder.typicode.com/albums/1
https://jsonplaceholder.typicode.com/albums/1/photos
https://jsonplaceholder.typicode.com/photos/1
 */
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com'
});

export const api = {
    getAllAlbums: async () =>{
        let response = await axiosInstance.get('/albums');
        
        return response.data;
    },
    getAlbum: async (idAlbum : number) =>{
        let response = await axiosInstance.get(`/albums/${idAlbum}`);
        return response.data;
    },
    getItensAlbum: async (idAlbum : number) =>{
        let response = await axiosInstance.get(`/albums/${idAlbum}/photos`);
        return response.data;
    },
    getPhoto: async (idPhoto : number) =>{
        let response = await axiosInstance.get(`/photos/${idPhoto}`);
        return response.data;
    }

    /*getAllAlbums: async () =>{
        let response = await axiosInstance.get('/albums');
        return response.data;
    },

    addNewPost :async (title : string,body : string,userId : number) => {
        let response = await axios.post(`${BASE}/posts/`,{
            title, body,userId    
        });
        return response.data;
        /* modo tradicional 
        let response = await fetch(`${BASE}/posts/`,{
            method: 'POST',
            body : JSON.stringify({title, body,userId : 1}),
            headers:{'Content-type': 'application/json'}
          });
          let json = await response.json();
          return json;
        */
    /*}*/
}