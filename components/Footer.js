let year = new Date().getFullYear();
const footerTemplate = document.createElement('template')
footerTemplate.innerHTML = `
    <style>
    .footer{
      position: relative;
      width: 100%;
      height: 40vh;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-around;
      background: linear-gradient(180deg, #268A42 36.91%, #1D6533 100%);
      box-shadow: 0px -6px 15px 2px rgba(0, 0, 0, 0.46);
  }
  
  .footer p{
      font-family: 'Poppins';
      text-align: center;
  }
  
  #lucchesi-footer{
      font-family: 'Caveat';
  }
  
  .socials{
      height: 30px;
  }
  
  .socials img{
      height: 100%;
      margin: 0 10px;
      cursor: pointer;
      transition: transform .2s;
  }
  
  .socials img:hover{
      transform: translateY(-3px) scale(110%);
  }
  
  #template-phone{
      position: relative;
      width: 100%;
      transform: translateY(10px);
  }

  @media(max-width: 768px){
    .footer{
      font-size: 10px;
      flex-direction: column;
      height: 25vh;
      justify-content: space-around;
      padding: 10% 0;
  }

  .socials{
      height: 30px;
  }
}
    </style>
    <footer>
    <div class="footer">
        <div class="socials">
            <a href=""><img src="./imgs/instagram.png" alt="instagram"></a>
            <a href=""><img src="./imgs/facebook.png" alt="facebook"></a>
        </div>
            <p>Copyright  Lucchesi Srl ©2024 - Via G.Marconi 58/60 Acicatena (CT) <br>
            lucchesisrl@virgilio.it - Tel. +39 095 801611  PI 03590470872</p>
            <span id="lucchesi-footer">LUCCHESI S.R.L.</span>
    </div>
   </footer>
`

class Footer extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({ mode: "open" })
        shadow.append(footerTemplate.content.cloneNode(true))
        this.checkbox = shadow.querySelector('input')
    }
}

customElements.define("my-footer", Footer)