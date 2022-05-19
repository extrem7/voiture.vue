import type { Meta, StoryFn } from '@storybook/vue3'
import type { PickProps } from '~/shared/lib/storybook'
import { VRadioGroup } from '.'

type Props = PickProps<typeof VRadioGroup>

const meta: Meta = {
  title: 'Entities/Filter/VRadioGroup',
  component: VRadioGroup,
}

export default meta

export const Default: StoryFn<Props> = (props) => <VRadioGroup {...props} />

Default.storyName = 'VRadioGroup'