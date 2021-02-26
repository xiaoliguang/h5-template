
/**
 *
 * @desc 权限判断
 * @example
 * v-auth="`test`"
 */
export default {
    inserted: (el, binding, vnode) => {
        let value = binding.value;
        let auths = localStorage.getItem("btn_auths") || "";
        if (!auths.split(",").includes(value)) {
            el.parentNode.removeChild(el);
        }
    },
}
