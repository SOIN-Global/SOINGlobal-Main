import Link from "next/link";

export default function NotFound() {

    return (
        <main className="flex min-h-[50vh] items-center justify-center bg-white dark:bg-[#00091a] px-6">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-900 dark:text-white">404</h1>
                <p className="mt-4 text-xl text-gray-700 dark:text-gray-300">
                    Oops! Page not found.
                </p>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                    The page you’re looking for doesn’t exist or has been moved.
                </p>
            </div>
        </main>
    );
}
