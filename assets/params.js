import { mode } from '@/static/mode.js'

export const params = {
  str: {
    display: 'String',
    type: 'text',
    default: '123',
    size: 'half'
  },
  mode: {
    display: 'Mode',
    type: 'select',
    items: mode,
    default: 'number2kanji',
    size: 'quarter'
  }
}
