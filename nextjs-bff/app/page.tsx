export default function Home() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                    Welcome to Homepage
                </h1>

                <p className="text-gray-600 mb-8">
                    This is a public landing page.
                    You can browse freely or log in to access protected features.
                </p>

                <div className="space-y-4">
                    <a
                        href="/dashboard"
                        className="block w-full py-3 rounded-xl text-white bg-blue-500 text-gray-800 font-medium hover:bg-blue-600 transition"
                    >
                        Go to Dashboard Page
                    </a>

                    {/*<a*/}
                    {/*    href="/oauth2/authorization/auth-server"*/}
                    {/*    className="block w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"*/}
                    {/*>*/}
                    {/*    Login via Gateway*/}
                    {/*</a>*/}
                </div>

                <p className="text-xs text-gray-400 mt-6">
                    Secured with OAuth2 • BFF Architecture
                </p>
            </div>
        </main>
    );
}
