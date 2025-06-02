@echo off
echo Testing MySQL Connection...
echo Server: localhost
echo Port: 3307
echo User: root
echo.

set MYSQL_PATH=C:\Program Files\MySQL\MySQL Server 8.0\bin
if exist "%MYSQL_PATH%\mysql.exe" (
  "%MYSQL_PATH%\mysql" -h localhost -P 3307 -u root -p -e "SELECT 1 as Test_Connection;"
) else (
  echo MySQL client not found at %MYSQL_PATH%
  echo Please make sure MySQL is installed correctly
)

echo.
echo If you see "Test_Connection: 1" above, your connection is working
echo If prompted for password, enter your root password
echo.
pause 