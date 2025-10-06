// theme/tailwind.config.mjs
import tokensConfig from './tailwind.tokens.mjs'

export default {
  content: tokensConfig.content,
  theme: {
    extend: {
      ...tokensConfig.theme.extend
    }
  },
  plugins: [...(tokensConfig.plugins || [])]
}
