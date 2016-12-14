#!/bin/bash
lsof -t -i :3131 | xargs kill -9
sleep 5
nohup yarn start &> yarn-log.log &
