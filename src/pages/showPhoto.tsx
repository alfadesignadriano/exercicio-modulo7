import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../api";
import { tItensAlbum } from "../types/tItensAlbum";


export const ShowPhoto = () => {
    const p = useParams<string>();
    const navigate = useNavigate();    
    const [loading,setloading] = useState(false);    
    const [detPhoto, setDetPhoto] = useState<tItensAlbum>();    

    const loadPhotoAsync  = async () => {
        try{
          setloading(true);
          if (p.idimage) {
              let json = await api.getPhoto(parseInt(p.idimage));
              setDetPhoto(json);
              setloading(false);  
            }
        } catch(e){
          setloading(false);
          console.error(e);
        }
    }      

    useEffect(() =>{
        loadPhotoAsync();
    },[]);      

    const handleBackButton =()=> {
        navigate(-1);
    };         

    return(
        <div>
            <button className='bg-gray-200 rounded px-2 ' onClick={handleBackButton}>voltar</button>
            <div >
                {loading && <div className='p-2'>carregando...</div>}
            </div>
            {!loading && (detPhoto) &&
            <>
                <h3 className="text-xl py-3">{detPhoto.title}</h3> 
                <div>
                    <img src={detPhoto.url} width="600" alt="" />    
                </div> 
            </>
            }            
        </div>
    ) ;
 }