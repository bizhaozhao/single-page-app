resource "docker_container" "web" {
  name  = "spa-web-demo"
  image = docker_image.web.image_id
  ports {
	internal = 4000
	external = 4000
  }
  env = ["apiUrl=http://backend:4567"]
  networks_advanced {
	name = docker_network.spa_demo.name
  }
}

resource "docker_container" "backend" {
  name  = "backend"
  image = docker_image.backend.image_id
  ports {
	internal = 4567
	external = 4567
  }
  networks_advanced {
	name = docker_network.spa_demo.name
  }
}

resource "docker_network" "spa_demo" {
  name = "spa-demo"
}

resource "docker_image" "web" {
  name = "spa-web-demo:latest"
  build {
    context = "../.."
    tag     = ["web:latest"]
  }
}

resource "docker_image" "backend" {
  name = "registry.gitlab.com/samuel-garratt/single-page-app-demo:mock_backend"
}
