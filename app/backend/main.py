from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.requests import Request

app = FastAPI()

app.mount("/static", StaticFiles(directory="app/frontend/static"), name="static")
app.mount("/scripts", StaticFiles(directory="app/frontend/scripts"), name="scripts")

templates = Jinja2Templates(directory="app/frontend/templates")


@app.get('/', response_class=HTMLResponse)
def hello_world(request: Request):
    return templates.TemplateResponse('index.html', {'request': request})



