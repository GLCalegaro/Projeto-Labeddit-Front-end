import minlogo from '../images/MinLogo.png';
import phonestatus from '../images/PhoneStatus Bar.png'
import { LoginSection, StyleHeader } from "./style";
import { goToLogin } from "../navrouter/navigation";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { GrClose } from "react-icons/gr";

function Header() {
    const navigate = useNavigate()
    const context = useContext(GlobalContext)
    const location = useLocation()

    const closeModal = ()=>{
        context.setModal(false)
        context.setActionModal("")
        context.setUrlPost('')
    }

    const logOut = ()=>{
        context.setModal(false)
        context.setActionModal("")
        localStorage.clear()
        goToLogin(navigate)
    }

    return (
        <LoginSection>
          <div style={{
              position: "relative",
              top: "-375px"}}>
            <img src={phonestatus} alt="Phonestatus" />
          </div>
        <StyleHeader style={{
              position: "relative",
              top: "-485px"}}>
            <div onClick={()=>logOut()}> 
                <svg stroke="red" fill="red" stroke-width="0" viewBox="0 0 24 24" alt="botão-fechar" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{fontSize: "3rem", fill: "currentcolor", stroke: "red", strokeWidth: "0", height: "1em", width:"1em", color: "red"}}><path fill="none" stroke="#A3A3A3" stroke-width="2" d="M3,3 L21,21 M3,21 L21,3" width="15px"></path>
                </svg>
                           
            </div>
            <div>
                <img src={minlogo} alt="logo"/>
            </div>
            <div>
                {location.pathname === "/signup"?
                <h2><a onClick={()=>goToLogin(navigate)}>Entrar</a></h2>
                :
                <h2><a onClick={()=>logOut()}>Logout</a></h2>
                }
                
            </div>
        </StyleHeader>
    </LoginSection>
    )
}

export default Header