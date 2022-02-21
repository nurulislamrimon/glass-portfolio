document.getElementById("color-changer").addEventListener("click", function () {
    const red = Math.round(Math.random() * 100 + 100);
    const green = Math.round(Math.random() * 100 + 50);
    const blue = Math.round(Math.random() * 100);
    console.log(red, green, blue);
    const circles = document.getElementsByClassName("circles");
    for (const circle of circles) {
        circle.style.background = `rgb(${red},${green},${blue})`;
    }
})