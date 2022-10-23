# Pure Javascirpt file picker and upload
This respository is about how to open file picker and take user input ( files ) and then upload them to backend ( PHP ) using Vanilla Javascript ( No Library ) and without the traditional html input tag.

## How Javascript makes it possible
1. All these things is possible because of File System Access API.
2. This API is used here to open the file picker and take the user input ( file ) using its function showOpenFilePicker().
3. Then, we store the user input in a variable and append it to a formdata object.
4. Finally, we use Fetch API to make post request with formdata as body and upload the file to our backend.

## Note
File System Access API only works in secure context, which means it will not going to work in HTTP websites.

## Use cases
In real world we come to many such situations where we want to take user input in files but wheather the user input should be taken or not depends on certain event or some request's response. For example, we have a profile picture and when user clicks on it file picker should open but when only when the user has changed his profile picture in last 7 days. this is a hypothetical situation but you can relate with this.

## Resources used
[Learn more about File System Access API  on MDN](https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API)

[Learn more about showOpenFilePicker() on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/showOpenFilePicker)
