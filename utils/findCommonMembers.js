function findCommonMembers(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return [];   // to check if the input is an array
  const set1 = new Set(arr1);
  return arr2.filter((x) => set1.has(x));  // to find the common members
}

module.exports = findCommonMembers;
