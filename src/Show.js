import React from 'react'

class Show extends React.Component{
    handleClose = () =>{
      this.props.handlePopUp()
    }

    render(){
        console.log('status',this.props)
        return (
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
                  <button className='red close' onClick={this.handleClose}>Close</button>
                </div>
              </div>
            </div>
        )
    }
}
export default Show