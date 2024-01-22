import { expect, it } from "vitest";

// type Cache = {
//   [id: string]: string;
// }

const createCache = () => {
  // const cache: Cache = {}; // option 1
  const cache: Record<string, string> = {}; // option 2
  // const cache = new Map<string, string>(); // option 3

  const add = (id: string, value: string) => {
    cache[id] = value;
    // cache.set(id, value)
  };

  const remove = (id: string) => {
    delete cache[id];
    // cache.delete(id);
  };

  return {
    cache,
    add,
    remove,
  };
};

it("Should add values to the cache", () => {
  const cache = createCache();

  cache.add("123", "John");

  expect(cache.cache["123"]).toEqual("John");
});

it("Should remove values from the cache", () => {
  const cache = createCache();

  cache.add("123", "John");
  cache.remove("123");

  expect(cache.cache["123"]).toEqual(undefined);
});
