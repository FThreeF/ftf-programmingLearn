import { Main } from 'pages/main/Main';
import React from 'react';
import style from './app.module.css';

export const App = () => {
  return (
    <div className={style.wrapper}>
      <Main/>
    </div>
  )
}