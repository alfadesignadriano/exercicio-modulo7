import { album } from '../types/albums';
import {Link} from 'react-router-dom';

type Props = {
    data : album;
}

export const AlbumItem = ({data} : Props) => {
    return (
        <Link to={`/album/${data.id}`}>
            <div 
                className='p-3 my-2 border-solid border-2 border-gray-700 text-sm hover:bg-gray-300 cursor-pointer' >
                {data.title}
            </div>
      </Link>

    );
}