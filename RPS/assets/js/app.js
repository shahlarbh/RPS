let rock = document.querySelector('#rock')
let paper = document.querySelector('#paper')
let scissors = document.querySelector('#scissors')

let user1 = document.querySelector('#user1')
let user2 = document.querySelector('#user2')

let rps = ['Rock', 'Paper', 'Scissors']
let result = document.querySelector('#result')

let newgame = document.querySelector('#newgame')
let images = document.querySelectorAll('.image')
let button = document.querySelector('#button')

let user1_count = 0
let user2_count = 0

rock.onclick = () => {
    let random = Math.floor(Math.random() * rps.length)
    let url1 = rock.getAttribute('src')
    user1.src = url1
    
    if(rps[random] === 'Rock') {
        console.log('Draw')
        let url2 = rock.getAttribute('src')
        user2.src = url2
    }

    else if(rps[random] === 'Paper') {
        console.log('You Lost')
        let url2 = paper.getAttribute('src')
        user2.src = url2
        user2_count++
    }

    else {
        console.log('Congratulations, You Won')
        let url2 = scissors.getAttribute('src')
        user2.src = url2
        user1_count++
    }

    result.innerHTML = `${user1_count}:${user2_count}`

    if(user1_count === 10 || user2_count === 10) {
        if(user1_count === 10) {
            result.innerHTML = 'Congratulations, You Won'
        }

        else{
            result.innerHTML = 'You Lost'
        }

        for(let item of images) {

            item.onclick = e => e.preventDefault()
        }

        newgame.style.display = 'block'

        button.onclick = () => location.reload()
    }
}

paper.onclick = () => {
    let random = Math.floor(Math.random() * rps.length)
    let url1 = paper.getAttribute('src')
    user1.src = url1

    if(rps[random] === 'Rock') {
        console.log('Congratulations, You Won')
        let url2 = rock.getAttribute('src')
        user2.src = url2
        user1_count++
    }

    else if(rps[random] === 'Paper') {
        console.log('Draw')
        let url2 = paper.getAttribute('src')
        user2.src = url2
    }

    else {
        console.log('You Lost')
        let url2 = scissors.getAttribute('src')
        user2.src = url2
        user2_count++
    }

    result.innerHTML = `${user1_count}:${user2_count}`

    if(user1_count === 10 || user2_count === 10) {
        if(user1_count === 10) {
            result.innerHTML = 'Congratulations, You Won'
        }

        else{
            result.innerHTML = 'You Lost'
        }

        for(let item of images) {

            item.onclick = e => e.preventDefault()
        }

        newgame.style.display = 'block'

        button.onclick = () => location.reload()
    }
}

scissors.onclick = () => {
    let random = Math.floor(Math.random() * rps.length)
    let url1 = scissors.getAttribute('src')
    user1.src = url1

    if(rps[random] === 'Rock') {
        console.log('You Lost')
        let url2 = rock.getAttribute('src')
        user2.src = url2
        user2_count++
    }

    else if(rps[random] === 'Paper') {
        console.log('Congratulations, You Won')
        let url2 = paper.getAttribute('src')
        user2.src = url2
        user1_count++
    }

    else {
        console.log('Draw')
        let url2 = scissors.getAttribute('src')
        user2.src = url2
    }

    result.innerHTML = `${user1_count}:${user2_count}`

    if(user1_count === 10 || user2_count === 10) {
        if(user1_count === 10) {
            result.innerHTML = 'Congratulations, You Won'
        }

        else{
            result.innerHTML = 'You Lost'
        }

        for(let item of images) {

            item.onclick = e => e.preventDefault()
        }

        newgame.style.display = 'block'

        button.onclick = () => location.reload()
    }
}