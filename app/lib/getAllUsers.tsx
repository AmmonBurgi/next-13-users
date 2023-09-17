export default async function getAllUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    console.log('Users get all Response: ', response)

    if (!response.ok) throw new Error('Failed to fetch users')

    return response.json()
}