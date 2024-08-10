---
title: 'jQuary Include Hack'
date: 2024-02-12T14:06:55Z
draft: false
---

This post will show an intresting hack that you can do with jQuary. This can be useful when you want to include html files inside your webpage.

<!-- more -->

## What even is Include?
Include is a hidden tag that does not exsit inside of HTML. It mostly is built on some popular languages like PHP, Jekyll, NodeJS, and many more. This, however, is mostly not a HTML element. If it was an element, the tag would look something like this:

```html
<include src="/something.html"></include>
```

Some workarounds that people use for this trick is using Iframes. However, those are a bit more tricky to set up. An iframe for this would be something like:

```html
<iframe src="/something.html"></iframe>
```

For this, we need a differnet way on getting this feature to work. We can use the jQuary libary to get a include tag that can fetch a HTML file after loading the page. Keep in mind that this is **not** server-sided, and only when the user loads the page with the script inside of it.

## How does it work?
jQuary has some functions that can load and fetch any file on your web server. Some may include:

- load
- fetch
- attr
- each

!!! Protip

    There already is an existing function that does a include function. This hack mostly uses the `load` function, but if you don't want to have a lot of code like this, you can use the code below for an easier approach.

    ```javascript
    // Quick example
    $(document).ready(function() {
        $('#myDIV').load('/myhtmlfile.html');
    });
    ```


These are mostly part of the API that libary uses. Using these, we can fetch for an HTML file and then display it as a template. An example like this would be:

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

## Post sources
- [Stackoverflow](https://stackoverflow.com/questions/15320801/how-to-include-an-html-file-with-jquery/47657066#47657066)
- [w3schools](https://www.w3schools.com/tags/tag_iframe.ASP)