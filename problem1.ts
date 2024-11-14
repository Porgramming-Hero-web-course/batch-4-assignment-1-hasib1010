{
    // Sample Input:
    // sumArray([1, 2, 3, 4, 5]);

    // // Sample Output:
    // 15;


    function sumArray(props: number[]): number {
        let sum: number = 0;
        props.forEach(num => {
            sum += num
        })
        return sum
    }



    console.log(sumArray([1, 2, 3, 4, 5]));






























}