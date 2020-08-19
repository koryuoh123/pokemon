







const string =
`
大家好！

现在开始绘制一只皮卡丘！

觉得慢可以点击快进哦！！！

那么我要开始了！！


* {
  box-sizing: border-box;
}
/* *::before,
after {
  box-sizing: border-box;
} */
* {
  padding: 0;
  margin: 0;
}


.skin * {
    box-sizing: border-box;
  }
 .skin *::before,
  ::after {
    box-sizing: border-box;
  }
 .skin * {
    padding: 0;
    margin: 0;
  }
  .skin {
    background: rgb(255, 230, 0);
    width: 100vw;
    min-height: 500vh;
    position: relative;
  }
  .triangle {
    border: 18px solid black;
    border-color: black transparent transparent;
    border-bottom: none;
    height: 50px;
    width: 0px;
    position: relative;
    top: 138px;
    left: 50%;
    margin-left: -18px;
    border-radius: 50%;
    z-index: 2;}
    @keyframes wave {
      0%{
        transform:rotate(0deg);
      }
      33%{
        transform:rotate(3deg);
      }
      66%{
        transform:rotate(-3deg);
      }
      100%{
        transform:rotate(0deg);
      }
      
    }
  .triangle:hover{
    transform-origin:  center;
    animation:wave 180ms infinite linear;
  }
  .lip::after{
    content:'';
    display: block;
    height:30px;
    width:100px;
    
    background: rgb(255, 230, 0);
    position: absolute;
    top:-34px;
    
  }
  .eye {
    border: 2px solid black;
    height: 64px;
    width: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background: rgb(46, 46, 46);
    border-radius: 50%;
  }
  .eye{z-index: 4;}
  .eye::before {
    content: "";
    display: block;
    border: 3px solid black;
    width: 31px;
    height: 31px;
    background: white;
    border-radius: 50%;
    position: relative;
    left: 8px;
    top: -0.5px;
  }
  .eye.left {
    transform: translateX(-118px);
  }
  .eye.right {
    transform: translateX(118px);
  }
  .mouth {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -100px;
  }
  .mouth .up {
    position: relative;
    top: -20px;
  }
  .mouth .up .lip {
    border: 5px solid black;
    height: 30px;
    width: 100px;
    border-top-color: transparent;
    position: relative;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    background: rgb(255, 230, 0);
    z-index: 1;
  }
  .mouth .up .lip::before {
    content: "";
    display: block;
    width: 7px;
    height: 30px;
    background: rgb(255, 230, 0);
    position: absolute;
    bottom: 0;
  }
  .mouth .up .lip.left {
    border-radius: 0 0 0px 50px;
    border-right-color: transparent;
    transform: rotate(-15deg) translateX(-52.5px);
  }
  .mouth .up .lip.left::before {
    right: -6px;
  }
  .mouth .up .lip.right {
    border-radius: 0 0 50px 0px;
    border-left-color: transparent;
    transform: rotate(15deg) translateX(52.5px);
  }
  .mouth .up .lip.right::before {
    left: -6px;
  }
  .mouth .down{
    
    height:160px;
    position: absolute;
    top:0px;
    width:100%;
    overflow: hidden;
  }
  .mouth .down .yuan1{
    border:5px solid black;
    width: 150px;
    height:1000px;
    position: absolute;
    bottom:0;
    left:50%;
    margin-left: -75px;
    border-radius: 100px / 500px;
    background: rgb(155,0,10);
    overflow: hidden;
    
  }
  .mouth .down .yuan1 .yuan2{
    
    width:200px;
    height:290px;
    position: absolute;
    bottom :-170px;
    left:50%;
    margin-left: -100px;
    border-radius: 50%;
    background: rgb(255,72,95);
  }
  .face{
    position: absolute;
    left:50%;
    border:1px solid red;
    width:88px;
    height:88px;
    z-index: 10;
    margin-left: -44px;
    top:200px;
  }
  .face.left{
    border:3px solid black;
    transform: translateX(180px);
    border-radius: 50%;
    background: rgb(255,0,0);}
  .face.right{
      border:3px solid black;
      transform: translateX(-180px);
      border-radius: 50%;
      background: rgb(255,0,0);}
  .face >img{
    position: absolute;
    top:50%;
    left:50%;
  }
  
  .face.right >img{
    transform: rotateY(180deg);
    transform-origin: 0 0;
  }




  噔噔！完成啦！
`
export default string;
