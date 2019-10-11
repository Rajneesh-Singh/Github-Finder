import React, { Component } from 'react'
import './GithubApp.css'

export class Navbar extends Component {
    constructor(props){
        super()
        this.state={
        
        }
    }
    render() {
        return (
            <nav className="navbar">
            <h1><i class="fab fa-github"></i> {this.props.title}</h1>
                
            </nav>
        )
    }
}

export default Navbar
