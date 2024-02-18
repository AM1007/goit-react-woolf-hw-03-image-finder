## Preparing for work

1. Make sure that the LTS version of Node.js is installed on the computer.
   [Download and install](https://nodejs.org/en/) if necessary.
2. Install the project's basic dependencies using the `npm install` command.
3. Start the development mode, execute the `npm start` command.
4. Go to [http://localhost:3000](http://localhost:3000) in the browser. This
   page will automatically reload after saving the changes project files.

---

## Image search

Write an image search application by keyword. See the preview of the working
application at the link.

[Preview](https://drive.google.com/file/d/1oXCGyiq4uKwW0zzraZLKk4lh3voBlBzZ/view)

Create `<Searchbar>`, `<ImageGallery>`, `<ImageGalleryItem>`, `<Loader>`,
`<Button>` and `<Modal>` components. You can utilize the pre-existing component
styles found in the
[styles.css](https://minhaskamal.github.io/DownGit/#/home?url=https:%2F%2Fgithub.com%2Fgoitacademy%2Freact-homework%2Fblob%2Fmaster%2Fhomework-03%2Fimage-finder%2Fstyles.css)
file and adjust them to your preferences if needed.

### Instructions for the Pixabay API

Sign up to receive a private access key. Then, for your HTTP requests, utilize
[Pixabay's public image search service](https://pixabay.com/api/docs/).

The URL string of the HTTP request.

```html
https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
```

The Pixabay API supports pagination, with the default `page` parameter set to
`1`. Each response will contain 12 objects, specified by the `per_page`
parameter. Remember to reset the `page` value to `1` whenever searching for a
new keyword.

The API response includes an array of objects, and you're only interested in the
following properties.

- `id` - unique identifier
- `webformatURL` - link to a small image for the card list
- `largeImageURL` - a link to a large image for a modal window

### Description of the `<Searchbar>` component

The component accepts a single `onSubmit` prop, which should be a function used
to pass the input value during form submission. It creates a DOM element with
the following structure.

```html
<header class="searchbar">
  <form class="form">
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
```

### Description of the `<ImageGallery>` component

List of image cards. Creates a DOM element of the following structure.

```html
<ul class="gallery">
  <!-- <li> set with images -->
</ul>
```

### Description of the `<ImageGalleryItem>` component

A list item component with an image. Creates a DOM element of the following
structure.

```html
<li class="gallery-item">
  <img src="" alt="" />
</li>
```

### Description of the `<Button>` component

When the `Load more` button is clicked, the next batch of images should be
loaded and rendered along with the previous ones. The button should only render
when there are images loaded. If the image array is empty, the button should not
be rendered.

### Description of the `<Loader>` component

The spinner component is displayed while the images are loading. Use any ready
made component like
[react-loader-spinner](https://github.com/mhnpd/react-loader-spinner) or any
other.

### Description of the `<Modal>` component

Clicking on a gallery item should open a modal window with a dark overlay,
displaying a large version of the image. The modal window should close either by
pressing the `ESC` key or by clicking on the overlay.

The appearance should resemble the functionality of this
[VanillaJS plugin](https://basiclightbox.electerious.com/). Instead of a white
modal window, an image should be rendered. Animation is not required.

```html
<div class="overlay">
  <div class="modal">
    <img src="" alt="" />
  </div>
</div>
```
