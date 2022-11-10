import { faker } from "@faker-js/faker";
// import { faker } from "@faker-js/faker/locale/pt_PT";
// const faker = require('@faker-js/faker');

module.exports = () => {


const tamanho = 10;
const  dataItem ={
    products: []
};

for (let i = 0; i < tamanho; i++) {
    dataItem.products.push({
        id: faker.datatype.uuid(),
        title: `Product ${faker.datatype.uuid()}`,
        category: faker.internet.userName,
        price: faker.datatype.number(),
        description: `This is description about ${faker.datatype.uuid()}`  
    });
}

return dataItem;
} 






// return dataItem;



