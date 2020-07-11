provider "google" {
  project     = var.gcp.project_id
  region      = var.gcp.region
  zone        = var.gcp.zone
  credentials = file(var.gcp.application_cred_path)
}

provider "random" {}

// Terraform plugin for creating random ids
resource "random_id" "instance_id" {
  byte_length = 8
}

resource "google_compute_firewall" "gh-9564-firewall-externalssh" {
  name    = "gh-9564-firewall-externalssh"
  network = "default"

  allow {
    protocol = "tcp"
    ports    = ["22"]
  }

  source_ranges = ["0.0.0.0/0"]
  target_tags   = ["externalssh"]
}

// A single Compute Engine instance
resource "google_compute_instance" "default" {
  name         = "flask-vm-${random_id.instance_id.hex}"
  machine_type = "f1-micro"
  zone         = "us-west1-a"

  boot_disk {
    initialize_params {
      image = "debian-cloud/debian-9"
    }
  }

  lifecycle {
    create_before_destroy = false
  }

  metadata = {
    ssh-keys = "INSERT_USERNAME:${file("~/.ssh/id_rsa.pub")}"
  }

  network_interface {
    network = "default"

    access_config {
    }
  }

  metadata_startup_script = "sudo apt-get update; sudo apt-get install -yq git build-essential"
}

resource "google_compute_address" "vm_static_ip" {
  name = "terraform-static-ip"
}

output "ip" {
  value = google_compute_instance.default.network_interface.0.access_config.0.nat_ip
}

resource "google_compute_firewall" "default" {
  name    = "flask-app-firewall"
  network = "default"

  allow {
    protocol = "tcp"
    ports    = ["8000"]
  }
}
