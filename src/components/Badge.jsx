import React from 'react'

import "./styles/Badge.css";
import confLogo from '../images/badge-header.svg'


class Badge extends React.Component{
    render() {
        return (
            <div className='Badge'>
                <div className='Badge__header'>
                    <img src={confLogo} alt="Logo de la conferencia"/>
                </div>
                <div className='Badge__section-name'>
                    <img className='Badge__avatar' src="https://www.gravatar.com/avatar?d=identicon" alt="avatar"/>
                    <h1>Jonathan <br/> Rangel</h1>
                </div>
                <div className='Badge__section-info'>
                    <h3>Frontend Developer</h3>
                    <div>@JonathanrangelB</div>
                </div>
                <div className="Badge__footer">#platzi</div>
            </div>
        )
    }
}

export default Badge