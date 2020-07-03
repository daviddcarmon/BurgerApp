// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-Burger").on("click", (event) => {
    console.log("clicked submit");

    let id = $(this).data("id");
    let devoured = $(this).data("newDevoured");

    let devouredState = {
      Devoured: devoured,
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState,
    }).then(function () {
      console.log("changed Burger to", newBurger);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", (event) => {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("clicked submit");

    let newBurger = {
      burger: $("#burger").val().trim(),
      // burger: $("[burger=devoured]:checked").val().trim(),
    };
    console.log(newBurger);
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new cat");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".btnDelete").on("click", (event) => {
    event.preventDefault();
    let id = $(this).data("id");
  });
});
