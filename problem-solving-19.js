const products = [
    {name : 'iphone 14', price:7000},
    {name : 'Samsung galaxy 14', price:6000},
    {name : 'dell laptop', price:50000},
    {name : 'Lenovo yoga laptop', price:55000},
    {name : 'asus 14 laptop', price:3500},
    {name : 'smart watch sasung', price:7000},
    {name : 'plus one phone 4', price: 2700},
    {name : 'appale watch', price: 2000}
  ];

//   for(const product of products ){
//       if(product.price<5000){
//           break;
//       }
//       console.log(product)
//   }

  for(const product of products ){
      if(product.price > 5000){
          continue;
      }
      console.log(product)
  }

