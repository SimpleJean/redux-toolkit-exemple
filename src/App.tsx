import React, { useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { userSlice } from './store/reducers/UserSlice';
import { fetchUsers } from './store/reducers/ActionCreators';
import PostContainer from './components/PostContainer';
import PostContainer2 from './components/PostContainer2';

function App() {
/*   const dispatch = useAppDispatch();
  const { users, isLoading, error } = useAppSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [ ]); */

  return (
    <div style={{display: 'flex'}}>
      {/*Дублируем получение данных и спомощью хука во вкладке Network получаем лишь один запрос на сервер */}
      <PostContainer />
      <PostContainer2 />
    </div>
/*     <div className="App">
      {isLoading && <h1>Loading</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users, null, 2)}
    </div> */
  )
}

export default App;
