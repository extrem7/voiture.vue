import type { Meta, StoryFn } from '@storybook/vue3'
import { subDays, subHours } from 'date-fns'

import type { PickProps } from '~/shared/lib/storybook'
import { VVehicleCard } from '.'

type Props = PickProps<typeof VVehicleCard>

const meta: Meta = {
  title: 'UI/VVehicleCard',
  component: VVehicleCard,
  args: {
    isNewUser: false,
    name: 'Mercedes-Benz E 280 4Matic 2006',
    usd: '9 999',
    uah: '332 467',
    mileage: '134',
    location: 'Київ',
    fuel: 'Бензин, 3 л.',
    transmission: 'Автомат',
    text: 'Авто пригнане із швейцарії у 2018 році. 2 власник в україні. по авто: не мальований жодний елемент, пробіг рідний!!! для своїх років авто в ідеальному стані...',
    isVerifiedCode: false,
    date: subDays(new Date(), 1),
  },
  argTypes: {
    date: { control: 'date' },
  },
}

export default meta

export const Default: StoryFn<Props> = (props) => (
  <VVehicleCard {...props}></VVehicleCard>
)
export const IsNewUser = Default.bind({})
IsNewUser.args = { isNewUser: true }

export const IsVerifiedCode = Default.bind({})
IsVerifiedCode.args = { isVerifiedCode: true }

export const Today = Default.bind({})
Today.args = { date: subHours(new Date(), 5) }

export const Old = Default.bind({})
Old.args = { date: subDays(new Date(), 5) }

Default.storyName = 'VVehicleCard'
