/**
 * currencyapi
 * The currency APIs help you retrieve exchange rates and convert prices between currencies easily.
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AvailableCurrencyResponse', 'model/ConvertedCurrencyResult', 'model/ExchangeRateResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AvailableCurrencyResponse'), require('../model/ConvertedCurrencyResult'), require('../model/ExchangeRateResult'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveCurrencyApiClient) {
      root.CloudmersiveCurrencyApiClient = {};
    }
    root.CloudmersiveCurrencyApiClient.CurrencyExchangeApi = factory(root.CloudmersiveCurrencyApiClient.ApiClient, root.CloudmersiveCurrencyApiClient.AvailableCurrencyResponse, root.CloudmersiveCurrencyApiClient.ConvertedCurrencyResult, root.CloudmersiveCurrencyApiClient.ExchangeRateResult);
  }
}(this, function(ApiClient, AvailableCurrencyResponse, ConvertedCurrencyResult, ExchangeRateResult) {
  'use strict';

  /**
   * CurrencyExchange service.
   * @module api/CurrencyExchangeApi
   * @version 1.2.0
   */

  /**
   * Constructs a new CurrencyExchangeApi. 
   * @alias module:api/CurrencyExchangeApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the currencyExchangeConvertCurrency operation.
     * @callback module:api/CurrencyExchangeApi~currencyExchangeConvertCurrencyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConvertedCurrencyResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Converts a price from the source currency into the destination currency
     * Automatically converts the price in the source currency into the destination currency using the latest available currency exchange rate data.
     * @param {String} source Source currency three-digit code (ISO 4217), e.g. USD, EUR, etc.
     * @param {String} destination Destination currency three-digit code (ISO 4217), e.g. USD, EUR, etc.
     * @param {Number} sourcePrice Input price, such as 19.99 in source currency
     * @param {module:api/CurrencyExchangeApi~currencyExchangeConvertCurrencyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ConvertedCurrencyResult}
     */
    this.currencyExchangeConvertCurrency = function(source, destination, sourcePrice, callback) {
      var postBody = sourcePrice;

      // verify the required parameter 'source' is set
      if (source === undefined || source === null) {
        throw new Error("Missing the required parameter 'source' when calling currencyExchangeConvertCurrency");
      }

      // verify the required parameter 'destination' is set
      if (destination === undefined || destination === null) {
        throw new Error("Missing the required parameter 'destination' when calling currencyExchangeConvertCurrency");
      }

      // verify the required parameter 'sourcePrice' is set
      if (sourcePrice === undefined || sourcePrice === null) {
        throw new Error("Missing the required parameter 'sourcePrice' when calling currencyExchangeConvertCurrency");
      }


      var pathParams = {
        'source': source,
        'destination': destination
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = ['application/json', 'text/json'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = ConvertedCurrencyResult;

      return this.apiClient.callApi(
        '/currency/exchange-rates/convert/{source}/to/{destination}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the currencyExchangeGetAvailableCurrencies operation.
     * @callback module:api/CurrencyExchangeApi~currencyExchangeGetAvailableCurrenciesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AvailableCurrencyResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of available currencies and corresponding countries
     * Enumerates available currencies and the countries that correspond to these currencies.
     * @param {module:api/CurrencyExchangeApi~currencyExchangeGetAvailableCurrenciesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AvailableCurrencyResponse}
     */
    this.currencyExchangeGetAvailableCurrencies = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = AvailableCurrencyResponse;

      return this.apiClient.callApi(
        '/currency/exchange-rates/list-available', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the currencyExchangeGetExchangeRate operation.
     * @callback module:api/CurrencyExchangeApi~currencyExchangeGetExchangeRateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExchangeRateResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the exchange rate from the source currency into the destination currency
     * Automatically gets the exchange rate from the source currency into the destination currency using the latest available currency exchange rate data.
     * @param {String} source Source currency three-digit code (ISO 4217), e.g. USD, EUR, etc.
     * @param {String} destination Destination currency three-digit code (ISO 4217), e.g. USD, EUR, etc.
     * @param {module:api/CurrencyExchangeApi~currencyExchangeGetExchangeRateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExchangeRateResult}
     */
    this.currencyExchangeGetExchangeRate = function(source, destination, callback) {
      var postBody = null;

      // verify the required parameter 'source' is set
      if (source === undefined || source === null) {
        throw new Error("Missing the required parameter 'source' when calling currencyExchangeGetExchangeRate");
      }

      // verify the required parameter 'destination' is set
      if (destination === undefined || destination === null) {
        throw new Error("Missing the required parameter 'destination' when calling currencyExchangeGetExchangeRate");
      }


      var pathParams = {
        'source': source,
        'destination': destination
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = ExchangeRateResult;

      return this.apiClient.callApi(
        '/currency/exchange-rates/get/{source}/to/{destination}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
