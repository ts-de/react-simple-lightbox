# react-image-lightbox
![npm](https://img.shields.io/npm/dt/react-simple-lightbox.svg)

**react-image-lightbox** is a simple react component that renders a container with a thumbnail image that can be expanded in a lightbox.

# Simple Image Lightbox as a React Component
<p align="center">
  <img src="./example/preview.gif">
</p>

## Installation
```sh
$ yarn add react-simple-lightbox
```

## Usage
```jsx
import Lightbox from "react-simple-lightbox";

<Lightbox
  style={{
    maxHeight: "5rem",
    overflow: "hidden",
    ...moreStyles
  }}
>
  <img src="https://someexampleimagedomain.com/image123" alt="Some Fancy Example Image" />
</Lightbox>
```

## Features
- click image to maximize and minimize
- press `ESC` to close image lightbox
- pass custom styles to `Lightbox`

### TODO
- [ ] pass custom classes
- [ ] add jest and write tests
- [ ] integrate [singel](https://github.com/diegohaz/singel)
- [ ] use [styled-components](https://github.com/styled-components/styled-components)
