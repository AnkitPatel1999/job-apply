import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class Apply extends React.Component{
    constructor(){
        super()
        this.state = {
            name:'',
            email:'',
            phone:'+91 ',
            exp:'',
            skills:'',
            apply:'',
            status: false
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value })
    }
    handleApply = (e) => {
        this.setState({apply: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.name == "" || this.state.email == "" || this.state.phone == '+91 ' || this.state.apply == ''){
            alert('Your applied details are not valid')
        }
        else{
          const formData = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            experience: this.state.exp,
            skills: this.state.skills,
            jobTitle: this.state.apply
          }
          axios.post(`http://dct-application-form.herokuapp.com/users/application-form`,formData)
            .then((response) => {
                console.log(response.data)
                this.setState({status: true})
            })
            .then((err) => {
                console.log(err)
            })
        console.log(formData)
        }
    }

    render(){
        return(
            <div className='wrap'>
                {this.state.status && <Redirect to='/admin'/>}
                <h1>Apply for Job</h1>
            <div className='form'>
                <form onSubmit={this.handleSubmit}>

                    <label className='col-25' htmlFor='name'>Full name  </label>
                    <input className='col-75' type='text' id='name' name='name' value={this.state.name} onChange={this.handleChange}/>
                    <br/><br/>
                    

                    <label className='col-25' htmlFor='email'>Email Address  </label> 
                    <input className='col-75' type='email' id='email' name='email' value={this.state.email} onChange={this.handleChange} placeholder='example@gmail.com'/>
                    <br/><br/>
                    

                    <label className='col-25' htmlFor='phone'>Contact Number  </label>
                    <input className='col-75' type='text' id='phone' name='phone' value={this.state.phone} onChange={this.handleChange}/>
                    <br/><br/>
                    

                    <label className='col-25' htmlFor='apply'>Applying for job  </label>
                    <select className='col-75' id='apply' onChange={this.handleApply} value={this.state.apply}>
                        <option value='select'>---select---</option>
                        <option value='Front-End Developer'>Front-end Developer</option>
                        <option value='Node.js Developer'>Nodejs Developer</option>
                        <option value='MEAN Stack Developer'>MERN developer</option>
                        <option value='FULL Stack Developer'>FULL-stack developer</option>
                    </select>
                    <br/><br/>
                    

                    <label className='col-25' htmlFor='exp'>Experience</label>
                    <input className='col-75' type='text' id='exp' name='exp' value={this.state.exp} onChange={this.handleChange} placeholder='2 years 3 months' />
                    <br/><br/>
                    

                    <label className='col-25' htmlFor='skills'>Technical Skills</label>
                    <textarea  className='col-75' id='skills' name='skills' value={this.state.skills} onChange={this.handleChange} placeholder='technical-skills'/>
                    <br/><br/>
                    
                    <input className='submit' type='submit' value='send application' />
                </form>
            </div>
            </div>
        )
    }
}

export default Apply