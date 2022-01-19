// interfaces

interface Product {
  name: string;
  value: number;
  isAvailable: boolean;
}

function showDetailsProduct(product: Product): void {
  console.log(
    `O nome do produto é ${product.name} e seu preço é R$ ${product.value}`
  );

  if (product.isAvailable) {
    console.log(`O produto está disponível`);
  }
}

const computer = {
  name: "Computer",
  value: 1000.0,
  isAvailable: true,
};

showDetailsProduct(computer);
showDetailsProduct({ name: "Computer old", value: 500.0, isAvailable: false });
