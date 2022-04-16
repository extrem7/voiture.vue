/* eslint-disable import/no-extraneous-dependencies */
import type { Parameters } from '@storybook/addons'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import { appDecorator } from './lib'

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['UI', 'Entities', 'Features', 'Widgets', 'Pages'],
    },
  },
  layout: 'centered',
  viewport: { viewports: INITIAL_VIEWPORTS },
}

export const decorators = [appDecorator]
