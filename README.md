# hello-cothority
A mobile-first progressive web app for all things cothority

## Info

The goal of this repository is to create a mobile-first progressive web app that connects and interacts with conodes from the cothority framework.

The goal is to have a **conode explorer**, a **skipchain explorer**, and **proof of personhood** features.

See [here](https://github.com/dedis/popcoins/tree/master/app/shared/lib/dedjs/object/pop) for an implementation of proof of personhood by DEDIS in javascript.

For now, the page only works in local. In the future it will be deployed to the blockchainstudentassociation servers.

This is because the page cannot be served over https (see [here](https://github.com/dedis/cothority/issues/1486))

Made with [React](https://reactjs.org/) and [bulma](https://bulma.io/).

Also see [create-react-app](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md)

## Future

Potential future features could be:
- Integrating with the coupons and messaging features being developed by DEDIS
- Email signature creation using personhood
- Voting using personhood
- Questionnaire linked to personhood
- Conode representation using personhood badge

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
yarn start
```

Now browse to [localhost:3000](http://localhost:3000/) :smile:
