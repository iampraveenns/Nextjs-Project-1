const UserDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params
    return (
        <div>
            <p>The User{id} opens</p>
        </div>
    )
}

export default UserDetails