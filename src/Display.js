import React from 'react'
import Show from './Show'

class Display extends React.Component{
    constructor(){
        super()
        this.state = {
            status: false,
            show:{}
        }
    }
    
    handleView = (show) => {
        console.log(show)
        this.setState({
            show,
            status:true
        })
    }

    componentDidUpdate(prevProps,prevState){
        console.log('listing',prevState,prevProps)
        if(prevState.status==true && prevProps.display == false){
            this.setState({
                status:false
            })
        }
    }

    render(){
        return(
            <div>
                {this.state.status && <Show view={this.state.show} stat={true} />}
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
                                <td>{list.createdAt.substr(0, 10)}</td>
                                <td>
                                  <button className='blue'
                                    onClick={() => {
                                      this.handleView(list);
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