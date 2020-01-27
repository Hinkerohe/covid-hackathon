# Template for a simple purescript aws lambda

## Development
```
# Build your application
npm install
npx spago build
```
This creates the handler. To invoke it locally: 
```
node -e "require('./index.js').handler({\"name\":\"Jan\"}, null)"
# or 
node ./test.js
```

## Deployment
```
npm prune --production
npm install --production
npm run bundle
npm run zip
npm install
cd cdk/
npx cdk deploy --profile <<your profile>>
```