#!/bin/bash
lsof -t -i :3131 | xargs kill -9