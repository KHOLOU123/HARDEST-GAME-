var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["7cccf8d6-2e8e-4ead-92f7-2c8c230dc0c4","3e54f37f-301a-4d2c-a0ed-799b37f7ac5f","a8e6ccf8-ba68-4547-a32f-4e3be357570f","d8db5df6-f1a2-4bfd-97b0-4e4b9621c99d","89e89b27-1e34-42a0-81c2-37e92d6ad275","8a7103e1-bd3a-4109-a4ed-c53e46032a1b","0019ef4f-5d89-4cbe-93d7-753e37aaab64","8cb290a1-cb46-445a-977d-2349827d0e80","15b98732-e3c2-4e65-9815-922f23a7eeab","6b71f891-163f-4bb6-a06e-d162d765b4de","8328d5de-7782-451d-92d6-69041525e12b","978285a5-f8a4-4f90-b6d7-7634854fcc1b","d8200377-0efa-41cf-adfd-5162721159d7"],"propsByKey":{"7cccf8d6-2e8e-4ead-92f7-2c8c230dc0c4":{"name":"ground_grass_broken_1","sourceUrl":"assets/api/v1/animation-library/gamelab/tlmfqLFvxwFb489oXAwsvg5tN_lFfiVS/category_video_games/ground_grass_broken.png","frameSize":{"x":380,"y":94},"frameCount":1,"looping":true,"frameDelay":2,"version":"tlmfqLFvxwFb489oXAwsvg5tN_lFfiVS","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":94},"rootRelativePath":"assets/api/v1/animation-library/gamelab/tlmfqLFvxwFb489oXAwsvg5tN_lFfiVS/category_video_games/ground_grass_broken.png"},"3e54f37f-301a-4d2c-a0ed-799b37f7ac5f":{"name":"kid","sourceUrl":"assets/api/v1/animation-library/gamelab/voVqpJoQlBVuYTKJFKtdlp9Dj8oRcUoh/category_people/red_sweater_hand_in_pocket.png","frameSize":{"x":125,"y":397},"frameCount":1,"looping":true,"frameDelay":2,"version":"voVqpJoQlBVuYTKJFKtdlp9Dj8oRcUoh","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":125,"y":397},"rootRelativePath":"assets/api/v1/animation-library/gamelab/voVqpJoQlBVuYTKJFKtdlp9Dj8oRcUoh/category_people/red_sweater_hand_in_pocket.png"},"a8e6ccf8-ba68-4547-a32f-4e3be357570f":{"name":"ruby","sourceUrl":"assets/api/v1/animation-library/gamelab/KcuGz0dhj9Vacw_lOQdRN7TPQqJzamn_/category_video_games/gameplay_redcrystal.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"KcuGz0dhj9Vacw_lOQdRN7TPQqJzamn_","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KcuGz0dhj9Vacw_lOQdRN7TPQqJzamn_/category_video_games/gameplay_redcrystal.png"},"d8db5df6-f1a2-4bfd-97b0-4e4b9621c99d":{"name":"diamond","sourceUrl":"assets/api/v1/animation-library/gamelab/RIDiuf2PVUAzqFMR4oK5dkuIKcWIK8TS/category_icons/diamond.png","frameSize":{"x":391,"y":358},"frameCount":1,"looping":true,"frameDelay":2,"version":"RIDiuf2PVUAzqFMR4oK5dkuIKcWIK8TS","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":391,"y":358},"rootRelativePath":"assets/api/v1/animation-library/gamelab/RIDiuf2PVUAzqFMR4oK5dkuIKcWIK8TS/category_icons/diamond.png"},"89e89b27-1e34-42a0-81c2-37e92d6ad275":{"name":"gem","sourceUrl":"assets/api/v1/animation-library/gamelab/FJT6QpZscrzSwGwpDPnJZED8ABADci6Q/category_video_games/gameplay_greendiamond2.png","frameSize":{"x":281,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"FJT6QpZscrzSwGwpDPnJZED8ABADci6Q","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":281,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/FJT6QpZscrzSwGwpDPnJZED8ABADci6Q/category_video_games/gameplay_greendiamond2.png"},"8a7103e1-bd3a-4109-a4ed-c53e46032a1b":{"name":"spider","sourceUrl":"assets/api/v1/animation-library/gamelab/AZXQMTWpWuyKpERcb.on0Ntp8xk2t6U_/category_animals/brownspider.png","frameSize":{"x":263,"y":397},"frameCount":1,"looping":true,"frameDelay":2,"version":"AZXQMTWpWuyKpERcb.on0Ntp8xk2t6U_","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":263,"y":397},"rootRelativePath":"assets/api/v1/animation-library/gamelab/AZXQMTWpWuyKpERcb.on0Ntp8xk2t6U_/category_animals/brownspider.png"},"0019ef4f-5d89-4cbe-93d7-753e37aaab64":{"name":"bat","sourceUrl":"assets/api/v1/animation-library/gamelab/ZDqxOIsPUxo1v0QEjzxvWOiy1DevnaVu/category_animals/bat.png","frameSize":{"x":400,"y":217},"frameCount":1,"looping":true,"frameDelay":2,"version":"ZDqxOIsPUxo1v0QEjzxvWOiy1DevnaVu","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":217},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ZDqxOIsPUxo1v0QEjzxvWOiy1DevnaVu/category_animals/bat.png"},"8cb290a1-cb46-445a-977d-2349827d0e80":{"name":"moth","sourceUrl":"assets/api/v1/animation-library/gamelab/oJeqCeUZ4Kk__gsweHM3hAlt84FtcQW9/category_animals/moth01.png","frameSize":{"x":392,"y":252},"frameCount":1,"looping":true,"frameDelay":2,"version":"oJeqCeUZ4Kk__gsweHM3hAlt84FtcQW9","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":392,"y":252},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oJeqCeUZ4Kk__gsweHM3hAlt84FtcQW9/category_animals/moth01.png"},"15b98732-e3c2-4e65-9815-922f23a7eeab":{"name":"monster","sourceUrl":"assets/api/v1/animation-library/gamelab/na7i8b5CoI4YTMNG8sXR_36Es0CfzvFd/category_fantasy/monster_13.png","frameSize":{"x":248,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"na7i8b5CoI4YTMNG8sXR_36Es0CfzvFd","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":248,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/na7i8b5CoI4YTMNG8sXR_36Es0CfzvFd/category_fantasy/monster_13.png"},"6b71f891-163f-4bb6-a06e-d162d765b4de":{"name":"monster2","sourceUrl":"assets/api/v1/animation-library/gamelab/ULRVq8NfJKy2tqC6.nZ2oC7V_kSR.sAR/category_fantasy/monster_08.png","frameSize":{"x":208,"y":380},"frameCount":1,"looping":true,"frameDelay":2,"version":"ULRVq8NfJKy2tqC6.nZ2oC7V_kSR.sAR","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":208,"y":380},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ULRVq8NfJKy2tqC6.nZ2oC7V_kSR.sAR/category_fantasy/monster_08.png"},"8328d5de-7782-451d-92d6-69041525e12b":{"name":"monster3","sourceUrl":"assets/api/v1/animation-library/gamelab/2de9sEWYWWzKx26s6d8L64mN3b5hcuSw/category_fantasy/monster_18.png","frameSize":{"x":292,"y":385},"frameCount":1,"looping":true,"frameDelay":2,"version":"2de9sEWYWWzKx26s6d8L64mN3b5hcuSw","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":292,"y":385},"rootRelativePath":"assets/api/v1/animation-library/gamelab/2de9sEWYWWzKx26s6d8L64mN3b5hcuSw/category_fantasy/monster_18.png"},"978285a5-f8a4-4f90-b6d7-7634854fcc1b":{"name":"monster4","sourceUrl":"assets/api/v1/animation-library/gamelab/_cxfD7LPQtM9..A7tXJT7nv_hWkLkcG_/category_fantasy/monster_17.png","frameSize":{"x":278,"y":376},"frameCount":1,"looping":true,"frameDelay":2,"version":"_cxfD7LPQtM9..A7tXJT7nv_hWkLkcG_","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":278,"y":376},"rootRelativePath":"assets/api/v1/animation-library/gamelab/_cxfD7LPQtM9..A7tXJT7nv_hWkLkcG_/category_fantasy/monster_17.png"},"d8200377-0efa-41cf-adfd-5162721159d7":{"name":"monster5","sourceUrl":"assets/api/v1/animation-library/gamelab/5e.55ijwCKCN3A7XzGgPl.3JPFw_78i./category_fantasy/monster_03.png","frameSize":{"x":243,"y":344},"frameCount":1,"looping":true,"frameDelay":2,"version":"5e.55ijwCKCN3A7XzGgPl.3JPFw_78i.","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":243,"y":344},"rootRelativePath":"assets/api/v1/animation-library/gamelab/5e.55ijwCKCN3A7XzGgPl.3JPFw_78i./category_fantasy/monster_03.png"}}};
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

