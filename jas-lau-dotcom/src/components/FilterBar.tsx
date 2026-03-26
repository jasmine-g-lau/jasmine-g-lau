import "../styles/carousel.css";
import { CATEGORIES } from "../data/projects";

type Category = typeof CATEGORIES[number];

interface FilterBarProps {
  active: Category;
  onChange: (cat: Category) => void;
}

export default function FilterBar({ active, onChange }: FilterBarProps) {
  return (
    <div className="filter-bar">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          className={`filter-btn ${active === cat ? "active" : ""}`}
          onClick={() => onChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}