import { Request as req, Response as res } from 'express'

const result = new Object(
	{
		status: 'OK'
	}
)

export class DoubleCheckController
{
	public static url = '/api/double-check'

	constructor(req:req, res:res)
	{
		res.status(200).json(result)	
	}
}