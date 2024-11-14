{
    // Sample Input:
    // removeDuplicates([1, 2, 2, 3, 4, 4, 5])

    // // Sample Output:
    // [1, 2, 3, 4, 5]

    const removeDuplicates = (props: number[]): number[] => {
        return props.filter((item, index) => {
            return props.indexOf(item) === index
        }
        )
    }
    console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));


}