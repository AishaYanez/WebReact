const imagesHome = [
    {
        id: 0,
        name:"Vuelos",
        url: "flights.jpg",
        page: "/Reserve"
    },{
        id: 1,
        name: "Destino",
        url: "landscapes.jpg",
        page: "/Explore"
    },
];

const getImgs = () => {
    return imagesHome;
}

export default {
    getImgs
};