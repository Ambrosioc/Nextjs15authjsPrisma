import { signOut, useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"



export default function DashboardPage() {

    const { data: session } = useSession()

    return (
        <>
            {session?.user ? (
                <>
                    {session?.user?.image && (
                        <Image
                            src={session.user.image}
                            alt="User Image"
                            width={32}
                            height={32}
                            className="rounded-full"
                        />
                    )}
                    <h1>{session.user.name}</h1>
                    <p>{session.user.email}</p>
                    <button onClick={() => signOut()}>Sign out</button>
                </>
            ) : (
                    <div>
                        <Link href="/login">Sign in</Link>
                </div>
            )}
        </>
    )
}