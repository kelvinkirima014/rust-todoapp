
use std::fmt::format;
use std::time::Duration;


use sqlx::{ Pool, Postgres };
use sqlx::postgres::PgPoolOptions;

const POSTGRES_HOST: &str = "localhost";
const POSTGRES_DB_NAME: &str = "postgres";
const POSTGRES_ROOT_USER: &str = "postgres";
const POSTGRES_PASSWD: &str = "postgres";


pub type Db = Pool<Postgres>;

pub async fn init_db() -> Result<Db, sqlx::Error> {
    new_db_pool(POSTGRES_HOST, POSTGRES_DB_NAME, POSTGRES_ROOT_USER, POSTGRES_PASSWD, 1).await
}

async fn new_db_pool(host: &str, db_name: &str, user: &str, password: &str, max_connections: u32) -> Result<Db, sqlx::Error> {
    let connection_string = format!("postgres://{}:{}@{}/{}", user, password, host, db_name);
    PgPoolOptions::new()
        .max_connections(max_connections)
        .idle_timeout(Duration::from_millis(500))
        .connect(&connection_string)
        .await
}

#[cfg(test)]
#[path = "../_tests/model_db.rs"]
mod tests;