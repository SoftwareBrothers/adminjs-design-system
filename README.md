# @admin-bro/design-system

This package consist of all DesignSystem components from [AdminBro](adminbro.com) so you can use all of them outside the @admin-bro/core.

It was created with the help of 2 amazing packages:

- [styled-components](styled-components.com) which is a peerDependency
- [styled-system](styled-stystem.com)

## Installation

```
yarn add styled-components @admin-bro/design-system
```

Optionally, if you use typescript, you might want to install types for `styled-components`

```
yarn add --dev @types/styled-components
```

Design System needs a `theme` so in order to use it you have to use ThemeProvider from styled-components like this:

```
import { ThemeProvider } from 'styled-components'

// theme is the default theme, which you can alter
import { theme, Button, Box, Icon } from '@admin-bro/design-system'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box variant="grey">
        <Button><Icon icon="Add" />Click Me</Button>
        <Button variant='primary' ml="xl">I am important</Button>
      </Box>
    </ThemeProvider>
  );
}

export default App;
```

## Changing theme

Design System provides you with the default `theme`. It contains all the parameters like paddings, colors, font sizes etc. For the list of all available parameters take a look at the [Theme spec](https://adminbro.com/Theme.html).

But nothing stands in a way for you to change the default theme. In order to do that you can use bundled `combineStyles` method:

```
const myTheme = combineStyles({
  colors: {
    primary100: '#000'
  }
})

//....
<ThemeProvider theme={myTheme}>
//....
```

## Changing particular components

Sometimes you might want to change the look and feel of one particular component - not entire theme. You can achieve that with `styled` method:

```
import { Button } from '@admin-bro/design-system'

const MyRoundedButton = styled(Button)`
  border-radius: 10px;
`
```

and then you can use it like a normal button component:

```
<MyRoundedButton variant="primary">Rounded I am</MyRoundedButton>
```

## Components

For the list off all the components go to [adminbro.com](adminbro.com)

## Contribute

If you would like work on an admin-bro and develop new features - take a look at our dev repository: https://github.com/SoftwareBrothers/admin-bro-dev

You can find there instructions on how to run admin-bro for development.

## License

AdminBro is Copyright © 2020 SoftwareBrothers.co. It is free software, and may be redistributed under the terms specified in the [LICENSE](LICENSE.md) file.

## About SoftwareBrothers.co

<img src="https://softwarebrothers.co/assets/images/software-brothers-logo-full.svg" width=240>

We’re an open, friendly team that helps clients from all over the world to transform their businesses and create astonishing products.

* We are available for [hire](https://softwarebrothers.co/contact).
* If you want to work for us - checkout the [career page](https://softwarebrothers.co/career).