import type { Meta, StoryFn } from '@storybook/vue3'
import type { PickProps } from '~/shared/lib/storybook'
import { VSelect } from '.'

type Props = PickProps<typeof VSelect>

const meta: Meta = {
  title: 'UI/Forms/VSelect',
  component: VSelect,
}

export default meta

export const Default: StoryFn<Props> = (props) => (
  <VSelect {...props}>
    <option>Option 1</option>
    <option>Option 2</option>
  </VSelect>
)
Default.storyName = 'VSelect'