var block1 = createSprite(30,100,10,10);
block1.setAnimation("ground_grass_broken_1");
block1.scale = 0.15;

var block2 = createSprite(88,100,10,10);
block2.setAnimation("ground_grass_broken_1");
block2.scale = 0.15;

var block3 = createSprite(146,100,10,10);
block3.setAnimation("ground_grass_broken_1");
block3.scale = 0.15;

var block4 = createSprite(204,100,10,10);
block4.setAnimation("ground_grass_broken_1");
block4.scale = 0.15;

var block5 = createSprite(262,100,10,10);
block5.setAnimation("ground_grass_broken_1");
block5.scale = 0.15;

var block6 = createSprite(315,100,10,10);
block6.setAnimation("ground_grass_broken_1");
block6.scale = 0.15;

var block7 = createSprite(90,200,10,10);
block7.setAnimation("ground_grass_broken_1");
block7.scale = 0.15;

var block8 = createSprite(148,200,10,10);
block8.setAnimation("ground_grass_broken_1");
block8.scale = 0.15;

var block9 = createSprite(206,200,10,10);
block9.setAnimation("ground_grass_broken_1");
block9.scale = 0.15;

var block10 = createSprite(264,200,10,10);
block10.setAnimation("ground_grass_broken_1");
block10.scale = 0.15;

