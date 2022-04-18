import type { Meta, StoryFn } from '@storybook/vue3'
import type { PickProps } from '~/shared/lib/storybook'
import { VMarksSelect } from '.'

type Props = PickProps<typeof VMarksSelect>

const meta: Meta = {
  title: 'Entities/Filter/VMarksSelect',
  component: VMarksSelect,
}

export default meta

export const Default: StoryFn<Props> = (props) => <VMarksSelect {...props} />

Default.storyName = 'VMarksSelect'
