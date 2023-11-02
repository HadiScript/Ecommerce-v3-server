"use strict";(self.webpackChunknew_client=self.webpackChunknew_client||[]).push([[535],{69930:function(e,r,t){t.d(r,{Jj:function(){return d},QQ:function(){return i},Zn:function(){return l},jO:function(){return u}});var s=t(74165),n=t(15861),a=t(74569),c=t.n(a),o=t(48145),l=function(e,r){return function(){var r=(0,n.Z)((0,s.Z)().mark((function r(t,n){var a,l,i,d,u;return(0,s.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t({type:"report_create_request"}),a=n(),l=a.user,i={headers:{"Content-Type":"application/json",authtoken:l.token?"".concat(l.token):""}},r.next=6,c().post("".concat(o.b,"/reports"),e,i);case 6:d=r.sent,u=d.data,t({type:"report_create_success",payload:u}),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(0),t({type:"report_create_fail",payload:r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message});case 14:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(e,t){return r.apply(this,arguments)}}()},i=function(){return function(){var e=(0,n.Z)((0,s.Z)().mark((function e(r){var t,n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r({type:"report_list_request"}),e.next=4,c().get("".concat(o.b,"/reports"));case 4:t=e.sent,n=t.data,r({type:"report_list_success",payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),r({type:"report_list_fail",payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r){return e.apply(this,arguments)}}()},d=function(e){return function(){var r=(0,n.Z)((0,s.Z)().mark((function r(t,n){var a,l,i,d,u;return(0,s.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t({type:"report_confirm_request"}),a=n(),l=a.user,i={headers:{authtoken:l.token?"".concat(l.token):""}},r.next=6,c().put("".concat(o.b,"/reports/").concat(e),{},i);case 6:d=r.sent,u=d.data,t({type:"report_confirm_success",payload:u}),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(0),t({type:"report_confirm_fail",payload:r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message});case 14:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(e,t){return r.apply(this,arguments)}}()},u=function(e){return function(){var r=(0,n.Z)((0,s.Z)().mark((function r(t,n){var a,l,i,d;return(0,s.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t({type:"order_deliver_delete_request"}),a=n(),l=a.user,i={headers:{authtoken:l.token?"".concat(l.token):""}},r.next=6,c().delete("".concat(o.b,"/reports/").concat(e),i);case 6:d=r.sent,d.data,t({type:"order_deliver_delete_success"}),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(0),t({type:"order_deliver_delete_fail",payload:r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message});case 14:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(e,t){return r.apply(this,arguments)}}()}},94899:function(e,r,t){t(72791);var s=t(91523),n=t(16856),a=t(39126),c=t(56355),o=t(3479),l=t(58617),i=t(80184);r.Z=function(){return(0,i.jsx)("header",{className:"text-gray-600 body-font py-10",children:(0,i.jsx)("div",{className:"container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center",children:(0,i.jsxs)("nav",{className:"md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400\tflex flex-wrap items-center text-base justify-center",children:[(0,i.jsxs)(s.rU,{className:"mr-5 hover:text-gray-900 inline-flex items-center",to:"/admin/create",children:["Create Products",(0,i.jsx)(n.Doq,{className:"mx-1",color:"blue"})]}),(0,i.jsxs)(s.rU,{className:"mr-5 hover:text-gray-900 inline-flex items-center",to:"/admin/orders",children:["Orders",(0,i.jsx)(a.SoK,{className:"mx-1",color:"blue"})]}),(0,i.jsxs)(s.rU,{className:"mr-5 hover:text-gray-900 inline-flex items-center",to:"/admin/products",children:["Products",(0,i.jsx)(o.pCw,{className:"mx-1",color:"blue"})]}),(0,i.jsxs)(s.rU,{className:"mr-5 hover:text-gray-900 inline-flex items-center",to:"/admin/users",children:["Users",(0,i.jsx)(c.I$,{className:"mx-1",color:"blue"})]}),(0,i.jsxs)(s.rU,{className:"mr-5 hover:text-gray-900 inline-flex items-center",to:"/admin/suppliers",children:["Suppliers",(0,i.jsx)(c.ghb,{className:"mx-1",color:"blue"})]}),(0,i.jsxs)(s.rU,{className:"mr-5 hover:text-gray-900 inline-flex items-center",to:"/admin/reports",children:["Reports",(0,i.jsx)(l.rkW,{className:"mx-1",color:"blue"})]})]})})})}},1535:function(e,r,t){t.r(r);var s=t(72791),n=t(30577),a=t(91523),c=t(16030),o=t(94899),l=t(69930),i=t(80184);r.default=function(){var e=(0,c.I0)(),r=(0,c.v9)((function(e){return e.reportList})),t=r.reports,d=r.loading,u=r.error,p=(0,c.v9)((function(e){return e.reportConfirm})),x=p.success,m=p.loading,f=p.error,h=(0,c.v9)((function(e){return e.reportDelete})),g=h.success,j=(h.loading,h.error);return(0,s.useEffect)((function(){e((0,l.QQ)())}),[e,x,g]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Z,{}),f&&n.Am.error(f),j&&n.Am.error(j),(0,i.jsx)("header",{"aria-label":"Page Header",className:"bg-gray-50",children:(0,i.jsx)("div",{className:"mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8",children:(0,i.jsxs)("div",{className:"mt-8 pb-10",children:[(0,i.jsx)("h1",{className:"text-2xl font-bold text-gray-900 sm:text-3xl",children:"All Reports"}),(0,i.jsx)("p",{className:"mt-1.5 text-sm text-gray-500",children:"Search Products, Delete Products, Edit Products Keep it up! \ud83d\ude80"})]})})}),d&&(0,i.jsx)("p",{children:"loading..."}),u&&n.Am.error(u),(0,i.jsx)("section",{class:"text-gray-600 bg-gray-50 body-font",children:(0,i.jsx)("div",{class:"container px-5 mx-auto",children:(0,i.jsx)("div",{class:"flex flex-wrap -m-4",children:0===t.length?(0,i.jsx)("p",{class:"py-10",children:"No any report recieved "}):t.map((function(r){return(0,i.jsx)("div",{class:"p-4 md:w-1/2 w-full",children:(0,i.jsxs)("div",{class:"h-full bg-gray-100 p-8 rounded",children:[(0,i.jsxs)("p",{class:"leading-relaxed mb-6",children:[(0,i.jsx)("strong",{children:"Order ID"})," :",(0,i.jsx)(a.rU,{to:"/admin/order/".concat(r.orderId),children:r.orderId})]}),(0,i.jsxs)("p",{class:"leading-relaxed mb-6",children:[(0,i.jsx)("strong",{children:"Type "})," : ",r.typeReport]}),(0,i.jsxs)("p",{class:"leading-relaxed mb-6",children:[(0,i.jsx)("strong",{children:"Ordered Data "})," :",r.updatedAt.substring(0,10)]}),(0,i.jsxs)("p",{class:"leading-relaxed mb-6",children:[(0,i.jsx)("strong",{children:"Confirm "})," :"," ",r.confirmation?"Ture":"False"]}),(0,i.jsxs)("button",{class:"flex mx-auto text-white   bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg",onClick:function(){return t=r._id,e((0,l.Jj)(t)),void(x&&n.Am.success("Email has been sent to ".concat(t)));var t},children:[(0,i.jsx)("strong",{children:"Confirm it "})," : Confirmation"," ",m&&(0,i.jsx)("p",{children:"loading..."})]}),r.confirmation&&(0,i.jsxs)("button",{class:"flex mx-auto text-white   bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg",onClick:function(){return t=r._id,void(window.confirm("This may help you in futer")&&(e((0,l.jO)(t)),g&&n.Am.success("Report Removed")));var t},children:[" ","Delelte"," "]}),(0,i.jsxs)("a",{class:"inline-flex items-center",children:[(0,i.jsx)("img",{alt:"testimonial",src:"https://dummyimage.com/106x106",class:"w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"}),(0,i.jsx)("span",{class:"flex-grow flex flex-col pl-4",children:(0,i.jsx)("span",{class:"title-font font-medium text-blue-900",children:(0,i.jsx)(a.rU,{to:"/admin/user/".concat(r.userId),children:r.userId})})})]})]})})}))})})})]})}}}]);
//# sourceMappingURL=535.f37f1971.chunk.js.map