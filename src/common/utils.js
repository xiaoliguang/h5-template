import Vue from "vue";
import { isString, isObject } from "./types";
import { _cookie } from "@/plugins/Cookie";
let ckKey = "ck";

export function getCk() {
    return _cookie.get(ckKey);
}

export function setCk(ck) {
    return _cookie.set(ckKey, ck);
}

export function removeCk() {
    return _cookie.remove(ckKey);
}

export function getURLParams() {
    const string = window.location.search;
    const obj = {};
    string
        .slice(1)
        .split("&")
        .map(item => {
            if (item !== "") {
                const arr = item.split("=");
                obj[arr[0]] = decodeURIComponent(decodeURIComponent(arr[1]));
            }
        });
    return obj;
}

export const escapeRegexpString = (value = "") =>
    String(value).replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");

// export const isIE = function() {
//     return !Vue.prototype.$isServer && !isNaN(Number(document.documentMode));
// };

// export const isEdge = function() {
//     return !Vue.prototype.$isServer && navigator.userAgent.indexOf("Edge") > -1;
// };

// export const isFirefox = function() {
//     return (
//         !Vue.prototype.$isServer &&
//         !!window.navigator.userAgent.match(/firefox/i)
//     );
// };

export const capitalize = function(str) {
    if (!isString(str)) {
        return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
};


export const sleepSync = function (ms) {
    let end = +new Date() + ms
    while (+new Date() < end) {}
}

export const sleep = function (ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

/*
 * @Description: 执行从左向右的函数组合。
 * @example:
    const add5 = x => x + 5
    const multiply = (x, y) => x * y
    const multiplyAndAdd5 = pipeFunctions(multiply, add5)
    multiplyAndAdd5(5, 2) -> 15
 */
export const pipeFunctions = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)))

/*
 * @Description: 如果页的底部可见, 则返回true, 否则为false
 */
const bottomVisible = () =>
document.documentElement.clientHeight + window.scrollY >= document.documentElement.scrollHeight || document.documentElement.clientHeight;

