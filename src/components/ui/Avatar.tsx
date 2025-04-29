import { FaUserCircle } from "react-icons/fa";
import { auth } from "../lib/auth";

export default async function Avatar() {
  const session = await auth();

  return (
    <div className="p-3 rounded-sm cursor-pointer">
      {session?.user?.image ? (
        <img
          className="h-9 rounded-full"
          src={session.user.image}
          alt={session.user.name}
          referrerPolicy="no-referrer"
        />
      ) : (
        <FaUserCircle className="w-9 h-9 text-gray-600 hover:text-gray-500 transition-all" />
      )}
    </div>
  );
}
