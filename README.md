# @adminjs/design-system

This package consists of all DesignSystem components from [AdminJS](https://adminjs.co) so you can use all of them outside the `adminjs` core.

It was created with the help of 2 amazing packages:

- [styled-components](https://styled-components.com)
- [styled-system](https://styled-stystem.com)

Make sure to check them out to use the full potential of this design system.

## Installation

```sh
yarn add @adminjs/design-system
```

Design System needs a `theme` so to use it you have to use `ThemeProvider` from `styled-components` like this:

```tsx
import { ThemeProvider } from 'styled-components'

// theme is the default theme, which you can alter
import { theme, Button, Box, Icon } from '@adminjs/design-system'

const App = () => (
  <ThemeProvider theme={theme}>
    <Box>
      <Button>
        <Icon icon="Plus" />
        Click Me
      </Button>
      <Button variant="contained" ml="xl">
        I am important
      </Button>
    </Box>
  </ThemeProvider>
)

export default App
```

## Changing theme

Design System provides you with the default [theme](https://adminjs.co/Theme.html). It contains all the parameters like paddings, colors, font sizes etc. For the list of all available parameters take a look at the [Theme spec](https://adminjs.co/Theme.html).

But nothing stands in a way of you changing the default theme. To do that you can use `combineStyles` method:

```tsx
import { combineStyles } from '@adminjs/design-system`

const myTheme = combineStyles({
  colors: {
    primary100: '#000'
  }
})

// ...
<ThemeProvider theme={myTheme}>
```

## Changing particular components

Sometimes you might want to change the look and feel of a particular component - not the entire theme. You can achieve that with `styled` method provided by `@adminjs/design-system/styled-components`:

```tsx
import { Button } from '@adminjs/design-system'
import { styled } from '@adminjs/design-system/styled-components'

const MyRoundedButton = styled(Button)`
  border-radius: 100px;
`
```

and then you can use it like a normal button component:

```html
<MyRoundedButton variant="outlined" color="primary"> Rounded I am </MyRoundedButton>
```

## Components

For the list of all the components and their documentation go to [adminjs.co](https://adminjs.co) or visit our [Storybook](https://adminjs-storybook.web.app/).

## Bundled packages

This npm package comes with bundled versions as well. You can find them under:

- `node_modules/@adminjd/design-system/bundle.development.js`
- `node_modules/@adminjs/design-system/bundle.production.js` (minified)

(they can also be bundled by using `bundle` script: `yarn bundle` or `NODE_ENV=production yarn bundle`)

To use them you will have to host them (put them in your 'public' folder) and then put them into the HEAD of your page:

```html
<head>
  <!-- ... -->
  <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
  <script
    crossorigin
    src="https://cdnjs.cloudflare.com/ajax/libs/styled-components/5.1.1/styled-components.js"
  ></script>
  <script crossorigin src="/bundle.development.js"></script>
  <!-- ... -->
</head>
```

## Contribute

If you find any UI errors - feel free to create a PR.

## Storybook

This repository contains also stories of components, which you can also find on our [Storybook](https://adminjs-storybook.web.app/) page. To run the storybook locally just run:

```sh
yarn storybook
```

## License

AdminJS is copyrighted © 2023 rst.software. It is a free software, and may be redistributed under the terms specified in the [LICENSE](LICENSE.md) file.

## About rst.software

<img src="https://pbs.twimg.com/profile_images/1367119173604810752/dKVlj1YY_400x400.jpg" width=150>

We’re an open, friendly team that helps clients from all over the world to transform their businesses and create astonishing products.

- We are available for [hire](https://www.rst.software/estimate-your-project).
- If you want to work for us - check out the [career page](https://www.rst.software/join-us).
