# hello-cothority
A frontend that connects to conodes

## Info

The goal of this repository is to create a frontend, that connects and interacts with conodes from the cothority framework.

For now, the page only works in local. In the future it will be deployed to the blockchainstudentassociation servers.

This is because the page cannot be served over https (see [here](https://github.com/dedis/cothority/issues/1486))

Made with [next.js](https://nextjs.org/) and [bulma](https://bulma.io/).

## Setup

Clone the repository:

```
git clone https://github.com/blockchainstudentassociation/hello-cothority
cd hello-cothority
```

Install the dependencies with [yarn](https://yarnpkg.com/en/):

```
yarn
```

Run the project:

```
yarn dev
```

Now browse to [localhost:3000](http://localhost:3000/) :smile:
