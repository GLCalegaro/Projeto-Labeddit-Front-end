import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL" ;
import { LoginSection, ModalSection, PrimaryContent } from '../../constants/style';
import phonestatus from "../../images/PhoneStatus Bar.png";
import Minlogo from "../../images/MinLogo.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {TbArrowBigUp} from "react-icons/tb";
import {TbArrowBigDown} from "react-icons/tb"
import {IoChatboxOutline} from "react-icons/io5";
import { goToLogin, goToPosts } from '../../navrouter/navigation';
import { GlobalContext } from '../../context/GlobalContext';
import Post from '../Post/Post';
import Header from '../../constants/Header';

function Home(props) {
  const context = useContext(GlobalContext)
    const navigate = useNavigate()
    const [content, setContent] = useState('') //variável para armazenar dados de publicação.
    const [post, setPost] = useState({}) //variável para controlar informações da publicação individual

  //Hook utilizado para renderizar publicações
  useEffect(()=>{
    browserPosts()
},[])

// Hook utilizado para analisar se há o Token armazenado no localStorage. Caso negativo, retorna para LoginPage
  useEffect(()=>{
    const token = window.localStorage.getItem("labedditToken")
    if(!token){
        goToLogin(navigate)
    }
  },[])

//callback utilizado para fechar o modal de post.
    const closeModal = ()=>{
        context.setModal(false)
        context.setActionModal("")
        context.setUrlPost('')
    }

    //callback utilizado para sair da conta do usuário e 'resetar' os modais
    const logOut = ()=>{
        context.setModal(false)
        context.setActionModal("")
        localStorage.clear()
        goToLogin(navigate)
    }

  //Função para renderizar todos os posts.
  const browserPosts = async()=>{
    try {
        context.setLoading(true)
        const response = await axios.get(`${BASE_URL}/posts`,{
            headers: {
                Authorization: window.localStorage.getItem("labedditToken")
            }
        })
        console.log(response.data) 
        context.setPosts(response.data)
        context.setLoading(false)
    } catch (error) {
        console.log(error)
        context.setLoading(false)
    }
}

// função para inserir nova publicação
const insertNewPost = async () =>{
    try {  

        let body = {
            content,
        }

        await axios.post(`${BASE_URL}/posts`,body,{
            headers:{
                Authorization:window.localStorage.getItem("labedditToken")
            }})  
        browserPosts() 
        setContent('')        
    } catch (error) {
        console.log(error)
    }
}

    //callback para enviar novo comentário a publicação
    const insertNewComment = async () =>{
      try {          
          let body = {
              content,
          }
          await axios.post(`${BASE_URL}/posts/${context.urlPost}`,body,{
              headers:{
                  Authorization:window.localStorage.getItem("labedditToken")
              }})         
          setContent('')
          browserPosts()
          .browserPosts()
          } catch (error) {
          console.log(error)
      }
  }

  return (
    <>
    {context.modal ? 
            <section />
            : 
            ''}
          <Header/>
    <PrimaryContent>
    {context.modal && context.actionModal === "post" ? 
                <>
                <ModalSection
                postId={context.urlPost}
                browserPosts={browserPosts}/> 
                </>
                : 
                ''}
          <ModalSection >
            <div>
                <input style={{height:"150px", width: "364px", position: "relative", top:"-826px"}} value={content} onChange={(event)=>setContent(event.target.value)} className="InputPost" placeholder="Escreva seu post..."/>
            </div>
            <div style={{position: "relative", top:"46px"}}>
            <motion.button
              style={{ position: "relative", top:"-975px", left: "0px", bottom:"0px", border:"none" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.6 }}
              onClick={()=>{insertNewPost()}}
            >
              Postar
            </motion.button>
            <hr style={{ position: 'relative', top: "-957px", left:"4px"}}></hr>
            </div>
            <div style={{position: "relative", top:"-872px"}}>
                        {context.loading ?
                        'Loading...' 
                        :
                        context.posts && context?.posts?.map((post)=> {return(
                            <Post key={post.id}
                            post={post}
                            browserPosts={browserPosts}/>
                        )})}
            
                    
                    <hr
              style={{
                width: "134px",
                height: "5px",
                radius: "10px",
                background: "#000000",
                top: "94px"
              }}
            ></hr>
            </div>
          </ModalSection>
      {/* </LoginSection> */}
    </PrimaryContent>
    </>
  )
}

export default Home