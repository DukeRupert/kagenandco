// vite.config.js
import { sentrySvelteKit } from "file:///workspace/kagenandco/node_modules/.pnpm/@sentry+sveltekit@7.106.1_@sveltejs+kit@2.5.4_svelte@4.2.12/node_modules/@sentry/sveltekit/cjs/index.server.js";
import { sveltekit } from "file:///workspace/kagenandco/node_modules/.pnpm/@sveltejs+kit@2.5.4_@sveltejs+vite-plugin-svelte@3.0.2_svelte@4.2.12_vite@5.1.6/node_modules/@sveltejs/kit/src/exports/vite/index.js";
import { enhancedImages } from "file:///workspace/kagenandco/node_modules/.pnpm/@sveltejs+enhanced-img@0.1.8_svelte@4.2.12/node_modules/@sveltejs/enhanced-img/src/index.js";
import { defineConfig } from "file:///workspace/kagenandco/node_modules/.pnpm/vite@5.1.6/node_modules/vite/dist/node/index.js";
var vite_config_default = defineConfig({
  plugins: [
    sentrySvelteKit({
      sourceMapsUploadOptions: {
        org: "firefly-software",
        project: "kagenandco",
        authToken: process.env.SENTRY_AUTH_TOKEN
      }
    }),
    enhancedImages(),
    sveltekit()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvd29ya3NwYWNlL2thZ2VuYW5kY29cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi93b3Jrc3BhY2Uva2FnZW5hbmRjby92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vd29ya3NwYWNlL2thZ2VuYW5kY28vdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBzZW50cnlTdmVsdGVLaXQgfSBmcm9tICdAc2VudHJ5L3N2ZWx0ZWtpdCc7XG5pbXBvcnQgeyBzdmVsdGVraXQgfSBmcm9tICdAc3ZlbHRlanMva2l0L3ZpdGUnO1xuaW1wb3J0IHsgZW5oYW5jZWRJbWFnZXMgfSBmcm9tICdAc3ZlbHRlanMvZW5oYW5jZWQtaW1nJztcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuXG4vKiogQHR5cGUge2ltcG9ydCgndml0ZScpLlVzZXJDb25maWd9ICovXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuXHRwbHVnaW5zOiBbXG5cdFx0c2VudHJ5U3ZlbHRlS2l0KHtcblx0XHRcdHNvdXJjZU1hcHNVcGxvYWRPcHRpb25zOiB7XG5cdFx0XHRcdG9yZzogJ2ZpcmVmbHktc29mdHdhcmUnLFxuXHRcdFx0XHRwcm9qZWN0OiAna2FnZW5hbmRjbycsXG5cdFx0XHRcdGF1dGhUb2tlbjogcHJvY2Vzcy5lbnYuU0VOVFJZX0FVVEhfVE9LRU5cblx0XHRcdH1cblx0XHR9KSxcblx0XHRlbmhhbmNlZEltYWdlcygpLFxuXHRcdHN2ZWx0ZWtpdCgpXG5cdF1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpUCxTQUFTLHVCQUF1QjtBQUNqUixTQUFTLGlCQUFpQjtBQUMxQixTQUFTLHNCQUFzQjtBQUMvQixTQUFTLG9CQUFvQjtBQUc3QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMzQixTQUFTO0FBQUEsSUFDUixnQkFBZ0I7QUFBQSxNQUNmLHlCQUF5QjtBQUFBLFFBQ3hCLEtBQUs7QUFBQSxRQUNMLFNBQVM7QUFBQSxRQUNULFdBQVcsUUFBUSxJQUFJO0FBQUEsTUFDeEI7QUFBQSxJQUNELENBQUM7QUFBQSxJQUNELGVBQWU7QUFBQSxJQUNmLFVBQVU7QUFBQSxFQUNYO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
