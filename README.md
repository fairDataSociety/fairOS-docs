# FairOS Documentation Website

Documentation for the [FairOS](https://github.com/fairDataSociety/fairOS-dfs). View at [https://docs.fairos.fairdatasociety.org/docs/](https://docs.fairos.fairdatasociety.org/docs/).

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

```
$ npm run generate
```


## License

This documentation is provided under the [Creative Commons License](https://github.com/fairDataSociety/fairOS-docs/blob/master/License-docs)
