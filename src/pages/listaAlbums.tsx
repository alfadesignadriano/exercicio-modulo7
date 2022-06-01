import { album } from '../types/albums';
import { useState, useEffect } from 'react';
import { AlbumItem } from '../components/albumItem';
import { api } from '../api';

export const ListaAlbums = () => {
    const [albums, setAlbums] = useState<album[]>([]);    
    const [loading,setLoading] = useState(false);

    const loadAlbumsAsync  = async () => {
        try{
          setLoading(true);
          let json = await api.getAllAlbums();
          setLoading(false);
          setAlbums(json);
        } catch(e){
          setLoading(false);
          console.error(e);
        }
      }    

    useEffect(() =>{
        loadAlbumsAsync();
    },[]);      
    return(
        <div >
        {loading && <div className='p-2'>carregando...</div>}
        {!loading && albums.length > 0 &&
       <>
         <div >
            {albums.map((item,index)=>(
           <AlbumItem data={item} key={index}/>
           ))}
          </div>        
         </>
       }
       {!loading && albums.length == 0 && 
       <div>Tente novamente mais tarde!</div>}      
 
     </div>
    ) ;
 }