(self.webpackChunknew_client=self.webpackChunknew_client||[]).push([[542],{69930:function(e,t,r){"use strict";r.d(t,{Jj:function(){return d},QQ:function(){return u},Zn:function(){return i},jO:function(){return p}});var n=r(74165),a=r(15861),s=r(74569),c=r.n(s),o=r(48145),i=function(e,t){return function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r,a){var s,i,u,d,p;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:"report_create_request"}),s=a(),i=s.user,u={headers:{"Content-Type":"application/json",authtoken:i.token?"".concat(i.token):""}},t.next=6,c().post("".concat(o.b,"/reports"),e,u);case 6:d=t.sent,p=d.data,r({type:"report_create_success",payload:p}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),r({type:"report_create_fail",payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,r){return t.apply(this,arguments)}}()},u=function(){return function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"report_list_request"}),e.next=4,c().get("".concat(o.b,"/reports"));case 4:r=e.sent,a=r.data,t({type:"report_list_success",payload:a}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:"report_list_fail",payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},d=function(e){return function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r,a){var s,i,u,d,p;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:"report_confirm_request"}),s=a(),i=s.user,u={headers:{authtoken:i.token?"".concat(i.token):""}},t.next=6,c().put("".concat(o.b,"/reports/").concat(e),{},u);case 6:d=t.sent,p=d.data,r({type:"report_confirm_success",payload:p}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),r({type:"report_confirm_fail",payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,r){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r,a){var s,i,u,d;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:"order_deliver_delete_request"}),s=a(),i=s.user,u={headers:{authtoken:i.token?"".concat(i.token):""}},t.next=6,c().delete("".concat(o.b,"/reports/").concat(e),u);case 6:d=t.sent,d.data,r({type:"order_deliver_delete_success"}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),r({type:"order_deliver_delete_fail",payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,r){return t.apply(this,arguments)}}()}},69817:function(e,t,r){"use strict";r.d(t,{BX:function(){return p},N6:function(){return u},Xq:function(){return i},q7:function(){return d}});var n=r(74165),a=r(15861),s=r(74569),c=r.n(s),o=r(48145),i=function(e,t,r){return function(){var s=(0,a.Z)((0,n.Z)().mark((function a(s,i){var u,d;return(0,n.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("".concat(o.b,"/products/").concat(e));case 2:u=n.sent,d=u.data,s({type:"cart_add_item",payload:{product:d._id,name:d.name,price:d.price,countInStock:d.countInStock,images:d.images,qty:t,userId:r}}),localStorage.setItem("cartItems",JSON.stringify(i().cart.cartItems));case 6:case"end":return n.stop()}}),a)})));return function(e,t){return s.apply(this,arguments)}}()},u=function(e){return function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r,a){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r({type:"cart_remove_item",payload:e}),localStorage.removeItem("cartItems"),localStorage.removeItem("shippingAddress"),localStorage.removeItem("paymentMethod"),localStorage.removeItem("phoneNumber");case 5:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r({type:"cart_shipping_address",payload:e}),localStorage.setItem("shippingAddress",JSON.stringify(e));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r({type:"cart_payment_method",payload:e}),localStorage.setItem("paymentMethod",JSON.stringify(e));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},41713:function(e,t,r){"use strict";r.d(t,{Du:function(){return l},LV:function(){return i},Nc:function(){return d},TG:function(){return p},h:function(){return m},kA:function(){return h},or:function(){return f},s$:function(){return u}});var n=r(74165),a=r(15861),s=r(74569),c=r.n(s),o=r(48145),i=(r(69817),function(e){return function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r,a){var s,i,u,d,p;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:"order_create_request"}),s=a(),i=s.user,u={headers:{"Content-Type":"Application/json",authtoken:"".concat(i.token)}},t.next=6,c().post("".concat(o.b,"/orders/"),e,u);case 6:d=t.sent,p=d.data,r({type:"order_create_success",payload:p}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),r({type:"order_create_fail",payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,r){return t.apply(this,arguments)}}()}),u=function(e){return function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r,a){var s,i,u,d,p;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:"order_details_request"}),s=a(),i=s.user,u={headers:{authtoken:"".concat(i.token)}},t.next=6,c().get("".concat(o.b,"/orders/").concat(e),u);case 6:d=t.sent,p=d.data,r({type:"order_details_success",payload:p}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),r({type:"order_details_fail",payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,r){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r,a){var s,i,u,d;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,r({type:"order_pay_request"}),s=a(),i=s.user,u={headers:{"Content-Type":"application/json",authtoken:i.token?"".concat(i.token):""}},!i.token){t.next=10;break}return t.next=7,c().put("".concat(o.b,"/orders/").concat(e,"/confirm"),{},u);case 7:d=t.sent,d.data,r({type:"order_pay_success"});case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),r({type:"order_pay_fail",payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,r){return t.apply(this,arguments)}}()},p=function(){return function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a,s,i,u,d;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"my_order_request"}),!1,a=r(),s=a.user,i={headers:{authtoken:s.token?"".concat(s.token):""}},e.next=7,c().post("".concat(o.b,"/orders/myorders"),{email:s.email},i);case 7:u=e.sent,d=u.data,t({type:"my_order_success",payload:d}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),t({type:"my_order_fail",payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,r){return e.apply(this,arguments)}}()},l=function(){return function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a,s,i,u,d;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"order_list_request"}),!1,a=r(),s=a.user,i={headers:{authtoken:s.token?"".concat(s.token):""}},e.next=7,c().get("".concat(o.b,"/orders/"),i);case 7:u=e.sent,d=u.data,t({type:"order_list_success",payload:d}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),t({type:"order_list_fail",payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,r){return e.apply(this,arguments)}}()},f=function(e){return function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r,a){var s,i,u,d,p;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:"order_deliver_request"}),!1,s=a(),i=s.user,u={headers:{authtoken:i.token?"".concat(i.token):""}},t.next=7,c().put("".concat(o.b,"/orders/").concat(e,"/deliver/pay"),{},u);case 7:d=t.sent,p=d.data,r({type:"order_deliver_success",payload:p}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),r({type:"order_deliver_fail",payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,r){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r,a){var s,i,u,d;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:"order_deliver_delete_request"}),!1,s=a(),i=s.user,u={headers:{authtoken:i.token?"".concat(i.token):""}},t.next=7,c().delete("".concat(o.b,"/orders/").concat(e),u);case 7:d=t.sent,d.data,r({type:"order_deliver_delete_success"}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),r({type:"order_deliver_delete_fail",payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,r){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r,a){var s,i,u,d;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:"myorder_delete_request"}),!1,s=a(),i=s.user,u={headers:{authtoken:i.token?"".concat(i.token):""}},t.next=7,c().delete("".concat(o.b,"/orders/myorders/").concat(e),u);case 7:d=t.sent,d.data,r({type:"myorder_delete_success"}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),r({type:"myorder_delete_fail",payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,r){return t.apply(this,arguments)}}()}},72058:function(e,t,r){"use strict";r.d(t,{I6:function(){return u},Ir:function(){return l},SK:function(){return f},nM:function(){return p},ry:function(){return d},tr:function(){return i}});var n=r(74165),a=r(15861),s=r(74569),c=r.n(s),o=r(48145),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(){var r=(0,a.Z)((0,n.Z)().mark((function r(a){var s,i;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,a({type:"product_list_request"}),r.next=4,c().get("".concat(o.b,"/products?keyword=").concat(e,"&pageNumber=").concat(t));case 4:s=r.sent,i=s.data,a({type:"product_list_success",payload:i}),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),a({type:"product_list_fail",payload:r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message});case 12:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e){return r.apply(this,arguments)}}()},u=function(e){return function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){var a,s;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:"product_detail_request"}),t.next=4,c().get("".concat(o.b,"/products/").concat(e));case 4:a=t.sent,s=a.data,r({type:"product_detail_success",payload:s}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),r({type:"product_detail_fail",payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r,a){var s,i,u,d,p;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:"product_create_request"}),s=a(),i=s.user,u={headers:{"Content-Type":"Application/json",authToken:"".concat(i.token)}},t.next=6,c().post("".concat(o.b,"/products"),e,u);case 6:d=t.sent,p=d.data,r({type:"product_create_success",payload:p}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),r({type:"product_create_fail",payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,r){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r,a){var s,i,u,d,p;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:"product_update_request"}),s=a(),i=s.user,u={headers:{"Content-Type":"Application/json",authToken:"".concat(i.token)}},t.next=6,c().put("".concat(o.b,"/products/").concat(e._id),e,u);case 6:d=t.sent,p=d.data,r({type:"product_update_success",payload:p}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),r({type:"product_update_fail",payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,r){return t.apply(this,arguments)}}()},l=function(e){return function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r,a){var s,i,u;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:"product_delete_request"}),s=a(),i=s.user,u={headers:{authtoken:"".concat(i.token)}},t.next=6,c().delete("".concat(o.b,"/products/").concat(e),u);case 6:r({type:"product_delete_success"}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),r({type:"product_delete_fail",payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,r){return t.apply(this,arguments)}}()},f=function(e,t){return function(){var r=(0,a.Z)((0,n.Z)().mark((function r(a,s){var i,u,d;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,a({type:"product_reviews_request"}),i=s(),u=i.user,d={headers:{"Content-Type":"application/json",authtoken:"".concat(u.token)}},r.next=6,c().post("".concat(o.b,"/products/rating/").concat(e),t,d);case 6:a({type:"product_reviews_success"}),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),a({type:"product_reviews_fail",payload:r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message});case 12:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e,t){return r.apply(this,arguments)}}()}},18711:function(e,t,r){"use strict";r(72791);var n=r(54270),a=r(80184);t.Z=function(e){var t=e.title;return(0,a.jsxs)(n.q,{children:[(0,a.jsx)("meta",{charSet:"utf-8"}),(0,a.jsx)("title",{children:t}),(0,a.jsx)("meta",{name:"robots",content:"noindex, follow"}),(0,a.jsx)("meta",{name:"description",content:"Syed Hadi Raza  \u2013 Ecommerce Project"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"})]})}},7261:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return y}});var n=r(30577),a=r(91523),s=r(72791),c=r(7860),o=r(60158),i=r(80184),u=c.StyleSheet.create({body:{paddingTop:35,paddingBottom:65,paddingHorizontal:35},title:{fontSize:24,textAlign:"center"},author:{fontSize:12,textAlign:"center",marginBottom:40},subtitle:{fontSize:18,margin:12},text:{margin:12,fontSize:14,textAlign:"justify"},image:{marginVertical:15,marginHorizontal:100},header:{fontSize:12,marginBottom:20,textAlign:"center",color:"grey"},footer:{padding:"100px",fontSize:12,marginBottom:20,textAlign:"center",color:"grey"},pageNumber:{position:"absolute",fontSize:12,bottom:30,left:0,right:0,textAlign:"center",color:"grey"}}),d=function(e){var t=e.order;return(0,i.jsx)(c.Document,{children:(0,i.jsxs)(c.Page,{style:u.body,children:[(0,i.jsxs)(c.Text,{style:u.header,fixed:!0,children:["~ ",(new Date).toLocaleString()," ~"]}),(0,i.jsx)(c.Text,{style:u.title,children:"Order Invoice"}),(0,i.jsx)(c.Text,{style:u.author,children:"React Redux Ecommerce"}),(0,i.jsx)(c.Text,{style:u.subtitle,children:"Order Summary"}),(0,i.jsx)(o.Table,{children:(0,i.jsxs)(o.TableHeader,{children:[(0,i.jsx)(o.TableCell,{children:"Product Name"}),(0,i.jsx)(o.TableCell,{children:"Price"}),(0,i.jsx)(o.TableCell,{children:"Quantity"})]})}),(0,i.jsx)(o.Table,{data:t.orderItems,children:(0,i.jsxs)(o.TableBody,{children:[(0,i.jsx)(o.DataTableCell,{getContent:function(e){return e.name}}),(0,i.jsx)(o.DataTableCell,{getContent:function(e){return"PKR  ".concat(e.price)}}),(0,i.jsx)(o.DataTableCell,{getContent:function(e){return e.qty}})]})}),(0,i.jsxs)(c.Text,{style:u.text,children:[(0,i.jsxs)(c.Text,{children:["Date: ","               ",new Date(1e3*t.createdAt).toLocaleString()]}),"\n","\n",(0,i.jsxs)(c.Text,{children:["Order Id: ","         ",t._id]}),"\n","\n",(0,i.jsxs)(c.Text,{children:["Total Items: ","         ",t.totalItems]}),"\n","\n",(0,i.jsxs)(c.Text,{children:["Order Status: ","  ",t.isDelivered?"delivered":"not delivered yet"]}),"\n","\n",(0,i.jsxs)(c.Text,{children:["Payment method: ","       ",t.paymentMethod]}),"\n","\n",(0,i.jsxs)(c.Text,{children:["Tax Price: PKR ",t.taxPrice]}),"\n","\n",(0,i.jsxs)(c.Text,{children:["Total Price: PKR ",t.taxPrice," + PKR ",t.totalPrice]}),"\n","\n","\n",(0,i.jsxs)(c.Text,{children:["Address: ","       ",t.shippingAddress.address]}),"\n","\n",(0,i.jsxs)(c.Text,{children:["Phone Number: ","  ",t.shippingAddress.phoneNumber]}),"\n","\n"]}),(0,i.jsx)(c.Text,{style:u.footer,children:" ~ Thank you for shopping with us ~ "})]})})},p=r(16030),l=r(72058),f=r(41713),m=r(69930),h=r(23853),x=r(18711),y=function(){var e,t=(0,p.v9)((function(e){return e.myOrder})),r=t.loading,o=t.error,u=t.orders,y=(0,p.v9)((function(e){return e.myOrderDelete})),v=(y.loading,y.error,y.success),g=(0,p.v9)((function(e){return e.user})),_=(0,p.v9)((function(e){return e.reportCreate})),j=_.error,k=_.loading,w=_.success,b=(0,p.v9)((function(e){return e.reportList})),Z=b.loading,N=b.reports,T=(b.error,(0,p.I0)());(0,s.useEffect)((function(){T((0,f.TG)()),T((0,l.tr)()),T((0,m.QQ)())}),[T,g,v,w]);var I=function(t){var r=!!(new Date(new Date-new Date(t.createdAt)).getDate()-1<=7&&t.isDelivered),n=!t.isDelivered&&!0,s=t.reported?"Reported":r?"Return":n?"Cancel":"",c={userId:t.user,orderId:t._id,createdAt:t.createdAt,isDelivered:t.isDelivered,alreadyReported:!0,typeReport:s};return e=!Z&&N.find((function(e){return e.orderId===t._id})),(0,i.jsx)("div",{className:"overflow-x-auto",children:(0,i.jsxs)("table",{className:"min-w-full divide-y divide-gray-200 text-sm",children:[(0,i.jsx)("thead",{className:"bg-gray-100",children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{className:"whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900",children:"ID"}),(0,i.jsx)("th",{className:"whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900",children:"Total"}),(0,i.jsx)("th",{className:"whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900",children:"Tax Price"}),(0,i.jsx)("th",{className:"whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900",children:"Date"}),(0,i.jsx)("th",{className:"whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900",children:"Items"}),t.orderItems.map((function(e){return(0,i.jsx)("th",{className:"whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900",children:"Products"},e._id)}))]})}),(0,i.jsxs)("tbody",{className:"divide-y divide-gray-200",children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{className:"whitespace-nowrap px-4 py-2 font-medium text-gray-900",children:(0,i.jsx)("b",{children:t._id})}),(0,i.jsx)("td",{className:"whitespace-nowrap px-4 py-2 text-gray-700",children:t.totalPrice}),(0,i.jsx)("td",{className:"whitespace-nowrap px-4 py-2 text-gray-700",children:t.taxPrice}),(0,i.jsx)("td",{className:"whitespace-nowrap px-4 py-2 text-gray-700",children:t.createdAt}),(0,i.jsxs)("td",{className:"whitespace-nowrap px-4 py-2 text-gray-700",children:[t.orderItems.length," "]}),t.orderItems.map((function(e){return(0,i.jsxs)("td",{children:[e.name," "]})}))]}),(0,i.jsx)("thead",{classNameName:"thead-light",children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"col",children:"ID"}),(0,i.jsx)("th",{scope:"col",children:"Total"}),(0,i.jsx)("th",{scope:"col",children:"Tax Price"}),(0,i.jsx)("th",{scope:"col",children:"Date"}),(0,i.jsx)("th",{scope:"col",children:"Items"}),t.orderItems.map((function(e){return(0,i.jsx)("th",{scope:"col",children:"Products"},e._id)}))]})}),(0,i.jsx)("tbody",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:t._id})}),(0,i.jsx)("td",{children:t.totalPrice}),(0,i.jsx)("td",{children:t.taxPrice}),(0,i.jsx)("td",{children:t.createdAt}),(0,i.jsxs)("td",{children:[t.orderItems.length," "]}),t.orderItems.map((function(e){return(0,i.jsxs)("td",{children:[e.name," "]})}))]})}),(0,i.jsxs)("button",{classNameName:"btn btn-sm btn-block btn-outline-primary mt-2",onClick:function(){window.confirm("Are You Sure")&&T((0,m.Zn)(c))},disabled:e&&!0,children:[(0,i.jsx)(a.rU,{children:s})," ",k&&(0,i.jsx)("p",{children:"Loading...."})]}),e&&(0,i.jsxs)("strong",{classNameName:"text-dark",children:[" ",e.confirmation?"Report has been confrimed, check your email":"Your Report is not confirm yet"," "]}),e&&e.confirmation&&(0,i.jsx)("button",{classNameName:"btn btn-sm btn-block btn-outline-danger mt-2",onClick:function(){return e=t._id,void(window.confirm("This may help you in future")&&T((0,f.kA)(e)));var e},children:"Delete"})]})]})})},S=function(e){return(0,i.jsxs)(c.PDFDownloadLink,{document:(0,i.jsx)(d,{order:e}),fileName:"invoice.pdf",className:"group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500",children:[(0,i.jsx)("span",{class:"absolute left-0 -translate-x-full transition-transform group-hover:translate-x-4",children:(0,i.jsx)(h._hL,{})}),(0,i.jsx)("span",{class:"text-sm font-medium transition-all group-hover:ml-4",children:"Download"})]})};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x.Z,{title:"Orders"}),(0,i.jsx)("header",{"aria-label":"Page Header",className:"bg-gray-50",children:(0,i.jsx)("div",{className:"mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8",children:(0,i.jsxs)("div",{className:"mt-8 pb-10",children:[(0,i.jsx)("h1",{className:"text-2xl font-bold text-gray-900 sm:text-3xl",children:"All your orders"}),(0,i.jsx)("p",{className:"mt-1.5 text-sm text-gray-500",children:"Search Products, Delete Products, Edit Products Keep it up! \ud83d\ude80"})]})})}),j&&n.Am.error(j),(0,i.jsx)("div",{classNameName:"row",children:(0,i.jsxs)("div",{classNameName:"col text-center",children:[j&&(0,i.jsx)("h4",{children:j}),r?(0,i.jsx)("p",{children:"loading..."}):o?n.Am.warning("Wait..."):0===u.length?(0,i.jsx)("p",{children:"No ordered yet"}):u.map((function(e,t){return(0,i.jsxs)("div",{className:"container mx-auto",children:[I(e),(0,i.jsx)("div",{className:"text-center",children:S(e)})]},t)}))]})})]})}},19527:function(){},69331:function(){},52361:function(){},94616:function(){}}]);
//# sourceMappingURL=542.8bfd89dd.chunk.js.map