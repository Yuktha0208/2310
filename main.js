canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

mars=["mars.gif","mars1.jpg","mars2.jpg","mars3.jpg"];
r=Math.floor(Math.random()*4);
rover_width=100;
rover_height=90;

background_image=mars[r];
rover_image="rover.png";

rover_X=10;
rover_y=10;

function add(){
    background_tag=new Image();
    background_tag.onload=upload_background;
    background_tag.src=background_image;

    rover_tag=new Image();
    rover_tag.onload=upload_rover;
    rover_tag.src=rover_image;
}

function upload_background(){
    ctx.drawImage(background_tag,0,0,canvas.width,canvas.height);

}
function upload_rover(){
    ctx.drawImage(rover_tag,rover_X,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
key_pressed=e.keyCode;
if(key_pressed="38"){
    up();
    console.log("up");
}
if(key_pressed="40"){
    down();
    console.log("down");
}
if(key_pressed="39"){
    right();
    console.log("right");
}
if(key_pressed="37"){
    left();
    console.log("left");
}

}

function up(){
    if(rover_y>=0){
        rover_y=rover_y-23;
        console.log("when up arrow is pressed, x= "+ rover_X+" , y= "+ rover_y);
        upload_background();
        upload_rover();
    }
}

function down(){
    if(rover_y<=500){
        rover_y=rover_y+23;
        console.log("when down arrow is pressed, x= "+ rover_X+" , y= "+ rover_y);
        upload_background();
        upload_rover();
    }
}

function right(){
    if(rover_X>=700){
        rover_X=rover_X+23;
        console.log("when right arrow is pressed, x= "+ rover_X+" , y= "+ rover_y);
        upload_background();
        upload_rover();
    }
}

function left(){
    if(rover_X>=0){
        rover_X=rover_X-23;
        console.log("when left arrow is pressed, x= "+ rover_X+" , y= "+ rover_y);
        upload_background();
        upload_rover();
    }
}