// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@layout': resolve(__dirname, 'src/layout/'),
      '@components': resolve(__dirname, 'src/components/'),
      '@views': resolve(__dirname, 'src/views/'),
      '@': resolve(__dirname, 'src/'),
      '@assets': resolve(__dirname, 'src/assets/'),
      '@service': resolve(__dirname, 'src/service/'),
      '@store': resolve(__dirname, 'src/store/'),
      '@utils': resolve(__dirname, 'src/utils/'),
      '@guard': resolve(__dirname, 'src/router/guard/')
    }
  },
  css: {
    extract: {
      ignoreOrder: true
    },
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/assets/scss/_variables.scss";
          @import "@/assets/scss/_mixins.scss";
          @import "@/assets/scss/_breakpoint.scss";`
      }
    }
  }
})
