'use strict'

const app = require('../store.js')

const onLoginSuccess = function (data) {
  app.user = data.user
  console.log('Login Success!')
  console.log(data)
}

const onLoginError = function (response) {
  console.log(response)
}

const onChangePasswordSuccess = function () {
  console.log('You successfully updated the account!')
}

const onChangePasswordError = function (response) {
  console.log(response)
}

const onCreateAccountSuccess = function (data) {
  console.log('Create Account Success!')
  console.log(data)
}

const onCreateAccountError = function (response) {
  console.log(response)
}

const onSignOutSuccess = function () {
  console.log('Sign out successful!')
  app.user = null
}

const onSignOutError = function (response) {
  console.log(response)
}

const onCreateQuoteRequestSuccess = function (data) {
  console.log('passing quote request through ui.js')
  console.log(data)
}

const onCreateQuoteRequestError = function (response) {
  console.log(response)
}

const onDeleteQuoteRequestSuccess = function (data) {
  console.log('passing through delete QR in ui.js')
}

const onDeleteQuoteRequestError = function (response) {
  console.log(response)
}

const onUpdateQuoteRequestSuccess = function (data) {
  console.log('passing through update QR in ui.js')
}

const onUpdateQuoteRequestError = function (response) {
  console.log(response)
}

const onGetQuoteRequestSuccess = function (data) {
  console.log('passing through getQR in ui.js')
}

const onGetQuoteRequestError = function (response) {
  console.log(response)
}

const onGetAllQuoteRequestsSuccess = function (data) {
  console.log('passing through getAllQR in ui.js')
}

const onGetAllQuoteRequestsError = function (response) {
  console.log(response)
}

const onCreateRegistrationSuccess = function (data) {
  console.log('passing through createReg in ui.js')
}

const onCreateRegistrationError = function (response) {
  console.log(response)
}

const onDeleteRegistrationSuccess = function (data) {
  console.log('passing through deleteReg in ui.js')
}

const onDeleteRegistrationError = function (response) {
  console.log(response)
}

const onUpdateRegistrationSuccess = function (data) {
  console.log('passing through updateReg in ui.js')
}

const onUpdateRegistrationError = function (response) {
  console.log(response)
}

const onGetRegistrationSuccess = function (data) {
  console.log('passing through getReg in ui.js')
}

const onGetRegistrationError = function (response) {
  console.log(response)
}

const onGetAllRegistrationsSuccess = function (data) {
  console.log('passing through getAllReg in ui.js')
}

const onGetAllRegistrationsError = function (response) {
  console.log(response)
}

module.exports = {
  onLoginSuccess,
  onLoginError,
  onChangePasswordSuccess,
  onChangePasswordError,
  onCreateAccountSuccess,
  onCreateAccountError,
  onSignOutSuccess,
  onSignOutError,
  onCreateQuoteRequestSuccess,
  onCreateQuoteRequestError,
  onDeleteQuoteRequestSuccess,
  onDeleteQuoteRequestError,
  onUpdateQuoteRequestSuccess,
  onUpdateQuoteRequestError,
  onGetQuoteRequestSuccess,
  onGetQuoteRequestError,
  onGetAllQuoteRequestsSuccess,
  onGetAllQuoteRequestsError,
  onCreateRegistrationSuccess,
  onCreateRegistrationError,
  onDeleteRegistrationSuccess,
  onDeleteRegistrationError,
  onUpdateRegistrationSuccess,
  onUpdateRegistrationError,
  onGetRegistrationSuccess,
  onGetRegistrationError,
  onGetAllRegistrationsSuccess,
  onGetAllRegistrationsError
}
