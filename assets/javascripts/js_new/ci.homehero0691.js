function generateRandomNumber(a,b){return Math.floor(Math.random()*(b-a+1))+a}$(document).ready(function(){for(var a=$("#main-hero .blocks-animate-body"),b=(a.width(),a.height(),1600),c=900,d=100,e=$(window).width()<1024?25:60,f=20,g=0;g<e;g++){for(var h=generateRandomNumber(d,c)/100,i=f;Math.abs(i-f)<35;)i=generateRandomNumber(0,90);f=i;var j=-b*g/e/100,k=generateRandomNumber(b-500,b)/100,l=generateRandomNumber(10,100)/100,m=document.createElement("div");m.className="block",m.style.width=h+"%",m.style.top=i+"%",m.style.left="-10%",m.style.animationDelay=j+"s",m.style.animationDuration=k+"s",a[0].insertBefore(m,a[0].children[0]);var n=document.createElement("div");n.style.opacity=l,m.appendChild(n)}});