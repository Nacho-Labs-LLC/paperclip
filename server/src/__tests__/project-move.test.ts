import { describe, expect, it } from "vitest";
import { moveProjectSchema } from "@paperclipai/shared";

describe("moveProjectSchema", () => {
  it("accepts targetCompanyId with moveIssues true", () => {
    const result = moveProjectSchema.safeParse({
      targetCompanyId: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
      moveIssues: true,
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.moveIssues).toBe(true);
    }
  });

  it("accepts targetCompanyId without moveIssues (defaults to false)", () => {
    const result = moveProjectSchema.safeParse({
      targetCompanyId: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.moveIssues).toBe(false);
    }
  });

  it("accepts moveIssues false", () => {
    const result = moveProjectSchema.safeParse({
      targetCompanyId: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
      moveIssues: false,
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.moveIssues).toBe(false);
    }
  });

  it("rejects missing targetCompanyId", () => {
    const result = moveProjectSchema.safeParse({});
    expect(result.success).toBe(false);
  });

  it("rejects invalid UUID for targetCompanyId", () => {
    const result = moveProjectSchema.safeParse({ targetCompanyId: "not-a-uuid" });
    expect(result.success).toBe(false);
  });

  it("rejects non-boolean moveIssues", () => {
    const result = moveProjectSchema.safeParse({
      targetCompanyId: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
      moveIssues: "yes",
    });
    expect(result.success).toBe(false);
  });
});
