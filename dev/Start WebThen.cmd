@echo off
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
 echo Node.js is needed for this optional local server. You can open ..\index.html directly instead.
 pause
 exit /b 1
)
node server.cjs --open
pause
