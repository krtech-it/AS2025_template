class NotFoundError(Exception):
    pass


class BadRequestError(Exception):
    pass


class DBError(Exception):
    pass


class ConflictError(Exception):
    pass


class ForbiddenError(Exception):
    pass


class ActivityNotAvailableError(ConflictError):
    pass
