import React from 'react'
import { useState } from 'react';

const Like = () => {
    const [isLike, setIsLike] = useState(false);
    const clicked = () => {
        setIsLike(!isLike);
    }
  return (
    <div>
        <h1>Liked</h1>
      <p onClick={clicked}>
        <i className='fa-regular fa-heart'></i>
      </p>
    </div>
  )
}

export default Like
