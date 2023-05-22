# DemoApp.Blazor

[Source](https://chrissainty.com/adding-tailwind-css-v3-to-a-blazor-app/)

## Prerequisites

`npm install -g tailwindcss cross-env`

`npx tailwindcss init`

## Add app.css

`New-Item Styles/app.css -Force`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Add plugins

`npm install @tailwindcss/forms`
`npm install @tailwindcss/typography`
`npm install @tailwindcss/line-clamp`
`npm install daisyui`

## Edit tailwind.config.js

Load the plugins and add the content paths.

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{Pages,Shared}/**/*.{razor,html,cshtml}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["emerald", "dark", "bumblebee"],
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography"), require("daisyui")],
};
```

## Run and Watch

`npx tailwindcss -i ./Styles/app.css -o ./wwwroot/app.css --watch`

## Add as a script to package.json

```json
"scripts": {
  "tailwind": "cross-env NODE_ENV=development ./node_modules/tailwindcss/lib/cli.js -i ./Styles/app.css -o ./wwwroot/app.css --watch"
},
```

## Add capability to use dotnet watch run

`dotnet add package Tailwind.Extensions.AspNetCore --prerelease`

## Update Program.cs

```cs
using Tailwind;

...

if (app.Environment.IsDevelopment())
{
    app.RunTailwind("tailwind", "./");
}
```
