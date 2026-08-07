<template>
  <main class="flex flex-col gap-y-8 max-w-2xl mx-auto py-8 px-4">
    <h1 class="text-5xl font-bold self-center">Twitch Extension Template</h1>
    <section>
      <p>This template is a starting point for building a Twitch extension using Vue 3 and Tailwind CSS.</p>
      <p>It includes a basic configuration and panel for your extension.</p>
    </section>
    <div class="bg-red-950 border-l-4 border-red-800 text-neutral-200 p-4 w-full text-sm flex flex-col gap-y-2">
      <div class="flex gap-2" aria-label="Browser notice">
        <button
          v-for="browser in browsers"
          :key="browser.value"
          type="button"
          class="border border-red-700 rounded px-3 py-1 font-semibold cursor-pointer"
          :class="selectedBrowser === browser.value ? 'bg-red-700 text-white' : 'bg-red-950 text-neutral-300 hover:bg-red-900'"
          :aria-pressed="selectedBrowser === browser.value"
          @click="selectedBrowser = browser.value"
        >
          {{ browser.label }}
        </button>
      </div>
      <template v-if="selectedBrowser === 'firefox'">
        <p><span class="font-bold">If you’re using Firefox for development</span>, open <span class="underline font-bold">about:config</span>, search for <span class="font-bold">network.lna.skip-domains</span>, and add <span class="font-bold">localhost</span> to its comma-separated value. Keep <span class="font-bold">network.lna.blocking</span> set to <span class="font-bold">true</span>.</p>
        <p>Recent Firefox versions enforce Local Network Access restrictions. Twitch loads local extensions through a cross-origin supervisor iframe, which Firefox may prevent from accessing localhost. Your extension HTML is then never loaded, resulting in a misleading “Extension Helper Library Not Loaded” warning or Local Network Access error.</p>
        <p><span class="font-bold">Security warning:</span> Adding localhost to <span class="font-bold">network.lna.skip-domains</span> allows any website you visit to attempt connections to services running on your computer. Only keep this exception for the duration of development, remove it afterward, and preferably use a dedicated Firefox development profile rather than your everyday browsing profile.</p>
      </template>
      <template v-else>
        <p>If your using <span class="font-bold">Google Chrome</span> for development and do not want to host your local development website on a real domain with SSL go to <span class="underline font-bold">chrome://flags/#local-network-access-check</span> and disable the Local Network Access Checks flag. </p>
        <p>Google introduced Local Network Access Checks in Chrome 142. While this is a great security feature, as long as Twitch does not update their local testing environment to ask for the permission, your extensions won't load at all in Local Test mode. Instead, you'll see a CORS error for the extensions html file you are trying to load (e.g. panel.html).</p>
        <p>Note: Only disable this flag for the duration of your development session. The flag itself is a great security feature and you should not disable it permanently, especially if you're using Chrome for your daily browsing.</p>
      </template>
    </div>
    <div class="bg-teal-950 border-l-4 border-teal-800 text-neutral-200 p-4 w-full text-sm flex flex-col gap-y-2">
      <p>This project runs on port <span class="font-semibold">8080</span> by default, which is configured to work seamlessly with Twitch's local testing environment.</p>
      <p><span class="font-semibold">NOTE:</span> To properly test code you write using the Twitch extension helper (window.Twitch.ext) you'll need to preview your code directly on Twitch.</p>
    </div>
    <div class="bg-yellow-950 border-l-4 border-yellow-800 text-neutral-200 p-4 w-full text-sm flex flex-col gap-y-2">
      <p>After setting up your extension on Twitch you must go to the <span class="underline">Asset Hosting</span> tab and change the <span class="font-bold">Testing Base URI</span> from https://localhost:8080 to <span class="font-bold">http</span>://localhost:8080!</p>
    </div>
    <section>
      <p>You can use this template to build your own extension.</p>
      <p>If you have any questions, please refer to the <a class="text-blue-500 underline" href="https://dev.twitch.tv/docs/extensions" target="_blank">Twitch Extension Documentation</a>.</p>
    </section>
    <nav class="flex flex-col gap-2">
      <p>The links below lead to the config, mobile and panel pages of your extension. You can use them to test your extension. They open in a new tab.</p>
      <section class="flex flex-row gap-2 self-center">
        <a class="text-blue-500 underline" href="/config" target="_blank">Config</a>
        <a class="text-blue-500 underline" href="/panel" target="_blank">Panel</a>
        <a class="text-blue-500 underline" href="/mobile" target="_blank">Mobile</a>
        <a class="text-blue-500 underline" href="/video_component" target="_blank">Video Component</a>
        <a class="text-blue-500 underline" href="/video_overlay" target="_blank">Video Overlay</a>
      </section>
      <p class="text-sm">All pages will be loaded within iframes on the Twitch website. Keep this in mind when developing your extension.</p>
      <p class="text-sm">The panel is set to a max-width of 318px. This is the maximum width of an iframe on Twitch.</p>
    </nav>
    <div class="flex flex-col gap-2 items-center text-gray-500 self-center mt-8">
      <a class="text-blue-500 underline" href="https://github.com/bamboechop/vue-twitch-extension" target="_blank">View the source code on GitHub</a>
      <p class="text-sm">This page is only available in development mode.</p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

type Browser = 'chrome' | 'firefox'

const browsers = [
  { label: 'Google Chrome', value: 'chrome' },
  { label: 'Firefox', value: 'firefox' },
] as const

const detectedBrowser: Browser = typeof navigator !== 'undefined' && /Firefox|FxiOS/i.test(navigator.userAgent)
  ? 'firefox'
  : 'chrome'

const selectedBrowser = ref<Browser>(detectedBrowser)
</script>

<style scoped>
</style>
