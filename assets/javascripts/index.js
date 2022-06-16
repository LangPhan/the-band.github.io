
// Show and hide modal
    const buyBtns = document.querySelectorAll('.js-buy-tickets')
    const closeBtn = document.querySelector('.modal-close')
    const modalClass = document.querySelector('.modal')

    for(const buyBtn of buyBtns){
        buyBtn.addEventListener('click', () =>{
        modalClass.classList.add('modal-show')
        })
     }
        closeBtn.addEventListener('click', () =>{
        modalClass.classList.remove('modal-show')
    })

// Show amount money
    const input = document.querySelector('input[type="number"]')
    const status = document.querySelector('.count-fee')
    let amountMoney = 0;
    input.addEventListener('change', () =>{
        const amountTickets = input.value
        const status = document.querySelector('.count-fee')
        amountMoney = amountTickets * 15
        status.innerHTML = 'Amount to pay: ' + amountMoney + '$'
    })

// Show/hide menu mobile
    const menuBtn = document.querySelector('.menu-btn')
    const liTags = document.querySelectorAll('#header-phone #nav li:nth-child(n+3)')
    const collapseBtn = document.querySelector('li.collapseBtn')

    menuBtn.addEventListener('click', () =>{
        for(const liTag of liTags){
            if(liTag.style.display == 'none' || liTag.style.display == ''){
                
                liTag.style.display = 'block'
            }
            else{
                liTag.style.display = 'none'
            }
        }
    })

    collapseBtn.addEventListener('click',() =>{
        for(const liTag of liTags){
            liTag.style.display = 'none'
        }
    })

    