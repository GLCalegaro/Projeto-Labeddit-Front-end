import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { LoginSection, PrimaryContent } from '../../constants/style';
import phonestatus from "../../images/PhoneStatus Bar.png";
import logo from "../../images/Home Logo.png";
import { motion } from 'framer-motion';
import { goToHome, goToLogin, goToSignup } from '../../navrouter/navigation';
import Footer from '../Footer/Footer';
import { GlobalContext } from '../../context/GlobalContext';
import axios from 'axios';
import { BASE_URL } from '../../constants/BASE_URL';

function Login () {
    const navigate = useNavigate()
    
    const context = useContext(GlobalContext)
    const [form, setForm] = useState({email:'',password:''})

    const onChangeForm = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    useEffect(()=>{
        const token = window.localStorage.getItem("labedditToken")
        if(token){
            goToHome(navigate)
        }
    },[])

    const loginUser = async ()=>{
        try {
            let body ={
                email: form.email,
                password: form.password,
            }
            console.log(body)
            if(body === ''){
                alert("Preencha todos os campos para fazer login!")
            }
            const response = await axios.post(`${BASE_URL}/users/login`, body)
            console.log("response", response)
            
            // const tokenlabedditapi = JSON.stringify(response.data.token)
            window.localStorage.setItem("labedditToken", response.data.token)

            // localStorage.setItem('TokenApi-Labeddit', context.token)
            // console.log("teste vazio", response.data.tok)
            // console.log("teste cheio", response.data.token)
            if(response.data.token !== undefined){
                goToHome(navigate)
            } 
        } catch (error) {
            console.log(error)
           
        }
    }

  return (
    <>
        <PrimaryContent>
            <LoginSection>
                <div style={{position: 'relative', bottom: "21px" }}>
                    <img src={phonestatus} alt="Phonestatus" />
                    <img src={logo} alt="Logo" style={{ top: '33px', position: 'relative' }}/>
                    <p style={{top: "25px", position: 'relative'}}>O projeto de rede social da Labenu</p>
                </div>
                <div>
                    <input value={form.email} type="email" name="email" required onChange={onChangeForm} placeholder="E-mail"/>
                    <input value={form.password} type="password" name="password" required onChange={onChangeForm} placeholder="Senha" />
                </div>
                <div>
                    <motion.button style={{position: 'relative', top: "-105px", left:"5px" }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.6 }} onClick={()=>loginUser()}>Continuar</motion.button>
                    <hr style={{display: "flex", position: 'relative', top: "-85px", left:"5px" }}></hr>
                    <motion.button style={{position: 'relative', top: "-75px", left:"5px" }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.6 }} onClick={()=>goToSignup(navigate)} className="signUpButton">Crie uma conta!</motion.button>
                    <hr style={{ top: "85px", width: "134px", height:"5px", radius: "10px", background: "#000000"}}></hr>
                </div>
                <Footer/>
            </LoginSection>
        </PrimaryContent>
    
    </>
  )
}

export default Login