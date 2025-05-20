const mergeSorting = (arr) =>{

    const merge = (start, mid, end) => {
        let leftArray = [];
        let rightArray = [];

        for(let i = start; i <= mid; i++){
            leftArray.push(arr[i]);
        }

        for(let i = mid+1; i<= end; i++){
            rightArray.push(arr[i]);
        }

        let i=0;
        let j=0;
        let k = start;

        while(i < leftArray.length && j < rightArray.length){
            if(leftArray[i] < rightArray[j]){
                arr[k]=leftArray[i];
                i++;
                k++;
            }else{
                arr[k]=rightArray[j];
                j++;
                k++;
            }
        }

        while (i < leftArray.length) {
            arr[k] = leftArray[i];
            i++;
            k++;
        }
    
        while (j < rightArray.length) {
            arr[k] = rightArray[j];
            j++;
            k++;
        }


    }

    const mergeSort = (start, end) => {
        if(start>=end){
            return;
        }

        let low =  start;
        let high = end;
        let mid = Math.floor((start+end)/2);

        mergeSort(low, mid);
        mergeSort(mid+1, high);
        merge(low, mid, high);
    }

    mergeSort(0, arr.length-1);
    return arr;
}


console.log(mergeSorting([38, 27, 43, 3]));

/** 
                                const array = [38, 27, 43, 3];

                                            1st
                                            start  = 0
                                            end = 3
                                            return 


                            2nd                               2nd
                            start  = 0                        start = 2 
                            End = 1                           End = 3
                            return                            return 

                    3rd              3rd               3rd                  3rd
                    start  = 0       start  = 1        start  = 2           start  = 3
                    End = 0          End = 1           End = 2              End = 3
                    return           return            return               return
*/
