/**
 *
 * @desc 点击按钮复制文案
 * @example
 * v-copy="`copyText`"
 */

export default {
    inserted(el, binding) {
        el.$value = binding.value;
        el.handler = () => {
            let textarea = document.createElement("textarea");
            textarea.readOnly = "readonly";
            textarea.style.position = "absolute";
            textarea.style.left = "-9999px";
            textarea.value = el.$value;
            document.body.appendChild(textarea);
            textarea.select();
            let result = document.execCommand("Copy");
            result && console.log("复制成功");
            document.body.removeChild(textarea);
        };
        el.addEventListener("click", el.handler);
    },
    componentUpdated(el, binding) {
        el.$value = binding.value;
    },
    unbind(el) {
        el.removeEventListener("click", el.handler);
    },
}
