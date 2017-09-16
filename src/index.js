'use strict';

const app = require('./app');

const PORT = 8001;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));

/* Handle any rejected promises that do not have a registered
 * `catch` callback. Taking this approach for simplicity. The
 * better way: https://gist.github.com/jamesseanwright/ec2172c7ecf8410542dd70cc2072332b
 */
process.on('unhandledRejection', (message, promise) => {
    console.error(`Promise ${promise} threw ${message}!`);
})