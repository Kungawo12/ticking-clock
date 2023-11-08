
    setInterval(function() {
        var secondsHand = document.getElementById("seconds");
        var minutesHand = document.getElementById("minutes");
        var hourHand = document.getElementById("hour");
    
        var now = new Date();
        var seconds = now.getSeconds();
        var minutes = now.getMinutes();
        var hours = now.getHours();
    
        var secondsDeg = (seconds / 60) * 360;
        var minutesDeg = (minutes / 60) * 360 + (secondsDeg / 60);
        var hoursDeg = (hours / 12) * 360 + (minutesDeg / 12);
    
        secondsHand.style.transform = `rotate(${secondsDeg}deg)`;
        minutesHand.style.transform = `rotate(${minutesDeg}deg)`;
        hourHand.style.transform = `rotate(${hoursDeg}deg)`;
    }, 1000);
    