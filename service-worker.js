"use strict";var precacheConfig=[["/movie-loaded/index.html","99c84d01e4d7f37bf2d5c23ca3b74d70"],["/movie-loaded/static/css/main.03b7fd04.css","b78461f9514f0c837c16014324d3ec15"],["/movie-loaded/static/js/main.fc89221e.js","912b41fae5f52d39b6fcc17cbd532a19"],["/movie-loaded/static/media/celsius.a628c338.svg","a628c3389d04eaa8cc2206be25d345cf"],["/movie-loaded/static/media/clearDay.bf0396a8.svg","bf0396a8d8e3dfe326bac3902f094ae0"],["/movie-loaded/static/media/clearNight.10d8821e.svg","10d8821eb7098403b1d20fd42d741420"],["/movie-loaded/static/media/cloudy.253d2e16.svg","253d2e1604423889d6b007041d9ec498"],["/movie-loaded/static/media/fog.c188ef12.svg","c188ef122e7870bce282d08f25d02e2c"],["/movie-loaded/static/media/heartLoader.4d3085a9.svg","4d3085a9e21c392294c90b2eaf8fff10"],["/movie-loaded/static/media/partlyCloudyDay.f9cf7a09.svg","f9cf7a0935164ae970f4351143ac64b8"],["/movie-loaded/static/media/partlyCloudyNight.f164d00a.svg","f164d00a51621368b9e2788c1239376d"],["/movie-loaded/static/media/rain.608592ee.svg","608592ee9331c39b9813504e04643e6b"],["/movie-loaded/static/media/sleet.f18cc376.svg","f18cc376f2e460440cac57de8719ce3f"],["/movie-loaded/static/media/snow.ed449e2e.svg","ed449e2eb96a728535076feb48322548"],["/movie-loaded/static/media/wind.c557daa6.svg","c557daa6656da4d2e9c248f3957232ac"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/movie-loaded/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});