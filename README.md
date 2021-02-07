# FairOS Documentation Website

Documentation for the [FairOS](https://github.com/fairDataSociety/fairOS-dfs). View at [https://fairos.io](https://fairos.io).

### Node Version

You must use **node 14** or above. We recommend [nvm](https://github.com/nvm-sh/nvm).

### Installation

```
$ npm i
```

### Local Development

```
$ npm start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Bumping Version

Don't forget to find and replace the version number for the whole of the docs folder. 

## How to generate / include the API reference html

**NOTE: when this is done, the docs will have to be rebuilt.**

1. Get the OpenAPI YAML source files from which the documentation is generated. They can be found in the [openapi folder of fairOS-dfs repo](https://github.com/fairDataSociety/fairOS-dfs/tree/master/openapi).
2. Generate the `index.html` file for the API docs via : `npx redoc-cli bundle dfs.yaml -o ./static/api/index.html --disableGoogleFont --options.expandDefaultServerVariables "true"`
5. Rebuild and redeploy docs.
