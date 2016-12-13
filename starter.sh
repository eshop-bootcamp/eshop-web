#!/bin/bash
# ps -ef | grep [n]ode |awk {'print $2'}|xargs kill -9
# sleep 5
nohup yarn start &
