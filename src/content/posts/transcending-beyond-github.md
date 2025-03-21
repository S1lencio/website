---
title: "Transcending beyond Github (Pages)"
date: "2025-03-05"
---

Since its inception, this website has been hosted with GitHub Pages. It's a great service, it's free, and it integrates well with the Repository.
Deployments were handled automatically with a workflow I created with the help of the Internet and ChatGPT. The script can be found [here](https://github.com/S1lencio/website/blob/c1ef217b42f2b8cf6b722158172b8b452e2daefe/.github/workflows/deploy.yml).
It worked nicely... for about two months. In that time I did not update the website, and therefore no deployments were created.
With no warning or notification the SSL certificate generated by GitHub expired, and the website was no longer accessible.

Big no-no.

So Cloudflare Pages it is. It handles building and deploying for you, so no need for black magic. It has a nice dashboard and analytics, it's much faster too.
One problem though: It uses an old node version by default, causing build to fail. Setting the variable "NODE_VERSION" to "18.18.0" (or whatever version you need) fixes this though.

So yay, website be buzzing again.

Still don't expect anything here though.
