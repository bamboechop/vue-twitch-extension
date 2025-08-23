# Vue Twitch Extension Template

A modern, production-ready template for building Twitch Extensions using Vue 3, TypeScript, and Vite. This template provides a solid foundation for creating interactive, responsive, and performant Twitch Extensions with all the modern tooling you need.

![License](https://img.shields.io/github/license/bamboechop/vue-twitch-extension)
![Twitch Extension](https://img.shields.io/badge/Twitch%20Extension-9146FF?logo=twitch&logoColor=fff)
![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?logo=vuedotjs&logoColor=fff)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?logo=tailwind-css&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-18%2B-6DA55F?logo=node.js&logoColor=white)

## 🚀 Features

- ⚡️ [Vue 3](https://vuejs.org/) with [Vite](https://vitejs.dev/) for lightning-fast development
- 📦 [TypeScript](https://www.typescriptlang.org/) for type safety and better developer experience
- 🎨 [Tailwind CSS](https://tailwindcss.com/) for rapid UI development
- 🔍 ESLint + Oxlint for code quality and consistency
- 📱 Responsive design with mobile-first approach
- 🛠️ Pre-configured for the following Twitch Extension view types: Panel and Mobile
- ⚙️ Includes Config view to offer customization options to streamers
- 🔥 Hot Module Replacement (HMR) for instant feedback during development

## 📋 Prerequisites

- Node.js 18+
- npm 9+ or yarn
- A Twitch Developer account

## 🚀 Getting Started

### Using the GitHub Template

1. Click the "Use this template" button on the GitHub repository page
2. Create a new repository with your desired name
3. Clone your new repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

### Manual Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/vue-twitch-extension.git
   cd vue-twitch-extension
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 📁 Project Structure

The project follows a modular architecture with clear separation of concerns:

- **Views**: Each Twitch Extension view (Panel, Mobile, Config, Video Component, Video Overlay) has its own Vue component and entry point
- **Shared Code**: Common interfaces and utilities are organized in the `common` directory
- **Configuration**: Multiple TypeScript configs handle different environments (app, node, base)
- **Build**: Vite configuration optimized for Twitch Extension development

The development server runs on port 8080, matching Twitch's local testing environment default.

## 💻 Development

The project includes several key entry points for different parts of your Twitch Extension:

- `src/App.vue` - Development landing page (only visible in development mode).
- `src/Config.vue` - Configuration page for broadcasters.
- `src/Mobile.vue` - The mobile view shown in the Twitch app.
- `src/Panel.vue` - Displays in a box under the video.
- `src/VideoComponent-vue` - Displays as part of the video, taking up part of the screen. Component Extensions can be hidden by viewers.
- `src/VideoOverlay.vue` - Displays on top of the whole video as a transparent overlay.

Each view has its own entry point in the `src` directory:
- `config.ts` - Entry point for the configuration view
- `mobile.ts` - Entry point for the mobile view
- `panel.ts` - Entry point for the panel view
- `video_component.ts` - Entry point for the video component view
- `video_overlay.ts` - Entry point for the video overlay view

The development server runs on port 8080 by default, which is configured to work seamlessly with Twitch's local testing environment. After starting the development server you'll be greeted by the development landing page which links to all available views for testing.

Remember that all views will be loaded within iframes on the Twitch website, and the panel has a maximum width of 318px.

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run type-check` - Run TypeScript type checking
- `npm run lint:eslint` - Run ESLint
- `npm run lint:oxlint` - Run Oxlint

## 🔧 Configuration

- Edit `vite.config.ts` for Vite configuration
- Modify `tsconfig.json` for TypeScript settings
- Update `eslint.config.ts` for linting rules

## 📚 Twitch Extension Development Resources

- [Developer Documentation](https://dev.twitch.tv/docs/extensions)
- [Developer Console](https://dev.twitch.tv/console/extensions)
- [Guidelines](https://dev.twitch.tv/docs/extensions/guidelines-and-policies)

## 🌟 Extensions Built with This Template

Here are some Twitch Extensions that were built using this template:

### [Upcoming Streams](https://dashboard.twitch.tv/extensions/fx3l6f5p9rssmjsbn4k0s8zq94rd85)
A sleek schedule panel showing up to 5 upcoming streams from your Twitch schedule. Help viewers stay informed about your streaming plans while seamlessly integrating with your channel's branding.

- **GitHub**: [bamboechop/twitch-extension-stream-schedule](https://github.com/bamboechop/twitch-extension-stream-schedule)
- **Features**:
  - Fully customizable appearance with fonts, colors, and display options
  - Smart co-streamer detection using @mentions in stream titles
  - Configurable event details including title, time, category, and co-streamers

> ### Add Your Extension
>
> Have you built a Twitch Extension using this template? We'd love to showcase it here! To add your extension:
>
> 1. Fork this repository
> 2. Add your extension to the list above with:
>    - Extension name and Twitch Extension ID
>    - Link to your GitHub repository (if public)
>    - Brief description (max ~200 characters)
>    - Brief feature list (max 3 items)
> 3. Submit a Pull Request

## 🤝 Contributing

We love your input, no matter how you want to contribute.

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

Please note that this project is released with a [Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

Check out our [Contributing Guide](CONTRIBUTING.md) for ways to get started.

## 💬 Community & Support

Join our community to get help, share feedback, or connect with other users and developers:

- 💬 [Join our Discord Community](https://discord.com/invite/c2wVV8ccYp)
- 🐛 [Report Issues](https://github.com/bamboechop/vue-twitch-extension/issues)

For bug reports and feature requests, please use [GitHub Issues](https://github.com/bamboechop/vue-twitch-extension/issues).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Vue 3](https://vuejs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Powered by [Twitch API](https://dev.twitch.tv/docs/api/)
