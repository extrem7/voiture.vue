import type { Meta, StoryFn } from '@storybook/vue3'
import Page from './SearchPage.vue'

const meta: Meta = {
  title: 'Pages/Search',
  component: Page,
  parameters: { layout: 'fullscreen' },
}

export default meta

export const Search: StoryFn = () => <Page />
