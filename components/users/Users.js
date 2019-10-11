import React, { Component } from 'react'
import Useritem from './Useritem'
import Spinner from '../layout/Spinner'

class Users extends Component {
    constructor(props) {
        super()
}


        render() {
            if(this.props.loading){
               return < Spinner />
            }
            else{
                return (
                    <div style={userstyle}>
                       {this.props.users.map(user =>
                       <div>
                          <Useritem  user={user} />
                       </div>
                       )}
                  
                      
                    </div>
                )
            }
         
        }
}

const userstyle={
    display:'grid',
    gridTemplateColumns:'repeat(3,1fr)',
    gridGap:'1rem '
    

}

export default Users
