import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Button, Tag, Image as VanImage, Swipe, SwipeItem, Lazyload, Badge, Sidebar, SidebarItem, Collapse, CollapseItem, Card, Tab, Tabs, Form, Field, Checkbox, CheckboxGroup, Stepper, SwipeCell, SubmitBar, Icon, AddressEdit, AddressList } from 'vant'

createApp(App)
.use(Lazyload, {loading:require('./assets/image/collect.png')}).use(VanImage).use(Button).use(Tag).use(Icon).use(AddressEdit).use(AddressList)
.use(Swipe).use(SwipeItem).use(Badge).use(Sidebar).use(SidebarItem).use(Collapse).use(CollapseItem).use(Card).use(Tab).use(Tabs).use(Form).use(Field).use(Stepper).use(SwipeCell).use(CheckboxGroup).use(Checkbox).use(SubmitBar)
.use(store).use(router).mount('#app')
