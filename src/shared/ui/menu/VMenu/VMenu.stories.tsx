import type { Meta, StoryFn } from '@storybook/vue3'
import type { PickProps } from '~/shared/lib/storybook'
import { VMenu } from '.'

type Props = PickProps<typeof VMenu>

const meta: Meta = {
  title: 'UI/Menu/VMenu',
  component: VMenu,
}

export default meta

export const Default: StoryFn<Props> = (props) => <VMenu {...props}></VMenu>

Default.storyName = 'VMenu'
