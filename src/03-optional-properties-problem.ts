import { expect, it } from "vitest";

type Params = {
  first: string;
  last?: string;
  // last: string | undefined;
};

export const getName = (params: Params) => {
  if (params.last) {
    return `${params.first} ${params.last}`; // param.first + params.last
  }
  return params.first;
};

it("Should work with just the first name", () => {
  const name = getName({
    first: "John",
    // last: undefined
  });

  expect(name).toEqual("John");
});

it("Should work with the first and last name", () => {
  const name = getName({
    first: "John",
    last: "Doe",
  });

  expect(name).toEqual("John Doe");
});
