import type { Meta, StoryFn } from '@storybook/vue3'
import type { PickProps } from '~/shared/lib/storybook'
import { VCategoriesSelect } from '.'

type Props = PickProps<typeof VCategoriesSelect>

const meta: Meta = {
  title: 'Entities/Filter/VCategoriesSelect',
  component: VCategoriesSelect,
}

export default meta

export const Default: StoryFn<Props> = (props) => (
  <VCategoriesSelect {...props} />
)
Default.storyName = 'VCategoriesSelect'
