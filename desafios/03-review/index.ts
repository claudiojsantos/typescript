function review(review: number | boolean) {
  if (review) {
    console.log(`Sua nota foi ${review} estrela(s)`);
  } else {
    console.log("Review não enviado");
  }
}

review(false);
review(2);
review(3);
review(4);
review(5);
