# React Elements

## Installation

Currently via Github Repo and manual build only

## Build

Using yarn

    yarn build

Using npm

    npm run build

## Testing

The repository contains a webpack configuration for a testpage using webpack-dev-server.

    yarn dev

or

    npm run dev

The site is being served from the `public` directory and use `/src/testpage.tsx` for experiments.

## Usage

    import React = require('react');
    import ReactDOM = require('react-dom")
    import * as Elements from '/path/to/react_elements_package.js'

    const header = "Hello World";

    const data = ["One", "Two", "Three"];

    const List = () => (
        <Elements.List
        header={header}
        data={data}
        />
    );

    ReactDOM.render(<List />, document.getElementById("react-root"));
