"use strict";!function(){function t(t){a.setAttribute("width",window.innerWidth||document.body.clientWidth),a.setAttribute("height",window.innerHeight||document.body.clientWidth)}function e(t,e){return Math.random()*(e-t)+t}function n(t,e,n){if(n=n||100,t&&e){var i=t.x-e.x,o=t.y-e.y;if(n*n>i*i+o*o)return!0}return!1}function i(t,e){var n=0;return e.x===t.x?n=e.y>t.y?0:Math.PI:(n=Math.atan((e.y-t.y)/(e.x-t.x)),0>n&&(n+=Math.PI),e.y<t.y&&(n+=Math.PI)),n}function o(){if(r(),c.forEach(function(t){var e=t.s*Math.cos(t.r),i=t.s*Math.sin(t.r);t.x+=e,t.y+=i,s&&n(s,t,150)&&!n(s,t,100)&&(t.x+=.03*(s.x-t.x),t.y+=.03*(s.y-t.y)),(t.y<=0||t.y>=a.height)&&(t.r=2*Math.PI-t.r),(t.x<=0||t.x>=a.width)&&(t.r>Math.PI?t.r=3*Math.PI-t.r:t.r=Math.PI-t.r),h.fillStyle="#333333",h.fillRect(t.x-.5,t.y-.5,1,1)}),s){var t=c.filter(function(t){return n(s,t,120)}).sort(function(t,e){return i(s,t)>i(s,e)?1:-1});t.forEach(function(e,n){h.beginPath(),h.lineWidth=.5,h.moveTo(s.x,s.y),h.lineTo(e.x,e.y),h.strokeStyle="#495A80",h.stroke(),h.closePath();var i=n+1;i>=t.length&&(i=0),h.beginPath(),h.lineWidth=.3,h.moveTo(e.x,e.y),h.lineTo(t[i].x,t[i].y),h.strokeStyle="#495A80",h.stroke(),h.closePath()})}l(o)}function r(){h.clearRect(0,0,a.width,a.height)}var a=document.getElementById("canvas"),u=a.getBoundingClientRect(),h=a.getContext("2d");window.addEventListener("resize",t),t();for(var c=[],d=0;100>d;++d)c.push({x:e(0,u.width),y:e(0,u.height),r:e(0,2*Math.PI),s:1});var s=null,l=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.RequestAnimationFrame||function(t){setTimeout(t,1e3/60)}}();a.addEventListener("mousemove",function(t){s={x:t.clientX,y:t.clientY}}),a.addEventListener("touchmove",function(t){s={x:t.clientX,y:t.clientY}}),a.addEventListener("mouseout",function(t){s=null}),a.addEventListener("mouseleave",function(t){s=null}),o()}();