let buttons = document.querySelectorAll('button')
let string = ''

Array.from(buttons).forEach((button)=> {
    button.addEventListener('click',(e)=> {
        console.log(e.target.innerHTML)
        if(e.target.innerHTML == "="){
            string = eval(string)
            document.querySelector('input').value = string
        }

        else if(e.target.innerHTML == 'clear'){
            string = ''
            document.querySelector('input').value = 0
        }

        else if(e.target.innerHTML == "del"){
            string = string.replace(string.slice(-1),"")
            document.querySelector('input').value = string
        }
        
        else{
        
        string = string + e.target.innerHTML
        document.querySelector('input').value = string
        }
    })

    
})

// let fd = document.querySelector('input').value=0
// console.log(fd)