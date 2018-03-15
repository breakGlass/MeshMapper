# In Case Of Emergency Resource Map
A resouce map designed for mesh networks to plot available resources during an emergency.

This is a redesign based off of our original InCaseOfEmergency repo but simpliflied.

It has an ejs view frontend instead of react and uses a decentralized databse, Blockstack instead of a SQL database.

## Getting started

Clone the repo and run `npm install` to install the dependancies.

set up secret.js
touch `public/javascripts/secret.js`

```
console.log('secret connected');

// MAP BOX API KEY
 const MAPBOX_API_KEY = 'YOUR API KEY';
 
```

Use `npm start` to run the Server on [localhost:3000](localhost:3000)

### EJS Cheat Sheet
  [ejs docs](http://ejs.co/)
__Tags__

  *  `<%` 'Scriptlet' tag, for control-flow, no output
  *  `<%=` Outputs the value into the template (HTML escaped)
  *  `<%-` Outputs the unescaped value into the template
  *  `<%#` Comment tag, no execution, no output
  *  `<%%` Outputs a literal '<%'
  *  `%>` Plain ending tag
  *  `-%>` Trim-mode ('newline slurp') tag, trims following newline
