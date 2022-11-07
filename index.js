const rateDiv = document.querySelector(".rate-div");
const thankDiv = document.querySelector(".thank-you-div");
const submit = document.getElementById("submit");
const rateAgain = document.getElementById("rate-again");
const rating = document.getElementById("rate");
const rates = document.querySelectorAll(".btn-style");

// when submit button is cliked display thank-you div and hide rate div
submit.addEventListener("click", () => {
    thankDiv.classList.remove("hidden");
    rateDiv.style.display = "none";
    // jusoo[p]

    
    
})

// to hide the thank-you div and display rate-div when rate again button is clicked
rateAgain.addEventListener("click", function () {
    thankDiv.classList.add("hidden");
    rateDiv.style.display = "block";



    
}
)

//looping through each button and looking for a click event
rates.forEach(element => {
    element.addEventListener("click", () => {
        rating.innerHTML = element.innerHTML;
    }
    )

});




