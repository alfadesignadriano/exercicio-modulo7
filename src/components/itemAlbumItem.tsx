import { tItensAlbum } from '../types/tItensAlbum';
import {Link} from 'react-router-dom';

type Props = {
    data : tItensAlbum;
}

export const ItemAlbumItem = ({data} : Props) => {
    return (
        <Link to={`/photo/${data.id}`}>
            <div 
                className='p-3 border-solid border-2 border-gray-700 text-sm hover:bg-gray-300 cursor-pointer' >
                <img src={data.thumbnailUrl} width="150" alt="" />    
            </div>
        </Link>

    );
}