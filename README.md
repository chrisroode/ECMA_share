# ECMA_share
A collection of various little code bits.  Take what you want, and leave the rest.


## Installation instructions:
You need to have node and npm to run this.  This repository uses jest for unit tests.  It is the only dependency.


1) Clone this repository
2) Use the following command: $ npm install
3) Run the tests and see the magic: $ npm run test

## Some specifications
- All the code is in the /src folder.
- They are written as ecma modules, (.mjs).  All future modules will be created that way.  No, I'm not going to maintain commonJS files.  You can convert them if you like.
- Tests have .test.js extension and match the name of the file being tested.  There are commented out functions that can present more 'colorful' displays of the functions in action. They are commented out because it's no fun for jest to blow up your console when running the routine tests.

## Contributing
The best thing you can do to contribute is raise issues.  I don't plan to make this a collaborative repository.  It is merely a place where I like to place code snippets I created and found to be potentially helpful to the others.

No, I'm not going to make this an installable package.  That's what lodash and others are for. Again...take what you want, and leave the rest.

If, by chance, I happen to post anything in here that raises a copyright issue, I have done it out of ignorance.  Please let me know IMMEDIATELY, and I will remove it.