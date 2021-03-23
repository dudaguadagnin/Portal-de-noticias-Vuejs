import NavBar from '@/components/NavBar';
import { mount } from '@vue/test-utils'

describe('NavBar', () => {
    test('botão de home para acesar home',() => {
        const wrapper = mount(NavBar)
        wrapper.find('.navbar-brand').trigger('click')
        const Home = wrapper.emitted('home')
        wrapper.trigger('click') 
        expect(Home).toBeTruthy() 
    })
    test('botão de home para acesar science',() => {
        const wrapper = mount(NavBar)
        wrapper.find('.nav-link').trigger('click')
        const Science = wrapper.emitted('science')
        wrapper.trigger('click') 
        expect(Science).toBeTruthy() 
    })
    test('botão de home para acesar technology',() => {
        const wrapper = mount(NavBar)
        wrapper.find('.nav-link').trigger('click')
        const Technology = wrapper.emitted('technology')
        wrapper.trigger('click') 
        expect(Technology)
    })
})