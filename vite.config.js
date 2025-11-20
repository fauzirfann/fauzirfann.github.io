import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // PENTING: Ganti 'portfolio-fauzi' dengan nama repository GitHub Anda yang sebenarnya.
  // Jika Anda deploy ke user.github.io (halaman utama), hapus baris base ini atau isi '/'
  base: '/', 
})