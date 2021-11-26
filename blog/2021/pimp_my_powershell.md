---
title: Pimp my Powershell - Use PSColor, Oh My Posh and Posh Git to color up your life
date: 2021-11-26
publishdate: 2021-11-26
draft: false
description: The standard Powershell is quite boring and frumpy. But there is a way of bringing color to your shell!
tags:
  - PowerShell
  - Windows Terminal
  - PSColor
  - Oh My Posh
  - Posh Git
  - Windows
  - Microsoft
---
Since I recently spent a lot of time in Windows Terminal and especially in PowerShell, I searched a way to get
more information in the prompt, like in Git Bash or a Unix shell. Luckily there are some awesome people, who
think the same and created some nice tools to achieve exactly this.
Which to choose and how to setup everything, I will show you in the following article.

<!-- more -->
<figure>
    <img src="/src/img/powershell_terminal.png" alt="PowerShell in Windows Terminal with color" title="PowerShell in Windows Terminal with color">
</figure>

## Windows Terminal
Before we start: I strongly suggest you get [Windows Terminal](https://www.microsoft.com/de-de/p/windows-terminal/9n0dx20hk701).
This enables you not only to run multiple shells in one Wrapper, but also bundles together as many Shells as
you want. I personally love to have my WSL -> Ubuntu running in one tab and another with a PowerShell and so
on (before the pimping I also had a Git Bash running which is obsolete now).

Now open up a PowerShell and let the fun begin!

## PSColor
First we install [PSColor](https://github.com/Davlind/PSColor) from [David Lindblad](https://twitter.com/davidlindblad).
This is as straightforward as it can get:
~~~powershell
Install-Module PSColor -Scope CurrentUser

Import-Module PSColor
~~~
This will enable the coloring and highlighting of files and folders with a `ls`.

But this is not enough, we want more colors (or at least more information on the command line)!


## Oh My Posh and Posh Git
Next step is to get [Oh My Posh](https://ohmyposh.dev/) | [Oh My Posh on GitHub](https://github.com/jandedobbeleer/oh-my-posh)
from [Jan de Dobbeleer](https://twitter.com/jandedobbeleer) and [Posh Git](https://github.com/dahlbyk/posh-git)
from [Keith Dalby](https://twitter.com/dahlbyk).

### Preparation with Nerd Fonts
This needs a bit more work, since Oh My Posh is intended to be used with a [Nerd Font](https://www.nerdfonts.com/).
So head over there, grab yourself a font of your liking and download it. I went with JetBrainsMono, since I am
used to it through wortking with JetBrains products. But you can choose whatever you like, Oh My Posh
recommends Meslo LGM NF. Install the font and select it as standard font in Windows Terminal `Strg+,` ->
Standard -> Display.

### Setting up the prompt
Now we are ready for the magic!

We want the Shell to display git states and some other information about the current folder and so on. Luckily
there are two plugins who do exactly that!

Posh Git displays Git information in the prompt and gives aus tab autocompletion for the git commands.
Oh My Posh gives us all the display sugar we need and enables us to colorize nearly anything in Powershell.

So let's install and activate it!

~~~powershell
Install-Module oh-my-posh -Scope CurrentUser
Install-Module posh-git -Scope CurrentUser

Import-Module oh-my-posh
Import-Module posh-git

Set-PoshPrompt -Theme jv_sitecorian
~~~

## Add everything to our User Profile

This looks already pretty awesome. But we will loose our nifty prompt on restart. So let's change this.

A simple:
~~~powershell
$profile
~~~
will give us the current location of our Powershell profile.
We can then open it with a IDE of our choice. If you have VS Code running you can directly fire it up via CLI:
~~~powershell
code <path to your file>\Microsoft.PowerShell_profile.ps1
~~~

Just add the commands from before
~~~powershell
Import-Module PSColor
Import-Module oh-my-posh
Import-Module posh-git

Set-PoshPrompt -Theme jv_sitecorian
~~~
save and reload your profile
~~~powershell
. $profile
~~~

and there you go!
If everything did work, your prompt should now look very similar to the screenshot from the beginning of this
article.

And yes, this will also port to IDEs which will open up an internal Terminal like VS Code. Although they might
need a bit more love depending on the fonts they inject.

Hope this was fun and helpful. After a short period of getting used to the different looking prompt I don't
want to go back anymore. Maybe you feel the same.
