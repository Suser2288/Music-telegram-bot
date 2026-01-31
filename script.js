const tg = window.Telegram.WebApp;
tg.expand();
lucide.createIcons();

// Функция отправки данных в бот
function sendAction(command, value = "") {
    tg.HapticFeedback.impactOccurred('light');
    tg.sendData(JSON.stringify({action: command, data: value}));
}

function togglePlay() {
    const icon = document.querySelector('#playBtn i');
    const isPlay = icon.getAttribute('data-lucide') === 'play';
    icon.setAttribute('data-lucide', isPlay ? 'pause' : 'play');
    lucide.createIcons();
    sendAction(isPlay ? 'play' : 'pause');
}

// Заполнение плейлиста
const tracks = [
    {t: "Heavyweight", a: "Infected Mushroom"},
    {t: "Pa' Que La Pases Bien", a: "Arcángel"}
];

const container = document.getElementById('playlist');
tracks.forEach(track => {
    const div = document.createElement('div');
    div.className = 'track-row';
    div.style.marginBottom = "15px";
    div.innerHTML = `
        <div style="width:40px; height:40px; background:#333; border-radius:8px;"></div>
        <div class="track-info">
            <h2>${track.t}</h2>
            <p>${track.a}</p>
        </div>
    `;
    div.onclick = () => {
        document.getElementById('current-title').innerText = track.t;
        document.getElementById('current-artist').innerText = track.a;
        sendAction('play_track', track.t);
    };
    container.appendChild(div);
});
