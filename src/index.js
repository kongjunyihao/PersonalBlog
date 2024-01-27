import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import Counter from './ReduxCounter/Counter';
import SliceCounter from './PostApp/features/counter/sliceCounter';
import { counterStore } from './ReduxCounter/counterStore';
import { sliceCounterStore } from './PostApp/store';
import { Provider } from 'react-redux';
import { postsStore } from './PostApp/store';
import { fetchPosts } from './PostApp/features/posts/postsSlice';
import { fetchUsers } from './PostApp/features/users/usersSlice';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

postsStore.dispatch(fetchUsers());
postsStore.dispatch(fetchPosts());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={postsStore}>
    <Router>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </Router>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
