import React, { useState } from "react";
import axios from "axios"
import { LoginSection, MainMenu, PrimaryContent } from "../../constants/style";
import phonestatus from "../../images/PhoneStatus Bar.png";
import Minlogo from "../../images/MinLogo.png";
import Footer from "../Footer/Footer";
import { goToHome, goToLogin } from "../../navrouter/navigation";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/BASE_URL";

function SignUp (){
  const navigate = useNavigate();

  //Função para pegar dados de cadastro no front
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
})

const onChangeForm = (event)=>{
  setForm({ ...form, [event.target.name]: event.target.value })
}

//callback para controlar requisição de cadastro
const signUp = async ()=>{
  try {

      let body ={
          username: form.username,
          email: form.email,
          password: form.password,
      }
        const response = await axios.post(`${BASE_URL}/users/signup`, body)
        window.localStorage.setItem("labedditToken", response.data.token)
        goToHome(navigate)
    } catch (error) {
        console.log(error)
    }
}
  return (
    <>
      <PrimaryContent>
        <LoginSection>
          <div style={{ position: "relative", bottom: "55px" }}>
            <img src={phonestatus} alt="Phonestatus" />
          </div>
          <span
            style={{
              position: "relative",
              bottom: "111px",
              background: "#EDEDED",
              width: "418px",
              lineHeight: "15px",
              height: "67px",
            }}
          >
            <h3
              onClick={() => goToLogin(navigate)}
              style={{
                position: "relative",
                textAlign: "right",
                marginRight: "29px",
                marginTop: "15px"
              }}
            >
              Entrar
            </h3>
            <img
              src={Minlogo}
              alt="Logo"
              style={{ left: "188px", top: "-18px", position: "relative" }}
            />
          </span>
          <div>
            <h1 style={{ bottom: "133px", position: "relative", left: "20px" }}>
              Olá, boas vindas ao LabEddit ;D
            </h1>
          </div>
          <div style={{ bottom: "133px", position: "relative" }}>
          <input value={form.username} name="username" onChange={onChangeForm} placeholder="Apelido" required />
          <input value={form.email} name="email" onChange={onChangeForm} placeholder="E-mail" required />
          <input value={form.password} name="password" onChange={onChangeForm} placeholder="Senha" required />       
          </div>
          <div>
            <p style={{ position: "relative", left: "6px" }}>
              Ao continuar, você concorda com o nosso{" "}
              <a style={{ color: "#4088CB", textDecoration: "none" }} href="#">
                Contrato de usuário
              </a>{" "}
              e nossa{" "}
              <a style={{ color: "#4088CB", textDecoration: "none" }} href="#">
                Politica de Privacidade
              </a>
            </p>
            <p>
              <span>
                <input className="checkButton" type="checkbox" required/>
              </span>
              Eu concordo em receber e-mails sobre coisas legais no Labeddit
            </p>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.6 }}
              onClick={()=>signUp()}
            >
              Cadastrar
            </motion.button>

            <hr
              style={{
                width: "134px",
                height: "5px",
                radius: "10px",
                background: "#000000",
              }}
            ></hr>
          </div>
        </LoginSection>
      </PrimaryContent>
    </>
  );
};

export default SignUp;
