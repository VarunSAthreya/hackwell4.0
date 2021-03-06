# [Hackwell 4.0](http://hackwell4-0.vercel.app/)

Official website for the 4<sup>rd</sup> edition of Hackwell conducted by [JSSATEB](https://jssateb.ac.in/) and [HoneyWell](https://honeywell.com/).

## Prerequisite

- [NodeJS](https://nodejs.org/)
- [PNPM](https://pnpm.io/)

## Tech Stack

- [NextJS](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Chakra UI](https://chakra-ui.com/)
- [Firebase](https://firebase.google.com/)

## Getting Started

### Installing Dependencies

```bash
    pnpm i
```

### Adding environment variables

Create a `.env.local` file and add firebase credentials.

```.env
NEXT_PUBLIC_FIREBASE_API_KEY = <Firebase API key>
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN = <Firebase Auth Domain>
NEXT_PUBLIC_FIREBASE_PROJECT_ID = <Firebase Project ID>
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET = <Firebase Storage Bucket link>
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID = <Firebase Messaging sender ID>
NEXT_PUBLIC_FIREBASE_APP_ID = <Firebase App ID>
NEXT_PUBLIC_MEASUREMENT_ID = <Firebase Measurement ID>
```

### Running the project

- In Development mode

```bash
pnpm dev
```

- In Production mode

```bash
pnpm start
```

`Note: Make sure to build before start in production mode.`

## Deploying

To know about deploying, please visit [here](https://nextjs.org/docs/deployment).
