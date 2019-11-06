$.ajax({
    method: "POST",
    url: "https://www.jensonusa.com/api/cart/addToCart",
    data: {code: "BI001165  BLACK", quantity: "1"}
}).done(function(msg) {
    console.log(msg);
});
