A very simple demo Single Page Application. 

* Install dependencies

```
npm install
```

* Run real service that can store and return house location data

```
docker run -v $(pwd):/home/app/serve -p 4567:4567 --rm -it registry.gitlab.com/samuel-garratt/schemaless_rest_api
```

or to run on different port so UI can switch between this and the mock

```
docker run -v $(pwd):/home/app/serve -p 3000:4567 --rm -it registry.gitlab.com/samuel-garratt/schemaless_rest_api
```

* Run the single page application

Set `apiUrl` environment variable to change where backend is. 

```
ng serve
```

* Run mock backend 

```
docker run -v $(pwd):/home/app/serve -p 4567:4567 --rm -it registry.gitlab.com/samuel-garratt/file_sv
```

* Run unit tests

```
ng test
```

* Run e2e tests
Ensure a backend is up at localhost:4567 and then run

```

```
