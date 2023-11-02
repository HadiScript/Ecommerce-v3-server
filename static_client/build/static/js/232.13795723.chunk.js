"use strict";(self.webpackChunknew_client=self.webpackChunknew_client||[]).push([[232],{69817:function(e,t,r){r.d(t,{BX:function(){return d},N6:function(){return u},Xq:function(){return i},q7:function(){return l}});var n=r(74165),s=r(15861),a=r(74569),c=r.n(a),o=r(48145),i=function(e,t,r){return function(){var a=(0,s.Z)((0,n.Z)().mark((function s(a,i){var u,l;return(0,n.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("".concat(o.b,"/products/").concat(e));case 2:u=n.sent,l=u.data,a({type:"cart_add_item",payload:{product:l._id,name:l.name,price:l.price,countInStock:l.countInStock,images:l.images,qty:t,userId:r}}),localStorage.setItem("cartItems",JSON.stringify(i().cart.cartItems));case 6:case"end":return n.stop()}}),s)})));return function(e,t){return a.apply(this,arguments)}}()},u=function(e){return function(){var t=(0,s.Z)((0,n.Z)().mark((function t(r,s){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r({type:"cart_remove_item",payload:e}),localStorage.removeItem("cartItems"),localStorage.removeItem("shippingAddress"),localStorage.removeItem("paymentMethod"),localStorage.removeItem("phoneNumber");case 5:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()},l=function(e){return function(){var t=(0,s.Z)((0,n.Z)().mark((function t(r){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r({type:"cart_shipping_address",payload:e}),localStorage.setItem("shippingAddress",JSON.stringify(e));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=(0,s.Z)((0,n.Z)().mark((function t(r){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r({type:"cart_payment_method",payload:e}),localStorage.setItem("paymentMethod",JSON.stringify(e));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},72058:function(e,t,r){r.d(t,{I6:function(){return u},Ir:function(){return p},SK:function(){return m},nM:function(){return d},ry:function(){return l},tr:function(){return i}});var n=r(74165),s=r(15861),a=r(74569),c=r.n(a),o=r(48145),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(){var r=(0,s.Z)((0,n.Z)().mark((function r(s){var a,i;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,s({type:"product_list_request"}),r.next=4,c().get("".concat(o.b,"/products?keyword=").concat(e,"&pageNumber=").concat(t));case 4:a=r.sent,i=a.data,s({type:"product_list_success",payload:i}),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),s({type:"product_list_fail",payload:r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message});case 12:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e){return r.apply(this,arguments)}}()},u=function(e){return function(){var t=(0,s.Z)((0,n.Z)().mark((function t(r){var s,a;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:"product_detail_request"}),t.next=4,c().get("".concat(o.b,"/products/").concat(e));case 4:s=t.sent,a=s.data,r({type:"product_detail_success",payload:a}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),r({type:"product_detail_fail",payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},l=function(e){return function(){var t=(0,s.Z)((0,n.Z)().mark((function t(r,s){var a,i,u,l,d;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:"product_create_request"}),a=s(),i=a.user,u={headers:{"Content-Type":"Application/json",authToken:"".concat(i.token)}},t.next=6,c().post("".concat(o.b,"/products"),e,u);case 6:l=t.sent,d=l.data,r({type:"product_create_success",payload:d}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),r({type:"product_create_fail",payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,r){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=(0,s.Z)((0,n.Z)().mark((function t(r,s){var a,i,u,l,d;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:"product_update_request"}),a=s(),i=a.user,u={headers:{"Content-Type":"Application/json",authToken:"".concat(i.token)}},t.next=6,c().put("".concat(o.b,"/products/").concat(e._id),e,u);case 6:l=t.sent,d=l.data,r({type:"product_update_success",payload:d}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),r({type:"product_update_fail",payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,r){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=(0,s.Z)((0,n.Z)().mark((function t(r,s){var a,i,u;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:"product_delete_request"}),a=s(),i=a.user,u={headers:{authtoken:"".concat(i.token)}},t.next=6,c().delete("".concat(o.b,"/products/").concat(e),u);case 6:r({type:"product_delete_success"}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),r({type:"product_delete_fail",payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,r){return t.apply(this,arguments)}}()},m=function(e,t){return function(){var r=(0,s.Z)((0,n.Z)().mark((function r(s,a){var i,u,l;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,s({type:"product_reviews_request"}),i=a(),u=i.user,l={headers:{"Content-Type":"application/json",authtoken:"".concat(u.token)}},r.next=6,c().post("".concat(o.b,"/products/rating/").concat(e),t,l);case 6:s({type:"product_reviews_success"}),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),s({type:"product_reviews_fail",payload:r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message});case 12:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e,t){return r.apply(this,arguments)}}()}},32993:function(e,t,r){r.d(t,{Ih:function(){return i},h6:function(){return u}});var n=r(74165),s=r(15861),a=r(74569),c=r.n(a),o=r(48145),i=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t,r){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().put("".concat(o.b,"/wishlist/").concat(t),{},{headers:{authtoken:r}});case 2:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),u=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t,r){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().post("".concat(o.b,"/wishlist/"),{productId:t},{headers:{authtoken:r}});case 2:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},72232:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=r(70885),s=r(72791),a=r(91523),c=r(16030),o=r(30577),i=r(72058),u=r(69817),l=r(32993),d=r(56355),p=r(7692),m=r(16856),f=r(80184),x=function(e){var t=e.rating,r=e.reviews;return(0,f.jsxs)("div",{className:"rating",children:[(0,f.jsxs)("span",{children:[" ",(0,f.jsx)("i",{className:t>=1?"fas fa-star":t>=.5?"fas fa-star-half-alt":"far fa-star"})," "]}),(0,f.jsxs)("span",{children:[" ",(0,f.jsx)("i",{className:t>=2?"fas fa-star":t>=1.5?"fas fa-star-half-alt":"far fa-star"})," "]}),(0,f.jsxs)("span",{children:[" ",(0,f.jsx)("i",{className:t>=3?"fas fa-star":t>=2.5?"fas fa-star-half-alt":"far fa-star"})," "]}),(0,f.jsxs)("span",{children:[" ",(0,f.jsx)("i",{className:t>=4?"fas fa-star":t>=3.5?"fas fa-star-half-alt":"far fa-star"})," "]}),(0,f.jsxs)("span",{children:[" ",(0,f.jsx)("i",{className:t>=5?"fas fa-star":t>=4.5?"fas fa-star-half-alt":"far fa-star"})," "]}),(0,f.jsxs)("span",{children:[" ",r&&r," ",r&&"Reviews"," "]})]})},h=function(e){var t=e.match,r=e.history,h=(0,s.useState)(1),g=(0,n.Z)(h,2),y=g[0],v=g[1],j=(0,s.useState)(0),b=(0,n.Z)(j,2),w=b[0],k=b[1],N=(0,s.useState)(""),_=(0,n.Z)(N,2),Z=_[0],I=_[1],S=(0,c.I0)(),q=(0,c.v9)((function(e){return e.productDetail})),A=q.product,C=q.loading,R=q.error,D=(0,c.v9)((function(e){return e.productReviews})),P=D.loading,F=D.error,T=D.success,U=(0,c.v9)((function(e){return e.user}));A.images;(0,s.useEffect)((function(){T&&(alert("Review Submitd !"),k(0),I(""),S({type:"product_review_reset"})),S((0,i.I6)(t.params.id))}),[S,t,T]);return(0,f.jsx)(f.Fragment,{children:C?(0,f.jsx)("p",{children:"loading..."}):R?o.Am.error("".concat(R)):(0,f.jsx)("section",{children:(0,f.jsxs)("div",{className:"relative max-w-screen-xl px-4 py-8 mx-auto",children:[(0,f.jsx)("div",{className:"py-5",children:(0,f.jsx)(a.rU,{to:"/",children:(0,f.jsx)(d.xPU,{color:"blue"})})}),(0,f.jsxs)("div",{className:"grid items-start grid-cols-1 gap-8 md:grid-cols-2",children:[(0,f.jsxs)("div",{className:"grid grid-cols-2 gap-4 md:grid-cols-1",children:[(0,f.jsx)("img",{alt:"Les Paul",src:A&&A.images&&A.images&&A.images[0].url,className:"object-cover w-full aspect-square rounded-xl"}),A&&A.images&&A.images.length>1&&A.images.map((function(e){return(0,f.jsx)("div",{className:"grid grid-cols-2 gap-4 lg:mt-4",children:(0,f.jsx)("img",{alt:"Les Paul",src:e.url,className:"object-cover w-full aspect-square rounded-xl"})},e.public_id)}))]}),(0,f.jsxs)("div",{className:"sticky top-0",children:[(0,f.jsxs)("div",{className:"flex justify-between mt-8",children:[(0,f.jsxs)("div",{className:"max-w-[35ch]",children:[(0,f.jsx)("h1",{className:"text-2xl font-bold",children:A.name}),(0,f.jsxs)(a.rU,{to:"/category/".concat(A.category),className:"mt-0.5 text-sm",children:[" ",A.category]}),(0,f.jsx)("br",{}),A.category&&A.categoryName&&(0,f.jsxs)(a.rU,{to:"/category/".concat(A.category),className:"mt-0.5 text-sm",children:[" ",A.category]}),(0,f.jsxs)("div",{className:"border-b border-t my-2 py-1 border-gray-200",children:[(0,f.jsxs)("p",{to:"/category/".concat(A.category),className:"mt-0.5 text-xl  ",children:["Brand : ",(0,f.jsxs)("strong",{children:[" ",A.brand," "]})]}),(0,f.jsxs)("p",{to:"/category/".concat(A.category),className:"mt-0.5 text-xl  ",children:["Stock :"," ",(0,f.jsxs)("strong",{children:[A.countInStock>0?"In Stock":"Out Of Stock"," "]})]})]}),(0,f.jsx)("div",{className:"border-b border-t my-2 py-1 border-gray-200",children:(0,f.jsx)(x,{rating:A.rating,reviews:A.numReviews})})]}),(0,f.jsxs)("p",{className:"text-lg font-bold",children:[" ",A.price," PKR"]})]}),(0,f.jsx)("details",{className:"group relative mt-4 [&_summary::-webkit-details-marker]:hidden",children:(0,f.jsx)("summary",{className:"block",children:(0,f.jsx)("div",{children:(0,f.jsx)("div",{className:"prose max-w-none group-open:hidden",children:(0,f.jsx)("p",{children:A.description})})})})}),(0,f.jsx)("form",{className:"mt-8",children:(0,f.jsxs)("div",{className:"flex mt-8",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("label",{for:"quantity",className:"sr-only",children:A.countInStock}),(0,f.jsx)("input",{type:"number",as:"select",value:y,onChange:function(e){return v(e.target.value)},min:"1",className:"w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"})]}),U&&!U.isAdmin&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("button",{type:"submit",onClick:function(e){return function(e){e.preventDefault(),U&&U._id?y>A.countInStock?o.Am.error("We have just ".concat(A.countInStock," products")):(r.push("/cart"),S((0,u.Xq)(t.params.id,y,U._id))):o.Am.info("For add to cart, You must be login")}(e)},style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",gap:"10px"},disabled:0===A.countInStock,className:"block px-5 py-3 ml-3 text-xs font-medium text-white bg-indigo-600 rounded hover:bg-indigo-500",children:["Add to Cart ",(0,f.jsx)(p.ByR,{})]}),(0,f.jsxs)("button",{type:"submit",onClick:function(e){return function(e){e.preventDefault(),U?(0,l.h6)(t.params.id,U.token).then((function(e){o.Am.success("Added to wishhlist")})):o.Am.info("Login First")}(e)},style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",gap:"10px"},className:"block px-5 py-3 ml-3 text-xs font-medium text-white bg-pink-600 rounded hover:bg-pink-500",children:["Wishlist ",(0,f.jsx)(p.kTx,{})]})]}),(0,f.jsx)("br",{}),(0,f.jsx)("hr",{}),(0,f.jsx)("br",{})]})}),(0,f.jsxs)("div",{className:"bg-gray-100 px-5 mt-10 py-10",children:[(0,f.jsxs)("h2",{className:"text-xl",style:{display:"flex",alignItems:"center",gap:"5px"},children:["Products Reviews ",(0,f.jsx)(m.b12,{color:"blue"})," "]}),(0,f.jsx)("hr",{}),F&&(0,f.jsx)("p",{className:"text-red-700",children:F}),U?(0,f.jsxs)(f.Fragment,{children:[" ",(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),S((0,i.SK)(t.params.id,{rating:w,comment:Z}))},children:[P&&(0,f.jsx)("p",{className:"text-green-700",children:" Loading... "}),(0,f.jsxs)("div",{className:"relative mb-4",children:[(0,f.jsx)("label",{for:"full-name",className:"leading-7 text-sm text-gray-600",children:"Rate the product"}),(0,f.jsxs)("select",{name:"rating",id:"rating",as:"select",value:w,onChange:function(e){return k(e.target.value)},required:!0,className:"w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",children:[(0,f.jsx)("option",{value:"",children:" select..."}),(0,f.jsx)("option",{value:"1",children:" 1 - Poor "}),(0,f.jsx)("option",{value:"2",children:" 2 - Fair "}),(0,f.jsx)("option",{value:"3",children:" 3 - Good "}),(0,f.jsx)("option",{value:"4",children:" 4 - Very Good "}),(0,f.jsx)("option",{value:"5",children:" 5 - Excellent "})]})]}),(0,f.jsxs)("div",{className:"relative mb-4",children:[(0,f.jsx)("label",{for:"full-name",className:"leading-7 text-sm text-gray-600",children:"What you say about the product ?"}),(0,f.jsx)("textarea",{as:"textarea",row:"3",value:Z,onChange:function(e){return I(e.target.value)},className:"w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"})]}),(0,f.jsx)("button",{type:"submit",className:"text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg",children:"Save"})]})]}):(0,f.jsxs)("p",{className:"text-indigo-700",children:[" ","Please login first!"," ",(0,f.jsxs)(a.rU,{to:"/login",className:"mx-2",children:[" ","Login"," "]})," "]})]}),(0,f.jsxs)("div",{className:"bg-gray-100 px-5 mt-10 py-10",children:[(0,f.jsxs)("h2",{className:"text-xl",style:{display:"flex",alignItems:"center",gap:"5px"},children:["User Comments ",(0,f.jsx)(p.XYE,{color:"blue"})," "]}),(0,f.jsx)("hr",{}),(0,f.jsx)("div",{class:"p-2  w-full",children:A&&A.reviews.map((function(e){return(0,f.jsxs)("div",{className:"h-full flex items-center border-gray-200 border p-4 rounded-lg",children:[(0,f.jsx)(p.EDj,{className:"mx-2",size:50,color:"blue"}),(0,f.jsxs)("div",{className:"flex-grow",children:[(0,f.jsxs)("h2",{className:"text-gray-900 title-font font-medium",children:[e.name," ",e.createdAt.substring(0,10)]}),(0,f.jsxs)("p",{class:"text-gray-500 text-sm",children:[" ",e.createdAt.substring(0,10)]}),(0,f.jsxs)("p",{class:"text-gray-700 text-lg",children:[" ",e.comment]}),(0,f.jsx)(x,{rating:e.rating})]})]},e._id)}))})]})]})]})]})})})}}}]);
//# sourceMappingURL=232.13795723.chunk.js.map