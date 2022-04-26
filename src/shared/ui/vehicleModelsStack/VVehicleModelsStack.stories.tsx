import type { Meta, StoryFn } from '@storybook/vue3'
import type { PickProps } from '~/shared/lib/storybook'
import { VVehicleModelsStack } from '.'

type Props = PickProps<typeof VVehicleModelsStack>

const meta: Meta = {
  title: 'UI/VVehicleModelsStack',
  component: VVehicleModelsStack,
}

export default meta

export const Default: StoryFn<Props> = (props) => (
  <VVehicleModelsStack {...props}>Menu Dropdown</VVehicleModelsStack>
)

Default.storyName = 'VVehicleModelsStack'
