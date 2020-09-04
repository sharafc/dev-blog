---
title: NodeJS-Umgebung prüfen und stabilisieren mit check-engine
date: 2020-06-18
publishdate: 2020-06-18
draft: false
description: NodeJS-Umgebung prüfen und stabilisieren mit check-engine
tags:
  - NodeJS
  - check-engine
  - NPM
  - JavaScript
---

In größeren Teams und Projekten, steht man manchmal unter der Herausforderung, dass auf unterschiedlichen Systemen unterschiedliche NodeJS/NPM-Versionen installiert sein können. Sollte man zusätzlich noch mit <a href="/blog/nvm-running-on-windows">unterschiedlichen NodeJS und NPM Versionen</a> in unterschiedlichen Teilprojekten arbeiten, können die lokal installierten Versionen sehr schnell auseinander gehen.
<!-- more -->
<img src="/src/img/data_flow.jpeg" alt="">

Um das zu vermeiden, kann man ein kleines NPM-Werkzeug namens <a href="https://github.com/mohlsen/check-engine" target="_blank">check-engine</a> einsetzen. Damit kann man über eine Konfiguration in der package.json die benötigte Version definieren und bei jedem gulp Lauf überprüfen, ob die Umgebung zu der Anforderung passt.

## check-engine installieren

check-engine zu installieren könnte einfacher nicht sein:
~~~
> npm install check-engine
~~~
und dann einfach ein:
~~~
> check-engine [pfad_zur_package.json|optional]
~~~

Das war es auch schon. Gibt man keine explizite package.json an, nimmt check-engine einfach die im aktuellen Verzeichnis.
Allerdings ist es natürlich spannender und sinnvoller, check-engine in den Build-Prozess einzubinden.

## check-engine in einen Build einbinden

Die programmatische Variante findet sich in der Dokumentation von check-engine, da gibt es nichts hinzuzufügen.
Daher zeige ich im folgenden ein Beispiel, wie ich das Ganze in einem Liferay-Projekt realisiert habe.

gulpfile.js:
~~~javascript
'use strict';
const gulp = require('gulp');
const checkEngine = require('check-engine');
const liferayThemeTasks = require('liferay-theme-tasks');
liferayThemeTasks.registerTasks({
  gulp: gulp,
  hookFn: function (gulp) {
    gulp.hook('before:build', function (done) {
      checkEngine().then((result) => {
        if (result.message.type === 'error') {
          console.error(result.message.text);
          process.exit();
        } else {
          done();
        }
      });
    });
    // lots of other things here
  }
});
~~~

package.json:
~~~javascript
{
  "devDependencies": {
    "check-engine": "^1.8.1",
    "gulp": "3.9.1",
    "liferay-theme-tasks": "8.0.2"
  },
 
  "engines": {
    "node": "10.19.0"
  },
  "author": "Me",
  "main": "package.json",
  // rest of definitions
}
~~~

Dabei hänge ich mich in die Liferay theme-tasks über die hook-Methode ein um vor dem eigentlich Build-Schritt die NodeJS-Version zu prüfen. Sollte hier etwas nicht stimmen, bricht der Build direkt ab (<a href="https://de.wikipedia.org/wiki/Fail-Fast" target="_blank">Fail Fast</a>).

## Resümee

check-engine ist wirklich sehr einfach zu nutzen und in den eigenen Buildprozess einzubauen. Es ist ein weiterer kleiner Helfer um die Buildsysteme stabil zu halten bzw. bei Fehlern sprechender zu reagieren.
