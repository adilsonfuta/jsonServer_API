import { faker } from "@faker-js/faker";
// import { faker } from "@faker-js/faker/locale/pt_PT";

export const  dataItem ={
    products: []
};

export function createRandomProduct() {
    return {
        id: faker.datatype.uuid(),
        title: `Product ${faker.datatype.uuid()}`,
        category: faker.internet.userName,
        price: faker.datatype.number(),
        description: `This is description about ${faker.datatype.uuid()}`  
    };
}

Array.from({ length : 10 }).forEach(()=>{
   dataItem.products.push(createRandomProduct());
})
