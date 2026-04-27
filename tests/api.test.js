function buildSearchResponse(results, error = "") {
  return {
    results,
    error
  };
}

test("API search response has expected JSON structure", () => {
  const response = buildSearchResponse(["red", "blue"]);

  expect(response).toHaveProperty("results");
  expect(response).toHaveProperty("error");
  expect(Array.isArray(response.results)).toBe(true);
  expect(response.error).toBe("");
});