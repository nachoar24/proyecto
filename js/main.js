// Inicialización del mapa
function initMap() {
    const pulperiaSanBosco = { lat: 10.09811, lng: -84.37619 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 18,
        center: pulperiaSanBosco,
    });
    const marker = new google.maps.Marker({
        position: pulperiaSanBosco,
        map: map,
        title: "Pulpería San Bosco",
    });
}

// Evento para cargar el mapa
document.addEventListener('DOMContentLoaded', (event) => {
    initMap();
});

// Otros scripts personalizados
