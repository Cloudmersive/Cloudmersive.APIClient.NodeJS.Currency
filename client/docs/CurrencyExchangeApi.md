# CloudmersiveCurrencyApiClient.CurrencyExchangeApi

All URIs are relative to *https://api.cloudmersive.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**currencyExchangeConvertCurrency**](CurrencyExchangeApi.md#currencyExchangeConvertCurrency) | **POST** /currency/exchange-rates/convert/{source}/to/{destination} | Converts a price from the source currency into the destination currency
[**currencyExchangeGetAvailableCurrencies**](CurrencyExchangeApi.md#currencyExchangeGetAvailableCurrencies) | **POST** /currency/exchange-rates/list-available | Get a list of available currencies and corresponding countries
[**currencyExchangeGetExchangeRate**](CurrencyExchangeApi.md#currencyExchangeGetExchangeRate) | **POST** /currency/exchange-rates/get/{source}/to/{destination} | Gets the exchange rate from the source currency into the destination currency


<a name="currencyExchangeConvertCurrency"></a>
# **currencyExchangeConvertCurrency**
> ConvertedCurrencyResult currencyExchangeConvertCurrency(source, destination, sourcePrice)

Converts a price from the source currency into the destination currency

Automatically converts the price in the source currency into the destination currency using the latest available currency exchange rate data.

### Example
```javascript
var CloudmersiveCurrencyApiClient = require('cloudmersive-currency-api-client');
var defaultClient = CloudmersiveCurrencyApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveCurrencyApiClient.CurrencyExchangeApi();

var source = "source_example"; // String | Source currency three-digit code (ISO 4217), e.g. USD, EUR, etc.

var destination = "destination_example"; // String | Destination currency three-digit code (ISO 4217), e.g. USD, EUR, etc.

var sourcePrice = 1.2; // Number | Input price, such as 19.99 in source currency


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.currencyExchangeConvertCurrency(source, destination, sourcePrice, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source** | **String**| Source currency three-digit code (ISO 4217), e.g. USD, EUR, etc. | 
 **destination** | **String**| Destination currency three-digit code (ISO 4217), e.g. USD, EUR, etc. | 
 **sourcePrice** | **Number**| Input price, such as 19.99 in source currency | 

### Return type

[**ConvertedCurrencyResult**](ConvertedCurrencyResult.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="currencyExchangeGetAvailableCurrencies"></a>
# **currencyExchangeGetAvailableCurrencies**
> AvailableCurrencyResponse currencyExchangeGetAvailableCurrencies()

Get a list of available currencies and corresponding countries

Enumerates available currencies and the countries that correspond to these currencies.

### Example
```javascript
var CloudmersiveCurrencyApiClient = require('cloudmersive-currency-api-client');
var defaultClient = CloudmersiveCurrencyApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveCurrencyApiClient.CurrencyExchangeApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.currencyExchangeGetAvailableCurrencies(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**AvailableCurrencyResponse**](AvailableCurrencyResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="currencyExchangeGetExchangeRate"></a>
# **currencyExchangeGetExchangeRate**
> ExchangeRateResult currencyExchangeGetExchangeRate(source, destination)

Gets the exchange rate from the source currency into the destination currency

Automatically gets the exchange rate from the source currency into the destination currency using the latest available currency exchange rate data.

### Example
```javascript
var CloudmersiveCurrencyApiClient = require('cloudmersive-currency-api-client');
var defaultClient = CloudmersiveCurrencyApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveCurrencyApiClient.CurrencyExchangeApi();

var source = "source_example"; // String | Source currency three-digit code (ISO 4217), e.g. USD, EUR, etc.

var destination = "destination_example"; // String | Destination currency three-digit code (ISO 4217), e.g. USD, EUR, etc.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.currencyExchangeGetExchangeRate(source, destination, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source** | **String**| Source currency three-digit code (ISO 4217), e.g. USD, EUR, etc. | 
 **destination** | **String**| Destination currency three-digit code (ISO 4217), e.g. USD, EUR, etc. | 

### Return type

[**ExchangeRateResult**](ExchangeRateResult.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

