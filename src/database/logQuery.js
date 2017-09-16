'use strict';

const { DateTimeFormat } = global.Intl;

const formatter = new DateTimeFormat('en-GB', {
    hour12: false,
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
});

module.exports = function logQuery({ sql }) {
    const date = `[${formatter.format(new Date())}]`;
    console.log(`${date} - new SQL query - ${sql}`);
};
