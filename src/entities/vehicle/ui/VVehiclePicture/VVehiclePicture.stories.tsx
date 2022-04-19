import type { Meta, StoryFn } from '@storybook/vue3'
import type { PickProps } from '~/shared/lib/storybook'

import { VVehiclePicture } from '.'

type Props = PickProps<typeof VVehiclePicture>

const meta: Meta<Props> = {
  title: 'UI/VehiclePicture',
  component: VVehiclePicture,
  args: {
    src: 'https://cdn.riastatic.com/photosnew/auto/photo/mazda_3__444263528b.webp',
    isNew: false,
    isVerifiedCode: false,
  },
}

export default meta

export const Default: StoryFn<Props> = (props) => <VVehiclePicture {...props} />

export const IsNew = Default.bind({})
IsNew.args = { isNew: true }

export const IsVerifiedCode = Default.bind({})
IsVerifiedCode.args = { isVerifiedCode: true }
