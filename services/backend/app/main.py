from fastapi import FastAPI
from loguru import logger
from starlette.middleware.cors import CORSMiddleware

from app.api.api import router
from app.core.config import settings
from app.middleware.errors import DomainErrorMiddleware

logger.add(
    "./logs/as25_template/logs.log",
    level="INFO",
    format="{time} - {name} - {level} - {message} - {module}",
    rotation="50 MB",
    retention=10,
)

app = FastAPI(
    title=settings.PROJECT_NAME,
    debug=True
    )


def _init_middlewares(app: FastAPI) -> None:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["GET", "POST", "PUT", "DELETE", "PATCH"],
        allow_headers=["*"],
    )

    app.add_middleware(DomainErrorMiddleware)


_init_middlewares(app)
app.include_router(router, prefix=settings.API_V1_STR)
