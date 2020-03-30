import React from 'react'
import axios from 'axios'

class Apply extends React.Component{
    constructor(){
        super()
        this.state = {
            name:'',
            email:'',
            phone:'+91',
            exp:'',
            skills:'',
            apply:''
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
        if (this.state.name == "" || this.state.email == "" || this.state.phone == '+91' || this.state.apply == ''){
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
          axios.post(`https://cors-anywhere.herokuapp.com/http://dct-application-form.herokuapp.com/users/application-form`,formData)
            .then((response) => {
                console.log(response.data)
            })
            .then((err) => {
                console.log(err)
            })
        console.log(formData)
        }
    }

    render(){
        return(
            <div>
                <h1>Apply for Job</h1>
                <form onSubmit={this.handleSubmit}>

                    <label htmlFor='name'>Full name  </label>
                    <input type='text' id='name' name='name' value={this.state.name} onChange={this.handleChange}/>
                    <br/><br/>

                    <label htmlFor='email'>Email Address  </label> 
                    <input type='email' id='email' name='email' value={this.state.email} onChange={this.handleChange} placeholder='example@gmail.com'/>
                    <br/><br/>

                    <label htmlFor='phone'>Contact Number  </label>
                    <input type='text' id='phone' name='phone' value={this.state.phone} onChange={this.handleChange}/>
                    <br/><br/>

                    <label htmlFor='apply'>Applying for job  </label>
                    <select id='apply' onChange={this.handleApply} value={this.state.apply}>
                        <option value='select'>---select---</option>
                        <option value='Front-End Developer'>Front-end Developer</option>
                        <option value='Node.js Developer'>Nodejs Developer</option>
                        <option value='MEAN Stack Developer'>MERN developer</option>
                        <option value='FULL Stack Developer'>FULL-stack developer</option>
                    </select>
                    <br/><br/>

                    <label htmlFor='exp'>Experience</label>
                    <input type='text' id='exp' name='exp' value={this.state.exp} onChange={this.handleChange} placeholder='2 years 3 months' />
                    <br/><br/>

                    <label htmlFor='skills'>Technical Skills</label>
                    <input type='textbox' id='skills' name='skills' value={this.state.skills} onChange={this.handleChange} placeholder='technical-skills'/>
                    <br/><br/>
                    <input type='submit' value='send application' />
                </form>
            </div>
        )
    }
}

export default Apply