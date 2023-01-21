const currentyear = new Date().getFullYear();
        const currentdate = new Date().getDate()

        const audio = document.getElementById("audio");
        const days = document.getElementById("days");
        const hours = document.getElementById("hours");
        const minutes = document.getElementById("minutes");
        const seconds = document.getElementById("seconds");
        const countDown = document.getElementById("countdown");
        const currentYear = new Date().getFullYear();
        const newYearTime = new Date(`Jan 22 ${currentYear} 00:00:00`).getTime();
        document.getElementById("year").innerHTML = currentYear;
        document.getElementById("currentyear").innerHTML = currentYear;

        var x = document.getElementById("myAudio"); 
        function play() {
           x.play();
           audio.loop = true;
        }
        
        function updateCountDown() {
            const currentTime = new Date().getTime();
            diff = newYearTime - currentTime;
            const d = Math.floor(diff / (1000 * 60 * 60 * 24));
            const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((diff % (1000 * 60)) / 1000);
            days.innerHTML = d;
            hours.innerHTML = h < 10 ? "0" + h : h;
            minutes.innerHTML = m < 10 ? "0" + m : m;
            seconds.innerHTML = s < 10 ? "0" + s : s;
            if((d==0)&&(h==0)&&(m==0)&&(s==0)) 
            {
                const container=document.getElementsByClassName("container");
                const canvas=document.getElementById("canvas");
                container[0].style.display="none";
                canvas.style.display="block";

            }
        }
        setInterval(updateCountDown, 1000);
