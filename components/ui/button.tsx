export default function Button({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <button className=" rounded-xl bg-primary h-12 smooth hover:bg-primary/80 font-dm-semibold text-background px-5">
      {children}
    </button>
  );
}
