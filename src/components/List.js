import React from 'react'
import { useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Spinner from './Spinner';
// import axios from 'axios';
// import {v4 as uuidv4} from 'uuid';
// import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';
// const Page_Number = 1;

export const List = () => {
  
  let history = useHistory();
  const onclick = () =>{
    history.push("/");
    window.location.reload(false);
  }
  const [state,setState] = useState([]);
  const [page,setPage] = useState(1);


  useEffect(()=>{
    fetch(`https://randomuser.me/api/?page=${page}&results=20&seed=abc`).then(
      res => res.json())
      .then((json) => 
      setState([...state, ...json.results])
  )
  },[page])

  const scrollToEnd = () =>{
    setPage(page+1);
  }


  window.onscroll = function(){
    if((window.innerHeight + window.scrollY) >= document.documentElement.offsetHeight)
    {
      scrollToEnd();
    }
  }

  return (
    <div >
     <div className='a1'>
       <div className='a2'>
       <button onClick = {onclick} className='btn'>Log Out</button>
         </div>
      {
        (state.length)>0 && state.map((el,i) =>
        <div className='main1' key={i}>
          <div className="head">
            
          <h4> 
            {el.name.first} {el.name.last}</h4>
          </div>
          <div className='log'><img src={el.picture.thumbnail} alt="Image" /></div>
         
      </div>
      
      )
        
    }
     <Spinner/>
  </div>
    </div>
  )
}
