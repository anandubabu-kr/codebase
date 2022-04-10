import axios from 'axios';
import React, { useState } from 'react';


const url='https://codebasicsapp.herokuapp.com/'

export const fetchCourselist=()=>axios.get(url)

export default function Axios() {
    const [post, setPost] = useState(null);
    React.useEffect(() => {
      axios.get(url).then((response) => {
        setPost(response.data);
      });
    }, []);
    if (!post) return 'Nodata';
    return (
      <div>
        <h1>Axios</h1>
        <p>URL : {url} </p>
        <p>Result from API : </p>
  
        <h4> {post[1].title} </h4>
        <p>{post[2].body}</p>
      </div>
    );
  }