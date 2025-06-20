
var peakElement = function(arr) {
    let n = arr.length;


    if(arr.length == 1){
        return 0;
    }

    if(arr[0] >  arr[1]){
        return 0;
    }

    if(arr[n-1] >  arr[n-2]){
        return n-1;
    }

    let low = 1;
    let high = arr.length - 2;
    
    while(low<=high){
        
        let mid = parseInt((low+high)/2);

        if(arr[mid] > arr[mid-1] && arr[mid] > arr[mid+1]){
            return mid
        }

        if(arr[mid] <= arr[high]){
            high = mid - 1;
        }else{
            low = mid + 1;
        }
    }
 
};


let arr = [1,2,3,4,5,6,7,8,5,1];

console.log(peakElement(arr))
