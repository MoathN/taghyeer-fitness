@echo off
echo Starting TAGHYEER Fitness Backend...

:: Set Java 8 environment
set JAVA_HOME=C:\Program Files\Java\jre1.8.0_351
set PATH=%JAVA_HOME%\bin;%PATH%

:: Verify Java version
echo Using Java:
java -version
echo.

:: Run the application
echo Starting application...
mvn spring-boot:run -Dspring-boot.run.jvmArguments="-Xms256m -Xmx512m"

pause 