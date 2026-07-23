import { useEffect, useRef, useState } from "react";
import "../styles/filterbar.css";
import { CATEGORIES, Category } from "../data/projects";

export interface DateFilterValue {
  year: number;
  month: number; // 1-12
}

export interface FilterState {
  category: Category;
  roles: string[];
  workTypes: string[];
  date: DateFilterValue | null;
}

export const EMPTY_FILTER_STATE: FilterState = {
  category: "ALL",
  roles: [],
  workTypes: [],
  date: null,
};

interface FilterBarProps {
  value: FilterState;
  onChange: (next: FilterState) => void;
  roleOptions: string[];
  workTypeOptions: string[];
  minYear: number;
  maxYear: number;
  /** Hide the Category (All/Engineering/Design) section — use on a page
   *  that's already scoped to a single category, e.g. the Engineering page. */
  showCategory?: boolean;
}

const MONTH_LABELS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function FilterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 3H16L11 9.4V15L7 13V9.4L2 3Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

function toggleValue(list: string[], value: string): string[] {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

function MiniCalendar({
  selected,
  minYear,
  maxYear,
  onSelect,
}: {
  selected: DateFilterValue | null;
  minYear: number;
  maxYear: number;
  onSelect: (date: DateFilterValue | null) => void;
}) {
  const [viewYear, setViewYear] = useState(selected?.year ?? maxYear);

  return (
    <div className="mini-calendar">
      <div className="mini-calendar-header">
        <button
          type="button"
          onClick={() => setViewYear((y) => Math.max(minYear, y - 1))}
          disabled={viewYear <= minYear}
          aria-label="Previous year"
        >
          ‹
        </button>
        <span>{viewYear}</span>
        <button
          type="button"
          onClick={() => setViewYear((y) => Math.min(maxYear, y + 1))}
          disabled={viewYear >= maxYear}
          aria-label="Next year"
        >
          ›
        </button>
      </div>

      <div className="mini-calendar-grid">
        {MONTH_LABELS.map((label, i) => {
          const monthNum = i + 1;
          const isActive = selected?.year === viewYear && selected?.month === monthNum;
          return (
            <button
              key={label}
              type="button"
              className={`mini-calendar-cell${isActive ? " is-active" : ""}`}
              onClick={() => onSelect({ year: viewYear, month: monthNum })}
            >
              {label}
            </button>
          );
        })}
      </div>

      {selected && (
        <button type="button" className="mini-calendar-clear" onClick={() => onSelect(null)}>
          Clear date
        </button>
      )}
    </div>
  );
}

export default function FilterBar({
  value,
  onChange,
  roleOptions,
  workTypeOptions,
  minYear,
  maxYear,
  showCategory = true,
}: FilterBarProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onPointerDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const activeCount =
    (value.category !== "ALL" ? 1 : 0) +
    value.roles.length +
    value.workTypes.length +
    (value.date ? 1 : 0);

  return (
    <div className="filterbar" ref={rootRef}>
      <button
        type="button"
        className={`filterbar-trigger${activeCount > 0 ? " has-active" : ""}`}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label="Open filters"
      >
        <FilterIcon />
        {activeCount > 0 && <span className="filterbar-badge">{activeCount}</span>}
      </button>

      {open && (
        <div className="filterbar-panel">
          {showCategory && (
            <div className="filterbar-section">
              <div className="filterbar-section-title">Category</div>
              <div className="filterbar-chip-row">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    className={`filterbar-chip${value.category === cat ? " is-active" : ""}`}
                    onClick={() => onChange({ ...value, category: cat })}
                  >
                    {cat === "ALL" ? "All" : cat.charAt(0) + cat.slice(1).toLowerCase()}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="filterbar-section">
            <div className="filterbar-section-title">Type</div>
            <div className="filterbar-checkbox-list">
              {roleOptions.map((role) => (
                <label key={role} className="filterbar-checkbox">
                  <input
                    type="checkbox"
                    checked={value.roles.includes(role)}
                    onChange={() => onChange({ ...value, roles: toggleValue(value.roles, role) })}
                  />
                  {role}
                </label>
              ))}
            </div>
          </div>

          <div className="filterbar-section">
            <div className="filterbar-section-title">Focus</div>
            <div className="filterbar-checkbox-list">
              {workTypeOptions.map((workType) => (
                <label key={workType} className="filterbar-checkbox">
                  <input
                    type="checkbox"
                    checked={value.workTypes.includes(workType)}
                    onChange={() =>
                      onChange({ ...value, workTypes: toggleValue(value.workTypes, workType) })
                    }
                  />
                  {workType}
                </label>
              ))}
            </div>
          </div>

          <div className="filterbar-section">
            <div className="filterbar-section-title">Date</div>
            <MiniCalendar
              selected={value.date}
              minYear={minYear}
              maxYear={maxYear}
              onSelect={(date) => onChange({ ...value, date })}
            />
          </div>

          <div className="filterbar-footer">
            <button
              type="button"
              className="filterbar-clear"
              onClick={() => onChange(EMPTY_FILTER_STATE)}
            >
              Clear all
            </button>
            <button type="button" className="filterbar-done" onClick={() => setOpen(false)}>
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}