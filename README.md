# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).






<header class="fixed w-full mx-auto flex items-center justify-center z-10">
  <nav
    id="navbar"
    class="bg-white bg-opacity-5 px-2 sm:px-5 md:px-10 lg:px-20 w-full 
    grid grid-cols-3 justify-between items-center justify-center gap-10"
  >
    <section class="w-full h-24 col-span-2 flex items-center">
      <Logo class="w-20" />
    </section> 
    <section
      id="button_open_close"
      class="sm:hidden relative col-span-1 w-12 h-12 flex items-center justify-center cursor-pointer dark:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]"
    >
      <BarOpen id="bar-open" class="w-6 h-6" />
      <BarClose id="bar-close" class="w-6 h-6 hidden" />
    </section> 
    <section
      id="fields"
      class="relative gap-10 col-span-2 hidden w-full sm:flex px-2 py-2 transition hover:text-blue-500 dark:hover:text-blue-500 radio-canada"
    >
      {
        Fields.map((field) => (
          <a href={field.url} class="text-black dark:text-white">
            {field.name}
          </a>
        ))
      }
    </section>
  </nav>
</header>