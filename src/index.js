import React from 'react'
import ReactDOM from 'react-dom'
import Badge from './components/Badge';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

const container = document.getElementById('app');

ReactDOM.render(<Badge
    firstName='Jonathan'
    lastName='Rangel'
    jobTitle='Frontend Developer'
    twitter="JonathanRangelB"
    avatar="https://www.gravatar.com/avatar?d=identicon"
    />, container)