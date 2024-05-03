function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat(pivot, quickSort(right));
}

// Ejemplo de uso
const array = [3, 0, 2, 5, -1, 4, 1];
console.log("Array original:", array);
const sortedArray = quickSort(array);
console.log("Array ordenado:", sortedArray);
