import { App } from '~/app'

export const appDecorator = (Story) => ({
  components: { App },
  render: () => {
    return (
      <App>
        <Story />
      </App>
    )
  },
})
