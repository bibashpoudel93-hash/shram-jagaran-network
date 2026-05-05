from pydantic import BaseModel
from typing import List
from datetime import datetime

class ReactionBase(BaseModel):
    type: str

class ReactionCreate(ReactionBase):
    pass

class Reaction(ReactionBase):
    id: int
    post_id: int

    class Config:
        from_attributes = True

class CommentBase(BaseModel):
    content: str

class CommentCreate(CommentBase):
    pass

class Comment(CommentBase):
    id: int
    post_id: int
    created_at: datetime

    class Config:
        from_attributes = True

class PostBase(BaseModel):
    title: str
    content: str

class PostCreate(PostBase):
    pass

class Post(PostBase):
    id: int
    created_at: datetime
    comments: List[Comment] = []
    reactions: List[Reaction] = []

    class Config:
        from_attributes = True
