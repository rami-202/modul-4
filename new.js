(function(window){
    var names = ["Ahlam","ali","rana","jana","jone","dad","younas","robi"];
    for (var i in names){
        var firstLeter = names[i].charAt(0).toLowerCase();
        if (firstLeter == 'j'){
            window.byeSpeaker.speak(names[i]);
        }else{
            window.helloSpeaker.speak(names[i]);
        }
    }
})(window);

