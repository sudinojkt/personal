// Base URLs, APIs Keys and Authorization 
const API_BASE_PLACES_URL = "https://api.foursquare.com/v3/places/";
const API_KEY = "fsq3QDBN0pfxk64qwMqNNvXhhDwbZOfIZqUEa4L/YjiNATQ=";
const headers = {
    Accept: 'application/json',
    Authorization: API_KEY,
}

async function search(latLng, search, categories = "") {
    let url = API_BASE_PLACES_URL + "search";
    let response = await axios.get(url, {
        "headers": headers,
        "params": {
            "ll": latLng,
            "query": search,
            "categories": categories,
            "limit": 50,
        }
    });
    return response.data;
}

async function getPhoto(fsq_id) {
    let url = API_BASE_PLACES_URL + fsq_id + "/photos";
    let response = await axios.get(url, {
        'headers': headers
    });
    return response.data;
}