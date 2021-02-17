---
title: CSS architecture | OOCSS, SMACSS, BEM, ITCSS? - Part II
date: 2021-02-15
publishdate: 2021-02-17
draft: false
description: The CSS architecture I decided to use for this blog and my decision how I will define it.
tags:
  - CSS
  - CSS3
  - Architecture
  - BEM
  - ITCSS
  - SMACSS
  - OOCSS
---
In the <a href="/blog/2021/css-architecture/">previous part of this article</a> I presented the CSS frameworks and methodologies which had the most influence on my way of writing CSS today. In my comments to the specific frameworks I already gave you some pros and cons and in this second part of this article, I want to show my final thoughts and the way I decided to go with this very blog.
<!-- more -->
<figure>
    <img src="/src/img/yes.jpg" alt="Scrabble tiles showing Yes" title="CSS Architecture - OOCSS, SMACSS, ITCSS, BEM? Yes!">
</figure>

One thing upfront: For me not a single methodology did fit my style and thinking. But noone prevents one from cherry picking and taking the best out off the things you are presented, no?

So I really thought about what I want to achieve and what fits best to my style and I came up with an architecture with many elements you definetely will recognize!

## Folder and file hierarchy
### OOCSS
As already stated, this was way too abstract for me. Although I like the basic ideas, I moved on, and chose a methodology which is based on the general ideas but is may more tangible.

### SMACSS
For me the structure of SMACSS was too restricting and too bloated. But I really did like the states which are a no go in BEM but really are a big helper when dealing with lots of JavaScript interaction.

### ITCSS
But going without a structure is also not a good idea, so I chose ITCSS (you may have expected this one after reading my summary). This gives me enough structure for my CSS components without going too overboard.

So my folder structure now looks like this:
~~~bash
src \
    css \
        settings
        generic
        elements
        components
        utilities
~~~
Where utilities also contain my states.
This still has space to improve, since I don't have themes or mixins in use because I don't need them (yet).

## BEM and SASS
Although I really didn't like BEM in the beginning, I now see the benefits in larger projects. I know that with CSS modules or CSS-in-JS you can somewhat migitate and/or completely get rid of specificity issues, but writing CSS in JS is just something I don't want to do at all and going down the road and using CSS modules I didn't see the benefits (like when I did create a React application where I did go this route).

Therefore, to avoid specificity wars, I decided to go with BEM and not some obscure self-written ruleset. Since I also use SASS, this is nearly a no brainer, because you can easily chain blocks, elements and modifiers. THE CSS code then becomes really maintainable and much easier to read than when writing everything by hand.

So I can easily go with something like this:
~~~css
.link {
    &__icon {
        margin: 0 1.5rem;
        width: 1.5rem;

        &-primary,
        &-secondary {
            transition: var(--transition-speed);
        }

        &-primary {
            color: var(--text-green-light);
        }

        &-secondary {
            color: var(--text-green);
        }
    }
}
~~~

## Summary
You may think now: "But Christian, are you nuts?! This much thinking and over-engineering for this measly blog?" And you are not wrong here.
But for me this was not just doing something for this specific blog, but to rethink and re-evaluate what I made in the past and how I want to continue in the future.

By cherry picking and using only what worked best for me, I think I found a good way to incorporate well-known patterns into something that is extendable, understandable and doesn't need an immense tooling chain other than a Gulp build (which I need anyways because of Eleventy).
