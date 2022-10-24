# ----------------------------------------------------------------------
# application.py
# Author: John Hart
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

# example run page
@app.route('/example-run', methods=['GET'])
def example_run() :
    html = render_template('example-run.html')
    response = make_response(html)
    return response

# debug page
@app.route('/debug', methods=['GET'])
def debug() :
    html = render_template('debug.html')
    response = make_response(html)
    return response

# -------------------------- interact pages ----------------------------
# Content related to Interact feature of the application

# merge sort
@app.route('/merge-sort', methods=['GET'])
def merge_sort() :
    html = render_template('merge-sort.html')
    response = make_response(html)
    return response