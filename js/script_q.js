//tab
function openBoard(evt, boardName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("board");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" opacity", "");
    }
    document.getElementById(boardName).style.display = "block";
    evt.currentTarget.className += " opacity";
}


// toggle
$(function(){
    $(".faq> li> .questions_box").click(function(){
        $(this).next().slideToggle();
        $('.q_icon p').toggleClass('qa')
    })
})
$(function(){
    $(".faq> li> ul").click(function(){
        $(this).children().children("img").toggleClass("turn")
    })
})
