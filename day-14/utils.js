
// const headingLowerCase2 = heading.toLowerCase();
// // console.log('result: ', headingLowerCase2.replace('split', "join"))
// console.log('originalString: ', heading2)
// console.log('lowercase: ', headingLowerCase2)
// console.log('result: ', headingLowerCase2.replaceAll(' ', "-"))
// console.log('result: ', headingLowerCase2.replaceAll(' ', "-").replaceAll('-', "_"))
 
const convertTitleToURLString = (heading, replaceStr, replaceWith) => {

    if (!heading || !replaceStr || !replaceWith) {
        return 'EMPTY';
    }

    if (typeof(heading) !== 'string') {
        return 'Invalid type';
    }

    const lowerCaseHeading = heading.toLowerCase().replaceAll(replaceStr, replaceWith);
    return lowerCaseHeading;
}

const capitalizeFirstChar = (word) => {

    if (!word) {
        return '';
    }

    const firstChar = word[0].toUpperCase();
    const restOfTheChars = word.slice(1);
    return firstChar + restOfTheChars;

}