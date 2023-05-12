// sec tab
import menujpg from './img/menu.jpg'
const title = document.createElement('div')

title.innerHTML = 'Best pizza maker in the world'
title.classList.add('container')
title.style.backgroundImage = `url(${menujpg})`
title.style.backgroundSize = 'contain'
title.style.height = '95vh'
export { title }
