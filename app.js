console.log("APP.JS LOADED SUCCESSFULLY!");
document.addEventListener("DOMContentLoaded", function () {

    const searchButton = document.getElementById("search");

    searchButton.addEventListener("click", function () {

        fetch("superheroes.php")
            .then(function (response) {
                return response.text();
            })
            .then(function (data) {
                alert(data);
            })
            .catch(function (error) {
                console.error("Error fetching superheroes:", error);
            });

    });

});
