let allSubsets = (input) => {
  let output = [];
  let subset = (index, set) => {
    if (index === input.length) {
      output.push(set);
      return;
    }
    subset(index + 1, set);
    subset(index + 1, set + input[index]);
  };
  subset(0, "");
  return output;
};

console.log(allSubsets(["a", "b", "c"]));
