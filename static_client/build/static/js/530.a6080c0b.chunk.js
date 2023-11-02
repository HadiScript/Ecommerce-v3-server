"use strict";(self.webpackChunknew_client=self.webpackChunknew_client||[]).push([[530],{69817:function(e,t,n){n.d(t,{BX:function(){return d},N6:function(){return o},Xq:function(){return a},q7:function(){return u}});var r=n(74165),s=n(15861),i=n(74569),c=n.n(i),l=n(48145),a=function(e,t,n){return function(){var i=(0,s.Z)((0,r.Z)().mark((function s(i,a){var o,u;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c().get("".concat(l.b,"/products/").concat(e));case 2:o=r.sent,u=o.data,i({type:"cart_add_item",payload:{product:u._id,name:u.name,price:u.price,countInStock:u.countInStock,images:u.images,qty:t,userId:n}}),localStorage.setItem("cartItems",JSON.stringify(a().cart.cartItems));case 6:case"end":return r.stop()}}),s)})));return function(e,t){return i.apply(this,arguments)}}()},o=function(e){return function(){var t=(0,s.Z)((0,r.Z)().mark((function t(n,s){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"cart_remove_item",payload:e}),localStorage.removeItem("cartItems"),localStorage.removeItem("shippingAddress"),localStorage.removeItem("paymentMethod"),localStorage.removeItem("phoneNumber");case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},u=function(e){return function(){var t=(0,s.Z)((0,r.Z)().mark((function t(n){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"cart_shipping_address",payload:e}),localStorage.setItem("shippingAddress",JSON.stringify(e));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=(0,s.Z)((0,r.Z)().mark((function t(n){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"cart_payment_method",payload:e}),localStorage.setItem("paymentMethod",JSON.stringify(e));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},2327:function(e,t,n){n(72791);var r=n(7692),s=n(56355),i=n(16856),c=n(17425),l=n(91523),a=n(80184);t.Z=function(e){var t=e.step1,n=e.step2,o=e.step3,u=e.step4;return(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"20px"},children:[(0,a.jsx)("div",{children:t?(0,a.jsxs)("button",{style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:[(0,a.jsx)(l.rU,{to:"/login",children:"Login"}),(0,a.jsx)(r.NzD,{color:"blue"})]}):(0,a.jsxs)("button",{disabled:!0,style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:[(0,a.jsx)(l.rU,{children:" signIn "})," ",(0,a.jsx)(r.NzD,{color:"gray"})]})}),(0,a.jsx)("div",{children:n?(0,a.jsxs)("button",{style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:[(0,a.jsx)(l.rU,{to:"/shipping",children:"Address"}),(0,a.jsx)(s.nl4,{color:"blue"})]}):(0,a.jsxs)("button",{disabled:!0,style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:["Address ",(0,a.jsx)(s.nl4,{color:"gray"})]})}),(0,a.jsx)("div",{children:o?(0,a.jsxs)("button",{style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:[(0,a.jsx)(l.rU,{to:"/payment",children:"Payment"}),(0,a.jsx)(i.c85,{color:"blue"})]}):(0,a.jsxs)("button",{disabled:!0,style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:["Payment ",(0,a.jsx)(i.c85,{color:"gray"})]})}),(0,a.jsx)("div",{children:u?(0,a.jsxs)("button",{style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:[(0,a.jsx)(l.rU,{to:"/placeOrder",children:"Place Order"}),(0,a.jsx)(c.xnq,{color:"blue"})]}):(0,a.jsxs)("button",{disabled:!0,style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:["Place Order ",(0,a.jsx)(c.xnq,{color:"gray"})]})})]})}},44530:function(e,t,n){n.r(t);var r=n(70885),s=n(72791),i=n(16030),c=n(2327),l=n(69817),a=n(16856),o=n(56355),u=n(91523),d=n(80184);t.default=function(e){var t=e.history,n=(0,i.I0)();(0,i.v9)((function(e){return e.cart})).shippingAddress||t.pust("/shipping");var x=(0,s.useState)("cashOnDelivery"),p=(0,r.Z)(x,2),f=p[0],m=p[1],y=function(e){e.preventDefault(),n((0,l.BX)(f)),t.push("/placeOrder")};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("section",{className:" bg-gray-50 text-gray-600 body-font relative",children:(0,d.jsxs)("div",{className:"container px-5 py-10 mx-auto",children:[(0,d.jsx)("div",{className:"",children:(0,d.jsxs)(u.rU,{to:"/shipping",children:[" ",(0,d.jsx)(o.xPU,{color:"blue"})," "]})}),(0,d.jsx)("div",{className:"flex flex-col items-center w-full mb-12",children:(0,d.jsxs)("h1",{class:"sm:text-3xl text-2xl  inline-flex  items-center font-medium title-font mb-4 text-gray-700",children:["Payment ",(0,d.jsx)(a.c85,{className:"mx-1",color:"blue"})," "]})}),(0,d.jsx)(c.Z,{step1:!0,step2:!0,step3:!0}),(0,d.jsx)("form",{className:"py-10",onSubmit:y,children:(0,d.jsx)("div",{className:"lg:w-1/2 md:w-2/3 mx-auto",children:(0,d.jsxs)("div",{className:"flex flex-wrap -m-2",children:[(0,d.jsx)("div",{className:"p-2 w-full",children:(0,d.jsxs)("div",{className:"relative",children:[(0,d.jsx)("label",{for:"email",className:"leading-7 text-sm text-gray-600",children:"Payment Method"}),(0,d.jsx)("input",{type:"check",disabled:!0,id:"cashOnDelivery",value:"cashOnDelivery",name:"cashOnDelivery",onChange:function(e){return m(e.target.value)},className:"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"})]})}),(0,d.jsx)("div",{className:" p-2 w-full",onClick:y,children:(0,d.jsx)("button",{className:"flex mx-auto text-white   bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg",children:"Continue"})})]})})})]})})})}}}]);
//# sourceMappingURL=530.a6080c0b.chunk.js.map