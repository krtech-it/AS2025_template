from loguru import logger
from fastapi import HTTPException, Request, status
from fastapi.responses import JSONResponse
from starlette.middleware.base import BaseHTTPMiddleware, RequestResponseEndpoint
from starlette.responses import Response

from app.core.exceptions import (
    BadRequestError, NotFoundError, DBError, ConflictError, ForbiddenError,
)


class DomainErrorMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next: RequestResponseEndpoint) -> Response:
        try:
            response = await call_next(request)
            return response
        except BadRequestError as err:
            return JSONResponse(content={"err": str(err)}, status_code=status.HTTP_400_BAD_REQUEST)
        except ConflictError as err:
            return JSONResponse(content={"err": str(err)}, status_code=status.HTTP_409_CONFLICT)
        except ForbiddenError as err:
            return JSONResponse(content={"err": str(err)}, status_code=status.HTTP_403_FORBIDDEN)
        except DBError as err:
            msg = f"произошла ошибка при работе с данными: {err}"
            return JSONResponse(content={"err": msg}, status_code=status.HTTP_500_INTERNAL_SERVER_ERROR)
        except NotFoundError as err:
            msg = str(err) if str(err) else "Элемент не найден"
            return JSONResponse(content={"err": msg}, status_code=status.HTTP_404_NOT_FOUND)
        except HTTPException as err:
            raise err

        except Exception as err:
            logger.exception(err)
            return JSONResponse(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                content={"err": f"Произошла внутренняя ошибка сервера: {str(err)}"},
            )
