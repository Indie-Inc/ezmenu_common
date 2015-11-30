Common Modules for EZMenu
==============

### Add the following to your package.json
```
  "ezmenu_common": "https://github.com/Indie-Inc/ezmenu_common.git"
```

### Setup webpack.config.js

```
  module: {
    loaders: [
      { test: /\.vue$/, loader: "vue" },
      { test: /\.js$|\.jsx$/, exclude: /^(?!.*node_modules\/ezmenu_common).*(?=node_modules).*$|build/, loader: 'babel-loader'}
      // { test: /\.js$|\.jsx$/, exclude: /node_modules|build/, loader: 'babel-loader'}
    ]
  },
```

### Require modules in your JS
```
import ComponentMenuViewer from 'ezmenu_common/js/components/menu/viewer/MenuViewer.vue'
```

### Run npm install