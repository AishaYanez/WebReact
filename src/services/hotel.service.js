import db from "../firebase";
import { ref, get, remove, push } from "firebase/database";

const dbRef = ref(db, "/hotels");

const getAllHotels = () => {
    return get(dbRef);
}

const getHotel = (key) => {
    const dbRefHotel = ref(db, `/hotels/${key}`)
    return get(dbRefHotel);
}

// const hotels = [
//     {
//         id: 1,
//         name: "Hotel Mareas",
//         url: "mareas.jpg",
//         latitude: 28.0973453,
//         longitude: -15.4727408
//     }, {
//         id: 2,
//         name: "Villa Destino",
//         url: "ruralVillage.jpg",
//         latitude: 27.9875508,
//         longitude: -15.3755913
//     },
//     {
//         id: 3,
//         name: "Villa Malui",
//         url: "hawai.jpg",
//         latitude: 28.1056477,
//         longitude: -15.4523502
//     },
//     {
//         id: 4,
//         name: "Resort Luxury",
//         url: "resort.jpg",
//         latitude: 28.1286132,
//         longitude: -15.5093678
//     }
// ];


export default {
    getAllHotels,
    getHotel
};