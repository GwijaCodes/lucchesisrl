const navbarTemplate = document.createElement('template')
navbarTemplate.innerHTML = `
    <style>
        *{
            margin: 0;
            padding: 0;
        }
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
            height: 60px;
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
                background: #fff;
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
                background: transparent;
                backdrop-filter: blur(1px);
                box-shadow: 0px 4px 9.3px 2px rgba(0, 0, 0, 0.25);
                border-radius: 4px;
                padding: 4px;
                display: flex;
                max-width: 95vw;
                margin: 0 auto;
                transition: transform 0.5s ease-in-out;
                transform: translateY(-300px);
            }
        
            .navbar .menu-items li{
                font-size: .6rem;
                max-width: 25vw;
                height: 16px;
            }
        
            .logo{
                font-size: 14px;
                width: max-content;
                position: absolute;
                top: 40%;
                left: 70%;
                margin: auto 0;
            }
        
            .navbar-container input[type="checkbox"]:checked ~ .menu-items{
                transform: translateY(150%);
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
                    <li onclick = storiaScroller()>STORIA</li>
                    <li onclick = prodottiScroller()>PRODOTTI</li>
                    <li><a href="#">CHI SIAMO</a></li>
                    <li onclick = contattiScroller()>CONTATTI</li>
                </ul>
                <h1 class="logo"><a href="">LUCCHESI S.R.L.</a></h1>
            </div>
        </nav>
`


//navbar
class Navbar extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({ mode: "open" });
        shadow.append(navbarTemplate.content.cloneNode(true));
    }
}

customElements.define("nav-bar", Navbar)