var block11 = createSprite(322,200,10,10);
block11.setAnimation("ground_grass_broken_1");
block11.scale = 0.15;

var block12 = createSprite(380,200,10,10);
block12.setAnimation("ground_grass_broken_1");
block12.scale = 0.15;

var block13 = createSprite(30,300,10,10);
block13.setAnimation("ground_grass_broken_1");
block13.scale = 0.15;

var block14 = createSprite(88,300,10,10);
block14.setAnimation("ground_grass_broken_1");
block14.scale = 0.15;

var block15 = createSprite(146,300,10,10);
block15.setAnimation("ground_grass_broken_1");
block15.scale = 0.15;

var block16 = createSprite(204,300,10,10);
block16.setAnimation("ground_grass_broken_1");
block16.scale = 0.15;

var block17 = createSprite(262,300,10,10);
block17.setAnimation("ground_grass_broken_1");
block17.scale = 0.15;

var block18 = createSprite(320,300,10,10);
block18.setAnimation("ground_grass_broken_1");
block18.scale = 0.15;

var block19 = createSprite(201,170,0,0);
block19.setAnimation("ground_grass_broken_1");
block19.scale = 0.15;

var kid = createSprite(20,75,0,0);
kid.setAnimation("kid");
kid.scale = 0.10;

var ruby = createSprite(20,330,0,0);
ruby.setAnimation("ruby");
ruby.scale = 0.1;

var diamond = createSprite(40,370,0,0);
diamond.setAnimation("diamond");
diamond.scale = 0.2;

var gem = createSprite(60,330,0,0);
gem.setAnimation("gem");
gem.scale = 0.1;

var crab = createSprite(120,45,0,0);
crab.setAnimation("spider");
crab.scale = 0.1;
crab.velocityY = 1;

var crab2 = createSprite(220,45,0,0);
crab2.setAnimation("bat");
crab2.scale = 0.14;
crab2.velocityY = -1;

var crab3 = createSprite(320,45,0,0);
crab3.setAnimation("moth");
crab3.scale = 0.14;
crab3.velocityY = 1;

var croco = createSprite(50,170,0,0);
croco.setAnimation("monster2");
croco.scale = 0.1;
croco.velocityX = 2;

var croco2 = createSprite(350,170,0,0);
croco2.setAnimation("monster");
croco2.scale = 0.1;
croco2.velocityX= 2;

var bat = createSprite(95,249,0,0);
bat.setAnimation("monster3");
bat.scale = 0.1;
bat.velocityY = 1;

var bat2 = createSprite(203,249,0,0);
bat2.setAnimation("monster4");
bat2.scale = 0.1;
bat2.velocityY = -1;

var bat3 = createSprite(203+107,249,0,0);
bat3.setAnimation("monster5");
bat3.scale = 0.1;
bat3.velocityY = 1;

var lives = 5;


