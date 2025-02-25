export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center flex-col gap-4 text-2xl font-bold">
      <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin" />
      <p className="text-2xl font-bold text-primary">Chargement...</p>
    </div>
  );
}
