# Frontend design system

- Before building a section or control, check `src/components/ui/index.ts` and the examples at `/design-system`. Reuse the existing primitives and their variants.
- Keep shared visual values in `src/styles/tokens.css`. Use semantic CSS custom properties for colors, typography, spacing, layout dimensions, borders, radii, and interaction states. Add or update a token there when the change should affect the system as a whole. Keep page-specific composition in local CSS Modules.
- Build page sections by composing shared primitives. Keep business content and feature behavior in the page or feature that owns them. Add a reusable component or named variant to `src/components/ui/` when multiple sections need the same pattern.
- Use `Button` for actions and `ButtonLink` for destinations. Preserve keyboard focus, accessible names, logical heading levels, and narrow layouts. Keep primitives free of client JavaScript unless the interaction requires it.
- Treat external references as inspiration for section types, content grouping, and action hierarchy. Create original styling, copy, and layouts for SIMPLE.
- Update `/design-system` when adding or changing a shared pattern. Check the preview at narrow and wide widths and run lint, type checking, and the static build.
