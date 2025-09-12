const mottos = [
    "工欲善其事，必先利其器。",
    "己所不欲，勿施于人。",
    "不积跬步，无以至千里；不积小流，无以成江海。",
    "世上只有一种英雄主义，那就是在认清生活的本质后依旧热爱生活。",
    "我并没有失败，只是发现了一万种行不通的方法。",
    "不是因为事情难我们不敢做，而是因为我们不敢做事情才难。",
]

function selectRandomMotto() {
    const n = mottos.length
    const index = Math.floor(Math.random() * n)
    return mottos[index]
}


const mottoElem = document.getElementById("HEADER_PARA");
mottoElem.textContent = selectRandomMotto();


const link = document.getElementById("playmusic")
const ark = document.getElementById("ark")
link.addEventListener("click", 
    function(event) {
        event.preventDefault();
        ark.play();
})

document.querySelectorAll('#HEADER_PARA').forEach(el => {
const chars = el.textContent.split('');
el.textContent = '';
chars.forEach((ch, i) => {
    const span = document.createElement('span');
    span.textContent = ch;
    span.style.animationDelay = (i * 0.05) + 's';
    el.appendChild(span);
    });
});

const container = document.querySelector('.img_container');

btn.addEventListener('click', () => {
    arrow.classList.toggle('rotate');
    container.classList.toggle('show');
});