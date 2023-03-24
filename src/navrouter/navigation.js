export const goToHome = (navigate) =>{
    navigate("/main")
}

export const goToLogin = (navigate) =>{
    navigate("/")
}


export const goToSignup = (navigate) =>{
    navigate("/signup")
}

export const goToPosts = (navigate, post)=>{
    navigate(`/posts/${post}`)
}
