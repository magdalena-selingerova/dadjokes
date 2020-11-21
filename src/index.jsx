import React, { useState } from 'react';
import { render } from 'react-dom';
import './index.html';
import './style.css';

const App = () => {
  const [ThumbsUp, setLike] = useState(0);
  const [ThumbsDown, setDislike] = useState(0);

  return (
    <div className="container">
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img className="user-avatar" src="assets/img/user01.png" />
            <p className="user-name">Neroxx</p>
          </div>
          <p className="joke__text">
            The secret service isn't allowed to yell "Get down!" anymore when
            the president is about to be attacked. Now they have to yell
            "Donald, duck!"
          </p>
        </div>
        <div className="joke__likes">
          <button
            id="btn-up"
            className="btn-like btn-like--up"
            onClick={() => setLike(ThumbsUp + 1)}
          ></button>
          <span id="likes-up" className="likes-count likes-count--up">
            {ThumbsUp}
          </span>
          <button
            id="btn-down"
            className="btn-like btn-like--down"
            onClick={() => setDislike(ThumbsDown + 1)}
          ></button>
          <span id="likes-down" className="likes-count likes-count--down">
            {ThumbsDown}
          </span>
        </div>
      </div>
    </div>
  );
};

render(<App />, document.querySelector('#app'));
