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
                <h4>Contact number {this.props.view.phone}</h4>
                <h4>Email {this.props.view.email}</h4>
                <h4>skills {this.props.view.skills}</h4>
                <h4>Experience {this.props.view.phone}</h4>
                <hr />
                <button onClick={this.handleDisplay}>Close</button>
              </div>
            </div>
          )
        )
    }
}
export default Show