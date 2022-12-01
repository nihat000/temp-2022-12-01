class LargeInt {
    constructor(num = 0 , arr = [] ){
        this.arr = arr
        while (num >= 1 ){
            this.arr.unshift ( num%10)
            num = ( num -num%10) / 10
        }
    }
    
    plus(obj){
        let big ,small ,arr = [] ,index,result = 0;
        console.log(obj)
        if (this.arr.length > obj.arr.length){
            big = [ ...this.arr ] ;
            small = [ ...obj.arr] ;
        }else{
            big =  [ ...obj.arr]
            small = [ ...this.arr]
        }
        for (let i=0;i < small.length ; i++){
            
            let res,rank=0
            res  = small[small.length-1-i] + big[big.length-1-i]
            if (res >= 10){
                res -=10
                rank++
            }
            console.log('debug',res,rank)

             arr[i] =  arr[i] === undefined ? res  : arr[i] + res
            arr[i+1] = rank
            console.log(arr)
        }
        arr.reverse()
        if (arr[0] == 0 ) {
            arr.shift(0)
        }

        
        

        
    
    }
    minus(obj){

    }
}

let num1 = new LargeInt(29)
let num2 = new LargeInt(225)


let num3 = num1.plus(num2)