import type { Meta, StoryFn } from '@storybook/vue3'
import type { PickProps } from '~/shared/lib/storybook'

import { VSocialLinks } from '.'

type Props = PickProps<typeof VSocialLinks>

const meta: Meta = {
  title: 'UI/VSocialLinks',
  component: VSocialLinks,
}

export default meta

export const Default: StoryFn<Props> = (props) => <VSocialLinks {...props} />
