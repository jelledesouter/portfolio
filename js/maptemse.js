
let map1 = L.map('map1').setView([51.124776659906296, 4.214457690584709], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map1);


let apMarker = L.marker([51.124776659906296, 4.214457690584709]).addTo(map1);
