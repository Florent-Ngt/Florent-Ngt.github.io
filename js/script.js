/*****************************************************************************/
/* script.js - Portfolio - Florent NIGET */
/*****************************************************************************/

window.onload = function() {
	
    $(document).ready(function() {   
        var sm1 = document.getElementById('sm1');
        var sm2 = document.getElementById('sm2');
        var sm3 = document.getElementById('sm3');
        $("#sm1 i").css("color", "#99C794");
        chargement(1);
		/************** Animation du menu et des contenus associés *******************/
		$( "#lig" ).click(function() {
			if(nav.style.display!="none")
		   		$( "#sousMenu:visible" ).slideUp("slow");	
		   	else
	  			$( "#sousMenu:hidden" ).slideDown("slow");			
		});
		/*****************************************************************************/
	       
        function chargement(num) {
            
            $(".cont").hide();
            if (num == 1) 
                $("#presentation").fadeIn("slow");
            else if (num == 2) 
                $("#projets").fadeIn("slow");
            else if (num == 3) 
                $("#contact").fadeIn("slow");
        }

        /************** Animation du menu et des contenus associés *******************/
        var bouton = document.getElementById('lig');
        var nav = document.getElementById('sousMenu');
        var icon1 = document.getElementById('icon1');
        var icon2 = document.getElementById('icon2');
        bouton.onclick = function(e){
            if(icon1.style.display  !="none"){
                icon1.style.display="none";
                icon2.style.display="inline";
            }else{
                icon2.style.display="none";
                icon1.style.display="inline";
            }
        };
        /*****************************************************************************/

        /************************* Animation des trapezes ****************************/
        var T1 = document.getElementsByClassName("T1")[0];
        var T2 = document.getElementsByClassName("T2")[0];
        var T3 = document.getElementsByClassName("T3")[0];
        var codesource = document.getElementById("appelRapportC");
        var doze = document.getElementById("appelRapportD");
        
        T1.onclick = function(e){Tr1()};
        T2.onclick = function(e){Tr2()};
        T3.onclick = function(e){Tr3()};

        sm1.onclick = function(e){Tr1()};
        sm2.onclick = function(e){Tr2()};
        sm3.onclick = function(e){Tr3()};
        
        codesource.onclick = function(e){
            $("#projets").fadeOut("slow", function(e){$("#codesource").fadeIn("slow")} );
            $(".runContain").fadeOut("slow", function(e){$(".closeContain").fadeIn("slow")});
        }

        doze.onclick = function(e){
            $("#projets").fadeOut("slow", function(e){$("#doze").fadeIn("slow")} );
            $(".runContain").fadeOut("slow", function(e){$(".closeContain").fadeIn("slow")});
        }

        function Tr1() {
            if ($("#chargement").is(":hidden")) {
                T2.className = "trapeze T2";
                T3.className = "trapeze T3";
                if (T1.className != "trapeze T1"){ 

                    chargement(1);
                    T1.className = "trapeze T1";
                }
                $("#sm1 i").css("color", "#99C794");
                $("#sm2 i").css("color", "white");
                $("#sm3 i").css("color", "white");
            }
            if ($(".runContain").is(":hidden"))
                $(".closeContain").fadeOut("slow", function(e){$(".runContain").fadeIn("slow")});
        }

        function Tr2() {
            if ($("#chargement").is(":hidden")) {
                T1.className = "trapeze T1m";
                T3.className = "trapeze T3";
                if (T2.className != "trapeze T2m"){ 
                    chargement(2);
                    T2.className = "trapeze T2m";
                }
                $("#sm1 i").css("color", "white");
                $("#sm2 i").css("color", "#99C794");
                $("#sm3 i").css("color", "white");
            }
            if ($(".runContain").is(":hidden"))
                $(".closeContain").fadeOut("slow", function(e){$(".runContain").fadeIn("slow")});
        }

        function Tr3() {
            if ($("#chargement").is(":hidden")) {
                T1.className = "trapeze T1m";
                T2.className = "trapeze T2";
                if (T3.className != "trapeze T3m"){ 
                    chargement(3);
                    T3.className = "trapeze T3m";
                }
                $("#sm1 i").css("color", "white");
                $("#sm2 i").css("color", "white");
                $("#sm3 i").css("color", "#99C794");
            }
            if ($(".runContain").is(":hidden"))
                $(".closeContain").fadeOut("slow", function(e){$(".runContain").fadeIn("slow")});
        }

        $( ".closeContain" ).click(function() {
            $(".closeContain").fadeOut("slow", function(e){$(".runContain").fadeIn("slow")});    
            $("#codesource:visible, #doze:visible").fadeOut("slow", function(e){$("#projets").fadeIn("slow")} );      
        });
        /*****************************************************************************/
    });

    window.onresize = function(){redimensionne();}
}	

function redimensionne() {
	var largeur = window.innerWidth;
	var bloc1 = document.getElementById('bloc1');
    var blocP = document.getElementById('right_prez');
    var blocPr = document.getElementById('right_project');
    if (largeur <= 1490) {
    	bloc1.style.display="none";
        blocP.style.display="none";
        blocPr.style.display="none";
    }
   	else {
   		bloc1.style.display="flex";
        blocP.style.display="flex";
        blocPr.style.display="flex";
    }
}
