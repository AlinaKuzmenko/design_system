import type { Preview } from '@storybook/react';
import '../src/index.css';
import { withThemeByDataAttribute } from '@storybook/addon-themes';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByDataAttribute({
      defaultTheme: 'dark',
      themes: {
        light: 'light',
        dark: 'dark',
      },
      attributeName: 'data-mode',
    }),
  ],
};

export default preview;
