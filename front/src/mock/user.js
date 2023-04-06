import { faker } from '@faker-js/faker';

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: '',
  name: faker.name.fullName(),
  company: faker.company.name(),
  isVerified: faker.datatype.boolean(),
  status: 'active',
  role: 'Leader',
}));

export default users;
