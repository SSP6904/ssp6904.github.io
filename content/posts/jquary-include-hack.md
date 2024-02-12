---
title: 'JQuary Include Hack'
date: 2024-02-12T14:06:55Z
draft: false
---

This post will show a very intresting hack that you can do with JQuary. This can be useful when you want to include html files inside your webpage.

## What is Include
Include is a hidden tag that does not exsit inside of HTML. It mostly is on some popular languages like PHP, Jekyll, EJS, and many more. This however is mostly not a HTML element. If it was a element, the tag would look like this:

```html
<include src="/something.html"></include>
```

Some workarounds that people use for this trick is using Iframes. However, those are a bit more tricky to set up. An iframe for this would be:

```html
<iframe src="/something.html"></iframe>
```

For this, we need a differnet way on getting this feature to work. We can JQuary to get a include tag that can fetch a html document after loading the page.

## How it works
JQuary has two features that can load and fetch any file on your web server. Some include:

- load
- fetch
- attr
- each

These are mostly used to fetch a file and display on the web page you are accessing. JQuary does not have a include function, but we can make one with a bit of Javascript so we get this function. An example for this would be:

```html
<body>
<header>
     <div data-includeHTML="_HeaderPartial.html"></div>
</header>
<main>
    <div>
        This is the main content, from the index file
    </div>
</main>
<footer>
    <div data-includeHTML="_FooterPartial.html"></div>
</footer>
<script>
    $(document).ready(function () {
        $("div[data-includeHTML]").each(function () {                
            $(this).load($(this).attr("data-includeHTML"));
        });
    });
</script>
</body>
```

The header partial would be:

```html
<div>
    <h1>This is the Header from its _Partial file</h1>
</div>
```

The footer partial would be:

```html
<strong>And this is from the footer partial file</strong>
```

## Sources
- [Stackoverflow](https://stackoverflow.com/questions/15320801/how-to-include-an-html-file-with-jquery/47657066#47657066)
- [w3schools](https://www.w3schools.com/tags/tag_iframe.ASP)