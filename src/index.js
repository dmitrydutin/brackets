module.exports = function check(str, bracketsConfig) {
    let brackets = "";

    bracketsConfig.forEach((item) => {
        brackets += item[0] + item[1];
    });

    let stack = [];

    for (let bracket of str) {
        let bracketsIndex = brackets.indexOf(bracket);

        if (bracketsIndex % 2 === 0) {
            if (
                stack.includes(bracketsIndex + 1) &&
                brackets[bracketsIndex] === brackets[bracketsIndex + 1]
            ) {
                if (stack.pop() !== bracketsIndex + 1) {
                    return false;
                }
            } else {
                stack.push(bracketsIndex + 1);
            }
        } else {
            if (stack.pop() !== bracketsIndex) {
                return false;
            }
        }
    }

    return stack.length === 0;
};
