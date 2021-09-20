import { mount } from '@vue/test-utils'
import Gallery from '@/components/Gallery.vue'

describe('Gallery.vue', () => {
  let wrapper = null
  global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve([{
          albumId: 1,
          id: 1,
          thumbnailUrl: 'https://via.placeholder.com/150/92c952',
          title: 'accusamus beatae ad facilis cum similique qui sunt',
          url: 'https://via.placeholder.com/600/92c952'
        }])
      }
    })
  })
  beforeEach(() => {
    wrapper = mount(Gallery)
    jest.clearAllMocks()
  })
  it('Should be render the component', () => {
    expect(wrapper.exists()).toBe(true)
  })
  it('Should be fail the call', async () => {
    fetch.mockImplementationOnce(() => Promise.reject(new Error('Error en la consulta')))
    await wrapper.vm.getApi()
    expect(wrapper.vm.error.message).toBe('Error en la consulta')
  })
})
