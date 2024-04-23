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

You can create data by performing a POST to `localhost:4567` with the JSON body

```json
{
	"id": 3,
	"name": "Acme Fresh Start Housing",
	"city": "Chicago",
	"state": "IL",
	"photo": "https://angular.io/assets/images/tutorials/faa/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
	"availableUnits": 4,
	"wifi": true,
	"laundry": true
}
```

See the list of locations by performing a GET to `http://localhost/locations`.

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
