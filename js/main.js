//on load
function getName(){
    var getname = prompt("Name:");
    if (getname === "")
    {
        if (confirm("Please provide a name.")){
            getName();
        }
        else{
            alert("Entry cancelled. Please reload page");
            document.getElementById("stdname").innerHTML = "";
            document.getElementById("play").disabled = true;
            document.getElementById("stop").disabled = true;
            document.getElementById("pause").disabled = true;
            document.getElementById("calculate").disabled = true;
            document.getElementById("reset").disabled = true;
            document.getElementById("inputmath").disabled = true;
            document.getElementById("inputsci").disabled = true;
            document.getElementById("inputeng").disabled = true;
            document.getElementById("inputfil").disabled = true;
            document.getElementById("inputpe").disabled = true;
            return false;
        }
        return false;
    }
    else if (getname != null)
    {
        document.getElementById("stdname").innerHTML = getname;
        document.getElementById("stdname").style.color = "#2fc0e4";
        document.getElementById("welcome").innerHTML = "Welcome," + " " + getname + ".";
    }
    else{
        alert("Entry cancelled. Please reload page");
        document.getElementById("stdname").innerHTML = "";
        document.getElementById("play").disabled = true;
        document.getElementById("stop").disabled = true;
        document.getElementById("calculate").disabled = true;
        document.getElementById("reset").disabled = true;
        document.getElementById("inputmath").disabled = true;
        document.getElementById("inputsci").disabled = true;
        document.getElementById("inputeng").disabled = true;
        document.getElementById("inputfil").disabled = true;
        document.getElementById("inputpe").disabled = true;
        return false;
    }
}
//on reset button click
function resetButton() {
    var getname = prompt("Name:");
    if (getname === "")
    {
        if (confirm("Please provide a name.")){
            getName();
        }
        else{
            alert("Entry cancelled. Please reload page");
            document.getElementById("stdname").innerHTML = "";
            document.getElementById("play").disabled = true;
            document.getElementById("stop").disabled = true;
            document.getElementById("pause").disabled = true;
            document.getElementById("calculate").disabled = true;
            document.getElementById("reset").disabled = true;
            document.getElementById("inputmath").disabled = true;
            document.getElementById("inputsci").disabled = true;
            document.getElementById("inputeng").disabled = true;
            document.getElementById("inputfil").disabled = true;
            document.getElementById("inputpe").disabled = true;
            return false;
        }
        return false;
    }
    else if (getname != null)
    {
        document.getElementById("stdname").innerHTML = getname;
        document.getElementById("stdname").style.color = "#2fc0e4";
        document.getElementById("welcome").innerHTML = "Welcome," + " " + getname + ".";
    }
    else{
        alert("Entry cancelled. Please reload page");
        document.getElementById("stdname").innerHTML = "";
        document.getElementById("play").disabled = true;
        document.getElementById("stop").disabled = true;
        document.getElementById("calculate").disabled = true;
        document.getElementById("reset").disabled = true;
        document.getElementById("inputmath").disabled = true;
        document.getElementById("inputsci").disabled = true;
        document.getElementById("inputeng").disabled = true;
        document.getElementById("inputfil").disabled = true;
        document.getElementById("inputpe").disabled = true;
        return false;
    }
        document.getElementById("inputmath").value = "";
        document.getElementById("inputsci").value = "";
        document.getElementById("inputeng").value = "";
        document.getElementById("inputfil").value = "";
        document.getElementById("inputpe").value = "";
        document.getElementById("evalmath").textContent = "Evaluation";
        document.getElementById("evalsci").textContent = "Evaluation";
        document.getElementById("evaleng").textContent = "Evaluation";
        document.getElementById("evalfil").textContent = "Evaluation";
        document.getElementById("evalpe").textContent = "Evaluation";
    let postpic = document.getElementById("postpic");
    if (postpic.style.opacity = 1)
    {
        postpic.style.opacity = 0;
    }
    stopMusic();
    stopmusicPost();
    stopRickroll();
}
//on calculate button click
function showGrade(){
    var math = parseInt(document.getElementById("inputmath").value);
    var sci = parseInt(document.getElementById("inputsci").value);
    var eng = parseInt(document.getElementById("inputeng").value);
    var fil = parseInt(document.getElementById("inputfil").value);
    var pe = parseInt(document.getElementById("inputpe").value);
    var ave = (math + sci + eng + fil + pe) /5;
    //for math
    if (math >= 90 && math <= 100)
    {
        document.getElementById("evalmath").textContent = "Excellent";
    }
    else if (math >= 80 && math <= 89)
    {
        document.getElementById("evalmath").textContent = "Good";
    }
    else if (math >= 70 && math <= 79)
    {
        document.getElementById("evalmath").textContent = "Average";
    }
    else if (math >= 60 && math <= 69)
    {
        document.getElementById("evalmath").textContent = "Poor";
    }
    else
    {
        document.getElementById("evalmath").textContent = "Fail";
    }
    //

    //for science
    if (sci >= 90 && sci <= 100)
    {
        document.getElementById("evalsci").textContent = "Excellent";
    }
    else if (sci >= 80 && sci <= 89)
    {
        document.getElementById("evalsci").textContent = "Good";
    }
    else if (sci >= 70 && sci <= 79)
    {
        document.getElementById("evalsci").textContent = "Average";
    }
    else if (sci >= 60 && sci <= 69)
    {
        document.getElementById("evalsci").textContent = "Poor";
    }
    else
    {
        document.getElementById("evalsci").textContent = "Fail";
    }
    //

    //for english
    if (eng >= 90 && eng <= 100)
    {
        document.getElementById("evaleng").textContent = "Excellent";
    }
    else if (eng >= 80 && eng <= 89)
    {
        document.getElementById("evaleng").textContent = "Good";
    }
    else if (eng >= 70 && eng <= 79)
    {
        document.getElementById("evaleng").textContent = "Average";
    }
    else if (eng >= 60 && eng <= 69)
    {
        document.getElementById("evaleng").textContent = "Poor";
    }
    else
    {
        document.getElementById("evaleng").textContent = "Fail";
    }
    //

    //for filipino
    if (fil >= 90 && fil <= 100)
    {
        document.getElementById("evalfil").textContent = "Excellent";
    }
    else if (fil >= 80 && fil <= 89)
    {
        document.getElementById("evalfil").textContent = "Good";
    }
    else if (fil >= 70 && fil <= 79)
    {
        document.getElementById("evalfil").textContent = "Average";
    }
    else if (fil >= 60 && fil <= 69)
    {
        document.getElementById("evalfil").textContent = "Poor";
    }
    else
    {
        document.getElementById("evalfil").textContent = "Fail";
    }
    //

    //for pe
    if (pe >= 90 && pe <= 100)
    {
        document.getElementById("evalpe").textContent = "Excellent";
    }
    else if (pe >= 80 && pe <= 89)
    {
        document.getElementById("evalpe").textContent = "Good";
    }
    else if (pe >= 70 && pe <= 79)
    {
        document.getElementById("evalpe").textContent = "Average";
    }
    else if (pe >= 60 && pe <= 69)
    {
        document.getElementById("evalpe").textContent = "Poor";
    }
    else{
        document.getElementById("evalpe").textContent = "Fail";
    }
    //

    //for average
    if (math <= 100 && math >= 90 && sci <= 100 && sci >= 90 && pe <= 100 && pe >= 90 && fil <= 100 && fil >= 90 && eng <= 100 && eng >= 90)
       {
        document.getElementById("evalave").textContent="Superior Genius";
        var audiosub = document.getElementById("gradSong");
        audiosub.loop = true;
        audiosub.play();
        function playPause(){
        if (audio.paused){
            audiosub.play();
            document.getElementById("playimg").src = "../img/pause.png";
        }
        else{
            audiosub.pause();
            document.getElementById("playimg").src = "../img/play.png";
        }
    }
         //stop button
        function stopMusic(){
        if (!audiosub.paused, document.getElementById("playimg").src = "../img/pause.png"){
            audio.pause();
            audio.currentTime = 0;
            document.getElementById("playimg").src = "../img/play.png";
        }
        else{
            audio.play();
            document.getElementById("playimg").src = "../img/pause.png";
        }
    }
        document.getElementById("grad").src = "../img/grad.png"; 
        document.getElementById("postpictitle").innerHTML = "Congratulations!"
        document.getElementById("postpicmsg").innerHTML = "Looks like you're well on your way to that elusive diploma."
        let postpic = document.getElementById("postpic");
        postpic.style.opacity = 1;
    }
    else if (sci <= 69 && sci >= 0 && pe <= 69 && pe >= 0 && fil <= 69 && fil >= 0 && math <= 69 && math >= 0 && eng <= 69 && eng >= 0)
     {
         document.getElementById("evalave").textContent="Disgrace from family";
         var dir, ext, audio, playlist, playlist_status, seekslider, volume, playpause, stop, seeking, seekto, current, durationtime, newtime;
         dir = "../audio/"
         ext = ".mp3"
         playlist = ["Sound of Silence"];
         audio = new Audio();
         audio.src = dir+playlist[0]+ext;
         audio.loop = false;
         audio.play();
        playpause = document.getElementById("play");
        stop = document.getElementById("stop");
        playpause.addEventListener("click", playPause);
        stop.addEventListener("click", stopMusic);
        function playPause(){
        if (audio.paused){
            audio.play();
            document.getElementById("playimg").src = "../img/pause.png";
        }
        else{
            audio.pause();
            document.getElementById("playimg").src = "../img/play.png";
            }
        }
        document.getElementById("grad").src = "../img/cat.png";
        document.getElementById("postpictitle").innerHTML = "Cheer up, hooman."
        document.getElementById("postpicmsg").innerHTML = "You'll get it next time. It's not the end of the world! At least not yet."
        let postpic = document.getElementById("postpic");
        postpic.style.opacity = 1;
    //stop button
        function stopMusic(){
        if (!audio.paused, document.getElementById("playimg").src = "../img/pause.png"){
            audio.pause();
            audio.currentTime = 0;
            document.getElementById("playimg").src = "../img/play.png";
        }
        else{
            audio.play();
            document.getElementById("playimg").src = "../img/pause.png";
            }
        }
    }
    else if ((math <= 100 && math >= 90 && sci <= 100 && sci >= 90 && pe <= 100 && pe >= 90) || (math <= 100 && math >= 90 && sci <= 100 && sci >= 90 && fil <= 100 && fil >= 90) ||(math <= 100 && math >= 90 && sci <= 100 && sci >= 90 && eng <= 100 && eng >= 90) || (math <= 100 && math >= 90 && fil <= 100 && fil >= 90 && pe <= 100 && pe >= 90) || (math <= 100 && math >= 90 && eng <= 100 && eng >= 90 && pe <= 100 && pe >= 90) || (math <= 100 && math >= 90 && fil <= 100 && fil >= 90 && eng <= 100 && eng >= 90) || (fil <= 100 && fil >= 90 && sci <= 100 && sci >= 90 && pe <= 100 && pe >= 90) || (eng <= 100 && eng >= 90 && sci <= 100 && sci >= 90 && pe <= 100 && pe >= 90) || (eng <= 100 && eng >= 90 && sci <= 100 && sci >= 90 && fil <= 100 && fil >= 90) ||(eng <= 100 && eng >= 90 && fil <= 100 && fil >= 90 && pe <= 100 && pe >= 90) )
    {
        document.getElementById("evalave").textContent="Renowned Scholar";
        var audiosub = document.getElementById("rickroll");
        audiosub.loop = true;
        audiosub.play();
        function playPause(){
        if (audio.paused){
            audiosub.play();
            document.getElementById("playimg").src = "../img/pause.png";
        }
        else{
            audiosub.pause();
            document.getElementById("playimg").src = "../img/play.png";
        }
    }
         //stop button
        function stopMusic(){
        if (!audiosub.paused, document.getElementById("playimg").src = "../img/pause.png"){
            audio.pause();
            audio.currentTime = 0;
            document.getElementById("playimg").src = "../img/play.png";
        }
        else{
            audio.play();
            document.getElementById("playimg").src = "../img/pause.png";
        }
    }
        document.getElementById("grad").src = "../img/lego.png"; 
        document.getElementById("postpictitle").innerHTML = "Not bad, cool guy."
        document.getElementById("postpicmsg").innerHTML = "Your Asian ancestors will likely recognize your efforts. Unlike that ONE PERSON"
        let postpic = document.getElementById("postpic");
        postpic.style.opacity = 1;
    }
    else
    {
         document.getElementById("evalave").textContent= ave;
    }




}

