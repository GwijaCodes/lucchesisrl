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
            width: 90%;
            margin: auto;
        }
        
        .navbar{
            position: fixed;
            width: 100%;
            height: 60px;
            background: #268A42;
            color: #fff;
            z-index: 100;
            display: flex;
            justify-content: space-between;
            align-items: center;
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
            order: 2;
        }
        
        .logo{
            display: flex;
            align-items: center;
            -webkit-align-items: center;
            gap: 6px;
            order: 1;
            font-size: 14px;
            text-shadow: 0px 4px 9.3px rgba(0, 0, 0, 0.25);
            cursor: pointer;
            font-family: 'Cocogoose';
            font-weight: 400;
        }

        
        .menu-items li{
            list-style: none;
            padding: 10px;
            width: 80px;
            height: 20px;
            border-radius: 2px;
            margin: 0 10px;
            transition: all .2s;
            cursor: pointer;
            display: grid;
            place-content: center;
            color: #1C6633;
            font-family: 'Poppins';
            font-size: 14px;
        }
        
        .navbar a{
            text-decoration: none;
            color: inherit;
        }
        
        .navbar li:hover{
            text-shadow: 0px 0px 4px #E8D000;
            color: #fff;
        }
    
        
        @media (max-width: 768px){
            .menu-items li{
                background: transparent;
                box-shadow: none;
            }


            .menu-items li:hover{
                box-shadow: none;
            }

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
                background: rgba(255, 242, 119, 0.51);
                backdrop-filter: blur(1px);
                box-shadow: 0px 4px 9.3px 2px rgba(0, 0, 0, 0.25);
                padding: 4px;
                display: flex;
                max-width: 100vw;
                transition: transform 0.5s ease-in-out;
                transform: translateY(-300px);
            }
        
            .navbar .menu-items li{
                font-size: .6rem;
                max-width: 25vw;
                height: 16px;
                white-space: nowrap;
            }
        
            .logo{
                font-size: 10px;
                width: max-content;
                position: absolute;
                top: 35%;
                left: 65%;
                margin: auto 0;
            }

            .logo img{
                width: 16px !important;
            }
        
            .navbar-container input[type="checkbox"]:checked ~ .menu-items{
                transform: translateY(150%);
                justify-content: space-around;

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
                    <li onclick = chisiamoScroller()>CHI SIAMO</li>
                    <li onclick = contattiScroller()>CONTATTI</li>
                </ul>
                <h1 class="logo">
                    <img src="" style="width: 25px"/>
                    <a href="">LUCCHESI S.R.L.</a>
                </h1>
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

    static get observedAttributes(){
        return['brand'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.shadowRoot.querySelector('.logo img').src = this.getAttribute('brand');
    }
}

customElements.define("nav-bar", Navbar)