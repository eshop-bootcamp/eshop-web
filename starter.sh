#!/bin/bash
ps -ef | grep [n]ode |awk {'print $2'}|xargs kill -9
yarn start | tee /dev/null &
