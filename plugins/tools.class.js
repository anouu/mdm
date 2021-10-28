export class Tools {
  formattedPrice(rawPrice, currency = '€') {
    return `${parseFloat(rawPrice).toFixed(2).replace('.', ',')} ${currency}`
  }

  debounce(fn, delay) {
    let timeoutID = null

    return () => {
      clearTimeout(timeoutID)
      const args = arguments
      const that = this
      timeoutID = setTimeout(() => {
        fn.apply(that, args)
      }, delay)
    }
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }
}
