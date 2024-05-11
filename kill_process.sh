#!/bin/bash
process=$(ps aux | grep "node sample_node_server.js" | grep -v grep | awk '{print $2}')
if [ $process -gt 1 ]; then
	  kill -9 $process
fi
