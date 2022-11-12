window.addEventListener("DOMContentLoaded", async function () {

const API_BASE_URL="https://api.foursquare.com/v3/places/";
const API_KEY = "fsq3QDBN0pfxk64qwMqNNvXhhDwbZOfIZqUEa4L/YjiNATQ=";

const headers = {
    "Accept": "application/json",  
    "Authorization": API_KEY }

async function search(search, categories="") {
   
    let url = API_BASE_URL + "search";
    let response = await axios.get(url,{
        "headers": headers,
        "params": {
            "query": search,
            "categories": categories,  }
    });
    return response.data;  }

async function getPhoto(fsq_id) {
    let response = await axios.get(API_BASE_URL + `${fsq_id}/photos`,{
        'headers': headers
    });
    return response.data;  }

});