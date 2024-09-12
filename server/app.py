# Import Dependencies
from flask import Flask, request, jsonify
from connection import database

def create_app():
    app = Flask(__name__)
