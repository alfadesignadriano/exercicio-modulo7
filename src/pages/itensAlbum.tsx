import { useEffect, useState } from "react";
import { tItensAlbum } from "../types/tItensAlbum";
import {useParams, useNavigate} from 'react-router-dom';
import { api } from '../api';
import { ItemAlbumItem } from "../components/itemAlbumItem";
import { album } from "../types/albums";

export const ItensAlbum = () => {
    const p = useParams<string>();    
    const navigate = useNavigate();

    const [itemsAlbumList, setitemsAlbumList] = useState<tItensAlbum[]>([]);    
    const [loading,setloading] = useState(false);    
    const [detAlbum, setDetAlbum] = useState<album>();    

    const loadItensAlbumsAsync  = async () => {
        try{
          setloading(true);
          if (p.idalbum) {
              let jsonalbum = await api.getAlbum(parseInt(p.idalbum));
              setDetAlbum(jsonalbum);

              let json = await api.getItensAlbum(parseInt(p.idalbum));
              setitemsAlbumList(json);
              setloading(false);              
            }
        } catch(e){
          setloading(false);
          console.error(e);
        }
      }    

    useEffect(() =>{
        loadItensAlbumsAsync();
    },[]);      
    const handleBackButton =()=> {
        navigate(-1);
    };    

    return(
        <div>
            <button className='bg-gray-200 rounded px-2 ' onClick={handleBackButton}>voltar</button>
        <div >

        {loading && <div className='p-2'>carregando...</div>}

        {!loading && (itemsAlbumList.length > 0) &&
       <>
          <h3 className="text-xl py-3">{detAlbum?.title}</h3>  
         <div  className="grid gap-3 grid-cols-5 max-w-screen-sm ">
            {itemsAlbumList.map((item,index)=>(
           <ItemAlbumItem data={item} key={index}/>
           ))}
          </div>        
         </>
       }
       {!loading && itemsAlbumList.length == 0 && 
       <div>Tente novamente mais tarde.</div>}      
  
     </div>

        </div>
    ) ;
 }