import { shallowMount } from '@vue/test-utils'
import Timer from '@/components/Timer.vue'

describe('Timer.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Not yet'
    const wrapper = shallowMount(Timer, {
      props: { from: 5000 }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
