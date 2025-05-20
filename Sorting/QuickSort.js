

const quickSortingAlgorithm = (arr) => {

    const findPartitionIndex = (low, high) => {
        let pivot = arr[low];

        let i = low;
        let j = high;
       
        while(i < j){

            while(arr[i] <= pivot && i <= high){
                i++;
            }

            while(arr[j] > pivot && j >= low){
                j--;
            }

            if(i < j){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j]= temp;
            }

        }
            let temp = arr[low];
            arr[low] = arr[j];
            arr[j]= temp;

            return j;
    }


    const qs = (low, high)=>{
        if(low < high){
            let partitionIndex = findPartitionIndex(low, high);
            qs(low, partitionIndex - 1);
            qs(partitionIndex + 1, high);
        }
    }

    qs(0, arr.length-1);
    return arr;
}

console.log(quickSortingAlgorithm([4, 6, 2, 5, 7, 8, 1, 3]))

