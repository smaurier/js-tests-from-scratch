function truncate(str, length) {
    if (str.length <= length) {
        return str + (str.length < length ? '...' : '');
    }
    return str.slice(0, length) + '...';
}

module.exports = { truncate };