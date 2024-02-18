interface IUsers {
  name: string
  email: string
  id: number
}
export async function GET() {
  const data: IUsers[] = [
    {
      name: 'Joao',
      email: 'joao@123.com',
      id: 53453
    }
  ]
  return Response.json({ data })
}
