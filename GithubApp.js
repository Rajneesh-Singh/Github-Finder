import React, { Component } from 'react'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import axios from 'axios'
import Search from './components/users/Search'


export class GithubApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            loading: false
        }

    }

     searchUsers= async (text)=> {

        this.setState({
            loading: true
        })

        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        console.log(res.data.items)
        this.setState({
            users: res.data.items,
            loading: false
        })

    }

    clear = () => {
        this.setState({
            users:[] ,
            loading:false
        })
    }




    render() {

        return (
            <div>
                <Navbar title="Github Finder" />
                <div className="container">
                
                    <Search searchUsers={this.searchUsers} clear={this.clear} showclear={this.state.users.length>0 ? true:false}  />
                </div>
                <div className="container">
                    <Users loading={this.state.loading} users={this.state.users} style={{display:"block"}}  />
                </div>
            </div>
        )
    }
}

export default GithubApp



 //     componentDidMount(){
    //         this.setState({
    //             loading:true
    //         })

    //        axios.get("https://api.github.com/users")
    //        .then(function (response) {
    //         const res = response.data
    //          console.log(res)
    //          this.setState({
    //             users : res,
    //             loading:false
    //         })


    //        })
    //        .catch(function (error) {
    //            console.log("error")
    //        })
    // }

