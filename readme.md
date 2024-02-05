# Logseq Gallery

## Features
Implement a gallery renderer for Logseq. like Notion

## Roadmap
- [] Support Tags under title
- [] Support generate cover from content
- [] Support generate cover from first image in content
- [] Add Settings

## Usage
```
{{renderer :gallery, <page query>, <title>}}
```

![](./imgs/screenshot.png)

the Note should have `cover` or `banner` property.  
for example:
`cover:: ../assets/IMG_2694_1706277077580_0.jpeg`

and the url is compatible with file path(`../assets/IMG_2694_1706277077580_0.jpeg`) and markdown url(`![untitle](../assets/IMG_2694_1706277077580_0.jpeg)`).