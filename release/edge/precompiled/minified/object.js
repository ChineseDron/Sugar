var Ab="isObject,isNaN".split(","),Bb="keys,values,each,merge,clone,equal,watch,tap,has".split(",");
function Cb(a,b,c,d){var e=/^(.+?)(\[.*\])$/,g,f,i;if(d!==m&&(f=b.match(e))){i=f[1];b=f[2].replace(/^\[|\]$/g,"").split("][");b.forEach(function(h){g=!h||h.match(/^\d+$/);if(!i&&da(a))i=a.length;a[i]||(a[i]=g?[]:{});a=a[i];i=h});if(!i&&g)i=a.length.toString();Cb(a,i,c)}else a[b]=c.match(/^[\d.]+$/)?parseFloat(c):c==="true"?k:c==="false"?m:c}D(p,m,k,{watch:function(a,b,c){if(ca){var d=a[b];p.defineProperty(a,b,{enumerable:k,configurable:k,get:function(){return d},set:function(e){d=c.call(a,b,d,e)}})}}});
D(p,m,function(a,b){return z(b)},{keys:function(a,b){var c=p.keys(a);c.forEach(function(d){b.call(a,d,a[d])});return c}});
D(p,m,m,{isObject:function(a){return la(a)},isNaN:function(a){return A(a)&&a.valueOf()!==a.valueOf()},equal:function(a,b){return S(a)===S(b)},extended:function(a){return new M(a)},merge:function(a,b,c,d){var e,g;if(a&&typeof b!="string")for(e in b)if(ma(b,e)&&a){g=b[e];if(J(a[e])){if(d===m)continue;if(z(d))g=d.call(b,e,a[e],b[e])}if(c===k&&g&&ka(g))if(fa(g))g=new s(g.getTime());else if(C(g))g=new r(g.source,ra(g));else{a[e]||(a[e]=q.isArray(g)?[]:{});p.merge(a[e],b[e],c,d);continue}a[e]=g}return a},
values:function(a,b){var c=[];G(a,function(d,e){c.push(e);b&&b.call(a,e)});return c},clone:function(a,b){if(!ka(a))return a;if(q.isArray(a))return a.concat();var c=a instanceof M?new M:{};return p.merge(c,a,b)},fromQueryString:function(a,b){var c=p.extended();a=a&&a.toString?a.toString():"";decodeURIComponent(a.replace(/^.*?\?/,"")).split("&").forEach(function(d){d=d.split("=");d.length===2&&Cb(c,d[0],d[1],b)});return c},tap:function(a,b){var c=b;z(b)||(c=function(){b&&a[b]()});c.call(a,a);return a},
has:function(a,b){return ma(a,b)}});I(p,m,m,x,function(a,b){var c="is"+b;Ab.push(c);a[c]=function(d){return ga(d,b)}});(function(){D(p,m,function(){return arguments.length===0},{extend:function(){ta(Ab.concat(Bb),p)}})})();ta(Bb,M);
