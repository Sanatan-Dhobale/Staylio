const map = L.map('map').setView(
    [window.coordinates[1], window.coordinates[0]],
    10
);

L.tileLayer(
    `https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=${window.mapToken}`,
    {
        attribution:
            '&copy; <a href="https://www.maptiler.com/">MapTiler</a> © OpenStreetMap contributors',
    }
).addTo(map);

L.marker([
    window.coordinates[1],
    window.coordinates[0]
])
.addTo(map)
.bindPopup("Exact location")
.openPopup();