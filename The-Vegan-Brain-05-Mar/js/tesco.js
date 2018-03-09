function getSearch(){
const searchTerm = "vegan " + document.getElementById("search").value;
const offset = 0;
const limit = 100;

$(function() {
        
        $.ajax({
            url:`https://dev.tescolabs.com/grocery/products/?query=${searchTerm}&offset=${offset}&limit=${limit}`,
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","d4a7b004a07b49e4b341bfe452cf13c7"); //We added the key supplied from Tesco.
            },
            type: "GET",
            // Request body
            data: "{body}",  //Not sure if we need to add code here to display on the page
        })
        .done(function(data) {
            alert("success");
            // document.write(resultSpace.innerHTML=(data));
            console.log(data); //view in the console, click on the triangles to see the data structure
            const products = data.uk.ghs.products.results; //this gets the actual list of products and assigns to an array
            products.forEach(function(product){
                console.log(product.name);
            })
        })
        .fail(function() {
            alert("error");
        });
    });

        console.log(searchTerm);
        console.log(`You entered ${searchTerm}`)
 };       
const searchBtn=document.getElementById("searchButton");
searchBtn.addEventListener("click",function(){
    getSearch()});
    
        
//   