
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Form = () => {
    const [formData, setFormdata] = useState({
        name: '',
        password: '',
        email: '',
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormdata({ ...formData, [name]: value })
        // [name]-> dianamic value is created//
        console.log(name, value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    }
    return (
        <div>
            <form style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onSubmit={handleSubmit}>
                <h1 style={{ textAlign: 'center' }}>Login</h1>
                <lable>UserName :</lable><br></br>
                <input type='text' name='name' value={formData.name} onChange={handleChange}></input><br></br>
                <lable>Password :</lable><br></br>
                <input type='password' name='password' value={formData.password} onChange={handleChange} ></input><br></br>
                <label>Email :</label><br></br>
                <input type='email' name='email' value={formData.email} onChange={handleChange}></input><br></br><br></br>
                <button name='sign'>Sumbit</button>
            </form>
            <Link to="/">count</Link>
        </div>
    )
    
}
export default Form

