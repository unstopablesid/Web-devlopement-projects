import React, { useState } from 'react';

const Like = () => {
  const [count, setCount] = useState(0);
  const [isLike, setIsLike] = useState(false);

  const toggleLike = () => {
    if (isLike) {
      setCount(prevCount => prevCount - 1);
    } else {
      setCount(prevCount => prevCount + 1);
    }
    setIsLike(!isLike);
  };

  return (
    <div>
      <h1>Likes: {count}</h1>
      <button onClick={toggleLike} style={{ border: "none", background: "none" }}>
        {isLike ? (
          <i className="fa-solid fa-heart" style={{ color: "red", fontSize: "24px" }}></i>
        ) : (
          <i className="fa-regular fa-heart" style={{ fontSize: "24px" }}></i>
        )}
      </button>
    </div>
  );
};

export default Like;
