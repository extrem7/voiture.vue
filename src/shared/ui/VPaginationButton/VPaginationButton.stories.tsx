import type { Meta, StoryFn } from '@storybook/vue3'
import type { PickProps } from '~/shared/lib/storybook'

import { VPaginationButton } from '.'

type Props = PickProps<typeof VPaginationButton>

const meta: Meta<Props> = {
  title: 'UI/VPaginationButton',
  component: VPaginationButton,
  args: {
    isActive: false,
    isDisabled: false,
  },
}

export default meta

export const Default: StoryFn<Props> = (props) => (
  <VPaginationButton {...props}>← Назад</VPaginationButton>
)

export const IsActive = Default.bind({})
IsActive.args = { isActive: true }

export const Number: StoryFn<Props> = (props) => (
  <VPaginationButton {...props}>1</VPaginationButton>
)

export const IsDisabled = Default.bind({})
IsDisabled.args = { isDisabled: true }
