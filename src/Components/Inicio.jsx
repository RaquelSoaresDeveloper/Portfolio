import React from "react";
import styled from "styled-components";
import Git from "../assets/Git.png";
import Linkedin from "../assets/Linkedin2.png";
import Instagram from "../assets/Instagram2.png";
import Imagerl from "../assets/Imagerl.png"

export const Inicio = () => {
  return (
    <Container>
      <Texts>
        <h4>
          Olá, seja Bem-vindo meu nome é
        </h4>
        <h1>Raquel Soares</h1>
        <h3>Desenvolvedora Front-end</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis,
          distinctio.
        </p>
        <button>Currículo</button>
        <Social>
          <p>Entre em contato</p>
          <div className="social">
           <span><a href="" target="_blank">
              <img src={Git} alt="github" />
            </a>
            </span> 
            <span> 
            <a href="" target="_blank">
              <img src={Linkedin} alt="linkedin" />
            </a>
            </span> 
            <span> 
            <a href="" target="_blank">
              <img src={Instagram} alt="instagram" />
            </a>
            </span> 
          </div>
        </Social>
      </Texts>
      <Perfil>
        <img src={Imagerl} alt="selfeRaquel" />
      </Perfil>
    </Container>
  );
};

export default Inicio;

const Container = styled.div`
     display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
   flex: 1;
   h4{
    padding: 1rem 0;
    font-weight: 500;
   }
   h1{
    font-size: 2rem;
    font-family: 'Fira Sans', sans-serif;
    letter-spacing: 2px;
   }
   h3{
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
   }
   p{
    font-weight: 300;
   }

   button{
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #00ee9f;
    border: none;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #00ee9f);
    &:hover{
        filter: drop-shadow(0px 10px 10px #00ee9f);
    }
   }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  p{
    font-size: 1.2rem;
    @media (max-width: 690px) {
      font-size: 0.6rem;
    }

}

.social{
    display: flex;
    align-items: center;
    gap: 1rem;
    span{
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);;
      background-color: #00ee9f;
      position: relative;
      transition: transform 400ms ease-in-out;
      &:hover {
        transform: rotate(360deg);
      }
    }
      
    }
    a {
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    img{
        width: 8.5vh;
        height: 8.5vh;
    }
`;

const Perfil = styled.div`
  img {
    width: 27rem;
    height: 26rem;
    filter: drop-shadow(0px 10px 10px #32ffbb);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 10rem;
    }

    @media (max-width: 660px) {
      width: 20rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
}
    
    &:hover img {
    transform: translateY(-10px);
  }`

