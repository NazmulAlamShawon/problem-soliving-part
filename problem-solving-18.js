const products =[
  {name : 'iphone 14', price:70000},
  {name : 'Samsung galaxy 14', price:60000},
  {name : 'dell laptop', price:50000},
  {name : 'Lenovo yoga laptop', price:55000},
  {name : 'asus 14 laptop', price:35000},
  {name : 'smart watch sasung', price:7000},
  {name : 'plus one phone 4', price:27000},
  {name : 'appale watch', price:20000}
]

function searchProducts(products,searchText){
  const result = [] ;
  for(const product of products){
    if(product.name.includes(searchText)){
      console.log(product.name)
      result.push(product);
    }
     
  }
  return result ;
}

const matched = searchProducts(products, 'watch');
console.log(matched);