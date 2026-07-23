export interface DateSpan {
  startYear: number;
  startMonth: number; // 1-12
  endYear: number;
  endMonth: number; // 1-12
}

const MONTH_PREFIXES = [
  "jan", "feb", "mar", "apr", "may", "jun",
  "jul", "aug", "sep", "oct", "nov", "dec",
];

const NOW = new Date();
const CURRENT_YEAR = NOW.getFullYear();
const CURRENT_MONTH = NOW.getMonth() + 1;

function monthFromText(text: string): number | null {
  const lower = text.trim().toLowerCase();
  const index = MONTH_PREFIXES.findIndex((prefix) => lower.startsWith(prefix));
  return index === -1 ? null : index + 1;
}

/**
 * Parses strings like "2024", "2023–2025", "Dec 2024 – Present",
 * "Jun 2025 – Aug 2025" into a start/end year+month span. Falls back to
 * January/December when no month is present, since most project dates
 * are year-only.
 */
export function parseDateSpan(text?: string): DateSpan | null {
  if (!text) return null;

  const isPresent = /present/i.test(text);
  const parts = text
    .split(/[–—-]/)
    .map((p) => p.trim())
    .filter(Boolean);

  const parsed = parts.map((part) => {
    const yearMatch = part.match(/\d{4}/);
    return {
      year: yearMatch ? Number(yearMatch[0]) : null,
      month: monthFromText(part),
    };
  });

  const first = parsed[0] ?? null;
  const last = isPresent
    ? { year: CURRENT_YEAR, month: CURRENT_MONTH }
    : parsed[parsed.length - 1] ?? null;

  const startYear = first?.year ?? last?.year ?? null;
  const endYear = last?.year ?? first?.year ?? null;
  if (startYear === null || endYear === null) return null;

  return {
    startYear,
    startMonth: first?.month ?? 1,
    endYear,
    endMonth: last?.month ?? 12,
  };
}

/** Whether a span covers the given year (and, if provided, month). */
export function spanIncludes(span: DateSpan | null, year: number, month?: number | null): boolean {
  if (!span) return false;
  const start = span.startYear * 12 + (span.startMonth - 1);
  const end = span.endYear * 12 + (span.endMonth - 1);
  const target = month ? year * 12 + (month - 1) : null;
  if (target !== null) return target >= start && target <= end;
  return year >= span.startYear && year <= span.endYear;
}