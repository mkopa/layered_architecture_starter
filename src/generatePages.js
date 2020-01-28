module.exports = function generatePages({ current, maxPages }) {
    const start = Math.max(0, current - 5);
    const count = current < maxPages ? Math.min(10, maxPages - start) : 0;

    return range(count).map(i => ({
        start: start + i,
        isCurrent: start + i === current
    }));
};

// generate 0,1,2,3,...,count
function range(count) {
    return [...Array(count).keys()]
}