module.exports = () => {
  let tam = 1000;
  const categoryObject = ["fitness", "electronics", "gardening", "furniture", "accessories"];
  const data = {
    products: []
  };

  for (let index = 0; index < tam; index++) {
    let priceSoma = tam + index;
    data.products.push({
      id: index,
      title: `Product ${index}`,
      category: "electronics",
      price: priceSoma,
      description: `This is description about ${index}`
    });
  }
return data;

};
