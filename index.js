(()=>{var Et=Object.create,h=Object.defineProperty,Pt=Object.getPrototypeOf,Mt=Object.prototype.hasOwnProperty,Lt=Object.getOwnPropertyNames,_t=Object.getOwnPropertyDescriptor;var M=t=>h(t,"__esModule",{value:!0});var L=(t,e)=>()=>(e||(e={exports:{}},t(e.exports,e)),e.exports),I=(t,e)=>{for(var r in e)h(t,r,{get:e[r],enumerable:!0})},Ot=(t,e,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of Lt(e))!Mt.call(t,a)&&a!=="default"&&h(t,a,{get:()=>e[a],enumerable:!(r=_t(e,a))||r.enumerable});return t},_=t=>Ot(M(h(t!=null?Et(Pt(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t);var tt=L((l,b)=>{M(l);I(l,{default:()=>ye});var $=typeof l=="object"&&l&&!l.nodeType&&l,R=$&&typeof b=="object"&&b&&!b.nodeType&&b,le=R&&R.exports===$,Q=le?v.Buffer:void 0,be=Q?Q.isBuffer:void 0,ge=be||X,ye=ge});var at=L((g,y)=>{M(g);I(g,{default:()=>Ne});var ot=typeof g=="object"&&g&&!g.nodeType&&g,x=ot&&typeof y=="object"&&y&&!y.nodeType&&y,Ve=x&&x.exports===ot,w=Ve&&T.process,Ze=function(){try{var t=x&&x.require&&x.require("util").types;return t||w&&w.binding&&w.binding("util")}catch(e){}}(),Ne=Ze});var vt=L((Ro,Tt)=>{Tt.exports=[{name:"Christopher Sanders",phone:"769-232-1807"},{name:"Frances J Nolte",phone:"901-287-0419"}]});var S=`<img class="app-logo" />
<h1 class="app-name">Contact App</h1>
<img class="add-icon" />
`;var G="./logo-47ADSLHM.png";var k="./add-2EFLUXPD.png";function q(){let t=document.createElement("div");t.className="header",t.innerHTML=S,t.querySelector(".app-logo").setAttribute("src",G),t.querySelector(".add-icon").setAttribute("src",k),document.body.appendChild(t)}var wt=typeof global=="object"&&global&&global.Object===Object&&global,T=wt;var Ft=typeof self=="object"&&self&&self.Object===Object&&self,It=T||Ft||Function("return this")(),v=It;var St=v.Symbol,c=St;var C=Object.prototype,Gt=C.hasOwnProperty,kt=C.toString,d=c?c.toStringTag:void 0;function qt(t){var e=Gt.call(t,d),r=t[d];try{t[d]=void 0;var a=!0}catch(i){}var n=kt.call(t);return a&&(e?t[d]=r:delete t[d]),n}var K=qt;var Ct=Object.prototype,Kt=Ct.toString;function Dt(t){return Kt.call(t)}var D=Dt;var Bt="[object Null]",Ht="[object Undefined]",B=c?c.toStringTag:void 0;function Jt(t){return t==null?t===void 0?Ht:Bt:B&&B in Object(t)?K(t):D(t)}var m=Jt;function Ut(t){return t!=null&&typeof t=="object"}var u=Ut;var Vt=Array.isArray,A=Vt;function Zt(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var H=Zt;function Nt(t){return t}var J=Nt;var Wt="[object AsyncFunction]",Yt="[object Function]",zt="[object GeneratorFunction]",Xt="[object Proxy]";function $t(t){if(!H(t))return!1;var e=m(t);return e==Yt||e==zt||e==Wt||e==Xt}var U=$t;function Rt(t,e){for(var r=-1,a=t==null?0:t.length;++r<a&&e(t[r],r,t)!==!1;);return t}var V=Rt;var Qt=9007199254740991,te=/^(?:0|[1-9]\d*)$/;function ee(t,e){var r=typeof t;return e=e??Qt,!!e&&(r=="number"||r!="symbol"&&te.test(t))&&t>-1&&t%1==0&&t<e}var Z=ee;var re=9007199254740991;function oe(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=re}var E=oe;function ae(t){return t!=null&&E(t.length)&&!U(t)}var P=ae;var ne=Object.prototype;function ie(t){var e=t&&t.constructor,r=typeof e=="function"&&e.prototype||ne;return t===r}var N=ie;function se(t,e){for(var r=-1,a=Array(t);++r<t;)a[r]=e(r);return a}var W=se;var pe="[object Arguments]";function fe(t){return u(t)&&m(t)==pe}var O=fe;var Y=Object.prototype,ce=Y.hasOwnProperty,me=Y.propertyIsEnumerable,ue=O(function(){return arguments}())?O:function(t){return u(t)&&ce.call(t,"callee")&&!me.call(t,"callee")},z=ue;function de(){return!1}var X=de;var st=_(tt());var xe="[object Arguments]",je="[object Array]",he="[object Boolean]",Te="[object Date]",ve="[object Error]",Ae="[object Function]",Ee="[object Map]",Pe="[object Number]",Me="[object Object]",Le="[object RegExp]",_e="[object Set]",Oe="[object String]",we="[object WeakMap]",Fe="[object ArrayBuffer]",Ie="[object DataView]",Se="[object Float32Array]",Ge="[object Float64Array]",ke="[object Int8Array]",qe="[object Int16Array]",Ce="[object Int32Array]",Ke="[object Uint8Array]",De="[object Uint8ClampedArray]",Be="[object Uint16Array]",He="[object Uint32Array]",o={};o[Se]=o[Ge]=o[ke]=o[qe]=o[Ce]=o[Ke]=o[De]=o[Be]=o[He]=!0;o[xe]=o[je]=o[Fe]=o[he]=o[Ie]=o[Te]=o[ve]=o[Ae]=o[Ee]=o[Pe]=o[Me]=o[Le]=o[_e]=o[Oe]=o[we]=!1;function Je(t){return u(t)&&E(t.length)&&!!o[m(t)]}var et=Je;function Ue(t){return function(e){return t(e)}}var rt=Ue;var F=_(at()),nt=F.default&&F.default.isTypedArray,We=nt?rt(nt):et,it=We;var Ye=Object.prototype,ze=Ye.hasOwnProperty;function Xe(t,e){var r=A(t),a=!r&&z(t),n=!r&&!a&&(0,st.default)(t),i=!r&&!a&&!n&&it(t),p=r||a||n||i,f=p?W(t.length,String):[],j=f.length;for(var s in t)(e||ze.call(t,s))&&!(p&&(s=="length"||n&&(s=="offset"||s=="parent")||i&&(s=="buffer"||s=="byteLength"||s=="byteOffset")||Z(s,j)))&&f.push(s);return f}var pt=Xe;function $e(t,e){return function(r){return t(e(r))}}var ft=$e;var Re=ft(Object.keys,Object),ct=Re;var Qe=Object.prototype,tr=Qe.hasOwnProperty;function er(t){if(!N(t))return ct(t);var e=[];for(var r in Object(t))tr.call(t,r)&&r!="constructor"&&e.push(r);return e}var mt=er;function rr(t){return P(t)?pt(t):mt(t)}var ut=rr;function or(t){return function(e,r,a){for(var n=-1,i=Object(e),p=a(e),f=p.length;f--;){var j=p[t?f:++n];if(r(i[j],j,i)===!1)break}return e}}var dt=or;var ar=dt(),lt=ar;function nr(t,e){return t&&lt(t,e,ut)}var bt=nr;function ir(t,e){return function(r,a){if(r==null)return r;if(!P(r))return t(r,a);for(var n=r.length,i=e?n:-1,p=Object(r);(e?i--:++i<n)&&a(p[i],i,p)!==!1;);return r}}var gt=ir;var sr=gt(bt),yt=sr;function pr(t){return typeof t=="function"?t:J}var xt=pr;function fr(t,e){var r=A(t)?V:yt;return r(t,xt(e))}var jt=fr;var ht=`<h2 class="name">name</h2>

<p class="phone">phone</p>
`;function At(){let t=document.createElement("div");t.className="contact-list",Promise.resolve().then(()=>_(vt())).then(e=>{let r=e.default;jt(r,a=>{let n=document.createElement("div");n.className="contact",n.innerHTML=ht,n.querySelector(".name").innerHTML=a.name,n.querySelector(".phone").innerHTML=a.phone,t.appendChild(n)})}),document.body.appendChild(t)}q();At();})();
//# sourceMappingURL=index.js.map
