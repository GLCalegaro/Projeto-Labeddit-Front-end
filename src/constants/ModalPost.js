import Header from "./Header"
import axios from "axios"
import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import { StyleContainerModal, StyleSection } from "./style"
import { TbArrowBigDown, TbArrowBigUp } from "react-icons/tb"
import { IoChatboxOutline } from "react-icons/io5"
import { useEffect, useState } from "react"
import { BASE_URL } from "./BASE_URL"

function ModalPost(props){

    const context = useContext(GlobalContext)
    const [post, setPost] = useState({}) //variável para controlar informações da publicação individual
    const [content, setContent] = useState('') 

    useEffect(()=>{
        browserPost()
    },
    [])

    //renderizar publicação individual
    const browserPost = async()=>{
        try {
            let auxPost = '' //variável auxiliar para armazenar requisição axios
            const response = await axios.get(`${BASE_URL}/posts/${context.urlPost}`,{
                headers:{
                    Authorization:window.localStorage.getItem("labedditToken")
                }})
            auxPost = response.data[0]
            console.log("Post", response.data[0])  
            setPost(auxPost)
        } catch (error) {
            console.log(error)
        }
    }

    const likePost = async (postId)=>{
        try {
            let body = {
                like: 1,
            }
            await axios.put(`${BASE_URL}/posts/${postId}/like`,body,{
                headers:{
                    Authorization:window.localStorage.getItem("labedditToken")
                }})
                browserPost()
                props.browserPosts()
        } catch (error) {
            console.log(error)
        }
    }

  
    const dislikePost = async (postId)=>{
        try {
            let body = {
                like: 0,
            }
            await axios.put(`${BASE_URL}/posts/${postId}/like`,body,{
                headers:{
                    Authorization:window.localStorage.getItem("labedditToken")
                }})
                browserPost()
                props.browserPosts()
        } catch (error) {
            console.log(error)
        }
    }


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
            browserPost()
            props.browserPosts()
            } catch (error) {
            console.log(error)
        }
    }

    return(
        <>         
            <StyleContainerModal>
            <Header/>
                <StyleSection>
                    {/* div relacionada a publicação selecionada */}
                    <div>
                        <article>
                            <p className="subText">Enviado por: {post && post?.creator?.username}</p>
                            <p>{post.content}</p>
                            <p className="menuPost">
                                <span className="subTextBold">
                                    <TbArrowBigUp onClick={()=>likePost(post.id)} alt="botão-like"/>
                                    { post.likes}
                                    <TbArrowBigDown onClick={()=>dislikePost(post.id)} alt="botão-dislike"/> 
                                </span> 
                                <span className="subText">
                                    <IoChatboxOutline alt="botão-comentários" />
                                    {post.comments}
                                </span>
                            </p>
                        </article>
                        <input value={content} onChange={(event)=>setContent(event.target.value)} className="InputPost" placeholder="Adicionar comentário"/>
                        <button onClick={()=>{insertNewComment()}}>Responder</button>
                    </div>

                    {/* div relacionada aos comentários da publicação */}
                    <div>
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
                    </div>
                </StyleSection>
            </StyleContainerModal>
        </>
    )
}

export default ModalPost