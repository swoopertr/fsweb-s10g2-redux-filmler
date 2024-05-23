import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector} from "react-redux"
import { Link } from 'react-router-dom';
import { deleteMovie } from '../actions/movieActions';
import { addFavorite, removeFavorite } from '../actions/favoritesActions';

const Movie = (props) => {
  const { id } = useParams();
  const { push } = useHistory();
  const dispatcher = useDispatch();
  const movies = useSelector(store => store.moviesReducer.movies)
  const movie = movies.find(movie => movie.id === Number(id));
  const favoriteMovies = useSelector(store => store.favoritesReducer.favorites);
  const user = document.getElementById("userList").value
  const movieInFavorite = favoriteMovies.find(movie => movie.id === Number(id) && movie.user === user);

  const deleteHandler = () => {
  
    dispatcher(deleteMovie(id));
    push('/movies');
  }

  const favoriteHandler = () => {
    if (movieInFavorite) {
      //çıkar reducer'ı gelecek
      console.log('remove fav movie')
      dispatcher(removeFavorite(id, user));
    } else {
      console.log('add fav movie')
      dispatcher(addFavorite(movie, user));
    }
    
  }

  return (
    <div className="bg-white rounded-md shadow flex-1">
      <div className="p-5 pb-3 border-b border-zinc-200">
        <h4 className="text-xl font-bold">{movie.title} Detayları</h4>
      </div>
      <div className='px-5 py-3'>
        <div className='py-1 flex'>
          <div className='view-label'>İsim</div>
          <div className="flex-1">{movie.title}</div>
        </div>
        <div className='py-1 flex'>
          <div className='view-label'>Yönetmen</div>
          <div className="flex-1">{movie.director}</div>
        </div>
        <div className='py-1 flex'>
          <div className='view-label'>Tür</div>
          <div className="flex-1">{movie.genre}</div>
        </div>
        <div className='py-1 flex'>
          <div className='view-label'>Metascore</div>
          <div className="flex-1">{movie.metascore}</div>
        </div>
        <div className='py-1 flex'>
          <div className='view-label'>Açıklama</div>
          <p className='flex-1'>{movie.description}</p>
        </div>
      </div>
      <div className="px-5 py-3 border-t border-zinc-200 flex justify-end gap-2">
        <Link to="/movies" className="myButton bg-blue-600 hover:bg-blue-500"> Geri dönüş</Link>
        <button onClick={deleteHandler}  type="button" className="myButton bg-red-600 hover:bg-red-500">Sil</button>
        <button onClick={favoriteHandler} className="myButton bg-blue-600 hover:bg-blue-500 ">{movieInFavorite ? "Favorilerden Çıkar" : "Favorilere Ekle"}</button>
      </div>
    </div>
  );
}

export default Movie;