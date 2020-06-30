
$(document).ready(()=>{
    $("#filter-item-web").click(()=>{
      $(".card").filter(document.getElementsByClassName("web"));
    })
    $("#filter-item-brand").click(()=>{
      $(".card").filter(document.getElementsByClassName("brand"));
    })
    $("#filter-item-print").click(()=>{
      $(".card").filter(document.getElementsByClassName("print"));
    })
}) 


// $(document).ready(() => {
//     var viewButton = $(":button").text("View Services")
//     viewButton.show();

    

    // var changeButtonText = (() => {
    //     $(":button").click(() => {
    //         $(":button").text("View projects");
    //     })
    // });
    // var changeBack = (() => {
    //     $(":button").click(() => {
    //         $(":button").text("View my projects");
    //     })
    // });


    // $(":button").click(() => {
    //     var hideButton = $(":button").text("Hide Projects")
    //     $('.card').toggle();
    //     hideButton.show();
    //     changeButtonText();
    // })



    // $(function(){
    //     $("#nav-placeholder").load("navbar.html");
    //   });

// });
