import React from 'react'

class Show extends React.Component{
    constructor(){
        super()
        this.state = {
            display: true
        }
    }
    handleDisplay = () => {
        this.setState({display:false})
    }
    componentDidUpdate(prevProps,prevState){
        console.log('log',prevState,prevProps)
        if(prevState.display==false && this.props.stat == true){
            this.setState({display:true})
        }
    }
    render(){
        console.log('status',this.state.display)
        return (
          this.state.display && (
            <div className="wrapper">
              <div className="popup">
                <h3>Job Profile</h3>
                <hr />
                <div className='popup-text'>
                  <h4>Contact number </h4><p>{this.props.view.phone}</p><br/>
                  <h4>Email </h4><p>{this.props.view.email}</p><br/>
                  <h4>skills </h4><p>{this.props.view.skills}</p><br/>
                  <h4>Experience </h4><p>{this.props.view.experience}</p><br/>
                  <hr />
                  <button className='red close' onClick={this.handleDisplay}>Close</button>
                </div>
              </div>
            </div>
          )
        )
    }
}
export default Show