Bug(s):

-   On every route home icon in active in navbar.

-   When the setting page loads for the first time, it makes request to Cloudnary without an image.

-   Rename all "image" to "photo".

-   Add loading animation in setting button while user is getting updated and show toast when user get updated.

-   After posting clear the form.

-   Refactor other component which uses `useImage` so that we don't need to have conditional in the the hook.

-   Change the send icon to button in `NewPost` component.

-   Add a custom hook to handle all the inputs.

-   Refactor profile page so that it uses `followUnFollow` from the hook directly.
