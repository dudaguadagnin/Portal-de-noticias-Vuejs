import Modal from '@/components/noticias/Modal.vue'
import { mount } from '@vue/test-utils'

describe('modal', () => {
    test('contenha um botão para fechar o modal',() => {

        const wrapper = mount(Modal, {
            propsData: {
                title: 'titulo teste',
                abstract: 'resumo teste',
                url: 'http://localhost:3000/teste'
            }
        })
        wrapper.find('button').trigger('click')
        
        const fechar = wrapper.emitted('close')
        wrapper.trigger('click') 
        expect(fechar).toBeTruthy() 
    })
})
