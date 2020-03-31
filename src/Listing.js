import React from 'react'
import axios from 'axios'
import Display from './Display'

class Listing extends React.Component{
    constructor(){
        super()
        this.state = {
            listed : [],
            job:'',
            display:false
        }
    }

    componentDidMount(){
    //console.log('cdm',this.props.match.params.apply)
    const job = this.props.match.params.apply
    axios.get('http://dct-application-form.herokuapp.com/users/application-forms')
        .then((response)=>{
            if(job=='frontend'){
                const frontend = response.data.filter(candidate => candidate.jobTitle === 'Front-End Developer')
                this.setState({
                  listed: frontend,
                  job: "Front-End Developer"
                })
            }
            else if(job=='node'){
                const node = response.data.filter(candidate => candidate.jobTitle === 'Node.js Developer')
                this.setState({ 
                    listed: node,
                    job:'Node.js Developer'
                })
            }
            else if(job=='mean'){
                const mean = response.data.filter(
                candidate => candidate.jobTitle === "MEAN Stack Developer")
                this.setState({ 
                    listed: mean,
                    job: "MEAN Stack Developer"
                })
            }
            else if(job=='fullstack'){
                const fullstack = response.data.filter(candidate => candidate.jobTitle === 'FULL Stack Developer')
                this.setState({ 
                    listed: fullstack,
                    job : 'FULL Stack Developer'
                })
            }
        })
        .catch((err) =>{
            console.log(err)
        })
    }

    handleUpdate = (id,stat) =>{
        console.log('update',id,stat)
        axios.put(`http://dct-application-form.herokuapp.com/users/application-form/update/${id}`,{status:stat})
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
            <div className='list'>
                <h2>{this.state.job}</h2>
                <p>List of candidates applied for {this.state.job}</p>
                <Display candidates = {this.state.listed} handleUpdate = {this.handleUpdate} display = {this.state.display}/>
            </div>
        )
    }
}
export default Listing