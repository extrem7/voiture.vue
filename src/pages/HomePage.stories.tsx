import type { Meta, StoryFn } from '@storybook/vue3'
import Page from './HomePage.vue'

const meta: Meta = {
  title: 'Pages/Home',
  component: Page,
  parameters: { layout: 'fullscreen' },
}

export default meta

export const Home: StoryFn = () => <Page />
