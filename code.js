var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["848314f8-d7dc-4755-a4a1-3782173096b1","26b80e63-bc0f-408d-b288-be2282aebd4e","dfc53be7-786c-4305-b8eb-81fa595e9903","47fade86-5bd1-4789-87af-896fb1433a7b","043deebf-64b8-4795-be8d-db5055414f2f","c26b6449-0b6c-4483-8486-107c0091c26e","3221caad-ae37-4eec-92a8-56bae4769e66","c4e310e0-8174-4127-a46e-0cbcc94b488b","99c9e06c-4505-495e-b784-775f1fb8fa77","2901fae5-d790-4677-9e21-c649e636e2f4","31413b5e-7871-4f73-81e4-a68dc94c87c3","050c106a-054c-4c6f-ab19-0e45299c0135","b3e7fab0-12eb-477f-9558-927eb610222b","8d7d640b-ffe6-4547-8158-699d85331148","82d6c4b1-e875-44f3-a811-4b60c236f066","24685dd7-8c2d-416e-b78d-524fcb38ee9c","3df53f0a-33bf-4dc8-8a08-403f75b562b6","8ff9d73f-a2f3-46c3-93a4-1212f1ec290c","1ce1ce84-9973-41ec-adb3-18c64c5a7b72"],"propsByKey":{"848314f8-d7dc-4755-a4a1-3782173096b1":{"name":"hero","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":".jhZo53h1wL1DUBG.fgEvLumQrztZAlD","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/848314f8-d7dc-4755-a4a1-3782173096b1.png"},"26b80e63-bc0f-408d-b288-be2282aebd4e":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":35,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"KxpMJkJNVigp_oygMGbEdYUCHMFJ4ptv","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":50},"rootRelativePath":"assets/26b80e63-bc0f-408d-b288-be2282aebd4e.png"},"dfc53be7-786c-4305-b8eb-81fa595e9903":{"name":"enemy","sourceUrl":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png","frameSize":{"x":320,"y":254},"frameCount":1,"looping":true,"frameDelay":2,"version":"xasculQGiYxBV79ltD_0E79ZRIexdPdZ","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":254},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png"},"47fade86-5bd1-4789-87af-896fb1433a7b":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png","frameSize":{"x":355,"y":241},"frameCount":1,"looping":true,"frameDelay":2,"version":"dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":355,"y":241},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png"},"043deebf-64b8-4795-be8d-db5055414f2f":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png","frameSize":{"x":388,"y":388},"frameCount":1,"looping":true,"frameDelay":2,"version":"YSis4_lex43su6FLaL__bhoag4eHAl8D","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":388},"rootRelativePath":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png"},"c26b6449-0b6c-4483-8486-107c0091c26e":{"name":"hero1","sourceUrl":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png","frameSize":{"x":264,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"loycQXdICpzI4PfXITdIndG9GcVBmRdK","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png"},"3221caad-ae37-4eec-92a8-56bae4769e66":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png"},"c4e310e0-8174-4127-a46e-0cbcc94b488b":{"name":"dream","sourceUrl":null,"frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":12,"version":"sKkCKhoL875UK0mo0sJ05wrqbyUx0NfU","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/c4e310e0-8174-4127-a46e-0cbcc94b488b.png"},"99c9e06c-4505-495e-b784-775f1fb8fa77":{"name":"enemy_2","sourceUrl":"assets/api/v1/animation-library/gamelab/dtwdmhu18R0XcS9DpMKYtymNRtdl4ChR/category_germs/gameplaywacky_03.png","frameSize":{"x":390,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"dtwdmhu18R0XcS9DpMKYtymNRtdl4ChR","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dtwdmhu18R0XcS9DpMKYtymNRtdl4ChR/category_germs/gameplaywacky_03.png"},"2901fae5-d790-4677-9e21-c649e636e2f4":{"name":"enemy_1","sourceUrl":"assets/api/v1/animation-library/gamelab/7_fQFvQ9YjMoziYN80X0zhQJiJXHDA.t/category_germs/virus03_04.png","frameSize":{"x":390,"y":390},"frameCount":1,"looping":true,"frameDelay":5,"version":"7_fQFvQ9YjMoziYN80X0zhQJiJXHDA.t","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/7_fQFvQ9YjMoziYN80X0zhQJiJXHDA.t/category_germs/virus03_04.png"},"31413b5e-7871-4f73-81e4-a68dc94c87c3":{"name":"enemy_3","sourceUrl":"assets/api/v1/animation-library/gamelab/KoZz0QksHdpzqfX71bq5vgJR__O0e4sP/category_germs/virus03_03.png","frameSize":{"x":388,"y":390},"frameCount":1,"looping":true,"frameDelay":4,"version":"KoZz0QksHdpzqfX71bq5vgJR__O0e4sP","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KoZz0QksHdpzqfX71bq5vgJR__O0e4sP/category_germs/virus03_03.png"},"050c106a-054c-4c6f-ab19-0e45299c0135":{"name":"musk_1","sourceUrl":null,"frameSize":{"x":600,"y":600},"frameCount":1,"looping":true,"frameDelay":12,"version":"_WxT5bjUwdBAvST.zA1HZlrDPAgj8isc","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":600},"rootRelativePath":"assets/050c106a-054c-4c6f-ab19-0e45299c0135.png"},"b3e7fab0-12eb-477f-9558-927eb610222b":{"name":"background_landscape09_1","sourceUrl":"assets/api/v1/animation-library/gamelab/T167cO7veEolJu4MdK3thTgLhnqD_rJB/category_backgrounds/background_landscape09.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"T167cO7veEolJu4MdK3thTgLhnqD_rJB","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T167cO7veEolJu4MdK3thTgLhnqD_rJB/category_backgrounds/background_landscape09.png"},"8d7d640b-ffe6-4547-8158-699d85331148":{"name":"pupilportrait_03_1","sourceUrl":"assets/api/v1/animation-library/gamelab/FW0CI4iuqpnTrc1d6kSj3miix6MgU7I6/category_faces/pupilportrait_03.png","frameSize":{"x":282,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"FW0CI4iuqpnTrc1d6kSj3miix6MgU7I6","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":282,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/FW0CI4iuqpnTrc1d6kSj3miix6MgU7I6/category_faces/pupilportrait_03.png"},"82d6c4b1-e875-44f3-a811-4b60c236f066":{"name":"kidportrait_07_1","sourceUrl":"assets/api/v1/animation-library/gamelab/DK8.stYcZlziAImCg36Fa7yHu1S4LUhW/category_faces/kidportrait_07.png","frameSize":{"x":264,"y":370},"frameCount":1,"looping":true,"frameDelay":2,"version":"DK8.stYcZlziAImCg36Fa7yHu1S4LUhW","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":370},"rootRelativePath":"assets/api/v1/animation-library/gamelab/DK8.stYcZlziAImCg36Fa7yHu1S4LUhW/category_faces/kidportrait_07.png"},"24685dd7-8c2d-416e-b78d-524fcb38ee9c":{"name":"enemy_4","sourceUrl":"assets/api/v1/animation-library/gamelab/NYXAKV8lMtBFQ4CvUgBDjrGq5xJ8.AMN/category_germs/gameplaywacky_13.png","frameSize":{"x":400,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"NYXAKV8lMtBFQ4CvUgBDjrGq5xJ8.AMN","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/NYXAKV8lMtBFQ4CvUgBDjrGq5xJ8.AMN/category_germs/gameplaywacky_13.png"},"3df53f0a-33bf-4dc8-8a08-403f75b562b6":{"name":"enemy_5","sourceUrl":"assets/api/v1/animation-library/gamelab/ZdtNFtOiydwR9zKYWovoGTaaRFuvBF6p/category_germs/gameplaywacky_05.png","frameSize":{"x":397,"y":372},"frameCount":1,"looping":true,"frameDelay":2,"version":"ZdtNFtOiydwR9zKYWovoGTaaRFuvBF6p","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":397,"y":372},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ZdtNFtOiydwR9zKYWovoGTaaRFuvBF6p/category_germs/gameplaywacky_05.png"},"8ff9d73f-a2f3-46c3-93a4-1212f1ec290c":{"name":"background_landscape01_1","sourceUrl":"assets/api/v1/animation-library/gamelab/O75xN5U40Qc2TA25Y0Qb5wt5W_jPbtoa/category_backgrounds/background_landscape01.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"O75xN5U40Qc2TA25Y0Qb5wt5W_jPbtoa","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/O75xN5U40Qc2TA25Y0Qb5wt5W_jPbtoa/category_backgrounds/background_landscape01.png"},"1ce1ce84-9973-41ec-adb3-18c64c5a7b72":{"name":"background_landscape11_1","sourceUrl":"assets/api/v1/animation-library/gamelab/48WvIjYXVxyuCdt3Jah08koeLbeNGtRC/category_backgrounds/background_landscape11.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"48WvIjYXVxyuCdt3Jah08koeLbeNGtRC","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/48WvIjYXVxyuCdt3Jah08koeLbeNGtRC/category_backgrounds/background_landscape11.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var b = createSprite(200,200);
 b.setAnimation("background_landscape11_1")
var hero = createSprite(200,345,200,345)
hero.shapeColor="red"

var enemy1 = createSprite(200,250,10,10)
enemy1.shapeColor="red"

var enemy2 = createSprite(200,150,10,10)
enemy2.shapeColor="red"

var enemy3 = createSprite(200,70,10,10)
enemy3.shapeColor="red"

var enemy4 = createSprite(30,30,10,10)
enemy4.shapeColor="red"

var enemy5= createSprite(350,30,10,10)
enemy5.shapeColor="red"


var net = createSprite(200,20,200,20)
net.setAnimation("musk_1")
net.scale=0.1

var goal =0;
var death = 0;

hero.setAnimation("kidportrait_07_1");
hero.scale=.2;
enemy1.setAnimation("enemy_1");
enemy1.scale=.1;
enemy2.setAnimation("enemy_2");
enemy2.scale=.1;
enemy3.setAnimation("enemy_3");
enemy3.scale=.1;
enemy4.setAnimation("enemy_4");
enemy4.scale=.1;
enemy5.setAnimation("enemy_5")
enemy5.scale=.1;

enemy1.setVelocity(-10,0);
enemy2.setVelocity(10,0);
enemy3.setVelocity(-10,0);
enemy4.setVelocity(0,10);
enemy5.setVelocity(0,-10);


function draw() {
  
//background(b);

createEdgeSprites()




enemy1.bounceOff(edges)
enemy2.bounceOff(edges)
enemy3.bounceOff(edges)
enemy4.bounceOff(edges)
enemy5.bounceOff(edges)
hero.bounceOff(edges)

if(keyDown(UP_ARROW)){
  hero.y=hero.y-5
}

if(keyDown(DOWN_ARROW)){
  hero.y=hero.y+5
}

if(keyDown(LEFT_ARROW)){
  hero.x=hero.x-5
}

if(keyDown(RIGHT_ARROW)){
  hero.x=hero.x+5
}

if(hero.isTouching(enemy1)|| hero.isTouching(enemy2)|| hero.isTouching(enemy3)||hero.isTouching(enemy4)||hero.isTouching(enemy5)){
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3")
  hero.x=5
  hero.y=350
  death = death+1
}
if(hero.isTouching(net)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3")
  hero.x=5
  hero.y=345
  goal=goal+1
}
textSize(20)
  fill("blue")
  text("Goals:"+goal,320,350);
  

textSize(20)
  fill("blue")
  text("death:"+death,20,350);
  

  textSize(25)
  fill("maroon")
  text("You Win",180,200);
  
      
   if(hero.isTouching(net))
      {
      goal =  + 1;
        //Reset the striker by adding center value of x and y 
        hero.x=200;
        hero.y=200;
        hero.velocityX=0;
        hero.velocityY=0;
      }
      
  

  // Score
  
     //add the condition to check  either of the player’s score reaches 5
     if(hero.isTouching(net))
      {
        fill("maroon");
        textSize(18);
        //add the text for GameOver
        text(" score ",170,160);
      }
      
      if(hero.isTouching(net))
      {
       goal =  + 1;
        //Reset the hero by adding center value of x and y 
        hero.x=200;
       hero.y=200;
        hero.velocityX=0;
        hero.velocityY=0;
      }
 
      function serve() {
  striker.velocityX = 10;
  striker.velocityY = 5;
 
}

function heroMovement()
{
  if(keyDown("left")){
    hero.x = hero.x-10;
    
  }
  
  if(keyDown("right")){
   hero.x = hero.x+10;
    
  }
  
  if(keyDown("up")){
   if(hero.y>25)
   {
    hero.y = hero.y- 10;
   }
  }
  
  if(keyDown("down")){
    if(hero.y<120)
   {
    hero.y = hero.y+10;
   }
  }
}


drawSprites()
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
