(this["webpackJsonpakqa-shopping-basket"]=this["webpackJsonpakqa-shopping-basket"]||[]).push([[0],{16:function(t,e,a){t.exports=a.p+"static/media/AKQA-Logo.68a06e33.svg"},17:function(t,e,a){t.exports=a.p+"static/media/trashcan.cb37ce7e.svg"},18:function(t){t.exports=JSON.parse('[{"id":"illsidg","name":"Cotton T-Shirt","size":"Medium","price":1.99,"amount":1},{"id":"r6krtzu","name":"Baseball Cap","size":"One Size","price":2.99,"amount":2},{"id":"ztui6ukk","name":"Swim Shorts","size":"Medium","price":3.99,"amount":1}]')},22:function(t,e,a){t.exports=a(47)},27:function(t,e,a){},28:function(t,e,a){},29:function(t,e,a){},47:function(t,e,a){"use strict";a.r(e);var n=a(0),l=a.n(n),i=a(12),r=a.n(i),c=(a(27),a(2)),o=a(13),u=a(14),s=a(20),m=a(15),d=a(21),h=a(16),E=a.n(h),b=(a(28),a(17)),f=a.n(b),p=(a(29),function(t){return l.a.createElement("table",{id:"itemList"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Product"),l.a.createElement("th",null,"Price"),l.a.createElement("th",null,"Qty"),l.a.createElement("th",null,"Cost"),l.a.createElement("th",null))),l.a.createElement("tbody",null,t.items.map((function(e,a){return l.a.createElement("tr",{key:e.id},l.a.createElement("td",null,e.name,", ",e.size),l.a.createElement("td",null,e.price),l.a.createElement("td",null,l.a.createElement("div",{id:"quantityBox"},l.a.createElement("input",{type:"number",className:"quantityNumber",onChange:function(a){return t.quantityHandler(e.id,a.target.value)},onBlur:function(){return t.blur(e.id)},value:e.amount}),l.a.createElement("div",{className:"quantityChanger",onClick:function(){return t.quantityHandler(e.id,"+")}},"+"),l.a.createElement("div",{className:"quantityChanger",onClick:function(){return t.quantityHandler(e.id,"\u2013")}},"\u2013"))),l.a.createElement("td",null,"\xa3",(e.amount*e.price).toFixed(2)),l.a.createElement("td",null,l.a.createElement("div",null,l.a.createElement("img",{src:f.a,alt:"delete symbol",onClick:function(){return t.delete(e.id)}}))))}))))}),v=a(18),g=a(19),y=a.n(g),k=function(t){function e(){var t,a;Object(o.a)(this,e);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(s.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(l)))).state={subTotal:0,vat:0,total:0,items:Object(c.a)(v)},a.calcPrice=function(){var t=0;a.state.items.forEach((function(e){t+=e.price*e.amount}));var e=20*t/100,n=e+t;a.setState({subTotal:t,vat:e,total:n})},a.componentDidMount=function(){a.calcPrice()},a.handleAmount=function(t,e){var n=e,l=Object(c.a)(a.state.items);"+"===n?a.state.items.forEach((function(e,n){e.id===t&&(l[n].amount=Number(l[n].amount)+1,a.setState({items:l},(function(){return a.calcPrice()})))})):"\u2013"===n?a.state.items.forEach((function(e,n){e.id===t&&e.amount>1&&(l[n].amount=Number(l[n].amount-1),a.setState({items:l},(function(){return a.calcPrice()})))})):a.state.items.forEach((function(n,i){n.id===t&&(0!==Number(e)?l[i].amount=Number(e).toFixed(0):l[i].amount=e,(l[i].amount<0||"0"===l[i].amount)&&(l[i].amount=1),a.setState({items:l},(function(){return a.calcPrice()})))}))},a.handleBlur=function(t){var e=Object(c.a)(a.state.items);a.state.items.forEach((function(n,l){n.id!==t||n.amount||(e[l].amount=1,a.setState({items:e},(function(){return a.calcPrice()})))}))},a.handleDelete=function(t){var e=Object(c.a)(a.state.items);a.state.items.forEach((function(n,l){n.id===t&&(e.splice(l,1),a.setState({items:e},(function(){return a.calcPrice()})))}))},a.handleSubmit=function(t){if("activated"===t.target.className){var e=0;a.state.items.forEach((function(t){e+=t.amount})),y.a.post("/about:blank",a.state).then((function(t){alert("Your order has been succesfully submitted. You bought ".concat(e," items worth \xa3").concat(a.state.total.toFixed(2)," in total.")),a.setState({submit:!0})})).catch((function(t){console.log("err",t),alert("Your order has been succesfully submitted. You bought ".concat(e," items worth \xa3").concat(a.state.total.toFixed(2)," in total."))}))}},a}return Object(d.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t="activated";return this.state.items.length||(t="deactivated"),l.a.createElement("div",{className:"App"},l.a.createElement("main",null,l.a.createElement("img",{id:"logo",width:"150px",src:E.a,alt:"AKQA logo"}),l.a.createElement("section",{id:"description"},l.a.createElement("h1",null,"Your Basket"),l.a.createElement("p",null,"Items you have added to your header are shown below. ",l.a.createElement("br",null),"Adjust the quantities or remove items before continuing your purchase.")),l.a.createElement("section",{id:"productList"},l.a.createElement(p,{items:this.state.items,quantityHandler:this.handleAmount,blur:this.handleBlur,delete:this.handleDelete})),l.a.createElement("section",{id:"priceCalculation"},l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Subtotal"),l.a.createElement("td",null,"\xa3",this.state.subTotal.toFixed(2))),l.a.createElement("tr",null,l.a.createElement("td",null,"VAT @ 20%"),l.a.createElement("td",null,"\xa3",this.state.vat.toFixed(2))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"Total Cost")),l.a.createElement("td",null,l.a.createElement("b",null,"\xa3",this.state.total.toFixed(2))))))),l.a.createElement("button",{id:"buyButton",className:t,type:"submit",onClick:this.handleSubmit},"Buy Now \xbb")),l.a.createElement("footer",null,l.a.createElement("p",null,l.a.createElement("b",null,"\u24b8 2013 AKQA Ltd.")," Registered in England: 2964394")))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.f879c94e.chunk.js.map