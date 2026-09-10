import { sum } from "../utils/sum";

test("add two positive numbers", () => {
	expect(sum(5, 19)).toBe(24);
});
