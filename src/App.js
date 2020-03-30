import React from 'react'
import {Link, BrowserRouter,Route} from 'react-router-dom'
import Apply from './Apply'
import Admin from './Admin'
import Listing from './Listing'
import './styles.css'

function App(props){
    return(
        <BrowserRouter>
            <div>
                <Route path='/' component={Apply} exact={true} />
                <Route path='/admin' component={Admin} />
                <Route path='/admin/:apply' render = {(props) => (
                    <Listing key={props.match.params.apply} {...props} />
                )} />
            </div>
        </BrowserRouter>
    )
}

export default App