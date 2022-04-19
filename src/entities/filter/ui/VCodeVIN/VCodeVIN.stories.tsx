import type { Meta, StoryFn } from '@storybook/vue3'
import type { PickProps } from '~/shared/lib/storybook'
import { VCodeVIN } from '.'

type Props = PickProps<typeof VCodeVIN>

const meta: Meta = {
  title: 'Entities/Filter/VCodeVIN',
  component: VCodeVIN,
}

export default meta

export const Default: StoryFn<Props> = (props) => <VCodeVIN {...props} />
Default.storyName = 'VCodeVIN'
