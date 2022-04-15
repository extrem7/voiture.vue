import path from 'path'
import type { UserConfig } from 'vite'
import VueJsx from '@vitejs/plugin-vue-jsx'
import type {
  StorybookConfig,
  CoreConfig,
  Options,
} from '@storybook/core-common'

import { config as baseConfig } from '../vite.config'

type Weaken<T, U extends keyof T> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [k in keyof T]: k extends U ? any : T[k]
}

interface CustomizedCoreConfig extends Weaken<CoreConfig, 'builder'> {
  builder: CoreConfig['builder'] | 'storybook-builder-vite'
}
interface CustomizedStorybookConfig extends Weaken<StorybookConfig, 'core'> {
  core: CustomizedCoreConfig
  viteFinal?: (config: UserConfig, options: Options) => UserConfig
}

const storybookConfig: CustomizedStorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-dark-mode',
  ],
  framework: '@storybook/vue3',
  core: { builder: '@storybook/builder-vite' },
  staticDirs: ['../public'],
  viteFinal(config) {
    const plugins = config.plugins ?? []

    return {
      ...config,
      plugins: [...plugins, VueJsx()],
      css: { ...config.css, ...baseConfig.css },
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          '~': path.resolve(__dirname, '../src/'),
        },
      },
    }
  },
}

export default storybookConfig
