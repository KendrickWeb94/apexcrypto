export default function IconHolder({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-8 h-8 rounded-full text-primary items-center flex justify-center bg-white/20">
      {children}
    </div>
  );
}
