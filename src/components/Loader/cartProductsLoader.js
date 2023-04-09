import { getShoppingCart } from "../../utilities/fakedb";

const cartProductsLoader =async()=>{
const loadedProduct = await fetch('fakeData/products.json');
const products = await loadedProduct.json();
console.log(products);
const storedCart = getShoppingCart();
console.log(storedCart);
const savedCart =[];

for(const id in storedCart) {
  const addedProduct = products.find(pd =>pd.id === id)
  console.log(addedProduct);
  if(addedProduct) {
    const quantity = storedCart[id];
    addedProduct.quantity = quantity;
    savedCart.push(addedProduct);
  }
}
return savedCart;
// console.log(storedCart);
// console.log(products);
// return products;
}

export default cartProductsLoader;