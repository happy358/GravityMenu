/*!
 * gravityMenu.js v1.0.0
 * Copyright(c)2020 happy358
 * Site:https://labs.manohara.info/gravitymenu/
 * Released under the MIT license.
 * see https://github.com/happy358/GravityMenu/blob/master/LICENSE
 */
const garavityMenu=function(param){let e,t,o,n,r,i,a=Matter.Engine,l=Matter.Render,s=Matter.Runner,c=Matter.Common,u=Matter.Events,d=Matter.MouseConstraint,g=Matter.Mouse,f=Matter.Query,m=Matter.World,p=Matter.Body;Bodies=Matter.Bodies;const w=param.canvas||"canvas",h=document.querySelector(w),y=param.menu_list||"",v=param.menu_imageSize||"500",x=y.length,M=param.social||!1,_=param.social_size||40,S=param.social_list||"",E=S.length,b=param.social_imageSize||"500",z=_/b;let B,I,T,A,C;try{if(!y)throw new Error("garavityMenu:menu_list parametar is empty!");if(M&&!S)throw new Error("garavityMenu:social_list parametar is empty!")}catch(e){console.log(e.message)}const L=K(100,55,1,30);let W,k,R,U,$,H,V,j,q=[],D=[];function O(){if(drag_flag=!1,U=!1,C=Object.create(L),$=param.size||50,H=.5*$*1.5,V=param.gap||0,I=window.innerWidth,T=window.innerHeight,$=(A=T>I)?Math.round(I/(1.2*x)):$,(W=$*x+V*(x-1))>I){let e=I/W;W=($*=e)*x+(V*=e)*(x-1)}k=(I-W)/2+.5*$,H=A?.5*$*1.5:H,B=$/v,t=a.create(),world=t.world,t.world.gravity.y=.8,e=l.create({canvas:h,engine:t,options:{width:I,height:T,background:"transparent",wireframes:!1,showInternalEdges:!0,showShadows:!1}}),l.run(e),o=s.create(),s.run(o,t);const n={friction:0,isStatic:!0};m.add(world,[Bodies.rectangle(I/2,-250,2*I,500,n),Bodies.rectangle(I/2,T+250,2*I,500,n),Bodies.rectangle(I+250,T/2,500,2*T,n),Bodies.rectangle(-250,T/2,500,2*T,n)]);let w;q=[];for(let e=0;e<x;e++){w={frictionAir:0,friction:0,restitution:.88,frictionStatic:.5,isStatic:!0,label:"menu_"+e,render:{lineWidth:0,sprite:{texture:y[e][2],xScale:B,yScale:B},cursor:"pointer"}};let t=P(e,"M");q[e]=Bodies.circle(t.x,t.y,.5*$,w),setTimeout(Q,c.random(2500,3e3),q[e])}m.add(world,q),setTimeout(Z,7e3),j=setTimeout(F,18e3),r=g.create(e.canvas),i=d.create(t,{mouse:r,constraint:{stiffness:.2,render:{visible:!1}}}),m.add(world,i),e.mouse=r,u.on(i,"startdrag",function(e){U=!0,drag_flag=!0}),u.on(i,"mousedown",function(e){U=!1,drag_flag=!0}),u.on(i,"mousemove",function(e){U=!0;let t=!1,o=f.point(q,e.mouse.position);o[0]&&void 0!=o[0]&&(t=!0),M&&(o=f.point(D,e.mouse.position))[0]&&void 0!=o[0]&&(t=!0),t||drag_flag?(h.style.cursor="pointer",h.style.zIndex=9):(h.style.cursor="auto",h.style.zIndex=0)}),u.on(i,"mouseup",function(e){h.style.cursor="auto",h.style.zIndex=0,U=!1,drag_flag=!1,i.body=null}),u.on(i,"enddrag",function(e){if(h.style.cursor="auto",h.style.zIndex=0,drag_flag=!1,!U){let t=e.body.label;if("menu_"==t.slice(0,5)){let e=t.slice(5);M&&"social"==y[e][0]?(clearTimeout(j),D&&D.length?(m.remove(world,D),D=[]):F()):y[e][1]&&location.replace(y[e][1])}else if(M&&"social_"==t.slice(0,7)){let e=t.slice(7),o=S[e][0];S[e][1]&&confirm("Share on "+o.charAt(0).toUpperCase()+o.slice(1).toLowerCase()+"?")&&(location.href=S[e][1])}}U=!1}),u.on(t,"beforeUpdate",function(e){for(let e=0;e<q.length;e++)p.setAngularVelocity(q[e],0);if(M)for(let e=0;e<D.length;e++)p.setAngularVelocity(D[e],0)})}function P(e,t){let o=[];return o.x=o.y=0,"M"==t&&(o.x=$*e+V*e+k),o.y=H,o}function Q(e){p.setStatic(e,!1)}function Z(){t.world.gravity.y=-1.3}function F(){if(M){for(let e=0;e<E;e++)cirlce_option={frictionAir:0,friction:.1,restitution:.78,frictionStatic:3,isStatic:!1,label:"social_"+e,render:{lineWidth:0,sprite:{texture:S[e][2],xScale:z,yScale:z}}},D[e]=Bodies.circle(I/2,T,.5*_,cirlce_option);m.add(world,D)}}function G(){color1=J(),color2=J();let e='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1000" height="1000" viewBox="0 0 100 100"><g><circle style="fill:'+color1+';" cx="50" cy="50" r="50" /><path style="fill:'+color2+';" d="m50 0, L61 35, 98 35, 68 57, 79 91, 50 70, 21 91, 32 57, 2 35, 39 35 Z"/></g></svg>';return"data:image/svg+xml;charset=utf-8;base64,"+window.btoa(unescape(encodeURIComponent(e)))}function J(){let e=~~(Math.random()*C.length);return R=C[e],C.splice(e,1),R}function K(e,t,o,n){let r=[],i=Math.trunc(360/n);for(let o=0;o<n;o++){let n=o*i;r.push(N(n,e,t))}return r}function N(e,t,o){let n,r,i;if(e/=360,o/=100,0===(t/=100))n=r=i=o;else{const a=(e,t,o)=>(o<0&&(o+=1),o>1&&(o-=1),o<1/6?e+6*(t-e)*o:o<.5?t:o<2/3?e+(t-e)*(2/3-o)*6:e),l=o<.5?o*(1+t):o+t-o*t,s=2*o-l;n=a(s,l,e+1/3),r=a(s,l,e),i=a(s,l,e-1/3)}const a=e=>{const t=Math.round(255*e).toString(16);return 1===t.length?"0"+t:t};return`#${a(n)}${a(r)}${a(i)}`}function X(e){h.style.cursor="auto",h.style.zIndex=0,drag_flag=!1;let t=document.createEvent("MouseEvents");t.initEvent("mouseup",!1,!0),h.dispatchEvent(t)}O(),h.addEventListener("mouseleave",X,!1),h.addEventListener("touchleave",X,!1);let Y=null,ee=I,te=T;window.addEventListener("resize",function(n){n.preventDefault(),n.stopPropagation(),clearTimeout(j),clearTimeout(Y),Y=setTimeout(function(){let n=window.innerWidth,r=window.innerHeight;ee===n&&te===r||(m.clear(world),a.clear(t),l.stop(e),s.stop(o),e.canvas=null,e.context=null,e.textures={},O(),ee=n,te=r)},300)},!1),l.lookAt(e,{min:{x:0,y:0},max:{x:I,y:T}});};
