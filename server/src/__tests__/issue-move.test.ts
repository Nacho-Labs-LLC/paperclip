import { describe, expect, it } from "vitest";
import { moveIssueSchema } from "@paperclipai/shared";

describe("moveIssueSchema", () => {
  it("accepts targetCompanyId only", () => {
    const result = moveIssueSchema.safeParse({ targetCompanyId: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee" });
    expect(result.success).toBe(true);
  });

  it("accepts targetProjectId only", () => {
    const result = moveIssueSchema.safeParse({ targetProjectId: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee" });
    expect(result.success).toBe(true);
  });

  it("accepts targetGoalId only", () => {
    const result = moveIssueSchema.safeParse({ targetGoalId: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee" });
    expect(result.success).toBe(true);
  });

  it("accepts all fields together", () => {
    const result = moveIssueSchema.safeParse({
      targetCompanyId: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
      targetProjectId: "bbbbbbbb-cccc-dddd-eeee-ffffffffffff",
      targetGoalId: "cccccccc-dddd-eeee-ffff-aaaaaaaaaaaa",
    });
    expect(result.success).toBe(true);
  });

  it("accepts null targetProjectId with targetCompanyId", () => {
    const result = moveIssueSchema.safeParse({
      targetCompanyId: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
      targetProjectId: null,
    });
    expect(result.success).toBe(true);
  });

  it("rejects empty body", () => {
    const result = moveIssueSchema.safeParse({});
    expect(result.success).toBe(false);
  });

  it("rejects invalid UUID for targetCompanyId", () => {
    const result = moveIssueSchema.safeParse({ targetCompanyId: "not-a-uuid" });
    expect(result.success).toBe(false);
  });

  it("rejects when all fields are undefined (explicitly)", () => {
    const result = moveIssueSchema.safeParse({
      targetCompanyId: undefined,
      targetProjectId: undefined,
      targetGoalId: undefined,
    });
    expect(result.success).toBe(false);
  });
});
