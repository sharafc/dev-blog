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
  <p>
    <label>Email: <input type="text" name="email" required/></label>
  </p>
  <p>
    <label>Message: <textarea name="message" required></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
