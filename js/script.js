const songs = [
    "Albi_valhan.mp3",
    "xzeev4gz560laspyac.m4a",
    "Eminem_-_Lose_Yourself___Emimem.mp3",
    "Eminem_-_Venom.mp3",
    "Fight_music.m4a",
    "I_am_not_Afraid___Eminem.mp3",
    "From Ashes To New - Monster in Me (Official Video).mp3",
    "From_Ashes_To_New_-_Armageddon.m4a",
    "From_Ashes_To_New_-_Heartache_(Official_Music_Video).mp3",
    "From_Ashes_To_New_-_Stay_This_Way.mp3",
    "From_Ashes_To_New_-_Util_We_Break.m4a",
    "Hail_the_Crown_205_Live_WWE,_CFO$.m4a"
]

const artist = [
    "Islamskee heart",
    "Maher Zain",
    "Eminem",
    "Eminem",
    "Eminem",
    "Eminem",
    "From Ashes To New",
    "From Ashes To New",
    "From Ashes To New",
    "From Ashes To New",
    "From Ashes To New",
    "From Ashes To New",
]

const musicName = [
    "Albi Valhan",
    "Rahmatun Lil'Alameen",
    "Lose Yourself",
    "Venom",
    "Fight Music",
    "I'm not afraid",
    "Monster in me",
    "Armageddon",
    "Heartache",
    "Stay this way",
    "Until we break",
    "Hail The Crown"
]

const album = [
    "Allah.webp",
    "Allah.webp",
    "eminem.webp",
    "eminem.webp",
    "eminem.webp",
    "eminem.webp",
    "from-ashes-to-new.jpg",
    "from-ashes-to-new.jpg",
    "from-ashes-to-new.jpg",
    "from-ashes-to-new.jpg",
    "from-ashes-to-new.jpg",
    "from-ashes-to-new.jpg"
]

const songName = document.querySelector("h3")

const artistName = document.querySelector("p")

const audio = document.querySelector("audio")

const player = document.querySelector("#player")

const next = document.querySelector("#next")

const prev = document.querySelector('#prev')

const circle = document.querySelector(".circle")

let count1 = 0

let count2 = 0

let count3 = 0

let count4 = 0

audio.src = `./audio/${songs[0]}`

songName.textContent = musicName[0]

artistName.textContent = artist[0]

player.addEventListener("click", () => {
    if (player.className == "fa-solid fa-play") {
        audio.play()

        player.classList.toggle("fa-pause")

        player.classList.toggle("fa-play")

        circle.style.animationPlayState = 'running'

    } else if (player.className == 'fa-solid fa-pause') {
        audio.pause()

        player.classList.toggle("fa-pause")

        player.classList.toggle("fa-play")

        circle.style.animationPlayState = 'paused'
    }
})

next.addEventListener("click", () => {
    player.classList.add("fa-pause")

    player.classList.remove("fa-play")

    audio.src = `./audio/${songs[++count1]}`

    audio.play()

    songName.textContent = musicName[++count2]

    circle.style.animationPlayState = "running"

    circle.style.background = `url(./image/${album[++count3]})`

    circle.style.backgroundSize = "cover"

    artistName.textContent = artist[++count4]

    if (count1 > songs.length - 1 || count2 > musicName.length - 1 || count3 > album.length - 1 || count4 > artist.length - 1) {
        count1 = 0
        count2 = 0
        count3 = 0
        count4 = 0
    }

})

prev.addEventListener("click", () => {
    player.classList.add("fa-pause")

    player.classList.remove("fa-play")

    audio.src = `./audio/${songs[--count1]}`

    audio.play()

    songName.textContent = musicName[--count2]

    circle.style.animationPlayState = "running"

    circle.style.background = `url(./image/${album[--count3]})`

    circle.style.backgroundSize = "cover"

    artistName.textContent = artist[--count4]


    if (count1 < 0 || count2 < 0 || count3 < 0 || count4 < 0) {
        count1 = songs.length - 1

        count2 = musicName.length - 1

        count3 = album.length - 1

        count4 = artist.length - 1
    }

})