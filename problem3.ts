{
    //     Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

    // Example:

    // Input: "I love typescript", "typescript"
    // Output: 1
    // Sample Input:
    // countWordOccurrences("I love typescript", "typescript");

    // // Sample Output:
    // 1;



    const countWordOccurrences = (sentence: string, word: string): number => {
        let count: number = 0;
        const words = sentence.toLocaleLowerCase().split(" ")


        words.forEach((singleWord) => {
            if (singleWord === word.toLocaleLowerCase()) {
                count += 1
            }
        })
        return count

    }
    console.log(countWordOccurrences("I love typescript", "typescript"));










}