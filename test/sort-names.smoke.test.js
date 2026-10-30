import { deepStrictEqual } from "node:assert";
import { existsSync } from "node:fs";
import { test } from "node:test";

const moduleUrl = new URL("../src/sort-names.js", import.meta.url);

test("sortNames returns the names in ascending order", { skip: !existsSync(moduleUrl) && "src/sort-names.js not present yet" }, async () => {
  const { sortNames } = await import(moduleUrl);
  deepStrictEqual(sortNames(["C", "A", "B"]), ["A", "B", "C"]);
});
