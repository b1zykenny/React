import React, { useState, useEffect } from "react";
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import './index.scss';
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import Profile from "./pages/Profile";
import Messages from "./pages/Messages";
import Message from "./pages/Message";


function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={< HomePage />} />
        <Route path='/profile' element={< Profile />} />
        <Route path='/messages' element={< Messages />} />
        <Route path='/messages/:id' element={< Message />} />
        <Route path='*' element={< NotFoundPage />} />
      </Route>
    </Routes>
  );

}
export default App;
