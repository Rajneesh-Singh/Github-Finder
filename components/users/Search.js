import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { clear } from 'sisteransi';

class Search extends Component {
    constructor(props) {
        super()
        this.state = {
            text: ''

        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange = (e) => {
        this.setState({
            text: e.target.value
        })

    }

    onSubmit(b) {
        b.preventDefault()
        this.props.searchUsers(this.state.text)
        this.setState({
            text: ''
        })

    }

 PropTypes ={
        searchUsers:PropTypes.func.isRequired,
        clear:PropTypes.func.isRequired,
    }

 



    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.onSubmit} className="form">
                        <input type="text" name="text" value={this.state.text} onChange={this.onChange} placeholder="Search User..." className="form-control" style={{ marginTop: "20px" }} />
                        <input type="submit" value="Search" className="btn btn-primary btn-block" style={{ marginTop: "20px"  }} />
                    </form>


                </div>
            {this.props.showclear&&(<button onClick={this.props.clear} value="Clear" style={{marginTop:"20px" }} className="btn btn-primary btn-block" >Clear</button>)}
            </div>
        )
    }
}

export default Search
