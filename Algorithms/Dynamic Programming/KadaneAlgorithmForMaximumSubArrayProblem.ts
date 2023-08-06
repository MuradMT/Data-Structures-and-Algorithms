function msa(arr: number[]): number {
    let overallMax = arr[0];
    let currentMax = arr[0];
    for (let i = 1; i < arr.length; i++) {
      currentMax = Math.max(arr[i], arr[i] + currentMax);
      overallMax = Math.max(currentMax, overallMax);
    }
    return overallMax;
  }
  console.log(msa([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
  //Kadane Algorithm helps us to solve max sub array problem
  //This algorithm is one of the dynamic programming algorithms
  //time complexity o(n) and space complexity o(1)
  //this alghorithm beats brute force solution on time complexity