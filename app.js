
document.addEventListener("DOMContentLoaded", function () {

    const searchButton = document.getElementById("search");
    const searchInput = document.getElementById("search-input");
    const result = document.getElementById("result");

    searchButton.addEventListener("click", function () {

        const query = searchInput.value.trim();

        fetch("superheroes.php?query=" + encodeURIComponent(query))
            .then(function (response) {
                if (!response.ok) {
                    throw new Error("HTTP error: " + response.status);
                }

                return response.text();
            })
            .then(function (data) {
                result.innerHTML = data;
            })
            .catch(function (error) {
                console.error("Error fetching superheroes:", error);
                result.textContent = "Unable to retrieve superheroes.";
            });

    });

});
