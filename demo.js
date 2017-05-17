function loadScript( url ){ 
var script = document.createElement( "script" ); 
script.type = "type/javascipt"; 
script.src = url; 
document.getElementsByTagName( "head" )[0].appendChild( script ); 
}; 
function loadCss( url ){ 
var link = document.createElement( "link" ); 
link.type = "text/css"; 
link.rel = "stylesheet"; 
link.href = url; 
document.getElementsByTagName( "head" )[0].appendChild( link ); 
}; 
function gestureLock() { 
    var backV=document.createElement("div");//创建一个div对象（背景层） //动态创建元素，这里创建的是 div 
    backV.style.position="absolute"; 
    backV.style.top="0"; 
    backV.style.left="0"; 
    backV.style.background="white"; 
    backV.style.opacity=1;
    backV.style.width=screen.width + "px"; 
    backV.style.height=screen.height + "px"; 
    backV.onclick=removeFromSuperView;
    document.body.appendChild(backV);//在body内添加该div对象 



         var  sWidth = parseFloat(screen.width);
         sWidth = document.body.offsetWidth;
        var countOfSide = 3;
        var pointS =  sWidth/(countOfSide *3 + 1);
        var pW = pointS * 2;
        var pH = pW;
                 
    for (var index = 0; index < countOfSide*countOfSide; index++) {
        var pX = pointS+(index%countOfSide * (pW + pointS));
        var pY = pointS+(parseInt(index/countOfSide) * (pH+pointS)); 
        
         var pointBV =   document.createElement("div");
         pointBV.style.position="absolute"; 
         pointBV.style.top=pY + "px"; 
         pointBV.style.left=pX + "px"; 
         pointBV.style.background="red"; 
         pointBV.style.opacity=1;
         pointBV.style.width=pW + "px"; 
         pointBV.style.height=pH + "px"; 
         pointBV.style.borderRadius=pW/2 + "px";
         pointBV.innerHTML=index;
         pointBV.style.textAlign="center";
         pointBV.style.lineHeight=pointBV.style.height;
         pointBV.style.font="px";
         pointBV.setAttribute("align","center");
         pointBV.tagName=index;
         backV.appendChild(pointBV);//在body内添加该div对象 
         alert(pointBV.tagName);
        //  pointBV.tagName=index;
         pointBV.onclick=pointBVClick;
       
        //  pointBV.setAttribute("onClick","pointBVClick(pointVC);");
    };
    function pointBVClick(){
             alert(event.target.innerHTML);
             return;
         };
    
     function removeFromSuperView(){
         document.body.removeChild(backV);
     }
}
// var backView = document.getElementById('backView');
function animation() {
    alert("hello");
}
// animation(backView);