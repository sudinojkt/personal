var data = {
    resource_id: '139a3035-e624-4f56-b63f-89ae28d4ae4c', // the resource id
    limit: 5, // get 5 results
    q: 'jones' // query for 'jones'
  };

  $.ajax({
    url: 'https://data.gov.sg/api/action/datastore_search',
    data: data,
    dataType: 'jsonp',
    success: function(data) {
        alert('Total results found: ' + data.result.total)
    }
});

async function search(data) {
    let  URL = url;
    let response = await axios.get(URL, {
        
        console.log(data.result.total)
    }); 
    return response.data.result;  
}

    