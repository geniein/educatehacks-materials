import { faker } from '@faker-js/faker';

const posts = [...Array(15)].map((_, index) => ({
  id: faker.datatype.uuid(),
  cover: ``,
  title: faker.name.fullName(),
  createdAt: faker.date.past(),
  view: faker.datatype.number(),
  comment: faker.datatype.number(),
  share: faker.datatype.number(),
  favorite: faker.datatype.number(),
  author: {
    name: faker.name.fullName(),
    avatarUrl: ``,
  },
}));

export default posts;
