---
title: CSS architecture | OOCSS, SMACSS, ITCSS, BEM? - Part I
date: 2021-02-02
publishdate: 2021-02-03
draft: false
description: The CSS architecture I decided to use for this blog and my process of thought while finding the decision
tags:
  - CSS
  - CSS3
  - Architecture
  - BEM
  - ITCSS
  - SMACSS
  - OOCSS
---
While musing about the future CSS architecture for my blog and deliberatly questioning my past direction of thinking. So I decided to start from the beginning and update my knowledge on CSS architecture frameworks or paradigms. With this post I want to take you on my journey of thoughts und and my decision finding process.
<!-- more -->
<figure>
    <img src="/src/img/library.jpg" alt="Library shelves full of books" title="CSS Architecture - OOCSS, SMACSS, ITCSS, BEM? Yes!">
</figure>



In the "good old days" I just wrote my CSS like it came to my mind. My projects I worked on, were small, tailored to only one customer with
no need to tweak for performance or reusability. And for those roughly 300-500 lines of CSS to get a simple website running no real cascade and specificity tuning was needed.

I then joined a company where bigger websites were build and you had to somewhat write reusable CSS code, but still no bigger concepts and architecture was needed. After switching to another project, whichs only purpose was to present the company portal to the customers with
non-functional requirements like SEO performance, loading times and serving multiple subportals my mindset had to change fast. We decided to introduce a pre-processor (Less was the thing at that time) and to think about a defined structure and imports for our CSS. So we started in the green field and enhanced it step-by-step.

At this time multiple ideas for exactly this problem came up. Our frontend team discussed them, threw most of them away and picked the cherries which seemingly fit best to our expertise. For example, we decided against BEM notation, because we were all used to the cascade (and more or less did write component driven CSS), decided against the structure of SMACSS because we felt it was too restricting and came up with our own (well working) ideas.

With a bit of a distance to all those decisions and leaving the project for good, I had time to rethink my approach to writing CSS and rework the basics. Following I want to give some abbreviated information about the main concepts I
am working with (or are the foundation of the methodologies used).

<ul class="no-listitems horizontal-list">
    <li><a href="#oocss">OOCSS</a></li>
    <li><a href="#smacss">SMACSS</a></li>
    <li><a href="#bem">BEM</a></li>
    <li><a href="#itcss">ITCSS</a></li>
</ul>

## <a id="oocss"></a> OOCSS - Object Oriented CSS

At around 2009, [Nicole Sullivan](https://twitter.com/stubbornella) held a talk about [OOCSS (Object Oriented CSS)](https://www.slideshare.net/stubbornella/object-oriented-css) which for me was pretty mind-boggling at that time.
Since information about the idea is pretty difficult to find, I think the best place to start is the [Github Wiki](https://github.com/stubbornella/oocss/wiki) of the project. It contains also some in-depth examples.

<blockquote>
    <p>The focus of OOCSS is the idea of treating page elements as objects, giving all these objects classes, treating objects’ classes as single entities in style sheets, and taking it from there</p>
    <cite>Wikipedia</cite>
</blockquote>

It basically follows two simple principles:
<ul>
    <li>Separate Structure and Skin</li>
    <li>Separate Container and Content</li>
</ul>

When following the idea, you will directly run into design issues when your project was done in "the old ways".
E.g. a Heading which should look in different parts of the page different. Or Headings of different semantic which should look the same. Or Boxes which have similar shadows and looks. The solution is to "choose one" and make your components behave consistent throughout your page.

Also you should avoid specifying elements in your CSS (with some expetions).
~~~css
// Good
.myCss {}

// Bad
p.myCss {}
~~~

What I do like about the idea behind OOCSS is, that it follows the DRY principle. In theory you should achieve a much better code structure
and less redundance. But since it is only an abstract concept with some recommendations, I found it pretty hard to follow and implement it. That is why I decided against it in the past.

But with good ideas, it also inspired others to get into more precise implementations of the idea. So let's continue to travel in CSS history.

## <a id="smacss"></a> SMACSS - Scalable and Modular Architecture for CSS

[SMACSS](http://smacss.com) is a design pattern created by [Jonathan Snook](https://snook.ca). It originated in his works at Yahoo! and was
inspired by Nicoles OOCSS (which you still can see in the module based system) but did implement a definite approach and a specific ruleset.
One rule of thumb: Never use ID selectors and `!important`

Its core is categorized in five parts:

### Base rules
Base rules apply to elements using element selectors, (descend) child selectors alonng with pseudo-classes. Also your resets would belong here, e.g.:
~~~css
body {
    // my styles here
}
a {
    // my styles here
}
a:hover {
    // my styles here
}
~~~

### Layout rules
The place for logic-less containers which only fulfill a layout purpose and layout elements which only occur once on a page. In the book the usage of ID selectors is mentioned and also layout dependend styling, which he prefixes with an `l-`.

~~~css
#sidebar {
    float: right;
}
.l-flipped #sidebar {
    float: left;
}
.l-fixed #sidebar {
    width: 200px;
}
~~~

Remember the rule of thumb?
He also explains when a ID selector might be useful.
<blockquote>
<p>To be clear, using ID attributes in your HTML can be a good thing and in some cases, absolutely necessary. For example, they provide efficient hooks for JavaScript. For CSS, however, ID selectors aren’t necessary as the performance difference between ID and class selectors is nearly non-existent and can make styling more complicated due to increasing specificity.</p>
</blockquote>

IMO this is owed to the time the book was written. Nowadays you would use the semantic elements and avoid ID selectors for CSS wherever possible.

