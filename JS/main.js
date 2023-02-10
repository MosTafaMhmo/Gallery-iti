var image1 = document.getElementsByTagName("img")[0];
var image2 = document.getElementsByTagName("img")[1];
var image3 = document.getElementsByTagName("img")[2];
var image = document.getElementsByTagName("img")[3];
var b1 = document.getElementsByTagName("button")[0];
var b2 = document.getElementsByTagName("button")[1];
var Al = document.getElementsByClassName("al")[0];



var s = image1.getAttribute.src;


function change1() {
    Al.remove();
    image.src = image1.src;
}
function change2() {
    Al.remove();
    image.src = image2.src;

}
function change3() {
    Al.remove();
    image.src = image3.src;
}
image1.onclick = change1;
image2.onclick = change2;
image3.onclick = change3;

var newwin;
function openwin() {
    console.log("clicked");
    var show = image.cloneNode(true);
    newwin = window.open('', '', 'width=600,height=384');
    newwin.document.body.appendChild(show);
}
function closewin() {
    newwin.close();
}
b1.onclick = openwin;
b2.onclick = closewin;