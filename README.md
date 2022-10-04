

## A test for light/dark mode images using hashes (deprecated)


```
![Fancy logo](./dark.png#gh-dark-mode-only)
![Fancy logo](./light.png#gh-light-mode-only)
```
## A test for light/dark mode images using `picture`

```html
<picture>
  <source media="(prefers-color-scheme: light)" srcset="https://orai.io/images/logos/logo-full-h-light.png">
  <img alt="Text changing depending on mode. Light: 'So light!' Dark: 'So dark!'" src="https://orai.io/images/logos/logo-full-h-light.png">
</picture>
```

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://orai.io/images/logos/logo-full-h-dark.png">
  <img alt="Text changing depending on mode. Light: 'So light!' Dark: 'So dark!'" src="https://orai.io/images/logos/logo-full-h-dark.png">
</picture>

## A test for light/dark mode images using `picture` with relative paths 

```
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./dark.png">
  <img alt="Text changing depending on mode. Light: 'So light!' Dark: 'So dark!'" src="./light.png">
</picture>
```

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./dark.png">
  <img alt="Text changing depending on mode. Light: 'So light!' Dark: 'So dark!'" src="./light.png">
</picture>


reactjs-by-example
===========

Examples for "ReactJS by Example"

### Usage

See individual directories for usage  

Run a folder sample (in dev mode): **npm run chapter2**  

Run material ui sample (in dev mode): **npm start**  
Run material ui sample (in production mode): **npm build**  
Modify "scripts" field in **package.json** for custom running  


### Dependencies  

Use **npm show {pkg} version** to add the latest version  
This project is included with jQuery, bootstrap and material-ui all for once


