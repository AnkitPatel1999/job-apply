import React from 'react'
import {Link,Route,BrowserRoute} from 'react-router-dom'
import Apply from './Apply'
import Post from './Listing'

class Admin extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <div>
                <Link to='/admin/frontend'>Front End Developer</Link>
                <Link to='/admin/node'>Node.js Developer</Link>
                <Link to='/admin/mean'>MEAN Stack Developer</Link>
                <Link to='/admin/fullstack'>Full Stack Developer</Link>
            </div>
        )
    }
}

export default Admin