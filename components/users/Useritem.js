import React, { Component } from 'react'
import './user.css'

class Useritem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "id",
            login: "mojombo",
            avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
            html_url: "https://github.com/mojombo"
        }
    }

    render() {
        return (
            <div className="full">
                <div className="user">
                    <img src={this.props.user.avatar_url} alt="avatar_image" />
                    <h3>{this.props.user.login}</h3>
                    <div className="full1">
                        <a target="-blank" href={this.props.user.html_url}>More</a>
                    </div>

                </div>
            </div>
        )
    }
}

export default Useritem
