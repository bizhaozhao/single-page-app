A very simple demo Single Page Application. 

* Install dependencies

```
npm install
```

* Run real service that can store and return house location data

```
docker run -v $(pwd):/home/app/serve -p 4567:4567 --rm -it registry.gitlab.com/samuel-garratt/schemaless_rest_api
```

* Run the single page application

```
ng run
```

* Run mock backend 

```
docker run -v $(pwd):/home/app/serve -p 4567:4567 --rm -it registry.gitlab.com/samuel-garratt/file_sv
```

