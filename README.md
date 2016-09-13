# React Apollo RHL3 Problem

## Install
```
git clone git@github.com:HriBB/react-apollo-rhl-problem.git
cd react-apollo-rhl-problem
npm install
```

## Run

Open two terminals and run server and client

```
npm run server:dev
npm run client:dev
```

## Test

```
open http://localhost:3000/admin/gallery
```

Click on `Add Gallery` then try to change some text in `client/components/Admin/Gallery/AddGallery/AddGallery.js`.
First time it does not work. All subsequent changes work as expected. It's not such a big problem, but it is pretty annoying.

## Thoughts

I tried to do some quick debugging, but I have absolutely no idea what's going on. Could be a problem in my code or RHL3.
If I render `AddGallery` component in the content area (not inside modal), it works as expected.
