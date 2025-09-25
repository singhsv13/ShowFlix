import React from "react";
import Card from "../shared/Card";

export default function MovieList({ items, onAddToFav, onRemove }) {
  return (
    <div className="mt-8 grid gap-6 grid-cols-2 sm:grid-cols-4 lg:grid-cols-7">
      {items.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          name={item.name}
          description={item.description}
          poster={item.poster}
          rating={item.rating}
          genre={item.genre}
          year={item.year}
          onAddToFav={onAddToFav ? () => onAddToFav(item) : null}
          onRemove={onRemove ? () => onRemove(item.id) : null}
        />
      ))}
    </div>
  );
}
