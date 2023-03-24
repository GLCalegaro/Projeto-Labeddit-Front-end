import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL" ;
import { LoginSection, ModalSection, PrimaryContent } from '../../constants/style';
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import {TbArrowBigUp} from "react-icons/tb";
import {TbArrowBigDown} from "react-icons/tb"
import { goToLogin, goToPosts } from '../../navrouter/navigation';
import { GlobalContext } from '../../context/GlobalContext';
import Header from '../../constants/Header';

function Comments(props) {
  const context = useContext(GlobalContext)
    const navigate = useNavigate()
    const [content, setContent] = useState('') 
    const [post, setPost] = useState({})
    const [commentContent, setCommentContent] = useState("");
    const { id } = useParams();

  //Hook utilizado para renderizar publicações
  useEffect(()=>{
    browserComments()
},[])

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

  const showPost = (post)=>{
      context.setUrlPost(post)
      context.setModal(true)
      context.setActionModal("post")
  }

  //callback para enviar requisição de 'like'
  const likePost = async (post)=>{
    try {
        let body = {
            likes: 1,
        }
        await axios.put(`${BASE_URL}/posts/${post}/like`,body,{
            headers:{
                Authorization:window.localStorage.getItem("labedditToken")
            }})
            browserPosts()
            props.browserComments()
    } catch (error) {
        console.log(error)
    }
}

//callback para enviar requisição de 'dislike'
const dislikePost = async (post)=>{
    try {
        let body = {
            like: 0,
        }
        await axios.put(`${BASE_URL}/posts/${post}/like`,body,{
            headers:{
                Authorization:window.localStorage.getItem("labedditToken")
            }})
            browserPosts()
            props.browserComments()
    } catch (error) {
        console.log(error)
    }
}

  //Função para renderizar os posts separados
  const browserComments = async()=>{
    try {
        let auxPost = ''
            const response = await axios.get(`${BASE_URL}/posts/${context.urlPost}`,{
                headers:{
                    Authorization:window.localStorage.getItem("labedditToken")
                }})
            auxPost = response.data[0]
            console.log("Comments", response.data[0])  
            setPost(auxPost)
        } catch (error) {
            console.log(error)
        }
    }

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

    //callback para enviar novo comentário a publicação
    const insertNewComment = async () =>{
      try {          
        const body = {
            content
        }
          await axios.post(`${BASE_URL}/posts/${context.urlPost}`,body, {
              headers:{
                  Authorization:window.localStorage.getItem("labedditToken")
              }})         
            //   setContent('') deixar comentado, para não dar erro na renderização
              browserPosts()
              props.browserComments()
          } catch (error) {
          console.log(error?.response?.data)
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
                browserComments={browserComments}/> 
                </>
                : 
                ''}
          <ModalSection >
            <div>
                <input style={{height:"150px", width: "364px", position: "relative", top:"-826px"}} value={content} onChange={(event)=>setContent(event.target.value)} className="InputPost" placeholder="Adicionar comentário"/>
            </div>
            <div style={{position: "relative", top:"46px"}}>
            <motion.button
              style={{ position: "relative", top:"-975px", left: "0px", bottom:"0px", border:"none" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.6 }}
              onClick={()=>{insertNewComment()}}
            >
              Responder
            </motion.button>
            <hr style={{ position: 'relative', top: "-957px", left:"4px"}}></hr>
            </div>
            <div style={{position: "relative", top:"-872px"}}>
                        {post && post?.comments_post?.map((comment)=>{return(
                        <article key={comment.id}>
                            <p className="subText">Enviado por: {comment.username}</p>
                            {console.log("creator",comment )}
                            <p>{comment.content}</p>
                            <p className="menuPost">
                                <span className="subTextBold">
                                    <TbArrowBigUp onClick={()=>likePost(comment.id)} alt="botão-like"/>
                                    {comment.likes}
                                    <TbArrowBigDown onClick={()=>dislikePost(comment.id)} alt="botão-dislike"/> 
                                </span> 
                            </p>
                        </article>
                        )})}
                    
                    <hr
              style={{
                width: "134px",
                height: "5px",
                radius: "10px",
                background: "#000000",
                position: "relative",
                top: "-25px",
                right:"0px"
              }}
            ></hr>
            {/* <div>
                        {post && post?.comments_post?.map((comment)=>{return(
                        <article key={comment.id}>
                            {/* Corrigir linha abaixo, para puxar o nome do criador do comentário */}
                            {/* <p className="subText">Enviado por: {comment.username}</p>
                            {console.log("creator",comment )}
                            <p>{comment.content}</p>
                            <p className="menuPost">
                                <span className="subTextBold">
                                    <img src={Minlogo} onClick={()=>likePost(comment.id)} alt="botão-like"/>
                                    {comment.likes}
                                    <img src={phonestatus} onClick={()=>dislikePost(comment.id)} alt="botão-dislike"/> 
                                </span> 
                            </p>
                        </article>
                        )})}
                    </div> */} 
            </div>
          </ModalSection>
      {/* </LoginSection> */}
    </PrimaryContent>
    </>
  )
}

export default Comments