document.addEventListener('DOMContentLoaded', getMyLocation)

var ourCoords = {
    latitude: 48.943190463387886,
    longitude: 24.733861440721554
}

let watchId = null
let map = null;
let marker = null;

function getMyLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayLocation, displayError);
        var watchButton = document.getElementById("watch");
        watchButton.onclick = watchLocation;
        var clearWatchButton = document.getElementById("clearWatch")
        clearWatchButton.onclick = clearWatch;
    } else {
        alert("Oops, no geolocation support");
    }
}

function displayLocation(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    let div = document.getElementById('location');
    div.innerHTML = `Ви знаходитесь за координатами: ${latitude}, ${longitude} 
                    (з точністю ${position.coords.accuracy} метрів)`;

    let km = computeDistance(position.coords, ourCoords);
    let distance = document.getElementById('distance');
    distance.innerHTML = `Ви знаходитесь від коледжу на відстані ${km.toFixed(2)} км`;

    // Визначення мапи, якщо її ще немає
    if (!map) {
        map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: latitude, lng: longitude },
            zoom: 15
        });

        // Додавання маркера
        marker = new google.maps.Marker({
            position: { lat: latitude, lng: longitude },
            map: map,
            title: 'Ваше місцезнаходження'
        });
    } else {
        // Оновлення позиції маркера на карті
        marker.setPosition({ lat: latitude, lng: longitude });
        // Центрування мапи на нові координати
        map.panTo({ lat: latitude, lng: longitude });
    }
}

function displayError(error) {
    const errorTypes = {
        0: "Невідома помилка",
        1: "Користувач відмовив у наданні дозволу",
        2: "Інформація про місцезнаходження недоступна",
        3: "Час очікування вичерпався",
    };

    let errorMessage = errorTypes[error.code];
    if (error.code === 0 || error.code === 2) {
        errorMessage = errorMessage + " " + error.message;
    }
    let div = document.getElementById('location');
    div.innerHTML = errorMessage;
}

function computeDistance(startCoords, destCoords) {
    let startLatRads = degreesToRadians(startCoords.latitude)
    let startLongRads = degreesToRadians(startCoords.longitude)
    let destLatRads = degreesToRadians(destCoords.latitude)
    let destLongRads = degreesToRadians(destCoords.longitude)
    let Radius = 6371;

    let distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) +
        Math.cos(startLatRads) * Math.cos(destLatRads) *
        Math.cos(startLongRads - destLongRads)) * Radius;

    return distance;
}

function degreesToRadians(degrees) {
    let radians = (degrees * Math.PI) / 180;
    return radians;
}

function watchLocation() {
    watchId = navigator.geolocation.watchPosition(displayLocation, displayError)
}

function clearWatch() {
    if (watchId) {
        navigator.geolocation.clearWatch(watchId)
        watchId = null;
    }
}
