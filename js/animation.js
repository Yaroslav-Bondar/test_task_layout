let widgetIconWallet = document.querySelector('.widget__icon-wallet')
let widgetIconPlus = document.querySelector('.widget__icon-plus ')
let widgetDisplay = document.querySelector('.widget__display')


/* when hover the mouse over the .widget__display */
widgetDisplay.addEventListener('mouseenter', (e)=> {
    widgetIconPlus.classList.add('widget__icon-plus_translate-forward')
    widgetIconWallet.classList.add('widget__icon-wallet_translate-forward')
})
/* when the mouse leaves the .widget__display area */
widgetDisplay.addEventListener('mouseleave', (e)=> {
            widgetIconPlus.classList.remove('widget__icon-plus_translate-forward')
            widgetIconWallet.classList.remove('widget__icon-wallet_translate-forward')
            widgetIconPlus.classList.add('widget__icon-plus_translate-back')
            widgetIconWallet.classList.add('widget__icon-wallet_translate-back')
})
// clear classes before animation
widgetIconPlus.addEventListener('animationend', (e)=> {
    if(e.type === 'animationend' && e.animationName === 'translatePlusBack') {
        widgetIconPlus.classList.remove('widget__icon-plus_translate-back')
        widgetIconWallet.classList.remove('widget__icon-wallet_translate-back')
    }
})