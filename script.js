var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
var stars = 500;
var colorrange = [0, 60, 240];
var starArray = [];

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initialize stars
for (var i = 0; i < stars; i++) {
    var x = Math.random() * canvas.offsetWidth;
    var y = Math.random() * canvas.offsetHeight;
    var radius = Math.random() * 1.2;
    var hue = colorrange[getRandom(0, colorrange.length - 1)];
    var sat = getRandom(50, 100);
    var opacity = Math.random();
    starArray.push({ x, y, radius, hue, sat, opacity });
}

// Draw stars once BEFORE saving baseFrame
function drawStarsOnce() {
    for (var i = 0; i < stars; i++) {
        var star = starArray[i];
        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, 360);
        context.fillStyle = "hsla(" + star.hue + ", " + star.sat + "%, 88%, " + star.opacity + ")";
        context.fill();
    }
}

drawStarsOnce();
var baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);

var frameNumber = 0;
var opacity = 0;
var thirdOpacity = 0;

function updateStars() {
    for (var i = 0; i < stars; i++) {
        if (Math.random() > 0.99) {
            starArray[i].opacity = Math.random();
        }
    }
}

function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight) {
    lines.forEach((line, index) => {
        context.fillText(line, x, y + index * (fontSize + lineHeight));
    });
}

function drawText() {
    var fontSize = Math.min(30, window.innerWidth / 24);
    var lineHeight = 8;

    context.font = fontSize + "px Comic Sans MS";
    context.textAlign = "center";

    // Blue glow for text
    context.shadowColor = "rgba(45, 45, 255, 1)";
    context.shadowBlur = 8;

    // Scene 1
    if(frameNumber < 250){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        drawTextWithLineBreaks([
            "Hope Heidi’s reading this,",
            "she who goes by Heidi Araid Rodriguez Ramirez :)"
        ], canvas.width/2, canvas.height/2, fontSize, lineHeight);
        opacity += 0.01;
    }
    if(frameNumber >= 250 && frameNumber < 500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        drawTextWithLineBreaks([
            "Hope Heidi’s reading this,",
            "she who goes by Heidi Araid Rodriguez Ramirez :)"
        ], canvas.width/2, canvas.height/2, fontSize, lineHeight);
        opacity -= 0.01;
    }

    // Scene 2
    if(frameNumber == 500) opacity = 0;
    if(frameNumber > 500 && frameNumber < 1000){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        drawTextWithLineBreaks([
            "No matter the good or the bad, know I’m a fan of you.",
            "Into you, with quite the crush on you, maybe even one",
            "that’s a little too much at times.",
            "You’ve been more than understanding each step of the way,",
            "and I know I haven’t always matched that."
        ], canvas.width/2, canvas.height/2, fontSize, lineHeight);
        opacity += 0.01;
    }
    if(frameNumber >= 1000 && frameNumber < 1500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        drawTextWithLineBreaks([
            "No matter the good or the bad, know I’m a fan of you.",
            "Into you, with quite the crush on you, maybe even one",
            "that’s a little too much at times.",
            "You’ve been more than understanding each step of the way,",
            "and I know I haven’t always matched that."
        ], canvas.width/2, canvas.height/2, fontSize, lineHeight);
        opacity -= 0.01;
    }

    // Scene 3
    if(frameNumber == 1500) opacity = 0;
    if(frameNumber > 1500 && frameNumber < 2000){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        drawTextWithLineBreaks([
            "Truly, Heidi, thank you for every day we’ve shared together,",
            "the good, the bad, and the messy.",
            "Thank you for giving me the time and chance to get to know you,",
            "and to keep getting to know you."
        ], canvas.width/2, canvas.height/2, fontSize, lineHeight);
        opacity += 0.01;
    }
    if(frameNumber >= 2000 && frameNumber < 2500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        drawTextWithLineBreaks([
            "Truly, Heidi, thank you for every day we’ve shared together,",
            "the good, the bad, and the messy.",
            "Thank you for giving me the time and chance to get to know you,",
            "and to keep getting to know you."
        ], canvas.width/2, canvas.height/2, fontSize, lineHeight);
        opacity -= 0.01;
    }

    // Scene 4
    if(frameNumber == 2500) opacity = 0;
    if(frameNumber > 2500 && frameNumber < 3000){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        drawTextWithLineBreaks([
            "You, believe it or not, shine like a star.",
            "Sometimes brighter, sometimes softer, but always there",
            "in a way that’s delightful to the people around you.",
            "No matter the distance or the trouble, I’m fortunate for you,",
            "and for the patience you’ve had with me."
        ], canvas.width/2, canvas.height/2, fontSize, lineHeight);
        opacity += 0.01;
    }
    if(frameNumber >= 3000 && frameNumber < 3500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        drawTextWithLineBreaks([
            "You, believe it or not, shine like a star.",
            "Sometimes brighter, sometimes softer, but always there",
            "in a way that’s delightful to the people around you.",
            "No matter the distance or the trouble, I’m fortunate for you,",
            "and for the patience you’ve had with me."
        ], canvas.width/2, canvas.height/2, fontSize, lineHeight);
        opacity -= 0.01;
    }

    // Final line + glowing blue heart
    if(frameNumber == 3500) thirdOpacity = 0;
    if(frameNumber > 3500){

        // Final message (blue glow)
        context.shadowColor = "rgba(45, 45, 255, 1)";
        context.shadowBlur = 8;

        context.fillStyle = `rgba(45, 45, 255, ${thirdOpacity})`;
        context.font = fontSize + "px Comic Sans MS";
        context.fillText("Sincerely, from a fan.", canvas.width/2, canvas.height/2 + 80);

        // Heart with soft blue glow
        context.shadowColor = "rgba(45, 45, 255, 1)";
        context.shadowBlur = 15;

        context.fillStyle = `rgba(255, 255, 255, ${thirdOpacity})`; // white heart
        context.font = (fontSize + 20) + "px Comic Sans MS";
        context.fillText("❤", canvas.width/2, canvas.height/2 + 150);

        // turn glow off after
        context.shadowColor = "transparent";
        context.shadowBlur = 0;

        thirdOpacity += 0.01;
    }
}

function draw() {
    context.putImageData(baseFrame, 0, 0);
    updateStars();
    drawText();

    if (frameNumber < 99999) frameNumber++;
    window.requestAnimationFrame(draw);
}

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    drawStarsOnce();
    baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);
});

window.requestAnimationFrame(draw);
