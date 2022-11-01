let submitBtn = document.querySelector("#submit-btn");
let rating = document.querySelector(".rating");
let thankyou = document.querySelector(".thankyou");
let insertScore = document.querySelector("#user_score");
let scoreBtnAll = document.querySelectorAll(".btn-circle");


submitBtn.addEventListener("click", nextPage = () => {
    rating.style.display = "none";
    thankyou.style.display = "revert";
    
});


scoreBtnAll.forEach((scoreBtn) => {
    scoreBtn.addEventListener("click", clickEffect = () => {
        if (scoreBtn.classList.contains("selected", "active")) {
            scoreBtn.classList.remove("selected", "active");
        } else {
            scoreBtn.classList.add("selected", "active");
            insertScore.innerHTML = " " + `${scoreBtn.textContent}` + " ";
        }

    });

});  







