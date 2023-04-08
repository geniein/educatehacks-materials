import { faker } from '@faker-js/faker';

const inbox = [...Array(5)].map((_, index) => ({
  id: faker.datatype.uuid(),  
  title: faker.name.fullName(),
  content: faker.name.fullName(),
  author: faker.company.name(),
  date: faker.date.between()
}));

export default inbox;


// Science Project Due Next Friday
// Hey everyone,

// Just a friendly reminder from your favorite teacher, me!
// The science project is due next Friday, April 14th.
// Let's make sure our students are ready to show off their science skills and creativity!
// Please take a quick look at your child's progress and help them wrap up any last-minute details.
// And don't forget to make sure they have all the necessary materials for their presentation.

// Thanks for your support and let's make this science project one for the books!

// Best, Teacher Ella