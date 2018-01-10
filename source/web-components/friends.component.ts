// import { Friends } from '../utils/friends.list'

export class FriendsComponent extends HTMLElement
{
	public shadow: ShadowRoot
	// private friends = Friends

	constructor()
	{
		super()

		this.shadow = this.attachShadow({mode: 'open'})
		this.shadow.innerHTML = `<h2>Friends</h2>`

	}

	public connectedCallback() : void
	{
		this.addEventListener('random', (data:any) => console.log(data.detail))
	}
}