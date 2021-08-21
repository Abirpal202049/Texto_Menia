import React from 'react'
import './Transform.css'
import { Link } from 'react-router-dom'

export default function Card(props) {
    return (
        <div>
            <div className="card errorcard text-dark">
                <img src={props.imglink} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.define}</p>
                    <Link to="/" className="btn btn-primary">Learn More 👇🏻</Link>
                </div>
            </div>
        </div>
    )
}
