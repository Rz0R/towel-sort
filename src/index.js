module.exports = function towelSort(matrix = []) {
  const res = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2) {
      res.push(...matrix[i].sort((a, b) => b - a));
    } else {
      res.push(...matrix[i].sort((a, b) => a - b));
    }
  }
  return res;
}
