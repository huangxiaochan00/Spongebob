import string from './css.js';

let n = 0;
const player = {
    id: undefined,
    time: 50,
    n: 1,
    ui: {
        demo1: document.querySelector("#demo1"),
        demo2: document.querySelector("#demo2")
    },
    init: () => {
        player.ui.demo1.innerText = string.substr(0, player.n)
        player.ui.demo2.innerHTML = string.substr(0, player.n)
        player.play()
        player.btnBind()
    },
    events: {
        "#btnPause": 'pause',
        "#btnPlay": 'play',
        "#btnFast": "fast",
        "#btnNormal": "normal",
        "#btnSlow": "slow"
    },
    btnBind: () => {
        for (let key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                const value = player.events[key]
                document.querySelector.onclick = player[value]
            }
        }
    },
    run: () => {
        demo1.innerText = string.substr(0, player.n)
        demo2.innerHTML = string.substr(0, player.n)
        player.n += 1;
        demo1.scrollTop = demo1.scrollHeight
        if (player.n === string.length) {
            clearInterval(id)
        }
    },
    play: () => {
        id = setInterval(player.run, player.time)
    },
    pause: () => {
        clearInterval(id)
    },
    fast: () => {
        player.pause()
        player.time = 5
        player.play()
    },
    normal: () => {
        player.pause()
        player.time = 50
        player.play()
    },
    slow: () => {
        player.pause()
        player.time = 200
        player.play()
    }

}

let id = setInterval(player.run, 50)
btnPause.onclick = () => {
    clearInterval(id)
}
btnPlay.onclick = () => {
    clearInterval(id)
    id = setInterval(player.run, 50)
}
btnFast.onclick = () => {
    clearInterval(id)
    id = setInterval(player.run, 10)
}
btnNormal.onclick = () => {
    clearInterval(id)
    id = setInterval(player.run, 50)
}
btnSlow.onclick = () => {
    clearInterval(id)
    id = setInterval(player.run, 200)
}
