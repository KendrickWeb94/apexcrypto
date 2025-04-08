import Link from "next/link";

export default function Button({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Link href={"/sign-up"}>
      <button className=" rounded-3xl bg-primary/10 border-t border-b smooth border-primary py-2 smooth hover hover:bg-primary/30  font-dm-medium text-primary px-5">
        {children}
      </button>
    </Link>
  );
}
