import Styles from "./auth.module.scss"
import registerImg from "../../assets/register.png"
import Card from '../../components/card/Card'
import { Link ,useNavigate} from 'react-router-dom'
import { useState } from "react"

import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../firebase/config'
import Loader from "../../components/loader/Loader"
import { toast } from "react-toastify"

const Register = () => {

  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")
  const[cPassword,setCPassword] = useState("")
  const[isLoading,setIsLoading] = useState(false)

const navigate =useNavigate()

const registerUser = (e) =>{
e.preventDefault()
  
  if ( password !== cPassword){
      toast.error("password do not match.")
  }
  setIsLoading(true)

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    setIsLoading(false)
    toast.success("Registeration Successful ")
    navigate("/login")
    // ...
  })
  .catch((error) => {
    toast.error(error.message)
    setIsLoading(false)
  });
}
  return (
    <>
    
    {isLoading && <Loader />}
    <section className= {`container ${Styles.auth}`}>
    <Card>
        <div className={Styles.form}>
            <h2>Register</h2>
    <form  onSubmit={registerUser}>
        <input type='text' placeholder='Email' required 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        />
        <input type='password' placeholder='Password' required 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <input type='password' placeholder='ConfirmPassword' required
         value={cPassword}
         onChange={(e) => setCPassword(e.target.value)}
          />
        <button type="submit" className='--btn --btn-primary --btn-block'>Register</button>
    </form>
            <span className={Styles.register}>
                <p>Already an account ?</p>
                <Link to="/login"> Login</Link>
            </span>
        </div>
        </Card>
        <div className={Styles.img}>
        <img src={registerImg} alt='Register' width="400"/>
    </div>
    </section>
    </>
  )
}

export default Register