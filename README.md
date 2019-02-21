# overmind.js `overmind-forms-example` demo

for overmind v15.1.2 & react v16.8.1 using @garth's `overmind-forms` package

[codesandbox demo](https://codesandbox.io/s/github/100ideas/overmind-forms-example/tree/codesandbox_v1)


![screenshot_2019-02-20.png](public/screenshot_2019-02-20.png)

**Note:** you may need to use a patched version of `overmind-forms` - see below

`overmind-forms` documentation here: https://github.com/garth/overmind-forms

**Related/better**: https://github.com/garth/state-forms. I integrated some of the validation code from `state-forms` into the `src/overmind/login` form code for this demo. It would probably be better to just adapt state-forms to overmind since it looks like its used more broadly.

---

## 20 Feb 2019 patch notes (@100ideas)
see https://github.com/100ideas/overmind-forms for details of patch

set up `package.json` to pull my fork of `overmind-forms` via 
```bash
yarn add https://github.com/100ideas/overmind-forms#hack
```

then `package.json` will look like
```json
//...
  "dependencies": {
    "axios": "0.18.0",
    "jsonata": "^1.6.4",
    "overmind": "15.1.2",
    "overmind-forms": "https://github.com/100ideas/overmind-forms#hack",
//...
```

or you can use `yarn link` to make changes to a local copy. You'll have to run `yarn build` in the package directory after changes. 

in case of problems on codesandbox, try the `codesandbox_v1` branch, hopefully it still works over there. https://github.com/100ideas/overmind-forms-demo/tree/codesandbox_v1

---
