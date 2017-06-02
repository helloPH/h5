var pos =[];
var currentPoint = {"x":0,"y":0};

function  mouse(){
    var supportTouch;
    if("onmousedown" in document ) {
        supportTouch=true;
    }
    else {
        supportTouch=false;
    }
     alert(supportTouch);
     return;

     var targ = event.target;
  
     var x = event.offsetX;
     var y = event.offsetY;

    if (event.type=='mousedown') {
        targ.onmousemove = mouse;
        targ.onmouseup= mouse;
    }
    if (event.type=='mouseup') {
        targ.onmousemove = null;
        targ.onmouseup= null;

       if (pos.length!=0) {
           currentPoint=pos[pos.length-1];
       }
      
    }
    if (event.type=='mousemove') {
               for (var index = 0; index < 4; index++) {
               var tag = "item"+index;
               var item = document.getElementById(tag);
                    if (containLocation(item,x,y)) {
                          addToPos({"tag":item.id,"x":(parseFloat(item.offsetLeft)+parseFloat(item.offsetWidth/2)),"y":(parseFloat(item.offsetTop)+parseFloat(item.offsetHeight/2))});
                    }
              }
        currentPoint = {"x":x,"y":y};
       
     }
     drawGestureWithPoints(pos);
     
}
function addToPos(pointDic){// 添加 触点     
    let willTag = pointDic["tag"];
    var isContain = false;
  for (var index = 0; index < pos.length; index++) {
      let element = pos[index];
      let tag = element["tag"];
      if (tag == willTag ) {
          isContain = true;
      }
  }
  if(!isContain){//根据id 判断 如果存在则不添加
      pos.push(pointDic);
  }

}
function containLocation(tar,x,y){
//    var minX = parseFloat(tar.style.left);
//    var minY = parseFloat(tar.style.top);
   var minX = tar.offsetLeft;
   var minY = tar.offsetTop;

   var maxX = minX + tar.offsetWidth;
   var maxY = minY + tar.offsetHeight;
//    alert(minX + "+" + maxX + " + " + x );
//    alert(minY + "+" + maxY + " + " + y );
   if (minX < x &&  x < maxX && minY < y && y < maxY) {
       return true;
   }
   return false;
}
function drawGestureWithPoints(points){
  if (points.length==0) {
      return;
  }

  var c=document.getElementById("myCanvas");
  var ctx=c.getContext("2d");
  ctx.clearRect(0,0,300,150);
  for (var i in points) {
      if (points.hasOwnProperty(i)) {
          if (i < points.length-1) {
               ctx.beginPath(); 
               ctx.strokeStyle = 'rgba(255,0,0,0.7)'; 
               ctx.lineWidth=10;
               ctx.lineCap="round";
               ctx.moveTo(points[parseInt(i)]["x"],points[parseInt(i)]["y"]);
               ctx.lineTo(points[parseInt(i)+1]["x"],points[parseInt(i)+1]["y"]);
               ctx.stroke();
        }
     }
  }
               ctx.beginPath(); 
               ctx.strokeStyle = 'rgba(255,0,0,0.7)'; 
               ctx.lineWidth=10;
               ctx.lineCap="round";
               ctx.moveTo(points[points.length-1]["x"],points[points.length-1]["y"]);
               ctx.lineTo(currentPoint["x"],currentPoint["y"]);
               ctx.stroke();
}