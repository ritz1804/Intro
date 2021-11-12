import './style.scss'
import Sentence from './Sentence'
import check from './check.js'

const config = {
  threshold: 400,
  el: document.querySelector('#slide')
}

const sentence = new Sentence('-Scroll_now *Ritesh *Nehru is a young @creative @developer from India. :) You can check out his design work on (https://www.behance.net/riteshnehru)Behance, and discover his past and current dev projects on (https://github.com/ritz1804)GitHub. .... Feel free to *(https://www.instagram.com/ritesh_nehru/)say_hello.')
const elems = sentence.parse()

document.body.style.height = `${elems.length * config.threshold}px`

let currentSlideIndex = 0

check(config, elems, currentSlideIndex)