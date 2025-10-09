import React from "react"
import clsx from "clsx"
import { Heading, Text } from "@/components/ui/typography"
import type { DSCardProps } from "./Card.types"

type CardSectionProps = {
  children: React.ReactNode
  className?: string
}

type CardType = React.FC<DSCardProps> & {
  Header: React.FC<CardSectionProps>
  Body: React.FC<CardSectionProps>
  Footer: React.FC<CardSectionProps>
}

/**
 * 🧱 DS Card — composant 100% tokenisé
 * Gère tous les variants et spacing via classes `ds-*`
 */
const CardBase: React.FC<DSCardProps> = ({
                                           variant = "default",
                                           hoverable = false,
                                           padding = "md",
                                           className = "",
                                           children,
                                           onClick,
                                           header,
                                           dsTitle,
                                           subTitle,
                                           footer,
                                           ...props
                                         }) => {
  /* 🎨 Variants DS */
  const variantClasses: Record<string, string> = {
    default: `
      bg-ds-background-surface
      border border-ds-border-default
      text-ds-text-primary
      shadow-ds-sm
    `,
    outlined: `
      bg-transparent
      border border-ds-border-strong
      text-ds-text-primary
      shadow-none
    `,
    elevated: `
      border border-ds-border-default
      bg-ds-background-surface
      text-ds-text-primary
      shadow-ds-lg
      transition-shadow
    `,
    subtle: `
      bg-ds-background-card
      border border-transparent
      text-ds-text-secondary
      shadow-none
    `,
    brand: `
     bg-ds-brand-primary
      border border-transparent
      text-ds-accent-primary
      shadow-ds-md
    `,
    gradient: `
      bg-ds-brand-gradient
      border border-transparent
      text-ds-text-inverse
      shadow-ds-lg
    `
  }

  /* 📏 Padding / spacing */
  const paddingClasses: Record<string, string> = {
    none: "p-0",
    sm: "p-ds-sm",
    md: "p-ds-md",
    lg: "p-ds-lg"
  }

  /* 🌀 Hover animation */
  const hoverClasses = hoverable
    ? "transition-transform duration-ds-normal hover:-translate-y-[2px] hover:shadow-ds-lg cursor-pointer"
    : ""

  const isImageHeader =
    typeof header === "string" &&
    (/\.(jpg|jpeg|png|webp|avif)$/i.test(header) ||
      header.startsWith("http://") ||
      header.startsWith("https://"))

  const resolvedTitle =
    typeof dsTitle === "function" ? dsTitle(props) : dsTitle
  const resolvedSubTitle =
    typeof subTitle === "function" ? subTitle(props) : subTitle

  return (
    <div
      {...props}
      onClick={onClick}
      className={clsx(
        "overflow-hidden rounded-ds-md transition-all duration-ds-normal",
        variantClasses[variant],
        hoverClasses,
        className
      )}
    >
      {/* HEADER */}
      {header && (
        <Card.Header
          className={clsx(
            isImageHeader
              ? "p-0"
              : clsx(paddingClasses[padding], "border-b border-ds-border-default/20")
          )}
        >
          {isImageHeader ? (
            <img
              src={header as string}
              alt="Card header"
              className="h-[220px] w-full object-cover"
            />
          ) : (
            header
          )}
        </Card.Header>
      )}

      {/* BODY */}
      <Card.Body className={clsx("flex flex-col gap-ds-md", paddingClasses[padding])}>
        {resolvedTitle && (
          <Heading
            level={3}
            className={clsx(
              "text-ds-text-primary leading-ds-snug mb-ds-xs",
              variant === "gradient" && "text-ds-text-inverse"
            )}
          >
            {resolvedTitle}
          </Heading>
        )}
        {resolvedSubTitle && (
          <Text
            variant="muted"
            size="sm"
            className={clsx(
              "mb-ds-sm leading-ds-normal",
              variant === "gradient" && "text-ds-text-inverse/80"
            )}
          >
            {resolvedSubTitle}
          </Text>
        )}
        {children && (
          <div
            className={clsx(
              "leading-ds-relaxed",
              variant === "gradient"
                ? "text-ds-text-inverse/90"
                : "text-ds-text-secondary"
            )}
          >
            {children}
          </div>
        )}
      </Card.Body>

      {/* FOOTER */}
      {footer && (
        <Card.Footer
          className={clsx(
            "px-ds-md pb-ds-md pt-ds-sm border-t border-ds-border-default/20",
            variant === "subtle" && "bg-ds-background-card",
            variant === "elevated" && "bg-ds-background-surface",
            variant === "gradient" && "bg-transparent text-ds-text-inverse"
          )}
        >
          {footer}
        </Card.Footer>
      )}
    </div>
  )
}

/* 🔹 Sous-composants */
const Header: React.FC<CardSectionProps> = ({ children, className }) => (
  <div className={clsx("overflow-hidden", className)}>{children}</div>
)

const Body: React.FC<CardSectionProps> = ({ children, className }) => (
  <div className={clsx("flex flex-col gap-ds-md text-left", className)}>{children}</div>
)

const Footer: React.FC<CardSectionProps> = ({ children, className }) => (
  <div className={clsx(className)}>{children}</div>
)

/* 🔸 Fusion du type principal + sous-composants */
export const Card = CardBase as CardType
Card.Header = Header
Card.Body = Body
Card.Footer = Footer

Card.displayName = "Card"
Card.Header.displayName = "Card.Header"
Card.Body.displayName = "Card.Body"
Card.Footer.displayName = "Card.Footer"
