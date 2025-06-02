$modelFiles = Get-ChildItem -Path "src/main/java/com/example/BackendApp/model" -Filter "*.java"

foreach ($file in $modelFiles) {
    $content = Get-Content $file.FullName -Raw
    $content = $content -replace "import jakarta\.persistence\.\*;", "import javax.persistence.*;"
    Set-Content $file.FullName $content
}

Write-Host "Updated imports in all model files." 