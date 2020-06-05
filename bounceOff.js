function bounceOff(movingrect,fixedrect){
    if(movingrect.x-fixedrect.x<=movingrect.width/2+fixedrect.width/2 && 
      fixedrect.x-movingrect.x<=fixedrect.width/2+movingrect.width/2){
        movingrect.velocityX*=-1;
        fixedrect.velocityX*=-1;
      }
      if(movingrect.y-fixedrect.y<=movingrect.height/2+fixedrect.height/2 &&
        fixedrect.y-movingrect.y<=fixedrect.height/2+movingrect.height/2){
          movingrect.velocityY*=-1;
          fixedrect.velocityY*=-1;
      }
  }