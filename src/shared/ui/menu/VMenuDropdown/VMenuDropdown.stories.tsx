import type { Meta, StoryFn } from '@storybook/vue3'
import type { PickProps } from '~/shared/lib/storybook'
import { VMenuDropdown } from '.'

type Props = PickProps<typeof VMenuDropdown>

const meta: Meta = {
  title: 'UI/Menu/VMenuDropdown',
  component: VMenuDropdown,
}

export default meta

export const Default: StoryFn<Props> = (props) => (
  <VMenuDropdown {...props}>Menu Dropdown</VMenuDropdown>
)

Default.storyName = 'VMenuDropdown'
