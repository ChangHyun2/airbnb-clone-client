(self.webpackChunkairbnb_client=self.webpackChunkairbnb_client||[]).push([[794],{Xgb8:(n,t,e)=>{"use strict";e.d(t,{zt:()=>a,I0:()=>d,v9:()=>g});var r=e("q1tI"),u=(e("17x9"),r.createContext(null));var i=function(n){n()},s=function(){return i},c={notify:function(){}};var o=function(){function n(n,t){this.store=n,this.parentSub=t,this.unsubscribe=null,this.listeners=c,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var t=n.prototype;return t.addNestedSub=function(n){return this.trySubscribe(),this.listeners.subscribe(n)},t.notifyNestedSubs=function(){this.listeners.notify()},t.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},t.isSubscribed=function(){return Boolean(this.unsubscribe)},t.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=function(){var n=s(),t=null,e=null;return{clear:function(){t=null,e=null},notify:function(){n((function(){for(var n=t;n;)n.callback(),n=n.next}))},get:function(){for(var n=[],e=t;e;)n.push(e),e=e.next;return n},subscribe:function(n){var r=!0,u=e={callback:n,next:null,prev:e};return u.prev?u.prev.next=u:t=u,function(){r&&null!==t&&(r=!1,u.next?u.next.prev=u.prev:e=u.prev,u.prev?u.prev.next=u.next:t=u.next)}}}}())},t.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=c)},n}();const a=function(n){var t=n.store,e=n.context,i=n.children,s=(0,r.useMemo)((function(){var n=new o(t);return n.onStateChange=n.notifyNestedSubs,{store:t,subscription:n}}),[t]),c=(0,r.useMemo)((function(){return t.getState()}),[t]);(0,r.useEffect)((function(){var n=s.subscription;return n.trySubscribe(),c!==t.getState()&&n.notifyNestedSubs(),function(){n.tryUnsubscribe(),n.onStateChange=null}}),[s,c]);var a=e||u;return r.createElement(a.Provider,{value:s},i)};e("2mql"),e("TOwV");var f="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?r.useLayoutEffect:r.useEffect;e("ANjH");e("wx14");function b(){return(0,r.useContext)(u)}function h(n){void 0===n&&(n=u);var t=n===u?b:function(){return(0,r.useContext)(n)};return function(){return t().store}}var l=h();function v(n){void 0===n&&(n=u);var t=n===u?l:h(n);return function(){return t().dispatch}}var d=v(),p=function(n,t){return n===t};function S(n){void 0===n&&(n=u);var t=n===u?b:function(){return(0,r.useContext)(n)};return function(n,e){void 0===e&&(e=p);var u=t(),i=function(n,t,e,u){var i,s=(0,r.useReducer)((function(n){return n+1}),0)[1],c=(0,r.useMemo)((function(){return new o(e,u)}),[e,u]),a=(0,r.useRef)(),b=(0,r.useRef)(),h=(0,r.useRef)(),l=(0,r.useRef)(),v=e.getState();try{i=n!==b.current||v!==h.current||a.current?n(v):l.current}catch(n){throw a.current&&(n.message+="\nThe error may be correlated with this previous error:\n"+a.current.stack+"\n\n"),n}return f((function(){b.current=n,h.current=v,l.current=i,a.current=void 0})),f((function(){function n(){try{var n=b.current(e.getState());if(t(n,l.current))return;l.current=n}catch(n){a.current=n}s()}return c.onStateChange=n,c.trySubscribe(),n(),function(){return c.tryUnsubscribe()}}),[e,c]),i}(n,e,u.store,u.subscription);return(0,r.useDebugValue)(i),i}}var y,g=S(),x=e("i8i4");y=x.unstable_batchedUpdates,i=y}}]);