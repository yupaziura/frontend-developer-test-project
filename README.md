# How to Run

First install dependencies:

```bash
npm install
```

Then run like this:

```bash
npm start
```

Easy.

## How does it work?

The application uses create react application scripts (with a little thing on top of it – [craco](https://github.com/dilanx/craco) to be able to use paths aliases feature. I.e. to be able to do:

```javascript
import x from 'app/components/x'
```

Instead of:

```javascript
import x from '../../../components/x'
```
