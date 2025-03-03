const textAuthor = document.querySelector('#namaAuthor');
textAuthor.innerHTML = textAuthor.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({
    loop: false
})
.add({
    targets: '#namaAuthor .letter',
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1450,
    delay: (el, i) => 70*i
});


const textSubAuthor = document.querySelector('#subAuthor');
textSubAuthor.innerHTML = textSubAuthor.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({
    loop: false
}).add({
    targets: '#subAuthor .letter',
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 700,
    delay: (el, i) => 150 * (i+1)
});


const textDeskripsi = document.querySelector('#deskripsi');
textDeskripsi.innerHTML = textDeskripsi.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({
    loop: false
}).add({
    targets: '#deskripsi .letter',
    color: ['#000', '#0096FF', "#fff"],
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 800,
    delay: (el, i) => 15 * (i+1)
});


const textGeneralInfo = document.querySelector('#generalInfo');
textGeneralInfo.innerHTML = textGeneralInfo.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({
    loop: true
}).add({
    targets: '#generalInfo .letter',
    opacity: [0, 1],
    color: ['#00FFDA', '#0096FF', "#fff"],
    easing: "easeInOutQuad",
    duration: 800,
    delay: (el, i) => 5 * (i+1),
}).add({
    targets: '#generalInfo',
    opacity: 0,
    duration: 400,
    easing: 'easeOutExpo',
    delay: 2000
});


anime({
    targets: "#next",
    opacity: [0, 1],
    easing: 'easeInOutQuad',
    duration: 800
});

anime.timeline({
    loop: true
}).add({
    targets: "#animateLine",
    width: '100%',
    easing: 'easeInOutQuad',
    duration: 2500
}).add({
    targets: "#animateLine",
    width: '0%',
    easing: 'easeOutExpo',
    duration: 2500,
})