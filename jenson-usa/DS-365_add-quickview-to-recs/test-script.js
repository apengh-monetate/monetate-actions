$.ajax({
    method: "POST",
    url: "https://www.jensonusa.com/api/cart/addToCart",
    data: { code: "JE175A12BLK XLAR", quantity: "1" }
}).done(function(msg) {
    console.log(msg);
});
