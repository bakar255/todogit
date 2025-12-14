import {
  Circle, CircleDashed, Badge, BadgeCheck, LucideIcon,
} from "lucide-react";



export type Sector = 'todo' | 'inProgress' | 'done' | 'backlog';

interface SectorBadgeProps {
    sector: Sector;
}

const SectorMap: Record<Sector, { icon: LucideIcon }> = {
    backlog: {
        icon: CircleDashed,
    },
    todo: {
        icon: Circle,
    },
    inProgress: {
        icon: Badge,
    },
    done: {
        icon: BadgeCheck,
    },
}

export default function SectorBadge({ sector }: SectorBadgeProps) {
  const { icon: Icon } = SectorMap[sector];

  return (
    <span className="inline-flex items-center gap-1">
      <Icon className="w-4 h-4" />
      <span>{sector}</span>
    </span>
  );
}