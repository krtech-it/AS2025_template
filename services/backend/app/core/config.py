import uuid

from pydantic import PostgresDsn
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    API_V1_STR: str = "/api/v1"
    PROJECT_NAME: str = "AS25_template"

    SERVICE_PG_HOST: str = "localhost"
    SERVICE_PG_PORT: int = "5433"
    SERVICE_PG_USER: str = "as_25"
    SERVICE_PG_PASSWORD: str = "as_25_admin"
    SERVICE_PG_DB: str = "as_25"

    class Config:
        case_sensitive = True
        # для прода поменять на "./.env"
        # env_file = "./.env.local"
        env_file = "./.env"


    @property
    def pg_conn(self) -> str:
        postgres_dsn = PostgresDsn(
            f"postgresql+asyncpg://{self.SERVICE_PG_USER}:{self.SERVICE_PG_PASSWORD}@{self.SERVICE_PG_HOST}:{self.SERVICE_PG_PORT}/{self.SERVICE_PG_DB}"
        )
        return postgres_dsn.__str__()


settings = Settings()