//text greetings on musci player
function changeText(){
    var quotes = ["Calm down, listen to this beat.", "Relax. It's higher than you think.", "We're here for you if you fail.", "Yo grades be droppin' like ayyoo", "SomeBODY ONCE TOLD ME", "Never Gonna Give You Up Never Gonna Let You Down", "Please don't bash us. It hurts.", "Sponsored by Raid Shadow Legends." ];
    var random = Math.floor(Math.random()*quotes.length);
    document.getElementById("musictext").textContent = quotes[random];
}

//music player
var dir, ext, audio, playlist, playlist_status, seekslider, volume, playpause, stop, seeking, seekto, current, durationtime, newtime;
    dir = "../audio/"
    ext = ".mp3"
    playlist = ["Graduation", "Sound of Silence", "Never Gonna Give You Up"];
    playlist_index = 0;
    volume = document.getElementById("volume");
    seekslider = document.getElementById("toseek");
    current = document.getElementById("current");
    durationtime = document.getElementById("during");
    playlist_status = document.getElementById("playlist_status");
    //
    audio = new Audio();
    audio.src = dir+playlist[0]+ext;
    audio.loop = false;
    audio.play();
    playlist_status.innerHTML = playlist[playlist_index];

function playMusic(){
    seekslider.addEventListener("mousedown", function(event){ seeking=true; seek(event); });
	seekslider.addEventListener("mousemove", function(event){ seek(event); });
	seekslider.addEventListener("mouseup",function(){ seeking=false; });
    volume.addEventListener("mousemove", setVolume);
    audio.addEventListener("timeupdate", function(){seektimeupdate();})
    audio.addEventListener("ended", function(){ switchTrack(); });

    //switchtrack
    function switchTrack(){
		if(playlist_index == (playlist.length - 1)){
			playlist_index = 0;
		} else {
		    playlist_index++;	
		}
		playlist_status.innerHTML = playlist[playlist_index];
		audio.src = dir+playlist[playlist_index]+ext;
	    audio.play();
	}
    //playpause button
    //seek and volume sliders
    function seek(event){
	    if(seeking){
		    seekslider.value = event.clientX - seekslider.offsetLeft;
	        seekto = audio.duration * (seekslider.value / 250);
	        audio.currentTime = seekto;
	    }
    }

    function setVolume(){
        audio.volume = volume.value/100;
    }
    //seektime
    function seektimeupdate(){
        newtime = audio.currentTime * (100 / audio.duration);
        seekslider.value = newtime;
        var curmins = Math.floor(audio.currentTime / 60);
	    var cursecs = Math.floor(audio.currentTime - curmins * 60);
	    var durmins = Math.floor(audio.duration / 60);
        var dursecs = Math.floor(audio.duration - durmins * 60);
        if(cursecs < 10){ cursecs = "0"+cursecs; }
	    if(dursecs < 10){ dursecs = "0"+dursecs; }
	    if(curmins < 10){ curmins = "0"+curmins; }
        if(durmins < 10){ durmins = "0"+durmins; }
        current.innerHTML = curmins+":"+cursecs;
        durationtime.innerHTML = durmins+":"+dursecs;
    }
}

function playPause(){
    if (audio.paused){
        audio.play();
        document.getElementById("playimg").src = "../img/pause.png";
    }
    else{
        audio.pause();
        document.getElementById("playimg").src = "../img/play.png";
    }
}
//stop button
function stopMusic(){
    if (!audio.paused){
        audio.pause();
        audio.currentTime = 0;
        document.getElementById("playimg").src = "../img/play.png";
    }
}

function stopmusicPost(){
    var audiosub = document.getElementById("gradSong");
        audiosub.loop = true;
        audiosub.pause();
        audiosub.currentTime = 0;
    stopRickroll();
}

function stopRickroll(){
    var audiosub = document.getElementById("rickroll");
    audiosub.loop = true;
    audiosub.pause();
    audiosub.currentTime = 0;
}