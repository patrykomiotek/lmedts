import { expect, it } from "vitest";

interface Post {
  id: number;
  title: string;
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: "admin" | "user" | "super-admin";
  posts: Post[];
}

/**
 * How do we ensure that makeUser ALWAYS
 * returns a user?
 */
const makeUser = (): User => {
  return {
    id: 1,
    firstName: "Jan",
    lastName: "Kowalski",
    role: "admin",
    posts: [
      {
        id: 1,
        title: "Lorem ipsum",
      },
    ],
  };
};

type MakeUserFn = typeof makeUser;
type MakeUserReturnType = ReturnType<typeof makeUser>;

it("Should return a valid user", () => {
  const user = makeUser();

  expect(user.id).toBeTypeOf("number");
  expect(user.firstName).toBeTypeOf("string");
  expect(user.lastName).toBeTypeOf("string");
  expect(user.role).to.be.oneOf(["super-admin", "admin", "user"]);

  expect(user.posts[0].id).toBeTypeOf("number");
  expect(user.posts[0].title).toBeTypeOf("string");
});
