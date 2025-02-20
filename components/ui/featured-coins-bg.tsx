

export default function FeaturedCoinsBg({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/10 w-fit p-5">
            {children}
        </div>
    )
}