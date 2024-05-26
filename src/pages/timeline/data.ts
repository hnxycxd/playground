import dayjs, { type ManipulateType } from "dayjs";
// import type { ManipulateType } from 'dayjs'

const MILLIS_IN_A_DAY = 24 * 60 * 60 * 1000;
export function create({
  start,
  end,
  zoom,
  viewportWidth = 0,
  minWidth = 0,
}: {
  start: Date;
  end: Date;
  zoom: number;
  viewportWidth?: number;
  minWidth?: number;
}) {
  const duration = end.getTime() - start.getTime();

  const days = duration / MILLIS_IN_A_DAY;
  const daysZoomWidth = days * zoom;

  let timelineWidth: number;

  if (daysZoomWidth > viewportWidth) timelineWidth = daysZoomWidth;
  else timelineWidth = viewportWidth;

  if (timelineWidth < minWidth) timelineWidth = minWidth;

  const timelineWidthStyle = `${timelineWidth}px`;

  const toX = (from: Date) => {
    const value = (from.getTime() - start.getTime()) / duration;
    return Math.round(value * timelineWidth);
  };

  const toStyleLeft = (from: Date) => ({
    left: `${toX(from)}px`,
  });

  const toStyleLeftAndWidth = (from: Date, to: Date) => {
    const left = toX(from);
    return {
      left: `${left}px`,
      width: `${toX(to) - left}px`,
    };
  };

  const fromX = (x: number) =>
    new Date(start.getTime() + (x / timelineWidth) * duration);

  return {
    timelineWidth,
    timelineWidthStyle,
    start,
    end,
    zoom,
    toX,
    toStyleLeft,
    toStyleLeftAndWidth,
    fromX,
  };
}

interface Cell {
  start: Date;
  end: Date;
  title: string;
  id: string;
  entYmd: string;
  startYmd: string;
  startMd: string;
}
export function createTimeCell(start, end, interval: ManipulateType = "day") {
  const cells: Cell[] = [];
  let current = dayjs(start);
  while (current.isBefore(end)) {
    const startYmd = current.format("YYYY-MM-DD");
    const e = current.add(1, interval);
    cells.push({
      start: current.toDate(),
      end: e.toDate(),
      title: startYmd,
      id: startYmd,
      startYmd,
      entYmd: e.format("YYYY-MM-DD"),
      startMd: current.format("MM-DD"),
    });
    current = current.add(1, interval);
  }
  return cells;
}
