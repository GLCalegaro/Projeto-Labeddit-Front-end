import styled from "styled-components";

export const StyleHeader = styled.header`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: #EDEDED;
    // position: absolute;
    // left: 0%;
    // top: 0%;
    div{
        width: 33.33%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    h2{
        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 25px;
        text-align: center;
        color: #4088CB;
    }
`

export const PrimaryContent = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    flex-direction: column;
    position: absolute;
    width: 100%;
    min-height: 100vh;
`

export const MainMenu = styled.span`
    position: absolute;
    width: 428px;
    height: 50px;
    left: 0px;
    top: 44px;
    background: #EDEDED;
        p{
            font-family: 'Noto Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 19px;
            text-align: center;
            color: #4088CB;
        }
`

export const LoginSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    margin: 0;

    h1{
    font-family: 'IBM Plex Sans', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    color: #373737;
    line-height: 43px;
    }
    
    h3{
            font-family: 'Noto Sans';
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 25px;
            text-align: center;
            color: #4088CB;
        }

    p{
        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        color: #000000;
        opacity: 0.8;
    }

    div{
        height: 40%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1vh;

        input{
        background: #EDEDED;
        border: 1px solid #D5D8DE;
        border-radius: 4px;
        height: 55px;
        width: 333px;
        padding-left: 4vw;
        font-weight: 400;
        font-size: 16px;
        font-family: 'Noto Sans';
        color: #323941;
        }
        
        input:focus{
            outline: none;
        }
    
        button{
        width: 365px;
        height: 51px;
        left: 29px;
        top: 587px;
        background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
        border-radius: 27px;
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        color: #FFFFFF;
        border: none;
        }

        button:hover{
        outline: double #FF3419;
        }

        hr{
            margin: 10px 0;
        width: 363.01px;
        height: 1px;
        right: 33px;
        border: 0;
        background-image: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);  
        }

    .signUpButton{
        background: #FFFFFF;
        display: flex;
        height: 51px;
        padding: 13px 83px;
        justify-content: space-evenly;
        align-items: center;
        border: 1px solid #FE7E02;
        border-radius: 27px;
        color: #FE7E02;
        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
    }

    .checkButton{
        line-height: normal;
        height: 18px;
        width: 18px;
        border: 1px solid #C4C4C4;
        border-radius: 2px;
        background: red
    }
}
`


 export const ModalSection = styled.section`
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 90%;
    // min-height: 100vh;
    animation: FromRight .7s .4s backwards;
    div:first-child{
        margin-top: 2vh;
        min-height: 40vh;
        margin-bottom: 2vh;
        width: 100%;
    }
    div{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1vh;
        
        .InputPost{
            border-radius: 12px;
            border: none;
            background-color: #EDEDED;
            height: 130px;
            width: 100%;
            font-family: 'IBM Plex Sans';
            color: #6F6F6F;
            font-weight: 400;
            font-size: 18px; 
        }
        button{
            border-radius: 12px;
            width: 100%;
            font-family: 'IBM Plex Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 23px;
            color: #FFFFFF;
        }
        article{
            display: flex;
            width: 100%;
            gap: 18px;
            padding: 9px 10px;
            flex-direction: column;
            background: #FBFBFB;
            border: 1px solid #E0E0E0;
            border-radius: 12px;
            align-items: flex-start;
            font-family: 'IBM Plex Sans';
            font-weight: 400;
            font-size: 18px;
            color: #000000;
            .subText{
                font-size: 12px;
                color: #6F6F6F;
            }
            .subTextBold{
                font-size: 12px;
                color: #6F6F6F;
                font-weight: 700;
            }
            .menuPost{
                display: flex;
                gap: 2vw;
            }
            span{
                padding: 5px;
                display: flex;
                justify-content: space-between;
                gap: 18px;
                border: 1px solid #E0E0E0;
                border-radius: 28px;
                img:hover{
                    cursor:pointer;
                }
            }
        }
    }

             hr{
                margin: 10px 0;
                width: 363.01px;
                height: 1px;
                right: 33px;
                border: 0;
                background-image: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);  
                }
    @keyframes FromRight{
        from{
            opacity: 0;
            transform: translateX(20px);
        }
        to{
            opacity: 1;
            transform: translateX(0px);
        }
    }
`

export const StyleContainerModal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #FFFFFF;
    position: absolute;
    width: 100%;
    min-height: 100vh;
    header{
        margin-top: 30px;
    }
    @media screen and (min-device-width: 500px){
        top: 2%;
        left: 4%;
        width: 90%;
        position: absolute;
    }
`

export const StyleSection = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 90%;
    // min-height: 100vh;
    animation: FromRight .7s .4s backwards;
    div:first-child{
        margin-top: 2vh;
        min-height: 40vh;
        margin-bottom: 2vh;
        width: 100%;
    }
    div{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1vh;
        
        .InputPost{
            border-radius: 12px;
            border: none;
            background-color: #EDEDED;
            height: 130px;
            width: 100%;
            font-family: 'IBM Plex Sans';
            color: #6F6F6F;
            font-weight: 400;
            font-size: 18px; 
        }
        button{
            border-radius: 12px;
            width: 100%;
        }
        article{
            display: flex;
            width: 100%;
            gap: 18px;
            padding: 9px 10px;
            flex-direction: column;
            background: #FBFBFB;
            border: 1px solid #E0E0E0;
            border-radius: 12px;
            align-items: flex-start;
            font-family: 'IBM Plex Sans';
            font-weight: 400;
            font-size: 18px;
            color: #000000;
            .subText{
                font-size: 12px;
                color: #6F6F6F;
            }
            .subTextBold{
                font-size: 12px;
                color: #6F6F6F;
                font-weight: 700;
            }
            .menuPost{
                display: flex;
                gap: 2vw;
            }
            span{
                padding: 5px;
                display: flex;
                justify-content: space-between;
                gap: 18px;
                border: 1px solid #E0E0E0;
                border-radius: 28px;
                img:hover{
                    cursor:pointer;
                }
            }
        }
    }
    @keyframes FromRight{
        from{
            opacity: 0;
            transform: translateX(20px);
        }
        to{
            opacity: 1;
            transform: translateX(0px);
        }
    }
`