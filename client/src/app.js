import React from 'react';
import ReactDOM from 'react-dom';
import WeeklyFilmsBox from './components/WeeklyFilmsBox';

window.onload = function(){
  ReactDOM.render(
    <WeeklyFilmsBox />,
    document.getElementById('app')
  );
}
