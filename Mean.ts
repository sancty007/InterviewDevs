/**
 * @param {Array<number>} array - Array from which the elements are all numbers.
 * @return {number} Returns mean.
 */
export default function mean(array: number[]): number {
  // tester si le tableau est vide
  if (array.length == 0) {
    return NaN;
  }

  //Addition de chaque element du tableau
  let sumArray = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  // taille du tableau

  return sumArray / array.length;
  // puis retourner la valeur
}
mean([4, 2, 8, 6]); // => 5
mean([1, 2, 3, 4]); // => 2.5
mean([1, 2, 2]); // => 1.6666666666666667
