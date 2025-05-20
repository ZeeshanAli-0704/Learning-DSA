const findLargest = (arr) =>{

    let largest =  -Infinity;

    for(let i=0 ; i<arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i]
        }
    }
  return largest
}

// console.log(findLargest([8, 10, 5, 7, 7, 9]));

const findSecondLargest = (arr) =>{

    let largest =  -Infinity;
    let sLargest = -Infinity;

    for(let i=0 ; i<arr.length; i++){
        if(arr[i] > largest){
            sLargest = largest
            largest = arr[i]
        }else if(largest != arr[i] && arr[i] > sLargest){
            sLargest=arr[i]
        }
    }
  return [sLargest, largest]
}

// console.log(findSecondLargest([8, 10, 5, 7, 7, 9]));
// console.log(findSecondLargest([8, 10, 5, 7, 7, 10]));


const findSecondSmallest = (arr) =>{

    let smallest  =  Infinity;
    let sSmallest = Infinity;

    for(let i=0 ; i<arr.length; i++){
        if(arr[i] < smallest){
            sSmallest = smallest
            smallest = arr[i]
        }else if(smallest != arr[i] && arr[i] < sSmallest){
            sSmallest=arr[i]
        }
    }
  return [smallest, sSmallest]
}

// console.log(findSecondSmallest([1, 10, 5, 7, 7, 9]));

const leftRotateByOne = (arr) =>{

}

// console.log(leftRotateByOne([1, 10, 5, 7, 7, 9]));


const moveZerosToLast1 = (arr) => {
    let low =  0;
    let high = arr.length-1;

    while(low <= high){
        if(arr[low] === 0){
            while(arr[high] == 0){
                high--
            };
            let temp = arr[low];
            arr[low] = arr[high];
            arr[high] = temp;

            high--;
        }         
        low++;
    }
    return arr;
}

// console.log(moveZerosToLast1([1 ,0 ,2 ,3 ,0 ,4 ,0 ,1]));


const moveZerosToLast = (arr) => {
    let low =  0;
    let high = 0;

    if(arr.length == 1){
        return arr;
    };


    while(high < arr.length){

        if(arr[low] != 0){
            low++;
            high++;
        }else{
            if(arr[low] === 0){

                while(arr[high] ==0 && high < arr.length){
                    high++
                };
                if (high < arr.length) {
                let temp = arr[low];
                arr[low] = arr[high];
                arr[high] = temp;

                low++;
                high++
                }
            }

        }


    }
    return arr;
}
// console.log(moveZerosToLast([0 ,1 ,2 ,3 ,0 ,4 ,0 ,1]));
// console.log(moveZerosToLast([1 ,0 ,2 ,3 ,0 ,4 ,0 ,1]));
// console.log(moveZerosToLast([1,2,0,1,0,4,0]));
console.log(moveZerosToLast([0,1,0,3,12]));