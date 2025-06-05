"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/lib/animations";

interface Props {
  href: string;
  label: string;
  className?: string;
}

const TransitionLink = ({ href, label, className }: Props) => {
  const router = useRouter();
  const pathName = usePathname();

  const handleClick = async (e: React.MouseEvent) => {
    const currentPath = pathName.split("#")[0];
    const [targetPath, hash] = href?.split("#") ?? [];

    if (currentPath !== targetPath && href) {
      //Different page
      e.preventDefault();
      await animatePageOut(href, router);
    } else if (hash) {
      //Same page
      e.preventDefault();
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={
        className ??
        "px-4 py-1.5 rounded-full text-green-900/70 text-sm font-semibold sm:hover:bg-white/10 md:hover:bg-black/5 hover:text-green-900 transition duration-300"
      }
    >
      {label}
    </Link>
  );
};

export default TransitionLink;
