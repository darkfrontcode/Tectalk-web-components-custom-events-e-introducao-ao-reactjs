import { Friend } from '../../utils/friend.class'
import { Friends } from '../../utils/friends.list'
const Stylus = require('./button.component.styl')

export class ButtonComponent extends HTMLElement
{
	public shadow: ShadowRoot
	public button: HTMLElement

	constructor()
	{
		super()

		this.shadow = this.attachShadow({mode: 'open'})
		this.shadow.innerHTML = `<style>${Stylus}</style><button>Shuffle</button>`
		this.button = <HTMLElement>this.shadow.querySelector('button')

	}

	public connectedCallback() : void
	{
		this.button.onclick = () => {
			
			const friend = this.shuffle()
			const event = new CustomEvent('random', new Object({ detail: friend.name }))
			window.dispatchEvent(event)

		}
	}

	public random() : number
	{
		return Math.floor(Math.random() * Friends.length)
	}

	public shuffle() : Friend
	{
		return Friends[this.random()]
	}

}