# React Apollo RHL3 Problem

## Install
```
git clone git@github.com:HriBB/react-apollo-rhl-problem.git
cd react-apollo-rhl-problem
npm install
```

## Run server and client

```
npm run server:dev
npm run client:dev
```

## Test steps

1. open http://localhost:3000/admin/gallery
2. Click on `Add Gallery`
3. Change some text in `client/components/Admin/Gallery/AddGallery/AddGallery.js`.
4. First hot reload does not work. All subsequent reloads work as expected.

It's not a big problem, but it is pretty annoying.

## Thoughts

I tried to do some quick debugging, but TBH I have no idea what's going on. Could be a problem in my code or RHL3.
If I render `AddGallery` component in the content area (not inside modal), it works as expected.
