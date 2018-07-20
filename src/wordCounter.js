function wordCounter(text, minLength) {
    var result = {};

    text = text.toLowerCase().replace(/[\.\,\?\!\-']/gm,' ');

    var wordsStr = text.split(' ');

    wordsStr.forEach(
        function(word) {
            if (word.length >= minLength) {
                if (result[word] === undefined) {
                    result[word] = 0;
                }
                result[word]++;
            }
        }
    );

    return result;
}

module.exports = wordCounter;
