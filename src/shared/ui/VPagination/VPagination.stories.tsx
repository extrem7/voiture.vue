import type { Meta, StoryFn } from '@storybook/vue3'
import type { PickProps } from '~/shared/lib/storybook'
import { VPagination } from '.'

type Props = PickProps<typeof VPagination>

const meta: Meta = {
  title: 'UI/VPagination',
  component: VPagination,
}

export default meta

export const Default: StoryFn<Props> = (props) => (
  <VPagination {...props}></VPagination>
)
Default.storyName = 'VPagination'
