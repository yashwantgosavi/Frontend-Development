var btn = document.getElementById('btn');
var popup = document.getElementById('popup');



btn.addEventListener('click', networkTesting);
function networkTesting() {
    let network = navigator.onLine;
    alert(network);
}