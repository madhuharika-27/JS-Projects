$.ajax({

    type : 'get',
    url : 'https://api.covid19api.com/summary',
    success : function(response)
    {
        console.log(response.Countries)
        for(var i=0 ; i<response.Countries.length ; i++)
        {
            console.log(response.Countries[i].Country)
        }
    },
    error : function(error)
    {
        console.log(error)
    }


})