import Link from 'next/link'
import type { Metadata } from 'next'
import getAllUsers from '@/app/lib/getAllUsers'

export const metadata: Metadata = {
    title: 'Users',
}

export default async function UsersPage() {    
    const usersData: User[] = await getAllUsers()

    // console.log(usersData)

    const content = (
        <section>
            <h2>
                <Link href="/">Back to Home</Link>
            </h2>
            <br />
            {usersData.map(user => {
                return (
                    <>
                        <p key={user.id}>
                            <Link href={`/users/${user.id}`}>
                                {user.name}
                            </Link>
                        </p>
                    </>
                )
            })}
        </section>
    )

    return (
        <div>
            <h1>Users</h1>
            {content}
        </div>
    )
}