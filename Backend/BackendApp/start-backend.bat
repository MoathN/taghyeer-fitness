@echo off
echo Setting up Java environment...

rem Set Java 24 as the Java home
set "JAVA_HOME=C:\Program Files\Java\jdk-24"
set "PATH=%JAVA_HOME%\bin;%PATH%"

rem Download Maven wrapper if it doesn't exist
if not exist ".mvn\wrapper\maven-wrapper.jar" (
    echo Downloading Maven wrapper...
    "%JAVA_HOME%\bin\java" -jar .mvn\wrapper\maven-wrapper.jar
)

echo Starting Spring Boot application...
.\mvnw.cmd spring-boot:run

pause 