---
layout: layouts/simple.njk
title: Credits
meta_description: Here you can get in touch with me
---
# Credits aka Imprint

<form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true" action="/thanks">
  <p class="hidden">
    <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
  </p>

  <label for="email">Email*:</label>
  <input type="text" name="email" required/>

  <label for="email">Name:</label>
  <input type="text" name="name" required/>

  <label for="message">Message*:</label>
  <textarea name="message" required></textarea>

  <button type="submit" class="right">Send</button>

</form>
