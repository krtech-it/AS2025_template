from app.core.postgres import DBWork


class BaseManager:
    def __init__(self, db_work: DBWork, **kwargs):
        self.db_work = db_work
        super().__init__(**kwargs)
