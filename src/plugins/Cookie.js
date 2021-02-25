class Cookie {
    get (name) {
        let cname = name + "="
        let ca = document.cookie.split(";")
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i].trim()
            if (c.indexOf(cname) === 0) {return c.substring(cname.length, c.length)}
        }
        return ""
    }

    set (name, value, exdays = 30) {
        const d = new Date()
        d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
        const expires = "expires" + d.toGMTString()
        document.cookie = `${name}=${value};${expires}`
    }

    del (name) {
        this.set(name, null, -1)
    }
}
export let _cookie = new Cookie()
export default function (Vue, options) {
    Vue.Cookie = new Cookie(options)
    Object.defineProperties(Vue.prototype, {
        $Cookie: {
            get () {
                return Vue.Cookie
            }
        }
    })
}
