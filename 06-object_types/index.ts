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

// optional parameter interfaces

interface User {
  name: string;
  email: string;
  role?: string;
}

function showUserDetails(user: User): void {
  console.log(`O usuário ${user.name} tem seu email ${user.email}`);

  if (user.role) {
    console.log(`Seu perfil é ${user.role}`);
  }
}

showUserDetails({
  name: "Cláudio Santos",
  email: "claudio@sistnet.com.br",
  role: "admin",
});

showUserDetails({
  name: "Antonio Cláudio",
  email: "antonio@sistnet.com.br",
});

// read-only

interface Car {
  brand: string;
  readonly wheels: number;
}

const Ka: Car = {
  brand: "Ford",
  wheels: 5,
};

// Ka.wheels = 4; // dont permitted

// index signature

interface CoordObject {
  [index: string]: number;
}

const coord: CoordObject = {
  x: 10,
};

coord.y = 15;

coord.z = 16;

console.log(coord);
