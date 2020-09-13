# cloudmersive-currency-api-client

CloudmersiveCurrencyApiClient - JavaScript client for cloudmersive-currency-api-client
The currency APIs help you retrieve exchange rates and convert prices between currencies easily.
[Cloudmersive Currency API](https://www.cloudmersive.com/currency-api) helps you retrieve exchange rates and convert prices between currencies easily.

- API version: v1
- Package version: 1.2.0


## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install cloudmersive-currency-api-client --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your cloudmersive-currency-api-client from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('cloudmersive-currency-api-client')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var CloudmersiveCurrencyApiClient = require('cloudmersive-currency-api-client');

var defaultClient = CloudmersiveCurrencyApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix['Apikey'] = "Token"

var api = new CloudmersiveCurrencyApiClient.CurrencyExchangeApi()

var source = "source_example"; // {String} Source currency three-digit code (ISO 4217), e.g. USD, EUR, etc.

var destination = "destination_example"; // {String} Destination currency three-digit code (ISO 4217), e.g. USD, EUR, etc.

var sourcePrice = 1.2; // {Number} Input price, such as 19.99 in source currency


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.currencyExchangeConvertCurrency(source, destination, sourcePrice, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.cloudmersive.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CloudmersiveCurrencyApiClient.CurrencyExchangeApi* | [**currencyExchangeConvertCurrency**](docs/CurrencyExchangeApi.md#currencyExchangeConvertCurrency) | **POST** /currency/exchange-rates/convert/{source}/to/{destination} | Converts a price from the source currency into the destination currency
*CloudmersiveCurrencyApiClient.CurrencyExchangeApi* | [**currencyExchangeGetAvailableCurrencies**](docs/CurrencyExchangeApi.md#currencyExchangeGetAvailableCurrencies) | **POST** /currency/exchange-rates/list-available | Get a list of available currencies and corresponding countries
*CloudmersiveCurrencyApiClient.CurrencyExchangeApi* | [**currencyExchangeGetExchangeRate**](docs/CurrencyExchangeApi.md#currencyExchangeGetExchangeRate) | **POST** /currency/exchange-rates/get/{source}/to/{destination} | Gets the exchange rate from the source currency into the destination currency


## Documentation for Models

 - [CloudmersiveCurrencyApiClient.AvailableCurrency](docs/AvailableCurrency.md)
 - [CloudmersiveCurrencyApiClient.AvailableCurrencyResponse](docs/AvailableCurrencyResponse.md)
 - [CloudmersiveCurrencyApiClient.ConvertedCurrencyResult](docs/ConvertedCurrencyResult.md)
 - [CloudmersiveCurrencyApiClient.ExchangeRateResult](docs/ExchangeRateResult.md)


## Documentation for Authorization


### Apikey

- **Type**: API key
- **API key parameter name**: Apikey
- **Location**: HTTP header

