﻿Remove-Item –path ./client –recurse
& java -jar swagger-codegen-cli.jar generate -i https://api.cloudmersive.com/swagger/api/currency -l javascript -o client -c packageconfig.json
#(Get-Content ./client/package.json).replace('v1', '1.0.1') | Set-Content ./client/package.json
(Get-Content ./client/package.json).replace('"superagent": "3.5.2"', '"superagent": "3.7.0"') | Set-Content ./client/package.json
(Get-Content ./client/README.md).replace('This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:', '[Cloudmersive Currency API](https://www.cloudmersive.com/currency-api) helps you retrieve exchange rates and convert prices between currencies easily.') | Set-Content ./client/README.md
(Get-Content ./client/README.md).replace('- Build package: io.swagger.codegen.languages.JavascriptClientCodegen', '') | Set-Content ./client/README.md
& npm build ./client

Copy-Item ./client/README.md ./README.md