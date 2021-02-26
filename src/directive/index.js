const requireDirective = require.context(".", false, /\.js$/);
export default function(Vue) {
    requireDirective.keys().forEach(fileName => {
        if (fileName === "./index.js") return;
        let directive = requireDirective(fileName);
        Vue.directive(fileName.replace(/[\.|\/|.js]/g, ""), directive.default);
    });
}
