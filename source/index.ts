class buttonComponent extends HTMLElement
{
	// public name: string
	// public shadow: ShadowRoot

	constructor()
	{
		super()
		// this.shadow = this.attachShadow({mode: 'open'})
		// this.shadow.innerHTML = `
		// 	<style>
		// 		body
		// 		{
		// 			background: red;
		// 		}
		// 	</style>
		// 	<div class="button-component">${this.text}</div>
		// `
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
				this.textContent = `Hello, ${new_value}`
			break
		}
	}

}

customElements.define('button-component', buttonComponent);