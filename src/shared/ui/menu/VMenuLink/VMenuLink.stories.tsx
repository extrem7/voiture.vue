import type { Meta, StoryFn } from '@storybook/vue3'
import type { PickProps } from '~/shared/lib/storybook'
import { VMenuLink } from '.'

type Props = PickProps<typeof VMenuLink>

const meta: Meta = {
  title: 'UI/Menu/VMenuLink',
  component: VMenuLink,
}

export default meta

export const Default: StoryFn<Props> = (props) => (
  <VMenuLink {...props}>Menu Link</VMenuLink>
)

export const Dropdown = Default.bind({})

Dropdown.args = {
  dropdown: true,
}

Dropdown.storyName = 'Drop down'

Default.storyName = 'VMenuLink'
