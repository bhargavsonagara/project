function showmenu(){
    var b=document.getElementById("bar")
    var t=document.getElementById("time")
    var m=document.getElementById("menu bar")
    b.style.display="none";
    t.style.display="block";
    m.style.display="block";
}
function closemenu(){
    var b=document.getElementById("bar")
    var t=document.getElementById("time")
    var m=document.getElementById("menu bar")
    b.style.display="block";
    t.style.display="none";
    m.style.display="none";
}