# ibm-portfoio

creating a portfolio with react and next.js goal is to connect to deploy with pipeline on deploy from github

`npm install `
`PATH="$HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH"`

## Create NextJS 13 app

`npm install yarn`

```bash
yarn create next-app

✔ What is your project named? … next-base
✔ Would you like to use TypeScript? … *No / Yes
✔ Would you like to use ESLint? … No / *Yes
✔ Would you like to use Tailwind CSS? … *No / Yes
✔ Would you like to use `src/` directory? … No / *Yes
✔ Would you like to use App Router? (recommended) … No / *Yes
✔ Would you like to customize the default import alias? … *No / Yes

cd carbon-tutorial-next
yarn dev
```

other commands of note:

- build
  next build
- ci-check
  yarn format:diff
- clean
  yarn cache clean && yarn install
- dev
  next dev
- format
  prettier --write "\*_/_.{js,md,scss}"
- format:diff
  prettier --list-different "\*_/_.{js,md,scss}"
- lint
  next lint
- start
  next start

Configure paths in `jsconfig.json`

```
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@/components/*": ["components/*"],
      "@/app/*": ["app/*"]
   }
  }
}
```

config your github instead of the Carbon in src/app/repos/page.js:

```
  const res = await octokitClient.request('GET /users/{username}/repos', {
    username: 'michelle-currier',
    per_page: 23,
    sort: 'updated',
    direction: 'desc',
  });
```
