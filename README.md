# GlotPic

**One image in. Every language out.**
이미지 속 글자를, 세계의 언어로.

GlotPic translates the text *inside* an image into many languages at once, keeping the original design. Drop in a thumbnail, banner or poster and get one file per language, same size, same layout.

GlotPic 은 이미지 안의 글자를 여러 언어로 한 번에 번역합니다. 디자인은 그대로 두고 글자만 바꿉니다. 썸네일·배너·포스터 한 장을 넣으면 언어마다 한 장씩, 같은 크기·같은 자리로 나옵니다.

Website: **https://glotpic.now100k.com** · a [now100k studio](https://now100k.com) product

## What it does

| Original (ko) | English | 日本語 |
|---|---|---|
| ![](assets/demo/web/sample_ko.jpg) | ![](assets/demo/web/sample_en.jpg) | ![](assets/demo/web/sample_ja.jpg) |

| 中文 | العربية | Deutsch |
|---|---|---|
| ![](assets/demo/web/sample_zh-CN.jpg) | ![](assets/demo/web/sample_ar.jpg) | ![](assets/demo/web/sample_de.jpg) |

| Français | Español | Русский | ไทย |
|---|---|---|---|
| ![](assets/demo/web/sample_fr.jpg) | ![](assets/demo/web/sample_es.jpg) | ![](assets/demo/web/sample_ru.jpg) | ![](assets/demo/web/sample_th.jpg) |

Every image above was produced by GlotPic from the single Korean original.

- Only the text is erased and rewritten. Photos, logos and backgrounds are untouched.
- Font size, color, highlight color and alignment follow the original. Text shrinks only when the translation is longer, and multi-line titles keep their spacing.
- Right-to-left scripts (Arabic) and Thai / Chinese / Japanese typography are supported.
- Uncertain text is left as is. A wrong guess never ruins the image.

## Integrated automation

GlotPic is a pipeline, not just an upload tool.

```
[your system]  save post / banner  →  [GlotPic]  detect · translate · re-typeset  →  [your storage / CDN]
                                                                                        {id}_{lang}.png
```

- The moment a post or banner is saved, it is queued. Nobody touches it after that.
- Translated files land in your own storage under a simple name rule, so any site can serve the right language with a few lines of front-end code.
- Languages are configured per site.
- In production today on Korean church websites (sermon thumbnails, slide banners, logos).

## Status

| Stage | Scope | State |
|---|---|---|
| 0 | Landing page (this repo) + integration by request | live |
| 1 | Self-service upload tool `/translate` with shareable result links | planned |
| 2 | Accounts, credits, pricing, public API docs | planned |

## This repository

Static site for **glotpic.now100k.com**, deployed with Cloudflare Pages. No build step.

```
index.html          landing page (ko / en toggle, light / dark)
assets/style.css
assets/app.js       language + theme switch
assets/demo/        sample poster and its translations (self-made, free to reuse)
```

Run locally: open `index.html`, or `npx wrangler pages dev .`

The service itself (worker, queue, engine) lives in a private repository. This repo only shows *what* GlotPic does, not *how*.

## Contact

Integration inquiries: **real21c@gmail.com**
