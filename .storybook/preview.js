import { themes } from '@storybook/theming';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    theme: themes.light,
  },
  backgrounds: {
    default: 'gray',
    values: [
      {
        name: 'gray',
        value: '#eee',
      },
    ],
  },
}
