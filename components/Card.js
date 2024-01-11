const cardTemplate = document.createElement('template')
cardTemplate.innerHTML = `
    <style>
    *{
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        padding: 0;
        margin: 0;
        }

    .flip-card{
        width: 80%;
        height: fit-content;
        margin: auto;
        perspective: 3000px;
        cursor: pointer;
        color: #1C6633;
    }
    
    .card-inner{
        position: relative;
        width: 100%;
        height: 100%;
        transition: transform .8s;
        transform-style: preserve-3d;
    }

    .card-front-inner, .card-back{
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        border-radius: 4px;
    }
    
    .card-front-inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        border-radius: 4px;
        background: rgba(40, 40, 40, 0.26);
        box-shadow: 0px 9px 9.3px 7px rgba(0, 0, 0, 0.25);
        transition: all .2s;    
        transform: rotateX(0deg); 
    }
    
    .card-front-inner .info{
        position: relative;
        width: 100%;
        padding: 1.5em;
        padding-bottom: 2.2em;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
    }

    .card-front-inner .info p{
        font-size: 16px;
    }
    
    .card-front-inner h4{
        font-size: 1.5em;
        line-height: 31px;
        font-weight: bold;
        font-family: 'caveat';
        margin-bottom: 4%;
    }
    
    .card-front-inner p{
        font-size: 12px;
        line-height: 1.5em;
    }
    
    .product-pic{
        max-width: 100%;
        max-height: 100%;
        padding: 1em;
    }
    
    .product-pic img{
        max-width: 100%;
        margin: auto;
    }
    
    .flip-card:hover .card-front-inner{
        box-shadow: 0px 5px 9.3px 7px rgba(0, 0, 0, 0.41);
    }

    .card-back{
        background: rgba(79, 79, 79, 0.36);
        box-shadow: 0px 5px 9.3px 7px rgba(0, 0, 0, 0.41);
    }
    
    .card-back{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;    
        transform: rotateY(180deg);
    }

    .card-back-inner{
        width: 100%;
        height: 100%;
        display: grid;
        place-items: center;
        padding: 10% 0;
    }

    .card-back-inner a{
        width: 100%;
        height: 100%;
        display: grid;
        place-items: center;
    }
    
    .card-back-inner img{
        max-width: 30%;
    }

    @media(max-width: 768px){
        .info h4{
            font-size: 20px;
        }

        .info p{
            font-size: 12px;
        }

        .flip-card{
            width: 100%;
        }
    }
    </style>

    <div class="flip-card">
        <div class="card-inner">
            <div class="card-inner">
                <div class="card-back">
                    <div class="card-back-inner">
                        <a href="../imgs/succo-arance.pdf" download="">
                            <img />
                        </a>
                        <h3>Scheda Tecnica</h3>
                    </div>
                </div>
                <div class="card-front-inner">
                    <section class="product-pic">
                          <img />
                    </section>
                    <section class="info">
                        <h4><slot name='product-name'>Nome prodotto</slot></h4>
                        <p><slot name='product-description'></slot></p>
                    </section>
                </div>
            </div>
    </div>
`

class Card extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({ mode: "open" });
        shadow.append(cardTemplate.content.cloneNode(true));
    }

    static get observedAttributes(){
        return['prodotto'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.shadowRoot.querySelector('.product-pic img').src = this.getAttribute('prodotto');
    }

    flipMe = () => {
        this.shadowRoot.querySelector('.card-inner').style.transform = 'rotateY(180deg)';
        this.addEventListener('mouseleave', () => {
            this.shadowRoot.querySelector('.card-inner').style.transform = 'rotateY(360deg)';
        })
    }

    connectedCallback(){
        this.shadowRoot.querySelector('.flip-card').addEventListener('click', this.flipMe)
    }
}

customElements.define("my-card", Card)