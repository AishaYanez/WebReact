import db from "../firebase";
import { ref, get, remove, push, update } from "firebase/database";

const dbRef = ref(db, "/hotels");

const getAllHotels = () => {
    return get(dbRef);
}

const getHotel = (key) => {
    const dbRefHotel = ref(db, `/hotels/${key}`)
    return get(dbRefHotel);
}

const addHotel = (addates) => {
    return get(dbRef).then((snapshot) => {
        const hotels = snapshot.val();
        const lastHotel = hotels[Object.keys(hotels)[Object.keys(hotels).length - 1]];
        const nextId = lastHotel.id + 1;
        return push(dbRef, {
            id: nextId,
            name: addates.name,
            url: addates.url,
            latitude: addates.latitude,
            longitude: addates.longitude
        });
    });
};

const updateHotel = (key, updates) => {
    const dbRefHotel = ref(db, `/hotels/${key}`)
    return update(dbRefHotel, {
        name: updates.name,
        url: updates.url,
        latitude: updates.latitude,
        longitude: updates.longitude
    });
}

const removeHotel = (key) => {
    const dbRefHotel = ref(db, `/hotels/${key}`);
    return remove(dbRefHotel);
};

export default {
    getAllHotels,
    getHotel,
    addHotel,
    updateHotel,
    removeHotel
};