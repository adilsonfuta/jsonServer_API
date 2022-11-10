# jsonServer_API
jsonServer_API



## Acess de POSTMAN WORKSPACE 

https://www.postman.com/aprender/workspace/novadev-workspace/collection/14037602-a0ba8d77-7d7f-4fbb-ae13-2787cda68b6b?action=share&creator=14037602


## Using Fake data random For Testing Aplication

> FAKER JS

https://fakerjs.dev/
https://github.com/faker-js/faker

> npm install --save-dev @faker-js/faker


```js 

import { faker } from '@faker-js/faker';
// import { faker } from '@faker-js/faker/locale/de';

export const USERS: User[] = [];

export function createRandomUser(): User {
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

Array.from({ length: 10 }).forEach(() => {
  USERS.push(createRandomUser());
});


```

