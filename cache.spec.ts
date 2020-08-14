import { Expect, Test, TestFixture } from "alsatian";
import * as c from "./cache";

@TestFixture("Cache Test Suite")
export class TestSuite {
    constructor() {
    }

    @Test("Test in-memory caching object proxy")
    async testSingleValidFollowedResource(): Promise<void> {
        const cache = c.lruCache();
        Expect(cache).toBeDefined();
    }
}
