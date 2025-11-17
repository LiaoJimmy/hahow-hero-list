export default function HeroProfileSkeleton() {
  return (
    <div className="flex gap-8 sm:gap-16 flex-col sm:flex-row items-center sm:items-end justify-center">
      <div className="flex flex-col gap-4 w-54">
        <div className="skeleton h-14 w-full"></div>
        <div className="skeleton h-14 w-full"></div>
        <div className="skeleton h-14 w-full"></div>
        <div className="skeleton h-14 w-full"></div>
      </div>
      <div className="flex flex-col gap-4 w-48">
        <div className="h-6">剩餘點數： -</div>
        <div className="skeleton h-14 w-full"></div>
      </div>
    </div>
  );
}
