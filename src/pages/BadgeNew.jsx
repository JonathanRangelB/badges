import React from 'react'
import Navbar from '../components/Navbar'
import './styles/BadgeNew.css'

import header from '../images/badge-header.svg'
import Badge from '../components/Badge'


class BadgeNew extends React.Component{
    render() {
        return (
            <div>
                <Navbar/>
                <div className="BadgeNew__hero">
                    <img className='img-fluid' src={header} alt="logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge firstName='Jonathan' lastName='Rangel' twitter='JonathanRangelB' avatar='https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon' jobTitle='Frontend Developer'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew