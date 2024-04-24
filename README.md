A very simple demo Single Page Application. 

# Prequisities
* Install docker (allow volumes on the workspace you are serving from)
* To run UI without docker install node and angular (`npm install -g @angular/cli`)

# Quick start
To quickly run the application clone this repo, navigate to `infrastructure/docker-compose` and run 

* `docker-compose -f mock.compose.yaml up` to spin up the UI with mock backend 
* `docker-compose up` to spin up UI with real backend

* See the system up and running
Open `http://localhost:4000` to see the UI
Open `http://localhost:4567/locations` to see the Backend
* Move files from `mock_backend/locations/strategies` up one folder to be directly under `mock_backend/locations` and move `list.json` out to have the mock backend updated. Refresh UI to see the change

# Other configurations

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

  * Install dependencies

```
npm install
```
  * Host server
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
