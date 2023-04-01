import vue from "@vitejs/plugin-vue";
import laravel from "laravel-vite-plugin";
import IconsResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";
import Components from 'unplugin-vue-components/vite';
import {
    defineConfig
} from "vite";
export default defineConfig(
{
  plugins: [
    laravel(
    {
      input: "resources/js/app.js",
      ssr: "resources/js/ssr.js",
      refresh: true
    }),
    vue(
    {
      template:
      {
        transformAssetUrls:
        {
          base: null,
          includeAbsolute: false
        }
      }
    }),
    // ! Unplugin Icons
    Icons(
    {
      compiler: "vue3"
    }),
    Components(
    {
      // ! Auto Import Icons
      resolvers: [IconsResolver()]
    })
  ]
});
