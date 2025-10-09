import React from "react"
import clsx from "clsx"
import type { GridProps, GridGap } from "./Grid.types"

/**
 * 🧩 DS Grid — système de grille fluide et tokenisé
 */
export function Grid({
                       cols,
                       gap = "md",
                       justify,
                       align,
                       autoFit = false,
                       autoFill = false,
                       className = "",
                       children,
                       ...rest
                     }: GridProps) {
  const isAutoMode = !cols || Object.keys(cols).length === 0

  // 🎛️ Génération des classes responsive Tailwind
  const gridColsMap: Record<number, string> = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
    6: "grid-cols-6",
    8: "grid-cols-8",
    12: "grid-cols-12",
  }

  const colClasses = cols
    ? Object.entries(cols)
      .map(([bp, val]) => {
        const prefix = bp === "base" ? "" : `${bp}:`
        const colClass = gridColsMap[val as number]
        return colClass ? `${prefix}${colClass}` : ""
      })
      .join(" ")
    : ""

  // 📏 Gap tokenisé
  const gapMap: Record<GridGap, string> = {
    none: "gap-0",
    xs: "gap-ds-xs",
    sm: "gap-ds-sm",
    md: "gap-ds-md",
    lg: "gap-ds-lg",
    xl: "gap-ds-xl",
    "2xl": "gap-ds-2xl",
    "3xl": "gap-ds-3xl",
  }

  // 🧭 Alignement vertical et horizontal
  const alignMap: Record<string, string> = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
    baseline: "items-baseline",
  }

  const justifyMap: Record<string, string> = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly",
  }

  // ✅ Style inline UNIQUEMENT si aucune colonne n’est définie
  const gridTemplate =
    isAutoMode || autoFit || autoFill
      ? {
        gridTemplateColumns: `repeat(${
          autoFit || isAutoMode ? "auto-fit" : "auto-fill"
        }, minmax(250px, 1fr))`,
      }
      : undefined

  return (
    <div
      {...rest}
      style={gridTemplate}
      className={clsx(
        "grid transition-all duration-ds-normal ease-ds-standard",
        colClasses,
        gapMap[gap],
        align && alignMap[align],
        justify && justifyMap[justify],
        className
      )}
    >
      {children}
    </div>
  )
}

Grid.displayName = "Grid"
