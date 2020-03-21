#![feature(proc_macro_hygiene, decl_macro)]
#[macro_use]
extern crate rocket;
use rocket::response::NamedFile;
use std::io::Result;
use std::path::{Path, PathBuf};

#[get("/")]
fn index() -> Result<NamedFile> {
    NamedFile::open("www/index.html")
}

#[get("/skills")]
fn skills() -> Result<NamedFile> {
    NamedFile::open("www/skills.html")
}

#[get("/work")]
fn work() -> Result<NamedFile> {
    NamedFile::open("www/work.html")
}

#[catch(404)]
fn error_not_found() -> Result<NamedFile> {
    NamedFile::open("www/404.html")
}

#[get("/asset/<asset..>")]
fn assets(asset: PathBuf) -> Option<NamedFile> {
    NamedFile::open(Path::new("www/assets/").join(asset)).ok()
}

#[get("/www/<file..>")]
fn files(file: PathBuf) -> Option<NamedFile> {
    NamedFile::open(Path::new("www/").join(file)).ok()
}

fn main() {
    rocket::ignite()
        .mount("/", routes![index, skills, work, files, assets])
        .register(catchers![error_not_found])
        .launch();
}
