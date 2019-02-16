// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
        production: false,
        hmr: false,
        // API_DOMAIN: 'http://localhost:1337',
        // API_ENDPOINT: 'http://localhost:1337/api/v1',
        // whitelist: ['http://localhost:1337'],
        // API_DOMAIN: 'http://192.168.1.5:3000/api/v1',
        // API_ENDPOINT: 'http://192.168.1.5:3000/api/v1',
        // whitelist: ['http://localhost:3000/api/v1'],
        API_DOMAIN: 'http://localhost:3000/api/v1',
        API_ENDPOINT: 'http://localhost:3000/api/v1',
        whitelist: ['http://localhost:3000/api/v1'],
        IMAGE_ENDPOINT: ''
    }
;