### Module rules
The most complex element in this pattern. It describes the more specific components of a page. Navigation, dialogues, widgets etc. pp. which mostly are located inside a layout component.
It is recommended to completely avoid element selectors and only use class names.
This whole block is pretty complex and I would recommend to check the [SMACSS documentation](https://smacss.com/book/type-module) for in-depth examples.
But basically it should look like this:
~~~css
.navigation {
    // my styles here
}
.navigation-item {
    // my styles here
}
~~~

If you take a closer look, you can directly see, how a CSS pre-processor will come in handy in this part, since you can automatically create those child classes.

### State rules
Styles augmenting and overriding all previous styles. Those should be very simple and target only very few attributes. They most of the time indicate a Javascript dependency and are the only place where the dreaded `!important` could be considered.

~~~css
.is-hidden {
    display: none;
}
~~~

Jonathan makes also a point why `!important` is allowed:
<blockquote>
<p>Since the state will likely need to override the style of a more complex rule set, the use of !important is allowed and, dare I say, recommended. (I used to say that !important was never needed but on complex systems, it is often a necessity.) You won’t normally have two states applied to the same module or two states that tend to affect the same set of styles, so specificity conflicts from using !important should be few and far between.
With that said, be cautious. Leave !important off until you actually and truly need it.</p>
</blockquote>

### Theme rules
The place to overwrite the primary types like colors and fonts. Only needed when you realy have a themeing requirement in your project, otherwise just skip it.

~~~css
// in module
.navigation-item {
    color: blue;
}
// in theme
.navigation-item {
    color: red;
}
~~~

What I really like about that approach is, that it gives you a style structure and some rules which you can follow. But for me it is still not
"strict" enough, since you are absolutely free in your file and folder structure and thus a team with different experiencve levels could divert
in different ways of writing the CSS of a project.

## <a id="bem"></a> BEM - Block Element Modifier
[BEM](http://getbem.com) is a methodology to help you create reusable CSS and fight specificity in your growing CSS  by a ruleset on how to write and store your CSS classes.
If you can get your head around the syntax and restrictions, it is not too difficult to understand. Basically everything in BEM is a module.
It contains of a block, an element and its modifiers (hince the name). In theory this concept is pretty straightforward:

### Block
A block containing other styles. It is the highest level of a module or component. Let's think of a navigation:
~~~css
.navigation {
    width: 90vw;
}
~~~

### Elements
The elements are the related children of a component. They always begin with the corresponding block name two underscores (__) and a name. They have no standalone value and are always tied to their block.
~~~css
.navigation__item {
    color: black;
}
.navigation__link {
    color: blue;
}
~~~

### Modifiers
Modifiers are meant to handle nuances between similar elements. The should be used to change appearance or behaviour.
~~~css
.navigation__link--red {
    color: red;
}
~~~

If you follow this concept also to file management, you come very fast to a structure which follows your blocks and elements.
~~~bash
\block
  \element
    \modifier
~~~
Which results in a one file per element structure, which can be overwhelming extremely fast.

At first I absolutely hated this approach. For me it was as foreign as learning another spoken language adn I didn't see the benefits because
I was able to keep the specificity low and have a nice cascade. But after a few more years in the field, working on a pretty chaotic project
and having much more confidence in preprocessors, I wanted to embrace and learn it. Without a preprocessor I wouldn't even touch it to
be honest. Too much hastle.
I also don't like the suggested file structure. Too deeply nested without a good benefit.

## <a id="itcss"></a> ITCSS - Inverted Triangle CSS
I first stumbled upon ITCSS while watching this [Talk from Harry Roberts](https://www.youtube.com/watch?v=1OKZOV-iLj4&t=404s). The idea is
to provide a structure for scalable and maintainable CSS. The real charm is, that it can easily be used with OOCSS, SMACSS and BEM since it is no ruleset how to actually write your CSS but a guideline how to structure it.

For this it separates your CSS into following layers:

### Settings
Mostly used with preprocessors annd contain the global definitions for color, font, breakpopints and so on.

### Tools
The place for your mixins and functions. This also is mostly used with preprocessors.

### Generic
The first layer which actually creates and contains CSS. Here you store your resets and normalize styles. Also box-sizing definitions
should be located here.

### Elements
Styling for the bare HTML elements. Layer to to override browser defaults and define your Typographie and layout types like `<header>`, `<footer>` `<ul>` and so on.

### Objects
The layer for layout elements and undecorated design patterns. Here only class based selectors are used to style your objects.

### Components
This is the layer where most of the magic should happen. This is the place our widgets and components are styled.

### Utilities
The last layer with your high specificity helpers which have potential to overwrite anything in your previous layers.

<blockquote>
<p>The triangle also shows how styles represented by selectors are ordered in the resulting CSS: from generic styles to explicit ones, from low-specificity selectors to more specific ones (but still not too specific, IDs are not allowed) and from far reaching to localized ones.</p>
<cite>Lubos Kmetko</cite>
</blockquote>

I really like this structure! It gives you a clear idea where your things should be located and helps you to organize your stuff. It is very powerful with a preprocessor and fully compatible with OOCSS, SMACSS or BEM.
If you work with a preprocessor you can easily have one entry point to your project CSS and just import the different layers from there.

## Resume
These are the most influental patterns for me. I know that there are a lot more out there, some also combined with design patterns ([Atomic Design from Brad Frost](https://atomicdesign.bradfrost.com/) for example.

But the most exciting part of all of this is: What do I make out of all these patterns?
More to that in Part II of this article.
