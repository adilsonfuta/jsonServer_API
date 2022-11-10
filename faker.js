// import { faker } from "@faker-js/faker";
// import { faker } from "@faker-js/faker/locale/pt_PT";

module.exports = () => {
  const tamanho = 10;
  const dataItem = {
    products: []
  };

//   const faker = require("@faker-js/faker");

  for (let i = 0; i < tamanho; i++) {
    dataItem.products.push({
      id: faker.datatype.uuid(),
      title: `Product ${faker.datatype.uuid()}`,
      category: faker.internet.userName,
      price: faker.datatype.number(),
      description: `This is description about ${faker.datatype.uuid()}`
    });
  }

  console.log(dataItem);
  return dataItem;
};

// return dataItem;
