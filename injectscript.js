"use strict";
const Inject_detection = {
    init:function(){
        if (/Mobi/.test(navigator.userAgent)) {
            var maindiv = document.createElement("div"),
                body = document.getElementById("home_page"),
                title = document.createElement("h1"),
                titlediv = document.createElement("div"),
                subtitle = document.createElement("h3"),
                subtitlediv = document.createElement("div"),
                titleText = document.createTextNode("Hej där!"),
                subtitleText = document.createTextNode("Vi har även en mobil sida...Vill du byta?"),
                btnyes = document.createElement("div"),
                btnno = document.createElement("div"),
                btnyesp = document.createElement("p"),
                btnnop = document.createElement("p"),
                btnyestext = document.createTextNode("YES"),
                btnnotext = document.createTextNode("NO");
            
            maindiv.setAttribute("class", "notification");
            title.setAttribute("class", "title-note");
            titlediv.setAttribute("class", "title-div");
            subtitle.setAttribute("class", "subtitle-note");
            subtitlediv.setAttribute("class", "subtitle-div");
            btnyes.setAttribute("class","btn-yes");
            btnyes.id = "btnyes";
            btnno.setAttribute("class","btn-no");
            btnno.id = "btnno";
            btnyesp.setAttribute("class","btn-yes-text");
            btnnop.setAttribute("class","btn-no-text");
            
            title.appendChild(titleText);
            titlediv.appendChild(title);
            subtitle.appendChild(subtitleText);
            subtitlediv.appendChild(subtitle);
            
            btnyesp.appendChild(btnyestext);
            btnnop.appendChild(btnnotext);
            btnyes.appendChild(btnyesp);
            btnno.appendChild(btnnop)
            
            maindiv.appendChild(titlediv);
            maindiv.appendChild(subtitlediv);
            maindiv.appendChild(btnyes);
            maindiv.appendChild(btnno);
            body.appendChild(maindiv);
            
            console.log( document.getElementById("btnyes"))
            document.getElementById("btnyes").addEventListener("touchend", handlerYesFunction, false);
            document.getElementById("btnno").addEventListener("touchend", handlerNoFunction, false);

            function handlerYesFunction(event) {
                alert("yes")
                }
            function handlerNoFunction(event) {
                alert("no")
                }
            // window.location.href = "/mobile.html";
        }
        else{
            
        }
    }
};
window.onload = Inject_detection.init();
