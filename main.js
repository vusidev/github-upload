var images = ["images1.jpg", "images2.jpg", "images3.jpg", "images49.jpg", "images4.jpg", "images5.jpg", "images50.jpg", "images6.jpg", "images7.jpg", "images8.jpg", "images9.jpg", "images10.jpg", "images11.jpg", "images12.jpg", "images13.jpg", "images14.jpg", "images15.jpg", "images16.jpg", "images17.jpg", "images18.jpg", "images19.jpg", "images20.jpg", "images48.jpg", "images21.jpg", "images22.jpg", "images23.jpg", "images24.jpg", "images25.jpg", "images26.jpg", "images27.jpg", "images28.jpg", "images29.jpg", "images30.jpg", "images31.jpg", "images32.jpg", "images33.jpg", "images34.jpg", "images35.jpg", "images36.jpg", "images37.jpg", "images38.jpg", "images39.jpg", "images40.jpg", "images41.jpg", "images42.jpg", "images43.jpg", "images44.jpg", "images45.jpg", "images46.jpg", "images47.jpg", "images48.jpg"];
var num = 0;
function prev() {
var slider = document.getElementById("slider");
num++;
if (num >= images.length) {
images[num];
num = 0;
}
slider.src = images[num];
}
function next() {
var slider = document.getElementById("slider");
num--;
if (num < 0) {
images[num]
num = images.length-1
}
slider.src = images[num];
}