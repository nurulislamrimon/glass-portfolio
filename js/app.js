document.getElementById("color-changer").addEventListener("click", function () {
    const red = Math.round(Math.random() * 100 + 100);
    const green = Math.round(Math.random() * 100 + 50);
    const blue = Math.round(Math.random() * 100);
    console.log(red, green, blue);
    const circles = document.getElementsByClassName("circles");
    for (const circle of circles) {
        circle.style.background = `rgb(${red},${green},${blue})`;
    }
});

setInterval(() => {
    d = new Date();
    hTime = d.getHours();
    mTime = d.getMinutes();
    sTime = d.getSeconds();
    hRotation = 30 * hTime + mTime / 2;
    mRotation = 6 * mTime;
    sRotation = 6 * sTime;

    hour_hand.style.transform = `rotate(${hRotation}deg)`
    minute_hand.style.transform = `rotate(${mRotation}deg)`
    second_hand.style.transform = `rotate(${sRotation}deg)`
}, 1000)