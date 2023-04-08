import { faker } from '@faker-js/faker';

const inbox = [...Array(5)].map((_, index) => ({
  id: faker.datatype.uuid(),  
  title: faker.name.fullName(),
  content: faker.name.fullName(),
  author: faker.company.name(),
  date: faker.date.between()
}));

export default inbox;
