const input = [4, 1, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];

const insertionSort = (array) => {
    if (array.length === 1) {
        return array;
    }

    let sortedArray = [];

    array.forEach(element => {
        if (sortedArray.length === 0) {
            sortedArray.push(element);
        } else {
            let lastElementIndex = sortedArray.length - 1;
            sortedArray.push(element)
            if (sortedArray[lastElementIndex] > element) {
                for (let i = sortedArray.length - 2; i >= 0; i--) {
                    if (sortedArray[i] > element) {
                        let temp = sortedArray[i];
                        sortedArray[i] = element;
                        sortedArray[i + 1] = temp;
                    }
                }
            }
        }
    })

    return sortedArray;

};

console.log(insertionSort(input))
