---
title: 'The Styled-Components'
date: '11/09/2020'
description: 'Styled-Components'
---

<h3>1:  What is styled-components?</h3>
styled-components is the result of wondering how we could beautify CSS for styling React component structures. through that specialize in a single-use case we managed to optimize the enjoy for developers as well as the output for stop users.

aside from the progressed revel in for builders, styled-components provides:

computerized important CSS: styled-components keep tune of which additives are rendered on a page and injects their styles and not anything else, fully mechanically. combined with code splitting, this means your customers load the least quantity of code vital.
No magnificence call insects: styled-additives generates particular elegance names on your styles. You never have to fear approximately duplication, overlap, or misspellings.

![styledComponents](./styledComponents.png)

less complicated deletion of CSS: it is able to be difficult to know whether a category name is used someplace in your codebase. styled-components makes it obvious, as every little bit of styling is tied to a selected aspect. If the thing is unused (which tooling can come across) and gets deleted, all its styles get deleted with it.
simple dynamic styling: adapting the styling of a issue based on its props or a international theme is simple and intuitive while not having to manually manage dozens of classes.
Painless upkeep: you in no way ought to hunt throughout one of a kind documents to locate the styling affecting your element, so maintenance is a bit of cake irrespective of how massive your codebase is.
automated vendor prefixing: write your CSS to the present day standard and allow styled-additives manage the rest.
You get all of those advantages whilst nonetheless writing the CSS  and love, just bound to person additives.

<hr>
<b>Installation</b> <br>
Installing styled-components only takes a single command and you're ready to roll:

npm install --save styled-components
npm install --save styled-components
If you use a package manager like yarn that supports the "resolutions" package.json field, we also highly recommend you add an entry to it as well corresponding to the major version range. This helps avoid an entire class of problems that arise from multiple versions of styled-components being installed in your project.

In package.json:
<br>
{<br>
  "resolutions": {<br>
    "styled-components": "^5"
  <br>}<br>
}<br>
<br>
{<br>
  "resolutions": {<br>
    "styled-components": "^5"
  <br>}<br>
}<br>
NOTE
It's highly recommended (but not required) to also use the Babel plugin. It offers many benefits like more legible class names, server-side rendering compatibility, smaller bundles, and more.