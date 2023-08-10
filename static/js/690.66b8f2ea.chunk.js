"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[690],{4690:function(n,e,t){t.r(e),t.d(e,{default:function(){return gn}});var r,o,i,a,c,d,s,l,p,x,u,h,g,f,m,b,y,j,Z,v,C,w,k=t(9439),_=t(2791),N=t(9434),A=t(168),T=t(6088),z=T.Z.ul(r||(r=(0,A.Z)(["\n  padding: 0px;\n  margin: 0px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  flex-direction: row;\n"]))),S=T.Z.li(o||(o=(0,A.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n  color: blue;\n  justify-content: space-between;\n  // padding: 2px;\n\n  cursor: pointer;\n\n  &:hover {\n    background-color: #f0f0f0;\n\n    button {\n      // border-color: red;\n      // color: red;\n      opacity: 1;\n      // transform: scale(1.025);\n    }\n  }\n"]))),F=T.Z.p(i||(i=(0,A.Z)(["\n  margin: 0;\n  :not(:last-child) {\n    margin-right: 5px;\n  }\n"]))),P=T.Z.button(a||(a=(0,A.Z)(["\n  font-size: 12px;\n  width: 50px;\n  height: 24px;\n  background-color: white;\n  border: 1px solid gray;\n  border-radius: 5px;\n  cursor: pointer;\n  opacity: 0.6;\n\n  &:hover,\n  &:focus {\n    border-color: red;\n    color: red;\n    opacity: 1;\n  }\n"]))),I=t(208),L=T.Z.div(c||(c=(0,A.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.6);\n  z-index: 1200;\n"]))),q=T.Z.div(d||(d=(0,A.Z)(["\n  padding: 30px 40px;\n  width: 440px;\n  background-color: #fff;\n  border: 1px solid #aaa;\n  border-radius: 15px;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,\n    rgba(0, 0, 0, 0.14) 0px 4px 5px 0px,\n    rgba(11, 127, 171, 0.5) 0px 0px 25px 5px;\n\n  margin: 0 auto;\n  /* margin: 30px auto; */\n  // margin: 40px;\n  // max-width: fit-content;\n"]))),E=T.Z.div(s||(s=(0,A.Z)(["\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"]))),D=t(4164),$=t(184),J=document.querySelector("#modal-root"),M=function(n){var e=n.children,t=n.onClose;(0,_.useEffect)((function(){var n=function(n){"Escape"===n.code&&t()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[t]);return(0,D.createPortal)((0,$.jsx)(L,{onClick:function(n){return function(n){n.currentTarget===n.target&&t()}(n)},children:(0,$.jsx)(E,{children:(0,$.jsx)(q,{children:e})})}),J)},B=T.Z.div(l||(l=(0,A.Z)(["\n  margin: 0px;\n  color: block;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 10px;\n  /* padding: 0 20px; */\n  padding: 0;\n  /* border: 1px solid gray; */\n  border-radius: 15px;\n"]))),K=T.Z.label(p||(p=(0,A.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n  font-weight: 500;\n"]))),V=T.Z.input(x||(x=(0,A.Z)(["\n  margin-top: 5px;\n  width: 400px;\n  height: 25px;\n  border: 0.5px solid black;\n  border-radius: 5px;\n  padding: 5px 15px;\n  letter-spacing: 1.5px;\n  font-size: 18px;\n"]))),G=T.Z.button(u||(u=(0,A.Z)(["\n  width: 96px;\n  height: 24px;\n  background-color: white;\n  border: 1px solid gray;\n  border-radius: 5px;\n\n  &:hover,\n  &:focus {\n    cursor: pointer;\n    border-color: green;\n    color: green;\n    // background-color: lightgreen;\n  }\n\n  &:disabled {\n    cursor: auto;\n    border-color: gray;\n    color: gray;\n    background-color: lightgray;\n  }\n"]))),W=T.Z.h2(h||(h=(0,A.Z)(["\n  margin: 0 0 10px 0;\n"]))),H=t(6351),O=t(1686),Q=function(n){var e=n.onClose,t=n.id,r=n.name,o=n.number,i=(0,N.I0)(),a=r,c=o,d=(0,_.useState)(r),s=(0,k.Z)(d,2),l=s[0],p=s[1],x=(0,_.useState)(o),u=(0,k.Z)(x,2),h=u[0],g=u[1],f=(0,N.v9)(H.Af);return(0,$.jsx)($.Fragment,{children:(0,$.jsx)("form",{onSubmit:function(n){n.preventDefault();var e=f.find((function(n){return n.name.toLowerCase()===l.toLowerCase().trim()})),r=f.find((function(n){return n.number===h}));if(e&!r)O.Notify.failure('Name  "'.concat(l,'"  is already in contacts'),O.Notify.init({clickToClose:!0,position:"center-top"}));else if(r&!e)O.Notify.failure('Phone   "'.concat(h,'"  is already in contacts'),O.Notify.init({clickToClose:!0,position:"center-top"}));else{var o=n.currentTarget;i((0,I.mP)({id:t,name:o.elements.name.value,number:o.elements.number.value})),setTimeout((function(){i((0,I.mP)())}),500),a!==l&&O.Notify.success('Contact   "'.concat(a,'"  has been changed to "').concat(l,'"'),O.Notify.init({clickToClose:!0,position:"center-top"})),c!==h&&O.Notify.success('Contact   "'.concat(a,'"  number changed "'),O.Notify.init({clickToClose:!0,position:"center-top"})),o.reset()}},children:(0,$.jsxs)(B,{children:[(0,$.jsx)(W,{children:"Edit contact"}),(0,$.jsxs)(K,{children:["Name",(0,$.jsx)(V,{type:"text",name:"name",defaultValue:a,onChange:function(n){return p(n.target.value)},placeholder:"John Smith",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,$.jsxs)(K,{children:["Phone",(0,$.jsx)(V,{type:"tel",name:"number",defaultValue:c,onChange:function(n){return g(n.target.value)},placeholder:"_ _ _ - _ _ _ - _ _ _ _",pattern:"^\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}$",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,$.jsxs)("div",{style:{display:"flex",gap:"20px"},children:[(0,$.jsx)(G,{type:"submit",disabled:a===l&c===h,children:"Save"}),(0,$.jsx)(G,{type:"button",onClick:e,children:"Cancel"})]})]})})})},R=function(n){var e=n.renderListItem,t=e.id,r=e.name,o=e.number,i=(0,_.useState)(!1),a=(0,k.Z)(i,2),c=a[0],d=a[1],s=function(){c&&d(!1)},l=(0,N.I0)();return(0,$.jsxs)(S,{children:[(0,$.jsxs)(z,{children:[(0,$.jsxs)(F,{children:[r,":"]}),(0,$.jsx)(F,{children:o})]}),(0,$.jsxs)("div",{style:{display:"flex",gap:"10px"},children:[(0,$.jsx)(P,{type:"button",style:{width:"36px"},onClick:function(){c||d(!0)},children:"Edit"}),(0,$.jsx)(P,{type:"button",onClick:function(){l((0,I.GK)(t)),O.Notify.success('Contact   "'.concat(r,'"  deleted'),O.Notify.init({clickToClose:!0,position:"center-top"}))},children:"Delete"})]}),c&&(0,$.jsx)(M,{onClose:s,children:(0,$.jsx)(Q,{id:t,name:r,number:o,onClose:s})})]},t)},U=T.Z.ul(g||(g=(0,A.Z)(["\n  /* padding: 0px 0px 0px 20px; */\n  padding: 0;\n"]))),X=function(){var n=(0,N.v9)(H.DI);return(0,$.jsx)($.Fragment,{children:(0,$.jsx)(U,{children:n.map((function(n){return(0,$.jsx)(R,{renderListItem:n},n.id)}))})})},Y=T.Z.div(f||(f=(0,A.Z)(["\n  margin: 0px;\n  color: block;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 10px;\n  /* padding: 0 20px; */\n  padding: 0;\n  /* border: 1px solid gray; */\n  border-radius: 15px;\n"]))),nn=T.Z.label(m||(m=(0,A.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n  font-weight: 500;\n"]))),en=T.Z.input(b||(b=(0,A.Z)(["\n  margin-top: 5px;\n  width: 400px;\n  height: 25px;\n  border: 0.5px solid black;\n  border-radius: 5px;\n  padding: 5px 15px;\n  letter-spacing: 1.5px;\n  font-size: 18px;\n"]))),tn=T.Z.button(y||(y=(0,A.Z)(["\n  width: 140px;\n  height: 24px;\n  background-color: white;\n  border: 1px solid gray;\n  border-radius: 5px;\n\n  &:hover,\n  &:focus {\n    cursor: pointer;\n    border-color: green;\n    color: green;\n    // background-color: lightgreen;\n  }\n\n  &:disabled {\n    cursor: auto;\n    border-color: gray;\n    color: gray;\n    background-color: lightgray;\n  }\n"]))),rn=T.Z.h2(j||(j=(0,A.Z)(["\n  margin: 0 0 10px 0;\n"]))),on=function(n){var e=n.onClose,t=(0,_.useState)(""),r=(0,k.Z)(t,2),o=r[0],i=r[1],a=(0,_.useState)(""),c=(0,k.Z)(a,2),d=c[0],s=c[1],l={name:o,number:d},p=(0,N.I0)(),x=(0,N.v9)(H.Af),u=function(n){var e=n.currentTarget,t=e.name,r=e.value;switch(t){case"name":i(r);break;case"number":s(r);break;default:return}},h=function(){i(""),s("")};return(0,$.jsx)($.Fragment,{children:(0,$.jsx)("form",{onSubmit:function(n){n.preventDefault();var e=x.find((function(n){return n.name.toLowerCase()===o.toLowerCase().trim()}));if(e)O.Notify.failure('Name  "'.concat(o,'"  is already in contacts'),O.Notify.init({clickToClose:!0,position:"center-top"}));else{var t=x.find((function(n){return n.number===d}));t?O.Notify.failure('Phone   "'.concat(d,'"  is already in contacts'),O.Notify.init({clickToClose:!0,position:"center-top"})):(p((0,I.uK)(l)),O.Notify.success('Contact "'.concat(o,'" added in contacts'),O.Notify.init({clickToClose:!0,position:"center-top"})),h())}},children:(0,$.jsxs)(Y,{children:[(0,$.jsx)(rn,{children:"Add new contact"}),(0,$.jsxs)(nn,{children:["Name",(0,$.jsx)(en,{type:"text",name:"name",value:o,onChange:u,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:"Name required"})]}),(0,$.jsxs)(nn,{children:["Phone",(0,$.jsx)(en,{type:"tel",name:"number",value:d,onChange:u,placeholder:"_ _ _ - _ _ _ - _ _ _ _",pattern:"^\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}$",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:"Phone number required"})]}),(0,$.jsxs)("div",{style:{display:"flex",gap:"140px",margin:"auto"},children:[(0,$.jsx)(tn,{type:"submit",disabled:!o||!d,children:"Add contact"}),(0,$.jsx)(tn,{type:"button",onClick:e,children:"Cancel"})]})]})})})},an=T.Z.label(Z||(Z=(0,A.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n  font-weight: 500;\n  color: lightgrey;\n"]))),cn=T.Z.input(v||(v=(0,A.Z)(["\n  margin-top: 5px;\n  width: 250px;\n  height: 25px;\n  border: 0.5px solid black;\n  border-radius: 5px;\n  padding: 5px 15px;\n"]))),dn=t(6895),sn=function(){var n=(0,N.I0)(),e=(0,N.v9)(H.AD);return(0,$.jsxs)(an,{children:["Find contacts by name",(0,$.jsx)(cn,{type:"text",name:"contactsFilter",value:e,onChange:function(e){return n((0,dn.M)(e.currentTarget.value))}})]})},ln=T.Z.div(C||(C=(0,A.Z)(["\n  padding: 30px 40px;\n  width: 440px;\n\n  border: 1px solid #aaa;\n  border-radius: 15px;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,\n    rgba(0, 0, 0, 0.14) 0px 4px 5px 0px,\n    rgba(11, 127, 171, 0.5) 0px 0px 25px 5px;\n\n  margin: 30px auto;\n  // margin: 40px;\n  // max-width: fit-content;\n"]))),pn=T.Z.h1(w||(w=(0,A.Z)(["\n  margin: 0 0 10px 0;\n"]))),xn=t(5309),un=t(6286),hn=t(6907);function gn(){var n=(0,_.useState)(!1),e=(0,k.Z)(n,2),t=e[0],r=e[1],o=function(){t&&r(!1)},i=(0,N.I0)(),a=(0,xn.A)(),c=a.isLoading,d=a.error;return(0,_.useEffect)((function(){i((0,I.yF)())}),[i]),(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(hn.ql,{children:(0,$.jsx)("title",{children:"Contacts"})}),(0,$.jsxs)(ln,{children:[d&&(0,$.jsx)("p",{children:d}),c?(0,$.jsx)(un.s5,{strokeColor:"rgb(11, 127, 171)",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0}):(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,$.jsx)(pn,{children:"Contacts"}),(0,$.jsx)(tn,{type:"button",onClick:function(){t||r(!0)},children:"Add contact"})]}),(0,$.jsx)(sn,{}),(0,$.jsx)(X,{}),t&&(0,$.jsx)(M,{onClose:o,children:(0,$.jsx)(on,{onClose:o})})]})]})]})}}}]);
//# sourceMappingURL=690.66b8f2ea.chunk.js.map