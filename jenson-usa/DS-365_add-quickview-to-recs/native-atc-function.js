var o = this, i = dataLayer[0].itemNumber || "", t, r, e, u, n;
for (window.monetateQ.push(["setPageType", "product"]),
window.monetateQ.push(["addProductDetails", [i]]),
window.monetateQ.push(["trackData"]),
t = $("#btnAddToCart"),
r = this,
t.button("loading"),
u = 0,
n = 0; n < this.variantsData.length; n++)
    (this.variantsData[n].Size.Value === this.selectedSize || this.selectedSize === "") && (this.variantsData[n].Color === this.selectedColor || this.selectedColor === "") && (this.variantsData[n].SkuName === this.selectedName || this.selectedName === "" || $("#NameSelect").length === 0) && (e = this.variantsData[n],
    u += 1);
if (u !== 1) {
    $("#error-message-add-to-cart").html("Please select an option");
    r.addedToCartErrorElement.modal("show");
    t.button("reset");
    return
}
t.button("loading");
var f = $("#qty").val()
  , s = e.Code
  , h = {
    code: s,
    quantity: f
};
if (isNaN(f) || f <= 0) {
    $("#error-message-add-to-cart").html("Please add a valid quantity");
    r.addedToCartErrorElement.modal("show");
    t.button("reset");
    return
}
$.ajax(app.API.postOptions("cart", "addToCart", h)).then(function(n) {
    var e = o, f, t, s, l, r, h, u, c;
    if (n.success)
        if ($("#addedProductSkuName").html(n.viewModel.skuName),
        $("#addedProductQty").html("Qty:&nbsp;" + n.viewModel.qty),
        $("#addedProductPrice").html("Price:&nbsp;" + n.viewModel.price),
        $("#addedProductTitle").html(n.viewModel.displayTitle),
        n.viewModel.imageUrl !== null ? $("#addedProductImg").attr("src", n.viewModel.imageUrl) : $("#addedProductImg").attr("src", "/content/images/assets/noimg_gallery_main.jpg"),
        $("#addedProductTotalCount").html(n.viewModel.cartSummary.numberOfItems + "&nbsp;" + (n.viewModel.cartSummary.numberOfItems > 1 ? "items" : "item")),
        $("#addedProductTotal").html("CART SUBTOTAL:&nbsp;" + n.viewModel.cartSummary.cartSubtotal),
        $("#addedProductUrlLink").attr("href", n.viewModel.shoppingCartPageUrl),
        e.addedToCartElement.modal("show"),
        e.miniCartContainer.html(n.viewModel.cartSummary.numberOfItems),
        f = Cookies.get(brontoCartCookieName),
        t = $(".breadcrumb").text(),
        t = t.replace(/(\r\n|\n|\r)/gm, " ").replace(/ {1,}/g, " ").replace(/>>/g, ">"),
        t = t.substr(0, t.length - (t.length - t.indexOf("Duro Mountain Presta Valve Tube") + 3)).trim(),
        f === undefined || f === null)
            s = {
                currency: $("#currencySelector").html().substr($("#currencySelector").html().indexOf("(") + 1, $("#currencySelector").html().indexOf(")") - $("#currencySelector").html().indexOf("(") - 1),
                subtotal: parseFloat(n.viewModel.cartSummary.cartSubtotal.replace(/[^\d.-]/g, "")),
                cartUrl: "https://www.jensonusa.com/cart",
                lineItems: [{
                    sku: i + " " + $("#NameSelect").val(),
                    name: n.viewModel.skuName,
                    description: n.viewModel.displayTitle,
                    category: t,
                    other: "",
                    unitPrice: parseFloat(n.viewModel.price.replace(/[^\d.-]/g, "")),
                    quantity: n.viewModel.qty,
                    totalPrice: parseFloat(n.viewModel.price.replace(/[^\d.-]/g, "")) * n.viewModel.qty,
                    imageUrl: "https://www.jensonusa.com/" + n.viewModel.imageUrl,
                    productUrl: location.href
                }]
            },
            brontoCart = s,
            Cookies.set("brontoCart", s),
            l = 0;
        else {
            for (r = JSON.parse(f),
            r.currency = $("#currencySelector").html().substr($("#currencySelector").html().indexOf("(") + 1, $("#currencySelector").html().indexOf(")") - $("#currencySelector").html().indexOf("(") - 1),
            r.subtotal = parseFloat(n.viewModel.cartSummary.cartSubtotal.replace(/[^\d.-]/g, "")),
            h = !1,
            u = 0; u < r.lineItems.length; u++)
                r.lineItems[u].sku === i + " " + $("#NameSelect").val() && (h = !0,
                r.lineItems[u].quantity += n.viewModel.qty);
            h || r.lineItems.push({
                sku: i + " " + $("#NameSelect").val(),
                name: n.viewModel.skuName,
                description: n.viewModel.displayTitle,
                category: t,
                other: "",
                unitPrice: parseFloat(n.viewModel.price.replace(/[^\d.-]/g, "")),
                quantity: n.viewModel.qty,
                totalPrice: parseFloat(n.viewModel.price.replace(/[^\d.-]/g, "")) * n.viewModel.qty,
                imageUrl: "https://www.jensonusa.com/" + n.viewModel.imageUrl,
                productUrl: location.href
            });
            brontoCart = r;
            Cookies.set(_this.brontoCartCookieName, r)
        }
    else
        c = app.API.parseAjaxErrorMessage(n),
        $("#error-message-add-to-cart").html(c),
        e.addedToCartErrorElement.modal("show")
}).fail(function(n) {
    return console.log(n)
}).always(function() {
    return t.button("reset")
})
