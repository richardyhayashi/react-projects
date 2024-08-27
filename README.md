# React Projects

## Websites

### Design Ideas

* 'https://uidesigndaily.com'


## React App

### Create React Project

`$ npm create vite@latest {.|project-name} [-- --template react]`
`$ cd project-name` if not in diectory
`$ npm {i|install}`

### Set Port

In `vite.config.js`:<br>
`export default defineConfig({`<br>
`  ...`<br>
`  server: {`<br>
`    host: "0.0.0.0",`<br>
`    port: 3000,`<br>
`  },`<br>
`  ...`<br>
`})`

### Start Server

`$ npm run dev`
