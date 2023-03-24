import { createGlobalStyle } from "styled-components";


export const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button{
  padding: 13px 133px;
  gap: 10px;
  position: absolute;
  width: 365px;
  height: 51px;
  background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
  border-radius: 27px;
  font-family: 'Noto Sans';
  color: #FFFFFF;  
  }

  button:hover{
    outline: dotted red;
  }

  .h1{
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  color: #373737;
  line-height: 43px;
}

.h2{
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 33px;
  color: #373737;
}

//buttons
.h3{
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
}

.h4{
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #323941;
  opacity: 0.8;
}

.h5{
  font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 400;
font-size: 12px;
color: #6F6F6F;
}

.p{
  font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 300;
font-size: 18px;
color: #000000;
}
`;
