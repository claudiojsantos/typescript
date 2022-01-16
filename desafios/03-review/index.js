function review(review) {
    if (review) {
        console.log("Sua nota foi ".concat(review, " estrela(s)"));
    }
    else {
        console.log("Review não enviado");
    }
}
review(false);
review(2);
review(3);
review(4);
review(5);
