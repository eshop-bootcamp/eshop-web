#!/bin/bash
ps -ef | grep [n]ode | awk{'print $2'} | xargs kill -9
nohup yarn start 2>outputfile &
