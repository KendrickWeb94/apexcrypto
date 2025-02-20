

export default function PrimaryText({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <p className="text-primary">
            {children}
        </p>
    )
}