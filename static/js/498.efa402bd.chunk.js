"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[498],{7498:function(n,e,r){r.r(e),r.d(e,{default:function(){return H}});var t,o,i,a,d,s,c,l,p,x,u,h,g,b=r(2791),m=r(9434),f=r(168),j=r(6088),y=j.Z.ul(t||(t=(0,f.Z)(["\n  padding: 0px;\n  margin: 0px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  flex-direction: row;\n"]))),Z=j.Z.li(o||(o=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n  color: blue;\n  justify-content: space-between;\n  // padding: 2px;\n\n  cursor: pointer;\n\n  &:hover {\n    background-color: #f0f0f0;\n\n    button {\n      // border-color: red;\n      // color: red;\n      opacity: 1;\n      // transform: scale(1.025);\n    }\n  }\n"]))),v=j.Z.p(i||(i=(0,f.Z)(["\n  margin: 0;\n  :not(:last-child) {\n    margin-right: 5px;\n  }\n"]))),k=j.Z.button(a||(a=(0,f.Z)(["\n  font-size: 12px;\n  width: 50px;\n  height: 24px;\n  background-color: white;\n  border: 1px solid gray;\n  border-radius: 5px;\n  cursor: pointer;\n  opacity: 0.6;\n\n  &:hover,\n  &:focus {\n    border-color: red;\n    color: red;\n    opacity: 1;\n  }\n"]))),w=r(208),_=r(184),C=function(n){var e=n.renderListItem,r=e.id,t=e.name,o=e.number,i=(0,m.I0)();return(0,_.jsxs)(Z,{children:[(0,_.jsxs)(y,{children:[(0,_.jsxs)(v,{children:[t,":"]}),(0,_.jsx)(v,{children:o})]}),(0,_.jsx)("div",{style:{display:"flex",gap:"10px"},children:(0,_.jsx)(k,{type:"button",onClick:function(){return i((0,w.GK)(r))},children:"Delete"})})]},r)},A=j.Z.ul(d||(d=(0,f.Z)(["\n  /* padding: 0px 0px 0px 20px; */\n  padding: 0;\n"]))),F=r(6351),N=function(){var n=(0,m.v9)(F.DI);return console.log(n),(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(A,{children:n.map((function(n){return(0,_.jsx)(C,{renderListItem:n},n.id)}))})})},I=r(9439),q=j.Z.div(s||(s=(0,f.Z)(["\n  margin: 0px;\n  color: block;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 10px;\n  /* padding: 0 20px; */\n  padding: 0;\n  /* border: 1px solid gray; */\n  border-radius: 15px;\n"]))),z=j.Z.label(c||(c=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n  font-weight: 500;\n"]))),D=j.Z.input(l||(l=(0,f.Z)(["\n  margin-top: 5px;\n  width: 250px;\n  height: 25px;\n  border: 0.5px solid black;\n  border-radius: 5px;\n  padding: 5px 15px;\n  letter-spacing: 2px;\n"]))),L=j.Z.button(p||(p=(0,f.Z)(["\n  width: 96px;\n  height: 24px;\n  background-color: white;\n  border: 1px solid gray;\n  border-radius: 5px;\n\n  &:hover,\n  &:focus {\n    cursor: pointer;\n    border-color: green;\n    color: green;\n    // background-color: lightgreen;\n  }\n\n  &:disabled {\n    cursor: auto;\n    border-color: gray;\n    color: gray;\n    background-color: lightgray;\n  }\n"]))),P=r(1686),T=function(){var n=(0,b.useState)(""),e=(0,I.Z)(n,2),r=e[0],t=e[1],o=(0,b.useState)(""),i=(0,I.Z)(o,2),a=i[0],d=i[1],s={name:r,number:a},c=(0,m.I0)(),l=(0,m.v9)(F.Af),p=function(n){var e=n.currentTarget,r=e.name,o=e.value;switch(r){case"name":t(o);break;case"number":d(o);break;default:return}},x=function(){t(""),d("")};return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)("form",{onSubmit:function(n){n.preventDefault();var e=l.find((function(n){return n.name.toLowerCase()===r.toLowerCase().trim()}));if(e)P.Notify.failure('Name  "'.concat(r,'"  is already in contacts'),P.Notify.init({clickToClose:!0,position:"center-top"}));else{var t=l.find((function(n){return n.number===a}));t?P.Notify.failure('Phone   "'.concat(a,'"  is already in contacts'),P.Notify.init({clickToClose:!0,position:"center-top"})):(c((0,w.uK)(s)),x())}},children:(0,_.jsxs)(q,{children:[(0,_.jsxs)(z,{children:["Name",(0,_.jsx)(D,{type:"text",name:"name",value:r,onChange:p,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:"Name required"})]}),(0,_.jsxs)(z,{children:["Phone",(0,_.jsx)(D,{type:"tel",name:"number",value:a,onChange:p,placeholder:"_ _ _ - _ _ _ - _ _ _ _",pattern:"^\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}$",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:"Phone number required"})]}),(0,_.jsx)(L,{type:"submit",disabled:!r||!a,children:"Add contact"})]})})})},S=j.Z.label(x||(x=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n  font-weight: 500;\n  color: lightgrey;\n"]))),K=j.Z.input(u||(u=(0,f.Z)(["\n  margin-top: 5px;\n  width: 250px;\n  height: 25px;\n  border: 0.5px solid black;\n  border-radius: 5px;\n  padding: 5px 15px;\n"]))),M=r(6895),$=function(){var n=(0,m.I0)(),e=(0,m.v9)(F.AD);return(0,_.jsxs)(S,{children:["Find contacts by name",(0,_.jsx)(K,{type:"text",name:"contactsFilter",value:e,onChange:function(e){return n((0,M.M)(e.currentTarget.value))}})]})},B=j.Z.div(h||(h=(0,f.Z)(["\n  padding: 30px 40px;\n  width: 440px;\n\n  border: 1px solid #aaa;\n  border-radius: 15px;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,\n    rgba(0, 0, 0, 0.14) 0px 4px 5px 0px,\n    rgba(11, 127, 171, 0.5) 0px 0px 25px 5px;\n\n  margin: 30px auto;\n  // margin: 40px;\n  // max-width: fit-content;\n"]))),E=j.Z.h1(g||(g=(0,f.Z)(["\n  margin: 0 0 10px 0;\n"]))),G=r(5309),J=r(6286),W=r(6907);function H(){var n=(0,m.I0)(),e=(0,G.A)(),r=e.isLoading,t=e.error;return(0,b.useEffect)((function(){n((0,w.yF)())}),[n]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(W.ql,{children:(0,_.jsx)("title",{children:"Contacts"})}),(0,_.jsxs)(B,{children:[(0,_.jsx)(E,{children:"Phonebook"}),(0,_.jsx)(T,{})]}),(0,_.jsxs)(B,{children:[t&&(0,_.jsx)("p",{children:t}),r?(0,_.jsx)(J.s5,{strokeColor:"rgb(11, 127, 171)",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0}):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(E,{children:"Contacts"}),(0,_.jsx)($,{}),(0,_.jsx)(N,{})]})]})]})}}}]);
//# sourceMappingURL=498.efa402bd.chunk.js.map