
/*widgest*/
document.getElementById("bedroom").onclick=function(){location.href="page1.html"}
document.getElementById("kitchen").onclick=function(){location.href="page1.html"}
document.getElementById("livingroom").onclick=function(){location.href="page1.html"}
document.getElementById("meeting").onclick=function(){location.href="page1.html"}


/*dot---*/
document.getElementById("page1").onclick=function(){location.href="index.html"}
document.getElementById("page2").onclick=function(){location.href="home2.html"}
document.getElementById("page3").onclick=function(){location.href="home3.html"}
document.getElementById("page4").onclick=function(){location.href="home4.html"}
document.getElementById("page5").onclick=function(){location.href="home5.html"}
document.getElementById("page6").onclick=function(){location.href="home6.html"}




var startX = 0;

window.addEventListener('touchstart', function(event) {
    startX = event.touches[0].clientX;
});

window.addEventListener('touchend', function(event) {
    var endX = event.changedTouches[0].clientX;
    var threshold = 50; // Minimum distance required to trigger navigation (in pixels)

    if (startX - endX > threshold) {
        // Swipe from right to left
        var nextPageLink = document.getElementById('nextPage').href;
        if (nextPageLink) {
            window.location.href = nextPageLink;
        }
    } else if (endX - startX > threshold) {
        // Swipe from left to right
        var prevPageLink = document.getElementById('prevPage').href;
        if (prevPageLink) {
            window.location.href = prevPageLink;
        }
    }
});




window.onload=function()
{
var specifiedtag=document.querySelector('.scrollmenu a[href="home3.html"]');
if(specifiedtag)
{
specifiedtag.classList.add('centered');
specifiedtag.scrollIntoView({behavior:'smooth',block:'center'});

}

};