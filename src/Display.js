import React from 'react'
import moment from 'moment'
import Show from './Show'

class Display extends React.Component{
    constructor(){
        super()
        this.state = {
            display: false,
            show:{}
        }
    }

    handlePopUp = (show) => {
        //console.log(show)
        this.setState({
            display:!this.state.display,
            show
        })
    }

    render(){
        return(
            <div>
                {this.state.display && <Show view={this.state.show} handlePopUp={this.handlePopUp} />}
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Technical Skills</th>
                            <th>Applied Date</th>
                            <th>View Details</th>
                            <th>Update Application Status</th>
                        </tr>
                    </thead>
                    <tbody>{
                        this.props.candidates.map((list,i) => {
                            return (
                              <tr key={i}>
                                <td>{list.name}</td>
                                <td>{list.skills}</td>
                                <td>{moment(list.createdAt).format('MM/DD/YYYY')}</td>
                                <td>
                                  <button className='blue'
                                    onClick={() => {
                                      this.handlePopUp(list);
                                    }}
                                  >
                                    View Details
                                  </button>
                                </td>
                                <td>
                                  {list.status == "applied" ? (<div>
                                      <button className='green' onClick={()=>this.props.handleUpdate(list._id,'shortlisted')}>Shortlist</button>
                                      <button className='red' onClick={()=>this.props.handleUpdate(list._id,'rejected')}>Reject</button>
                                    </div>) : 
                                    list.status =="rejected" ? <button className='red' onClick={()=>this.props.handleUpdate(list._id,'applied')}>Rejected</button> :
                                    list.status =="shortlisted" ? <button className='dgreen' onClick={()=>this.props.handleUpdate(list._id,'applied')}>Shortlisted</button>:
                                    null
                                  }
                                </td>
                              </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Display