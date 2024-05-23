import React, {useEffect, useState} from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import MovieList from './components/MovieList';
import Movie from './components/Movie';

import AppHeader from './components/AppHeader';
import { useSelector } from "react-redux";
import AddMovieForm from './components/AddMovieForm';
import FavoriteMovieList from './components/FavoriteMovieList';
import AddUserForm from "./components/AddUserForm";

const App = props => {
  const [userList, setUserList] = useState([])
  const [activeUser, setActiveUser] = useState(null)
  
  useEffect(()=> {
    let valueFromLS = localStorage.getItem("userList");
    if(valueFromLS == ""){
      valueFromLS ='{"users": []}'
    }
    let users = JSON.parse(valueFromLS).users
    setUserList(users);
  },[])
  const displayFavorites = useSelector(store => store.favoritesReducer.displayFavorites);

  return (
    <div>
      <nav className="bg-zinc-800 px-6 py-3">
        <h1 className="text-xl text-white">Redux Film Projesi</h1>
      </nav>

      <div className="max-w-4xl mx-auto px-3 pb-4">
        <AppHeader userList = {userList} setActiveUser = {setActiveUser}/>
        <div className="flex flex-col sm:flex-row gap-4">
          {displayFavorites && <FavoriteMovieList activeUser = {activeUser} />}

          <Switch>
            <Route exact path="/movies/add">
              <AddMovieForm />
            </Route>
            <Route exact path="/movies/newuser">
              <AddUserForm />
            </Route>

            <Route path="/movies/:id">
              <Movie />
            </Route>

            <Route path="/movies">
              <MovieList />
            </Route>

            <Route path="/">
              <Redirect to="/movies" />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;