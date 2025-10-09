import React from "react"
import clsx from "clsx"
import type { StackProps, StackGap, StackPadding } from "./Stack.types"

/**
 * 🧱 DS Stack — composant de layout flexible basé sur les tokens DS
 */
export const Stack: React.FC<StackProps> = ({
                                              direction = "vertical",
                                              gap = "md",
                                              padding,
                                              fullCenter = false,
                                              align,
                                              justify,
                                              wrap = false,
                                              className = "",
                                              children,
                                              ...rest
                                            }) => {
  // 📐 Direction
  const directionClass =
    direction === "vertical" ? "flex-col" : "flex-row"

  // 📏 Espacement interne & externe
  const gapMap: Record<StackGap, string> = {
    none: "gap-0",
    xs: "gap-ds-xs",
    sm: "gap-ds-sm",
    md: "gap-ds-md",
    lg: "gap-ds-lg",
    xl: "gap-ds-xl",
    "2xl": "gap-ds-2xl",
    "3xl": "gap-ds-3xl",
  }

  const paddingMap: Record<StackPadding, string> = {
    none: "p-0",
    xs: "p-ds-xs",
    sm: "p-ds-sm",
    md: "p-ds-md",
    lg: "p-ds-lg",
    xl: "p-ds-xl",
    "2xl": "p-ds-2xl",
    "3xl": "p-ds-3xl",
  }

  // 🧭 Alignement
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

  return (
    <div
      {...rest}
      className={clsx(
        "flex transition-all duration-ds-normal ease-ds-standard",
        directionClass,
        gapMap[gap],
        padding && paddingMap[padding],
        align && alignMap[align],
        justify && justifyMap[justify],
        wrap && "flex-wrap",
        fullCenter && "items-center justify-center text-center",
        className
      )}
    >
      {children}
    </div>
  )
}

Stack.displayName = "Stack"
