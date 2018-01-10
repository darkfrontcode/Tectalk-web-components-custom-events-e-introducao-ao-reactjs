export class buttonComponent extends HTMLElement
{
	private _name: string
	public shadow: ShadowRoot

	constructor()
	{
		super()
		this.shadow = this.attachShadow({mode: 'open'})

		const style = `
			<style>
				button
				{
					background: #08C9D8;
					font-family: 'Lobster', cursive;
					font-size: 20px;
					padding: 0 40px;
					border: 0;
					position: relative;
					transition: background-color .25s;
					display: flex;
					flex-grow: 1;
					flex-shrink: 0;
					justify-content: center;
					height: 55px;
					color: white;
					text-align: center;
					margin: auto;
					border-radius: 36px;
					text-shadow: 0 2px 0 rgba(0,0,0,.2);
					box-shadow: inset 0 -4px 0 0 rgba(0,0,0,.2), 0 4px 0 0 rgba(0,0,0,.2);
					cursor: pointer;
				}

				button:focus
				{
					outline: none;
				}

				button:active
				{
					box-shadow: inset 0 -2px 0 0 rgba(0,0,0,.2), 0 2px 0 0 rgba(0,0,0,.2);
					top: 2px;
				}
			</style>
		`

		const template = `<button>${this.name}</button>`

		this.shadow.innerHTML = `
			${style}
			${template}
		`

	}

	public connectedCallback() : void
	{
		const button = <HTMLElement>this.shadow.querySelector('button')
		button.onclick = () => window.dispatchEvent(new CustomEvent('random', { detail: 'hello' }))
	}

	public static get observedAttributes() : Array<string>
	{
		return new Array<string>('name')
	}

	public attributeChangedCallback(name:string, old_value:string, new_value:string) : void
	{
		switch(name)
		{
			case 'name':

				const button = <HTMLElement>this.shadow.querySelector('button')
				button.textContent = new_value

			break
		}
	}

	get name() : string
	{
		return this._name
	}

	set name(value:string)
	{
		this._name = value
		this.setAttribute('name', value)
	}

}