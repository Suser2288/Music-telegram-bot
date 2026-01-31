let tg = window.Telegram.WebApp;
tg.expand();
tg.ready();

function sendAction(action) {
    tg.sendData(action);
    tg.close();
}
