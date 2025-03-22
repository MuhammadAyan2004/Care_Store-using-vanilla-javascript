export const shopproductcontainer = (product)=>{
    const productcontainer3 = document.querySelector(".productContainer3")
    const productTemps = document.getElementById("productTemp")
    if(!product){
        return false;
    }

    product.forEach((currelem)=>{
    const {id, img, name, price, brand, stock, details} = currelem;
    const tempClone_S = document.importNode(productTemps.content,true)

    tempClone_S.querySelector("#cardvalue").setAttribute("id",`card${id}`);
    tempClone_S.querySelector(".img").src = img;
    tempClone_S.querySelector(".brands").innerHTML = brand;
    tempClone_S.querySelector(".product_name").innerHTML = name;
    tempClone_S.querySelector(".price").textContent = `$${price}`

    productcontainer3.appendChild(tempClone_S) 
})
}
