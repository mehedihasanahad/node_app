module.exports = {
    inArray: (niddle, array) => {
        if (array.find((item) => niddle === item)) return true;
        return false;
    }
};
