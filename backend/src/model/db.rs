use std::fmt::format;
use std::time::Duration;

use sqlx::{ Pool, Postgres };
use sqlx::postgres::PgPoolOptions;


pub type Db = Pool<Postgres>;

async fn new_db_pool(host: &str, db_name: &str, user: &str, password: &str, max_connections: u32) -> Result<Db, sqlx::Error> {
    let connection_string = format!("postgres://{}:{}@{}/{}", user, password, host, db_name);
    PgPoolOptions::new()
        .max_connections(max_connections)
        .connect_timeout(Duration::from_millis(500))
        .connect(&connection_string)
        .await
}