    let products = [];
    let total = 0;
    
    function add(product,price){
        console.log(product,price);
        products.push(product);
        total= total + price;
        document.getElementById("checkout").innerHTML = `Carrito $${total}`;

    }

    function pagar(){
        window.alert(products.join(", \n"));
        total=0;
        document.getElementById("checkout").innerHTML = `Carrito $${total}`;
    }

