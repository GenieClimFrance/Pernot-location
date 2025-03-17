export default function VehicleDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="no-snap-scroll">{children}</div>;
}
