const input = [4,1,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92];

const quickSort = (array) => {
    if (array.length === 1){
        return array;
    }

    const pivot = array[0];

    const lessThanOrEqual = [];
    const greaterThan = [];

    for (let i = 1; i < array.length; i++){
        if (array[i] > pivot) greaterThan.push(array[i]);
        else lessThanOrEqual.push(array[i]);
    }

    if (lessThanOrEqual.length > 0 && greaterThan.length > 0) {
        return [...quickSort(lessThanOrEqual), pivot, ...quickSort(greaterThan)]
    } else if (lessThanOrEqual.length > 0){
        return [...quickSort(lessThanOrEqual), pivot]
    } else {
        return [pivot, ...quickSort(greaterThan)]
    }


};

console.log(quickSort(input));
