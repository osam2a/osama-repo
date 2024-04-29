function kT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function i_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var s_={exports:{}},bu={},o_={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qo=Symbol.for("react.element"),CT=Symbol.for("react.portal"),PT=Symbol.for("react.fragment"),RT=Symbol.for("react.strict_mode"),xT=Symbol.for("react.profiler"),NT=Symbol.for("react.provider"),bT=Symbol.for("react.context"),OT=Symbol.for("react.forward_ref"),DT=Symbol.for("react.suspense"),LT=Symbol.for("react.memo"),VT=Symbol.for("react.lazy"),Hm=Symbol.iterator;function MT(t){return t===null||typeof t!="object"?null:(t=Hm&&t[Hm]||t["@@iterator"],typeof t=="function"?t:null)}var a_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},l_=Object.assign,u_={};function rs(t,e,n){this.props=t,this.context=e,this.refs=u_,this.updater=n||a_}rs.prototype.isReactComponent={};rs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};rs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function c_(){}c_.prototype=rs.prototype;function wd(t,e,n){this.props=t,this.context=e,this.refs=u_,this.updater=n||a_}var Ed=wd.prototype=new c_;Ed.constructor=wd;l_(Ed,rs.prototype);Ed.isPureReactComponent=!0;var qm=Array.isArray,h_=Object.prototype.hasOwnProperty,Id={current:null},f_={key:!0,ref:!0,__self:!0,__source:!0};function d_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)h_.call(e,r)&&!f_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Qo,type:t,key:s,ref:o,props:i,_owner:Id.current}}function FT(t,e){return{$$typeof:Qo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Td(t){return typeof t=="object"&&t!==null&&t.$$typeof===Qo}function UT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Km=/\/+/g;function Dc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?UT(""+t.key):e.toString(36)}function cl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Qo:case CT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Dc(o,0):r,qm(i)?(n="",t!=null&&(n=t.replace(Km,"$&/")+"/"),cl(i,e,n,"",function(u){return u})):i!=null&&(Td(i)&&(i=FT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Km,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",qm(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Dc(s,a);o+=cl(s,e,n,l,i)}else if(l=MT(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Dc(s,a++),o+=cl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ra(t,e,n){if(t==null)return t;var r=[],i=0;return cl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function $T(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var it={current:null},hl={transition:null},jT={ReactCurrentDispatcher:it,ReactCurrentBatchConfig:hl,ReactCurrentOwner:Id};Q.Children={map:Ra,forEach:function(t,e,n){Ra(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ra(t,function(){e++}),e},toArray:function(t){return Ra(t,function(e){return e})||[]},only:function(t){if(!Td(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Q.Component=rs;Q.Fragment=PT;Q.Profiler=xT;Q.PureComponent=wd;Q.StrictMode=RT;Q.Suspense=DT;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jT;Q.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=l_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Id.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)h_.call(e,l)&&!f_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Qo,type:t.type,key:i,ref:s,props:r,_owner:o}};Q.createContext=function(t){return t={$$typeof:bT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:NT,_context:t},t.Consumer=t};Q.createElement=d_;Q.createFactory=function(t){var e=d_.bind(null,t);return e.type=t,e};Q.createRef=function(){return{current:null}};Q.forwardRef=function(t){return{$$typeof:OT,render:t}};Q.isValidElement=Td;Q.lazy=function(t){return{$$typeof:VT,_payload:{_status:-1,_result:t},_init:$T}};Q.memo=function(t,e){return{$$typeof:LT,type:t,compare:e===void 0?null:e}};Q.startTransition=function(t){var e=hl.transition;hl.transition={};try{t()}finally{hl.transition=e}};Q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Q.useCallback=function(t,e){return it.current.useCallback(t,e)};Q.useContext=function(t){return it.current.useContext(t)};Q.useDebugValue=function(){};Q.useDeferredValue=function(t){return it.current.useDeferredValue(t)};Q.useEffect=function(t,e){return it.current.useEffect(t,e)};Q.useId=function(){return it.current.useId()};Q.useImperativeHandle=function(t,e,n){return it.current.useImperativeHandle(t,e,n)};Q.useInsertionEffect=function(t,e){return it.current.useInsertionEffect(t,e)};Q.useLayoutEffect=function(t,e){return it.current.useLayoutEffect(t,e)};Q.useMemo=function(t,e){return it.current.useMemo(t,e)};Q.useReducer=function(t,e,n){return it.current.useReducer(t,e,n)};Q.useRef=function(t){return it.current.useRef(t)};Q.useState=function(t){return it.current.useState(t)};Q.useSyncExternalStore=function(t,e,n){return it.current.useSyncExternalStore(t,e,n)};Q.useTransition=function(){return it.current.useTransition()};Q.version="18.2.0";o_.exports=Q;var E=o_.exports;const Ou=i_(E),zT=kT({__proto__:null,default:Ou},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var BT=E,WT=Symbol.for("react.element"),HT=Symbol.for("react.fragment"),qT=Object.prototype.hasOwnProperty,KT=BT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,GT={key:!0,ref:!0,__self:!0,__source:!0};function p_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)qT.call(e,r)&&!GT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:WT,type:t,key:s,ref:o,props:i,_owner:KT.current}}bu.Fragment=HT;bu.jsx=p_;bu.jsxs=p_;s_.exports=bu;var _=s_.exports,Nh={},m_={exports:{}},yt={},g_={exports:{}},y_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(b,W){var H=b.length;b.push(W);e:for(;0<H;){var ve=H-1>>>1,Re=b[ve];if(0<i(Re,W))b[ve]=W,b[H]=Re,H=ve;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var W=b[0],H=b.pop();if(H!==W){b[0]=H;e:for(var ve=0,Re=b.length,Ca=Re>>>1;ve<Ca;){var Ir=2*(ve+1)-1,Oc=b[Ir],Tr=Ir+1,Pa=b[Tr];if(0>i(Oc,H))Tr<Re&&0>i(Pa,Oc)?(b[ve]=Pa,b[Tr]=H,ve=Tr):(b[ve]=Oc,b[Ir]=H,ve=Ir);else if(Tr<Re&&0>i(Pa,H))b[ve]=Pa,b[Tr]=H,ve=Tr;else break e}}return W}function i(b,W){var H=b.sortIndex-W.sortIndex;return H!==0?H:b.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,f=3,p=!1,y=!1,v=!1,I=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(b){for(var W=n(u);W!==null;){if(W.callback===null)r(u);else if(W.startTime<=b)r(u),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(u)}}function w(b){if(v=!1,g(b),!y)if(n(l)!==null)y=!0,Nc(S);else{var W=n(u);W!==null&&bc(w,W.startTime-b)}}function S(b,W){y=!1,v&&(v=!1,m(L),L=-1),p=!0;var H=f;try{for(g(W),h=n(l);h!==null&&(!(h.expirationTime>W)||b&&!Rt());){var ve=h.callback;if(typeof ve=="function"){h.callback=null,f=h.priorityLevel;var Re=ve(h.expirationTime<=W);W=t.unstable_now(),typeof Re=="function"?h.callback=Re:h===n(l)&&r(l),g(W)}else r(l);h=n(l)}if(h!==null)var Ca=!0;else{var Ir=n(u);Ir!==null&&bc(w,Ir.startTime-W),Ca=!1}return Ca}finally{h=null,f=H,p=!1}}var C=!1,R=null,L=-1,K=5,z=-1;function Rt(){return!(t.unstable_now()-z<K)}function _s(){if(R!==null){var b=t.unstable_now();z=b;var W=!0;try{W=R(!0,b)}finally{W?ws():(C=!1,R=null)}}else C=!1}var ws;if(typeof d=="function")ws=function(){d(_s)};else if(typeof MessageChannel<"u"){var Wm=new MessageChannel,AT=Wm.port2;Wm.port1.onmessage=_s,ws=function(){AT.postMessage(null)}}else ws=function(){I(_s,0)};function Nc(b){R=b,C||(C=!0,ws())}function bc(b,W){L=I(function(){b(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(b){b.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,Nc(S))},t.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<b?Math.floor(1e3/b):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(b){switch(f){case 1:case 2:case 3:var W=3;break;default:W=f}var H=f;f=W;try{return b()}finally{f=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(b,W){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var H=f;f=b;try{return W()}finally{f=H}},t.unstable_scheduleCallback=function(b,W,H){var ve=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?ve+H:ve):H=ve,b){case 1:var Re=-1;break;case 2:Re=250;break;case 5:Re=1073741823;break;case 4:Re=1e4;break;default:Re=5e3}return Re=H+Re,b={id:c++,callback:W,priorityLevel:b,startTime:H,expirationTime:Re,sortIndex:-1},H>ve?(b.sortIndex=H,e(u,b),n(l)===null&&b===n(u)&&(v?(m(L),L=-1):v=!0,bc(w,H-ve))):(b.sortIndex=Re,e(l,b),y||p||(y=!0,Nc(S))),b},t.unstable_shouldYield=Rt,t.unstable_wrapCallback=function(b){var W=f;return function(){var H=f;f=W;try{return b.apply(this,arguments)}finally{f=H}}}})(y_);g_.exports=y_;var QT=g_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v_=E,mt=QT;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var __=new Set,ao={};function ti(t,e){$i(t,e),$i(t+"Capture",e)}function $i(t,e){for(ao[t]=e,t=0;t<e.length;t++)__.add(e[t])}var pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bh=Object.prototype.hasOwnProperty,YT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gm={},Qm={};function XT(t){return bh.call(Qm,t)?!0:bh.call(Gm,t)?!1:YT.test(t)?Qm[t]=!0:(Gm[t]=!0,!1)}function JT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ZT(t,e,n,r){if(e===null||typeof e>"u"||JT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function st(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ze[t]=new st(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ze[e]=new st(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ze[t]=new st(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ze[t]=new st(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ze[t]=new st(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ze[t]=new st(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ze[t]=new st(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ze[t]=new st(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ze[t]=new st(t,5,!1,t.toLowerCase(),null,!1,!1)});var Sd=/[\-:]([a-z])/g;function Ad(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Sd,Ad);ze[e]=new st(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Sd,Ad);ze[e]=new st(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Sd,Ad);ze[e]=new st(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ze[t]=new st(t,1,!1,t.toLowerCase(),null,!1,!1)});ze.xlinkHref=new st("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ze[t]=new st(t,1,!1,t.toLowerCase(),null,!0,!0)});function kd(t,e,n,r){var i=ze.hasOwnProperty(e)?ze[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ZT(e,n,i,r)&&(n=null),r||i===null?XT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var An=v_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xa=Symbol.for("react.element"),hi=Symbol.for("react.portal"),fi=Symbol.for("react.fragment"),Cd=Symbol.for("react.strict_mode"),Oh=Symbol.for("react.profiler"),w_=Symbol.for("react.provider"),E_=Symbol.for("react.context"),Pd=Symbol.for("react.forward_ref"),Dh=Symbol.for("react.suspense"),Lh=Symbol.for("react.suspense_list"),Rd=Symbol.for("react.memo"),Dn=Symbol.for("react.lazy"),I_=Symbol.for("react.offscreen"),Ym=Symbol.iterator;function Es(t){return t===null||typeof t!="object"?null:(t=Ym&&t[Ym]||t["@@iterator"],typeof t=="function"?t:null)}var de=Object.assign,Lc;function bs(t){if(Lc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Lc=e&&e[1]||""}return`
`+Lc+t}var Vc=!1;function Mc(t,e){if(!t||Vc)return"";Vc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Vc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?bs(t):""}function eS(t){switch(t.tag){case 5:return bs(t.type);case 16:return bs("Lazy");case 13:return bs("Suspense");case 19:return bs("SuspenseList");case 0:case 2:case 15:return t=Mc(t.type,!1),t;case 11:return t=Mc(t.type.render,!1),t;case 1:return t=Mc(t.type,!0),t;default:return""}}function Vh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case fi:return"Fragment";case hi:return"Portal";case Oh:return"Profiler";case Cd:return"StrictMode";case Dh:return"Suspense";case Lh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case E_:return(t.displayName||"Context")+".Consumer";case w_:return(t._context.displayName||"Context")+".Provider";case Pd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Rd:return e=t.displayName||null,e!==null?e:Vh(t.type)||"Memo";case Dn:e=t._payload,t=t._init;try{return Vh(t(e))}catch{}}return null}function tS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vh(e);case 8:return e===Cd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function sr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function T_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function nS(t){var e=T_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Na(t){t._valueTracker||(t._valueTracker=nS(t))}function S_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=T_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function bl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Mh(t,e){var n=e.checked;return de({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Xm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=sr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function A_(t,e){e=e.checked,e!=null&&kd(t,"checked",e,!1)}function Fh(t,e){A_(t,e);var n=sr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Uh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Uh(t,e.type,sr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Jm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Uh(t,e,n){(e!=="number"||bl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Os=Array.isArray;function Pi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+sr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function $h(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return de({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Zm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(Os(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:sr(n)}}function k_(t,e){var n=sr(e.value),r=sr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function eg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function C_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?C_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ba,P_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ba=ba||document.createElement("div"),ba.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ba.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function lo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ws={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rS=["Webkit","ms","Moz","O"];Object.keys(Ws).forEach(function(t){rS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ws[e]=Ws[t]})});function R_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ws.hasOwnProperty(t)&&Ws[t]?(""+e).trim():e+"px"}function x_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=R_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var iS=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zh(t,e){if(e){if(iS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function Bh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wh=null;function xd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hh=null,Ri=null,xi=null;function tg(t){if(t=Jo(t)){if(typeof Hh!="function")throw Error(k(280));var e=t.stateNode;e&&(e=Fu(e),Hh(t.stateNode,t.type,e))}}function N_(t){Ri?xi?xi.push(t):xi=[t]:Ri=t}function b_(){if(Ri){var t=Ri,e=xi;if(xi=Ri=null,tg(t),e)for(t=0;t<e.length;t++)tg(e[t])}}function O_(t,e){return t(e)}function D_(){}var Fc=!1;function L_(t,e,n){if(Fc)return t(e,n);Fc=!0;try{return O_(t,e,n)}finally{Fc=!1,(Ri!==null||xi!==null)&&(D_(),b_())}}function uo(t,e){var n=t.stateNode;if(n===null)return null;var r=Fu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var qh=!1;if(pn)try{var Is={};Object.defineProperty(Is,"passive",{get:function(){qh=!0}}),window.addEventListener("test",Is,Is),window.removeEventListener("test",Is,Is)}catch{qh=!1}function sS(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Hs=!1,Ol=null,Dl=!1,Kh=null,oS={onError:function(t){Hs=!0,Ol=t}};function aS(t,e,n,r,i,s,o,a,l){Hs=!1,Ol=null,sS.apply(oS,arguments)}function lS(t,e,n,r,i,s,o,a,l){if(aS.apply(this,arguments),Hs){if(Hs){var u=Ol;Hs=!1,Ol=null}else throw Error(k(198));Dl||(Dl=!0,Kh=u)}}function ni(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function V_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ng(t){if(ni(t)!==t)throw Error(k(188))}function uS(t){var e=t.alternate;if(!e){if(e=ni(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return ng(i),t;if(s===r)return ng(i),e;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function M_(t){return t=uS(t),t!==null?F_(t):null}function F_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=F_(t);if(e!==null)return e;t=t.sibling}return null}var U_=mt.unstable_scheduleCallback,rg=mt.unstable_cancelCallback,cS=mt.unstable_shouldYield,hS=mt.unstable_requestPaint,_e=mt.unstable_now,fS=mt.unstable_getCurrentPriorityLevel,Nd=mt.unstable_ImmediatePriority,$_=mt.unstable_UserBlockingPriority,Ll=mt.unstable_NormalPriority,dS=mt.unstable_LowPriority,j_=mt.unstable_IdlePriority,Du=null,Gt=null;function pS(t){if(Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(Du,t,void 0,(t.current.flags&128)===128)}catch{}}var Vt=Math.clz32?Math.clz32:yS,mS=Math.log,gS=Math.LN2;function yS(t){return t>>>=0,t===0?32:31-(mS(t)/gS|0)|0}var Oa=64,Da=4194304;function Ds(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Vl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ds(a):(s&=o,s!==0&&(r=Ds(s)))}else o=n&~i,o!==0?r=Ds(o):s!==0&&(r=Ds(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Vt(e),i=1<<n,r|=t[n],e&=~i;return r}function vS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _S(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Vt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=vS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Gh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function z_(){var t=Oa;return Oa<<=1,!(Oa&4194240)&&(Oa=64),t}function Uc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Yo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Vt(e),t[e]=n}function wS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Vt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function bd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Vt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ee=0;function B_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var W_,Od,H_,q_,K_,Qh=!1,La=[],qn=null,Kn=null,Gn=null,co=new Map,ho=new Map,Vn=[],ES="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ig(t,e){switch(t){case"focusin":case"focusout":qn=null;break;case"dragenter":case"dragleave":Kn=null;break;case"mouseover":case"mouseout":Gn=null;break;case"pointerover":case"pointerout":co.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ho.delete(e.pointerId)}}function Ts(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Jo(e),e!==null&&Od(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function IS(t,e,n,r,i){switch(e){case"focusin":return qn=Ts(qn,t,e,n,r,i),!0;case"dragenter":return Kn=Ts(Kn,t,e,n,r,i),!0;case"mouseover":return Gn=Ts(Gn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return co.set(s,Ts(co.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ho.set(s,Ts(ho.get(s)||null,t,e,n,r,i)),!0}return!1}function G_(t){var e=Cr(t.target);if(e!==null){var n=ni(e);if(n!==null){if(e=n.tag,e===13){if(e=V_(n),e!==null){t.blockedOn=e,K_(t.priority,function(){H_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Yh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Wh=r,n.target.dispatchEvent(r),Wh=null}else return e=Jo(n),e!==null&&Od(e),t.blockedOn=n,!1;e.shift()}return!0}function sg(t,e,n){fl(t)&&n.delete(e)}function TS(){Qh=!1,qn!==null&&fl(qn)&&(qn=null),Kn!==null&&fl(Kn)&&(Kn=null),Gn!==null&&fl(Gn)&&(Gn=null),co.forEach(sg),ho.forEach(sg)}function Ss(t,e){t.blockedOn===e&&(t.blockedOn=null,Qh||(Qh=!0,mt.unstable_scheduleCallback(mt.unstable_NormalPriority,TS)))}function fo(t){function e(i){return Ss(i,t)}if(0<La.length){Ss(La[0],t);for(var n=1;n<La.length;n++){var r=La[n];r.blockedOn===t&&(r.blockedOn=null)}}for(qn!==null&&Ss(qn,t),Kn!==null&&Ss(Kn,t),Gn!==null&&Ss(Gn,t),co.forEach(e),ho.forEach(e),n=0;n<Vn.length;n++)r=Vn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Vn.length&&(n=Vn[0],n.blockedOn===null);)G_(n),n.blockedOn===null&&Vn.shift()}var Ni=An.ReactCurrentBatchConfig,Ml=!0;function SS(t,e,n,r){var i=ee,s=Ni.transition;Ni.transition=null;try{ee=1,Dd(t,e,n,r)}finally{ee=i,Ni.transition=s}}function AS(t,e,n,r){var i=ee,s=Ni.transition;Ni.transition=null;try{ee=4,Dd(t,e,n,r)}finally{ee=i,Ni.transition=s}}function Dd(t,e,n,r){if(Ml){var i=Yh(t,e,n,r);if(i===null)Qc(t,e,r,Fl,n),ig(t,r);else if(IS(i,t,e,n,r))r.stopPropagation();else if(ig(t,r),e&4&&-1<ES.indexOf(t)){for(;i!==null;){var s=Jo(i);if(s!==null&&W_(s),s=Yh(t,e,n,r),s===null&&Qc(t,e,r,Fl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Qc(t,e,r,null,n)}}var Fl=null;function Yh(t,e,n,r){if(Fl=null,t=xd(r),t=Cr(t),t!==null)if(e=ni(t),e===null)t=null;else if(n=e.tag,n===13){if(t=V_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Fl=t,null}function Q_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fS()){case Nd:return 1;case $_:return 4;case Ll:case dS:return 16;case j_:return 536870912;default:return 16}default:return 16}}var jn=null,Ld=null,dl=null;function Y_(){if(dl)return dl;var t,e=Ld,n=e.length,r,i="value"in jn?jn.value:jn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return dl=i.slice(t,1<r?1-r:void 0)}function pl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Va(){return!0}function og(){return!1}function vt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Va:og,this.isPropagationStopped=og,this}return de(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Va)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Va)},persist:function(){},isPersistent:Va}),e}var is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vd=vt(is),Xo=de({},is,{view:0,detail:0}),kS=vt(Xo),$c,jc,As,Lu=de({},Xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Md,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==As&&(As&&t.type==="mousemove"?($c=t.screenX-As.screenX,jc=t.screenY-As.screenY):jc=$c=0,As=t),$c)},movementY:function(t){return"movementY"in t?t.movementY:jc}}),ag=vt(Lu),CS=de({},Lu,{dataTransfer:0}),PS=vt(CS),RS=de({},Xo,{relatedTarget:0}),zc=vt(RS),xS=de({},is,{animationName:0,elapsedTime:0,pseudoElement:0}),NS=vt(xS),bS=de({},is,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),OS=vt(bS),DS=de({},is,{data:0}),lg=vt(DS),LS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},VS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},MS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function FS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=MS[t])?!!e[t]:!1}function Md(){return FS}var US=de({},Xo,{key:function(t){if(t.key){var e=LS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=pl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?VS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Md,charCode:function(t){return t.type==="keypress"?pl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$S=vt(US),jS=de({},Lu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ug=vt(jS),zS=de({},Xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Md}),BS=vt(zS),WS=de({},is,{propertyName:0,elapsedTime:0,pseudoElement:0}),HS=vt(WS),qS=de({},Lu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),KS=vt(qS),GS=[9,13,27,32],Fd=pn&&"CompositionEvent"in window,qs=null;pn&&"documentMode"in document&&(qs=document.documentMode);var QS=pn&&"TextEvent"in window&&!qs,X_=pn&&(!Fd||qs&&8<qs&&11>=qs),cg=String.fromCharCode(32),hg=!1;function J_(t,e){switch(t){case"keyup":return GS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Z_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var di=!1;function YS(t,e){switch(t){case"compositionend":return Z_(e);case"keypress":return e.which!==32?null:(hg=!0,cg);case"textInput":return t=e.data,t===cg&&hg?null:t;default:return null}}function XS(t,e){if(di)return t==="compositionend"||!Fd&&J_(t,e)?(t=Y_(),dl=Ld=jn=null,di=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return X_&&e.locale!=="ko"?null:e.data;default:return null}}var JS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!JS[t.type]:e==="textarea"}function e0(t,e,n,r){N_(r),e=Ul(e,"onChange"),0<e.length&&(n=new Vd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ks=null,po=null;function ZS(t){h0(t,0)}function Vu(t){var e=gi(t);if(S_(e))return t}function eA(t,e){if(t==="change")return e}var t0=!1;if(pn){var Bc;if(pn){var Wc="oninput"in document;if(!Wc){var dg=document.createElement("div");dg.setAttribute("oninput","return;"),Wc=typeof dg.oninput=="function"}Bc=Wc}else Bc=!1;t0=Bc&&(!document.documentMode||9<document.documentMode)}function pg(){Ks&&(Ks.detachEvent("onpropertychange",n0),po=Ks=null)}function n0(t){if(t.propertyName==="value"&&Vu(po)){var e=[];e0(e,po,t,xd(t)),L_(ZS,e)}}function tA(t,e,n){t==="focusin"?(pg(),Ks=e,po=n,Ks.attachEvent("onpropertychange",n0)):t==="focusout"&&pg()}function nA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vu(po)}function rA(t,e){if(t==="click")return Vu(e)}function iA(t,e){if(t==="input"||t==="change")return Vu(e)}function sA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ft=typeof Object.is=="function"?Object.is:sA;function mo(t,e){if(Ft(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!bh.call(e,i)||!Ft(t[i],e[i]))return!1}return!0}function mg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gg(t,e){var n=mg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=mg(n)}}function r0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?r0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function i0(){for(var t=window,e=bl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=bl(t.document)}return e}function Ud(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function oA(t){var e=i0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&r0(n.ownerDocument.documentElement,n)){if(r!==null&&Ud(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=gg(n,s);var o=gg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var aA=pn&&"documentMode"in document&&11>=document.documentMode,pi=null,Xh=null,Gs=null,Jh=!1;function yg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jh||pi==null||pi!==bl(r)||(r=pi,"selectionStart"in r&&Ud(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gs&&mo(Gs,r)||(Gs=r,r=Ul(Xh,"onSelect"),0<r.length&&(e=new Vd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=pi)))}function Ma(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var mi={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionend:Ma("Transition","TransitionEnd")},Hc={},s0={};pn&&(s0=document.createElement("div").style,"AnimationEvent"in window||(delete mi.animationend.animation,delete mi.animationiteration.animation,delete mi.animationstart.animation),"TransitionEvent"in window||delete mi.transitionend.transition);function Mu(t){if(Hc[t])return Hc[t];if(!mi[t])return t;var e=mi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in s0)return Hc[t]=e[n];return t}var o0=Mu("animationend"),a0=Mu("animationiteration"),l0=Mu("animationstart"),u0=Mu("transitionend"),c0=new Map,vg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pr(t,e){c0.set(t,e),ti(e,[t])}for(var qc=0;qc<vg.length;qc++){var Kc=vg[qc],lA=Kc.toLowerCase(),uA=Kc[0].toUpperCase()+Kc.slice(1);pr(lA,"on"+uA)}pr(o0,"onAnimationEnd");pr(a0,"onAnimationIteration");pr(l0,"onAnimationStart");pr("dblclick","onDoubleClick");pr("focusin","onFocus");pr("focusout","onBlur");pr(u0,"onTransitionEnd");$i("onMouseEnter",["mouseout","mouseover"]);$i("onMouseLeave",["mouseout","mouseover"]);$i("onPointerEnter",["pointerout","pointerover"]);$i("onPointerLeave",["pointerout","pointerover"]);ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ti("onBeforeInput",["compositionend","keypress","textInput","paste"]);ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ls="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cA=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ls));function _g(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,lS(r,e,void 0,t),t.currentTarget=null}function h0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;_g(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;_g(i,a,u),s=l}}}if(Dl)throw t=Kh,Dl=!1,Kh=null,t}function re(t,e){var n=e[rf];n===void 0&&(n=e[rf]=new Set);var r=t+"__bubble";n.has(r)||(f0(e,t,2,!1),n.add(r))}function Gc(t,e,n){var r=0;e&&(r|=4),f0(n,t,r,e)}var Fa="_reactListening"+Math.random().toString(36).slice(2);function go(t){if(!t[Fa]){t[Fa]=!0,__.forEach(function(n){n!=="selectionchange"&&(cA.has(n)||Gc(n,!1,t),Gc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Fa]||(e[Fa]=!0,Gc("selectionchange",!1,e))}}function f0(t,e,n,r){switch(Q_(e)){case 1:var i=SS;break;case 4:i=AS;break;default:i=Dd}n=i.bind(null,e,n,t),i=void 0,!qh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Qc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Cr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}L_(function(){var u=s,c=xd(n),h=[];e:{var f=c0.get(t);if(f!==void 0){var p=Vd,y=t;switch(t){case"keypress":if(pl(n)===0)break e;case"keydown":case"keyup":p=$S;break;case"focusin":y="focus",p=zc;break;case"focusout":y="blur",p=zc;break;case"beforeblur":case"afterblur":p=zc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=ag;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=PS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=BS;break;case o0:case a0:case l0:p=NS;break;case u0:p=HS;break;case"scroll":p=kS;break;case"wheel":p=KS;break;case"copy":case"cut":case"paste":p=OS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=ug}var v=(e&4)!==0,I=!v&&t==="scroll",m=v?f!==null?f+"Capture":null:f;v=[];for(var d=u,g;d!==null;){g=d;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,m!==null&&(w=uo(d,m),w!=null&&v.push(yo(d,w,g)))),I)break;d=d.return}0<v.length&&(f=new p(f,y,null,n,c),h.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Wh&&(y=n.relatedTarget||n.fromElement)&&(Cr(y)||y[mn]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=u,y=y?Cr(y):null,y!==null&&(I=ni(y),y!==I||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=u),p!==y)){if(v=ag,w="onMouseLeave",m="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(v=ug,w="onPointerLeave",m="onPointerEnter",d="pointer"),I=p==null?f:gi(p),g=y==null?f:gi(y),f=new v(w,d+"leave",p,n,c),f.target=I,f.relatedTarget=g,w=null,Cr(c)===u&&(v=new v(m,d+"enter",y,n,c),v.target=g,v.relatedTarget=I,w=v),I=w,p&&y)t:{for(v=p,m=y,d=0,g=v;g;g=oi(g))d++;for(g=0,w=m;w;w=oi(w))g++;for(;0<d-g;)v=oi(v),d--;for(;0<g-d;)m=oi(m),g--;for(;d--;){if(v===m||m!==null&&v===m.alternate)break t;v=oi(v),m=oi(m)}v=null}else v=null;p!==null&&wg(h,f,p,v,!1),y!==null&&I!==null&&wg(h,I,y,v,!0)}}e:{if(f=u?gi(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var S=eA;else if(fg(f))if(t0)S=iA;else{S=nA;var C=tA}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=rA);if(S&&(S=S(t,u))){e0(h,S,n,c);break e}C&&C(t,f,u),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&Uh(f,"number",f.value)}switch(C=u?gi(u):window,t){case"focusin":(fg(C)||C.contentEditable==="true")&&(pi=C,Xh=u,Gs=null);break;case"focusout":Gs=Xh=pi=null;break;case"mousedown":Jh=!0;break;case"contextmenu":case"mouseup":case"dragend":Jh=!1,yg(h,n,c);break;case"selectionchange":if(aA)break;case"keydown":case"keyup":yg(h,n,c)}var R;if(Fd)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else di?J_(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(X_&&n.locale!=="ko"&&(di||L!=="onCompositionStart"?L==="onCompositionEnd"&&di&&(R=Y_()):(jn=c,Ld="value"in jn?jn.value:jn.textContent,di=!0)),C=Ul(u,L),0<C.length&&(L=new lg(L,t,null,n,c),h.push({event:L,listeners:C}),R?L.data=R:(R=Z_(n),R!==null&&(L.data=R)))),(R=QS?YS(t,n):XS(t,n))&&(u=Ul(u,"onBeforeInput"),0<u.length&&(c=new lg("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=R))}h0(h,e)})}function yo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ul(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=uo(t,n),s!=null&&r.unshift(yo(t,s,i)),s=uo(t,e),s!=null&&r.push(yo(t,s,i))),t=t.return}return r}function oi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function wg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=uo(n,s),l!=null&&o.unshift(yo(n,l,a))):i||(l=uo(n,s),l!=null&&o.push(yo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var hA=/\r\n?/g,fA=/\u0000|\uFFFD/g;function Eg(t){return(typeof t=="string"?t:""+t).replace(hA,`
`).replace(fA,"")}function Ua(t,e,n){if(e=Eg(e),Eg(t)!==e&&n)throw Error(k(425))}function $l(){}var Zh=null,ef=null;function tf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var nf=typeof setTimeout=="function"?setTimeout:void 0,dA=typeof clearTimeout=="function"?clearTimeout:void 0,Ig=typeof Promise=="function"?Promise:void 0,pA=typeof queueMicrotask=="function"?queueMicrotask:typeof Ig<"u"?function(t){return Ig.resolve(null).then(t).catch(mA)}:nf;function mA(t){setTimeout(function(){throw t})}function Yc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),fo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);fo(e)}function Qn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Tg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ss=Math.random().toString(36).slice(2),Bt="__reactFiber$"+ss,vo="__reactProps$"+ss,mn="__reactContainer$"+ss,rf="__reactEvents$"+ss,gA="__reactListeners$"+ss,yA="__reactHandles$"+ss;function Cr(t){var e=t[Bt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[mn]||n[Bt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Tg(t);t!==null;){if(n=t[Bt])return n;t=Tg(t)}return e}t=n,n=t.parentNode}return null}function Jo(t){return t=t[Bt]||t[mn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function gi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function Fu(t){return t[vo]||null}var sf=[],yi=-1;function mr(t){return{current:t}}function ae(t){0>yi||(t.current=sf[yi],sf[yi]=null,yi--)}function ne(t,e){yi++,sf[yi]=t.current,t.current=e}var or={},Xe=mr(or),lt=mr(!1),$r=or;function ji(t,e){var n=t.type.contextTypes;if(!n)return or;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ut(t){return t=t.childContextTypes,t!=null}function jl(){ae(lt),ae(Xe)}function Sg(t,e,n){if(Xe.current!==or)throw Error(k(168));ne(Xe,e),ne(lt,n)}function d0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,tS(t)||"Unknown",i));return de({},n,r)}function zl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||or,$r=Xe.current,ne(Xe,t),ne(lt,lt.current),!0}function Ag(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=d0(t,e,$r),r.__reactInternalMemoizedMergedChildContext=t,ae(lt),ae(Xe),ne(Xe,t)):ae(lt),ne(lt,n)}var nn=null,Uu=!1,Xc=!1;function p0(t){nn===null?nn=[t]:nn.push(t)}function vA(t){Uu=!0,p0(t)}function gr(){if(!Xc&&nn!==null){Xc=!0;var t=0,e=ee;try{var n=nn;for(ee=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}nn=null,Uu=!1}catch(i){throw nn!==null&&(nn=nn.slice(t+1)),U_(Nd,gr),i}finally{ee=e,Xc=!1}}return null}var vi=[],_i=0,Bl=null,Wl=0,wt=[],Et=0,jr=null,on=1,an="";function Sr(t,e){vi[_i++]=Wl,vi[_i++]=Bl,Bl=t,Wl=e}function m0(t,e,n){wt[Et++]=on,wt[Et++]=an,wt[Et++]=jr,jr=t;var r=on;t=an;var i=32-Vt(r)-1;r&=~(1<<i),n+=1;var s=32-Vt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,on=1<<32-Vt(e)+i|n<<i|r,an=s+t}else on=1<<s|n<<i|r,an=t}function $d(t){t.return!==null&&(Sr(t,1),m0(t,1,0))}function jd(t){for(;t===Bl;)Bl=vi[--_i],vi[_i]=null,Wl=vi[--_i],vi[_i]=null;for(;t===jr;)jr=wt[--Et],wt[Et]=null,an=wt[--Et],wt[Et]=null,on=wt[--Et],wt[Et]=null}var pt=null,dt=null,ce=!1,Ot=null;function g0(t,e){var n=St(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function kg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,pt=t,dt=Qn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,pt=t,dt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=jr!==null?{id:on,overflow:an}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=St(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,pt=t,dt=null,!0):!1;default:return!1}}function of(t){return(t.mode&1)!==0&&(t.flags&128)===0}function af(t){if(ce){var e=dt;if(e){var n=e;if(!kg(t,e)){if(of(t))throw Error(k(418));e=Qn(n.nextSibling);var r=pt;e&&kg(t,e)?g0(r,n):(t.flags=t.flags&-4097|2,ce=!1,pt=t)}}else{if(of(t))throw Error(k(418));t.flags=t.flags&-4097|2,ce=!1,pt=t}}}function Cg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;pt=t}function $a(t){if(t!==pt)return!1;if(!ce)return Cg(t),ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!tf(t.type,t.memoizedProps)),e&&(e=dt)){if(of(t))throw y0(),Error(k(418));for(;e;)g0(t,e),e=Qn(e.nextSibling)}if(Cg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){dt=Qn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}dt=null}}else dt=pt?Qn(t.stateNode.nextSibling):null;return!0}function y0(){for(var t=dt;t;)t=Qn(t.nextSibling)}function zi(){dt=pt=null,ce=!1}function zd(t){Ot===null?Ot=[t]:Ot.push(t)}var _A=An.ReactCurrentBatchConfig;function Nt(t,e){if(t&&t.defaultProps){e=de({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Hl=mr(null),ql=null,wi=null,Bd=null;function Wd(){Bd=wi=ql=null}function Hd(t){var e=Hl.current;ae(Hl),t._currentValue=e}function lf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function bi(t,e){ql=t,Bd=wi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(at=!0),t.firstContext=null)}function kt(t){var e=t._currentValue;if(Bd!==t)if(t={context:t,memoizedValue:e,next:null},wi===null){if(ql===null)throw Error(k(308));wi=t,ql.dependencies={lanes:0,firstContext:t}}else wi=wi.next=t;return e}var Pr=null;function qd(t){Pr===null?Pr=[t]:Pr.push(t)}function v0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,qd(e)):(n.next=i.next,i.next=n),e.interleaved=n,gn(t,r)}function gn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ln=!1;function Kd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Yn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,gn(t,n)}return i=r.interleaved,i===null?(e.next=e,qd(r)):(e.next=i.next,i.next=e),r.interleaved=e,gn(t,n)}function ml(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bd(t,n)}}function Pg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Kl(t,e,n,r){var i=t.updateQueue;Ln=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(f=e,p=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(p,h,f);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,f=typeof y=="function"?y.call(p,h,f):y,f==null)break e;h=de({},h,f);break e;case 2:Ln=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Br|=o,t.lanes=o,t.memoizedState=h}}function Rg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var w0=new v_.Component().refs;function uf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:de({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var $u={isMounted:function(t){return(t=t._reactInternals)?ni(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=nt(),i=Jn(t),s=hn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Yn(t,s,i),e!==null&&(Mt(e,t,i,r),ml(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=nt(),i=Jn(t),s=hn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Yn(t,s,i),e!==null&&(Mt(e,t,i,r),ml(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=nt(),r=Jn(t),i=hn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Yn(t,i,r),e!==null&&(Mt(e,t,r,n),ml(e,t,r))}};function xg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!mo(n,r)||!mo(i,s):!0}function E0(t,e,n){var r=!1,i=or,s=e.contextType;return typeof s=="object"&&s!==null?s=kt(s):(i=ut(e)?$r:Xe.current,r=e.contextTypes,s=(r=r!=null)?ji(t,i):or),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=$u,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ng(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&$u.enqueueReplaceState(e,e.state,null)}function cf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=w0,Kd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=kt(s):(s=ut(e)?$r:Xe.current,i.context=ji(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(uf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&$u.enqueueReplaceState(i,i.state,null),Kl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ks(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===w0&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function ja(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function bg(t){var e=t._init;return e(t._payload)}function I0(t){function e(m,d){if(t){var g=m.deletions;g===null?(m.deletions=[d],m.flags|=16):g.push(d)}}function n(m,d){if(!t)return null;for(;d!==null;)e(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function i(m,d){return m=Zn(m,d),m.index=0,m.sibling=null,m}function s(m,d,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<d?(m.flags|=2,d):g):(m.flags|=2,d)):(m.flags|=1048576,d)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,d,g,w){return d===null||d.tag!==6?(d=ih(g,m.mode,w),d.return=m,d):(d=i(d,g),d.return=m,d)}function l(m,d,g,w){var S=g.type;return S===fi?c(m,d,g.props.children,w,g.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Dn&&bg(S)===d.type)?(w=i(d,g.props),w.ref=ks(m,d,g),w.return=m,w):(w=El(g.type,g.key,g.props,null,m.mode,w),w.ref=ks(m,d,g),w.return=m,w)}function u(m,d,g,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=sh(g,m.mode,w),d.return=m,d):(d=i(d,g.children||[]),d.return=m,d)}function c(m,d,g,w,S){return d===null||d.tag!==7?(d=Mr(g,m.mode,w,S),d.return=m,d):(d=i(d,g),d.return=m,d)}function h(m,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ih(""+d,m.mode,g),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case xa:return g=El(d.type,d.key,d.props,null,m.mode,g),g.ref=ks(m,null,d),g.return=m,g;case hi:return d=sh(d,m.mode,g),d.return=m,d;case Dn:var w=d._init;return h(m,w(d._payload),g)}if(Os(d)||Es(d))return d=Mr(d,m.mode,g,null),d.return=m,d;ja(m,d)}return null}function f(m,d,g,w){var S=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return S!==null?null:a(m,d,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case xa:return g.key===S?l(m,d,g,w):null;case hi:return g.key===S?u(m,d,g,w):null;case Dn:return S=g._init,f(m,d,S(g._payload),w)}if(Os(g)||Es(g))return S!==null?null:c(m,d,g,w,null);ja(m,g)}return null}function p(m,d,g,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(g)||null,a(d,m,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case xa:return m=m.get(w.key===null?g:w.key)||null,l(d,m,w,S);case hi:return m=m.get(w.key===null?g:w.key)||null,u(d,m,w,S);case Dn:var C=w._init;return p(m,d,g,C(w._payload),S)}if(Os(w)||Es(w))return m=m.get(g)||null,c(d,m,w,S,null);ja(d,w)}return null}function y(m,d,g,w){for(var S=null,C=null,R=d,L=d=0,K=null;R!==null&&L<g.length;L++){R.index>L?(K=R,R=null):K=R.sibling;var z=f(m,R,g[L],w);if(z===null){R===null&&(R=K);break}t&&R&&z.alternate===null&&e(m,R),d=s(z,d,L),C===null?S=z:C.sibling=z,C=z,R=K}if(L===g.length)return n(m,R),ce&&Sr(m,L),S;if(R===null){for(;L<g.length;L++)R=h(m,g[L],w),R!==null&&(d=s(R,d,L),C===null?S=R:C.sibling=R,C=R);return ce&&Sr(m,L),S}for(R=r(m,R);L<g.length;L++)K=p(R,m,L,g[L],w),K!==null&&(t&&K.alternate!==null&&R.delete(K.key===null?L:K.key),d=s(K,d,L),C===null?S=K:C.sibling=K,C=K);return t&&R.forEach(function(Rt){return e(m,Rt)}),ce&&Sr(m,L),S}function v(m,d,g,w){var S=Es(g);if(typeof S!="function")throw Error(k(150));if(g=S.call(g),g==null)throw Error(k(151));for(var C=S=null,R=d,L=d=0,K=null,z=g.next();R!==null&&!z.done;L++,z=g.next()){R.index>L?(K=R,R=null):K=R.sibling;var Rt=f(m,R,z.value,w);if(Rt===null){R===null&&(R=K);break}t&&R&&Rt.alternate===null&&e(m,R),d=s(Rt,d,L),C===null?S=Rt:C.sibling=Rt,C=Rt,R=K}if(z.done)return n(m,R),ce&&Sr(m,L),S;if(R===null){for(;!z.done;L++,z=g.next())z=h(m,z.value,w),z!==null&&(d=s(z,d,L),C===null?S=z:C.sibling=z,C=z);return ce&&Sr(m,L),S}for(R=r(m,R);!z.done;L++,z=g.next())z=p(R,m,L,z.value,w),z!==null&&(t&&z.alternate!==null&&R.delete(z.key===null?L:z.key),d=s(z,d,L),C===null?S=z:C.sibling=z,C=z);return t&&R.forEach(function(_s){return e(m,_s)}),ce&&Sr(m,L),S}function I(m,d,g,w){if(typeof g=="object"&&g!==null&&g.type===fi&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case xa:e:{for(var S=g.key,C=d;C!==null;){if(C.key===S){if(S=g.type,S===fi){if(C.tag===7){n(m,C.sibling),d=i(C,g.props.children),d.return=m,m=d;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Dn&&bg(S)===C.type){n(m,C.sibling),d=i(C,g.props),d.ref=ks(m,C,g),d.return=m,m=d;break e}n(m,C);break}else e(m,C);C=C.sibling}g.type===fi?(d=Mr(g.props.children,m.mode,w,g.key),d.return=m,m=d):(w=El(g.type,g.key,g.props,null,m.mode,w),w.ref=ks(m,d,g),w.return=m,m=w)}return o(m);case hi:e:{for(C=g.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){n(m,d.sibling),d=i(d,g.children||[]),d.return=m,m=d;break e}else{n(m,d);break}else e(m,d);d=d.sibling}d=sh(g,m.mode,w),d.return=m,m=d}return o(m);case Dn:return C=g._init,I(m,d,C(g._payload),w)}if(Os(g))return y(m,d,g,w);if(Es(g))return v(m,d,g,w);ja(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(n(m,d.sibling),d=i(d,g),d.return=m,m=d):(n(m,d),d=ih(g,m.mode,w),d.return=m,m=d),o(m)):n(m,d)}return I}var Bi=I0(!0),T0=I0(!1),Zo={},Qt=mr(Zo),_o=mr(Zo),wo=mr(Zo);function Rr(t){if(t===Zo)throw Error(k(174));return t}function Gd(t,e){switch(ne(wo,e),ne(_o,t),ne(Qt,Zo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:jh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=jh(e,t)}ae(Qt),ne(Qt,e)}function Wi(){ae(Qt),ae(_o),ae(wo)}function S0(t){Rr(wo.current);var e=Rr(Qt.current),n=jh(e,t.type);e!==n&&(ne(_o,t),ne(Qt,n))}function Qd(t){_o.current===t&&(ae(Qt),ae(_o))}var he=mr(0);function Gl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Jc=[];function Yd(){for(var t=0;t<Jc.length;t++)Jc[t]._workInProgressVersionPrimary=null;Jc.length=0}var gl=An.ReactCurrentDispatcher,Zc=An.ReactCurrentBatchConfig,zr=0,fe=null,Ae=null,Ne=null,Ql=!1,Qs=!1,Eo=0,wA=0;function Be(){throw Error(k(321))}function Xd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ft(t[n],e[n]))return!1;return!0}function Jd(t,e,n,r,i,s){if(zr=s,fe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,gl.current=t===null||t.memoizedState===null?SA:AA,t=n(r,i),Qs){s=0;do{if(Qs=!1,Eo=0,25<=s)throw Error(k(301));s+=1,Ne=Ae=null,e.updateQueue=null,gl.current=kA,t=n(r,i)}while(Qs)}if(gl.current=Yl,e=Ae!==null&&Ae.next!==null,zr=0,Ne=Ae=fe=null,Ql=!1,e)throw Error(k(300));return t}function Zd(){var t=Eo!==0;return Eo=0,t}function zt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?fe.memoizedState=Ne=t:Ne=Ne.next=t,Ne}function Ct(){if(Ae===null){var t=fe.alternate;t=t!==null?t.memoizedState:null}else t=Ae.next;var e=Ne===null?fe.memoizedState:Ne.next;if(e!==null)Ne=e,Ae=t;else{if(t===null)throw Error(k(310));Ae=t,t={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Ne===null?fe.memoizedState=Ne=t:Ne=Ne.next=t}return Ne}function Io(t,e){return typeof e=="function"?e(t):e}function eh(t){var e=Ct(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=Ae,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((zr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,fe.lanes|=c,Br|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Ft(r,e.memoizedState)||(at=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,fe.lanes|=s,Br|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function th(t){var e=Ct(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ft(s,e.memoizedState)||(at=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function A0(){}function k0(t,e){var n=fe,r=Ct(),i=e(),s=!Ft(r.memoizedState,i);if(s&&(r.memoizedState=i,at=!0),r=r.queue,ep(R0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ne!==null&&Ne.memoizedState.tag&1){if(n.flags|=2048,To(9,P0.bind(null,n,r,i,e),void 0,null),be===null)throw Error(k(349));zr&30||C0(n,e,i)}return i}function C0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=fe.updateQueue,e===null?(e={lastEffect:null,stores:null},fe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function P0(t,e,n,r){e.value=n,e.getSnapshot=r,x0(e)&&N0(t)}function R0(t,e,n){return n(function(){x0(e)&&N0(t)})}function x0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ft(t,n)}catch{return!0}}function N0(t){var e=gn(t,1);e!==null&&Mt(e,t,1,-1)}function Og(t){var e=zt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:t},e.queue=t,t=t.dispatch=TA.bind(null,fe,t),[e.memoizedState,t]}function To(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=fe.updateQueue,e===null?(e={lastEffect:null,stores:null},fe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function b0(){return Ct().memoizedState}function yl(t,e,n,r){var i=zt();fe.flags|=t,i.memoizedState=To(1|e,n,void 0,r===void 0?null:r)}function ju(t,e,n,r){var i=Ct();r=r===void 0?null:r;var s=void 0;if(Ae!==null){var o=Ae.memoizedState;if(s=o.destroy,r!==null&&Xd(r,o.deps)){i.memoizedState=To(e,n,s,r);return}}fe.flags|=t,i.memoizedState=To(1|e,n,s,r)}function Dg(t,e){return yl(8390656,8,t,e)}function ep(t,e){return ju(2048,8,t,e)}function O0(t,e){return ju(4,2,t,e)}function D0(t,e){return ju(4,4,t,e)}function L0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function V0(t,e,n){return n=n!=null?n.concat([t]):null,ju(4,4,L0.bind(null,e,t),n)}function tp(){}function M0(t,e){var n=Ct();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Xd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function F0(t,e){var n=Ct();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Xd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function U0(t,e,n){return zr&21?(Ft(n,e)||(n=z_(),fe.lanes|=n,Br|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,at=!0),t.memoizedState=n)}function EA(t,e){var n=ee;ee=n!==0&&4>n?n:4,t(!0);var r=Zc.transition;Zc.transition={};try{t(!1),e()}finally{ee=n,Zc.transition=r}}function $0(){return Ct().memoizedState}function IA(t,e,n){var r=Jn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},j0(t))z0(e,n);else if(n=v0(t,e,n,r),n!==null){var i=nt();Mt(n,t,r,i),B0(n,e,r)}}function TA(t,e,n){var r=Jn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(j0(t))z0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Ft(a,o)){var l=e.interleaved;l===null?(i.next=i,qd(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=v0(t,e,i,r),n!==null&&(i=nt(),Mt(n,t,r,i),B0(n,e,r))}}function j0(t){var e=t.alternate;return t===fe||e!==null&&e===fe}function z0(t,e){Qs=Ql=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function B0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bd(t,n)}}var Yl={readContext:kt,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useInsertionEffect:Be,useLayoutEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useMutableSource:Be,useSyncExternalStore:Be,useId:Be,unstable_isNewReconciler:!1},SA={readContext:kt,useCallback:function(t,e){return zt().memoizedState=[t,e===void 0?null:e],t},useContext:kt,useEffect:Dg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,yl(4194308,4,L0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return yl(4194308,4,t,e)},useInsertionEffect:function(t,e){return yl(4,2,t,e)},useMemo:function(t,e){var n=zt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=zt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=IA.bind(null,fe,t),[r.memoizedState,t]},useRef:function(t){var e=zt();return t={current:t},e.memoizedState=t},useState:Og,useDebugValue:tp,useDeferredValue:function(t){return zt().memoizedState=t},useTransition:function(){var t=Og(!1),e=t[0];return t=EA.bind(null,t[1]),zt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=fe,i=zt();if(ce){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),be===null)throw Error(k(349));zr&30||C0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Dg(R0.bind(null,r,s,t),[t]),r.flags|=2048,To(9,P0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=zt(),e=be.identifierPrefix;if(ce){var n=an,r=on;n=(r&~(1<<32-Vt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Eo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=wA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},AA={readContext:kt,useCallback:M0,useContext:kt,useEffect:ep,useImperativeHandle:V0,useInsertionEffect:O0,useLayoutEffect:D0,useMemo:F0,useReducer:eh,useRef:b0,useState:function(){return eh(Io)},useDebugValue:tp,useDeferredValue:function(t){var e=Ct();return U0(e,Ae.memoizedState,t)},useTransition:function(){var t=eh(Io)[0],e=Ct().memoizedState;return[t,e]},useMutableSource:A0,useSyncExternalStore:k0,useId:$0,unstable_isNewReconciler:!1},kA={readContext:kt,useCallback:M0,useContext:kt,useEffect:ep,useImperativeHandle:V0,useInsertionEffect:O0,useLayoutEffect:D0,useMemo:F0,useReducer:th,useRef:b0,useState:function(){return th(Io)},useDebugValue:tp,useDeferredValue:function(t){var e=Ct();return Ae===null?e.memoizedState=t:U0(e,Ae.memoizedState,t)},useTransition:function(){var t=th(Io)[0],e=Ct().memoizedState;return[t,e]},useMutableSource:A0,useSyncExternalStore:k0,useId:$0,unstable_isNewReconciler:!1};function Hi(t,e){try{var n="",r=e;do n+=eS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function nh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function hf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var CA=typeof WeakMap=="function"?WeakMap:Map;function W0(t,e,n){n=hn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Jl||(Jl=!0,Ef=r),hf(t,e)},n}function H0(t,e,n){n=hn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){hf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){hf(t,e),typeof r!="function"&&(Xn===null?Xn=new Set([this]):Xn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Lg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new CA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=jA.bind(null,t,e,n),e.then(t,t))}function Vg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Mg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=hn(-1,1),e.tag=2,Yn(n,e,1))),n.lanes|=1),t)}var PA=An.ReactCurrentOwner,at=!1;function et(t,e,n,r){e.child=t===null?T0(e,null,n,r):Bi(e,t.child,n,r)}function Fg(t,e,n,r,i){n=n.render;var s=e.ref;return bi(e,i),r=Jd(t,e,n,r,s,i),n=Zd(),t!==null&&!at?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,yn(t,e,i)):(ce&&n&&$d(e),e.flags|=1,et(t,e,r,i),e.child)}function Ug(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!up(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,q0(t,e,s,r,i)):(t=El(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:mo,n(o,r)&&t.ref===e.ref)return yn(t,e,i)}return e.flags|=1,t=Zn(s,r),t.ref=e.ref,t.return=e,e.child=t}function q0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(mo(s,r)&&t.ref===e.ref)if(at=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(at=!0);else return e.lanes=t.lanes,yn(t,e,i)}return ff(t,e,n,r,i)}function K0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(Ii,ft),ft|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ne(Ii,ft),ft|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ne(Ii,ft),ft|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ne(Ii,ft),ft|=r;return et(t,e,i,n),e.child}function G0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ff(t,e,n,r,i){var s=ut(n)?$r:Xe.current;return s=ji(e,s),bi(e,i),n=Jd(t,e,n,r,s,i),r=Zd(),t!==null&&!at?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,yn(t,e,i)):(ce&&r&&$d(e),e.flags|=1,et(t,e,n,i),e.child)}function $g(t,e,n,r,i){if(ut(n)){var s=!0;zl(e)}else s=!1;if(bi(e,i),e.stateNode===null)vl(t,e),E0(e,n,r),cf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=kt(u):(u=ut(n)?$r:Xe.current,u=ji(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Ng(e,o,r,u),Ln=!1;var f=e.memoizedState;o.state=f,Kl(e,r,o,i),l=e.memoizedState,a!==r||f!==l||lt.current||Ln?(typeof c=="function"&&(uf(e,n,c,r),l=e.memoizedState),(a=Ln||xg(e,n,a,r,f,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,_0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Nt(e.type,a),o.props=u,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=kt(l):(l=ut(n)?$r:Xe.current,l=ji(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Ng(e,o,r,l),Ln=!1,f=e.memoizedState,o.state=f,Kl(e,r,o,i);var y=e.memoizedState;a!==h||f!==y||lt.current||Ln?(typeof p=="function"&&(uf(e,n,p,r),y=e.memoizedState),(u=Ln||xg(e,n,u,r,f,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return df(t,e,n,r,s,i)}function df(t,e,n,r,i,s){G0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ag(e,n,!1),yn(t,e,s);r=e.stateNode,PA.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Bi(e,t.child,null,s),e.child=Bi(e,null,a,s)):et(t,e,a,s),e.memoizedState=r.state,i&&Ag(e,n,!0),e.child}function Q0(t){var e=t.stateNode;e.pendingContext?Sg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Sg(t,e.context,!1),Gd(t,e.containerInfo)}function jg(t,e,n,r,i){return zi(),zd(i),e.flags|=256,et(t,e,n,r),e.child}var pf={dehydrated:null,treeContext:null,retryLane:0};function mf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Y0(t,e,n){var r=e.pendingProps,i=he.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ne(he,i&1),t===null)return af(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Wu(o,r,0,null),t=Mr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=mf(n),e.memoizedState=pf,t):np(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return RA(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Zn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Zn(a,s):(s=Mr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?mf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=pf,r}return s=t.child,t=s.sibling,r=Zn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function np(t,e){return e=Wu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function za(t,e,n,r){return r!==null&&zd(r),Bi(e,t.child,null,n),t=np(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function RA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=nh(Error(k(422))),za(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Wu({mode:"visible",children:r.children},i,0,null),s=Mr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Bi(e,t.child,null,o),e.child.memoizedState=mf(o),e.memoizedState=pf,s);if(!(e.mode&1))return za(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(k(419)),r=nh(s,r,void 0),za(t,e,o,r)}if(a=(o&t.childLanes)!==0,at||a){if(r=be,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,gn(t,i),Mt(r,t,i,-1))}return lp(),r=nh(Error(k(421))),za(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=zA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,dt=Qn(i.nextSibling),pt=e,ce=!0,Ot=null,t!==null&&(wt[Et++]=on,wt[Et++]=an,wt[Et++]=jr,on=t.id,an=t.overflow,jr=e),e=np(e,r.children),e.flags|=4096,e)}function zg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),lf(t.return,e,n)}function rh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function X0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(et(t,e,r.children,n),r=he.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zg(t,n,e);else if(t.tag===19)zg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ne(he,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Gl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),rh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Gl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}rh(e,!0,n,null,s);break;case"together":rh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function vl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function yn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Br|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=Zn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Zn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function xA(t,e,n){switch(e.tag){case 3:Q0(e),zi();break;case 5:S0(e);break;case 1:ut(e.type)&&zl(e);break;case 4:Gd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ne(Hl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ne(he,he.current&1),e.flags|=128,null):n&e.child.childLanes?Y0(t,e,n):(ne(he,he.current&1),t=yn(t,e,n),t!==null?t.sibling:null);ne(he,he.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return X0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ne(he,he.current),r)break;return null;case 22:case 23:return e.lanes=0,K0(t,e,n)}return yn(t,e,n)}var J0,gf,Z0,e1;J0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gf=function(){};Z0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Rr(Qt.current);var s=null;switch(n){case"input":i=Mh(t,i),r=Mh(t,r),s=[];break;case"select":i=de({},i,{value:void 0}),r=de({},r,{value:void 0}),s=[];break;case"textarea":i=$h(t,i),r=$h(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=$l)}zh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ao.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ao.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&re("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};e1=function(t,e,n,r){n!==r&&(e.flags|=4)};function Cs(t,e){if(!ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function We(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function NA(t,e,n){var r=e.pendingProps;switch(jd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(e),null;case 1:return ut(e.type)&&jl(),We(e),null;case 3:return r=e.stateNode,Wi(),ae(lt),ae(Xe),Yd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&($a(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ot!==null&&(Sf(Ot),Ot=null))),gf(t,e),We(e),null;case 5:Qd(e);var i=Rr(wo.current);if(n=e.type,t!==null&&e.stateNode!=null)Z0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return We(e),null}if(t=Rr(Qt.current),$a(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Bt]=e,r[vo]=s,t=(e.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(i=0;i<Ls.length;i++)re(Ls[i],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":Xm(r,s),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},re("invalid",r);break;case"textarea":Zm(r,s),re("invalid",r)}zh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ua(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ua(r.textContent,a,t),i=["children",""+a]):ao.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&re("scroll",r)}switch(n){case"input":Na(r),Jm(r,s,!0);break;case"textarea":Na(r),eg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=$l)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=C_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Bt]=e,t[vo]=r,J0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Bh(n,r),n){case"dialog":re("cancel",t),re("close",t),i=r;break;case"iframe":case"object":case"embed":re("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ls.length;i++)re(Ls[i],t);i=r;break;case"source":re("error",t),i=r;break;case"img":case"image":case"link":re("error",t),re("load",t),i=r;break;case"details":re("toggle",t),i=r;break;case"input":Xm(t,r),i=Mh(t,r),re("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=de({},r,{value:void 0}),re("invalid",t);break;case"textarea":Zm(t,r),i=$h(t,r),re("invalid",t);break;default:i=r}zh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?x_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&P_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&lo(t,l):typeof l=="number"&&lo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ao.hasOwnProperty(s)?l!=null&&s==="onScroll"&&re("scroll",t):l!=null&&kd(t,s,l,o))}switch(n){case"input":Na(t),Jm(t,r,!1);break;case"textarea":Na(t),eg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+sr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Pi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Pi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=$l)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return We(e),null;case 6:if(t&&e.stateNode!=null)e1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=Rr(wo.current),Rr(Qt.current),$a(e)){if(r=e.stateNode,n=e.memoizedProps,r[Bt]=e,(s=r.nodeValue!==n)&&(t=pt,t!==null))switch(t.tag){case 3:Ua(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ua(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Bt]=e,e.stateNode=r}return We(e),null;case 13:if(ae(he),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ce&&dt!==null&&e.mode&1&&!(e.flags&128))y0(),zi(),e.flags|=98560,s=!1;else if(s=$a(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(k(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[Bt]=e}else zi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;We(e),s=!1}else Ot!==null&&(Sf(Ot),Ot=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||he.current&1?ke===0&&(ke=3):lp())),e.updateQueue!==null&&(e.flags|=4),We(e),null);case 4:return Wi(),gf(t,e),t===null&&go(e.stateNode.containerInfo),We(e),null;case 10:return Hd(e.type._context),We(e),null;case 17:return ut(e.type)&&jl(),We(e),null;case 19:if(ae(he),s=e.memoizedState,s===null)return We(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Cs(s,!1);else{if(ke!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Gl(t),o!==null){for(e.flags|=128,Cs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ne(he,he.current&1|2),e.child}t=t.sibling}s.tail!==null&&_e()>qi&&(e.flags|=128,r=!0,Cs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Gl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Cs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ce)return We(e),null}else 2*_e()-s.renderingStartTime>qi&&n!==1073741824&&(e.flags|=128,r=!0,Cs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=_e(),e.sibling=null,n=he.current,ne(he,r?n&1|2:n&1),e):(We(e),null);case 22:case 23:return ap(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ft&1073741824&&(We(e),e.subtreeFlags&6&&(e.flags|=8192)):We(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function bA(t,e){switch(jd(e),e.tag){case 1:return ut(e.type)&&jl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Wi(),ae(lt),ae(Xe),Yd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Qd(e),null;case 13:if(ae(he),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));zi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ae(he),null;case 4:return Wi(),null;case 10:return Hd(e.type._context),null;case 22:case 23:return ap(),null;case 24:return null;default:return null}}var Ba=!1,Ke=!1,OA=typeof WeakSet=="function"?WeakSet:Set,N=null;function Ei(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){me(t,e,r)}else n.current=null}function yf(t,e,n){try{n()}catch(r){me(t,e,r)}}var Bg=!1;function DA(t,e){if(Zh=Ml,t=i0(),Ud(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,f=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ef={focusedElem:t,selectionRange:n},Ml=!1,N=e;N!==null;)if(e=N,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,N=t;else for(;N!==null;){e=N;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,I=y.memoizedState,m=e.stateNode,d=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:Nt(e.type,v),I);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(w){me(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,N=t;break}N=e.return}return y=Bg,Bg=!1,y}function Ys(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&yf(e,n,s)}i=i.next}while(i!==r)}}function zu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function vf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function t1(t){var e=t.alternate;e!==null&&(t.alternate=null,t1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Bt],delete e[vo],delete e[rf],delete e[gA],delete e[yA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function n1(t){return t.tag===5||t.tag===3||t.tag===4}function Wg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||n1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _f(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=$l));else if(r!==4&&(t=t.child,t!==null))for(_f(t,e,n),t=t.sibling;t!==null;)_f(t,e,n),t=t.sibling}function wf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(wf(t,e,n),t=t.sibling;t!==null;)wf(t,e,n),t=t.sibling}var Le=null,bt=!1;function xn(t,e,n){for(n=n.child;n!==null;)r1(t,e,n),n=n.sibling}function r1(t,e,n){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(Du,n)}catch{}switch(n.tag){case 5:Ke||Ei(n,e);case 6:var r=Le,i=bt;Le=null,xn(t,e,n),Le=r,bt=i,Le!==null&&(bt?(t=Le,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Le.removeChild(n.stateNode));break;case 18:Le!==null&&(bt?(t=Le,n=n.stateNode,t.nodeType===8?Yc(t.parentNode,n):t.nodeType===1&&Yc(t,n),fo(t)):Yc(Le,n.stateNode));break;case 4:r=Le,i=bt,Le=n.stateNode.containerInfo,bt=!0,xn(t,e,n),Le=r,bt=i;break;case 0:case 11:case 14:case 15:if(!Ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&yf(n,e,o),i=i.next}while(i!==r)}xn(t,e,n);break;case 1:if(!Ke&&(Ei(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){me(n,e,a)}xn(t,e,n);break;case 21:xn(t,e,n);break;case 22:n.mode&1?(Ke=(r=Ke)||n.memoizedState!==null,xn(t,e,n),Ke=r):xn(t,e,n);break;default:xn(t,e,n)}}function Hg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new OA),e.forEach(function(r){var i=BA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function xt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Le=a.stateNode,bt=!1;break e;case 3:Le=a.stateNode.containerInfo,bt=!0;break e;case 4:Le=a.stateNode.containerInfo,bt=!0;break e}a=a.return}if(Le===null)throw Error(k(160));r1(s,o,i),Le=null,bt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){me(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)i1(e,t),e=e.sibling}function i1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(xt(e,t),jt(t),r&4){try{Ys(3,t,t.return),zu(3,t)}catch(v){me(t,t.return,v)}try{Ys(5,t,t.return)}catch(v){me(t,t.return,v)}}break;case 1:xt(e,t),jt(t),r&512&&n!==null&&Ei(n,n.return);break;case 5:if(xt(e,t),jt(t),r&512&&n!==null&&Ei(n,n.return),t.flags&32){var i=t.stateNode;try{lo(i,"")}catch(v){me(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&A_(i,s),Bh(a,o);var u=Bh(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?x_(i,h):c==="dangerouslySetInnerHTML"?P_(i,h):c==="children"?lo(i,h):kd(i,c,h,u)}switch(a){case"input":Fh(i,s);break;case"textarea":k_(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Pi(i,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Pi(i,!!s.multiple,s.defaultValue,!0):Pi(i,!!s.multiple,s.multiple?[]:"",!1))}i[vo]=s}catch(v){me(t,t.return,v)}}break;case 6:if(xt(e,t),jt(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){me(t,t.return,v)}}break;case 3:if(xt(e,t),jt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{fo(e.containerInfo)}catch(v){me(t,t.return,v)}break;case 4:xt(e,t),jt(t);break;case 13:xt(e,t),jt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(sp=_e())),r&4&&Hg(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ke=(u=Ke)||c,xt(e,t),Ke=u):xt(e,t),jt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(N=t,c=t.child;c!==null;){for(h=N=c;N!==null;){switch(f=N,p=f.child,f.tag){case 0:case 11:case 14:case 15:Ys(4,f,f.return);break;case 1:Ei(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){me(r,n,v)}}break;case 5:Ei(f,f.return);break;case 22:if(f.memoizedState!==null){Kg(h);continue}}p!==null?(p.return=f,N=p):Kg(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=R_("display",o))}catch(v){me(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){me(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:xt(e,t),jt(t),r&4&&Hg(t);break;case 21:break;default:xt(e,t),jt(t)}}function jt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(n1(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(lo(i,""),r.flags&=-33);var s=Wg(t);wf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Wg(t);_f(t,a,o);break;default:throw Error(k(161))}}catch(l){me(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function LA(t,e,n){N=t,s1(t)}function s1(t,e,n){for(var r=(t.mode&1)!==0;N!==null;){var i=N,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ba;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ke;a=Ba;var u=Ke;if(Ba=o,(Ke=l)&&!u)for(N=i;N!==null;)o=N,l=o.child,o.tag===22&&o.memoizedState!==null?Gg(i):l!==null?(l.return=o,N=l):Gg(i);for(;s!==null;)N=s,s1(s),s=s.sibling;N=i,Ba=a,Ke=u}qg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,N=s):qg(t)}}function qg(t){for(;N!==null;){var e=N;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ke||zu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ke)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Nt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Rg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Rg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&fo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}Ke||e.flags&512&&vf(e)}catch(f){me(e,e.return,f)}}if(e===t){N=null;break}if(n=e.sibling,n!==null){n.return=e.return,N=n;break}N=e.return}}function Kg(t){for(;N!==null;){var e=N;if(e===t){N=null;break}var n=e.sibling;if(n!==null){n.return=e.return,N=n;break}N=e.return}}function Gg(t){for(;N!==null;){var e=N;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{zu(4,e)}catch(l){me(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){me(e,i,l)}}var s=e.return;try{vf(e)}catch(l){me(e,s,l)}break;case 5:var o=e.return;try{vf(e)}catch(l){me(e,o,l)}}}catch(l){me(e,e.return,l)}if(e===t){N=null;break}var a=e.sibling;if(a!==null){a.return=e.return,N=a;break}N=e.return}}var VA=Math.ceil,Xl=An.ReactCurrentDispatcher,rp=An.ReactCurrentOwner,At=An.ReactCurrentBatchConfig,J=0,be=null,Ie=null,Ue=0,ft=0,Ii=mr(0),ke=0,So=null,Br=0,Bu=0,ip=0,Xs=null,ot=null,sp=0,qi=1/0,tn=null,Jl=!1,Ef=null,Xn=null,Wa=!1,zn=null,Zl=0,Js=0,If=null,_l=-1,wl=0;function nt(){return J&6?_e():_l!==-1?_l:_l=_e()}function Jn(t){return t.mode&1?J&2&&Ue!==0?Ue&-Ue:_A.transition!==null?(wl===0&&(wl=z_()),wl):(t=ee,t!==0||(t=window.event,t=t===void 0?16:Q_(t.type)),t):1}function Mt(t,e,n,r){if(50<Js)throw Js=0,If=null,Error(k(185));Yo(t,n,r),(!(J&2)||t!==be)&&(t===be&&(!(J&2)&&(Bu|=n),ke===4&&Mn(t,Ue)),ct(t,r),n===1&&J===0&&!(e.mode&1)&&(qi=_e()+500,Uu&&gr()))}function ct(t,e){var n=t.callbackNode;_S(t,e);var r=Vl(t,t===be?Ue:0);if(r===0)n!==null&&rg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&rg(n),e===1)t.tag===0?vA(Qg.bind(null,t)):p0(Qg.bind(null,t)),pA(function(){!(J&6)&&gr()}),n=null;else{switch(B_(r)){case 1:n=Nd;break;case 4:n=$_;break;case 16:n=Ll;break;case 536870912:n=j_;break;default:n=Ll}n=d1(n,o1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function o1(t,e){if(_l=-1,wl=0,J&6)throw Error(k(327));var n=t.callbackNode;if(Oi()&&t.callbackNode!==n)return null;var r=Vl(t,t===be?Ue:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=eu(t,r);else{e=r;var i=J;J|=2;var s=l1();(be!==t||Ue!==e)&&(tn=null,qi=_e()+500,Vr(t,e));do try{UA();break}catch(a){a1(t,a)}while(1);Wd(),Xl.current=s,J=i,Ie!==null?e=0:(be=null,Ue=0,e=ke)}if(e!==0){if(e===2&&(i=Gh(t),i!==0&&(r=i,e=Tf(t,i))),e===1)throw n=So,Vr(t,0),Mn(t,r),ct(t,_e()),n;if(e===6)Mn(t,r);else{if(i=t.current.alternate,!(r&30)&&!MA(i)&&(e=eu(t,r),e===2&&(s=Gh(t),s!==0&&(r=s,e=Tf(t,s))),e===1))throw n=So,Vr(t,0),Mn(t,r),ct(t,_e()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:Ar(t,ot,tn);break;case 3:if(Mn(t,r),(r&130023424)===r&&(e=sp+500-_e(),10<e)){if(Vl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){nt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=nf(Ar.bind(null,t,ot,tn),e);break}Ar(t,ot,tn);break;case 4:if(Mn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Vt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=_e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*VA(r/1960))-r,10<r){t.timeoutHandle=nf(Ar.bind(null,t,ot,tn),r);break}Ar(t,ot,tn);break;case 5:Ar(t,ot,tn);break;default:throw Error(k(329))}}}return ct(t,_e()),t.callbackNode===n?o1.bind(null,t):null}function Tf(t,e){var n=Xs;return t.current.memoizedState.isDehydrated&&(Vr(t,e).flags|=256),t=eu(t,e),t!==2&&(e=ot,ot=n,e!==null&&Sf(e)),t}function Sf(t){ot===null?ot=t:ot.push.apply(ot,t)}function MA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ft(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Mn(t,e){for(e&=~ip,e&=~Bu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Vt(e),r=1<<n;t[n]=-1,e&=~r}}function Qg(t){if(J&6)throw Error(k(327));Oi();var e=Vl(t,0);if(!(e&1))return ct(t,_e()),null;var n=eu(t,e);if(t.tag!==0&&n===2){var r=Gh(t);r!==0&&(e=r,n=Tf(t,r))}if(n===1)throw n=So,Vr(t,0),Mn(t,e),ct(t,_e()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ar(t,ot,tn),ct(t,_e()),null}function op(t,e){var n=J;J|=1;try{return t(e)}finally{J=n,J===0&&(qi=_e()+500,Uu&&gr())}}function Wr(t){zn!==null&&zn.tag===0&&!(J&6)&&Oi();var e=J;J|=1;var n=At.transition,r=ee;try{if(At.transition=null,ee=1,t)return t()}finally{ee=r,At.transition=n,J=e,!(J&6)&&gr()}}function ap(){ft=Ii.current,ae(Ii)}function Vr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,dA(n)),Ie!==null)for(n=Ie.return;n!==null;){var r=n;switch(jd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&jl();break;case 3:Wi(),ae(lt),ae(Xe),Yd();break;case 5:Qd(r);break;case 4:Wi();break;case 13:ae(he);break;case 19:ae(he);break;case 10:Hd(r.type._context);break;case 22:case 23:ap()}n=n.return}if(be=t,Ie=t=Zn(t.current,null),Ue=ft=e,ke=0,So=null,ip=Bu=Br=0,ot=Xs=null,Pr!==null){for(e=0;e<Pr.length;e++)if(n=Pr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Pr=null}return t}function a1(t,e){do{var n=Ie;try{if(Wd(),gl.current=Yl,Ql){for(var r=fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ql=!1}if(zr=0,Ne=Ae=fe=null,Qs=!1,Eo=0,rp.current=null,n===null||n.return===null){ke=1,So=e,Ie=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ue,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Vg(o);if(p!==null){p.flags&=-257,Mg(p,o,a,s,e),p.mode&1&&Lg(s,u,e),e=p,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){Lg(s,u,e),lp();break e}l=Error(k(426))}}else if(ce&&a.mode&1){var I=Vg(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),Mg(I,o,a,s,e),zd(Hi(l,a));break e}}s=l=Hi(l,a),ke!==4&&(ke=2),Xs===null?Xs=[s]:Xs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=W0(s,l,e);Pg(s,m);break e;case 1:a=l;var d=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Xn===null||!Xn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=H0(s,a,e);Pg(s,w);break e}}s=s.return}while(s!==null)}c1(n)}catch(S){e=S,Ie===n&&n!==null&&(Ie=n=n.return);continue}break}while(1)}function l1(){var t=Xl.current;return Xl.current=Yl,t===null?Yl:t}function lp(){(ke===0||ke===3||ke===2)&&(ke=4),be===null||!(Br&268435455)&&!(Bu&268435455)||Mn(be,Ue)}function eu(t,e){var n=J;J|=2;var r=l1();(be!==t||Ue!==e)&&(tn=null,Vr(t,e));do try{FA();break}catch(i){a1(t,i)}while(1);if(Wd(),J=n,Xl.current=r,Ie!==null)throw Error(k(261));return be=null,Ue=0,ke}function FA(){for(;Ie!==null;)u1(Ie)}function UA(){for(;Ie!==null&&!cS();)u1(Ie)}function u1(t){var e=f1(t.alternate,t,ft);t.memoizedProps=t.pendingProps,e===null?c1(t):Ie=e,rp.current=null}function c1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=bA(n,e),n!==null){n.flags&=32767,Ie=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ke=6,Ie=null;return}}else if(n=NA(n,e,ft),n!==null){Ie=n;return}if(e=e.sibling,e!==null){Ie=e;return}Ie=e=t}while(e!==null);ke===0&&(ke=5)}function Ar(t,e,n){var r=ee,i=At.transition;try{At.transition=null,ee=1,$A(t,e,n,r)}finally{At.transition=i,ee=r}return null}function $A(t,e,n,r){do Oi();while(zn!==null);if(J&6)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(wS(t,s),t===be&&(Ie=be=null,Ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Wa||(Wa=!0,d1(Ll,function(){return Oi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=At.transition,At.transition=null;var o=ee;ee=1;var a=J;J|=4,rp.current=null,DA(t,n),i1(n,t),oA(ef),Ml=!!Zh,ef=Zh=null,t.current=n,LA(n),hS(),J=a,ee=o,At.transition=s}else t.current=n;if(Wa&&(Wa=!1,zn=t,Zl=i),s=t.pendingLanes,s===0&&(Xn=null),pS(n.stateNode),ct(t,_e()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Jl)throw Jl=!1,t=Ef,Ef=null,t;return Zl&1&&t.tag!==0&&Oi(),s=t.pendingLanes,s&1?t===If?Js++:(Js=0,If=t):Js=0,gr(),null}function Oi(){if(zn!==null){var t=B_(Zl),e=At.transition,n=ee;try{if(At.transition=null,ee=16>t?16:t,zn===null)var r=!1;else{if(t=zn,zn=null,Zl=0,J&6)throw Error(k(331));var i=J;for(J|=4,N=t.current;N!==null;){var s=N,o=s.child;if(N.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(N=u;N!==null;){var c=N;switch(c.tag){case 0:case 11:case 15:Ys(8,c,s)}var h=c.child;if(h!==null)h.return=c,N=h;else for(;N!==null;){c=N;var f=c.sibling,p=c.return;if(t1(c),c===u){N=null;break}if(f!==null){f.return=p,N=f;break}N=p}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var I=v.sibling;v.sibling=null,v=I}while(v!==null)}}N=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,N=o;else e:for(;N!==null;){if(s=N,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ys(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,N=m;break e}N=s.return}}var d=t.current;for(N=d;N!==null;){o=N;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,N=g;else e:for(o=d;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:zu(9,a)}}catch(S){me(a,a.return,S)}if(a===o){N=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,N=w;break e}N=a.return}}if(J=i,gr(),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(Du,t)}catch{}r=!0}return r}finally{ee=n,At.transition=e}}return!1}function Yg(t,e,n){e=Hi(n,e),e=W0(t,e,1),t=Yn(t,e,1),e=nt(),t!==null&&(Yo(t,1,e),ct(t,e))}function me(t,e,n){if(t.tag===3)Yg(t,t,n);else for(;e!==null;){if(e.tag===3){Yg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Xn===null||!Xn.has(r))){t=Hi(n,t),t=H0(e,t,1),e=Yn(e,t,1),t=nt(),e!==null&&(Yo(e,1,t),ct(e,t));break}}e=e.return}}function jA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=nt(),t.pingedLanes|=t.suspendedLanes&n,be===t&&(Ue&n)===n&&(ke===4||ke===3&&(Ue&130023424)===Ue&&500>_e()-sp?Vr(t,0):ip|=n),ct(t,e)}function h1(t,e){e===0&&(t.mode&1?(e=Da,Da<<=1,!(Da&130023424)&&(Da=4194304)):e=1);var n=nt();t=gn(t,e),t!==null&&(Yo(t,e,n),ct(t,n))}function zA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),h1(t,n)}function BA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),h1(t,n)}var f1;f1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||lt.current)at=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return at=!1,xA(t,e,n);at=!!(t.flags&131072)}else at=!1,ce&&e.flags&1048576&&m0(e,Wl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;vl(t,e),t=e.pendingProps;var i=ji(e,Xe.current);bi(e,n),i=Jd(null,e,r,t,i,n);var s=Zd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ut(r)?(s=!0,zl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Kd(e),i.updater=$u,e.stateNode=i,i._reactInternals=e,cf(e,r,t,n),e=df(null,e,r,!0,s,n)):(e.tag=0,ce&&s&&$d(e),et(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(vl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=HA(r),t=Nt(r,t),i){case 0:e=ff(null,e,r,t,n);break e;case 1:e=$g(null,e,r,t,n);break e;case 11:e=Fg(null,e,r,t,n);break e;case 14:e=Ug(null,e,r,Nt(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nt(r,i),ff(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nt(r,i),$g(t,e,r,i,n);case 3:e:{if(Q0(e),t===null)throw Error(k(387));r=e.pendingProps,s=e.memoizedState,i=s.element,_0(t,e),Kl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Hi(Error(k(423)),e),e=jg(t,e,r,n,i);break e}else if(r!==i){i=Hi(Error(k(424)),e),e=jg(t,e,r,n,i);break e}else for(dt=Qn(e.stateNode.containerInfo.firstChild),pt=e,ce=!0,Ot=null,n=T0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zi(),r===i){e=yn(t,e,n);break e}et(t,e,r,n)}e=e.child}return e;case 5:return S0(e),t===null&&af(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,tf(r,i)?o=null:s!==null&&tf(r,s)&&(e.flags|=32),G0(t,e),et(t,e,o,n),e.child;case 6:return t===null&&af(e),null;case 13:return Y0(t,e,n);case 4:return Gd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Bi(e,null,r,n):et(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nt(r,i),Fg(t,e,r,i,n);case 7:return et(t,e,e.pendingProps,n),e.child;case 8:return et(t,e,e.pendingProps.children,n),e.child;case 12:return et(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ne(Hl,r._currentValue),r._currentValue=o,s!==null)if(Ft(s.value,o)){if(s.children===i.children&&!lt.current){e=yn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=hn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),lf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),lf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}et(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,bi(e,n),i=kt(i),r=r(i),e.flags|=1,et(t,e,r,n),e.child;case 14:return r=e.type,i=Nt(r,e.pendingProps),i=Nt(r.type,i),Ug(t,e,r,i,n);case 15:return q0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nt(r,i),vl(t,e),e.tag=1,ut(r)?(t=!0,zl(e)):t=!1,bi(e,n),E0(e,r,i),cf(e,r,i,n),df(null,e,r,!0,t,n);case 19:return X0(t,e,n);case 22:return K0(t,e,n)}throw Error(k(156,e.tag))};function d1(t,e){return U_(t,e)}function WA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function St(t,e,n,r){return new WA(t,e,n,r)}function up(t){return t=t.prototype,!(!t||!t.isReactComponent)}function HA(t){if(typeof t=="function")return up(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Pd)return 11;if(t===Rd)return 14}return 2}function Zn(t,e){var n=t.alternate;return n===null?(n=St(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function El(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")up(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case fi:return Mr(n.children,i,s,e);case Cd:o=8,i|=8;break;case Oh:return t=St(12,n,e,i|2),t.elementType=Oh,t.lanes=s,t;case Dh:return t=St(13,n,e,i),t.elementType=Dh,t.lanes=s,t;case Lh:return t=St(19,n,e,i),t.elementType=Lh,t.lanes=s,t;case I_:return Wu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case w_:o=10;break e;case E_:o=9;break e;case Pd:o=11;break e;case Rd:o=14;break e;case Dn:o=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=St(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Mr(t,e,n,r){return t=St(7,t,r,e),t.lanes=n,t}function Wu(t,e,n,r){return t=St(22,t,r,e),t.elementType=I_,t.lanes=n,t.stateNode={isHidden:!1},t}function ih(t,e,n){return t=St(6,t,null,e),t.lanes=n,t}function sh(t,e,n){return e=St(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function qA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Uc(0),this.expirationTimes=Uc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function cp(t,e,n,r,i,s,o,a,l){return t=new qA(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=St(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kd(s),t}function KA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function p1(t){if(!t)return or;t=t._reactInternals;e:{if(ni(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ut(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if(ut(n))return d0(t,n,e)}return e}function m1(t,e,n,r,i,s,o,a,l){return t=cp(n,r,!0,t,i,s,o,a,l),t.context=p1(null),n=t.current,r=nt(),i=Jn(n),s=hn(r,i),s.callback=e??null,Yn(n,s,i),t.current.lanes=i,Yo(t,i,r),ct(t,r),t}function Hu(t,e,n,r){var i=e.current,s=nt(),o=Jn(i);return n=p1(n),e.context===null?e.context=n:e.pendingContext=n,e=hn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Yn(i,e,o),t!==null&&(Mt(t,i,o,s),ml(t,i,o)),o}function tu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Xg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function hp(t,e){Xg(t,e),(t=t.alternate)&&Xg(t,e)}function GA(){return null}var g1=typeof reportError=="function"?reportError:function(t){console.error(t)};function fp(t){this._internalRoot=t}qu.prototype.render=fp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));Hu(t,e,null,null)};qu.prototype.unmount=fp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Wr(function(){Hu(null,t,null,null)}),e[mn]=null}};function qu(t){this._internalRoot=t}qu.prototype.unstable_scheduleHydration=function(t){if(t){var e=q_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Vn.length&&e!==0&&e<Vn[n].priority;n++);Vn.splice(n,0,t),n===0&&G_(t)}};function dp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ku(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Jg(){}function QA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=tu(o);s.call(u)}}var o=m1(e,r,t,0,null,!1,!1,"",Jg);return t._reactRootContainer=o,t[mn]=o.current,go(t.nodeType===8?t.parentNode:t),Wr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=tu(l);a.call(u)}}var l=cp(t,0,!1,null,null,!1,!1,"",Jg);return t._reactRootContainer=l,t[mn]=l.current,go(t.nodeType===8?t.parentNode:t),Wr(function(){Hu(e,l,n,r)}),l}function Gu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=tu(o);a.call(l)}}Hu(e,o,t,i)}else o=QA(n,e,t,i,r);return tu(o)}W_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ds(e.pendingLanes);n!==0&&(bd(e,n|1),ct(e,_e()),!(J&6)&&(qi=_e()+500,gr()))}break;case 13:Wr(function(){var r=gn(t,1);if(r!==null){var i=nt();Mt(r,t,1,i)}}),hp(t,1)}};Od=function(t){if(t.tag===13){var e=gn(t,134217728);if(e!==null){var n=nt();Mt(e,t,134217728,n)}hp(t,134217728)}};H_=function(t){if(t.tag===13){var e=Jn(t),n=gn(t,e);if(n!==null){var r=nt();Mt(n,t,e,r)}hp(t,e)}};q_=function(){return ee};K_=function(t,e){var n=ee;try{return ee=t,e()}finally{ee=n}};Hh=function(t,e,n){switch(e){case"input":if(Fh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Fu(r);if(!i)throw Error(k(90));S_(r),Fh(r,i)}}}break;case"textarea":k_(t,n);break;case"select":e=n.value,e!=null&&Pi(t,!!n.multiple,e,!1)}};O_=op;D_=Wr;var YA={usingClientEntryPoint:!1,Events:[Jo,gi,Fu,N_,b_,op]},Ps={findFiberByHostInstance:Cr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},XA={bundleType:Ps.bundleType,version:Ps.version,rendererPackageName:Ps.rendererPackageName,rendererConfig:Ps.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:An.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=M_(t),t===null?null:t.stateNode},findFiberByHostInstance:Ps.findFiberByHostInstance||GA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ha=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ha.isDisabled&&Ha.supportsFiber)try{Du=Ha.inject(XA),Gt=Ha}catch{}}yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YA;yt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dp(e))throw Error(k(200));return KA(t,e,null,n)};yt.createRoot=function(t,e){if(!dp(t))throw Error(k(299));var n=!1,r="",i=g1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=cp(t,1,!1,null,null,n,!1,r,i),t[mn]=e.current,go(t.nodeType===8?t.parentNode:t),new fp(e)};yt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=M_(e),t=t===null?null:t.stateNode,t};yt.flushSync=function(t){return Wr(t)};yt.hydrate=function(t,e,n){if(!Ku(e))throw Error(k(200));return Gu(null,t,e,!0,n)};yt.hydrateRoot=function(t,e,n){if(!dp(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=g1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=m1(e,null,t,1,n??null,i,!1,s,o),t[mn]=e.current,go(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new qu(e)};yt.render=function(t,e,n){if(!Ku(e))throw Error(k(200));return Gu(null,t,e,!1,n)};yt.unmountComponentAtNode=function(t){if(!Ku(t))throw Error(k(40));return t._reactRootContainer?(Wr(function(){Gu(null,null,t,!1,function(){t._reactRootContainer=null,t[mn]=null})}),!0):!1};yt.unstable_batchedUpdates=op;yt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ku(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return Gu(t,e,n,!1,r)};yt.version="18.2.0-next-9e3b772b8-20220608";function y1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y1)}catch(t){console.error(t)}}y1(),m_.exports=yt;var JA=m_.exports,Zg=JA;Nh.createRoot=Zg.createRoot,Nh.hydrateRoot=Zg.hydrateRoot;/**
 * @remix-run/router v1.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ao(){return Ao=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ao.apply(this,arguments)}var Bn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Bn||(Bn={}));const ey="popstate";function ZA(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Af("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:nu(i)}return tk(e,n,null,t)}function Se(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function pp(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ek(){return Math.random().toString(36).substr(2,8)}function ty(t,e){return{usr:t.state,key:t.key,idx:e}}function Af(t,e,n,r){return n===void 0&&(n=null),Ao({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?os(e):e,{state:n,key:e&&e.key||r||ek()})}function nu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function os(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function tk(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Bn.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Ao({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Bn.Pop;let I=c(),m=I==null?null:I-u;u=I,l&&l({action:a,location:v.location,delta:m})}function f(I,m){a=Bn.Push;let d=Af(v.location,I,m);n&&n(d,I),u=c()+1;let g=ty(d,u),w=v.createHref(d);try{o.pushState(g,"",w)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(w)}s&&l&&l({action:a,location:v.location,delta:1})}function p(I,m){a=Bn.Replace;let d=Af(v.location,I,m);n&&n(d,I),u=c();let g=ty(d,u),w=v.createHref(d);o.replaceState(g,"",w),s&&l&&l({action:a,location:v.location,delta:0})}function y(I){let m=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof I=="string"?I:nu(I);return Se(m,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,m)}let v={get action(){return a},get location(){return t(i,o)},listen(I){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(ey,h),l=I,()=>{i.removeEventListener(ey,h),l=null}},createHref(I){return e(i,I)},createURL:y,encodeLocation(I){let m=y(I);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:p,go(I){return o.go(I)}};return v}var ny;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(ny||(ny={}));function nk(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?os(e):e,i=mp(r.pathname||"/",n);if(i==null)return null;let s=v1(t);rk(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=fk(s[a],mk(i));return o}function v1(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Se(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=er([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Se(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),v1(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:ck(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of _1(s.path))i(s,o,l)}),e}function _1(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=_1(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function rk(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:hk(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ik=/^:\w+$/,sk=3,ok=2,ak=1,lk=10,uk=-2,ry=t=>t==="*";function ck(t,e){let n=t.split("/"),r=n.length;return n.some(ry)&&(r+=uk),e&&(r+=ok),n.filter(i=>!ry(i)).reduce((i,s)=>i+(ik.test(s)?sk:s===""?ak:lk),r)}function hk(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function fk(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=dk({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:er([i,c.pathname]),pathnameBase:_k(er([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=er([i,c.pathnameBase]))}return s}function dk(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=pk(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{let{paramName:f,isOptional:p}=c;if(f==="*"){let v=a[h]||"";o=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const y=a[h];return p&&!y?u[f]=void 0:u[f]=gk(y||"",f),u},{}),pathname:s,pathnameBase:o,pattern:t}}function pk(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),pp(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function mk(t){try{return decodeURI(t)}catch(e){return pp(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function gk(t,e){try{return decodeURIComponent(t)}catch(n){return pp(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function mp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function yk(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?os(t):t;return{pathname:n?n.startsWith("/")?n:vk(n,e):e,search:wk(r),hash:Ek(i)}}function vk(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function oh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function w1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function E1(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=os(t):(i=Ao({},t),Se(!i.pathname||!i.pathname.includes("?"),oh("?","pathname","search",i)),Se(!i.pathname||!i.pathname.includes("#"),oh("#","pathname","hash",i)),Se(!i.search||!i.search.includes("#"),oh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),h-=1;i.pathname=f.join("/")}a=h>=0?e[h]:"/"}let l=yk(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const er=t=>t.join("/").replace(/\/\/+/g,"/"),_k=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),wk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Ek=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Ik(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const I1=["post","put","patch","delete"];new Set(I1);const Tk=["get",...I1];new Set(Tk);/**
 * React Router v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ru(){return ru=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ru.apply(this,arguments)}const gp=E.createContext(null),Sk=E.createContext(null),as=E.createContext(null),Qu=E.createContext(null),kn=E.createContext({outlet:null,matches:[],isDataRoute:!1}),T1=E.createContext(null);function Ak(t,e){let{relative:n}=e===void 0?{}:e;ea()||Se(!1);let{basename:r,navigator:i}=E.useContext(as),{hash:s,pathname:o,search:a}=A1(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:er([r,o])),i.createHref({pathname:l,search:a,hash:s})}function ea(){return E.useContext(Qu)!=null}function Yu(){return ea()||Se(!1),E.useContext(Qu).location}function S1(t){E.useContext(as).static||E.useLayoutEffect(t)}function yp(){let{isDataRoute:t}=E.useContext(kn);return t?$k():kk()}function kk(){ea()||Se(!1);let t=E.useContext(gp),{basename:e,navigator:n}=E.useContext(as),{matches:r}=E.useContext(kn),{pathname:i}=Yu(),s=JSON.stringify(w1(r).map(l=>l.pathnameBase)),o=E.useRef(!1);return S1(()=>{o.current=!0}),E.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=E1(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:er([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const Ck=E.createContext(null);function Pk(t){let e=E.useContext(kn).outlet;return e&&E.createElement(Ck.Provider,{value:t},e)}function Rk(){let{matches:t}=E.useContext(kn),e=t[t.length-1];return e?e.params:{}}function A1(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=E.useContext(kn),{pathname:i}=Yu(),s=JSON.stringify(w1(r).map(o=>o.pathnameBase));return E.useMemo(()=>E1(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function xk(t,e){return Nk(t,e)}function Nk(t,e,n){ea()||Se(!1);let{navigator:r}=E.useContext(as),{matches:i}=E.useContext(kn),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Yu(),u;if(e){var c;let v=typeof e=="string"?os(e):e;a==="/"||(c=v.pathname)!=null&&c.startsWith(a)||Se(!1),u=v}else u=l;let h=u.pathname||"/",f=a==="/"?h:h.slice(a.length)||"/",p=nk(t,{pathname:f}),y=Vk(p&&p.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:er([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:er([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return e&&y?E.createElement(Qu.Provider,{value:{location:ru({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Bn.Pop}},y):y}function bk(){let t=P1(),e=Ik(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},e),n?E.createElement("pre",{style:i},n):null,s)}const Ok=E.createElement(bk,null);class Dk extends E.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?E.createElement(kn.Provider,{value:this.props.routeContext},E.createElement(T1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Lk(t){let{routeContext:e,match:n,children:r}=t,i=E.useContext(gp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(kn.Provider,{value:e},r)}function Vk(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Se(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||Ok);let f=e.concat(s.slice(0,u+1)),p=()=>{let y;return c?y=h:l.route.Component?y=E.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,E.createElement(Lk,{match:l,routeContext:{outlet:a,matches:f,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?E.createElement(Dk,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:p(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):p()},null)}var k1=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(k1||{}),iu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(iu||{});function Mk(t){let e=E.useContext(gp);return e||Se(!1),e}function Fk(t){let e=E.useContext(Sk);return e||Se(!1),e}function Uk(t){let e=E.useContext(kn);return e||Se(!1),e}function C1(t){let e=Uk(),n=e.matches[e.matches.length-1];return n.route.id||Se(!1),n.route.id}function P1(){var t;let e=E.useContext(T1),n=Fk(iu.UseRouteError),r=C1(iu.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function $k(){let{router:t}=Mk(k1.UseNavigateStable),e=C1(iu.UseNavigateStable),n=E.useRef(!1);return S1(()=>{n.current=!0}),E.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ru({fromRouteId:e},s)))},[t,e])}function jk(t){return Pk(t.context)}function rn(t){Se(!1)}function zk(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Bn.Pop,navigator:s,static:o=!1}=t;ea()&&Se(!1);let a=e.replace(/^\/*/,"/"),l=E.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=os(r));let{pathname:u="/",search:c="",hash:h="",state:f=null,key:p="default"}=r,y=E.useMemo(()=>{let v=mp(u,a);return v==null?null:{location:{pathname:v,search:c,hash:h,state:f,key:p},navigationType:i}},[a,u,c,h,f,p,i]);return y==null?null:E.createElement(as.Provider,{value:l},E.createElement(Qu.Provider,{children:n,value:y}))}function R1(t){let{children:e,location:n}=t;return xk(kf(e),n)}new Promise(()=>{});function kf(t,e){e===void 0&&(e=[]);let n=[];return E.Children.forEach(t,(r,i)=>{if(!E.isValidElement(r))return;let s=[...e,i];if(r.type===E.Fragment){n.push.apply(n,kf(r.props.children,s));return}r.type!==rn&&Se(!1),!r.props.index||!r.props.children||Se(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=kf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cf(){return Cf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Cf.apply(this,arguments)}function Bk(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Wk(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Hk(t,e){return t.button===0&&(!e||e==="_self")&&!Wk(t)}const qk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Kk="startTransition",iy=zT[Kk];function Gk(t){let{basename:e,children:n,future:r,window:i}=t,s=E.useRef();s.current==null&&(s.current=ZA({window:i,v5Compat:!0}));let o=s.current,[a,l]=E.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=E.useCallback(h=>{u&&iy?iy(()=>l(h)):l(h)},[l,u]);return E.useLayoutEffect(()=>o.listen(c),[o,c]),E.createElement(zk,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const Qk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Yk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,On=E.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:h}=e,f=Bk(e,qk),{basename:p}=E.useContext(as),y,v=!1;if(typeof u=="string"&&Yk.test(u)&&(y=u,Qk))try{let g=new URL(window.location.href),w=u.startsWith("//")?new URL(g.protocol+u):new URL(u),S=mp(w.pathname,p);w.origin===g.origin&&S!=null?u=S+w.search+w.hash:v=!0}catch{}let I=Ak(u,{relative:i}),m=Xk(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:h});function d(g){r&&r(g),g.defaultPrevented||m(g)}return E.createElement("a",Cf({},f,{href:y||I,onClick:v||s?r:d,ref:n,target:l}))});var sy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(sy||(sy={}));var oy;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(oy||(oy={}));function Xk(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=yp(),u=Yu(),c=A1(t,{relative:o});return E.useCallback(h=>{if(Hk(h,n)){h.preventDefault();let f=r!==void 0?r:nu(u)===nu(c);l(t,{replace:f,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}const Jk=[{id:1,title:"hats",img:"/src/assets/hero__1.jpg"},{id:5,title:"jakets",img:"/src/assets/hero__1.jpg"},{id:2,title:"sneakers",img:"/src/assets/hero__1.jpg"},{id:3,title:"womens",img:"/src/assets/hero__1.jpg"},{id:4,title:"mens",img:"/src/assets/hero__1.jpg"}],Zk={category:Jk},eC={google:"google-sign-in",inverted:"inverted"},ar=({children:t,buttonType:e,moreProps:n,...r})=>_.jsx("button",{className:`buttonContainer uppercase ${eC[e]} ${n} `,...r,children:t}),tC=t=>{const{id:e,title:n,img:r}=t,i=yp(),s=()=>i(`/shop/${n}`);return _.jsx("div",{id:e,onClick:s,className:`group bg-[url( ".${r}")] bg-gray-500 bg-center bg-[length:100%] bg-no-repeat transition-all hover:bg-[length:110%]
      min-w-[30%] h-60 flex grow shrink basis-1 items-center justify-center border border-black overflow-hidden cursor-pointer `,children:_.jsxs(ar,{buttonType:"inverted",children:[_.jsx("h1",{className:"text-xl font-bold",children:n.toUpperCase()}),_.jsx("p",{children:"SHOP NOW"})]})},e)},nC=()=>{const[t,e]=E.useState(Zk.category);return _.jsx("header",{className:"flex flex-wrap justify-evenly gap-y-3 gap-x-8 ",children:t.map((n,r)=>_.jsx(tC,{...n},n.id))})};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},rC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},N1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(f=64)),r.push(n[c],n[h],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(x1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):rC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new iC;const f=s<<2|a>>4;if(r.push(f),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class iC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sC=function(t){const e=x1(t);return N1.encodeByteArray(e,!0)},su=function(t){return sC(t).replace(/\./g,"")},b1=function(t){try{return N1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC=()=>oC().__FIREBASE_DEFAULTS__,lC=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},uC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&b1(t[1]);return e&&JSON.parse(e)},vp=()=>{try{return aC()||lC()||uC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},O1=t=>{var e,n;return(n=(e=vp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},cC=t=>{const e=O1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},D1=()=>{var t;return(t=vp())===null||t===void 0?void 0:t.config},L1=t=>{var e;return(e=vp())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[su(JSON.stringify(n)),su(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Je())}function pC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function mC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gC(){const t=Je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function yC(){try{return typeof indexedDB=="object"}catch{return!1}}function vC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _C="FirebaseError";class Cn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=_C,Object.setPrototypeOf(this,Cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ta.prototype.create)}}class ta{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?wC(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Cn(i,a,r)}}function wC(t,e){return t.replace(EC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const EC=/\{\$([^}]+)}/g;function IC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ou(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(ay(s)&&ay(o)){if(!ou(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ay(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Vs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ms(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function TC(t,e){const n=new SC(t,e);return n.subscribe.bind(n)}class SC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");AC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ah),i.error===void 0&&(i.error=ah),i.complete===void 0&&(i.complete=ah);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ah(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t){return t&&t._delegate?t._delegate:t}class Hr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new hC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(PC(e))try{this.getOrInitializeService({instanceIdentifier:kr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=kr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kr){return this.instances.has(e)}getOptions(e=kr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:CC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=kr){return this.component?this.component.multipleInstances?e:kr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function CC(t){return t===kr?void 0:t}function PC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new kC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const xC={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},NC=Y.INFO,bC={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},OC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=bC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _p{constructor(e){this.name=e,this._logLevel=NC,this._logHandler=OC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const DC=(t,e)=>e.some(n=>t instanceof n);let ly,uy;function LC(){return ly||(ly=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function VC(){return uy||(uy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const V1=new WeakMap,Pf=new WeakMap,M1=new WeakMap,lh=new WeakMap,wp=new WeakMap;function MC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(tr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&V1.set(n,t)}).catch(()=>{}),wp.set(e,t),e}function FC(t){if(Pf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Pf.set(t,e)}let Rf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Pf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||M1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return tr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function UC(t){Rf=t(Rf)}function $C(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(uh(this),e,...n);return M1.set(r,e.sort?e.sort():[e]),tr(r)}:VC().includes(t)?function(...e){return t.apply(uh(this),e),tr(V1.get(this))}:function(...e){return tr(t.apply(uh(this),e))}}function jC(t){return typeof t=="function"?$C(t):(t instanceof IDBTransaction&&FC(t),DC(t,LC())?new Proxy(t,Rf):t)}function tr(t){if(t instanceof IDBRequest)return MC(t);if(lh.has(t))return lh.get(t);const e=jC(t);return e!==t&&(lh.set(t,e),wp.set(e,t)),e}const uh=t=>wp.get(t);function zC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=tr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(tr(o.result),l.oldVersion,l.newVersion,tr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const BC=["get","getKey","getAll","getAllKeys","count"],WC=["put","add","delete","clear"],ch=new Map;function cy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ch.get(e))return ch.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=WC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||BC.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return ch.set(e,s),s}UC(t=>({...t,get:(e,n,r)=>cy(e,n)||t.get(e,n,r),has:(e,n)=>!!cy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function qC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xf="@firebase/app",hy="0.9.23";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=new _p("@firebase/app"),KC="@firebase/app-compat",GC="@firebase/analytics-compat",QC="@firebase/analytics",YC="@firebase/app-check-compat",XC="@firebase/app-check",JC="@firebase/auth",ZC="@firebase/auth-compat",eP="@firebase/database",tP="@firebase/database-compat",nP="@firebase/functions",rP="@firebase/functions-compat",iP="@firebase/installations",sP="@firebase/installations-compat",oP="@firebase/messaging",aP="@firebase/messaging-compat",lP="@firebase/performance",uP="@firebase/performance-compat",cP="@firebase/remote-config",hP="@firebase/remote-config-compat",fP="@firebase/storage",dP="@firebase/storage-compat",pP="@firebase/firestore",mP="@firebase/firestore-compat",gP="firebase",yP="10.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf="[DEFAULT]",vP={[xf]:"fire-core",[KC]:"fire-core-compat",[QC]:"fire-analytics",[GC]:"fire-analytics-compat",[XC]:"fire-app-check",[YC]:"fire-app-check-compat",[JC]:"fire-auth",[ZC]:"fire-auth-compat",[eP]:"fire-rtdb",[tP]:"fire-rtdb-compat",[nP]:"fire-fn",[rP]:"fire-fn-compat",[iP]:"fire-iid",[sP]:"fire-iid-compat",[oP]:"fire-fcm",[aP]:"fire-fcm-compat",[lP]:"fire-perf",[uP]:"fire-perf-compat",[cP]:"fire-rc",[hP]:"fire-rc-compat",[fP]:"fire-gcs",[dP]:"fire-gcs-compat",[pP]:"fire-fst",[mP]:"fire-fst-compat","fire-js":"fire-js",[gP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au=new Map,bf=new Map;function _P(t,e){try{t.container.addComponent(e)}catch(n){qr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ki(t){const e=t.name;if(bf.has(e))return qr.debug(`There were multiple attempts to register component ${e}.`),!1;bf.set(e,t);for(const n of au.values())_P(n,t);return!0}function Ep(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},nr=new ta("app","Firebase",wP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Hr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw nr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=yP;function F1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Nf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw nr.create("bad-app-name",{appName:String(i)});if(n||(n=D1()),!n)throw nr.create("no-options");const s=au.get(i);if(s){if(ou(n,s.options)&&ou(r,s.config))return s;throw nr.create("duplicate-app",{appName:i})}const o=new RC(i);for(const l of bf.values())o.addComponent(l);const a=new EP(n,r,o);return au.set(i,a),a}function U1(t=Nf){const e=au.get(t);if(!e&&t===Nf&&D1())return F1();if(!e)throw nr.create("no-app",{appName:t});return e}function rr(t,e,n){var r;let i=(r=vP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qr.warn(a.join(" "));return}Ki(new Hr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IP="firebase-heartbeat-database",TP=1,ko="firebase-heartbeat-store";let hh=null;function $1(){return hh||(hh=zC(IP,TP,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ko)}}}).catch(t=>{throw nr.create("idb-open",{originalErrorMessage:t.message})})),hh}async function SP(t){try{return await(await $1()).transaction(ko).objectStore(ko).get(j1(t))}catch(e){if(e instanceof Cn)qr.warn(e.message);else{const n=nr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qr.warn(n.message)}}}async function fy(t,e){try{const r=(await $1()).transaction(ko,"readwrite");await r.objectStore(ko).put(e,j1(t)),await r.done}catch(n){if(n instanceof Cn)qr.warn(n.message);else{const r=nr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qr.warn(r.message)}}}function j1(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AP=1024,kP=30*24*60*60*1e3;class CP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new RP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=dy();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const o=new Date(s.date).valueOf();return Date.now()-o<=kP}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=dy(),{heartbeatsToSend:r,unsentEntries:i}=PP(this._heartbeatsCache.heartbeats),s=su(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function dy(){return new Date().toISOString().substring(0,10)}function PP(t,e=AP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),py(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),py(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class RP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yC()?vC().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await SP(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return fy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return fy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function py(t){return su(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xP(t){Ki(new Hr("platform-logger",e=>new HC(e),"PRIVATE")),Ki(new Hr("heartbeat",e=>new CP(e),"PRIVATE")),rr(xf,hy,t),rr(xf,hy,"esm2017"),rr("fire-js","")}xP("");var NP="firebase",bP="10.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rr(NP,bP,"app");var OP=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P,Ip=Ip||{},$=OP||self;function Xu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ra(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function DP(t){return Object.prototype.hasOwnProperty.call(t,fh)&&t[fh]||(t[fh]=++LP)}var fh="closure_uid_"+(1e9*Math.random()>>>0),LP=0;function VP(t,e,n){return t.call.apply(t.bind,arguments)}function MP(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Qe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Qe=VP:Qe=MP,Qe.apply(null,arguments)}function qa(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function De(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function yr(){this.s=this.s,this.o=this.o}var FP=0;yr.prototype.s=!1;yr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),FP!=0)&&DP(this)};yr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const z1=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Tp(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function my(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Xu(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Ye(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ye.prototype.h=function(){this.defaultPrevented=!0};var UP=function(){if(!$.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{$.addEventListener("test",()=>{},e),$.removeEventListener("test",()=>{},e)}catch{}return t}();function Co(t){return/^[\s\xa0]*$/.test(t)}function Ju(){var t=$.navigator;return t&&(t=t.userAgent)?t:""}function Wt(t){return Ju().indexOf(t)!=-1}function Sp(t){return Sp[" "](t),t}Sp[" "]=function(){};function $P(t,e){var n=bR;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var jP=Wt("Opera"),Gi=Wt("Trident")||Wt("MSIE"),B1=Wt("Edge"),Of=B1||Gi,W1=Wt("Gecko")&&!(Ju().toLowerCase().indexOf("webkit")!=-1&&!Wt("Edge"))&&!(Wt("Trident")||Wt("MSIE"))&&!Wt("Edge"),zP=Ju().toLowerCase().indexOf("webkit")!=-1&&!Wt("Edge");function H1(){var t=$.document;return t?t.documentMode:void 0}var Df;e:{var dh="",ph=function(){var t=Ju();if(W1)return/rv:([^\);]+)(\)|;)/.exec(t);if(B1)return/Edge\/([\d\.]+)/.exec(t);if(Gi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(zP)return/WebKit\/(\S+)/.exec(t);if(jP)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ph&&(dh=ph?ph[1]:""),Gi){var mh=H1();if(mh!=null&&mh>parseFloat(dh)){Df=String(mh);break e}}Df=dh}var Lf;if($.document&&Gi){var gy=H1();Lf=gy||parseInt(Df,10)||void 0}else Lf=void 0;var BP=Lf;function Po(t,e){if(Ye.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(W1){e:{try{Sp(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:WP[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Po.$.h.call(this)}}De(Po,Ye);var WP={2:"touch",3:"pen",4:"mouse"};Po.prototype.h=function(){Po.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ia="closure_listenable_"+(1e6*Math.random()|0),HP=0;function qP(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++HP,this.fa=this.ia=!1}function Zu(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Ap(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function KP(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function q1(t){const e={};for(const n in t)e[n]=t[n];return e}const yy="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function K1(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<yy.length;s++)n=yy[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function ec(t){this.src=t,this.g={},this.h=0}ec.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Mf(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new qP(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Vf(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=z1(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Zu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Mf(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var kp="closure_lm_"+(1e6*Math.random()|0),gh={};function G1(t,e,n,r,i){if(r&&r.once)return Y1(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)G1(t,e[s],n,r,i);return null}return n=Rp(n),t&&t[ia]?t.O(e,n,ra(r)?!!r.capture:!!r,i):Q1(t,e,n,!1,r,i)}function Q1(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=ra(i)?!!i.capture:!!i,a=Pp(t);if(a||(t[kp]=a=new ec(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=GP(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)UP||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(J1(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function GP(){function t(n){return e.call(t.src,t.listener,n)}const e=QP;return t}function Y1(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Y1(t,e[s],n,r,i);return null}return n=Rp(n),t&&t[ia]?t.P(e,n,ra(r)?!!r.capture:!!r,i):Q1(t,e,n,!0,r,i)}function X1(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)X1(t,e[s],n,r,i);else r=ra(r)?!!r.capture:!!r,n=Rp(n),t&&t[ia]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Mf(s,n,r,i),-1<n&&(Zu(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Pp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Mf(e,n,r,i)),(n=-1<t?e[t]:null)&&Cp(n))}function Cp(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ia])Vf(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(J1(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Pp(e))?(Vf(n,t),n.h==0&&(n.src=null,e[kp]=null)):Zu(t)}}}function J1(t){return t in gh?gh[t]:gh[t]="on"+t}function QP(t,e){if(t.fa)t=!0;else{e=new Po(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Cp(t),t=n.call(r,e)}return t}function Pp(t){return t=t[kp],t instanceof ec?t:null}var yh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Rp(t){return typeof t=="function"?t:(t[yh]||(t[yh]=function(e){return t.handleEvent(e)}),t[yh])}function Oe(){yr.call(this),this.i=new ec(this),this.S=this,this.J=null}De(Oe,yr);Oe.prototype[ia]=!0;Oe.prototype.removeEventListener=function(t,e,n,r){X1(this,t,e,n,r)};function $e(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Ye(e,t);else if(e instanceof Ye)e.target=e.target||t;else{var i=e;e=new Ye(r,t),K1(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Ka(o,r,!0,e)&&i}if(o=e.g=t,i=Ka(o,r,!0,e)&&i,i=Ka(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Ka(o,r,!1,e)&&i}Oe.prototype.N=function(){if(Oe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Zu(n[r]);delete t.g[e],t.h--}}this.J=null};Oe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Oe.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ka(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Vf(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var xp=$.JSON.stringify;class YP{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function XP(){var t=Np;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class JP{constructor(){this.h=this.g=null}add(e,n){const r=Z1.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Z1=new YP(()=>new ZP,t=>t.reset());class ZP{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function eR(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function tR(t){$.setTimeout(()=>{throw t},0)}let Ro,xo=!1,Np=new JP,ew=()=>{const t=$.Promise.resolve(void 0);Ro=()=>{t.then(nR)}};var nR=()=>{for(var t;t=XP();){try{t.h.call(t.g)}catch(n){tR(n)}var e=Z1;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}xo=!1};function tc(t,e){Oe.call(this),this.h=t||1,this.g=e||$,this.j=Qe(this.qb,this),this.l=Date.now()}De(tc,Oe);P=tc.prototype;P.ga=!1;P.T=null;P.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),$e(this,"tick"),this.ga&&(bp(this),this.start()))}};P.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function bp(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}P.N=function(){tc.$.N.call(this),bp(this),delete this.g};function Op(t,e,n){if(typeof t=="function")n&&(t=Qe(t,n));else if(t&&typeof t.handleEvent=="function")t=Qe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:$.setTimeout(t,e||0)}function tw(t){t.g=Op(()=>{t.g=null,t.i&&(t.i=!1,tw(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class rR extends yr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:tw(this)}N(){super.N(),this.g&&($.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function No(t){yr.call(this),this.h=t,this.g={}}De(No,yr);var vy=[];function nw(t,e,n,r){Array.isArray(n)||(n&&(vy[0]=n.toString()),n=vy);for(var i=0;i<n.length;i++){var s=G1(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function rw(t){Ap(t.g,function(e,n){this.g.hasOwnProperty(n)&&Cp(e)},t),t.g={}}No.prototype.N=function(){No.$.N.call(this),rw(this)};No.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function nc(){this.g=!0}nc.prototype.Ea=function(){this.g=!1};function iR(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function sR(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Ti(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+aR(t,n)+(r?" "+r:"")})}function oR(t,e){t.info(function(){return"TIMEOUT: "+e})}nc.prototype.info=function(){};function aR(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return xp(n)}catch{return e}}var ri={},_y=null;function rc(){return _y=_y||new Oe}ri.Ta="serverreachability";function iw(t){Ye.call(this,ri.Ta,t)}De(iw,Ye);function bo(t){const e=rc();$e(e,new iw(e))}ri.STAT_EVENT="statevent";function sw(t,e){Ye.call(this,ri.STAT_EVENT,t),this.stat=e}De(sw,Ye);function tt(t){const e=rc();$e(e,new sw(e,t))}ri.Ua="timingevent";function ow(t,e){Ye.call(this,ri.Ua,t),this.size=e}De(ow,Ye);function sa(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return $.setTimeout(function(){t()},e)}var ic={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},aw={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Dp(){}Dp.prototype.h=null;function wy(t){return t.h||(t.h=t.i())}function lw(){}var oa={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Lp(){Ye.call(this,"d")}De(Lp,Ye);function Vp(){Ye.call(this,"c")}De(Vp,Ye);var Ff;function sc(){}De(sc,Dp);sc.prototype.g=function(){return new XMLHttpRequest};sc.prototype.i=function(){return{}};Ff=new sc;function aa(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new No(this),this.P=lR,t=Of?125:void 0,this.V=new tc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new uw}function uw(){this.i=null,this.g="",this.h=!1}var lR=45e3,Uf={},lu={};P=aa.prototype;P.setTimeout=function(t){this.P=t};function $f(t,e,n){t.L=1,t.v=ac(vn(e)),t.s=n,t.S=!0,cw(t,null)}function cw(t,e){t.G=Date.now(),la(t),t.A=vn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),vw(n.i,"t",r),t.C=0,n=t.l.J,t.h=new uw,t.g=Uw(t.l,n?e:null,!t.s),0<t.O&&(t.M=new rR(Qe(t.Pa,t,t.g),t.O)),nw(t.U,t.g,"readystatechange",t.nb),e=t.I?q1(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),bo(),iR(t.j,t.u,t.A,t.m,t.W,t.s)}P.nb=function(t){t=t.target;const e=this.M;e&&Ht(t)==3?e.l():this.Pa(t)};P.Pa=function(t){try{if(t==this.g)e:{const c=Ht(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Of||this.g&&(this.h.h||this.g.ja()||Sy(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?bo(3):bo(2)),oc(this);var n=this.g.da();this.ca=n;t:if(hw(this)){var r=Sy(this.g);t="";var i=r.length,s=Ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){xr(this),Zs(this);var o="";break t}this.h.i=new $.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,sR(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Co(a)){var u=a;break t}}u=null}if(n=u)Ti(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,jf(this,n);else{this.i=!1,this.o=3,tt(12),xr(this),Zs(this);break e}}this.S?(fw(this,c,o),Of&&this.i&&c==3&&(nw(this.U,this.V,"tick",this.mb),this.V.start())):(Ti(this.j,this.m,o,null),jf(this,o)),c==4&&xr(this),this.i&&!this.J&&(c==4?Lw(this.l,this):(this.i=!1,la(this)))}else RR(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,tt(12)):(this.o=0,tt(13)),xr(this),Zs(this)}}}catch{}finally{}};function hw(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function fw(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=uR(t,n),i==lu){e==4&&(t.o=4,tt(14),r=!1),Ti(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Uf){t.o=4,tt(15),Ti(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ti(t.j,t.m,i,null),jf(t,i);hw(t)&&i!=lu&&i!=Uf&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,tt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),zp(e),e.M=!0,tt(11))):(Ti(t.j,t.m,n,"[Invalid Chunked Response]"),xr(t),Zs(t))}P.mb=function(){if(this.g){var t=Ht(this.g),e=this.g.ja();this.C<e.length&&(oc(this),fw(this,t,e),this.i&&t!=4&&la(this))}};function uR(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?lu:(n=Number(e.substring(n,r)),isNaN(n)?Uf:(r+=1,r+n>e.length?lu:(e=e.slice(r,r+n),t.C=r+n,e)))}P.cancel=function(){this.J=!0,xr(this)};function la(t){t.Y=Date.now()+t.P,dw(t,t.P)}function dw(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=sa(Qe(t.lb,t),e)}function oc(t){t.B&&($.clearTimeout(t.B),t.B=null)}P.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(oR(this.j,this.A),this.L!=2&&(bo(),tt(17)),xr(this),this.o=2,Zs(this)):dw(this,this.Y-t)};function Zs(t){t.l.H==0||t.J||Lw(t.l,t)}function xr(t){oc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,bp(t.V),rw(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function jf(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||zf(n.i,t))){if(!t.K&&zf(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)hu(n),cc(n);else break e;jp(n),tt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=sa(Qe(n.ib,n),6e3));if(1>=Ew(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Nr(n,11)}else if((t.K||n.g==t)&&hu(n),!Co(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Mp(s,s.h),s.h=null))}if(r.F){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,se(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Fw(r,r.J?r.pa:null,r.Y),o.K){Iw(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(oc(a),la(a)),r.g=o}else Ow(r);0<n.j.length&&hc(n)}else u[0]!="stop"&&u[0]!="close"||Nr(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Nr(n,7):$p(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}bo(4)}catch{}}function cR(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Xu(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function hR(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Xu(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function pw(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Xu(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=hR(t),r=cR(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var mw=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fR(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Fr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Fr){this.h=t.h,uu(this,t.j),this.s=t.s,this.g=t.g,cu(this,t.m),this.l=t.l;var e=t.i,n=new Oo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ey(this,n),this.o=t.o}else t&&(e=String(t).match(mw))?(this.h=!1,uu(this,e[1]||"",!0),this.s=Fs(e[2]||""),this.g=Fs(e[3]||"",!0),cu(this,e[4]),this.l=Fs(e[5]||"",!0),Ey(this,e[6]||"",!0),this.o=Fs(e[7]||"")):(this.h=!1,this.i=new Oo(null,this.h))}Fr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Us(e,Iy,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Us(e,Iy,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Us(n,n.charAt(0)=="/"?mR:pR,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Us(n,yR)),t.join("")};function vn(t){return new Fr(t)}function uu(t,e,n){t.j=n?Fs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function cu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ey(t,e,n){e instanceof Oo?(t.i=e,vR(t.i,t.h)):(n||(e=Us(e,gR)),t.i=new Oo(e,t.h))}function se(t,e,n){t.i.set(e,n)}function ac(t){return se(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Fs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Us(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,dR),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function dR(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Iy=/[#\/\?@]/g,pR=/[#\?:]/g,mR=/[#\?]/g,gR=/[#\?@]/g,yR=/#/g;function Oo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function vr(t){t.g||(t.g=new Map,t.h=0,t.i&&fR(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}P=Oo.prototype;P.add=function(t,e){vr(this),this.i=null,t=us(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function gw(t,e){vr(t),e=us(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function yw(t,e){return vr(t),e=us(t,e),t.g.has(e)}P.forEach=function(t,e){vr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};P.ta=function(){vr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};P.Z=function(t){vr(this);let e=[];if(typeof t=="string")yw(this,t)&&(e=e.concat(this.g.get(us(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};P.set=function(t,e){return vr(this),this.i=null,t=us(this,t),yw(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};P.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function vw(t,e,n){gw(t,e),0<n.length&&(t.i=null,t.g.set(us(t,e),Tp(n)),t.h+=n.length)}P.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function us(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function vR(t,e){e&&!t.j&&(vr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(gw(this,r),vw(this,i,n))},t)),t.j=e}var _R=class{constructor(t,e){this.g=t,this.map=e}};function _w(t){this.l=t||wR,$.PerformanceNavigationTiming?(t=$.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!($.g&&$.g.Ka&&$.g.Ka()&&$.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var wR=10;function ww(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Ew(t){return t.h?1:t.g?t.g.size:0}function zf(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Mp(t,e){t.g?t.g.add(e):t.h=e}function Iw(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}_w.prototype.cancel=function(){if(this.i=Tw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Tw(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Tp(t.i)}var ER=class{stringify(t){return $.JSON.stringify(t,void 0)}parse(t){return $.JSON.parse(t,void 0)}};function IR(){this.g=new ER}function TR(t,e,n){const r=n||"";try{pw(t,function(i,s){let o=i;ra(i)&&(o=xp(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function SR(t,e){const n=new nc;if($.Image){const r=new Image;r.onload=qa(Ga,n,r,"TestLoadImage: loaded",!0,e),r.onerror=qa(Ga,n,r,"TestLoadImage: error",!1,e),r.onabort=qa(Ga,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=qa(Ga,n,r,"TestLoadImage: timeout",!1,e),$.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Ga(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function ua(t){this.l=t.ec||null,this.j=t.ob||!1}De(ua,Dp);ua.prototype.g=function(){return new lc(this.l,this.j)};ua.prototype.i=function(t){return function(){return t}}({});function lc(t,e){Oe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Fp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}De(lc,Oe);var Fp=0;P=lc.prototype;P.open=function(t,e){if(this.readyState!=Fp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Do(this)};P.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||$).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};P.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ca(this)),this.readyState=Fp};P.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Do(this)),this.g&&(this.readyState=3,Do(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof $.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Sw(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Sw(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}P.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ca(this):Do(this),this.readyState==3&&Sw(this)}};P.Za=function(t){this.g&&(this.response=this.responseText=t,ca(this))};P.Ya=function(t){this.g&&(this.response=t,ca(this))};P.ka=function(){this.g&&ca(this)};function ca(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Do(t)}P.setRequestHeader=function(t,e){this.v.append(t,e)};P.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};P.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Do(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(lc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var AR=$.JSON.parse;function ye(t){Oe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Aw,this.L=this.M=!1}De(ye,Oe);var Aw="",kR=/^https?$/i,CR=["POST","PUT"];P=ye.prototype;P.Oa=function(t){this.M=t};P.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ff.g(),this.C=this.u?wy(this.u):wy(Ff),this.g.onreadystatechange=Qe(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Ty(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=$.FormData&&t instanceof $.FormData,!(0<=z1(CR,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Pw(this),0<this.B&&((this.L=PR(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Qe(this.ua,this)):this.A=Op(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Ty(this,s)}};function PR(t){return Gi&&typeof t.timeout=="number"&&t.ontimeout!==void 0}P.ua=function(){typeof Ip<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,$e(this,"timeout"),this.abort(8))};function Ty(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,kw(t),uc(t)}function kw(t){t.F||(t.F=!0,$e(t,"complete"),$e(t,"error"))}P.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,$e(this,"complete"),$e(this,"abort"),uc(this))};P.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),uc(this,!0)),ye.$.N.call(this)};P.La=function(){this.s||(this.G||this.v||this.l?Cw(this):this.kb())};P.kb=function(){Cw(this)};function Cw(t){if(t.h&&typeof Ip<"u"&&(!t.C[1]||Ht(t)!=4||t.da()!=2)){if(t.v&&Ht(t)==4)Op(t.La,0,t);else if($e(t,"readystatechange"),Ht(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(mw)[1]||null;!i&&$.self&&$.self.location&&(i=$.self.location.protocol.slice(0,-1)),r=!kR.test(i?i.toLowerCase():"")}n=r}if(n)$e(t,"complete"),$e(t,"success");else{t.m=6;try{var s=2<Ht(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",kw(t)}}finally{uc(t)}}}}function uc(t,e){if(t.g){Pw(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||$e(t,"ready");try{n.onreadystatechange=r}catch{}}}function Pw(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&($.clearTimeout(t.A),t.A=null)}P.isActive=function(){return!!this.g};function Ht(t){return t.g?t.g.readyState:0}P.da=function(){try{return 2<Ht(this)?this.g.status:-1}catch{return-1}};P.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};P.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),AR(e)}};function Sy(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Aw:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function RR(t){const e={};t=(t.g&&2<=Ht(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Co(t[r]))continue;var n=eR(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}KP(e,function(r){return r.join(", ")})}P.Ia=function(){return this.m};P.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Rw(t){let e="";return Ap(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Up(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Rw(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):se(t,e,n))}function Rs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function xw(t){this.Ga=0,this.j=[],this.l=new nc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Rs("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Rs("baseRetryDelayMs",5e3,t),this.hb=Rs("retryDelaySeedMs",1e4,t),this.eb=Rs("forwardChannelMaxRetries",2,t),this.xa=Rs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new _w(t&&t.concurrentRequestLimit),this.Ja=new IR,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}P=xw.prototype;P.ra=8;P.H=1;function $p(t){if(Nw(t),t.H==3){var e=t.W++,n=vn(t.I);if(se(n,"SID",t.K),se(n,"RID",e),se(n,"TYPE","terminate"),ha(t,n),e=new aa(t,t.l,e),e.L=2,e.v=ac(vn(n)),n=!1,$.navigator&&$.navigator.sendBeacon)try{n=$.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&$.Image&&(new Image().src=e.v,n=!0),n||(e.g=Uw(e.l,null),e.g.ha(e.v)),e.G=Date.now(),la(e)}Mw(t)}function cc(t){t.g&&(zp(t),t.g.cancel(),t.g=null)}function Nw(t){cc(t),t.u&&($.clearTimeout(t.u),t.u=null),hu(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&$.clearTimeout(t.m),t.m=null)}function hc(t){if(!ww(t.i)&&!t.m){t.m=!0;var e=t.Na;Ro||ew(),xo||(Ro(),xo=!0),Np.add(e,t),t.C=0}}function xR(t,e){return Ew(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=sa(Qe(t.Na,t,e),Vw(t,t.C)),t.C++,!0)}P.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new aa(this,this.l,t);let s=this.s;if(this.U&&(s?(s=q1(s),K1(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=bw(this,i,e),n=vn(this.I),se(n,"RID",t),se(n,"CVER",22),this.F&&se(n,"X-HTTP-Session-Id",this.F),ha(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(Rw(s)))+"&"+e:this.o&&Up(n,this.o,s)),Mp(this.i,i),this.bb&&se(n,"TYPE","init"),this.P?(se(n,"$req",e),se(n,"SID","null"),i.aa=!0,$f(i,n,null)):$f(i,n,e),this.H=2}}else this.H==3&&(t?Ay(this,t):this.j.length==0||ww(this.i)||Ay(this))};function Ay(t,e){var n;e?n=e.m:n=t.W++;const r=vn(t.I);se(r,"SID",t.K),se(r,"RID",n),se(r,"AID",t.V),ha(t,r),t.o&&t.s&&Up(r,t.o,t.s),n=new aa(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=bw(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Mp(t.i,n),$f(n,r,e)}function ha(t,e){t.na&&Ap(t.na,function(n,r){se(e,r,n)}),t.h&&pw({},function(n,r){se(e,r,n)})}function bw(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Qe(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{TR(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function Ow(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Ro||ew(),xo||(Ro(),xo=!0),Np.add(e,t),t.A=0}}function jp(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=sa(Qe(t.Ma,t),Vw(t,t.A)),t.A++,!0)}P.Ma=function(){if(this.u=null,Dw(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=sa(Qe(this.jb,this),t)}};P.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,tt(10),cc(this),Dw(this))};function zp(t){t.B!=null&&($.clearTimeout(t.B),t.B=null)}function Dw(t){t.g=new aa(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=vn(t.wa);se(e,"RID","rpc"),se(e,"SID",t.K),se(e,"AID",t.V),se(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&se(e,"TO",t.qa),se(e,"TYPE","xmlhttp"),ha(t,e),t.o&&t.s&&Up(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=ac(vn(e)),n.s=null,n.S=!0,cw(n,t)}P.ib=function(){this.v!=null&&(this.v=null,cc(this),jp(this),tt(19))};function hu(t){t.v!=null&&($.clearTimeout(t.v),t.v=null)}function Lw(t,e){var n=null;if(t.g==e){hu(t),zp(t),t.g=null;var r=2}else if(zf(t.i,e))n=e.F,Iw(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=rc(),$e(r,new ow(r,n)),hc(t)}else Ow(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&xR(t,e)||r==2&&jp(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Nr(t,5);break;case 4:Nr(t,10);break;case 3:Nr(t,6);break;default:Nr(t,2)}}}function Vw(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Nr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Qe(t.pb,t);n||(n=new Fr("//www.google.com/images/cleardot.gif"),$.location&&$.location.protocol=="http"||uu(n,"https"),ac(n)),SR(n.toString(),r)}else tt(2);t.H=0,t.h&&t.h.za(e),Mw(t),Nw(t)}P.pb=function(t){t?(this.l.info("Successfully pinged google.com"),tt(2)):(this.l.info("Failed to ping google.com"),tt(1))};function Mw(t){if(t.H=0,t.ma=[],t.h){const e=Tw(t.i);(e.length!=0||t.j.length!=0)&&(my(t.ma,e),my(t.ma,t.j),t.i.i.length=0,Tp(t.j),t.j.length=0),t.h.ya()}}function Fw(t,e,n){var r=n instanceof Fr?vn(n):new Fr(n);if(r.g!="")e&&(r.g=e+"."+r.g),cu(r,r.m);else{var i=$.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Fr(null);r&&uu(s,r),e&&(s.g=e),i&&cu(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&se(r,n,e),se(r,"VER",t.ra),ha(t,r),r}function Uw(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new ye(new ua({ob:!0})):new ye(t.va),e.Oa(t.J),e}P.isActive=function(){return!!this.h&&this.h.isActive(this)};function $w(){}P=$w.prototype;P.Ba=function(){};P.Aa=function(){};P.za=function(){};P.ya=function(){};P.isActive=function(){return!0};P.Va=function(){};function fu(){if(Gi&&!(10<=Number(BP)))throw Error("Environmental error: no available transport.")}fu.prototype.g=function(t,e){return new gt(t,e)};function gt(t,e){Oe.call(this),this.g=new xw(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Co(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Co(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new cs(this)}De(gt,Oe);gt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;tt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Fw(t,null,t.Y),hc(t)};gt.prototype.close=function(){$p(this.g)};gt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=xp(t),t=n);e.j.push(new _R(e.fb++,t)),e.H==3&&hc(e)};gt.prototype.N=function(){this.g.h=null,delete this.j,$p(this.g),delete this.g,gt.$.N.call(this)};function jw(t){Lp.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}De(jw,Lp);function zw(){Vp.call(this),this.status=1}De(zw,Vp);function cs(t){this.g=t}De(cs,$w);cs.prototype.Ba=function(){$e(this.g,"a")};cs.prototype.Aa=function(t){$e(this.g,new jw(t))};cs.prototype.za=function(t){$e(this.g,new zw)};cs.prototype.ya=function(){$e(this.g,"b")};function NR(){this.blockSize=-1}function Ut(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}De(Ut,NR);Ut.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function vh(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Ut.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)vh(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){vh(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){vh(this,r),i=0;break}}this.h=i,this.i+=e};Ut.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function te(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var bR={};function Bp(t){return-128<=t&&128>t?$P(t,function(e){return new te([e|0],0>e?-1:0)}):new te([t|0],0>t?-1:0)}function qt(t){if(isNaN(t)||!isFinite(t))return Di;if(0>t)return Me(qt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Bf;return new te(e,0)}function Bw(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Me(Bw(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=qt(Math.pow(e,8)),r=Di,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=qt(Math.pow(e,s)),r=r.R(s).add(qt(o))):(r=r.R(n),r=r.add(qt(o)))}return r}var Bf=4294967296,Di=Bp(0),Wf=Bp(1),ky=Bp(16777216);P=te.prototype;P.ea=function(){if(It(this))return-Me(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Bf+r)*e,e*=Bf}return t};P.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(ln(this))return"0";if(It(this))return"-"+Me(this).toString(t);for(var e=qt(Math.pow(t,6)),n=this,r="";;){var i=pu(n,e).g;n=du(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,ln(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};P.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function ln(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function It(t){return t.h==-1}P.X=function(t){return t=du(this,t),It(t)?-1:ln(t)?0:1};function Me(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new te(n,~t.h).add(Wf)}P.abs=function(){return It(this)?Me(this):this};P.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new te(n,n[n.length-1]&-2147483648?-1:0)};function du(t,e){return t.add(Me(e))}P.R=function(t){if(ln(this)||ln(t))return Di;if(It(this))return It(t)?Me(this).R(Me(t)):Me(Me(this).R(t));if(It(t))return Me(this.R(Me(t)));if(0>this.X(ky)&&0>t.X(ky))return qt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Qa(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Qa(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Qa(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Qa(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new te(n,0)};function Qa(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function xs(t,e){this.g=t,this.h=e}function pu(t,e){if(ln(e))throw Error("division by zero");if(ln(t))return new xs(Di,Di);if(It(t))return e=pu(Me(t),e),new xs(Me(e.g),Me(e.h));if(It(e))return e=pu(t,Me(e)),new xs(Me(e.g),e.h);if(30<t.g.length){if(It(t)||It(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Wf,r=e;0>=r.X(t);)n=Cy(n),r=Cy(r);var i=ai(n,1),s=ai(r,1);for(r=ai(r,2),n=ai(n,2);!ln(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=ai(r,1),n=ai(n,1)}return e=du(t,i.R(e)),new xs(i,e)}for(i=Di;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=qt(n),o=s.R(e);It(o)||0<o.X(t);)n-=r,s=qt(n),o=s.R(e);ln(s)&&(s=Wf),i=i.add(s),t=du(t,o)}return new xs(i,t)}P.gb=function(t){return pu(this,t).h};P.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new te(n,this.h&t.h)};P.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new te(n,this.h|t.h)};P.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new te(n,this.h^t.h)};function Cy(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new te(n,t.h)}function ai(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new te(i,t.h)}fu.prototype.createWebChannel=fu.prototype.g;gt.prototype.send=gt.prototype.u;gt.prototype.open=gt.prototype.m;gt.prototype.close=gt.prototype.close;ic.NO_ERROR=0;ic.TIMEOUT=8;ic.HTTP_ERROR=6;aw.COMPLETE="complete";lw.EventType=oa;oa.OPEN="a";oa.CLOSE="b";oa.ERROR="c";oa.MESSAGE="d";Oe.prototype.listen=Oe.prototype.O;ye.prototype.listenOnce=ye.prototype.P;ye.prototype.getLastError=ye.prototype.Sa;ye.prototype.getLastErrorCode=ye.prototype.Ia;ye.prototype.getStatus=ye.prototype.da;ye.prototype.getResponseJson=ye.prototype.Wa;ye.prototype.getResponseText=ye.prototype.ja;ye.prototype.send=ye.prototype.ha;ye.prototype.setWithCredentials=ye.prototype.Oa;Ut.prototype.digest=Ut.prototype.l;Ut.prototype.reset=Ut.prototype.reset;Ut.prototype.update=Ut.prototype.j;te.prototype.add=te.prototype.add;te.prototype.multiply=te.prototype.R;te.prototype.modulo=te.prototype.gb;te.prototype.compare=te.prototype.X;te.prototype.toNumber=te.prototype.ea;te.prototype.toString=te.prototype.toString;te.prototype.getBits=te.prototype.D;te.fromNumber=qt;te.fromString=Bw;var OR=function(){return new fu},DR=function(){return rc()},_h=ic,LR=aw,VR=ri,Py={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},MR=ua,Ya=lw,FR=ye,UR=Ut,Li=te;const Ry="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}qe.UNAUTHENTICATED=new qe(null),qe.GOOGLE_CREDENTIALS=new qe("google-credentials-uid"),qe.FIRST_PARTY=new qe("first-party-uid"),qe.MOCK_USER=new qe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hs="10.5.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=new _p("@firebase/firestore");function Ns(){return Kr.logLevel}function D(t,...e){if(Kr.logLevel<=Y.DEBUG){const n=e.map(Wp);Kr.debug(`Firestore (${hs}): ${t}`,...n)}}function _n(t,...e){if(Kr.logLevel<=Y.ERROR){const n=e.map(Wp);Kr.error(`Firestore (${hs}): ${t}`,...n)}}function Qi(t,...e){if(Kr.logLevel<=Y.WARN){const n=e.map(Wp);Kr.warn(`Firestore (${hs}): ${t}`,...n)}}function Wp(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(t="Unexpected state"){const e=`FIRESTORE (${hs}) INTERNAL ASSERTION FAILED: `+t;throw _n(e),new Error(e)}function ue(t,e){t||U()}function B(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends Cn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class $R{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(qe.UNAUTHENTICATED))}shutdown(){}}class jR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class zR{constructor(e){this.t=e,this.currentUser=qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new fn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new fn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new fn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ue(typeof r.accessToken=="string"),new Ww(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ue(e===null||typeof e=="string"),new qe(e)}}class BR{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=qe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class WR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new BR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class HR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,D("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ue(typeof n.token=="string"),this.R=n.token,new HR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=KR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Z(t,e){return t<e?-1:t>e?1:0}function Yi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new O(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new O(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new O(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ce.fromMillis(Date.now())}static fromDate(e){return Ce.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ce(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.timestamp=e}static fromTimestamp(e){return new j(e)}static min(){return new j(new Ce(0,0))}static max(){return new j(new Ce(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,n,r){n===void 0?n=0:n>e.length&&U(),r===void 0?r=e.length-n:r>e.length-n&&U(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Lo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Lo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class oe extends Lo{construct(e,n,r){return new oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new oe(n)}static emptyPath(){return new oe([])}}const GR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Fe extends Lo{construct(e,n,r){return new Fe(e,n,r)}static isValidIdentifier(e){return GR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Fe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Fe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new O(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new O(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new O(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new O(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Fe(n)}static emptyPath(){return new Fe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(oe.fromString(e))}static fromName(e){return new M(oe.fromString(e).popFirst(5))}static empty(){return new M(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new oe(e.slice()))}}function QR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=j.fromTimestamp(r===1e9?new Ce(n+1,0):new Ce(n,r));return new lr(i,M.empty(),e)}function YR(t){return new lr(t.readTime,t.key,-1)}class lr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new lr(j.min(),M.empty(),-1)}static max(){return new lr(j.max(),M.empty(),-1)}}function XR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=M.comparator(t.documentKey,e.documentKey),n!==0?n:Z(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ZR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fa(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==JR)throw t;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,r)=>{n(e)})}static reject(e){return new A((n,r)=>{r(e)})}static waitFor(e){return new A((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=A.resolve(!1);for(const r of e)n=n.next(i=>i?A.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new A((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new A((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function da(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Hp._e=-1;function fc(t){return t==null}function mu(t){return t===0&&1/t==-1/0}function e2(t){return typeof t=="number"&&Number.isInteger(t)&&!mu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function fs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function qw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e,n){this.comparator=e,this.root=n||Ve.EMPTY}insert(e,n){return new pe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ve.BLACK,null,null))}remove(e){return new pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ve.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Xa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Xa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Xa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Xa(this.root,e,this.comparator,!0)}}class Xa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ve{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ve.RED,this.left=i??Ve.EMPTY,this.right=s??Ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ve(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ve.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const e=this.left.check();if(e!==this.right.check())throw U();return e+(this.isRed()?0:1)}}Ve.EMPTY=null,Ve.RED=!0,Ve.BLACK=!1;Ve.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ve(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.comparator=e,this.data=new pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ny(this.data.getIterator())}getIteratorFrom(e){return new Ny(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new je(this.comparator);return n.data=e,n}}class Ny{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.fields=e,e.sort(Fe.comparator)}static empty(){return new Dt([])}unionWith(e){let n=new je(Fe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Dt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Yi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Kw("Invalid base64 string: "+s):s}}(e);return new Ze(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ze(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const t2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ur(t){if(ue(!!t),typeof t=="string"){let e=0;const n=t2.exec(t);if(ue(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ee(t.seconds),nanos:Ee(t.nanos)}}function Ee(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Gr(t){return typeof t=="string"?Ze.fromBase64String(t):Ze.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Kp(t){const e=t.mapValue.fields.__previous_value__;return qp(e)?Kp(e):e}function Vo(t){const e=ur(t.mapValue.fields.__local_write_time__.timestampValue);return new Ce(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Mo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Mo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Mo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Qr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?qp(t)?4:r2(t)?9007199254740991:10:U()}function en(t,e){if(t===e)return!0;const n=Qr(t);if(n!==Qr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Vo(t).isEqual(Vo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ur(i.timestampValue),a=ur(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Gr(i.bytesValue).isEqual(Gr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ee(i.geoPointValue.latitude)===Ee(s.geoPointValue.latitude)&&Ee(i.geoPointValue.longitude)===Ee(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ee(i.integerValue)===Ee(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ee(i.doubleValue),a=Ee(s.doubleValue);return o===a?mu(o)===mu(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Yi(t.arrayValue.values||[],e.arrayValue.values||[],en);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(xy(o)!==xy(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!en(o[l],a[l])))return!1;return!0}(t,e);default:return U()}}function Fo(t,e){return(t.values||[]).find(n=>en(n,e))!==void 0}function Xi(t,e){if(t===e)return 0;const n=Qr(t),r=Qr(e);if(n!==r)return Z(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Z(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Ee(s.integerValue||s.doubleValue),l=Ee(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return by(t.timestampValue,e.timestampValue);case 4:return by(Vo(t),Vo(e));case 5:return Z(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Gr(s),l=Gr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=Z(a[u],l[u]);if(c!==0)return c}return Z(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Z(Ee(s.latitude),Ee(o.latitude));return a!==0?a:Z(Ee(s.longitude),Ee(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Xi(a[u],l[u]);if(c)return c}return Z(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Ja.mapValue&&o===Ja.mapValue)return 0;if(s===Ja.mapValue)return 1;if(o===Ja.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const f=Z(l[h],c[h]);if(f!==0)return f;const p=Xi(a[l[h]],u[c[h]]);if(p!==0)return p}return Z(l.length,c.length)}(t.mapValue,e.mapValue);default:throw U()}}function by(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Z(t,e);const n=ur(t),r=ur(e),i=Z(n.seconds,r.seconds);return i!==0?i:Z(n.nanos,r.nanos)}function Ji(t){return Hf(t)}function Hf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ur(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Gr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return M.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Hf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Hf(n.fields[o])}`;return i+"}"}(t.mapValue):U()}function Oy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function qf(t){return!!t&&"integerValue"in t}function Gp(t){return!!t&&"arrayValue"in t}function Dy(t){return!!t&&"nullValue"in t}function Ly(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Il(t){return!!t&&"mapValue"in t}function eo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return fs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=eo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=eo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function r2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.value=e}static empty(){return new Tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Il(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=eo(n)}setAll(e){let n=Fe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=eo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Il(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return en(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Il(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){fs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Tt(eo(this.value))}}function Gw(t){const e=[];return fs(t.fields,(n,r)=>{const i=new Fe([n]);if(Il(r)){const s=Gw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Dt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ge(e,0,j.min(),j.min(),j.min(),Tt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ge(e,1,n,j.min(),r,i,0)}static newNoDocument(e,n){return new Ge(e,2,n,j.min(),j.min(),Tt.empty(),0)}static newUnknownDocument(e,n){return new Ge(e,3,n,j.min(),j.min(),Tt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(j.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ge&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ge(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,n){this.position=e,this.inclusive=n}}function Vy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=M.comparator(M.fromName(o.referenceValue),n.key):r=Xi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function My(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!en(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e,n="asc"){this.field=e,this.dir=n}}function i2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{}class Te extends Qw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new o2(e,n,r):n==="array-contains"?new u2(e,r):n==="in"?new c2(e,r):n==="not-in"?new h2(e,r):n==="array-contains-any"?new f2(e,r):new Te(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new a2(e,r):new l2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Xi(n,this.value)):n!==null&&Qr(this.value)===Qr(n)&&this.matchesComparison(Xi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $t extends Qw{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new $t(e,n)}matches(e){return Yw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Yw(t){return t.op==="and"}function Xw(t){return s2(t)&&Yw(t)}function s2(t){for(const e of t.filters)if(e instanceof $t)return!1;return!0}function Kf(t){if(t instanceof Te)return t.field.canonicalString()+t.op.toString()+Ji(t.value);if(Xw(t))return t.filters.map(e=>Kf(e)).join(",");{const e=t.filters.map(n=>Kf(n)).join(",");return`${t.op}(${e})`}}function Jw(t,e){return t instanceof Te?function(r,i){return i instanceof Te&&r.op===i.op&&r.field.isEqual(i.field)&&en(r.value,i.value)}(t,e):t instanceof $t?function(r,i){return i instanceof $t&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Jw(o,i.filters[a]),!0):!1}(t,e):void U()}function Zw(t){return t instanceof Te?function(n){return`${n.field.canonicalString()} ${n.op} ${Ji(n.value)}`}(t):t instanceof $t?function(n){return n.op.toString()+" {"+n.getFilters().map(Zw).join(" ,")+"}"}(t):"Filter"}class o2 extends Te{constructor(e,n,r){super(e,n,r),this.key=M.fromName(r.referenceValue)}matches(e){const n=M.comparator(e.key,this.key);return this.matchesComparison(n)}}class a2 extends Te{constructor(e,n){super(e,"in",n),this.keys=eE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class l2 extends Te{constructor(e,n){super(e,"not-in",n),this.keys=eE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function eE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>M.fromName(r.referenceValue))}class u2 extends Te{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Gp(n)&&Fo(n.arrayValue,this.value)}}class c2 extends Te{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Fo(this.value.arrayValue,n)}}class h2 extends Te{constructor(e,n){super(e,"not-in",n)}matches(e){if(Fo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Fo(this.value.arrayValue,n)}}class f2 extends Te{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Gp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Fo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function Fy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new d2(t,e,n,r,i,s,o)}function Qp(t){const e=B(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Kf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),fc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ji(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ji(r)).join(",")),e.ce=n}return e.ce}function Yp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!i2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Jw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!My(t.startAt,e.startAt)&&My(t.endAt,e.endAt)}function Gf(t){return M.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function p2(t,e,n,r,i,s,o,a){return new pa(t,e,n,r,i,s,o,a)}function Xp(t){return new pa(t)}function Uy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function tE(t){return t.collectionGroup!==null}function to(t){const e=B(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new je(Fe.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new yu(s,r))}),n.has(Fe.keyField().canonicalString())||e.le.push(new yu(Fe.keyField(),r))}return e.le}function Yt(t){const e=B(t);return e.he||(e.he=m2(e,to(t))),e.he}function m2(t,e){if(t.limitType==="F")return Fy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new yu(i.field,s)});const n=t.endAt?new gu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new gu(t.startAt.position,t.startAt.inclusive):null;return Fy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Qf(t,e){const n=t.filters.concat([e]);return new pa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Yf(t,e,n){return new pa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function dc(t,e){return Yp(Yt(t),Yt(e))&&t.limitType===e.limitType}function nE(t){return`${Qp(Yt(t))}|lt:${t.limitType}`}function li(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Zw(i)).join(", ")}]`),fc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ji(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ji(i)).join(",")),`Target(${r})`}(Yt(t))}; limitType=${t.limitType})`}function pc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):M.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of to(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=Vy(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,to(r),i)||r.endAt&&!function(o,a,l){const u=Vy(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,to(r),i))}(t,e)}function g2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function rE(t){return(e,n)=>{let r=!1;for(const i of to(t)){const s=y2(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function y2(t,e,n){const r=t.field.isKeyField()?M.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Xi(l,u):U()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return U()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){fs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return qw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v2=new pe(M.comparator);function wn(){return v2}const iE=new pe(M.comparator);function $s(...t){let e=iE;for(const n of t)e=e.insert(n.key,n);return e}function sE(t){let e=iE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function br(){return no()}function oE(){return no()}function no(){return new ds(t=>t.toString(),(t,e)=>t.isEqual(e))}const _2=new pe(M.comparator),w2=new je(M.comparator);function G(...t){let e=w2;for(const n of t)e=e.add(n);return e}const E2=new je(Z);function I2(){return E2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aE(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:mu(e)?"-0":e}}function lE(t){return{integerValue:""+t}}function T2(t,e){return e2(e)?lE(e):aE(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(){this._=void 0}}function S2(t,e,n){return t instanceof vu?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&qp(s)&&(s=Kp(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Uo?cE(t,e):t instanceof $o?hE(t,e):function(i,s){const o=uE(i,s),a=$y(o)+$y(i.Ie);return qf(o)&&qf(i.Ie)?lE(a):aE(i.serializer,a)}(t,e)}function A2(t,e,n){return t instanceof Uo?cE(t,e):t instanceof $o?hE(t,e):n}function uE(t,e){return t instanceof _u?function(r){return qf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class vu extends mc{}class Uo extends mc{constructor(e){super(),this.elements=e}}function cE(t,e){const n=fE(e);for(const r of t.elements)n.some(i=>en(i,r))||n.push(r);return{arrayValue:{values:n}}}class $o extends mc{constructor(e){super(),this.elements=e}}function hE(t,e){let n=fE(e);for(const r of t.elements)n=n.filter(i=>!en(i,r));return{arrayValue:{values:n}}}class _u extends mc{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function $y(t){return Ee(t.integerValue||t.doubleValue)}function fE(t){return Gp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function k2(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Uo&&i instanceof Uo||r instanceof $o&&i instanceof $o?Yi(r.elements,i.elements,en):r instanceof _u&&i instanceof _u?en(r.Ie,i.Ie):r instanceof vu&&i instanceof vu}(t.transform,e.transform)}class C2{constructor(e,n){this.version=e,this.transformResults=n}}class dn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new dn}static exists(e){return new dn(void 0,e)}static updateTime(e){return new dn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Tl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class gc{}function dE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new mE(t.key,dn.none()):new ma(t.key,t.data,dn.none());{const n=t.data,r=Tt.empty();let i=new je(Fe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ii(t.key,r,new Dt(i.toArray()),dn.none())}}function P2(t,e,n){t instanceof ma?function(i,s,o){const a=i.value.clone(),l=zy(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ii?function(i,s,o){if(!Tl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=zy(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(pE(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ro(t,e,n,r){return t instanceof ma?function(s,o,a,l){if(!Tl(s.precondition,o))return a;const u=s.value.clone(),c=By(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof ii?function(s,o,a,l){if(!Tl(s.precondition,o))return a;const u=By(s.fieldTransforms,l,o),c=o.data;return c.setAll(pE(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return Tl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function R2(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=uE(r.transform,i||null);s!=null&&(n===null&&(n=Tt.empty()),n.set(r.field,s))}return n||null}function jy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Yi(r,i,(s,o)=>k2(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ma extends gc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ii extends gc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function pE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function zy(t,e,n){const r=new Map;ue(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,A2(o,a,n[i]))}return r}function By(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,S2(s,o,e))}return r}class mE extends gc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class x2 extends gc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&P2(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ro(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ro(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=oE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=dE(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(j.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),G())}isEqual(e){return this.batchId===e.batchId&&Yi(this.mutations,e.mutations,(n,r)=>jy(n,r))&&Yi(this.baseMutations,e.baseMutations,(n,r)=>jy(n,r))}}class Jp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ue(e.mutations.length===r.length);let i=function(){return _2}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Jp(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we,X;function D2(t){switch(t){default:return U();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function gE(t){if(t===void 0)return _n("GRPC error has no .code"),T.UNKNOWN;switch(t){case we.OK:return T.OK;case we.CANCELLED:return T.CANCELLED;case we.UNKNOWN:return T.UNKNOWN;case we.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case we.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case we.INTERNAL:return T.INTERNAL;case we.UNAVAILABLE:return T.UNAVAILABLE;case we.UNAUTHENTICATED:return T.UNAUTHENTICATED;case we.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case we.NOT_FOUND:return T.NOT_FOUND;case we.ALREADY_EXISTS:return T.ALREADY_EXISTS;case we.PERMISSION_DENIED:return T.PERMISSION_DENIED;case we.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case we.ABORTED:return T.ABORTED;case we.OUT_OF_RANGE:return T.OUT_OF_RANGE;case we.UNIMPLEMENTED:return T.UNIMPLEMENTED;case we.DATA_LOSS:return T.DATA_LOSS;default:return U()}}(X=we||(we={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L2(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V2=new Li([4294967295,4294967295],0);function Wy(t){const e=L2().encode(t),n=new UR;return n.update(e),new Uint8Array(n.digest())}function Hy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Li([n,r],0),new Li([i,s],0)]}class Zp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new js(`Invalid padding: ${n}`);if(r<0)throw new js(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new js(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new js(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Li.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(Li.fromNumber(r)));return i.compare(V2)===1&&(i=new Li([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Wy(e),[r,i]=Hy(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Zp(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=Wy(e),[r,i]=Hy(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class js extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ga.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new yc(j.min(),i,new pe(Z),wn(),G())}}class ga{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ga(r,n,G(),G(),G())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class yE{constructor(e,n){this.targetId=e,this.fe=n}}class vE{constructor(e,n,r=Ze.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class qy{constructor(){this.ge=0,this.pe=Gy(),this.ye=Ze.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=G(),n=G(),r=G();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:U()}}),new ga(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=Gy()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class M2{constructor(e){this.Le=e,this.ke=new Map,this.qe=wn(),this.Qe=Ky(),this.Ke=new pe(Z)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:U()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if(Gf(s))if(r===0){const o=new M(s.path);this.We(n,o,Ge.newNoDocument(o,j.min()))}else ue(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Gr(r).toUint8Array()}catch(l){if(l instanceof Kw)return Qi("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Zp(o,i,s)}catch(l){return Qi(l instanceof js?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&Gf(a.target)){const l=new M(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,Ge.newNoDocument(l,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=G();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new yc(e,n,this.Ke,this.qe,r);return this.qe=wn(),this.Qe=Ky(),this.Ke=new pe(Z),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new qy,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new je(Z),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||D("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new qy),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Ky(){return new pe(M.comparator)}function Gy(){return new pe(M.comparator)}const F2=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),U2=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),$2=(()=>({and:"AND",or:"OR"}))();class j2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Xf(t,e){return t.useProto3Json||fc(e)?e:{value:e}}function wu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _E(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function z2(t,e){return wu(t,e.toTimestamp())}function Xt(t){return ue(!!t),j.fromTimestamp(function(n){const r=ur(n);return new Ce(r.seconds,r.nanos)}(t))}function em(t,e){return function(r){return new oe(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function wE(t){const e=oe.fromString(t);return ue(SE(e)),e}function Jf(t,e){return em(t.databaseId,e.path)}function wh(t,e){const n=wE(e);if(n.get(1)!==t.databaseId.projectId)throw new O(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new O(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new M(EE(n))}function Zf(t,e){return em(t.databaseId,e)}function B2(t){const e=wE(t);return e.length===4?oe.emptyPath():EE(e)}function ed(t){return new oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function EE(t){return ue(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Qy(t,e,n){return{name:Jf(t,e),fields:n.value.mapValue.fields}}function W2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:U()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(ue(c===void 0||typeof c=="string"),Ze.fromBase64String(c||"")):(ue(c===void 0||c instanceof Uint8Array),Ze.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?T.UNKNOWN:gE(u.code);return new O(c,u.message||"")}(o);n=new vE(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=wh(t,r.document.name),s=Xt(r.document.updateTime),o=r.document.createTime?Xt(r.document.createTime):j.min(),a=new Tt({mapValue:{fields:r.document.fields}}),l=Ge.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Sl(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=wh(t,r.document),s=r.readTime?Xt(r.readTime):j.min(),o=Ge.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Sl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=wh(t,r.document),s=r.removedTargetIds||[];n=new Sl([],s,i,null)}else{if(!("filter"in e))return U();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new O2(i,s),a=r.targetId;n=new yE(a,o)}}return n}function H2(t,e){let n;if(e instanceof ma)n={update:Qy(t,e.key,e.value)};else if(e instanceof mE)n={delete:Jf(t,e.key)};else if(e instanceof ii)n={update:Qy(t,e.key,e.data),updateMask:ex(e.fieldMask)};else{if(!(e instanceof x2))return U();n={verify:Jf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof vu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Uo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof $o)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof _u)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw U()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:z2(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:U()}(t,e.precondition)),n}function q2(t,e){return t&&t.length>0?(ue(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Xt(i.updateTime):Xt(s);return o.isEqual(j.min())&&(o=Xt(s)),new C2(o,i.transformResults||[])}(n,e))):[]}function K2(t,e){return{documents:[Zf(t,e.path)]}}function G2(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Zf(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Zf(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return TE($t.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:ui(h.field),direction:X2(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Xf(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function Q2(t){let e=B2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ue(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const f=IE(h);return f instanceof $t&&Xw(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(y){return new yu(ci(y.field),function(I){switch(I){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,fc(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(h){const f=!!h.before,p=h.values||[];return new gu(p,f)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const f=!h.before,p=h.values||[];return new gu(p,f)}(n.endAt)),p2(e,i,o,s,a,"F",l,u)}function Y2(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function IE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ci(n.unaryFilter.field);return Te.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ci(n.unaryFilter.field);return Te.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ci(n.unaryFilter.field);return Te.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ci(n.unaryFilter.field);return Te.create(o,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(t):t.fieldFilter!==void 0?function(n){return Te.create(ci(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return $t.create(n.compositeFilter.filters.map(r=>IE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return U()}}(n.compositeFilter.op))}(t):U()}function X2(t){return F2[t]}function J2(t){return U2[t]}function Z2(t){return $2[t]}function ui(t){return{fieldPath:t.canonicalString()}}function ci(t){return Fe.fromServerFormat(t.fieldPath)}function TE(t){return t instanceof Te?function(n){if(n.op==="=="){if(Ly(n.value))return{unaryFilter:{field:ui(n.field),op:"IS_NAN"}};if(Dy(n.value))return{unaryFilter:{field:ui(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ly(n.value))return{unaryFilter:{field:ui(n.field),op:"IS_NOT_NAN"}};if(Dy(n.value))return{unaryFilter:{field:ui(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ui(n.field),op:J2(n.op),value:n.value}}}(t):t instanceof $t?function(n){const r=n.getFilters().map(i=>TE(i));return r.length===1?r[0]:{compositeFilter:{op:Z2(n.op),filters:r}}}(t):U()}function ex(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function SE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,n,r,i,s=j.min(),o=j.min(),a=Ze.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Wn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(e){this.ut=e}}function nx(t){const e=Q2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Yf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{constructor(){this.on=new ix}addToCollectionParentIndex(e,n){return this.on.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}deleteAllFieldIndexes(e){return A.resolve()}createTargetIndexes(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(lr.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(lr.min())}updateCollectionGroup(e,n,r){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class ix{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new je(oe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new je(oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Zi(0)}static Nn(){return new Zi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(){this.changes=new ds(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ge.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?A.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ro(r.mutation,i,Dt.empty(),Ce.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,G()).next(()=>r))}getLocalViewOfDocuments(e,n,r=G()){const i=br();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=$s();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=br();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,G()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=wn();const o=no(),a=function(){return no()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof ii)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),ro(c.mutation,u,c.mutation.getFieldMask(),Ce.now())):o.set(u.key,Dt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new ox(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=no();let i=new pe((o,a)=>o-a),s=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Dt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||G()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=oE();c.forEach(f=>{if(!s.has(f)){const p=dE(n.get(f),r.get(f));p!==null&&h.set(f,p),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return A.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return M.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):tE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):A.resolve(br());let a=-1,l=s;return o.next(u=>A.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?A.resolve():this.remoteDocumentCache.getEntry(e,c).next(f=>{l=l.insert(c,f)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,G())).next(c=>({batchId:a,changes:sE(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new M(n)).next(r=>{let i=$s();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=$s();return this.indexManager.getCollectionParents(e,s).next(a=>A.forEach(a,l=>{const u=function(h,f){return new pa(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,Ge.newInvalidDocument(c)))});let a=$s();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&ro(c.mutation,u,Dt.empty(),Ce.now()),pc(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return A.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Xt(i.createTime)}}(n)),A.resolve()}getNamedQuery(e,n){return A.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(i){return{name:i.name,query:nx(i.bundledQuery),readTime:Xt(i.readTime)}}(n)),A.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(){this.overlays=new pe(M.comparator),this.lr=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const r=br();return A.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.lt(e,n,s)}),A.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),A.resolve()}getOverlaysForCollection(e,n,r){const i=br(),s=n.length+1,o=new M(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return A.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new pe((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=br(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=br(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return A.resolve(a)}lt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new b2(n,r));let s=this.lr.get(n);s===void 0&&(s=G(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(){this.hr=new je(xe.Pr),this.Ir=new je(xe.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new xe(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new xe(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new M(new oe([])),r=new xe(n,e),i=new xe(n,e+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new M(new oe([])),r=new xe(n,e),i=new xe(n,e+1);let s=G();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new xe(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class xe{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return M.comparator(e.key,n.key)||Z(e.gr,n.gr)}static Tr(e,n){return Z(e.gr,n.gr)||M.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cx{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new je(xe.Pr)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new N2(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new xe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return A.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new xe(n,0),i=new xe(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),A.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new je(Z);return n.forEach(i=>{const s=new xe(i,0),o=new xe(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),A.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;M.isDocumentKey(s)||(s=s.child(""));const o=new xe(new M(s),0);let a=new je(Z);return this.yr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gr)),!0)},o),A.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ue(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return A.forEach(n.mutations,i=>{const s=new xe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new xe(n,0),i=this.yr.firstAfterOrEqual(r);return A.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx{constructor(e){this.Cr=e,this.docs=function(){return new pe(M.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return A.resolve(r?r.document.mutableCopy():Ge.newInvalidDocument(n))}getEntries(e,n){let r=wn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ge.newInvalidDocument(i))}),A.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=wn();const o=n.path,a=new M(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||XR(YR(c),r)<=0||(i.has(c.key)||pc(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return A.resolve(s)}getAllFromCollectionGroup(e,n,r,i){U()}vr(e,n){return A.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new fx(this)}getSize(e){return A.resolve(this.size)}}class fx extends sx{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(e,i)):this._r.removeEntry(r)}),A.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(e){this.persistence=e,this.Fr=new ds(n=>Qp(n),Yp),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.Mr=0,this.Or=new tm,this.targetCount=0,this.Nr=Zi.On()}forEachTarget(e,n){return this.Fr.forEach((r,i)=>n(i)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),A.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new Zi(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.kn(n),A.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),A.waitFor(s).next(()=>i)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return A.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),A.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),A.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),A.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return A.resolve(r)}containsKey(e,n){return A.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(e,n){this.Br={},this.overlays={},this.Lr=new Hp(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new dx(this),this.indexManager=new rx,this.remoteDocumentCache=function(i){return new hx(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new tx(n),this.Kr=new lx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new ux,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new cx(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){D("MemoryPersistence","Starting transaction:",e);const i=new mx(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(e,n){return A.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class mx extends ZR{constructor(e){super(),this.currentSequenceNumber=e}}class nm{constructor(e){this.persistence=e,this.Gr=new tm,this.zr=null}static jr(e){return new nm(e)}get Hr(){if(this.zr)return this.zr;throw U()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),A.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),A.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Hr,r=>{const i=M.fromPath(r);return this.Jr(e,i).next(s=>{s||n.removeEntry(i,j.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return A.or([()=>A.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=i}static Qi(e,n){let r=G(),i=G();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new rm(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.zi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new gx;return this.Hi(e,n,o).next(a=>{if(s.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>s.result)}Ji(e,n,r,i){return r.documentReadCount<this.Ui?(Ns()<=Y.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",li(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),A.resolve()):(Ns()<=Y.DEBUG&&D("QueryEngine","Query:",li(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(Ns()<=Y.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",li(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yt(n))):A.resolve())}zi(e,n){if(Uy(n))return A.resolve(null);let r=Yt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Yf(n,null,"F"),r=Yt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=G(...s);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Yi(n,a);return this.Zi(n,u,o,l.readTime)?this.zi(e,Yf(n,null,"F")):this.Xi(e,u,n,l)}))})))}ji(e,n,r,i){return Uy(n)||i.isEqual(j.min())?A.resolve(null):this.Gi.getDocuments(e,r).next(s=>{const o=this.Yi(n,s);return this.Zi(n,o,r,i)?A.resolve(null):(Ns()<=Y.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),li(n)),this.Xi(e,o,n,QR(i,-1)).next(a=>a))})}Yi(e,n){let r=new je(rE(e));return n.forEach((i,s)=>{pc(e,s)&&(r=r.add(s))}),r}Zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(e,n,r){return Ns()<=Y.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",li(n)),this.Gi.getDocumentsMatchingQuery(e,n,lr.min(),r)}Xi(e,n,r,i){return this.Gi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{constructor(e,n,r,i){this.persistence=e,this.es=n,this.serializer=i,this.ts=new pe(Z),this.ns=new ds(s=>Qp(s),Yp),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ax(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function _x(t,e,n,r){return new vx(t,e,n,r)}async function AE(t,e){const n=B(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=G();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({_s:u,removedBatchIds:o,addedBatchIds:a}))})})}function wx(t,e){const n=B(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,f=h.keys();let p=A.resolve();return f.forEach(y=>{p=p.next(()=>c.getEntry(l,y)).next(v=>{const I=u.docVersions.get(y);ue(I!==null),v.version.compareTo(I)<0&&(h.applyToRemoteDocument(v,u),v.isValidDocument()&&(v.setReadTime(u.commitVersion),c.addEntry(v)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=G();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function kE(t){const e=B(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function Ex(t,e){const n=B(t),r=e.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];e.targetChanges.forEach((c,h)=>{const f=i.get(h);if(!f)return;a.push(n.qr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.qr.addMatchingKeys(s,c.addedDocuments,h)));let p=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(Ze.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(h,p),function(v,I,m){return v.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(f,p,c)&&a.push(n.qr.updateTargetData(s,p))});let l=wn(),u=G();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(Ix(s,o,e.documentUpdates).next(c=>{l=c.us,u=c.cs})),!r.isEqual(j.min())){const c=n.qr.getLastRemoteSnapshotVersion(s).next(h=>n.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return A.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ts=i,s))}function Ix(t,e,n){let r=G(),i=G();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=wn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(j.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):D("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{us:o,cs:i}})}function Tx(t,e){const n=B(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Sx(t,e){const n=B(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.qr.getTargetData(r,e).next(s=>s?(i=s,A.resolve(i)):n.qr.allocateTargetId(r).next(o=>(i=new Wn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function td(t,e,n){const r=B(t),i=r.ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!da(o))throw o;D("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(i.target)}function Yy(t,e,n){const r=B(t);let i=j.min(),s=G();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const h=B(l),f=h.ns.get(c);return f!==void 0?A.resolve(h.ts.get(f)):h.qr.getTargetData(u,c)}(r,o,Yt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?i:j.min(),n?s:G())).next(a=>(Ax(r,g2(e),a),{documents:a,ls:s})))}function Ax(t,e,n){let r=t.rs.get(e)||j.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.rs.set(e,r)}class Xy{constructor(){this.activeTargetIds=I2()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class kx{constructor(){this.eo=new Xy,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new Xy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Za=null;function Eh(){return Za===null?Za=function(){return 268435456+Math.round(2147483648*Math.random())}():Za++,"0x"+Za.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Px={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rx{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He="WebChannelConnection";class xx extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${i}/databases/${s}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get yo(){return!1}wo(n,r,i,s,o){const a=Eh(),l=this.So(n,r);D("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(u,s,o),this.Do(n,l,u,i).then(c=>(D("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Qi("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}Co(n,r,i,s,o,a){return this.wo(n,r,i,s,o)}bo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+hs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}So(n,r){const i=Px[n];return`${this.mo}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,i){const s=Eh();return new Promise((o,a)=>{const l=new FR;l.setWithCredentials(!0),l.listenOnce(LR.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case _h.NO_ERROR:const c=l.getResponseJson();D(He,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case _h.TIMEOUT:D(He,`RPC '${e}' ${s} timed out`),a(new O(T.DEADLINE_EXCEEDED,"Request time out"));break;case _h.HTTP_ERROR:const h=l.getStatus();if(D(He,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const y=function(I){const m=I.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(m)>=0?m:T.UNKNOWN}(p.status);a(new O(y,p.message))}else a(new O(T.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new O(T.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{D(He,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);D(He,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}vo(e,n,r){const i=Eh(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=OR(),a=DR(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new MR({})),this.bo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");D(He,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let f=!1,p=!1;const y=new Rx({co:I=>{p?D(He,`Not sending because RPC '${e}' stream ${i} is closed:`,I):(f||(D(He,`Opening RPC '${e}' stream ${i} transport.`),h.open(),f=!0),D(He,`RPC '${e}' stream ${i} sending:`,I),h.send(I))},lo:()=>h.close()}),v=(I,m,d)=>{I.listen(m,g=>{try{d(g)}catch(w){setTimeout(()=>{throw w},0)}})};return v(h,Ya.EventType.OPEN,()=>{p||D(He,`RPC '${e}' stream ${i} transport opened.`)}),v(h,Ya.EventType.CLOSE,()=>{p||(p=!0,D(He,`RPC '${e}' stream ${i} transport closed`),y.Ro())}),v(h,Ya.EventType.ERROR,I=>{p||(p=!0,Qi(He,`RPC '${e}' stream ${i} transport errored:`,I),y.Ro(new O(T.UNAVAILABLE,"The operation could not be completed")))}),v(h,Ya.EventType.MESSAGE,I=>{var m;if(!p){const d=I.data[0];ue(!!d);const g=d,w=g.error||((m=g[0])===null||m===void 0?void 0:m.error);if(w){D(He,`RPC '${e}' stream ${i} received error:`,w);const S=w.status;let C=function(K){const z=we[K];if(z!==void 0)return gE(z)}(S),R=w.message;C===void 0&&(C=T.INTERNAL,R="Unknown error status: "+S+" with message "+w.message),p=!0,y.Ro(new O(C,R)),h.close()}else D(He,`RPC '${e}' stream ${i} received:`,d),y.Vo(d)}}),v(a,VR.STAT_EVENT,I=>{I.stat===Py.PROXY?D(He,`RPC '${e}' stream ${i} detected buffering proxy`):I.stat===Py.NOPROXY&&D(He,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.Ao()},0),y}}function Ih(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(t){return new j2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e,n,r,i,s,o,a,l){this.si=e,this.Ko=r,this.$o=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new CE(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(_n(n.toString()),_n("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===n&&this.s_(r,i)},r=>{e(()=>{const i=new O(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return D("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Nx extends PE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=W2(this.serializer,e),r=function(s){if(!("targetChange"in s))return j.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?j.min():o.readTime?Xt(o.readTime):j.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=ed(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Gf(l)?{documents:K2(s,l)}:{query:G2(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=_E(s,o.resumeToken);const u=Xf(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(j.min())>0){a.readTime=wu(s,o.snapshotVersion.toTimestamp());const u=Xf(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=Y2(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=ed(this.serializer),n.removeTarget=e,this.e_(n)}}class bx extends PE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=q2(e.writeResults,e.commitTime),r=Xt(e.commitTime);return this.listener.I_(r,n)}return ue(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=ed(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>H2(this.serializer,r))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new O(T.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.wo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(T.UNKNOWN,i.toString())})}Co(e,n,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new O(T.UNKNOWN,s.toString())})}terminate(){this.d_=!0}}class Dx{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(_n(n),this.f_=!1):D("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro(o=>{r.enqueueAndForget(async()=>{si(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=B(l);u.C_.add(4),await ya(u),u.M_.set("Unknown"),u.C_.delete(4),await _c(u)}(this))})}),this.M_=new Dx(r,i)}}async function _c(t){if(si(t))for(const e of t.v_)await e(!0)}async function ya(t){for(const e of t.v_)await e(!1)}function RE(t,e){const n=B(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),om(n)?sm(n):ps(n).Ho()&&im(n,e))}function xE(t,e){const n=B(t),r=ps(n);n.D_.delete(e),r.Ho()&&NE(n,e),n.D_.size===0&&(r.Ho()?r.Zo():si(n)&&n.M_.set("Unknown"))}function im(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(j.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ps(t).u_(e)}function NE(t,e){t.x_.Oe(e),ps(t).c_(e)}function sm(t){t.x_=new M2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),ps(t).start(),t.M_.g_()}function om(t){return si(t)&&!ps(t).jo()&&t.D_.size>0}function si(t){return B(t).C_.size===0}function bE(t){t.x_=void 0}async function Vx(t){t.D_.forEach((e,n)=>{im(t,e)})}async function Mx(t,e){bE(t),om(t)?(t.M_.w_(e),sm(t)):t.M_.set("Unknown")}async function Fx(t,e,n){if(t.M_.set("Online"),e instanceof vE&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.D_.delete(a),i.x_.removeTarget(a))}(t,e)}catch(r){D("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Eu(t,r)}else if(e instanceof Sl?t.x_.$e(e):e instanceof yE?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(j.min()))try{const r=await kE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.x_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.D_.get(u);c&&s.D_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.D_.get(l);if(!c)return;s.D_.set(l,c.withResumeToken(Ze.EMPTY_BYTE_STRING,c.snapshotVersion)),NE(s,l);const h=new Wn(c.target,l,u,c.sequenceNumber);im(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){D("RemoteStore","Failed to raise snapshot:",r),await Eu(t,r)}}async function Eu(t,e,n){if(!da(e))throw e;t.C_.add(1),await ya(t),t.M_.set("Offline"),n||(n=()=>kE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await _c(t)})}function OE(t,e){return e().catch(n=>Eu(t,n,e))}async function wc(t){const e=B(t),n=cr(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;Ux(e);)try{const i=await Tx(e.localStore,r);if(i===null){e.b_.length===0&&n.Zo();break}r=i.batchId,$x(e,i)}catch(i){await Eu(e,i)}DE(e)&&LE(e)}function Ux(t){return si(t)&&t.b_.length<10}function $x(t,e){t.b_.push(e);const n=cr(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function DE(t){return si(t)&&!cr(t).jo()&&t.b_.length>0}function LE(t){cr(t).start()}async function jx(t){cr(t).E_()}async function zx(t){const e=cr(t);for(const n of t.b_)e.P_(n.mutations)}async function Bx(t,e,n){const r=t.b_.shift(),i=Jp.from(r,e,n);await OE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await wc(t)}async function Wx(t,e){e&&cr(t).h_&&await async function(r,i){if(function(o){return D2(o)&&o!==T.ABORTED}(i.code)){const s=r.b_.shift();cr(r).Yo(),await OE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await wc(r)}}(t,e),DE(t)&&LE(t)}async function Zy(t,e){const n=B(t);n.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const r=si(n);n.C_.add(3),await ya(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await _c(n)}async function Hx(t,e){const n=B(t);e?(n.C_.delete(2),await _c(n)):e||(n.C_.add(2),await ya(n),n.M_.set("Unknown"))}function ps(t){return t.O_||(t.O_=function(n,r,i){const s=B(n);return s.A_(),new Nx(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:Vx.bind(null,t),Io:Mx.bind(null,t),a_:Fx.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),om(t)?sm(t):t.M_.set("Unknown")):(await t.O_.stop(),bE(t))})),t.O_}function cr(t){return t.N_||(t.N_=function(n,r,i){const s=B(n);return s.A_(),new bx(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:jx.bind(null,t),Io:Wx.bind(null,t),T_:zx.bind(null,t),I_:Bx.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await wc(t)):(await t.N_.stop(),t.b_.length>0&&(D("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new fn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new am(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lm(t,e){if(_n("AsyncQueue",`${e}: ${t}`),da(t))return new O(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||M.comparator(n.key,r.key):(n,r)=>M.comparator(n.key,r.key),this.keyedMap=$s(),this.sortedSet=new pe(this.comparator)}static emptySet(e){return new Vi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Vi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Vi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(){this.B_=new pe(M.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):U():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class es{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new es(e,n,Vi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&dc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(){this.k_=void 0,this.listeners=[]}}class Kx{constructor(){this.queries=new ds(e=>nE(e),dc),this.onlineState="Unknown",this.q_=new Set}}async function VE(t,e){const n=B(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new qx),i)try{s.k_=await n.onListen(r)}catch(o){const a=lm(o,`Initialization of query '${li(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Q_(n.onlineState),s.k_&&e.K_(s.k_)&&um(n)}async function ME(t,e){const n=B(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Gx(t,e){const n=B(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.K_(i)&&(r=!0);o.k_=i}}r&&um(n)}function Qx(t,e,n){const r=B(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function um(t){t.q_.forEach(e=>{e.next()})}class FE{constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new es(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=es.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(e){this.key=e}}class $E{constructor(e){this.key=e}}class Yx{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=G(),this.mutatedKeys=G(),this._a=rE(e),this.aa=new Vi(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new ev,i=n?n.aa:this.aa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const f=i.get(c),p=pc(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let I=!1;f&&p?f.data.isEqual(p.data)?y!==v&&(r.track({type:3,doc:p}),I=!0):this.ha(f,p)||(r.track({type:2,doc:p}),I=!0,(l&&this._a(p,l)>0||u&&this._a(p,u)<0)&&(a=!0)):!f&&p?(r.track({type:0,doc:p}),I=!0):f&&!p&&(r.track({type:1,doc:f}),I=!0,(l||u)&&(a=!0)),I&&(p?(o=o.add(p),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{aa:o,la:r,Zi:a,mutatedKeys:s}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const s=e.la.L_();s.sort((u,c)=>function(f,p){const y=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return y(f)-y(p)}(u.type,c.type)||this._a(u.doc,c.doc)),this.Pa(r);const o=n?this.Ia():[],a=this.oa.size===0&&this.current?1:0,l=a!==this.sa;return this.sa=a,s.length!==0||l?{snapshot:new es(this.query,e.aa,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:o}:{Ta:o}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new ev,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=G(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new $E(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new UE(r))}),n}da(e){this.ia=e.ls,this.oa=G();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return es.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class Xx{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Jx{constructor(e){this.key=e,this.Ra=!1}}class Zx{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new ds(a=>nE(a),dc),this.fa=new Map,this.ga=new Set,this.pa=new pe(M.comparator),this.ya=new Map,this.wa=new tm,this.Sa={},this.ba=new Map,this.Da=Zi.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function eN(t,e){const n=cN(t);let r,i;const s=n.ma.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const o=await Sx(n.localStore,Yt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await tN(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&RE(n.remoteStore,o)}return i}async function tN(t,e,n,r,i){t.va=(h,f,p)=>async function(v,I,m,d){let g=I.view.ca(m);g.Zi&&(g=await Yy(v.localStore,I.query,!1).then(({documents:C})=>I.view.ca(C,g)));const w=d&&d.targetChanges.get(I.targetId),S=I.view.applyChanges(g,v.isPrimaryClient,w);return nv(v,I.targetId,S.Ta),S.snapshot}(t,h,f,p);const s=await Yy(t.localStore,e,!0),o=new Yx(e,s.ls),a=o.ca(s.documents),l=ga.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);nv(t,n,u.Ta);const c=new Xx(e,n,o);return t.ma.set(e,c),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),u.snapshot}async function nN(t,e){const n=B(t),r=n.ma.get(e),i=n.fa.get(r.targetId);if(i.length>1)return n.fa.set(r.targetId,i.filter(s=>!dc(s,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await td(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),xE(n.remoteStore,r.targetId),nd(n,r.targetId)}).catch(fa)):(nd(n,r.targetId),await td(n.localStore,r.targetId,!0))}async function rN(t,e,n){const r=hN(t);try{const i=await function(o,a){const l=B(o),u=Ce.now(),c=a.reduce((p,y)=>p.add(y.key),G());let h,f;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let y=wn(),v=G();return l.ss.getEntries(p,c).next(I=>{y=I,y.forEach((m,d)=>{d.isValidDocument()||(v=v.add(m))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,y)).next(I=>{h=I;const m=[];for(const d of a){const g=R2(d,h.get(d.key).overlayedDocument);g!=null&&m.push(new ii(d.key,g,Gw(g.value.mapValue),dn.exists(!0)))}return l.mutationQueue.addMutationBatch(p,u,m,a)}).next(I=>{f=I;const m=I.applyToLocalDocumentSet(h,v);return l.documentOverlayCache.saveOverlays(p,I.batchId,m)})}).then(()=>({batchId:f.batchId,changes:sE(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Sa[o.currentUser.toKey()];u||(u=new pe(Z)),u=u.insert(a,l),o.Sa[o.currentUser.toKey()]=u}(r,i.batchId,n),await va(r,i.changes),await wc(r.remoteStore)}catch(i){const s=lm(i,"Failed to persist write");n.reject(s)}}async function jE(t,e){const n=B(t);try{const r=await Ex(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.ya.get(s);o&&(ue(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?ue(o.Ra):i.removedDocuments.size>0&&(ue(o.Ra),o.Ra=!1))}),await va(n,r,e)}catch(r){await fa(r)}}function tv(t,e,n){const r=B(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ma.forEach((s,o)=>{const a=o.view.Q_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=B(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const f of h.listeners)f.Q_(a)&&(u=!0)}),u&&um(l)}(r.eventManager,e),i.length&&r.Va.a_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function iN(t,e,n){const r=B(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ya.get(e),s=i&&i.key;if(s){let o=new pe(M.comparator);o=o.insert(s,Ge.newNoDocument(s,j.min()));const a=G().add(s),l=new yc(j.min(),new Map,new pe(Z),o,a);await jE(r,l),r.pa=r.pa.remove(s),r.ya.delete(e),cm(r)}else await td(r.localStore,e,!1).then(()=>nd(r,e,n)).catch(fa)}async function sN(t,e){const n=B(t),r=e.batch.batchId;try{const i=await wx(n.localStore,e);BE(n,r,null),zE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await va(n,i)}catch(i){await fa(i)}}async function oN(t,e,n){const r=B(t);try{const i=await function(o,a){const l=B(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(ue(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);BE(r,e,n),zE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await va(r,i)}catch(i){await fa(i)}}function zE(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function BE(t,e,n){const r=B(t);let i=r.Sa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Sa[r.currentUser.toKey()]=i}}function nd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||WE(t,r)})}function WE(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(xE(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),cm(t))}function nv(t,e,n){for(const r of n)r instanceof UE?(t.wa.addReference(r.key,e),aN(t,r)):r instanceof $E?(D("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||WE(t,r.key)):U()}function aN(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(D("SyncEngine","New document in limbo: "+n),t.ga.add(r),cm(t))}function cm(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new M(oe.fromString(e)),r=t.Da.next();t.ya.set(r,new Jx(n)),t.pa=t.pa.insert(n,r),RE(t.remoteStore,new Wn(Yt(Xp(n.path)),r,"TargetPurposeLimboResolution",Hp._e))}}async function va(t,e,n){const r=B(t),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,l)=>{o.push(r.va(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=rm.Qi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Va.a_(i),await async function(l,u){const c=B(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>A.forEach(u,f=>A.forEach(f.ki,p=>c.persistence.referenceDelegate.addReference(h,f.targetId,p)).next(()=>A.forEach(f.qi,p=>c.persistence.referenceDelegate.removeReference(h,f.targetId,p)))))}catch(h){if(!da(h))throw h;D("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const f=h.targetId;if(!h.fromCache){const p=c.ts.get(f),y=p.snapshotVersion,v=p.withLastLimboFreeSnapshotVersion(y);c.ts=c.ts.insert(f,v)}}}(r.localStore,s))}async function lN(t,e){const n=B(t);if(!n.currentUser.isEqual(e)){D("SyncEngine","User change. New user:",e.toKey());const r=await AE(n.localStore,e);n.currentUser=e,function(s,o){s.ba.forEach(a=>{a.forEach(l=>{l.reject(new O(T.CANCELLED,o))})}),s.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await va(n,r._s)}}function uN(t,e){const n=B(t),r=n.ya.get(e);if(r&&r.Ra)return G().add(r.key);{let i=G();const s=n.fa.get(e);if(!s)return i;for(const o of s){const a=n.ma.get(o);i=i.unionWith(a.view.ua)}return i}}function cN(t){const e=B(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=jE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=uN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=iN.bind(null,e),e.Va.a_=Gx.bind(null,e.eventManager),e.Va.Fa=Qx.bind(null,e.eventManager),e}function hN(t){const e=B(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=oN.bind(null,e),e}class rv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=vc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return _x(this.persistence,new yx,e.initialUser,this.serializer)}createPersistence(e){return new px(nm.jr,this.serializer)}createSharedClientState(e){return new kx}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class fN{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>tv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=lN.bind(null,this.syncEngine),await Hx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Kx}()}createDatastore(e){const n=vc(e.databaseInfo.databaseId),r=function(s){return new xx(s)}(e.databaseInfo);return function(s,o,a,l){return new Ox(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new Lx(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>tv(this.syncEngine,n,0),function(){return Jy.D()?new Jy:new Cx}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new Zx(i,s,o,a,l,u);return c&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=B(n);D("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await ya(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):_n("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=qe.UNAUTHENTICATED,this.clientId=Hw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{D("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(D("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new O(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=lm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Th(t,e){t.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await AE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function iv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await mN(t);D("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Zy(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Zy(e.remoteStore,s)),t._onlineComponents=e}function pN(t){return t.name==="FirebaseError"?t.code===T.FAILED_PRECONDITION||t.code===T.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function mN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){D("FirestoreClient","Using user provided OfflineComponentProvider");try{await Th(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!pN(n))throw n;Qi("Error using user provided cache. Falling back to memory cache: "+n),await Th(t,new rv)}}else D("FirestoreClient","Using default OfflineComponentProvider"),await Th(t,new rv);return t._offlineComponents}async function qE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(D("FirestoreClient","Using user provided OnlineComponentProvider"),await iv(t,t._uninitializedComponentsProvider._online)):(D("FirestoreClient","Using default OnlineComponentProvider"),await iv(t,new fN))),t._onlineComponents}function gN(t){return qE(t).then(e=>e.syncEngine)}async function KE(t){const e=await qE(t),n=e.eventManager;return n.onListen=eN.bind(null,e.syncEngine),n.onUnlisten=nN.bind(null,e.syncEngine),n}function yN(t,e,n={}){const r=new fn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new HE({next:f=>{o.enqueueAndForget(()=>ME(s,h));const p=f.docs.has(a);!p&&f.fromCache?u.reject(new O(T.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&f.fromCache&&l&&l.source==="server"?u.reject(new O(T.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(f)},error:f=>u.reject(f)}),h=new FE(Xp(a.path),c,{includeMetadataChanges:!0,J_:!0});return VE(s,h)}(await KE(t),t.asyncQueue,e,n,r)),r.promise}function vN(t,e,n={}){const r=new fn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new HE({next:f=>{o.enqueueAndForget(()=>ME(s,h)),f.fromCache&&l.source==="server"?u.reject(new O(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(f)},error:f=>u.reject(f)}),h=new FE(a,c,{includeMetadataChanges:!0,J_:!0});return VE(s,h)}(await KE(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QE(t,e,n){if(!n)throw new O(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function _N(t,e,n,r){if(e===!0&&r===!0)throw new O(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ov(t){if(!M.isDocumentKey(t))throw new O(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function av(t){if(M.isDocumentKey(t))throw new O(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ec(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":U()}function Yr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new O(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ec(t);throw new O(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new O(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new O(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}_N("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=GE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new O(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new O(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new O(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ic{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new O(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new O(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lv(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new $R;switch(r.type){case"firstParty":return new WR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=sv.get(n);r&&(D("ComponentProvider","Removing Datastore"),sv.delete(n),r.terminate())}(this),Promise.resolve()}}function wN(t,e,n,r={}){var i;const s=(t=Yr(t,Ic))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Qi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=qe.MOCK_USER;else{a=fC(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new O(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new qe(u)}t._authCredentials=new jR(new Ww(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ms(this.firestore,e,this._query)}}class ht{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ir(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ht(this.firestore,e,this._key)}}class ir extends ms{constructor(e,n,r){super(e,n,Xp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ht(this.firestore,null,new M(e))}withConverter(e){return new ir(this.firestore,e,this._path)}}function EN(t,e,...n){if(t=rt(t),QE("collection","path",e),t instanceof Ic){const r=oe.fromString(e,...n);return av(r),new ir(t,null,r)}{if(!(t instanceof ht||t instanceof ir))throw new O(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(oe.fromString(e,...n));return av(r),new ir(t.firestore,null,r)}}function IN(t,e,...n){if(t=rt(t),arguments.length===1&&(e=Hw.newId()),QE("doc","path",e),t instanceof Ic){const r=oe.fromString(e,...n);return ov(r),new ht(t,null,new M(r))}{if(!(t instanceof ht||t instanceof ir))throw new O(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(oe.fromString(e,...n));return ov(r),new ht(t.firestore,t instanceof ir?t.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new CE(this,"async_queue_retry"),this.iu=()=>{const n=Ih();n&&D("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=Ih();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=Ih();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new fn;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!da(e))throw e;D("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw _n("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const i=am.createAndSchedule(this,e,n,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&U()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}class Tc extends Ic{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new TN}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||YE(this),this._firestoreClient.terminate()}}function SN(t,e){const n=typeof t=="object"?t:U1(),r=typeof t=="string"?t:e||"(default)",i=Ep(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=cC("firestore");s&&wN(i,...s)}return i}function hm(t){return t._firestoreClient||YE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function YE(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new n2(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,GE(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new dN(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ts(Ze.fromBase64String(e))}catch(n){throw new O(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ts(Ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new O(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new O(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new O(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AN=/^__.*__$/;class kN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ii(e,this.data,this.fieldMask,n,this.fieldTransforms):new ma(e,this.data,n,this.fieldTransforms)}}function JE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class pm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new pm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Au(e),i}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return Iu(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(JE(this.Iu)&&AN.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class CN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||vc(e)}pu(e,n,r,i=!1){return new pm({Iu:e,methodName:n,gu:r,path:Fe.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ZE(t){const e=t._freezeSettings(),n=vc(t._databaseId);return new CN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function PN(t,e,n,r,i,s={}){const o=t.pu(s.merge||s.mergeFields?2:0,e,n,i);nI("Data must be an object, but it was:",o,r);const a=eI(r,o);let l,u;if(s.merge)l=new Dt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const f=xN(e,h,n);if(!o.contains(f))throw new O(T.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);bN(c,f)||c.push(f)}l=new Dt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new kN(new Tt(a),l,u)}function RN(t,e,n,r=!1){return mm(n,t.pu(r?4:3,e))}function mm(t,e){if(tI(t=rt(t)))return nI("Unsupported field value:",e,t),eI(t,e);if(t instanceof XE)return function(r,i){if(!JE(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=mm(a,i.Vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=rt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return T2(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ce.fromDate(r);return{timestampValue:wu(i.serializer,s)}}if(r instanceof Ce){const s=new Ce(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:wu(i.serializer,s)}}if(r instanceof dm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ts)return{bytesValue:_E(i.serializer,r._byteString)};if(r instanceof ht){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:em(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${Ec(r)}`)}(t,e)}function eI(t,e){const n={};return qw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fs(t,(r,i)=>{const s=mm(i,e.Eu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function tI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ce||t instanceof dm||t instanceof ts||t instanceof ht||t instanceof XE)}function nI(t,e,n){if(!tI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Ec(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function xN(t,e,n){if((e=rt(e))instanceof fm)return e._internalPath;if(typeof e=="string")return rI(t,e);throw Iu("Field path arguments must be of type string or ",t,!1,void 0,n)}const NN=new RegExp("[~\\*/\\[\\]]");function rI(t,e,n){if(e.search(NN)>=0)throw Iu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new fm(...e.split("."))._internalPath}catch{throw Iu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Iu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new O(T.INVALID_ARGUMENT,a+t+l)}function bN(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ON(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(sI("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ON extends iI{data(){return super.data()}}function sI(t,e){return typeof e=="string"?rI(t,e):e instanceof fm?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new O(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gm{}class LN extends gm{}function VN(t,e,...n){let r=[];e instanceof gm&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof vm).length,a=s.filter(l=>l instanceof ym).length;if(o>1||o>0&&a>0)throw new O(T.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class ym extends LN{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ym(e,n,r)}_apply(e){const n=this._parse(e);return oI(e._query,n),new ms(e.firestore,e.converter,Qf(e._query,n))}_parse(e){const n=ZE(e.firestore);return function(s,o,a,l,u,c,h){let f;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new O(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){cv(h,c);const p=[];for(const y of h)p.push(uv(l,s,y));f={arrayValue:{values:p}}}else f=uv(l,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||cv(h,c),f=RN(a,o,h,c==="in"||c==="not-in");return Te.create(u,c,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class vm extends gm{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new vm(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:$t.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)oI(o,l),o=Qf(o,l)}(e._query,n),new ms(e.firestore,e.converter,Qf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function uv(t,e,n){if(typeof(n=rt(n))=="string"){if(n==="")throw new O(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!tE(e)&&n.indexOf("/")!==-1)throw new O(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(oe.fromString(n));if(!M.isDocumentKey(r))throw new O(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Oy(t,new M(r))}if(n instanceof ht)return Oy(t,n._key);throw new O(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ec(n)}.`)}function cv(t,e){if(!Array.isArray(t)||t.length===0)throw new O(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function oI(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new O(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new O(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class MN{convertValue(e,n="none"){switch(Qr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ee(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Gr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw U()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return fs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new dm(Ee(e.latitude),Ee(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Kp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Vo(e));default:return null}}convertTimestamp(e){const n=ur(e);return new Ce(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=oe.fromString(e);ue(SE(r));const i=new Mo(r.get(1),r.get(3)),s=new M(r.popFirst(5));return i.isEqual(n)||_n(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FN(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class aI extends iI{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Al(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(sI("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Al extends aI{data(e={}){return super.data(e)}}class UN{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new zs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Al(this._firestore,this._userDataWriter,r.key,r,new zs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new O(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Al(i._firestore,i._userDataWriter,a.doc.key,a.doc,new zs(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Al(i._firestore,i._userDataWriter,a.doc.key,a.doc,new zs(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:$N(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function $N(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jN(t){t=Yr(t,ht);const e=Yr(t.firestore,Tc);return yN(hm(e),t._key).then(n=>HN(e,t,n))}class lI extends MN{constructor(e){super(),this.firestore=e}convertBytes(e){return new ts(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ht(this.firestore,null,n)}}function zN(t){t=Yr(t,ms);const e=Yr(t.firestore,Tc),n=hm(e),r=new lI(e);return DN(t._query),vN(n,t._query).then(i=>new UN(e,r,t,i))}function BN(t,e,n){t=Yr(t,ht);const r=Yr(t.firestore,Tc),i=FN(t.converter,e,n);return WN(r,[PN(ZE(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,dn.none())])}function WN(t,e){return function(r,i){const s=new fn;return r.asyncQueue.enqueueAndForget(async()=>rN(await gN(r),i,s)),s.promise}(hm(t),e)}function HN(t,e,n){const r=n.docs.get(e._key),i=new lI(t);return new aI(t,i,e._key,r,new zs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){hs=i})(ls),Ki(new Hr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Tc(new zR(r.getProvider("auth-internal")),new qR(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new O(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mo(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),rr(Ry,"4.3.2",e),rr(Ry,"4.3.2","esm2017")})();function _m(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function uI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qN=uI,cI=new ta("auth","Firebase",uI());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu=new _p("@firebase/auth");function KN(t,...e){Tu.logLevel<=Y.WARN&&Tu.warn(`Auth (${ls}): ${t}`,...e)}function kl(t,...e){Tu.logLevel<=Y.ERROR&&Tu.error(`Auth (${ls}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t,...e){throw wm(t,...e)}function Jt(t,...e){return wm(t,...e)}function hI(t,e,n){const r=Object.assign(Object.assign({},qN()),{[e]:n});return new ta("auth","Firebase",r).create(e,{appName:t.name})}function GN(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Pt(t,"argument-error"),hI(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function wm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return cI.create(t,...e)}function F(t,e,...n){if(!t)throw wm(e,...n)}function un(t){const e="INTERNAL ASSERTION FAILED: "+t;throw kl(e),new Error(e)}function En(t,e){t||un(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function QN(){return hv()==="http:"||hv()==="https:"}function hv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(QN()||pC()||"connection"in navigator)?navigator.onLine:!0}function XN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,n){this.shortDelay=e,this.longDelay=n,En(n>e,"Short delay should be less than long delay!"),this.isMobile=dC()||mC()}get(){return YN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(t,e){En(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZN=new _a(3e4,6e4);function _r(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function wr(t,e,n,r,i={}){return dI(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=na(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),fI.fetch()(pI(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function dI(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},JN),e);try{const i=new tb(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw el(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw el(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw el(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw el(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw hI(t,c,u);Pt(t,c)}}catch(i){if(i instanceof Cn)throw i;Pt(t,"network-request-failed",{message:String(i)})}}async function wa(t,e,n,r,i={}){const s=await wr(t,e,n,r,i);return"mfaPendingCredential"in s&&Pt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function pI(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Em(t.config,i):`${t.config.apiScheme}://${i}`}function eb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class tb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Jt(this.auth,"network-request-failed")),ZN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function el(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Jt(t,e,r);return i.customData._tokenResponse=n,i}function fv(t){return t!==void 0&&t.enterprise!==void 0}class nb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return eb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function rb(t,e){return wr(t,"GET","/v2/recaptchaConfig",_r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ib(t,e){return wr(t,"POST","/v1/accounts:delete",e)}async function sb(t,e){return wr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ob(t,e=!1){const n=rt(t),r=await n.getIdToken(e),i=Im(r);F(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:io(Sh(i.auth_time)),issuedAtTime:io(Sh(i.iat)),expirationTime:io(Sh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Sh(t){return Number(t)*1e3}function Im(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return kl("JWT malformed, contained fewer than 3 sections"),null;try{const i=b1(n);return i?JSON.parse(i):(kl("Failed to decode base64 JWT payload"),null)}catch(i){return kl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ab(t){const e=Im(t);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Cn&&lb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function lb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=io(this.lastLoginAt),this.creationTime=io(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Su(t){var e;const n=t.auth,r=await t.getIdToken(),i=await jo(t,sb(n,{idToken:r}));F(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?fb(s.providerUserInfo):[],a=hb(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new mI(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function cb(t){const e=rt(t);await Su(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hb(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function fb(t){return t.map(e=>{var{providerId:n}=e,r=_m(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function db(t,e){const n=await dI(t,{},async()=>{const r=na({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=pI(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",fI.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function pb(t,e){return wr(t,"POST","/v2/accounts:revokeToken",_r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ab(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return F(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await db(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new zo;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(F(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(F(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zo,this.toJSON())}_performRefresh(){return un("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(t,e){F(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ur{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=_m(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ub(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new mI(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await jo(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ob(this,e)}reload(){return cb(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ur(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Su(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await jo(this,ib(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:w,isAnonymous:S,providerData:C,stsTokenManager:R}=n;F(g&&R,e,"internal-error");const L=zo.fromJSON(this.name,R);F(typeof g=="string",e,"internal-error"),Nn(h,e.name),Nn(f,e.name),F(typeof w=="boolean",e,"internal-error"),F(typeof S=="boolean",e,"internal-error"),Nn(p,e.name),Nn(y,e.name),Nn(v,e.name),Nn(I,e.name),Nn(m,e.name),Nn(d,e.name);const K=new Ur({uid:g,auth:e,email:f,emailVerified:w,displayName:h,isAnonymous:S,photoURL:y,phoneNumber:p,tenantId:v,stsTokenManager:L,createdAt:m,lastLoginAt:d});return C&&Array.isArray(C)&&(K.providerData=C.map(z=>Object.assign({},z))),I&&(K._redirectEventId=I),K}static async _fromIdTokenResponse(e,n,r=!1){const i=new zo;i.updateFromServerResponse(n);const s=new Ur({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Su(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv=new Map;function cn(t){En(t instanceof Function,"Expected a class definition");let e=dv.get(t);return e?(En(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,dv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}gI.type="NONE";const pv=gI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(t,e,n){return`firebase:${t}:${e}:${n}`}class Mi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Cl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Cl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ur._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Mi(cn(pv),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||cn(pv);const o=Cl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Ur._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Mi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Mi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_I(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(EI(e))return"Blackberry";if(II(e))return"Webos";if(Tm(e))return"Safari";if((e.includes("chrome/")||vI(e))&&!e.includes("edge/"))return"Chrome";if(wI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function yI(t=Je()){return/firefox\//i.test(t)}function Tm(t=Je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vI(t=Je()){return/crios\//i.test(t)}function _I(t=Je()){return/iemobile/i.test(t)}function wI(t=Je()){return/android/i.test(t)}function EI(t=Je()){return/blackberry/i.test(t)}function II(t=Je()){return/webos/i.test(t)}function Sc(t=Je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function mb(t=Je()){var e;return Sc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function gb(){return gC()&&document.documentMode===10}function TI(t=Je()){return Sc(t)||wI(t)||II(t)||EI(t)||/windows phone/i.test(t)||_I(t)}function yb(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SI(t,e=[]){let n;switch(t){case"Browser":n=mv(Je());break;case"Worker":n=`${mv(Je())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ls}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _b(t,e={}){return wr(t,"GET","/v2/passwordPolicy",_r(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wb=6;class Eb{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:wb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gv(this),this.idTokenSubscription=new gv(this),this.beforeStateQueue=new vb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=cn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Mi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Su(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=XN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?rt(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(cn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _b(this),n=new Eb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ta("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await pb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&cn(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await Mi.create(this,[cn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=SI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&KN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Er(t){return rt(t)}class gv{constructor(e){this.auth=e,this.observer=null,this.addObserver=TC(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function AI(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Jt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Tb().appendChild(r)})}function Sb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Ab="https://www.google.com/recaptcha/enterprise.js?render=",kb="recaptcha-enterprise",Cb="NO_RECAPTCHA";class Pb{constructor(e){this.type=kb,this.auth=Er(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{rb(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new nb(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;fv(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(Cb)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&fv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}AI(Ab+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function yv(t,e,n,r=!1){const i=new Pb(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function id(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await yv(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await yv(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rb(t,e){const n=Ep(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ou(s,e??{}))return i;Pt(i,"already-initialized")}return n.initialize({options:e})}function xb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(cn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Nb(t,e,n){const r=Er(t);F(r._canInitEmulator,r,"emulator-config-failed"),F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=kI(e),{host:o,port:a}=bb(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Ob()}function kI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function bb(t){const e=kI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:vv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:vv(o)}}}function vv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ob(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return un("not implemented")}_getIdTokenResponse(e){return un("not implemented")}_linkToIdToken(e,n){return un("not implemented")}_getReauthenticationResolver(e){return un("not implemented")}}async function Db(t,e){return wr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lb(t,e){return wa(t,"POST","/v1/accounts:signInWithPassword",_r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vb(t,e){return wa(t,"POST","/v1/accounts:signInWithEmailLink",_r(t,e))}async function Mb(t,e){return wa(t,"POST","/v1/accounts:signInWithEmailLink",_r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo extends Sm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Bo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Bo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return id(e,n,"signInWithPassword",Lb);case"emailLink":return Vb(e,{email:this._email,oobCode:this._password});default:Pt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return id(e,r,"signUpPassword",Db);case"emailLink":return Mb(e,{idToken:n,email:this._email,oobCode:this._password});default:Pt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fi(t,e){return wa(t,"POST","/v1/accounts:signInWithIdp",_r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb="http://localhost";class Xr extends Sm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Xr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Pt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=_m(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Xr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Fi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Fi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Fi(e,n)}buildRequest(){const e={requestUri:Fb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=na(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ub(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $b(t){const e=Vs(Ms(t)).link,n=e?Vs(Ms(e)).deep_link_id:null,r=Vs(Ms(t)).deep_link_id;return(r?Vs(Ms(r)).link:null)||r||n||e||t}class Am{constructor(e){var n,r,i,s,o,a;const l=Vs(Ms(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=Ub((i=l.mode)!==null&&i!==void 0?i:null);F(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=$b(e);try{return new Am(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(){this.providerId=gs.PROVIDER_ID}static credential(e,n){return Bo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Am.parseLink(n);return F(r,"argument-error"),Bo._fromEmailAndCode(e,r.code,r.tenantId)}}gs.PROVIDER_ID="password";gs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";gs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea extends km{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends Ea{constructor(){super("facebook.com")}static credential(e){return Xr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends Ea{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Xr._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return sn.credential(n,r)}catch{return null}}}sn.GOOGLE_SIGN_IN_METHOD="google.com";sn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends Ea{constructor(){super("github.com")}static credential(e){return Xr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.GITHUB_SIGN_IN_METHOD="github.com";Un.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends Ea{constructor(){super("twitter.com")}static credential(e,n){return Xr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return $n.credential(n,r)}catch{return null}}}$n.TWITTER_SIGN_IN_METHOD="twitter.com";$n.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jb(t,e){return wa(t,"POST","/v1/accounts:signUp",_r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ur._fromIdTokenResponse(e,r,i),o=_v(r);return new Jr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=_v(r);return new Jr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function _v(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au extends Cn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Au.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Au(e,n,r,i)}}function CI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Au._fromErrorAndOperation(t,s,e,r):s})}async function zb(t,e,n=!1){const r=await jo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Jr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bb(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await jo(t,CI(r,i,e,t),n);F(s.idToken,r,"internal-error");const o=Im(s.idToken);F(o,r,"internal-error");const{sub:a}=o;return F(t.uid===a,r,"user-mismatch"),Jr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Pt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PI(t,e,n=!1){const r="signIn",i=await CI(t,r,e),s=await Jr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Wb(t,e){return PI(Er(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RI(t){const e=Er(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Hb(t,e,n){const r=Er(t),o=await id(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",jb).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&RI(t),l}),a=await Jr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function qb(t,e,n){return Wb(rt(t),gs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&RI(t),r})}function Kb(t,e,n,r){return rt(t).onIdTokenChanged(e,n,r)}function Gb(t,e,n){return rt(t).beforeAuthStateChanged(e,n)}function Qb(t,e,n,r){return rt(t).onAuthStateChanged(e,n,r)}function Yb(t){return rt(t).signOut()}const ku="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ku,"1"),this.storage.removeItem(ku),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xb(){const t=Je();return Tm(t)||Sc(t)}const Jb=1e3,Zb=10;class NI extends xI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Xb()&&yb(),this.fallbackToPolling=TI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);gb()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Zb):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Jb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}NI.type="LOCAL";const eO=NI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI extends xI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}bI.type="SESSION";const OI=bI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ac(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await tO(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ac.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Cm("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(){return window}function rO(t){Zt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DI(){return typeof Zt().WorkerGlobalScope<"u"&&typeof Zt().importScripts=="function"}async function iO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function oO(){return DI()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI="firebaseLocalStorageDb",aO=1,Cu="firebaseLocalStorage",VI="fbase_key";class Ia{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function kc(t,e){return t.transaction([Cu],e?"readwrite":"readonly").objectStore(Cu)}function lO(){const t=indexedDB.deleteDatabase(LI);return new Ia(t).toPromise()}function sd(){const t=indexedDB.open(LI,aO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Cu,{keyPath:VI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Cu)?e(r):(r.close(),await lO(),e(await sd()))})})}async function wv(t,e,n){const r=kc(t,!0).put({[VI]:e,value:n});return new Ia(r).toPromise()}async function uO(t,e){const n=kc(t,!1).get(e),r=await new Ia(n).toPromise();return r===void 0?null:r.value}function Ev(t,e){const n=kc(t,!0).delete(e);return new Ia(n).toPromise()}const cO=800,hO=3;class MI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>hO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return DI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ac._getInstance(oO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await iO(),!this.activeServiceWorker)return;this.sender=new nO(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sd();return await wv(e,ku,"1"),await Ev(e,ku),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>wv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>uO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ev(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=kc(i,!1).getAll();return new Ia(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}MI.type="LOCAL";const fO=MI;new _a(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FI(t,e){return e?cn(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm extends Sm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Fi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Fi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dO(t){return PI(t.auth,new Pm(t),t.bypassAuthState)}function pO(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),Bb(n,new Pm(t),t.bypassAuthState)}async function mO(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),zb(n,new Pm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dO;case"linkViaPopup":case"linkViaRedirect":return mO;case"reauthViaPopup":case"reauthViaRedirect":return pO;default:Pt(this.auth,"internal-error")}}resolve(e){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gO=new _a(2e3,1e4);async function yO(t,e,n){const r=Er(t);GN(t,e,km);const i=FI(r,n);return new Or(r,"signInViaPopup",e,i).executeNotNull()}class Or extends UI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Or.currentPopupAction&&Or.currentPopupAction.cancel(),Or.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){En(this.filter.length===1,"Popup operations only handle one event");const e=Cm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Or.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,gO.get())};e()}}Or.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vO="pendingRedirect",Pl=new Map;class _O extends UI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Pl.get(this.auth._key());if(!e){try{const r=await wO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Pl.set(this.auth._key(),e)}return this.bypassAuthState||Pl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wO(t,e){const n=TO(e),r=IO(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function EO(t,e){Pl.set(t._key(),e)}function IO(t){return cn(t._redirectPersistence)}function TO(t){return Cl(vO,t.config.apiKey,t.name)}async function SO(t,e,n=!1){const r=Er(t),i=FI(r,e),o=await new _O(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AO=10*60*1e3;class kO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!CO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!$I(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Jt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=AO&&this.cachedEventUids.clear(),this.cachedEventUids.has(Iv(e))}saveEventToCache(e){this.cachedEventUids.add(Iv(e)),this.lastProcessedEventTime=Date.now()}}function Iv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function $I({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function CO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $I(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PO(t,e={}){return wr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xO=/^https?/;async function NO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await PO(t);for(const n of e)try{if(bO(n))return}catch{}Pt(t,"unauthorized-domain")}function bO(t){const e=rd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!xO.test(n))return!1;if(RO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OO=new _a(3e4,6e4);function Tv(){const t=Zt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function DO(t){return new Promise((e,n)=>{var r,i,s;function o(){Tv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Tv(),n(Jt(t,"network-request-failed"))},timeout:OO.get()})}if(!((i=(r=Zt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Zt().gapi)===null||s===void 0)&&s.load)o();else{const a=Sb("iframefcb");return Zt()[a]=()=>{gapi.load?o():n(Jt(t,"network-request-failed"))},AI(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Rl=null,e})}let Rl=null;function LO(t){return Rl=Rl||DO(t),Rl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VO=new _a(5e3,15e3),MO="__/auth/iframe",FO="emulator/auth/iframe",UO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$O=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jO(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Em(e,FO):`https://${t.config.authDomain}/${MO}`,r={apiKey:e.apiKey,appName:t.name,v:ls},i=$O.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${na(r).slice(1)}`}async function zO(t){const e=await LO(t),n=Zt().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:jO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:UO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Jt(t,"network-request-failed"),a=Zt().setTimeout(()=>{s(o)},VO.get());function l(){Zt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},WO=500,HO=600,qO="_blank",KO="http://localhost";class Sv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function GO(t,e,n,r=WO,i=HO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},BO),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Je().toLowerCase();n&&(a=vI(u)?qO:n),yI(u)&&(e=e||KO,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[p,y])=>`${f}${p}=${y},`,"");if(mb(u)&&a!=="_self")return QO(e||"",a),new Sv(null);const h=window.open(e||"",a,c);F(h,t,"popup-blocked");try{h.focus()}catch{}return new Sv(h)}function QO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YO="__/auth/handler",XO="emulator/auth/handler",JO=encodeURIComponent("fac");async function Av(t,e,n,r,i,s){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ls,eventId:i};if(e instanceof km){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",IC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof Ea){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${JO}=${encodeURIComponent(l)}`:"";return`${ZO(t)}?${na(a).slice(1)}${u}`}function ZO({config:t}){return t.emulator?Em(t,XO):`https://${t.authDomain}/${YO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah="webStorageSupport";class eD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=OI,this._completeRedirectFn=SO,this._overrideRedirectResult=EO}async _openPopup(e,n,r,i){var s;En((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Av(e,n,r,rd(),i);return GO(e,o,Cm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Av(e,n,r,rd(),i);return rO(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(En(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await zO(e),r=new kO(e);return n.register("authEvent",i=>(F(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ah,{type:Ah},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ah];o!==void 0&&n(!!o),Pt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=NO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return TI()||Tm()||Sc()}}const tD=eD;var kv="@firebase/auth",Cv="1.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function iD(t){Ki(new Hr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;F(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:SI(t)},u=new Ib(r,i,s,l);return xb(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ki(new Hr("auth-internal",e=>{const n=Er(e.getProvider("auth").getImmediate());return(r=>new nD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rr(kv,Cv,rD(t)),rr(kv,Cv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sD=5*60,oD=L1("authIdTokenMaxAge")||sD;let Pv=null;const aD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>oD)return;const i=n==null?void 0:n.token;Pv!==i&&(Pv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function lD(t=U1()){const e=Ep(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Rb(t,{popupRedirectResolver:tD,persistence:[fO,eO,OI]}),r=L1("authTokenSyncURL");if(r){const s=aD(r);Gb(n,s,()=>s(n.currentUser)),Kb(n,o=>s(o))}const i=O1("auth");return i&&Nb(n,`http://${i}`),n}iD("Browser");const uD={apiKey:"AIzaSyC2DE6KdBy95FkqVpk26JFthAazE27eJ1c",authDomain:"e-commers-97d51.firebaseapp.com",projectId:"e-commers-97d51",storageBucket:"e-commers-97d51.appspot.com",messagingSenderId:"764853163128",appId:"1:764853163128:web:f09c2e9f09486d363ec98d",measurementId:"G-FQ84261ZHN"};F1(uD);const jI=new sn;jI.setCustomParameters({prompt:"select_account"});const ys=lD();ys.languageCode="it";const cD=()=>yO(ys,jI),zI=SN(),hD=async()=>{const t=EN(zI,"categories"),e=VN(t);return(await zN(e)).docs.reduce((i,s)=>{const{title:o,items:a}=s.data();return i[o.toLowerCase()]=a,i},{})},BI=async(t,e)=>{const n=IN(zI,"users",t.uid);if(!(await jN(n)).exists()){const{displayName:i,email:s}=t,o=new Date;try{await BN(n,{email:s,displayName:i,createdAt:o,...e})}catch(a){console.log(`can't creat new user ${a.massage}`)}}return n},fD=async(t,e)=>{if(!(!t||!e))return await Hb(ys,t,e)},dD=async(t,e)=>{if(!(!t||!e))return await qb(ys,t,e)},pD=async()=>await Yb(ys),mD=t=>Qb(ys,t),Rm=E.createContext({currentUser:null,setCurrentUser:()=>null}),gD=({children:t})=>{const[e,n]=E.useState(null),r={currentUser:e,setCurrentUser:n};return E.useEffect(()=>mD(s=>{s&&BI(s),n(s)}),[]),_.jsx(Rm.Provider,{value:r,children:t})},yD=(t,e)=>t.find(r=>r.id===e.id)?t.map(r=>r.id===e.id?{...r,quntity:r.quntity+1}:r):[...t,{...e,quntity:1}],vD=(t,e)=>t.find(r=>r.quntity>=2&&r.id===e.id)?t.map(r=>r.id===e.id&&r.quntity>=2?{...r,quntity:r.quntity-1}:r):t.filter(r=>r.id!==e.id),_D=(t,e)=>t.filter(n=>n.id!==e.id),Pn=E.createContext({isCartOpen:!1,setIsCartOpen:()=>{},items:[],addItemToCart:()=>{},removeItemFromCart:()=>{},clearCart:()=>{},totalPrice:0,setTotalPrice:()=>{}}),wD=({children:t})=>{const[e,n]=E.useState(!1),[r,i]=E.useState([]),[s,o]=E.useState(0),[a,l]=E.useState(0);E.useEffect(()=>{const p=r.reduce((y,v)=>y+v.quntity,0);o(p)},[r]),E.useEffect(()=>{const p=r.reduce((y,v)=>y+=v.quntity*v.price,0);l(p)},[r]),E.useEffect(()=>{localStorage.getItem("pro")&&i(JSON.parse(localStorage.getItem("pro")))},[]);const f={isCartOpen:e,setIsCartOpen:n,items:r,addItemToCart:p=>{const y=yD(r,p);localStorage.setItem("pro",JSON.stringify(y)),i(y)},removeItemFromCart:p=>{const y=vD(r,p);i(y),localStorage.setItem("pro",JSON.stringify(y))},clearCart:p=>{const y=_D(r,p);i(y),localStorage.setItem("pro",JSON.stringify(y))},cartCounter:s,totalPrice:a};return _.jsx(Pn.Provider,{value:f,children:t})},ED=t=>E.createElement("svg",{id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",...t},E.createElement("g",null,E.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),E.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),E.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),E.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),E.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),E.createElement("g",null),E.createElement("g",null),E.createElement("g",null),E.createElement("g",null),E.createElement("g",null),E.createElement("g",null),E.createElement("g",null),E.createElement("g",null),E.createElement("g",null),E.createElement("g",null),E.createElement("g",null),E.createElement("g",null),E.createElement("g",null),E.createElement("g",null),E.createElement("g",null)),ID=()=>{const{isCartOpen:t,setIsCartOpen:e,cartCounter:n}=E.useContext(Pn),r=()=>e(!t);return _.jsxs("div",{className:" cart-icon-container relative cursor-pointer ",onClick:r,children:[_.jsx(ED,{className:"w-8 text-red-600 top-0 "}),_.jsx("span",{className:"item-count text-sm absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2",children:n})]})};function Rv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function x(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Rv(Object(n),!0).forEach(function(r){Pe(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Rv(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Pu(t){"@babel/helpers - typeof";return Pu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Pu(t)}function TD(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function xv(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function SD(t,e,n){return e&&xv(t.prototype,e),n&&xv(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Pe(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function xm(t,e){return kD(t)||PD(t,e)||WI(t,e)||xD()}function Ta(t){return AD(t)||CD(t)||WI(t)||RD()}function AD(t){if(Array.isArray(t))return od(t)}function kD(t){if(Array.isArray(t))return t}function CD(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function PD(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function WI(t,e){if(t){if(typeof t=="string")return od(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return od(t,e)}}function od(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function RD(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xD(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Nv=function(){},Nm={},HI={},qI=null,KI={mark:Nv,measure:Nv};try{typeof window<"u"&&(Nm=window),typeof document<"u"&&(HI=document),typeof MutationObserver<"u"&&(qI=MutationObserver),typeof performance<"u"&&(KI=performance)}catch{}var ND=Nm.navigator||{},bv=ND.userAgent,Ov=bv===void 0?"":bv,hr=Nm,le=HI,Dv=qI,tl=KI;hr.document;var Rn=!!le.documentElement&&!!le.head&&typeof le.addEventListener=="function"&&typeof le.createElement=="function",GI=~Ov.indexOf("MSIE")||~Ov.indexOf("Trident/"),nl,rl,il,sl,ol,In="___FONT_AWESOME___",ad=16,QI="fa",YI="svg-inline--fa",Zr="data-fa-i2svg",ld="data-fa-pseudo-element",bD="data-fa-pseudo-element-pending",bm="data-prefix",Om="data-icon",Lv="fontawesome-i2svg",OD="async",DD=["HTML","HEAD","STYLE","SCRIPT"],XI=function(){try{return!0}catch{return!1}}(),ie="classic",ge="sharp",Dm=[ie,ge];function Sa(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[ie]}})}var Wo=Sa((nl={},Pe(nl,ie,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),Pe(nl,ge,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),nl)),Ho=Sa((rl={},Pe(rl,ie,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Pe(rl,ge,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),rl)),qo=Sa((il={},Pe(il,ie,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Pe(il,ge,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),il)),LD=Sa((sl={},Pe(sl,ie,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Pe(sl,ge,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),sl)),VD=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,JI="fa-layers-text",MD=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,FD=Sa((ol={},Pe(ol,ie,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Pe(ol,ge,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),ol)),ZI=[1,2,3,4,5,6,7,8,9,10],UD=ZI.concat([11,12,13,14,15,16,17,18,19,20]),$D=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Dr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ko=new Set;Object.keys(Ho[ie]).map(Ko.add.bind(Ko));Object.keys(Ho[ge]).map(Ko.add.bind(Ko));var jD=[].concat(Dm,Ta(Ko),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Dr.GROUP,Dr.SWAP_OPACITY,Dr.PRIMARY,Dr.SECONDARY]).concat(ZI.map(function(t){return"".concat(t,"x")})).concat(UD.map(function(t){return"w-".concat(t)})),so=hr.FontAwesomeConfig||{};function zD(t){var e=le.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function BD(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(le&&typeof le.querySelector=="function"){var WD=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];WD.forEach(function(t){var e=xm(t,2),n=e[0],r=e[1],i=BD(zD(n));i!=null&&(so[r]=i)})}var eT={styleDefault:"solid",familyDefault:"classic",cssPrefix:QI,replacementClass:YI,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};so.familyPrefix&&(so.cssPrefix=so.familyPrefix);var ns=x(x({},eT),so);ns.autoReplaceSvg||(ns.observeMutations=!1);var V={};Object.keys(eT).forEach(function(t){Object.defineProperty(V,t,{enumerable:!0,set:function(n){ns[t]=n,oo.forEach(function(r){return r(V)})},get:function(){return ns[t]}})});Object.defineProperty(V,"familyPrefix",{enumerable:!0,set:function(e){ns.cssPrefix=e,oo.forEach(function(n){return n(V)})},get:function(){return ns.cssPrefix}});hr.FontAwesomeConfig=V;var oo=[];function HD(t){return oo.push(t),function(){oo.splice(oo.indexOf(t),1)}}var bn=ad,Kt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function qD(t){if(!(!t||!Rn)){var e=le.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=le.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return le.head.insertBefore(e,r),t}}var KD="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Go(){for(var t=12,e="";t-- >0;)e+=KD[Math.random()*62|0];return e}function vs(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Lm(t){return t.classList?vs(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function tT(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function GD(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(tT(t[n]),'" ')},"").trim()}function Cc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Vm(t){return t.size!==Kt.size||t.x!==Kt.x||t.y!==Kt.y||t.rotate!==Kt.rotate||t.flipX||t.flipY}function QD(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function YD(t){var e=t.transform,n=t.width,r=n===void 0?ad:n,i=t.height,s=i===void 0?ad:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&GI?l+="translate(".concat(e.x/bn-r/2,"em, ").concat(e.y/bn-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/bn,"em), calc(-50% + ").concat(e.y/bn,"em)) "):l+="translate(".concat(e.x/bn,"em, ").concat(e.y/bn,"em) "),l+="scale(".concat(e.size/bn*(e.flipX?-1:1),", ").concat(e.size/bn*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var XD=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function nT(){var t=QI,e=YI,n=V.cssPrefix,r=V.replacementClass,i=XD;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var Vv=!1;function kh(){V.autoAddCss&&!Vv&&(qD(nT()),Vv=!0)}var JD={mixout:function(){return{dom:{css:nT,insertCss:kh}}},hooks:function(){return{beforeDOMElementCreation:function(){kh()},beforeI2svg:function(){kh()}}}},Tn=hr||{};Tn[In]||(Tn[In]={});Tn[In].styles||(Tn[In].styles={});Tn[In].hooks||(Tn[In].hooks={});Tn[In].shims||(Tn[In].shims=[]);var Lt=Tn[In],rT=[],ZD=function t(){le.removeEventListener("DOMContentLoaded",t),Ru=1,rT.map(function(e){return e()})},Ru=!1;Rn&&(Ru=(le.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(le.readyState),Ru||le.addEventListener("DOMContentLoaded",ZD));function eL(t){Rn&&(Ru?setTimeout(t,0):rT.push(t))}function Aa(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?tT(t):"<".concat(e," ").concat(GD(r),">").concat(s.map(Aa).join(""),"</").concat(e,">")}function Mv(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var tL=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},Ch=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?tL(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function nL(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function ud(t){var e=nL(t);return e.length===1?e[0].toString(16):null}function rL(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Fv(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function cd(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Fv(e);typeof Lt.hooks.addPack=="function"&&!i?Lt.hooks.addPack(t,Fv(e)):Lt.styles[t]=x(x({},Lt.styles[t]||{}),s),t==="fas"&&cd("fa",e)}var al,ll,ul,Si=Lt.styles,iL=Lt.shims,sL=(al={},Pe(al,ie,Object.values(qo[ie])),Pe(al,ge,Object.values(qo[ge])),al),Mm=null,iT={},sT={},oT={},aT={},lT={},oL=(ll={},Pe(ll,ie,Object.keys(Wo[ie])),Pe(ll,ge,Object.keys(Wo[ge])),ll);function aL(t){return~jD.indexOf(t)}function lL(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!aL(i)?i:null}var uT=function(){var e=function(s){return Ch(Si,function(o,a,l){return o[l]=Ch(a,s,{}),o},{})};iT=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),sT=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),lT=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in Si||V.autoFetchSvg,r=Ch(iL,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});oT=r.names,aT=r.unicodes,Mm=Pc(V.styleDefault,{family:V.familyDefault})};HD(function(t){Mm=Pc(t.styleDefault,{family:V.familyDefault})});uT();function Fm(t,e){return(iT[t]||{})[e]}function uL(t,e){return(sT[t]||{})[e]}function Lr(t,e){return(lT[t]||{})[e]}function cT(t){return oT[t]||{prefix:null,iconName:null}}function cL(t){var e=aT[t],n=Fm("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function fr(){return Mm}var Um=function(){return{prefix:null,iconName:null,rest:[]}};function Pc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?ie:n,i=Wo[r][t],s=Ho[r][t]||Ho[r][i],o=t in Lt.styles?t:null;return s||o||null}var Uv=(ul={},Pe(ul,ie,Object.keys(qo[ie])),Pe(ul,ge,Object.keys(qo[ge])),ul);function Rc(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},Pe(e,ie,"".concat(V.cssPrefix,"-").concat(ie)),Pe(e,ge,"".concat(V.cssPrefix,"-").concat(ge)),e),o=null,a=ie;(t.includes(s[ie])||t.some(function(u){return Uv[ie].includes(u)}))&&(a=ie),(t.includes(s[ge])||t.some(function(u){return Uv[ge].includes(u)}))&&(a=ge);var l=t.reduce(function(u,c){var h=lL(V.cssPrefix,c);if(Si[c]?(c=sL[a].includes(c)?LD[a][c]:c,o=c,u.prefix=c):oL[a].indexOf(c)>-1?(o=c,u.prefix=Pc(c,{family:a})):h?u.iconName=h:c!==V.replacementClass&&c!==s[ie]&&c!==s[ge]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var f=o==="fa"?cT(u.iconName):{},p=Lr(u.prefix,u.iconName);f.prefix&&(o=null),u.iconName=f.iconName||p||u.iconName,u.prefix=f.prefix||u.prefix,u.prefix==="far"&&!Si.far&&Si.fas&&!V.autoFetchSvg&&(u.prefix="fas")}return u},Um());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===ge&&(Si.fass||V.autoFetchSvg)&&(l.prefix="fass",l.iconName=Lr(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=fr()||"fas"),l}var hL=function(){function t(){TD(this,t),this.definitions={}}return SD(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=x(x({},n.definitions[a]||{}),o[a]),cd(a,o[a]);var l=qo[ie][a];l&&cd(l,o[a]),uT()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(h){typeof h=="string"&&(n[a][h]=u)}),n[a][l]=u}),n}}]),t}(),$v=[],Ai={},Ui={},fL=Object.keys(Ui);function dL(t,e){var n=e.mixoutsTo;return $v=t,Ai={},Object.keys(Ui).forEach(function(r){fL.indexOf(r)===-1&&delete Ui[r]}),$v.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Pu(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Ai[o]||(Ai[o]=[]),Ai[o].push(s[o])})}r.provides&&r.provides(Ui)}),n}function hd(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Ai[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function ei(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Ai[t]||[];i.forEach(function(s){s.apply(null,n)})}function Sn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ui[t]?Ui[t].apply(null,e):void 0}function fd(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||fr();if(e)return e=Lr(n,e)||e,Mv(hT.definitions,n,e)||Mv(Lt.styles,n,e)}var hT=new hL,pL=function(){V.autoReplaceSvg=!1,V.observeMutations=!1,ei("noAuto")},mL={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Rn?(ei("beforeI2svg",e),Sn("pseudoElements2svg",e),Sn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;V.autoReplaceSvg===!1&&(V.autoReplaceSvg=!0),V.observeMutations=!0,eL(function(){yL({autoReplaceSvgRoot:n}),ei("watch",e)})}},gL={icon:function(e){if(e===null)return null;if(Pu(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Lr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Pc(e[0]);return{prefix:r,iconName:Lr(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(V.cssPrefix,"-"))>-1||e.match(VD))){var i=Rc(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||fr(),iconName:Lr(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=fr();return{prefix:s,iconName:Lr(s,e)||e}}}},_t={noAuto:pL,config:V,dom:mL,parse:gL,library:hT,findIconDefinition:fd,toHtml:Aa},yL=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?le:n;(Object.keys(Lt.styles).length>0||V.autoFetchSvg)&&Rn&&V.autoReplaceSvg&&_t.dom.i2svg({node:r})};function xc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Aa(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Rn){var r=le.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function vL(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Vm(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Cc(x(x({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function _L(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(V.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:x(x({},i),{},{id:o}),children:r}]}]}function $m(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,h=t.extra,f=t.watchable,p=f===void 0?!1:f,y=r.found?r:n,v=y.width,I=y.height,m=i==="fak",d=[V.replacementClass,s?"".concat(V.cssPrefix,"-").concat(s):""].filter(function(K){return h.classes.indexOf(K)===-1}).filter(function(K){return K!==""||!!K}).concat(h.classes).join(" "),g={children:[],attributes:x(x({},h.attributes),{},{"data-prefix":i,"data-icon":s,class:d,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(I)})},w=m&&!~h.classes.indexOf("fa-fw")?{width:"".concat(v/I*16*.0625,"em")}:{};p&&(g.attributes[Zr]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(c||Go())},children:[l]}),delete g.attributes.title);var S=x(x({},g),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:x(x({},w),h.styles)}),C=r.found&&n.found?Sn("generateAbstractMask",S)||{children:[],attributes:{}}:Sn("generateAbstractIcon",S)||{children:[],attributes:{}},R=C.children,L=C.attributes;return S.children=R,S.attributes=L,a?_L(S):vL(S)}function jv(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=x(x(x({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[Zr]="");var c=x({},o.styles);Vm(i)&&(c.transform=YD({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var h=Cc(c);h.length>0&&(u.style=h);var f=[];return f.push({tag:"span",attributes:u,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function wL(t){var e=t.content,n=t.title,r=t.extra,i=x(x(x({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Cc(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ph=Lt.styles;function dd(t){var e=t[0],n=t[1],r=t.slice(4),i=xm(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(V.cssPrefix,"-").concat(Dr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(V.cssPrefix,"-").concat(Dr.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(V.cssPrefix,"-").concat(Dr.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var EL={found:!1,width:512,height:512};function IL(t,e){!XI&&!V.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function pd(t,e){var n=e;return e==="fa"&&V.styleDefault!==null&&(e=fr()),new Promise(function(r,i){if(Sn("missingIconAbstract"),n==="fa"){var s=cT(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Ph[e]&&Ph[e][t]){var o=Ph[e][t];return r(dd(o))}IL(t,e),r(x(x({},EL),{},{icon:V.showMissingIcons&&t?Sn("missingIconAbstract")||{}:{}}))})}var zv=function(){},md=V.measurePerformance&&tl&&tl.mark&&tl.measure?tl:{mark:zv,measure:zv},Bs='FA "6.5.2"',TL=function(e){return md.mark("".concat(Bs," ").concat(e," begins")),function(){return fT(e)}},fT=function(e){md.mark("".concat(Bs," ").concat(e," ends")),md.measure("".concat(Bs," ").concat(e),"".concat(Bs," ").concat(e," begins"),"".concat(Bs," ").concat(e," ends"))},jm={begin:TL,end:fT},xl=function(){};function Bv(t){var e=t.getAttribute?t.getAttribute(Zr):null;return typeof e=="string"}function SL(t){var e=t.getAttribute?t.getAttribute(bm):null,n=t.getAttribute?t.getAttribute(Om):null;return e&&n}function AL(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(V.replacementClass)}function kL(){if(V.autoReplaceSvg===!0)return Nl.replace;var t=Nl[V.autoReplaceSvg];return t||Nl.replace}function CL(t){return le.createElementNS("http://www.w3.org/2000/svg",t)}function PL(t){return le.createElement(t)}function dT(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?CL:PL:n;if(typeof t=="string")return le.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(dT(o,{ceFn:r}))}),i}function RL(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Nl={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(dT(i),n)}),n.getAttribute(Zr)===null&&V.keepOriginalSource){var r=le.createComment(RL(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Lm(n).indexOf(V.replacementClass))return Nl.replace(e);var i=new RegExp("".concat(V.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===V.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Aa(a)}).join(`
`);n.setAttribute(Zr,""),n.innerHTML=o}};function Wv(t){t()}function pT(t,e){var n=typeof e=="function"?e:xl;if(t.length===0)n();else{var r=Wv;V.mutateApproach===OD&&(r=hr.requestAnimationFrame||Wv),r(function(){var i=kL(),s=jm.begin("mutate");t.map(i),s(),n()})}}var zm=!1;function mT(){zm=!0}function gd(){zm=!1}var xu=null;function Hv(t){if(Dv&&V.observeMutations){var e=t.treeCallback,n=e===void 0?xl:e,r=t.nodeCallback,i=r===void 0?xl:r,s=t.pseudoElementsCallback,o=s===void 0?xl:s,a=t.observeMutationsRoot,l=a===void 0?le:a;xu=new Dv(function(u){if(!zm){var c=fr();vs(u).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!Bv(h.addedNodes[0])&&(V.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&V.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&Bv(h.target)&&~$D.indexOf(h.attributeName))if(h.attributeName==="class"&&SL(h.target)){var f=Rc(Lm(h.target)),p=f.prefix,y=f.iconName;h.target.setAttribute(bm,p||c),y&&h.target.setAttribute(Om,y)}else AL(h.target)&&i(h.target)})}}),Rn&&xu.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function xL(){xu&&xu.disconnect()}function NL(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function bL(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Rc(Lm(t));return i.prefix||(i.prefix=fr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=uL(i.prefix,t.innerText)||Fm(i.prefix,ud(t.innerText))),!i.iconName&&V.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function OL(t){var e=vs(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return V.autoA11y&&(n?e["aria-labelledby"]="".concat(V.replacementClass,"-title-").concat(r||Go()):(e["aria-hidden"]="true",e.focusable="false")),e}function DL(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Kt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function qv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=bL(t),r=n.iconName,i=n.prefix,s=n.rest,o=OL(t),a=hd("parseNodeAttributes",{},t),l=e.styleParser?NL(t):[];return x({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Kt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var LL=Lt.styles;function gT(t){var e=V.autoReplaceSvg==="nest"?qv(t,{styleParser:!1}):qv(t);return~e.extra.classes.indexOf(JI)?Sn("generateLayersText",t,e):Sn("generateSvgReplacementMutation",t,e)}var dr=new Set;Dm.map(function(t){dr.add("fa-".concat(t))});Object.keys(Wo[ie]).map(dr.add.bind(dr));Object.keys(Wo[ge]).map(dr.add.bind(dr));dr=Ta(dr);function Kv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Rn)return Promise.resolve();var n=le.documentElement.classList,r=function(h){return n.add("".concat(Lv,"-").concat(h))},i=function(h){return n.remove("".concat(Lv,"-").concat(h))},s=V.autoFetchSvg?dr:Dm.map(function(c){return"fa-".concat(c)}).concat(Object.keys(LL));s.includes("fa")||s.push("fa");var o=[".".concat(JI,":not([").concat(Zr,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(Zr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=vs(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=jm.begin("onTree"),u=a.reduce(function(c,h){try{var f=gT(h);f&&c.push(f)}catch(p){XI||p.name==="MissingIcon"&&console.error(p)}return c},[]);return new Promise(function(c,h){Promise.all(u).then(function(f){pT(f,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(f){l(),h(f)})})}function VL(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;gT(t).then(function(n){n&&pT([n],e)})}function ML(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:fd(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:fd(i||{})),t(r,x(x({},n),{},{mask:i}))}}var FL=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Kt:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,h=n.title,f=h===void 0?null:h,p=n.titleId,y=p===void 0?null:p,v=n.classes,I=v===void 0?[]:v,m=n.attributes,d=m===void 0?{}:m,g=n.styles,w=g===void 0?{}:g;if(e){var S=e.prefix,C=e.iconName,R=e.icon;return xc(x({type:"icon"},e),function(){return ei("beforeDOMElementCreation",{iconDefinition:e,params:n}),V.autoA11y&&(f?d["aria-labelledby"]="".concat(V.replacementClass,"-title-").concat(y||Go()):(d["aria-hidden"]="true",d.focusable="false")),$m({icons:{main:dd(R),mask:l?dd(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:C,transform:x(x({},Kt),i),symbol:o,title:f,maskId:c,titleId:y,extra:{attributes:d,styles:w,classes:I}})})}},UL={mixout:function(){return{icon:ML(FL)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Kv,n.nodeCallback=VL,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?le:r,s=n.callback,o=s===void 0?function(){}:s;return Kv(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,h=r.maskId,f=r.extra;return new Promise(function(p,y){Promise.all([pd(i,a),c.iconName?pd(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var I=xm(v,2),m=I[0],d=I[1];p([n,$m({icons:{main:m,mask:d},prefix:a,iconName:i,transform:l,symbol:u,maskId:h,title:s,titleId:o,extra:f,watchable:!0})])}).catch(y)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Cc(a);l.length>0&&(i.style=l);var u;return Vm(o)&&(u=Sn("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},$L={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return xc({type:"layer"},function(){ei("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(V.cssPrefix,"-layers")].concat(Ta(s)).join(" ")},children:o}]})}}}},jL={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,h=c===void 0?{}:c;return xc({type:"counter",content:n},function(){return ei("beforeDOMElementCreation",{content:n,params:r}),wL({content:n.toString(),title:s,extra:{attributes:u,styles:h,classes:["".concat(V.cssPrefix,"-layers-counter")].concat(Ta(a))}})})}}}},zL={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?Kt:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,h=c===void 0?{}:c,f=r.styles,p=f===void 0?{}:f;return xc({type:"text",content:n},function(){return ei("beforeDOMElementCreation",{content:n,params:r}),jv({content:n,transform:x(x({},Kt),s),title:a,extra:{attributes:h,styles:p,classes:["".concat(V.cssPrefix,"-layers-text")].concat(Ta(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(GI){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return V.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,jv({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},BL=new RegExp('"',"ug"),Gv=[1105920,1112319];function WL(t){var e=t.replace(BL,""),n=rL(e,0),r=n>=Gv[0]&&n<=Gv[1],i=e.length===2?e[0]===e[1]:!1;return{value:ud(i?e[0]:e),isSecondary:r||i}}function Qv(t,e){var n="".concat(bD).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=vs(t.children),o=s.filter(function(R){return R.getAttribute(ld)===e})[0],a=hr.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(MD),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var h=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?ge:ie,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Ho[f][l[2].toLowerCase()]:FD[f][u],y=WL(h),v=y.value,I=y.isSecondary,m=l[0].startsWith("FontAwesome"),d=Fm(p,v),g=d;if(m){var w=cL(v);w.iconName&&w.prefix&&(d=w.iconName,p=w.prefix)}if(d&&!I&&(!o||o.getAttribute(bm)!==p||o.getAttribute(Om)!==g)){t.setAttribute(n,g),o&&t.removeChild(o);var S=DL(),C=S.extra;C.attributes[ld]=e,pd(d,p).then(function(R){var L=$m(x(x({},S),{},{icons:{main:R,mask:Um()},prefix:p,iconName:g,extra:C,watchable:!0})),K=le.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(K,t.firstChild):t.appendChild(K),K.outerHTML=L.map(function(z){return Aa(z)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function HL(t){return Promise.all([Qv(t,"::before"),Qv(t,"::after")])}function qL(t){return t.parentNode!==document.head&&!~DD.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(ld)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Yv(t){if(Rn)return new Promise(function(e,n){var r=vs(t.querySelectorAll("*")).filter(qL).map(HL),i=jm.begin("searchPseudoElements");mT(),Promise.all(r).then(function(){i(),gd(),e()}).catch(function(){i(),gd(),n()})})}var KL={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Yv,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?le:r;V.searchPseudoElements&&Yv(i)}}},Xv=!1,GL={mixout:function(){return{dom:{unwatch:function(){mT(),Xv=!0}}}},hooks:function(){return{bootstrap:function(){Hv(hd("mutationObserverCallbacks",{}))},noAuto:function(){xL()},watch:function(n){var r=n.observeMutationsRoot;Xv?gd():Hv(hd("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Jv=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},QL={mixout:function(){return{parse:{transform:function(n){return Jv(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Jv(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),h={transform:"".concat(l," ").concat(u," ").concat(c)},f={transform:"translate(".concat(o/2*-1," -256)")},p={outer:a,inner:h,path:f};return{tag:"g",attributes:x({},p.outer),children:[{tag:"g",attributes:x({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:x(x({},r.icon.attributes),p.path)}]}]}}}},Rh={x:0,y:0,width:"100%",height:"100%"};function Zv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function YL(t){return t.tag==="g"?t.children:[t]}var XL={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Rc(i.split(" ").map(function(o){return o.trim()})):Um();return s.prefix||(s.prefix=fr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,h=o.width,f=o.icon,p=QD({transform:l,containerWidth:h,iconWidth:u}),y={tag:"rect",attributes:x(x({},Rh),{},{fill:"white"})},v=c.children?{children:c.children.map(Zv)}:{},I={tag:"g",attributes:x({},p.inner),children:[Zv(x({tag:c.tag,attributes:x(x({},c.attributes),p.path)},v))]},m={tag:"g",attributes:x({},p.outer),children:[I]},d="mask-".concat(a||Go()),g="clip-".concat(a||Go()),w={tag:"mask",attributes:x(x({},Rh),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,m]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:YL(f)},w]};return r.push(S,{tag:"rect",attributes:x({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(d,")")},Rh)}),{children:r,attributes:i}}}},JL={provides:function(e){var n=!1;hr.matchMedia&&(n=hr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:x(x({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=x(x({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:x(x({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:x(x({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:x(x({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:x(x({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:x(x({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:x(x({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:x(x({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},ZL={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},eV=[JD,UL,$L,jL,zL,KL,GL,QL,XL,JL,ZL];dL(eV,{mixoutsTo:_t});_t.noAuto;_t.config;_t.library;_t.dom;var yd=_t.parse;_t.findIconDefinition;_t.toHtml;var tV=_t.icon;_t.layer;_t.text;_t.counter;var yT={exports:{}},nV="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",rV=nV,iV=rV;function vT(){}function _T(){}_T.resetWarningCache=vT;var sV=function(){function t(r,i,s,o,a,l){if(l!==iV){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:_T,resetWarningCache:vT};return n.PropTypes=n,n};yT.exports=sV();var oV=yT.exports;const q=i_(oV);function e_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Hn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?e_(Object(n),!0).forEach(function(r){ki(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):e_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Nu(t){"@babel/helpers - typeof";return Nu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Nu(t)}function ki(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function aV(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function lV(t,e){if(t==null)return{};var n=aV(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function vd(t){return uV(t)||cV(t)||hV(t)||fV()}function uV(t){if(Array.isArray(t))return _d(t)}function cV(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function hV(t,e){if(t){if(typeof t=="string")return _d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _d(t,e)}}function _d(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function fV(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dV(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,h=t.pulse,f=t.fixedWidth,p=t.inverse,y=t.border,v=t.listItem,I=t.flip,m=t.size,d=t.rotation,g=t.pull,w=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":h,"fa-fw":f,"fa-inverse":p,"fa-border":y,"fa-li":v,"fa-flip":I===!0,"fa-flip-horizontal":I==="horizontal"||I==="both","fa-flip-vertical":I==="vertical"||I==="both"},ki(e,"fa-".concat(m),typeof m<"u"&&m!==null),ki(e,"fa-rotate-".concat(d),typeof d<"u"&&d!==null&&d!==0),ki(e,"fa-pull-".concat(g),typeof g<"u"&&g!==null),ki(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(w).map(function(S){return w[S]?S:null}).filter(function(S){return S})}function pV(t){return t=t-0,t===t}function wT(t){return pV(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var mV=["style"];function gV(t){return t.charAt(0).toUpperCase()+t.slice(1)}function yV(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=wT(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[gV(i)]=s:e[i]=s,e},{})}function ET(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ET(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=yV(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[wT(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=lV(n,mV);return i.attrs.style=Hn(Hn({},i.attrs.style),o),t.apply(void 0,[e.tag,Hn(Hn({},i.attrs),a)].concat(vd(r)))}var IT=!1;try{IT=!0}catch{}function vV(){if(!IT&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function t_(t){if(t&&Nu(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(yd.icon)return yd.icon(t);if(t===null)return null;if(t&&Nu(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function xh(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ki({},t,e):{}}var ka=Ou.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=t_(n),c=xh("classes",[].concat(vd(dV(t)),vd(s.split(" ")))),h=xh("transform",typeof t.transform=="string"?yd.transform(t.transform):t.transform),f=xh("mask",t_(r)),p=tV(u,Hn(Hn(Hn(Hn({},c),h),f),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!p)return vV("Could not find icon",u),null;var y=p.abstract,v={ref:e};return Object.keys(t).forEach(function(I){ka.defaultProps.hasOwnProperty(I)||(v[I]=t[I])}),_V(y[0],v)});ka.displayName="FontAwesomeIcon";ka.propTypes={beat:q.bool,border:q.bool,beatFade:q.bool,bounce:q.bool,className:q.string,fade:q.bool,flash:q.bool,mask:q.oneOfType([q.object,q.array,q.string]),maskId:q.string,fixedWidth:q.bool,inverse:q.bool,flip:q.oneOf([!0,!1,"horizontal","vertical","both"]),icon:q.oneOfType([q.object,q.array,q.string]),listItem:q.bool,pull:q.oneOf(["right","left"]),pulse:q.bool,rotation:q.oneOf([0,90,180,270]),shake:q.bool,size:q.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:q.bool,spinPulse:q.bool,spinReverse:q.bool,symbol:q.oneOfType([q.bool,q.string]),title:q.string,titleId:q.string,transform:q.oneOfType([q.string,q.object]),swapOpacity:q.bool};ka.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var _V=ET.bind(null,Ou.createElement);const wV=({nameIcon:t,moreProps:e,...n})=>_.jsx(ar,{...n,className:`${e} bg-white absolute top-0 right-0 text-cyan-500 active:text-red-500 text-lg`,children:_.jsx(ka,{icon:t})}),TT=({target:t})=>{const{clearCart:e}=E.useContext(Pn);return _.jsx(wV,{nameIcon:"fa-solid fa-trash",onClick:()=>e(t)})},EV=({props:t})=>{const{id:e,name:n,imageUrl:r,price:i,quntity:s}=t,{removeItemFromCart:o}=E.useContext(Pn),a=()=>{o(t)};return _.jsxs("div",{id:e,className:"w-full flex flex-wrap justify-evenly items-center gap-1 font-sans relative",children:[_.jsx(TT,{target:t}),_.jsx("img",{src:r,alt:"sdf",className:"w-3/5 "}),_.jsxs("div",{className:"w-full flex flex-col justify-center items-center  ",children:[_.jsx("h1",{className:"font-medium break-before ",children:n}),_.jsxs("h2",{className:"text-base font- w-fit",children:[s,"* $",i]})]}),_.jsx(ar,{type:"button",buttonType:"google",moreProps:" px-4 py-1 font-medium border-none hover:bg-red-500 ",onClick:a,children:"remove"})]})},IV=()=>{const{items:t}=E.useContext(Pn),e=yp(),n=()=>{e("/cheackout")};return _.jsxs("div",{className:" cart-dropdown-container bg-white w-52 h-96 border border-black absolute z-50 -right-4 top-16",children:[_.jsx("div",{className:"cart-items h-4/5 overflow-auto mb-3 flex flex-col gap-5 p-2 ",children:t.length>0?t.map((r,i)=>_.jsx(EV,{props:r},i)):_.jsx("h1",{className:"text-center font-extrabold uppercase text-xl m-auto text-cyan-600",children:"it is empaty"})}),_.jsx(ar,{onClick:n,type:"button",moreProps:"m-auto block ",children:"go to cheakout"})]})},TV=()=>{const{currentUser:t}=E.useContext(Rm),{isCartOpen:e}=E.useContext(Pn);return _.jsxs(_.Fragment,{children:[_.jsxs("div",{className:"navigation p-5 flex justify-between items-center relative",children:[_.jsx("div",{children:_.jsx(On,{to:"/",children:_.jsx("div",{className:"w-fit",children:"logo"})})}),_.jsxs("div",{className:"navigation-opations  flex justify-evenly items-center gap-6 text-lg font-bold ",children:[_.jsx("div",{children:_.jsx(On,{to:"/test",children:"test"})}),_.jsx("div",{children:_.jsx(On,{to:"/",children:"HOME"})}),_.jsx("div",{children:_.jsx(On,{to:"/shop",children:"SHOP"})}),_.jsx("div",{children:_.jsx(On,{to:"/cheackout",children:"CHEAKOUT"})}),_.jsx("div",{children:_.jsx(On,{to:"/about",children:"ABOUT"})}),_.jsx("div",{children:t?_.jsx("button",{type:"button",onClick:pD,className:"nav-link uppercase",children:"sing out"}):_.jsx(On,{to:"/auth",className:"uppercase",children:"Sign In"})}),_.jsx("div",{children:_.jsx(ID,{})})]}),e&&_.jsx(IV,{})]}),_.jsx(jk,{})]})},SV=()=>{const{currentUser:t}=E.useContext(Rm);return _.jsxs("div",{children:[_.jsx("h1",{className:"text-5xl m-auto font-bold w-fit",children:"this page Home"}),_.jsx("button",{type:"button",className:"block  active:bg-green-600 hover:bg-white rounded-xl bg-black transition-all text-3xl text-red-500 hover:text-black text bg-center px-2 py-3 m-auto my-7",children:"decrees"}),_.jsx("h2",{className:"text-5xl m-auto font-bold w-fit",children:t&&t.email})]})},Bm=E.createContext({categoryMap:{}}),AV=({children:t})=>{const[e,n]=E.useState({});E.useEffect(()=>{(async()=>{const s=await hD();n(s)})()},[]);const r={categoryMap:e};return _.jsx(Bm.Provider,{value:r,children:t})},ST=({props:t})=>{const{id:e,name:n,imageUrl:r,price:i}=t,{addItemToCart:s}=E.useContext(Pn),o=()=>{s(t)};return _.jsxs("div",{id:e,className:"group relative min-h-[300px] flex flex-col items-center justify-center gap-4 border border-gray-300 my-2 py-2 px-3 rounded-sm hover:border-black hover:bg-gray-200 transition-all",children:[_.jsx("div",{className:" h-4/6 overflow-hidden group-hover:scale-105 transition-all",children:_.jsx("img",{src:r,alt:n,className:""})}),_.jsx("span",{className:"name text-lg font-bold ",children:n}),_.jsx("span",{className:"price text-lg font-bold ",children:i}),_.jsx(ar,{onClick:o,type:"button",buttonType:"inverted",moreProps:"uppercase w-3/5 font-bold absolute bottom-1/3 left-1/2 -translate-x-1/2 - hidden group-hover:block",children:"add to cart"})]})},kV=({title:t,products:e})=>_.jsxs("div",{className:"category-preview-container",children:[_.jsx("h2",{className:"mt-3 text-2xl font-extrabold",children:_.jsx(On,{className:t,to:t,children:t.toUpperCase()})}),_.jsx("div",{className:"preview grid grid-cols-4 max-sm:grid-cols-1 gap-x-2 gap-y-1 ",children:e.filter((n,r)=>r<4).map(n=>_.jsx(ST,{props:n},n.id))})]}),CV=()=>{const{categoryMap:t}=E.useContext(Bm);return Object.keys(t).map(n=>{const r=t[n];return _.jsx("div",{id:n,children:_.jsx("div",{children:_.jsx(kV,{title:n,products:r},n)})},n)})},PV=()=>{const{category:t}=Rk();console.log(t);const{categoryMap:e}=E.useContext(Bm),[n,r]=E.useState(e[t]);return E.useEffect(()=>{r(e[t])},[t,e]),_.jsxs(_.Fragment,{children:[_.jsx("h1",{className:"text-3xl font-extrabold text-center uppercase my-3 mb-4",children:t}),_.jsx("div",{className:"preview grid grid-cols-4 max-sm:grid-cols-1 gap-x-2 gap-y-1 ",children:n&&n.map(i=>_.jsx(ST,{props:i},i.id))})]})},RV=()=>{const t=P1();return console.error(t),_.jsxs("div",{id:"error-page",className:"m-auto mt-48 text-2xl font-bold w-fit flex flex-col justify-center items-center",children:[_.jsx("h1",{className:"text-5xl",children:t.status}),_.jsx("p",{children:"Sorry, an unexpected error has occurred."}),_.jsx("p",{children:_.jsx("i",{children:t.statusText||t.message})})]})},xV=()=>_.jsxs(R1,{children:[_.jsx(rn,{index:!0,element:_.jsx(CV,{}),Error:_.jsx(RV,{})}),_.jsx(rn,{path:":category",element:_.jsx(PV,{})})]}),Ci=({label:t,inputOption:e})=>_.jsxs("div",{className:"relative my-10  px-5 w-96 max-md:w-80",children:[_.jsx("input",{...e,title:t,className:"peer border-b  bg-transparent  outline-none  text-gray-600 text-lg block w-full rounded-none invalid:text-red-700 "}),_.jsx("label",{className:`
        ${e.value&&"shrinkLabel"}
        peer-focus-within:shrinkLabel
     -z-10  absolute  duration-200 ease-in top-1 left-5`,htmlFor:e.name,children:t})]}),n_={displayName:"",email:"",password:"",confirmPassword:""},NV=()=>{const[t,e]=E.useState(n_),{displayName:n,email:r,password:i,confirmPassword:s}=t,o=()=>{e(n_)},a=async u=>{if(u.preventDefault(),i!==s){alert("the password is wrong ");return}try{const{user:c}=await fD(r,i);await BI(c,{displayName:n}),o()}catch(c){c.code==="auth/email-already-in-use"?alert("this email is already used"):console.log("the error ",c)}},l=u=>{const{name:c,value:h}=u.target;e({...t,[c]:h})};return _.jsx("div",{children:_.jsxs("form",{onSubmit:a,className:"p-8 blcok w-full",children:[_.jsx("h2",{className:" text-xl font-bold ",children:"Sign-Up Right Now"}),_.jsx("span",{children:"sign-up with your email"}),_.jsx(Ci,{label:"Display Name",inputOption:{autoFocus:!0,type:"text",required:!0,onChange:l,name:"displayName",value:n}}),_.jsx(Ci,{label:"Email",inputOption:{type:"email",required:!0,onChange:l,name:"email",value:r}}),_.jsx(Ci,{label:"Password",inputOption:{type:"password",required:!0,onChange:l,name:"password",value:i}}),_.jsx(Ci,{label:"Confirm Password",inputOption:{type:"password",required:!0,onChange:l,name:"confirmPassword",value:s}}),_.jsx(ar,{type:"submit",children:"Sign Up"})]})})},r_={email:"",password:""},bV=()=>{const[t,e]=E.useState(r_),{email:n,password:r}=t,i=async()=>{await cD()},s=()=>{e(r_)},o=async l=>{l.preventDefault();try{const{user:u}=await dD(n,r);s()}catch(u){console.log(u),u.code==="auth/invalid-login-credentials"&&alert("the password is wrong")}},a=l=>{const{name:u,value:c}=l.target;e({...t,[u]:c})};return _.jsx("div",{children:_.jsxs("form",{onSubmit:o,className:"p-8 blcok w-full ",children:[_.jsx("h2",{className:" text-xl font-bold ",children:"Already have an account"}),_.jsx("span",{children:"sign-in with your email"}),_.jsx(Ci,{label:"Email",inputOption:{type:"email",required:!0,onChange:a,name:"email",value:n}}),_.jsx(Ci,{label:"Password",inputOption:{type:"password",required:!0,onChange:a,name:"password",value:r}}),_.jsxs("div",{className:"flex justify-start items-center gap-3",children:[_.jsx(ar,{type:"submit",children:"Sign In"}),_.jsx(ar,{type:"button",onClick:i,buttonType:"google",children:"Sign-In with Google"})]})]})})},OV=()=>_.jsxs("div",{className:"flex justify-between items-center m-auto w-[900px] max-md:flex-col",children:[_.jsx(bV,{}),_.jsx(NV,{})]}),DV=({props:t})=>{const{addItemToCart:e,removeItemFromCart:n}=E.useContext(Pn),{id:r,name:i,imageUrl:s,price:o,quntity:a}=t,l=()=>{n(t)},u=()=>{e(t)};return _.jsxs("div",{id:r,className:"relative h-40 w-full grid grid-cols-4 grid-rows-1 items-center justify-items-center  p-3 my-4 border-t-2 border-gray-400  text-xl ",children:[_.jsx("img",{src:s,alt:i,className:"h-full "}),_.jsx("h1",{className:"font-extrabold font-serif",children:i}),_.jsxs("div",{className:" h-fit w-full flex items-center justify-center gap-2",children:[_.jsx("span",{onClick:u,className:"cursor-pointer",children:"+"}),_.jsxs("h2",{children:[" ",a," "]}),_.jsxs("span",{onClick:l,className:"cursor-pointer",children:["-"," "]})]}),_.jsxs("h2",{children:[" ",o," "]}),_.jsx(TT,{target:t,moreProps:"static"})]})},LV=()=>{const{items:t,totalPrice:e,cartCounter:n}=E.useContext(Pn),r=["product","name","quntity","price"];return _.jsxs("div",{className:"border-b-2 border-gray-400",children:[_.jsx("div",{className:"flex justify-evenly items-center gap-12 px-2 text-lg font-semibold",children:n>0&&r.map((i,s)=>_.jsx("h1",{children:i},s))}),t.map(i=>_.jsx(DV,{props:i},i.id)),e!=0&&_.jsxs("h1",{className:"text-3xl font-extrabold text-right uppercase ",children:["total : $",e]})]})};const VV=()=>_.jsx(_.Fragment,{children:_.jsx(R1,{children:_.jsxs(rn,{path:"/",element:_.jsx(TV,{}),children:[_.jsx(rn,{index:!0,element:_.jsx(nC,{})}),_.jsx(rn,{path:"shop/*",element:_.jsx(xV,{})}),_.jsx(rn,{path:"auth",element:_.jsx(OV,{})}),_.jsx(rn,{path:"cheackout",element:_.jsx(LV,{})}),_.jsx(rn,{path:"about",element:_.jsx(SV,{})})]})})});Nh.createRoot(document.getElementById("root")).render(_.jsx(Ou.StrictMode,{children:_.jsx(Gk,{children:_.jsx(gD,{children:_.jsx(AV,{children:_.jsx(wD,{children:_.jsx(VV,{})})})})})}));
