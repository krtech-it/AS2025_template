from sqlalchemy.ext.asyncio import AsyncSession
from fastapi import Depends
from app.core.postgres import DBWork, get_db


async def get_db_work(session: AsyncSession = Depends(get_db)):
    return DBWork(session)

