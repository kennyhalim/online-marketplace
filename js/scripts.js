$(document).ready(function(){

  $("#add-burger").click(function(){
    $("ul#orders").append("<li>" + $("#burgers").val() + "</li>");
  });

  $("#add-drink").click(function(){
    $("ul#orders").append("<li>" + $("input:radio[name=drinks]:checked").val());
  });


  $("#formOne").submit(function(event) {

    var name1= $("input#name").val();
    var address1 = $("input#address").val();

    $(".name").text(name1);
    $(".address").text(address1);

    var items = document.getElementById("orders").children;
    var i;

    if (items.length >=0)
    {
        for (i = 0; i < items.length; i++) {
          $("#order-receipt").append("<li>" + items[i].innerHTML + "</li>");
      }
    }

    $("#make-order").hide();
    $("#receipt").show();

    event.preventDefault();

  });

  $("#returnmenu").click(function(){
    $("#make-order").show();
    $("#receipt").hide();
    location.reload();
  });
});
