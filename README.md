Common Modules for Townhunt
==============

### Add the following to your package.json
```
  "townhunt_common": "https://github.com/Indie-Inc/townhunt_common.git"
```

### Setup webpack.config.js

```
  module: {
    loaders: [
      { test: /\.vue$/, loader: "vue" },
      { test: /\.js$|\.jsx$/, exclude: /^(?!.*node_modules\/townhunt_common).*(?=node_modules).*$|build/, loader: 'babel-loader'}
      // { test: /\.js$|\.jsx$/, exclude: /node_modules|build/, loader: 'babel-loader'}
    ]
  },
```

### Require modules in your JS
```
import ComponentMenuViewer from 'townhunt_common/js/components/menu/viewer/MenuViewer.vue'
```

### Run npm install