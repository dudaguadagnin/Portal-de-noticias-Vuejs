import NovoCard from '@/components/NovoCard.vue'
import { mount} from '@vue/test-utils'

test('contenha modal dentro do card', async () => {
    const wrapper = mount(NovoCard)
    const Modal = wrapper.find('Modal')
    await wrapper.setData({
            Modalshow: true
    })
    expect(Modal).toBeTruthy()     
})


    
