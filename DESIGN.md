---
name: Przędza
description: Neapolitan wood-fired pizzeria in a Łódź spinning mill; the site speaks in brick, painted wall signs and cast-iron factory windows.
colors:
  brick: "#9e3a22"
  brick-joint: "#7d2c19"
  brick-tile: "#80412d"
  soot: "#1a1512"
  soot-2: "#2a221d"
  iron: "#2d4a3e"
  iron-2: "#243d33"
  ochre: "#e0a82e"
  ochre-press: "#c99220"
  lime: "#e4e1d8"
  lime-2: "#d6d2c6"
  paint: "#ebe7dc"
  ink: "#1a1512"
  ink-soft: "#4a403a"
  on-dark-soft: "#c9c2b4"
  on-brick-soft: "#f0d9cc"
  field: "#f6f4ee"
  error: "#8f1d12"
  error-on-dark: "#ffb4a3"
typography:
  display:
    fontFamily: "'Big Shoulders Display Variable', 'Arial Narrow', sans-serif"
    fontSize: "clamp(3.5rem, 11vw, 8rem)"
    fontWeight: 900
    lineHeight: 0.85
    letterSpacing: "0.03em"
  headline:
    fontFamily: "'Big Shoulders Display Variable', 'Arial Narrow', sans-serif"
    fontSize: "clamp(2.75rem, 7vw, 5rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "0.01em"
  title:
    fontFamily: "'Big Shoulders Display Variable', 'Arial Narrow', sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 1.875rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.01em"
  body:
    fontFamily: "'Source Sans 3 Variable', 'Segoe UI', sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.55
  lead:
    fontFamily: "'Source Sans 3 Variable', 'Segoe UI', sans-serif"
    fontSize: "clamp(1.125rem, 1.6vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "'Big Shoulders Display Variable', 'Arial Narrow', sans-serif"
    fontSize: "1.25rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.04em"
  price:
    fontFamily: "'Big Shoulders Display Variable', 'Arial Narrow', sans-serif"
    fontWeight: 700
    letterSpacing: "0.02em"
    fontFeature: "tnum, lnum"
rounded:
  none: "0px"
spacing:
  c1: "1.5rem"
  c2: "3rem"
  c3: "4.5rem"
  c4: "6rem"
  c6: "9rem"
  gutter: "clamp(1rem, 4vw, 3rem)"
  wide: "78rem"
components:
  button-primary:
    backgroundColor: "{colors.ochre}"
    textColor: "{colors.soot}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.625rem 1.25rem"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "{colors.ochre-press}"
    textColor: "{colors.soot}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.paint}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.625rem 1.25rem"
    height: "3rem"
  input:
    backgroundColor: "{colors.field}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0.625rem 0.75rem"
    height: "3rem"
  price-tag:
    backgroundColor: "{colors.brick}"
    textColor: "{colors.paint}"
    typography: "{typography.price}"
    rounded: "{rounded.none}"
    padding: "0.25rem 0.625rem"
  posted-card:
    backgroundColor: "{colors.paint}"
    textColor: "{colors.soot}"
    rounded: "{rounded.none}"
    padding: "1.5rem clamp(1.25rem, 3vw, 2rem)"
  window-frame:
    backgroundColor: "{colors.soot}"
    rounded: "{rounded.none}"
---

# Design System: Przędza

## Overview

**Creative North Star: "The Oven in the Spinning Mill"**

A Neapolitan wood-fired oven set inside a red-brick Łódź textile mill. The site speaks the language of the building, not of an Italian costume: whole sections are brick wall, headings are painted onto that wall in a condensed sign-writer's grotesque, photographs sit behind cast-iron factory window bars, and prices read like numbers on a woven label. It rejects both the cream-and-terracotta "rustic Italy" and the dark neon loft.

Sections are full-bleed bands of material (brick, soot, cast iron, lime-wash), stacked like the courses of a facade. Density is moderate and phone-first: big sign type, short lines, one clear action colour. Depth comes from material and thick structural borders, not from floating UI.

**Key Characteristics:**
- Real photographic brick as a section field, with sign titles masked by the same photograph so paint holds on the brick faces and drops out in the joints.
- One condensed uppercase sign face plus one humanist text sans.
- Spacing in multiples of a single brick "course" (1.5rem).
- Square corners everywhere; thick iron and brick-joint borders carry structure.
- Ochre is reserved for actions.

## Colors

A building palette: fired brick, soot, oxidised cast-iron green, faded wall paint and lime-wash, with sign-painter's ochre as the single action colour.

### Primary
- **Fired Brick** (`brick`): field colour of brick sections (as the wall photograph), price tags, checked checkboxes, input focus ring on light ground, scrollbar thumb, lit process markers.
- **Brick Joint** (`brick-joint`): mortar-dark rule under the sticky header and above the mobile action bar, top edge of promo cards, outer ring of window frames.
- **Brick Tile Average** (`brick-tile`): background fallback under the brick photograph; matches the tile's average so the section never flashes a flat orange before the image loads.

