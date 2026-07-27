@echo off
cd /d "%~dp0"
echo Starting deployment...
echo.
powershell.exe -ExecutionPolicy Bypass -Command "& 'deploy.ps1' -Message 'update website'"
echo.
pause
