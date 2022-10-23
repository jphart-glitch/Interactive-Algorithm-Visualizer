# ----------------------------------------------------------------------
# application.py
# ----------------------------------------------------------------------

# ------------------- standard library imports -------------------------
from flask import Flask, request, make_response, redirect, url_for
from flask import render_template

#-----------------------------------------------------------------------

app = Flask(__name__, template_folder='.', static_url_path="/static",
static_folder='./static')

# --------------------------- error pages ------------------------------

@app.errorhandler(404)
def page_not_found(e):
    return render_template('errorpage.html',
    err = "Page does not Exist."), 404

# -------------------------- landing pages -----------------------------
# Content related to index/routing pages

# home page
@app.route('/', methods=['GET'])
@app.route('/index', methods=['GET'])
def index() :
    html = render_template('index.html')
    response = make_response(html)
    return response

# interact page
@app.route('/interact', methods=['GET'])
def interact() :
    html = render_template('interact.html')
    response = make_response(html)
    return response