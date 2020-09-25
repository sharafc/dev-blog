---
layout: layouts/simple.njk
title: The technology behind the Blog
meta_description: The technology behind the Blog
---

# Is it Magic or is it Technology?

The backbone of this site is a static site generator called [Eleventy (11ty)](https://11ty.io/)). To build and deploy I use the free services from [Netlify](https://netlify.com). This allows me to setup a listener which builds the site on each successful checkin on Github. It also provides me a free [Let's Enctrypt](https://letsencrypt.org/) certificate to deliver the page via HTTPS plus a free Netlify subdomain.
When I started with experimenting with the JAMstack and Netlify, it felt like doing magic. But the longer I continued, I realazied that it is just a tech stack, I had no experience with 👽

To use a bit of comfort options and enhance the blog, I added [Sass](https://sass-lang.com/) and some custom properties/filters to the core 11ty functionality. 

All the Code is available on [GitHub](https://github.com/sharafc/sharafc.github.io). I don't think you will find magic here, but if you find errors or violations of practices, please let me know.

## JAMstack
> Fast and secure sites and apps delivered by pre-rendering files and serving them directly from a CDN, removing the requirement to manage or run web servers.

For me the [JAMstack](https://jamstack.org/) was unknown. Big buzzword, but my jobwise experience was more in monolitic Java applications with heavy frontends and templating connected to an immense bussines logic layer. So I decided to try it out on my own.

The JAM in the JAMstack is:
- JavaScript
- API
- Markup

## Prospects
I want to take a look at [NetlifyCMS](https://netlifycms.org/). ATM writing blog entries is alawys doing it in the IDE, so having a web based editor seems much more convenient.
