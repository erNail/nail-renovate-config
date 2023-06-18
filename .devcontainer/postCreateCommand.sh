#!/bin/bash
pip install -r requirements.txt
yarn global add renovate@35.127.1
echo "export PATH=$PATH:$(yarn global bin)" >>~/.bashrc
