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
function maskView(contentView){ // 弹出框的 背景
  var maskV = document.createElement("div");
  maskV.style.left="0";
  maskV.style.top="0";
  maskV.style.position="absolute";
  maskV.style.width =  document.body.offsetWidth + "px";
  maskV.style.height = screen.height + "px";
  maskV.onclick=removeFromSuperView;

  document.body.appendChild(maskV);
  maskV.appendChild(contentView);  
  contentView.style.left=(parseFloat(maskV.style.width)-parseFloat(contentView.style.width))/2 + "px";
  contentView.style.top= (parseFloat(maskV.style.height)-parseFloat(contentView.style.height))/2 + "px";
   
  function removeFromSuperView(){
   document.body.removeChild(maskV);
  };
  return maskV;
}
function gestureLock(callBack) { // 手势界面 
    var  bWidth = document.body.offsetWidth;
    bWidth=300;

    var backV=document.createElement("div");//创建一个div对象（背景层） //动态创建元素，这里创建的是 div 
    backV.style.position="absolute"; 
    backV.style.top="0"; 
    backV.style.left="0"; 
    backV.style.background="white"; 
    backV.style.opacity=1;
    backV.style.width=bWidth+ "px"; 
    backV.style.height=bWidth + "px"; 
    backV.style.borderRadius="px";
    backV.style.boxShadow="2px 2px 10px 2px gray";  
    backV.addEventListener("touchStart",touchs,false);
    function touchs(){
     alert(event);        
    }    


        var countOfSide = 4;
        var pS =  bWidth/(countOfSide *3 + 1);
        var pW = pS * 2;
        var pH = pW;
                 
    for (var index = 0; index < countOfSide*countOfSide; index++) {
        var pX = pS+(index%countOfSide * (pW + pS));
        var pY = pS+(parseInt(index/countOfSide) * (pH+pS)); 
        
         var pointBV =   document.createElement("div");
         pointBV.style.position="absolute"; 
         pointBV.style.top=pY + "px"; 
         pointBV.style.left=pX + "px"; 
         pointBV.style.background="gray"; 
         pointBV.style.opacity=1;
         pointBV.style.width=pW + "px"; 
         pointBV.style.height=pH + "px"; 
         pointBV.style.borderRadius=pW/2 + "px";
         pointBV.innerHTML=index;
         pointBV.style.textAlign="center";
         pointBV.style.lineHeight=pointBV.style.height;
         pointBV.style.font="px";
         pointBV.setAttribute("align","center");
         pointBV.style.tagName = index;
         backV.appendChild(pointBV);//在body内添加该div对象 
         pointBV.onclick=pointBVClick;

       
    };
    function pointBVClick(){
        callBack(event.target.style.tagName);
        event.stopPropagation();

    };


    //  function removeFromSuperView(){
    //      document.body.removeChild(backV);
    //  }

       return backV;
}
// var backView = document.getElementById('backView');
function animation() {
    alert("hello");
}

// animation(backView);