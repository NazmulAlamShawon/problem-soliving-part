function paperRequirements( totalCopy,perSec,thirdTotalCpoy){

       var totalBookOrder =  totalBook * totalCopy ;
       console.log('total firstBookpage order:',totalBookOrder);
     

       var totalSecBookOrder =  totalBook * perSec ;
       console.log('total secBookPage order:',totalSecBookOrder);
        
       var totalThirdBook = totalBook * thirdTotalCpoy ;
        console.log('total third bookk order:',totalThirdBook) 
        
        var totalpage =  totalBookOrder+ totalSecBookOrder + totalThirdBook ;
        console.log('total page:',totalpage);

       
       return totalBookOrder,totalSecBookOrder, totalThirdBook,totalpage;

  ;

}


var totalBook = 5 ; 
var perPage = 100;
var perSecPage = 200;
var perMaxPage = 300;

var totalOrder = paperRequirements(perPage, perSecPage, perMaxPage);
