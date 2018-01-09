class buttonComponent extends HTMLElement
{
	public _name: string
	public shadow: ShadowRoot

	constructor()
	{
		super()
		this.shadow = this.attachShadow({mode: 'open'})
	}

	public connectedCallback() : void
	{
		this.shadow.innerHTML = `
			<style>
				body
				{
					background: red;
				}
			</style>
			<div class="button-component">${this.name}</div>
		`
	}

	static get observedAttributes()
	{
		return ['name']
	}

	attributeChangedCallback(name:any, old_value:any, new_value:any)
	{
		switch(name)
		{
			case 'name': 

				this._name = new_value

				const div = <HTMLElement>this.shadow.querySelector('.button-component')
				div.textContent = new_value

			break
		}
	}

	get name()
	{
		return this._name
	}

	set name(value:string)
	{
		this.setAttribute('name', value)
	}

}

customElements.define('button-component', buttonComponent);