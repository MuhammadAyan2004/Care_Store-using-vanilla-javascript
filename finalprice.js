import { cartvalue } from "./cartvalue"

export const finalPrice = () => {

    let arrFromLS = cartvalue()
    let initialvalue = 0;

    let totalPrice = arrFromLS.reduce((acc, currElem) => {
        let productPrice = parseFloat(currElem.price) || 0
        return acc + productPrice;
    }, initialvalue)

    let subTotal = document.querySelector(".subtotal-price");
    let finalprice = document.querySelector(".total-price");
    
    subTotal.innerHTML = `$${totalPrice.toFixed(2)}`;

    let discount = 25
    let final_price = Math.max(totalPrice - discount,totalPrice)

    finalprice.innerHTML = `$${final_price.toFixed(2)}`

}  