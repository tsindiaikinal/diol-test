(function() {
  //PRIVATE VERIBLES
  let goods = document.getElementById("goods");
  let pagination = document.querySelector(".pages-number");
  let paginationLink = document.querySelectorAll(".pagination__link");
  // *****************************************************
  goods.addEventListener("click", function(event) {
    // console.log(event.target);
    if (event.target.className === "add-btn") {
      event.target.form[2].disabled = false;
      let addDataValue = parseInt(
        event.target.form[0].getAttribute("data-value")
      );
      event.target.form[0].setAttribute(
        "data-value",
        (addDataValue = addDataValue + 1)
      );
      event.target.form[0].value = addDataValue;
    }
    if (event.target.className === "subtract-btn") {
      let subtractDataValue = event.target.form[0].getAttribute("data-value");
      event.target.form[0].setAttribute(
        "data-value",
        (subtractDataValue = subtractDataValue - 1)
      );
      event.target.form[0].value = subtractDataValue;
      if (subtractDataValue <= 0) {
        event.target.form[0].value = 0;
        event.target.form[2].disabled = true;
        event.target.form[0].setAttribute("data-value", 0);
      }
    }
  });
  pagination.addEventListener("click", function(event) {
    paginationLink.forEach(links => {
      if (links.classList.contains("active")) {
        links.classList.remove("active");
      }
    });
    event.target.classList.add("active");
  });
})();
