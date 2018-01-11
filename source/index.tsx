import * as React from 'react'
import * as ReactDOM from 'react-dom'

const app = document.createElement('div')
app.id = 'app'
document.body.appendChild(app)

interface IGreetingsProps
{
	msg: string
}

// class GreetingsComponent extends React.Component<IGreetingsProps, {}>
// {
// 	constructor(props:IGreetingsProps)
// 	{
// 		super(props)
// 	}

// 	render()
// 	{
// 		return <h2>{this.props.msg}</h2>
// 	}
// }

const GreetingsComponent = (props:IGreetingsProps) => <h2>{props.msg}</h2>

ReactDOM.render(
	<GreetingsComponent msg="Hi."/>, 
	document.getElementById("app")
)