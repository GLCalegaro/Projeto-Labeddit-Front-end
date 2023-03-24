import { useContext } from "react"
import {GlobalContext} from "../../context/GlobalContext"
import axios from "axios"
import { BASE_URL } from "../../constants/BASE_URL"
import { TbArrowBigDown, TbArrowBigUp } from "react-icons/tb"
import { IoChatboxOutline } from "react-icons/io5"
import { goToPosts } from "../../navrouter/navigation"
import { useNavigate } from "react-router"

function Post (props){
    const context = useContext(GlobalContext)
    const navigate = useNavigate()

    const showPost = (postId)=>{
        context.setUrlPost(postId)
        context.setModal(true)
        context.setActionModal("post")
    }
    console.log(props)

    const likePost = async (postId)=>{
        try {
            let body = {
                like: 1,
            }
            await axios.put(`${BASE_URL}/posts/${postId}/like`,body,{
                headers:{
                    Authorization:window.localStorage.getItem("labedditToken")
                }})
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
            props.browserPosts()
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <article>
        <p className="subText">Enviado por: {props.post.creator.username}</p>
        <p>{props.post.content}</p>
        <p className="menuPost">
            <span className="subTextBold">
            <TbArrowBigUp onClick={()=>likePost(props.post.id)} alt="botão-like" style={{ fontSize: "15px"}}/>
                {props.post.likes}
            <TbArrowBigDown onClick={()=>dislikePost(props.post.id)} alt="botão-dislike" style={{ fontSize: "15px"}}/> 
            </span> 
            <span className="subText" onClick={()=>showPost(props.post.id)}>
            <IoChatboxOutline onClick={()=>goToPosts(navigate, props.post.id)} alt="botão-comentários" style={{ fontSize: "15px"}}/>
                {props.post.comments}
            </span>
        </p>
    </article>
    )
}

export default Post