import React from 'react';
import Home from './Components/home/home.jsx'
import './App.css';
import {getCourseList} from './actions/courses'
import { useEffect } from 'react';
import{useDispatch} from 'react-redux'
import Footer from './Components/footer/Footer';


export default function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getCourseList)
  },[dispatch])
  return (
    <div>
      <Home/>
      <Footer/>
    </div>
  );
}
