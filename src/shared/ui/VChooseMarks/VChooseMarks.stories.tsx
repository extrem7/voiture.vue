import type { Meta, StoryFn } from '@storybook/vue3'
import type { PickProps } from '~/shared/lib/storybook'
import { VChooseMarks } from '.'

type Props = PickProps<typeof VChooseMarks>

const meta: Meta = {
  title: 'UI/VChooseMarks',
  component: VChooseMarks,
}

export default meta

export const Default: StoryFn<Props> = (props) => (
  <VChooseMarks {...props}></VChooseMarks>
)

Default.storyName = 'VChooseMarks'
