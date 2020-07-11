gcloud iam service-accounts create terraform
# Where [PROJECT_ID] is the id of the project you're installing Gitpod on
gcloud projects add-iam-policy-binding spartan-impact-279014 --member "serviceAccount:terraform@spartan-impact-279014.iam.gserviceaccount.com" --role "roles/owner"
# This gets the JSON
gcloud iam service-accounts keys create account.json --iam-account terraform@spartan-impact-279014.iam.gserviceaccount.com
