"use strict";(self.webpackChunknew_client=self.webpackChunknew_client||[]).push([[921],{69817:function(e,t,r){r.d(t,{BX:function(){return u},N6:function(){return l},Xq:function(){return i},q7:function(){return d}});var n=r(74165),s=r(15861),a=r(74569),c=r.n(a),o=r(48145),i=function(e,t,r){return function(){var a=(0,s.Z)((0,n.Z)().mark((function s(a,i){var l,d;return(0,n.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("".concat(o.b,"/products/").concat(e));case 2:l=n.sent,d=l.data,a({type:"cart_add_item",payload:{product:d._id,name:d.name,price:d.price,countInStock:d.countInStock,images:d.images,qty:t,userId:r}}),localStorage.setItem("cartItems",JSON.stringify(i().cart.cartItems));case 6:case"end":return n.stop()}}),s)})));return function(e,t){return a.apply(this,arguments)}}()},l=function(e){return function(){var t=(0,s.Z)((0,n.Z)().mark((function t(r,s){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r({type:"cart_remove_item",payload:e}),localStorage.removeItem("cartItems"),localStorage.removeItem("shippingAddress"),localStorage.removeItem("paymentMethod"),localStorage.removeItem("phoneNumber");case 5:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=(0,s.Z)((0,n.Z)().mark((function t(r){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r({type:"cart_shipping_address",payload:e}),localStorage.setItem("shippingAddress",JSON.stringify(e));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},u=function(e){return function(){var t=(0,s.Z)((0,n.Z)().mark((function t(r){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r({type:"cart_payment_method",payload:e}),localStorage.setItem("paymentMethod",JSON.stringify(e));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},41713:function(e,t,r){r.d(t,{Du:function(){return p},LV:function(){return i},Nc:function(){return d},TG:function(){return u},h:function(){return x},kA:function(){return m},or:function(){return f},s$:function(){return l}});var n=r(74165),s=r(15861),a=r(74569),c=r.n(a),o=r(48145),i=(r(69817),function(e){return function(){var t=(0,s.Z)((0,n.Z)().mark((function t(r,s){var a,i,l,d,u;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:"order_create_request"}),a=s(),i=a.user,l={headers:{"Content-Type":"Application/json",authtoken:"".concat(i.token)}},t.next=6,c().post("".concat(o.b,"/orders/"),e,l);case 6:d=t.sent,u=d.data,r({type:"order_create_success",payload:u}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),r({type:"order_create_fail",payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,r){return t.apply(this,arguments)}}()}),l=function(e){return function(){var t=(0,s.Z)((0,n.Z)().mark((function t(r,s){var a,i,l,d,u;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:"order_details_request"}),a=s(),i=a.user,l={headers:{authtoken:"".concat(i.token)}},t.next=6,c().get("".concat(o.b,"/orders/").concat(e),l);case 6:d=t.sent,u=d.data,r({type:"order_details_success",payload:u}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),r({type:"order_details_fail",payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,r){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=(0,s.Z)((0,n.Z)().mark((function t(r,s){var a,i,l,d;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,r({type:"order_pay_request"}),a=s(),i=a.user,l={headers:{"Content-Type":"application/json",authtoken:i.token?"".concat(i.token):""}},!i.token){t.next=10;break}return t.next=7,c().put("".concat(o.b,"/orders/").concat(e,"/confirm"),{},l);case 7:d=t.sent,d.data,r({type:"order_pay_success"});case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),r({type:"order_pay_fail",payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,r){return t.apply(this,arguments)}}()},u=function(){return function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t,r){var s,a,i,l,d;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"my_order_request"}),!1,s=r(),a=s.user,i={headers:{authtoken:a.token?"".concat(a.token):""}},e.next=7,c().post("".concat(o.b,"/orders/myorders"),{email:a.email},i);case 7:l=e.sent,d=l.data,t({type:"my_order_success",payload:d}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),t({type:"my_order_fail",payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,r){return e.apply(this,arguments)}}()},p=function(){return function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t,r){var s,a,i,l,d;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"order_list_request"}),!1,s=r(),a=s.user,i={headers:{authtoken:a.token?"".concat(a.token):""}},e.next=7,c().get("".concat(o.b,"/orders/"),i);case 7:l=e.sent,d=l.data,t({type:"order_list_success",payload:d}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),t({type:"order_list_fail",payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,r){return e.apply(this,arguments)}}()},f=function(e){return function(){var t=(0,s.Z)((0,n.Z)().mark((function t(r,s){var a,i,l,d,u;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:"order_deliver_request"}),!1,a=s(),i=a.user,l={headers:{authtoken:i.token?"".concat(i.token):""}},t.next=7,c().put("".concat(o.b,"/orders/").concat(e,"/deliver/pay"),{},l);case 7:d=t.sent,u=d.data,r({type:"order_deliver_success",payload:u}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),r({type:"order_deliver_fail",payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,r){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=(0,s.Z)((0,n.Z)().mark((function t(r,s){var a,i,l,d;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:"order_deliver_delete_request"}),!1,a=s(),i=a.user,l={headers:{authtoken:i.token?"".concat(i.token):""}},t.next=7,c().delete("".concat(o.b,"/orders/").concat(e),l);case 7:d=t.sent,d.data,r({type:"order_deliver_delete_success"}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),r({type:"order_deliver_delete_fail",payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,r){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=(0,s.Z)((0,n.Z)().mark((function t(r,s){var a,i,l,d;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:"myorder_delete_request"}),!1,a=s(),i=a.user,l={headers:{authtoken:i.token?"".concat(i.token):""}},t.next=7,c().delete("".concat(o.b,"/orders/myorders/").concat(e),l);case 7:d=t.sent,d.data,r({type:"myorder_delete_success"}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),r({type:"myorder_delete_fail",payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,r){return t.apply(this,arguments)}}()}},2327:function(e,t,r){r(72791);var n=r(7692),s=r(56355),a=r(16856),c=r(17425),o=r(91523),i=r(80184);t.Z=function(e){var t=e.step1,r=e.step2,l=e.step3,d=e.step4;return(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"20px"},children:[(0,i.jsx)("div",{children:t?(0,i.jsxs)("button",{style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:[(0,i.jsx)(o.rU,{to:"/login",children:"Login"}),(0,i.jsx)(n.NzD,{color:"blue"})]}):(0,i.jsxs)("button",{disabled:!0,style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:[(0,i.jsx)(o.rU,{children:" signIn "})," ",(0,i.jsx)(n.NzD,{color:"gray"})]})}),(0,i.jsx)("div",{children:r?(0,i.jsxs)("button",{style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:[(0,i.jsx)(o.rU,{to:"/shipping",children:"Address"}),(0,i.jsx)(s.nl4,{color:"blue"})]}):(0,i.jsxs)("button",{disabled:!0,style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:["Address ",(0,i.jsx)(s.nl4,{color:"gray"})]})}),(0,i.jsx)("div",{children:l?(0,i.jsxs)("button",{style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:[(0,i.jsx)(o.rU,{to:"/payment",children:"Payment"}),(0,i.jsx)(a.c85,{color:"blue"})]}):(0,i.jsxs)("button",{disabled:!0,style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:["Payment ",(0,i.jsx)(a.c85,{color:"gray"})]})}),(0,i.jsx)("div",{children:d?(0,i.jsxs)("button",{style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:[(0,i.jsx)(o.rU,{to:"/placeOrder",children:"Place Order"}),(0,i.jsx)(c.xnq,{color:"blue"})]}):(0,i.jsxs)("button",{disabled:!0,style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:["Place Order ",(0,i.jsx)(c.xnq,{color:"gray"})]})})]})}},65921:function(e,t,r){r.r(t);var n=r(91523),s=r(56355),a=r(17425),c=r(72791),o=r(41713),i=r(16030),l=r(2327),d=r(80184);t.default=function(e){var t=e.history,r=(0,i.v9)((function(e){return e.user})),u=(0,i.I0)(),p=(0,i.v9)((function(e){return e.cart}));r&&r._id&&(p.itemsPrice=p.cartItems.filter((function(e){return e.userId===r._id})).reduce((function(e,t){return e+t.price*t.qty}),0),p.taxPrice=Number((.15*p.itemsPrice).toFixed(2)),p.totalPrice=Number(p.taxPrice+p.itemsPrice).toFixed(2));var f=(0,i.v9)((function(e){return e.order})),x=f.order,m=f.success,y=f.error;(0,c.useEffect)((function(){m&&t.push("/order/".concat(x._id))}),[t,m]);return(0,d.jsx)("section",{className:" bg-gray-50 text-gray-600 body-font relative",children:(0,d.jsxs)("div",{className:"container px-5 py-10 mx-auto",children:[(0,d.jsx)("div",{className:"",children:(0,d.jsxs)(n.rU,{to:"/shipping",children:[" ",(0,d.jsx)(s.xPU,{color:"blue"})," "]})}),(0,d.jsx)("div",{className:"flex flex-col items-center w-full mb-12",children:(0,d.jsxs)("h1",{className:"sm:text-3xl text-2xl  inline-flex  items-center font-medium title-font mb-4 text-gray-700",children:["Place Order ",(0,d.jsx)(a.xnq,{className:"mx-1",color:"blue"})," "]})}),(0,d.jsx)(l.Z,{step1:!0,step2:!0,step3:!0,step4:!0}),(0,d.jsx)("section",{className:"text-gray-600 body-font",children:(0,d.jsx)("div",{className:"container px-5 py-10 mx-auto",children:(0,d.jsx)("div",{className:"flex flex-wrap -m-2",children:(0,d.jsx)("div",{className:"p-2 lg:w-full md:w-full w-full",children:(0,d.jsxs)("div",{className:"h-full flex items-center border-gray-200 border p-4 rounded-lg",children:[r&&r._id&&0===p.cartItems.filter((function(e){return e.userId===r._id})).length?(0,d.jsx)("p",{children:"You cart is empty "}):(0,d.jsx)(d.Fragment,{children:p.cartItems.filter((function(e){return e.userId===r._id})).map((function(e,t){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("img",{className:"w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4",src:e.images[0].url,alt:e.name}),(0,d.jsxs)("div",{className:"flex-grow",children:[(0,d.jsx)("h2",{className:"text-gray-900 title-font font-medium",children:(0,d.jsxs)(n.rU,{to:"/product/".concat(e.product),children:[" ",e.name," "]})}),(0,d.jsxs)("p",{className:"text-gray-500",children:[e.qty," x ",e.price," PKR ="," ",e.qty*e.price," PKR"]})]})]})}))}),(0,d.jsxs)("div",{className:"flex-grow",children:[(0,d.jsx)("strong",{children:" Address :"}),p.shippingAddress.address,", ",p.shippingAddress.city,","," ",p.shippingAddress.postalCode,",","  ",p.shippingAddress.country,(0,d.jsx)("br",{}),(0,d.jsx)("strong",{children:" Phone Number :"}),p.shippingAddress.phoneNumber,(0,d.jsx)("br",{}),(0,d.jsx)("strong",{children:" Method : "}),"caseOnDelivery"===p.paymentMethod&&(0,d.jsx)(d.Fragment,{children:"Cash On Delivery"})]})]})})})})}),(0,d.jsx)("section",{className:"text-gray-600 body-font",children:(0,d.jsx)("div",{className:" container px-5 mx-auto",children:(0,d.jsx)("div",{className:"flex flex-wrap -m-2",children:(0,d.jsxs)("div",{className:" ",children:[(0,d.jsx)("h2",{children:" Order Summary "}),(0,d.jsx)("div",{className:"bg-gray-900 px-10 text-gray-100 h-full flex items-center border-gray-200 border p-4 rounded-lg",children:(0,d.jsxs)("div",{className:"flex-grow",children:[(0,d.jsx)("strong",{children:"Price"}),": "," ",p.itemsPrice," PKR",(0,d.jsx)("br",{}),(0,d.jsx)("strong",{children:"TAX"}),":"," ",p.taxPrice," PKR",(0,d.jsx)("br",{}),(0,d.jsx)("strong",{children:"Total"}),":"," ",p.totalPrice," PKR",(0,d.jsx)("br",{}),y&&(0,d.jsxs)("p",{children:[" ",y," "]}),(0,d.jsx)("button",{className:"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-200 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",disabled:0===p.cartItems,onClick:function(){u((0,o.LV)({orderItems:p.cartItems,totalItems:p.cartItems.length,shippingAddress:p.shippingAddress,paymentMethod:p.paymentMethod,itemsPrice:p.itemsPrice,taxPrice:p.taxPrice,totalPrice:p.totalPrice}))},children:"Place Order"})]})})]})})})})]})})}}}]);
//# sourceMappingURL=921.2d160268.chunk.js.map