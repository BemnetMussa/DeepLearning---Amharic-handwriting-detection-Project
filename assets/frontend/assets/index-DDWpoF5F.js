(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();function G_(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var vc={exports:{}},ct={};var Wh;function V_(){if(Wh)return ct;Wh=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.iterator;function y(U){return U===null||typeof U!="object"?null:(U=x&&U[x]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,E={};function _(U,G,Y){this.props=U,this.context=G,this.refs=E,this.updater=Y||S}_.prototype.isReactComponent={},_.prototype.setState=function(U,G){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,G,"setState")},_.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function g(){}g.prototype=_.prototype;function L(U,G,Y){this.props=U,this.context=G,this.refs=E,this.updater=Y||S}var A=L.prototype=new g;A.constructor=L,w(A,_.prototype),A.isPureReactComponent=!0;var b=Array.isArray,k=Object.prototype.hasOwnProperty,F={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function le(U,G,Y){var re,fe={},ye=null,Me=null;if(G!=null)for(re in G.ref!==void 0&&(Me=G.ref),G.key!==void 0&&(ye=""+G.key),G)k.call(G,re)&&!I.hasOwnProperty(re)&&(fe[re]=G[re]);var Re=arguments.length-2;if(Re===1)fe.children=Y;else if(1<Re){for(var De=Array(Re),Oe=0;Oe<Re;Oe++)De[Oe]=arguments[Oe+2];fe.children=De}if(U&&U.defaultProps)for(re in Re=U.defaultProps,Re)fe[re]===void 0&&(fe[re]=Re[re]);return{$$typeof:o,type:U,key:ye,ref:Me,props:fe,_owner:F.current}}function R(U,G){return{$$typeof:o,type:U.type,key:G,ref:U.ref,props:U.props,_owner:U._owner}}function D(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function oe(U){var G={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Y){return G[Y]})}var ue=/\/+/g;function ve(U,G){return typeof U=="object"&&U!==null&&U.key!=null?oe(""+U.key):G.toString(36)}function H(U,G,Y,re,fe){var ye=typeof U;(ye==="undefined"||ye==="boolean")&&(U=null);var Me=!1;if(U===null)Me=!0;else switch(ye){case"string":case"number":Me=!0;break;case"object":switch(U.$$typeof){case o:case e:Me=!0}}if(Me)return Me=U,fe=fe(Me),U=re===""?"."+ve(Me,0):re,b(fe)?(Y="",U!=null&&(Y=U.replace(ue,"$&/")+"/"),H(fe,G,Y,"",function(Oe){return Oe})):fe!=null&&(D(fe)&&(fe=R(fe,Y+(!fe.key||Me&&Me.key===fe.key?"":(""+fe.key).replace(ue,"$&/")+"/")+U)),G.push(fe)),1;if(Me=0,re=re===""?".":re+":",b(U))for(var Re=0;Re<U.length;Re++){ye=U[Re];var De=re+ve(ye,Re);Me+=H(ye,G,Y,De,fe)}else if(De=y(U),typeof De=="function")for(U=De.call(U),Re=0;!(ye=U.next()).done;)ye=ye.value,De=re+ve(ye,Re++),Me+=H(ye,G,Y,De,fe);else if(ye==="object")throw G=String(U),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return Me}function te(U,G,Y){if(U==null)return U;var re=[],fe=0;return H(U,re,"","",function(ye){return G.call(Y,ye,fe++)}),re}function se(U){if(U._status===-1){var G=U._result;G=G(),G.then(function(Y){(U._status===0||U._status===-1)&&(U._status=1,U._result=Y)},function(Y){(U._status===0||U._status===-1)&&(U._status=2,U._result=Y)}),U._status===-1&&(U._status=0,U._result=G)}if(U._status===1)return U._result.default;throw U._result}var ae={current:null},V={transition:null},$={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:V,ReactCurrentOwner:F};function W(){throw Error("act(...) is not supported in production builds of React.")}return ct.Children={map:te,forEach:function(U,G,Y){te(U,function(){G.apply(this,arguments)},Y)},count:function(U){var G=0;return te(U,function(){G++}),G},toArray:function(U){return te(U,function(G){return G})||[]},only:function(U){if(!D(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},ct.Component=_,ct.Fragment=n,ct.Profiler=a,ct.PureComponent=L,ct.StrictMode=r,ct.Suspense=p,ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,ct.act=W,ct.cloneElement=function(U,G,Y){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var re=w({},U.props),fe=U.key,ye=U.ref,Me=U._owner;if(G!=null){if(G.ref!==void 0&&(ye=G.ref,Me=F.current),G.key!==void 0&&(fe=""+G.key),U.type&&U.type.defaultProps)var Re=U.type.defaultProps;for(De in G)k.call(G,De)&&!I.hasOwnProperty(De)&&(re[De]=G[De]===void 0&&Re!==void 0?Re[De]:G[De])}var De=arguments.length-2;if(De===1)re.children=Y;else if(1<De){Re=Array(De);for(var Oe=0;Oe<De;Oe++)Re[Oe]=arguments[Oe+2];re.children=Re}return{$$typeof:o,type:U.type,key:fe,ref:ye,props:re,_owner:Me}},ct.createContext=function(U){return U={$$typeof:d,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:u,_context:U},U.Consumer=U},ct.createElement=le,ct.createFactory=function(U){var G=le.bind(null,U);return G.type=U,G},ct.createRef=function(){return{current:null}},ct.forwardRef=function(U){return{$$typeof:f,render:U}},ct.isValidElement=D,ct.lazy=function(U){return{$$typeof:v,_payload:{_status:-1,_result:U},_init:se}},ct.memo=function(U,G){return{$$typeof:m,type:U,compare:G===void 0?null:G}},ct.startTransition=function(U){var G=V.transition;V.transition={};try{U()}finally{V.transition=G}},ct.unstable_act=W,ct.useCallback=function(U,G){return ae.current.useCallback(U,G)},ct.useContext=function(U){return ae.current.useContext(U)},ct.useDebugValue=function(){},ct.useDeferredValue=function(U){return ae.current.useDeferredValue(U)},ct.useEffect=function(U,G){return ae.current.useEffect(U,G)},ct.useId=function(){return ae.current.useId()},ct.useImperativeHandle=function(U,G,Y){return ae.current.useImperativeHandle(U,G,Y)},ct.useInsertionEffect=function(U,G){return ae.current.useInsertionEffect(U,G)},ct.useLayoutEffect=function(U,G){return ae.current.useLayoutEffect(U,G)},ct.useMemo=function(U,G){return ae.current.useMemo(U,G)},ct.useReducer=function(U,G,Y){return ae.current.useReducer(U,G,Y)},ct.useRef=function(U){return ae.current.useRef(U)},ct.useState=function(U){return ae.current.useState(U)},ct.useSyncExternalStore=function(U,G,Y){return ae.current.useSyncExternalStore(U,G,Y)},ct.useTransition=function(){return ae.current.useTransition()},ct.version="18.3.1",ct}var Xh;function wm(){return Xh||(Xh=1,vc.exports=V_()),vc.exports}var ai=wm();const li=G_(ai);var qa={},xc={exports:{}},Cn={},yc={exports:{}},Sc={};var Yh;function W_(){return Yh||(Yh=1,(function(o){function e(V,$){var W=V.length;V.push($);e:for(;0<W;){var U=W-1>>>1,G=V[U];if(0<a(G,$))V[U]=$,V[W]=G,W=U;else break e}}function n(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var $=V[0],W=V.pop();if(W!==$){V[0]=W;e:for(var U=0,G=V.length,Y=G>>>1;U<Y;){var re=2*(U+1)-1,fe=V[re],ye=re+1,Me=V[ye];if(0>a(fe,W))ye<G&&0>a(Me,fe)?(V[U]=Me,V[ye]=W,U=ye):(V[U]=fe,V[re]=W,U=re);else if(ye<G&&0>a(Me,W))V[U]=Me,V[ye]=W,U=ye;else break e}}return $}function a(V,$){var W=V.sortIndex-$.sortIndex;return W!==0?W:V.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,f=d.now();o.unstable_now=function(){return d.now()-f}}var p=[],m=[],v=1,x=null,y=3,S=!1,w=!1,E=!1,_=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(V){for(var $=n(m);$!==null;){if($.callback===null)r(m);else if($.startTime<=V)r(m),$.sortIndex=$.expirationTime,e(p,$);else break;$=n(m)}}function b(V){if(E=!1,A(V),!w)if(n(p)!==null)w=!0,se(k);else{var $=n(m);$!==null&&ae(b,$.startTime-V)}}function k(V,$){w=!1,E&&(E=!1,g(le),le=-1),S=!0;var W=y;try{for(A($),x=n(p);x!==null&&(!(x.expirationTime>$)||V&&!oe());){var U=x.callback;if(typeof U=="function"){x.callback=null,y=x.priorityLevel;var G=U(x.expirationTime<=$);$=o.unstable_now(),typeof G=="function"?x.callback=G:x===n(p)&&r(p),A($)}else r(p);x=n(p)}if(x!==null)var Y=!0;else{var re=n(m);re!==null&&ae(b,re.startTime-$),Y=!1}return Y}finally{x=null,y=W,S=!1}}var F=!1,I=null,le=-1,R=5,D=-1;function oe(){return!(o.unstable_now()-D<R)}function ue(){if(I!==null){var V=o.unstable_now();D=V;var $=!0;try{$=I(!0,V)}finally{$?ve():(F=!1,I=null)}}else F=!1}var ve;if(typeof L=="function")ve=function(){L(ue)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,te=H.port2;H.port1.onmessage=ue,ve=function(){te.postMessage(null)}}else ve=function(){_(ue,0)};function se(V){I=V,F||(F=!0,ve())}function ae(V,$){le=_(function(){V(o.unstable_now())},$)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(V){V.callback=null},o.unstable_continueExecution=function(){w||S||(w=!0,se(k))},o.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<V?Math.floor(1e3/V):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_getFirstCallbackNode=function(){return n(p)},o.unstable_next=function(V){switch(y){case 1:case 2:case 3:var $=3;break;default:$=y}var W=y;y=$;try{return V()}finally{y=W}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(V,$){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var W=y;y=V;try{return $()}finally{y=W}},o.unstable_scheduleCallback=function(V,$,W){var U=o.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?U+W:U):W=U,V){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=W+G,V={id:v++,callback:$,priorityLevel:V,startTime:W,expirationTime:G,sortIndex:-1},W>U?(V.sortIndex=W,e(m,V),n(p)===null&&V===n(m)&&(E?(g(le),le=-1):E=!0,ae(b,W-U))):(V.sortIndex=G,e(p,V),w||S||(w=!0,se(k))),V},o.unstable_shouldYield=oe,o.unstable_wrapCallback=function(V){var $=y;return function(){var W=y;y=$;try{return V.apply(this,arguments)}finally{y=W}}}})(Sc)),Sc}var qh;function X_(){return qh||(qh=1,yc.exports=W_()),yc.exports}var jh;function Y_(){if(jh)return Cn;jh=1;var o=wm(),e=X_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,s=1;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},x={};function y(t){return p.call(x,t)?!0:p.call(v,t)?!1:m.test(t)?x[t]=!0:(v[t]=!0,!1)}function S(t,i,s,l){if(s!==null&&s.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:s!==null?!s.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,i,s,l){if(i===null||typeof i>"u"||S(t,i,s,l))return!0;if(l)return!1;if(s!==null)switch(s.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function E(t,i,s,l,c,h,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=s,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=M}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_[t]=new E(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];_[i]=new E(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){_[t]=new E(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_[t]=new E(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_[t]=new E(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){_[t]=new E(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){_[t]=new E(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){_[t]=new E(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){_[t]=new E(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function L(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,L);_[i]=new E(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,L);_[i]=new E(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,L);_[i]=new E(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){_[t]=new E(t,1,!1,t.toLowerCase(),null,!1,!1)}),_.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){_[t]=new E(t,1,!1,t.toLowerCase(),null,!0,!0)});function A(t,i,s,l){var c=_.hasOwnProperty(i)?_[i]:null;(c!==null?c.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,s,c,l)&&(s=null),l||c===null?y(i)&&(s===null?t.removeAttribute(i):t.setAttribute(i,""+s)):c.mustUseProperty?t[c.propertyName]=s===null?c.type===3?!1:"":s:(i=c.attributeName,l=c.attributeNamespace,s===null?t.removeAttribute(i):(c=c.type,s=c===3||c===4&&s===!0?"":""+s,l?t.setAttributeNS(l,i,s):t.setAttribute(i,s))))}var b=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),F=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),le=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),oe=Symbol.for("react.context"),ue=Symbol.for("react.forward_ref"),ve=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),ae=Symbol.for("react.offscreen"),V=Symbol.iterator;function $(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var W=Object.assign,U;function G(t){if(U===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+t}var Y=!1;function re(t,i){if(!t||Y)return"";Y=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(Q){var l=Q}Reflect.construct(t,[],i)}else{try{i.call()}catch(Q){l=Q}t.call(i.prototype)}else{try{throw Error()}catch(Q){l=Q}t()}}catch(Q){if(Q&&l&&typeof Q.stack=="string"){for(var c=Q.stack.split(`
`),h=l.stack.split(`
`),M=c.length-1,N=h.length-1;1<=M&&0<=N&&c[M]!==h[N];)N--;for(;1<=M&&0<=N;M--,N--)if(c[M]!==h[N]){if(M!==1||N!==1)do if(M--,N--,0>N||c[M]!==h[N]){var O=`
`+c[M].replace(" at new "," at ");return t.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",t.displayName)),O}while(1<=M&&0<=N);break}}}finally{Y=!1,Error.prepareStackTrace=s}return(t=t?t.displayName||t.name:"")?G(t):""}function fe(t){switch(t.tag){case 5:return G(t.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return t=re(t.type,!1),t;case 11:return t=re(t.type.render,!1),t;case 1:return t=re(t.type,!0),t;default:return""}}function ye(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case I:return"Fragment";case F:return"Portal";case R:return"Profiler";case le:return"StrictMode";case ve:return"Suspense";case H:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case oe:return(t.displayName||"Context")+".Consumer";case D:return(t._context.displayName||"Context")+".Provider";case ue:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case te:return i=t.displayName||null,i!==null?i:ye(t.type)||"Memo";case se:i=t._payload,t=t._init;try{return ye(t(i))}catch{}}return null}function Me(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(i);case 8:return i===le?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Re(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function De(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Oe(t){var i=De(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,h=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(M){l=""+M,h.call(this,M)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function ut(t){t._valueTracker||(t._valueTracker=Oe(t))}function J(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=De(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function Gt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ve(t,i){var s=i.checked;return W({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??t._wrapperState.initialChecked})}function Je(t,i){var s=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;s=Re(i.value!=null?i.value:s),t._wrapperState={initialChecked:l,initialValue:s,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Be(t,i){i=i.checked,i!=null&&A(t,"checked",i,!1)}function Tt(t,i){Be(t,i);var s=Re(i.value),l=i.type;if(s!=null)l==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+s):t.value!==""+s&&(t.value=""+s);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?P(t,i.type,s):i.hasOwnProperty("defaultValue")&&P(t,i.type,Re(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function nt(t,i,s){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,s||i===t.value||(t.value=i),t.defaultValue=i}s=t.name,s!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,s!==""&&(t.name=s)}function P(t,i,s){(i!=="number"||Gt(t.ownerDocument)!==t)&&(s==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+s&&(t.defaultValue=""+s))}var T=Array.isArray;function Z(t,i,s,l){if(t=t.options,i){i={};for(var c=0;c<s.length;c++)i["$"+s[c]]=!0;for(s=0;s<t.length;s++)c=i.hasOwnProperty("$"+t[s].value),t[s].selected!==c&&(t[s].selected=c),c&&l&&(t[s].defaultSelected=!0)}else{for(s=""+Re(s),i=null,c=0;c<t.length;c++){if(t[c].value===s){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function ge(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return W({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function pe(t,i){var s=i.value;if(s==null){if(s=i.children,i=i.defaultValue,s!=null){if(i!=null)throw Error(n(92));if(T(s)){if(1<s.length)throw Error(n(93));s=s[0]}i=s}i==null&&(i=""),s=i}t._wrapperState={initialValue:Re(s)}}function _e(t,i){var s=Re(i.value),l=Re(i.defaultValue);s!=null&&(s=""+s,s!==t.value&&(t.value=s),i.defaultValue==null&&t.defaultValue!==s&&(t.defaultValue=s)),l!=null&&(t.defaultValue=""+l)}function ke(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function Ae(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ue(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?Ae(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var We,it=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,s,l,c){MSApp.execUnsafeLocalFunction(function(){return t(i,s,l,c)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(We=We||document.createElement("div"),We.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=We.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function he(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var pt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lt=["Webkit","ms","Moz","O"];Object.keys(pt).forEach(function(t){lt.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),pt[i]=pt[t]})});function Ze(t,i,s){return i==null||typeof i=="boolean"||i===""?"":s||typeof i!="number"||i===0||pt.hasOwnProperty(t)&&pt[t]?(""+i).trim():i+"px"}function Ge(t,i){t=t.style;for(var s in i)if(i.hasOwnProperty(s)){var l=s.indexOf("--")===0,c=Ze(s,i[s],l);s==="float"&&(s="cssFloat"),l?t.setProperty(s,c):t[s]=c}}var Ie=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function et(t,i){if(i){if(Ie[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function gt(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var At=null;function rt(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Se=null,z=null,Ee=null;function we(t){if(t=po(t)){if(typeof Se!="function")throw Error(n(280));var i=t.stateNode;i&&(i=la(i),Se(t.stateNode,t.type,i))}}function Ke(t){z?Ee?Ee.push(t):Ee=[t]:z=t}function Xe(){if(z){var t=z,i=Ee;if(Ee=z=null,we(t),i)for(t=0;t<i.length;t++)we(i[t])}}function yt(t,i){return t(i)}function St(){}var Ft=!1;function $t(t,i,s){if(Ft)return t(i,s);Ft=!0;try{return yt(t,i,s)}finally{Ft=!1,(z!==null||Ee!==null)&&(St(),Xe())}}function vt(t,i){var s=t.stateNode;if(s===null)return null;var l=la(s);if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(n(231,i,typeof s));return s}var Xt=!1;if(f)try{var an={};Object.defineProperty(an,"passive",{get:function(){Xt=!0}}),window.addEventListener("test",an,an),window.removeEventListener("test",an,an)}catch{Xt=!1}function Ho(t,i,s,l,c,h,M,N,O){var Q=Array.prototype.slice.call(arguments,3);try{i.apply(s,Q)}catch(de){this.onError(de)}}var yr=!1,xi=null,Sr=!1,ki=null,Go={onError:function(t){yr=!0,xi=t}};function Vo(t,i,s,l,c,h,M,N,O){yr=!1,xi=null,Ho.apply(Go,arguments)}function kl(t,i,s,l,c,h,M,N,O){if(Vo.apply(this,arguments),yr){if(yr){var Q=xi;yr=!1,xi=null}else throw Error(n(198));Sr||(Sr=!0,ki=Q)}}function yi(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function Wo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function C(t){if(yi(t)!==t)throw Error(n(188))}function q(t){var i=t.alternate;if(!i){if(i=yi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var s=t,l=i;;){var c=s.return;if(c===null)break;var h=c.alternate;if(h===null){if(l=c.return,l!==null){s=l;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===s)return C(c),t;if(h===l)return C(c),i;h=h.sibling}throw Error(n(188))}if(s.return!==l.return)s=c,l=h;else{for(var M=!1,N=c.child;N;){if(N===s){M=!0,s=c,l=h;break}if(N===l){M=!0,l=c,s=h;break}N=N.sibling}if(!M){for(N=h.child;N;){if(N===s){M=!0,s=h,l=c;break}if(N===l){M=!0,l=h,s=c;break}N=N.sibling}if(!M)throw Error(n(189))}}if(s.alternate!==l)throw Error(n(190))}if(s.tag!==3)throw Error(n(188));return s.stateNode.current===s?t:i}function ne(t){return t=q(t),t!==null?ie(t):null}function ie(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=ie(t);if(i!==null)return i;t=t.sibling}return null}var ee=e.unstable_scheduleCallback,Ce=e.unstable_cancelCallback,He=e.unstable_shouldYield,je=e.unstable_requestPaint,Le=e.unstable_now,st=e.unstable_getCurrentPriorityLevel,Qe=e.unstable_ImmediatePriority,tt=e.unstable_UserBlockingPriority,Rt=e.unstable_NormalPriority,pn=e.unstable_LowPriority,Bt=e.unstable_IdlePriority,Sn=null,mt=null;function ot(t){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Sn,t,void 0,(t.current.flags&128)===128)}catch{}}var mn=Math.clz32?Math.clz32:Xo,Dt=Math.log,Si=Math.LN2;function Xo(t){return t>>>=0,t===0?32:31-(Dt(t)/Si|0)|0}var hi=64,Hi=4194304;function Ot(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function kn(t,i){var s=t.pendingLanes;if(s===0)return 0;var l=0,c=t.suspendedLanes,h=t.pingedLanes,M=s&268435455;if(M!==0){var N=M&~c;N!==0?l=Ot(N):(h&=M,h!==0&&(l=Ot(h)))}else M=s&~c,M!==0?l=Ot(M):h!==0&&(l=Ot(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&c)===0&&(c=l&-l,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=s&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)s=31-mn(i),c=1<<s,l|=t[s],i&=~c;return l}function Ks(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mn(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var M=31-mn(h),N=1<<M,O=c[M];O===-1?((N&s)===0||(N&l)!==0)&&(c[M]=Ks(N,i)):O<=i&&(t.expiredLanes|=N),h&=~N}}function Mr(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Yo(){var t=hi;return hi<<=1,(hi&4194240)===0&&(hi=64),t}function Kr(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function $s(t,i,s){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-mn(i),t[i]=s}function ug(t,i){var s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<s;){var c=31-mn(s),h=1<<c;i[c]=0,l[c]=-1,t[c]=-1,s&=~h}}function Hl(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-mn(s),c=1<<l;c&i|t[l]&i&&(t[l]|=i),s&=~c}}var Mt=0;function Mf(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Ef,Gl,Tf,wf,Af,Vl=!1,qo=[],Gi=null,Vi=null,Wi=null,Zs=new Map,Qs=new Map,Xi=[],cg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rf(t,i){switch(t){case"focusin":case"focusout":Gi=null;break;case"dragenter":case"dragleave":Vi=null;break;case"mouseover":case"mouseout":Wi=null;break;case"pointerover":case"pointerout":Zs.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qs.delete(i.pointerId)}}function Js(t,i,s,l,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:h,targetContainers:[c]},i!==null&&(i=po(i),i!==null&&Gl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function fg(t,i,s,l,c){switch(i){case"focusin":return Gi=Js(Gi,t,i,s,l,c),!0;case"dragenter":return Vi=Js(Vi,t,i,s,l,c),!0;case"mouseover":return Wi=Js(Wi,t,i,s,l,c),!0;case"pointerover":var h=c.pointerId;return Zs.set(h,Js(Zs.get(h)||null,t,i,s,l,c)),!0;case"gotpointercapture":return h=c.pointerId,Qs.set(h,Js(Qs.get(h)||null,t,i,s,l,c)),!0}return!1}function Cf(t){var i=Er(t.target);if(i!==null){var s=yi(i);if(s!==null){if(i=s.tag,i===13){if(i=Wo(s),i!==null){t.blockedOn=i,Af(t.priority,function(){Tf(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function jo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Xl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);At=l,s.target.dispatchEvent(l),At=null}else return i=po(s),i!==null&&Gl(i),t.blockedOn=s,!1;i.shift()}return!0}function Pf(t,i,s){jo(t)&&s.delete(i)}function dg(){Vl=!1,Gi!==null&&jo(Gi)&&(Gi=null),Vi!==null&&jo(Vi)&&(Vi=null),Wi!==null&&jo(Wi)&&(Wi=null),Zs.forEach(Pf),Qs.forEach(Pf)}function eo(t,i){t.blockedOn===i&&(t.blockedOn=null,Vl||(Vl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,dg)))}function to(t){function i(c){return eo(c,t)}if(0<qo.length){eo(qo[0],t);for(var s=1;s<qo.length;s++){var l=qo[s];l.blockedOn===t&&(l.blockedOn=null)}}for(Gi!==null&&eo(Gi,t),Vi!==null&&eo(Vi,t),Wi!==null&&eo(Wi,t),Zs.forEach(i),Qs.forEach(i),s=0;s<Xi.length;s++)l=Xi[s],l.blockedOn===t&&(l.blockedOn=null);for(;0<Xi.length&&(s=Xi[0],s.blockedOn===null);)Cf(s),s.blockedOn===null&&Xi.shift()}var $r=b.ReactCurrentBatchConfig,Ko=!0;function hg(t,i,s,l){var c=Mt,h=$r.transition;$r.transition=null;try{Mt=1,Wl(t,i,s,l)}finally{Mt=c,$r.transition=h}}function pg(t,i,s,l){var c=Mt,h=$r.transition;$r.transition=null;try{Mt=4,Wl(t,i,s,l)}finally{Mt=c,$r.transition=h}}function Wl(t,i,s,l){if(Ko){var c=Xl(t,i,s,l);if(c===null)lu(t,i,l,$o,s),Rf(t,l);else if(fg(c,t,i,s,l))l.stopPropagation();else if(Rf(t,l),i&4&&-1<cg.indexOf(t)){for(;c!==null;){var h=po(c);if(h!==null&&Ef(h),h=Xl(t,i,s,l),h===null&&lu(t,i,l,$o,s),h===c)break;c=h}c!==null&&l.stopPropagation()}else lu(t,i,l,null,s)}}var $o=null;function Xl(t,i,s,l){if($o=null,t=rt(l),t=Er(t),t!==null)if(i=yi(t),i===null)t=null;else if(s=i.tag,s===13){if(t=Wo(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return $o=t,null}function Lf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(st()){case Qe:return 1;case tt:return 4;case Rt:case pn:return 16;case Bt:return 536870912;default:return 16}default:return 16}}var Yi=null,Yl=null,Zo=null;function bf(){if(Zo)return Zo;var t,i=Yl,s=i.length,l,c="value"in Yi?Yi.value:Yi.textContent,h=c.length;for(t=0;t<s&&i[t]===c[t];t++);var M=s-t;for(l=1;l<=M&&i[s-l]===c[h-l];l++);return Zo=c.slice(t,1<l?1-l:void 0)}function Qo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Jo(){return!0}function Df(){return!1}function Dn(t){function i(s,l,c,h,M){this._reactName=s,this._targetInst=c,this.type=l,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var N in t)t.hasOwnProperty(N)&&(s=t[N],this[N]=s?s(h):h[N]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Jo:Df,this.isPropagationStopped=Df,this}return W(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Jo)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Jo)},persist:function(){},isPersistent:Jo}),i}var Zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ql=Dn(Zr),no=W({},Zr,{view:0,detail:0}),mg=Dn(no),jl,Kl,io,ea=W({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==io&&(io&&t.type==="mousemove"?(jl=t.screenX-io.screenX,Kl=t.screenY-io.screenY):Kl=jl=0,io=t),jl)},movementY:function(t){return"movementY"in t?t.movementY:Kl}}),Uf=Dn(ea),gg=W({},ea,{dataTransfer:0}),_g=Dn(gg),vg=W({},no,{relatedTarget:0}),$l=Dn(vg),xg=W({},Zr,{animationName:0,elapsedTime:0,pseudoElement:0}),yg=Dn(xg),Sg=W({},Zr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Mg=Dn(Sg),Eg=W({},Zr,{data:0}),Nf=Dn(Eg),Tg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ag={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Ag[t])?!!i[t]:!1}function Zl(){return Rg}var Cg=W({},no,{key:function(t){if(t.key){var i=Tg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Qo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?wg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zl,charCode:function(t){return t.type==="keypress"?Qo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Pg=Dn(Cg),Lg=W({},ea,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),If=Dn(Lg),bg=W({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zl}),Dg=Dn(bg),Ug=W({},Zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ng=Dn(Ug),Ig=W({},ea,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Fg=Dn(Ig),Og=[9,13,27,32],Ql=f&&"CompositionEvent"in window,ro=null;f&&"documentMode"in document&&(ro=document.documentMode);var zg=f&&"TextEvent"in window&&!ro,Ff=f&&(!Ql||ro&&8<ro&&11>=ro),Of=" ",zf=!1;function Bf(t,i){switch(t){case"keyup":return Og.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qr=!1;function Bg(t,i){switch(t){case"compositionend":return kf(i);case"keypress":return i.which!==32?null:(zf=!0,Of);case"textInput":return t=i.data,t===Of&&zf?null:t;default:return null}}function kg(t,i){if(Qr)return t==="compositionend"||!Ql&&Bf(t,i)?(t=bf(),Zo=Yl=Yi=null,Qr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ff&&i.locale!=="ko"?null:i.data;default:return null}}var Hg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Hg[t.type]:i==="textarea"}function Gf(t,i,s,l){Ke(l),i=sa(i,"onChange"),0<i.length&&(s=new ql("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var so=null,oo=null;function Gg(t){od(t,0)}function ta(t){var i=is(t);if(J(i))return t}function Vg(t,i){if(t==="change")return i}var Vf=!1;if(f){var Jl;if(f){var eu="oninput"in document;if(!eu){var Wf=document.createElement("div");Wf.setAttribute("oninput","return;"),eu=typeof Wf.oninput=="function"}Jl=eu}else Jl=!1;Vf=Jl&&(!document.documentMode||9<document.documentMode)}function Xf(){so&&(so.detachEvent("onpropertychange",Yf),oo=so=null)}function Yf(t){if(t.propertyName==="value"&&ta(oo)){var i=[];Gf(i,oo,t,rt(t)),$t(Gg,i)}}function Wg(t,i,s){t==="focusin"?(Xf(),so=i,oo=s,so.attachEvent("onpropertychange",Yf)):t==="focusout"&&Xf()}function Xg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ta(oo)}function Yg(t,i){if(t==="click")return ta(i)}function qg(t,i){if(t==="input"||t==="change")return ta(i)}function jg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Qn=typeof Object.is=="function"?Object.is:jg;function ao(t,i){if(Qn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var c=s[l];if(!p.call(i,c)||!Qn(t[c],i[c]))return!1}return!0}function qf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function jf(t,i){var s=qf(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=qf(s)}}function Kf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Kf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function $f(){for(var t=window,i=Gt();i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=Gt(t.document)}return i}function tu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Kg(t){var i=$f(),s=t.focusedElem,l=t.selectionRange;if(i!==s&&s&&s.ownerDocument&&Kf(s.ownerDocument.documentElement,s)){if(l!==null&&tu(s)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(t,s.value.length);else if(t=(i=s.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=s.textContent.length,h=Math.min(l.start,c);l=l.end===void 0?h:Math.min(l.end,c),!t.extend&&h>l&&(c=l,l=h,h=c),c=jf(s,h);var M=jf(s,l);c&&M&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=s;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)t=i[s],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var $g=f&&"documentMode"in document&&11>=document.documentMode,Jr=null,nu=null,lo=null,iu=!1;function Zf(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;iu||Jr==null||Jr!==Gt(l)||(l=Jr,"selectionStart"in l&&tu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),lo&&ao(lo,l)||(lo=l,l=sa(nu,"onSelect"),0<l.length&&(i=new ql("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=Jr)))}function na(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var es={animationend:na("Animation","AnimationEnd"),animationiteration:na("Animation","AnimationIteration"),animationstart:na("Animation","AnimationStart"),transitionend:na("Transition","TransitionEnd")},ru={},Qf={};f&&(Qf=document.createElement("div").style,"AnimationEvent"in window||(delete es.animationend.animation,delete es.animationiteration.animation,delete es.animationstart.animation),"TransitionEvent"in window||delete es.transitionend.transition);function ia(t){if(ru[t])return ru[t];if(!es[t])return t;var i=es[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Qf)return ru[t]=i[s];return t}var Jf=ia("animationend"),ed=ia("animationiteration"),td=ia("animationstart"),nd=ia("transitionend"),id=new Map,rd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qi(t,i){id.set(t,i),u(i,[t])}for(var su=0;su<rd.length;su++){var ou=rd[su],Zg=ou.toLowerCase(),Qg=ou[0].toUpperCase()+ou.slice(1);qi(Zg,"on"+Qg)}qi(Jf,"onAnimationEnd"),qi(ed,"onAnimationIteration"),qi(td,"onAnimationStart"),qi("dblclick","onDoubleClick"),qi("focusin","onFocus"),qi("focusout","onBlur"),qi(nd,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jg=new Set("cancel close invalid load scroll toggle".split(" ").concat(uo));function sd(t,i,s){var l=t.type||"unknown-event";t.currentTarget=s,kl(l,i,void 0,t),t.currentTarget=null}function od(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],c=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var M=l.length-1;0<=M;M--){var N=l[M],O=N.instance,Q=N.currentTarget;if(N=N.listener,O!==h&&c.isPropagationStopped())break e;sd(c,N,Q),h=O}else for(M=0;M<l.length;M++){if(N=l[M],O=N.instance,Q=N.currentTarget,N=N.listener,O!==h&&c.isPropagationStopped())break e;sd(c,N,Q),h=O}}}if(Sr)throw t=ki,Sr=!1,ki=null,t}function Pt(t,i){var s=i[pu];s===void 0&&(s=i[pu]=new Set);var l=t+"__bubble";s.has(l)||(ad(i,t,2,!1),s.add(l))}function au(t,i,s){var l=0;i&&(l|=4),ad(s,t,l,i)}var ra="_reactListening"+Math.random().toString(36).slice(2);function co(t){if(!t[ra]){t[ra]=!0,r.forEach(function(s){s!=="selectionchange"&&(Jg.has(s)||au(s,!1,t),au(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ra]||(i[ra]=!0,au("selectionchange",!1,i))}}function ad(t,i,s,l){switch(Lf(i)){case 1:var c=hg;break;case 4:c=pg;break;default:c=Wl}s=c.bind(null,i,s,t),c=void 0,!Xt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(i,s,{capture:!0,passive:c}):t.addEventListener(i,s,!0):c!==void 0?t.addEventListener(i,s,{passive:c}):t.addEventListener(i,s,!1)}function lu(t,i,s,l,c){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var N=l.stateNode.containerInfo;if(N===c||N.nodeType===8&&N.parentNode===c)break;if(M===4)for(M=l.return;M!==null;){var O=M.tag;if((O===3||O===4)&&(O=M.stateNode.containerInfo,O===c||O.nodeType===8&&O.parentNode===c))return;M=M.return}for(;N!==null;){if(M=Er(N),M===null)return;if(O=M.tag,O===5||O===6){l=h=M;continue e}N=N.parentNode}}l=l.return}$t(function(){var Q=h,de=rt(s),me=[];e:{var ce=id.get(t);if(ce!==void 0){var Pe=ql,Ne=t;switch(t){case"keypress":if(Qo(s)===0)break e;case"keydown":case"keyup":Pe=Pg;break;case"focusin":Ne="focus",Pe=$l;break;case"focusout":Ne="blur",Pe=$l;break;case"beforeblur":case"afterblur":Pe=$l;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Pe=Uf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Pe=_g;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Pe=Dg;break;case Jf:case ed:case td:Pe=yg;break;case nd:Pe=Ng;break;case"scroll":Pe=mg;break;case"wheel":Pe=Fg;break;case"copy":case"cut":case"paste":Pe=Mg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Pe=If}var Fe=(i&4)!==0,kt=!Fe&&t==="scroll",X=Fe?ce!==null?ce+"Capture":null:ce;Fe=[];for(var B=Q,K;B!==null;){K=B;var xe=K.stateNode;if(K.tag===5&&xe!==null&&(K=xe,X!==null&&(xe=vt(B,X),xe!=null&&Fe.push(fo(B,xe,K)))),kt)break;B=B.return}0<Fe.length&&(ce=new Pe(ce,Ne,null,s,de),me.push({event:ce,listeners:Fe}))}}if((i&7)===0){e:{if(ce=t==="mouseover"||t==="pointerover",Pe=t==="mouseout"||t==="pointerout",ce&&s!==At&&(Ne=s.relatedTarget||s.fromElement)&&(Er(Ne)||Ne[Mi]))break e;if((Pe||ce)&&(ce=de.window===de?de:(ce=de.ownerDocument)?ce.defaultView||ce.parentWindow:window,Pe?(Ne=s.relatedTarget||s.toElement,Pe=Q,Ne=Ne?Er(Ne):null,Ne!==null&&(kt=yi(Ne),Ne!==kt||Ne.tag!==5&&Ne.tag!==6)&&(Ne=null)):(Pe=null,Ne=Q),Pe!==Ne)){if(Fe=Uf,xe="onMouseLeave",X="onMouseEnter",B="mouse",(t==="pointerout"||t==="pointerover")&&(Fe=If,xe="onPointerLeave",X="onPointerEnter",B="pointer"),kt=Pe==null?ce:is(Pe),K=Ne==null?ce:is(Ne),ce=new Fe(xe,B+"leave",Pe,s,de),ce.target=kt,ce.relatedTarget=K,xe=null,Er(de)===Q&&(Fe=new Fe(X,B+"enter",Ne,s,de),Fe.target=K,Fe.relatedTarget=kt,xe=Fe),kt=xe,Pe&&Ne)t:{for(Fe=Pe,X=Ne,B=0,K=Fe;K;K=ts(K))B++;for(K=0,xe=X;xe;xe=ts(xe))K++;for(;0<B-K;)Fe=ts(Fe),B--;for(;0<K-B;)X=ts(X),K--;for(;B--;){if(Fe===X||X!==null&&Fe===X.alternate)break t;Fe=ts(Fe),X=ts(X)}Fe=null}else Fe=null;Pe!==null&&ld(me,ce,Pe,Fe,!1),Ne!==null&&kt!==null&&ld(me,kt,Ne,Fe,!0)}}e:{if(ce=Q?is(Q):window,Pe=ce.nodeName&&ce.nodeName.toLowerCase(),Pe==="select"||Pe==="input"&&ce.type==="file")var ze=Vg;else if(Hf(ce))if(Vf)ze=qg;else{ze=Xg;var Ye=Wg}else(Pe=ce.nodeName)&&Pe.toLowerCase()==="input"&&(ce.type==="checkbox"||ce.type==="radio")&&(ze=Yg);if(ze&&(ze=ze(t,Q))){Gf(me,ze,s,de);break e}Ye&&Ye(t,ce,Q),t==="focusout"&&(Ye=ce._wrapperState)&&Ye.controlled&&ce.type==="number"&&P(ce,"number",ce.value)}switch(Ye=Q?is(Q):window,t){case"focusin":(Hf(Ye)||Ye.contentEditable==="true")&&(Jr=Ye,nu=Q,lo=null);break;case"focusout":lo=nu=Jr=null;break;case"mousedown":iu=!0;break;case"contextmenu":case"mouseup":case"dragend":iu=!1,Zf(me,s,de);break;case"selectionchange":if($g)break;case"keydown":case"keyup":Zf(me,s,de)}var qe;if(Ql)e:{switch(t){case"compositionstart":var $e="onCompositionStart";break e;case"compositionend":$e="onCompositionEnd";break e;case"compositionupdate":$e="onCompositionUpdate";break e}$e=void 0}else Qr?Bf(t,s)&&($e="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&($e="onCompositionStart");$e&&(Ff&&s.locale!=="ko"&&(Qr||$e!=="onCompositionStart"?$e==="onCompositionEnd"&&Qr&&(qe=bf()):(Yi=de,Yl="value"in Yi?Yi.value:Yi.textContent,Qr=!0)),Ye=sa(Q,$e),0<Ye.length&&($e=new Nf($e,t,null,s,de),me.push({event:$e,listeners:Ye}),qe?$e.data=qe:(qe=kf(s),qe!==null&&($e.data=qe)))),(qe=zg?Bg(t,s):kg(t,s))&&(Q=sa(Q,"onBeforeInput"),0<Q.length&&(de=new Nf("onBeforeInput","beforeinput",null,s,de),me.push({event:de,listeners:Q}),de.data=qe))}od(me,i)})}function fo(t,i,s){return{instance:t,listener:i,currentTarget:s}}function sa(t,i){for(var s=i+"Capture",l=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=vt(t,s),h!=null&&l.unshift(fo(t,h,c)),h=vt(t,i),h!=null&&l.push(fo(t,h,c))),t=t.return}return l}function ts(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ld(t,i,s,l,c){for(var h=i._reactName,M=[];s!==null&&s!==l;){var N=s,O=N.alternate,Q=N.stateNode;if(O!==null&&O===l)break;N.tag===5&&Q!==null&&(N=Q,c?(O=vt(s,h),O!=null&&M.unshift(fo(s,O,N))):c||(O=vt(s,h),O!=null&&M.push(fo(s,O,N)))),s=s.return}M.length!==0&&t.push({event:i,listeners:M})}var e_=/\r\n?/g,t_=/\u0000|\uFFFD/g;function ud(t){return(typeof t=="string"?t:""+t).replace(e_,`
`).replace(t_,"")}function oa(t,i,s){if(i=ud(i),ud(t)!==i&&s)throw Error(n(425))}function aa(){}var uu=null,cu=null;function fu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var du=typeof setTimeout=="function"?setTimeout:void 0,n_=typeof clearTimeout=="function"?clearTimeout:void 0,cd=typeof Promise=="function"?Promise:void 0,i_=typeof queueMicrotask=="function"?queueMicrotask:typeof cd<"u"?function(t){return cd.resolve(null).then(t).catch(r_)}:du;function r_(t){setTimeout(function(){throw t})}function hu(t,i){var s=i,l=0;do{var c=s.nextSibling;if(t.removeChild(s),c&&c.nodeType===8)if(s=c.data,s==="/$"){if(l===0){t.removeChild(c),to(i);return}l--}else s!=="$"&&s!=="$?"&&s!=="$!"||l++;s=c}while(s);to(i)}function ji(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function fd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}var ns=Math.random().toString(36).slice(2),pi="__reactFiber$"+ns,ho="__reactProps$"+ns,Mi="__reactContainer$"+ns,pu="__reactEvents$"+ns,s_="__reactListeners$"+ns,o_="__reactHandles$"+ns;function Er(t){var i=t[pi];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Mi]||s[pi]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=fd(t);t!==null;){if(s=t[pi])return s;t=fd(t)}return i}t=s,s=t.parentNode}return null}function po(t){return t=t[pi]||t[Mi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function is(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function la(t){return t[ho]||null}var mu=[],rs=-1;function Ki(t){return{current:t}}function Lt(t){0>rs||(t.current=mu[rs],mu[rs]=null,rs--)}function Ct(t,i){rs++,mu[rs]=t.current,t.current=i}var $i={},ln=Ki($i),En=Ki(!1),Tr=$i;function ss(t,i){var s=t.type.contextTypes;if(!s)return $i;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in s)c[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function Tn(t){return t=t.childContextTypes,t!=null}function ua(){Lt(En),Lt(ln)}function dd(t,i,s){if(ln.current!==$i)throw Error(n(168));Ct(ln,i),Ct(En,s)}function hd(t,i,s){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return s;l=l.getChildContext();for(var c in l)if(!(c in i))throw Error(n(108,Me(t)||"Unknown",c));return W({},s,l)}function ca(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||$i,Tr=ln.current,Ct(ln,t),Ct(En,En.current),!0}function pd(t,i,s){var l=t.stateNode;if(!l)throw Error(n(169));s?(t=hd(t,i,Tr),l.__reactInternalMemoizedMergedChildContext=t,Lt(En),Lt(ln),Ct(ln,t)):Lt(En),Ct(En,s)}var Ei=null,fa=!1,gu=!1;function md(t){Ei===null?Ei=[t]:Ei.push(t)}function a_(t){fa=!0,md(t)}function Zi(){if(!gu&&Ei!==null){gu=!0;var t=0,i=Mt;try{var s=Ei;for(Mt=1;t<s.length;t++){var l=s[t];do l=l(!0);while(l!==null)}Ei=null,fa=!1}catch(c){throw Ei!==null&&(Ei=Ei.slice(t+1)),ee(Qe,Zi),c}finally{Mt=i,gu=!1}}return null}var os=[],as=0,da=null,ha=0,Hn=[],Gn=0,wr=null,Ti=1,wi="";function Ar(t,i){os[as++]=ha,os[as++]=da,da=t,ha=i}function gd(t,i,s){Hn[Gn++]=Ti,Hn[Gn++]=wi,Hn[Gn++]=wr,wr=t;var l=Ti;t=wi;var c=32-mn(l)-1;l&=~(1<<c),s+=1;var h=32-mn(i)+c;if(30<h){var M=c-c%5;h=(l&(1<<M)-1).toString(32),l>>=M,c-=M,Ti=1<<32-mn(i)+c|s<<c|l,wi=h+t}else Ti=1<<h|s<<c|l,wi=t}function _u(t){t.return!==null&&(Ar(t,1),gd(t,1,0))}function vu(t){for(;t===da;)da=os[--as],os[as]=null,ha=os[--as],os[as]=null;for(;t===wr;)wr=Hn[--Gn],Hn[Gn]=null,wi=Hn[--Gn],Hn[Gn]=null,Ti=Hn[--Gn],Hn[Gn]=null}var Un=null,Nn=null,Ut=!1,Jn=null;function _d(t,i){var s=Yn(5,null,null,0);s.elementType="DELETED",s.stateNode=i,s.return=t,i=t.deletions,i===null?(t.deletions=[s],t.flags|=16):i.push(s)}function vd(t,i){switch(t.tag){case 5:var s=t.type;return i=i.nodeType!==1||s.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Un=t,Nn=ji(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Un=t,Nn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(s=wr!==null?{id:Ti,overflow:wi}:null,t.memoizedState={dehydrated:i,treeContext:s,retryLane:1073741824},s=Yn(18,null,null,0),s.stateNode=i,s.return=t,t.child=s,Un=t,Nn=null,!0):!1;default:return!1}}function xu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function yu(t){if(Ut){var i=Nn;if(i){var s=i;if(!vd(t,i)){if(xu(t))throw Error(n(418));i=ji(s.nextSibling);var l=Un;i&&vd(t,i)?_d(l,s):(t.flags=t.flags&-4097|2,Ut=!1,Un=t)}}else{if(xu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ut=!1,Un=t}}}function xd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Un=t}function pa(t){if(t!==Un)return!1;if(!Ut)return xd(t),Ut=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!fu(t.type,t.memoizedProps)),i&&(i=Nn)){if(xu(t))throw yd(),Error(n(418));for(;i;)_d(t,i),i=ji(i.nextSibling)}if(xd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"){if(i===0){Nn=ji(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++}t=t.nextSibling}Nn=null}}else Nn=Un?ji(t.stateNode.nextSibling):null;return!0}function yd(){for(var t=Nn;t;)t=ji(t.nextSibling)}function ls(){Nn=Un=null,Ut=!1}function Su(t){Jn===null?Jn=[t]:Jn.push(t)}var l_=b.ReactCurrentBatchConfig;function mo(t,i,s){if(t=s.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(n(309));var l=s.stateNode}if(!l)throw Error(n(147,t));var c=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(M){var N=c.refs;M===null?delete N[h]:N[h]=M},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!s._owner)throw Error(n(290,t))}return t}function ma(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Sd(t){var i=t._init;return i(t._payload)}function Md(t){function i(X,B){if(t){var K=X.deletions;K===null?(X.deletions=[B],X.flags|=16):K.push(B)}}function s(X,B){if(!t)return null;for(;B!==null;)i(X,B),B=B.sibling;return null}function l(X,B){for(X=new Map;B!==null;)B.key!==null?X.set(B.key,B):X.set(B.index,B),B=B.sibling;return X}function c(X,B){return X=sr(X,B),X.index=0,X.sibling=null,X}function h(X,B,K){return X.index=K,t?(K=X.alternate,K!==null?(K=K.index,K<B?(X.flags|=2,B):K):(X.flags|=2,B)):(X.flags|=1048576,B)}function M(X){return t&&X.alternate===null&&(X.flags|=2),X}function N(X,B,K,xe){return B===null||B.tag!==6?(B=dc(K,X.mode,xe),B.return=X,B):(B=c(B,K),B.return=X,B)}function O(X,B,K,xe){var ze=K.type;return ze===I?de(X,B,K.props.children,xe,K.key):B!==null&&(B.elementType===ze||typeof ze=="object"&&ze!==null&&ze.$$typeof===se&&Sd(ze)===B.type)?(xe=c(B,K.props),xe.ref=mo(X,B,K),xe.return=X,xe):(xe=Ba(K.type,K.key,K.props,null,X.mode,xe),xe.ref=mo(X,B,K),xe.return=X,xe)}function Q(X,B,K,xe){return B===null||B.tag!==4||B.stateNode.containerInfo!==K.containerInfo||B.stateNode.implementation!==K.implementation?(B=hc(K,X.mode,xe),B.return=X,B):(B=c(B,K.children||[]),B.return=X,B)}function de(X,B,K,xe,ze){return B===null||B.tag!==7?(B=Nr(K,X.mode,xe,ze),B.return=X,B):(B=c(B,K),B.return=X,B)}function me(X,B,K){if(typeof B=="string"&&B!==""||typeof B=="number")return B=dc(""+B,X.mode,K),B.return=X,B;if(typeof B=="object"&&B!==null){switch(B.$$typeof){case k:return K=Ba(B.type,B.key,B.props,null,X.mode,K),K.ref=mo(X,null,B),K.return=X,K;case F:return B=hc(B,X.mode,K),B.return=X,B;case se:var xe=B._init;return me(X,xe(B._payload),K)}if(T(B)||$(B))return B=Nr(B,X.mode,K,null),B.return=X,B;ma(X,B)}return null}function ce(X,B,K,xe){var ze=B!==null?B.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return ze!==null?null:N(X,B,""+K,xe);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case k:return K.key===ze?O(X,B,K,xe):null;case F:return K.key===ze?Q(X,B,K,xe):null;case se:return ze=K._init,ce(X,B,ze(K._payload),xe)}if(T(K)||$(K))return ze!==null?null:de(X,B,K,xe,null);ma(X,K)}return null}function Pe(X,B,K,xe,ze){if(typeof xe=="string"&&xe!==""||typeof xe=="number")return X=X.get(K)||null,N(B,X,""+xe,ze);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case k:return X=X.get(xe.key===null?K:xe.key)||null,O(B,X,xe,ze);case F:return X=X.get(xe.key===null?K:xe.key)||null,Q(B,X,xe,ze);case se:var Ye=xe._init;return Pe(X,B,K,Ye(xe._payload),ze)}if(T(xe)||$(xe))return X=X.get(K)||null,de(B,X,xe,ze,null);ma(B,xe)}return null}function Ne(X,B,K,xe){for(var ze=null,Ye=null,qe=B,$e=B=0,Jt=null;qe!==null&&$e<K.length;$e++){qe.index>$e?(Jt=qe,qe=null):Jt=qe.sibling;var xt=ce(X,qe,K[$e],xe);if(xt===null){qe===null&&(qe=Jt);break}t&&qe&&xt.alternate===null&&i(X,qe),B=h(xt,B,$e),Ye===null?ze=xt:Ye.sibling=xt,Ye=xt,qe=Jt}if($e===K.length)return s(X,qe),Ut&&Ar(X,$e),ze;if(qe===null){for(;$e<K.length;$e++)qe=me(X,K[$e],xe),qe!==null&&(B=h(qe,B,$e),Ye===null?ze=qe:Ye.sibling=qe,Ye=qe);return Ut&&Ar(X,$e),ze}for(qe=l(X,qe);$e<K.length;$e++)Jt=Pe(qe,X,$e,K[$e],xe),Jt!==null&&(t&&Jt.alternate!==null&&qe.delete(Jt.key===null?$e:Jt.key),B=h(Jt,B,$e),Ye===null?ze=Jt:Ye.sibling=Jt,Ye=Jt);return t&&qe.forEach(function(or){return i(X,or)}),Ut&&Ar(X,$e),ze}function Fe(X,B,K,xe){var ze=$(K);if(typeof ze!="function")throw Error(n(150));if(K=ze.call(K),K==null)throw Error(n(151));for(var Ye=ze=null,qe=B,$e=B=0,Jt=null,xt=K.next();qe!==null&&!xt.done;$e++,xt=K.next()){qe.index>$e?(Jt=qe,qe=null):Jt=qe.sibling;var or=ce(X,qe,xt.value,xe);if(or===null){qe===null&&(qe=Jt);break}t&&qe&&or.alternate===null&&i(X,qe),B=h(or,B,$e),Ye===null?ze=or:Ye.sibling=or,Ye=or,qe=Jt}if(xt.done)return s(X,qe),Ut&&Ar(X,$e),ze;if(qe===null){for(;!xt.done;$e++,xt=K.next())xt=me(X,xt.value,xe),xt!==null&&(B=h(xt,B,$e),Ye===null?ze=xt:Ye.sibling=xt,Ye=xt);return Ut&&Ar(X,$e),ze}for(qe=l(X,qe);!xt.done;$e++,xt=K.next())xt=Pe(qe,X,$e,xt.value,xe),xt!==null&&(t&&xt.alternate!==null&&qe.delete(xt.key===null?$e:xt.key),B=h(xt,B,$e),Ye===null?ze=xt:Ye.sibling=xt,Ye=xt);return t&&qe.forEach(function(H_){return i(X,H_)}),Ut&&Ar(X,$e),ze}function kt(X,B,K,xe){if(typeof K=="object"&&K!==null&&K.type===I&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case k:e:{for(var ze=K.key,Ye=B;Ye!==null;){if(Ye.key===ze){if(ze=K.type,ze===I){if(Ye.tag===7){s(X,Ye.sibling),B=c(Ye,K.props.children),B.return=X,X=B;break e}}else if(Ye.elementType===ze||typeof ze=="object"&&ze!==null&&ze.$$typeof===se&&Sd(ze)===Ye.type){s(X,Ye.sibling),B=c(Ye,K.props),B.ref=mo(X,Ye,K),B.return=X,X=B;break e}s(X,Ye);break}else i(X,Ye);Ye=Ye.sibling}K.type===I?(B=Nr(K.props.children,X.mode,xe,K.key),B.return=X,X=B):(xe=Ba(K.type,K.key,K.props,null,X.mode,xe),xe.ref=mo(X,B,K),xe.return=X,X=xe)}return M(X);case F:e:{for(Ye=K.key;B!==null;){if(B.key===Ye)if(B.tag===4&&B.stateNode.containerInfo===K.containerInfo&&B.stateNode.implementation===K.implementation){s(X,B.sibling),B=c(B,K.children||[]),B.return=X,X=B;break e}else{s(X,B);break}else i(X,B);B=B.sibling}B=hc(K,X.mode,xe),B.return=X,X=B}return M(X);case se:return Ye=K._init,kt(X,B,Ye(K._payload),xe)}if(T(K))return Ne(X,B,K,xe);if($(K))return Fe(X,B,K,xe);ma(X,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,B!==null&&B.tag===6?(s(X,B.sibling),B=c(B,K),B.return=X,X=B):(s(X,B),B=dc(K,X.mode,xe),B.return=X,X=B),M(X)):s(X,B)}return kt}var us=Md(!0),Ed=Md(!1),ga=Ki(null),_a=null,cs=null,Mu=null;function Eu(){Mu=cs=_a=null}function Tu(t){var i=ga.current;Lt(ga),t._currentValue=i}function wu(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function fs(t,i){_a=t,Mu=cs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(wn=!0),t.firstContext=null)}function Vn(t){var i=t._currentValue;if(Mu!==t)if(t={context:t,memoizedValue:i,next:null},cs===null){if(_a===null)throw Error(n(308));cs=t,_a.dependencies={lanes:0,firstContext:t}}else cs=cs.next=t;return i}var Rr=null;function Au(t){Rr===null?Rr=[t]:Rr.push(t)}function Td(t,i,s,l){var c=i.interleaved;return c===null?(s.next=s,Au(i)):(s.next=c.next,c.next=s),i.interleaved=s,Ai(t,l)}function Ai(t,i){t.lanes|=i;var s=t.alternate;for(s!==null&&(s.lanes|=i),s=t,t=t.return;t!==null;)t.childLanes|=i,s=t.alternate,s!==null&&(s.childLanes|=i),s=t,t=t.return;return s.tag===3?s.stateNode:null}var Qi=!1;function Ru(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wd(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ri(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Ji(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(_t&2)!==0){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,Ai(t,s)}return c=l.interleaved,c===null?(i.next=i,Au(l)):(i.next=c.next,c.next=i),l.interleaved=i,Ai(t,s)}function va(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Hl(t,s)}}function Ad(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var c=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var M={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};h===null?c=h=M:h=h.next=M,s=s.next}while(s!==null);h===null?c=h=i:h=h.next=i}else c=h=i;s={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}function xa(t,i,s,l){var c=t.updateQueue;Qi=!1;var h=c.firstBaseUpdate,M=c.lastBaseUpdate,N=c.shared.pending;if(N!==null){c.shared.pending=null;var O=N,Q=O.next;O.next=null,M===null?h=Q:M.next=Q,M=O;var de=t.alternate;de!==null&&(de=de.updateQueue,N=de.lastBaseUpdate,N!==M&&(N===null?de.firstBaseUpdate=Q:N.next=Q,de.lastBaseUpdate=O))}if(h!==null){var me=c.baseState;M=0,de=Q=O=null,N=h;do{var ce=N.lane,Pe=N.eventTime;if((l&ce)===ce){de!==null&&(de=de.next={eventTime:Pe,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var Ne=t,Fe=N;switch(ce=i,Pe=s,Fe.tag){case 1:if(Ne=Fe.payload,typeof Ne=="function"){me=Ne.call(Pe,me,ce);break e}me=Ne;break e;case 3:Ne.flags=Ne.flags&-65537|128;case 0:if(Ne=Fe.payload,ce=typeof Ne=="function"?Ne.call(Pe,me,ce):Ne,ce==null)break e;me=W({},me,ce);break e;case 2:Qi=!0}}N.callback!==null&&N.lane!==0&&(t.flags|=64,ce=c.effects,ce===null?c.effects=[N]:ce.push(N))}else Pe={eventTime:Pe,lane:ce,tag:N.tag,payload:N.payload,callback:N.callback,next:null},de===null?(Q=de=Pe,O=me):de=de.next=Pe,M|=ce;if(N=N.next,N===null){if(N=c.shared.pending,N===null)break;ce=N,N=ce.next,ce.next=null,c.lastBaseUpdate=ce,c.shared.pending=null}}while(!0);if(de===null&&(O=me),c.baseState=O,c.firstBaseUpdate=Q,c.lastBaseUpdate=de,i=c.shared.interleaved,i!==null){c=i;do M|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);Lr|=M,t.lanes=M,t.memoizedState=me}}function Rd(t,i,s){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],c=l.callback;if(c!==null){if(l.callback=null,l=s,typeof c!="function")throw Error(n(191,c));c.call(l)}}}var go={},mi=Ki(go),_o=Ki(go),vo=Ki(go);function Cr(t){if(t===go)throw Error(n(174));return t}function Cu(t,i){switch(Ct(vo,i),Ct(_o,t),Ct(mi,go),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ue(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ue(i,t)}Lt(mi),Ct(mi,i)}function ds(){Lt(mi),Lt(_o),Lt(vo)}function Cd(t){Cr(vo.current);var i=Cr(mi.current),s=Ue(i,t.type);i!==s&&(Ct(_o,t),Ct(mi,s))}function Pu(t){_o.current===t&&(Lt(mi),Lt(_o))}var Nt=Ki(0);function ya(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Lu=[];function bu(){for(var t=0;t<Lu.length;t++)Lu[t]._workInProgressVersionPrimary=null;Lu.length=0}var Sa=b.ReactCurrentDispatcher,Du=b.ReactCurrentBatchConfig,Pr=0,It=null,Yt=null,Zt=null,Ma=!1,xo=!1,yo=0,u_=0;function un(){throw Error(n(321))}function Uu(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!Qn(t[s],i[s]))return!1;return!0}function Nu(t,i,s,l,c,h){if(Pr=h,It=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Sa.current=t===null||t.memoizedState===null?h_:p_,t=s(l,c),xo){h=0;do{if(xo=!1,yo=0,25<=h)throw Error(n(301));h+=1,Zt=Yt=null,i.updateQueue=null,Sa.current=m_,t=s(l,c)}while(xo)}if(Sa.current=wa,i=Yt!==null&&Yt.next!==null,Pr=0,Zt=Yt=It=null,Ma=!1,i)throw Error(n(300));return t}function Iu(){var t=yo!==0;return yo=0,t}function gi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zt===null?It.memoizedState=Zt=t:Zt=Zt.next=t,Zt}function Wn(){if(Yt===null){var t=It.alternate;t=t!==null?t.memoizedState:null}else t=Yt.next;var i=Zt===null?It.memoizedState:Zt.next;if(i!==null)Zt=i,Yt=t;else{if(t===null)throw Error(n(310));Yt=t,t={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},Zt===null?It.memoizedState=Zt=t:Zt=Zt.next=t}return Zt}function So(t,i){return typeof i=="function"?i(t):i}function Fu(t){var i=Wn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=Yt,c=l.baseQueue,h=s.pending;if(h!==null){if(c!==null){var M=c.next;c.next=h.next,h.next=M}l.baseQueue=c=h,s.pending=null}if(c!==null){h=c.next,l=l.baseState;var N=M=null,O=null,Q=h;do{var de=Q.lane;if((Pr&de)===de)O!==null&&(O=O.next={lane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),l=Q.hasEagerState?Q.eagerState:t(l,Q.action);else{var me={lane:de,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null};O===null?(N=O=me,M=l):O=O.next=me,It.lanes|=de,Lr|=de}Q=Q.next}while(Q!==null&&Q!==h);O===null?M=l:O.next=N,Qn(l,i.memoizedState)||(wn=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=O,s.lastRenderedState=l}if(t=s.interleaved,t!==null){c=t;do h=c.lane,It.lanes|=h,Lr|=h,c=c.next;while(c!==t)}else c===null&&(s.lanes=0);return[i.memoizedState,s.dispatch]}function Ou(t){var i=Wn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=s.dispatch,c=s.pending,h=i.memoizedState;if(c!==null){s.pending=null;var M=c=c.next;do h=t(h,M.action),M=M.next;while(M!==c);Qn(h,i.memoizedState)||(wn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,l]}function Pd(){}function Ld(t,i){var s=It,l=Wn(),c=i(),h=!Qn(l.memoizedState,c);if(h&&(l.memoizedState=c,wn=!0),l=l.queue,zu(Ud.bind(null,s,l,t),[t]),l.getSnapshot!==i||h||Zt!==null&&Zt.memoizedState.tag&1){if(s.flags|=2048,Mo(9,Dd.bind(null,s,l,c,i),void 0,null),Qt===null)throw Error(n(349));(Pr&30)!==0||bd(s,i,c)}return c}function bd(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=It.updateQueue,i===null?(i={lastEffect:null,stores:null},It.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function Dd(t,i,s,l){i.value=s,i.getSnapshot=l,Nd(i)&&Id(t)}function Ud(t,i,s){return s(function(){Nd(i)&&Id(t)})}function Nd(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!Qn(t,s)}catch{return!0}}function Id(t){var i=Ai(t,1);i!==null&&ii(i,t,1,-1)}function Fd(t){var i=gi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:So,lastRenderedState:t},i.queue=t,t=t.dispatch=d_.bind(null,It,t),[i.memoizedState,t]}function Mo(t,i,s,l){return t={tag:t,create:i,destroy:s,deps:l,next:null},i=It.updateQueue,i===null?(i={lastEffect:null,stores:null},It.updateQueue=i,i.lastEffect=t.next=t):(s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t)),t}function Od(){return Wn().memoizedState}function Ea(t,i,s,l){var c=gi();It.flags|=t,c.memoizedState=Mo(1|i,s,void 0,l===void 0?null:l)}function Ta(t,i,s,l){var c=Wn();l=l===void 0?null:l;var h=void 0;if(Yt!==null){var M=Yt.memoizedState;if(h=M.destroy,l!==null&&Uu(l,M.deps)){c.memoizedState=Mo(i,s,h,l);return}}It.flags|=t,c.memoizedState=Mo(1|i,s,h,l)}function zd(t,i){return Ea(8390656,8,t,i)}function zu(t,i){return Ta(2048,8,t,i)}function Bd(t,i){return Ta(4,2,t,i)}function kd(t,i){return Ta(4,4,t,i)}function Hd(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Gd(t,i,s){return s=s!=null?s.concat([t]):null,Ta(4,4,Hd.bind(null,i,t),s)}function Bu(){}function Vd(t,i){var s=Wn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&Uu(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function Wd(t,i){var s=Wn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&Uu(i,l[1])?l[0]:(t=t(),s.memoizedState=[t,i],t)}function Xd(t,i,s){return(Pr&21)===0?(t.baseState&&(t.baseState=!1,wn=!0),t.memoizedState=s):(Qn(s,i)||(s=Yo(),It.lanes|=s,Lr|=s,t.baseState=!0),i)}function c_(t,i){var s=Mt;Mt=s!==0&&4>s?s:4,t(!0);var l=Du.transition;Du.transition={};try{t(!1),i()}finally{Mt=s,Du.transition=l}}function Yd(){return Wn().memoizedState}function f_(t,i,s){var l=ir(t);if(s={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null},qd(t))jd(i,s);else if(s=Td(t,i,s,l),s!==null){var c=_n();ii(s,t,l,c),Kd(s,i,l)}}function d_(t,i,s){var l=ir(t),c={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null};if(qd(t))jd(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var M=i.lastRenderedState,N=h(M,s);if(c.hasEagerState=!0,c.eagerState=N,Qn(N,M)){var O=i.interleaved;O===null?(c.next=c,Au(i)):(c.next=O.next,O.next=c),i.interleaved=c;return}}catch{}s=Td(t,i,c,l),s!==null&&(c=_n(),ii(s,t,l,c),Kd(s,i,l))}}function qd(t){var i=t.alternate;return t===It||i!==null&&i===It}function jd(t,i){xo=Ma=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function Kd(t,i,s){if((s&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Hl(t,s)}}var wa={readContext:Vn,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useInsertionEffect:un,useLayoutEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useMutableSource:un,useSyncExternalStore:un,useId:un,unstable_isNewReconciler:!1},h_={readContext:Vn,useCallback:function(t,i){return gi().memoizedState=[t,i===void 0?null:i],t},useContext:Vn,useEffect:zd,useImperativeHandle:function(t,i,s){return s=s!=null?s.concat([t]):null,Ea(4194308,4,Hd.bind(null,i,t),s)},useLayoutEffect:function(t,i){return Ea(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ea(4,2,t,i)},useMemo:function(t,i){var s=gi();return i=i===void 0?null:i,t=t(),s.memoizedState=[t,i],t},useReducer:function(t,i,s){var l=gi();return i=s!==void 0?s(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=f_.bind(null,It,t),[l.memoizedState,t]},useRef:function(t){var i=gi();return t={current:t},i.memoizedState=t},useState:Fd,useDebugValue:Bu,useDeferredValue:function(t){return gi().memoizedState=t},useTransition:function(){var t=Fd(!1),i=t[0];return t=c_.bind(null,t[1]),gi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,s){var l=It,c=gi();if(Ut){if(s===void 0)throw Error(n(407));s=s()}else{if(s=i(),Qt===null)throw Error(n(349));(Pr&30)!==0||bd(l,i,s)}c.memoizedState=s;var h={value:s,getSnapshot:i};return c.queue=h,zd(Ud.bind(null,l,h,t),[t]),l.flags|=2048,Mo(9,Dd.bind(null,l,h,s,i),void 0,null),s},useId:function(){var t=gi(),i=Qt.identifierPrefix;if(Ut){var s=wi,l=Ti;s=(l&~(1<<32-mn(l)-1)).toString(32)+s,i=":"+i+"R"+s,s=yo++,0<s&&(i+="H"+s.toString(32)),i+=":"}else s=u_++,i=":"+i+"r"+s.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},p_={readContext:Vn,useCallback:Vd,useContext:Vn,useEffect:zu,useImperativeHandle:Gd,useInsertionEffect:Bd,useLayoutEffect:kd,useMemo:Wd,useReducer:Fu,useRef:Od,useState:function(){return Fu(So)},useDebugValue:Bu,useDeferredValue:function(t){var i=Wn();return Xd(i,Yt.memoizedState,t)},useTransition:function(){var t=Fu(So)[0],i=Wn().memoizedState;return[t,i]},useMutableSource:Pd,useSyncExternalStore:Ld,useId:Yd,unstable_isNewReconciler:!1},m_={readContext:Vn,useCallback:Vd,useContext:Vn,useEffect:zu,useImperativeHandle:Gd,useInsertionEffect:Bd,useLayoutEffect:kd,useMemo:Wd,useReducer:Ou,useRef:Od,useState:function(){return Ou(So)},useDebugValue:Bu,useDeferredValue:function(t){var i=Wn();return Yt===null?i.memoizedState=t:Xd(i,Yt.memoizedState,t)},useTransition:function(){var t=Ou(So)[0],i=Wn().memoizedState;return[t,i]},useMutableSource:Pd,useSyncExternalStore:Ld,useId:Yd,unstable_isNewReconciler:!1};function ei(t,i){if(t&&t.defaultProps){i=W({},i),t=t.defaultProps;for(var s in t)i[s]===void 0&&(i[s]=t[s]);return i}return i}function ku(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:W({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Aa={isMounted:function(t){return(t=t._reactInternals)?yi(t)===t:!1},enqueueSetState:function(t,i,s){t=t._reactInternals;var l=_n(),c=ir(t),h=Ri(l,c);h.payload=i,s!=null&&(h.callback=s),i=Ji(t,h,c),i!==null&&(ii(i,t,c,l),va(i,t,c))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=_n(),c=ir(t),h=Ri(l,c);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=Ji(t,h,c),i!==null&&(ii(i,t,c,l),va(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=_n(),l=ir(t),c=Ri(s,l);c.tag=2,i!=null&&(c.callback=i),i=Ji(t,c,l),i!==null&&(ii(i,t,l,s),va(i,t,l))}};function $d(t,i,s,l,c,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,M):i.prototype&&i.prototype.isPureReactComponent?!ao(s,l)||!ao(c,h):!0}function Zd(t,i,s){var l=!1,c=$i,h=i.contextType;return typeof h=="object"&&h!==null?h=Vn(h):(c=Tn(i)?Tr:ln.current,l=i.contextTypes,h=(l=l!=null)?ss(t,c):$i),i=new i(s,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Aa,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function Qd(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Aa.enqueueReplaceState(i,i.state,null)}function Hu(t,i,s,l){var c=t.stateNode;c.props=s,c.state=t.memoizedState,c.refs={},Ru(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=Vn(h):(h=Tn(i)?Tr:ln.current,c.context=ss(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(ku(t,i,h,s),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&Aa.enqueueReplaceState(c,c.state,null),xa(t,s,c,l),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function hs(t,i){try{var s="",l=i;do s+=fe(l),l=l.return;while(l);var c=s}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function Gu(t,i,s){return{value:t,source:null,stack:s??null,digest:i??null}}function Vu(t,i){try{console.error(i.value)}catch(s){setTimeout(function(){throw s})}}var g_=typeof WeakMap=="function"?WeakMap:Map;function Jd(t,i,s){s=Ri(-1,s),s.tag=3,s.payload={element:null};var l=i.value;return s.callback=function(){Ua||(Ua=!0,rc=l),Vu(t,i)},s}function eh(t,i,s){s=Ri(-1,s),s.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=i.value;s.payload=function(){return l(c)},s.callback=function(){Vu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(s.callback=function(){Vu(t,i),typeof l!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),s}function th(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new g_;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(s)||(c.add(s),t=L_.bind(null,t,i,s),i.then(t,t))}function nh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function ih(t,i,s,l,c){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(i=Ri(-1,1),i.tag=2,Ji(s,i,1))),s.lanes|=1),t):(t.flags|=65536,t.lanes=c,t)}var __=b.ReactCurrentOwner,wn=!1;function gn(t,i,s,l){i.child=t===null?Ed(i,null,s,l):us(i,t.child,s,l)}function rh(t,i,s,l,c){s=s.render;var h=i.ref;return fs(i,c),l=Nu(t,i,s,l,h,c),s=Iu(),t!==null&&!wn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Ci(t,i,c)):(Ut&&s&&_u(i),i.flags|=1,gn(t,i,l,c),i.child)}function sh(t,i,s,l,c){if(t===null){var h=s.type;return typeof h=="function"&&!fc(h)&&h.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(i.tag=15,i.type=h,oh(t,i,h,l,c)):(t=Ba(s.type,null,l,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&c)===0){var M=h.memoizedProps;if(s=s.compare,s=s!==null?s:ao,s(M,l)&&t.ref===i.ref)return Ci(t,i,c)}return i.flags|=1,t=sr(h,l),t.ref=i.ref,t.return=i,i.child=t}function oh(t,i,s,l,c){if(t!==null){var h=t.memoizedProps;if(ao(h,l)&&t.ref===i.ref)if(wn=!1,i.pendingProps=l=h,(t.lanes&c)!==0)(t.flags&131072)!==0&&(wn=!0);else return i.lanes=t.lanes,Ci(t,i,c)}return Wu(t,i,s,l,c)}function ah(t,i,s){var l=i.pendingProps,c=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ct(ms,In),In|=s;else{if((s&1073741824)===0)return t=h!==null?h.baseLanes|s:s,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Ct(ms,In),In|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:s,Ct(ms,In),In|=l}else h!==null?(l=h.baseLanes|s,i.memoizedState=null):l=s,Ct(ms,In),In|=l;return gn(t,i,c,s),i.child}function lh(t,i){var s=i.ref;(t===null&&s!==null||t!==null&&t.ref!==s)&&(i.flags|=512,i.flags|=2097152)}function Wu(t,i,s,l,c){var h=Tn(s)?Tr:ln.current;return h=ss(i,h),fs(i,c),s=Nu(t,i,s,l,h,c),l=Iu(),t!==null&&!wn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Ci(t,i,c)):(Ut&&l&&_u(i),i.flags|=1,gn(t,i,s,c),i.child)}function uh(t,i,s,l,c){if(Tn(s)){var h=!0;ca(i)}else h=!1;if(fs(i,c),i.stateNode===null)Ca(t,i),Zd(i,s,l),Hu(i,s,l,c),l=!0;else if(t===null){var M=i.stateNode,N=i.memoizedProps;M.props=N;var O=M.context,Q=s.contextType;typeof Q=="object"&&Q!==null?Q=Vn(Q):(Q=Tn(s)?Tr:ln.current,Q=ss(i,Q));var de=s.getDerivedStateFromProps,me=typeof de=="function"||typeof M.getSnapshotBeforeUpdate=="function";me||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(N!==l||O!==Q)&&Qd(i,M,l,Q),Qi=!1;var ce=i.memoizedState;M.state=ce,xa(i,l,M,c),O=i.memoizedState,N!==l||ce!==O||En.current||Qi?(typeof de=="function"&&(ku(i,s,de,l),O=i.memoizedState),(N=Qi||$d(i,s,N,l,ce,O,Q))?(me||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=O),M.props=l,M.state=O,M.context=Q,l=N):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,wd(t,i),N=i.memoizedProps,Q=i.type===i.elementType?N:ei(i.type,N),M.props=Q,me=i.pendingProps,ce=M.context,O=s.contextType,typeof O=="object"&&O!==null?O=Vn(O):(O=Tn(s)?Tr:ln.current,O=ss(i,O));var Pe=s.getDerivedStateFromProps;(de=typeof Pe=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(N!==me||ce!==O)&&Qd(i,M,l,O),Qi=!1,ce=i.memoizedState,M.state=ce,xa(i,l,M,c);var Ne=i.memoizedState;N!==me||ce!==Ne||En.current||Qi?(typeof Pe=="function"&&(ku(i,s,Pe,l),Ne=i.memoizedState),(Q=Qi||$d(i,s,Q,l,ce,Ne,O)||!1)?(de||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,Ne,O),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,Ne,O)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||N===t.memoizedProps&&ce===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||N===t.memoizedProps&&ce===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Ne),M.props=l,M.state=Ne,M.context=O,l=Q):(typeof M.componentDidUpdate!="function"||N===t.memoizedProps&&ce===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||N===t.memoizedProps&&ce===t.memoizedState||(i.flags|=1024),l=!1)}return Xu(t,i,s,l,h,c)}function Xu(t,i,s,l,c,h){lh(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return c&&pd(i,s,!1),Ci(t,i,h);l=i.stateNode,__.current=i;var N=M&&typeof s.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=us(i,t.child,null,h),i.child=us(i,null,N,h)):gn(t,i,N,h),i.memoizedState=l.state,c&&pd(i,s,!0),i.child}function ch(t){var i=t.stateNode;i.pendingContext?dd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&dd(t,i.context,!1),Cu(t,i.containerInfo)}function fh(t,i,s,l,c){return ls(),Su(c),i.flags|=256,gn(t,i,s,l),i.child}var Yu={dehydrated:null,treeContext:null,retryLane:0};function qu(t){return{baseLanes:t,cachePool:null,transitions:null}}function dh(t,i,s){var l=i.pendingProps,c=Nt.current,h=!1,M=(i.flags&128)!==0,N;if((N=M)||(N=t!==null&&t.memoizedState===null?!1:(c&2)!==0),N?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Ct(Nt,c&1),t===null)return yu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,h?(l=i.mode,h=i.child,M={mode:"hidden",children:M},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=M):h=ka(M,l,0,null),t=Nr(t,l,s,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=qu(s),i.memoizedState=Yu,t):ju(i,M));if(c=t.memoizedState,c!==null&&(N=c.dehydrated,N!==null))return v_(t,i,M,l,N,c,s);if(h){h=l.fallback,M=i.mode,c=t.child,N=c.sibling;var O={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==c?(l=i.child,l.childLanes=0,l.pendingProps=O,i.deletions=null):(l=sr(c,O),l.subtreeFlags=c.subtreeFlags&14680064),N!==null?h=sr(N,h):(h=Nr(h,M,s,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,M=t.child.memoizedState,M=M===null?qu(s):{baseLanes:M.baseLanes|s,cachePool:null,transitions:M.transitions},h.memoizedState=M,h.childLanes=t.childLanes&~s,i.memoizedState=Yu,l}return h=t.child,t=h.sibling,l=sr(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=s),l.return=i,l.sibling=null,t!==null&&(s=i.deletions,s===null?(i.deletions=[t],i.flags|=16):s.push(t)),i.child=l,i.memoizedState=null,l}function ju(t,i){return i=ka({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Ra(t,i,s,l){return l!==null&&Su(l),us(i,t.child,null,s),t=ju(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function v_(t,i,s,l,c,h,M){if(s)return i.flags&256?(i.flags&=-257,l=Gu(Error(n(422))),Ra(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,c=i.mode,l=ka({mode:"visible",children:l.children},c,0,null),h=Nr(h,c,M,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&us(i,t.child,null,M),i.child.memoizedState=qu(M),i.memoizedState=Yu,h);if((i.mode&1)===0)return Ra(t,i,M,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var N=l.dgst;return l=N,h=Error(n(419)),l=Gu(h,l,void 0),Ra(t,i,M,l)}if(N=(M&t.childLanes)!==0,wn||N){if(l=Qt,l!==null){switch(M&-M){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(l.suspendedLanes|M))!==0?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,Ai(t,c),ii(l,t,c,-1))}return cc(),l=Gu(Error(n(421))),Ra(t,i,M,l)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=b_.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,Nn=ji(c.nextSibling),Un=i,Ut=!0,Jn=null,t!==null&&(Hn[Gn++]=Ti,Hn[Gn++]=wi,Hn[Gn++]=wr,Ti=t.id,wi=t.overflow,wr=i),i=ju(i,l.children),i.flags|=4096,i)}function hh(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),wu(t.return,i,s)}function Ku(t,i,s,l,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=s,h.tailMode=c)}function ph(t,i,s){var l=i.pendingProps,c=l.revealOrder,h=l.tail;if(gn(t,i,l.children,s),l=Nt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&hh(t,s,i);else if(t.tag===19)hh(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Ct(Nt,l),(i.mode&1)===0)i.memoizedState=null;else switch(c){case"forwards":for(s=i.child,c=null;s!==null;)t=s.alternate,t!==null&&ya(t)===null&&(c=s),s=s.sibling;s=c,s===null?(c=i.child,i.child=null):(c=s.sibling,s.sibling=null),Ku(i,!1,c,s,h);break;case"backwards":for(s=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&ya(t)===null){i.child=c;break}t=c.sibling,c.sibling=s,s=c,c=t}Ku(i,!0,s,null,h);break;case"together":Ku(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ca(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ci(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Lr|=i.lanes,(s&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,s=sr(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=sr(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function x_(t,i,s){switch(i.tag){case 3:ch(i),ls();break;case 5:Cd(i);break;case 1:Tn(i.type)&&ca(i);break;case 4:Cu(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,c=i.memoizedProps.value;Ct(ga,l._currentValue),l._currentValue=c;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Ct(Nt,Nt.current&1),i.flags|=128,null):(s&i.child.childLanes)!==0?dh(t,i,s):(Ct(Nt,Nt.current&1),t=Ci(t,i,s),t!==null?t.sibling:null);Ct(Nt,Nt.current&1);break;case 19:if(l=(s&i.childLanes)!==0,(t.flags&128)!==0){if(l)return ph(t,i,s);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Ct(Nt,Nt.current),l)break;return null;case 22:case 23:return i.lanes=0,ah(t,i,s)}return Ci(t,i,s)}var mh,$u,gh,_h;mh=function(t,i){for(var s=i.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},$u=function(){},gh=function(t,i,s,l){var c=t.memoizedProps;if(c!==l){t=i.stateNode,Cr(mi.current);var h=null;switch(s){case"input":c=Ve(t,c),l=Ve(t,l),h=[];break;case"select":c=W({},c,{value:void 0}),l=W({},l,{value:void 0}),h=[];break;case"textarea":c=ge(t,c),l=ge(t,l),h=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=aa)}et(s,l);var M;s=null;for(Q in c)if(!l.hasOwnProperty(Q)&&c.hasOwnProperty(Q)&&c[Q]!=null)if(Q==="style"){var N=c[Q];for(M in N)N.hasOwnProperty(M)&&(s||(s={}),s[M]="")}else Q!=="dangerouslySetInnerHTML"&&Q!=="children"&&Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&Q!=="autoFocus"&&(a.hasOwnProperty(Q)?h||(h=[]):(h=h||[]).push(Q,null));for(Q in l){var O=l[Q];if(N=c?.[Q],l.hasOwnProperty(Q)&&O!==N&&(O!=null||N!=null))if(Q==="style")if(N){for(M in N)!N.hasOwnProperty(M)||O&&O.hasOwnProperty(M)||(s||(s={}),s[M]="");for(M in O)O.hasOwnProperty(M)&&N[M]!==O[M]&&(s||(s={}),s[M]=O[M])}else s||(h||(h=[]),h.push(Q,s)),s=O;else Q==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,N=N?N.__html:void 0,O!=null&&N!==O&&(h=h||[]).push(Q,O)):Q==="children"?typeof O!="string"&&typeof O!="number"||(h=h||[]).push(Q,""+O):Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&(a.hasOwnProperty(Q)?(O!=null&&Q==="onScroll"&&Pt("scroll",t),h||N===O||(h=[])):(h=h||[]).push(Q,O))}s&&(h=h||[]).push("style",s);var Q=h;(i.updateQueue=Q)&&(i.flags|=4)}},_h=function(t,i,s,l){s!==l&&(i.flags|=4)};function Eo(t,i){if(!Ut)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function cn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var c=t.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function y_(t,i,s){var l=i.pendingProps;switch(vu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(i),null;case 1:return Tn(i.type)&&ua(),cn(i),null;case 3:return l=i.stateNode,ds(),Lt(En),Lt(ln),bu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(pa(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Jn!==null&&(ac(Jn),Jn=null))),$u(t,i),cn(i),null;case 5:Pu(i);var c=Cr(vo.current);if(s=i.type,t!==null&&i.stateNode!=null)gh(t,i,s,l,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return cn(i),null}if(t=Cr(mi.current),pa(i)){l=i.stateNode,s=i.type;var h=i.memoizedProps;switch(l[pi]=i,l[ho]=h,t=(i.mode&1)!==0,s){case"dialog":Pt("cancel",l),Pt("close",l);break;case"iframe":case"object":case"embed":Pt("load",l);break;case"video":case"audio":for(c=0;c<uo.length;c++)Pt(uo[c],l);break;case"source":Pt("error",l);break;case"img":case"image":case"link":Pt("error",l),Pt("load",l);break;case"details":Pt("toggle",l);break;case"input":Je(l,h),Pt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Pt("invalid",l);break;case"textarea":pe(l,h),Pt("invalid",l)}et(s,h),c=null;for(var M in h)if(h.hasOwnProperty(M)){var N=h[M];M==="children"?typeof N=="string"?l.textContent!==N&&(h.suppressHydrationWarning!==!0&&oa(l.textContent,N,t),c=["children",N]):typeof N=="number"&&l.textContent!==""+N&&(h.suppressHydrationWarning!==!0&&oa(l.textContent,N,t),c=["children",""+N]):a.hasOwnProperty(M)&&N!=null&&M==="onScroll"&&Pt("scroll",l)}switch(s){case"input":ut(l),nt(l,h,!0);break;case"textarea":ut(l),ke(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=aa)}l=c,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ae(s)),t==="http://www.w3.org/1999/xhtml"?s==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(s,{is:l.is}):(t=M.createElement(s),s==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,s),t[pi]=i,t[ho]=l,mh(t,i,!1,!1),i.stateNode=t;e:{switch(M=gt(s,l),s){case"dialog":Pt("cancel",t),Pt("close",t),c=l;break;case"iframe":case"object":case"embed":Pt("load",t),c=l;break;case"video":case"audio":for(c=0;c<uo.length;c++)Pt(uo[c],t);c=l;break;case"source":Pt("error",t),c=l;break;case"img":case"image":case"link":Pt("error",t),Pt("load",t),c=l;break;case"details":Pt("toggle",t),c=l;break;case"input":Je(t,l),c=Ve(t,l),Pt("invalid",t);break;case"option":c=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},c=W({},l,{value:void 0}),Pt("invalid",t);break;case"textarea":pe(t,l),c=ge(t,l),Pt("invalid",t);break;default:c=l}et(s,c),N=c;for(h in N)if(N.hasOwnProperty(h)){var O=N[h];h==="style"?Ge(t,O):h==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&it(t,O)):h==="children"?typeof O=="string"?(s!=="textarea"||O!=="")&&he(t,O):typeof O=="number"&&he(t,""+O):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?O!=null&&h==="onScroll"&&Pt("scroll",t):O!=null&&A(t,h,O,M))}switch(s){case"input":ut(t),nt(t,l,!1);break;case"textarea":ut(t),ke(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Re(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?Z(t,!!l.multiple,h,!1):l.defaultValue!=null&&Z(t,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=aa)}switch(s){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return cn(i),null;case 6:if(t&&i.stateNode!=null)_h(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(s=Cr(vo.current),Cr(mi.current),pa(i)){if(l=i.stateNode,s=i.memoizedProps,l[pi]=i,(h=l.nodeValue!==s)&&(t=Un,t!==null))switch(t.tag){case 3:oa(l.nodeValue,s,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&oa(l.nodeValue,s,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(s.nodeType===9?s:s.ownerDocument).createTextNode(l),l[pi]=i,i.stateNode=l}return cn(i),null;case 13:if(Lt(Nt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ut&&Nn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)yd(),ls(),i.flags|=98560,h=!1;else if(h=pa(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[pi]=i}else ls(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;cn(i),h=!1}else Jn!==null&&(ac(Jn),Jn=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=s,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Nt.current&1)!==0?qt===0&&(qt=3):cc())),i.updateQueue!==null&&(i.flags|=4),cn(i),null);case 4:return ds(),$u(t,i),t===null&&co(i.stateNode.containerInfo),cn(i),null;case 10:return Tu(i.type._context),cn(i),null;case 17:return Tn(i.type)&&ua(),cn(i),null;case 19:if(Lt(Nt),h=i.memoizedState,h===null)return cn(i),null;if(l=(i.flags&128)!==0,M=h.rendering,M===null)if(l)Eo(h,!1);else{if(qt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=ya(t),M!==null){for(i.flags|=128,Eo(h,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=s,s=i.child;s!==null;)h=s,t=l,h.flags&=14680066,M=h.alternate,M===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=M.childLanes,h.lanes=M.lanes,h.child=M.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=M.memoizedProps,h.memoizedState=M.memoizedState,h.updateQueue=M.updateQueue,h.type=M.type,t=M.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),s=s.sibling;return Ct(Nt,Nt.current&1|2),i.child}t=t.sibling}h.tail!==null&&Le()>gs&&(i.flags|=128,l=!0,Eo(h,!1),i.lanes=4194304)}else{if(!l)if(t=ya(M),t!==null){if(i.flags|=128,l=!0,s=t.updateQueue,s!==null&&(i.updateQueue=s,i.flags|=4),Eo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!M.alternate&&!Ut)return cn(i),null}else 2*Le()-h.renderingStartTime>gs&&s!==1073741824&&(i.flags|=128,l=!0,Eo(h,!1),i.lanes=4194304);h.isBackwards?(M.sibling=i.child,i.child=M):(s=h.last,s!==null?s.sibling=M:i.child=M,h.last=M)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Le(),i.sibling=null,s=Nt.current,Ct(Nt,l?s&1|2:s&1),i):(cn(i),null);case 22:case 23:return uc(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(In&1073741824)!==0&&(cn(i),i.subtreeFlags&6&&(i.flags|=8192)):cn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function S_(t,i){switch(vu(i),i.tag){case 1:return Tn(i.type)&&ua(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ds(),Lt(En),Lt(ln),bu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Pu(i),null;case 13:if(Lt(Nt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ls()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Lt(Nt),null;case 4:return ds(),null;case 10:return Tu(i.type._context),null;case 22:case 23:return uc(),null;case 24:return null;default:return null}}var Pa=!1,fn=!1,M_=typeof WeakSet=="function"?WeakSet:Set,be=null;function ps(t,i){var s=t.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(l){zt(t,i,l)}else s.current=null}function Zu(t,i,s){try{s()}catch(l){zt(t,i,l)}}var vh=!1;function E_(t,i){if(uu=Ko,t=$f(),tu(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var c=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break e}var M=0,N=-1,O=-1,Q=0,de=0,me=t,ce=null;t:for(;;){for(var Pe;me!==s||c!==0&&me.nodeType!==3||(N=M+c),me!==h||l!==0&&me.nodeType!==3||(O=M+l),me.nodeType===3&&(M+=me.nodeValue.length),(Pe=me.firstChild)!==null;)ce=me,me=Pe;for(;;){if(me===t)break t;if(ce===s&&++Q===c&&(N=M),ce===h&&++de===l&&(O=M),(Pe=me.nextSibling)!==null)break;me=ce,ce=me.parentNode}me=Pe}s=N===-1||O===-1?null:{start:N,end:O}}else s=null}s=s||{start:0,end:0}}else s=null;for(cu={focusedElem:t,selectionRange:s},Ko=!1,be=i;be!==null;)if(i=be,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,be=t;else for(;be!==null;){i=be;try{var Ne=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ne!==null){var Fe=Ne.memoizedProps,kt=Ne.memoizedState,X=i.stateNode,B=X.getSnapshotBeforeUpdate(i.elementType===i.type?Fe:ei(i.type,Fe),kt);X.__reactInternalSnapshotBeforeUpdate=B}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(xe){zt(i,i.return,xe)}if(t=i.sibling,t!==null){t.return=i.return,be=t;break}be=i.return}return Ne=vh,vh=!1,Ne}function To(t,i,s){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&Zu(i,s,h)}c=c.next}while(c!==l)}}function La(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&t)===t){var l=s.create;s.destroy=l()}s=s.next}while(s!==i)}}function Qu(t){var i=t.ref;if(i!==null){var s=t.stateNode;t.tag,t=s,typeof i=="function"?i(t):i.current=t}}function xh(t){var i=t.alternate;i!==null&&(t.alternate=null,xh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[pi],delete i[ho],delete i[pu],delete i[s_],delete i[o_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function yh(t){return t.tag===5||t.tag===3||t.tag===4}function Sh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||yh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ju(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.nodeType===8?s.parentNode.insertBefore(t,i):s.insertBefore(t,i):(s.nodeType===8?(i=s.parentNode,i.insertBefore(t,s)):(i=s,i.appendChild(t)),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=aa));else if(l!==4&&(t=t.child,t!==null))for(Ju(t,i,s),t=t.sibling;t!==null;)Ju(t,i,s),t=t.sibling}function ec(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(ec(t,i,s),t=t.sibling;t!==null;)ec(t,i,s),t=t.sibling}var rn=null,ti=!1;function er(t,i,s){for(s=s.child;s!==null;)Mh(t,i,s),s=s.sibling}function Mh(t,i,s){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Sn,s)}catch{}switch(s.tag){case 5:fn||ps(s,i);case 6:var l=rn,c=ti;rn=null,er(t,i,s),rn=l,ti=c,rn!==null&&(ti?(t=rn,s=s.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)):rn.removeChild(s.stateNode));break;case 18:rn!==null&&(ti?(t=rn,s=s.stateNode,t.nodeType===8?hu(t.parentNode,s):t.nodeType===1&&hu(t,s),to(t)):hu(rn,s.stateNode));break;case 4:l=rn,c=ti,rn=s.stateNode.containerInfo,ti=!0,er(t,i,s),rn=l,ti=c;break;case 0:case 11:case 14:case 15:if(!fn&&(l=s.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var h=c,M=h.destroy;h=h.tag,M!==void 0&&((h&2)!==0||(h&4)!==0)&&Zu(s,i,M),c=c.next}while(c!==l)}er(t,i,s);break;case 1:if(!fn&&(ps(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=s.memoizedProps,l.state=s.memoizedState,l.componentWillUnmount()}catch(N){zt(s,i,N)}er(t,i,s);break;case 21:er(t,i,s);break;case 22:s.mode&1?(fn=(l=fn)||s.memoizedState!==null,er(t,i,s),fn=l):er(t,i,s);break;default:er(t,i,s)}}function Eh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var s=t.stateNode;s===null&&(s=t.stateNode=new M_),i.forEach(function(l){var c=D_.bind(null,t,l);s.has(l)||(s.add(l),l.then(c,c))})}}function ni(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var c=s[l];try{var h=t,M=i,N=M;e:for(;N!==null;){switch(N.tag){case 5:rn=N.stateNode,ti=!1;break e;case 3:rn=N.stateNode.containerInfo,ti=!0;break e;case 4:rn=N.stateNode.containerInfo,ti=!0;break e}N=N.return}if(rn===null)throw Error(n(160));Mh(h,M,c),rn=null,ti=!1;var O=c.alternate;O!==null&&(O.return=null),c.return=null}catch(Q){zt(c,i,Q)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Th(i,t),i=i.sibling}function Th(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ni(i,t),_i(t),l&4){try{To(3,t,t.return),La(3,t)}catch(Fe){zt(t,t.return,Fe)}try{To(5,t,t.return)}catch(Fe){zt(t,t.return,Fe)}}break;case 1:ni(i,t),_i(t),l&512&&s!==null&&ps(s,s.return);break;case 5:if(ni(i,t),_i(t),l&512&&s!==null&&ps(s,s.return),t.flags&32){var c=t.stateNode;try{he(c,"")}catch(Fe){zt(t,t.return,Fe)}}if(l&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,M=s!==null?s.memoizedProps:h,N=t.type,O=t.updateQueue;if(t.updateQueue=null,O!==null)try{N==="input"&&h.type==="radio"&&h.name!=null&&Be(c,h),gt(N,M);var Q=gt(N,h);for(M=0;M<O.length;M+=2){var de=O[M],me=O[M+1];de==="style"?Ge(c,me):de==="dangerouslySetInnerHTML"?it(c,me):de==="children"?he(c,me):A(c,de,me,Q)}switch(N){case"input":Tt(c,h);break;case"textarea":_e(c,h);break;case"select":var ce=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var Pe=h.value;Pe!=null?Z(c,!!h.multiple,Pe,!1):ce!==!!h.multiple&&(h.defaultValue!=null?Z(c,!!h.multiple,h.defaultValue,!0):Z(c,!!h.multiple,h.multiple?[]:"",!1))}c[ho]=h}catch(Fe){zt(t,t.return,Fe)}}break;case 6:if(ni(i,t),_i(t),l&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(Fe){zt(t,t.return,Fe)}}break;case 3:if(ni(i,t),_i(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{to(i.containerInfo)}catch(Fe){zt(t,t.return,Fe)}break;case 4:ni(i,t),_i(t);break;case 13:ni(i,t),_i(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(ic=Le())),l&4&&Eh(t);break;case 22:if(de=s!==null&&s.memoizedState!==null,t.mode&1?(fn=(Q=fn)||de,ni(i,t),fn=Q):ni(i,t),_i(t),l&8192){if(Q=t.memoizedState!==null,(t.stateNode.isHidden=Q)&&!de&&(t.mode&1)!==0)for(be=t,de=t.child;de!==null;){for(me=be=de;be!==null;){switch(ce=be,Pe=ce.child,ce.tag){case 0:case 11:case 14:case 15:To(4,ce,ce.return);break;case 1:ps(ce,ce.return);var Ne=ce.stateNode;if(typeof Ne.componentWillUnmount=="function"){l=ce,s=ce.return;try{i=l,Ne.props=i.memoizedProps,Ne.state=i.memoizedState,Ne.componentWillUnmount()}catch(Fe){zt(l,s,Fe)}}break;case 5:ps(ce,ce.return);break;case 22:if(ce.memoizedState!==null){Rh(me);continue}}Pe!==null?(Pe.return=ce,be=Pe):Rh(me)}de=de.sibling}e:for(de=null,me=t;;){if(me.tag===5){if(de===null){de=me;try{c=me.stateNode,Q?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(N=me.stateNode,O=me.memoizedProps.style,M=O!=null&&O.hasOwnProperty("display")?O.display:null,N.style.display=Ze("display",M))}catch(Fe){zt(t,t.return,Fe)}}}else if(me.tag===6){if(de===null)try{me.stateNode.nodeValue=Q?"":me.memoizedProps}catch(Fe){zt(t,t.return,Fe)}}else if((me.tag!==22&&me.tag!==23||me.memoizedState===null||me===t)&&me.child!==null){me.child.return=me,me=me.child;continue}if(me===t)break e;for(;me.sibling===null;){if(me.return===null||me.return===t)break e;de===me&&(de=null),me=me.return}de===me&&(de=null),me.sibling.return=me.return,me=me.sibling}}break;case 19:ni(i,t),_i(t),l&4&&Eh(t);break;case 21:break;default:ni(i,t),_i(t)}}function _i(t){var i=t.flags;if(i&2){try{e:{for(var s=t.return;s!==null;){if(yh(s)){var l=s;break e}s=s.return}throw Error(n(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(he(c,""),l.flags&=-33);var h=Sh(t);ec(t,h,c);break;case 3:case 4:var M=l.stateNode.containerInfo,N=Sh(t);Ju(t,N,M);break;default:throw Error(n(161))}}catch(O){zt(t,t.return,O)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function T_(t,i,s){be=t,wh(t)}function wh(t,i,s){for(var l=(t.mode&1)!==0;be!==null;){var c=be,h=c.child;if(c.tag===22&&l){var M=c.memoizedState!==null||Pa;if(!M){var N=c.alternate,O=N!==null&&N.memoizedState!==null||fn;N=Pa;var Q=fn;if(Pa=M,(fn=O)&&!Q)for(be=c;be!==null;)M=be,O=M.child,M.tag===22&&M.memoizedState!==null?Ch(c):O!==null?(O.return=M,be=O):Ch(c);for(;h!==null;)be=h,wh(h),h=h.sibling;be=c,Pa=N,fn=Q}Ah(t)}else(c.subtreeFlags&8772)!==0&&h!==null?(h.return=c,be=h):Ah(t)}}function Ah(t){for(;be!==null;){var i=be;if((i.flags&8772)!==0){var s=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:fn||La(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!fn)if(s===null)l.componentDidMount();else{var c=i.elementType===i.type?s.memoizedProps:ei(i.type,s.memoizedProps);l.componentDidUpdate(c,s.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Rd(i,h,l);break;case 3:var M=i.updateQueue;if(M!==null){if(s=null,i.child!==null)switch(i.child.tag){case 5:s=i.child.stateNode;break;case 1:s=i.child.stateNode}Rd(i,M,s)}break;case 5:var N=i.stateNode;if(s===null&&i.flags&4){s=N;var O=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&s.focus();break;case"img":O.src&&(s.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var Q=i.alternate;if(Q!==null){var de=Q.memoizedState;if(de!==null){var me=de.dehydrated;me!==null&&to(me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}fn||i.flags&512&&Qu(i)}catch(ce){zt(i,i.return,ce)}}if(i===t){be=null;break}if(s=i.sibling,s!==null){s.return=i.return,be=s;break}be=i.return}}function Rh(t){for(;be!==null;){var i=be;if(i===t){be=null;break}var s=i.sibling;if(s!==null){s.return=i.return,be=s;break}be=i.return}}function Ch(t){for(;be!==null;){var i=be;try{switch(i.tag){case 0:case 11:case 15:var s=i.return;try{La(4,i)}catch(O){zt(i,s,O)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var c=i.return;try{l.componentDidMount()}catch(O){zt(i,c,O)}}var h=i.return;try{Qu(i)}catch(O){zt(i,h,O)}break;case 5:var M=i.return;try{Qu(i)}catch(O){zt(i,M,O)}}}catch(O){zt(i,i.return,O)}if(i===t){be=null;break}var N=i.sibling;if(N!==null){N.return=i.return,be=N;break}be=i.return}}var w_=Math.ceil,ba=b.ReactCurrentDispatcher,tc=b.ReactCurrentOwner,Xn=b.ReactCurrentBatchConfig,_t=0,Qt=null,Vt=null,sn=0,In=0,ms=Ki(0),qt=0,wo=null,Lr=0,Da=0,nc=0,Ao=null,An=null,ic=0,gs=1/0,Pi=null,Ua=!1,rc=null,tr=null,Na=!1,nr=null,Ia=0,Ro=0,sc=null,Fa=-1,Oa=0;function _n(){return(_t&6)!==0?Le():Fa!==-1?Fa:Fa=Le()}function ir(t){return(t.mode&1)===0?1:(_t&2)!==0&&sn!==0?sn&-sn:l_.transition!==null?(Oa===0&&(Oa=Yo()),Oa):(t=Mt,t!==0||(t=window.event,t=t===void 0?16:Lf(t.type)),t)}function ii(t,i,s,l){if(50<Ro)throw Ro=0,sc=null,Error(n(185));$s(t,s,l),((_t&2)===0||t!==Qt)&&(t===Qt&&((_t&2)===0&&(Da|=s),qt===4&&rr(t,sn)),Rn(t,l),s===1&&_t===0&&(i.mode&1)===0&&(gs=Le()+500,fa&&Zi()))}function Rn(t,i){var s=t.callbackNode;Mn(t,i);var l=kn(t,t===Qt?sn:0);if(l===0)s!==null&&Ce(s),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(s!=null&&Ce(s),i===1)t.tag===0?a_(Lh.bind(null,t)):md(Lh.bind(null,t)),i_(function(){(_t&6)===0&&Zi()}),s=null;else{switch(Mf(l)){case 1:s=Qe;break;case 4:s=tt;break;case 16:s=Rt;break;case 536870912:s=Bt;break;default:s=Rt}s=zh(s,Ph.bind(null,t))}t.callbackPriority=i,t.callbackNode=s}}function Ph(t,i){if(Fa=-1,Oa=0,(_t&6)!==0)throw Error(n(327));var s=t.callbackNode;if(_s()&&t.callbackNode!==s)return null;var l=kn(t,t===Qt?sn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=za(t,l);else{i=l;var c=_t;_t|=2;var h=Dh();(Qt!==t||sn!==i)&&(Pi=null,gs=Le()+500,Dr(t,i));do try{C_();break}catch(N){bh(t,N)}while(!0);Eu(),ba.current=h,_t=c,Vt!==null?i=0:(Qt=null,sn=0,i=qt)}if(i!==0){if(i===2&&(c=Mr(t),c!==0&&(l=c,i=oc(t,c))),i===1)throw s=wo,Dr(t,0),rr(t,l),Rn(t,Le()),s;if(i===6)rr(t,l);else{if(c=t.current.alternate,(l&30)===0&&!A_(c)&&(i=za(t,l),i===2&&(h=Mr(t),h!==0&&(l=h,i=oc(t,h))),i===1))throw s=wo,Dr(t,0),rr(t,l),Rn(t,Le()),s;switch(t.finishedWork=c,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Ur(t,An,Pi);break;case 3:if(rr(t,l),(l&130023424)===l&&(i=ic+500-Le(),10<i)){if(kn(t,0)!==0)break;if(c=t.suspendedLanes,(c&l)!==l){_n(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=du(Ur.bind(null,t,An,Pi),i);break}Ur(t,An,Pi);break;case 4:if(rr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,c=-1;0<l;){var M=31-mn(l);h=1<<M,M=i[M],M>c&&(c=M),l&=~h}if(l=c,l=Le()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*w_(l/1960))-l,10<l){t.timeoutHandle=du(Ur.bind(null,t,An,Pi),l);break}Ur(t,An,Pi);break;case 5:Ur(t,An,Pi);break;default:throw Error(n(329))}}}return Rn(t,Le()),t.callbackNode===s?Ph.bind(null,t):null}function oc(t,i){var s=Ao;return t.current.memoizedState.isDehydrated&&(Dr(t,i).flags|=256),t=za(t,i),t!==2&&(i=An,An=s,i!==null&&ac(i)),t}function ac(t){An===null?An=t:An.push.apply(An,t)}function A_(t){for(var i=t;;){if(i.flags&16384){var s=i.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var l=0;l<s.length;l++){var c=s[l],h=c.getSnapshot;c=c.value;try{if(!Qn(h(),c))return!1}catch{return!1}}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function rr(t,i){for(i&=~nc,i&=~Da,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var s=31-mn(i),l=1<<s;t[s]=-1,i&=~l}}function Lh(t){if((_t&6)!==0)throw Error(n(327));_s();var i=kn(t,0);if((i&1)===0)return Rn(t,Le()),null;var s=za(t,i);if(t.tag!==0&&s===2){var l=Mr(t);l!==0&&(i=l,s=oc(t,l))}if(s===1)throw s=wo,Dr(t,0),rr(t,i),Rn(t,Le()),s;if(s===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Ur(t,An,Pi),Rn(t,Le()),null}function lc(t,i){var s=_t;_t|=1;try{return t(i)}finally{_t=s,_t===0&&(gs=Le()+500,fa&&Zi())}}function br(t){nr!==null&&nr.tag===0&&(_t&6)===0&&_s();var i=_t;_t|=1;var s=Xn.transition,l=Mt;try{if(Xn.transition=null,Mt=1,t)return t()}finally{Mt=l,Xn.transition=s,_t=i,(_t&6)===0&&Zi()}}function uc(){In=ms.current,Lt(ms)}function Dr(t,i){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;if(s!==-1&&(t.timeoutHandle=-1,n_(s)),Vt!==null)for(s=Vt.return;s!==null;){var l=s;switch(vu(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&ua();break;case 3:ds(),Lt(En),Lt(ln),bu();break;case 5:Pu(l);break;case 4:ds();break;case 13:Lt(Nt);break;case 19:Lt(Nt);break;case 10:Tu(l.type._context);break;case 22:case 23:uc()}s=s.return}if(Qt=t,Vt=t=sr(t.current,null),sn=In=i,qt=0,wo=null,nc=Da=Lr=0,An=Ao=null,Rr!==null){for(i=0;i<Rr.length;i++)if(s=Rr[i],l=s.interleaved,l!==null){s.interleaved=null;var c=l.next,h=s.pending;if(h!==null){var M=h.next;h.next=c,l.next=M}s.pending=l}Rr=null}return t}function bh(t,i){do{var s=Vt;try{if(Eu(),Sa.current=wa,Ma){for(var l=It.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}Ma=!1}if(Pr=0,Zt=Yt=It=null,xo=!1,yo=0,tc.current=null,s===null||s.return===null){qt=1,wo=i,Vt=null;break}e:{var h=t,M=s.return,N=s,O=i;if(i=sn,N.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var Q=O,de=N,me=de.tag;if((de.mode&1)===0&&(me===0||me===11||me===15)){var ce=de.alternate;ce?(de.updateQueue=ce.updateQueue,de.memoizedState=ce.memoizedState,de.lanes=ce.lanes):(de.updateQueue=null,de.memoizedState=null)}var Pe=nh(M);if(Pe!==null){Pe.flags&=-257,ih(Pe,M,N,h,i),Pe.mode&1&&th(h,Q,i),i=Pe,O=Q;var Ne=i.updateQueue;if(Ne===null){var Fe=new Set;Fe.add(O),i.updateQueue=Fe}else Ne.add(O);break e}else{if((i&1)===0){th(h,Q,i),cc();break e}O=Error(n(426))}}else if(Ut&&N.mode&1){var kt=nh(M);if(kt!==null){(kt.flags&65536)===0&&(kt.flags|=256),ih(kt,M,N,h,i),Su(hs(O,N));break e}}h=O=hs(O,N),qt!==4&&(qt=2),Ao===null?Ao=[h]:Ao.push(h),h=M;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var X=Jd(h,O,i);Ad(h,X);break e;case 1:N=O;var B=h.type,K=h.stateNode;if((h.flags&128)===0&&(typeof B.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(tr===null||!tr.has(K)))){h.flags|=65536,i&=-i,h.lanes|=i;var xe=eh(h,N,i);Ad(h,xe);break e}}h=h.return}while(h!==null)}Nh(s)}catch(ze){i=ze,Vt===s&&s!==null&&(Vt=s=s.return);continue}break}while(!0)}function Dh(){var t=ba.current;return ba.current=wa,t===null?wa:t}function cc(){(qt===0||qt===3||qt===2)&&(qt=4),Qt===null||(Lr&268435455)===0&&(Da&268435455)===0||rr(Qt,sn)}function za(t,i){var s=_t;_t|=2;var l=Dh();(Qt!==t||sn!==i)&&(Pi=null,Dr(t,i));do try{R_();break}catch(c){bh(t,c)}while(!0);if(Eu(),_t=s,ba.current=l,Vt!==null)throw Error(n(261));return Qt=null,sn=0,qt}function R_(){for(;Vt!==null;)Uh(Vt)}function C_(){for(;Vt!==null&&!He();)Uh(Vt)}function Uh(t){var i=Oh(t.alternate,t,In);t.memoizedProps=t.pendingProps,i===null?Nh(t):Vt=i,tc.current=null}function Nh(t){var i=t;do{var s=i.alternate;if(t=i.return,(i.flags&32768)===0){if(s=y_(s,i,In),s!==null){Vt=s;return}}else{if(s=S_(s,i),s!==null){s.flags&=32767,Vt=s;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{qt=6,Vt=null;return}}if(i=i.sibling,i!==null){Vt=i;return}Vt=i=t}while(i!==null);qt===0&&(qt=5)}function Ur(t,i,s){var l=Mt,c=Xn.transition;try{Xn.transition=null,Mt=1,P_(t,i,s,l)}finally{Xn.transition=c,Mt=l}return null}function P_(t,i,s,l){do _s();while(nr!==null);if((_t&6)!==0)throw Error(n(327));s=t.finishedWork;var c=t.finishedLanes;if(s===null)return null;if(t.finishedWork=null,t.finishedLanes=0,s===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=s.lanes|s.childLanes;if(ug(t,h),t===Qt&&(Vt=Qt=null,sn=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||Na||(Na=!0,zh(Rt,function(){return _s(),null})),h=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||h){h=Xn.transition,Xn.transition=null;var M=Mt;Mt=1;var N=_t;_t|=4,tc.current=null,E_(t,s),Th(s,t),Kg(cu),Ko=!!uu,cu=uu=null,t.current=s,T_(s),je(),_t=N,Mt=M,Xn.transition=h}else t.current=s;if(Na&&(Na=!1,nr=t,Ia=c),h=t.pendingLanes,h===0&&(tr=null),ot(s.stateNode),Rn(t,Le()),i!==null)for(l=t.onRecoverableError,s=0;s<i.length;s++)c=i[s],l(c.value,{componentStack:c.stack,digest:c.digest});if(Ua)throw Ua=!1,t=rc,rc=null,t;return(Ia&1)!==0&&t.tag!==0&&_s(),h=t.pendingLanes,(h&1)!==0?t===sc?Ro++:(Ro=0,sc=t):Ro=0,Zi(),null}function _s(){if(nr!==null){var t=Mf(Ia),i=Xn.transition,s=Mt;try{if(Xn.transition=null,Mt=16>t?16:t,nr===null)var l=!1;else{if(t=nr,nr=null,Ia=0,(_t&6)!==0)throw Error(n(331));var c=_t;for(_t|=4,be=t.current;be!==null;){var h=be,M=h.child;if((be.flags&16)!==0){var N=h.deletions;if(N!==null){for(var O=0;O<N.length;O++){var Q=N[O];for(be=Q;be!==null;){var de=be;switch(de.tag){case 0:case 11:case 15:To(8,de,h)}var me=de.child;if(me!==null)me.return=de,be=me;else for(;be!==null;){de=be;var ce=de.sibling,Pe=de.return;if(xh(de),de===Q){be=null;break}if(ce!==null){ce.return=Pe,be=ce;break}be=Pe}}}var Ne=h.alternate;if(Ne!==null){var Fe=Ne.child;if(Fe!==null){Ne.child=null;do{var kt=Fe.sibling;Fe.sibling=null,Fe=kt}while(Fe!==null)}}be=h}}if((h.subtreeFlags&2064)!==0&&M!==null)M.return=h,be=M;else e:for(;be!==null;){if(h=be,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:To(9,h,h.return)}var X=h.sibling;if(X!==null){X.return=h.return,be=X;break e}be=h.return}}var B=t.current;for(be=B;be!==null;){M=be;var K=M.child;if((M.subtreeFlags&2064)!==0&&K!==null)K.return=M,be=K;else e:for(M=B;be!==null;){if(N=be,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:La(9,N)}}catch(ze){zt(N,N.return,ze)}if(N===M){be=null;break e}var xe=N.sibling;if(xe!==null){xe.return=N.return,be=xe;break e}be=N.return}}if(_t=c,Zi(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Sn,t)}catch{}l=!0}return l}finally{Mt=s,Xn.transition=i}}return!1}function Ih(t,i,s){i=hs(s,i),i=Jd(t,i,1),t=Ji(t,i,1),i=_n(),t!==null&&($s(t,1,i),Rn(t,i))}function zt(t,i,s){if(t.tag===3)Ih(t,t,s);else for(;i!==null;){if(i.tag===3){Ih(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(tr===null||!tr.has(l))){t=hs(s,t),t=eh(i,t,1),i=Ji(i,t,1),t=_n(),i!==null&&($s(i,1,t),Rn(i,t));break}}i=i.return}}function L_(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),i=_n(),t.pingedLanes|=t.suspendedLanes&s,Qt===t&&(sn&s)===s&&(qt===4||qt===3&&(sn&130023424)===sn&&500>Le()-ic?Dr(t,0):nc|=s),Rn(t,i)}function Fh(t,i){i===0&&((t.mode&1)===0?i=1:(i=Hi,Hi<<=1,(Hi&130023424)===0&&(Hi=4194304)));var s=_n();t=Ai(t,i),t!==null&&($s(t,i,s),Rn(t,s))}function b_(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),Fh(t,s)}function D_(t,i){var s=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(s=c.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Fh(t,s)}var Oh;Oh=function(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps||En.current)wn=!0;else{if((t.lanes&s)===0&&(i.flags&128)===0)return wn=!1,x_(t,i,s);wn=(t.flags&131072)!==0}else wn=!1,Ut&&(i.flags&1048576)!==0&&gd(i,ha,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Ca(t,i),t=i.pendingProps;var c=ss(i,ln.current);fs(i,s),c=Nu(null,i,l,t,c,s);var h=Iu();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Tn(l)?(h=!0,ca(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,Ru(i),c.updater=Aa,i.stateNode=c,c._reactInternals=i,Hu(i,l,t,s),i=Xu(null,i,l,!0,h,s)):(i.tag=0,Ut&&h&&_u(i),gn(null,i,c,s),i=i.child),i;case 16:l=i.elementType;e:{switch(Ca(t,i),t=i.pendingProps,c=l._init,l=c(l._payload),i.type=l,c=i.tag=N_(l),t=ei(l,t),c){case 0:i=Wu(null,i,l,t,s);break e;case 1:i=uh(null,i,l,t,s);break e;case 11:i=rh(null,i,l,t,s);break e;case 14:i=sh(null,i,l,ei(l.type,t),s);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ei(l,c),Wu(t,i,l,c,s);case 1:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ei(l,c),uh(t,i,l,c,s);case 3:e:{if(ch(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,c=h.element,wd(t,i),xa(i,l,null,s);var M=i.memoizedState;if(l=M.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=hs(Error(n(423)),i),i=fh(t,i,l,s,c);break e}else if(l!==c){c=hs(Error(n(424)),i),i=fh(t,i,l,s,c);break e}else for(Nn=ji(i.stateNode.containerInfo.firstChild),Un=i,Ut=!0,Jn=null,s=Ed(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(ls(),l===c){i=Ci(t,i,s);break e}gn(t,i,l,s)}i=i.child}return i;case 5:return Cd(i),t===null&&yu(i),l=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,M=c.children,fu(l,c)?M=null:h!==null&&fu(l,h)&&(i.flags|=32),lh(t,i),gn(t,i,M,s),i.child;case 6:return t===null&&yu(i),null;case 13:return dh(t,i,s);case 4:return Cu(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=us(i,null,l,s):gn(t,i,l,s),i.child;case 11:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ei(l,c),rh(t,i,l,c,s);case 7:return gn(t,i,i.pendingProps,s),i.child;case 8:return gn(t,i,i.pendingProps.children,s),i.child;case 12:return gn(t,i,i.pendingProps.children,s),i.child;case 10:e:{if(l=i.type._context,c=i.pendingProps,h=i.memoizedProps,M=c.value,Ct(ga,l._currentValue),l._currentValue=M,h!==null)if(Qn(h.value,M)){if(h.children===c.children&&!En.current){i=Ci(t,i,s);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var N=h.dependencies;if(N!==null){M=h.child;for(var O=N.firstContext;O!==null;){if(O.context===l){if(h.tag===1){O=Ri(-1,s&-s),O.tag=2;var Q=h.updateQueue;if(Q!==null){Q=Q.shared;var de=Q.pending;de===null?O.next=O:(O.next=de.next,de.next=O),Q.pending=O}}h.lanes|=s,O=h.alternate,O!==null&&(O.lanes|=s),wu(h.return,s,i),N.lanes|=s;break}O=O.next}}else if(h.tag===10)M=h.type===i.type?null:h.child;else if(h.tag===18){if(M=h.return,M===null)throw Error(n(341));M.lanes|=s,N=M.alternate,N!==null&&(N.lanes|=s),wu(M,s,i),M=h.sibling}else M=h.child;if(M!==null)M.return=h;else for(M=h;M!==null;){if(M===i){M=null;break}if(h=M.sibling,h!==null){h.return=M.return,M=h;break}M=M.return}h=M}gn(t,i,c.children,s),i=i.child}return i;case 9:return c=i.type,l=i.pendingProps.children,fs(i,s),c=Vn(c),l=l(c),i.flags|=1,gn(t,i,l,s),i.child;case 14:return l=i.type,c=ei(l,i.pendingProps),c=ei(l.type,c),sh(t,i,l,c,s);case 15:return oh(t,i,i.type,i.pendingProps,s);case 17:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ei(l,c),Ca(t,i),i.tag=1,Tn(l)?(t=!0,ca(i)):t=!1,fs(i,s),Zd(i,l,c),Hu(i,l,c,s),Xu(null,i,l,!0,t,s);case 19:return ph(t,i,s);case 22:return ah(t,i,s)}throw Error(n(156,i.tag))};function zh(t,i){return ee(t,i)}function U_(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,i,s,l){return new U_(t,i,s,l)}function fc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function N_(t){if(typeof t=="function")return fc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ue)return 11;if(t===te)return 14}return 2}function sr(t,i){var s=t.alternate;return s===null?(s=Yn(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&14680064,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s}function Ba(t,i,s,l,c,h){var M=2;if(l=t,typeof t=="function")fc(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case I:return Nr(s.children,c,h,i);case le:M=8,c|=8;break;case R:return t=Yn(12,s,i,c|2),t.elementType=R,t.lanes=h,t;case ve:return t=Yn(13,s,i,c),t.elementType=ve,t.lanes=h,t;case H:return t=Yn(19,s,i,c),t.elementType=H,t.lanes=h,t;case ae:return ka(s,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case D:M=10;break e;case oe:M=9;break e;case ue:M=11;break e;case te:M=14;break e;case se:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Yn(M,s,i,c),i.elementType=t,i.type=l,i.lanes=h,i}function Nr(t,i,s,l){return t=Yn(7,t,l,i),t.lanes=s,t}function ka(t,i,s,l){return t=Yn(22,t,l,i),t.elementType=ae,t.lanes=s,t.stateNode={isHidden:!1},t}function dc(t,i,s){return t=Yn(6,t,null,i),t.lanes=s,t}function hc(t,i,s){return i=Yn(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function I_(t,i,s,l,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kr(0),this.expirationTimes=Kr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kr(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function pc(t,i,s,l,c,h,M,N,O){return t=new I_(t,i,s,N,O),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Yn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ru(h),t}function F_(t,i,s){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:l==null?null:""+l,children:t,containerInfo:i,implementation:s}}function Bh(t){if(!t)return $i;t=t._reactInternals;e:{if(yi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Tn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var s=t.type;if(Tn(s))return hd(t,s,i)}return i}function kh(t,i,s,l,c,h,M,N,O){return t=pc(s,l,!0,t,c,h,M,N,O),t.context=Bh(null),s=t.current,l=_n(),c=ir(s),h=Ri(l,c),h.callback=i??null,Ji(s,h,c),t.current.lanes=c,$s(t,c,l),Rn(t,l),t}function Ha(t,i,s,l){var c=i.current,h=_n(),M=ir(c);return s=Bh(s),i.context===null?i.context=s:i.pendingContext=s,i=Ri(h,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=Ji(c,i,M),t!==null&&(ii(t,c,M,h),va(t,c,M)),M}function Ga(t){return t=t.current,t.child?(t.child.tag===5,t.child.stateNode):null}function Hh(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function mc(t,i){Hh(t,i),(t=t.alternate)&&Hh(t,i)}function O_(){return null}var Gh=typeof reportError=="function"?reportError:function(t){console.error(t)};function gc(t){this._internalRoot=t}Va.prototype.render=gc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Ha(t,i,null,null)},Va.prototype.unmount=gc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;br(function(){Ha(null,t,null,null)}),i[Mi]=null}};function Va(t){this._internalRoot=t}Va.prototype.unstable_scheduleHydration=function(t){if(t){var i=wf();t={blockedOn:null,target:t,priority:i};for(var s=0;s<Xi.length&&i!==0&&i<Xi[s].priority;s++);Xi.splice(s,0,t),s===0&&Cf(t)}};function _c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Wa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vh(){}function z_(t,i,s,l,c){if(c){if(typeof l=="function"){var h=l;l=function(){var Q=Ga(M);h.call(Q)}}var M=kh(i,l,t,0,null,!1,!1,"",Vh);return t._reactRootContainer=M,t[Mi]=M.current,co(t.nodeType===8?t.parentNode:t),br(),M}for(;c=t.lastChild;)t.removeChild(c);if(typeof l=="function"){var N=l;l=function(){var Q=Ga(O);N.call(Q)}}var O=pc(t,0,!1,null,null,!1,!1,"",Vh);return t._reactRootContainer=O,t[Mi]=O.current,co(t.nodeType===8?t.parentNode:t),br(function(){Ha(i,O,s,l)}),O}function Xa(t,i,s,l,c){var h=s._reactRootContainer;if(h){var M=h;if(typeof c=="function"){var N=c;c=function(){var O=Ga(M);N.call(O)}}Ha(i,M,t,c)}else M=z_(s,i,t,c,l);return Ga(M)}Ef=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var s=Ot(i.pendingLanes);s!==0&&(Hl(i,s|1),Rn(i,Le()),(_t&6)===0&&(gs=Le()+500,Zi()))}break;case 13:br(function(){var l=Ai(t,1);if(l!==null){var c=_n();ii(l,t,1,c)}}),mc(t,1)}},Gl=function(t){if(t.tag===13){var i=Ai(t,134217728);if(i!==null){var s=_n();ii(i,t,134217728,s)}mc(t,134217728)}},Tf=function(t){if(t.tag===13){var i=ir(t),s=Ai(t,i);if(s!==null){var l=_n();ii(s,t,i,l)}mc(t,i)}},wf=function(){return Mt},Af=function(t,i){var s=Mt;try{return Mt=t,i()}finally{Mt=s}},Se=function(t,i,s){switch(i){case"input":if(Tt(t,s),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var c=la(l);if(!c)throw Error(n(90));J(l),Tt(l,c)}}}break;case"textarea":_e(t,s);break;case"select":i=s.value,i!=null&&Z(t,!!s.multiple,i,!1)}},yt=lc,St=br;var B_={usingClientEntryPoint:!1,Events:[po,is,la,Ke,Xe,lc]},Co={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},k_={bundleType:Co.bundleType,version:Co.version,rendererPackageName:Co.rendererPackageName,rendererConfig:Co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ne(t),t===null?null:t.stateNode},findFiberByHostInstance:Co.findFiberByHostInstance||O_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ya=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ya.isDisabled&&Ya.supportsFiber)try{Sn=Ya.inject(k_),mt=Ya}catch{}}return Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B_,Cn.createPortal=function(t,i){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_c(i))throw Error(n(200));return F_(t,i,null,s)},Cn.createRoot=function(t,i){if(!_c(t))throw Error(n(299));var s=!1,l="",c=Gh;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=pc(t,1,!1,null,null,s,!1,l,c),t[Mi]=i.current,co(t.nodeType===8?t.parentNode:t),new gc(i)},Cn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=ne(i),t=t===null?null:t.stateNode,t},Cn.flushSync=function(t){return br(t)},Cn.hydrate=function(t,i,s){if(!Wa(i))throw Error(n(200));return Xa(null,t,i,!0,s)},Cn.hydrateRoot=function(t,i,s){if(!_c(t))throw Error(n(405));var l=s!=null&&s.hydratedSources||null,c=!1,h="",M=Gh;if(s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(M=s.onRecoverableError)),i=kh(i,null,t,1,s??null,c,!1,h,M),t[Mi]=i.current,co(t),l)for(t=0;t<l.length;t++)s=l[t],c=s._getVersion,c=c(s._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[s,c]:i.mutableSourceEagerHydrationData.push(s,c);return new Va(i)},Cn.render=function(t,i,s){if(!Wa(i))throw Error(n(200));return Xa(null,t,i,!1,s)},Cn.unmountComponentAtNode=function(t){if(!Wa(t))throw Error(n(40));return t._reactRootContainer?(br(function(){Xa(null,null,t,!1,function(){t._reactRootContainer=null,t[Mi]=null})}),!0):!1},Cn.unstable_batchedUpdates=lc,Cn.unstable_renderSubtreeIntoContainer=function(t,i,s,l){if(!Wa(s))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Xa(t,i,s,!1,l)},Cn.version="18.3.1-next-f1338f8080-20240426",Cn}var Kh;function q_(){if(Kh)return xc.exports;Kh=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),xc.exports=Y_(),xc.exports}var $h;function j_(){if($h)return qa;$h=1;var o=q_();return qa.createRoot=o.createRoot,qa.hydrateRoot=o.hydrateRoot,qa}var K_=j_();const mf="160",$_=0,Zh=1,Z_=2,Am=1,Q_=2,Ii=3,xr=0,Ln=1,Fi=2,mr=0,ks=1,Qh=2,Jh=3,ep=4,J_=5,Hr=100,ev=101,tv=102,tp=103,np=104,nv=200,iv=201,rv=202,sv=203,nf=204,rf=205,ov=206,av=207,lv=208,uv=209,cv=210,fv=211,dv=212,hv=213,pv=214,mv=0,gv=1,_v=2,Al=3,vv=4,xv=5,yv=6,Sv=7,gf=0,Mv=1,Ev=2,gr=0,Tv=1,wv=2,Av=3,Rv=4,Cv=5,Pv=6,Rm=300,Gs=301,Vs=302,sf=303,of=304,Il=306,af=1e3,ui=1001,lf=1002,yn=1003,ip=1004,Mc=1005,jn=1006,Lv=1007,Oo=1008,_r=1009,bv=1010,Dv=1011,_f=1012,Cm=1013,hr=1014,pr=1015,zo=1016,Pm=1017,Lm=1018,Vr=1020,Uv=1021,ci=1023,Nv=1024,Iv=1025,Wr=1026,Ws=1027,Fv=1028,bm=1029,Ov=1030,Dm=1031,Um=1033,Ec=33776,Tc=33777,wc=33778,Ac=33779,rp=35840,sp=35841,op=35842,ap=35843,Nm=36196,lp=37492,up=37496,cp=37808,fp=37809,dp=37810,hp=37811,pp=37812,mp=37813,gp=37814,_p=37815,vp=37816,xp=37817,yp=37818,Sp=37819,Mp=37820,Ep=37821,Rc=36492,Tp=36494,wp=36495,zv=36283,Ap=36284,Rp=36285,Cp=36286,Im=3e3,Xr=3001,Bv=3200,kv=3201,Fm=0,Hv=1,$n="",on="srgb",Bi="srgb-linear",vf="display-p3",Fl="display-p3-linear",Rl="linear",bt="srgb",Cl="rec709",Pl="p3",vs=7680,Pp=519,Gv=512,Vv=513,Wv=514,Om=515,Xv=516,Yv=517,qv=518,jv=519,uf=35044,Lp="300 es",cf=1035,zi=2e3,Ll=2001;class Ys{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,d=a.length;u<d;u++)a[u].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tl=Math.PI/180,ff=180/Math.PI;function vr(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(dn[o&255]+dn[o>>8&255]+dn[o>>16&255]+dn[o>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[n&63|128]+dn[n>>8&255]+"-"+dn[n>>16&255]+dn[n>>24&255]+dn[r&255]+dn[r>>8&255]+dn[r>>16&255]+dn[r>>24&255]).toLowerCase()}function Pn(o,e,n){return Math.max(e,Math.min(n,o))}function Kv(o,e){return(o%e+e)%e}function Cc(o,e,n){return(1-n)*o+n*e}function bp(o){return(o&o-1)===0&&o!==0}function df(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Oi(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function wt(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class dt{constructor(e=0,n=0){dt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Pn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*a+e.x,this.y=u*a+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ft{constructor(e,n,r,a,u,d,f,p,m){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,d,f,p,m)}set(e,n,r,a,u,d,f,p,m){const v=this.elements;return v[0]=e,v[1]=a,v[2]=f,v[3]=n,v[4]=u,v[5]=p,v[6]=r,v[7]=d,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,d=r[0],f=r[3],p=r[6],m=r[1],v=r[4],x=r[7],y=r[2],S=r[5],w=r[8],E=a[0],_=a[3],g=a[6],L=a[1],A=a[4],b=a[7],k=a[2],F=a[5],I=a[8];return u[0]=d*E+f*L+p*k,u[3]=d*_+f*A+p*F,u[6]=d*g+f*b+p*I,u[1]=m*E+v*L+x*k,u[4]=m*_+v*A+x*F,u[7]=m*g+v*b+x*I,u[2]=y*E+S*L+w*k,u[5]=y*_+S*A+w*F,u[8]=y*g+S*b+w*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],d=e[4],f=e[5],p=e[6],m=e[7],v=e[8];return n*d*v-n*f*m-r*u*v+r*f*p+a*u*m-a*d*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],d=e[4],f=e[5],p=e[6],m=e[7],v=e[8],x=v*d-f*m,y=f*p-v*u,S=m*u-d*p,w=n*x+r*y+a*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=x*E,e[1]=(a*m-v*r)*E,e[2]=(f*r-a*d)*E,e[3]=y*E,e[4]=(v*n-a*p)*E,e[5]=(a*u-f*n)*E,e[6]=S*E,e[7]=(r*p-m*n)*E,e[8]=(d*n-r*u)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,d,f){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*d+m*f)+d+e,-a*m,a*p,-a*(-m*d+p*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(Pc.makeScale(e,n)),this}rotate(e){return this.premultiply(Pc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Pc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Pc=new ft;function zm(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function bl(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function $v(){const o=bl("canvas");return o.style.display="block",o}const Dp={};function Fo(o){o in Dp||(Dp[o]=!0,console.warn(o))}const Up=new ft().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Np=new ft().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ja={[Bi]:{transfer:Rl,primaries:Cl,toReference:o=>o,fromReference:o=>o},[on]:{transfer:bt,primaries:Cl,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[Fl]:{transfer:Rl,primaries:Pl,toReference:o=>o.applyMatrix3(Np),fromReference:o=>o.applyMatrix3(Up)},[vf]:{transfer:bt,primaries:Pl,toReference:o=>o.convertSRGBToLinear().applyMatrix3(Np),fromReference:o=>o.applyMatrix3(Up).convertLinearToSRGB()}},Zv=new Set([Bi,Fl]),Et={enabled:!0,_workingColorSpace:Bi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!Zv.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,n){if(this.enabled===!1||e===n||!e||!n)return o;const r=ja[e].toReference,a=ja[n].fromReference;return a(r(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return ja[o].primaries},getTransfer:function(o){return o===$n?Rl:ja[o].transfer}};function Hs(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Lc(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let xs;class Bm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{xs===void 0&&(xs=bl("canvas")),xs.width=e.width,xs.height=e.height;const r=xs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=xs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=bl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let d=0;d<u.length;d++)u[d]=Hs(u[d]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Hs(n[r]/255)*255):n[r]=Hs(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Qv=0;class km{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qv++}),this.uuid=vr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let d=0,f=a.length;d<f;d++)a[d].isDataTexture?u.push(bc(a[d].image)):u.push(bc(a[d]))}else u=bc(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function bc(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Bm.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jv=0;class bn extends Ys{constructor(e=bn.DEFAULT_IMAGE,n=bn.DEFAULT_MAPPING,r=ui,a=ui,u=jn,d=Oo,f=ci,p=_r,m=bn.DEFAULT_ANISOTROPY,v=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jv++}),this.uuid=vr(),this.name="",this.source=new km(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=d,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=p,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof v=="string"?this.colorSpace=v:(Fo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=v===Xr?on:$n),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case af:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case lf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case af:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case lf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Fo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===on?Xr:Im}set encoding(e){Fo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Xr?on:$n}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=Rm;bn.DEFAULT_ANISOTROPY=1;class tn{constructor(e=0,n=0,r=0,a=1){tn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,d=e.elements;return this.x=d[0]*n+d[4]*r+d[8]*a+d[12]*u,this.y=d[1]*n+d[5]*r+d[9]*a+d[13]*u,this.z=d[2]*n+d[6]*r+d[10]*a+d[14]*u,this.w=d[3]*n+d[7]*r+d[11]*a+d[15]*u,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const p=e.elements,m=p[0],v=p[4],x=p[8],y=p[1],S=p[5],w=p[9],E=p[2],_=p[6],g=p[10];if(Math.abs(v-y)<.01&&Math.abs(x-E)<.01&&Math.abs(w-_)<.01){if(Math.abs(v+y)<.1&&Math.abs(x+E)<.1&&Math.abs(w+_)<.1&&Math.abs(m+S+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const A=(m+1)/2,b=(S+1)/2,k=(g+1)/2,F=(v+y)/4,I=(x+E)/4,le=(w+_)/4;return A>b&&A>k?A<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(A),a=F/r,u=I/r):b>k?b<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(b),r=F/a,u=le/a):k<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(k),r=I/u,a=le/u),this.set(r,a,u,n),this}let L=Math.sqrt((_-w)*(_-w)+(x-E)*(x-E)+(y-v)*(y-v));return Math.abs(L)<.001&&(L=1),this.x=(_-w)/L,this.y=(x-E)/L,this.z=(y-v)/L,this.w=Math.acos((m+S+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class e0 extends Ys{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new tn(0,0,e,n),this.scissorTest=!1,this.viewport=new tn(0,0,e,n);const a={width:e,height:n,depth:1};r.encoding!==void 0&&(Fo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===Xr?on:$n),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},r),this.texture=new bn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps,this.texture.internalFormat=r.internalFormat,this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}setSize(e,n,r=1){(this.width!==e||this.height!==n||this.depth!==r)&&(this.width=e,this.height=n,this.depth=r,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new km(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yr extends e0{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Hm extends bn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=yn,this.minFilter=yn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class t0 extends bn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=yn,this.minFilter=yn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bo{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,d,f){let p=r[a+0],m=r[a+1],v=r[a+2],x=r[a+3];const y=u[d+0],S=u[d+1],w=u[d+2],E=u[d+3];if(f===0){e[n+0]=p,e[n+1]=m,e[n+2]=v,e[n+3]=x;return}if(f===1){e[n+0]=y,e[n+1]=S,e[n+2]=w,e[n+3]=E;return}if(x!==E||p!==y||m!==S||v!==w){let _=1-f;const g=p*y+m*S+v*w+x*E,L=g>=0?1:-1,A=1-g*g;if(A>Number.EPSILON){const k=Math.sqrt(A),F=Math.atan2(k,g*L);_=Math.sin(_*F)/k,f=Math.sin(f*F)/k}const b=f*L;if(p=p*_+y*b,m=m*_+S*b,v=v*_+w*b,x=x*_+E*b,_===1-f){const k=1/Math.sqrt(p*p+m*m+v*v+x*x);p*=k,m*=k,v*=k,x*=k}}e[n]=p,e[n+1]=m,e[n+2]=v,e[n+3]=x}static multiplyQuaternionsFlat(e,n,r,a,u,d){const f=r[a],p=r[a+1],m=r[a+2],v=r[a+3],x=u[d],y=u[d+1],S=u[d+2],w=u[d+3];return e[n]=f*w+v*x+p*S-m*y,e[n+1]=p*w+v*y+m*x-f*S,e[n+2]=m*w+v*S+f*y-p*x,e[n+3]=v*w-f*x-p*y-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,d=e._order,f=Math.cos,p=Math.sin,m=f(r/2),v=f(a/2),x=f(u/2),y=p(r/2),S=p(a/2),w=p(u/2);switch(d){case"XYZ":this._x=y*v*x+m*S*w,this._y=m*S*x-y*v*w,this._z=m*v*w+y*S*x,this._w=m*v*x-y*S*w;break;case"YXZ":this._x=y*v*x+m*S*w,this._y=m*S*x-y*v*w,this._z=m*v*w-y*S*x,this._w=m*v*x+y*S*w;break;case"ZXY":this._x=y*v*x-m*S*w,this._y=m*S*x+y*v*w,this._z=m*v*w+y*S*x,this._w=m*v*x-y*S*w;break;case"ZYX":this._x=y*v*x-m*S*w,this._y=m*S*x+y*v*w,this._z=m*v*w-y*S*x,this._w=m*v*x+y*S*w;break;case"YZX":this._x=y*v*x+m*S*w,this._y=m*S*x+y*v*w,this._z=m*v*w-y*S*x,this._w=m*v*x-y*S*w;break;case"XZY":this._x=y*v*x-m*S*w,this._y=m*S*x-y*v*w,this._z=m*v*w+y*S*x,this._w=m*v*x+y*S*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],d=n[1],f=n[5],p=n[9],m=n[2],v=n[6],x=n[10],y=r+f+x;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(v-p)*S,this._y=(u-m)*S,this._z=(d-a)*S}else if(r>f&&r>x){const S=2*Math.sqrt(1+r-f-x);this._w=(v-p)/S,this._x=.25*S,this._y=(a+d)/S,this._z=(u+m)/S}else if(f>x){const S=2*Math.sqrt(1+f-r-x);this._w=(u-m)/S,this._x=(a+d)/S,this._y=.25*S,this._z=(p+v)/S}else{const S=2*Math.sqrt(1+x-r-f);this._w=(d-a)/S,this._x=(u+m)/S,this._y=(p+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,d=e._w,f=n._x,p=n._y,m=n._z,v=n._w;return this._x=r*v+d*f+a*m-u*p,this._y=a*v+d*p+u*f-r*m,this._z=u*v+d*m+r*p-a*f,this._w=d*v-r*f-a*p-u*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,d=this._w;let f=d*e._w+r*e._x+a*e._y+u*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=d,this._x=r,this._y=a,this._z=u,this;const p=1-f*f;if(p<=Number.EPSILON){const S=1-n;return this._w=S*d+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*u+n*this._z,this.normalize(),this}const m=Math.sqrt(p),v=Math.atan2(m,f),x=Math.sin((1-n)*v)/m,y=Math.sin(n*v)/m;return this._w=d*x+this._w*y,this._x=r*x+this._x*y,this._y=a*x+this._y*y,this._z=u*x+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=Math.random(),n=Math.sqrt(1-e),r=Math.sqrt(e),a=2*Math.PI*Math.random(),u=2*Math.PI*Math.random();return this.set(n*Math.cos(a),r*Math.sin(u),r*Math.cos(u),n*Math.sin(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,n=0,r=0){j.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ip.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ip.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,d=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*d,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*d,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*d,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,d=e.y,f=e.z,p=e.w,m=2*(d*a-f*r),v=2*(f*n-u*a),x=2*(u*r-d*n);return this.x=n+p*m+d*x-f*v,this.y=r+p*v+f*m-u*x,this.z=a+p*x+u*v-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,d=n.x,f=n.y,p=n.z;return this.x=a*p-u*f,this.y=u*d-r*p,this.z=r*f-a*d,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Dc.copy(this).projectOnVector(e),this.sub(Dc)}reflect(e){return this.sub(Dc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Pn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(n),this.y=r*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dc=new j,Ip=new Bo;class ko{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ri.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ri.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ri.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,f=u.count;d<f;d++)e.isMesh===!0?e.getVertexPosition(d,ri):ri.fromBufferAttribute(u,d),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ka.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ka.copy(r.boundingBox)),Ka.applyMatrix4(e.matrixWorld),this.union(Ka)}const a=e.children;for(let u=0,d=a.length;u<d;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Po),$a.subVectors(this.max,Po),ys.subVectors(e.a,Po),Ss.subVectors(e.b,Po),Ms.subVectors(e.c,Po),ar.subVectors(Ss,ys),lr.subVectors(Ms,Ss),Ir.subVectors(ys,Ms);let n=[0,-ar.z,ar.y,0,-lr.z,lr.y,0,-Ir.z,Ir.y,ar.z,0,-ar.x,lr.z,0,-lr.x,Ir.z,0,-Ir.x,-ar.y,ar.x,0,-lr.y,lr.x,0,-Ir.y,Ir.x,0];return!Uc(n,ys,Ss,Ms,$a)||(n=[1,0,0,0,1,0,0,0,1],!Uc(n,ys,Ss,Ms,$a))?!1:(Za.crossVectors(ar,lr),n=[Za.x,Za.y,Za.z],Uc(n,ys,Ss,Ms,$a))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Li=[new j,new j,new j,new j,new j,new j,new j,new j],ri=new j,Ka=new ko,ys=new j,Ss=new j,Ms=new j,ar=new j,lr=new j,Ir=new j,Po=new j,$a=new j,Za=new j,Fr=new j;function Uc(o,e,n,r,a){for(let u=0,d=o.length-3;u<=d;u+=3){Fr.fromArray(o,u);const f=a.x*Math.abs(Fr.x)+a.y*Math.abs(Fr.y)+a.z*Math.abs(Fr.z),p=e.dot(Fr),m=n.dot(Fr),v=r.dot(Fr);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>f)return!1}return!0}const n0=new ko,Lo=new j,Nc=new j;class Ol{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):n0.setFromPoints(e).getCenter(r);let a=0;for(let u=0,d=e.length;u<d;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lo.subVectors(e,this.center);const n=Lo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Lo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lo.copy(e.center).add(Nc)),this.expandByPoint(Lo.copy(e.center).sub(Nc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bi=new j,Ic=new j,Qa=new j,ur=new j,Fc=new j,Ja=new j,Oc=new j;class Gm{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=bi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,n),bi.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Ic.copy(e).add(n).multiplyScalar(.5),Qa.copy(n).sub(e).normalize(),ur.copy(this.origin).sub(Ic);const u=e.distanceTo(n)*.5,d=-this.direction.dot(Qa),f=ur.dot(this.direction),p=-ur.dot(Qa),m=ur.lengthSq(),v=Math.abs(1-d*d);let x,y,S,w;if(v>0)if(x=d*p-f,y=d*f-p,w=u*v,x>=0)if(y>=-w)if(y<=w){const E=1/v;x*=E,y*=E,S=x*(x+d*y+2*f)+y*(d*x+y+2*p)+m}else y=u,x=Math.max(0,-(d*y+f)),S=-x*x+y*(y+2*p)+m;else y=-u,x=Math.max(0,-(d*y+f)),S=-x*x+y*(y+2*p)+m;else y<=-w?(x=Math.max(0,-(-d*u+f)),y=x>0?-u:Math.min(Math.max(-u,-p),u),S=-x*x+y*(y+2*p)+m):y<=w?(x=0,y=Math.min(Math.max(-u,-p),u),S=y*(y+2*p)+m):(x=Math.max(0,-(d*u+f)),y=x>0?u:Math.min(Math.max(-u,-p),u),S=-x*x+y*(y+2*p)+m);else y=d>0?-u:u,x=Math.max(0,-(d*y+f)),S=-x*x+y*(y+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,x),a&&a.copy(Ic).addScaledVector(Qa,y),S}intersectSphere(e,n){bi.subVectors(e.center,this.origin);const r=bi.dot(this.direction),a=bi.dot(bi)-r*r,u=e.radius*e.radius;if(a>u)return null;const d=Math.sqrt(u-a),f=r-d,p=r+d;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,d,f,p;const m=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,y=this.origin;return m>=0?(r=(e.min.x-y.x)*m,a=(e.max.x-y.x)*m):(r=(e.max.x-y.x)*m,a=(e.min.x-y.x)*m),v>=0?(u=(e.min.y-y.y)*v,d=(e.max.y-y.y)*v):(u=(e.max.y-y.y)*v,d=(e.min.y-y.y)*v),r>d||u>a||((u>r||isNaN(r))&&(r=u),(d<a||isNaN(a))&&(a=d),x>=0?(f=(e.min.z-y.z)*x,p=(e.max.z-y.z)*x):(f=(e.max.z-y.z)*x,p=(e.min.z-y.z)*x),r>p||f>a)||((f>r||r!==r)&&(r=f),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,n,r,a,u){Fc.subVectors(n,e),Ja.subVectors(r,e),Oc.crossVectors(Fc,Ja);let d=this.direction.dot(Oc),f;if(d>0){if(a)return null;f=1}else if(d<0)f=-1,d=-d;else return null;ur.subVectors(this.origin,e);const p=f*this.direction.dot(Ja.crossVectors(ur,Ja));if(p<0)return null;const m=f*this.direction.dot(Fc.cross(ur));if(m<0||p+m>d)return null;const v=-f*ur.dot(Oc);return v<0?null:this.at(v/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(e,n,r,a,u,d,f,p,m,v,x,y,S,w,E,_){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,d,f,p,m,v,x,y,S,w,E,_)}set(e,n,r,a,u,d,f,p,m,v,x,y,S,w,E,_){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=u,g[5]=d,g[9]=f,g[13]=p,g[2]=m,g[6]=v,g[10]=x,g[14]=y,g[3]=S,g[7]=w,g[11]=E,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Es.setFromMatrixColumn(e,0).length(),u=1/Es.setFromMatrixColumn(e,1).length(),d=1/Es.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*d,n[9]=r[9]*d,n[10]=r[10]*d,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,d=Math.cos(r),f=Math.sin(r),p=Math.cos(a),m=Math.sin(a),v=Math.cos(u),x=Math.sin(u);if(e.order==="XYZ"){const y=d*v,S=d*x,w=f*v,E=f*x;n[0]=p*v,n[4]=-p*x,n[8]=m,n[1]=S+w*m,n[5]=y-E*m,n[9]=-f*p,n[2]=E-y*m,n[6]=w+S*m,n[10]=d*p}else if(e.order==="YXZ"){const y=p*v,S=p*x,w=m*v,E=m*x;n[0]=y+E*f,n[4]=w*f-S,n[8]=d*m,n[1]=d*x,n[5]=d*v,n[9]=-f,n[2]=S*f-w,n[6]=E+y*f,n[10]=d*p}else if(e.order==="ZXY"){const y=p*v,S=p*x,w=m*v,E=m*x;n[0]=y-E*f,n[4]=-d*x,n[8]=w+S*f,n[1]=S+w*f,n[5]=d*v,n[9]=E-y*f,n[2]=-d*m,n[6]=f,n[10]=d*p}else if(e.order==="ZYX"){const y=d*v,S=d*x,w=f*v,E=f*x;n[0]=p*v,n[4]=w*m-S,n[8]=y*m+E,n[1]=p*x,n[5]=E*m+y,n[9]=S*m-w,n[2]=-m,n[6]=f*p,n[10]=d*p}else if(e.order==="YZX"){const y=d*p,S=d*m,w=f*p,E=f*m;n[0]=p*v,n[4]=E-y*x,n[8]=w*x+S,n[1]=x,n[5]=d*v,n[9]=-f*v,n[2]=-m*v,n[6]=S*x+w,n[10]=y-E*x}else if(e.order==="XZY"){const y=d*p,S=d*m,w=f*p,E=f*m;n[0]=p*v,n[4]=-x,n[8]=m*v,n[1]=y*x+E,n[5]=d*v,n[9]=S*x-w,n[2]=w*x-S,n[6]=f*v,n[10]=E*x+y}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(i0,e,r0)}lookAt(e,n,r){const a=this.elements;return Fn.subVectors(e,n),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),cr.crossVectors(r,Fn),cr.lengthSq()===0&&(Math.abs(r.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),cr.crossVectors(r,Fn)),cr.normalize(),el.crossVectors(Fn,cr),a[0]=cr.x,a[4]=el.x,a[8]=Fn.x,a[1]=cr.y,a[5]=el.y,a[9]=Fn.y,a[2]=cr.z,a[6]=el.z,a[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,d=r[0],f=r[4],p=r[8],m=r[12],v=r[1],x=r[5],y=r[9],S=r[13],w=r[2],E=r[6],_=r[10],g=r[14],L=r[3],A=r[7],b=r[11],k=r[15],F=a[0],I=a[4],le=a[8],R=a[12],D=a[1],oe=a[5],ue=a[9],ve=a[13],H=a[2],te=a[6],se=a[10],ae=a[14],V=a[3],$=a[7],W=a[11],U=a[15];return u[0]=d*F+f*D+p*H+m*V,u[4]=d*I+f*oe+p*te+m*$,u[8]=d*le+f*ue+p*se+m*W,u[12]=d*R+f*ve+p*ae+m*U,u[1]=v*F+x*D+y*H+S*V,u[5]=v*I+x*oe+y*te+S*$,u[9]=v*le+x*ue+y*se+S*W,u[13]=v*R+x*ve+y*ae+S*U,u[2]=w*F+E*D+_*H+g*V,u[6]=w*I+E*oe+_*te+g*$,u[10]=w*le+E*ue+_*se+g*W,u[14]=w*R+E*ve+_*ae+g*U,u[3]=L*F+A*D+b*H+k*V,u[7]=L*I+A*oe+b*te+k*$,u[11]=L*le+A*ue+b*se+k*W,u[15]=L*R+A*ve+b*ae+k*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],d=e[1],f=e[5],p=e[9],m=e[13],v=e[2],x=e[6],y=e[10],S=e[14],w=e[3],E=e[7],_=e[11],g=e[15];return w*(+u*p*x-a*m*x-u*f*y+r*m*y+a*f*S-r*p*S)+E*(+n*p*S-n*m*y+u*d*y-a*d*S+a*m*v-u*p*v)+_*(+n*m*x-n*f*S-u*d*x+r*d*S+u*f*v-r*m*v)+g*(-a*f*v-n*p*x+n*f*y+a*d*x-r*d*y+r*p*v)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],d=e[4],f=e[5],p=e[6],m=e[7],v=e[8],x=e[9],y=e[10],S=e[11],w=e[12],E=e[13],_=e[14],g=e[15],L=x*_*m-E*y*m+E*p*S-f*_*S-x*p*g+f*y*g,A=w*y*m-v*_*m-w*p*S+d*_*S+v*p*g-d*y*g,b=v*E*m-w*x*m+w*f*S-d*E*S-v*f*g+d*x*g,k=w*x*p-v*E*p-w*f*y+d*E*y+v*f*_-d*x*_,F=n*L+r*A+a*b+u*k;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/F;return e[0]=L*I,e[1]=(E*y*u-x*_*u-E*a*S+r*_*S+x*a*g-r*y*g)*I,e[2]=(f*_*u-E*p*u+E*a*m-r*_*m-f*a*g+r*p*g)*I,e[3]=(x*p*u-f*y*u-x*a*m+r*y*m+f*a*S-r*p*S)*I,e[4]=A*I,e[5]=(v*_*u-w*y*u+w*a*S-n*_*S-v*a*g+n*y*g)*I,e[6]=(w*p*u-d*_*u-w*a*m+n*_*m+d*a*g-n*p*g)*I,e[7]=(d*y*u-v*p*u+v*a*m-n*y*m-d*a*S+n*p*S)*I,e[8]=b*I,e[9]=(w*x*u-v*E*u-w*r*S+n*E*S+v*r*g-n*x*g)*I,e[10]=(d*E*u-w*f*u+w*r*m-n*E*m-d*r*g+n*f*g)*I,e[11]=(v*f*u-d*x*u-v*r*m+n*x*m+d*r*S-n*f*S)*I,e[12]=k*I,e[13]=(v*E*a-w*x*a+w*r*y-n*E*y-v*r*_+n*x*_)*I,e[14]=(w*f*a-d*E*a-w*r*p+n*E*p+d*r*_-n*f*_)*I,e[15]=(d*x*a-v*f*a+v*r*p-n*x*p-d*r*y+n*f*y)*I,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,d=e.x,f=e.y,p=e.z,m=u*d,v=u*f;return this.set(m*d+r,m*f-a*p,m*p+a*f,0,m*f+a*p,v*f+r,v*p-a*d,0,m*p-a*f,v*p+a*d,u*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,d){return this.set(1,r,u,0,e,1,d,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,d=n._y,f=n._z,p=n._w,m=u+u,v=d+d,x=f+f,y=u*m,S=u*v,w=u*x,E=d*v,_=d*x,g=f*x,L=p*m,A=p*v,b=p*x,k=r.x,F=r.y,I=r.z;return a[0]=(1-(E+g))*k,a[1]=(S+b)*k,a[2]=(w-A)*k,a[3]=0,a[4]=(S-b)*F,a[5]=(1-(y+g))*F,a[6]=(_+L)*F,a[7]=0,a[8]=(w+A)*I,a[9]=(_-L)*I,a[10]=(1-(y+E))*I,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=Es.set(a[0],a[1],a[2]).length();const d=Es.set(a[4],a[5],a[6]).length(),f=Es.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],si.copy(this);const m=1/u,v=1/d,x=1/f;return si.elements[0]*=m,si.elements[1]*=m,si.elements[2]*=m,si.elements[4]*=v,si.elements[5]*=v,si.elements[6]*=v,si.elements[8]*=x,si.elements[9]*=x,si.elements[10]*=x,n.setFromRotationMatrix(si),r.x=u,r.y=d,r.z=f,this}makePerspective(e,n,r,a,u,d,f=zi){const p=this.elements,m=2*u/(n-e),v=2*u/(r-a),x=(n+e)/(n-e),y=(r+a)/(r-a);let S,w;if(f===zi)S=-(d+u)/(d-u),w=-2*d*u/(d-u);else if(f===Ll)S=-d/(d-u),w=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=m,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,u,d,f=zi){const p=this.elements,m=1/(n-e),v=1/(r-a),x=1/(d-u),y=(n+e)*m,S=(r+a)*v;let w,E;if(f===zi)w=(d+u)*x,E=-2*x;else if(f===Ll)w=u*x,E=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-y,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=E,p[14]=-w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Es=new j,si=new Ht,i0=new j(0,0,0),r0=new j(1,1,1),cr=new j,el=new j,Fn=new j,Fp=new Ht,Op=new Bo;class zl{constructor(e=0,n=0,r=0,a=zl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],d=a[4],f=a[8],p=a[1],m=a[5],v=a[9],x=a[2],y=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(Pn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Pn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(Pn(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Pn(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Pn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-Pn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(f,u)):(this._x=Math.atan2(-v,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Fp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Op.setFromEuler(this),this.setFromQuaternion(Op,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zl.DEFAULT_ORDER="XYZ";class Vm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let s0=0;const zp=new j,Ts=new Bo,Di=new Ht,tl=new j,bo=new j,o0=new j,a0=new Bo,Bp=new j(1,0,0),kp=new j(0,1,0),Hp=new j(0,0,1),l0={type:"added"},u0={type:"removed"};class nn extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DEFAULT_UP.clone();const e=new j,n=new zl,r=new Bo,a=new j(1,1,1);function u(){r.setFromEuler(n,!1)}function d(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ht},normalMatrix:{value:new ft}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ts.setFromAxisAngle(e,n),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,n){return Ts.setFromAxisAngle(e,n),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(Bp,e)}rotateY(e){return this.rotateOnAxis(kp,e)}rotateZ(e){return this.rotateOnAxis(Hp,e)}translateOnAxis(e,n){return zp.copy(e).applyQuaternion(this.quaternion),this.position.add(zp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Bp,e)}translateY(e){return this.translateOnAxis(kp,e)}translateZ(e){return this.translateOnAxis(Hp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?tl.copy(e):tl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(bo,tl,this.up):Di.lookAt(tl,bo,this.up),this.quaternion.setFromRotationMatrix(Di),a&&(Di.extractRotation(a.matrixWorld),Ts.setFromRotationMatrix(Di),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(l0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(u0)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const d=this.children[r].getObjectByProperty(e,n);if(d!==void 0)return d}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,d=a.length;u<d;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,e,o0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,a0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++){const u=n[r];(u.matrixWorldAutoUpdate===!0||e===!0)&&u.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const a=this.children;for(let u=0,d=a.length;u<d;u++){const f=a[u];f.matrixWorldAutoUpdate===!0&&f.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function u(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const x=p[m];u(e.shapes,x)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,m=this.material.length;p<m;p++)f.push(u(e.materials,this.material[p]));a.material=f}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];a.animations.push(u(e.animations,p))}}if(n){const f=d(e.geometries),p=d(e.materials),m=d(e.textures),v=d(e.images),x=d(e.shapes),y=d(e.skeletons),S=d(e.animations),w=d(e.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),x.length>0&&(r.shapes=x),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),w.length>0&&(r.nodes=w)}return r.object=a,r;function d(f){const p=[];for(const m in f){const v=f[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}nn.DEFAULT_UP=new j(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new j,Ui=new j,zc=new j,Ni=new j,ws=new j,As=new j,Gp=new j,Bc=new j,kc=new j,Hc=new j;let nl=!1;class zn{constructor(e=new j,n=new j,r=new j){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),oi.subVectors(e,n),a.cross(oi);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){oi.subVectors(a,n),Ui.subVectors(r,n),zc.subVectors(e,n);const d=oi.dot(oi),f=oi.dot(Ui),p=oi.dot(zc),m=Ui.dot(Ui),v=Ui.dot(zc),x=d*m-f*f;if(x===0)return u.set(0,0,0),null;const y=1/x,S=(m*p-f*v)*y,w=(d*v-f*p)*y;return u.set(1-S-w,w,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getUV(e,n,r,a,u,d,f,p){return nl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),nl=!0),this.getInterpolation(e,n,r,a,u,d,f,p)}static getInterpolation(e,n,r,a,u,d,f,p){return this.getBarycoord(e,n,r,a,Ni)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Ni.x),p.addScaledVector(d,Ni.y),p.addScaledVector(f,Ni.z),p)}static isFrontFacing(e,n,r,a){return oi.subVectors(r,n),Ui.subVectors(e,n),oi.cross(Ui).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),oi.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return zn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,r,a,u){return nl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),nl=!0),zn.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}getInterpolation(e,n,r,a,u){return zn.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let d,f;ws.subVectors(a,r),As.subVectors(u,r),Bc.subVectors(e,r);const p=ws.dot(Bc),m=As.dot(Bc);if(p<=0&&m<=0)return n.copy(r);kc.subVectors(e,a);const v=ws.dot(kc),x=As.dot(kc);if(v>=0&&x<=v)return n.copy(a);const y=p*x-v*m;if(y<=0&&p>=0&&v<=0)return d=p/(p-v),n.copy(r).addScaledVector(ws,d);Hc.subVectors(e,u);const S=ws.dot(Hc),w=As.dot(Hc);if(w>=0&&S<=w)return n.copy(u);const E=S*m-p*w;if(E<=0&&m>=0&&w<=0)return f=m/(m-w),n.copy(r).addScaledVector(As,f);const _=v*w-S*x;if(_<=0&&x-v>=0&&S-w>=0)return Gp.subVectors(u,a),f=(x-v)/(x-v+(S-w)),n.copy(a).addScaledVector(Gp,f);const g=1/(_+E+y);return d=E*g,f=y*g,n.copy(r).addScaledVector(ws,d).addScaledVector(As,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fr={h:0,s:0,l:0},il={h:0,s:0,l:0};function Gc(o,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(e-o)*6*n:n<1/2?e:n<2/3?o+(e-o)*6*(2/3-n):o}class ht{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Et.workingColorSpace){return this.r=e,this.g=n,this.b=r,Et.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Et.workingColorSpace){if(e=Kv(e,1),n=Pn(n,0,1),r=Pn(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,d=2*r-u;this.r=Gc(d,u,e+1/3),this.g=Gc(d,u,e),this.b=Gc(d,u,e-1/3)}return Et.toWorkingColorSpace(this,a),this}setStyle(e,n=on){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=a[1],f=a[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(d===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=on){const r=Wm[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}copyLinearToSRGB(e){return this.r=Lc(e.r),this.g=Lc(e.g),this.b=Lc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return Et.fromWorkingColorSpace(hn.copy(this),e),Math.round(Pn(hn.r*255,0,255))*65536+Math.round(Pn(hn.g*255,0,255))*256+Math.round(Pn(hn.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Et.workingColorSpace){Et.fromWorkingColorSpace(hn.copy(this),n);const r=hn.r,a=hn.g,u=hn.b,d=Math.max(r,a,u),f=Math.min(r,a,u);let p,m;const v=(f+d)/2;if(f===d)p=0,m=0;else{const x=d-f;switch(m=v<=.5?x/(d+f):x/(2-d-f),d){case r:p=(a-u)/x+(a<u?6:0);break;case a:p=(u-r)/x+2;break;case u:p=(r-a)/x+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,n=Et.workingColorSpace){return Et.fromWorkingColorSpace(hn.copy(this),n),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=on){Et.fromWorkingColorSpace(hn.copy(this),e);const n=hn.r,r=hn.g,a=hn.b;return e!==on?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(fr),this.setHSL(fr.h+e,fr.s+n,fr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(fr),e.getHSL(il);const r=Cc(fr.h,il.h,n),a=Cc(fr.s,il.s,n),u=Cc(fr.l,il.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new ht;ht.NAMES=Wm;let c0=0;class jr extends Ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=vr(),this.name="",this.type="Material",this.blending=ks,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nf,this.blendDst=rf,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=Al,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(r.blending=this.blending),this.side!==xr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==nf&&(r.blendSrc=this.blendSrc),this.blendDst!==rf&&(r.blendDst=this.blendDst),this.blendEquation!==Hr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Al&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const d=[];for(const f in u){const p=u[f];delete p.metadata,d.push(p)}return d}if(n){const u=a(e.textures),d=a(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Dl extends jr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new j,rl=new dt;class di{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=uf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=pr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)rl.fromBufferAttribute(this,n),rl.applyMatrix3(e),this.setXY(n,rl.x,rl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix3(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix4(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyNormalMatrix(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.transformDirection(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Oi(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=wt(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Oi(n,this.array)),n}setX(e,n){return this.normalized&&(n=wt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Oi(n,this.array)),n}setY(e,n){return this.normalized&&(n=wt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Oi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=wt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Oi(n,this.array)),n}setW(e,n){return this.normalized&&(n=wt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=wt(n,this.array),r=wt(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=wt(n,this.array),r=wt(r,this.array),a=wt(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=wt(n,this.array),r=wt(r,this.array),a=wt(a,this.array),u=wt(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uf&&(e.usage=this.usage),e}}class Xm extends di{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Ym extends di{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Bn extends di{constructor(e,n,r){super(new Float32Array(e),n,r)}}let f0=0;const qn=new Ht,Vc=new nn,Rs=new j,On=new ko,Do=new ko,en=new j;class Zn extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=vr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zm(e)?Ym:Xm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ft().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,n,r){return qn.makeTranslation(e,n,r),this.applyMatrix4(qn),this}scale(e,n,r){return qn.makeScale(e,n,r),this.applyMatrix4(qn),this}lookAt(e){return Vc.lookAt(e),Vc.updateMatrix(),this.applyMatrix4(Vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(e){const n=[];for(let r=0,a=e.length;r<a;r++){const u=e[r];n.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new Bn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ko);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];On.setFromBufferAttribute(u),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ol);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new j,1/0);return}if(e){const r=this.boundingSphere.center;if(On.setFromBufferAttribute(e),n)for(let u=0,d=n.length;u<d;u++){const f=n[u];Do.setFromBufferAttribute(f),this.morphTargetsRelative?(en.addVectors(On.min,Do.min),On.expandByPoint(en),en.addVectors(On.max,Do.max),On.expandByPoint(en)):(On.expandByPoint(Do.min),On.expandByPoint(Do.max))}On.getCenter(r);let a=0;for(let u=0,d=e.count;u<d;u++)en.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(en));if(n)for(let u=0,d=n.length;u<d;u++){const f=n[u],p=this.morphTargetsRelative;for(let m=0,v=f.count;m<v;m++)en.fromBufferAttribute(f,m),p&&(Rs.fromBufferAttribute(e,m),en.add(Rs)),a=Math.max(a,r.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,a=n.position.array,u=n.normal.array,d=n.uv.array,f=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new di(new Float32Array(4*f),4));const p=this.getAttribute("tangent").array,m=[],v=[];for(let D=0;D<f;D++)m[D]=new j,v[D]=new j;const x=new j,y=new j,S=new j,w=new dt,E=new dt,_=new dt,g=new j,L=new j;function A(D,oe,ue){x.fromArray(a,D*3),y.fromArray(a,oe*3),S.fromArray(a,ue*3),w.fromArray(d,D*2),E.fromArray(d,oe*2),_.fromArray(d,ue*2),y.sub(x),S.sub(x),E.sub(w),_.sub(w);const ve=1/(E.x*_.y-_.x*E.y);isFinite(ve)&&(g.copy(y).multiplyScalar(_.y).addScaledVector(S,-E.y).multiplyScalar(ve),L.copy(S).multiplyScalar(E.x).addScaledVector(y,-_.x).multiplyScalar(ve),m[D].add(g),m[oe].add(g),m[ue].add(g),v[D].add(L),v[oe].add(L),v[ue].add(L))}let b=this.groups;b.length===0&&(b=[{start:0,count:r.length}]);for(let D=0,oe=b.length;D<oe;++D){const ue=b[D],ve=ue.start,H=ue.count;for(let te=ve,se=ve+H;te<se;te+=3)A(r[te+0],r[te+1],r[te+2])}const k=new j,F=new j,I=new j,le=new j;function R(D){I.fromArray(u,D*3),le.copy(I);const oe=m[D];k.copy(oe),k.sub(I.multiplyScalar(I.dot(oe))).normalize(),F.crossVectors(le,oe);const ve=F.dot(v[D])<0?-1:1;p[D*4]=k.x,p[D*4+1]=k.y,p[D*4+2]=k.z,p[D*4+3]=ve}for(let D=0,oe=b.length;D<oe;++D){const ue=b[D],ve=ue.start,H=ue.count;for(let te=ve,se=ve+H;te<se;te+=3)R(r[te+0]),R(r[te+1]),R(r[te+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new di(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const a=new j,u=new j,d=new j,f=new j,p=new j,m=new j,v=new j,x=new j;if(e)for(let y=0,S=e.count;y<S;y+=3){const w=e.getX(y+0),E=e.getX(y+1),_=e.getX(y+2);a.fromBufferAttribute(n,w),u.fromBufferAttribute(n,E),d.fromBufferAttribute(n,_),v.subVectors(d,u),x.subVectors(a,u),v.cross(x),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,E),m.fromBufferAttribute(r,_),f.add(v),p.add(v),m.add(v),r.setXYZ(w,f.x,f.y,f.z),r.setXYZ(E,p.x,p.y,p.z),r.setXYZ(_,m.x,m.y,m.z)}else for(let y=0,S=n.count;y<S;y+=3)a.fromBufferAttribute(n,y+0),u.fromBufferAttribute(n,y+1),d.fromBufferAttribute(n,y+2),v.subVectors(d,u),x.subVectors(a,u),v.cross(x),r.setXYZ(y+0,v.x,v.y,v.z),r.setXYZ(y+1,v.x,v.y,v.z),r.setXYZ(y+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)en.fromBufferAttribute(e,n),en.normalize(),e.setXYZ(n,en.x,en.y,en.z)}toNonIndexed(){function e(f,p){const m=f.array,v=f.itemSize,x=f.normalized,y=new m.constructor(p.length*v);let S=0,w=0;for(let E=0,_=p.length;E<_;E++){f.isInterleavedBufferAttribute?S=p[E]*f.data.stride+f.offset:S=p[E]*v;for(let g=0;g<v;g++)y[w++]=m[S++]}return new di(y,v,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Zn,r=this.index.array,a=this.attributes;for(const f in a){const p=a[f],m=e(p,r);n.setAttribute(f,m)}const u=this.morphAttributes;for(const f in u){const p=[],m=u[f];for(let v=0,x=m.length;v<x;v++){const y=m[v],S=e(y,r);p.push(S)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let f=0,p=d.length;f<p;f++){const m=d[f];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let x=0,y=m.length;x<y;x++){const S=m[x];v.push(S.toJSON(e.data))}v.length>0&&(a[p]=v,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const v=a[m];this.setAttribute(m,v.clone(n))}const u=e.morphAttributes;for(const m in u){const v=[],x=u[m];for(let y=0,S=x.length;y<S;y++)v.push(x[y].clone(n));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,v=d.length;m<v;m++){const x=d[m];this.addGroup(x.start,x.count,x.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vp=new Ht,Or=new Gm,sl=new Ol,Wp=new j,Cs=new j,Ps=new j,Ls=new j,Wc=new j,ol=new j,al=new dt,ll=new dt,ul=new dt,Xp=new j,Yp=new j,qp=new j,cl=new j,fl=new j;class fi extends nn{constructor(e=new Zn,n=new Dl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=a.length;u<d;u++){const f=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(u&&f){ol.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const v=f[p],x=u[p];v!==0&&(Wc.fromBufferAttribute(x,e),d?ol.addScaledVector(Wc,v):ol.addScaledVector(Wc.sub(n),v))}n.add(ol)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),sl.copy(r.boundingSphere),sl.applyMatrix4(u),Or.copy(e.ray).recast(e.near),!(sl.containsPoint(Or.origin)===!1&&(Or.intersectSphere(sl,Wp)===null||Or.origin.distanceToSquared(Wp)>(e.far-e.near)**2))&&(Vp.copy(u).invert(),Or.copy(e.ray).applyMatrix4(Vp),!(r.boundingBox!==null&&Or.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Or)))}_computeIntersections(e,n,r){let a;const u=this.geometry,d=this.material,f=u.index,p=u.attributes.position,m=u.attributes.uv,v=u.attributes.uv1,x=u.attributes.normal,y=u.groups,S=u.drawRange;if(f!==null)if(Array.isArray(d))for(let w=0,E=y.length;w<E;w++){const _=y[w],g=d[_.materialIndex],L=Math.max(_.start,S.start),A=Math.min(f.count,Math.min(_.start+_.count,S.start+S.count));for(let b=L,k=A;b<k;b+=3){const F=f.getX(b),I=f.getX(b+1),le=f.getX(b+2);a=dl(this,g,e,r,m,v,x,F,I,le),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=_.materialIndex,n.push(a))}}else{const w=Math.max(0,S.start),E=Math.min(f.count,S.start+S.count);for(let _=w,g=E;_<g;_+=3){const L=f.getX(_),A=f.getX(_+1),b=f.getX(_+2);a=dl(this,d,e,r,m,v,x,L,A,b),a&&(a.faceIndex=Math.floor(_/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(d))for(let w=0,E=y.length;w<E;w++){const _=y[w],g=d[_.materialIndex],L=Math.max(_.start,S.start),A=Math.min(p.count,Math.min(_.start+_.count,S.start+S.count));for(let b=L,k=A;b<k;b+=3){const F=b,I=b+1,le=b+2;a=dl(this,g,e,r,m,v,x,F,I,le),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=_.materialIndex,n.push(a))}}else{const w=Math.max(0,S.start),E=Math.min(p.count,S.start+S.count);for(let _=w,g=E;_<g;_+=3){const L=_,A=_+1,b=_+2;a=dl(this,d,e,r,m,v,x,L,A,b),a&&(a.faceIndex=Math.floor(_/3),n.push(a))}}}}function d0(o,e,n,r,a,u,d,f){let p;if(e.side===Ln?p=r.intersectTriangle(d,u,a,!0,f):p=r.intersectTriangle(a,u,d,e.side===xr,f),p===null)return null;fl.copy(f),fl.applyMatrix4(o.matrixWorld);const m=n.ray.origin.distanceTo(fl);return m<n.near||m>n.far?null:{distance:m,point:fl.clone(),object:o}}function dl(o,e,n,r,a,u,d,f,p,m){o.getVertexPosition(f,Cs),o.getVertexPosition(p,Ps),o.getVertexPosition(m,Ls);const v=d0(o,e,n,r,Cs,Ps,Ls,cl);if(v){a&&(al.fromBufferAttribute(a,f),ll.fromBufferAttribute(a,p),ul.fromBufferAttribute(a,m),v.uv=zn.getInterpolation(cl,Cs,Ps,Ls,al,ll,ul,new dt)),u&&(al.fromBufferAttribute(u,f),ll.fromBufferAttribute(u,p),ul.fromBufferAttribute(u,m),v.uv1=zn.getInterpolation(cl,Cs,Ps,Ls,al,ll,ul,new dt),v.uv2=v.uv1),d&&(Xp.fromBufferAttribute(d,f),Yp.fromBufferAttribute(d,p),qp.fromBufferAttribute(d,m),v.normal=zn.getInterpolation(cl,Cs,Ps,Ls,Xp,Yp,qp,new j),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:f,b:p,c:m,normal:new j,materialIndex:0};zn.getNormal(Cs,Ps,Ls,x.normal),v.face=x}return v}class qs extends Zn{constructor(e=1,n=1,r=1,a=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:d};const f=this;a=Math.floor(a),u=Math.floor(u),d=Math.floor(d);const p=[],m=[],v=[],x=[];let y=0,S=0;w("z","y","x",-1,-1,r,n,e,d,u,0),w("z","y","x",1,-1,r,n,-e,d,u,1),w("x","z","y",1,1,e,r,n,a,d,2),w("x","z","y",1,-1,e,r,-n,a,d,3),w("x","y","z",1,-1,e,n,r,a,u,4),w("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(p),this.setAttribute("position",new Bn(m,3)),this.setAttribute("normal",new Bn(v,3)),this.setAttribute("uv",new Bn(x,2));function w(E,_,g,L,A,b,k,F,I,le,R){const D=b/I,oe=k/le,ue=b/2,ve=k/2,H=F/2,te=I+1,se=le+1;let ae=0,V=0;const $=new j;for(let W=0;W<se;W++){const U=W*oe-ve;for(let G=0;G<te;G++){const Y=G*D-ue;$[E]=Y*L,$[_]=U*A,$[g]=H,m.push($.x,$.y,$.z),$[E]=0,$[_]=0,$[g]=F>0?1:-1,v.push($.x,$.y,$.z),x.push(G/I),x.push(1-W/le),ae+=1}}for(let W=0;W<le;W++)for(let U=0;U<I;U++){const G=y+U+te*W,Y=y+U+te*(W+1),re=y+(U+1)+te*(W+1),fe=y+(U+1)+te*W;p.push(G,Y,fe),p.push(Y,re,fe),V+=6}f.addGroup(S,V,R),S+=V,y+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xs(o){const e={};for(const n in o){e[n]={};for(const r in o[n]){const a=o[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function xn(o){const e={};for(let n=0;n<o.length;n++){const r=Xs(o[n]);for(const a in r)e[a]=r[a]}return e}function h0(o){const e=[];for(let n=0;n<o.length;n++)e.push(o[n].clone());return e}function qm(o){return o.getRenderTarget()===null?o.outputColorSpace:Et.workingColorSpace}const p0={clone:Xs,merge:xn};var m0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,g0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qr extends jr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=m0,this.fragmentShader=g0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=h0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const d=this.uniforms[a].value;d&&d.isTexture?n.uniforms[a]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?n.uniforms[a]={type:"c",value:d.getHex()}:d&&d.isVector2?n.uniforms[a]={type:"v2",value:d.toArray()}:d&&d.isVector3?n.uniforms[a]={type:"v3",value:d.toArray()}:d&&d.isVector4?n.uniforms[a]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?n.uniforms[a]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?n.uniforms[a]={type:"m4",value:d.toArray()}:n.uniforms[a]={value:d}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class jm extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=zi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Kn extends jm{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ff*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ff*2*Math.atan(Math.tan(Tl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,r,a,u,d){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Tl*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;u+=d.offsetX*a/p,n-=d.offsetY*r/m,a*=d.width/p,r*=d.height/m}const f=this.filmOffset;f!==0&&(u+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const bs=-90,Ds=1;class _0 extends nn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Kn(bs,Ds,e,n);a.layers=this.layers,this.add(a);const u=new Kn(bs,Ds,e,n);u.layers=this.layers,this.add(u);const d=new Kn(bs,Ds,e,n);d.layers=this.layers,this.add(d);const f=new Kn(bs,Ds,e,n);f.layers=this.layers,this.add(f);const p=new Kn(bs,Ds,e,n);p.layers=this.layers,this.add(p);const m=new Kn(bs,Ds,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,d,f,p]=n;for(const m of n)this.remove(m);if(e===zi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Ll)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,f,p,m,v]=this.children,x=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,d),e.setRenderTarget(r,2,a),e.render(n,f),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=E,e.setRenderTarget(r,5,a),e.render(n,v),e.setRenderTarget(x,y,S),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class Km extends bn{constructor(e,n,r,a,u,d,f,p,m,v){e=e!==void 0?e:[],n=n!==void 0?n:Gs,super(e,n,r,a,u,d,f,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class v0 extends Yr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];n.encoding!==void 0&&(Fo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Xr?on:$n),this.texture=new Km(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:jn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new qs(5,5,5),u=new qr({name:"CubemapFromEquirect",uniforms:Xs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Ln,blending:mr});u.uniforms.tEquirect.value=n;const d=new fi(a,u),f=n.minFilter;return n.minFilter===Oo&&(n.minFilter=jn),new _0(1,10,this).update(e,d),n.minFilter=f,d.geometry.dispose(),d.material.dispose(),this}clear(e,n,r,a){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(n,r,a);e.setRenderTarget(u)}}const Xc=new j,x0=new j,y0=new ft;class Br{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Xc.subVectors(r,n).cross(x0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Xc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||y0.getNormalMatrix(e),a=this.coplanarPoint(Xc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zr=new Ol,hl=new j;class xf{constructor(e=new Br,n=new Br,r=new Br,a=new Br,u=new Br,d=new Br){this.planes=[e,n,r,a,u,d]}set(e,n,r,a,u,d){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(a),f[4].copy(u),f[5].copy(d),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=zi){const r=this.planes,a=e.elements,u=a[0],d=a[1],f=a[2],p=a[3],m=a[4],v=a[5],x=a[6],y=a[7],S=a[8],w=a[9],E=a[10],_=a[11],g=a[12],L=a[13],A=a[14],b=a[15];if(r[0].setComponents(p-u,y-m,_-S,b-g).normalize(),r[1].setComponents(p+u,y+m,_+S,b+g).normalize(),r[2].setComponents(p+d,y+v,_+w,b+L).normalize(),r[3].setComponents(p-d,y-v,_-w,b-L).normalize(),r[4].setComponents(p-f,y-x,_-E,b-A).normalize(),n===zi)r[5].setComponents(p+f,y+x,_+E,b+A).normalize();else if(n===Ll)r[5].setComponents(f,x,E,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zr)}intersectsSprite(e){return zr.center.set(0,0,0),zr.radius=.7071067811865476,zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(zr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(hl.x=a.normal.x>0?e.max.x:e.min.x,hl.y=a.normal.y>0?e.max.y:e.min.y,hl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(hl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $m(){let o=null,e=!1,n=null,r=null;function a(u,d){n(u,d),r=o.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=o.requestAnimationFrame(a),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){o=u}}}function S0(o,e){const n=e.isWebGL2,r=new WeakMap;function a(m,v){const x=m.array,y=m.usage,S=x.byteLength,w=o.createBuffer();o.bindBuffer(v,w),o.bufferData(v,x,y),m.onUploadCallback();let E;if(x instanceof Float32Array)E=o.FLOAT;else if(x instanceof Uint16Array)if(m.isFloat16BufferAttribute)if(n)E=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else E=o.UNSIGNED_SHORT;else if(x instanceof Int16Array)E=o.SHORT;else if(x instanceof Uint32Array)E=o.UNSIGNED_INT;else if(x instanceof Int32Array)E=o.INT;else if(x instanceof Int8Array)E=o.BYTE;else if(x instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(x instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+x);return{buffer:w,type:E,bytesPerElement:x.BYTES_PER_ELEMENT,version:m.version,size:S}}function u(m,v,x){const y=v.array,S=v._updateRange,w=v.updateRanges;if(o.bindBuffer(x,m),S.count===-1&&w.length===0&&o.bufferSubData(x,0,y),w.length!==0){for(let E=0,_=w.length;E<_;E++){const g=w[E];n?o.bufferSubData(x,g.start*y.BYTES_PER_ELEMENT,y,g.start,g.count):o.bufferSubData(x,g.start*y.BYTES_PER_ELEMENT,y.subarray(g.start,g.start+g.count))}v.clearUpdateRanges()}S.count!==-1&&(n?o.bufferSubData(x,S.offset*y.BYTES_PER_ELEMENT,y,S.offset,S.count):o.bufferSubData(x,S.offset*y.BYTES_PER_ELEMENT,y.subarray(S.offset,S.offset+S.count)),S.count=-1),v.onUploadCallback()}function d(m){return m.isInterleavedBufferAttribute&&(m=m.data),r.get(m)}function f(m){m.isInterleavedBufferAttribute&&(m=m.data);const v=r.get(m);v&&(o.deleteBuffer(v.buffer),r.delete(m))}function p(m,v){if(m.isGLBufferAttribute){const y=r.get(m);(!y||y.version<m.version)&&r.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}m.isInterleavedBufferAttribute&&(m=m.data);const x=r.get(m);if(x===void 0)r.set(m,a(m,v));else if(x.version<m.version){if(x.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");u(x.buffer,m,v),x.version=m.version}}return{get:d,remove:f,update:p}}class yf extends Zn{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,d=n/2,f=Math.floor(r),p=Math.floor(a),m=f+1,v=p+1,x=e/f,y=n/p,S=[],w=[],E=[],_=[];for(let g=0;g<v;g++){const L=g*y-d;for(let A=0;A<m;A++){const b=A*x-u;w.push(b,-L,0),E.push(0,0,1),_.push(A/f),_.push(1-g/p)}}for(let g=0;g<p;g++)for(let L=0;L<f;L++){const A=L+m*g,b=L+m*(g+1),k=L+1+m*(g+1),F=L+1+m*g;S.push(A,b,F),S.push(b,k,F)}this.setIndex(S),this.setAttribute("position",new Bn(w,3)),this.setAttribute("normal",new Bn(E,3)),this.setAttribute("uv",new Bn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yf(e.width,e.height,e.widthSegments,e.heightSegments)}}var M0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,E0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,T0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,w0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,R0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,C0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,P0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,L0=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,b0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,D0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,U0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,N0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,I0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,F0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,H0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,G0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,V0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,W0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,X0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Y0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,q0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,j0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,K0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Z0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Q0="gl_FragColor = linearToOutputTexel( gl_FragColor );",J0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,ex=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ix=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ox=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ax=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ux=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,fx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,px=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,mx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,gx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_x=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Sx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ex=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ax=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Cx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Px=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ux=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ix=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ox=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,zx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Bx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$x=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Zx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ey=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ty=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ny=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ry=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,oy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ay=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ly=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,uy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,py=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,my=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,My=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ty=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ay=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ry=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Cy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Py=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ly=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,by=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ny=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Iy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Fy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Oy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,By=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ky=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Yy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ky=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$y=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,at={alphahash_fragment:M0,alphahash_pars_fragment:E0,alphamap_fragment:T0,alphamap_pars_fragment:w0,alphatest_fragment:A0,alphatest_pars_fragment:R0,aomap_fragment:C0,aomap_pars_fragment:P0,batching_pars_vertex:L0,batching_vertex:b0,begin_vertex:D0,beginnormal_vertex:U0,bsdfs:N0,iridescence_fragment:I0,bumpmap_pars_fragment:F0,clipping_planes_fragment:O0,clipping_planes_pars_fragment:z0,clipping_planes_pars_vertex:B0,clipping_planes_vertex:k0,color_fragment:H0,color_pars_fragment:G0,color_pars_vertex:V0,color_vertex:W0,common:X0,cube_uv_reflection_fragment:Y0,defaultnormal_vertex:q0,displacementmap_pars_vertex:j0,displacementmap_vertex:K0,emissivemap_fragment:$0,emissivemap_pars_fragment:Z0,colorspace_fragment:Q0,colorspace_pars_fragment:J0,envmap_fragment:ex,envmap_common_pars_fragment:tx,envmap_pars_fragment:nx,envmap_pars_vertex:ix,envmap_physical_pars_fragment:mx,envmap_vertex:rx,fog_vertex:sx,fog_pars_vertex:ox,fog_fragment:ax,fog_pars_fragment:lx,gradientmap_pars_fragment:ux,lightmap_fragment:cx,lightmap_pars_fragment:fx,lights_lambert_fragment:dx,lights_lambert_pars_fragment:hx,lights_pars_begin:px,lights_toon_fragment:gx,lights_toon_pars_fragment:_x,lights_phong_fragment:vx,lights_phong_pars_fragment:xx,lights_physical_fragment:yx,lights_physical_pars_fragment:Sx,lights_fragment_begin:Mx,lights_fragment_maps:Ex,lights_fragment_end:Tx,logdepthbuf_fragment:wx,logdepthbuf_pars_fragment:Ax,logdepthbuf_pars_vertex:Rx,logdepthbuf_vertex:Cx,map_fragment:Px,map_pars_fragment:Lx,map_particle_fragment:bx,map_particle_pars_fragment:Dx,metalnessmap_fragment:Ux,metalnessmap_pars_fragment:Nx,morphcolor_vertex:Ix,morphnormal_vertex:Fx,morphtarget_pars_vertex:Ox,morphtarget_vertex:zx,normal_fragment_begin:Bx,normal_fragment_maps:kx,normal_pars_fragment:Hx,normal_pars_vertex:Gx,normal_vertex:Vx,normalmap_pars_fragment:Wx,clearcoat_normal_fragment_begin:Xx,clearcoat_normal_fragment_maps:Yx,clearcoat_pars_fragment:qx,iridescence_pars_fragment:jx,opaque_fragment:Kx,packing:$x,premultiplied_alpha_fragment:Zx,project_vertex:Qx,dithering_fragment:Jx,dithering_pars_fragment:ey,roughnessmap_fragment:ty,roughnessmap_pars_fragment:ny,shadowmap_pars_fragment:iy,shadowmap_pars_vertex:ry,shadowmap_vertex:sy,shadowmask_pars_fragment:oy,skinbase_vertex:ay,skinning_pars_vertex:ly,skinning_vertex:uy,skinnormal_vertex:cy,specularmap_fragment:fy,specularmap_pars_fragment:dy,tonemapping_fragment:hy,tonemapping_pars_fragment:py,transmission_fragment:my,transmission_pars_fragment:gy,uv_pars_fragment:_y,uv_pars_vertex:vy,uv_vertex:xy,worldpos_vertex:yy,background_vert:Sy,background_frag:My,backgroundCube_vert:Ey,backgroundCube_frag:Ty,cube_vert:wy,cube_frag:Ay,depth_vert:Ry,depth_frag:Cy,distanceRGBA_vert:Py,distanceRGBA_frag:Ly,equirect_vert:by,equirect_frag:Dy,linedashed_vert:Uy,linedashed_frag:Ny,meshbasic_vert:Iy,meshbasic_frag:Fy,meshlambert_vert:Oy,meshlambert_frag:zy,meshmatcap_vert:By,meshmatcap_frag:ky,meshnormal_vert:Hy,meshnormal_frag:Gy,meshphong_vert:Vy,meshphong_frag:Wy,meshphysical_vert:Xy,meshphysical_frag:Yy,meshtoon_vert:qy,meshtoon_frag:jy,points_vert:Ky,points_frag:$y,shadow_vert:Zy,shadow_frag:Qy,sprite_vert:Jy,sprite_frag:eS},Te={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},vi={basic:{uniforms:xn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:xn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new ht(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:xn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:xn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:xn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new ht(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:xn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:xn([Te.points,Te.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:xn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:xn([Te.common,Te.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:xn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:xn([Te.sprite,Te.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:xn([Te.common,Te.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:xn([Te.lights,Te.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};vi.physical={uniforms:xn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const pl={r:0,b:0,g:0};function tS(o,e,n,r,a,u,d){const f=new ht(0);let p=u===!0?0:1,m,v,x=null,y=0,S=null;function w(_,g){let L=!1,A=g.isScene===!0?g.background:null;A&&A.isTexture&&(A=(g.backgroundBlurriness>0?n:e).get(A)),A===null?E(f,p):A&&A.isColor&&(E(A,1),L=!0);const b=o.xr.getEnvironmentBlendMode();b==="additive"?r.buffers.color.setClear(0,0,0,1,d):b==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||L)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),A&&(A.isCubeTexture||A.mapping===Il)?(v===void 0&&(v=new fi(new qs(1,1,1),new qr({name:"BackgroundCubeMaterial",uniforms:Xs(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(k,F,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(v)),v.material.uniforms.envMap.value=A,v.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,v.material.toneMapped=Et.getTransfer(A.colorSpace)!==bt,(x!==A||y!==A.version||S!==o.toneMapping)&&(v.material.needsUpdate=!0,x=A,y=A.version,S=o.toneMapping),v.layers.enableAll(),_.unshift(v,v.geometry,v.material,0,0,null)):A&&A.isTexture&&(m===void 0&&(m=new fi(new yf(2,2),new qr({name:"BackgroundMaterial",uniforms:Xs(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=A,m.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,m.material.toneMapped=Et.getTransfer(A.colorSpace)!==bt,A.matrixAutoUpdate===!0&&A.updateMatrix(),m.material.uniforms.uvTransform.value.copy(A.matrix),(x!==A||y!==A.version||S!==o.toneMapping)&&(m.material.needsUpdate=!0,x=A,y=A.version,S=o.toneMapping),m.layers.enableAll(),_.unshift(m,m.geometry,m.material,0,0,null))}function E(_,g){_.getRGB(pl,qm(o)),r.buffers.color.setClear(pl.r,pl.g,pl.b,g,d)}return{getClearColor:function(){return f},setClearColor:function(_,g=1){f.set(_),p=g,E(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(_){p=_,E(f,p)},render:w}}function nS(o,e,n,r){const a=o.getParameter(o.MAX_VERTEX_ATTRIBS),u=r.isWebGL2?null:e.get("OES_vertex_array_object"),d=r.isWebGL2||u!==null,f={},p=_(null);let m=p,v=!1;function x(H,te,se,ae,V){let $=!1;if(d){const W=E(ae,se,te);m!==W&&(m=W,S(m.object)),$=g(H,ae,se,V),$&&L(H,ae,se,V)}else{const W=te.wireframe===!0;(m.geometry!==ae.id||m.program!==se.id||m.wireframe!==W)&&(m.geometry=ae.id,m.program=se.id,m.wireframe=W,$=!0)}V!==null&&n.update(V,o.ELEMENT_ARRAY_BUFFER),($||v)&&(v=!1,le(H,te,se,ae),V!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,n.get(V).buffer))}function y(){return r.isWebGL2?o.createVertexArray():u.createVertexArrayOES()}function S(H){return r.isWebGL2?o.bindVertexArray(H):u.bindVertexArrayOES(H)}function w(H){return r.isWebGL2?o.deleteVertexArray(H):u.deleteVertexArrayOES(H)}function E(H,te,se){const ae=se.wireframe===!0;let V=f[H.id];V===void 0&&(V={},f[H.id]=V);let $=V[te.id];$===void 0&&($={},V[te.id]=$);let W=$[ae];return W===void 0&&(W=_(y()),$[ae]=W),W}function _(H){const te=[],se=[],ae=[];for(let V=0;V<a;V++)te[V]=0,se[V]=0,ae[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:te,enabledAttributes:se,attributeDivisors:ae,object:H,attributes:{},index:null}}function g(H,te,se,ae){const V=m.attributes,$=te.attributes;let W=0;const U=se.getAttributes();for(const G in U)if(U[G].location>=0){const re=V[G];let fe=$[G];if(fe===void 0&&(G==="instanceMatrix"&&H.instanceMatrix&&(fe=H.instanceMatrix),G==="instanceColor"&&H.instanceColor&&(fe=H.instanceColor)),re===void 0||re.attribute!==fe||fe&&re.data!==fe.data)return!0;W++}return m.attributesNum!==W||m.index!==ae}function L(H,te,se,ae){const V={},$=te.attributes;let W=0;const U=se.getAttributes();for(const G in U)if(U[G].location>=0){let re=$[G];re===void 0&&(G==="instanceMatrix"&&H.instanceMatrix&&(re=H.instanceMatrix),G==="instanceColor"&&H.instanceColor&&(re=H.instanceColor));const fe={};fe.attribute=re,re&&re.data&&(fe.data=re.data),V[G]=fe,W++}m.attributes=V,m.attributesNum=W,m.index=ae}function A(){const H=m.newAttributes;for(let te=0,se=H.length;te<se;te++)H[te]=0}function b(H){k(H,0)}function k(H,te){const se=m.newAttributes,ae=m.enabledAttributes,V=m.attributeDivisors;se[H]=1,ae[H]===0&&(o.enableVertexAttribArray(H),ae[H]=1),V[H]!==te&&((r.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,te),V[H]=te)}function F(){const H=m.newAttributes,te=m.enabledAttributes;for(let se=0,ae=te.length;se<ae;se++)te[se]!==H[se]&&(o.disableVertexAttribArray(se),te[se]=0)}function I(H,te,se,ae,V,$,W){W===!0?o.vertexAttribIPointer(H,te,se,V,$):o.vertexAttribPointer(H,te,se,ae,V,$)}function le(H,te,se,ae){if(r.isWebGL2===!1&&(H.isInstancedMesh||ae.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;A();const V=ae.attributes,$=se.getAttributes(),W=te.defaultAttributeValues;for(const U in $){const G=$[U];if(G.location>=0){let Y=V[U];if(Y===void 0&&(U==="instanceMatrix"&&H.instanceMatrix&&(Y=H.instanceMatrix),U==="instanceColor"&&H.instanceColor&&(Y=H.instanceColor)),Y!==void 0){const re=Y.normalized,fe=Y.itemSize,ye=n.get(Y);if(ye===void 0)continue;const Me=ye.buffer,Re=ye.type,De=ye.bytesPerElement,Oe=r.isWebGL2===!0&&(Re===o.INT||Re===o.UNSIGNED_INT||Y.gpuType===Cm);if(Y.isInterleavedBufferAttribute){const ut=Y.data,J=ut.stride,Gt=Y.offset;if(ut.isInstancedInterleavedBuffer){for(let Ve=0;Ve<G.locationSize;Ve++)k(G.location+Ve,ut.meshPerAttribute);H.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Ve=0;Ve<G.locationSize;Ve++)b(G.location+Ve);o.bindBuffer(o.ARRAY_BUFFER,Me);for(let Ve=0;Ve<G.locationSize;Ve++)I(G.location+Ve,fe/G.locationSize,Re,re,J*De,(Gt+fe/G.locationSize*Ve)*De,Oe)}else{if(Y.isInstancedBufferAttribute){for(let ut=0;ut<G.locationSize;ut++)k(G.location+ut,Y.meshPerAttribute);H.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ut=0;ut<G.locationSize;ut++)b(G.location+ut);o.bindBuffer(o.ARRAY_BUFFER,Me);for(let ut=0;ut<G.locationSize;ut++)I(G.location+ut,fe/G.locationSize,Re,re,fe*De,fe/G.locationSize*ut*De,Oe)}}else if(W!==void 0){const re=W[U];if(re!==void 0)switch(re.length){case 2:o.vertexAttrib2fv(G.location,re);break;case 3:o.vertexAttrib3fv(G.location,re);break;case 4:o.vertexAttrib4fv(G.location,re);break;default:o.vertexAttrib1fv(G.location,re)}}}}F()}function R(){ue();for(const H in f){const te=f[H];for(const se in te){const ae=te[se];for(const V in ae)w(ae[V].object),delete ae[V];delete te[se]}delete f[H]}}function D(H){if(f[H.id]===void 0)return;const te=f[H.id];for(const se in te){const ae=te[se];for(const V in ae)w(ae[V].object),delete ae[V];delete te[se]}delete f[H.id]}function oe(H){for(const te in f){const se=f[te];if(se[H.id]===void 0)continue;const ae=se[H.id];for(const V in ae)w(ae[V].object),delete ae[V];delete se[H.id]}}function ue(){ve(),v=!0,m!==p&&(m=p,S(m.object))}function ve(){p.geometry=null,p.program=null,p.wireframe=!1}return{setup:x,reset:ue,resetDefaultState:ve,dispose:R,releaseStatesOfGeometry:D,releaseStatesOfProgram:oe,initAttributes:A,enableAttribute:b,disableUnusedAttributes:F}}function iS(o,e,n,r){const a=r.isWebGL2;let u;function d(v){u=v}function f(v,x){o.drawArrays(u,v,x),n.update(x,u,1)}function p(v,x,y){if(y===0)return;let S,w;if(a)S=o,w="drawArraysInstanced";else if(S=e.get("ANGLE_instanced_arrays"),w="drawArraysInstancedANGLE",S===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[w](u,v,x,y),n.update(x,u,y)}function m(v,x,y){if(y===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let w=0;w<y;w++)this.render(v[w],x[w]);else{S.multiDrawArraysWEBGL(u,v,0,x,0,y);let w=0;for(let E=0;E<y;E++)w+=x[E];n.update(w,u,1)}}this.setMode=d,this.render=f,this.renderInstances=p,this.renderMultiDraw=m}function rS(o,e,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const d=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let f=n.precision!==void 0?n.precision:"highp";const p=u(f);p!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",p,"instead."),f=p);const m=d||e.has("WEBGL_draw_buffers"),v=n.logarithmicDepthBuffer===!0,x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),y=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=o.getParameter(o.MAX_TEXTURE_SIZE),w=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),E=o.getParameter(o.MAX_VERTEX_ATTRIBS),_=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),g=o.getParameter(o.MAX_VARYING_VECTORS),L=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),A=y>0,b=d||e.has("OES_texture_float"),k=A&&b,F=d?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:d,drawBuffers:m,getMaxAnisotropy:a,getMaxPrecision:u,precision:f,logarithmicDepthBuffer:v,maxTextures:x,maxVertexTextures:y,maxTextureSize:S,maxCubemapSize:w,maxAttributes:E,maxVertexUniforms:_,maxVaryings:g,maxFragmentUniforms:L,vertexTextures:A,floatFragmentTextures:b,floatVertexTextures:k,maxSamples:F}}function sS(o){const e=this;let n=null,r=0,a=!1,u=!1;const d=new Br,f=new ft,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,y){const S=x.length!==0||y||r!==0||a;return a=y,r=x.length,S},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,y){n=v(x,y,0)},this.setState=function(x,y,S){const w=x.clippingPlanes,E=x.clipIntersection,_=x.clipShadows,g=o.get(x);if(!a||w===null||w.length===0||u&&!_)u?v(null):m();else{const L=u?0:r,A=L*4;let b=g.clippingState||null;p.value=b,b=v(w,y,A,S);for(let k=0;k!==A;++k)b[k]=n[k];g.clippingState=b,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=L}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(x,y,S,w){const E=x!==null?x.length:0;let _=null;if(E!==0){if(_=p.value,w!==!0||_===null){const g=S+E*4,L=y.matrixWorldInverse;f.getNormalMatrix(L),(_===null||_.length<g)&&(_=new Float32Array(g));for(let A=0,b=S;A!==E;++A,b+=4)d.copy(x[A]).applyMatrix4(L,f),d.normal.toArray(_,b),_[b+3]=d.constant}p.value=_,p.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,_}}function oS(o){let e=new WeakMap;function n(d,f){return f===sf?d.mapping=Gs:f===of&&(d.mapping=Vs),d}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===sf||f===of)if(e.has(d)){const p=e.get(d).texture;return n(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const m=new v0(p.height/2);return m.fromEquirectangularTexture(o,d),e.set(d,m),d.addEventListener("dispose",a),n(m.texture,d.mapping)}else return null}}return d}function a(d){const f=d.target;f.removeEventListener("dispose",a);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class Zm extends jm{constructor(e=-1,n=1,r=1,a=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,d=r+e,f=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,d=u+m*this.view.width,f-=v*this.view.offsetY,p=f-v*this.view.height}this.projectionMatrix.makeOrthographic(u,d,f,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const zs=4,jp=[.125,.215,.35,.446,.526,.582],Gr=20,Yc=new Zm,Kp=new ht;let qc=null,jc=0,Kc=0;const kr=(1+Math.sqrt(5))/2,Us=1/kr,$p=[new j(1,1,1),new j(-1,1,1),new j(1,1,-1),new j(-1,1,-1),new j(0,kr,Us),new j(0,kr,-Us),new j(Us,0,kr),new j(-Us,0,kr),new j(kr,Us,0),new j(-kr,Us,0)];class Zp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){qc=this._renderer.getRenderTarget(),jc=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,a,u),n>0&&this._blur(u,0,0,n),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=em(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qc,jc,Kc),e.scissorTest=!1,ml(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Gs||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qc=this._renderer.getRenderTarget(),jc=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel();const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:zo,format:ci,colorSpace:Bi,depthBuffer:!1},a=Qp(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qp(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=aS(u)),this._blurMaterial=lS(u,e,n)}return a}_compileMaterial(e){const n=new fi(this._lodPlanes[0],e);this._renderer.compile(n,Yc)}_sceneToCubeUV(e,n,r,a){const f=new Kn(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,y=v.toneMapping;v.getClearColor(Kp),v.toneMapping=gr,v.autoClear=!1;const S=new Dl({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1}),w=new fi(new qs,S);let E=!1;const _=e.background;_?_.isColor&&(S.color.copy(_),e.background=null,E=!0):(S.color.copy(Kp),E=!0);for(let g=0;g<6;g++){const L=g%3;L===0?(f.up.set(0,p[g],0),f.lookAt(m[g],0,0)):L===1?(f.up.set(0,0,p[g]),f.lookAt(0,m[g],0)):(f.up.set(0,p[g],0),f.lookAt(0,0,m[g]));const A=this._cubeSize;ml(a,L*A,g>2?A:0,A,A),v.setRenderTarget(a),E&&v.render(w,f),v.render(e,f)}w.geometry.dispose(),w.material.dispose(),v.toneMapping=y,v.autoClear=x,e.background=_}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Gs||e.mapping===Vs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=em()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jp());const u=a?this._cubemapMaterial:this._equirectMaterial,d=new fi(this._lodPlanes[0],u),f=u.uniforms;f.envMap.value=e;const p=this._cubeSize;ml(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(d,Yc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const u=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),d=$p[(a-1)%$p.length];this._blur(e,a-1,a,u,d)}n.autoClear=r}_blur(e,n,r,a,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,n,r,a,"latitudinal",u),this._halfBlur(d,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,d,f){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,x=new fi(this._lodPlanes[a],m),y=m.uniforms,S=this._sizeLods[r]-1,w=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Gr-1),E=u/w,_=isFinite(u)?1+Math.floor(v*E):Gr;_>Gr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Gr}`);const g=[];let L=0;for(let I=0;I<Gr;++I){const le=I/E,R=Math.exp(-le*le/2);g.push(R),I===0?L+=R:I<_&&(L+=2*R)}for(let I=0;I<g.length;I++)g[I]=g[I]/L;y.envMap.value=e.texture,y.samples.value=_,y.weights.value=g,y.latitudinal.value=d==="latitudinal",f&&(y.poleAxis.value=f);const{_lodMax:A}=this;y.dTheta.value=w,y.mipInt.value=A-r;const b=this._sizeLods[a],k=3*b*(a>A-zs?a-A+zs:0),F=4*(this._cubeSize-b);ml(n,k,F,3*b,2*b),p.setRenderTarget(n),p.render(x,Yc)}}function aS(o){const e=[],n=[],r=[];let a=o;const u=o-zs+1+jp.length;for(let d=0;d<u;d++){const f=Math.pow(2,a);n.push(f);let p=1/f;d>o-zs?p=jp[d-o+zs-1]:d===0&&(p=0),r.push(p);const m=1/(f-2),v=-m,x=1+m,y=[v,v,x,v,x,x,v,v,x,x,v,x],S=6,w=6,E=3,_=2,g=1,L=new Float32Array(E*w*S),A=new Float32Array(_*w*S),b=new Float32Array(g*w*S);for(let F=0;F<S;F++){const I=F%3*2/3-1,le=F>2?0:-1,R=[I,le,0,I+2/3,le,0,I+2/3,le+1,0,I,le,0,I+2/3,le+1,0,I,le+1,0];L.set(R,E*w*F),A.set(y,_*w*F);const D=[F,F,F,F,F,F];b.set(D,g*w*F)}const k=new Zn;k.setAttribute("position",new di(L,E)),k.setAttribute("uv",new di(A,_)),k.setAttribute("faceIndex",new di(b,g)),e.push(k),a>zs&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Qp(o,e,n){const r=new Yr(o,e,n);return r.texture.mapping=Il,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ml(o,e,n,r,a){o.viewport.set(e,n,r,a),o.scissor.set(e,n,r,a)}function lS(o,e,n){const r=new Float32Array(Gr),a=new j(0,1,0);return new qr({name:"SphericalGaussianBlur",defines:{n:Gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Sf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function Jp(){return new qr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function em(){return new qr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function Sf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function uS(o){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const p=f.mapping,m=p===sf||p===of,v=p===Gs||p===Vs;if(m||v)if(f.isRenderTargetTexture&&f.needsPMREMUpdate===!0){f.needsPMREMUpdate=!1;let x=e.get(f);return n===null&&(n=new Zp(o)),x=m?n.fromEquirectangular(f,x):n.fromCubemap(f,x),e.set(f,x),x.texture}else{if(e.has(f))return e.get(f).texture;{const x=f.image;if(m&&x&&x.height>0||v&&x&&a(x)){n===null&&(n=new Zp(o));const y=m?n.fromEquirectangular(f):n.fromCubemap(f);return e.set(f,y),f.addEventListener("dispose",u),y.texture}else return null}}}return f}function a(f){let p=0;const m=6;for(let v=0;v<m;v++)f[v]!==void 0&&p++;return p===m}function u(f){const p=f.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function d(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function cS(o){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=o.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(r){r.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(r){const a=n(r);return a===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function fS(o,e,n,r){const a={},u=new WeakMap;function d(x){const y=x.target;y.index!==null&&e.remove(y.index);for(const w in y.attributes)e.remove(y.attributes[w]);for(const w in y.morphAttributes){const E=y.morphAttributes[w];for(let _=0,g=E.length;_<g;_++)e.remove(E[_])}y.removeEventListener("dispose",d),delete a[y.id];const S=u.get(y);S&&(e.remove(S),u.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,n.memory.geometries--}function f(x,y){return a[y.id]===!0||(y.addEventListener("dispose",d),a[y.id]=!0,n.memory.geometries++),y}function p(x){const y=x.attributes;for(const w in y)e.update(y[w],o.ARRAY_BUFFER);const S=x.morphAttributes;for(const w in S){const E=S[w];for(let _=0,g=E.length;_<g;_++)e.update(E[_],o.ARRAY_BUFFER)}}function m(x){const y=[],S=x.index,w=x.attributes.position;let E=0;if(S!==null){const L=S.array;E=S.version;for(let A=0,b=L.length;A<b;A+=3){const k=L[A+0],F=L[A+1],I=L[A+2];y.push(k,F,F,I,I,k)}}else if(w!==void 0){const L=w.array;E=w.version;for(let A=0,b=L.length/3-1;A<b;A+=3){const k=A+0,F=A+1,I=A+2;y.push(k,F,F,I,I,k)}}else return;const _=new(zm(y)?Ym:Xm)(y,1);_.version=E;const g=u.get(x);g&&e.remove(g),u.set(x,_)}function v(x){const y=u.get(x);if(y){const S=x.index;S!==null&&y.version<S.version&&m(x)}else m(x);return u.get(x)}return{get:f,update:p,getWireframeAttribute:v}}function dS(o,e,n,r){const a=r.isWebGL2;let u;function d(S){u=S}let f,p;function m(S){f=S.type,p=S.bytesPerElement}function v(S,w){o.drawElements(u,w,f,S*p),n.update(w,u,1)}function x(S,w,E){if(E===0)return;let _,g;if(a)_=o,g="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[g](u,w,f,S*p,E),n.update(w,u,E)}function y(S,w,E){if(E===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<E;g++)this.render(S[g]/p,w[g]);else{_.multiDrawElementsWEBGL(u,w,0,f,S,0,E);let g=0;for(let L=0;L<E;L++)g+=w[L];n.update(g,u,1)}}this.setMode=d,this.setIndex=m,this.render=v,this.renderInstances=x,this.renderMultiDraw=y}function hS(o){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,f){switch(n.calls++,d){case o.TRIANGLES:n.triangles+=f*(u/3);break;case o.LINES:n.lines+=f*(u/2);break;case o.LINE_STRIP:n.lines+=f*(u-1);break;case o.LINE_LOOP:n.lines+=f*u;break;case o.POINTS:n.points+=f*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function pS(o,e){return o[0]-e[0]}function mS(o,e){return Math.abs(e[1])-Math.abs(o[1])}function gS(o,e,n){const r={},a=new Float32Array(8),u=new WeakMap,d=new tn,f=[];for(let m=0;m<8;m++)f[m]=[m,0];function p(m,v,x){const y=m.morphTargetInfluences;if(e.isWebGL2===!0){const w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,E=w!==void 0?w.length:0;let _=u.get(v);if(_===void 0||_.count!==E){let te=function(){ve.dispose(),u.delete(v),v.removeEventListener("dispose",te)};var S=te;_!==void 0&&_.texture.dispose();const A=v.morphAttributes.position!==void 0,b=v.morphAttributes.normal!==void 0,k=v.morphAttributes.color!==void 0,F=v.morphAttributes.position||[],I=v.morphAttributes.normal||[],le=v.morphAttributes.color||[];let R=0;A===!0&&(R=1),b===!0&&(R=2),k===!0&&(R=3);let D=v.attributes.position.count*R,oe=1;D>e.maxTextureSize&&(oe=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const ue=new Float32Array(D*oe*4*E),ve=new Hm(ue,D,oe,E);ve.type=pr,ve.needsUpdate=!0;const H=R*4;for(let se=0;se<E;se++){const ae=F[se],V=I[se],$=le[se],W=D*oe*4*se;for(let U=0;U<ae.count;U++){const G=U*H;A===!0&&(d.fromBufferAttribute(ae,U),ue[W+G+0]=d.x,ue[W+G+1]=d.y,ue[W+G+2]=d.z,ue[W+G+3]=0),b===!0&&(d.fromBufferAttribute(V,U),ue[W+G+4]=d.x,ue[W+G+5]=d.y,ue[W+G+6]=d.z,ue[W+G+7]=0),k===!0&&(d.fromBufferAttribute($,U),ue[W+G+8]=d.x,ue[W+G+9]=d.y,ue[W+G+10]=d.z,ue[W+G+11]=$.itemSize===4?d.w:1)}}_={count:E,texture:ve,size:new dt(D,oe)},u.set(v,_),v.addEventListener("dispose",te)}let g=0;for(let A=0;A<y.length;A++)g+=y[A];const L=v.morphTargetsRelative?1:1-g;x.getUniforms().setValue(o,"morphTargetBaseInfluence",L),x.getUniforms().setValue(o,"morphTargetInfluences",y),x.getUniforms().setValue(o,"morphTargetsTexture",_.texture,n),x.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}else{const w=y===void 0?0:y.length;let E=r[v.id];if(E===void 0||E.length!==w){E=[];for(let b=0;b<w;b++)E[b]=[b,0];r[v.id]=E}for(let b=0;b<w;b++){const k=E[b];k[0]=b,k[1]=y[b]}E.sort(mS);for(let b=0;b<8;b++)b<w&&E[b][1]?(f[b][0]=E[b][0],f[b][1]=E[b][1]):(f[b][0]=Number.MAX_SAFE_INTEGER,f[b][1]=0);f.sort(pS);const _=v.morphAttributes.position,g=v.morphAttributes.normal;let L=0;for(let b=0;b<8;b++){const k=f[b],F=k[0],I=k[1];F!==Number.MAX_SAFE_INTEGER&&I?(_&&v.getAttribute("morphTarget"+b)!==_[F]&&v.setAttribute("morphTarget"+b,_[F]),g&&v.getAttribute("morphNormal"+b)!==g[F]&&v.setAttribute("morphNormal"+b,g[F]),a[b]=I,L+=I):(_&&v.hasAttribute("morphTarget"+b)===!0&&v.deleteAttribute("morphTarget"+b),g&&v.hasAttribute("morphNormal"+b)===!0&&v.deleteAttribute("morphNormal"+b),a[b]=0)}const A=v.morphTargetsRelative?1:1-L;x.getUniforms().setValue(o,"morphTargetBaseInfluence",A),x.getUniforms().setValue(o,"morphTargetInfluences",a)}}return{update:p}}function _S(o,e,n,r){let a=new WeakMap;function u(p){const m=r.render.frame,v=p.geometry,x=e.get(p,v);if(a.get(x)!==m&&(e.update(x),a.set(x,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),a.get(p)!==m&&(n.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,o.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const y=p.skeleton;a.get(y)!==m&&(y.update(),a.set(y,m))}return x}function d(){a=new WeakMap}function f(p){const m=p.target;m.removeEventListener("dispose",f),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:d}}class Qm extends bn{constructor(e,n,r,a,u,d,f,p,m,v){if(v=v!==void 0?v:Wr,v!==Wr&&v!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===Wr&&(r=hr),r===void 0&&v===Ws&&(r=Vr),super(null,a,u,d,f,p,v,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=f!==void 0?f:yn,this.minFilter=p!==void 0?p:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Jm=new bn,eg=new Qm(1,1);eg.compareFunction=Om;const tg=new Hm,ng=new t0,ig=new Km,tm=[],nm=[],im=new Float32Array(16),rm=new Float32Array(9),sm=new Float32Array(4);function js(o,e,n){const r=o[0];if(r<=0||r>0)return o;const a=e*n;let u=tm[a];if(u===void 0&&(u=new Float32Array(a),tm[a]=u),e!==0){r.toArray(u,0);for(let d=1,f=0;d!==e;++d)f+=n,o[d].toArray(u,f)}return u}function jt(o,e){if(o.length!==e.length)return!1;for(let n=0,r=o.length;n<r;n++)if(o[n]!==e[n])return!1;return!0}function Kt(o,e){for(let n=0,r=e.length;n<r;n++)o[n]=e[n]}function Bl(o,e){let n=nm[e];n===void 0&&(n=new Int32Array(e),nm[e]=n);for(let r=0;r!==e;++r)n[r]=o.allocateTextureUnit();return n}function vS(o,e){const n=this.cache;n[0]!==e&&(o.uniform1f(this.addr,e),n[0]=e)}function xS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;o.uniform2fv(this.addr,e),Kt(n,e)}}function yS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(jt(n,e))return;o.uniform3fv(this.addr,e),Kt(n,e)}}function SS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;o.uniform4fv(this.addr,e),Kt(n,e)}}function MS(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(jt(n,e))return;o.uniformMatrix2fv(this.addr,!1,e),Kt(n,e)}else{if(jt(n,r))return;sm.set(r),o.uniformMatrix2fv(this.addr,!1,sm),Kt(n,r)}}function ES(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(jt(n,e))return;o.uniformMatrix3fv(this.addr,!1,e),Kt(n,e)}else{if(jt(n,r))return;rm.set(r),o.uniformMatrix3fv(this.addr,!1,rm),Kt(n,r)}}function TS(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(jt(n,e))return;o.uniformMatrix4fv(this.addr,!1,e),Kt(n,e)}else{if(jt(n,r))return;im.set(r),o.uniformMatrix4fv(this.addr,!1,im),Kt(n,r)}}function wS(o,e){const n=this.cache;n[0]!==e&&(o.uniform1i(this.addr,e),n[0]=e)}function AS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;o.uniform2iv(this.addr,e),Kt(n,e)}}function RS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(jt(n,e))return;o.uniform3iv(this.addr,e),Kt(n,e)}}function CS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;o.uniform4iv(this.addr,e),Kt(n,e)}}function PS(o,e){const n=this.cache;n[0]!==e&&(o.uniform1ui(this.addr,e),n[0]=e)}function LS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;o.uniform2uiv(this.addr,e),Kt(n,e)}}function bS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(jt(n,e))return;o.uniform3uiv(this.addr,e),Kt(n,e)}}function DS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;o.uniform4uiv(this.addr,e),Kt(n,e)}}function US(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a);const u=this.type===o.SAMPLER_2D_SHADOW?eg:Jm;n.setTexture2D(e||u,a)}function NS(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||ng,a)}function IS(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||ig,a)}function FS(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||tg,a)}function OS(o){switch(o){case 5126:return vS;case 35664:return xS;case 35665:return yS;case 35666:return SS;case 35674:return MS;case 35675:return ES;case 35676:return TS;case 5124:case 35670:return wS;case 35667:case 35671:return AS;case 35668:case 35672:return RS;case 35669:case 35673:return CS;case 5125:return PS;case 36294:return LS;case 36295:return bS;case 36296:return DS;case 35678:case 36198:case 36298:case 36306:case 35682:return US;case 35679:case 36299:case 36307:return NS;case 35680:case 36300:case 36308:case 36293:return IS;case 36289:case 36303:case 36311:case 36292:return FS}}function zS(o,e){o.uniform1fv(this.addr,e)}function BS(o,e){const n=js(e,this.size,2);o.uniform2fv(this.addr,n)}function kS(o,e){const n=js(e,this.size,3);o.uniform3fv(this.addr,n)}function HS(o,e){const n=js(e,this.size,4);o.uniform4fv(this.addr,n)}function GS(o,e){const n=js(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function VS(o,e){const n=js(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function WS(o,e){const n=js(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function XS(o,e){o.uniform1iv(this.addr,e)}function YS(o,e){o.uniform2iv(this.addr,e)}function qS(o,e){o.uniform3iv(this.addr,e)}function jS(o,e){o.uniform4iv(this.addr,e)}function KS(o,e){o.uniform1uiv(this.addr,e)}function $S(o,e){o.uniform2uiv(this.addr,e)}function ZS(o,e){o.uniform3uiv(this.addr,e)}function QS(o,e){o.uniform4uiv(this.addr,e)}function JS(o,e,n){const r=this.cache,a=e.length,u=Bl(n,a);jt(r,u)||(o.uniform1iv(this.addr,u),Kt(r,u));for(let d=0;d!==a;++d)n.setTexture2D(e[d]||Jm,u[d])}function eM(o,e,n){const r=this.cache,a=e.length,u=Bl(n,a);jt(r,u)||(o.uniform1iv(this.addr,u),Kt(r,u));for(let d=0;d!==a;++d)n.setTexture3D(e[d]||ng,u[d])}function tM(o,e,n){const r=this.cache,a=e.length,u=Bl(n,a);jt(r,u)||(o.uniform1iv(this.addr,u),Kt(r,u));for(let d=0;d!==a;++d)n.setTextureCube(e[d]||ig,u[d])}function nM(o,e,n){const r=this.cache,a=e.length,u=Bl(n,a);jt(r,u)||(o.uniform1iv(this.addr,u),Kt(r,u));for(let d=0;d!==a;++d)n.setTexture2DArray(e[d]||tg,u[d])}function iM(o){switch(o){case 5126:return zS;case 35664:return BS;case 35665:return kS;case 35666:return HS;case 35674:return GS;case 35675:return VS;case 35676:return WS;case 5124:case 35670:return XS;case 35667:case 35671:return YS;case 35668:case 35672:return qS;case 35669:case 35673:return jS;case 5125:return KS;case 36294:return $S;case 36295:return ZS;case 36296:return QS;case 35678:case 36198:case 36298:case 36306:case 35682:return JS;case 35679:case 36299:case 36307:return eM;case 35680:case 36300:case 36308:case 36293:return tM;case 36289:case 36303:case 36311:case 36292:return nM}}class rM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=OS(n.type)}}class sM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=iM(n.type)}}class oM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,d=a.length;u!==d;++u){const f=a[u];f.setValue(e,n[f.id],r)}}}const $c=/(\w+)(\])?(\[|\.)?/g;function om(o,e){o.seq.push(e),o.map[e.id]=e}function aM(o,e,n){const r=o.name,a=r.length;for($c.lastIndex=0;;){const u=$c.exec(r),d=$c.lastIndex;let f=u[1];const p=u[2]==="]",m=u[3];if(p&&(f=f|0),m===void 0||m==="["&&d+2===a){om(n,m===void 0?new rM(f,o,e):new sM(f,o,e));break}else{let x=n.map[f];x===void 0&&(x=new oM(f),om(n,x)),n=x}}}class wl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),d=e.getUniformLocation(n,u.name);aM(u,d,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,d=n.length;u!==d;++u){const f=n[u],p=r[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const d=e[a];d.id in n&&r.push(d)}return r}}function am(o,e,n){const r=o.createShader(e);return o.shaderSource(r,n),o.compileShader(r),r}const lM=37297;let uM=0;function cM(o,e){const n=o.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let d=a;d<u;d++){const f=d+1;r.push(`${f===e?">":" "} ${f}: ${n[d]}`)}return r.join(`
`)}function fM(o){const e=Et.getPrimaries(Et.workingColorSpace),n=Et.getPrimaries(o);let r;switch(e===n?r="":e===Pl&&n===Cl?r="LinearDisplayP3ToLinearSRGB":e===Cl&&n===Pl&&(r="LinearSRGBToLinearDisplayP3"),o){case Bi:case Fl:return[r,"LinearTransferOETF"];case on:case vf:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[r,"LinearTransferOETF"]}}function lm(o,e,n){const r=o.getShaderParameter(e,o.COMPILE_STATUS),a=o.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const d=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+cM(o.getShaderSource(e),d)}else return a}function dM(o,e){const n=fM(e);return`vec4 ${o}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function hM(o,e){let n;switch(e){case Tv:n="Linear";break;case wv:n="Reinhard";break;case Av:n="OptimizedCineon";break;case Rv:n="ACESFilmic";break;case Pv:n="AgX";break;case Cv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function pM(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Bs).join(`
`)}function mM(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Bs).join(`
`)}function gM(o){const e=[];for(const n in o){const r=o[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function _M(o,e){const n={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=o.getActiveAttrib(e,a),d=u.name;let f=1;u.type===o.FLOAT_MAT2&&(f=2),u.type===o.FLOAT_MAT3&&(f=3),u.type===o.FLOAT_MAT4&&(f=4),n[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:f}}return n}function Bs(o){return o!==""}function um(o,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cm(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vM=/^[ \t]*#include +<([\w\d./]+)>/gm;function hf(o){return o.replace(vM,yM)}const xM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function yM(o,e){let n=at[e];if(n===void 0){const r=xM.get(e);if(r!==void 0)n=at[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return hf(n)}const SM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fm(o){return o.replace(SM,MM)}function MM(o,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function dm(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function EM(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Am?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Q_?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ii&&(e="SHADOWMAP_TYPE_VSM"),e}function TM(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Gs:case Vs:e="ENVMAP_TYPE_CUBE";break;case Il:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wM(o){let e="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===Vs&&(e="ENVMAP_MODE_REFRACTION"),e}function AM(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case gf:e="ENVMAP_BLENDING_MULTIPLY";break;case Mv:e="ENVMAP_BLENDING_MIX";break;case Ev:e="ENVMAP_BLENDING_ADD";break}return e}function RM(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function CM(o,e,n,r){const a=o.getContext(),u=n.defines;let d=n.vertexShader,f=n.fragmentShader;const p=EM(n),m=TM(n),v=wM(n),x=AM(n),y=RM(n),S=n.isWebGL2?"":pM(n),w=mM(n),E=gM(u),_=a.createProgram();let g,L,A=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Bs).join(`
`),g.length>0&&(g+=`
`),L=[S,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Bs).join(`
`),L.length>0&&(L+=`
`)):(g=[dm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bs).join(`
`),L=[S,dm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",n.envMap?"#define "+x:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==gr?"#define TONE_MAPPING":"",n.toneMapping!==gr?at.tonemapping_pars_fragment:"",n.toneMapping!==gr?hM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,dM("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Bs).join(`
`)),d=hf(d),d=um(d,n),d=cm(d,n),f=hf(f),f=um(f,n),f=cm(f,n),d=fm(d),f=fm(f),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,g=[w,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,L=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Lp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Lp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+L);const b=A+g+d,k=A+L+f,F=am(a,a.VERTEX_SHADER,b),I=am(a,a.FRAGMENT_SHADER,k);a.attachShader(_,F),a.attachShader(_,I),n.index0AttributeName!==void 0?a.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(_,0,"position"),a.linkProgram(_);function le(ue){if(o.debug.checkShaderErrors){const ve=a.getProgramInfoLog(_).trim(),H=a.getShaderInfoLog(F).trim(),te=a.getShaderInfoLog(I).trim();let se=!0,ae=!0;if(a.getProgramParameter(_,a.LINK_STATUS)===!1)if(se=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(a,_,F,I);else{const V=lm(a,F,"vertex"),$=lm(a,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(_,a.VALIDATE_STATUS)+`

Program Info Log: `+ve+`
`+V+`
`+$)}else ve!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ve):(H===""||te==="")&&(ae=!1);ae&&(ue.diagnostics={runnable:se,programLog:ve,vertexShader:{log:H,prefix:g},fragmentShader:{log:te,prefix:L}})}a.deleteShader(F),a.deleteShader(I),R=new wl(a,_),D=_M(a,_)}let R;this.getUniforms=function(){return R===void 0&&le(this),R};let D;this.getAttributes=function(){return D===void 0&&le(this),D};let oe=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return oe===!1&&(oe=a.getProgramParameter(_,lM)),oe},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=uM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=F,this.fragmentShader=I,this}let PM=0;class LM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(a)===!1&&(d.add(a),a.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new bM(e),n.set(e,r)),r}}class bM{constructor(e){this.id=PM++,this.code=e,this.usedTimes=0}}function DM(o,e,n,r,a,u,d){const f=new Vm,p=new LM,m=[],v=a.isWebGL2,x=a.logarithmicDepthBuffer,y=a.vertexTextures;let S=a.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(R){return R===0?"uv":`uv${R}`}function _(R,D,oe,ue,ve){const H=ue.fog,te=ve.geometry,se=R.isMeshStandardMaterial?ue.environment:null,ae=(R.isMeshStandardMaterial?n:e).get(R.envMap||se),V=ae&&ae.mapping===Il?ae.image.height:null,$=w[R.type];R.precision!==null&&(S=a.getMaxPrecision(R.precision),S!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",S,"instead."));const W=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,U=W!==void 0?W.length:0;let G=0;te.morphAttributes.position!==void 0&&(G=1),te.morphAttributes.normal!==void 0&&(G=2),te.morphAttributes.color!==void 0&&(G=3);let Y,re,fe,ye;if($){const $t=vi[$];Y=$t.vertexShader,re=$t.fragmentShader}else Y=R.vertexShader,re=R.fragmentShader,p.update(R),fe=p.getVertexShaderID(R),ye=p.getFragmentShaderID(R);const Me=o.getRenderTarget(),Re=ve.isInstancedMesh===!0,De=ve.isBatchedMesh===!0,Oe=!!R.map,ut=!!R.matcap,J=!!ae,Gt=!!R.aoMap,Ve=!!R.lightMap,Je=!!R.bumpMap,Be=!!R.normalMap,Tt=!!R.displacementMap,nt=!!R.emissiveMap,P=!!R.metalnessMap,T=!!R.roughnessMap,Z=R.anisotropy>0,ge=R.clearcoat>0,pe=R.iridescence>0,_e=R.sheen>0,ke=R.transmission>0,Ae=Z&&!!R.anisotropyMap,Ue=ge&&!!R.clearcoatMap,We=ge&&!!R.clearcoatNormalMap,it=ge&&!!R.clearcoatRoughnessMap,he=pe&&!!R.iridescenceMap,pt=pe&&!!R.iridescenceThicknessMap,lt=_e&&!!R.sheenColorMap,Ze=_e&&!!R.sheenRoughnessMap,Ge=!!R.specularMap,Ie=!!R.specularColorMap,et=!!R.specularIntensityMap,gt=ke&&!!R.transmissionMap,At=ke&&!!R.thicknessMap,rt=!!R.gradientMap,Se=!!R.alphaMap,z=R.alphaTest>0,Ee=!!R.alphaHash,we=!!R.extensions,Ke=!!te.attributes.uv1,Xe=!!te.attributes.uv2,yt=!!te.attributes.uv3;let St=gr;return R.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(St=o.toneMapping),{isWebGL2:v,shaderID:$,shaderType:R.type,shaderName:R.name,vertexShader:Y,fragmentShader:re,defines:R.defines,customVertexShaderID:fe,customFragmentShaderID:ye,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:S,batching:De,instancing:Re,instancingColor:Re&&ve.instanceColor!==null,supportsVertexTextures:y,outputColorSpace:Me===null?o.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:Bi,map:Oe,matcap:ut,envMap:J,envMapMode:J&&ae.mapping,envMapCubeUVHeight:V,aoMap:Gt,lightMap:Ve,bumpMap:Je,normalMap:Be,displacementMap:y&&Tt,emissiveMap:nt,normalMapObjectSpace:Be&&R.normalMapType===Hv,normalMapTangentSpace:Be&&R.normalMapType===Fm,metalnessMap:P,roughnessMap:T,anisotropy:Z,anisotropyMap:Ae,clearcoat:ge,clearcoatMap:Ue,clearcoatNormalMap:We,clearcoatRoughnessMap:it,iridescence:pe,iridescenceMap:he,iridescenceThicknessMap:pt,sheen:_e,sheenColorMap:lt,sheenRoughnessMap:Ze,specularMap:Ge,specularColorMap:Ie,specularIntensityMap:et,transmission:ke,transmissionMap:gt,thicknessMap:At,gradientMap:rt,opaque:R.transparent===!1&&R.blending===ks,alphaMap:Se,alphaTest:z,alphaHash:Ee,combine:R.combine,mapUv:Oe&&E(R.map.channel),aoMapUv:Gt&&E(R.aoMap.channel),lightMapUv:Ve&&E(R.lightMap.channel),bumpMapUv:Je&&E(R.bumpMap.channel),normalMapUv:Be&&E(R.normalMap.channel),displacementMapUv:Tt&&E(R.displacementMap.channel),emissiveMapUv:nt&&E(R.emissiveMap.channel),metalnessMapUv:P&&E(R.metalnessMap.channel),roughnessMapUv:T&&E(R.roughnessMap.channel),anisotropyMapUv:Ae&&E(R.anisotropyMap.channel),clearcoatMapUv:Ue&&E(R.clearcoatMap.channel),clearcoatNormalMapUv:We&&E(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&E(R.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&E(R.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&E(R.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&E(R.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&E(R.sheenRoughnessMap.channel),specularMapUv:Ge&&E(R.specularMap.channel),specularColorMapUv:Ie&&E(R.specularColorMap.channel),specularIntensityMapUv:et&&E(R.specularIntensityMap.channel),transmissionMapUv:gt&&E(R.transmissionMap.channel),thicknessMapUv:At&&E(R.thicknessMap.channel),alphaMapUv:Se&&E(R.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(Be||Z),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,vertexUv1s:Ke,vertexUv2s:Xe,vertexUv3s:yt,pointsUvs:ve.isPoints===!0&&!!te.attributes.uv&&(Oe||Se),fog:!!H,useFog:R.fog===!0,fogExp2:H&&H.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:x,skinning:ve.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:G,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:R.dithering,shadowMapEnabled:o.shadowMap.enabled&&oe.length>0,shadowMapType:o.shadowMap.type,toneMapping:St,useLegacyLights:o._useLegacyLights,decodeVideoTexture:Oe&&R.map.isVideoTexture===!0&&Et.getTransfer(R.map.colorSpace)===bt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Fi,flipSided:R.side===Ln,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionDerivatives:we&&R.extensions.derivatives===!0,extensionFragDepth:we&&R.extensions.fragDepth===!0,extensionDrawBuffers:we&&R.extensions.drawBuffers===!0,extensionShaderTextureLOD:we&&R.extensions.shaderTextureLOD===!0,extensionClipCullDistance:we&&R.extensions.clipCullDistance&&r.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:v||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:v||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:v||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()}}function g(R){const D=[];if(R.shaderID?D.push(R.shaderID):(D.push(R.customVertexShaderID),D.push(R.customFragmentShaderID)),R.defines!==void 0)for(const oe in R.defines)D.push(oe),D.push(R.defines[oe]);return R.isRawShaderMaterial===!1&&(L(D,R),A(D,R),D.push(o.outputColorSpace)),D.push(R.customProgramCacheKey),D.join()}function L(R,D){R.push(D.precision),R.push(D.outputColorSpace),R.push(D.envMapMode),R.push(D.envMapCubeUVHeight),R.push(D.mapUv),R.push(D.alphaMapUv),R.push(D.lightMapUv),R.push(D.aoMapUv),R.push(D.bumpMapUv),R.push(D.normalMapUv),R.push(D.displacementMapUv),R.push(D.emissiveMapUv),R.push(D.metalnessMapUv),R.push(D.roughnessMapUv),R.push(D.anisotropyMapUv),R.push(D.clearcoatMapUv),R.push(D.clearcoatNormalMapUv),R.push(D.clearcoatRoughnessMapUv),R.push(D.iridescenceMapUv),R.push(D.iridescenceThicknessMapUv),R.push(D.sheenColorMapUv),R.push(D.sheenRoughnessMapUv),R.push(D.specularMapUv),R.push(D.specularColorMapUv),R.push(D.specularIntensityMapUv),R.push(D.transmissionMapUv),R.push(D.thicknessMapUv),R.push(D.combine),R.push(D.fogExp2),R.push(D.sizeAttenuation),R.push(D.morphTargetsCount),R.push(D.morphAttributeCount),R.push(D.numDirLights),R.push(D.numPointLights),R.push(D.numSpotLights),R.push(D.numSpotLightMaps),R.push(D.numHemiLights),R.push(D.numRectAreaLights),R.push(D.numDirLightShadows),R.push(D.numPointLightShadows),R.push(D.numSpotLightShadows),R.push(D.numSpotLightShadowsWithMaps),R.push(D.numLightProbes),R.push(D.shadowMapType),R.push(D.toneMapping),R.push(D.numClippingPlanes),R.push(D.numClipIntersection),R.push(D.depthPacking)}function A(R,D){f.disableAll(),D.isWebGL2&&f.enable(0),D.supportsVertexTextures&&f.enable(1),D.instancing&&f.enable(2),D.instancingColor&&f.enable(3),D.matcap&&f.enable(4),D.envMap&&f.enable(5),D.normalMapObjectSpace&&f.enable(6),D.normalMapTangentSpace&&f.enable(7),D.clearcoat&&f.enable(8),D.iridescence&&f.enable(9),D.alphaTest&&f.enable(10),D.vertexColors&&f.enable(11),D.vertexAlphas&&f.enable(12),D.vertexUv1s&&f.enable(13),D.vertexUv2s&&f.enable(14),D.vertexUv3s&&f.enable(15),D.vertexTangents&&f.enable(16),D.anisotropy&&f.enable(17),D.alphaHash&&f.enable(18),D.batching&&f.enable(19),R.push(f.mask),f.disableAll(),D.fog&&f.enable(0),D.useFog&&f.enable(1),D.flatShading&&f.enable(2),D.logarithmicDepthBuffer&&f.enable(3),D.skinning&&f.enable(4),D.morphTargets&&f.enable(5),D.morphNormals&&f.enable(6),D.morphColors&&f.enable(7),D.premultipliedAlpha&&f.enable(8),D.shadowMapEnabled&&f.enable(9),D.useLegacyLights&&f.enable(10),D.doubleSided&&f.enable(11),D.flipSided&&f.enable(12),D.useDepthPacking&&f.enable(13),D.dithering&&f.enable(14),D.transmission&&f.enable(15),D.sheen&&f.enable(16),D.opaque&&f.enable(17),D.pointsUvs&&f.enable(18),D.decodeVideoTexture&&f.enable(19),R.push(f.mask)}function b(R){const D=w[R.type];let oe;if(D){const ue=vi[D];oe=p0.clone(ue.uniforms)}else oe=R.uniforms;return oe}function k(R,D){let oe;for(let ue=0,ve=m.length;ue<ve;ue++){const H=m[ue];if(H.cacheKey===D){oe=H,++oe.usedTimes;break}}return oe===void 0&&(oe=new CM(o,D,R,u),m.push(oe)),oe}function F(R){if(--R.usedTimes===0){const D=m.indexOf(R);m[D]=m[m.length-1],m.pop(),R.destroy()}}function I(R){p.remove(R)}function le(){p.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:b,acquireProgram:k,releaseProgram:F,releaseShaderCache:I,programs:m,dispose:le}}function UM(){let o=new WeakMap;function e(u){let d=o.get(u);return d===void 0&&(d={},o.set(u,d)),d}function n(u){o.delete(u)}function r(u,d,f){o.get(u)[d]=f}function a(){o=new WeakMap}return{get:e,remove:n,update:r,dispose:a}}function NM(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function hm(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function pm(){const o=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function d(x,y,S,w,E,_){let g=o[e];return g===void 0?(g={id:x.id,object:x,geometry:y,material:S,groupOrder:w,renderOrder:x.renderOrder,z:E,group:_},o[e]=g):(g.id=x.id,g.object=x,g.geometry=y,g.material=S,g.groupOrder=w,g.renderOrder=x.renderOrder,g.z=E,g.group=_),e++,g}function f(x,y,S,w,E,_){const g=d(x,y,S,w,E,_);S.transmission>0?r.push(g):S.transparent===!0?a.push(g):n.push(g)}function p(x,y,S,w,E,_){const g=d(x,y,S,w,E,_);S.transmission>0?r.unshift(g):S.transparent===!0?a.unshift(g):n.unshift(g)}function m(x,y){n.length>1&&n.sort(x||NM),r.length>1&&r.sort(y||hm),a.length>1&&a.sort(y||hm)}function v(){for(let x=e,y=o.length;x<y;x++){const S=o[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:f,unshift:p,finish:v,sort:m}}function IM(){let o=new WeakMap;function e(r,a){const u=o.get(r);let d;return u===void 0?(d=new pm,o.set(r,[d])):a>=u.length?(d=new pm,u.push(d)):d=u[a],d}function n(){o=new WeakMap}return{get:e,dispose:n}}function FM(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new ht};break;case"SpotLight":n={position:new j,direction:new j,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new ht,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":n={color:new ht,position:new j,halfWidth:new j,halfHeight:new j};break}return o[e.id]=n,n}}}function OM(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=n,n}}}let zM=0;function BM(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function kM(o,e){const n=new FM,r=OM(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let v=0;v<9;v++)a.probe.push(new j);const u=new j,d=new Ht,f=new Ht;function p(v,x){let y=0,S=0,w=0;for(let ue=0;ue<9;ue++)a.probe[ue].set(0,0,0);let E=0,_=0,g=0,L=0,A=0,b=0,k=0,F=0,I=0,le=0,R=0;v.sort(BM);const D=x===!0?Math.PI:1;for(let ue=0,ve=v.length;ue<ve;ue++){const H=v[ue],te=H.color,se=H.intensity,ae=H.distance,V=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)y+=te.r*se*D,S+=te.g*se*D,w+=te.b*se*D;else if(H.isLightProbe){for(let $=0;$<9;$++)a.probe[$].addScaledVector(H.sh.coefficients[$],se);R++}else if(H.isDirectionalLight){const $=n.get(H);if($.color.copy(H.color).multiplyScalar(H.intensity*D),H.castShadow){const W=H.shadow,U=r.get(H);U.shadowBias=W.bias,U.shadowNormalBias=W.normalBias,U.shadowRadius=W.radius,U.shadowMapSize=W.mapSize,a.directionalShadow[E]=U,a.directionalShadowMap[E]=V,a.directionalShadowMatrix[E]=H.shadow.matrix,b++}a.directional[E]=$,E++}else if(H.isSpotLight){const $=n.get(H);$.position.setFromMatrixPosition(H.matrixWorld),$.color.copy(te).multiplyScalar(se*D),$.distance=ae,$.coneCos=Math.cos(H.angle),$.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),$.decay=H.decay,a.spot[g]=$;const W=H.shadow;if(H.map&&(a.spotLightMap[I]=H.map,I++,W.updateMatrices(H),H.castShadow&&le++),a.spotLightMatrix[g]=W.matrix,H.castShadow){const U=r.get(H);U.shadowBias=W.bias,U.shadowNormalBias=W.normalBias,U.shadowRadius=W.radius,U.shadowMapSize=W.mapSize,a.spotShadow[g]=U,a.spotShadowMap[g]=V,F++}g++}else if(H.isRectAreaLight){const $=n.get(H);$.color.copy(te).multiplyScalar(se),$.halfWidth.set(H.width*.5,0,0),$.halfHeight.set(0,H.height*.5,0),a.rectArea[L]=$,L++}else if(H.isPointLight){const $=n.get(H);if($.color.copy(H.color).multiplyScalar(H.intensity*D),$.distance=H.distance,$.decay=H.decay,H.castShadow){const W=H.shadow,U=r.get(H);U.shadowBias=W.bias,U.shadowNormalBias=W.normalBias,U.shadowRadius=W.radius,U.shadowMapSize=W.mapSize,U.shadowCameraNear=W.camera.near,U.shadowCameraFar=W.camera.far,a.pointShadow[_]=U,a.pointShadowMap[_]=V,a.pointShadowMatrix[_]=H.shadow.matrix,k++}a.point[_]=$,_++}else if(H.isHemisphereLight){const $=n.get(H);$.skyColor.copy(H.color).multiplyScalar(se*D),$.groundColor.copy(H.groundColor).multiplyScalar(se*D),a.hemi[A]=$,A++}}L>0&&(e.isWebGL2?o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Te.LTC_FLOAT_1,a.rectAreaLTC2=Te.LTC_FLOAT_2):(a.rectAreaLTC1=Te.LTC_HALF_1,a.rectAreaLTC2=Te.LTC_HALF_2):o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Te.LTC_FLOAT_1,a.rectAreaLTC2=Te.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=Te.LTC_HALF_1,a.rectAreaLTC2=Te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=y,a.ambient[1]=S,a.ambient[2]=w;const oe=a.hash;(oe.directionalLength!==E||oe.pointLength!==_||oe.spotLength!==g||oe.rectAreaLength!==L||oe.hemiLength!==A||oe.numDirectionalShadows!==b||oe.numPointShadows!==k||oe.numSpotShadows!==F||oe.numSpotMaps!==I||oe.numLightProbes!==R)&&(a.directional.length=E,a.spot.length=g,a.rectArea.length=L,a.point.length=_,a.hemi.length=A,a.directionalShadow.length=b,a.directionalShadowMap.length=b,a.pointShadow.length=k,a.pointShadowMap.length=k,a.spotShadow.length=F,a.spotShadowMap.length=F,a.directionalShadowMatrix.length=b,a.pointShadowMatrix.length=k,a.spotLightMatrix.length=F+I-le,a.spotLightMap.length=I,a.numSpotLightShadowsWithMaps=le,a.numLightProbes=R,oe.directionalLength=E,oe.pointLength=_,oe.spotLength=g,oe.rectAreaLength=L,oe.hemiLength=A,oe.numDirectionalShadows=b,oe.numPointShadows=k,oe.numSpotShadows=F,oe.numSpotMaps=I,oe.numLightProbes=R,a.version=zM++)}function m(v,x){let y=0,S=0,w=0,E=0,_=0;const g=x.matrixWorldInverse;for(let L=0,A=v.length;L<A;L++){const b=v[L];if(b.isDirectionalLight){const k=a.directional[y];k.direction.setFromMatrixPosition(b.matrixWorld),u.setFromMatrixPosition(b.target.matrixWorld),k.direction.sub(u),k.direction.transformDirection(g),y++}else if(b.isSpotLight){const k=a.spot[w];k.position.setFromMatrixPosition(b.matrixWorld),k.position.applyMatrix4(g),k.direction.setFromMatrixPosition(b.matrixWorld),u.setFromMatrixPosition(b.target.matrixWorld),k.direction.sub(u),k.direction.transformDirection(g),w++}else if(b.isRectAreaLight){const k=a.rectArea[E];k.position.setFromMatrixPosition(b.matrixWorld),k.position.applyMatrix4(g),f.identity(),d.copy(b.matrixWorld),d.premultiply(g),f.extractRotation(d),k.halfWidth.set(b.width*.5,0,0),k.halfHeight.set(0,b.height*.5,0),k.halfWidth.applyMatrix4(f),k.halfHeight.applyMatrix4(f),E++}else if(b.isPointLight){const k=a.point[S];k.position.setFromMatrixPosition(b.matrixWorld),k.position.applyMatrix4(g),S++}else if(b.isHemisphereLight){const k=a.hemi[_];k.direction.setFromMatrixPosition(b.matrixWorld),k.direction.transformDirection(g),_++}}}return{setup:p,setupView:m,state:a}}function mm(o,e){const n=new kM(o,e),r=[],a=[];function u(){r.length=0,a.length=0}function d(x){r.push(x)}function f(x){a.push(x)}function p(x){n.setup(r,x)}function m(x){n.setupView(r,x)}return{init:u,state:{lightsArray:r,shadowsArray:a,lights:n},setupLights:p,setupLightsView:m,pushLight:d,pushShadow:f}}function HM(o,e){let n=new WeakMap;function r(u,d=0){const f=n.get(u);let p;return f===void 0?(p=new mm(o,e),n.set(u,[p])):d>=f.length?(p=new mm(o,e),f.push(p)):p=f[d],p}function a(){n=new WeakMap}return{get:r,dispose:a}}class GM extends jr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class VM extends jr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const WM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function YM(o,e,n){let r=new xf;const a=new dt,u=new dt,d=new tn,f=new GM({depthPacking:kv}),p=new VM,m={},v=n.maxTextureSize,x={[xr]:Ln,[Ln]:xr,[Fi]:Fi},y=new qr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:WM,fragmentShader:XM}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const w=new Zn;w.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new fi(w,y),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Am;let g=this.type;this.render=function(F,I,le){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||F.length===0)return;const R=o.getRenderTarget(),D=o.getActiveCubeFace(),oe=o.getActiveMipmapLevel(),ue=o.state;ue.setBlending(mr),ue.buffers.color.setClear(1,1,1,1),ue.buffers.depth.setTest(!0),ue.setScissorTest(!1);const ve=g!==Ii&&this.type===Ii,H=g===Ii&&this.type!==Ii;for(let te=0,se=F.length;te<se;te++){const ae=F[te],V=ae.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;a.copy(V.mapSize);const $=V.getFrameExtents();if(a.multiply($),u.copy(V.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(u.x=Math.floor(v/$.x),a.x=u.x*$.x,V.mapSize.x=u.x),a.y>v&&(u.y=Math.floor(v/$.y),a.y=u.y*$.y,V.mapSize.y=u.y)),V.map===null||ve===!0||H===!0){const U=this.type!==Ii?{minFilter:yn,magFilter:yn}:{};V.map!==null&&V.map.dispose(),V.map=new Yr(a.x,a.y,U),V.map.texture.name=ae.name+".shadowMap",V.camera.updateProjectionMatrix()}o.setRenderTarget(V.map),o.clear();const W=V.getViewportCount();for(let U=0;U<W;U++){const G=V.getViewport(U);d.set(u.x*G.x,u.y*G.y,u.x*G.z,u.y*G.w),ue.viewport(d),V.updateMatrices(ae,U),r=V.getFrustum(),b(I,le,V.camera,ae,this.type)}V.isPointLightShadow!==!0&&this.type===Ii&&L(V,le),V.needsUpdate=!1}g=this.type,_.needsUpdate=!1,o.setRenderTarget(R,D,oe)};function L(F,I){const le=e.update(E);y.defines.VSM_SAMPLES!==F.blurSamples&&(y.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Yr(a.x,a.y)),y.uniforms.shadow_pass.value=F.map.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(I,null,le,y,E,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(I,null,le,S,E,null)}function A(F,I,le,R){let D=null;const oe=le.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(oe!==void 0)D=oe;else if(D=le.isPointLight===!0?p:f,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const ue=D.uuid,ve=I.uuid;let H=m[ue];H===void 0&&(H={},m[ue]=H);let te=H[ve];te===void 0&&(te=D.clone(),H[ve]=te,I.addEventListener("dispose",k)),D=te}if(D.visible=I.visible,D.wireframe=I.wireframe,R===Ii?D.side=I.shadowSide!==null?I.shadowSide:I.side:D.side=I.shadowSide!==null?I.shadowSide:x[I.side],D.alphaMap=I.alphaMap,D.alphaTest=I.alphaTest,D.map=I.map,D.clipShadows=I.clipShadows,D.clippingPlanes=I.clippingPlanes,D.clipIntersection=I.clipIntersection,D.displacementMap=I.displacementMap,D.displacementScale=I.displacementScale,D.displacementBias=I.displacementBias,D.wireframeLinewidth=I.wireframeLinewidth,D.linewidth=I.linewidth,le.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const ue=o.properties.get(D);ue.light=le}return D}function b(F,I,le,R,D){if(F.visible===!1)return;if(F.layers.test(I.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&D===Ii)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,F.matrixWorld);const ve=e.update(F),H=F.material;if(Array.isArray(H)){const te=ve.groups;for(let se=0,ae=te.length;se<ae;se++){const V=te[se],$=H[V.materialIndex];if($&&$.visible){const W=A(F,$,R,D);F.onBeforeShadow(o,F,I,le,ve,W,V),o.renderBufferDirect(le,null,ve,W,F,V),F.onAfterShadow(o,F,I,le,ve,W,V)}}}else if(H.visible){const te=A(F,H,R,D);F.onBeforeShadow(o,F,I,le,ve,te,null),o.renderBufferDirect(le,null,ve,te,F,null),F.onAfterShadow(o,F,I,le,ve,te,null)}}const ue=F.children;for(let ve=0,H=ue.length;ve<H;ve++)b(ue[ve],I,le,R,D)}function k(F){F.target.removeEventListener("dispose",k);for(const le in m){const R=m[le],D=F.target.uuid;D in R&&(R[D].dispose(),delete R[D])}}}function qM(o,e,n){const r=n.isWebGL2;function a(){let z=!1;const Ee=new tn;let we=null;const Ke=new tn(0,0,0,0);return{setMask:function(Xe){we!==Xe&&!z&&(o.colorMask(Xe,Xe,Xe,Xe),we=Xe)},setLocked:function(Xe){z=Xe},setClear:function(Xe,yt,St,Ft,$t){$t===!0&&(Xe*=Ft,yt*=Ft,St*=Ft),Ee.set(Xe,yt,St,Ft),Ke.equals(Ee)===!1&&(o.clearColor(Xe,yt,St,Ft),Ke.copy(Ee))},reset:function(){z=!1,we=null,Ke.set(-1,0,0,0)}}}function u(){let z=!1,Ee=null,we=null,Ke=null;return{setTest:function(Xe){Xe?De(o.DEPTH_TEST):Oe(o.DEPTH_TEST)},setMask:function(Xe){Ee!==Xe&&!z&&(o.depthMask(Xe),Ee=Xe)},setFunc:function(Xe){if(we!==Xe){switch(Xe){case mv:o.depthFunc(o.NEVER);break;case gv:o.depthFunc(o.ALWAYS);break;case _v:o.depthFunc(o.LESS);break;case Al:o.depthFunc(o.LEQUAL);break;case vv:o.depthFunc(o.EQUAL);break;case xv:o.depthFunc(o.GEQUAL);break;case yv:o.depthFunc(o.GREATER);break;case Sv:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}we=Xe}},setLocked:function(Xe){z=Xe},setClear:function(Xe){Ke!==Xe&&(o.clearDepth(Xe),Ke=Xe)},reset:function(){z=!1,Ee=null,we=null,Ke=null}}}function d(){let z=!1,Ee=null,we=null,Ke=null,Xe=null,yt=null,St=null,Ft=null,$t=null;return{setTest:function(vt){z||(vt?De(o.STENCIL_TEST):Oe(o.STENCIL_TEST))},setMask:function(vt){Ee!==vt&&!z&&(o.stencilMask(vt),Ee=vt)},setFunc:function(vt,Xt,an){(we!==vt||Ke!==Xt||Xe!==an)&&(o.stencilFunc(vt,Xt,an),we=vt,Ke=Xt,Xe=an)},setOp:function(vt,Xt,an){(yt!==vt||St!==Xt||Ft!==an)&&(o.stencilOp(vt,Xt,an),yt=vt,St=Xt,Ft=an)},setLocked:function(vt){z=vt},setClear:function(vt){$t!==vt&&(o.clearStencil(vt),$t=vt)},reset:function(){z=!1,Ee=null,we=null,Ke=null,Xe=null,yt=null,St=null,Ft=null,$t=null}}}const f=new a,p=new u,m=new d,v=new WeakMap,x=new WeakMap;let y={},S={},w=new WeakMap,E=[],_=null,g=!1,L=null,A=null,b=null,k=null,F=null,I=null,le=null,R=new ht(0,0,0),D=0,oe=!1,ue=null,ve=null,H=null,te=null,se=null;const ae=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,$=0;const W=o.getParameter(o.VERSION);W.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(W)[1]),V=$>=1):W.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),V=$>=2);let U=null,G={};const Y=o.getParameter(o.SCISSOR_BOX),re=o.getParameter(o.VIEWPORT),fe=new tn().fromArray(Y),ye=new tn().fromArray(re);function Me(z,Ee,we,Ke){const Xe=new Uint8Array(4),yt=o.createTexture();o.bindTexture(z,yt),o.texParameteri(z,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(z,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let St=0;St<we;St++)r&&(z===o.TEXTURE_3D||z===o.TEXTURE_2D_ARRAY)?o.texImage3D(Ee,0,o.RGBA,1,1,Ke,0,o.RGBA,o.UNSIGNED_BYTE,Xe):o.texImage2D(Ee+St,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Xe);return yt}const Re={};Re[o.TEXTURE_2D]=Me(o.TEXTURE_2D,o.TEXTURE_2D,1),Re[o.TEXTURE_CUBE_MAP]=Me(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(Re[o.TEXTURE_2D_ARRAY]=Me(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Re[o.TEXTURE_3D]=Me(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),f.setClear(0,0,0,1),p.setClear(1),m.setClear(0),De(o.DEPTH_TEST),p.setFunc(Al),nt(!1),P(Zh),De(o.CULL_FACE),Be(mr);function De(z){y[z]!==!0&&(o.enable(z),y[z]=!0)}function Oe(z){y[z]!==!1&&(o.disable(z),y[z]=!1)}function ut(z,Ee){return S[z]!==Ee?(o.bindFramebuffer(z,Ee),S[z]=Ee,r&&(z===o.DRAW_FRAMEBUFFER&&(S[o.FRAMEBUFFER]=Ee),z===o.FRAMEBUFFER&&(S[o.DRAW_FRAMEBUFFER]=Ee)),!0):!1}function J(z,Ee){let we=E,Ke=!1;if(z)if(we=w.get(Ee),we===void 0&&(we=[],w.set(Ee,we)),z.isWebGLMultipleRenderTargets){const Xe=z.texture;if(we.length!==Xe.length||we[0]!==o.COLOR_ATTACHMENT0){for(let yt=0,St=Xe.length;yt<St;yt++)we[yt]=o.COLOR_ATTACHMENT0+yt;we.length=Xe.length,Ke=!0}}else we[0]!==o.COLOR_ATTACHMENT0&&(we[0]=o.COLOR_ATTACHMENT0,Ke=!0);else we[0]!==o.BACK&&(we[0]=o.BACK,Ke=!0);Ke&&(n.isWebGL2?o.drawBuffers(we):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(we))}function Gt(z){return _!==z?(o.useProgram(z),_=z,!0):!1}const Ve={[Hr]:o.FUNC_ADD,[ev]:o.FUNC_SUBTRACT,[tv]:o.FUNC_REVERSE_SUBTRACT};if(r)Ve[tp]=o.MIN,Ve[np]=o.MAX;else{const z=e.get("EXT_blend_minmax");z!==null&&(Ve[tp]=z.MIN_EXT,Ve[np]=z.MAX_EXT)}const Je={[nv]:o.ZERO,[iv]:o.ONE,[rv]:o.SRC_COLOR,[nf]:o.SRC_ALPHA,[cv]:o.SRC_ALPHA_SATURATE,[lv]:o.DST_COLOR,[ov]:o.DST_ALPHA,[sv]:o.ONE_MINUS_SRC_COLOR,[rf]:o.ONE_MINUS_SRC_ALPHA,[uv]:o.ONE_MINUS_DST_COLOR,[av]:o.ONE_MINUS_DST_ALPHA,[fv]:o.CONSTANT_COLOR,[dv]:o.ONE_MINUS_CONSTANT_COLOR,[hv]:o.CONSTANT_ALPHA,[pv]:o.ONE_MINUS_CONSTANT_ALPHA};function Be(z,Ee,we,Ke,Xe,yt,St,Ft,$t,vt){if(z===mr){g===!0&&(Oe(o.BLEND),g=!1);return}if(g===!1&&(De(o.BLEND),g=!0),z!==J_){if(z!==L||vt!==oe){if((A!==Hr||F!==Hr)&&(o.blendEquation(o.FUNC_ADD),A=Hr,F=Hr),vt)switch(z){case ks:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Qh:o.blendFunc(o.ONE,o.ONE);break;case Jh:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case ep:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case ks:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Qh:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Jh:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case ep:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}b=null,k=null,I=null,le=null,R.set(0,0,0),D=0,L=z,oe=vt}return}Xe=Xe||Ee,yt=yt||we,St=St||Ke,(Ee!==A||Xe!==F)&&(o.blendEquationSeparate(Ve[Ee],Ve[Xe]),A=Ee,F=Xe),(we!==b||Ke!==k||yt!==I||St!==le)&&(o.blendFuncSeparate(Je[we],Je[Ke],Je[yt],Je[St]),b=we,k=Ke,I=yt,le=St),(Ft.equals(R)===!1||$t!==D)&&(o.blendColor(Ft.r,Ft.g,Ft.b,$t),R.copy(Ft),D=$t),L=z,oe=!1}function Tt(z,Ee){z.side===Fi?Oe(o.CULL_FACE):De(o.CULL_FACE);let we=z.side===Ln;Ee&&(we=!we),nt(we),z.blending===ks&&z.transparent===!1?Be(mr):Be(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),p.setFunc(z.depthFunc),p.setTest(z.depthTest),p.setMask(z.depthWrite),f.setMask(z.colorWrite);const Ke=z.stencilWrite;m.setTest(Ke),Ke&&(m.setMask(z.stencilWriteMask),m.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),m.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Z(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?De(o.SAMPLE_ALPHA_TO_COVERAGE):Oe(o.SAMPLE_ALPHA_TO_COVERAGE)}function nt(z){ue!==z&&(z?o.frontFace(o.CW):o.frontFace(o.CCW),ue=z)}function P(z){z!==$_?(De(o.CULL_FACE),z!==ve&&(z===Zh?o.cullFace(o.BACK):z===Z_?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Oe(o.CULL_FACE),ve=z}function T(z){z!==H&&(V&&o.lineWidth(z),H=z)}function Z(z,Ee,we){z?(De(o.POLYGON_OFFSET_FILL),(te!==Ee||se!==we)&&(o.polygonOffset(Ee,we),te=Ee,se=we)):Oe(o.POLYGON_OFFSET_FILL)}function ge(z){z?De(o.SCISSOR_TEST):Oe(o.SCISSOR_TEST)}function pe(z){z===void 0&&(z=o.TEXTURE0+ae-1),U!==z&&(o.activeTexture(z),U=z)}function _e(z,Ee,we){we===void 0&&(U===null?we=o.TEXTURE0+ae-1:we=U);let Ke=G[we];Ke===void 0&&(Ke={type:void 0,texture:void 0},G[we]=Ke),(Ke.type!==z||Ke.texture!==Ee)&&(U!==we&&(o.activeTexture(we),U=we),o.bindTexture(z,Ee||Re[z]),Ke.type=z,Ke.texture=Ee)}function ke(){const z=G[U];z!==void 0&&z.type!==void 0&&(o.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Ae(){try{o.compressedTexImage2D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ue(){try{o.compressedTexImage3D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function We(){try{o.texSubImage2D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function it(){try{o.texSubImage3D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function he(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function pt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function lt(){try{o.texStorage2D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ze(){try{o.texStorage3D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ge(){try{o.texImage2D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ie(){try{o.texImage3D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function et(z){fe.equals(z)===!1&&(o.scissor(z.x,z.y,z.z,z.w),fe.copy(z))}function gt(z){ye.equals(z)===!1&&(o.viewport(z.x,z.y,z.z,z.w),ye.copy(z))}function At(z,Ee){let we=x.get(Ee);we===void 0&&(we=new WeakMap,x.set(Ee,we));let Ke=we.get(z);Ke===void 0&&(Ke=o.getUniformBlockIndex(Ee,z.name),we.set(z,Ke))}function rt(z,Ee){const Ke=x.get(Ee).get(z);v.get(Ee)!==Ke&&(o.uniformBlockBinding(Ee,Ke,z.__bindingPointIndex),v.set(Ee,Ke))}function Se(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),r===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),y={},U=null,G={},S={},w=new WeakMap,E=[],_=null,g=!1,L=null,A=null,b=null,k=null,F=null,I=null,le=null,R=new ht(0,0,0),D=0,oe=!1,ue=null,ve=null,H=null,te=null,se=null,fe.set(0,0,o.canvas.width,o.canvas.height),ye.set(0,0,o.canvas.width,o.canvas.height),f.reset(),p.reset(),m.reset()}return{buffers:{color:f,depth:p,stencil:m},enable:De,disable:Oe,bindFramebuffer:ut,drawBuffers:J,useProgram:Gt,setBlending:Be,setMaterial:Tt,setFlipSided:nt,setCullFace:P,setLineWidth:T,setPolygonOffset:Z,setScissorTest:ge,activeTexture:pe,bindTexture:_e,unbindTexture:ke,compressedTexImage2D:Ae,compressedTexImage3D:Ue,texImage2D:Ge,texImage3D:Ie,updateUBOMapping:At,uniformBlockBinding:rt,texStorage2D:lt,texStorage3D:Ze,texSubImage2D:We,texSubImage3D:it,compressedTexSubImage2D:he,compressedTexSubImage3D:pt,scissor:et,viewport:gt,reset:Se}}function jM(o,e,n,r,a,u,d){const f=a.isWebGL2,p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let x;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(P,T){return S?new OffscreenCanvas(P,T):bl("canvas")}function E(P,T,Z,ge){let pe=1;if((P.width>ge||P.height>ge)&&(pe=ge/Math.max(P.width,P.height)),pe<1||T===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const _e=T?df:Math.floor,ke=_e(pe*P.width),Ae=_e(pe*P.height);x===void 0&&(x=w(ke,Ae));const Ue=Z?w(ke,Ae):x;return Ue.width=ke,Ue.height=Ae,Ue.getContext("2d").drawImage(P,0,0,ke,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+ke+"x"+Ae+")."),Ue}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function _(P){return bp(P.width)&&bp(P.height)}function g(P){return f?!1:P.wrapS!==ui||P.wrapT!==ui||P.minFilter!==yn&&P.minFilter!==jn}function L(P,T){return P.generateMipmaps&&T&&P.minFilter!==yn&&P.minFilter!==jn}function A(P){o.generateMipmap(P)}function b(P,T,Z,ge,pe=!1){if(f===!1)return T;if(P!==null){if(o[P]!==void 0)return o[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let _e=T;if(T===o.RED&&(Z===o.FLOAT&&(_e=o.R32F),Z===o.HALF_FLOAT&&(_e=o.R16F),Z===o.UNSIGNED_BYTE&&(_e=o.R8)),T===o.RED_INTEGER&&(Z===o.UNSIGNED_BYTE&&(_e=o.R8UI),Z===o.UNSIGNED_SHORT&&(_e=o.R16UI),Z===o.UNSIGNED_INT&&(_e=o.R32UI),Z===o.BYTE&&(_e=o.R8I),Z===o.SHORT&&(_e=o.R16I),Z===o.INT&&(_e=o.R32I)),T===o.RG&&(Z===o.FLOAT&&(_e=o.RG32F),Z===o.HALF_FLOAT&&(_e=o.RG16F),Z===o.UNSIGNED_BYTE&&(_e=o.RG8)),T===o.RGBA){const ke=pe?Rl:Et.getTransfer(ge);Z===o.FLOAT&&(_e=o.RGBA32F),Z===o.HALF_FLOAT&&(_e=o.RGBA16F),Z===o.UNSIGNED_BYTE&&(_e=ke===bt?o.SRGB8_ALPHA8:o.RGBA8),Z===o.UNSIGNED_SHORT_4_4_4_4&&(_e=o.RGBA4),Z===o.UNSIGNED_SHORT_5_5_5_1&&(_e=o.RGB5_A1)}return(_e===o.R16F||_e===o.R32F||_e===o.RG16F||_e===o.RG32F||_e===o.RGBA16F||_e===o.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function k(P,T,Z){return L(P,Z)===!0||P.isFramebufferTexture&&P.minFilter!==yn&&P.minFilter!==jn?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function F(P){return P===yn||P===ip||P===Mc?o.NEAREST:o.LINEAR}function I(P){const T=P.target;T.removeEventListener("dispose",I),R(T),T.isVideoTexture&&v.delete(T)}function le(P){const T=P.target;T.removeEventListener("dispose",le),oe(T)}function R(P){const T=r.get(P);if(T.__webglInit===void 0)return;const Z=P.source,ge=y.get(Z);if(ge){const pe=ge[T.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&D(P),Object.keys(ge).length===0&&y.delete(Z)}r.remove(P)}function D(P){const T=r.get(P);o.deleteTexture(T.__webglTexture);const Z=P.source,ge=y.get(Z);delete ge[T.__cacheKey],d.memory.textures--}function oe(P){const T=P.texture,Z=r.get(P),ge=r.get(T);if(ge.__webglTexture!==void 0&&(o.deleteTexture(ge.__webglTexture),d.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(Z.__webglFramebuffer[pe]))for(let _e=0;_e<Z.__webglFramebuffer[pe].length;_e++)o.deleteFramebuffer(Z.__webglFramebuffer[pe][_e]);else o.deleteFramebuffer(Z.__webglFramebuffer[pe]);Z.__webglDepthbuffer&&o.deleteRenderbuffer(Z.__webglDepthbuffer[pe])}else{if(Array.isArray(Z.__webglFramebuffer))for(let pe=0;pe<Z.__webglFramebuffer.length;pe++)o.deleteFramebuffer(Z.__webglFramebuffer[pe]);else o.deleteFramebuffer(Z.__webglFramebuffer);if(Z.__webglDepthbuffer&&o.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&o.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let pe=0;pe<Z.__webglColorRenderbuffer.length;pe++)Z.__webglColorRenderbuffer[pe]&&o.deleteRenderbuffer(Z.__webglColorRenderbuffer[pe]);Z.__webglDepthRenderbuffer&&o.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let pe=0,_e=T.length;pe<_e;pe++){const ke=r.get(T[pe]);ke.__webglTexture&&(o.deleteTexture(ke.__webglTexture),d.memory.textures--),r.remove(T[pe])}r.remove(T),r.remove(P)}let ue=0;function ve(){ue=0}function H(){const P=ue;return P>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+a.maxTextures),ue+=1,P}function te(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function se(P,T){const Z=r.get(P);if(P.isVideoTexture&&Tt(P),P.isRenderTargetTexture===!1&&P.version>0&&Z.__version!==P.version){const ge=P.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(Z,P,T);return}}n.bindTexture(o.TEXTURE_2D,Z.__webglTexture,o.TEXTURE0+T)}function ae(P,T){const Z=r.get(P);if(P.version>0&&Z.__version!==P.version){fe(Z,P,T);return}n.bindTexture(o.TEXTURE_2D_ARRAY,Z.__webglTexture,o.TEXTURE0+T)}function V(P,T){const Z=r.get(P);if(P.version>0&&Z.__version!==P.version){fe(Z,P,T);return}n.bindTexture(o.TEXTURE_3D,Z.__webglTexture,o.TEXTURE0+T)}function $(P,T){const Z=r.get(P);if(P.version>0&&Z.__version!==P.version){ye(Z,P,T);return}n.bindTexture(o.TEXTURE_CUBE_MAP,Z.__webglTexture,o.TEXTURE0+T)}const W={[af]:o.REPEAT,[ui]:o.CLAMP_TO_EDGE,[lf]:o.MIRRORED_REPEAT},U={[yn]:o.NEAREST,[ip]:o.NEAREST_MIPMAP_NEAREST,[Mc]:o.NEAREST_MIPMAP_LINEAR,[jn]:o.LINEAR,[Lv]:o.LINEAR_MIPMAP_NEAREST,[Oo]:o.LINEAR_MIPMAP_LINEAR},G={[Gv]:o.NEVER,[jv]:o.ALWAYS,[Vv]:o.LESS,[Om]:o.LEQUAL,[Wv]:o.EQUAL,[qv]:o.GEQUAL,[Xv]:o.GREATER,[Yv]:o.NOTEQUAL};function Y(P,T,Z){if(Z?(o.texParameteri(P,o.TEXTURE_WRAP_S,W[T.wrapS]),o.texParameteri(P,o.TEXTURE_WRAP_T,W[T.wrapT]),(P===o.TEXTURE_3D||P===o.TEXTURE_2D_ARRAY)&&o.texParameteri(P,o.TEXTURE_WRAP_R,W[T.wrapR]),o.texParameteri(P,o.TEXTURE_MAG_FILTER,U[T.magFilter]),o.texParameteri(P,o.TEXTURE_MIN_FILTER,U[T.minFilter])):(o.texParameteri(P,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(P,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(P===o.TEXTURE_3D||P===o.TEXTURE_2D_ARRAY)&&o.texParameteri(P,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(T.wrapS!==ui||T.wrapT!==ui)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(P,o.TEXTURE_MAG_FILTER,F(T.magFilter)),o.texParameteri(P,o.TEXTURE_MIN_FILTER,F(T.minFilter)),T.minFilter!==yn&&T.minFilter!==jn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(o.texParameteri(P,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(P,o.TEXTURE_COMPARE_FUNC,G[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ge=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===yn||T.minFilter!==Mc&&T.minFilter!==Oo||T.type===pr&&e.has("OES_texture_float_linear")===!1||f===!1&&T.type===zo&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||r.get(T).__currentAnisotropy)&&(o.texParameterf(P,ge.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy)}}function re(P,T){let Z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",I));const ge=T.source;let pe=y.get(ge);pe===void 0&&(pe={},y.set(ge,pe));const _e=te(T);if(_e!==P.__cacheKey){pe[_e]===void 0&&(pe[_e]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,Z=!0),pe[_e].usedTimes++;const ke=pe[P.__cacheKey];ke!==void 0&&(pe[P.__cacheKey].usedTimes--,ke.usedTimes===0&&D(T)),P.__cacheKey=_e,P.__webglTexture=pe[_e].texture}return Z}function fe(P,T,Z){let ge=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ge=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ge=o.TEXTURE_3D);const pe=re(P,T),_e=T.source;n.bindTexture(ge,P.__webglTexture,o.TEXTURE0+Z);const ke=r.get(_e);if(_e.version!==ke.__version||pe===!0){n.activeTexture(o.TEXTURE0+Z);const Ae=Et.getPrimaries(Et.workingColorSpace),Ue=T.colorSpace===$n?null:Et.getPrimaries(T.colorSpace),We=T.colorSpace===$n||Ae===Ue?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);const it=g(T)&&_(T.image)===!1;let he=E(T.image,it,!1,a.maxTextureSize);he=nt(T,he);const pt=_(he)||f,lt=u.convert(T.format,T.colorSpace);let Ze=u.convert(T.type),Ge=b(T.internalFormat,lt,Ze,T.colorSpace,T.isVideoTexture);Y(ge,T,pt);let Ie;const et=T.mipmaps,gt=f&&T.isVideoTexture!==!0&&Ge!==Nm,At=ke.__version===void 0||pe===!0,rt=k(T,he,pt);if(T.isDepthTexture)Ge=o.DEPTH_COMPONENT,f?T.type===pr?Ge=o.DEPTH_COMPONENT32F:T.type===hr?Ge=o.DEPTH_COMPONENT24:T.type===Vr?Ge=o.DEPTH24_STENCIL8:Ge=o.DEPTH_COMPONENT16:T.type===pr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Wr&&Ge===o.DEPTH_COMPONENT&&T.type!==_f&&T.type!==hr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=hr,Ze=u.convert(T.type)),T.format===Ws&&Ge===o.DEPTH_COMPONENT&&(Ge=o.DEPTH_STENCIL,T.type!==Vr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Vr,Ze=u.convert(T.type))),At&&(gt?n.texStorage2D(o.TEXTURE_2D,1,Ge,he.width,he.height):n.texImage2D(o.TEXTURE_2D,0,Ge,he.width,he.height,0,lt,Ze,null));else if(T.isDataTexture)if(et.length>0&&pt){gt&&At&&n.texStorage2D(o.TEXTURE_2D,rt,Ge,et[0].width,et[0].height);for(let Se=0,z=et.length;Se<z;Se++)Ie=et[Se],gt?n.texSubImage2D(o.TEXTURE_2D,Se,0,0,Ie.width,Ie.height,lt,Ze,Ie.data):n.texImage2D(o.TEXTURE_2D,Se,Ge,Ie.width,Ie.height,0,lt,Ze,Ie.data);T.generateMipmaps=!1}else gt?(At&&n.texStorage2D(o.TEXTURE_2D,rt,Ge,he.width,he.height),n.texSubImage2D(o.TEXTURE_2D,0,0,0,he.width,he.height,lt,Ze,he.data)):n.texImage2D(o.TEXTURE_2D,0,Ge,he.width,he.height,0,lt,Ze,he.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){gt&&At&&n.texStorage3D(o.TEXTURE_2D_ARRAY,rt,Ge,et[0].width,et[0].height,he.depth);for(let Se=0,z=et.length;Se<z;Se++)Ie=et[Se],T.format!==ci?lt!==null?gt?n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Se,0,0,0,Ie.width,Ie.height,he.depth,lt,Ie.data,0,0):n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Se,Ge,Ie.width,Ie.height,he.depth,0,Ie.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?n.texSubImage3D(o.TEXTURE_2D_ARRAY,Se,0,0,0,Ie.width,Ie.height,he.depth,lt,Ze,Ie.data):n.texImage3D(o.TEXTURE_2D_ARRAY,Se,Ge,Ie.width,Ie.height,he.depth,0,lt,Ze,Ie.data)}else{gt&&At&&n.texStorage2D(o.TEXTURE_2D,rt,Ge,et[0].width,et[0].height);for(let Se=0,z=et.length;Se<z;Se++)Ie=et[Se],T.format!==ci?lt!==null?gt?n.compressedTexSubImage2D(o.TEXTURE_2D,Se,0,0,Ie.width,Ie.height,lt,Ie.data):n.compressedTexImage2D(o.TEXTURE_2D,Se,Ge,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?n.texSubImage2D(o.TEXTURE_2D,Se,0,0,Ie.width,Ie.height,lt,Ze,Ie.data):n.texImage2D(o.TEXTURE_2D,Se,Ge,Ie.width,Ie.height,0,lt,Ze,Ie.data)}else if(T.isDataArrayTexture)gt?(At&&n.texStorage3D(o.TEXTURE_2D_ARRAY,rt,Ge,he.width,he.height,he.depth),n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,lt,Ze,he.data)):n.texImage3D(o.TEXTURE_2D_ARRAY,0,Ge,he.width,he.height,he.depth,0,lt,Ze,he.data);else if(T.isData3DTexture)gt?(At&&n.texStorage3D(o.TEXTURE_3D,rt,Ge,he.width,he.height,he.depth),n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,lt,Ze,he.data)):n.texImage3D(o.TEXTURE_3D,0,Ge,he.width,he.height,he.depth,0,lt,Ze,he.data);else if(T.isFramebufferTexture){if(At)if(gt)n.texStorage2D(o.TEXTURE_2D,rt,Ge,he.width,he.height);else{let Se=he.width,z=he.height;for(let Ee=0;Ee<rt;Ee++)n.texImage2D(o.TEXTURE_2D,Ee,Ge,Se,z,0,lt,Ze,null),Se>>=1,z>>=1}}else if(et.length>0&&pt){gt&&At&&n.texStorage2D(o.TEXTURE_2D,rt,Ge,et[0].width,et[0].height);for(let Se=0,z=et.length;Se<z;Se++)Ie=et[Se],gt?n.texSubImage2D(o.TEXTURE_2D,Se,0,0,lt,Ze,Ie):n.texImage2D(o.TEXTURE_2D,Se,Ge,lt,Ze,Ie);T.generateMipmaps=!1}else gt?(At&&n.texStorage2D(o.TEXTURE_2D,rt,Ge,he.width,he.height),n.texSubImage2D(o.TEXTURE_2D,0,0,0,lt,Ze,he)):n.texImage2D(o.TEXTURE_2D,0,Ge,lt,Ze,he);L(T,pt)&&A(ge),ke.__version=_e.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function ye(P,T,Z){if(T.image.length!==6)return;const ge=re(P,T),pe=T.source;n.bindTexture(o.TEXTURE_CUBE_MAP,P.__webglTexture,o.TEXTURE0+Z);const _e=r.get(pe);if(pe.version!==_e.__version||ge===!0){n.activeTexture(o.TEXTURE0+Z);const ke=Et.getPrimaries(Et.workingColorSpace),Ae=T.colorSpace===$n?null:Et.getPrimaries(T.colorSpace),Ue=T.colorSpace===$n||ke===Ae?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const We=T.isCompressedTexture||T.image[0].isCompressedTexture,it=T.image[0]&&T.image[0].isDataTexture,he=[];for(let Se=0;Se<6;Se++)!We&&!it?he[Se]=E(T.image[Se],!1,!0,a.maxCubemapSize):he[Se]=it?T.image[Se].image:T.image[Se],he[Se]=nt(T,he[Se]);const pt=he[0],lt=_(pt)||f,Ze=u.convert(T.format,T.colorSpace),Ge=u.convert(T.type),Ie=b(T.internalFormat,Ze,Ge,T.colorSpace),et=f&&T.isVideoTexture!==!0,gt=_e.__version===void 0||ge===!0;let At=k(T,pt,lt);Y(o.TEXTURE_CUBE_MAP,T,lt);let rt;if(We){et&&gt&&n.texStorage2D(o.TEXTURE_CUBE_MAP,At,Ie,pt.width,pt.height);for(let Se=0;Se<6;Se++){rt=he[Se].mipmaps;for(let z=0;z<rt.length;z++){const Ee=rt[z];T.format!==ci?Ze!==null?et?n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,z,0,0,Ee.width,Ee.height,Ze,Ee.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,z,Ie,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,z,0,0,Ee.width,Ee.height,Ze,Ge,Ee.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,z,Ie,Ee.width,Ee.height,0,Ze,Ge,Ee.data)}}}else{rt=T.mipmaps,et&&gt&&(rt.length>0&&At++,n.texStorage2D(o.TEXTURE_CUBE_MAP,At,Ie,he[0].width,he[0].height));for(let Se=0;Se<6;Se++)if(it){et?n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,he[Se].width,he[Se].height,Ze,Ge,he[Se].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Ie,he[Se].width,he[Se].height,0,Ze,Ge,he[Se].data);for(let z=0;z<rt.length;z++){const we=rt[z].image[Se].image;et?n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,z+1,0,0,we.width,we.height,Ze,Ge,we.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,z+1,Ie,we.width,we.height,0,Ze,Ge,we.data)}}else{et?n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Ze,Ge,he[Se]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Ie,Ze,Ge,he[Se]);for(let z=0;z<rt.length;z++){const Ee=rt[z];et?n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,z+1,0,0,Ze,Ge,Ee.image[Se]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,z+1,Ie,Ze,Ge,Ee.image[Se])}}}L(T,lt)&&A(o.TEXTURE_CUBE_MAP),_e.__version=pe.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Me(P,T,Z,ge,pe,_e){const ke=u.convert(Z.format,Z.colorSpace),Ae=u.convert(Z.type),Ue=b(Z.internalFormat,ke,Ae,Z.colorSpace);if(!r.get(T).__hasExternalTextures){const it=Math.max(1,T.width>>_e),he=Math.max(1,T.height>>_e);pe===o.TEXTURE_3D||pe===o.TEXTURE_2D_ARRAY?n.texImage3D(pe,_e,Ue,it,he,T.depth,0,ke,Ae,null):n.texImage2D(pe,_e,Ue,it,he,0,ke,Ae,null)}n.bindFramebuffer(o.FRAMEBUFFER,P),Be(T)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ge,pe,r.get(Z).__webglTexture,0,Je(T)):(pe===o.TEXTURE_2D||pe>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ge,pe,r.get(Z).__webglTexture,_e),n.bindFramebuffer(o.FRAMEBUFFER,null)}function Re(P,T,Z){if(o.bindRenderbuffer(o.RENDERBUFFER,P),T.depthBuffer&&!T.stencilBuffer){let ge=f===!0?o.DEPTH_COMPONENT24:o.DEPTH_COMPONENT16;if(Z||Be(T)){const pe=T.depthTexture;pe&&pe.isDepthTexture&&(pe.type===pr?ge=o.DEPTH_COMPONENT32F:pe.type===hr&&(ge=o.DEPTH_COMPONENT24));const _e=Je(T);Be(T)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,_e,ge,T.width,T.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,_e,ge,T.width,T.height)}else o.renderbufferStorage(o.RENDERBUFFER,ge,T.width,T.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,P)}else if(T.depthBuffer&&T.stencilBuffer){const ge=Je(T);Z&&Be(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ge,o.DEPTH24_STENCIL8,T.width,T.height):Be(T)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ge,o.DEPTH24_STENCIL8,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,P)}else{const ge=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let pe=0;pe<ge.length;pe++){const _e=ge[pe],ke=u.convert(_e.format,_e.colorSpace),Ae=u.convert(_e.type),Ue=b(_e.internalFormat,ke,Ae,_e.colorSpace),We=Je(T);Z&&Be(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,We,Ue,T.width,T.height):Be(T)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,We,Ue,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Ue,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function De(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),se(T.depthTexture,0);const ge=r.get(T.depthTexture).__webglTexture,pe=Je(T);if(T.depthTexture.format===Wr)Be(T)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ge,0,pe):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ge,0);else if(T.depthTexture.format===Ws)Be(T)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ge,0,pe):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Oe(P){const T=r.get(P),Z=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");De(T.__webglFramebuffer,P)}else if(Z){T.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)n.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[ge]),T.__webglDepthbuffer[ge]=o.createRenderbuffer(),Re(T.__webglDepthbuffer[ge],P,!1)}else n.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=o.createRenderbuffer(),Re(T.__webglDepthbuffer,P,!1);n.bindFramebuffer(o.FRAMEBUFFER,null)}function ut(P,T,Z){const ge=r.get(P);T!==void 0&&Me(ge.__webglFramebuffer,P,P.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Z!==void 0&&Oe(P)}function J(P){const T=P.texture,Z=r.get(P),ge=r.get(T);P.addEventListener("dispose",le),P.isWebGLMultipleRenderTargets!==!0&&(ge.__webglTexture===void 0&&(ge.__webglTexture=o.createTexture()),ge.__version=T.version,d.memory.textures++);const pe=P.isWebGLCubeRenderTarget===!0,_e=P.isWebGLMultipleRenderTargets===!0,ke=_(P)||f;if(pe){Z.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(f&&T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer[Ae]=[];for(let Ue=0;Ue<T.mipmaps.length;Ue++)Z.__webglFramebuffer[Ae][Ue]=o.createFramebuffer()}else Z.__webglFramebuffer[Ae]=o.createFramebuffer()}else{if(f&&T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ae=0;Ae<T.mipmaps.length;Ae++)Z.__webglFramebuffer[Ae]=o.createFramebuffer()}else Z.__webglFramebuffer=o.createFramebuffer();if(_e)if(a.drawBuffers){const Ae=P.texture;for(let Ue=0,We=Ae.length;Ue<We;Ue++){const it=r.get(Ae[Ue]);it.__webglTexture===void 0&&(it.__webglTexture=o.createTexture(),d.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(f&&P.samples>0&&Be(P)===!1){const Ae=_e?T:[T];Z.__webglMultisampledFramebuffer=o.createFramebuffer(),Z.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ue=0;Ue<Ae.length;Ue++){const We=Ae[Ue];Z.__webglColorRenderbuffer[Ue]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Z.__webglColorRenderbuffer[Ue]);const it=u.convert(We.format,We.colorSpace),he=u.convert(We.type),pt=b(We.internalFormat,it,he,We.colorSpace,P.isXRRenderTarget===!0),lt=Je(P);o.renderbufferStorageMultisample(o.RENDERBUFFER,lt,pt,P.width,P.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.RENDERBUFFER,Z.__webglColorRenderbuffer[Ue])}o.bindRenderbuffer(o.RENDERBUFFER,null),P.depthBuffer&&(Z.__webglDepthRenderbuffer=o.createRenderbuffer(),Re(Z.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(pe){n.bindTexture(o.TEXTURE_CUBE_MAP,ge.__webglTexture),Y(o.TEXTURE_CUBE_MAP,T,ke);for(let Ae=0;Ae<6;Ae++)if(f&&T.mipmaps&&T.mipmaps.length>0)for(let Ue=0;Ue<T.mipmaps.length;Ue++)Me(Z.__webglFramebuffer[Ae][Ue],P,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ue);else Me(Z.__webglFramebuffer[Ae],P,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);L(T,ke)&&A(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(_e){const Ae=P.texture;for(let Ue=0,We=Ae.length;Ue<We;Ue++){const it=Ae[Ue],he=r.get(it);n.bindTexture(o.TEXTURE_2D,he.__webglTexture),Y(o.TEXTURE_2D,it,ke),Me(Z.__webglFramebuffer,P,it,o.COLOR_ATTACHMENT0+Ue,o.TEXTURE_2D,0),L(it,ke)&&A(o.TEXTURE_2D)}n.unbindTexture()}else{let Ae=o.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(f?Ae=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(Ae,ge.__webglTexture),Y(Ae,T,ke),f&&T.mipmaps&&T.mipmaps.length>0)for(let Ue=0;Ue<T.mipmaps.length;Ue++)Me(Z.__webglFramebuffer[Ue],P,T,o.COLOR_ATTACHMENT0,Ae,Ue);else Me(Z.__webglFramebuffer,P,T,o.COLOR_ATTACHMENT0,Ae,0);L(T,ke)&&A(Ae),n.unbindTexture()}P.depthBuffer&&Oe(P)}function Gt(P){const T=_(P)||f,Z=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ge=0,pe=Z.length;ge<pe;ge++){const _e=Z[ge];if(L(_e,T)){const ke=P.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,Ae=r.get(_e).__webglTexture;n.bindTexture(ke,Ae),A(ke),n.unbindTexture()}}}function Ve(P){if(f&&P.samples>0&&Be(P)===!1){const T=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],Z=P.width,ge=P.height;let pe=o.COLOR_BUFFER_BIT;const _e=[],ke=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ae=r.get(P),Ue=P.isWebGLMultipleRenderTargets===!0;if(Ue)for(let We=0;We<T.length;We++)n.bindFramebuffer(o.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+We,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,Ae.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+We,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let We=0;We<T.length;We++){_e.push(o.COLOR_ATTACHMENT0+We),P.depthBuffer&&_e.push(ke);const it=Ae.__ignoreDepthValues!==void 0?Ae.__ignoreDepthValues:!1;if(it===!1&&(P.depthBuffer&&(pe|=o.DEPTH_BUFFER_BIT),P.stencilBuffer&&(pe|=o.STENCIL_BUFFER_BIT)),Ue&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ae.__webglColorRenderbuffer[We]),it===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[ke]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[ke])),Ue){const he=r.get(T[We]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,he,0)}o.blitFramebuffer(0,0,Z,ge,0,0,Z,ge,pe,o.NEAREST),m&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,_e)}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ue)for(let We=0;We<T.length;We++){n.bindFramebuffer(o.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+We,o.RENDERBUFFER,Ae.__webglColorRenderbuffer[We]);const it=r.get(T[We]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,Ae.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+We,o.TEXTURE_2D,it,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}}function Je(P){return Math.min(a.maxSamples,P.samples)}function Be(P){const T=r.get(P);return f&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Tt(P){const T=d.render.frame;v.get(P)!==T&&(v.set(P,T),P.update())}function nt(P,T){const Z=P.colorSpace,ge=P.format,pe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===cf||Z!==Bi&&Z!==$n&&(Et.getTransfer(Z)===bt?f===!1?e.has("EXT_sRGB")===!0&&ge===ci?(P.format=cf,P.minFilter=jn,P.generateMipmaps=!1):T=Bm.sRGBToLinear(T):(ge!==ci||pe!==_r)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),T}this.allocateTextureUnit=H,this.resetTextureUnits=ve,this.setTexture2D=se,this.setTexture2DArray=ae,this.setTexture3D=V,this.setTextureCube=$,this.rebindTextures=ut,this.setupRenderTarget=J,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Be}function KM(o,e,n){const r=n.isWebGL2;function a(u,d=$n){let f;const p=Et.getTransfer(d);if(u===_r)return o.UNSIGNED_BYTE;if(u===Pm)return o.UNSIGNED_SHORT_4_4_4_4;if(u===Lm)return o.UNSIGNED_SHORT_5_5_5_1;if(u===bv)return o.BYTE;if(u===Dv)return o.SHORT;if(u===_f)return o.UNSIGNED_SHORT;if(u===Cm)return o.INT;if(u===hr)return o.UNSIGNED_INT;if(u===pr)return o.FLOAT;if(u===zo)return r?o.HALF_FLOAT:(f=e.get("OES_texture_half_float"),f!==null?f.HALF_FLOAT_OES:null);if(u===Uv)return o.ALPHA;if(u===ci)return o.RGBA;if(u===Nv)return o.LUMINANCE;if(u===Iv)return o.LUMINANCE_ALPHA;if(u===Wr)return o.DEPTH_COMPONENT;if(u===Ws)return o.DEPTH_STENCIL;if(u===cf)return f=e.get("EXT_sRGB"),f!==null?f.SRGB_ALPHA_EXT:null;if(u===Fv)return o.RED;if(u===bm)return o.RED_INTEGER;if(u===Ov)return o.RG;if(u===Dm)return o.RG_INTEGER;if(u===Um)return o.RGBA_INTEGER;if(u===Ec||u===Tc||u===wc||u===Ac)if(p===bt)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(u===Ec)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(u===Tc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(u===wc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(u===Ac)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(u===Ec)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(u===Tc)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(u===wc)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(u===Ac)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(u===rp||u===sp||u===op||u===ap)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(u===rp)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(u===sp)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(u===op)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(u===ap)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(u===Nm)return f=e.get("WEBGL_compressed_texture_etc1"),f!==null?f.COMPRESSED_RGB_ETC1_WEBGL:null;if(u===lp||u===up)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(u===lp)return p===bt?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(u===up)return p===bt?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(u===cp||u===fp||u===dp||u===hp||u===pp||u===mp||u===gp||u===_p||u===vp||u===xp||u===yp||u===Sp||u===Mp||u===Ep)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(u===cp)return p===bt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(u===fp)return p===bt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(u===dp)return p===bt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(u===hp)return p===bt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(u===pp)return p===bt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(u===mp)return p===bt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(u===gp)return p===bt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(u===_p)return p===bt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(u===vp)return p===bt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(u===xp)return p===bt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(u===yp)return p===bt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(u===Sp)return p===bt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(u===Mp)return p===bt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(u===Ep)return p===bt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(u===Rc||u===Tp||u===wp)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(u===Rc)return p===bt?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(u===Tp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(u===wp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(u===zv||u===Ap||u===Rp||u===Cp)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(u===Rc)return f.COMPRESSED_RED_RGTC1_EXT;if(u===Ap)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(u===Rp)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(u===Cp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return u===Vr?r?o.UNSIGNED_INT_24_8:(f=e.get("WEBGL_depth_texture"),f!==null?f.UNSIGNED_INT_24_8_WEBGL:null):o[u]!==void 0?o[u]:null}return{convert:a}}class $M extends Kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class gl extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ZM={type:"move"};class Zc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,d=null;const f=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const E of e.hand.values()){const _=n.getJointPose(E,r),g=this._getHandJoint(m,E);_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=_.radius),g.visible=_!==null}const v=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],y=v.position.distanceTo(x.position),S=.02,w=.005;m.inputState.pinching&&y>S+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&y<=S-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(ZM)))}return f!==null&&(f.visible=a!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new gl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class QM extends Ys{constructor(e,n){super();const r=this;let a=null,u=1,d=null,f="local-floor",p=1,m=null,v=null,x=null,y=null,S=null,w=null;const E=n.getContextAttributes();let _=null,g=null;const L=[],A=[],b=new dt;let k=null;const F=new Kn;F.layers.enable(1),F.viewport=new tn;const I=new Kn;I.layers.enable(2),I.viewport=new tn;const le=[F,I],R=new $M;R.layers.enable(1),R.layers.enable(2);let D=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let re=L[Y];return re===void 0&&(re=new Zc,L[Y]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Y){let re=L[Y];return re===void 0&&(re=new Zc,L[Y]=re),re.getGripSpace()},this.getHand=function(Y){let re=L[Y];return re===void 0&&(re=new Zc,L[Y]=re),re.getHandSpace()};function ue(Y){const re=A.indexOf(Y.inputSource);if(re===-1)return;const fe=L[re];fe!==void 0&&(fe.update(Y.inputSource,Y.frame,m||d),fe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function ve(){a.removeEventListener("select",ue),a.removeEventListener("selectstart",ue),a.removeEventListener("selectend",ue),a.removeEventListener("squeeze",ue),a.removeEventListener("squeezestart",ue),a.removeEventListener("squeezeend",ue),a.removeEventListener("end",ve),a.removeEventListener("inputsourceschange",H);for(let Y=0;Y<L.length;Y++){const re=A[Y];re!==null&&(A[Y]=null,L[Y].disconnect(re))}D=null,oe=null,e.setRenderTarget(_),S=null,y=null,x=null,a=null,g=null,G.stop(),r.isPresenting=!1,e.setPixelRatio(k),e.setSize(b.width,b.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){u=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){f=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(Y){m=Y},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return x},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(Y){if(a=Y,a!==null){if(_=e.getRenderTarget(),a.addEventListener("select",ue),a.addEventListener("selectstart",ue),a.addEventListener("selectend",ue),a.addEventListener("squeeze",ue),a.addEventListener("squeezestart",ue),a.addEventListener("squeezeend",ue),a.addEventListener("end",ve),a.addEventListener("inputsourceschange",H),E.xrCompatible!==!0&&await n.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(b),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const re={antialias:a.renderState.layers===void 0?E.antialias:!0,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(a,n,re),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),g=new Yr(S.framebufferWidth,S.framebufferHeight,{format:ci,type:_r,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil})}else{let re=null,fe=null,ye=null;E.depth&&(ye=E.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=E.stencil?Ws:Wr,fe=E.stencil?Vr:hr);const Me={colorFormat:n.RGBA8,depthFormat:ye,scaleFactor:u};x=new XRWebGLBinding(a,n),y=x.createProjectionLayer(Me),a.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),g=new Yr(y.textureWidth,y.textureHeight,{format:ci,type:_r,depthTexture:new Qm(y.textureWidth,y.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0});const Re=e.properties.get(g);Re.__ignoreDepthValues=y.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await a.requestReferenceSpace(f),G.setContext(a),G.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function H(Y){for(let re=0;re<Y.removed.length;re++){const fe=Y.removed[re],ye=A.indexOf(fe);ye>=0&&(A[ye]=null,L[ye].disconnect(fe))}for(let re=0;re<Y.added.length;re++){const fe=Y.added[re];let ye=A.indexOf(fe);if(ye===-1){for(let Re=0;Re<L.length;Re++)if(Re>=A.length){A.push(fe),ye=Re;break}else if(A[Re]===null){A[Re]=fe,ye=Re;break}if(ye===-1)break}const Me=L[ye];Me&&Me.connect(fe)}}const te=new j,se=new j;function ae(Y,re,fe){te.setFromMatrixPosition(re.matrixWorld),se.setFromMatrixPosition(fe.matrixWorld);const ye=te.distanceTo(se),Me=re.projectionMatrix.elements,Re=fe.projectionMatrix.elements,De=Me[14]/(Me[10]-1),Oe=Me[14]/(Me[10]+1),ut=(Me[9]+1)/Me[5],J=(Me[9]-1)/Me[5],Gt=(Me[8]-1)/Me[0],Ve=(Re[8]+1)/Re[0],Je=De*Gt,Be=De*Ve,Tt=ye/(-Gt+Ve),nt=Tt*-Gt;re.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(nt),Y.translateZ(Tt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const P=De+Tt,T=Oe+Tt,Z=Je-nt,ge=Be+(ye-nt),pe=ut*Oe/T*P,_e=J*Oe/T*P;Y.projectionMatrix.makePerspective(Z,ge,pe,_e,P,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function V(Y,re){re===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(re.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(a===null)return;R.near=I.near=F.near=Y.near,R.far=I.far=F.far=Y.far,(D!==R.near||oe!==R.far)&&(a.updateRenderState({depthNear:R.near,depthFar:R.far}),D=R.near,oe=R.far);const re=Y.parent,fe=R.cameras;V(R,re);for(let ye=0;ye<fe.length;ye++)V(fe[ye],re);fe.length===2?ae(R,F,I):R.projectionMatrix.copy(F.projectionMatrix),$(Y,R,re)};function $(Y,re,fe){fe===null?Y.matrix.copy(re.matrixWorld):(Y.matrix.copy(fe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(re.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(re.projectionMatrix),Y.projectionMatrixInverse.copy(re.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ff*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(y===null&&S===null))return p},this.setFoveation=function(Y){p=Y,y!==null&&(y.fixedFoveation=Y),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Y)};let W=null;function U(Y,re){if(v=re.getViewerPose(m||d),w=re,v!==null){const fe=v.views;S!==null&&(e.setRenderTargetFramebuffer(g,S.framebuffer),e.setRenderTarget(g));let ye=!1;fe.length!==R.cameras.length&&(R.cameras.length=0,ye=!0);for(let Me=0;Me<fe.length;Me++){const Re=fe[Me];let De=null;if(S!==null)De=S.getViewport(Re);else{const ut=x.getViewSubImage(y,Re);De=ut.viewport,Me===0&&(e.setRenderTargetTextures(g,ut.colorTexture,y.ignoreDepthValues?void 0:ut.depthStencilTexture),e.setRenderTarget(g))}let Oe=le[Me];Oe===void 0&&(Oe=new Kn,Oe.layers.enable(Me),Oe.viewport=new tn,le[Me]=Oe),Oe.matrix.fromArray(Re.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Re.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(De.x,De.y,De.width,De.height),Me===0&&(R.matrix.copy(Oe.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ye===!0&&R.cameras.push(Oe)}}for(let fe=0;fe<L.length;fe++){const ye=A[fe],Me=L[fe];ye!==null&&Me!==void 0&&Me.update(ye,re,m||d)}W&&W(Y,re),re.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:re}),w=null}const G=new $m;G.setAnimationLoop(U),this.setAnimationLoop=function(Y){W=Y},this.dispose=function(){}}}function JM(o,e){function n(_,g){_.matrixAutoUpdate===!0&&_.updateMatrix(),g.value.copy(_.matrix)}function r(_,g){g.color.getRGB(_.fogColor.value,qm(o)),g.isFog?(_.fogNear.value=g.near,_.fogFar.value=g.far):g.isFogExp2&&(_.fogDensity.value=g.density)}function a(_,g,L,A,b){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(_,g):g.isMeshToonMaterial?(u(_,g),x(_,g)):g.isMeshPhongMaterial?(u(_,g),v(_,g)):g.isMeshStandardMaterial?(u(_,g),y(_,g),g.isMeshPhysicalMaterial&&S(_,g,b)):g.isMeshMatcapMaterial?(u(_,g),w(_,g)):g.isMeshDepthMaterial?u(_,g):g.isMeshDistanceMaterial?(u(_,g),E(_,g)):g.isMeshNormalMaterial?u(_,g):g.isLineBasicMaterial?(d(_,g),g.isLineDashedMaterial&&f(_,g)):g.isPointsMaterial?p(_,g,L,A):g.isSpriteMaterial?m(_,g):g.isShadowMaterial?(_.color.value.copy(g.color),_.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(_,g){_.opacity.value=g.opacity,g.color&&_.diffuse.value.copy(g.color),g.emissive&&_.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(_.map.value=g.map,n(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,n(g.alphaMap,_.alphaMapTransform)),g.bumpMap&&(_.bumpMap.value=g.bumpMap,n(g.bumpMap,_.bumpMapTransform),_.bumpScale.value=g.bumpScale,g.side===Ln&&(_.bumpScale.value*=-1)),g.normalMap&&(_.normalMap.value=g.normalMap,n(g.normalMap,_.normalMapTransform),_.normalScale.value.copy(g.normalScale),g.side===Ln&&_.normalScale.value.negate()),g.displacementMap&&(_.displacementMap.value=g.displacementMap,n(g.displacementMap,_.displacementMapTransform),_.displacementScale.value=g.displacementScale,_.displacementBias.value=g.displacementBias),g.emissiveMap&&(_.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,_.emissiveMapTransform)),g.specularMap&&(_.specularMap.value=g.specularMap,n(g.specularMap,_.specularMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest);const L=e.get(g).envMap;if(L&&(_.envMap.value=L,_.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=g.reflectivity,_.ior.value=g.ior,_.refractionRatio.value=g.refractionRatio),g.lightMap){_.lightMap.value=g.lightMap;const A=o._useLegacyLights===!0?Math.PI:1;_.lightMapIntensity.value=g.lightMapIntensity*A,n(g.lightMap,_.lightMapTransform)}g.aoMap&&(_.aoMap.value=g.aoMap,_.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,_.aoMapTransform))}function d(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,g.map&&(_.map.value=g.map,n(g.map,_.mapTransform))}function f(_,g){_.dashSize.value=g.dashSize,_.totalSize.value=g.dashSize+g.gapSize,_.scale.value=g.scale}function p(_,g,L,A){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.size.value=g.size*L,_.scale.value=A*.5,g.map&&(_.map.value=g.map,n(g.map,_.uvTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,n(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function m(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.rotation.value=g.rotation,g.map&&(_.map.value=g.map,n(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,n(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function v(_,g){_.specular.value.copy(g.specular),_.shininess.value=Math.max(g.shininess,1e-4)}function x(_,g){g.gradientMap&&(_.gradientMap.value=g.gradientMap)}function y(_,g){_.metalness.value=g.metalness,g.metalnessMap&&(_.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,_.metalnessMapTransform)),_.roughness.value=g.roughness,g.roughnessMap&&(_.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,_.roughnessMapTransform)),e.get(g).envMap&&(_.envMapIntensity.value=g.envMapIntensity)}function S(_,g,L){_.ior.value=g.ior,g.sheen>0&&(_.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),_.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(_.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,_.sheenColorMapTransform)),g.sheenRoughnessMap&&(_.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,_.sheenRoughnessMapTransform))),g.clearcoat>0&&(_.clearcoat.value=g.clearcoat,_.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(_.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,_.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(_.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ln&&_.clearcoatNormalScale.value.negate())),g.iridescence>0&&(_.iridescence.value=g.iridescence,_.iridescenceIOR.value=g.iridescenceIOR,_.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(_.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,_.iridescenceMapTransform)),g.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),g.transmission>0&&(_.transmission.value=g.transmission,_.transmissionSamplerMap.value=L.texture,_.transmissionSamplerSize.value.set(L.width,L.height),g.transmissionMap&&(_.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,_.transmissionMapTransform)),_.thickness.value=g.thickness,g.thicknessMap&&(_.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=g.attenuationDistance,_.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(_.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(_.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=g.specularIntensity,_.specularColor.value.copy(g.specularColor),g.specularColorMap&&(_.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,_.specularColorMapTransform)),g.specularIntensityMap&&(_.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,_.specularIntensityMapTransform))}function w(_,g){g.matcap&&(_.matcap.value=g.matcap)}function E(_,g){const L=e.get(g).light;_.referencePosition.value.setFromMatrixPosition(L.matrixWorld),_.nearDistance.value=L.shadow.camera.near,_.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function eE(o,e,n,r){let a={},u={},d=[];const f=n.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function p(L,A){const b=A.program;r.uniformBlockBinding(L,b)}function m(L,A){let b=a[L.id];b===void 0&&(w(L),b=v(L),a[L.id]=b,L.addEventListener("dispose",_));const k=A.program;r.updateUBOMapping(L,k);const F=e.render.frame;u[L.id]!==F&&(y(L),u[L.id]=F)}function v(L){const A=x();L.__bindingPointIndex=A;const b=o.createBuffer(),k=L.__size,F=L.usage;return o.bindBuffer(o.UNIFORM_BUFFER,b),o.bufferData(o.UNIFORM_BUFFER,k,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,A,b),b}function x(){for(let L=0;L<f;L++)if(d.indexOf(L)===-1)return d.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(L){const A=a[L.id],b=L.uniforms,k=L.__cache;o.bindBuffer(o.UNIFORM_BUFFER,A);for(let F=0,I=b.length;F<I;F++){const le=Array.isArray(b[F])?b[F]:[b[F]];for(let R=0,D=le.length;R<D;R++){const oe=le[R];if(S(oe,F,R,k)===!0){const ue=oe.__offset,ve=Array.isArray(oe.value)?oe.value:[oe.value];let H=0;for(let te=0;te<ve.length;te++){const se=ve[te],ae=E(se);typeof se=="number"||typeof se=="boolean"?(oe.__data[0]=se,o.bufferSubData(o.UNIFORM_BUFFER,ue+H,oe.__data)):se.isMatrix3?(oe.__data[0]=se.elements[0],oe.__data[1]=se.elements[1],oe.__data[2]=se.elements[2],oe.__data[3]=0,oe.__data[4]=se.elements[3],oe.__data[5]=se.elements[4],oe.__data[6]=se.elements[5],oe.__data[7]=0,oe.__data[8]=se.elements[6],oe.__data[9]=se.elements[7],oe.__data[10]=se.elements[8],oe.__data[11]=0):(se.toArray(oe.__data,H),H+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ue,oe.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(L,A,b,k){const F=L.value,I=A+"_"+b;if(k[I]===void 0)return typeof F=="number"||typeof F=="boolean"?k[I]=F:k[I]=F.clone(),!0;{const le=k[I];if(typeof F=="number"||typeof F=="boolean"){if(le!==F)return k[I]=F,!0}else if(le.equals(F)===!1)return le.copy(F),!0}return!1}function w(L){const A=L.uniforms;let b=0;const k=16;for(let I=0,le=A.length;I<le;I++){const R=Array.isArray(A[I])?A[I]:[A[I]];for(let D=0,oe=R.length;D<oe;D++){const ue=R[D],ve=Array.isArray(ue.value)?ue.value:[ue.value];for(let H=0,te=ve.length;H<te;H++){const se=ve[H],ae=E(se),V=b%k;V!==0&&k-V<ae.boundary&&(b+=k-V),ue.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),ue.__offset=b,b+=ae.storage}}}const F=b%k;return F>0&&(b+=k-F),L.__size=b,L.__cache={},this}function E(L){const A={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(A.boundary=4,A.storage=4):L.isVector2?(A.boundary=8,A.storage=8):L.isVector3||L.isColor?(A.boundary=16,A.storage=12):L.isVector4?(A.boundary=16,A.storage=16):L.isMatrix3?(A.boundary=48,A.storage=48):L.isMatrix4?(A.boundary=64,A.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),A}function _(L){const A=L.target;A.removeEventListener("dispose",_);const b=d.indexOf(A.__bindingPointIndex);d.splice(b,1),o.deleteBuffer(a[A.id]),delete a[A.id],delete u[A.id]}function g(){for(const L in a)o.deleteBuffer(a[L]);d=[],a={},u={}}return{bind:p,update:m,dispose:g}}class rg{constructor(e={}){const{canvas:n=$v(),context:r=null,depth:a=!0,stencil:u=!0,alpha:d=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1}=e;this.isWebGLRenderer=!0;let y;r!==null?y=r.getContextAttributes().alpha:y=d;const S=new Uint32Array(4),w=new Int32Array(4);let E=null,_=null;const g=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=on,this._useLegacyLights=!1,this.toneMapping=gr,this.toneMappingExposure=1;const A=this;let b=!1,k=0,F=0,I=null,le=-1,R=null;const D=new tn,oe=new tn;let ue=null;const ve=new ht(0);let H=0,te=n.width,se=n.height,ae=1,V=null,$=null;const W=new tn(0,0,te,se),U=new tn(0,0,te,se);let G=!1;const Y=new xf;let re=!1,fe=!1,ye=null;const Me=new Ht,Re=new dt,De=new j,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ut(){return I===null?ae:1}let J=r;function Gt(C,q){for(let ne=0;ne<C.length;ne++){const ie=C[ne],ee=n.getContext(ie,q);if(ee!==null)return ee}return null}try{const C={alpha:!0,depth:a,stencil:u,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${mf}`),n.addEventListener("webglcontextlost",Se,!1),n.addEventListener("webglcontextrestored",z,!1),n.addEventListener("webglcontextcreationerror",Ee,!1),J===null){const q=["webgl2","webgl","experimental-webgl"];if(A.isWebGL1Renderer===!0&&q.shift(),J=Gt(q,C),J===null)throw Gt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&J instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),J.getShaderPrecisionFormat===void 0&&(J.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ve,Je,Be,Tt,nt,P,T,Z,ge,pe,_e,ke,Ae,Ue,We,it,he,pt,lt,Ze,Ge,Ie,et,gt;function At(){Ve=new cS(J),Je=new rS(J,Ve,e),Ve.init(Je),Ie=new KM(J,Ve,Je),Be=new qM(J,Ve,Je),Tt=new hS(J),nt=new UM,P=new jM(J,Ve,Be,nt,Je,Ie,Tt),T=new oS(A),Z=new uS(A),ge=new S0(J,Je),et=new nS(J,Ve,ge,Je),pe=new fS(J,ge,Tt,et),_e=new _S(J,pe,ge,Tt),lt=new gS(J,Je,P),it=new sS(nt),ke=new DM(A,T,Z,Ve,Je,et,it),Ae=new JM(A,nt),Ue=new IM,We=new HM(Ve,Je),pt=new tS(A,T,Z,Be,_e,y,p),he=new YM(A,_e,Je),gt=new eE(J,Tt,Je,Be),Ze=new iS(J,Ve,Tt,Je),Ge=new dS(J,Ve,Tt,Je),Tt.programs=ke.programs,A.capabilities=Je,A.extensions=Ve,A.properties=nt,A.renderLists=Ue,A.shadowMap=he,A.state=Be,A.info=Tt}At();const rt=new QM(A,J);this.xr=rt,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){const C=Ve.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ve.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(C){C!==void 0&&(ae=C,this.setSize(te,se,!1))},this.getSize=function(C){return C.set(te,se)},this.setSize=function(C,q,ne=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=C,se=q,n.width=Math.floor(C*ae),n.height=Math.floor(q*ae),ne===!0&&(n.style.width=C+"px",n.style.height=q+"px"),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(te*ae,se*ae).floor()},this.setDrawingBufferSize=function(C,q,ne){te=C,se=q,ae=ne,n.width=Math.floor(C*ne),n.height=Math.floor(q*ne),this.setViewport(0,0,C,q)},this.getCurrentViewport=function(C){return C.copy(D)},this.getViewport=function(C){return C.copy(W)},this.setViewport=function(C,q,ne,ie){C.isVector4?W.set(C.x,C.y,C.z,C.w):W.set(C,q,ne,ie),Be.viewport(D.copy(W).multiplyScalar(ae).floor())},this.getScissor=function(C){return C.copy(U)},this.setScissor=function(C,q,ne,ie){C.isVector4?U.set(C.x,C.y,C.z,C.w):U.set(C,q,ne,ie),Be.scissor(oe.copy(U).multiplyScalar(ae).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(C){Be.setScissorTest(G=C)},this.setOpaqueSort=function(C){V=C},this.setTransparentSort=function(C){$=C},this.getClearColor=function(C){return C.copy(pt.getClearColor())},this.setClearColor=function(){pt.setClearColor.apply(pt,arguments)},this.getClearAlpha=function(){return pt.getClearAlpha()},this.setClearAlpha=function(){pt.setClearAlpha.apply(pt,arguments)},this.clear=function(C=!0,q=!0,ne=!0){let ie=0;if(C){let ee=!1;if(I!==null){const Ce=I.texture.format;ee=Ce===Um||Ce===Dm||Ce===bm}if(ee){const Ce=I.texture.type,He=Ce===_r||Ce===hr||Ce===_f||Ce===Vr||Ce===Pm||Ce===Lm,je=pt.getClearColor(),Le=pt.getClearAlpha(),st=je.r,Qe=je.g,tt=je.b;He?(S[0]=st,S[1]=Qe,S[2]=tt,S[3]=Le,J.clearBufferuiv(J.COLOR,0,S)):(w[0]=st,w[1]=Qe,w[2]=tt,w[3]=Le,J.clearBufferiv(J.COLOR,0,w))}else ie|=J.COLOR_BUFFER_BIT}q&&(ie|=J.DEPTH_BUFFER_BIT),ne&&(ie|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Se,!1),n.removeEventListener("webglcontextrestored",z,!1),n.removeEventListener("webglcontextcreationerror",Ee,!1),Ue.dispose(),We.dispose(),nt.dispose(),T.dispose(),Z.dispose(),_e.dispose(),et.dispose(),gt.dispose(),ke.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",$t),rt.removeEventListener("sessionend",vt),ye&&(ye.dispose(),ye=null),Xt.stop()};function Se(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const C=Tt.autoReset,q=he.enabled,ne=he.autoUpdate,ie=he.needsUpdate,ee=he.type;At(),Tt.autoReset=C,he.enabled=q,he.autoUpdate=ne,he.needsUpdate=ie,he.type=ee}function Ee(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function we(C){const q=C.target;q.removeEventListener("dispose",we),Ke(q)}function Ke(C){Xe(C),nt.remove(C)}function Xe(C){const q=nt.get(C).programs;q!==void 0&&(q.forEach(function(ne){ke.releaseProgram(ne)}),C.isShaderMaterial&&ke.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,ne,ie,ee,Ce){q===null&&(q=Oe);const He=ee.isMesh&&ee.matrixWorld.determinant()<0,je=kl(C,q,ne,ie,ee);Be.setMaterial(ie,He);let Le=ne.index,st=1;if(ie.wireframe===!0){if(Le=pe.getWireframeAttribute(ne),Le===void 0)return;st=2}const Qe=ne.drawRange,tt=ne.attributes.position;let Rt=Qe.start*st,pn=(Qe.start+Qe.count)*st;Ce!==null&&(Rt=Math.max(Rt,Ce.start*st),pn=Math.min(pn,(Ce.start+Ce.count)*st)),Le!==null?(Rt=Math.max(Rt,0),pn=Math.min(pn,Le.count)):tt!=null&&(Rt=Math.max(Rt,0),pn=Math.min(pn,tt.count));const Bt=pn-Rt;if(Bt<0||Bt===1/0)return;et.setup(ee,ie,je,ne,Le);let Sn,mt=Ze;if(Le!==null&&(Sn=ge.get(Le),mt=Ge,mt.setIndex(Sn)),ee.isMesh)ie.wireframe===!0?(Be.setLineWidth(ie.wireframeLinewidth*ut()),mt.setMode(J.LINES)):mt.setMode(J.TRIANGLES);else if(ee.isLine){let ot=ie.linewidth;ot===void 0&&(ot=1),Be.setLineWidth(ot*ut()),ee.isLineSegments?mt.setMode(J.LINES):ee.isLineLoop?mt.setMode(J.LINE_LOOP):mt.setMode(J.LINE_STRIP)}else ee.isPoints?mt.setMode(J.POINTS):ee.isSprite&&mt.setMode(J.TRIANGLES);if(ee.isBatchedMesh)mt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else if(ee.isInstancedMesh)mt.renderInstances(Rt,Bt,ee.count);else if(ne.isInstancedBufferGeometry){const ot=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,mn=Math.min(ne.instanceCount,ot);mt.renderInstances(Rt,Bt,mn)}else mt.render(Rt,Bt)};function yt(C,q,ne){C.transparent===!0&&C.side===Fi&&C.forceSinglePass===!1?(C.side=Ln,C.needsUpdate=!0,ki(C,q,ne),C.side=xr,C.needsUpdate=!0,ki(C,q,ne),C.side=Fi):ki(C,q,ne)}this.compile=function(C,q,ne=null){ne===null&&(ne=C),_=We.get(ne),_.init(),L.push(_),ne.traverseVisible(function(ee){ee.isLight&&ee.layers.test(q.layers)&&(_.pushLight(ee),ee.castShadow&&_.pushShadow(ee))}),C!==ne&&C.traverseVisible(function(ee){ee.isLight&&ee.layers.test(q.layers)&&(_.pushLight(ee),ee.castShadow&&_.pushShadow(ee))}),_.setupLights(A._useLegacyLights);const ie=new Set;return C.traverse(function(ee){const Ce=ee.material;if(Ce)if(Array.isArray(Ce))for(let He=0;He<Ce.length;He++){const je=Ce[He];yt(je,ne,ee),ie.add(je)}else yt(Ce,ne,ee),ie.add(Ce)}),L.pop(),_=null,ie},this.compileAsync=function(C,q,ne=null){const ie=this.compile(C,q,ne);return new Promise(ee=>{function Ce(){if(ie.forEach(function(He){nt.get(He).currentProgram.isReady()&&ie.delete(He)}),ie.size===0){ee(C);return}setTimeout(Ce,10)}Ve.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let St=null;function Ft(C){St&&St(C)}function $t(){Xt.stop()}function vt(){Xt.start()}const Xt=new $m;Xt.setAnimationLoop(Ft),typeof self<"u"&&Xt.setContext(self),this.setAnimationLoop=function(C){St=C,rt.setAnimationLoop(C),C===null?Xt.stop():Xt.start()},rt.addEventListener("sessionstart",$t),rt.addEventListener("sessionend",vt),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(q),q=rt.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,q,I),_=We.get(C,L.length),_.init(),L.push(_),Me.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Y.setFromProjectionMatrix(Me),fe=this.localClippingEnabled,re=it.init(this.clippingPlanes,fe),E=Ue.get(C,g.length),E.init(),g.push(E),an(C,q,0,A.sortObjects),E.finish(),A.sortObjects===!0&&E.sort(V,$),this.info.render.frame++,re===!0&&it.beginShadows();const ne=_.state.shadowsArray;if(he.render(ne,C,q),re===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset(),pt.render(E,C),_.setupLights(A._useLegacyLights),q.isArrayCamera){const ie=q.cameras;for(let ee=0,Ce=ie.length;ee<Ce;ee++){const He=ie[ee];Ho(E,C,He,He.viewport)}}else Ho(E,C,q);I!==null&&(P.updateMultisampleRenderTarget(I),P.updateRenderTargetMipmap(I)),C.isScene===!0&&C.onAfterRender(A,C,q),et.resetDefaultState(),le=-1,R=null,L.pop(),L.length>0?_=L[L.length-1]:_=null,g.pop(),g.length>0?E=g[g.length-1]:E=null};function an(C,q,ne,ie){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)ne=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Y.intersectsSprite(C)){ie&&De.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Me);const He=_e.update(C),je=C.material;je.visible&&E.push(C,He,je,ne,De.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Y.intersectsObject(C))){const He=_e.update(C),je=C.material;if(ie&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),De.copy(C.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),De.copy(He.boundingSphere.center)),De.applyMatrix4(C.matrixWorld).applyMatrix4(Me)),Array.isArray(je)){const Le=He.groups;for(let st=0,Qe=Le.length;st<Qe;st++){const tt=Le[st],Rt=je[tt.materialIndex];Rt&&Rt.visible&&E.push(C,He,Rt,ne,De.z,tt)}}else je.visible&&E.push(C,He,je,ne,De.z,null)}}const Ce=C.children;for(let He=0,je=Ce.length;He<je;He++)an(Ce[He],q,ne,ie)}function Ho(C,q,ne,ie){const ee=C.opaque,Ce=C.transmissive,He=C.transparent;_.setupLightsView(ne),re===!0&&it.setGlobalState(A.clippingPlanes,ne),Ce.length>0&&yr(ee,Ce,q,ne),ie&&Be.viewport(D.copy(ie)),ee.length>0&&xi(ee,q,ne),Ce.length>0&&xi(Ce,q,ne),He.length>0&&xi(He,q,ne),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function yr(C,q,ne,ie){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;const Ce=Je.isWebGL2;ye===null&&(ye=new Yr(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")?zo:_r,minFilter:Oo,samples:Ce?4:0})),A.getDrawingBufferSize(Re),Ce?ye.setSize(Re.x,Re.y):ye.setSize(df(Re.x),df(Re.y));const He=A.getRenderTarget();A.setRenderTarget(ye),A.getClearColor(ve),H=A.getClearAlpha(),H<1&&A.setClearColor(16777215,.5),A.clear();const je=A.toneMapping;A.toneMapping=gr,xi(C,ne,ie),P.updateMultisampleRenderTarget(ye),P.updateRenderTargetMipmap(ye);let Le=!1;for(let st=0,Qe=q.length;st<Qe;st++){const tt=q[st],Rt=tt.object,pn=tt.geometry,Bt=tt.material,Sn=tt.group;if(Bt.side===Fi&&Rt.layers.test(ie.layers)){const mt=Bt.side;Bt.side=Ln,Bt.needsUpdate=!0,Sr(Rt,ne,ie,pn,Bt,Sn),Bt.side=mt,Bt.needsUpdate=!0,Le=!0}}Le===!0&&(P.updateMultisampleRenderTarget(ye),P.updateRenderTargetMipmap(ye)),A.setRenderTarget(He),A.setClearColor(ve,H),A.toneMapping=je}function xi(C,q,ne){const ie=q.isScene===!0?q.overrideMaterial:null;for(let ee=0,Ce=C.length;ee<Ce;ee++){const He=C[ee],je=He.object,Le=He.geometry,st=ie===null?He.material:ie,Qe=He.group;je.layers.test(ne.layers)&&Sr(je,q,ne,Le,st,Qe)}}function Sr(C,q,ne,ie,ee,Ce){C.onBeforeRender(A,q,ne,ie,ee,Ce),C.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ee.onBeforeRender(A,q,ne,ie,C,Ce),ee.transparent===!0&&ee.side===Fi&&ee.forceSinglePass===!1?(ee.side=Ln,ee.needsUpdate=!0,A.renderBufferDirect(ne,q,ie,ee,C,Ce),ee.side=xr,ee.needsUpdate=!0,A.renderBufferDirect(ne,q,ie,ee,C,Ce),ee.side=Fi):A.renderBufferDirect(ne,q,ie,ee,C,Ce),C.onAfterRender(A,q,ne,ie,ee,Ce)}function ki(C,q,ne){q.isScene!==!0&&(q=Oe);const ie=nt.get(C),ee=_.state.lights,Ce=_.state.shadowsArray,He=ee.state.version,je=ke.getParameters(C,ee.state,Ce,q,ne),Le=ke.getProgramCacheKey(je);let st=ie.programs;ie.environment=C.isMeshStandardMaterial?q.environment:null,ie.fog=q.fog,ie.envMap=(C.isMeshStandardMaterial?Z:T).get(C.envMap||ie.environment),st===void 0&&(C.addEventListener("dispose",we),st=new Map,ie.programs=st);let Qe=st.get(Le);if(Qe!==void 0){if(ie.currentProgram===Qe&&ie.lightsStateVersion===He)return Vo(C,je),Qe}else je.uniforms=ke.getUniforms(C),C.onBuild(ne,je,A),C.onBeforeCompile(je,A),Qe=ke.acquireProgram(je,Le),st.set(Le,Qe),ie.uniforms=je.uniforms;const tt=ie.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(tt.clippingPlanes=it.uniform),Vo(C,je),ie.needsLights=Wo(C),ie.lightsStateVersion=He,ie.needsLights&&(tt.ambientLightColor.value=ee.state.ambient,tt.lightProbe.value=ee.state.probe,tt.directionalLights.value=ee.state.directional,tt.directionalLightShadows.value=ee.state.directionalShadow,tt.spotLights.value=ee.state.spot,tt.spotLightShadows.value=ee.state.spotShadow,tt.rectAreaLights.value=ee.state.rectArea,tt.ltc_1.value=ee.state.rectAreaLTC1,tt.ltc_2.value=ee.state.rectAreaLTC2,tt.pointLights.value=ee.state.point,tt.pointLightShadows.value=ee.state.pointShadow,tt.hemisphereLights.value=ee.state.hemi,tt.directionalShadowMap.value=ee.state.directionalShadowMap,tt.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,tt.spotShadowMap.value=ee.state.spotShadowMap,tt.spotLightMatrix.value=ee.state.spotLightMatrix,tt.spotLightMap.value=ee.state.spotLightMap,tt.pointShadowMap.value=ee.state.pointShadowMap,tt.pointShadowMatrix.value=ee.state.pointShadowMatrix),ie.currentProgram=Qe,ie.uniformsList=null,Qe}function Go(C){if(C.uniformsList===null){const q=C.currentProgram.getUniforms();C.uniformsList=wl.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function Vo(C,q){const ne=nt.get(C);ne.outputColorSpace=q.outputColorSpace,ne.batching=q.batching,ne.instancing=q.instancing,ne.instancingColor=q.instancingColor,ne.skinning=q.skinning,ne.morphTargets=q.morphTargets,ne.morphNormals=q.morphNormals,ne.morphColors=q.morphColors,ne.morphTargetsCount=q.morphTargetsCount,ne.numClippingPlanes=q.numClippingPlanes,ne.numIntersection=q.numClipIntersection,ne.vertexAlphas=q.vertexAlphas,ne.vertexTangents=q.vertexTangents,ne.toneMapping=q.toneMapping}function kl(C,q,ne,ie,ee){q.isScene!==!0&&(q=Oe),P.resetTextureUnits();const Ce=q.fog,He=ie.isMeshStandardMaterial?q.environment:null,je=I===null?A.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Bi,Le=(ie.isMeshStandardMaterial?Z:T).get(ie.envMap||He),st=ie.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,Qe=!!ne.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),tt=!!ne.morphAttributes.position,Rt=!!ne.morphAttributes.normal,pn=!!ne.morphAttributes.color;let Bt=gr;ie.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Bt=A.toneMapping);const Sn=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,mt=Sn!==void 0?Sn.length:0,ot=nt.get(ie),mn=_.state.lights;if(re===!0&&(fe===!0||C!==R)){const Mn=C===R&&ie.id===le;it.setState(ie,C,Mn)}let Dt=!1;ie.version===ot.__version?(ot.needsLights&&ot.lightsStateVersion!==mn.state.version||ot.outputColorSpace!==je||ee.isBatchedMesh&&ot.batching===!1||!ee.isBatchedMesh&&ot.batching===!0||ee.isInstancedMesh&&ot.instancing===!1||!ee.isInstancedMesh&&ot.instancing===!0||ee.isSkinnedMesh&&ot.skinning===!1||!ee.isSkinnedMesh&&ot.skinning===!0||ee.isInstancedMesh&&ot.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&ot.instancingColor===!1&&ee.instanceColor!==null||ot.envMap!==Le||ie.fog===!0&&ot.fog!==Ce||ot.numClippingPlanes!==void 0&&(ot.numClippingPlanes!==it.numPlanes||ot.numIntersection!==it.numIntersection)||ot.vertexAlphas!==st||ot.vertexTangents!==Qe||ot.morphTargets!==tt||ot.morphNormals!==Rt||ot.morphColors!==pn||ot.toneMapping!==Bt||Je.isWebGL2===!0&&ot.morphTargetsCount!==mt)&&(Dt=!0):(Dt=!0,ot.__version=ie.version);let Si=ot.currentProgram;Dt===!0&&(Si=ki(ie,q,ee));let Xo=!1,hi=!1,Hi=!1;const Ot=Si.getUniforms(),kn=ot.uniforms;if(Be.useProgram(Si.program)&&(Xo=!0,hi=!0,Hi=!0),ie.id!==le&&(le=ie.id,hi=!0),Xo||R!==C){Ot.setValue(J,"projectionMatrix",C.projectionMatrix),Ot.setValue(J,"viewMatrix",C.matrixWorldInverse);const Mn=Ot.map.cameraPosition;Mn!==void 0&&Mn.setValue(J,De.setFromMatrixPosition(C.matrixWorld)),Je.logarithmicDepthBuffer&&Ot.setValue(J,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Ot.setValue(J,"isOrthographic",C.isOrthographicCamera===!0),R!==C&&(R=C,hi=!0,Hi=!0)}if(ee.isSkinnedMesh){Ot.setOptional(J,ee,"bindMatrix"),Ot.setOptional(J,ee,"bindMatrixInverse");const Mn=ee.skeleton;Mn&&(Je.floatVertexTextures?(Mn.boneTexture===null&&Mn.computeBoneTexture(),Ot.setValue(J,"boneTexture",Mn.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ee.isBatchedMesh&&(Ot.setOptional(J,ee,"batchingTexture"),Ot.setValue(J,"batchingTexture",ee._matricesTexture,P));const Ks=ne.morphAttributes;if((Ks.position!==void 0||Ks.normal!==void 0||Ks.color!==void 0&&Je.isWebGL2===!0)&&lt.update(ee,ne,Si),(hi||ot.receiveShadow!==ee.receiveShadow)&&(ot.receiveShadow=ee.receiveShadow,Ot.setValue(J,"receiveShadow",ee.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(kn.envMap.value=Le,kn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),hi&&(Ot.setValue(J,"toneMappingExposure",A.toneMappingExposure),ot.needsLights&&yi(kn,Hi),Ce&&ie.fog===!0&&Ae.refreshFogUniforms(kn,Ce),Ae.refreshMaterialUniforms(kn,ie,ae,se,ye),wl.upload(J,Go(ot),kn,P)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(wl.upload(J,Go(ot),kn,P),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Ot.setValue(J,"center",ee.center),Ot.setValue(J,"modelViewMatrix",ee.modelViewMatrix),Ot.setValue(J,"normalMatrix",ee.normalMatrix),Ot.setValue(J,"modelMatrix",ee.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const Mn=ie.uniformsGroups;for(let Mr=0,Yo=Mn.length;Mr<Yo;Mr++)if(Je.isWebGL2){const Kr=Mn[Mr];gt.update(Kr,Si),gt.bind(Kr,Si)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Si}function yi(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function Wo(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(C,q,ne){nt.get(C.texture).__webglTexture=q,nt.get(C.depthTexture).__webglTexture=ne;const ie=nt.get(C);ie.__hasExternalTextures=!0,ie.__hasExternalTextures&&(ie.__autoAllocateDepthBuffer=ne===void 0,ie.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,q){const ne=nt.get(C);ne.__webglFramebuffer=q,ne.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(C,q=0,ne=0){I=C,k=q,F=ne;let ie=!0,ee=null,Ce=!1,He=!1;if(C){const Le=nt.get(C);Le.__useDefaultFramebuffer!==void 0?(Be.bindFramebuffer(J.FRAMEBUFFER,null),ie=!1):Le.__webglFramebuffer===void 0?P.setupRenderTarget(C):Le.__hasExternalTextures&&P.rebindTextures(C,nt.get(C.texture).__webglTexture,nt.get(C.depthTexture).__webglTexture);const st=C.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(He=!0);const Qe=nt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Qe[q])?ee=Qe[q][ne]:ee=Qe[q],Ce=!0):Je.isWebGL2&&C.samples>0&&P.useMultisampledRTT(C)===!1?ee=nt.get(C).__webglMultisampledFramebuffer:Array.isArray(Qe)?ee=Qe[ne]:ee=Qe,D.copy(C.viewport),oe.copy(C.scissor),ue=C.scissorTest}else D.copy(W).multiplyScalar(ae).floor(),oe.copy(U).multiplyScalar(ae).floor(),ue=G;if(Be.bindFramebuffer(J.FRAMEBUFFER,ee)&&Je.drawBuffers&&ie&&Be.drawBuffers(C,ee),Be.viewport(D),Be.scissor(oe),Be.setScissorTest(ue),Ce){const Le=nt.get(C.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+q,Le.__webglTexture,ne)}else if(He){const Le=nt.get(C.texture),st=q||0;J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,Le.__webglTexture,ne||0,st)}le=-1},this.readRenderTargetPixels=function(C,q,ne,ie,ee,Ce,He){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=nt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&He!==void 0&&(je=je[He]),je){Be.bindFramebuffer(J.FRAMEBUFFER,je);try{const Le=C.texture,st=Le.format,Qe=Le.type;if(st!==ci&&Ie.convert(st)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const tt=Qe===zo&&(Ve.has("EXT_color_buffer_half_float")||Je.isWebGL2&&Ve.has("EXT_color_buffer_float"));if(Qe!==_r&&Ie.convert(Qe)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Qe===pr&&(Je.isWebGL2||Ve.has("OES_texture_float")||Ve.has("WEBGL_color_buffer_float")))&&!tt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-ie&&ne>=0&&ne<=C.height-ee&&J.readPixels(q,ne,ie,ee,Ie.convert(st),Ie.convert(Qe),Ce)}finally{const Le=I!==null?nt.get(I).__webglFramebuffer:null;Be.bindFramebuffer(J.FRAMEBUFFER,Le)}}},this.copyFramebufferToTexture=function(C,q,ne=0){const ie=Math.pow(2,-ne),ee=Math.floor(q.image.width*ie),Ce=Math.floor(q.image.height*ie);P.setTexture2D(q,0),J.copyTexSubImage2D(J.TEXTURE_2D,ne,0,0,C.x,C.y,ee,Ce),Be.unbindTexture()},this.copyTextureToTexture=function(C,q,ne,ie=0){const ee=q.image.width,Ce=q.image.height,He=Ie.convert(ne.format),je=Ie.convert(ne.type);P.setTexture2D(ne,0),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,ne.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,ne.unpackAlignment),q.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,ie,C.x,C.y,ee,Ce,He,je,q.image.data):q.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,ie,C.x,C.y,q.mipmaps[0].width,q.mipmaps[0].height,He,q.mipmaps[0].data):J.texSubImage2D(J.TEXTURE_2D,ie,C.x,C.y,He,je,q.image),ie===0&&ne.generateMipmaps&&J.generateMipmap(J.TEXTURE_2D),Be.unbindTexture()},this.copyTextureToTexture3D=function(C,q,ne,ie,ee=0){if(A.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ce=C.max.x-C.min.x+1,He=C.max.y-C.min.y+1,je=C.max.z-C.min.z+1,Le=Ie.convert(ie.format),st=Ie.convert(ie.type);let Qe;if(ie.isData3DTexture)P.setTexture3D(ie,0),Qe=J.TEXTURE_3D;else if(ie.isDataArrayTexture||ie.isCompressedArrayTexture)P.setTexture2DArray(ie,0),Qe=J.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,ie.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,ie.unpackAlignment);const tt=J.getParameter(J.UNPACK_ROW_LENGTH),Rt=J.getParameter(J.UNPACK_IMAGE_HEIGHT),pn=J.getParameter(J.UNPACK_SKIP_PIXELS),Bt=J.getParameter(J.UNPACK_SKIP_ROWS),Sn=J.getParameter(J.UNPACK_SKIP_IMAGES),mt=ne.isCompressedTexture?ne.mipmaps[ee]:ne.image;J.pixelStorei(J.UNPACK_ROW_LENGTH,mt.width),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,mt.height),J.pixelStorei(J.UNPACK_SKIP_PIXELS,C.min.x),J.pixelStorei(J.UNPACK_SKIP_ROWS,C.min.y),J.pixelStorei(J.UNPACK_SKIP_IMAGES,C.min.z),ne.isDataTexture||ne.isData3DTexture?J.texSubImage3D(Qe,ee,q.x,q.y,q.z,Ce,He,je,Le,st,mt.data):ne.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),J.compressedTexSubImage3D(Qe,ee,q.x,q.y,q.z,Ce,He,je,Le,mt.data)):J.texSubImage3D(Qe,ee,q.x,q.y,q.z,Ce,He,je,Le,st,mt),J.pixelStorei(J.UNPACK_ROW_LENGTH,tt),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,Rt),J.pixelStorei(J.UNPACK_SKIP_PIXELS,pn),J.pixelStorei(J.UNPACK_SKIP_ROWS,Bt),J.pixelStorei(J.UNPACK_SKIP_IMAGES,Sn),ee===0&&ie.generateMipmaps&&J.generateMipmap(Qe),Be.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?P.setTextureCube(C,0):C.isData3DTexture?P.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?P.setTexture2DArray(C,0):P.setTexture2D(C,0),Be.unbindTexture()},this.resetState=function(){k=0,F=0,I=null,Be.reset(),et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===vf?"display-p3":"srgb",n.unpackColorSpace=Et.workingColorSpace===Fl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===on?Xr:Im}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Xr?on:Bi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class tE extends rg{}tE.prototype.isWebGL1Renderer=!0;class nE extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class iE{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=uf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=vr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,r){e*=this.stride,r*=n.stride;for(let a=0,u=this.stride;a<u;a++)this.array[e+a]=n.array[r+a];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const vn=new j;class Ul{constructor(e,n,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,r=this.data.count;n<r;n++)vn.fromBufferAttribute(this,n),vn.applyMatrix4(e),this.setXYZ(n,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)vn.fromBufferAttribute(this,n),vn.applyNormalMatrix(e),this.setXYZ(n,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)vn.fromBufferAttribute(this,n),vn.transformDirection(e),this.setXYZ(n,vn.x,vn.y,vn.z);return this}setX(e,n){return this.normalized&&(n=wt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=wt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=wt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=wt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Oi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Oi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Oi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Oi(n,this.array)),n}setXY(e,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=wt(n,this.array),r=wt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=r,this}setXYZ(e,n,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(n=wt(n,this.array),r=wt(r,this.array),a=wt(a,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=r,this.data.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e=e*this.data.stride+this.offset,this.normalized&&(n=wt(n,this.array),r=wt(r,this.array),a=wt(a,this.array),u=wt(u,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=r,this.data.array[e+2]=a,this.data.array[e+3]=u,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)n.push(this.data.array[a+u])}return new di(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ul(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)n.push(this.data.array[a+u])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class sg extends jr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ns;const Uo=new j,Is=new j,Fs=new j,Os=new dt,No=new dt,og=new Ht,_l=new j,Io=new j,vl=new j,gm=new dt,Qc=new dt,_m=new dt;class rE extends nn{constructor(e=new sg){if(super(),this.isSprite=!0,this.type="Sprite",Ns===void 0){Ns=new Zn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new iE(n,5);Ns.setIndex([0,1,2,0,2,3]),Ns.setAttribute("position",new Ul(r,3,0,!1)),Ns.setAttribute("uv",new Ul(r,2,3,!1))}this.geometry=Ns,this.material=e,this.center=new dt(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Is.setFromMatrixScale(this.matrixWorld),og.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Fs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Is.multiplyScalar(-Fs.z);const r=this.material.rotation;let a,u;r!==0&&(u=Math.cos(r),a=Math.sin(r));const d=this.center;xl(_l.set(-.5,-.5,0),Fs,d,Is,a,u),xl(Io.set(.5,-.5,0),Fs,d,Is,a,u),xl(vl.set(.5,.5,0),Fs,d,Is,a,u),gm.set(0,0),Qc.set(1,0),_m.set(1,1);let f=e.ray.intersectTriangle(_l,Io,vl,!1,Uo);if(f===null&&(xl(Io.set(-.5,.5,0),Fs,d,Is,a,u),Qc.set(0,1),f=e.ray.intersectTriangle(_l,vl,Io,!1,Uo),f===null))return;const p=e.ray.origin.distanceTo(Uo);p<e.near||p>e.far||n.push({distance:p,point:Uo.clone(),uv:zn.getInterpolation(Uo,_l,Io,vl,gm,Qc,_m,new dt),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function xl(o,e,n,r,a,u){Os.subVectors(o,n).addScalar(.5).multiply(r),a!==void 0?(No.x=u*Os.x-a*Os.y,No.y=a*Os.x+u*Os.y):No.copy(Os),o.copy(e),o.x+=No.x,o.y+=No.y,o.applyMatrix4(og)}class pf extends jr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const vm=new j,xm=new j,ym=new Ht,Jc=new Gm,yl=new Ol;class ag extends nn{constructor(e=new Zn,n=new pf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,u=n.count;a<u;a++)vm.fromBufferAttribute(n,a-1),xm.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=vm.distanceTo(xm);e.setAttribute("lineDistance",new Bn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,u=e.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),yl.copy(r.boundingSphere),yl.applyMatrix4(a),yl.radius+=u,e.ray.intersectsSphere(yl)===!1)return;ym.copy(a).invert(),Jc.copy(e.ray).applyMatrix4(ym);const f=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,m=new j,v=new j,x=new j,y=new j,S=this.isLineSegments?2:1,w=r.index,_=r.attributes.position;if(w!==null){const g=Math.max(0,d.start),L=Math.min(w.count,d.start+d.count);for(let A=g,b=L-1;A<b;A+=S){const k=w.getX(A),F=w.getX(A+1);if(m.fromBufferAttribute(_,k),v.fromBufferAttribute(_,F),Jc.distanceSqToSegment(m,v,y,x)>p)continue;y.applyMatrix4(this.matrixWorld);const le=e.ray.origin.distanceTo(y);le<e.near||le>e.far||n.push({distance:le,point:x.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,d.start),L=Math.min(_.count,d.start+d.count);for(let A=g,b=L-1;A<b;A+=S){if(m.fromBufferAttribute(_,A),v.fromBufferAttribute(_,A+1),Jc.distanceSqToSegment(m,v,y,x)>p)continue;y.applyMatrix4(this.matrixWorld);const F=e.ray.origin.distanceTo(y);F<e.near||F>e.far||n.push({distance:F,point:x.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=a.length;u<d;u++){const f=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=u}}}}}const Sm=new j,Mm=new j;class sE extends ag{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let a=0,u=n.count;a<u;a+=2)Sm.fromBufferAttribute(n,a),Mm.fromBufferAttribute(n,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+Sm.distanceTo(Mm);e.setAttribute("lineDistance",new Bn(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class oE extends bn{constructor(e,n,r,a,u,d,f,p,m){super(e,n,r,a,u,d,f,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Sl=new j,Ml=new j,ef=new j,El=new zn;class aE extends Zn{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const a=Math.pow(10,4),u=Math.cos(Tl*n),d=e.getIndex(),f=e.getAttribute("position"),p=d?d.count:f.count,m=[0,0,0],v=["a","b","c"],x=new Array(3),y={},S=[];for(let w=0;w<p;w+=3){d?(m[0]=d.getX(w),m[1]=d.getX(w+1),m[2]=d.getX(w+2)):(m[0]=w,m[1]=w+1,m[2]=w+2);const{a:E,b:_,c:g}=El;if(E.fromBufferAttribute(f,m[0]),_.fromBufferAttribute(f,m[1]),g.fromBufferAttribute(f,m[2]),El.getNormal(ef),x[0]=`${Math.round(E.x*a)},${Math.round(E.y*a)},${Math.round(E.z*a)}`,x[1]=`${Math.round(_.x*a)},${Math.round(_.y*a)},${Math.round(_.z*a)}`,x[2]=`${Math.round(g.x*a)},${Math.round(g.y*a)},${Math.round(g.z*a)}`,!(x[0]===x[1]||x[1]===x[2]||x[2]===x[0]))for(let L=0;L<3;L++){const A=(L+1)%3,b=x[L],k=x[A],F=El[v[L]],I=El[v[A]],le=`${b}_${k}`,R=`${k}_${b}`;R in y&&y[R]?(ef.dot(y[R].normal)<=u&&(S.push(F.x,F.y,F.z),S.push(I.x,I.y,I.z)),y[R]=null):le in y||(y[le]={index0:m[L],index1:m[A],normal:ef.clone()})}}for(const w in y)if(y[w]){const{index0:E,index1:_}=y[w];Sl.fromBufferAttribute(f,E),Ml.fromBufferAttribute(f,_),S.push(Sl.x,Sl.y,Sl.z),S.push(Ml.x,Ml.y,Ml.z)}this.setAttribute("position",new Bn(S,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Nl extends Zn{constructor(e=1,n=32,r=16,a=0,u=Math.PI*2,d=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:a,phiLength:u,thetaStart:d,thetaLength:f},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const p=Math.min(d+f,Math.PI);let m=0;const v=[],x=new j,y=new j,S=[],w=[],E=[],_=[];for(let g=0;g<=r;g++){const L=[],A=g/r;let b=0;g===0&&d===0?b=.5/n:g===r&&p===Math.PI&&(b=-.5/n);for(let k=0;k<=n;k++){const F=k/n;x.x=-e*Math.cos(a+F*u)*Math.sin(d+A*f),x.y=e*Math.cos(d+A*f),x.z=e*Math.sin(a+F*u)*Math.sin(d+A*f),w.push(x.x,x.y,x.z),y.copy(x).normalize(),E.push(y.x,y.y,y.z),_.push(F+b,1-A),L.push(m++)}v.push(L)}for(let g=0;g<r;g++)for(let L=0;L<n;L++){const A=v[g][L+1],b=v[g][L],k=v[g+1][L],F=v[g+1][L+1];(g!==0||d>0)&&S.push(A,b,F),(g!==r-1||p<Math.PI)&&S.push(b,k,F)}this.setIndex(S),this.setAttribute("position",new Bn(w,3)),this.setAttribute("normal",new Bn(E,3)),this.setAttribute("uv",new Bn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class lE extends jr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ht(16777215),this.specular=new ht(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fm,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class lg extends nn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const tf=new Ht,Em=new j,Tm=new j;class uE{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xf,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;Em.setFromMatrixPosition(e.matrixWorld),n.position.copy(Em),Tm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Tm),n.updateMatrixWorld(),tf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tf),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(tf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class cE extends uE{constructor(){super(new Zm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fE extends lg{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new cE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class dE extends lg{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mf);const dr={layers:[{name:"Input",neurons:1,size:[28,28],color:"#4f46e5"},{name:"Block 1",neurons:32,size:[14,14],color:"#06b6d4"},{name:"Block 2",neurons:64,size:[7,7],color:"#10b981"},{name:"Block 3",neurons:128,size:[3,3],color:"#f59e0b"},{name:"Block 4",neurons:256,size:[3,3],color:"#ef4444"},{name:"GAP",neurons:256,size:[1,1],color:"#8b5cf6"},{name:"Output",neurons:237,size:[1,1],color:"#ec4899"}],spacing:2.5},hE=()=>{const o=ai.useRef(null),e=ai.useRef(null),n=ai.useRef([]),r=ai.useRef([]),[a,u]=ai.useState(null),[d,f]=ai.useState(!1),[p,m]=ai.useState(null);ai.useEffect(()=>{(async()=>{if(window.VIS_DATA){console.log("🚀 Data loaded directly from Streamlit!"),u(window.VIS_DATA),f(!0);return}try{console.log("📂 Attempting to fetch from file system (Dev Mode)...");const _=await fetch("./data.json");if(!_.ok)throw new Error("File not found");const g=await _.json();u(g),f(!0)}catch{console.warn("⚠️ No data found. If in Streamlit, ensure app.py injects window.VIS_DATA.")}})()},[]),ai.useEffect(()=>{if(!o.current)return;const E=new nE;E.background=new ht(658983),e.current=E;const _=new Kn(45,o.current.clientWidth/o.current.clientHeight,.1,1e3);_.position.set(0,3,15),_.lookAt(0,0,0);const g=new rg({antialias:!0});g.setSize(o.current.clientWidth,o.current.clientHeight),g.setPixelRatio(window.devicePixelRatio),o.current.appendChild(g.domElement);const L=new dE(16777215,.5);E.add(L);const A=new fE(16777215,.8);A.position.set(5,10,5),E.add(A),v(E);let b;const k=()=>{b=requestAnimationFrame(k),d&&S(),n.current.length>0&&n.current.forEach((I,le)=>{I.rotation.y=Math.sin(Date.now()*3e-4+le)*.05}),g.render(E,_)};k();const F=new ResizeObserver(I=>{if(!I||I.length===0)return;const{width:le,height:R}=I[0].contentRect;_.aspect=le/R,_.updateProjectionMatrix(),g.setSize(le,R)});return o.current&&F.observe(o.current),()=>{F.disconnect(),cancelAnimationFrame(b),o.current?.removeChild(g.domElement)}},[]);const v=E=>{const _=dr.layers,L=-((_.length-1)*dr.spacing)/2;_.forEach((A,b)=>{const k=L+b*dr.spacing,F=.3+Math.log(A.neurons+1)*.15,I=new qs(F,F,F),le=new lE({color:A.color,transparent:!0,opacity:.7,emissive:A.color,emissiveIntensity:.2}),R=new fi(I,le);R.position.set(k,0,0),R.userData={layer:A.name,index:b};const D=new sE(new aE(I),new pf({color:16777215,opacity:.3,transparent:!0}));R.add(D),E.add(R),n.current.push(R),b<_.length-1&&x(E,k,L+(b+1)*dr.spacing),y(E,A.name,k,-F-.5)})},x=(E,_,g)=>{const L=new pf({color:5195493,transparent:!0,opacity:.15});for(let A=0;A<3;A++){const b=(A-1)*.3,k=[new j(_,b,0),new j(g,b,0)],F=new Zn().setFromPoints(k),I=new ag(F,L);E.add(I)}},y=(E,_,g,L)=>{const A=document.createElement("canvas"),b=A.getContext("2d");A.width=256,A.height=64,b.fillStyle="#ffffff",b.font="bold 24px Arial",b.textAlign="center",b.fillText(_,128,40);const k=new oE(A),F=new sg({map:k,transparent:!0}),I=new rE(F);I.position.set(g,L,0),I.scale.set(1.5,.4,1),E.add(I)},S=()=>{if(!a||r.current.length===0){a&&d&&w();return}r.current=r.current.filter(E=>{if(E.progress+=.02,E.progress>=1)return e.current.remove(E.mesh),!1;const _=E.startPos.x,g=E.endPos.x;E.mesh.position.x=_+(g-_)*E.progress;const L=.05+Math.sin(E.progress*Math.PI)*.03;return E.mesh.scale.set(L,L,L),!0})},w=()=>{const E=dr.layers,g=-((E.length-1)*dr.spacing)/2;for(let L=0;L<E.length-1;L++){const A=g+L*dr.spacing,b=g+(L+1)*dr.spacing,k=new Nl(.05,16,16),F=new Dl({color:54527,transparent:!0,opacity:.9}),I=new fi(k,F);I.position.set(A,0,0);const le=new Nl(.08,16,16),R=new Dl({color:54527,transparent:!0,opacity:.3}),D=new fi(le,R);I.add(D),e.current.add(I),r.current.push({mesh:I,startPos:new j(A,0,0),endPos:new j(b,0,0),progress:0})}};return ai.useEffect(()=>{a&&d&&(a.features&&n.current.length>0&&a.features.forEach((E,_)=>{if(_<n.current.length-1){const g=n.current[_+1],L=E.flat(2).reduce((b,k)=>b+Math.abs(k),0)/E.flat(2).length,A=Math.min(L*2,1);g.material.emissiveIntensity=.2+A*.5}}),setTimeout(()=>{f(!1),r.current=[]},3e3))},[a]),li.createElement("div",{style:{width:"100%",height:"700px",background:"linear-gradient(135deg, #0a0e27 0%, #1a1d2e 100%)",borderRadius:"12px",overflow:"hidden",position:"relative"}},li.createElement("div",{ref:o,style:{width:"100%",height:"100%"}}),a&&li.createElement("div",{style:{position:"absolute",top:"20px",right:"20px",background:"rgba(15, 23, 42, 0.85)",backdropFilter:"blur(10px)",padding:"20px",borderRadius:"12px",border:"1px solid rgba(79, 70, 229, 0.3)",color:"white",fontFamily:"monospace",minWidth:"200px"}},li.createElement("div",{style:{fontSize:"12px",opacity:.7,marginBottom:"8px"}},"PREDICTION"),li.createElement("div",{style:{fontSize:"48px",fontWeight:"bold",color:"#10b981",marginBottom:"12px"}},a.prediction),li.createElement("div",{style:{fontSize:"12px",opacity:.7,marginBottom:"4px"}},"CONFIDENCE"),li.createElement("div",{style:{fontSize:"20px",color:"#00d4ff"}},(a.confidence*100).toFixed(1),"%")),li.createElement("div",{style:{position:"absolute",bottom:"20px",left:"20px",color:"rgba(255, 255, 255, 0.5)",fontSize:"12px",fontFamily:"monospace"}},!a&&"● Waiting for prediction...",a&&d&&"● Processing...",a&&!d&&"● Ready"))};K_.createRoot(document.getElementById("root")).render(li.createElement(li.StrictMode,null,li.createElement(hE,null)));
