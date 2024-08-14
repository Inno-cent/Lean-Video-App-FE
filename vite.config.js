// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@layout': path.resolve(__dirname, 'src/layout/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@views': path.resolve(__dirname, 'src/views/'),
      '@': path.resolve(__dirname, 'src/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@service': path.resolve(__dirname, 'src/service/'),
      '@store': path.resolve(__dirname, 'src/store/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@guard': path.resolve(__dirname, 'src/router/guard/')
    }
  }
})
