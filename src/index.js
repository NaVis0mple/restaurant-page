import { btnContainer, btnHome, btnMenu, btnContact } from './tab.js'
import * as Home from './home.js'
import * as Menu from './menu.js'
import * as Contact from './contact.js'

document.body.style.display = 'flex'
document.body.style.flexDirection = 'column'


const headpart = (function () {
  const sethead = function () {
    const container = document.createElement('div')
    container.style.display='flex'
    container.style.justifyContent = 'space-evenly'
    container.classList.add('headpart')
    container.appendChild(btnContainer)
    document.body.insertBefore(container, document.body.firstChild)
  }
  return { sethead }
})()

const midpart = (function () {
  const container = document.createElement('div')
  container.classList.add('midpart')
  document.body.appendChild(container)
  // default page is home
  const defaultTab = () => {
    container.innerHTML = ''
    container.appendChild(Home.title)
  }
  const showTab = ()=> {
    btnMenu.addEventListener('click', () => {
      container.innerHTML = ''
      container.appendChild(Menu.title)
    })
    btnContact.addEventListener('click', () => {
      container.innerHTML = ''
      container.appendChild(Contact.title)
    })
    btnHome.addEventListener('click', () => {
      container.innerHTML = ''
      container.appendChild(Home.title)
    })
  }
  defaultTab()
  return { defaultTab, showTab  }
})()

headpart.sethead()
midpart.showTab()

