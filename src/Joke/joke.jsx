import React, { useState } from 'react';
import './style.css';

export const Joke = ({ userId, userName, text, likes, dislikes }) => {
  const [thumbsUp, setLike] = useState(likes);
  const [thumbsDown, setDislike] = useState(dislikes);

  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={`./assets/img/${userId}.png`} />
          <p className="user-name">{userName}</p>
        </div>
        <p className="joke__text">{text}</p>
      </div>
      <div className="joke__likes">
        <button
          id="btn-up"
          className="btn-like btn-like--up"
          onClick={() => setLike(thumbsUp + 1)}
        ></button>
        <span id="likes-up" className="likes-count likes-count--up">
          {thumbsUp}
        </span>
        <button
          id="btn-down"
          className="btn-like btn-like--down"
          onClick={() => setDislike(thumbsDown + 1)}
        ></button>
        <span id="likes-down" className="likes-count likes-count--down">
          {thumbsDown}
        </span>
      </div>
    </div>
  );
};
