---
title: Node Version Manager (nvm) unter Windows nutzen
date: 2020-06-16
publishdate: 2020-06-16
description: Node Version Manager (nvm) unter Windows nutzen
tags:
  - NodeJS
  - nvm
  - NPM
  - JavaScript
---

Wenn man mit unterschiedlichen Versionen von NodeJS und NPM arbeiten möchte oder muss, stellt sich sehr schnell die Frage, ob man wirklich virtuelle Maschinen mit den unterschiedlichen Versionen benötigt. Oder ob man jedesmal beim nötigen Versionswechsel NodeJS de- und neuinstallieren muss. Eine schnelle Suche über eine Suchmaschine der Wahl, fördert zum Glück sehr schnell die verschiedenen Versionsmanager zu Tage.
<!-- more -->
<figure>
  <img src="/src/img/nodejs_postit.jpeg" alt="Person holding a PostIt with NodeJS written on" title="Person holding a PostIt with NodeJS written on">
  <figcaption><a href="https://instagram.com/hiteshchoudharyofficial">©Hitesh Choudhary</a></figcaption>
</figure>

Da ich <a href="https://github.com/nvm-sh/nvm" target="_blank">nvm</a>, <a href="https://github.com/tj/n" target="_blank">n</a> und <a href="https://github.com/marcelklehr/nodist" target="_blank">nodist</a> unter Windows nur schwer oder gar nicht zum Laufen zu bekommen habe, ist meine Entscheidung <a href="https://github.com/coreybutler/nvm-windows" target="_blank">auf nvm-windows</a> gefallen.

## nvm-windows
nvm-windows verfolgt einen etwas anderen Ansatz als die anderen Versions Manager und arbeitet mit symlinks (ja richtig gelesen!) anstatt mit batch und PATH Magie. Es basiert auf Go und benötigt vorab keine installierte NodeJS Umgebung. Ich fand es immer seltsam NodeJS zu beötigen um einen NodeJS Mananger zu nutzen…
Allerdings muss man auf seinem Rechner Admin-Rechte besitzen. Sollte das nicht möglich sein, endet die Reise hier meines Wissens nach auch schon. Das ist aber bei den anderen Managern nicht anders.

## Installation und Einrichtung
Die Installation von nvm-windows ist recht simpel: Es gibt einen <a href="https://github.com/coreybutler/nvm-windows/releases"  target="_blank">Installer für die letzte stabile Version</a>. Diesen einfach herunterladen.

Bevor wir aber mit der Installation beginnen, müssen wir erstmal das aktuelle NodeJS und NPM deinstallieren. Das macht uns das Leben später sehr viel einfacher.

<strong>Wichtig:</strong> Sollte bereits eine .npmrc vorhanden sein, sichert den Inhalt lieber.

Sobald kein NodeJS/NPM (mehr) vorhanden ist, können wir einfach den Installer starten und nvm-windows installieren. Sobald das erledigt ist, können wir wieder ganz normal NodeJS in den gewünschten Versionen installieren.
Das geht ganz einfach über nvm install &lt;version&gt; &lt;arch&gt;:

~~~bash
> nvm install 12.8.0
Downloading node.js version 12.18.0 (64-bit)…
Complete
Creating \AppData\Roaming\nvm\tempDownloading npm version 6.14.4… Complete
Installing npm v6.14.4…Installation complete. If you want to use this version, type
nvm use 12.18.0
~~~

Jetzt noch die enstsprechenden Tools installieren, z.B. Gulp oder JSHint etc. pp. und man kann loslegen.

## Nutzen von mehreren NodeJS Versionen

So weit, so gut. Allerdings haben wir bisher ja immer noch nur eine Version am Laufen. Jetzt kommt nvm richtig ins Spiel! Mit nvm install können wir beliebig viele NodeJS/NPM-Versionen auf unserem System haben (weswegen wir den ganzen Spaß ja machen).
Mit nvm list kann man dann alle installierten Versionen und ihre Archetypen sehen und mit nvm use wechselt man zwischen den entsprechenden Versionen hin und her.

~~~bash
> nvm list
* 10.20.1 (Currently using 64-bit executable)
 10.19.0> nvm use 10.19.0
Now using node v10.19.0 (64-bit)
~~~

<strong>Achtung</strong>: Für jede installierte Version, müssen auch die globalen Tools installiert werden. Wir wechseln immer zwischen dem vollständig aufgesetzten NodeJS hin und her. Das bedeutet zwar etwas Aufwand beim Einrichten, bietet aber auch gleichzeitig höchstmögliche Flexibilität.

## Resümee

Für mich bot nvm-windows das einfachste Setup der Alternativen an. Auch im Alltag funktioniert es für mich super. Ich habe bisher keinerlei Unterschied zwischen einer “normalen” und der nvm Installation bemerkt.
