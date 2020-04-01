import React from 'react'
import {Link} from 'react-router-dom'

class Admin extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <div>
                <h1>Admin Dashboard</h1>
                <Link to='/admin/frontend' className='link'>Front End Developer</Link>
                <Link to='/admin/node' className='link'>Node.js Developer</Link>
                <Link to='/admin/mean' className='link'>MEAN Stack Developer</Link>
                <Link to='/admin/fullstack' className='link'>Full Stack Developer</Link>
            </div>
        )
    }
}

export default Admin