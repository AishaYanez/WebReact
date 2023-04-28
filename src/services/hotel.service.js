const hotels = [
    {
        id: 1,
        name:"Hotel Mareas",
        url: "mareas.jpg",
        position:"nose"
    },{
        id: 2,
        name: "Villa Destino",
        url: "ruralVillage.jpg",
        position:"nose"
    },
    {
        id: 3,
        name: "Villa Malui",
        url: "hawai.jpg",
        position:"nose"
    },
    {
        id: 4,
        name: "Resort Luxury",
        url: "resort.jpg",
        position:"nose"
    }
];

const getHotels = () => {
    return hotels;
}

export default {
    getHotels
};