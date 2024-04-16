import { color } from "framer-motion"
import { ChevronFirst } from "lucide-react"

function SideBar({ children }) {
  return (
    <aside className="h-screen md:hidden">
    <nav className="h-full flex flex-col bg-whit border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
        <button className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100" >
            <ChevronFirst />
        </button>
        </div>

        <ul className="flex-1 px-3">{children}</ul>

    </nav>
    </aside>
  )
}

export default SideBar