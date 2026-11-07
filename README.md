# E-Collect

An e-waste collection website built with HTML, CSS, and JavaScript.

## Deployment

The homepage is `index.html`. Static hosts serve this file at `/`. Previously,
the only page was `bhca.html`, so the Vercel homepage returned a 404 even though
`/bhca.html` worked. The old page now redirects visitors to the homepage.

For Vercel, use framework preset **Other**, repository root as the root directory,
no build or install command, and the repository root as the output directory.
No dependencies or environment variables are required to display the site.

Production: https://e-collect-fawn.vercel.app/

## Pickup requests

Email delivery is not configured. The original form only displayed a success
message and cleared the fields; it did not save or send a request.
Submission is now visibly unavailable so visitors are not told a pickup was
requested when nothing was delivered.

To enable real requests, provide the receiving email address and connect a
delivery service or server endpoint. Enable the submit button only after the
endpoint works, and show success only after it accepts the request.
