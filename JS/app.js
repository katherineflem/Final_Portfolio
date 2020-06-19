
$(document).ready(() => {
    var viewButton = $(":button").text("View Projects")
    viewButton.show();

    var changeButtonText = (() => {
        $(":button").click(() => {
            $(":button").text("View my projects");
        })
    });
    var changeBack = (() => {
        $(":button").click(() => {
            $(":button").text("View my projects");
        })
    });


    $(":button").click(() => {
        var hideButton = $(":button").text("Hide Projects")
        $('.card').toggle();
        hideButton.show();
        changeButtonText();
    })



    // $(function(){
    //     $("#nav-placeholder").load("navbar.html");
    //   });


});
