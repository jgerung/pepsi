/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();
         
         
         

      });
      //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nav1Comp}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.stop("Pre");
         
         sym.getSymbol("preComp").play(1);
         // Stop the timeline at a label or specific time. For example:
         // sym.stop(500); or sym.stop("myLabel");
         
         
         
         
         
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nav2Comp}", "click", function(sym, e) {
         sym.getSymbol("scene2Comp").play(1);
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.stop("TwoStop");
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nav3Comp}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.stop("ThreeStop");
         
         
         sym.getSymbol("scene3Comp").play(1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nav4Comp}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.stop("FourStop");
         
         
         sym.getSymbol("scene4Comp").play(1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nav5Comp}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.stop("FiveStop");
         
         sym.getSymbol("scene5Comp").play(1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nav6Comp}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.stop("SixStop");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'preArrowBttn'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_preBttn}", "mouseover", function(sym, e) {
         // Stop the timeline at a label or specific time. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop("preOn");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_preBttn}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Stop the timeline at a label or specific time. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop("preOff");

      });
      //Edge binding end

   })("preArrowBttn");
   //Edge symbol end:'preArrowBttn'

   //=========================================================
   
   //Edge symbol: 'preComp'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_preArrowBttn}", "click", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.getComposition().getStage().play("One");
         
         sym.getComposition().getStage().getSymbol("scene1Comp").play(1); // Gets the stage from the composition level, then gets the symbol and plays the timeline

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle}", "click", function(sym, e) {
         sym.getComposition().getStage().play("Six");
         
         sym.getComposition().getStage().getSymbol("scene6Comp").play(1); // Gets the stage from the composition level, then gets the symbol and plays the timeline

      });
      //Edge binding end

   })("preComp");
   //Edge symbol end:'preComp'

   //=========================================================
   
   //Edge symbol: 'preTruckChasisComp'
   (function(symbolName) {   
   
   })("preTruckChasisComp");
   //Edge symbol end:'preTruckChasisComp'

   //=========================================================
   
   //Edge symbol: 'scene1comp'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_navForwardComp3}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("sceneOneArrow");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_navForwardComp2}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("sceneText3");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2558, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_navForwardComp}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("scene2Text");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6524, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_scene1Begin}", "click", function(sym, e) {
         sym.play();
         
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15750, function(sym, e) {
         sym.getComposition().getStage().play("Two");
         
         sym.getComposition().getStage().getSymbol("scene2Comp").play(1); // Gets the stage from the composition level, then gets the symbol and plays the timeline

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_navBackCompCopy2}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("s11");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_navBackCompCopy3}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("s12");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_navBackCompCopy}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("s13");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_navForwardComp3Copy}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("scen1Run");
         
         

      });
      //Edge binding end

   })("scene1Comp");
   //Edge symbol end:'scene1Comp'

   //=========================================================
   
   //Edge symbol: 'navForwardComp'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      

   })("navForwardComp");
   //Edge symbol end:'navForwardComp'

   //=========================================================
   
   //Edge symbol: 'navBackComp'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      

   })("navBackComp");
   //Edge symbol end:'navBackComp'

   //=========================================================
   
   //Edge symbol: 'scene1ThunderComp'
   (function(symbolName) {   
   
   })("scene1ThunderComp");
   //Edge symbol end:'scene1ThunderComp'

   //=========================================================
   
   //Edge symbol: 'scene1Begin'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_mouserBegin}", "mouseover", function(sym, e) {
         // Stop the timeline at a label or specific time. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop("beginOver");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mouserBegin}", "mouseout", function(sym, e) {
         // Stop the timeline at a label or specific time. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop("beginUp");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("scene1Begin");
   //Edge symbol end:'scene1Begin'

   //=========================================================
   
   //Edge symbol: 'scene1TruckAroowGlowComp'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(1);

      });
      //Edge binding end

   })("scene1TruckAroowGlowComp");
   //Edge symbol end:'scene1TruckAroowGlowComp'

   //=========================================================
   
   //Edge symbol: 'preGlowArrowComp'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(1);

      });
      //Edge binding end

   })("preGlowArrowComp");
   //Edge symbol end:'preGlowArrowComp'

   //=========================================================
   
   //Edge symbol: 'nav1Comp'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_nav1Mouser}", "mouseover", function(sym, e) {
         // Stop the timeline at a label or specific time. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop("nav1Over");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nav1Mouser}", "mouseout", function(sym, e) {
         // Stop the timeline at a label or specific time. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop("nav1Up");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("nav1Comp");
   //Edge symbol end:'nav1Comp'

   //=========================================================
   
   //Edge symbol: 'nav2Comp'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_nav2Mouser}", "mouseover", function(sym, e) {
         // Stop the timeline at a label or specific time. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop("nav2Over");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nav2Mouser}", "mouseout", function(sym, e) {
         // Stop the timeline at a label or specific time. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop("nav2Up");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("nav2Comp");
   //Edge symbol end:'nav2Comp'

   //=========================================================
   
   //Edge symbol: 'navComp3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nav3Mouser}", "mouseover", function(sym, e) {
         // Stop the timeline at a label or specific time. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop("nav3Over");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nav3Mouser}", "mouseout", function(sym, e) {
         // Stop the timeline at a label or specific time. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop("nav3Up");
         

      });
      //Edge binding end

   })("nav3Comp");
   //Edge symbol end:'nav3Comp'

   //=========================================================
   
   //Edge symbol: 'nav4Comp'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nav4Mouser}", "mouseover", function(sym, e) {
         // Stop the timeline at a label or specific time. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop("nav4Over");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nav4Mouser}", "mouseout", function(sym, e) {
         // Stop the timeline at a label or specific time. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop("nav4Up");
         

      });
      //Edge binding end

   })("nav4Comp");
   //Edge symbol end:'nav4Comp'

   //=========================================================
   
   //Edge symbol: 'nav5Comp'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nav5Mouser}", "mouseover", function(sym, e) {
         // Stop the timeline at a label or specific time. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop("nav5Over");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nav5Mouser}", "mouseout", function(sym, e) {
         // Stop the timeline at a label or specific time. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop("nav5Up");
         

      });
      //Edge binding end

   })("nav5Comp");
   //Edge symbol end:'nav5Comp'

   //=========================================================
   
   //Edge symbol: 'nav6Comp'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_nav6Mouser}", "mouseover", function(sym, e) {
         // Stop the timeline at a label or specific time. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop("nav6Over");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nav6Mouser}", "mouseout", function(sym, e) {
         // Stop the timeline at a label or specific time. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop("nav6Up");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("nav6Comp");
   //Edge symbol end:'nav6Comp'

   //=========================================================
   
   //Edge symbol: 'Down-level'
   (function(symbolName) {   
   
   })("Down-level");
   //Edge symbol end:'Down-level'

   //=========================================================
   
   //Edge symbol: 'scene2Comp'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4913, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_navForwardComp}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("scene2Play2");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_navBackComp}", "click", function(sym, e) {
         sym.getComposition().getStage().stop("OneStop");
         
         sym.getComposition().getStage().getSymbol("scene1Comp").play("s13"); // Gets the stage from the composition level, then gets the symbol and plays the timeline
         
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_navBackComp2}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("s21");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_navForwardComp2}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("scene3Play");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_navBackComp3}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("s22");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_navForwardComp3}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("scene35Play");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_navBackComp4}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("s35");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_navForwardComp4}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("scene4Wait");
         
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22000, function(sym, e) {
         sym.getComposition().getStage().play("Three");
         
         sym.getComposition().getStage().getSymbol("scene3Comp").play(1); // Gets the stage from the composition level, then gets the symbol and plays the timeline

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18971, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_navBackComp4Copy2}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("s24");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_navForwardComp4Copy2}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("scene5Play");
         
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_navBackComp3Copy}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("s23");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_navForwardComp3Copy}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("scene4Play");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

   })("scene2Comp");
   //Edge symbol end:'scene2Comp'

   //=========================================================
   
   //Edge symbol: 'navComp'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_nav1Comp}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("One");
         
         sym.getSymbol("scene1Comp").play(1);
         

      });
         //Edge binding end

   })("navComp");
   //Edge symbol end:'navComp'

   //=========================================================
   
   //Edge symbol: 'cowOneComp'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(1);

      });
      //Edge binding end

   })("cowOneComp");
   //Edge symbol end:'cowOneComp'

   //=========================================================
   
   //Edge symbol: 'cowTwoComp'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(1);

      });
      //Edge binding end

   })("cowTwoComp");
   //Edge symbol end:'cowTwoComp'

   //=========================================================
   
   //Edge symbol: 'cowThreeComp'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(1);

      });
      //Edge binding end

   })("cowThreeComp");
   //Edge symbol end:'cowThreeComp'

   //=========================================================
   
   //Edge symbol: 'scene2BottlesLoop'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(1);

      });
      //Edge binding end

   })("scene2BottlesLoop");
   //Edge symbol end:'scene2BottlesLoop'

   //=========================================================
   
   //Edge symbol: 'scene3Comp'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_navBackComp}", "click", function(sym, e) {
         sym.getComposition().getStage().play("Two");
         
         sym.getComposition().getStage().getSymbol("scene2Comp").play("s24"); // Gets the stage from the composition level, then gets the symbol and plays the timeline
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_navForwardComp}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("scene3Part2");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_navBackCompCopy}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(1);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_navForwardCompCopy}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("scene3Part3");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21000, function(sym, e) {
         sym.getComposition().getStage().play("Four");
         
         sym.getComposition().getStage().getSymbol("scene4Comp").play(1); // Gets the stage from the composition level, then gets the symbol and plays the timeline

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_scene3TruckBttn}", "click", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_navBackCompCopy2}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("scene3Part2");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_navForwardCompCopy2}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("scene3Part4");
         
         

      });
      //Edge binding end

   })("scene3Comp");
   //Edge symbol end:'scene3Comp'

   //=========================================================
   
   //Edge symbol: 'sene2nextBttnComp'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mouserScene2Next}", "mouseover", function(sym, e) {
         // Stop the timeline at a label or specific time. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop("scene2NextOver");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mouserScene2Next}", "mouseout", function(sym, e) {
         // Stop the timeline at a label or specific time. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop("scene2NextUp");
         

      });
      //Edge binding end

   })("sene2nextBttnComp");
   //Edge symbol end:'sene2nextBttnComp'

   //=========================================================
   
   //Edge symbol: 'splashMain'
   (function(symbolName) {   
   
   })("splashMain");
   //Edge symbol end:'splashMain'

   //=========================================================
   
   //Edge symbol: 'scene3DebrisMain'
   (function(symbolName) {   
   
   })("scene3DebrisMain");
   //Edge symbol end:'scene3DebrisMain'

   //=========================================================
   
   //Edge symbol: 'scene3TruckBttn'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_mouserScene3}", "mouseover", function(sym, e) {
         // Stop the timeline at a label or specific time. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop("scene3TruckOver");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mouserScene3}", "mouseout", function(sym, e) {
         // Stop the timeline at a label or specific time. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop("scene3TruckUp");
         

      });
      //Edge binding end

   })("scene3TruckBttn");
   //Edge symbol end:'scene3TruckBttn'

   //=========================================================
   
   //Edge symbol: 'scene4Comp'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_navForwardComp}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("sc42");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_navBackComp}", "click", function(sym, e) {
         sym.getComposition().getStage().play("Three");
         
         sym.getComposition().getStage().getSymbol("scene3Comp").play("scene3Part2"); // Gets the stage from the composition level, then gets the symbol and plays the timeline
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_navBackComp42}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("sc41");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_navForwardComp42}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("sc43");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_navBackComp42Copy}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("sc42");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_navForwardComp42Copy}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("sc44");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_navBackComp44}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("sc43");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_navForwardComp44}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("sc4Play");
         
         
         
         
         

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9948, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 29873, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 34500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 37000, function(sym, e) {
         sym.getComposition().getStage().play("Five");
         
         sym.getComposition().getStage().getSymbol("scene5Comp").play(1); // Gets the stage from the composition level, then gets the symbol and plays the timeline

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25000, function(sym, e) {
         sym.getSymbol("scene4PumpGlowComp").play(1);

      });
      //Edge binding end

   })("scene4Comp");
   //Edge symbol end:'scene4Comp'

   //=========================================================
   
   //Edge symbol: 'pumpGlow'
   (function(symbolName) {   
   
      

   })("pumpGlow");
   //Edge symbol end:'pumpGlow'

   //=========================================================
   
   //Edge symbol: 'scene4Battery'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(1);

      });
      //Edge binding end

   })("scene4Battery");
   //Edge symbol end:'scene4Battery'

   //=========================================================
   
   //Edge symbol: 'scene5Comp'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_navBackComp}", "click", function(sym, e) {
         sym.getComposition().getStage().play("Four");
         
         sym.getComposition().getStage().getSymbol("scene4Comp").play("sc43"); // Gets the stage from the composition level, then gets the symbol and plays the timeline
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_navForwardComp}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("sc52");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_navForwardCompCopy}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("sc53");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_navBackCompCopy}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("sc51");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_navForwardCompCopy2}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("sc54");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_navBackCompCopy2}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("sc52");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23000, function(sym, e) {
         sym.getComposition().getStage().play("Six");
         
         sym.getComposition().getStage().getSymbol("scene6Comp").play(1); // Gets the stage from the composition level, then gets the symbol and plays the timeline

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8096, function(sym, e) {
         
         sym.getSymbol("scene5WalkComp").play(1);

      });
      //Edge binding end

      

      

   })("scene5Comp");
   //Edge symbol end:'scene5Comp'

   //=========================================================
   
   //Edge symbol: 'scene6Comp'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_navForwardComp}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("s62");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_navBackComp}", "click", function(sym, e) {
         sym.getComposition().getStage().play("FiveStop");
         
         sym.getComposition().getStage().getSymbol("scene5Comp").play("sc52"); // Gets the stage from the composition level, then gets the symbol and plays the timeline
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_navForwardCompCopy}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("s63");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_navBackCompCopy}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("s61");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_navForwardCompCopy2}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("s64");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_navBackCompCopy2}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("s62");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_navForwardCompCopy3}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("s65");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_navBackCompCopy3}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("s63");
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4925, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 26000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_navForwardCompCopy4}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("s65");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_navBackCompCopy4}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("s64");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nav1CompCopy}", "click", function(sym, e) {
         sym.getComposition().getStage().play("Pre");
         
         sym.getComposition().getStage().getSymbol("preComp").stop(1); // Gets the stage from the composition level, then gets the symbol and plays the timeline
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nav2CompCopy}", "click", function(sym, e) {
         sym.getComposition().getStage().play("TwoStop");
         
         sym.getComposition().getStage().getSymbol("scene2Comp").play(1); // Gets the stage from the composition level, then gets the symbol and plays the timeline
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nav3CompCopy}", "click", function(sym, e) {
         sym.getComposition().getStage().play("ThreeStop");
         
         sym.getComposition().getStage().getSymbol("scene3Comp").play(1); // Gets the stage from the composition level, then gets the symbol and plays the timeline
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nav4CompCopy}", "click", function(sym, e) {
         sym.getComposition().getStage().play("FourStop");
         
         sym.getComposition().getStage().getSymbol("scene4Comp").play(1); // Gets the stage from the composition level, then gets the symbol and plays the timeline
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nav5CompCopy}", "click", function(sym, e) {
         sym.getComposition().getStage().play("FiveStop");
         
         sym.getComposition().getStage().getSymbol("scene5Comp").play(1); // Gets the stage from the composition level, then gets the symbol and plays the timeline
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nav6CompCopy}", "click", function(sym, e) {
         sym.getComposition().getStage().play("SixStop");
         
         sym.getComposition().getStage().getSymbol("scene6Comp").play(1); // Gets the stage from the composition level, then gets the symbol and plays the timeline
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20000, function(sym, e) {
         sym.getSymbol("scene6fireWorksComp").play(1);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25000, function(sym, e) {
         sym.getSymbol("scene6BetterComp").play(1);

      });
      //Edge binding end

   })("scene6Comp");
   //Edge symbol end:'scene6Comp'

   //=========================================================
   
   //Edge symbol: 'seven7Comp'
   (function(symbolName) {   
   
   })("seven7Comp");
   //Edge symbol end:'seven7Comp'

   //=========================================================
   
   //Edge symbol: 'Preloader'
   (function(symbolName) {   
   
   })("Preloader");
   //Edge symbol end:'Preloader'

   //=========================================================
   
   //Edge symbol: 'scene5WalkComp'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5228, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(1);

      });
      //Edge binding end

   })("scene5WalkComp");
   //Edge symbol end:'scene5WalkComp'

   //=========================================================
   
   //Edge symbol: 'scene5WalkComp_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5228, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(1);

      });
      //Edge binding end

      })("scene5WalkComp2");
   //Edge symbol end:'scene5WalkComp2'

   //=========================================================
   
   //Edge symbol: 'scene5WalkComp2_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5228, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(1);

      });
      //Edge binding end

      })("scene5WalkComp3");
   //Edge symbol end:'scene5WalkComp3'

   //=========================================================
   
   //Edge symbol: 'scene1light'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(1);

      });
      //Edge binding end

   })("scene1light");
   //Edge symbol end:'scene1light'

   //=========================================================
   
   //Edge symbol: 'scene1CloudsLight'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("cloudLight");

      });
      //Edge binding end

   })("scene1CloudsLight");
   //Edge symbol end:'scene1CloudsLight'

   //=========================================================
   
   //Edge symbol: 'flagOrangeComp'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2756, function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("flagOrangeComp");
   //Edge symbol end:'flagOrangeComp'

   //=========================================================
   
   //Edge symbol: 'flagOneGreatPlace'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getSymbol("flagOrangeComp").play(1);

      });
      //Edge binding end

   })("flag1GreatPlace");
   //Edge symbol end:'flag1GreatPlace'

   //=========================================================
   
   //Edge symbol: 'flagOneGreatPlace_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getSymbol("flagBlueComp").play(1);

      });
      //Edge binding end

   })("flag2Uni");
   //Edge symbol end:'flag2Uni'

   //=========================================================
   
   //Edge symbol: 'flag2Uni_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getSymbol("flagOrangeComp").play(1);

      });
      //Edge binding end

   })("flag3Break");
   //Edge symbol end:'flag3Break'

   //=========================================================
   
   //Edge symbol: 'flagOrangeComp_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2887, function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

   })("flagBlueComp");
   //Edge symbol end:'flagBlueComp'

   //=========================================================
   
   //Edge symbol: 'flag2Uni_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getSymbol("flagBlueComp").play(1);

      });
      //Edge binding end

   })("flag4Record");
   //Edge symbol end:'flag4Record'

   //=========================================================
   
   //Edge symbol: 'flag3Break_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getSymbol("flagOrangeComp").play(1);

      });
      //Edge binding end

   })("flag5Sus");
   //Edge symbol end:'flag5Sus'

   //=========================================================
   
   //Edge symbol: 'flag1GreatPlace_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getSymbol("flagOrangeComp").play(1);
         sym.stop();
         

      });
         //Edge binding end

      })("flag6Sus2");
   //Edge symbol end:'flag6Sus2'

   //=========================================================
   
   //Edge symbol: 'scene6fireWorksComp'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3750, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(1);

      });
      //Edge binding end

   })("scene6fireWorksComp");
   //Edge symbol end:'scene6fireWorksComp'

   //=========================================================
   
   //Edge symbol: 'scene6StadiumPeopleComp'
   (function(symbolName) {   
   
   })("scene6StadiumPeopleComp");
   //Edge symbol end:'scene6StadiumPeopleComp'

   //=========================================================
   
   //Edge symbol: 'scene6BetterComp'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(1);

      });
      //Edge binding end

   })("scene6BetterComp");
   //Edge symbol end:'scene6BetterComp'

   //=========================================================
   
   //Edge symbol: 'navCircleGlowComp'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(1);

      });
      //Edge binding end

   })("navCircleGlowComp");
   //Edge symbol end:'navCircleGlowComp'

   //=========================================================
   
   //Edge symbol: 'scene4PumpGlowComp'
   (function(symbolName) {   
   
   })("scene4PumpGlowComp");
   //Edge symbol end:'scene4PumpGlowComp'

   //=========================================================
   
   //Edge symbol: 'flag2Uni_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getSymbol("flagOrangeComp").play(1);

      });
         //Edge binding end

      })("flag6Leading");
   //Edge symbol end:'flag6Leading'

})(jQuery, AdobeEdge, "EDGE-17710639");