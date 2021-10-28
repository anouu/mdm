import { Tools } from './tools.class'

export default ({ app }, inject) => {
  const tools = new Tools()

  inject('tools', tools)
}
