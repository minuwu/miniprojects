import {useState} from 'react';

export default function Form (){
    let formTemplate = {
        fullName: "",
        userName: "",
        password: ""
    }
    let [formData, setFormData] =  useState(formTemplate);
    let handleForm = (event) => {
        setFormData((currentData)=>{
            return {...currentData, [event.target.name]:event.target.value}
        })
    }
    let handleSubmit = (event) =>{
        event.preventDefault();
        console.log(formData);
        setFormData(formTemplate);
    }

    return (<form onSubmit={handleSubmit}>
        <label htmlFor="fullName">fullName</label>
        <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleForm} />
        <hr/>
        <label htmlFor="userName">userName</label>
        <input type="text"  name="userName"  id="userName" value={formData.userName}  onChange={handleForm}  />
        <hr/>
        <label htmlFor="password">password</label>
        <input type="password"  name="password" id="password"  value={formData.password} onChange={handleForm}  />
        <hr/>
        <button>Submit</button>
    </form>)
}