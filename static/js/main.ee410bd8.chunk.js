(this["webpackJsonpakqa-shopping-basket"]=this["webpackJsonpakqa-shopping-basket"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":"illsidg","name":"Cotton T-Shirt","size":"Medium","price":1.99,"amount":1},{"id":"r6krtzu","name":"Baseball Cap","size":"One Size","price":2.99,"amount":2},{"id":"ztui6ukk","name":"Swim Shorts","size":"Medium","price":3.99,"amount":1}]')},,,,,,,function(e,t,a){e.exports=a.p+"static/media/AKQA-Logo.68a06e33.svg"},function(e,t,a){e.exports=a.p+"static/media/trashcan.cb37ce7e.svg"},,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(4),i=a.n(r),c=(a(17),a(2)),o=a(5),u=a(6),m=a(10),s=a(7),d=a(11),E=a(8),h=a.n(E),p=(a(18),a(9)),b=a.n(p),f=(a(19),function(e){return l.a.createElement("table",{id:"itemList"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Product"),l.a.createElement("th",null,"Price"),l.a.createElement("th",null,"Qty"),l.a.createElement("th",null,"Cost"),l.a.createElement("th",null))),l.a.createElement("tbody",null,e.items.map((function(t,a){return l.a.createElement("tr",{key:t.id},l.a.createElement("td",null,t.name,", ",t.size),l.a.createElement("td",null,t.price),l.a.createElement("td",null,l.a.createElement("div",{id:"quantityBox"},l.a.createElement("input",{type:"number",className:"quantityNumber",onChange:function(a){return e.quantityHandler(t.id,a.target.value)},value:t.amount}),l.a.createElement("div",{className:"quantityChanger",onClick:function(){return e.quantityHandler(t.id,"+")}},"+"),l.a.createElement("div",{className:"quantityChanger",onClick:function(){return e.quantityHandler(t.id,"\u2013")}},"\u2013"))),l.a.createElement("td",null,"\xa3",(t.amount*t.price).toFixed(2)),l.a.createElement("td",null,l.a.createElement("div",null,l.a.createElement("img",{src:b.a,alt:"delete symbol"}))))}))))}),v=a(1),y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={subTotal:0,vat:0,total:0,items:Object(c.a)(v)},a.calcPrice=function(){var e=0;v.forEach((function(t){e+=t.price*t.amount}));var t=20*e/100,n=t+e;a.setState({subTotal:e,vat:t,total:n})},a.componentDidMount=function(){a.calcPrice()},a.handleAmount=function(e,t){var n=t,l=Object(c.a)(a.state.items);"+"===n?a.state.items.forEach((function(t,n){t.id===e&&(l[n].amount=Number(l[n].amount)+1,a.setState({items:l},a.calcPrice()))})):"\u2013"===n?a.state.items.forEach((function(t,n){t.id===e&&t.amount>1&&(l[n].amount=Number(l[n].amount-1),a.setState({items:l},a.calcPrice()))})):a.state.items.forEach((function(n,r){n.id===e&&(console.log("Hallo"),l[r].amount=t,a.setState({items:l},a.calcPrice()))}))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("main",null,l.a.createElement("img",{id:"logo",width:"150px",src:h.a,alt:"AKQA logo"}),l.a.createElement("section",{id:"description"},l.a.createElement("h1",null,"Your Basket"),l.a.createElement("p",null,"Items you have added to your header are shown below. ",l.a.createElement("br",null),"Adjust the quantities or remove items before continuing your purchase.")),l.a.createElement("section",{id:"productList"},l.a.createElement(f,{items:this.state.items,quantityHandler:this.handleAmount})),l.a.createElement("section",{id:"priceCalculation"},l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Subtotal"),l.a.createElement("td",null,"\xa3",this.state.subTotal.toFixed(2))),l.a.createElement("tr",null,l.a.createElement("td",null,"VAT @ 20%"),l.a.createElement("td",null,"\xa3",this.state.vat.toFixed(2))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"Total Cost")),l.a.createElement("td",null,l.a.createElement("b",null,"\xa3",this.state.total.toFixed(2))))))),l.a.createElement("button",{id:"buyButton"},"Buy Now \xbb")),l.a.createElement("footer",null,l.a.createElement("p",null,l.a.createElement("b",null,"\u24b8 2013 AKQA Ltd.")," Registered in England: 2964394")))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[12,1,2]]]);
//# sourceMappingURL=main.ee410bd8.chunk.js.map