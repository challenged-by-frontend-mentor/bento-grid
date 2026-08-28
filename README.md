# Frontend Mentor - Bento grid solution

![](.reference/preview.jpg)

This is a solution to the [Bento grid challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/bento-grid-RMydElrlOj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Bento grid solution](#frontend-mentor---bento-grid-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size

### Screenshot

<details>
  <summary>Mobile view</summary>
  <img src='screenshots/mobile-view.png' alt='Bento Grid challenge - Mobile view' width='375px'>
</details>
<details>
  <summary>Desktop view</summary>
  <img src='screenshots/desktop-view.png' alt='Bento Grid challenge - Desktop view'>
</details>

### Links

- Solution URL: [Bento Grid with Fluid clamp(), BEM & Integer CSS Grid](https://www.frontendmentor.io/solutions/test-_O5toBn4L1)
- Live Site URL: [Frontend Mentor | Bento grid](https://challenged-by-frontend-mentor.github.io/bento-grid/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties (Variables)
- CSS Grid (Responsive Bento layout)
- Flexbox
- Mobile-first workflow
- BEM (Block Element Modifier) methodology
- Modern CSS features (`clamp()`, `100dvh`, Modern Nesting)
- [React](https://reactjs.org/) - JS library

### What I learned

Through building and refactoring this Bento Grid layout, I deepened my understanding of modern CSS architecture, Grid calculations, and fluid responsiveness:

1. **BEM Naming Standard & CSS Specificity**: 
   I learned the importance of maintaining a clean BEM architecture. By avoiding deeply nested selectors and explicitly defining top-level modifier selectors, the CSS became much easier to maintain and free of specificity conflicts.

   ```css
   /* Clean, explicit BEM modifier targeting */
   .bento-card--hero .bento-card__title {
     font-size: 2.9rem;
     line-height: 0.92;
   }
   ```
2. **Systematic Fractional Grid Ratios (`fr`)**:
   Initially, I used decimal `fr` units (`2.4fr`) to match specific pixel values from the design. I learned that using integer-based ratios like `3fr 2fr repeat(6, 1fr)` provides a much more stable, predictable, and maintainable grid system across different browser engines without floating-point rounding issues.
   ```css
    .bento-grid {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: 3fr 2fr repeat(6, 1fr);
    }
   ```
3. **Fluid Responsiveness with `clamp()`**:
   Instead of hardcoding a fixed `padding-top` at specific media query breakpoints (e.g., jump from 32px to 82px at 1024px), I discovered how `clamp()` smoothly interpolates values based on the viewport width (`vw`).
   ```css
    .page-layout {
      /* Fluidly scales top padding between 32px and 82px based on screen width */
      padding: clamp(32px, 5.69vw, 82px) 16px 32px;
    }
   ```
4. **Modern Viewport Units & Defensive Layouts**:
   I learned to use **100dvh** (Dynamic Viewport Height) for full-height layouts on mobile browsers to prevent scrollbar flickering caused by browser UI bars, and replaced fixed **height** with flexible content sizing to avoid text overflow.

### Continued development

In upcoming projects, I plan to focus on:

- **Advanced CSS Layouts**: Exploring CSS Subgrid and container queries for even more flexible component designs.

- **Web Accessibility (a11y)**: Improving screen-reader compatibility, keyboard navigation, and ARIA attributes for complex components.

- **State & Interactivity**: Building dynamic, interactive components with React and managing UI state effectively.

### Useful resources

- [Atmos RGB to HSL Converter](https://atmos.style/color-converter/rgb-to-hsl) - I used this tool to convert background colors provided in RGB into HSL format. This helped me keep all color variables consistent within `:root` CSS custom properties.

## Author

- GitHub: [Kairung Vangmanaw](https://github.com/VangmanawKairung)
- Frontend Mentor - [@VangmanawKairung](https://www.frontendmentor.io/profile/VangmanawKairung)

## Acknowledgments

I would like to sincerely thank myself for staying persistent and continuing to push forward. A big thank you to the Frontend Mentor team for creating this challenge and providing the opportunity to practice and refine my skills. 

I am also grateful to Google for developing Gemini, which served as a great thought partner in helping me refactor my CSS and explore modern layout techniques. 

A special thanks to macOS Preview for making it quick and easy to inspect pixel values directly from the design image—this sped up my workflow significantly compared to trial and error. Lastly, I want to express my appreciation to every tool, program, and source of encouragement that supported me throughout this process.