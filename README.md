# chaosdorf landing page

The live site will be available here: https://chaosdorf.de

## How to view locally

In 95% of the cases, it's sufficient to open the `index.html` in your browser.

Yet, for some operations like the search, PHP is needed. Fortunately for us, we can use the _Apache httpd_ webserver.
This gets especially easy with a container tool like [Podman] or [Docker]. Due to it's open source nature, we recommend
Podman.

For example, with Podman present on your system, it's possible to view the webpage on
`http://localhost:8080` by invoking the following command:

```shell
podman run -dit -p 8080:80 -v "$PWD/public":/usr/local/apache2/htdocs/:z docker.io/library/httpd:2.4
```

(`podman` is interchangeable with `docker`.)

[Podman]: https://podman.io/
[Docker]: https://www.docker.com/
