import { buttonComponent } from './web-components/button.component'
import { FriendsComponent } from './web-components/friends.component'

window.onload = () => {

	customElements.define('button-component', buttonComponent)
	customElements.define('friends-component', FriendsComponent)

	// window.addEventListener('alert', (data:any) => console.log(data.detail))
	// window.addEventListener('random', (data:any) => console.log(data.detail))
	
}