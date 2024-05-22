import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorites } from '../actions/favoritesActions';

const AppHeader = (props) => {
  const {userList, setActiveUser} = props
  const dispatcher = useDispatch()
  const favoritesDisplayHandler = () => {
    dispatcher(toggleFavorites())
  }
  const handleUserChange = () => {
    let getUser = document.getElementById("userList").value;
    setActiveUser(getUser);
  }

  const displayFavorites = useSelector(store => store.favoritesReducer.displayFavorites);
  const appTitle = useSelector(store => store.appTitle)
  return (
    <div className="flex justify-between items-center shadow rounded-md bg-white p-2 pl-3 my-3">
      <h2 className='text-zinc-600'>{appTitle}</h2>
      <div className="flex items-center gap-2">
        <select id='userList' onChange={handleUserChange}>
          <option selected value={"default"}>Choose User</option>
          {userList && userList.map(user => {
            return(
              <option value={user}>{user}</option>
            )
          })}
        </select>
        <div onClick={favoritesDisplayHandler} className="myButton bg-blue-600 hover:bg-blue-500">
          <span >Favorileri {displayFavorites ? "gizle" : "göster"}</span>
        </div>
        <Link to="/movies" className="myButton bg-blue-600 hover:bg-blue-500">Tüm filmler</Link>
        <Link to="/movies/add" className="myButton bg-green-700 hover:bg-green-600">
          <i className="material-icons text-sm">&#xE147;</i>
          <span>Yeni film ekle</span>
        </Link>
        <Link to="/movies/newuser" className="myButton bg-green-700 hover:bg-green-600">
          <i className="material-icons text-sm">&#xE147;</i>
          <span>Yeni kullanıcı ekle</span>
        </Link>
      </div>
    </div>
  );
}

export default AppHeader;


