import React, { Component } from 'react'
import Home from '../Home/home'
import "./condos.css"
import axios from 'axios'

export default class Condos extends Component {

    constructor(props) {
        super(props)
        this.state = {
            apartments: [],
            condos: [],
            houses: [],
            apt1: "",
            apt1image: ""
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/home')
            .then(res => {
                const rawApartments = [res.data]
                console.log('resss', res.data)
                var resApartments = [];
                var resCondos = [];
                var resHouses = [];
                  for (let i = 0; i <= res.data.length - 1; i++){
                    console.log('data', res.data[i].property_type)
                      if (i<=7){
                          resApartments.push(res.data[i])
                        }
                      else if (i>7 && i<=15){
                          resCondos.push(res.data[i])
                        }
                      else {
                          resHouses.push(res.data[i])
                        }
                    }
                    console.log('final', resHouses)
                    this.setState({
                      apartments: resApartments,
                      condos: resCondos,
                      houses: resHouses
                     })
                  }
            )
    }

    propertyClick(price) {
        console.log(price)
    }

    render() {
        return (
            <div>
                <Home />
                <div className="featured-condos-title" id="apartments">
                    <h1>Featured Apartments</h1>
                </div>
                <div className="featured-condos-container">
                {this.state.apartments.map(item => {
                    return (
                      <div className="featured-condo">
                        <div className="featured-condo-pic" style={{ backgroundImage: `url("${item.image_med}")` }} onClick={() => this.propertyClick(item.price)}>
                        </div>
                        <p className="featured-condo-rooms-font">{item.city}</p>
                        <p className="featured-condo-name-font">{item.property_name}</p>
                        <p className="featured-condo-price-font">${item.price}</p>
                        <div className="ratings-container">
                            <div className="stars-container">
                                <p className="star-color">★★★★★</p>
                                <p>(139)</p>
                            </div>
                            <p>• Superhost</p>
                        </div>
                      </div>
                    )
                })}
                </div>
                <div className="featured-condos-title" id="condos">
                    <h1>Featured Condos</h1>
                </div>
                <div className="featured-condos-container">
                {this.state.condos.map(item => {
                    return (
                            <div className="featured-condo">
                        <div className="featured-condo-pic" style={{ backgroundImage: `url("${item.image_med}")` }}>
                        </div>
                        <p className="featured-condo-rooms-font">{item.city}</p>
                        <p className="featured-condo-name-font">{item.property_name}</p>
                        <p className="featured-condo-price-font">${item.price}</p>
                        <div className="ratings-container">
                            <div className="stars-container">
                                <p className="star-color">★★★★★</p>
                                <p>(139)</p>
                            </div>
                            <p>• Superhost</p>
                        </div>
                        </div>
                    )
                })}
                </div>
                <div className="featured-condos-title" id="houses">
                    <h1>Featured Houses</h1>
                </div>
                <div className="featured-condos-container">
                {this.state.apartments.map(item => {
                    return (
                            <div className="featured-condo">
                        <div className="featured-condo-pic" style={{ backgroundImage: `url("${item.image_med}")` }}>
                        </div>
                        <p className="featured-condo-rooms-font">{item.city}</p>
                        <p className="featured-condo-name-font">{item.property_name}</p>
                        <p className="featured-condo-price-font">${item.price}</p>
                        <div className="ratings-container">
                            <div className="stars-container">
                                <p className="star-color">★★★★★</p>
                                <p>(139)</p>
                            </div>
                            <p>• Superhost</p>
                        </div>
                        </div>
                    )
                })}
                </div>

            </div>
        )
    }
}
