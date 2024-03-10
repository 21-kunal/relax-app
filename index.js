const container = document.querySelector('.container')
const text = document.querySelector('#text')

const totalTime = 10000
const breathTime = (totalTime / 5) * 2
const hold = totalTime / 5

const animation = () => {

    text.innerHTML = 'Breath In!'
    container.className = 'container grow'

    setTimeout(() => {

        text.innerHTML = 'Hold'

        setTimeout(() => {
            
            text.innerHTML = 'Breath Out!'
            container.className = 'container shrink'

        }, hold);

    }, breathTime);
}

animation()

setInterval(animation, totalTime);