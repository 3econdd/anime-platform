import { AnimeCard } from './AnimeCard';

export function AnimeGrid({ items }: { items: any[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <AnimeCard key={item.id} item={item} />
      ))}
    </div>
  );
}