function draw() {
  
  background("TEAL");
  
  createEdgeSprites();
 kid.bounceOff(edges);
 kid.bounceOff(block1);
  kid.bounceOff(block2);
 kid.bounceOff(block3);
 kid.bounceOff(block4);
  kid.bounceOff(block5);
   kid.bounceOff(block6);
    kid.bounceOff(block7);
  kid.bounceOff(block8);
   kid.bounceOff(block9);
    kid.bounceOff(block10);
     kid.bounceOff(block11);
      kid.bounceOff(block12);
  kid.bounceOff(block13);
  kid.bounceOff(block14);
  kid.bounceOff(block15);
  kid.bounceOff(block16);
   kid.bounceOff(block17);
   kid.bounceOff(block18);
   kid.bounceOff(block19);
   crab.bounceOff(edges);
 crab.bounceOff(block1);
  crab.bounceOff(block2);
 crab.bounceOff(block3);
 crab.bounceOff(block4);
  crab.bounceOff(block5);
   crab.bounceOff(block6);
   crab2.bounceOff(block1);
  crab2.bounceOff(block2);
 crab2.bounceOff(block3);
 crab2.bounceOff(block4);
  crab2.bounceOff(block5);
   crab2.bounceOff(block6);
   crab3.bounceOff(block1);
  crab3.bounceOff(block2);
 crab3.bounceOff(block3);
 crab3.bounceOff(block4);
  crab3.bounceOff(block5);
   crab3.bounceOff(block6);
   crab2.bounceOff(edges);
   crab3.bounceOff(edges);
   croco.bounceOff(edges);
   croco2.bounceOff(edges);
   croco.bounceOff(block19);
   croco2.bounceOff(block19);
   bat.bounceOff(block7);
  bat.bounceOff(block8);
   bat.bounceOff(block9);
    bat.bounceOff(block10);
    bat.bounceOff(block11);
    bat.bounceOff(block12);
  bat.bounceOff(block13);
  bat.bounceOff(block14);
  bat.bounceOff(block15);
  bat.bounceOff(block16);
  bat.bounceOff(block17);
  bat.bounceOff(block18);
    bat2.bounceOff(block7);
  bat2.bounceOff(block8);
   bat2.bounceOff(block9);
    bat2.bounceOff(block10);
    bat2.bounceOff(block11);
    bat2.bounceOff(block12);
  bat2.bounceOff(block13);
  bat2.bounceOff(block14);
  bat2.bounceOff(block15);
  bat2.bounceOff(block16);
  bat2.bounceOff(block17);
  bat2.bounceOff(block18);
  bat3.bounceOff(block7);
  bat3.bounceOff(block8);
   bat3.bounceOff(block9);
    bat3.bounceOff(block10);
    bat3.bounceOff(block11);
    bat3.bounceOff(block12);
  bat3.bounceOff(block13);
  bat3.bounceOff(block14);
  bat3.bounceOff(block15);
  bat3.bounceOff(block16);
  bat3.bounceOff(block17);
  bat3.bounceOff(block18);
  
   
   
   kid.velocityX = "0";
   kid.velocityY = "0";
   
  
      if (keyDown("LEFT_ARROW")) {
      kid.velocityX = -5;
      kid.velocityY = 0;
      kid.setAnimation("kid");
    }
    
     if (keyDown("RIGHT_ARROW")) {
      kid.velocityX = 5;
      kid.velocityY = 0;
      kid.setAnimation("kid");
    }
    
    if (keyDown("DOWN_ARROW")) {
      kid.velocityX = 0;
      kid.velocityY = 5;
      
      kid.setAnimation("kid");
    }
  
    if (keyDown("UP_ARROW")) {
      kid.velocityX = 0;
      kid.velocityY = -5;
      
      kid.setAnimation("kid");
    }
    
    if (kid.isTouching(gem)|| kid.isTouching(diamond)|| kid.isTouching(ruby)) {
      
     kid.setVelocity(0,0);
     fill("yellow");
     textSize(14);
     text("U WON!! PRESS SPACE BAR IF U WANT TO WIN AGAIN",10,130);
      
    }
    
 if (kid.isTouching(crab)|| kid.isTouching(crab2)||kid.isTouching(crab3)||kid.isTouching(croco)|| kid.isTouching(croco2)|| kid.isTouching(bat)||kid.isTouching(bat2)||kid.isTouching(bat3)) {
   playSpeech("OOPS!!", "female", "English");
   serve();
  lives = lives-1;
 }
    
fill("pink");
textSize(20);
text(lives,80,22.5);

fill("yellow");
textSize(20);
text("Lives : ",10,22);
       
   
if(lives === 0){
text("GAME OVER PRESS SPACE TO RESTART",5,136);
     serve();
}


if (keyDown("space")) {
  serve();
  reset();
}


  
  
  drawSprites();
  
}

function serve (){
  kid.x = 20;
  kid.y = 75;
}

function reset (){
  lives = 5;
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
