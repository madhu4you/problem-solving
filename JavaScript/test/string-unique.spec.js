describe("Suite for string unique", function () {
  var actulString;
  var expectString;
  beforeEach(function () {
    actulString = "f0ac,f1e9,f16e,f122,f106,f107,f105,f104,f231,f107,f0ac,f1e9,f16e,f122,f106,f105,f104,f231,f0ac,f1e9,f16e,f122,f106,f107,f105,f104,f10d";
    expectString = "f0ac, f1e9, f16e, f122, f106, f107, f105, f104, f231, f10d";
    output = stringUnique(actulString);
  });
  it("when string contains repeated word", function () {
    expect(output).toBe(expectString);
  });
});