const string =
    `.skin .eyes .eyeLeft,.eyeRight{
    width: 200px;
    height: 200px;
    border: 5px solid black;
    border-radius: 50%;
    position: absolute;
    top:50%;
    margin-top: -130px;
    z-index: 10;
    background-color: white;
}
.skin .eyes .eyeLeft{
    left:50%;
    margin-left: -190px;
}
.skin .eyes .eyeRight{
    right: 50%;
    margin-right: -190px;

}
.skin .eyes .eyesBallLeft,.eyesBallRight{
    width: 60px;
    height: 60px;
    border: 1px black solid;
    position: absolute;
    top:50%;
    margin-top: -30px;
    border-radius: 50%;
    background-color:#0093DC;
}
.skin .eyes .black{
    width: 30px;
    height: 30px;
    border: 1px black solid;
    position: absolute;
    left: 50%;
    top:50%;
    margin-top: -15px;
    margin-left: -15px;
    background-color: black;
    border-radius: 50%;
}
.skin .nose{
    width: 50px;
    height: 130px;
    border: 5px black solid;
    left:50%;
    top:50%;
    margin-left: -25px;
    margin-top: -65px;
    border-bottom: none;
}
.skin .nose .box{
    background: #FFF400;
}
.eyes .brow1,.brow2,.brow3{
    width: 10px;
    background-color: black;
}
.eyes .brow1{
    transform: rotate(-5deg);
    height: 35px;
   
}
.eyes .brow2{ 
    transform: rotate(5deg);
    height: 45px;
}
.eyes .brow3{ 
    transform: rotate(5deg);
    height: 40px;
}

.skin .eyes .eyeBrowLeft{
    margin-left: -220px;
}
.skin .eyes .eyeBrowRight{
    margin-left: -40px;
    
}
.skin .cheek .circleL{
    width: 75px;
    height: 48px;
    border-radius:50%;
    position: absolute;
    top:50%;
    margin-top: -22px;
    margin-left: -3px;
    background-color: #FFF400;
}
.skin .cheek .cheekLeft,.cheekRight{
    width: 80px;
    height: 50px;
    border: 5px solid#D9241C;
    position: absolute;
    top:50%;
    margin-top: -25px;
    border-radius:50%;
}
.skin .cheek .cheekLeft{
    
    left: 50%;
    margin-left: -220px;
    transform: rotate(-20deg);
}
.skin .cheek .cheekRight{ 
    right: 50%;
    margin-right: -220px;
    transform: rotate(20deg);
}
.circleL .point1,.point2,.point3{
    width: 6px;
    height: 6px;
    border-radius:50%;
    background-color: #D9241C;
    position: absolute;
    top:50%;
    left: 50%;

}
.skin .mouth .circleLeft,.circleRight{
    width: 50px;
    height: 50px;
    border-radius:50%;
    border: 1px solid transparent;
    border-top: 5px solid black;
    z-index: 15;
  
}
.skin .mouth .circleCenter{
    width: 500px;
    height: 500px;
    border:4px solid  black;
    position: absolute;
    left: 50%;
    top:50%;
    margin-top: -480px;
    margin-left: -250px;
    border-radius: 50%;
    z-index: 20;
    
}
.skin .mouth .teethLeft,.teethRight{
    width: 30px;
    height: 40px;
    border: 4px solid black;
    position: absolute;
    top:50%;
    margin-top:18px;
    z-index: 10;
    background-color: white;
    
}
.skin .circle .circleLeft2,.circleRight2{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    position: absolute;
    border: 1px solid transparent;
    border-bottom: 8px solid #D9241C;
}
.skin .hole1,.hole2,.hole3,.hole4,.hole5,.hole6,.hole7{
    position: absolute;
    left: 50%;
    top:50%;
    border-radius: 50%;
    background-color: #D1C900;

}
`
export default string;





