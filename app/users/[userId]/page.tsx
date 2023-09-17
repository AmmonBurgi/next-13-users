import getUser from '@/app/lib/getUser'
import getUserPosts from '@/app/lib/getUserPosts'
import { Suspense } from 'react'
import UserPosts from './components/UserPosts'
import type { Metadata } from 'next'

type Params = {
    params: {
        userId: string
    }
}

export async function generateMetadata({ params: { userId }}: Params): Promise<Metadata> {
    const userData: Promise<User> = getUser(userId)
    const user: User = await userData

    return {
        title: user.name,
        description: `Posts by ${user.name}`,
    }
}

export default async function UserPage({ params: { userId }}: Params) {
    const userData: Promise<User> = getUser(userId)
    const userPostsData: Promise<Post[]> = getUserPosts(userId)

    // const [user, userPosts] = await Promise.all([userData, userPostsData])

    const user = await userData

    return (
        <>
            <h2>{user.name}</h2>
            <br />
            <Suspense fallback={<h2>Suspense Loading...</h2>}>
                <UserPosts 
                promise={userPostsData} 
                // posts={userPosts} 
                />
            </Suspense>
        </>
    )
}