import { expect, it } from "vitest";

// type User = {
interface User {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}

/**
 * How do we ensure that defaultUser is of type User
 * at THIS LINE - not further down in the code?
 */
// const defaultUser: User = {
const defaultUser: User = {
  id: 1,
  firstName: "aaa",
  lastName: "bbb",
  isAdmin: false,
};
// } as User;

const getUserId = (user: User) => {
  return user.id;
};

// ES6, var -> let, const
const people = [
  { id: 1, name: "ala" },
  { id: 2, name: "bob" },
];
people.push({ id: 3, name: "alice" });

const people2 = people;
people2.push({ id: 4, name: "john" });

const personA = { id: 1, name: "ala" };
const personB = Object.assign({}, personA); // n-objects
const personC = { ...personA };
const personD = structuredClone(personA);

// let defaultUser: User;
// defaultUser = {firstName: "", id: 0, isAdmin: false, lastName: ""};

it("Should get the user id", () => {
  expect(getUserId(defaultUser)).toEqual(1);
});
