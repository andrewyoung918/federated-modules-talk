# Federated Modules: The Future of Code Sharing

## A Fast, Opinionated, and Partially Accurate History

### How Browsers Work

Then, now, and into the foreseable future, the steps browsers use to populate the page follows the same basic steps.

```mermaid
flowchart TD
    Navigation["`**Navigation**
    The user types in a url and presses *Enter*`"]
    Response["`**Response**
    Response headers and content recieved
    `"]
    Parsing["`**Parsing**
    Response Content converted into DOM nodes 
    `"]
    Render["`**Render**
    style, layout, paint
    Puts the DOM on the screen`"]
    Interactivity["`**Interactivity**
    User can enter values into inputs and click buttons.`"]

    Navigation -->|"`server connection established
    GET request made`"| Response
    Response -->|"As soon as first chunk of data recieved"| Parsing
    Parsing -->|"Only when Parsing is completed"| Render
    Render -->|"Only when Render is complete"| Interactivity
```

### Chirper INC
Chirper is an Imaginary Narrative Company, initially founded in 1893 to ask the general public to write down descriptions of the chirps of birds for the chance to win a collectable pin. The data Chirper gathers is then sold on to Ornithologists.

>As a narrative company in a story about javascript bundling, chirper's adoption of technology will ignore most other internet technologies

#### 1993: www.chirper.com/index.html
Chirper moves online, offering a webpage where users can send descriptions of chirps over the world wide web.

Before JavaScript Webpages loaded as **static** HTML. The pages were not **dynamic**, but they could still be **interactive**.

In the early days, interactive web applications meant requesting a full new page to update content based user actions.

```mermaid
flowchart LR
    FP[Full Page Load] --> ED[Fill inputs] --> S[Click Submit] --> PL[Load Full New Page]
```
In 1993, The internet was slow, but still sent small files much faster than the mail. 


#### Inline JS
Javascript is initially introduced in 1994 supporting inline scripts and webpages can be interactive.
Chirper was an early adopter, adding an alert 