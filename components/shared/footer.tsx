import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-6 px-4 md:px-6 lg:px-8 border-t">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Starter NextJS. All rights reserved.
        </p>
        <nav className="flex space-x-4 mt-4 md:mt-0">
          <Link href="#" className="text-sm text-gray-500 hover:text-gray-700">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm text-gray-500 hover:text-gray-700">
            Terms of Service
          </Link>
          <Link href="https://github.com/Marksu-u/starter-next" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-gray-700">
            GitHub
          </Link>
        </nav>
      </div>
    </footer>
  )
}

