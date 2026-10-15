@echo off
title Pep Web Studio - preview
cd /d "%~dp0"
if not exist node_modules (
  echo Installing for the first time, this takes a minute...
  call npm install
)
start "" http://localhost:4321/pep-web-studio/
call npm run dev
pause
