
function binarySearch(arr, target) {

    let low = 0
    let high = arr.length-1;

    while(low<=high){
        let mid = Math.floor((low + high)/2);

        if(target === arr[mid]){
            return mid;
        }

        if(arr[mid] < target){
            low = mid+1;
        }else{
            high = mid-1;
        }
    }

    return -1;
}


let arr = [3, 4, 6, 7, 9, 12, 16, 17];
let target = 6;

console.log(binarySearch(arr, target))