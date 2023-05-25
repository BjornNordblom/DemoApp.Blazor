# DemoApp.Blazor

[Source](https://chrissainty.com/adding-tailwind-css-v3-to-a-blazor-app/)

## Todo
- [ ] Check out https://github.com/App-vNext/Polly

## Install

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

# MudBlazor

[MudBlazor instructions](https://mudblazor.com/getting-started/installation#manual-install-add-font-and-style-references)

## Install

`dotnet add package MudBlazor`

## Update \_Imports.razor

```cs
@using MudBlazor
```

## Update \_Host.cshtml

Head:

```html
<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
<link href="_content/MudBlazor/MudBlazor.min.css" rel="stylesheet" />
```

Bottom of file:

```html
<script src="_content/MudBlazor/MudBlazor.min.js"></script>
```

## Update Program.cs

```cs
using MudBlazor.Services;

...

builder.Services.AddMudServices();
```

## Update MainLayout.razor

```html
<MudThemeProvider />
<MudDialogProvider />
<MudSnackbarProvider />

<MudLayout>
  <MudAppBar>
    <MudIconButton
      Icon="@Icons.Material.Filled.Menu"
      Color="Color.Inherit"
      Edge="Edge.Start"
      OnClick="@((e) => DrawerToggle())"
    />
    My Application
  </MudAppBar>
  <MudDrawer @bind-Open="@_drawerOpen">
    <NavMenu />
  </MudDrawer>
  <MudMainContent> @Body </MudMainContent>
</MudLayout>

@code { bool _drawerOpen = true; void DrawerToggle() { _drawerOpen = !_drawerOpen; } }
```

# ApexCharts

## Install

`dotnet add package Blazor-ApexCharts --prerelease`

## Update \_Imports.razor

```cs
@using ApexCharts
```

## Update \_Host.cshtml

```html
<script src="_content/Blazor-ApexCharts/js/apex-charts.min.js"></script>
<script src="_content/Blazor-ApexCharts/js/blazor-apex-charts.js"></script>
```
