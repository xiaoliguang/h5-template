/**
 * v-pushData
 * @desc 埋点，点击元素上报信息
 * @example
 * ```vue
 * <div v-pushData="{accessPoint:'123',accessPointDesc:'测试push按钮',extData:{id:456}}">
 * ```
 */
import pushData from '@/assets/js/monitor'
export default {
    inserted(el, binding) {
        console.log(binding)
        el.handler = () => {
            pushData(binding.value.accessPoint, binding.value.accessPointDesc, binding.value.extData)
        }
        el.addEventListener('click', el.handler)
    },
    unbind(el) {
        el.removeEventListener('click', el.handler)
    }
}
