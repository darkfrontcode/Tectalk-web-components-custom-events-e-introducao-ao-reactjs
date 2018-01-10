import { FriendComponent } from './web-components/friend/friend.component'
import { ButtonComponent } from './web-components/button/button.component'

window.onload = () => {

	// defining components
	customElements.define('friend-component', FriendComponent)
	customElements.define('button-component', ButtonComponent)

	// appending components to body
	new Array<HTMLElement>(
		document.createElement('friend-component'),
		document.createElement('button-component')
	).map((component:HTMLElement) => document.body.appendChild(component))

	// Custom event
	window.addEventListener('random', (data:any) => {

		const friendComponent = <HTMLElement>document.querySelector('friend-component')
		friendComponent.setAttribute('friend', data.detail)
		
	})
	
}