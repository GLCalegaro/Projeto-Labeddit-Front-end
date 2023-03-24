import axios from "axios"
import { useState, useEffect } from "react"

function GlobalState(){

    //armazenar informações de publicações
    const [posts, setPosts] = useState([])

    //armazenar endereço de uma unica publicação
    const [urlPost, setUrlPost] = useState('')

    //controlar o loading das requisições axios
    const [loading, setLoading] = useState(false)

    //controlar exibição de modais
    const [modal, setModal] = useState(false)

    //controlar tipo de modais
    const [actionModal, setActionModal] = useState('')

    //controlar a exibição de modais de alerta
    const [alertModal, setAlertModal] = useState(false)

    //controlar o tipo de modais de alerta
    const [alertMessage, setAlertMessage] = useState('')

    return{
        posts,
        setPosts,
        urlPost, 
        setUrlPost,
        loading, 
        setLoading,
        modal, 
        setModal,
        actionModal, 
        setActionModal,
        alertModal, 
        setAlertModal,
        alertMessage, 
        setAlertMessage
    }
    
}


export default GlobalState