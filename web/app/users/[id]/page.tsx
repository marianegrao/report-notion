interface IParams {
  params: { id: string }
}
export default function UserPage({ params }: IParams) {
  return (
    <div>
      <h1>Hello, User {params.id}. Welcome!</h1>
    </div>
  )
}
