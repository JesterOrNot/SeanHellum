variable "gcp" {
  type = object({
    project_id            = string
    application_cred_path = string
    zone                  = string
    region                = string
  })
}
