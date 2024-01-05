const navTemplate = document.createElement('template')
navTemplate.innerHTML = `
    <style>    
    .navbar input[type="checkbox"],
    .navbar .hamburger-lines{
        display: none;
    }
    
    .container{
        max-width: 1200px;
        width: 90%;
        margin: auto;
    }
    
    .navbar{
        position: fixed;
        width: 100%;
        background: linear-gradient(180deg, #268A42 36.91%, #1D6533 100%);
        color: #fff;
        z-index: 100;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: 'Caveat';
        font-weight: bold;
    }
    
    .navbar-container{
        display: flex;
        justify-content: space-between;
        height: 64px;
        align-items: center;
    }
    
    .menu-items{
        order: 2;
        display: flex;
    }
    
    .logo{
        order: 1;
        font-size: 20px;
    }
    
    .logo{
        text-shadow: 0px 4px 9.3px rgba(0, 0, 0, 0.25);
        cursor: pointer;
    }
    
    .menu-items li{
        list-style: none;
        padding: 10px;
        width: 80px;
        height: 20px;
        border-radius: 4px;
        background: linear-gradient(180deg, #64B245 42.41%, #159A3F 82.91%);
        box-shadow: 0px 4px 9.3px 2px rgba(0, 0, 0, 0.25);
        margin: 0 10px;
        transition: all .2s;
        cursor: pointer;
        display: grid;
        place-content: center;
        color: #1C6633;
    }
    
    .navbar a{
        text-decoration: none;
        color: inherit;
    }
    
    .navbar li:hover{
        box-shadow: 0px 4px 9.3px 3px rgba(0, 0, 0, 0.46);
    }
    
    .navbar li:active{
        box-shadow: none;
        color: #fff;
        transform: translateY(1px);
    }
    
    @media (max-width: 768px){
    
        .navbar-container input[type="checkbox"],
        .navbar-container .hamburger-lines{
            display: block;
        }
    
        .navbar-container{
            display: block;
            position: relative;
            height: 64px;
        }
    
        .navbar-container input[type="checkbox"]{
            position: absolute;
            display: block;
            height: 32px;
            width: 30px;
            top: 20px;
            left: 20px;
            z-index: 5;
            opacity: 0;
            cursor: pointer;
        }
    
        .navbar-container .hamburger-lines{
            display: block;
            height: 28px;
            width: 35px;
            position: absolute;
            top: 20px;
            left: 20px;
            z-index: 2;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
    
        .navbar-container .hamburger-lines .line{
            display: block;
            height: 4px;
            width: 100%;
            border-radius: 10px;
            background: #64B245;
        }
        
        .navbar-container .hamburger-lines .line1{
            transform-origin: 0% 0%;
            transition: transform 0.3s ease-in-out;
        }
    
        .navbar-container .hamburger-lines .line2{
            transition: transform 0.2s ease-in-out;
        }
    
        .navbar-container .hamburger-lines .line3{
            transform-origin: 0% 100%;
            transition: transform 0.3s ease-in-out;
        }
    
        .navbar .menu-items{
            padding-top: 100px;
            background: #ffffff76;
            height: 100vh;
            max-width: 300px;
            transform: translate(-150%);
            display: flex;
            flex-direction: column;
            margin-left: -40px;
            padding-left: 40px;
            transition: transform 0.5s ease-in-out;
            box-shadow:  5px 0px 10px 0px #aaa;
            overflow: scroll;
        }
    
        .navbar .menu-items li{
            margin-bottom: 1.8rem;
            font-size: 1.1rem;
            font-weight: 500;
        }
    
        .logo{
            font-size: 10px;
            width: max-content;
            position: absolute;
            top: 40%;
            left: 75%;
            margin: auto 0;

        }
    
        .navbar-container input[type="checkbox"]:checked ~ .menu-items{
            transform: translateX(0);
        }
    
        .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line1{
            transform: rotate(45deg);
        }
    
        .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line2{
            transform: scaleY(0);
        }
    
        .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line3{
            transform: rotate(-45deg);
        }
    
    }
    
    @media (max-width: 500px){
        .navbar-container input[type="checkbox"]:checked ~ .logo{
            display: none;
        }
    }
    </style>
    <nav class="navbar">
        <div class="navbar-container container">
            <input type="checkbox" name="" id="">
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <ul class="menu-items">
                <li><a href="#"><slot id="storiaBtn" name="storiaBtn">STORIA</slot></a></li>
                <li><a href="#">PRODOTTI</a></li>
                <li><a href="#">CHI SIAMO</a></li>
                <li><a href="#">CONTATTI</a></li>
            </ul>
            <h1 class="logo"><a href="">LUCCHESI S.R.L.</a></h1>
        </div>
    </nav>
`



class Navbar extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({ mode: "open" })
        shadow.append(navTemplate.content.cloneNode(true))
        this.checkbox = shadow.querySelector('input')

    }
    connectedCallback(){
        

    }
}

window.customElements.define("nav-bar", Navbar)