import { faker } from '@faker-js/faker'
const tutorialList =[{
    key:0,
    avatar:faker.image.avatar(),
    title:faker.lorem.sentence({ min: 3, max: 5 }),
    description:faker.lorem.paragraph({ min: 1, max: 3 }),
    rating:"★5",
    author:faker.person.firstName()
},
{
    key:1,
    avatar:faker.image.avatar(),
    title:faker.lorem.sentence({ min: 3, max: 5 }),
    description:faker.lorem.paragraph({ min: 1, max: 3 }),
    rating: "★5",
    author:faker.person.firstName()
},
{
    key:2,
    avatar:faker.image.avatar(),
    title:faker.lorem.sentence({ min: 3, max: 5 }),
    description:faker.lorem.paragraph({ min: 1, max: 3 }),
    rating:"★5",
    author:faker.person.firstName()
}



]
export default tutorialList