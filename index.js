function toggleText(icon) {
    let card = icon.closest(".quotation-card");
    let article = card.querySelector("article"); 
    let plusIcon = card.querySelector(".plus-icon");
    let minusIcon = card.querySelector(".minus-icon");

    if (article.style.display === "none" || article.style.display === "") {
        article.style.display = "block"; 
        plusIcon.style.display = "none"; 
        minusIcon.style.display = "inline-block"; 
    } else {
        article.style.display = "none"; 
        plusIcon.style.display = "inline-block"; 
        minusIcon.style.display = "none"; 
    }
}
