---
layout: layouts/simple.njk
title: Credits
meta_description: Here you can get in touch with me
---
# Credits aka Contact me

<form name="contact" method="POST" netlify-honeypot="company-name" data-netlify="true" action="/thanks">
  <p class="hidden">
    <label>Don’t fill this out if you're human: <input name="company-name" /></label>
  </p>

  <label for="email">Email*:</label>
  <input type="text" name="email" required/>

  <label for="email">Name:</label>
  <input type="text" name="name" required/>

  <label for="message">Message*:</label>
  <textarea name="message" required rows="5"></textarea>

  <button type="submit" class="right">Send</button>

</form>
