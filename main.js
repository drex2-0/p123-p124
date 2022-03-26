nosex=0;
nosey=0;
difference=0;
rightwristx=0;
leftwristx=0;

function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(500,500)
    canvas.position(560,150);

    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotposes);
}
function modelloaded()
{
    console.log("posenet is initialized")
}
function gotposes(results)
{
    if(results.length>0)
    {
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        rightwristx=results[0].pose.rightWrist.x;
        leftwristx=results[0].pose.leftWrist.x;
        difference=floor(leftwristx-rightwristx);
    }
}
function draw()
{
    background('#aaa9ad');
    fill("#4169e1");
    stroke("#EFEBE0");
    text("Padmaj",nosex,nosey);
    textSize(difference);
    document.getElementById("font_size").innerHTML="The font size of the text will be= "+difference+"px";
}