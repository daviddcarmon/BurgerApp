$(function () {
  $(".change-devoured").on("click", function (event) {
    console.log("clicked changed");

    let id = $(this).data("id");
    let devoured = $(this).data("newdevoured");

    let devouredState = {
      devoured: devoured,
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState,
    }).then(function () {
      console.log("changed Burger to devoured");
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
      devoured: 0,
    };
    console.log(newBurger);
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".btnDelete").on("click", function (event) {
    event.preventDefault();
    let id = $(this).data("id");
    // undefined
    console.log(typeof id);
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(() => {
      console.log(`Deleted ${id}`);
      location.reload();
    });
  });
});
