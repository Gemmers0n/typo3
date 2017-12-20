//set security headers
config.additionalHeaders{
10.header = Content-Security-Policy: default-src 'none'; style-src 'self' 'unsafe-inline'; img-src 'self'; script-src 'self' 'unsafe-inline'; font-src 'self' https://fonts.googleapis.com; frame-ancestors 'none'; base-uri 'none'; form-action 'none'
//11.header = X-Content-Security-Policy: default-src 'none'; style-src 'self' 'unsafe-inline'; img-src 'self'; script-src 'self' 'unsafe-inline'; font-src 'self' https://fonts.googleapis.com
//12.header = X-Webkit-CSP: default-src 'none'; style-src 'self' 'unsafe-inline'; img-src 'self'; script-src 'self' 'unsafe-inline'; font-src 'self' https://fonts.googleapis.com
13.header = Referrer-Policy: same-origin
}
