import { DefaultConfigOptions } from '@formkit/vue'
import { createAutoHeightTextareaPlugin, createAutoAnimatePlugin, createFloatingLabelsPlugin } from '@formkit/addons'

const config: DefaultConfigOptions = {
  plugins: [
    createAutoHeightTextareaPlugin(),
    createAutoAnimatePlugin(),
    createFloatingLabelsPlugin({ useAsDefault: true })
  ],
  config: {
    classes: {
      input: 'input'
    }
  }
}

export default config
