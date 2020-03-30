import React from 'react'
import axios from 'axios'
import Status from './Status'
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

    render(){
        return(
            <div>
                {this.state.status && <Show view={this.state.show} stat={true} />}
                <table border='1'>
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
                                  <button
                                    onClick={() => {
                                      this.handleView(list);
                                    }}
                                  >
                                    View Details
                                  </button>
                                </td>
                                <td>
                                  {list.status == "applied" ? (<div>
                                      <button onClick={()=>this.props.handleUpdate(list._id,'shortlisted')}>Shortlist</button>
                                      <button onClick={()=>this.props.handleUpdate(list._id,'rejected')}>Reject</button>
                                      <button>Delete</button>
                                    </div>) : 
                                    list.status =="rejected" ? <button onClick={()=>this.props.handleUpdate(list._id,'applied')}>Rejected</button> :
                                    list.status =="shortlisted" ? <button onClick={()=>this.props.handleUpdate(list._id,'applied')}>Shortlisted</button>:
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
class Listing extends React.Component{
    constructor(){
        super()
        this.state = {
            listed : []
        }
    }

    componentDidMount(){
    //console.log('cdm',this.props.match.params.apply)
    const job = this.props.match.params.apply
    axios.get('https://cors-anywhere.herokuapp.com/http://dct-application-form.herokuapp.com/users/application-forms')
        .then((response)=>{
            if(job=='frontend'){
                const frontend = response.data.filter(candidate => candidate.jobTitle === 'Front-End Developer')
                this.setState({ listed: frontend })
            }
            else if(job=='node'){
                const node = response.data.filter(candidate => candidate.jobTitle === 'Node.js Developer')
                this.setState({ listed: node })
            }
            else if(job=='mean'){
                const mean = response.data.filter(
                candidate => candidate.jobTitle === "MEAN Stack Developer"
                )
                this.setState({ listed: mean })
            }
            else if(job=='fullstack'){
                const fullstack = response.data.filter(candidate => candidate.jobTitle === 'FULL Stack Developer')
                this.setState({ listed: fullstack })
            }
        })
        .catch((err) =>{
            console.log(err)
        })
    }

    handleUpdate = (id,stat) =>{
        console.log('update',id,stat)
        axios.put(`https://cors-anywhere.herokuapp.com/http://dct-application-form.herokuapp.com/users/application-form/update/${id}`,{status:stat})
            .then((response) => {
                console.log(response.data)
                const uList = response.data
                this.setState(prevState => ({
                    listed: prevState.listed.map(list => {
                        if(list._id===uList._id){
                            return Object.assign({},list,uList)
                        }
                        else{
                            return Object.assign({},list)
                        }
                    })
                }))
            })
            .catch((err) =>{
                console.log(err)
            })
    }

    render(){
        //console.log(this.state.listed)
        return(
            <div>
                <Display candidates = {this.state.listed} handleUpdate = {this.handleUpdate}/>
            </div>
        )
    }
}
export default Listing