(self.webpackChunkairbnb_client=self.webpackChunkairbnb_client||[]).push([[639],{aFt7:t=>{"use strict";function n(t){this._maxSize=t,this.clear()}n.prototype.clear=function(){this._size=0,this._values=Object.create(null)},n.prototype.get=function(t){return this._values[t]},n.prototype.set=function(t,n){return this._size>=this._maxSize&&this.clear(),t in this._values||this._size++,this._values[t]=n};var e=/[^.^\]^[]+|(?=\[\]|\.\.)/g,r=/^\d+$/,i=/^\d/,u=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,c=/^\s*(['"]?)(.*?)(\1)\s*$/,o=new n(512),s=new n(512),a=new n(512);function f(t){return o.get(t)||o.set(t,h(t).map((function(t){return t.replace(c,"$2")})))}function h(t){return t.match(e)}function l(t){return"string"==typeof t&&t&&-1!==["'",'"'].indexOf(t.charAt(0))}function p(t){return!l(t)&&(function(t){return t.match(i)&&!t.match(r)}(t)||function(t){return u.test(t)}(t))}t.exports={Cache:n,split:h,normalizePath:f,setter:function(t){var n=f(t);return s.get(t)||s.set(t,(function(t,e){for(var r=0,i=n.length,u=t;r<i-1;){var c=n[r];if("__proto__"===c||"constructor"===c||"prototype"===c)return t;u=u[n[r++]]}u[n[r]]=e}))},getter:function(t,n){var e=f(t);return a.get(t)||a.set(t,(function(t){for(var r=0,i=e.length;r<i;){if(null==t&&n)return;t=t[e[r++]]}return t}))},join:function(t){return t.reduce((function(t,n){return t+(l(n)||r.test(n)?"["+n+"]":(t?".":"")+n)}),"")},forEach:function(t,n,e){!function(t,n,e){var r,i,u,c,o=t.length;for(i=0;i<o;i++)(r=t[i])&&(p(r)&&(r='"'+r+'"'),u=!(c=l(r))&&/^\d+$/.test(r),n.call(e,r,c,u,i,t))}(Array.isArray(t)?t:h(t),n,e)}}}}]);