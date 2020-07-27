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


