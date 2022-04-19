import type { Meta, StoryFn } from '@storybook/vue3'
import type { PickProps } from '~/shared/lib/storybook'
import { VModelsSelect } from '.'

type Props = PickProps<typeof VModelsSelect>

const meta: Meta = {
  title: 'Entities/filter/VModelsSelect',
  component: VModelsSelect,
}

export default meta

export const Default: StoryFn<Props> = (props) => (
  <VModelsSelect {...props}> </VModelsSelect>
)
Default.storyName = 'VModelsSelect'
