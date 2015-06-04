Parse.Cloud.define("getItems", function(request, response) {
    
    var search = request.params.terms.toLowerCase();
    var itemsList = [];
    var itemsResults = [];
   
    var Items = Parse.Object.extend("Items");
    var query = new Parse.Query(Items);
    query.find({
        success: function(results) {
            for (var i = 0; i < results.length; i++) { 
                var object = results[i];
                itemsList.push({
                    id: object.id,
                    name: object.get("itemName").toLowerCase(),
                    description: object.get("itemDescription").toLowerCase()
                });
            }
      
            for(var k = 0; k < search.length; k++) {  
      
                for (var j = 0; j < itemsList.length; j++) {

                    var nameSearch = itemsList[j].name.search(search);
                    var descriptionSearch = itemsList[j].description.search(search);
                    if (nameSearch != '-1' || descriptionSearch != '-1') {
                            itemsResults.push(
                                itemsList[j].id
                            )
                    }

                }  
            }
            
            
            var unique = function(origArr) {
            var newArr = [],
                origLen = origArr.length,
                found, x, y;

            for (x = 0; x < origLen; x++) {
                found = undefined;
                for (y = 0; y < newArr.length; y++) {
                    if (origArr[x] === newArr[y]) {
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    newArr.push(origArr[x]);
                }
            }
            return newArr;
        }

        var arr = itemsResults;

        var arrUnique = unique(arr);


                response.success(arrUnique);
                },
                error: function(error) {
                }
    });
  
})