### Secondary
- **Cast-Iron Green** (`iron`): window frames and muntins, photo borders, the order section field, the reviews form top edge, diet icons in the menu. `iron-2` is its darker shade.

### Tertiary
- **Sign Ochre** (`ochre`): primary buttons, focus outline on dark and brick grounds, text selection, skip link. `ochre-press` is its hover state.

### Neutral
- **Soot** (`soot`) / **Ink** (`ink`): dark bands (process, newsletter, footer, header), body text on light grounds. `soot-2` draws plinth ledges and dividers on soot.
- **Wall Paint** (`paint`): text on dark and brick grounds, posted cards, painted sign lettering.
- **Lime-Wash** (`lime`): the light section (menu, reservation card); cooler than cream on purpose. `lime-2` draws hairlines between menu items.
- **Field White** (`field`): input fill; turns pure white on hover and focus.
- **Soft text** (`ink-soft` on light, `on-dark-soft` on soot and iron, `on-brick-soft` on brick): secondary copy, notes, hints.
- **Error** (`error` on light, `error-on-dark` on dark grounds).

### Named Rules
**The Ochre Is for Doing Rule.** Ochre fills only things that act: buttons, focus, selection. It never decorates a heading, a card or a background.

**The Whole-Wall Rule.** Brick is a section field from edge to edge, never a small swatch, a card fill or a wallpaper behind a content box.

**The Cool Lime Rule.** The light ground is lime-wash `#e4e1d8`, not cream. Do not warm it.

## Typography

**Display Font:** Big Shoulders Display Variable (with Arial Narrow, sans-serif)
**Body Font:** Source Sans 3 Variable (with Segoe UI, sans-serif)

**Character:** A tall condensed sign-writer's grotesque, always uppercase and heavy, against a warm, legible humanist sans. The sign face shouts like lettering on a factory wall; the text face does the explaining.

### Hierarchy
- **Facade sign** (900, `clamp(5.25rem, min(24vw, 28vh), 16rem)`, 0.8, tracking 0.035em): the restaurant name painted across the first viewport. Height-capped on desktop so the windows and actions stay in the first screen; full width on phones. Used once.
- **Display / wall title** (900, `clamp(3.5rem, 11vw, 8rem)`, 0.85): section titles painted onto brick sections, masked by the paint texture.
- **Headline** (800, `clamp(2.75rem, 7vw, 5rem)`, 0.95): section titles on soot, iron and lime grounds.
- **Title** (800, `clamp(1.5rem, 3vw, 1.875rem)`, 1): card and group titles; menu item names run larger at 1.625rem.
- **Process numerals** (900, `clamp(3.25rem, 6vw, 4.75rem)`, 0.85): the 0 h / 24 h / 48 h / 90 s timeline marks.
- **Body** (400, 1.125rem, 1.55): running text; ingredient lines cap at 40ch.
- **Lead** (400, `clamp(1.125rem, 1.6vw, 1.3125rem)`): section intros, capped at 38ch.
- **Label** (800, 1.25rem, 0.04em, uppercase, sign face): buttons, photo captions, open-status line.
- **Note** (text face, 0.9375rem): hints, legal lines, error messages (600).

### Named Rules
**The Two Voices Rule.** Sign face for anything that would be painted or stencilled (headings, prices, buttons, numerals, status); text face for anything read in sentences. No third family.

**The Ledger Numbers Rule.** Prices and hours use tabular lining figures (`tnum`, `lnum`) and never wrap.

## Layout

Single column of full-bleed material bands. Content sits in a centred container of `min(100% - 2 × gutter, 78rem)` with a fluid gutter (`clamp(1rem, 4vw, 3rem)`); painted wall titles bleed to the same edge using padding instead of the container.

All vertical rhythm is in brick courses: `c1` 1.5rem, `c2` 3rem, `c3` 4.5rem, `c4` 6rem, `c6` 9rem. Section padding is `clamp(c3, 8vw, c6)`. Gaps inside components use c1 to c4; small internal gaps (0.25 to 1rem) handle text-level spacing.

Two-column splits open at about 60rem (process 5:7, menu two columns, order and reservation side by side); promo cards go to three columns at 56rem with staggered top offsets of one and two courses, like posters pasted at different heights. Below 60rem the facade keeps one window instead of three; below 52rem the navigation collapses behind a toggle and a fixed two-button action bar slides up from the bottom. Below 30rem the dish photo strip becomes a 72%-width snap carousel that bleeds to the screen edge.

**The Course Rule.** Every block-level gap is a multiple of the 1.5rem course. If a value is not c1 to c6, it belongs inside a component, not between components.

## Elevation & Depth

Depth is material, not floating. Surfaces sit flat on their bands; structure comes from thick solid edges (0.5 to 0.75rem top borders, 0.625rem iron frames) and from the photographic brick itself. One soft drop shadow exists and is used only for objects physically mounted on the wall.

