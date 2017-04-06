# Beau JWT
A Plugin to attach jwt tokens to request made by [Beau](http://github.com/seich/beau)

## Install

	npm install -g beau-jwt

## Usage
Add beau-jwt as a plugin to your beau.yml file.

	host: http://localhost:10080

	plugins:
		- beau-jwt:
			data:
				userId: 412
			secret: 'shhh.'

You can specify the data and secret to be used as part of the token.

You can also skip the token generation by adding `skip_jwt: true` to your request like this:

	GET /test:
		skip_jwt: false
		alias: test

## License
Copyright 2017 David Sergio Díaz

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
