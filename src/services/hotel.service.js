const hotels = [
    {
        id: 1,
        name: "Hotel Mareas",
        url: "mareas.jpg",
        latitude: 27.9875508,
        longitude: -15.3755913,
    }, {
        id: 2,
        name: "Villa Destino",
        url: "ruralVillage.jpg",
        latitude: 27.9875508,
        longitude: -15.3755913,
    },
    {
        id: 3,
        name: "Villa Malui",
        url: "hawai.jpg",
        latitude: 27.9875508,
        longitude: -15.3755913,
    },
    {
        id: 4,
        name: "Resort Luxury",
        url: "resort.jpg",
        latitude: 27.9875508,
        longitude: -15.3755913,
    }
];

const getHotels = () => {
    return hotels;
}

export default {
    getHotels
};