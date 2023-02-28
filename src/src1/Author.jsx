import React from 'react';


export default function Author(props) {
 
  return(
    <div className="author">
        {props.username}
    <img className="authoravi" alt="noimagen" src={props.photourl}/> 
    </div>
  );
}