#![feature(proc_macro_hygiene, decl_macro)]
#[macro_use]
extern crate rocket;
use std::io::Result;
use rocket::response::NamedFile;

#[get("/")]
fn index() -> Result<NamedFile> {
    NamedFile::open("site/index.html")
}
#[get("/skills")]
fn skills() -> Result<NamedFile> {
    NamedFile::open("site/skills.html")
}
fn main() {
    rocket::ignite().mount("/", routes![index, skills]).launch();
}