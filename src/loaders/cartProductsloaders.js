import { getShoppingCart } from "../utilities/fakedb";

const cartLoader = async () => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();

    const storedCart = getShoppingCart();
    let savedCart = [];
    for (const id in storedCart) {
        const exist = products.find(pd => pd.id === id);
        exist.quantity = storedCart[id];
        savedCart.push(exist);
    } 

    return savedCart;
}
export default cartLoader;