---
title: Diving into CSS display modes
date: 2020-09-29
publishdate: 2020-09-29
draft: true
description: This post dives into the different CSS display modes
tags:
  - CSS
  - CSS3
  - display modes
  - Flexbox
  - Grid
---

While layouting pages one can get easily confused with the different behaviour of elements. If you work on a large codebase where overwriting the display properties of elements happens a lot, things can easily get out of hand. So let's get back to the basics and get a clear understanding of the different elements and display modes.
<!-- more -->
Let's begin with a CodePen which contains all the examples I will explain below:

<ul class="no-listitems horizontal-list">
    <li><a href="#block">display: block</a></li>
    <li><a href="#inline">display: inline</a></li>
    <li><a href="#inline-block">display: inline-block</a></li>
    <li><a href="#flow-root">display: flow-root</a></li>
    <li><a href="#flex">display: flex</a></li>
    <li><a href="#grid">display: grid</a></li>
</ul>

<p class="codepen" data-height="404" data-theme-id="dark" data-default-tab="result" data-user="sharafc" data-slug-hash="NWNZxmO" data-preview="true" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Display attributes">
  <span>See the Pen <a href="https://codepen.io/sharafc/pen/NWNZxmO">
  Display attributes</a> by Christian Sharaf (<a href="https://codepen.io/sharafc">@sharafc</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## <a id="block"></a>display: block
A block element always starts on a new line and takes up the full width available, defaulting to 100% if the parent doesn't define otherwise.
There are a lot of elements which are by default a block element (having the `display: block` property):
```html
<address> <article> <aside> <blockquote> <canvas> <dd> <div> <dl> <dt>
<fieldset> <figcaption> <figure> <footer> <form>
<h1>-<h6> <header> <hr> <li> <main> <nav> <noscript> <ol> <p> <pre>
<section> <table> <tfoot> <ul> <video>
```
## <a id="inline"></a>display: inline
An inline element only takes the width and height its content needs and does not force a new line. Styling margin and padding will only affect the width, but not the height of the element since it doesn’t impact the page layout. By default inline elements can not contain block elements.
Following a list of some elements which are by default `display: inline`:
```html
<a> <abbr> <acronym> <b> <big> <br> <button> <cite> <code> <em> <i> <img> <input> <label> <map>
<object> <output> <script> <select> <small> <span> <strong> <sub> <sup> <textarea>
```

## <a id="inline-block"></a>display: inline-block
Now comes a more specific display property, which is not defaulted by any of the common HTML elements.
The behaviour is the same like an inline element with the addition that it can take width and height and repsects magins and paddings. It still does not force a new line or defaults to the full width of the parent. It just influences its own layout.
This can be helpful if you want to have a link which should be a bit more prominent (call-to-action) or want to have a horizontal navigation.

## <a id="flow-root"></a>display: flow-root
As (maybe) a not so known display property, it really shines when you are working with lots of floats and have to use the famous clearfix hack. Fear no more! With `display: flow-root` there is no need for this anymore.
An element with `display: flow-root` generates a block container and always establishes a new block formatting context for its contents. Therefore it clears all surrounding floats for its generated container. Also it is widely supported (IE11 not included) and can really easy up your CSS code base.

Further reading:
* [Support table for display: flow-root on caniuse.com](https://caniuse.com/?search=flow-root)
* [Draft for Display Layout Models on CSSWG](https://drafts.csswg.org/css-display-3/#valdef-display-flow-root)

## <a id="flex"></a>display: flex
`display: flex` creates a Flexbox container, a one-dimensional (either row or column) layout model. It offers the possibility to easily distribute space between items, change flow-directions and growing of content.

Further reading:
* [Complete Guide on Csstricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [Comprehensice documentation on the Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
* [Specification on W3.org](https://www.w3.org/TR/css-flexbox-1/)

## <a id="grid"></a>display: grid
`display: grid` creates a Grid container that holds all the grid elements of a CSS Grid you define. A CSS Grid enables you to seperate source (HTML) and layout (CSS) and redefine the layout, e.g. with Media Queries, without having the need to change our markup. In difference to a Flexbox Layout, a Grid Layout is 2 dimensional (consists of rows AND columns).

Further reading:
* [Grid by Example from Rachel Andrews](https://gridbyexample.com)
* [Mozilla Knowledgebase](https://mozilladevelopers.github.io/playground/css-grid)
* [Specification on W3.org](https://www.w3.org/TR/css-grid-1/)

---

Both layout types (Flexbox and Grid) are a bit more complex and deserve their own posts. Since both are now widely supported (even IE11 supports a subset) you have powerful layout mechanism at your disposal, way beyond layout tables and div soups. So stay tuned.
