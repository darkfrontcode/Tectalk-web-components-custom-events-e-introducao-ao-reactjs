const Stylus = require('./friend.component.styl')

export class FriendComponent extends HTMLElement
{
	public shadow: ShadowRoot
	public h2: HTMLElement

	constructor()
	{
		super()
		this.shadow = this.attachShadow({mode: 'open'})
		this.shadow.innerHTML = `<style>${Stylus}</style>`
	}

	public static get observedAttributes() : Array<string>
	{
		return new Array<string>('friend')
	}

	public attributeChangedCallback(name:string, old_value:string, new_value:string) : void
	{
		switch(name)
		{
			case 'friend':

				if(this.h2)
				{
					this.h2.textContent = new_value
				}
				else
				{
					this.shadow.appendChild(document.createElement('h2'))
					this.h2 = <HTMLElement>this.shadow.querySelector('h2')
					this.h2.textContent = new_value
				}

			break
		}
	}

}