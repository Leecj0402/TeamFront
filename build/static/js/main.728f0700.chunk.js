(this["webpackJsonpreact-firebase-instagram-clone"]=this["webpackJsonpreact-firebase-instagram-clone"]||[]).push([[0],{64:function(e,a,t){},78:function(e,a,t){"use strict";t.r(a);var n=t(1),o=t(17),c=t.n(o),s=t(15),i=(t(64),t(99)),r=t(110),l=t(102),d=t(55),u=t.n(d),m=t(5),p=(t(65),t(66),t(67),m.a.initializeApp({apiKey:"AIzaSyDGzTgPsG0FStItQ7ppelV3S-yB4m86cGI",authDomain:"instagram-clone-app-ebf8a.firebaseapp.com",projectId:"instagram-clone-app-ebf8a",storageBucket:"instagram-clone-app-ebf8a.appspot.com",messagingSenderId:"42253588690",appId:"1:42253588690:web:d5c66cc81cf62c6012750b"})),j=p.firestore(),g=p.auth(),b=p.storage(),f=t(3),h=Object(i.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},large:{width:e.spacing(7),height:e.spacing(7),margin:e.spacing(2)},text:{margin:e.spacing(2)},post:{backgroundColor:"white",display:"flex",flexDirection:"column",border:"0.5px solid lightgrey",maxWidth:"500px",margin:"20px auto"},post_header:{display:"flex",alignItems:"center"},post_image:{width:"100%",maxWidth:"500px",minWidth:"500px",minHeight:"500px",objectFit:"contain",borderTop:"1px solid lightgrey",borderBottom:"1px solid lightgrey"},buttom:{display:"flex",flexDirection:"row",justifyContent:"space-between"}}}));var x=function(e){var a=e.imgUrl,t=e.username,n=e.caption,o=e.id;console.log(t,n,o);var c=h();return Object(f.jsxs)("div",{className:c.post,children:[Object(f.jsxs)("div",{className:c.post_header,children:[Object(f.jsx)(r.a,{alt:"Remy Sharp",src:"https://images.unsplash.com/photo-1611367540679-d94566094025?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW4lMjBmYWNlfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",className:c.large}),Object(f.jsx)("h3",{className:"post_userName",children:t})]}),Object(f.jsx)("img",{src:a,alt:"user avatar",className:c.post_image}),Object(f.jsxs)("div",{className:c.buttom,children:[Object(f.jsxs)("p",{className:c.text,children:[Object(f.jsxs)("strong",{children:[t,":"]})," ",n]}),Object(f.jsx)(l.a,{variant:"raised",component:"span",className:c.button,color:"secondary",onClick:function(){j.collection("posts").doc(o).delete().then((function(){console.log("Document successfully deleted!")})).catch((function(e){console.error("Error removing document: ",e)}))},children:Object(f.jsx)(u.a,{"aria-label":"delete",className:c.icon})})]})]})},O=t(106),v=t(108),y=t(104),N=t(111),w=t(103),C=Object(i.a)((function(e){return{root:{border:"0.5px solid lightgrey",padding:e.spacing(3),width:"450px",display:"flex",flexDirection:"column",margin:"0 auto",alignItems:"center"},progress:{width:120,marginLeft:e.spacing(2)},input:{width:"50%"},button:{margin:e.spacing(1)},upload:{display:"flex",flexDirection:"row",alignItems:"center",marginTop:e.spacing(2),justifyContent:"space-between"},uploadButton:{backgroundColor:"#f60257",border:"none",color:"white","&:hover":{backgroundColor:"#f75d91"}},image:{height:"150px",width:"150px",objectFit:"cover"},imageWrap:{height:"150px",width:"150px",backgroundColor:"#afafaf"}}}));function S(e){var a=e.username,t=C(),o=Object(n.useState)(""),c=Object(s.a)(o,2),i=c[0],r=c[1],d=Object(n.useState)(""),u=Object(s.a)(d,2),p=u[0],g=u[1],h=Object(n.useState)(""),x=Object(s.a)(h,2),O=(x[0],x[1],Object(n.useState)(0)),S=Object(s.a)(O,2),k=S[0],D=S[1],W=Object(n.useState)(null),F=Object(s.a)(W,2),B=F[0],I=F[1];function _(){var e=b.ref("images/".concat(p.name)).put(p);console.log("image:",p),console.log("image name:",p.name),e.on("state_changed",(function(e){var a=Math.round(e.bytesTransferred/e.totalBytes*100);D(a)}),(function(e){console.log(e),alert(e.message)}),(function(){b.ref("images").child(p.name).getDownloadURL().then((function(e){console.log("url:"+e),j.collection("posts").add({timestamp:m.a.firestore.FieldValue.serverTimestamp(),caption:i,imageUrl:e,username:a})})),D(0),r(""),g(null)}))}return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:t.root,children:[Object(f.jsx)("div",{className:t.imageWrap,children:Object(f.jsx)("img",{src:B,alt:"",className:t.image})}),Object(f.jsx)("input",{type:"file",onChange:function(e){e.target.files[0]&&(console.log("file:",e.target.files[0]),g(e.target.files[0]),function(e){b.ref("image_previews/".concat(e.name)).put(e),b.ref("images").child(e.name).getDownloadURL().then((function(e){return I(e)}))}(e.target.files[0]))},className:t.input,style:{display:"none"},id:"raised-button-file"}),Object(f.jsxs)("label",{htmlFor:"raised-button-file",children:[Object(f.jsx)("span",{children:"Add an image here \ud83d\udc49"}),Object(f.jsx)(l.a,{variant:"raised",component:"span",className:t.button,color:"secondary",children:Object(f.jsx)(w.a,{className:t.icon})})]}),Object(f.jsx)(v.a,{type:"text",placeholder:"enter a caption",value:i,onChange:function(e){return r(e.target.value)},className:t.input,color:"secondary"}),Object(f.jsxs)("div",{className:t.upload,children:[null===p||""===p?Object(f.jsx)(y.a,{variant:"outlined",onClick:_,disabled:!0,children:"upload"}):Object(f.jsx)(y.a,{variant:"outlined",onClick:_,className:t.uploadButton,children:"upload"}),Object(f.jsx)(N.a,{variant:"determinate",color:"secondary",value:k,className:t.progress})]})]})})}var k=t(105),D=t(109),W=t(107);function F(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var B=Object(i.a)((function(e){return{form:{disaply:"flex",flexDirection:"column"},paper:{display:"flex",flexDirection:"column",alignItems:"center",position:"absolute",width:250,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},box:{display:"flex",flexDirection:"column",justifyContent:"space-around"},button:{marginBottom:10},logbutton:{marginRight:10},img:{maxWidth:150},login:{dispaly:"flex"}}}));function I(){var e=B(),a=Object(n.useState)(F),t=Object(s.a)(a,1)[0],o=Object(n.useState)(!1),c=Object(s.a)(o,2),i=c[0],r=c[1],l=Object(n.useState)(!1),d=Object(s.a)(l,2),u=d[0],m=d[1],p=Object(n.useState)(""),j=Object(s.a)(p,2),b=j[0],h=j[1],x=Object(n.useState)(""),O=Object(s.a)(x,2),N=O[0],w=O[1],C=Object(n.useState)(""),S=Object(s.a)(C,2),I=S[0],_=S[1],A=Object(n.useState)(null),E=Object(s.a)(A,2),P=E[0],U=E[1];Object(n.useEffect)((function(){var e=g.onAuthStateChanged((function(e){e?(console.log("user:",e),U(e)):U(null)}));return function(){e()}}),[P,b]);var q=Object(f.jsxs)("div",{style:t,className:e.paper,children:[Object(f.jsx)("img",{className:e.img,src:"https://firebasestorage.googleapis.com/v0/b/instagram-clone-app-ebf8a.appspot.com/o/logo%2Fpupplogo.png?alt=media&token=f4a7d9d7-acd7-4f09-8280-3011e68458aa",alt:"instagram logo"}),Object(f.jsxs)("form",{className:e.form,onSubmit:function(e){return e.preventDefault()&&!1},children:[Object(f.jsxs)(k.a,{margin:"normal",required:!0,fullWidth:!0,children:[Object(f.jsx)(D.a,{htmlFor:"name",children:"Name"}),Object(f.jsx)(v.a,{id:"name",name:"name",autoComplete:"off",autoFocus:!0,value:b,onChange:function(e){return h(e.target.value)}})]}),Object(f.jsxs)(k.a,{margin:"normal",required:!0,fullWidth:!0,children:[Object(f.jsx)(D.a,{htmlFor:"email",children:"Email Address"}),Object(f.jsx)(v.a,{id:"email",name:"email",autoComplete:"off",value:N,onChange:function(e){return w(e.target.value)}})]}),Object(f.jsxs)(k.a,{margin:"normal",required:!0,fullWidth:!0,children:[Object(f.jsx)(D.a,{htmlFor:"password",children:"Password"}),Object(f.jsx)(v.a,{name:"password",type:"password",id:"password",autoComplete:"off",value:I,onChange:function(e){return _(e.target.value)}})]}),Object(f.jsxs)("div",{className:e.box,children:[Object(f.jsx)(y.a,{className:e.button,variant:"outlined",color:"secondary",onClick:function(e){g.createUserWithEmailAndPassword(N,I).then((function(e){return e.user.updateProfile({displayName:b})})).catch((function(e){return alert(e.message)}))},children:"Sign up"}),Object(f.jsx)(y.a,{className:e.button,variant:"outlined",color:"secondary",onClick:function(){return r(!1)},children:"Close"})]})]})]}),M=Object(f.jsxs)("div",{style:t,className:e.paper,children:[Object(f.jsx)("img",{className:e.img,src:"https://firebasestorage.googleapis.com/v0/b/instagram-clone-app-ebf8a.appspot.com/o/logo%2Fpupplogo.png?alt=media&token=f4a7d9d7-acd7-4f09-8280-3011e68458aa",alt:"instagram logo"}),Object(f.jsxs)("form",{className:e.form,onSubmit:function(e){return e.preventDefault()&&!1},children:[Object(f.jsxs)(k.a,{margin:"normal",required:!0,fullWidth:!0,children:[Object(f.jsx)(D.a,{htmlFor:"email",children:"Email Address"}),Object(f.jsx)(v.a,{id:"email",name:"email",autoComplete:"off",value:N,onChange:function(e){return w(e.target.value)}})]}),Object(f.jsxs)(k.a,{margin:"normal",required:!0,fullWidth:!0,children:[Object(f.jsx)(D.a,{htmlFor:"password",children:"Password"}),Object(f.jsx)(v.a,{name:"password",type:"password",id:"password",autoComplete:"off",value:I,onChange:function(e){return _(e.target.value)}})]}),Object(f.jsxs)("div",{className:e.box,children:[Object(f.jsx)(y.a,{className:e.button,variant:"contained",color:"secondary",onClick:function(e){g.signInWithEmailAndPassword("demosignup@gmail.com","abc123").catch((function(e){return alert(e.message)})),m(!1)},children:"Demo Sign in"}),Object(f.jsx)(y.a,{className:e.button,variant:"outlined",color:"secondary",onClick:function(e){g.signInWithEmailAndPassword(N,I).catch((function(e){return alert(e.message)})),m(!1)},children:"Sign in"}),Object(f.jsx)(y.a,{className:e.button,variant:"outlined",color:"secondary",onClick:function(){return m(!1)},children:"Close"})]})]})]});return Object(f.jsxs)("div",{children:[P?Object(f.jsx)(y.a,{variant:"contained",color:"secondary",onClick:function(e){g.signOut()},children:"Sign out"}):Object(f.jsxs)("div",{className:e.login,children:[Object(f.jsx)(y.a,{className:e.logbutton,variant:"contained",color:"secondary",onClick:function(){return m(!0)},children:"Log in"}),Object(f.jsx)(y.a,{variant:"contained",color:"secondary",onClick:function(){r(!0)},children:"Sign Up"})]}),Object(f.jsx)(W.a,{open:i,onClose:function(){return r(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:q}),Object(f.jsx)(W.a,{open:u,onClose:function(){return m(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:M})]})}function _(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],o=a[1],c=Object(n.useState)(""),i=Object(s.a)(c,2),r=i[0],l=i[1],d=Object(n.useState)(null),u=Object(s.a)(d,2),m=u[0],p=u[1];return Object(n.useEffect)((function(){j.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){o(e.docs.map((function(e){return{id:e.id,post:e.data()}}))),console.log("posts:",t)}));var e=g.onAuthStateChanged((function(e){e?(console.log("user:",e),p(e),l(m.displayName)):(p(null),l(""))}));return function(){e()}}),[m,r]),Object(f.jsxs)("div",{className:"App",children:[Object(f.jsxs)("div",{className:"app_header",children:[Object(f.jsx)("img",{className:"app_headerImage",src:"https://firebasestorage.googleapis.com/v0/b/instagram-clone-app-ebf8a.appspot.com/o/logo%2Fpupplogo.png?alt=media&token=f4a7d9d7-acd7-4f09-8280-3011e68458aa",alt:"instagram logo"}),Object(f.jsx)("div",{className:"app_login",children:Object(f.jsx)(I,{})})]}),Object(f.jsxs)("div",{className:"app_body",children:[Object(f.jsxs)(O.a,{color:"secondary",variant:"h4",align:"center",gutterBottom:!0,children:["Welcome to PuppyGram"," ",Object(f.jsx)("strong",{className:"app_username",children:r})]}),r?Object(f.jsx)(S,{username:r}):Object(f.jsx)("div",{className:"app_loginRequest",children:Object(f.jsx)(O.a,{color:"secondary",variant:"p",component:"p",align:"center",gutterBottom:!0,children:"Please to log in to upload your puppy images \ud83d\udc36 \ud83d\udc3e"})}),t.map((function(e){return Object(f.jsx)(x,{id:e.id,imgUrl:e.post.imageUrl,username:e.post.username,caption:e.post.caption},e.id)}))]})]})}var A=document.getElementById("root");c.a.render(Object(f.jsx)(n.StrictMode,{children:Object(f.jsx)(_,{})}),A)}},[[78,1,2]]]);
//# sourceMappingURL=main.728f0700.chunk.js.map