### Shadow Vocabulary
- **Wall mount** (`box-shadow: 0 0.75rem 1.5rem -0.75rem rgb(26 21 18 / 0.6)`): factory windows, posted promo cards, the map poster in contact. Never on buttons or inputs.
- **Joint ring** (`box-shadow: 0 0 0 3px var(--brick-joint)`): the mortar line around a window frame, paired with the wall mount.
- **Muntin** (`box-shadow: inset 0 0 0 3px var(--iron)`): draws the 3 × 2 window bars over a photo.

### Named Rules
**The Mounted-Only Rule.** Only things fixed to the wall (windows, posters, map) cast the wall-mount shadow. Interactive controls stay flat.

## Shapes

Square. Every surface, button, input and checkbox has 0 radius; the building is brick and iron. The only circles are the process-timeline markers (1.25rem dots ringed in paint). Recurring silhouettes: the factory window (thick iron frame, 3 × 2 bars, brick-joint ring), the posted card (paint or iron slab with a heavy coloured top edge), and the woven price label (brick block with an inset dashed paint stitch).

## Components

### Buttons
Heavy, stencilled, unmistakable.
- **Shape:** square (0), minimum height 3rem, 2px border matching the fill.
- **Primary:** ochre fill, soot text, sign face 1.25rem 800 uppercase with 0.04em tracking, padding 0.625rem 1.25rem, optional 1.25rem icon before the label.
- **Hover / Active:** fill shifts to ochre-press over 160ms on `cubic-bezier(0.16, 1, 0.3, 1)`; press nudges down 1px. Busy and disabled states drop to 0.7 opacity with a progress cursor.
- **Line:** transparent fill, currentColor text and border; hover adds an 8% white wash on dark grounds, 6% soot wash on lime.

### Inputs / Fields
- **Style:** 2px ink border, square, field-white fill, 3rem minimum height, label above in 600 at 1rem, hint below in soft text.
- **Focus:** fill turns white, 3px brick outline at 1px offset.
- **Error:** error-red border on a pale red fill (`#fbefec`) with a 600-weight message below.
- **Checkbox:** square 1.375rem box, 2px currentColor border; checked fills brick with a paint check mark. Selects carry a drawn chevron, no native arrow.

### Cards / Containers
- **Posted card:** paint slab (or iron for the middle card), soot text, 0.5rem brick-joint top edge, wall-mount shadow, square. Used for promotions pasted on the brick wall.
- **Form card:** lime-wash or paint ground with a 0.75rem top edge in brick (reservation) or iron (reviews), padding `clamp(1.25rem, 3–4vw, 2–2.5rem)`.
- **Plinth:** soot ledge under the facade with a 0.75rem soot-2 top edge, holding the live open/closed status, address and the two ochre actions.

### Navigation
- **Desktop:** sticky soot header with a 3px brick-joint bottom rule; wordmark in sign face 900; links in text face 600, underlined on hover with a 3px brick line; phone number and an ochre booking button on the right.
- **Mobile (≤52rem):** square 3rem toggle and phone buttons with 2px paint borders; the open menu stacks links in sign face 1.625rem uppercase separated by soot-2 hairlines. A fixed action bar (call, book) slides up from below with a 3px brick-joint top rule and respects the safe-area inset.

### Factory Window (signature)
A photograph inside a 0.625rem cast-iron frame, ringed by a 3px brick-joint line, with 3 × 2 iron muntins drawn over the image and the wall-mount shadow. It is the only way hero photography is framed. Smaller dish and process photos use the plain form: a 0.5rem iron border without bars.

### Woven Price Tag (signature)
Brick block, paint text in the sign face with tabular figures, padding 0.25rem 0.625rem, and a 1px dashed paint outline inset by 4px like a stitched label. Menu rows join name and tag with a dotted leader.

### Process Axis (signature)
A vertical 6px rail on soot whose fill (a diagonal paint twill) grows with scroll via a view timeline; each step's ring marker lights to brick as it enters. Static under reduced motion or without scroll-timeline support.

## Do's and Don'ts

### Do:
- **Do** build sections as full-bleed bands of one material: brick, soot, iron or lime-wash.
- **Do** paint brick-section titles with the paint-mask texture aligned to the wall so letters break in the mortar joints.
- **Do** frame hero photography as a factory window: iron frame, 3 × 2 bars, brick-joint ring.
- **Do** keep every gap between blocks on the 1.5rem course scale.
- **Do** set prices in the sign face with tabular lining figures, on a brick tag or a dotted leader.
- **Do** switch the focus colour by ground: ochre on soot, iron and brick text; brick on lime.

### Don't:
- **Don't** use ochre for anything that is not an action, focus or selection.
- **Don't** round corners on surfaces, buttons or fields.
- **Don't** warm the light ground toward cream or use terracotta-and-cream "rustic Italy" styling.
- **Don't** turn the dark bands into a neon loft: no glow, no saturated light colours on soot.
- **Don't** put the wall-mount shadow on controls.
- **Don't** introduce a third typeface or set sentences in the sign face.
