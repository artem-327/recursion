type Tree = Record<string, number | NestedTree>;
interface NestedTree extends Tree {}
/**
 *
 * @param prop Tree
 * @returns A unique (non-duplicate), sorted array of numbers
 */
const getUniqueSortedNumbers = (prop: Tree): number[] => {
    let uniqueSortedNumbers: number[] = [];
    const sortUniqueNumbers = (prop: Tree): void => {
        Object.keys(prop).forEach((key) => {
            const value = prop[key];
            if (typeof value === "number") {
                if (!uniqueSortedNumbers.includes(value)) {
                    uniqueSortedNumbers = [...uniqueSortedNumbers, value];
                }
                return;
            } else {
                return sortUniqueNumbers(value);
            }
        });
    };
    sortUniqueNumbers(prop);
    return uniqueSortedNumbers.sort();
};
const uniqueNumbers = getUniqueSortedNumbers({
    a: {
        x: 5,
        y: {
            d: 0,
            e: 2,
            f: {
                g: 4
            },
            z: 8,
            a: 0
        }
    }
});
console.log(uniqueNumbers);
