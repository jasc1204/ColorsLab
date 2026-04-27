function formatColor(color) {
  return color.trim().toLowerCase();
}

function isValidColor(color) {
  return color.trim().length > 0;
}

test("formats color input", () => {
  expect(formatColor("  Blue  ")).toBe("blue");
});

test("validates non-empty color input", () => {
  expect(isValidColor("red")).toBe(true);
  expect(isValidColor("   ")).toBe(false);
});