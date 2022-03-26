import json, random
from fastapi import FastAPI
from fastapi.encoders import jsonable_encoder 
from pydantic import BaseModel


class Idea(BaseModel):
    type: str
    tagline: str
    stack: str
    full_desc: str

data_file = open('./data.json', 'r')
data = json.load(data_file)
data_file.close()
data_file = open('./data.json', 'w')
random.seed()
app = FastAPI()


@app.get("/project/")
async def project():
    idea = data[random.randint(0, len(data)-1)]
    return idea


@app.put("/new/")
async def add_project(idea:Idea):
    data.append(jsonable_encoder(idea))
    return idea

@app.on_event("shutdown")
def shutdown_event():
    json.dump(jsonable_encoder(data), data_file, indent=2)