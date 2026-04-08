class CookieManager {
  constructor() {
    this.expiryDays = 365
  }

  setCookie(name, value, days = this.expiryDays) {
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    document.cookie = `${name}=${encodeURIComponent(value)};expires=${date.toUTCString()};path=/`
  }

  getCookie(name) {
    const matches = document.cookie.match(new RegExp(
      '(?:^|; )' + name.replace(/([.$?*|{}()\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
    ))
    return matches ? decodeURIComponent(matches[1]) : null
  }

  deleteCookie(name) {
    this.setCookie(name, '', -1)
  }

  cookieExists(name) {
    return this.getCookie(name) !== null
  }
}

export default CookieManager
