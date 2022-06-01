import {useRoutes} from 'react-router-dom';
import {ItensAlbum} from '../pages/itensAlbum';
import {ListaAlbums} from '../pages/listaAlbums';
import {ShowPhoto} from '../pages/showPhoto';

export const MainRoutes = () => {
    return useRoutes([
        {path: '/', element:<ListaAlbums />},
        {path: '/album/:idalbum', element: <ItensAlbum /> },
        {path: '/photo/:idimage', element: <ShowPhoto /> },
    ]);
}