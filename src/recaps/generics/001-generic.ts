function getFirstItem<T>(array: T[]) {
  return array[0];
}

const arr1 = [1, 23, 42, 4, 2, 4, 24];

const firstnum = getFirstItem(arr1); // the function type(number) autometically set to number because of ts infer behavior

const arr2 = ["sakib", "thamidul"];
const firstName = getFirstItem(arr2); // the function type(string) autometically set to number because of ts infer behavior

// we can explicitly set the generic value in function call like this
const arr3 = [1, 23, 42, 4, 2, 4, 24];

const firstNum2 = getFirstItem<number>(arr3);
