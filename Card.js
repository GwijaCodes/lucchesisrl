const cardTemplate = document.createElement('template')
cardTemplate.innerHTML = `
    <style>
    .wrapper{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
   }
    .card{
       max-width: 300px;
        min-height: 250px;
        background: #e58989;
        padding: 30px;
         border-radius: 3px;
        box-sizing: border-box;
        color: #FFF;
        margin:20px;
         box-shadow: rgb(50 50 93 / 25%) 0px 30px 60px -12px, rgb(0 0 0 / 30%) 0px 18px 36px -18px;
   }
    .card-title{
        margin-top: 0;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 1.2px;
   }
    .card-content{
        font-size: 14px;
        letter-spacing: 0.5px;
        line-height: 1.5;
   }
    .card-btn{
        all: unset;
        display: block;
        margin-left: auto;
        border: 2px solid #FFF;
        padding: 10px 15px;
        border-radius: 25px;
        font-size: 10px;
        font-weight: 600;
        transition: all 0.5s;
        cursor: pointer;
        letter-spacing: 1.2px;
   }
    .card-btn:hover{
       color:#02b875;
       background: #FFF;
   }   
    </style>
    <div class="wrapper">
    <div class="card">
        <h3 class="card-title">
            <slot name="cardTitle">Card Title</slot>
        </h3>
            <p class="card-content">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
            <button class="card-btn">READ MORE</button>
        </div>
        </div>
`

class Card extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({ mode: "open" })
        shadow.append(cardTemplate.content.cloneNode(true))
        this.checkbox = shadow.querySelector('input')
    }
}

window.customElements.define("sm-card", Card)